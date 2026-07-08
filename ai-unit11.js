window.ACADEMY.addUnit("ai", {
  id: "unit-11",
  title: "Writing & Communication with AI",
  color: "#ff9600",
  icon: "✍️",
  description: "Use AI to write faster and better — without losing your own voice.",
  lessons: [
    {
      id: "l81",
      title: "Drafting from a Blank Page",
      intro: "Beat writer's block by asking AI for a rough first draft you can react to and reshape.",
      questions: [
        {
          type: "mcq",
          q: "What is the main benefit of asking AI for a rough first draft?",
          choices: [
            "It gives you something to react to and reshape instead of a blank page",
            "It guarantees the final text will be perfect",
            "It means you never have to edit anything",
            "It replaces the need to have any ideas of your own"
          ],
          answer: 0,
          explain: "A messy first draft is easier to improve than an empty page — reacting is easier than starting."
        },
        {
          type: "truefalse",
          q: "A first draft from AI should usually be treated as a starting point, not the finished piece.",
          answer: true,
          explain: "Use the draft as raw material — you still shape, cut, and correct it to make it yours."
        },
        {
          type: "fill",
          q: "Giving the AI your topic, audience, and desired length is called giving it ____.",
          answer: "context",
          accept: ["context", "background", "details"],
          explain: "The more context you provide, the closer the draft lands to what you actually need."
        },
        {
          type: "mcq",
          q: "Which prompt is most likely to produce a useful first draft?",
          choices: [
            "Write a 150-word welcome email to new gym members, friendly and encouraging",
            "Write something good",
            "Email",
            "Make it nice please"
          ],
          answer: 0,
          explain: "Specific goals — length, audience, and tone — steer the model toward a usable draft."
        },
        {
          type: "order",
          q: "Order these steps for drafting with AI, from first to last.",
          items: [
            "Describe your topic and audience to the AI",
            "Ask for a rough first draft",
            "React to the draft and mark what to change",
            "Rewrite it into your final version"
          ],
          explain: "Draft, react, revise: the AI removes the blank-page barrier, and you do the shaping."
        },
        {
          type: "truefalse",
          q: "An AI draft can contain made-up facts, so you should check any claims before publishing.",
          answer: true,
          explain: "Language models predict plausible text and can hallucinate — always verify facts and figures."
        },
        {
          type: "mcq",
          q: "If the first draft misses the mark, what is the best next move?",
          choices: [
            "Tell the AI what was wrong and ask it to try again",
            "Give up and write it entirely from scratch",
            "Publish it anyway since AI wrote it",
            "Ask the same exact prompt over and over"
          ],
          answer: 0,
          explain: "Writing with AI is a back-and-forth — clear feedback gets you a better next draft."
        }
      ]
    },
    {
      id: "l82",
      title: "Editing & Proofreading",
      intro: "Fix grammar, tighten wording, and improve clarity — and ask the AI to explain its changes.",
      questions: [
        {
          type: "mcq",
          q: "Which task is proofreading focused on?",
          choices: [
            "Catching spelling, grammar, and punctuation errors",
            "Inventing a brand new topic",
            "Changing the meaning of the whole piece",
            "Adding as many words as possible"
          ],
          answer: 0,
          explain: "Proofreading is the polish pass: correctness and clarity, not new ideas."
        },
        {
          type: "truefalse",
          q: "Asking the AI to explain WHY it changed something helps you learn and keeps control in your hands.",
          answer: true,
          explain: "When the AI shows its reasoning, you can accept good edits and reject ones you disagree with."
        },
        {
          type: "fill",
          q: "Removing extra words to make a sentence shorter and clearer is called ____ the wording.",
          answer: "tightening",
          accept: ["tightening", "trimming", "cutting", "tighten"],
          explain: "Tightening removes filler so your point comes through faster."
        },
        {
          type: "mcq",
          q: "Which prompt best asks AI to edit while keeping your meaning?",
          choices: [
            "Fix the grammar and tighten this, but keep my meaning and list what you changed",
            "Rewrite this completely however you want",
            "Make it longer no matter what",
            "Change the topic to something else"
          ],
          answer: 0,
          explain: "A good editing prompt sets limits (keep my meaning) and asks for transparency (list changes)."
        },
        {
          type: "match",
          q: "Match each editing task to what it does.",
          pairs: [
            ["Proofread", "Fix spelling and grammar mistakes"],
            ["Tighten", "Cut filler to make it shorter"],
            ["Clarify", "Make confusing sentences easier to understand"]
          ],
          explain: "Different edit requests do different jobs — name the one you actually want."
        },
        {
          type: "truefalse",
          q: "You should accept every edit the AI suggests without reviewing it.",
          answer: false,
          explain: "You are the author — review each change; the AI is an assistant, not the final judge."
        },
        {
          type: "mcq",
          q: "Why is it smart to review AI edits rather than trust them blindly?",
          choices: [
            "The AI can misread your intent or introduce a subtle error",
            "The AI is always wrong on purpose",
            "Editing tools cost extra money per word",
            "Reviewing edits is against the rules"
          ],
          answer: 0,
          explain: "AI edits are usually helpful but not infallible — a quick review protects your meaning."
        }
      ]
    },
    {
      id: "l83",
      title: "Adjusting Tone & Style",
      intro: "Shift between formal, casual, or persuasive, and match a sample of your own writing.",
      questions: [
        {
          type: "mcq",
          q: "What does 'tone' refer to in writing?",
          choices: [
            "The attitude and feeling your words convey, like formal or friendly",
            "The font size on the page",
            "The number of paragraphs",
            "The color of the text"
          ],
          answer: 0,
          explain: "Tone is the mood of your writing — the same message can sound formal, casual, or urgent."
        },
        {
          type: "truefalse",
          q: "You can paste a sample of your own writing and ask the AI to match its style.",
          answer: true,
          explain: "Giving the AI a writing sample helps it mimic your rhythm, word choice, and voice."
        },
        {
          type: "fill",
          q: "Writing meant to convince someone to take action uses a ____ tone.",
          answer: "persuasive",
          accept: ["persuasive", "convincing"],
          explain: "A persuasive tone builds a case and nudges the reader toward a decision."
        },
        {
          type: "match",
          q: "Match each tone to where it fits best.",
          pairs: [
            ["Formal", "A message to a company executive"],
            ["Casual", "A text to a close friend"],
            ["Persuasive", "An ad trying to win a sale"]
          ],
          explain: "Matching tone to audience is what makes writing land — pick the tone the reader expects."
        },
        {
          type: "mcq",
          q: "Which prompt best changes the tone of existing text?",
          choices: [
            "Rewrite this in a warmer, more casual tone without changing the facts",
            "Make it different",
            "Rewrite this",
            "Add tone to it"
          ],
          answer: 0,
          explain: "Name the target tone and set a boundary (keep the facts) for a clean tone shift."
        },
        {
          type: "order",
          q: "Order these steps for matching your own writing style.",
          items: [
            "Paste a sample of your past writing",
            "Ask the AI to describe your style",
            "Ask it to write new text in that style",
            "Tweak the result so it sounds like you"
          ],
          explain: "Sample first, then generate in that voice — you finish by fine-tuning the match."
        },
        {
          type: "truefalse",
          q: "The same message can never be written in more than one tone.",
          answer: false,
          explain: "One message can be formal, casual, or persuasive — tone is a choice you control."
        }
      ]
    },
    {
      id: "l84",
      title: "Summarizing Anything",
      intro: "Produce TL;DRs, bullet summaries, or executive summaries — and set the length you want.",
      questions: [
        {
          type: "mcq",
          q: "What does 'TL;DR' mean?",
          choices: [
            "Too Long; Didn't Read — a very short summary",
            "The Longest Detailed Report",
            "Total Length Divided by Rows",
            "Try Later; Do Research"
          ],
          answer: 0,
          explain: "A TL;DR gives the gist in a sentence or two for readers short on time."
        },
        {
          type: "truefalse",
          q: "You can tell the AI exactly how long you want a summary to be.",
          answer: true,
          explain: "Set the length — 'in one sentence', 'in three bullets', 'under 100 words' — to control the output."
        },
        {
          type: "fill",
          q: "A short, high-level summary written for busy decision-makers is called an ____ summary.",
          answer: "executive",
          accept: ["executive"],
          explain: "An executive summary gives leaders the key points and takeaways without the detail."
        },
        {
          type: "match",
          q: "Match each summary type to its style.",
          pairs: [
            ["TL;DR", "One or two quick lines"],
            ["Bullet summary", "A list of key points"],
            ["Executive summary", "A short overview for decision-makers"]
          ],
          explain: "Different summary formats fit different readers — ask for the one your audience needs."
        },
        {
          type: "mcq",
          q: "Which prompt gives you the most control over a summary?",
          choices: [
            "Summarize this article in 3 bullet points, each under 15 words",
            "Summarize this",
            "Make it shorter",
            "Give me the important stuff"
          ],
          answer: 0,
          explain: "Naming the format and length gives you a predictable, usable summary."
        },
        {
          type: "truefalse",
          q: "A good practice is to check a summary against the source to make sure nothing important was dropped or changed.",
          answer: true,
          explain: "Summaries can miss nuance or introduce errors — verify against the original before relying on it."
        },
        {
          type: "mcq",
          q: "When is a bullet summary usually more helpful than a paragraph?",
          choices: [
            "When the reader wants to scan key points quickly",
            "When you want to hide the main ideas",
            "When the topic has no distinct points",
            "When you are trying to make it as long as possible"
          ],
          answer: 0,
          explain: "Bullets make separate points easy to scan — great for meetings, notes, and quick reviews."
        }
      ]
    },
    {
      id: "l85",
      title: "Emails & Messages",
      intro: "Draft and reply to emails, and soften or firm up the tone while keeping it concise.",
      questions: [
        {
          type: "mcq",
          q: "What information helps the AI draft a better reply to an email?",
          choices: [
            "The original message and the outcome you want",
            "Only your favorite color",
            "Nothing — it can read your mind",
            "The time of day only"
          ],
          answer: 0,
          explain: "Give the AI the email you're answering plus your goal so the reply fits the situation."
        },
        {
          type: "truefalse",
          q: "You can ask the AI to make an email firmer without making it rude.",
          answer: true,
          explain: "Firm-but-polite is a real tone — ask for it directly and the model can hit that balance."
        },
        {
          type: "fill",
          q: "Making an email gentler and more polite is called ____ the tone.",
          answer: "softening",
          accept: ["softening", "soften"],
          explain: "Softening keeps your message clear while easing how it lands with the reader."
        },
        {
          type: "mcq",
          q: "Which prompt is best for a quick, effective email?",
          choices: [
            "Draft a short, polite email declining this meeting and suggesting next week",
            "Write an email",
            "Say no",
            "Do the email thing"
          ],
          answer: 0,
          explain: "Specify length, tone, and the exact outcome for a message you can send with minimal edits."
        },
        {
          type: "match",
          q: "Match each request to the change it makes to an email.",
          pairs: [
            ["Soften it", "Make it gentler and more polite"],
            ["Firm it up", "Make it clearer and more direct"],
            ["Tighten it", "Make it shorter"]
          ],
          explain: "Naming the exact adjustment you want gets you a message that fits the moment."
        },
        {
          type: "truefalse",
          q: "You should always read an AI-drafted message before sending it.",
          answer: true,
          explain: "You're the sender — a quick read catches wrong details, odd tone, or things you'd say differently."
        },
        {
          type: "mcq",
          q: "Why keep most emails concise?",
          choices: [
            "Busy readers are more likely to read and act on short messages",
            "Long emails always get more replies",
            "Short emails are against email etiquette",
            "Length has no effect on anything"
          ],
          answer: 0,
          explain: "Concise emails respect the reader's time and make your ask easy to see and answer."
        }
      ]
    },
    {
      id: "l86",
      title: "Brainstorming & Ideas",
      intro: "Generate lists of angles, names, and outlines to get past a blank page.",
      questions: [
        {
          type: "mcq",
          q: "How is AI most useful during brainstorming?",
          choices: [
            "It quickly produces many options for you to pick and combine",
            "It always finds the one perfect answer",
            "It removes the need for any human judgment",
            "It refuses to give more than one idea"
          ],
          answer: 0,
          explain: "AI shines at volume — generate lots of options, then use your judgment to choose the best."
        },
        {
          type: "truefalse",
          q: "Asking for '10 different angles' is a good way to get variety in a brainstorm.",
          answer: true,
          explain: "Requesting a specific number pushes the AI to spread out and offer real variety."
        },
        {
          type: "fill",
          q: "A structured list of the sections a piece of writing will cover is called an ____.",
          answer: "outline",
          accept: ["outline"],
          explain: "An outline maps your piece before you write it, so the draft flows in order."
        },
        {
          type: "mcq",
          q: "Which prompt best kicks off a brainstorm?",
          choices: [
            "Give me 10 name ideas for a coffee shop, mixing playful and classic styles",
            "Names",
            "Help",
            "Coffee"
          ],
          answer: 0,
          explain: "Set the quantity and the range of styles to get a broad, useful list of ideas."
        },
        {
          type: "order",
          q: "Order these brainstorming steps from first to last.",
          items: [
            "Ask the AI for many ideas at once",
            "Skim the list and star the best ones",
            "Ask it to expand your favorites",
            "Pick the final idea to develop"
          ],
          explain: "Go wide first, then narrow — generate lots, shortlist, expand, and choose."
        },
        {
          type: "truefalse",
          q: "Every idea an AI brainstorms will be original and never used before.",
          answer: false,
          explain: "AI predicts likely text, so ideas can be common or overlap with existing ones — check and refine."
        },
        {
          type: "mcq",
          q: "If a brainstorm feels too safe and generic, what helps?",
          choices: [
            "Ask for bolder, more unexpected options or add specific constraints",
            "Ask the exact same question again",
            "Accept the first idea without changes",
            "Stop brainstorming entirely"
          ],
          answer: 0,
          explain: "Pushing for bold ideas or adding constraints steers the model off the safe, obvious path."
        }
      ]
    },
    {
      id: "l87",
      title: "Rewriting for an Audience",
      intro: "Simplify for beginners, formalize for executives, or translate for another reader.",
      questions: [
        {
          type: "mcq",
          q: "Why rewrite the same content for different audiences?",
          choices: [
            "Different readers need different levels of detail, vocabulary, and tone",
            "It is required by law",
            "Rewriting always makes text longer",
            "Audiences never affect how you should write"
          ],
          answer: 0,
          explain: "A message for a 5th grader and one for an executive should read very differently."
        },
        {
          type: "truefalse",
          q: "Asking AI to 'explain this like I'm a beginner' is a way to simplify content.",
          answer: true,
          explain: "Framing the reader's level tells the AI how simple or advanced to make the language."
        },
        {
          type: "fill",
          q: "Rewriting text so it uses simpler words and shorter sentences is called ____ it.",
          answer: "simplifying",
          accept: ["simplifying", "simplify"],
          explain: "Simplifying strips jargon and shortens sentences so more readers can follow along."
        },
        {
          type: "match",
          q: "Match each audience to the rewrite it needs.",
          pairs: [
            ["A curious beginner", "Plain words and simple examples"],
            ["A company executive", "Formal tone and key takeaways"],
            ["A Spanish speaker", "A translation into Spanish"]
          ],
          explain: "Knowing the reader tells you whether to simplify, formalize, or translate."
        },
        {
          type: "mcq",
          q: "Which prompt rewrites for a specific audience most clearly?",
          choices: [
            "Rewrite this for a busy executive: formal, under 100 words, lead with the takeaway",
            "Make it for someone else",
            "Change the audience",
            "Rewrite for people"
          ],
          answer: 0,
          explain: "Naming the reader, tone, and length gives the model a clear target to hit."
        },
        {
          type: "truefalse",
          q: "AI can translate text into another language, but you should verify important translations for accuracy.",
          answer: true,
          explain: "AI translation is helpful but can slip on nuance or idioms — verify anything high-stakes."
        },
        {
          type: "mcq",
          q: "What usually changes when you rewrite from beginner level to expert level?",
          choices: [
            "You can use more technical vocabulary and skip basic explanations",
            "You must remove all punctuation",
            "You always make it much longer",
            "Nothing changes at all"
          ],
          answer: 0,
          explain: "Experts share a vocabulary, so you can go deeper and drop the beginner scaffolding."
        }
      ]
    },
    {
      id: "l88",
      title: "Keeping Your Own Voice",
      intro: "Feed the AI samples of your writing and edit its output so it still sounds like you.",
      questions: [
        {
          type: "mcq",
          q: "What is the best way to help AI capture your writing voice?",
          choices: [
            "Give it real samples of your past writing to learn from",
            "Tell it to guess how you write",
            "Never give it any examples",
            "Ask it to copy a famous author instead"
          ],
          answer: 0,
          explain: "Concrete samples show the AI your real rhythm, word choices, and quirks better than a description."
        },
        {
          type: "truefalse",
          q: "Even with good samples, you should edit AI output so it truly sounds like you.",
          answer: true,
          explain: "The AI gets close, but your final edit is what makes the writing unmistakably yours."
        },
        {
          type: "fill",
          q: "The unique way you naturally write — your word choices and rhythm — is called your ____.",
          answer: "voice",
          accept: ["voice", "style"],
          explain: "Your voice is what makes your writing recognizable; the AI is a tool, not the author."
        },
        {
          type: "mcq",
          q: "Which is a warning sign that AI output does NOT sound like you?",
          choices: [
            "It uses phrases and a rhythm you would never choose",
            "It fixes a spelling mistake",
            "It matches your usual length",
            "It keeps your main point"
          ],
          answer: 0,
          explain: "Unfamiliar phrasing is a cue to revise — trust your ear and rework it into your own words."
        },
        {
          type: "order",
          q: "Order these steps for keeping your voice while using AI.",
          items: [
            "Share samples of your own writing",
            "Ask the AI to draft in your style",
            "Read the draft and flag anything unlike you",
            "Edit it until it sounds like you"
          ],
          explain: "Samples in, draft out, then your edits close the gap so the writing stays yours."
        },
        {
          type: "truefalse",
          q: "Using AI means you have to give up your personal writing voice.",
          answer: false,
          explain: "Used well, AI speeds up your writing while you keep full control of the voice."
        },
        {
          type: "match",
          q: "Match each step to its role in keeping your voice.",
          pairs: [
            ["Provide samples", "Show the AI how you write"],
            ["Review the draft", "Spot anything that doesn't sound like you"],
            ["Final edit", "Make the words truly yours"]
          ],
          explain: "You stay the author at every step — the AI drafts, but you own the voice."
        }
      ]
    }
  ]
});
