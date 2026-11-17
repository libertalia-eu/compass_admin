"""Unit tests for the checks of the user management (REQ-088). No Frappe needed: python -m unittest."""
import unittest

from compass_admin import validation


class UsernameTest(unittest.TestCase):
	def test_accepts_lower_case_names(self):
		for name in ("ann", "ann.lee", "a_b-c9", "x" * 64):
			self.assertEqual(validation.username(name), name)

	def test_refuses_the_rest(self):
		for name in ("", "ab", "Ann", "ann lee", "ann/../x", ".ann", "ann.", "x" * 65, None, 5):
			with self.assertRaises(ValueError, msg=repr(name)):
				validation.username(name)


class EmailTest(unittest.TestCase):
	def test_accepts_an_address(self):
		self.assertEqual(validation.email("ann@example.test"), "ann@example.test")

	def test_refuses_the_rest(self):
		for value in ("", "ann", "ann@", "@example.test", "a b@example.test", "ann@example", "a@b.c" + "x" * 260, None):
			with self.assertRaises(ValueError, msg=repr(value)):
				validation.email(value)


class NameTest(unittest.TestCase):
	def test_trims_and_limits(self):
		self.assertEqual(validation.name(" Ann "), "Ann")
		for value in ("", "  ", "x" * 65, None):
			with self.assertRaises(ValueError, msg=repr(value)):
				validation.name(value)


class PasswordTest(unittest.TestCase):
	def test_length_limits(self):
		self.assertEqual(validation.password("x"), "x")
		for value in ("", "x" * 129, None):
			with self.assertRaises(ValueError, msg=repr(value)):
				validation.password(value)


class UserIdTest(unittest.TestCase):
	def test_accepts_a_uuid(self):
		self.assertEqual(validation.user_id("22011c1e-af56-487e-8074-221293b8095f"), "22011c1e-af56-487e-8074-221293b8095f")

	def test_refuses_what_could_change_the_url(self):
		for value in ("", "../users", "22011c1e-af56-487e-8074-221293b8095f/credentials", "22011C1E-AF56-487E-8074-221293B8095F", None):
			with self.assertRaises(ValueError, msg=repr(value)):
				validation.user_id(value)


class LocaleTest(unittest.TestCase):
	def test_accepts_the_languages_of_the_realm(self):
		self.assertEqual(validation.locale("de"), "de")
		self.assertEqual(validation.locale("en"), "en")

	def test_refuses_everything_else(self):
		for value in ("", "fr", "DE", None):
			with self.assertRaises(ValueError, msg=repr(value)):
				validation.locale(value)


class GroupAndRoleTest(unittest.TestCase):
	def test_group_name_is_trimmed_and_limited(self):
		self.assertEqual(validation.group_name("  People Admins "), "People Admins")
		for name in ("", "  ", "x" * 65, None):
			with self.assertRaises(ValueError, msg=repr(name)):
				validation.group_name(name)

	def test_group_id_is_a_uuid(self):
		uuid = "0b3c1e5a-0000-4000-8000-000000000001"
		self.assertEqual(validation.group_id(uuid), uuid)
		with self.assertRaises(ValueError):
			validation.group_id("../users")

	def test_only_the_roles_of_the_apps_and_company_admin(self):
		self.assertEqual(validation.role("crm", "CRM Admin"), ("crm", "CRM Admin"))
		self.assertEqual(validation.role("compass-admin", "Company Admin"), ("compass-admin", "Company Admin"))
		for client, name in (("realm-management", "manage-clients"), ("nextcloud", "admin"), ("crm", "Raven Nutzer"), ("x", "y")):
			with self.assertRaises(ValueError, msg=name):
				validation.role(client, name)
