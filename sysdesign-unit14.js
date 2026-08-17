window.ACADEMY.addUnit("sysdesign", {
  id: "unit-14",
  title: "Infrastructure & Delivery",
  color: "#eab308",
  icon: "\u{1F6A2}",
  description: "Getting the design into production, repeatedly and safely.",
  lessons: [
    {
      id: "l105",
      title: "Containers and orchestration",
      intro: "What a container actually isolates, and what an orchestrator adds on top.",
      questions: [
        {
          type: "mcq",
          q: "What is the core technical difference between a container and a virtual machine?",
          choices: [
            "A container virtualizes hardware and boots its own kernel, while a VM shares the host kernel",
            "A container isolates a process and its filesystem while sharing the host kernel, while a VM virtualizes hardware and runs its own kernel",
            "A container can only run stateless code, while a VM is the only way to run a database",
            "A container is a compressed disk image, while a VM is a running copy of that same image"
          ],
          answer: 1,
          explain: "Containers are isolated processes on a shared kernel, built from namespaces and cgroups. VMs virtualize hardware and boot a separate guest kernel, which is why they are heavier to start."
        },
        {
          type: "fill",
          q: "Linux ____ are the kernel feature that limits how much CPU and memory a container may consume.",
          answer: "cgroups",
          accept: ["cgroups", "cgroup", "control groups", "control group"],
          explain: "Namespaces provide the isolated view of the system (PIDs, mounts, network); cgroups provide the resource accounting and limits."
        },
        {
          type: "truefalse",
          q: "Because a container image is immutable, any data written inside a running container is lost when that container is replaced unless it is stored on a mounted volume or an external service.",
          answer: true,
          explain: "The writable layer belongs to the container instance, not the image. Durable state must live in a volume, an object store, or a database."
        },
        {
          type: "order",
          q: "Order these steps in the normal lifecycle of getting a containerized service running under an orchestrator.",
          items: [
            "Build an image from a Dockerfile",
            "Push the image to a registry and record its immutable digest or version tag",
            "Declare the desired state (replicas, image, resources) to the orchestrator",
            "The scheduler places pods on nodes and the controller keeps actual state matching desired state"
          ],
          explain: "Orchestrators are control loops: you declare desired state, and a controller continuously reconciles reality toward it."
        },
        {
          type: "match",
          q: "Match each Kubernetes-style concept to what it does.",
          pairs: [
            ["Pod", "The smallest deployable unit: one or more containers sharing a network namespace"],
            ["Service", "A stable virtual address and load-balancing rule in front of a changing set of pods"],
            ["Deployment", "A controller that manages replica counts and rolls out new image versions gradually"]
          ],
          explain: "Pods are the unit of scheduling, Services provide stable addressing over ephemeral pods, and Deployments manage rollout and replica reconciliation."
        },
        {
          type: "mcq",
          q: "A pod passes its liveness probe but fails its readiness probe. What should the orchestrator do?",
          choices: [
            "Restart the container immediately, since a failing probe of any kind means the process is dead",
            "Evict the pod from the node and reschedule it on a different node",
            "Scale up the Deployment so healthy replicas can cover the failing one permanently",
            "Keep the container running but remove it from the Service endpoints so it receives no traffic"
          ],
          answer: 3,
          explain: "Liveness answers should this process be restarted; readiness answers should it receive traffic right now. A warming-up or dependency-blocked pod should be pulled from rotation, not killed."
        },
        {
          type: "truefalse",
          q: "Deploying by the image tag latest is safe for production because the orchestrator always resolves it to the exact image that was tested.",
          answer: false,
          explain: "Mutable tags like latest can resolve to different digests on different nodes and at different times, so the deployment is not reproducible. Pin a version or an image digest."
        }
      ]
    },
    {
      id: "l106",
      title: "Environments, configuration, and the twelve-factor idea",
      intro: "Why config belongs in the environment and one artifact should run everywhere.",
      questions: [
        {
          type: "mcq",
          q: "The twelve-factor app methodology says config should be stored where?",
          choices: [
            "In a per-environment config file committed alongside the code",
            "In a constants module compiled into the build artifact for each stage",
            "In a shared network drive that all environments mount at startup",
            "In the environment, injected at runtime and kept out of the repo"
          ],
          answer: 3,
          explain: "Twelve-factor defines config as everything that varies between deploys, and requires strict separation from code so the same build can run in any environment."
        },
        {
          type: "fill",
          q: "A useful twelve-factor litmus test: could you open-source this repository right now without leaking any ____ ?",
          answer: "credentials",
          accept: ["credentials", "credential", "secrets", "secret", "passwords", "password", "api keys", "keys"],
          explain: "If publishing the repo would expose database passwords or API keys, config has leaked into code and the separation has failed."
        },
        {
          type: "truefalse",
          q: "Under the twelve-factor model, you build one artifact and promote that same artifact through staging and production, changing only the injected configuration.",
          answer: true,
          explain: "Build once, deploy many. Rebuilding per environment means the thing you tested is not the thing you shipped."
        },
        {
          type: "match",
          q: "Match each twelve-factor factor to its claim.",
          pairs: [
            ["Backing services", "Treat databases and queues as attached resources swappable by config alone"],
            ["Dev/prod parity", "Keep development, staging, and production as similar as possible in time, people, and tools"],
            ["Disposability", "Processes should start fast and shut down gracefully on SIGTERM"]
          ],
          explain: "Each factor targets a different failure mode: hard-coded dependencies, environment drift, and slow or unsafe process churn."
        },
        {
          type: "mcq",
          q: "Which practice most directly reduces the risk of a secret leaking through configuration?",
          choices: [
            "Storing secrets in a dedicated secret manager and injecting them at runtime with short-lived, rotatable values",
            "Base64-encoding the secret before putting it in the repository",
            "Keeping secrets in a private repository that only the team can clone",
            "Passing secrets as command-line arguments to the process at startup"
          ],
          answer: 0,
          explain: "Base64 is encoding, not encryption, and private repos still persist secrets in history. Command-line arguments are visible in the process table. A secret manager plus rotation limits both exposure and blast radius."
        },
        {
          type: "truefalse",
          q: "Grouping config into named environment groups such as development and production scales better than treating each config value independently.",
          answer: false,
          explain: "Twelve-factor argues the opposite: named groups multiply as you add deploys and do not scale. Config should be granular, orthogonal variables."
        },
        {
          type: "order",
          q: "Order these config resolution steps from lowest to highest precedence in a conventional layered scheme.",
          items: [
            "Compiled-in defaults shipped with the code",
            "Values from a config file for the running environment",
            "Values from environment variables",
            "Explicit command-line overrides for this single process"
          ],
          explain: "More specific and more immediate sources win. The precedence order must be documented, or operators cannot reason about what value is actually in effect."
        }
      ]
    },
    {
      id: "l107",
      title: "CI/CD pipelines",
      intro: "What continuous integration and continuous delivery actually require of a team.",
      questions: [
        {
          type: "mcq",
          q: "What distinguishes continuous delivery from continuous deployment?",
          choices: [
            "Continuous delivery runs tests, while continuous deployment skips tests to move faster",
            "Continuous delivery applies only to libraries, while continuous deployment applies only to services",
            "Continuous delivery keeps every change releasable with a manual go decision; continuous deployment ships every passing change automatically",
            "Continuous delivery builds artifacts nightly, while continuous deployment builds them per commit"
          ],
          answer: 2,
          explain: "Both require an always-releasable trunk. The difference is only whether a human presses the button on the final promotion to production."
        },
        {
          type: "fill",
          q: "The core discipline of continuous integration is that every developer merges work into the shared ____ at least daily, so integration problems surface small.",
          answer: "trunk",
          accept: ["trunk", "main", "mainline", "master", "master branch", "main branch", "trunk branch"],
          explain: "CI is a merge discipline before it is a tool. Long-lived branches defer integration pain rather than removing it, no matter how good the build server is."
        },
        {
          type: "order",
          q: "Order the stages of a conventional deployment pipeline from first to last.",
          items: [
            "Commit stage: compile and run fast unit tests to produce a single versioned artifact",
            "Automated acceptance tests run against that artifact in a production-like environment",
            "Manual exploratory or performance testing on the same artifact",
            "Promotion of the identical artifact to production"
          ],
          explain: "The pipeline is a series of gates on one artifact. Fast, cheap tests come first so failures are found in seconds rather than hours."
        },
        {
          type: "truefalse",
          q: "A pipeline that rebuilds the application from source at each stage still satisfies the build-once principle as long as the source commit is the same.",
          answer: false,
          explain: "Rebuilds can differ through dependency drift, toolchain versions, or nondeterministic packaging. Build once, then promote the identical binary or image."
        },
        {
          type: "mcq",
          q: "A test in your pipeline fails roughly one run in twenty for no code-related reason. What is the right response?",
          choices: [
            "Add an automatic retry so the pipeline is green again and move on",
            "Delete the test permanently, since unreliable signal is worse than no signal at all",
            "Increase the timeout on every test in the suite to reduce the failure rate",
            "Quarantine or fix the flaky test, because tolerated flakiness trains the team to ignore red builds"
          ],
          answer: 3,
          explain: "Flaky tests destroy the pipeline's authority: once red is routinely ignored, a real regression passes unnoticed. Quarantine buys time, but the fix is the goal."
        },
        {
          type: "match",
          q: "Match each pipeline property to what it buys you.",
          pairs: [
            ["Fast commit stage", "Developers get pass/fail feedback while the change is still in their head"],
            ["Hermetic build", "Same inputs produce the same artifact regardless of which machine builds it"],
            ["Artifact provenance", "You can trace a running binary back to the exact commit and pipeline run that produced it"]
          ],
          explain: "Speed governs developer behavior, hermeticity governs reproducibility, and provenance governs incident response and supply-chain auditing."
        },
        {
          type: "truefalse",
          q: "Deployment frequency and change lead time are useless as team metrics because they can be gamed by shipping trivially small changes.",
          answer: false,
          explain: "Small batches are the intended behavior, not the loophole. These metrics are paired with change failure rate and time to restore precisely so speed cannot be bought with instability."
        }
      ]
    },
    {
      id: "l108",
      title: "Infrastructure as code",
      intro: "Declarative infrastructure, idempotence, and why drift is the real enemy.",
      questions: [
        {
          type: "mcq",
          q: "What does it mean that declarative infrastructure as code is idempotent?",
          choices: [
            "Applying the same configuration repeatedly converges on the same end state instead of stacking changes",
            "Each apply creates a new copy of the infrastructure, so history is preserved",
            "The tool refuses to run twice against the same environment without a manual reset",
            "Every resource is destroyed and recreated on each run to guarantee a clean state"
          ],
          answer: 0,
          explain: "You describe the desired end state, and the tool computes the diff against reality. Running it again when nothing changed is a no-op, which is what makes reruns safe."
        },
        {
          type: "fill",
          q: "When someone changes a resource by hand in the console, the live environment no longer matches the code. This divergence is called configuration ____ .",
          answer: "drift",
          accept: ["drift", "config drift", "configuration drift"],
          explain: "Drift silently invalidates the code as a source of truth. Regular plan or diff runs detect it before the next apply reverts or clobbers the manual change."
        },
        {
          type: "truefalse",
          q: "An imperative provisioning script that runs the same commands every time is automatically idempotent because it is automated.",
          answer: false,
          explain: "Automation and idempotence are independent. An imperative script that appends a firewall rule adds a duplicate on every run unless it explicitly checks current state first."
        },
        {
          type: "match",
          q: "Match each infrastructure-as-code concept to its meaning.",
          pairs: [
            ["Plan or dry run", "Shows the diff between declared state and live state before anything is changed"],
            ["State file", "The tool's record mapping declared resources to the real resource identifiers it manages"],
            ["Module", "A reusable, parameterized bundle of resources instantiated many times with different inputs"]
          ],
          explain: "The plan is the review gate, the state file is how the tool knows what it already owns, and modules are how you avoid copy-pasting environments."
        },
        {
          type: "mcq",
          q: "Two engineers run apply against the same environment at the same time. What is the standard mechanism that prevents corruption?",
          choices: [
            "Both runs proceed and the tool merges the resulting states afterward",
            "The tool automatically reverts to the last known good state and asks both to retry",
            "State locking, which makes the second run wait or fail rather than write concurrently",
            "Each engineer keeps a private state file that is reconciled during code review"
          ],
          answer: 2,
          explain: "Remote state with locking serializes writes. Private per-engineer state is exactly the failure mode locking exists to prevent."
        },
        {
          type: "truefalse",
          q: "Treating servers as cattle rather than pets means you replace an unhealthy instance from a known image rather than logging in to repair it.",
          answer: true,
          explain: "Immutable replacement keeps the running fleet identical to what the code describes. Hand-repaired instances become snowflakes that no rebuild can reproduce."
        },
        {
          type: "order",
          q: "Order a safe change to production infrastructure using declarative IaC.",
          items: [
            "Edit the configuration and open a pull request",
            "Run plan in CI and attach the diff for human review",
            "Merge and apply to a lower environment, verifying the result",
            "Apply the identical configuration to production"
          ],
          explain: "The plan diff is the artifact people actually review. Promoting the same configuration through environments is what makes lower environments predictive."
        }
      ]
    },
    {
      id: "l109",
      title: "Blue/green and canary deployment",
      intro: "Two ways to bound the blast radius of a bad release.",
      questions: [
        {
          type: "mcq",
          q: "What is the defining difference between blue/green and canary deployment?",
          choices: [
            "Blue/green requires containers, while canary works only on virtual machines",
            "Blue/green updates instances in place one at a time, while canary replaces the whole fleet simultaneously",
            "Blue/green applies to databases only, while canary applies to stateless services only",
            "Blue/green runs two full environments and flips all traffic at once; canary shifts a small percentage of traffic to the new version first"
          ],
          answer: 3,
          explain: "Blue/green buys a fast, complete rollback by keeping the old environment intact. Canary buys graduated exposure by routing only a fraction of real traffic to the new version."
        },
        {
          type: "fill",
          q: "In a blue/green deployment, rollback is fast because it means flipping the ____ back to the environment still running the old version.",
          answer: "router",
          accept: ["router", "load balancer", "traffic", "traffic switch", "load-balancer", "switch", "proxy", "dns", "routing"],
          explain: "The old environment is still warm and serving-capable, so recovery is a routing change rather than a redeploy."
        },
        {
          type: "truefalse",
          q: "A canary release is only meaningful if you are watching error rate, latency, and business metrics for the canary population specifically, compared against the baseline.",
          answer: true,
          explain: "Routing one percent of traffic to a new version and not measuring it separately is just a slow deploy. The comparison against the control group is the whole point."
        },
        {
          type: "order",
          q: "Order a canary rollout from start to finish.",
          items: [
            "Deploy the new version alongside the old one with zero traffic",
            "Shift a small percentage of traffic and compare canary metrics against baseline",
            "Increase the traffic percentage in steps while the comparison stays healthy",
            "Shift one hundred percent of traffic and retire the old version"
          ],
          explain: "Each step is a decision point with an automatic abort. Progressive exposure means the population harmed by a bad release is bounded at every moment."
        },
        {
          type: "match",
          q: "Match each release strategy to its distinguishing cost or property.",
          pairs: [
            ["Blue/green", "Needs roughly double the capacity during the cutover window"],
            ["Canary", "Requires per-version metric segmentation and traffic-percentage control"],
            ["Rolling update", "Replaces instances in batches, so both versions serve simultaneously with no separate idle environment"]
          ],
          explain: "The strategies trade capacity cost, observability requirements, and rollback speed against each other. There is no free option."
        },
        {
          type: "mcq",
          q: "Your service is deployed blue/green, but blue and green share one production database. What does that constrain?",
          choices: [
            "Schema changes must be compatible with both versions, since a rollback cannot undo writes the new version already made",
            "Nothing, because the database is outside the deployment boundary",
            "Only read queries may run during the cutover window",
            "The database must be duplicated too, or the flip cannot proceed"
          ],
          answer: 0,
          explain: "The traffic flip is instant; data is not. A rollback returns the old code to a database the new code has already written to, so schema and data changes must be backward compatible."
        },
        {
          type: "truefalse",
          q: "Sticky sessions make canary analysis cleaner because each user consistently experiences only one version.",
          answer: true,
          explain: "Consistent assignment prevents a user from bouncing between versions mid-session, which would both confuse the user and pollute the metric comparison."
        }
      ]
    },
    {
      id: "l110",
      title: "Feature flags and decoupling deploy from release",
      intro: "Shipping code and exposing behavior are two separate events.",
      questions: [
        {
          type: "mcq",
          q: "What is the central idea that feature flags enable?",
          choices: [
            "They eliminate the need for automated tests by letting you fix bugs in production",
            "They allow multiple versions of the same binary to run without a load balancer",
            "They separate deploy, meaning code is shipped to production, from release, meaning users can see the behavior",
            "They replace version control branches by storing feature code in a configuration service"
          ],
          answer: 2,
          explain: "Deploy is a technical event; release is a product event. A flag lets code sit dormant in production until someone decides to turn it on, and lets it be turned off without a redeploy."
        },
        {
          type: "fill",
          q: "Turning a flag off to hide a broken feature is often called a kill ____ , and it is far faster than redeploying the previous build.",
          answer: "switch",
          accept: ["switch", "kill switch", "toggle"],
          explain: "Recovery becomes a config change measured in seconds rather than a pipeline run measured in minutes."
        },
        {
          type: "truefalse",
          q: "Feature flags are free, so leaving old flags permanently in the codebase costs nothing.",
          answer: false,
          explain: "Every live flag doubles the number of code paths, and combinations multiply. Stale flags create untested states, so short-lived release flags need an expiry and cleanup discipline."
        },
        {
          type: "match",
          q: "Match each flag category to its intended lifetime and purpose.",
          pairs: [
            ["Release toggle", "Short-lived; hides incomplete work so trunk stays deployable, then is removed"],
            ["Experiment toggle", "Lives for the duration of an A/B test, assigning users to variants for measurement"],
            ["Ops toggle", "Long-lived; lets operators shed load or disable an expensive subsystem during an incident"]
          ],
          explain: "Different lifetimes imply different governance. Release toggles are debt to be paid down; ops toggles are permanent controls that need to be tested regularly."
        },
        {
          type: "mcq",
          q: "How do feature flags support trunk-based development?",
          choices: [
            "They let a long-lived feature branch merge automatically without conflicts",
            "They let unfinished work be merged to trunk continuously while staying invisible to users",
            "They defer compilation of unfinished code until the flag is enabled at runtime",
            "They replace code review by gating risky changes behind a manual approval step"
          ],
          answer: 1,
          explain: "Flags make incomplete work safe to integrate, which is what allows daily merges instead of weeks-long branches that diverge from trunk."
        },
        {
          type: "truefalse",
          q: "A flag evaluation service should fail closed by returning an error when it is unreachable, so behavior is never ambiguous.",
          answer: false,
          explain: "The standard practice is the opposite: the SDK caches values and falls back to a safe default so the flag service is not a single point of failure for the whole application."
        },
        {
          type: "order",
          q: "Order the lifecycle of a well-managed short-lived release toggle.",
          items: [
            "Add the flag defaulting to off and merge the incomplete feature to trunk",
            "Enable it for internal users, then a small percentage of real users",
            "Ramp to one hundred percent and confirm the feature is healthy",
            "Delete the flag and the now-dead alternative code path"
          ],
          explain: "The final deletion step is the one teams skip. Without it, the codebase accumulates permanently branching logic that nobody tests in every combination."
        }
      ]
    },
    {
      id: "l111",
      title: "Zero-downtime schema migrations: expand-contract",
      intro: "How to change a schema while old and new code run at the same time.",
      questions: [
        {
          type: "order",
          q: "Order the full expand-contract sequence for replacing an old column with a new one.",
          items: [
            "Expand: add the new nullable column, deploying no behavior change",
            "Dual-write: application writes both old and new columns",
            "Backfill existing rows into the new column",
            "Switch reads to the new column, then contract by dropping the old one"
          ],
          explain: "Every step leaves the schema compatible with both the currently deployed code and the previous version, which is what makes rollback possible at any point."
        },
        {
          type: "mcq",
          q: "Why is renaming a column in a single migration unsafe during a rolling deploy?",
          choices: [
            "There is a window where old code still queries the old name that no longer exists, causing errors",
            "Renames always require an exclusive table lock in every database engine",
            "The rename invalidates all indexes on the table and forces a full rebuild",
            "Renames cannot be expressed in most migration frameworks without raw SQL"
          ],
          answer: 0,
          explain: "During a rollout, both versions run simultaneously. A rename is a destructive change that breaks whichever version is not yet updated, and it breaks rollback too."
        },
        {
          type: "fill",
          q: "In the expand phase the new column must be added as ____ , because existing rows have no value for it yet and old code will not populate it.",
          answer: "nullable",
          accept: ["nullable", "null", "nullable column", "optional"],
          explain: "Adding NOT NULL without a default fails or forces a table rewrite. Nullable first, backfill, then tighten the constraint once every row has a value."
        },
        {
          type: "truefalse",
          q: "Backfilling a large table should be done in bounded batches with pauses rather than a single UPDATE covering every row.",
          answer: true,
          explain: "One giant UPDATE holds locks, bloats the transaction log or undo space, and can stall replication. Chunked backfills with monitoring keep the system serving traffic."
        },
        {
          type: "match",
          q: "Match each expand-contract phase to the invariant it preserves.",
          pairs: [
            ["Expand", "Schema accepts both old and new code because nothing existing was removed or narrowed"],
            ["Dual-write", "The new column stays current for live traffic while the backfill handles historical rows"],
            ["Contract", "Only runs once no deployed code reads or writes the old column"]
          ],
          explain: "Each phase is separately deployable and separately revertible. Collapsing two phases into one deploy is what reintroduces downtime risk."
        },
        {
          type: "mcq",
          q: "You need to make a column NOT NULL on a large, busy table. What is the safest ordering?",
          choices: [
            "Add the constraint immediately and let the database reject any offending writes as they occur",
            "Stop writes, alter the column, and restart writes during a short maintenance window",
            "Ensure the application always writes a value, backfill remaining nulls in batches, validate, then add the constraint",
            "Drop the column and recreate it as NOT NULL with a default value"
          ],
          answer: 2,
          explain: "The constraint can only be added cheaply once no nulls remain, and nulls only stop appearing once the application guarantees a value. Dropping the column would destroy data."
        },
        {
          type: "truefalse",
          q: "Expand-contract is only needed for relational databases; document stores avoid the problem because they are schemaless.",
          answer: false,
          explain: "Schemaless just moves the schema into the application. Old code reading documents written by new code still needs a compatible shape, so the same expand, dual-write, migrate, contract discipline applies."
        }
      ]
    },
    {
      id: "l112",
      title: "Cost engineering: the bill is a design constraint",
      intro: "Treating spend as a first-class non-functional requirement of the architecture.",
      questions: [
        {
          type: "mcq",
          q: "Why should cloud cost be treated as an architectural constraint rather than a finance problem discovered later?",
          choices: [
            "Because cloud providers charge penalties for unplanned architecture changes",
            "Because the choices that determine the bill are design choices - data placement, replication factor, chattiness, retention - and they are expensive to reverse afterward",
            "Because the finance team cannot read infrastructure invoices without engineering help",
            "Because reserved capacity discounts are only available before a system is designed"
          ],
          answer: 1,
          explain: "Cost is a consequence of design. Cross-zone chatter, replication factor, and log retention are set in the architecture and become structural once traffic depends on them."
        },
        {
          type: "fill",
          q: "Cloud providers typically charge for data leaving their network, known as ____ , while data coming in is usually free.",
          answer: "egress",
          accept: ["egress", "data egress", "egress fees", "egress charges"],
          explain: "The asymmetry is deliberate and it shapes design: chatty cross-region traffic and serving large media directly from compute can dominate a bill."
        },
        {
          type: "truefalse",
          q: "Moving a workload to serverless functions always lowers cost compared with running it on a continuously provisioned instance.",
          answer: false,
          explain: "Per-invocation pricing wins for spiky, low-duty-cycle workloads. Steady high-throughput traffic often costs more on per-request pricing than on a well-utilized reserved instance."
        },
        {
          type: "match",
          q: "Match each cost lever to the mechanism behind the saving.",
          pairs: [
            ["Storage lifecycle policies", "Automatically move older objects to colder tiers with lower per-gigabyte cost and higher retrieval latency"],
            ["Autoscaling to a lower floor", "Stop paying for capacity that idles outside peak hours"],
            ["Caching in front of a database", "Avoid repeated compute and read cost for identical requests"]
          ],
          explain: "Each lever attacks a different line item: stored bytes, provisioned time, and repeated work. Knowing which line dominates tells you which lever matters."
        },
        {
          type: "mcq",
          q: "Your observability bill now rivals your compute bill. Which response addresses the structural cause?",
          choices: [
            "Turn off logging in production and rely on user reports to detect incidents",
            "Move all logs to a self-hosted cluster without changing volume or retention",
            "Sample high-volume traces, set retention by signal value, and aggregate high-cardinality debug logs into metrics",
            "Increase log verbosity so each incident needs fewer follow-up deploys"
          ],
          answer: 2,
          explain: "Telemetry cost scales with volume times retention times cardinality. Self-hosting shifts the cost to your own operations without reducing any of those three terms."
        },
        {
          type: "truefalse",
          q: "Tagging or labelling resources by team and service is a prerequisite for meaningful cost accountability.",
          answer: true,
          explain: "Without attribution you have one aggregate number that nobody owns. Allocation to a team or service is what turns spend into an actionable engineering signal."
        },
        {
          type: "order",
          q: "Order a disciplined cost-reduction effort.",
          items: [
            "Tag resources so every line item is attributable to a service and an owning team",
            "Within that attributed view, identify the few services that dominate the bill",
            "Model the dominant service's unit cost, such as cost per thousand requests or per active user",
            "Change the design or configuration driving that unit cost, then verify the bill moved"
          ],
          explain: "Unit cost, not total spend, is the metric that survives growth: a bill that rises while cost per user falls is a healthy system, and only attribution makes that visible."
        }
      ]
    }
  ]
});
