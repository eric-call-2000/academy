window.ACADEMY.addUnit("culture", {
  id: "unit-2",
  title: "Historical Roots and Founders",
  color: "#e08a1e",
  icon: "📜",
  description: "Traces cultural psychology's intellectual origins from 19th-century German thought through Soviet developmental psychology to early anthropology and reconstructive memory.",
  lessons: [
    {
      id: "l9",
      title: "Wundt's Völkerpsychologie",
      intro: "Wilhelm Wundt, founder of the first psychology lab, argued that language, myth, and custom require cultural-historical study rather than laboratory experiment.",
      questions: [
        {
          type: "mcq",
          q: "Wilhelm Wundt is famous for founding the first psychology laboratory in 1879, but which other vast project did he pursue in later life?",
          choices: ["A theory of the unconscious mind", "A study of animal conditioning", "A ten-volume Voelkerpsychologie", "A model of operant reinforcement"],
          answer: 2,
          explain: "From 1900 to 1920 Wundt wrote a ten-volume Voelkerpsychologie on the collective mental life of peoples."
        },
        {
          type: "truefalse",
          q: "Wundt believed that higher mental processes like language and myth could be fully studied using laboratory experiments.",
          answer: false,
          explain: "Wundt held that higher processes had to be studied through cultural products - language, myth, and custom - not the lab."
        },
        {
          type: "fill",
          q: "Wundt's Voelkerpsychologie is often translated as 'folk psychology' or the psychology of ____.",
          answer: "peoples",
          accept: ["peoples", "a people", "the people", "nations", "the folk"],
          explain: "Volk means 'people' or 'folk', so Voelkerpsychologie studies the collective mental life of peoples."
        },
        {
          type: "match",
          q: "Match each cultural domain Wundt studied to what he thought it revealed.",
          pairs: [["Language", "Shared structures of thought"], ["Myth", "Collective beliefs and worldview"], ["Custom", "Socially shared norms of conduct"]],
          explain: "Wundt treated language, myth, and custom as the great cultural products expressing a community's collective mind."
        },
        {
          type: "mcq",
          q: "According to Wundt, why could collective phenomena not be captured by laboratory introspection?",
          choices: ["They belong to a community and develop over history", "They are purely biological reflexes", "They are too simple to measure", "They do not involve the mind at all"],
          answer: 0,
          explain: "Voelkerpsychologie dealt with products of a whole community built up over history, beyond any individual's introspection."
        },
        {
          type: "order",
          q: "Order these from the smallest to the largest unit of mental life in Wundt's overall program.",
          items: ["Individual sensations in the lab", "An individual's higher thought", "The collective mind of a whole people"],
          explain: "Wundt moved from experimental study of individual sensation up to the historical, collective mental life of peoples."
        },
        {
          type: "truefalse",
          q: "Wundt's Voelkerpsychologie treated language, myth, and custom as windows into a community's collective mental life.",
          answer: true,
          explain: "These three cultural products were, for Wundt, the observable traces of a people's shared psychology."
        }
      ]
    },
    {
      id: "l10",
      title: "Herder and the Volksgeist",
      intro: "Johann Gottfried Herder championed the Romantic idea that each people carries its own distinctive spirit, expressed above all through its language and folk poetry.",
      questions: [
        {
          type: "mcq",
          q: "Which 18th-century German thinker is most associated with the idea of the Volksgeist, the distinctive spirit of a people?",
          choices: ["Immanuel Kant", "Johann Gottfried Herder", "G.W.F. Hegel", "Karl Marx"],
          answer: 1,
          explain: "Herder (1744-1803) championed the notion that each Volk has its own guiding spirit."
        },
        {
          type: "fill",
          q: "The German term Volksgeist is usually translated as the ____ of a people or nation.",
          answer: "spirit",
          accept: ["spirit", "genius", "soul", "character"],
          explain: "Volksgeist combines Volk (people) and Geist (spirit): the collective spirit of a nation."
        },
        {
          type: "truefalse",
          q: "Herder argued that all peoples should be measured against a single universal standard of civilization.",
          answer: false,
          explain: "Herder rejected a single yardstick, insisting each culture be understood in its own terms - an early relativist impulse."
        },
        {
          type: "match",
          q: "Match each German term Herder used to its meaning.",
          pairs: [["Volk", "A people or ethnic community"], ["Geist", "Spirit or mind"], ["Volkslied", "Folk song expressing a people's spirit"]],
          explain: "Herder collected folk songs (Volkslieder) as authentic expressions of each people's Geist."
        },
        {
          type: "mcq",
          q: "For Herder, what was the primary carrier of a people's distinctive spirit?",
          choices: ["Its currency", "Its military strength", "Its climate alone", "Its language and folk poetry"],
          answer: 3,
          explain: "Herder saw language and folk poetry as the living vessel of a people's Volksgeist."
        },
        {
          type: "order",
          q: "Trace Herder's chain of reasoning about culture.",
          items: ["Each people lives in unique conditions", "This shapes a distinct language and spirit", "That spirit is expressed in folk songs and myth"],
          explain: "Herder linked a people's circumstances to a unique spirit made audible in its folk culture."
        },
        {
          type: "truefalse",
          q: "Herder's Romantic celebration of national spirit later influenced nationalist movements across Europe.",
          answer: true,
          explain: "The idea of a unique Volksgeist fed 19th-century Romantic nationalism."
        }
      ]
    },
    {
      id: "l11",
      title: "Vygotsky's sociocultural theory",
      intro: "Lev Vygotsky argued that higher mental functions originate in social interaction and are only later internalized by the individual.",
      questions: [
        {
          type: "mcq",
          q: "Vygotsky's general genetic law of cultural development states that every higher mental function appears first...",
          choices: ["Between people, then within the individual", "Within the individual, then between people", "Only in dreams", "As a fixed biological instinct"],
          answer: 0,
          explain: "For Vygotsky functions appear first on the social (interpsychological) plane, then are internalized within the individual."
        },
        {
          type: "truefalse",
          q: "Vygotsky held that higher mental functions originate inside the individual and only later become social.",
          answer: false,
          explain: "He argued the reverse: functions begin in social interaction and are then internalized."
        },
        {
          type: "fill",
          q: "Vygotsky said each function appears twice: first on the interpsychological plane, then on the ____ plane.",
          answer: "intrapsychological",
          accept: ["intrapsychological", "intra-psychological", "individual", "internal"],
          explain: "The social (interpsychological) function is internalized to become an intrapsychological one."
        },
        {
          type: "match",
          q: "Match each Vygotskian term to its meaning.",
          pairs: [["Interpsychological", "Between people, in social interaction"], ["Intrapsychological", "Within the individual mind"], ["Internalization", "Moving from the social to the individual plane"]],
          explain: "Internalization carries a function from the social plane to the individual plane."
        },
        {
          type: "mcq",
          q: "In which country and era did Vygotsky develop his theory?",
          choices: ["Victorian England", "The early Soviet Union (1920s-30s)", "Ancient Greece", "The 1950s United States"],
          answer: 1,
          explain: "Vygotsky (1896-1934) worked in the early Soviet Union, dying young of tuberculosis in 1934."
        },
        {
          type: "order",
          q: "Order the development of a higher function according to Vygotsky.",
          items: ["A child acts with an adult's help", "The activity is shared and social", "The child internalizes it to act alone"],
          explain: "Shared social activity is gradually internalized into independent individual functioning."
        },
        {
          type: "truefalse",
          q: "Vygotsky's work was suppressed in the USSR for a period and became widely known in the West only decades after his death.",
          answer: true,
          explain: "His writings were banned under Stalin and gained Western influence mainly from the 1960s-70s onward."
        }
      ]
    },
    {
      id: "l12",
      title: "Mediation and cultural tools",
      intro: "Vygotsky held that signs and language act as psychological tools that mediate and reorganize the way we think and remember.",
      questions: [
        {
          type: "mcq",
          q: "In Vygotsky's theory, what is a 'psychological tool' or sign?",
          choices: ["A physical hammer used on objects", "A means that mediates and reorganizes mental activity", "An innate reflex", "A specific brain region"],
          answer: 1,
          explain: "Signs such as language, numbers, and mnemonics are psychological tools that mediate and transform thinking."
        },
        {
          type: "truefalse",
          q: "Vygotsky drew an analogy between physical tools that act on the world and signs that act on the mind.",
          answer: true,
          explain: "Just as a tool is directed at external objects, a sign is a tool directed inward to master one's own mental processes."
        },
        {
          type: "fill",
          q: "For Vygotsky, the most important and universal psychological tool is ____.",
          answer: "language",
          accept: ["language", "speech", "words"],
          explain: "Language is the master mediating sign, reorganizing perception, attention, and memory."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [["Technical tool", "Directed outward at objects"], ["Psychological tool (sign)", "Directed inward at the mind"], ["Mediation", "Acting through a tool rather than directly"]],
          explain: "Mediation means our relation to the world and to ourselves is always by way of tools and signs."
        },
        {
          type: "mcq",
          q: "Which of these is an example of a mediating sign system?",
          choices: ["A tally or counting system", "Digestion", "A knee-jerk reflex", "Body temperature"],
          answer: 0,
          explain: "Counting systems, writing, and mnemonics are cultural sign systems that mediate memory and thought."
        },
        {
          type: "order",
          q: "Show how a mediated act differs from a purely direct one.",
          items: ["A goal or problem arises", "A cultural sign or tool is brought in", "The sign reshapes how the task is solved"],
          explain: "Inserting a sign between stimulus and response turns a natural process into a cultural, mediated one."
        },
        {
          type: "truefalse",
          q: "According to Vygotsky, cultural tools are simply passive aids that leave the structure of thinking unchanged.",
          answer: false,
          explain: "Signs actively reorganize mental functions; they do not merely make an unchanged process easier."
        }
      ]
    },
    {
      id: "l13",
      title: "The zone of proximal development",
      intro: "Vygotsky's zone of proximal development captures how learning is scaffolded through guidance from a more knowledgeable other.",
      questions: [
        {
          type: "mcq",
          q: "The zone of proximal development (ZPD) is the gap between...",
          choices: ["What a learner can do alone and what they can do with help", "Two different school grades", "Birth and adulthood", "Reward and punishment"],
          answer: 0,
          explain: "The ZPD is the distance between independent performance and assisted performance with a more knowledgeable other."
        },
        {
          type: "fill",
          q: "Support tailored to a learner and gradually withdrawn as they improve is called ____.",
          answer: "scaffolding",
          accept: ["scaffolding", "scaffold"],
          explain: "Scaffolding (Wood, Bruner, and Ross, 1976) is temporary guided support offered within the ZPD."
        },
        {
          type: "truefalse",
          q: "A 'more knowledgeable other' can be a teacher, a parent, or a more capable peer.",
          answer: true,
          explain: "The more knowledgeable other is anyone with greater skill for the task, not only an adult expert."
        },
        {
          type: "mcq",
          q: "Instruction is most effective, in Vygotsky's view, when it targets tasks the learner...",
          choices: ["Has already fully mastered alone", "Cannot yet do even with help", "Can do only with guidance right now", "Will never be able to do"],
          answer: 2,
          explain: "Teaching aimed inside the ZPD - doable with help but not yet alone - drives development forward."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Independent level", "What the learner can already do alone"], ["ZPD", "What the learner can do with guidance"], ["Scaffolding", "Temporary support that is faded out"]],
          explain: "Learning moves a task from the assisted ZPD into the independent level as scaffolding is removed."
        },
        {
          type: "order",
          q: "Order a scaffolded learning episode.",
          items: ["The learner cannot solve the task alone", "A more knowledgeable other guides them", "The learner masters it and works independently"],
          explain: "Guided support within the ZPD is faded until the learner performs on their own."
        },
        {
          type: "truefalse",
          q: "The term 'scaffolding' was coined by Vygotsky himself.",
          answer: false,
          explain: "Vygotsky described the ZPD; 'scaffolding' was introduced later by Wood, Bruner, and Ross in 1976."
        }
      ]
    },
    {
      id: "l14",
      title: "Luria's Central Asia expeditions",
      intro: "Alexander Luria's early-1930s fieldwork tested how literacy and schooling reshape abstract, syllogistic reasoning.",
      questions: [
        {
          type: "mcq",
          q: "Alexander Luria's early-1930s expeditions studied peasants in which region of the Soviet Union?",
          choices: ["Siberia", "Central Asia (Uzbekistan and Kyrgyzstan)", "The Baltic coast", "Ukraine"],
          answer: 1,
          explain: "Luria traveled to Uzbekistan and Kyrgyzstan in 1931-1932 to test Vygotsky's ideas about culture and cognition."
        },
        {
          type: "truefalse",
          q: "Luria found that schooling and literacy changed the way people approached abstract, syllogistic problems.",
          answer: true,
          explain: "Literate, schooled participants reasoned theoretically, while unschooled peasants relied on practical experience."
        },
        {
          type: "fill",
          q: "Unschooled participants often refused to answer syllogisms about far-off places they had never ____.",
          answer: "seen",
          accept: ["seen", "visited", "been", "been to", "experienced"],
          explain: "They resisted drawing conclusions from premises outside their direct experience, such as the color of far-northern bears."
        },
        {
          type: "mcq",
          q: "Given 'In the Far North all bears are white; Novaya Zemlya is in the Far North,' a typical unschooled respondent would...",
          choices: ["Immediately answer 'white'", "Refuse to speak at all", "Say they cannot know without having been there", "Answer 'brown'"],
          answer: 2,
          explain: "Rather than reason formally, they treated the premises as unverified claims about a place they had not visited."
        },
        {
          type: "match",
          q: "Match each group or term to its style of reasoning.",
          pairs: [["Unschooled peasant", "Reasons from practical, concrete experience"], ["Schooled and literate", "Reasons abstractly from given premises"], ["Syllogism", "A formal argument from premises to a conclusion"]],
          explain: "Luria linked the shift toward abstract syllogistic reasoning to literacy and formal schooling."
        },
        {
          type: "order",
          q: "Trace the logic of Luria's expedition.",
          items: ["Vygotsky's theory predicts culture shapes thought", "Luria tests reasoning in Central Asia", "Literacy is found to reshape abstract reasoning"],
          explain: "The expeditions were a field test of the idea that cultural tools like literacy transform cognition."
        },
        {
          type: "truefalse",
          q: "Luria concluded that unschooled peasants were biologically incapable of any reasoning.",
          answer: false,
          explain: "They reasoned effectively about practical matters; the difference lay in handling abstract, decontextualized problems, not innate ability."
        }
      ]
    },
    {
      id: "l15",
      title: "Boas and cultural relativism",
      intro: "Franz Boas, the father of American anthropology, attacked racial hierarchy and insisted that each culture be understood on its own terms.",
      questions: [
        {
          type: "mcq",
          q: "Franz Boas is often called the father of American anthropology. What did he argue against?",
          choices: ["The existence of any human cultures", "A ranked racial hierarchy of peoples", "The use of fieldwork", "The study of language"],
          answer: 1,
          explain: "Boas (1858-1942) attacked scientific racism and the ranking of races and cultures on a single ladder."
        },
        {
          type: "fill",
          q: "The principle that a culture should be understood on its own terms, not judged by another's standards, is called cultural ____.",
          answer: "relativism",
          accept: ["relativism", "relativity"],
          explain: "Boas is a founder of cultural relativism, the stance of judging a culture by its own values."
        },
        {
          type: "truefalse",
          q: "Boas's study of immigrants found that skull shape (the cephalic index) could shift between generations, weakening rigid racial typologies.",
          answer: true,
          explain: "His head-form research showed supposedly fixed 'racial' traits changed with environment, undercutting racial classification."
        },
        {
          type: "match",
          q: "Match each idea to its description.",
          pairs: [["Cultural relativism", "Judge a culture by its own standards"], ["Historical particularism", "Each culture has its own unique history"], ["Scientific racism", "The doctrine Boas opposed"]],
          explain: "Boas replaced ranked evolutionism with historical particularism and cultural relativism."
        },
        {
          type: "mcq",
          q: "Which of these influential anthropologists was a student of Boas?",
          choices: ["Margaret Mead", "Charles Darwin", "Sigmund Freud", "Wilhelm Wundt"],
          answer: 0,
          explain: "Boas trained a remarkable generation including Margaret Mead, Ruth Benedict, and Edward Sapir."
        },
        {
          type: "order",
          q: "Order the shift Boas helped bring about in anthropology.",
          items: ["Cultures ranked on one evolutionary ladder", "Boas challenges racial and cultural hierarchy", "Cultures studied on their own terms"],
          explain: "Boas moved the field from ranked cultural evolutionism toward relativism and particularism."
        },
        {
          type: "truefalse",
          q: "Boas believed differences between peoples were mainly due to inborn racial capacities rather than culture and history.",
          answer: false,
          explain: "He argued that history, environment, and culture - not innate race - account for differences among peoples."
        }
      ]
    },
    {
      id: "l16",
      title: "Bartlett's schema and remembering",
      intro: "Frederic Bartlett's 'War of the Ghosts' studies showed that memory is reconstructive and shaped by culturally patterned schemas.",
      questions: [
        {
          type: "mcq",
          q: "In his 1932 book Remembering, Frederic Bartlett argued that memory is...",
          choices: ["A perfect video-like recording", "An active reconstruction shaped by prior knowledge", "Purely genetic", "Impossible to study"],
          answer: 1,
          explain: "Bartlett showed remembering is reconstructive, guided by schemas, rather than a faithful reproduction."
        },
        {
          type: "fill",
          q: "Bartlett's famous study used a Native American folk tale called 'The War of the ____.'",
          answer: "ghosts",
          accept: ["ghosts", "ghost"],
          explain: "English participants repeatedly retold 'The War of the Ghosts,' distorting it toward their own cultural expectations."
        },
        {
          type: "truefalse",
          q: "Bartlett found that participants reproduced the unfamiliar story almost perfectly, with no cultural distortion.",
          answer: false,
          explain: "They omitted, rationalized, and transformed unfamiliar details to fit familiar cultural schemas."
        },
        {
          type: "mcq",
          q: "Bartlett used the term 'schema' to mean...",
          choices: ["An organized structure of prior knowledge that guides remembering", "A random guess", "A type of brain cell", "A folk tale"],
          answer: 0,
          explain: "A schema is an active organization of past experience that shapes how new material is encoded and recalled."
        },
        {
          type: "match",
          q: "Match each of Bartlett's terms to its meaning.",
          pairs: [["Schema", "Organized prior knowledge guiding memory"], ["Rationalization", "Changing details to make a story make sense"], ["Serial reproduction", "Retelling passed along a chain of people"]],
          explain: "Bartlett's methods of repeated and serial reproduction revealed how schemas reshape memory over time."
        },
        {
          type: "order",
          q: "Order what happened as English readers retold 'The War of the Ghosts.'",
          items: ["They read an unfamiliar Native American tale", "Unfamiliar details were dropped or altered", "The story shifted to fit their own culture"],
          explain: "Retellings grew shorter and more conventional, reshaped by the readers' cultural schemas."
        },
        {
          type: "truefalse",
          q: "Bartlett's work supports the idea that culture influences what and how we remember.",
          answer: true,
          explain: "Because schemas are culturally shaped, memory is reconstructed in culturally patterned ways."
        }
      ]
    }
  ]
});
