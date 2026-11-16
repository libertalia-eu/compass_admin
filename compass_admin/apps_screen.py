"""Who sees the app "User management" in the app chooser (COMPASS REQ-088)."""
import frappe

from compass_admin import keycloak_admin


def may_manage_users() -> bool:
	"""Hook `has_permission` of the entry. The sign-in session of Keycloak decides, as on the page itself; a session without Keycloak tokens (the Administrator) does not see the entry."""
	if frappe.session.user == "Guest":
		return False
	try:
		return keycloak_admin.can_manage_users()
	except frappe.AuthenticationError:
		return False
