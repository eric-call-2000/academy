window.ACADEMY.addUnit("sysdesign", {
  id: "unit-23",
  title: "Multi-Agent Orchestration",
  color: "#eab308",
  icon: "\u{1F578}\u{FE0F}",
  description: "When one context is not enough, and how to structure many without burning the budget.",
  lessons: [
    {
      id: "l177",
      title: "When one agent is not enough",
      intro: "The conditions under which splitting work across agents actually pays, and when it just adds overhead.",
      questions: [
        {
          type: "mcq",
          q: "Which workload is the strongest candidate for splitting across multiple agents rather than running in a single context?",
          choices: [
            "A tightly coupled refactor where every edit depends on the previous edit",
            "A single function that needs to be rewritten for clarity",
            "Auditing 40 independent files for one specific class of defect",
            "A three-line config change with a known correct value"
          ],
          answer: 2,
          explain: "Multi-agent structure pays when the work decomposes into independent pieces whose intermediate detail does not need to be shared. Tightly coupled sequential edits lose more to handoff than they gain from parallelism."
        },
        {
          type: "truefalse",
          q: "Adding more agents to a task reliably improves output quality even when the task fits comfortably in one context window.",
          answer: false,
          explain: "If the task fits in one context, orchestration adds handoff loss, coordination cost, and token spend without buying anything. Multi-agent structure is a response to a constraint, not a quality upgrade by default."
        },
        {
          type: "mcq",
          q: "What is the primary resource that multi-agent decomposition buys you?",
          choices: [
            "Fresh context budget per subtask, so no single agent has to hold everything",
            "Guaranteed determinism, since each agent sees a smaller input",
            "Lower total token consumption than a single-agent run",
            "Elimination of hallucination, since agents cross-check by construction"
          ],
          answer: 0,
          explain: "Each subagent gets its own window, so the total working set can exceed one context. Total token spend usually goes UP, not down; you are trading tokens for capacity and parallelism."
        },
        {
          type: "fill",
          q: "Work that decomposes into pieces which do not need to see each other's intermediate detail is described as ____ across items.",
          answer: "independent",
          accept: ["independent", "independence", "parallelizable", "decoupled"],
          explain: "Independence across items is the precondition for fan-out. When items must observe each other mid-flight, you are looking at a coordination problem instead."
        },
        {
          type: "match",
          q: "Match each orchestration signal to what it indicates.",
          pairs: [
            ["Subtasks share no intermediate state", "Good fan-out candidate"],
            ["Each step consumes the previous step's exact output", "Keep it in one sequential context"],
            ["Total input exceeds one context window", "Decomposition is forced, not optional"]
          ],
          explain: "The decision is driven by data dependencies and window capacity, not by how impressive the architecture looks."
        },
        {
          type: "mcq",
          q: "An orchestrator delegates a task, and the subagent returns a 40-page dump of everything it read. What went wrong?",
          choices: [
            "The subagent used too few tokens to do the job properly",
            "The subagent should have been given a larger context window",
            "The orchestrator should have run the subtask itself instead",
            "The subagent returned raw context instead of a compressed result"
          ],
          answer: 3,
          explain: "The point of delegation is that the subagent absorbs the raw material and returns a distilled finding. Passing raw context back up defeats the purpose and refills the orchestrator's window."
        },
        {
          type: "truefalse",
          q: "Multi-agent orchestration generally increases total token spend compared with a single-agent run on the same task.",
          answer: true,
          explain: "Every subagent pays for its own system prompt, instructions, and tool results. You accept higher spend in exchange for capacity and wall-clock parallelism."
        }
      ]
    },
    {
      id: "l178",
      title: "Fan-out and fan-in",
      intro: "Splitting one task into many parallel workers, and reassembling their results into one answer.",
      questions: [
        {
          type: "mcq",
          q: "In a fan-out / fan-in pattern, what is the fan-in step responsible for?",
          choices: [
            "Dispatching each worker with its own slice of the input",
            "Merging, deduplicating, and reconciling worker outputs into one result",
            "Setting the concurrency cap for the worker pool",
            "Retrying any worker that exceeded its token budget"
          ],
          answer: 1,
          explain: "Fan-out splits and dispatches; fan-in merges. The merge step is where duplicates get collapsed and contradictions between workers get resolved."
        },
        {
          type: "order",
          q: "Order the stages of a fan-out / fan-in run.",
          items: [
            "Partition the input into independent slices",
            "Dispatch workers in parallel, respecting the concurrency cap",
            "Collect each worker's compressed result",
            "Merge and deduplicate into a single answer"
          ],
          explain: "Partition, dispatch, collect, merge. Skipping the merge step leaves the caller with N overlapping reports instead of one answer."
        },
        {
          type: "truefalse",
          q: "Two workers reviewing overlapping slices of a codebase can report what is effectively the same defect, so fan-in needs a deduplication step.",
          answer: true,
          explain: "Overlap is common and often deliberate. Without dedup at fan-in, the same finding is counted several times and inflates apparent severity."
        },
        {
          type: "fill",
          q: "A fan-out stage that waits for every worker before proceeding has introduced a ____, so its duration is set by the slowest worker.",
          answer: "barrier",
          accept: ["barrier", "sync barrier", "synchronization barrier", "join"],
          explain: "Waiting on all of stage N is exactly a barrier, and a barrier costs you the max of the stage rather than the average."
        },
        {
          type: "mcq",
          q: "Fan-out over 12 items with a concurrency cap of 4 means the run behaves how?",
          choices: [
            "All 12 start at once and the excess 8 fail fast",
            "The cap is advisory, so all 12 proceed at reduced throughput",
            "The work proceeds in roughly three waves of 4, each wave paced by its slowest item",
            "Items 5 through 12 are silently dropped from the batch"
          ],
          answer: 2,
          explain: "A concurrency cap serializes the excess into waves. Total wall clock is roughly the number of waves times the slowest item per wave."
        },
        {
          type: "mcq",
          q: "Which fan-in design best protects against one bad worker poisoning the final answer?",
          choices: [
            "Have the merger accept every claim and let the caller filter",
            "Have the merger require each claim to carry evidence it can check",
            "Increase the number of workers until majority vote resolves it",
            "Truncate every worker report to the same fixed length"
          ],
          answer: 1,
          explain: "Evidence-carrying claims let the merger verify rather than trust. Majority voting only helps when errors are independent, which correlated prompts rarely are."
        },
        {
          type: "truefalse",
          q: "Fan-out is only worthwhile if the workers can run concurrently; running the same partition sequentially gains nothing.",
          answer: false,
          explain: "Even serialized, fan-out gives each slice a fresh, uncluttered context, which improves quality on long inputs. Concurrency is a second benefit, not the only one."
        }
      ]
    },
    {
      id: "l179",
      title: "Pipelines vs barriers (and the cost of synchronizing)",
      intro: "Why waiting for a whole stage to finish is usually the expensive choice.",
      questions: [
        {
          type: "mcq",
          q: "A barrier between stage N and stage N+1 is justified when:",
          choices: [
            "The stages use different models",
            "The next stage genuinely needs cross-item context, such as dedup across the full set",
            "You want progress reporting to be easier to display",
            "Each item's stage-2 work depends only on that same item's stage-1 output"
          ],
          answer: 1,
          explain: "A barrier earns its cost only when the next stage needs to see the whole set at once: full-set dedup, an early exit decision, or comparison between findings."
        },
        {
          type: "truefalse",
          q: "A pipeline finishes in the time of the slowest single chain, while a barriered design finishes in the sum of the slowest item per stage.",
          answer: true,
          explain: "That difference is the whole cost of synchronizing. Barriers make you pay the worst case at every stage instead of once."
        },
        {
          type: "fill",
          q: "In a ____, each item flows through all stages independently rather than waiting for its peers.",
          answer: "pipeline",
          accept: ["pipeline", "pipelined design", "pipelining"],
          explain: "Pipelining removes the per-stage wait, so a slow item delays only itself instead of the entire cohort."
        },
        {
          type: "mcq",
          q: "Three stages, each with items ranging 1 to 10 minutes. Which statement is correct?",
          choices: [
            "A barriered run can approach 30 minutes while a pipeline approaches the slowest single chain",
            "A pipeline is slower because items no longer share warm context",
            "Both finish at the same time since the total work is identical",
            "A barriered run is faster because stages start with complete information"
          ],
          answer: 0,
          explain: "Barriers add up the per-stage maxima: 10 + 10 + 10. A pipeline is bounded by whichever single item's own three-stage chain is longest."
        },
        {
          type: "mcq",
          q: "Which requirement genuinely forces a barrier?",
          choices: [
            "Each summary must be written in the same tone",
            "Stage 2 must abort the whole run if fewer than half of stage 1 found anything",
            "Stage 2 needs the file path produced by stage 1 for that item",
            "Results must be presented to the user in the original input order"
          ],
          answer: 1,
          explain: "An early-exit decision over the full set cannot be made until the full set exists. Ordering the output is a presentation concern and can be handled after the fact."
        },
        {
          type: "match",
          q: "Match each structure to its defining property.",
          pairs: [
            ["Barrier", "Stage N+1 cannot start until all of stage N is done"],
            ["Pipeline", "Each item traverses every stage on its own schedule"],
            ["Concurrency cap", "Upper bound on how many workers run at once"]
          ],
          explain: "These are three separate knobs. You can pipeline and still be capped, or barrier with no cap at all."
        },
        {
          type: "truefalse",
          q: "If stage 2 for an item needs only that item's own stage 1 output, a barrier before stage 2 is pure overhead.",
          answer: true,
          explain: "With no cross-item dependency there is nothing to synchronize on, so the wait buys nothing and costs the stage maximum."
        }
      ]
    },
    {
      id: "l180",
      title: "Judge and verifier agents",
      intro: "Using a separate agent to check work, and the failure modes of doing that naively.",
      questions: [
        {
          type: "mcq",
          q: "Why is a separate verifier agent often more effective than asking the original agent to double-check itself?",
          choices: [
            "Verifiers are given more capable models by convention",
            "Self-checking is impossible because the model cannot re-read its output",
            "The original agent is anchored on its own reasoning and tends to confirm it",
            "A second pass by the same agent always exceeds the token budget"
          ],
          answer: 2,
          explain: "An agent that produced an answer carries that reasoning in context and is biased toward defending it. A verifier starting fresh evaluates the artifact rather than the argument."
        },
        {
          type: "truefalse",
          q: "Running the same skeptical verifier prompt three times catches meaningfully more issues than running three verifiers with different lenses.",
          answer: false,
          explain: "Identical verifiers make correlated errors and miss the same things three times. Different lenses, such as correctness, security, and reproducibility, cover disjoint failure classes."
        },
        {
          type: "fill",
          q: "A verifier that must cite the specific line or command supporting its objection is producing an ____-carrying finding.",
          answer: "evidence",
          accept: ["evidence", "evidence-carrying", "proof"],
          explain: "Requiring evidence converts a judge's opinion into something the merger can independently confirm, which cuts down on confident but unfounded objections."
        },
        {
          type: "mcq",
          q: "A judge scores 50 candidate answers on a 1-to-10 scale and clusters everything between 7 and 8. What is the practical fix?",
          choices: [
            "Ask for pairwise or rubric-anchored comparisons instead of a free numeric score",
            "Raise the temperature so the judge produces more varied numbers",
            "Average three runs of the same scoring prompt for stability",
            "Widen the scale to 1 to 100 to increase resolution"
          ],
          answer: 0,
          explain: "LLM judges are far better at relative comparison than absolute calibration. Pairwise judgments or explicit rubric anchors give discriminating signal where a bare scale does not."
        },
        {
          type: "match",
          q: "Match each verifier lens to what it is looking for.",
          pairs: [
            ["Correctness", "Does the output actually do what was asked"],
            ["Security", "Does it introduce an exploitable weakness"],
            ["Reproducibility", "Can someone else re-run it and get the same result"]
          ],
          explain: "Distinct lenses is the point: each one searches a different part of the failure space, so their findings barely overlap."
        },
        {
          type: "truefalse",
          q: "A verifier that only ever returns approval is providing no signal, even if the work under review is genuinely good.",
          answer: true,
          explain: "A check that cannot fail carries no information. Validate a verifier by feeding it known-bad input and confirming it rejects."
        },
        {
          type: "mcq",
          q: "Which is the most serious risk of a verifier whose rejection criteria are vague?",
          choices: [
            "It slows the pipeline by a fixed constant per item",
            "It consumes context that the producer agent needed",
            "It generates false positives that erode trust and get the gate disabled",
            "It requires a barrier before the merge stage"
          ],
          answer: 2,
          explain: "A gate that fires on correct work trains everyone to ignore or remove it, which is worse than having no gate at all. Precision matters more than recall for automated blockers."
        }
      ]
    },
    {
      id: "l181",
      title: "Perspective diversity: N identical agents are not N useful agents",
      intro: "Why redundancy catches less than diversity, and how to build genuine variation.",
      questions: [
        {
          type: "truefalse",
          q: "Redundancy catches less than diversity: five identical reviewers overlap heavily, while five differently-framed reviewers cover more ground.",
          answer: true,
          explain: "Identical prompts produce correlated blind spots. Changing the lens changes what the agent is even looking for, which is what expands coverage."
        },
        {
          type: "mcq",
          q: "Which change actually creates perspective diversity between two review agents?",
          choices: [
            "Giving one a different random seed and a slightly higher temperature",
            "Assigning one a threat-model brief and the other a maintainability brief",
            "Asking one to be more thorough than the other",
            "Running one before the other so it sees fewer files"
          ],
          answer: 1,
          explain: "Diversity comes from different objectives, evidence, or role framing. Sampling noise varies wording, not what the agent attends to."
        },
        {
          type: "fill",
          q: "When several agents share a prompt and make the same mistake together, their errors are said to be ____ rather than independent.",
          answer: "correlated",
          accept: ["correlated", "correlated errors", "dependent"],
          explain: "Voting and ensembling only reduce error when errors are independent. Shared prompts and shared context break that assumption."
        },
        {
          type: "mcq",
          q: "You want three verifiers on a data-migration script. The best assignment of lenses is:",
          choices: [
            "Correctness of the transform, rollback safety, and reproducibility of the run",
            "Style, formatting, and naming conventions",
            "Three passes for correctness at increasing levels of strictness",
            "One reviewer per third of the file, same criteria for each"
          ],
          answer: 0,
          explain: "Those three lenses target genuinely different failure modes of a migration. Splitting by file region or strictness leaves whole categories, such as rollback, unexamined."
        },
        {
          type: "match",
          q: "Match each diversity mechanism to what it varies.",
          pairs: [
            ["Role framing", "What the agent believes its job is"],
            ["Evidence partitioning", "Which inputs the agent is allowed to see"],
            ["Temperature change", "Only surface wording of the same reasoning"]
          ],
          explain: "The first two change the search; the third mostly changes the phrasing. Only the first two reliably expand coverage."
        },
        {
          type: "truefalse",
          q: "If three diverse agents independently flag the same issue, that agreement is stronger evidence than three identical agents agreeing.",
          answer: true,
          explain: "Agreement is informative only in proportion to how independently it was reached. Diverse framings converging on one finding is a real signal."
        },
        {
          type: "mcq",
          q: "What is the main cost of pushing perspective diversity too far?",
          choices: [
            "The agents begin sharing context and lose independence",
            "Merging becomes impossible because outputs vary in format",
            "Lenses drift into areas irrelevant to the task, adding noise to triage",
            "Concurrency caps stop applying to heterogeneous workers"
          ],
          answer: 2,
          explain: "Diversity is only useful within the space of plausible failures. A lens with no bearing on the task returns findings nobody will act on."
        }
      ]
    },
    {
      id: "l182",
      title: "Context isolation and clean handoff",
      intro: "What each agent should and should not see, and what a good handoff payload contains.",
      questions: [
        {
          type: "mcq",
          q: "What should a subagent return to its orchestrator?",
          choices: [
            "Its full transcript so the orchestrator can audit the reasoning",
            "A compressed result plus the pointers needed to act on it",
            "Only a pass or fail verdict, to keep the payload minimal",
            "The raw tool output it collected, unfiltered"
          ],
          answer: 1,
          explain: "The handoff should be small enough to keep the orchestrator's window clean and specific enough to be actionable, which usually means findings plus file paths or identifiers."
        },
        {
          type: "truefalse",
          q: "Context isolation means a subagent should be given exactly the information it needs and nothing more.",
          answer: true,
          explain: "Extra context costs tokens and, worse, biases the subagent toward the orchestrator's existing hypothesis instead of an independent look."
        },
        {
          type: "fill",
          q: "Passing paths and identifiers instead of full file contents is a handoff by ____ rather than by value.",
          answer: "reference",
          accept: ["reference", "pointer", "by reference"],
          explain: "Handoff by reference keeps payloads small and lets the receiving agent fetch only what it actually needs."
        },
        {
          type: "mcq",
          q: "A subagent is told the orchestrator's current suspicion before investigating. What is the risk?",
          choices: [
            "It will exceed its token budget confirming the suspicion",
            "It cannot use tools once given a hypothesis",
            "It anchors on that hypothesis and stops searching elsewhere",
            "Its output can no longer be deduplicated at fan-in"
          ],
          answer: 2,
          explain: "Priming a subagent with a conclusion turns an independent investigation into a confirmation exercise, which is exactly the value you delegated for."
        },
        {
          type: "order",
          q: "Order the steps of a clean handoff between an orchestrator and a subagent.",
          items: [
            "Write the brief: the question, the scope boundary, and the required result shape",
            "Dispatch the subagent with that brief and nothing else",
            "Receive a compressed result plus the pointers needed to act on it",
            "Fold that result into the orchestrator's working state"
          ],
          explain: "The brief is fixed before dispatch, the subagent works in isolation, and only a compressed result comes back. Returning a raw transcript instead refills the orchestrator's window and defeats the delegation."
        },
        {
          type: "truefalse",
          q: "Relative file paths are a safe handoff format because every agent shares the orchestrator's working directory.",
          answer: false,
          explain: "Subagents can have their own working directory, and it may reset between calls. Absolute paths remove the ambiguity."
        },
        {
          type: "mcq",
          q: "An orchestrator's window fills up halfway through a 20-item fan-out. The most direct structural fix is:",
          choices: [
            "Tighten the return contract so each subagent reports far less",
            "Increase the concurrency cap so the run ends sooner",
            "Move the merge step to the front of the pipeline",
            "Give each subagent a larger context window"
          ],
          answer: 0,
          explain: "The orchestrator's window is consumed by what comes back, so the return contract is the lever. Bigger subagent windows and higher caps do not shrink the payloads."
        }
      ]
    },
    {
      id: "l183",
      title: "Token budgets and concurrency limits",
      intro: "Treating tokens and parallel slots as finite resources you must plan around.",
      questions: [
        {
          type: "truefalse",
          q: "Concurrency caps are real limits, and exceeding them wastes the run rather than simply queueing it harmlessly.",
          answer: true,
          explain: "Past the cap you get rejections, retries, and partially completed work that has to be redone, so budget the fan-out width up front."
        },
        {
          type: "mcq",
          q: "Which cost grows fastest as you add subagents to a fan-out?",
          choices: [
            "The orchestrator's own system prompt",
            "The fixed per-agent overhead of instructions and tool schemas, paid N times",
            "The size of the final merged answer",
            "The wall-clock time of the slowest single item"
          ],
          answer: 1,
          explain: "Every agent re-pays for its system prompt, briefing, and tool definitions. That fixed overhead multiplied by N often dominates the useful work on small subtasks."
        },
        {
          type: "fill",
          q: "Splitting a task so finely that per-agent overhead exceeds the useful work is a failure of ____ granularity.",
          answer: "task",
          accept: ["task", "subtask", "decomposition"],
          explain: "There is a floor below which decomposition costs more than it saves. Batch trivial items together rather than giving each one its own agent."
        },
        {
          type: "mcq",
          q: "You have 60 items, a concurrency cap of 6, and each item takes about 2 minutes. Roughly how long does the fan-out take?",
          choices: [
            "About 2 minutes, since all items run in parallel",
            "About 20 minutes, roughly 10 waves of 6",
            "About 120 minutes, since the cap forces full serialization",
            "About 6 minutes, one wave per concurrent slot"
          ],
          answer: 1,
          explain: "60 items divided by 6 slots is 10 waves, and each wave costs roughly one item duration. This is a rule-of-thumb estimate that ignores variance within a wave."
        },
        {
          type: "mcq",
          q: "Which budgeting practice most reduces the chance of a run dying halfway through?",
          choices: [
            "Allocating a per-subagent cap and a hard stop for the run as a whole",
            "Running everything at maximum concurrency to finish before limits reset",
            "Disabling verifiers so fewer agents compete for the budget",
            "Retrying failed subagents immediately without backoff"
          ],
          answer: 0,
          explain: "Per-agent caps stop one runaway from consuming the whole allowance, and a global stop makes the failure a clean partial result rather than a mid-merge collapse."
        },
        {
          type: "match",
          q: "Match each limit to what it constrains.",
          pairs: [
            ["Context window", "How much a single agent can hold at once"],
            ["Concurrency cap", "How many agents may run simultaneously"],
            ["Token budget", "Total consumption allowed across the whole run"]
          ],
          explain: "These bind independently. You can be well under the token budget and still stall on the concurrency cap, or vice versa."
        },
        {
          type: "truefalse",
          q: "If a fan-out is aborted by a budget limit, partial results are worthless and the run should be restarted from scratch.",
          answer: false,
          explain: "Completed subagent results are usually still valid. Designing for resumability lets you merge what finished and re-dispatch only the gaps."
        }
      ]
    },
    {
      id: "l184",
      title: "Convergence: loop-until-dry without looping forever",
      intro: "Running iterative rounds until new findings stop appearing, and the bookkeeping that makes that terminate.",
      questions: [
        {
          type: "mcq",
          q: "In a loop-until-dry pattern, you must dedupe each round's candidates against:",
          choices: [
            "Everything seen in any prior round, including rejected items",
            "Only the items that survived prior rounds",
            "Only the items produced in the immediately preceding round",
            "Only the items the verifier explicitly approved"
          ],
          answer: 0,
          explain: "Dedupe against everything SEEN, not against what SURVIVED. Rejected items that are not remembered get regenerated every round and the loop never converges."
        },
        {
          type: "truefalse",
          q: "Deduping only against surviving items causes previously rejected candidates to reappear each round.",
          answer: true,
          explain: "A rejected item is absent from the survivor set, so it looks new next round, gets re-evaluated, gets rejected again, and the cycle repeats indefinitely."
        },
        {
          type: "fill",
          q: "The set of every candidate encountered so far, regardless of whether it was accepted, is the ____ set used for deduplication.",
          answer: "seen",
          accept: ["seen", "seen set", "visited"],
          explain: "Keeping a seen set separate from the survivor set is the single piece of bookkeeping that makes loop-until-dry terminate."
        },
        {
          type: "mcq",
          q: "What is the right termination condition for a loop-until-dry run?",
          choices: [
            "The verifier approves every candidate in a round",
            "A round produces no candidates the seen set does not already contain",
            "The token budget for the run is exhausted",
            "Two consecutive rounds produce the same number of candidates"
          ],
          answer: 1,
          explain: "Dryness means no NEW information, which is measured against the seen set. Equal counts across rounds can happen while the contents keep churning."
        },
        {
          type: "order",
          q: "Order one round of a convergent loop.",
          items: [
            "Generate candidates from the current frontier",
            "Filter out anything already in the seen set",
            "Add the remaining candidates to the seen set",
            "Evaluate the new candidates and stop if none remained"
          ],
          explain: "Recording into the seen set BEFORE evaluation is what guarantees a rejected item is never regenerated as new."
        },
        {
          type: "truefalse",
          q: "A maximum round count is unnecessary once the seen set is implemented correctly.",
          answer: false,
          explain: "A seen set stops exact repeats, but a generator can emit endless near-duplicates that hash differently. A hard round cap is the backstop against that."
        },
        {
          type: "mcq",
          q: "Two rounds return findings that are worded differently but describe the same defect. What does this reveal about the seen set?",
          choices: [
            "The seen set should be cleared between rounds to avoid stale entries",
            "The seen set is being applied after evaluation instead of before",
            "The seen set is too large and should be capped by recency",
            "Exact-text keys are too weak; it needs a semantic or location-based key"
          ],
          answer: 3,
          explain: "Dedup only works at the granularity of its key. Keying on a stable identity, such as file plus line plus defect class, catches rewordings that exact-text matching misses."
        }
      ]
    }
  ]
});
