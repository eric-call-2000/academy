window.ACADEMY.addUnit("sysdesign", {
  id: "unit-2",
  title: "The Network Layer",
  color: "#eab308",
  icon: "\u{1F310}",
  description: "How a request actually travels, and every box it passes through on the way.",
  lessons: [
    {
      id: "l9",
      title: "The lifecycle of a request, end to end",
      intro: "Trace one HTTP request from a name in the address bar to bytes rendered on screen.",
      questions: [
        {
          type: "order",
          q: "Put the stages of a first-time HTTPS request in the order they happen.",
          items: [
            "Resolve the hostname to an IP address",
            "Open a transport connection to that IP",
            "Complete the TLS handshake",
            "Send the HTTP request and read the response"
          ],
          explain: "You cannot connect without an address, cannot encrypt without a connection, and cannot send an HTTP request until the secure channel exists. Each stage costs at least one round trip."
        },
        {
          type: "mcq",
          q: "A user reports the site is slow. Server-side handler timing shows 4 ms. What does that measurement exclude?",
          choices: [
            "Only the time spent serializing the JSON response body",
            "Nothing important - handler time is the dominant cost",
            "DNS resolution, connection setup, TLS, queueing, and network transit in both directions",
            "Only the time the load balancer spends choosing a backend"
          ],
          answer: 2,
          explain: "Handler time measures a small slice in the middle. End-to-end latency is dominated by round trips and queueing, which server-side timers never see."
        },
        {
          type: "fill",
          q: "The time for a signal to travel to the server and back is called one round-trip ____.",
          answer: "time",
          accept: ["time", "Time", "latency", "delay"],
          explain: "Round-trip time (RTT) is the fundamental unit of network cost. Protocol design is largely about spending fewer RTTs before useful data flows."
        },
        {
          type: "truefalse",
          q: "The physical distance between client and server sets a hard floor on latency that no amount of server optimization can remove.",
          answer: true,
          explain: "Signals in fiber travel at roughly two thirds the speed of light, so a transcontinental round trip costs tens of milliseconds no matter how fast the code is. That floor is why edge placement matters."
        },
        {
          type: "mcq",
          q: "Which layer of the request path is most often responsible for a request that succeeds but takes 30 seconds?",
          choices: [
            "A queue somewhere - connection backlog, thread pool, or downstream dependency wait",
            "The DNS resolver, which normally caps lookups at 30 seconds",
            "TLS certificate parsing, which scales with certificate chain length",
            "HTTP header compression, which is quadratic in header count"
          ],
          answer: 0,
          explain: "Slow-but-successful requests are usually waiting in a queue rather than computing. Latency under load is a queueing problem before it is a CPU problem."
        },
        {
          type: "match",
          q: "Match each hop in the request path to what it primarily does.",
          pairs: [
            ["Recursive resolver", "Turns a hostname into an IP address"],
            ["Load balancer", "Picks which backend instance serves this connection"],
            ["Origin server", "Executes application logic and produces the response body"]
          ],
          explain: "Each box on the path has one job. Knowing which box owns which job is how you decide where to look when something breaks."
        },
        {
          type: "truefalse",
          q: "Every HTTP request from a browser requires a fresh DNS lookup and a fresh TCP connection.",
          answer: false,
          explain: "Browsers cache DNS results and reuse persistent connections for many requests. Only the first request to an origin pays the full setup cost."
        }
      ]
    },
    {
      id: "l10",
      title: "DNS: how a name becomes an address",
      intro: "The distributed, cached, hierarchical lookup that precedes almost every connection.",
      questions: [
        {
          type: "order",
          q: "Order the servers a recursive resolver queries for a cold lookup of api.example.com.",
          items: [
            "A root nameserver",
            "The .com TLD nameservers",
            "The authoritative nameservers for example.com"
          ],
          explain: "DNS is hierarchical and resolved from the right of the name leftward. The root does not know the answer, it only knows who to ask next."
        },
        {
          type: "mcq",
          q: "You lower a record TTL from 3600 to 60 seconds one hour before a planned IP change. Why?",
          choices: [
            "Lower TTLs make authoritative nameservers respond faster to each query",
            "TTL controls how long resolvers cache the old answer, so a low TTL shortens the window where clients keep using the stale IP",
            "TTL is a hop counter, and a lower value prevents the record from leaving your region",
            "A low TTL forces resolvers to validate the record signature before returning it"
          ],
          answer: 1,
          explain: "TTL is a caching directive measured in seconds. Pre-lowering it is standard practice because the old TTL governs how long stale answers linger."
        },
        {
          type: "fill",
          q: "A ____ record maps one hostname to another hostname rather than directly to an IP address.",
          answer: "CNAME",
          accept: ["CNAME", "cname", "canonical name"],
          explain: "CNAME creates an alias, which is why it is the usual way to point a subdomain at a CDN or managed service whose IPs change."
        },
        {
          type: "truefalse",
          q: "DNS is a load-balancing mechanism with instant failover, because you can change the record the moment a server dies.",
          answer: false,
          explain: "Caching by resolvers and by clients means changes propagate on TTL timescales, not instantly. DNS spreads traffic coarsely but is a poor fast-failover tool."
        },
        {
          type: "match",
          q: "Match each DNS record type to what it holds.",
          pairs: [
            ["A", "An IPv4 address for the name"],
            ["AAAA", "An IPv6 address for the name"],
            ["MX", "The mail servers that accept mail for the domain"]
          ],
          explain: "Record type determines what question you are asking about a name. The same name can carry several types at once."
        },
        {
          type: "mcq",
          q: "Which statement about DNS transport is correct?",
          choices: [
            "DNS runs exclusively over TCP so responses can never be truncated",
            "DNS runs only over UDP, and large responses are simply dropped",
            "DNS classically uses UDP for queries, falling back to TCP when a response is too large or when reliability is required",
            "DNS uses ICMP, which is why firewalls that block ping break name resolution"
          ],
          answer: 2,
          explain: "UDP keeps the common case to a single small exchange. Truncated responses set the TC bit and the client retries over TCP; zone transfers use TCP too."
        },
        {
          type: "truefalse",
          q: "Plain DNS queries are unencrypted by default, so a network observer can see which hostnames you look up.",
          answer: true,
          explain: "Classic DNS is cleartext, which is exactly the gap DNS over TLS and DNS over HTTPS were designed to close. Encrypting HTTP does not encrypt the lookup that preceded it."
        }
      ]
    },
    {
      id: "l11",
      title: "TCP vs UDP - and what QUIC/HTTP3 changed",
      intro: "Two transports, one handshake, and the head-of-line problem that pushed HTTP onto UDP.",
      questions: [
        {
          type: "order",
          q: "Put the segments of the TCP three-way handshake in order.",
          items: ["SYN from client", "SYN-ACK from server", "ACK from client"],
          explain: "The three-way handshake synchronizes sequence numbers in both directions and confirms both parties can send and receive before any data flows."
        },
        {
          type: "mcq",
          q: "What guarantee does TCP provide that UDP does not?",
          choices: [
            "Encryption of the payload against eavesdroppers",
            "Reliable, in-order delivery of a byte stream with retransmission of lost data",
            "Authentication of the remote endpoint's identity",
            "A guaranteed upper bound on delivery latency"
          ],
          answer: 1,
          explain: "TCP adds reliability, ordering, and flow and congestion control on top of IP. It says nothing about secrecy, identity, or worst-case timing."
        },
        {
          type: "fill",
          q: "When one lost TCP segment stalls delivery of every later segment that already arrived, it is called head-of-____ blocking.",
          answer: "line",
          accept: ["line", "Line", "line blocking"],
          explain: "TCP must hand bytes to the application in order, so a single gap holds back everything queued behind it, even data that is already in the receive buffer."
        },
        {
          type: "truefalse",
          q: "HTTP/2 eliminated head-of-line blocking entirely by multiplexing many streams over one connection.",
          answer: false,
          explain: "HTTP/2 removed head-of-line blocking at the HTTP layer, but all its streams still ride one TCP connection, so a single lost packet stalls every stream underneath. That residual problem is what QUIC targets."
        },
        {
          type: "mcq",
          q: "Why does QUIC, the transport under HTTP/3, run on top of UDP?",
          choices: [
            "UDP packets are given higher priority by internet routers",
            "UDP has no maximum packet size, letting QUIC send whole responses at once",
            "QUIC needs its own per-stream loss recovery and connection setup, and UDP gives it a minimal datagram substrate that already traverses existing networks and NATs",
            "UDP is encrypted by default, so QUIC inherits confidentiality for free"
          ],
          answer: 2,
          explain: "Reimplementing TCP itself would require changes in kernels and middleboxes everywhere. Building on UDP let QUIC ship per-stream loss recovery in user space while still passing through deployed networks."
        },
        {
          type: "match",
          q: "Match each protocol to the workload it fits best.",
          pairs: [
            ["TCP", "Bulk transfer over a single ordered byte stream, with no encryption of its own"],
            ["UDP", "Real-time audio where a late packet is worthless anyway"],
            ["QUIC", "Multiplexed web traffic that wants independent streams plus built-in encryption"]
          ],
          explain: "Choosing a transport is choosing which failure you prefer: waiting for retransmission, or losing data and moving on."
        },
        {
          type: "truefalse",
          q: "QUIC integrates its cryptographic handshake with connection setup, so a new QUIC connection can start sending application data in fewer round trips than TCP plus a separate TLS handshake.",
          answer: true,
          explain: "Folding the TLS 1.3 handshake into the transport handshake removes a full round trip of setup, and resumption can cut it further."
        }
      ]
    },
    {
      id: "l12",
      title: "HTTP semantics: methods, status codes, safe vs idempotent",
      intro: "What the method and status code actually promise, and why retries depend on it.",
      questions: [
        {
          type: "mcq",
          q: "Which set of methods is idempotent, meaning N identical requests leave the same server state as one?",
          choices: [
            "POST, PUT, and PATCH",
            "GET, POST, and DELETE",
            "POST and DELETE only",
            "GET, PUT, and DELETE"
          ],
          answer: 3,
          explain: "GET, PUT, and DELETE are defined as idempotent; POST is not, which is why a duplicated POST can create two orders. PATCH is not idempotent in general."
        },
        {
          type: "truefalse",
          q: "Safe and idempotent mean the same thing.",
          answer: false,
          explain: "Safe methods such as GET and HEAD are not supposed to change state at all. Idempotent methods may change state, but repeating them changes nothing further - DELETE is idempotent yet clearly not safe."
        },
        {
          type: "fill",
          q: "GET is safe, and so is the method that returns exactly the headers a GET would return but no response body: ____.",
          answer: "HEAD",
          accept: ["HEAD", "head"],
          explain: "HEAD is body-less, which makes it useful for checking existence, size, or freshness cheaply. GET and HEAD are the two safe methods you meet constantly; OPTIONS and TRACE are also defined as safe but are rarely used."
        },
        {
          type: "match",
          q: "Match each status code to the situation it describes.",
          pairs: [
            ["401", "The request lacks valid authentication credentials"],
            ["403", "The caller is authenticated but not permitted to do this"],
            ["404", "No resource exists at this URL"]
          ],
          explain: "401 is about who you are, 403 is about what you are allowed to do, 404 is about whether the thing exists. APIs that blur them leak information or confuse clients."
        },
        {
          type: "mcq",
          q: "A payments client times out with no response and considers retrying. What makes the retry safe?",
          choices: [
            "Switching the retry to a GET so it becomes safe",
            "Sending an idempotency key the server records, so a repeat of the same key returns the original result instead of charging again",
            "Retrying only after the original request's TCP connection closes",
            "Adding a 5xx-only retry policy, since 5xx responses mean nothing was executed"
          ],
          answer: 1,
          explain: "POST is not idempotent, so the application must supply the guarantee. A server-recorded idempotency key turns an unsafe retry into a lookup. A timeout also tells you nothing about whether the server committed the work."
        },
        {
          type: "truefalse",
          q: "A 500 response proves the server made no state change.",
          answer: false,
          explain: "5xx means the server failed to produce a valid response, not that it did nothing. A request can commit a write and then fail while serializing the reply, which is why retry logic needs idempotency rather than optimism."
        },
        {
          type: "mcq",
          q: "What distinguishes a 301 from a 302 response?",
          choices: [
            "301 is permanent and may be cached and remembered by clients; 302 is a temporary redirect that should not replace the original URL",
            "301 preserves the request method while 302 always rewrites it to GET",
            "301 redirects within the same origin; 302 is required for cross-origin redirects",
            "301 is issued by proxies; 302 is issued only by origin servers"
          ],
          answer: 0,
          explain: "Permanence is the difference, and it has real consequences: browsers and search engines can cache a 301 aggressively, so a mistaken permanent redirect is painful to undo."
        }
      ]
    },
    {
      id: "l13",
      title: "TLS and what HTTPS actually guarantees",
      intro: "Three concrete properties, plus the ones people wrongly assume they get.",
      questions: [
        {
          type: "mcq",
          q: "Which three properties does TLS provide for an HTTPS connection?",
          choices: [
            "Anonymity, availability, and non-repudiation",
            "Confidentiality, integrity, and server authentication",
            "Confidentiality, compression, and client authentication",
            "Integrity, anonymity, and denial-of-service resistance"
          ],
          answer: 1,
          explain: "TLS encrypts the payload, detects tampering, and proves the server holds a certificate for the name you asked for. Everything else is a separate concern."
        },
        {
          type: "truefalse",
          q: "HTTPS hides which site you are visiting from anyone observing your network.",
          answer: false,
          explain: "TLS is not anonymity. The destination IP is visible, DNS lookups are typically cleartext, and the requested hostname appears in the SNI field of the handshake unless encrypted client hello is in use."
        },
        {
          type: "fill",
          q: "The TLS extension that lets a client tell the server which hostname it wants, so one IP can host many certificates, is called ____.",
          answer: "SNI",
          accept: ["SNI", "sni", "Server Name Indication", "server name indication"],
          explain: "Server Name Indication is sent early in the handshake, before encryption is established in the classic case, which is why it has historically been a privacy leak."
        },
        {
          type: "mcq",
          q: "What does a valid certificate from a public CA actually attest?",
          choices: [
            "That the operator of this name is a legitimate, non-malicious business",
            "That the site's application code has been audited for vulnerabilities",
            "That the CA verified control over the name, and the party you are talking to holds the matching private key",
            "That traffic to this site is encrypted end to end, including inside the provider's network"
          ],
          answer: 2,
          explain: "A certificate binds a name to a public key after a control check. It says nothing about the honesty of the operator or the quality of the code behind it - which is why a phishing site can hold a perfectly valid certificate."
        },
        {
          type: "truefalse",
          q: "TLS termination at a load balancer means traffic from the load balancer to backend servers is not encrypted unless you explicitly re-encrypt it.",
          answer: true,
          explain: "Terminating TLS decrypts the connection at that hop. Whether the internal leg is protected is a separate design decision, and assuming it is encrypted is a common and costly mistake."
        },
        {
          type: "match",
          q: "Match each TLS concept to what it does.",
          pairs: [
            ["Certificate chain", "Links the server certificate up to a trusted root"],
            ["Session resumption", "Skips a full handshake on a reconnect to save round trips"],
            ["Mutual TLS", "Makes the client prove its identity with a certificate too"]
          ],
          explain: "Chains establish trust, resumption saves latency, and mutual TLS extends authentication to the client - a common pattern for service-to-service traffic."
        },
        {
          type: "order",
          q: "Order these steps of establishing an HTTPS session over TCP.",
          items: [
            "TCP connection is established",
            "Client and server negotiate parameters and the server presents its certificate",
            "Client validates the certificate chain against its trust store",
            "Encrypted application data flows"
          ],
          explain: "Validation happens before any application bytes are exchanged. If the chain fails to validate, the client aborts and the request is never sent."
        }
      ]
    },
    {
      id: "l14",
      title: "Load balancing: layer 4 vs layer 7",
      intro: "Where the balancer looks in the packet decides what it can do and what it costs.",
      questions: [
        {
          type: "mcq",
          q: "What does a layer 4 load balancer make its decision on?",
          choices: [
            "Request path and HTTP headers",
            "The TLS certificate presented by the backend",
            "IP addresses and TCP or UDP port numbers",
            "The JSON body of the request"
          ],
          answer: 2,
          explain: "L4 operates on the transport tuple - source and destination IP and port. It forwards a connection without parsing what flows inside it."
        },
        {
          type: "truefalse",
          q: "A layer 7 load balancer can route /api to one backend pool and /images to another.",
          answer: true,
          explain: "L7 parses HTTP, so paths, headers, cookies, and methods are all available as routing inputs. That is the entire reason to pay the parsing cost."
        },
        {
          type: "fill",
          q: "Pinning a user's requests to one specific backend using a cookie or source IP is called a ____ session.",
          answer: "sticky",
          accept: ["sticky", "Sticky", "sticky session", "session affinity"],
          explain: "Sticky sessions work by breaking the even spread of load. They are a scaling smell: they signal that server-local state should have been moved to a shared store."
        },
        {
          type: "mcq",
          q: "Why are sticky sessions considered a scaling smell?",
          choices: [
            "They require a layer 4 balancer, which cannot terminate TLS",
            "They tie state to a specific instance, so load skews, autoscaling cannot rebalance, and losing one instance loses those users' sessions",
            "They add a full round trip to every request for affinity lookup",
            "They prevent the use of health checks, since traffic must go to the pinned host regardless"
          ],
          answer: 1,
          explain: "The problem is state locality, not the routing mechanism. Externalizing session state to a shared cache or database makes every instance interchangeable, which is what lets you scale and lose nodes freely."
        },
        {
          type: "match",
          q: "Match each balancing algorithm to how it chooses a backend.",
          pairs: [
            ["Round robin", "Cycles through backends in fixed sequence"],
            ["Least connections", "Sends to whichever backend currently has the fewest open connections"],
            ["Consistent hashing", "Maps a key to a backend so adding or removing nodes remaps few keys"]
          ],
          explain: "Round robin ignores load, least connections adapts to it, and consistent hashing trades adaptivity for stable key placement - which is what caches want."
        },
        {
          type: "truefalse",
          q: "A load balancer with no health checking delivers the full benefit of redundancy, because traffic is spread across many machines.",
          answer: false,
          explain: "Without health checks it keeps sending a proportional share of traffic into a dead backend, so one failed instance out of N produces a steady 1/N error rate that never self-heals. Spreading load helps, but health checking is what turns redundancy into actual availability."
        },
        {
          type: "mcq",
          q: "Which is a genuine advantage of layer 4 balancing over layer 7?",
          choices: [
            "It can retry a failed request on another backend transparently",
            "It can enforce per-endpoint rate limits",
            "It can compress and cache responses",
            "It does less per-packet work and does not need to terminate TLS, so it adds less latency and handles non-HTTP protocols"
          ],
          answer: 3,
          explain: "L4 is cheaper and protocol-agnostic. The features in the other options all require understanding HTTP, which only L7 does."
        }
      ]
    },
    {
      id: "l15",
      title: "Reverse proxies and API gateways",
      intro: "The box in front of your services, and what belongs in it versus in the service.",
      questions: [
        {
          type: "mcq",
          q: "What distinguishes a reverse proxy from a forward proxy?",
          choices: [
            "A reverse proxy sits in front of servers and accepts traffic on their behalf; a forward proxy sits in front of clients and makes requests on their behalf",
            "A reverse proxy only handles responses, while a forward proxy only handles requests",
            "A reverse proxy works at layer 4 and a forward proxy works at layer 7",
            "A reverse proxy caches while a forward proxy never does"
          ],
          answer: 0,
          explain: "The direction names whose side the proxy represents. A reverse proxy is part of your infrastructure; a forward proxy is part of the client's."
        },
        {
          type: "truefalse",
          q: "A reverse proxy is a natural place to terminate TLS, since it centralizes certificate management instead of putting certificates on every service.",
          answer: true,
          explain: "Centralizing TLS at the edge is the standard pattern, and it also lets you enforce protocol versions and ciphers in one place rather than per service."
        },
        {
          type: "fill",
          q: "Besides authentication and rate limiting, a gateway handles request ____: deciding which upstream service each incoming path or host belongs to.",
          answer: "routing",
          accept: ["routing", "Routing", "route", "routing/aggregation"],
          explain: "Gateways exist to hold concerns that every service would otherwise duplicate. The tradeoff is that the gateway becomes shared infrastructure that everyone depends on."
        },
        {
          type: "match",
          q: "Match each gateway responsibility to what it accomplishes.",
          pairs: [
            ["Rate limiting", "Caps how many requests a caller may make in a window"],
            ["Request routing", "Maps an incoming path or host to the right upstream service"],
            ["Response aggregation", "Combines several upstream calls into one client-facing payload"]
          ],
          explain: "These are the classic gateway jobs. Anything requiring deep domain knowledge of a single service belongs in that service instead."
        },
        {
          type: "mcq",
          q: "What is the main risk of moving business logic into the API gateway?",
          choices: [
            "Gateways cannot execute code, so the logic will silently be skipped",
            "Gateway configuration cannot be version controlled or tested",
            "It becomes a shared chokepoint that every team must coordinate changes through, and a single-point failure domain",
            "It forces every downstream service to switch from HTTP to gRPC"
          ],
          answer: 2,
          explain: "This is the smart-pipes problem: logic in shared infrastructure couples teams and turns one component into both a deployment bottleneck and a blast radius."
        },
        {
          type: "truefalse",
          q: "Because a reverse proxy sits in front of everything, the origin server can always trust the client IP in the connection it receives.",
          answer: false,
          explain: "The origin sees the proxy's IP, not the client's. The real client address arrives only in a header such as X-Forwarded-For or Forwarded, and that header must be validated as trusted or it can be spoofed."
        },
        {
          type: "mcq",
          q: "Which behavior is a reverse proxy well positioned to provide that individual services usually should not?",
          choices: [
            "Deciding which rows a given user is allowed to read from the database",
            "Buffering slow client connections so a slow reader does not tie up an application worker",
            "Computing domain-specific pricing rules for a checkout",
            "Managing schema migrations for downstream data stores"
          ],
          answer: 1,
          explain: "Absorbing slow clients is a connection-handling concern, exactly what a proxy is built for. Domain decisions require knowledge the proxy should not have."
        }
      ]
    },
    {
      id: "l16",
      title: "CDNs and pushing work to the edge",
      intro: "Moving bytes and sometimes computation closer to the user, and what that costs.",
      questions: [
        {
          type: "mcq",
          q: "What is the primary reason a CDN makes a site faster?",
          choices: [
            "It compresses responses more aggressively than an origin server can",
            "It rewrites HTML to load fewer resources per page",
            "It upgrades all connections to HTTP/3 regardless of client support",
            "It serves content from a point of presence physically near the user, cutting round-trip time"
          ],
          answer: 3,
          explain: "Distance is the latency floor, so shortening it is the biggest lever. Reduced origin load and connection reuse at the edge are real but secondary benefits."
        },
        {
          type: "fill",
          q: "A request that the edge cannot serve from its cache and must forward to the origin is called a cache ____.",
          answer: "miss",
          accept: ["miss", "Miss"],
          explain: "Hit ratio is the headline CDN metric because every miss pays the full origin round trip plus the edge hop on top."
        },
        {
          type: "truefalse",
          q: "Adding a user ID to the cache key for a page is a good way to personalize CDN-cached content.",
          answer: false,
          explain: "Keying on a per-user value gives every user a separate cache entry, so the hit ratio collapses toward zero. Personalization is normally handled by caching a shared shell and fetching user-specific parts separately."
        },
        {
          type: "match",
          q: "Match each cache-control behavior to its effect.",
          pairs: [
            ["max-age", "How long a response may be reused before it is stale"],
            ["stale-while-revalidate", "Serve the stale copy immediately while refreshing in the background"],
            ["no-store", "Do not write this response to any cache at all"]
          ],
          explain: "These directives trade freshness against latency and origin load. Choosing them deliberately is most of what CDN tuning is."
        },
        {
          type: "mcq",
          q: "Why are content-hashed filenames plus a long max-age preferred over short TTLs for static assets?",
          choices: [
            "Because a changed file gets a new URL, the old URL can be cached effectively forever and deploys never serve stale assets",
            "Because hashed names compress better in transit than readable names",
            "Because CDNs refuse to cache URLs containing query strings",
            "Because hashing lets the browser verify the file has not been tampered with"
          ],
          answer: 0,
          explain: "Immutable URLs turn invalidation into a naming problem rather than a purge problem. Integrity verification is a different mechanism entirely - subresource integrity."
        },
        {
          type: "truefalse",
          q: "Edge compute lets you run request-handling logic at points of presence, but it typically has no low-latency access to your primary database.",
          answer: true,
          explain: "The code moves to the edge; your data usually does not. Any edge function that must read a central database gives back the latency it saved, which is why edge logic favors routing, auth checks, and personalization from local or replicated state."
        },
        {
          type: "mcq",
          q: "A team purges a CDN cache key and users still see old content minutes later. What is the most likely cause?",
          choices: [
            "Purges only apply to the point of presence that received the purge request",
            "Purges take effect only when the origin also restarts",
            "Intermediate caches - browser caches and any proxies - still hold copies whose max-age has not expired",
            "The CDN ignores purges for responses larger than a few kilobytes"
          ],
          answer: 2,
          explain: "You control the CDN's copy, not the copies already handed to clients and intermediaries. This is precisely why long-lived assets should get immutable URLs instead of relying on purges."
        }
      ]
    }
  ]
});
