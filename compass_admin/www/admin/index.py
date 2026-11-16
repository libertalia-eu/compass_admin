"""The app "My account" (COMPASS REQ-087): each signed-in person finds the links to their own account settings."""
import frappe
from frappe.utils.oauth import get_oauth2_authorize_url

from compass_admin import keycloak_admin, menu
from compass_admin.links import account_links
from compass_sso import keycloak

no_cache = 1
PATH = "/admin"


def get_context(context):
	if frappe.session.user == "Guest":
		frappe.throw(frappe._("Sign in to manage your account"), frappe.PermissionError)
	menu.layout(context, "account")
	context.title = frappe._("My account")
	context.links = [
		{**link, "label": frappe._(link["label"])}
		for link in account_links(get_oauth2_authorize_url(keycloak.PROVIDER, PATH), keycloak.realm_url(), keycloak_admin.has_totp())
	]

