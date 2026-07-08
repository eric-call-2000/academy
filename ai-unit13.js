window.ACADEMY.addUnit("ai", {
  id: "unit-13",
  title: "Coding with AI",
  color: "#ff4b4b",
  icon: "💻",
  description: "AI as a coding partner — from explaining code to building whole apps.",
  lessons: [
    {
      id: "l97",
      title: "AI as a Coding Partner",
      intro: "Think of the AI as a pair-programmer that explains, drafts, and debugs right alongside you.",
      questions: [
        {
          type: "mcq",
          q: "What is the best mental model for coding with an AI like Claude?",
          choices: [
            "A pair-programmer that drafts and explains code with you",
            "A flawless compiler that never makes mistakes",
            "A replacement for ever reading code yourself",
            "A search engine that only returns links"
          ],
          answer: 0,
          explain: "The AI is a collaborator that speeds you up, but you stay the reviewer and decision-maker."
        },
        {
          type: "truefalse",
          q: "You still need to read and understand the code an AI writes for you.",
          answer: true,
          explain: "AI-generated code can contain bugs, so you remain responsible for reviewing it."
        },
        {
          type: "mcq",
          q: "Which company makes Claude, a popular AI coding assistant?",
          choices: ["Anthropic", "OpenAI", "Google", "Meta"],
          answer: 0,
          explain: "Anthropic makes Claude; OpenAI makes ChatGPT, Google makes Gemini, and Meta makes Llama."
        },
        {
          type: "fill",
          q: "Coding with an AI is often compared to ____ programming, where two people work on the same code together.",
          answer: "pair",
          accept: ["pair", "paired"],
          explain: "Pair programming means two collaborators share the work — the AI plays the second seat."
        },
        {
          type: "match",
          q: "Match each coding task to how an AI partner helps.",
          pairs: [
            ["Explain", "Describe what unfamiliar code does"],
            ["Draft", "Write a first version of a function"],
            ["Debug", "Find why an error happens and suggest a fix"]
          ],
          explain: "Explaining, drafting, and debugging are the three everyday jobs an AI coding partner handles."
        },
        {
          type: "truefalse",
          q: "You need to be an expert programmer before an AI can help you with code.",
          answer: false,
          explain: "Beginners benefit too — the AI can explain concepts and walk you through code in plain English."
        },
        {
          type: "mcq",
          q: "Why is giving the AI context (your goal, language, and constraints) helpful?",
          choices: [
            "It lets the AI tailor its answer to your actual situation",
            "It makes the AI run faster on your computer",
            "It is required or the AI will refuse to respond",
            "It lets the AI access your private files automatically"
          ],
          answer: 0,
          explain: "More relevant context leads to more useful, on-target code suggestions."
        },
        {
          type: "order",
          q: "Order a healthy loop for working with an AI coding partner.",
          items: [
            "Describe what you want",
            "Get a draft from the AI",
            "Review and test the code",
            "Ask for fixes or improvements"
          ],
          explain: "Describe, generate, review, then iterate — you stay in the loop the whole way."
        }
      ]
    },
    {
      id: "l98",
      title: "Explaining & Understanding Code",
      intro: "Paste in code you do not understand and ask the AI what it does, overall or line by line.",
      questions: [
        {
          type: "mcq",
          q: "What is a good first question when you are handed unfamiliar code?",
          choices: [
            "Can you explain what this code does in plain English?",
            "Can you delete all of this code for me?",
            "Can you make this code longer?",
            "Can you tell me who wrote this?"
          ],
          answer: 0,
          explain: "Asking for a plain-English summary is a fast way to understand code you did not write."
        },
        {
          type: "truefalse",
          q: "You can ask an AI to explain code line by line, not just as a whole.",
          answer: true,
          explain: "A line-by-line walkthrough is great for learning exactly how each part works."
        },
        {
          type: "fill",
          q: "Pasting code and asking what it does helps you understand code written by someone ____.",
          answer: "else",
          accept: ["else", "other", "others"],
          explain: "AI explanations shine when you inherit code from teammates or open-source projects."
        },
        {
          type: "mcq",
          q: "If an explanation uses a term you do not know, what is the best move?",
          choices: [
            "Ask a follow-up question about that specific term",
            "Give up and assume the code is too hard",
            "Ignore the term and hope it does not matter",
            "Rewrite the code randomly until it changes"
          ],
          answer: 0,
          explain: "Follow-up questions turn a confusing answer into real understanding."
        },
        {
          type: "match",
          q: "Match each request to what the AI would give you.",
          pairs: [
            ["Summarize this file", "A high-level overview of its purpose"],
            ["Explain this function", "What one function takes in and returns"],
            ["Add comments", "Inline notes describing each step"]
          ],
          explain: "You can dial the zoom level from whole-file overview down to a single commented line."
        },
        {
          type: "truefalse",
          q: "An AI can add helpful comments to code to make it easier to read later.",
          answer: true,
          explain: "Asking for comments is a low-risk way to document code you or others will revisit."
        },
        {
          type: "order",
          q: "Order the steps to understand a confusing block of code with AI.",
          items: [
            "Paste the code into the chat",
            "Ask for a plain-English explanation",
            "Ask follow-up questions on unclear parts",
            "Restate the logic in your own words"
          ],
          explain: "Explaining it back in your own words is the real test that you understood it."
        },
        {
          type: "mcq",
          q: "Why should you double-check an AI's explanation of tricky code?",
          choices: [
            "The AI can misread edge cases or subtle logic",
            "The AI charges more for correct answers",
            "Explanations always erase the original code",
            "The AI cannot read code at all"
          ],
          answer: 0,
          explain: "Explanations are usually helpful but not guaranteed correct, so verify anything critical."
        }
      ]
    },
    {
      id: "l99",
      title: "Writing New Code",
      intro: "Describe your intent clearly and the AI can hand back functions, tests, and scaffolding.",
      questions: [
        {
          type: "mcq",
          q: "What makes a good request when asking an AI to write new code?",
          choices: [
            "A clear description of the goal, inputs, and outputs",
            "The single word 'code'",
            "A demand that it never explain anything",
            "The longest possible prompt with no specifics"
          ],
          answer: 0,
          explain: "Clear goals and expected inputs and outputs lead to code that fits your actual need."
        },
        {
          type: "truefalse",
          q: "You can ask an AI to write tests for the code it just generated.",
          answer: true,
          explain: "Asking for tests helps you verify the new code behaves as expected."
        },
        {
          type: "fill",
          q: "Asking the AI to set up the starting structure of a project is called generating ____.",
          answer: "scaffolding",
          accept: ["scaffolding", "scaffold", "a scaffold"],
          explain: "Scaffolding is the initial skeleton of files and folders you build on top of."
        },
        {
          type: "mcq",
          q: "Which detail is most useful to include when requesting new code?",
          choices: [
            "The programming language you want it in",
            "The current weather where you live",
            "Your favorite color",
            "The AI's own model name"
          ],
          answer: 0,
          explain: "Naming the language and framework keeps the output in a form you can actually use."
        },
        {
          type: "match",
          q: "Match each thing you can ask the AI to write.",
          pairs: [
            ["Function", "A reusable block that does one job"],
            ["Test", "Code that checks other code works"],
            ["Scaffold", "The starting file structure of a project"]
          ],
          explain: "Functions, tests, and scaffolding are common building blocks you can request."
        },
        {
          type: "order",
          q: "Order a smart flow for writing new code with AI.",
          items: [
            "Describe the goal and constraints",
            "Receive a first draft",
            "Run and test it",
            "Refine with specific feedback"
          ],
          explain: "Specific feedback on the draft is what turns a rough version into working code."
        },
        {
          type: "truefalse",
          q: "The first draft an AI produces is always production-ready with no changes.",
          answer: false,
          explain: "First drafts often need review, testing, and refinement before you ship them."
        },
        {
          type: "mcq",
          q: "If the generated code is close but not quite right, what should you do?",
          choices: [
            "Give specific feedback and ask for a revision",
            "Start over with a brand-new unrelated project",
            "Accept it as-is even though it is wrong",
            "Assume the AI cannot be corrected"
          ],
          answer: 0,
          explain: "Iterating with precise feedback is faster than starting over from scratch."
        }
      ]
    },
    {
      id: "l100",
      title: "Debugging & Fixing Errors",
      intro: "Share the exact error and the relevant code, then ask the AI for the cause and the fix.",
      questions: [
        {
          type: "mcq",
          q: "What should you give the AI to get the best help fixing a bug?",
          choices: [
            "The exact error message and the relevant code",
            "Only the word 'broken'",
            "A screenshot with no text at all",
            "Nothing — let the AI guess"
          ],
          answer: 0,
          explain: "The full error message plus the surrounding code gives the AI what it needs to diagnose the bug."
        },
        {
          type: "truefalse",
          q: "Pasting the full error message is more helpful than just saying 'it does not work'.",
          answer: true,
          explain: "Specific error text points the AI straight at the likely cause."
        },
        {
          type: "fill",
          q: "Before fixing a bug, it helps to first ask the AI for the ____ cause of the error.",
          answer: "root",
          accept: ["root", "underlying", "real"],
          explain: "Finding the root cause prevents you from patching a symptom while the real bug remains."
        },
        {
          type: "match",
          q: "Match each debugging step to its purpose.",
          pairs: [
            ["Reproduce", "Make the bug happen reliably"],
            ["Diagnose", "Find why it happens"],
            ["Fix", "Change the code to remove the cause"]
          ],
          explain: "Reproduce, diagnose, then fix is the core loop of debugging with or without AI."
        },
        {
          type: "order",
          q: "Order the steps to debug an error with an AI.",
          items: [
            "Copy the full error message",
            "Share it with the relevant code",
            "Ask for the likely cause",
            "Apply the fix and re-test"
          ],
          explain: "Re-testing after the fix confirms the bug is truly gone, not just hidden."
        },
        {
          type: "truefalse",
          q: "You should re-run your code after applying an AI-suggested fix.",
          answer: true,
          explain: "Always verify — a suggested fix may not work or may introduce a new problem."
        },
        {
          type: "mcq",
          q: "The AI suggests a fix but you do not understand why it works. What is wise?",
          choices: [
            "Ask the AI to explain why the fix resolves the bug",
            "Apply it blindly and never think about it",
            "Delete the whole file to be safe",
            "Assume the bug can never come back"
          ],
          answer: 0,
          explain: "Understanding the fix helps you avoid the same class of bug next time."
        },
        {
          type: "mcq",
          q: "Which extra clue helps an AI debug faster?",
          choices: [
            "What you expected to happen versus what actually happened",
            "The color of your code editor theme",
            "How many hours you have been awake",
            "The brand of your keyboard"
          ],
          answer: 0,
          explain: "Expected-versus-actual behavior tells the AI exactly where reality diverged."
        }
      ]
    },
    {
      id: "l101",
      title: "Vibe Coding & Building Apps",
      intro: "Describe an app in plain language and iterate with the AI to build it, even with little code experience.",
      questions: [
        {
          type: "mcq",
          q: "What does 'vibe coding' generally describe?",
          choices: [
            "Building software mostly by describing it in plain language to an AI",
            "Writing code only at night for the mood",
            "Coding without ever running the program",
            "Coding by copying random files together"
          ],
          answer: 0,
          explain: "Vibe coding leans on natural-language prompts and iteration rather than writing every line by hand."
        },
        {
          type: "truefalse",
          q: "Vibe coding lets people with little coding experience build working apps.",
          answer: true,
          explain: "Describing intent in plain English lowers the barrier to building software."
        },
        {
          type: "fill",
          q: "Building an app with AI works best when you ____ in small steps rather than all at once.",
          answer: "iterate",
          accept: ["iterate", "iterating", "build incrementally"],
          explain: "Small iterations let you test each piece before moving on, keeping the project on track."
        },
        {
          type: "mcq",
          q: "Why is testing your app often during vibe coding important?",
          choices: [
            "Small errors can pile up if you never run what you build",
            "Testing makes the AI charge you extra",
            "Apps only work if never tested",
            "Testing deletes the AI's memory"
          ],
          answer: 0,
          explain: "Frequent testing catches problems early, before they snowball into a tangled mess."
        },
        {
          type: "order",
          q: "Order a sensible vibe-coding flow.",
          items: [
            "Describe the app you want",
            "Get a working first version",
            "Try it and note what is wrong",
            "Ask for changes and repeat"
          ],
          explain: "Describe, build, try, refine — repeating this loop grows the app step by step."
        },
        {
          type: "truefalse",
          q: "Even with vibe coding, it still helps to review what the AI built.",
          answer: true,
          explain: "Reviewing keeps you aware of how your app works and where bugs might hide."
        },
        {
          type: "mcq",
          q: "What is a realistic expectation for a vibe-coded app?",
          choices: [
            "It may need cleanup, testing, and review before it is solid",
            "It will be perfect and bug-free on the first try",
            "It can never be improved once generated",
            "It will run without any code being written at all"
          ],
          answer: 0,
          explain: "AI accelerates building, but real apps still need review and polishing to be reliable."
        }
      ]
    },
    {
      id: "l102",
      title: "AI Coding Tools",
      intro: "From in-editor autocomplete to agentic assistants, tools like Claude Code, Copilot, and Cursor work in different ways.",
      questions: [
        {
          type: "mcq",
          q: "Which of these is an AI coding tool from Anthropic?",
          choices: ["Claude Code", "GitHub Copilot", "Cursor", "Gemini Code Assist"],
          answer: 0,
          explain: "Claude Code is Anthropic's command-line coding tool; Copilot is from GitHub and Cursor is a separate editor."
        },
        {
          type: "match",
          q: "Match each AI coding tool to a short description.",
          pairs: [
            ["Claude Code", "Anthropic's command-line coding assistant"],
            ["GitHub Copilot", "In-editor autocomplete and chat from GitHub"],
            ["Cursor", "An AI-first code editor"]
          ],
          explain: "Each tool takes a different form, but all put an AI assistant close to your code."
        },
        {
          type: "truefalse",
          q: "Some AI coding tools autocomplete lines while others act as agents that make broader changes.",
          answer: true,
          explain: "Autocomplete suggests the next few lines; agentic tools can plan and edit across many files."
        },
        {
          type: "fill",
          q: "A tool that suggests the next line as you type is doing code ____.",
          answer: "autocomplete",
          accept: ["autocomplete", "completion", "auto-complete"],
          explain: "Autocomplete predicts what you are likely to type next, saving keystrokes."
        },
        {
          type: "mcq",
          q: "What does 'agentic' mean for an AI coding assistant?",
          choices: [
            "It can take multi-step actions like editing files and running commands",
            "It only works on weekends",
            "It refuses to write any code",
            "It can feel emotions about your code"
          ],
          answer: 0,
          explain: "Agentic assistants carry out multi-step tasks on their own, not just single suggestions. Today's AI is still a narrow tool, not a conscious being."
        },
        {
          type: "truefalse",
          q: "GitHub Copilot is made by Anthropic.",
          answer: false,
          explain: "GitHub Copilot comes from GitHub; Claude Code is Anthropic's coding tool."
        },
        {
          type: "mcq",
          q: "Which tool is best described as an AI-first code editor?",
          choices: ["Cursor", "Claude Code", "Whisper", "Midjourney"],
          answer: 0,
          explain: "Cursor is an editor built around AI; Whisper transcribes audio and Midjourney generates images."
        },
        {
          type: "order",
          q: "Order these tools from narrowest to broadest in what they typically do.",
          items: [
            "Line-by-line autocomplete",
            "In-editor chat about your code",
            "Agentic assistant that edits many files"
          ],
          explain: "Assistance ranges from finishing a line to autonomously changing a whole project."
        }
      ]
    },
    {
      id: "l103",
      title: "Reviewing AI-Written Code",
      intro: "Read it, run it, and test it — never trust generated code blindly, and watch for bugs and security issues.",
      questions: [
        {
          type: "mcq",
          q: "What is the golden rule for AI-generated code?",
          choices: [
            "Read, run, and test it before trusting it",
            "Ship it straight to users unread",
            "Assume it is always secure",
            "Never look at it again once generated"
          ],
          answer: 0,
          explain: "AI can hallucinate or introduce bugs, so review and testing are non-negotiable."
        },
        {
          type: "truefalse",
          q: "AI-generated code can contain security vulnerabilities.",
          answer: true,
          explain: "Generated code may mishandle input or secrets, so a security-minded review matters."
        },
        {
          type: "fill",
          q: "When an AI states something false with confidence, that is called a ____.",
          answer: "hallucination",
          accept: ["hallucination", "hallucinations"],
          explain: "AI models predict plausible text, so they can produce confident but wrong code or claims."
        },
        {
          type: "match",
          q: "Match each review action to what it catches.",
          pairs: [
            ["Read", "Logic that does not match your intent"],
            ["Run", "Crashes and obvious errors"],
            ["Test", "Wrong results on specific inputs"]
          ],
          explain: "Reading, running, and testing each catch a different class of problem."
        },
        {
          type: "mcq",
          q: "The AI references a library function you have never heard of. What should you do?",
          choices: [
            "Verify the function actually exists before relying on it",
            "Assume it must be real and ship it",
            "Delete your whole project",
            "Trust it because the AI sounds confident"
          ],
          answer: 0,
          explain: "AI can invent plausible-sounding functions, so confirm they exist in the real library."
        },
        {
          type: "truefalse",
          q: "If code runs without crashing, it is guaranteed to be correct.",
          answer: false,
          explain: "Code can run fine yet still produce wrong answers, so you must test its actual output."
        },
        {
          type: "order",
          q: "Order a safe review process for AI-written code.",
          items: [
            "Read the code to understand it",
            "Run it to see if it works",
            "Test it against real cases",
            "Fix any bugs or security issues"
          ],
          explain: "Read, run, test, then fix — this catches issues before they reach real users."
        },
        {
          type: "mcq",
          q: "Why should you be extra careful with generated code that handles passwords or user data?",
          choices: [
            "Mistakes there can create real security and privacy risks",
            "That code is always slower to run",
            "The AI refuses to write such code",
            "It never needs testing"
          ],
          answer: 0,
          explain: "Security-sensitive code deserves the closest review, since bugs can expose private data."
        }
      ]
    },
    {
      id: "l104",
      title: "Learning to Code with AI",
      intro: "Ask why, request exercises, and build real projects step by step so you actually learn, not just copy.",
      questions: [
        {
          type: "mcq",
          q: "To actually learn while coding with AI, what should you do?",
          choices: [
            "Ask why the code works, not just what to paste",
            "Copy answers without ever reading them",
            "Avoid asking any questions",
            "Never write code yourself"
          ],
          answer: 0,
          explain: "Understanding the 'why' builds skill; blind copy-paste leaves you dependent on the AI."
        },
        {
          type: "truefalse",
          q: "You can ask an AI to create practice exercises to help you learn a concept.",
          answer: true,
          explain: "Requesting exercises turns the AI into a tutor that gives you hands-on practice."
        },
        {
          type: "fill",
          q: "Learning is stronger when you build a real ____ step by step instead of only reading.",
          answer: "project",
          accept: ["project", "app", "program"],
          explain: "Applying concepts in a real project cements them far better than passive reading."
        },
        {
          type: "mcq",
          q: "Which request helps you learn rather than just get an answer?",
          choices: [
            "Explain this concept and give me a small exercise to try",
            "Just write the whole thing for me",
            "Tell me nothing about how it works",
            "Give me the answer with no explanation"
          ],
          answer: 0,
          explain: "Asking for an explanation plus practice makes the AI a teacher, not just an answer machine."
        },
        {
          type: "match",
          q: "Match each learning request to what it gives you.",
          pairs: [
            ["Explain why", "Understanding of the underlying idea"],
            ["Give an exercise", "Hands-on practice to try yourself"],
            ["Review my attempt", "Feedback on the code you wrote"]
          ],
          explain: "Explanations, exercises, and feedback together form a strong learning loop."
        },
        {
          type: "truefalse",
          q: "Writing code yourself and asking the AI to review it is a good way to learn.",
          answer: true,
          explain: "Attempting it first and then getting feedback deepens your understanding."
        },
        {
          type: "order",
          q: "Order a learning-focused loop for coding with AI.",
          items: [
            "Ask the AI to explain a concept",
            "Try a small exercise yourself",
            "Ask the AI to review your attempt",
            "Apply it in a real project"
          ],
          explain: "Learn the idea, practice it, get feedback, then use it for real to make it stick."
        },
        {
          type: "mcq",
          q: "What is a risk of only copying AI code without understanding it?",
          choices: [
            "You struggle to fix or extend it later on your own",
            "Your code becomes automatically perfect",
            "The AI stops working forever",
            "You learn faster than everyone else"
          ],
          answer: 0,
          explain: "Without understanding, you cannot debug or grow the code when the AI is not around."
        }
      ]
    }
  ]
});
