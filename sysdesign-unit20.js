window.ACADEMY.addUnit("sysdesign", {
  id: "unit-20",
  title: "Spec-Driven Development",
  color: "#eab308",
  icon: "\u{1F4CB}",
  description: "The highest-leverage minute is the one before the agent starts.",
  lessons: [
    {
      id: "l153",
      title: "Why vague prompts produce plausible garbage",
      intro: "How underspecified requests get filled in with guesses that look correct.",
      questions: [
        {
          type: "mcq",
          q: "An engineer asks an agent to make the search endpoint faster and gets back a large diff that adds an in-memory cache. The result compiles and the tests pass, but it is wrong for the system. What was the root defect in the request?",
          choices: [
            "The request named no measurable target, so any change that plausibly relates to speed satisfies it",
            "The request was too short, and prompt length is what determines output quality",
            "The agent should have refused the task because performance work is inherently ambiguous",
            "The tests were inadequate, and no amount of specification would have changed the diff"
          ],
          answer: 0,
          explain: "Without a target such as p99 under 200ms at current traffic, there is no way to check the work. Any plausible-looking change passes."
        },
        {
          type: "truefalse",
          q: "A response can be internally consistent, well structured, and confidently written while still being wrong about what the requester actually needed.",
          answer: true,
          explain: "Fluency and correctness are separate properties. Vague inputs get filled in with assumptions that read smoothly but were never checked against reality."
        },
        {
          type: "fill",
          q: "When a request omits a constraint, the agent does not stop and wait - it fills the gap with an ____ that was never stated or verified.",
          answer: "assumption",
          accept: ["assumption", "assumptions", "an assumption", "guess", "guesses"],
          explain: "Silent gap-filling is the mechanism behind plausible garbage. The unstated assumption is invisible in the output until it breaks something."
        },
        {
          type: "mcq",
          q: "Which rewrite most reduces the space of wrong-but-plausible outputs?",
          choices: [
            "Add a new user profile feature that follows our normal patterns",
            "Add a user profile feature, and be careful to make it high quality and maintainable",
            "Add a user profile page similar to the ones you have seen in other codebases",
            "Add GET /users/:id returning id, displayName, avatarUrl; 404 on unknown id; covered by a route test"
          ],
          answer: 3,
          explain: "The fourth names inputs, outputs, an error case, and a check. The others leave the shape of a correct answer undetermined."
        },
        {
          type: "match",
          q: "Match each missing element of a request to the specific failure it invites.",
          pairs: [
            ["No stated output shape", "The agent invents a response format the callers do not expect"],
            ["No stated constraint", "The agent picks a dependency or pattern the project has banned"],
            ["No checkable criterion", "Nobody can tell whether the work is done or merely finished"]
          ],
          explain: "Each omission maps to a distinct failure mode, which is why specs enumerate inputs, outputs, constraints, and acceptance separately."
        },
        {
          type: "truefalse",
          q: "Adding more detail to a request always improves the result, so the safest habit is to write the longest possible prompt for every task.",
          answer: false,
          explain: "Detail helps only when it removes real ambiguity. Padding a trivial reversible task with detail costs more than the rework it prevents."
        },
        {
          type: "order",
          q: "Order the sequence by which an ambiguous request turns into wasted work.",
          items: [
            "The request omits a constraint the requester considers obvious",
            "The agent silently substitutes a reasonable-looking default",
            "The output passes review because nothing contradicts it on its face",
            "The wrong assumption surfaces later as a bug or a rewrite"
          ],
          explain: "The cost lands far from the cause. That delay is why the minute spent specifying beats the hour spent debugging."
        }
      ]
    },
    {
      id: "l154",
      title: "Anatomy of an executable spec",
      intro: "The four parts that make a spec something an agent can act on and verify.",
      questions: [
        {
          type: "mcq",
          q: "A spec is called executable when it contains which four elements?",
          choices: [
            "A user story, a mockup, an estimate, and an owner",
            "Inputs, outputs, constraints, and a checkable acceptance criterion",
            "A problem statement, a design doc, a diagram, and a rollout plan",
            "Background, motivation, alternatives considered, and a decision log"
          ],
          answer: 1,
          explain: "Those four are what let work be both performed and verified. The other lists are useful documents but do not by themselves make work checkable."
        },
        {
          type: "fill",
          q: "The element that distinguishes an executable spec from a well-written description is a ____ acceptance criterion - one whose satisfaction can be observed rather than argued.",
          answer: "checkable",
          accept: ["checkable", "verifiable", "testable", "observable", "measurable"],
          explain: "Inputs, outputs, and constraints describe the work. The checkable criterion is what closes the loop and ends the task."
        },
        {
          type: "match",
          q: "Match each spec element to the question it answers.",
          pairs: [
            ["Inputs", "What does this receive, and in what shape"],
            ["Constraints", "What is this forbidden from doing or depending on"],
            ["Acceptance criterion", "What observation proves the work is complete"]
          ],
          explain: "Naming the elements separately prevents the common failure of writing three paragraphs that all restate the output and never state the constraints."
        },
        {
          type: "truefalse",
          q: "A criterion of it should feel fast and be well tested is checkable, because a reviewer can form an opinion about it.",
          answer: false,
          explain: "A criterion is checkable only if two people running the same check reach the same verdict. Feel fast and well tested are opinions, not observations."
        },
        {
          type: "mcq",
          q: "Which acceptance criterion is checkable by the agent itself, without a human in the loop?",
          choices: [
            "The refactor should not surprise anyone on the team",
            "The new module should be idiomatic for this codebase",
            "npm run test:integration passes with the new parser enabled",
            "The change should be a clear improvement over the current design"
          ],
          answer: 2,
          explain: "A command with a pass or fail exit status can be run by the agent. The others require a human judgment call and cannot terminate the loop."
        },
        {
          type: "order",
          q: "Order these from least to most executable as a written request.",
          items: [
            "Improve error handling in the upload path",
            "Return a 413 when uploads exceed the size limit",
            "Return 413 with code UPLOAD_TOO_LARGE when body exceeds 10MB, verified by a request test"
          ],
          explain: "Each step adds one of the four elements. The last names the output shape, the constraint, and the check."
        },
        {
          type: "truefalse",
          q: "An executable spec can state a constraint negatively, such as do not add a new third-party dependency for this.",
          answer: true,
          explain: "Forbidden patterns are a legitimate and often the most valuable class of constraint, since they rule out whole families of plausible wrong answers."
        }
      ]
    },
    {
      id: "l155",
      title: "Acceptance criteria and definition of done",
      intro: "What it takes for a task to end on evidence rather than on a feeling.",
      questions: [
        {
          type: "mcq",
          q: "Why does a self-verifiable acceptance criterion matter more for agent work than for a human teammate?",
          choices: [
            "Agents write worse code, so they need stricter gates than humans do",
            "An agent that cannot check its own work either stops early or keeps going with no signal for when to stop",
            "Humans do not benefit from acceptance criteria, since they can ask questions in person",
            "Self-verification is only about reducing token cost, not about correctness"
          ],
          answer: 1,
          explain: "A task an agent can verify by itself is a task it can actually finish. Without a check, the stopping point is arbitrary."
        },
        {
          type: "fill",
          q: "A definition of done should be phrased so that it produces a pass or fail ____, not a discussion.",
          answer: "signal",
          accept: ["signal", "result", "verdict", "outcome", "answer"],
          explain: "The point of a done definition is to remove the negotiation at the end of the task by settling it at the start."
        },
        {
          type: "truefalse",
          q: "Because a green test suite is a checkable criterion, it is always a sufficient definition of done.",
          answer: false,
          explain: "Green tests prove the tests pass, not that the tests cover the requirement. If no test exercises the new behavior, the suite is checkable but not sufficient."
        },
        {
          type: "match",
          q: "Match each criterion style to its practical weakness or strength.",
          pairs: [
            ["Command exit status", "Fully self-checkable, but only covers what the command actually exercises"],
            ["Screenshot review by a human", "Catches visual issues, but blocks the loop until a person is available"],
            ["Adjective-based wording", "Cheap to write, but two reviewers can reach opposite verdicts"]
          ],
          explain: "Choosing a criterion style is a tradeoff between how self-checkable it is and how much of the real requirement it covers."
        },
        {
          type: "mcq",
          q: "A task says migrate the config loader to the new schema. Which addition best converts it into a done definition?",
          choices: [
            "And make sure it is backwards compatible with the old format",
            "And existing callers keep working, verified by the full suite passing plus a new test loading a legacy config file",
            "And do it carefully, since config bugs are hard to catch in review",
            "And document the change in the migration notes for the team"
          ],
          answer: 1,
          explain: "It names the behavior to preserve and the specific observation that proves it. The others state intent or process without a check."
        },
        {
          type: "order",
          q: "Order the steps of writing a criterion that an agent can close by itself.",
          items: [
            "State the observable behavior the change must produce",
            "Name the command or check that observes that behavior",
            "Confirm the check fails before the change and passes after"
          ],
          explain: "The last step is what proves the check actually measures the requirement rather than passing vacuously."
        },
        {
          type: "truefalse",
          q: "Acceptance criteria are most valuable written before the work starts, because after the fact they tend to be reverse-engineered from whatever was built.",
          answer: true,
          explain: "A criterion written after the diff describes the diff. Written first, it constrains the diff."
        }
      ]
    },
    {
      id: "l156",
      title: "Decomposing work into agent-sized tasks",
      intro: "How far to break work down, and what signals a piece is still too big.",
      questions: [
        {
          type: "mcq",
          q: "What is the stopping rule for decomposition?",
          choices: [
            "Split until every piece takes under an hour of wall-clock time",
            "Split until each piece has one clear owner-function and one observable result",
            "Split until every piece touches exactly one file",
            "Split until the number of pieces matches the number of available agents"
          ],
          answer: 1,
          explain: "Decompose until each piece has one clear owner-function and one observable result. Time, file count, and agent count are proxies that break down under load."
        },
        {
          type: "truefalse",
          q: "A task whose completion depends on a judgment call that only a human can make is a sign the task has not been decomposed far enough for autonomous execution.",
          answer: true,
          explain: "Either the judgment call gets pulled out into a separate human step, or it gets converted into a stated constraint. Leaving it embedded blocks self-verification."
        },
        {
          type: "fill",
          q: "A well-sized task has one clear owner-function and one ____ result, so its completion is a fact rather than an opinion.",
          answer: "observable",
          accept: ["observable", "checkable", "verifiable", "measurable", "testable"],
          explain: "One function and one observation is the unit that fits an execute-then-verify loop cleanly."
        },
        {
          type: "match",
          q: "Match each symptom to what it tells you about task size.",
          pairs: [
            ["The acceptance criterion needs the word and three times", "The task is really several tasks fused together"],
            ["The task cannot start until a design question is settled", "A decision step is hiding inside an implementation task"],
            ["Two tasks both need to edit the same function body", "The seam between the tasks was drawn in the wrong place"]
          ],
          explain: "Each symptom points at a different repair: split, extract the decision, or redraw the boundary."
        },
        {
          type: "mcq",
          q: "You split a feature into six tasks, but four of them cannot be checked until all six land. What went wrong?",
          choices: [
            "Nothing - partial work is inherently unverifiable and this is expected",
            "The tasks were split by file rather than by observable result, so most pieces produce no checkable outcome alone",
            "There were too few tasks, and splitting further would restore independent verification",
            "The tasks needed a shared branch, which would have made them checkable together"
          ],
          answer: 1,
          explain: "Splitting along file boundaries is convenient but produces fragments. Splitting along observable results keeps each piece independently checkable."
        },
        {
          type: "order",
          q: "Order the decomposition pass for a medium feature.",
          items: [
            "State the one observable outcome the whole feature must produce",
            "Identify the seams where a contract can be named between parts",
            "Split into pieces that each own one function and one result",
            "Give each piece its own acceptance check"
          ],
          explain: "Starting from the outcome and finding seams first keeps the split aligned to behavior instead of to the current file layout."
        },
        {
          type: "truefalse",
          q: "Smaller is always better, so the ideal decomposition breaks every feature into the largest possible number of one-line tasks.",
          answer: false,
          explain: "Past a point the coordination and context cost of each piece exceeds the work in it. The floor is one owner-function and one observable result, not one line."
        }
      ]
    },
    {
      id: "l157",
      title: "Interfaces first: contracts before implementation",
      intro: "Why the boundary gets written before either side of it.",
      questions: [
        {
          type: "mcq",
          q: "Two agents work in parallel on a producer and a consumer of the same data. What does defining the interface first actually buy you?",
          choices: [
            "It lets both sides be built against a fixed shape, so parallel work cannot diverge",
            "It removes the need for tests, since a typed contract cannot be violated",
            "It guarantees each side is individually correct against its own requirements",
            "It makes the implementations faster by removing serialization overhead"
          ],
          answer: 0,
          explain: "The contract is the shared fixed point. Without it, each side invents a shape and the mismatch is discovered at integration."
        },
        {
          type: "fill",
          q: "Defining the ____ first is what makes parallel work safe, because both sides are then implementing against the same fixed shape.",
          answer: "contract",
          accept: ["contract", "interface", "the contract", "the interface"],
          explain: "Contract-first ordering converts a coordination problem into two independent problems."
        },
        {
          type: "truefalse",
          q: "A contract is only useful when the two sides are built by different people or agents; for solo work it adds nothing.",
          answer: false,
          explain: "A contract also fixes the boundary against your own drift, and it is what lets each side be tested in isolation with a stub or fake."
        },
        {
          type: "order",
          q: "Order the contract-first workflow for a new service boundary.",
          items: [
            "Enumerate the request and response shapes, error cases, and invariants",
            "Publish the agreed contract in one place both sides read",
            "Build each side independently against the contract",
            "Integrate, with mismatches showing up as contract violations rather than surprises"
          ],
          explain: "Publishing the contract is the load-bearing step. An agreed but unwritten contract drifts as soon as either side hits a hard case."
        },
        {
          type: "match",
          q: "Match each part of a contract to what it prevents.",
          pairs: [
            ["Declared error cases", "One side inventing an error path the other never handles"],
            ["Declared field nullability", "A consumer crashing on a value the producer considered optional"],
            ["Declared ordering or idempotency guarantee", "A consumer assuming retries are safe when they are not"]
          ],
          explain: "The parts of a contract people forget to write are exactly the ones that cause integration bugs: errors, nullability, and delivery semantics."
        },
        {
          type: "mcq",
          q: "Midway through parallel work, one side discovers the agreed contract cannot express a required case. What is the correct move?",
          choices: [
            "Extend the shape locally and let the other side adapt when it notices",
            "Work around it inside the implementation so the contract does not have to change",
            "Change the contract explicitly, then notify and re-check both sides against the new version",
            "Freeze the contract permanently, since changing it defeats the purpose of contract-first"
          ],
          answer: 2,
          explain: "Contracts are meant to change, but visibly. The failure mode is a silent local extension, which reintroduces divergence."
        },
        {
          type: "truefalse",
          q: "A contract can be satisfied by a stub that returns fixed values, which is precisely why the consumer can be built and tested before the producer exists.",
          answer: true,
          explain: "Substitutability against the contract is what unblocks parallel work and isolates failures to one side."
        }
      ]
    },
    {
      id: "l158",
      title: "Repo conventions as durable context",
      intro: "Turning per-conversation reminders into project rules that survive.",
      questions: [
        {
          type: "mcq",
          q: "What makes a project instruction file different in kind from repeating a rule in each prompt?",
          choices: [
            "It is read faster, which lowers latency on every task",
            "It is durable context that survives the conversation and applies to work you did not personally start",
            "It cannot be overridden, so it is a stronger form of instruction than a prompt",
            "It replaces the need for acceptance criteria on tasks that touch the same files"
          ],
          answer: 1,
          explain: "Durability is the property that matters. A rule stated once in a chat dies with that chat; a rule in the repo applies to the next session and the next person."
        },
        {
          type: "fill",
          q: "Conventions, architecture rules, and forbidden patterns written into the repo are ____ context - they outlive any single conversation.",
          answer: "durable",
          accept: ["durable", "persistent", "lasting"],
          explain: "The distinction is between context you must restate each time and context the project carries on its own."
        },
        {
          type: "truefalse",
          q: "Forbidden patterns are among the highest-value entries in a conventions file, because they rule out plausible choices that the code itself does not visibly reject.",
          answer: true,
          explain: "A banned dependency or a deprecated helper looks perfectly reasonable from inside the code. Only a written rule makes the prohibition discoverable."
        },
        {
          type: "match",
          q: "Match each convention entry to why the code alone cannot convey it.",
          pairs: [
            ["Do not use the legacy date helper", "Both helpers still exist and compile, so the code shows no preference"],
            ["Migrations run before deploy, never after", "Ordering is a process fact, not something expressed in a source file"],
            ["This directory is generated, edit the source", "The generated file looks handwritten and invites direct edits"]
          ],
          explain: "Each is knowledge that lives outside the code, which is exactly the category a conventions file exists to carry."
        },
        {
          type: "mcq",
          q: "A conventions file has grown to cover every preference anyone has ever expressed. What is the predictable failure?",
          choices: [
            "It becomes too large to parse, causing a hard load error",
            "It makes the repo slower to clone and check out",
            "Load-bearing rules get diluted among trivia, so the ones that matter stop being followed",
            "It becomes legally binding on contributors, which creates review overhead"
          ],
          answer: 2,
          explain: "Signal density matters. A conventions file earns its place by containing rules whose violation would actually cause harm."
        },
        {
          type: "order",
          q: "Order the lifecycle of a rule that should become durable context.",
          items: [
            "A mistake is made because an unwritten expectation was violated",
            "The expectation is stated explicitly and the cause is recorded",
            "The rule is written into the repo conventions file",
            "Later work follows the rule without anyone restating it"
          ],
          explain: "The strongest conventions entries are the ones with a scar behind them, which is also why recording the cause keeps the rule from being deleted as noise."
        },
        {
          type: "truefalse",
          q: "Because conventions are durable, they never need review, and a stale rule is harmless as long as it is still written down.",
          answer: false,
          explain: "A stale rule actively misleads. Durable context has to be maintained, or it becomes a confident source of wrong instructions."
        }
      ]
    },
    {
      id: "l159",
      title: "Plan, then build",
      intro: "Separating the decision phase from the execution phase, and why the seam pays.",
      questions: [
        {
          type: "mcq",
          q: "What is the main benefit of reviewing a plan before any code is written?",
          choices: [
            "A plan is cheaper to reject than a diff, so wrong approaches are killed before the work exists",
            "A plan produces better code than an equivalent amount of implementation time",
            "It removes the need to review the resulting diff at all",
            "It guarantees the estimate will be accurate, which is what makes planning worthwhile"
          ],
          answer: 0,
          explain: "Rejecting a paragraph costs a minute. Rejecting a large diff costs the work plus the sunk-cost pressure to keep it."
        },
        {
          type: "truefalse",
          q: "Plan-then-build works partly because a plan makes the assumptions visible while they are still cheap to correct.",
          answer: true,
          explain: "The plan is where the silent gap-filling from lesson one becomes inspectable text."
        },
        {
          type: "fill",
          q: "The plan phase should end with a decision; the build phase should end with a passing ____.",
          answer: "check",
          accept: ["check", "test", "acceptance check", "criterion", "acceptance criterion"],
          explain: "Each phase has its own terminating condition. Blurring them is how work drifts without either being decided or being verified."
        },
        {
          type: "order",
          q: "Order the plan-then-build cycle.",
          items: [
            "Restate the goal and the constraints in your own words",
            "Propose an approach with the tradeoffs and the files it touches",
            "Get the approach accepted or corrected",
            "Execute against the accepted approach and its acceptance check"
          ],
          explain: "The restatement step is a cheap misunderstanding detector: if the goal comes back wrong, nothing downstream would have been right."
        },
        {
          type: "match",
          q: "Match each phase to the failure it is designed to catch.",
          pairs: [
            ["Plan review", "The approach is wrong for the system even if perfectly implemented"],
            ["Acceptance check", "The implementation does not produce the required behavior"],
            ["Diff review", "The behavior is right but the code introduces risk elsewhere"]
          ],
          explain: "The three gates catch different classes of error, which is why passing one does not excuse skipping the others."
        },
        {
          type: "mcq",
          q: "A plan is approved, and during execution the agent finds the approach cannot work. What is the disciplined response?",
          choices: [
            "Continue and note the deviation in the final summary once the work is done",
            "Silently choose a different approach, since the goal is unchanged",
            "Abandon the task, since the approved plan is no longer achievable",
            "Stop, report what broke the plan, and get a revised approach before continuing"
          ],
          answer: 3,
          explain: "A plan that is quietly abandoned mid-execution gives you the cost of planning with none of its benefit. The invalidating discovery is exactly what review exists to see."
        },
        {
          type: "truefalse",
          q: "Since planning is valuable, every task should get a written plan reviewed before execution.",
          answer: false,
          explain: "The plan should cost less than the rework it prevents. For a trivial reversible change, the planning overhead exceeds the risk."
        }
      ]
    },
    {
      id: "l160",
      title: "When to spec, and when to just do it",
      intro: "Judging when specification pays for itself and when it is pure overhead.",
      questions: [
        {
          type: "mcq",
          q: "What is the governing test for whether a piece of work deserves a spec?",
          choices: [
            "Whether the work touches production, since all production work needs a spec",
            "Whether the spec costs less than the rework it prevents",
            "Whether the work will take more than a day, since duration is the reliable signal",
            "Whether an agent rather than a human will do the work"
          ],
          answer: 1,
          explain: "The spec is an investment against rework. When the expected rework is near zero, the spec is pure overhead."
        },
        {
          type: "fill",
          q: "Two properties push work toward just doing it: the change is cheap to undo, meaning it is ____, and its blast radius is small.",
          answer: "reversible",
          accept: ["reversible", "revertable", "undoable"],
          explain: "Reversibility is the key variable. An easily reverted change lets you learn by doing at lower cost than by specifying."
        },
        {
          type: "truefalse",
          q: "Over-specifying trivial reversible work is a real failure mode, not merely a stylistic preference.",
          answer: true,
          explain: "It burns time, adds a document that will go stale, and trains people to skim specs because most of them did not matter."
        },
        {
          type: "match",
          q: "Match each situation to the right level of up-front specification.",
          pairs: [
            ["Renaming a local variable in one function", "Just do it - the change is trivial and instantly revertible"],
            ["A schema migration on a live table", "Full spec - the change is hard to undo and has wide blast radius"],
            ["Two agents building both sides of an API", "Contract first, then light specs per side"]
          ],
          explain: "The level of specification should track reversibility, blast radius, and how many parties must agree."
        },
        {
          type: "mcq",
          q: "Which factor most raises the value of writing a spec, holding task size constant?",
          choices: [
            "The task involves an unfamiliar library the author has not used before",
            "The task is being done late in the day when attention is low",
            "More than one party must build against the same decision",
            "The task will produce a large number of changed lines"
          ],
          answer: 2,
          explain: "Coordination is what a written artifact uniquely fixes. Unfamiliarity is real but is often better answered by a spike than a spec."
        },
        {
          type: "order",
          q: "Order these tasks from least to most deserving of an up-front spec.",
          items: [
            "Fixing a typo in a log message",
            "Adding a field to an internal helper used in one place",
            "Changing the shape of a response consumed by two clients",
            "Replacing the authentication flow across the whole app"
          ],
          explain: "Deservingness rises with irreversibility and with the number of parties who must agree on the same decision."
        },
        {
          type: "truefalse",
          q: "If you are unsure whether a task needs a spec, the safest default is always to write the full spec, since extra rigor cannot hurt.",
          answer: false,
          explain: "Extra rigor has a real cost and dilutes attention. A better default for genuine uncertainty is a two-line statement of the outcome and the check, then start."
        }
      ]
    }
  ]
});
