# ScentoPerfumeCompendium SDK exists test

require "minitest/autorun"
require_relative "../ScentoPerfumeCompendium_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ScentoPerfumeCompendiumSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
