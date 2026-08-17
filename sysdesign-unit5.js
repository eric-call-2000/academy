window.ACADEMY.addUnit("sysdesign", {
  id: "unit-5",
  title: "Caching",
  color: "#eab308",
  icon: "\u{26A1}",
  description: "The highest-leverage optimization, and the source of the subtlest bugs.",
  lessons: [
    {
      id: "l33",
      title: "Why caching works: temporal and spatial locality",
      intro: "Caches pay off because real access patterns are skewed and repetitive, not uniform.",
      questions: [
        {
          type: "mcq",
          q: "A cache holding only 1 percent of a dataset can still serve most reads. What property of real workloads makes that possible?",
          choices: [
            "Caches compress data, so 1 percent of the bytes covers 100 percent of the rows",
            "Databases return cached rows faster than uncached rows regardless of the cache",
            "Access is skewed: a small subset of items receives a large share of requests",
            "Modern networks are fast enough that hit rate stops mattering"
          ],
          answer: 2,
          explain: "Popularity in real systems is heavily skewed, so a small hot set absorbs most traffic. Skew, not capacity, is what makes a tiny cache effective."
        },
        {
          type: "truefalse",
          q: "Temporal locality is the tendency for an item that was just accessed to be accessed again soon.",
          answer: true,
          explain: "Temporal locality is repetition over time, and it is the direct justification for keeping a recently used item resident instead of discarding it."
        },
        {
          type: "fill",
          q: "____ locality is the tendency to access items whose addresses or keys are near ones already accessed, which is why systems fetch a whole block or page rather than a single byte.",
          answer: "spatial",
          accept: ["spatial", "spatial locality"],
          explain: "Spatial locality is why CPU cache lines, disk pages, and range reads all fetch neighbors: the neighbor is likely to be wanted next, and it is nearly free to bring along."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Temporal locality", "A recently used item is likely to be used again soon"],
            ["Spatial locality", "Items near a used item are likely to be used next"],
            ["Hit ratio", "The fraction of lookups the cache can answer itself"]
          ],
          explain: "The two localities describe the workload; hit ratio measures how well a given cache exploits them."
        },
        {
          type: "mcq",
          q: "A service reads keys chosen uniformly at random from a billion-key space, each read once. What should you expect from adding a cache?",
          choices: [
            "A high hit rate, because caches learn random patterns over time",
            "Almost no benefit, plus added latency and memory cost on every miss",
            "A hit rate proportional to the square root of the keyspace",
            "Better throughput, since caches serve any key faster than the database"
          ],
          answer: 1,
          explain: "With no reuse there is no temporal locality to exploit, so nearly every lookup misses and you pay the cache round trip on top of the origin read."
        },
        {
          type: "order",
          q: "Order these storage tiers from lowest to highest typical access latency.",
          items: [
            "CPU L1 cache",
            "Main memory (RAM)",
            "Local SSD",
            "A remote service across a network"
          ],
          explain: "Each tier is roughly an order of magnitude or more slower than the one above it. Caching is the practice of moving hot data up this hierarchy."
        },
        {
          type: "truefalse",
          q: "Because a cache lowers average latency, it automatically lowers p99 latency too.",
          answer: false,
          explain: "Misses still pay the full origin cost plus the cache lookup, and misses tend to land in the tail. A cache can improve p50 dramatically while leaving p99 unchanged or slightly worse."
        }
      ]
    },
    {
      id: "l34",
      title: "The cache layers: client, CDN, application, database",
      intro: "A single request can pass through half a dozen caches, each with different ownership and different invalidation reach.",
      questions: [
        {
          type: "order",
          q: "Order the caches a browser request may consult, from closest to the user to closest to the data.",
          items: [
            "Browser or client-side cache",
            "CDN or edge cache",
            "Application cache such as Redis or Memcached",
            "Database buffer pool"
          ],
          explain: "The nearer the cache is to the user, the cheaper the hit and the harder it is to invalidate, because you no longer control the copy."
        },
        {
          type: "mcq",
          q: "Which cache layer is hardest to invalidate once a stale value has been served?",
          choices: [
            "The database buffer pool, which is managed by the storage engine",
            "The shared Redis cluster, since it is written by many services",
            "The CDN, because edge nodes are geographically distributed",
            "The client cache, because you cannot reach a copy already on the user device"
          ],
          answer: 3,
          explain: "You can purge a CDN and delete a Redis key, but a response already sitting in a browser is out of reach until its freshness lifetime ends. That is why client TTLs are kept short or bypassed with versioned URLs."
        },
        {
          type: "fill",
          q: "Embedding a content hash in an asset filename, such as app.9f2c1e.js, so that a new build gets a new URL is called cache ____.",
          answer: "busting",
          accept: ["busting", "cache busting", "cache-busting", "bust", "fingerprinting"],
          explain: "Cache busting sidesteps invalidation entirely: the old URL is never requested again, so its cached copy simply ages out instead of needing a purge."
        },
        {
          type: "truefalse",
          q: "A database buffer pool is a cache, even though no application code manages it.",
          answer: true,
          explain: "The buffer pool keeps hot pages in memory to avoid disk reads. It follows the same locality logic as any other cache; the storage engine just manages it for you."
        },
        {
          type: "match",
          q: "Match each cache layer to what it typically stores.",
          pairs: [
            ["CDN edge cache", "Whole HTTP responses, keyed by URL and vary headers"],
            ["Application cache", "Serialized objects or query results, keyed by application-chosen keys"],
            ["Database buffer pool", "Raw data and index pages read from disk"]
          ],
          explain: "Each layer caches a different unit of work, which is exactly why a hit at a nearer layer saves more downstream work."
        },
        {
          type: "mcq",
          q: "In HTTP caching, what distinguishes s-maxage from max-age?",
          choices: [
            "s-maxage is measured in seconds while max-age is measured in milliseconds",
            "s-maxage applies only to shared caches such as CDNs and proxies, overriding max-age there",
            "s-maxage is a hard expiry while max-age is only advisory to all caches",
            "s-maxage applies only to secure responses served over TLS"
          ],
          answer: 1,
          explain: "It lets you keep a long edge lifetime while telling browsers to revalidate quickly, which is useful precisely because you can purge the edge but not the browser."
        },
        {
          type: "truefalse",
          q: "An in-process cache on each of ten application servers guarantees that all ten servers observe the same value for a key.",
          answer: false,
          explain: "Each process holds its own independent copy with its own expiry, so ten servers can serve ten different versions. Local caches trade consistency for zero network latency."
        }
      ]
    },
    {
      id: "l35",
      title: "Read strategies: cache-aside vs read-through",
      intro: "Who is responsible for filling the cache on a miss decides how the failure modes look.",
      questions: [
        {
          type: "mcq",
          q: "In the cache-aside pattern, who is responsible for loading a value into the cache after a miss?",
          choices: [
            "The cache server, which subscribes to a change feed from the database",
            "The application code, which reads the database and then writes the value into the cache",
            "The database, which pushes rows to the cache as they are read",
            "A background job, since cache-aside forbids writes on the read path"
          ],
          answer: 1,
          explain: "Cache-aside puts the cache logic in application code. That is why it works with any store, and also why every caller must get the logic right."
        },
        {
          type: "truefalse",
          q: "Cache-aside is the most commonly used caching pattern in practice.",
          answer: true,
          explain: "It requires no special cache client, works with any backing store, and degrades gracefully when the cache is down, so most systems reach for it first."
        },
        {
          type: "order",
          q: "Order the steps of a cache-aside read that misses.",
          items: [
            "Look up the key in the cache",
            "Observe a miss and query the database",
            "Write the loaded value into the cache",
            "Return the value to the caller once the cache has been populated"
          ],
          explain: "The population step happens inline on the read path, which is why a burst of concurrent misses on the same key all reach the database."
        },
        {
          type: "mcq",
          q: "In read-through caching, how does the application see a miss?",
          choices: [
            "It gets an error and must retry against the database itself",
            "It gets a null and is expected to backfill the cache manually",
            "It does not: the cache loads from the backing store and returns the value as part of the same call",
            "It gets a stale value and a flag indicating a refresh is in progress"
          ],
          answer: 2,
          explain: "Read-through moves the loader into the cache layer, so the application talks only to the cache. The trade is that the cache becomes a hard dependency on the read path."
        },
        {
          type: "fill",
          q: "Cache-aside has a well-known race: a reader that loaded a value just before a concurrent writer updated the database and deleted the key can afterwards write a ____ value back into the cache, where it may sit until its TTL expires.",
          answer: "stale",
          accept: ["stale", "stale value", "outdated", "old"],
          explain: "The reader interleaves between the writer database update and the delete, so the delete happens before the late set. This race is intrinsic to cache-aside, not a bug in a particular implementation."
        },
        {
          type: "mcq",
          q: "What is the standard, practical mitigation for that read-miss versus write race?",
          choices: [
            "Route all reads and writes for a key through a single application server",
            "Switch to read-through, which cannot exhibit the race",
            "Put a TTL on every entry so any stale write self-heals within a bounded window",
            "Write to the cache before writing to the database on every update"
          ],
          answer: 2,
          explain: "The window is narrow but unavoidable, so the usual answer is to bound the damage: a TTL guarantees the stale entry disappears, and a delayed second invalidation can shrink the window further."
        },
        {
          type: "truefalse",
          q: "Read-through caching eliminates the possibility of serving stale data.",
          answer: false,
          explain: "Read-through changes who loads the value, not when the value stops being true. Anything that writes to the store outside the cache still leaves the cached copy stale."
        }
      ]
    },
    {
      id: "l36",
      title: "Write strategies: write-through, write-back, write-around",
      intro: "Three answers to one question: what should a write do to the cache?",
      questions: [
        {
          type: "match",
          q: "Match each write strategy to its mechanism.",
          pairs: [
            ["Write-through", "Write the cache and the backing store together before acknowledging"],
            ["Write-back", "Acknowledge from the cache and flush to the store later"],
            ["Write-around", "Write only to the store and leave the cache untouched"]
          ],
          explain: "The three differ in when the durable store learns about the write, which is exactly what sets their durability and latency profiles."
        },
        {
          type: "mcq",
          q: "What is the central trade-off of write-back caching?",
          choices: [
            "It absorbs write bursts and coalesces repeated updates, but unflushed data is lost if the cache node crashes",
            "It guarantees durability but makes reads slower because every read must check for dirty entries",
            "It removes staleness entirely at the cost of higher memory usage",
            "It reduces memory pressure but doubles the number of database writes"
          ],
          answer: 0,
          explain: "Acknowledging before the store is updated is what buys the throughput, and it is the same thing that puts unflushed writes at risk. You cannot have one without the other."
        },
        {
          type: "truefalse",
          q: "Write-through keeps the cache populated with fresh values on every write, but it adds the store write to the latency of the write path.",
          answer: true,
          explain: "The write is not acknowledged until both the cache and the store are updated, so the caller pays for both. In exchange, a later read of that key is likely to hit."
        },
        {
          type: "mcq",
          q: "When is write-around the right default?",
          choices: [
            "When every written record is read back within milliseconds",
            "When the cache is on the same machine as the database",
            "When write volume is high and most written records are rarely read soon after",
            "When the workload cannot tolerate any stale reads at all"
          ],
          answer: 2,
          explain: "Write-around avoids filling the cache with cold data that would evict genuinely hot entries. The cost is a guaranteed miss the first time a written record is read."
        },
        {
          type: "fill",
          q: "Write-____ absorbs bursts by acknowledging the write as soon as it is in the cache and flushing dirty entries to the durable store afterwards.",
          answer: "back",
          accept: ["back", "write-back", "behind", "write-behind"],
          explain: "Write-back, also called write-behind, is what filesystem page caches and disk controllers do. It is also why an unclean shutdown can lose recent writes."
        },
        {
          type: "truefalse",
          q: "Write-through makes staleness impossible, even when a nightly batch job writes directly to the database.",
          answer: false,
          explain: "Write-through only refreshes the cache for writes that actually go through it. Any writer that bypasses the cache leaves the cached copy stale, which is why TTLs are still needed."
        },
        {
          type: "order",
          q: "Order what happens to a single update under write-back.",
          items: [
            "The application writes the new value to the cache",
            "The entry is marked dirty and queued for flushing",
            "The cache acknowledges the write to the caller",
            "A background flush persists the value to the durable store"
          ],
          explain: "The entry must be recorded as dirty before the caller is told the write succeeded, otherwise the acknowledged write would never be queued at all. The gap between that acknowledgement and the flush is both the performance win and the durability exposure."
        }
      ]
    },
    {
      id: "l37",
      title: "Eviction policies: LRU, LFU, TTL",
      intro: "Eviction decides what to drop when memory runs out; expiry decides how long a value is allowed to be believed.",
      questions: [
        {
          type: "mcq",
          q: "What is LRU eviction most vulnerable to?",
          choices: [
            "Keys whose values are unusually large, which it always evicts first",
            "A one-pass scan over many cold keys, which pushes the hot working set out",
            "Workloads with strong temporal locality, where it performs worse than random",
            "Frequent writes, since every write forces a full ordering rebuild"
          ],
          answer: 1,
          explain: "LRU judges only recency, so a batch job touching thousands of cold keys once looks maximally recent and displaces genuinely hot data."
        },
        {
          type: "truefalse",
          q: "A TTL and an eviction policy answer different questions: TTL bounds how stale a value may be, while eviction decides what to discard when memory is full.",
          answer: true,
          explain: "An entry can be evicted long before its TTL because of memory pressure, and an entry can expire while memory is plentiful. Treating TTL as your memory plan is a common mistake."
        },
        {
          type: "match",
          q: "Match each policy to what it does.",
          pairs: [
            ["LRU", "Discards the entry that was accessed longest ago"],
            ["LFU", "Discards the entry with the fewest recorded accesses"],
            ["TTL", "Removes an entry once its allotted lifetime has elapsed"]
          ],
          explain: "LRU tracks recency, LFU tracks frequency, and TTL tracks age, which is why they are complementary rather than competing."
        },
        {
          type: "fill",
          q: "When a large sequential scan fills the cache with data that will never be read again and evicts the hot set, the cache is said to suffer from cache ____.",
          answer: "pollution",
          accept: ["pollution", "cache pollution", "polluted"],
          explain: "Scan-resistant policies such as segmented LRU or admission-controlled schemes exist precisely to keep a single scan from destroying a hit rate."
        },
        {
          type: "mcq",
          q: "What is the classic weakness of a naive LFU counter?",
          choices: [
            "It cannot represent ties, so it evicts at random once counts match",
            "It requires the full key ordering to be recomputed on every read",
            "It only works when all values are the same size",
            "An item popular in the past keeps a high count and resists eviction long after demand ends"
          ],
          answer: 3,
          explain: "Without decay or windowing, LFU confuses historical popularity with current popularity. Real implementations add aging so old counts fade."
        },
        {
          type: "truefalse",
          q: "Production caches typically maintain an exact global recency ordering over every key to implement LRU.",
          answer: false,
          explain: "Exact LRU needs per-access bookkeeping on a shared structure, which is expensive and contended. Real systems approximate it, for example by sampling a handful of candidates or using CLOCK-style reference bits."
        },
        {
          type: "mcq",
          q: "Traffic doubles, cache memory stays fixed, and the hit rate falls sharply. What is the most likely explanation?",
          choices: [
            "The working set now exceeds capacity, so entries are evicted before they are reused",
            "TTLs have become too long, so expired entries occupy memory",
            "The eviction policy switched itself to random under load",
            "Network latency rose, which lowers the measured hit rate"
          ],
          answer: 0,
          explain: "Hit rate is a function of working-set size versus capacity. When the active set outgrows the cache, reuse distance exceeds the eviction horizon and hits collapse."
        }
      ]
    },
    {
      id: "l38",
      title: "Invalidation - the genuinely hard problem",
      intro: "Getting data into a cache is easy; knowing exactly when it stopped being true is the hard part.",
      questions: [
        {
          type: "mcq",
          q: "Phil Karlton is credited with the observation that there are only two hard things in computer science. What are they?",
          choices: [
            "Concurrency and distributed consensus",
            "Cache invalidation and naming things",
            "Naming things and off-by-one errors",
            "Cache invalidation and clock synchronization"
          ],
          answer: 1,
          explain: "The line is famous because it is accurate: both problems are about knowing what a thing refers to and when that reference stops being valid."
        },
        {
          type: "truefalse",
          q: "On a write, deleting the cached key is generally safer than overwriting it with the new value.",
          answer: true,
          explain: "Deletion is idempotent and order-insensitive, so two concurrent writers cannot leave the older value behind. Overwriting can, if the writes land out of order."
        },
        {
          type: "fill",
          q: "The simplest and most robust invalidation strategy is to attach a ____ to every entry so that even an invalidation you failed to send is corrected within a bounded time.",
          answer: "TTL",
          accept: ["TTL", "ttl", "time to live", "time-to-live", "expiry"],
          explain: "Every other mechanism can fail, drop a message, or miss a code path. A TTL is the backstop that turns a permanent correctness bug into a bounded staleness window."
        },
        {
          type: "match",
          q: "Match each invalidation approach to how the stale entry goes away.",
          pairs: [
            ["TTL expiry", "The entry disappears on its own after a fixed lifetime"],
            ["Explicit invalidation", "The writer deletes or purges the key at write time"],
            ["Versioned keys", "A new version writes to a new key, so the old one is never read again"]
          ],
          explain: "Versioning avoids the invalidation problem rather than solving it, which is why immutable, content-addressed keys are so appealing when you can afford the extra memory."
        },
        {
          type: "mcq",
          q: "Why does putting a version number or last-updated timestamp into the cache key largely sidestep invalidation?",
          choices: [
            "Because the cache compares versions on read and refuses to return old ones",
            "Because a key with a version is stored in a separate memory region with priority",
            "Because a version bump produces a different key, so readers miss and reload while the old key ages out unread",
            "Because versioned keys are exempt from eviction until they are explicitly deleted"
          ],
          answer: 2,
          explain: "You never have to delete anything: correctness comes from readers computing the new key. The cost is that superseded entries occupy memory until eviction or expiry reclaims them."
        },
        {
          type: "truefalse",
          q: "Broadcasting an invalidation message to every cache node makes invalidation exact, because the message is guaranteed to arrive.",
          answer: false,
          explain: "Messages can be lost, delayed, reordered, or arrive at a node that was partitioned or restarting. Broadcast invalidation narrows the window but still needs a TTL underneath it."
        },
        {
          type: "order",
          q: "Order the steps of the delayed double-delete technique used to shrink the cache-aside staleness window.",
          items: [
            "Invalidate the cached key",
            "Write the new value to the database",
            "Wait longer than the slowest plausible in-flight read",
            "Invalidate the key a second time"
          ],
          explain: "The second delete removes any stale value that a slow in-flight reader wrote back after the first delete. It shrinks the window rather than closing it, so keep the TTL."
        }
      ]
    },
    {
      id: "l39",
      title: "Stampedes, thundering herds, and hot keys",
      intro: "The failure mode where the cache itself causes the outage it was supposed to prevent.",
      questions: [
        {
          type: "mcq",
          q: "What is a cache stampede?",
          choices: [
            "A cache node running out of memory and evicting its entire keyspace at once",
            "Many concurrent requests miss the same key at the same moment and all recompute it against the origin",
            "A client retry loop that repeatedly writes the same key with different values",
            "A replication lag spike that makes replicas serve older data than the primary"
          ],
          answer: 1,
          explain: "One expiry can convert a key that was absorbing thousands of requests per second into thousands of simultaneous origin queries. The origin, sized for the miss rate, is not sized for that."
        },
        {
          type: "fill",
          q: "Adding a small random ____ to each TTL prevents a large batch of keys populated at the same moment from all expiring in the same instant.",
          answer: "jitter",
          accept: ["jitter", "jittering", "randomness", "random jitter"],
          explain: "Keys filled together expire together unless you spread them. Jitter converts one synchronized cliff into a smooth trickle of misses."
        },
        {
          type: "mcq",
          q: "How does request coalescing, sometimes called single flight, protect the origin?",
          choices: [
            "It batches many different keys into one origin query to reduce round trips",
            "It queues origin requests and drops the ones that exceed a rate limit",
            "It lets only one caller recompute a given key while the rest wait for and share that result",
            "It merges reads and writes for the same key into a single atomic operation"
          ],
          answer: 2,
          explain: "The concurrent duplicates are deduplicated at the point of the miss, so the origin sees one query instead of N regardless of how many callers arrived together."
        },
        {
          type: "truefalse",
          q: "Early recomputation refreshes a value before it actually expires, often using a probabilistic check that becomes more likely as expiry approaches.",
          answer: true,
          explain: "Refreshing while the old value is still servable means no one ever waits on a miss for that key, and only the single request that wins the probabilistic draw does the work."
        },
        {
          type: "match",
          q: "Match each stampede mitigation to what it does.",
          pairs: [
            ["Request coalescing", "Collapses N concurrent misses on a key into one origin call"],
            ["Jittered TTLs", "Desynchronizes expiry times so misses do not arrive together"],
            ["Early recompute", "Refreshes the value before expiry while the old one is still served"]
          ],
          explain: "They address different parts of the problem, so serious systems use all three: jitter spreads expiry, early recompute avoids the miss, and coalescing bounds the damage when a miss still happens."
        },
        {
          type: "truefalse",
          q: "A single hot key that saturates one cache node is solved by adding more cache nodes to the cluster.",
          answer: false,
          explain: "Consistent hashing sends every request for that key to the same node no matter how many nodes exist. The fixes are replicating the key, splitting it across suffixed variants, or caching it locally in each application process."
        },
        {
          type: "order",
          q: "Order the sequence of an unmitigated stampede on one very popular key.",
          items: [
            "The popular key expires or is evicted",
            "Many concurrent readers all observe a miss",
            "Each reader issues the same expensive query to the origin",
            "The origin saturates, latency climbs, and even more concurrent readers pile up"
          ],
          explain: "The last step is what makes it an outage rather than a blip: rising origin latency lengthens the window in which new arrivals also miss, so the herd grows."
        }
      ]
    },
    {
      id: "l40",
      title: "Redis in practice: data structures beyond GET/SET",
      intro: "Redis is a data structure server; treating it as a key-value blob store leaves most of its value unused.",
      questions: [
        {
          type: "match",
          q: "Match each Redis type to the job it fits best.",
          pairs: [
            ["Sorted set", "A leaderboard where members are ranked by a numeric score"],
            ["Hash", "An object whose individual fields are read and updated separately"],
            ["List", "A queue or a capped log where order of insertion matters"]
          ],
          explain: "Choosing the right type replaces read-modify-write cycles in application code with a single server-side operation."
        },
        {
          type: "mcq",
          q: "You need the top 100 players by score and each player rank on demand. Which Redis type fits?",
          choices: [
            "A sorted set, which keeps members ordered by score and supports rank and range queries",
            "A set, which stores unique members and can return them in score order",
            "A list, which preserves insertion order so you can scan it for the top scores",
            "A hash, which maps each player to a score field you can sort on read"
          ],
          answer: 0,
          explain: "A sorted set maintains the ordering as scores change, so range and rank lookups are logarithmic instead of requiring you to fetch and sort everything client-side."
        },
        {
          type: "fill",
          q: "The five core Redis data types are strings, lists, hashes, sets, and ____ sets.",
          answer: "sorted",
          accept: ["sorted", "sorted sets", "zset", "zsets"],
          explain: "Sorted sets attach a numeric score to each member and keep members ordered by it. Everything else Redis offers is built on top of or alongside these five."
        },
        {
          type: "truefalse",
          q: "Redis executes commands one at a time, so a counter update such as INCR is atomic without any application-level locking.",
          answer: true,
          explain: "Serialized command execution is why Redis is a good fit for counters, rate limiters, and locks: the read-modify-write happens entirely inside the server."
        },
        {
          type: "mcq",
          q: "You cache a user object and frequently update only one field. Why is a hash usually better than a JSON string?",
          choices: [
            "Hashes are replicated to followers while strings are not",
            "You can read and write a single field without deserializing and rewriting the whole object",
            "Hashes are exempt from eviction under memory pressure",
            "Hashes are automatically indexed, so you can look the object up by field value"
          ],
          answer: 1,
          explain: "Field-level access avoids the read-modify-write round trip on the whole blob, which also removes a lost-update race between two writers touching different fields."
        },
        {
          type: "truefalse",
          q: "Storing an object as a single JSON string is always the better choice because it needs fewer commands.",
          answer: false,
          explain: "A JSON string is good when you always read the whole object and rarely mutate parts of it. When updates are partial or writers are concurrent, a hash is both cheaper and safer."
        },
        {
          type: "mcq",
          q: "What does setting a key only if it does not already exist, together with an expiry, give you?",
          choices: [
            "A guarantee that no other client can ever read the key while it is set",
            "A durable write that survives a restart even without persistence enabled",
            "A basic mutual-exclusion primitive whose expiry keeps a crashed holder from blocking forever",
            "An atomic counter that resets itself when the expiry elapses"
          ],
          answer: 2,
          explain: "Set-if-absent plus a TTL is the standard lock building block. It is only a best-effort lock: the holder can lose it by exceeding the TTL, so critical sections still need an ownership check before they act."
        }
      ]
    }
  ]
});
