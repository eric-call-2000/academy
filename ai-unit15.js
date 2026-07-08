window.ACADEMY.addUnit("ai", {
  id: "unit-15",
  title: "Agents, RAG & Tools",
  color: "#a560e8",
  icon: "🤝",
  description: "How AI goes from chatbot to system that fetches, decides, and acts.",
  lessons: [
    {
      id: "l113",
      title: "What Is an AI Agent?",
      intro: "An AI agent is an LLM that plans, uses tools, and takes multiple steps toward a goal instead of just replying once.",
      questions: [
        {
          type: "mcq",
          q: "What best describes an AI agent?",
          choices: [
            "An LLM that plans and takes multiple steps using tools to reach a goal",
            "A chatbot that only ever answers one message at a time",
            "A physical robot with arms and legs",
            "A search engine that returns a list of links"
          ],
          answer: 0,
          explain: "An agent goes beyond a single reply: it plans, acts, checks results, and keeps going until the goal is met."
        },
        {
          type: "truefalse",
          q: "An agent can loop: act, look at the result, then decide its next action.",
          answer: true,
          explain: "That act-observe-decide loop is exactly what separates an agent from a one-shot chatbot reply."
        },
        {
          type: "match",
          q: "Match each agent part to what it does.",
          pairs: [
            ["Plan", "Decide the steps needed to reach the goal"],
            ["Tools", "Fetch real data or take actions in the world"],
            ["Loop", "Repeat until the task is finished"]
          ],
          explain: "Planning, tools, and a repeating loop are the core ingredients that make an LLM into an agent."
        },
        {
          type: "order",
          q: "Put a simple agent loop in order.",
          items: [
            "Read the goal",
            "Plan the next step",
            "Use a tool to act",
            "Check the result",
            "Repeat or finish"
          ],
          explain: "Agents cycle through planning, acting, and checking, then decide whether to keep going or stop."
        },
        {
          type: "fill",
          q: "Unlike a one-shot chatbot, an agent takes ____ steps toward a goal.",
          answer: "multiple",
          accept: ["multiple", "many", "several"],
          explain: "Taking multiple steps, not just one reply, is a defining trait of an agent."
        },
        {
          type: "mcq",
          q: "Which task is a good fit for an agent rather than a plain chatbot reply?",
          choices: [
            "Look up three flights, compare prices, and book the cheapest one",
            "Answer the single question 'what is the capital of France?'",
            "Define one vocabulary word",
            "Repeat back what the user just typed"
          ],
          answer: 0,
          explain: "Multi-step work that needs fetching data and taking actions is where an agent earns its keep."
        },
        {
          type: "truefalse",
          q: "An agent is conscious and truly understands its goals the way a person does.",
          answer: false,
          explain: "Agents still just predict useful actions from text. They are not conscious and do not understand like humans do."
        }
      ]
    },
    {
      id: "l114",
      title: "Tool Use / Function Calling",
      intro: "With tool use, the model decides to call tools you provide so it can get real data or perform real actions.",
      questions: [
        {
          type: "mcq",
          q: "What is 'tool use' (also called function calling)?",
          choices: [
            "The model chooses to call a function you defined to fetch data or act",
            "The model rewrites its own source code",
            "The user manually copies text between two apps",
            "The model deletes tools it does not like"
          ],
          answer: 0,
          explain: "You describe available tools, and the model decides when to call one and with what inputs."
        },
        {
          type: "truefalse",
          q: "Tool use lets an LLM reach live data, like today's weather, instead of guessing from training.",
          answer: true,
          explain: "Calling a weather tool returns real current data, which the model cannot know from training alone."
        },
        {
          type: "order",
          q: "Put a tool-use round in order.",
          items: [
            "Model decides a tool is needed",
            "Model outputs the tool name and inputs",
            "Your code runs the tool",
            "The result is sent back to the model",
            "Model uses the result to answer"
          ],
          explain: "The model requests a call, your code runs it, and the result flows back so the model can finish the answer."
        },
        {
          type: "match",
          q: "Match each part of a tool definition to its meaning.",
          pairs: [
            ["Name", "What the tool is called"],
            ["Description", "When and why to use it"],
            ["Inputs", "The arguments the tool needs"]
          ],
          explain: "A clear name, description, and input schema help the model call the right tool correctly."
        },
        {
          type: "fill",
          q: "The model does not run the tool itself; your ____ actually executes it and returns the result.",
          answer: "code",
          accept: ["code", "program", "app", "application"],
          explain: "The model only requests the call. Your own code runs the function and hands back the output."
        },
        {
          type: "mcq",
          q: "Why write a clear description for each tool?",
          choices: [
            "So the model can tell when that tool is the right one to call",
            "So the tool runs faster on the server",
            "So the tool costs less money to store",
            "Descriptions are decorative and ignored by the model"
          ],
          answer: 0,
          explain: "The model reads your descriptions to decide which tool fits the task, so clarity matters."
        },
        {
          type: "truefalse",
          q: "A tool can perform an action, like sending an email, not just read data.",
          answer: true,
          explain: "Tools can both read data and take actions, which is how agents actually do things in the world."
        }
      ]
    },
    {
      id: "l115",
      title: "RAG: Retrieval-Augmented Generation",
      intro: "RAG retrieves relevant documents and feeds them to the model so its answer is grounded in your own data.",
      questions: [
        {
          type: "mcq",
          q: "What does RAG (Retrieval-Augmented Generation) do?",
          choices: [
            "Retrieves relevant documents and adds them to the prompt before answering",
            "Retrains the whole model on your data every night",
            "Blocks the model from using any outside information",
            "Randomly generates text with no sources"
          ],
          answer: 0,
          explain: "RAG fetches relevant text and puts it in the prompt so the answer is grounded in real sources."
        },
        {
          type: "truefalse",
          q: "RAG helps an assistant answer from your private documents without retraining the model.",
          answer: true,
          explain: "RAG feeds your documents into the prompt at answer time, so no model retraining is needed."
        },
        {
          type: "order",
          q: "Put the RAG steps in order.",
          items: [
            "User asks a question",
            "Search your documents for relevant text",
            "Add that text to the prompt",
            "Model writes a grounded answer"
          ],
          explain: "Retrieve first, then generate: the found text grounds the model's final answer."
        },
        {
          type: "match",
          q: "Match each RAG piece to its job.",
          pairs: [
            ["Retrieval", "Find the most relevant documents"],
            ["Augmentation", "Add those documents to the prompt"],
            ["Generation", "Write the answer using them"]
          ],
          explain: "The three words in RAG name its three steps: retrieve, augment the prompt, then generate."
        },
        {
          type: "fill",
          q: "RAG makes answers more trustworthy because they are ____ in your real documents.",
          answer: "grounded",
          accept: ["grounded", "based", "rooted"],
          explain: "Grounding the answer in retrieved source text reduces made-up claims."
        },
        {
          type: "mcq",
          q: "A big benefit of RAG over relying on the model's memory alone is that it can:",
          choices: [
            "Use fresh or private info the model was never trained on",
            "Make the model conscious",
            "Remove the need for any prompt at all",
            "Guarantee the model never makes a mistake"
          ],
          answer: 0,
          explain: "RAG can supply new, changing, or private data the model could not have memorized in training."
        },
        {
          type: "truefalse",
          q: "RAG completely eliminates all hallucinations, so answers are always correct.",
          answer: false,
          explain: "RAG reduces hallucinations by grounding answers, but it does not make them perfect or guaranteed."
        }
      ]
    },
    {
      id: "l116",
      title: "Vector Databases & Semantic Search",
      intro: "Vector databases store text as embeddings so you can find it by meaning, which is the retrieval half of RAG.",
      questions: [
        {
          type: "mcq",
          q: "What is an embedding?",
          choices: [
            "A list of numbers that captures the meaning of a piece of text",
            "A picture of the text",
            "A password that locks a document",
            "The file name of a document"
          ],
          answer: 0,
          explain: "An embedding turns text into a vector of numbers so similar meanings land near each other."
        },
        {
          type: "truefalse",
          q: "Semantic search can find a match even when the words are different but the meaning is close.",
          answer: true,
          explain: "Because it compares meaning, 'car' and 'automobile' can match even though the words differ."
        },
        {
          type: "match",
          q: "Match each term to its role in retrieval.",
          pairs: [
            ["Embedding", "Numbers that represent meaning"],
            ["Vector database", "Stores embeddings and finds close ones"],
            ["Semantic search", "Finding text by meaning, not exact words"]
          ],
          explain: "Embeddings encode meaning, a vector database stores them, and semantic search finds the nearest ones."
        },
        {
          type: "order",
          q: "Put semantic search in order.",
          items: [
            "Turn each document into an embedding",
            "Store the embeddings in a vector database",
            "Turn the user's question into an embedding",
            "Return the documents with the closest embeddings"
          ],
          explain: "Both documents and the question become vectors, then you return the closest matches by meaning."
        },
        {
          type: "fill",
          q: "Semantic search finds text by its ____ rather than exact keyword matches.",
          answer: "meaning",
          accept: ["meaning", "semantics"],
          explain: "Meaning-based matching is what makes semantic search more flexible than plain keyword search."
        },
        {
          type: "mcq",
          q: "How does a vector database decide which stored text is relevant?",
          choices: [
            "It finds embeddings closest to the question's embedding",
            "It picks documents at random",
            "It always returns the newest document",
            "It only matches identical spelling"
          ],
          answer: 0,
          explain: "Closeness between vectors stands in for closeness in meaning, so nearby embeddings are the best matches."
        },
        {
          type: "truefalse",
          q: "Keyword search matches by meaning, while semantic search matches only exact words.",
          answer: false,
          explain: "It is the other way around: keyword search matches exact words, semantic search matches by meaning."
        }
      ]
    },
    {
      id: "l117",
      title: "MCP: Connecting AI to Your Stuff",
      intro: "MCP (Model Context Protocol) is a standard, open way to plug tools and data sources into an assistant.",
      questions: [
        {
          type: "mcq",
          q: "What is MCP (Model Context Protocol)?",
          choices: [
            "An open standard for connecting tools and data sources to an AI assistant",
            "A brand of laptop",
            "A type of image file",
            "A pricing plan for AI subscriptions"
          ],
          answer: 0,
          explain: "MCP is an open standard, introduced by Anthropic, for wiring tools and data into an assistant in a consistent way."
        },
        {
          type: "truefalse",
          q: "MCP is an open standard created by Anthropic.",
          answer: true,
          explain: "Anthropic introduced MCP as an open standard so many tools and apps can interoperate."
        },
        {
          type: "match",
          q: "Match each idea to what it means for MCP.",
          pairs: [
            ["Standard", "One shared way to connect, not custom glue each time"],
            ["Server", "Exposes a tool or data source to the assistant"],
            ["Client", "The assistant that connects to those servers"]
          ],
          explain: "An MCP client (the assistant) connects to MCP servers that expose tools and data through a shared standard."
        },
        {
          type: "fill",
          q: "MCP stands for Model ____ Protocol.",
          answer: "context",
          accept: ["context"],
          explain: "The 'C' in MCP is Context: it is a protocol for giving models context through tools and data."
        },
        {
          type: "mcq",
          q: "Why is a shared standard like MCP useful?",
          choices: [
            "Any compliant tool can connect without custom one-off integration each time",
            "It makes the model run without electricity",
            "It hides all data from the user forever",
            "It replaces the need for any model at all"
          ],
          answer: 0,
          explain: "With a common standard, a tool built once can plug into any assistant that speaks MCP."
        },
        {
          type: "truefalse",
          q: "MCP is meant to be used by only one company's assistant and nothing else.",
          answer: false,
          explain: "MCP is open, so many different assistants and tools can adopt it, not just one company's."
        },
        {
          type: "order",
          q: "Put a basic MCP connection in order.",
          items: [
            "Start an MCP server that exposes a tool",
            "The assistant connects to that server as a client",
            "The assistant sees the tool the server offers",
            "The assistant calls the tool when it is useful"
          ],
          explain: "An MCP server offers tools, the assistant connects as a client, then it can discover and call them."
        }
      ]
    },
    {
      id: "l118",
      title: "Multi-Agent Systems",
      intro: "In a multi-agent system, several specialized agents cooperate while an orchestrator coordinates them.",
      questions: [
        {
          type: "mcq",
          q: "What is a multi-agent system?",
          choices: [
            "Several specialized agents cooperating on a task, often with a coordinator",
            "A single agent copied to run twice as fast",
            "A group of humans without any AI",
            "One model answering one question"
          ],
          answer: 0,
          explain: "Multi-agent means several agents, often specialized, working together on parts of a larger task."
        },
        {
          type: "truefalse",
          q: "An orchestrator agent can break a job into parts and hand them to specialist agents.",
          answer: true,
          explain: "An orchestrator coordinates: it splits the work and routes each piece to the right specialist."
        },
        {
          type: "match",
          q: "Match each role in a multi-agent setup.",
          pairs: [
            ["Orchestrator", "Coordinates the other agents"],
            ["Specialist", "Handles one focused kind of task"],
            ["Handoff", "Passing work from one agent to another"]
          ],
          explain: "An orchestrator directs specialists, and handoffs move work between them until the task is done."
        },
        {
          type: "order",
          q: "Put a simple multi-agent flow in order.",
          items: [
            "Orchestrator receives the big task",
            "It splits the task into parts",
            "Each specialist works on its part",
            "Results are combined into one answer"
          ],
          explain: "Split, delegate to specialists, then combine: that is the basic shape of a multi-agent flow."
        },
        {
          type: "fill",
          q: "The agent that coordinates the others is often called the ____.",
          answer: "orchestrator",
          accept: ["orchestrator", "coordinator", "manager"],
          explain: "The orchestrator (or coordinator) plans the work and directs the specialist agents."
        },
        {
          type: "mcq",
          q: "One reason to split work across specialized agents is that:",
          choices: [
            "Each agent can focus on one job it handles well",
            "It guarantees zero cost",
            "It makes the agents conscious",
            "It removes the need to check any results"
          ],
          answer: 0,
          explain: "Specialization lets each agent focus, which can improve quality on complex, multi-part tasks."
        },
        {
          type: "truefalse",
          q: "More agents always means better and cheaper results with no downsides.",
          answer: false,
          explain: "Adding agents adds coordination overhead and cost, so more is not automatically better."
        }
      ]
    },
    {
      id: "l119",
      title: "Autonomy & Human-in-the-Loop",
      intro: "You decide how much an agent may do alone, using approvals and guardrails for the riskier actions.",
      questions: [
        {
          type: "mcq",
          q: "What does 'human-in-the-loop' mean?",
          choices: [
            "A person reviews or approves certain agent actions before they happen",
            "The agent runs with no oversight at all",
            "A human does the whole task by hand",
            "The agent only works at night"
          ],
          answer: 0,
          explain: "Human-in-the-loop keeps a person in the decision path to approve or correct risky actions."
        },
        {
          type: "truefalse",
          q: "It is wise to require human approval before an agent takes a high-risk action, like sending money.",
          answer: true,
          explain: "High-stakes or hard-to-undo actions are exactly where an approval step protects you."
        },
        {
          type: "match",
          q: "Match each control to what it does.",
          pairs: [
            ["Approval", "A human confirms before the action runs"],
            ["Guardrail", "A rule that limits what the agent may do"],
            ["Autonomy", "How much the agent may do on its own"]
          ],
          explain: "Approvals, guardrails, and a chosen autonomy level together decide how freely an agent operates."
        },
        {
          type: "fill",
          q: "Keeping a person available to approve risky steps is called human-in-the-____.",
          answer: "loop",
          accept: ["loop"],
          explain: "Human-in-the-loop means a human stays in the action loop to review important decisions."
        },
        {
          type: "mcq",
          q: "Which action most deserves a human approval step?",
          choices: [
            "Permanently deleting a customer database",
            "Summarizing a public news article",
            "Rewording one sentence more clearly",
            "Counting the words in a paragraph"
          ],
          answer: 0,
          explain: "Irreversible, high-impact actions like deleting data are prime candidates for required approval."
        },
        {
          type: "order",
          q: "Order these actions from lowest to highest risk (safest to hand to an agent first).",
          items: [
            "Read a document",
            "Draft an email for review",
            "Send that email to a customer",
            "Delete company records"
          ],
          explain: "Reading is low risk; sending and deleting are higher risk and better gated behind approvals."
        },
        {
          type: "truefalse",
          q: "Full autonomy with no guardrails is always the safest way to run an agent.",
          answer: false,
          explain: "Full autonomy with no guardrails is the riskiest setup, not the safest; controls reduce harm."
        }
      ]
    },
    {
      id: "l120",
      title: "Limits of Agents Today",
      intro: "Agents can be brittle, compound their own errors, and cost more, so it helps to know where they shine and where they still fail.",
      questions: [
        {
          type: "mcq",
          q: "Why can a long agent run go badly wrong?",
          choices: [
            "A small early mistake can compound across later steps",
            "Agents get tired and need to rest",
            "Longer runs always cost nothing",
            "Agents refuse to take more than one step"
          ],
          answer: 0,
          explain: "In a multi-step loop, one early error can feed the next step and snowball into a big failure."
        },
        {
          type: "truefalse",
          q: "Running an agent through many steps and tool calls can cost more than a single reply.",
          answer: true,
          explain: "Each step and tool call adds work and tokens, so long agent runs can get expensive."
        },
        {
          type: "match",
          q: "Match each limit to what it means.",
          pairs: [
            ["Brittleness", "Small changes can break the agent's behavior"],
            ["Compounding errors", "Early mistakes grow across later steps"],
            ["Cost", "Many steps and tool calls add up"]
          ],
          explain: "Brittleness, compounding errors, and cost are three real limits to plan around when using agents."
        },
        {
          type: "fill",
          q: "When an early mistake makes later steps worse, we say the errors ____.",
          answer: "compound",
          accept: ["compound", "snowball", "accumulate"],
          explain: "Compounding errors are a key reason to add checkpoints and human review in long agent runs."
        },
        {
          type: "mcq",
          q: "Which statement about today's AI agents is accurate?",
          choices: [
            "They are narrow and can fail on messy real-world tasks, not general AGI",
            "They are conscious and fully general like a human",
            "They never make mistakes once set up",
            "They no longer need any testing or oversight"
          ],
          answer: 0,
          explain: "Today's agents are narrow tools that can be brittle; they are not general, conscious, or error-free."
        },
        {
          type: "order",
          q: "Order these ways to keep an agent reliable, from first setup to ongoing use.",
          items: [
            "Start with a small, well-scoped task",
            "Add guardrails and approvals",
            "Test on realistic examples",
            "Monitor runs and fix failures"
          ],
          explain: "Scope small, add controls, test on real cases, then keep watching: that keeps agents dependable."
        },
        {
          type: "truefalse",
          q: "Because agents can fail in surprising ways, testing and monitoring are still important.",
          answer: true,
          explain: "Brittleness and compounding errors mean ongoing testing and monitoring remain essential."
        }
      ]
    }
  ]
});
