window.ACADEMY.addUnit("ai", {
  id: "unit-9",
  title: "Claude's Capabilities",
  color: "#58cc02",
  icon: "🛠️",
  description: "Beyond chat: everything Claude can actually do.",
  lessons: [
    {
      id: "l65",
      title: "Vision: Images & Screenshots",
      intro: "Claude can read images, charts, diagrams, screenshots, and even handwriting that you upload.",
      questions: [
        {
          type: "mcq",
          q: "What does it mean that Claude has 'vision'?",
          choices: [
            "It can look at images you upload and describe or analyze them",
            "It can watch you through your webcam",
            "It can generate photorealistic images from scratch",
            "It can only read plain text, never pictures"
          ],
          answer: 0,
          explain: "Vision means Claude can accept images as input and reason about what is in them, from photos to screenshots."
        },
        {
          type: "truefalse",
          q: "Claude can read text out of a screenshot, even if you did not type that text.",
          answer: true,
          explain: "Claude can extract and work with text it sees inside an image, similar to reading a sign in a photo."
        },
        {
          type: "mcq",
          q: "Which of these is a good use of Claude's vision?",
          choices: [
            "Uploading a photo of a chart and asking what the trend is",
            "Asking Claude to feel the texture of an object",
            "Having Claude smell a scanned document",
            "Asking Claude to physically hold your phone"
          ],
          answer: 0,
          explain: "Vision shines at reading charts, diagrams, and screenshots and explaining what they show."
        },
        {
          type: "fill",
          q: "Claude can read messy ____ writing in a photo of a note and turn it into typed text.",
          answer: "hand",
          accept: ["hand", "handwriting", "handwritten"],
          explain: "Claude can often decipher handwriting in an uploaded image, though very sloppy writing can still trip it up."
        },
        {
          type: "match",
          q: "Match each uploaded image to a task Claude can do with it.",
          pairs: [
            ["Screenshot of an error", "Explain what the error means"],
            ["Photo of a bar chart", "Describe the trend it shows"],
            ["Picture of a receipt", "List the items and total"]
          ],
          explain: "Vision lets Claude turn many kinds of images into useful text answers."
        },
        {
          type: "truefalse",
          q: "Claude sees and understands video the same way it reads a single photo.",
          answer: false,
          explain: "Claude works with still images; it does not watch moving video like a person watching a clip."
        },
        {
          type: "mcq",
          q: "You are stuck on a form on a website. What is a smart move?",
          choices: [
            "Screenshot the form and ask Claude what each field wants",
            "Describe nothing and hope Claude guesses the website",
            "Mail the printed form to Anthropic",
            "Read every field aloud and record audio"
          ],
          answer: 0,
          explain: "A screenshot gives Claude the exact context it needs to guide you through a confusing screen."
        },
        {
          type: "fill",
          q: "Uploading a picture of a diagram lets Claude explain how the ____ connect.",
          answer: "parts",
          accept: ["parts", "boxes", "pieces", "components", "steps"],
          explain: "Claude can trace the parts of a diagram and explain how they relate to each other."
        }
      ]
    },
    {
      id: "l66",
      title: "Documents & PDFs",
      intro: "Upload PDFs and files, then ask Claude to summarize them, pull out data, or answer questions about them.",
      questions: [
        {
          type: "mcq",
          q: "After you upload a long PDF, what can Claude do?",
          choices: [
            "Summarize it and answer questions about its contents",
            "Only count how many pages it has",
            "Delete the original file from your computer",
            "Print it to your home printer"
          ],
          answer: 0,
          explain: "Claude can read the contents of a document and help you understand, summarize, or search it."
        },
        {
          type: "truefalse",
          q: "You can ask Claude to pull specific numbers or dates out of an uploaded document.",
          answer: true,
          explain: "Extracting data like totals, dates, or names from a file is a common and reliable use."
        },
        {
          type: "order",
          q: "Put these steps in order for getting a summary of a report.",
          items: [
            "Upload the PDF to the chat",
            "Ask Claude to summarize the key points",
            "Read the summary and ask a follow-up"
          ],
          explain: "Upload first, then ask; follow-up questions refine the answer using the same document."
        },
        {
          type: "mcq",
          q: "Which request works best with an uploaded contract?",
          choices: [
            "Explain the cancellation terms in plain English",
            "Sign it for me legally",
            "Guess what a different contract might say",
            "Change the wording on the original file"
          ],
          answer: 0,
          explain: "Claude can explain and clarify a document's terms, but it does not sign or alter the original file."
        },
        {
          type: "fill",
          q: "Asking Claude to pull the total and each line item is an example of data ____.",
          answer: "extraction",
          accept: ["extraction", "extracting", "extract"],
          explain: "Extraction means pulling specific pieces of information out of a larger document."
        },
        {
          type: "truefalse",
          q: "It is smart to double-check important facts Claude pulls from a document against the original.",
          answer: true,
          explain: "Verification is wise for anything important; Claude is helpful but not infallible."
        },
        {
          type: "mcq",
          q: "You have five research PDFs. A good task for Claude is:",
          choices: [
            "Compare their main findings and note where they disagree",
            "Feel which paper is heaviest",
            "Rank them by paper color",
            "Mail the authors on your behalf"
          ],
          answer: 0,
          explain: "Claude can read multiple documents and compare or contrast what they say."
        },
        {
          type: "match",
          q: "Match the document task to the right ask.",
          pairs: [
            ["Long PDF", "Give me a one-paragraph summary"],
            ["Spreadsheet export", "List the three biggest values"],
            ["Meeting notes", "Turn these into action items"]
          ],
          explain: "Each document type pairs naturally with a summarize, extract, or reformat request."
        }
      ]
    },
    {
      id: "l67",
      title: "Extended Thinking",
      intro: "Extended thinking is a mode where Claude reasons for longer before answering tough problems.",
      questions: [
        {
          type: "mcq",
          q: "What does extended thinking give Claude?",
          choices: [
            "More time to reason step by step before answering",
            "The ability to browse the internet",
            "A faster answer with no reasoning",
            "Permission to skip hard questions"
          ],
          answer: 0,
          explain: "Extended thinking lets Claude work through a problem more carefully before giving its final answer."
        },
        {
          type: "truefalse",
          q: "Extended thinking is most useful for hard, multi-step problems like tricky math or planning.",
          answer: true,
          explain: "The extra reasoning pays off most on complex problems, not simple factual lookups."
        },
        {
          type: "mcq",
          q: "For which task is extended thinking least necessary?",
          choices: [
            "Asking what the capital of France is",
            "Solving a multi-step logic puzzle",
            "Debugging a tangled piece of code",
            "Planning a complex project schedule"
          ],
          answer: 0,
          explain: "Simple factual questions do not need extra reasoning; save extended thinking for genuinely hard problems."
        },
        {
          type: "fill",
          q: "Extended thinking trades a little extra time for more careful ____.",
          answer: "reasoning",
          accept: ["reasoning", "thinking", "thought"],
          explain: "You wait slightly longer, but the reasoning is deeper and often more accurate."
        },
        {
          type: "truefalse",
          q: "Extended thinking guarantees Claude will never make a mistake.",
          answer: false,
          explain: "It improves the odds on hard problems but does not make Claude perfect; always sanity-check big answers."
        },
        {
          type: "mcq",
          q: "A good sign you might want extended thinking is when:",
          choices: [
            "The problem has many steps that build on each other",
            "You just want a quick greeting",
            "You need a one-word answer",
            "You are asking for the current time"
          ],
          answer: 0,
          explain: "Chains of dependent steps are exactly where more reasoning time helps most."
        },
        {
          type: "order",
          q: "Order the trade-off of using extended thinking.",
          items: [
            "You ask a hard, multi-step question",
            "Claude reasons for longer",
            "You get a more carefully worked answer"
          ],
          explain: "The pattern is more time in, more careful reasoning out."
        }
      ]
    },
    {
      id: "l68",
      title: "Tool Use / Function Calling",
      intro: "Claude can call tools and APIs that you define to fetch data or take real actions.",
      questions: [
        {
          type: "mcq",
          q: "What is 'tool use' (also called function calling)?",
          choices: [
            "Claude calling tools or APIs you defined to fetch data or act",
            "Claude physically picking up a hammer",
            "Claude drawing pictures of tools",
            "Claude refusing to answer without a tool"
          ],
          answer: 0,
          explain: "Tool use lets Claude reach beyond text by calling functions or APIs a developer provides."
        },
        {
          type: "truefalse",
          q: "With tool use, Claude can decide when to call a tool and then use the result in its answer.",
          answer: true,
          explain: "Claude chooses when a tool is needed, calls it, and folds the returned data into its response."
        },
        {
          type: "mcq",
          q: "Why does tool use matter?",
          choices: [
            "It lets Claude get live or private data it could not know on its own",
            "It replaces the need to ever talk to Claude",
            "It makes Claude conscious",
            "It stops Claude from ever making errors"
          ],
          answer: 0,
          explain: "Tools connect Claude to current or system-specific information, like a weather API or a database."
        },
        {
          type: "order",
          q: "Put a tool-use interaction in order.",
          items: [
            "You ask a question that needs live data",
            "Claude calls the tool you defined",
            "The tool returns a result",
            "Claude answers using that result"
          ],
          explain: "Claude recognizes the need, calls the tool, receives the result, and then responds."
        },
        {
          type: "fill",
          q: "A weather lookup that Claude can call is an example of a ____.",
          answer: "tool",
          accept: ["tool", "function", "api"],
          explain: "A defined function or API that Claude may call is exactly what 'tool' means here."
        },
        {
          type: "match",
          q: "Match each tool to what it lets Claude do.",
          pairs: [
            ["Weather API", "Report today's forecast"],
            ["Calculator function", "Do exact arithmetic"],
            ["Database query", "Look up a customer record"]
          ],
          explain: "Each tool extends Claude with an ability it does not have from text alone."
        },
        {
          type: "truefalse",
          q: "The developer decides which tools Claude is allowed to use.",
          answer: true,
          explain: "Tools must be defined and granted by the developer; Claude cannot invent access on its own."
        },
        {
          type: "mcq",
          q: "Which is NOT a typical tool-use scenario?",
          choices: [
            "Claude becoming self-aware after a call",
            "Fetching a stock price from an API",
            "Sending an email through a defined function",
            "Querying a database for an order"
          ],
          answer: 0,
          explain: "Tools grant abilities like fetching data or acting, but they do not make Claude conscious."
        }
      ]
    },
    {
      id: "l69",
      title: "MCP: Model Context Protocol",
      intro: "MCP is an open standard from Anthropic for connecting Claude to apps, data, and tools.",
      questions: [
        {
          type: "mcq",
          q: "What is MCP (Model Context Protocol)?",
          choices: [
            "An open standard from Anthropic for connecting AI to apps, data, and tools",
            "A paid Claude subscription tier",
            "A programming language invented by Google",
            "A type of graphics card"
          ],
          answer: 0,
          explain: "MCP is an open standard from Anthropic that gives models a common way to connect to outside systems."
        },
        {
          type: "truefalse",
          q: "MCP is an open standard, so tools built for it can work across different apps.",
          answer: true,
          explain: "Being open means many apps and tools can speak the same protocol instead of using one-off integrations."
        },
        {
          type: "fill",
          q: "MCP was created and released as an open standard by ____.",
          answer: "anthropic",
          accept: ["anthropic"],
          explain: "Anthropic, the maker of Claude, introduced MCP as an open standard for the whole ecosystem."
        },
        {
          type: "mcq",
          q: "What problem does MCP help solve?",
          choices: [
            "Connecting a model to many tools without a custom integration each time",
            "Making Claude type faster",
            "Removing the need for any tools at all",
            "Turning text into video"
          ],
          answer: 0,
          explain: "MCP standardizes connections so you do not have to reinvent an integration for every new tool or data source."
        },
        {
          type: "truefalse",
          q: "MCP is closed and only works with Claude.",
          answer: false,
          explain: "MCP is an open standard; other tools and models can adopt it too, not just Claude."
        },
        {
          type: "match",
          q: "Match the term to its meaning.",
          pairs: [
            ["MCP", "Open standard for connecting AI to tools"],
            ["Anthropic", "The company that created MCP"],
            ["Open standard", "A shared spec anyone can implement"]
          ],
          explain: "MCP is the protocol, Anthropic is its author, and open means anyone can build on it."
        },
        {
          type: "mcq",
          q: "An MCP connection might let Claude reach:",
          choices: [
            "A company's files, a calendar, or an internal database",
            "Your dreams",
            "The distant future",
            "Physical objects in your kitchen"
          ],
          answer: 0,
          explain: "MCP connects Claude to real data and tools like files, calendars, and databases through a shared protocol."
        }
      ]
    },
    {
      id: "l70",
      title: "Computer Use",
      intro: "With computer use, Claude can operate a computer by moving the cursor, clicking, and typing to finish tasks in software.",
      questions: [
        {
          type: "mcq",
          q: "What is 'computer use'?",
          choices: [
            "Claude operating a computer by moving the cursor, clicking, and typing",
            "Claude repairing broken laptops",
            "Claude only reading files, never acting",
            "Claude building physical computers"
          ],
          answer: 0,
          explain: "Computer use lets Claude control a screen the way a person would, to complete tasks in software."
        },
        {
          type: "truefalse",
          q: "Computer use lets Claude click buttons and type into apps on a screen.",
          answer: true,
          explain: "It works by looking at the screen and driving the mouse and keyboard to get things done."
        },
        {
          type: "mcq",
          q: "Because computer use can take real actions, a smart precaution is:",
          choices: [
            "Supervise it and limit what it can access",
            "Give it every password you own",
            "Let it run unattended on your bank account",
            "Never watch what it does"
          ],
          answer: 0,
          explain: "Since it can act on your behalf, oversight and limited permissions keep you safe."
        },
        {
          type: "order",
          q: "Order how computer use completes a task.",
          items: [
            "Claude looks at the screen",
            "Claude decides where to click or type",
            "Claude moves the cursor and acts",
            "The task moves forward"
          ],
          explain: "It repeats a see, decide, act loop, much like a person using the same software."
        },
        {
          type: "fill",
          q: "Computer use is still maturing, so it works best with a human keeping ____ on it.",
          answer: "watch",
          accept: ["watch", "an eye", "oversight", "watch on it"],
          explain: "Human oversight matters because the feature is newer and can make mistakes."
        },
        {
          type: "truefalse",
          q: "Computer use means Claude has become a conscious robot.",
          answer: false,
          explain: "It is just software driving a mouse and keyboard; Claude is not conscious and not a physical robot."
        },
        {
          type: "mcq",
          q: "A fitting task for computer use might be:",
          choices: [
            "Filling out a repetitive web form step by step",
            "Physically dusting your desk",
            "Charging your phone battery",
            "Cooking your dinner"
          ],
          answer: 0,
          explain: "On-screen, repetitive workflows are a natural fit for a system that can click and type."
        }
      ]
    },
    {
      id: "l71",
      title: "Code & Artifacts",
      intro: "Claude writes and previews code and can build small working apps inside Artifacts.",
      questions: [
        {
          type: "mcq",
          q: "What are Artifacts in Claude?",
          choices: [
            "A side panel where Claude shows code, documents, or small working apps you can preview",
            "Ancient museum pieces",
            "A billing feature",
            "A way to delete your chat history"
          ],
          answer: 0,
          explain: "Artifacts give a dedicated space to view, run, and iterate on things like code, docs, or mini apps."
        },
        {
          type: "truefalse",
          q: "Claude can write code in many programming languages, not just one.",
          answer: true,
          explain: "Claude is capable across many languages, from Python and JavaScript to SQL and more."
        },
        {
          type: "mcq",
          q: "A good reason to use an Artifact is:",
          choices: [
            "You want to see a small app actually run and then tweak it",
            "You want to permanently delete Claude",
            "You want Claude to forget your request",
            "You want to disable code entirely"
          ],
          answer: 0,
          explain: "Artifacts let you preview and refine working content instead of just reading it in the chat."
        },
        {
          type: "fill",
          q: "Inside an Artifact you can often ____ a small app to see how it behaves.",
          answer: "preview",
          accept: ["preview", "run", "test", "see"],
          explain: "Previewing lets you interact with the result and ask Claude to change it."
        },
        {
          type: "truefalse",
          q: "You should always review and test code Claude writes before trusting it in production.",
          answer: true,
          explain: "Claude speeds up coding, but you are still responsible for reviewing and testing the result."
        },
        {
          type: "match",
          q: "Match the request to what Claude produces.",
          pairs: [
            ["Build me a tip calculator", "A small working app in an Artifact"],
            ["Write a Python script", "Editable code you can copy"],
            ["Draft a one-page memo", "A document Artifact you can refine"]
          ],
          explain: "Artifacts hold code, apps, and documents that you can preview and keep iterating on."
        },
        {
          type: "mcq",
          q: "If code from Claude has a bug, the best move is:",
          choices: [
            "Describe the error to Claude and ask it to fix it",
            "Assume it can never be fixed",
            "Ship it without testing",
            "Blame the programming language"
          ],
          answer: 0,
          explain: "Sharing the error message lets Claude diagnose and revise the code, often in the same Artifact."
        },
        {
          type: "order",
          q: "Order a typical Artifact coding loop.",
          items: [
            "Ask Claude to build something",
            "Preview it in the Artifact",
            "Point out a change you want",
            "Claude updates the Artifact"
          ],
          explain: "Build, preview, request a change, and iterate is the core Artifacts workflow."
        }
      ]
    },
    {
      id: "l72",
      title: "Long Context & Many Languages",
      intro: "Claude offers large context windows for big inputs, plus strong ability across many human languages.",
      questions: [
        {
          type: "mcq",
          q: "What does a large 'context window' let you do?",
          choices: [
            "Give Claude a lot of text at once, like a whole long document",
            "Open more browser windows",
            "See Claude's source code",
            "Make the app run faster"
          ],
          answer: 0,
          explain: "A larger context window means Claude can consider more input at once, such as long documents or transcripts."
        },
        {
          type: "truefalse",
          q: "Claude can understand and respond in many human languages, not only English.",
          answer: true,
          explain: "Claude is strong across many languages and can translate or converse in them."
        },
        {
          type: "mcq",
          q: "A great use of a long context window is:",
          choices: [
            "Pasting a long report and asking questions across all of it",
            "Sending a single one-word message",
            "Asking for the time",
            "Saying hello"
          ],
          answer: 0,
          explain: "Long inputs like big reports or many pages benefit most from a large context window."
        },
        {
          type: "fill",
          q: "Because Claude handles many languages, you can ask it to ____ text from Spanish to English.",
          answer: "translate",
          accept: ["translate", "translation"],
          explain: "Translation between languages is a natural strength of a multilingual model."
        },
        {
          type: "truefalse",
          q: "A bigger context window means Claude memorizes your chats forever across sessions.",
          answer: false,
          explain: "Context is what fits in a single conversation's window, not permanent memory across separate chats."
        },
        {
          type: "match",
          q: "Match the term to its meaning.",
          pairs: [
            ["Context window", "How much text Claude can consider at once"],
            ["Multilingual", "Able to work across many human languages"],
            ["Translation", "Converting text from one language to another"]
          ],
          explain: "A big context window plus multilingual skill lets Claude handle large, cross-language tasks."
        },
        {
          type: "mcq",
          q: "Which task best combines long context and many languages?",
          choices: [
            "Summarizing a long multilingual document into English",
            "Turning on your porch light",
            "Counting to three",
            "Drawing a single dot"
          ],
          answer: 0,
          explain: "A big, mixed-language document plays to both the large context window and multilingual strength."
        }
      ]
    }
  ]
});
