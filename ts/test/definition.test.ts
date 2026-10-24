import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "contrast",
    "accessor": "Contrast",
    "op": "list",
    "method": "GET",
    "path": "/contrast",
    "args": [],
    "select": {
      "perfume": "v1",
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "perfumes",
      "lang"
    ],
    "queryArgs": [
      {
        "name": "lang",
        "wire": "lang"
      },
      {
        "name": "perfume",
        "wire": "perfumes"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "edit",
    "accessor": "Edit",
    "op": "load",
    "method": "GET",
    "path": "/edits/{occasion}",
    "args": [
      {
        "name": "id",
        "wire": "occasion",
        "value": "office"
      }
    ],
    "select": {
      "gender_lean": "v1",
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "gender_lean",
      "lang"
    ],
    "queryArgs": [
      {
        "name": "gender_lean",
        "wire": "gender_lean"
      },
      {
        "name": "lang",
        "wire": "lang"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "family",
    "accessor": "Family",
    "op": "list",
    "method": "GET",
    "path": "/families",
    "args": [],
    "select": {
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "lang"
    ],
    "queryArgs": [
      {
        "name": "lang",
        "wire": "lang"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "family",
    "accessor": "Family",
    "op": "load",
    "method": "GET",
    "path": "/families/{family}",
    "args": [
      {
        "name": "id",
        "wire": "family",
        "value": "amber-resin"
      }
    ],
    "select": {
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "lang"
    ],
    "queryArgs": [
      {
        "name": "lang",
        "wire": "lang"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "house",
    "accessor": "House",
    "op": "load",
    "method": "GET",
    "path": "/houses/{house}",
    "args": [
      {
        "name": "id",
        "wire": "house",
        "value": "le-labo"
      }
    ],
    "select": {
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "lang"
    ],
    "queryArgs": [
      {
        "name": "lang",
        "wire": "lang"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "journal",
    "accessor": "Journal",
    "op": "list",
    "method": "GET",
    "path": "/journal",
    "args": [],
    "select": {
      "q": "vetiver",
      "continuation": "v1",
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "lang",
      "continuation"
    ],
    "queryArgs": [
      {
        "name": "continuation",
        "wire": "continuation"
      },
      {
        "name": "lang",
        "wire": "lang"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "lexicon",
    "accessor": "Lexicon",
    "op": "load",
    "method": "GET",
    "path": "/lexicon/{term}",
    "args": [
      {
        "name": "id",
        "wire": "term",
        "value": "sillage"
      }
    ],
    "select": {
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "lang"
    ],
    "queryArgs": [
      {
        "name": "lang",
        "wire": "lang"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "match",
    "accessor": "Match",
    "op": "list",
    "method": "GET",
    "path": "/materials/match",
    "args": [],
    "select": {
      "material": "v1",
      "continuation": "v1",
      "family": "v1",
      "lang": "en",
      "tier": "any"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "materials",
      "tier",
      "family",
      "lang",
      "continuation"
    ],
    "queryArgs": [
      {
        "name": "continuation",
        "wire": "continuation"
      },
      {
        "name": "family",
        "wire": "family"
      },
      {
        "name": "lang",
        "wire": "lang"
      },
      {
        "name": "material",
        "wire": "materials"
      },
      {
        "name": "tier",
        "wire": "tier"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "material",
    "accessor": "Material",
    "op": "load",
    "method": "GET",
    "path": "/materials/{material}",
    "args": [
      {
        "name": "id",
        "wire": "material",
        "value": "ambroxan"
      }
    ],
    "select": {
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "lang"
    ],
    "queryArgs": [
      {
        "name": "lang",
        "wire": "lang"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "neighbour",
    "accessor": "Neighbour",
    "op": "list",
    "method": "GET",
    "path": "/perfumes/{perfume}/neighbours",
    "args": [
      {
        "name": "perfume_id",
        "wire": "perfume",
        "value": "oud-wood"
      }
    ],
    "select": {
      "continuation": "v1",
      "lang": "en",
      "same_house": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "same_house",
      "lang",
      "continuation"
    ],
    "queryArgs": [
      {
        "name": "continuation",
        "wire": "continuation"
      },
      {
        "name": "lang",
        "wire": "lang"
      },
      {
        "name": "same_house",
        "wire": "same_house"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "perfume",
    "accessor": "Perfume",
    "op": "list",
    "method": "GET",
    "path": "/perfumes",
    "args": [],
    "select": {
      "q": "oud wood",
      "continuation": "v1",
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "lang",
      "continuation"
    ],
    "queryArgs": [
      {
        "name": "continuation",
        "wire": "continuation"
      },
      {
        "name": "lang",
        "wire": "lang"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "perfume",
    "accessor": "Perfume",
    "op": "load",
    "method": "GET",
    "path": "/perfumes/{perfume}",
    "args": [
      {
        "name": "id",
        "wire": "perfume",
        "value": "oud-wood"
      }
    ],
    "select": {
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "lang"
    ],
    "queryArgs": [
      {
        "name": "lang",
        "wire": "lang"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "search",
    "accessor": "Search",
    "op": "list",
    "method": "GET",
    "path": "/search",
    "args": [],
    "select": {
      "q": "oud wood",
      "continuation": "v1",
      "kind": "any",
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "kind",
      "lang",
      "continuation"
    ],
    "queryArgs": [
      {
        "name": "continuation",
        "wire": "continuation"
      },
      {
        "name": "kind",
        "wire": "kind"
      },
      {
        "name": "lang",
        "wire": "lang"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  },
  {
    "entity": "wardrobe",
    "accessor": "Wardrobe",
    "op": "list",
    "method": "GET",
    "path": "/wardrobe",
    "args": [],
    "select": {
      "love": "v1",
      "avoid": "v1",
      "lang": "en",
      "size": 3
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "loves",
      "avoid",
      "size",
      "lang"
    ],
    "queryArgs": [
      {
        "name": "avoid",
        "wire": "avoid"
      },
      {
        "name": "lang",
        "wire": "lang"
      },
      {
        "name": "love",
        "wire": "loves"
      },
      {
        "name": "size",
        "wire": "size"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "folio": "x",
      "lede": "x",
      "detail": {},
      "scento_page": {
        "label": "x",
        "url": "x"
      },
      "further_reading": [
        {
          "label": "x",
          "url": "x"
        }
      ],
      "cite": "x",
      "continuation": "x"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
