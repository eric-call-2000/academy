window.ACADEMY.addUnit("sysdesign", {
  id: "unit-8",
  title: "Asynchrony: Queues & Streams",
  color: "#eab308",
  icon: "\u{1F4EC}",
  description: "Decoupling in time - the move that makes systems both more resilient and harder to reason about.",
  lessons: [
    {
      id: "l57",
      title: "Synchronous vs asynchronous, and what you buy",
      intro: "What changes when a caller stops waiting for the work to finish.",
      questions: [
        {
          type: "mcq",
          q: "A checkout API currently calls the receipt-email service inline and fails checkout when email is down. Moving the email send onto a queue primarily buys what?",
          choices: [
            "Lower total CPU cost across the whole system for each order",
            "A guarantee that every receipt email is delivered exactly one time",
            "Isolation of the email service's availability from checkout's availability",
            "Stronger consistency between the order record and the sent receipt"
          ],
          answer: 2,
          explain: "Async decouples availability: checkout can succeed while email is degraded. It does not reduce total work, and it weakens rather than strengthens the coupling between the two facts."
        },
        {
          type: "truefalse",
          q: "Making a call asynchronous reduces the end-to-end latency of the underlying work itself.",
          answer: false,
          explain: "The work still takes as long as it takes. What drops is the caller's perceived latency, because the caller returns before the work completes."
        },
        {
          type: "fill",
          q: "When a synchronous call chain has many hops, the caller's availability is roughly the ____ of every downstream service's availability, which is why long sync chains are fragile.",
          answer: "product",
          accept: ["product", "multiplication", "the product"],
          explain: "Serial hard dependencies multiply: five services at 99.9 percent each give about 99.5 percent combined. Async removes hops from that product."
        },
        {
          type: "mcq",
          q: "Which cost is most characteristic of converting a synchronous call into an asynchronous one?",
          choices: [
            "The caller can no longer return an error to the user for that work",
            "Throughput of the overall system necessarily decreases",
            "The producer must now hold a persistent connection to the consumer",
            "Serialization overhead becomes the dominant cost in the system"
          ],
          answer: 0,
          explain: "Once the caller returns before the work runs, failures happen after the response. You need a separate channel - status endpoint, notification, retry - to surface them."
        },
        {
          type: "match",
          q: "Match each interaction style to its defining property.",
          pairs: [
            ["Synchronous request/response", "Caller blocks until the result is known"],
            ["Asynchronous messaging", "Caller returns after the work is durably accepted"],
            ["Fire and forget", "Caller neither blocks nor tracks whether the work happened"]
          ],
          explain: "The three differ in what the caller waits for and what it learns. Fire and forget is async with no completion signal at all, which makes it the weakest of the three."
        },
        {
          type: "truefalse",
          q: "Async processing lets a system absorb a traffic spike that exceeds the workers' processing rate, as long as the spike is bounded and the queue has capacity.",
          answer: true,
          explain: "A queue acts as a buffer that trades latency for the ability to survive bursts. It only helps for bursts, not for a sustained arrival rate above service rate."
        },
        {
          type: "mcq",
          q: "Which task is the WORST candidate for being made asynchronous?",
          choices: [
            "Generating a monthly PDF invoice for an account",
            "Re-indexing a document into a search cluster after an edit",
            "Validating that a submitted password meets policy before creating the account",
            "Sending a push notification when someone comments on a post"
          ],
          answer: 2,
          explain: "Validation must complete before the response, because its whole purpose is to decide the response. Work whose result the caller needs immediately should stay synchronous."
        }
      ]
    },
    {
      id: "l58",
      title: "Message queues and work distribution",
      intro: "Using a queue to hand units of work to a pool of interchangeable workers.",
      questions: [
        {
          type: "mcq",
          q: "In the classic work-queue (competing consumers) pattern with one queue and ten workers, a given message is normally processed by:",
          choices: [
            "All ten workers, each keeping its own copy",
            "Exactly one worker, which then removes it from the queue",
            "One worker per availability zone, for redundancy",
            "A quorum of workers that vote on the result"
          ],
          answer: 1,
          explain: "A work queue distributes load: each message goes to one consumer, which acknowledges and the broker removes it. Fan-out to all consumers is pub/sub, a different pattern."
        },
        {
          type: "fill",
          q: "Most brokers hide a message for a visibility timeout after delivery; if the consumer does not send an ____ before it expires, the message becomes visible again for redelivery.",
          answer: "ack",
          accept: ["ack", "acknowledgement", "acknowledgment", "acknowledge"],
          explain: "Delete-on-ack is what makes crashed consumers safe: no ack means the broker assumes failure and redelivers, which is also why duplicates happen."
        },
        {
          type: "truefalse",
          q: "Adding more consumers to a single work queue increases throughput but can break the order in which messages are processed.",
          answer: true,
          explain: "Parallel consumers process concurrently, so completion order is not enqueue order. Ordering usually requires partitioning by key with one consumer per partition."
        },
        {
          type: "order",
          q: "Order the lifecycle of one message in a work queue with at-least-once delivery.",
          items: [
            "Producer publishes the message and the broker persists it",
            "Broker delivers the message to one consumer and starts the visibility timeout",
            "Consumer processes the work and sends an acknowledgement",
            "Broker deletes the message from the queue"
          ],
          explain: "Deletion happens after the ack, not on delivery. If the consumer dies mid-processing, the timeout expires and the message is delivered again."
        },
        {
          type: "mcq",
          q: "Queue depth for a job queue has been climbing steadily for an hour. What does that most directly indicate?",
          choices: [
            "Consumers are acknowledging messages too aggressively",
            "The broker's disk is corrupt and messages cannot be deleted",
            "Producers are publishing messages that are too large",
            "The arrival rate exceeds the aggregate processing rate of the consumers"
          ],
          answer: 3,
          explain: "A monotonically rising backlog means service rate is below arrival rate. The fix is more or faster consumers, or shedding work - not a bigger queue."
        },
        {
          type: "match",
          q: "Match each queue concept to what it controls.",
          pairs: [
            ["Visibility timeout", "How long a delivered message stays hidden before redelivery"],
            ["Prefetch / max in-flight", "How many unacknowledged messages one consumer may hold"],
            ["Message TTL", "How long an unconsumed message stays eligible before expiring"]
          ],
          explain: "These three knobs are often confused. One governs redelivery timing, one governs per-consumer concurrency, and one governs message expiry."
        },
        {
          type: "truefalse",
          q: "A work queue guarantees that a slow consumer will never receive a second message until it finishes the first.",
          answer: false,
          explain: "Consumers commonly prefetch several messages at once. Limiting in-flight messages to one is a configuration choice, not a property of queues."
        }
      ]
    },
    {
      id: "l59",
      title: "Publish/subscribe",
      intro: "One event, many independent consumers, and the coupling that quietly disappears.",
      questions: [
        {
          type: "mcq",
          q: "The defining difference between pub/sub and a work queue is:",
          choices: [
            "Pub/sub is always durable while work queues are always in memory",
            "Pub/sub delivers each message to every interested subscriber rather than to one consumer",
            "Pub/sub guarantees global ordering while work queues do not",
            "Pub/sub requires the publisher to know each subscriber's address"
          ],
          answer: 1,
          explain: "Pub/sub is fan-out: N subscribers each get the event. A work queue is load distribution: one message, one consumer."
        },
        {
          type: "fill",
          q: "In pub/sub the publisher does not know who the subscribers are; this property is called ____ decoupling, and it is what lets you add a consumer without touching the producer.",
          answer: "spatial",
          accept: ["spatial", "space", "location", "spatial (location)"],
          explain: "Pub/sub gives spatial decoupling (parties do not know each other), time decoupling (they need not be up together), and synchronization decoupling (neither blocks on the other)."
        },
        {
          type: "truefalse",
          q: "Adding a fourth subscriber to an existing topic requires a code change in the publishing service.",
          answer: false,
          explain: "That is precisely the coupling pub/sub removes. The publisher emits to the topic and the broker handles fan-out to whatever subscriptions exist."
        },
        {
          type: "mcq",
          q: "A team moves order events from direct HTTP calls to a pub/sub topic. Which new operational problem should they expect?",
          choices: [
            "Publishers can no longer emit more than one event type",
            "Events can no longer be persisted for later inspection",
            "It becomes harder to know who consumes an event, so changing its schema is risky",
            "Each subscriber must now poll the publisher for updates"
          ],
          answer: 2,
          explain: "Decoupling cuts both ways: nobody is forced to register, so the producer loses visibility into its own blast radius. Schema registries and contract tests exist to claw that back."
        },
        {
          type: "match",
          q: "Match each pub/sub element to its role.",
          pairs: [
            ["Topic", "The named channel an event is published to"],
            ["Subscription", "A consumer's independent cursor and delivery state for a topic"],
            ["Filter / routing key", "A predicate that decides which published events a subscriber receives"]
          ],
          explain: "Topics carry events, subscriptions track per-consumer progress, and filters narrow what a given subscriber sees."
        },
        {
          type: "mcq",
          q: "One subscriber to a topic is failing and falling behind. In a correctly implemented pub/sub system, the other subscribers:",
          choices: [
            "Are unaffected, because each subscription tracks delivery independently",
            "Stop receiving events until the failing subscriber recovers",
            "Receive the failing subscriber's messages instead",
            "Have their events rerouted to a shared dead-letter topic"
          ],
          answer: 0,
          explain: "Independent subscription state is the point of fan-out. Coupling their fates would reintroduce exactly the dependency pub/sub removes."
        },
        {
          type: "truefalse",
          q: "Pub/sub and work queues can be combined: a topic fans an event out to several subscriptions, and each subscription is drained by its own pool of competing consumers.",
          answer: true,
          explain: "This hybrid is the common production shape - fan-out between teams, load distribution within a team's consumer group."
        }
      ]
    },
    {
      id: "l60",
      title: "The log as a data structure (the Kafka model)",
      intro: "Retain instead of remove: an append-only log turns messaging into replayable history.",
      questions: [
        {
          type: "mcq",
          q: "The core structural difference between a traditional queue and a log-based system such as Kafka is:",
          choices: [
            "The log stores messages in memory while queues store them on disk",
            "The log routes by message content while queues route by destination",
            "The log guarantees exactly-once delivery while queues cannot",
            "The queue removes a message once consumed, while the log retains it and consumers track their own offsets"
          ],
          answer: 3,
          explain: "In a queue, consumption is destructive. In a log, the record stays for the retention period and each consumer group holds an offset, so history can be replayed."
        },
        {
          type: "fill",
          q: "A log topic is split into partitions, and ordering is guaranteed only ____ a partition, not across the whole topic.",
          answer: "within",
          accept: ["within", "inside", "per", "within (inside)"],
          explain: "Partitions are the unit of parallelism and of ordering. Keys that must stay ordered relative to each other must hash to the same partition."
        },
        {
          type: "truefalse",
          q: "In a log-based system, adding a brand-new consumer group lets you reprocess events that were already consumed by an existing group.",
          answer: true,
          explain: "Because records are retained and offsets are per-group, a new group can start at the earliest offset. This replay ability is what makes logs good for rebuilding derived state."
        },
        {
          type: "mcq",
          q: "A topic has 6 partitions and a consumer group has 10 consumers. What happens?",
          choices: [
            "Each partition is split so all 10 consumers share the load evenly",
            "The group is rejected because consumers may not outnumber partitions",
            "At most 6 consumers get a partition and the other 4 sit idle",
            "All 10 consumers read all partitions and deduplicate among themselves"
          ],
          answer: 2,
          explain: "A partition is assigned to at most one consumer per group, so partition count caps a group's parallelism. To scale further you add partitions."
        },
        {
          type: "match",
          q: "Match each log concept to its meaning.",
          pairs: [
            ["Offset", "A record's monotonically increasing position within a partition"],
            ["Retention policy", "The rule deciding when old records may be discarded"],
            ["Log compaction", "Keeping only the most recent record for each key"]
          ],
          explain: "Offsets identify position, retention bounds history by time or size, and compaction turns a log into a durable latest-value-per-key snapshot."
        },
        {
          type: "truefalse",
          q: "Because a log is append-only and retained, a consumer that crashes and restarts must always begin again from the very first record.",
          answer: false,
          explain: "Consumers commit offsets, so a restart resumes from the last committed position. Reading from the beginning is an explicit choice, not a requirement."
        },
        {
          type: "mcq",
          q: "Which requirement most strongly argues for a log rather than a classic queue?",
          choices: [
            "Per-message TTLs and priority ordering across the whole topic",
            "Several independent teams need the same event stream, and one may need to rebuild its state from history",
            "The system needs to delete an individual message by id after it is consumed",
            "Consumers need messages routed to them by arbitrary header predicates"
          ],
          answer: 1,
          explain: "Retention plus per-group offsets gives independent consumption and replay. Per-message deletion, priorities, and rich routing are queue-broker strengths, not log strengths."
        }
      ]
    },
    {
      id: "l61",
      title: "Delivery semantics: at-most-once, at-least-once, exactly-once",
      intro: "What a broker can actually promise, and the promise that does not exist.",
      questions: [
        {
          type: "mcq",
          q: "Which statement about exactly-once is correct?",
          choices: [
            "Exactly-once delivery is achievable by acknowledging before processing instead of after",
            "True exactly-once delivery over an unreliable network is not achievable; production systems use at-least-once delivery plus idempotent processing, or effectively-once via transactional offset commits",
            "Exactly-once delivery is a standard feature of any broker that persists messages to disk",
            "Exactly-once delivery is achieved by having the producer retry until it receives an ack"
          ],
          answer: 1,
          explain: "An ack can always be lost, so the sender can never know whether to resend - the Two Generals problem. Real systems get at-least-once delivery and make the effect idempotent, or bind processing and offset commit in one transaction (effectively-once)."
        },
        {
          type: "match",
          q: "Match each delivery semantic to its failure mode.",
          pairs: [
            ["At-most-once", "Messages may be lost but are never processed twice"],
            ["At-least-once", "Messages are never lost but may be processed twice"],
            ["Effectively-once", "At-least-once delivery whose duplicate effects are neutralized"]
          ],
          explain: "You choose which failure you can tolerate. Effectively-once is not a fourth delivery guarantee - it is at-least-once plus idempotency or transactional commits."
        },
        {
          type: "truefalse",
          q: "A consumer that acknowledges a message before doing the work has chosen at-most-once semantics.",
          answer: true,
          explain: "Acking first means a crash during processing loses the message forever. Acking after processing gives at-least-once, at the cost of possible duplicates."
        },
        {
          type: "fill",
          q: "The impossibility behind exactly-once delivery is often illustrated with the ____ Generals problem, where no finite exchange of messages over a lossy channel yields certainty on both sides.",
          answer: "Two",
          accept: ["Two", "two", "2"],
          explain: "The Two Generals problem shows that agreement over a lossy channel cannot be guaranteed with any finite number of acks, since the last message may always be the one that is lost."
        },
        {
          type: "mcq",
          q: "For a job that charges a customer's card, which combination is the sound production design?",
          choices: [
            "At-most-once delivery, since a lost charge is safer than a double charge",
            "At-least-once delivery with a per-charge idempotency key checked by the payment processor",
            "Exactly-once delivery configured on the broker, with no consumer-side checks",
            "At-least-once delivery with retries disabled at the consumer"
          ],
          answer: 1,
          explain: "You cannot buy exactly-once from the transport, so you buy no-loss from the transport and no-double-effect from the handler. Idempotency keys are how payment APIs do this."
        },
        {
          type: "truefalse",
          q: "Kafka's transactional producer plus read-committed consumers eliminates the possibility that the network redelivers a record.",
          answer: false,
          explain: "Redelivery still happens; transactions make the duplicate invisible downstream by atomically tying writes and offset commits. That is effectively-once within the system, not exactly-once on the wire."
        },
        {
          type: "mcq",
          q: "A metrics pipeline samples CPU every second and can tolerate an occasional gap but must never fall behind. Which semantic is the most defensible choice?",
          choices: [
            "At-least-once, accepting duplicate samples in the series",
            "Exactly-once, configured end to end at the broker",
            "At-most-once, since a dropped sample costs less than backlog or duplicates",
            "At-least-once with a full deduplication store keyed by timestamp"
          ],
          answer: 2,
          explain: "For high-volume, low-value, self-correcting telemetry, dropping a sample is cheap and avoids the cost of dedup state. Semantics should follow the cost of each failure mode."
        }
      ]
    },
    {
      id: "l62",
      title: "Idempotency and deduplication",
      intro: "Making a handler safe to run twice, which is the practical answer to duplicates.",
      questions: [
        {
          type: "mcq",
          q: "An operation is idempotent when:",
          choices: [
            "It always completes in the same amount of time",
            "It can be executed concurrently from many threads without locking",
            "Applying it more than once has the same effect on state as applying it once",
            "It never mutates any state at all"
          ],
          answer: 2,
          explain: "Idempotency is about the resulting state, not about purity or timing. A read-only operation is idempotent, but so is a write like set balance to 100."
        },
        {
          type: "truefalse",
          q: "SQL statement UPDATE accounts SET balance = balance - 10 WHERE id = 7 is idempotent.",
          answer: false,
          explain: "It is a relative mutation, so running it twice deducts 20. Rewriting it as a conditional absolute write, or guarding it with a processed-message id, makes it safe to replay."
        },
        {
          type: "fill",
          q: "The common HTTP pattern is for the client to send a unique ____ key on a POST, which the server stores so a retried request returns the original result instead of creating a second resource.",
          answer: "idempotency",
          accept: ["idempotency", "idempotence", "idempotent"],
          explain: "The server records key plus outcome. A repeat of the same key short-circuits to the stored response, which is how payment and order APIs survive client retries."
        },
        {
          type: "order",
          q: "Order the steps of a consumer that deduplicates using a processed-messages table.",
          items: [
            "Receive the message and read its unique message id",
            "Attempt to insert the id into the processed table with a unique constraint",
            "If the insert succeeded, perform the side effect in the same transaction",
            "Commit, then acknowledge the message to the broker"
          ],
          explain: "Claiming the id and doing the work in one transaction is what makes the guard sound. If the insert conflicts, the message is a duplicate and can be acked without reprocessing."
        },
        {
          type: "mcq",
          q: "A dedup store keyed by message id is given a 24 hour TTL. What is the real risk being accepted?",
          choices: [
            "Any duplicate that arrives after 24 hours will be processed again",
            "Messages will be delivered out of order after 24 hours",
            "The consumer will be unable to acknowledge messages after 24 hours",
            "Producers will be forced to regenerate message ids every 24 hours"
          ],
          answer: 0,
          explain: "Dedup windows are always finite because the store cannot grow forever. You size the window to exceed the maximum plausible redelivery delay, including replays after an outage."
        },
        {
          type: "truefalse",
          q: "Natural idempotency - designing the operation so a repeat is harmless - is generally preferable to bolting on a dedup store.",
          answer: true,
          explain: "A dedup store is extra state that can fail, expire, or drift. Upserts keyed by a business id and conditional writes avoid the problem instead of tracking it."
        },
        {
          type: "match",
          q: "Match each technique to how it neutralizes a duplicate.",
          pairs: [
            ["Upsert on a business key", "The second write overwrites rather than inserting a new row"],
            ["Conditional write with a version or expected value", "The second attempt fails its precondition and is rejected"],
            ["Processed-id table with a unique constraint", "The second attempt collides on insert and is skipped"]
          ],
          explain: "All three make replay safe, but they differ in mechanism: overwrite, precondition failure, or an explicit claim on the message id."
        }
      ]
    },
    {
      id: "l63",
      title: "Backpressure, retries, and dead-letter queues",
      intro: "What to do when work arrives faster than you can do it, or refuses to succeed.",
      questions: [
        {
          type: "fill",
          q: "____ is the mechanism by which a system signals a producer to slow down when the consumer cannot keep up.",
          answer: "backpressure",
          accept: ["backpressure", "back pressure", "back-pressure"],
          explain: "Backpressure pushes the problem upstream to where it can be handled - throttling, buffering at the source, or rejecting - instead of letting an unbounded buffer grow until it fails."
        },
        {
          type: "mcq",
          q: "A service uses an unbounded in-memory queue between an HTTP handler and a worker pool. Under sustained overload, the most likely outcome is:",
          choices: [
            "Requests are silently rejected at the network layer with no memory growth",
            "The queue grows until latency is useless and the process is killed for memory exhaustion",
            "The worker pool automatically scales to match the arrival rate",
            "The queue reorders items so the newest requests are served first"
          ],
          answer: 1,
          explain: "An unbounded buffer converts an overload into a memory leak and a latency disaster. Bounded queues that reject or block when full are what create backpressure."
        },
        {
          type: "truefalse",
          q: "Retrying a failed message immediately and at a fixed interval is safe as long as the number of retries is capped.",
          answer: false,
          explain: "Fixed-interval retries from many clients synchronize into thundering herds that keep a recovering dependency down. Exponential backoff with jitter spreads the load out."
        },
        {
          type: "mcq",
          q: "What belongs in a dead-letter queue?",
          choices: [
            "Messages whose consumers were slower than the visibility timeout on their first attempt",
            "Messages the producer failed to publish because they exceeded the broker's size limit",
            "Low-priority messages deferred until off-peak processing capacity is available",
            "Messages that repeatedly failed processing and exhausted their retry budget"
          ],
          answer: 3,
          explain: "A DLQ parks poison messages so one bad payload does not block the queue forever, and preserves them for inspection and manual replay after a fix."
        },
        {
          type: "order",
          q: "Order the handling of a message that can never succeed because its payload is malformed.",
          items: [
            "First delivery: the consumer throws and does not acknowledge",
            "Broker redelivers with exponential backoff up to the max receive count",
            "Broker moves the message to the dead-letter queue",
            "An operator inspects the DLQ, fixes the bug, and replays the message"
          ],
          explain: "Retries handle transient faults; a max receive count is what stops a permanent fault from looping forever. The DLQ is a holding area, not a graveyard - it should be alarmed and drained."
        },
        {
          type: "match",
          q: "Match each overload response to what it does.",
          pairs: [
            ["Load shedding", "Drops lower-value work only once the system is already overloaded"],
            ["Circuit breaker", "Stops calling a failing dependency for a cooldown period"],
            ["Rate limiting", "Caps the accepted request rate per client or key"]
          ],
          explain: "Shedding drops work under stress, a breaker stops hammering something already broken, and a rate limit enforces a steady contract regardless of health."
        },
        {
          type: "truefalse",
          q: "A dead-letter queue with no alert on its depth is close to useless.",
          answer: true,
          explain: "The DLQ's value is that a human notices and fixes the cause. Unmonitored, it just hides silent data loss behind a technically-correct mechanism."
        }
      ]
    },
    {
      id: "l64",
      title: "Event-driven architecture: choreography vs orchestration",
      intro: "Two ways to coordinate a multi-service workflow, and how each one fails.",
      questions: [
        {
          type: "mcq",
          q: "In choreography, a multi-service workflow advances because:",
          choices: [
            "A central coordinator calls each service in a defined sequence",
            "Each service reacts to events emitted by others and emits its own",
            "Services poll a shared workflow table for the next assigned step",
            "A scheduler runs each step at a fixed time offset from the trigger"
          ],
          answer: 1,
          explain: "Choreography has no conductor: the flow is an emergent property of local reactions to events. Orchestration is the opposite - one component owns the sequence."
        },
        {
          type: "match",
          q: "Match each coordination style to its characteristic weakness.",
          pairs: [
            ["Choreography", "No single place shows the end-to-end flow, so debugging is hard"],
            ["Orchestration", "The coordinator becomes a coupling point and a failure domain"],
            ["Synchronous call chain", "One slow downstream hop stalls the entire user-facing request"]
          ],
          explain: "Each style concentrates its risk somewhere different: in the invisible flow, in the coordinator, or in the caller's latency budget."
        },
        {
          type: "fill",
          q: "A long-lived distributed transaction split into local steps, each with a ____ action that semantically undoes it on failure, is called a saga.",
          answer: "compensating",
          accept: ["compensating", "compensation", "compensating transaction"],
          explain: "Sagas replace an unavailable distributed rollback with forward-written undo steps, such as issuing a refund rather than un-committing a payment."
        },
        {
          type: "truefalse",
          q: "Orchestration is always the wrong choice in an event-driven system because it reintroduces central control.",
          answer: false,
          explain: "Orchestration is a legitimate trade: it buys explicit state, visibility, and easier compensation for complex flows. Choreography is better for simple, loosely related reactions."
        },
        {
          type: "mcq",
          q: "A team notices that services are consuming an OrderPlaced event and reaching back into the order service for details. What design change most directly addresses this?",
          choices: [
            "Move the workflow from choreography to a synchronous call chain",
            "Have every consumer maintain a read replica of the order database",
            "Enrich the event to carry the state consumers need, so the event is self-contained",
            "Increase the topic's retention so consumers can re-read older events"
          ],
          answer: 2,
          explain: "Event-carried state transfer removes the callback dependency that quietly makes an async design synchronous again. The cost is bigger events and schema discipline."
        },
        {
          type: "truefalse",
          q: "Event-driven designs still need correlation ids propagated across services, because no single log will contain the whole workflow.",
          answer: true,
          explain: "Once the flow is distributed across asynchronous hops, a shared correlation or trace id is the only way to reassemble one logical request from many logs."
        },
        {
          type: "mcq",
          q: "Which workflow is the strongest candidate for orchestration rather than choreography?",
          choices: [
            "Emitting a welcome email whenever a user account is created",
            "A ten-step loan approval with conditional branches, timeouts, and required rollbacks",
            "Invalidating a CDN cache entry whenever a product image changes",
            "Updating a search index whenever a document is edited"
          ],
          answer: 1,
          explain: "Conditional branching, timers, and compensation need explicit workflow state that someone owns. The other three are single-reaction fan-outs where choreography is simpler."
        }
      ]
    }
  ]
});
