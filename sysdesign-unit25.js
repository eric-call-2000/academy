window.ACADEMY.addUnit("sysdesign", {
  id: "unit-25",
  title: "The AI-Leveraged Engineer",
  color: "#eab308",
  icon: "\u{1F3DB}\u{FE0F}",
  description: "What actually changed, what did not, and where the durable value sits.",
  lessons: [
    {
      id: "l193",
      title: "What changed, and what did not",
      intro: "Separating the part of engineering that got cheaper from the part that did not.",
      questions: [
        {
          type: "mcq",
          q: "The binding constraint on building a software system has never been typing speed. What has it actually been?",
          choices: [
            "The number of lines of code a team can produce per sprint",
            "The raw speed at which an engineer can navigate an editor",
            "Understanding the problem and the consequences of a design",
            "The availability of enough boilerplate templates to copy from"
          ],
          answer: 2,
          explain: "Systems fail from misunderstood requirements, wrong consistency choices, and unconsidered failure modes - not from slow typing. Making transcription cheaper does not touch that constraint."
        },
        {
          type: "truefalse",
          q: "If an AI tool wrote the code, accountability for its behavior in production shifts away from the engineer who shipped it.",
          answer: false,
          explain: "You remain fully accountable for output you did not personally write. Authorship of the keystrokes and ownership of the consequences are different things."
        },
        {
          type: "fill",
          q: "AI tools mainly reduce the cost of producing code; they do not reduce the cost of being ____ about the design.",
          answer: "wrong",
          accept: ["wrong", "incorrect", "mistaken"],
          explain: "A cheaper first draft does not make a bad architecture cheaper to unwind. The expensive errors live upstream of the code."
        },
        {
          type: "mcq",
          q: "Which cost is LEAST reduced by a code-generating assistant?",
          choices: [
            "Producing a first draft of a well-specified function",
            "Deciding which consistency guarantee the feature actually requires",
            "Translating a known algorithm from one language to another",
            "Writing repetitive test fixtures for an existing interface"
          ],
          answer: 1,
          explain: "The other three are transcription tasks with a known target. Choosing a consistency guarantee requires knowing the business tolerance for stale or conflicting data, which lives outside the code."
        },
        {
          type: "order",
          q: "Order these skills from most quickly obsoleted to most durable.",
          items: [
            "Memorized syntax of one framework version",
            "Fluency with a particular toolchain or IDE",
            "Reasoning about failure modes and trade-offs"
          ],
          explain: "Syntax churns per release, tooling churns per few years, and the reasoning about partial failure and trade-offs has held for decades."
        },
        {
          type: "truefalse",
          q: "Amdahl-style reasoning applies to engineering work: if coding is only part of the total time, speeding up coding alone puts a ceiling on the total speedup.",
          answer: true,
          explain: "Amdahl's law says overall speedup is limited by the portion you did not accelerate. If design, review, and coordination dominate, an infinitely fast coder still yields a bounded gain."
        },
        {
          type: "match",
          q: "Match each activity to what leverage actually does to it.",
          pairs: [
            ["Drafting boilerplate", "Largely automatable; verify by reading and testing"],
            ["Choosing a trust boundary", "Stays with the engineer; getting it wrong is a security incident"],
            ["Defining the problem", "Stays with the people who own the outcome and can talk to users"]
          ],
          explain: "Leverage is uneven. It is large where the target is known and verifiable, and near zero where the work is deciding what the target should be."
        }
      ]
    },
    {
      id: "l194",
      title: "Taste: judgment as the skill that compounds",
      intro: "What engineering taste is, why it compounds, and how it is built.",
      questions: [
        {
          type: "mcq",
          q: "In engineering, taste is best defined as:",
          choices: [
            "A preference for a particular language or framework style",
            "The habit of choosing the newest available tool at each layer",
            "An aesthetic sense about code formatting and naming conventions",
            "Calibrated judgment about which trade-offs matter for this system now"
          ],
          answer: 3,
          explain: "Taste is contextual judgment, not style. The same design can be right for a ten-user internal tool and wrong for a payments path."
        },
        {
          type: "truefalse",
          q: "Taste is mostly innate and cannot be trained.",
          answer: false,
          explain: "Taste is built by making decisions, living with them, and seeing which ones held up. It is trainable, but only with feedback over time."
        },
        {
          type: "fill",
          q: "The fastest way to build taste is to stay somewhere long enough to see the ____ of your own decisions.",
          answer: "consequences",
          accept: ["consequences", "consequence", "outcomes", "results", "effects", "impact"],
          explain: "Judgment calibrates on feedback. An engineer who never operates what they design gets many decisions and almost no signal about which were good."
        },
        {
          type: "mcq",
          q: "Which behavior is the strongest evidence of engineering taste?",
          choices: [
            "Producing the most code review comments on a team",
            "Always choosing the simplest possible implementation regardless of context",
            "Naming the one constraint that makes two options genuinely different",
            "Reliably recognizing which design pattern a codebase uses"
          ],
          answer: 2,
          explain: "Most design debates are noise until someone identifies the constraint that actually decides. That reduction is the visible output of taste."
        },
        {
          type: "order",
          q: "Order the steps of a review that exercises taste rather than style.",
          items: [
            "Restate the problem the change is meant to solve",
            "Identify the constraint that decides between the options",
            "Check that the chosen option's failure mode is acceptable",
            "Comment on naming and formatting"
          ],
          explain: "Style comments are cheap and should come last. A review that starts there can approve a change that solves the wrong problem correctly."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Calibration", "Knowing how often your confident judgments turn out right"],
            ["Heuristic", "A rule that is usually right and cheap to apply"],
            ["Principle", "A commitment you keep even when it is locally inconvenient"]
          ],
          explain: "Heuristics are shortcuts you abandon when they fail; principles are the ones you deliberately do not abandon; calibration is knowing which of your beliefs to trust."
        },
        {
          type: "truefalse",
          q: "Because plausible designs are now cheap to generate, the ability to choose between them becomes more valuable, not less.",
          answer: true,
          explain: "When supply of options rises and the cost of a wrong choice does not, selection is the scarce step. Generation without discrimination just produces more ways to be wrong."
        }
      ]
    },
    {
      id: "l195",
      title: "Own the architecture, delegate the typing",
      intro: "How to hand off implementation without handing off understanding.",
      questions: [
        {
          type: "mcq",
          q: "You are using an assistant to build a new service. Which part should you specify yourself before any code is generated?",
          choices: [
            "The interface contract, data model, and failure behavior",
            "The variable naming convention used inside each function",
            "The directory layout of the generated test files",
            "The logging library and its output format"
          ],
          answer: 0,
          explain: "Contracts, data shape, and failure behavior are the expensive-to-reverse decisions. The rest is convention that a later change can fix cheaply."
        },
        {
          type: "truefalse",
          q: "Delegating implementation is only safe if you can state, before reading the output, what correct output would look like.",
          answer: true,
          explain: "Without a prior expectation you are not reviewing, you are being persuaded. A plausible-looking answer is exactly what a generator is optimized to produce."
        },
        {
          type: "fill",
          q: "Reviewing generated code is only meaningful if you hold an independent mental ____ of what the code should do.",
          answer: "model",
          accept: ["model", "mental model", "specification", "spec"],
          explain: "Verification requires a reference. If your only notion of correctness comes from the artifact you are checking, the check is circular."
        },
        {
          type: "mcq",
          q: "A generated module passes every test you asked for. What is the most important remaining check?",
          choices: [
            "Whether the code style matches the rest of the repository",
            "Whether the implementation could be made shorter",
            "Whether the newest available library version was used",
            "Whether the tests actually encode the requirements, including failure cases"
          ],
          answer: 3,
          explain: "Tests written from the same flawed understanding as the code will pass happily. Green CI proves consistency with the tests, not with the requirement."
        },
        {
          type: "order",
          q: "Order a sane delegation loop.",
          items: [
            "State the contract and the invariants",
            "Generate an implementation",
            "Read the diff against the contract you stated",
            "Exercise the failure paths, not just the happy path"
          ],
          explain: "The contract must exist before the code, or the code becomes the specification and there is nothing left to check it against."
        },
        {
          type: "match",
          q: "Match each kind of decision to its defining property.",
          pairs: [
            ["Architecture", "Expensive to reverse once other systems depend on it"],
            ["Implementation", "Must be correct, but can be swapped behind a stable interface"],
            ["Convention", "Has no correct answer at all; it only has to be applied uniformly"]
          ],
          explain: "Spend your attention in proportion to reversal cost. Arguing about conventions while the interface contract goes unreviewed is misallocated effort."
        },
        {
          type: "truefalse",
          q: "Generated code you cannot explain is fine to merge as long as CI is green.",
          answer: false,
          explain: "CI checks the cases someone thought of. Code no one on the team understands cannot be safely debugged at 3am or safely modified later."
        }
      ]
    },
    {
      id: "l196",
      title: "What never to delegate",
      intro: "Three decisions that stay with you no matter how good the tooling gets.",
      questions: [
        {
          type: "mcq",
          q: "Which set names the three things you should never hand off entirely?",
          choices: [
            "Test writing, code review, and deployment",
            "The problem definition, the security and trust boundary, and the final trade-off call",
            "Naming, documentation, and dependency selection",
            "Estimation, on-call rotation, and incident write-ups"
          ],
          answer: 1,
          explain: "Each of these three sets the frame that everything else inherits. The others are delegable with verification because a reviewer can still check them against a stated intent."
        },
        {
          type: "truefalse",
          q: "Accepting a generated authorization check without independently reasoning about the trust boundary is an acceptable time saving on internal tools.",
          answer: false,
          explain: "Internal tools sit inside networks that are routinely reachable from outside. An authorization check you did not reason about is an assumption you cannot defend after a breach."
        },
        {
          type: "fill",
          q: "You remain fully ____ for output you did not personally write.",
          answer: "accountable",
          accept: ["accountable", "responsible"],
          explain: "Delegation moves the work, not the ownership. This is the same rule that applies to code you copied from a library or inherited from a departed teammate."
        },
        {
          type: "mcq",
          q: "Why is the problem definition the least delegable step?",
          choices: [
            "Because tools cannot produce grammatical prose about requirements",
            "Because writing requirements by hand is faster than prompting for them",
            "Because every downstream decision inherits its errors, and a correct solution to the wrong problem is still wrong",
            "Because requirements documents are legally binding artifacts"
          ],
          answer: 2,
          explain: "Errors in the problem statement are not caught by tests, review, or monitoring, because all of those check the system against that same statement."
        },
        {
          type: "match",
          q: "Match each undelegable decision to what it actually fixes.",
          pairs: [
            ["Problem definition", "What counts as success, before any solution exists"],
            ["Trust boundary", "Where input stops being assumed honest"],
            ["Trade-off call", "Which desirable property you are willing to give up"]
          ],
          explain: "Each one is a commitment the rest of the design is built on top of, which is exactly why a tool cannot make it for you."
        },
        {
          type: "truefalse",
          q: "A trust boundary is a place in the system where the assumptions you may make about data or callers change.",
          answer: true,
          explain: "Crossing one means revalidating: authenticate, authorize, and validate input again. Most injection and privilege bugs are a boundary someone did not notice."
        },
        {
          type: "order",
          q: "Order the questions to settle before writing code.",
          items: [
            "What problem are we solving, and for whom?",
            "What is trusted, and where does that stop?",
            "Which trade-off are we accepting, and why?",
            "What is the implementation?"
          ],
          explain: "Implementation is the last and cheapest question. Answering it first means the earlier three get decided by accident."
        }
      ]
    },
    {
      id: "l197",
      title: "Learning without atrophying: staying sharp while automating",
      intro: "Skill atrophy is real; the fix is deliberate practice of the thing you automate.",
      questions: [
        {
          type: "truefalse",
          q: "Skill atrophy from automation is a real effect, not just a motivational worry.",
          answer: true,
          explain: "Documented in aviation and other automated domains: abilities that are rarely exercised degrade, and the degradation shows up exactly when the automation fails."
        },
        {
          type: "mcq",
          q: "Which practice best protects a skill you have largely automated?",
          choices: [
            "Reading release notes for the tool that automates it",
            "Periodically doing the task unaided, then comparing your result to the tool's",
            "Asking the tool to explain its output every time",
            "Avoiding the tool entirely on anything production-facing"
          ],
          answer: 1,
          explain: "Comparison gives you a specific, fast signal about where your judgment has drifted. Reading explanations is passive, and total avoidance gives up the leverage for no gain in judgment."
        },
        {
          type: "fill",
          q: "Aviation calls the failure mode where an operator stops tracking the overall picture of what is happening while the automation runs ____ awareness loss.",
          answer: "situational",
          accept: ["situational", "situation", "situational awareness"],
          explain: "The operator is nominally in charge but has stopped building a model of what the system is doing, so they cannot take over competently when it hands control back."
        },
        {
          type: "mcq",
          q: "You delegate all SQL query tuning to an assistant. What is the concrete risk?",
          choices: [
            "During an incident you cannot judge whether its suggested plan is sane under time pressure",
            "Your queries will end up using more indexes than strictly necessary",
            "The database will eventually reject machine-written SQL",
            "Query performance will be worse on average than hand-written SQL"
          ],
          answer: 0,
          explain: "The tool is usually fine. The cost lands at the moment it is not fine and you have lost the ability to read a query plan quickly."
        },
        {
          type: "truefalse",
          q: "The point of practicing an automated skill is to be able to perform it quickly by hand every day.",
          answer: false,
          explain: "The point is retaining enough judgment to verify the tool and to operate when it is unavailable or wrong. Raw hand speed is exactly the thing worth giving up."
        },
        {
          type: "order",
          q: "Order a deliberate-practice loop for a skill you mostly automate.",
          items: [
            "Pick a task small enough to do unaided",
            "Do it without the tool and record your answer",
            "Compare against the tool's answer and locate the gap",
            "Write down the specific misconception to retest later"
          ],
          explain: "Deliberate practice needs a committed answer before you see the reference, or you will hindsight your way into believing you knew it."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Automation complacency", "Trusting an automated output more than the evidence warrants"],
            ["Deskilling", "Losing an underlying ability because it is rarely exercised"],
            ["Deliberate practice", "Working at the edge of ability with fast, specific feedback"]
          ],
          explain: "Complacency is an attitude, deskilling is a capability loss, and deliberate practice is the countermeasure to both."
        }
      ]
    },
    {
      id: "l198",
      title: "Communicating design: docs, ADRs, and diagrams",
      intro: "Writing down the reasoning, which is the artifact that outlives the code.",
      questions: [
        {
          type: "mcq",
          q: "An Architecture Decision Record captures which three things?",
          choices: [
            "The requirements, the schedule, and the owner",
            "The alternatives, the cost estimate, and the approval signature",
            "The context, the decision, and the consequences",
            "The diagram, the interfaces, and the test plan"
          ],
          answer: 2,
          explain: "Michael Nygard's ADR template is title and status plus context, decision, and consequences. Context records the forces that were true at the time, which is what future readers cannot reconstruct."
        },
        {
          type: "truefalse",
          q: "ADRs are normally immutable: when a decision changes you write a new record superseding the old one rather than editing the original.",
          answer: true,
          explain: "The value of the log is that it shows what was believed when. Editing history destroys the ability to see why an earlier decision made sense."
        },
        {
          type: "fill",
          q: "In a design document the ____ is the artifact that outlives the code, because implementations get rewritten but the constraints that forced the decision persist.",
          answer: "reasoning",
          accept: ["reasoning", "rationale", "why"],
          explain: "Anyone can read the current code to see what was built. Only the written reasoning tells them whether a proposed change breaks an assumption they cannot see."
        },
        {
          type: "mcq",
          q: "A reviewer asks why you chose an append-only event log over synchronous calls. The most useful answer in the doc is:",
          choices: [
            "A list of the frameworks considered and their relative popularity",
            "A diagram of the final component layout",
            "A note that the team already knows this technology well",
            "The constraint that forced it, plus what you gave up by choosing it"
          ],
          answer: 3,
          explain: "Naming the constraint lets a future reader check whether it still holds. Naming what you gave up tells them which symptoms to expect and not to treat as bugs."
        },
        {
          type: "order",
          q: "Order the sections of a Nygard-style ADR.",
          items: [
            "Title and status",
            "Context: the forces in play",
            "Decision: what we will do",
            "Consequences: what becomes easier and harder"
          ],
          explain: "The structure forces you to state the forces before the choice, which makes it obvious when a decision has no real justification behind it."
        },
        {
          type: "match",
          q: "Match each ADR element to its job.",
          pairs: [
            ["Context section", "The forces and constraints that were true when deciding"],
            ["Consequences section", "What this makes easier and what it makes harder afterward"],
            ["Superseded status", "A marker that a later record has replaced this decision"]
          ],
          explain: "Consequences are not a risk list to be minimized; honestly stating the downside is what makes the record trustworthy later."
        },
        {
          type: "truefalse",
          q: "A good architecture diagram must show every component, since omitting parts of the system makes it misleading.",
          answer: false,
          explain: "A diagram is a chosen abstraction at one level of detail, which is the core idea behind approaches like the C4 model. Drawing everything at once produces a picture that answers no question well."
        }
      ]
    },
    {
      id: "l199",
      title: "Leading a team that ships with AI",
      intro: "Where the bottleneck moves when code becomes cheap to produce.",
      questions: [
        {
          type: "mcq",
          q: "Your team's pull request volume triples after adopting code generation. Where does the bottleneck move?",
          choices: [
            "To the build system's compile times",
            "To review, integration, and the humans who must understand the change",
            "To the number of feature branches the repository can hold",
            "To the licensing cost of the generation tooling"
          ],
          answer: 1,
          explain: "Speeding up one stage exposes the next constraint. Comprehension and review do not scale with generation, so unreviewed volume becomes queued risk."
        },
        {
          type: "truefalse",
          q: "Counting lines or pull requests per engineer becomes a better productivity metric once code generation is cheap.",
          answer: false,
          explain: "It gets worse, because the quantity is now nearly free to inflate. Any metric that is cheap to game stops measuring what it was proxying for."
        },
        {
          type: "fill",
          q: "When code is cheap to produce, the scarce resource on a team becomes ____ capacity - the ability to understand and take responsibility for a change.",
          answer: "review",
          accept: ["review", "reviewing", "comprehension", "understanding"],
          explain: "Every merged change adds permanent surface area someone must maintain. If nobody has capacity to understand it, the team has taken on debt it cannot service."
        },
        {
          type: "mcq",
          q: "A junior engineer submits a large generated change they cannot explain. The best leadership response is:",
          choices: [
            "Merge it since the tests pass, and teach the concepts later",
            "Ban the tooling for engineers below a seniority threshold",
            "Require that authors be able to explain what they submit, and make that the team norm",
            "Have a senior quietly rewrite it by hand without discussion"
          ],
          answer: 2,
          explain: "The norm keeps the leverage while preserving accountability, and it makes the learning happen at submission time. Bans forfeit the leverage; silent rewrites teach nothing."
        },
        {
          type: "match",
          q: "Match each team concept to its meaning.",
          pairs: [
            ["Author accountability", "The submitter owns the behavior regardless of what generated it"],
            ["Review capacity", "The limit on how much change a team can absorb safely"],
            ["Blast radius", "How much of the system one bad change can damage"]
          ],
          explain: "These are three different levers: who answers for a change, how much change can be absorbed, and how bad one mistake can get."
        },
        {
          type: "truefalse",
          q: "Shrinking change size is one of the few levers that makes review and rollback easier at the same time.",
          answer: true,
          explain: "A small diff is easier to hold in your head and easier to revert cleanly, so it improves both the detection and the recovery side of the same risk."
        },
        {
          type: "order",
          q: "Order the steps after a generated change causes a production incident.",
          items: [
            "Restore service by reverting or mitigating",
            "Determine the actual root cause in the code and the design",
            "Ask why review did not catch it",
            "Change the process so that class of defect is caught next time"
          ],
          explain: "Mitigation always precedes diagnosis. Stopping after the code fix leaves the review gap that let it through fully intact."
        }
      ]
    },
    {
      id: "l200",
      title: "Staying current without chasing every release",
      intro: "A cheap filter for new tools, and what is actually worth learning deeply.",
      questions: [
        {
          type: "mcq",
          q: "The right test for whether a new tool deserves your attention is:",
          choices: [
            "Whether it changes a real constraint you actually have",
            "Whether it is newer than what you are using today",
            "Whether respected engineers are discussing it this month",
            "Whether it benchmarks faster in a published comparison"
          ],
          answer: 0,
          explain: "Judge tools by constraints removed, not by novelty. A tool that improves something that was never your bottleneck buys you nothing and costs migration effort."
        },
        {
          type: "truefalse",
          q: "Novelty is a reliable proxy for value in tooling decisions.",
          answer: false,
          explain: "Newer means less operational history and fewer known failure modes. Novelty is a cost you accept when the constraint it removes is worth it, not a benefit in itself."
        },
        {
          type: "fill",
          q: "Before adopting a tool, name the ____ it removes; if you cannot name one, you are buying novelty.",
          answer: "constraint",
          accept: ["constraint", "bottleneck", "limitation"],
          explain: "Forcing yourself to state it in one sentence kills most adoption proposals immediately, which is the point of the exercise."
        },
        {
          type: "mcq",
          q: "When a genuinely new class of tool appears, what is most durable to learn about it?",
          choices: [
            "Its command flags and configuration file format",
            "Its current performance numbers versus the incumbent",
            "The mechanism it relies on and the failure modes that mechanism implies",
            "The list of companies that have publicly adopted it"
          ],
          answer: 2,
          explain: "Flags, benchmarks, and logos all expire. Mechanism transfers: if you know it is a log-structured store or a consensus protocol, you already know most of its behavior under stress."
        },
        {
          type: "order",
          q: "Order a low-cost evaluation of a new tool.",
          items: [
            "Name the constraint it claims to remove",
            "Check whether you actually have that constraint",
            "Run it on one real, bounded piece of your own work",
            "Decide: adopt, revisit later, or ignore"
          ],
          explain: "Checking whether the constraint applies to you is the step people skip, and it is the one that eliminates most candidates before any setup cost."
        },
        {
          type: "match",
          q: "Match each idea to its meaning.",
          pairs: [
            ["Hype cycle", "Attention to a technology peaking before its practical capability does"],
            ["Lindy heuristic", "Betting that ideas which have already lasted a long time will last longer"],
            ["Opportunity cost", "The work you did not do because you evaluated this instead"]
          ],
          explain: "The Lindy heuristic, popularized by Nassim Taleb, is a rule of thumb rather than a law, but it is a reasonable prior for non-perishable ideas like algorithms and protocols."
        },
        {
          type: "truefalse",
          q: "Fundamentals such as concurrency, consistency, caching, and failure modes change far more slowly than the tools that implement them.",
          answer: true,
          explain: "The same handful of problems keeps reappearing in new packaging. Investing in the fundamentals is why an engineer can pick up an unfamiliar system quickly."
        }
      ]
    }
  ]
});
