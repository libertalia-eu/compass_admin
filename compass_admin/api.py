"""The calls of the user management (COMPASS REQ-088) and of groups and roles (REQ-089), made by the page /admin/users."""
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


def _flag(value: int) -> bool:
	return bool(frappe.utils.cint(value))


@frappe.whitelist(methods=["POST"])
def list_roles() -> list[dict]:
	"""The roles an admin hands out: user and admin of each app, and Company Admin."""
	return keycloak_admin.list_roles()


@frappe.whitelist(methods=["POST"])
def get_user_roles(user_id: str) -> dict:
	"""The roles a user holds directly and the groups they belong to."""
	return keycloak_admin.get_user_roles(_checked(validation.user_id, user_id))


@frappe.whitelist(methods=["POST"])
def set_user_role(user_id: str, client: str, role: str, granted: int) -> None:
	"""Gives a user a role (granted 1) or takes it away (0); Keycloak refuses roles the admin does not hold. Not Company Admin from oneself."""
	name_of_client, name = _checked(lambda value: validation.role(*value), (client, role))
	keycloak_admin.set_user_role(_checked(validation.user_id, user_id), name_of_client, name, _flag(granted))


@frappe.whitelist(methods=["POST"])
def list_groups() -> list[dict]:
	"""The groups of the realm."""
	return keycloak_admin.list_groups()


@frappe.whitelist(methods=["POST"])
def get_group(group_id: str) -> dict:
	"""A group with its members and roles."""
	return keycloak_admin.get_group(_checked(validation.group_id, group_id))


@frappe.whitelist(methods=["POST"])
def create_group(name: str) -> None:
	"""Creates an empty group."""
	keycloak_admin.create_group(_checked(validation.group_name, name))


@frappe.whitelist(methods=["POST"])
def rename_group(group_id: str, name: str) -> None:
	"""Renames a group."""
	keycloak_admin.rename_group(_checked(validation.group_id, group_id), _checked(validation.group_name, name))


@frappe.whitelist(methods=["POST"])
def delete_group(group_id: str) -> None:
	"""Deletes a group; its members stay, but lose what the group gave them."""
	keycloak_admin.delete_group(_checked(validation.group_id, group_id))


@frappe.whitelist(methods=["POST"])
def set_group_member(group_id: str, user_id: str, member: int) -> None:
	"""Adds a user to a group (member 1) or removes them (0)."""
	keycloak_admin.set_group_member(_checked(validation.group_id, group_id), _checked(validation.user_id, user_id), _flag(member))


@frappe.whitelist(methods=["POST"])
def set_group_role(group_id: str, client: str, role: str, granted: int) -> None:
	"""Gives a group a role (granted 1) or takes it away (0); the members have it at their next sign-in."""
	name_of_client, name = _checked(lambda value: validation.role(*value), (client, role))
	keycloak_admin.set_group_role(_checked(validation.group_id, group_id), name_of_client, name, _flag(granted))
