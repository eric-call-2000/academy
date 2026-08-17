window.ACADEMY.addUnit("sysdesign", {
  id: "unit-17",
  title: "Case Studies III: Heavy Data & Money",
  color: "#eab308",
  icon: "\u{1F4BE}",
  description: "Big objects, and the systems where being wrong costs actual dollars.",
  lessons: [
    {
      id: "l129",
      title: "Design a file storage and sync service",
      intro: "How a Dropbox-style service splits metadata from bytes and keeps many devices in agreement.",
      questions: [
        {
          type: "mcq",
          q: "In a Dropbox-style sync service, why is file metadata kept in a separate service from the file bytes?",
          choices: [
            "Because blob stores cannot durably store data without a database in front of them",
            "Because metadata is small, transactional, and queried constantly, while bytes are large, immutable, and best served directly from object storage",
            "Because object storage cannot accept writes larger than a single database row",
            "Because metadata must be encrypted and file bytes legally cannot be"
          ],
          answer: 1,
          explain: "Metadata needs transactions, indexes, and frequent small reads; bulk bytes need cheap durable capacity and direct client transfer. Splitting them lets each use the right storage engine."
        },
        {
          type: "truefalse",
          q: "Clients uploading a large file should stream the bytes through the metadata API server so it can validate them.",
          answer: false,
          explain: "Proxying gigabytes through your API tier wastes bandwidth and couples uptime to transfer load. The normal pattern is a pre-signed URL so the client sends bytes straight to object storage."
        },
        {
          type: "order",
          q: "Order the steps of a typical client-side upload of a new file.",
          items: [
            "Client asks the metadata service to start an upload and gets a pre-signed destination",
            "Client uploads the bytes directly to object storage",
            "Client commits the upload, and the metadata service records a new file version",
            "Metadata service notifies the user's other devices that a new version exists"
          ],
          explain: "Bytes go direct to storage; the metadata service brackets the transfer with a start and a commit so a half-finished upload is never visible as a version."
        },
        {
          type: "fill",
          q: "Rather than pushing every change over polling, sync clients usually hold a long-lived ____ connection so the server can notify them of changes with low latency.",
          answer: "websocket",
          accept: ["websocket", "web socket", "websockets", "socket", "long poll", "long-poll", "long polling", "push", "persistent"],
          explain: "A persistent connection (commonly a WebSocket or long poll) lets the server push change notifications instead of every client polling on a timer."
        },
        {
          type: "mcq",
          q: "Two devices edit the same file offline and both sync. What does a mainstream file sync service usually do?",
          choices: [
            "Silently keep the write with the later wall-clock timestamp and drop the other",
            "Refuse both writes and require the user to delete the file first",
            "Automatically merge the two byte streams using a three-way diff",
            "Keep both, storing one as a conflicted copy so no user data is lost"
          ],
          answer: 3,
          explain: "General binary files cannot be safely auto-merged, and last-writer-wins destroys work. Creating a conflicted copy is the conservative choice that preserves both edits."
        },
        {
          type: "truefalse",
          q: "Treating file versions as immutable makes sharing, history, and cache invalidation simpler because a given version identifier always maps to the same bytes.",
          answer: true,
          explain: "Immutable versions mean a URL or identifier is safe to cache forever, and history is just a list of versions rather than a reconstruction of overwrites."
        },
        {
          type: "match",
          q: "Match each sync component to its responsibility.",
          pairs: [
            ["Metadata service", "Stores the namespace, versions, and permissions in a transactional database"],
            ["Block store", "Holds immutable file content addressed by identifier"],
            ["Notification service", "Tells connected devices that their view of the namespace is stale"]
          ],
          explain: "Each layer has one job: the namespace and its transactions, the durable bytes, and the change signal that triggers clients to reconcile."
        }
      ]
    },
    {
      id: "l130",
      title: "Chunking, deduplication, and delta sync",
      intro: "Why naming a chunk by its hash gives you dedup, resumable upload, and delta sync at once.",
      questions: [
        {
          type: "fill",
          q: "Naming a chunk by the cryptographic hash of its bytes is called ____ storage, and it gives dedup, resume, and delta sync essentially for free.",
          answer: "content-addressed",
          accept: ["content-addressed", "content addressed", "content-addressable", "content addressable"],
          explain: "If the name is derived from the content, identical content collapses to one name, and asking whether a chunk exists is a lookup by that name."
        },
        {
          type: "mcq",
          q: "A user edits one paragraph in the middle of a large document and re-syncs. With content-addressed chunking, what does the client actually upload?",
          choices: [
            "Only the chunks whose hashes the server does not already have",
            "The whole file again, because the file hash changed",
            "A byte-range patch computed by the server against the previous version",
            "Nothing, because the file identifier is unchanged"
          ],
          answer: 0,
          explain: "The client hashes each chunk, asks the server which hashes are missing, and sends only those. That is delta sync, and it falls out of chunk-level content addressing."
        },
        {
          type: "truefalse",
          q: "Fixed-size chunking handles a byte inserted at the start of a file just as efficiently as content-defined chunking does.",
          answer: false,
          explain: "A single inserted byte shifts every subsequent fixed-size boundary, so every chunk hash changes. Content-defined boundaries chosen from a rolling hash of the data resynchronize after the edit."
        },
        {
          type: "mcq",
          q: "Content-defined chunking uses a rolling hash over a sliding window to place chunk boundaries. What is the point of choosing boundaries from the data itself?",
          choices: [
            "It guarantees every chunk is exactly the target size",
            "It lets the boundaries move with the content, so an insertion only disturbs the chunks around it",
            "It makes the chunk hashes shorter and cheaper to index",
            "It removes the need to hash chunk contents at all"
          ],
          answer: 1,
          explain: "Boundaries anchored to content patterns shift along with the content, so an insert or delete perturbs a local region instead of invalidating the whole rest of the file."
        },
        {
          type: "order",
          q: "Order the steps of a delta upload from a client.",
          items: [
            "Split the local file into content-defined chunks",
            "Hash each chunk to get its content address",
            "Ask the server which of those hashes it is missing",
            "Upload only the missing chunks, then commit the chunk list as a new version"
          ],
          explain: "The version is just an ordered list of chunk hashes, so committing it is cheap once the missing bytes are present."
        },
        {
          type: "match",
          q: "Match each deduplication scope to what it means.",
          pairs: [
            ["Global dedup", "One copy of a chunk is kept even if unrelated accounts uploaded it"],
            ["Per-user dedup", "Duplicate chunks collapse only within a single account boundary"],
            ["No dedup", "Every upload stores its own independent copy of the bytes"]
          ],
          explain: "Global dedup saves the most space but leaks an existence signal across accounts, which is why some services deliberately scope dedup per user."
        },
        {
          type: "truefalse",
          q: "Because chunks are immutable and named by hash, deleting a file cannot simply delete its chunks; the system needs reference counting or garbage collection.",
          answer: true,
          explain: "A chunk may be shared by many files or versions, so removal has to be driven by reachability or a reference count, not by any single file deletion."
        }
      ]
    },
    {
      id: "l131",
      title: "Video upload and the transcoding pipeline",
      intro: "Turning one uploaded master file into a ladder of renditions without blocking the uploader.",
      questions: [
        {
          type: "order",
          q: "Order the stages of a standard video ingest pipeline.",
          items: [
            "Client uploads the source file to blob storage",
            "A job is enqueued describing the transcode work",
            "Workers transcode the source into a ladder of renditions",
            "Renditions are packaged into segments and a manifest, then served via CDN"
          ],
          explain: "Upload, enqueue, transcode, package, deliver. Keeping transcode asynchronous means the upload request returns as soon as the bytes land."
        },
        {
          type: "mcq",
          q: "Why is transcoding run asynchronously off a queue instead of inside the upload request?",
          choices: [
            "Because HTTP forbids requests that take more than sixty seconds",
            "Because transcoding is CPU-heavy and unbounded in duration, so it needs its own retryable, independently scalable worker pool",
            "Because blob storage cannot be read by more than one process at a time",
            "Because the encoded output must exist before the source can be stored"
          ],
          answer: 1,
          explain: "Transcode time scales with video length and rendition count. A queue decouples it from the request, allows retries, and lets the worker fleet scale on its own."
        },
        {
          type: "fill",
          q: "The set of renditions produced at different resolutions and bitrates from one source is called the bitrate ____.",
          answer: "ladder",
          accept: ["ladder", "ladders", "encoding ladder", "bitrate ladder"],
          explain: "The ladder is the rungs a player can climb between, from a low-bitrate rendition for poor networks up to full quality."
        },
        {
          type: "truefalse",
          q: "Splitting a long video into segments lets independent workers transcode different parts of the same video in parallel.",
          answer: true,
          explain: "Segment-level parallelism is how large videos finish quickly. Segments must be cut at boundaries that let each piece be decoded independently, then stitched back into a consistent output."
        },
        {
          type: "mcq",
          q: "A transcode worker crashes halfway through a job. What design keeps the pipeline correct?",
          choices: [
            "The queue drops the job so a corrupt rendition is never produced",
            "The uploader is asked to re-upload the source file",
            "The job is redelivered and the work is idempotent, so re-running it overwrites the same deterministic output",
            "The partially written rendition is served with a warning banner"
          ],
          answer: 2,
          explain: "Workers must assume at-least-once delivery. Writing output to a deterministic key and only publishing on completion makes a retry harmless."
        },
        {
          type: "match",
          q: "Match each pipeline artifact to what it is.",
          pairs: [
            ["Mezzanine", "A high-quality intermediate copy of the source that renditions are encoded from"],
            ["Rendition", "One resolution and bitrate variant of the video"],
            ["Manifest", "The text file listing available variants and their segment URLs"]
          ],
          explain: "The mezzanine normalizes wildly varied uploads into one predictable input, renditions are the ladder rungs, and the manifest is what the player reads first."
        },
        {
          type: "mcq",
          q: "What should the API return immediately after a video upload completes, before transcoding finishes?",
          choices: [
            "A blocking response held open until the first rendition is ready",
            "A video record in a pending or processing state, with status observable later",
            "A 500 error, since the video is not yet playable",
            "The manifest URL, which will begin working once encoding catches up"
          ],
          answer: 1,
          explain: "An explicit state machine on the video record - uploaded, processing, ready, failed - lets the client show progress and lets the backend retry without ambiguity."
        }
      ]
    },
    {
      id: "l132",
      title: "Streaming delivery and adaptive bitrate",
      intro: "How segmented delivery and a client-side rate decision keep playback smooth on a bad network.",
      questions: [
        {
          type: "mcq",
          q: "In adaptive bitrate streaming, who decides which rendition to play for the next segment?",
          choices: [
            "The origin server, based on the account tier",
            "The CDN edge node, based on its cache contents",
            "The client player, based on measured throughput and buffer level",
            "A control service that pushes rate changes over a side channel"
          ],
          answer: 2,
          explain: "ABR is a client-side decision. The player measures download speed and buffer occupancy and picks the next segment variant itself, which is why it can react within a segment or two."
        },
        {
          type: "truefalse",
          q: "Because ABR segments are short, immutable files, they are extremely CDN-friendly and can be cached aggressively at the edge.",
          answer: true,
          explain: "Each segment has a stable URL and never changes, so edge caches serve most requests without touching the origin. Only manifests for live streams need short cache lifetimes."
        },
        {
          type: "fill",
          q: "HLS and DASH both work by delivering short media segments plus a ____ that lists the available variants and segment URLs.",
          answer: "manifest",
          accept: ["manifest", "manifests", "playlist", "mpd"],
          explain: "HLS calls it an m3u8 playlist and DASH calls it an MPD, but both are the index the player fetches before requesting any media."
        },
        {
          type: "mcq",
          q: "A player is on a stable connection but its buffer suddenly drains during a scene change. What is the safest ABR response?",
          choices: [
            "Step down to a lower rendition to refill the buffer, then step back up if throughput holds",
            "Immediately jump to the lowest rendition and stay there for the session",
            "Keep the current rendition and let the buffer run dry, since throughput is stable",
            "Request the same segment from a second CDN in parallel at the same bitrate"
          ],
          answer: 0,
          explain: "Buffer level is a first-class ABR signal, not just throughput. Dropping a rung rebuilds headroom; a cautious ramp back up avoids oscillating between qualities."
        },
        {
          type: "truefalse",
          q: "For adaptive switching to work, the renditions must be encoded with aligned segment boundaries and keyframes at segment starts.",
          answer: true,
          explain: "The player switches variants at segment boundaries, so every rendition must start each segment with an independently decodable frame at the same timeline position."
        },
        {
          type: "match",
          q: "Match each streaming term to its meaning.",
          pairs: [
            ["Segment", "A few seconds of media in its own independently fetchable file"],
            ["Variant", "The same content encoded at a different resolution or bitrate"],
            ["Startup latency", "Time from pressing play to the first frame appearing"]
          ],
          explain: "Shorter segments cut startup latency and let ABR react faster, but add request overhead and slightly hurt compression efficiency."
        },
        {
          type: "mcq",
          q: "Why does live streaming typically use shorter segments than video on demand?",
          choices: [
            "Because live encoders cannot produce large files fast enough",
            "Because CDNs refuse to cache long segments from live origins",
            "Because segment duration directly bounds how far behind real time a viewer must be",
            "Because live video compresses better in small pieces"
          ],
          answer: 2,
          explain: "A player generally needs a few segments buffered, so glass-to-glass delay scales with segment length. Shorter segments cut latency at the cost of more requests."
        }
      ]
    },
    {
      id: "l133",
      title: "Design a payments ledger (double-entry)",
      intro: "The append-only, always-balanced data model that money systems have used for centuries.",
      questions: [
        {
          type: "mcq",
          q: "What is the defining rule of a double-entry ledger?",
          choices: [
            "Each account row stores both its current and previous balance",
            "Every transaction writes at least two entries whose debits and credits sum to zero",
            "Every transaction is written twice, once to a primary and once to a replica",
            "Each account is recorded in two separate tables for redundancy"
          ],
          answer: 1,
          explain: "Money always moves from somewhere to somewhere. Requiring balanced debits and credits per transaction makes any single-sided mistake structurally detectable."
        },
        {
          type: "truefalse",
          q: "An account balance should be stored as a mutable column and updated in place on every transaction.",
          answer: false,
          explain: "The ledger is append-only and balance is derived by summing entries. An updatable balance column can drift from history and destroys the audit trail."
        },
        {
          type: "fill",
          q: "In an append-only ledger, an account balance is never updated in place; it is ____ from the entries.",
          answer: "derived",
          accept: ["derived", "computed", "calculated", "summed"],
          explain: "Because the entries are the source of truth, the balance is always reconstructible and any discrepancy points at a bug rather than being silently absorbed."
        },
        {
          type: "mcq",
          q: "Summing every entry for a hot account on each read gets slow. What is the standard fix that preserves correctness?",
          choices: [
            "Replace the entries with a single mutable balance column that each write overwrites",
            "Periodically write a snapshot or running-balance row so reads sum only entries since the last checkpoint",
            "Move older entries to a separate archive database and stop counting them",
            "Round balances to the nearest whole unit so the sum is cheaper"
          ],
          answer: 1,
          explain: "Checkpoints are a derived cache with a proof: the snapshot plus subsequent entries must equal a full recomputation, so it can always be rebuilt from history."
        },
        {
          type: "truefalse",
          q: "Storing monetary amounts as IEEE 754 floating point is acceptable as long as you round to two decimals when displaying.",
          answer: false,
          explain: "Binary floating point cannot represent many decimal fractions exactly, so sums drift. Use integer minor units or an exact decimal type, and always store the currency alongside the amount."
        },
        {
          type: "match",
          q: "Match each ledger concept to its meaning.",
          pairs: [
            ["Journal entry", "One immutable line recording a debit or credit against an account"],
            ["Transaction", "The balanced group of entries written together as one atomic unit"],
            ["Reversal", "A new, opposite-signed transaction that cancels an earlier one"]
          ],
          explain: "Corrections are made by appending a reversal, never by editing or deleting the original entries."
        },
        {
          type: "mcq",
          q: "A refund is issued for a charge posted last week. What does a correct ledger do?",
          choices: [
            "Deletes the original transaction rows so the balances net out",
            "Updates the original entries to reduce their amounts",
            "Appends a new balanced transaction that moves the money back, referencing the original",
            "Marks the original transaction with a refunded flag and leaves balances alone"
          ],
          answer: 2,
          explain: "History is immutable. The refund is its own balanced transaction with a link to what it reverses, so the audit trail shows both what happened and what corrected it."
        }
      ]
    },
    {
      id: "l134",
      title: "Moving money exactly once",
      intro: "Idempotency keys, explicit state machines, and reconciliation against an external processor.",
      questions: [
        {
          type: "mcq",
          q: "A client times out waiting for a charge response and retries. What prevents a double charge?",
          choices: [
            "The client passes an idempotency key, and the server returns the stored result of the first attempt for that key",
            "The server compares amount and customer against the last few minutes of charges and rejects near-duplicates",
            "The client waits and polls instead of retrying, since retries are inherently unsafe",
            "The payment processor detects the repeat automatically and refunds one side"
          ],
          answer: 0,
          explain: "A caller-supplied idempotency key turns a retry into a lookup. Heuristic duplicate detection wrongly blocks legitimate identical charges and still misses real duplicates."
        },
        {
          type: "truefalse",
          q: "The idempotency key must be recorded in the same atomic transaction as the effect it guards, or the guarantee has a hole.",
          answer: true,
          explain: "If the charge commits but the key record does not, a retry re-charges. Writing both atomically is what makes at-most-once real rather than aspirational."
        },
        {
          type: "fill",
          q: "Because a network call to a payment processor can succeed while its response is lost, payment systems track each attempt through an explicit ____ machine rather than a single boolean.",
          answer: "state",
          accept: ["state", "state machine", "finite state"],
          explain: "States like created, pending, succeeded, failed, and reversed let a recovery job resolve any attempt left in flight, which a paid or not-paid flag cannot express."
        },
        {
          type: "order",
          q: "Order a safe charge flow using an idempotency key.",
          items: [
            "Look up the idempotency key and return the stored result if one exists",
            "Atomically record the key with an in-flight state",
            "Call the payment processor with a stable reference id",
            "Record the outcome against the key and post the balanced ledger entries"
          ],
          explain: "Claim the key before doing anything external, so a concurrent retry sees in-flight rather than starting a second charge."
        },
        {
          type: "mcq",
          q: "Your service posted a charge to the processor but never received a response, and the record is stuck in-flight. What is the correct recovery?",
          choices: [
            "Void the local record and let the customer complain if they were charged",
            "Retry the charge with a fresh reference id to guarantee it goes through",
            "Query the processor for the attempt by its reference id and settle the local state to match",
            "Wait for the next statement and manually adjust the ledger"
          ],
          answer: 2,
          explain: "The processor is the authority for whether money moved. Reconciling by the reference id you sent is why that id has to be generated and stored before the call."
        },
        {
          type: "truefalse",
          q: "Exactly-once money movement is achieved by making the network call itself exactly-once.",
          answer: false,
          explain: "Delivery over an unreliable network is at-least-once at best. Exactly-once is an end-to-end property built from at-least-once delivery plus idempotent effects keyed by a stable id."
        },
        {
          type: "match",
          q: "Match each safeguard to the failure it addresses.",
          pairs: [
            ["Idempotency key", "A retried request creating a second charge"],
            ["Daily reconciliation", "Local records silently disagreeing with the processor"],
            ["Outbox table", "A ledger write committing while its downstream event is lost"]
          ],
          explain: "These are layered: the key stops duplicates at the edge, the outbox makes side effects survive commit, and reconciliation catches whatever still slipped through."
        }
      ]
    },
    {
      id: "l135",
      title: "Proximity and geospatial services",
      intro: "Turning two-dimensional nearby queries into one-dimensional index lookups.",
      questions: [
        {
          type: "mcq",
          q: "Why can a plain B-tree index on separate latitude and longitude columns perform badly for find-everything-within-5km queries?",
          choices: [
            "Because floating point coordinates cannot be indexed at all",
            "Because the index can only narrow on one dimension efficiently, leaving a long thin strip of candidates to filter",
            "Because latitude and longitude use different units and cannot be compared",
            "Because B-trees do not support range scans"
          ],
          answer: 1,
          explain: "A composite index prunes on the leading column, then scans. A geospatial index instead maps two dimensions onto a single ordered key so nearby points sort near each other."
        },
        {
          type: "fill",
          q: "A ____ encodes a latitude and longitude into a short string where a shared prefix means the points are in the same rectangular cell.",
          answer: "geohash",
          accept: ["geohash", "geohashes", "geo hash"],
          explain: "Prefix length controls cell size, which turns a proximity query into a prefix range scan on an ordinary sorted index."
        },
        {
          type: "truefalse",
          q: "Two points that are physically very close can have completely different geohash prefixes.",
          answer: true,
          explain: "Points straddling a cell boundary land in different cells, so a correct query must also scan the neighboring cells rather than trusting a single prefix."
        },
        {
          type: "match",
          q: "Match each spatial index to how it partitions space.",
          pairs: [
            ["Geohash", "Recursive rectangular subdivision encoded as a base-32 string prefix"],
            ["Quadtree", "A tree that splits a cell into four children only where density demands it"],
            ["S2 cells", "Projection of the sphere onto six cube faces indexed along a space-filling curve"]
          ],
          explain: "Geohash cells are fixed in size per prefix length, quadtrees adapt to density, and S2 avoids the polar distortion of a flat lat-lon grid."
        },
        {
          type: "mcq",
          q: "A dense downtown cell contains far more listings than a rural cell of the same size. Which structure handles that skew most naturally?",
          choices: [
            "A fixed-precision geohash grid over the whole world",
            "A quadtree, which subdivides only the cells that exceed a capacity threshold",
            "A single sorted index on longitude with a latitude filter",
            "Separate tables sharded by country code"
          ],
          answer: 1,
          explain: "Quadtrees adapt depth to density, so dense areas get fine cells and sparse areas stay coarse, keeping the number of candidates per cell bounded."
        },
        {
          type: "order",
          q: "Order the steps of answering a nearby search with a cell-based index.",
          items: [
            "Compute the cell containing the query point at a precision matching the search radius",
            "Gather that cell and its neighboring cells",
            "Fetch the candidate objects indexed under those cells",
            "Compute true distances and filter and sort the candidates"
          ],
          explain: "The index is a coarse filter that cheaply removes almost everything; exact distance math runs only on the small surviving candidate set."
        },
        {
          type: "truefalse",
          q: "For a rider-and-driver style system, the moving objects table is write-heavy and is often kept in memory or a fast key-value store rather than the primary relational database.",
          answer: true,
          explain: "Frequent position updates from many devices are a high-rate, low-durability-value workload; the current position matters far more than the history of every ping."
        }
      ]
    },
    {
      id: "l136",
      title: "Multi-region architecture and data residency",
      intro: "What changes when your users, your latency budget, and the law all live in different places.",
      questions: [
        {
          type: "mcq",
          q: "What best describes a data residency requirement of the kind GDPR-style regimes create?",
          choices: [
            "A performance optimization that places replicas near users",
            "A legal or contractual constraint on where certain data may be stored or processed, which can force per-region storage",
            "A requirement that all data be encrypted with keys held by the customer",
            "A rule that data must be replicated to at least three regions"
          ],
          answer: 1,
          explain: "Residency is a constraint on location, not a latency tactic. It can rule out the simple design of one global database with read replicas everywhere."
        },
        {
          type: "truefalse",
          q: "Data residency rules can make a single globally replicated primary database an invalid architecture regardless of how fast it is.",
          answer: true,
          explain: "If regulated records may not leave a jurisdiction, replicating them everywhere is a compliance violation even when it is the best-performing option."
        },
        {
          type: "match",
          q: "Match each multi-region topology to its main tradeoff.",
          pairs: [
            ["Single-region primary with global read replicas", "Simple consistency but every write pays a cross-region round trip"],
            ["Active-active with per-region ownership", "Local low-latency writes, but a record is only writable in its home region"],
            ["Full multi-master with conflict resolution", "Writes anywhere, at the cost of handling concurrent conflicting updates"]
          ],
          explain: "Partitioning ownership by region is usually the pragmatic middle ground: it gives local writes without requiring general conflict resolution."
        },
        {
          type: "fill",
          q: "Routing a user to the region that owns their data is often done by storing a ____ field on the account and consulting a small globally replicated directory of those values during request routing.",
          answer: "home-region",
          accept: ["home-region", "home region", "homeregion", "region", "home"],
          explain: "A tiny globally replicated mapping from identity to home region can be consistent and cached cheaply, even when the bulk user data cannot leave its region."
        },
        {
          type: "mcq",
          q: "Which asset is usually safe to replicate globally even under strict residency rules?",
          choices: [
            "Payment instrument details for regulated customers",
            "The message contents of regulated users",
            "Anonymous static content such as application bundles and public media",
            "Full audit logs containing user identifiers"
          ],
          answer: 2,
          explain: "Residency rules attach to personal or regulated data. Content with no personal data attached can sit on any edge, which is what makes CDNs usable in these designs."
        },
        {
          type: "truefalse",
          q: "Deploying to multiple regions removes the need to test failover, since traffic reroutes automatically.",
          answer: false,
          explain: "Untested failover is a hypothesis. Regional failover exercises the paths that are least often used - promotion, cache warming, connection re-establishment - and must be rehearsed."
        },
        {
          type: "mcq",
          q: "A right-to-erasure request arrives for a user whose data has been copied into analytics stores, backups, and caches. What makes this tractable?",
          choices: [
            "Encrypting per-user data with a per-user key so destroying the key renders remaining copies unreadable",
            "Running a scan of every system nightly looking for the identifier",
            "Restoring every backup, deleting the rows, and re-taking the backup",
            "Relying on backup retention windows to expire the data eventually"
          ],
          answer: 0,
          explain: "Crypto-shredding is the common engineering answer for immutable copies like backups, since physically rewriting every historical artifact is often impossible."
        }
      ]
    }
  ]
});
