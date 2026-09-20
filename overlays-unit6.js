window.ACADEMY.addUnit("overlays", {
  id: "unit-6",
  title: "Alerts",
  color: "#2FB6FF",
  icon: "🔔",
  description: "Build alerts.html: color-coded follower/sub/tip/raid toasts with a queue, test URLs, and a backend-agnostic API.",
  lessons: [
    {
      id: "l41",
      title: "What Alerts Do",
      intro: "Alerts are toast pop-ups that celebrate a new follower, sub, donation, or raid in real time.",
      questions: [
        {
          type: "mcq",
          q: "A stream alert is:",
          choices: [
            "A pop-up celebrating an event like a follow or donation",
            "A recording error",
            "The countdown",
            "A webcam filter"
          ],
          answer: 0,
          explain: "Alerts are on-screen toasts that acknowledge viewer events."
        },
        {
          type: "truefalse",
          q: "alerts.html handles four event types: follow, sub, tip, and raid.",
          answer: true,
          explain: "The file defines follow, sub, tip (Super Chat), and raid types."
        },
        {
          type: "fill",
          q: "A donation/Super Chat alert uses the type ____.",
          answer: "tip",
          accept: ["tip"],
          explain: "The donation type is 'tip'."
        },
        {
          type: "match",
          q: "Match the event to what it celebrates.",
          pairs: [
            ["follow", "A new follower"],
            ["sub", "A new/gifted sub"],
            ["tip", "A donation / Super Chat"],
            ["raid", "An incoming raid/host"]
          ],
          explain: "Each type marks a different viewer action."
        },
        {
          type: "truefalse",
          q: "Alerts are a transparent overlay layered above the facecam column.",
          answer: true,
          explain: "The toast anchors above the cam and the page is transparent."
        },
        {
          type: "mcq",
          q: "Alerts help a stream by:",
          choices: [
            "Acknowledging supporters and encouraging more interaction",
            "Encoding the video",
            "Muting the audio",
            "Replacing the game"
          ],
          answer: 0,
          explain: "Recognizing supporters live encourages further engagement."
        }
      ]
    },
    {
      id: "l42",
      title: "Color-Coded Event Types",
      intro: "Each event type maps to a brand color and name treatment, staying within the existing palette.",
      questions: [
        {
          type: "match",
          q: "Match the event to its accent color.",
          pairs: [
            ["follow", "Electric blue"],
            ["sub", "Signal yellow"],
            ["tip", "Hot pink"],
            ["raid", "Chrome/blue"]
          ],
          explain: "Types are color-coded within the brand palette."
        },
        {
          type: "mcq",
          q: "A new sub's name is displayed as:",
          choices: [
            "A yellow knockout block",
            "Plain gray text",
            "An image",
            "Invisible"
          ],
          answer: 0,
          explain: "Subs use the yellow 'knock' treatment for the name."
        },
        {
          type: "truefalse",
          q: "A donation (tip) shows the name in white with a pink offset and the amount in chrome.",
          answer: true,
          explain: "Tips use a white+pink-offset name and chrome-styled amount."
        },
        {
          type: "fill",
          q: "The raid alert makes the orb ____ once as a flourish.",
          answer: "spin",
          accept: ["spin"],
          explain: "Raids trigger the orb's one-time spin animation."
        },
        {
          type: "match",
          q: "Match the type to its name style.",
          pairs: [
            ["follow", "Chrome text"],
            ["sub", "Yellow knockout"],
            ["tip", "White + pink offset"]
          ],
          explain: "Each type has a distinct, palette-safe name treatment."
        },
        {
          type: "truefalse",
          q: "Color-coding lets viewers recognize the event type instantly.",
          answer: true,
          explain: "Consistent colors make the event readable at a glance."
        }
      ]
    },
    {
      id: "l43",
      title: "Anatomy of an Alert",
      intro: "Each alert is a card: a reacting orb, a label, the name, a sweeping underline, and a sub-line.",
      questions: [
        {
          type: "order",
          q: "Order the alert's elements top to bottom in the card.",
          items: [
            "Label (e.g. NEW FOLLOWER)",
            "Name",
            "Underline sweep",
            "Sub-line (amount / count / message)"
          ],
          explain: "Label, name, underline, then the detail sub-line."
        },
        {
          type: "mcq",
          q: "The orb on an alert:",
          choices: [
            "Pops in and blinks once as the card appears",
            "Stays completely still",
            "Is a video file",
            "Is the webcam"
          ],
          answer: 0,
          explain: "The orb scales in (pop) and blinks once when the alert fires."
        },
        {
          type: "truefalse",
          q: "A yellow-style underline sweeps left-to-right under the name.",
          answer: true,
          explain: "An accent underline animates a scaleX sweep from the left."
        },
        {
          type: "fill",
          q: "The card's left border color is set by the event's ____ accent.",
          answer: "color",
          accept: ["color", "accent"],
          explain: "The left border uses the event's accent color."
        },
        {
          type: "match",
          q: "Match the sub-line content to the type.",
          pairs: [
            ["tip", "Amount and message"],
            ["raid", "Raider count"],
            ["sub", "Tier and months"]
          ],
          explain: "The sub-line adapts to each event's details."
        },
        {
          type: "truefalse",
          q: "The alert's entrance and element timing are driven by CSS animations.",
          answer: true,
          explain: "Keyframes stagger the card, label, name, underline, and sub-line."
        }
      ]
    },
    {
      id: "l44",
      title: "Testing with URL Parameters",
      intro: "You can fire a single alert or cycle all of them from the URL, no backend needed.",
      questions: [
        {
          type: "match",
          q: "Match the test URL to what it does.",
          pairs: [
            ["alerts.html?demo=1", "Cycle all four types on a loop"],
            ["alerts.html?test=follow&name=Pixel", "Fire one follow alert on load"],
            ["alerts.html?test=tip&amount=$25", "Fire a tip with an amount"]
          ],
          explain: "?demo cycles; ?test fires one alert with the given fields."
        },
        {
          type: "mcq",
          q: "To fire a single raid alert with a count, you'd use:",
          choices: [
            "alerts.html?test=raid&name=Queen&count=142",
            "alerts.html?bitrate=high",
            "alerts.html?resolution=4k",
            "alerts.html?mute=1"
          ],
          answer: 0,
          explain: "?test=raid with name and count fires one raid alert."
        },
        {
          type: "truefalse",
          q: "Test parameters let you preview alerts without any streaming service connected.",
          answer: true,
          explain: "The visuals are backend-agnostic; URLs drive testing."
        },
        {
          type: "fill",
          q: "Fire a single alert on load with alerts.html?____=sub.",
          answer: "test",
          accept: ["test"],
          explain: "?test=<type> fires one alert of that type."
        },
        {
          type: "match",
          q: "Match the field parameter to the type it belongs to.",
          pairs: [
            ["amount", "tip"],
            ["count", "raid"],
            ["tier / months", "sub"]
          ],
          explain: "Each type reads the extra fields relevant to it."
        },
        {
          type: "truefalse",
          q: "You can change where the toast appears with ?anchor=top|center|camtop.",
          answer: true,
          explain: "The ?anchor parameter positions the toast (default camtop)."
        }
      ]
    },
    {
      id: "l45",
      title: "The Alert Queue",
      intro: "Alerts play one at a time from a queue, so a burst of events doesn't overlap on screen.",
      questions: [
        {
          type: "mcq",
          q: "The queue ensures that when many events arrive at once:",
          choices: [
            "Alerts play one after another, not on top of each other",
            "Only the first ever shows",
            "They all stack and overlap",
            "OBS crashes"
          ],
          answer: 0,
          explain: "Each alert plays in turn, keeping the screen readable."
        },
        {
          type: "truefalse",
          q: "Each alert has an in, hold, and out phase before the next plays.",
          answer: true,
          explain: "The player runs in -> hold -> out, then a gap, then the next."
        },
        {
          type: "fill",
          q: "Events waiting to display are held in a ____.",
          answer: "queue",
          accept: ["queue"],
          explain: "New events are pushed onto a queue and played in order."
        },
        {
          type: "match",
          q: "Order the phases of one alert.",
          pairs: [
            ["In", "Card animates on"],
            ["Hold", "Stays for a few seconds"],
            ["Out", "Card animates off"]
          ],
          explain: "In, hold, out is the lifecycle of each alert."
        },
        {
          type: "truefalse",
          q: "A short gap between alerts keeps a busy stream from feeling chaotic.",
          answer: true,
          explain: "The GAP between alerts spaces them out for readability."
        },
        {
          type: "mcq",
          q: "The queue is important during:",
          choices: [
            "A raid or hype moment with many events at once",
            "A silent, empty stream",
            "Editing a recording",
            "Changing your resolution"
          ],
          answer: 0,
          explain: "Bursts of events are exactly when queuing prevents overlap."
        }
      ]
    },
    {
      id: "l46",
      title: "The wibblyAlert API",
      intro: "A global wibblyAlert(payload) function fires alerts from anywhere on the page.",
      questions: [
        {
          type: "mcq",
          q: "To fire an alert from code, you call:",
          choices: [
            "wibblyAlert({ type:'follow', name:'PixelWraith' })",
            "startRecording()",
            "setBitrate(6000)",
            "muteMic()"
          ],
          answer: 0,
          explain: "wibblyAlert(payload) queues and plays an alert."
        },
        {
          type: "truefalse",
          q: "The payload's type field decides the alert's color and treatment.",
          answer: true,
          explain: "The type maps to the color, name style, and any spin."
        },
        {
          type: "fill",
          q: "A tip payload includes type, name, and an ____ field.",
          answer: "amount",
          accept: ["amount"],
          explain: "Tips carry an amount (and optional message)."
        },
        {
          type: "match",
          q: "Match the payload to a valid example.",
          pairs: [
            ["follow", "{type:'follow', name:'Nova'}"],
            ["sub", "{type:'sub', name:'Nova', tier:'TIER 1'}"],
            ["raid", "{type:'raid', name:'Queen', count:142}"]
          ],
          explain: "Each type takes the fields relevant to it."
        },
        {
          type: "truefalse",
          q: "Because it's a global function, external tools can call wibblyAlert from the page.",
          answer: true,
          explain: "Any script on the page (or an injected one) can call the global."
        },
        {
          type: "mcq",
          q: "Calling wibblyAlert while another alert is playing will:",
          choices: [
            "Queue the new alert to play next",
            "Interrupt and overlap it",
            "Crash the page",
            "Do nothing ever"
          ],
          answer: 0,
          explain: "New calls are queued so nothing overlaps."
        }
      ]
    },
    {
      id: "l47",
      title: "Connecting a Backend",
      intro: "The visuals are backend-agnostic; a small shim maps Streamlabs/StreamElements/YouTube events onto wibblyAlert.",
      questions: [
        {
          type: "mcq",
          q: "'Backend-agnostic' means the alert visuals:",
          choices: [
            "Work with any service via a small mapping shim",
            "Only work with one specific service",
            "Need no events at all",
            "Cannot be triggered"
          ],
          answer: 0,
          explain: "Any service can drive them by mapping its events onto wibblyAlert."
        },
        {
          type: "truefalse",
          q: "A shim/adapter translates a service's event payload into a wibblyAlert call.",
          answer: true,
          explain: "The adapter is a thin layer mapping their data to the API."
        },
        {
          type: "fill",
          q: "Services like Streamlabs or Stream____ can be wired in via an adapter.",
          answer: "elements",
          accept: ["elements", "streamelements"],
          explain: "StreamElements is a common alert backend."
        },
        {
          type: "match",
          q: "Match the layer to its responsibility.",
          pairs: [
            ["Visuals (alerts.html)", "How the alert looks"],
            ["Adapter/shim", "Maps events to the API"],
            ["Service", "Detects the real events"]
          ],
          explain: "Service detects, adapter maps, visuals render."
        },
        {
          type: "truefalse",
          q: "Audio for alerts is intentionally out of scope for these visual overlays.",
          answer: true,
          explain: "The spec treats audio as separate from the visual-brand overlays."
        },
        {
          type: "mcq",
          q: "Shipping visuals backend-agnostic is smart because it:",
          choices: [
            "Lets you switch services without redesigning the alerts",
            "Requires a specific paid service",
            "Prevents testing",
            "Locks you to one platform"
          ],
          answer: 0,
          explain: "You can change backends while keeping the same look."
        }
      ]
    },
    {
      id: "l48",
      title: "Wiring Alerts into OBS",
      intro: "Add alerts.html above the facecam column, test with URL params, then attach your real backend.",
      questions: [
        {
          type: "order",
          q: "Order setting up alerts.",
          items: [
            "Add alerts.html as a full-canvas Browser Source",
            "Layer it above the facecam and game",
            "Test with ?test= or ?demo=1",
            "Connect your alert backend via the adapter"
          ],
          explain: "Add, layer, test, then wire the real events."
        },
        {
          type: "mcq",
          q: "The alerts source should sit:",
          choices: [
            "Above the facecam and game so toasts appear on top",
            "Behind the game",
            "As an audio source",
            "Off-screen"
          ],
          answer: 0,
          explain: "Alerts must render in front to be visible."
        },
        {
          type: "truefalse",
          q: "You should test alerts with URL params before relying on them live.",
          answer: true,
          explain: "A quick ?test run confirms the visuals before stream time."
        },
        {
          type: "fill",
          q: "By default the toast anchors just above the ____ (camtop).",
          answer: "facecam",
          accept: ["facecam", "cam", "camera"],
          explain: "The default anchor is camtop, above the facecam."
        },
        {
          type: "match",
          q: "Match the step to its tool.",
          pairs: [
            ["Preview", "?demo=1"],
            ["Single test", "?test=<type>"],
            ["Live events", "Backend adapter"]
          ],
          explain: "Demo and test cover preview; the adapter covers real events."
        },
        {
          type: "truefalse",
          q: "Because alerts queue, a raid that brings many events will still display cleanly.",
          answer: true,
          explain: "The queue plays them in order without overlap."
        }
      ]
    }
  ]
});
