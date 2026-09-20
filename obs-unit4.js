window.ACADEMY.addUnit("obs", {
  id: "unit-4",
  title: "Recording Settings & Encoding",
  color: "#4b5bd4",
  icon: "⚙️",
  description: "Get sharp, efficient recordings: formats, encoders, bitrate vs. quality, and the right presets.",
  lessons: [
    {
      id: "l25",
      title: "Simple vs. Advanced Output",
      intro: "Simple mode is quick; Advanced mode unlocks encoder, tracks, and fine quality control.",
      questions: [
        {
          type: "mcq",
          q: "Simple output mode is best when you want:",
          choices: [
            "A fast, guided setup with fewer choices",
            "Per-track audio routing",
            "Custom encoder tuning",
            "Separate settings for streaming and recording encoders"
          ],
          answer: 0,
          explain: "Simple mode trades control for speed and fewer decisions."
        },
        {
          type: "mcq",
          q: "Advanced output mode adds control over:",
          choices: [
            "Encoder settings, audio tracks, and rate control",
            "Your desktop wallpaper",
            "Your browser history",
            "The OBS window color"
          ],
          answer: 0,
          explain: "Advanced exposes encoder, rate control, and multi-track options."
        },
        {
          type: "truefalse",
          q: "You switch between Simple and Advanced under Settings then Output.",
          answer: true,
          explain: "The Output settings page has the Output Mode dropdown."
        },
        {
          type: "fill",
          q: "For full control of quality and tracks, use the ____ output mode.",
          answer: "advanced",
          accept: ["advanced"],
          explain: "Advanced mode unlocks the detailed encoding options."
        },
        {
          type: "match",
          q: "Match the mode to a fitting user.",
          pairs: [
            ["Simple", "A beginner wanting a quick start"],
            ["Advanced", "A creator tuning quality and tracks"]
          ],
          explain: "Simple suits beginners; Advanced suits fine-tuning."
        },
        {
          type: "truefalse",
          q: "Recording-first creators often prefer Advanced for quality control.",
          answer: true,
          explain: "Advanced lets you dial in CQP and multi-track for edited uploads."
        },
        {
          type: "mcq",
          q: "You do NOT need Advanced mode just to:",
          choices: [
            "Make a basic recording at decent quality",
            "Route audio to separate tracks",
            "Set a custom CQP value",
            "Choose a specific encoder preset"
          ],
          answer: 0,
          explain: "Simple mode handles a decent basic recording; the rest need Advanced."
        }
      ]
    },
    {
      id: "l26",
      title: "MP4 vs. MKV",
      intro: "MKV survives crashes and supports multi-track; MP4 is universal. Remux gives you both.",
      questions: [
        {
          type: "match",
          q: "Match each format to its strength.",
          pairs: [
            ["MKV", "Safe if OBS or the PC crashes mid-record"],
            ["MP4", "Widely compatible with editors and players"]
          ],
          explain: "MKV is crash-resistant; MP4 is the most compatible."
        },
        {
          type: "mcq",
          q: "The risk of recording straight to MP4 is:",
          choices: [
            "A crash can corrupt the whole file",
            "It cannot store video",
            "It has no audio",
            "It is illegal to use"
          ],
          answer: 0,
          explain: "An MP4 finalizes at the end, so a crash can lose the entire recording."
        },
        {
          type: "truefalse",
          q: "OBS can Remux an MKV into MP4 after recording without re-encoding.",
          answer: true,
          explain: "Remux repackages the same video into MP4 quickly, with no quality loss."
        },
        {
          type: "fill",
          q: "The recommended workflow is to record MKV then ____ to MP4.",
          answer: "remux",
          accept: ["remux"],
          explain: "Record safely to MKV, then remux to MP4 for editing."
        },
        {
          type: "mcq",
          q: "You can set OBS to automatically remux to MP4:",
          choices: [
            "In the Advanced recording settings",
            "By deleting the file",
            "In the audio mixer",
            "By lowering the resolution"
          ],
          answer: 0,
          explain: "Advanced recording has an 'Automatically remux to mp4' option."
        },
        {
          type: "truefalse",
          q: "Remuxing re-encodes the video and reduces quality.",
          answer: false,
          explain: "Remuxing only rewraps the container; it does not re-encode or lose quality."
        },
        {
          type: "mcq",
          q: "For a recording-first creator who edits later, the safest combo is:",
          choices: [
            "Record MKV, then remux to MP4",
            "Record MP4 with no backup",
            "Record audio only",
            "Never record to disk"
          ],
          answer: 0,
          explain: "MKV protects the take; remuxing to MP4 keeps editors happy."
        }
      ]
    },
    {
      id: "l27",
      title: "Choosing an Encoder",
      intro: "Software (x264) uses your CPU; hardware encoders (NVENC, AMD, QuickSync) use your GPU.",
      questions: [
        {
          type: "match",
          q: "Match each encoder to what it uses.",
          pairs: [
            ["x264", "Your CPU (software)"],
            ["NVENC", "An NVIDIA GPU"],
            ["AMD / VCE", "An AMD GPU"],
            ["QuickSync", "An Intel GPU"]
          ],
          explain: "x264 is CPU-based; NVENC, AMD, and QuickSync are hardware encoders."
        },
        {
          type: "mcq",
          q: "A hardware encoder like NVENC is attractive because it:",
          choices: [
            "Offloads encoding from the CPU, freeing it for other work",
            "Requires no GPU",
            "Always produces smaller files than x264",
            "Removes the need for audio"
          ],
          answer: 0,
          explain: "Hardware encoders spare the CPU, useful when recording games or heavy apps."
        },
        {
          type: "truefalse",
          q: "Modern NVENC produces quality very close to x264 at similar bitrates.",
          answer: true,
          explain: "Recent NVENC is excellent and typically indistinguishable for most content."
        },
        {
          type: "fill",
          q: "NVIDIA's dedicated hardware encoder is called ____.",
          answer: "nvenc",
          accept: ["nvenc"],
          explain: "NVENC is NVIDIA's built-in video encoder."
        },
        {
          type: "mcq",
          q: "x264 on a weak CPU while gaming can cause:",
          choices: [
            "Lag and dropped/encoding-overloaded frames",
            "A brighter webcam",
            "More scenes automatically",
            "Faster internet"
          ],
          answer: 0,
          explain: "Software encoding competes with the game for CPU, causing lag and overload."
        },
        {
          type: "truefalse",
          q: "If your CPU is busy, moving to a GPU encoder often smooths recording.",
          answer: true,
          explain: "Offloading to the GPU frees the CPU and reduces encoding overload."
        },
        {
          type: "mcq",
          q: "The best encoder choice depends mainly on:",
          choices: [
            "Your hardware and what else is running",
            "The color of your desk",
            "The number of tabs open in your browser",
            "Your keyboard brand"
          ],
          answer: 0,
          explain: "Pick the encoder that fits your CPU/GPU and workload."
        }
      ]
    },
    {
      id: "l28",
      title: "Bitrate vs. Quality (CQP/CRF)",
      intro: "For recording, constant-quality modes (CQP/CRF) usually beat a fixed bitrate.",
      questions: [
        {
          type: "mcq",
          q: "For local recording, a constant-quality mode like CQP or CRF is preferred because:",
          choices: [
            "It keeps a steady visual quality and spends bits only where needed",
            "It always makes the smallest possible file",
            "It removes audio",
            "It is required for streaming"
          ],
          answer: 0,
          explain: "Constant-quality holds visual quality steady, using more bits only on complex scenes."
        },
        {
          type: "mcq",
          q: "In CQP, a lower number means:",
          choices: [
            "Higher quality and a larger file",
            "Lower quality and a smaller file",
            "No video at all",
            "Slower internet"
          ],
          answer: 0,
          explain: "Lower CQP/CRF equals higher quality (and bigger files)."
        },
        {
          type: "truefalse",
          q: "A CQP value around 16 to 20 is a common sweet spot for high-quality recordings.",
          answer: true,
          explain: "Roughly 16-20 CQP gives near-lossless-looking recordings at reasonable size."
        },
        {
          type: "fill",
          q: "Constant-quality recording uses CQP or ____ rate control.",
          answer: "crf",
          accept: ["crf"],
          explain: "x264 uses CRF; NVENC uses CQP, both constant-quality."
        },
        {
          type: "match",
          q: "Match the rate control to its behavior.",
          pairs: [
            ["CBR", "Constant bitrate, best for streaming"],
            ["CQP/CRF", "Constant quality, best for recording"],
            ["VBR", "Variable bitrate within limits"]
          ],
          explain: "CBR is steady bits for streams; CQP/CRF is steady quality for recordings."
        },
        {
          type: "truefalse",
          q: "Fixed bitrate can waste bits on simple scenes and starve complex ones.",
          answer: true,
          explain: "A single bitrate over- or under-spends depending on scene complexity."
        },
        {
          type: "mcq",
          q: "Setting CQP to a very low number like 10 mainly results in:",
          choices: [
            "Excellent quality but very large files",
            "A broken recording",
            "No audio",
            "Faster editing"
          ],
          answer: 0,
          explain: "Very low CQP looks superb but the files grow quickly."
        }
      ]
    },
    {
      id: "l29",
      title: "Encoder Presets",
      intro: "Presets trade CPU time for compression efficiency; slower presets pack quality into fewer bits.",
      questions: [
        {
          type: "mcq",
          q: "In x264, a slower preset generally gives:",
          choices: [
            "Better compression (smaller file at the same quality)",
            "Worse quality always",
            "No effect at all",
            "Louder audio"
          ],
          answer: 0,
          explain: "Slower presets work the CPU harder to compress more efficiently."
        },
        {
          type: "truefalse",
          q: "Slower x264 presets demand more CPU power.",
          answer: true,
          explain: "The slower the preset, the more CPU it consumes per frame."
        },
        {
          type: "fill",
          q: "The x264 preset scale runs from ultrafast to ____.",
          answer: "veryslow",
          accept: ["veryslow", "very slow", "placebo"],
          explain: "Presets range from ultrafast up to veryslow (and placebo)."
        },
        {
          type: "match",
          q: "Match the preset to its trade-off.",
          pairs: [
            ["ultrafast", "Low CPU, larger files"],
            ["medium", "A balanced middle ground"],
            ["slow/veryslow", "High CPU, best compression"]
          ],
          explain: "Faster saves CPU; slower saves file size at the cost of CPU."
        },
        {
          type: "mcq",
          q: "For NVENC, choosing the Quality or Max Quality preset instead of Performance:",
          choices: [
            "Improves output at a small extra GPU cost",
            "Turns off the GPU",
            "Deletes the recording",
            "Removes all audio"
          ],
          answer: 0,
          explain: "Higher NVENC presets improve quality with modest extra GPU load."
        },
        {
          type: "truefalse",
          q: "If recording causes lag, using a faster preset can reduce the load.",
          answer: true,
          explain: "A faster preset lightens the encoder, trading some efficiency for smoothness."
        },
        {
          type: "mcq",
          q: "The right preset is the one that:",
          choices: [
            "Gives good quality while staying smooth on your hardware",
            "Is always the slowest available",
            "Is always ultrafast",
            "Matches your webcam brand"
          ],
          answer: 0,
          explain: "Balance quality against smooth performance on your specific machine."
        }
      ]
    },
    {
      id: "l30",
      title: "Resolution & FPS for Recording",
      intro: "Match your recording resolution and frame rate to your final video and your hardware.",
      questions: [
        {
          type: "mcq",
          q: "For most YouTube uploads, recording at 1080p is a strong default because:",
          choices: [
            "It is sharp, widely supported, and manageable in size",
            "It is the lowest quality possible",
            "It cannot be edited",
            "YouTube rejects anything else"
          ],
          answer: 0,
          explain: "1080p balances sharpness, compatibility, and file size for most creators."
        },
        {
          type: "truefalse",
          q: "Recording at a higher resolution than you publish can allow reframing or zooming in edit.",
          answer: true,
          explain: "Extra pixels give room to punch in or reframe without losing final sharpness."
        },
        {
          type: "match",
          q: "Match the content to a sensible recording setup.",
          pairs: [
            ["Tutorial", "1080p at 30 fps"],
            ["Fast gameplay", "1080p at 60 fps"],
            ["Cinematic b-roll", "Higher resolution, careful lighting"]
          ],
          explain: "Match resolution and FPS to the motion and purpose of the footage."
        },
        {
          type: "fill",
          q: "Recording higher-resolution footage leaves room to ____ or reframe in editing.",
          answer: "crop",
          accept: ["crop", "zoom", "punch in"],
          explain: "Extra resolution lets you crop or zoom without softening the final image."
        },
        {
          type: "truefalse",
          q: "There is no cost to always recording in 4K at 60 fps.",
          answer: false,
          explain: "4K60 balloons file sizes and encoding load, so use it only when it is needed."
        },
        {
          type: "mcq",
          q: "If your hardware struggles at 4K, a smart move is:",
          choices: [
            "Record 1080p at a quality your system sustains",
            "Record at 1 fps",
            "Turn off audio",
            "Delete OBS"
          ],
          answer: 0,
          explain: "A smooth, high-quality 1080p beats a stuttering, overloaded 4K."
        },
        {
          type: "truefalse",
          q: "Your recording FPS should generally match the FPS of your final published video.",
          answer: true,
          explain: "Matching frame rates avoids conversion artifacts and judder."
        }
      ]
    },
    {
      id: "l31",
      title: "File Path & Naming",
      intro: "A clear recording folder and naming pattern saves hours of hunting for footage.",
      questions: [
        {
          type: "mcq",
          q: "You set where recordings are saved in:",
          choices: [
            "Settings then Output (Recording Path)",
            "The audio mixer",
            "The Scenes dock",
            "The Windows lock screen"
          ],
          answer: 0,
          explain: "The Recording Path field in Output settings controls the save folder."
        },
        {
          type: "truefalse",
          q: "Saving recordings to a fast drive with plenty of free space is a good idea.",
          answer: true,
          explain: "Video files are large; a fast drive with headroom avoids stutter and full-disk errors."
        },
        {
          type: "fill",
          q: "OBS can auto-name files using a ____ so each recording is unique.",
          answer: "timestamp",
          accept: ["timestamp", "date", "date and time"],
          explain: "A date/time filename format keeps recordings uniquely named."
        },
        {
          type: "match",
          q: "Match the habit to its payoff.",
          pairs: [
            ["Dedicated recordings folder", "Easy to find footage"],
            ["Date-based file names", "No accidental overwrites"],
            ["Fast drive with free space", "Smooth, uninterrupted capture"]
          ],
          explain: "Organized paths and naming keep footage findable and safe."
        },
        {
          type: "truefalse",
          q: "Recording to a nearly full disk can abruptly stop your capture.",
          answer: true,
          explain: "If the disk fills, OBS cannot keep writing and the recording ends."
        },
        {
          type: "mcq",
          q: "A common recording-first habit is to:",
          choices: [
            "Offload footage and clear space regularly",
            "Never delete anything and let the disk fill",
            "Record only to a USB stick",
            "Store files inside the OBS program folder"
          ],
          answer: 0,
          explain: "Regularly moving finished footage keeps room for new recordings."
        }
      ]
    },
    {
      id: "l32",
      title: "A Quality Recording Recipe",
      intro: "Combine the choices from this unit into one dependable recording setup.",
      questions: [
        {
          type: "order",
          q: "Order a solid recording-quality setup.",
          items: [
            "Choose Advanced output mode",
            "Pick an encoder your hardware handles",
            "Use CQP/CRF for constant quality",
            "Record MKV and auto-remux to MP4"
          ],
          explain: "Advanced mode, a fitting encoder, constant-quality, and safe MKV-to-MP4."
        },
        {
          type: "mcq",
          q: "A dependable recording recipe for a YouTube creator is:",
          choices: [
            "1080p, matching FPS, CQP ~18, hardware encoder, MKV then remux",
            "1 fps, no audio, MP4 only",
            "Lowest quality, no backup format",
            "Audio only, no video"
          ],
          answer: 0,
          explain: "This combination gives sharp, safe, editable footage on most machines."
        },
        {
          type: "truefalse",
          q: "Once dialed in, you can save these choices in a Profile to reuse them.",
          answer: true,
          explain: "Profiles store output, video, and audio settings for instant reuse."
        },
        {
          type: "fill",
          q: "For recording, prefer constant-____ (CQP/CRF) over a fixed bitrate.",
          answer: "quality",
          accept: ["quality"],
          explain: "Constant-quality keeps a steady look and spends bits efficiently."
        },
        {
          type: "match",
          q: "Match each setting to its recording-first choice.",
          pairs: [
            ["Container", "MKV (then remux to MP4)"],
            ["Rate control", "CQP or CRF"],
            ["Encoder", "Whatever your hardware handles best"]
          ],
          explain: "Safe container, constant quality, and a fitting encoder define the recipe."
        },
        {
          type: "truefalse",
          q: "The best settings are the ones that stay smooth on your hardware, not the highest numbers.",
          answer: true,
          explain: "A recording that never lags beats one with heroic settings that stutters."
        },
        {
          type: "mcq",
          q: "After setting up, the final step before trusting it is to:",
          choices: [
            "Do a test recording and review quality and smoothness",
            "Immediately record a two-hour session blind",
            "Uninstall and reinstall OBS",
            "Delete all other scenes"
          ],
          answer: 0,
          explain: "A short test confirms the recipe works before you rely on it."
        }
      ]
    }
  ]
});
