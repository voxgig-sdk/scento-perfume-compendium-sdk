

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


describe('NeighbourEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SCENTO_PERFUME_COMPENDIUM_TEST_LIVE=TRUE.
  afterEach(liveDelay('SCENTO_PERFUME_COMPENDIUM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ScentoPerfumeCompendiumSDK.test()
    const ent = testsdk.Neighbour()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = ScentoPerfumeCompendiumSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Neighbour().list({"perfume_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SCENTO_PERFUME_COMPENDIUM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'neighbour.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"label":{"a":true,"h":"Label","n":"label","r":true,"t":"`$STRING`","key$":"label","index$":0},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"t":"`$STRING`","key$":"url","index$":1}},"name":"neighbour","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /perfumes/{perfume}/neighbours","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"oud-wood","k":"param","n":"perfume_id","or":"perfume","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"continuation","or":"continuation","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"en","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":false,"k":"query","n":"same_house","or":"same_house","r":false,"t":"`$BOOLEAN`","index$":2}]},"k":"http","m":"GET","o":"/perfumes/{perfume}/neighbours","q":{"exist":["perfume_id"]},"r":{"param":{"perfume":"perfume_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"perfumes"},{"var":"perfume_id"},{"lit":"neighbours"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.perfume"]]},"key$":"neighbour","name__orig":"neighbour","Name":"Neighbour","name_":"neighbour","name-":"neighbour","NAME":"NEIGHBOUR","index$":8}, {"active":true,"entity":"neighbour","key$":"BasicNeighbourFlow","kind":"basic","name":"BasicNeighbourFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"perfume_id":"perfume01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"neighbour_ref01"}}],"index$":0}]}, 'Neighbour', {"GET /perfumes/{perfume}/neighbours":{"protocol":"http","parameters":[{"name":"perfume","in":"path","required":true,"description":"Perfume slug or name.","schema":{"type":"string"},"example":"oud-wood","index$":0},{"name":"same_house","in":"query","required":false,"description":"Only look within the same house.","schema":{"type":"boolean","default":false},"index$":1},{"name":"lang","in":"query","required":false,"description":"Language of the scento.com links and labels. Answers stay in English.","schema":{"type":"string","enum":["en","de","fr","es","it","ro","el","hu","cs","pl"],"default":"en"},"index$":2},{"name":"continuation","in":"query","required":false,"description":"Opaque value from a previous answer, to fetch the next part of a list.","schema":{"type":"string"},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let neighbour_ref01_data = Object.values(setup.data.existing.neighbour)[0] as any

    // LIST
    const neighbour_ref01_ent = client.Neighbour()
    const neighbour_ref01_match: any = {}
    neighbour_ref01_match['perfume_id'] = setup.idmap['perfume01']

    const neighbour_ref01_list = (await neighbour_ref01_ent.list(neighbour_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/neighbour/NeighbourTestData.json')

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
    ['neighbour01','neighbour02','neighbour03','perfume01','perfume02','perfume03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SCENTO_PERFUME_COMPENDIUM_TEST_NEIGHBOUR_ENTID': idmap,
    'SCENTO_PERFUME_COMPENDIUM_TEST_LIVE': 'FALSE',
    'SCENTO_PERFUME_COMPENDIUM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SCENTO_PERFUME_COMPENDIUM_TEST_NEIGHBOUR_ENTID']

  const live = 'TRUE' === env.SCENTO_PERFUME_COMPENDIUM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SCENTO_PERFUME_COMPENDIUM_TEST_NEIGHBOUR_ENTID']
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
  
