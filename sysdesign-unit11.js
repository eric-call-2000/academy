window.ACADEMY.addUnit("sysdesign", {
  id: "unit-11",
  title: "Reliability Engineering",
  color: "#eab308",
  icon: "\u{1F6DF}",
  description: "Designing for the assumption that everything fails, including the thing you added to prevent failure.",
  lessons: [
    {
      id: "l81",
      title: "Availability math: the nines and the error budget",
      intro: "How availability percentages convert to real downtime, and how error budgets turn that math into a decision tool.",
      questions: [
        {
          type: "mcq",
          q: "A service promises 99.9% availability measured over a 30-day month. Roughly how much downtime does that permit in that month?",
          choices: [
            "About 4.3 minutes",
            "About 43 minutes",
            "About 7.2 hours",
            "About 21.6 minutes"
          ],
          answer: 1,
          explain: "A 30-day month is 43,200 minutes. 0.1% of 43,200 is 43.2 minutes, so 99.9% allows roughly 43 minutes of downtime per 30-day month."
        },
        {
          type: "mcq",
          q: "Over a full year, 99.99% availability permits approximately how much downtime?",
          choices: [
            "About 8.76 hours",
            "About 5.26 hours",
            "About 52.6 minutes",
            "About 4.32 minutes"
          ],
          answer: 2,
          explain: "A year is about 525,600 minutes; 0.01% of that is about 52.6 minutes. The same target is about 4.32 minutes per 30-day month."
        },
        {
          type: "fill",
          q: "The difference between 100% and your availability SLO, expressed as an allowed amount of unreliability you may spend, is called the error ____.",
          answer: "budget",
          accept: ["budget", "budgets", "error budget"],
          explain: "The error budget is 100% minus the SLO. Spending it on risky launches is a legitimate choice; running out is the signal to stop shipping and stabilize."
        },
        {
          type: "truefalse",
          q: "99% availability allows roughly 7.2 hours of downtime in a 30-day month.",
          answer: true,
          explain: "1% of 43,200 minutes is 432 minutes, which is 7.2 hours. Each extra nine divides the allowed downtime by ten."
        },
        {
          type: "order",
          q: "Order these availability targets from the MOST allowed downtime to the LEAST.",
          items: [
            "99% - about 7.2 hours per 30-day month",
            "99.9% - about 43.2 minutes per 30-day month",
            "99.99% - about 4.32 minutes per 30-day month",
            "99.999% - about 26 seconds per 30-day month"
          ],
          explain: "Every additional nine cuts the permitted downtime by a factor of ten, which is why each nine costs disproportionately more engineering effort."
        },
        {
          type: "mcq",
          q: "Service A (99.9%) calls Service B (99.9%) synchronously, and A cannot serve its request without B. Ignoring correlated failures, what is A's realistic ceiling?",
          choices: [
            "Still 99.9%, because A retries B",
            "99.95%, the average of the two",
            "About 99.8%, the product of the two",
            "99.99%, because two components add redundancy"
          ],
          answer: 2,
          explain: "Hard dependencies in series multiply: 0.999 * 0.999 is about 0.998. Adding a required dependency can only lower your ceiling unless you can degrade without it."
        },
        {
          type: "truefalse",
          q: "If a team has consumed only a small fraction of its error budget well before the period ends, that is unambiguous evidence the service is being run correctly.",
          answer: false,
          explain: "A chronically unspent error budget usually means the SLO is set too loosely or the team is over-investing in reliability instead of shipping features. The budget is meant to be spent, not hoarded."
        }
      ]
    },
    {
      id: "l82",
      title: "SLI, SLO, SLA - three different things",
      intro: "Separating the measurement, the internal target, and the external contract that carries penalties.",
      questions: [
        {
          type: "match",
          q: "Match each term to its precise meaning.",
          pairs: [
            ["SLI", "The measurement itself, such as the fraction of requests served under 300 ms"],
            ["SLO", "The internal target value that the measurement is expected to meet"],
            ["SLA", "The external contract that attaches consequences such as refunds when the target is missed"]
          ],
          explain: "SLI is what you measure, SLO is what you aim for internally, SLA is what you owe a customer if you miss. Only the SLA has contractual teeth."
        },
        {
          type: "mcq",
          q: "Why should a published SLA usually be looser than the internal SLO for the same service?",
          choices: [
            "Because SLAs are measured over shorter windows than SLOs",
            "Because SLAs measure latency while SLOs measure availability",
            "Because the SLO must be met exactly or the SLA is void",
            "Because the gap gives you room to detect and fix degradation before you owe customers anything"
          ],
          answer: 3,
          explain: "Setting the internal target stricter than the contractual one creates a buffer. Breaching the SLO becomes an internal alarm rather than an immediate financial liability."
        },
        {
          type: "fill",
          q: "The specific measurement a reliability target is computed from, such as the proportion of successful HTTP requests, is the service level ____.",
          answer: "indicator",
          accept: ["indicator", "indicators", "sli", "service level indicator"],
          explain: "The Service Level Indicator is the raw measurement. Without a well-defined SLI, an SLO is just a number with no way to tell whether it was met."
        },
        {
          type: "truefalse",
          q: "A well-formed SLI should be expressed as a ratio of good events to total valid events over a defined window.",
          answer: true,
          explain: "Framing an SLI as good events divided by valid events makes it aggregatable and directly comparable to a percentage SLO."
        },
        {
          type: "mcq",
          q: "Which availability SLI most closely reflects what users actually experience?",
          choices: [
            "Server process uptime as reported by the host monitoring agent",
            "The fraction of successful responses measured at the load balancer or client",
            "Mean time between deploys of the service binary",
            "CPU utilization staying below its configured threshold"
          ],
          answer: 1,
          explain: "Process uptime and CPU are proxies that can look healthy while users get errors. Request success rate measured close to the user captures the real experience."
        },
        {
          type: "mcq",
          q: "A team reports mean latency of 120 ms and declares its latency SLO met. What is the main flaw in this reasoning?",
          choices: [
            "Mean latency should be compared against throughput, not an SLO",
            "Latency SLOs are only valid for write requests",
            "The mean hides the tail, so a small share of very slow requests is invisible",
            "Mean latency cannot be computed without knowing the error rate"
          ],
          answer: 2,
          explain: "Latency distributions are heavily skewed. Good SLOs are stated as a percentile threshold, for example 99% of requests under 300 ms, precisely so the tail is visible."
        },
        {
          type: "truefalse",
          q: "Missing an internal SLO automatically triggers the financial penalties described in the SLA.",
          answer: false,
          explain: "Penalties are tied to the SLA only. The SLO is an internal target, deliberately stricter, that acts as an early warning before contractual thresholds are crossed."
        }
      ]
    },
    {
      id: "l83",
      title: "Failure modes: partial, gray, and cascading",
      intro: "Why the failures that hurt most are the ones that do not look like failures.",
      questions: [
        {
          type: "mcq",
          q: "What makes gray failure especially dangerous compared with an outright crash?",
          choices: [
            "It only affects write paths, which are harder to retry",
            "It is always caused by hardware rather than software",
            "The node still passes health checks, so it keeps receiving traffic while serving degraded results",
            "It cannot be reproduced in a staging environment"
          ],
          answer: 2,
          explain: "Gray failure is a differential observation: the system's own health check sees a healthy node while clients see errors or timeouts. Automated recovery never fires because nothing looks broken."
        },
        {
          type: "fill",
          q: "A failure that starts in one component and spreads because its load is redistributed onto neighbors that then also fail is called a ____ failure.",
          answer: "cascading",
          accept: ["cascading", "cascade", "cascading failure"],
          explain: "When a failed replica's traffic shifts to survivors already near capacity, they overload and fail too, propagating the outage through the fleet."
        },
        {
          type: "truefalse",
          q: "A shallow health check that returns 200 as long as the process is listening can mask a node whose dependency pool is exhausted.",
          answer: true,
          explain: "Shallow liveness checks only prove the process is running. A deeper readiness check that exercises the real dependency path is what catches this class of gray failure."
        },
        {
          type: "mcq",
          q: "A cache in front of a database loses all its entries at once. Every request now goes to the database, which collapses. What is this pattern called?",
          choices: [
            "Thundering herd, also described as a cache stampede",
            "Split brain",
            "Head-of-line blocking",
            "Backpressure inversion"
          ],
          answer: 0,
          explain: "The herd of simultaneous misses hits the origin all at once. Request coalescing, staggered TTLs, and serving stale entries during refresh are the standard mitigations."
        },
        {
          type: "match",
          q: "Match each failure mode to its defining characteristic.",
          pairs: [
            ["Fail-stop", "The component halts outright and its failure is detectable by others"],
            ["Gray failure", "The component appears healthy to monitoring but degrades what clients observe"],
            ["Byzantine failure", "The component keeps running and returns arbitrary or contradictory results"]
          ],
          explain: "Fail-stop is the easiest to handle because detection is trivial. Gray and Byzantine failures are hard precisely because the component keeps participating."
        },
        {
          type: "truefalse",
          q: "Adding more retries and more aggressive failover is a reliable way to stop a cascading failure once it has started.",
          answer: false,
          explain: "Retries and failover both add load to a system that is already overloaded, which accelerates the cascade. Shedding load and reducing concurrency are what actually stop it."
        },
        {
          type: "mcq",
          q: "Which design choice most directly limits the blast radius of a partial failure?",
          choices: [
            "Increasing the global connection pool size on every service",
            "Partitioning traffic into cells or shards so a failure affects only one partition",
            "Configuring a single shared thread pool for all downstream calls",
            "Raising client timeouts so slow responses are not counted as errors"
          ],
          answer: 1,
          explain: "Cell-based or sharded architectures bound how many users any single failure can touch. A shared global pool does the opposite by coupling every caller together."
        }
      ]
    },
    {
      id: "l84",
      title: "Timeouts and deadline propagation",
      intro: "Setting time limits that reflect the caller's real budget instead of each hop inventing its own.",
      questions: [
        {
          type: "mcq",
          q: "What is the core advantage of propagating an absolute deadline instead of giving each hop its own fixed timeout?",
          choices: [
            "It removes the need to configure any timeout at the edge",
            "It guarantees that every downstream call completes successfully",
            "Downstream hops know the remaining time and abandon work the caller has already given up on",
            "It converts synchronous calls into asynchronous ones automatically"
          ],
          answer: 2,
          explain: "A deadline carried through the call chain shrinks as time is consumed. Each hop can refuse work that cannot finish in time, so nobody burns capacity on a doomed request."
        },
        {
          type: "fill",
          q: "A request that has no timeout at all can hold a connection and a thread until the process restarts, effectively creating a resource ____.",
          answer: "leak",
          accept: ["leak", "leaks", "resource leak"],
          explain: "Unbounded waits accumulate. Every hung request pins a connection, a thread, or a slot until exhaustion, which is why no remote call should ever be issued without a timeout."
        },
        {
          type: "truefalse",
          q: "A caller's timeout should generally be at least as long as the total timeout budget of the work it triggers downstream.",
          answer: true,
          explain: "If the caller gives up before the callee can possibly finish, the downstream work is wasted and the caller may retry, multiplying load. Timeout budgets should nest, shrinking as you go deeper."
        },
        {
          type: "order",
          q: "Order these steps as a deadline flows through a three-hop request path.",
          items: [
            "The edge assigns a deadline, for example now plus 800 ms, and attaches it to the request",
            "Service A subtracts its own elapsed time and forwards the reduced remaining budget to B",
            "Service B checks the remaining budget, sees it is nearly zero, and fails fast without calling C",
            "The edge returns an error or a degraded response before the client's own limit expires"
          ],
          explain: "Deadline propagation converts a chain of independent timeouts into one shared budget, so late hops stop doing work whose result can no longer be used."
        },
        {
          type: "mcq",
          q: "A team sets every service timeout to a uniform 30 seconds. What is the most likely consequence under load?",
          choices: [
            "Threads and connections stay occupied for a long time, so queues build up and the system fails slowly instead of shedding",
            "Downstream services will reject requests earlier than necessary",
            "Retry budgets will be consumed before the first attempt completes",
            "Latency percentiles will improve because fewer requests are cancelled"
          ],
          answer: 0,
          explain: "Long uniform timeouts turn overload into deep queueing. Timeouts should be derived from observed latency, typically a modest multiple of the high percentile, not picked as a round number."
        },
        {
          type: "truefalse",
          q: "A client timeout guarantees that the server stopped doing the work.",
          answer: false,
          explain: "Unless cancellation is explicitly propagated, the server usually keeps executing and may still commit a write. This is why timed-out mutations need idempotency keys."
        },
        {
          type: "mcq",
          q: "Which timeout setting is the most defensible starting point for a downstream call?",
          choices: [
            "A value slightly above the observed p99 latency for that call, revisited as latency changes",
            "The default provided by the HTTP client library, whatever it happens to be",
            "The mean latency of the call, so slow requests are cut off quickly",
            "The same value used by every other call in the service, for consistency"
          ],
          answer: 0,
          explain: "Anchoring to the measured tail latency of that specific call keeps healthy requests from being cut off while still bounding the wait. Library defaults are frequently infinite."
        }
      ]
    },
    {
      id: "l85",
      title: "Retries, exponential backoff, and jitter",
      intro: "Retrying safely, and why naive retries turn a small incident into a large one.",
      questions: [
        {
          type: "mcq",
          q: "Why is jitter added to exponential backoff rather than using clean doubling intervals?",
          choices: [
            "It removes the need for a maximum retry limit",
            "It makes retry timing reproducible for debugging",
            "It compensates for clock skew between client and server",
            "It desynchronizes clients so they do not all retry at the same instants"
          ],
          answer: 3,
          explain: "Pure exponential backoff keeps clients in lockstep, so they collide at the same retry moments. Randomizing the wait spreads the load and is what actually breaks the herd."
        },
        {
          type: "fill",
          q: "When many clients retry a failing dependency simultaneously and multiply the load on an already struggling service, the result is called a retry ____.",
          answer: "storm",
          accept: ["storm", "storms", "retry storm"],
          explain: "Retry storms turn a brief blip into a sustained outage, because the retried traffic prevents the dependency from ever recovering enough to serve normally."
        },
        {
          type: "truefalse",
          q: "Only idempotent operations can be retried safely without additional machinery.",
          answer: true,
          explain: "Retrying a non-idempotent operation can duplicate the effect, for example charging twice. An idempotency key lets the server deduplicate and makes the retry safe."
        },
        {
          type: "mcq",
          q: "Three services are chained A to B to C. A makes at most 3 total attempts against B, and B makes at most 3 total attempts against C. If C is failing, how many requests can a single user request generate at C in the worst case?",
          choices: [
            "3",
            "6",
            "9",
            "27"
          ],
          answer: 2,
          explain: "Retries multiply across layers: 3 attempts from A times 3 attempts from B gives up to 9 at C. This is why retries should be performed at one layer, or governed by a shared retry budget."
        },
        {
          type: "mcq",
          q: "A retry budget, sometimes called an adaptive retry throttle, works by:",
          choices: [
            "Capping retries as a small ratio of successful requests, so retries stop when the dependency is broadly failing",
            "Allowing each client a fixed number of retries per day",
            "Increasing the retry count automatically when error rates rise",
            "Delaying all retries until the next deployment window"
          ],
          answer: 0,
          explain: "Tying the allowed retry volume to recent success volume means retries help with isolated blips but shut off automatically during a real outage, preventing amplification."
        },
        {
          type: "order",
          q: "Order these client behaviors from the SAFEST retry policy to the most dangerous.",
          items: [
            "Retry only idempotent calls, with exponential backoff, jitter, and a retry budget",
            "Retry with exponential backoff and jitter but no budget cap",
            "Retry with fixed exponential backoff and no randomization",
            "Retry immediately in a tight loop until success"
          ],
          explain: "Each step removes a safeguard. The immediate tight loop is the classic way to convert a recoverable dependency hiccup into a self-sustaining outage."
        },
        {
          type: "truefalse",
          q: "A client should retry an HTTP 400 response the same way it retries an HTTP 503.",
          answer: false,
          explain: "400 means the request itself is invalid, so retrying will always fail and only adds load. Retries belong to transient conditions such as 503, 429 with a retry hint, or connection resets."
        }
      ]
    },
    {
      id: "l86",
      title: "Circuit breakers and bulkheads",
      intro: "Two isolation patterns: stop calling a broken dependency, and stop one dependency from consuming all your capacity.",
      questions: [
        {
          type: "order",
          q: "Order the circuit breaker states as they are traversed during a dependency outage and recovery.",
          items: [
            "Closed - calls pass through and failures are counted",
            "Open - calls fail immediately without contacting the dependency",
            "Half-open - a limited number of trial calls are allowed through",
            "Closed again - trial calls succeeded, so normal traffic resumes"
          ],
          explain: "The half-open state is the essential part: it probes recovery with a trickle of traffic instead of slamming a fragile dependency with the full load the moment a timer expires."
        },
        {
          type: "fill",
          q: "A circuit breaker in the ____ state rejects calls immediately without contacting the dependency at all.",
          answer: "open",
          accept: ["open", "opened", "tripped"],
          explain: "Open means the circuit is broken, so the current does not flow. Failing fast frees the caller's threads and gives the dependency room to recover."
        },
        {
          type: "mcq",
          q: "What is the bulkhead pattern?",
          choices: [
            "Duplicating every service across two availability zones",
            "Isolating resources such as thread or connection pools per dependency so one slow dependency cannot exhaust them all",
            "Buffering writes in a queue so the database is never called synchronously",
            "Rejecting requests once a global concurrency limit is reached"
          ],
          answer: 1,
          explain: "Named after ship compartments, bulkheads bound the damage. With one shared pool, a single slow dependency ties up every worker and takes down calls that had nothing to do with it."
        },
        {
          type: "truefalse",
          q: "A circuit breaker reduces the risk of cascading failure partly by freeing caller threads that would otherwise be blocked waiting on timeouts.",
          answer: true,
          explain: "Failing fast returns capacity to the caller immediately. Without it, callers pile up threads on a doomed dependency and become unavailable themselves."
        },
        {
          type: "mcq",
          q: "A breaker is configured to trip after 5 consecutive failures. On a service handling thousands of requests per second, the likely problem is:",
          choices: [
            "It will never trip, because failures are rarely consecutive",
            "It cannot enter half-open without a success threshold",
            "It trips too easily, because a brief blip on a high-volume service produces 5 failures almost instantly",
            "Consecutive-failure counting is incompatible with exponential backoff"
          ],
          answer: 2,
          explain: "At high volume, thresholds should be based on an error rate over a rolling window with a minimum request count, not a raw consecutive count that trivial noise can satisfy."
        },
        {
          type: "match",
          q: "Match each resilience mechanism to what it primarily protects against.",
          pairs: [
            ["Circuit breaker", "Wasting caller resources on a dependency that is currently failing"],
            ["Bulkhead", "One misbehaving dependency exhausting resources shared with unrelated work"],
            ["Timeout", "A single call blocking indefinitely with no upper bound on wait"]
          ],
          explain: "These compose rather than substitute: timeouts bound each call, bulkheads bound the resources any dependency can consume, and breakers stop calling a dependency that is clearly down."
        },
        {
          type: "truefalse",
          q: "Once a circuit breaker opens, the safest recovery is to close it fully as soon as the configured cooldown timer expires.",
          answer: false,
          explain: "Closing straight from open sends the full backlog at a barely recovered dependency and can knock it over again. The half-open state exists to test with limited traffic first."
        }
      ]
    },
    {
      id: "l87",
      title: "Graceful degradation and load shedding",
      intro: "Choosing what to drop, in advance, so the system stays useful when it cannot stay whole.",
      questions: [
        {
          type: "mcq",
          q: "What distinguishes load shedding from rate limiting?",
          choices: [
            "Load shedding applies only to write traffic; rate limiting applies only to reads",
            "Load shedding drops requests based on the server's current health and capacity; rate limiting enforces a defined quota per client",
            "Load shedding happens at the client; rate limiting happens at the server",
            "Load shedding is permanent; rate limiting is temporary"
          ],
          answer: 1,
          explain: "Rate limiting enforces a policy contract regardless of load. Load shedding is a reaction to real-time overload, protecting the server from collapse even when every client is within quota."
        },
        {
          type: "fill",
          q: "Serving a slightly stale cached result instead of failing when the primary data source is unavailable is an example of graceful ____.",
          answer: "degradation",
          accept: ["degradation", "degrade", "graceful degradation"],
          explain: "Degradation trades freshness or completeness for availability. A stale answer is usually far more useful to a user than an error page."
        },
        {
          type: "truefalse",
          q: "When shedding load, it is generally better to reject a fraction of requests quickly than to accept everything and let latency climb until all requests time out.",
          answer: true,
          explain: "Accepting more than you can serve makes every request slow and eventually useless. Shedding preserves good service for the requests you do admit."
        },
        {
          type: "mcq",
          q: "A read-heavy product page depends on inventory counts, personalized recommendations, and reviews. Recommendations start timing out. What is the correct degradation?",
          choices: [
            "Return an error for the whole page so users are not misled by incomplete data",
            "Increase the recommendation timeout so the page eventually renders complete",
            "Render the page without the recommendation module, since it is non-critical",
            "Redirect users to a static maintenance page until recommendations recover"
          ],
          answer: 2,
          explain: "Dependencies should be classified as critical or optional in advance. Optional ones get short timeouts and a defined fallback so their failure never takes down the critical path."
        },
        {
          type: "mcq",
          q: "Under overload, which shedding policy usually preserves the most user value?",
          choices: [
            "Drop requests uniformly at random across all traffic",
            "Drop the newest arrivals first, since the queue is already committed to older requests",
            "Drop by request criticality, shedding background and retry traffic before user-facing requests",
            "Drop requests from the largest customers first, since they generate the most load"
          ],
          answer: 2,
          explain: "Criticality-aware shedding keeps interactive user requests alive while sacrificing batch jobs, prefetches, and retries. Uniform random shedding damages every workload equally."
        },
        {
          type: "truefalse",
          q: "Dropping the oldest requests from a queue during overload is always the wrong choice.",
          answer: false,
          explain: "It is often the right choice. Old queued requests may already be past the client's deadline, so serving them wastes capacity - this is the reasoning behind LIFO-style queues and deadline-aware dropping under overload."
        },
        {
          type: "match",
          q: "Match each overload response to what it does.",
          pairs: [
            ["Load shedding", "Rejects excess requests immediately so admitted requests are still served well"],
            ["Backpressure", "Signals upstream producers to slow down rather than silently absorbing more work"],
            ["Graceful degradation", "Serves a reduced or stale version of the response instead of failing outright"]
          ],
          explain: "Shedding refuses work, backpressure slows its arrival, and degradation changes what is served. Well-run systems use all three at different points."
        }
      ]
    },
    {
      id: "l88",
      title: "Redundancy, failover, and disaster recovery (RTO/RPO)",
      intro: "What redundancy actually buys, and how RTO and RPO turn recovery goals into design constraints.",
      questions: [
        {
          type: "match",
          q: "Match each disaster recovery term to its meaning.",
          pairs: [
            ["RTO", "How long the service may take to be restored after an incident"],
            ["RPO", "How much recent data the business can afford to lose"],
            ["Failover", "The act of shifting traffic from a failed component to a standby"]
          ],
          explain: "RTO is about time to recover, RPO is about data loss tolerance. They are independent: you can restore quickly and still lose an hour of writes."
        },
        {
          type: "fill",
          q: "If a business states it can tolerate losing at most 5 minutes of data in a disaster, that number is its ____.",
          answer: "RPO",
          accept: ["RPO", "rpo", "recovery point objective"],
          explain: "The Recovery Point Objective bounds acceptable data loss and therefore dictates replication and backup frequency - a 5 minute RPO rules out nightly-only backups."
        },
        {
          type: "mcq",
          q: "A system uses asynchronous cross-region replication with about 10 seconds of typical lag. What does this imply?",
          choices: [
            "RPO is effectively zero because replication is continuous",
            "RPO is roughly the replication lag, so a regional loss can lose the last several seconds of writes",
            "RTO is necessarily zero because a standby already holds the data",
            "Both RTO and RPO are determined solely by backup retention policy"
          ],
          answer: 1,
          explain: "Async replication acknowledges the write before the remote copy is durable, so unreplicated writes are lost on failover. Only synchronous replication gives an RPO of zero, at the cost of write latency."
        },
        {
          type: "truefalse",
          q: "An untested backup should not be counted as part of a disaster recovery plan.",
          answer: true,
          explain: "Backups fail silently through corruption, missing tables, or unusable formats. Only a rehearsed restore proves the RTO and RPO are actually achievable."
        },
        {
          type: "mcq",
          q: "Two nodes in an active-passive pair lose contact with each other but both remain reachable by clients, and both promote themselves to primary. This condition is called:",
          choices: [
            "Split brain",
            "Quorum drift",
            "Failback contention",
            "Replica divergence lock"
          ],
          answer: 0,
          explain: "Split brain produces two divergent authoritative copies and is a common consequence of naive automatic failover. Quorum or fencing is what prevents it."
        },
        {
          type: "mcq",
          q: "Which redundancy arrangement gives the shortest RTO, all else equal?",
          choices: [
            "Cold standby with infrastructure provisioned on demand from backups",
            "Warm standby running at reduced capacity, scaled up after failover",
            "Active-active across regions with traffic already served from both",
            "Nightly snapshots stored in a second region"
          ],
          answer: 2,
          explain: "Active-active has no promotion step because both sides already serve traffic, so recovery is a routing change. It is also the most expensive and demands conflict handling."
        },
        {
          type: "truefalse",
          q: "Deploying three replicas of a service in the same rack, on the same power feed, provides genuine redundancy against infrastructure failure.",
          answer: false,
          explain: "Redundancy only helps against failures that are independent. Shared power, network, and configuration are correlated failure domains, which is why replicas are spread across zones."
        }
      ]
    }
  ]
});
