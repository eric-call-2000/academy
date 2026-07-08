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
      questions: [
        {
          type: "mcq",
          q: "What is the simplest way to describe artificial intelligence?",
          choices: [
            "Machines doing tasks that normally need human-like intelligence",
            "Any computer program that runs fast",
            "A robot with feelings and self-awareness",
            "A website that stores a lot of data"
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
            "Deleting old files automatically",
            "Making computers physically faster",
            "Blocking all internet ads"
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
      questions: [
        {
          type: "mcq",
          q: "How is machine learning different from traditional hand-coded programming?",
          choices: [
            "It learns patterns from data instead of following rules a person wrote",
            "It never needs a computer to run",
            "It always gives the exact same answer as a calculator",
            "It only works on phones"
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
            "Sorting emails using a fixed rule about the word sale",
            "Adding a column of numbers",
            "Copying data between two spreadsheets"
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
      questions: [
        {
          type: "mcq",
          q: "What does generative AI mainly do that predictive or analytical AI does not?",
          choices: [
            "It creates new content such as text, images, or audio",
            "It only sorts numbers into order",
            "It just measures how fast a computer runs",
            "It only deletes duplicate files"
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
            "It was the first computer ever built",
            "It replaced the internet entirely",
            "It removed the need for electricity"
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
      questions: [
        {
          type: "mcq",
          q: "What is a large language model (LLM) trained to do at its core?",
          choices: [
            "Predict likely language, one piece of text at a time",
            "Store every website word for word",
            "Physically build robots",
            "Connect two phones on a call"
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
            "They think and feel like humans",
            "They always know the current date and news",
            "They can never make a mistake"
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
            "It secretly calls a human for every answer",
            "It downloads a fresh brain for each question",
            "It only memorized a single textbook"
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
            "Writing a friendly email draft",
            "Summarizing a long article",
            "Describing what is in a photo"
          ],
          answer: 0,
          explain: "Exact math with clear rules is a perfect fit for deterministic software. The other tasks need flexible, human-like judgment that suits AI."
        },
        {
          type: "mcq",
          q: "Which task plays to the strengths of AI over rigid rules?",
          choices: [
            "Summarizing a messy customer review in plain language",
            "Returning the exact balance of a bank account",
            "Sorting numbers from low to high",
            "Checking if a password matches exactly"
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
            "The buttons on your keyboard",
            "The Wi-Fi settings on your router",
            "The color theme of the chat app"
          ],
          answer: 0,
          explain: "Parameters are the tunable internal values a model learns during training. More parameters can mean more capacity."
        },
        {
          type: "mcq",
          q: "What is the dataset in machine learning?",
          choices: [
            "The collection of data used to train or test a model",
            "A single button in the app",
            "The name of the AI company",
            "The speed of the internet connection"
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
      questions: [
        {
          type: "mcq",
          q: "Which everyday feature is powered by AI?",
          choices: [
            "Video recommendations that match your taste",
            "A light switch turning a bulb on",
            "A paper calendar on the wall",
            "A mechanical wind-up clock"
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
            "It flips a coin for each email",
            "It blocks every email with a picture",
            "It asks a human to read each message"
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
