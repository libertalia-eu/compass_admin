# compass_admin

Frappe app for COMPASS: the admin interface on top of Keycloak. Each signed-in person finds the page `/admin`; what it shows depends on the level of the user (user, App Admin, Company Admin).

- `www/admin`: links to the own account settings (COMPASS REQ-087). Password and the setup of a second factor are application-initiated actions of Keycloak (`kc_action=UPDATE_PASSWORD`, `CONFIGURE_TOTP`) on the sign-in URL of the Social Login Key `keycloak`; Keycloak returns to `/admin` afterwards. Removing a second factor and editing the profile link to the Keycloak account console. The account REST API is not used (it has no published reference).
- `www/admin/users`: the user management of a Company Admin (COMPASS REQ-088): list, create, deactivate, activate and delete users, reset a password, require a second factor. The own account cannot be deactivated or deleted. The calls use the access token of the signed-in person, so Keycloak decides who may do it (fine-grained admin permissions for the role Company Admin; the page shows for `view-users`).
- Administration of users and roles follows (COMPASS REQ-088 to REQ-092), with the token of the signed-in admin.

Needs `compass_sso` (Social Login Key `keycloak`, `compass_sso.keycloak`). Decision record: COMPASS `xaden/decisions/2026-11-14-admin-oberflaeche-auf-keycloak.md`.

Tests: `./run-tests.sh`.

## Licence

AGPL-3.0-or-later, see [LICENSE](LICENSE). If you change the app and let others use it over a network, you must offer them the source of your version. Contributions are welcome under the DCO, see [CONTRIBUTING.md](CONTRIBUTING.md).
