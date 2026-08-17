window.ACADEMY.addUnit("sysdesign", {
  id: "unit-1",
  title: "Thinking in Systems",
  color: "#eab308",
  icon: "\u{1F9ED}",
  description: "The vocabulary and mental habits of design: requirements, constraints, estimation, and the fact that every choice is a trade.",
  lessons: [
    {
      id: "l1",
      title: "What system design actually is - and what it is not",
      intro: "What a design discussion is really deciding, and the moves that derail one.",
      questions: [
        {
          type: "mcq",
          q: "System design is best described as which of the following?",
          choices: [
            "Choosing the programming language and framework before anything else is settled",
            "Producing detailed class diagrams for every object that will exist in the codebase",
            "Deciding how components, data, and failure modes fit together to meet stated requirements",
            "Selecting the cloud vendor whose managed services cover the widest range of features"
          ],
          answer: 2,
          explain: "Design is about structure and consequences: which parts exist, what crosses between them, and how the whole thing behaves under load and under failure. Language and vendor are downstream choices."
        },
        {
          type: "truefalse",
          q: "A system design is not complete until it specifies exact hardware models and instance types.",
          answer: false,
          explain: "A design works at the level of components, contracts, and trade-offs. Concrete capacity choices come after the load estimate, and picking machines first tends to hide the requirements rather than serve them."
        },
        {
          type: "fill",
          q: "Before proposing any architecture, the first job in a design discussion is to clarify the ____.",
          answer: "requirements",
          accept: ["requirements", "requirement", "reqs"],
          explain: "Every later decision is only defensible relative to what the system must do and how well. Skipping this step is the most common way a design discussion goes wrong."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Architecture", "The set of decisions that are expensive to reverse later"],
            ["Implementation detail", "A choice that can be changed inside one component without others noticing"],
            ["Requirement", "A statement of what the system must do or how well it must do it"]
          ],
          explain: "A useful working definition: architecture is whatever is hard to change. That is why design time is best spent on the hard-to-reverse decisions."
        },
        {
          type: "mcq",
          q: "Which of these is the clearest sign that a design discussion has gone off the rails?",
          choices: [
            "The designer states the expected read-to-write ratio before choosing a datastore",
            "The designer names a specific queue product before any ordering or load requirement is stated",
            "The designer lists the failure modes of each external dependency",
            "The designer writes down a target p99 latency for the main read path"
          ],
          answer: 1,
          explain: "Naming a product before naming the requirement means the requirement will be reverse-engineered to fit the product. The other three moves all establish the criteria a product would later be judged against."
        },
        {
          type: "order",
          q: "Put the phases of a typical design discussion in order, first to last.",
          items: [
            "Clarify requirements and constraints",
            "Estimate scale and load",
            "Sketch a high level component diagram",
            "Drill into bottlenecks and failure modes"
          ],
          explain: "Requirements set the target, estimation sizes it, the sketch shows structure, and only then is there enough detail to argue about where the system breaks."
        },
        {
          type: "truefalse",
          q: "A well-posed system design problem has exactly one correct answer.",
          answer: false,
          explain: "Designs are judged as fit for a set of requirements and priorities, not as right or wrong in the abstract. Change the priorities and a different design wins."
        }
      ]
    },
    {
      id: "l2",
      title: "Functional vs non-functional requirements",
      intro: "Separating what the system does from how well it has to do it.",
      questions: [
        {
          type: "mcq",
          q: "Which of the following is a non-functional requirement?",
          choices: [
            "A user can upload a photo to their profile",
            "An administrator can suspend an account given a user id",
            "A match is created when two users have each liked the other",
            "The feed must render within 200 ms at the 99th percentile"
          ],
          answer: 3,
          explain: "The first three describe behaviors the system must provide. The last one attaches a measurable quality bar to a behavior, which is what makes it non-functional."
        },
        {
          type: "fill",
          q: "Requirements about how well a system behaves - latency, availability, durability, cost - are called ____ requirements.",
          answer: "non-functional",
          accept: ["non-functional", "nonfunctional", "non functional", "quality"],
          explain: "Functional requirements say what happens. Non-functional requirements say how fast, how reliably, and at what scale it has to happen, and they are usually what drives the architecture."
        },
        {
          type: "match",
          q: "Match each term to its definition.",
          pairs: [
            ["Functional requirement", "A behavior the system must provide"],
            ["Non-functional requirement", "A measurable quality bar the behavior must meet"],
            ["Constraint", "A fixed limit imposed from outside the design, such as a budget or a regulation"]
          ],
          explain: "Constraints differ from requirements in that you do not get to negotiate them inside the design; you design around them."
        },
        {
          type: "truefalse",
          q: "An availability target of 99.9 percent allows roughly 8.8 hours of downtime per year.",
          answer: true,
          explain: "0.1 percent of an 8760 hour year is about 8.76 hours, which is roughly 43 minutes per month. Each additional nine divides that by ten, so 99.99 percent is about 53 minutes per year, or about 4.3 minutes per month."
        },
        {
          type: "mcq",
          q: "Which statement correctly distinguishes an SLO from an SLA?",
          choices: [
            "An SLO is an internal target for a measured indicator; an SLA is an external commitment with consequences if the target is missed",
            "An SLO is the commitment made to customers; an SLA is the raw metric collected from the servers",
            "An SLO applies only to latency, while an SLA applies only to availability",
            "An SLO is evaluated monthly by definition, while an SLA is evaluated per individual request"
          ],
          answer: 0,
          explain: "The chain is indicator, objective, agreement: an SLI is the measurement, an SLO is the target you hold yourselves to, and an SLA adds contractual penalties. SLAs are normally set looser than SLOs."
        },
        {
          type: "order",
          q: "Order these steps for turning a vague ask into usable requirements.",
          items: [
            "Write down what the system must do",
            "Attach a measurable target to each behavior",
            "Derive the load those targets must hold under",
            "Choose components that can meet the targets at that load"
          ],
          explain: "Each step makes the next one answerable. You cannot size a component without a load, and you cannot derive a load without knowing which behaviors matter."
        },
        {
          type: "truefalse",
          q: "A requirement such as the system should be fast is usable as written, because engineers share a common intuition for fast.",
          answer: false,
          explain: "Fast is untestable. A requirement is only usable when it names a metric, a percentile, and a number, such as p99 read latency under 200 ms at 5000 requests per second."
        }
      ]
    },
    {
      id: "l3",
      title: "Latency, throughput, and the numbers worth memorizing",
      intro: "Orders of magnitude for common operations, and why p50 and p99 tell different stories.",
      questions: [
        {
          type: "mcq",
          q: "A reference to main memory costs on the order of:",
          choices: [
            "about 100 picoseconds",
            "about 100 nanoseconds",
            "about 100 microseconds",
            "about 100 milliseconds"
          ],
          answer: 1,
          explain: "In the latency numbers popularized by Jeff Dean, main memory sits around 100 ns. What matters is the order of magnitude, not the exact figure, since hardware moves but the ratios between tiers barely do."
        },
        {
          type: "order",
          q: "Order these operations from fastest to slowest, by order of magnitude.",
          items: [
            "L1 cache reference",
            "Main memory reference",
            "Random read from an SSD",
            "Network round trip between California and the Netherlands"
          ],
          explain: "Roughly a nanosecond, a hundred nanoseconds, tens of microseconds, and around 150 milliseconds. Each step is one to three orders of magnitude, which is why moving work across a tier boundary dominates everything else."
        },
        {
          type: "fill",
          q: "An intercontinental network round trip costs on the order of ____ milliseconds, and that cost is set mostly by the speed of light in fiber rather than by server speed.",
          answer: "150",
          accept: ["150", "150 ms", "150ms", "about 150"],
          explain: "Distance latency is physics, not engineering. No amount of faster hardware removes it, which is why edge caches and regional replicas exist."
        },
        {
          type: "truefalse",
          q: "Reading one megabyte sequentially from an SSD is faster than reading the same megabyte from main memory.",
          answer: false,
          explain: "Memory bandwidth beats SSD bandwidth by roughly an order of magnitude, and an SSD read also pays a per-operation cost of tens of microseconds before any bytes move."
        },
        {
          type: "mcq",
          q: "A service reports a p99 latency of 400 ms. That means:",
          choices: [
            "99 percent of requests take at least 400 ms",
            "The average request takes about 400 ms",
            "1 percent of requests take longer than 400 ms",
            "No request is ever permitted to exceed 400 ms"
          ],
          answer: 2,
          explain: "A percentile splits the distribution: p99 is the value that 99 percent of requests come in under. It says nothing about how far above it the remaining 1 percent goes, which is why p999 and max are also worth watching."
        },
        {
          type: "truefalse",
          q: "Because rendering one page often requires many backend calls, a dependency with a bad p99 can affect far more than 1 percent of page loads.",
          answer: true,
          explain: "This is the tail-at-scale effect described by Dean and Barroso: with a fan-out of 100 calls, the odds that at least one call lands in the slow 1 percent are high, so the page inherits the tail."
        },
        {
          type: "match",
          q: "Match each measure to what it reports.",
          pairs: [
            ["p50", "The median: half of requests are faster than this value"],
            ["p99", "Only one request in a hundred is slower than this value"],
            ["Throughput", "The number of requests completed per unit of time"]
          ],
          explain: "Latency and throughput are different axes. A system can raise throughput by batching while making every individual request slower, so both need to be stated."
        }
      ]
    },
    {
      id: "l4",
      title: "Back-of-the-envelope estimation",
      intro: "Sizing a system in your head, to the nearest order of magnitude.",
      questions: [
        {
          type: "fill",
          q: "There are roughly ____ seconds in a day, which is the single most useful number in capacity math.",
          answer: "86400",
          accept: ["86400", "86,400", "86400 seconds", "86.4k"],
          explain: "Daily totals divided by 86400 give average per-second rates. Many people round it to 100000 for speed, which is a 16 percent error and usually irrelevant to the conclusion."
        },
        {
          type: "mcq",
          q: "One million daily active users each make about 20 requests per day. What is the average request rate?",
          choices: [
            "about 23 requests per second",
            "about 230 requests per second",
            "about 2300 requests per second",
            "about 23000 requests per second"
          ],
          answer: 1,
          explain: "Twenty million requests divided by 86400 seconds is roughly 231 per second. Getting the exponent right is the whole point; the leading digit rarely changes a design decision."
        },
        {
          type: "mcq",
          q: "The usual way to turn an average request rate into a peak request rate is to:",
          choices: [
            "divide it by the number of application servers in the fleet",
            "use the same value, since an average already accounts for busy periods",
            "multiply by a small factor, often 2x to 10x, because traffic is not uniform across the day",
            "multiply it by the number of database replicas serving read traffic"
          ],
          answer: 2,
          explain: "Real traffic has daily peaks, and capacity must cover the peak, not the mean. The multiplier is a rule of thumb that should be replaced with measured data as soon as any exists."
        },
        {
          type: "truefalse",
          q: "Rounding 86400 up to 100000 seconds per day is acceptable in back-of-the-envelope work.",
          answer: true,
          explain: "The purpose of the estimate is to decide whether you need one machine or a thousand. An error under a factor of two almost never flips that answer."
        },
        {
          type: "order",
          q: "Order the steps of a storage estimate.",
          items: [
            "State how many objects are created per day",
            "State the average size of one object",
            "Multiply to get bytes written per day",
            "Multiply by the retention period and add replication overhead"
          ],
          explain: "Storage estimates fail most often at the last step, because people forget that three replicas and multi-year retention multiply the raw daily figure by a large constant."
        },
        {
          type: "mcq",
          q: "A service stores 10 million photos per day, averaging 500 KB each. Roughly how much new data is that per day, before replication?",
          choices: [
            "about 500 GB per day",
            "about 5 TB per day",
            "about 50 TB per day",
            "about 500 TB per day"
          ],
          answer: 1,
          explain: "Ten million times 500 KB is 5 times 10 to the twelfth bytes, which is about 5 TB. With three replicas that becomes roughly 15 TB of physical storage per day."
        },
        {
          type: "truefalse",
          q: "An estimate is only useful if it lands within a few percent of the true value.",
          answer: false,
          explain: "An envelope estimate exists to pick the right order of magnitude and to expose which input dominates the result. Precision beyond that is wasted, because the inputs themselves are guesses."
        }
      ]
    },
    {
      id: "l5",
      title: "There is no best design, only trade-offs",
      intro: "Every technique buys something and charges for it somewhere else.",
      questions: [
        {
          type: "mcq",
          q: "When someone says a particular design is simply the best one, the honest version of that claim is usually:",
          choices: [
            "the design has no remaining failure modes to enumerate",
            "the design uses the most modern components currently available",
            "the design minimizes cost, latency, and complexity all at once",
            "the workload and the priorities were fixed, so one option won for that specific case"
          ],
          answer: 3,
          explain: "Best is only meaningful relative to a stated objective. Once the read-to-write ratio, the consistency needs, or the budget change, the ranking of options changes with them."
        },
        {
          type: "match",
          q: "Match each technique to what it trades away.",
          pairs: [
            ["Cache", "Trades freshness of data for lower read latency"],
            ["Replication", "Trades write cost and lag for fault tolerance, by keeping the same data on several machines"],
            ["Denormalization", "Trades harder writes and update anomalies for fewer joins on read"]
          ],
          explain: "Naming the cost out loud is the discipline. A technique described only by its benefit has not actually been evaluated."
        },
        {
          type: "truefalse",
          q: "Adding a cache always improves the p99 latency of a read path.",
          answer: false,
          explain: "A miss pays the cache lookup plus the original backend call, so the tail can get worse. Cold starts, evictions, and stampedes after an expiry all concentrate in the high percentiles."
        },
        {
          type: "fill",
          q: "A decision that is cheap to change later deserves far less debate than one that is ____ to reverse.",
          answer: "expensive",
          accept: ["expensive", "costly", "hard", "difficult"],
          explain: "Spending design time in proportion to reversibility is what keeps discussions productive. Data models and public contracts deserve the argument; a timeout value does not."
        },
        {
          type: "mcq",
          q: "Serving reads from an eventually consistent replica instead of the primary typically buys you:",
          choices: [
            "a guarantee that every read reflects the most recent committed write",
            "lower read latency and better read availability, at the cost of occasionally stale reads",
            "lower write amplification, at the cost of using more storage",
            "simpler application code, since clients can no longer observe conflicting values"
          ],
          answer: 1,
          explain: "Replicas absorb read load and survive primary failure, but replication lag means a client can read its own write and not see it. That is a product decision as much as a technical one."
        },
        {
          type: "order",
          q: "Order these decisions from least to most expensive to reverse once the system is in production.",
          items: [
            "A tunable request timeout value",
            "The choice of an internal library",
            "The schema and partition key of the main table",
            "A public API contract that external clients depend on"
          ],
          explain: "Cost of reversal rises with how many parties have to cooperate: a config change is yours, a library is your team, a partition key is a data migration, and a public contract is everyone else's release schedule."
        },
        {
          type: "truefalse",
          q: "Complexity is itself a cost that has to be weighed against the benefit it buys.",
          answer: true,
          explain: "Every extra component adds failure modes, deployment steps, and on-call load. A design that is one machine and a database can be the correct answer at small scale."
        }
      ]
    },
    {
      id: "l6",
      title: "Finding the bottleneck (and Amdahl's law)",
      intro: "Why optimizing the wrong component is close to free of benefit.",
      questions: [
        {
          type: "mcq",
          q: "A job is 90 percent parallelizable. With an unlimited number of processors, the maximum speedup is:",
          choices: [
            "about 5 times",
            "about 9 times",
            "about 10 times",
            "unbounded, since processors are unlimited"
          ],
          answer: 2,
          explain: "Amdahl's law gives 1 divided by the serial fraction as the ceiling, so 1 divided by 0.10 is 10x. The remaining 10 percent of serial work sets a wall no hardware can pass."
        },
        {
          type: "fill",
          q: "Amdahl's law says the maximum speedup of a workload is capped by its ____ fraction.",
          answer: "serial",
          accept: ["serial", "sequential", "non-parallel", "nonparallel"],
          explain: "Only the parallel portion shrinks as you add workers. Whatever must run in sequence is paid in full every time, so it eventually dominates the runtime."
        },
        {
          type: "truefalse",
          q: "Optimizing a component that accounts for 2 percent of total time can reduce total time by at most 2 percent.",
          answer: true,
          explain: "This is Amdahl's law used as a sanity check on effort. Even making that component infinitely fast removes only its own 2 percent from the total."
        },
        {
          type: "mcq",
          q: "A request spends 5 ms in application CPU, 3 ms on a cache lookup, 120 ms waiting on a single database query, and 8 ms serializing the response. Where should you optimize first?",
          choices: [
            "Reduce the cost of response serialization",
            "Optimize the 120 ms database query",
            "Add a second tier of caching in front of the existing cache",
            "Port the application code to a faster language"
          ],
          answer: 1,
          explain: "The database query is about 88 percent of the 136 ms total, so it caps any possible improvement from the rest. Everything else combined could go to zero and the request would still take 120 ms."
        },
        {
          type: "order",
          q: "Order the steps of finding a bottleneck.",
          items: [
            "Measure end to end latency and its distribution",
            "Break the request into spans and attribute time to each",
            "Confirm the largest span with a profile or a controlled experiment",
            "Optimize that span and then re-measure"
          ],
          explain: "The re-measure step is not optional. Fixing the top span moves the bottleneck somewhere else, and intuition about where it went is usually wrong."
        },
        {
          type: "truefalse",
          q: "Once the current bottleneck is fixed, a system has no bottleneck.",
          answer: false,
          explain: "Some resource is always the limiting one. Bottleneck removal is a game of moving the constraint to a place where it is cheaper to live with, not of eliminating it."
        },
        {
          type: "match",
          q: "Match each law to what it states.",
          pairs: [
            ["Amdahl's law", "Caps speedup using the fraction of work that cannot be parallelized"],
            ["Little's law", "Says average concurrency equals arrival rate multiplied by average time in the system"],
            ["Universal Scalability Law", "Adds a coherency cost, so throughput can actually fall as workers are added"]
          ],
          explain: "Little's law, L equals lambda times W, holds for any stable queueing system. The Universal Scalability Law, due to Neil Gunther, extends Amdahl with a crosstalk term that explains negative returns."
        }
      ]
    },
    {
      id: "l7",
      title: "Vertical vs horizontal scaling",
      intro: "Bigger machines versus more machines, and what each one costs you.",
      questions: [
        {
          type: "mcq",
          q: "Which statement correctly defines the two kinds of scaling?",
          choices: [
            "Vertical scaling adds resources to one machine; horizontal scaling adds more machines",
            "Vertical scaling adds more machines; horizontal scaling adds resources to one machine",
            "Vertical scaling splits data by key; horizontal scaling splits data by table",
            "Vertical scaling applies only to databases; horizontal scaling applies only to web servers"
          ],
          answer: 0,
          explain: "Vertical means scaling up a single node with more CPU, memory, or faster disks. Horizontal means scaling out to more nodes, which introduces coordination that a single node never needed."
        },
        {
          type: "truefalse",
          q: "Vertical scaling is always the wrong first move for a young system.",
          answer: false,
          explain: "Buying a bigger machine is often the cheapest and fastest fix, and it preserves single-node semantics such as local transactions. It stops being an option only when you hit the largest machine available or need fault tolerance."
        },
        {
          type: "fill",
          q: "Splitting one dataset across several machines by key so that each machine owns a slice is called ____.",
          answer: "sharding",
          accept: ["sharding", "shard", "partitioning", "horizontal partitioning"],
          explain: "Sharding buys write and storage capacity beyond one machine, and charges for it with cross-shard queries, rebalancing, and the loss of easy multi-key transactions."
        },
        {
          type: "match",
          q: "Match each component to how it behaves when you add machines.",
          pairs: [
            ["Stateless service", "Scales out by adding identical replicas behind a load balancer"],
            ["Stateful datastore", "Needs a replication or partitioning strategy before extra machines help"],
            ["Single writer node", "Remains the ceiling on write throughput no matter how many readers exist"]
          ],
          explain: "This is why designers push state to the edges of the diagram: statelessness is what makes the easy kind of scaling possible."
        },
        {
          type: "mcq",
          q: "Which problem appears once you scale horizontally that did not exist on a single machine?",
          choices: [
            "CPU cache locality inside a single process",
            "Garbage collection pauses in the application runtime",
            "Fragmentation of the local disk volume",
            "Coordination between nodes, including partial failure and data placement"
          ],
          answer: 3,
          explain: "Partial failure is the defining hazard of distributed systems: one node can be alive, dead, or merely slow and unreachable, and the others have to act without knowing which."
        },
        {
          type: "truefalse",
          q: "Horizontal scaling yields linear throughput gains as long as the nodes are added carefully.",
          answer: false,
          explain: "Contention on shared resources and the cost of keeping nodes consistent both grow with node count. The Universal Scalability Law predicts a peak beyond which added nodes reduce throughput."
        },
        {
          type: "order",
          q: "Order these responses to growing read load from lowest to highest operational complexity.",
          items: [
            "Add an index or rewrite the slow query",
            "Move to a larger instance",
            "Add read replicas",
            "Shard the dataset across independent clusters"
          ],
          explain: "Work the cheap end first. A missing index has fixed many outages that were about to be answered with a sharding project."
        }
      ]
    },
    {
      id: "l8",
      title: "Drawing a system: components, boundaries, data flow",
      intro: "How to draw a diagram that carries real information instead of decorative boxes.",
      questions: [
        {
          type: "mcq",
          q: "What belongs on a first-pass system diagram?",
          choices: [
            "Every class in the main service, with its methods",
            "The exact instance type and region for each server",
            "Clients, services, datastores, and the direction data flows between them",
            "The build pipeline and the branching model of each repository"
          ],
          answer: 2,
          explain: "A first diagram answers who talks to whom, in which direction, and where the data lives. Class-level and deployment-level detail belong to different diagrams for different questions."
        },
        {
          type: "fill",
          q: "A line on a system diagram should be labeled with the protocol or the ____ that crosses it, rather than left blank.",
          answer: "data",
          accept: ["data", "payload", "request", "data flow"],
          explain: "An unlabeled line is a claim that two things are related without saying how. Labeling it forces you to decide what actually moves and in which direction."
        },
        {
          type: "match",
          q: "Match each diagram concept to its meaning.",
          pairs: [
            ["Trust boundary", "A line where the level of trust in the caller changes, such as public internet to internal network"],
            ["Synchronous call", "The caller blocks, so its latency includes the latency of the callee"],
            ["Asynchronous handoff", "Work is enqueued and completed later, decoupling caller from callee"]
          ],
          explain: "Marking trust boundaries is what makes authentication, rate limiting, and input validation obvious rather than remembered. Marking sync versus async is what makes latency and failure propagation obvious."
        },
        {
          type: "truefalse",
          q: "Two boxes joined by an unlabeled line convey almost nothing, because the reader cannot tell whether the call is synchronous, asynchronous, or a nightly batch job.",
          answer: true,
          explain: "Those three cases have completely different latency, failure, and consistency consequences. The label is where the design information actually lives."
        },
        {
          type: "order",
          q: "Order these layers as a request diagram is usually drawn, from the user inward.",
          items: [
            "Clients",
            "Edge such as DNS, CDN, and load balancer",
            "Application services",
            "Datastores and caches"
          ],
          explain: "A consistent left-to-right convention lets a reader find things without a legend, and it makes an unusual arrow, such as a datastore calling out to a service, visible immediately."
        },
        {
          type: "mcq",
          q: "On a first-pass diagram, which of these is safe to leave out?",
          choices: [
            "The datastore holding the primary copy of user records",
            "The retry and timeout policy on each internal call",
            "The boundary between the public network and internal services",
            "The write path for the most important user action"
          ],
          answer: 1,
          explain: "Retries and timeouts matter enormously, but they belong to the second pass where you walk failure modes. The other three are structural and change what the diagram means."
        },
        {
          type: "fill",
          q: "The single most useful question to ask of every box on a diagram is what happens when it ____.",
          answer: "fails",
          accept: ["fails", "fail", "dies", "goes down", "breaks"],
          explain: "Availability, retries, fallbacks, and blast radius all fall out of that one question. Asking it per box turns a picture into a design review."
        }
      ]
    }
  ]
});
