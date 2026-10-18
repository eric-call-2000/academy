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

**38 items, ~7.9h modelled → 4 credits, all `be`.**

The stub guessed `plannedCredits: 5` before any content existed. Credits restate
content, so the number comes down to what actually got written: 28 lessons, 2
projects and 8 quizzes. Four is what that is worth, and the validator re-derives it
from the files rather than taking the manifest's word for it.

The market is thin here in exactly the way the Docker and CI/CD research found —
it teaches API *consumption* and REST *basics*. Nobody grades you on writing a
limiter that returns the right `Retry-After`, or on a cursor that survives a
concurrent insert. That gap is the course.

**Not a required course on any sheet.** All seven position sheets are junior-level
by design, and no junior is screened on RFC 9457 or keyset pagination. `api` is an
elective that pays into `be`, which is what the README means by totals sitting
"about one elective above what the required courses pay". Adding it to a sheet
would be inventing a requirement the job market does not have.

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

Every unit is four lessons and a quiz, except unit 8, which is two projects and a
quiz.

## Deliberately out of scope, and why

The survey found far more absent from the catalog than one course can hold. These
were all candidates and are all genuinely untaught anywhere:

- **CORS.** The largest single gap in the whole catalog, and the best-prepared —
  `web-u1-2` is a full graded lesson on origin that literally promises "almost
  every security rule you'll meet later is written in terms of it", and then the
  promise is never kept. It belongs in `web` or `sec` next to that lesson, not
  here: it is a *browser* rule, and this course is about the contract between any
  client and a server.
- **GraphQL.** Zero occurrences catalog-wide. It is a second API style, not an
  advanced treatment of this one, and doing it honestly means schema, resolvers,
  the N+1 problem and dataloader — a course, not a unit.
- **Webhooks.** Server-to-server delivery, at-least-once semantics, HMAC
  signatures and replay windows. The `crypto` harness already provides `hmac` and
  `timingSafeEqual`, so it is cheap to build; it is simply a different direction
  (delivery) from the one this course runs in (request/response).
- **OpenAPI and contract testing.** Needs `test`'s vocabulary more than this
  course's, and lands better as a unit there.

A course that covered everything absent would be three courses. Each of these is a
clean, verified gap for whoever picks one up.

## Authoring traps carried forward

- `T.expect(cond, msg)` takes **exactly two** arguments; a three-arg call silently
  asserts only truthiness. The validator rejects it.
- Steps share one live worker, in order; `const` from one step is invisible in the next.
- The starter must not pass the checkpoints.
- Quizzes need ≥5 questions and the correct answer may be the longest choice at most
  40% of the time — fix by lengthening distractors, never by truncating the answer.
- A lesson using `clock:` must not read `Date.now()` or `new Date()`.
