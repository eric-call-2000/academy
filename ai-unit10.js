window.ACADEMY.addUnit("ai", {
  id: "unit-10",
  title: "Claude for Developers",
  color: "#1cb0f6",
  icon: "🚀",
  description: "Building on Claude: the API, Claude Code, tools, agents, and cost.",
  lessons: [
    {
      id: "l73",
      title: "The Claude API",
      intro: "Send messages with roles (system, user, assistant) to build apps powered by Claude.",
      questions: [
        {
          type: "mcq",
          q: "Which company builds Claude and offers the Claude API?",
          choices: ["Anthropic", "OpenAI", "Google", "Meta"],
          answer: 0,
          explain: "Anthropic makes Claude. OpenAI makes ChatGPT, Google makes Gemini, and Meta makes Llama."
        },
        {
          type: "match",
          q: "Match each message role to its job.",
          pairs: [
            ["system", "Sets Claude's overall instructions and behavior"],
            ["user", "Carries what the person is asking"],
            ["assistant", "Holds Claude's replies in the conversation"]
          ],
          explain: "A conversation is a list of messages. The system role frames the task; user and assistant roles alternate as the chat continues."
        },
        {
          type: "truefalse",
          q: "The Claude API lets your own app send prompts to Claude and get responses back programmatically.",
          answer: true,
          explain: "The API is how developers wire Claude into their own products instead of using the chat website."
        },
        {
          type: "fill",
          q: "The special ____ prompt sets Claude's role and rules before the user's messages arrive.",
          answer: "system",
          accept: ["system", "system prompt"],
          explain: "The system prompt is the best place to define tone, constraints, and the assistant's job."
        },
        {
          type: "mcq",
          q: "Which of Claude's model tiers is the most capable for hard reasoning?",
          choices: ["Opus", "Sonnet", "Haiku", "Turbo"],
          answer: 0,
          explain: "Opus is the most capable tier, Sonnet is balanced, and Haiku is the fastest and smallest. Turbo is not a Claude tier."
        },
        {
          type: "order",
          q: "Order the basic steps of a single API call to Claude.",
          items: [
            "Build a list of messages with roles",
            "Send the request to the Claude API",
            "Claude returns a response",
            "Your app uses the reply"
          ],
          explain: "Every call follows this shape: you send messages, Claude responds, and your code does something with the answer."
        },
        {
          type: "truefalse",
          q: "You need a secret API key to authenticate requests to the Claude API.",
          answer: true,
          explain: "An API key identifies and authorizes your app. Keep it secret and never ship it in front-end code."
        },
        {
          type: "mcq",
          q: "Why is it risky to embed your API key directly in a public website's JavaScript?",
          choices: [
            "Anyone can read it and run up charges on your account",
            "The key stops working after one request",
            "Claude refuses keys used in browsers",
            "It makes responses slower"
          ],
          answer: 0,
          explain: "Front-end code is visible to everyone. Keep keys on a server so they cannot be stolen and abused."
        }
      ]
    },
    {
      id: "l74",
      title: "Claude Code: The Agentic CLI",
      intro: "Claude that can read and edit your codebase and run commands to get real work done.",
      questions: [
        {
          type: "mcq",
          q: "What is Claude Code?",
          choices: [
            "An agentic command-line tool that reads, edits, and runs code in your project",
            "A website for chatting with Claude",
            "A programming language made by Anthropic",
            "A spreadsheet plugin"
          ],
          answer: 0,
          explain: "Claude Code runs in your terminal and can actually work inside your codebase, not just talk about it."
        },
        {
          type: "truefalse",
          q: "Claude Code can edit files and run commands in your project, not just suggest text.",
          answer: true,
          explain: "That is what makes it agentic: it takes real actions like editing files and running tests."
        },
        {
          type: "fill",
          q: "Because it can take actions on its own, Claude Code is called an ____ tool.",
          answer: "agentic",
          accept: ["agentic", "agent"],
          explain: "Agentic tools plan and act in steps toward a goal rather than returning a single reply."
        },
        {
          type: "order",
          q: "Order how Claude Code typically handles a bug-fix request.",
          items: [
            "Read the relevant files to understand the code",
            "Make an edit to fix the bug",
            "Run the tests to check the fix",
            "Report what changed"
          ],
          explain: "It explores, edits, verifies, and summarizes, looping until the task is done."
        },
        {
          type: "mcq",
          q: "Why is it wise to review Claude Code's changes before committing them?",
          choices: [
            "AI can make mistakes, so a human should verify the diff",
            "The tool deletes files at random",
            "Reviewing makes the code run faster",
            "Commits are impossible without review"
          ],
          answer: 0,
          explain: "Claude Code is powerful but not perfect. You stay in control by reviewing what it changed."
        },
        {
          type: "truefalse",
          q: "Claude Code runs entirely in a web browser and cannot touch local files.",
          answer: false,
          explain: "It runs in your terminal and works directly with your local project files."
        },
        {
          type: "mcq",
          q: "Which task fits Claude Code well?",
          choices: [
            "Refactor a function and update its tests across several files",
            "Physically install a graphics card",
            "Predict tomorrow's lottery numbers",
            "Charge your laptop battery"
          ],
          answer: 0,
          explain: "Claude Code shines at multi-file coding work: reading context, editing, and running tests."
        }
      ]
    },
    {
      id: "l75",
      title: "Prompt Caching",
      intro: "Cache long, reused context so repeat requests are cheaper and faster.",
      questions: [
        {
          type: "mcq",
          q: "What does prompt caching let you do?",
          choices: [
            "Reuse a large, unchanging chunk of context across many requests",
            "Store Claude's answers forever with no cost",
            "Skip writing prompts entirely",
            "Train Claude on your data"
          ],
          answer: 0,
          explain: "Caching stores a stable prefix (like a long document or instructions) so it does not have to be reprocessed each time."
        },
        {
          type: "truefalse",
          q: "Prompt caching can make repeat requests both cheaper and faster.",
          answer: true,
          explain: "Reusing cached context avoids re-reading the same tokens, saving money and time."
        },
        {
          type: "fill",
          q: "Prompt caching works best for context that stays the ____ across many calls.",
          answer: "same",
          accept: ["same", "constant", "unchanged"],
          explain: "The part you cache should be stable. If it changes every request, there is nothing to reuse."
        },
        {
          type: "mcq",
          q: "Which content is the best candidate to cache?",
          choices: [
            "A long reference document reused on every request",
            "The user's brand-new question each time",
            "A random number",
            "The current timestamp"
          ],
          answer: 0,
          explain: "Cache the big, reused, stable parts. The changing user question is what varies from call to call."
        },
        {
          type: "match",
          q: "Match each part of a request to whether it is a good fit for caching.",
          pairs: [
            ["Long system instructions reused every call", "Good to cache"],
            ["The user's fresh question", "Not cached"]
          ],
          explain: "Stable, repeated content is worth caching; the changing part of each request is not."
        },
        {
          type: "truefalse",
          q: "Prompt caching is mainly useful when you never reuse any context.",
          answer: false,
          explain: "Caching only helps when you reuse context. With no reuse, there is nothing to cache."
        },
        {
          type: "order",
          q: "Order the flow of a request that benefits from caching.",
          items: [
            "Place the big reusable context first and cache it",
            "Add the user's changing question after it",
            "Send the request",
            "Later requests reuse the cached prefix"
          ],
          explain: "Put stable content up front so it can be cached and reused by later calls."
        }
      ]
    },
    {
      id: "l76",
      title: "Tokens, Streaming & Cost",
      intro: "You pay per token for input and output; streaming shows the answer as it's generated.",
      questions: [
        {
          type: "mcq",
          q: "What is a token, roughly?",
          choices: [
            "A small chunk of text, often a word or part of a word",
            "A dollar amount you deposit",
            "A single letter only",
            "A full paragraph"
          ],
          answer: 0,
          explain: "Models read and write in tokens, which are pieces of text. Cost and limits are measured in tokens."
        },
        {
          type: "truefalse",
          q: "With most APIs you are billed separately for input tokens and output tokens.",
          answer: true,
          explain: "Input (what you send) and output (what Claude generates) are usually priced differently."
        },
        {
          type: "fill",
          q: "____ sends the answer piece by piece as it is generated, instead of waiting for the whole reply.",
          answer: "streaming",
          accept: ["streaming", "stream"],
          explain: "Streaming improves the feel of an app by showing text as it arrives."
        },
        {
          type: "mcq",
          q: "What is the main user-facing benefit of streaming?",
          choices: [
            "The reader sees words appear quickly instead of staring at a blank screen",
            "It makes the answer cheaper per token",
            "It removes all mistakes from the answer",
            "It caches the prompt automatically"
          ],
          answer: 0,
          explain: "Streaming lowers perceived wait time. Words show up as they are produced."
        },
        {
          type: "mcq",
          q: "Which move most reliably lowers the cost of an API call?",
          choices: [
            "Send less input and ask for a shorter output",
            "Add more filler to the prompt",
            "Request the longest possible answer",
            "Repeat the question three times"
          ],
          answer: 0,
          explain: "Fewer tokens in and out means lower cost. Trim the prompt and cap the output length."
        },
        {
          type: "truefalse",
          q: "Choosing a smaller tier like Haiku for simple tasks can cut cost compared to Opus.",
          answer: true,
          explain: "Match the tier to the task. Haiku is cheaper and faster for easy work; save Opus for the hard stuff."
        },
        {
          type: "order",
          q: "Order these tiers from lowest cost to highest capability.",
          items: ["Haiku", "Sonnet", "Opus"],
          explain: "Haiku is the fastest and smallest, Sonnet is balanced, and Opus is the most capable."
        }
      ]
    },
    {
      id: "l77",
      title: "Building with Tools & MCP",
      intro: "Wire Claude up to tools and MCP servers so it can take real actions.",
      questions: [
        {
          type: "mcq",
          q: "What does giving Claude tools let it do?",
          choices: [
            "Call functions to fetch data or take actions beyond just writing text",
            "Rewrite its own training data",
            "Run without any prompt",
            "Become conscious"
          ],
          answer: 0,
          explain: "Tool use lets the model call functions you define, like looking up a record or sending a request."
        },
        {
          type: "fill",
          q: "MCP stands for Model ____ Protocol, an open standard from Anthropic.",
          answer: "context",
          accept: ["context"],
          explain: "The Model Context Protocol is an open standard that connects AI apps to tools and data sources."
        },
        {
          type: "truefalse",
          q: "MCP is an open standard, so many different apps and servers can use it.",
          answer: true,
          explain: "Being an open standard means tools built for MCP can be shared across many AI clients."
        },
        {
          type: "mcq",
          q: "What is an MCP server, in plain terms?",
          choices: [
            "A component that exposes tools or data to an AI app in a standard way",
            "A physical rack in a data center only",
            "A model that replaces Claude",
            "A billing dashboard"
          ],
          answer: 0,
          explain: "An MCP server offers capabilities (tools, files, data) that a compatible AI client can use."
        },
        {
          type: "order",
          q: "Order how Claude uses a tool during a request.",
          items: [
            "Claude decides a tool is needed",
            "Your app runs the tool and gets a result",
            "The result is sent back to Claude",
            "Claude uses the result to answer"
          ],
          explain: "Tool use is a loop: the model requests a tool, your code runs it, and the result feeds back in."
        },
        {
          type: "match",
          q: "Match each term to what it describes.",
          pairs: [
            ["Tool", "A function Claude can call to act or fetch data"],
            ["MCP", "An open standard for connecting AI to tools and data"]
          ],
          explain: "A tool is a single capability; MCP is the shared protocol that makes many tools easy to plug in."
        },
        {
          type: "truefalse",
          q: "With tools, Claude can look up live information instead of relying only on what it already knows.",
          answer: true,
          explain: "Tools let the model reach current data, which helps with facts that change over time."
        }
      ]
    },
    {
      id: "l78",
      title: "Agents & the Agent SDK",
      intro: "Build autonomous, multi-step agents on top of Claude.",
      questions: [
        {
          type: "mcq",
          q: "What is an AI agent?",
          choices: [
            "A system that plans and takes multiple steps, using tools, to reach a goal",
            "A single one-word answer",
            "A model with no access to tools",
            "A human customer-support rep"
          ],
          answer: 0,
          explain: "An agent loops through thinking, acting, and observing across several steps instead of replying once."
        },
        {
          type: "truefalse",
          q: "An agent often loops: think, act with a tool, observe the result, then decide the next step.",
          answer: true,
          explain: "This plan-act-observe loop is the core pattern that makes agents able to handle multi-step tasks."
        },
        {
          type: "fill",
          q: "The Agent ____ gives developers building blocks to create agents on top of Claude.",
          answer: "sdk",
          accept: ["sdk", "software development kit"],
          explain: "An SDK (software development kit) is a toolkit of code that speeds up building on a platform."
        },
        {
          type: "mcq",
          q: "Why add guardrails and step limits to an agent?",
          choices: [
            "To keep it from looping forever or taking unsafe actions",
            "To make it slower on purpose",
            "To stop it from ever using tools",
            "To hide its answers"
          ],
          answer: 0,
          explain: "Autonomy needs limits. Caps and checks prevent runaway loops and risky actions."
        },
        {
          type: "order",
          q: "Order one cycle of an agent's loop.",
          items: [
            "Decide the next step",
            "Call a tool to act",
            "Observe the result",
            "Update the plan"
          ],
          explain: "Each cycle moves the agent closer to the goal, repeating until the task is complete."
        },
        {
          type: "truefalse",
          q: "Today's AI agents are narrow tools, not a general human-level intelligence (AGI).",
          answer: true,
          explain: "Agents are useful but narrow. They are not conscious and are not AGI."
        },
        {
          type: "mcq",
          q: "Which task is a good fit for an agent rather than a single prompt?",
          choices: [
            "Research a topic across several sources and compile a summary",
            "Return the current time as one word",
            "Echo back a single sentence",
            "Add two numbers"
          ],
          answer: 0,
          explain: "Multi-step tasks that need tools and iteration are where agents earn their keep."
        }
      ]
    },
    {
      id: "l79",
      title: "Structured Output & Batch",
      intro: "Force answers into a JSON schema, and run many requests together in batch to save money.",
      questions: [
        {
          type: "mcq",
          q: "Why ask Claude for structured output like JSON?",
          choices: [
            "So your program can reliably parse and use the fields",
            "To make the answer longer",
            "Because JSON is the only format Claude knows",
            "To hide the answer from users"
          ],
          answer: 0,
          explain: "A fixed shape lets code read specific fields without guessing, which makes apps more reliable."
        },
        {
          type: "fill",
          q: "A ____ defines the exact fields and types you expect in a structured response.",
          answer: "schema",
          accept: ["schema", "json schema"],
          explain: "A schema is the contract for the output shape, so both sides agree on the fields."
        },
        {
          type: "truefalse",
          q: "Batch processing runs many requests together and is typically cheaper than sending them one at a time.",
          answer: true,
          explain: "Batch trades immediate speed for lower cost, which is great for large non-urgent jobs."
        },
        {
          type: "mcq",
          q: "Which job is a good fit for batch processing?",
          choices: [
            "Classifying ten thousand reviews overnight",
            "A live chat where the user waits for each reply",
            "A single urgent question",
            "Streaming a real-time answer"
          ],
          answer: 0,
          explain: "Batch shines for big offline workloads where you can wait for results and want to save money."
        },
        {
          type: "match",
          q: "Match each feature to its main benefit.",
          pairs: [
            ["Structured output", "Reliable, machine-readable fields"],
            ["Batch processing", "Lower cost for many requests"]
          ],
          explain: "Structured output is about parseable shape; batch is about cheaper bulk processing."
        },
        {
          type: "truefalse",
          q: "Batch processing is the best choice when a user is waiting for an instant answer.",
          answer: false,
          explain: "Batch is not instant. For real-time replies, use a normal (often streaming) request instead."
        },
        {
          type: "order",
          q: "Order the steps to get structured output you can trust.",
          items: [
            "Define the schema you want",
            "Ask Claude to fill it",
            "Validate the returned fields",
            "Use the parsed data in your app"
          ],
          explain: "Define, request, validate, then use. Validation catches any output that does not match the schema."
        }
      ]
    },
    {
      id: "l80",
      title: "Safety in Production",
      intro: "Use system prompts, guardrails, testing, and monitoring when you ship AI features.",
      questions: [
        {
          type: "mcq",
          q: "What is a good use of the system prompt for safety?",
          choices: [
            "Set clear rules and boundaries for how the assistant should behave",
            "Store the user's password",
            "Speed up token billing",
            "Replace all testing"
          ],
          answer: 0,
          explain: "A well-written system prompt defines scope and limits, steering the model toward safe behavior."
        },
        {
          type: "truefalse",
          q: "Because LLMs can hallucinate, you should not blindly trust their output in production.",
          answer: true,
          explain: "Models predict plausible text and can be confidently wrong, so verify important outputs."
        },
        {
          type: "fill",
          q: "____ are checks and limits that keep an AI feature inside safe, intended behavior.",
          answer: "guardrails",
          accept: ["guardrails", "guard rails"],
          explain: "Guardrails include input filters, output checks, and rules that constrain what the system does."
        },
        {
          type: "mcq",
          q: "Why is monitoring important after you ship an AI feature?",
          choices: [
            "To catch failures, misuse, and cost spikes early",
            "To make the model smarter automatically",
            "To delete all logs",
            "To avoid ever updating the prompt"
          ],
          answer: 0,
          explain: "Monitoring surfaces problems in real usage so you can respond before they grow."
        },
        {
          type: "match",
          q: "Match each safety practice to what it does.",
          pairs: [
            ["System prompt", "Defines rules and boundaries"],
            ["Testing", "Checks behavior before launch"],
            ["Monitoring", "Watches behavior after launch"]
          ],
          explain: "Together these cover the lifecycle: set rules, test before shipping, and watch after shipping."
        },
        {
          type: "order",
          q: "Order a safe path to shipping an AI feature.",
          items: [
            "Write clear system instructions and guardrails",
            "Test with tricky and adversarial inputs",
            "Launch to users",
            "Monitor and improve"
          ],
          explain: "Design safety in, test it hard, ship, then keep watching and refining."
        },
        {
          type: "truefalse",
          q: "Never exposing your API key to end users is a basic production safety rule.",
          answer: true,
          explain: "Keep keys on the server. A leaked key can be abused and run up cost on your account."
        }
      ]
    }
  ]
});
