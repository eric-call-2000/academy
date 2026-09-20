window.ACADEMY.addUnit("obs", {
  id: "unit-2",
  title: "Scenes & Sources",
  color: "#4b5bd4",
  icon: "🎬",
  description: "Build layouts with scenes, add the right capture sources, and arrange them precisely.",
  lessons: [
    {
      id: "l9",
      title: "What Is a Scene?",
      intro: "A scene is a saved layout of sources you can switch to instantly, like a camera preset.",
      questions: [
        {
          type: "mcq",
          q: "A scene in OBS is best described as:",
          choices: [
            "A saved arrangement of sources you can switch to",
            "A single video file",
            "A microphone setting",
            "A type of transition only"
          ],
          answer: 0,
          explain: "Each scene is a reusable layout of sources you can jump between."
        },
        {
          type: "truefalse",
          q: "You can have many scenes and switch between them while recording.",
          answer: true,
          explain: "Multiple scenes let you cut between layouts, like intro, main, and full-screen."
        },
        {
          type: "match",
          q: "Match each scene to a typical use.",
          pairs: [
            ["Intro scene", "A title card shown at the start"],
            ["Main scene", "You plus your screen or slides"],
            ["Full-screen scene", "Only the shared screen or gameplay"]
          ],
          explain: "Scenes are usually organized around the moments of your video."
        },
        {
          type: "fill",
          q: "Switching layouts instantly is done by selecting a different ____.",
          answer: "scene",
          accept: ["scene"],
          explain: "Selecting another scene changes the whole layout at once."
        },
        {
          type: "mcq",
          q: "Why use several scenes instead of one?",
          choices: [
            "To switch cleanly between different looks without rearranging live",
            "Because OBS requires at least ten scenes",
            "To make recordings smaller",
            "To avoid using sources"
          ],
          answer: 0,
          explain: "Prebuilt scenes let you change the look instantly instead of dragging sources mid-recording."
        },
        {
          type: "truefalse",
          q: "Deleting a scene also deletes the actual video files you recorded with it.",
          answer: false,
          explain: "Deleting a scene only removes the layout; your saved recordings are untouched."
        },
        {
          type: "mcq",
          q: "The Scene Transition setting controls:",
          choices: [
            "How one scene changes into another (like a cut or fade)",
            "How loud your microphone is",
            "The recording file format",
            "Your monitor brightness"
          ],
          answer: 0,
          explain: "Transitions define the visual change when switching scenes, such as Cut or Fade."
        }
      ]
    },
    {
      id: "l10",
      title: "What Is a Source?",
      intro: "A source is a single input inside a scene: your screen, a window, a camera, an image, or audio.",
      questions: [
        {
          type: "mcq",
          q: "A source is:",
          choices: [
            "One input or item placed inside a scene",
            "A whole layout",
            "The recording folder",
            "A keyboard shortcut"
          ],
          answer: 0,
          explain: "Sources are the individual building blocks, and scenes hold them."
        },
        {
          type: "match",
          q: "Match each source type to what it captures.",
          pairs: [
            ["Display Capture", "An entire monitor"],
            ["Window Capture", "One specific application window"],
            ["Video Capture Device", "A webcam or capture card"],
            ["Image", "A static picture or logo"]
          ],
          explain: "Each source type grabs a different kind of input."
        },
        {
          type: "truefalse",
          q: "A single scene can contain multiple sources layered together.",
          answer: true,
          explain: "You can stack a camera over a screen over a background, all in one scene."
        },
        {
          type: "fill",
          q: "You add a new source by clicking the ____ button in the Sources dock.",
          answer: "plus",
          accept: ["plus", "+", "add"],
          explain: "The + (plus) button in the Sources dock adds a new source."
        },
        {
          type: "mcq",
          q: "The relationship between scenes and sources is:",
          choices: [
            "Scenes contain sources",
            "Sources contain scenes",
            "They are the same thing",
            "Neither can exist with the other"
          ],
          answer: 0,
          explain: "Think of scenes as containers and sources as the items inside them."
        },
        {
          type: "truefalse",
          q: "The same source can be reused across multiple scenes.",
          answer: true,
          explain: "Adding an existing source (rather than a new one) shares it between scenes."
        },
        {
          type: "mcq",
          q: "Which is NOT a typical visual source?",
          choices: [
            "Audio Output Capture",
            "Display Capture",
            "Image",
            "Browser"
          ],
          answer: 0,
          explain: "Audio Output Capture is an audio source; the others put pixels on screen."
        }
      ]
    },
    {
      id: "l11",
      title: "Display, Window & Game Capture",
      intro: "Three capture types grab your screen in different ways, each with trade-offs.",
      questions: [
        {
          type: "match",
          q: "Match each capture type to when to use it.",
          pairs: [
            ["Display Capture", "Record everything on a whole monitor"],
            ["Window Capture", "Record just one app, even if others are on top"],
            ["Game Capture", "Efficiently record a full-screen game"]
          ],
          explain: "Display grabs the monitor, Window isolates one app, and Game Capture is tuned for games."
        },
        {
          type: "mcq",
          q: "To hide your notifications and taskbar from a tutorial, prefer:",
          choices: [
            "Window Capture of just the app",
            "Display Capture of everything",
            "Audio Input Capture",
            "An Image source"
          ],
          answer: 0,
          explain: "Window Capture shows only the chosen app, keeping private pop-ups out of frame."
        },
        {
          type: "truefalse",
          q: "Game Capture is generally more efficient than Display Capture for full-screen games.",
          answer: true,
          explain: "Game Capture hooks the game directly, which is lighter and often higher quality than Display Capture."
        },
        {
          type: "fill",
          q: "____ Capture records a single application even if other windows overlap it.",
          answer: "window",
          accept: ["window"],
          explain: "Window Capture isolates one application window."
        },
        {
          type: "mcq",
          q: "A common Display Capture problem on laptops with two GPUs is:",
          choices: [
            "A black screen because OBS runs on the wrong GPU",
            "The file becomes audio only",
            "The scene deletes itself",
            "The webcam turns off"
          ],
          answer: 0,
          explain: "GPU mismatch can cause a black Display Capture; running OBS on the right GPU fixes it."
        },
        {
          type: "truefalse",
          q: "Window Capture can stop working if you close and reopen the target window.",
          answer: true,
          explain: "Reopening a window can change its handle, so you may need to reselect it."
        },
        {
          type: "mcq",
          q: "For recording a browser-based demo cleanly, the best first choice is usually:",
          choices: [
            "Window Capture of the browser",
            "Game Capture",
            "Audio Output Capture",
            "Color Source"
          ],
          answer: 0,
          explain: "Window Capture isolates the browser so desktop clutter stays out of the shot."
        }
      ]
    },
    {
      id: "l12",
      title: "Adding a Webcam",
      intro: "A Video Capture Device source brings your webcam or capture card into a scene.",
      questions: [
        {
          type: "mcq",
          q: "To add a webcam, you create which source?",
          choices: [
            "Video Capture Device",
            "Image",
            "Color Source",
            "Text"
          ],
          answer: 0,
          explain: "Video Capture Device covers webcams and capture cards."
        },
        {
          type: "truefalse",
          q: "You can resize and reposition your webcam feed anywhere in the scene.",
          answer: true,
          explain: "Like any source, the webcam can be dragged, scaled, and cropped freely."
        },
        {
          type: "fill",
          q: "A webcam is added as a Video Capture ____ source.",
          answer: "device",
          accept: ["device"],
          explain: "The source is named Video Capture Device."
        },
        {
          type: "mcq",
          q: "If your webcam looks soft or dark, a good first step is to:",
          choices: [
            "Open its properties and adjust resolution/format and lighting",
            "Delete all your scenes",
            "Lower your recording folder",
            "Restart your router"
          ],
          answer: 0,
          explain: "Webcam properties expose resolution, FPS, and format; lighting fixes the rest."
        },
        {
          type: "match",
          q: "Match each webcam property to what it affects.",
          pairs: [
            ["Resolution", "Sharpness and detail"],
            ["FPS", "Motion smoothness"],
            ["Format (e.g. MJPEG)", "How the camera sends data"]
          ],
          explain: "Resolution controls detail, FPS controls smoothness, and format controls the data path."
        },
        {
          type: "truefalse",
          q: "Only one program at a time can usually use a webcam.",
          answer: true,
          explain: "If another app has the camera open, OBS may show a black or unavailable device."
        },
        {
          type: "mcq",
          q: "A capture card is used to bring in video from:",
          choices: [
            "A console or a second computer",
            "Your keyboard",
            "Your mouse",
            "A printer"
          ],
          answer: 0,
          explain: "Capture cards ingest HDMI from consoles or another PC as a Video Capture Device."
        }
      ]
    },
    {
      id: "l13",
      title: "Transform & Position",
      intro: "Every source can be moved, scaled, rotated, and cropped to fit your layout.",
      questions: [
        {
          type: "mcq",
          q: "The red handles around a selected source let you:",
          choices: [
            "Resize and reposition it",
            "Change its audio",
            "Rename the scene",
            "Start recording"
          ],
          answer: 0,
          explain: "The bounding box handles resize and move the source within the canvas."
        },
        {
          type: "truefalse",
          q: "Holding a modifier key while dragging an edge lets you crop a source.",
          answer: true,
          explain: "Holding Alt (Option on Mac) and dragging an edge crops the source."
        },
        {
          type: "fill",
          q: "Right-clicking a source and choosing Transform then ____ centers it on the canvas.",
          answer: "center",
          accept: ["center", "center to screen", "centre"],
          explain: "Transform > Center to Screen snaps a source to the middle."
        },
        {
          type: "match",
          q: "Match the transform action to its result.",
          pairs: [
            ["Fit to screen", "Source fills the canvas fully"],
            ["Crop", "Hides part of the source's edges"],
            ["Reset transform", "Returns to original size and position"]
          ],
          explain: "Fit, crop, and reset are the everyday transform tools."
        },
        {
          type: "mcq",
          q: "To make a source keep its shape while resizing, you should:",
          choices: [
            "Drag a corner handle so it scales proportionally",
            "Drag a side handle only",
            "Change the frame rate",
            "Mute the audio"
          ],
          answer: 0,
          explain: "Corner handles scale width and height together, preserving aspect ratio."
        },
        {
          type: "truefalse",
          q: "Cropping a source in OBS permanently deletes those pixels from your camera.",
          answer: false,
          explain: "Cropping only hides part of the source in the scene; the device is unchanged."
        },
        {
          type: "mcq",
          q: "The Edit Transform window is useful because it lets you:",
          choices: [
            "Enter exact position, size, and crop values",
            "Change your internet speed",
            "Add new hotkeys for Windows",
            "Rename the recording"
          ],
          answer: 0,
          explain: "Edit Transform gives precise numeric control over placement and cropping."
        }
      ]
    },
    {
      id: "l14",
      title: "Layering & Z-Order",
      intro: "The order of sources in the list decides what appears in front of what.",
      questions: [
        {
          type: "mcq",
          q: "A source higher in the Sources list appears:",
          choices: [
            "In front of sources below it",
            "Behind sources below it",
            "Only in audio",
            "In a separate scene"
          ],
          answer: 0,
          explain: "Top of the list renders on top; think of stacking sheets of paper."
        },
        {
          type: "truefalse",
          q: "To put your webcam over your screen, the webcam must be above the screen in the list.",
          answer: true,
          explain: "Higher in the list means in front, so the webcam sits over the screen capture."
        },
        {
          type: "order",
          q: "Order these from front (top of list) to back for a facecam tutorial.",
          items: [
            "Webcam",
            "Screen capture",
            "Background image"
          ],
          explain: "Webcam on top, screen in the middle, background behind everything."
        },
        {
          type: "fill",
          q: "The stacking order of sources is often called the ____-order.",
          answer: "z",
          accept: ["z"],
          explain: "Layer stacking is known as the z-order."
        },
        {
          type: "match",
          q: "Match the action to its effect on layering.",
          pairs: [
            ["Move source up", "Brings it toward the front"],
            ["Move source down", "Sends it toward the back"]
          ],
          explain: "Up is forward, down is backward in the visual stack."
        },
        {
          type: "truefalse",
          q: "A background image should usually be at the bottom of the Sources list.",
          answer: true,
          explain: "Backgrounds go behind everything, so they sit lowest in the list."
        },
        {
          type: "mcq",
          q: "If your webcam is hidden behind your screen capture, you should:",
          choices: [
            "Move the webcam source up in the list",
            "Delete the scene",
            "Lower your bitrate",
            "Change the file format"
          ],
          answer: 0,
          explain: "Raising the webcam in the list brings it in front of the screen."
        }
      ]
    },
    {
      id: "l15",
      title: "Grouping Sources",
      intro: "Groups bundle related sources so you can move, hide, or reuse them together.",
      questions: [
        {
          type: "mcq",
          q: "Putting sources into a Group lets you:",
          choices: [
            "Move and toggle them as one unit",
            "Increase your frame rate",
            "Change your microphone",
            "Speed up your internet"
          ],
          answer: 0,
          explain: "Groups let you transform and show/hide several sources together."
        },
        {
          type: "truefalse",
          q: "Hiding a group hides all the sources inside it at once.",
          answer: true,
          explain: "The group's visibility toggle controls every member source."
        },
        {
          type: "fill",
          q: "Bundling sources so they move together is called making a ____.",
          answer: "group",
          accept: ["group"],
          explain: "The feature is simply called a Group."
        },
        {
          type: "mcq",
          q: "A good use of a group is:",
          choices: [
            "Bundling a lower-third bar, name text, and logo together",
            "Storing your recordings",
            "Setting your bitrate",
            "Muting your desktop audio"
          ],
          answer: 0,
          explain: "Groups shine for overlay elements you always move and toggle together."
        },
        {
          type: "match",
          q: "Match the term to its meaning.",
          pairs: [
            ["Group", "A folder of sources moved together"],
            ["Source", "A single input or item"],
            ["Scene", "A whole layout of sources and groups"]
          ],
          explain: "Scenes hold groups and sources; groups hold sources."
        },
        {
          type: "truefalse",
          q: "You can still resize individual sources inside a group.",
          answer: true,
          explain: "Expand the group to adjust members individually, or transform the whole group at once."
        },
        {
          type: "mcq",
          q: "Ungrouping sources will:",
          choices: [
            "Separate them back into individual sources",
            "Delete them permanently",
            "Merge them into one image",
            "Turn off your camera"
          ],
          answer: 0,
          explain: "Ungrouping simply returns the members to standalone sources."
        }
      ]
    },
    {
      id: "l16",
      title: "Duplicating & Reusing",
      intro: "Reusing scenes and sources saves time and keeps your channel's look consistent.",
      questions: [
        {
          type: "mcq",
          q: "Duplicating a scene is handy when you want to:",
          choices: [
            "Make a variant without rebuilding it from scratch",
            "Delete all your sources",
            "Lower your resolution",
            "Disable audio forever"
          ],
          answer: 0,
          explain: "Duplicating gives you a near-identical starting point to tweak."
        },
        {
          type: "mcq",
          q: "When you add an Existing source instead of a new one, changes to it:",
          choices: [
            "Appear in every scene that uses it",
            "Only affect one scene",
            "Are lost immediately",
            "Break the recording"
          ],
          answer: 0,
          explain: "A shared existing source updates everywhere it appears."
        },
        {
          type: "truefalse",
          q: "Reusing sources across scenes helps keep a consistent look on your channel.",
          answer: true,
          explain: "Shared overlays and framing make every video feel like part of one brand."
        },
        {
          type: "fill",
          q: "Adding a source that already exists (rather than a new copy) is called adding an ____ source.",
          answer: "existing",
          accept: ["existing"],
          explain: "OBS offers 'Add Existing' to share a source between scenes."
        },
        {
          type: "match",
          q: "Match the choice to its behavior.",
          pairs: [
            ["Add New", "A fresh, independent source"],
            ["Add Existing", "A shared source linked across scenes"],
            ["Copy / Paste (Reference)", "Another way to share the same source"]
          ],
          explain: "New is independent; existing and reference paste share the same source."
        },
        {
          type: "truefalse",
          q: "Duplicating a scene collection is a safe way to experiment without breaking your setup.",
          answer: true,
          explain: "Working in a copy protects your known-good layout while you test changes."
        },
        {
          type: "mcq",
          q: "The main payoff of good reuse habits is:",
          choices: [
            "Faster setup and a consistent brand look",
            "Larger recording files",
            "Slower rendering",
            "More dropped frames"
          ],
          answer: 0,
          explain: "Reuse saves setup time and keeps your videos visually consistent."
        }
      ]
    }
  ]
});
