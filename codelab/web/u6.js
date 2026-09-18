/* How the Web Works — Unit 6: Caching */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var STATE_STARTER = R`
// A cached response carries { storedAt, cacheControl }:
//   storedAt      - the time (in ms) the browser stored it
//   cacheControl  - the response's Cache-Control header text
// now() gives the current time in ms.
//
// cacheState(response) returns:
//   "fresh"       still within its max-age -> use it, no request
//   "stale"       past its max-age         -> must revalidate before use
//   "revalidate"  no max-age, or no-store / no-cache -> always check
function cacheState(response) {
  // First draft: always calls it fresh.
  return "fresh";
}

console.log(cacheState({ storedAt: now(), cacheControl: "max-age=300" }));
`;

  var STATE_SOLUTION = R`
function cacheState(response) {
  const cc = response.cacheControl || "";
  if (/no-store|no-cache/.test(cc)) {
    return "revalidate";
  }
  const m = /max-age=(\d+)/.exec(cc);
  if (!m) {
    return "revalidate";
  }
  const ageMs = now() - response.storedAt;
  return ageMs < Number(m[1]) * 1000 ? "fresh" : "stale";
}

console.log(cacheState({ storedAt: now(), cacheControl: "max-age=300" }));
`;

  var COND_STARTER = R`
// A conditional GET. The client already has a cached copy and asks the
// server "has it changed?" by sending its ETag. The server compares.
//   cached:   what the client has, { etag, body }, or null if nothing cached
//   resource: the server's current { etag, body }
// Return { status, body, transferred }:
//   - when the cached ETag matches the resource's: 304, keep the cached
//     body, and transferred is 0 (no body sent over the wire)
//   - otherwise: 200, the resource's body, transferred = the body's length
function conditionalGet(cached, resource) {
  // First draft: always sends the whole body back.
  return { status: 200, body: resource.body, transferred: resource.body.length };
}

console.log(conditionalGet({ etag: "v7", body: "old" }, { etag: "v7", body: "new" }));
`;

  var COND_SOLUTION = R`
function conditionalGet(cached, resource) {
  if (cached && cached.etag === resource.etag) {
    return { status: 304, body: cached.body, transferred: 0 };
  }
  return { status: 200, body: resource.body, transferred: resource.body.length };
}

console.log(conditionalGet({ etag: "v7", body: "old" }, { etag: "v7", body: "new" }));
`;

  window.CODELAB.addUnit("web", {
    id: "web-u6",
    title: "Caching",
    icon: "📦",
    blurb: "The fastest request is the one you don't send. Freshness turns a network round trip into a local read; a conditional request revalidates a stale copy for the price of a tiny 304; and the same response passes through layers of cache on its way to you.",
    cheat: [
      { h: "Fresh vs stale", lang: "text", code: R`
Cache-Control: max-age=300
stored now -> fresh for 300s -> use it, no request
after 300s -> stale -> must revalidate before use`,
        note: "A fresh copy is used with no network at all. Once stale, the browser doesn't just refetch — it asks whether the copy is still good." },
      { h: "Conditional request", lang: "text", code: R`
client: GET /logo.png
        If-None-Match: "v7"        (its cached ETag)
server: 304 Not Modified           (unchanged -> no body)
   or:  200 OK + new body + new ETag`,
        note: "A 304 is a few bytes of headers with no body: it says \"your copy is still good.\" Revalidating a stale copy is far cheaper than re-downloading it." },
      { h: "Directives and layers", lang: "text", code: R`
no-store        never store it (a bank balance)
no-cache        store, but always revalidate first
max-age + hash  cache a bundle for a year
browser -> CDN -> origin: caches at every hop`,
        note: "no-cache does NOT mean don't cache. A shared cache (a CDN) must not store a personalised, cookie-bearing response." }
    ],
    lessons: [

      {
        id: "web-u6-1",
        title: "Fresh, stale, and max-age",
        kind: "js", chip: "WEB", xp: 15, mins: 14, clock: 0,
        brief: "The cheapest request is the one you never send. When the browser has a cached response that's still **fresh**, it uses it with no network at all. Freshness comes from the response's `Cache-Control: max-age=N` — the copy is good for `N` seconds after it was stored.\n\nWrite `cacheState(response)`, where `response` has `{ storedAt, cacheControl }` (`storedAt` is the ms time it was stored; `now()` is the clock). Return:\n\n- **`\"fresh\"`** — still within `max-age`, so use it with no request\n- **`\"stale\"`** — past `max-age`, so it must be revalidated before use\n- **`\"revalidate\"`** — no `max-age` at all, or `no-store` / `no-cache`, so always check\n\nThe checks move time forward with `T.advance(ms)` to cross the freshness boundary. Use `now()`, never the real clock.",
        steps: [
          { text: "A response with max-age is fresh until that many seconds pass, then stale.",
            test: R`
var r = { storedAt: now(), cacheControl: "max-age=300" };
T.eq(cacheState(r), "fresh", "Just stored: fresh");
T.advance(299000);
T.eq(cacheState(r), "fresh", "299s in, within the 300s window: still fresh");
T.advance(2000);
T.eq(cacheState(r), "stale", "301s in, past max-age: stale");
` },
          { text: "no-store and no-cache always mean revalidate, whatever the age.",
            test: R`
T.eq(cacheState({ storedAt: now(), cacheControl: "no-store" }), "revalidate", "no-store is never used from cache freely");
T.eq(cacheState({ storedAt: now(), cacheControl: "no-cache" }), "revalidate", "no-cache means store but always check");
` },
          { text: "A response with no freshness information must be revalidated.",
            test: R`
T.eq(cacheState({ storedAt: now(), cacheControl: "" }), "revalidate", "No Cache-Control: no basis to call it fresh");
T.eq(cacheState({ storedAt: now(), cacheControl: "private" }), "revalidate", "A directive with no max-age gives no freshness lifetime");
` }
        ],
        files: [{ name: "script.js", content: STATE_STARTER }],
        solution: { "script.js": STATE_SOLUTION },
        hints: [
          "Read the Cache-Control text first: if it contains no-store or no-cache, return \"revalidate\" straight away.",
          "Pull the number out of max-age with a match like /max-age=(\\d+)/. No match means no freshness lifetime, so \"revalidate\".",
          "Compare `now() - response.storedAt` against `maxAge * 1000`: less is \"fresh\", otherwise \"stale\"."
        ]
      },

      {
        id: "web-u6-2",
        title: "The conditional request: ETag, If-None-Match and 304",
        kind: "js", chip: "WEB", xp: 15, mins: 14,
        brief: "When a cached copy goes stale, the browser doesn't just re-download it — it **asks whether it even changed**. The server gave the resource an **ETag** (a version tag like `\"v7\"`) when it first sent it. The browser sends that back as `If-None-Match: \"v7\"`, and the server compares:\n\n- if the ETag still matches, the copy is unchanged → **304 Not Modified**, with **no body** — a few bytes of headers\n- if it differs, the resource changed → **200 OK** with the new body and a new ETag\n\nA 304 is the win: revalidating costs almost nothing, where re-downloading costs the whole body.\n\nWrite `conditionalGet(cached, resource)`. `cached` is what the client holds (`{ etag, body }`, or `null` if nothing is cached); `resource` is the server's current `{ etag, body }`. Return `{ status, body, transferred }` — on a match, `304`, the **cached** body, and `transferred: 0`; otherwise `200`, the resource's body, and `transferred` equal to that body's length.",
        steps: [
          { text: "A matching ETag returns 304, keeps the cached body, and transfers no body.",
            test: R`
T.eq(conditionalGet({ etag: "v7", body: "OLD" }, { etag: "v7", body: "NEW" }),
  { status: 304, body: "OLD", transferred: 0 },
  "Unchanged: 304, the client keeps its cached body, nothing sent over the wire");
` },
          { text: "A different ETag returns 200 with the new body, and transfers its bytes.",
            test: R`
T.eq(conditionalGet({ etag: "v6", body: "OLD" }, { etag: "v7", body: "NEWER" }),
  { status: 200, body: "NEWER", transferred: 5 },
  "Changed: 200 with the fresh body, and its length in transferred");
` },
          { text: "With nothing cached, it's always a full 200 download.",
            test: R`
T.eq(conditionalGet(null, { etag: "v1", body: "hello" }),
  { status: 200, body: "hello", transferred: 5 },
  "No cached copy: send the whole body");
` },
          { text: "The 304 path really moves no body: transferred is 0 even for a huge resource.",
            test: R`
var big = "x".repeat(100000);
var res = conditionalGet({ etag: "same", body: big }, { etag: "same", body: big });
T.eq(res.status, 304, "Unchanged");
T.eq(res.transferred, 0, "A 100 KB resource that hasn't changed transfers 0 bytes on revalidation");
` }
        ],
        files: [{ name: "script.js", content: COND_STARTER }],
        solution: { "script.js": COND_SOLUTION },
        hints: [
          "First handle the match: if `cached` exists and `cached.etag === resource.etag`, return status 304 with the cached body and transferred 0.",
          "Otherwise return status 200 with the resource's body.",
          "transferred is `resource.body.length` on a 200, and 0 on a 304 — that's the whole point of revalidation."
        ]
      },

      {
        id: "web-u6-3",
        title: "no-store vs no-cache vs must-revalidate",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "`Cache-Control` directives are easy to confuse, and one name actively misleads:\n\n- **`no-store`** — never write this to any cache. For a bank balance or a one-time token.\n- **`no-cache`** — *do* store it, but always revalidate before using it. Despite the name, it does **not** mean \"don't cache.\"\n- **`must-revalidate`** — once it's stale, you must revalidate; don't serve the stale copy as a fallback.",
            ask: { type: "pick",
              q: "What does `no-cache` actually tell the browser to do?",
              choices: ["Never store the response", "Store it, but revalidate with the server before each use", "Cache it forever", "Compress it"],
              answer: 1,
              why: [
                "That's no-store. no-cache does allow storing.",
                "no-cache stores the copy but checks with the server (a conditional request) every time before using it — often getting a cheap 304.",
                "It's the opposite of caching forever; it revalidates every time.",
                "Caching directives don't control compression."
              ] } },

          { read: "The right directive depends on what the data is:\n\n- a **bank balance** must never sit in a cache → `no-store`\n- a **user profile** can be stored but should always be checked for changes → `no-cache`\n- a **bundled asset** with a content hash in its name (`app.3f9c.js`) never changes, so it can be cached for a year → `max-age=31536000`",
            ask: { type: "pick",
              q: "A build tool outputs `app.3f9c2a.js`, where the hash changes whenever the code does. How should it be cached?",
              choices: ["no-store", "no-cache", "A very long max-age, like a year", "It can't be cached"],
              answer: 2,
              why: [
                "no-store would refetch it every load, wasting the round trip.",
                "no-cache would revalidate every load; unnecessary, since a new build gets a new filename.",
                "Because the filename changes when the content does, the file at a given name never changes — cache it for a year and a new build is simply a new URL.",
                "It's the most cacheable kind of file there is."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "For a response containing a user's current account balance, which single directive keeps it out of every cache? Type it.",
              answer: "no-store",
              accept: ["no store", "cache-control: no-store"],
              why: "no-store forbids writing the response to any cache — the right choice for sensitive, always-live data." } },

          { ask: { type: "pick", transfer: true,
              q: "Someone sets `no-cache` on a private page to keep it out of caches. What's the flaw?",
              choices: ["no-cache does keep it out of caches", "no-cache still lets the response be stored; no-store is the one that keeps it out", "no-cache compresses it", "no-cache makes it public"],
              answer: 1,
              why: [
                "That's the misconception — no-cache permits storage.",
                "no-cache stores the copy and revalidates each use; to prevent storage entirely you need no-store.",
                "It has nothing to do with compression.",
                "It doesn't change who may read it; it changes revalidation."
              ] } }
        ]
      },

      {
        id: "web-u6-4",
        title: "The layers: browser, CDN, and the shared cache",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "A response can be cached at more than one place on its way to you. The **browser** keeps a private cache just for you. Between you and the origin server, a **CDN** (content delivery network) keeps a **shared** cache near many users, so a popular file is served from a nearby city instead of the origin across the world.\n\nA request checks the browser cache first, then the CDN, and only reaches the origin if neither has a fresh copy.",
            ask: { type: "pick",
              q: "Why does putting a static image behind a CDN make it load faster for users far from the origin server?",
              choices: ["The image is smaller", "A shared cache near the user serves it, cutting the distance (and round trips) to the origin", "DNS is skipped", "The browser stops caching it"],
              answer: 1,
              why: [
                "The file is unchanged; its location is what changes.",
                "A CDN caches near users, so the round trips are to a nearby node, not the distant origin.",
                "DNS still resolves; the CDN just answers from closer by.",
                "The browser cache still works too; the CDN is an extra shared layer."
              ] } },

          { read: "The private/shared distinction matters for **safety**. A browser cache is yours alone, so it can hold your personalised, logged-in pages. A **shared** cache must **never** store a response meant for one person — if a CDN cached your account page, the next visitor could be served *your* details. That's why personalised, cookie-bearing responses are marked private or `no-store`. (The security reasoning belongs to the `sec` and `auth` courses; here it's just the caching rule.)",
            ask: { type: "pick",
              q: "Why must a shared cache (a CDN) not store a logged-in user's personalised account page?",
              choices: ["It's too large", "Another user could then be served the first user's private page", "CDNs can't cache HTML", "It would be too fast"],
              answer: 1,
              why: [
                "Size isn't the issue.",
                "A shared cache serves many people, so storing one user's private response risks handing it to someone else.",
                "CDNs can cache HTML fine; the issue is that this HTML is personalised.",
                "Speed isn't the concern; correctness and privacy are."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A request has a fresh copy in the browser cache. How many network round trips does fetching that resource take? Type a number.",
              answer: "0",
              why: "A fresh cached copy is read locally with no network at all — zero round trips. That's why caching is the biggest single speed win.",
              run: true,
              check: "console.log(0);" } },

          { ask: { type: "pick", transfer: true,
              q: "Where does setting these `Cache-Control` headers actually happen when you ship a site?",
              choices: ["In the browser's settings", "On the host or CDN config, taught in the Deploying Your App course", "In DNS records", "In the URL"],
              answer: 1,
              why: [
                "The browser obeys the headers; it doesn't set them.",
                "You configure cache headers on your host or CDN — which is the Deploying Your App course's job.",
                "DNS maps names to addresses; it doesn't carry cache directives.",
                "The URL names the resource; caching is set in the response headers."
              ] } }
        ]
      },

      {
        id: "web-quiz-6",
        title: "Unit 6 quiz: Caching",
        kind: "quiz", xp: 10,
        brief: "Freshness, conditional requests, directives, and cache layers. 80% to pass.",
        questions: [
          { q: "A cached response is still fresh. How many network round trips does using it cost?",
            choices: ["0 — it's read locally", "1", "4", "It always refetches the whole resource over the network from scratch every time"],
            answer: 0, explain: "A fresh copy is served straight from the cache with no network request at all — the cheapest possible outcome." },
          { q: "What is an ETag used for?",
            choices: ["Encrypting the body", "A version tag the client sends back so the server can answer 304 if nothing changed", "Setting how long the cache is allowed to keep and reuse the stored response before checking again", "Naming the file"],
            answer: 1, explain: "The client sends the ETag as If-None-Match; if it still matches, the server returns 304 Not Modified with no body." },
          { q: "What makes a 304 Not Modified cheap?",
            choices: ["It's compressed", "It carries no body — just headers saying the cached copy is still good", "It skips DNS", "It is served from a much faster server that is dedicated only to revalidation requests"],
            answer: 1, explain: "A 304 revalidation transfers only headers, not the resource body, so a 100 KB unchanged file costs almost nothing to revalidate." },
          { q: "What does `no-cache` mean?",
            choices: ["Never store the response", "Store it, but always revalidate before using it", "Keep caching it forever without ever revalidating it again at any point", "Only cache the response on the server"],
            answer: 1, explain: "Despite the name, no-cache allows storage but requires revalidation each use. no-store is the directive that forbids storing." },
          { q: "Which directive keeps a sensitive response out of every cache?",
            choices: ["no-cache", "no-store", "max-age=0", "must-revalidate"],
            answer: 1, explain: "no-store forbids writing the response to any cache. The others still permit storage in some form." },
          { q: "Why must a shared cache (CDN) not store a logged-in user's personalised page?",
            choices: ["It's too big", "Another user could be served the first user's private content", "CDNs are technically unable to hold or store any HTML documents whatsoever", "It would expire too fast"],
            answer: 1, explain: "A shared cache serves many people, so a personalised response stored there could be handed to the wrong user. Such responses are marked private or no-store." }
        ]
      }
    ]
  });
})();
