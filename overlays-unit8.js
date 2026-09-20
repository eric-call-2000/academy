window.ACADEMY.addUnit("overlays", {
  id: "unit-8",
  title: "Stinger Transitions & Going Live",
  color: "#2FB6FF",
  icon: "🎬",
  description: "Render stinger.html to an alpha video, set the transition point in OBS, and assemble the whole scene set.",
  lessons: [
    {
      id: "l57",
      title: "What a Stinger Is",
      intro: "A stinger is an animated clip that wipes across the screen to cover a scene change.",
      questions: [
        {
          type: "mcq",
          q: "A stinger transition is:",
          choices: [
            "An animated wipe that covers the switch between two scenes",
            "A type of alert",
            "A microphone filter",
            "A goal bar"
          ],
          answer: 0,
          explain: "It's a motion graphic that hides the cut from one scene to another."
        },
        {
          type: "truefalse",
          q: "The Wibbly stinger sweeps a base panel across with chrome edges and orbs riding along.",
          answer: true,
          explain: "A --base panel wipes across, chrome edge bands and orbs riding it, WIBBLY flashing at full cover."
        },
        {
          type: "fill",
          q: "A stinger hides the moment of the scene ____.",
          answer: "change",
          accept: ["change", "switch", "transition", "cut"],
          explain: "It covers the actual scene switch."
        },
        {
          type: "match",
          q: "Match the stinger element to its role.",
          pairs: [
            ["Base panel", "Covers the screen mid-wipe"],
            ["Chrome edges", "Leading/trailing accent bands"],
            ["WIBBLY flash", "Brand hit at full cover"]
          ],
          explain: "Panel, edges, and the wordmark flash make the wipe."
        },
        {
          type: "truefalse",
          q: "A stinger makes scene changes feel more polished than a plain cut.",
          answer: true,
          explain: "A branded wipe elevates the production over a hard cut."
        },
        {
          type: "mcq",
          q: "The stinger's default duration is about:",
          choices: [
            "750 ms",
            "10 seconds",
            "1 frame",
            "5 minutes"
          ],
          answer: 0,
          explain: "The default is 750ms (configurable with ?ms)."
        }
      ]
    },
    {
      id: "l58",
      title: "Why OBS Needs a Video",
      intro: "OBS can't use HTML as a stinger, so stinger.html is a source you render to a video with alpha.",
      questions: [
        {
          type: "mcq",
          q: "OBS's Stinger transition requires:",
          choices: [
            "A video file (not an HTML page)",
            "An HTML file directly",
            "An audio file",
            "A game capture"
          ],
          answer: 0,
          explain: "OBS consumes a video for stingers; HTML must be rendered out first."
        },
        {
          type: "truefalse",
          q: "stinger.html is the source you capture/render into a stinger video.",
          answer: true,
          explain: "You render the HTML animation to a video, then load that in OBS."
        },
        {
          type: "fill",
          q: "The stinger video must include ____ (transparency) so scenes show through the wipe.",
          answer: "alpha",
          accept: ["alpha", "transparency"],
          explain: "An alpha channel keeps the transition transparent where the panel isn't."
        },
        {
          type: "match",
          q: "Match the format to its use for the stinger.",
          pairs: [
            ["WebM (VP9) with alpha", "Web-friendly alpha video"],
            ["MOV (ProRes 4444)", "High-quality alpha video"]
          ],
          explain: "Either a VP9 webm or ProRes 4444 mov carries alpha for OBS."
        },
        {
          type: "truefalse",
          q: "A plain MP4 (no alpha) would show a solid box instead of a clean wipe.",
          answer: true,
          explain: "Without alpha there's no transparency, so the transition wouldn't reveal scenes."
        },
        {
          type: "mcq",
          q: "The ?render=1 parameter on stinger.html:",
          choices: [
            "Hides the UI and makes the background transparent for capturing",
            "Uploads to YouTube",
            "Starts recording your game",
            "Mutes the mic"
          ],
          answer: 0,
          explain: "?render=1 strips the preview UI and transparency-prepares it for capture."
        }
      ]
    },
    {
      id: "l59",
      title: "The Transition Point",
      intro: "The transition point is when OBS swaps scenes mid-wipe, while the panel fully covers the screen.",
      questions: [
        {
          type: "mcq",
          q: "The stinger's Transition Point tells OBS:",
          choices: [
            "When to swap scenes (while the screen is covered)",
            "How loud the audio is",
            "The bitrate",
            "The webcam size"
          ],
          answer: 0,
          explain: "OBS swaps scenes at the transition point, hidden behind the panel."
        },
        {
          type: "truefalse",
          q: "For the 750ms stinger, the recommended transition point is 375ms (the halfway cover).",
          answer: true,
          explain: "At ~375ms the panel fully covers the screen, so OBS swaps then."
        },
        {
          type: "fill",
          q: "The transition point is set so OBS swaps while the panel fully ____ the screen.",
          answer: "covers",
          accept: ["covers", "covering", "cover"],
          explain: "Swapping under full coverage hides the cut."
        },
        {
          type: "match",
          q: "Match the value to the default stinger.",
          pairs: [
            ["Duration", "750 ms"],
            ["Transition point", "375 ms"],
            ["Full cover window", "~330-420 ms"]
          ],
          explain: "The panel fully covers around the midpoint, where the swap happens."
        },
        {
          type: "truefalse",
          q: "If the transition point is wrong, viewers can glimpse the scene switching.",
          answer: true,
          explain: "A mistimed swap reveals the cut instead of hiding it."
        },
        {
          type: "mcq",
          q: "The transition point is configured in OBS under:",
          choices: [
            "Scene Transitions > Stinger settings",
            "Audio Mixer",
            "The webcam properties",
            "The recording path"
          ],
          answer: 0,
          explain: "You set it in the Stinger transition's settings."
        }
      ]
    },
    {
      id: "l60",
      title: "Rendering the Stinger",
      intro: "Open stinger.html?render=1, capture the animation with alpha, and export it as a webm or ProRes mov.",
      questions: [
        {
          type: "order",
          q: "Order the steps to produce the stinger video.",
          items: [
            "Open stinger.html?render=1",
            "Capture the animation with an alpha-capable recorder",
            "Export as WebM (VP9) or ProRes 4444 with alpha",
            "Load it in OBS Scene Transitions"
          ],
          explain: "Render-prep, capture with alpha, export, then load into OBS."
        },
        {
          type: "mcq",
          q: "The ?render=1 view is used because it:",
          choices: [
            "Removes UI and keeps the background transparent for a clean capture",
            "Uploads the video",
            "Adds a watermark",
            "Starts your game"
          ],
          answer: 0,
          explain: "It strips the preview controls and keeps transparency for capture."
        },
        {
          type: "truefalse",
          q: "The capture must preserve the alpha channel, not flatten it onto a background.",
          answer: true,
          explain: "Flattening would lose transparency and break the transition."
        },
        {
          type: "fill",
          q: "A web-friendly alpha export format for the stinger is ____ (VP9).",
          answer: "webm",
          accept: ["webm"],
          explain: "A VP9 webm carries alpha and works well in OBS."
        },
        {
          type: "truefalse",
          q: "The bundled stinger.webm is an example of the already-rendered transition video.",
          answer: true,
          explain: "stinger.webm is the rendered output ready to load into OBS."
        },
        {
          type: "mcq",
          q: "Rendering to video is a one-time step because:",
          choices: [
            "Once exported, OBS reuses the same file for every transition",
            "It must be re-rendered every scene change",
            "OBS renders HTML live",
            "It changes your bitrate"
          ],
          answer: 0,
          explain: "You render once, then OBS plays the file on each switch."
        }
      ]
    },
    {
      id: "l61",
      title: "Loading the Stinger in OBS",
      intro: "Add a Stinger transition in Scene Transitions, pick the video, and set the transition point.",
      questions: [
        {
          type: "order",
          q: "Order loading the stinger into OBS.",
          items: [
            "Open Scene Transitions and add a Stinger",
            "Select the rendered stinger video file",
            "Set the transition point to 375 ms",
            "Test switching between two scenes"
          ],
          explain: "Add the stinger, pick the file, set the point, then test."
        },
        {
          type: "mcq",
          q: "The stinger video is loaded in OBS under:",
          choices: [
            "Scene Transitions",
            "The Audio Mixer",
            "Sources",
            "The recording path"
          ],
          answer: 0,
          explain: "Stingers live in the Scene Transitions area."
        },
        {
          type: "truefalse",
          q: "After loading, test the stinger by switching scenes to confirm the timing.",
          answer: true,
          explain: "A quick test confirms the swap is hidden behind the panel."
        },
        {
          type: "fill",
          q: "Set the OBS transition point to ____ ms for the default 750ms stinger.",
          answer: "375",
          accept: ["375"],
          explain: "375ms matches the panel's full-cover midpoint."
        },
        {
          type: "match",
          q: "Match the setting to its value.",
          pairs: [
            ["Transition type", "Stinger"],
            ["File", "Rendered alpha video"],
            ["Transition point", "375 ms"]
          ],
          explain: "Type, file, and point define the stinger transition."
        },
        {
          type: "truefalse",
          q: "If you prefer simplicity, a cut or fade is a valid alternative to a stinger.",
          answer: true,
          explain: "Stingers are optional; cut/fade works fine if you'd rather skip it."
        }
      ]
    },
    {
      id: "l62",
      title: "Previewing the Stinger",
      intro: "stinger.html has preview modes to see the wipe over transparency and to watch it swap demo scenes.",
      questions: [
        {
          type: "match",
          q: "Match the preview URL to what it shows.",
          pairs: [
            ["stinger.html?demo=1", "Swaps SCENE A to SCENE B at the point"],
            ["stinger.html?loop=1", "Loops the wipe over transparency"],
            ["stinger.html?ms=900", "Changes the duration"]
          ],
          explain: "Demo shows the swap; loop shows the raw wipe; ms changes timing."
        },
        {
          type: "mcq",
          q: "stinger.html?demo=1 helps you:",
          choices: [
            "Confirm the scene swaps exactly under full cover",
            "Upload the file",
            "Record your game",
            "Mute audio"
          ],
          answer: 0,
          explain: "It visualizes the A->B swap at the transition point."
        },
        {
          type: "truefalse",
          q: "Changing ?ms keeps the transition point at 50% of the duration.",
          answer: true,
          explain: "The swap stays at the midpoint even when you change the duration."
        },
        {
          type: "fill",
          q: "Loop the wipe over transparency with stinger.html?____=1.",
          answer: "loop",
          accept: ["loop"],
          explain: "?loop=1 loops the animation over a transparent background."
        },
        {
          type: "truefalse",
          q: "Previewing before rendering saves you from exporting a mistimed stinger.",
          answer: true,
          explain: "Checking the timing first avoids re-rendering later."
        },
        {
          type: "mcq",
          q: "The demo scenes in the preview are labeled:",
          choices: [
            "SCENE A and SCENE B",
            "Your real gameplay",
            "The countdown",
            "The goal bar"
          ],
          answer: 0,
          explain: "Placeholder SCENE A / SCENE B show the swap clearly."
        }
      ]
    },
    {
      id: "l63",
      title: "Assembling the Whole Set",
      intro: "Put it together: standby scenes, a gameplay scene with the HUD layer, Just Chatting, and the stinger.",
      questions: [
        {
          type: "order",
          q: "Order building out the full scene set.",
          items: [
            "Standby scenes (soon / brb / over)",
            "Gameplay scene (HUD, facecam, alerts, goal bar, game)",
            "Just Chatting scene (big cam)",
            "Stinger transition between scenes"
          ],
          explain: "Standby, gameplay, Just Chatting, then the stinger tying them together."
        },
        {
          type: "mcq",
          q: "The gameplay scene layers, front to back, are:",
          choices: [
            "HUD > facecam > alerts > goal bar > game",
            "Game > everything else",
            "Only the webcam",
            "Only the game"
          ],
          answer: 0,
          explain: "Overlays stack in front of the game in that order."
        },
        {
          type: "truefalse",
          q: "Every overlay in the set shares the same tokens, so the whole stream looks unified.",
          answer: true,
          explain: "Shared colors, fonts, and the orb tie the set together."
        },
        {
          type: "fill",
          q: "The three standby scenes all use the same ____.html file with different states.",
          answer: "standby",
          accept: ["standby"],
          explain: "One standby.html serves all three standby scenes."
        },
        {
          type: "match",
          q: "Match the scene to its key overlay.",
          pairs: [
            ["Starting Soon", "standby.html?state=soon"],
            ["Gameplay", "overlay.html + alerts + goalbar"],
            ["Just Chatting", "overlay.html?cam=big"]
          ],
          explain: "Each scene loads the overlays it needs."
        },
        {
          type: "truefalse",
          q: "Reusing sources across scenes keeps the set consistent and easy to update.",
          answer: true,
          explain: "Shared sources mean one change updates every scene."
        }
      ]
    },
    {
      id: "l64",
      title: "Going Live & Iterating",
      intro: "Do a full test pass, check the keep-clear zones on the real platform, then refine over time.",
      questions: [
        {
          type: "order",
          q: "Order a pre-live checklist for your overlays.",
          items: [
            "Preview each overlay in a browser",
            "Wire them into the OBS scene set",
            "Do a private test stream/recording",
            "Check keep-clear zones on the real player"
          ],
          explain: "Preview, wire, test privately, then verify against the live player."
        },
        {
          type: "mcq",
          q: "A private test before going public helps you:",
          choices: [
            "Catch layout and timing issues where they don't matter",
            "Increase your bitrate",
            "Skip previewing",
            "Avoid ever streaming"
          ],
          answer: 0,
          explain: "A private run surfaces problems without a live audience seeing them."
        },
        {
          type: "truefalse",
          q: "You should confirm no persistent element sits under YouTube's live player UI.",
          answer: true,
          explain: "Check the real player so nothing important is covered by its controls."
        },
        {
          type: "fill",
          q: "After going live, keep ____ your overlays based on what works.",
          answer: "refining",
          accept: ["refining", "improving", "iterating"],
          explain: "Overlays improve through iteration like everything else."
        },
        {
          type: "match",
          q: "Match the check to what it protects.",
          pairs: [
            ["Browser preview", "Each overlay looks right"],
            ["Private test", "The whole set works together"],
            ["Keep-clear check", "Nothing hidden by the player"]
          ],
          explain: "Each check guards a different part of a clean live setup."
        },
        {
          type: "truefalse",
          q: "A polished overlay set is set once and can still be improved as your channel grows.",
          answer: true,
          explain: "Overlays evolve with your brand and what your audience responds to."
        }
      ]
    }
  ]
});
