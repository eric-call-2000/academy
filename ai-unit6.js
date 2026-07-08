window.ACADEMY.addUnit("ai", {
  id: "unit-6",
  title: "Advanced Prompting & Structure",
  color: "#2bb3a3",
  icon: "🧩",
  description: "Structured prompting patterns the pros use — several tuned for Claude.",
  lessons: [
    {
      id: "l41",
      title: "XML Tags for Structure",
      intro: "Wrapping parts of your prompt in tags like <document></document> gives the model a clear map of what is what — and Claude follows tagged structure especially well.",
      questions: [
        {
          type: "mcq",
          q: "What is the main reason to wrap parts of a prompt in XML-style tags?",
          choices: [
            "To clearly separate different pieces so the model knows what each part is",
            "To make the model run faster",
            "To hide instructions from the model",
            "Because Claude cannot read plain text"
          ],
          answer: 0,
          explain: "Tags label each chunk (the document, the instructions, the examples) so the model does not confuse one for another."
        },
        {
          type: "truefalse",
          q: "Anthropic notes that Claude tends to follow structure marked with XML-style tags especially well.",
          answer: true,
          explain: "Claude was trained with a lot of tagged structure, so tags like <document> are a reliable way to organize a prompt for it."
        },
        {
          type: "fill",
          q: "A common pattern is to put your source text inside <____></____> tags so the model can tell it apart from your instructions.",
          answer: "document",
          accept: ["document", "doc", "text"],
          explain: "Wrapping the source in <document> tags keeps it separate from the task you are asking about."
        },
        {
          type: "mcq",
          q: "Which of these is a well-formed tag pair?",
          choices: [
            "<context> ... </context>",
            "<context> ... <context>",
            "[context] ... [/context]",
            "(context) ... (context)"
          ],
          answer: 0,
          explain: "A proper pair has an opening <context> and a matching closing </context> with a slash."
        },
        {
          type: "truefalse",
          q: "Tag names have to be from an official list for the model to understand them.",
          answer: false,
          explain: "You can invent your own tag names like <email> or <rubric> — what matters is that they are clear and consistently paired."
        },
        {
          type: "order",
          q: "Put these prompt parts in a sensible tagged order for asking a question about a report.",
          items: [
            "<instructions>Summarize the report</instructions>",
            "<document>...the full report text...</document>",
            "<question>What are the top three risks?</question>"
          ],
          explain: "A clean pattern is instructions first, then the tagged source material, then the specific question."
        },
        {
          type: "match",
          q: "Match each tag to what usually goes inside it.",
          pairs: [
            ["<document>", "The source text to analyze"],
            ["<example>", "A sample of the output you want"],
            ["<instructions>", "The rules the model should follow"]
          ],
          explain: "Naming tags after their contents makes the prompt self-documenting and easy for the model to navigate."
        },
        {
          type: "mcq",
          q: "You paste a long email and then ask a question. Why wrap the email in <email></email> tags?",
          choices: [
            "So the model does not mistake the email's own words for your instructions",
            "So the email is encrypted",
            "So the model ignores the email",
            "So the model replies in the same language automatically"
          ],
          answer: 0,
          explain: "Tags draw a boundary so instructions inside the pasted content are treated as data, not commands to follow."
        }
      ]
    },
    {
      id: "l42",
      title: "System Prompts vs User Prompts",
      intro: "The system prompt sets the assistant's role and standing rules, while the user prompt carries the actual request you want handled.",
      questions: [
        {
          type: "mcq",
          q: "What is the job of a system prompt?",
          choices: [
            "To set the assistant's role, tone, and standing rules",
            "To hold the single question you want answered right now",
            "To store the model's password",
            "To speed up the response"
          ],
          answer: 0,
          explain: "The system prompt is the persistent setup — who the assistant is and how it should behave across the conversation."
        },
        {
          type: "truefalse",
          q: "The user prompt is where the actual request or question goes.",
          answer: true,
          explain: "The user prompt is the turn-by-turn message; the system prompt frames how the assistant should handle it."
        },
        {
          type: "match",
          q: "Match each message to where it belongs.",
          pairs: [
            ["You are a concise legal assistant.", "System prompt"],
            ["Summarize this contract in five bullets.", "User prompt"]
          ],
          explain: "Role and standing rules live in the system prompt; the specific task lives in the user prompt."
        },
        {
          type: "fill",
          q: "The ____ prompt sets the assistant's persona and rules, and usually stays the same across the conversation.",
          answer: "system",
          accept: ["system"],
          explain: "The system prompt is the durable framing, unlike the user prompt which changes each turn."
        },
        {
          type: "mcq",
          q: "Which instruction fits best in a system prompt rather than a user prompt?",
          choices: [
            "Always answer in plain English and never give medical advice.",
            "What time is the meeting tomorrow?",
            "Translate this paragraph to French.",
            "Fix the typo in this sentence."
          ],
          answer: 0,
          explain: "Standing rules that should apply to every reply belong in the system prompt; one-off tasks belong in the user prompt."
        },
        {
          type: "truefalse",
          q: "In a chat app like Claude.ai, custom instructions or a project's style guide act a lot like a system prompt.",
          answer: true,
          explain: "Even without direct API access, features that set persistent behavior play the system-prompt role."
        },
        {
          type: "order",
          q: "Order these from most persistent to most one-off.",
          items: [
            "System prompt: You are a friendly coding tutor.",
            "Earlier user turn: Explain recursion.",
            "Latest user turn: Now give me a quiz on it."
          ],
          explain: "The system prompt persists across the whole chat, while user turns are individual, changing requests."
        }
      ]
    },
    {
      id: "l43",
      title: "Prompt Chaining",
      intro: "Prompt chaining feeds the output of one prompt into the next, so a big job becomes a clean pipeline of small, reliable steps.",
      questions: [
        {
          type: "mcq",
          q: "What is prompt chaining?",
          choices: [
            "Feeding the output of one prompt into the next as input",
            "Asking the same question over and over until it works",
            "Locking two accounts together",
            "Sending one giant prompt with no structure"
          ],
          answer: 0,
          explain: "Chaining breaks a task into steps where each step's result becomes the input for the following step."
        },
        {
          type: "truefalse",
          q: "Chaining is useful because each step is smaller and easier to check than one huge prompt.",
          answer: true,
          explain: "Smaller steps are easier to test and debug, and you can catch a bad result before it pollutes later steps."
        },
        {
          type: "order",
          q: "Order a simple chain that turns raw notes into a polished summary email.",
          items: [
            "Extract the key points from the raw notes",
            "Organize the key points into an outline",
            "Write the email from the outline",
            "Proofread and tighten the email"
          ],
          explain: "Each step consumes the previous step's output, gradually shaping raw material into a finished result."
        },
        {
          type: "fill",
          q: "In a chain, the ____ of one prompt becomes the input to the next.",
          answer: "output",
          accept: ["output", "result", "answer"],
          explain: "That handoff of output into the next input is the whole idea behind chaining."
        },
        {
          type: "mcq",
          q: "Which task is the best candidate for chaining?",
          choices: [
            "Research a topic, then draft an article, then fact-check it",
            "Answer a single yes or no question",
            "Say hello",
            "Repeat a word back to you"
          ],
          answer: 0,
          explain: "Multi-stage jobs with distinct steps benefit most, since each stage can be handled and verified separately."
        },
        {
          type: "match",
          q: "Match each chain step to its role.",
          pairs: [
            ["First prompt", "Produces the initial draft or data"],
            ["Middle prompt", "Transforms or refines that output"],
            ["Final prompt", "Polishes into the finished result"]
          ],
          explain: "A chain moves material forward through clearly defined stages until it is done."
        },
        {
          type: "truefalse",
          q: "A benefit of chaining is that you can inspect the middle result and fix it before continuing.",
          answer: true,
          explain: "Because the steps are separate, a wrong intermediate output is easy to spot and correct early."
        }
      ]
    },
    {
      id: "l44",
      title: "Prefilling the Response",
      intro: "Prefilling means starting the assistant's answer for it — an API technique that locks the format, like beginning with a curly brace so the reply is clean JSON.",
      questions: [
        {
          type: "mcq",
          q: "What does prefilling the response do?",
          choices: [
            "Starts the assistant's answer so it continues in the format you set",
            "Fills your account with credits",
            "Deletes the previous answer",
            "Makes the model answer a different question"
          ],
          answer: 0,
          explain: "You supply the first characters of the assistant turn, and the model continues from there in that shape."
        },
        {
          type: "fill",
          q: "To force clean JSON output, you can prefill the assistant's reply with an opening ____ brace.",
          answer: "curly",
          accept: ["curly", "{", "open"],
          explain: "Starting the reply with { nudges the model to keep going in JSON rather than adding chatty preamble."
        },
        {
          type: "truefalse",
          q: "Prefilling is mainly an API technique rather than something you type into a normal chat box.",
          answer: true,
          explain: "It works by seeding the assistant's message via the API, which a plain chat interface usually does not let you do directly."
        },
        {
          type: "mcq",
          q: "Why prefill the start of an answer with '{'?",
          choices: [
            "To skip preamble and get straight into valid JSON",
            "To make the answer longer",
            "To change the model's personality",
            "To translate the answer"
          ],
          answer: 0,
          explain: "The brace commits the model to JSON immediately, cutting out lines like 'Sure, here is your data.'"
        },
        {
          type: "match",
          q: "Match each prefill starter to the format it encourages.",
          pairs: [
            ["{", "JSON object"],
            ["- ", "A bulleted list"],
            ["```python", "A Python code block"]
          ],
          explain: "The first few characters set the pattern the model naturally continues."
        },
        {
          type: "order",
          q: "Order the steps to get JSON out with a prefill.",
          items: [
            "Write a user prompt asking for structured data",
            "Prefill the assistant turn with an opening brace",
            "Let the model continue the JSON",
            "Parse the returned JSON in your code"
          ],
          explain: "You ask, seed the format, let it complete, then use the clean structured output."
        },
        {
          type: "truefalse",
          q: "Prefilling can help avoid friendly filler text before the real answer.",
          answer: true,
          explain: "By starting mid-format, you skip the 'Here you go!' intro and get straight to the content you need."
        }
      ]
    },
    {
      id: "l45",
      title: "Self-Consistency & Sampling",
      intro: "Self-consistency means asking the same question several times and comparing or voting on the answers to get a more reliable result.",
      questions: [
        {
          type: "mcq",
          q: "What is the self-consistency technique?",
          choices: [
            "Asking the same question multiple times and taking the answer that comes up most",
            "Asking many different questions at once",
            "Trusting the very first answer no matter what",
            "Turning the model off between questions"
          ],
          answer: 0,
          explain: "Running the prompt several times and voting on the results smooths out one-off mistakes."
        },
        {
          type: "truefalse",
          q: "Because models sample, the same prompt can produce slightly different answers on different runs.",
          answer: true,
          explain: "This built-in variation is exactly why comparing multiple runs can reveal the most consistent answer."
        },
        {
          type: "fill",
          q: "When you gather several answers and pick the most common one, you are effectively taking a ____.",
          answer: "vote",
          accept: ["vote", "majority vote", "majority"],
          explain: "A majority vote across samples tends to be more reliable than any single run."
        },
        {
          type: "mcq",
          q: "For which kind of question is self-consistency most worth the extra cost?",
          choices: [
            "A tricky math or reasoning problem where one slip changes the answer",
            "Saying good morning",
            "Repeating a fixed sentence",
            "Reading back a single number"
          ],
          answer: 0,
          explain: "Hard reasoning tasks benefit most, since averaging over runs catches occasional errors."
        },
        {
          type: "truefalse",
          q: "Self-consistency is free — running the prompt many times costs no extra time or money.",
          answer: false,
          explain: "It uses more compute and time because you are running the same prompt several times, so save it for high-stakes answers."
        },
        {
          type: "order",
          q: "Order the steps of a self-consistency check.",
          items: [
            "Run the same prompt several times",
            "Collect all the answers",
            "Compare them and pick the most common one"
          ],
          explain: "Multiple runs, then compare, then vote — that is the whole loop."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Sampling", "The model picking among plausible next words, so runs can differ"],
            ["Self-consistency", "Comparing several runs and voting on the answer"]
          ],
          explain: "Sampling causes the variation; self-consistency uses that variation to your advantage."
        }
      ]
    },
    {
      id: "l46",
      title: "Meta-Prompting",
      intro: "Meta-prompting is asking the AI to write or improve a prompt for you, using the model itself to sharpen how you ask.",
      questions: [
        {
          type: "mcq",
          q: "What is meta-prompting?",
          choices: [
            "Asking the AI to write or improve a prompt for you",
            "Prompting two models at the same time",
            "Hiding the prompt from the model",
            "Using no prompt at all"
          ],
          answer: 0,
          explain: "You put the model to work on the prompt itself, letting it suggest a clearer or stronger version."
        },
        {
          type: "truefalse",
          q: "A meta-prompt might say: 'Rewrite my instructions below to be clearer and more specific.'",
          answer: true,
          explain: "That is a classic meta-prompt — the task is improving a prompt rather than doing the underlying job."
        },
        {
          type: "fill",
          q: "Meta-prompting uses the model to help you write a better ____.",
          answer: "prompt",
          accept: ["prompt", "prompts"],
          explain: "The output of a meta-prompt is an improved prompt you can then use for the real task."
        },
        {
          type: "mcq",
          q: "Your prompt keeps giving vague answers. A good meta-prompting move is to:",
          choices: [
            "Ask the model what details it needs and to rewrite the prompt to include them",
            "Give up and accept the vague answers",
            "Send the exact same prompt again unchanged",
            "Ask an unrelated question"
          ],
          answer: 0,
          explain: "The model can point out what is missing and produce a tighter prompt, closing the gap on the next try."
        },
        {
          type: "order",
          q: "Order a simple meta-prompting loop.",
          items: [
            "Describe your goal and paste your rough prompt",
            "Ask the model to improve the prompt",
            "Use the improved prompt on the real task",
            "Check the result and refine again if needed"
          ],
          explain: "You improve the prompt first, then run it, then loop if the output still is not right."
        },
        {
          type: "truefalse",
          q: "Meta-prompting is only useful for expert prompt engineers.",
          answer: false,
          explain: "Beginners benefit a lot, since the model can turn a rough idea into a well-structured prompt for them."
        },
        {
          type: "match",
          q: "Match each request to whether it is a meta-prompt or a normal prompt.",
          pairs: [
            ["Improve this prompt so answers are more specific.", "Meta-prompt"],
            ["Write me a haiku about autumn.", "Normal prompt"]
          ],
          explain: "Meta-prompts operate on prompts; normal prompts ask for the end result directly."
        }
      ]
    },
    {
      id: "l47",
      title: "Working with Long Context",
      intro: "With long documents, put the text first and ask your questions after, and reference sections by name so the model can find them.",
      questions: [
        {
          type: "mcq",
          q: "When feeding a long document plus a question, what order tends to work best?",
          choices: [
            "Put the long document first, then ask your question after it",
            "Ask the question first, then never include the document",
            "Split every word onto its own line",
            "Send only the question and hope the model knows the document"
          ],
          answer: 0,
          explain: "Placing the document before the question helps the model ground its answer in the text it just read."
        },
        {
          type: "truefalse",
          q: "Newer models generally support larger context windows, letting you include longer documents in one prompt.",
          answer: true,
          explain: "Bigger context windows mean more text fits at once, though it is still smart to keep prompts focused."
        },
        {
          type: "fill",
          q: "To help the model locate the right part, ____ the section you mean (for example, 'see Section 3').",
          answer: "reference",
          accept: ["reference", "name", "cite", "point to"],
          explain: "Naming or referencing a section gives the model an anchor to find the relevant passage."
        },
        {
          type: "mcq",
          q: "Why reference a specific section when asking about a long document?",
          choices: [
            "It gives the model a clear anchor so it looks in the right place",
            "It makes the document shorter",
            "It changes the document's meaning",
            "It hides the rest of the document"
          ],
          answer: 0,
          explain: "A pointer like 'in the Methods section' narrows the model's focus to the passage you care about."
        },
        {
          type: "order",
          q: "Order a good long-context prompt.",
          items: [
            "Paste the long document, ideally inside tags",
            "State which section you care about",
            "Ask your specific question about it"
          ],
          explain: "Document first, then a pointer to the relevant part, then the question keeps the model well grounded."
        },
        {
          type: "truefalse",
          q: "Even with a large context window, stuffing in unrelated text always improves the answer.",
          answer: false,
          explain: "Irrelevant filler can distract the model; include what is relevant and reference the parts that matter."
        },
        {
          type: "match",
          q: "Match each habit to why it helps with long context.",
          pairs: [
            ["Document before question", "The model reads the source before it answers"],
            ["Reference sections by name", "Gives the model an anchor to find the passage"],
            ["Wrap the text in tags", "Separates the source from your instructions"]
          ],
          explain: "Order, references, and tags together make long documents much easier for the model to use."
        }
      ]
    },
    {
      id: "l48",
      title: "Reusable Prompt Templates",
      intro: "Save prompt patterns with placeholders you fill in for repeat tasks, so you get consistent results without rewriting from scratch.",
      questions: [
        {
          type: "mcq",
          q: "What is a reusable prompt template?",
          choices: [
            "A saved prompt pattern with placeholders you fill in each time",
            "A prompt you can only use once",
            "A prompt with no instructions",
            "A random prompt generated fresh every time"
          ],
          answer: 0,
          explain: "Templates capture a proven pattern and leave blanks for the details that change per task."
        },
        {
          type: "fill",
          q: "In a template, a spot like [TOPIC] that you swap out each time is called a ____.",
          answer: "placeholder",
          accept: ["placeholder", "variable", "slot"],
          explain: "Placeholders mark exactly what to replace, keeping the rest of the proven prompt intact."
        },
        {
          type: "truefalse",
          q: "Templates help you get more consistent results across similar tasks.",
          answer: true,
          explain: "Reusing a refined pattern means less variation and less rewriting each time you run a similar job."
        },
        {
          type: "mcq",
          q: "Which is a good use for a saved template?",
          choices: [
            "Summarizing customer emails, where only the email text changes each time",
            "A one-time question you will never ask again",
            "Saying a single random word",
            "A task with no repeatable structure"
          ],
          answer: 0,
          explain: "Repeatable jobs with a stable structure and one changing input are ideal for templates."
        },
        {
          type: "match",
          q: "Match each part of a template to its role.",
          pairs: [
            ["Fixed instructions", "The stable part that stays the same"],
            ["[PLACEHOLDER]", "The part you fill in each run"]
          ],
          explain: "A template is a stable skeleton plus a few clearly marked blanks."
        },
        {
          type: "order",
          q: "Order the steps to build and use a template.",
          items: [
            "Write a prompt that works well for one case",
            "Replace the changing details with placeholders",
            "Save the template",
            "Fill in the placeholders for each new task"
          ],
          explain: "Get one good version, generalize it with placeholders, save it, then reuse it by filling the blanks."
        },
        {
          type: "truefalse",
          q: "Once saved, a template can never be improved.",
          answer: false,
          explain: "Templates are living tools — refine them as you learn what wording produces better results."
        }
      ]
    }
  ]
});
