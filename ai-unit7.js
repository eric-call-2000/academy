window.ACADEMY.addUnit("ai", {
  id: "unit-7",
  title: "Getting to Know Claude",
  color: "#a560e8",
  icon: "🧠",
  description: "Meet Claude: the model family, where to use it, and what makes it tick.",
  lessons: [
    {
      id: "l49",
      title: "Who Is Claude?",
      intro: "Claude is Anthropic's AI assistant, built to be helpful, honest, and harmless.",
      questions: [
        {
          type: "mcq",
          q: "Which company makes Claude?",
          choices: ["Anthropic", "OpenAI", "Google", "Meta"],
          answer: 0,
          explain: "Claude is built by Anthropic. OpenAI makes ChatGPT, Google makes Gemini, and Meta makes Llama."
        },
        {
          type: "truefalse",
          q: "Claude is designed around the goals of being helpful, honest, and harmless.",
          answer: true,
          explain: "Those three goals — helpful, honest, and harmless — guide how Claude is built and how it responds."
        },
        {
          type: "mcq",
          q: "What kind of tool is Claude?",
          choices: ["An AI assistant you chat with", "A spreadsheet program", "A web browser", "A video game"],
          answer: 0,
          explain: "Claude is an AI assistant: you give it instructions in plain language and it responds."
        },
        {
          type: "fill",
          q: "Claude is an AI assistant made by a company called ____.",
          answer: "Anthropic",
          accept: ["anthropic"],
          explain: "Anthropic is the AI safety company that builds Claude."
        },
        {
          type: "truefalse",
          q: "Claude is a conscious being with its own feelings and desires.",
          answer: false,
          explain: "Claude is a language model that predicts helpful text. It is not conscious and has no feelings."
        },
        {
          type: "mcq",
          q: "Which best describes what Claude does under the hood?",
          choices: ["Predicts plausible text based on patterns it learned", "Looks up every answer in a fixed database", "Runs a human operator behind the scenes", "Copies answers word-for-word from the internet live"],
          answer: 0,
          explain: "Like other large language models, Claude predicts likely next words. That is why it can occasionally get things wrong."
        },
        {
          type: "match",
          q: "Match each of Claude's design goals to its meaning.",
          pairs: [["Helpful", "Actually assists you with your task"], ["Honest", "Tries to be truthful and admit uncertainty"], ["Harmless", "Avoids causing harm or danger"]],
          explain: "Helpful, honest, and harmless are the three core aims behind how Claude behaves."
        },
        {
          type: "truefalse",
          q: "Because Claude can make mistakes, it is worth double-checking important facts it gives you.",
          answer: true,
          explain: "Claude can hallucinate, so verify anything that really matters, like medical, legal, or financial details."
        }
      ]
    },
    {
      id: "l50",
      title: "The Claude Model Family",
      intro: "Opus, Sonnet, and Haiku are the three Claude tiers — you pick the one that fits the job.",
      questions: [
        {
          type: "mcq",
          q: "Which Claude tier is the most capable, best for the hardest problems?",
          choices: ["Opus", "Sonnet", "Haiku", "Ballad"],
          answer: 0,
          explain: "Opus is the most capable tier, ideal for complex reasoning and difficult tasks."
        },
        {
          type: "mcq",
          q: "Which Claude tier is the fastest and most compact?",
          choices: ["Haiku", "Opus", "Sonnet", "Verse"],
          answer: 0,
          explain: "Haiku is the fastest, smallest tier — great for quick, high-volume, or simple tasks."
        },
        {
          type: "mcq",
          q: "Which tier is the balanced everyday choice for most work?",
          choices: ["Sonnet", "Opus", "Haiku", "Chorus"],
          answer: 0,
          explain: "Sonnet balances capability and speed, making it a solid default for everyday use."
        },
        {
          type: "match",
          q: "Match each Claude tier to its strength.",
          pairs: [["Opus", "Most capable, deepest reasoning"], ["Sonnet", "Balanced everyday workhorse"], ["Haiku", "Fastest and most compact"]],
          explain: "Opus for hard problems, Sonnet for balance, Haiku for speed."
        },
        {
          type: "order",
          q: "Order the three tiers from most compact and fastest to most capable.",
          items: ["Haiku", "Sonnet", "Opus"],
          explain: "Haiku is smallest and fastest, Sonnet is in the middle, and Opus is the most capable."
        },
        {
          type: "truefalse",
          q: "The most capable tier is always the right choice for every single task.",
          answer: false,
          explain: "For simple or high-volume tasks, a faster tier like Haiku can be cheaper and quick enough."
        },
        {
          type: "fill",
          q: "For a simple, high-volume task where speed matters most, the ____ tier is often the smart pick.",
          answer: "Haiku",
          accept: ["haiku"],
          explain: "Haiku is the fastest and most compact tier, well suited to quick, repetitive jobs."
        },
        {
          type: "mcq",
          q: "You need deep, careful reasoning on a tricky problem and cost is not the main worry. Which tier fits best?",
          choices: ["Opus", "Haiku", "A non-Claude tool", "None — Claude cannot reason"],
          answer: 0,
          explain: "Opus is the most capable tier, so it is the natural pick when you need the strongest reasoning."
        }
      ]
    },
    {
      id: "l51",
      title: "Model Versions & Generations",
      intro: "Each Claude family improves over generations, and the version usually shows up right in the model's name.",
      questions: [
        {
          type: "truefalse",
          q: "Newer generations of Claude are generally more capable than older ones.",
          answer: true,
          explain: "Each new generation tends to improve on reasoning, reliability, and range compared with the last."
        },
        {
          type: "mcq",
          q: "Where can you usually tell which version of a model you are using?",
          choices: ["In the model's name", "In the color of the app", "In your account password", "It is never shown"],
          answer: 0,
          explain: "The version is typically part of the model's name, so the name tells you which generation you have."
        },
        {
          type: "truefalse",
          q: "The tier names Opus, Sonnet, and Haiku stay the same even as new generations are released.",
          answer: true,
          explain: "The tier names persist across generations; the version in the name marks which generation it is."
        },
        {
          type: "mcq",
          q: "Two models share the same tier but are different generations. What is the safest general expectation?",
          choices: ["The newer generation is usually more capable", "The older generation is always better", "They are guaranteed identical", "Generation never affects quality"],
          answer: 0,
          explain: "Within a tier, the newer generation is generally the more capable and refined option."
        },
        {
          type: "fill",
          q: "A model's ____ tells you which generation it belongs to, since the version is part of it.",
          answer: "name",
          accept: ["name", "model name"],
          explain: "The version appears in the model's name, so the name signals the generation."
        },
        {
          type: "truefalse",
          q: "You should memorize exact version numbers because they never change.",
          answer: false,
          explain: "Versions update over time. Focus on the durable idea that newer generations are usually more capable."
        },
        {
          type: "order",
          q: "Order these steps for picking a model for a job.",
          items: ["Decide how hard the task is", "Choose the right tier (Opus, Sonnet, or Haiku)", "Prefer the newest available generation of that tier"],
          explain: "First judge the task, then pick a tier, then lean toward the newest generation of it."
        },
        {
          type: "mcq",
          q: "Which statement is the most durable and safe to rely on?",
          choices: ["Newer generations tend to be smarter", "Version 7 scored exactly 92 on a benchmark", "The context window is exactly 500,000 tokens", "The latest model was released last Tuesday"],
          answer: 0,
          explain: "Specific numbers and dates go stale fast. The durable takeaway is that newer generations are generally more capable."
        }
      ]
    },
    {
      id: "l52",
      title: "Where to Use Claude",
      intro: "You can reach Claude on claude.ai, through the API, in Claude Code, and via integrations.",
      questions: [
        {
          type: "mcq",
          q: "What is claude.ai?",
          choices: ["The website and apps where you chat with Claude", "A programming language", "A search engine", "An email provider"],
          answer: 0,
          explain: "claude.ai is where most people chat with Claude, available on web, desktop, and mobile."
        },
        {
          type: "mcq",
          q: "Which option lets developers build Claude into their own software?",
          choices: ["The API", "The mobile app", "The conversation history panel", "The model picker"],
          answer: 0,
          explain: "The API lets developers send requests to Claude from their own apps and services."
        },
        {
          type: "match",
          q: "Match each way of using Claude to what it is for.",
          pairs: [["claude.ai", "Chatting through web, desktop, or mobile"], ["API", "Building Claude into your own software"], ["Claude Code", "Working with Claude in your codebase and terminal"]],
          explain: "Pick claude.ai to chat, the API to build, and Claude Code to work with code."
        },
        {
          type: "truefalse",
          q: "Claude Code is a way to use Claude for coding tasks in a developer's environment.",
          answer: true,
          explain: "Claude Code brings Claude into the terminal and codebase to help with programming work."
        },
        {
          type: "fill",
          q: "Developers who want to build Claude into their own product use the ____.",
          answer: "API",
          accept: ["api"],
          explain: "The API is the developer gateway for sending requests to Claude programmatically."
        },
        {
          type: "truefalse",
          q: "You can only use Claude on a desktop computer, never on a phone.",
          answer: false,
          explain: "claude.ai works on web, desktop, and mobile, so you can use Claude on a phone too."
        },
        {
          type: "mcq",
          q: "Integrations let Claude do what?",
          choices: ["Connect to other tools and data you use", "Physically repair hardware", "Replace your operating system", "Run without any internet ever"],
          answer: 0,
          explain: "Integrations connect Claude to other tools and sources so it can act on your context."
        },
        {
          type: "mcq",
          q: "You just want to have a conversation with Claude in your browser. Where do you go?",
          choices: ["claude.ai", "The raw API", "A spreadsheet", "The command line only"],
          answer: 0,
          explain: "For a simple chat in the browser, claude.ai is the place to start."
        }
      ]
    },
    {
      id: "l53",
      title: "The Claude.ai Interface",
      intro: "On claude.ai you work with chats, a model picker, file attachments, and your conversation history.",
      questions: [
        {
          type: "mcq",
          q: "What does the model picker on claude.ai let you do?",
          choices: ["Choose which Claude model to use", "Change your billing address", "Pick a screen color", "Delete your account"],
          answer: 0,
          explain: "The model picker lets you select the Claude model or tier that fits your task."
        },
        {
          type: "truefalse",
          q: "Your past conversations are saved in your chat history so you can return to them.",
          answer: true,
          explain: "Conversation history keeps your earlier chats so you can revisit or continue them later."
        },
        {
          type: "mcq",
          q: "Why would you attach a file to a chat?",
          choices: ["So Claude can read it and help with its contents", "To speed up your internet", "To change the app theme", "To log out faster"],
          answer: 0,
          explain: "Attaching a file lets Claude read a document, image, or data and work with it directly."
        },
        {
          type: "match",
          q: "Match each claude.ai element to its purpose.",
          pairs: [["Model picker", "Choose which Claude to use"], ["File attachment", "Give Claude a document to read"], ["Chat history", "Return to earlier conversations"]],
          explain: "The picker sets the model, attachments feed in files, and history stores past chats."
        },
        {
          type: "fill",
          q: "To hand Claude a document to read, you use a file ____.",
          answer: "attachment",
          accept: ["attachment", "upload"],
          explain: "A file attachment (or upload) lets Claude read and reason over the file you provide."
        },
        {
          type: "truefalse",
          q: "Once you start a chat, you can never switch to a different Claude model.",
          answer: false,
          explain: "The model picker lets you change models. Different tasks may call for different tiers."
        },
        {
          type: "mcq",
          q: "You want to continue a conversation you had yesterday. Where do you look?",
          choices: ["Your chat history", "The model picker", "The file uploader", "The logout button"],
          answer: 0,
          explain: "Chat history holds your earlier conversations so you can pick one back up."
        }
      ]
    },
    {
      id: "l54",
      title: "Projects: Custom Knowledge & Instructions",
      intro: "Projects bundle your documents and custom instructions so Claude keeps your context across chats.",
      questions: [
        {
          type: "mcq",
          q: "What is the main benefit of a Project on claude.ai?",
          choices: ["Claude keeps your context and instructions across many chats", "It makes your screen brighter", "It removes the model picker", "It disables chat history"],
          answer: 0,
          explain: "A Project holds shared documents and instructions so Claude remembers your context in every chat inside it."
        },
        {
          type: "truefalse",
          q: "A Project can include documents that Claude can refer to in its answers.",
          answer: true,
          explain: "Projects let you add reference documents so Claude can draw on them across chats."
        },
        {
          type: "mcq",
          q: "What do custom instructions in a Project do?",
          choices: ["Tell Claude how to behave for that Project's chats", "Change your password", "Pick the app language only", "Speed up your Wi-Fi"],
          answer: 0,
          explain: "Custom instructions set standing guidance — like tone or rules — that applies to chats in the Project."
        },
        {
          type: "match",
          q: "Match each Project part to what it provides.",
          pairs: [["Project documents", "Reference knowledge Claude can use"], ["Custom instructions", "Standing guidance on how to respond"]],
          explain: "Documents supply knowledge; custom instructions supply behavior. Together they keep context consistent."
        },
        {
          type: "fill",
          q: "A Project keeps your ____ across many chats, so you do not repeat it every time.",
          answer: "context",
          accept: ["context", "information", "knowledge"],
          explain: "The point of a Project is to carry your context across chats without re-explaining it each time."
        },
        {
          type: "truefalse",
          q: "You must paste your background information again in every new chat, even inside a Project.",
          answer: false,
          explain: "A Project keeps shared documents and instructions available, so you do not re-paste them each chat."
        },
        {
          type: "order",
          q: "Order the steps to set up a Project for repeated work.",
          items: ["Create a Project", "Add documents and custom instructions", "Start chats that reuse that shared context"],
          explain: "Create the Project, load it with documents and instructions, then start chats that share it all."
        },
        {
          type: "mcq",
          q: "When is a Project especially useful?",
          choices: ["When many chats share the same background and rules", "When you only ever ask one question", "When you want to forget your context", "When you never attach anything"],
          answer: 0,
          explain: "Projects shine when repeated chats lean on the same documents and instructions."
        }
      ]
    },
    {
      id: "l55",
      title: "Artifacts: Interactive Outputs",
      intro: "Claude can render code, documents, and small apps in a side panel you can view, use, and edit.",
      questions: [
        {
          type: "mcq",
          q: "What is an Artifact in Claude?",
          choices: ["A viewable, editable output shown in a side panel", "A type of Claude model", "A billing plan", "A kind of error message"],
          answer: 0,
          explain: "An Artifact is a rendered output — like code, a document, or a small app — shown beside the chat."
        },
        {
          type: "truefalse",
          q: "Artifacts can include small working apps that you can actually interact with.",
          answer: true,
          explain: "Claude can render interactive Artifacts, such as small apps, that you can use right in the panel."
        },
        {
          type: "mcq",
          q: "Where does an Artifact usually appear?",
          choices: ["In a side panel next to the conversation", "In your email inbox", "Only after you download a file", "In the model picker"],
          answer: 0,
          explain: "Artifacts open in a side panel so you can view them alongside the chat."
        },
        {
          type: "truefalse",
          q: "Once Claude creates an Artifact, it can never be changed.",
          answer: false,
          explain: "You can ask Claude to edit an Artifact, and it updates in place — that is a key benefit."
        },
        {
          type: "match",
          q: "Match each Artifact type to an example.",
          pairs: [["Code", "A script or program"], ["Document", "A written report or draft"], ["Small app", "An interactive tool you can click"]],
          explain: "Artifacts can hold code, documents, or small interactive apps, each shown in the side panel."
        },
        {
          type: "fill",
          q: "Artifacts show up in a side ____ next to your conversation.",
          answer: "panel",
          accept: ["panel"],
          explain: "The Artifact opens in a side panel so you can view and edit it while you keep chatting."
        },
        {
          type: "mcq",
          q: "You asked Claude for a chart and want a color changed. What can you do?",
          choices: ["Ask Claude to edit the Artifact", "Start over with a brand-new account", "Nothing, Artifacts are frozen", "Switch companies"],
          answer: 0,
          explain: "Artifacts are editable, so you can ask Claude to revise the one it already made."
        }
      ]
    },
    {
      id: "l56",
      title: "Claude's Style and Values",
      intro: "Claude aims to be thoughtful, honest about uncertainty, and clear when it declines harmful requests.",
      questions: [
        {
          type: "mcq",
          q: "How does Claude ideally handle a question it is not sure about?",
          choices: ["It admits the uncertainty instead of faking confidence", "It always makes up a confident answer", "It refuses to say anything at all", "It changes the subject silently"],
          answer: 0,
          explain: "Being honest about uncertainty is part of Claude's style — it flags when it is not sure."
        },
        {
          type: "truefalse",
          q: "Claude will clearly decline requests that are genuinely harmful.",
          answer: true,
          explain: "Part of being harmless is that Claude declines clearly harmful requests and says so plainly."
        },
        {
          type: "mcq",
          q: "Which phrase best captures Claude's intended tone?",
          choices: ["Thoughtful and honest", "Rude and dismissive", "Vague and evasive", "Overconfident and pushy"],
          answer: 0,
          explain: "Claude aims to be thoughtful and honest, including about what it does and does not know."
        },
        {
          type: "match",
          q: "Match each value to how Claude shows it.",
          pairs: [["Honesty", "Admits when it is unsure"], ["Harmlessness", "Declines clearly harmful requests"], ["Thoughtfulness", "Considers your question carefully"]],
          explain: "Honesty, harmlessness, and thoughtfulness together shape how Claude responds."
        },
        {
          type: "truefalse",
          q: "If Claude is unsure, the best behavior is to hide it and sound totally certain.",
          answer: false,
          explain: "Sounding falsely certain is the opposite of honesty. Claude is meant to flag uncertainty."
        },
        {
          type: "fill",
          q: "Rather than bluffing, Claude tries to be honest about its ____ when it is not sure.",
          answer: "uncertainty",
          accept: ["uncertainty", "doubt", "limits"],
          explain: "Admitting uncertainty is more trustworthy than pretending to know, so Claude aims to do it."
        },
        {
          type: "mcq",
          q: "Someone asks Claude to help with something clearly dangerous. What is the intended response?",
          choices: ["Politely decline and explain why", "Help quietly anyway", "Pretend not to understand forever", "Insult the person"],
          answer: 0,
          explain: "Claude is designed to decline clearly harmful requests and be clear about doing so."
        },
        {
          type: "truefalse",
          q: "Claude being honest about uncertainty makes its answers easier to trust.",
          answer: true,
          explain: "Knowing when Claude is unsure helps you judge its answers and check what matters most."
        }
      ]
    }
  ]
});
