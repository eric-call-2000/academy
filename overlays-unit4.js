window.ACADEMY.addUnit("overlays", {
  id: "unit-4",
  title: "The Facecam Frame & HUD Bug",
  color: "#2FB6FF",
  icon: "🖼️",
  description: "Build overlay.html: a transparent facecam frame with the offset/chrome mark and a persistent HUD brand bug.",
  lessons: [
    {
      id: "l25",
      title: "What overlay.html Draws",
      intro: "overlay.html draws only the facecam frame and the HUD bug; the webcam and game are separate sources.",
      questions: [
        {
          type: "mcq",
          q: "overlay.html is responsible for drawing:",
          choices: [
            "The facecam frame and the HUD brand bug",
            "The webcam video itself",
            "The game footage",
            "Your microphone audio"
          ],
          answer: 0,
          explain: "It draws the frame and HUD; the actual webcam and game are their own sources."
        },
        {
          type: "truefalse",
          q: "The webcam capture is placed behind overlay.html, aligned to the frame's box.",
          answer: true,
          explain: "overlay.html is transparent; the real webcam sits behind, inside the frame."
        },
        {
          type: "fill",
          q: "overlay.html has a ____ background so the webcam and game show through.",
          answer: "transparent",
          accept: ["transparent"],
          explain: "It uses a transparent page background."
        },
        {
          type: "match",
          q: "Match the source to what it provides.",
          pairs: [
            ["overlay.html", "Frame + HUD graphics"],
            ["Webcam source", "Your camera video"],
            ["Game capture", "The gameplay"]
          ],
          explain: "The overlay is graphics only; video comes from separate sources."
        },
        {
          type: "truefalse",
          q: "This separation lets you swap cameras without touching the overlay graphics.",
          answer: true,
          explain: "The frame is independent of the webcam source, so cameras are interchangeable."
        },
        {
          type: "mcq",
          q: "The HUD 'bug' is:",
          choices: [
            "A small persistent brand lockup (orb + wordmark)",
            "A software error",
            "A type of alert",
            "The countdown"
          ],
          answer: 0,
          explain: "The HUD bug is a small orb + WIBBLY lockup kept on screen."
        }
      ]
    },
    {
      id: "l26",
      title: "Corner Cam vs. Big Cam",
      intro: "A ?cam parameter switches between the small corner cam and the large Just-Chatting cam.",
      questions: [
        {
          type: "match",
          q: "Match the parameter to the cam layout.",
          pairs: [
            ["overlay.html (default)", "480x270 corner cam"],
            ["overlay.html?cam=big", "960x540 centered-left cam"]
          ],
          explain: "The default is the corner cam; ?cam=big is the large Just-Chatting cam."
        },
        {
          type: "mcq",
          q: "The corner cam default size is:",
          choices: [
            "480x270",
            "1920x1080",
            "100x100",
            "1280x720"
          ],
          answer: 0,
          explain: "The corner facecam is 480x270 (16:9)."
        },
        {
          type: "truefalse",
          q: "The big cam is vertically centered on the left for a Just-Chatting look.",
          answer: true,
          explain: "?cam=big places a 960x540 cam centered-left."
        },
        {
          type: "fill",
          q: "Switch to the large talking-head cam with overlay.html?cam=____.",
          answer: "big",
          accept: ["big"],
          explain: "?cam=big selects the large layout."
        },
        {
          type: "truefalse",
          q: "Both cam layouts use the same frame design, just at different sizes.",
          answer: true,
          explain: "The frame construction is identical; only dimensions and position change."
        },
        {
          type: "mcq",
          q: "When you switch cam layouts, you must also:",
          choices: [
            "Resize/reposition the webcam source to match the new box",
            "Reinstall OBS",
            "Change your bitrate",
            "Delete the HUD"
          ],
          answer: 0,
          explain: "The webcam source must match whichever box the overlay expects."
        }
      ]
    },
    {
      id: "l27",
      title: "The Offset + Chrome Frame",
      intro: "The frame is the brand's signature: a pink offset copy behind a chrome-gradient ring with a blue glow.",
      questions: [
        {
          type: "mcq",
          q: "The facecam frame is built from:",
          choices: [
            "A pink offset copy behind a chrome-gradient ring with a glow",
            "A single flat black border",
            "A photo of a frame",
            "No border at all"
          ],
          answer: 0,
          explain: "A pink offset sits behind a chrome ring, with a blue box-shadow glow."
        },
        {
          type: "truefalse",
          q: "The pink offset is a second frame shifted a few pixels behind the chrome one.",
          answer: true,
          explain: "The offset ring is translated ~6/7px behind to create the signature look."
        },
        {
          type: "fill",
          q: "The metallic gradient used for the ring is the ____ gradient.",
          answer: "chrome",
          accept: ["chrome"],
          explain: "The ring uses the shared --chrome gradient."
        },
        {
          type: "match",
          q: "Match each frame layer to its role.",
          pairs: [
            ["Pink offset ring", "Depth / brand accent behind"],
            ["Chrome ring", "The main metallic border"],
            ["Blue glow", "A soft outer shadow"]
          ],
          explain: "Offset, chrome, and glow combine into the signature frame."
        },
        {
          type: "truefalse",
          q: "The ring's center is transparent so the webcam shows through it.",
          answer: true,
          explain: "The ring is drawn as a border with a hollow center via a CSS mask."
        },
        {
          type: "mcq",
          q: "The hollow-ring effect is achieved with:",
          choices: [
            "A CSS mask that excludes the content box",
            "An image with a hole",
            "A video clip",
            "A game capture"
          ],
          answer: 0,
          explain: "A mask-composite exclude leaves the border but cuts out the middle."
        }
      ]
    },
    {
      id: "l28",
      title: "The Handle Tab & LIVE Dot",
      intro: "A small tab on the frame's top edge shows a pulsing LIVE dot and your handle.",
      questions: [
        {
          type: "mcq",
          q: "The handle tab on the frame displays:",
          choices: [
            "A pulsing dot, 'LIVE', and your handle",
            "The full game",
            "A goal bar",
            "The countdown"
          ],
          answer: 0,
          explain: "It's a chip with a live dot, the word LIVE, and your @handle."
        },
        {
          type: "truefalse",
          q: "The LIVE dot pulses using a CSS animation.",
          answer: true,
          explain: "A keyframe animation scales and fades the dot to make it pulse."
        },
        {
          type: "fill",
          q: "Set the handle text with overlay.html?____=@you.",
          answer: "handle",
          accept: ["handle"],
          explain: "?handle=@you sets the tab's handle label."
        },
        {
          type: "match",
          q: "Match the handle-tab part to its style.",
          pairs: [
            ["Live dot", "Pulsing pink circle"],
            ["LIVE", "Blue mono label"],
            ["Handle", "Dimmed white text"]
          ],
          explain: "The tab combines a pink dot, blue LIVE, and a muted handle."
        },
        {
          type: "truefalse",
          q: "The handle passed via URL is automatically uppercased for the tab.",
          answer: true,
          explain: "The script uppercases the handle before displaying it."
        },
        {
          type: "mcq",
          q: "A small mascot pip at the frame's top-right corner is:",
          choices: [
            "A mini orb bumper",
            "A goal bar",
            "An alert",
            "The countdown"
          ],
          answer: 0,
          explain: "A tiny orb bumper decorates the frame's top-right corner."
        }
      ]
    },
    {
      id: "l29",
      title: "The HUD Brand Bug",
      intro: "A small orb + WIBBLY wordmark sits opposite the cam, keeping the brand on every gameplay scene.",
      questions: [
        {
          type: "mcq",
          q: "The HUD brand bug's job is to:",
          choices: [
            "Keep the brand mark on screen without competing with the game",
            "Show the countdown",
            "Play alert sounds",
            "Capture the webcam"
          ],
          answer: 0,
          explain: "It's a persistent, subtle brand lockup for gameplay scenes."
        },
        {
          type: "truefalse",
          q: "By default the HUD bug sits top-right, opposite the bottom-left cam.",
          answer: true,
          explain: "Placing it opposite the cam balances the frame."
        },
        {
          type: "fill",
          q: "Move the HUD bug to the top-left with overlay.html?hud=____.",
          answer: "tl",
          accept: ["tl"],
          explain: "?hud=tl relocates the HUD bug to the top-left."
        },
        {
          type: "match",
          q: "Match the HUD choice to its effect.",
          pairs: [
            ["Default", "HUD top-right"],
            ["?hud=tl", "HUD top-left"],
            ["Opposite the cam", "Balanced layout"]
          ],
          explain: "The HUD side is configurable to balance against the cam."
        },
        {
          type: "truefalse",
          q: "The HUD bug is drawn full-opacity but kept small so it doesn't distract.",
          answer: true,
          explain: "It stays visible but compact so it never competes with gameplay."
        },
        {
          type: "mcq",
          q: "The HUD bug is composed of:",
          choices: [
            "A mini orb plus the WIBBLY wordmark",
            "A goal bar",
            "A follower alert",
            "A countdown timer"
          ],
          answer: 0,
          explain: "It pairs a small orb with the chrome WIBBLY wordmark."
        }
      ]
    },
    {
      id: "l30",
      title: "The Chrome Wordmark & Drawn 'I'",
      intro: "WIBBLY is chrome-clipped text with a pink offset; the dotted 'I' is drawn in pure CSS as the orb's eye motif.",
      questions: [
        {
          type: "mcq",
          q: "The WIBBLY wordmark's chrome effect comes from:",
          choices: [
            "Clipping the chrome gradient to the text",
            "A chrome-colored image",
            "A video overlay",
            "A webcam filter"
          ],
          answer: 0,
          explain: "background-clip:text clips the --chrome gradient onto the letters."
        },
        {
          type: "truefalse",
          q: "The wordmark has a pink offset copy behind it, echoing the frame.",
          answer: true,
          explain: "A ::before offset in pink sits behind the chrome text."
        },
        {
          type: "fill",
          q: "The chrome letters are made with background-clip: ____.",
          answer: "text",
          accept: ["text"],
          explain: "background-clip:text confines the gradient to the glyphs."
        },
        {
          type: "match",
          q: "Match the 'I' glyph part to what it is.",
          pairs: [
            ["Chrome stem", "The vertical bar"],
            ["Chrome dot", "The eye-like top"],
            ["Pupil", "The dark center of the dot"]
          ],
          explain: "The custom 'I' is drawn from CSS shapes echoing the orb's eye."
        },
        {
          type: "truefalse",
          q: "The custom 'I' is drawn with CSS shapes rather than a font glyph.",
          answer: true,
          explain: "It's hand-built from spans so it can carry the brand's eye motif."
        },
        {
          type: "mcq",
          q: "Drawing the mark in pure CSS (no images) means it:",
          choices: [
            "Stays crisp at any size and keeps the file self-contained",
            "Needs a fast internet connection to load images",
            "Cannot be recolored",
            "Requires a plugin"
          ],
          answer: 0,
          explain: "Pure CSS scales cleanly and needs no external image assets."
        }
      ]
    },
    {
      id: "l31",
      title: "The Orb, Built in CSS",
      intro: "The orb mascot is layered CSS gradients: a sphere body, a specular highlight, and an eye with a pupil.",
      questions: [
        {
          type: "match",
          q: "Match each orb layer to its job.",
          pairs: [
            ["Sphere", "The glossy ball body"],
            ["Specular highlight", "The bright reflection"],
            ["Eye + pupil", "The character's gaze"]
          ],
          explain: "Stacked gradients build the orb: body, highlight, and eye."
        },
        {
          type: "mcq",
          q: "The orb's size is controlled by a single CSS variable so it can:",
          choices: [
            "Scale to any diameter with one value",
            "Only ever be one size",
            "Require a new image per size",
            "Change your bitrate"
          ],
          answer: 0,
          explain: "A --d variable sets the diameter; the layers scale from it."
        },
        {
          type: "truefalse",
          q: "The orb reuses the same construction across overlay, standby, alerts, and stinger.",
          answer: true,
          explain: "One orb recipe appears throughout for a consistent mascot."
        },
        {
          type: "fill",
          q: "The orb's diameter is set with the CSS variable --____.",
          answer: "d",
          accept: ["d"],
          explain: "Elements set style=\"--d:52px\" to size the orb."
        },
        {
          type: "truefalse",
          q: "Because it's CSS, the orb has a soft blue glow via box-shadow.",
          answer: true,
          explain: "A box-shadow gives the orb its signature blue glow."
        },
        {
          type: "mcq",
          q: "Building the orb in CSS instead of an image means:",
          choices: [
            "Crisp scaling and one self-contained file",
            "It cannot glow",
            "It needs a capture card",
            "It only works at 4K"
          ],
          answer: 0,
          explain: "CSS keeps it sharp at any size with no external asset."
        }
      ]
    },
    {
      id: "l32",
      title: "Wiring the Facecam Scene",
      intro: "Add overlay.html on top, place the webcam behind it at the expected box, and the game at the back.",
      questions: [
        {
          type: "order",
          q: "Order building the gameplay scene with a facecam.",
          items: [
            "Add the game capture (back layer)",
            "Add the webcam at the frame's box (480x270 @ 96,714)",
            "Add overlay.html on top at full canvas",
            "Set ?handle= and ?hud= as desired"
          ],
          explain: "Game at the back, webcam in the frame box, overlay on top, then options."
        },
        {
          type: "mcq",
          q: "overlay.html should be sized in OBS to:",
          choices: [
            "1920x1080 (full canvas)",
            "480x270",
            "The webcam's size",
            "1x1"
          ],
          answer: 0,
          explain: "The overlay is authored full-canvas, so size the source to match."
        },
        {
          type: "truefalse",
          q: "Use overlay.html?demo=1 to align your webcam to the placeholder cam fill.",
          answer: true,
          explain: "Demo mode shows where the webcam should sit for easy alignment."
        },
        {
          type: "fill",
          q: "The webcam is a source placed ____ the overlay in the stack.",
          answer: "behind",
          accept: ["behind", "below", "under"],
          explain: "The webcam sits behind (below) the transparent overlay."
        },
        {
          type: "match",
          q: "Match the layer to its stack position.",
          pairs: [
            ["overlay.html", "Front"],
            ["Webcam", "Middle (in the frame)"],
            ["Game", "Back"]
          ],
          explain: "Overlay front, webcam in its frame, game at the back."
        },
        {
          type: "truefalse",
          q: "Once aligned, you can reuse this facecam setup across multiple gameplay scenes.",
          answer: true,
          explain: "Reusing the frame overlay keeps every scene consistent."
        }
      ]
    }
  ]
});
