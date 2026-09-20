window.ACADEMY.addUnit("overlays", {
  id: "unit-2",
  title: "Canvas, Safety & the Scene Set",
  color: "#2FB6FF",
  icon: "📐",
  description: "Author at 1920x1080, respect title-safe and keep-clear zones, and stack a clean scene set.",
  lessons: [
    {
      id: "l9",
      title: "The 1920x1080 Canvas",
      intro: "Every overlay is authored at 1920x1080 so OBS scales it 1:1 with no distortion.",
      questions: [
        {
          type: "mcq",
          q: "The Wibbly overlays are all authored at:",
          choices: [
            "1920x1080",
            "640x480",
            "1024x768",
            "A random size each"
          ],
          answer: 0,
          explain: "Authoring at 1920x1080 matches a 1080p canvas so OBS scales 1:1."
        },
        {
          type: "truefalse",
          q: "Matching the overlay size to the OBS canvas avoids scaling blur.",
          answer: true,
          explain: "A 1:1 match keeps the graphics crisp with no resampling."
        },
        {
          type: "fill",
          q: "The base canvas the overlays target is 1920x____.",
          answer: "1080",
          accept: ["1080"],
          explain: "The base canvas is 1920x1080."
        },
        {
          type: "match",
          q: "Match the resolution to its name.",
          pairs: [
            ["1920x1080", "1080p"],
            ["1280x720", "720p"],
            ["3840x2160", "4K"]
          ],
          explain: "1920x1080 is 1080p, the target canvas here."
        },
        {
          type: "truefalse",
          q: "The pages set html,body width and height to 1920px and 1080px explicitly.",
          answer: true,
          explain: "Fixed page dimensions lock the layout to the canvas."
        },
        {
          type: "mcq",
          q: "The spec targets 1920x1080 at what frame rate?",
          choices: [
            "60",
            "5",
            "24",
            "120"
          ],
          answer: 0,
          explain: "The canvas is specified as 1920x1080 @60."
        }
      ]
    },
    {
      id: "l10",
      title: "Title-Safe Margins",
      intro: "Keep critical content inside a 96px (5%) margin so nothing important hugs the very edge.",
      questions: [
        {
          type: "mcq",
          q: "The title-safe margin used across the overlays is:",
          choices: [
            "96px (5%) from each edge",
            "0px (right to the edge)",
            "500px",
            "1px"
          ],
          answer: 0,
          explain: "A 96px (5%) safe margin keeps critical content off the edges."
        },
        {
          type: "truefalse",
          q: "Placing key elements inside the safe margin protects them from edge cropping.",
          answer: true,
          explain: "Different players and displays can crop edges, so critical content stays inside."
        },
        {
          type: "fill",
          q: "Overlays keep critical content inside a ____ px safe margin.",
          answer: "96",
          accept: ["96"],
          explain: "The safe margin is 96px (5% of 1920)."
        },
        {
          type: "match",
          q: "Match the placement to its 96px anchor.",
          pairs: [
            ["Socials row", "Bottom-left, inside 96px"],
            ["Schedule", "Bottom-right, inside 96px"],
            ["Facecam", "Bottom-left, 96px margin"]
          ],
          explain: "Corner elements all respect the 96px safe margin."
        },
        {
          type: "truefalse",
          q: "96px is exactly 5% of the 1920px canvas width.",
          answer: true,
          explain: "5% of 1920 is 96, which is where the safe margin comes from."
        },
        {
          type: "mcq",
          q: "Ignoring the safe margin risks:",
          choices: [
            "Important text being cut off on some displays",
            "Better audio",
            "A higher frame rate",
            "Smaller file sizes"
          ],
          answer: 0,
          explain: "Content at the very edge can be clipped depending on the viewer's setup."
        }
      ]
    },
    {
      id: "l11",
      title: "YouTube Keep-Clear Zones",
      intro: "YouTube Live draws its own UI along the bottom and bottom-right, so keep persistent brand elements away.",
      questions: [
        {
          type: "mcq",
          q: "On YouTube Live, which areas should stay free of persistent overlay elements?",
          choices: [
            "The bottom strip and bottom-right",
            "The exact center only",
            "The top-left only",
            "Nowhere; cover everything"
          ],
          answer: 0,
          explain: "YouTube's scrubber (bottom) and viewer count/controls (bottom-right) need clearance."
        },
        {
          type: "truefalse",
          q: "Because of the keep-clear zones, the facecam and HUD default to the LEFT side.",
          answer: true,
          explain: "Docking to the left keeps YouTube's bottom-right controls unobstructed."
        },
        {
          type: "fill",
          q: "The bottom-right of a YouTube Live player holds the viewer count and player ____.",
          answer: "controls",
          accept: ["controls"],
          explain: "Player controls and viewer count live in the bottom-right."
        },
        {
          type: "match",
          q: "Match the YouTube UI to where it sits.",
          pairs: [
            ["Scrubber / progress", "Bottom strip"],
            ["Viewer count / controls", "Bottom-right"],
            ["Safe overlay zone", "Left side"]
          ],
          explain: "Knowing where YouTube draws UI tells you where NOT to put brand elements."
        },
        {
          type: "truefalse",
          q: "Persistent brand elements in a keep-clear zone can be covered by the player UI.",
          answer: true,
          explain: "YouTube's own controls will sit on top of anything placed there."
        },
        {
          type: "mcq",
          q: "The safest default side for the facecam and HUD is therefore:",
          choices: [
            "The left",
            "The bottom-right",
            "Dead center",
            "Everywhere"
          ],
          answer: 0,
          explain: "The left avoids YouTube's bottom-right controls."
        }
      ]
    },
    {
      id: "l12",
      title: "The Recommended Scene Set",
      intro: "The spec recommends five scenes: Starting Soon, Main/Gameplay, Just Chatting, Be Right Back, Stream Over.",
      questions: [
        {
          type: "order",
          q: "Order a typical stream's scenes over time.",
          items: [
            "Starting Soon",
            "Main / Gameplay",
            "Be Right Back",
            "Stream Over"
          ],
          explain: "Streams usually open on Starting Soon, run the main scene, dip to BRB, and end on Stream Over."
        },
        {
          type: "mcq",
          q: "Which of these is one of the recommended scenes?",
          choices: [
            "Just Chatting",
            "Spreadsheet",
            "File Explorer",
            "Settings"
          ],
          answer: 0,
          explain: "Just Chatting (big cam) is one of the five recommended scenes."
        },
        {
          type: "truefalse",
          q: "Starting Soon, Be Right Back, and Stream Over all use the opaque standby screen.",
          answer: true,
          explain: "These three are standby states of the same opaque screen."
        },
        {
          type: "fill",
          q: "The scene where you show only your camera to talk is called Just ____.",
          answer: "chatting",
          accept: ["chatting"],
          explain: "The big-cam talking scene is Just Chatting."
        },
        {
          type: "match",
          q: "Match the scene to its overlay type.",
          pairs: [
            ["Starting Soon", "Opaque standby screen"],
            ["Main / Gameplay", "Transparent overlays over the game"],
            ["Stream Over", "Opaque standby screen"]
          ],
          explain: "Standby scenes are opaque; the gameplay scene layers transparent overlays."
        },
        {
          type: "truefalse",
          q: "Having preset scenes lets you switch the whole look instantly during a stream.",
          answer: true,
          explain: "Prebuilt scenes make live transitions clean and fast."
        }
      ]
    },
    {
      id: "l13",
      title: "Source Stacking Order",
      intro: "In the gameplay scene, sources stack HUD bug > facecam frame > alerts > goal bar > game capture.",
      questions: [
        {
          type: "order",
          q: "Order the gameplay scene sources from front (top) to back.",
          items: [
            "HUD bug",
            "Facecam frame",
            "Alerts",
            "Goal bar",
            "Game capture"
          ],
          explain: "The spec stacks HUD > facecam > alerts > goal bar > game capture, front to back."
        },
        {
          type: "mcq",
          q: "The game capture belongs where in the stack?",
          choices: [
            "At the back (bottom of the list)",
            "At the very front",
            "Above the HUD",
            "Above the alerts"
          ],
          answer: 0,
          explain: "The game is the content; overlays go in front of it."
        },
        {
          type: "truefalse",
          q: "The webcam capture is a separate source placed behind the facecam-frame overlay.",
          answer: true,
          explain: "overlay.html draws only the frame; your webcam sits behind it, aligned to the frame."
        },
        {
          type: "fill",
          q: "Sources higher in the list render in ____ of those below them.",
          answer: "front",
          accept: ["front"],
          explain: "Top of the list is frontmost."
        },
        {
          type: "match",
          q: "Match the source to its layer role.",
          pairs: [
            ["Overlays", "Front layers"],
            ["Webcam", "Behind its frame overlay"],
            ["Game", "Back layer"]
          ],
          explain: "Overlays in front, game at the back, webcam tucked behind its frame."
        },
        {
          type: "truefalse",
          q: "If the alerts appear behind the game, the alert source is too low in the list.",
          answer: true,
          explain: "Move the alert source up so it renders over the game."
        }
      ]
    },
    {
      id: "l14",
      title: "Aligning the Webcam Behind Its Frame",
      intro: "overlay.html draws only the frame; you position the webcam source to the exact box the frame expects.",
      questions: [
        {
          type: "mcq",
          q: "In the default (corner) layout, the webcam should be placed at:",
          choices: [
            "480x270 at (96, 714)",
            "1920x1080 at (0,0)",
            "100x100 at the center",
            "Anywhere; it auto-aligns"
          ],
          answer: 0,
          explain: "overlay.html expects the corner cam at 480x270, position (96, 714)."
        },
        {
          type: "truefalse",
          q: "In the big (Just Chatting) layout, the webcam is 960x540 at (96, 270).",
          answer: true,
          explain: "overlay.html?cam=big expects the cam at 960x540, position (96, 270)."
        },
        {
          type: "fill",
          q: "The overlay draws the frame; your actual ____ is a separate source behind it.",
          answer: "webcam",
          accept: ["webcam", "camera"],
          explain: "The webcam capture sits behind the frame overlay."
        },
        {
          type: "match",
          q: "Match the layout to its cam box.",
          pairs: [
            ["Corner cam", "480x270 at (96,714)"],
            ["Big cam", "960x540 at (96,270)"]
          ],
          explain: "The two layouts expect the webcam at these exact boxes."
        },
        {
          type: "truefalse",
          q: "overlay.html?demo=1 shows a placeholder fill where the webcam should sit.",
          answer: true,
          explain: "Demo mode draws a stand-in cam fill so you can align the real webcam to it."
        },
        {
          type: "mcq",
          q: "If your webcam pokes outside the frame, you should:",
          choices: [
            "Match the webcam source's size/position to the frame's expected box",
            "Delete the overlay",
            "Lower your bitrate",
            "Add another scene"
          ],
          answer: 0,
          explain: "Align the webcam source to the exact box the overlay draws."
        }
      ]
    },
    {
      id: "l15",
      title: "Placement Parameters",
      intro: "Most overlays accept a position parameter (pos / hud / anchor) so you can move them without editing code.",
      questions: [
        {
          type: "match",
          q: "Match the parameter to the piece it repositions.",
          pairs: [
            ["overlay.html?hud=tl", "Moves the HUD bug to top-left"],
            ["goalbar.html?pos=bl", "Moves the goal bar to bottom-left"],
            ["alerts.html?anchor=top", "Anchors alerts at top-center"]
          ],
          explain: "Each piece exposes a placement parameter for flexible positioning."
        },
        {
          type: "mcq",
          q: "The goal bar's default position (pos=tl) is:",
          choices: [
            "Top-left, mirroring the HUD",
            "Dead center",
            "Bottom-right",
            "Off-screen"
          ],
          answer: 0,
          explain: "goalbar.html defaults to top-left (tl), mirroring the HUD bug."
        },
        {
          type: "truefalse",
          q: "Placement parameters let you avoid the YouTube keep-clear zones per stream.",
          answer: true,
          explain: "You can reposition pieces to keep the bottom-right clear as needed."
        },
        {
          type: "fill",
          q: "The lower third's default position parameter value is ____ (right of the facecam).",
          answer: "cam",
          accept: ["cam"],
          explain: "lowerthird.html defaults to pos=cam, clearing a corner facecam."
        },
        {
          type: "match",
          q: "Match the pos value to where it lands.",
          pairs: [
            ["bl", "Bottom-left"],
            ["br", "Bottom-right"],
            ["bc", "Bottom-center"]
          ],
          explain: "The pos abbreviations map to standard screen anchors."
        },
        {
          type: "truefalse",
          q: "Changing placement requires rewriting the overlay's CSS every time.",
          answer: false,
          explain: "Placement is controlled by URL parameters, so no code changes are needed."
        }
      ]
    },
    {
      id: "l16",
      title: "Planning Your Layout",
      intro: "Before building, decide cam side, HUD side, and where live elements sit, all within safe and clear zones.",
      questions: [
        {
          type: "order",
          q: "Order a sensible layout-planning process.",
          items: [
            "Pick the canvas (1920x1080)",
            "Mark the safe margin and keep-clear zones",
            "Place the facecam and HUD on the left",
            "Position alerts, goal bar, and lower third"
          ],
          explain: "Canvas, then zones, then anchor the persistent pieces, then the situational ones."
        },
        {
          type: "mcq",
          q: "A good layout keeps persistent elements:",
          choices: [
            "Inside the safe margin and out of keep-clear zones",
            "Right on the edges",
            "Over the YouTube controls",
            "Randomly placed"
          ],
          answer: 0,
          explain: "Persistent branding belongs in safe, clear areas."
        },
        {
          type: "truefalse",
          q: "Balancing the layout (cam on one side, HUD opposite) avoids crowding one corner.",
          answer: true,
          explain: "Spreading elements keeps the frame balanced and readable."
        },
        {
          type: "fill",
          q: "Persistent elements should sit inside the 96px safe ____.",
          answer: "margin",
          accept: ["margin"],
          explain: "Keep persistent pieces within the safe margin."
        },
        {
          type: "match",
          q: "Match the element to a sensible default spot.",
          pairs: [
            ["Facecam", "Bottom-left"],
            ["HUD bug", "Top-right (opposite the cam)"],
            ["Goal bar", "Top-left"]
          ],
          explain: "Spreading pieces to different corners keeps the layout clean."
        },
        {
          type: "truefalse",
          q: "A clear plan makes wiring the Browser Sources into OBS much faster.",
          answer: true,
          explain: "Knowing positions in advance turns setup into simple placement."
        }
      ]
    }
  ]
});
