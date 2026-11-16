app_name = "compass_admin"
app_title = "Compass Admin"
app_publisher = "COMPASS"
app_description = "Admin interface of COMPASS on top of Keycloak"
app_license = "AGPL-3.0-or-later"
required_apps = ["compass_sso"]

# One tile on the overview and in the apps menus; the menu inside the app shows "User management" only to a Company Admin.
add_to_apps_screen = [
	{"name": "compass_admin", "logo": "/assets/frappe/images/framework.png", "title": "Admin", "route": "/admin"},
]

website_route_rules = [{"from_route": "/admin/<path:app_path>", "to_route": "admin"}]
