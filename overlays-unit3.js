window.ACADEMY.addUnit("overlays", {
  id: "unit-3",
  title: "Standby Screens",
  color: "#2FB6FF",
  icon: "⏳",
  description: "Build the Starting Soon, Be Right Back, and Stream Over screens from one file with a live countdown.",
  lessons: [
    {
      id: "l17",
      title: "Why Standby Screens Matter",
      intro: "Standby screens hold the audience during the pre-show, breaks, and the wrap without dead air.",
      questions: [
        {
          type: "mcq",
          q: "A 'Starting Soon' screen is shown:",
          choices: [
            "Before the stream begins, while viewers gather",
            "Only after the stream ends",
            "During the most intense gameplay",
            "Never"
          ],
          answer: 0,
          explain: "Starting Soon fills the pre-show while an audience builds up."
        },
        {
          type: "truefalse",
          q: "Standby screens prevent an empty, silent frame during breaks.",
          answer: true,
          explain: "They give viewers something branded to look at instead of dead air."
        },
        {
          type: "fill",
          q: "The screen shown during a short break is the Be Right ____ screen.",
          answer: "back",
          accept: ["back"],
          explain: "The break screen is Be Right Back (BRB)."
        },
        {
          type: "match",
          q: "Match each standby state to when it's used.",
          pairs: [
            ["Starting Soon", "Pre-show"],
            ["Be Right Back", "A break"],
            ["Stream Over", "The wrap"]
          ],
          explain: "The three states cover the whole session's non-live moments."
        },
        {
          type: "truefalse",
          q: "Standby screens are opaque because there is nothing behind them to show.",
          answer: true,
          explain: "They fill the frame with the base color; no gameplay shows through."
        },
        {
          type: "mcq",
          q: "A good standby screen keeps viewers by:",
          choices: [
            "Showing branding, a countdown, and what's coming",
            "Displaying a blank black screen",
            "Muting everything with no visuals",
            "Ending the stream"
          ],
          answer: 0,
          explain: "Branding plus a countdown reassures viewers the show is coming."
        }
      ]
    },
    {
      id: "l18",
      title: "One File, Three States",
      intro: "standby.html renders all three screens; a ?state parameter picks soon, brb, or over.",
      questions: [
        {
          type: "match",
          q: "Match the URL to the screen it shows.",
          pairs: [
            ["standby.html?state=soon", "Starting Soon"],
            ["standby.html?state=brb", "Be Right Back"],
            ["standby.html?state=over", "Stream Over"]
          ],
          explain: "The ?state parameter selects which of the three screens renders."
        },
        {
          type: "mcq",
          q: "Using one file for all three states means:",
          choices: [
            "Consistent design and less to maintain",
            "You must edit code to switch",
            "Three separate designs to keep in sync",
            "No branding is possible"
          ],
          answer: 0,
          explain: "One file keeps the three states visually identical and easy to update."
        },
        {
          type: "truefalse",
          q: "The three states share the same construction and differ only in headline, status, and motif.",
          answer: true,
          explain: "Per the spec, the layout is identical; only the text/accent changes."
        },
        {
          type: "fill",
          q: "The parameter that selects the standby screen is ?____.",
          answer: "state",
          accept: ["state"],
          explain: "?state=soon|brb|over picks the screen."
        },
        {
          type: "truefalse",
          q: "If no ?state is given, standby.html defaults to the Starting Soon screen.",
          answer: true,
          explain: "The default state is 'soon' when none is specified."
        },
        {
          type: "mcq",
          q: "In OBS you would typically use standby.html:",
          choices: [
            "As three Browser Sources (or one, changing the URL) across three scenes",
            "As an audio source",
            "As a game capture",
            "As a webcam"
          ],
          answer: 0,
          explain: "Each standby scene loads the file with the matching ?state."
        }
      ]
    },
    {
      id: "l19",
      title: "The Countdown",
      intro: "The Starting Soon screen counts down, either a number of minutes from load or to a wall-clock time.",
      questions: [
        {
          type: "match",
          q: "Match the countdown parameter to its behavior.",
          pairs: [
            ["?mins=10", "Counts down 10:00 from load"],
            ["?to=19:30", "Counts down to a wall-clock time"],
            ["(no param)", "Defaults to 5 minutes"]
          ],
          explain: "You can count down a duration (?mins) or to a clock time (?to)."
        },
        {
          type: "mcq",
          q: "standby.html?state=soon&to=19:30 will:",
          choices: [
            "Count down to 7:30 PM",
            "Count up from zero",
            "Show Be Right Back",
            "Do nothing"
          ],
          answer: 0,
          explain: "?to=19:30 targets 7:30 PM wall-clock time."
        },
        {
          type: "truefalse",
          q: "The countdown runs in the page's own JavaScript, needing no OBS plugin.",
          answer: true,
          explain: "The timer is self-contained JS; no plugin is required."
        },
        {
          type: "fill",
          q: "To count down a set number of minutes from load, use ?____=N.",
          answer: "mins",
          accept: ["mins"],
          explain: "?mins=N counts down N minutes from when the page loads."
        },
        {
          type: "truefalse",
          q: "If ?to is a time that already passed today, the countdown rolls to that time tomorrow.",
          answer: true,
          explain: "The code advances the target to the next day if the time is already past."
        },
        {
          type: "mcq",
          q: "When the countdown hits zero, the screen:",
          choices: [
            "Switches to a 'LIVE ANY SECOND' message",
            "Deletes itself",
            "Shows an error",
            "Reboots OBS"
          ],
          answer: 0,
          explain: "At zero it displays 'LIVE ANY SECOND' instead of negative time."
        }
      ]
    },
    {
      id: "l20",
      title: "Headline, Status & Chip",
      intro: "The center stack is the orb, a two-part headline (one word knocked out in yellow), a status line, and a chip.",
      questions: [
        {
          type: "mcq",
          q: "In 'STARTING SOON', the word SOON is styled as:",
          choices: [
            "A Signal-Yellow knockout block",
            "Plain gray text",
            "An image",
            "Invisible"
          ],
          answer: 0,
          explain: "One headline word uses the yellow knockout treatment for emphasis."
        },
        {
          type: "truefalse",
          q: "The status line under the headline uses IBM Plex Mono in uppercase.",
          answer: true,
          explain: "The status/count line is set in IBM Plex Mono, spaced and uppercase."
        },
        {
          type: "fill",
          q: "The big central mascot on the standby screen is the ____.",
          answer: "orb",
          accept: ["orb"],
          explain: "A large static orb sits at the top of the center stack."
        },
        {
          type: "match",
          q: "Match the center-stack element to its content on BRB.",
          pairs: [
            ["Headline", "BE RIGHT BACK"],
            ["Status", "GRAB A DRINK"],
            ["Chip", "STAY TUNED"]
          ],
          explain: "Each state supplies its own headline, status, and chip text."
        },
        {
          type: "truefalse",
          q: "The yellow chip (like PRESS START) is a small call-to-action pill under the status.",
          answer: true,
          explain: "The chip is a yellow pill with a short prompt beneath the status line."
        },
        {
          type: "mcq",
          q: "The headline font used for the big words is:",
          choices: [
            "Anton",
            "Times New Roman",
            "Comic Sans",
            "Courier"
          ],
          answer: 0,
          explain: "Anton is the display font for the large headline words."
        }
      ]
    },
    {
      id: "l21",
      title: "Corner Information",
      intro: "The safe corners hold your socials (bottom-left), schedule (bottom-right), wordmark (top-left), and a live chip (top-right).",
      questions: [
        {
          type: "match",
          q: "Match the corner to its content.",
          pairs: [
            ["Bottom-left", "Socials handles"],
            ["Bottom-right", "Upload/schedule"],
            ["Top-left", "WIBBLY wordmark"],
            ["Top-right", "Live status chip"]
          ],
          explain: "Each safe corner carries a specific piece of info."
        },
        {
          type: "mcq",
          q: "The socials row (bottom-left) is styled in:",
          choices: [
            "Barlow Condensed, uppercase, wide letter-spacing",
            "A cursive script",
            "Tiny gray serif",
            "An image only"
          ],
          answer: 0,
          explain: "Socials use Barlow Condensed 700, uppercase, wide tracking."
        },
        {
          type: "truefalse",
          q: "The live chip in the top-right changes label per state (STARTING / AFK / OFFLINE).",
          answer: true,
          explain: "The chip's label reflects the current standby state."
        },
        {
          type: "fill",
          q: "The pulsing dot on the live chip is colored Hot ____.",
          answer: "pink",
          accept: ["pink"],
          explain: "The live dot pulses in hot pink."
        },
        {
          type: "match",
          q: "Match the state to its live-chip label.",
          pairs: [
            ["Starting Soon", "STARTING"],
            ["Be Right Back", "AFK"],
            ["Stream Over", "OFFLINE"]
          ],
          explain: "The chip label communicates the current state at a glance."
        },
        {
          type: "truefalse",
          q: "All four corners sit inside the 96px safe margin.",
          answer: true,
          explain: "Corner elements respect the safe margin so nothing is clipped."
        }
      ]
    },
    {
      id: "l22",
      title: "Background Texture & Rules",
      intro: "The standby background is solid base with a faint blue dot-matrix and thin brand hairlines top and bottom.",
      questions: [
        {
          type: "mcq",
          q: "The standby background texture is:",
          choices: [
            "A faint blue dot-matrix over the solid base color",
            "A full-bleed rainbow gradient",
            "A photo of a city",
            "Pure white"
          ],
          answer: 0,
          explain: "A subtle blue dot-matrix adds texture without a forbidden gradient wash."
        },
        {
          type: "truefalse",
          q: "A faint dot-matrix is allowed, but a full gradient wash is against the brand rules.",
          answer: true,
          explain: "The spec permits subtle texture but forbids full-bleed gradient washes."
        },
        {
          type: "fill",
          q: "Thin gradient lines across the top and bottom are called brand ____.",
          answer: "hairlines",
          accept: ["hairlines", "rules", "hairline"],
          explain: "The thin top/bottom lines are brand hairlines (rules)."
        },
        {
          type: "match",
          q: "Match the background element to its purpose.",
          pairs: [
            ["Solid base color", "Clean opaque backdrop"],
            ["Dot-matrix", "Subtle texture"],
            ["Hairlines", "Frame the composition"]
          ],
          explain: "Base, texture, and hairlines build a clean branded backdrop."
        },
        {
          type: "truefalse",
          q: "The dot-matrix is drawn with a CSS radial-gradient tile, not an image.",
          answer: true,
          explain: "It's a repeating radial-gradient background, keeping the file self-contained."
        },
        {
          type: "mcq",
          q: "Keeping the texture faint (~6% opacity) matters because it:",
          choices: [
            "Adds interest without competing with the headline",
            "Makes the text unreadable",
            "Increases the file size a lot",
            "Slows your internet"
          ],
          answer: 0,
          explain: "Subtle texture supports the design without distracting from the message."
        }
      ]
    },
    {
      id: "l23",
      title: "Wiring Standby into OBS",
      intro: "Add standby.html as a full-canvas Browser Source in each standby scene, with the matching ?state.",
      questions: [
        {
          type: "order",
          q: "Order the steps to set up the Starting Soon scene.",
          items: [
            "Create a 'Starting Soon' scene",
            "Add a Browser Source at 1920x1080",
            "Point it at standby.html?state=soon",
            "Optionally add &mins= or &to= for the countdown"
          ],
          explain: "Scene, full-canvas source, the file with ?state=soon, then countdown options."
        },
        {
          type: "mcq",
          q: "Because standby screens are opaque, in their scene you:",
          choices: [
            "Do not need a game or webcam behind them",
            "Must add a game capture behind them",
            "Must make them transparent",
            "Must mute the mic"
          ],
          answer: 0,
          explain: "Opaque standby fills the frame, so nothing is needed behind it."
        },
        {
          type: "truefalse",
          q: "You can reload the Browser Source to restart the countdown from its target.",
          answer: true,
          explain: "Refreshing the source re-reads the URL and restarts the timer."
        },
        {
          type: "fill",
          q: "Set the Browser Source size to 1920x____ to match the canvas.",
          answer: "1080",
          accept: ["1080"],
          explain: "Full-canvas sizing keeps the standby crisp."
        },
        {
          type: "match",
          q: "Match the standby scene to its URL.",
          pairs: [
            ["Starting Soon scene", "standby.html?state=soon"],
            ["Be Right Back scene", "standby.html?state=brb"],
            ["Stream Over scene", "standby.html?state=over"]
          ],
          explain: "Each scene loads the file with its matching state."
        },
        {
          type: "truefalse",
          q: "You should preview each standby state in a browser before going live.",
          answer: true,
          explain: "A quick browser check confirms the countdown and text before stream time."
        }
      ]
    },
    {
      id: "l24",
      title: "Standby Best Practices",
      intro: "Set an honest countdown, keep copy short, and make sure your real handles and schedule are correct.",
      questions: [
        {
          type: "mcq",
          q: "A good habit for the Starting Soon countdown is to:",
          choices: [
            "Set an honest target you'll actually hit",
            "Set 60 minutes then start immediately",
            "Hide the countdown entirely",
            "Count up forever"
          ],
          answer: 0,
          explain: "An accurate countdown builds trust; a misleading one frustrates viewers."
        },
        {
          type: "truefalse",
          q: "You should replace the placeholder handles with your real socials before streaming.",
          answer: true,
          explain: "The template ships with sample handles; swap in your real ones."
        },
        {
          type: "fill",
          q: "Standby copy should be kept ____ so it reads at a glance.",
          answer: "short",
          accept: ["short", "brief", "concise"],
          explain: "Short, punchy copy is easiest to read on a standby screen."
        },
        {
          type: "match",
          q: "Match the standby element to a best practice.",
          pairs: [
            ["Countdown", "Be honest about timing"],
            ["Socials", "Use your real handles"],
            ["Schedule", "Show your real upload days"]
          ],
          explain: "Accurate, real information makes standby screens useful."
        },
        {
          type: "truefalse",
          q: "Leaving the default sample text on a live standby screen looks unfinished.",
          answer: true,
          explain: "Placeholder copy signals a rushed setup; customize it."
        },
        {
          type: "mcq",
          q: "The overall goal of a standby screen is to:",
          choices: [
            "Keep the audience engaged and informed during non-live moments",
            "Fill disk space",
            "Increase your bitrate",
            "Hide your branding"
          ],
          answer: 0,
          explain: "Standby screens hold and inform the audience between live segments."
        }
      ]
    }
  ]
});
