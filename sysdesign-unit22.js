window.ACADEMY.addUnit("sysdesign", {
  id: "unit-22",
  title: "Verification at AI Speed",
  color: "#eab308",
  icon: "\u{2705}",
  description: "Generation got cheap, so review became the bottleneck. This is the core unit of the track.",
  lessons: [
    {
      id: "l169",
      title: "The bottleneck moved from writing to reviewing",
      intro: "Why accelerating code production shifts the constraint onto the humans who must trust the result.",
      questions: [
        {
          type: "mcq",
          q: "A team adopts tooling that cuts the time to produce a change by roughly ten times, but every change still needs the same human review before merge. What does Amdahl's law predict about end-to-end throughput?",
          choices: [
            "Throughput rises by about ten times, because generation dominates total cycle time",
            "Throughput is unchanged, because speeding up a single stage never helps a pipeline",
            "Throughput rises only until review dominates total time, and is then bounded by the review stage",
            "Throughput falls, because faster generation always produces proportionally more defects"
          ],
          answer: 2,
          explain: "Amdahl's law says the speedup from accelerating one part of a process is bounded by the fraction of time spent everywhere else. As generation approaches zero cost, the unaccelerated review step sets the ceiling."
        },
        {
          type: "truefalse",
          q: "Cheaper generation increases the number of changes that need verifying, so the total verification burden on a team can grow even when no individual change is harder to review.",
          answer: true,
          explain: "Verification cost scales with volume as well as with difficulty. Removing the natural rate limit on production removes the rate limit on things that must be checked."
        },
        {
          type: "fill",
          q: "When one stage of a pipeline is accelerated, the ____ moves to whichever stage is now the slowest.",
          answer: "bottleneck",
          accept: ["bottleneck", "bottle neck", "constraint", "bottlenecks"],
          explain: "Optimizing a non-binding stage buys nothing. The useful question after any speedup is which stage now sets the pace."
        },
        {
          type: "mcq",
          q: "Which is the best reason review, rather than generation, is now the scarce resource on many teams?",
          choices: [
            "Reviewers are less skilled than they used to be, so each review takes longer",
            "Reading unfamiliar code closely enough to trust it is slow, and it does not get cheaper just because generation did",
            "Code review tooling has not improved since the pull request was invented",
            "Generated code is always longer, so review time scales with the size of the model used"
          ],
          answer: 1,
          explain: "Building justified confidence in code requires reconstructing its intent, its invariants, and its failure modes. That work is human-bound and did not get accelerated."
        },
        {
          type: "order",
          q: "Order these by how expensive the same defect typically is to remove, cheapest first.",
          items: [
            "Caught by a type checker while the author is still editing the file",
            "Caught by a test in continuous integration before merge",
            "Caught by a human reviewer reading the pull request",
            "Caught by a user in production"
          ],
          explain: "Cost is driven by elapsed time and by how many people have to reacquire context. The ordering is a rule of thumb, not a fixed multiplier, but the direction is reliable."
        },
        {
          type: "truefalse",
          q: "Because an assistant can also review code, the review bottleneck disappears entirely once a second model checks the first model's output.",
          answer: false,
          explain: "A second pass catches real defects and is worth running, but models trained on similar data share blind spots, so the failures are correlated. It reduces the human burden; it does not remove the need for a check you can actually trust."
        },
        {
          type: "match",
          q: "Match each cost in the lifecycle of a change to what it measures.",
          pairs: [
            ["Generation cost", "The effort to produce a candidate change in the first place"],
            ["Verification cost", "The effort to establish that a candidate change is actually correct"],
            ["Integration cost", "The effort to land a change alongside everyone else's concurrent work"]
          ],
          explain: "Only the first of these collapsed. Reasoning about the other two is what a modern engineering process is mostly spending its time on."
        }
      ]
    },
    {
      id: "l170",
      title: "Reading a diff critically",
      intro: "What a diff shows you, what it hides, and the order to read it in.",
      questions: [
        {
          type: "mcq",
          q: "What is the most important thing a unified diff does not show you?",
          choices: [
            "The names of the files that were touched by the change",
            "The hunk headers giving the line numbers where each change begins",
            "The exact text of every line that was added or removed",
            "The unchanged code whose behavior the change silently alters"
          ],
          answer: 3,
          explain: "A diff is a view of edited lines, not of changed behavior. The defect is often in code that was not touched at all but now runs under different assumptions."
        },
        {
          type: "truefalse",
          q: "A deleted line can be more dangerous than an added one, because removing a guard clause or a bounds check leaves no new code for the reviewer to scrutinize.",
          answer: true,
          explain: "Attention naturally follows added lines. Deletions of validation, locking, or error handling are the classic thing that slips through a fast review."
        },
        {
          type: "fill",
          q: "Reviewing only the changed lines misses ____ sites: the places elsewhere in the codebase that invoke the modified function under assumptions that may no longer hold.",
          answer: "call",
          accept: ["call", "caller", "callers", "call sites"],
          explain: "When a signature, a return convention, or an error behavior changes, correctness lives at the boundaries with existing code, which the diff does not display."
        },
        {
          type: "mcq",
          q: "A pull request renames a helper, reformats a file, and changes retry behavior, all in one commit. What is the main review hazard?",
          choices: [
            "The behavioral change is buried in mechanical noise, so it receives the same glance as the reformatting",
            "Renames confuse version control, so the history of that file is permanently lost",
            "Reformatting invalidates the test suite, so no continuous integration result can be trusted",
            "Mixed commits cannot be reverted by a version control system"
          ],
          answer: 0,
          explain: "Reviewer attention is the scarce input. Splitting mechanical changes from behavioral ones concentrates that attention on the small number of lines that can actually be wrong."
        },
        {
          type: "order",
          q: "Order these review passes over a nontrivial change, starting with the one that should come first.",
          items: [
            "Read the spec or the issue so you know what the change is supposed to do",
            "Read the tests to see what behavior is being claimed and pinned",
            "Read the implementation against that stated intent",
            "Read the surrounding code and call sites for invariants the change may break"
          ],
          explain: "Establishing intent before reading the implementation is what lets you notice a missing requirement. If the diff sets your expectations, you can only check the code against itself."
        },
        {
          type: "truefalse",
          q: "A large diff gets proportionally more scrutiny per line, because reviewers slow down as the change grows.",
          answer: false,
          explain: "Code review studies consistently find the opposite: defects found per line drop as review size grows, and quality falls off after a few hundred lines. Keeping changes small is a review technique, not just a style preference."
        },
        {
          type: "mcq",
          q: "Which question, asked while reading a diff, is most likely to surface a real defect?",
          choices: [
            "Does this follow the naming conventions used elsewhere in the module",
            "Would I personally have structured these functions the same way",
            "What input or ordering of events makes this code produce a wrong result",
            "Is this the shortest possible way to express the logic"
          ],
          answer: 2,
          explain: "Style questions have answers you can find by looking. Correctness questions require you to imagine an execution the author did not, which is the only part of review a tool cannot do for you."
        }
      ]
    },
    {
      id: "l171",
      title: "Tests as the executable contract",
      intro: "Why a test derived from the implementation proves almost nothing, and what makes one independent.",
      questions: [
        {
          type: "mcq",
          q: "Why is a test written by the same agent that wrote the implementation weaker evidence than it appears?",
          choices: [
            "Generated tests run slower, so teams tend to disable them in continuous integration",
            "The test is derived from the implementation, so a misreading of the spec is encoded identically in both and the test passes",
            "Test frameworks suppress failures for code written in the same session",
            "A test can only detect defects in code written in a different programming language"
          ],
          answer: 1,
          explain: "A test is only a check if it can disagree with the code. When both come from the same reading of the requirement, the test restates the bug instead of catching it."
        },
        {
          type: "truefalse",
          q: "Writing the test from the specification rather than from the implementation is what makes it an independent check.",
          answer: true,
          explain: "Independence comes from the second source of truth, not from who typed it. A test derived from the spec can fail; a test derived from the code is a description of the code."
        },
        {
          type: "fill",
          q: "Testing can show the presence of bugs, but never their ____.",
          answer: "absence",
          accept: ["absence", "nonexistence", "non-existence"],
          explain: "Dijkstra's formulation. A passing suite tells you the cases you thought of behave as expected, which is evidence, not proof."
        },
        {
          type: "mcq",
          q: "What does mutation testing measure?",
          choices: [
            "How much of the source code is executed at least once by the suite",
            "How long the suite takes to run relative to the size of the codebase",
            "How many assertions each test makes on average",
            "Whether the suite fails when small deliberate faults are injected into the code"
          ],
          answer: 3,
          explain: "Line coverage tells you code ran. Mutation testing asks whether the tests would notice if that code were wrong, which is the property you actually wanted."
        },
        {
          type: "truefalse",
          q: "One hundred percent line coverage means every behavior of the module has been verified.",
          answer: false,
          explain: "Coverage measures execution, not assertion. A test can run every line and assert nothing, and coverage says nothing about the inputs you never supplied."
        },
        {
          type: "match",
          q: "Match each kind of test to what it is for.",
          pairs: [
            ["Property-based test", "Generates many inputs and checks an invariant that must hold for all of them"],
            ["Characterization test", "Pins the current observable output so unintended changes to it show up as failures"],
            ["Regression test", "Encodes one specific defect that was fixed so it cannot silently return"]
          ],
          explain: "Property-based testing, popularized by QuickCheck from Claessen and Hughes, explores an input space no one would enumerate by hand, which is exactly where generated code tends to break."
        },
        {
          type: "order",
          q: "Order the steps for using tests as a real check on generated code.",
          items: [
            "Write down the behavior you require, including error cases, as a spec",
            "Derive the tests from that spec, before reading the implementation",
            "Run those tests against the generated implementation",
            "Investigate any test that passed on the first run for a reason you cannot explain"
          ],
          explain: "A test you have never seen fail has not been shown to be capable of failing. Confirming that a test can go red is part of trusting it when it goes green."
        }
      ]
    },
    {
      id: "l172",
      title: "How AI-written code fails: plausible, idiomatic, wrong",
      intro: "The characteristic failure profile, and where to point your attention first.",
      questions: [
        {
          type: "mcq",
          q: "What is the characteristic failure profile of AI-written code?",
          choices: [
            "It fails to compile, so the build catches the problem immediately",
            "It is written in an unusual style, so a reviewer notices something is off right away",
            "It compiles, reads idiomatically, passes the happy path, and is wrong at a boundary or on an error path",
            "It is correct in edge cases but reliably wrong in the common case"
          ],
          answer: 2,
          explain: "The failures that survive to review are the ones that look right. Anything that fails to parse or looks strange is filtered out long before a human sees it."
        },
        {
          type: "truefalse",
          q: "Idiomatic style is weak evidence of correctness, because resembling code that is usually right is not the same as being right for this specification.",
          answer: true,
          explain: "Fluency and correctness are separate properties. Generated code inherits the surface conventions of the corpus regardless of whether it satisfies your requirement."
        },
        {
          type: "fill",
          q: "The productive review question is not does this look right, it is what ____ breaks this.",
          answer: "input",
          accept: ["input", "inputs", "case", "cases", "edge case", "condition", "value", "scenario", "data"],
          explain: "The first question can only be answered by pattern matching, which is the same skill that produced the code. The second forces you to construct a concrete counterexample."
        },
        {
          type: "mcq",
          q: "Which part of a generated function deserves the first look?",
          choices: [
            "Boundaries and error paths: empty input, zero, off-by-one, timeouts, and what happens after a failed call",
            "Variable naming and comment wording, since these reveal how confident the generator was",
            "The happy path, since that is where the majority of production traffic goes",
            "Import ordering and formatting, since a mistake there indicates deeper problems"
          ],
          answer: 0,
          explain: "The happy path is the part most likely to be right, because it is the most represented case. Boundaries and error handling are inconsistently handled and are where the defect usually lives."
        },
        {
          type: "truefalse",
          q: "If generated code calls a library function by name with a specific signature, that function is guaranteed to exist with that signature.",
          answer: false,
          explain: "Plausible but nonexistent APIs, and real APIs with the wrong argument order or return type, are a well documented failure mode. Resolve every unfamiliar name against the version actually installed."
        },
        {
          type: "match",
          q: "Match each recurring generated-code defect to its description.",
          pairs: [
            ["Silent boundary error", "Correct for typical values and wrong on an empty collection or the first or last element"],
            ["Swallowed failure", "An error path that logs or returns a default instead of propagating the problem"],
            ["Stale assumption", "Code written against an interface or schema shape the project no longer uses"]
          ],
          explain: "All three compile and read naturally. None of them is visible from style, which is why review has to be behavioral rather than aesthetic."
        },
        {
          type: "mcq",
          q: "A generated retry loop wraps a network call and returns a default value if every attempt fails. Why is this suspicious even though it compiles and the tests pass?",
          choices: [
            "Retry loops cannot be tested, so any passing test must be incorrect",
            "It converts a failure into a plausible looking success, so callers cannot distinguish missing data from real data",
            "Network calls should never be retried, since the first attempt is authoritative",
            "Default values cannot be represented in strongly typed languages"
          ],
          answer: 1,
          explain: "The dangerous pattern is not the retry, it is the fallback that erases the error. Downstream code then makes decisions on a value that means nothing, and the incident surfaces far from its cause."
        }
      ]
    },
    {
      id: "l173",
      title: "Adversarial review - try to refute, not confirm",
      intro: "Treat the change as a hypothesis and attack it, instead of collecting reasons to believe it.",
      questions: [
        {
          type: "mcq",
          q: "What does confirmation bias look like in code review?",
          choices: [
            "Preferring code written in a language you already know well",
            "Trusting a change more after it has passed continuous integration",
            "Assuming a defect exists until the author proves otherwise",
            "Searching for evidence that the code works and stopping once you find some"
          ],
          answer: 3,
          explain: "Wason's experiments on hypothesis testing showed people reach for confirming cases by default. The informative move is to look for the case that would break the claim."
        },
        {
          type: "truefalse",
          q: "Popper's point about falsification applies to review: a claim earns confidence by surviving serious attempts to refute it, not by accumulating confirming examples.",
          answer: true,
          explain: "Confirming instances are cheap and nearly uninformative. A failed attempt at refutation is the only observation that actually raises your confidence."
        },
        {
          type: "fill",
          q: "An adversarial reviewer starts from the assumption that the change is ____ and goes looking for the input that proves it.",
          answer: "wrong",
          accept: ["wrong", "broken", "incorrect", "buggy", "flawed", "defective"],
          explain: "This is a stance, not a belief about the author. Starting from the negative hypothesis directs attention to counterexamples rather than to reassurance."
        },
        {
          type: "order",
          q: "Order the steps of an adversarial pass over a generated function.",
          items: [
            "State the contract the function is supposed to satisfy",
            "Enumerate the inputs and event orderings the contract does not obviously handle",
            "Construct one concrete case you believe will break it",
            "Run that case, and if it survives, record what you now know the code does handle"
          ],
          explain: "The final step is what converts a failed refutation into durable evidence, usually in the form of a test that stays in the suite."
        },
        {
          type: "mcq",
          q: "Which review comment is adversarial in the useful sense?",
          choices: [
            "This is not how I would have written it; consider extracting a helper function",
            "Looks good to me, the logic reads clearly and follows our conventions",
            "If two requests arrive between the read and the write, both observe the old value; what prevents the double spend",
            "Please add a comment above this block explaining what it does"
          ],
          answer: 2,
          explain: "It names a specific execution the author did not consider and demands an answer. The others are preferences or requests for documentation, neither of which can find a defect."
        },
        {
          type: "truefalse",
          q: "Asking the author, or the model, whether the code is correct is an effective independent check.",
          answer: false,
          explain: "It queries the same source of belief that produced the code, so you get another plausible answer rather than independent evidence. Independence comes from the spec, an executable check, or a genuinely separate observer."
        },
        {
          type: "mcq",
          q: "Why is the person who wrote the prompt often the worst reviewer of the result?",
          choices: [
            "They already believe the approach is right, so they read to confirm the intent they had rather than to find the behavior that is there",
            "They lack the domain knowledge to evaluate the change, because the model chose the approach",
            "Version control attributes the change to them, which invalidates the review",
            "They cannot run the test suite against code they did not type themselves"
          ],
          answer: 0,
          explain: "Having the intent in your head makes the code read as if it implements that intent. Reviewers without that prior are more likely to see what the code actually says."
        }
      ]
    },
    {
      id: "l174",
      title: "Types, linters, and static analysis as free verification",
      intro: "Checks that run without a human, what they genuinely prove, and where they stop.",
      questions: [
        {
          type: "mcq",
          q: "In what sense are types and linters free verification?",
          choices: [
            "They are open source, so there is no license cost to run them in continuous integration",
            "They re-run on every change without consuming human attention, so their marginal cost per check approaches zero",
            "They prove total correctness, which removes the need for tests",
            "They run once at project setup, so there is no ongoing maintenance"
          ],
          answer: 1,
          explain: "The scarce resource is reviewer attention. Any check that repeats forever without spending that resource is exactly what you want more of when change volume rises."
        },
        {
          type: "truefalse",
          q: "A type checker rules out a class of defects for all inputs, while a test rules out defects only for the inputs it actually runs.",
          answer: true,
          explain: "This universal quantification is what makes types qualitatively different from tests. It is also why they cannot express most interesting properties, which is what tests are for."
        },
        {
          type: "fill",
          q: "____ theorem says every nontrivial semantic property of programs is undecidable, which is why a static analyzer must either miss real bugs or report false ones.",
          answer: "Rice",
          accept: ["Rice", "Rice's", "Rices", "rice"],
          explain: "Soundness, meaning no missed bugs, and completeness, meaning no false alarms, cannot both hold in general. Every real tool picks a point on that tradeoff."
        },
        {
          type: "mcq",
          q: "Generated code silences a type error with an escape hatch such as an unchecked cast or a dynamic-any annotation. What has actually happened?",
          choices: [
            "The cast is now verified at runtime, which is a stronger guarantee than a static check",
            "Nothing changes, since casts are erased and have no effect on checking",
            "The entire module becomes untyped, so the checker stops running on that file",
            "The guarantee was removed exactly where the code was least understood, and the error will surface later at runtime"
          ],
          answer: 3,
          explain: "An escape hatch appears precisely where the generator could not satisfy the checker, which is the highest-suspicion line in the diff. Treat every one of them as a review flag."
        },
        {
          type: "match",
          q: "Match each static tool to what it actually does.",
          pairs: [
            ["Linter", "Flags style and suspicious patterns from the syntax tree, without reasoning about values across the program"],
            ["Type checker", "Rejects programs whose values cannot be shown to fit their declared shapes on every execution"],
            ["Taint analysis", "Tracks whether data from an untrusted source can reach a sensitive operation"]
          ],
          explain: "These are different levels of reasoning, not competing products. Knowing which one could have caught a defect tells you where to add the check."
        },
        {
          type: "truefalse",
          q: "If a static analyzer reports no findings, the code contains no vulnerabilities of the kinds it checks for.",
          answer: false,
          explain: "Most practical analyzers are deliberately unsound, trading missed detections for a tolerable false positive rate. No findings means nothing matched its patterns, not that nothing is there."
        },
        {
          type: "mcq",
          q: "What is the strongest argument for encoding an invariant in the type system instead of a comment or a runtime assert?",
          choices: [
            "Types execute faster than asserts, so the service uses less CPU",
            "Comments are stripped by the compiler, so they cannot be relied on at all",
            "A type is checked on every future change by everyone, including code that has not been written yet",
            "Runtime asserts are unavailable in most production languages"
          ],
          answer: 2,
          explain: "Comments and asserts protect the code you are looking at now. A type protects every call site that will ever exist, which is what you need when change volume is high."
        }
      ]
    },
    {
      id: "l175",
      title: "Security review of generated code",
      intro: "Known vulnerability classes reappear in generated code, and the worst ones are absences.",
      questions: [
        {
          type: "mcq",
          q: "Why does generated code commonly reintroduce well known vulnerability classes?",
          choices: [
            "Vulnerable patterns are abundant in the public code the model learned from, and at a glance they look exactly like the safe ones",
            "Models deliberately avoid security libraries because they add dependencies",
            "Security defects only appear in code that no human has ever reviewed",
            "Generated code always targets older language versions that lack the safe APIs"
          ],
          answer: 0,
          explain: "Training corpora contain decades of tutorials, snippets, and shipped code with injection, missing authorization, and unsafe deserialization in them. Plausibility is not safety."
        },
        {
          type: "truefalse",
          q: "A missing authorization check is hard to spot in a diff, because the defect is the absence of code rather than the presence of it.",
          answer: true,
          explain: "Review naturally examines lines that exist. Checking that required controls are present takes a checklist driven by the threat model, not a read of the diff."
        },
        {
          type: "fill",
          q: "Concatenating user input into a query string invites injection; the fix is a ____ query, which sends the code and the data to the database separately.",
          answer: "parameterized",
          accept: ["parameterized", "parametrized", "parameterised", "prepared"],
          explain: "Escaping is a patch on a broken boundary. Parameterized or prepared statements remove the boundary problem by never letting data be parsed as code."
        },
        {
          type: "mcq",
          q: "An endpoint reads a record id from the request, confirms the caller is logged in, loads that record, and returns it. What is the defect?",
          choices: [
            "It authenticates the caller, which is unnecessary on a read-only endpoint",
            "It should hash the id before using it in the lookup",
            "It authenticates but never authorizes, so any logged-in user can read any record by changing the id",
            "It should return a not-found status instead of a success status for records that exist"
          ],
          answer: 2,
          explain: "Authentication answers who you are; authorization answers whether you may act on this specific object. Missing object-level authorization, sometimes called an insecure direct object reference, is one of the most common real world flaws."
        },
        {
          type: "match",
          q: "Match each vulnerability class to its mechanism.",
          pairs: [
            ["Injection", "Untrusted input is interpreted as code by an interpreter such as SQL or a shell"],
            ["Unsafe deserialization", "Attacker controlled bytes are turned into live objects, letting the payload choose what runs"],
            ["Server side request forgery", "The service is tricked into making a network request to an address the attacker picked"]
          ],
          explain: "Each has a structural fix: parameterize, refuse to deserialize untrusted formats, and validate outbound destinations against an allow list."
        },
        {
          type: "truefalse",
          q: "Comparing a submitted API token against the stored one with the language's ordinary string equality operator is fine, provided the token is long and random.",
          answer: false,
          explain: "Typical equality returns as soon as bytes differ, which leaks the position of the first mismatch through timing. Secrets should be compared with a constant time function."
        },
        {
          type: "mcq",
          q: "Generated code pulls in a package you have never heard of to solve a small problem. What is the right first move?",
          choices: [
            "Pin the version and merge, since pinning removes supply chain risk",
            "Verify the package actually exists and is the one you intend, because an invented or look-alike name is an opening for an attacker",
            "Replace it with a shell call to a system binary, which has no supply chain",
            "Vendor the source into the repository, which removes the need to review it"
          ],
          answer: 1,
          explain: "Models sometimes cite package names that do not exist, and attackers can register those names, a variant of typosquatting. After confirming identity, review what the package does and how much it pulls in."
        }
      ]
    },
    {
      id: "l176",
      title: "Knowing when to throw it away and restart",
      intro: "Sunk cost is why bad generated code ships; the decision should be about remaining cost only.",
      questions: [
        {
          type: "mcq",
          q: "Why is sunk cost the main reason bad generated code gets shipped?",
          choices: [
            "Because effort already spent makes the remaining work objectively cheaper",
            "Because version control makes discarding a branch technically difficult",
            "Because reviewers are required to approve work that took a long time",
            "Because people weigh effort already spent, which cannot be recovered, instead of comparing what each option still costs from here"
          ],
          answer: 3,
          explain: "Arkes and Blumer documented how reliably people fail to ignore unrecoverable prior investment. The correct comparison is marginal: cost to finish patching versus cost to restart from a better spec."
        },
        {
          type: "truefalse",
          q: "When generation is cheap, restarting from a better specification is often cheaper than patching a bad implementation, because the expensive input was the specification rather than the typing.",
          answer: true,
          explain: "If producing a candidate is nearly free, the value you hold is the understanding you have gained, not the code on disk. Rewriting the prompt and regenerating can cost less than a long debugging session."
        },
        {
          type: "fill",
          q: "Only the ____ cost of each option should drive the choice between patching and restarting, because effort already spent is unrecoverable either way.",
          answer: "remaining",
          accept: ["remaining", "marginal", "future", "forward"],
          explain: "The past is identical under both options, so it cancels out of the comparison. Anything it changes about your decision is bias."
        },
        {
          type: "mcq",
          q: "Which signal most strongly suggests discarding a change rather than continuing to patch it?",
          choices: [
            "The diff is larger than you expected when you wrote the prompt",
            "The code depends on a library one release behind the rest of the repository",
            "Each fix reveals another defect, and you cannot state the invariant the code is supposed to maintain",
            "The formatting does not match the surrounding file and the linter complains"
          ],
          answer: 2,
          explain: "Inability to state the invariant means there is no design to repair, only symptoms to chase. That is the condition under which patching does not converge."
        },
        {
          type: "truefalse",
          q: "Brooks's advice to plan to throw one away means the first implementation must always be discarded, a position he never revisited.",
          answer: false,
          explain: "Fred Brooks wrote it in The Mythical Man-Month in 1975 and repudiated it in the anniversary edition, in a chapter titled 'Plan to Throw One Away: Is Now Wrong!', arguing instead for incremental development that grows a working system. Both readings share the real point: do not defend a design merely because it exists."
        },
        {
          type: "order",
          q: "Order the decision procedure for a generated change that is not converging.",
          items: [
            "Stop patching and write down the behavior you actually need, including error cases",
            "Estimate the remaining cost of fixing versus regenerating from that specification",
            "Take the cheaper path, ignoring the effort already spent on the current attempt",
            "Carry forward the tests and the specific failures you found, which are the durable output of the attempt"
          ],
          explain: "Writing the spec first is what makes the estimate possible and also what makes the regenerated attempt better than the one you are discarding."
        },
        {
          type: "match",
          q: "Match each term to its meaning in a patch-or-restart decision.",
          pairs: [
            ["Sunk cost", "Effort already spent that cannot be recovered and should not affect the choice"],
            ["Marginal cost", "The additional effort each remaining option would still require from this point"],
            ["Salvage value", "The part of a discarded attempt that remains useful, such as its tests and its findings"]
          ],
          explain: "Naming these separately is what makes the decision tractable. Most bad calls come from letting the first quantity stand in for the second."
        }
      ]
    }
  ]
});
