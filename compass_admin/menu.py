"""The menu on the left of both admin apps (COMPASS REQ-088): one entry per page, more come with the groups and roles."""
import frappe

APPS = {
	"account": ("My account", [("My account", "/admin")]),
	"users": ("User management", [("Users", "/admin/users")]),
}


def layout(context, app: str) -> None:
	"""Puts the title of the app and its menu into the context of a page."""
	title, entries = APPS[app]
	context.app_title = frappe._(title)
	context.menu = [
		{"label": frappe._(label), "url": url, "active": url == frappe.local.request.path.rstrip("/")} for label, url in entries
	]
	context.csrf_token = frappe.sessions.get_csrf_token()
