"""compass_admin/public must exist in the checkout: bench links assets/compass_admin before the Vite build creates public/frontend."""
import unittest
from pathlib import Path


class PublicDirTest(unittest.TestCase):
	def test_public_dir_is_tracked(self):
		self.assertTrue((Path(__file__).parent.parent / "compass_admin" / "public" / ".gitkeep").is_file())
