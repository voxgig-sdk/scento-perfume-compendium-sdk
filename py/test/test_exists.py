# ScentoPerfumeCompendium SDK exists test

import pytest
from scentoperfumecompendium_sdk import ScentoPerfumeCompendiumSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ScentoPerfumeCompendiumSDK.test(None, None)
        assert testsdk is not None
