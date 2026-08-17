window.ACADEMY.addUnit("sysdesign", {
  id: "unit-7",
  title: "Consistency & Consensus",
  color: "#eab308",
  icon: "\u{1F91D}",
  description: "The theory that governs what a distributed system can and cannot promise.",
  lessons: [
    {
      id: "l49",
      title: "Consistency means at least three different things",
      intro: "Separating ACID consistency, replica consistency models, and consensus-grade agreement.",
      questions: [
        {
          type: "mcq",
          q: "The C in ACID and the C in CAP refer to different properties. What does the C in ACID actually mean?",
          choices: [
            "Every read returns the most recently committed write, system-wide",
            "All replicas converge to the same value once writes stop arriving",
            "A transaction moves the database from one state satisfying its integrity constraints to another",
            "Operations appear to take effect in some single total order consistent with real time"
          ],
          answer: 2,
          explain: "ACID's C is about application and database integrity constraints (foreign keys, invariants) being preserved by a transaction. It is a property of the application plus the database, not a replication guarantee."
        },
        {
          type: "mcq",
          q: "Which statement best describes linearizability?",
          choices: [
            "Transactions produce a result equivalent to some serial execution of those transactions",
            "Each single-object operation appears to take effect instantaneously at some point between its invocation and its response",
            "Replicas eventually agree on a value if no new writes are made",
            "Each client sees its own writes in the order it issued them, but other clients may not"
          ],
          answer: 1,
          explain: "Linearizability is a recency guarantee on single objects: once a write completes, every later read must observe it or a later value. Serializability is the transaction-level property, and the two are independent."
        },
        {
          type: "match",
          q: "Match each consistency-flavored term to what it actually constrains.",
          pairs: [
            ["ACID consistency", "Integrity constraints and invariants of the data are preserved by each transaction"],
            ["Linearizability", "Single-object operations appear atomic and respect real-time ordering"],
            ["Serializability", "Concurrent transactions produce a result equal to some serial order of them"]
          ],
          explain: "These three are routinely conflated. Strict serializability is the combination of the last two: serializable AND respecting real-time order."
        },
        {
          type: "truefalse",
          q: "A database can be fully serializable and still return stale data to a client that just observed a newer value elsewhere.",
          answer: true,
          explain: "Serializability constrains the equivalence to some serial order, not which order, and says nothing about real time. A read-only transaction can legally be ordered before a concurrent commit, which is why strict serializability adds the real-time requirement."
        },
        {
          type: "fill",
          q: "The consistency model that guarantees single-object operations appear to happen atomically at a single instant in real time is called ____.",
          answer: "linearizability",
          accept: ["linearizability", "linearizable", "atomic consistency"],
          explain: "Linearizability, also called atomic consistency, is the strongest single-object model and is what CAP's C refers to."
        },
        {
          type: "mcq",
          q: "Read-your-writes, monotonic reads, and consistent prefix reads are examples of what?",
          choices: [
            "Isolation levels defined by the SQL standard",
            "Failure detectors used by consensus protocols",
            "Session guarantees, which are weaker than linearizability but stronger than nothing",
            "Durability settings controlling fsync behavior"
          ],
          answer: 2,
          explain: "These are session or client-centric guarantees. They constrain what one client observes over time without requiring global real-time ordering, so they are cheap to provide on replicated stores."
        },
        {
          type: "order",
          q: "Order these consistency models from WEAKEST to STRONGEST.",
          items: [
            "Eventual consistency",
            "Read-your-writes (session guarantee)",
            "Causal consistency",
            "Linearizability"
          ],
          explain: "Each level constrains more executions than the one before. Causal consistency is notable as the strongest model that remains available during a network partition."
        }
      ]
    },
    {
      id: "l50",
      title: "The CAP theorem - and the four things it does not say",
      intro: "What Brewer's conjecture and the Gilbert-Lynch proof actually claim, and the myths built on top.",
      questions: [
        {
          type: "mcq",
          q: "In the CAP theorem, what exactly does the C stand for?",
          choices: [
            "The ACID preservation of database integrity constraints",
            "Serializable isolation between concurrent transactions",
            "Convergence of all replicas after writes stop",
            "Linearizability of single-object reads and writes"
          ],
          answer: 3,
          explain: "Gilbert and Lynch formalized CAP's C as linearizability (atomic consistency) on a single register. It is not ACID's C and not serializability."
        },
        {
          type: "truefalse",
          q: "CAP means you must permanently pick two of the three properties, so CA systems are a legitimate design category for distributed systems.",
          answer: false,
          explain: "Partitions are a fact of networks, not a design choice you decline. CAP only forces a choice DURING a partition: stay available or stay linearizable. Labeling a distributed system CA just means its behavior under partition is undefined."
        },
        {
          type: "mcq",
          q: "A system is running with no network partition at all. What does CAP say about it in that moment?",
          choices: [
            "It must sacrifice availability to keep linearizability",
            "It must sacrifice linearizability to keep availability",
            "Nothing - CAP constrains behavior only when a partition occurs",
            "It must choose between durability and latency"
          ],
          answer: 2,
          explain: "CAP's statement is conditional on a partition. When the network is healthy, a system may be both linearizable and available; other trade-offs (like latency) still apply, which is what PACELC adds."
        },
        {
          type: "fill",
          q: "In CAP, availability means every request to a ____ node eventually receives a non-error response.",
          answer: "non-failing",
          accept: ["non-failing", "nonfailing", "non failing", "non-faulty", "nonfaulty", "non faulty", "live", "working", "healthy"],
          explain: "The formal definition requires every request to a node that has not crashed to terminate with a response. Real systems usually want bounded latency too, which the formal definition does not require."
        },
        {
          type: "match",
          q: "Match each CAP misconception to the correction.",
          pairs: [
            ["CAP's C is ACID's C", "CAP's C is linearizability; ACID's C is integrity constraints"],
            ["You pick 2 of 3 up front", "You only choose between A and C, and only while partitioned"],
            ["NoSQL means AP by definition", "The trade-off is per-operation and configurable in many stores"]
          ],
          explain: "CAP is narrow and precise. Most popular summaries of it overstate its scope, which leads teams to make architecture decisions the theorem never supported."
        },
        {
          type: "truefalse",
          q: "A single system can offer different CAP behavior for different operations, for example a linearizable compare-and-set alongside an eventually consistent read path.",
          answer: true,
          explain: "The trade-off applies per operation, not per database. Many stores expose per-request consistency levels so a rare critical operation can be linearizable while the hot path stays available."
        },
        {
          type: "mcq",
          q: "During a network partition, a leader-based replicated store refuses writes on the minority side. Which CAP choice is this?",
          choices: [
            "It chose availability, since the majority side still serves writes",
            "It chose consistency, accepting unavailability on the minority side",
            "It escaped the trade-off by using a quorum",
            "It violated CAP by allowing partial service"
          ],
          answer: 1,
          explain: "Refusing to serve on the minority side is precisely the CP choice: some non-failing nodes return errors so that no divergent history is created."
        }
      ]
    },
    {
      id: "l51",
      title: "PACELC: the trade that exists even without partitions",
      intro: "Abadi's extension: if Partitioned, A or C; Else, Latency or Consistency.",
      questions: [
        {
          type: "fill",
          q: "PACELC reads: if Partitioned, choose Availability or Consistency; Else, choose ____ or Consistency.",
          answer: "latency",
          accept: ["latency", "Latency", "low latency"],
          explain: "Daniel Abadi added the Else clause in 2010 to capture the trade-off that dominates normal operation: strong consistency requires coordination round trips, which cost latency."
        },
        {
          type: "mcq",
          q: "Why does the Else branch of PACELC exist at all, given the network is healthy?",
          choices: [
            "Because disks must fsync before acknowledging any write",
            "Because keeping replicas consistent requires coordination messages whose round trips add latency",
            "Because clock skew makes timestamps unreliable during normal operation",
            "Because leader election runs continuously in the background"
          ],
          answer: 1,
          explain: "Strong consistency needs a write to reach enough replicas (or a leader) before acknowledging. That is physics: speed-of-light round trips, especially across regions, show up directly as write latency."
        },
        {
          type: "truefalse",
          q: "A system can be classified PC/EL: consistent when partitioned, but favoring latency when the network is healthy.",
          answer: true,
          explain: "The two branches are independent, so all four combinations exist. PC/EL describes systems that will refuse divergent writes under partition but serve fast, possibly stale, reads normally."
        },
        {
          type: "mcq",
          q: "A team moves from single-region synchronous replication to cross-region synchronous replication and write p99 jumps. Which PACELC branch explains this?",
          choices: [
            "The PA branch, since more regions means more partitions",
            "The PC branch, since consistency now requires a majority",
            "The Else branch: with no partition present, consistency was bought with latency (EC)",
            "Neither branch; this is a throughput problem, not a consistency one"
          ],
          answer: 2,
          explain: "No partition occurred. The added latency is the Else-branch cost of synchronous cross-region coordination, which is exactly the trade PACELC names."
        },
        {
          type: "match",
          q: "Match each configuration to its PACELC classification.",
          pairs: [
            ["Async replication, serves reads from any local replica", "EL: accepts stale reads to keep latency low when healthy"],
            ["Majority quorum required for every read and write", "EC: pays coordination latency to keep reads fresh when healthy"],
            ["Minority partition keeps accepting writes to merge later", "PA: stays available during a partition and reconciles afterward"]
          ],
          explain: "The P branch describes partition behavior; the E branch describes healthy-network behavior. A full classification always names both."
        },
        {
          type: "truefalse",
          q: "PACELC replaces CAP by proving CAP wrong.",
          answer: false,
          explain: "PACELC extends CAP rather than refuting it. CAP's partition-time claim stands; PACELC just adds the more commonly experienced trade-off that applies the rest of the time."
        },
        {
          type: "order",
          q: "Order the steps a client experiences on a strongly consistent cross-region write, from first to last.",
          items: [
            "Client sends the write to the leader replica",
            "Leader appends the entry and sends it to followers in other regions",
            "A majority of replicas durably acknowledge the entry",
            "Leader commits and returns success to the client"
          ],
          explain: "The acknowledgement cannot be returned before the majority responds, so the client's latency includes at least one cross-region round trip. That is the EC cost."
        }
      ]
    },
    {
      id: "l52",
      title: "Isolation levels and the anomalies they permit",
      intro: "What read committed, repeatable read, and serializable actually forbid.",
      questions: [
        {
          type: "order",
          q: "Order the standard isolation levels from WEAKEST to STRONGEST.",
          items: [
            "Read uncommitted",
            "Read committed",
            "Repeatable read",
            "Serializable"
          ],
          explain: "Each level forbids strictly more anomalies than the previous one. Serializable forbids all anomalies by guaranteeing equivalence to some serial execution."
        },
        {
          type: "match",
          q: "Match each anomaly to its definition.",
          pairs: [
            ["Dirty read", "A transaction reads data written by another transaction that has not committed"],
            ["Non-repeatable read", "Re-reading the same row within one transaction returns a different committed value"],
            ["Phantom read", "Re-running the same range query within one transaction returns a different set of rows"]
          ],
          explain: "Non-repeatable read is about a row that changed; phantom is about rows appearing or disappearing from a predicate's result set. The distinction drives whether row locks suffice or range/predicate locks are needed."
        },
        {
          type: "mcq",
          q: "Which anomaly is read committed specifically designed to prevent?",
          choices: [
            "Phantom reads",
            "Write skew",
            "Non-repeatable reads",
            "Dirty reads"
          ],
          answer: 3,
          explain: "Read committed guarantees you only read committed data, and it also blocks dirty writes by making a transaction wait to overwrite a row another transaction has written but not committed. It still permits non-repeatable reads and phantoms."
        },
        {
          type: "mcq",
          q: "Two on-call doctors each check that at least one other doctor is on duty and each then goes off call, leaving zero on duty. What is this anomaly called?",
          choices: [
            "Write skew",
            "Dirty write",
            "Lost update",
            "Non-repeatable read"
          ],
          answer: 0,
          explain: "Write skew: two transactions read an overlapping set, make disjoint writes, and together break an invariant neither broke alone. Snapshot isolation permits it; serializable does not."
        },
        {
          type: "truefalse",
          q: "Snapshot isolation, which many databases label repeatable read, forbids every anomaly that serializable forbids.",
          answer: false,
          explain: "Snapshot isolation prevents dirty reads and non-repeatable reads, and a stable snapshot hides the classic phantom from readers. But it still permits write skew, where two transactions read an overlapping set and write disjoint rows, which is why serializable snapshot isolation was developed."
        },
        {
          type: "fill",
          q: "The anomaly where two transactions read overlapping data, write to disjoint rows, and jointly violate an invariant is called write ____.",
          answer: "skew",
          accept: ["skew", "Skew"],
          explain: "Write skew is the signature weakness of snapshot isolation and is invisible in the original SQL standard's anomaly list, which was written with lock-based implementations in mind."
        },
        {
          type: "mcq",
          q: "Why is isolation a separate concern from the CAP/replication consistency discussion?",
          choices: [
            "Isolation only applies to read-only workloads while consistency applies to writes",
            "Isolation is about concurrent transactions on possibly one node; replication consistency is about what replicas expose to readers",
            "Isolation is a hardware property while consistency is a software property",
            "Isolation is only defined for distributed systems, consistency only for single nodes"
          ],
          answer: 1,
          explain: "A single-node database has isolation levels with no replication at all, and a replicated key-value store has consistency models with no transactions. Strict serializability is where the two concerns meet."
        }
      ]
    },
    {
      id: "l53",
      title: "Eventual consistency and conflict resolution (LWW, CRDTs)",
      intro: "What convergence guarantees, and the two main strategies for merging divergent replicas.",
      questions: [
        {
          type: "mcq",
          q: "What does eventual consistency actually promise?",
          choices: [
            "Reads return the latest write within a bounded, configurable time window",
            "If no new writes are made, replicas eventually converge to the same value",
            "Writes are applied to all replicas in the order they were issued",
            "Every read observes at least the value the same client last wrote"
          ],
          answer: 1,
          explain: "Eventual consistency is a liveness property with no time bound and no ordering guarantee. It says nothing about how long convergence takes or what you read in the meantime."
        },
        {
          type: "truefalse",
          q: "Last-write-wins conflict resolution can silently discard a write that was successfully acknowledged to a client.",
          answer: true,
          explain: "LWW picks one value by timestamp and drops the others. With concurrent writes (and especially with clock skew) an acknowledged write can be lost, which is why LWW is only safe when losing writes is acceptable, such as immutable-key caches."
        },
        {
          type: "fill",
          q: "A data structure whose merge operation is commutative, associative, and idempotent, so replicas converge regardless of message order, is called a ____.",
          answer: "CRDT",
          accept: ["CRDT", "crdt", "conflict-free replicated data type", "conflict free replicated data type"],
          explain: "Conflict-free Replicated Data Types (Shapiro, Preguica, Baquero, Zawirski, 2011) get convergence from the algebraic properties of merge, so no coordination or central arbiter is needed."
        },
        {
          type: "match",
          q: "Match each conflict-resolution approach to its defining behavior.",
          pairs: [
            ["Last-write-wins", "Keeps one value chosen by timestamp and discards the rest"],
            ["Sibling values kept for the client", "Returns all concurrent versions and lets application logic merge them"],
            ["CRDT merge", "Combines states with an order-independent function that always converges"]
          ],
          explain: "The three differ in who resolves the conflict: the database by clock, the application by custom logic, or the data type itself by construction."
        },
        {
          type: "mcq",
          q: "Version vectors (or vector clocks) are used in eventually consistent stores primarily to do what?",
          choices: [
            "Guarantee that writes are applied in wall-clock order across replicas",
            "Reduce the storage cost of keeping multiple replicas",
            "Provide linearizable reads without a quorum",
            "Distinguish causally related versions from genuinely concurrent ones"
          ],
          answer: 3,
          explain: "A version vector lets a replica tell whether one version happened before another or whether they are concurrent. Only truly concurrent versions are real conflicts needing resolution."
        },
        {
          type: "truefalse",
          q: "A CRDT counter that only ever increments, replicated as a per-replica map of counts and merged by taking the elementwise maximum, converges correctly under duplicate and reordered messages.",
          answer: true,
          explain: "This is the classic grow-only counter. Elementwise max is commutative, associative and idempotent, so duplicates and reorderings do not change the merged result."
        },
        {
          type: "mcq",
          q: "What is the main practical cost of using CRDTs instead of LWW?",
          choices: [
            "They require a consensus protocol to elect a merge coordinator",
            "They cannot support text editing or set semantics",
            "They carry extra metadata and constrain operations to those the type can merge",
            "They give up eventual convergence in exchange for lower latency"
          ],
          answer: 2,
          explain: "CRDTs need per-replica or per-element bookkeeping (tombstones, version vectors, causal context), and you can only express operations the chosen type supports. In exchange, no write is silently lost."
        }
      ]
    },
    {
      id: "l54",
      title: "Quorums: why R + W > N",
      intro: "The overlap arithmetic behind tunable consistency, and what it does not buy you.",
      questions: [
        {
          type: "fill",
          q: "When R + W > N, the pigeonhole principle guarantees that any read set and any write set must ____ on at least one replica.",
          answer: "overlap",
          accept: ["overlap", "Overlap", "intersect", "overlaps"],
          explain: "Overlap is the whole point of the inequality: if the two sets must share a replica, a read is guaranteed to touch a node holding the latest acknowledged write."
        },
        {
          type: "mcq",
          q: "With N = 5, which configuration satisfies the overlap condition while minimizing read latency?",
          choices: [
            "R = 1, W = 5",
            "R = 3, W = 3",
            "R = 2, W = 3",
            "R = 5, W = 1"
          ],
          answer: 0,
          explain: "R=1, W=5 gives 6 > 5 with the cheapest possible read, at the cost of writes that fail if any single replica is down. R=2,W=3 sums to 5, which does not exceed N and therefore does not guarantee overlap."
        },
        {
          type: "truefalse",
          q: "Satisfying R + W > N is by itself sufficient to make a Dynamo-style quorum store linearizable.",
          answer: false,
          explain: "Overlap guarantees a read set touches a replica holding the newest acknowledged write, but concurrent writes, sloppy quorums with hinted handoff, failed writes that partially applied, and read repair timing all break linearizability. Strict quorums are necessary, not sufficient."
        },
        {
          type: "mcq",
          q: "What is a sloppy quorum with hinted handoff?",
          choices: [
            "A quorum computed over a subset of the keyspace to reduce coordination",
            "Writes accepted by W reachable nodes that may not be the key's home nodes, later handed back",
            "A read quorum that is allowed to return before W acknowledgements arrive",
            "A quorum where the coordinator votes twice to break ties"
          ],
          answer: 1,
          explain: "Sloppy quorums raise write availability by accepting writes on whatever nodes are reachable, with hints so data is later delivered home. It breaks the R + W > N overlap guarantee for reads against the home nodes."
        },
        {
          type: "match",
          q: "Match each quorum setting to the operational property it buys.",
          pairs: [
            ["R = 1, W = N", "Cheapest possible reads, but one unavailable replica blocks every write"],
            ["R = N, W = 1", "Cheapest possible writes, but one unavailable replica blocks every read"],
            ["R = W = majority", "Both sides stay up while a minority of replicas is unavailable"]
          ],
          explain: "The read and write quorum sizes are a dial, not a fixed choice. Read-heavy workloads push W up and R down; write-heavy availability pushes the reverse."
        },
        {
          type: "mcq",
          q: "With N = 3 and R = W = 2, how many replica failures can the system tolerate while still serving both reads and writes?",
          choices: [
            "Zero",
            "One",
            "Two",
            "Three, because of hinted handoff"
          ],
          answer: 1,
          explain: "Two of three replicas must respond, so exactly one may be down. This is the same majority arithmetic that consensus protocols use for a 3-node cluster."
        },
        {
          type: "truefalse",
          q: "Anti-entropy repair (background replica comparison) is needed even in a system with a strict R + W > N quorum.",
          answer: true,
          explain: "Quorum overlap only fixes staleness on a read that happens to touch the current replica. Without read repair or a background anti-entropy process, replicas that missed writes stay stale and durability degrades over time."
        }
      ]
    },
    {
      id: "l55",
      title: "Consensus: Paxos, and why Raft won on comprehensibility",
      intro: "The agreement problem, the FLP result, and the structure of a Raft cluster.",
      questions: [
        {
          type: "mcq",
          q: "The FLP impossibility result (Fischer, Lynch, Paterson, 1985) states that in an asynchronous system with no timing bounds, consensus cannot be guaranteed if what happens?",
          choices: [
            "The network partitions into two equal halves",
            "Even a single process may crash",
            "More than one third of processes behave arbitrarily",
            "Messages may be reordered by the network"
          ],
          answer: 1,
          explain: "FLP shows no deterministic protocol guarantees both safety and termination in a fully asynchronous model with even one possible crash failure. Practical systems get around it with timeouts and randomization, which restore liveness in practice without breaking safety."
        },
        {
          type: "fill",
          q: "Raft decomposes consensus into leader election, log replication, and ____.",
          answer: "safety",
          accept: ["safety", "Safety", "safety properties"],
          explain: "Ongaro and Ousterhout's 2014 paper (In Search of an Understandable Consensus Algorithm) explicitly splits the problem into these three subproblems, which is the core of its comprehensibility claim."
        },
        {
          type: "order",
          q: "Order what happens in a Raft cluster after the leader crashes, from first to last.",
          items: [
            "A follower's election timeout expires without a heartbeat",
            "That follower increments its term and becomes a candidate, requesting votes",
            "A majority of servers grant it their vote for that term",
            "The new leader begins sending heartbeats and replicating log entries"
          ],
          explain: "Randomized election timeouts make it unlikely that two candidates repeatedly split the vote, which is how Raft restores liveness in practice despite FLP."
        },
        {
          type: "truefalse",
          q: "Raft and Multi-Paxos provide fundamentally different fault-tolerance guarantees, with Raft tolerating more failures.",
          answer: false,
          explain: "Both tolerate the failure of a minority of nodes (f failures with 2f+1 servers) under crash-stop assumptions. Raft's claimed advantage is understandability and a more prescriptive specification, not stronger guarantees."
        },
        {
          type: "mcq",
          q: "Why does a Raft leader refuse to commit an entry from a PREVIOUS term merely because it is stored on a majority?",
          choices: [
            "Because previous-term entries are always corrupt after an election",
            "Because committing them would require a second round of voting from clients",
            "Because such an entry could still be overwritten by a later leader; the leader commits it only indirectly by committing a current-term entry",
            "Because the log index counters reset on every term change"
          ],
          answer: 2,
          explain: "This is Raft's subtle commitment rule. Counting replicas alone is not sufficient for old-term entries, so a leader commits an entry from its own term, which indirectly commits everything before it."
        },
        {
          type: "match",
          q: "Match each consensus concept to its role.",
          pairs: [
            ["Term number", "A logical clock that lets servers detect and reject stale leaders"],
            ["Quorum of a majority", "Guarantees any two decision sets share at least one server"],
            ["Log entry", "A replicated command in an ordered sequence applied to the state machine"]
          ],
          explain: "Total-order broadcast plus a deterministic state machine is how consensus turns into a usable replicated service. The three pieces above are what make the order safe."
        },
        {
          type: "mcq",
          q: "Byzantine fault tolerant consensus differs from Raft and Paxos in what way?",
          choices: [
            "It removes the need for a leader entirely",
            "It tolerates network partitions, which Raft and Paxos cannot",
            "It provides eventual rather than strong consistency",
            "It tolerates nodes that lie or behave arbitrarily, typically needing more than two thirds honest"
          ],
          answer: 3,
          explain: "Raft and Paxos assume crash-stop faults: nodes may stop but never lie. BFT protocols handle arbitrary behavior at a higher cost, typically requiring more than two thirds of participants to be honest."
        }
      ]
    },
    {
      id: "l56",
      title: "Distributed transactions: 2PC, sagas, and the outbox pattern",
      intro: "Atomic commit across systems, and the practical alternatives when it is too expensive.",
      questions: [
        {
          type: "order",
          q: "Order the phases of two-phase commit, from first to last.",
          items: [
            "Coordinator sends prepare to all participants",
            "Participants durably write the prepare record and reply yes or no",
            "Coordinator durably records the global commit or abort decision",
            "Coordinator sends the decision and participants apply it"
          ],
          explain: "The coordinator's decision record is the point of no return. Once written, the decision must eventually be delivered to every participant, which is why the protocol cannot simply abort after a coordinator crash."
        },
        {
          type: "mcq",
          q: "What is the fundamental availability problem with two-phase commit?",
          choices: [
            "It requires all participants to use the same database engine",
            "If the coordinator crashes after prepare, participants hold locks and cannot unilaterally decide",
            "It cannot be used across more than two participants",
            "Its prepare phase requires a majority quorum that small clusters cannot form"
          ],
          answer: 1,
          explain: "2PC is a blocking protocol. A participant that voted yes must wait for the coordinator's decision, holding locks the entire time, so a coordinator failure can stall the resources indefinitely."
        },
        {
          type: "fill",
          q: "A saga replaces an atomic distributed transaction with a sequence of local transactions plus ____ transactions that semantically undo prior steps on failure.",
          answer: "compensating",
          accept: ["compensating", "compensation", "compensating transactions"],
          explain: "Sagas (Garcia-Molina and Salem, 1987) trade atomicity for availability. Compensation is semantic undo, such as issuing a refund, not a rollback of the original transaction."
        },
        {
          type: "truefalse",
          q: "A saga provides the same isolation guarantee as a single ACID transaction spanning the same operations.",
          answer: false,
          explain: "Saga steps commit individually, so intermediate states are visible to other readers. Systems mitigate this with semantic locks, pending states, or reordering steps, but there is no isolation for free."
        },
        {
          type: "mcq",
          q: "The transactional outbox pattern solves which specific problem?",
          choices: [
            "Ordering messages consumed by multiple independent subscribers",
            "Deduplicating messages at the consumer without idempotency keys",
            "Atomically updating the database and publishing an event without a distributed transaction",
            "Reducing the number of round trips in a two-phase commit"
          ],
          answer: 2,
          explain: "Writing the row and the outbox record in ONE local transaction makes the pair atomic. A separate relay then reads the outbox and publishes, which converts the dual-write problem into an at-least-once delivery problem."
        },
        {
          type: "match",
          q: "Match each approach to its defining trade-off.",
          pairs: [
            ["Two-phase commit", "Preserves atomicity but blocks on coordinator failure while holding locks"],
            ["Saga", "Stays available but exposes intermediate states and needs semantic undo"],
            ["Transactional outbox", "Avoids dual-write inconsistency at the cost of at-least-once delivery"]
          ],
          explain: "Each buys a different property. The outbox is often combined with sagas: it makes each saga step's local commit plus event emission atomic."
        },
        {
          type: "truefalse",
          q: "Because an outbox relay delivers at least once, downstream consumers must be idempotent.",
          answer: true,
          explain: "The relay can crash after publishing but before marking the outbox row sent, so duplicates are expected. Idempotency keys or deduplication at the consumer are required for correctness, not optional hardening."
        }
      ]
    }
  ]
});
