package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "ScentoPerfumeCompendium",
			"slug": "scento-perfume-compendium",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://www.scento.com/api/perfume/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"contrast": map[string]any{},
				"edit": map[string]any{},
				"family": map[string]any{},
				"house": map[string]any{},
				"journal": map[string]any{},
				"lexicon": map[string]any{},
				"match": map[string]any{},
				"material": map[string]any{},
				"neighbour": map[string]any{},
				"perfume": map[string]any{},
				"search": map[string]any{},
				"wardrobe": map[string]any{},
			},
		},
		"entity": map[string]any{
			"contrast": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
				},
				"name": "contrast",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/contrast",
								"segments": []any{
									map[string]any{
										"lit": "contrast",
									},
								},
								"parts": []any{
									"contrast",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
										map[string]any{
											"name": "perfume",
											"orig": "perfumes",
											"type": "`$ARRAY`",
											"kind": "query",
											"reqd": true,
											"example": "oud-wood,santal-33",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"perfume",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"edit": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cite",
						"title": "Cite",
						"type": "`$STRING`",
						"req": true,
						"short": "How to credit the answer.",
					},
					map[string]any{
						"name": "continuation",
						"title": "Continuation",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Pass back to fetch the next part of a list; null when complete.",
					},
					map[string]any{
						"name": "detail",
						"title": "Detail",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The tool-specific answer.",
					},
					map[string]any{
						"name": "folio",
						"title": "Folio",
						"type": "`$STRING`",
						"req": true,
						"short": "Which tool wrote this answer.",
					},
					map[string]any{
						"name": "further_reading",
						"title": "Further Reading",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lede",
						"title": "Lede",
						"type": "`$STRING`",
						"req": true,
						"short": "One sentence an assistant can quote as is.",
					},
					map[string]any{
						"name": "scento_page",
						"title": "Scento Page",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The scento.com page to read on.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "edit",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/edits/{occasion}",
								"segments": []any{
									map[string]any{
										"lit": "edits",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"edits",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"occasion": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "occasion",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "office",
										},
									},
									"query": []any{
										map[string]any{
											"name": "gender_lean",
											"orig": "gender_lean",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"family": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cite",
						"title": "Cite",
						"type": "`$STRING`",
						"req": true,
						"short": "How to credit the answer.",
					},
					map[string]any{
						"name": "continuation",
						"title": "Continuation",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Pass back to fetch the next part of a list; null when complete.",
					},
					map[string]any{
						"name": "detail",
						"title": "Detail",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The tool-specific answer.",
					},
					map[string]any{
						"name": "folio",
						"title": "Folio",
						"type": "`$STRING`",
						"req": true,
						"short": "Which tool wrote this answer.",
					},
					map[string]any{
						"name": "further_reading",
						"title": "Further Reading",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "lede",
						"title": "Lede",
						"type": "`$STRING`",
						"req": true,
						"short": "One sentence an assistant can quote as is.",
					},
					map[string]any{
						"name": "scento_page",
						"title": "Scento Page",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The scento.com page to read on.",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "family",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/families",
								"segments": []any{
									map[string]any{
										"lit": "families",
									},
								},
								"parts": []any{
									"families",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/families/{family}",
								"segments": []any{
									map[string]any{
										"lit": "families",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"families",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"family": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "family",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "amber-resin",
										},
									},
									"query": []any{
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"house": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cite",
						"title": "Cite",
						"type": "`$STRING`",
						"req": true,
						"short": "How to credit the answer.",
					},
					map[string]any{
						"name": "continuation",
						"title": "Continuation",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Pass back to fetch the next part of a list; null when complete.",
					},
					map[string]any{
						"name": "detail",
						"title": "Detail",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The tool-specific answer.",
					},
					map[string]any{
						"name": "folio",
						"title": "Folio",
						"type": "`$STRING`",
						"req": true,
						"short": "Which tool wrote this answer.",
					},
					map[string]any{
						"name": "further_reading",
						"title": "Further Reading",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lede",
						"title": "Lede",
						"type": "`$STRING`",
						"req": true,
						"short": "One sentence an assistant can quote as is.",
					},
					map[string]any{
						"name": "scento_page",
						"title": "Scento Page",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The scento.com page to read on.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "house",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/houses/{house}",
								"segments": []any{
									map[string]any{
										"lit": "houses",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"houses",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"house": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "house",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "le-labo",
										},
									},
									"query": []any{
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"journal": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
				},
				"name": "journal",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/journal",
								"segments": []any{
									map[string]any{
										"lit": "journal",
									},
								},
								"parts": []any{
									"journal",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "continuation",
											"orig": "continuation",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "vetiver",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"q",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"lexicon": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cite",
						"title": "Cite",
						"type": "`$STRING`",
						"req": true,
						"short": "How to credit the answer.",
					},
					map[string]any{
						"name": "continuation",
						"title": "Continuation",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Pass back to fetch the next part of a list; null when complete.",
					},
					map[string]any{
						"name": "detail",
						"title": "Detail",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The tool-specific answer.",
					},
					map[string]any{
						"name": "folio",
						"title": "Folio",
						"type": "`$STRING`",
						"req": true,
						"short": "Which tool wrote this answer.",
					},
					map[string]any{
						"name": "further_reading",
						"title": "Further Reading",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lede",
						"title": "Lede",
						"type": "`$STRING`",
						"req": true,
						"short": "One sentence an assistant can quote as is.",
					},
					map[string]any{
						"name": "scento_page",
						"title": "Scento Page",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The scento.com page to read on.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "lexicon",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/lexicon/{term}",
								"segments": []any{
									map[string]any{
										"lit": "lexicon",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"lexicon",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"term": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "term",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "sillage",
										},
									},
									"query": []any{
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"match": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
				},
				"name": "match",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/materials/match",
								"segments": []any{
									map[string]any{
										"lit": "materials",
									},
									map[string]any{
										"lit": "match",
									},
								},
								"parts": []any{
									"materials",
									"match",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "continuation",
											"orig": "continuation",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "family",
											"orig": "family",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
										map[string]any{
											"name": "material",
											"orig": "materials",
											"type": "`$ARRAY`",
											"kind": "query",
											"reqd": true,
											"example": "vetiver",
										},
										map[string]any{
											"name": "tier",
											"orig": "tier",
											"type": "`$STRING`",
											"kind": "query",
											"example": "any",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"material",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"material": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cite",
						"title": "Cite",
						"type": "`$STRING`",
						"req": true,
						"short": "How to credit the answer.",
					},
					map[string]any{
						"name": "continuation",
						"title": "Continuation",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Pass back to fetch the next part of a list; null when complete.",
					},
					map[string]any{
						"name": "detail",
						"title": "Detail",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The tool-specific answer.",
					},
					map[string]any{
						"name": "folio",
						"title": "Folio",
						"type": "`$STRING`",
						"req": true,
						"short": "Which tool wrote this answer.",
					},
					map[string]any{
						"name": "further_reading",
						"title": "Further Reading",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lede",
						"title": "Lede",
						"type": "`$STRING`",
						"req": true,
						"short": "One sentence an assistant can quote as is.",
					},
					map[string]any{
						"name": "scento_page",
						"title": "Scento Page",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The scento.com page to read on.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "material",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/materials/{material}",
								"segments": []any{
									map[string]any{
										"lit": "materials",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"materials",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"material": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "material",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ambroxan",
										},
									},
									"query": []any{
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"neighbour": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
				},
				"name": "neighbour",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/perfumes/{perfume}/neighbours",
								"segments": []any{
									map[string]any{
										"lit": "perfumes",
									},
									map[string]any{
										"var": "perfume_id",
									},
									map[string]any{
										"lit": "neighbours",
									},
								},
								"parts": []any{
									"perfumes",
									"{perfume_id}",
									"neighbours",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"perfume": "perfume_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "perfume_id",
											"orig": "perfume",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "oud-wood",
										},
									},
									"query": []any{
										map[string]any{
											"name": "continuation",
											"orig": "continuation",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
										map[string]any{
											"name": "same_house",
											"orig": "same_house",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"perfume_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.perfume",
						},
					},
				},
			},
			"perfume": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cite",
						"title": "Cite",
						"type": "`$STRING`",
						"req": true,
						"short": "How to credit the answer.",
					},
					map[string]any{
						"name": "continuation",
						"title": "Continuation",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Pass back to fetch the next part of a list; null when complete.",
					},
					map[string]any{
						"name": "detail",
						"title": "Detail",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The tool-specific answer.",
					},
					map[string]any{
						"name": "folio",
						"title": "Folio",
						"type": "`$STRING`",
						"req": true,
						"short": "Which tool wrote this answer.",
					},
					map[string]any{
						"name": "further_reading",
						"title": "Further Reading",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "lede",
						"title": "Lede",
						"type": "`$STRING`",
						"req": true,
						"short": "One sentence an assistant can quote as is.",
					},
					map[string]any{
						"name": "scento_page",
						"title": "Scento Page",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The scento.com page to read on.",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "perfume",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/perfumes",
								"segments": []any{
									map[string]any{
										"lit": "perfumes",
									},
								},
								"parts": []any{
									"perfumes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "continuation",
											"orig": "continuation",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "oud wood",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"q",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/perfumes/{perfume}",
								"segments": []any{
									map[string]any{
										"lit": "perfumes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"perfumes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"perfume": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "perfume",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "oud-wood",
										},
									},
									"query": []any{
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/search",
								"segments": []any{
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"search",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "continuation",
											"orig": "continuation",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "kind",
											"orig": "kind",
											"type": "`$STRING`",
											"kind": "query",
											"example": "any",
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "oud wood",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"q",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"wardrobe": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
				},
				"name": "wardrobe",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/wardrobe",
								"segments": []any{
									map[string]any{
										"lit": "wardrobe",
									},
								},
								"parts": []any{
									"wardrobe",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "avoid",
											"orig": "avoid",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
										map[string]any{
											"name": "love",
											"orig": "loves",
											"type": "`$ARRAY`",
											"kind": "query",
											"reqd": true,
											"example": "oud-wood",
										},
										map[string]any{
											"name": "size",
											"orig": "size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 3,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"love",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
