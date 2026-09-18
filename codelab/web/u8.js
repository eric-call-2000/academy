/* How the Web Works — Unit 8: Type a URL, and make it fast */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var ANALYSER_STARTER = R`
// A page-load analyser. Every number is a count — round trips or bytes —
// never a measured time.
//
// A resource: { name, cacheControl, storedAt, etag, serverEtag, bytes }
//   storedAt    - ms time a cached copy was stored, or null if none is cached
//   etag        - the cached copy's version tag (set when a copy is stored)
//   serverEtag  - the resource's current version on the server
// now() is the clock; the checks move it forward with T.advance.

// isFresh(resource): can a stored copy be used with no request at all?
// Fresh means a copy is stored, Cache-Control has max-age=N, it is not
// no-store or no-cache, and fewer than N seconds have passed since it stored.
function isFresh(resource) {
  return true; // first draft: calls everything fresh
}

// analyze(resource): what fetching this resource costs right now.
// Return { requested, status, bytes }:
//   fresh                       -> { requested: false, status: "cache", bytes: 0 }
//   stale copy, etag matches    -> { requested: true, status: 304, bytes: 0 }
//   stale copy, etag differs    -> { requested: true, status: 200, bytes: resource.bytes }
//   no usable stored copy       -> { requested: true, status: 200, bytes: resource.bytes }
function analyze(resource) {
  return { requested: true, status: 200, bytes: resource.bytes };
}

// roundTrips(requested, protocol): the round-trip rows those requests take.
//   "http/1.1" -> 6 connections, one request each: Math.ceil(requested / 6)
//   "http/2"   -> all multiplexed on one connection: 1 if any requests, else 0
function roundTrips(requested, protocol) {
  return requested;
}

// pageLoad(resources, protocol): total { requested, bytes, roundTrips }.
function pageLoad(resources, protocol) {
  return { requested: 0, bytes: 0, roundTrips: 0 };
}

console.log(pageLoad([], "http/2"));
`;

  var ANALYSER_SOLUTION = R`
function isFresh(resource) {
  if (resource.storedAt == null) return false;
  const cc = resource.cacheControl || "";
  if (/no-store|no-cache/.test(cc)) return false;
  const m = /max-age=(\d+)/.exec(cc);
  if (!m) return false;
  return now() - resource.storedAt < Number(m[1]) * 1000;
}

function analyze(resource) {
  if (isFresh(resource)) {
    return { requested: false, status: "cache", bytes: 0 };
  }
  const cc = resource.cacheControl || "";
  if (resource.storedAt != null && resource.etag && !/no-store/.test(cc)) {
    if (resource.etag === resource.serverEtag) {
      return { requested: true, status: 304, bytes: 0 };
    }
    return { requested: true, status: 200, bytes: resource.bytes };
  }
  return { requested: true, status: 200, bytes: resource.bytes };
}

function roundTrips(requested, protocol) {
  if (requested === 0) return 0;
  return protocol === "http/2" ? 1 : Math.ceil(requested / 6);
}

function pageLoad(resources, protocol) {
  let requested = 0;
  let bytes = 0;
  for (const resource of resources) {
    const a = analyze(resource);
    if (a.requested) requested++;
    bytes += a.bytes;
  }
  return { requested: requested, bytes: bytes, roundTrips: roundTrips(requested, protocol) };
}

console.log(pageLoad([], "http/2"));
`;

  /* The page fixture, built inside each test so now() is the test's clock.
     14 subresources: 2 long-cached, 12 images. maxImg picks the images'
     max-age so the same builder gives the cold, warm and fixed scenarios. */
  var PAGE = R`
function page(maxImg) {
  var rs = [
    { name: "app.css", cacheControl: "max-age=600", storedAt: now(), etag: "css1", serverEtag: "css1", bytes: 8000 },
    { name: "app.js",  cacheControl: "max-age=600", storedAt: now(), etag: "js1",  serverEtag: "js1",  bytes: 40000 }
  ];
  for (var i = 1; i <= 12; i++) {
    rs.push({ name: "img" + i, cacheControl: "max-age=" + maxImg, storedAt: now(), etag: "i" + i, serverEtag: "i" + i, bytes: 6000 });
  }
  return rs;
}
function coldPage() {
  return page(30).map(function (r) { return Object.assign({}, r, { storedAt: null, etag: null }); });
}
`;

  window.CODELAB.addUnit("web", {
    id: "web-u8",
    title: "Type a URL, and make it fast",
    icon: "🏁",
    blurb: "No new ideas: the whole trip walked once end to end, then a slow page diagnosed by counting exactly what the earlier units taught you to count.",
    cheat: [
      { h: "The whole trip", lang: "text", code: R`
DNS   1 RT   name -> IP           (Unit 2)
TCP   1 RT   SYN/SYN-ACK/ACK      (Unit 3)
TLS   1 RT   go private, TLS 1.3  (Unit 3)
GET   1 RT   request -> response  (Units 1,4,5)
then: parse HTML, discover more resources (Unit 7)`,
        note: "Four round trips to the first byte of a cold HTTPS request, then the browser reads the HTML and fetches what it references — where caching (Unit 6) and the protocol version (Unit 7) decide the cost." },
      { h: "Counting a page load", lang: "text", code: R`
fresh in cache    -> 0 requests   (Unit 6)
stale + ETag      -> revalidate: 1 RT, maybe 304, 0 bytes
not cached        -> download: 1 RT + the bytes
HTTP/1.1 rows = ceil(requests / 6)
HTTP/2 rows   = 1 (all multiplexed)`,
        note: "The cheapest request is the one you never send. Revalidation still costs a round trip even when it returns 0 bytes; only a fresh cache costs nothing." }
    ],
    lessons: [

      {
        id: "web-u8-p1",
        title: "Project: What happens when you type a URL",
        kind: "concept", xp: 40, mins: 26, project: true,
        screens: [
          { read: "The whole course, in one question — the one interviewers actually ask. You type `https://shop.example.com` and press Enter. Nothing is cached and no connection is open. Before the page can appear, four things happen, each one round trip, and they're strictly ordered: you can't secure a connection that isn't open, or send a request over a channel that isn't private yet.\n\nPut the stages of that first request in order.",
            ask: { type: "order",
              q: "Order the stages of a cold HTTPS request, from pressing Enter to the HTML arriving.",
              lines: [
                "DNS resolves shop.example.com to an IP address (cache miss)",
                "TCP three-way handshake opens the connection",
                "TLS 1.3 handshake makes the connection private",
                "GET / request is sent to the server",
                "The HTML response comes back"
              ],
              why: "DNS finds the address, TCP opens the connection, TLS makes it private, then the request goes out and the response returns — each depends on the one before it." } },

          { read: "Each of those stages is one round trip: a message out and a message back. Counting them is how this course measures distance — not in milliseconds, which change with the network, but in round trips, which are fixed by the protocol.",
            ask: { type: "trace", transfer: true,
              q: "Fill in the running total of round trips after each stage of the cold request.",
              code: "DNS -> TCP -> TLS 1.3 -> GET / and its response",
              columns: ["stage just finished", "round trips so far"],
              given: 1,
              rows: [["DNS", 1], ["TCP", 2], ["TLS 1.3", 3], ["GET / + response", 4]],
              why: "One round trip each: 1 after DNS, 2 after TCP, 3 after TLS, and 4 once the request and its response complete — four before the first byte of HTML." } },

          { ask: { type: "predict", transfer: true,
              q: "The server finds the page and returns it successfully. What status code does the response line carry? Type the number.",
              answer: "200",
              why: "200 OK is the ordinary success code: the request was understood and the response body is the page you asked for." } },

          { read: "Suppose you'd visited before and still held a cached copy of the HTML with an `ETag`. The browser would send a conditional request (`If-None-Match`), and if nothing changed the server would answer **304 Not Modified** — no body.",
            ask: { type: "pick", transfer: true,
              q: "On a revalidation that returns 304 instead of 200, what changes about the cost?",
              choices: [
                "It skips the round trip to the server entirely, so the conditional request ends up costing nothing at all",
                "The round trip still happens, but the body isn't re-sent — you pay the trip, not the download",
                "It uses no network and reads purely from the local disk cache",
                "It makes the DNS lookup unnecessary on this request"
              ],
              answer: 1,
              why: [
                "A conditional request is still a request; the trip to ask \"has it changed?\" happens.",
                "304 means the cached body is still good, so the server sends only headers — the round trip costs almost nothing, but it's still a round trip.",
                "Reading with no network at all is what a fresh (not stale) cache does; a 304 is for a stale copy being checked.",
                "DNS is a separate stage; the 304 concerns only whether the body is re-sent."
              ] } },

          { read: "Back to the fresh page load. The HTML arrives — but that's not the end. The browser **parses** it and discovers it references more resources: a stylesheet, some scripts, images. Each is another request, and how they're fetched is exactly Unit 7: on HTTP/1.1 they queue over about six connections; on HTTP/2 they multiplex over one.",
            ask: { type: "pick",
              q: "The HTML references 10 images. On HTTP/2, how are those 10 requests carried?",
              choices: [
                "One at a time, with each image request waiting for the previous one to completely finish first",
                "As 10 multiplexed streams over a single connection, together",
                "Over 10 separate connections, one per image",
                "They can't be fetched until the HTML fully renders first"
              ],
              answer: 1,
              why: [
                "One-at-a-time is the HTTP/1.1 per-connection behaviour, not HTTP/2.",
                "HTTP/2 multiplexes many streams over one connection, so the images are requested together.",
                "HTTP/2's point is many streams on one connection, not many connections.",
                "The browser fetches referenced resources as it parses; it doesn't wait for a full render."
              ] } },

          { ask: { type: "explain",
              q: "In plain English, for someone who isn't a specialist: what happens between pressing Enter on an https link and the page appearing?",
              model: "The browser looks up the site's address (DNS), opens a connection to it (TCP), makes that connection private and verified (TLS), then sends the request and gets the HTML back — four round trips on a cold, first visit. It then reads the HTML, finds the styles, scripts and images it references, and fetches those too, using cached copies where it can and sharing one connection on HTTP/2. Once enough has arrived, it draws the page.",
              rubric: [
                "Names DNS, then the connection (TCP), then TLS/private, then the request/response",
                "Says it's about four round trips on a cold request",
                "Says the browser then parses the HTML and fetches the resources it references",
                "Is understandable without jargon, or explains any it uses"
              ] } },

          { read: "One boundary, so you know where this course stops. Everything so far got the **bytes** to the browser. Turning those bytes into pixels — parsing HTML into a tree, applying CSS, laying out and painting, running JavaScript — is **rendering**, and it's a whole subject of its own. The frontend courses (`dom`, and the HTML/CSS path) pick it up from here.",
            ask: { type: "pick", transfer: true,
              q: "Where does \"how the web works\" hand off to the frontend courses?",
              choices: [
                "At DNS resolution",
                "Once the bytes have arrived and the browser begins parsing, styling, laying out and painting them",
                "During the TLS handshake",
                "It doesn't hand off at all — this course fully covers rendering, layout, painting and the critical rendering path too"
              ],
              answer: 1,
              why: [
                "DNS is the very start of fetching, not the handoff.",
                "This course delivers the bytes; turning them into pixels (parse, style, layout, paint) is rendering, taught by the frontend path.",
                "TLS is part of connecting, well before any bytes are rendered.",
                "Rendering is deliberately out of scope; the capstone stops at \"parse the response, discover more requests.\""
              ] } }
        ]
      },

      {
        id: "web-u8-p2",
        title: "Project: Why is this page slow?",
        kind: "js", chip: "WEB", xp: 40, mins: 40, project: true, clock: 0,
        brief: "A page loads 14 resources: `app.css` and `app.js` (cached for 10 minutes), and 12 images (cached for 30 seconds). You'll build a page-load analyser that counts, exactly, what a load costs — then apply two fixes and watch the count drop. Every number is a **count**: round trips and bytes, never a measured time.\n\nImplement four functions:\n\n- **`isFresh(resource)`** — is a stored copy still usable with no request? (Unit 6)\n- **`analyze(resource)`** — `{ requested, status, bytes }` for one resource: a fresh copy needs no request; a stale copy with an `ETag` revalidates (304 with 0 bytes if unchanged, else a 200 download); anything with no usable stored copy is a full download.\n- **`roundTrips(requested, protocol)`** — the round-trip rows those requests take: `Math.ceil(requested / 6)` on `\"http/1.1\"` (six connections), `1` (or `0`) on `\"http/2\"` (Unit 7).\n- **`pageLoad(resources, protocol)`** — totals `{ requested, bytes, roundTrips }`.\n\nThe checks move the clock with `T.advance` to make cached copies go stale. Use `now()`, never the real clock.",
        steps: [
          { text: "`isFresh` is true only while a stored copy is inside its max-age.",
            test: R`
var r = { cacheControl: "max-age=30", storedAt: now(), etag: "a", serverEtag: "a", bytes: 100 };
T.eq(isFresh(r), true, "Just stored, within 30s: fresh");
T.advance(31000);
T.eq(isFresh(r), false, "31s later, past max-age: stale");
` },
          { text: "No stored copy, or no freshness lifetime, is never fresh.",
            test: R`
T.eq(isFresh({ cacheControl: "max-age=600", storedAt: null, etag: null, serverEtag: "a", bytes: 100 }), false, "Nothing cached: not fresh");
T.eq(isFresh({ cacheControl: "no-store", storedAt: now(), etag: "a", serverEtag: "a", bytes: 100 }), false, "no-store is never fresh");
T.eq(isFresh({ cacheControl: "no-cache", storedAt: now(), etag: "a", serverEtag: "a", bytes: 100 }), false, "no-cache always revalidates");
T.eq(isFresh({ cacheControl: "", storedAt: now(), etag: "a", serverEtag: "a", bytes: 100 }), false, "No max-age: no freshness lifetime");
` },
          { text: "`analyze` costs a fresh copy nothing, and returns a 0-byte 304 for an unchanged stale copy.",
            test: R`
T.eq(analyze({ cacheControl: "max-age=600", storedAt: now(), etag: "a", serverEtag: "a", bytes: 8000 }),
  { requested: false, status: "cache", bytes: 0 }, "Fresh: no request at all");
var stale = { cacheControl: "max-age=30", storedAt: now(), etag: "v7", serverEtag: "v7", bytes: 8000 };
T.advance(40000);
T.eq(analyze(stale), { requested: true, status: 304, bytes: 0 }, "Stale but unchanged: revalidate to a 0-byte 304");
` },
          { text: "A changed stale copy, and an uncached resource, are both full 200 downloads.",
            test: R`
var changed = { cacheControl: "max-age=30", storedAt: now(), etag: "v7", serverEtag: "v8", bytes: 8000 };
T.advance(40000);
T.eq(analyze(changed), { requested: true, status: 200, bytes: 8000 }, "Stale and changed: download the new body");
T.eq(analyze({ cacheControl: "max-age=600", storedAt: null, etag: null, serverEtag: "a", bytes: 5000 }),
  { requested: true, status: 200, bytes: 5000 }, "Never cached: full download");
` },
          { text: "`roundTrips` batches HTTP/1.1 over six connections and multiplexes HTTP/2 onto one.",
            test: R`
T.eq(roundTrips(14, "http/1.1"), 3, "14 requests over 6 connections: ceil(14/6) = 3 rows");
T.eq(roundTrips(6, "http/1.1"), 1, "6 requests fill the 6 connections in one row");
T.eq(roundTrips(14, "http/2"), 1, "HTTP/2 multiplexes all 14 onto one connection: 1 row");
T.eq(roundTrips(0, "http/1.1"), 0, "No requests, no round trips");
T.eq(roundTrips(0, "http/2"), 0, "No requests, no round trips");
` },
          { text: "Cold load (nothing cached): every resource is a full download.",
            test: PAGE + R`
T.eq(pageLoad(coldPage(), "http/1.1"), { requested: 14, bytes: 120000, roundTrips: 3 },
  "Cold on HTTP/1.1: 14 downloads, 120000 bytes, ceil(14/6) = 3 round-trip rows");
` },
          { text: "First fix — switch the cold load to HTTP/2. Same bytes, fewer round trips.",
            test: PAGE + R`
T.eq(pageLoad(coldPage(), "http/2"), { requested: 14, bytes: 120000, roundTrips: 1 },
  "Cold on HTTP/2: the 14 requests multiplex onto one connection — 3 rows drop to 1");
` },
          { text: "Warm load, images stale: revalidations cost round trips even at 0 bytes — until you cache them longer.",
            test: PAGE + R`
var warm = page(30);
T.advance(40000);
T.eq(pageLoad(warm, "http/1.1"), { requested: 12, bytes: 0, roundTrips: 2 },
  "app.css/app.js are fresh; the 12 stale images revalidate to 304s: 0 bytes, but still ceil(12/6) = 2 rows");
var cached = page(600);
T.advance(40000);
T.eq(pageLoad(cached, "http/1.1"), { requested: 0, bytes: 0, roundTrips: 0 },
  "Second fix — give the images max-age=600: now all 14 are fresh, 0 requests, 0 round trips");
` }
        ],
        files: [{ name: "script.js", content: ANALYSER_STARTER }],
        solution: { "script.js": ANALYSER_SOLUTION },
        hints: [
          "isFresh is Unit 6's cacheState in a boolean: stored, has max-age, not no-store/no-cache, and now() - storedAt < max-age * 1000.",
          "analyze: fresh -> no request; otherwise, if there's a stored copy with an etag (and it's not no-store), it's a conditional request — 304 with 0 bytes when etag === serverEtag, else a 200 with the bytes; everything else is a full 200 download.",
          "roundTrips: http/2 is 1 when any request is made (else 0); http/1.1 is Math.ceil(requested / 6). pageLoad just sums analyze over the resources and calls roundTrips once."
        ]
      },

      {
        id: "web-quiz-8",
        title: "Final quiz: How the web works",
        kind: "quiz", xp: 10,
        brief: "The whole course: URLs and origins, DNS, round trips and the handshakes, methods and status, headers, caching, and the HTTP versions. 80% to pass.",
        questions: [
          { q: "What makes two URLs the same origin?",
            choices: ["The same path", "The same scheme, host and port, all three", "The same domain name only, whatever the scheme is", "The same query string appended to the end of the address"],
            answer: 1, explain: "An origin is scheme + host + port. https and http, or two different ports on one host, are different origins." },
          { q: "How many round trips does a cold HTTPS request take, counting DNS, TCP, TLS 1.3 and the request?",
            choices: ["1", "2", "4", "It depends on how physically far away the server happens to be from you"],
            answer: 2, explain: "One each: DNS, TCP, TLS 1.3 and the HTTP request — four round trips before the first byte of HTML." },
          { q: "Why should a client auto-retry a failed GET but not a failed POST?",
            choices: ["GET responses are always smaller", "GET is idempotent, so a retry is harmless; a retried POST could take effect twice", "POST requests are not allowed to be sent more than one single time each", "GET skips the server entirely"],
            answer: 1, explain: "Retrying an idempotent request changes nothing extra; retrying a POST (say, placing an order) could do it twice." },
          { q: "A cached response is still fresh (within its max-age). How many network round trips does using it cost?",
            choices: ["0 — it's read locally with no request", "1", "4", "One for every single kilobyte of the response body that has to be transferred"],
            answer: 0, explain: "A fresh copy is served straight from the cache with no request at all — the cheapest possible outcome." },
          { q: "What makes a 304 Not Modified cheap?",
            choices: ["It is compressed more aggressively than a normal response body would be", "It carries no body — just headers saying the cached copy is still valid", "It is sent over a faster connection", "It skips the TLS handshake that other responses need"],
            answer: 1, explain: "A 304 revalidation transfers only headers, not the resource body, so an unchanged file costs almost nothing to check." },
          { q: "What does HTTP/2 multiplexing change compared with HTTP/1.1?",
            choices: ["It encrypts requests, which HTTP/1.1 could not do at all under any circumstances", "Many requests share one connection as streams, instead of queuing over ~6 connections", "It removes the need to look up the server's address with DNS", "It caches every response for a full year automatically"],
            answer: 1, explain: "HTTP/2 carries many streams over one connection at once, removing the HTTP-level queue behind six connections." },
          { q: "What does HTTP/3's QUIC transport fix that HTTP/2 over TCP couldn't?",
            choices: ["It finally adds encryption to web traffic for the very first time in any protocol", "A lost packet stalls only its own stream, because QUIC's streams are independent", "It lets a page work without any HTML at all", "It makes DNS lookups return instantly every time"],
            answer: 1, explain: "QUIC carries independent streams over UDP, so one lost packet no longer blocks unrelated streams — the transport head-of-line blocking HTTP/2 left." },
          { q: "Across every HTTP version, what's the single biggest lever on how fast a page loads?",
            choices: ["Rewriting the site in a faster programming language than it currently uses today", "Fewer round trips on the critical path, and cacheable resources — the cheapest request is the one you don't send", "Always bundling every file into one", "Using the newest protocol version and nothing else besides that one change"],
            answer: 1, explain: "Protocols change the cost of an extra request, but fewer critical-path round trips and a warm cache (zero requests) win on all of them." }
        ]
      }
    ]
  });
})();
