app_name = "compass_admin"
app_title = "Compass Admin"
app_publisher = "COMPASS"
app_description = "Admin interface of COMPASS on top of Keycloak"
app_license = "AGPL-3.0-or-later"
required_apps = ["compass_sso"]

# Two entries in the overview and the apps menus: the account of everyone and, for a Company Admin, the user management.
add_to_apps_screen = [
	{"name": "compass_admin", "logo": "/assets/frappe/images/framework.png", "title": "My account", "route": "/admin"},
	{
		"name": "compass_admin_users",
		"logo": "/assets/frappe/images/framework.png",
		"title": "User management",
		"route": "/admin/users",
		"has_permission": "compass_admin.apps_screen.may_manage_users",
	},
]
