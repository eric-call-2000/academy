# Advanced API Design — "Design the API other people build on" (id: `api`, prefix: `api`, icon 🔌, level Advanced, 10 units)

## Verdict
STANDALONE, built mostly on the plain `js` Worker with Back-End Foundations' request shape, plus
ONE new engine (`apisim.js`) for the two topics that cannot be taught honestly without one:
GraphQL execution and schema-checked contracts.

Why standalone: `srv` stops exactly where API *design* starts. It teaches a route, a status code,
offset pagination, an error envelope and a token check — one honest function at a time. Nothing in
the catalog teaches what happens when the client retries, when two clients write at once, when the
list changes between page 1 and page 2, when one caller sends 10,000 requests a minute, or when the
API is described by a document other teams generate code from. Those are what separate "it returns
JSON" from an API people can build on, and they are what this course grades.

Why `js` lessons and not a simulator for the REST half: every rule here is a pure function of a
request and some server state — `handleRequest(req) → { status, headers, body }`, the shape `srv`
already taught. Idempotency, conditional requests, cursors and rate limits are graded by *calling the
handler the way a hostile or unlucky client would*: retry it, race it, insert a row between two page
requests, advance the clock across a window boundary. No engine needed; the fake clock (`clock`) and
the crypto harness (`crypto: true`) already exist.

Why an engine for GraphQL and contracts: a GraphQL lesson without an executor is a quiz about syntax,
and a contract lesson without a schema validator is a regex on a document. `apisim.js` gives lessons
`graphql()` / `gqlParse()` (a real, small GraphQL executor over SDL) and `validate()` / `oasFind()`
(a JSON Schema subset and an OpenAPI path matcher). Learners write the resolvers, the loaders, the
depth limit, the schemas and the contract tests; the engine only does what graphql-js and a schema
validator would do for them in real life.

## Scope boundary (decided 2026-10-07)
**Versioning, deprecation and backward compatibility are OUT.** Changing Live Systems (`change`,
PR #48) owns them: additive change, the tolerant reader, Stripe-style version changes, the
`Deprecation` / `Sunset` headers and retiring a field. `senior-curriculum.md` records that `change`
absorbs that part of this stub. This course names `change` in the U1 brief and the final quiz instead
of teaching any of it twice.

Also out, each a sentence in a brief, never a graded step: authentication and API keys (`auth`, `srv`
U5), CORS (`sec`), HTTP caching semantics from the client's side (`web` U6 — this course is the
server's side of the same headers), gRPC/protobuf, HATEOAS, GraphQL subscriptions and federation,
and generating SDKs from OpenAPI.

## Size
10 units, 49 items: 29 coding lessons, 6 concept lessons, 2 projects, 10 quizzes. Modelled at the
authored minutes (12–15 per coding lesson, ~12 per concept lesson, 35 per project) that is ~9.5 h —
**5 credits, `{ be: 4, integ: 1 }`**: Backend for the server-side design, Integration for the parts
that exist because other systems consume the API (webhooks, GraphQL, contracts). The stub's planned
5 holds even with versioning carved off, because the stub never had idempotency, concurrency or
contracts in it. Not required by any job sheet; it is the elective a backend learner takes after
`srv`, `web` and `auth`.

## Conventions every lesson keeps
- Request `{ method, path, query, headers, body }`, response `{ status, headers, body }` — the
  `srv` U3 shape. **Header names are lowercase on both sides** (HTTP/2 sends them that way), so a
  checkpoint reads `res.headers["retry-after"]`, never a case-insensitive lookup.
- Every error from U1-3 on is an **RFC 9457 problem** (`application/problem+json`, `type`, `title`,
  `status`, `detail`, extensions). Lessons after U1 hand the learner `problem()` in the starter.
- Time is `now()` from `clock`, never `Date.now()` (gated for the `api-` prefix). Randomness is an
  injected function the checkpoint controls. Concurrency is real promises inside one Worker, ordered
  by `T.sleep`, never by timing luck.
- Grade the BEHAVIOUR a client sees — status, headers, body, how many times the card was charged —
  never the text of the learner's code.

## Engine: `apisim.js`
One self-contained function, `window.CODELAB_APISIM = function apisim(g) {…}`, copied into the
Worker by runner.js when a lesson sets `apisim: true` (the `authsim.js` pattern, one line in
`buildWorkerSrc`). Contract: `tools/test-apisim.js`, written first, run as a phase-0 gate.

- **GraphQL** (~700 lines). Lexer and parser for executable documents (query/mutation operations,
  names, variables with defaults, arguments, aliases, named fragments, inline fragments on the
  current type, `@skip`/`@include`) and for SDL (`type`, `input`, `enum`, field arguments with
  defaults, `!` and `[…]`, built-in scalars `ID Int Float String Boolean`). Validation of the
  document against the schema (unknown field, missing sub-selection, selection on a scalar, unknown
  or missing required argument, undefined variable, unknown fragment) with spec-shaped messages.
  Execution per the spec: default resolver `parent[field]`, resolvers `(parent, args, context,
  info)`, sibling fields and list items started before any is awaited (so a DataLoader batches the
  way it does in graphql-js), input coercion of variables and literals, result coercion of scalars
  and enums, errors with `message`, `path` and `extensions`, and null propagation to the nearest
  nullable parent. `gqlParse(src)` exposes the AST for the depth-limit lesson. Not modelled:
  subscriptions, interfaces/unions, directives beyond skip/include, introspection, custom scalars.
- **Contracts** (~250 lines). `validate(schema, value, root)` — a JSON Schema 2020-12 subset
  (`type` incl. arrays of types, `properties`, `required`, `additionalProperties: false`, `items`,
  `enum`, `const`, `minimum`/`maximum`, `minLength`/`maxLength`, `pattern`, `minItems`, `$ref` into
  `#/components/schemas`) returning `[{ pointer, message }]` with RFC 6901 pointers.
  `oasFind(spec, method, path)` matches a concrete path against templated OpenAPI paths and returns
  `{ operation, params }`.

## Overlaps
1. **Back-End Foundations (`srv`).** Same handler shape; this course starts where `srv` U6 ends.
   Offset pagination (`srv-u6-4`) is the thing U2 shows breaking. PUT vs PATCH (`srv-u2-4`) is the
   thing U3's JSON Merge Patch makes precise.
2. **How the Web Works (`web`).** `web` U4 teaches which methods are idempotent and U6 teaches
   caching from the client's chair. U4 and U5 here are the server's side: issuing ETags, honouring
   `If-Match`, making a non-idempotent POST safe to retry. Neither re-teaches the other.
3. **Authentication (`auth`).** HMAC is taught there; U7's webhook receiver uses `hmac()` from the
   crypto harness and spends its time on replay windows and deduplication instead.
4. **Changing Live Systems (`change`).** Owns versioning and deprecation (see Scope boundary).
5. **Testing Fundamentals (`test`).** U9's contract test is a test in the `test` sense; it does not
   re-teach assertions, only what a contract adds (the document is the oracle).

## Units

### Unit 1 — Resources, status codes and errors
Concept: resources, not actions — collections, items, nesting vs filtering, custom methods
(`POST /orders/7:cancel`). Coding: a notes resource with 201 + `location`, 204, and 405 + `allow`
vs 404; RFC 9457 problem details with 400 (malformed JSON) vs 422 (valid JSON, invalid values) and
an `errors` array of `{ detail, pointer }`; an order state machine where an impossible transition is
a 409 and a repeated cancel is not an error. Graded on status, headers and body.

### Unit 2 — Pagination that survives writes
Concept: why offset pagination duplicates and skips rows when the list changes, and why deep offsets
cost a scan. Coding: keyset pagination with an opaque cursor and an `id` tiebreaker, graded by
inserting rows between page requests; limits (coerce above the max, reject below 1), a tampered
cursor answering 400 not 500, and an RFC 8288 `link: <…>; rel="next"` header; allowlisted filters
and sorts, with the cursor bound to the query that made it (Google AIP-158).

### Unit 3 — Shaping responses
Coding: sparse fieldsets (`?fields=`), `?expand=author` that loads related records in ONE batched
call (counted), JSON Merge Patch (RFC 7396) with `415` for the wrong media type and `422` for
read-only fields. Concept: representations that age well — integer minor units for money, RFC 3339
UTC timestamps, string IDs past 2^53, `null` vs absent.

### Unit 4 — Safe retries: idempotency keys
Concept: a timeout is ambiguous, POST is not idempotent, and the client is going to retry. Coding:
`Idempotency-Key` that charges once and replays the stored response with `idempotent-replayed`;
key misuse (same key, different body → 422; validation failures not stored; keys scoped per client;
expiry after 24 h on the fake clock); two concurrent requests with one key → 409, not two charges.

### Unit 5 — Concurrency and conditional requests
Coding: issuing ETags and answering `If-None-Match` with 304 (weak comparison); `If-Match` on writes
— 428 when missing, 412 when stale, strong comparison so `W/"…"` never matches — and
`If-None-Match: *` for create-only; the client's optimistic-concurrency loop (GET, change, PUT with
`If-Match`, re-read on 412). Concept: `Cache-Control` and `Vary` for API responses — what a shared
cache does with a request that carried `Authorization` (RFC 9111 §3.5).

### Unit 6 — Rate limiting
All on the fake clock. Fixed window with 429 + `retry-after` + `x-ratelimit-remaining`; the
boundary burst and Cloudflare's sliding-window counter; a token bucket with lazy refill and
per-endpoint cost; the client side — exponential backoff with full jitter (AWS), `retry-after` wins,
never retry a 4xx other than 429, never retry a POST without an idempotency key.

### Unit 7 — Caching and work that takes a while
Cache-aside with TTL and invalidate-on-write (DB loads counted); a cache stampede coalesced into one
load, with a failed load never cached; `202 Accepted` + `location: /operations/…` for a long-running
export, polled to `succeeded`/`failed`; a webhook receiver that verifies an HMAC signature over
`timestamp.body`, rejects replays outside 300 s, deduplicates by event id and ignores out-of-order
older events.

### Unit 8 — GraphQL (apisim)
Concept: one endpoint, a typed schema, the query shapes the response; partial data and `errors`;
when REST is the better choice. Coding: SDL + resolvers with arguments and variables; the N+1
problem and a hand-built DataLoader (batch per tick, dedupe, results in key order); mutations with
`BAD_USER_INPUT` errors and a query depth limit that follows fragment spreads.

### Unit 9 — Contracts: OpenAPI (apisim)
Coding: write an OpenAPI 3.1 document whose schemas accept the real responses AND reject wrong ones;
a contract test that runs the handler and reports undocumented statuses, wrong media types and
schema violations; request validation driven by the same document, answering 422 problems with
JSON-pointer `errors`.

### Unit 10 — Projects
A payments API (problems, idempotency keys, cursor pagination, ETags + `If-Match`, a token bucket)
and a GraphQL bookshop (connections-style cursor pagination, loaders, a depth limit, mutation
errors). Final quiz across the course.

## Risks
- **Key order.** `T.eq` is JSON equality, so object key order matters. Checkpoints compare problem
  bodies field by field, and every brief that specifies an object spells out the order.
- **Concurrency lessons** (U4-4, U7-2, U8-3) must create the race deterministically — start both
  calls before awaiting either, and let `T.sleep` order the rest.
- **Engine bugs grade learners.** `test-apisim.js` pins the executor against hand-checked
  results, including list batching order and null propagation, before any lesson uses it.

## Sources
- RFC 9110 HTTP Semantics — methods, 201/202/204/405/409/412/415/422, `Location`, `Allow`,
  conditional requests and entity-tag comparison (§8.8.3, §13).
- RFC 9111 HTTP Caching — §3.5, storing responses to authenticated requests.
- RFC 6585 — 428 Precondition Required, 429 Too Many Requests.
- RFC 9457 Problem Details for HTTP APIs (obsoletes RFC 7807), incl. the `errors`/`pointer` example.
- RFC 8288 Web Linking; RFC 7396 JSON Merge Patch; RFC 6901 JSON Pointer; RFC 3339 timestamps.
- IETF httpapi drafts: The Idempotency-Key HTTP Header Field; RateLimit header fields for HTTP.
- Stripe API reference: idempotent requests (`Idempotent-Replayed`), pagination (`starting_after`,
  `has_more`), expanding responses, webhook signatures (`t=…,v1=…`).
- Google AIPs: 121 resource-oriented design, 136 custom methods, 151 long-running operations,
  158 pagination, 160 filtering.
- Markus Winand, Use The Index, Luke — "We need tool support for keyset pagination" / no-offset.
- Cloudflare blog — "How we built rate limiting capable of scaling to millions of domains".
- Marc Brooker, AWS Architecture Blog — "Exponential Backoff And Jitter".
- GraphQL specification (October 2021); graphql.org Learn; graphql/dataloader; the GraphQL Cursor
  Connections Specification.
- OpenAPI Specification 3.1.0; JSON Schema 2020-12.
