window.ACADEMY.addUnit("marketing", {
  id: "unit-8",
  title: "Marketing with AI",
  color: "#f25f9c",
  icon: "🤖",
  description: "Using AI (Claude and friends) to market faster and smarter — the tie-in to the AI track.",
  lessons: [
    {
      id: "l57",
      title: "AI in Modern Marketing",
      intro: "AI can help at every stage of the funnel, from first idea to final analysis.",
      questions: [
        {
          type: "mcq",
          q: "What is a fair way to describe AI's role in marketing today?",
          choices: [
            "A helpful assistant that speeds up work you still guide and review",
            "A magic button that runs your whole business alone",
            "Only useful for huge companies with big budgets",
            "A tool that replaces the need for any strategy"
          ],
          answer: 0,
          explain: "AI is best treated as a fast assistant. You bring the strategy and judgment; it helps you move quicker."
        },
        {
          type: "truefalse",
          q: "AI tools can help across the whole funnel, not just one stage.",
          answer: true,
          explain: "AI can support ideas, content, targeting, analysis, and customer support, so it touches every funnel stage."
        },
        {
          type: "match",
          q: "Match each funnel task to how AI can help.",
          pairs: [
            ["Ideas", "Brainstorming angles and hooks"],
            ["Content", "Drafting posts and emails"],
            ["Analysis", "Spotting patterns in your data"],
            ["Support", "Answering common questions"]
          ],
          explain: "AI shows up as a helper at many points: ideation, content creation, analysis, and support."
        },
        {
          type: "fill",
          q: "You should always keep a human in the ____ to review what AI produces.",
          answer: "loop",
          accept: ["loop", "the loop"],
          explain: "Keeping a human in the loop means a person checks and approves AI output before it goes live."
        },
        {
          type: "order",
          q: "Order a simple AI-assisted content workflow from start to finish.",
          items: [
            "Ask AI for a first draft",
            "Edit the draft in your own voice",
            "Fact-check and review",
            "Publish"
          ],
          explain: "A safe pattern is draft, edit, review, then publish. AI speeds the draft; you own the final."
        },
        {
          type: "mcq",
          q: "Which of these is NOT a good reason to use AI in marketing?",
          choices: [
            "To publish anything instantly without ever reading it",
            "To beat writer's block with a first draft",
            "To summarize long research quickly",
            "To brainstorm many angles fast"
          ],
          answer: 0,
          explain: "Publishing unread AI output is risky. AI is great for drafts, summaries, and brainstorming that you then review."
        },
        {
          type: "truefalse",
          q: "AI removes the need for a clear marketing strategy.",
          answer: false,
          explain: "AI executes faster, but you still need a strategy to point it in the right direction."
        }
      ]
    },
    {
      id: "l58",
      title: "AI for Copywriting",
      intro: "An AI assistant can draft ads, emails, and posts fast, which you then shape into your own voice.",
      questions: [
        {
          type: "mcq",
          q: "What is the smartest first step when using AI to write an ad?",
          choices: [
            "Give it clear context, like your product, audience, and goal",
            "Type one vague word and hope for the best",
            "Ask it to copy a competitor's ad word for word",
            "Publish the very first sentence it writes"
          ],
          answer: 0,
          explain: "Good input gives good output. Context about your product, audience, and goal helps the AI draft something useful."
        },
        {
          type: "truefalse",
          q: "Editing AI copy into your own brand voice is an important step.",
          answer: true,
          explain: "AI drafts can sound generic. Editing makes the copy sound like you and fit your brand."
        },
        {
          type: "fill",
          q: "The instructions you give an AI assistant are often called a ____.",
          answer: "prompt",
          accept: ["prompt", "prompts"],
          explain: "A prompt is the request or instructions you give the AI. Clearer prompts get better drafts."
        },
        {
          type: "order",
          q: "Order these steps for writing an email with AI help.",
          items: [
            "Describe the goal and audience",
            "Ask AI for a draft",
            "Rewrite in your voice",
            "Check facts and send"
          ],
          explain: "Set context, get a draft, personalize it, then verify and send. AI handles speed; you handle accuracy and tone."
        },
        {
          type: "mcq",
          q: "Claude, made by Anthropic, is an example of what kind of tool?",
          choices: [
            "An AI assistant that can help draft and edit text",
            "A photo printer",
            "A payment processor",
            "A social media scheduling calendar"
          ],
          answer: 0,
          explain: "Claude by Anthropic is an AI assistant. Like ChatGPT by OpenAI, it helps draft, edit, and brainstorm copy."
        },
        {
          type: "truefalse",
          q: "You should ask AI for several versions of a headline to compare.",
          answer: true,
          explain: "Asking for variations gives you options to test and pick from, which is faster than writing each by hand."
        },
        {
          type: "match",
          q: "Match each copywriting task to what AI can do for it.",
          pairs: [
            ["Subject lines", "Generate several options to test"],
            ["Long post", "Shorten it into a caption"],
            ["Rough notes", "Turn them into a clean draft"]
          ],
          explain: "AI is handy for generating options, condensing, and turning rough notes into polished drafts."
        }
      ]
    },
    {
      id: "l59",
      title: "AI for Ideation & Research",
      intro: "AI shines at brainstorming angles, sketching customer personas, and summarizing research quickly.",
      questions: [
        {
          type: "mcq",
          q: "What is a persona in marketing?",
          choices: [
            "A profile of a typical target customer",
            "A legal document you must file",
            "A type of paid ad",
            "The name of a font"
          ],
          answer: 0,
          explain: "A persona is a semi-fictional profile of a typical customer, used to guide messaging and offers."
        },
        {
          type: "truefalse",
          q: "AI can help summarize a long report into key points.",
          answer: true,
          explain: "Summarizing is a core AI strength. It can pull main points out of long documents fast."
        },
        {
          type: "fill",
          q: "Coming up with many possible ideas quickly is called ____.",
          answer: "brainstorming",
          accept: ["brainstorming", "brainstorm", "ideation"],
          explain: "Brainstorming means generating lots of ideas without judging them yet. AI can produce many angles at once."
        },
        {
          type: "match",
          q: "Match each research task to the AI help it fits.",
          pairs: [
            ["Long article", "Summarize the main points"],
            ["Blank page", "Suggest campaign angles"],
            ["Target audience", "Draft a starter persona"]
          ],
          explain: "AI can summarize, suggest angles, and draft personas, all useful early research steps."
        },
        {
          type: "mcq",
          q: "Why should you verify facts from AI research summaries?",
          choices: [
            "AI can sometimes state things that are wrong or outdated",
            "AI is always perfectly correct",
            "Verifying is illegal",
            "Facts never matter in marketing"
          ],
          answer: 0,
          explain: "AI can make mistakes or use old information, so you should confirm important facts before relying on them."
        },
        {
          type: "order",
          q: "Order a quick AI-assisted research flow.",
          items: [
            "Gather source material",
            "Ask AI to summarize it",
            "Verify the key facts",
            "Turn findings into ideas"
          ],
          explain: "Collect sources, summarize, verify, then act. AI speeds the middle steps but you confirm the facts."
        },
        {
          type: "truefalse",
          q: "A starter persona from AI should be treated as final and never changed.",
          answer: false,
          explain: "An AI persona is a starting point. Refine it with your real customer knowledge and data."
        }
      ]
    },
    {
      id: "l60",
      title: "AI Images & Video",
      intro: "AI image and video tools can generate on-brand creative quickly, so you can make more with less.",
      questions: [
        {
          type: "mcq",
          q: "Which of these are AI image generation tools?",
          choices: [
            "Midjourney, DALL-E, and Firefly",
            "A stapler and a whiteboard",
            "Email and calendar apps",
            "A spreadsheet and a calculator"
          ],
          answer: 0,
          explain: "Midjourney, DALL-E, and Adobe Firefly are examples of tools that generate images from text prompts."
        },
        {
          type: "truefalse",
          q: "Keeping AI-generated images consistent with your colors and style is called staying on-brand.",
          answer: true,
          explain: "On-brand means the creative matches your look and feel, which keeps your marketing recognizable."
        },
        {
          type: "fill",
          q: "The text description you give an image tool to describe the picture is a ____.",
          answer: "prompt",
          accept: ["prompt", "prompts", "text prompt"],
          explain: "You describe what you want in a prompt, and the image tool generates a picture from it."
        },
        {
          type: "match",
          q: "Match each creative need to an AI approach.",
          pairs: [
            ["Social banner", "Generate an image from a prompt"],
            ["Short clip", "Use an AI video tool"],
            ["Many variations", "Generate several options fast"]
          ],
          explain: "AI can produce banners, short videos, and many variations quickly, which is useful for testing."
        },
        {
          type: "mcq",
          q: "What is a smart habit when using AI-generated creative?",
          choices: [
            "Review each image before you post it",
            "Never look at what you post",
            "Assume every image is flawless",
            "Post images that misrepresent your product"
          ],
          answer: 0,
          explain: "Always review AI images for mistakes, oddities, or anything that misleads customers before posting."
        },
        {
          type: "truefalse",
          q: "AI creative tools mean you no longer need any brand guidelines.",
          answer: false,
          explain: "Guidelines matter more with AI. They keep generated creative consistent across all your outputs."
        },
        {
          type: "order",
          q: "Order the steps to make an on-brand AI image.",
          items: [
            "Describe the image and your style in a prompt",
            "Generate a few options",
            "Pick and adjust the best one",
            "Review, then publish"
          ],
          explain: "Prompt with your style, generate options, refine the best, and review before publishing."
        }
      ]
    },
    {
      id: "l61",
      title: "Personalization",
      intro: "AI can tailor messages and recommendations so each customer feels spoken to directly.",
      questions: [
        {
          type: "mcq",
          q: "What does personalization mean in marketing?",
          choices: [
            "Tailoring the message or offer to fit the individual",
            "Sending the exact same email to everyone",
            "Removing all names from messages",
            "Only using paper mail"
          ],
          answer: 0,
          explain: "Personalization adapts content to the person, such as their interests, history, or location."
        },
        {
          type: "truefalse",
          q: "AI can help recommend products based on what a customer viewed or bought.",
          answer: true,
          explain: "Recommendation systems use past behavior to suggest relevant items, a common AI use in marketing."
        },
        {
          type: "fill",
          q: "Dividing customers into groups with shared traits is called ____.",
          answer: "segmentation",
          accept: ["segmentation", "segment", "segmenting"],
          explain: "Segmentation groups customers so you can tailor messages to each group instead of everyone at once."
        },
        {
          type: "match",
          q: "Match each personalization signal to an example.",
          pairs: [
            ["Behavior", "Pages they viewed"],
            ["Location", "The city they live in"],
            ["Purchase history", "What they bought before"]
          ],
          explain: "Behavior, location, and past purchases are signals AI can use to tailor messages."
        },
        {
          type: "mcq",
          q: "What is a responsible limit on personalization?",
          choices: [
            "Respect privacy and do not be creepy with personal data",
            "Use any private data you can find with no limits",
            "Never tell customers anything ever",
            "Ignore all privacy laws"
          ],
          answer: 0,
          explain: "Good personalization respects privacy. Being too invasive erodes trust and can break the law."
        },
        {
          type: "truefalse",
          q: "Personalization only works if you have some data about the customer.",
          answer: true,
          explain: "Tailoring needs signals, such as behavior or preferences. With no data, you cannot personalize much."
        },
        {
          type: "order",
          q: "Order a simple personalization workflow.",
          items: [
            "Collect customer signals",
            "Segment into groups",
            "Tailor the message per group",
            "Measure the results"
          ],
          explain: "Gather data, segment, tailor, then measure. AI can speed the segmenting and tailoring steps."
        }
      ]
    },
    {
      id: "l62",
      title: "Chatbots & Support",
      intro: "AI assistants can answer questions and qualify leads at any hour, freeing up your time.",
      questions: [
        {
          type: "mcq",
          q: "What is a common benefit of an AI chatbot on a website?",
          choices: [
            "It can answer common questions around the clock",
            "It guarantees every visitor buys",
            "It replaces the need for any product",
            "It only works one hour a day"
          ],
          answer: 0,
          explain: "Chatbots handle routine questions any time of day, which helps customers and saves you effort."
        },
        {
          type: "truefalse",
          q: "Qualifying a lead means checking whether a person is a good fit before spending more time on them.",
          answer: true,
          explain: "Qualifying separates strong prospects from weak ones so you focus your effort where it counts."
        },
        {
          type: "fill",
          q: "When a chatbot cannot help, it should hand the conversation off to a ____.",
          answer: "human",
          accept: ["human", "person", "human agent"],
          explain: "A good chatbot escalates to a human for tricky cases instead of frustrating the customer."
        },
        {
          type: "match",
          q: "Match each chatbot job to an example.",
          pairs: [
            ["Answer FAQ", "Explain your return policy"],
            ["Qualify lead", "Ask about budget and needs"],
            ["Escalate", "Pass a tough issue to a person"]
          ],
          explain: "Chatbots answer FAQs, qualify leads, and escalate hard cases to a human."
        },
        {
          type: "mcq",
          q: "What is a good practice for a customer-facing chatbot?",
          choices: [
            "Be clear that it is an automated assistant",
            "Pretend it is a specific real employee",
            "Refuse to ever connect anyone to a person",
            "Make up answers when unsure"
          ],
          answer: 0,
          explain: "Being honest that it is a bot builds trust, and it should offer a human when needed."
        },
        {
          type: "truefalse",
          q: "A chatbot should confidently make up an answer when it does not know.",
          answer: false,
          explain: "Made-up answers mislead customers. A good bot admits limits or hands off to a human."
        },
        {
          type: "order",
          q: "Order a typical chatbot conversation flow.",
          items: [
            "Greet the visitor",
            "Understand their question",
            "Answer or qualify",
            "Escalate to a human if needed"
          ],
          explain: "Greet, understand, help or qualify, then escalate when the bot reaches its limits."
        }
      ]
    },
    {
      id: "l63",
      title: "AI Analytics & Prediction",
      intro: "AI can find patterns in your data and help forecast what might happen next.",
      questions: [
        {
          type: "mcq",
          q: "How can AI help with marketing analytics?",
          choices: [
            "Spot patterns and trends in large amounts of data",
            "Delete all your data automatically",
            "Guarantee the future with certainty",
            "Replace the need to measure anything"
          ],
          answer: 0,
          explain: "AI is good at finding patterns humans might miss in big datasets, which guides decisions."
        },
        {
          type: "truefalse",
          q: "A forecast is a prediction of what might happen, not a guarantee.",
          answer: true,
          explain: "Forecasts estimate likely outcomes. They help planning but are never certain."
        },
        {
          type: "fill",
          q: "Using past data to estimate future results is called ____.",
          answer: "prediction",
          accept: ["prediction", "predicting", "forecasting", "forecast"],
          explain: "Prediction, or forecasting, uses history to estimate what is likely to happen next."
        },
        {
          type: "match",
          q: "Match each metric to what it measures.",
          pairs: [
            ["CTR", "Share of people who click"],
            ["Conversion rate", "Share who complete the goal"],
            ["CAC", "Cost to acquire a customer"]
          ],
          explain: "CTR measures clicks, conversion rate measures completed goals, and CAC measures acquisition cost."
        },
        {
          type: "mcq",
          q: "Why should you sanity-check AI predictions?",
          choices: [
            "Predictions rely on past data and can be wrong",
            "AI predictions are always exactly right",
            "Checking wastes time and adds no value",
            "The future is fully knowable"
          ],
          answer: 0,
          explain: "Predictions are estimates based on history. Real conditions change, so apply human judgment."
        },
        {
          type: "truefalse",
          q: "Finding a pattern in data always proves one thing caused another.",
          answer: false,
          explain: "Correlation is not causation. A pattern can hint at a link but does not prove cause."
        },
        {
          type: "order",
          q: "Order a simple AI-assisted analysis flow.",
          items: [
            "Collect clean data",
            "Let AI find patterns",
            "Interpret with your judgment",
            "Act and re-measure"
          ],
          explain: "Clean data in, patterns out, human interpretation, then act and measure again."
        }
      ]
    },
    {
      id: "l64",
      title: "Using AI Responsibly",
      intro: "Great AI marketing stays honest: disclose when needed, review output, verify facts, and never spam.",
      questions: [
        {
          type: "mcq",
          q: "What is a responsible way to use AI in marketing?",
          choices: [
            "Review and verify AI output before publishing",
            "Publish everything instantly with no checks",
            "Send mass unwanted messages to strangers",
            "Present false claims as facts"
          ],
          answer: 0,
          explain: "Responsible use means a human reviews and verifies AI output before it reaches customers."
        },
        {
          type: "truefalse",
          q: "Sending large volumes of unwanted messages is spamming and should be avoided.",
          answer: true,
          explain: "Spamming annoys people, hurts your reputation, and often breaks anti-spam rules."
        },
        {
          type: "fill",
          q: "Telling people when content is AI-made or a bot is called ____.",
          answer: "disclosure",
          accept: ["disclosure", "disclosing", "transparency"],
          explain: "Disclosure means being open about AI use when it matters, which keeps trust intact."
        },
        {
          type: "match",
          q: "Match each responsible practice to what it prevents.",
          pairs: [
            ["Human review", "Publishing errors"],
            ["Fact-checking", "Spreading false claims"],
            ["Not spamming", "Annoying your audience"]
          ],
          explain: "Review catches errors, fact-checking stops false claims, and restraint avoids spam."
        },
        {
          type: "mcq",
          q: "Why keep a human in the loop with AI content?",
          choices: [
            "To catch mistakes and keep it authentic and accurate",
            "To slow the work down for no reason",
            "Because AI never makes any errors",
            "To avoid ever publishing anything"
          ],
          answer: 0,
          explain: "A human check keeps content accurate and true to your brand, since AI can err or sound generic."
        },
        {
          type: "truefalse",
          q: "It is fine to publish AI claims as facts without checking them.",
          answer: false,
          explain: "AI can be wrong or outdated. Always verify claims before presenting them as fact."
        },
        {
          type: "order",
          q: "Order a responsible AI publishing checklist.",
          items: [
            "Draft with AI",
            "Edit into your voice",
            "Verify facts and claims",
            "Disclose if needed, then publish"
          ],
          explain: "Draft, edit, verify, then disclose where appropriate and publish. Each step protects trust."
        }
      ]
    }
  ]
});
