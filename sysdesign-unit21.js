window.ACADEMY.addUnit("sysdesign", {
  id: "unit-21",
  title: "Agentic Coding Workflows",
  color: "#eab308",
  icon: "\u{1F501}",
  description: "A loop with tools, running against a real repository.",
  lessons: [
    {
      id: "l161",
      title: "What makes something an agent: the loop and the tools",
      intro: "The minimal definition of an agent and what happens when a piece of it is missing.",
      questions: [
        {
          type: "mcq",
          q: "Which description best matches the working definition of an agent used in agentic coding?",
          choices: [
            "A model fine-tuned on a specific codebase so it recalls the APIs correctly",
            "A prompt template that chains several model calls with fixed, predetermined steps",
            "A model in a loop with tools and a termination condition",
            "A retrieval system that injects relevant source files into a single model call"
          ],
          answer: 2,
          explain: "The three parts are the loop, the tools, and a termination condition. Fine-tuning, fixed chains, and retrieval can all be present or absent without changing whether something is an agent."
        },
        {
          type: "truefalse",
          q: "A system that writes files but never checks whether its edits worked is, functionally, a text generator with file access rather than an agent.",
          answer: true,
          explain: "Without a verify step there is no feedback into the loop, so the system cannot correct itself. It only emits text that happens to land on disk."
        },
        {
          type: "fill",
          q: "An agent needs a ____ condition so the loop stops instead of spinning forever.",
          answer: "termination",
          accept: ["termination", "terminating", "stopping", "stop", "halt", "halting", "exit", "end", "ending"],
          explain: "Without an explicit stopping rule the loop either runs until it exhausts a budget or repeats the same failing action indefinitely."
        },
        {
          type: "order",
          q: "Order one iteration of a basic agent loop.",
          items: [
            "Model receives the goal and current observations",
            "Model chooses a tool call",
            "Harness executes the tool and returns the result",
            "Model decides whether the termination condition is met"
          ],
          explain: "The model never executes anything itself. The harness runs the tool and feeds the observation back, which is what closes the loop."
        },
        {
          type: "match",
          q: "Match each loop component to its job.",
          pairs: [
            ["Tools", "The only way the model can observe or change the outside world"],
            ["Loop", "Feeds each tool result back so the next step can be conditioned on it"],
            ["Termination condition", "Decides when the work is finished or must be abandoned"]
          ],
          explain: "Removing any one of the three degrades the system: no tools means no grounding, no loop means no correction, no termination means no stopping."
        },
        {
          type: "mcq",
          q: "An agent is given a goal but its only tool is a read-only file search. What is the honest limit of what it can do?",
          choices: [
            "It can still apply changes because writing is implied by the goal",
            "It can only investigate and report; any change must be made by something else",
            "It can write files as long as it asks for permission first",
            "It can modify files indirectly by describing the diff in its output"
          ],
          answer: 1,
          explain: "An agent's capability set is exactly its tool set. Describing a diff is output, not a mutation, unless some other actor applies it."
        },
        {
          type: "truefalse",
          q: "Adding more tools to an agent always improves its reliability on a task.",
          answer: false,
          explain: "Extra tools enlarge the decision space and consume context with their descriptions, which can raise the rate of wrong tool selection. Fit the tool set to the job."
        }
      ]
    },
    {
      id: "l162",
      title: "Tool use and function calling",
      intro: "How a model requests an action, and why tool schemas and results deserve real design effort.",
      questions: [
        {
          type: "mcq",
          q: "When a model makes a function call, what does it actually produce?",
          choices: [
            "A direct invocation of the function inside the model runtime",
            "A network request to the tool endpoint issued by the model",
            "A structured request naming a tool and its arguments, which the harness executes",
            "A compiled snippet that the harness links against the tool library"
          ],
          answer: 2,
          explain: "The model emits a structured call. Execution, authentication, and error handling all live in the surrounding harness, which is where permission checks belong."
        },
        {
          type: "fill",
          q: "A tool definition tells the model what the tool does and constrains its arguments through a ____ that describes the parameter shape.",
          answer: "schema",
          accept: ["schema", "json schema", "jsonschema"],
          explain: "The schema is both documentation and a validation contract, so malformed arguments can be rejected before anything executes."
        },
        {
          type: "truefalse",
          q: "A tool error message should be returned to the model as an observation rather than crashing the loop.",
          answer: true,
          explain: "Errors are information. A clear message such as a missing path or failed compile lets the model correct itself on the next iteration."
        },
        {
          type: "mcq",
          q: "A tool returns the entire raw build log, hundreds of thousands of characters, on every call. What is the most direct problem this creates?",
          choices: [
            "It consumes the context window, pushing out earlier constraints and instructions",
            "It makes the model unable to parse the tool schema on the next call",
            "It causes the harness to reject the tool result as malformed",
            "It prevents the loop from evaluating its termination condition at all"
          ],
          answer: 0,
          explain: "Tool results are context. Unbounded output is one of the fastest paths to context exhaustion, so tools should truncate, filter, or summarize."
        },
        {
          type: "match",
          q: "Match each tool design choice to the failure it prevents.",
          pairs: [
            ["Tight parameter schema", "Ambiguous or malformed arguments reaching execution"],
            ["Truncated or filtered output", "Context exhaustion from oversized results"],
            ["Descriptive error strings", "The model retrying the exact same failing call blindly"]
          ],
          explain: "Tool ergonomics are part of agent design. Most agent misbehavior traces back to tool interfaces rather than to the model."
        },
        {
          type: "order",
          q: "Order what happens for a single tool call.",
          items: [
            "Model emits a tool name plus arguments",
            "Harness validates the arguments against the schema",
            "Harness executes the tool with the agent's permissions",
            "Result is appended to the conversation as an observation"
          ],
          explain: "Validation and permission checks sit between the model's request and real effects, which is exactly where a guardrail can intervene."
        },
        {
          type: "mcq",
          q: "Why is a single overloaded do_everything tool usually worse than several narrow tools?",
          choices: [
            "Narrow tools let the model batch more calls into one turn",
            "Overloaded tools cannot be described with a schema at all",
            "Narrow tools are executed faster by the harness in every case",
            "An overloaded tool hides its real behavior behind a mode argument, so choices are harder to validate and to permission"
          ],
          answer: 3,
          explain: "Narrow tools make intent explicit in the tool name, which lets the harness apply different permission rules to read versus write versus destructive actions."
        }
      ]
    },
    {
      id: "l163",
      title: "The plan, act, verify loop",
      intro: "Why the verify step is the load-bearing one, and what a real verification signal looks like.",
      questions: [
        {
          type: "order",
          q: "Order the three phases of the core agentic coding loop.",
          items: ["Plan", "Act", "Verify"],
          explain: "Verify is the step that turns the sequence into a closed loop, because its result determines whether to stop or to re-plan."
        },
        {
          type: "mcq",
          q: "Which of these counts as a real verify step for a code change?",
          choices: [
            "The agent re-reads its own diff and states that it looks correct",
            "The agent runs the test suite and reads the actual exit status and output",
            "The agent explains the change in detail before moving on",
            "The agent confirms that the file was written to disk without error"
          ],
          answer: 1,
          explain: "Verification must come from outside the model. Self-review of a diff shares the same blind spots that produced the diff."
        },
        {
          type: "truefalse",
          q: "Self-assessment by the model is a weaker verification signal than an external check such as a compiler, test, or linter.",
          answer: true,
          explain: "External checks are independent of the model's reasoning, so they can catch errors the model is confident about."
        },
        {
          type: "fill",
          q: "Without a ____ step the agent cannot tell success from confident failure, so it is only generating text that lands on disk.",
          answer: "verify",
          accept: ["verify", "verification", "verifying", "validate", "validation", "check", "checking"],
          explain: "This is the defining gap. An agent that never checks its work has no mechanism for detecting or correcting its own errors."
        },
        {
          type: "mcq",
          q: "A repo has no tests and no type checker. What is the most useful thing to give the agent before starting a change?",
          choices: [
            "A longer system prompt describing the coding style in detail",
            "A larger context window so more of the repo fits at once",
            "Any executable check it can run, even a build command or a smoke script",
            "A stricter instruction to be careful and double check its work"
          ],
          answer: 2,
          explain: "The verify step needs a signal that comes from running something. A build or smoke script is a weak check, but a weak external check beats none."
        },
        {
          type: "match",
          q: "Match each loop phase to what it is responsible for producing.",
          pairs: [
            ["Plan", "A concrete sequence of steps and the check that will prove them done"],
            ["Act", "Tool calls that read or mutate the repository"],
            ["Verify", "An external signal that says whether the change actually worked"]
          ],
          explain: "A good plan names its own verification up front, so the agent does not invent a lenient check after the fact."
        },
        {
          type: "truefalse",
          q: "If verification fails, the correct behavior is to re-enter the plan phase rather than to keep patching blindly.",
          answer: true,
          explain: "A failed check is evidence the model of the problem was wrong. Repeated blind patching produces churn and often stacks new bugs on top of the old one."
        }
      ]
    },
    {
      id: "l164",
      title: "Read before write: grounding in the actual codebase",
      intro: "Why making the agent read the real file beats letting it recall an API from training.",
      questions: [
        {
          type: "mcq",
          q: "An agent needs to call an internal helper. Which approach is most reliable?",
          choices: [
            "Search the repo, read the helper's actual definition, then call it",
            "Recall the helper's signature from training on similar codebases",
            "Write the call and let the type checker reveal the correct signature",
            "Ask the user to paste the signature into the prompt every time"
          ],
          answer: 0,
          explain: "Grounding beats recall. Training data contains a plausible average of many codebases, not this repository's actual current signature."
        },
        {
          type: "fill",
          q: "Making the agent read the real source instead of recalling an API from training is called ____.",
          answer: "grounding",
          accept: ["grounding", "ground", "grounded"],
          explain: "Grounding replaces a probabilistic memory with an observation from the actual system under change."
        },
        {
          type: "truefalse",
          q: "A model's recall of a library API is guaranteed to be current for the version pinned in the repository.",
          answer: false,
          explain: "Recall reflects the training distribution, not the pinned version. The lockfile and the installed source are the authority."
        },
        {
          type: "mcq",
          q: "Which symptom most strongly suggests the agent is working from recall instead of the repo?",
          choices: [
            "It writes long explanations before making any edit",
            "It invents a plausible function name that does not exist anywhere in the codebase",
            "It reads more files than strictly necessary before editing",
            "It proposes two alternative approaches instead of one"
          ],
          answer: 1,
          explain: "Plausible-but-absent identifiers are the classic recall signature. Grounded work can only reference symbols it has actually observed."
        },
        {
          type: "order",
          q: "Order a grounded edit to an unfamiliar module.",
          items: [
            "Search for the symbol and its call sites",
            "Read the definition and the surrounding conventions",
            "Make the edit consistent with what was read",
            "Run the check that proves the edit is correct"
          ],
          explain: "Reading call sites first is what reveals the conventions, so the edit matches the codebase rather than a generic style."
        },
        {
          type: "match",
          q: "Match each source of truth to what it authoritatively answers.",
          pairs: [
            ["The installed dependency source", "The third-party library's real signatures at the version the lockfile pins"],
            ["Existing call sites in the repo", "The in-house argument patterns and naming this codebase already follows"],
            ["The test suite", "The behaviors pinned as executable contracts that a change must not regress"]
          ],
          explain: "Each answers a different question. Dependency source gives the API, call sites give the local convention, and only tests state a contract you can execute."
        },
        {
          type: "mcq",
          q: "Reading files costs context. When is it still worth reading before writing?",
          choices: [
            "Only when the file is small enough to read in full",
            "Only when the agent has no prior familiarity with the language",
            "Almost always for the specific symbols being changed, because a wrong edit costs more context than the read did",
            "Rarely, since a failed compile will surface the same information at lower cost"
          ],
          answer: 2,
          explain: "A wrong edit triggers a failed check, a debugging detour, and a rewrite. That whole detour usually costs far more context than the original read."
        }
      ]
    },
    {
      id: "l165",
      title: "Persistent memory and project context",
      intro: "What belongs in durable project context versus what should stay in the transient conversation.",
      questions: [
        {
          type: "mcq",
          q: "Which fact most deserves a place in a durable project context file rather than a single conversation?",
          choices: [
            "The stack trace from the test that failed this morning",
            "The name of the branch currently being worked on",
            "A stable rule such as which package manager the repo uses and which commands are forbidden",
            "The list of files read during the current task"
          ],
          answer: 2,
          explain: "Durable context should hold facts that stay true across sessions. Transient state belongs in the conversation, where it expires harmlessly."
        },
        {
          type: "truefalse",
          q: "A project context file is loaded into the model's context window, so its length competes directly with the actual work.",
          answer: true,
          explain: "Persistent context is not free storage. A bloated context file crowds out the code the agent needs to read."
        },
        {
          type: "fill",
          q: "Instructions that persist across sessions describe the project's ____ - conventions, commands, and hard rules the agent must not rediscover each time.",
          answer: "context",
          accept: ["context", "conventions", "standing context", "project context"],
          explain: "The purpose is to stop the agent from re-deriving stable facts, and re-deriving them wrong, at the start of every session."
        },
        {
          type: "match",
          q: "Match each memory layer to its correct lifetime.",
          pairs: [
            ["Conversation context", "Lives for the current session and is lost when it ends"],
            ["Project context file", "Committed to the repo and read at the start of every session"],
            ["The repository itself", "The ground truth that outlives both, and can be re-read on demand"]
          ],
          explain: "The repo is always the authority. Memory layers are caches over it, and like all caches they can go stale."
        },
        {
          type: "mcq",
          q: "A project context file says the API lives in src/api, but the code was moved to services/api last month. What happens?",
          choices: [
            "The agent detects the mismatch automatically and updates the file",
            "The agent ignores the file because the path does not resolve",
            "Nothing, because context files are only advisory hints",
            "The agent wastes turns looking in the wrong place and may trust the stale claim over what it observes"
          ],
          answer: 3,
          explain: "Stale persistent context is worse than no context, because it is stated with authority. Context files need maintenance like any other code."
        },
        {
          type: "truefalse",
          q: "The best project context entries are the ones written after something went wrong, recording the rule that would have prevented it.",
          answer: true,
          explain: "Rules earned from real failures are specific and load-bearing, unlike generic advice that the model already follows by default."
        },
        {
          type: "order",
          q: "Order these by how durable the information is, most durable first.",
          items: [
            "A hard rule such as never run a destructive migration command",
            "The build and test commands for the repo",
            "The current task's plan and open questions"
          ],
          explain: "Hard rules rarely change, commands change occasionally, and the current plan is dead as soon as the task ends."
        }
      ]
    },
    {
      id: "l166",
      title: "Guardrails, permissions, and blast radius",
      intro: "Designing so that a wrong agent action is cheap to undo.",
      questions: [
        {
          type: "fill",
          q: "Guardrails exist to limit ____ radius: how much damage a single wrong action can cause.",
          answer: "blast",
          accept: ["blast", "the blast"],
          explain: "The goal is not to make mistakes impossible, which is unachievable, but to make each mistake bounded and recoverable."
        },
        {
          type: "mcq",
          q: "Which set of controls most directly limits blast radius?",
          choices: [
            "Scoped permissions, confirmation on destructive commands, and working on a branch",
            "A longer system prompt, more examples, and a stricter tone",
            "A larger context window, more tools, and higher retry limits",
            "More detailed logging, longer timeouts, and a slower loop"
          ],
          answer: 0,
          explain: "Those three are structural: they constrain what can happen. Prompt wording only influences what the model intends to do."
        },
        {
          type: "truefalse",
          q: "Asking the agent in the prompt not to run destructive commands is equivalent to blocking them in the harness.",
          answer: false,
          explain: "A prompt is a request the model may fail to honor under pressure or confusion. A harness check is enforcement that does not depend on the model."
        },
        {
          type: "mcq",
          q: "Why is working on a branch a guardrail rather than just a workflow habit?",
          choices: [
            "It prevents the agent from reading files outside the branch",
            "It gives the agent a smaller diff and therefore less context to hold",
            "It makes the entire set of agent changes revertible in one step and keeps the mainline deployable",
            "It forces the agent to run tests before every commit"
          ],
          answer: 2,
          explain: "Recoverability is the point. A branch converts an unbounded mistake into a discardable one, and keeps the deployable line untouched."
        },
        {
          type: "match",
          q: "Match each guardrail to the specific risk it addresses.",
          pairs: [
            ["Scoped file permissions", "The agent editing code outside the area it was asked to touch"],
            ["Confirmation on destructive commands", "Irreversible loss such as deleted data or a force push"],
            ["Isolated branch or worktree", "Half-finished work contaminating the mainline"]
          ],
          explain: "Each control targets a different failure mode, which is why they are layered rather than substituted for one another."
        },
        {
          type: "order",
          q: "Order these actions from smallest to largest blast radius.",
          items: [
            "Reading a file",
            "Editing a file on a feature branch",
            "Committing and pushing to the mainline",
            "Running a destructive command against production data"
          ],
          explain: "Blast radius tracks reversibility. A read changes nothing, a branch edit is discardable, a push is public, and destroyed production data may be unrecoverable."
        },
        {
          type: "truefalse",
          q: "Content the agent reads from files, web pages, or tool output should be treated as data, not as instructions to follow.",
          answer: true,
          explain: "Otherwise text inside a fetched page or a dependency file can redirect the agent. Instructions come from the operator, not from observed content."
        }
      ]
    },
    {
      id: "l167",
      title: "Subagents and delegation",
      intro: "When spawning a fresh context is the right call, and when it just adds overhead.",
      questions: [
        {
          type: "mcq",
          q: "Which task is the best fit for delegation to a subagent?",
          choices: [
            "Applying a two-line fix in a file already open in the parent's context",
            "Searching many files to answer where authentication is enforced, where only the answer matters",
            "A change that must stay consistent with three decisions made earlier in the conversation",
            "A short edit that the user wants to review line by line as it happens"
          ],
          answer: 1,
          explain: "Delegate when the work is read-heavy and only the conclusion matters. The subagent absorbs the file reads and returns a small answer."
        },
        {
          type: "fill",
          q: "Delegating read-heavy exploration keeps the parent's ____ clean, since only the conclusion comes back.",
          answer: "context",
          accept: ["context", "context window", "window"],
          explain: "The subagent burns its own context on the search. The parent receives a summary instead of hundreds of file reads."
        },
        {
          type: "truefalse",
          q: "A subagent inherits the parent's full conversation history by default, so no briefing is needed.",
          answer: false,
          explain: "A subagent starts from the prompt it is given. Anything it needs, including paths and constraints, has to be stated explicitly."
        },
        {
          type: "mcq",
          q: "What is the main cost of delegation?",
          choices: [
            "The subagent cannot use tools, so it can only reason from its prompt",
            "Findings must be serialized into a summary, so nuance the parent might have needed can be lost",
            "Delegation permanently removes the delegated area from the parent's reach",
            "Subagent results cannot be verified by the parent under any circumstances"
          ],
          answer: 1,
          explain: "The narrow interface is exactly what saves context and exactly what loses detail. Brief the subagent on what to preserve in its report."
        },
        {
          type: "match",
          q: "Match each delegation decision to its reasoning.",
          pairs: [
            ["Delegate", "Read-heavy investigation where a short conclusion is the whole deliverable"],
            ["Do it inline", "Small edit that depends on constraints already established in this conversation"],
            ["Split into several subagents", "Independent questions with no shared state, answerable in parallel"]
          ],
          explain: "The test is whether the work needs conversation state. If it does not, it is a delegation candidate."
        },
        {
          type: "order",
          q: "Order a well-formed delegation.",
          items: [
            "Parent decides the question is read-heavy and self-contained",
            "Parent writes a standalone brief with paths and the required output shape",
            "Subagent explores with its own context and tools",
            "Parent receives the conclusion and continues its own loop"
          ],
          explain: "The brief is the load-bearing step. A vague brief produces a report the parent then has to re-investigate, defeating the purpose."
        },
        {
          type: "truefalse",
          q: "A subagent should be given the same permission scope as the parent regardless of its task.",
          answer: false,
          explain: "A subagent doing investigation only needs read access. Narrowing its permissions to its task shrinks the blast radius of a confused subagent."
        }
      ]
    },
    {
      id: "l168",
      title: "Diagnosing an agent that went sideways",
      intro: "Reading the failure signature to find which part of the loop broke.",
      questions: [
        {
          type: "mcq",
          q: "What is the most common silent failure mode in long agentic sessions?",
          choices: [
            "Tool schemas drifting out of sync with their implementations",
            "The model refusing to use tools and answering from memory instead",
            "Context exhaustion, where earlier constraints fall out and the agent starts contradicting them",
            "The termination condition firing too early and ending the task prematurely"
          ],
          answer: 2,
          explain: "It is silent because the agent stays fluent and confident. It simply no longer holds the constraint it agreed to twenty turns ago."
        },
        {
          type: "fill",
          q: "When an agent violates a rule it followed earlier in the same session, suspect context ____ before suspecting the model.",
          answer: "exhaustion",
          accept: ["exhaustion", "exhaustion or loss", "loss", "overflow"],
          explain: "The constraint is gone from the window, so from the model's point of view it was never stated. Restate it or restart with a tighter brief."
        },
        {
          type: "truefalse",
          q: "An agent that keeps re-editing the same file without the check ever passing is usually missing a real verification signal, or is misreading the one it has.",
          answer: true,
          explain: "Productive loops converge because each check narrows the problem. A non-converging loop means the feedback is absent, wrong, or being ignored."
        },
        {
          type: "match",
          q: "Match each failure signature to its most likely root cause.",
          pairs: [
            ["Invents identifiers that do not exist in the repo", "Working from recall instead of reading the actual source"],
            ["Contradicts a constraint it honored earlier in the session", "Context exhaustion pushed the constraint out of the window"],
            ["Declares the task done while the build is broken", "No real verify step, or a check that was never actually run"]
          ],
          explain: "Each signature points at a different broken part of the loop: grounding, memory, or verification."
        },
        {
          type: "mcq",
          q: "A long session has gone off the rails. What is usually the most effective recovery?",
          choices: [
            "Start fresh with a tight brief containing the current state and the surviving constraints",
            "Keep going and add stronger wording about following the original instructions",
            "Increase the retry limit so the agent can attempt more fixes",
            "Ask the agent to summarize everything it did and then continue in the same session"
          ],
          answer: 0,
          explain: "If the context is polluted or exhausted, adding more text to it makes the problem worse. A clean restart with a distilled brief is cheaper than nursing a broken session."
        },
        {
          type: "order",
          q: "Order the recovery steps after an agent produces a wrong change.",
          items: [
            "Discard or revert the change so the repo is back to a known state",
            "Identify which part of the loop broke: grounding, memory, or verification",
            "Repair that part, for example by supplying a real check or a tighter brief",
            "Re-run the task and read the external check to confirm it now passes"
          ],
          explain: "Get back to a known state first, then diagnose, then fix the loop rather than the symptom, and only an external check closes it out."
        },
        {
          type: "truefalse",
          q: "Confident, well-written agent output is reliable evidence that the underlying change is correct.",
          answer: false,
          explain: "Fluency and correctness are independent. Only an external check, run and read, is evidence."
        }
      ]
    }
  ]
});
