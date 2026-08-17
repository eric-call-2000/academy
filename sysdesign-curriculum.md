# System Design — Curriculum (25 units)

Track design doc for the Academy platform. Written 2026-08-11.

## Track manifest

Add to `tracks.js`, immediately after the `ai` track (it is the sequel to AI & Coding):

```js
window.ACADEMY.defineTrack({ id: "sysdesign", prefix: "sysdesign", count: 25, title: "System Design", icon: "\u{1F3DB}\u{FE0F}", color: "#eab308", blurb: "Architect at AI speed — distributed systems, trade-offs, and running agents at the max level." });
```

- **id / prefix:** `sysdesign` (id === prefix — no `behaviorism`-style mismatch)
- **Files:** `sysdesign-unit1.js` … `sysdesign-unit25.js`, flat at repo root
- **Color:** `#eab308` (gold) — unused by the 13 existing tracks
- **Lesson ids:** `l1` … `l200`, contiguous, 8 per unit (unit N owns `l{8N-7}`…`l{8N}`)

## Shape

25 units × 8 lessons × 7 questions = **200 lessons / 1,400 questions**, matching the psychology-track format.

Question types per lesson (mix, don't repeat one type more than twice): `mcq` (4 choices, `answer` index), `truefalse`, `fill` (with `accept` array), `match` (3 pairs), `order` (4 items).

## Why this track exists

The premise: an AI agent can write the code, but it cannot make the architecture call for you, and it cannot tell you when its own output is wrong. Both of those are judgment, and judgment is what separates someone getting max-level leverage out of AI from someone prompting and praying.

So Parts 1–3 teach the substance — real distributed-systems fundamentals — and Part 4 teaches the practice of directing AI on top of it. Part 4 lands harder *because* of Parts 1–3: units 20–23 assume you can already tell a good design from a plausible one.

**Tone:** vendor-neutral and durable. Teach the mechanism (why an LSM tree trades read cost for write throughput), not the product tour. Name real systems, papers, and people where they anchor a concept — Dynamo, Raft, Kafka, the Google SRE book — but never let a lesson depend on a specific version number or pricing page.

---

# Part 1 — Foundations (units 1–8)

## Unit 1 — Thinking in Systems 🧭
*The vocabulary and mental habits of design: requirements, constraints, estimation, and the fact that every choice is a trade.*

1. What system design actually is — and what it isn't
2. Functional vs non-functional requirements
3. Latency, throughput, and the numbers worth memorizing
4. Back-of-the-envelope estimation
5. There is no best design, only trade-offs
6. Finding the bottleneck (and Amdahl's law)
7. Vertical vs horizontal scaling
8. Drawing a system: components, boundaries, data flow

**Anchors:** Jeff Dean's "latency numbers every programmer should know" (memory ~100ns, SSD read ~16µs, cross-country round trip ~150ms — teach orders of magnitude, not exact figures); Amdahl's law; the distinction between p50 and p99 introduced early.

## Unit 2 — The Network Layer 🌐
*How a request actually travels, and every box it passes through on the way.*

1. The lifecycle of a request, end to end
2. DNS: how a name becomes an address
3. TCP vs UDP — and what QUIC/HTTP3 changed
4. HTTP semantics: methods, status codes, safe vs idempotent
5. TLS and what HTTPS actually guarantees
6. Load balancing: layer 4 vs layer 7
7. Reverse proxies and API gateways
8. CDNs and pushing work to the edge

**Anchors:** three-way handshake; head-of-line blocking and why QUIC runs on UDP; the fact that GET/PUT/DELETE are idempotent but POST is not; sticky sessions as a scaling smell.

## Unit 3 — Relational Data Modeling 🗄️
*The default datastore, and the one most engineers use without understanding.*

1. Tables, keys, and relationships
2. Normalization — and when to deliberately denormalize
3. Indexes and B-tree mechanics
4. Reading a query plan (EXPLAIN)
5. ACID and what a transaction promises
6. Joins, the N+1 problem, and the ORM trap
7. Connection pooling and why databases run out of connections
8. Schema migrations that don't take the site down

**Anchors:** composite index column order matters (leftmost prefix rule); an index speeds reads and slows writes; `EXPLAIN ANALYZE` shows actual vs estimated rows; expand-contract migration previewed here, taught fully in Unit 14.

## Unit 4 — Storage Engines & NoSQL 🧱
*What's under the database, and the families that gave up SQL to get something else.*

1. Why NoSQL exists — what relational gave up
2. Key-value stores
3. Document stores
4. Wide-column stores
5. B-tree vs LSM-tree: the fundamental write trade
6. Write-ahead logs and how durability really works
7. Object/blob storage and when files don't belong in a database
8. Choosing a datastore for a given access pattern

**Anchors:** LSM = sequential writes + compaction + read amplification (RocksDB, Cassandra); B-tree = in-place update + write amplification (Postgres, MySQL); Amazon's Dynamo paper (2007) as the origin of the leaderless family; BigTable for wide-column.

## Unit 5 — Caching ⚡
*The highest-leverage optimization, and the source of the subtlest bugs.*

1. Why caching works: temporal and spatial locality
2. The cache layers: client, CDN, application, database
3. Read strategies: cache-aside vs read-through
4. Write strategies: write-through, write-back, write-around
5. Eviction policies: LRU, LFU, TTL
6. Invalidation — the genuinely hard problem
7. Stampedes, thundering herds, and hot keys
8. Redis in practice: data structures beyond GET/SET

**Anchors:** Phil Karlton's two hard things; cache-aside is the most common pattern and it's the one with the race; stampede fixes = request coalescing, jittered TTLs, early recompute.

## Unit 6 — Replication & Partitioning 🔀
*Two different answers to "one machine isn't enough," and they solve different problems.*

1. Why replicate: availability and read scale
2. Leader–follower replication
3. Replication lag and read-your-writes consistency
4. Multi-leader and leaderless replication
5. Partitioning strategies: range, hash, directory
6. Consistent hashing
7. Rebalancing and hot partitions
8. Routing a request to the right shard

**Anchors:** replication copies the same data, partitioning splits different data — the single most-confused pair in the track; consistent hashing with virtual nodes; the celebrity/hot-key problem foreshadows Unit 16.

## Unit 7 — Consistency & Consensus 🤝
*The theory that governs what a distributed system can and cannot promise.*

1. "Consistency" means at least three different things
2. The CAP theorem — and the four things it does not say
3. PACELC: the trade that exists even without partitions
4. Isolation levels and the anomalies they permit
5. Eventual consistency and conflict resolution (LWW, CRDTs)
6. Quorums: why R + W > N
7. Consensus: Paxos, and why Raft won on comprehensibility
8. Distributed transactions: 2PC, sagas, and the outbox pattern

**Anchors:** CAP's "consistency" is linearizability, not ACID's C — call this out explicitly; CA is not a real choice for a distributed system since partitions are not optional; Raft (Ongaro & Ousterhout, 2014) has leader election + log replication + safety; sagas trade atomicity for compensating transactions.

## Unit 8 — Asynchrony: Queues & Streams 📬
*Decoupling in time — the move that makes systems both more resilient and harder to reason about.*

1. Synchronous vs asynchronous, and what you buy
2. Message queues and work distribution
3. Publish/subscribe
4. The log as a data structure (the Kafka model)
5. Delivery semantics: at-most-once, at-least-once, exactly-once
6. Idempotency and deduplication
7. Backpressure, retries, and dead-letter queues
8. Event-driven architecture: choreography vs orchestration

**Anchors:** "exactly-once delivery" is effectively impossible over an unreliable network — what people mean is at-least-once delivery plus idempotent processing, and this misconception is worth a full question; queue (work is consumed) vs log (work is retained and replayable).

---

# Part 2 — Architecture in Practice (units 9–14)

## Unit 9 — API Design & Contracts 🔌
*The contract is the product; everything downstream is an implementation detail.*

1. Designing resources, and the REST maturity ladder
2. Pagination: offset vs cursor
3. Error shapes and status-code discipline
4. Versioning and backward compatibility
5. Idempotency keys for unsafe operations
6. Rate limiting and quotas, from the API's side
7. gRPC and GraphQL — what each actually wins
8. Webhooks and callbacks

**Anchors:** offset pagination breaks when rows are inserted mid-scan — cursor pagination is the correct default; Stripe's idempotency-key model; GraphQL solves over/under-fetching and buys an N+1 problem; additive-only changes are backward compatible.

## Unit 10 — Monolith, Modular Monolith, Microservices 🧩
*The most over-decided question in the industry.*

1. The monolith is fine — and the signals that it isn't
2. Bounded contexts and finding real domain boundaries
3. The modular monolith
4. What microservices actually cost
5. Service-to-service communication patterns
6. Data ownership: no shared database
7. The strangler fig migration
8. Conway's law and team topology

**Anchors:** distributed monolith as the worst outcome; a network call turns a compile-time error into a 3am page; Martin Fowler's "MonolithFirst"; Conway (1967).

## Unit 11 — Reliability Engineering 🛟
*Designing for the assumption that everything fails, including the thing you added to prevent failure.*

1. Availability math: the nines and the error budget
2. SLI, SLO, SLA — three different things
3. Failure modes: partial, gray, and cascading
4. Timeouts and deadline propagation
5. Retries, exponential backoff, and jitter
6. Circuit breakers and bulkheads
7. Graceful degradation and load shedding
8. Redundancy, failover, and disaster recovery (RTO/RPO)

**Anchors:** 99.9% ≈ 43 min/month of downtime, 99.99% ≈ 4.4 min/month; naive retries cause the outage they were meant to survive (retry storms) — jitter is not optional; Google SRE book; a gray failure is worse than a crash because health checks still pass.

## Unit 12 — Observability 🔭
*You cannot operate what you cannot see, and dashboards are not the same as understanding.*

1. Monitoring vs observability
2. Structured logging and what to log
3. Metrics: counters, gauges, histograms
4. Percentiles, and why averages lie
5. Distributed tracing: spans, trace context, sampling
6. Alerting on symptoms, not causes
7. The golden signals and useful dashboards
8. Debugging a live incident, and the blameless postmortem

**Anchors:** the four golden signals (latency, traffic, errors, saturation); a p99 the average hides; every user request touching 100 services means p99 per service is the common case end-to-end; alert fatigue as a real failure mode.

## Unit 13 — Security by Design 🔐
*Security is an architecture property, not a checklist you run at the end.*

1. Threat modeling: assets, actors, trust boundaries
2. Authentication: sessions, tokens, OAuth 2.0 and OIDC
3. Authorization models: RBAC and ABAC
4. Secrets management and key rotation
5. The OWASP Top 10, in practice
6. Encryption in transit and at rest
7. Least privilege and shrinking the blast radius
8. Abuse resistance: rate limits, bots, and enumeration

**Anchors:** authentication ≠ authorization; OAuth is a delegation protocol, OIDC is the identity layer on top of it; parameterized queries kill injection; never roll your own crypto; broken access control has topped the OWASP list.

## Unit 14 — Infrastructure & Delivery 🚢
*Getting the design into production, repeatedly and safely.*

1. Containers and orchestration
2. Environments, configuration, and the twelve-factor idea
3. CI/CD pipelines
4. Infrastructure as code
5. Blue/green and canary deployment
6. Feature flags and decoupling deploy from release
7. Zero-downtime schema migrations: expand–contract
8. Cost engineering: the bill is a design constraint

**Anchors:** config in the environment, not the repo; expand–contract in full (add column → dual-write → backfill → read new → drop old) since it's the migration that most often takes a site down; deploying is not the same as releasing.

---

# Part 3 — Case Studies (units 15–17)

*These units apply Parts 1–2. Each lesson names the requirement, forces an estimate, then makes one design decision and its trade-off explicit.*

## Unit 15 — Case Studies I: The Classics 🏗️
*The canonical problems, and the framework for attacking any of them.*

1. A repeatable framework: requirements → estimate → API → data → scale
2. Design a URL shortener
3. Design a rate limiter
4. Design unique ID generation at scale
5. Design a notification/fan-out service
6. Design a distributed key-value store
7. Design a web crawler
8. Reviewing a design: where does this fail first?

**Anchors:** base62 vs hashing for short codes; token bucket vs leaky bucket vs sliding window; Twitter Snowflake's timestamp + machine id + sequence layout and why it beats a shared counter; politeness and dedup in crawlers.

## Unit 16 — Case Studies II: Social & Realtime 💬
*Systems where the fan-out and the freshness are the whole problem.*

1. Design a news feed: push vs pull fan-out
2. Feed ranking and the celebrity problem
3. Design a chat/messaging system
4. Presence, delivery receipts, and read state
5. Realtime transports: long polling, SSE, WebSockets
6. Design typeahead/autocomplete
7. Search: the inverted index
8. Counting at scale: approximation over exactness

**Anchors:** hybrid fan-out (push for normal users, pull for celebrities) is the real-world answer; tries + precomputed top-k for autocomplete; HyperLogLog and Count-Min Sketch for cardinality and frequency at scale; WebSockets are stateful and that changes your load balancer.

## Unit 17 — Case Studies III: Heavy Data & Money 💾
*Big objects, and the systems where being wrong costs actual dollars.*

1. Design a file storage and sync service
2. Chunking, deduplication, and delta sync
3. Video upload and the transcoding pipeline
4. Streaming delivery and adaptive bitrate
5. Design a payments ledger (double-entry)
6. Moving money exactly once
7. Proximity and geospatial services
8. Multi-region architecture and data residency

**Anchors:** content-addressed chunks make dedup and resume fall out for free; a ledger is append-only — never UPDATE a balance, derive it; idempotency keys plus a state machine are how you avoid double-charging; geohash/quadtree/S2 for proximity; GDPR-style residency as an architectural constraint, not a legal footnote.

---

# Part 4 — Using AI at the Max Level (units 18–25)

*The premise of this half: leverage comes from directing and verifying, not from typing. Every unit here assumes the reader can now evaluate a design on the merits.*

## Unit 18 — How LLMs Actually Work 🤖
*Enough real mechanism to predict what a model will do, instead of being surprised by it.*

1. Tokens and tokenization
2. Next-token prediction, temperature, and top-p
3. The context window and why attention is expensive
4. Pretraining, fine-tuning, and RLHF
5. Hallucination, knowledge cutoffs, and having no ground truth
6. Embeddings and vector similarity
7. Tokens as the unit of cost and latency
8. Model selection: capability tiers and what each is for

**Anchors:** a model samples a distribution — it is not retrieving a fact, which is *why* fluent wrongness is the default failure mode; attention cost grows quadratically with sequence length; temperature 0 is more deterministic but not guaranteed identical; cosine similarity over embeddings ≠ semantic truth.

## Unit 19 — Prompt & Context Engineering 🎯
*The real skill is what you put in the window, not the magic words.*

1. A prompt is a specification
2. Structure: role, task, constraints, output format
3. Few-shot examples and when they beat instructions
4. Structured output: schemas and tool-forced responses
5. Context curation — garbage in, confidently wrong out
6. Retrieval (RAG): chunking, embedding, ranking
7. How RAG fails, and how to measure it
8. Prompt caching and controlling cost

**Anchors:** more context is not better context — irrelevant material measurably degrades output; schema-validated output beats parsing prose; retrieval quality dominates generation quality in RAG; put the stable prefix first so caching can work.

## Unit 20 — Spec-Driven Development 📋
*The highest-leverage minute is the one before the agent starts.*

1. Why vague prompts produce plausible garbage
2. Anatomy of an executable spec
3. Acceptance criteria and definition of done
4. Decomposing work into agent-sized tasks
5. Interfaces first: contracts before implementation
6. Repo conventions as durable context (project instruction files)
7. Plan, then build
8. When to spec, and when to just do it

**Anchors:** ambiguity is resolved by the model's prior, and its prior is not your intent; a task an agent can verify itself is a task it can finish; the spec is reusable, the conversation isn't.

## Unit 21 — Agentic Coding Workflows 🔁
*A loop with tools, running against a real repository.*

1. What makes something an agent: the loop and the tools
2. Tool use and function calling
3. The plan → act → verify loop
4. Read before write: grounding in the actual codebase
5. Persistent memory and project context
6. Guardrails, permissions, and blast radius
7. Subagents and delegation
8. Diagnosing an agent that went sideways

**Anchors:** an agent without a verification step is a text generator with file access; grounding beats recall — make it read the file rather than remember the API; delegate to a subagent when the work is read-heavy and only the conclusion matters; context exhaustion is the most common silent failure.

## Unit 22 — Verification at AI Speed ✅
*Generation got cheap, so review became the bottleneck. This unit is the core of the whole track.*

1. The bottleneck moved from writing to reviewing
2. Reading a diff critically
3. Tests as the executable contract
4. How AI-written code fails: plausible, idiomatic, wrong
5. Adversarial review — try to refute, not confirm
6. Types, linters, and static analysis as free verification
7. Security review of generated code
8. Knowing when to throw it away and restart

**Anchors:** the characteristic failure is code that compiles, reads well, passes the happy path, and is wrong at the boundary; ask "what input breaks this?" not "does this look right?"; a test written by the same agent that wrote the bug often encodes the bug; sunk cost is the reason people ship bad generated code.

## Unit 23 — Multi-Agent Orchestration 🕸️
*When one context isn't enough, and how to structure many without burning the budget.*

1. When one agent isn't enough
2. Fan-out and fan-in
3. Pipelines vs barriers (and the cost of synchronizing)
4. Judge and verifier agents
5. Perspective diversity: N identical agents ≠ N useful agents
6. Context isolation and clean handoff
7. Token budgets and concurrency limits
8. Convergence: loop-until-dry without looping forever

**Anchors:** a barrier is only justified when the next stage genuinely needs every prior result; give verifiers *different lenses* (correctness, security, reproducibility) rather than running the same skeptic three times; dedupe against everything seen, not against what survived, or the loop never converges; concurrency caps are real and hitting them mid-run wastes the whole run.

## Unit 24 — Designing AI Products 🧪
*Shipping a feature whose core component is non-deterministic.*

1. Non-determinism as a system property
2. Evals: the test suite for an AI feature
3. Golden sets, rubrics, and LLM-as-judge
4. Guardrails: validating inputs and outputs
5. Prompt injection and untrusted content
6. Caching, fallbacks, and degradation for model calls
7. Cost and latency engineering: streaming and model routing
8. Human-in-the-loop: designing the review surface

**Anchors:** you cannot unit-test a distribution — you measure it against a golden set; anything the model reads is data, never instructions, and that boundary is the entire defense against injection; an LLM judge inherits the biases of the model judging; route cheap requests to a small model and escalate.

## Unit 25 — The AI-Leveraged Engineer 🏛️
*What actually changed, what didn't, and where the durable value sits.*

1. What changed, and what didn't
2. Taste: judgment as the skill that compounds
3. Own the architecture, delegate the typing
4. What never to delegate
5. Learning without atrophying: staying sharp while automating
6. Communicating design: docs, ADRs, and diagrams
7. Leading a team that ships with AI
8. Staying current without chasing every release

**Anchors:** the constraint on a system was never typing speed; you remain accountable for output you did not write; never delegate the problem definition, the security boundary, or the final judgment call; write the ADR because the reasoning is the artifact that outlives the code.

---

## Build notes

**Generation:** one agent per unit, via `Workflow` — pipeline generate → adversarial fact-check verify. Keep concurrency **≤ 20 agents** (32+ has hit server rate limits on this project before). 25 units is roughly a fifth of the 125-unit psych run, so this should complete inside one session's token budget, but the resume path (`resumeFromRunId`) still applies if it doesn't.

**Agents write files directly** at `Documents\Projects\Claude Projects\academy\sysdesign-unitN.js` and return compact JSON, same as the psych build.

**Deterministic validation after generation:**
- 8 lessons per unit, 7 questions per lesson
- lesson ids `l1`–`l200`, unique and contiguous across the track
- answer-key sanity: `mcq.answer` in range 0–3, `fill.accept` contains `answer`, `match.pairs` length 3, `order.items` length 4
- no unit reuses the same question type more than twice within a lesson

**Then:** live play-through on port 5175, then push to `eric-call-2000/academy` (Pages auto-builds in ~1 min).

**Fact-check emphasis for the verify agents.** These are the claims most likely to come back subtly wrong, and each one is load-bearing:
- CAP's C is linearizability, not ACID's C, and CA is not an available choice
- "exactly-once delivery" vs at-least-once delivery + idempotent processing
- replication vs partitioning kept strictly distinct
- LSM vs B-tree amplification directions (LSM: write-optimized, read amplification; B-tree: read-optimized, write amplification)
- availability-nines arithmetic
- idempotency of HTTP methods (POST is not; PUT and DELETE are)
- OAuth 2.0 is authorization/delegation; OIDC is the identity layer
- Unit 18's model mechanics — no claims about specific vendors' current pricing, limits, or version numbers, which date instantly
