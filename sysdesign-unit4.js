window.ACADEMY.addUnit("sysdesign", {
  id: "unit-4",
  title: "Storage Engines & NoSQL",
  color: "#eab308",
  icon: "\u{1F9F1}",
  description: "What is under the database, and the families that gave up SQL to get something else.",
  lessons: [
    {
      id: "l25",
      title: "Why NoSQL exists - what relational gave up",
      intro: "The trades that produced the NoSQL families, and what each one actually bought.",
      questions: [
        {
          type: "mcq",
          q: "What did the early NoSQL systems primarily give up in exchange for horizontal scalability?",
          choices: [
            "Durability of committed writes on a single node",
            "The ability to store more than one column per record",
            "Any form of indexing beyond a full table scan",
            "Cross-partition joins and multi-key ACID transactions"
          ],
          answer: 3,
          explain: "Joins and multi-key transactions are cheap on one machine and expensive across many. Dropping them is what let these systems partition data freely across nodes."
        },
        {
          type: "truefalse",
          q: "NoSQL means the system cannot offer any transactional guarantees at all.",
          answer: false,
          explain: "Many NoSQL stores offer single-key or single-partition atomicity, and several modern ones offer full multi-key transactions. The name refers to the departure from the relational model, not to a ban on transactions."
        },
        {
          type: "mcq",
          q: "Which paper originated the leaderless, eventually consistent family of distributed key-value stores?",
          choices: [
            "The Google BigTable paper",
            "The Amazon Dynamo paper (2007)",
            "The Google Spanner paper",
            "The Apache Kafka design paper"
          ],
          answer: 1,
          explain: "Amazon's 2007 Dynamo paper combined consistent hashing with quorum reads and writes and no leader, and it directly shaped Riak, Voldemort, and Cassandra's replication layer."
        },
        {
          type: "fill",
          q: "Google's ____ paper is the origin of the wide-column family later reimplemented by HBase and Cassandra.",
          answer: "BigTable",
          accept: ["BigTable", "bigtable", "Bigtable", "big table"],
          explain: "BigTable described a sparse, sorted, multidimensional map over row key, column family, column, and timestamp - the shape that wide-column stores still use."
        },
        {
          type: "match",
          q: "Match each NoSQL family to the shape of data it is built around.",
          pairs: [
            ["Key-value store", "An opaque value retrieved only by its exact key"],
            ["Document store", "A self-describing nested record queryable by inner fields"],
            ["Wide-column store", "Rows partitioned by key with sorted columns inside each partition"]
          ],
          explain: "Each family is defined by what the engine understands about the value: nothing, its internal structure, or its sorted column layout."
        },
        {
          type: "truefalse",
          q: "Schemaless in a document store usually means schema-on-read rather than the absence of a schema.",
          answer: true,
          explain: "The application still assumes a shape; the difference is that the shape is enforced by the reading code instead of declared and validated by the database at write time."
        },
        {
          type: "mcq",
          q: "A team migrates to a NoSQL store hoping to avoid schema migrations entirely. What actually happens?",
          choices: [
            "Old and new record shapes coexist, and the application must handle both",
            "The database silently rewrites old records to match the new code",
            "Reads of old records fail until an explicit migration is run",
            "The engine refuses writes whose shape differs from existing records"
          ],
          answer: 0,
          explain: "Dropping declared schemas does not delete history. The migration cost moves out of a DDL statement and into branching code paths or a background backfill."
        }
      ]
    },
    {
      id: "l26",
      title: "Key-value stores",
      intro: "The simplest datastore contract, and what that simplicity buys and forbids.",
      questions: [
        {
          type: "mcq",
          q: "Why can a pure key-value store partition data across nodes so easily?",
          choices: [
            "It keeps a complete copy of all data on every node",
            "Every operation names exactly one key, so routing is a hash of that key",
            "It stores keys in sorted order, which makes ranges contiguous",
            "It defers all writes until a global coordinator approves them"
          ],
          answer: 1,
          explain: "With no query touching more than one key, the router only needs the key to pick a node. Nothing forces two nodes to cooperate on a single request."
        },
        {
          type: "truefalse",
          q: "A hash-partitioned key-value store can efficiently answer a query for all keys between customer:1000 and customer:2000.",
          answer: false,
          explain: "Hashing deliberately scatters adjacent keys across nodes, so a range query becomes a scan of every partition. Range scans need range partitioning or a sorted key structure."
        },
        {
          type: "fill",
          q: "Dynamo-style key-value stores place both keys and nodes on a ring using ____ hashing so that adding a node moves only a small fraction of keys.",
          answer: "consistent",
          accept: ["consistent", "Consistent", "consistent hashing"],
          explain: "With plain modulo hashing, changing the node count remaps almost every key. Consistent hashing bounds the movement to roughly one node's share."
        },
        {
          type: "mcq",
          q: "In a Dynamo-style store with N=3 replicas, which quorum setting guarantees a read sees the latest acknowledged write?",
          choices: [
            "W=1 and R=1, because the coordinator always has the newest copy",
            "W=2 and R=2, because W + R is greater than N",
            "W=1 and R=2, because reading two replicas is already a majority",
            "Any setting, because replication is synchronous by definition"
          ],
          answer: 1,
          explain: "When W + R > N the write set and read set must overlap in at least one replica, so the reader is guaranteed to see the newest value. W=1,R=2 sums to exactly N, which permits a read set that misses the one replica that took the write."
        },
        {
          type: "match",
          q: "Match each key-value concept to what it does.",
          pairs: [
            ["Hinted handoff", "A temporary replica accepts a write for a node that is down"],
            ["Vector clock", "Detects whether two versions are causally related or concurrent"],
            ["Read repair", "Pushes the newest value back to stale replicas during a read"]
          ],
          explain: "These are the three anti-entropy mechanisms that let a leaderless store stay writable during failures and converge afterward."
        },
        {
          type: "truefalse",
          q: "Using a cache like Redis as the only store for session data is safe as long as the cache never runs out of memory.",
          answer: false,
          explain: "Memory pressure is not the only failure mode: process restarts, evictions, and gaps between persistence snapshots can lose data. Treat an in-memory store as durable only if you have configured and tested its persistence."
        },
        {
          type: "mcq",
          q: "An application needs to store a 4 MB rendered PDF against a user id in a key-value store. What is the main concern?",
          choices: [
            "Key-value stores cannot store binary values at all",
            "Large values inflate replication traffic, memory, and tail latency per operation",
            "The key would need to be a compound key, which is not supported",
            "Values over 1 KB always require a secondary index to retrieve"
          ],
          answer: 1,
          explain: "Every replica must carry and ship the whole value on each write, so multi-megabyte values crowd out small hot keys. Blob storage with a key-value pointer is the normal answer."
        }
      ]
    },
    {
      id: "l27",
      title: "Document stores",
      intro: "Storing self-describing records, and the locality argument for and against them.",
      questions: [
        {
          type: "mcq",
          q: "What is the core storage advantage of keeping a nested document as one record?",
          choices: [
            "Locality - one read fetches the whole object with no joins",
            "It guarantees the document is always smaller than the equivalent rows",
            "It removes the need for any index on the collection",
            "It makes every field update atomic across multiple documents"
          ],
          answer: 0,
          explain: "If your access pattern always loads the entire object, storing it contiguously turns several joined reads into one. That advantage disappears when you usually need only a slice of it."
        },
        {
          type: "truefalse",
          q: "Updating one small field of a large document can require the engine to rewrite the entire document.",
          answer: true,
          explain: "Many document engines store the record contiguously, so a size-changing update relocates and rewrites it. This is why unbounded arrays inside a document are a known anti-pattern."
        },
        {
          type: "mcq",
          q: "When is embedding a related collection inside a parent document the wrong choice?",
          choices: [
            "When the child records are always read together with the parent",
            "When the child records number in the low single digits",
            "When the child collection grows without bound or is shared by many parents",
            "When the parent document is read far more often than it is written"
          ],
          answer: 2,
          explain: "Unbounded growth pushes the document toward size limits and rewrite costs, and shared children get duplicated into every parent, which creates an update fan-out problem."
        },
        {
          type: "fill",
          q: "Rather than joining, document stores often ____ shared data into each document, trading write cost and consistency for read locality.",
          answer: "denormalize",
          accept: ["denormalize", "denormalise", "duplicate", "denormalizing"],
          explain: "Denormalization is the standard document modeling move: you accept that one logical fact lives in many places and that updating it is now a fan-out job."
        },
        {
          type: "order",
          q: "Order these steps for modeling data in a document store, from first to last.",
          items: [
            "Enumerate the application's read access patterns",
            "Decide which relationships to embed and which to reference",
            "Choose the shard key and the indexes that serve those reads",
            "Plan how a shape change will be backfilled across old documents"
          ],
          explain: "Document modeling is access-pattern-first, unlike relational modeling which starts from normalized entities and lets the query planner adapt."
        },
        {
          type: "truefalse",
          q: "A document store cannot index a field nested inside an array of subdocuments.",
          answer: false,
          explain: "Mainstream document engines index nested and array paths, generating one index entry per array element. Query capability is not the reason to avoid deep nesting - rewrite cost is."
        },
        {
          type: "mcq",
          q: "An analytics query needs to sum one numeric field across every document in a large collection. Why is a document store often a poor fit?",
          choices: [
            "Document stores cannot express aggregation queries",
            "The engine reads whole documents, so it pays for every unrelated field",
            "Numeric fields are stored as strings and must be parsed",
            "Aggregations always require a full table lock while running"
          ],
          answer: 1,
          explain: "Row-oriented or document-oriented layouts make you pay I/O for fields you did not ask for. Columnar storage exists precisely to avoid that for wide scans."
        }
      ]
    },
    {
      id: "l28",
      title: "Wide-column stores",
      intro: "Partition keys, clustering keys, and why the query is designed before the table.",
      questions: [
        {
          type: "mcq",
          q: "In a wide-column store, what does the partition key determine?",
          choices: [
            "The sort order of rows inside a partition",
            "Which node or nodes hold the data, and the unit of single-request locality",
            "Which columns are stored on disk versus computed at read time",
            "The replication factor applied to that specific row"
          ],
          answer: 1,
          explain: "The partition key is hashed to place data. All rows sharing a partition key live together, which is why a query that names it can be served by one replica set."
        },
        {
          type: "fill",
          q: "Within a partition, the ____ key defines the on-disk sort order of rows, which is what makes range slices cheap.",
          answer: "clustering",
          accept: ["clustering", "cluster", "clustering column", "sort"],
          explain: "Sorted-within-partition layout is the whole point: a time-series read for one device over a date range becomes a contiguous scan."
        },
        {
          type: "truefalse",
          q: "In wide-column modeling it is normal to write the same fact into several tables, each shaped for a different query.",
          answer: true,
          explain: "Query-first modeling means one table per access pattern. Duplication at write time replaces the ad hoc joins a relational planner would have done at read time."
        },
        {
          type: "mcq",
          q: "What is a hot partition, and why does it hurt?",
          choices: [
            "A partition cached in memory, which starves other partitions of cache",
            "A partition being compacted, which blocks all reads to the cluster",
            "A partition whose replicas disagree, forcing a repair on every read",
            "A partition key with far more traffic or data than others, so one node saturates"
          ],
          answer: 3,
          explain: "Partitioning only distributes load if the key distributes load. A key like the current day or a single tenant id funnels the whole cluster's traffic into one replica set."
        },
        {
          type: "match",
          q: "Match each wide-column term to its meaning.",
          pairs: [
            ["Column family", "A named group of columns stored and configured together"],
            ["Tombstone", "A marker recording that a value was deleted"],
            ["Compaction", "Merging on-disk files to discard superseded and deleted data"]
          ],
          explain: "Deletes in these engines are writes, not erasures, so the tombstone plus compaction pair is what actually reclaims the space."
        },
        {
          type: "mcq",
          q: "A wide-column table is keyed by device_id as partition key and timestamp as clustering key. Which query is efficient?",
          choices: [
            "All readings for one device between two timestamps",
            "All readings across all devices in the last hour",
            "The device with the highest reading anywhere in the table",
            "All devices whose model name starts with a given prefix"
          ],
          answer: 0,
          explain: "Only the first query names the partition key and then slices a sorted range. The others require touching every partition, which is a full cluster scan."
        },
        {
          type: "truefalse",
          q: "Adding a secondary index to a wide-column store makes any arbitrary column as efficient to query as the partition key.",
          answer: false,
          explain: "A local secondary index still has to be consulted on every partition unless the query also names the partition key, so it can degrade into a scatter-gather across the cluster."
        }
      ]
    },
    {
      id: "l29",
      title: "B-tree vs LSM-tree: the fundamental write trade",
      intro: "The single most useful storage-engine distinction, and which direction each amplification runs.",
      questions: [
        {
          type: "mcq",
          q: "Which statement correctly states the trade between the two index structures?",
          choices: [
            "B-trees are write-optimized and pay read amplification; LSM-trees are the reverse",
            "LSM-trees are write-optimized and pay read amplification; B-trees are read-optimized and pay write amplification",
            "Both are read-optimized, but LSM-trees use less disk space",
            "B-trees avoid amplification entirely because they update pages in place"
          ],
          answer: 1,
          explain: "LSM-trees turn writes into sequential appends and defer the sorting work to compaction, so a read may consult several files. B-trees keep one authoritative sorted structure, so reads are direct but writes rewrite whole pages."
        },
        {
          type: "truefalse",
          q: "Postgres and MySQL InnoDB use B-tree storage engines, while RocksDB, LevelDB, and Cassandra use LSM-trees.",
          answer: true,
          explain: "This split is a reliable memory anchor: the classic relational engines are B-tree based, and the modern embedded and wide-column write-heavy engines are LSM based."
        },
        {
          type: "fill",
          q: "An LSM-tree buffers writes in an in-memory sorted structure called the ____ before flushing it to an immutable on-disk file.",
          answer: "memtable",
          accept: ["memtable", "mem table", "MemTable", "memtables"],
          explain: "The memtable absorbs random writes in memory so the disk only ever sees a large sequential flush, which is where the write advantage comes from."
        },
        {
          type: "order",
          q: "Order the life of a single write in an LSM-tree engine.",
          items: [
            "Append the record to the write-ahead log",
            "Insert it into the in-memory memtable",
            "Flush the full memtable to an immutable sorted file on disk",
            "Merge that file with others during compaction"
          ],
          explain: "The log comes first so a crash before the flush is recoverable, and compaction later reclaims space from overwritten and deleted keys."
        },
        {
          type: "mcq",
          q: "Why does an LSM-tree engine keep a Bloom filter per on-disk file?",
          choices: [
            "To compress the file so it occupies less disk space",
            "To cheaply rule out files that definitely do not contain a key",
            "To guarantee the key exists before returning it to the client",
            "To order the files so compaction can merge them in sequence"
          ],
          answer: 1,
          explain: "A Bloom filter can produce false positives but never false negatives, so a negative answer safely skips a disk read. That is what keeps read amplification manageable."
        },
        {
          type: "match",
          q: "Match each amplification term to what it measures.",
          pairs: [
            ["Write amplification", "Bytes actually written to storage per byte of user data"],
            ["Read amplification", "Storage reads performed to satisfy one logical lookup"],
            ["Space amplification", "Disk occupied relative to the size of the live data"]
          ],
          explain: "Every storage engine picks a point in this three-way trade; you cannot minimize all three at once."
        },
        {
          type: "mcq",
          q: "A workload is overwhelmingly appends of new time-series rows with occasional point lookups. Which engine fits better and why?",
          choices: [
            "A B-tree, because appends land at the rightmost leaf with no page splits",
            "A B-tree, because point lookups dominate the total cost of the workload",
            "An LSM-tree, because writes become sequential flushes and lookups are filtered by Bloom filters",
            "Either one, since the structures perform identically on append-heavy loads"
          ],
          answer: 2,
          explain: "Write-dominated workloads reward the LSM's sequential-write path, and Bloom filters keep the occasional point read cheap enough that the read penalty rarely bites."
        }
      ]
    },
    {
      id: "l30",
      title: "Write-ahead logs and how durability really works",
      intro: "Why the log is written before the page, and what fsync actually guarantees.",
      questions: [
        {
          type: "mcq",
          q: "What is the write-ahead rule?",
          choices: [
            "The data page must reach disk before its log record does",
            "The log record must reach durable storage before the corresponding data page is modified on disk",
            "The log and the page must be written in the same atomic disk operation",
            "The log may be written at any time as long as it is written within the same transaction"
          ],
          answer: 1,
          explain: "If the log is durable first, a crash mid-update can be repaired by replaying the log. If the page went first, a torn or partial page would have no record describing the intended state."
        },
        {
          type: "truefalse",
          q: "A successful write() system call means the data is safely on durable storage.",
          answer: false,
          explain: "write() usually only copies into the OS page cache. Durability requires fsync (or an equivalent flush) to return successfully, and the device's own write cache must honor it."
        },
        {
          type: "fill",
          q: "After a crash, recovery replays the log forward to redo committed changes and applies ____ to undo the effects of transactions that never committed.",
          answer: "undo",
          accept: ["undo", "rollback", "undo records", "undo logging"],
          explain: "ARIES-style recovery is analysis, then redo to reconstruct the exact pre-crash state, then undo of the losers. Redo alone would leave partial transactions applied."
        },
        {
          type: "order",
          q: "Order what a durable engine does when committing a transaction.",
          items: [
            "Append the change records to the in-memory log buffer",
            "Flush the log buffer to durable storage",
            "Acknowledge the commit to the client",
            "Write the modified data pages to their final location later"
          ],
          explain: "The client is told commit only after the log is durable; the actual pages can be written lazily because the log can always reconstruct them."
        },
        {
          type: "mcq",
          q: "Why does an engine take periodic checkpoints?",
          choices: [
            "To bound how much log must be replayed after a crash",
            "To compress the log so it takes less disk space",
            "To verify checksums on every page in the database",
            "To promote a replica if the primary has failed"
          ],
          answer: 0,
          explain: "A checkpoint records that everything before some log position is already reflected in the data files, so recovery can start there instead of at the beginning of time."
        },
        {
          type: "truefalse",
          q: "Group commit improves throughput by making a single log flush cover many concurrent transactions.",
          answer: true,
          explain: "The flush is the expensive part, so batching concurrent commits into one flush amortizes it. Each transaction pays a little extra latency for far more throughput."
        },
        {
          type: "match",
          q: "Match each durability mechanism to its purpose.",
          pairs: [
            ["Write-ahead log", "Records intent durably before pages are changed"],
            ["Checkpoint", "Marks a log position from which recovery may safely begin"],
            ["fsync", "Forces buffered data out of the OS cache to the device"]
          ],
          explain: "Durability is a chain: intent logged, flush forced, recovery start point known. A gap anywhere in that chain silently loses acknowledged writes."
        }
      ]
    },
    {
      id: "l31",
      title: "Object/blob storage and when files do not belong in a database",
      intro: "Why large immutable bytes belong in object storage, and how to wire it up safely.",
      questions: [
        {
          type: "mcq",
          q: "What is the main cost of storing large binaries as rows in a relational database?",
          choices: [
            "Relational engines cannot store binary data types",
            "Blobs bloat the pages, backups, replication stream, and buffer cache that queries depend on",
            "Blobs prevent the database from taking any transaction locks",
            "Blob columns can never be indexed, which breaks the primary key"
          ],
          answer: 1,
          explain: "Every byte in the database is a byte that gets replicated, backed up, restored, and cached. Multi-megabyte blobs crowd out the working set that queries actually need."
        },
        {
          type: "truefalse",
          q: "The standard pattern is to store the object bytes in blob storage and the metadata plus a key or URL in the database.",
          answer: true,
          explain: "This keeps the transactional store small and queryable while the bytes live where bandwidth and capacity are cheap. It also means uploads and downloads bypass the application server."
        },
        {
          type: "fill",
          q: "A time-limited ____ URL lets a client upload or download directly from object storage without the bytes flowing through your application server.",
          answer: "presigned",
          accept: ["presigned", "pre-signed", "signed", "presigned url", "pre-signed url"],
          explain: "Presigning moves the transfer off your servers while keeping the bucket private, since the credential is embedded in the URL and expires."
        },
        {
          type: "mcq",
          q: "Object storage is usually described as flat. What does that mean in practice?",
          choices: [
            "All objects must be the same size to be stored efficiently",
            "Objects are stored without any metadata beyond their bytes",
            "Only one level of nesting is permitted inside a bucket",
            "There are no real directories - key prefixes only simulate a folder hierarchy"
          ],
          answer: 3,
          explain: "A bucket maps keys to objects. Slashes in a key are a display convention, which is why renaming a prefix means copying every object under it."
        },
        {
          type: "truefalse",
          q: "Because object storage has no transactions with your database, a naive delete flow can leave orphaned objects or dangling rows.",
          answer: true,
          explain: "Two systems, no shared commit. The usual fix is to upload the bytes first and commit the metadata row only after it succeeds, so a failure leaves an orphaned object rather than a row pointing at nothing, then sweep orphans in the background."
        },
        {
          type: "match",
          q: "Match each storage type to the access pattern it is built for.",
          pairs: [
            ["Object storage", "Whole immutable objects fetched or replaced by key over HTTP"],
            ["Block storage", "A raw device a single machine formats and does random I/O against"],
            ["File storage", "A shared hierarchical namespace many machines mount at once"]
          ],
          explain: "The distinction is the unit of access: an object, a block, or a file within a mounted tree. Databases want block storage; user uploads want object storage."
        },
        {
          type: "mcq",
          q: "Which workload is the worst fit for object storage?",
          choices: [
            "Serving user-uploaded images through a CDN",
            "Archiving daily log bundles for later batch processing",
            "A database's hot random small-record reads and in-place updates",
            "Storing model checkpoints written once and read many times"
          ],
          answer: 2,
          explain: "Object storage has high per-request latency and replaces whole objects rather than patching bytes, which is exactly the opposite of what a hot transactional working set needs."
        }
      ]
    },
    {
      id: "l32",
      title: "Choosing a datastore for a given access pattern",
      intro: "Turning read and write patterns into a defensible storage decision.",
      questions: [
        {
          type: "order",
          q: "Order the steps of choosing a datastore, from first to last.",
          items: [
            "Write down the concrete read and write access patterns",
            "Estimate data volume, write rate, and required latency",
            "Decide what consistency and operational burden you can accept",
            "Match those requirements to a storage engine and partitioning scheme"
          ],
          explain: "Gather every requirement first - patterns, then numbers, then the consistency and operations you can live with - and only then pick an engine. Starting from a product name instead of the requirements is what makes a choice indefensible."
        },
        {
          type: "mcq",
          q: "A service must run ad hoc joins across several entities with strong multi-row transactions and moderate volume. What should you reach for first?",
          choices: [
            "A leaderless key-value store with tunable quorums",
            "A single relational database, scaled up before it is scaled out",
            "A wide-column store with one table per access pattern",
            "Object storage with a search index layered on top"
          ],
          answer: 1,
          explain: "That is exactly the workload relational engines were built for, and a single node handles far more than most teams assume. Distribute only when a measured limit forces it."
        },
        {
          type: "truefalse",
          q: "Polyglot persistence means using different stores for different workloads, and its main cost is operational and consistency complexity.",
          answer: true,
          explain: "Each additional store adds backups, monitoring, failure modes, and a boundary where data can disagree. The fit has to be worth that recurring cost."
        },
        {
          type: "mcq",
          q: "Which pattern most strongly points toward an LSM-based store instead of a B-tree relational one?",
          choices: [
            "Heavy sustained ingest of immutable events with known-key reads",
            "Frequent small in-place updates to a modest number of rows",
            "Complex reporting joins over normalized reference tables",
            "Low write volume with strict cross-entity transactional needs"
          ],
          answer: 0,
          explain: "Sustained ingest is the LSM's home ground: writes become sequential flushes. The other three all favor the in-place, join-capable B-tree relational engine."
        },
        {
          type: "fill",
          q: "Before adding a second datastore, check whether the existing one can serve the pattern with a new ____ , since that is far cheaper than a migration.",
          answer: "index",
          accept: ["index", "indexes", "indices", "secondary index"],
          explain: "Many so-called scaling problems are missing-index problems. Exhausting the cheap fixes first is part of making the eventual migration credible."
        },
        {
          type: "match",
          q: "Match each access pattern to the storage family that fits it best.",
          pairs: [
            ["Read one whole nested object by id, no joins", "Document store"],
            ["Slice a sorted time range within one known partition", "Wide-column store"],
            ["Fetch and replace multi-megabyte immutable files", "Object storage"]
          ],
          explain: "Each family maps to a distinct shape of request: whole record by id, sorted range within a partition, or whole blob by key."
        },
        {
          type: "truefalse",
          q: "If a datastore choice cannot be justified by a specific read or write pattern, popularity or team familiarity is an invalid tiebreaker.",
          answer: false,
          explain: "When the technical requirements genuinely do not discriminate, operational familiarity is a legitimate and often decisive factor - the risk of running an unfamiliar system is real."
        }
      ]
    }
  ]
});
