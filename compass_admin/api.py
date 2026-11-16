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
def create_user(username: str, email: str, first_name: str, last_name: str, password: str) -> None:
	"""Creates an enabled user with a password that stays valid (the user does not have to change it)."""
	keycloak_admin.create_user(
		_checked(validation.username, username),
		_checked(validation.email, email),
		_checked(validation.name, first_name),
		_checked(validation.name, last_name),
		_checked(validation.password, password),
	)


@frappe.whitelist(methods=["POST"])
def set_user_enabled(user_id: str, enabled: int) -> None:
	"""Deactivates (enabled 0) or activates (enabled 1) a user: a deactivated user cannot sign in."""
	keycloak_admin.set_enabled(_checked(validation.user_id, user_id), bool(frappe.utils.cint(enabled)))
