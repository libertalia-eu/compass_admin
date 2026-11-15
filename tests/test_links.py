"""Unit tests for the links to Keycloak (REQ-087). No Frappe needed: python -m unittest."""
import unittest
from urllib.parse import parse_qs, urlparse

from compass_admin.links import CONFIGURE_TOTP, UPDATE_PASSWORD, account_links, with_action

AUTHORIZE = "https://auth.example.test/realms/libertalia/protocol/openid-connect/auth?client_id=frappe&state=abc"
REALM = "https://auth.example.test/realms/libertalia"


class WithActionTest(unittest.TestCase):
	def test_adds_the_action_and_keeps_the_rest(self):
		query = parse_qs(urlparse(with_action(AUTHORIZE, UPDATE_PASSWORD)).query)
		self.assertEqual(query["kc_action"], [UPDATE_PASSWORD])
		self.assertEqual(query["client_id"], ["frappe"])
		self.assertEqual(query["state"], ["abc"])

	def test_url_without_query(self):
		self.assertEqual(with_action("https://a.test/auth", CONFIGURE_TOTP), "https://a.test/auth?kc_action=CONFIGURE_TOTP")


class AccountLinksTest(unittest.TestCase):
	def setUp(self):
		self.links = {link["key"]: link for link in account_links(AUTHORIZE, REALM + "/")}

	def test_every_user_gets_the_four_links(self):
		self.assertEqual(set(self.links), {"password", "totp-set-up", "totp-remove", "profile"})

	def test_password_and_totp_use_application_initiated_actions(self):
		self.assertIn("kc_action=UPDATE_PASSWORD", self.links["password"]["url"])
		self.assertIn("kc_action=CONFIGURE_TOTP", self.links["totp-set-up"]["url"])

	def test_removing_and_profile_use_the_account_console(self):
		self.assertEqual(self.links["totp-remove"]["url"], REALM + "/account/#/security/signingin")
		self.assertEqual(self.links["profile"]["url"], REALM + "/account/#/personal-info")

	def test_no_link_targets_the_account_rest_api(self):
		for link in self.links.values():
			self.assertNotIn("/account/credentials", link["url"])
