# ScentoPerfumeCompendium Python SDK Reference

Complete API reference for the ScentoPerfumeCompendium Python SDK.


## ScentoPerfumeCompendiumSDK

### Constructor

```python
from scentoperfumecompendium_sdk import ScentoPerfumeCompendiumSDK

client = ScentoPerfumeCompendiumSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ScentoPerfumeCompendiumSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = ScentoPerfumeCompendiumSDK.test()
```


### Instance Methods

#### `Contrast(data=None)`

Create a new `ContrastEntity` instance. Pass `None` for no initial data.

#### `Edit(data=None)`

Create a new `EditEntity` instance. Pass `None` for no initial data.

#### `Family(data=None)`

Create a new `FamilyEntity` instance. Pass `None` for no initial data.

#### `House(data=None)`

Create a new `HouseEntity` instance. Pass `None` for no initial data.

#### `Journal(data=None)`

Create a new `JournalEntity` instance. Pass `None` for no initial data.

#### `Lexicon(data=None)`

Create a new `LexiconEntity` instance. Pass `None` for no initial data.

#### `Match(data=None)`

Create a new `MatchEntity` instance. Pass `None` for no initial data.

#### `Material(data=None)`

Create a new `MaterialEntity` instance. Pass `None` for no initial data.

#### `Neighbour(data=None)`

Create a new `NeighbourEntity` instance. Pass `None` for no initial data.

#### `Perfume(data=None)`

Create a new `PerfumeEntity` instance. Pass `None` for no initial data.

#### `Search(data=None)`

Create a new `SearchEntity` instance. Pass `None` for no initial data.

#### `Wardrobe(data=None)`

Create a new `WardrobeEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ContrastEntity

```python
contrast = client.Contrast()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[ContrastEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Contrast().list({"perfume": []})
for contrast in results:
    print(contrast.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContrastEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EditEntity

```python
edit = client.Edit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `str` | Yes | How to credit the answer. |
| `continuation` | `str | None` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `dict` | Yes | The tool-specific answer. |
| `folio` | `str` | Yes | Which tool wrote this answer. |
| `further_reading` | `list` | Yes |  |
| `id` | `str` | No |  |
| `lede` | `str` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `dict` | Yes | The scento.com page to read on. |

### Operations

#### `load(reqmatch, ctrl=None) -> EditEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Edit().load({"id": "edit_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EditEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FamilyEntity

```python
family = client.Family()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `str` | Yes | How to credit the answer. |
| `continuation` | `str | None` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `dict` | Yes | The tool-specific answer. |
| `folio` | `str` | Yes | Which tool wrote this answer. |
| `further_reading` | `list` | Yes |  |
| `id` | `str` | No |  |
| `label` | `str` | Yes |  |
| `lede` | `str` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `dict` | Yes | The scento.com page to read on. |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[FamilyEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Family().list()
for family in results:
    print(family.data_get())
```

#### `load(reqmatch, ctrl=None) -> FamilyEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Family().load({"id": "family_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FamilyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HouseEntity

```python
house = client.House()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `str` | Yes | How to credit the answer. |
| `continuation` | `str | None` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `dict` | Yes | The tool-specific answer. |
| `folio` | `str` | Yes | Which tool wrote this answer. |
| `further_reading` | `list` | Yes |  |
| `id` | `str` | No |  |
| `lede` | `str` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `dict` | Yes | The scento.com page to read on. |

### Operations

#### `load(reqmatch, ctrl=None) -> HouseEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.House().load({"id": "house_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HouseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## JournalEntity

```python
journal = client.Journal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[JournalEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Journal().list({"q": "example"})
for journal in results:
    print(journal.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JournalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LexiconEntity

```python
lexicon = client.Lexicon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `str` | Yes | How to credit the answer. |
| `continuation` | `str | None` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `dict` | Yes | The tool-specific answer. |
| `folio` | `str` | Yes | Which tool wrote this answer. |
| `further_reading` | `list` | Yes |  |
| `id` | `str` | No |  |
| `lede` | `str` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `dict` | Yes | The scento.com page to read on. |

### Operations

#### `load(reqmatch, ctrl=None) -> LexiconEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Lexicon().load({"id": "lexicon_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LexiconEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MatchEntity

```python
match = client.Match()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[MatchEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Match().list({"material": []})
for match in results:
    print(match.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MatchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MaterialEntity

```python
material = client.Material()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `str` | Yes | How to credit the answer. |
| `continuation` | `str | None` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `dict` | Yes | The tool-specific answer. |
| `folio` | `str` | Yes | Which tool wrote this answer. |
| `further_reading` | `list` | Yes |  |
| `id` | `str` | No |  |
| `lede` | `str` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `dict` | Yes | The scento.com page to read on. |

### Operations

#### `load(reqmatch, ctrl=None) -> MaterialEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Material().load({"id": "material_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MaterialEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeighbourEntity

```python
neighbour = client.Neighbour()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[NeighbourEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Neighbour().list({"perfume_id": "example"})
for neighbour in results:
    print(neighbour.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeighbourEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PerfumeEntity

```python
perfume = client.Perfume()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cite` | `str` | Yes | How to credit the answer. |
| `continuation` | `str | None` | Yes | Pass back to fetch the next part of a list; null when complete. |
| `detail` | `dict` | Yes | The tool-specific answer. |
| `folio` | `str` | Yes | Which tool wrote this answer. |
| `further_reading` | `list` | Yes |  |
| `id` | `str` | No |  |
| `label` | `str` | Yes |  |
| `lede` | `str` | Yes | One sentence an assistant can quote as is. |
| `scento_page` | `dict` | Yes | The scento.com page to read on. |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[PerfumeEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Perfume().list({"q": "example"})
for perfume in results:
    print(perfume.data_get())
```

#### `load(reqmatch, ctrl=None) -> PerfumeEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Perfume().load({"id": "perfume_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PerfumeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchEntity

```python
search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[SearchEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Search().list({"q": "example"})
for search in results:
    print(search.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WardrobeEntity

```python
wardrobe = client.Wardrobe()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[WardrobeEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Wardrobe().list({"love": []})
for wardrobe in results:
    print(wardrobe.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WardrobeEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = ScentoPerfumeCompendiumSDK({
    "feature": {
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

