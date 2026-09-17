# How the Web Works — the request, end to end (id: `web`, prefix: `web`, icon 🌐, level Intermediate, 8 units)

## Verdict
STANDALONE, and the **second theory course**. It reuses the concept-lesson format defined in Part 1 of `complexity-data-structures.md` (predict / pick / order / trace / lab / explain screens, Test out, run-verified answer keys, the words-based minutes floor, `theory: true` ≥ 60% concept minutes) — no format changes. It needs **almost no new engine**: the graded code is pure JavaScript over the platform `URL`, plus the existing `lesson.clock` for DNS TTL and cache freshness. One optional new lab (`waterfall`) draws round-trip timelines.

Why this course, and why now:
- **It's the biggest remaining gap in foundations.** Every course *uses* the network — `async` calls `fetch`, `srv` builds handlers, `ship` deploys, `sec`/`auth` set headers — but none teaches what a request actually is or what happens to it. A search of every unit file finds **no graded step** mentioning HTTP/2, HTTP/3, keep-alive, multiplexing, the round-trip latency model, or the DNS resolution chain. TLS and TCP appear only inside `ship` (cert provisioning) and `docker` (container networking); "handshake" only as WebSocket/deploy asides. The pieces are assumed everywhere and explained nowhere.
- **It's the canonical junior screen.** "What happens when you type a URL and press Enter" is the most common systems interview question, precisely because it spans DNS, TCP, TLS, HTTP and rendering (Educative, Medium, DEV lists, 2026). Status codes, GET vs POST, DNS, HTTPS, caching and same-origin all appear on 2026 junior frontend and backend question lists (GreatFrontend, roadmap.sh, mortit, nucamp).
- **The mechanism is conceptual, and its substrate is gradable.** You cannot open a real TCP socket in the sandbox, but the ideas — resolution, round trips, idempotency, freshness, revalidation — are exactly what predict / trace / order / explain teach, and the pure-JavaScript layer the web is built on (URL structure, origin, cache logic, method and status semantics, round-trip arithmetic) is objectively auto-gradable with the engine that already exists.

Scope carved OFF, each a cheatsheet card with no graded step: the security *reasoning* of cookies, `SameSite`, CSRF and CORS (owned by `sec` and `auth` — this course introduces a cookie only as "a header the browser stores and re-sends" and CORS only as "response headers the browser checks", and hands the threat model to those courses); TLS certificate provisioning and the PKI trust chain (owned by `ship`); building server handlers and REST resources (owned by `srv`); DNS record *configuration* — registrars, A/CNAME/MX records as things you set (owned by `ship`); WebSockets, Server-Sent Events and long-polling; the byte-level TLS record layer and cipher suites; BGP, IP routing and the physical layer; and the browser's full rendering pipeline (layout, paint, compositing — owned by the frontend courses; this course stops at "the browser parses the response and discovers it needs more requests").

Path position: after `async` (so learners have met `fetch`, JSON and status codes as *usage*, which this course explains from underneath) and ideally alongside or before `srv`. It needs `js` (objects, functions, `Map`, `new URL`) and `async`'s vocabulary; nothing from `sec`/`auth`/`ship`, which come after. Level Intermediate.

## Size
Target 8 units, ~40 items (about 23 concept lessons, ~7 js lessons, 2 projects, 8 quizzes), modelled at the words-based floor. **Credits are set from the finished minutes, not pre-committed** — the algo course planned 4 and honestly came out at 5 once minutes followed the floor; do the same here and let the number restate the content. Likely **4–5 credits**. Category proposal: `{ fnd: 3, fe: 1, be: 1 }` — the network is foundational and genuinely serves frontend and backend juniors equally; the split is a `validate.js`-gated apportionment, so pick it once the units are written and the credit is known.

**Position impact, and a decision for Eric.** Real junior Frontend, Full-Stack and Backend screens all test HTTP status codes, DNS and "what happens when you type a URL", so by the `positions.js` honesty rule this argues for making `web` **required** on `fe`, `fs` and `be` (as `algo` was made required on `be`/`fs`). That would raise each sheet's total by the course's credits. Recommendation, matching the algo precedent: build the course first, then make it required in a separate positions change once its credit is fixed. Today all 6 built positions are reachable and fnd supply is 21; a fnd-heavy `web` raises fnd/fe/be supply and blocks nothing.

## Engine needs
The cleanest of any course so far — about **50 lines plus one optional lab**, and nothing new is mandatory.

1. **Reuse `lesson.clock` (already in runner.js).** DNS TTL and cache `max-age` are freshness-over-time, exactly what `now()` / `T.advance(ms)` model. The `web-` prefix joins the existing real-clock gate (`auth-`, `etl-`) so a lesson using `now()` must set `clock`, and no `web-` step may read `Date.now()` / `new Date()`.
2. **The platform `URL` is already available** in the Worker and in Node's `vm` (validate.js run-checks), so URL-parsing and same-origin lessons need no harness. Verified 2026-09-16: `new URL(...)` gives `origin` (with non-default port), `hostname`, `port`, `pathname`, `searchParams`, `hash` identically in both.
3. **Optional lab `waterfall` in labs.js (~120 lines).** A round-trip timeline: given a list of resources and a protocol (HTTP/1.1 with its 6-connection limit, HTTP/2 multiplexed on one connection, HTTP/3 over QUIC), it draws when each request starts and finishes in round-trip units, so U3 and U7 can have the learner *predict the number of round trips* before the bars animate — the Hundhausen "act before you watch" rule from Part 1. The course can ship without it: round-trip counts are just as gradable as `predict` questions run against an arithmetic `check` (the pattern algo used for `Math.ceil(Math.log2(n))`).
4. **validate.js gate (~15 lines):** extend the real-clock gate to `web-`; a `web-` js lesson asserting freshness must set `clock`. No wall-clock timing anywhere (the same rule as algo: teach round-trip *counts*, never milliseconds).

EXPLICITLY NOT NEEDED: a real socket, a DNS resolver, a TLS implementation, the network, `harnessMock` changes, `authsim.js`, or any new lesson kind.

**Tranche A as built (2026-09-16).** Units 1-3 (the "type a URL" spine): 10 concept lessons, 2 js lessons and 3 quizzes (15 items). Registered as `web`, ~2.8h modelled -> **1 credit {fnd 1}** (the algo tranche-A precedent: ~2h = 1cr; the sheets move at completion), `targetHours: 9`. Changes from the plan:
- **The `waterfall` lab was built, not skipped.** It renders one bar per stage stepping across round-trip columns (setup gold, request blue) with a running total; U3-1 uses it for the 4-round-trip cold request, and U7 will reuse it. Its params are explicit `{label, start, rtt, kind}` items (no layout logic), gated in validate.js.
- **Two engine touches beyond the plan:** the `web-` prefix joined the real-clock gate (U2-3 uses `lesson.clock` for TTL), and the concept run-check vm context gained `URL`/`URLSearchParams`/`TextEncoder`/`TextDecoder` so `run: true` questions whose `check` uses `new URL` (the same-origin predicts in U1-2) verify in phase 0. Both are general, not web-specific.
- **U1-1 grades a by-hand `parseUrl`** against literal expected objects and forbids `new URL` via `__FILES` source inspection; a final checkpoint shows `new URL` produces the same parts. **U2-3 grades a caching resolver** by counting upstream queries through a provided `queryCount()` and expiring entries with `T.advance`. The DNS demo line resolves a *third* name so the measured names start cold (the "demo mutates shared fixtures" trap).
- Concept picks and quizzes rebalanced so the correct answer is never the longest choice (0/17 concept picks, 0/18 quiz questions).

**Tranche B as built (2026-09-16).** Units 4-6 (the HTTP message): U4 methods/status/redirects (js classifyMethod: isSafe/isIdempotent/canRetryAutomatically per RFC 9110 — GET/HEAD safe+idempotent, PUT/DELETE idempotent-not-safe, POST/PATCH neither), U5 headers/content (all concept: the envelope, content negotiation + Vary, gzip/Brotli, Content-Length/ranges/206), U6 caching (js cacheState with lesson.clock: fresh/stale/revalidate from max-age; js conditionalGet: ETag match -> 304 with 0 bytes transferred; concept no-store vs no-cache vs must-revalidate, browser/CDN layers). Course now 30 items, ~5.5h -> **3 credits {fnd 3}** (from 1); no new engine at all (reuses the clock and the tranche-A gates). All facts node-verified (method properties, cacheState boundary, conditionalGet). Quiz answers rebalanced to 0/35 longest. Remaining: tranche C = U7 connections/versions (HTTP/1.1 6-connection + HOL, HTTP/2 multiplexing, HTTP/3 QUIC; reuses the waterfall lab) + U8 projects (capstone "type a URL" + slow-page analyser); then make web required on fe/fs/be. The `mock`/`mockFn` fetch harness is *not* used — cache and conditional-request logic is graded as pure functions over plain request/response objects, which is exact and clock-controlled, where a static mock could not model a resource changing over time.

## Teachable today
Everything, immediately — the format engine and `lesson.clock` already shipped with the algo course. Recommended tranches (each ends at a natural stopping point where the course is coherent and its credit is honest):
- **Tranche A — the journey: U1 (URL & request), U2 (DNS), U3 (handshakes & round trips).** 15 items. This is the "what happens when you type a URL" spine and the round-trip model; it stands alone as a short course. Includes the URL-parser js lesson, the DNS-resolver-with-TTL js lesson, and (if built) the `waterfall` lab.
- **Tranche B — the message: U4 (methods, status, redirects), U5 (headers & content), U6 (caching).** 15 items. The HTTP semantics layer; U6's tiny-cache js lesson is the payoff.
- **Tranche C — the modern web and the capstone: U7 (connections & versions), U8 (projects + final).** 10 items. Ties round trips to HTTP/1.1 → 2 → 3, then the two projects.

## Overlaps
The densest overlap surface of any course — five adjacent courses touch HTTP. Each unit names the adjacent course and draws a hard boundary; **no graded step re-grades a skill another course owns** (deploy config, endpoint building, `fetch` usage, cookie/CORS security).

1. **`ship` "Domains, DNS & HTTPS" and "HTTPS, mixed content and the redirect chain".** Those teach *configuring* a domain and shipping HTTPS on a host. AVOIDANCE: web-U2 teaches DNS *resolution* — how a lookup travels the resolver → root → TLD → authoritative chain and caches by TTL — and never touches registrars or record types as config; web-U3 teaches the TLS *handshake round trips*, not cert provisioning. Both briefs name `ship` for the deploy side.
2. **`ship` "Cache-Control: the deploy nobody can see".** That teaches which header to set on a static host. AVOIDANCE: web-U6 teaches the caching *model the browser runs* — freshness, staleness, conditional revalidation and 304 — and grades the cache's decision logic, not a deploy config. It names `ship` for setting the header.
3. **`srv` "Speaking status fluently", "Methods: GET vs POST", "The full REST resource".** Those build a server's status/method handling. AVOIDANCE: web-U4 teaches method and status *semantics* from the protocol side — safe vs idempotent, the five status classes, the redirect codes — and grades classification, not a handler. It names `srv` for implementing them. `srv-u1`'s "GET vs POST" is usage; web-U4 adds *why* (safety, idempotency, caching, replay).
4. **`srv` "Headers & content types" / "URL, pathname and searchParams", `sec` content-type.** Server-side parsing and routing. AVOIDANCE: web-U1 teaches the URL as a *message structure* (a js parser checked against `new URL`), and web-U5 teaches headers as the request/response envelope and content negotiation; neither routes or dispatches.
5. **`async` "fetch & JSON", "res.ok & status codes", "Chained requests".** Client usage of the network. AVOIDANCE: web explains what `fetch` *does underneath* — the request it forms, the round trips it costs, what the status means — while `async` uses it. web is a prerequisite-adjacent explainer, not a second fetch course.
6. **`sec` (security headers, CORS, CDN) and `auth` (cookie jar, `SameSite`, CSRF, CORS readability).** The security depth. AVOIDANCE: web has **no** cookies/CORS unit. Where the request model needs them, web introduces only the mechanism — a cookie is a header the browser stores and re-sends; CORS is response headers the browser checks; an origin is scheme + host + port — in at most one screen each, with a cheatsheet card handing the threat model to `sec`/`auth`. The same-origin *definition* (gradable: a `js` same-origin checker) lives here; the same-origin *policy's security consequences* live there.
7. **`nodejs` "Streams & Buffers" ("packet"), "The event loop".** Byte streams and JS concurrency, not the wire. No real overlap; a cheatsheet card notes that TCP's byte stream is what `nodejs` streams sit on top of.
8. **`algo`.** Both talk about "cost", but on different axes: `algo` counts operations, `web` counts round trips. web-U3 borrows the "count, don't time" rule by name and measures RTTs.

## Units

### 1. Unit 1 — A URL, and the trip it starts
A URL is a little instruction sheet, and pressing Enter kicks off a fixed sequence. Name the parts, define an origin, see the request and response as messages, and meet the five stages the rest of the course walks through.

Lessons:
  - The parts of a URL (js: `parseUrl`)
  - Origin: scheme, host and port (concept)
  - A request and a response are just text (concept)
  - The five stops between Enter and the first byte (concept)
  - Unit 1 quiz: The URL and the request

Graded how:
(1) js. `parseUrl(str)` returns `{ scheme, host, port, path, query, hash }` split by hand, then checked against `new URL` on a battery of cases: a default port omitted vs an explicit `:8443`, an empty path normalised to `/`, a query with repeated keys, a fragment, and a `userinfo@` form rejected. The learner never calls `new URL` (a checkpoint asserts it via source inspection, the `etl`/`auth` precedent); the point is to understand the structure, then a final checkpoint shows `new URL` does it for you. (2) `predict`/`pick`: origin = scheme + host + port; `https://a.com` and `https://a.com:443` share an origin, `http://` and a subdomain do not. This is the definition `sec`/`auth` assume. (3) `order` the parts of a raw request line + headers; `predict` the status line of a response. (4) `order` the five stages (DNS → TCP → TLS → HTTP request → response); a misconception screen refutes "the browser downloads the whole site at once."

### 2. Unit 2 — Finding the server: DNS
The URL names a host, but the network needs a number. Follow a name to an IP through the resolver chain, and see why the answer is cached and why the first visit is the slow one.

Lessons:
  - A name is not an address (concept)
  - The resolver chain: root, TLD, authoritative (concept, trace)
  - TTL: why the second visit skips all of that (js: a resolver with a cache + clock)
  - When DNS is the reason it's slow (concept)
  - Unit 2 quiz: DNS

Graded how:
(1) A domain is a hierarchy read right to left (`.` → `com` → `example` → `www`); `predict` which part a nameserver at each level knows. (2) `trace` a cold lookup: browser cache miss → OS cache miss → recursive resolver → root (returns the TLD server) → TLD (returns the authoritative server) → authoritative (returns the IP), filling who is asked and what comes back at each step. A misconception screen: "the root server knows google.com's IP" (it knows only where `.com` is). (3) js with `clock`: `resolve(name, now)` over a fixture of zone records with TTLs and an in-memory cache — a hit within TTL returns the cached IP and records no upstream query; past TTL it re-queries and re-caches. `T.advance(ms)` expires an entry. Checks assert both the returned IP and the number of upstream queries. (4) `pick` scenarios: a page slow only on first load (cold DNS + connection), a global TTL set to 1 day making a failover slow to propagate; names `ship` for setting records.

### 3. Unit 3 — Connecting: handshakes and round trips
Before any HTTP flows, the browser and server introduce themselves, and each introduction costs a trip across the network. This is where "the server is far away" becomes a number you can count.

Lessons:
  - A round trip is the unit of distance (concept, `waterfall` lab)
  - TCP: the three-way handshake (concept, trace)
  - TLS 1.3: one more trip to go private (concept)
  - Reuse and 0-RTT, and why 0-RTT is only for safe requests (concept)
  - Unit 3 quiz: Connecting

Graded how:
(1) The "count, don't time" rule from algo, restated for distance: a round trip is one message out and one back, and latency is round trips × how far the server is. `predict` the round trips on the critical path of a first HTTPS request (DNS 1 + TCP 1 + TLS 1.3 1 + HTTP 1 = 4), each `run: true` against an explicit arithmetic `check`. If the `waterfall` lab is built, the learner predicts the count before the bars draw. (2) `trace` the TCP handshake: SYN → SYN-ACK → ACK, one round trip, before a byte of HTTP. (3) TLS 1.3 adds one round trip (down from two in TLS 1.2), after which everything is encrypted; a `pick` on why HTTPS "feels" slower only on the first request. (4) A kept-alive connection skips DNS/TCP/TLS on the next request; resumption enables 0-RTT, but 0-RTT data can be *replayed*, so only safe/idempotent requests may use it — a `pick` that ties forward to U4's safety definition and refutes "0-RTT makes everything free."

### 4. Unit 4 — Methods, status and redirects
The request says what to do; the response says how it went. Learn the method properties that decide whether a retry is safe, the five status classes, and the redirect codes that trip people up.

Lessons:
  - Safe and idempotent: which methods you can retry (js: `classifyMethod`)
  - The five status classes (concept)
  - The status codes you'll actually meet (concept)
  - Redirects: 301 vs 302 vs 307 vs 308, and 304 is not a redirect (concept)
  - Unit 4 quiz: Methods and status

Graded how:
(1) js. `isSafe(method)` and `isIdempotent(method)` per RFC 9110: GET/HEAD safe and idempotent; PUT/DELETE idempotent, not safe; POST neither; PATCH neither. Then `canRetryAutomatically(method)` returns true only for idempotent methods, with a brief explaining why an auto-retry of a POST can double-charge a card (ties to `etl`/`async` retry). (2) `order` the classes 1xx–5xx by meaning; `pick` which class a described outcome falls in. (3) `predict` the code for real situations (created → 201, missing → 404, not logged in → 401 vs 403, server threw → 500, rate limited → 429); a misconception screen: "404 means the server is down" (it's up and answering). (4) `pick`/`predict` on redirects: 301/308 permanent vs 302/307 temporary, 307/308 preserve the method where 301/302 historically didn't, and 304 is a cache validator, not a redirect at all — refuting a common conflation.

### 5. Unit 5 — Headers and content
Headers are the envelope: they say what's inside, what the client will accept, how big it is and how it may be reused. Content negotiation lets one URL serve gzip or Brotli, JSON or HTML, to whoever asked.

Lessons:
  - The envelope: request and response headers (concept)
  - Content-Type and content negotiation (concept)
  - Compression: gzip, Brotli, and why text shrinks (concept)
  - Content-Length, ranges and streaming the body (concept; light)
  - Unit 5 quiz: Headers and content

Graded how:
(1) `pick`/`order`: match headers to jobs (`Content-Type` describes the body, `Accept` states a preference, `Content-Length` sizes it, `Cache-Control` governs reuse — the last handed forward to U6). A misconception screen: "headers are optional metadata" (a wrong `Content-Type` makes the browser mis-handle the body). (2) `predict` the negotiated result: `Accept: text/html` vs `application/json` selecting a representation; `Accept-Encoding: br, gzip` selecting Brotli when both are offered. (3) Why repetitive text compresses far better than already-compressed images; a `pick` on when compression doesn't help. (4) One screen each on `Content-Length` vs chunked transfer and on range requests (resume a download / seek a video), explicitly light and naming `nodejs` streams as the layer underneath.

### 6. Unit 6 — Caching: the fastest request is the one you don't send
A cache turns a network round trip into a local read. Learn freshness, the conditional request that revalidates a stale copy for the price of a tiny 304, and the layers a response passes through.

Lessons:
  - Fresh, stale, and `max-age` (js: `cacheState` with a clock)
  - The conditional request: ETag, If-None-Match and 304 (js: `handleConditional`)
  - `no-store` vs `no-cache` vs `must-revalidate` (concept)
  - The layers: browser, CDN, and the shared cache (concept)
  - Unit 6 quiz: Caching

Graded how:
(1) js with `clock`: `cacheState(response, now)` returns `fresh` while `now` is within `max-age` of when it was stored, `stale` after, and `must-revalidate` when there's no freshness directive; `T.advance` crosses the boundary. (2) js: a `handleConditional(request, current)` server side returns `304` with no body when `If-None-Match` matches the current `ETag`, else `200` with the body and the new `ETag`; and a client side that stores the `ETag` and sends it next time. A checkpoint proves a 304 exchange transfers no body, only headers. (3) `pick` the right directive: `no-store` for a bank balance, `no-cache` (store but always revalidate) for a profile, a long `max-age` + content hash for a bundled asset; refutes "`no-cache` means don't cache." (4) The same response can be fresh in the browser and revalidated at a CDN; a `pick` on why a shared cache must not store a personalised, cookie-bearing response — one screen, handing the security to `sec`/`auth`. Names `ship` for setting these headers on a host.

### 7. Unit 7 — Connections and versions
One slow connection, or many? Head-of-line blocking, the old six-connection workaround, and how HTTP/2 and HTTP/3 changed the round-trip math this course has been counting.

Lessons:
  - HTTP/1.1: one request at a time, six connections at once (concept, `waterfall` lab)
  - HTTP/2: many streams on one connection (concept, `waterfall` lab)
  - HTTP/3 over QUIC: no transport head-of-line blocking (concept)
  - What this means for how you build (concept)
  - Unit 7 quiz: Connections and versions

Graded how:
(1) HTTP/1.1 sends one request per connection at a time; a browser opens ~6 per origin to parallelise, and beyond that requests queue — head-of-line blocking. If the `waterfall` lab is built, `predict` how many round-trip "rows" 18 resources take over 6 connections before the bars draw; else a `predict` with an arithmetic `check` (`Math.ceil(18 / 6)` batches). (2) HTTP/2 multiplexes many streams over one connection, so those 18 resources share one handshake and interleave; `predict` the change. A misconception screen: "HTTP/2 removes all head-of-line blocking" (it removes HTTP-level blocking but a lost TCP packet still stalls every stream — the gap HTTP/3 fills). (3) HTTP/3 runs on QUIC over UDP: the transport itself carries independent streams, so a lost packet stalls only its own stream, and the handshake folds TLS in. `pick` on what QUIC fixes that HTTP/2 didn't. (4) The build advice that follows: concatenating files mattered a lot on HTTP/1.1 and matters far less on HTTP/2+, but a round trip is still a round trip — fewer, cacheable resources still win. Explicitly ties back to U3 and U6; refutes "always bundle everything into one file."

### 8. Unit 8 — Type a URL, and make it fast
No new ideas: the whole trip, walked once end to end, then a slow page diagnosed by counting what the earlier units taught you to count.

Lessons:
  - Project: What happens when you type a URL (concept project)
  - Project: Why is this page slow? (js project)
  - Final quiz: How the web works

Graded how:
PROJECT 1 (`web-u8-p1`, concept, ~9 checkpoints): the capstone trace/explain. Walk one HTTPS request from Enter to first byte — `order` the full stage list (DNS resolution with a cache miss, TCP, TLS, request, response), `trace` the round trips on the critical path, `predict` the status and what a 304 would change, and `explain` in plain English what happens, for a non-specialist, checked against a rubric. One closing screen on "and then the browser parses the HTML and discovers it needs more requests", handing rendering to the frontend courses. PROJECT 2 (`web-u8-p2`, js with `clock`, ~8 checkpoints): a page-load analyser. Given a list of resources with sizes, cache headers and stored copies, and a protocol, compute the round trips actually needed (cold vs warm cache, HTTP/1.1 vs HTTP/2), decide which resources revalidate with a 304 and which are served from cache with no request at all, and total the round trips — then apply one fix (add `max-age`, switch to HTTP/2) and show the count drop. Every number is a deterministic count, graded exactly; nothing is timed.

## Projects
- Project: What happens when you type a URL (web-u8-p1) — the end-to-end capstone as an ordered trace plus a plain-English explanation, the interview question turned into a graded exercise.
- Project: Why is this page slow? (web-u8-p2) — count the round trips and cache misses a page load actually costs, apply a fix, and measure the drop, using only the deterministic counts the course taught.

## Risks
- **Overlap density.** More adjacent courses (`async`, `srv`, `ship`, `sec`, `auth`) than any prior course. Mitigation: every unit names the adjacent course and its boundary; no graded step re-grades deploy config, endpoint building, `fetch` usage, or cookie/CORS security. The cookies/CORS unit that would collide with `sec`/`auth` is deliberately not built — those ideas appear only as one-screen mechanism with a card pointing onward.
- **A non-runnable subject.** You can't open a socket in the sandbox, so a naive version would be all prose. Mitigation: the mechanism is taught with concept lessons, and everything *graded* is the pure-JS substrate the web rests on — URL parsing, same-origin, cache freshness and revalidation logic, method/status classification, DNS-cache-with-TTL, and round-trip counts. No lesson pretends to run real network I/O, and the brief says so.
- **Latency numbers are illustrative.** Real milliseconds vary by distance and device. Mitigation: the course grades round-trip *counts*, never times — the same rule as algo's "count, don't time." Any millisecond figure is labelled illustrative and never appears in a checkpoint.
- **Facts drift.** HTTP/3 adoption, TLS versions and browser connection limits change. Mitigation: cite RFC 9110 (semantics) and RFC 9111 (caching) and teach the stable mechanism — round trips, idempotency, freshness, revalidation — not vendor share numbers; any adoption or limit figure carries a dated source and never a checkpoint. The `~6 connections` figure is taught as "about six", the well-known browser default, not a graded exact.
- **Rendering scope creep.** "…and then the browser renders" can pull in a whole layout/paint course. Mitigation: the capstone stops at "parse the response, discover more requests"; one screen hands layout, paint and the critical rendering path to the frontend courses.
- **Credit arithmetic.** Like algo, don't pre-commit to 4 vs 5 — set `mins` from the words floor and let the derived credit stand; move the position sheets to match rather than trimming content to hit a number.

## Sources
**The request, end to end**
- "What happens when you type a URL" (the canonical interview walk-through: DNS, TCP, TLS, HTTP, render): https://www.educative.io/blog/what-happens-when-we-type-a-url ; https://medium.com/womenintechnology/what-actually-happens-when-you-type-a-url-and-press-enter-dns-tcp-tls-and-http-explained-1f59ca1fa95f
- Ilya Grigorik, *High Performance Browser Networking* (the round-trip / critical-path latency model; TCP and TLS each add a handshake round trip): https://hpbn.co/ ; https://www.igvita.com/2015/08/17/eliminating-roundtrips-with-preconnect/
**DNS**
- DNS resolution chain (client → recursive resolver → root → TLD → authoritative) and TTL caching: https://cycle.io/learn/dns-resolution-process ; https://oneuptime.com/blog/post/2026-03-20-understand-dns-resolution-process/view
**Connections, TLS, HTTP versions**
- TLS 1.3 one-round-trip handshake, 0-RTT resumption and its replay risk (safe/idempotent requests only): from the QUIC/HTTP-3 measurement and study literature — https://http.dev/3 ; https://medium.com/@mahdi.com.haidar/understanding-quic-how-it-solves-tcps-limitations-and-improves-http-3-performance-8a2251548e7e
- HTTP/3 over QUIC removes transport-level head-of-line blocking (independent streams), folds in TLS 1.3: https://http.dev/3
**HTTP semantics and caching (the RFCs)**
- RFC 9110 — HTTP Semantics (safe: GET/HEAD; idempotent: GET/HEAD/PUT/DELETE; POST and PATCH neither; the 1xx–5xx status classes, §15): https://www.rfc-editor.org/info/rfc9110/ ; https://www.restguide.info/rfc-9110
- RFC 9111 — HTTP Caching (June 2022, replaced RFC 7234; `max-age` freshness; `If-None-Match`/`ETag` and `If-Modified-Since` conditional requests → 304; a 304 updates the cached headers): https://www.rfc-editor.org/rfc/rfc9111.html ; https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching
- MDN — `Cache-Control` directives (`no-store` vs `no-cache` vs `max-age` vs `must-revalidate`): https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control
**Junior interview coverage**
- 2026 junior/front-end and back-end question lists naming HTTP status codes, GET vs POST, DNS, HTTPS, cookies and same-origin: https://www.greatfrontend.com/blog/rest-api-interview-questions-for-frontend-devs ; https://roadmap.sh/questions/backend ; https://www.interviews.chat/questions/junior-backend-developer ; https://www.finalroundai.com/blog/http-interview-questions
**The teaching format**
- Part 1 of `tools/course-research/complexity-data-structures.md` (the concept-lesson format, its gates, and the research behind predict / pick / order / trace / lab / explain) — this course reuses it unchanged.
- Built-catalog overlap checked 2026-09-16 by searching every unit file on main `311baaa`: no graded step teaches DNS resolution, the TCP/TLS handshake as a mechanism, the round-trip model, HTTP/2, HTTP/3, keep-alive or multiplexing; adjacent coverage is `ship` (DNS/HTTPS/Cache-Control as deploy config), `srv` (status/methods/URL as server building), `async` (fetch usage), `sec`/`auth` (cookies, CORS, headers as security). Position status and fnd supply read from `node tools/validate.js --phase0` on the same commit (fnd 21 built, 6 of 7 reachable).
