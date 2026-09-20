window.ACADEMY.addUnit("overlays", {
  id: "unit-7",
  title: "Goal Bars & Progress",
  color: "#2FB6FF",
  icon: "📊",
  description: "Build goalbar.html: a solid-accent progress bar that animates its fill and flips to yellow at 100%.",
  lessons: [
    {
      id: "l49",
      title: "What a Goal Bar Shows",
      intro: "A goal bar visualizes progress toward a target, like subs or donations, as a filling bar.",
      questions: [
        {
          type: "mcq",
          q: "A goal bar displays:",
          choices: [
            "Progress toward a target (e.g. 142 / 200 subs)",
            "The full game",
            "A follower toast",
            "The countdown"
          ],
          answer: 0,
          explain: "It shows a value out of a max as a filling bar with a count."
        },
        {
          type: "truefalse",
          q: "goalbar.html shows a label, a count, and a track with a fill.",
          answer: true,
          explain: "It renders a label, a value/max count, and the progress track."
        },
        {
          type: "fill",
          q: "A goal bar shows a value out of a ____.",
          answer: "max",
          accept: ["max", "maximum", "target"],
          explain: "Progress is value relative to the max/target."
        },
        {
          type: "match",
          q: "Match the goal-bar part to its content.",
          pairs: [
            ["Label", "SUB GOAL"],
            ["Count", "142 / 200"],
            ["Fill", "The colored progress"]
          ],
          explain: "Label, count, and fill make up the bar."
        },
        {
          type: "truefalse",
          q: "A goal bar is a transparent overlay layered over the scene.",
          answer: true,
          explain: "goalbar.html uses a transparent page background."
        },
        {
          type: "mcq",
          q: "A goal bar motivates viewers by:",
          choices: [
            "Making shared progress toward a target visible",
            "Encoding the video",
            "Muting the mic",
            "Replacing the webcam"
          ],
          answer: 0,
          explain: "Visible progress encourages viewers to help reach the goal."
        }
      ]
    },
    {
      id: "l50",
      title: "Why Solid, Not Chrome",
      intro: "The wide fill is solid Electric Blue with a pink offset and glow; chrome is avoided because it reads muddy.",
      questions: [
        {
          type: "mcq",
          q: "The goal-bar fill uses:",
          choices: [
            "Solid Electric Blue (not the chrome gradient)",
            "The chrome gradient across the whole fill",
            "A rainbow gradient",
            "A photo"
          ],
          answer: 0,
          explain: "A wide chrome fill looks muddy, so the bar uses solid accent blue."
        },
        {
          type: "truefalse",
          q: "The brand rule is that chrome is for the mark, not big flat fills.",
          answer: true,
          explain: "Chrome suits small marks; a wide bar would read muddy, which is forbidden."
        },
        {
          type: "fill",
          q: "The fill still carries a pink ____ shadow and a blue glow, echoing the brand.",
          answer: "offset",
          accept: ["offset"],
          explain: "A pink drop-shadow offset plus a blue glow keep it on-brand."
        },
        {
          type: "match",
          q: "Match the element to its treatment.",
          pairs: [
            ["Fill", "Solid electric blue"],
            ["Offset", "Pink drop-shadow"],
            ["Glow", "Blue outer shadow"]
          ],
          explain: "Solid fill with offset and glow keeps it branded but clean."
        },
        {
          type: "truefalse",
          q: "Using the chrome gradient across the whole bar would follow the brand rules.",
          answer: false,
          explain: "It would read muddy and break the 'chrome only for the mark' rule."
        },
        {
          type: "mcq",
          q: "The track (behind the fill) is:",
          choices: [
            "The base color with a hairline border",
            "Bright white",
            "A game capture",
            "Transparent nothing"
          ],
          answer: 0,
          explain: "The track is a dark base pill with a subtle hairline border."
        }
      ]
    },
    {
      id: "l51",
      title: "Setting Value, Max & Label",
      intro: "URL parameters set the label, current value, and maximum; the bar computes the percentage.",
      questions: [
        {
          type: "match",
          q: "Match the parameter to what it sets.",
          pairs: [
            ["?label=SUB GOAL", "The bar's title"],
            ["?value=142", "Current progress"],
            ["?max=200", "The target"]
          ],
          explain: "Label, value, and max drive the bar's display."
        },
        {
          type: "mcq",
          q: "goalbar.html?label=SUB GOAL&value=142&max=200 shows:",
          choices: [
            "A sub goal at 142 of 200 (71%)",
            "A follower alert",
            "The countdown",
            "The webcam"
          ],
          answer: 0,
          explain: "It fills to 142/200, which is 71%."
        },
        {
          type: "truefalse",
          q: "The percentage is computed from value divided by max.",
          answer: true,
          explain: "pct = value / max, clamped to 100%."
        },
        {
          type: "fill",
          q: "The current progress number is set with ?____=.",
          answer: "value",
          accept: ["value"],
          explain: "?value= sets the current progress."
        },
        {
          type: "match",
          q: "Match the input to the count shown.",
          pairs: [
            ["value=0, max=200", "0 / 200"],
            ["value=200, max=200", "200 / 200"],
            ["value=50, max=100", "50 / 100"]
          ],
          explain: "The count reflects value / max directly."
        },
        {
          type: "truefalse",
          q: "Max is clamped to at least 1 to avoid dividing by zero.",
          answer: true,
          explain: "The code uses Math.max(1, max) so the math is safe."
        }
      ]
    },
    {
      id: "l52",
      title: "Animating the Fill",
      intro: "The fill starts at 0 and animates to the target width, giving a satisfying grow effect.",
      questions: [
        {
          type: "mcq",
          q: "When the goal updates, the fill:",
          choices: [
            "Animates smoothly from 0 to the new width",
            "Jumps instantly with no motion",
            "Disappears",
            "Turns into a video"
          ],
          answer: 0,
          explain: "A CSS width transition animates the fill to its target."
        },
        {
          type: "truefalse",
          q: "The fill's width transition is defined in CSS with an easing curve.",
          answer: true,
          explain: "A transition on width with a cubic-bezier drives the grow."
        },
        {
          type: "fill",
          q: "The bar sets width to 0 then to the target after a brief ____ so the animation runs.",
          answer: "delay",
          accept: ["delay", "timeout", "reflow"],
          explain: "A short setTimeout after reflow makes the transition animate reliably."
        },
        {
          type: "match",
          q: "Match the step to the animation.",
          pairs: [
            ["Start at 0%", "Reset the fill"],
            ["Set to target %", "Triggers the grow"],
            ["CSS transition", "Smooths the motion"]
          ],
          explain: "Reset to 0, set the target, and let CSS animate between."
        },
        {
          type: "truefalse",
          q: "Animating the fill makes progress updates feel more rewarding.",
          answer: true,
          explain: "The grow effect adds a small hit of satisfaction on each update."
        },
        {
          type: "mcq",
          q: "wibblyGoal({label, value, max}) is used to:",
          choices: [
            "Update the bar and animate the fill live",
            "Start recording",
            "Change your bitrate",
            "Mute the mic"
          ],
          answer: 0,
          explain: "The API updates the numbers and animates to the new fill."
        }
      ]
    },
    {
      id: "l53",
      title: "The 100% Celebration",
      intro: "When the goal is met, the fill, label, and count flip to Signal Yellow to signal 'GOAL!'.",
      questions: [
        {
          type: "mcq",
          q: "At 100%, the goal bar:",
          choices: [
            "Turns yellow to celebrate reaching the goal",
            "Disappears",
            "Turns red as an error",
            "Resets to zero"
          ],
          answer: 0,
          explain: "Reaching the max flips the colors to Signal Yellow."
        },
        {
          type: "truefalse",
          q: "The 'done' state is applied when value is greater than or equal to max.",
          answer: true,
          explain: "The code toggles a 'done' class when value >= max."
        },
        {
          type: "fill",
          q: "At 100%, the fill and count switch to Signal ____.",
          answer: "yellow",
          accept: ["yellow"],
          explain: "The completed state uses yellow."
        },
        {
          type: "match",
          q: "Match the state to its color.",
          pairs: [
            ["In progress", "Electric blue fill"],
            ["Goal met", "Signal yellow fill"]
          ],
          explain: "Blue while filling, yellow when complete."
        },
        {
          type: "truefalse",
          q: "The color flip gives instant visual feedback that the goal was reached.",
          answer: true,
          explain: "A clear color change celebrates hitting the target."
        },
        {
          type: "mcq",
          q: "The 'done' state changes:",
          choices: [
            "The fill, the label, and the count colors",
            "Only your bitrate",
            "The webcam",
            "The game"
          ],
          answer: 0,
          explain: "Fill, label, and count all switch to the celebration color."
        }
      ]
    },
    {
      id: "l54",
      title: "Placement & the HUD Pairing",
      intro: "The goal bar defaults to top-left, mirroring the HUD bug, and can move via ?pos.",
      questions: [
        {
          type: "match",
          q: "Match the pos value to the bar's spot.",
          pairs: [
            ["tl", "Top-left (default)"],
            ["bl", "Bottom-left"],
            ["bc", "Bottom-center"]
          ],
          explain: "?pos sets the goal bar's anchor."
        },
        {
          type: "mcq",
          q: "The goal bar's default top-left position is chosen to:",
          choices: [
            "Mirror the HUD bug for a balanced layout",
            "Cover the webcam",
            "Sit over YouTube's controls",
            "Hide off-screen"
          ],
          answer: 0,
          explain: "Top-left mirrors the HUD for balance."
        },
        {
          type: "truefalse",
          q: "You'd avoid bottom-right on YouTube Live because of the player controls.",
          answer: true,
          explain: "The bottom-right keep-clear zone holds YouTube's controls."
        },
        {
          type: "fill",
          q: "Move the goal bar to the bottom-left with goalbar.html?pos=____.",
          answer: "bl",
          accept: ["bl"],
          explain: "?pos=bl anchors it bottom-left."
        },
        {
          type: "match",
          q: "Match the persistent HUD element to its default corner.",
          pairs: [
            ["Goal bar", "Top-left"],
            ["HUD brand bug", "Top-right"],
            ["Facecam", "Bottom-left"]
          ],
          explain: "Spreading persistent elements across corners keeps balance."
        },
        {
          type: "truefalse",
          q: "The goal bar and HUD bug are both persistent, always-on elements.",
          answer: true,
          explain: "Both stay on screen during gameplay as part of the HUD layer."
        }
      ]
    },
    {
      id: "l55",
      title: "Updating the Goal Live",
      intro: "Call wibblyGoal from a bot or timer to bump the value as new subs or donations come in.",
      questions: [
        {
          type: "mcq",
          q: "To bump the goal live, you call:",
          choices: [
            "wibblyGoal({ label:'SUB GOAL', value:143, max:200 })",
            "startRecording()",
            "setResolution('4k')",
            "muteMic()"
          ],
          answer: 0,
          explain: "wibblyGoal updates the numbers and animates the new fill."
        },
        {
          type: "truefalse",
          q: "Calling wibblyGoal with a higher value animates the bar up to the new level.",
          answer: true,
          explain: "Each call re-animates the fill toward the new value."
        },
        {
          type: "fill",
          q: "External tools update the bar by calling the global wibbly____ function.",
          answer: "goal",
          accept: ["goal"],
          explain: "wibblyGoal(...) is the update API."
        },
        {
          type: "match",
          q: "Match the source to how it might update the goal.",
          pairs: [
            ["Chat bot", "Calls wibblyGoal on each new sub"],
            ["Manual", "You edit the URL value"],
            ["Timer/script", "Polls a service and updates"]
          ],
          explain: "The bar can be driven manually or by automation."
        },
        {
          type: "truefalse",
          q: "You can also just reload the source with a new ?value to update it manually.",
          answer: true,
          explain: "Reloading with a new value param sets the bar without any bot."
        },
        {
          type: "mcq",
          q: "Live updates keep the goal bar:",
          choices: [
            "Accurate and motivating in real time",
            "Encoding the video",
            "Muted",
            "Hidden"
          ],
          answer: 0,
          explain: "Real-time updates make the goal feel live and worth chasing."
        }
      ]
    },
    {
      id: "l56",
      title: "Wiring the Goal Bar into OBS",
      intro: "Add goalbar.html as a full-canvas Browser Source in the HUD layer, set the goal, and update it live.",
      questions: [
        {
          type: "order",
          q: "Order setting up the goal bar.",
          items: [
            "Add goalbar.html as a full-canvas Browser Source",
            "Set ?label, ?value, ?max, and ?pos",
            "Layer it with the HUD elements",
            "Update it live via wibblyGoal or a new URL"
          ],
          explain: "Add, configure, layer, then update live."
        },
        {
          type: "mcq",
          q: "The goal bar Browser Source should be sized to:",
          choices: [
            "Full canvas (the page positions the bar)",
            "The bar's exact pixels",
            "1x1",
            "The webcam size"
          ],
          answer: 0,
          explain: "The page anchors the bar within 1920x1080, so size the source to match."
        },
        {
          type: "truefalse",
          q: "The goal bar sits with the other persistent HUD elements over gameplay.",
          answer: true,
          explain: "It's a persistent overlay in the HUD layer."
        },
        {
          type: "fill",
          q: "Set the target with ?____ when you load the bar.",
          answer: "max",
          accept: ["max"],
          explain: "?max sets the goal target."
        },
        {
          type: "match",
          q: "Match the task to the parameter or call.",
          pairs: [
            ["Set the target", "?max="],
            ["Set current progress", "?value="],
            ["Update live", "wibblyGoal(...)"]
          ],
          explain: "Params set it up; the API updates it live."
        },
        {
          type: "truefalse",
          q: "Previewing goalbar.html?demo=1 in a browser confirms it before going live.",
          answer: true,
          explain: "Demo mode adds a stand-in background so you can check the bar."
        }
      ]
    }
  ]
});
