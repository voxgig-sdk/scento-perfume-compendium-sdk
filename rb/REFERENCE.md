# ScentoPerfumeCompendium Ruby SDK Reference

Complete API reference for the ScentoPerfumeCompendium Ruby SDK.


## ScentoPerfumeCompendiumSDK

### Constructor

```ruby
require_relative 'ScentoPerfumeCompendium_sdk'

client = ScentoPerfumeCompendiumSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ScentoPerfumeCompendiumSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = ScentoPerfumeCompendiumSDK.test
```


### Instance Methods

#### `Contrast(data = nil)`

Create a new `Contrast` entity instance. Pass `nil` for no initial data.

#### `Edit(data = nil)`

Create a new `Edit` entity instance. Pass `nil` for no initial data.

#### `Family(data = nil)`

Create a new `Family` entity instance. Pass `nil` for no initial data.

#### `House(data = nil)`

Create a new `House` entity instance. Pass `nil` for no initial data.

#### `Journal(data = nil)`

Create a new `Journal` entity instance. Pass `nil` for no initial data.

#### `Lexicon(data = nil)`

Create a new `Lexicon` entity instance. Pass `nil` for no initial data.

#### `Match(data = nil)`

Create a new `Match` entity instance. Pass `nil` for no initial data.

#### `Material(data = nil)`

Create a new `Material` entity instance. Pass `nil` for no initial data.

#### `Neighbour(data = nil)`

Create a new `Neighbour` entity instance. Pass `nil` for no initial data.

#### `Perfume(data = nil)`

Create a new `Perfume` entity instance. Pass `nil` for no initial data.

#### `Search(data = nil)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Wardrobe(data = nil)`

Create a new `Wardrobe` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ContrastEntity

```ruby
contrast = client.Contrast
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Contrast.list({ "perfume" => [] })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ContrastEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EditEntity

```ruby
edit = client.Edit
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `String` | Yes | How to credit the answer. |
| `continuation` | `Object` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Hash` | Yes | The tool-specific answer. |
| `folio` | `String` | Yes | Which tool wrote this answer. |
| `further_reading` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `lede` | `String` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `Hash` | Yes | The scento.com page to read on. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Edit.load({ "id" => "edit_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EditEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FamilyEntity

```ruby
family = client.Family
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `String` | Yes | How to credit the answer. |
| `continuation` | `Object` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Hash` | Yes | The tool-specific answer. |
| `folio` | `String` | Yes | Which tool wrote this answer. |
| `further_reading` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `label` | `String` | Yes |  |
| `lede` | `String` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `Hash` | Yes | The scento.com page to read on. |
| `url` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Family.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Family.load({ "id" => "family_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FamilyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HouseEntity

```ruby
house = client.House
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `String` | Yes | How to credit the answer. |
| `continuation` | `Object` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Hash` | Yes | The tool-specific answer. |
| `folio` | `String` | Yes | Which tool wrote this answer. |
| `further_reading` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `lede` | `String` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `Hash` | Yes | The scento.com page to read on. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.House.load({ "id" => "house_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HouseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## JournalEntity

```ruby
journal = client.Journal
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Journal.list({ "q" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `JournalEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LexiconEntity

```ruby
lexicon = client.Lexicon
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `String` | Yes | How to credit the answer. |
| `continuation` | `Object` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Hash` | Yes | The tool-specific answer. |
| `folio` | `String` | Yes | Which tool wrote this answer. |
| `further_reading` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `lede` | `String` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `Hash` | Yes | The scento.com page to read on. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Lexicon.load({ "id" => "lexicon_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LexiconEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MatchEntity

```ruby
match = client.Match
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Match.list({ "material" => [] })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MatchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MaterialEntity

```ruby
material = client.Material
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `String` | Yes | How to credit the answer. |
| `continuation` | `Object` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Hash` | Yes | The tool-specific answer. |
| `folio` | `String` | Yes | Which tool wrote this answer. |
| `further_reading` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `lede` | `String` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `Hash` | Yes | The scento.com page to read on. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Material.load({ "id" => "material_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MaterialEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeighbourEntity

```ruby
neighbour = client.Neighbour
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Neighbour.list({ "perfume_id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeighbourEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PerfumeEntity

```ruby
perfume = client.Perfume
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `String` | Yes | How to credit the answer. |
| `continuation` | `Object` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Hash` | Yes | The tool-specific answer. |
| `folio` | `String` | Yes | Which tool wrote this answer. |
| `further_reading` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `label` | `String` | Yes |  |
| `lede` | `String` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `Hash` | Yes | The scento.com page to read on. |
| `url` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Perfume.list({ "q" => "example" })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Perfume.load({ "id" => "perfume_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PerfumeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SearchEntity

```ruby
search = client.Search
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Search.list({ "q" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WardrobeEntity

```ruby
wardrobe = client.Wardrobe
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Wardrobe.list({ "love" => [] })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WardrobeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```ruby
client = ScentoPerfumeCompendiumSDK.new({
  "feature" => {
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `now` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

