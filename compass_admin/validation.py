"""Checks of what an admin types before it goes to Keycloak (COMPASS REQ-088). Keycloak still has the last word, for example on the password policy."""
import re

USERNAME = re.compile(r"[a-z0-9][a-z0-9._-]{1,62}[a-z0-9]")
EMAIL = re.compile(r"[^@\s]+@[^@\s]+\.[^@\s]+")
USER_ID = re.compile(r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}")
MAXIMUM_PASSWORD_LENGTH = 128
MAXIMUM_NAME_LENGTH = 64
# the Keycloak client and the roles of it that the page hands out (COMPASS REQ-089); `admin` of Nextcloud stays internal.
# Not Company Admin: it carries realm-management roles, which Keycloak 26.8.2 lets only a realm admin hand out (CVE-2026-96448).
ROLES = {
	"crm": ("CRM Nutzer", "CRM Admin"),
	"helpdesk": ("Helpdesk Nutzer", "Helpdesk Admin"),
	"raven": ("Raven Nutzer", "Raven Admin"),
	"nextcloud": ("Nextcloud Nutzer", "Nextcloud Admin"),
}
LOCALES = ("de", "en")  # the languages of the realm and of compass_sso


def username(value: str) -> str:
	"""Lower case letters, digits, dot, underscore and hyphen; 3 to 64 characters, starting and ending with a letter or digit."""
	if not isinstance(value, str) or not USERNAME.fullmatch(value):
		raise ValueError("The user name has 3 to 64 lower case letters, digits, dots, underscores or hyphens.")
	return value


def email(value: str) -> str:
	if not isinstance(value, str) or len(value) > 254 or not EMAIL.fullmatch(value):
		raise ValueError("The email address is not valid.")
	return value


def name(value: str) -> str:
	"""A first or last name: the user profile of the realm requires both."""
	if not isinstance(value, str) or not value.strip() or len(value) > MAXIMUM_NAME_LENGTH:
		raise ValueError(f"A first and a last name have 1 to {MAXIMUM_NAME_LENGTH} characters.")
	return value.strip()


def password(value: str) -> str:
	if not isinstance(value, str) or not value or len(value) > MAXIMUM_PASSWORD_LENGTH:
		raise ValueError(f"The password has 1 to {MAXIMUM_PASSWORD_LENGTH} characters.")
	return value


def user_id(value: str) -> str:
	"""The id Keycloak gives a user (a UUID); it goes into a URL, so nothing else may pass."""
	if not isinstance(value, str) or not USER_ID.fullmatch(value):
		raise ValueError("The user id is not valid.")
	return value


def locale(value: str) -> str:
	if value not in LOCALES:
		raise ValueError("The language is not available.")
	return value


def role(client: str, name: str) -> tuple[str, str]:
	"""Only the roles an admin hands out: the user and admin role of each app."""
	if name not in ROLES.get(client, ()):
		raise ValueError("The role is not available.")
	return client, name
