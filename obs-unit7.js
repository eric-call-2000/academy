window.ACADEMY.addUnit("obs", {
  id: "unit-7",
  title: "Workflow & Efficiency",
  color: "#4b5bd4",
  icon: "⚡",
  description: "Record faster and cleaner: hotkeys, profiles, scene collections, replay buffer, and editing-friendly habits.",
  lessons: [
    {
      id: "l49",
      title: "Hotkeys",
      intro: "Hotkeys let you start, stop, mute, and switch without clicking, keeping the app off-camera.",
      questions: [
        {
          type: "mcq",
          q: "Hotkeys in OBS are useful because they let you:",
          choices: [
            "Control OBS without switching windows or clicking",
            "Increase your internet speed",
            "Add more RAM",
            "Change your monitor size"
          ],
          answer: 0,
          explain: "Hotkeys trigger actions while you stay in your game or app."
        },
        {
          type: "truefalse",
          q: "You can set a hotkey to start and stop recording.",
          answer: true,
          explain: "Start/Stop Recording each have hotkey fields in Settings > Hotkeys."
        },
        {
          type: "fill",
          q: "Keyboard shortcuts for OBS actions are configured in Settings then ____.",
          answer: "hotkeys",
          accept: ["hotkeys"],
          explain: "The Hotkeys settings page holds all shortcut bindings."
        },
        {
          type: "match",
          q: "Match the hotkey to a common action.",
          pairs: [
            ["Start/Stop Recording", "Begin or end capture"],
            ["Mute/Unmute Mic", "Toggle your microphone"],
            ["Switch Scene", "Jump to another layout"]
          ],
          explain: "The most-used hotkeys are record, mute, and scene switching."
        },
        {
          type: "truefalse",
          q: "Choosing hotkeys that clash with your game or app can cause conflicts.",
          answer: true,
          explain: "Pick combinations your other software does not already use."
        },
        {
          type: "mcq",
          q: "A push-to-talk or push-to-mute hotkey helps by:",
          choices: [
            "Letting you quickly silence background noise or sneezes",
            "Uploading your video",
            "Adding scenes",
            "Improving your camera"
          ],
          answer: 0,
          explain: "A quick mute hotkey keeps coughs and interruptions out of the recording."
        },
        {
          type: "truefalse",
          q: "OBS hotkeys can work even when OBS is not the active window.",
          answer: true,
          explain: "Global hotkeys let you control OBS while focused on another app."
        }
      ]
    },
    {
      id: "l50",
      title: "Profiles",
      intro: "A profile stores your output, video, audio, and hotkey settings so you can switch setups fast.",
      questions: [
        {
          type: "mcq",
          q: "An OBS Profile saves:",
          choices: [
            "Settings like output, resolution, bitrate, and hotkeys",
            "Your scenes and sources",
            "Your recorded video files",
            "Your desktop wallpaper"
          ],
          answer: 0,
          explain: "Profiles store settings; scene collections store the scenes themselves."
        },
        {
          type: "truefalse",
          q: "You can keep one profile for recording and another for streaming.",
          answer: true,
          explain: "Separate profiles let you switch between recording and streaming settings instantly."
        },
        {
          type: "fill",
          q: "Your settings (not scenes) are stored in a ____.",
          answer: "profile",
          accept: ["profile"],
          explain: "A profile holds settings; scenes live in a scene collection."
        },
        {
          type: "match",
          q: "Match what each container stores.",
          pairs: [
            ["Profile", "Output, video, audio, hotkey settings"],
            ["Scene Collection", "Your scenes and sources"]
          ],
          explain: "Profiles = settings; Scene Collections = layouts."
        },
        {
          type: "truefalse",
          q: "Switching profiles also changes which scenes you see.",
          answer: false,
          explain: "Scenes are tied to scene collections, not profiles; they switch independently."
        },
        {
          type: "mcq",
          q: "A good reason to make a second profile is:",
          choices: [
            "Different quality settings for recording vs. streaming",
            "To delete your footage",
            "To disable audio",
            "To slow down your PC"
          ],
          answer: 0,
          explain: "Profiles make it easy to keep distinct settings per use case."
        },
        {
          type: "truefalse",
          q: "Profiles can be exported to back up or move your settings to another PC.",
          answer: true,
          explain: "Exporting a profile lets you save or transfer your configuration."
        }
      ]
    },
    {
      id: "l51",
      title: "Scene Collections",
      intro: "A scene collection is a whole set of scenes; keep separate collections per project or channel.",
      questions: [
        {
          type: "mcq",
          q: "A scene collection holds:",
          choices: [
            "A complete set of scenes and their sources",
            "Only your bitrate",
            "Your recorded files",
            "Your microphone driver"
          ],
          answer: 0,
          explain: "A scene collection is the full group of scenes you have built."
        },
        {
          type: "truefalse",
          q: "You might keep one scene collection for tutorials and another for gaming.",
          answer: true,
          explain: "Separate collections keep each show's layouts organized."
        },
        {
          type: "fill",
          q: "A full set of scenes is called a scene ____.",
          answer: "collection",
          accept: ["collection"],
          explain: "The container for scenes is a scene collection."
        },
        {
          type: "match",
          q: "Match the task to the right container.",
          pairs: [
            ["Change recording quality", "Profile"],
            ["Rearrange your layouts", "Scene Collection"],
            ["Back up your look", "Export the scene collection"]
          ],
          explain: "Settings live in profiles; layouts live in scene collections."
        },
        {
          type: "truefalse",
          q: "Duplicating a scene collection is a safe way to experiment without risking your working setup.",
          answer: true,
          explain: "Work in a copy so your known-good layout stays intact."
        },
        {
          type: "mcq",
          q: "Exporting a scene collection is useful for:",
          choices: [
            "Backing it up or moving it to another computer",
            "Uploading your video",
            "Increasing frame rate",
            "Muting your mic"
          ],
          answer: 0,
          explain: "Export creates a portable backup of all your scenes and sources."
        },
        {
          type: "truefalse",
          q: "Overlays and images are embedded in the scene collection file automatically.",
          answer: false,
          explain: "Collections reference file paths, so move the image/overlay files too when transferring."
        }
      ]
    },
    {
      id: "l52",
      title: "Source Toggles & Visibility",
      intro: "Showing and hiding sources on the fly lets one scene do the work of several.",
      questions: [
        {
          type: "mcq",
          q: "The eye icon next to a source controls its:",
          choices: [
            "Visibility (shown or hidden)",
            "Volume",
            "File format",
            "Frame rate"
          ],
          answer: 0,
          explain: "The eye toggles whether a source appears in the scene."
        },
        {
          type: "truefalse",
          q: "You can bind a hotkey to show or hide a specific source.",
          answer: true,
          explain: "Each source has show/hide hotkey fields for quick toggling."
        },
        {
          type: "fill",
          q: "Clicking the ____ icon hides a source without deleting it.",
          answer: "eye",
          accept: ["eye"],
          explain: "The eye icon toggles source visibility."
        },
        {
          type: "match",
          q: "Match the toggle use to its benefit.",
          pairs: [
            ["Hide facecam for a demo", "Show only the screen briefly"],
            ["Show a 'be right back' image", "Cover a short pause"],
            ["Toggle an overlay", "Reveal info only when needed"]
          ],
          explain: "Visibility toggles let one scene flex to many situations."
        },
        {
          type: "truefalse",
          q: "Hiding a source is reversible and does not affect the source's settings.",
          answer: true,
          explain: "Toggling visibility just shows or hides; nothing is lost."
        },
        {
          type: "mcq",
          q: "Toggling sources instead of building many scenes can:",
          choices: [
            "Simplify your setup and speed up recording",
            "Increase your upload speed",
            "Delete your files",
            "Lower your resolution"
          ],
          answer: 0,
          explain: "Smart toggles reduce the number of scenes you must manage."
        },
        {
          type: "truefalse",
          q: "A source hidden in one scene is automatically hidden in all scenes.",
          answer: false,
          explain: "Visibility is per-scene unless the source is shared and toggled the same way."
        }
      ]
    },
    {
      id: "l53",
      title: "Replay Buffer",
      intro: "The replay buffer keeps recent seconds in memory so you can save a highlight after it happens.",
      questions: [
        {
          type: "mcq",
          q: "The Replay Buffer lets you:",
          choices: [
            "Save the last several seconds after something great happens",
            "Record in 4K only",
            "Upload to YouTube",
            "Mute your mic"
          ],
          answer: 0,
          explain: "It continuously buffers recent footage so you can capture a moment retroactively."
        },
        {
          type: "truefalse",
          q: "You press a hotkey to save the replay buffer to a clip.",
          answer: true,
          explain: "A Save Replay hotkey writes the buffered footage to a file."
        },
        {
          type: "fill",
          q: "The buffer keeps the last N seconds in ____ until you save it.",
          answer: "memory",
          accept: ["memory", "ram"],
          explain: "The replay buffer holds recent footage in memory (RAM)."
        },
        {
          type: "match",
          q: "Match the tool to when to use it.",
          pairs: [
            ["Replay Buffer", "Grab a moment after it happened"],
            ["Start Recording", "Capture a full planned session"],
            ["Screenshot", "Save a single still frame"]
          ],
          explain: "Buffer for surprises, record for planned takes, screenshot for stills."
        },
        {
          type: "truefalse",
          q: "The replay buffer uses some system memory while it is active.",
          answer: true,
          explain: "Holding recent frames in RAM consumes memory, scaling with buffer length."
        },
        {
          type: "mcq",
          q: "The replay buffer is especially handy for:",
          choices: [
            "Capturing an unexpected great moment in gameplay",
            "Editing your video",
            "Uploading automatically",
            "Improving your lighting"
          ],
          answer: 0,
          explain: "It shines when you cannot predict the highlight in advance."
        },
        {
          type: "truefalse",
          q: "You must start the replay buffer before it can capture anything.",
          answer: true,
          explain: "The buffer only records while it is running, so start it first."
        }
      ]
    },
    {
      id: "l54",
      title: "Screenshots & Stills",
      intro: "OBS can grab a single frame of a source or the whole output for thumbnails and stills.",
      questions: [
        {
          type: "mcq",
          q: "The Screenshot feature captures:",
          choices: [
            "A still image of a source or the whole output",
            "A full video recording",
            "Your audio only",
            "Your settings file"
          ],
          answer: 0,
          explain: "Screenshot saves a single frame as an image."
        },
        {
          type: "truefalse",
          q: "Screenshots can be a quick way to grab raw material for a thumbnail.",
          answer: true,
          explain: "A clean frame from OBS is a handy starting point for a thumbnail."
        },
        {
          type: "fill",
          q: "Right-clicking a source offers Screenshot (____) to capture just that source.",
          answer: "source",
          accept: ["source"],
          explain: "Screenshot (Source) captures only the selected source."
        },
        {
          type: "match",
          q: "Match the capture to its output.",
          pairs: [
            ["Screenshot", "A single image"],
            ["Recording", "A video file"],
            ["Replay Buffer", "A short recent clip"]
          ],
          explain: "Each feature produces a different kind of output."
        },
        {
          type: "truefalse",
          q: "You can assign a hotkey to take a screenshot instantly.",
          answer: true,
          explain: "Screenshot actions have hotkey fields like other actions."
        },
        {
          type: "mcq",
          q: "For a high-quality thumbnail base, it helps to screenshot:",
          choices: [
            "A well-lit, well-framed moment",
            "A blurry, dark frame",
            "The OBS settings window",
            "An empty scene"
          ],
          answer: 0,
          explain: "A sharp, well-composed frame makes a better thumbnail starting point."
        }
      ]
    },
    {
      id: "l55",
      title: "Editing-Friendly Recording",
      intro: "Small habits while recording save big time in editing later.",
      questions: [
        {
          type: "mcq",
          q: "A habit that speeds up editing is:",
          choices: [
            "Clapping or making a marker sound to find edit points",
            "Recording with the mic muted",
            "Never testing audio",
            "Filling your disk"
          ],
          answer: 0,
          explain: "A clap or verbal marker gives you an obvious audio spike to cut on."
        },
        {
          type: "truefalse",
          q: "Recording mic and desktop on separate tracks makes editing more flexible.",
          answer: true,
          explain: "Separate tracks let you fix or balance each independently in post."
        },
        {
          type: "fill",
          q: "Pausing and restating a sentence after a mistake gives you a clean ____ to cut to.",
          answer: "take",
          accept: ["take", "line"],
          explain: "A fresh take after a flub gives the editor a clean version to keep."
        },
        {
          type: "match",
          q: "Match the recording habit to its editing payoff.",
          pairs: [
            ["Pause after a flub", "Easy clean cut"],
            ["Separate audio tracks", "Independent audio fixes"],
            ["Consistent framing", "Less correction needed"]
          ],
          explain: "Good on-set habits reduce editing effort later."
        },
        {
          type: "truefalse",
          q: "Leaving a couple of seconds of silence at the start and end helps editing.",
          answer: true,
          explain: "Handles of silence give room to trim and add fades cleanly."
        },
        {
          type: "mcq",
          q: "The overall goal of editing-friendly recording is to:",
          choices: [
            "Make the raw footage easy and fast to cut",
            "Make files as large as possible",
            "Avoid ever editing",
            "Reduce your resolution"
          ],
          answer: 0,
          explain: "Good capture habits turn a painful edit into a quick one."
        },
        {
          type: "truefalse",
          q: "Recording-first creators benefit more from these habits than pure live streamers do.",
          answer: true,
          explain: "Since recorded video is edited, capture habits pay off directly in post."
        }
      ]
    },
    {
      id: "l56",
      title: "A Repeatable Workflow",
      intro: "Turn your setup into a routine so every recording starts fast and finishes clean.",
      questions: [
        {
          type: "order",
          q: "Order a repeatable recording workflow.",
          items: [
            "Load the right profile and scene collection",
            "Run a short audio and video test",
            "Record using hotkeys",
            "Offload and back up the footage"
          ],
          explain: "Load, test, record, and back up: a reliable cycle every time."
        },
        {
          type: "mcq",
          q: "A repeatable workflow mainly helps by:",
          choices: [
            "Reducing mistakes and setup time",
            "Increasing your bitrate",
            "Slowing your PC",
            "Removing audio"
          ],
          answer: 0,
          explain: "Routine reduces errors and gets you recording faster."
        },
        {
          type: "truefalse",
          q: "Backing up footage before deleting the originals prevents heartbreak.",
          answer: true,
          explain: "A backup guards against accidental loss of an irreplaceable take."
        },
        {
          type: "fill",
          q: "Saving your setup as a profile and scene ____ makes it instantly reloadable.",
          answer: "collection",
          accept: ["collection"],
          explain: "Profiles plus scene collections let you reload your whole setup."
        },
        {
          type: "match",
          q: "Match the workflow step to its tool.",
          pairs: [
            ["Load settings", "Profile"],
            ["Load layouts", "Scene Collection"],
            ["Trigger recording", "Hotkeys"]
          ],
          explain: "Profiles, collections, and hotkeys power a smooth workflow."
        },
        {
          type: "truefalse",
          q: "A short test before every session is a waste of time for experienced creators.",
          answer: false,
          explain: "Even pros test; devices and defaults change, and a test is cheap insurance."
        },
        {
          type: "mcq",
          q: "The payoff of mastering workflow is:",
          choices: [
            "You spend energy on content, not fighting your setup",
            "Bigger files",
            "Slower uploads",
            "Worse audio"
          ],
          answer: 0,
          explain: "A smooth workflow frees your attention for making good content."
        }
      ]
    }
  ]
});
