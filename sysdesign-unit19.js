window.ACADEMY.addUnit("sysdesign", {
  id: "unit-19",
  title: "Prompt & Context Engineering",
  color: "#eab308",
  icon: "\u{1F3AF}",
  description: "The real skill is what you put in the window, not the magic words.",
  lessons: [
    {
      id: "l145",
      title: "A prompt is a specification",
      intro: "Treat the prompt as a spec for a system whose defaults are not your defaults.",
      questions: [
        {
          type: "mcq",
          q: "A prompt says: Summarize this ticket. The model returns a three-paragraph narrative when the team wanted one line. What is the underlying cause?",
          choices: [
            "The model lacks the capability to write short summaries",
            "The temperature setting was too low for concise output",
            "The ticket text was too long to summarize in one line",
            "The prompt left length unspecified, so the model's prior filled the gap"
          ],
          answer: 3,
          explain: "Anything a prompt does not specify gets resolved by the model's prior, which reflects its training distribution and not your team's expectations."
        },
        {
          type: "truefalse",
          q: "If a prompt is ambiguous, the model will typically ask a clarifying question rather than guess.",
          answer: false,
          explain: "Unless explicitly instructed and permitted to ask, models resolve ambiguity by guessing from their prior. Assume silent resolution, not clarification."
        },
        {
          type: "fill",
          q: "Whatever a prompt leaves unstated is filled in by the model's ____, which is not the same as your intent.",
          answer: "prior",
          accept: ["prior", "priors", "prior distribution", "defaults", "default", "training distribution"],
          explain: "The model always produces something for unspecified dimensions; the source of that something is its learned prior."
        },
        {
          type: "mcq",
          q: "Which revision most reduces ambiguity in the instruction Write a good error message for this failure?",
          choices: [
            "Write a really good, clear, professional error message",
            "You are an expert technical writer. Write a good error message",
            "Write one sentence, under 120 characters, stating what failed and the next action the user should take",
            "Write an error message that follows industry best practices"
          ],
          answer: 2,
          explain: "Specifying observable properties - length, content, and required elements - removes dimensions the model would otherwise resolve on its own. Adjectives like good and professional specify nothing checkable."
        },
        {
          type: "match",
          q: "Match each part of a prompt-as-spec to what it pins down.",
          pairs: [
            ["Constraint", "A boundary the output must not cross, such as a length or forbidden content"],
            ["Output format", "The exact shape the response must take so downstream code can consume it"],
            ["Task", "The transformation to apply to the supplied input"]
          ],
          explain: "A prompt-as-spec separates what to do, what shape the answer takes, and what limits apply. Blurring them is what produces underspecified prompts."
        },
        {
          type: "truefalse",
          q: "Two prompts that a human would read as equivalent can still produce measurably different output distributions.",
          answer: true,
          explain: "Wording, ordering, and formatting shift the conditioning, so equivalence to a human reader does not imply equivalence to the model. This is why prompts need evaluation, not just review."
        },
        {
          type: "order",
          q: "Order these steps in a disciplined prompt-development loop, from first to last.",
          items: [
            "Write down the observable properties a correct output must have",
            "Draft the prompt so each of those properties is explicitly stated",
            "Run the prompt over a fixed set of held-out inputs",
            "Inspect the failures and tighten the underspecified parts"
          ],
          explain: "Prompting is specification plus measurement. Deciding what correct means before drafting is what makes the failures interpretable."
        }
      ]
    },
    {
      id: "l146",
      title: "Structure: role, task, constraints, output format",
      intro: "How the four standard sections of a prompt each do a different job.",
      questions: [
        {
          type: "mcq",
          q: "What is the most defensible reason to include a role line such as You are a database migration reviewer?",
          choices: [
            "It biases vocabulary, framing, and what the model treats as relevant",
            "It grants the model access to specialized knowledge it otherwise cannot use",
            "It guarantees the model will refuse out-of-scope requests",
            "It increases the factual accuracy of the model's answers"
          ],
          answer: 0,
          explain: "A role conditions style and salience. It does not add knowledge, enforce scope, or make claims more accurate - those need constraints and verification."
        },
        {
          type: "fill",
          q: "Fixed instructions should be placed ____ in the prompt and variable per-request content after them, which also happens to make the prefix cacheable.",
          answer: "first",
          accept: ["first", "at the start", "early", "up front", "at the beginning", "at the top", "at the front"],
          explain: "Stable-first ordering keeps instructions from being buried by long inputs and is a precondition for prefix caching."
        },
        {
          type: "truefalse",
          q: "Stating a constraint as a positive rule - reply with only the SQL statement - is generally more reliable than the negative form do not add commentary.",
          answer: true,
          explain: "Positive constraints describe the target output directly; negative ones require the model to represent the forbidden thing first and then suppress it, which is a weaker signal."
        },
        {
          type: "order",
          q: "Order these prompt sections from the one that should appear earliest to the one that should appear latest, for a request-time template.",
          items: [
            "Role and standing instructions",
            "Task description and constraints",
            "Output format specification",
            "The variable input document for this request"
          ],
          explain: "Everything that is identical across requests goes first; the per-request payload goes last. This ordering serves both instruction salience and prefix caching."
        },
        {
          type: "mcq",
          q: "A prompt ends with: Respond in JSON. The service still sometimes gets a prose preamble before the JSON. What is the strongest fix?",
          choices: [
            "Repeat the phrase Respond in JSON three more times in the prompt",
            "Raise the temperature so the model explores formats more freely",
            "Constrain the response with a schema or a forced tool call so the format is enforced, not requested",
            "Add the word IMPORTANT in capitals before the instruction"
          ],
          answer: 2,
          explain: "A natural-language format request is a preference the sampler can violate. Schema constraint or forced tool use makes the format a property of the decoding, not a hope."
        },
        {
          type: "match",
          q: "Match each prompt section to its distinct job.",
          pairs: [
            ["Role", "Sets voice and what the model treats as salient"],
            ["Constraints", "Defines the boundaries a valid answer must respect"],
            ["Output format", "Defines the parseable shape the caller expects back"]
          ],
          explain: "Each section removes a different class of ambiguity. Collapsing them into one paragraph is what leaves gaps for the prior to fill."
        },
        {
          type: "truefalse",
          q: "Delimiting the user-supplied document with clear markers such as XML-style tags helps the model tell instructions apart from data.",
          answer: true,
          explain: "Explicit boundaries reduce the chance that content inside the document is read as an instruction, and make the structure easier for the model to track in long inputs."
        }
      ]
    },
    {
      id: "l147",
      title: "Few-shot examples and when they beat instructions",
      intro: "When showing beats telling, and what examples quietly teach.",
      questions: [
        {
          type: "mcq",
          q: "Few-shot examples most clearly outperform prose instructions when the target is which of the following?",
          choices: [
            "A fact the model does not know and must be told",
            "A format or subtle style that is easier to show than to describe",
            "A safety rule that must never be violated",
            "A long chain of arithmetic that must be exactly right"
          ],
          answer: 1,
          explain: "Examples excel at conveying formats and stylistic conventions where prose descriptions get long and still leave gaps. They do not install missing facts or guarantee rules."
        },
        {
          type: "truefalse",
          q: "If the few-shot examples all happen to have short outputs, the model is likely to produce short outputs on new inputs too.",
          answer: true,
          explain: "Examples teach every regularity they contain, including incidental ones like length and ordering. That is both their power and their main hazard."
        },
        {
          type: "fill",
          q: "If every few-shot example given to a classifier has the label positive, the model's predictions will skew positive - the examples have introduced a label ____.",
          answer: "bias",
          accept: ["bias", "imbalance", "skew"],
          explain: "Label distribution in the examples acts as an implicit prior on the answer. Balance the labels or you will measure your own example set."
        },
        {
          type: "mcq",
          q: "A team adds twelve few-shot examples and accuracy on a hard subclass drops. What is the most likely explanation?",
          choices: [
            "The examples exceeded the maximum count the model can attend to",
            "Few-shot prompting only works with fewer than five examples",
            "Adding examples always lowers accuracy by diluting the instructions",
            "The examples do not cover that subclass, so the model generalizes from the nearest ones"
          ],
          answer: 3,
          explain: "Coverage matters more than count. Examples act as the nearest reference points, so an uncovered subclass gets handled by whichever example looks closest - often wrongly."
        },
        {
          type: "order",
          q: "Order these steps for building a few-shot block that is worth its tokens.",
          items: [
            "Collect real inputs that span the classes and edge cases you care about",
            "Hand-write the exactly correct output for each, in the target format",
            "Balance the set so no label or style dominates by accident",
            "Hold out separate inputs to measure whether the examples actually helped"
          ],
          explain: "Few-shot blocks are training data in miniature; they need the same care about coverage, balance, and held-out measurement."
        },
        {
          type: "truefalse",
          q: "Including a deliberately incorrect example, labeled as wrong, is a reliable way to teach the model what not to do.",
          answer: false,
          explain: "Anything present in the context can be imitated, and negative examples often leak into output. Prefer showing only correct examples plus an explicit positive constraint."
        },
        {
          type: "mcq",
          q: "Which is the best use of tokens when instructions and examples both cost context budget?",
          choices: [
            "Prose only, since instructions generalize better than any finite example set",
            "Examples only, since demonstrations always dominate descriptions",
            "Prose for the rules and rationale, examples for the exact output shape and edge cases",
            "Alternate a rule and an example for every requirement in the spec"
          ],
          answer: 2,
          explain: "The two carry different information. Rules generalize and state intent; examples pin down shape and disambiguate the cases prose describes poorly."
        }
      ]
    },
    {
      id: "l148",
      title: "Structured output: schemas and tool-forced responses",
      intro: "Why validating before your code sees the text beats parsing prose after.",
      questions: [
        {
          type: "mcq",
          q: "What is the core engineering advantage of schema-constrained or tool-forced output over parsing prose?",
          choices: [
            "Validation happens before your code sees the response, so malformed output is not your problem",
            "It makes the model reason more accurately about the task",
            "It reduces token cost by removing the need for instructions",
            "It removes the possibility of factually wrong values"
          ],
          answer: 0,
          explain: "The win is structural, not cognitive: the shape is guaranteed at the boundary. The values inside can still be wrong, so semantic validation is still yours to do."
        },
        {
          type: "truefalse",
          q: "A response that validates against your JSON schema is guaranteed to contain correct values.",
          answer: false,
          explain: "Schemas constrain shape and type, not truth. A well-formed object can still hold a hallucinated identifier or an out-of-range date that only your business rules catch."
        },
        {
          type: "fill",
          q: "Forcing the model to answer by calling a declared tool turns the output shape into a property of ____ rather than a request the model may ignore.",
          answer: "decoding",
          accept: ["decoding", "the decoding", "generation", "sampling"],
          explain: "Constrained decoding restricts the tokens that can be emitted, so invalid structures are unreachable rather than merely discouraged."
        },
        {
          type: "mcq",
          q: "An extraction schema needs a field for a value that is sometimes genuinely absent in the source. What is the best design?",
          choices: [
            "Make the field required and instruct the model to guess when unsure",
            "Omit the field and let the model add it when it applies",
            "Make the field nullable or add an explicit not_found enum value",
            "Make the field a free-text string so the model can explain itself"
          ],
          answer: 2,
          explain: "A required field with no legal way to say absent is a hallucination generator. Give absence a first-class representation."
        },
        {
          type: "match",
          q: "Match each mechanism to what it actually guarantees.",
          pairs: [
            ["Constrained decoding", "The emitted tokens can only form a structure the grammar allows"],
            ["Post-hoc parsing with retry", "Bad output is detected after generation and the call is repeated"],
            ["Business-rule validation", "Values that are well-formed but not legal for your domain get rejected"]
          ],
          explain: "These sit at different layers: one prevents malformed shapes, one recovers from them, and one checks meaning. You typically want all three."
        },
        {
          type: "truefalse",
          q: "Descriptive field names and per-field descriptions in a schema influence what the model puts in those fields.",
          answer: true,
          explain: "The schema is part of the context, so names and descriptions act as instructions. A field named date fills differently than one named invoice_issue_date_iso8601."
        },
        {
          type: "order",
          q: "Order these layers of a robust structured-output pipeline, from the earliest point of enforcement to the latest.",
          items: [
            "Constrained decoding against the declared schema",
            "Schema validation of the returned object",
            "Domain rule checks on the field values",
            "Retry or human review on any rejected record"
          ],
          explain: "Enforce as early as possible, then verify what enforcement cannot cover. The retry path exists for the cases the earlier layers reject."
        }
      ]
    },
    {
      id: "l149",
      title: "Context curation - garbage in, confidently wrong out",
      intro: "Why more context is not better context, and how to decide what earns a slot.",
      questions: [
        {
          type: "truefalse",
          q: "Filling the remaining context window with loosely related documents is a safe default because the model will ignore what it does not need.",
          answer: false,
          explain: "Irrelevant filler measurably degrades output quality and raises cost. Every token in the window competes for attention, so unselected context is a real cost, not a free option."
        },
        {
          type: "mcq",
          q: "A support bot gets worse after the team raises retrieval from 3 chunks to 30. What is the most likely mechanism?",
          choices: [
            "The extra chunks exceeded the model's vocabulary limit",
            "The added chunks are mostly irrelevant and dilute the signal the model must attend to",
            "More chunks force the model to switch to a smaller internal model",
            "Retrieval systems cannot return more than a few results accurately"
          ],
          answer: 1,
          explain: "Recall goes up but precision goes down. Distractors compete with the answer-bearing chunk and can pull the generation toward the wrong source."
        },
        {
          type: "fill",
          q: "Placing the most important material at the very beginning or very end of a long context helps because material buried in the ____ of a long window is attended to less reliably.",
          answer: "middle",
          accept: ["middle", "center", "midpoint"],
          explain: "This is the lost-in-the-middle effect documented by Liu and colleagues: retrieval accuracy from long contexts is highest at the edges and dips in the interior."
        },
        {
          type: "mcq",
          q: "Which item most deserves a slot in a limited context window for a question about a specific refund policy?",
          choices: [
            "The full company handbook, so nothing relevant is missed",
            "A summary of every policy the company has ever published",
            "The last two hundred turns of the user's chat history",
            "The three paragraphs of policy text that govern refunds, with their effective dates"
          ],
          answer: 3,
          explain: "Curation means selecting the smallest set of material that actually determines the answer. Breadth without relevance costs money and accuracy."
        },
        {
          type: "match",
          q: "Match each context hygiene problem to its effect.",
          pairs: [
            ["Stale document included alongside its replacement", "The model may answer from the superseded version with full confidence"],
            ["Near-duplicate chunks filling the top results", "Effective diversity collapses and other relevant material is crowded out"],
            ["Unlabeled provenance on retrieved text", "The answer cannot be traced back to a source for verification"]
          ],
          explain: "Curation is not just relevance ranking. Freshness, deduplication, and provenance each fail in a distinct and diagnosable way."
        },
        {
          type: "truefalse",
          q: "Long conversation histories should be periodically compacted or summarized rather than appended indefinitely.",
          answer: true,
          explain: "Unbounded history grows cost linearly and pushes decisive material into the low-attention middle. Compaction preserves the load-bearing facts at a fraction of the tokens."
        },
        {
          type: "order",
          q: "Order these context-curation steps for one request, from first to last.",
          items: [
            "Decide what facts the answer actually depends on",
            "Retrieve or select candidate material for those facts",
            "Filter out duplicates, stale versions, and off-topic passages",
            "Place the surviving material where attention is strongest and label its source"
          ],
          explain: "Curation runs from intent to placement. Skipping the filter step is how retrieval recall silently becomes context noise."
        }
      ]
    },
    {
      id: "l150",
      title: "Retrieval (RAG): chunking, embedding, ranking",
      intro: "The pipeline that decides what the model gets to see.",
      questions: [
        {
          type: "order",
          q: "Order the stages of a basic retrieval-augmented generation request, from first to last.",
          items: [
            "Split source documents into chunks and embed them into a vector index",
            "Embed the incoming query into the same vector space",
            "Retrieve nearest chunks and re-rank the candidates",
            "Insert the selected chunks into the prompt and generate the answer"
          ],
          explain: "Indexing happens offline; embedding, retrieval, re-ranking, and generation happen per query. Every later stage is limited by what the earlier one surfaced."
        },
        {
          type: "mcq",
          q: "Why do practical chunking schemes usually overlap adjacent chunks by some number of tokens?",
          choices: [
            "Overlap reduces the chance that a fact straddling a boundary is split across two chunks",
            "Overlap lets the vector index compress the embeddings more efficiently",
            "Overlap is required for cosine similarity to be well defined",
            "Overlap allows the model to skip re-ranking entirely"
          ],
          answer: 0,
          explain: "A hard split can cut a definition from its subject. Overlap gives each fact a chance to appear intact in at least one chunk, at the cost of index size."
        },
        {
          type: "truefalse",
          q: "Query and document vectors must live in the same embedding space, so re-embedding documents with a new model while queries still use the old one silently breaks retrieval.",
          answer: true,
          explain: "Similarity is only meaningful inside one shared space, whether that space comes from a single encoder or a jointly trained query and document encoder pair. Upgrading one side without re-indexing the other compares coordinates in unrelated spaces and shows up as silently terrible retrieval."
        },
        {
          type: "fill",
          q: "A ____ combines dense vector search with keyword search such as BM25, so exact identifiers and rare terms are not lost to semantic similarity.",
          answer: "hybrid search",
          accept: ["hybrid search", "hybrid", "hybrid retrieval", "hybrid search system", "hybrid retriever", "hybrid index"],
          explain: "Dense retrieval is weak on exact tokens like error codes and part numbers; lexical search is weak on paraphrase. Hybrid retrieval covers both failure modes."
        },
        {
          type: "match",
          q: "Match each retrieval component to what it does.",
          pairs: [
            ["Bi-encoder embedding", "Encodes query and document separately so vectors can be indexed in advance"],
            ["Cross-encoder re-ranker", "Scores a query and a candidate together for a more accurate but slower ordering"],
            ["Approximate nearest neighbor index", "Trades a small amount of recall for sub-linear search over many vectors"]
          ],
          explain: "The standard pattern is cheap recall then expensive precision: an ANN index over bi-encoder vectors retrieves candidates, and a cross-encoder re-orders the short list."
        },
        {
          type: "mcq",
          q: "Chunks are split at a fixed token count with no regard for document structure. Which failure should you expect first?",
          choices: [
            "The embedding model will refuse chunks that end mid-sentence",
            "Answers will get split across boundaries, so no single chunk contains the whole answer",
            "The vector index will grow without bound",
            "Cosine similarity will start returning values above one"
          ],
          answer: 1,
          explain: "Structure-blind splitting cuts tables, lists, and multi-sentence definitions apart. Splitting on headings, paragraphs, or sentences respects the units that carry meaning."
        },
        {
          type: "truefalse",
          q: "Retrieval quality dominates generation quality: a stronger generator cannot recover an answer that was never retrieved.",
          answer: true,
          explain: "The generator can only work with what is in the window. Investment in chunking, hybrid search, and re-ranking usually pays more than swapping generators."
        }
      ]
    },
    {
      id: "l151",
      title: "How RAG fails, and how to measure it",
      intro: "The four classic failure modes and the metrics that separate them.",
      questions: [
        {
          type: "mcq",
          q: "The system returns a confident answer, but the retrieved chunks contain nothing about the question. Which failure mode is this, and what is the fix?",
          choices: [
            "Chunk boundary split; increase the overlap between chunks",
            "Retrieved-but-ignored; move the chunks earlier in the prompt",
            "Answering with nothing relevant retrieved; require grounding and allow an explicit I do not know",
            "Embedding drift; re-index with a newer embedding model"
          ],
          answer: 2,
          explain: "This is the most dangerous mode because the output looks authoritative. The fix is a relevance threshold plus a prompt that makes abstention a legal and expected answer."
        },
        {
          type: "match",
          q: "Match each RAG failure mode to its signature.",
          pairs: [
            ["Retrieval miss", "The answer-bearing passage exists in the corpus but never enters the top results"],
            ["Chunk boundary split", "Two retrieved chunks each hold half of the answer and neither is sufficient alone"],
            ["Retrieved but ignored", "The correct passage is in the context yet the generated answer contradicts it"]
          ],
          explain: "These need different fixes - better retrieval, better chunking, and better prompting or placement respectively - so diagnosis has to precede tuning."
        },
        {
          type: "fill",
          q: "The fraction of claims in a generated answer that are actually supported by the retrieved context is called ____.",
          answer: "faithfulness",
          accept: ["faithfulness", "groundedness", "faithfulness score"],
          explain: "Faithfulness measures the generation step against its own evidence. It is distinct from answer correctness, which compares against ground truth."
        },
        {
          type: "truefalse",
          q: "High retrieval recall by itself proves the end-to-end RAG system is working.",
          answer: false,
          explain: "Recall only shows the right chunk was fetched. The retrieved-but-ignored mode fails with perfect recall, which is why the retrieval and generation stages need separate metrics."
        },
        {
          type: "mcq",
          q: "Which evaluation design best isolates whether a regression came from retrieval or from generation?",
          choices: [
            "Compare only the final answers before and after the change",
            "Ask the model to rate its own confidence on each answer",
            "Increase the number of retrieved chunks and see whether accuracy recovers",
            "Measure retrieval metrics on a labeled query-to-chunk set and generation metrics on fixed gold context, separately"
          ],
          answer: 3,
          explain: "Holding one stage fixed while measuring the other converts an end-to-end score into an attributable one. Self-rated confidence is not calibrated evidence."
        },
        {
          type: "order",
          q: "Order these debugging steps for a RAG answer that is wrong, from first to last.",
          items: [
            "Check whether the answer-bearing passage exists in the corpus at all",
            "Check whether retrieval returned it in the top results",
            "Check whether the retrieved chunk contains the complete answer rather than a fragment",
            "Check whether the generated answer contradicts what was in the context"
          ],
          explain: "Walking the pipeline in order maps the symptom onto exactly one of the four failure modes instead of guessing at fixes."
        },
        {
          type: "truefalse",
          q: "A useful RAG evaluation set should include questions the corpus genuinely cannot answer.",
          answer: true,
          explain: "Unanswerable questions are the only way to measure whether the system abstains instead of confabulating - the failure mode most likely to reach users unnoticed."
        }
      ]
    },
    {
      id: "l152",
      title: "Prompt caching and controlling cost",
      intro: "How prefix reuse works and what silently invalidates it.",
      questions: [
        {
          type: "mcq",
          q: "Prompt caching reuses computation for what exactly?",
          choices: [
            "Any repeated substring anywhere in the prompt",
            "A stable prefix of the prompt that is byte-identical to a previous request",
            "The generated response for identical questions",
            "The embeddings of retrieved chunks across requests"
          ],
          answer: 1,
          explain: "Caching operates on a prefix because the internal state at each position depends on everything before it. Change one token early and every later position must be recomputed."
        },
        {
          type: "fill",
          q: "To make prompt caching effective, put fixed instructions ____ and variable per-request content last.",
          answer: "first",
          accept: ["first", "at the front", "up front", "at the beginning"],
          explain: "Only an unchanging prefix can be reused. Any variable content placed early destroys the cacheable region behind it."
        },
        {
          type: "truefalse",
          q: "Inserting the current timestamp at the top of a system prompt is harmless for caching.",
          answer: false,
          explain: "A value that changes every request at the front of the prompt makes the prefix unique each time, so nothing after it can be reused. Move volatile values to the end."
        },
        {
          type: "mcq",
          q: "A team has a 20,000-token instruction and example block plus a short user question per request. Which layout is best for cost?",
          choices: [
            "Instruction block first with a cache marker, then the user question",
            "User question first, then the instruction block, so the question gets the strongest attention",
            "Interleave the question into the instruction block to keep it relevant",
            "Split the instruction block in half and put the question between the halves"
          ],
          answer: 0,
          explain: "The large block is identical across requests, so it is exactly the region worth caching. Only the short tail then needs full processing each call."
        },
        {
          type: "match",
          q: "Match each cost lever to what it reduces.",
          pairs: [
            ["Prefix caching", "The repeated cost of processing an unchanging instruction block"],
            ["Context curation", "The number of tokens sent at all, by dropping material that does not affect the answer"],
            ["Model routing by difficulty", "The per-token price paid on requests that a cheaper model handles correctly"]
          ],
          explain: "These are independent levers: reuse what repeats, remove what does not matter, and do not pay premium rates for easy work."
        },
        {
          type: "order",
          q: "Order these blocks of a request template so that caching is preserved, from the position that should come earliest to latest.",
          items: [
            "Static system instructions and policy text",
            "Static few-shot example block",
            "Retrieved context chunks for this query",
            "The user's question for this turn"
          ],
          explain: "Put the never-changing blocks first so the cacheable prefix is as long as possible; the cache boundary falls where variable content begins. Among the variable blocks, the bulky retrieved documents go before the short question, so the question sits at the end where attention is strongest."
        },
        {
          type: "truefalse",
          q: "Prompt caching reduces the work of processing input, but does not make the model's generated tokens free.",
          answer: true,
          explain: "Caching applies to prefill of the reused prefix. Output tokens are generated fresh every time and remain the dominant cost for long responses."
        }
      ]
    }
  ]
});
