window.ACADEMY.addUnit("sysdesign", {
  id: "unit-15",
  title: "Case Studies I: The Classics",
  color: "#eab308",
  icon: "\u{1F3D7}\u{FE0F}",
  description: "The canonical system design problems, and a repeatable framework for attacking any of them.",
  lessons: [
    {
      id: "l113",
      title: "A repeatable framework: requirements, estimate, API, data, scale",
      intro: "A five-step structure that turns an open-ended design prompt into a bounded engineering problem.",
      questions: [
        {
          type: "order",
          q: "Put these framework steps in the order that keeps later decisions grounded in earlier ones.",
          items: [
            "Clarify functional and non-functional requirements",
            "Back-of-envelope estimates for traffic, storage, and bandwidth",
            "Define the API surface and the data model it implies",
            "Scale out: partitioning, replication, caching, bottleneck review"
          ],
          explain: "Estimates are meaningless without requirements, and you cannot pick a storage engine before you know the access patterns your API implies. Scaling is last because you can only remove bottlenecks you can name."
        },
        {
          type: "mcq",
          q: "Which of these is a non-functional requirement rather than a functional one?",
          choices: [
            "Users can create a short link with an optional custom alias",
            "Expired links return HTTP 410 instead of redirecting",
            "Redirect latency stays under 100 ms at the 99th percentile",
            "An admin can delete any link owned by a suspended account"
          ],
          answer: 2,
          explain: "Functional requirements say what the system does; non-functional ones constrain how well it must do it, such as latency, availability, durability, and consistency targets."
        },
        {
          type: "fill",
          q: "Estimating peak load by multiplying average QPS by a factor of two to ten is called applying a ____ factor, and it should always be stated as an assumption rather than a measurement.",
          answer: "peak",
          accept: ["peak", "peak-to-average", "peak to average", "burst"],
          explain: "Real traffic is not uniform across the day. A stated peak multiplier is a rule of thumb, not a measured value, so name it out loud so a reviewer can challenge it."
        },
        {
          type: "truefalse",
          q: "Back-of-envelope estimates are worth doing even when the numbers turn out to be off by a factor of two or three.",
          answer: true,
          explain: "The purpose is to find the order of magnitude, which decides whether data fits on one machine, in RAM, or needs sharding. A 2x error rarely changes that verdict; a 1000x error would."
        },
        {
          type: "match",
          q: "Match each framework artifact to what it actually pins down.",
          pairs: [
            ["Non-functional requirements", "The latency, availability, and consistency budgets the design must meet"],
            ["Back-of-envelope estimate", "Whether the working set fits in memory, on one disk, or needs many machines"],
            ["API surface", "The exact operations clients can invoke and the read/write mix they generate"]
          ],
          explain: "Each artifact answers a different question. Conflating them is how designs end up with a storage choice nobody can justify."
        },
        {
          type: "mcq",
          q: "You are told the system needs 99.99 percent availability. What is the most useful immediate follow-up in the requirements step?",
          choices: [
            "Ask which database vendor the company already licenses",
            "Ask what a minute of downtime costs and which operations must stay up",
            "Ask how many engineers will be on the on-call rotation",
            "Ask whether the service will be deployed on virtual machines or containers"
          ],
          answer: 1,
          explain: "Availability targets are only meaningful when scoped to specific operations and justified by cost. Often reads must stay up while writes may degrade, which changes the architecture substantially."
        },
        {
          type: "truefalse",
          q: "In the framework, the read-to-write ratio belongs to the scaling step and cannot be known earlier.",
          answer: false,
          explain: "The read/write ratio falls out of the requirements and API steps, and it drives nearly every later choice: caching, replication topology, and whether denormalizing on write is worth it."
        }
      ]
    },
    {
      id: "l114",
      title: "Design a URL shortener",
      intro: "Short code generation, the read-heavy access pattern, and the redirect path.",
      questions: [
        {
          type: "mcq",
          q: "Base62 encoding a monotonically increasing counter, versus hashing the long URL and truncating, differ mainly in that:",
          choices: [
            "Base62 of a counter produces shorter codes for the same key space size",
            "Hashing is the only approach that supports custom aliases",
            "Counter encoding needs no collision check, while truncated hashes require one",
            "Hashing guarantees the same long URL always maps to exactly one short code forever"
          ],
          answer: 2,
          explain: "A unique counter is unique by construction, so encoding it cannot collide. Truncating a hash can collide, so you must check for an existing row and retry with a salt or longer prefix."
        },
        {
          type: "fill",
          q: "Encoding an integer ID in ____ uses the 62 URL-safe characters 0-9, a-z, and A-Z to keep short codes compact.",
          answer: "base62",
          accept: ["base62", "base-62", "base 62"],
          explain: "Base62 avoids characters that need percent-encoding in a URL path, unlike standard base64 which includes plus and slash."
        },
        {
          type: "truefalse",
          q: "A URL shortener is write-heavy, so the design should optimize the create path before the redirect path.",
          answer: false,
          explain: "It is strongly read-skewed: each short link is created once and then resolved many times. The redirect path dominates traffic, so caching hot codes is the single highest-leverage optimization."
        },
        {
          type: "mcq",
          q: "Why is a single global auto-increment counter a risky basis for short codes at scale?",
          choices: [
            "Base62 cannot represent integers above roughly one billion",
            "Sequential codes cannot be stored in a key-value store",
            "It makes the redirect lookup require a full table scan",
            "It becomes a coordination point and a single point of failure for every write"
          ],
          answer: 3,
          explain: "Every write must consult the counter, which serializes writes and creates a failure domain. Common fixes are handing out ranges of IDs to each server, or using a coordination-free scheme like Snowflake."
        },
        {
          type: "mcq",
          q: "For the redirect itself, what is the practical tradeoff between HTTP 301 and 302?",
          choices: [
            "301 is cacheable by clients so it cuts server load but hides analytics; 302 keeps every hit visible",
            "302 is cacheable by clients while 301 forces revalidation on every request",
            "Only 301 preserves the query string when redirecting",
            "302 is required whenever the target URL uses HTTPS"
          ],
          answer: 0,
          explain: "301 permanent redirects get cached by browsers, so subsequent clicks may never reach your servers. That saves capacity but destroys per-click analytics, which is usually a product requirement."
        },
        {
          type: "match",
          q: "Match each component of the shortener to its primary job.",
          pairs: [
            ["Cache in front of the store", "Serve resolutions for hot short codes without touching the database"],
            ["Key generation service", "Hand out unique IDs so encoded codes never collide"],
            ["TTL and expiry field", "Let links stop resolving and allow reclaiming storage"]
          ],
          explain: "Separating code generation from storage lets you scale and reason about each independently, and it is what makes the collision question go away entirely."
        },
        {
          type: "truefalse",
          q: "Because short codes are effectively random-looking, an attacker enumerating codes is a real concern for links that contain private content.",
          answer: true,
          explain: "Short codes are short by design, so the key space is walkable. Shortened links are not an access control mechanism; sensitive targets need real authorization behind the redirect."
        }
      ]
    },
    {
      id: "l115",
      title: "Design a rate limiter",
      intro: "The four classic algorithms, what each one actually guarantees, and where the limiter lives.",
      questions: [
        {
          type: "match",
          q: "Match each rate limiting algorithm to its defining behavior.",
          pairs: [
            ["Token bucket", "Permits bursts up to the bucket capacity, then throttles to the refill rate"],
            ["Leaky bucket", "Releases requests at a strictly constant rate, smoothing any burst"],
            ["Fixed window counter", "Resets the count at wall-clock boundaries, allowing a spike across the seam"]
          ],
          explain: "Token bucket and leaky bucket are often confused. Token bucket tolerates bursts by accumulating tokens while idle; leaky bucket deliberately refuses to."
        },
        {
          type: "mcq",
          q: "A fixed window limiter allows 100 requests per minute. What is the boundary spike problem?",
          choices: [
            "The counter can drift because different servers see slightly different clocks",
            "A client can send 100 requests just before the boundary and 100 just after, delivering 200 in a two-second span",
            "The window resets before slow requests finish, so long requests are counted twice",
            "Requests arriving exactly at the boundary are silently dropped rather than counted"
          ],
          answer: 1,
          explain: "The limit is enforced per window, not per rolling interval, so twice the limit can land in a very short interval straddling the reset. Sliding window approaches exist specifically to fix this."
        },
        {
          type: "fill",
          q: "The sliding window ____ algorithm stores a timestamp per request and discards entries older than the window, giving exact enforcement at the cost of memory proportional to the request rate.",
          answer: "log",
          accept: ["log", "logs", "sliding window log"],
          explain: "It is exact because it can answer how many requests occurred in the last N seconds precisely, but storing one entry per request is expensive for high-volume clients."
        },
        {
          type: "mcq",
          q: "The sliding window counter algorithm is popular because it:",
          choices: [
            "Approximates a rolling window using two fixed-window counts and a weighted blend, with tiny memory use",
            "Guarantees exactly the same decisions as a sliding window log while using one integer",
            "Removes the need for any shared state between rate limiter nodes",
            "Permits larger bursts than token bucket while using less memory"
          ],
          answer: 0,
          explain: "It weights the previous window count by the fraction of it still inside the rolling window and adds the current count. It is an approximation, not an exact match for the log, but the error is small and bounded."
        },
        {
          type: "truefalse",
          q: "Returning HTTP 429 with a Retry-After header is preferable to silently dropping requests, because it lets well-behaved clients back off correctly.",
          answer: true,
          explain: "Explicit rejection with retry guidance turns an opaque failure into a cooperative one and reduces retry storms that would otherwise amplify the overload."
        },
        {
          type: "mcq",
          q: "In a fleet of rate limiter nodes sharing a Redis counter, why is a naive read-then-write increment unsafe?",
          choices: [
            "Redis cannot store integer counters with expiry",
            "Two nodes can read the same value and both write back a count that undercounts the requests",
            "Redis replication is synchronous, so writes block until all replicas ack",
            "The counter key would need to be sharded before it can be incremented"
          ],
          answer: 1,
          explain: "Read-modify-write races lose updates and let clients exceed the limit. Use an atomic INCR, or a Lua script when the check and increment must happen together."
        },
        {
          type: "truefalse",
          q: "A token bucket with capacity equal to its per-second refill rate can never admit more than the refill rate in any one second.",
          answer: false,
          explain: "The bucket starts full, so a client can spend the whole capacity at the start of the second and then spend every token the refill adds during it. Over any one-second window the ceiling is capacity plus one second of refill, which here is twice the rate."
        }
      ]
    },
    {
      id: "l116",
      title: "Design unique ID generation at scale",
      intro: "Snowflake, UUIDs, and why the shape of an ID determines database behavior.",
      questions: [
        {
          type: "mcq",
          q: "Twitter Snowflake packs an ID into 64 bits. What are the components?",
          choices: [
            "A random nonce, a shard hint, and a checksum",
            "A hash of the payload, a machine id, and a version tag",
            "A timestamp, a machine id, and a per-millisecond sequence number",
            "A datacenter id, a user id, and a monotonic global counter"
          ],
          answer: 2,
          explain: "Snowflake uses a sign bit, a millisecond timestamp, machine or datacenter and worker bits, and a sequence counter that disambiguates IDs minted in the same millisecond on the same machine."
        },
        {
          type: "truefalse",
          q: "Snowflake IDs require the generating machines to coordinate with each other on every ID they mint.",
          answer: false,
          explain: "Coordination happens once, at machine-id assignment. After that each node mints IDs locally from its clock and its own sequence counter, which is exactly what makes it fast and highly available."
        },
        {
          type: "fill",
          q: "Because its high-order bits are a timestamp, a Snowflake ID is roughly time-____ , so ordering by ID approximates ordering by creation time.",
          answer: "sortable",
          accept: ["sortable", "ordered", "sorted"],
          explain: "Time-ordered IDs let you paginate by ID and get chronological results without a separate created_at index, though clock skew between machines means the ordering is approximate across nodes."
        },
        {
          type: "mcq",
          q: "Why does using UUIDv4 as a clustered primary key tend to hurt write performance in a B-tree index?",
          choices: [
            "UUIDv4 values are random, so inserts scatter across the whole index and cause page splits and poor cache locality",
            "UUIDv4 values are too long to be indexed by most databases",
            "UUIDv4 requires a network round trip to a coordination service on every insert",
            "UUIDv4 values cannot be compared for equality efficiently"
          ],
          answer: 0,
          explain: "Random keys defeat the append-at-the-right-edge pattern that sequential keys enjoy. Every insert can dirty a different page, inflating write amplification and shrinking the effective buffer pool hit rate."
        },
        {
          type: "match",
          q: "Match each ID scheme to its most significant property.",
          pairs: [
            ["UUIDv4", "Generated with no coordination at all, but random and therefore index-unfriendly"],
            ["Snowflake", "64 bits, time-sortable, needs a unique machine id per generator"],
            ["Database auto-increment", "Perfectly dense and ordered, but the sequence is a shared write bottleneck"]
          ],
          explain: "There is no free lunch: you trade coordination cost, ID size, index locality, and the amount of information the ID leaks."
        },
        {
          type: "truefalse",
          q: "Backward clock movement on a Snowflake node is a genuine correctness hazard that the implementation must handle explicitly.",
          answer: true,
          explain: "If the clock jumps back, the node could mint IDs it already issued. Typical handling is to refuse to generate and wait until the clock catches up, or to advance a logical clock rather than trusting wall time."
        },
        {
          type: "mcq",
          q: "A team wants unique IDs that do not reveal how many records were created. Which is the weakest choice?",
          choices: [
            "Random 128-bit identifiers stored as opaque strings",
            "Hash-based identifiers derived from a secret and the record key",
            "A single database auto-increment sequence exposed in public URLs",
            "Snowflake IDs with the low bits used for the sequence counter"
          ],
          answer: 2,
          explain: "Dense sequential IDs let anyone estimate volume and growth by sampling two IDs over time, and they make record enumeration trivial. This is the classic German tank problem applied to your API."
        }
      ]
    },
    {
      id: "l117",
      title: "Design a notification/fan-out service",
      intro: "Fan-out on write versus read, queueing, deduplication, and delivery guarantees.",
      questions: [
        {
          type: "mcq",
          q: "Fan-out on write means:",
          choices: [
            "Computing each recipient feed lazily when that recipient opens the app",
            "Pushing a copy of the new item into every recipient's inbox at publish time",
            "Writing the item once and letting recipients poll the author's timeline",
            "Batching writes so the database sees one insert per publisher per minute"
          ],
          answer: 1,
          explain: "Fan-out on write pays cost at publish time so reads are a cheap single-key lookup. It is the right trade when reads massively outnumber writes and fan-out sizes are modest."
        },
        {
          type: "truefalse",
          q: "For an account with tens of millions of followers, pure fan-out on write is often replaced by a hybrid that fetches that account's posts at read time.",
          answer: true,
          explain: "A single post from a very large account would cause tens of millions of inbox writes. Hybrid designs fan out for ordinary accounts and merge celebrity posts in at read time."
        },
        {
          type: "fill",
          q: "Because most queues deliver at-least-once, a notification consumer must be ____ so that a redelivered message does not send the same push twice.",
          answer: "idempotent",
          accept: ["idempotent", "idempotency"],
          explain: "At-least-once plus an idempotent consumer gives effectively-once behavior. Usually this means a dedup key derived from the event id, checked and recorded atomically before sending."
        },
        {
          type: "order",
          q: "Order the stages a notification passes through in a typical fan-out service.",
          items: [
            "Event ingested and validated at the API",
            "Recipient list resolved and per-user preferences and mutes applied",
            "Per-channel messages enqueued for workers",
            "Worker calls the provider (APNs, FCM, email) and records the delivery result"
          ],
          explain: "Preference and mute filtering belongs before enqueue so you never spend queue capacity or provider quota on messages that should not be sent."
        },
        {
          type: "mcq",
          q: "A third-party push provider starts returning errors for 10 percent of calls. What is the most appropriate queue-side response?",
          choices: [
            "Retry immediately in a tight loop until the provider recovers",
            "Drop the failed messages so the queue does not build up backlog",
            "Retry with exponential backoff and jitter, and route repeatedly failing messages to a dead letter queue",
            "Fail the whole batch and require the publisher to resubmit the original event"
          ],
          answer: 2,
          explain: "Backoff prevents you from amplifying the provider's overload, jitter prevents synchronized retry waves, and a dead letter queue keeps poison messages from blocking the healthy stream."
        },
        {
          type: "match",
          q: "Match each notification design concern to the mechanism that addresses it.",
          pairs: [
            ["Duplicate pushes from redelivery", "A dedup key recorded before the provider call"],
            ["A burst of events overwhelming providers", "A queue that decouples ingest rate from delivery rate"],
            ["Users receiving too many alerts", "Coalescing and per-user rate limits applied before enqueue"]
          ],
          explain: "Each is a distinct failure mode. Buffering does not stop duplicates, and dedup does nothing about notification fatigue."
        },
        {
          type: "truefalse",
          q: "Storing the full rendered notification body in the queue message is always preferable to storing just an event reference.",
          answer: false,
          explain: "It is a real tradeoff. Embedding the body avoids a lookup at delivery time but freezes content that may have been edited or deleted, and it inflates message size."
        }
      ]
    },
    {
      id: "l118",
      title: "Design a distributed key-value store",
      intro: "Partitioning, replication, quorums, and the consistency knobs behind Dynamo-style stores.",
      questions: [
        {
          type: "mcq",
          q: "Why is consistent hashing preferred over hashing a key modulo the number of nodes?",
          choices: [
            "It distributes keys more evenly than modulo hashing on any cluster size",
            "It lets a node lookup be done without knowing the cluster membership",
            "It avoids remapping nearly every key when a node is added or removed",
            "It removes the need for replication because each key lands on multiple rings"
          ],
          answer: 2,
          explain: "With modulo hashing, changing N changes the destination of almost every key. Consistent hashing moves only the keys in the affected ring segments, which is roughly 1/N of the data."
        },
        {
          type: "fill",
          q: "Assigning each physical node many ____ nodes on the hash ring smooths out the uneven key distribution you get from placing each node at a single point.",
          answer: "virtual",
          accept: ["virtual", "vnodes", "virtual nodes", "vnode"],
          explain: "One token per node gives lumpy ranges and makes heterogeneous hardware hard to weight. Many tokens per node average out the segment sizes and speed up rebalancing."
        },
        {
          type: "mcq",
          q: "With N replicas, a write quorum W and a read quorum R, which condition guarantees a read sees the latest acknowledged write?",
          choices: [
            "W + R > N",
            "W + R = N",
            "W > R",
            "R = N and W = 1"
          ],
          answer: 0,
          explain: "If the write set and read set must overlap in at least one replica, the reader is guaranteed to touch a node holding the newest value. Amazon's Dynamo paper popularized this tunable formulation."
        },
        {
          type: "truefalse",
          q: "A store configured with W + R less than or equal to N is broken and should never be used.",
          answer: false,
          explain: "It is a deliberate choice: it lowers latency and raises availability at the cost of possibly reading stale data. Many caches and analytics workloads correctly accept that."
        },
        {
          type: "match",
          q: "Match each Dynamo-style mechanism to the problem it solves.",
          pairs: [
            ["Vector clocks", "Detecting whether two versions of a value conflict or one descends from the other"],
            ["Hinted handoff", "Accepting a write for a temporarily unreachable replica and delivering it later"],
            ["Merkle trees", "Finding which key ranges differ between replicas without comparing every key"]
          ],
          explain: "These are three separate stages: conflict detection, short-term failure tolerance, and background repair of long-term divergence."
        },
        {
          type: "truefalse",
          q: "Last-write-wins conflict resolution based on wall-clock timestamps can silently discard a concurrent write.",
          answer: true,
          explain: "Clock skew between nodes means the surviving write is not necessarily the causally later one. Losing data quietly is why vector clocks or CRDTs are preferred where correctness matters."
        },
        {
          type: "mcq",
          q: "A hot key receives far more traffic than any other. Which mitigation attacks the root cause within the store's own design?",
          choices: [
            "Add more virtual nodes per physical node so the ring spreads the key out",
            "Move to modulo hashing so the key lands on a different node",
            "Reduce the read quorum R to one for every key in the cluster",
            "Split the key into sharded sub-keys and aggregate, or add a read-through cache for it"
          ],
          answer: 3,
          explain: "Hot keys are a load-distribution problem, not a placement problem: virtual nodes and any other hashing scheme still put a single key on a single node, because one key hashes to one point. You must either fan the key itself out into sub-keys or absorb the reads in front of it."
        }
      ]
    },
    {
      id: "l119",
      title: "Design a web crawler",
      intro: "The frontier, politeness, deduplication, and the traps that eat crawlers alive.",
      questions: [
        {
          type: "fill",
          q: "The queue of discovered but not yet fetched URLs is called the ____ , and its ordering policy is what determines crawl priority.",
          answer: "frontier",
          accept: ["frontier", "url frontier", "URL frontier"],
          explain: "The frontier is usually not one queue: it is a set of per-host queues plus a prioritizer, so that politeness and priority can be enforced independently."
        },
        {
          type: "mcq",
          q: "A crawler uses a Bloom filter for seen-URL deduplication. What is the correctness consequence you must accept?",
          choices: [
            "It can report a URL as unseen when it has been seen, so pages get crawled twice",
            "It can lose entries over time as the filter fills, reintroducing duplicates",
            "It requires the full URL set in memory to answer any membership query",
            "It can report a URL as already seen when it has not been, so some pages are never crawled"
          ],
          answer: 3,
          explain: "Bloom filters have false positives but never false negatives. For a crawler that means a small fraction of pages are silently skipped, which is usually an acceptable trade for the memory savings."
        },
        {
          type: "truefalse",
          q: "Politeness in a crawler means respecting robots.txt and limiting concurrent requests and request rate per host, not just overall.",
          answer: true,
          explain: "A global rate limit can still hammer one small site if all workers happen to pull its URLs. Politeness is enforced per host, which is why frontiers are commonly partitioned by host."
        },
        {
          type: "mcq",
          q: "Two URLs differing only in tracking query parameters and trailing slash return the same page. What is the standard fix?",
          choices: [
            "Fetch both and compare response bodies before storing either",
            "Rely on the Bloom filter, which will treat similar strings as duplicates",
            "URL normalization before the dedup check, plus content fingerprinting after fetch",
            "Follow only URLs that appear in the site's sitemap"
          ],
          answer: 2,
          explain: "Normalization catches the cheap cases before you spend a fetch. Content fingerprinting, for example a checksum or a simhash of the body, catches the duplicates that different URLs genuinely produce."
        },
        {
          type: "match",
          q: "Match each crawler hazard to its defense.",
          pairs: [
            ["Infinite calendar pages generating endless links", "Depth limits and per-host URL budgets"],
            ["Repeatedly refetching pages that never change", "Conditional requests using ETag or If-Modified-Since"],
            ["Two workers fetching the same host simultaneously", "Host-partitioned frontier queues with a per-host delay"]
          ],
          explain: "Crawler traps, refresh policy, and politeness are separate problems, and a defense for one does nothing for the others."
        },
        {
          type: "order",
          q: "Order the steps a crawler worker takes for a single URL.",
          items: [
            "Pop a URL from its host-assigned frontier queue",
            "Check robots.txt rules and the per-host delay before fetching",
            "Fetch the page and compute a content fingerprint",
            "Extract links, normalize them, and add unseen ones back to the frontier"
          ],
          explain: "The robots and delay check must come before the network call. Checking after fetching means you have already made the impolite request."
        },
        {
          type: "truefalse",
          q: "A crawler should recrawl every discovered page on the same fixed schedule to keep the index uniformly fresh.",
          answer: false,
          explain: "Change rates vary enormously between a news homepage and an archived document. Recrawl frequency should adapt to observed change rate and page importance, or you waste most of your bandwidth."
        }
      ]
    },
    {
      id: "l120",
      title: "Reviewing a design: where does this fail first?",
      intro: "Reading a proposed design adversarially: bottlenecks, failure domains, and the honest tradeoff list.",
      questions: [
        {
          type: "mcq",
          q: "The single most useful question to ask about any proposed component is:",
          choices: [
            "Which programming language is it implemented in",
            "What happens to the rest of the system when this component is slow or unavailable",
            "How many instances of it will run in production",
            "Whether it is deployed in the same region as the database"
          ],
          answer: 1,
          explain: "Designs fail at their dependencies. Naming the blast radius of each component surfaces missing timeouts, missing fallbacks, and accidental single points of failure."
        },
        {
          type: "truefalse",
          q: "Adding a cache in front of a database can make an outage worse rather than better.",
          answer: true,
          explain: "If the system only survives because the cache absorbs most reads, a cold or flushed cache sends full traffic to a database sized for the residual. That thundering herd is a common way outages begin."
        },
        {
          type: "fill",
          q: "When a design's throughput is capped by one component that every request must pass through, that component is the system's ____ , and adding capacity anywhere else buys nothing.",
          answer: "bottleneck",
          accept: ["bottleneck", "bottle neck", "constraint"],
          explain: "Optimizing anywhere other than the constraint does not increase end-to-end throughput. Find the constraint first, then decide whether to widen it or route around it."
        },
        {
          type: "mcq",
          q: "A reviewer sees a design where every service retries failed calls three times with no backoff. Why is this dangerous?",
          choices: [
            "Retries make individual request latency unpredictable, which violates the SLA",
            "Retries at every layer multiply, so a brief downstream blip becomes a self-sustaining traffic amplification",
            "Three retries is too few to survive a transient network partition",
            "Retrying without backoff bypasses the load balancer's health checks"
          ],
          answer: 1,
          explain: "Retries compose multiplicatively across layers, so three layers of three retries is 27x load exactly when the system is already struggling. Backoff, jitter, retry budgets, and circuit breakers exist to break that loop."
        },
        {
          type: "match",
          q: "Match each review smell to the failure it predicts.",
          pairs: [
            ["A shared counter or sequence on the write path", "Write throughput ceiling and a coordination single point of failure"],
            ["No stated timeout on an outbound call", "Threads or connections pile up until the caller exhausts its own pool"],
            ["Unbounded in-memory queue between stages", "Memory grows until the process is killed instead of shedding load"]
          ],
          explain: "Each smell has a specific predicted failure mode, which is what makes it worth flagging rather than a matter of taste."
        },
        {
          type: "truefalse",
          q: "If a design meets all the stated requirements, listing its tradeoffs is unnecessary detail in a review.",
          answer: false,
          explain: "Requirements change. Stating what the design gives up, and at what scale each choice stops working, tells the next engineer where the cliff is before they walk off it."
        },
        {
          type: "order",
          q: "Order these review moves from the cheapest check that can invalidate the entire design to the most forward-looking one.",
          items: [
            "Check the design against the stated non-functional requirements",
            "Trace the hottest request path and find its bottleneck",
            "Kill each component in turn and describe the blast radius",
            "Ask at what multiple of current scale each choice stops working"
          ],
          explain: "Start with whether it meets the bar at all, then throughput, then failure behavior, then headroom. Reversing this order means polishing a design that never satisfied its requirements."
        }
      ]
    }
  ]
});
