/* How the Web Works — Unit 7: Connections and versions */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  /* Twelve resources, six connections: two round-trip rows. */
  function batch(count, perRow) {
    var items = [];
    for (var i = 0; i < count; i++) {
      items.push({ label: "resource " + (i + 1), start: Math.floor(i / perRow), rtt: 1, kind: "request" });
    }
    return items;
  }

  window.CODELAB.addUnit("web", {
    id: "web-u7",
    title: "Connections and versions",
    icon: "🛣️",
    blurb: "One slow connection, or many? The old six-connection workaround and the head-of-line blocking it fought, then how HTTP/2 and HTTP/3 changed the round-trip math this course has been counting.",
    cheat: [
      { h: "One at a time", lang: "text", code: R`
HTTP/1.1   one request per connection at a time
           browser opens ~6 connections per origin
           18 resources over 6 => ceil(18/6) = 3 rounds`,
        note: "On HTTP/1.1 a connection carries one request, waits for the whole reply, then the next. A browser opens about six per origin to parallelise; past that, requests queue — head-of-line blocking." },
      { h: "Many at once", lang: "text", code: R`
HTTP/2   many streams multiplexed on ONE connection
         one handshake, requests interleave
         18 resources -> one round of requests`,
        note: "HTTP/2 sends many requests over a single connection at the same time, so they share one handshake. It removes HTTP-level head-of-line blocking — but a lost TCP packet still stalls every stream." },
      { h: "QUIC", lang: "text", code: R`
HTTP/3 on QUIC (over UDP)
  independent streams in the transport itself
  a lost packet stalls only its own stream
  handshake folds in TLS 1.3`,
        note: "HTTP/3 moves multiplexing down into the transport, so one lost packet no longer blocks unrelated streams — the gap HTTP/2 left. It also folds TLS into the handshake, saving a round trip." }
    ],
    lessons: [

      {
        id: "web-u7-1",
        title: "HTTP/1.1: one at a time, six at once",
        kind: "concept", xp: 15, mins: 13,
        screens: [
          { read: "A single HTTP/1.1 connection carries **one request at a time**: it sends a request, waits for the whole response, then sends the next. A page needs dozens of resources — HTML, CSS, JavaScript, images — so one connection would fetch them strictly in a line.\n\nTo parallelise, a browser opens **about six connections** per origin and spreads the requests across them. Six resources can be in flight at once; a seventh waits for one of the six to free up.",
            ask: { type: "lab", lab: "waterfall",
              params: { columns: 2, caption: "12 resources over 6 HTTP/1.1 connections, each already open. Six go at once, then the next six.",
                items: batch(12, 6) },
              predict: { type: "predict",
                q: "A page needs 12 resources and the browser has 6 open HTTP/1.1 connections. Each request takes one round trip, and a connection carries one at a time. How many round-trip rows does it take to fetch all 12? Type a number.",
                answer: "2",
                why: "Six requests fit in the first round, the other six in the second: ceil(12 / 6) = 2 rounds.",
                run: true,
                check: "console.log(Math.ceil(12 / 6));" } } },

          { read: "When there are more resources than connections, the extras **queue**. Requests seven and beyond can't start until an earlier one finishes and releases its connection. This waiting-in-line is **head-of-line blocking**: a request is ready to go but is stuck behind others on the limited set of connections.\n\nThe six-connection limit is a browser default, roughly the same everywhere. It's a workaround for HTTP/1.1's one-at-a-time rule, not a law of the network.",
            ask: { type: "predict", transfer: true,
              q: "18 resources, 6 HTTP/1.1 connections, one round trip each. How many round-trip rows before all 18 are fetched? Type a number.",
              answer: "3",
              why: "ceil(18 / 6) = 3: six per round, three rounds. Beyond the six connections, the rest wait their turn — head-of-line blocking.",
              run: true,
              check: "console.log(Math.ceil(18 / 6));" } },

          { read: "This connection limit shaped how sites were built for years. Because extra connections were scarce and each carried one request at a time, the winning move was to send **fewer, bigger** files: bundle all the JavaScript into one file, all the CSS into one, and stitch small images into a single **sprite sheet**. Fewer files meant fewer requests fighting over six connections.",
            ask: { type: "pick", transfer: true,
              q: "Why did HTTP/1.1 sites bundle many small scripts into one big file?",
              choices: ["Big files always transfer faster than small ones do, no matter how many connections the browser opens", "Fewer files meant fewer requests competing for the ~6 connections, so less head-of-line blocking", "It made the JavaScript run faster once loaded", "The server can only store one file per page"],
              answer: 1,
              why: [
                "A big file isn't inherently faster; it's the number of requests that hurt.",
                "One request instead of twenty avoids the queue behind six connections — the whole reason bundling won on HTTP/1.1.",
                "Bundling changes how it's fetched, not how fast it executes.",
                "Servers hold as many files as you like; the limit was connections, not storage."
              ] } },

          { ask: { type: "explain",
              q: "In HTTP/1.1, why does opening six connections help, and what still limits a page with many resources?",
              model: "A single HTTP/1.1 connection sends one request at a time, so six connections let six requests be in flight at once instead of one. But a connection still carries one request at a time, so once all six are busy the rest of the resources queue — head-of-line blocking — and a page with many files fetches them a few rounds at a time.",
              rubric: ["Says one HTTP/1.1 connection carries one request at a time", "Says ~6 connections let ~6 requests run in parallel", "Says extra resources queue behind them (head-of-line blocking)"] } }
        ]
      },

      {
        id: "web-u7-2",
        title: "HTTP/2: many streams on one connection",
        kind: "concept", xp: 15, mins: 13,
        screens: [
          { read: "**HTTP/2** changes the rule. Instead of one request per connection, it **multiplexes** many requests as independent **streams** over a **single** connection. All twelve resources of a page can be requested at once, their responses interleaved back over the same connection.\n\nThat means one handshake, not six connections' worth, and no six-at-a-time queue: the requests don't wait in line for each other.",
            ask: { type: "lab", lab: "waterfall",
              params: { columns: 1, caption: "The same 12 resources over ONE HTTP/2 connection: all requested together, one round of round trips.",
                items: batch(12, 12) },
              predict: { type: "predict",
                q: "On a single HTTP/2 connection, all 12 resources are requested at the same time as separate streams. How many round-trip rows does the request round take now? Type a number.",
                answer: "1",
                why: "Multiplexing puts all 12 requests on one connection at once, so they share a single round of round trips instead of ceil(12/6) = 2.",
                run: true,
                check: "console.log(1);" } } },

          { read: "Because requests no longer queue behind six connections, the old HTTP/1.1 tricks matter less. Bundling every script into one file and building sprite sheets were workarounds for a limit HTTP/2 removed. You can serve many smaller files and let them multiplex.\n\nHTTP/2 removes **HTTP-level** head-of-line blocking: no request waits for another at the HTTP layer.",
            ask: { type: "pick", transfer: true,
              q: "How does HTTP/2 avoid the six-connection queue that HTTP/1.1 had?",
              choices: ["It opens roughly twelve or more separate connections per origin instead of the usual six", "It multiplexes many requests as streams over one connection, so they run together", "It makes each file smaller automatically", "It skips the TLS handshake"],
              answer: 1,
              why: [
                "It uses fewer connections, not more — the point is one connection carrying many streams.",
                "Many streams share a single connection and interleave, so nothing queues behind a six-connection limit.",
                "It doesn't shrink files; it changes how requests share a connection.",
                "HTTP/2 still runs over TLS; the handshake is unchanged."
              ] } },

          { read: "But there's a catch, and it's the reason HTTP/3 exists. HTTP/2's many streams still ride on **one TCP connection**, and TCP delivers bytes strictly in order. If a single TCP packet is **lost**, TCP holds back every byte after it until the packet is re-sent — so **all** the multiplexed streams stall, even the ones whose data already arrived. The blocking moved from the HTTP layer down to the transport.",
            ask: { type: "pick", transfer: true,
              q: "\"HTTP/2 removes all head-of-line blocking.\" Why is that not quite true?",
              choices: ["It's completely true — HTTP/2 removes every kind of head-of-line blocking, at the HTTP layer and the transport layer alike", "It removes HTTP-level blocking, but a lost TCP packet still stalls every stream on the shared connection", "HTTP/2 actually makes blocking worse than HTTP/1.1", "Blocking only happens on HTTP/1.1, never on any newer version"],
              answer: 1,
              why: [
                "HTTP-level queueing is gone, but transport-level blocking remains.",
                "One TCP connection delivers in order, so a lost packet holds back all streams behind it — TCP head-of-line blocking, the gap HTTP/3 fills.",
                "HTTP/2 is better than 1.1 for parallelism; it just didn't solve transport blocking.",
                "The remaining blocking is at the TCP layer, which HTTP/2 still uses."
              ] } },

          { ask: { type: "explain",
              q: "What did HTTP/2 fix compared with HTTP/1.1, and what kind of blocking did it leave behind?",
              model: "HTTP/2 multiplexes many requests as streams over a single connection, so they run at once and no request queues behind the ~6-connection limit — it removes HTTP-level head-of-line blocking. But all those streams share one TCP connection, and TCP delivers in order, so a single lost packet stalls every stream: transport-level head-of-line blocking remains.",
              rubric: ["Says HTTP/2 multiplexes many streams over one connection", "Says it removes the HTTP-level six-connection queue", "Says a lost TCP packet still stalls all streams (transport-level blocking remains)"] } }
        ]
      },

      {
        id: "web-u7-3",
        title: "HTTP/3 over QUIC",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "**HTTP/3** fixes the transport blocking by not using TCP at all. It runs on **QUIC**, a new transport built on **UDP**, and QUIC carries **independent streams itself**. Each stream is delivered on its own, so if a packet for one stream is lost, only **that** stream waits — the others keep flowing.\n\nSame idea as HTTP/2's streams, but pushed down into the transport, where the ordering rule that caused the stall lived.",
            ask: { type: "pick",
              q: "What does QUIC fix that HTTP/2 over TCP could not?",
              choices: ["It finally encrypts all of the traffic, something that HTTP/2 running on top of TLS was never able to do", "A lost packet stalls only its own stream, not every other stream on the connection", "It removes the need for DNS", "It makes the server's code run faster"],
              answer: 1,
              why: [
                "HTTP/2 was already encrypted over TLS; that's not the difference.",
                "QUIC's streams are independent in the transport, so one lost packet no longer holds back unrelated streams — the transport head-of-line blocking HTTP/2 left.",
                "HTTP/3 still needs DNS to find the server.",
                "The transport doesn't change how fast the server computes a response."
              ] } },

          { read: "QUIC has a second win: it **folds the TLS 1.3 handshake into its own**. With TCP you paid one round trip to open the connection and another for TLS on top. QUIC combines them, so a fresh HTTP/3 connection is set up in **one** round trip instead of two, and a resumed one can reach 0-RTT.\n\nSo HTTP/3 both removes transport head-of-line blocking and shortens the handshake.",
            ask: { type: "predict", transfer: true,
              q: "A cold TCP + TLS 1.3 setup costs 1 round trip for TCP and 1 for TLS. QUIC folds them into a single combined handshake. How many round trips does QUIC's cold setup take? Type a number.",
              answer: "1",
              why: "QUIC merges the transport and TLS handshakes, so what was 2 round trips (TCP then TLS) becomes 1.",
              run: true,
              check: "console.log(1);" } },

          { read: "It's worth being honest about the layers. QUIC runs on **UDP**, which by itself is unreliable and unordered — it doesn't re-send lost packets. QUIC adds reliability, ordering **per stream**, and encryption back on top of UDP. It isn't \"UDP instead of reliability\"; it's a new reliable, encrypted transport that happens to use UDP as its base so it isn't bound by TCP's rules.",
            ask: { type: "pick", transfer: true,
              q: "HTTP/3 runs on QUIC over UDP, and UDP has no re-sending or ordering. So how is HTTP/3 still reliable?",
              choices: ["It isn't reliable at all — HTTP/3 can silently lose data whenever one of its UDP packets goes missing", "QUIC adds reliability, per-stream ordering and encryption on top of UDP", "It falls back to TCP whenever a packet is lost", "UDP was reliable all along"],
              answer: 1,
              why: [
                "HTTP/3 is reliable; QUIC restores the guarantees TCP gave, without TCP's cross-stream ordering.",
                "QUIC re-sends lost packets and orders each stream on its own, over UDP, so a loss stalls only that stream.",
                "It doesn't fall back to TCP mid-connection; QUIC handles the loss itself.",
                "Raw UDP is unreliable; QUIC is what adds the reliability."
              ] } },

          { ask: { type: "explain",
              q: "HTTP/3 uses QUIC over UDP. What two problems does that solve compared with HTTP/2 over TCP?",
              model: "First, QUIC carries independent streams in the transport itself, so a lost packet stalls only its own stream instead of every stream on one TCP connection — it removes the transport-level head-of-line blocking HTTP/2 left. Second, QUIC folds the TLS 1.3 handshake into its own, so a fresh connection sets up in one round trip instead of TCP's one plus TLS's one.",
              rubric: ["Says QUIC streams are independent so a lost packet stalls only that stream", "Says this removes the transport-level head-of-line blocking HTTP/2 had", "Says QUIC combines the transport and TLS handshakes into fewer round trips"] } }
        ]
      },

      {
        id: "web-u7-4",
        title: "What this means for how you build",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "Put the versions together and a build rule falls out. On **HTTP/1.1**, bundling everything into one file was a big win — fewer requests fighting over six connections. On **HTTP/2 and HTTP/3**, requests multiplex, so many small files cost far less than they used to. The old \"always bundle everything\" advice is mostly obsolete.\n\nBut a round trip is still a round trip. Fewer requests on the critical path still help; it's just no longer worth mangling your files to get there.",
            ask: { type: "pick",
              q: "On HTTP/2, is it still worth bundling every script into one giant file?",
              choices: ["Yes, always — one single combined file is the fastest possible option on every protocol and every network", "Much less so: requests multiplex, so several smaller files load fine and needn't be merged", "No, bundling is never useful under any circumstances at all", "Only if the server runs HTTP/1.1 as well"],
              answer: 1,
              why: [
                "The one-file rule came from HTTP/1.1's connection limit, which HTTP/2 removed.",
                "Multiplexing means many files share one connection cheaply, so aggressive bundling stops paying off.",
                "Bundling still has uses (fewer requests, simpler builds); it's just no longer forced by the transport.",
                "HTTP/2 multiplexing applies regardless of an HTTP/1.1 fallback."
              ] } },

          { read: "There's a reason **not** to over-bundle, and it comes from Unit 6. Caching keys on the URL, so one giant `app.js` is cached — or busted — as a whole. Change a single line and its content hash changes, so the **entire** bundle re-downloads. Split into stable chunks and a small change re-downloads only the chunk that changed; the rest stays served from cache with no request at all.",
            ask: { type: "pick", transfer: true,
              q: "You ship a one-line fix. Why can one huge bundled `app.js` be worse for returning visitors than several smaller files?",
              choices: ["The big file is inherently much slower for the browser to parse and to execute once it has finished downloading, on every single visit", "Its content hash changes, so the whole bundle is re-downloaded; smaller chunks would re-download only the changed one", "Big files can't be cached at all", "Smaller files skip the TLS handshake"],
              answer: 1,
              why: [
                "Execution speed isn't the issue; re-downloading is.",
                "A cache keys on the URL and its hash, so any change to the bundle busts all of it — the Unit 6 point about hashed filenames.",
                "Big files cache fine; the problem is that one change invalidates the whole thing.",
                "All files on the same connection share one handshake; size doesn't change that."
              ] } },

          { read: "So the durable advice, across every version, ties back to what this course has counted:\n\n- **Fewer round trips on the critical path** (Unit 3) — fetch what the first paint needs, defer the rest.\n- **Cacheable resources** (Unit 6) — a fresh copy costs zero round trips; split so a change busts as little as possible.\n\nProtocols change the cost of an extra request; they don't change that the cheapest request is the one you don't send.",
            ask: { type: "predict", transfer: true,
              q: "A returning visitor loads a page whose 8 resources are all fresh in the browser cache. How many network round trips does fetching those resources take? Type a number.",
              answer: "0",
              why: "A fresh cached copy is read locally with no request at all (Unit 6). The protocol version doesn't matter — zero requests means zero round trips.",
              run: true,
              check: "console.log(0);" } },

          { ask: { type: "explain",
              q: "Your teammate says \"we're on HTTP/2 now, so bundle everything into one file for speed.\" What would you tell them?",
              model: "Bundling everything into one file was an HTTP/1.1 workaround for the six-connection limit, and HTTP/2 multiplexes requests so that limit is gone — many smaller files load fine. Worse, one giant bundle means a one-line change busts its cache and re-downloads the whole thing, where split chunks re-download only what changed. Aim for fewer critical-path requests and cacheable chunks, not one big file.",
              rubric: ["Says bundling was an HTTP/1.1 fix that HTTP/2 multiplexing makes largely unnecessary", "Says a single bundle busts its whole cache on any change (ties to Unit 6)", "Recommends fewer critical-path requests and cacheable chunks over one big file"] } }
        ]
      },

      {
        id: "web-quiz-7",
        title: "Unit 7 quiz: Connections and versions",
        kind: "quiz", xp: 10,
        brief: "One-at-a-time connections, the six-connection limit, HTTP/2 multiplexing, and HTTP/3 over QUIC. 80% to pass.",
        questions: [
          { q: "How does an HTTP/1.1 connection carry requests?",
            choices: ["Many at once, interleaved", "One at a time: send, wait for the whole reply, then the next", "Only ever a single request, then it closes for good and cannot be reused", "In a random order decided entirely by the server"],
            answer: 1, explain: "A single HTTP/1.1 connection is one request at a time, which is why browsers open about six per origin to parallelise." },
          { q: "18 resources over 6 HTTP/1.1 connections, one round trip each. How many round-trip rows?",
            choices: ["1", "3", "18", "6"],
            answer: 1, explain: "Six requests fit per round, so ceil(18 / 6) = 3 rounds. The rest queue behind the six connections — head-of-line blocking." },
          { q: "What does HTTP/2 multiplexing do?",
            choices: ["Opens far more connections per origin", "Carries many requests as independent streams over one connection, at the same time", "Compresses every response body automatically before sending it on to the browser", "Removes the need for a TLS handshake entirely"],
            answer: 1, explain: "Many streams share one connection and interleave, removing the HTTP-level queue behind six connections." },
          { q: "Why is \"HTTP/2 removes all head-of-line blocking\" not quite right?",
            choices: ["HTTP/2 has no streams", "Its streams share one TCP connection, so a lost packet still stalls all of them", "HTTP/2 is actually slower than HTTP/1.1 in every case, so nothing improved at all", "Blocking only ever happens inside the server"],
            answer: 1, explain: "HTTP-level blocking is gone, but TCP delivers in order, so one lost packet holds back every stream — the transport blocking HTTP/3 fixes." },
          { q: "What does HTTP/3's QUIC transport fix that HTTP/2 over TCP couldn't?",
            choices: ["It adds encryption for the first time", "A lost packet stalls only its own stream, because QUIC's streams are independent in the transport", "It removes the DNS lookup that every request would otherwise need before connecting", "It lets the server push unlimited data"],
            answer: 1, explain: "QUIC carries independent streams over UDP, so one loss no longer blocks unrelated streams, and it folds in TLS to shorten the handshake." },
          { q: "You're on HTTP/2. Should you still bundle every script into one giant file?",
            choices: ["Yes, one file is always the fastest option in every situation regardless of the protocol", "Much less so — requests multiplex, and one bundle busts its whole cache on any change", "Yes, because HTTP/2 cannot cache separate files", "No, bundling has no purpose whatsoever on any protocol"],
            answer: 1, explain: "Multiplexing removes the six-connection reason to bundle, and a single bundle re-downloads entirely when one line changes; prefer cacheable chunks." }
        ]
      }
    ]
  });
})();
