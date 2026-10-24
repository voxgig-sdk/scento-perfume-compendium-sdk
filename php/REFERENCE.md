# ScentoPerfumeCompendium PHP SDK Reference

Complete API reference for the ScentoPerfumeCompendium PHP SDK.


## ScentoPerfumeCompendiumSDK

### Constructor

```php
require_once __DIR__ . '/scentoperfumecompendium_sdk.php';

$client = new ScentoPerfumeCompendiumSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ScentoPerfumeCompendiumSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = ScentoPerfumeCompendiumSDK::test();
```


### Instance Methods

#### `Contrast($data = null)`

Create a new `ContrastEntity` instance. Pass `null` for no initial data.

#### `Edit($data = null)`

Create a new `EditEntity` instance. Pass `null` for no initial data.

#### `Family($data = null)`

Create a new `FamilyEntity` instance. Pass `null` for no initial data.

#### `House($data = null)`

Create a new `HouseEntity` instance. Pass `null` for no initial data.

#### `Journal($data = null)`

Create a new `JournalEntity` instance. Pass `null` for no initial data.

#### `Lexicon($data = null)`

Create a new `LexiconEntity` instance. Pass `null` for no initial data.

#### `Match($data = null)`

Create a new `MatchEntity` instance. Pass `null` for no initial data.

#### `Material($data = null)`

Create a new `MaterialEntity` instance. Pass `null` for no initial data.

#### `Neighbour($data = null)`

Create a new `NeighbourEntity` instance. Pass `null` for no initial data.

#### `Perfume($data = null)`

Create a new `PerfumeEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `Wardrobe($data = null)`

Create a new `WardrobeEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): ScentoPerfumeCompendiumUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ContrastEntity

```php
$contrast = $client->Contrast();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Contrast()->list(["perfume" => []]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContrastEntity`

Create a new `ContrastEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EditEntity

```php
$edit = $client->Edit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `mixed` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `array` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `array` | Yes |  |
| `id` | `string` | No |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `array` | Yes | The scento.com page to read on. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Edit()->load(["id" => "edit_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EditEntity`

Create a new `EditEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FamilyEntity

```php
$family = $client->Family();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `mixed` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `array` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `array` | Yes |  |
| `id` | `string` | No |  |
| `label` | `string` | Yes |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `array` | Yes | The scento.com page to read on. |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Family()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Family()->load(["id" => "family_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FamilyEntity`

Create a new `FamilyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HouseEntity

```php
$house = $client->House();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `mixed` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `array` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `array` | Yes |  |
| `id` | `string` | No |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `array` | Yes | The scento.com page to read on. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->House()->load(["id" => "house_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HouseEntity`

Create a new `HouseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## JournalEntity

```php
$journal = $client->Journal();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Journal()->list(["q" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): JournalEntity`

Create a new `JournalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LexiconEntity

```php
$lexicon = $client->Lexicon();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `mixed` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `array` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `array` | Yes |  |
| `id` | `string` | No |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `array` | Yes | The scento.com page to read on. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Lexicon()->load(["id" => "lexicon_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LexiconEntity`

Create a new `LexiconEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MatchEntity

```php
$match = $client->Match();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Match()->list(["material" => []]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MatchEntity`

Create a new `MatchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MaterialEntity

```php
$material = $client->Material();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `mixed` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `array` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `array` | Yes |  |
| `id` | `string` | No |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `array` | Yes | The scento.com page to read on. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Material()->load(["id" => "material_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MaterialEntity`

Create a new `MaterialEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeighbourEntity

```php
$neighbour = $client->Neighbour();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Neighbour()->list(["perfume_id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeighbourEntity`

Create a new `NeighbourEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PerfumeEntity

```php
$perfume = $client->Perfume();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `string` | Yes | How to credit the answer. |
| `continuation` | `mixed` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `array` | Yes | The tool-specific answer. |
| `folio` | `string` | Yes | Which tool wrote this answer. |
| `further_reading` | `array` | Yes |  |
| `id` | `string` | No |  |
| `label` | `string` | Yes |  |
| `lede` | `string` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `array` | Yes | The scento.com page to read on. |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Perfume()->list(["q" => "example"]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Perfume()->load(["id" => "perfume_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PerfumeEntity`

Create a new `PerfumeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Search()->list(["q" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WardrobeEntity

```php
$wardrobe = $client->Wardrobe();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Wardrobe()->list(["love" => []]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WardrobeEntity`

Create a new `WardrobeEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new ScentoPerfumeCompendiumSDK([
  "feature" => [
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

