window.ACADEMY.addUnit("ai", {
  id: "unit-5",
  title: "Prompting Techniques",
  color: "#ff4b4b",
  icon: "🎯",
  description: "Named techniques that reliably raise answer quality.",
  lessons: [
    {
      id: "l33",
      title: "Zero-Shot vs Few-Shot",
      intro: "Zero-shot means you give no examples; few-shot means you include a few examples in the prompt to steer the output.",
      questions: [
        {
          type: "mcq",
          q: "What is a zero-shot prompt?",
          choices: [
            "A prompt with no examples, just the instruction",
            "A prompt that always fails on the first try",
            "A prompt with exactly five examples",
            "A prompt that costs zero money"
          ],
          answer: 0,
          explain: "Zero-shot means you ask the model to do the task directly, without showing it any worked examples first."
        },
        {
          type: "mcq",
          q: "What makes a prompt few-shot?",
          choices: [
            "It includes a few example inputs and outputs to guide the model",
            "It uses very few words",
            "It only works a few times per day",
            "It asks for a short answer"
          ],
          answer: 0,
          explain: "Few-shot means you show the model a handful of examples so it learns the pattern you want."
        },
        {
          type: "truefalse",
          q: "Few-shot examples can teach the model a format or style you want it to copy.",
          answer: true,
          explain: "Examples are one of the most reliable ways to lock in a specific format, tone, or structure."
        },
        {
          type: "truefalse",
          q: "Zero-shot prompting never works and should always be avoided.",
          answer: false,
          explain: "Zero-shot works great for common, well-understood tasks. Reach for examples only when it struggles."
        },
        {
          type: "fill",
          q: "Adding a few worked examples to your prompt is called ____-shot prompting.",
          answer: "few",
          accept: ["few", "few-shot", "fewshot"],
          explain: "Few-shot prompting steers the model by showing it a small number of examples."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Zero-shot", "No examples, just the instruction"],
            ["Few-shot", "A handful of examples included in the prompt"]
          ],
          explain: "The difference is simply whether you show the model examples of the task before asking."
        },
        {
          type: "mcq",
          q: "When is few-shot most helpful?",
          choices: [
            "When the task is unusual or you need a very specific output format",
            "When you want the cheapest possible prompt",
            "When the task is extremely common and simple",
            "When you want the model to ignore your instructions"
          ],
          answer: 0,
          explain: "Examples shine for niche tasks or exact formats the model might not guess on its own."
        },
        {
          type: "truefalse",
          q: "Starting zero-shot and only adding examples if the result is off is a reasonable strategy.",
          answer: true,
          explain: "Try the simple prompt first; add examples when you actually need to correct the output."
        }
      ]
    },
    {
      id: "l34",
      title: "Few-Shot Examples Done Right",
      intro: "Good few-shot prompts use a few diverse, consistent examples whose format matches exactly what you want back.",
      questions: [
        {
          type: "mcq",
          q: "About how many examples is a good starting range for few-shot prompting?",
          choices: [
            "2 to 5",
            "Exactly 1",
            "20 to 30",
            "As many as you can fit"
          ],
          answer: 0,
          explain: "A small set of 2 to 5 clear examples usually steers the model without wasting space."
        },
        {
          type: "truefalse",
          q: "Your examples should share the same format you want the final output to use.",
          answer: true,
          explain: "If your examples are formatted one way, the model will copy that format in its answer."
        },
        {
          type: "truefalse",
          q: "Using examples that all look nearly identical is the best way to teach a general pattern.",
          answer: false,
          explain: "Diverse examples teach the pattern better; near-identical ones can make the model overfit to a narrow case."
        },
        {
          type: "mcq",
          q: "Why should few-shot examples be diverse?",
          choices: [
            "So the model learns the general rule, not one narrow case",
            "So the prompt looks longer and more serious",
            "So the model gets confused and asks questions",
            "So you use up more of the context window"
          ],
          answer: 0,
          explain: "Variety across your examples helps the model generalize instead of memorizing a single shape."
        },
        {
          type: "fill",
          q: "If your examples are formatted inconsistently, the model's output will likely also be ____.",
          answer: "inconsistent",
          accept: ["inconsistent", "messy", "unpredictable"],
          explain: "Consistency in your examples leads to consistency in the results."
        },
        {
          type: "order",
          q: "Order these steps for building a good few-shot prompt.",
          items: [
            "Decide the exact output format you want",
            "Write 2 to 5 diverse examples in that format",
            "Add your real input at the end for the model to complete"
          ],
          explain: "Pick the format, model it with a few varied examples, then hand over the real task."
        },
        {
          type: "mcq",
          q: "Which is a sign of a weak few-shot example set?",
          choices: [
            "Examples that contradict each other in style or labeling",
            "Examples that all follow the same clean format",
            "Examples that cover a few different situations",
            "Examples that match the output you want"
          ],
          answer: 0,
          explain: "Contradictory examples send mixed signals and the model may pick the wrong pattern."
        },
        {
          type: "truefalse",
          q: "Labeling parts of each example clearly, like Input and Output, helps the model follow the pattern.",
          answer: true,
          explain: "Clear labels make the structure obvious so the model knows which part to imitate."
        }
      ]
    },
    {
      id: "l35",
      title: "Chain-of-Thought: Let It Think",
      intro: "Asking the model to think step by step before answering improves accuracy on reasoning and math tasks.",
      questions: [
        {
          type: "mcq",
          q: "What does chain-of-thought prompting ask the model to do?",
          choices: [
            "Work through the reasoning step by step before giving the answer",
            "Answer as fast as possible with no explanation",
            "Always answer in a single word",
            "Refuse hard questions"
          ],
          answer: 0,
          explain: "Chain-of-thought means letting the model reason out loud before committing to a final answer."
        },
        {
          type: "truefalse",
          q: "Chain-of-thought tends to help most on math and multi-step reasoning problems.",
          answer: true,
          explain: "Showing the working helps the model catch its own mistakes on problems that need several steps."
        },
        {
          type: "fill",
          q: "A classic phrase that triggers this technique is asking the model to think ____ by step.",
          answer: "step",
          accept: ["step"],
          explain: "The phrase think step by step is a simple, well-known way to invite reasoning."
        },
        {
          type: "truefalse",
          q: "Chain-of-thought is worth the extra length on simple lookups like a single date.",
          answer: false,
          explain: "For trivial questions the reasoning is overkill; save it for problems that actually need steps."
        },
        {
          type: "mcq",
          q: "Why does thinking step by step often raise accuracy?",
          choices: [
            "It gives the model room to break the problem into checkable pieces",
            "It makes the model smarter permanently",
            "It connects the model to the internet",
            "It guarantees the answer is always correct"
          ],
          answer: 0,
          explain: "Reasoning in steps lets the model handle one piece at a time instead of guessing the whole answer at once."
        },
        {
          type: "mcq",
          q: "If you want the reasoning but only need the final line, what can you do?",
          choices: [
            "Ask it to reason, then give the final answer clearly at the end",
            "Forbid it from reasoning entirely",
            "Ask for the answer before it thinks",
            "Tell it to skip the question"
          ],
          answer: 0,
          explain: "You can let it reason and then request a clearly marked final answer to grab."
        },
        {
          type: "truefalse",
          q: "Newer, more capable models often reason well even without an explicit think-step-by-step nudge.",
          answer: true,
          explain: "Stronger models increasingly reason on their own, but the nudge still helps on tricky tasks."
        },
        {
          type: "order",
          q: "Order how chain-of-thought unfolds in a response.",
          items: [
            "The model restates or breaks down the problem",
            "It works through intermediate steps",
            "It states the final answer"
          ],
          explain: "Understand the problem, reason through the middle, then land on the conclusion."
        }
      ]
    },
    {
      id: "l36",
      title: "Decompose Big Tasks",
      intro: "Break a complex request into smaller steps or subtasks the model can handle one at a time.",
      questions: [
        {
          type: "mcq",
          q: "What does it mean to decompose a task?",
          choices: [
            "Split it into smaller, manageable subtasks",
            "Delete part of the task",
            "Make the task vaguer",
            "Do the whole thing in one giant instruction"
          ],
          answer: 0,
          explain: "Decomposing means breaking a big job into smaller pieces the model can handle reliably."
        },
        {
          type: "truefalse",
          q: "Very large, all-at-once requests are more likely to have the model skip or muddle steps.",
          answer: true,
          explain: "When too much is packed into one prompt, details get dropped; smaller steps stay on track."
        },
        {
          type: "fill",
          q: "Breaking one big prompt into several smaller ones is called ____ the task.",
          answer: "decomposing",
          accept: ["decomposing", "breaking down", "splitting"],
          explain: "Decomposition trades one overwhelming ask for several clear, doable ones."
        },
        {
          type: "order",
          q: "Order a decomposed approach to writing a research summary.",
          items: [
            "Ask for the key points from the source",
            "Ask it to group the points into themes",
            "Ask it to write the summary from those themes"
          ],
          explain: "Each step feeds the next, so the model builds toward the goal instead of guessing it all at once."
        },
        {
          type: "mcq",
          q: "A benefit of decomposing is that you can:",
          choices: [
            "Check each step and fix it before moving on",
            "Avoid ever reading the output",
            "Make the model connect to your database automatically",
            "Guarantee zero mistakes forever"
          ],
          answer: 0,
          explain: "Smaller steps give you natural checkpoints to catch errors early."
        },
        {
          type: "truefalse",
          q: "Decomposition is only useful for coding tasks and nothing else.",
          answer: false,
          explain: "It helps with writing, analysis, planning, and almost any multi-part request."
        },
        {
          type: "match",
          q: "Match the big task to a sensible first subtask.",
          pairs: [
            ["Write a report", "Gather and list the key facts first"],
            ["Plan a trip", "List the destinations and dates first"]
          ],
          explain: "Starting with the raw pieces makes the later assembly steps much easier."
        }
      ]
    },
    {
      id: "l37",
      title: "Formatting the Output",
      intro: "Specify the structure you want explicitly, whether that is a list, a table, JSON, or markdown.",
      questions: [
        {
          type: "mcq",
          q: "Why should you tell the model the output format you want?",
          choices: [
            "So you get results in a shape you can actually use",
            "So the model runs faster",
            "So the answer is always shorter",
            "So the model stops reasoning"
          ],
          answer: 0,
          explain: "Naming the format up front saves you from reformatting the answer yourself later."
        },
        {
          type: "match",
          q: "Match each need to a good output format.",
          pairs: [
            ["Feeding data to a program", "JSON"],
            ["Comparing items across columns", "A table"],
            ["A simple set of steps", "A numbered list"]
          ],
          explain: "The right format depends on what you will do with the output next."
        },
        {
          type: "truefalse",
          q: "Asking for JSON is useful when another program will read the output.",
          answer: true,
          explain: "JSON is structured and machine-readable, so code can parse it reliably."
        },
        {
          type: "fill",
          q: "For a side-by-side comparison across columns, ask the model to answer as a ____.",
          answer: "table",
          accept: ["table", "markdown table"],
          explain: "Tables line up values across rows and columns for easy comparison."
        },
        {
          type: "mcq",
          q: "Which instruction most clearly specifies format?",
          choices: [
            "Answer as a numbered list with one step per line",
            "Give me a good answer",
            "Tell me about it",
            "Be helpful"
          ],
          answer: 0,
          explain: "Concrete formatting instructions remove guesswork about how the answer should look."
        },
        {
          type: "truefalse",
          q: "If you do not specify a format, the model always picks the exact one you had in mind.",
          answer: false,
          explain: "Without guidance the model guesses; being explicit is the only reliable way to get your shape."
        },
        {
          type: "mcq",
          q: "You want output you can paste into a document with headings and bold text. Ask for:",
          choices: [
            "Markdown",
            "Raw binary",
            "A single run-on sentence",
            "No formatting at all"
          ],
          answer: 0,
          explain: "Markdown gives you headings, lists, and emphasis that render cleanly in many tools."
        }
      ]
    },
    {
      id: "l38",
      title: "Delimiters and Structure",
      intro: "Separate your instructions from the content using quotes, tags, or headings so the model does not confuse them.",
      questions: [
        {
          type: "mcq",
          q: "What is a delimiter in a prompt?",
          choices: [
            "A marker that separates your instructions from the content",
            "A type of AI model",
            "A word the model cannot read",
            "A way to make the model faster"
          ],
          answer: 0,
          explain: "Delimiters like quotes, tags, or headings draw a clear line between instructions and material."
        },
        {
          type: "truefalse",
          q: "Wrapping pasted text in delimiters helps the model tell your instructions apart from the data.",
          answer: true,
          explain: "Clear boundaries stop the model from mistaking the content for a command."
        },
        {
          type: "match",
          q: "Match each delimiter style to an example.",
          pairs: [
            ["Quotes", "Wrapping text in quotation marks"],
            ["Tags", "Using labels like <text> and </text>"],
            ["Headings", "Sections like INSTRUCTIONS and CONTENT"]
          ],
          explain: "Any consistent separator works; the point is a clear, obvious boundary."
        },
        {
          type: "fill",
          q: "Putting the user's pasted article between clear markers reduces the risk of prompt ____.",
          answer: "injection",
          accept: ["injection", "confusion"],
          explain: "Clear separation makes it harder for stray text to be read as new instructions."
        },
        {
          type: "mcq",
          q: "Why does structure like headings help long prompts?",
          choices: [
            "It makes each part easy to find and follow",
            "It hides the instructions from the model",
            "It shortens the model's memory",
            "It disables reasoning"
          ],
          answer: 0,
          explain: "Labeled sections keep a complex prompt organized so the model treats each part correctly."
        },
        {
          type: "truefalse",
          q: "Delimiters only matter when your content is short.",
          answer: false,
          explain: "They matter most for long or pasted content, where instructions and data can blur together."
        },
        {
          type: "order",
          q: "Order a clean, well-delimited prompt.",
          items: [
            "State the instruction",
            "Open a delimiter and paste the content",
            "Close the delimiter"
          ],
          explain: "Instruction first, then clearly fenced content, so the model never mixes the two."
        }
      ]
    },
    {
      id: "l39",
      title: "Reasoning vs Just the Answer",
      intro: "Know when you want the working shown versus a short, direct answer.",
      questions: [
        {
          type: "mcq",
          q: "When is showing the reasoning most valuable?",
          choices: [
            "When you need to verify a multi-step or high-stakes result",
            "When you already trust the answer completely",
            "When you want the shortest possible reply",
            "When the question has an obvious one-word answer"
          ],
          answer: 0,
          explain: "Seeing the working lets you check the logic on problems where correctness matters."
        },
        {
          type: "truefalse",
          q: "For a quick fact you already know how to verify, a short direct answer is usually better.",
          answer: true,
          explain: "When you do not need the reasoning, asking for it just adds noise and length."
        },
        {
          type: "match",
          q: "Match the situation to what to ask for.",
          pairs: [
            ["Checking a math result", "Show the reasoning"],
            ["A quick yes or no", "Just the answer"]
          ],
          explain: "Ask for working when you need to trust the path, and a direct answer when you just need the result."
        },
        {
          type: "fill",
          q: "If you only want the bottom line, tell the model to give a short, ____ answer.",
          answer: "direct",
          accept: ["direct", "concise", "brief"],
          explain: "Being explicit about wanting a direct answer keeps the response tight."
        },
        {
          type: "mcq",
          q: "A downside of always demanding full reasoning is that:",
          choices: [
            "Responses get longer and slower than you need",
            "The model refuses to answer",
            "The answer becomes secret",
            "You can never see the final result"
          ],
          answer: 0,
          explain: "Reasoning has a cost in length and time, so match it to the task."
        },
        {
          type: "truefalse",
          q: "You can ask the model to reason internally but only print the final answer.",
          answer: true,
          explain: "You can request just the conclusion when you trust it, or the working when you need to check it."
        },
        {
          type: "mcq",
          q: "Which phrasing asks for reasoning shown?",
          choices: [
            "Explain your reasoning, then give the answer",
            "Just say yes or no",
            "One word only",
            "Skip the explanation"
          ],
          answer: 0,
          explain: "Asking it to explain then answer surfaces the logic you can inspect."
        }
      ]
    },
    {
      id: "l40",
      title: "Negative Constraints",
      intro: "Tell the model what NOT to do, because guardrails are as useful as instructions.",
      questions: [
        {
          type: "mcq",
          q: "What is a negative constraint?",
          choices: [
            "An instruction about what the model should not do",
            "A rude prompt",
            "A prompt that always fails",
            "A way to make the model shorter"
          ],
          answer: 0,
          explain: "Negative constraints set boundaries by naming what to avoid, not just what to do."
        },
        {
          type: "truefalse",
          q: "Telling the model what to avoid can be as useful as telling it what to do.",
          answer: true,
          explain: "Good guardrails keep the output inside the lines you care about."
        },
        {
          type: "fill",
          q: "An instruction like do not use jargon is an example of a ____ constraint.",
          answer: "negative",
          accept: ["negative"],
          explain: "It steers the model by forbidding something rather than requesting it."
        },
        {
          type: "match",
          q: "Match each goal to a negative constraint that helps.",
          pairs: [
            ["Keep it readable", "Do not use technical jargon"],
            ["Keep it factual", "Do not invent statistics"],
            ["Keep it brief", "Do not exceed three sentences"]
          ],
          explain: "Each guardrail rules out a specific way the answer could go wrong."
        },
        {
          type: "mcq",
          q: "Which is a well-formed negative constraint?",
          choices: [
            "Do not include any personal opinions",
            "Be good",
            "Try harder",
            "Make it nice"
          ],
          answer: 0,
          explain: "A clear do-not rule is specific and checkable, unlike vague praise words."
        },
        {
          type: "truefalse",
          q: "Positive and negative constraints work best together, saying both what to do and what to avoid.",
          answer: true,
          explain: "Pairing what you want with what to avoid gives the model the clearest target."
        },
        {
          type: "order",
          q: "Order a prompt that combines both kinds of instruction.",
          items: [
            "State the main task",
            "Add the format or style you want",
            "Add what the model must not do"
          ],
          explain: "Task first, then how you want it, then the guardrails that keep it on track."
        },
        {
          type: "mcq",
          q: "A risk of only listing things to avoid, with no positive direction, is that:",
          choices: [
            "The model may not know what you actually want",
            "The model will crash",
            "The answer becomes encrypted",
            "The model stops reading"
          ],
          answer: 0,
          explain: "Guardrails narrow the options, but you still need to point at the goal you do want."
        }
      ]
    }
  ]
});
