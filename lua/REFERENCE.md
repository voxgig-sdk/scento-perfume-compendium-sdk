# ScentoPerfumeCompendium Lua SDK Reference

Complete API reference for the ScentoPerfumeCompendium Lua SDK.


## ScentoPerfumeCompendiumSDK

### Constructor

```lua
local sdk = require("scento-perfume-compendium_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Contrast(data)`

Create a new `Contrast` entity instance. Pass `nil` for no initial data.

#### `Edit(data)`

Create a new `Edit` entity instance. Pass `nil` for no initial data.

#### `Family(data)`

Create a new `Family` entity instance. Pass `nil` for no initial data.

#### `House(data)`

Create a new `House` entity instance. Pass `nil` for no initial data.

#### `Journal(data)`

Create a new `Journal` entity instance. Pass `nil` for no initial data.

#### `Lexicon(data)`

Create a new `Lexicon` entity instance. Pass `nil` for no initial data.

#### `Match(data)`

Create a new `Match` entity instance. Pass `nil` for no initial data.

#### `Material(data)`

Create a new `Material` entity instance. Pass `nil` for no initial data.

#### `Neighbour(data)`

Create a new `Neighbour` entity instance. Pass `nil` for no initial data.

#### `Perfume(data)`

Create a new `Perfume` entity instance. Pass `nil` for no initial data.

#### `Search(data)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Wardrobe(data)`

Create a new `Wardrobe` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ContrastEntity

```lua
local contrast = client:Contrast(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Contrast():list({ perfume = {} })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContrastEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EditEntity

```lua
local edit = client:Edit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `string|nil` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `table` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `table` | Yes |  |
| `id` | `string` | No |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `table` | Yes | The scento.com page to read on. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Edit():load({ id = "edit_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EditEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FamilyEntity

```lua
local family = client:Family(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `string|nil` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `table` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `table` | Yes |  |
| `id` | `string` | No |  |
| `label` | `string` | Yes |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `table` | Yes | The scento.com page to read on. |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Family():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Family():load({ id = "family_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FamilyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HouseEntity

```lua
local house = client:House(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `string|nil` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `table` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `table` | Yes |  |
| `id` | `string` | No |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `table` | Yes | The scento.com page to read on. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:House():load({ id = "house_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HouseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## JournalEntity

```lua
local journal = client:Journal(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Journal():list({ q = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JournalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LexiconEntity

```lua
local lexicon = client:Lexicon(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `string|nil` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `table` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `table` | Yes |  |
| `id` | `string` | No |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `table` | Yes | The scento.com page to read on. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Lexicon():load({ id = "lexicon_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LexiconEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MatchEntity

```lua
local match = client:Match(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Match():list({ material = {} })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MatchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MaterialEntity

```lua
local material = client:Material(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `string|nil` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `table` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `table` | Yes |  |
| `id` | `string` | No |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `table` | Yes | The scento.com page to read on. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Material():load({ id = "material_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MaterialEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeighbourEntity

```lua
local neighbour = client:Neighbour(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Neighbour():list({ perfume_id = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeighbourEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PerfumeEntity

```lua
local perfume = client:Perfume(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `string|nil` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `table` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `table` | Yes |  |
| `id` | `string` | No |  |
| `label` | `string` | Yes |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `table` | Yes | The scento.com page to read on. |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Perfume():list({ q = "example" })
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Perfume():load({ id = "perfume_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PerfumeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SearchEntity

```lua
local search = client:Search(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Search():list({ q = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WardrobeEntity

```lua
local wardrobe = client:Wardrobe(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Wardrobe():list({ love = {} })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WardrobeEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
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

