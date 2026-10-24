"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('PerfumeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SCENTO_PERFUME_COMPENDIUM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SCENTO_PERFUME_COMPENDIUM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ScentoPerfumeCompendiumSDK.test();
        const ent = testsdk.Perfume();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('perfume hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.ScentoPerfumeCompendiumSDK.test(offline).Perfume().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.ScentoPerfumeCompendiumSDK.test(offline).Perfume()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.ScentoPerfumeCompendiumSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Perfume().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.ScentoPerfumeCompendiumSDK.test().Perfume().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.ScentoPerfumeCompendiumSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Perfume().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Perfume().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.ScentoPerfumeCompendiumSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Perfume().list({ "continuation": 1, "q": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SCENTO_PERFUME_COMPENDIUM_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'perfume.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "cite": { "a": true, "h": "Cite", "n": "cite", "r": true, "sh": "How to credit the answer.", "t": "`$STRING`", "key$": "cite", "index$": 0 }, "continuation": { "a": true, "h": "Continuation", "n": "continuation", "r": true, "sh": "Pass back to fetch the next part of a list; null when complete.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "continuation", "index$": 1 }, "detail": { "a": true, "h": "Detail", "n": "detail", "r": true, "sh": "The tool-specific answer.", "t": "`$OBJECT`", "key$": "detail", "index$": 2 }, "folio": { "a": true, "h": "Folio", "n": "folio", "r": true, "sh": "Which tool wrote this answer.", "t": "`$STRING`", "key$": "folio", "index$": 3 }, "further_reading": { "a": true, "h": "Further Reading", "n": "further_reading", "r": true, "t": "`$ARRAY`", "key$": "further_reading", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 5 }, "label": { "a": true, "h": "Label", "n": "label", "r": true, "t": "`$STRING`", "key$": "label", "index$": 6 }, "lede": { "a": true, "h": "Lede", "n": "lede", "r": true, "sh": "One sentence an assistant can quote as is.", "t": "`$STRING`", "key$": "lede", "index$": 7 }, "scento_page": { "a": true, "h": "Scento Page", "n": "scento_page", "r": true, "sh": "The scento.com page to read on.", "t": "`$OBJECT`", "key$": "scento_page", "index$": 8 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": true, "t": "`$STRING`", "key$": "url", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "perfume", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /perfumes", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "continuation", "or": "continuation", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "en", "k": "query", "n": "lang", "or": "lang", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "oud wood", "k": "query", "n": "q", "or": "q", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/perfumes", "q": { "exist": ["q"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "perfumes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /perfumes/{perfume}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "oud-wood", "k": "param", "n": "id", "or": "perfume", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "en", "k": "query", "n": "lang", "or": "lang", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/perfumes/{perfume}", "q": { "exist": ["id"] }, "r": { "param": { "perfume": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "perfumes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "perfume", "name__orig": "perfume", "Name": "Perfume", "name_": "perfume", "name-": "perfume", "NAME": "PERFUME", "index$": 9 }, { "active": true, "entity": "perfume", "key$": "BasicPerfumeFlow", "kind": "basic", "name": "BasicPerfumeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "perfume_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "perfume_ref01", "srcdatavar": "perfume_ref01_data", "suffix": "_dt0" }, "m": { "id": "perfume01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-perfume_ref01" } }], "index$": 1 }] }, 'Perfume', { "GET /perfumes": { "protocol": "http", "parameters": [{ "name": "q", "in": "query", "required": true, "description": "Perfume or house name, note or mood word.", "schema": { "type": "string" }, "example": "oud wood", "index$": 0 }, { "name": "lang", "in": "query", "required": false, "description": "Language of the scento.com links and labels. Answers stay in English.", "schema": { "type": "string", "enum": ["en", "de", "fr", "es", "it", "ro", "el", "hu", "cs", "pl"], "default": "en" }, "index$": 1 }, { "name": "continuation", "in": "query", "required": false, "description": "Opaque value from a previous answer, to fetch the next part of a list.", "schema": { "type": "string" }, "index$": 2 }] }, "GET /perfumes/{perfume}": { "protocol": "http", "parameters": [{ "name": "perfume", "in": "path", "required": true, "description": "Perfume slug or name, for example oud-wood or tom-ford-oud-wood.", "schema": { "type": "string" }, "example": "oud-wood", "index$": 0 }, { "name": "lang", "in": "query", "required": false, "description": "Language of the scento.com links and labels. Answers stay in English.", "schema": { "type": "string", "enum": ["en", "de", "fr", "es", "it", "ro", "el", "hu", "cs", "pl"], "default": "en" }, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let perfume_ref01_data = Object.values(setup.data.existing.perfume)[0];
        // LIST
        const perfume_ref01_ent = client.Perfume();
        const perfume_ref01_match = {};
        const perfume_ref01_list = (await perfume_ref01_ent.list(perfume_ref01_match)).map((e) => e.data());
        // LOAD
        const perfume_ref01_match_dt0 = {};
        perfume_ref01_match_dt0.id = perfume_ref01_data.id;
        const perfume_ref01_data_dt0 = (await perfume_ref01_ent.load(perfume_ref01_match_dt0)).data();
        (0, node_assert_1.default)(perfume_ref01_data_dt0.id === perfume_ref01_data.id);
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/perfume/PerfumeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ScentoPerfumeCompendiumSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['perfume01', 'perfume02', 'perfume03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SCENTO_PERFUME_COMPENDIUM_TEST_PERFUME_ENTID': idmap,
        'SCENTO_PERFUME_COMPENDIUM_TEST_LIVE': 'FALSE',
        'SCENTO_PERFUME_COMPENDIUM_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['SCENTO_PERFUME_COMPENDIUM_TEST_PERFUME_ENTID'];
    const live = 'TRUE' === env.SCENTO_PERFUME_COMPENDIUM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SCENTO_PERFUME_COMPENDIUM_TEST_PERFUME_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ScentoPerfumeCompendiumSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=PerfumeEntity.test.js.map