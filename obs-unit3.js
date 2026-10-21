window.ACADEMY.addUnit("obs", {
  id: "unit-3",
  title: "Audio in OBS",
  color: "#4b5bd4",
  icon: "🎙️",
  description: "Clean audio matters more than video. Set up mics, desktop sound, the mixer, and filters.",
  lessons: [
    {
      id: "l17",
      title: "Why Audio Matters Most",
      intro: "Viewers forgive average video far more than bad audio; clean sound keeps people watching.",
      questions: [
        {
          type: "mcq",
          q: "For keeping viewers, what usually matters more?",
          choices: [
            "Clean, clear audio",
            "8K video resolution",
            "The largest possible file",
            "A very fast frame rate"
          ],
          answer: 0,
          explain: "Audiences tolerate modest video but quickly leave when audio is bad."
        },
        {
          type: "truefalse",
          q: "Bad audio is one of the fastest ways to lose viewers.",
          answer: true,
          explain: "Harsh, muffled, or noisy audio drives people away almost immediately."
        },
        {
          type: "fill",
          q: "Most creators agree that ____ quality matters more than raw video resolution.",
          answer: "audio",
          accept: ["audio", "sound"],
          explain: "Audio quality is repeatedly ranked above resolution for retention."
        },
        {
          type: "mcq",
          q: "Two audio sources OBS commonly captures are:",
          choices: [
            "Your microphone and your desktop sound",
            "Your microphone and your webcam's video feed",
            "Your desktop sound and your capture card's video",
            "Your microphone and your browser's notification pop-ups"
          ],
          answer: 0,
          explain: "Mic (your voice) and desktop audio (system sound) are the two staples."
        },
        {
          type: "truefalse",
          q: "You can control each audio source's volume separately in OBS.",
          answer: true,
          explain: "The Audio Mixer gives each source its own volume slider and meter."
        },
        {
          type: "match",
          q: "Match each audio source to what it is.",
          pairs: [
            ["Mic/Auxiliary Audio", "Your microphone / voice"],
            ["Desktop Audio", "Sound from your computer"]
          ],
          explain: "Mic is your voice; Desktop Audio is the system's output."
        },
        {
          type: "mcq",
          q: "A simple win for better audio is:",
          choices: [
            "Recording in a quiet room close to the mic",
            "Turning the mic gain all the way up in the mixer",
            "Adding Noise Suppression with the strongest setting",
            "Recording at 60 fps"
          ],
          answer: 0,
          explain: "A quiet space and good mic distance beat almost any software fix."
        }
      ]
    },
    {
      id: "l18",
      title: "The Audio Mixer",
      intro: "The mixer shows a volume meter and controls for each audio source.",
      questions: [
        {
          type: "mcq",
          q: "The moving bars in the Audio Mixer are:",
          choices: [
            "Level meters showing how loud each source is",
            "Volume sliders that set how loud each source is",
            "Upload bandwidth meters for your stream",
            "Indicators showing which audio track is active"
          ],
          answer: 0,
          explain: "The meters visualize your audio levels in real time."
        },
        {
          type: "mcq",
          q: "For a healthy speaking level, your meter should mostly peak around:",
          choices: [
            "The yellow zone, not slamming into red",
            "The red zone, as loud as you can push it",
            "The bottom of the green, barely moving at all",
            "Right at the very top, touching 0 dB constantly"
          ],
          answer: 0,
          explain: "Aim for the yellow region; red means you are clipping (too loud)."
        },
        {
          type: "truefalse",
          q: "Audio that constantly hits red is clipping and will sound distorted.",
          answer: true,
          explain: "Clipping crushes the loudest peaks, adding harsh distortion."
        },
        {
          type: "fill",
          q: "When audio is too loud and distorts, it is said to be ____.",
          answer: "clipping",
          accept: ["clipping", "clipped"],
          explain: "Overloaded audio that distorts is called clipping."
        },
        {
          type: "match",
          q: "Match each mixer control to its job.",
          pairs: [
            ["Volume slider", "Sets how loud the source is"],
            ["Mute button", "Silences the source"],
            ["Meter", "Shows current loudness"]
          ],
          explain: "Slider adjusts, mute silences, and the meter monitors."
        },
        {
          type: "truefalse",
          q: "A muted source shows a speaker icon with a line and records no sound.",
          answer: true,
          explain: "Muting stops that source from being recorded or streamed."
        },
        {
          type: "mcq",
          q: "If your voice is too quiet, the quickest fix in the mixer is to:",
          choices: [
            "Raise that source's volume (or add a Gain filter)",
            "Raise the desktop audio so everything sounds louder",
            "Add a Limiter filter set to a low threshold",
            "Move the mic source higher in the Sources list"
          ],
          answer: 0,
          explain: "Raise the slider, and if it maxes out, add a Gain filter for more."
        }
      ]
    },
    {
      id: "l19",
      title: "Mic vs. Desktop Audio",
      intro: "OBS separates your voice from system sound so you can balance and edit them.",
      questions: [
        {
          type: "match",
          q: "Match the source to the sound it captures.",
          pairs: [
            ["Mic/Aux", "Your voice from the microphone"],
            ["Desktop Audio", "Game, music, and app sound"]
          ],
          explain: "Mic is your voice; Desktop Audio is everything the computer plays."
        },
        {
          type: "mcq",
          q: "Recording mic and desktop to separate tracks helps you:",
          choices: [
            "Balance or remove one of them in editing",
            "Record both at a higher combined volume level",
            "Reduce the size of the final recording file",
            "Keep audio in sync"
          ],
          answer: 0,
          explain: "Separate tracks let you fix or mute one side later without touching the other."
        },
        {
          type: "truefalse",
          q: "If you hear yourself echo, desktop audio may be capturing your mic playback.",
          answer: true,
          explain: "Monitoring routed to desktop, or speakers into the mic, can create echo."
        },
        {
          type: "fill",
          q: "Your voice is captured by the ____ source in the mixer.",
          answer: "mic",
          accept: ["mic", "microphone"],
          explain: "The Mic/Aux source captures your microphone."
        },
        {
          type: "mcq",
          q: "To keep background music quieter than your voice, you should:",
          choices: [
            "Lower the desktop audio relative to the mic",
            "Raise the mic to max and leave the music alone",
            "Add Noise Suppression to the desktop audio",
            "Mute the desktop audio whenever you speak"
          ],
          answer: 0,
          explain: "Balance the two so your voice sits clearly above the music."
        },
        {
          type: "truefalse",
          q: "You can assign each audio source to different recording tracks in Advanced settings.",
          answer: true,
          explain: "Advanced output lets you route mic and desktop to separate tracks for editing."
        },
        {
          type: "mcq",
          q: "A common mistake is:",
          choices: [
            "Recording with the mic accidentally muted",
            "Recording in a quiet room with soft furniture",
            "Checking the meters before you press record",
            "Doing a test take"
          ],
          answer: 0,
          explain: "Always confirm the mic meter is moving; a muted mic ruins a take."
        }
      ]
    },
    {
      id: "l20",
      title: "Noise Suppression",
      intro: "A Noise Suppression filter removes steady background noise like fans and hum.",
      questions: [
        {
          type: "mcq",
          q: "Noise Suppression is best at removing:",
          choices: [
            "Steady background noise like a fan or hum",
            "Loud sudden sounds like a door slamming shut",
            "Echo and room reverb from bare walls and floors",
            "Your voice getting louder and quieter as you move"
          ],
          answer: 0,
          explain: "It targets constant, low-level noise, not your speech."
        },
        {
          type: "truefalse",
          q: "Noise Suppression is added as a filter on the mic source.",
          answer: true,
          explain: "Right-click the mic, choose Filters, and add Noise Suppression."
        },
        {
          type: "fill",
          q: "Audio filters are added by right-clicking a source and choosing ____.",
          answer: "filters",
          accept: ["filters", "filter"],
          explain: "The Filters window is where you add and stack audio effects."
        },
        {
          type: "mcq",
          q: "A downside of aggressive noise suppression is:",
          choices: [
            "Your voice can start to sound thin or robotic",
            "It mutes your mic completely whenever you pause",
            "It makes the meter peak in the red more often",
            "It removes the desktop audio along with the noise"
          ],
          answer: 0,
          explain: "Too much suppression can chew into your voice, so use a moderate amount."
        },
        {
          type: "match",
          q: "Match the method to its trade-off.",
          pairs: [
            ["RNNoise", "Stronger, uses a bit more CPU"],
            ["Speex", "Lighter, simpler suppression"]
          ],
          explain: "RNNoise is stronger and heavier; Speex is lighter."
        },
        {
          type: "truefalse",
          q: "The best noise reduction of all is recording in a quieter space to begin with.",
          answer: true,
          explain: "Fixing the room beats fixing the audio; filters are a second line of defense."
        },
        {
          type: "mcq",
          q: "The correct order of thinking about noise is:",
          choices: [
            "Reduce noise at the source first, then filter what remains",
            "Stack strong filters first, then fix the room only if they fail",
            "Raise the mic gain until your voice drowns the noise out",
            "Record as is and remove all the noise later in your editor"
          ],
          answer: 0,
          explain: "Quiet the room and improve mic technique first; filters clean up the rest."
        }
      ]
    },
    {
      id: "l21",
      title: "Gain, Gate & Compressor",
      intro: "Three staple filters shape loudness: Gain boosts, Noise Gate cuts silence, Compressor evens things out.",
      questions: [
        {
          type: "match",
          q: "Match each filter to what it does.",
          pairs: [
            ["Gain", "Boosts a quiet signal louder"],
            ["Noise Gate", "Silences audio below a threshold"],
            ["Compressor", "Evens out loud and quiet parts"]
          ],
          explain: "Gain raises level, the gate mutes quiet gaps, and the compressor tames dynamics."
        },
        {
          type: "mcq",
          q: "A Noise Gate is useful for:",
          choices: [
            "Cutting out room noise when you are not speaking",
            "Making your voice sound fuller by boosting the low frequencies",
            "Keeping loud peaks from clipping when you suddenly shout",
            "Removing a steady fan hum while you are talking over it"
          ],
          answer: 0,
          explain: "The gate closes during silence, hiding low background noise between sentences."
        },
        {
          type: "truefalse",
          q: "A Compressor helps keep your voice at a more even, consistent volume.",
          answer: true,
          explain: "Compression reduces the gap between loud and quiet, smoothing your level."
        },
        {
          type: "fill",
          q: "The ____ filter boosts a microphone that is too quiet.",
          answer: "gain",
          accept: ["gain"],
          explain: "Gain increases the level of a weak signal."
        },
        {
          type: "order",
          q: "Order a common mic filter chain.",
          items: [
            "Noise Suppression",
            "Noise Gate",
            "Compressor",
            "Gain"
          ],
          explain: "A typical chain cleans noise, gates silence, compresses, then trims level."
        },
        {
          type: "truefalse",
          q: "Setting a Noise Gate threshold too high can cut off the start of your words.",
          answer: true,
          explain: "An aggressive gate may clip soft syllables, so tune the threshold carefully."
        },
        {
          type: "mcq",
          q: "Over-compressing your voice tends to:",
          choices: [
            "Make it sound flat and pull up background noise",
            "Make it sound clearer and push the meter deeper into the red",
            "Lower the noise floor so pauses become completely silent",
            "Remove room echo and make the voice sound closer to the mic"
          ],
          answer: 0,
          explain: "Heavy compression flattens dynamics and can raise the noise floor."
        }
      ]
    },
    {
      id: "l22",
      title: "Monitoring & Sync",
      intro: "Audio monitoring lets you hear a source; sync offset fixes lip-sync problems.",
      questions: [
        {
          type: "mcq",
          q: "Audio Monitoring lets you:",
          choices: [
            "Hear a source through your headphones",
            "Send a source to a separate track in the recording file",
            "Mute a source in the recording while still showing its meter",
            "Delay a source so it lines up with your webcam video"
          ],
          answer: 0,
          explain: "Monitoring routes a source to your headphones so you can hear it live."
        },
        {
          type: "truefalse",
          q: "Monitoring through speakers instead of headphones can cause echo or feedback.",
          answer: true,
          explain: "Speakers feed back into the mic, so headphones are safer for monitoring."
        },
        {
          type: "fill",
          q: "If your audio is slightly ahead of the video, adjust the Sync ____ on that source.",
          answer: "offset",
          accept: ["offset"],
          explain: "Sync Offset shifts a source's audio to line up with the picture."
        },
        {
          type: "match",
          q: "Match each monitoring mode to its behavior.",
          pairs: [
            ["Monitor Off", "You do not hear the source live"],
            ["Monitor Only", "You hear it but it is not output"],
            ["Monitor and Output", "You hear it and it is recorded"]
          ],
          explain: "These three modes control hearing versus recording a source."
        },
        {
          type: "mcq",
          q: "Lip-sync being off (voice behind mouth) is fixed by:",
          choices: [
            "Adjusting the sync offset for that source",
            "Moving the mic source higher in the Sources list",
            "Adding a Noise Gate filter to the mic source",
            "Raising the frame rate in Video settings"
          ],
          answer: 0,
          explain: "A sync offset nudges the audio earlier or later to match the video."
        },
        {
          type: "truefalse",
          q: "Advanced Audio Properties is where you set per-source monitoring and sync offset.",
          answer: true,
          explain: "The gear/Advanced Audio Properties panel holds monitoring, sync, and tracks."
        },
        {
          type: "mcq",
          q: "The safest way to monitor while recording your voice is:",
          choices: [
            "Headphones, so the sound does not leak into the mic",
            "Speakers turned down low with the mic set to Monitor Only",
            "Speakers at normal volume with Noise Suppression turned on",
            "No monitoring at all, so you never hear your own voice"
          ],
          answer: 0,
          explain: "Headphones prevent the monitored sound from re-entering the microphone."
        }
      ]
    },
    {
      id: "l23",
      title: "Multiple Audio Tracks",
      intro: "Recording voice and system sound on separate tracks gives you control in editing.",
      questions: [
        {
          type: "mcq",
          q: "Recording to multiple audio tracks is valuable because:",
          choices: [
            "You can adjust or mute each source in editing",
            "It makes each separate source sound louder in the file",
            "It lets OBS mix your mic and music automatically for you",
            "It keeps the recording smaller than a single mixed track"
          ],
          answer: 0,
          explain: "Separate tracks let an editor fix mic or music independently later."
        },
        {
          type: "truefalse",
          q: "Multiple audio tracks are set up in the Advanced output mode.",
          answer: true,
          explain: "Advanced output exposes track assignment for each source."
        },
        {
          type: "fill",
          q: "Assigning mic to track 1 and desktop to track 2 keeps them ____ in the file.",
          answer: "separate",
          accept: ["separate", "separated", "split"],
          explain: "Separate tracks stay independent inside the recording."
        },
        {
          type: "match",
          q: "Match the track plan to its benefit.",
          pairs: [
            ["Mic on its own track", "Fix or clean the voice alone"],
            ["Music on its own track", "Lower or replace music alone"],
            ["Combined mix track", "A quick single-file preview"]
          ],
          explain: "Isolated tracks give flexibility; a combined track is convenient."
        },
        {
          type: "truefalse",
          q: "MP4 files fully support multiple separate audio tracks in every editor.",
          answer: false,
          explain: "Multi-track support is more reliable in MKV; not every tool reads multi-track MP4 well."
        },
        {
          type: "mcq",
          q: "A recording-first creator benefits from multi-track because:",
          choices: [
            "Editing flexibility is worth more than a tiny file-size saving",
            "Separate tracks make the final uploaded video file smaller",
            "Multi-track recording removes background noise automatically",
            "YouTube needs separate audio tracks for every uploaded video"
          ],
          answer: 0,
          explain: "For edited YouTube videos, control in post is worth the extra tracks."
        },
        {
          type: "truefalse",
          q: "You can still export a single combined mix even when recording multiple tracks.",
          answer: true,
          explain: "OBS can write a mixed track alongside the separate ones for convenience."
        }
      ]
    },
    {
      id: "l24",
      title: "Audio Pre-Flight Checklist",
      intro: "A quick routine before every recording catches the most common audio mistakes.",
      questions: [
        {
          type: "order",
          q: "Order a solid audio pre-flight check.",
          items: [
            "Confirm the correct mic is selected",
            "Watch the mic meter while you speak",
            "Check levels peak in the yellow, not red",
            "Record a short test and listen back"
          ],
          explain: "Select, watch, level-check, then test-listen before the real take."
        },
        {
          type: "mcq",
          q: "The number one audio disaster to prevent is:",
          choices: [
            "Recording with no usable voice audio",
            "Having too many scenes",
            "A slightly soft background image",
            "Using 30 fps"
          ],
          answer: 0,
          explain: "A great take with dead or muted audio is unrecoverable, so always verify sound."
        },
        {
          type: "truefalse",
          q: "Listening back to a 10-second test is worth the time before a long recording.",
          answer: true,
          explain: "A short listen-back catches muted mics, wrong devices, and clipping early."
        },
        {
          type: "fill",
          q: "Before a big take, always do a short ____ recording and listen to it.",
          answer: "test",
          accept: ["test"],
          explain: "A test recording is the cheapest insurance for audio."
        },
        {
          type: "match",
          q: "Match the symptom to its likely cause.",
          pairs: [
            ["No voice recorded", "Wrong or muted mic"],
            ["Distorted, harsh voice", "Levels clipping in the red"],
            ["Constant hiss", "Noisy room or high gain"]
          ],
          explain: "Each classic symptom points to a specific setting to check."
        },
        {
          type: "truefalse",
          q: "Checking that the right microphone is selected should be part of every session.",
          answer: true,
          explain: "Windows updates and device changes can silently switch your default mic."
        },
        {
          type: "mcq",
          q: "If levels are too hot (red), you should:",
          choices: [
            "Lower the gain or move slightly back from the mic",
            "Raise the gain so the meter stays pinned at the top",
            "Add a Noise Gate so the loud parts get cut off",
            "Move much closer to the mic to get a stronger signal"
          ],
          answer: 0,
          explain: "Reduce gain or increase mic distance to bring peaks back into the yellow."
        }
      ]
    }
  ]
});
