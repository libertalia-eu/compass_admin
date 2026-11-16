"""The user management (COMPASS REQ-088): the Company Admin finds, creates, deactivates and activates users."""
import frappe

from compass_admin import keycloak_admin, menu

no_cache = 1


def get_context(context):
	if frappe.session.user == "Guest" or not keycloak_admin.can_manage_users():
		frappe.throw(frappe._("You may not manage users."), frappe.PermissionError)
	menu.layout(context, "users")
	context.title = frappe._("Users")
	context.users = keycloak_admin.list_users()
