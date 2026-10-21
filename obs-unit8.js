window.ACADEMY.addUnit("obs", {
  id: "unit-8",
  title: "Streaming, Performance & Troubleshooting",
  color: "#4b5bd4",
  icon: "🛠️",
  description: "A light intro to live streaming, plus fixing dropped frames, black screens, and audio problems.",
  lessons: [
    {
      id: "l57",
      title: "Streaming Basics",
      intro: "Streaming sends live video to a platform using a stream key and a real-time upload.",
      questions: [
        {
          type: "mcq",
          q: "To stream to a platform, OBS needs:",
          choices: [
            "The service selected and a stream key (or connected account)",
            "A capture card and a second PC dedicated to encoding",
            "A platform account plus a recording path in Output",
            "The platform's app installed and running in the background"
          ],
          answer: 0,
          explain: "You pick the service and authenticate with a stream key or account link."
        },
        {
          type: "truefalse",
          q: "A stream key is a private code and should not be shared publicly.",
          answer: true,
          explain: "Anyone with your stream key could broadcast to your channel, so keep it secret."
        },
        {
          type: "fill",
          q: "Streaming settings, including the service and stream ____, are in Settings then Stream.",
          answer: "key",
          accept: ["key"],
          explain: "The Stream settings page holds the service and stream key."
        },
        {
          type: "match",
          q: "Match the term to its meaning.",
          pairs: [
            ["Stream key", "Private code linking OBS to your channel"],
            ["Service", "The platform you stream to"],
            ["Bitrate", "How much data per second you send"]
          ],
          explain: "Service and key connect you; bitrate sets the data rate."
        },
        {
          type: "truefalse",
          q: "Streaming quality is capped by your internet upload speed.",
          answer: true,
          explain: "Live video must upload in real time, so upload bandwidth is the ceiling."
        },
        {
          type: "mcq",
          q: "Compared with recording, streaming forces you to:",
          choices: [
            "Fit within your live upload bandwidth",
            "Use constant quality instead of a fixed bitrate",
            "Record at a higher resolution than the canvas",
            "Save every stream to MKV before it goes out"
          ],
          answer: 0,
          explain: "Unlike local recording, a stream is limited by real-time upload."
        }
      ]
    },
    {
      id: "l58",
      title: "Bitrate for Streaming",
      intro: "Use CBR for streaming and set a bitrate your connection can sustain with headroom.",
      questions: [
        {
          type: "mcq",
          q: "For live streaming, the recommended rate control is usually:",
          choices: [
            "CBR (constant bitrate)",
            "CQP (constant quantization)",
            "CRF (constant rate factor)",
            "VBR (variable bitrate)"
          ],
          answer: 0,
          explain: "Platforms prefer CBR for a steady, predictable stream."
        },
        {
          type: "truefalse",
          q: "You should leave upload headroom rather than using 100% of your bandwidth.",
          answer: true,
          explain: "Maxing your upload causes drops; leave a margin for stability."
        },
        {
          type: "fill",
          q: "Steady, constant data for streaming is called ____ bitrate.",
          answer: "constant",
          accept: ["constant", "cbr"],
          explain: "Constant bitrate (CBR) keeps a steady stream data rate."
        },
        {
          type: "match",
          q: "Match the setting to the mode it fits.",
          pairs: [
            ["CBR", "Streaming"],
            ["CQP/CRF", "Recording"]
          ],
          explain: "CBR suits live streams; CQP/CRF suits local recording."
        },
        {
          type: "truefalse",
          q: "Setting your stream bitrate too high for your connection causes dropped frames.",
          answer: true,
          explain: "If you exceed your reliable upload, frames get dropped in transit."
        },
        {
          type: "mcq",
          q: "A safe way to choose a stream bitrate is to:",
          choices: [
            "Test your upload speed and stay comfortably below it",
            "Use the highest bitrate the platform allows, whatever your speed",
            "Match it to your download speed, since that number is larger",
            "Set it slightly above your upload so quality never drops"
          ],
          answer: 0,
          explain: "Measure your upload, then set bitrate below it for reliable streaming."
        },
        {
          type: "truefalse",
          q: "Higher stream bitrate always improves quality regardless of your connection.",
          answer: false,
          explain: "Beyond what your connection sustains, higher bitrate just causes drops."
        }
      ]
    },
    {
      id: "l59",
      title: "Dropped, Lagged & Skipped Frames",
      intro: "OBS reports three kinds of frame loss, each pointing to a different bottleneck.",
      questions: [
        {
          type: "match",
          q: "Match each frame-loss type to its cause.",
          pairs: [
            ["Dropped frames (network)", "Internet/upload problems"],
            ["Skipped frames (encoding)", "Encoder/CPU overloaded"],
            ["Lagged frames (rendering)", "GPU too busy to render"]
          ],
          explain: "Dropped = network, skipped = encoder, lagged = GPU/render."
        },
        {
          type: "mcq",
          q: "Frames dropped due to network usually mean:",
          choices: [
            "Your connection cannot keep up with the stream",
            "Your encoder cannot keep up with the video settings",
            "Your GPU is too busy rendering the game you play",
            "Your disk is too slow"
          ],
          answer: 0,
          explain: "Network drops point to insufficient or unstable upload."
        },
        {
          type: "truefalse",
          q: "Encoding overload (skipped frames) can be eased with a faster encoder preset.",
          answer: true,
          explain: "A faster preset lightens the encoder, reducing skipped frames."
        },
        {
          type: "fill",
          q: "Frames lost to a busy internet connection are called ____ frames.",
          answer: "dropped",
          accept: ["dropped"],
          explain: "Network-related loss is reported as dropped frames."
        },
        {
          type: "truefalse",
          q: "Rendering lag can happen if a game or app is using all your GPU.",
          answer: true,
          explain: "If the GPU is saturated, OBS cannot render frames in time."
        },
        {
          type: "mcq",
          q: "The OBS Stats window is useful because it:",
          choices: [
            "Shows CPU, dropped/skipped/lagged frames, and disk status",
            "Fixes dropped frames automatically by lowering your bitrate",
            "Tests your upload speed and picks the best stream bitrate",
            "Shows a live chat feed from the platform you stream to"
          ],
          answer: 0,
          explain: "Stats reveals which bottleneck is causing frame loss."
        },
        {
          type: "truefalse",
          q: "Different frame-loss types need different fixes, so identifying the type matters.",
          answer: true,
          explain: "Network, encoder, and GPU problems each require a distinct fix."
        }
      ]
    },
    {
      id: "l60",
      title: "CPU & GPU Load",
      intro: "Overloaded hardware causes stutter; balance encoder choice, settings, and other running apps.",
      questions: [
        {
          type: "mcq",
          q: "If OBS reports high encoding load on the CPU, a good fix is to:",
          choices: [
            "Switch to a GPU (hardware) encoder or a faster preset",
            "Raise the output resolution so the encoder has more detail",
            "Switch to a slower preset so the encoder works smarter",
            "Change the recording format from MKV over to MP4"
          ],
          answer: 0,
          explain: "Offloading to the GPU or using a faster preset reduces CPU encoding load."
        },
        {
          type: "truefalse",
          q: "Recording a demanding game with x264 on a weak CPU can cause stutter in both the game and the capture.",
          answer: true,
          explain: "The CPU is shared, so heavy software encoding competes with the game."
        },
        {
          type: "fill",
          q: "Moving encoding to the graphics card uses a ____ encoder like NVENC.",
          answer: "hardware",
          accept: ["hardware", "gpu"],
          explain: "GPU-based (hardware) encoders such as NVENC offload the CPU."
        },
        {
          type: "match",
          q: "Match the overload to a remedy.",
          pairs: [
            ["High CPU encoding", "Use GPU encoder or faster preset"],
            ["High GPU load", "Lower game settings or capture resolution"],
            ["Both maxed", "Reduce resolution/FPS overall"]
          ],
          explain: "Match the fix to which chip is the bottleneck."
        },
        {
          type: "truefalse",
          q: "Closing unneeded background apps can free resources for recording.",
          answer: true,
          explain: "Fewer competing apps leave more CPU/GPU for OBS and your game."
        },
        {
          type: "mcq",
          q: "Lowering the output resolution or FPS helps performance because it:",
          choices: [
            "Reduces how much the encoder and GPU must process",
            "Raises the bitrate so each frame looks better",
            "Frees up upload bandwidth only, not hardware",
            "Makes OBS skip filters on every source"
          ],
          answer: 0,
          explain: "Fewer pixels and frames mean less work for the hardware."
        },
        {
          type: "truefalse",
          q: "A smooth capture at slightly lower settings beats a stuttering one at max settings.",
          answer: true,
          explain: "Watchable, smooth footage is worth more than heroic-but-broken settings."
        }
      ]
    },
    {
      id: "l61",
      title: "The Black Screen Problem",
      intro: "A black capture is a classic OBS issue, usually tied to GPU selection or capture type.",
      questions: [
        {
          type: "mcq",
          q: "A common cause of a black Display or Game Capture on laptops is:",
          choices: [
            "OBS running on the wrong GPU",
            "The microphone being muted",
            "Too many scenes",
            "A slow internet connection"
          ],
          answer: 0,
          explain: "Dual-GPU laptops often need OBS assigned to the same GPU as the app/game."
        },
        {
          type: "truefalse",
          q: "Running OBS as administrator can sometimes fix a black Game Capture.",
          answer: true,
          explain: "Elevated permissions let OBS hook games that also run elevated."
        },
        {
          type: "fill",
          q: "For a black capture, try matching OBS to the correct ____ in your graphics settings.",
          answer: "gpu",
          accept: ["gpu", "graphics card"],
          explain: "GPU mismatch is a leading cause of black captures."
        },
        {
          type: "match",
          q: "Match the black-screen situation to a fix to try.",
          pairs: [
            ["Black Display Capture", "Set OBS to the right GPU"],
            ["Black Game Capture", "Run OBS as admin / use Game Capture mode"],
            ["Black protected content", "Some DRM apps block capture"]
          ],
          explain: "GPU, permissions, and DRM are the usual black-screen causes."
        },
        {
          type: "truefalse",
          q: "Some streaming apps use DRM that intentionally shows black when captured.",
          answer: true,
          explain: "Protected content (like certain video services) can block screen capture by design."
        },
        {
          type: "mcq",
          q: "A good general troubleshooting move for a black capture is to:",
          choices: [
            "Try a different capture type (Window vs. Display vs. Game)",
            "Raise your bitrate and restart the recording session",
            "Delete the profile and build a new one",
            "Lower the canvas resolution to 720p"
          ],
          answer: 0,
          explain: "Switching capture methods often gets around a black screen."
        }
      ]
    },
    {
      id: "l62",
      title: "Audio Not Recording",
      intro: "Silent recordings usually trace back to the wrong device, a mute, or track routing.",
      questions: [
        {
          type: "mcq",
          q: "If your voice is missing from a recording, first check:",
          choices: [
            "The right mic is selected and not muted",
            "Your video resolution and frame rate",
            "The order of sources in the scene",
            "Whether you are recording to MKV"
          ],
          answer: 0,
          explain: "Wrong device or an accidental mute is the most common cause."
        },
        {
          type: "truefalse",
          q: "A source set to no audio tracks will record silently even if the meter moves.",
          answer: true,
          explain: "If a source is not assigned to a recording track, it will not be saved."
        },
        {
          type: "fill",
          q: "In Advanced Audio Properties, confirm each source is assigned to a recording ____.",
          answer: "track",
          accept: ["track"],
          explain: "Track assignment decides which audio actually gets recorded."
        },
        {
          type: "match",
          q: "Match the silent-audio symptom to its cause.",
          pairs: [
            ["No voice at all", "Wrong or muted mic"],
            ["No game/app sound", "Desktop audio muted or wrong device"],
            ["Audio in preview but not file", "Track not assigned to recording"]
          ],
          explain: "Device, mute, and track routing cover most silent-audio cases."
        },
        {
          type: "truefalse",
          q: "Watching the audio meters move before recording confirms audio is being captured.",
          answer: true,
          explain: "Moving meters show the source is live, though you still must verify track routing."
        },
        {
          type: "mcq",
          q: "The most reliable prevention for silent recordings is:",
          choices: [
            "A short test recording you listen back to",
            "A higher bitrate setting on the audio track",
            "Noise Suppression on the mic",
            "Recording to a faster disk drive"
          ],
          answer: 0,
          explain: "Listening to a quick test catches silent-audio problems before the real take."
        }
      ]
    },
    {
      id: "l63",
      title: "Backups & Recovery",
      intro: "Protect your scenes, settings, and footage against crashes, mistakes, and disk failure.",
      questions: [
        {
          type: "mcq",
          q: "Recording to MKV protects you because:",
          choices: [
            "A crash mid-recording still leaves a playable file",
            "It produces smaller files than MP4 at the same quality",
            "Every video editor can open it without any conversion",
            "It automatically saves a backup copy to a second disk"
          ],
          answer: 0,
          explain: "MKV is crash-resistant, unlike MP4 which can be lost on a crash."
        },
        {
          type: "truefalse",
          q: "Exporting your profile and scene collection is a good backup habit.",
          answer: true,
          explain: "Exports let you restore your entire OBS setup after a problem or reinstall."
        },
        {
          type: "fill",
          q: "Backing up important footage to a second ____ guards against disk failure.",
          answer: "drive",
          accept: ["drive", "disk", "location"],
          explain: "A second drive or location protects footage if one disk fails."
        },
        {
          type: "match",
          q: "Match what to back up to why.",
          pairs: [
            ["Scene collection", "Restore your layouts"],
            ["Profile", "Restore your settings"],
            ["Footage", "Irreplaceable recordings"]
          ],
          explain: "Backups cover layouts, settings, and the footage itself."
        },
        {
          type: "truefalse",
          q: "Once you have edited and published a video, the raw footage is worthless and should always be deleted immediately.",
          answer: false,
          explain: "Raw footage can be reused or re-edited; keep it until you are sure you are done."
        },
        {
          type: "mcq",
          q: "The cheapest insurance against losing an important recording is:",
          choices: [
            "Record to MKV and keep enough free disk space",
            "Record MP4 with a high bitrate so the file holds up",
            "Use Studio Mode so mistakes never reach the recording",
            "Use the replay buffer"
          ],
          answer: 0,
          explain: "MKV plus free space keeps a recording safe even if something crashes."
        }
      ]
    },
    {
      id: "l64",
      title: "Exporting for Editing",
      intro: "Hand your editor (or yourself) footage that is easy to import and cut.",
      questions: [
        {
          type: "order",
          q: "Order a clean handoff-to-editing flow.",
          items: [
            "Record MKV with separate audio tracks",
            "Remux to MP4",
            "Import into your editor",
            "Cut, color, and finalize"
          ],
          explain: "Record safely, remux, import, then edit."
        },
        {
          type: "mcq",
          q: "The most editor-friendly file to hand off is usually:",
          choices: [
            "An MP4 (remuxed from MKV) at a constant high quality",
            "The original MKV with every track mixed down to one",
            "A tiny, heavily compressed clip that uploads fast",
            "An FLV file saved straight from the stream output"
          ],
          answer: 0,
          explain: "A clean, high-quality MP4 imports smoothly into most editors."
        },
        {
          type: "truefalse",
          q: "Separate audio tracks give the editor room to fix voice and music independently.",
          answer: true,
          explain: "Isolated tracks make audio corrections far easier in post."
        },
        {
          type: "fill",
          q: "Convert a safely recorded MKV into an editable MP4 by using ____.",
          answer: "remux",
          accept: ["remux", "remuxing"],
          explain: "Remuxing rewraps MKV into MP4 without re-encoding."
        },
        {
          type: "match",
          q: "Match the choice to why editors like it.",
          pairs: [
            ["MP4 container", "Broad editor compatibility"],
            ["Constant quality", "Consistent, clean footage"],
            ["Separate tracks", "Flexible audio fixes"]
          ],
          explain: "Compatibility, quality, and flexibility make editing smooth."
        },
        {
          type: "truefalse",
          q: "Delivering unstable, crash-damaged files makes editing harder or impossible.",
          answer: true,
          explain: "Corrupt files can fail to import, so record safely to avoid this."
        },
        {
          type: "mcq",
          q: "The end-to-end recording-first mindset is:",
          choices: [
            "Capture clean, high-quality, editable footage every time",
            "Stream everything live and keep the stream archive",
            "Record at the lowest quality to keep files small",
            "Rely on editing to fix the audio and the lighting"
          ],
          answer: 0,
          explain: "Recording-first success is clean, editable footage that becomes a polished video."
        }
      ]
    }
  ]
});
