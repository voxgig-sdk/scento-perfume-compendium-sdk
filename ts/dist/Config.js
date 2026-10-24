"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'ScentoPerfumeCompendium',
        slug: "scento-perfume-compendium",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "now": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://www.scento.com/api/perfume/v1",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            contrast: {},
            edit: {},
            family: {},
            house: {},
            journal: {},
            lexicon: {},
            match: {},
            material: {},
            neighbour: {},
            perfume: {},
            search: {},
            wardrobe: {},
        }
    };
    entity = {
        "contrast": {
            "fields": [
                {
                    "name": "label",
                    "title": "Label",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "uri"
                }
            ],
            "name": "contrast",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/contrast",
                            "segments": [
                                {
                                    "lit": "contrast"
                                }
                            ],
                            "parts": [
                                "contrast"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    },
                                    {
                                        "name": "perfume",
                                        "orig": "perfumes",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "oud-wood,santal-33"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "perfume"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "edit": {
            "fields": [
                {
                    "name": "cite",
                    "title": "Cite",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "How to credit the answer."
                },
                {
                    "name": "continuation",
                    "title": "Continuation",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "req": true,
                    "short": "Pass back to fetch the next part of a list; null when complete."
                },
                {
                    "name": "detail",
                    "title": "Detail",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The tool-specific answer."
                },
                {
                    "name": "folio",
                    "title": "Folio",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Which tool wrote this answer."
                },
                {
                    "name": "further_reading",
                    "title": "Further Reading",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "lede",
                    "title": "Lede",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "One sentence an assistant can quote as is."
                },
                {
                    "name": "scento_page",
                    "title": "Scento Page",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The scento.com page to read on."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "edit",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/edits/{occasion}",
                            "segments": [
                                {
                                    "lit": "edits"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "edits",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "occasion": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "occasion",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "office"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "gender_lean",
                                        "orig": "gender_lean",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "family": {
            "fields": [
                {
                    "name": "cite",
                    "title": "Cite",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "How to credit the answer."
                },
                {
                    "name": "continuation",
                    "title": "Continuation",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "req": true,
                    "short": "Pass back to fetch the next part of a list; null when complete."
                },
                {
                    "name": "detail",
                    "title": "Detail",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The tool-specific answer."
                },
                {
                    "name": "folio",
                    "title": "Folio",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Which tool wrote this answer."
                },
                {
                    "name": "further_reading",
                    "title": "Further Reading",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "label",
                    "title": "Label",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "lede",
                    "title": "Lede",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "One sentence an assistant can quote as is."
                },
                {
                    "name": "scento_page",
                    "title": "Scento Page",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The scento.com page to read on."
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "uri"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "family",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/families",
                            "segments": [
                                {
                                    "lit": "families"
                                }
                            ],
                            "parts": [
                                "families"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/families/{family}",
                            "segments": [
                                {
                                    "lit": "families"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "families",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "family": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "family",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "amber-resin"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "house": {
            "fields": [
                {
                    "name": "cite",
                    "title": "Cite",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "How to credit the answer."
                },
                {
                    "name": "continuation",
                    "title": "Continuation",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "req": true,
                    "short": "Pass back to fetch the next part of a list; null when complete."
                },
                {
                    "name": "detail",
                    "title": "Detail",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The tool-specific answer."
                },
                {
                    "name": "folio",
                    "title": "Folio",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Which tool wrote this answer."
                },
                {
                    "name": "further_reading",
                    "title": "Further Reading",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "lede",
                    "title": "Lede",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "One sentence an assistant can quote as is."
                },
                {
                    "name": "scento_page",
                    "title": "Scento Page",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The scento.com page to read on."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "house",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/houses/{house}",
                            "segments": [
                                {
                                    "lit": "houses"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "houses",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "house": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "house",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "le-labo"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "journal": {
            "fields": [
                {
                    "name": "label",
                    "title": "Label",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "uri"
                }
            ],
            "name": "journal",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/journal",
                            "segments": [
                                {
                                    "lit": "journal"
                                }
                            ],
                            "parts": [
                                "journal"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "continuation",
                                        "orig": "continuation",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "vetiver"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "q"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "lexicon": {
            "fields": [
                {
                    "name": "cite",
                    "title": "Cite",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "How to credit the answer."
                },
                {
                    "name": "continuation",
                    "title": "Continuation",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "req": true,
                    "short": "Pass back to fetch the next part of a list; null when complete."
                },
                {
                    "name": "detail",
                    "title": "Detail",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The tool-specific answer."
                },
                {
                    "name": "folio",
                    "title": "Folio",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Which tool wrote this answer."
                },
                {
                    "name": "further_reading",
                    "title": "Further Reading",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "lede",
                    "title": "Lede",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "One sentence an assistant can quote as is."
                },
                {
                    "name": "scento_page",
                    "title": "Scento Page",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The scento.com page to read on."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "lexicon",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/lexicon/{term}",
                            "segments": [
                                {
                                    "lit": "lexicon"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "lexicon",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "term": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "term",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "sillage"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "match": {
            "fields": [
                {
                    "name": "label",
                    "title": "Label",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "uri"
                }
            ],
            "name": "match",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/materials/match",
                            "segments": [
                                {
                                    "lit": "materials"
                                },
                                {
                                    "lit": "match"
                                }
                            ],
                            "parts": [
                                "materials",
                                "match"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "continuation",
                                        "orig": "continuation",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "family",
                                        "orig": "family",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    },
                                    {
                                        "name": "material",
                                        "orig": "materials",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "vetiver"
                                    },
                                    {
                                        "name": "tier",
                                        "orig": "tier",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "any"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "material"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "material": {
            "fields": [
                {
                    "name": "cite",
                    "title": "Cite",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "How to credit the answer."
                },
                {
                    "name": "continuation",
                    "title": "Continuation",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "req": true,
                    "short": "Pass back to fetch the next part of a list; null when complete."
                },
                {
                    "name": "detail",
                    "title": "Detail",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The tool-specific answer."
                },
                {
                    "name": "folio",
                    "title": "Folio",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Which tool wrote this answer."
                },
                {
                    "name": "further_reading",
                    "title": "Further Reading",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "lede",
                    "title": "Lede",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "One sentence an assistant can quote as is."
                },
                {
                    "name": "scento_page",
                    "title": "Scento Page",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The scento.com page to read on."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "material",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/materials/{material}",
                            "segments": [
                                {
                                    "lit": "materials"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "materials",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "material": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "material",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "ambroxan"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "neighbour": {
            "fields": [
                {
                    "name": "label",
                    "title": "Label",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "uri"
                }
            ],
            "name": "neighbour",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/perfumes/{perfume}/neighbours",
                            "segments": [
                                {
                                    "lit": "perfumes"
                                },
                                {
                                    "var": "perfume_id"
                                },
                                {
                                    "lit": "neighbours"
                                }
                            ],
                            "parts": [
                                "perfumes",
                                "{perfume_id}",
                                "neighbours"
                            ],
                            "rename": {
                                "param": {
                                    "perfume": "perfume_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "perfume_id",
                                        "orig": "perfume",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "oud-wood"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "continuation",
                                        "orig": "continuation",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    },
                                    {
                                        "name": "same_house",
                                        "orig": "same_house",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "perfume_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.perfume"
                    ]
                ]
            }
        },
        "perfume": {
            "fields": [
                {
                    "name": "cite",
                    "title": "Cite",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "How to credit the answer."
                },
                {
                    "name": "continuation",
                    "title": "Continuation",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "req": true,
                    "short": "Pass back to fetch the next part of a list; null when complete."
                },
                {
                    "name": "detail",
                    "title": "Detail",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The tool-specific answer."
                },
                {
                    "name": "folio",
                    "title": "Folio",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Which tool wrote this answer."
                },
                {
                    "name": "further_reading",
                    "title": "Further Reading",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "label",
                    "title": "Label",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "lede",
                    "title": "Lede",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "One sentence an assistant can quote as is."
                },
                {
                    "name": "scento_page",
                    "title": "Scento Page",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The scento.com page to read on."
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "uri"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "perfume",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/perfumes",
                            "segments": [
                                {
                                    "lit": "perfumes"
                                }
                            ],
                            "parts": [
                                "perfumes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "continuation",
                                        "orig": "continuation",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "field": true
                                    },
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "oud wood"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "q"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/perfumes/{perfume}",
                            "segments": [
                                {
                                    "lit": "perfumes"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "perfumes",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "perfume": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "perfume",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "oud-wood"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "search": {
            "fields": [
                {
                    "name": "label",
                    "title": "Label",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "uri"
                }
            ],
            "name": "search",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/search",
                            "segments": [
                                {
                                    "lit": "search"
                                }
                            ],
                            "parts": [
                                "search"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "continuation",
                                        "orig": "continuation",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "kind",
                                        "orig": "kind",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "any"
                                    },
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "oud wood"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "q"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "wardrobe": {
            "fields": [
                {
                    "name": "label",
                    "title": "Label",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "uri"
                }
            ],
            "name": "wardrobe",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/wardrobe",
                            "segments": [
                                {
                                    "lit": "wardrobe"
                                }
                            ],
                            "parts": [
                                "wardrobe"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "avoid",
                                        "orig": "avoid",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    },
                                    {
                                        "name": "love",
                                        "orig": "loves",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "oud-wood"
                                    },
                                    {
                                        "name": "size",
                                        "orig": "size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 3
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "love"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map