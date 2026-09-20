window.ACADEMY.addUnit("overlays", {
  id: "unit-5",
  title: "Lower Thirds",
  color: "#2FB6FF",
  icon: "🏷️",
  description: "Build lowerthird.html: a sliding name/topic bar with a chrome edge, yellow tick, and a simple API.",
  lessons: [
    {
      id: "l33",
      title: "What a Lower Third Does",
      intro: "A lower third is a small bar near the bottom that labels who's on screen or the current topic.",
      questions: [
        {
          type: "mcq",
          q: "A lower third typically shows:",
          choices: [
            "A name/topic on line one and a role/handle on line two",
            "The full game",
            "A follower alert",
            "The countdown"
          ],
          answer: 0,
          explain: "lowerthird.html shows a title line and a smaller role/handle line."
        },
        {
          type: "truefalse",
          q: "A lower third sits low so it doesn't block the main content.",
          answer: true,
          explain: "It anchors near the bottom, out of the way of the action."
        },
        {
          type: "fill",
          q: "Line one of the lower third is usually the name or ____.",
          answer: "topic",
          accept: ["topic"],
          explain: "Line one carries the name or current topic."
        },
        {
          type: "match",
          q: "Match the lower-third line to its content.",
          pairs: [
            ["Line 1", "POV: RANKED GRIND"],
            ["Line 2", "WIBBLY · VARIETY GAMING"]
          ],
          explain: "Line 1 is the headline; line 2 is the role/handle."
        },
        {
          type: "truefalse",
          q: "Lower thirds are transparent overlays so gameplay shows around them.",
          answer: true,
          explain: "lowerthird.html uses a transparent page background."
        },
        {
          type: "mcq",
          q: "A good use of a lower third is:",
          choices: [
            "Introducing yourself or labeling the current segment",
            "Encoding the video",
            "Replacing the webcam",
            "Muting the mic"
          ],
          answer: 0,
          explain: "It identifies the person or segment briefly and clearly."
        }
      ]
    },
    {
      id: "l34",
      title: "The Bar Design",
      intro: "The bar is a solid base panel with a 6px chrome left edge, a pink offset shadow, and an optional yellow tick.",
      questions: [
        {
          type: "mcq",
          q: "The left edge of the lower third is:",
          choices: [
            "A 6px chrome-gradient bar",
            "A thick red border",
            "A photo",
            "Nothing"
          ],
          answer: 0,
          explain: "A slim chrome vertical bar marks the panel's leading edge."
        },
        {
          type: "truefalse",
          q: "The panel casts a hot-pink offset shadow, echoing the brand's offset look.",
          answer: true,
          explain: "A pink box-shadow offset gives the signature depth."
        },
        {
          type: "fill",
          q: "The optional small yellow square at the leading edge is called the ____.",
          answer: "tick",
          accept: ["tick"],
          explain: "The yellow tick square adds emphasis at the front."
        },
        {
          type: "match",
          q: "Match the bar element to its style.",
          pairs: [
            ["Panel", "Solid base color"],
            ["Left edge", "6px chrome bar"],
            ["Tick", "Yellow square"]
          ],
          explain: "Base panel, chrome edge, and a yellow tick make the bar."
        },
        {
          type: "truefalse",
          q: "You can hide the yellow tick with lowerthird.html?tick=0.",
          answer: true,
          explain: "?tick=0 removes the tick square."
        },
        {
          type: "mcq",
          q: "Line one uses Barlow Condensed and line two uses:",
          choices: [
            "IBM Plex Mono",
            "Comic Sans",
            "Times New Roman",
            "An image"
          ],
          answer: 0,
          explain: "The role/handle line is set in IBM Plex Mono for contrast."
        }
      ]
    },
    {
      id: "l35",
      title: "Slide-In Animation",
      intro: "The bar slides in from the left with a short CSS animation, can hold, and can slide back out.",
      questions: [
        {
          type: "mcq",
          q: "The lower third enters by:",
          choices: [
            "Sliding in from the left",
            "Dropping from the top",
            "Spinning in place",
            "Appearing instantly with no motion"
          ],
          answer: 0,
          explain: "It animates in from the left (translateX) with a fade."
        },
        {
          type: "truefalse",
          q: "The slide-in is a CSS keyframe animation, not a video.",
          answer: true,
          explain: "An ltIn keyframe handles the entrance in pure CSS."
        },
        {
          type: "fill",
          q: "By default the lower third stays until told to ____.",
          answer: "hide",
          accept: ["hide"],
          explain: "It holds on screen until hidden (or auto-hidden)."
        },
        {
          type: "match",
          q: "Match the class to its motion.",
          pairs: [
            ["in", "Slides on screen"],
            ["out", "Slides off screen"]
          ],
          explain: "Toggling the in/out classes drives the animation."
        },
        {
          type: "truefalse",
          q: "The animation re-triggers by removing and re-adding the class after a reflow.",
          answer: true,
          explain: "A void offsetWidth reflow lets the same animation replay."
        },
        {
          type: "mcq",
          q: "A subtle, quick slide is preferred over a long flashy one because it:",
          choices: [
            "Delivers the info without distracting from the stream",
            "Uses less internet",
            "Improves the webcam",
            "Raises the frame rate"
          ],
          answer: 0,
          explain: "Short, tasteful motion informs without stealing focus."
        }
      ]
    },
    {
      id: "l36",
      title: "Setting the Content",
      intro: "Pass name and role via URL parameters, or set them live with the JavaScript API.",
      questions: [
        {
          type: "mcq",
          q: "To set the lower third's text via URL, you use:",
          choices: [
            "?name=... and ?role=...",
            "?bitrate=...",
            "?resolution=...",
            "?mic=..."
          ],
          answer: 0,
          explain: "?name and ?role fill the two lines at load."
        },
        {
          type: "truefalse",
          q: "wibblyLowerThird({name, role}) updates the text and shows the bar.",
          answer: true,
          explain: "The API sets the lines and triggers the slide-in."
        },
        {
          type: "fill",
          q: "Hide the bar programmatically with wibblyLowerThird____().",
          answer: "hide",
          accept: ["hide"],
          explain: "wibblyLowerThirdHide() slides the bar out."
        },
        {
          type: "match",
          q: "Match the method to what it does.",
          pairs: [
            ["wibblyLowerThird({...})", "Set text and show"],
            ["wibblyLowerThirdHide()", "Slide out"],
            ["?name= / ?role=", "Set text at load"]
          ],
          explain: "Content can be set by URL or the JS API."
        },
        {
          type: "truefalse",
          q: "Because content is data-driven, you never need to edit the HTML to change the text.",
          answer: true,
          explain: "URL params and the API cover text changes without code edits."
        },
        {
          type: "mcq",
          q: "Calling the API from a Streamer.bot or Chatbot action lets you:",
          choices: [
            "Trigger a lower third on demand during the stream",
            "Encode the video",
            "Change your camera",
            "Increase bitrate"
          ],
          answer: 0,
          explain: "External tools can call the global to pop a lower third live."
        }
      ]
    },
    {
      id: "l37",
      title: "Placement",
      intro: "The ?pos parameter puts the bar beside the facecam, or in a bottom corner or center.",
      questions: [
        {
          type: "match",
          q: "Match the pos value to where the bar sits.",
          pairs: [
            ["cam", "Right of the facecam (default)"],
            ["bl", "Bottom-left"],
            ["br", "Bottom-right"],
            ["bc", "Bottom-center"]
          ],
          explain: "?pos controls the lower third's anchor."
        },
        {
          type: "mcq",
          q: "The default position (pos=cam) is chosen to:",
          choices: [
            "Clear a corner facecam",
            "Cover the webcam",
            "Sit in the exact center",
            "Hide off-screen"
          ],
          answer: 0,
          explain: "It defaults to the right of the facecam so it doesn't overlap the cam."
        },
        {
          type: "truefalse",
          q: "Bottom-center placement offsets by half the bar's width after it's measured.",
          answer: true,
          explain: "The script measures the width and applies a negative margin to center it."
        },
        {
          type: "fill",
          q: "Put the bar in the bottom-right with lowerthird.html?pos=____.",
          answer: "br",
          accept: ["br"],
          explain: "?pos=br anchors it bottom-right."
        },
        {
          type: "truefalse",
          q: "All placements keep the bar within the safe area near the bottom.",
          answer: true,
          explain: "The bar anchors at a safe bottom offset regardless of horizontal pos."
        },
        {
          type: "mcq",
          q: "On YouTube Live, avoid placing the bar:",
          choices: [
            "In the bottom-right keep-clear zone",
            "On the left",
            "Near the facecam",
            "At bottom-center"
          ],
          answer: 0,
          explain: "The bottom-right holds YouTube's controls, so keep the bar out of it there."
        }
      ]
    },
    {
      id: "l38",
      title: "Auto-Hide",
      intro: "An ?auto parameter slides the bar back out after a set number of seconds.",
      questions: [
        {
          type: "mcq",
          q: "lowerthird.html?auto=8 will:",
          choices: [
            "Slide the bar out after 8 seconds",
            "Keep it forever",
            "Show it for 8 minutes",
            "Delete the file"
          ],
          answer: 0,
          explain: "?auto=8 hides the bar 8 seconds after it shows."
        },
        {
          type: "truefalse",
          q: "Without ?auto, the lower third stays on screen until you hide it.",
          answer: true,
          explain: "The default is to persist until hidden."
        },
        {
          type: "fill",
          q: "The parameter that auto-hides the bar after N seconds is ?____.",
          answer: "auto",
          accept: ["auto"],
          explain: "?auto=N sets the auto-hide delay in seconds."
        },
        {
          type: "match",
          q: "Match the setting to the behavior.",
          pairs: [
            ["No auto", "Stays until hidden"],
            ["?auto=8", "Hides after 8s"],
            ["wibblyLowerThirdHide()", "Hides immediately"]
          ],
          explain: "You can persist, auto-hide, or hide on command."
        },
        {
          type: "truefalse",
          q: "Auto-hide is handled by a setTimeout in the page's JavaScript.",
          answer: true,
          explain: "A timer calls hide() after the given seconds."
        },
        {
          type: "mcq",
          q: "Auto-hide is handy for:",
          choices: [
            "Briefly introducing a segment then getting out of the way",
            "Permanent watermarks",
            "Encoding video",
            "Muting audio"
          ],
          answer: 0,
          explain: "A timed reveal-then-hide suits brief intros and labels."
        }
      ]
    },
    {
      id: "l39",
      title: "Wiring the Lower Third into OBS",
      intro: "Add lowerthird.html as a full-canvas Browser Source; it only shows its bar, so it layers cleanly.",
      questions: [
        {
          type: "order",
          q: "Order adding a lower third to a scene.",
          items: [
            "Add lowerthird.html as a Browser Source at 1920x1080",
            "Set ?name, ?role, and ?pos",
            "Layer it above the game and webcam",
            "Optionally add ?auto to time it out"
          ],
          explain: "Add full-canvas, set content/placement, layer on top, then time it."
        },
        {
          type: "mcq",
          q: "Even though the bar is small, the Browser Source should be:",
          choices: [
            "Full canvas (the page positions the bar itself)",
            "Exactly the bar's pixel size",
            "1x1",
            "The webcam's size"
          ],
          answer: 0,
          explain: "The page places the bar within a 1920x1080 canvas, so size the source to match."
        },
        {
          type: "truefalse",
          q: "Refreshing the Browser Source replays the slide-in animation.",
          answer: true,
          explain: "Reloading re-runs the show() on load."
        },
        {
          type: "fill",
          q: "The lower third overlay must sit ____ the game and webcam to be visible.",
          answer: "above",
          accept: ["above", "in front of", "over"],
          explain: "Overlays render in front of the content."
        },
        {
          type: "match",
          q: "Match the goal to the parameter.",
          pairs: [
            ["Set the name", "?name="],
            ["Move it", "?pos="],
            ["Time it out", "?auto="]
          ],
          explain: "Content, placement, and timing are all URL-driven."
        },
        {
          type: "truefalse",
          q: "You can trigger the lower third live by calling its API from a browser dock or bot.",
          answer: true,
          explain: "wibblyLowerThird(...) can be called live to show a new label."
        }
      ]
    },
    {
      id: "l40",
      title: "Lower Third Best Practices",
      intro: "Keep the text short, show it briefly, and match its placement to your cam and platform.",
      questions: [
        {
          type: "mcq",
          q: "Good lower-third copy is:",
          choices: [
            "Short and readable at a glance",
            "A full paragraph",
            "Tiny and low-contrast",
            "Hidden"
          ],
          answer: 0,
          explain: "Brief, high-contrast text reads instantly."
        },
        {
          type: "truefalse",
          q: "Showing a lower third briefly, then hiding it, avoids nagging the viewer.",
          answer: true,
          explain: "A timed reveal keeps it from becoming visual clutter."
        },
        {
          type: "fill",
          q: "Match the bar's ____ to your cam side and the platform's clear zones.",
          answer: "placement",
          accept: ["placement", "position"],
          explain: "Placement should respect the cam and keep-clear zones."
        },
        {
          type: "match",
          q: "Match the practice to its benefit.",
          pairs: [
            ["Short text", "Instant readability"],
            ["Timed hide", "Less clutter"],
            ["Smart placement", "No overlap with UI"]
          ],
          explain: "Brevity, timing, and placement make lower thirds effective."
        },
        {
          type: "truefalse",
          q: "A lower third left on screen the entire stream can become distracting.",
          answer: true,
          explain: "Persistent labels nag; show them when relevant, then hide."
        },
        {
          type: "mcq",
          q: "The overall aim of a lower third is to:",
          choices: [
            "Inform the viewer quickly without stealing focus",
            "Fill the whole screen",
            "Replace the game",
            "Increase your bitrate"
          ],
          answer: 0,
          explain: "It's a quick, unobtrusive label, nothing more."
        }
      ]
    }
  ]
});
