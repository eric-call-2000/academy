# Deploying Your App — id `ship`, prefix `ship`, icon 🛰️, level Intermediate, 35 items, 8h, 7 units, 2 projects, ~96 auto-graded checkpoints, ~58 quiz questions. Slots as Course 9, after the Full-Stack Capstone. Grounded in the owner's real stack: GitHub Pages for the static front end, Cloudflare Workers for the API.

## Verdict
STANDALONE — but only because I reframed it. Here is the honest reasoning, including the case against.

The case against a standalone course is real: "hosting, env vars, domains" sounds like a slide deck, and CodeLab's validator (tools/validate.js phase 1) will not accept a slide deck — every non-quiz lesson must have files, a solution that passes every checkpoint in real Chromium, AND a starter that FAILS. There is no way to ship a reading lesson in this engine. So if the course is genuinely conceptual, it cannot exist here at all.

It is not genuinely conceptual. The reframe that saves it is exactly the Course 7 move: HTTP simulates perfectly because a request/response is pure data, and the same is true of every core artifact of deployment.
  - A static host IS a pure function: (urlPath, fileTree) -> {status, file}. GitHub Pages' base-path/case-sensitivity/404.html behavior is that function's spec, not a metaphor for it.
  - Configuration IS a pure function: (env) -> config, with the string-coercion and fail-fast rules that cause most real outages.
  - A build IS a pure function: (srcFiles, env) -> distFiles. "Build vs runtime" — the owner's own listed confusion — becomes obvious the moment you write the 30-line builder and watch a later env change do nothing to dist.
  - DNS IS a pure lookup with rules. CORS IS a pure request->response.
  - A Cloudflare Worker IS `{ async fetch(request, env, ctx) }` returning a real `Response`. That is not a simulation. `Request`, `Response`, `Headers` and `URL` are Fetch-API constructors exposed in WorkerGlobalScope; only `fetch()` itself needs the network, and we never call it. This is the first place in all of CodeLab where the learner types code that would run unmodified in production.

That last point is the strongest argument for standalone status and it is why this should NOT be folded in. I considered both merges:
  - Fold into Course 8 (Capstone, 28 items): rejected. It already owns cap-u6-1 "Deploy-ready checklist" and its job is synthesis of things already taught, not introducing four new mental models. Adding 30 items makes it a 58-item course, larger than Learn JavaScript, with a wildly incoherent spine.
  - Fold into Course 7 (Back-End, 38 items): partially tempting. Unit 4 (Workers) is arguably the true finale of Course 7 — `handleRequest(req)` graduating into `worker.fetch(request, env, ctx)` is the payoff that course is missing. But GitHub Pages path resolution, content hashing, cache headers and DNS are static-front-end concerns with no home there, and Course 7 is already the second-largest course.

One concession I will make: if the owner ever wants only one new course instead of two, Unit 4 alone should be transplanted as Course 7 Unit 9, and the rest survives as a 29-item course. That is the clean split line.

Sequencing note that matters more than the standalone/fold question: Units 1-3 depend only on Courses 1 and 4 (HTML + JS). They do not need the capstone. A learner hitting the "my site is blank on GitHub Pages" wall right after Building Interactive Websites can take U1-U3 immediately. Gate U4 on Course 7, U5-U7 on Course 8.

## Size
35 items, ~8h

## Engine needs
Headline: this course needs LESS new engine than any other on the owner's list. 35 of 35 items ship with ZERO changes to runner.js. Everything below is optional fidelity polish, not unlock work. That is the direct contrast with the sibling proposals — a simulated shell, a git object store, or a SQL interpreter are each 1000+ lines of real software; deployment's core artifacts are already pure data, so the "engine" is just the lessons themselves.

WHAT THE SANDBOX ALREADY PROVIDES AND I VERIFIED IN runner.js:
  - kind "js" runs learner code via (0,eval) in a Web Worker, then concatenates step tests AFTER it, so tests can call the learner's top-level `function`/`const`/`let` bindings directly. That is exactly how srv/u1.js grades `handleRequest`. Units 1, 2, 3, 5, 6 and both projects are the identical pattern with different data shapes.
  - Step tests are wrapped in `async function`, so `await` works — required for Unit 4's `await worker.fetch(...)` and `await res.json()`.
  - `Request`, `Response`, `Headers` and `URL` are Fetch-API constructors exposed in WorkerGlobalScope, not network calls. Constructing and reading them never touches the network, so the CSP and offline-first design are untouched. Unit 4's flagship claim — the learner types real production Worker code — costs nothing.

GAP 1 — `export default` is a SyntaxError under (0,eval) in a classic worker. ~15 lines.
  Ship-today workaround (option A, my recommendation for v1): teach `const worker = { async fetch(request, env, ctx) { ... } };` and state in the brief that the real file's first line is `export default {`. One word off from production. Zero engine change.
  Polish (option B, ~15 lines in runner.js buildWorkerSrc, do it after v1 playtests): before eval, run `src.replace(/^\s*export\s+default\s+/m, 'var __default = ')` and append `;var worker = (typeof worker !== 'undefined') ? worker : __default;`. Also strip bare `import ...` lines and emit one friendly console note explaining that this sandbox has no module resolver. That makes Unit 4 byte-for-byte deployable, which is the course's entire selling point. It is a regex and two lines of glue — not a module system, not a bundler, and explicitly NOT a step toward one.

GAP 2 — multi-file JS lessons. ~10 lines, optional.
  runJS only executes `files["script.js"]` (or the first key). So if a lesson gave the learner a `wrangler.toml` or `.gitignore` tab, that file would be inert and ungradeable.
  Ship-today workaround: represent every config as JS data inside script.js — `const wrangler = { name: "notes-api", vars: { GREETING: "hello" } }` — and grade the object, with the real TOML shown side-by-side in the unit `cheat`. Nothing is lost pedagogically; TOML syntax is not worth 15 minutes of a self-taught developer's life.
  Polish (~10 lines): in buildWorkerSrc, prepend `var __FILES = ` + JSON.stringify(files) + `;` so tests can regex text the learner typed in a real `.toml`/`.gitignore` tab. That is the whole change — one injected literal. NO TOML PARSER IS REQUIRED; the tests regex, or a lesson has the learner write the 15-line parser themselves as the exercise.

WHAT I AM EXPLICITLY NOT BUILDING, AND WHY:
  - No simulated shell, no git engine, no npm, no SQL, no node process, no WASM, no CDN. None are needed. If the Command Line and Git courses get built, this course does not depend on them — it starts at "your files are already in a repo."
  - No fake GitHub Pages settings UI and no fake Cloudflare dashboard. I considered a clickable iframe mock and rejected it: ~600 lines of chrome teaching a UI that gets redesigned within a year, gradeable only as "did you click the right pixel," and it would rot faster than any other content in the app. Those procedures go in the two Unit 7 field-guide quizzes and the cheat sheets, where a 10-minute edit keeps them current.
  - No real network, no real DNS, no real deploy. Stated plainly in the Unit 7 briefs rather than papered over.

## Teachable today
All 35 items work TODAY, unchanged, in the existing Web Worker (`kind: "js"`). Not one lesson needs the iframe, and not one needs runner.js touched.

Unit by unit:
  U1 (host resolution) — pure functions over an object file-map. Identical grading shape to srv/u1.js. 100% today.
  U2 (config) — pure functions over a plain `env` object. The starter defines `const env = {...}` because `process.env` does not exist in a browser worker; the brief names all three real-world spellings of that same object. 100% today.
  U3 (build/hash/cache) — pure functions over file maps, plus a 20-line given cache object. 100% today.
  U4 (Workers) — 100% today via `const worker = {...}`. The Fetch-API constructors are already in worker scope; `await` already works in step tests. The only thing the 15-line `export default` transform buys is that the learner's first line matches production exactly.
  U5 (DNS/HTTPS) — pure lookups over record arrays and string audits over HTML text. 100% today.
  U6 (preflight/smoke/rollback/logs) — pure functions and one async smoke test. 100% today.
  U7 — the project is `kind: "js"`; the three quizzes need no runtime at all.

BUILD ORDER, which follows from that:
  1. Units 1-3 first. Highest immediate value (U1.3, the base-path lesson, is the single thing most likely to unblock the owner's actual GitHub Pages deploy), zero engine risk, and they only require Courses 1 and 4 as prerequisites — so they can ship and be useful before the rest exists.
  2. Unit 4 second. Highest ceiling, one smoke test to run first: confirm `new Request(...)` and `new Response(...)` construct cleanly inside the blob Worker on the target browsers before committing to the "real production code" framing. If they do not, U4 degrades gracefully to plain `{method, path, headers}` objects — still a good unit, minus the marquee claim.
  3. Units 6 and 7. They depend on functions defined in 1-4, so they must come after.
  4. Unit 5 last. It is the weakest unit and the designated trim candidate — see risks.

## Overlaps
Nine overlap risks, checked against the actual files, with the avoidance rule for each.

1. cap-u6-1 "Deploy-ready checklist" (Course 8, kind web) — REAL and the most dangerous. It already grades `<title>`, `<meta viewport>`, `<meta description>` and a footer GitHub link. My U6.1 `preflight()` must NOT check any of those four. It checks only the new failure classes: missing index.html at repo root, an uppercase Index.html, root-absolute asset paths, a secret in a tracked file, and .gitignore coverage. The U6.1 brief opens by naming cap-u6-1 as the prerequisite: "you already wrote the <head> checklist by hand; now make the rest of it executable." Leave cap-u6-1 in place — head metadata is an HTML skill and belongs to Course 8.

2. srv/u1-u2 `handleRequest` routing, status codes, 405 vs 404 — REAL. U4.1 must be framed as a PORT, not a re-teach. Reuse the same fixture data so the diff is the whole lesson: routing and status codes are assumed known and never re-explained; the new content is `Request`/`Response` objects, `env`, `ctx`, `await`, and the fact that this one runs for real. If a checkpoint would pass in Course 7, it does not belong in U4.1.

3. srv/u3 "Query strings" — REAL. U4.2 must not re-teach parsing `?q=`. Explicit frame: "In Course 7 you split the string by hand to learn what is in there. The platform hands you `new URL(request.url).searchParams` — same idea, no bugs." The checkpoints grade the API, not the parsing.

4. srv/u6 "Error envelopes" and cap-u6 `{error:{code,message}}` — PARTIAL. U4 and U7 reuse that exact envelope shape deliberately, as continuity, and never spend a checkpoint teaching it. No lesson titled anything like "error handling."

5. srv/u5 "Auth-lite" tokens/401 — LOW. U2.4 (secret scanning) and U4.3 (secrets via env) touch secrets but never authentication. No login, no tokens, no 401 in this course. Auth stays Course 7's.

6. async/u3 mentions CORS in exactly one sentence, as a cause of network failure, and never teaches it — verified by grep. U4.4 is genuinely new territory. Rule: U4.4 teaches only the SERVER side of the handshake and never re-teaches `fetch()` options, which Course 6 owns.

7. cap/u1 and cap/u4 localStorage — LOW but avoidable. U3.4's browser-cache simulation uses a plain object, never `localStorage`, so it cannot be mistaken for a storage lesson.

8. The PROPOSED Git course — hard boundary. No commits, branches, diffs, or `git push` lessons here. This course starts at "your files are already in a repo." `git push` appears exactly once, in a Unit 1 cheat entry, as a pointer to that course. If Git ships first, this course gains a prerequisite and loses nothing.

9. The PROPOSED Node/npm and Testing courses — hard boundary. U3 hand-writes a 30-line builder and says outright: "a real bundler does this plus four hundred other things, and that is the Node course." No package.json, no lockfiles, no `npm run build`. U6.2's smoke test is a deploy gate, not a test framework — no assertions library, no describe/it, and the brief says so, ceding that ground to the Testing course.

Bonus, the reverse direction: this course RETIRES nothing but it does make one existing thing better. If the owner ever builds the Web Security course, U2.4 (secret scanning) and U5.4 (mixed content) are the deployment-shaped slice only, and they should stay here — XSS and input validation belong there, not here.

## Units

### 1. Unit 1 — The host is a function
A static host is `(urlPath, fileTree) -> {status, file}`. The learner implements GitHub Pages' actual resolution algorithm, which is where every 'it works locally but the deployed site is blank' bug lives. Runs today in the js worker, unchanged.

Lessons:
  - Your laptop is not the internet
  - It worked on my machine: case, slashes, and index
  - The base-path trap (/username.github.io/repo/)
  - 404.html and the SPA fallback
  - Unit 1 quiz: How a static host resolves a URL

Graded how:
Learner types `serveStatic(urlPath, files)` where `files` is a given object map like {"index.html":"...","about/index.html":"...","assets/app.js":"..."}. Tests call it directly and T.eq the returned object.
  1.1 T.eq(serveStatic('/', FILES), {status:200, file:'index.html'}) and T.eq(serveStatic('/nope', FILES).status, 404).
  1.2 T.eq(serveStatic('/Index.html', FILES).status, 404, 'Linux is case-sensitive — Index.html is not index.html') and T.eq(serveStatic('/about', FILES), {status:301, location:'/about/'}) and T.eq(serveStatic('/about/', FILES), {status:200, file:'about/index.html'}).
  1.3 Learner types `resolveHref(href, pageUrl, basePath)`. Tests assert the absolute URL string: T.eq(resolveHref('/styles.css','/repo/about/','/repo/'), '/styles.css') with the failure message naming it as the bug, T.eq(resolveHref('styles.css','/repo/about/','/repo/'), '/repo/about/styles.css'), T.eq(resolveHref('../styles.css','/repo/about/','/repo/'), '/repo/styles.css'). Then a fix step: T.eq(fixHrefs(HTML, '/repo/').indexOf('href="/styles.css"'), -1) — no root-absolute hrefs survive.
  1.4 Add the fallback rules: T.eq(serveStatic('/typo', FILES), {status:404, file:'404.html'}); then with SPA mode on, T.eq(serveStatic('/notes/7', FILES), {status:200, file:'index.html'}) while T.eq(serveStatic('/assets/app.js', FILES).file, 'assets/app.js') proves the fallback did not swallow real assets.

### 2. Unit 2 — Environment variables & configuration
Config lives outside the code. The three rules that actually bite: env values are ALWAYS strings, a missing required var must fail loudly at boot, and secrets never enter the repo. Runs today in the js worker, unchanged.

Lessons:
  - Config is not code
  - Everything is a string (the DEBUG="false" bug)
  - Fail fast: required variables
  - Secrets vs. variables, and what .gitignore is for
  - Unit 2 quiz: Configuration

Graded how:
The starter defines `const env = {...}` and the brief states plainly: this object is `process.env` in Node, the `env` argument in a Worker, and the Variables panel in a dashboard — same shape, three names.
  2.1 Learner types `getConfig(env)`. T.eq(getConfig({}).apiUrl, 'http://localhost:8787') proves the default; T.eq(getConfig({API_URL:'https://api.example.com'}).apiUrl, 'https://api.example.com') proves the override.
  2.2 Learner types `num(v, fallback)` and `bool(v)`. The money checkpoints: `var c = getConfig({PORT:'8080', DEBUG:'false'}); T.eq(c.port, 8080); T.expect(typeof c.port === 'number', 'env values arrive as STRINGS — "8080" + 1 is "80801"'); T.eq(c.debug, false, 'the STRING "false" is truthy — Boolean("false") === true');` plus T.eq(bool('0'), false) and T.eq(bool(undefined), false).
  2.3 Learner adds a required-var guard. Test: `var threw=false, msg=''; try { getConfig({}) } catch(e){ threw=true; msg=e.message } T.expect(threw, 'A missing DATABASE_URL must throw at boot'); T.expect(msg.indexOf('DATABASE_URL') !== -1, 'Name the variable in the message — "undefined is not a function" at 3am is not a diagnosis');` and T.expect(getConfig({DATABASE_URL:'postgres://x'}) , 'supplied → no throw').
  2.4 Learner types `auditRepo(files, gitignore)` returning a sorted array of offending paths. Given a file map containing `.env` with `STRIPE_KEY=sk_live_abc123`, `config.js` with an inline `AKIA...`, and `README.md`, tests T.eq(auditRepo(FILES, ['node_modules/']), ['.env','config.js']) and then T.eq(auditRepo(FILES, ['node_modules/','.env']), ['config.js'], 'gitignoring .env removes it from the report — but the key hardcoded in config.js is still shipping').

### 3. Unit 3 — Build time vs. run time
The owner's explicitly named confusion, made concrete: a build is a pure function over a file map. Content hashing, HTML rewriting, and the cache policy that decides whether users ever see the new version. Runs today in the js worker, unchanged.

Lessons:
  - Two clocks: build time and run time
  - Content hashing: app.a3f9d2c.js
  - Rewriting the HTML (or the site 404s)
  - Cache-Control: the deploy nobody can see
  - Unit 3 quiz: Build vs. runtime

Graded how:
Learner types `build(src, env)` returning a new file map. The starter supplies a 6-line djb2 `hash(str)` helper so the lesson is about the pipeline, not hashing.
  3.1 Source `app.js` contains the placeholder `__API_URL__`. Test: `var dist = build(SRC, {API_URL:'https://api.live'}); T.expect(dist['app.js'].indexOf('https://api.live') !== -1); T.expect(dist['app.js'].indexOf('__API_URL__') === -1, 'the placeholder must be GONE — it was replaced at build time');` then the point-proving checkpoint: `var d1 = build(SRC, {API_URL:'https://one'}); var d2 = build(SRC, {API_URL:'https://two'}); T.expect(d1['app.js'] !== d2['app.js'], 'change the env, rebuild, get different bytes'); T.expect(d1['app.js'].indexOf('two') === -1, 'changing the env AFTER the build cannot touch an already-built file — that is what build time means');`
  3.2 T.expect(Object.keys(build(SRC,ENV)).some(function(k){return /^app\.[0-9a-z]+\.js$/.test(k)}), 'emit app.<hash>.js'); determinism: T.eq(Object.keys(build(SRC,ENV)).sort(), Object.keys(build(SRC,ENV)).sort(), 'same input, same filenames'); sensitivity: `var S2 = Object.assign({}, SRC, {'app.js': SRC['app.js'] + '\n'}); T.expect(hashedName(build(S2,ENV)) !== hashedName(build(SRC,ENV)), 'one changed byte must change the hash');`
  3.3 `var dist = build(SRC, ENV); var name = Object.keys(dist).find(function(k){return /^app\..*\.js$/.test(k)}); T.expect(dist['index.html'].indexOf(name) !== -1, 'index.html must point at the hashed file'); T.expect(!/src="app\.js"/.test(dist['index.html']), 'the old unhashed src must be gone — otherwise every visitor 404s');`
  3.4 Learner types `headersFor(filename)`. T.eq(headersFor('app.a3f9d2c.js')['cache-control'], 'public, max-age=31536000, immutable') and T.eq(headersFor('index.html')['cache-control'], 'no-cache'). Then a 20-line given `Browser` cache object replays two deploys: `b.get('/index.html'); deployV2(); T.eq(b.get('/index.html').version, 2, 'HTML on no-cache means the new deploy is visible'); T.eq(b.get('/app.a3f9d2c.js').fromCache, true, 'the hashed asset is served from cache — and that is correct, because a new build gets a new NAME');` A deliberate wrong-policy variant proves the stale-site failure.

### 4. Unit 4 — Your Worker at the edge
The flagship. Course 7's `handleRequest(req)` graduates into the real Cloudflare Workers API: `{ async fetch(request, env, ctx) }` with real Request/Response/URL objects. Includes CORS — the exact bug a Pages front end calling a Workers API will hit on day one. Runs today; see engineNeeds for the one-word fidelity caveat.

Lessons:
  - From handleRequest to fetch(request, env, ctx)
  - URL, pathname and searchParams — the real API
  - env is the second argument
  - CORS, or why your Pages site can't call your Worker
  - Project: your Worker API, live
  - Unit 4 quiz: Workers & CORS

Graded how:
Learner types `const worker = { async fetch(request, env, ctx) { ... } };` (brief: "in your real file the first line is `export default {` — one word"). Tests construct real Requests and await real Responses.
  4.1 `var res = await worker.fetch(new Request('https://api.me.dev/api/health')); T.eq(res.status, 200); T.eq(res.headers.get('content-type'), 'application/json'); T.eq(await res.json(), {ok:true});` plus T.eq((await worker.fetch(new Request('https://api.me.dev/nope'))).status, 404).
  4.2 `var res = await worker.fetch(new Request('https://api.me.dev/api/notes?q=ship&limit=2')); T.eq(await res.json(), [{id:3,text:'ship it'}]);` and a no-query call returns all notes — proving `new URL(request.url).searchParams.get('q')` replaced the hand-rolled parser from Course 7 U3.
  4.3 `T.eq((await (await worker.fetch(REQ, {GREETING:'hola'})).json()).message, 'hola, world');` and `T.eq((await (await worker.fetch(REQ, {})).json()).message, 'hello, world', 'a missing binding falls back to a default, it does not crash');` plus a source-inspection guard: `T.expect(worker.fetch.toString().indexOf('sk_live') === -1, 'never hardcode a secret — read it from env');`
  4.4 `var res = await worker.fetch(new Request('https://api.me.dev/api/notes', {headers:{origin:'https://me.github.io'}})); T.eq(res.headers.get('access-control-allow-origin'), 'https://me.github.io');` then `var bad = await worker.fetch(new Request('https://api.me.dev/api/notes', {headers:{origin:'https://evil.example'}})); T.eq(bad.headers.get('access-control-allow-origin'), null, 'a stranger gets no CORS header — an allowlist, not *');` then preflight: `var pre = await worker.fetch(new Request(URL, {method:'OPTIONS', headers:{origin:'https://me.github.io'}})); T.eq(pre.status, 204); T.expect(pre.headers.get('access-control-allow-methods').indexOf('DELETE') !== -1);`
  4.5 PROJECT (6 checkpoints): a complete Worker — GET/POST/DELETE on /api/notes, env-driven config, CORS allowlist, JSON 404 envelope, and a /health route. Graded by a scripted session: boot health check, cross-origin GET, POST that 201s and appears in a later GET, POST with bad body that 400s and creates nothing, preflight 204, unknown path 404 with `{error:{code,message}}`.

### 5. Unit 5 — Domains, DNS & HTTPS
How a name becomes an IP, why a CNAME cannot sit at the apex, what records point a domain at GitHub Pages, and why one http:// image breaks the padlock. The thinnest unit for grading — the resolver-as-a-function reframe is what rescues it. Runs today in the js worker, unchanged.

Lessons:
  - A domain name is a lookup table
  - Apex vs. www (and the CNAME rule)
  - Pointing a real domain at GitHub Pages
  - HTTPS, mixed content and the redirect chain
  - Unit 5 quiz: Domains & DNS

Graded how:
  5.1 Learner types `resolve(name, zone)` where zone is an array of {name, type, value}. T.eq(resolve('www.mysite.com', ZONE), '185.199.108.153') following a CNAME to an A record; T.eq(resolve('nothere.mysite.com', ZONE), null); and a cycle guard: `var out; var crashed=false; try { out = resolve('loop.mysite.com', CYCLIC_ZONE) } catch(e){ crashed=true } T.expect(!crashed, 'a CNAME cycle must return null, not hang the worker'); T.eq(out, null);`
  5.2 Learner types `validateZone(records)` returning a sorted array of problem codes. T.eq(validateZone(BAD_ZONE), ['cname-at-apex','duplicate-cname'], 'a CNAME at @ cannot coexist with any other record — that is why apex domains need A records') and T.eq(validateZone(GOOD_ZONE), []).
  5.3 Learner types `planDNS(hostname, target)`. T.eq(planDNS('mysite.com', 'me.github.io').map(function(r){return r.type}), ['A','A','A','A'], 'the apex needs the four GitHub Pages A records'); T.eq(planDNS('www.mysite.com','me.github.io'), [{name:'www', type:'CNAME', value:'me.github.io'}]); and T.eq(cnameFile('mysite.com'), 'mysite.com\n', 'the repo also needs a CNAME file at the root').
  5.4 Learner types `auditPage(html, pageUrl)` returning flagged subresource URLs. T.eq(auditPage(HTML, 'https://mysite.com/'), ['http://cdn.old.example/logo.png'], 'one http:// subresource on an https page is mixed content — the padlock dies'); protocol-relative and https URLs are not flagged. Then `redirectChain('http://www.mysite.com/x', RULES)` → T.eq(chain.length, 2) and T.eq(chain[chain.length-1], 'https://mysite.com/x').

### 6. Unit 6 — Ship, break, roll back
The operational half. A pre-flight check as executable code rather than a printed list, a smoke test, a rollback, and log-reading taught as what it actually is — pattern matching. Runs today in the js worker, unchanged.

Lessons:
  - The pre-flight check (as code, not a list)
  - Smoke tests and /health
  - Rollback: the previous build is the safety net
  - Reading a failed build log
  - Unit 6 quiz: Shipping and un-shipping

Graded how:
  6.1 Learner types `preflight(repo)` returning a sorted array of failure codes. Given a deliberately broken repo file-map, T.eq(preflight(BROKEN), ['absolute-asset-path','missing-index','secret-in-repo','uppercase-index']); after the learner fixes the supplied repo object, T.eq(preflight(FIXED), []). Note: it does NOT check <title>/viewport/description — Course 8's cap-u6-1 already owns those and the brief says so.
  6.2 Learner types `async smokeTest(worker)` hitting /health, /api/notes and a known-404. T.eq(await smokeTest(GOOD_WORKER), {passed:3, failed:0, failures:[]}); T.eq((await smokeTest(BROKEN_WORKER)).failures, ['GET /api/notes expected 200, got 500'], 'a smoke test names what broke, not just that something did').
  6.3 Learner types `deploy(state, build)` and `rollback(state)`. `var s = deploy(EMPTY, {v:1, healthy:true}); s = deploy(s, {v:2, healthy:true}); T.eq(s.current.v, 2); s = deploy(s, {v:3, healthy:false}); T.eq(s.current.v, 2, 'a build that fails its smoke test must NOT become current'); T.eq(s.history.length, 3, 'the failed build is still recorded'); s = rollback(s); T.eq(s.current.v, 1);`
  6.4 Learner types `diagnose(logLines)` returning a cause code. Five given real-shaped logs: T.eq(diagnose(LOG_A), 'case-mismatch'); T.eq(diagnose(LOG_B), 'missing-index'); T.eq(diagnose(LOG_C), 'node-version'); T.eq(diagnose(LOG_D), 'secret-in-bundle'); T.eq(diagnose(LOG_E), 'unknown', 'when nothing matches, say unknown — do not guess').

### 7. Unit 7 — Ship it for real
The synthesis project, plus the two things that honestly cannot be auto-graded — clicking through the GitHub Pages settings and running wrangler — delivered as scenario quizzes and cheat-sheet checklists rather than as fake coding lessons.

Lessons:
  - Project: ship-it.js — build, serve, guard
  - Field guide quiz: GitHub Pages, for real
  - Field guide quiz: Cloudflare Workers & wrangler, for real
  - Final quiz: Deploying your app

Graded how:
  7.1 PROJECT, 6 checkpoints, one file wiring all four functions from the course: `build()` -> hashed dist -> `serveStatic()` under a `/notestream/` base path -> `worker.fetch()` answering cross-origin -> `preflight()` gating the whole thing. Checkpoints replay one deploy: (a) preflight(REPO) returns the 3 known failures; (b) after the learner's fixHrefs pass, preflight returns []; (c) build emits a hashed bundle and an index.html that references it; (d) serveStatic('/notestream/', dist) returns 200 index.html and serveStatic('/notestream/app.<hash>.js', dist) returns 200 with the immutable header; (e) worker.fetch with origin https://me.github.io returns 200 + the matching ACAO header, and with a stranger origin returns 200 with ACAO null; (f) deploy a build whose smoke test fails, assert current is still the previous version.
  7.2 and 7.3 are QUIZZES, 8 questions each, and this is the deliberate honesty call: a procedure I cannot auto-grade becomes a scenario quiz, never a fake coding lesson. 7.2 covers: which branch/folder Pages serves, /docs vs root vs gh-pages, why the CNAME file must be committed, why the site is 404ing after a rename, what 'Deploy from a branch' vs 'GitHub Actions' changes, why the first deploy takes minutes. 7.3 covers: wrangler.toml/wrangler.jsonc as the source of truth, `wrangler dev` vs `wrangler deploy`, `[vars]` vs `wrangler secret put`, `.dev.vars` for local secrets, why bindings are NOT inherited across [env.*] blocks, routes vs custom domains, and why env.MY_KEY is undefined locally. Every question is a symptom-to-cause scenario, and each `explain` doubles as the paragraph of reading the learner would otherwise have skipped.
  7.4 Final quiz, 8 questions, spanning all six units. The printable checklists live in the unit `cheat` arrays, which is the existing mechanism for exactly this.

## Projects
- Project: your Worker API, live (Unit 4) — a complete Cloudflare Worker: GET/POST/DELETE on /api/notes, config read from env bindings, a CORS allowlist with OPTIONS preflight, a JSON 404 envelope, and a /health route. Six checkpoints replay a full cross-origin session. The code is production-shaped: paste it into a wrangler project and it runs.
- Project: ship-it.js — build, serve, guard (Unit 7) — the synthesis. One file wiring all four course functions end to end: preflight() gates the repo, build() emits a content-hashed dist and rewrites index.html, serveStatic() serves it under a /notestream/ base path with the right Cache-Control per file, worker.fetch() answers the page cross-origin, and a failing smoke test forces a rollback to the previous build. Six checkpoints replay one complete deploy, from broken repo to live site to rolled-back bad release.

## Risks
- Unit 5 (Domains & DNS) is the thinnest unit and the designated trim candidate. The resolver-as-a-function reframe makes it genuinely gradeable, but it is the one unit where a learner could reasonably say 'this is trivia I will look up when I buy a domain.' Build it last. If it does not playtest well, cut it to 3 lessons + quiz, drop to 34 items / 7h, or fold 5.4 (mixed content) into Unit 6's preflight and delete the rest. Do not let it be the reason the course slips.
- Unit 4's marquee claim — 'this is real production code' — rests on Request/Response/Headers/URL constructing cleanly inside the blob Web Worker on the browsers the owner actually uses. I read runner.js and the spec says they are in WorkerGlobalScope, but I did not execute it. SMOKE TEST THIS FIRST, before writing a single U4 lesson. Fallback if it fails: U4 degrades to plain {method, path, headers} objects like Course 7 — still a good unit, but the 'byte-for-byte deployable' framing has to be dropped, and that framing is the course's main argument for existing.
- Platform specifics rot fast. Cloudflare has already moved from wrangler.toml to also accepting wrangler.jsonc; GitHub redesigns the Pages settings panel regularly; the four Pages A records could change. Containment rule: platform trivia lives ONLY in unit `cheat` arrays and the two Unit 7 field-guide quizzes, never in a lesson's checkpoints. Lessons grade timeless algorithms (path resolution, hashing, CORS logic, DNS rules), which do not expire. Budget a 30-minute annual refresh of the field guides and accept that as the cost of teaching a real stack.
- Drift into a trivia course. This is the failure mode the topic invites, and the temptation will be strongest in Units 5 and 7. The structural guard is already in the engine: tools/validate.js phase 1 requires every non-quiz lesson's SOLUTION to pass and its STARTER to FAIL in real Chromium. A lesson that cannot be written that way is a quiz, and should be honestly labeled one. Enforce this — do not invent a coding lesson whose starter is 90% written just to make a reading topic look gradeable.
- Unit 3's hand-written builder could read as 'this is what a bundler is', which is false and would poison the future Node/npm course. Every U3 brief must say the quiet part loudly: this is the 30-line core, a real bundler adds module resolution, tree-shaking, transpilation, source maps and minification, and that is a different course. The purpose here is to make 'build time vs run time' concrete, nothing more.
- Overlap regression with cap-u6-1. The preflight lesson in Unit 6 will drift toward re-checking <title> and <meta viewport> because they are the obvious things to check. Write the preflight failure-code list FIRST, as a fixed contract, and review it against cap/u6.js before writing the checkpoints.
- Scope creep from the adjacent proposals. CORS pulls toward Web Security; the smoke test pulls toward Testing; wrangler pulls toward Node/npm; 'push to deploy' pulls toward Git. Each unit brief needs one explicit sentence naming what it is NOT covering and where that lives, or this becomes a 60-item course that half-teaches four other subjects.
