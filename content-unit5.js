window.ACADEMY.addUnit("content", {
  id: "unit-5",
  title: "Scripting & Hooks",
  color: "#ff0033",
  icon: "✍️",
  description: "Win the first 30 seconds and structure the whole video so viewers keep watching.",
  lessons: [
    {
      id: "l33",
      title: "The First 30 Seconds",
      intro: "The opening is the highest-stakes moment; most viewers who leave, leave early.",
      questions: [
        {
          type: "mcq",
          q: "The opening seconds of a video are critical because:",
          choices: [
            "Many viewers decide within them whether to keep watching",
            "YouTube ranks the video in search mostly by its intro",
            "They are the part of the video that earns the most ads",
            "They decide which frame YouTube uses as the thumbnail"
          ],
          answer: 0,
          explain: "The intro is where the most viewers are won or lost."
        },
        {
          type: "truefalse",
          q: "A long, slow intro before getting to the point often loses viewers.",
          answer: true,
          explain: "Dragging intros cause early drop-off; get to value quickly."
        },
        {
          type: "fill",
          q: "The compelling opening that keeps viewers watching is called the ____.",
          answer: "hook",
          accept: ["hook"],
          explain: "The opening that grabs attention is the hook."
        },
        {
          type: "match",
          q: "Match the intro choice to its effect.",
          pairs: [
            ["Get to the point fast", "Holds viewers"],
            ["Long branded intro animation", "Risks early drop-off"],
            ["Tease the payoff", "Builds anticipation"]
          ],
          explain: "Speed and a clear tease keep viewers; slow intros lose them."
        },
        {
          type: "truefalse",
          q: "Confirming the video is about what the viewer clicked for is important early on.",
          answer: true,
          explain: "Quickly affirming the promise reassures the viewer they are in the right place."
        },
        {
          type: "mcq",
          q: "A strong hook usually does NOT:",
          choices: [
            "Waste 30 seconds before hinting at any value",
            "Confirm the topic the title promised",
            "Create curiosity about what comes next in the video",
            "Promise a clear payoff for watching on"
          ],
          answer: 0,
          explain: "Delaying value is the opposite of a strong hook."
        }
      ]
    },
    {
      id: "l34",
      title: "Anatomy of a Hook",
      intro: "Good hooks confirm the promise, raise a question, and hint at the payoff worth staying for.",
      questions: [
        {
          type: "match",
          q: "Match each hook ingredient to its job.",
          pairs: [
            ["Confirm the promise", "You are in the right place"],
            ["Raise a question", "Creates an open loop"],
            ["Tease the payoff", "A reason to stay"]
          ],
          explain: "Confirm, question, and tease together form a strong hook."
        },
        {
          type: "mcq",
          q: "An 'open loop' in a hook is:",
          choices: [
            "A question or promise resolved later in the video",
            "A clip at the end that links back to the first video",
            "A recap of the main points before the video ends",
            "A cut that jumps between two unrelated scenes"
          ],
          answer: 0,
          explain: "An open loop creates tension that keeps viewers watching for the answer."
        },
        {
          type: "truefalse",
          q: "Teasing what viewers will gain by the end gives them a reason to keep watching.",
          answer: true,
          explain: "A clear payoff to anticipate reduces early drop-off."
        },
        {
          type: "fill",
          q: "An unresolved question that keeps viewers watching is an open ____.",
          answer: "loop",
          accept: ["loop"],
          explain: "This tension device is an open loop."
        },
        {
          type: "truefalse",
          q: "Every hook must be exactly the same formula regardless of the video.",
          answer: false,
          explain: "Hooks vary by content; the ingredients are guidelines, not a rigid script."
        },
        {
          type: "mcq",
          q: "A hook that raises curiosity but is never paid off will:",
          choices: [
            "Frustrate viewers and hurt trust",
            "Keep viewers hooked for the next video",
            "Raise retention, since tension keeps people",
            "Have no effect as long as the title is good"
          ],
          answer: 0,
          explain: "Unpaid promises break trust, just like clickbait titles do."
        }
      ]
    },
    {
      id: "l35",
      title: "Scripting vs. Improv",
      intro: "Scripting gives tight, clear videos; improv feels natural. Many creators blend the two.",
      questions: [
        {
          type: "match",
          q: "Match the approach to its strength.",
          pairs: [
            ["Full script", "Tight, clear, efficient"],
            ["Bullet outline", "Structured but natural"],
            ["Pure improv", "Spontaneous and personal"]
          ],
          explain: "Scripts are tight, outlines balance, and improv feels natural."
        },
        {
          type: "mcq",
          q: "A common downside of pure improv is:",
          choices: [
            "Rambling and losing the viewer's attention",
            "Sounding stiff and robotic on camera",
            "Taking far too long to write beforehand",
            "Being so concise that key points get skipped"
          ],
          answer: 0,
          explain: "Without structure, improv can wander and lose viewers."
        },
        {
          type: "truefalse",
          q: "Even loosely scripted videos usually benefit from a planned structure.",
          answer: true,
          explain: "A plan keeps even natural-sounding videos focused."
        },
        {
          type: "fill",
          q: "A middle path between full script and improv is working from a bullet ____.",
          answer: "outline",
          accept: ["outline"],
          explain: "An outline gives structure while keeping delivery natural."
        },
        {
          type: "truefalse",
          q: "Reading a script woodenly can feel less engaging than a natural delivery.",
          answer: true,
          explain: "A stiff read hurts connection; aim for natural delivery even when scripted."
        },
        {
          type: "mcq",
          q: "The best approach for you is usually the one that:",
          choices: [
            "Keeps the video clear while sounding natural",
            "Uses a full word-for-word script every time",
            "Skips planning so the delivery stays fresh",
            "Copies the method of the biggest creator in your niche"
          ],
          answer: 0,
          explain: "Clarity plus natural delivery matters more than the exact method."
        }
      ]
    },
    {
      id: "l36",
      title: "Structuring the Video",
      intro: "A clear structure guides the viewer from hook to payoff without confusion or dead spots.",
      questions: [
        {
          type: "order",
          q: "Order a common video structure.",
          items: [
            "Hook",
            "Set up the problem or promise",
            "Deliver the main content",
            "Payoff and call to action"
          ],
          explain: "Hook, setup, content, payoff is a reliable spine."
        },
        {
          type: "mcq",
          q: "A clear structure helps viewers by:",
          choices: [
            "Making the video easy to follow with no dead spots",
            "Letting you include every point you can think of",
            "Making the video longer, which raises watch time",
            "Helping YouTube pick the best thumbnail frame for you"
          ],
          answer: 0,
          explain: "Structure keeps the viewer oriented and engaged throughout."
        },
        {
          type: "truefalse",
          q: "Signposting ('first, next, finally') helps viewers follow a longer video.",
          answer: true,
          explain: "Signposts orient viewers and reduce confusion in longer content."
        },
        {
          type: "fill",
          q: "The compelling resolution the video builds toward is the ____.",
          answer: "payoff",
          accept: ["payoff"],
          explain: "The payoff is the satisfying resolution."
        },
        {
          type: "match",
          q: "Match the section to its job.",
          pairs: [
            ["Hook", "Win attention"],
            ["Body", "Deliver value"],
            ["Payoff", "Satisfy the promise"]
          ],
          explain: "Each section has a clear role in holding the viewer."
        },
        {
          type: "truefalse",
          q: "A video with no structure tends to keep viewers just as well as a structured one.",
          answer: false,
          explain: "Structureless videos wander and lose viewers faster."
        },
        {
          type: "mcq",
          q: "Removing a slow, low-value middle section usually:",
          choices: [
            "Improves retention",
            "Hurts retention, since the video gets shorter",
            "Lowers your click-through rate",
            "Has no effect if the hook is strong"
          ],
          answer: 0,
          explain: "Cutting dead weight keeps the video tight and retention high."
        }
      ]
    },
    {
      id: "l37",
      title: "Pacing & Energy",
      intro: "Good pacing keeps momentum: cut the boring parts and keep your energy up.",
      questions: [
        {
          type: "mcq",
          q: "Good pacing mostly means:",
          choices: [
            "Keeping momentum by trimming slow, low-value moments",
            "Talking as fast as you can so viewers never get bored",
            "Cutting to a new shot every second, whatever is said",
            "Making every video as long as possible for watch time"
          ],
          answer: 0,
          explain: "Momentum comes from cutting the dull bits and keeping things moving."
        },
        {
          type: "truefalse",
          q: "Your on-camera energy tends to come across a little lower on video than it felt.",
          answer: true,
          explain: "Cameras flatten energy, so many creators dial theirs up slightly."
        },
        {
          type: "fill",
          q: "Cutting dead air and filler keeps a video's ____ strong.",
          answer: "pacing",
          accept: ["pacing", "pace"],
          explain: "Trimming filler maintains good pacing."
        },
        {
          type: "match",
          q: "Match the pacing tool to its effect.",
          pairs: [
            ["Tight cuts", "Removes dead time"],
            ["Varied delivery", "Prevents monotony"],
            ["Clear momentum", "Keeps viewers watching"]
          ],
          explain: "Cuts, variety, and momentum together drive pacing."
        },
        {
          type: "truefalse",
          q: "Long, unbroken monotone segments can cause viewers to drop off.",
          answer: true,
          explain: "Monotony loses attention; vary energy and cut aggressively."
        },
        {
          type: "mcq",
          q: "A simple pacing fix in editing is to:",
          choices: [
            "Cut out pauses, rambles, and repeated points",
            "Speed up the whole video by about 25 percent",
            "Add background music under every single scene",
            "Add a recap after every section of the video"
          ],
          answer: 0,
          explain: "Trimming filler is the most direct way to improve pace."
        }
      ]
    },
    {
      id: "l38",
      title: "Storytelling",
      intro: "Even informational videos hold attention better when framed as a story with tension and resolution.",
      questions: [
        {
          type: "mcq",
          q: "Framing content as a story helps because:",
          choices: [
            "Tension and resolution keep viewers emotionally engaged",
            "A story lets you skip a hook, since viewers wait for the plot",
            "YouTube recommends videos labeled as stories more often",
            "Stories can stay unfinished, so viewers come back for more"
          ],
          answer: 0,
          explain: "Stories create tension the viewer wants resolved, driving watch time."
        },
        {
          type: "truefalse",
          q: "Even a tutorial can be framed with a problem, a journey, and a resolution.",
          answer: true,
          explain: "Story structure works for informational content, not just narratives."
        },
        {
          type: "fill",
          q: "Stories hold attention through tension and a satisfying ____.",
          answer: "resolution",
          accept: ["resolution", "payoff"],
          explain: "Resolution rewards the tension a story builds."
        },
        {
          type: "match",
          q: "Match the story element to its role.",
          pairs: [
            ["Problem", "Creates tension"],
            ["Journey", "Sustains interest"],
            ["Resolution", "Delivers satisfaction"]
          ],
          explain: "Problem, journey, and resolution form a simple story arc."
        },
        {
          type: "truefalse",
          q: "Personal stakes or a relatable struggle can make content more engaging.",
          answer: true,
          explain: "Stakes and relatability pull viewers into the content emotionally."
        },
        {
          type: "mcq",
          q: "A story-driven video tends to have better:",
          choices: [
            "Retention, because viewers want to see how it ends",
            "Search ranking, because stories use more keywords",
            "Click-through rate, because stories need no thumbnail",
            "Upload speed, because stories need almost no editing"
          ],
          answer: 0,
          explain: "The desire for resolution keeps viewers watching to the end."
        }
      ]
    },
    {
      id: "l39",
      title: "Re-Engaging Mid-Video",
      intro: "Attention dips in the middle; new hooks, visuals, and open loops pull viewers back.",
      questions: [
        {
          type: "mcq",
          q: "To fight mid-video drop-off, you can:",
          choices: [
            "Add mini-hooks, visuals, or new open loops",
            "Repeat the intro hook word for word in the middle",
            "Move the best content to the very end of the video",
            "Slow the pace so viewers can catch up and settle in"
          ],
          answer: 0,
          explain: "Fresh hooks and visuals re-capture attention that drifts mid-video."
        },
        {
          type: "truefalse",
          q: "Teasing something still to come keeps viewers watching through the middle.",
          answer: true,
          explain: "A promise of value ahead pulls viewers past mid-video dips."
        },
        {
          type: "fill",
          q: "Small hooks placed throughout to re-grab attention are sometimes called mini-____.",
          answer: "hooks",
          accept: ["hooks", "hook"],
          explain: "These are mini-hooks that re-engage viewers."
        },
        {
          type: "match",
          q: "Match the technique to its purpose.",
          pairs: [
            ["Open a new loop", "Create fresh curiosity"],
            ["Change visuals/b-roll", "Break monotony"],
            ["Tease what is next", "Give a reason to stay"]
          ],
          explain: "Loops, visual changes, and teases all re-engage viewers."
        },
        {
          type: "truefalse",
          q: "A pattern interrupt is a deliberate change that snaps attention back.",
          answer: true,
          explain: "Pattern interrupts (a cut, a visual, a shift in tone) refresh attention."
        },
        {
          type: "mcq",
          q: "Where re-engagement techniques matter most is:",
          choices: [
            "The middle, where attention commonly dips",
            "The first seconds, before the hook lands",
            "The last seconds, before the end screen",
            "The thumbnail, before anyone has clicked"
          ],
          answer: 0,
          explain: "The mid-video sag is where re-engagement pays off most."
        }
      ]
    },
    {
      id: "l40",
      title: "Ending & Call to Action",
      intro: "A strong ending pays off the promise and points the viewer to a clear next step.",
      questions: [
        {
          type: "mcq",
          q: "A good video ending should:",
          choices: [
            "Pay off the promise and suggest a clear next action",
            "Recap every point in the video so nothing is forgotten",
            "End abruptly so viewers are left wanting much more",
            "List several calls to action so viewers can choose one"
          ],
          answer: 0,
          explain: "Deliver the payoff, then guide the viewer to what to do or watch next."
        },
        {
          type: "truefalse",
          q: "Pointing viewers to a relevant next video can extend their session.",
          answer: true,
          explain: "A strong next-watch suggestion keeps viewers on YouTube and helps you."
        },
        {
          type: "fill",
          q: "A prompt telling viewers what to do next is a call to ____.",
          answer: "action",
          accept: ["action"],
          explain: "This prompt is a call to action (CTA)."
        },
        {
          type: "match",
          q: "Match the ending element to its purpose.",
          pairs: [
            ["Payoff", "Satisfies the promise"],
            ["Next-video suggestion", "Extends the session"],
            ["Single clear CTA", "Tells viewers what to do"]
          ],
          explain: "Payoff, a next watch, and one clear CTA make a strong ending."
        },
        {
          type: "truefalse",
          q: "Stacking many different calls to action at the end usually works better than one.",
          answer: false,
          explain: "Too many asks dilute action; one clear CTA is more effective."
        },
        {
          type: "mcq",
          q: "A weak ending often:",
          choices: [
            "Fizzles out with no payoff or direction",
            "Delivers the value the title promised",
            "Suggests a strong next video to watch",
            "Ends on one clear call to action"
          ],
          answer: 0,
          explain: "Endings that fizzle waste the momentum you built."
        },
        {
          type: "truefalse",
          q: "The end screen is a good place to guide viewers to another video or to subscribe.",
          answer: true,
          explain: "End screens turn a finished view into more watch time or a subscriber."
        }
      ]
    }
  ]
});
