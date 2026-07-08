window.ACADEMY.addUnit("ai", {
  id: "unit-16",
  title: "AI Safety, Ethics & Smart Use",
  color: "#f25f9c",
  icon: "🛡️",
  description: "Being a sharp, responsible AI user — and how Claude is built to be safe.",
  lessons: [
    {
      id: "l121",
      title: "Hallucinations & Verifying Output",
      intro: "AI can sound completely sure and still be wrong, so learn to double-check facts, numbers, and citations.",
      questions: [
        {
          type: "mcq",
          q: "What does it mean when an AI 'hallucinates'?",
          choices: [
            "It makes up information that sounds plausible but is false",
            "It refuses to answer your question",
            "It becomes conscious for a moment",
            "It slows down and lags"
          ],
          answer: 0,
          explain: "A hallucination is confidently stated but made-up content. LLMs predict plausible text, so they can invent facts, quotes, or sources."
        },
        {
          type: "truefalse",
          q: "If an AI answer sounds confident and detailed, that guarantees it is correct.",
          answer: false,
          explain: "Confidence and detail are not proof. A model can be fluent and wrong at the same time, so verify important claims."
        },
        {
          type: "mcq",
          q: "Which type of AI output is MOST worth double-checking?",
          choices: [
            "Specific facts, statistics, and citations",
            "A brainstorm of story ideas",
            "A rough outline you will rewrite anyway",
            "A casual greeting"
          ],
          answer: 0,
          explain: "Hard facts, numbers, and references are exactly what models get wrong. Creative or rough drafts carry less risk of a factual error."
        },
        {
          type: "fill",
          q: "Because AI can invent fake sources, you should always ____ any citation before you trust it.",
          answer: "verify",
          accept: ["verify", "check", "confirm", "double-check"],
          explain: "Models sometimes fabricate realistic-looking citations. Confirm the source actually exists and says what the AI claims."
        },
        {
          type: "truefalse",
          q: "Asking the model to explain its reasoning or provide sources can help you catch mistakes.",
          answer: true,
          explain: "Asking for reasoning or sources gives you something to inspect and verify, which makes shaky answers easier to spot."
        },
        {
          type: "order",
          q: "Put these steps in order for handling an important AI-generated fact.",
          items: [
            "Read the AI's claim",
            "Look for the original source",
            "Confirm the source supports the claim",
            "Use the fact or correct it"
          ],
          explain: "Trust but verify: locate the real source, confirm it backs the claim, then decide whether to use or fix the answer."
        },
        {
          type: "mcq",
          q: "Why can't you fully rely on an AI to fact-check its own answer?",
          choices: [
            "It may repeat the same confident mistake",
            "It always tells the truth on the second try",
            "It has no memory at all",
            "It refuses to reconsider anything"
          ],
          answer: 0,
          explain: "The model can repeat or defend its own error. Independent verification against a trusted source is more reliable."
        },
        {
          type: "match",
          q: "Match each situation to the smart move.",
          pairs: [
            ["A cited study", "Find and read the real study"],
            ["A precise statistic", "Confirm it against a trusted source"]
          ],
          explain: "For citations and numbers, always trace back to a reliable primary source rather than trusting the AI's summary alone."
        }
      ]
    },
    {
      id: "l122",
      title: "Bias & Fairness",
      intro: "Models learn from human data, so they can absorb human biases — stay especially alert in areas like hiring and lending.",
      questions: [
        {
          type: "mcq",
          q: "Where does an AI model's bias mostly come from?",
          choices: [
            "Patterns in the data it was trained on",
            "The color of the app's interface",
            "The user's typing speed",
            "The time of day you use it"
          ],
          answer: 0,
          explain: "Models learn statistical patterns from large amounts of human-created data, so biases in that data can show up in outputs."
        },
        {
          type: "truefalse",
          q: "AI systems are automatically neutral and free of human bias.",
          answer: false,
          explain: "AI is not automatically neutral. Because it learns from human data, it can reflect and even amplify existing biases."
        },
        {
          type: "mcq",
          q: "Which use case demands the MOST caution about bias?",
          choices: [
            "Screening job applicants",
            "Suggesting names for a pet",
            "Writing a limerick",
            "Picking a paint color"
          ],
          answer: 0,
          explain: "High-stakes decisions like hiring, lending, and housing can seriously affect people's lives, so unfair bias there does real harm."
        },
        {
          type: "fill",
          q: "In high-stakes areas like hiring and lending, a ____ should review AI suggestions rather than accepting them blindly.",
          answer: "human",
          accept: ["human", "person", "human expert", "human reviewer"],
          explain: "Keeping a human in the loop lets someone catch unfair or biased outputs before they affect a real decision."
        },
        {
          type: "truefalse",
          q: "Bias in AI can be subtle and hard to notice at a glance.",
          answer: true,
          explain: "Bias often hides in tone, assumptions, or which options get suggested, so it can be easy to miss without deliberate checking."
        },
        {
          type: "match",
          q: "Match each concept to its meaning.",
          pairs: [
            ["Bias", "A skew that unfairly favors or harms a group"],
            ["Fairness", "Treating people equitably across groups"]
          ],
          explain: "Bias is the unfair skew; fairness is the goal of treating people equitably. Naming them helps you watch for problems."
        },
        {
          type: "order",
          q: "Order these steps for using AI fairly in a sensitive decision.",
          items: [
            "Get the AI's suggestion",
            "Question it for possible bias",
            "Have a human review it",
            "Make the final decision"
          ],
          explain: "Treat AI output as a draft: question it, add human review, and keep the final call with an accountable person."
        },
        {
          type: "mcq",
          q: "What is a good habit when an AI gives advice about people or groups?",
          choices: [
            "Ask whether the answer would be fair to everyone involved",
            "Assume the model has no opinions",
            "Accept it because a computer said it",
            "Never question detailed answers"
          ],
          answer: 0,
          explain: "Pausing to ask whether an output is fair helps you catch bias before it influences a decision about real people."
        }
      ]
    },
    {
      id: "l123",
      title: "Privacy: What Not to Share",
      intro: "Treat AI chats like they might be stored — don't paste secrets or personal data you would not want kept.",
      questions: [
        {
          type: "mcq",
          q: "Which of these is the WORST thing to paste into an AI chat?",
          choices: [
            "A customer's full credit card number",
            "A public news headline",
            "A made-up example name",
            "A question about grammar"
          ],
          answer: 0,
          explain: "Never paste secrets like card numbers, passwords, or private personal data. Once shared, you lose control over where it goes."
        },
        {
          type: "truefalse",
          q: "It is smart to check a tool's data settings to see whether your chats may be used for training.",
          answer: true,
          explain: "Different tools handle data differently. Reviewing settings and policies tells you what is stored and how it may be used."
        },
        {
          type: "fill",
          q: "A safe habit is to ____ or remove personal details before pasting text into an AI tool.",
          answer: "anonymize",
          accept: ["anonymize", "redact", "remove", "mask", "strip"],
          explain: "Removing or masking names, IDs, and secrets lets you get help without exposing sensitive information."
        },
        {
          type: "mcq",
          q: "Why should you assume anything you paste could be stored?",
          choices: [
            "You may not control how the provider retains data",
            "AI tools never keep any data ever",
            "Storage is impossible on the internet",
            "Text disappears the moment you send it"
          ],
          answer: 0,
          explain: "Retention varies by tool and plan, so the safe default is to assume input could be logged and act accordingly."
        },
        {
          type: "truefalse",
          q: "Passwords and API keys are fine to share with an AI as long as you trust the company.",
          answer: false,
          explain: "Never share live secrets like passwords or API keys. If they leak, attackers can use them, so keep them out of chats entirely."
        },
        {
          type: "match",
          q: "Match each item to whether it is safe to paste.",
          pairs: [
            ["A public blog paragraph", "Generally safe to share"],
            ["A client's home address", "Keep private, do not paste"]
          ],
          explain: "Public, non-sensitive text is low risk. Private personal data about others should stay out of AI chats."
        },
        {
          type: "order",
          q: "Order these steps before sharing a work document with an AI tool.",
          items: [
            "Scan it for secrets and personal data",
            "Remove or mask anything sensitive",
            "Check the tool's data settings",
            "Paste the cleaned version"
          ],
          explain: "Clean the text and confirm the tool's data handling first, so you never hand over more than you intend to."
        }
      ]
    },
    {
      id: "l124",
      title: "Prompt Injection & Security",
      intro: "Malicious instructions can hide inside web pages, files, or emails the AI reads — a real risk, especially for agents.",
      questions: [
        {
          type: "mcq",
          q: "What is a prompt injection attack?",
          choices: [
            "Hidden instructions in content the AI reads that try to hijack its behavior",
            "Typing too fast into the chat box",
            "A software update for the model",
            "A way to make the AI respond faster"
          ],
          answer: 0,
          explain: "Prompt injection hides malicious instructions inside data the AI processes, trying to trick it into ignoring your real goal."
        },
        {
          type: "truefalse",
          q: "AI agents that browse the web or read files are especially exposed to prompt injection.",
          answer: true,
          explain: "Agents act on the content they read, so a hidden instruction in a page or file can steer them into unwanted actions."
        },
        {
          type: "fill",
          q: "A hidden instruction buried in a web page or email that targets an AI is a form of prompt ____.",
          answer: "injection",
          accept: ["injection"],
          explain: "The malicious text is injected into the AI's input. Naming it helps you stay alert to untrusted content."
        },
        {
          type: "mcq",
          q: "Which is the safest habit when an agent handles untrusted content?",
          choices: [
            "Limit its permissions and confirm risky actions",
            "Give it full access to everything to save time",
            "Let it act with no oversight",
            "Trust every instruction it reads online"
          ],
          answer: 0,
          explain: "Least privilege plus human confirmation for risky steps limits the damage if injected instructions slip through."
        },
        {
          type: "truefalse",
          q: "You should treat text pulled in from the web or a document as fully trusted commands.",
          answer: false,
          explain: "Outside content is untrusted input, not orders. Injected instructions can hide there, so keep a healthy boundary."
        },
        {
          type: "order",
          q: "Order these safeguards from first line of defense to last resort.",
          items: [
            "Only give the agent access it truly needs",
            "Treat fetched content as untrusted",
            "Require confirmation for risky actions",
            "Review the agent's actions afterward"
          ],
          explain: "Layered defenses work best: minimal access, distrust of external content, confirmations, and after-the-fact review."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Prompt injection", "Hidden instructions hijacking the AI"],
            ["Least privilege", "Giving a tool only the access it needs"]
          ],
          explain: "Prompt injection is the attack; least privilege is a defense that shrinks what an attacker can reach."
        }
      ]
    },
    {
      id: "l125",
      title: "How Claude Is Made Safe",
      intro: "Anthropic uses techniques like Constitutional AI, human feedback, and red-teaming to make Claude helpful, honest, and harmless.",
      questions: [
        {
          type: "mcq",
          q: "What are the three core goals behind Claude's design?",
          choices: [
            "Helpful, honest, and harmless",
            "Fast, cheap, and loud",
            "Clever, secret, and unlimited",
            "Random, vague, and brief"
          ],
          answer: 0,
          explain: "Anthropic aims for Claude to be helpful, honest, and harmless — a simple frame that guides how it is trained and behaves."
        },
        {
          type: "fill",
          q: "Anthropic trains Claude with a set of guiding principles in an approach called ____ AI.",
          answer: "constitutional",
          accept: ["constitutional"],
          explain: "Constitutional AI uses a written set of principles (a 'constitution') to help the model critique and improve its own answers."
        },
        {
          type: "truefalse",
          q: "Red-teaming means deliberately trying to make the model misbehave in order to find and fix weaknesses.",
          answer: true,
          explain: "Red-teaming stress-tests a model by probing for harmful outputs, so the team can patch those weaknesses before release."
        },
        {
          type: "mcq",
          q: "What does RLHF (reinforcement learning from human feedback) do?",
          choices: [
            "Uses human ratings to steer the model toward better responses",
            "Deletes the model's training data",
            "Makes the model run without electricity",
            "Turns the model into a search engine"
          ],
          answer: 0,
          explain: "RLHF trains the model using human preferences about which answers are better, nudging it toward helpful, safe behavior."
        },
        {
          type: "match",
          q: "Match each safety technique to what it does.",
          pairs: [
            ["Constitutional AI", "Uses written principles to guide behavior"],
            ["Red-teaming", "Probes the model to find weaknesses"],
            ["RLHF", "Learns from human ratings of answers"]
          ],
          explain: "These methods work together: principles guide, human feedback refines, and red-teaming finds gaps to fix."
        },
        {
          type: "truefalse",
          q: "Being made safe means Claude is conscious and has real feelings.",
          answer: false,
          explain: "Safety training shapes behavior, not consciousness. Claude is a text-prediction system, not a conscious being."
        },
        {
          type: "order",
          q: "Order these safety steps in roughly the sequence they happen.",
          items: [
            "Define guiding principles",
            "Train the model with human feedback",
            "Red-team to find weaknesses",
            "Fix issues and release"
          ],
          explain: "Teams set principles, train with feedback, probe for problems, then fix and ship — an ongoing safety cycle."
        },
        {
          type: "mcq",
          q: "Who makes Claude?",
          choices: [
            "Anthropic",
            "OpenAI",
            "Google",
            "Meta"
          ],
          answer: 0,
          explain: "Anthropic makes Claude. OpenAI makes ChatGPT, Google makes Gemini, and Meta makes Llama."
        }
      ]
    },
    {
      id: "l126",
      title: "Copyright, Plagiarism & Attribution",
      intro: "Who owns AI output is still unsettled — so cite sources, avoid passing off AI work as your own, and disclose AI use when it matters.",
      questions: [
        {
          type: "mcq",
          q: "What is the honest thing to do when AI helped write something important?",
          choices: [
            "Disclose that AI was involved when it matters",
            "Always hide that AI was used",
            "Claim you wrote every word alone",
            "Delete the work so no one asks"
          ],
          answer: 0,
          explain: "Disclosing AI use where it matters, such as school or work, keeps you honest and respects the rules of that setting."
        },
        {
          type: "truefalse",
          q: "The rules around who owns AI-generated content are still evolving and can vary by place.",
          answer: true,
          explain: "Copyright law for AI output is unsettled and differs across regions, so stay cautious and follow the norms where you are."
        },
        {
          type: "fill",
          q: "Passing off someone else's work, or AI output, as entirely your own can count as ____.",
          answer: "plagiarism",
          accept: ["plagiarism", "plagiarising", "plagiarizing"],
          explain: "Presenting work as fully your own when it is not can be plagiarism. Attribution and disclosure keep you in the clear."
        },
        {
          type: "mcq",
          q: "If AI summarizes a specific article, what should you do?",
          choices: [
            "Credit the original article as the source",
            "Pretend the facts came from nowhere",
            "Claim you discovered the facts yourself",
            "Remove all references to be safe"
          ],
          answer: 0,
          explain: "The underlying facts come from a real source, so cite that source rather than treating the AI as the origin."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Plagiarism", "Presenting others' work as your own"],
            ["Attribution", "Crediting the real source"]
          ],
          explain: "Attribution is the cure for plagiarism: name your sources so credit goes where it is due."
        },
        {
          type: "truefalse",
          q: "In a class that bans AI help, using AI and not saying so is an ethics problem.",
          answer: true,
          explain: "Ignoring a clear rule and hiding it breaks trust. When a setting bans or requires disclosure of AI, follow that rule."
        },
        {
          type: "order",
          q: "Order these steps for using AI content responsibly.",
          items: [
            "Check the rules where you will use it",
            "Verify the facts and sources",
            "Add proper attribution",
            "Disclose AI use if required"
          ],
          explain: "Know the rules, verify, credit sources, and disclose when needed — that keeps your work honest and defensible."
        }
      ]
    },
    {
      id: "l127",
      title: "When NOT to Use AI",
      intro: "For high-stakes medical, legal, or financial choices, or anything you can't verify, get a qualified human instead of trusting AI alone.",
      questions: [
        {
          type: "mcq",
          q: "Which decision should NOT rely on AI alone?",
          choices: [
            "Diagnosing a serious medical condition",
            "Brainstorming birthday party themes",
            "Rewording a casual email",
            "Suggesting a movie to watch"
          ],
          answer: 0,
          explain: "High-stakes medical, legal, and financial decisions need a qualified human. AI can inform, but it should not be the final word."
        },
        {
          type: "truefalse",
          q: "AI is a fine substitute for a licensed doctor, lawyer, or financial advisor.",
          answer: false,
          explain: "AI is not a licensed professional. For serious health, legal, or money decisions, consult a qualified human expert."
        },
        {
          type: "fill",
          q: "If you cannot ____ an AI's answer and the stakes are high, do not act on it alone.",
          answer: "verify",
          accept: ["verify", "check", "confirm"],
          explain: "When you can't confirm an answer and a mistake would be costly, treat the output as unreliable and seek expert help."
        },
        {
          type: "mcq",
          q: "What is a healthy way to use AI for a serious topic like a legal question?",
          choices: [
            "Use it to learn background, then confirm with a professional",
            "Skip the professional to save money",
            "Follow its advice exactly with no review",
            "Assume it knows your local laws perfectly"
          ],
          answer: 0,
          explain: "AI can help you understand the basics and ask better questions, but a professional should handle the real decision."
        },
        {
          type: "truefalse",
          q: "Today's AI is narrow and task-specific, not a general super-intelligence (AGI) that can be trusted with anything.",
          answer: true,
          explain: "Current AI is narrow, not AGI. It is strong at some tasks and unreliable at others, so match the tool to the stakes."
        },
        {
          type: "match",
          q: "Match each task to whether AI alone is appropriate.",
          pairs: [
            ["Drafting a casual invite", "Fine for AI to handle"],
            ["Choosing a cancer treatment", "Needs a human expert"]
          ],
          explain: "Low-stakes, easily-checked tasks suit AI. Life-altering decisions call for qualified human judgment."
        },
        {
          type: "order",
          q: "Order these steps when facing a high-stakes decision.",
          items: [
            "Use AI to learn the basics",
            "Note what you cannot verify",
            "Consult a qualified expert",
            "Make the decision with the expert"
          ],
          explain: "Let AI orient you, flag the uncertain parts, then bring in an expert for the final, accountable call."
        }
      ]
    },
    {
      id: "l128",
      title: "Staying Current & Learning More",
      intro: "AI moves fast, so follow the official docs, keep practicing, and stay healthily skeptical of hype.",
      questions: [
        {
          type: "mcq",
          q: "What is the most reliable place to learn how a specific AI tool works?",
          choices: [
            "The tool's official documentation",
            "A random viral social media post",
            "A rumor from a friend",
            "An old screenshot with no source"
          ],
          answer: 0,
          explain: "Official docs are kept current by the makers, so they beat rumors and outdated posts for accurate, up-to-date guidance."
        },
        {
          type: "truefalse",
          q: "The AI field changes quickly, so skills and details can go out of date fast.",
          answer: true,
          explain: "New models and features ship often. Staying current means revisiting the docs and re-checking what you think you know."
        },
        {
          type: "fill",
          q: "The best way to build real skill with AI tools is to keep ____ with them regularly.",
          answer: "practicing",
          accept: ["practicing", "practising", "practice", "experimenting"],
          explain: "Hands-on practice turns tips into skill. Regularly trying prompts and tasks teaches you what actually works."
        },
        {
          type: "mcq",
          q: "What does 'healthy skepticism' about AI mean?",
          choices: [
            "Stay curious but verify claims before trusting them",
            "Refuse to ever use AI",
            "Believe every headline about AI",
            "Assume AI can do literally anything"
          ],
          answer: 0,
          explain: "Healthy skepticism is a middle path: use AI eagerly, but check bold claims and outputs instead of taking them on faith."
        },
        {
          type: "truefalse",
          q: "Once you learn a tool, you never need to check its documentation again.",
          answer: false,
          explain: "Tools update often, so revisiting the docs keeps you current with new features, limits, and best practices."
        },
        {
          type: "match",
          q: "Match each habit to why it helps you stay current.",
          pairs: [
            ["Reading the docs", "Gives accurate, up-to-date info"],
            ["Regular practice", "Builds durable hands-on skill"]
          ],
          explain: "Docs keep your knowledge accurate and practice makes it stick, a strong combination in a fast-moving field."
        },
        {
          type: "order",
          q: "Order these steps for keeping your AI skills fresh.",
          items: [
            "Follow official docs and updates",
            "Try new features hands-on",
            "Verify claims you read online",
            "Share what you learn with others"
          ],
          explain: "Learn from trusted sources, practice, verify hype, and teach others — a loop that keeps your skills sharp and current."
        }
      ]
    }
  ]
});
