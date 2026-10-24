-- ScentoPerfumeCompendium SDK exists test

local sdk = require("scento-perfume-compendium_sdk")

describe("ScentoPerfumeCompendiumSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
