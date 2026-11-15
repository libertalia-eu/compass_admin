app_name = "compass_admin"
app_title = "Compass Admin"
app_publisher = "COMPASS"
app_description = "Admin interface of COMPASS on top of Keycloak"
app_license = "AGPL-3.0"
required_apps = ["compass_sso"]

# The entry of the overview and the apps menus; the page itself shows only what the level of the user may change.
add_to_apps_screen = [
	{"name": "compass_admin", "logo": "/assets/frappe/images/framework.png", "title": "Account", "route": "/admin"}
]
