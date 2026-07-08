window.ACADEMY.addUnit("ai", {
  id: "unit-4",
  title: "Prompting Fundamentals",
  color: "#ce82ff",
  icon: "💬",
  description: "The single biggest skill: how to ask an AI for what you actually want.",
  lessons: [
    {
      id: "l25",
      title: "What Is a Prompt?",
      intro: "A prompt is your instruction or question to the model, and it is the biggest lever you control over output quality.",
      questions: [
        {
          type: "mcq",
          q: "What is a prompt?",
          choices: [
            "The instruction or question you give the AI",
            "The name of the AI company",
            "A hidden setting only engineers can change",
            "The price you pay per message"
          ],
          answer: 0,
          explain: "A prompt is simply what you tell the model to do or ask it. It is the main thing you control."
        },
        {
          type: "truefalse",
          q: "Improving your prompt is one of the easiest ways to get better results from an AI.",
          answer: true,
          explain: "The prompt is your biggest lever. Small wording changes often produce much better output."
        },
        {
          type: "mcq",
          q: "Two people ask Claude the same task but get very different answers. What most likely explains it?",
          choices: [
            "They wrote different prompts",
            "The AI is conscious and moody",
            "One of them paid more money",
            "The AI ran out of words"
          ],
          answer: 0,
          explain: "Output quality tracks prompt quality. Clearer, more detailed prompts tend to get better answers."
        },
        {
          type: "fill",
          q: "The instruction or question you type to an AI is called a ____.",
          answer: "prompt",
          accept: ["prompt", "prompts"],
          explain: "A prompt is your message to the model. It drives everything the model does next."
        },
        {
          type: "truefalse",
          q: "A prompt has to be a question; you cannot give the AI a command.",
          answer: false,
          explain: "Prompts can be questions OR commands, like 'Summarize this email' or 'Write a poem about rain'."
        },
        {
          type: "mcq",
          q: "Which of these is the WEAKEST prompt?",
          choices: [
            "help",
            "Summarize this article in three bullet points",
            "Write a friendly two-line reply to this customer",
            "List five dinner ideas using chicken and rice"
          ],
          answer: 0,
          explain: "One vague word like 'help' gives the model almost nothing to work with. Detail improves results."
        },
        {
          type: "match",
          q: "Match each idea to its meaning.",
          pairs: [
            ["Prompt", "What you tell the AI to do"],
            ["Output", "What the AI gives back"]
          ],
          explain: "You write a prompt, and the model produces an output in response."
        },
        {
          type: "truefalse",
          q: "Learning to prompt well is a real, practical skill worth practicing.",
          answer: true,
          explain: "Prompting is a learnable skill. This whole unit builds it step by step."
        }
      ]
    },
    {
      id: "l26",
      title: "Anatomy of a Great Prompt",
      intro: "Great prompts combine a clear task, useful context, sensible constraints, and a desired format.",
      questions: [
        {
          type: "match",
          q: "Match each prompt ingredient to what it does.",
          pairs: [
            ["Task", "What you want the AI to do"],
            ["Context", "Background the AI should use"],
            ["Constraints", "Limits and rules to follow"],
            ["Format", "How the answer should be shaped"]
          ],
          explain: "Task, context, constraints, and format are the four building blocks of a strong prompt."
        },
        {
          type: "order",
          q: "Put these prompt-writing steps in a sensible order.",
          items: [
            "State the task",
            "Add context",
            "Set constraints",
            "Choose a format"
          ],
          explain: "Say what you want, give background, add limits, then request how it should be delivered."
        },
        {
          type: "mcq",
          q: "In 'Write a 100-word thank-you email to a customer named Sam, in a warm tone,' what is the constraint?",
          choices: [
            "100 words",
            "an email",
            "the customer Sam",
            "a warm tone"
          ],
          answer: 0,
          explain: "The 100-word limit is a constraint. The task is 'write an email', tone and format are separate pieces."
        },
        {
          type: "truefalse",
          q: "Adding more relevant detail to a prompt generally leads to a better result.",
          answer: true,
          explain: "Relevant detail helps the model aim at what you actually want. Vague prompts get vague answers."
        },
        {
          type: "fill",
          q: "The part of a prompt that says what you want the AI to actually do is the ____.",
          answer: "task",
          accept: ["task", "instruction"],
          explain: "The task is the core action, like 'summarize', 'draft', or 'explain'."
        },
        {
          type: "mcq",
          q: "Which prompt best uses all four ingredients?",
          choices: [
            "Write a 3-bullet summary of this report for busy executives, keeping it under 60 words.",
            "Summarize this.",
            "Report.",
            "Make it good."
          ],
          answer: 0,
          explain: "It has a task (summarize), context (for executives), constraint (under 60 words), and format (3 bullets)."
        },
        {
          type: "truefalse",
          q: "Piling in random, unrelated detail always makes a prompt better.",
          answer: false,
          explain: "Only RELEVANT detail helps. Irrelevant clutter can distract the model."
        },
        {
          type: "match",
          q: "Match each phrase to its ingredient.",
          pairs: [
            ["Explain in plain English", "Format"],
            ["for a 10-year-old", "Context"],
            ["Explain photosynthesis", "Task"]
          ],
          explain: "One prompt can carry a task, its audience context, and a format request all at once."
        }
      ]
    },
    {
      id: "l27",
      title: "Be Specific and Clear",
      intro: "Vague in, vague out: specificity beats politeness, so say exactly what you want.",
      questions: [
        {
          type: "mcq",
          q: "Which prompt will most likely get you a useful answer?",
          choices: [
            "Give me 3 gift ideas under $30 for a coworker who loves hiking.",
            "Any gift ideas?",
            "Gifts.",
            "I need something."
          ],
          answer: 0,
          explain: "Specific details like budget, count, and interests let the model target a real answer."
        },
        {
          type: "truefalse",
          q: "Saying 'please' improves an AI's answer more than being specific does.",
          answer: false,
          explain: "Politeness is fine, but specificity is what actually improves results. Details beat manners here."
        },
        {
          type: "fill",
          q: "The saying 'vague in, vague ____' reminds us that fuzzy prompts get fuzzy answers.",
          answer: "out",
          accept: ["out"],
          explain: "If your prompt is vague, the output will be too. Clarity in the prompt drives clarity in the answer."
        },
        {
          type: "mcq",
          q: "Your first answer was too long. What is the clearest fix?",
          choices: [
            "Ask again: 'Shorten that to 3 sentences.'",
            "Type 'no' and hope it guesses",
            "Ask 'why did you do that?'",
            "Start a brand-new unrelated chat"
          ],
          answer: 0,
          explain: "Tell the model exactly what to change. Specific follow-ups fix problems fast."
        },
        {
          type: "order",
          q: "Order these prompts from vaguest to most specific.",
          items: [
            "Write something.",
            "Write an email.",
            "Write a short apology email to a client for a late delivery."
          ],
          explain: "Each step adds detail, and the most specific prompt gives the model the best target."
        },
        {
          type: "truefalse",
          q: "If a prompt could be read two different ways, the model might guess the one you did not mean.",
          answer: true,
          explain: "Ambiguity forces the model to guess. Removing it keeps answers on track."
        },
        {
          type: "mcq",
          q: "Which detail would make 'Plan a trip' much more specific?",
          choices: [
            "A 3-day trip to Denver in July on a $500 budget",
            "A trip somewhere",
            "A fun trip",
            "A trip soon"
          ],
          answer: 0,
          explain: "Destination, length, timing, and budget turn a vague request into an actionable one."
        },
        {
          type: "match",
          q: "Match the vague prompt to a sharper version.",
          pairs: [
            ["Make it better", "Fix the grammar and shorten to 100 words"],
            ["Explain this", "Explain this in 2 sentences for a beginner"]
          ],
          explain: "Sharper prompts name the change and the target, so the model knows exactly what to do."
        }
      ]
    },
    {
      id: "l28",
      title: "Give Context",
      intro: "Context means the background, audience, goal, and any source material the model should use.",
      questions: [
        {
          type: "mcq",
          q: "Why does telling the AI your audience help?",
          choices: [
            "It tailors tone and detail to the right readers",
            "It makes the AI respond faster",
            "It unlocks secret features",
            "It lowers the price"
          ],
          answer: 0,
          explain: "Audience shapes word choice and depth. 'For kids' and 'for doctors' need very different answers."
        },
        {
          type: "match",
          q: "Match each type of context to an example.",
          pairs: [
            ["Audience", "for new employees"],
            ["Goal", "to convince them to sign up"],
            ["Source material", "using the notes I pasted"]
          ],
          explain: "Audience, goal, and source material are all context that steer the model toward what you need."
        },
        {
          type: "truefalse",
          q: "Pasting the actual document you want summarized gives the model useful context.",
          answer: true,
          explain: "Source material grounds the answer in your real content instead of the model guessing."
        },
        {
          type: "fill",
          q: "Background, audience, goal, and source material are all forms of ____ you give the model.",
          answer: "context",
          accept: ["context"],
          explain: "Context is the background that helps the model produce a relevant, on-target answer."
        },
        {
          type: "mcq",
          q: "Which prompt gives the BEST context?",
          choices: [
            "Rewrite this for first-time users who are nervous about setup, keeping it encouraging: [text]",
            "Rewrite this.",
            "Fix it.",
            "Make it nice."
          ],
          answer: 0,
          explain: "It names the audience, their feelings, the goal, and includes the source text to work from."
        },
        {
          type: "truefalse",
          q: "The model automatically knows the private details of your project without being told.",
          answer: false,
          explain: "The model only knows what you provide. Share the relevant background so it can help."
        },
        {
          type: "mcq",
          q: "You want help replying to an email. What context is most useful to include?",
          choices: [
            "The original email you are replying to",
            "Your favorite color",
            "The weather today",
            "Nothing at all"
          ],
          answer: 0,
          explain: "Give the model the source material, the original email, so its reply actually fits."
        },
        {
          type: "order",
          q: "Order a well-built context-rich prompt.",
          items: [
            "Here is the task",
            "Here is who it is for",
            "Here is the goal",
            "Here is the source material"
          ],
          explain: "Task, audience, goal, then source is a natural flow that gives the model everything it needs."
        }
      ]
    },
    {
      id: "l29",
      title: "Control Format and Length",
      intro: "You can ask for bullets, a table, JSON, a word count, or a specific tone to shape the output.",
      questions: [
        {
          type: "match",
          q: "Match each format request to what you would get.",
          pairs: [
            ["As a table", "Rows and columns"],
            ["As bullet points", "A short list of items"],
            ["As JSON", "Structured data for code"],
            ["In one sentence", "A single concise line"]
          ],
          explain: "Naming a format shapes the output. Ask for exactly the structure you want."
        },
        {
          type: "mcq",
          q: "You want output a program can read automatically. Which format should you request?",
          choices: [
            "JSON",
            "A friendly paragraph",
            "A poem",
            "A handwritten note"
          ],
          answer: 0,
          explain: "JSON is structured, machine-readable data, ideal when other software will process the answer."
        },
        {
          type: "truefalse",
          q: "You can ask an AI to keep a reply under a specific word count.",
          answer: true,
          explain: "Length is a format control. 'In under 50 words' or 'in 3 bullets' both work well."
        },
        {
          type: "fill",
          q: "Asking for a professional, casual, or playful ____ controls how the writing sounds.",
          answer: "tone",
          accept: ["tone", "voice"],
          explain: "Tone sets the personality of the writing, from formal to friendly to funny."
        },
        {
          type: "mcq",
          q: "Which prompt controls BOTH format and length?",
          choices: [
            "Give me the answer as 5 bullet points, each under 10 words.",
            "Tell me about dogs.",
            "Write freely about anything.",
            "Explain it however you like."
          ],
          answer: 0,
          explain: "It sets a format (bullets) and a length limit (under 10 words each) at the same time."
        },
        {
          type: "truefalse",
          q: "If you do not specify a format, the model must always answer in a table.",
          answer: false,
          explain: "Without instructions the model picks a default, usually prose. Ask if you want something specific."
        },
        {
          type: "order",
          q: "Order these outputs from shortest to longest.",
          items: [
            "A one-word answer",
            "A single sentence",
            "A short paragraph",
            "A full page"
          ],
          explain: "You can request any of these. Matching length to your need saves time and reading."
        },
        {
          type: "mcq",
          q: "You want to compare three phones on price and battery. What format fits best?",
          choices: [
            "A table",
            "A long story",
            "A single number",
            "A song"
          ],
          answer: 0,
          explain: "Tables shine for side-by-side comparisons across a few clear categories."
        }
      ]
    },
    {
      id: "l30",
      title: "Assign a Role or Persona",
      intro: "Telling the model to 'act as a...' sets its expertise and voice for the task.",
      questions: [
        {
          type: "mcq",
          q: "What does 'Act as a friendly math tutor' do?",
          choices: [
            "Sets the model's expertise and tone for the task",
            "Gives the model a real teaching degree",
            "Makes the model smarter than usual",
            "Turns off all its safety rules"
          ],
          answer: 0,
          explain: "A role shapes how the model responds. It does not change what the model truly is or knows."
        },
        {
          type: "truefalse",
          q: "Assigning a role can help the model match the right voice and level of detail.",
          answer: true,
          explain: "Personas nudge tone and framing, like a lawyer's caution or a coach's encouragement."
        },
        {
          type: "fill",
          q: "A common way to set a persona is to write 'Act ____ a...' followed by the role.",
          answer: "as",
          accept: ["as"],
          explain: "'Act as a chef' or 'You are a career coach' are simple, effective role prompts."
        },
        {
          type: "match",
          q: "Match each role to the tone it tends to produce.",
          pairs: [
            ["Act as a lawyer", "Careful and precise"],
            ["Act as a coach", "Encouraging and motivating"],
            ["Act as a comedian", "Playful and funny"]
          ],
          explain: "The role you assign steers the voice and framing of the answer."
        },
        {
          type: "mcq",
          q: "You want an explanation aimed at total beginners. Which role helps most?",
          choices: [
            "Act as a patient teacher for beginners",
            "Act as an expert writing for other experts",
            "Act as a stock-market trader",
            "Act as a poet"
          ],
          answer: 0,
          explain: "Match the role to your audience. A beginner-focused teacher persona simplifies the language."
        },
        {
          type: "truefalse",
          q: "Giving a persona magically makes the model's facts always correct.",
          answer: false,
          explain: "A role shapes style, not accuracy. The model can still be wrong, so verify important facts."
        },
        {
          type: "mcq",
          q: "Which is a well-formed role prompt?",
          choices: [
            "You are an experienced travel agent. Plan a 3-day Rome itinerary.",
            "travel",
            "Rome?",
            "go somewhere fun"
          ],
          answer: 0,
          explain: "It assigns a clear role and pairs it with a specific task, a strong combination."
        }
      ]
    },
    {
      id: "l31",
      title: "Show, Don't Just Tell",
      intro: "Including an example of the output you want often works better than describing it in words.",
      questions: [
        {
          type: "mcq",
          q: "Why include an example of the output you want?",
          choices: [
            "It shows the model the exact style and format to copy",
            "It makes the model respond instantly",
            "It is required for every prompt",
            "It hides your real question"
          ],
          answer: 0,
          explain: "A sample output is a clear target. The model can match its structure and style closely."
        },
        {
          type: "truefalse",
          q: "Showing one or two examples of the format you want is often more effective than describing it.",
          answer: true,
          explain: "Examples remove ambiguity. The model sees exactly what 'good' looks like."
        },
        {
          type: "fill",
          q: "Giving the model a sample of the desired result is often called showing an ____.",
          answer: "example",
          accept: ["example", "examples"],
          explain: "An example demonstrates the pattern you want the model to follow."
        },
        {
          type: "match",
          q: "Match the goal to the example you would show.",
          pairs: [
            ["Consistent product titles", "A sample title in your exact style"],
            ["A specific email format", "One finished email as a template"]
          ],
          explain: "Show a finished sample and the model mirrors its shape for new items."
        },
        {
          type: "mcq",
          q: "You want the AI to format contacts a certain way. What is the best move?",
          choices: [
            "Paste one contact formatted exactly how you want the rest",
            "Just say 'format it nicely'",
            "Say nothing about format",
            "Ask it to guess your preference"
          ],
          answer: 0,
          explain: "One formatted example acts as a template the model can apply to every contact."
        },
        {
          type: "truefalse",
          q: "An example in your prompt can show tone, structure, and level of detail all at once.",
          answer: true,
          explain: "A single good sample carries many signals the model can copy without extra explanation."
        },
        {
          type: "order",
          q: "Order the steps of a 'show, don't tell' prompt.",
          items: [
            "State the task",
            "Provide an example of the desired output",
            "Ask the model to follow that example"
          ],
          explain: "Describe the task, show a sample, then ask the model to match it for your real input."
        }
      ]
    },
    {
      id: "l32",
      title: "Iterate and Refine",
      intro: "Treat prompting as a conversation: follow up, correct, and ask for revisions until it is right.",
      questions: [
        {
          type: "mcq",
          q: "The first answer is close but too formal. What is the best next step?",
          choices: [
            "Reply: 'Make it more casual and friendly.'",
            "Give up and do it by hand",
            "Ask the exact same prompt again",
            "Start over in a fresh chat with no context"
          ],
          answer: 0,
          explain: "Refining with a specific follow-up builds on what you already have. Conversation is the point."
        },
        {
          type: "truefalse",
          q: "You can keep chatting to correct and improve an answer instead of accepting the first draft.",
          answer: true,
          explain: "Iteration is normal and powerful. Each follow-up steers the model closer to what you want."
        },
        {
          type: "fill",
          q: "Improving an answer through repeated follow-ups is called ____.",
          answer: "iterating",
          accept: ["iterating", "iteration", "refining", "iterate"],
          explain: "Iterating means refining step by step, treating the exchange as a back-and-forth."
        },
        {
          type: "order",
          q: "Order a typical refine-it-in-conversation flow.",
          items: [
            "Send your first prompt",
            "Read the answer",
            "Give specific feedback",
            "Get an improved version"
          ],
          explain: "Prompt, review, refine, repeat. This loop is how you reach a great final result."
        },
        {
          type: "mcq",
          q: "Which follow-up is most likely to get a better revision?",
          choices: [
            "Shorten this to 2 paragraphs and add a real-world example.",
            "No.",
            "Try again.",
            "Bad."
          ],
          answer: 0,
          explain: "Specific feedback tells the model what to change. Vague reactions leave it guessing."
        },
        {
          type: "truefalse",
          q: "Because the AI remembers the earlier messages in a chat, you can refer back to them.",
          answer: true,
          explain: "Within a conversation the model uses the earlier context, so 'make that shorter' just works."
        },
        {
          type: "match",
          q: "Match each refining request to what it targets.",
          pairs: [
            ["Make it shorter", "Length"],
            ["Make it friendlier", "Tone"],
            ["Add an example", "Content"]
          ],
          explain: "Naming exactly what to adjust, length, tone, or content, gets you a sharper revision."
        },
        {
          type: "mcq",
          q: "What mindset works best when prompting?",
          choices: [
            "Treat it as a conversation you can steer",
            "Expect the first try to always be perfect",
            "Never give feedback",
            "Avoid asking follow-up questions"
          ],
          answer: 0,
          explain: "Great results usually come from a few rounds of back-and-forth, not a single perfect prompt."
        }
      ]
    }
  ]
});
