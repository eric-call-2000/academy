window.ACADEMY.addUnit("sysdesign", {
  id: "unit-18",
  title: "How LLMs Actually Work",
  color: "#eab308",
  icon: "\u{1F916}",
  description: "Enough real mechanism to predict what a model will do, instead of being surprised by it.",
  lessons: [
    {
      id: "l137",
      title: "Tokens and tokenization",
      intro: "What a token actually is, and why the model never sees your characters.",
      questions: [
        {
          type: "mcq",
          q: "What is a token, as the term is used by a modern LLM?",
          choices: [
            "A single character of the input text, encoded as a byte",
            "A whole word, looked up in a fixed dictionary of English words",
            "A sub-word chunk drawn from a learned vocabulary, mapped to an integer id",
            "A sentence-level unit produced by splitting the text on punctuation"
          ],
          answer: 2,
          explain: "Modern tokenizers use sub-word vocabularies, so common words are one token and rarer strings split into several pieces. Each piece is just an integer id to the model."
        },
        {
          type: "fill",
          q: "A common rough rule of thumb for English is about ____ characters per token.",
          answer: "4",
          accept: ["4", "four", "~4", "about 4"],
          explain: "Roughly 4 characters per token is a planning heuristic for English prose only. It is not exact, and it degrades badly for code, other languages, and unusual strings."
        },
        {
          type: "truefalse",
          q: "The same piece of text can produce different token counts under different tokenizers.",
          answer: true,
          explain: "Tokenization is a property of the specific model family, not of the text. A count measured with one tokenizer is only an estimate for another."
        },
        {
          type: "mcq",
          q: "Why do models often stumble on tasks like counting the letters in a word or reversing a string?",
          choices: [
            "The model has no memory of previous characters in the sequence",
            "Individual characters are usually not separate tokens, so character structure is not directly visible",
            "Such tasks are explicitly filtered out during training",
            "Arithmetic and string operations are disabled at inference time"
          ],
          answer: 1,
          explain: "The model sees integer ids for multi-character chunks. Character-level facts have to be inferred indirectly, which is why letter counting is unreliable."
        },
        {
          type: "truefalse",
          q: "Whitespace and punctuation are free and do not consume tokens.",
          answer: false,
          explain: "Whitespace and punctuation are part of the token stream. Leading spaces are typically bundled into the token itself, and heavy indentation in code costs real tokens."
        },
        {
          type: "order",
          q: "Order these steps in how text reaches the model.",
          items: [
            "Raw text string arrives at the API",
            "Tokenizer splits it into sub-word pieces",
            "Each piece is mapped to an integer id",
            "Ids are looked up in the embedding table as vectors"
          ],
          explain: "Text becomes pieces, pieces become ids, ids become vectors. Everything the model computes on downstream is vectors, not characters."
        },
        {
          type: "mcq",
          q: "Which input would you expect to have the WORST character-per-token ratio, meaning the most tokens for its length?",
          choices: [
            "A paragraph of ordinary English prose",
            "A long block of common English words repeated",
            "A base64-encoded blob of random bytes",
            "A page of simple English dialogue"
          ],
          answer: 2,
          explain: "Random-looking strings such as base64, hashes, and UUIDs do not match common vocabulary entries, so they fragment into many short tokens."
        }
      ]
    },
    {
      id: "l138",
      title: "Next-token prediction, temperature, and top-p",
      intro: "The model samples from a distribution; the sampling knobs decide how it picks.",
      questions: [
        {
          type: "mcq",
          q: "At each step of generation, what does the model actually produce?",
          choices: [
            "A probability distribution over every token in its vocabulary",
            "The single correct next token, retrieved from its training data",
            "A ranked list of the documents most relevant to the prompt",
            "A parse tree of the sentence being constructed"
          ],
          answer: 0,
          explain: "The forward pass yields scores over the whole vocabulary, converted to a probability distribution. A sampler then chooses one token from it, and the loop repeats."
        },
        {
          type: "truefalse",
          q: "Because it samples from a distribution rather than retrieving stored facts, fluent and confident wrongness is a natural failure mode for an LLM.",
          answer: true,
          explain: "Fluency and factual accuracy are separate. The sampler optimizes for a plausible continuation, so a wrong answer can be just as smooth as a right one."
        },
        {
          type: "fill",
          q: "____ sampling truncates the candidate set to the smallest group of tokens whose cumulative probability exceeds p.",
          answer: "nucleus",
          accept: ["nucleus", "top-p", "top p", "nucleus (top-p)"],
          explain: "Top-p, also called nucleus sampling, adapts the candidate set size to the shape of the distribution rather than fixing a count the way top-k does."
        },
        {
          type: "mcq",
          q: "What does lowering the temperature do to the distribution?",
          choices: [
            "It removes low-probability tokens from the vocabulary permanently",
            "It flattens the distribution so rare tokens become more competitive",
            "It shortens the output by biasing toward the end-of-sequence token",
            "It sharpens the distribution, concentrating mass on the already-likely tokens"
          ],
          answer: 3,
          explain: "Temperature scales the logits before the softmax. Lower temperature sharpens the distribution toward the top candidates; higher temperature flattens it."
        },
        {
          type: "truefalse",
          q: "Setting temperature to 0 guarantees byte-identical output for the same prompt on a production API.",
          answer: false,
          explain: "Temperature 0 makes the sampler greedy, but it is not a reproducibility guarantee. Floating-point non-determinism, batching, hardware, and model updates can still change the result."
        },
        {
          type: "match",
          q: "Match each sampling control to what it does.",
          pairs: [
            ["Temperature", "Rescales the logits to sharpen or flatten the whole distribution"],
            ["Top-p", "Keeps the smallest set of tokens whose cumulative probability passes a threshold"],
            ["Top-k", "Keeps a fixed number of the highest-probability tokens regardless of their mass"]
          ],
          explain: "Temperature reshapes the distribution; top-p and top-k truncate it. Top-p adapts its cutoff to the distribution, while top-k uses a constant count."
        },
        {
          type: "mcq",
          q: "You need a classifier-style output where the same input should map to the same label as often as possible. What is the most appropriate setting?",
          choices: [
            "High temperature with a high top-p, to explore more label options",
            "High temperature with a low top-p, to balance the two effects",
            "Very low temperature, accepting that exact determinism is still not guaranteed",
            "Default temperature, since sampling settings do not affect short outputs"
          ],
          answer: 2,
          explain: "Low temperature is the right lever for consistency, but the honest framing is reduced variance, not a determinism guarantee."
        }
      ]
    },
    {
      id: "l139",
      title: "The context window and why attention is expensive",
      intro: "Everything the model knows in a call lives in the context, and attending to it is not free.",
      questions: [
        {
          type: "fill",
          q: "The compute cost of self-attention grows ____ with sequence length.",
          answer: "quadratically",
          accept: ["quadratically", "quadratic", "quadratically (n^2)", "n^2", "n squared", "o(n^2)"],
          explain: "Every token attends to every other token, so the number of pairwise interactions scales with the square of the sequence length."
        },
        {
          type: "mcq",
          q: "If you double the number of tokens in the context, the naive self-attention work grows by roughly what factor?",
          choices: [
            "About 2x, since work is proportional to token count",
            "About 4x, since pairwise interactions scale with the square",
            "About 8x, since attention is cubic in sequence length",
            "Not at all, since attention is independent of sequence length"
          ],
          answer: 1,
          explain: "Quadratic scaling means doubling the length roughly quadruples the pairwise attention work, which is why long-context calls get slow and costly quickly."
        },
        {
          type: "truefalse",
          q: "The context window is the model's persistent memory: information from one call carries into the next automatically.",
          answer: false,
          explain: "Each request is stateless. Any history you want the model to see must be resent in the context, which is why chat transcripts grow the prompt on every turn."
        },
        {
          type: "mcq",
          q: "A team notices quality dropping as they stuff more retrieved documents into the prompt. What is the most defensible explanation?",
          choices: [
            "The model runs out of vocabulary entries when the input is long",
            "Tokens beyond a fixed count are silently deleted by the tokenizer",
            "Attention is spread over more competing content, so relevant material can be diluted by irrelevant material",
            "Long inputs force the model to switch to a smaller internal network"
          ],
          answer: 2,
          explain: "More context is not automatically better. Adding weakly relevant material competes for attention, so retrieval precision usually matters more than volume."
        },
        {
          type: "truefalse",
          q: "The context window is shared between the input you send and the output the model generates.",
          answer: true,
          explain: "Prompt tokens and generated tokens both occupy the window. A very long prompt leaves less room for the completion, which can truncate the answer."
        },
        {
          type: "order",
          q: "Order these interventions from cheapest to most expensive as a way to fit a long conversation into context.",
          items: [
            "Drop or trim redundant turns from the history",
            "Summarize older turns into a compact recap",
            "Retrieve only the passages relevant to the current turn",
            "Fine-tune a model so the background knowledge need not be sent"
          ],
          explain: "Trimming is free, summarizing costs one extra call, retrieval costs an index and pipeline, and fine-tuning costs a training run plus ongoing maintenance."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Self-attention", "The mechanism that lets each token weigh every other token in the sequence"],
            ["Context window", "The maximum number of tokens the model can process in one request"],
            ["KV cache", "Stored intermediate key and value tensors that avoid recomputing past tokens during generation"]
          ],
          explain: "The KV cache is why generating token number 500 does not require reprocessing the first 499 from scratch, though it does consume memory proportional to the sequence."
        }
      ]
    },
    {
      id: "l140",
      title: "Pretraining, fine-tuning, and RLHF",
      intro: "The three-stage pipeline that turns a text predictor into an assistant.",
      questions: [
        {
          type: "order",
          q: "Order the standard training stages for an instruction-following assistant model.",
          items: [
            "Pretraining on a large text corpus",
            "Supervised fine-tuning on demonstration data",
            "Preference tuning such as RLHF"
          ],
          explain: "Pretraining builds general language capability, supervised fine-tuning teaches the response format and task behavior, and preference tuning aligns outputs with human-rated quality."
        },
        {
          type: "mcq",
          q: "What is the training objective during pretraining?",
          choices: [
            "Maximize a human preference score over full responses",
            "Predict the next token in the sequence given the preceding tokens",
            "Match a hand-labeled answer for each question in a curated set",
            "Minimize the distance between input and output embeddings"
          ],
          answer: 1,
          explain: "Pretraining is self-supervised next-token prediction over raw text. No human labels are needed, which is what makes the corpus scale possible."
        },
        {
          type: "fill",
          q: "In RLHF, human comparisons are used to train a ____ model that then scores the policy model's outputs.",
          answer: "reward",
          accept: ["reward", "reward model", "preference", "preference model"],
          explain: "Humans rank candidate responses, a reward model learns to predict those rankings, and reinforcement learning optimizes the policy against that learned reward."
        },
        {
          type: "truefalse",
          q: "Fine-tuning is the right tool when you need the model to know facts that change every day.",
          answer: false,
          explain: "Fine-tuning shapes behavior, format, and style well but is a poor mechanism for volatile facts. Retrieval or tool calls put fresh data in the context instead."
        },
        {
          type: "mcq",
          q: "Which failure is most directly explained by optimizing against a learned reward model?",
          choices: [
            "The model produces agreeable, well-formatted answers that raters like more than they are correct",
            "The model loses the ability to tokenize rare words",
            "The model exceeds its context window on short prompts",
            "The model returns embeddings instead of text"
          ],
          answer: 0,
          explain: "The optimizer targets the proxy, not truth. Reward hacking of this kind is one root of sycophancy and overconfident, pleasant-sounding answers."
        },
        {
          type: "match",
          q: "Match each stage to what it primarily contributes.",
          pairs: [
            ["Pretraining", "Broad language and world modeling from unlabeled text"],
            ["Supervised fine-tuning", "Learning to follow instructions from curated demonstration pairs"],
            ["Preference tuning", "Shifting outputs toward responses humans rate higher"]
          ],
          explain: "Each stage is much smaller in data volume than the one before it, yet the later stages do most of the work of making the model usable as an assistant."
        },
        {
          type: "truefalse",
          q: "A base pretrained model with no fine-tuning will often continue your prompt rather than answer it as an instruction.",
          answer: true,
          explain: "Instruction-following is learned behavior, not an inherent property of a text predictor. A raw base model treats your question as text to continue."
        }
      ]
    },
    {
      id: "l141",
      title: "Hallucination, knowledge cutoffs, and having no ground truth",
      intro: "Why the model invents things, and what actually reduces it.",
      questions: [
        {
          type: "mcq",
          q: "What is the most accurate mechanical description of a hallucination?",
          choices: [
            "A corrupted lookup in the model's internal fact database",
            "A statistically plausible continuation that happens not to be true",
            "A bug in the tokenizer that scrambles the output text",
            "A deliberate randomization inserted to prevent memorization"
          ],
          answer: 1,
          explain: "There is no fact database to corrupt. The model samples a likely continuation, and plausibility and truth are not the same criterion."
        },
        {
          type: "truefalse",
          q: "A model has no independent way to check its own output against the world, so its stated confidence is not evidence of correctness.",
          answer: true,
          explain: "Confidence phrasing is itself generated text. Without a tool call, retrieval, or external check, there is no ground-truth signal available to the model."
        },
        {
          type: "mcq",
          q: "Which prompt is most likely to produce a fabricated answer?",
          choices: [
            "Summarize the following pasted document in three sentences",
            "Rewrite this paragraph in a more formal register",
            "Give me the exact citation and page number for a claim I did not provide a source for",
            "Explain the difference between two concepts described in the prompt"
          ],
          answer: 2,
          explain: "Requests for precise identifiers with no source in context invite fabrication, because a well-formed-looking citation is a highly plausible continuation."
        },
        {
          type: "fill",
          q: "The point after which a model has seen no training data about the world is called its knowledge ____.",
          answer: "cutoff",
          accept: ["cutoff", "cut-off", "cut off", "cutoff date"],
          explain: "Beyond the cutoff the model has no information, but it will still answer fluently unless the missing facts are supplied through retrieval or tools."
        },
        {
          type: "mcq",
          q: "Which measure most directly reduces hallucination on factual questions?",
          choices: [
            "Instructing the model in the system prompt to never hallucinate",
            "Raising the temperature so the model explores more answers",
            "Putting the authoritative source text in the context and asking the model to answer only from it",
            "Asking the model to rate its own confidence and trusting scores above a threshold"
          ],
          answer: 2,
          explain: "Grounding replaces recall with reading. Instructions alone do not create knowledge, and self-reported confidence is generated text, not a calibrated measurement."
        },
        {
          type: "truefalse",
          q: "Lowering the temperature to 0 eliminates hallucination.",
          answer: false,
          explain: "Low temperature makes the model consistently pick the highest-probability continuation. If that continuation is wrong, you get the same wrong answer more reliably."
        },
        {
          type: "match",
          q: "Match each mitigation to the problem it actually addresses.",
          pairs: [
            ["Retrieval grounding", "The model lacks the specific facts needed to answer"],
            ["Requiring quoted spans from the provided source", "The answer cannot be traced back to evidence in context"],
            ["A separate verification call or tool check", "No independent signal exists that the first answer was correct"]
          ],
          explain: "These are three different failure points: missing knowledge, unverifiable output, and absent ground truth. Each needs its own control."
        }
      ]
    },
    {
      id: "l142",
      title: "Embeddings and vector similarity",
      intro: "Mapping text into a vector space where nearby means related, not true.",
      questions: [
        {
          type: "mcq",
          q: "What is an embedding?",
          choices: [
            "A compressed copy of the original text that can be decoded back exactly",
            "A dense vector representing text, positioned so related text lands nearby",
            "A hash of the text used to detect duplicates in a corpus",
            "A list of the keywords extracted from the text, weighted by frequency"
          ],
          answer: 1,
          explain: "Embeddings are learned dense vectors. Position in the space encodes learned relatedness, and the mapping is lossy and not reversible to the original text."
        },
        {
          type: "fill",
          q: "____ similarity, which compares the angle between two vectors, is the usual measure of embedding relatedness.",
          answer: "cosine",
          accept: ["cosine", "cos", "cosine similarity"],
          explain: "Cosine similarity ignores vector magnitude and compares direction, which suits embeddings where the meaningful signal is orientation in the space."
        },
        {
          type: "truefalse",
          q: "High cosine similarity between two sentences means one entails the other.",
          answer: false,
          explain: "Similarity approximates relatedness, not truth or logical entailment. A statement and its exact negation are usually very close in embedding space."
        },
        {
          type: "mcq",
          q: "A support bot retrieves by embedding similarity and returns a passage that is on-topic but answers a different question. What is the underlying cause?",
          choices: [
            "The embedding model was trained on the wrong language",
            "Cosine similarity was computed instead of Euclidean distance",
            "The vectors were normalized before indexing",
            "Topical closeness in the space does not distinguish which specific question a passage answers"
          ],
          answer: 3,
          explain: "Vector search finds semantically nearby text. Distinguishing the precise question usually needs reranking, filters, or hybrid keyword search on top."
        },
        {
          type: "truefalse",
          q: "Embeddings from two different models cannot be meaningfully compared to each other.",
          answer: true,
          explain: "Each model learns its own space with its own axes. Mixing vectors from different models, or changing models without reindexing, produces meaningless distances."
        },
        {
          type: "match",
          q: "Match each retrieval component to its role.",
          pairs: [
            ["Embedding model", "Turns a chunk of text into a vector in a learned space"],
            ["Vector index", "Finds approximate nearest neighbors quickly at scale"],
            ["Reranker", "Rescores a shortlist of candidates with a slower, more precise model"]
          ],
          explain: "A common pipeline is cheap recall from the vector index followed by expensive precision from a reranker over a small candidate list."
        },
        {
          type: "mcq",
          q: "Why does chunking strategy matter so much for embedding-based retrieval?",
          choices: [
            "Each chunk collapses to one vector, so an overly large chunk blurs several distinct topics together",
            "Chunk boundaries determine the model's temperature setting",
            "Vector indexes reject chunks that are not equal in length",
            "Chunk count directly sets the size of the context window"
          ],
          answer: 0,
          explain: "One vector per chunk means one averaged meaning. Oversized chunks smear distinct ideas together, while tiny chunks lose the context needed to interpret them."
        }
      ]
    },
    {
      id: "l143",
      title: "Tokens as the unit of cost and latency",
      intro: "Billing, throughput, and perceived speed all trace back to token counts.",
      questions: [
        {
          type: "mcq",
          q: "Why is output generation typically slower per token than processing the input prompt?",
          choices: [
            "Output tokens are longer strings than input tokens",
            "The tokenizer runs a second time on every output token",
            "Output tokens bypass the KV cache and are recomputed from scratch",
            "Input tokens can be processed in parallel, while output tokens must be generated one at a time"
          ],
          answer: 3,
          explain: "Prefill processes the whole prompt in parallel; decoding is sequential because each new token depends on the one before it. That is the core latency asymmetry."
        },
        {
          type: "fill",
          q: "The metric describing how long a user waits before the first piece of the response appears is time to first ____.",
          answer: "token",
          accept: ["token", "tokens", "ttft", "token (ttft)"],
          explain: "Time to first token is dominated by prompt length and queueing, while total time also depends on how many tokens you generate."
        },
        {
          type: "truefalse",
          q: "Streaming the response reduces the total compute required to produce it.",
          answer: false,
          explain: "Streaming changes when the user sees tokens, not how many are computed. It improves perceived latency while total work and total cost are unchanged."
        },
        {
          type: "mcq",
          q: "A latency-sensitive endpoint is too slow. Which change most reliably reduces end-to-end time?",
          choices: [
            "Asking the model to think longer before answering",
            "Raising the temperature so it commits to an answer sooner",
            "Constraining the output format so far fewer output tokens are generated",
            "Adding more few-shot examples so the answer is easier to produce"
          ],
          answer: 2,
          explain: "Decode time scales with output length. Cutting output tokens is the most direct lever; adding examples grows the prompt and usually makes it worse."
        },
        {
          type: "truefalse",
          q: "In a multi-turn chat that resends the full history each turn, the TOTAL prompt tokens billed across the whole conversation grow superlinearly with the number of turns.",
          answer: true,
          explain: "Each single request grows only linearly, but turn n resends turns 1 through n-1, so the cumulative total across the conversation grows roughly with the square of the turn count unless you trim or summarize."
        },
        {
          type: "match",
          q: "Match each technique to the cost it reduces.",
          pairs: [
            ["Prompt caching of a stable prefix", "Repeated processing of an unchanged leading block of input tokens"],
            ["Summarizing old conversation turns", "Growth of history that must be resent on every turn"],
            ["Routing easy requests to a smaller model", "Per-token expense of using a large model where it is not needed"]
          ],
          explain: "These attack different parts of the bill: redundant prefill, history growth, and unit price. They compose well together."
        },
        {
          type: "mcq",
          q: "Which prompt structure best positions a long, unchanging instruction block for prefix caching?",
          choices: [
            "Static instructions first, then the variable user input at the end",
            "Variable user input first, then the static instructions at the end",
            "Static and variable content interleaved to keep them associated",
            "Static instructions repeated before and after the user input"
          ],
          answer: 0,
          explain: "Prefix caching matches from the start of the prompt, so anything that changes must come after everything that stays the same."
        }
      ]
    },
    {
      id: "l144",
      title: "Model selection: capability tiers and what each is for",
      intro: "Choosing a tier by task shape rather than by reflex.",
      questions: [
        {
          type: "mcq",
          q: "What is the most defensible way to choose a model tier for a new feature?",
          choices: [
            "Always start with the largest available model and never change",
            "Pick whichever model is cheapest and add retries when it fails",
            "Define an evaluation set for the task, then choose the smallest tier that passes it",
            "Match whatever tier a competitor is publicly reported to use"
          ],
          answer: 2,
          explain: "Tier choice is an empirical question about your task. An eval set turns it into a measurement instead of an argument, and it protects you when models change."
        },
        {
          type: "truefalse",
          q: "Small fast models are usually adequate for classification, extraction, and routing when the input is already in the prompt.",
          answer: true,
          explain: "These tasks are largely reading and mapping rather than open-ended reasoning, so smaller models often match larger ones at a fraction of the latency."
        },
        {
          type: "match",
          q: "Match each task to the capability tier it typically justifies.",
          pairs: [
            ["Labeling a short message into one of five fixed categories", "A small fast model, chosen for latency and unit cost"],
            ["Drafting and revising a long document with a house style", "A mid tier model balancing quality against cost"],
            ["Multi-step reasoning over a large codebase with tricky edge cases", "A frontier tier model, chosen for capability over price"]
          ],
          explain: "Tier should follow the reasoning depth the task genuinely requires, not the perceived importance of the feature."
        },
        {
          type: "mcq",
          q: "What is the strongest architectural argument for a cascade, where a small model runs first and escalates hard cases?",
          choices: [
            "It removes the need for an evaluation set entirely",
            "It guarantees the large model is never wrong on the escalated cases",
            "Most real traffic is easy, so the expensive model only runs on the minority that needs it",
            "Running two models in sequence is always faster than running one"
          ],
          answer: 2,
          explain: "Cascades pay off when the difficulty distribution is skewed toward easy. They add complexity and a routing decision that itself needs evaluation."
        },
        {
          type: "truefalse",
          q: "Once you have selected a model and shipped, the choice can be treated as permanent since the model behaves identically forever.",
          answer: false,
          explain: "Providers deprecate and update models, and behavior shifts across versions. Pin versions where you can and keep the eval suite runnable so you can requalify."
        },
        {
          type: "fill",
          q: "The practice of sending each request to a different model based on its difficulty or type is called ____.",
          answer: "routing",
          accept: ["routing", "model routing", "request routing"],
          explain: "Routing lets one product surface span several tiers, but the router itself is a component that can be wrong and needs its own measurement."
        },
        {
          type: "order",
          q: "Order the steps of a disciplined model selection process.",
          items: [
            "Write down the task and what a correct answer looks like",
            "Build an evaluation set from real examples, including hard ones",
            "Measure candidate tiers against that set",
            "Adopt the smallest tier that clears the quality bar and monitor it in production"
          ],
          explain: "Defining correctness first prevents the eval set from being written to flatter whichever model you already prefer."
        }
      ]
    }
  ]
});
