window.ACADEMY.addUnit("ai", {
  id: "unit-1",
  title: "AI Foundations",
  color: "#58cc02",
  icon: "🤖",
  description: "What AI really is, how it learns, and the words everyone throws around.",
  lessons: [
    {
      id: "l1",
      title: "What Is Artificial Intelligence?",
      intro: "AI means machines doing tasks that normally need human-like intelligence, and it nests several ideas inside one another.",
      reading: {
        blocks: [
          { type: "section", head: "Why it matters", md: "AI is in the news every day, but the word gets stretched to cover almost anything with a screen. Before you can use AI well, or spot hype, you need a clean definition. Get this one right and every later lesson in the course clicks into place faster." },
          { type: "section", head: "The idea", md: "**Artificial intelligence** means machines doing tasks that normally need human-like intelligence: recognizing what is in a photo, understanding a sentence, translating a language, spotting a pattern in a mountain of data.\n\nSpeed alone does not count. A calculator is very fast, but it just follows fixed steps. A phone that picks out the faces in your photos is doing something we would normally credit to human perception, and that is the kind of task we call AI.\n\nThe field is easiest to picture as nested circles, like Russian dolls:\n\n- **Artificial intelligence** is the broad field of machines acting smart.\n- **Machine learning** sits inside it: systems that learn patterns from data instead of following hand-written rules.\n- **Deep learning** sits inside that: it uses artificial neural networks with many layers, loosely inspired by the brain. The word *deep* just refers to those layers.\n- **Generative AI** is the newest branch, built on deep learning. It creates new text, images, or audio, and it is the technology behind modern chatbots and image generators." },
          { type: "section", head: "A common mix-up", md: "Not all software is AI. Most programs follow fixed rules a person wrote down. Adding two numbers, sorting a list alphabetically, or copying a file from one folder to another are all rule-following jobs. Only systems that learn or reason in human-like ways count as AI.\n\nA handy test: if a task needs learned, human-like perception or judgment, it is probably AI. If a few fixed steps could do it every time, it is probably ordinary software." },
          { type: "section", head: "Try it on your own phone", md: "Next time you unlock your phone with your face, ask yourself which part is AI. Matching a face is a perception task that no short list of fixed rules could handle, so a learned model does it. Compare that with your phone's clock app, which just counts seconds by a simple rule. Both are software, but only one is doing something we would call intelligent." },
          { type: "section", head: "What you'll do next", md: "- Put the terms in order from the broadest field to the most specific.\n- Match each term to its short description.\n- Decide which everyday tasks are real examples of AI, and which are just rule-following." }
        ]
      },
      questions: [
        {
          type: "mcq",
          q: "What is the simplest way to describe artificial intelligence?",
          choices: [
            "Machines doing tasks that normally need human-like intelligence",
            "Any computer program that runs faster than a person can work by hand",
            "Software that follows a long list of if-then rules written by experts",
            "A machine that has become conscious and aware of its own thoughts"
          ],
          answer: 0,
          explain: "AI is about machines performing tasks we associate with human intelligence, like recognizing images or understanding language. Speed alone is not AI."
        },
        {
          type: "truefalse",
          q: "Machine learning is one branch that lives inside the bigger field of AI.",
          answer: true,
          explain: "AI is the broad field. Machine learning is a subset of it, and deep learning is a subset of machine learning."
        },
        {
          type: "order",
          q: "Order these from the broadest field to the most specific, largest first.",
          items: ["Artificial intelligence", "Machine learning", "Deep learning", "Generative AI"],
          explain: "AI contains machine learning, which contains deep learning, and modern generative AI is built on deep learning."
        },
        {
          type: "match",
          q: "Match each term to its short description.",
          pairs: [
            ["Artificial intelligence", "The broad field of machines acting smart"],
            ["Machine learning", "Systems that learn patterns from data"],
            ["Generative AI", "AI that creates new text, images, or audio"]
          ],
          explain: "Each term is narrower than the one before, and generative AI is a recent, creative branch."
        },
        {
          type: "fill",
          q: "Deep learning uses layered artificial neural ____ loosely inspired by the brain.",
          answer: "networks",
          accept: ["networks", "network", "nets"],
          explain: "Deep learning relies on neural networks with many layers, which is where the word deep comes from."
        },
        {
          type: "mcq",
          q: "Which task is a classic example of AI in action?",
          choices: [
            "Recognizing the objects in a photo",
            "Adding two numbers in a calculator",
            "Sorting a list alphabetically with fixed rules",
            "Copying a file from one folder to another"
          ],
          answer: 0,
          explain: "Recognizing objects in images needs learned, human-like perception, which is a hallmark of AI. The other tasks follow simple fixed rules."
        },
        {
          type: "truefalse",
          q: "All software is artificial intelligence.",
          answer: false,
          explain: "Most software follows fixed rules and is not AI. Only systems that learn or reason in human-like ways count as AI."
        },
        {
          type: "mcq",
          q: "Generative AI is best known for doing what?",
          choices: [
            "Creating new content like text, images, or audio",
            "Sorting existing records into predefined categories",
            "Speeding up the hardware a program runs on",
            "Storing large amounts of data for fast lookup"
          ],
          answer: 0,
          explain: "Generative AI produces new content. It is the branch behind chatbots and image generators."
        }
      ]
    },
    {
      id: "l2",
      title: "Machine Learning in Plain English",
      intro: "Machine learning finds patterns in data instead of following hand-coded rules, and it comes in three broad styles.",
      reading: {
        blocks: [
          { type: "section", head: "Why it matters", md: "Spam filters, movie recommendations, and chatbots all exist because of machine learning. Understanding it explains where AI gets its abilities, and where its flaws come from too." },
          { type: "section", head: "The idea", md: "In traditional programming, a person writes every rule by hand. **Machine learning** flips that around: you feed a system lots of data and it finds the patterns itself.\n\nThere are three broad styles, and the difference is how they use data and feedback:\n\n- **Supervised learning** uses labeled examples. Photos tagged *cat* or *dog*, or emails marked *spam* or *not spam*, teach the model the correct mapping from input to answer.\n- **Unsupervised learning** has no labels. The model hunts for hidden structure on its own, like grouping similar customers together.\n- **Reinforcement learning** improves by trial and error. The system gets rewards for good moves and penalties for bad ones, which is why it fits game-playing agents so well." },
          { type: "section", head: "How a model gets built", md: "The usual path is simple. You gather labeled data, you train the model on it, and then you check its accuracy on fresh inputs it has never seen. Only after that check do you trust it on real work.\n\nSkipping that last step is a classic mistake. A model that looks perfect on the examples it studied can still stumble on new ones." },
          { type: "section", head: "Data is everything", md: "A model learns whatever is in its data, including the bad parts. If the data reflects human or historical bias, the model can learn that bias and repeat it at scale. That is why data quality matters as much as the clever math on top of it.\n\nWhen you hear about an AI system behaving unfairly, the first question to ask is usually: what was it trained on?" },
          { type: "section", head: "A quick example", md: "Imagine building a spam filter. You collect thousands of emails and label each one as spam or not spam. The model studies them and picks up patterns on its own, without anyone writing a rule for every trick spammers use. Then you test it on brand-new emails to see how accurate it really is.\n\nThat is supervised learning from start to finish: labeled data in, a pattern-spotting model out, and a check before you trust it." },
          { type: "section", head: "What you'll do next", md: "- Match real situations to supervised, unsupervised, or reinforcement learning.\n- Put the steps of building a model in the right order.\n- Spot how biased data leads to biased results." }
        ]
      },
      questions: [
        {
          type: "mcq",
          q: "How is machine learning different from traditional hand-coded programming?",
          choices: [
            "It learns patterns from data instead of following rules a person wrote",
            "It runs the same hand-written rules, just on much faster, more powerful hardware",
            "It stores every possible answer in advance and looks the right one up",
            "It needs no data at all, only a well-written description of the task"
          ],
          answer: 0,
          explain: "In machine learning, you feed the system data and it learns the patterns itself, rather than a programmer writing every rule by hand."
        },
        {
          type: "match",
          q: "Match each learning style to how it works.",
          pairs: [
            ["Supervised learning", "Learns from labeled examples"],
            ["Unsupervised learning", "Finds structure in unlabeled data"],
            ["Reinforcement learning", "Learns by trial and error with rewards"]
          ],
          explain: "These are the three broad styles of machine learning, each using data and feedback differently."
        },
        {
          type: "fill",
          q: "In ____ learning, the training data comes with labeled answers the model tries to match.",
          answer: "supervised",
          accept: ["supervised"],
          explain: "Supervised learning uses labeled examples, like photos tagged cat or dog, so the model learns the correct mapping."
        },
        {
          type: "truefalse",
          q: "Unsupervised learning groups or organizes data without being given the right answers in advance.",
          answer: true,
          explain: "Unsupervised learning looks for hidden structure, like clustering similar customers, without labeled answers."
        },
        {
          type: "mcq",
          q: "Which situation best fits reinforcement learning?",
          choices: [
            "An agent learning to play a game by getting rewards for good moves",
            "Sorting emails into folders using thousands of examples labeled by people",
            "Grouping customers into segments when no labels exist at all",
            "Predicting next month's sales from a table of past monthly figures"
          ],
          answer: 0,
          explain: "Reinforcement learning improves through trial and error, using rewards and penalties as feedback, which fits game-playing agents well."
        },
        {
          type: "order",
          q: "Order a simple supervised learning workflow from first step to last.",
          items: ["Collect labeled data", "Train the model on it", "Test how well it predicts", "Use it on new data"],
          explain: "You gather labeled data, train, then check accuracy before trusting the model on fresh inputs."
        },
        {
          type: "truefalse",
          q: "Machine learning models can pick up biases that exist in their training data.",
          answer: true,
          explain: "If the data reflects human or historical bias, the model can learn and repeat that bias, so data quality matters."
        },
        {
          type: "mcq",
          q: "A spam filter that improves from examples of spam and not-spam emails is an example of what?",
          choices: [
            "Supervised learning",
            "Reinforcement learning",
            "A hand-coded rule with no learning",
            "Unsupervised learning"
          ],
          answer: 0,
          explain: "Labeled examples of spam and not-spam make this supervised learning."
        }
      ]
    },
    {
      id: "l3",
      title: "The Rise of Generative AI",
      intro: "Generative AI creates brand-new content, and a late-2022 chatbot moment put it into everyone's hands at once.",
      reading: {
        blocks: [
          { type: "section", head: "Why it matters", md: "For years, most AI worked quietly behind the scenes, sorting and scoring things. Generative AI changed that. Now AI makes things, and you talk to it directly. Knowing the difference helps you pick the right kind of tool." },
          { type: "section", head: "Two kinds of AI", md: "**Predictive** (or analytical) AI works on existing data. It classifies, scores, or forecasts: *Is this transaction fraud? Will this customer cancel? What is the likely price next month?* It labels or predicts, but it does not create anything new.\n\n**Generative AI** produces brand-new content. It can write text, and it can also create images, music, speech, and even video. It is the branch behind today's chatbots and image generators." },
          { type: "section", head: "The moment everything changed", md: "In late 2022, OpenAI launched **ChatGPT**, and generative AI reached a mass audience almost overnight. The underlying technology was powerful, but the real spark was the interface. A friendly chat window let ordinary people use advanced AI with no technical skills at all. Adoption exploded because anyone could simply type a question.\n\nSince then, many companies have built their own versions." },
          { type: "section", head: "Who makes what", md: "It helps to know the main names:\n\n- **OpenAI** makes ChatGPT, which runs on its GPT models.\n- **Anthropic** makes Claude.\n- **Google** makes Gemini.\n\nEach product runs on its company's own models, so they can behave differently even when they look alike." },
          { type: "section", head: "Seeing the difference", md: "Picture a clothing store with years of sales data. A **predictive** model studies the past and forecasts how many jackets will sell next month. A **generative** model could write the product description for each jacket, or draw an image for the ad.\n\nOne answers *what is likely to happen?* The other answers *make me something new.* Both learn from data, and many modern tools combine the two. The labels help you ask the right question: am I trying to forecast or classify something, or create something?\n\nA useful rule of thumb: if the output is a number, a label, or a yes-or-no, it is probably predictive. If the output is a fresh paragraph, picture, or sound, it is probably generative." },
          { type: "section", head: "What you'll do next", md: "- Tell generative AI apart from predictive and analytical AI.\n- Match each company to its product.\n- Explain why a simple chat interface drove such fast adoption." }
        ]
      },
      questions: [
        {
          type: "mcq",
          q: "What does generative AI mainly do that predictive or analytical AI does not?",
          choices: [
            "It creates new content such as text, images, or audio",
            "It forecasts future values from historical data trends",
            "It sorts existing items into categories it has learned",
            "It scores how likely a customer is to cancel a service"
          ],
          answer: 0,
          explain: "Generative AI produces new content. Predictive or analytical AI mostly classifies, scores, or forecasts existing data."
        },
        {
          type: "truefalse",
          q: "A model that predicts whether a loan will be repaid is analytical AI, not generative AI.",
          answer: true,
          explain: "Predicting an outcome from data is analytical or predictive AI. It scores inputs rather than creating new content."
        },
        {
          type: "match",
          q: "Match each AI type to an example task.",
          pairs: [
            ["Generative AI", "Writing a poem from a prompt"],
            ["Predictive AI", "Forecasting next month's sales"],
            ["Analytical AI", "Classifying an email as spam"]
          ],
          explain: "Generative AI makes new things, while predictive and analytical AI label or forecast from existing data."
        },
        {
          type: "fill",
          q: "The chatbot that popularized generative AI for the public in late 2022 was ____.",
          answer: "chatgpt",
          accept: ["chatgpt", "chat gpt"],
          explain: "ChatGPT, made by OpenAI, launched in late 2022 and rapidly brought generative AI to a mass audience."
        },
        {
          type: "mcq",
          q: "Which company makes ChatGPT?",
          choices: ["OpenAI", "Anthropic", "Google", "Meta"],
          answer: 0,
          explain: "OpenAI makes ChatGPT, which runs on its GPT models. Anthropic makes Claude, and Google makes Gemini."
        },
        {
          type: "truefalse",
          q: "Generative AI can produce images and audio, not only text.",
          answer: true,
          explain: "Generative models can create images, music, speech, and even video, not just written text."
        },
        {
          type: "mcq",
          q: "Why was the late-2022 chatbot moment such a big deal?",
          choices: [
            "It made powerful generative AI easy to use through a simple chat box",
            "It was the first time a neural network had ever been trained on text",
            "It showed that AI models no longer make factual mistakes of any kind",
            "It proved that computers had become conscious and could truly think"
          ],
          answer: 0,
          explain: "A friendly chat interface let ordinary people use advanced AI without any technical skills, driving huge adoption."
        }
      ]
    },
    {
      id: "l4",
      title: "What Is a Large Language Model?",
      intro: "A large language model is trained on huge amounts of text to predict language, and it powers chatbots like Claude and ChatGPT.",
      reading: {
        blocks: [
          { type: "section", head: "Why it matters", md: "Claude, ChatGPT, and Gemini are all built on large language models. Knowing how an LLM works explains both why it is so impressive and why it sometimes gets things confidently wrong." },
          { type: "section", head: "The idea", md: "A **large language model**, or LLM, is trained on a huge, broad collection of text. From that text it learns the patterns of language: which words and ideas tend to follow which.\n\nIts core skill is surprisingly simple: **predicting the most plausible next piece of language.** Do that over and over and you get a conversation, an essay, or a block of code. The breadth of the training text is what gives the model such wide-ranging patterns to draw on." },
          { type: "section", head: "Plausible is not the same as true", md: "Here is the key consequence. An LLM aims for language that *sounds* right, not for guaranteed truth. That leads to **hallucinations**: confident output that is simply incorrect. It happens because the model is predicting plausible text, not looking facts up and verifying them.\n\nLLMs can also be out of date, since they learn from text collected up to a point in time. And despite how fluent they sound, they are powerful text predictors, not conscious minds." },
          { type: "section", head: "A habit worth building", md: "Treat an LLM like a fast, well-read helper who occasionally makes things up. Use it freely for drafting, brainstorming, and explaining. But always double-check anything important, especially names, numbers, dates, and quotes, before you rely on it.\n\nThe chatbots you meet each run on a company's own LLMs: Claude runs on Anthropic's models, and ChatGPT runs on OpenAI's GPT models." },
          { type: "section", head: "A simple example", md: "Give an LLM the start of a sentence like *The capital of France is* and the most plausible next word is *Paris*. It gets this right because that pattern shows up constantly in its training text.\n\nNow ask about something obscure, with few examples to learn from. The model still produces fluent, confident language, because producing plausible text is its whole job. Whether the words happen to be correct is a separate matter, and that gap is where hallucinations come from." },
          { type: "section", head: "What you'll do next", md: "- Define what an LLM learns from and what it predicts.\n- Explain what a hallucination is and why it happens.\n- Match each chatbot to the company and models behind it." }
        ]
      },
      questions: [
        {
          type: "mcq",
          q: "What is a large language model (LLM) trained to do at its core?",
          choices: [
            "Predict likely language, one piece of text at a time",
            "Store every web page it reads word for word for later lookup",
            "Look up verified facts in a built-in encyclopedia",
            "Follow grammar rules that linguists wrote by hand"
          ],
          answer: 0,
          explain: "An LLM learns from huge amounts of text and predicts the most plausible next piece of language. That prediction skill powers chat responses."
        },
        {
          type: "match",
          q: "Match each chatbot to the company that makes it.",
          pairs: [
            ["Claude", "Anthropic"],
            ["ChatGPT", "OpenAI"],
            ["Gemini", "Google"]
          ],
          explain: "Anthropic makes Claude, OpenAI makes ChatGPT, and Google makes Gemini. Each runs on that company's own LLMs."
        },
        {
          type: "truefalse",
          q: "Because LLMs predict plausible text, they can sometimes state false things confidently, often called hallucinations.",
          answer: true,
          explain: "An LLM aims for plausible-sounding language, not guaranteed truth, so it can hallucinate. Always double-check important facts."
        },
        {
          type: "fill",
          q: "When an LLM makes up something that sounds right but is false, it is called a ____.",
          answer: "hallucination",
          accept: ["hallucination", "hallucinations"],
          explain: "A hallucination is confident but incorrect output. It happens because the model predicts plausible text, not verified facts."
        },
        {
          type: "mcq",
          q: "Which statement about LLMs is accurate?",
          choices: [
            "They predict text and are not conscious or self-aware",
            "They understand and feel things the way people do",
            "They always know today's date and the latest news",
            "They check every answer against a database of verified facts"
          ],
          answer: 0,
          explain: "LLMs are powerful text predictors, but they are not conscious and can be wrong or out of date."
        },
        {
          type: "truefalse",
          q: "Claude and ChatGPT are both built on large language models.",
          answer: true,
          explain: "Both chatbots run on LLMs. Claude runs on Anthropic's models and ChatGPT runs on OpenAI's GPT models."
        },
        {
          type: "mcq",
          q: "Why can an LLM answer questions on so many topics?",
          choices: [
            "It was trained on a very large and broad collection of text",
            "It searches the live internet before answering every question",
            "It hands each question to a team of human experts behind the scenes",
            "It loads a separate specialist model for each topic you ask about"
          ],
          answer: 0,
          explain: "Training on a huge, broad text collection gives the model wide-ranging language patterns to draw on."
        }
      ]
    },
    {
      id: "l5",
      title: "AI vs Traditional Software",
      intro: "Traditional software follows exact deterministic rules, while AI makes probabilistic predictions that can vary.",
      reading: {
        blocks: [
          { type: "section", head: "Why it matters", md: "Knowing when to reach for AI, and when not to, saves time and prevents mistakes. The two kinds of tools behave very differently, and the difference is predictability." },
          { type: "section", head: "Two ways to behave", md: "**Traditional software is deterministic.** Give it the same input and it produces the same output, every time. That is what *deterministic* means: predictable and repeatable. A calculator is the classic example.\n\n**AI is probabilistic.** It weighs probabilities and makes predictions, so the same prompt can produce different responses on different tries. That variation is a feature when you want creativity and a problem when you want an exact answer." },
          { type: "section", head: "Picking the right tool", md: "Each approach has its place:\n\n- **Deterministic code** is best for exact, rule-driven work: precise math, exact lookups, and comparisons where there is one right answer.\n- **AI** shines on messy, flexible tasks, like understanding natural language, summarizing a long email, or drafting text, where rigid rules would break.\n\nThey are partners, not rivals. Many good products use AI to understand what you want, then hand the exact work to ordinary code." },
          { type: "section", head: "A trust rule of thumb", md: "AI can sound sure while being wrong. For exact arithmetic, a calculator is more trustworthy than a chatbot. Fixed-rule tools are the most predictable, while a creative AI response is the most variable.\n\nWhen the cost of a wrong answer is high, lean toward the deterministic tool, or verify the AI's answer with one. A good habit is to let AI draft or explain, and let deterministic tools do the final counting." },
          { type: "section", head: "Two tools, side by side", md: "Ask a calculator for 17 times 24 and you get 408 every single time. Ask a chatbot to write a short birthday message three times and you get three different versions, all perfectly good.\n\nThe calculator's sameness is exactly what you want for math. The chatbot's variety is exactly what you want for writing. The trouble starts when you swap the jobs: asking an AI for an exact calculation or lookup, where a fluent but wrong answer is easy to miss." },
          { type: "section", head: "What you'll do next", md: "- Sort tasks into ones that suit deterministic software and ones that suit AI.\n- Explain why the same prompt can give different answers.\n- Choose the more trustworthy tool for exact work." }
        ]
      },
      questions: [
        {
          type: "match",
          q: "Match each approach to how it behaves.",
          pairs: [
            ["Traditional software", "Follows fixed, deterministic rules"],
            ["AI model", "Makes probabilistic predictions"]
          ],
          explain: "Rule-based software gives the same output every time, while AI weighs probabilities and can vary."
        },
        {
          type: "truefalse",
          q: "Giving an AI chatbot the same prompt twice can produce two different answers.",
          answer: true,
          explain: "Because AI outputs are probabilistic, the same prompt can yield different responses. Traditional programs usually do not vary like this."
        },
        {
          type: "fill",
          q: "Traditional software is ____, meaning the same input always gives the same output.",
          answer: "deterministic",
          accept: ["deterministic"],
          explain: "Deterministic means predictable and repeatable. Classic rule-based programs behave this way, unlike probabilistic AI."
        },
        {
          type: "mcq",
          q: "Which task is usually better suited to traditional rule-based software than to AI?",
          choices: [
            "Calculating exact sales tax on a purchase",
            "Drafting a friendly reply to a customer email",
            "Summarizing the main points of a long article",
            "Describing what appears in a vacation photo"
          ],
          answer: 0,
          explain: "Exact math with clear rules is a perfect fit for deterministic software. The other tasks need flexible, human-like judgment that suits AI."
        },
        {
          type: "mcq",
          q: "Which task plays to the strengths of AI over rigid rules?",
          choices: [
            "Summarizing a messy customer review in plain language",
            "Returning the exact balance of a customer's bank account",
            "Sorting a list of order numbers from lowest to highest",
            "Checking whether an entered password matches exactly"
          ],
          answer: 0,
          explain: "Understanding messy, natural language is where AI shines. Exact lookups and comparisons are better left to deterministic code."
        },
        {
          type: "truefalse",
          q: "AI is the right tool for every problem, so rule-based software is now obsolete.",
          answer: false,
          explain: "Deterministic software is still best for exact, rule-driven tasks. AI and traditional software each have their place."
        },
        {
          type: "order",
          q: "Order these outputs from most predictable to least predictable.",
          items: ["A calculator adding 2 plus 2", "A rule-based tax form", "An AI writing a short story"],
          explain: "Fixed-rule tools are the most predictable, while a creative AI response is the most variable."
        },
        {
          type: "mcq",
          q: "A key limitation of AI compared to a calculator is that AI can be:",
          choices: [
            "Confidently wrong on facts",
            "Unable to produce any text",
            "Only usable once per day",
            "Incapable of reading English"
          ],
          answer: 0,
          explain: "AI can sound sure while being wrong, so a calculator is more trustworthy for exact arithmetic."
        }
      ]
    },
    {
      id: "l6",
      title: "Narrow AI, AGI & Superintelligence",
      intro: "Today's AI is narrow and good at specific tasks, while AGI and superintelligence remain hypothetical and are not here yet.",
      reading: {
        blocks: [
          { type: "section", head: "Why it matters", md: "Headlines throw around words like AGI and superintelligence. It helps to know what is real today and what is still speculation, so you can read the news with a clear head." },
          { type: "section", head: "Three levels", md: "**Narrow AI** is strong at particular tasks but not broadly capable. Being an expert at one thing and nothing else is exactly what *narrow* means. Everything we use today, including chatbots, image generators, and recommendation systems, is narrow AI.\n\n**AGI**, or artificial general intelligence, is a hypothetical AI that could handle any intellectual task a human can. It does not exist yet.\n\n**Superintelligence** goes a step further: an AI far beyond human ability. It is the most speculative idea of the three." },
          { type: "section", head: "Narrow does not mean weak", md: "The word *narrow* can mislead. Today's systems can be remarkably capable inside their areas. It just means they are not broadly human-level across everything. The gap between impressive in one area and generally intelligent is the whole point." },
          { type: "section", head: "Keep a healthy skepticism", md: "Hype tends to outpace reality. When a headline or ad claims AI is about to be human-level at everything, pause and ask what evidence supports it. Look for demonstrations, tests, and independent checks instead of marketing language.\n\nSkepticism is not the same as dismissing AI. It simply means separating what is real today from what is possible someday.\n\nA few questions help: Who is making the claim? What exactly can the system do today? Has anyone independent tested it? Real progress usually survives those questions easily." },
          { type: "section", head: "Where today's AI sits", md: "Think of a system that plays a board game at an incredible level. It is impressive, but it cannot plan your week, write an email, or cook dinner. A chatbot can write poems and explain code, yet it still makes mistakes and has no general, human-level understanding of everything it discusses.\n\nThat is narrow AI: real, useful, and sometimes dazzling, but built for particular jobs. Broad, flexible, human-level ability across everything is the thing AGI would add, and nobody has built it yet." },
          { type: "section", head: "What you'll do next", md: "- Decide which of these levels are real today and which are hypothetical.\n- Define AGI in your own words.\n- Put the three levels in order from real to most speculative." }
        ]
      },
      questions: [
        {
          type: "mcq",
          q: "What kind of AI exists today?",
          choices: [
            "Narrow AI that is good at specific tasks",
            "General AI that matches humans at everything",
            "Superintelligence beyond all humans",
            "Fully conscious machines"
          ],
          answer: 0,
          explain: "Everything we use today is narrow AI, strong at particular tasks. AGI and superintelligence do not exist yet."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Narrow AI", "Skilled at specific tasks, exists today"],
            ["AGI", "Hypothetical human-level ability across tasks"],
            ["Superintelligence", "Hypothetical intelligence far beyond humans"]
          ],
          explain: "Only narrow AI is real today. AGI and superintelligence are still hypothetical ideas."
        },
        {
          type: "fill",
          q: "AGI stands for artificial general ____.",
          answer: "intelligence",
          accept: ["intelligence"],
          explain: "AGI means artificial general intelligence, a hypothetical AI that could handle any intellectual task a human can."
        },
        {
          type: "truefalse",
          q: "AGI has already been achieved and is widely available today.",
          answer: false,
          explain: "AGI does not exist yet. Current systems are narrow AI, capable in specific areas but not broadly human-level."
        },
        {
          type: "truefalse",
          q: "A chess engine that plays brilliant chess but cannot do anything else is an example of narrow AI.",
          answer: true,
          explain: "Being expert at one task and nothing else is exactly what narrow AI means."
        },
        {
          type: "order",
          q: "Order these from what exists now to the most speculative future idea.",
          items: ["Narrow AI", "AGI", "Superintelligence"],
          explain: "Narrow AI is real today, AGI is a hypothetical next step, and superintelligence is the most speculative."
        },
        {
          type: "mcq",
          q: "What is a smart way to treat bold claims that AGI is arriving next week?",
          choices: [
            "Stay skeptical and look for solid evidence",
            "Believe every headline instantly",
            "Assume today's chatbots are already superintelligent",
            "Ignore all AI news forever"
          ],
          answer: 0,
          explain: "Hype outpaces reality, so healthy skepticism and evidence help you separate marketing from fact."
        }
      ]
    },
    {
      id: "l7",
      title: "Key AI Vocabulary",
      intro: "A handful of core words show up everywhere in AI, and knowing them makes the rest much easier.",
      reading: {
        blocks: [
          { type: "section", head: "Why it matters", md: "A handful of core words show up in nearly every AI conversation. Learn them once and articles, tools, and tutorials become much easier to follow." },
          { type: "section", head: "The key terms", md: "- **Token:** a small piece of text a model processes, like a word or part of a word. Longer inputs use more tokens.\n- **Parameter:** a tunable internal value the model learns during training. More parameters can mean more capacity.\n- **Dataset:** the body of examples used to train and evaluate a model. Its quality strongly affects the results.\n- **Prompt:** your input to the model, the whole instruction you give. Clearer prompts usually lead to better answers." },
          { type: "section", head: "Training versus inference", md: "These two words describe two different moments in a model's life.\n\n**Training** teaches the model from data, ahead of time. It is the heavy lifting that happens before you ever see the product.\n\n**Inference** is running the finished model to get an answer. Every time you send a prompt and read the reply, you are doing inference." },
          { type: "section", head: "How it fits together", md: "Put the words into one picture: people collect a **dataset**, use it to **train** a model whose **parameters** get tuned, and then you send **prompts** and the model does **inference**, reading and writing in **tokens**.\n\nA prompt is the whole instruction you give, while a token is one small piece of text the model works with. Mixing those two up is a common beginner slip.\n\nIf you remember only one thing, remember the sequence: data first, then training, then prompts and inference." },
          { type: "section", head: "Why the words matter", md: "These terms are not just trivia. They shape how you use AI.\n\nA long document uses far more **tokens** than a short question, so there is more for the model to process. The quality of the **dataset** strongly affects the results, so messy or biased data tends to produce messy or biased answers.\n\nAnd the **prompt** is the part you control. Compare *summarize this* with *summarize this email in three bullet points for my manager*. The clearer version usually gets the better answer." },
          { type: "section", head: "What you'll do next", md: "- Match each term to its meaning.\n- Put the steps from data to answer in order.\n- Tell a prompt apart from a token." }
        ]
      },
      questions: [
        {
          type: "match",
          q: "Match each core AI term to its meaning.",
          pairs: [
            ["Model", "The trained system that makes predictions"],
            ["Training", "Teaching the model using data"],
            ["Inference", "Using the trained model to get an answer"],
            ["Prompt", "The input or instruction you give the model"]
          ],
          explain: "These four terms describe the model, how it learns, how it responds, and how you talk to it."
        },
        {
          type: "fill",
          q: "A ____ is a chunk of text, often a word or piece of a word, that a model reads and generates.",
          answer: "token",
          accept: ["token", "tokens"],
          explain: "Models process language in tokens, which are small pieces of text. Longer inputs use more tokens."
        },
        {
          type: "mcq",
          q: "What are a model's parameters?",
          choices: [
            "The internal values it adjusts during training",
            "The instructions you type into the chat box each time",
            "The settings you choose, like reply length",
            "The examples in the data it was trained on"
          ],
          answer: 0,
          explain: "Parameters are the tunable internal values a model learns during training. More parameters can mean more capacity."
        },
        {
          type: "mcq",
          q: "What is the dataset in machine learning?",
          choices: [
            "The collection of data used to train or test a model",
            "The set of rules a programmer writes to guide the model",
            "The internal numbers a model adjusts while it learns",
            "The list of prompts users type into a finished model"
          ],
          answer: 0,
          explain: "The dataset is the body of examples used to train and evaluate a model. Its quality strongly affects results."
        },
        {
          type: "truefalse",
          q: "Training happens once to build the model, while inference happens every time you use it.",
          answer: true,
          explain: "Training teaches the model from data ahead of time. Inference is running that finished model to get an answer."
        },
        {
          type: "order",
          q: "Order these steps in the life of a model from first to last.",
          items: ["Gather a dataset", "Train the model", "Run inference on a prompt", "Read the model's answer"],
          explain: "You collect data, train, then send prompts for inference and read the results."
        },
        {
          type: "fill",
          q: "The instruction or question you type for the model is called a ____.",
          answer: "prompt",
          accept: ["prompt", "prompts"],
          explain: "A prompt is your input to the model. Clearer prompts usually lead to better answers."
        },
        {
          type: "truefalse",
          q: "A prompt and a token mean exactly the same thing.",
          answer: false,
          explain: "A prompt is the whole instruction you give, while a token is one small piece of text the model processes."
        }
      ]
    },
    {
      id: "l8",
      title: "AI Around You",
      intro: "You already use AI many times a day, often without noticing it.",
      reading: {
        blocks: [
          { type: "section", head: "Why it matters", md: "AI is not just something from labs and headlines. You probably use it many times a day without noticing. Spotting it in daily life makes the ideas from earlier lessons feel concrete." },
          { type: "section", head: "AI in your day", md: "Here are some places it hides:\n\n- **Recommendations:** streaming and shopping apps learn your preferences from data to suggest what you might like.\n- **Predictive text:** your keyboard uses a language model to guess your next word.\n- **Voice assistants:** speech recognition, an AI technique, turns spoken words into actions.\n- **Spam filters:** they learn from labeled examples of junk and not junk, which is supervised learning.\n- **Face unlock:** your phone captures an image, an AI model compares it to the saved one, and a match unlocks the device.\n- **Live rerouting:** map apps predict traffic and pick a faster path.\n\nNone of these needed you to type a prompt. AI often works quietly in the background, which is exactly why it is easy to miss." },
          { type: "section", head: "The pattern underneath", md: "Look closely and each example does one of three things: it **classifies** something, **predicts** something, or **recognizes** something. That is the same machine learning you met earlier, doing small useful jobs inside everyday tools.\n\nIt is also a reminder that AI is far from a lab curiosity. It lives in your maps, your inbox, your keyboard, and your camera.\n\nThe same idea scales up. The chatbot you use for writing and the filter that guards your inbox are cousins: both learned patterns from data, and both can be wrong in ways worth watching for." },
          { type: "section", head: "Try spotting it", md: "Here is a small challenge: for one day, notice every time something predicts, recognizes, or recommends. Your keyboard finishing a word, your inbox hiding a junk message, and a map app suggesting a quicker route all count.\n\nOnce you start looking, you will find AI everywhere. It also helps to remember these tools are not perfect. A spam filter can misfile a real email, and a recommendation system only knows what your past behavior shows. Seeing the technique behind a feature helps you judge when to trust it and when to double-check." },
          { type: "section", head: "What you'll do next", md: "- Name the AI technique behind familiar features.\n- Identify what kind of learning a spam filter uses.\n- Put the steps of face unlock in order." }
        ]
      },
      questions: [
        {
          type: "mcq",
          q: "Which everyday feature is powered by AI?",
          choices: [
            "Video recommendations that match your taste",
            "A timer that turns the lights off at 11 p.m.",
            "A calculator app adding up a list of prices",
            "An alarm clock set to ring at the same time"
          ],
          answer: 0,
          explain: "Recommendation systems learn your preferences from data, which is a common everyday use of AI."
        },
        {
          type: "match",
          q: "Match each everyday tool to the AI job it does.",
          pairs: [
            ["Spam filter", "Sorts junk out of your inbox"],
            ["Maps routing", "Finds a fast route through traffic"],
            ["Face unlock", "Recognizes your face to open the phone"]
          ],
          explain: "Each of these familiar features relies on AI to classify, predict, or recognize."
        },
        {
          type: "truefalse",
          q: "The autocomplete that suggests your next word is a form of AI.",
          answer: true,
          explain: "Predictive text and autocomplete use language models to guess your next word, a small but common form of AI."
        },
        {
          type: "fill",
          q: "Voice assistants such as Siri and Alexa use AI to turn your ____ into commands.",
          answer: "speech",
          accept: ["speech", "voice", "words"],
          explain: "Voice assistants use speech recognition, an AI technique, to convert spoken words into actions."
        },
        {
          type: "mcq",
          q: "How does a spam filter typically decide what is junk?",
          choices: [
            "It learns patterns from many labeled spam and non-spam emails",
            "It blocks only messages from a fixed list of banned addresses",
            "It deletes every email that contains a link or an attachment",
            "It flags any message longer than a set number of characters"
          ],
          answer: 0,
          explain: "Spam filters learn from labeled examples, a supervised learning task, to spot junk automatically."
        },
        {
          type: "truefalse",
          q: "AI is only found in expensive research labs and never in ordinary apps.",
          answer: false,
          explain: "AI is all around us in maps, inboxes, keyboards, and cameras. It is far from lab-only."
        },
        {
          type: "order",
          q: "Order what happens when your phone uses face unlock, first to last.",
          items: ["The camera captures your face", "The AI compares it to your saved face", "The phone decides if it matches", "The screen unlocks"],
          explain: "Face unlock captures an image, an AI model compares it, and a match unlocks the device."
        },
        {
          type: "mcq",
          q: "Which of these is the clearest example of AI helping you daily?",
          choices: [
            "Maps rerouting you around a traffic jam",
            "A stapler joining two pages",
            "A ruler measuring a line",
            "A doorbell that only rings when pressed"
          ],
          answer: 0,
          explain: "Live rerouting uses AI to predict traffic and pick a faster path, a helpful everyday example."
        }
      ]
    }
  ]
});
