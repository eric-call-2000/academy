window.ACADEMY.addUnit("obs", {
  id: "unit-6",
  title: "Composition & Overlays",
  color: "#4b5bd4",
  icon: "🖼️",
  description: "Design polished layouts: overlays, lower thirds, browser sources, transitions, and Studio Mode.",
  lessons: [
    {
      id: "l41",
      title: "Designing a Layout",
      intro: "A good layout guides the eye: main content large, supporting elements small and out of the way.",
      questions: [
        {
          type: "mcq",
          q: "In a screen-plus-facecam layout, the main content should usually be:",
          choices: [
            "The largest element, with the facecam in a corner",
            "Hidden behind the webcam",
            "The same size as everything else",
            "Off-screen"
          ],
          answer: 0,
          explain: "The main content dominates; the facecam is a small corner accent."
        },
        {
          type: "truefalse",
          q: "Leaving some empty space (breathing room) makes a layout feel cleaner.",
          answer: true,
          explain: "Negative space prevents clutter and helps viewers focus."
        },
        {
          type: "fill",
          q: "A layout should guide the viewer's ____ to the most important element.",
          answer: "eye",
          accept: ["eye", "attention", "eyes"],
          explain: "Good composition directs attention to what matters."
        },
        {
          type: "match",
          q: "Match the element to its usual size in a tutorial layout.",
          pairs: [
            ["Screen / content", "Large, the focus"],
            ["Facecam", "Small corner box"],
            ["Logo", "Small, unobtrusive"]
          ],
          explain: "Content leads; camera and branding stay small."
        },
        {
          type: "truefalse",
          q: "Covering important on-screen content with your webcam is a common layout mistake.",
          answer: true,
          explain: "Place the facecam where it will not hide menus, code, or key UI."
        },
        {
          type: "mcq",
          q: "Consistency in layout across videos helps by:",
          choices: [
            "Making your channel instantly recognizable",
            "Slowing down your PC",
            "Increasing file size",
            "Removing your audio"
          ],
          answer: 0,
          explain: "A repeatable layout builds a recognizable brand feel."
        },
        {
          type: "truefalse",
          q: "Alignment and even spacing make a layout look intentional.",
          answer: true,
          explain: "Aligned, evenly spaced elements read as deliberate and polished."
        }
      ]
    },
    {
      id: "l42",
      title: "Lower Thirds",
      intro: "A lower third is a small graphic near the bottom that shows your name or a label.",
      questions: [
        {
          type: "mcq",
          q: "A lower third typically displays:",
          choices: [
            "Your name, title, or a short label",
            "The entire video",
            "Your bitrate",
            "A full-screen image"
          ],
          answer: 0,
          explain: "Lower thirds show identifying text near the bottom of the frame."
        },
        {
          type: "truefalse",
          q: "Lower thirds are usually placed in the lower portion of the screen so they do not block the main content.",
          answer: true,
          explain: "As the name says, they sit low to stay out of the way."
        },
        {
          type: "fill",
          q: "A name bar shown at the bottom of the screen is called a lower ____.",
          answer: "third",
          accept: ["third"],
          explain: "This graphic is called a lower third."
        },
        {
          type: "match",
          q: "Match the overlay element to its job.",
          pairs: [
            ["Lower third", "Shows your name or topic"],
            ["Logo/watermark", "Brands the video subtly"],
            ["Background", "Fills space behind sources"]
          ],
          explain: "Each overlay element has a distinct on-screen job."
        },
        {
          type: "truefalse",
          q: "A lower third that stays on screen the entire video can become distracting.",
          answer: true,
          explain: "Often you show it briefly, then hide it so it does not nag the viewer."
        },
        {
          type: "mcq",
          q: "A clean lower third design usually has:",
          choices: [
            "Readable text with good contrast and simple styling",
            "Tiny gray text on a busy background",
            "Flashing rainbow colors",
            "Text that fills the whole screen"
          ],
          answer: 0,
          explain: "Readability and restraint make a lower third look professional."
        },
        {
          type: "truefalse",
          q: "You can build a lower third from a Text source plus a shape or image in OBS.",
          answer: true,
          explain: "Combine Text and a Color/Image source, then group them as a lower third."
        }
      ]
    },
    {
      id: "l43",
      title: "Browser Sources",
      intro: "A Browser source displays a web page or overlay URL, great for alerts, chat, and widgets.",
      questions: [
        {
          type: "mcq",
          q: "A Browser source in OBS shows:",
          choices: [
            "A web page or overlay URL inside your scene",
            "Only static images",
            "Your microphone waveform",
            "The recording folder"
          ],
          answer: 0,
          explain: "Browser sources render a live web page as a layer in the scene."
        },
        {
          type: "truefalse",
          q: "Browser sources are commonly used for alerts, chat boxes, and animated overlays.",
          answer: true,
          explain: "Overlay services hand you a URL you drop into a Browser source."
        },
        {
          type: "fill",
          q: "A Browser source needs a ____ (web address) to display.",
          answer: "url",
          accept: ["url", "link", "web address"],
          explain: "You point a Browser source at a URL or local HTML file."
        },
        {
          type: "match",
          q: "Match the overlay to how it is typically added.",
          pairs: [
            ["Animated alert", "Browser source with a URL"],
            ["Static logo", "Image source"],
            ["Solid color bar", "Color source"]
          ],
          explain: "Browser sources handle dynamic web overlays; images and colors are simpler."
        },
        {
          type: "truefalse",
          q: "A Browser source can point to a local HTML file on your computer.",
          answer: true,
          explain: "You can load a local file path, not just a remote URL."
        },
        {
          type: "mcq",
          q: "To make a browser overlay's background see-through, the page should:",
          choices: [
            "Use a transparent background (no solid fill)",
            "Be pure white",
            "Be a JPEG",
            "Have a full black background"
          ],
          answer: 0,
          explain: "Transparent CSS backgrounds let the scene show through around the overlay."
        },
        {
          type: "truefalse",
          q: "Browser sources use some CPU, so many heavy ones can affect performance.",
          answer: true,
          explain: "Each browser source runs a mini-browser, which adds load."
        }
      ]
    },
    {
      id: "l44",
      title: "Images, Logos & Text",
      intro: "Static sources like Image, Text, and Color add branding and information cheaply.",
      questions: [
        {
          type: "mcq",
          q: "To add a channel logo, use which source?",
          choices: [
            "Image (a PNG with transparency)",
            "Audio Input Capture",
            "Display Capture",
            "Game Capture"
          ],
          answer: 0,
          explain: "A transparent PNG placed via an Image source works well for logos."
        },
        {
          type: "truefalse",
          q: "PNG images support transparency, which is ideal for logos and overlays.",
          answer: true,
          explain: "PNG's alpha channel lets logos sit cleanly over other sources."
        },
        {
          type: "fill",
          q: "A logo saved as a ____ file can have a transparent background.",
          answer: "png",
          accept: ["png"],
          explain: "PNG supports transparency; JPEG does not."
        },
        {
          type: "match",
          q: "Match the source to its content.",
          pairs: [
            ["Image", "A logo or picture"],
            ["Text (GDI+/FreeType)", "On-screen words"],
            ["Color Source", "A solid color block"]
          ],
          explain: "Image, Text, and Color are the simple static building blocks."
        },
        {
          type: "truefalse",
          q: "A JPEG logo will keep its transparent background in OBS.",
          answer: false,
          explain: "JPEG has no transparency, so its background will appear as a solid box."
        },
        {
          type: "mcq",
          q: "Keeping a logo small and in a corner is good practice because it:",
          choices: [
            "Brands the video without distracting from content",
            "Uses less internet",
            "Adds more scenes",
            "Improves audio"
          ],
          answer: 0,
          explain: "A subtle corner logo brands without stealing attention."
        },
        {
          type: "truefalse",
          q: "Text sources can be used for titles, section labels, or a call-to-action.",
          answer: true,
          explain: "Text sources are flexible for labels, titles, and prompts."
        }
      ]
    },
    {
      id: "l45",
      title: "Scene Transitions",
      intro: "Transitions define how one scene changes to another; Cut and Fade are the staples.",
      questions: [
        {
          type: "match",
          q: "Match each transition to how it looks.",
          pairs: [
            ["Cut", "Instant switch"],
            ["Fade", "Smooth blend between scenes"],
            ["Stinger", "An animated video wipe"]
          ],
          explain: "Cut is instant, Fade is smooth, and a Stinger uses a moving graphic."
        },
        {
          type: "mcq",
          q: "A Stinger transition uses:",
          choices: [
            "A short video clip to wipe between scenes",
            "Only a solid color",
            "Your microphone",
            "The recording folder"
          ],
          answer: 0,
          explain: "Stingers play a video (often with transparency) to cover the switch."
        },
        {
          type: "truefalse",
          q: "The default transition and its duration are set near the Scene Transitions area.",
          answer: true,
          explain: "You pick the transition type and length in the Scene Transitions box."
        },
        {
          type: "fill",
          q: "An instant, no-animation scene change is called a ____.",
          answer: "cut",
          accept: ["cut"],
          explain: "A Cut switches scenes instantly."
        },
        {
          type: "truefalse",
          q: "Very long or flashy transitions on every switch can feel amateurish.",
          answer: true,
          explain: "Overusing heavy transitions distracts; keep them quick and purposeful."
        },
        {
          type: "mcq",
          q: "A Stinger transition needs which asset?",
          choices: [
            "A video file (often with an alpha/transparent frame)",
            "A JPEG only",
            "A text file",
            "An audio-only clip"
          ],
          answer: 0,
          explain: "Stingers play a video file; alpha lets it reveal the next scene mid-animation."
        },
        {
          type: "truefalse",
          q: "For edited YouTube videos, you can add transitions later in your editor instead of in OBS.",
          answer: true,
          explain: "Recording-first creators often keep OBS simple and add transitions in editing."
        }
      ]
    },
    {
      id: "l46",
      title: "Studio Mode",
      intro: "Studio Mode gives you a preview scene to set up before pushing it live to the program output.",
      questions: [
        {
          type: "mcq",
          q: "Studio Mode adds a workflow with:",
          choices: [
            "A preview on the left and the live program on the right",
            "A second microphone",
            "Automatic uploading",
            "A larger canvas only"
          ],
          answer: 0,
          explain: "Studio Mode splits into a preview you edit and a program that is live."
        },
        {
          type: "truefalse",
          q: "In Studio Mode, you prepare a scene in preview, then click Transition to make it live.",
          answer: true,
          explain: "Preview lets you arrange before committing it to the live output."
        },
        {
          type: "fill",
          q: "In Studio Mode, the live output is called the ____ view.",
          answer: "program",
          accept: ["program", "programme"],
          explain: "Program is the live side; Preview is the staging side."
        },
        {
          type: "match",
          q: "Match the Studio Mode side to its role.",
          pairs: [
            ["Preview", "Where you set up next"],
            ["Program", "What viewers currently see"]
          ],
          explain: "Preview stages, Program broadcasts."
        },
        {
          type: "truefalse",
          q: "Studio Mode is most useful for live production where mistakes cannot be edited out.",
          answer: true,
          explain: "It shines live; for recorded, editable video it is often optional."
        },
        {
          type: "mcq",
          q: "For a solo recording-first creator, Studio Mode is:",
          choices: [
            "Optional, since you can fix things in editing",
            "Mandatory for any recording",
            "Required to add audio",
            "The only way to record"
          ],
          answer: 0,
          explain: "It is helpful for live work but not essential when you edit afterward."
        },
        {
          type: "truefalse",
          q: "You can enable or disable Studio Mode with a single button.",
          answer: true,
          explain: "A Studio Mode toggle turns the preview/program workflow on and off."
        }
      ]
    },
    {
      id: "l47",
      title: "Safe Zones & Aspect Ratio",
      intro: "Keep important elements away from edges, and design for where the video will be watched.",
      questions: [
        {
          type: "mcq",
          q: "Keeping key text away from the very edges of the frame helps because:",
          choices: [
            "Different players and platforms may crop the edges",
            "It uses less internet",
            "It adds scenes",
            "It boosts your mic"
          ],
          answer: 0,
          explain: "Edge content can be cut off by overlays, players, or platform cropping."
        },
        {
          type: "truefalse",
          q: "Standard YouTube videos use a 16:9 widescreen aspect ratio.",
          answer: true,
          explain: "16:9 is the standard landscape ratio for regular YouTube videos."
        },
        {
          type: "fill",
          q: "Vertical short-form video (Shorts) uses a ____ aspect ratio.",
          answer: "9:16",
          accept: ["9:16", "vertical"],
          explain: "Shorts are vertical, 9:16, the opposite of standard 16:9."
        },
        {
          type: "match",
          q: "Match the format to its aspect ratio.",
          pairs: [
            ["Standard YouTube video", "16:9"],
            ["YouTube Shorts / Reels", "9:16"],
            ["Square social post", "1:1"]
          ],
          explain: "Each platform format has its own aspect ratio to design for."
        },
        {
          type: "truefalse",
          q: "You should design your layout for the aspect ratio your video will actually be watched in.",
          answer: true,
          explain: "Composing for the final ratio avoids awkward cropping or empty bars."
        },
        {
          type: "mcq",
          q: "The 'safe zone' is:",
          choices: [
            "The central area unlikely to be cropped or covered",
            "Your recording folder",
            "A type of transition",
            "A microphone setting"
          ],
          answer: 0,
          explain: "The safe zone is the reliable central area for important elements."
        },
        {
          type: "truefalse",
          q: "YouTube overlays like timestamps and the progress bar can cover the bottom edge.",
          answer: true,
          explain: "Player controls and info sit along the bottom, so keep vital content higher."
        }
      ]
    },
    {
      id: "l48",
      title: "Building a Branded Look",
      intro: "Consistent colors, fonts, and overlays across videos turn scenes into a recognizable brand.",
      questions: [
        {
          type: "order",
          q: "Order the steps to build a reusable branded scene.",
          items: [
            "Pick consistent colors and a font",
            "Create your overlay elements (logo, lower third)",
            "Group them into a reusable overlay",
            "Add that overlay across your scenes"
          ],
          explain: "Define the style, build the pieces, group them, and reuse everywhere."
        },
        {
          type: "mcq",
          q: "A recognizable brand look mostly comes from:",
          choices: [
            "Consistent colors, fonts, and layout across videos",
            "Using a different style every video",
            "The highest possible bitrate",
            "Recording in the dark"
          ],
          answer: 0,
          explain: "Consistency in the visual system is what makes a brand recognizable."
        },
        {
          type: "truefalse",
          q: "Reusing the same overlay across scenes keeps your videos visually consistent.",
          answer: true,
          explain: "A shared overlay group keeps every scene on-brand."
        },
        {
          type: "fill",
          q: "Keeping the same colors and ____ across videos strengthens your brand.",
          answer: "fonts",
          accept: ["fonts", "font", "typography"],
          explain: "Consistent typography is a core part of a brand look."
        },
        {
          type: "match",
          q: "Match the brand element to its purpose.",
          pairs: [
            ["Color palette", "A consistent mood and identity"],
            ["Logo", "Instant recognition"],
            ["Consistent layout", "A familiar, professional feel"]
          ],
          explain: "Palette, logo, and layout together form your visual brand."
        },
        {
          type: "truefalse",
          q: "A branded look must be complicated and busy to be effective.",
          answer: false,
          explain: "Simple, consistent branding usually reads as more professional than busy design."
        },
        {
          type: "mcq",
          q: "Saving your finished branded setup as a scene collection lets you:",
          choices: [
            "Reuse and back up your whole look easily",
            "Increase your frame rate",
            "Remove your audio",
            "Speed up your internet"
          ],
          answer: 0,
          explain: "A scene collection captures your branded scenes for reuse and backup."
        }
      ]
    }
  ]
});
