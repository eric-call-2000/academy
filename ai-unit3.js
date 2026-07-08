window.ACADEMY.addUnit("ai", {
  id: "unit-3",
  title: "How LLMs Actually Work",
  color: "#ff9600",
  icon: "⚙️",
  description: "A no-math peek under the hood: tokens, context, prediction, and why it hallucinates.",
  lessons: [
    {
      id: "l17",
      title: "Tokens: The Atoms of Text",
      intro: "Models read text as tokens, not letters, and those token counts drive both limits and cost.",
      questions: [
        {
          type: "mcq",
          q: "What is a token, in the context of language models?",
          choices: ["A chunk of text, often a word or piece of a word", "A single letter of the alphabet", "A complete sentence", "A password for the AI"],
          answer: 0,
          explain: "Models break text into tokens, which are chunks roughly the size of a word or part of a word, not single letters."
        },
        {
          type: "truefalse",
          q: "A token is exactly one word, no more and no less.",
          answer: false,
          explain: "A token is roughly three-quarters of a word on average, so long words can split into several tokens."
        },
        {
          type: "fill",
          q: "On average, one token is about three-quarters of a ____.",
          answer: "word",
          accept: ["word", "english word"],
          explain: "A handy rule of thumb: about 100 tokens is roughly 75 words of English."
        },
        {
          type: "mcq",
          q: "Why do token counts matter to everyday users?",
          choices: ["They drive usage limits and cost", "They change the font of the reply", "They pick which language you can use", "They make the AI reply faster or slower at random"],
          answer: 0,
          explain: "Both the length limits and the price of most AI tools are measured in tokens, so token count affects what you can do and pay."
        },
        {
          type: "truefalse",
          q: "Longer prompts and longer replies generally use more tokens.",
          answer: true,
          explain: "More text means more tokens, which is why concise prompts can save on both limits and cost."
        },
        {
          type: "mcq",
          q: "A common word like 'the' most likely becomes how many tokens?",
          choices: ["One token", "Five tokens", "One token per letter", "Zero tokens"],
          answer: 0,
          explain: "Frequent short words usually map to a single token, while rare or long words get split into several."
        },
        {
          type: "match",
          q: "Match each item to how it is typically tokenized.",
          pairs: [["A short common word", "Usually one token"], ["A long rare word", "Often several tokens"], ["A paragraph", "Many tokens"]],
          explain: "Tokenization gives common words their own token and splits uncommon or long words into pieces."
        },
        {
          type: "mcq",
          q: "Which habit helps you use fewer tokens?",
          choices: ["Writing clear, concise prompts", "Repeating yourself several times", "Pasting huge blocks you do not need", "Always asking for the longest possible answer"],
          answer: 0,
          explain: "Trimming unneeded text keeps token counts down, which saves on limits and cost."
        }
      ]
    },
    {
      id: "l18",
      title: "The Context Window",
      intro: "The context window is the model's working memory for one conversation, and because it is finite, very long chats can lose the beginning.",
      questions: [
        {
          type: "mcq",
          q: "What is the context window?",
          choices: ["The text the model can consider at once in a conversation", "A pop-up window in the app", "The model's permanent long-term memory", "The screen size of your device"],
          answer: 0,
          explain: "The context window is the working memory for a single conversation, holding the tokens the model can currently see."
        },
        {
          type: "truefalse",
          q: "The context window is finite, so a very long chat can push out the earliest messages.",
          answer: true,
          explain: "Once a conversation grows past the window, the oldest content can fall out of view and be effectively forgotten."
        },
        {
          type: "mcq",
          q: "Newer generations of models have generally moved toward what?",
          choices: ["Larger context windows", "No memory at all", "Windows that shrink over time", "Fixed one-sentence limits"],
          answer: 0,
          explain: "The trend is toward larger context windows, letting models hold more of a conversation or document at once."
        },
        {
          type: "fill",
          q: "The context window acts like the model's short-term working ____ for one chat.",
          answer: "memory",
          accept: ["memory"],
          explain: "Think of it as working memory: only what fits in the window can be actively used."
        },
        {
          type: "truefalse",
          q: "Information from last week's separate chat is automatically inside today's context window.",
          answer: false,
          explain: "By default each conversation has its own context, unless a tool adds memory features on top."
        },
        {
          type: "mcq",
          q: "In a very long conversation, what can happen to the model's grasp of the opening messages?",
          choices: ["It may lose track of them", "It memorizes them forever", "It gets faster because of them", "Nothing, windows are infinite"],
          answer: 0,
          explain: "Because the window is limited, early details can slip away as the chat gets long."
        },
        {
          type: "mcq",
          q: "Which is a smart move when an important detail was mentioned far earlier?",
          choices: ["Restate the key detail so it is fresh in context", "Assume the model always remembers everything", "Delete your whole history", "Switch to a smaller window"],
          answer: 0,
          explain: "Re-supplying a crucial detail keeps it inside the window where the model can use it."
        },
        {
          type: "match",
          q: "Match each phrase to what it describes.",
          pairs: [["Context window", "Working memory for one chat"], ["Finite", "Has a limit that content can exceed"], ["Restating a detail", "A way to keep it in view"]],
          explain: "The window is finite working memory, so restating important details keeps them usable."
        }
      ]
    },
    {
      id: "l19",
      title: "Next-Token Prediction",
      intro: "Everything a model writes comes from one simple loop: predict the next token, again and again.",
      questions: [
        {
          type: "mcq",
          q: "At its core, how does a language model generate text?",
          choices: ["By predicting the next token over and over", "By copying answers from a saved list", "By searching the live internet each time", "By asking a human to type each word"],
          answer: 0,
          explain: "Generation is a loop of predicting the most fitting next token, then repeating with that token added."
        },
        {
          type: "order",
          q: "Put the next-token generation loop in order.",
          items: ["Read the text so far", "Predict the next token", "Add that token to the text", "Repeat until done"],
          explain: "The model reads what exists, predicts one token, appends it, and loops until the response is complete."
        },
        {
          type: "truefalse",
          q: "A model writes a full paragraph in one single step, not token by token.",
          answer: false,
          explain: "It produces text one token at a time; the paragraph emerges from many prediction steps."
        },
        {
          type: "fill",
          q: "Text is generated one ____ at a time in a repeating loop.",
          answer: "token",
          accept: ["token"],
          explain: "Each pass through the loop adds a single token, which is why generation is called next-token prediction."
        },
        {
          type: "mcq",
          q: "Each new prediction is based on what?",
          choices: ["All the text so far, including tokens it just wrote", "Only the very last letter", "A random coin flip alone", "The user's name"],
          answer: 0,
          explain: "The model conditions each prediction on everything currently in context, including its own recent output."
        },
        {
          type: "truefalse",
          q: "Because it predicts token by token, a model can be interrupted or stopped mid-response.",
          answer: true,
          explain: "Since output is built incrementally, generation can be halted partway through at any token."
        },
        {
          type: "mcq",
          q: "What does the model actually choose at each step?",
          choices: ["A likely next token from many options", "The final sentence all at once", "A picture to draw", "The user's next question"],
          answer: 0,
          explain: "At every step it selects a probable next token, and the running result becomes the full answer."
        }
      ]
    },
    {
      id: "l20",
      title: "Temperature & Randomness",
      intro: "Sampling settings like temperature and top-p tune the balance between creative and consistent output.",
      questions: [
        {
          type: "mcq",
          q: "What does a higher temperature setting tend to do?",
          choices: ["Make output more varied and creative", "Make output shorter every time", "Turn off the model", "Guarantee the same answer twice"],
          answer: 0,
          explain: "Higher temperature increases randomness in token choices, producing more varied and creative text."
        },
        {
          type: "mcq",
          q: "What does a lower temperature tend to produce?",
          choices: ["More focused and consistent output", "More typos", "Longer answers only", "Random emojis"],
          answer: 0,
          explain: "Lower temperature makes the model favor the most likely tokens, giving steadier, more predictable results."
        },
        {
          type: "truefalse",
          q: "A high temperature is usually better for tasks that need exact, consistent answers.",
          answer: false,
          explain: "For precise or repeatable tasks, a lower temperature is safer; high temperature suits brainstorming."
        },
        {
          type: "fill",
          q: "The setting that controls how random token choices are is called ____.",
          answer: "temperature",
          accept: ["temperature"],
          explain: "Temperature is the classic dial for trading off creativity against consistency."
        },
        {
          type: "mcq",
          q: "What is top-p (nucleus) sampling?",
          choices: ["Limiting choices to the most likely tokens that add up to a probability cutoff", "Setting the maximum reply length", "Choosing the model size", "Turning captions on"],
          answer: 0,
          explain: "Top-p keeps only the smallest set of top tokens whose combined probability passes a threshold, then samples from those."
        },
        {
          type: "match",
          q: "Match the setting or value to its typical effect.",
          pairs: [["High temperature", "More creative, more varied"], ["Low temperature", "More consistent, more focused"], ["Top-p", "Limits choices to likely tokens"]],
          explain: "Temperature and top-p both shape how adventurous or safe the token choices are."
        },
        {
          type: "mcq",
          q: "For brainstorming lots of fresh ideas, which setting usually helps?",
          choices: ["A higher temperature", "The lowest possible temperature", "Turning the model off", "A tiny context window"],
          answer: 0,
          explain: "More randomness surfaces a wider range of ideas, which is handy for creative brainstorming."
        },
        {
          type: "truefalse",
          q: "Even at low temperature, most chat tools may still vary their wording somewhat between runs.",
          answer: true,
          explain: "Low temperature reduces but does not always fully remove variation, so replies can still differ a little."
        }
      ]
    },
    {
      id: "l21",
      title: "Training vs Inference",
      intro: "Training is the one-time, expensive learning phase; inference is running the finished model on each prompt, which is why models have a knowledge cutoff.",
      questions: [
        {
          type: "mcq",
          q: "What is training?",
          choices: ["The phase where the model learns patterns from lots of data", "Typing a prompt into the chat", "Reading the live news feed", "Saving your chat history"],
          answer: 0,
          explain: "Training is the costly, up-front process where the model learns from a large body of data."
        },
        {
          type: "mcq",
          q: "What is inference?",
          choices: ["Using the already-trained model to answer a prompt", "Teaching the model brand-new facts each time", "Deleting the model", "Downloading more data live"],
          answer: 0,
          explain: "Inference is running the finished model on your input; it does not retrain the model."
        },
        {
          type: "truefalse",
          q: "Chatting with a model normally updates its underlying knowledge in real time.",
          answer: false,
          explain: "Everyday chatting is inference and does not change the trained model's stored knowledge."
        },
        {
          type: "fill",
          q: "A model's knowledge ends around its training ____, so it may not know very recent events.",
          answer: "cutoff",
          accept: ["cutoff", "cut-off", "knowledge cutoff"],
          explain: "Because training happened at a point in time, events after the cutoff are outside what it learned."
        },
        {
          type: "match",
          q: "Match each term to its description.",
          pairs: [["Training", "Learning from data, done once"], ["Inference", "Answering a prompt with the trained model"], ["Knowledge cutoff", "The point after which it did not learn"]],
          explain: "Training builds the model, inference uses it, and the cutoff marks the edge of its learned knowledge."
        },
        {
          type: "mcq",
          q: "Why might a model not know about something that happened yesterday?",
          choices: ["It happened after the training cutoff", "It refuses to answer new questions", "It ran out of tokens", "Its temperature was too low"],
          answer: 0,
          explain: "Recent events after the training cutoff were not in the data the model learned from."
        },
        {
          type: "mcq",
          q: "How can a tool help a model discuss very recent events despite a cutoff?",
          choices: ["By connecting it to web search or fresh documents", "By raising the temperature", "By making prompts longer", "By retraining on the spot for you"],
          answer: 0,
          explain: "Feeding in current sources at inference time, such as web results, supplies knowledge past the cutoff."
        },
        {
          type: "truefalse",
          q: "Training a large model is generally far more expensive than answering a single prompt.",
          answer: true,
          explain: "Training is a massive one-time cost, while each inference is comparatively cheap."
        }
      ]
    },
    {
      id: "l22",
      title: "Transformers & Attention",
      intro: "The transformer architecture and its attention mechanism let a model weigh which words matter most, explained here with no math.",
      questions: [
        {
          type: "mcq",
          q: "What is the transformer, in AI?",
          choices: ["The neural network design behind most modern LLMs", "A type of power supply", "A robot that folds laundry", "A file format for images"],
          answer: 0,
          explain: "The transformer is the architecture that powers most of today's large language models."
        },
        {
          type: "mcq",
          q: "In plain terms, what does the attention mechanism do?",
          choices: ["Lets the model weigh which words matter for each other", "Turns the screen brightness up", "Stores your password", "Counts how many users are online"],
          answer: 0,
          explain: "Attention lets the model focus on the relevant words when interpreting each part of the text."
        },
        {
          type: "truefalse",
          q: "Attention helps a model treat every word as equally important all the time.",
          answer: false,
          explain: "The point of attention is the opposite: it lets some words matter more than others depending on context."
        },
        {
          type: "fill",
          q: "The mechanism that lets a transformer focus on the most relevant words is called ____.",
          answer: "attention",
          accept: ["attention"],
          explain: "Attention is the core idea that gives transformers their power to relate words across a sentence."
        },
        {
          type: "mcq",
          q: "In the sentence 'The dog chased its tail,' attention helps the model link 'its' to what?",
          choices: ["The dog", "The tail only", "A random word", "Nothing at all"],
          answer: 0,
          explain: "Attention connects 'its' back to 'dog,' resolving what the word refers to."
        },
        {
          type: "match",
          q: "Match each term to its plain-English meaning.",
          pairs: [["Transformer", "The architecture behind modern LLMs"], ["Attention", "Weighing which words matter"], ["Neural network", "A layered system that learns patterns"]],
          explain: "A transformer is a neural network that uses attention to weigh the importance of words."
        },
        {
          type: "truefalse",
          q: "The transformer architecture is used by many of today's leading language models.",
          answer: true,
          explain: "Transformers are the shared foundation of most current LLMs across companies."
        }
      ]
    },
    {
      id: "l23",
      title: "Embeddings: Meaning as Numbers",
      intro: "Turning text into vectors of numbers puts similar meanings near each other, which powers semantic search and RAG.",
      questions: [
        {
          type: "mcq",
          q: "What is an embedding?",
          choices: ["A representation of text as a list of numbers capturing meaning", "A picture pasted into a document", "A secret key for the model", "The title of a chat"],
          answer: 0,
          explain: "An embedding turns text into a vector of numbers that encodes its meaning."
        },
        {
          type: "truefalse",
          q: "In embedding space, texts with similar meanings sit close together.",
          answer: true,
          explain: "Closeness in embedding space reflects similarity in meaning, which is what makes them so useful."
        },
        {
          type: "mcq",
          q: "What does semantic search do that keyword search does not?",
          choices: ["Finds results by meaning, even with different words", "Only matches exact spelling", "Sorts files by date", "Changes your font"],
          answer: 0,
          explain: "Semantic search compares embeddings, so it can match related meaning even when the exact words differ."
        },
        {
          type: "fill",
          q: "Text turned into a list of numbers for a model is called an ____.",
          answer: "embedding",
          accept: ["embedding", "vector", "vector embedding"],
          explain: "Embeddings, also called vectors, are how meaning gets represented numerically."
        },
        {
          type: "mcq",
          q: "What does RAG (retrieval-augmented generation) do?",
          choices: ["Fetches relevant documents and feeds them to the model as context", "Retrains the model on your files", "Makes the model reply faster", "Deletes old chats"],
          answer: 0,
          explain: "RAG retrieves relevant text, often via embeddings, and adds it to the prompt so answers are grounded in it."
        },
        {
          type: "match",
          q: "Match each term to its role.",
          pairs: [["Embedding", "Meaning stored as numbers"], ["Semantic search", "Finding results by meaning"], ["RAG", "Retrieving documents to add as context"]],
          explain: "Embeddings enable semantic search, and RAG uses retrieval to ground the model's answers."
        },
        {
          type: "truefalse",
          q: "RAG can help a model answer questions about your own private documents.",
          answer: true,
          explain: "By retrieving your documents into context, RAG lets the model respond using content it was never trained on."
        },
        {
          type: "mcq",
          q: "Two sentences that mean nearly the same thing will have embeddings that are what?",
          choices: ["Near each other in vector space", "Exact opposites", "Always identical numbers", "Unrelated by design"],
          answer: 0,
          explain: "Similar meaning maps to nearby vectors, which is the whole basis for comparing texts by meaning."
        }
      ]
    },
    {
      id: "l24",
      title: "Why AI Hallucinates",
      intro: "Because models predict plausible text rather than verified truth, they can state wrong things with total confidence, so always check what matters.",
      questions: [
        {
          type: "mcq",
          q: "What is an AI hallucination?",
          choices: ["When the model states something false as if it were true", "When the app crashes", "When the screen flickers", "When you type too fast"],
          answer: 0,
          explain: "A hallucination is confident output that is simply wrong, because the model predicted plausible text, not verified fact."
        },
        {
          type: "truefalse",
          q: "Models optimize for producing plausible-sounding text, not for guaranteed truth.",
          answer: true,
          explain: "Since generation is prediction of likely text, plausibility and truth can come apart, causing hallucinations."
        },
        {
          type: "mcq",
          q: "Why can hallucinations be especially risky?",
          choices: ["The wrong answer often sounds confident and fluent", "The model always warns you first", "They only happen in other languages", "They are highlighted in red"],
          answer: 0,
          explain: "Hallucinations arrive in fluent, confident language, so they are easy to trust by mistake."
        },
        {
          type: "fill",
          q: "For any important fact, you should always ____ what the AI tells you.",
          answer: "verify",
          accept: ["verify", "check", "double-check", "fact-check"],
          explain: "Treat outputs as drafts to verify, especially for facts, figures, quotes, and citations."
        },
        {
          type: "mcq",
          q: "Which type of detail is most worth double-checking?",
          choices: ["Specific facts, numbers, quotes, and citations", "The greeting at the start", "The color of the text", "How polite the tone is"],
          answer: 0,
          explain: "Precise details like stats, names, and sources are where hallucinations do the most damage, so verify them."
        },
        {
          type: "truefalse",
          q: "A language model is conscious and truly knows when it is wrong.",
          answer: false,
          explain: "Today's models are not conscious; they predict text and cannot reliably sense their own mistakes."
        },
        {
          type: "match",
          q: "Match each idea to its meaning.",
          pairs: [["Hallucination", "Confident but false output"], ["Plausible text", "What the model actually optimizes for"], ["Verify", "Check important claims yourself"]],
          explain: "Models chase plausible text, which can hallucinate, so verifying important claims is on you."
        },
        {
          type: "mcq",
          q: "Which practice best reduces the harm of hallucinations?",
          choices: ["Cross-check key claims against trusted sources", "Assume every answer is perfect", "Only ever ask one question", "Turn temperature to zero and trust it fully"],
          answer: 0,
          explain: "Cross-checking against reliable sources catches confident errors before they cause problems."
        }
      ]
    }
  ]
});
