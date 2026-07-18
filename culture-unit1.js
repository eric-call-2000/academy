window.ACADEMY.addUnit("culture", {
  id: "unit-1",
  title: "What Cultural Psychology Is",
  color: "#e08a1e",
  icon: "🌍",
  description: "Introduces cultural psychology, its core premise that culture and mind make each other up, and how it differs from cross-cultural psychology, cultural anthropology, and indigenous psychology.",
  lessons: [
    {
      id: "l1",
      title: "Defining cultural psychology",
      intro: "Cultural psychology studies how culture and mind shape each other, treating them as inseparable rather than as independent variables.",
      questions: [
        {
          type: "mcq",
          q: "What is the central claim of cultural psychology?",
          choices: [
            "Culture and mind are separate variables that rarely interact",
            "Culture and mind mutually constitute one another and cannot be fully separated",
            "Mind determines culture but culture never shapes mind",
            "Biology alone explains all psychological differences"
          ],
          answer: 1,
          explain: "Cultural psychology's defining premise is that culture and mind make each other up; they are entangled, not independent factors."
        },
        {
          type: "truefalse",
          q: "Cultural psychology treats culture as an external variable that can be cleanly separated from the mind it influences.",
          answer: false,
          explain: "It rejects the separable-variable view; culture and mind are seen as mutually constituting."
        },
        {
          type: "fill",
          q: "Cultural psychology treats culture and mind as ____ constituting rather than as independent variables.",
          answer: "mutually",
          accept: ["mutually", "mutual", "co"],
          explain: "The key phrase is that culture and mind are mutually constituting."
        },
        {
          type: "match",
          q: "Match each view to its description.",
          pairs: [
            ["Cultural psychology", "Culture and mind make each other up"],
            ["Separable-variable view", "Culture is an outside force acting on a fixed mind"],
            ["Mutual constitution", "Psyche and practices co-create one another"]
          ],
          explain: "Cultural psychology adopts mutual constitution and rejects treating culture as a separable external variable."
        },
        {
          type: "truefalse",
          q: "According to cultural psychology, there is no single central-processing mind that is identical everywhere and merely dressed up by different cultures.",
          answer: true,
          explain: "Cultural psychology denies a universal, content-free mind that culture only decorates; mind is shaped through culture."
        },
        {
          type: "order",
          q: "Order these ideas from the most separatist to the most integrated view of culture and mind.",
          items: [
            "Mind and culture are wholly independent",
            "Culture influences a pre-formed mind",
            "Culture and mind mutually constitute each other"
          ],
          explain: "Cultural psychology sits at the integrated end, where culture and mind co-constitute one another."
        },
        {
          type: "mcq",
          q: "Why does cultural psychology avoid calling culture an independent variable?",
          choices: [
            "Because culture cannot be studied scientifically",
            "Because the mind is entangled with culture, so they are not cleanly separable causes and effects",
            "Because culture has no measurable effect on behavior",
            "Because psychologists cannot define culture"
          ],
          answer: 1,
          explain: "Treating culture as an independent variable assumes it is separable from mind; cultural psychology holds they are mutually constitutive."
        }
      ]
    },
    {
      id: "l2",
      title: "The mutual constitution principle",
      intro: "Richard Shweder argued that psyche and culture make each other up, a principle known as mutual constitution.",
      questions: [
        {
          type: "mcq",
          q: "Who is most associated with the claim that psyche and culture \"make each other up\"?",
          choices: [
            "Sigmund Freud",
            "Richard Shweder",
            "B.F. Skinner",
            "Jean Piaget"
          ],
          answer: 1,
          explain: "Richard Shweder, a founding figure of cultural psychology, formulated the mutual constitution principle."
        },
        {
          type: "truefalse",
          q: "\"Mutual constitution\" means that mind and culture each shape and are shaped by the other.",
          answer: true,
          explain: "The principle holds that psyche and culture co-create one another; influence runs in both directions."
        },
        {
          type: "fill",
          q: "Shweder claimed that psyche and culture \"____ each other up.\"",
          answer: "make",
          accept: ["make", "makes"],
          explain: "The signature phrase is that psyche and culture make each other up."
        },
        {
          type: "mcq",
          q: "What does the mutual constitution principle reject?",
          choices: [
            "That culture and psyche influence each other at all",
            "That psychology should study behavior",
            "That either culture or mind is prior to and independent of the other",
            "That cultures differ from one another"
          ],
          answer: 2,
          explain: "Mutual constitution denies that one side is a fixed, independent cause; each is constituted through the other."
        },
        {
          type: "match",
          q: "Match each term to its meaning in Shweder's framework.",
          pairs: [
            ["Psyche", "The functioning of the mind: emotions, thoughts, self"],
            ["Culture", "Shared meanings, practices, and traditions"],
            ["Mutual constitution", "Psyche and culture make each other up"]
          ],
          explain: "For Shweder, psyche and culture are inseparable and continually constitute one another."
        },
        {
          type: "truefalse",
          q: "Shweder believed culture is simply a mask placed over a universal, unchanging mind.",
          answer: false,
          explain: "He rejected the central-processor view; culture does not merely mask a fixed mind but helps constitute it."
        },
        {
          type: "order",
          q: "Reconstruct Shweder's reasoning about culture and mind.",
          items: [
            "People are born into worlds of shared meaning",
            "Those meanings shape how minds develop",
            "Minds in turn sustain and remake those meanings"
          ],
          explain: "Mutual constitution is a loop: culture shapes mind, and mind sustains culture."
        }
      ]
    },
    {
      id: "l3",
      title: "Culture as meaning systems",
      intro: "Culture can be understood as shared systems of symbols, practices, and scripts that guide how people interpret and act in the world.",
      questions: [
        {
          type: "mcq",
          q: "In cultural psychology, culture is best understood as:",
          choices: [
            "A person's genetic inheritance",
            "A shared system of symbols, meanings, and practices",
            "The climate and geography of a region",
            "An individual's private opinions"
          ],
          answer: 1,
          explain: "Culture is treated as shared meaning systems (symbols, practices, and scripts), not biology or geography."
        },
        {
          type: "fill",
          q: "A cultural ____ is a shared, expected sequence of actions for a familiar situation, such as ordering food at a restaurant.",
          answer: "script",
          accept: ["script", "scripts", "schema"],
          explain: "Scripts are culturally shared templates that guide behavior in routine situations."
        },
        {
          type: "truefalse",
          q: "Symbols carry meanings that are largely agreed upon and shared within a cultural community.",
          answer: true,
          explain: "Symbols such as words, gestures, and objects work because their meanings are shared among members of a culture."
        },
        {
          type: "match",
          q: "Match each element of a meaning system to an example.",
          pairs: [
            ["Symbol", "A wedding ring signifying commitment"],
            ["Practice", "Bowing to greet someone"],
            ["Script", "The expected steps of a job interview"]
          ],
          explain: "Symbols, practices, and scripts are components of the shared meaning systems that make up culture."
        },
        {
          type: "mcq",
          q: "Why do meaning systems guide behavior rather than fully determine it?",
          choices: [
            "Because people ignore culture entirely",
            "Because meanings are identical for every individual",
            "Because behavior is controlled only by instinct",
            "Because they provide shared interpretations and expectations that people draw on and negotiate"
          ],
          answer: 3,
          explain: "Meaning systems offer shared frameworks people use and adapt; they orient action without rigidly dictating it."
        },
        {
          type: "truefalse",
          q: "According to this view, meanings exist only inside one isolated individual's head and are not shared.",
          answer: false,
          explain: "Meaning systems are shared and public; culture is inherently collective, not private to one person."
        },
        {
          type: "order",
          q: "Order these from the smallest to the largest unit of a meaning system as typically described.",
          items: [
            "A single symbol",
            "A script for one situation",
            "A whole system of shared meanings"
          ],
          explain: "Symbols combine into scripts, which are part of the broader shared meaning system that is culture."
        }
      ]
    },
    {
      id: "l4",
      title: "Versus cross-cultural psychology",
      intro: "Cross-cultural psychology compares psychological traits across cultures, while cultural psychology studies how culture and mind are entangled.",
      questions: [
        {
          type: "mcq",
          q: "How does cross-cultural psychology typically treat culture?",
          choices: [
            "As inseparable from the mind",
            "As an independent variable used to compare traits across groups",
            "As irrelevant to psychology",
            "As identical in every society"
          ],
          answer: 1,
          explain: "Cross-cultural psychology often treats culture as an independent variable and compares measured traits across cultures."
        },
        {
          type: "truefalse",
          q: "Cultural psychology and cross-cultural psychology are simply two names for exactly the same approach.",
          answer: false,
          explain: "They differ: cross-cultural compares traits across cultures, while cultural psychology sees culture and mind as mutually constituting."
        },
        {
          type: "match",
          q: "Match each field to its characteristic approach.",
          pairs: [
            ["Cross-cultural psychology", "Compare the same trait across many cultures"],
            ["Cultural psychology", "Study how culture and mind constitute each other"],
            ["Independent-variable view", "Culture as an external factor to be measured"]
          ],
          explain: "Cross-cultural psychology compares traits treating culture as a variable; cultural psychology emphasizes entanglement."
        },
        {
          type: "fill",
          q: "Cross-cultural psychology often assumes ____ unity, the idea that basic psychological processes are the same everywhere and only their expression varies.",
          answer: "psychic",
          accept: ["psychic", "psychological"],
          explain: "Cross-cultural work commonly assumes psychic unity, comparing how universal processes show up across cultures."
        },
        {
          type: "mcq",
          q: "A researcher administers the identical personality questionnaire in 30 countries and compares average scores. This is most characteristic of:",
          choices: [
            "Cultural psychology",
            "Cultural anthropology",
            "Cross-cultural psychology",
            "Indigenous psychology"
          ],
          answer: 2,
          explain: "Using one standard instrument to compare scores across countries is the hallmark of cross-cultural psychology."
        },
        {
          type: "truefalse",
          q: "Cultural psychology worries that using one culture's measure everywhere can distort the meaning of a trait in other cultures.",
          answer: true,
          explain: "Because culture and mind are entangled, a standard measure may not carry the same meaning across cultures."
        },
        {
          type: "order",
          q: "Order the steps of a typical cross-cultural comparison study.",
          items: [
            "Pick a trait and a standard measure",
            "Administer the same measure in several cultures",
            "Compare scores across the cultures"
          ],
          explain: "Cross-cultural psychology standardizes a measure and compares results, treating culture as a variable."
        }
      ]
    },
    {
      id: "l5",
      title: "Versus cultural anthropology",
      intro: "Cultural anthropology richly describes customs through ethnography, while cultural psychology focuses on the psychological processes behind them.",
      questions: [
        {
          type: "mcq",
          q: "What is the primary focus of cultural anthropology compared with cultural psychology?",
          choices: [
            "Statistical testing of universal laws",
            "Ethnographic description of customs and ways of life",
            "Brain imaging of individuals",
            "Measuring reaction times in a lab"
          ],
          answer: 1,
          explain: "Cultural anthropology centers on ethnographic description of customs, whereas cultural psychology targets psychological processes."
        },
        {
          type: "fill",
          q: "Anthropologists often gather data through ____, immersing themselves in a community to describe its way of life.",
          answer: "ethnography",
          accept: ["ethnography", "fieldwork", "participant observation"],
          explain: "Ethnography, using participant observation and fieldwork, is anthropology's signature method."
        },
        {
          type: "truefalse",
          q: "Cultural psychology tends to ask how customs shape mental processes like emotion, cognition, and the self.",
          answer: true,
          explain: "Cultural psychology's distinctive aim is explaining psychological processes, not only describing customs."
        },
        {
          type: "match",
          q: "Match each discipline or method to its emphasis.",
          pairs: [
            ["Cultural anthropology", "Describing customs through fieldwork"],
            ["Cultural psychology", "Explaining psychological processes shaped by culture"],
            ["Ethnography", "Immersive, detailed account of a community"]
          ],
          explain: "Anthropology describes custom via ethnography; cultural psychology focuses on how culture shapes the mind."
        },
        {
          type: "mcq",
          q: "Which question is more distinctly a cultural psychology question?",
          choices: [
            "What are the kinship terms used in this village?",
            "How is this festival performed each year?",
            "How does growing up in this community shape people's sense of self?",
            "What foods are eaten during the harvest?"
          ],
          answer: 2,
          explain: "Asking how a cultural setting shapes the self targets psychological process, the focus of cultural psychology."
        },
        {
          type: "truefalse",
          q: "Cultural psychology and cultural anthropology share no interests and never use each other's insights.",
          answer: false,
          explain: "They overlap and borrow from each other; cultural psychology often builds on anthropological description."
        },
        {
          type: "order",
          q: "Order a study from pure description toward psychological explanation.",
          items: [
            "Describe a community's child-rearing customs",
            "Identify the values those customs express",
            "Test how those values shape children's thinking"
          ],
          explain: "Anthropology tends to describe customs; cultural psychology pushes on to explain their effects on the mind."
        }
      ]
    },
    {
      id: "l6",
      title: "Versus indigenous psychology",
      intro: "Indigenous psychology builds frameworks from within a culture, highlighting the difference between emic (insider) and etic (outsider) perspectives.",
      questions: [
        {
          type: "mcq",
          q: "What defines indigenous psychology?",
          choices: [
            "Applying Western theories unchanged to every culture",
            "Developing psychological frameworks grounded in a specific culture's own concepts",
            "Studying only laboratory animals",
            "Ignoring culture entirely"
          ],
          answer: 1,
          explain: "Indigenous psychology builds theories from within a culture, using its own locally meaningful concepts."
        },
        {
          type: "match",
          q: "Match the term to its meaning.",
          pairs: [
            ["Emic", "An insider, culture-specific perspective"],
            ["Etic", "An outsider, comparative or universal perspective"],
            ["Indigenous psychology", "Frameworks grounded in a culture's own concepts"]
          ],
          explain: "Emic is the insider view and etic the outsider view; indigenous psychology favors emic, locally grounded frameworks."
        },
        {
          type: "fill",
          q: "The ____ perspective describes a culture in its own local terms, from the insider's point of view.",
          answer: "emic",
          accept: ["emic"],
          explain: "Emic, derived from \"phonemic,\" refers to the culture-specific, insider viewpoint."
        },
        {
          type: "truefalse",
          q: "The terms \"emic\" and \"etic\" were adapted from the linguistic distinction between phonemic and phonetic analysis.",
          answer: true,
          explain: "Linguist Kenneth Pike coined emic and etic from the words phonemic and phonetic."
        },
        {
          type: "mcq",
          q: "An etic approach is best described as:",
          choices: [
            "Outsider, comparative, and aiming at universal categories",
            "Insider, culture-specific, and local",
            "Concerned only with one person's biography",
            "Focused on brain chemistry"
          ],
          answer: 0,
          explain: "Etic takes an outsider, comparative stance seeking categories that apply across cultures."
        },
        {
          type: "truefalse",
          q: "Indigenous psychology insists that a specific local emotion word can always be translated perfectly into English.",
          answer: false,
          explain: "Indigenous psychology stresses that locally grounded concepts often resist neat translation, which is why insider frameworks matter."
        },
        {
          type: "order",
          q: "Order these approaches from most insider (emic) to most outsider (etic).",
          items: [
            "Use a culture's own concept to explain its behavior",
            "Compare a local concept with related ideas elsewhere",
            "Fit all cultures into one universal category"
          ],
          explain: "The emic-to-etic range runs from local insider concepts to universal outsider categories."
        }
      ]
    },
    {
      id: "l7",
      title: "Psychic unity vs. plurality",
      intro: "Scholars disagree about how uniform the human mind is, ranging from universalist and evolutionary views to cultural relativism.",
      questions: [
        {
          type: "mcq",
          q: "The doctrine of the \"psychic unity of mankind\" claims that:",
          choices: [
            "Every culture produces a completely different kind of mind",
            "All humans share the same basic mental makeup",
            "Minds are shaped only by climate",
            "Psychology cannot be studied across cultures"
          ],
          answer: 1,
          explain: "Psychic unity holds that all human beings share a common basic psychological architecture."
        },
        {
          type: "match",
          q: "Match each stance to its core idea.",
          pairs: [
            ["Universalism", "Basic psychological processes are shared by all humans"],
            ["Evolutionary view", "Universal mechanisms shaped by natural selection"],
            ["Cultural relativism", "Minds and practices must be understood on each culture's own terms"]
          ],
          explain: "These stances range from emphasizing shared universals to emphasizing culture-specific variation."
        },
        {
          type: "truefalse",
          q: "An evolutionary psychologist typically emphasizes universal, species-wide mental mechanisms.",
          answer: true,
          explain: "Evolutionary psychology stresses adaptations shared across the species, an emphasis on universals."
        },
        {
          type: "fill",
          q: "____ relativism holds that each culture's beliefs and practices should be understood on their own terms rather than judged by outside standards.",
          answer: "cultural",
          accept: ["cultural", "culture"],
          explain: "Cultural relativism, associated with Franz Boas, insists on understanding cultures in their own terms."
        },
        {
          type: "mcq",
          q: "Shweder's slogan \"one mind, many mentalities: universalism without uniformity\" is meant to:",
          choices: [
            "Deny that cultures differ at all",
            "Claim biology is irrelevant",
            "Balance shared human potential with real cultural diversity",
            "Argue every mind is completely unique with nothing in common"
          ],
          answer: 2,
          explain: "The slogan holds that humans share potentials (one mind) expressed as diverse mentalities across cultures."
        },
        {
          type: "truefalse",
          q: "Strong cultural relativism and strong universalism make identical predictions about human psychology.",
          answer: false,
          explain: "They differ sharply: relativism stresses culture-specific variation, universalism stresses shared processes."
        },
        {
          type: "order",
          q: "Order these positions from emphasizing the most shared uniformity to emphasizing the most cultural variation.",
          items: [
            "Strong universalism",
            "Universalism without uniformity",
            "Strong cultural relativism"
          ],
          explain: "The spectrum runs from stressing shared universals to stressing culturally specific differences."
        }
      ]
    },
    {
      id: "l8",
      title: "Why culture matters for mind",
      intro: "Culture shapes core psychological domains, including cognition, emotion, the self, and morality, showing why the mind cannot be studied apart from culture.",
      questions: [
        {
          type: "mcq",
          q: "Cultural psychology argues that culture shapes which of the following?",
          choices: [
            "Only fashion and food, not the mind",
            "Cognition, emotion, the self, and morality",
            "Nothing psychological at all",
            "Only language, with no effect on thought"
          ],
          answer: 1,
          explain: "A core claim is that culture reaches into cognition, emotion, the self, and moral judgment."
        },
        {
          type: "match",
          q: "Match each psychological domain to a culturally shaped example.",
          pairs: [
            ["Cognition", "Attending more to the whole scene or to focal objects"],
            ["Self", "Seeing oneself as independent or interdependent"],
            ["Morality", "Which acts feel sacred or taboo"],
            ["Emotion", "Which feelings are valued and encouraged"]
          ],
          explain: "Culture influences perception and thought, self-construal, moral intuitions, and valued emotions."
        },
        {
          type: "truefalse",
          q: "Markus and Kitayama distinguished independent and interdependent construals of the self across cultures.",
          answer: true,
          explain: "In 1991, Hazel Markus and Shinobu Kitayama described independent versus interdependent self-construals."
        },
        {
          type: "fill",
          q: "Research suggests some cultural settings foster more ____ thinking, attending to whole contexts and relationships, versus analytic thinking focused on separate objects.",
          answer: "holistic",
          accept: ["holistic", "wholistic"],
          explain: "Work such as Richard Nisbett's contrasts holistic (context-focused) with analytic (object-focused) cognition."
        },
        {
          type: "mcq",
          q: "Which finding best illustrates culture shaping emotion?",
          choices: [
            "All people everywhere value the exact same emotions equally",
            "Emotions have no connection to culture",
            "Only facial muscles matter for emotion",
            "Cultures differ in which emotional states they idealize and encourage"
          ],
          answer: 3,
          explain: "Cultures differ in valued or ideal affect, showing emotion is culturally shaped, not fixed."
        },
        {
          type: "truefalse",
          q: "Because culture shapes cognition, emotion, self, and morality, cultural psychology concludes the mind can be fully understood while ignoring culture.",
          answer: false,
          explain: "The opposite follows: if culture pervades these domains, the mind cannot be understood apart from culture."
        },
        {
          type: "order",
          q: "Order these from a narrow to a broad claim about culture's reach into the mind.",
          items: [
            "Culture shapes table manners",
            "Culture shapes how we perceive and reason",
            "Culture shapes cognition, emotion, self, and morality together"
          ],
          explain: "Cultural psychology makes the broad claim that culture pervades many core psychological domains at once."
        }
      ]
    }
  ]
});
