window.ACADEMY.addUnit("sysdesign", {
  id: "unit-24",
  title: "Designing AI Products",
  color: "#eab308",
  icon: "\u{1F9EA}",
  description: "Shipping a feature whose core component is non-deterministic.",
  lessons: [
    {
      id: "l185",
      title: "Non-determinism as a system property",
      intro: "How a probabilistic component changes what testing, contracts, and debugging mean.",
      questions: [
        {
          type: "mcq",
          q: "Why does a traditional unit test fit poorly around a model call?",
          choices: [
            "Model calls are too slow to run inside a test process",
            "The output is a sample from a distribution, so a single expected string is not the contract",
            "Test frameworks cannot serialize the JSON that models return",
            "Models require network access, which test runners always forbid"
          ],
          answer: 1,
          explain: "You cannot unit-test a distribution. The meaningful contract is a statistical property measured over a dataset, not one exact string."
        },
        {
          type: "truefalse",
          q: "Setting temperature to 0 makes a large model call fully deterministic across infrastructure, batching, and model updates.",
          answer: false,
          explain: "Temperature 0 reduces sampling variance but does not remove non-determinism from floating point ordering, batching, or a changed model version behind the same endpoint."
        },
        {
          type: "fill",
          q: "Instead of asserting one exact output, an AI feature is measured against a fixed dataset and tracked as a ____ over time.",
          answer: "score",
          accept: ["score", "scores", "metric", "metrics"],
          explain: "The unit of truth is an aggregate score on a fixed dataset, compared release to release, not a single pass or fail."
        },
        {
          type: "mcq",
          q: "A bug report says the assistant gave a wrong answer once and cannot be reproduced. What is the most useful engineering response?",
          choices: [
            "Close it as unreproducible, since single samples are meaningless",
            "Raise temperature so the failure appears more often and is easier to see",
            "Add the failing input to the eval dataset and measure how often the failure occurs",
            "Add a retry so the second sample overwrites the first output"
          ],
          answer: 2,
          explain: "A one-off failure becomes tractable when it is turned into a dataset row with a measurable failure rate rather than a yes or no reproduction."
        },
        {
          type: "match",
          q: "Match each property of a non-deterministic component to what it forces on the design.",
          pairs: [
            ["Variable output text", "Downstream code must validate structure, not assume it"],
            ["Variable latency per call", "Timeouts and user-facing progress must be explicit"],
            ["Silent model version change", "Evals must be re-run on a pinned dataset to detect drift"]
          ],
          explain: "Each source of variance maps to a concrete design obligation, which is why AI features need more defensive plumbing than deterministic ones."
        },
        {
          type: "truefalse",
          q: "A model that is correct 97 percent of the time can still be unshippable if the 3 percent of errors are irreversible.",
          answer: true,
          explain: "Expected accuracy is not the whole risk picture. The cost and reversibility of the error tail decide whether the feature can ship without a human check."
        },
        {
          type: "order",
          q: "Order the steps for making a flaky AI behavior something you can actually work on.",
          items: [
            "Capture the failing input and output in production logs",
            "Add it as a labeled row in a fixed eval dataset",
            "Measure the failure rate across repeated runs",
            "Change the prompt or system, then re-measure the same dataset"
          ],
          explain: "Turning anecdotes into measured rates is what converts an unreproducible complaint into a regression you can close."
        }
      ]
    },
    {
      id: "l186",
      title: "Evals: the test suite for an AI feature",
      intro: "What an eval is made of and how it becomes a gate rather than a vanity number.",
      questions: [
        {
          type: "order",
          q: "Order the three required components of a usable eval, from the raw material to the thing that blocks a bad release.",
          items: [
            "A fixed dataset of inputs and expected properties",
            "A scoring method that turns each output into a number",
            "A regression gate that blocks a release when the score drops"
          ],
          explain: "An eval needs all three. A dataset with no scoring is a demo, and a score with no gate is a dashboard nobody acts on."
        },
        {
          type: "mcq",
          q: "The eval dataset is regenerated from last week's production traffic before every release. What breaks?",
          choices: [
            "Scoring becomes more expensive because the dataset grows",
            "The eval can no longer be executed automatically in CI",
            "The scoring method stops working on inputs it has not seen",
            "Score changes can no longer be attributed to your changes, because the dataset moved too"
          ],
          answer: 3,
          explain: "The dataset must be fixed between comparisons. If both the system and the dataset change, a score delta is uninterpretable."
        },
        {
          type: "truefalse",
          q: "An eval score of 82 percent is meaningful on its own, without a baseline to compare against.",
          answer: false,
          explain: "Eval scores are relative instruments. The number matters only against a prior run, a baseline system, or an agreed threshold."
        },
        {
          type: "fill",
          q: "The check that blocks a deploy when the eval score falls below the previous release is called a regression ____.",
          answer: "gate",
          accept: ["gate", "gates", "threshold"],
          explain: "Without a gate wired into the release path, evals are observability rather than protection."
        },
        {
          type: "mcq",
          q: "Which dataset composition makes the strongest eval for a support-reply feature?",
          choices: [
            "Only the hardest known adversarial cases, so the score is conservative",
            "Only cases the current system already passes, so the gate is stable",
            "Randomly sampled traffic plus deliberately included known failure modes and edge cases",
            "Synthetic cases generated by the same model that serves production"
          ],
          answer: 2,
          explain: "You want representative traffic so the score tracks real quality, plus curated hard cases so known failures cannot silently return."
        },
        {
          type: "match",
          q: "Match each eval layer to what it is best at catching.",
          pairs: [
            ["Assertion checks on output structure", "Malformed or unparseable responses"],
            ["Scored golden set", "Gradual quality regression after a prompt change"],
            ["Production sampling and review", "Real-world inputs the dataset never anticipated"]
          ],
          explain: "These layers catch different failures, so shipping teams run all three rather than choosing one."
        },
        {
          type: "truefalse",
          q: "Adding every production failure to the eval dataset forever can eventually make the score unrepresentative of typical traffic.",
          answer: true,
          explain: "A dataset that is all hard cases stops predicting average user experience. Teams usually keep a representative slice and a separate hard-case slice."
        }
      ]
    },
    {
      id: "l187",
      title: "Golden sets, rubrics, and LLM-as-judge",
      intro: "Scoring open-ended outputs, and the specific ways automated judging misleads you.",
      questions: [
        {
          type: "mcq",
          q: "What is a golden set?",
          choices: [
            "The subset of production traffic with the highest user ratings",
            "A cache of previously generated answers reused to lower cost",
            "The prompt variants that scored highest during tuning",
            "A curated, stable dataset of inputs with agreed correct outputs or grading criteria"
          ],
          answer: 3,
          explain: "A golden set is deliberately curated and held stable so scores across releases are comparable."
        },
        {
          type: "truefalse",
          q: "LLM-as-judge scoring inherits the biases and blind spots of the judging model.",
          answer: true,
          explain: "The judge is a model with its own failure modes, so it cannot detect errors it would make itself."
        },
        {
          type: "mcq",
          q: "A known systematic bias of LLM judges is that they tend to prefer:",
          choices: [
            "Answers containing numbered lists over prose answers",
            "Answers that appear second in a pairwise comparison",
            "Longer answers over shorter answers of equal correctness",
            "Answers written in the same language as the rubric"
          ],
          answer: 2,
          explain: "Verbosity bias is well documented: judges reward length even when the shorter answer is equally or more correct. Position bias also exists but is not reliably toward the second item."
        },
        {
          type: "fill",
          q: "A written scoring guide that tells the judge exactly which criteria to grade and how to weight them is called a ____.",
          answer: "rubric",
          accept: ["rubric", "rubrics"],
          explain: "A concrete rubric with named criteria makes judge scores far more reproducible than a vague instruction to rate quality."
        },
        {
          type: "mcq",
          q: "The most reliable way to know whether your LLM judge can be trusted is to:",
          choices: [
            "Run the judge twice and check that its two scores agree",
            "Measure the judge's agreement with human labels on a sample of the golden set",
            "Use a larger model as the judge and assume higher capability means higher accuracy",
            "Have the judge explain its reasoning and check the explanation reads sensibly"
          ],
          answer: 1,
          explain: "Judge quality is itself an eval problem: you validate the judge against human ground truth before trusting its scores."
        },
        {
          type: "match",
          q: "Match each scoring method to the situation it fits best.",
          pairs: [
            ["Exact match or regex", "Outputs with one canonical correct string or format"],
            ["Human rating against a rubric", "Small high-stakes sets where ground truth is contested"],
            ["LLM-as-judge with a rubric", "Large open-ended sets where human grading does not scale"]
          ],
          explain: "Scoring method follows from output shape and volume, not from what is fashionable."
        },
        {
          type: "truefalse",
          q: "If a judge model and the generating model are the same model, self-preference can inflate the score.",
          answer: true,
          explain: "Models tend to rate their own style of output favorably, so using an independent judge or human spot checks is safer."
        }
      ]
    },
    {
      id: "l188",
      title: "Guardrails: validating inputs and outputs",
      intro: "Treating model output as untrusted input and enforcing contracts in code.",
      questions: [
        {
          type: "mcq",
          q: "Your feature asks the model for JSON matching a schema. What must the calling code do?",
          choices: [
            "Validate against the schema and handle the failure path explicitly",
            "Trust the schema instruction in the prompt and parse directly",
            "Retry until parsing succeeds, without a retry limit",
            "Log parse errors and pass the raw string downstream"
          ],
          answer: 0,
          explain: "A prompt instruction is a request, not an enforcement mechanism. Validation belongs in code, with a defined behavior when validation fails."
        },
        {
          type: "truefalse",
          q: "Model output should be treated as untrusted input by every downstream consumer, including any code that renders it or executes it.",
          answer: true,
          explain: "Generated text can carry unsafe markup, unsafe SQL, or unintended commands, so the usual injection and escaping defenses still apply."
        },
        {
          type: "fill",
          q: "A check that runs before the model call, rejecting or rewriting bad requests, is an ____ guardrail.",
          answer: "input",
          accept: ["input", "inputs", "input-side"],
          explain: "Input guardrails cut cost and risk by stopping bad requests before tokens are spent; output guardrails catch what the model produced."
        },
        {
          type: "match",
          q: "Match each guardrail to what it enforces.",
          pairs: [
            ["Schema validation", "The response has the required fields and types"],
            ["Grounding or citation check", "Claims are traceable to the supplied source documents"],
            ["Policy classifier on the reply", "The content does not violate stated content rules"]
          ],
          explain: "Guardrails are separable checks with distinct failure modes, so they are usually composed rather than merged into one prompt."
        },
        {
          type: "mcq",
          q: "A validation failure occurs on a user-facing generation. Which fallback is generally safest?",
          choices: [
            "Show the raw invalid output with a warning label",
            "Silently retry forever until a valid response arrives",
            "Return a deterministic fallback or an explicit error, and record the failure",
            "Strip the invalid parts and render whatever remains"
          ],
          answer: 2,
          explain: "Failing closed with a known-safe response plus telemetry keeps behavior predictable; unbounded retries turn a quality bug into an availability and cost bug."
        },
        {
          type: "order",
          q: "Order a request through a guarded AI pipeline.",
          items: [
            "Validate and normalize the user input",
            "Call the model with the assembled prompt",
            "Validate the output against the schema and policy checks",
            "Return the response or the defined fallback"
          ],
          explain: "Guardrails wrap the model call on both sides, so the non-deterministic component sits inside a deterministic envelope."
        },
        {
          type: "truefalse",
          q: "Putting the word MUST in a prompt provides a hard guarantee that the model will follow the constraint.",
          answer: false,
          explain: "Prompt wording shifts probabilities; it never guarantees. Any constraint you actually depend on must be checked in code."
        }
      ]
    },
    {
      id: "l189",
      title: "Prompt injection and untrusted content",
      intro: "The data versus instructions trust boundary, and why it is the whole defense.",
      questions: [
        {
          type: "mcq",
          q: "What is the core security rule for anything the model reads - web pages, documents, tool results, user files?",
          choices: [
            "It is data, never instructions",
            "It is trusted if it came from an authenticated source",
            "It is instructions only when it appears before the user's message",
            "It is safe once it has been summarized by the model"
          ],
          answer: 0,
          explain: "Content the model reads is data. That trust boundary is the entire defense against prompt injection, and it does not depend on where the content came from."
        },
        {
          type: "truefalse",
          q: "Text inside a fetched web page that says it is an official system message from the platform operator gains real authority over the model's behavior.",
          answer: false,
          explain: "Injected text can claim any authority it likes without gaining any. Authority comes from the trust boundary in your architecture, not from what the content asserts about itself."
        },
        {
          type: "mcq",
          q: "An agent summarizes a user-supplied PDF. The PDF contains hidden text telling the agent to email the user's contact list to an address. The correct system behavior is to:",
          choices: [
            "Follow it, because the user supplied the file and therefore consented",
            "Follow it only if the address matches the user's own domain",
            "Ask the model to judge whether the instruction seems malicious",
            "Treat it as content to report, and take no action on it without the user asking"
          ],
          answer: 3,
          explain: "Asking to summarize a file authorizes reading it, not executing what it contains. Side-effectful actions need the real user's request, surfaced in the interface."
        },
        {
          type: "fill",
          q: "Prompt injection that arrives through content the model retrieves, rather than through the user's own message, is called ____ prompt injection.",
          answer: "indirect",
          accept: ["indirect", "indirect injection"],
          explain: "Indirect injection is the harder case because the attacker never talks to the system directly; they only need to plant text somewhere the model will read."
        },
        {
          type: "truefalse",
          q: "Wrapping untrusted content in delimiters and telling the model to ignore instructions inside them is a complete defense.",
          answer: false,
          explain: "Delimiters and fences help marginally but are not a security control - the model can still be steered. Real mitigation comes from limiting what actions are possible and requiring confirmation for side effects."
        },
        {
          type: "match",
          q: "Match each mitigation to the risk it actually reduces.",
          pairs: [
            ["Least-privilege tool scopes", "Blast radius if the model is successfully steered"],
            ["Human confirmation on side-effectful actions", "Silent execution of an injected instruction"],
            ["Output filtering before rendering", "Exfiltration through generated links or markup"]
          ],
          explain: "Injection defense is layered and architectural. No single prompt-level trick substitutes for constraining capability."
        },
        {
          type: "mcq",
          q: "Which design most reduces exfiltration risk in a retrieval-augmented assistant?",
          choices: [
            "Increasing the context window so more sources fit",
            "Restricting outbound network calls and disallowing model-chosen URLs",
            "Instructing the model in the system prompt never to leak data",
            "Using a larger model that is better at spotting attacks"
          ],
          answer: 1,
          explain: "Exfiltration needs a channel. Removing model-controlled outbound channels is a structural fix; prompt instructions and model size are not."
        }
      ]
    },
    {
      id: "l190",
      title: "Caching, fallbacks, and degradation for model calls",
      intro: "Keeping the feature useful when the model is slow, unavailable, or wrong.",
      questions: [
        {
          type: "mcq",
          q: "A semantic cache returns a stored answer when a new request is close in embedding space to an old one. What is the main hazard?",
          choices: [
            "Near-miss inputs with different intent can receive a subtly wrong cached answer",
            "It increases token cost because embeddings must be generated",
            "It makes responses deterministic, which users dislike",
            "It cannot be invalidated because embeddings are immutable"
          ],
          answer: 0,
          explain: "Semantic similarity is not equivalence. A similarity threshold trades hit rate against the risk of answering a question the user did not ask."
        },
        {
          type: "truefalse",
          q: "Exact-match caching on a normalized prompt is safe only if the answer does not depend on time, user identity, or other request context.",
          answer: true,
          explain: "Any hidden input that is not part of the cache key will eventually produce a stale or cross-user-wrong answer."
        },
        {
          type: "fill",
          q: "Reusing a fixed prefix of the prompt across many requests so the provider does not reprocess it each time is called prompt ____ caching.",
          answer: "prefix",
          accept: ["prefix", "prefix-based"],
          explain: "Prefix caching helps when a long stable system prompt or document precedes the variable part, so put the stable content first."
        },
        {
          type: "match",
          q: "Match each failure of the model call to a reasonable degradation.",
          pairs: [
            ["Provider timeout", "Serve a stored answer for the same input and label it degraded"],
            ["Rate limit rejection", "Queue the request and back off, or route to a secondary model"],
            ["Output fails schema validation", "Discard the response and run the deterministic non-AI path"]
          ],
          explain: "Different failure classes deserve different responses; treating them all as a generic error wastes recoverable cases."
        },
        {
          type: "mcq",
          q: "Which design keeps a product usable when the model provider has an outage?",
          choices: [
            "Retrying the same provider with exponential backoff until it recovers",
            "A non-AI path that still delivers the core job, with the AI layer marked unavailable",
            "Increasing the client timeout so requests eventually succeed",
            "Falling back to a longer prompt that is more likely to be answered"
          ],
          answer: 1,
          explain: "The strongest degradation is a path that does not need the model at all, even if it is less good. Retries and longer timeouts do not survive a real outage."
        },
        {
          type: "order",
          q: "Order a sensible fallback chain for a single model-backed request.",
          items: [
            "Return a cache hit if one is valid",
            "Call the primary model with a bounded timeout",
            "Retry once or route to a secondary model",
            "Serve the deterministic fallback and record the degradation"
          ],
          explain: "Cheapest and most certain options first; each step down the chain costs more or delivers less, and the last step always succeeds."
        },
        {
          type: "truefalse",
          q: "Unbounded automatic retries on model failures are safe because model calls are read-only.",
          answer: false,
          explain: "Retries multiply cost and latency, can amplify an upstream outage, and are not read-only when the model call triggers tools with side effects."
        }
      ]
    },
    {
      id: "l191",
      title: "Cost and latency engineering: streaming and model routing",
      intro: "Where the time and money actually go, and the two levers that move them.",
      questions: [
        {
          type: "truefalse",
          q: "Streaming tokens to the client reduces the total time to produce the complete response.",
          answer: false,
          explain: "Streaming improves perceived latency by showing progress sooner. Total generation time is unchanged or slightly worse."
        },
        {
          type: "mcq",
          q: "Which metric best captures the benefit that streaming actually delivers?",
          choices: [
            "Total tokens generated per request",
            "End-to-end p99 request duration",
            "Time to first token",
            "Tokens per second at steady state"
          ],
          answer: 2,
          explain: "Time to first token is what the user feels as responsiveness; end-to-end duration barely moves when you turn streaming on."
        },
        {
          type: "fill",
          q: "Sending easy requests to a small cheap model and escalating hard ones to a larger model is called model ____.",
          answer: "routing",
          accept: ["routing", "router", "cascading"],
          explain: "Routing works because request difficulty is usually skewed: a large share of traffic is easy enough for the small model."
        },
        {
          type: "mcq",
          q: "Which signal is a defensible trigger for escalating a request from the small model to the large one?",
          choices: [
            "The user's account tier",
            "The time of day, to smooth cost across the billing period",
            "The length of the user's input alone",
            "The small model's output failing a validation or confidence check"
          ],
          answer: 3,
          explain: "Escalation should key on evidence that the cheap attempt was inadequate. Input length correlates weakly with difficulty, and tier or time of day are business rules, not quality signals."
        },
        {
          type: "match",
          q: "Match each lever to its primary effect.",
          pairs: [
            ["Streaming the response", "Lower perceived latency with no change to total time"],
            ["Routing to a smaller model", "A cheaper, faster model answers the same request, at some quality risk"],
            ["Shortening the output with a length cap", "Fewer generated tokens, so less generation time and output cost"]
          ],
          explain: "Output tokens are generated sequentially, so output length drives generation time far more than input length does."
        },
        {
          type: "truefalse",
          q: "Adding a router introduces its own latency and failure mode that must be counted against the savings.",
          answer: true,
          explain: "A classifier call or heuristic sits in the request path, and a mis-route sends a hard request to a model that cannot handle it."
        },
        {
          type: "order",
          q: "Order these steps for cutting the cost of an AI feature, cheapest to implement first.",
          items: [
            "Trim the prompt and cap the output length",
            "Cache repeated or prefix-shared requests",
            "Route easy traffic to a smaller model, gated by evals",
            "Fine-tune or self-host a small model for the dominant task"
          ],
          explain: "Start with the changes that do not alter quality much, and only reach for routing or custom models once evals can prove quality held."
        }
      ]
    },
    {
      id: "l192",
      title: "Human-in-the-loop: designing the review surface",
      intro: "Deciding where a human belongs, and building a review UI that people can sustain.",
      questions: [
        {
          type: "mcq",
          q: "Where does human review add the most value?",
          choices: [
            "Wherever the model's confidence score is available",
            "Where an error is expensive or irreversible",
            "On the highest-volume actions, to maximize coverage",
            "On every output, until the eval score reaches a target"
          ],
          answer: 1,
          explain: "Human attention is scarce, so it should be spent where a mistake cannot be cheaply undone, not spread evenly across traffic."
        },
        {
          type: "truefalse",
          q: "A reviewer who must approve nearly everything, at high volume, tends to become a rubber stamp rather than a real control.",
          answer: true,
          explain: "Automation bias and review fatigue are real. A control that approves 99 percent of items with one click is measuring throughput, not correctness."
        },
        {
          type: "fill",
          q: "A review flow where the model acts immediately and a human can inspect and reverse it afterward is called human-on-the-loop, in contrast to human-____-the-loop where approval comes first.",
          answer: "in",
          accept: ["in", "in-"],
          explain: "Human-in-the-loop gates the action; human-on-the-loop monitors and corrects it. The choice depends on whether the action is reversible."
        },
        {
          type: "match",
          q: "Match each review surface element to the reviewer need it serves.",
          pairs: [
            ["The source excerpts the output drew from", "Verifying a claim without leaving the queue"],
            ["A one-click edit-and-approve action", "Fixing a near-miss instead of rejecting it"],
            ["Rejection reason captured as a label", "Feeding the eval dataset from real failures"]
          ],
          explain: "A good review surface reduces the cost of each decision and turns the reviewer's judgment into training and eval data."
        },
        {
          type: "mcq",
          q: "Your review queue grows faster than reviewers can clear it. Which response preserves the control best?",
          choices: [
            "Auto-approve the oldest items so the queue does not grow unbounded",
            "Sample a fixed percentage at random and auto-approve the rest",
            "Route only high-risk or low-confidence items to review and let the rest through",
            "Increase reviewer targets so more items are cleared per hour"
          ],
          answer: 2,
          explain: "Risk-based triage keeps human attention on the cases that matter. Auto-approving by age or raising throughput targets degrades the control silently."
        },
        {
          type: "order",
          q: "Order the lifecycle of a rejected item in a well-designed review loop.",
          items: [
            "Reviewer rejects the output and records a reason",
            "The item and reason are added to the eval dataset",
            "The prompt or system is changed to address that failure mode",
            "The eval is re-run to confirm the failure rate dropped"
          ],
          explain: "The review surface is only worth its cost if rejections feed back into the eval set and close the loop on the failure."
        },
        {
          type: "truefalse",
          q: "Model-reported confidence is reliable enough to be the sole trigger for skipping human review on irreversible actions.",
          answer: false,
          explain: "Self-reported confidence is often poorly calibrated. For irreversible actions, the risk of the action, not the model's self-assessment, should decide."
        }
      ]
    }
  ]
});
