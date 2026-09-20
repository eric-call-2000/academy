window.ACADEMY.addUnit("content", {
  id: "unit-6",
  title: "Retention & Editing",
  color: "#ff0033",
  icon: "✂️",
  description: "Read the retention graph and edit for attention: b-roll, cuts, chapters, and fixing the dips.",
  lessons: [
    {
      id: "l41",
      title: "Reading the Retention Graph",
      intro: "The audience retention graph shows where viewers stay, leave, and rewatch across your video.",
      questions: [
        {
          type: "mcq",
          q: "The audience retention graph shows:",
          choices: [
            "What portion of viewers are watching at each moment",
            "How many tags you used",
            "Your upload times",
            "Your subscriber count"
          ],
          answer: 0,
          explain: "It maps viewership across the video's timeline, moment by moment."
        },
        {
          type: "truefalse",
          q: "A sharp drop in the retention graph shows a moment where many viewers left.",
          answer: true,
          explain: "Steep dips reveal exactly where you are losing the audience."
        },
        {
          type: "fill",
          q: "The graph showing viewership across the video is the audience ____ graph.",
          answer: "retention",
          accept: ["retention"],
          explain: "This is the audience retention graph."
        },
        {
          type: "match",
          q: "Match the graph feature to its meaning.",
          pairs: [
            ["Sharp dip", "Many viewers left here"],
            ["Spike/bump", "Viewers rewatched this part"],
            ["Steady decline", "Normal gradual drop-off"]
          ],
          explain: "Dips, spikes, and gentle decline each tell a story."
        },
        {
          type: "truefalse",
          q: "A small, steady decline over a video is completely normal.",
          answer: true,
          explain: "Some drop-off is expected; sharp dips are the ones to investigate."
        },
        {
          type: "mcq",
          q: "The retention graph is most useful because it:",
          choices: [
            "Tells you exactly which moments to improve next time",
            "Sets your resolution",
            "Chooses your thumbnail",
            "Adds tags"
          ],
          answer: 0,
          explain: "It pinpoints the specific spots to fix in future videos."
        }
      ]
    },
    {
      id: "l42",
      title: "Fixing the Dips",
      intro: "Diagnose why viewers leave at each dip, then edit or restructure to prevent it next time.",
      questions: [
        {
          type: "mcq",
          q: "A dip right after the intro often means:",
          choices: [
            "The hook did not deliver on the packaging",
            "The video is too short",
            "You used too few tags",
            "Your resolution is wrong"
          ],
          answer: 0,
          explain: "Early dips usually point to a weak or mismatched hook."
        },
        {
          type: "truefalse",
          q: "A dip during a slow, rambling section suggests you should tighten or cut it.",
          answer: true,
          explain: "Viewers leave during dead weight; trimming it improves retention."
        },
        {
          type: "fill",
          q: "A sudden drop in retention is called a ____.",
          answer: "dip",
          accept: ["dip", "drop"],
          explain: "A sudden retention loss is a dip."
        },
        {
          type: "match",
          q: "Match the dip cause to a fix.",
          pairs: [
            ["Weak hook", "Rework the intro"],
            ["Boring middle", "Cut or tighten it"],
            ["Confusing part", "Explain more clearly"]
          ],
          explain: "Each dip cause has a specific editing or structural fix."
        },
        {
          type: "truefalse",
          q: "You cannot learn anything from where viewers leave.",
          answer: false,
          explain: "Drop-off points are direct feedback on what to fix."
        },
        {
          type: "mcq",
          q: "Applying dip lessons to future videos leads to:",
          choices: [
            "Gradually improving retention over time",
            "Worse retention",
            "More tags",
            "Higher resolution"
          ],
          answer: 0,
          explain: "Learning from dips compounds into steadily better videos."
        }
      ]
    },
    {
      id: "l43",
      title: "Editing for Attention",
      intro: "Editing is where pacing is won: cut ruthlessly, remove filler, and keep every second earning its place.",
      questions: [
        {
          type: "mcq",
          q: "The core job of attention-focused editing is to:",
          choices: [
            "Remove anything that does not add value or momentum",
            "Make the video as long as possible",
            "Add long silences",
            "Keep every mistake in"
          ],
          answer: 0,
          explain: "Cutting the dead weight keeps the video tight and engaging."
        },
        {
          type: "truefalse",
          q: "Removing 'ums', long pauses, and tangents usually improves a video.",
          answer: true,
          explain: "Trimming filler sharpens pacing and holds attention."
        },
        {
          type: "fill",
          q: "Cutting out filler and dead air is often called ____ editing.",
          answer: "tight",
          accept: ["tight"],
          explain: "This is called tight editing."
        },
        {
          type: "match",
          q: "Match the edit to its effect.",
          pairs: [
            ["Cut filler words", "Tighter pacing"],
            ["Trim tangents", "Clearer message"],
            ["Remove dead air", "More momentum"]
          ],
          explain: "Each cut improves pace and clarity."
        },
        {
          type: "truefalse",
          q: "A longer video is always better than a tighter, shorter one.",
          answer: false,
          explain: "Length for its own sake hurts retention; tightness usually wins."
        },
        {
          type: "mcq",
          q: "A helpful editing question for each moment is:",
          choices: [
            "Does this earn its place, or can it be cut?",
            "How can I make this longer?",
            "How many tags fit here?",
            "What resolution is this?"
          ],
          answer: 0,
          explain: "Judging whether each second earns its place drives tight editing."
        }
      ]
    },
    {
      id: "l44",
      title: "B-Roll & Visuals",
      intro: "Supporting footage and graphics illustrate your points and keep the screen visually interesting.",
      questions: [
        {
          type: "mcq",
          q: "B-roll is:",
          choices: [
            "Supporting footage shown while you talk",
            "Your main talking-head clip",
            "A type of tag",
            "The video description"
          ],
          answer: 0,
          explain: "B-roll is secondary footage that illustrates or covers the main audio."
        },
        {
          type: "truefalse",
          q: "Relevant b-roll and graphics can make a video clearer and more engaging.",
          answer: true,
          explain: "Visuals reinforce points and prevent a static, dull screen."
        },
        {
          type: "fill",
          q: "Supporting footage layered over your narration is called ____.",
          answer: "b-roll",
          accept: ["b-roll", "broll", "b roll"],
          explain: "This supporting footage is b-roll."
        },
        {
          type: "match",
          q: "Match the visual to its purpose.",
          pairs: [
            ["B-roll", "Illustrate what you describe"],
            ["Text/graphics", "Emphasize key points"],
            ["Screen recording", "Show a process directly"]
          ],
          explain: "Each visual type supports understanding in a different way."
        },
        {
          type: "truefalse",
          q: "Irrelevant b-roll that does not match the words can distract viewers.",
          answer: true,
          explain: "Mismatched visuals confuse rather than help; keep b-roll relevant."
        },
        {
          type: "mcq",
          q: "A changing visual every so often helps because it:",
          choices: [
            "Refreshes attention and breaks monotony",
            "Increases your bitrate",
            "Adds tags",
            "Slows the pace"
          ],
          answer: 0,
          explain: "Visual variety re-engages the eye and sustains attention."
        }
      ]
    },
    {
      id: "l45",
      title: "Sound & Music",
      intro: "Clean audio and well-chosen music set the mood without drowning your voice.",
      questions: [
        {
          type: "mcq",
          q: "Background music should generally be:",
          choices: [
            "Quiet enough that your voice stays clear",
            "Louder than your voice",
            "Absent from every video always",
            "The same volume as your voice"
          ],
          answer: 0,
          explain: "Music supports mood but must sit under the voice."
        },
        {
          type: "truefalse",
          q: "Music can help set tone and pace, but clear voice audio comes first.",
          answer: true,
          explain: "The voice must always be intelligible; music is secondary."
        },
        {
          type: "fill",
          q: "Music should sit ____ your voice in the mix so speech stays clear.",
          answer: "under",
          accept: ["under", "below", "beneath"],
          explain: "Music belongs under the voice in the mix."
        },
        {
          type: "match",
          q: "Match the audio choice to its effect.",
          pairs: [
            ["Upbeat music", "Energetic feel"],
            ["Calm music", "Relaxed, focused feel"],
            ["No music", "Serious or intimate feel"]
          ],
          explain: "Music choice shapes the emotional tone of the video."
        },
        {
          type: "truefalse",
          q: "Using copyrighted commercial songs freely can cause claims or takedowns.",
          answer: true,
          explain: "Unlicensed music risks copyright claims; use licensed or royalty-free tracks."
        },
        {
          type: "mcq",
          q: "A common audio mistake in editing is:",
          choices: [
            "Music so loud it competes with the voice",
            "Keeping the voice clear",
            "Using licensed music",
            "Balancing the mix"
          ],
          answer: 0,
          explain: "Overpowering music buries the voice and frustrates viewers."
        }
      ]
    },
    {
      id: "l46",
      title: "Chapters & Structure in Edit",
      intro: "Chapters and clear sections help viewers navigate and signal a well-organized video.",
      questions: [
        {
          type: "mcq",
          q: "YouTube chapters let viewers:",
          choices: [
            "Jump to specific sections of the video",
            "Change your thumbnail",
            "Add tags",
            "Increase resolution"
          ],
          answer: 0,
          explain: "Chapters divide the video into labeled, jumpable sections."
        },
        {
          type: "truefalse",
          q: "Chapters are created using timestamps in the video description.",
          answer: true,
          explain: "Listing timestamps (starting at 0:00) in the description creates chapters."
        },
        {
          type: "fill",
          q: "Chapters are defined by ____ listed in the description.",
          answer: "timestamps",
          accept: ["timestamps", "timestamp"],
          explain: "Timestamps in the description generate chapters."
        },
        {
          type: "match",
          q: "Match the benefit to who it helps.",
          pairs: [
            ["Easy navigation", "Viewers find what they need"],
            ["Clear sections", "The video feels organized"],
            ["Search relevance", "Sections can surface in search"]
          ],
          explain: "Chapters help viewers, structure, and sometimes discovery."
        },
        {
          type: "truefalse",
          q: "Chapters can make a how-to video more useful and rewatchable.",
          answer: true,
          explain: "Viewers can return to the exact step they need, adding value."
        },
        {
          type: "mcq",
          q: "Chapters are most valuable for:",
          choices: [
            "Longer, multi-part or reference-style videos",
            "One-second clips",
            "Videos with no structure",
            "Audio-only content"
          ],
          answer: 0,
          explain: "Longer, sectioned videos benefit most from navigable chapters."
        }
      ]
    },
    {
      id: "l47",
      title: "Video Length",
      intro: "The right length is however long it takes to deliver value well, no filler, no rushing.",
      questions: [
        {
          type: "mcq",
          q: "The best video length is:",
          choices: [
            "As long as it needs to be to deliver value without filler",
            "Always exactly 10 minutes",
            "Always under 60 seconds",
            "As long as possible regardless of content"
          ],
          answer: 0,
          explain: "Length should serve the content, not a fixed target."
        },
        {
          type: "truefalse",
          q: "Padding a video with filler to hit a length target usually hurts retention.",
          answer: true,
          explain: "Filler drops retention; deliver value and stop."
        },
        {
          type: "fill",
          q: "A video should be long enough to deliver ____ without padding.",
          answer: "value",
          accept: ["value"],
          explain: "Length should match the value, not an arbitrary number."
        },
        {
          type: "match",
          q: "Match the situation to the length advice.",
          pairs: [
            ["Simple quick tip", "Keep it short"],
            ["Deep tutorial", "Take the time needed"],
            ["Rambling filler", "Cut it down"]
          ],
          explain: "Match length to the depth the topic genuinely requires."
        },
        {
          type: "truefalse",
          q: "A tight 6-minute video can outperform a padded 15-minute one.",
          answer: true,
          explain: "Retention and satisfaction, not raw minutes, drive performance."
        },
        {
          type: "mcq",
          q: "Deciding length should be based on:",
          choices: [
            "What the content genuinely needs",
            "A fixed rule for every video",
            "The number of tags",
            "Your upload time"
          ],
          answer: 0,
          explain: "Let the content determine the length, not a rigid rule."
        }
      ]
    },
    {
      id: "l48",
      title: "The Retention Feedback Loop",
      intro: "Use each video's retention data to improve the next, turning editing into a compounding skill.",
      questions: [
        {
          type: "order",
          q: "Order the retention improvement loop.",
          items: [
            "Publish the video",
            "Study the retention graph",
            "Identify what caused each dip",
            "Apply the fix to your next video"
          ],
          explain: "Publish, analyze, diagnose, and improve the next one."
        },
        {
          type: "mcq",
          q: "Treating retention data as feedback leads to:",
          choices: [
            "Editing and structure that steadily improve",
            "Worse videos over time",
            "More tags",
            "Higher resolution"
          ],
          answer: 0,
          explain: "Using the data closes the loop and compounds improvement."
        },
        {
          type: "truefalse",
          q: "Comparing retention across videos reveals patterns in what your audience likes.",
          answer: true,
          explain: "Cross-video patterns show which formats and pacing your audience prefers."
        },
        {
          type: "fill",
          q: "Using retention data to improve the next video creates a feedback ____.",
          answer: "loop",
          accept: ["loop"],
          explain: "This is a feedback loop that compounds over time."
        },
        {
          type: "match",
          q: "Match the retention insight to the action.",
          pairs: [
            ["Intro keeps dropping", "Rework hooks"],
            ["Mid-video sags", "Add re-engagement"],
            ["Strong finishers", "Do more of that format"]
          ],
          explain: "Each recurring pattern suggests a concrete change."
        },
        {
          type: "truefalse",
          q: "Great editors are born, not made through practice and feedback.",
          answer: false,
          explain: "Editing skill grows through deliberate practice and studying your data."
        },
        {
          type: "mcq",
          q: "The compounding payoff of the retention loop is:",
          choices: [
            "Each video becomes a little better than the last",
            "Videos get worse",
            "You never need to edit",
            "Automatic monetization"
          ],
          answer: 0,
          explain: "Consistent learning makes every video incrementally stronger."
        }
      ]
    }
  ]
});
