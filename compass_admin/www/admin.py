"""The app "Admin" (COMPASS REQ-087, REQ-088): a frappe-ui single-page app with the menu entries "My account" and "User management"."""
import frappe
import frappe.apps
from frappe.translate import get_messages_for_boot
from frappe.utils.oauth import get_oauth2_authorize_url

from compass_admin import keycloak_admin
from compass_admin.links import account_links
from compass_sso import keycloak
from compass_sso.apps_screen import window_name

no_cache = 1
PATH = "/admin"


def get_context(context):
	if frappe.session.user == "Guest":
		frappe.throw(frappe._("Sign in to manage your account"), frappe.PermissionError)
	user = frappe.get_cached_doc("User", frappe.session.user)
	links = account_links(get_oauth2_authorize_url(keycloak.PROVIDER, PATH), keycloak.realm_url(), keycloak_admin.has_totp())
	context.boot = frappe._dict(
		csrf_token=frappe.sessions.get_csrf_token(),
		can_manage_users=_may_manage_users(),
		locale=user.language or "en",
		apps=[{"title": app["title"], "logo": app["logo"], "route": app["route"], "window": window_name(app)} for app in frappe.apps.get_apps() if app["name"] != "compass_admin"],
		account={"fullname": user.full_name, "email": user.email, "links": links},
		translated_messages=get_messages_for_boot(),
	)


def _may_manage_users() -> bool:
	"""A session without Keycloak tokens (the Administrator) cannot manage users."""
	try:
		return keycloak_admin.can_manage_users()
	except frappe.AuthenticationError:
		return False
