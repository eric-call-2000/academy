window.ACADEMY.addUnit("culture", {
  id: "unit-10",
  title: "Attention, Perception, and Memory",
  color: "#e08a1e",
  icon: "👁️",
  description: "Explores how culture shapes basic cognitive processes, from where the eyes move in a scene to how objects are categorized, encoded, and remembered.",
  lessons: [
    {
      id: "l73",
      title: "Eye-tracking the scene",
      intro: "Eye-tracking shows that American viewers lock onto focal objects while Chinese viewers sweep the surrounding context.",
      questions: [
        {
          type: "mcq",
          q: "In Chua, Boland, and Nisbett's 2005 eye-tracking study, which group made more eye movements to the background of a scene?",
          choices: ["American participants", "Chinese participants", "Neither group looked at the background", "Both groups avoided the background"],
          answer: 1,
          explain: "Chinese participants saccaded to and lingered on the background context, whereas Americans concentrated on the focal object."
        },
        {
          type: "truefalse",
          q: "American participants tended to fixate on the focal object sooner and for longer than Chinese participants did.",
          answer: true,
          explain: "Americans locked onto the central object quickly, consistent with an analytic, object-focused style of attention."
        },
        {
          type: "fill",
          q: "A rapid ballistic movement of the eyes from one fixation point to another is called a ____.",
          answer: "saccade",
          accept: ["saccade", "saccades"],
          explain: "Eye-tracking records saccades and fixations; Chinese viewers directed more saccades toward the background."
        },
        {
          type: "mcq",
          q: "The scenes used in the study typically showed which of the following?",
          choices: ["A focal object, such as a tiger, on a complex naturalistic background", "Only abstract colored shapes", "Pages of written text", "Isolated faces with no background"],
          answer: 0,
          explain: "A focal object placed on a rich background let researchers compare object fixations against context fixations."
        },
        {
          type: "order",
          q: "Order these viewing steps from what tends to happen first to later when someone looks at a scene.",
          items: ["Initial fixation on the focal object", "Saccades outward to background elements", "Integrating object and context into a judgment"],
          explain: "Americans dwelled longer at the first step; Chinese moved to the second step faster, reflecting context-sensitive processing."
        },
        {
          type: "truefalse",
          q: "The study concluded that Chinese and American viewers move their eyes across a scene in identical patterns.",
          answer: false,
          explain: "The central finding was that eye-movement patterns differed by culture, with Chinese attending more to context."
        },
        {
          type: "match",
          q: "Match each eye-tracking term to its description.",
          pairs: [["Fixation", "A pause where the eye holds still to take in detail"], ["Saccade", "A fast jump of the eye between fixation points"], ["Focal object", "The central item Americans attended to most"], ["Background", "The surroundings Chinese viewers sampled more"]],
          explain: "These terms describe the object-versus-context difference in how attention is deployed."
        }
      ]
    },
    {
      id: "l74",
      title: "Taxonomic versus thematic sorting",
      intro: "The panda-monkey-banana triad task reveals whether people group items by shared category or by real-world relationship.",
      questions: [
        {
          type: "mcq",
          q: "In the classic triad task with panda, monkey, and banana, which grouping do East Asian participants most often choose?",
          choices: ["Panda and monkey, because both are animals", "All three kept separate", "Monkey and banana, because monkeys eat bananas", "Panda and banana, because both grow in Asia"],
          answer: 2,
          explain: "East Asians favor thematic, relationship-based grouping (monkey eats banana), reflecting holistic thought."
        },
        {
          type: "mcq",
          q: "Which grouping reflects a taxonomic (category-based) strategy?",
          choices: ["Monkey with banana", "Panda with monkey, because both are animals", "Banana with panda", "Refusing to group any pair"],
          answer: 1,
          explain: "Taxonomic sorting groups by shared category membership; pairing the two animals is category-based, typical of Westerners."
        },
        {
          type: "truefalse",
          q: "Grouping monkey with banana is an example of a thematic, relationship-based categorization.",
          answer: true,
          explain: "Thematic sorting links items by real-world relationships, such as an animal and the food it eats."
        },
        {
          type: "fill",
          q: "Grouping objects because they share a common category, such as 'animals,' is called ____ categorization.",
          answer: "taxonomic",
          accept: ["taxonomic", "categorical", "rule-based"],
          explain: "Taxonomic, category-based sorting contrasts with the thematic, relational sorting favored by East Asians."
        },
        {
          type: "match",
          q: "Match each sorting concept to what it captures.",
          pairs: [["Taxonomic grouping", "Pairs items by shared category, such as both being animals"], ["Thematic grouping", "Pairs items by relationship, such as monkey eating banana"], ["Analytic thought", "Associated with taxonomic sorting"], ["Holistic thought", "Associated with thematic, relational sorting"]],
          explain: "The triad task links analytic thought to categories and holistic thought to relationships."
        },
        {
          type: "truefalse",
          q: "The triad-sorting difference appears only in children, never in adults.",
          answer: false,
          explain: "Both children and adults show the pattern; Chiu (1972) documented it in children and Ji, Zhang, and Nisbett (2004) in adults."
        },
        {
          type: "order",
          q: "Order the steps of the triad sorting task.",
          items: ["Show three items, such as panda, monkey, and banana", "Ask which two go together", "Record whether the pairing is taxonomic or thematic"],
          explain: "The forced choice reveals whether a person defaults to category or to relationship."
        }
      ]
    },
    {
      id: "l75",
      title: "Attribution and the actor",
      intro: "Whether we explain behavior by a person's disposition or by their situation varies systematically across cultures.",
      questions: [
        {
          type: "mcq",
          q: "The tendency to overattribute others' behavior to their personality while underweighting the situation is called the:",
          choices: ["Fundamental attribution error, or correspondence bias", "Self-serving bias", "Halo effect", "Framing effect"],
          answer: 0,
          explain: "The fundamental attribution error favors dispositional explanations and is stronger in individualist cultures."
        },
        {
          type: "mcq",
          q: "Morris and Peng (1994) analyzed newspaper accounts of murders and found that, compared with Chinese-language reporters, American reporters emphasized:",
          choices: ["The situational pressures on the killer", "The killer's personal dispositions and character", "The victims' backgrounds only", "No causes at all"],
          answer: 1,
          explain: "American reporters gave more dispositional explanations, while Chinese reporters cited situational and contextual factors."
        },
        {
          type: "truefalse",
          q: "People in collectivist East Asian cultures are, on average, more likely than Westerners to explain behavior by pointing to situational and contextual factors.",
          answer: true,
          explain: "Holistic, context-sensitive thinking leads to more situational attributions."
        },
        {
          type: "fill",
          q: "Explaining someone's action by their stable inner traits is a ____ attribution.",
          answer: "dispositional",
          accept: ["dispositional", "internal", "personal"],
          explain: "Dispositional, internal attributions contrast with situational, external ones; Westerners lean dispositional."
        },
        {
          type: "match",
          q: "Match each attribution concept with an example or tendency.",
          pairs: [["Dispositional attribution", "'He did it because he is aggressive'"], ["Situational attribution", "'He did it because of financial pressure'"], ["Individualist cultures", "Lean toward dispositional explanations"], ["Collectivist cultures", "Attend more to situational explanations"]],
          explain: "Culture shifts the default balance between internal and external causes."
        },
        {
          type: "truefalse",
          q: "The fundamental attribution error is equally strong in every culture that has been studied.",
          answer: false,
          explain: "It is weaker or absent for many behaviors in East Asian samples, who weigh situations more heavily."
        },
        {
          type: "order",
          q: "Order the reasoning steps someone making a situational attribution would follow.",
          items: ["Observe the behavior", "Consider the surrounding circumstances and pressures", "Conclude the situation largely caused the behavior"],
          explain: "Situational attributors weigh context before assigning a cause, a pattern more common in collectivist cultures."
        }
      ]
    },
    {
      id: "l76",
      title: "Cultural affordances hypothesis",
      intro: "This hypothesis holds that the everyday visual environments a culture builds and inhabits cultivate holistic or analytic attention.",
      questions: [
        {
          type: "mcq",
          q: "The cultural affordances hypothesis proposes that:",
          choices: ["The everyday visual environment of a culture encourages a particular style of attention", "Attention styles are entirely genetic", "Language has no effect on perception", "Only schooling shapes perception"],
          answer: 0,
          explain: "Features of the physical environment, such as how cluttered or ambiguous scenes are, help train holistic versus analytic attention."
        },
        {
          type: "truefalse",
          q: "According to the affordances account, being immersed in more complex, ambiguous scenes encourages more holistic, context-sensitive attention.",
          answer: true,
          explain: "Busy environments reward tracking relationships and context, cultivating a holistic perceptual style."
        },
        {
          type: "mcq",
          q: "Miyamoto, Nisbett, and Masuda (2006) tested the hypothesis by:",
          choices: ["Priming participants with photos of Japanese or American scenes, then measuring attention", "Only surveying attitudes", "Measuring brain size", "Teaching participants a new language"],
          answer: 0,
          explain: "After viewing culture-typical scenes, even American participants attended more holistically when primed with Japanese scenes, showing the environment's causal role."
        },
        {
          type: "fill",
          q: "An 'affordance' is a feature of the ____ that invites or supports a particular way of acting or perceiving.",
          answer: "environment",
          accept: ["environment", "surroundings", "setting"],
          explain: "The term, from J. J. Gibson, describes cues the environment offers; culturally typical scenes afford different styles of attention."
        },
        {
          type: "match",
          q: "Match each idea to its role in the hypothesis.",
          pairs: [["Cultural affordances hypothesis", "Environments cultivate attention styles"], ["Priming with scenes", "Method used to test for a causal effect"], ["Holistic attention", "Encouraged by complex, ambiguous scenes"], ["Analytic attention", "Encouraged by simpler, object-focused scenes"]],
          explain: "The hypothesis and its test link scene complexity to attention style."
        },
        {
          type: "truefalse",
          q: "The affordances hypothesis claims attention styles are fixed at birth and cannot shift with the environment.",
          answer: false,
          explain: "Just the opposite: priming studies show attention can shift with the visual environment, supporting cultural malleability."
        },
        {
          type: "order",
          q: "Order the logic of the cultural affordances hypothesis.",
          items: ["Cultures build and inhabit characteristic visual environments", "Those environments make certain features salient", "Repeated exposure cultivates a habitual attention style"],
          explain: "The chain runs from environment to salience to a habitual mode of perceiving."
        }
      ]
    },
    {
      id: "l77",
      title: "Aperture and complexity",
      intro: "Miyamoto and colleagues photographed matched locations in Japan and the United States and coded how cluttered each scene was.",
      questions: [
        {
          type: "mcq",
          q: "When Miyamoto, Nisbett, and Masuda (2006) photographed matched locations such as schools and post offices in Japan and the U.S., they found Japanese scenes were:",
          choices: ["More complex, with more objects and more ambiguous boundaries", "Simpler and emptier", "Identical in complexity", "Brighter but not busier"],
          answer: 0,
          explain: "Japanese scenes were objectively busier and more ambiguous, affording holistic attention."
        },
        {
          type: "truefalse",
          q: "The researchers matched the type of location, such as an elementary school in each country, so the comparison would be fair.",
          answer: true,
          explain: "Matching location type controlled for content so that measured differences reflected the cultural environment, not the scene category."
        },
        {
          type: "mcq",
          q: "After being primed with Japanese-style scenes, American participants:",
          choices: ["Became worse at all tasks", "Showed no change", "Only remembered focal objects", "Detected more context and background changes, showing more holistic attention"],
          answer: 3,
          explain: "Priming with complex scenes shifted even Americans toward holistic change detection, supporting the affordances claim."
        },
        {
          type: "fill",
          q: "The Japanese scenes were rated as more visually ____ than the American scenes, with more elements competing for attention.",
          answer: "complex",
          accept: ["complex", "cluttered", "busy"],
          explain: "Greater complexity, or clutter, is the environmental feature thought to foster holistic attention."
        },
        {
          type: "order",
          q: "Order the steps of the Miyamoto cityscape study.",
          items: ["Photograph matched locations in Japan and the U.S.", "Code each scene for number of objects and ambiguity", "Prime new participants with one scene type", "Measure their attention on a later task"],
          explain: "The design moved from documenting environments to testing their causal effect on attention."
        },
        {
          type: "match",
          q: "Match each method or measure to its meaning in the study.",
          pairs: [["Matched sampling", "Photographing the same location types in each country"], ["Scene complexity", "Number of objects and ambiguity coded in the images"], ["Priming", "Exposing participants to a scene type before a task"], ["Change detection", "Task measuring holistic versus focal attention"]],
          explain: "These are the key methods and measures of the cityscape study."
        },
        {
          type: "truefalse",
          q: "The study found that American scenes were more crowded and ambiguous than Japanese scenes.",
          answer: false,
          explain: "It was the reverse: Japanese scenes were the more crowded and ambiguous ones."
        }
      ]
    },
    {
      id: "l78",
      title: "Culture and categorization",
      intro: "When categories can be defined by a rule or by overall likeness, culture tilts which strategy people default to.",
      questions: [
        {
          type: "mcq",
          q: "Norenzayan, Smith, Kim, and Nisbett (2002) found that, when classifying ambiguous objects, East Asians relied more on ____ while European Americans relied more on ____.",
          choices: ["Family resemblance; rules", "Rules; family resemblance", "Color; shape", "Shape; color"],
          answer: 0,
          explain: "East Asians grouped by overall similarity (family resemblance), while Westerners applied a single defining rule."
        },
        {
          type: "truefalse",
          q: "Rule-based classification assigns an item to a group based on whether it meets an explicit criterion, even if it looks less similar overall.",
          answer: true,
          explain: "A rule uses one defining feature; family-resemblance sorting uses overall likeness instead."
        },
        {
          type: "fill",
          q: "Grouping a target with the set it most resembles overall, rather than by a strict criterion, is called ____ resemblance categorization.",
          answer: "family",
          accept: ["family"],
          explain: "Family resemblance, a Wittgensteinian idea, relies on overlapping similarities and was favored by East Asian participants."
        },
        {
          type: "mcq",
          q: "In the classic stimuli, a target could be grouped with one set by a shared rule or with another set by overall similarity. This design:",
          choices: ["Pitted rule-based against family-resemblance strategies", "Measured color vision", "Tested short-term memory span", "Had no correct answer at all"],
          answer: 0,
          explain: "The two competing cues let researchers see which strategy each culture defaulted to."
        },
        {
          type: "match",
          q: "Match each classification concept to its meaning or its cultural lean.",
          pairs: [["Rule-based categorization", "One defining feature decides membership"], ["Family-resemblance categorization", "Overall similarity decides membership"], ["European Americans", "Leaned toward rules"], ["East Asians", "Leaned toward family resemblance"]],
          explain: "The study tied analytic rule use to Westerners and holistic similarity to East Asians."
        },
        {
          type: "truefalse",
          q: "The study showed that culture makes no difference in how people categorize ambiguous objects.",
          answer: false,
          explain: "It showed a clear cultural difference: reliance on rules versus reliance on family resemblance."
        },
        {
          type: "order",
          q: "Order the participant's decision process in the family-resemblance task.",
          items: ["View a target object and two candidate groups", "Notice one group shares a rule and the other shares overall similarity", "Choose which group the target belongs to"],
          explain: "The forced choice reveals whether the default is a rule or overall similarity."
        }
      ]
    },
    {
      id: "l79",
      title: "Emotion and memory salience",
      intro: "When people watch and later recall a scene, culture shapes which elements they encode and remember.",
      questions: [
        {
          type: "mcq",
          q: "In Masuda and Nisbett's (2001) study, participants watched animated underwater scenes. Compared with Americans, Japanese participants reported:",
          choices: ["Far more about the background and the relationships among objects", "Only the single largest fish", "Nothing about the scene", "More about the colors of the focal fish alone"],
          answer: 0,
          explain: "Japanese participants made many more statements about context and relationships, while Americans led with the focal fish."
        },
        {
          type: "truefalse",
          q: "When the focal fish were later shown against a NEW background, Japanese participants' recognition accuracy dropped more than Americans' did.",
          answer: true,
          explain: "Because Japanese viewers encoded object and context together, changing the background disrupted their recognition."
        },
        {
          type: "mcq",
          q: "This memory pattern suggests that East Asian viewers encode objects:",
          choices: ["Bound together with their context", "In complete isolation from context", "Only by name", "Only by size"],
          answer: 0,
          explain: "Holistic encoding ties the object to its background, so a change in context impairs later memory."
        },
        {
          type: "fill",
          q: "Masuda and Nisbett's animated vignettes are often called the ____ scenes because they showed fish and plants beneath the water.",
          answer: "underwater",
          accept: ["underwater", "aquatic", "fish"],
          explain: "The underwater vignettes are the signature stimulus for studying culture and scene memory."
        },
        {
          type: "match",
          q: "Match each term to its role in the scene-memory finding.",
          pairs: [["Focal object", "The big fish Americans mentioned first"], ["Background", "The plants and setting Japanese emphasized"], ["Bound encoding", "Object stored together with its context"], ["Changed background", "Hurt Japanese recognition more"]],
          explain: "These terms describe how culture shapes what is encoded and later recalled."
        },
        {
          type: "truefalse",
          q: "Americans in the study began their descriptions by talking mostly about the background environment.",
          answer: false,
          explain: "Americans typically began with the focal fish; Japanese began with the environment and the relationships within it."
        },
        {
          type: "order",
          q: "Order the phases of the Masuda and Nisbett scene-memory procedure.",
          items: ["Watch the animated underwater scene", "Describe what was seen", "Later, recognize focal fish shown on original or new backgrounds"],
          explain: "The recognition phase revealed that changing the background hurt Japanese memory more."
        }
      ]
    },
    {
      id: "l80",
      title: "Bounded versus flexible boundaries",
      intro: "Do people carve the world into discrete objects or continuous substances? Language and culture tilt the answer.",
      questions: [
        {
          type: "mcq",
          q: "Imai and Gentner (1997) had English and Japanese speakers extend a novel word from a sample. For shapeless substances, Japanese speakers were more likely than English speakers to extend the word by:",
          choices: ["Material, or substance", "Shape", "Color", "Size"],
          answer: 0,
          explain: "Japanese speakers leaned toward a material (substance) construal, whereas English speakers leaned toward a shape (object) construal, especially for ambiguous stimuli."
        },
        {
          type: "truefalse",
          q: "English grammatically distinguishes count nouns (a cup) from mass nouns (water), whereas Japanese does not obligatorily mark this distinction.",
          answer: true,
          explain: "The count-versus-mass grammatical difference is linked to whether people default to an object or a substance construal."
        },
        {
          type: "mcq",
          q: "Construing the world as discrete, bounded ____ is associated with analytic thought, while construing it as continuous ____ is associated with holistic thought.",
          choices: ["Objects; substances", "Substances; objects", "Sounds; images", "Numbers; words"],
          answer: 0,
          explain: "Analytic thinkers individuate bounded objects, whereas holistic thinkers see continuous substances and fields."
        },
        {
          type: "fill",
          q: "Treating a portion of stuff as one countable thing, such as 'a cup,' is called object ____.",
          answer: "individuation",
          accept: ["individuation", "individualization"],
          explain: "Object individuation carves the world into discrete units, contrasting with a substance construal."
        },
        {
          type: "match",
          q: "Match each term to what it names.",
          pairs: [["Count noun", "Names a bounded, countable object, such as a cup"], ["Mass noun", "Names an unbounded substance, such as water"], ["Object construal", "Extending a word by shape"], ["Substance construal", "Extending a word by material"]],
          explain: "Grammar and construal align: bounded objects versus unbounded substances."
        },
        {
          type: "truefalse",
          q: "Imai and Gentner found that culture and language made no difference at all in how people extended novel words.",
          answer: false,
          explain: "They found reliable differences, with Japanese speakers more likely than English speakers to generalize by material."
        },
        {
          type: "order",
          q: "Order the steps of the Imai and Gentner word-extension task.",
          items: ["Show a novel sample and give it a made-up name", "Present new items matching by shape or by material", "Ask which new item has the same name"],
          explain: "The choice between a shape-match and a material-match reveals an object versus a substance construal."
        }
      ]
    }
  ]
});
