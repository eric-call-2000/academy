window.ACADEMY.addUnit("obs", {
  id: "unit-5",
  title: "Cameras, Lighting & Capture",
  color: "#4b5bd4",
  icon: "💡",
  description: "Make yourself look great on camera: framing, lighting, camera filters, and green screen.",
  lessons: [
    {
      id: "l33",
      title: "Framing Yourself",
      intro: "Good framing puts your eyes in the upper third and leaves a little headroom.",
      questions: [
        {
          type: "mcq",
          q: "A flattering webcam framing usually places your eyes:",
          choices: [
            "Around the upper third of the frame",
            "At the very bottom edge",
            "Cut off at the top",
            "In the exact center bottom corner"
          ],
          answer: 0,
          explain: "Eyes on the upper-third line feels natural and engaging."
        },
        {
          type: "truefalse",
          q: "The camera at or slightly above eye level is generally more flattering than low angles.",
          answer: true,
          explain: "Eye-level or slightly above avoids the unflattering up-the-nose look."
        },
        {
          type: "fill",
          q: "The small gap above your head in frame is called ____.",
          answer: "headroom",
          accept: ["headroom", "head room"],
          explain: "Headroom is the space between your head and the top of the frame."
        },
        {
          type: "match",
          q: "Match the framing issue to a fix.",
          pairs: [
            ["Camera too low", "Raise it to eye level"],
            ["Too much headroom", "Tilt down or move closer"],
            ["Face too small", "Move closer or zoom the source"]
          ],
          explain: "Small adjustments in height and distance fix most framing problems."
        },
        {
          type: "truefalse",
          q: "Sitting extremely close so your face fills the entire frame is usually the best look.",
          answer: false,
          explain: "A little breathing room around you looks more comfortable than an extreme close-up."
        },
        {
          type: "mcq",
          q: "The rule of thirds suggests placing key subjects:",
          choices: [
            "Along imaginary third lines, not dead center for everything",
            "Only in the corners",
            "Off-screen entirely",
            "At random each time"
          ],
          answer: 0,
          explain: "Aligning subjects to the third lines creates a balanced, pleasing composition."
        },
        {
          type: "truefalse",
          q: "Consistent framing across videos helps your channel feel professional.",
          answer: true,
          explain: "Repeatable framing makes your content look intentional and branded."
        }
      ]
    },
    {
      id: "l34",
      title: "Lighting Basics",
      intro: "Soft light in front of you does more for video quality than an expensive camera.",
      questions: [
        {
          type: "mcq",
          q: "The single biggest upgrade to how you look on camera is usually:",
          choices: [
            "Good, soft lighting on your face",
            "A slightly faster mouse",
            "More browser tabs",
            "A darker room"
          ],
          answer: 0,
          explain: "Light quality drives image quality more than camera price."
        },
        {
          type: "truefalse",
          q: "A window or light behind you (backlight) tends to make you a dark silhouette.",
          answer: true,
          explain: "Strong light behind you fools the camera and darkens your face."
        },
        {
          type: "fill",
          q: "The main light on your face is called the ____ light.",
          answer: "key",
          accept: ["key"],
          explain: "The key light is your primary source lighting your face."
        },
        {
          type: "match",
          q: "Match each light to its role in a simple setup.",
          pairs: [
            ["Key light", "Main light on your face"],
            ["Fill light", "Softens shadows on the other side"],
            ["Back/hair light", "Separates you from the background"]
          ],
          explain: "Key, fill, and back light form the classic three-point setup."
        },
        {
          type: "truefalse",
          q: "Soft, diffused light is generally more flattering than a bare, harsh bulb.",
          answer: true,
          explain: "Diffusion spreads light, reducing hard shadows and hotspots on skin."
        },
        {
          type: "mcq",
          q: "A cheap, effective lighting fix is to:",
          choices: [
            "Face a window or put a soft light in front of you",
            "Turn off all lights",
            "Point a light directly into the lens",
            "Sit in complete darkness"
          ],
          answer: 0,
          explain: "Facing soft, front-on light instantly improves most webcam images."
        },
        {
          type: "truefalse",
          q: "Mixing very warm and very cool light sources can make skin tones look odd.",
          answer: true,
          explain: "Clashing color temperatures create unnatural, hard-to-correct skin tones."
        }
      ]
    },
    {
      id: "l35",
      title: "Camera Source Settings",
      intro: "Set your webcam's resolution, FPS, and format in its source properties.",
      questions: [
        {
          type: "mcq",
          q: "You change a webcam's resolution and FPS in:",
          choices: [
            "The Video Capture Device source properties",
            "The audio mixer",
            "The Scenes dock",
            "Windows sound settings"
          ],
          answer: 0,
          explain: "Right-click the camera source and open Properties to set these."
        },
        {
          type: "truefalse",
          q: "Some webcams need the MJPEG format to reach their highest resolution and FPS.",
          answer: true,
          explain: "Many webcams only hit 1080p60 when set to MJPEG rather than raw YUY2."
        },
        {
          type: "fill",
          q: "Webcam resolution, FPS, and format are set in the source's ____.",
          answer: "properties",
          accept: ["properties"],
          explain: "Source Properties expose the device's capture options."
        },
        {
          type: "match",
          q: "Match the setting to its effect.",
          pairs: [
            ["Higher resolution", "More detail, more load"],
            ["Higher FPS", "Smoother motion"],
            ["MJPEG format", "Enables higher modes on many webcams"]
          ],
          explain: "Each setting trades quality against performance or unlocks modes."
        },
        {
          type: "truefalse",
          q: "Buffering set on a webcam can add a little delay to the feed.",
          answer: true,
          explain: "The buffering option can smooth frames but introduces latency; turn it off to reduce delay."
        },
        {
          type: "mcq",
          q: "If your webcam feed stutters, a reasonable first step is to:",
          choices: [
            "Lower its resolution or FPS to something your PC handles",
            "Delete all scenes",
            "Change your recording format",
            "Raise your CQP to 1"
          ],
          answer: 0,
          explain: "Reducing the camera's demand often smooths a stuttering feed."
        },
        {
          type: "truefalse",
          q: "Locking exposure/focus (if your webcam allows it) prevents distracting auto-adjustments.",
          answer: true,
          explain: "Manual exposure and focus stop the picture from hunting mid-recording."
        }
      ]
    },
    {
      id: "l36",
      title: "Color & Correction Filters",
      intro: "OBS filters can gently correct a webcam's color, brightness, and sharpness.",
      questions: [
        {
          type: "mcq",
          q: "The Color Correction filter lets you adjust:",
          choices: [
            "Brightness, contrast, saturation, and hue",
            "Your bitrate",
            "The number of scenes",
            "Your internet speed"
          ],
          answer: 0,
          explain: "Color Correction tweaks brightness, contrast, gamma, saturation, and hue."
        },
        {
          type: "truefalse",
          q: "Color and sharpness filters are added under a source's Filters window.",
          answer: true,
          explain: "Right-click the camera, choose Filters, and add effect filters there."
        },
        {
          type: "fill",
          q: "A slightly soft webcam can be crisped with the ____ filter (used sparingly).",
          answer: "sharpen",
          accept: ["sharpen", "sharpness"],
          explain: "The Sharpen filter adds edge definition; too much looks crunchy."
        },
        {
          type: "match",
          q: "Match the problem to a filter.",
          pairs: [
            ["Washed-out colors", "Color Correction (raise saturation)"],
            ["Slightly soft image", "Sharpen (small amount)"],
            ["Too dark", "Color Correction (raise brightness/gamma)"]
          ],
          explain: "Filters can nudge a webcam image toward a cleaner look."
        },
        {
          type: "truefalse",
          q: "Heavy over-sharpening and over-saturation can make footage look worse, not better.",
          answer: true,
          explain: "Subtlety wins; extreme filters introduce noise and unnatural color."
        },
        {
          type: "mcq",
          q: "The best base for good color is:",
          choices: [
            "Good lighting first, filters only for small touch-ups",
            "Maxing every filter slider",
            "Recording in the dark and fixing it all later",
            "Turning off the camera"
          ],
          answer: 0,
          explain: "Fix lighting at the source; filters should only fine-tune."
        },
        {
          type: "truefalse",
          q: "Filters apply live, so what you see in preview is what gets recorded.",
          answer: true,
          explain: "OBS bakes filters into the recording exactly as previewed."
        }
      ]
    },
    {
      id: "l37",
      title: "Green Screen (Chroma Key)",
      intro: "A Chroma Key filter removes a solid-color backdrop so only you remain.",
      questions: [
        {
          type: "mcq",
          q: "The Chroma Key filter works by:",
          choices: [
            "Making a chosen color transparent",
            "Adding a border to the video",
            "Increasing the bitrate",
            "Muting the audio"
          ],
          answer: 0,
          explain: "Chroma Key removes a key color (usually green) to reveal what is behind."
        },
        {
          type: "truefalse",
          q: "Even, wrinkle-free lighting on the green screen gives a cleaner key.",
          answer: true,
          explain: "Flat, evenly lit green is easier to remove without edges or spill."
        },
        {
          type: "fill",
          q: "Green screen removal in OBS uses the ____ Key filter.",
          answer: "chroma",
          accept: ["chroma"],
          explain: "The filter is called Chroma Key."
        },
        {
          type: "match",
          q: "Match the green-screen issue to its cause.",
          pairs: [
            ["Green edges on you", "Spill or key too tight"],
            ["Holes in the background", "Uneven lighting or shadows"],
            ["Parts of you disappear", "Wearing the key color"]
          ],
          explain: "Lighting, spill, and wardrobe are the usual chroma-key culprits."
        },
        {
          type: "truefalse",
          q: "Wearing a green shirt in front of a green screen is a good idea.",
          answer: false,
          explain: "Anything the key color turns transparent, so avoid wearing it."
        },
        {
          type: "mcq",
          q: "To reduce green light bouncing onto you, you should:",
          choices: [
            "Add distance and light between you and the screen, and use spill reduction",
            "Stand touching the screen",
            "Turn off your key light",
            "Raise your frame rate"
          ],
          answer: 0,
          explain: "Distance, separate lighting, and spill reduction cut green contamination."
        },
        {
          type: "truefalse",
          q: "A physical green screen and good lighting beat trying to key a messy, mixed background.",
          answer: true,
          explain: "A clean, evenly lit key color is far easier than keying a cluttered wall."
        }
      ]
    },
    {
      id: "l38",
      title: "Capture Cards & External Cameras",
      intro: "Capture cards and mirrorless/DSLR cameras can bring pro-level image quality into OBS.",
      questions: [
        {
          type: "mcq",
          q: "A capture card lets OBS record video from:",
          choices: [
            "A console, camera, or a second PC via HDMI",
            "Your keyboard",
            "A printer",
            "Your mouse"
          ],
          answer: 0,
          explain: "Capture cards ingest HDMI sources as a Video Capture Device."
        },
        {
          type: "truefalse",
          q: "A mirrorless or DSLR camera can often be used as a high-quality webcam via a capture card or software.",
          answer: true,
          explain: "Clean HDMI out plus a capture card (or vendor webcam software) gives excellent image quality."
        },
        {
          type: "fill",
          q: "Most capture cards connect a source to your PC using an ____ cable.",
          answer: "hdmi",
          accept: ["hdmi"],
          explain: "HDMI is the common input for capture cards."
        },
        {
          type: "match",
          q: "Match the gear to its role.",
          pairs: [
            ["Capture card", "Brings HDMI video into the PC"],
            ["Mirrorless camera", "High-quality image source"],
            ["USB webcam", "Simple all-in-one camera"]
          ],
          explain: "Each device is a different path to getting video into OBS."
        },
        {
          type: "truefalse",
          q: "A camera set to output clean HDMI (no menus/overlays) records a cleaner image.",
          answer: true,
          explain: "Clean HDMI output removes on-screen info so only the picture is captured."
        },
        {
          type: "mcq",
          q: "A dedicated camera usually beats a basic webcam mainly because of:",
          choices: [
            "A larger sensor and better lens for depth and low light",
            "A faster internet connection",
            "More USB ports",
            "A bigger hard drive"
          ],
          answer: 0,
          explain: "Bigger sensors and real lenses deliver better depth, detail, and low-light performance."
        },
        {
          type: "truefalse",
          q: "You still need good lighting even with an expensive camera.",
          answer: true,
          explain: "No camera overcomes bad light; lighting remains the foundation."
        }
      ]
    },
    {
      id: "l39",
      title: "Reducing Camera Noise",
      intro: "Grainy webcam footage usually means too little light; fix the room before software.",
      questions: [
        {
          type: "mcq",
          q: "Grainy, noisy webcam video is most often caused by:",
          choices: [
            "Too little light forcing the camera to boost gain",
            "Too many scenes",
            "A high frame rate",
            "A large hard drive"
          ],
          answer: 0,
          explain: "In low light, the camera raises gain, which adds visible noise/grain."
        },
        {
          type: "truefalse",
          q: "Adding more light is usually the best cure for a grainy webcam image.",
          answer: true,
          explain: "More light lets the camera lower gain, cleaning up the grain."
        },
        {
          type: "fill",
          q: "Cameras add noise when they raise ____ to compensate for a dark room.",
          answer: "gain",
          accept: ["gain", "iso"],
          explain: "High gain (or ISO) in low light introduces grain."
        },
        {
          type: "match",
          q: "Match the symptom to a fix.",
          pairs: [
            ["Grainy image", "Add more light"],
            ["Dim but clean image", "Raise brightness gently in Color Correction"],
            ["Constant refocusing", "Lock focus if possible"]
          ],
          explain: "Light fixes grain; small filter tweaks handle the rest."
        },
        {
          type: "truefalse",
          q: "A software noise-reduction filter can help a little but may soften detail.",
          answer: true,
          explain: "Denoising trades some sharpness for less grain; use it lightly."
        },
        {
          type: "mcq",
          q: "The order of operations for a clean camera image is:",
          choices: [
            "Light the scene first, then fine-tune with filters",
            "Max all filters and ignore lighting",
            "Record in the dark and hope",
            "Only change resolution"
          ],
          answer: 0,
          explain: "Solve lighting at the source, then use filters for minor cleanup."
        },
        {
          type: "truefalse",
          q: "A well-lit basic webcam can look better than a great camera in the dark.",
          answer: true,
          explain: "Light is the great equalizer; a lit cheap camera often beats an unlit good one."
        }
      ]
    },
    {
      id: "l40",
      title: "Looking Professional",
      intro: "Small, repeatable habits in framing, lighting, and background make every video look intentional.",
      questions: [
        {
          type: "order",
          q: "Order a quick on-camera setup routine.",
          items: [
            "Set the camera to eye level",
            "Light your face softly from the front",
            "Frame with eyes on the upper third",
            "Tidy the background behind you"
          ],
          explain: "Height, light, framing, and background: a fast repeatable checklist."
        },
        {
          type: "mcq",
          q: "A clean, uncluttered background helps because it:",
          choices: [
            "Keeps attention on you and looks intentional",
            "Increases your bitrate",
            "Adds more scenes",
            "Speeds up encoding"
          ],
          answer: 0,
          explain: "A tidy background reduces distraction and reads as professional."
        },
        {
          type: "truefalse",
          q: "Depth (some space behind you) generally looks better than sitting against a flat wall.",
          answer: true,
          explain: "Separation from the background adds depth and a more polished look."
        },
        {
          type: "fill",
          q: "Repeatable ____ across videos makes your channel look consistent and professional.",
          answer: "setup",
          accept: ["setup", "framing", "lighting"],
          explain: "A consistent, repeatable setup is what reads as professional."
        },
        {
          type: "match",
          q: "Match the element to its pro tip.",
          pairs: [
            ["Framing", "Eyes on the upper third"],
            ["Lighting", "Soft light from the front"],
            ["Background", "Tidy, with a little depth"]
          ],
          explain: "Framing, lighting, and background are the three levers of a pro look."
        },
        {
          type: "truefalse",
          q: "Looking professional requires spending thousands on gear.",
          answer: false,
          explain: "Framing, lighting, and a clean background matter far more than expensive gear."
        },
        {
          type: "mcq",
          q: "The most reliable path to looking good on camera is:",
          choices: [
            "Master lighting and framing, then upgrade gear later",
            "Buy the most expensive camera first",
            "Ignore lighting entirely",
            "Record in complete darkness"
          ],
          answer: 0,
          explain: "Fundamentals like light and framing beat gear every time."
        }
      ]
    }
  ]
});
