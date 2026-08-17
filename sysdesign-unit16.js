window.ACADEMY.addUnit("sysdesign", {
  id: "unit-16",
  title: "Case Studies II: Social & Realtime",
  color: "#eab308",
  icon: "\u{1F4AC}",
  description: "Systems where the fan-out and the freshness are the whole problem.",
  lessons: [
    {
      id: "l121",
      title: "Design a news feed: push vs pull fan-out",
      intro: "How a post reaches followers: precompute per-follower feeds, merge at read time, or both.",
      questions: [
        {
          type: "mcq",
          q: "In fan-out on write (push), what happens the moment a user publishes a post?",
          choices: [
            "The post is stored once and nothing else happens until a follower opens their feed",
            "The post id is appended to a precomputed feed list for each of the author's followers",
            "Every follower's client is forced to re-download the author's entire post history",
            "The system recomputes a global ranking model over all posts in the network"
          ],
          answer: 1,
          explain: "Push fan-out does the work at write time: the post id is inserted into each follower's materialized feed, so a read is a single lookup."
        },
        {
          type: "truefalse",
          q: "Fan-out on read (pull) makes writes cheap because publishing a post touches only the author's own timeline.",
          answer: true,
          explain: "In pull, a write is one append to the author's timeline; the expensive merge across all followed authors is deferred to read time."
        },
        {
          type: "fill",
          q: "The production answer for most large social feeds is a ____ model: push for ordinary accounts, pull for celebrities.",
          answer: "hybrid",
          accept: ["hybrid", "hybrid model", "mixed"],
          explain: "Neither pure push nor pure pull survives the follower-count distribution, so real systems combine them per account."
        },
        {
          type: "mcq",
          q: "Which cost profile best describes pure fan-out on read?",
          choices: [
            "Cheap writes, expensive reads that must merge and sort many source timelines",
            "Cheap writes and cheap reads, at the cost of losing chronological order",
            "Expensive writes, cheap reads, and large storage duplication per follower",
            "Expensive writes and expensive reads, but perfectly consistent ordering"
          ],
          answer: 0,
          explain: "Pull defers all the work: reading a feed means fetching the recent posts of every followed account and merging them, which is slow for users who follow many accounts."
        },
        {
          type: "match",
          q: "Match each feed strategy to its defining property.",
          pairs: [
            ["Fan-out on write", "Feed rows are materialized per follower before anyone reads"],
            ["Fan-out on read", "Followed timelines are merged and sorted at query time"],
            ["Hybrid fan-out", "Strategy is chosen per author based on follower count"]
          ],
          explain: "Each approach is defined by when the merge work happens: write time, read time, or conditionally per author."
        },
        {
          type: "order",
          q: "Order the steps of a fan-out-on-write publish path.",
          items: [
            "Persist the post to the durable post store and get an id",
            "Enqueue a fan-out job carrying the post id and author id",
            "Look up the author's follower list in batches",
            "Append the post id to each follower's feed list"
          ],
          explain: "The post must be durable before fan-out, and fan-out runs asynchronously in a worker so the publish request returns quickly."
        },
        {
          type: "truefalse",
          q: "Feed lists normally store full copies of post text and images for each follower.",
          answer: false,
          explain: "Feeds store post ids (plus a sort key); the post body is hydrated from a shared store at read time, which avoids duplicating content millions of times."
        }
      ]
    },
    {
      id: "l122",
      title: "Feed ranking and the celebrity problem",
      intro: "Why huge follower counts break push fan-out, and how feeds get ordered once they are assembled.",
      questions: [
        {
          type: "mcq",
          q: "Why is push fan-out brutal for an account with tens of millions of followers?",
          choices: [
            "Follower lists cannot be sharded across more than one database node",
            "Each post triggers tens of millions of feed writes, creating a huge write burst and long tail of stale feeds",
            "Ranking models refuse to score posts from accounts above a follower threshold",
            "The post body must be re-encoded once per follower before it can be delivered"
          ],
          answer: 1,
          explain: "One publish becomes tens of millions of writes; the fan-out job takes a long time, so some followers see the post much later than others."
        },
        {
          type: "fill",
          q: "In a hybrid design, posts from very-high-follower accounts are excluded from push and instead ____ into the feed at read time.",
          answer: "merged",
          accept: ["merged", "merge", "pulled", "merged in", "pulled in", "mixed in"],
          explain: "The reader has only a handful of celebrity follows, so merging those few timelines at read time is cheap compared to millions of writes."
        },
        {
          type: "truefalse",
          q: "A ranked feed can be built by scoring only a candidate set rather than every post the user could possibly see.",
          answer: true,
          explain: "Ranking pipelines are staged: cheap candidate generation narrows the pool, then a more expensive model scores the survivors."
        },
        {
          type: "order",
          q: "Order the stages of a typical ranked-feed serving pipeline.",
          items: [
            "Candidate generation from followed accounts and other sources",
            "Cheap filtering for blocks, mutes, and already-seen items",
            "Model scoring of the remaining candidates",
            "Reordering and diversity rules before returning the page"
          ],
          explain: "Work gets more expensive per item at each stage, so the pool must shrink first. Diversity rules run last so they can act on final scores."
        },
        {
          type: "mcq",
          q: "A ranked feed makes pagination harder than a purely chronological feed because:",
          choices: [
            "Ranked feeds cannot use cursors of any kind, only offsets",
            "Post ids stop being unique once a ranking model is applied",
            "Scores can change between page requests, so a plain offset can repeat or skip items",
            "Ranked feeds must be recomputed synchronously on every scroll event"
          ],
          answer: 2,
          explain: "Chronological order is stable, so a timestamp cursor works. Ranking is not stable, so systems pin a session-level candidate set or carry seen-item state in the cursor."
        },
        {
          type: "match",
          q: "Match each feed problem to its usual mitigation.",
          pairs: [
            ["Celebrity write storm", "Skip push for that author and merge the timeline on read"],
            ["Unstable ranked pagination", "Pin a candidate set per session and pass a cursor"],
            ["Feed dominated by one noisy author", "Apply diversity or per-author capping after scoring"]
          ],
          explain: "Each mitigation targets a distinct failure: write amplification, ordering instability, and result monotony."
        },
        {
          type: "truefalse",
          q: "Because a ranked feed is not chronological, its underlying storage no longer needs any time-based ordering or retention.",
          answer: false,
          explain: "Recency remains a dominant ranking feature and candidate stores are still bounded by time, so time-ordered storage and trimming stay essential."
        }
      ]
    },
    {
      id: "l123",
      title: "Design a chat/messaging system",
      intro: "Message ordering, storage layout, and getting a message to a device that may be offline.",
      questions: [
        {
          type: "mcq",
          q: "What is the most appropriate primary key layout for a one-to-one chat message store?",
          choices: [
            "A global auto-increment integer across all conversations",
            "The sender user id alone, with messages sorted by arrival time",
            "A partition key of conversation id with a sort key of message sequence or timestamp",
            "A hash of the message body so identical messages deduplicate"
          ],
          answer: 2,
          explain: "Reads are almost always the recent messages of one conversation, so partitioning by conversation id and sorting within it makes that a single contiguous range scan."
        },
        {
          type: "fill",
          q: "To make retries safe, the client attaches a unique ____ id to each message so the server can drop duplicates.",
          answer: "idempotency",
          accept: ["idempotency", "idempotence", "client message", "dedup", "deduplication", "message", "nonce", "request"],
          explain: "A client-generated unique id lets the server recognize a retransmitted message and store it only once, which matters because mobile networks retry constantly."
        },
        {
          type: "truefalse",
          q: "Relying on each client device's wall clock for message ordering within a conversation is safe because device clocks are NTP-synced.",
          answer: false,
          explain: "Client clocks skew and can be set by the user. Servers assign an authoritative per-conversation sequence number and use client time only as a display hint."
        },
        {
          type: "order",
          q: "Order the path of a message to a recipient who is currently offline.",
          items: [
            "Server accepts the message and assigns a conversation sequence number",
            "Server persists the message durably before acknowledging the sender",
            "Server finds no live connection for the recipient and queues it",
            "Recipient reconnects, syncs from its last known sequence, and receives the message"
          ],
          explain: "Durability precedes the sender ack, and offline delivery is a resumable sync from the last acknowledged sequence rather than a lost push."
        },
        {
          type: "mcq",
          q: "In a group chat with many members, the equivalent of the feed fan-out decision is:",
          choices: [
            "Whether to encrypt messages at rest or only in transit",
            "Whether to use TCP or UDP for the client connection",
            "Whether to keep media in the same table as the message text",
            "Whether to store one copy per conversation or one copy per recipient inbox"
          ],
          answer: 3,
          explain: "A single shared conversation log is cheap to write and needs per-user read cursors; per-recipient inboxes make sync simple but multiply writes by group size."
        },
        {
          type: "match",
          q: "Match each chat component to its responsibility.",
          pairs: [
            ["Connection/gateway service", "Holds the live client sockets and routes frames to sessions"],
            ["Message store", "Durably persists conversation history in sequence order"],
            ["Push notification service", "Wakes a device that has no live connection open"]
          ],
          explain: "Splitting these lets the stateful socket layer scale and restart independently of durable storage."
        },
        {
          type: "truefalse",
          q: "With end-to-end encryption, the server can still route and store messages even though it cannot read their contents.",
          answer: true,
          explain: "Routing needs only envelope metadata such as conversation and recipient; the ciphertext is opaque payload. This is why E2E systems still need separate metadata-minimization work."
        }
      ]
    },
    {
      id: "l124",
      title: "Presence, delivery receipts, and read state",
      intro: "Online status is soft state; delivered and read are per-user facts that must sync across devices.",
      questions: [
        {
          type: "mcq",
          q: "Why is presence (online/offline) usually kept in an in-memory store with a TTL rather than a durable database?",
          choices: [
            "Presence must be queryable with SQL joins against the user table",
            "Durable stores cannot represent boolean fields efficiently",
            "Presence is high-churn, low-value soft state that should expire on its own if heartbeats stop",
            "Presence has to survive a full cluster restart to be correct"
          ],
          answer: 2,
          explain: "Presence changes constantly and is worthless once stale. A TTL keyed on heartbeats means a crashed client automatically ages out to offline with no cleanup job."
        },
        {
          type: "fill",
          q: "Clients send a periodic ____ so the server can distinguish a live connection from one that died without a clean close.",
          answer: "heartbeat",
          accept: ["heartbeat", "heartbeats", "ping", "keepalive"],
          explain: "A half-open TCP connection looks alive to the server; only the absence of expected heartbeats reveals it, which is why presence TTLs are tied to them."
        },
        {
          type: "order",
          q: "Order the receipt states a message passes through, from earliest to latest.",
          items: [
            "Sent: the server has accepted and durably stored the message",
            "Delivered: the recipient device has received the message",
            "Read: the recipient has actually opened the conversation"
          ],
          explain: "Each state is asserted by a different party, which is why they arrive at different times and can stall between steps."
        },
        {
          type: "truefalse",
          q: "A delivered receipt proves the recipient has seen the message.",
          answer: false,
          explain: "Delivered only means the bytes reached a device. Read is a separate, explicitly reported event, and conflating the two produces misleading UI."
        },
        {
          type: "mcq",
          q: "The most storage-efficient representation of read state in a busy conversation is:",
          choices: [
            "A boolean read flag on every message row for every participant",
            "A separate read-receipts table containing one row per message per device",
            "A per-user, per-conversation high-water mark of the last read sequence number",
            "A bloom filter of read message ids kept only on the client"
          ],
          answer: 2,
          explain: "Reading is nearly always prefix-shaped, so one cursor per user per conversation replaces a row per message per participant, and unread count is arithmetic on sequence numbers."
        },
        {
          type: "match",
          q: "Match each realtime state to its correct durability treatment.",
          pairs: [
            ["Presence", "Ephemeral soft state with a short TTL, rebuilt from heartbeats"],
            ["Typing indicator", "Signal that expires a few seconds after the last keystroke and is never stored"],
            ["Read high-water mark", "Durable per-user value that must sync across devices"]
          ],
          explain: "Only the read cursor is a real user-visible fact worth persisting; the other two are cheap signals whose loss is invisible seconds later."
        },
        {
          type: "mcq",
          q: "A user reads a conversation on their phone. On the laptop the conversation should:",
          choices: [
            "Stay unread until the laptop separately fetches the messages",
            "Clear its unread badge once the updated read high-water mark syncs to that device",
            "Clear only after the phone goes offline and releases the conversation lock",
            "Show unread until the server garbage-collects the old receipts"
          ],
          answer: 1,
          explain: "Read state belongs to the user account, not a device, so the high-water mark is replicated to every session and each client recomputes its unread count."
        }
      ]
    },
    {
      id: "l125",
      title: "Realtime transports: long polling, SSE, WebSockets",
      intro: "Three ways to push server data to a client, and the operational cost of each.",
      questions: [
        {
          type: "mcq",
          q: "Which statement correctly distinguishes Server-Sent Events from WebSockets?",
          choices: [
            "SSE is full-duplex and binary; WebSockets are text-only and one directional",
            "SSE requires a protocol upgrade handshake; WebSockets run over ordinary HTTP responses",
            "SSE is server-to-client only over plain HTTP; WebSockets are full-duplex over an upgraded connection",
            "SSE cannot pass through proxies at all; WebSockets always can"
          ],
          answer: 2,
          explain: "SSE is a long-lived HTTP response streaming text events downstream with automatic reconnect built in; WebSockets upgrade the connection and carry frames both ways."
        },
        {
          type: "fill",
          q: "The oldest fallback, where the client issues a request the server holds open until data is ready, is called long ____.",
          answer: "polling",
          accept: ["polling", "poll"],
          explain: "Long polling holds the request open instead of returning empty, then the client immediately reissues it. It works everywhere but costs a request cycle per message batch."
        },
        {
          type: "truefalse",
          q: "WebSocket connections are stateful, which makes rolling deploys and autoscaling harder than for stateless HTTP request handlers.",
          answer: true,
          explain: "Every restart drops live sockets and triggers a reconnect stampede, so connection gateways need drain periods and clients need jittered backoff."
        },
        {
          type: "match",
          q: "Match each transport to the situation it fits best.",
          pairs: [
            ["Long polling", "Compatibility fallback where nothing else survives the network path"],
            ["Server-Sent Events", "One-way streams such as live scores or progress updates"],
            ["WebSockets", "Chat and collaborative editing needing low-latency client-to-server frames"]
          ],
          explain: "Pick the least powerful transport that meets the need: SSE avoids a whole class of stateful-upgrade problems when the client has nothing to send."
        },
        {
          type: "mcq",
          q: "A client-to-server realtime path can often be simplified by:",
          choices: [
            "Multiplexing upstream messages onto the same SSE stream used downstream",
            "Sending upstream writes as ordinary HTTP POST requests while receiving over SSE",
            "Opening a second SSE stream in the reverse direction",
            "Using HTTP HEAD requests to carry the payload in headers"
          ],
          answer: 1,
          explain: "SSE has no upstream channel, but plain POST for writes plus SSE for the event stream is a common, fully stateless-on-write pattern."
        },
        {
          type: "truefalse",
          q: "After a dropped connection, every client should reconnect immediately so users see data as soon as possible.",
          answer: false,
          explain: "Synchronized immediate reconnects create a thundering herd that re-kills the server. Clients need exponential backoff with random jitter."
        },
        {
          type: "order",
          q: "Order the lifecycle of a WebSocket-backed subscription.",
          items: [
            "Client sends an HTTP request with an Upgrade header",
            "Server responds 101 Switching Protocols and the socket opens",
            "Client subscribes to topics and the gateway registers the session",
            "Server pushes frames as events occur until either side closes"
          ],
          explain: "WebSockets begin life as an HTTP request; the upgrade handshake is what lets them traverse existing HTTP infrastructure."
        }
      ]
    },
    {
      id: "l126",
      title: "Design typeahead/autocomplete",
      intro: "Sub-100ms suggestions come from precomputing the answer per prefix, not from searching on the keystroke.",
      questions: [
        {
          type: "mcq",
          q: "What is the core data structure for prefix-based autocomplete?",
          choices: [
            "A B-tree keyed on full query strings",
            "A trie where each node represents a prefix and stores its precomputed top-k completions",
            "A hash table mapping every query to its click-through rate",
            "A skip list ordered by query frequency"
          ],
          answer: 1,
          explain: "A trie makes prefix lookup a walk of one node per typed character, and caching top-k at each node turns the suggestion into a read rather than a subtree traversal."
        },
        {
          type: "fill",
          q: "Storing the top-k results at each trie node avoids traversing the entire ____ under that prefix on every keystroke.",
          answer: "subtree",
          accept: ["subtree", "sub-tree", "subtrie", "branch"],
          explain: "Without precomputed top-k, a short prefix like a single letter would require scanning millions of descendant queries per keystroke."
        },
        {
          type: "truefalse",
          q: "Autocomplete suggestion data is typically rebuilt on a batch or near-realtime pipeline rather than updated synchronously on every query logged.",
          answer: true,
          explain: "The read path must stay microseconds fast, so aggregation of query logs into frequencies and top-k lists happens offline and the serving structure is swapped in."
        },
        {
          type: "mcq",
          q: "Which client-side technique cuts backend load for typeahead while keeping suggestions usable?",
          choices: [
            "Debouncing keystrokes by tens of milliseconds and caching results for prefixes already fetched",
            "Requesting suggestions on every keydown to keep the cache warm",
            "Fetching the entire suggestion trie to the browser on page load",
            "Disabling suggestions until the user stops typing for two full seconds"
          ],
          answer: 0,
          explain: "A short debounce collapses a burst of keystrokes into one request, and caching means backtracking a character needs no request at all. A two-second wait also cuts load, but it arrives after the user has stopped caring, so it fails the usability half of the requirement."
        },
        {
          type: "match",
          q: "Match each autocomplete layer to what it contributes.",
          pairs: [
            ["Trie with top-k per node", "Turns a prefix into candidates without scanning descendants"],
            ["Aggregation pipeline", "Converts raw query logs into frequency-weighted suggestions"],
            ["Edge cache of hot prefixes", "Serves the most common short prefixes without a backend hop"]
          ],
          explain: "Prefix distribution is extremely skewed, so a small cache of short hot prefixes absorbs a large share of traffic."
        },
        {
          type: "order",
          q: "Order the request path for a typeahead keystroke.",
          items: [
            "Debounce timer fires after the user pauses briefly",
            "Client checks its local cache for the current prefix",
            "Request hits an edge or server cache of hot prefixes",
            "Trie service returns the precomputed top-k for the prefix"
          ],
          explain: "Each layer is meant to answer before the next one is touched, which is how the p99 stays inside the perception window."
        },
        {
          type: "truefalse",
          q: "Autocomplete and full search can share one index because both need the same ranking and the same freshness guarantees.",
          answer: false,
          explain: "Typeahead is prefix-matched, top-k, latency-critical, and tolerant of slightly stale data; full search is term-matched over documents with different ranking. They are normally separate systems."
        }
      ]
    },
    {
      id: "l127",
      title: "Search: the inverted index",
      intro: "The structure that makes term lookup fast, and what it costs to keep it fresh.",
      questions: [
        {
          type: "fill",
          q: "An inverted index maps each ____ to the list of document ids that contain it.",
          answer: "term",
          accept: ["term", "token", "word", "terms"],
          explain: "The mapping is inverted relative to the document store, which maps a document to its terms. Term-to-documents is what makes lookup fast."
        },
        {
          type: "mcq",
          q: "In an inverted index, what is a posting list?",
          choices: [
            "The queue of documents waiting to be indexed",
            "The list of terms found in a single document",
            "The set of query strings that returned zero results",
            "The ordered list of document ids (often with positions) for a single term"
          ],
          answer: 3,
          explain: "One posting list per term; intersecting the posting lists of several terms answers an AND query, and stored positions enable phrase matching."
        },
        {
          type: "order",
          q: "Order the stages of indexing a document.",
          items: [
            "Tokenize the raw text into terms",
            "Normalize tokens by lowercasing and stemming",
            "Append the document id to each term's posting list",
            "Make the new segment visible to searchers on refresh"
          ],
          explain: "Query text goes through the same tokenize-and-normalize path, which is why an analyzer mismatch between index and query silently returns nothing."
        },
        {
          type: "truefalse",
          q: "An inverted index is typically updated by rewriting the affected posting lists in place on every single document change.",
          answer: false,
          explain: "Real engines write small immutable segments and merge them in the background, marking deletes with a tombstone. In-place rewrites of long posting lists would be prohibitively expensive."
        },
        {
          type: "mcq",
          q: "Which statement about search sharding is correct?",
          choices: [
            "Document-partitioned sharding sends the query to every shard and merges the top results",
            "Term-partitioned sharding guarantees each query touches exactly one shard regardless of term count",
            "Document-partitioned sharding requires each shard to hold every term's full posting list",
            "Sharding removes the need for a separate ranking pass on the coordinator"
          ],
          answer: 0,
          explain: "Document partitioning is the common choice: each shard indexes a slice of the corpus, the query is broadcast, and a coordinator merges the per-shard top-k. Term partitioning concentrates hot terms and needs multi-shard joins."
        },
        {
          type: "match",
          q: "Match each search index concept to its meaning.",
          pairs: [
            ["Posting list", "Document ids associated with one term"],
            ["Analyzer", "The tokenizing and normalizing pipeline applied to text"],
            ["Segment merge", "Background compaction that consolidates immutable index files"]
          ],
          explain: "These are the three levers behind index correctness, matching behavior, and write cost respectively."
        },
        {
          type: "truefalse",
          q: "Search indexes are usually near-realtime rather than immediately consistent, so a just-written document may not be searchable for a short interval.",
          answer: true,
          explain: "Visibility depends on a refresh that opens a new segment. Designs must account for a read-your-own-write gap, often by serving the writer from the primary store instead."
        }
      ]
    },
    {
      id: "l128",
      title: "Counting at scale: approximation over exactness",
      intro: "Unique counts and top-k frequencies in bounded memory, with quantified error instead of exact answers.",
      questions: [
        {
          type: "mcq",
          q: "What does HyperLogLog estimate?",
          choices: [
            "The frequency of a specific item in a stream",
            "The cardinality, meaning the number of distinct elements, of a large set",
            "The median latency of a request stream",
            "Whether a given element has definitely been seen before"
          ],
          answer: 1,
          explain: "HyperLogLog estimates distinct counts in kilobytes regardless of set size, by tracking the maximum run of leading zeros in hashed values across registers."
        },
        {
          type: "fill",
          q: "Count-Min Sketch estimates the ____ of an item in a stream and can overestimate but never underestimate it.",
          answer: "frequency",
          accept: ["frequency", "count", "frequencies"],
          explain: "Hash collisions can only add to a counter, so the reported count is an upper bound; taking the minimum across rows keeps the error small."
        },
        {
          type: "truefalse",
          q: "A Bloom filter can report a false positive but never a false negative for membership.",
          answer: true,
          explain: "All bits for a present element were definitely set, so absent bits prove non-membership; collisions can make an unseen element look present."
        },
        {
          type: "match",
          q: "Match each probabilistic structure to the question it answers.",
          pairs: [
            ["HyperLogLog", "How many distinct items were there?"],
            ["Count-Min Sketch", "Roughly how often did this item appear?"],
            ["Bloom filter", "Might this item have been seen at all?"]
          ],
          explain: "Cardinality, frequency, and membership are three different questions, and each structure trades exactness for bounded memory on exactly one of them."
        },
        {
          type: "mcq",
          q: "The strongest practical reason to use HyperLogLog for daily unique visitors instead of a set of user ids is:",
          choices: [
            "It is exact while a set is only approximate at large sizes",
            "It preserves the individual ids so they can be re-queried later",
            "It removes the need to hash the input values entirely",
            "Its memory is bounded and small no matter how many uniques there are, and sketches from shards merge"
          ],
          answer: 3,
          explain: "Mergeability is the underrated property: per-shard or per-hour sketches can be unioned to get any rollup, which an exact set cannot do without shipping all the ids."
        },
        {
          type: "truefalse",
          q: "Approximate counters are acceptable for billing and financial ledgers as long as the error bound is published.",
          answer: false,
          explain: "Money requires exactness and auditability. Sketches belong in analytics, dashboards, and rate signals, never in a system of record for transactions."
        },
        {
          type: "mcq",
          q: "A view counter that must be both cheap and roughly live is usually built by:",
          choices: [
            "Incrementing a single database row per view inside a transaction",
            "Recomputing the total from the raw event log on every read",
            "Storing one row per view and running COUNT(*) on each page load",
            "Buffering increments in memory or a fast store and flushing aggregated deltas periodically"
          ],
          answer: 3,
          explain: "Batching turns a hot-row write storm into periodic aggregated updates. The displayed count lags by the flush interval, which is an acceptable trade for a view counter."
        }
      ]
    }
  ]
});
