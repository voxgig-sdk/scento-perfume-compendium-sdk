

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ScentoPerfumeCompendiumSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('MatchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SCENTO_PERFUME_COMPENDIUM_TEST_LIVE=TRUE.
  afterEach(liveDelay('SCENTO_PERFUME_COMPENDIUM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ScentoPerfumeCompendiumSDK.test()
    const ent = testsdk.Match()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('match hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of ScentoPerfumeCompendiumSDK.test(offline).Match().stream('list')) { }
    }, /offline/)

    for await (const _item of ScentoPerfumeCompendiumSDK.test(offline).Match()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = ScentoPerfumeCompendiumSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Match().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of ScentoPerfumeCompendiumSDK.test().Match().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new ScentoPerfumeCompendiumSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Match().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Match().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = ScentoPerfumeCompendiumSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Match().list({"continuation":1,"material":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SCENTO_PERFUME_COMPENDIUM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'match.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"label":{"a":true,"h":"Label","n":"label","r":true,"t":"`$STRING`","key$":"label","index$":0},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"t":"`$STRING`","key$":"url","index$":1}},"name":"match","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /materials/match","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"continuation","or":"continuation","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"family","or":"family","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"en","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"vetiver","k":"query","n":"material","or":"materials","r":true,"t":"`$ARRAY`","index$":3},{"a":true,"ex":"any","k":"query","n":"tier","or":"tier","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/materials/match","q":{"exist":["material"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"materials"},{"lit":"match"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"match","name__orig":"match","Name":"Match","name_":"match","name-":"match","NAME":"MATCH","index$":6}, {"active":true,"entity":"match","key$":"BasicMatchFlow","kind":"basic","name":"BasicMatchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"match_ref01"}}],"index$":0}]}, 'Match', {"GET /materials/match":{"protocol":"http","parameters":[{"name":"materials","in":"query","required":true,"description":"One to four materials, comma-separated, that must all be present.","schema":{"type":"array","items":{"type":"string"},"minItems":1,"maxItems":4,"description":"Materials."},"style":"form","explode":false,"example":"vetiver","index$":0},{"name":"tier","in":"query","required":false,"description":"Where in the pyramid the materials must sit.","schema":{"type":"string","enum":["top","heart","base","any"],"default":"any"},"index$":1},{"name":"family","in":"query","required":false,"description":"Optional Scento family to stay within.","schema":{"type":"string"},"index$":2},{"name":"lang","in":"query","required":false,"description":"Language of the scento.com links and labels. Answers stay in English.","schema":{"type":"string","enum":["en","de","fr","es","it","ro","el","hu","cs","pl"],"default":"en"},"index$":3},{"name":"continuation","in":"query","required":false,"description":"Opaque value from a previous answer, to fetch the next part of a list.","schema":{"type":"string"},"index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let match_ref01_data = Object.values(setup.data.existing.match)[0] as any

    // LIST
    const match_ref01_ent = client.Match()
    const match_ref01_match: any = {}

    const match_ref01_list = (await match_ref01_ent.list(match_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/match/MatchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ScentoPerfumeCompendiumSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['match01','match02','match03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SCENTO_PERFUME_COMPENDIUM_TEST_MATCH_ENTID': idmap,
    'SCENTO_PERFUME_COMPENDIUM_TEST_LIVE': 'FALSE',
    'SCENTO_PERFUME_COMPENDIUM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SCENTO_PERFUME_COMPENDIUM_TEST_MATCH_ENTID']

  const live = 'TRUE' === env.SCENTO_PERFUME_COMPENDIUM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SCENTO_PERFUME_COMPENDIUM_TEST_MATCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ScentoPerfumeCompendiumSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SCENTO_PERFUME_COMPENDIUM_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
