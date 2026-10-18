# Advanced API Design — "the contract, and what breaks it" (id: `api`, prefix: `api`, icon 🔌, level Advanced)

## Verdict

STANDALONE, and — unusually for this catalog — **on no new simulator at all.**

Every other engine-bearing course here (Git, Docker, CI/CD, ETL, Auth) needed a new
file because it modelled a machine. This one models a *contract*, and a contract is
a function. The catalog already settled the shape: `handleRequest(req) -> response`,
graded by calling it with crafted requests and asserting on what comes back. 38 items
of `srv` are built on it, and `authsim.js` already uses the fuller
`{method,url,path,query,headers,body,cookies}` → `{status,headers,body}` form.

What the course needs beyond plain `kind: "js"` lessons is already in `runner.js`:

| Need | Existing harness |
|---|---|
| rate-limit windows, idempotency-key TTL, cache age | `lesson.clock: <ms>` → injects `now()` and `T.advance(ms)` |
| ETag generation, webhook HMAC signatures | `crypto: true` → `sha256`, `randHex`, `slowHash` |
| contract/consumer tests as the lesson itself | `spec: true` → `describe`/`it`/`expect` |

So the engine work is **zero new files**, which is the single biggest reason this
course is cheap to build well and expensive to get wrong: there is no simulator to
hide behind, and every rule has to be enforced by a checkpoint reading a real
response object.

## The one structural decision

**Responses in this course are `{status, headers, body}`, not `{status, body}`.**

`srv` deliberately stops at `{status, body}`. That is correct for a foundations
course and fatal for this one: *every* topic here is carried in a header —
`ETag`, `If-Match`, `Retry-After`, `RateLimit-*`, `Location`, `Idempotency-Key`,
`Link`, `Sunset`, `Allow`, `Content-Type: application/problem+json`. A course about
API design that cannot set a header has nothing to teach.

Unit 1 therefore opens by widening the response, and says why. This is continuity,
not contradiction — `authsim.js` already returns `{status, headers, body}`, so the
course is adopting the catalog's other half rather than inventing a third shape.

## What the catalog already owns — verified by reading checkpoints, not blurbs

Every unit file of `srv`, `async`, `web`, `auth`, `sec`, `db`, `test` and `nodejs`
was read, including every `steps[].test` string, because briefs routinely promise
more than checkpoints enforce. The result changed this syllabus substantially: two
planned units had to be cut outright.

**Off-limits — already graded, not merely mentioned:**

| Already built | Where | Consequence for this course |
|---|---|---|
| `cacheState()` freshness math against `max-age`, with a controllable clock | `web-u6-1`, `web-u8-p2` | Cannot teach Cache-Control freshness. **Cut.** |
| ETag → `If-None-Match` → 304 with zero bytes transferred | `web-u6-2`, `web-u8-p2` | Cannot teach conditional **GET**. Conditional **writes** are untouched — see below. |
| `isSafe()` / `isIdempotent()` / `canRetryAutomatically()` per method | `web-u4-1` | Cannot teach idempotency as a *property of verbs*. The *technique* (`Idempotency-Key`) is absent everywhere. |
| Offset/page pagination: `?page=&perPage=`, `Math.ceil(total/perPage)`, `{items,total,page,pages}` | `srv-u6-4`, `srv-u8-p`, `srv-u7-p` | Cannot teach offset pagination. Go straight to cursor, framed against offset's failures. |
| A custom error envelope `{error:{code,message}}`, enforced in ~15 checkpoints | `srv-u6-2`, u6–u8 | Cannot re-sell "consistent error shapes matter". Learners already believe it. Sell RFC 9457 instead. |
| `?q=`, `?genre=`, `?sort=title\|year`, sort-a-copy immutability | `srv-u6-4` | Single-field equality/substring filtering is taken. Operators, ranges, multi-value, field whitelisting are free. |
| `res.ok`, "fetch does not throw on 404" | `async`, 4 lessons + 3 quizzes | Restating it reads as filler. |
| 4xx vs 5xx retryability, 401 vs 403, 301/302/307/308 | `web-u4-2`, `web-u4-3`, `web-u4-4` | Assume as vocabulary. |
| Content negotiation via `Accept` + `Vary` | `web-u5-2` | Assume. `srv` has only `accept === 'application/json'` exact equality — no q-values, no 406. |

**The seam this course sits in.** `web/` teaches HTTP semantics rigorously and never
once calls `fetch`. `async/` calls `fetch` in twenty lessons and never once mentions
`Cache-Control`, `ETag` or idempotency. Neither crosses. This course can therefore
*assume the vocabulary* and *teach the wiring*: how a server emits these, how a
client sets them, and what the two have agreed when they do.

## Size

Grounded against the market, which is thin here in exactly the way the Docker and
CI/CD research found:

| Course | Length | Graded? |
|---|---|---|
| Codecademy — Intermediate JavaScript: APIs | ~1h | no, explainer |
| Codecademy — Learn GraphQL / API articles | under 1h each | article series |
| Boot.dev — Learn HTTP Clients | multi-hour | yes, but client-side |

The market teaches API *consumption* and REST *basics*. Nobody grades you on writing
a limiter that returns the right `Retry-After`, or on a cursor that survives a
concurrent insert. That gap is the course.

## Syllabus

Each unit's rule is the same one Docker and CI/CD used: **fake the payload, never the
rule.** No lesson invents a convention — every header, status code and body shape is
the one a real API uses, cited in the brief.

| Unit | What it grades |
|---|---|
| **1 · The response is more than a body** | Widening to `{status, headers, body}`. `Location` on 201, `Allow` on 405, `HEAD`/`OPTIONS`, and why a header is the only place some answers can go. |
| **2 · Errors as a contract** | RFC 9457 `application/problem+json`: `type`/`title`/`status`/`detail`/`instance`, extension members, field-level validation errors, and migrating `srv`'s own envelope to it. |
| **3 · Pagination that survives writes** | Offset's three failures (drift under concurrent insert, deep-offset cost, unstable sort), then keyset/cursor: opaque cursors, stable tiebreak ordering, the `Link` header. |
| **4 · Conditional writes** | The lost update, demonstrated before it is named. `ETag` on a write path, `If-Match`, `412`, `428`. The learner already knows ETag as a cache tool; this reuses it as a concurrency tool. |
| **5 · Making retries safe** | `Idempotency-Key`: a dedupe store with a TTL on the clock, replaying the stored response, the in-flight `409`, and why a key must cover the request body. |
| **6 · Rate limiting** | A real limiter: fixed window and its boundary burst, then token bucket / sliding window. `429`, `Retry-After`, `RateLimit-Limit/Remaining/Reset`. |
| **7 · Changing a live API** | Breaking vs non-breaking, additive evolution, URL vs header versioning, `Deprecation`/`Sunset`, and a compatibility shim that serves two versions from one handler. |
| **8 · Two projects** | **Ship it:** a complete resource with problem+json, cursors, conditional writes, idempotent POST and a limiter. **Fix it:** an API broken in six ways to diagnose from its responses alone. |

CORS, GraphQL, webhooks and OpenAPI were all candidates (and all genuinely absent
from the catalog). See "Deliberately out of scope" once the unit count is fixed —
a course that covers everything absent would be three courses.

## Authoring traps carried forward

- `T.expect(cond, msg)` takes **exactly two** arguments; a three-arg call silently
  asserts only truthiness. The validator rejects it.
- Steps share one live worker, in order; `const` from one step is invisible in the next.
- The starter must not pass the checkpoints.
- Quizzes need ≥5 questions and the correct answer may be the longest choice at most
  40% of the time — fix by lengthening distractors, never by truncating the answer.
- A lesson using `clock:` must not read `Date.now()` or `new Date()`.
