
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ScentoPerfumeCompendiumSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ScentoPerfumeCompendiumSDK.test()
    equal(testsdk instanceof ScentoPerfumeCompendiumSDK, true,
      'ScentoPerfumeCompendiumSDK.test() must return a client synchronously')
  })

})
