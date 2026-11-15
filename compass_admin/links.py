"""The links of the page `/admin` to Keycloak (COMPASS REQ-087): no call to the account REST API, only jumps to Keycloak pages."""
from urllib.parse import urlencode

UPDATE_PASSWORD = "UPDATE_PASSWORD"
CONFIGURE_TOTP = "CONFIGURE_TOTP"


def with_action(authorize_url: str, action: str) -> str:
	"""The sign-in URL of the Social Login Key plus an application-initiated action: Keycloak runs the action, then returns to the page kept in the OAuth state."""
	return f"{authorize_url}{'&' if '?' in authorize_url else '?'}{urlencode({'kc_action': action})}"


def account_links(authorize_url: str, realm_url: str) -> list[dict]:
	"""The three links of every signed-in user. Removing a second factor and editing the profile happen on the pages of the Keycloak account console, because removing needs the id of the credential (`delete_credential:<id>`), which only the account REST API lists."""
	console = f"{realm_url.rstrip('/')}/account/#"
	return [
		{"key": "password", "label": "Change password", "url": with_action(authorize_url, UPDATE_PASSWORD), "returns": True},
		{"key": "totp-set-up", "label": "Set up two-factor authentication", "url": with_action(authorize_url, CONFIGURE_TOTP), "returns": True},
		{"key": "totp-remove", "label": "Remove two-factor authentication", "url": f"{console}/security/signingin", "returns": False},
		{"key": "profile", "label": "Edit profile", "url": f"{console}/personal-info", "returns": False},
	]
