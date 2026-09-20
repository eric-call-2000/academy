window.ACADEMY.addUnit("overlays", {
  id: "unit-1",
  title: "Overlays & Browser Sources",
  color: "#2FB6FF",
  icon: "🎛️",
  description: "What a stream overlay is, how OBS loads one as a Browser Source, and the Wibbly asset set you'll build on.",
  lessons: [
    {
      id: "l1",
      title: "What Is an Overlay?",
      intro: "An overlay is the graphics layer — frames, alerts, bars — drawn on top of your gameplay or camera.",
      questions: [
        {
          type: "mcq",
          q: "A stream overlay is:",
          choices: [
            "A graphics layer drawn on top of your video (frames, alerts, bars)",
            "The game itself",
            "Your microphone",
            "The recording file"
          ],
          answer: 0,
          explain: "Overlays are the branded graphics layered over your capture, not the capture itself."
        },
        {
          type: "truefalse",
          q: "Overlays sit above your webcam and gameplay sources in the scene.",
          answer: true,
          explain: "Overlay sources are stacked in front so their graphics appear over the content."
        },
        {
          type: "fill",
          q: "The branded graphics layer on top of your video is called an ____.",
          answer: "overlay",
          accept: ["overlay"],
          explain: "This graphics layer is the overlay."
        },
        {
          type: "match",
          q: "Match each overlay piece to what it shows.",
          pairs: [
            ["Facecam frame", "A border around your webcam"],
            ["Alert", "A follower/sub/donation toast"],
            ["Goal bar", "Progress toward a target"]
          ],
          explain: "Each overlay element has a distinct on-screen job."
        },
        {
          type: "truefalse",
          q: "The Wibbly overlays in this course are built as plain HTML/CSS files.",
          answer: true,
          explain: "Each piece is a self-contained local HTML file styled with CSS."
        },
        {
          type: "mcq",
          q: "Overlays are valuable because they:",
          choices: [
            "Brand your stream and surface live info without a separate app window",
            "Improve your internet speed",
            "Replace the need for a camera",
            "Encode your video"
          ],
          answer: 0,
          explain: "Overlays add branding and live information directly on screen."
        }
      ]
    },
    {
      id: "l2",
      title: "The Browser Source",
      intro: "OBS renders a web page as a layer using a Browser Source — the way every overlay in this set loads.",
      questions: [
        {
          type: "mcq",
          q: "In OBS, an HTML overlay is loaded as a:",
          choices: [
            "Browser Source",
            "Display Capture",
            "Audio Input Capture",
            "Game Capture"
          ],
          answer: 0,
          explain: "A Browser Source renders a web page (local or remote) inside the scene."
        },
        {
          type: "truefalse",
          q: "A Browser Source can point to a local HTML file on your computer.",
          answer: true,
          explain: "These overlays load as local files, e.g. standby.html or alerts.html."
        },
        {
          type: "fill",
          q: "Each overlay is loaded into OBS as a ____ Source.",
          answer: "browser",
          accept: ["browser"],
          explain: "The Browser Source type renders the overlay page."
        },
        {
          type: "match",
          q: "Match the Browser Source setting to its role.",
          pairs: [
            ["URL / Local file", "Which page to render"],
            ["Width / Height", "The render resolution"],
            ["Custom CSS", "Optional style overrides"]
          ],
          explain: "URL, size, and optional CSS define how a Browser Source renders."
        },
        {
          type: "truefalse",
          q: "A Browser Source runs its own mini web browser inside OBS.",
          answer: true,
          explain: "Each Browser Source is effectively an embedded browser rendering the page."
        },
        {
          type: "mcq",
          q: "Because each Browser Source is a mini browser, many heavy ones can:",
          choices: [
            "Add CPU/GPU load",
            "Speed up your PC",
            "Reduce your resolution automatically",
            "Mute your mic"
          ],
          answer: 0,
          explain: "Every Browser Source consumes resources, so keep the count reasonable."
        }
      ]
    },
    {
      id: "l3",
      title: "Transparent vs. Opaque Pages",
      intro: "Overlay pages use a transparent background so video shows through; standby screens are opaque.",
      questions: [
        {
          type: "mcq",
          q: "For an overlay that sits over gameplay, the page background should be:",
          choices: [
            "Transparent, so the video below shows through",
            "Solid white",
            "Solid black",
            "A photo"
          ],
          answer: 0,
          explain: "Overlay pieces use body{background:transparent} so only the graphics show."
        },
        {
          type: "truefalse",
          q: "A standby screen (Starting Soon / BRB) is opaque, filling the frame with the base color.",
          answer: true,
          explain: "Standby screens set an opaque --base background since there is nothing to show behind them."
        },
        {
          type: "fill",
          q: "Overlay pages set the CSS body background to ____ so gameplay shows through.",
          answer: "transparent",
          accept: ["transparent"],
          explain: "A transparent background lets the layers below show through."
        },
        {
          type: "match",
          q: "Match each Wibbly file to whether it is transparent or opaque.",
          pairs: [
            ["overlay.html (facecam/HUD)", "Transparent"],
            ["alerts.html", "Transparent"],
            ["standby.html", "Opaque"]
          ],
          explain: "Overlay pieces are transparent; standby screens are opaque."
        },
        {
          type: "truefalse",
          q: "OBS Browser Sources support page transparency out of the box.",
          answer: true,
          explain: "OBS composites a transparent page over the sources beneath it."
        },
        {
          type: "mcq",
          q: "If an overlay unexpectedly hides everything behind it, the likely cause is:",
          choices: [
            "The page has a solid background instead of transparent",
            "The webcam is unplugged",
            "The bitrate is too low",
            "There are too few scenes"
          ],
          answer: 0,
          explain: "A solid page background blocks the layers below; it should be transparent."
        }
      ]
    },
    {
      id: "l4",
      title: "The Wibbly Asset Set",
      intro: "This course is built on a real set of overlay files: standby, facecam/HUD, lower third, alerts, goal bar, and stinger.",
      questions: [
        {
          type: "match",
          q: "Match each asset file to what it does.",
          pairs: [
            ["standby.html", "Starting Soon / BRB / Over screens"],
            ["overlay.html", "Facecam frame + HUD bug"],
            ["lowerthird.html", "Name/topic bar"],
            ["alerts.html", "Follower/sub/donation toasts"]
          ],
          explain: "Each file is one self-contained overlay piece."
        },
        {
          type: "mcq",
          q: "Which asset produces the goal/progress bar?",
          choices: [
            "goalbar.html",
            "standby.html",
            "stinger.html",
            "overlay.html"
          ],
          answer: 0,
          explain: "goalbar.html renders the goal/progress bar."
        },
        {
          type: "truefalse",
          q: "Each overlay file is self-contained (its own HTML, CSS, and JS in one file).",
          answer: true,
          explain: "Every piece is a single standalone file, easy to drop into OBS."
        },
        {
          type: "fill",
          q: "The animated scene-to-scene wipe is produced from ____.html.",
          answer: "stinger",
          accept: ["stinger"],
          explain: "stinger.html is the source for the stinger transition."
        },
        {
          type: "truefalse",
          q: "All the pieces share one brand system, so they look like a matched set.",
          answer: true,
          explain: "They reuse the same tokens (colors, fonts, orb, chrome) from the brand spec."
        },
        {
          type: "mcq",
          q: "Keeping every overlay on the same tokens matters because it:",
          choices: [
            "Makes the whole stream look like one cohesive brand",
            "Reduces your internet usage",
            "Increases the frame rate",
            "Removes the need for a camera"
          ],
          answer: 0,
          explain: "Shared tokens give a consistent, professional, branded look."
        }
      ]
    },
    {
      id: "l5",
      title: "Shared Brand Tokens",
      intro: "Every file reuses the same CSS variables: base, blue, pink, yellow, the chrome gradient, and the orb.",
      questions: [
        {
          type: "match",
          q: "Match each Wibbly token to what it is.",
          pairs: [
            ["--base", "The dark background color"],
            ["--blue", "Electric blue accent"],
            ["--pink", "Hot pink offset"],
            ["--chrome", "The metallic gradient"]
          ],
          explain: "These CSS variables define the shared palette across every file."
        },
        {
          type: "mcq",
          q: "The 'chrome' in these overlays is:",
          choices: [
            "A metallic-looking CSS gradient reused verbatim",
            "The Chrome web browser",
            "A capture card brand",
            "A type of microphone"
          ],
          answer: 0,
          explain: "--chrome is a fixed linear-gradient reused across all pieces for the mark."
        },
        {
          type: "truefalse",
          q: "Defining colors as CSS variables makes the whole set easy to restyle consistently.",
          answer: true,
          explain: "Change a token once and every element using it updates together."
        },
        {
          type: "fill",
          q: "Shared colors are defined as CSS ____ (custom properties) on :root.",
          answer: "variables",
          accept: ["variables", "variable", "custom properties"],
          explain: "They are CSS variables (custom properties) declared on :root."
        },
        {
          type: "match",
          q: "Match the font to its role in the overlays.",
          pairs: [
            ["Anton", "Big display headlines"],
            ["Barlow Condensed", "Labels and names"],
            ["IBM Plex Mono", "Status lines and counts"]
          ],
          explain: "The set uses three fonts consistently for hierarchy."
        },
        {
          type: "truefalse",
          q: "The orb mascot is drawn in pure CSS, not an image file.",
          answer: true,
          explain: "The orb is built from CSS gradients and shapes, so it scales crisply."
        },
        {
          type: "mcq",
          q: "A hard brand rule in the spec is:",
          choices: [
            "No purple and no full-bleed gradient washes",
            "Always use purple",
            "Fill big panels with the chrome gradient",
            "Use as many colors as possible"
          ],
          answer: 0,
          explain: "The spec forbids purple and big flat gradient fills; chrome is only for the mark."
        }
      ]
    },
    {
      id: "l6",
      title: "Adding an Overlay to OBS",
      intro: "You add each file as a Browser Source sized to the canvas, stacked in the right order.",
      questions: [
        {
          type: "order",
          q: "Order the steps to add an overlay to a scene.",
          items: [
            "Add a new Browser Source",
            "Point it at the local overlay HTML file",
            "Set its width and height to the canvas size",
            "Position it above the webcam and game"
          ],
          explain: "Add, point to the file, size it, then stack it in front."
        },
        {
          type: "mcq",
          q: "An overlay Browser Source should usually be sized to:",
          choices: [
            "The full canvas (e.g. 1920x1080)",
            "1x1 pixel",
            "The size of your mouse cursor",
            "Whatever is smallest"
          ],
          answer: 0,
          explain: "These pages are authored full-canvas, so size the source to match."
        },
        {
          type: "truefalse",
          q: "The overlay source should be placed above the webcam and game captures.",
          answer: true,
          explain: "Overlays must sit in front to be visible over the content."
        },
        {
          type: "fill",
          q: "An overlay must be higher in the source list to appear in ____ of the video.",
          answer: "front",
          accept: ["front"],
          explain: "Higher in the list renders in front."
        },
        {
          type: "match",
          q: "Match the mistake to its symptom.",
          pairs: [
            ["Overlay below the game", "You never see the overlay"],
            ["Wrong source size", "Overlay is cropped or tiny"],
            ["Solid page background", "It hides the game"]
          ],
          explain: "Order, size, and transparency are the common setup mistakes."
        },
        {
          type: "truefalse",
          q: "The same overlay file can be reused across multiple scenes.",
          answer: true,
          explain: "Reusing a source keeps overlays consistent across scenes."
        }
      ]
    },
    {
      id: "l7",
      title: "URL Parameters",
      intro: "Each overlay reads query parameters (like ?demo=1) to change content and behavior without editing code.",
      questions: [
        {
          type: "mcq",
          q: "Adding ?demo=1 to an overlay's URL typically:",
          choices: [
            "Shows a preview with a stand-in background",
            "Deletes the file",
            "Uploads your stream",
            "Mutes your audio"
          ],
          answer: 0,
          explain: "?demo=1 turns on a preview mode with a placeholder background so the overlay reads."
        },
        {
          type: "truefalse",
          q: "URL parameters let you change an overlay's text without editing the HTML.",
          answer: true,
          explain: "Params like ?handle= or ?label= set content at load time."
        },
        {
          type: "fill",
          q: "The part of a URL after the ? that configures the page is the query ____.",
          answer: "string",
          accept: ["string", "parameters", "params"],
          explain: "The query string (parameters) configures the overlay."
        },
        {
          type: "match",
          q: "Match the parameter to what it does.",
          pairs: [
            ["standby.html?state=brb", "Show the Be Right Back screen"],
            ["overlay.html?cam=big", "Use the large facecam layout"],
            ["goalbar.html?value=142", "Set the goal's current value"]
          ],
          explain: "Each page exposes params to control its content and layout."
        },
        {
          type: "truefalse",
          q: "Multiple parameters are joined with the & character.",
          answer: true,
          explain: "e.g. standby.html?state=soon&mins=10 combines two params with &."
        },
        {
          type: "mcq",
          q: "URL parameters are read in the page's JavaScript using:",
          choices: [
            "URLSearchParams on location.search",
            "The webcam driver",
            "The audio mixer",
            "The recording path"
          ],
          answer: 0,
          explain: "Each file parses new URLSearchParams(location.search) to read its options."
        }
      ]
    },
    {
      id: "l8",
      title: "Previewing Locally",
      intro: "You can open any overlay in a normal browser with ?demo=1 to check it before wiring it into OBS.",
      questions: [
        {
          type: "mcq",
          q: "The quickest way to preview an overlay before using OBS is to:",
          choices: [
            "Open the HTML file in a browser with ?demo=1",
            "Publish your channel",
            "Record a two-hour session",
            "Reinstall OBS"
          ],
          answer: 0,
          explain: "Opening the file with ?demo=1 shows it with a stand-in background instantly."
        },
        {
          type: "truefalse",
          q: "demo mode adds a placeholder background so a transparent overlay is visible while testing.",
          answer: true,
          explain: "Without a background, a transparent overlay would be hard to see when opened alone."
        },
        {
          type: "fill",
          q: "To preview the alerts overlay cycling all types, open alerts.html?____=1.",
          answer: "demo",
          accept: ["demo"],
          explain: "alerts.html?demo=1 cycles all four alert types on a loop."
        },
        {
          type: "match",
          q: "Match the preview URL to what you'd see.",
          pairs: [
            ["standby.html?state=soon", "The countdown standby screen"],
            ["lowerthird.html?demo=1", "The lower third over a stand-in bg"],
            ["stinger.html?demo=1", "The wipe swapping scene A to B"]
          ],
          explain: "Each file's preview shows that specific overlay in action."
        },
        {
          type: "truefalse",
          q: "Previewing locally first saves you from discovering problems live on stream.",
          answer: true,
          explain: "Catching issues in the browser is far cheaper than finding them mid-stream."
        },
        {
          type: "mcq",
          q: "Once an overlay looks right in the browser, the next step is to:",
          choices: [
            "Load the same file as a Browser Source in OBS",
            "Delete it",
            "Lower your resolution",
            "Turn off the overlay"
          ],
          answer: 0,
          explain: "A verified overlay drops straight into OBS as a Browser Source."
        }
      ]
    }
  ]
});
