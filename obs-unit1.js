window.ACADEMY.addUnit("obs", {
  id: "unit-1",
  title: "Getting Started with OBS",
  color: "#4b5bd4",
  icon: "🎥",
  description: "What OBS Studio is, how to install it, the interface, and your very first recording.",
  lessons: [
    {
      id: "l1",
      title: "What Is OBS Studio?",
      intro: "OBS Studio is free, open-source software for recording and live streaming your screen, camera, and audio.",
      questions: [
        {
          type: "mcq",
          q: "What is OBS Studio?",
          choices: [
            "Free, open-source software for recording and streaming video",
            "A paid video editor for cutting clips together",
            "A cloud service that hosts your finished videos",
            "A webcam you plug into your computer"
          ],
          answer: 0,
          explain: "OBS (Open Broadcaster Software) Studio is free and open-source, used to record and live stream."
        },
        {
          type: "truefalse",
          q: "OBS Studio is completely free and has no watermark on your recordings.",
          answer: true,
          explain: "OBS is free and open-source, and it never adds a watermark to your output."
        },
        {
          type: "mcq",
          q: "OBS can do both of which two core jobs?",
          choices: [
            "Recording video files and live streaming",
            "Printing documents and sending email",
            "Editing photos and designing logos",
            "Booking meetings and taking notes"
          ],
          answer: 0,
          explain: "The two headline jobs of OBS are recording to a file and broadcasting a live stream."
        },
        {
          type: "fill",
          q: "OBS is short for Open ____ Software.",
          answer: "broadcaster",
          accept: ["broadcaster"],
          explain: "OBS stands for Open Broadcaster Software."
        },
        {
          type: "truefalse",
          q: "OBS only runs on Windows and cannot be used on Mac or Linux.",
          answer: false,
          explain: "OBS Studio is cross-platform: Windows, macOS, and Linux."
        },
        {
          type: "match",
          q: "Match each term to what it means.",
          pairs: [
            ["Recording", "Saving video to a file on your computer"],
            ["Streaming", "Sending live video to a platform like YouTube"],
            ["Open-source", "The code is public and free to use"]
          ],
          explain: "Recording writes to disk, streaming sends live, and open-source means the code is freely available."
        },
        {
          type: "mcq",
          q: "For a YouTube creator, the most common first use of OBS is:",
          choices: [
            "Recording high-quality video to edit and upload later",
            "Encrypting files for security",
            "Compressing photos for a website",
            "Managing a mailing list"
          ],
          answer: 0,
          explain: "Recording-first creators use OBS to capture footage they later edit and publish."
        }
      ]
    },
    {
      id: "l2",
      title: "Installing OBS",
      intro: "Download OBS from the official site and match the build to your operating system.",
      questions: [
        {
          type: "mcq",
          q: "Where should you download OBS from to stay safe?",
          choices: [
            "The official obsproject.com website",
            "A random file-sharing link",
            "An email attachment from a stranger",
            "A pop-up ad promising a 'free upgrade'"
          ],
          answer: 0,
          explain: "Always download OBS from the official obsproject.com to avoid bundled malware."
        },
        {
          type: "truefalse",
          q: "You should pick the OBS installer that matches your operating system.",
          answer: true,
          explain: "There are separate builds for Windows, macOS, and Linux; use the one for your OS."
        },
        {
          type: "mcq",
          q: "On first launch, the Auto-Configuration Wizard helps by:",
          choices: [
            "Suggesting settings based on recording or streaming and your hardware",
            "Editing your existing video files",
            "Uploading your videos automatically",
            "Buying a capture card for you"
          ],
          answer: 0,
          explain: "The wizard proposes a starting configuration tuned for recording or streaming on your machine."
        },
        {
          type: "truefalse",
          q: "You must pay for a license key before OBS will let you record.",
          answer: false,
          explain: "OBS is free with no license key or paid tier required."
        },
        {
          type: "fill",
          q: "The official home for OBS downloads is obs____.com.",
          answer: "project",
          accept: ["project"],
          explain: "The official site is obsproject.com."
        },
        {
          type: "order",
          q: "Order the steps to get OBS running the first time.",
          items: [
            "Go to the official website",
            "Download the build for your OS",
            "Run the installer",
            "Launch OBS and run the auto-config wizard"
          ],
          explain: "Download from the official site, install, launch, and let the wizard set a baseline."
        },
        {
          type: "mcq",
          q: "If you record video for editing later, in the wizard you should optimize for:",
          choices: [
            "Recording, not streaming",
            "Streaming only",
            "The lowest possible quality",
            "Audio only"
          ],
          answer: 0,
          explain: "A recording-first creator tells the wizard to optimize for recording quality."
        }
      ]
    },
    {
      id: "l3",
      title: "The OBS Interface",
      intro: "The main window is built from docks: Scenes, Sources, Audio Mixer, Controls, and the preview.",
      questions: [
        {
          type: "match",
          q: "Match each dock to its job.",
          pairs: [
            ["Scenes", "Your different layouts you switch between"],
            ["Sources", "The items shown inside the current scene"],
            ["Audio Mixer", "Volume and metering for your audio"],
            ["Controls", "Start/stop recording and streaming buttons"]
          ],
          explain: "Scenes hold layouts, Sources hold items, the Mixer handles audio, and Controls start capture."
        },
        {
          type: "mcq",
          q: "The large area in the middle of OBS is the:",
          choices: [
            "Preview, showing what your recording looks like",
            "File explorer",
            "Web browser",
            "Settings menu"
          ],
          answer: 0,
          explain: "The preview shows the live composition of your current scene."
        },
        {
          type: "truefalse",
          q: "OBS docks can be moved, floated, or rearranged to fit how you work.",
          answer: true,
          explain: "Docks are customizable; you can drag, float, and hide them via the Docks menu."
        },
        {
          type: "fill",
          q: "The ____ Mixer dock shows volume bars and lets you adjust audio levels.",
          answer: "audio",
          accept: ["audio"],
          explain: "The Audio Mixer displays levels and controls for each audio source."
        },
        {
          type: "mcq",
          q: "Where do you click to begin capturing video to a file?",
          choices: [
            "Start Recording in the Controls dock",
            "The Scenes dock",
            "The preview area",
            "The Sources dock"
          ],
          answer: 0,
          explain: "Start Recording lives in the Controls dock on the right."
        },
        {
          type: "truefalse",
          q: "The Sources list on top of another source appears in front of it in the preview.",
          answer: true,
          explain: "Sources higher in the list render in front of those below them."
        },
        {
          type: "mcq",
          q: "If you accidentally close a dock, you can bring it back from:",
          choices: [
            "The Docks menu at the top",
            "The recycle bin",
            "A reinstall of OBS",
            "The Windows registry"
          ],
          answer: 0,
          explain: "The Docks menu lets you re-enable any dock and reset the layout."
        }
      ]
    },
    {
      id: "l4",
      title: "Canvas vs. Output Resolution",
      intro: "The base (canvas) resolution is where you design; the output resolution is what actually gets saved.",
      questions: [
        {
          type: "mcq",
          q: "The Base (Canvas) Resolution controls:",
          choices: [
            "The size of the space you arrange sources on",
            "The exact size of your saved file only",
            "Your monitor's refresh rate",
            "Your microphone's sample rate"
          ],
          answer: 0,
          explain: "The canvas is your design space where you place and size sources."
        },
        {
          type: "mcq",
          q: "The Output (Scaled) Resolution controls:",
          choices: [
            "The resolution of the recorded or streamed video",
            "How bright your webcam is",
            "The number of scenes you can have",
            "Your keyboard shortcuts"
          ],
          answer: 0,
          explain: "The output resolution is the final pixel size of what OBS records or streams."
        },
        {
          type: "truefalse",
          q: "For a standard HD YouTube video, 1920x1080 is a common output resolution.",
          answer: true,
          explain: "1080p (1920x1080) is the standard for most YouTube uploads."
        },
        {
          type: "fill",
          q: "1920x1080 is commonly called ____ or Full HD.",
          answer: "1080p",
          accept: ["1080p", "1080"],
          explain: "1920x1080 is known as 1080p or Full HD."
        },
        {
          type: "match",
          q: "Match each resolution to its common name.",
          pairs: [
            ["1280x720", "720p / HD"],
            ["1920x1080", "1080p / Full HD"],
            ["3840x2160", "2160p / 4K"]
          ],
          explain: "These are the standard step-ups: 720p, 1080p, and 4K."
        },
        {
          type: "truefalse",
          q: "Setting output resolution higher than your canvas will add real detail that was never captured.",
          answer: false,
          explain: "Upscaling cannot invent detail; it only stretches what was captured, often looking soft."
        },
        {
          type: "mcq",
          q: "Recording at a higher resolution than you need mainly costs you:",
          choices: [
            "Larger files and more CPU/GPU load",
            "Nothing at all, it is always free",
            "Your internet password",
            "The ability to add audio"
          ],
          answer: 0,
          explain: "Higher resolution means bigger files and heavier encoding load, so match it to your needs."
        }
      ]
    },
    {
      id: "l5",
      title: "Your First Recording",
      intro: "With a source added, one button starts and stops a recording that saves to your chosen folder.",
      questions: [
        {
          type: "order",
          q: "Order the steps to make your first recording.",
          items: [
            "Add a source (like Display Capture)",
            "Set your recording folder in Settings",
            "Click Start Recording",
            "Click Stop Recording"
          ],
          explain: "Add something to capture, choose where files save, then start and stop."
        },
        {
          type: "mcq",
          q: "Before recording, you should confirm which is set correctly?",
          choices: [
            "The recording output folder path",
            "Your desktop wallpaper",
            "Your browser bookmarks",
            "The system clock font"
          ],
          answer: 0,
          explain: "Knowing where files land saves you hunting for the recording afterward."
        },
        {
          type: "truefalse",
          q: "OBS can record even if you have not set up any streaming account.",
          answer: true,
          explain: "Recording is fully independent of streaming; no stream account is needed."
        },
        {
          type: "fill",
          q: "You click Start Recording and later Stop Recording in the ____ dock.",
          answer: "controls",
          accept: ["controls", "control"],
          explain: "Both buttons live in the Controls dock."
        },
        {
          type: "mcq",
          q: "A blank or black recording most often means:",
          choices: [
            "No source was added or the source is not capturing",
            "Your file is corrupted forever",
            "OBS is not installed",
            "Your monitor is off"
          ],
          answer: 0,
          explain: "A black screen usually means there is no working source in the scene."
        },
        {
          type: "truefalse",
          q: "You can find your finished recording via File then Show Recordings.",
          answer: true,
          explain: "File > Show Recordings opens the folder holding your captured files."
        },
        {
          type: "mcq",
          q: "After stopping, the fastest way to review your clip is to:",
          choices: [
            "Open the file from the recordings folder",
            "Re-record it from scratch",
            "Reinstall OBS",
            "Change your resolution"
          ],
          answer: 0,
          explain: "Just open the saved file to review what you captured."
        }
      ]
    },
    {
      id: "l6",
      title: "Recording vs. Streaming",
      intro: "Recording saves a file for editing later; streaming sends live video to viewers in real time.",
      questions: [
        {
          type: "match",
          q: "Match each mode to what it is best for.",
          pairs: [
            ["Recording", "Polished videos you edit before publishing"],
            ["Streaming", "Live, real-time interaction with viewers"]
          ],
          explain: "Record for edited uploads; stream for live audiences."
        },
        {
          type: "truefalse",
          q: "Recording lets you re-do mistakes and edit before anyone sees it.",
          answer: true,
          explain: "Because nothing is live, you can retake and cut freely before publishing."
        },
        {
          type: "mcq",
          q: "A key advantage of recording over streaming for quality is:",
          choices: [
            "You can use higher quality settings without worrying about internet speed",
            "It uses no disk space",
            "It requires no microphone",
            "It cannot be edited"
          ],
          answer: 0,
          explain: "Recording is limited by your disk, not your upload speed, so you can push quality higher."
        },
        {
          type: "truefalse",
          q: "Streaming quality is limited by your internet upload speed.",
          answer: true,
          explain: "Live streams must be uploaded in real time, so your upload bandwidth caps the bitrate."
        },
        {
          type: "fill",
          q: "For a YouTube channel of edited videos, the recording-first workflow starts by ____ your footage.",
          answer: "recording",
          accept: ["recording", "capturing"],
          explain: "You record raw footage first, then edit, then upload."
        },
        {
          type: "mcq",
          q: "Which is NOT true of recording compared to streaming?",
          choices: [
            "It must be uploaded live as it happens",
            "It can be edited afterward",
            "It can use higher bitrates safely",
            "It is saved to your disk"
          ],
          answer: 0,
          explain: "Recording is saved locally and not uploaded live; that is streaming's constraint."
        },
        {
          type: "truefalse",
          q: "OBS forces you to choose recording or streaming and cannot do both at once.",
          answer: false,
          explain: "OBS can record and stream simultaneously if you want."
        }
      ]
    },
    {
      id: "l7",
      title: "Frame Rate Basics",
      intro: "Frame rate (FPS) is how many images per second your video shows; common choices are 30 and 60.",
      questions: [
        {
          type: "mcq",
          q: "FPS stands for:",
          choices: [
            "Frames per second",
            "Files per session",
            "Fast pixel scaling",
            "Full picture stream"
          ],
          answer: 0,
          explain: "FPS is frames per second, the number of images shown each second."
        },
        {
          type: "mcq",
          q: "For most talking-head or tutorial YouTube videos, a good frame rate is:",
          choices: [
            "30 fps",
            "5 fps",
            "300 fps",
            "1 fps"
          ],
          answer: 0,
          explain: "30 fps is smooth and efficient for tutorials and talking-head content."
        },
        {
          type: "truefalse",
          q: "60 fps is often chosen for fast motion like gaming or sports footage.",
          answer: true,
          explain: "60 fps captures fast movement more smoothly, which suits gaming and action."
        },
        {
          type: "fill",
          q: "A higher frame rate makes motion look smoother but produces a ____ file.",
          answer: "larger",
          accept: ["larger", "bigger"],
          explain: "More frames per second means more data, so files get larger."
        },
        {
          type: "match",
          q: "Match the content to a sensible frame rate.",
          pairs: [
            ["Tutorial / talking head", "30 fps"],
            ["Fast-paced gameplay", "60 fps"]
          ],
          explain: "30 fps suits calm content; 60 fps suits fast motion."
        },
        {
          type: "truefalse",
          q: "Recording at 60 fps uses more CPU/GPU and disk space than 30 fps.",
          answer: true,
          explain: "Doubling the frame rate roughly doubles the encoding and storage cost."
        },
        {
          type: "mcq",
          q: "The safest habit is to record at a frame rate that:",
          choices: [
            "Matches what you will publish and your hardware can handle",
            "Is always the maximum number possible",
            "Changes randomly each recording",
            "Is always 1 fps to save space"
          ],
          answer: 0,
          explain: "Pick a frame rate your hardware sustains and that matches your final video."
        }
      ]
    },
    {
      id: "l8",
      title: "Saving Your Setup",
      intro: "OBS remembers your work, but knowing where settings, scenes, and files live keeps you in control.",
      questions: [
        {
          type: "mcq",
          q: "Your scenes and sources are saved automatically as part of a:",
          choices: [
            "Scene collection",
            "Screenshot",
            "Browser bookmark",
            "Text document you type yourself"
          ],
          answer: 0,
          explain: "OBS stores your layouts in a scene collection that it saves for you."
        },
        {
          type: "truefalse",
          q: "You generally do not need to manually save your scenes; OBS saves them as you work.",
          answer: true,
          explain: "OBS auto-saves your current scene collection and profile."
        },
        {
          type: "mcq",
          q: "The place to change quality, resolution, and file paths is:",
          choices: [
            "The Settings window",
            "The preview area",
            "The Scenes dock",
            "The Windows lock screen"
          ],
          answer: 0,
          explain: "Settings holds Output, Video, Audio, and Hotkey configuration."
        },
        {
          type: "fill",
          q: "Recording quality and output folder are configured in the ____ window.",
          answer: "settings",
          accept: ["settings"],
          explain: "The Settings window is where output and file options live."
        },
        {
          type: "order",
          q: "Order a clean pre-record checklist.",
          items: [
            "Check the correct scene is selected",
            "Confirm audio meters are moving",
            "Verify the output folder and quality",
            "Click Start Recording"
          ],
          explain: "Confirm scene, audio, and output settings before you hit record."
        },
        {
          type: "truefalse",
          q: "It is smart to do a short test recording before an important session.",
          answer: true,
          explain: "A 10-second test catches audio, framing, and settings problems before they cost you a take."
        },
        {
          type: "mcq",
          q: "The single best habit for a beginner is to:",
          choices: [
            "Record a short test and review it before the real take",
            "Never check settings and hope for the best",
            "Delete OBS after each use",
            "Record only with the app minimized"
          ],
          answer: 0,
          explain: "A quick test recording is the cheapest insurance against a ruined session."
        }
      ]
    }
  ]
});
