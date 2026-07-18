window.ACADEMY.addUnit("culture", {
  id: "unit-20",
  title: "Space, Time, and Number",
  color: "#e08a1e",
  icon: "🧭",
  description: "Explores how languages and cultures shape our basic ideas of space, time, and direction, from cardinal-direction speakers to past-in-front thinkers.",
  lessons: [
    {
      id: "l153",
      title: "Spatial frames of reference",
      intro: "Stephen Levinson showed that languages divide space using different frames, some anchored to the body and others to the wider world.",
      questions: [
        {
          type: "mcq",
          q: "Levinson distinguished three main spatial frames of reference. Which set names all three?",
          choices: [
            "Near, middle, and far",
            "Vertical, horizontal, and diagonal",
            "Relative, intrinsic, and absolute",
            "Visual, auditory, and tactile"
          ],
          answer: 2,
          explain: "Levinson's typology has three frames: relative (viewer-based), intrinsic (object-based), and absolute (environment-based)."
        },
        {
          type: "truefalse",
          q: "The relative (egocentric) frame locates things using the viewer's own body axes, such as left and right.",
          answer: true,
          explain: "The relative frame is egocentric: it projects the speaker's front, back, left, and right onto the scene."
        },
        {
          type: "fill",
          q: "In an ____ frame of reference, directions are anchored to the viewer's body, as in 'the ball is to my left.'",
          answer: "egocentric",
          accept: ["egocentric", "relative"],
          explain: "Egocentric (relative) framing ties directions to the observer's own body position and viewpoint."
        },
        {
          type: "match",
          q: "Match each frame of reference to its defining basis.",
          pairs: [
            ["Relative frame", "Uses the viewer's body: left, right, front, back"],
            ["Absolute frame", "Uses fixed bearings like north, south, or uphill"],
            ["Intrinsic frame", "Uses an object's own facets: 'at the front of the car'"]
          ],
          explain: "Relative is body-based, absolute is environment-based, and intrinsic is object-based."
        },
        {
          type: "mcq",
          q: "Which sentence uses a geocentric (absolute) frame of reference?",
          choices: [
            "The spoon is north of the bowl",
            "The spoon is to your right",
            "The spoon is in front of you",
            "The spoon is at the head of the table"
          ],
          answer: 0,
          explain: "'North of' is an absolute, geocentric bearing that does not depend on the viewer's position."
        },
        {
          type: "truefalse",
          q: "Levinson argued that every language relies mainly on left and right, and no culture organizes space chiefly by cardinal directions.",
          answer: false,
          explain: "A central finding was the opposite: many communities rely on absolute directions rather than egocentric left/right."
        },
        {
          type: "mcq",
          q: "Why is the absolute frame also called 'geocentric'?",
          choices: [
            "It depends on where the listener is standing",
            "It anchors directions to large-scale environmental coordinates",
            "It only works for describing the human body",
            "It uses the intrinsic parts of nearby objects"
          ],
          answer: 1,
          explain: "Geocentric framing fixes directions to the environment (cardinal points, land slope), independent of any observer."
        }
      ]
    },
    {
      id: "l154",
      title: "Guugu Yimithirr's cardinal directions",
      intro: "Speakers of Guugu Yimithirr describe space with fixed compass bearings, so they must track direction at all times.",
      questions: [
        {
          type: "mcq",
          q: "Instead of 'left' and 'right,' Guugu Yimithirr speakers locate things using what?",
          choices: [
            "The parts of the nearest object",
            "Distance in body-lengths",
            "Cardinal directions like north and south",
            "Color-coded zones"
          ],
          answer: 2,
          explain: "Guugu Yimithirr uses absolute cardinal terms; a cup might be 'to the north' rather than 'to your left.'"
        },
        {
          type: "fill",
          q: "Guugu Yimithirr is an Aboriginal language spoken in ____, near Hopevale.",
          answer: "australia",
          accept: ["australia", "queensland", "queensland australia", "north queensland"],
          explain: "It is a Paman language of the Hopevale community in Queensland, Australia."
        },
        {
          type: "truefalse",
          q: "To speak Guugu Yimithirr correctly, a person must continuously keep track of the compass directions around them.",
          answer: true,
          explain: "Because location terms are absolute, speakers maintain a constant mental compass to talk about space."
        },
        {
          type: "match",
          q: "Match each idea about Guugu Yimithirr space to its description.",
          pairs: [
            ["Absolute reckoning", "Positions are given by fixed bearings, not body terms"],
            ["Constant orientation", "The speaker tracks the compass at all times"],
            ["No egocentric terms", "Everyday location talk avoids 'left' and 'right'"]
          ],
          explain: "These three features define the language's absolute, direction-tracking spatial system."
        },
        {
          type: "mcq",
          q: "John Haviland and Stephen Levinson found that Guugu Yimithirr speakers could do what remarkably well?",
          choices: [
            "Point accurately toward distant, unseen places",
            "Estimate weights by sight alone",
            "Recall long lists of unrelated words",
            "Name hundreds of shades of color"
          ],
          answer: 0,
          explain: "Their constant orientation supported striking 'dead reckoning': accurate pointing to faraway locations."
        },
        {
          type: "mcq",
          q: "A Guugu Yimithirr speaker is most likely to say which of these?",
          choices: [
            "Move the book a bit to your right",
            "Move the book to the west side of the table",
            "Move the book toward you",
            "Move the book behind the lamp"
          ],
          answer: 1,
          explain: "Absolute framing produces phrases like 'the west side,' not egocentric 'your right.'"
        },
        {
          type: "truefalse",
          q: "In Guugu Yimithirr, cardinal directions are used only for far-off landmarks, never for objects on a nearby table.",
          answer: false,
          explain: "Absolute terms apply at every scale, including small tabletop arrangements, not just distant landmarks."
        }
      ]
    },
    {
      id: "l155",
      title: "Tzeltal uphill-downhill",
      intro: "The Mayan language Tzeltal uses an absolute frame built on the land's overall slope rather than on the body.",
      questions: [
        {
          type: "mcq",
          q: "Tzeltal's absolute spatial system is based primarily on what?",
          choices: [
            "The position of the sun",
            "The general uphill-downhill slope of the land",
            "The speaker's dominant hand",
            "The nearest river's flow speed"
          ],
          answer: 1,
          explain: "Tzeltal anchors directions to the terrain's overall incline, giving 'uphill,' 'downhill,' and 'across.'"
        },
        {
          type: "truefalse",
          q: "Tzeltal is a Mayan language spoken in the highlands of Chiapas, Mexico.",
          answer: true,
          explain: "Tzeltal is spoken in Chiapas, and Penelope Brown and Stephen Levinson studied its system in Tenejapa."
        },
        {
          type: "fill",
          q: "Because it is tied to the land's overall slope, the Tzeltal frame is described as ____.",
          answer: "geomorphic",
          accept: ["geomorphic", "terrain-based", "slope-based"],
          explain: "A geomorphic frame maps directions onto the shape and slope of the landscape."
        },
        {
          type: "match",
          q: "Match each Tzeltal direction term to its meaning.",
          pairs: [
            ["Uphill (ajk'ol)", "Toward the higher, southern side of the land"],
            ["Downhill (alan)", "Toward the lower, northern side of the land"],
            ["Across", "Transverse to the main uphill-downhill axis"]
          ],
          explain: "In Tenejapa the land falls to the north, so 'uphill' runs roughly south and 'downhill' roughly north."
        },
        {
          type: "truefalse",
          q: "Tzeltal speakers use uphill and downhill only on real slopes, and they switch to left and right on flat ground or tabletops.",
          answer: false,
          explain: "The uphill-downhill frame is extended even to flat spaces and small tabletop arrays."
        },
        {
          type: "mcq",
          q: "In their studies, Brown and Levinson showed Tzeltal speakers apply the uphill-downhill frame even where?",
          choices: [
            "Only in ritual speech",
            "Only when facing south",
            "On small tabletop arrays and memory tasks",
            "Only when speaking to strangers"
          ],
          answer: 2,
          explain: "The geomorphic frame shows up consistently, including in nonlinguistic rotation and recall tasks on tabletops."
        },
        {
          type: "mcq",
          q: "How does the Tzeltal geomorphic frame differ from egocentric 'left/right' framing?",
          choices: [
            "It stays fixed to the terrain even when the speaker turns around",
            "It changes every time the speaker blinks",
            "It depends entirely on the listener's mood",
            "It can only describe the human body"
          ],
          answer: 0,
          explain: "Absolute geomorphic directions do not rotate with the body; 'downhill' points the same way regardless of facing."
        }
      ]
    },
    {
      id: "l156",
      title: "Time as horizontal or vertical",
      intro: "Mandarin regularly maps time onto a vertical axis with 'up' for earlier and 'down' for later, unlike English's horizontal metaphors.",
      questions: [
        {
          type: "mcq",
          q: "In addition to horizontal metaphors, Mandarin frequently maps time onto which spatial axis?",
          choices: [
            "The diagonal axis",
            "The vertical (up-down) axis",
            "The circular axis",
            "The depth (near-far) axis"
          ],
          answer: 1,
          explain: "Mandarin uses vertical metaphors: shang (up) for earlier times and xia (down) for later ones."
        },
        {
          type: "fill",
          q: "In Mandarin, 'shang ge yue' literally means the '____ month' and refers to last month.",
          answer: "up",
          accept: ["up", "above", "upper"],
          explain: "Shang means 'up/above,' so the 'up month' is the earlier one, namely last month."
        },
        {
          type: "truefalse",
          q: "English typically uses horizontal time metaphors (ahead, behind), while Mandarin also uses vertical ones (up, down).",
          answer: true,
          explain: "This horizontal-versus-vertical contrast is exactly what makes the Mandarin case notable."
        },
        {
          type: "match",
          q: "Match each expression to what it conveys.",
          pairs: [
            ["shang (up)", "Earlier or previous in time"],
            ["xia (down)", "Later or next in time"],
            ["English 'the week ahead'", "Horizontal metaphor for time"],
            ["Mandarin 'the month above'", "Vertical metaphor for time"]
          ],
          explain: "Mandarin's up/down maps onto earlier/later, contrasting with English's front/back horizontal metaphors."
        },
        {
          type: "mcq",
          q: "What did Lera Boroditsky (2001) propose about Mandarin speakers and time?",
          choices: [
            "They cannot think about time at all",
            "They are more likely than English speakers to think about time vertically",
            "They only think about time using money metaphors",
            "They reject all spatial metaphors for time"
          ],
          answer: 1,
          explain: "Boroditsky argued that Mandarin's vertical language is linked to a greater tendency to think about time vertically."
        },
        {
          type: "truefalse",
          q: "In Mandarin, xia (down) marks earlier events and shang (up) marks later events.",
          answer: false,
          explain: "It is reversed: shang (up) marks earlier events and xia (down) marks later ones."
        },
        {
          type: "order",
          q: "Using Mandarin's up-down time terms, order these from earliest to latest.",
          items: [
            "shang-shang ge yue (the month before last)",
            "shang ge yue (last month)",
            "zhe ge yue (this month)",
            "xia ge yue (next month)"
          ],
          explain: "'Up' terms sit earlier and 'down' terms later, so the sequence runs from the higher months to the lower ones."
        }
      ]
    },
    {
      id: "l157",
      title: "Timelines and writing direction",
      intro: "The direction people read and write shapes whether they lay time out from left to right or right to left.",
      questions: [
        {
          type: "mcq",
          q: "English speakers typically lay out a timeline in which direction?",
          choices: [
            "Right (past) to left (future)",
            "Top (past) to bottom (future)",
            "Left (past) to right (future)",
            "In a clockwise circle"
          ],
          answer: 2,
          explain: "Left-to-right readers usually place earlier events on the left and later ones on the right."
        },
        {
          type: "truefalse",
          q: "Readers of right-to-left scripts such as Arabic and Hebrew tend to arrange time from right to left.",
          answer: true,
          explain: "The spatial direction of the mental timeline tends to follow the reading and writing direction."
        },
        {
          type: "fill",
          q: "Tversky, Kugelmass, and Winter (1991) linked the direction of the mental timeline to the direction of ____.",
          answer: "writing",
          accept: ["writing", "reading", "reading and writing", "script direction", "reading direction"],
          explain: "Their cross-cultural study tied spatial mappings of time to reading and writing direction."
        },
        {
          type: "match",
          q: "Match each script direction to its typical timeline layout.",
          pairs: [
            ["Left-to-right script", "Past on the left, future on the right"],
            ["Right-to-left script", "Past on the right, future on the left"],
            ["Cultural convention", "Writing direction shapes the mental timeline"]
          ],
          explain: "Timeline orientation mirrors habitual script direction rather than being fixed by nature."
        },
        {
          type: "mcq",
          q: "Which observation best shows writing direction shaping the layout of time?",
          choices: [
            "A Hebrew reader places an earlier event on the right",
            "An English reader places an earlier event on the right",
            "Everyone places earlier events at the top",
            "No one shows any consistent pattern"
          ],
          answer: 0,
          explain: "Right-to-left Hebrew readers tend to put earlier events on the right, opposite to English readers."
        },
        {
          type: "truefalse",
          q: "The left-to-right timeline is biologically hardwired and identical in every human culture.",
          answer: false,
          explain: "It is a learned convention that varies with script direction, not a fixed biological universal."
        },
        {
          type: "order",
          q: "For a typical English reader, order these on a left-to-right timeline from the leftmost to the rightmost position.",
          items: [
            "Yesterday (far left)",
            "Today",
            "Tomorrow",
            "Next week (far right)"
          ],
          explain: "Left-to-right readers place earlier times on the left and progressively later times toward the right."
        }
      ]
    },
    {
      id: "l158",
      title: "Spatial mapping of time",
      intro: "Aymara speakers place the known past in front of them and the unseen future behind, reversing the common Western mapping.",
      questions: [
        {
          type: "mcq",
          q: "In Aymara thought, the past and future are placed where?",
          choices: [
            "Past behind, future in front",
            "Past in front, future behind",
            "Past above, future below",
            "Past to the left, future to the right"
          ],
          answer: 1,
          explain: "Aymara places the past in front (it is known and 'seen') and the future behind (unknown and 'unseen')."
        },
        {
          type: "truefalse",
          q: "For Aymara speakers, the future is conceived as behind them, out of sight.",
          answer: true,
          explain: "Because the future is unknown, it is mapped to the space behind the body, which one cannot see."
        },
        {
          type: "fill",
          q: "The Aymara word 'nayra' means 'eye,' 'front,' or 'sight,' and it also means the ____.",
          answer: "past",
          accept: ["past"],
          explain: "'Nayra' links vision and the front of the body to the past, which is treated as visible and known."
        },
        {
          type: "match",
          q: "Match each Aymara concept to its meaning.",
          pairs: [
            ["nayra", "Front / eye, and also the past"],
            ["qhipa", "Back / behind, and also the future"],
            ["Rationale", "The known past is 'seen'; the unknown future is 'unseen'"]
          ],
          explain: "The vocabulary encodes a front-is-past, back-is-future model grounded in what can be seen."
        },
        {
          type: "mcq",
          q: "Rafael Nunez and Eve Sweetser (2006) supported the Aymara model with evidence from what?",
          choices: [
            "Fossil records",
            "Speakers' spontaneous gestures",
            "Weather patterns",
            "Musical scales"
          ],
          answer: 1,
          explain: "Their study showed elders gesturing forward when speaking of the past and backward for the future."
        },
        {
          type: "truefalse",
          q: "The Aymara mapping matches English, where the future is thought of as in front.",
          answer: false,
          explain: "It is the reverse of the common English mapping: for Aymara, the future is behind, not ahead."
        },
        {
          type: "mcq",
          q: "What is the underlying logic for treating the past as being in front in Aymara?",
          choices: [
            "The past is unknown, like the dark space behind us",
            "The past is known and 'visible,' like what lies before the eyes",
            "The past physically moves people forward",
            "The past is measured in money"
          ],
          answer: 1,
          explain: "Since the past has been witnessed and is known, it is mapped to the visible space in front of the body."
        }
      ]
    },
    {
      id: "l159",
      title: "Metaphors we live by",
      intro: "George Lakoff and Mark Johnson argued that abstract thought is structured by conceptual metaphors drawn from concrete experience.",
      questions: [
        {
          type: "mcq",
          q: "In Lakoff and Johnson's 'Metaphors We Live By' (1980), metaphor is primarily a matter of what?",
          choices: [
            "Decorative poetic language only",
            "Our conceptual system and everyday thought",
            "Grammar rules alone",
            "Spelling conventions"
          ],
          answer: 1,
          explain: "They argued metaphor structures how we think and reason, not just how we decorate speech."
        },
        {
          type: "fill",
          q: "In conceptual metaphor theory, we understand an abstract ____ domain by mapping a concrete source domain onto it.",
          answer: "target",
          accept: ["target"],
          explain: "A concrete source domain (like war or journeys) is mapped onto an abstract target domain (like argument or love)."
        },
        {
          type: "truefalse",
          q: "The metaphor ARGUMENT IS WAR appears in phrases like 'he attacked my position' and 'I defended my claim.'",
          answer: true,
          explain: "Such war language reveals that we routinely conceptualize argument in terms of combat."
        },
        {
          type: "match",
          q: "Match each conceptual metaphor to an everyday expression that reflects it.",
          pairs: [
            ["ARGUMENT IS WAR", "'She shot down every point I made'"],
            ["TIME IS MONEY", "'You're wasting my time'"],
            ["LOVE IS A JOURNEY", "'Our relationship hit a dead end'"],
            ["HAPPY IS UP", "'I'm feeling up today'"]
          ],
          explain: "Each phrase draws on a concrete source domain to structure an abstract idea, just as the theory predicts."
        },
        {
          type: "mcq",
          q: "In the metaphor TIME IS MONEY, which role does each domain play?",
          choices: [
            "Time is the source; money is the target",
            "Both are source domains",
            "Time is the target; money is the source",
            "Neither is a domain"
          ],
          answer: 2,
          explain: "The concrete domain of money (the source) is mapped onto the abstract domain of time (the target)."
        },
        {
          type: "truefalse",
          q: "Lakoff and Johnson claimed conceptual metaphors are merely literary devices with no effect on everyday reasoning.",
          answer: false,
          explain: "They argued the opposite: conceptual metaphors shape ordinary reasoning and behavior, not just literature."
        },
        {
          type: "mcq",
          q: "The metaphor MORE IS UP is reflected in which everyday expression?",
          choices: [
            "Prices are rising",
            "She is my anchor",
            "Time flew by",
            "He is a night owl"
          ],
          answer: 0,
          explain: "'Rising prices' maps increasing quantity onto upward vertical space, illustrating MORE IS UP."
        }
      ]
    },
    {
      id: "l160",
      title: "Embodied cognition and culture",
      intro: "Embodied cognition roots abstract thought in bodily experience, and co-speech gesture can reveal a culture's hidden model of space and time.",
      questions: [
        {
          type: "mcq",
          q: "Embodied cognition claims that abstract thought is grounded in what?",
          choices: [
            "Pure logic detached from the body",
            "Bodily and sensorimotor experience",
            "Written grammar rules",
            "Random neural noise"
          ],
          answer: 1,
          explain: "Embodied cognition holds that concepts are built on and shaped by our bodily, sensorimotor experience."
        },
        {
          type: "truefalse",
          q: "Spontaneous co-speech gestures can reveal a speaker's implicit spatial model of time even when their words do not state it.",
          answer: true,
          explain: "Gesture often exposes an underlying mental timeline that speech leaves implicit."
        },
        {
          type: "fill",
          q: "The front-back body axis often used when gesturing about time is called the ____ axis.",
          answer: "sagittal",
          accept: ["sagittal"],
          explain: "The sagittal axis runs front-to-back, the axis along which many cultures gesture past versus future."
        },
        {
          type: "match",
          q: "Match each term to its description.",
          pairs: [
            ["Sagittal axis", "Front-back gestures for time, such as past behind and future ahead in English"],
            ["Lateral axis", "Left-right gestures for time along the body's sides"],
            ["Co-speech gesture", "Hand movements that expose implicit spatial thinking"]
          ],
          explain: "Gesture can run along a front-back (sagittal) or left-right (lateral) axis, revealing spatial models of time."
        },
        {
          type: "mcq",
          q: "What key gesture evidence did Nunez and Sweetser report for Aymara speakers?",
          choices: [
            "They gestured forward when talking about the past",
            "They refused to gesture at all",
            "They only pointed upward",
            "They gestured identically to English speakers"
          ],
          answer: 0,
          explain: "Aymara elders gestured to the front for the past and to the back for the future, matching their language."
        },
        {
          type: "truefalse",
          q: "Because gesture is shaped by language and culture, English and Aymara speakers gesture about the past in the same direction.",
          answer: false,
          explain: "They differ: English speakers tend to gesture backward for the past, while Aymara speakers gesture forward."
        },
        {
          type: "mcq",
          q: "Why do gesture studies support embodied cognition?",
          choices: [
            "They show thought is purely verbal",
            "They show thought is expressed and shaped through the body, not just abstract symbols",
            "They prove gesture is meaningless",
            "They show all cultures think identically"
          ],
          answer: 1,
          explain: "Gesture demonstrates that spatial-temporal thinking is grounded in and revealed through bodily action."
        }
      ]
    }
  ]
});
