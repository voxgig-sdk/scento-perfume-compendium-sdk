# ScentoPerfumeCompendium Ruby SDK



The Ruby SDK for the ScentoPerfumeCompendium API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Contrast` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/scento-perfume-compendium-sdk/tags)), or
from a clone:

```bash
git clone https://github.com/voxgig-sdk/scento-perfume-compendium-sdk
```

Then add it to your `Gemfile` by path, and run `bundle install`:

```ruby
gem "voxgig-sdk-scento-perfume-compendium-sdk", path: "./scento-perfume-compendium-sdk/rb"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "ScentoPerfumeCompendium_sdk"

client = ScentoPerfumeCompendiumSDK.new
```

### 2. List contrast records

```ruby
begin
  # list returns an Array of Contrast entities, one per record; data_get reads the record.
  contrasts = client.Contrast.list({ "perfume" => [] })
  contrasts.each do |item|
    record = item.data_get
    puts "#{record["label"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  journals = client.Journal.list({ "q" => "example" })
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = ScentoPerfumeCompendiumSDK.test

# list returns an Array of Journal entities, one per mock record (raises on
# error); data_get reads each record.
journals = client.Journal.list({ "q" => "example" })
journals.each { |item| puts item.data_get }
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = ScentoPerfumeCompendiumSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### ScentoPerfumeCompendiumSDK

```ruby
require_relative "ScentoPerfumeCompendium_sdk"
client = ScentoPerfumeCompendiumSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = ScentoPerfumeCompendiumSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### ScentoPerfumeCompendiumSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `Contrast` | `(data) -> ContrastEntity` | Create a Contrast entity instance. |
| `Edit` | `(data) -> EditEntity` | Create an Edit entity instance. |
| `Family` | `(data) -> FamilyEntity` | Create a Family entity instance. |
| `House` | `(data) -> HouseEntity` | Create a House entity instance. |
| `Journal` | `(data) -> JournalEntity` | Create a Journal entity instance. |
| `Lexicon` | `(data) -> LexiconEntity` | Create a Lexicon entity instance. |
| `Match` | `(data) -> MatchEntity` | Create a Match entity instance. |
| `Material` | `(data) -> MaterialEntity` | Create a Material entity instance. |
| `Neighbour` | `(data) -> NeighbourEntity` | Create a Neighbour entity instance. |
| `Perfume` | `(data) -> PerfumeEntity` | Create a Perfume entity instance. |
| `Search` | `(data) -> SearchEntity` | Create a Search entity instance. |
| `Wardrobe` | `(data) -> WardrobeEntity` | Create a Wardrobe entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria, and return it. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all), one per record. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` an `Array` of entities, one
per record; an entity's `data_get` reads its record. On failure they raise a
`ScentoPerfumeCompendiumError` (a `StandardError` subclass), so wrap calls in
`begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### Contrast

| Field | Description |
| --- | --- |
| `label` |  |
| `url` |  |

Operations: List.

API path: `/contrast`

#### Edit

| Field | Description |
| --- | --- |
| `cite` | How to credit the answer. |
| `continuation` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | The tool-specific answer. |
| `folio` | Which tool wrote this answer. |
| `further_reading` |  |
| `id` |  |
| `lede` | One sentence an assistant can quote as is. |
| `scento_page` | The scento.com page to read on. |

Operations: Load.

API path: `/edits/{occasion}`

#### Family

| Field | Description |
| --- | --- |
| `cite` | How to credit the answer. |
| `continuation` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | The tool-specific answer. |
| `folio` | Which tool wrote this answer. |
| `further_reading` |  |
| `id` |  |
| `label` |  |
| `lede` | One sentence an assistant can quote as is. |
| `scento_page` | The scento.com page to read on. |
| `url` |  |

Operations: List, Load.

API path: `/families`

#### House

| Field | Description |
| --- | --- |
| `cite` | How to credit the answer. |
| `continuation` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | The tool-specific answer. |
| `folio` | Which tool wrote this answer. |
| `further_reading` |  |
| `id` |  |
| `lede` | One sentence an assistant can quote as is. |
| `scento_page` | The scento.com page to read on. |

Operations: Load.

API path: `/houses/{house}`

#### Journal

| Field | Description |
| --- | --- |
| `label` |  |
| `url` |  |

Operations: List.

API path: `/journal`

#### Lexicon

| Field | Description |
| --- | --- |
| `cite` | How to credit the answer. |
| `continuation` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | The tool-specific answer. |
| `folio` | Which tool wrote this answer. |
| `further_reading` |  |
| `id` |  |
| `lede` | One sentence an assistant can quote as is. |
| `scento_page` | The scento.com page to read on. |

Operations: Load.

API path: `/lexicon/{term}`

#### Match

| Field | Description |
| --- | --- |
| `label` |  |
| `url` |  |

Operations: List.

API path: `/materials/match`

#### Material

| Field | Description |
| --- | --- |
| `cite` | How to credit the answer. |
| `continuation` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | The tool-specific answer. |
| `folio` | Which tool wrote this answer. |
| `further_reading` |  |
| `id` |  |
| `lede` | One sentence an assistant can quote as is. |
| `scento_page` | The scento.com page to read on. |

Operations: Load.

API path: `/materials/{material}`

#### Neighbour

| Field | Description |
| --- | --- |
| `label` |  |
| `url` |  |

Operations: List.

API path: `/perfumes/{perfume}/neighbours`

#### Perfume

| Field | Description |
| --- | --- |
| `cite` | How to credit the answer. |
| `continuation` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | The tool-specific answer. |
| `folio` | Which tool wrote this answer. |
| `further_reading` |  |
| `id` |  |
| `label` |  |
| `lede` | One sentence an assistant can quote as is. |
| `scento_page` | The scento.com page to read on. |
| `url` |  |

Operations: List, Load.

API path: `/perfumes`

#### Search

| Field | Description |
| --- | --- |
| `label` |  |
| `url` |  |

Operations: List.

API path: `/search`

#### Wardrobe

| Field | Description |
| --- | --- |
| `label` |  |
| `url` |  |

Operations: List.

API path: `/wardrobe`



## Entities


### Contrast

Create an instance: `contrast = client.Contrast`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `String` |  |
| `url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Contrast entities, one per record (raises on error).
contrasts = client.Contrast.list({ "perfume" => [] })
contrasts.each { |item| puts item.data_get }
```


### Edit

Create an instance: `edit = client.Edit`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cite` | `String` | How to credit the answer. |
| `continuation` | `Object` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Hash` | The tool-specific answer. |
| `folio` | `String` | Which tool wrote this answer. |
| `further_reading` | `Array` |  |
| `id` | `String` |  |
| `lede` | `String` | One sentence an assistant can quote as is. |
| `scento_page` | `Hash` | The scento.com page to read on. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Edit record (raises on error).
edit = client.Edit.load({ "id" => "edit_id" })
```


### Family

Create an instance: `family = client.Family`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cite` | `String` | How to credit the answer. |
| `continuation` | `Object` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Hash` | The tool-specific answer. |
| `folio` | `String` | Which tool wrote this answer. |
| `further_reading` | `Array` |  |
| `id` | `String` |  |
| `label` | `String` |  |
| `lede` | `String` | One sentence an assistant can quote as is. |
| `scento_page` | `Hash` | The scento.com page to read on. |
| `url` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Family record (raises on error).
family = client.Family.load({ "id" => "family_id" })
```

#### Example: List

```ruby
# list returns an Array of Family entities, one per record (raises on error).
familys = client.Family.list
familys.each { |item| puts item.data_get }
```


### House

Create an instance: `house = client.House`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cite` | `String` | How to credit the answer. |
| `continuation` | `Object` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Hash` | The tool-specific answer. |
| `folio` | `String` | Which tool wrote this answer. |
| `further_reading` | `Array` |  |
| `id` | `String` |  |
| `lede` | `String` | One sentence an assistant can quote as is. |
| `scento_page` | `Hash` | The scento.com page to read on. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the House record (raises on error).
house = client.House.load({ "id" => "house_id" })
```


### Journal

Create an instance: `journal = client.Journal`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `String` |  |
| `url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Journal entities, one per record (raises on error).
journals = client.Journal.list({ "q" => "example" })
journals.each { |item| puts item.data_get }
```


### Lexicon

Create an instance: `lexicon = client.Lexicon`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cite` | `String` | How to credit the answer. |
| `continuation` | `Object` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Hash` | The tool-specific answer. |
| `folio` | `String` | Which tool wrote this answer. |
| `further_reading` | `Array` |  |
| `id` | `String` |  |
| `lede` | `String` | One sentence an assistant can quote as is. |
| `scento_page` | `Hash` | The scento.com page to read on. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Lexicon record (raises on error).
lexicon = client.Lexicon.load({ "id" => "lexicon_id" })
```


### Match

Create an instance: `match = client.Match`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `String` |  |
| `url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Match entities, one per record (raises on error).
matchs = client.Match.list({ "material" => [] })
matchs.each { |item| puts item.data_get }
```


### Material

Create an instance: `material = client.Material`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cite` | `String` | How to credit the answer. |
| `continuation` | `Object` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Hash` | The tool-specific answer. |
| `folio` | `String` | Which tool wrote this answer. |
| `further_reading` | `Array` |  |
| `id` | `String` |  |
| `lede` | `String` | One sentence an assistant can quote as is. |
| `scento_page` | `Hash` | The scento.com page to read on. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Material record (raises on error).
material = client.Material.load({ "id" => "material_id" })
```


### Neighbour

Create an instance: `neighbour = client.Neighbour`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `String` |  |
| `url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Neighbour entities, one per record (raises on error).
neighbours = client.Neighbour.list({ "perfume_id" => "example" })
neighbours.each { |item| puts item.data_get }
```


### Perfume

Create an instance: `perfume = client.Perfume`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cite` | `String` | How to credit the answer. |
| `continuation` | `Object` | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Hash` | The tool-specific answer. |
| `folio` | `String` | Which tool wrote this answer. |
| `further_reading` | `Array` |  |
| `id` | `String` |  |
| `label` | `String` |  |
| `lede` | `String` | One sentence an assistant can quote as is. |
| `scento_page` | `Hash` | The scento.com page to read on. |
| `url` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Perfume record (raises on error).
perfume = client.Perfume.load({ "id" => "perfume_id" })
```

#### Example: List

```ruby
# list returns an Array of Perfume entities, one per record (raises on error).
perfumes = client.Perfume.list({ "q" => "example" })
perfumes.each { |item| puts item.data_get }
```


### Search

Create an instance: `search = client.Search`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `String` |  |
| `url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Search entities, one per record (raises on error).
searchs = client.Search.list({ "q" => "example" })
searchs.each { |item| puts item.data_get }
```


### Wardrobe

Create an instance: `wardrobe = client.Wardrobe`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `String` |  |
| `url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Wardrobe entities, one per record (raises on error).
wardrobes = client.Wardrobe.list({ "love" => [] })
wardrobes.each { |item| puts item.data_get }
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── ScentoPerfumeCompendium_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`ScentoPerfumeCompendium_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
journal = client.Journal
journal.list({ "q" => "example" })

# journal.data_get now returns the journal data from the last list
# journal.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
