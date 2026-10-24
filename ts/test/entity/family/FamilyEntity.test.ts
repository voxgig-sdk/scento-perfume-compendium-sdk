

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


describe('FamilyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SCENTO_PERFUME_COMPENDIUM_TEST_LIVE=TRUE.
  afterEach(liveDelay('SCENTO_PERFUME_COMPENDIUM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ScentoPerfumeCompendiumSDK.test()
    const ent = testsdk.Family()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('family hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of ScentoPerfumeCompendiumSDK.test(offline).Family().stream('list')) { }
    }, /offline/)

    for await (const _item of ScentoPerfumeCompendiumSDK.test(offline).Family()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = ScentoPerfumeCompendiumSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Family().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of ScentoPerfumeCompendiumSDK.test().Family().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new ScentoPerfumeCompendiumSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Family().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Family().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = ScentoPerfumeCompendiumSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Family().list({"lang":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SCENTO_PERFUME_COMPENDIUM_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'family.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cite":{"a":true,"h":"Cite","n":"cite","r":true,"sh":"How to credit the answer.","t":"`$STRING`","key$":"cite","index$":0},"continuation":{"a":true,"h":"Continuation","n":"continuation","r":true,"sh":"Pass back to fetch the next part of a list; null when complete.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"continuation","index$":1},"detail":{"a":true,"h":"Detail","n":"detail","r":true,"sh":"The tool-specific answer.","t":"`$OBJECT`","key$":"detail","index$":2},"folio":{"a":true,"h":"Folio","n":"folio","r":true,"sh":"Which tool wrote this answer.","t":"`$STRING`","key$":"folio","index$":3},"further_reading":{"a":true,"h":"Further Reading","n":"further_reading","r":true,"t":"`$ARRAY`","key$":"further_reading","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"label":{"a":true,"h":"Label","n":"label","r":true,"t":"`$STRING`","key$":"label","index$":6},"lede":{"a":true,"h":"Lede","n":"lede","r":true,"sh":"One sentence an assistant can quote as is.","t":"`$STRING`","key$":"lede","index$":7},"scento_page":{"a":true,"h":"Scento Page","n":"scento_page","r":true,"sh":"The scento.com page to read on.","t":"`$OBJECT`","key$":"scento_page","index$":8},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"t":"`$STRING`","key$":"url","index$":9}},"id":{"field":"id","name":"id"},"name":"family","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /families","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/families","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"families"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /families/{family}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"amber-resin","k":"param","n":"id","or":"family","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"en","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/families/{family}","q":{"exist":["id"]},"r":{"param":{"family":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"families"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"family","name__orig":"family","Name":"Family","name_":"family","name-":"family","NAME":"FAMILY","index$":2}, {"active":true,"entity":"family","key$":"BasicFamilyFlow","kind":"basic","name":"BasicFamilyFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"family_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"family_ref01","srcdatavar":"family_ref01_data","suffix":"_dt0"},"m":{"id":"family01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-family_ref01"}}],"index$":1}]}, 'Family', {"GET /families":{"protocol":"http","parameters":[{"name":"lang","in":"query","required":false,"description":"Language of the scento.com links and labels. Answers stay in English.","schema":{"type":"string","enum":["en","de","fr","es","it","ro","el","hu","cs","pl"],"default":"en"},"index$":0}]},"GET /families/{family}":{"protocol":"http","parameters":[{"name":"family","in":"path","required":true,"description":"Family id or name, for example amber-resin.","schema":{"type":"string"},"example":"amber-resin","index$":0},{"name":"lang","in":"query","required":false,"description":"Language of the scento.com links and labels. Answers stay in English.","schema":{"type":"string","enum":["en","de","fr","es","it","ro","el","hu","cs","pl"],"default":"en"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let family_ref01_data = Object.values(setup.data.existing.family)[0] as any

    // LIST
    const family_ref01_ent = client.Family()
    const family_ref01_match: any = {}

    const family_ref01_list = (await family_ref01_ent.list(family_ref01_match)).map((e: any) => e.data())


    // LOAD
    const family_ref01_match_dt0: any = {}
    family_ref01_match_dt0.id = family_ref01_data.id
    const family_ref01_data_dt0 = (await family_ref01_ent.load(family_ref01_match_dt0)).data()
    assert(family_ref01_data_dt0.id === family_ref01_data.id)


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
      '../../../../.sdk/test/entity/family/FamilyTestData.json')

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
    ['family01','family02','family03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SCENTO_PERFUME_COMPENDIUM_TEST_FAMILY_ENTID': idmap,
    'SCENTO_PERFUME_COMPENDIUM_TEST_LIVE': 'FALSE',
    'SCENTO_PERFUME_COMPENDIUM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SCENTO_PERFUME_COMPENDIUM_TEST_FAMILY_ENTID']

  const live = 'TRUE' === env.SCENTO_PERFUME_COMPENDIUM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SCENTO_PERFUME_COMPENDIUM_TEST_FAMILY_ENTID']
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
  
