# ScentoPerfumeCompendium TypeScript SDK Reference

Complete API reference for the ScentoPerfumeCompendium TypeScript SDK.


## ScentoPerfumeCompendiumSDK

### Constructor

```ts
new ScentoPerfumeCompendiumSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ScentoPerfumeCompendiumSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = ScentoPerfumeCompendiumSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `ScentoPerfumeCompendiumSDK` instance in test mode.


### Instance Methods

#### `Contrast(data?: object)`

Create a new `Contrast` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContrastEntity` instance.

#### `Edit(data?: object)`

Create a new `Edit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EditEntity` instance.

#### `Family(data?: object)`

Create a new `Family` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FamilyEntity` instance.

#### `House(data?: object)`

Create a new `House` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HouseEntity` instance.

#### `Journal(data?: object)`

Create a new `Journal` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JournalEntity` instance.

#### `Lexicon(data?: object)`

Create a new `Lexicon` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LexiconEntity` instance.

#### `Match(data?: object)`

Create a new `Match` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MatchEntity` instance.

#### `Material(data?: object)`

Create a new `Material` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MaterialEntity` instance.

#### `Neighbour(data?: object)`

Create a new `Neighbour` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeighbourEntity` instance.

#### `Perfume(data?: object)`

Create a new `Perfume` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PerfumeEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `Wardrobe(data?: object)`

Create a new `Wardrobe` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WardrobeEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |
| `fetchargs.ctrl.signal` | `AbortSignal` | Aborts the request in flight: `ok` is then `false` and `err.code` is `request_aborted`. |

**Returns:** `Promise<{ ok, status, headers, data }>`. On a failure
`ok` is `false` and `err` holds the error.

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `ScentoPerfumeCompendiumSDK.test()`.

**Returns:** `ScentoPerfumeCompendiumSDK` instance in test mode.

#### Cancelling a call

Every entity operation takes an optional `ctrl` object after its match or
data, and an `AbortSignal` in `ctrl.signal` cancels the request in flight.
The operation then rejects with an error whose `code` is
`request_aborted` and whose `cause` is the signal's reason. A request
whose signal has already aborted is not sent. `stream()` takes the signal
as `callopts.signal`, and ends when it aborts.


---

## ContrastEntity

```ts
const contrast = client.Contrast()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Contrast().list({ perfume: [] })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContrastEntity` instance with the same client and
options.

#### `client()`

Return the parent `ScentoPerfumeCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EditEntity

```ts
const edit = client.Edit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `string | null` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Record<string, any>` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `Record<string, any>` | Yes | The scento.com page to read on. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Edit().load({ id: 'edit_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EditEntity` instance with the same client and
options.

#### `client()`

Return the parent `ScentoPerfumeCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FamilyEntity

```ts
const family = client.Family()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `string | null` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Record<string, any>` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `label` | `string` | Yes |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `Record<string, any>` | Yes | The scento.com page to read on. |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Family().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Family().load({ id: 'family_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FamilyEntity` instance with the same client and
options.

#### `client()`

Return the parent `ScentoPerfumeCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HouseEntity

```ts
const house = client.House()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `string | null` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Record<string, any>` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `Record<string, any>` | Yes | The scento.com page to read on. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.House().load({ id: 'house_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HouseEntity` instance with the same client and
options.

#### `client()`

Return the parent `ScentoPerfumeCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JournalEntity

```ts
const journal = client.Journal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Journal().list({ q: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JournalEntity` instance with the same client and
options.

#### `client()`

Return the parent `ScentoPerfumeCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LexiconEntity

```ts
const lexicon = client.Lexicon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `string | null` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Record<string, any>` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `Record<string, any>` | Yes | The scento.com page to read on. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Lexicon().load({ id: 'lexicon_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LexiconEntity` instance with the same client and
options.

#### `client()`

Return the parent `ScentoPerfumeCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MatchEntity

```ts
const match = client.Match()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Match().list({ material: [] })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MatchEntity` instance with the same client and
options.

#### `client()`

Return the parent `ScentoPerfumeCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MaterialEntity

```ts
const material = client.Material()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `string | null` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Record<string, any>` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `Record<string, any>` | Yes | The scento.com page to read on. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Material().load({ id: 'material_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MaterialEntity` instance with the same client and
options.

#### `client()`

Return the parent `ScentoPerfumeCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeighbourEntity

```ts
const neighbour = client.Neighbour()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Neighbour().list({ perfume_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeighbourEntity` instance with the same client and
options.

#### `client()`

Return the parent `ScentoPerfumeCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PerfumeEntity

```ts
const perfume = client.Perfume()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `string | null` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `Record<string, any>` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `label` | `string` | Yes |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `Record<string, any>` | Yes | The scento.com page to read on. |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Perfume().list({ q: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Perfume().load({ id: 'perfume_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PerfumeEntity` instance with the same client and
options.

#### `client()`

Return the parent `ScentoPerfumeCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Search().list({ q: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `ScentoPerfumeCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WardrobeEntity

```ts
const wardrobe = client.Wardrobe()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Wardrobe().list({ love: [] })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WardrobeEntity` instance with the same client and
options.

#### `client()`

Return the parent `ScentoPerfumeCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```ts
const client = new ScentoPerfumeCompendiumSDK({
  feature: {
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

