

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


describe('LexiconEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SCENTO_PERFUME_COMPENDIUM_TEST_LIVE=TRUE.
  afterEach(liveDelay('SCENTO_PERFUME_COMPENDIUM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ScentoPerfumeCompendiumSDK.test()
    const ent = testsdk.Lexicon()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = ScentoPerfumeCompendiumSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Lexicon().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SCENTO_PERFUME_COMPENDIUM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'lexicon.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cite":{"a":true,"h":"Cite","n":"cite","r":true,"sh":"How to credit the answer.","t":"`$STRING`","key$":"cite","index$":0},"continuation":{"a":true,"h":"Continuation","n":"continuation","r":true,"sh":"Pass back to fetch the next part of a list; null when complete.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"continuation","index$":1},"detail":{"a":true,"h":"Detail","n":"detail","r":true,"sh":"The tool-specific answer.","t":"`$OBJECT`","key$":"detail","index$":2},"folio":{"a":true,"h":"Folio","n":"folio","r":true,"sh":"Which tool wrote this answer.","t":"`$STRING`","key$":"folio","index$":3},"further_reading":{"a":true,"h":"Further Reading","n":"further_reading","r":true,"t":"`$ARRAY`","key$":"further_reading","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"lede":{"a":true,"h":"Lede","n":"lede","r":true,"sh":"One sentence an assistant can quote as is.","t":"`$STRING`","key$":"lede","index$":6},"scento_page":{"a":true,"h":"Scento Page","n":"scento_page","r":true,"sh":"The scento.com page to read on.","t":"`$OBJECT`","key$":"scento_page","index$":7}},"id":{"field":"id","name":"id"},"name":"lexicon","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /lexicon/{term}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"sillage","k":"param","n":"id","or":"term","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"en","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/lexicon/{term}","q":{"exist":["id"]},"r":{"param":{"term":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"lexicon"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"lexicon","name__orig":"lexicon","Name":"Lexicon","name_":"lexicon","name-":"lexicon","NAME":"LEXICON","index$":5}, {"active":true,"entity":"lexicon","key$":"BasicLexiconFlow","kind":"basic","name":"BasicLexiconFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"lexicon_ref01","srcdatavar":"lexicon_ref01_data","suffix":"_dt0"},"m":{"id":"lexicon01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-lexicon_ref01"}}],"index$":0}]}, 'Lexicon', {"GET /lexicon/{term}":{"protocol":"http","parameters":[{"name":"term","in":"path","required":true,"description":"A perfumery term, for example sillage, chypre or edp-vs-edt.","schema":{"type":"string"},"example":"sillage","index$":0},{"name":"lang","in":"query","required":false,"description":"Language of the scento.com links and labels. Answers stay in English.","schema":{"type":"string","enum":["en","de","fr","es","it","ro","el","hu","cs","pl"],"default":"en"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let lexicon_ref01_data = Object.values(setup.data.existing.lexicon)[0] as any

    // LOAD
    const lexicon_ref01_ent = client.Lexicon()
    const lexicon_ref01_match_dt0: any = {}
    lexicon_ref01_match_dt0.id = lexicon_ref01_data.id
    const lexicon_ref01_data_dt0 = (await lexicon_ref01_ent.load(lexicon_ref01_match_dt0)).data()
    assert(lexicon_ref01_data_dt0.id === lexicon_ref01_data.id)


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
      '../../../../.sdk/test/entity/lexicon/LexiconTestData.json')

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
    ['lexicon01','lexicon02','lexicon03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SCENTO_PERFUME_COMPENDIUM_TEST_LEXICON_ENTID': idmap,
    'SCENTO_PERFUME_COMPENDIUM_TEST_LIVE': 'FALSE',
    'SCENTO_PERFUME_COMPENDIUM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SCENTO_PERFUME_COMPENDIUM_TEST_LEXICON_ENTID']

  const live = 'TRUE' === env.SCENTO_PERFUME_COMPENDIUM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SCENTO_PERFUME_COMPENDIUM_TEST_LEXICON_ENTID']
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
  
