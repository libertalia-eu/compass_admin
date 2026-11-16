"""Calls to the Keycloak admin API with the token of the signed-in person (COMPASS REQ-088): Keycloak decides what the person may do."""
import base64
import json

import frappe
import requests
from frappe import _

from compass_sso import keycloak, store

TIMEOUT_SECONDS = 5
MANAGE_USERS = "manage-users"
CONFIGURE_TOTP = "CONFIGURE_TOTP"


def _access_token() -> str:
	remembered = store.recall(frappe.session.sid)
	if not remembered:
		frappe.throw(_("The Keycloak session has ended. Sign in again."), frappe.AuthenticationError)
	try:
		tokens = keycloak.refresh(remembered["refresh_token"])
	except keycloak.KeycloakSessionEnded:
		frappe.throw(_("The Keycloak session has ended. Sign in again."), frappe.AuthenticationError)
	except requests.RequestException:
		frappe.throw(_("Keycloak is not reachable."), frappe.ValidationError)
	store.remember(frappe.session.sid, remembered["keycloak_sid"], tokens["refresh_token"], remembered["checked_at"])
	return tokens["access_token"]


def _roles_of(access_token: str) -> list[str]:
	"""The roles of the realm-management client."""
	return _claims_of(access_token).get("resource_access", {}).get("realm-management", {}).get("roles", [])


def _admin_url(path: str) -> str:
	return keycloak.realm_url().replace("/realms/", "/admin/realms/") + path


def _request(method: str, path: str, access_token: str, **kwargs) -> requests.Response:
	try:
		response = requests.request(
			method, _admin_url(path), headers={"Authorization": f"Bearer {access_token}"}, timeout=TIMEOUT_SECONDS, **kwargs
		)
	except requests.RequestException:
		frappe.throw(_("Keycloak is not reachable."), frappe.ValidationError)
	if response.status_code == 403:
		frappe.throw(_("You may not manage users."), frappe.PermissionError)
	if response.status_code == 409:
		frappe.throw(_("A user with this name or email address exists already."), frappe.DuplicateEntryError)
	if response.status_code == 400:
		frappe.throw(response.json().get("errorMessage") or _("Keycloak refused the request."), frappe.ValidationError)
	response.raise_for_status()
	return response


def _claims_of(access_token: str) -> dict:
	"""The payload of a token that comes straight from Keycloak over TLS, so it needs no signature check."""
	payload = access_token.split(".")[1]
	return json.loads(base64.urlsafe_b64decode(payload + "=" * (-len(payload) % 4)))


def can_manage_users() -> bool:
	return MANAGE_USERS in _roles_of(_access_token())


def _refuse_own_account(user_id: str, access_token: str) -> None:
	"""An admin who deactivates or deletes the own account locks themselves out."""
	if user_id == _claims_of(access_token)["sub"]:
		frappe.throw(_("You cannot do this to your own account."), frappe.ValidationError)


def list_users() -> list[dict]:
	users = _request("GET", "/users?briefRepresentation=true&max=500", _access_token()).json()
	return sorted(
		({key: user.get(key) for key in ("id", "username", "email", "enabled")} for user in users),
		key=lambda user: user["username"],
	)


def has_totp() -> bool:
	"""Whether the signed-in person has set up a second factor, from the account API of Keycloak (the token of a user with the default roles of the realm may call it). Any failure reads as no second factor: the link to remove it stays hidden."""
	try:
		response = requests.get(
			keycloak.realm_url() + "/account/credentials",
			headers={"Authorization": f"Bearer {_access_token()}", "Accept": "application/json"},
			timeout=TIMEOUT_SECONDS,
		)
		response.raise_for_status()
		return any(c["type"] == "otp" and c.get("userCredentialMetadatas") for c in response.json())
	except (requests.RequestException, ValueError, KeyError):
		return False


def create_user(username: str, email: str, first_name: str, last_name: str, password: str, locale: str) -> None:
	_request(
		"POST",
		"/users",
		_access_token(),
		json={
			"username": username,
			"email": email,
			"firstName": first_name,
			"lastName": last_name,
			"enabled": True,
			"attributes": {"locale": [locale]},
			"credentials": [{"type": "password", "value": password, "temporary": False}],
		},
	)


def set_enabled(user_id: str, enabled: bool) -> None:
	access_token = _access_token()
	if not enabled:
		_refuse_own_account(user_id, access_token)
	_request("PUT", f"/users/{user_id}", access_token, json={"enabled": enabled})


def delete_user(user_id: str) -> None:
	access_token = _access_token()
	_refuse_own_account(user_id, access_token)
	_request("DELETE", f"/users/{user_id}", access_token)


def reset_password(user_id: str, password: str) -> None:
	"""Sets a password that stays valid: the user does not have to change it."""
	_request(
		"PUT",
		f"/users/{user_id}/reset-password",
		_access_token(),
		json={"type": "password", "value": password, "temporary": False},
	)


def require_2fa(user_id: str) -> None:
	"""Adds the required action that makes the user set up a second factor at the next sign-in; other required actions stay."""
	access_token = _access_token()
	actions = _request("GET", f"/users/{user_id}", access_token).json().get("requiredActions", [])
	if CONFIGURE_TOTP not in actions:
		_request("PUT", f"/users/{user_id}", access_token, json={"requiredActions": [*actions, CONFIGURE_TOTP]})
