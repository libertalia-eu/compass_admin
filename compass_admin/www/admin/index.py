"""The admin interface (COMPASS REQ-087): each signed-in person finds the links to their own account settings."""
import frappe
from frappe.utils.oauth import get_oauth2_authorize_url

from compass_admin import keycloak_admin
from compass_admin.links import account_links
from compass_sso import keycloak

no_cache = 1
PATH = "/admin"


def get_context(context):
	if frappe.session.user == "Guest":
		frappe.throw(frappe._("Sign in to manage your account"), frappe.PermissionError)
	context.title = frappe._("Account")
	context.links = [
		{**link, "label": frappe._(link["label"])}
		for link in account_links(get_oauth2_authorize_url(keycloak.PROVIDER, PATH), keycloak.realm_url())
	]
	if _may_manage_users():
		context.links.append({"key": "users", "label": frappe._("Manage users"), "url": "/admin/users", "returns": False})


def _may_manage_users() -> bool:
	"""A session without Keycloak tokens (the Administrator of Frappe) has no user management."""
	try:
		return keycloak_admin.can_manage_users()
	except frappe.AuthenticationError:
		return False
