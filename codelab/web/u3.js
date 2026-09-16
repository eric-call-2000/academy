/* How the Web Works — Unit 3: Connecting: handshakes and round trips */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  window.CODELAB.addUnit("web", {
    id: "web-u3",
    title: "Connecting: handshakes and round trips",
    icon: "🤝",
    blurb: "Before any HTTP flows, the browser and server introduce themselves, and each introduction costs a trip across the network. This is where \"the server is far away\" becomes a number you can count.",
    cheat: [
      { h: "A round trip", lang: "text", code: R`
one message out  +  one message back  =  1 round trip (RTT)
latency  ~=  round trips  x  how far the server is`,
        note: "Distance is measured in round trips, not milliseconds. Fewer round trips on the critical path is the single biggest lever on how fast a connection starts." },
      { h: "A cold HTTPS request", lang: "text", code: R`
DNS         1 round trip   name -> IP
TCP         1 round trip   SYN, SYN-ACK, ACK
TLS 1.3     1 round trip   agree on keys, go private
HTTP        1 round trip   GET / -> the response
                          ----
                           4 round trips before the first byte`,
        note: "That's a fresh connection. Reusing an open one skips DNS, TCP and TLS, leaving just the 1 round trip for the request itself." },
      { h: "Reuse and 0-RTT", lang: "text", code: R`
keep-alive : next request on the same connection = 1 RTT
0-RTT      : resumed TLS 1.3 sends data in the first packet
           : but it's replayable -> only safe requests`,
        note: "TLS 1.3 needs one round trip on a fresh connection and can do 0-RTT on a resumed one. 0-RTT data can be replayed, so only GET/HEAD-style requests may use it." }
    ],
    lessons: [

      {
        id: "web-u3-1",
        title: "A round trip is the unit of distance",
        kind: "concept", xp: 15, mins: 14,
        screens: [
          { read: "The `algo` course measured cost by counting operations, never by timing them. The network works the same way: measure distance in **round trips**. One round trip is one message out to the server and one message back. However fast the server is, each round trip costs the time for light and wires to carry a message there and back — and that's fixed by distance.\n\nSo the question isn't \"how many milliseconds\"; it's **how many round trips** happen before the page can appear.",
            ask: { type: "lab", lab: "waterfall",
              params: { columns: 4, caption: "A first HTTPS request, cold: nothing in any cache, no open connection.",
                items: [
                  { label: "DNS lookup", start: 0, rtt: 1, kind: "setup" },
                  { label: "TCP handshake", start: 1, rtt: 1, kind: "setup" },
                  { label: "TLS 1.3 handshake", start: 2, rtt: 1, kind: "setup" },
                  { label: "GET / -> HTML", start: 3, rtt: 1, kind: "request" }
                ] },
              predict: { type: "predict",
                q: "A fresh HTTPS request pays for DNS, then TCP, then TLS 1.3, then the request itself — one round trip each. How many round trips happen before the first byte of HTML arrives? Type a number.",
                answer: "4",
                why: "DNS (1) + TCP (1) + TLS 1.3 (1) + the HTTP request (1) = 4 round trips, all before any page content comes back.",
                run: true,
                check: "console.log(1 + 1 + 1 + 1);" } } },

          { read: "This is why a server being \"fast\" and a page loading fast are different things. A server across the world might answer in a microsecond, but if every round trip to it takes 150 milliseconds, four of them is 600 milliseconds before the HTML even starts. The work the server does can be tiny; the trips dominate.",
            ask: { type: "pick",
              q: "Two servers do identical work. Server A is nearby (20 ms per round trip); server B is overseas (200 ms per round trip). On a cold HTTPS request, which loads its HTML sooner, and why?",
              choices: ["They tie, because they do the same work", "Server A, because its round trips are shorter and the connection is mostly round trips", "Server B, as long as its underlying computer hardware happens to be a little faster than the other", "It depends only on the size of the HTML"],
              answer: 1,
              why: [
                "The work is equal, but the setup is four round trips, and A's are ten times shorter.",
                "Four round trips at 20 ms is 80 ms; at 200 ms it's 800 ms. The trips, not the work, dominate.",
                "A faster computer saves microseconds against round trips measured in hundreds of milliseconds.",
                "Size matters for the transfer, but the four setup round trips happen before any HTML flows at all."
              ] } },

          { ask: { type: "trace", transfer: true,
              q: "Fill in the running total of round trips after each stage of a cold HTTPS request.",
              code: "DNS -> TCP -> TLS 1.3 -> HTTP request",
              columns: ["stage just finished", "round trips so far"],
              given: 1,
              rows: [["DNS", 1], ["TCP", 2], ["TLS 1.3", 3], ["HTTP request", 4]],
              why: "Each stage adds one round trip: 1 after DNS, 2 after TCP, 3 after TLS, and 4 once the request and its response complete." } },

          { ask: { type: "predict", transfer: true,
              q: "A round trip to a server takes 50 ms. Roughly how many milliseconds do the 4 round trips of a cold HTTPS request add before the HTML arrives? Type a number.",
              answer: "200",
              why: "4 round trips × 50 ms each = 200 ms of pure round-trip time, before counting how long the HTML takes to transfer.",
              run: true,
              check: "console.log(4 * 50);" } },

          { ask: { type: "explain",
              q: "Why does this course count round trips instead of measuring milliseconds?",
              model: "Milliseconds depend on the network and the distance to the server, which change from user to user. Round trips are a property of the protocol: a cold HTTPS request always takes four, wherever the server is. Counting them tells you what to reduce, and the milliseconds follow from the round trips times the distance.",
              rubric: ["Says milliseconds vary by network/distance/user", "Says round trips are fixed by the protocol", "Says latency is round trips times the per-trip time"] } }
        ]
      },

      {
        id: "web-u3-2",
        title: "TCP: the three-way handshake",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "Before the browser can send a byte of HTTP, it has to **open a connection** to the server's IP. That's TCP's job, and it starts with a three-message introduction called the **three-way handshake**:\n\n- the client sends **SYN** (\"let's talk\")\n- the server replies **SYN-ACK** (\"okay, let's talk\")\n- the client sends **ACK** (\"great, starting now\") — and can send its request right after\n\nThree messages, but they complete in about **one round trip** before data flows.",
            ask: { type: "order",
              q: "Order the three messages of the TCP handshake.",
              lines: ["Client -> server: SYN", "Server -> client: SYN-ACK", "Client -> server: ACK"],
              why: "The client proposes (SYN), the server agrees (SYN-ACK), the client confirms (ACK) and can send its request with that final message." } },

          { read: "TCP's job is to make an unreliable network look like a reliable, ordered stream of bytes: it numbers the data, re-sends anything lost, and delivers it in order. The handshake is where both sides agree on those starting numbers. All of it happens before the browser sends `GET /`.",
            ask: { type: "predict",
              q: "About how many round trips does the TCP handshake add before the browser can send its request? Type a number.",
              answer: "1",
              why: "The SYN goes out and the SYN-ACK comes back — one round trip — and the client sends its ACK (and the request) right after.",
              run: true,
              check: "console.log(1);" } },

          { ask: { type: "pick", transfer: true,
              q: "Why must the TCP handshake finish before the browser sends `GET /`?",
              choices: ["HTTP needs an open, agreed connection to send bytes over", "TCP encrypts the whole request before it is allowed to be sent out", "The handshake looks up the IP address", "HTTP and TCP are the same thing"],
              answer: 0,
              why: [
                "HTTP is carried over the TCP connection, so the connection has to exist and be agreed first.",
                "TCP doesn't encrypt anything; that's TLS's job, and it comes after.",
                "The IP was already found by DNS; the handshake connects to it.",
                "TCP is the transport; HTTP is the messages sent over it — different layers."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "What does TCP give HTTP that a raw network doesn't?",
              choices: ["Full end-to-end encryption of every single byte that travels over the connection both ways", "A reliable, in-order stream of bytes, re-sending anything lost", "A domain name", "A cache"],
              answer: 1,
              why: [
                "Encryption is TLS; TCP is unencrypted on its own.",
                "TCP numbers the bytes, re-sends losses and delivers them in order, so HTTP sees a clean stream.",
                "Names come from DNS, not TCP.",
                "Caching is an HTTP concern, layered above."
              ] } }
        ]
      },

      {
        id: "web-u3-3",
        title: "TLS 1.3: one more trip to go private",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "TCP gives you a connection, but anyone between you and the server could read it. The **s** in `https` is **TLS**: a second handshake, on top of the TCP one, that agrees on encryption keys and checks the server really is who the name says. After it, everything is private.\n\nModern **TLS 1.3** needs just **one round trip** to set up. (The older TLS 1.2 took two — halving that is a big part of why HTTPS stopped feeling slow.)",
            ask: { type: "predict",
              q: "On a fresh connection, how many round trips does TLS 1.3 add on top of the TCP handshake? Type a number.",
              answer: "1",
              why: "TLS 1.3 completes its key agreement in a single round trip. TLS 1.2 needed two; 1.3 cut it to one.",
              run: true,
              check: "console.log(1);" } },

          { read: "So the four round trips of a cold HTTPS request line up as: DNS finds the address, TCP opens the connection, TLS 1.3 makes it private, and the HTTP request fetches the page. Each is one trip, and they're strictly ordered — you can't secure a connection that isn't open, or request over a channel that isn't private yet.",
            ask: { type: "pick",
              q: "Why does an `https` page feel slower than `http` only on the *first* request to a server?",
              choices: ["https is simply always slower for every single byte it transfers, on each and every request you make", "The first request pays for the extra TLS round trip; later requests reuse the private connection", "http skips DNS", "TLS re-runs on every request"],
              answer: 1,
              why: [
                "Once set up, encryption costs almost nothing per byte.",
                "TLS adds one round trip when the connection is created; reused connections are already private, so later requests pay nothing extra.",
                "Both http and https need DNS.",
                "TLS runs once per connection, not once per request."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "Counting DNS, TCP, TLS 1.3 and the HTTP request, how many round trips does a cold HTTPS request take in total? Type a number.",
              answer: "4",
              why: "1 (DNS) + 1 (TCP) + 1 (TLS 1.3) + 1 (HTTP) = 4 round trips before the first byte of the page.",
              run: true,
              check: "console.log(4);" } },

          { ask: { type: "pick", transfer: true,
              q: "Besides encrypting the traffic, what else does the TLS handshake check?",
              choices: ["That the server's certificate proves it really is that host", "That the DNS answer for the host was correctly cached beforehand somewhere", "That TCP delivered every byte", "That the URL has no fragment"],
              answer: 0,
              why: [
                "TLS validates the server's certificate, so you know you're talking to the real host and not an impostor.",
                "Caching is a DNS/HTTP concern, not part of TLS.",
                "In-order delivery is TCP's guarantee, underneath TLS.",
                "The fragment never leaves the browser; TLS has nothing to do with it."
              ] } }
        ]
      },

      {
        id: "web-u3-4",
        title: "Reuse, and why 0-RTT is only for safe requests",
        kind: "concept", xp: 15, mins: 13,
        screens: [
          { read: "Four round trips sounds like a lot, but you rarely pay it twice. Connections are **kept alive**: once DNS, TCP and TLS are done, the browser holds the connection open and sends the *next* request straight down it. That next request costs just **one** round trip — no DNS, no TCP, no TLS.\n\nThis is why the second, third and fourth requests to a site are so much cheaper than the first.",
            ask: { type: "predict",
              q: "The browser already has an open, kept-alive connection to a server. How many round trips does the next request on it take? Type a number.",
              answer: "1",
              why: "The connection is already open and private, so only the request-and-response round trip remains: 1. DNS, TCP and TLS were paid once.",
              run: true,
              check: "console.log(1);" } },

          { read: "TLS 1.3 can go further. When you reconnect to a server you've talked to before, it can **resume** the old session and let the browser send request data in the very first packet, before the handshake finishes — **0-RTT** (zero round trips of setup).\n\nBut there's a catch that matters: 0-RTT data can be **replayed**. An attacker who captures that first packet can send it to the server again. So 0-RTT is only safe for requests that do no harm when repeated.",
            ask: { type: "pick",
              q: "Why can 0-RTT data be dangerous?",
              choices: ["It is sent completely unencrypted, in the clear where anyone in the middle can read it", "It can be captured and replayed, so a repeated request could take effect twice", "It skips DNS", "It uses TCP instead of TLS"],
              answer: 1,
              why: [
                "0-RTT data is still encrypted; the problem is replay, not eavesdropping.",
                "A captured 0-RTT packet can be re-sent, so any request that changes state could happen more than once.",
                "Skipping DNS is a benefit of connection reuse, not a danger.",
                "0-RTT is a TLS 1.3 feature; it doesn't swap the transport."
              ] } },

          { read: "The rule that follows: only send a request over 0-RTT if repeating it does no harm — reading a page is fine, but placing an order or transferring money is not. The next unit gives these \"harmless to repeat\" requests a precise name (**safe** and **idempotent** methods); for now, the idea is enough.",
            ask: { type: "pick", transfer: true,
              q: "Which request is safe to send over 0-RTT?",
              choices: ["Transferring $500 between accounts", "Fetching the homepage's HTML", "Placing an order", "Deleting an account"],
              answer: 1,
              why: [
                "A transfer must not happen twice; a replay could move the money again.",
                "Fetching a page just reads it — repeating the request does no harm, so 0-RTT is fine.",
                "An order replayed could be placed twice.",
                "A delete replayed is harmless only if already gone, but changing-state requests are kept off 0-RTT as a rule."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A fresh connection costs 4 round trips; a kept-alive one costs 1 per request. How many round trips do three requests take if the first opens the connection and the next two reuse it? Type a number.",
              answer: "6",
              why: "First request: 4 (DNS + TCP + TLS + request). Second and third: 1 each. 4 + 1 + 1 = 6, versus 12 if each opened its own connection.",
              run: true,
              check: "console.log(4 + 1 + 1);" } },

          { ask: { type: "explain",
              q: "Why does keeping a connection alive make the requests after the first so much cheaper?",
              model: "The first request pays four round trips to find the server, open the connection and make it private. Keeping that connection open means the next requests skip DNS, TCP and TLS entirely and cost just the one round trip for the request and response.",
              rubric: ["Says the first request pays for DNS, TCP and TLS setup", "Says a reused connection skips that setup", "Says later requests cost just the one request/response round trip"] } }
        ]
      },

      {
        id: "web-quiz-3",
        title: "Unit 3 quiz: Connecting",
        kind: "quiz", xp: 10,
        brief: "Round trips, the TCP and TLS handshakes, connection reuse and 0-RTT. 80% to pass.",
        questions: [
          { q: "What is one round trip?",
            choices: ["One message sent to the server and one sent back", "One single byte of data moving across the network", "One TCP packet", "One second of latency"],
            answer: 0, explain: "A round trip is a message out to the server and the reply back. Latency is roughly the number of round trips times how far away the server is." },
          { q: "How many round trips does a cold HTTPS request take, counting DNS, TCP, TLS 1.3 and the request?",
            choices: ["1", "2", "4", "8"],
            answer: 2, explain: "One each: DNS finds the IP, TCP opens the connection, TLS 1.3 secures it, and the HTTP request fetches the page — four round trips before the first byte." },
          { q: "What are the three messages of the TCP handshake, in order?",
            choices: ["ACK, SYN, SYN-ACK", "SYN, SYN-ACK, ACK", "GET, 200, OK", "SYN, ACK, FIN"],
            answer: 1, explain: "The client sends SYN, the server replies SYN-ACK, and the client sends ACK — completing in about one round trip before data flows." },
          { q: "What does the TLS handshake add on top of TCP?",
            choices: ["A domain-to-IP lookup", "Encryption keys and a check of the server's certificate, in one round trip for TLS 1.3", "Reliable, in-order delivery of every byte, re-sending anything that gets lost along the way somehow", "A cached copy of the page"],
            answer: 1, explain: "TLS agrees on encryption and validates the server's certificate. TLS 1.3 does it in one round trip; TLS 1.2 took two." },
          { q: "Why is the second request to a site usually much cheaper than the first?",
            choices: ["The server remembers you personally and decides to answer all your later requests much faster than before", "The connection is kept alive, so DNS, TCP and TLS are skipped and only one round trip remains", "The browser caches the whole site", "DNS gets faster"],
            answer: 1, explain: "Keeping the connection open lets later requests reuse it, skipping the DNS, TCP and TLS setup and paying just the one request/response round trip." },
          { q: "Why is 0-RTT resumption only used for safe requests?",
            choices: ["0-RTT data is sent completely unencrypted, so anyone in the middle could simply read all of it", "0-RTT data can be replayed, so a state-changing request could take effect more than once", "0-RTT skips the DNS lookup", "0-RTT only works over http"],
            answer: 1, explain: "A captured 0-RTT packet can be re-sent to the server, so it's restricted to requests that do no harm when repeated, like reads." }
        ]
      }
    ]
  });
})();
