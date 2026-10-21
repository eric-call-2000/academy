window.ACADEMY.addUnit("ai", {
  id: "unit-8",
  title: "Claude Best Practices",
  color: "#f25f9c",
  icon: "✨",
  description: "Anthropic's own recommended techniques for getting the best out of Claude.",
  lessons: [
    {
      id: "l57",
      title: "Be Clear and Direct",
      intro: "Spell out exactly what you want so Claude does not have to guess your intent.",
      questions: [
        {
          type: "mcq",
          q: "Which prompt follows the 'be clear and direct' rule best?",
          choices: [
            "Write a 3-sentence summary of this email for a busy manager",
            "Please read this email carefully and do whatever seems most useful",
            "Summarize this email well, and make sure the summary is really good",
            "Look at this email and tell me anything interesting you notice"
          ],
          answer: 0,
          explain: "A specific task, length, and audience remove guesswork and produce a better result."
        },
        {
          type: "truefalse",
          q: "Claude can reliably read your mind when your instructions are vague.",
          answer: false,
          explain: "Claude has no context you did not give it; vague prompts lead to guessing and weaker answers."
        },
        {
          type: "fill",
          q: "Telling Claude the intended ____ (like a 5th grader or an expert) helps it pitch the answer correctly.",
          answer: "audience",
          accept: ["audience", "reader", "reader level", "target audience"],
          explain: "Naming the audience shapes vocabulary, depth, and tone to fit who will read the answer."
        },
        {
          type: "mcq",
          q: "A good way to make a fuzzy request clearer is to add:",
          choices: [
            "Concrete details like format, length, and audience",
            "Strong emphasis, such as IMPORTANT in capital letters",
            "A reminder that Claude must try its very hardest",
            "A warning that mistakes will not be tolerated"
          ],
          answer: 0,
          explain: "Concrete constraints give Claude a clear target to aim at, unlike emphasis or scolding."
        },
        {
          type: "order",
          q: "Order these parts of a clear, direct prompt from first to last:",
          items: [
            "State the task",
            "Give the needed context",
            "Specify the output format"
          ],
          explain: "State what you want, supply context, then pin the format so the reply arrives ready to use."
        },
        {
          type: "truefalse",
          q: "A quick test for a clear prompt is whether a new coworker could follow it without asking questions.",
          answer: true,
          explain: "If a human would need clarification, Claude probably will too; that gap is a sign to add detail."
        },
        {
          type: "mcq",
          q: "Why is 'be clear and direct' the foundational Claude technique?",
          choices: [
            "It removes ambiguity, which is the top cause of off-target answers",
            "It keeps prompts as short as possible, which always improves answers",
            "It switches Claude into a stricter mode that follows rules more closely",
            "It lets Claude skip reasoning and go straight to a final answer"
          ],
          answer: 0,
          explain: "Most weak outputs trace back to unclear asks; clarity fixes the problem at its source."
        }
      ]
    },
    {
      id: "l58",
      title: "Use XML Tags with Claude",
      intro: "Wrap your inputs and sections in tags so Claude knows exactly what each part is.",
      questions: [
        {
          type: "mcq",
          q: "What is the main benefit of wrapping content in XML-style tags for Claude?",
          choices: [
            "It clearly separates instructions from data and other sections",
            "It cuts the token count, so long prompts cost noticeably less",
            "It tells Claude to reply in XML instead of normal prose",
            "It hides sensitive data so Claude cannot read those parts"
          ],
          answer: 0,
          explain: "Tags like <document> and <instructions> mark boundaries so Claude does not mix up the parts."
        },
        {
          type: "fill",
          q: "Anthropic suggests wrapping a source article in a pair of tags such as ____ and its closing tag.",
          answer: "<document>",
          accept: ["<document>", "document", "<doc>", "<article>", "<text>"],
          explain: "A named tag pair clearly fences off the source so Claude treats it as the material to work on."
        },
        {
          type: "truefalse",
          q: "The exact tag names you choose matter far less than using them consistently.",
          answer: true,
          explain: "Claude keys off structure; any sensible, consistent tag names work, so pick clear ones and reuse them."
        },
        {
          type: "match",
          q: "Match each tag to what it typically wraps:",
          pairs: [
            ["<instructions>", "What you want Claude to do"],
            ["<document>", "The source text to work on"],
            ["<example>", "A sample of the desired output"]
          ],
          explain: "Descriptive tag names let Claude tell the task, the data, and the model answer apart at a glance."
        },
        {
          type: "mcq",
          q: "Tags are especially helpful when your prompt contains:",
          choices: [
            "Multiple distinct parts, like a long document plus instructions plus examples",
            "A single short question that needs a quick, direct, one-line answer back",
            "A casual request where the exact output format doesn't matter much",
            "A follow-up message in a chat that already has plenty of context"
          ],
          answer: 0,
          explain: "The more moving parts a prompt has, the more tags pay off by keeping each part clearly labeled."
        },
        {
          type: "truefalse",
          q: "You can ask Claude to put its answer inside specific tags to make it easy to extract later.",
          answer: true,
          explain: "Asking for output wrapped in tags such as <summary> gives you a reliable spot to pull the result from."
        },
        {
          type: "order",
          q: "Order a well-tagged prompt from top to bottom:",
          items: [
            "<instructions> what to do </instructions>",
            "<document> the source text </document>",
            "<format> how to shape the answer </format>"
          ],
          explain: "Grouping each concern in its own tagged block keeps a complex prompt organized and unambiguous."
        }
      ]
    },
    {
      id: "l59",
      title: "Give Claude Examples",
      intro: "A few good examples, called multishot prompting, steer format and quality more than instructions alone.",
      questions: [
        {
          type: "fill",
          q: "Showing Claude several sample input-output pairs is called ____ prompting.",
          answer: "multishot",
          accept: ["multishot", "multi-shot", "few-shot", "fewshot", "few shot"],
          explain: "Multishot (few-shot) prompting demonstrates the pattern you want instead of only describing it."
        },
        {
          type: "mcq",
          q: "Examples are most powerful for teaching Claude:",
          choices: [
            "The exact format and style you want",
            "How to feel emotions",
            "Facts it can never otherwise know",
            "How to access the internet"
          ],
          answer: 0,
          explain: "Examples anchor format, tone, and structure far more precisely than instructions written in prose."
        },
        {
          type: "truefalse",
          q: "One clear example is often enough to noticeably improve output, and a few can be even better.",
          answer: true,
          explain: "Even a single example helps; three to five strong, varied ones usually lock in the pattern."
        },
        {
          type: "mcq",
          q: "For the best results, your examples should be:",
          choices: [
            "Relevant, correct, and varied enough to cover edge cases",
            "Nearly identical, so Claude sees one clear pattern",
            "As long and detailed as possible to show every case",
            "Taken from a related task so Claude generalizes widely"
          ],
          answer: 0,
          explain: "Claude imitates your examples, so flawed or off-topic samples teach flawed or off-topic behavior."
        },
        {
          type: "truefalse",
          q: "If your examples contain errors, Claude may copy those errors into its answers.",
          answer: true,
          explain: "The model mirrors the demonstrated pattern, so keep examples accurate and consistent."
        },
        {
          type: "order",
          q: "Order the pieces of a multishot prompt:",
          items: [
            "Describe the task",
            "Show a few input-output examples",
            "Give the new input to handle"
          ],
          explain: "State the task, demonstrate it with examples, then hand Claude the real input to follow the pattern."
        },
        {
          type: "mcq",
          q: "Wrapping each example in tags like <example> mainly helps by:",
          choices: [
            "Making the example boundaries clear so Claude parses them cleanly",
            "Telling Claude to copy the examples word for word in its answer",
            "Letting Claude skip the examples when it decides they don't apply",
            "Marking the examples as more important than your actual instructions"
          ],
          answer: 0,
          explain: "Tags combine two techniques: clear structure plus concrete demonstrations of the target output."
        }
      ]
    },
    {
      id: "l60",
      title: "Let Claude Think",
      intro: "Ask for step-by-step reasoning, or turn on extended thinking, when the problem is hard.",
      questions: [
        {
          type: "mcq",
          q: "Asking Claude to reason step by step before answering is often called:",
          choices: [
            "Chain-of-thought prompting",
            "Few-shot prompting",
            "Prompt chaining",
            "Self-consistency checks"
          ],
          answer: 0,
          explain: "Chain-of-thought prompting lets the model work through intermediate steps, which improves hard answers."
        },
        {
          type: "truefalse",
          q: "Giving Claude room to think through a problem tends to improve accuracy on complex tasks.",
          answer: true,
          explain: "Working through steps reduces careless jumps, much like showing your work on a math problem."
        },
        {
          type: "fill",
          q: "Anthropic offers an ____ thinking mode that lets Claude reason longer before it responds.",
          answer: "extended",
          accept: ["extended", "extended thinking", "deep"],
          explain: "Extended thinking gives Claude more space to reason internally on tough, multi-step problems."
        },
        {
          type: "mcq",
          q: "When is step-by-step thinking least necessary?",
          choices: [
            "For a simple factual lookup like a capital city",
            "For a tricky multi-step math word problem",
            "For debugging a subtle logic error",
            "For planning a complex project"
          ],
          answer: 0,
          explain: "Easy, single-step questions do not need extra reasoning; save thinking effort for genuinely hard tasks."
        },
        {
          type: "truefalse",
          q: "You can ask Claude to put its reasoning in <thinking> tags and its final answer separately.",
          answer: true,
          explain: "Separating the reasoning from the answer keeps the visible result clean while still benefiting from thinking."
        },
        {
          type: "order",
          q: "Order how a step-by-step response should flow:",
          items: [
            "Read and restate the problem",
            "Work through the reasoning steps",
            "State the final answer"
          ],
          explain: "Understand the problem, reason through it, then commit to a conclusion built on that reasoning."
        },
        {
          type: "mcq",
          q: "A key reason chain-of-thought helps is that it:",
          choices: [
            "Breaks a big problem into smaller steps the model handles better",
            "Gives Claude extra facts that weren't included in its training data",
            "Makes the model's final answer shorter and quicker to read",
            "Lets Claude check each of its answers against a trusted source"
          ],
          answer: 0,
          explain: "Smaller, explicit steps are easier to get right than one giant leap to the answer."
        }
      ]
    },
    {
      id: "l61",
      title: "Set a Role with a System Prompt",
      intro: "Assign expertise and tone up front in the system prompt to shape every reply.",
      questions: [
        {
          type: "mcq",
          q: "What is a system prompt used for?",
          choices: [
            "Setting Claude's role, expertise, and tone for the whole conversation",
            "Giving Claude one specific task to complete in its very next reply only",
            "Storing facts that Claude should remember across all of your future chats",
            "Choosing which Claude model and settings the conversation will run on"
          ],
          answer: 0,
          explain: "The system prompt sets standing instructions and persona that apply to every turn that follows."
        },
        {
          type: "fill",
          q: "Telling Claude to act as a senior financial analyst is an example of setting a ____.",
          answer: "role",
          accept: ["role", "persona", "character", "system role"],
          explain: "A role, or persona, focuses Claude's expertise and vocabulary on the domain you care about."
        },
        {
          type: "truefalse",
          q: "A good role prompt can improve the depth and relevance of answers in a specialized field.",
          answer: true,
          explain: "Framing Claude as a domain expert nudges it toward the right terminology, priorities, and detail."
        },
        {
          type: "match",
          q: "Match each system-prompt role to the reply it would shape:",
          pairs: [
            ["Act as a patient tutor", "Gentle, step-by-step explanations"],
            ["Act as a strict code reviewer", "Blunt, detailed feedback on flaws"]
          ],
          explain: "The role you assign steers tone and focus, so choose one that matches the outcome you want."
        },
        {
          type: "mcq",
          q: "Besides expertise, a system prompt is a great place to set:",
          choices: [
            "Tone, output style, and rules to follow every time",
            "The one-off question you want answered right now",
            "Facts Claude should learn permanently for all users",
            "The documents you want summarized in this reply"
          ],
          answer: 0,
          explain: "Persistent rules like tone and format belong in the system prompt so you need not repeat them each turn."
        },
        {
          type: "truefalse",
          q: "The system prompt only affects the very first message and then stops mattering.",
          answer: false,
          explain: "System-prompt instructions persist across the whole conversation, not just the opening message."
        },
        {
          type: "order",
          q: "Order a strong system prompt from first to last:",
          items: [
            "Name the role and expertise",
            "Set the tone and audience",
            "List rules and output format"
          ],
          explain: "Establish who Claude is, how it should sound, then the constraints it must follow every reply."
        }
      ]
    },
    {
      id: "l62",
      title: "Prefill Claude's Reply",
      intro: "Begin Claude's answer yourself to lock the format, such as starting it with a brace to force JSON.",
      questions: [
        {
          type: "mcq",
          q: "What does prefilling Claude's response mean?",
          choices: [
            "Starting the assistant's answer for it so it continues in that format",
            "Loading your whole conversation history before Claude starts replying",
            "Writing out the full answer yourself so Claude only has to check it",
            "Filling in example answers at the top of the prompt for Claude to copy"
          ],
          answer: 0,
          explain: "You supply the first characters of Claude's reply, and it continues from there in the shape you set."
        },
        {
          type: "fill",
          q: "To push Claude straight into JSON, you can prefill its reply with an opening ____ character.",
          answer: "brace",
          accept: ["brace", "curly brace", "{", "open brace", "curly bracket"],
          explain: "Starting the answer with an opening brace nudges Claude to emit JSON with no chatty preamble."
        },
        {
          type: "truefalse",
          q: "Prefilling can stop Claude from adding a friendly intro before the content you actually want.",
          answer: true,
          explain: "By seeding the format, prefilling skips filler like 'Sure! Here is...' and jumps to the payload."
        },
        {
          type: "mcq",
          q: "Prefilling is most useful when you need:",
          choices: [
            "A strict, machine-readable format like JSON or a specific structure",
            "A long, open-ended conversation where Claude explores many different ideas",
            "Claude to ask you clarifying questions before it starts on the task",
            "Claude to explain its reasoning at length before the final answer"
          ],
          answer: 0,
          explain: "Locking the opening characters is ideal when downstream code must parse a precise, consistent format."
        },
        {
          type: "match",
          q: "Match each prefill to the format it encourages:",
          pairs: [
            ["Starting with an opening brace", "JSON object"],
            ["Starting with a dash", "A bulleted list"]
          ],
          explain: "The first characters you supply set the pattern Claude naturally continues into."
        },
        {
          type: "truefalse",
          q: "Prefilling changes the underlying model weights permanently.",
          answer: false,
          explain: "Prefilling only shapes one response by seeding its start; it never alters the model itself."
        },
        {
          type: "order",
          q: "Order the steps to use prefilling for JSON:",
          items: [
            "Ask for the data in your prompt",
            "Prefill the reply with an opening brace",
            "Let Claude complete the JSON"
          ],
          explain: "Request the content, seed the format, then let Claude fill in the rest in that structure."
        }
      ]
    },
    {
      id: "l63",
      title: "Handling Long Documents",
      intro: "Put the document at the top and your questions at the bottom, and ask Claude to quote its evidence.",
      questions: [
        {
          type: "mcq",
          q: "For a long document plus a question, where should the document usually go?",
          choices: [
            "Near the top, with your question at the bottom",
            "At the bottom, after the question it relates to",
            "In the middle, between two copies of the question",
            "In a separate chat, referenced by its file name"
          ],
          answer: 0,
          explain: "Anthropic recommends document first, question last, which helps Claude answer long inputs accurately."
        },
        {
          type: "truefalse",
          q: "Asking Claude to quote the supporting text helps ground its answer in the document.",
          answer: true,
          explain: "Requiring quotes forces Claude to point to real evidence, reducing made-up or off-base claims."
        },
        {
          type: "fill",
          q: "Asking Claude to pull exact ____ from the document before answering keeps it grounded in the source.",
          answer: "quotes",
          accept: ["quotes", "quotations", "supporting text", "evidence"],
          explain: "Grounding the answer in real quotes ties conclusions back to what the document actually says."
        },
        {
          type: "mcq",
          q: "Wrapping the long document in tags like <document> mainly helps because it:",
          choices: [
            "Clearly marks where the source starts and ends",
            "Lets Claude skim the document instead of reading it",
            "Tells Claude to trust it more than its own knowledge",
            "Shrinks the document so it uses fewer tokens"
          ],
          answer: 0,
          explain: "Clear boundaries let Claude tell the source material apart from your instructions and questions."
        },
        {
          type: "order",
          q: "Order a long-document prompt from top to bottom:",
          items: [
            "The full document",
            "Instructions to quote relevant text",
            "Your specific question"
          ],
          explain: "Document first, then the grounding instruction, then the question yields more reliable answers."
        },
        {
          type: "truefalse",
          q: "Putting your question before a very long document is the recommended layout.",
          answer: false,
          explain: "The guidance is the reverse: place the long document first and your question at the end."
        },
        {
          type: "mcq",
          q: "A benefit of asking Claude to quote before it concludes is:",
          choices: [
            "You can verify the answer against the cited passages",
            "It makes the final answer shorter and quicker to read",
            "It stops Claude from using any outside knowledge at all",
            "It guarantees the conclusion is correct, not just supported"
          ],
          answer: 0,
          explain: "Quoted evidence gives you a fast way to confirm the answer really matches the source text."
        }
      ]
    },
    {
      id: "l64",
      title: "Chain Complex Work into Steps",
      intro: "Split a big, multi-part job into a sequence of focused prompts instead of one giant request.",
      questions: [
        {
          type: "mcq",
          q: "What does prompt chaining mean?",
          choices: [
            "Breaking a complex task into a sequence of smaller, focused prompts",
            "Sending the same prompt several times and keeping the most common answer",
            "Asking Claude to reason step by step inside one single long prompt",
            "Linking several different models so each one answers the same prompt"
          ],
          answer: 0,
          explain: "Chaining hands Claude one clear subtask at a time, feeding each output into the next step."
        },
        {
          type: "truefalse",
          q: "Splitting a big job into steps can reduce errors compared with one overloaded prompt.",
          answer: true,
          explain: "Focused subtasks are easier to get right, and you can check each result before moving on."
        },
        {
          type: "fill",
          q: "In prompt chaining, the ____ of one step becomes the input to the next step.",
          answer: "output",
          accept: ["output", "result", "answer"],
          explain: "Each step consumes the previous step's output, building the final result piece by piece."
        },
        {
          type: "order",
          q: "Order a chained workflow for writing a report:",
          items: [
            "Outline the report",
            "Draft each section",
            "Review and polish the draft"
          ],
          explain: "Outline, then draft, then refine lets each focused step build cleanly on the last."
        },
        {
          type: "mcq",
          q: "A big advantage of chaining is that between steps you can:",
          choices: [
            "Inspect and correct the intermediate result before continuing",
            "Let Claude decide which steps to skip based on how it is going",
            "Switch to a bigger model for each step to raise overall accuracy",
            "Use a single prompt for everything, which keeps the context together"
          ],
          answer: 0,
          explain: "Checkpoints between steps let you catch and fix problems early instead of at the very end."
        },
        {
          type: "truefalse",
          q: "Chaining is only worth it for trivial one-line tasks.",
          answer: false,
          explain: "Chaining shines on complex, multi-part jobs; simple tasks rarely need to be split at all."
        },
        {
          type: "match",
          q: "Match each chaining step to its job:",
          pairs: [
            ["Extract", "Pull the key facts from the source"],
            ["Analyze", "Draw conclusions from those facts"],
            ["Summarize", "Write a short final wrap-up"]
          ],
          explain: "Distinct steps like extract, analyze, and summarize each do one job well and feed the next."
        }
      ]
    }
  ]
});
