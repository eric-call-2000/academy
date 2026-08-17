window.ACADEMY.addUnit("sysdesign", {
  id: "unit-6",
  title: "Replication & Partitioning",
  color: "#eab308",
  icon: "\u{1F500}",
  description: "Two different answers to one machine is not enough, and they solve different problems.",
  lessons: [
    {
      id: "l41",
      title: "Why replicate: availability and read scale",
      intro: "Replication keeps copies of the same data on several nodes, which buys availability and read throughput but not capacity.",
      questions: [
        {
          type: "mcq",
          q: "Replication, as the term is used in distributed data systems, means:",
          choices: [
            "Splitting a dataset so each node stores a different subset of rows",
            "Keeping a copy of the same data on more than one node",
            "Compressing data so it occupies less space on every node",
            "Caching recent query results in memory in front of the database"
          ],
          answer: 1,
          explain: "Replication copies the same data to multiple nodes. Splitting different data across nodes is partitioning, which is a separate mechanism solving a separate problem."
        },
        {
          type: "truefalse",
          q: "Adding three read replicas of a 2 TB database triples the amount of distinct data the cluster can hold.",
          answer: false,
          explain: "Each replica holds a full copy, so the cluster still stores 2 TB of distinct data. Growing capacity beyond one node requires partitioning."
        },
        {
          type: "fill",
          q: "____ copies the same data to several nodes, while partitioning splits different data across nodes.",
          answer: "replication",
          accept: ["replication", "Replication"],
          explain: "This is the load-bearing distinction of the whole unit: same data in many places versus different data in different places."
        },
        {
          type: "match",
          q: "Match each term to what it actually does.",
          pairs: [
            ["Replication", "Keeps a copy of the same data on several nodes"],
            ["Partitioning", "Splits a dataset into subsets, each held by a different node"],
            ["Failover", "Promotes a surviving node to take over the role of a failed one"]
          ],
          explain: "Replication and partitioning are complementary: real systems usually partition the data and then replicate each partition."
        },
        {
          type: "mcq",
          q: "A read-heavy service is saturating its single database node with query traffic. Which change addresses that most directly?",
          choices: [
            "Split the dataset across two shards so each node holds half the rows",
            "Batch the writes so that transactions commit less often",
            "Add followers that hold full copies and serve read queries",
            "Raise the isolation level so that reads acquire fewer locks"
          ],
          answer: 2,
          explain: "Read load is what replication is for: every follower can answer reads from its own copy. Sharding helps write throughput and capacity, not read fan-out of the same data."
        },
        {
          type: "order",
          q: "Put this common scaling progression in order, from the simplest stage to the most involved.",
          items: [
            "Serve all reads and writes from a single node",
            "Add followers so reads can be spread across copies",
            "Split the data across shards once one node cannot absorb the writes or the dataset"
          ],
          explain: "Replication is usually reached for first because it is cheaper operationally. Partitioning is added when a single node can no longer hold the data or the write volume."
        },
        {
          type: "truefalse",
          q: "Placing a replica in a second geographic region can lower read latency for users near that region.",
          answer: true,
          explain: "Locality is a third motivation for replication, alongside availability and read scale: a nearby copy avoids a cross-continent round trip."
        }
      ]
    },
    {
      id: "l42",
      title: "Leader-follower replication",
      intro: "One node accepts writes and ships an ordered change log to the others, which is the most common replication design in practice.",
      questions: [
        {
          type: "mcq",
          q: "In leader-follower replication, where must every write be sent first?",
          choices: [
            "To any replica, since the replicas negotiate an order afterwards",
            "To the follower whose replication lag is currently lowest",
            "To a majority of followers before the leader applies it locally",
            "To the leader, which then ships the change on to the followers"
          ],
          answer: 3,
          explain: "A single leader gives every write one authoritative order. Followers apply the same change log in the same sequence, so they converge on the same state."
        },
        {
          type: "order",
          q: "Put the steps of a leader failover in order.",
          items: [
            "Detect that the leader has stopped responding",
            "Choose the follower with the most up-to-date data as the new leader",
            "Reconfigure clients and remaining followers to point at the new leader",
            "Let the old node rejoin as a follower once it recovers"
          ],
          explain: "The dangerous steps are detection, which can produce false positives under load, and the rejoin, where an old leader that still thinks it leads causes split brain."
        },
        {
          type: "truefalse",
          q: "With fully asynchronous replication, a failover can lose writes the old leader had already acknowledged to clients.",
          answer: true,
          explain: "Async means the leader acknowledges before followers confirm. If it dies with un-shipped changes, those writes are gone once a follower is promoted."
        },
        {
          type: "match",
          q: "Match each replication log format to what the leader actually ships.",
          pairs: [
            ["Statement-based replication", "The literal write statements, which followers re-execute"],
            ["Write-ahead log shipping", "The storage engine low-level log of page-level byte changes"],
            ["Logical row-based replication", "A stream of row-level changes in a storage-engine-independent format"]
          ],
          explain: "WAL shipping ties followers to the same storage engine internals, which makes rolling version upgrades painful. Logical replication decouples them, at the cost of a translation layer."
        },
        {
          type: "fill",
          q: "When a network fault leaves two nodes each believing it is the leader, the cluster is in a ____ brain state.",
          answer: "split",
          accept: ["split", "split brain", "split-brain"],
          explain: "Both nodes accept writes, and the two divergent histories have to be reconciled or discarded. Fencing and leases exist to prevent exactly this."
        },
        {
          type: "mcq",
          q: "The classic hazard of statement-based replication is that:",
          choices: [
            "It cannot replicate DELETE statements at all",
            "Nondeterministic calls such as NOW() or RAND() give different results on each replica",
            "It requires every follower to run an identical operating system build",
            "It doubles the size of the write-ahead log kept on the leader"
          ],
          answer: 1,
          explain: "Re-executing a statement only reproduces the leader state if the statement is deterministic. Auto-increment values and triggers cause the same class of divergence."
        },
        {
          type: "truefalse",
          q: "Replicating synchronously to every follower means one slow or failed follower can block all writes.",
          answer: true,
          explain: "That is why systems often use semi-synchronous replication: one follower is synchronous for durability, and the rest are asynchronous so they cannot stall the leader."
        }
      ]
    },
    {
      id: "l43",
      title: "Replication lag and read-your-writes consistency",
      intro: "Asynchronous followers are behind, and the anomalies users notice have specific names and specific fixes.",
      questions: [
        {
          type: "mcq",
          q: "Read-your-writes consistency guarantees that:",
          choices: [
            "Every replica has applied a write before that write is acknowledged",
            "A user who submitted a write will see it on their later reads, even if other users do not yet",
            "All users observe every write in the same single global order",
            "No read ever returns data that is more than one second stale"
          ],
          answer: 1,
          explain: "It is a per-user guarantee about your own writes, not a global one. Other users may still read the older value for a while."
        },
        {
          type: "match",
          q: "Match each consistency guarantee to the anomaly it rules out.",
          pairs: [
            ["Read-your-writes", "You submit an edit and then do not see your own edit"],
            ["Monotonic reads", "A second read shows older data than the first read did"],
            ["Consistent prefix reads", "A reply is visible before the message it answers"]
          ],
          explain: "Each guarantee blocks one specific user-visible weirdness. Consistent prefix violations show up most often when related data lives on independently replicated partitions."
        },
        {
          type: "fill",
          q: "The simplest way to get read-your-writes is to route the reads of a user to the ____ for a short window after that user submits a write.",
          answer: "leader",
          accept: ["leader", "primary", "leader node", "primary node"],
          explain: "The leader is guaranteed to have the write. Routing there briefly, or for anything the user can edit, avoids the anomaly without slowing every other read."
        },
        {
          type: "truefalse",
          q: "Eventual consistency by itself guarantees that a user will see their own write on the very next read.",
          answer: false,
          explain: "Eventual consistency only promises convergence at some unspecified later time. A read that lands on a lagging follower can miss the write entirely."
        },
        {
          type: "mcq",
          q: "Pinning a user session to the same replica for its duration mainly buys you:",
          choices: [
            "Linearizability across the whole cluster",
            "Consistent prefix reads across all partitions",
            "Monotonic reads for that user",
            "Lower write latency on the leader"
          ],
          answer: 2,
          explain: "Time only moves forward on any single replica, so staying on one replica means a user never sees data go backwards. It says nothing about other users or other partitions."
        },
        {
          type: "mcq",
          q: "Which client-side technique gives read-your-writes without sending reads to the leader?",
          choices: [
            "Record the log position of the user last write and only read from a replica that has applied at least that position",
            "Retry every read three times and return whichever answer appears most often",
            "Cache the written value in the client and never read that record again",
            "Write to two replicas at once and then read from whichever responds first"
          ],
          answer: 0,
          explain: "Carrying a logical timestamp or log position lets the router pick a sufficiently caught-up replica, which keeps read load off the leader."
        },
        {
          type: "truefalse",
          q: "Consistent prefix violations are especially likely when related records live on different partitions that replicate independently.",
          answer: true,
          explain: "Each partition has its own replication stream and its own lag, so causally ordered writes on different partitions can arrive at a reader out of order."
        }
      ]
    },
    {
      id: "l44",
      title: "Multi-leader and leaderless replication",
      intro: "Drop the single leader and you gain write availability, but you inherit conflicts and quorum arithmetic.",
      questions: [
        {
          type: "mcq",
          q: "In a leaderless system with n replicas, w write acknowledgements and r read responses, the standard quorum condition is:",
          choices: [
            "w + r < n",
            "w and r must both equal n / 2",
            "w + r > n",
            "r must always equal n"
          ],
          answer: 2,
          explain: "If the write set and the read set together exceed n, they must overlap on at least one replica, so a read sees the latest completed write. This is the Dynamo-style quorum from the 2007 Amazon paper by DeCandia et al."
        },
        {
          type: "fill",
          q: "With n = 5 replicas and w = 3, the smallest r that still satisfies w + r > n is ____.",
          answer: "3",
          accept: ["3", "three"],
          explain: "3 + 3 = 6, which is greater than 5, so the read set and the write set must share at least one replica. r = 2 would give exactly 5 and allow a stale read."
        },
        {
          type: "truefalse",
          q: "Last-write-wins conflict resolution based on timestamps can silently discard one of two concurrent writes.",
          answer: true,
          explain: "LWW picks one value and throws the other away, with no signal to the application. It achieves convergence by accepting data loss, which is fine for a cache and dangerous for a ledger."
        },
        {
          type: "match",
          q: "Match each leaderless repair mechanism to what it does.",
          pairs: [
            ["Read repair", "A stale value noticed during a read is written back to the lagging replica"],
            ["Anti-entropy", "A background process compares replicas and copies over data they are missing"],
            ["Hinted handoff", "A reachable node holds writes meant for a down node and forwards them later"]
          ],
          explain: "Read repair only fixes data that someone reads, so anti-entropy is needed to heal cold data. Hinted handoff is what makes a sloppy quorum possible during a partition."
        },
        {
          type: "mcq",
          q: "The defining problem introduced by multi-leader replication is:",
          choices: [
            "Followers can never catch up with any of the leaders",
            "Two leaders can accept conflicting writes to the same record, which must then be resolved",
            "Reads become impossible for the duration of a network partition",
            "The write-ahead log format stops being portable between nodes"
          ],
          answer: 1,
          explain: "With more than one node accepting writes, concurrent edits to the same record are inevitable, so a conflict resolution policy becomes part of the design: LWW, version vectors, CRDTs, or an application-level merge."
        },
        {
          type: "truefalse",
          q: "A leaderless system designates one node to decide the order of all writes.",
          answer: false,
          explain: "That would make it leader-based. In a leaderless design the client or a coordinator sends each write to several replicas directly, and no node owns the ordering."
        },
        {
          type: "mcq",
          q: "Which situation most justifies multi-leader replication?",
          choices: [
            "A single-region service that wants faster analytics queries",
            "A read-heavy service that wants to add more cache nodes",
            "Clients that must accept writes while offline and merge them on reconnect",
            "A service that needs strict linearizability on every write"
          ],
          answer: 2,
          explain: "Offline-capable clients and collaborative editing are effectively multi-leader whether you plan for it or not, since each device accepts local writes. Multi-datacenter write locality is the other classic case."
        }
      ]
    },
    {
      id: "l45",
      title: "Partitioning strategies: range, hash, directory",
      intro: "Three ways to decide which node owns a key, each trading scan locality against even load.",
      questions: [
        {
          type: "match",
          q: "Match each partitioning strategy to how it assigns keys.",
          pairs: [
            ["Range partitioning", "Each partition owns a contiguous sorted interval of the key space"],
            ["Hash partitioning", "A hash of the key picks the partition, scattering neighboring keys apart"],
            ["Directory-based partitioning", "An explicit lookup table records which partition holds each key or key range"]
          ],
          explain: "Range keeps order and therefore scans. Hash buys even distribution. A directory buys arbitrary placement, which is useful when some keys need special handling."
        },
        {
          type: "mcq",
          q: "A table partitioned by range on a timestamp, where writes always carry the current time, will:",
          choices: [
            "Spread writes evenly across all of the partitions",
            "Send nearly every write to the one partition holding the newest range",
            "Be unable to serve range scans by time at all",
            "Require a directory service in order to route reads"
          ],
          answer: 1,
          explain: "This is the classic monotonic-key hot spot. A common fix is to prefix the key with something that varies, such as a sensor or tenant id, so that the current hour is spread over many partitions."
        },
        {
          type: "truefalse",
          q: "Hash partitioning makes efficient range scans on the partitioning key hard, because adjacent keys land on different partitions.",
          answer: true,
          explain: "Hashing deliberately destroys key locality. That is exactly what evens out the load, and exactly what costs you the sorted scan."
        },
        {
          type: "fill",
          q: "Cassandra-style tables hash the partition key but keep rows sorted by the ____ key within each partition, so scans still work inside one partition.",
          answer: "clustering",
          accept: ["clustering", "clustering key", "cluster"],
          explain: "A compound key gets both properties: the hashed component spreads partitions evenly, and the sorted component preserves range scans locally."
        },
        {
          type: "mcq",
          q: "The main cost of directory-based partitioning is that:",
          choices: [
            "It cannot address more than a few hundred distinct keys",
            "It forbids adding new partitions after the system has launched",
            "It only works when the partitioning key happens to be an integer",
            "The lookup service becomes a critical dependency that must be highly available and kept consistent"
          ],
          answer: 3,
          explain: "You trade a computed placement rule for a stored one. That gives total flexibility, including moving a single noisy tenant, but every request now depends on a map that must be correct, cached, and invalidated."
        },
        {
          type: "truefalse",
          q: "A local, document-partitioned secondary index lets you answer a query on the indexed field by contacting a single partition.",
          answer: false,
          explain: "A local index only covers the documents in its own partition, so a query on that field has to scatter to every partition and gather the results."
        },
        {
          type: "mcq",
          q: "A global, term-partitioned secondary index makes those reads cheaper, but:",
          choices: [
            "A single document write may have to update index entries on several partitions",
            "Range scans over the primary key stop working",
            "The index itself can no longer be replicated",
            "Reads must still contact every partition in the cluster"
          ],
          answer: 0,
          explain: "The index is partitioned by term rather than by document, so one write touches whichever partitions own its terms. That usually pushes the index update into an asynchronous path."
        }
      ]
    },
    {
      id: "l46",
      title: "Consistent hashing",
      intro: "A placement scheme where adding or removing a node moves only a small fraction of the keys.",
      questions: [
        {
          type: "mcq",
          q: "Keys are placed with hash(key) mod N. The cluster grows from 4 nodes to 5. Roughly what fraction of keys now map to a different node?",
          choices: [
            "About 20 percent",
            "About 50 percent",
            "About 80 percent",
            "None, because the hash values themselves do not change"
          ],
          answer: 2,
          explain: "A key stays put only when h mod 4 equals h mod 5, which happens for 4 out of every 20 hash values. So roughly 80 percent of keys move, which is why mod N is unusable for a growing cluster."
        },
        {
          type: "truefalse",
          q: "Consistent hashing makes node addition free: no keys move at all when a node joins.",
          answer: false,
          explain: "It minimizes movement rather than eliminating it. A joining node has to take over roughly its share of the key space, on the order of K/N keys for K keys and N nodes."
        },
        {
          type: "fill",
          q: "Giving each physical server many positions on the hash ring, known as ____ nodes, smooths out the distribution of keys.",
          answer: "virtual",
          accept: ["virtual", "vnode", "vnodes", "virtual node"],
          explain: "With one token per server the random ring positions give lumpy ownership. Many small tokens per server average out, and they also spread recovery work across many peers."
        },
        {
          type: "order",
          q: "Put a consistent hashing lookup in order.",
          items: [
            "Hash the key to a position on the ring",
            "Walk clockwise from that position to the first node token",
            "Assign the key to the node that owns that token",
            "Place the extra replicas on the next distinct nodes clockwise"
          ],
          explain: "Nothing is stored about individual keys: ownership is computed from the ring, so any node holding the membership list can route without a lookup table."
        },
        {
          type: "mcq",
          q: "Virtual nodes help mainly because:",
          choices: [
            "They cut the number of hash computations needed per lookup",
            "They let the ring use a smaller and faster hash function",
            "They even out lumpy ownership and spread recovery work over many nodes",
            "They remove the need to replicate each key to any other node"
          ],
          answer: 2,
          explain: "When a server dies, its many small ranges are inherited by many different peers, so the rebuild load is shared instead of landing entirely on one unlucky neighbor."
        },
        {
          type: "truefalse",
          q: "When a node leaves a consistent hashing ring, only the keys it owned move, and they go to the nodes that follow it on the ring.",
          answer: true,
          explain: "That containment is the whole point. Every other node keeps the exact same assignments it had before the membership change."
        },
        {
          type: "match",
          q: "Match each term to its correct description.",
          pairs: [
            ["Consistent hashing", "Keys and nodes share a ring, so a membership change moves only a fraction of keys"],
            ["hash(key) mod N", "A placement rule where changing the node count remaps nearly every key"],
            ["Virtual node", "One of many ring tokens owned by a single physical server"]
          ],
          explain: "Consistent hashing comes from Karger and colleagues at MIT in 1997, originally for web caching, and was later popularized for databases by the Amazon Dynamo paper."
        }
      ]
    },
    {
      id: "l47",
      title: "Rebalancing and hot partitions",
      intro: "Moving data between nodes without a stampede, and dealing with the one key that will not spread.",
      questions: [
        {
          type: "mcq",
          q: "Why is hash(key) mod N a poor assignment rule for a cluster that will grow?",
          choices: [
            "Hash functions are too slow to evaluate on every request",
            "Changing N remaps almost every key, forcing a near-total data reshuffle",
            "It cannot produce an even distribution even when N is held fixed",
            "It only works when N happens to be a power of two"
          ],
          answer: 1,
          explain: "Rebalancing should move the minimum amount of data. mod N moves nearly all of it, saturating the network exactly when you are already under pressure."
        },
        {
          type: "match",
          q: "Match each rebalancing strategy to how it works.",
          pairs: [
            ["Fixed number of partitions", "Create far more partitions than nodes up front and move whole partitions around"],
            ["Dynamic partitioning", "Split a partition once it exceeds a size threshold and merge it when it shrinks"],
            ["Partitions proportional to nodes", "Keep a fixed number of partitions per node, so adding a node adds partitions"]
          ],
          explain: "Fixed partitioning is simple but requires guessing the eventual scale. Dynamic partitioning adapts to the data volume, which matters when a dataset starts tiny and grows unevenly."
        },
        {
          type: "truefalse",
          q: "Fully automatic rebalancing combined with automatic failure detection can turn an overloaded node into a cascading outage.",
          answer: true,
          explain: "A slow but healthy node gets declared dead, its data is moved, and the extra transfer traffic slows its neighbors until they are declared dead too. Keeping a human in the loop for rebalancing is the usual mitigation."
        },
        {
          type: "fill",
          q: "One scorching-hot key can be spread over several partitions by appending a small random ____ to it.",
          answer: "suffix",
          accept: ["suffix", "suffixes", "salt", "salt value"],
          explain: "Two random digits turn one key into a hundred keys spread across partitions. It is a targeted fix, usually applied only to the handful of keys known to be hot."
        },
        {
          type: "mcq",
          q: "The cost of splitting a hot key with random suffixes is that:",
          choices: [
            "Writes to that key stop being durable",
            "The key can no longer be hashed at all",
            "Reads must query every suffix variant and combine the results",
            "The partition map has to be rebuilt on each write"
          ],
          answer: 2,
          explain: "You moved work from the write path to the read path, and you now have to track which keys were split. That bookkeeping is why this is a targeted fix and not a default."
        },
        {
          type: "order",
          q: "Put the steps of a dynamic partition split in order.",
          items: [
            "A partition grows past its configured size threshold",
            "The partition splits into two partitions of roughly equal size",
            "One of the two halves is transferred to another node",
            "The routing metadata is updated so that clients find the moved half"
          ],
          explain: "The metadata update comes last so that the old location keeps serving until the new one is ready, which is how the cluster keeps answering during a rebalance."
        },
        {
          type: "truefalse",
          q: "Hash partitioning removes hot spots entirely, because the hash spreads load evenly.",
          answer: false,
          explain: "Hashing evens out the distribution of distinct keys, but all requests for one key still hash to one partition. A celebrity account or a viral post remains a hot spot."
        }
      ]
    },
    {
      id: "l48",
      title: "Routing a request to the right shard",
      intro: "Someone has to know which node holds the key, and where that knowledge lives is a real design decision.",
      questions: [
        {
          type: "mcq",
          q: "Two common request-routing designs are a routing tier and a partition-aware client. The third is:",
          choices: [
            "Letting the client contact any node, which forwards the request to the node that owns the key",
            "Broadcasting every request to all nodes and taking whichever answer arrives first",
            "Having each node store the whole dataset so that routing is unnecessary",
            "Sending every request through the leader of the largest partition"
          ],
          answer: 0,
          explain: "Any-node forwarding is what gossip-based systems such as Cassandra and Riak do. All three designs need the same thing underneath: an agreed, current map of which node owns which partition."
        },
        {
          type: "match",
          q: "Match each routing design to where the partition knowledge lives.",
          pairs: [
            ["Routing tier", "A separate proxy that clients call, which forwards each request to the right partition"],
            ["Any-node forwarding", "Any node accepts the request and passes it on if it does not own the key"],
            ["Partition-aware client", "The client library itself holds the map and connects straight to the owning node"]
          ],
          explain: "The trade is one network hop against one more moving part. A partition-aware client is fastest but pushes upgrade and cache-invalidation problems into every application."
        },
        {
          type: "fill",
          q: "Clusters often keep the authoritative partition map in a coordination service such as ZooKeeper or ____.",
          answer: "etcd",
          accept: ["etcd", "Etcd", "ETCD", "Consul", "consul"],
          explain: "The map is small, rarely written and read by everyone, which is exactly the workload a consensus-backed coordination service is built for. Subscribers get notified when it changes."
        },
        {
          type: "truefalse",
          q: "A client that caches the partition map must be able to detect a wrong-shard response and refresh its copy.",
          answer: true,
          explain: "Any cached map goes stale the moment a rebalance happens. The standard pattern is that the node replies with a not-mine error and the client refetches the map and retries."
        },
        {
          type: "mcq",
          q: "A query that does not include the partition key forces the system to:",
          choices: [
            "Reject the query outright, in every partitioned system",
            "Fan the query out to every partition and merge the results",
            "Promote a new leader for the affected partition",
            "Rebuild the secondary index before it can answer"
          ],
          answer: 1,
          explain: "Scatter-gather works but its latency is set by the slowest partition, and it does not get cheaper as you add shards. Choosing a partition key that matches your dominant query is how you avoid it."
        },
        {
          type: "order",
          q: "Put the steps of routing a request in order.",
          items: [
            "The client sends a request that includes the partition key",
            "The router applies the partitioning function to that key",
            "The router looks the resulting partition up in the current partition map",
            "The request is forwarded to the node that currently owns that partition"
          ],
          explain: "The partitioning function is fixed but the map is not: ownership changes on every rebalance, which is why the lookup is a separate step from the hash."
        },
        {
          type: "truefalse",
          q: "Putting the routing logic in a separate proxy tier removes the need to keep the partition map consistent across components.",
          answer: false,
          explain: "It concentrates the map in fewer places, which helps, but the proxies still have to agree with each other and with the storage nodes about who owns what."
        }
      ]
    }
  ]
});
