window.ACADEMY.addUnit("sysdesign", {
  id: "unit-10",
  title: "Monolith, Modular Monolith, Microservices",
  color: "#eab308",
  icon: "\u{1F9E9}",
  description: "The most over-decided question in the industry.",
  lessons: [
    {
      id: "l73",
      title: "The monolith is fine - and the signals that it is not",
      intro: "Why a single deployable is a legitimate default, and which pressures actually justify splitting.",
      questions: [
        {
          type: "mcq",
          q: "Martin Fowler's MonolithFirst argument says which of the following?",
          choices: [
            "Microservices are always premature and should be avoided for the life of a product",
            "Teams should start with a monolith because the correct service boundaries are usually not known up front",
            "Every monolith should be split into services once it exceeds a fixed line count",
            "Monoliths scale better than services under all realistic traffic loads"
          ],
          answer: 1,
          explain: "Fowler's MonolithFirst claim is about knowledge, not size: you learn the real boundaries by building the system, and guessing them early tends to produce services that are wrong and expensive to move."
        },
        {
          type: "truefalse",
          q: "A large codebase is by itself sufficient evidence that a system should be split into microservices.",
          answer: false,
          explain: "Size is a weak signal. The real pressures are independent deployability, differing scaling profiles, differing reliability requirements, and team coordination cost."
        },
        {
          type: "mcq",
          q: "Which of these is the strongest signal that a monolith is genuinely under strain?",
          choices: [
            "The repository has more than a thousand source files",
            "Engineers occasionally need to read code owned by another team",
            "The application uses a single relational database",
            "Independent teams routinely block each other on a shared release train and one team's bug halts everyone's deploy"
          ],
          answer: 3,
          explain: "Deployment coupling across independent teams is the classic organizational pressure that services relieve. The other items are normal properties of healthy monoliths."
        },
        {
          type: "fill",
          q: "A single deployable unit that contains all of an application's functionality is called a ____.",
          answer: "monolith",
          accept: ["monolith", "Monolith", "monolithic", "monolithic application"],
          explain: "The defining property is one deployment artifact, not one file or one team. Monoliths can be extremely well organized internally."
        },
        {
          type: "mcq",
          q: "Which advantage does a monolith retain that a distributed system must work hard to recover?",
          choices: [
            "Cheap in-process calls and transactional consistency across modules in one database transaction",
            "Independent scaling of each functional area",
            "Fault isolation so one failing module cannot exhaust another's resources",
            "Independent technology choices per functional area"
          ],
          answer: 0,
          explain: "In-process calls cannot fail partially, and a single database gives you real ACID transactions across modules. Distributed systems replace both with sagas, retries, and idempotency work."
        },
        {
          type: "truefalse",
          q: "Splitting a monolith converts some compile-time errors into runtime failures.",
          answer: true,
          explain: "A signature mismatch across an in-process boundary fails the build. The same mismatch across a network boundary compiles fine and pages someone in production."
        },
        {
          type: "match",
          q: "Match each symptom to the constraint it actually indicates.",
          pairs: [
            ["One endpoint needs 40 machines while the rest needs 2", "Divergent scaling profile"],
            ["Six teams contend over a single weekly release window", "Deployment coupling across teams"],
            ["A memory leak in reporting takes down checkout", "Missing fault isolation"]
          ],
          explain: "Each symptom points at a different justification for splitting. Naming the specific constraint keeps you from splitting for reasons that a module boundary would have solved."
        }
      ]
    },
    {
      id: "l74",
      title: "Bounded contexts and finding real domain boundaries",
      intro: "How to locate boundaries that survive contact with the business instead of boundaries drawn on a whiteboard.",
      questions: [
        {
          type: "mcq",
          q: "The term bounded context originates from which source?",
          choices: [
            "Leslie Lamport's work on logical clocks",
            "Eric Evans, Domain-Driven Design",
            "Melvin Conway's 1967 paper on organization and design",
            "Roy Fielding's dissertation on REST"
          ],
          answer: 1,
          explain: "Bounded context is a strategic design pattern from Eric Evans' Domain-Driven Design. It marks the boundary inside which a particular model and its terms are consistent."
        },
        {
          type: "truefalse",
          q: "Inside a bounded context, a term such as Customer has one consistent meaning; the same word may mean something different in another context.",
          answer: true,
          explain: "That is the point of the boundary. Billing's Customer carries payment terms, while Support's Customer carries entitlements and contact history. Forcing one shared model is what creates the tangle."
        },
        {
          type: "mcq",
          q: "Which boundary is most likely to be a real bounded context rather than an arbitrary split?",
          choices: [
            "A UtilityService holding shared string and date helpers",
            "A ValidationService that all other services call before writing",
            "A DatabaseService that wraps all table access for every domain",
            "Inventory, which owns stock levels and reservations and has its own vocabulary and rules"
          ],
          answer: 3,
          explain: "Real contexts own a coherent slice of the domain with their own language and invariants. Technical layer splits like utility, validation, and data-access services cut across every use case and create chatty coupling."
        },
        {
          type: "fill",
          q: "The explicit translation layer that maps one context's model onto another's, protecting a context from a foreign model, is called an ____ layer.",
          answer: "anticorruption",
          accept: ["anticorruption", "anti-corruption", "anticorruption layer", "anti corruption"],
          explain: "Evans' anticorruption layer keeps a legacy or foreign model from leaking into a clean context by translating at the edge."
        },
        {
          type: "mcq",
          q: "You have drawn a candidate boundary. Which observation most strongly suggests the boundary is wrong?",
          choices: [
            "Almost every user-facing change requires editing both sides of the boundary together",
            "Each side has its own database schema",
            "The two sides use different programming languages",
            "The two sides are owned by different teams"
          ],
          answer: 0,
          explain: "Boundaries should fall where change does not cross. If features consistently span the line, the line is in the wrong place and you have found a distributed monolith in the making."
        },
        {
          type: "truefalse",
          q: "A shared canonical data model used identically by every context is the recommended way to keep bounded contexts consistent.",
          answer: false,
          explain: "A single canonical model recreates the coupling bounded contexts exist to remove. Contexts should keep their own models and translate at the edges, typically via published events or an anticorruption layer."
        },
        {
          type: "order",
          q: "Order these steps for discovering boundaries, from first to last.",
          items: [
            "Map the business capabilities and the language each one uses",
            "Identify which capabilities change together and which change independently",
            "Draw candidate context boundaries where change does not cross",
            "Enforce the boundaries in code before considering separate deployables"
          ],
          explain: "Discovery precedes enforcement, and enforcement in code precedes distribution. Skipping to separate deployables is how teams end up paying network costs for boundaries they have not validated."
        }
      ]
    },
    {
      id: "l75",
      title: "The modular monolith",
      intro: "Getting most of the benefit of clean boundaries while keeping one deployable and one transaction.",
      questions: [
        {
          type: "mcq",
          q: "What defines a modular monolith?",
          choices: [
            "Multiple deployables that share a single database schema",
            "One deployable with strictly enforced internal module boundaries and explicit interfaces between modules",
            "A monolith that is deployed to multiple regions simultaneously",
            "A monolith where each module runs in its own operating system process"
          ],
          answer: 1,
          explain: "A modular monolith keeps a single deployment artifact but treats module boundaries as real: modules talk through published interfaces, not by reaching into each other's internals."
        },
        {
          type: "truefalse",
          q: "In a well-built modular monolith, one module may query another module's tables directly for performance reasons.",
          answer: false,
          explain: "Direct table access defeats the boundary. Even inside one process and one database, each module should own its tables and expose an interface. Otherwise the boundary erodes and later extraction becomes impossible."
        },
        {
          type: "mcq",
          q: "Which mechanism best enforces module boundaries in a modular monolith?",
          choices: [
            "A written convention in the team wiki",
            "Code review by the module owner on every pull request",
            "A build-time check that fails compilation when a module imports another module's internal package",
            "Prefixing internal class names with the word Internal"
          ],
          answer: 2,
          explain: "Boundaries survive only if violating them breaks the build. Conventions and reviews decay under deadline pressure; an automated dependency rule does not."
        },
        {
          type: "fill",
          q: "A modular monolith preserves the ability to use a single database ____ across modules, which a microservice split gives up.",
          answer: "transaction",
          accept: ["transaction", "transactions", "ACID transaction"],
          explain: "One process and one database mean you can still commit atomically across modules. After splitting, that atomicity has to be rebuilt as a saga with compensating actions."
        },
        {
          type: "mcq",
          q: "A team argues the modular monolith is only a stepping stone and has no standalone value. What is the strongest counterargument?",
          choices: [
            "Modular monoliths automatically scale better than services",
            "Modular monoliths remove the need for testing at module boundaries",
            "Modular monoliths eliminate the need for module ownership",
            "Clean boundaries deliver most of the comprehensibility and ownership benefits, and the deployment costs of splitting are only worth paying when a specific pressure demands them"
          ],
          answer: 3,
          explain: "Most of the pain teams attribute to monoliths comes from missing boundaries, not from shared deployment. Fixing boundaries is cheap; distributing them is expensive and should be driven by a named constraint."
        },
        {
          type: "match",
          q: "Match each property to the architecture that provides it most cheaply.",
          pairs: [
            ["Atomic write across two domains plus enforced internal boundaries", "Modular monolith"],
            ["Independent deploy cadence per team", "Separate services"],
            ["Lowest operational cost for a single team shipping one product", "Plain monolith with no module enforcement"]
          ],
          explain: "Knowing which property you actually need tells you which cost you should be willing to pay. Splitting for a property you do not need is pure overhead."
        },
        {
          type: "truefalse",
          q: "A modular monolith with well-owned tables and interface-only cross-module calls is easier to extract into services later than a tangled monolith.",
          answer: true,
          explain: "Extraction cost is dominated by untangling data ownership and hidden call paths. If those are already clean, extraction becomes mostly a transport change."
        }
      ]
    },
    {
      id: "l76",
      title: "What microservices actually cost",
      intro: "The bill that arrives with a network boundary: partial failure, operations, and debugging.",
      questions: [
        {
          type: "mcq",
          q: "What is a distributed monolith?",
          choices: [
            "A monolith replicated across several data centers",
            "A set of separately deployed services that must be released together because of tight coupling",
            "A monolith that calls one external payment provider",
            "A microservice architecture in which every service has its own database"
          ],
          answer: 1,
          explain: "The distributed monolith is the worst of both worlds: it pays every cost of the network - latency, partial failure, operational surface - while keeping the coordination cost of a single release."
        },
        {
          type: "truefalse",
          q: "The distributed monolith is generally considered worse than either a well-built monolith or a well-separated set of services.",
          answer: true,
          explain: "It combines the coupling of a monolith with the failure modes and operational load of a distributed system, and delivers none of the independent deployability that justified the split."
        },
        {
          type: "mcq",
          q: "Which failure mode appears only after an in-process call becomes a network call?",
          choices: [
            "A null value returned by the callee",
            "An unhandled exception thrown inside the callee",
            "A timeout where the caller does not know whether the work was performed",
            "An infinite loop inside the callee"
          ],
          answer: 2,
          explain: "Partial failure is the defining new hazard. A timeout is genuinely ambiguous: the request may have succeeded, failed, or still be running. That ambiguity forces idempotency and retry design."
        },
        {
          type: "fill",
          q: "Because a network call may have succeeded even when the caller times out, retried operations must be made ____ so that repeating them is safe.",
          answer: "idempotent",
          accept: ["idempotent", "idempotent operations", "idempotency"],
          explain: "Idempotency, usually via a client-supplied key deduplicated by the server, is what makes at-least-once retries safe."
        },
        {
          type: "mcq",
          q: "A request path fans out through five services, each with 99.9 percent availability and independent failures. What is the approximate availability of the whole path?",
          choices: [
            "About 99.9 percent, since the services are independent",
            "About 99.5 percent, because availabilities multiply",
            "About 99.99 percent, because redundancy improves the total",
            "Availability is unaffected by the number of hops"
          ],
          answer: 1,
          explain: "Serial dependencies multiply: 0.999 to the fifth power is roughly 0.995. Every additional required hop lowers the ceiling unless you add caching, fallbacks, or make the dependency optional."
        },
        {
          type: "order",
          q: "A service makes a required synchronous call to a dependency that has just become slow, and the caller retries on timeout with no backoff. Order what follows, from first to last.",
          items: [
            "Calls to the dependency start exceeding their latency budget",
            "The caller's connection pool fills with requests still waiting on the dependency",
            "Timeouts fire and immediate retries add further load to the already struggling dependency",
            "The circuit breaker trips open and the caller fails fast instead of waiting"
          ],
          explain: "This is the standard retry-amplification cascade, and it is why a network hop costs more than its latency. Backoff with jitter, a retry budget, and a breaker cut the chain before the caller's own capacity is consumed."
        },
        {
          type: "truefalse",
          q: "Microservices reduce total system complexity.",
          answer: false,
          explain: "They relocate complexity from inside the codebase to the space between services, and add operational complexity on top. The trade can be worth it, but the total does not go down."
        }
      ]
    },
    {
      id: "l77",
      title: "Service-to-service communication patterns",
      intro: "Synchronous request-response versus asynchronous messaging, and the coupling each one creates.",
      questions: [
        {
          type: "mcq",
          q: "Which coupling is created by a synchronous request-response call that is required to serve a user request?",
          choices: [
            "Schema coupling only, with no availability impact",
            "Temporal coupling: the callee must be available at the moment the caller runs",
            "Deployment coupling that forces both services to release together",
            "No coupling at all, provided the API is versioned"
          ],
          answer: 1,
          explain: "Synchronous calls require the dependency to be up right now. Asynchronous messaging removes that requirement by letting the broker hold the message until the consumer recovers."
        },
        {
          type: "truefalse",
          q: "Publishing an event to a broker eliminates coupling between producer and consumer entirely.",
          answer: false,
          explain: "It removes temporal coupling, but the event payload is still a contract. Consumers depend on its schema and semantics, so events must be versioned and evolved carefully."
        },
        {
          type: "mcq",
          q: "In choreography versus orchestration, which statement is correct?",
          choices: [
            "Orchestration uses a central coordinator that makes the flow explicit but concentrates knowledge of the flow in one place",
            "Choreography requires a central coordinator to sequence the steps",
            "Orchestration removes the need for compensating actions on failure",
            "Choreography guarantees stronger consistency than orchestration"
          ],
          answer: 0,
          explain: "Orchestration makes the workflow visible and easy to reason about at the cost of a coordinator that knows about everyone. Choreography spreads the flow across event reactions, which decouples services but makes the end-to-end flow hard to see."
        },
        {
          type: "fill",
          q: "A pattern that stops a caller from repeatedly hammering a failing dependency by tripping open after a threshold of failures is the ____ breaker.",
          answer: "circuit",
          accept: ["circuit", "circuit breaker", "circuitbreaker"],
          explain: "The circuit breaker fails fast while a dependency is unhealthy, protecting caller threads and giving the callee room to recover instead of drowning in retries."
        },
        {
          type: "mcq",
          q: "A service writes to its database and must reliably publish a corresponding event. Which approach avoids losing events when the broker publish fails after the commit?",
          choices: [
            "Publish to the broker first, then write to the database",
            "Wrap the database write and the broker publish in a two-phase commit across both systems",
            "Write the event to an outbox table in the same transaction, then relay it to the broker asynchronously",
            "Publish the event and ignore failures, since consumers can poll for state"
          ],
          answer: 2,
          explain: "The transactional outbox makes the state change and the intent to publish atomic in one database transaction. A separate relay then delivers at least once, which is why consumers must be idempotent."
        },
        {
          type: "match",
          q: "Match each communication choice to its primary tradeoff.",
          pairs: [
            ["Synchronous request-response", "Simple to reason about but propagates latency and downtime"],
            ["Asynchronous event publish", "Absorbs downstream outages but yields eventual consistency"],
            ["Request-reply over a broker", "Keeps a response contract while decoupling caller from callee uptime"]
          ],
          explain: "There is no default best choice. Pick synchronous when the caller genuinely needs the answer to proceed, and asynchronous when the work can complete later."
        },
        {
          type: "truefalse",
          q: "Adding retries to a synchronous call without backoff and a concurrency limit can amplify an overload into a full outage.",
          answer: true,
          explain: "Naive retries multiply load exactly when the dependency is weakest. Exponential backoff with jitter, a retry budget, and a circuit breaker keep retries from becoming a self-inflicted denial of service."
        }
      ]
    },
    {
      id: "l78",
      title: "Data ownership: no shared database",
      intro: "Why a shared schema is the coupling that quietly cancels the benefits of splitting.",
      questions: [
        {
          type: "mcq",
          q: "Why does a database shared by several services destroy independent deployability?",
          choices: [
            "Databases cannot handle connections from more than one application",
            "Any schema change may break other services, so migrations must be coordinated across all of them",
            "Shared databases always become the performance bottleneck first",
            "Query planners behave incorrectly when multiple services connect"
          ],
          answer: 1,
          explain: "The schema becomes a public API with no versioning and no owner. A column rename in one service can break three others, which forces lockstep releases."
        },
        {
          type: "truefalse",
          q: "Giving each service read-only access to another service's tables is an acceptable substitute for an API, since reads cannot corrupt data.",
          answer: false,
          explain: "Reads still couple you to the internal schema. The owning team can no longer refactor its tables without breaking readers, which is precisely the coupling the split was meant to remove."
        },
        {
          type: "fill",
          q: "The principle that each service exclusively owns its data and exposes it only through an API or events is called database per ____.",
          answer: "service",
          accept: ["service", "Service", "microservice"],
          explain: "Database per service is the pattern that makes a service's internal schema genuinely private and therefore freely changeable."
        },
        {
          type: "mcq",
          q: "An order service needs customer names for a listing page but does not own customer data. Which approach best preserves independence?",
          choices: [
            "Join across the customer service's tables from the order service",
            "Move the customer table into the order service's database",
            "Grant the order service a read replica of the customer schema",
            "Keep a locally maintained read model of the fields it needs, updated from customer events"
          ],
          answer: 3,
          explain: "A local read model built from published events keeps the customer service free to refactor internally. The cost is eventual consistency and a duplicate copy that must be kept fresh."
        },
        {
          type: "truefalse",
          q: "Once data is split across services, a single ACID transaction can no longer span the change, so multi-service workflows use sagas with compensating actions.",
          answer: true,
          explain: "A saga is a sequence of local transactions where each step has a defined compensation. It gives you eventual consistency and requires you to design what undo means for each step."
        },
        {
          type: "mcq",
          q: "Which is the most reliable indicator that a set of services is actually a distributed monolith?",
          choices: [
            "They are written in the same programming language",
            "They run in the same Kubernetes cluster",
            "They share a schema and must be migrated and released together",
            "They are all owned by the same engineering department"
          ],
          answer: 2,
          explain: "Shared schema plus coordinated release is the defining pair. Same language, same cluster, and same department are all compatible with genuinely independent services."
        },
        {
          type: "order",
          q: "Order the steps for extracting a service's data from a shared schema, from first to last.",
          items: [
            "Identify the tables the capability owns and create a single module to own them",
            "Replace other modules' direct table access with calls to that module's interface",
            "Move the tables into a separate database owned by the new service",
            "Deploy the module as an independent service behind the same interface"
          ],
          explain: "Establishing an owning interface first means the physical move is a transport change rather than a redesign. Moving the tables before consolidating access leaves hidden readers that break in production."
        }
      ]
    },
    {
      id: "l79",
      title: "The strangler fig migration",
      intro: "Replacing a system incrementally behind a facade, instead of attempting a rewrite.",
      questions: [
        {
          type: "mcq",
          q: "What does the strangler fig pattern describe?",
          choices: [
            "Rewriting the system in a new stack and cutting over in a single release",
            "Freezing the old system and building the replacement alongside it for a year",
            "Incrementally routing slices of functionality to a new implementation behind a facade until the old system can be removed",
            "Duplicating every request to a new system and discarding its responses permanently"
          ],
          answer: 2,
          explain: "Named by Martin Fowler after the strangler fig, the pattern keeps the old system running and serving traffic while new implementations take over one slice at a time, so value ships continuously and rollback stays cheap."
        },
        {
          type: "fill",
          q: "A strangler migration typically puts an intercepting ____ in front of the old system so traffic for a given slice can be routed to either implementation.",
          answer: "facade",
          accept: ["facade", "proxy", "facade layer", "interception layer"],
          explain: "The facade or interception proxy is what makes routing decisions reversible. Without it, every cutover is an all-or-nothing deploy."
        },
        {
          type: "truefalse",
          q: "A big-bang rewrite is usually lower risk than a strangler migration because it avoids running two systems at once.",
          answer: false,
          explain: "Running two systems is a real cost, but a big-bang rewrite concentrates all risk at one cutover, delivers no value until the end, and must chase a moving target since the old system keeps changing."
        },
        {
          type: "order",
          q: "Order a strangler fig extraction of one capability, from first to last.",
          items: [
            "Put a facade in front of the capability so all callers go through one seam",
            "Build the new implementation and run it in shadow against production traffic",
            "Route a small percentage of live traffic to the new implementation and compare results",
            "Route all traffic to the new implementation and delete the old code path"
          ],
          explain: "Seam, then shadow, then partial cutover, then deletion. Deleting the old path is a required step - migrations that skip it leave permanent dual maintenance."
        },
        {
          type: "mcq",
          q: "During a strangler migration, why is shadow or dark traffic useful before cutting over?",
          choices: [
            "It lets you compare the new implementation's outputs against the old one on real traffic without user-visible risk",
            "It eliminates the need for the facade layer",
            "It guarantees the new implementation will be faster",
            "It removes the need to migrate historical data"
          ],
          answer: 0,
          explain: "Shadowing exercises real production input distributions, which synthetic tests rarely reproduce. Responses from the shadow path are discarded and only compared, so mismatches are caught before users see them."
        },
        {
          type: "truefalse",
          q: "A migration is only complete when the old code path is deleted, not when the new one is serving all traffic.",
          answer: true,
          explain: "Undeleted old paths keep collecting maintenance, security patches, and accidental re-activation. Scheduling the deletion is part of the migration plan, not a cleanup nicety."
        },
        {
          type: "match",
          q: "Match each migration approach to its defining risk profile.",
          pairs: [
            ["Big-bang rewrite", "All risk concentrated at one cutover with no value until the end"],
            ["Strangler fig", "Continuous delivery of value at the cost of running two paths temporarily"],
            ["Indefinite parallel run", "Permanent dual maintenance because the old path is never deleted"]
          ],
          explain: "The strangler fig only pays off if you finish. An indefinite parallel run is the common failure mode and is worse than either endpoint."
        }
      ]
    },
    {
      id: "l80",
      title: "Conway's law and team topology",
      intro: "Why the org chart shows up in the architecture, and how teams deliberately use that.",
      questions: [
        {
          type: "mcq",
          q: "Melvin Conway's 1967 observation states that:",
          choices: [
            "Adding people to a late software project makes it later",
            "Organizations produce designs that mirror the communication structures of those organizations",
            "The complexity of a system grows with the square of its component count",
            "Software entropy increases unless energy is spent on maintenance"
          ],
          answer: 1,
          explain: "Conway's law is about communication structure, not the formal org chart. Interfaces form where teams must negotiate, because negotiated interfaces are expensive and teams minimize them."
        },
        {
          type: "fill",
          q: "Deliberately reshaping teams so that the desired architecture emerges is known as the inverse ____ maneuver.",
          answer: "Conway",
          accept: ["Conway", "conway", "Conway's", "conway's", "Conways", "conways"],
          explain: "The inverse Conway maneuver treats team structure as a design lever: if you want three independent services, you first create three teams that can work without constant negotiation."
        },
        {
          type: "truefalse",
          q: "Conway's law implies that four teams sharing ownership of one service will tend to produce a design with more internal negotiation and coordination overhead than a single owning team would.",
          answer: true,
          explain: "Every boundary that requires cross-team agreement becomes a coordination cost. Shared ownership of one component without a clear owner is a reliable source of that cost."
        },
        {
          type: "mcq",
          q: "A company organizes teams as frontend, backend, and database. What architectural outcome does Conway's law predict?",
          choices: [
            "Services aligned to business capabilities, since teams will self-organize by domain",
            "Layered components whose boundaries follow the technical layers, so most features require all three teams to coordinate",
            "A single monolith owned equally by all three teams",
            "Fully independent deployables per team with no coordination"
          ],
          answer: 1,
          explain: "Technology-layer teams produce technology-layer boundaries. Because features cut vertically through the layers, nearly every change becomes a three-team negotiation."
        },
        {
          type: "mcq",
          q: "What is the primary purpose of a stream-aligned team owning a service end to end?",
          choices: [
            "To make the team responsible for a specific technology stack across all products",
            "To reduce handoffs so that a change to one business capability can be delivered by one team",
            "To ensure every team uses the same language and framework",
            "To centralize database schema decisions in one group"
          ],
          answer: 1,
          explain: "Team Topologies calls this a stream-aligned team. The goal is a fast flow of change with minimal handoffs, which is the organizational precondition for independent deployability."
        },
        {
          type: "truefalse",
          q: "Splitting a monolith into services will deliver independent deployability even if release approvals remain centralized in a single change board.",
          answer: false,
          explain: "Independent deployability is an organizational property first. Centralized approval reimposes the shared release train regardless of how many deployables exist."
        },
        {
          type: "match",
          q: "Match each team arrangement to the architecture it tends to produce.",
          pairs: [
            ["Teams split by technical layer", "Layered boundaries requiring cross-team work for most features"],
            ["Teams split by business capability", "Service boundaries aligned to domains with fewer handoffs"],
            ["One team owning every component", "A single deployable with informal internal boundaries"]
          ],
          explain: "Conway's law runs both directions: architecture you cannot staff will not survive, and team structure you do not intend will show up in the design anyway."
        }
      ]
    }
  ]
});
