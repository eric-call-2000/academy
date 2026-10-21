window.ACADEMY.addUnit("ai", {
  id: "unit-12",
  title: "AI for Work & Productivity",
  color: "#ce82ff",
  icon: "📈",
  description: "Everyday ways AI makes real work faster.",
  lessons: [
    {
      id: "l89",
      title: "Research & Ramping Up Fast",
      intro: "Use AI to explain topics, compare options, and get plain-language overviews — then verify the important claims yourself.",
      questions: [
        {
          type: "mcq",
          q: "You are new to a topic and want a quick overview. What is a good first ask?",
          choices: [
            "Explain this topic in plain language, like I am a beginner",
            "Give me the most detailed, technical explanation you can",
            "List every important paper ever published on this topic",
            "Quiz me on this topic before you explain anything at all"
          ],
          answer: 0,
          explain: "Asking for a plain-language, beginner-level overview gives you a fast, usable mental model to build on."
        },
        {
          type: "truefalse",
          q: "AI can hallucinate, so you should verify important facts before relying on them.",
          answer: true,
          explain: "LLMs predict plausible text and can state wrong things confidently, so verify anything that matters."
        },
        {
          type: "mcq",
          q: "Which request helps you choose between two tools?",
          choices: [
            "Compare these two options side by side with pros and cons for my use case",
            "Tell me which of these two tools most people use, so I can go with that",
            "Describe the first tool in detail; I'll decide about the second one later",
            "Which of these two tools is better overall? Just give me the answer, please"
          ],
          answer: 0,
          explain: "A side-by-side comparison tied to your use case turns a vague choice into a clear tradeoff you can act on."
        },
        {
          type: "fill",
          q: "Because AI can be confidently wrong, you should always ____ any claim you plan to rely on.",
          answer: "verify",
          accept: ["verify", "check", "confirm", "fact-check", "double-check"],
          explain: "Verifying key claims against a trusted source protects you from acting on a hallucination."
        },
        {
          type: "order",
          q: "Order these steps for ramping up on a new subject with AI:",
          items: [
            "Ask for a plain-language overview",
            "Ask follow-up questions on the parts you do not understand",
            "Verify the key claims against a trusted source"
          ],
          explain: "Overview first, then drill in, then verify — this builds understanding fast without trusting blindly."
        },
        {
          type: "match",
          q: "Match each research ask to what it is good for:",
          pairs: [
            ["Explain like I am new", "A fast beginner overview"],
            ["Compare A vs B", "A clear tradeoff decision"],
            ["Cite your sources", "Something you can go verify"]
          ],
          explain: "Different phrasings unlock different outputs — overview, comparison, or checkable references."
        },
        {
          type: "truefalse",
          q: "Asking the AI to cite sources means those sources are guaranteed to be real.",
          answer: false,
          explain: "AI can invent plausible-looking citations, so open the sources and confirm they actually exist and say what is claimed."
        },
        {
          type: "mcq",
          q: "A good way to catch a wrong answer is to:",
          choices: [
            "Cross-check the claim against an authoritative source",
            "Ask the AI whether it is confident in its own answer",
            "Rephrase the question and see if the answer changes",
            "Trust it if the answer is detailed and well written"
          ],
          answer: 0,
          explain: "Cross-checking against a reliable source is the simplest way to catch a confident but wrong answer."
        }
      ]
    },
    {
      id: "l90",
      title: "Reading Long Documents",
      intro: "Summarize reports and contracts, and pull out the key points and risks so you can read faster and smarter.",
      questions: [
        {
          type: "mcq",
          q: "You paste a 30-page report. Which ask gets you the most useful result?",
          choices: [
            "Summarize the main points and flag anything that looks risky",
            "Tell me whether this report is good or bad overall",
            "Rewrite the whole report in simpler language for me",
            "List every number that appears anywhere in the report"
          ],
          answer: 0,
          explain: "Asking for a summary plus risks turns a long document into decisions and things to watch for."
        },
        {
          type: "truefalse",
          q: "AI can help you spot key clauses in a contract, but it does not replace a lawyer for important agreements.",
          answer: true,
          explain: "AI is a helpful first pass, but high-stakes legal decisions still need a qualified professional."
        },
        {
          type: "fill",
          q: "Turning a long document into a few short bullet points is called a ____.",
          answer: "summary",
          accept: ["summary", "summarization", "recap"],
          explain: "A summary compresses a long document into the points that matter so you can grasp it quickly."
        },
        {
          type: "mcq",
          q: "Why is it smart to ask AI to quote the exact text it is referring to?",
          choices: [
            "So you can check the summary against the real document",
            "So the AI reads the document more carefully the first time",
            "So the summary is shorter and quicker for you to read",
            "So the AI can't add any knowledge from its own training"
          ],
          answer: 0,
          explain: "Asking for the exact quoted text lets you verify the summary against the source and catch mistakes."
        },
        {
          type: "order",
          q: "Order these steps for reviewing a long contract with AI:",
          items: [
            "Provide the full document",
            "Ask for a summary and a list of risks",
            "Ask it to quote the clauses behind each risk",
            "Verify the flagged clauses in the original"
          ],
          explain: "Provide, summarize, cite, then verify — you get speed without losing accuracy on the parts that matter."
        },
        {
          type: "match",
          q: "Match each ask to the output it produces:",
          pairs: [
            ["Summarize this", "The main points"],
            ["List the risks", "Things to watch out for"],
            ["Quote the clause", "The exact source text"]
          ],
          explain: "Precise asks return precise outputs: overview, risks, or verifiable quotes."
        },
        {
          type: "truefalse",
          q: "A very long document may not fit at once, so it can help to feed it in sections.",
          answer: true,
          explain: "Newer models handle larger context windows, but for very long inputs, splitting into sections is a reliable approach."
        },
        {
          type: "mcq",
          q: "The AI summarized a report but missed a section you care about. Best next step?",
          choices: [
            "Ask it to focus specifically on that section",
            "Ask it to summarize the whole report again",
            "Paste the report again in case it was cut off",
            "Ask for a longer summary of the whole document"
          ],
          answer: 0,
          explain: "Redirecting the AI to the exact section you care about gets you the detail the general summary skipped."
        }
      ]
    },
    {
      id: "l91",
      title: "Spreadsheets & Data",
      intro: "Get formulas, clean up messy data, understand analyses, and turn raw numbers into clear words.",
      questions: [
        {
          type: "mcq",
          q: "You need a spreadsheet formula but do not know the syntax. A good ask is:",
          choices: [
            "Write a formula that sums column B only where column A equals Paid",
            "Write me a formula for my spreadsheet; it's about tracking payments",
            "What's the best formula to use for adding things up in a spreadsheet?",
            "Help me with a SUMIF formula; I'm not sure how the syntax works"
          ],
          answer: 0,
          explain: "Describing exactly what you want in plain words lets the AI produce the correct formula for you."
        },
        {
          type: "truefalse",
          q: "You should double-check an AI-generated formula against a few known values.",
          answer: true,
          explain: "Spot-checking a formula on rows where you already know the answer confirms it does what you intended."
        },
        {
          type: "fill",
          q: "Fixing typos, blanks, and inconsistent formatting in a dataset is called ____ the data.",
          answer: "cleaning",
          accept: ["cleaning", "clean", "cleansing", "tidying"],
          explain: "Cleaning data removes errors and inconsistencies so your analysis is trustworthy."
        },
        {
          type: "mcq",
          q: "What does it mean to turn numbers into words with AI?",
          choices: [
            "Write a plain-language summary explaining what the data shows",
            "Spell out every number in the table as words, like 'forty-two'",
            "Round every number in the table so it is easier to read at a glance",
            "Replace the numbers with labels such as high, medium, and low"
          ],
          answer: 0,
          explain: "Turning numbers into words means explaining, in plain language, what a table or chart actually tells you."
        },
        {
          type: "match",
          q: "Match each data task to what AI helps you do:",
          pairs: [
            ["Write a formula", "Calculate a value"],
            ["Clean the data", "Fix messy entries"],
            ["Explain the result", "Say what the numbers mean"]
          ],
          explain: "AI can build formulas, tidy data, and translate results into plain language you can share."
        },
        {
          type: "order",
          q: "Order a sensible workflow for a messy sales spreadsheet:",
          items: [
            "Clean the messy and inconsistent entries",
            "Build the formulas you need",
            "Ask AI to explain what the results mean"
          ],
          explain: "Clean first so your formulas run on good data, then interpret the results in words."
        },
        {
          type: "truefalse",
          q: "AI can explain an analysis someone else built so you understand it before presenting it.",
          answer: true,
          explain: "Pasting an unfamiliar formula or chart and asking for a plain-language explanation helps you understand it fast."
        },
        {
          type: "mcq",
          q: "Before pasting a spreadsheet with customer names into a public AI tool, you should:",
          choices: [
            "Consider removing or masking sensitive personal data first",
            "Check that the file is under the tool's upload size limit",
            "Convert the spreadsheet to a PDF so it can't be edited",
            "Ask the tool to promise it won't save the customer names"
          ],
          answer: 0,
          explain: "Protecting sensitive data is part of using AI responsibly — mask or remove it before sharing."
        }
      ]
    },
    {
      id: "l92",
      title: "Meetings & Notes",
      intro: "Turn raw notes into clean summaries, clear action items, and ready-to-send follow-up emails.",
      questions: [
        {
          type: "mcq",
          q: "You have messy meeting notes. Which ask is most useful?",
          choices: [
            "Summarize these notes and list the action items with owners",
            "Rewrite these notes as full sentences in a formal style",
            "Turn these notes into a long, detailed meeting transcript",
            "Tell me whether this meeting was a good use of everyone's time"
          ],
          answer: 0,
          explain: "Asking for a summary plus action items with owners turns raw notes into a plan people can follow."
        },
        {
          type: "fill",
          q: "A specific task someone agreed to do after a meeting is called an ____ item.",
          answer: "action",
          accept: ["action"],
          explain: "Action items are the concrete next steps, ideally each with an owner and a due date."
        },
        {
          type: "truefalse",
          q: "AI can draft a follow-up email from your meeting notes that you then review and edit.",
          answer: true,
          explain: "AI gives you a solid first draft in seconds; you stay in control by reviewing and adjusting before sending."
        },
        {
          type: "order",
          q: "Order the steps from raw notes to a sent follow-up:",
          items: [
            "Paste the raw meeting notes",
            "Ask for a summary and action items",
            "Ask for a follow-up email draft",
            "Review, edit, and send it"
          ],
          explain: "Summarize, extract actions, draft the email, then review — you keep the final say on what goes out."
        },
        {
          type: "match",
          q: "Match each ask to its output:",
          pairs: [
            ["Summarize the meeting", "A short recap"],
            ["List action items", "Who does what next"],
            ["Draft a follow-up email", "A message ready to review"]
          ],
          explain: "One set of notes can become a recap, a task list, and an email with the right asks."
        },
        {
          type: "mcq",
          q: "Why review the AI draft before sending it to your team?",
          choices: [
            "It might miss context or state something incorrectly",
            "AI drafts are usually far too long to send as they are",
            "Your team may notice that AI helped write the draft",
            "AI drafts often include formatting email apps can't show"
          ],
          answer: 0,
          explain: "You are accountable for what you send, and AI can miss nuance or get a detail wrong, so review first."
        },
        {
          type: "truefalse",
          q: "You should paste confidential meeting details into any AI tool without checking your workplace policy.",
          answer: false,
          explain: "Always follow your organization's data policy; some tools and details should not be shared externally."
        }
      ]
    },
    {
      id: "l93",
      title: "Planning & Project Breakdown",
      intro: "Turn a big goal into a clear step-by-step plan and a checklist you can actually follow.",
      questions: [
        {
          type: "mcq",
          q: "You have a vague goal and feel stuck. A helpful ask is:",
          choices: [
            "Break this goal into clear steps with a checklist",
            "Tell me it is impossible",
            "Give me one giant paragraph with no structure",
            "Change my goal to something else"
          ],
          answer: 0,
          explain: "Breaking a goal into steps and a checklist turns an overwhelming task into manageable actions."
        },
        {
          type: "fill",
          q: "Splitting a big project into smaller, doable pieces is called breaking it ____.",
          answer: "down",
          accept: ["down", "into steps", "apart"],
          explain: "Breaking a project down into smaller steps makes it easier to start and track progress."
        },
        {
          type: "truefalse",
          q: "Giving the AI a deadline and any constraints helps it produce a more realistic plan.",
          answer: true,
          explain: "Context like deadlines, budget, and constraints lets the AI tailor the plan to your real situation."
        },
        {
          type: "order",
          q: "Order these steps for planning a project with AI:",
          items: [
            "State your goal and constraints",
            "Ask for a step-by-step plan",
            "Ask for a checklist of tasks",
            "Adjust the plan to fit reality"
          ],
          explain: "Share context, get a plan, turn it into a checklist, then adjust — the plan is a draft you refine."
        },
        {
          type: "match",
          q: "Match each planning ask to its result:",
          pairs: [
            ["Break down the goal", "A step-by-step plan"],
            ["Make a checklist", "Tasks you can tick off"],
            ["Add deadlines", "A rough timeline"]
          ],
          explain: "Different asks shape the plan into steps, a checklist, or a timeline."
        },
        {
          type: "mcq",
          q: "The AI's plan assumes a bigger team than you have. Best move?",
          choices: [
            "Tell it your real team size and ask it to revise",
            "Follow the plan and hire people to fill the gaps",
            "Cut the plan's tasks in half and keep the timeline",
            "Ask for a new plan in a new chat with no context"
          ],
          answer: 0,
          explain: "Correcting a wrong assumption and asking for a revision gets you a plan that fits your actual resources."
        },
        {
          type: "truefalse",
          q: "An AI-generated plan is a starting draft, not a fixed order you must obey exactly.",
          answer: true,
          explain: "Treat the plan as a helpful draft you adapt with your own judgment and knowledge of the situation."
        },
        {
          type: "mcq",
          q: "Which detail would most improve the plan the AI gives you?",
          choices: [
            "Your deadline, budget, and who is available",
            "A request that the plan be very detailed",
            "Examples of plans that other teams have used",
            "A note that the plan is important to get right"
          ],
          answer: 0,
          explain: "Concrete constraints like deadline, budget, and people make the plan realistic instead of generic."
        }
      ]
    },
    {
      id: "l94",
      title: "Learning New Skills",
      intro: "Use AI as a patient personal tutor: ask for practice problems, feedback on your work, and helpful analogies.",
      questions: [
        {
          type: "mcq",
          q: "You want AI to help you learn, not just hand you answers. A good ask is:",
          choices: [
            "Quiz me and give feedback on my answers",
            "Just give me the final answer with no explanation",
            "Do the whole assignment for me",
            "Refuse to explain anything"
          ],
          answer: 0,
          explain: "Asking to be quizzed with feedback turns the AI into an active tutor rather than an answer machine."
        },
        {
          type: "fill",
          q: "Explaining a hard idea by comparing it to something familiar is called an ____.",
          answer: "analogy",
          accept: ["analogy", "analogies"],
          explain: "A good analogy links a new concept to something you already know, making it easier to grasp."
        },
        {
          type: "truefalse",
          q: "You can paste your own work and ask the AI for specific feedback on how to improve it.",
          answer: true,
          explain: "Sharing your work and asking for targeted feedback is one of the fastest ways to improve a skill."
        },
        {
          type: "match",
          q: "Match each tutoring ask to what it gives you:",
          pairs: [
            ["Quiz me", "Practice questions"],
            ["Give me feedback", "Ways to improve"],
            ["Explain with an analogy", "An easier way to understand"]
          ],
          explain: "AI can drill you, critique your work, and reframe ideas — all useful ways to learn."
        },
        {
          type: "order",
          q: "Order a smart learning loop with AI:",
          items: [
            "Ask for a simple explanation",
            "Try a practice problem yourself",
            "Ask for feedback on your attempt"
          ],
          explain: "Learn a little, practice actively, then get feedback — this loop builds real understanding."
        },
        {
          type: "mcq",
          q: "Why should you still try problems yourself instead of only reading AI answers?",
          choices: [
            "Active practice builds real skill better than passive reading",
            "AI answers are usually wrong, so you need to check every one",
            "Reading solutions is slower than solving the problems yourself",
            "You can't ask an AI for practice problems on most subjects"
          ],
          answer: 0,
          explain: "Actively practicing and getting feedback builds durable skill far better than passively reading solutions."
        },
        {
          type: "truefalse",
          q: "Because AI can be wrong, you should sanity-check what it teaches on anything important.",
          answer: true,
          explain: "A tutor that can hallucinate is still worth verifying — confirm key facts as you learn them."
        }
      ]
    },
    {
      id: "l95",
      title: "Decision Support",
      intro: "Generate pros and cons, criteria comparisons, and frameworks to inform your choice — as input, not the final call.",
      questions: [
        {
          type: "mcq",
          q: "How should you treat AI output when making an important decision?",
          choices: [
            "As helpful input that you weigh, not the final decision",
            "As the answer to follow, since it has seen more data than you",
            "As a tiebreaker you only use when you can't decide yourself",
            "As unreliable, so it's best to leave AI out of big decisions"
          ],
          answer: 0,
          explain: "AI can lay out options and tradeoffs, but the judgment and accountability stay with you."
        },
        {
          type: "truefalse",
          q: "Asking AI for a pros and cons list can help you think through a decision more clearly.",
          answer: true,
          explain: "A structured pros and cons list surfaces tradeoffs you might otherwise overlook."
        },
        {
          type: "fill",
          q: "A structured way of thinking through a decision, like listing weighted criteria, is called a decision ____.",
          answer: "framework",
          accept: ["framework", "frameworks"],
          explain: "A decision framework gives you a repeatable, structured way to compare options."
        },
        {
          type: "mcq",
          q: "You are choosing a vendor. Which ask gives the most useful structure?",
          choices: [
            "Compare these vendors across cost, support, and reliability",
            "Which of these vendors is the best one? Just tell me which",
            "Tell me everything you know about each of these vendors",
            "Which vendor do most companies like mine usually choose?"
          ],
          answer: 0,
          explain: "Comparing options across the criteria you care about makes the tradeoffs visible and decision-ready."
        },
        {
          type: "match",
          q: "Match each decision ask to its output:",
          pairs: [
            ["Pros and cons", "Tradeoffs at a glance"],
            ["Criteria comparison", "Options scored on what matters"],
            ["A framework", "A structured way to decide"]
          ],
          explain: "Each ask gives a different lens: quick tradeoffs, scored comparison, or a repeatable structure."
        },
        {
          type: "order",
          q: "Order a good AI-assisted decision process:",
          items: [
            "Describe the decision and your criteria",
            "Ask AI for a comparison and tradeoffs",
            "Add your own knowledge and judgment",
            "Make the final call yourself"
          ],
          explain: "Use AI to organize the options, then bring your own context and own the final decision."
        },
        {
          type: "truefalse",
          q: "AI is conscious and understands the stakes of your decision the way you do.",
          answer: false,
          explain: "Today's AI is narrow and predicts text; it has no consciousness or personal stake, so you own the decision."
        }
      ]
    },
    {
      id: "l96",
      title: "Building Reusable Workflows",
      intro: "Save templates, prompts, and Projects so tasks you do again and again get faster every time.",
      questions: [
        {
          type: "mcq",
          q: "You write a great prompt you will reuse weekly. What is the smart move?",
          choices: [
            "Save it as a reusable template",
            "Forget it and rewrite it from scratch each time",
            "Never use it again",
            "Delete it immediately"
          ],
          answer: 0,
          explain: "Saving a strong prompt as a template means you never have to reinvent it for repeat tasks."
        },
        {
          type: "fill",
          q: "A reusable starting point you fill in each time, like a standard email you customize, is called a ____.",
          answer: "template",
          accept: ["template", "templates"],
          explain: "A template captures the reusable structure so you only change the specific details each time."
        },
        {
          type: "truefalse",
          q: "In Claude, a Project can hold shared context and instructions so related chats start with the same background.",
          answer: true,
          explain: "A Claude Project keeps reusable context and instructions in one place so every related chat is consistent."
        },
        {
          type: "match",
          q: "Match each reusable asset to what it saves you:",
          pairs: [
            ["A saved prompt", "Retyping the same request"],
            ["A template", "Rebuilding the same structure"],
            ["A Project", "Re-explaining the same context"]
          ],
          explain: "Prompts, templates, and Projects each remove a different kind of repeated setup work."
        },
        {
          type: "order",
          q: "Order the steps to build a reusable workflow:",
          items: [
            "Notice a task you repeat often",
            "Craft a prompt or template that works well",
            "Save it so you can reuse it",
            "Refine it over time as you learn what works"
          ],
          explain: "Spot the repeat, build a good version, save it, and keep improving it — that is a real workflow."
        },
        {
          type: "mcq",
          q: "What is a benefit of reusing a refined prompt instead of starting fresh each time?",
          choices: [
            "More consistent results with less effort",
            "Slower work and worse output",
            "It forces you to forget what worked",
            "It makes results random"
          ],
          answer: 0,
          explain: "Reusing a proven prompt gives you consistent, higher-quality results while saving time."
        },
        {
          type: "truefalse",
          q: "The Model Context Protocol (MCP) is an open standard from Anthropic for connecting AI tools to your data and apps.",
          answer: true,
          explain: "MCP is Anthropic's open standard that lets AI assistants plug into external tools and data sources in a shared way."
        },
        {
          type: "mcq",
          q: "For a heavy, repeated task where cost and speed matter, how might you pick a Claude model?",
          choices: [
            "Use a faster, smaller tier like Haiku when it is good enough, and a more capable tier like Opus for hard work",
            "Use the most capable tier like Opus for every run, since quality always matters more than the cost of calls",
            "Use the smallest, cheapest tier like Haiku for everything, since cost is the only thing that really matters",
            "Pick whichever model tier was released most recently, since newer models are always the right choice here"
          ],
          answer: 0,
          explain: "Matching the model tier to the task — Haiku for speed, Sonnet for balance, Opus for the hardest work — keeps reusable workflows efficient."
        }
      ]
    }
  ]
});
