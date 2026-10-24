# Scento Perfume API

> Free perfume and fragrance API and MCP server for AI assistants, built on Scento&#39;s verified perfume database: notes, scent families, similar perfumes, raw materials and houses, each answer linked to a page on scento.com. Covers 1,400+ designer and niche perfumes, 400+ raw materials and 140+ perfume houses. No key, no account.
>
> The same twelve read-only answers as the MCP server at https://www.scento.com/mcp. Every answer is a folio: a quotable lede, a detail object, the scento.com page to read on, further reading and a cite line. Lists return an opaque continuation value. Comma-separated values are accepted wherever a list is expected.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 12 entities and 14 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Contrast

Results: A folio answer.

SDK operations: `list`.

### Edit

Results: A folio answer.

SDK operations: `load`.

Key fields to recognise:

- `cite`: How to credit the answer.
- `continuation`: Pass back to fetch the next part of a list; null when complete.
- `detail`: The tool-specific answer.
- `folio`: Which tool wrote this answer.
- `lede`: One sentence an assistant can quote as is.

### Family

Results: A folio answer.

SDK operations: `list`, `load`.

Key fields to recognise:

- `cite`: How to credit the answer.
- `continuation`: Pass back to fetch the next part of a list; null when complete.
- `detail`: The tool-specific answer.
- `folio`: Which tool wrote this answer.
- `lede`: One sentence an assistant can quote as is.

### House

Results: A folio answer.

SDK operations: `load`.

Key fields to recognise:

- `cite`: How to credit the answer.
- `continuation`: Pass back to fetch the next part of a list; null when complete.
- `detail`: The tool-specific answer.
- `folio`: Which tool wrote this answer.
- `lede`: One sentence an assistant can quote as is.

### Journal

Results: A folio answer.

SDK operations: `list`.

### Lexicon

Results: A folio answer.

SDK operations: `load`.

Key fields to recognise:

- `cite`: How to credit the answer.
- `continuation`: Pass back to fetch the next part of a list; null when complete.
- `detail`: The tool-specific answer.
- `folio`: Which tool wrote this answer.
- `lede`: One sentence an assistant can quote as is.

### Match

Results: A folio answer.

SDK operations: `list`.

### Material

Results: A folio answer.

SDK operations: `load`.

Key fields to recognise:

- `cite`: How to credit the answer.
- `continuation`: Pass back to fetch the next part of a list; null when complete.
- `detail`: The tool-specific answer.
- `folio`: Which tool wrote this answer.
- `lede`: One sentence an assistant can quote as is.

### Neighbour

Results: A folio answer.

SDK operations: `list`.

### Perfume

Results: A folio answer.

SDK operations: `list`, `load`.

Key fields to recognise:

- `cite`: How to credit the answer.
- `continuation`: Pass back to fetch the next part of a list; null when complete.
- `detail`: The tool-specific answer.
- `folio`: Which tool wrote this answer.
- `lede`: One sentence an assistant can quote as is.

### Search

Results: A folio answer.

SDK operations: `list`.

### Wardrobe

Results: A folio answer.

SDK operations: `list`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Contrast | `list` | `GET /contrast` | Not required |
| Edit | `load` | `GET /edits/{occasion}` | Not required |
| Family | `list` | `GET /families` | Not required |
| Family | `load` | `GET /families/{family}` | Not required |
| House | `load` | `GET /houses/{house}` | Not required |
| Journal | `list` | `GET /journal` | Not required |
| Lexicon | `load` | `GET /lexicon/{term}` | Not required |
| Match | `list` | `GET /materials/match` | Not required |
| Material | `load` | `GET /materials/{material}` | Not required |
| Neighbour | `list` | `GET /perfumes/{perfume}/neighbours` | Not required |
| Perfume | `list` | `GET /perfumes` | Not required |
| Perfume | `load` | `GET /perfumes/{perfume}` | Not required |
| Search | `list` | `GET /search` | Not required |
| Wardrobe | `list` | `GET /wardrobe` | Not required |

## Connect to the API

- API server: `https://www.scento.com/api/perfume/v1`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /families`. For example:

```sh
curl --fail-with-body --silent --show-error 'https://www.scento.com/api/perfume/v1/families'
```

Inspect the response using the Family reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `scento-perfume-compendium_list`: List records for an entity. Supported entities: `contrast`, `family`, `journal`, `match`, `neighbour`, `perfume`, `search`, `wardrobe`.
- `scento-perfume-compendium_load`: Load one record for an entity. Supported entities: `edit`, `family`, `house`, `lexicon`, `material`, `perfume`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

