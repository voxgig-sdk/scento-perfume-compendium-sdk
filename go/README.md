# ScentoPerfumeCompendium Golang SDK



The Golang SDK for the ScentoPerfumeCompendium API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Contrast(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/scento-perfume-compendium-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Tags](https://github.com/voxgig-sdk/scento-perfume-compendium-sdk/tags) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/scento-perfume-compendium-sdk/go=../scento-perfume-compendium-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the entity, and for
`List` a `[]any` of entities, one per record (there is no `{ok, data}`
wrapper), so check `err` and read a record through the entity's
`Data()`.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/scento-perfume-compendium-sdk/go"
)

func main() {
    client := sdk.New()

    // List contrast records — the value is a []any of entities, one per record.
    contrasts, err := client.Contrast(nil).List(map[string]any{"perfume": []any{}}, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range contrasts.([]any) {
        fmt.Println(item.(sdk.Entity).Data())
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
journals, err := client.Journal(nil).List(map[string]any{"q": "example"}, nil)
if err != nil {
    // handle err
    return
}
_ = journals
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

journals, err := client.Journal(nil).List(
    map[string]any{"q": "example"}, nil,
)
if err != nil {
    panic(err)
}
// A []any of entities, one per mock record.
for _, item := range journals.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewScentoPerfumeCompendiumSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
SCENTO_PERFUME_COMPENDIUM_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewScentoPerfumeCompendiumSDK

```go
func NewScentoPerfumeCompendiumSDK(options map[string]any) *ScentoPerfumeCompendiumSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *ScentoPerfumeCompendiumSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### ScentoPerfumeCompendiumSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Contrast` | `(data map[string]any) ScentoPerfumeCompendiumEntity` | Create a Contrast entity instance. |
| `Edit` | `(data map[string]any) ScentoPerfumeCompendiumEntity` | Create an Edit entity instance. |
| `Family` | `(data map[string]any) ScentoPerfumeCompendiumEntity` | Create a Family entity instance. |
| `House` | `(data map[string]any) ScentoPerfumeCompendiumEntity` | Create a House entity instance. |
| `Journal` | `(data map[string]any) ScentoPerfumeCompendiumEntity` | Create a Journal entity instance. |
| `Lexicon` | `(data map[string]any) ScentoPerfumeCompendiumEntity` | Create a Lexicon entity instance. |
| `Match` | `(data map[string]any) ScentoPerfumeCompendiumEntity` | Create a Match entity instance. |
| `Material` | `(data map[string]any) ScentoPerfumeCompendiumEntity` | Create a Material entity instance. |
| `Neighbour` | `(data map[string]any) ScentoPerfumeCompendiumEntity` | Create a Neighbour entity instance. |
| `Perfume` | `(data map[string]any) ScentoPerfumeCompendiumEntity` | Create a Perfume entity instance. |
| `Search` | `(data map[string]any) ScentoPerfumeCompendiumEntity` | Create a Search entity instance. |
| `Wardrobe` | `(data map[string]any) ScentoPerfumeCompendiumEntity` | Create a Wardrobe entity instance. |

### Entity interface (ScentoPerfumeCompendiumEntity)

All entities implement the `ScentoPerfumeCompendiumEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria, and return it. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria, one per record. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the entity
itself — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity, whose `Data()` reads its record (`map[string]any`) |
| `List` | a `[]any` of entities, one per record |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    contrast, err := client.Contrast(nil).List(map[string]any{"perfume": []any{}}, nil)
    if err != nil { /* handle */ }
    // contrast is a []any of entities, one per record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Contrast

| Field | Description |
| --- | --- |
| `"label"` |  |
| `"url"` |  |

Operations: List.

API path: `/contrast`

#### Edit

| Field | Description |
| --- | --- |
| `"cite"` | How to credit the answer. |
| `"continuation"` | Pass back to fetch the next part of a list; null when complete. |
| `"detail"` | The tool-specific answer. |
| `"folio"` | Which tool wrote this answer. |
| `"further_reading"` |  |
| `"id"` |  |
| `"lede"` | One sentence an assistant can quote as is. |
| `"scento_page"` | The scento.com page to read on. |

Operations: Load.

API path: `/edits/{occasion}`

#### Family

| Field | Description |
| --- | --- |
| `"cite"` | How to credit the answer. |
| `"continuation"` | Pass back to fetch the next part of a list; null when complete. |
| `"detail"` | The tool-specific answer. |
| `"folio"` | Which tool wrote this answer. |
| `"further_reading"` |  |
| `"id"` |  |
| `"label"` |  |
| `"lede"` | One sentence an assistant can quote as is. |
| `"scento_page"` | The scento.com page to read on. |
| `"url"` |  |

Operations: List, Load.

API path: `/families`

#### House

| Field | Description |
| --- | --- |
| `"cite"` | How to credit the answer. |
| `"continuation"` | Pass back to fetch the next part of a list; null when complete. |
| `"detail"` | The tool-specific answer. |
| `"folio"` | Which tool wrote this answer. |
| `"further_reading"` |  |
| `"id"` |  |
| `"lede"` | One sentence an assistant can quote as is. |
| `"scento_page"` | The scento.com page to read on. |

Operations: Load.

API path: `/houses/{house}`

#### Journal

| Field | Description |
| --- | --- |
| `"label"` |  |
| `"url"` |  |

Operations: List.

API path: `/journal`

#### Lexicon

| Field | Description |
| --- | --- |
| `"cite"` | How to credit the answer. |
| `"continuation"` | Pass back to fetch the next part of a list; null when complete. |
| `"detail"` | The tool-specific answer. |
| `"folio"` | Which tool wrote this answer. |
| `"further_reading"` |  |
| `"id"` |  |
| `"lede"` | One sentence an assistant can quote as is. |
| `"scento_page"` | The scento.com page to read on. |

Operations: Load.

API path: `/lexicon/{term}`

#### Match

| Field | Description |
| --- | --- |
| `"label"` |  |
| `"url"` |  |

Operations: List.

API path: `/materials/match`

#### Material

| Field | Description |
| --- | --- |
| `"cite"` | How to credit the answer. |
| `"continuation"` | Pass back to fetch the next part of a list; null when complete. |
| `"detail"` | The tool-specific answer. |
| `"folio"` | Which tool wrote this answer. |
| `"further_reading"` |  |
| `"id"` |  |
| `"lede"` | One sentence an assistant can quote as is. |
| `"scento_page"` | The scento.com page to read on. |

Operations: Load.

API path: `/materials/{material}`

#### Neighbour

| Field | Description |
| --- | --- |
| `"label"` |  |
| `"url"` |  |

Operations: List.

API path: `/perfumes/{perfume}/neighbours`

#### Perfume

| Field | Description |
| --- | --- |
| `"cite"` | How to credit the answer. |
| `"continuation"` | Pass back to fetch the next part of a list; null when complete. |
| `"detail"` | The tool-specific answer. |
| `"folio"` | Which tool wrote this answer. |
| `"further_reading"` |  |
| `"id"` |  |
| `"label"` |  |
| `"lede"` | One sentence an assistant can quote as is. |
| `"scento_page"` | The scento.com page to read on. |
| `"url"` |  |

Operations: List, Load.

API path: `/perfumes`

#### Search

| Field | Description |
| --- | --- |
| `"label"` |  |
| `"url"` |  |

Operations: List.

API path: `/search`

#### Wardrobe

| Field | Description |
| --- | --- |
| `"label"` |  |
| `"url"` |  |

Operations: List.

API path: `/wardrobe`



## Entities


### Contrast

Create an instance: `contrast := client.Contrast(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
contrasts, err := client.Contrast(nil).List(map[string]any{"perfume": []any{}}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range contrasts.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Edit

Create an instance: `edit := client.Edit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cite` | `string` | How to credit the answer. |
| `continuation` | `any` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `map[string]any` | The tool-specific answer. |
| `folio` | `string` | Which tool wrote this answer. |
| `further_reading` | `[]any` |  |
| `id` | `string` |  |
| `lede` | `string` | One sentence an assistant can quote as is. |
| `scento_page` | `map[string]any` | The scento.com page to read on. |

#### Example: Load

```go
edit, err := client.Edit(nil).Load(map[string]any{"id": "edit_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(edit.(sdk.Entity).Data()) // the loaded entity's record
```


### Family

Create an instance: `family := client.Family(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cite` | `string` | How to credit the answer. |
| `continuation` | `any` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `map[string]any` | The tool-specific answer. |
| `folio` | `string` | Which tool wrote this answer. |
| `further_reading` | `[]any` |  |
| `id` | `string` |  |
| `label` | `string` |  |
| `lede` | `string` | One sentence an assistant can quote as is. |
| `scento_page` | `map[string]any` | The scento.com page to read on. |
| `url` | `string` |  |

#### Example: Load

```go
family, err := client.Family(nil).Load(map[string]any{"id": "family_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(family.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
familys, err := client.Family(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range familys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### House

Create an instance: `house := client.House(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cite` | `string` | How to credit the answer. |
| `continuation` | `any` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `map[string]any` | The tool-specific answer. |
| `folio` | `string` | Which tool wrote this answer. |
| `further_reading` | `[]any` |  |
| `id` | `string` |  |
| `lede` | `string` | One sentence an assistant can quote as is. |
| `scento_page` | `map[string]any` | The scento.com page to read on. |

#### Example: Load

```go
house, err := client.House(nil).Load(map[string]any{"id": "house_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(house.(sdk.Entity).Data()) // the loaded entity's record
```


### Journal

Create an instance: `journal := client.Journal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
journals, err := client.Journal(nil).List(map[string]any{"q": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range journals.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Lexicon

Create an instance: `lexicon := client.Lexicon(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cite` | `string` | How to credit the answer. |
| `continuation` | `any` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `map[string]any` | The tool-specific answer. |
| `folio` | `string` | Which tool wrote this answer. |
| `further_reading` | `[]any` |  |
| `id` | `string` |  |
| `lede` | `string` | One sentence an assistant can quote as is. |
| `scento_page` | `map[string]any` | The scento.com page to read on. |

#### Example: Load

```go
lexicon, err := client.Lexicon(nil).Load(map[string]any{"id": "lexicon_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(lexicon.(sdk.Entity).Data()) // the loaded entity's record
```


### Match

Create an instance: `match := client.Match(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
matchs, err := client.Match(nil).List(map[string]any{"material": []any{}}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range matchs.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Material

Create an instance: `material := client.Material(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cite` | `string` | How to credit the answer. |
| `continuation` | `any` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `map[string]any` | The tool-specific answer. |
| `folio` | `string` | Which tool wrote this answer. |
| `further_reading` | `[]any` |  |
| `id` | `string` |  |
| `lede` | `string` | One sentence an assistant can quote as is. |
| `scento_page` | `map[string]any` | The scento.com page to read on. |

#### Example: Load

```go
material, err := client.Material(nil).Load(map[string]any{"id": "material_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(material.(sdk.Entity).Data()) // the loaded entity's record
```


### Neighbour

Create an instance: `neighbour := client.Neighbour(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
neighbours, err := client.Neighbour(nil).List(map[string]any{"perfume_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range neighbours.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Perfume

Create an instance: `perfume := client.Perfume(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cite` | `string` | How to credit the answer. |
| `continuation` | `any` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `map[string]any` | The tool-specific answer. |
| `folio` | `string` | Which tool wrote this answer. |
| `further_reading` | `[]any` |  |
| `id` | `string` |  |
| `label` | `string` |  |
| `lede` | `string` | One sentence an assistant can quote as is. |
| `scento_page` | `map[string]any` | The scento.com page to read on. |
| `url` | `string` |  |

#### Example: Load

```go
perfume, err := client.Perfume(nil).Load(map[string]any{"id": "perfume_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(perfume.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
perfumes, err := client.Perfume(nil).List(map[string]any{"q": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range perfumes.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Search

Create an instance: `search := client.Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
searchs, err := client.Search(nil).List(map[string]any{"q": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range searchs.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Wardrobe

Create an instance: `wardrobe := client.Wardrobe(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
wardrobes, err := client.Wardrobe(nil).List(map[string]any{"love": []any{}}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range wardrobes.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

An operation returns the entity, and its `Data()` returns the record. Use
`core.ToMapAny()` to safely cast that record, or data nested in it, to
`map[string]any`: it returns `nil` for anything else, an entity included.

### Package structure

```
github.com/voxgig-sdk/scento-perfume-compendium-sdk/go/
├── scento-perfume-compendium.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/scento-perfume-compendium-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
journal := client.Journal(nil)
journal.List(map[string]any{"q": "example"}, nil)

// journal.Data() now returns the journal data from the last list
// journal.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
