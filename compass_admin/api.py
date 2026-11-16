"""The calls of the user management (COMPASS REQ-088), made by the page /admin/users."""
import frappe
from frappe import _

from compass_admin import keycloak_admin, validation


def _checked(check, value):
	try:
		return check(value)
	except ValueError as error:
		frappe.throw(_(str(error)), frappe.ValidationError)


@frappe.whitelist(methods=["POST"])
def list_users() -> list[dict]:
	"""The users of the realm; Keycloak refuses anyone without the right to manage users."""
	return keycloak_admin.list_users()


@frappe.whitelist(methods=["POST"])
def get_user(user_id: str) -> dict:
	"""The data of one user for the edit view."""
	return keycloak_admin.get_user(_checked(validation.user_id, user_id))


@frappe.whitelist(methods=["POST"])
def update_user(user_id: str, email: str, first_name: str, last_name: str, locale: str, require_2fa: int) -> None:
	"""Changes email, names and language of a user and whether they must set up 2FA at the next sign-in; the user name stays."""
	keycloak_admin.update_user(
		_checked(validation.user_id, user_id),
		_checked(validation.email, email),
		_checked(validation.name, first_name),
		_checked(validation.name, last_name),
		_checked(validation.locale, locale),
		bool(frappe.utils.cint(require_2fa)),
	)


@frappe.whitelist(methods=["POST"])
def create_user(username: str, email: str, first_name: str, last_name: str, password: str, locale: str) -> None:
	"""Creates an enabled user with a password that stays valid (the user does not have to change it) and the language they see."""
	keycloak_admin.create_user(
		_checked(validation.username, username),
		_checked(validation.email, email),
		_checked(validation.name, first_name),
		_checked(validation.name, last_name),
		_checked(validation.password, password),
		_checked(validation.locale, locale),
	)


@frappe.whitelist(methods=["POST"])
def set_user_enabled(user_id: str, enabled: int) -> None:
	"""Deactivates (enabled 0) or activates (enabled 1) a user: a deactivated user cannot sign in."""
	keycloak_admin.set_enabled(_checked(validation.user_id, user_id), bool(frappe.utils.cint(enabled)))


@frappe.whitelist(methods=["POST"])
def delete_user(user_id: str) -> None:
	"""Deletes a user for good; not the own account."""
	keycloak_admin.delete_user(_checked(validation.user_id, user_id))


@frappe.whitelist(methods=["POST"])
def send_password_reset(user_id: str) -> None:
	"""Emails the user a link (valid for 24 hours) to choose a new password; the admin never sees it."""
	keycloak_admin.send_password_reset(_checked(validation.user_id, user_id))


@frappe.whitelist(methods=["POST"])
def require_user_2fa(user_id: str) -> None:
	"""Makes the user set up a second factor at the next sign-in."""
	keycloak_admin.require_2fa(_checked(validation.user_id, user_id))
