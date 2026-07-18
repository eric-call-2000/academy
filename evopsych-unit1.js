window.ACADEMY.addUnit("evopsych", {
  id: "unit-1",
  title: "Why Minds Have History",
  color: "#7c5cff",
  icon: "🧠",
  description: "Introduces the premise that the human mind is a product of evolution and previews the field's core logic of proximate and ultimate explanation.",
  lessons: [
    {
      id: "l1",
      title: "What Evolutionary Psychology Is",
      intro: "Evolutionary psychology treats the mind as a set of evolved, information-processing mechanisms rather than a blank slate written on by experience alone.",
      questions: [
        {
          type: "mcq",
          q: "What is the core premise of evolutionary psychology?",
          choices: [
            "The mind is made of information-processing mechanisms shaped by natural selection",
            "The mind is a blank slate that culture fills completely",
            "The mind cannot be studied with scientific methods",
            "The mind is unaffected by our evolutionary past"
          ],
          answer: 0,
          explain: "Evolutionary psychology sees the brain as an organ built by natural selection, containing mechanisms that process information to solve adaptive problems."
        },
        {
          type: "truefalse",
          q: "According to the blank-slate view, the mind starts with no innate structure and is shaped entirely by experience.",
          answer: true,
          explain: "That is exactly the blank-slate (tabula rasa) claim; evolutionary psychology rejects it, arguing the mind comes with evolved structure."
        },
        {
          type: "fill",
          q: "The blank-slate idea is captured by the Latin phrase tabula ____, meaning a scraped tablet.",
          answer: "rasa",
          accept: ["rasa"],
          explain: "'Tabula rasa' means a blank or scraped tablet, the metaphor for a mind with no built-in content."
        },
        {
          type: "match",
          q: "Match each view of the mind to its description.",
          pairs: [
            ["Blank slate", "Mind has no innate structure and is shaped only by experience"],
            ["Evolved mind", "Mind is a bundle of adaptations built by natural selection"],
            ["Information processing", "Cognition treated as computation over inputs and outputs"]
          ],
          explain: "Evolutionary psychology combines the evolved-mind and information-processing views and rejects the blank slate."
        },
        {
          type: "mcq",
          q: "Why do evolutionary psychologists call mental mechanisms 'information-processing' devices?",
          choices: [
            "Because the brain is literally a digital computer made of silicon",
            "Because thoughts are stored on physical tablets",
            "Because mechanisms take in information, transform it, and produce outputs such as decisions",
            "Because behavior is random and unstructured"
          ],
          answer: 2,
          explain: "Calling the mind an information-processing system means its mechanisms convert inputs like perceptions into adaptive outputs like decisions, regardless of the physical medium."
        },
        {
          type: "truefalse",
          q: "Evolutionary psychology claims that because the mind evolved, culture and learning play no role in human behavior.",
          answer: false,
          explain: "It claims the opposite in emphasis: evolved learning mechanisms make culture possible, so evolution and learning work together, not in opposition."
        },
        {
          type: "order",
          q: "Put the evolutionary-psychology causal chain in order, from ultimate origin to observed behavior.",
          items: [
            "Natural selection shapes the genome over many generations",
            "Genes guide the development of brain mechanisms",
            "Mechanisms process information from the environment",
            "Behavior is produced as the output"
          ],
          explain: "Selection acts across generations on genes, which build mechanisms, which process current information to produce behavior."
        }
      ]
    },
    {
      id: "l2",
      title: "The Adaptationist Program",
      intro: "The adaptationist program explains a trait by asking what adaptive problem it was designed by selection to solve.",
      questions: [
        {
          type: "mcq",
          q: "In the adaptationist program, to 'explain' a trait means to identify...",
          choices: [
            "the adaptive problem it evolved to solve",
            "the person who first described it",
            "how expensive it is to grow",
            "whether it is common in modern cities"
          ],
          answer: 0,
          explain: "Adaptationism asks about function: what recurring survival or reproduction problem the trait was shaped to solve."
        },
        {
          type: "fill",
          q: "Reasoning backward from a trait's design to the problem it solved is often called reverse ____.",
          answer: "engineering",
          accept: ["engineering"],
          explain: "Evolutionary psychologists reverse-engineer a mechanism by inferring the adaptive problem its design features are organized to solve."
        },
        {
          type: "truefalse",
          q: "George Williams argued in 'Adaptation and Natural Selection' (1966) that adaptation is a special concept that should be invoked only when the evidence truly requires it.",
          answer: true,
          explain: "Williams warned against calling everything an adaptation; the label should be reserved for traits showing clear evidence of functional design."
        },
        {
          type: "match",
          q: "Match each category to what it describes.",
          pairs: [
            ["Adaptation", "Trait built by selection because it solved a problem"],
            ["Byproduct", "Trait with no function, carried along with an adaptation"],
            ["Noise", "Random variation not shaped by selection"]
          ],
          explain: "Williams distinguished adaptations from byproducts and random noise; only adaptations reflect functional design."
        },
        {
          type: "truefalse",
          q: "Gould and Lewontin's 1979 'Spandrels of San Marco' paper praised the adaptationist program as flawless.",
          answer: false,
          explain: "They criticized it, warning that adaptationists risk telling untestable 'just-so stories' and ignoring byproducts they called spandrels."
        },
        {
          type: "mcq",
          q: "A 'spandrel,' in Gould and Lewontin's sense, is best described as...",
          choices: [
            "an adaptation for flight",
            "a structural byproduct that was not itself selected for a function",
            "the strongest possible adaptation",
            "a gene that codes for behavior"
          ],
          answer: 1,
          explain: "Borrowed from architecture, a spandrel is a byproduct of building something else; the term warns against assuming every trait is an adaptation."
        },
        {
          type: "order",
          q: "Order the steps of an adaptationist analysis of a trait.",
          items: [
            "Identify a recurrent ancestral problem",
            "Predict the design features a solution would need",
            "Check whether the trait shows those features",
            "Conclude whether it is an adaptation for that problem"
          ],
          explain: "Adaptationism moves from a hypothesized problem to predicted design features to evidence, guarding against untestable stories."
        }
      ]
    },
    {
      id: "l3",
      title: "Proximate Versus Ultimate Causes",
      intro: "Ernst Mayr distinguished proximate causes, which explain how a behavior works right now, from ultimate causes, which explain why it evolved.",
      questions: [
        {
          type: "mcq",
          q: "Ernst Mayr's distinction, introduced in his 1961 paper, separates which two kinds of causes?",
          choices: [
            "Chemical and physical",
            "Proximate and ultimate",
            "Genetic and cultural",
            "Conscious and unconscious"
          ],
          answer: 1,
          explain: "In 'Cause and Effect in Biology' (1961), Mayr distinguished proximate causes, the immediate mechanisms, from ultimate causes, the evolutionary reasons."
        },
        {
          type: "truefalse",
          q: "A proximate explanation describes the immediate mechanism, such as hormones or stimuli, that produces a behavior.",
          answer: true,
          explain: "Proximate causes are the here-and-now machinery: physiology, neural triggers, and developmental processes."
        },
        {
          type: "fill",
          q: "An explanation in terms of a behavior's evolutionary function or 'why' is called an ____ cause.",
          answer: "ultimate",
          accept: ["ultimate"],
          explain: "Ultimate causes concern the evolutionary payoff, the reason a trait was favored by selection."
        },
        {
          type: "match",
          q: "For a bird migrating south in autumn, match each explanation to its cause type.",
          pairs: [
            ["Proximate", "Shortening daylight triggers hormonal changes that prompt migration"],
            ["Ultimate", "Migrating to a warmer region improved survival and reproduction"],
            ["Both needed", "A full account requires the mechanism and the evolutionary reason"]
          ],
          explain: "Proximate and ultimate explanations are complementary, not competing; each answers a different question about the same behavior."
        },
        {
          type: "mcq",
          q: "Why did Mayr insist both cause types matter?",
          choices: [
            "Because proximate causes are always wrong",
            "Because ultimate causes replace the need for mechanisms",
            "Because they answer different questions and confusing them creates false debates",
            "Because only ultimate causes are scientific"
          ],
          answer: 2,
          explain: "Mixing up 'how' and 'why' leads to pointless arguments; a complete biology needs both proximate and ultimate answers."
        },
        {
          type: "truefalse",
          q: "Saying 'people eat because sugar tastes good' and 'people evolved a sweet tooth because ripe fruit was calorie-rich' are competing explanations that cannot both be true.",
          answer: false,
          explain: "They are complementary: the first is proximate (mechanism) and the second ultimate (function); both can be correct at once."
        },
        {
          type: "order",
          q: "Order these explanations of hunger from most proximate to most ultimate.",
          items: [
            "An empty stomach releases the hormone ghrelin",
            "The brain registers a drive to seek food",
            "Ancestors who ate when food was available survived better"
          ],
          explain: "The list moves from immediate physiological mechanism (proximate) toward the evolutionary reason the drive exists (ultimate)."
        }
      ]
    },
    {
      id: "l4",
      title: "Tinbergen's Four Questions",
      intro: "Niko Tinbergen proposed four complementary questions that any complete explanation of a behavior should answer.",
      questions: [
        {
          type: "mcq",
          q: "Niko Tinbergen's four questions, laid out in 1963, are organized along two axes. What are they?",
          choices: [
            "Big versus small, and fast versus slow",
            "Proximate versus ultimate, and current state versus historical development",
            "Nature versus nurture, and true versus false",
            "Human versus animal, and body versus mind"
          ],
          answer: 1,
          explain: "Tinbergen crossed the proximate/ultimate distinction with a static/developmental (current vs history) axis, yielding four questions."
        },
        {
          type: "match",
          q: "Match each of Tinbergen's four questions to what it asks.",
          pairs: [
            ["Mechanism (causation)", "What immediate machinery produces the behavior now"],
            ["Development (ontogeny)", "How the behavior emerges over the individual's lifetime"],
            ["Function (survival value)", "How the behavior improved survival or reproduction"],
            ["Phylogeny (evolution)", "How the behavior arose over the species' evolutionary history"]
          ],
          explain: "Mechanism and development are proximate; function and phylogeny are ultimate. Together they give a complete explanation."
        },
        {
          type: "truefalse",
          q: "In Tinbergen's scheme, 'function' and 'phylogeny' are both ultimate (evolutionary) questions.",
          answer: true,
          explain: "Function asks the adaptive payoff and phylogeny asks the evolutionary history; both are ultimate, unlike mechanism and development."
        },
        {
          type: "fill",
          q: "Tinbergen's question about how a behavior develops across an individual's lifespan is the question of ____.",
          answer: "development",
          accept: ["development", "ontogeny"],
          explain: "Ontogeny, or development, asks how a behavior is assembled over the course of an individual's life."
        },
        {
          type: "mcq",
          q: "The question 'How did this behavior arise over the evolutionary history of the species?' corresponds to which of Tinbergen's four?",
          choices: [
            "Phylogeny",
            "Mechanism",
            "Development",
            "Function"
          ],
          answer: 0,
          explain: "Phylogeny (evolution) traces the deep-time history of a trait across ancestral species."
        },
        {
          type: "truefalse",
          q: "Tinbergen believed you must pick only one of the four questions and ignore the rest.",
          answer: false,
          explain: "The four questions are complementary; a full explanation of any behavior addresses all four, not just one."
        },
        {
          type: "order",
          q: "Group Tinbergen's four questions: order them so the two proximate questions come first, then the two ultimate ones.",
          items: [
            "Mechanism",
            "Development",
            "Function",
            "Phylogeny"
          ],
          explain: "Mechanism and development are proximate (how it works and how it grows); function and phylogeny are ultimate (why it evolved and its history)."
        }
      ]
    },
    {
      id: "l5",
      title: "Ancestral Problems, Modern Minds",
      intro: "Our minds were tuned to the recurrent survival and reproduction problems of ancestral environments, which can mismatch the modern world.",
      questions: [
        {
          type: "mcq",
          q: "Evolutionary psychology argues our mental adaptations were shaped to solve problems that were...",
          choices: [
            "unique to each individual",
            "recurrent across ancestral generations, like finding food and avoiding predators",
            "invented in the last hundred years",
            "purely imaginary"
          ],
          answer: 1,
          explain: "Adaptations are built by problems that recurred over evolutionary time, giving selection many generations to shape a solution."
        },
        {
          type: "fill",
          q: "The statistical set of ancestral conditions that shaped an adaptation is called the environment of evolutionary ____, or EEA.",
          answer: "adaptedness",
          accept: ["adaptedness"],
          explain: "John Bowlby coined 'environment of evolutionary adaptedness' (EEA) for the ancestral conditions an adaptation was designed for."
        },
        {
          type: "truefalse",
          q: "Because the EEA differs from today's world, some evolved preferences can now be mismatched, like a strong craving for sugar and fat.",
          answer: true,
          explain: "Cravings that were adaptive when calories were scarce can misfire in a modern world of abundant sugar and fat; this is the mismatch idea."
        },
        {
          type: "match",
          q: "Match each ancestral problem to a plausible evolved response.",
          pairs: [
            ["Scarce calories", "A taste preference for sweet and fatty foods"],
            ["Dangerous animals", "Rapid fear learning for snakes and heights"],
            ["Finding mates", "Attention to cues of health and fertility"]
          ],
          explain: "Recurrent problems of survival and reproduction left behind specialized preferences and fears tuned to those challenges."
        },
        {
          type: "mcq",
          q: "The mismatch between evolved minds and modern environments is sometimes called...",
          choices: [
            "the blank slate",
            "reverse engineering",
            "evolutionary mismatch or adaptive lag",
            "proximate causation"
          ],
          answer: 2,
          explain: "When the modern environment differs from the EEA, once-adaptive traits can misfire; this is evolutionary mismatch, or adaptive lag."
        },
        {
          type: "truefalse",
          q: "Evolutionary psychology assumes our minds are perfectly optimized for life in modern cities.",
          answer: false,
          explain: "It assumes the opposite: minds are tuned to ancestral conditions, so they can be poorly matched to novel modern environments."
        },
        {
          type: "order",
          q: "Order the logic of an evolutionary-mismatch explanation.",
          items: [
            "A problem recurred in ancestral environments",
            "Selection built a mechanism to solve it",
            "The modern environment changed the inputs",
            "The old mechanism now misfires"
          ],
          explain: "Mismatch arises when a mechanism shaped by ancestral inputs meets novel modern inputs it was not designed for."
        }
      ]
    },
    {
      id: "l6",
      title: "The Standard Social Science Model",
      intro: "John Tooby and Leda Cosmides named and critiqued the Standard Social Science Model, the view that biology supplies only a blank general-purpose learner while culture does the rest.",
      questions: [
        {
          type: "mcq",
          q: "What did Tooby and Cosmides mean by the 'Standard Social Science Model' (SSSM)?",
          choices: [
            "The view that the mind is a general-purpose blank slate and culture explains nearly all behavior",
            "A statistical technique for surveys",
            "The claim that genes fully determine behavior",
            "A model of the solar system"
          ],
          answer: 0,
          explain: "The SSSM, as they described it, holds that biology provides only a content-free learning capacity and that culture writes the content."
        },
        {
          type: "truefalse",
          q: "Tooby and Cosmides introduced their critique of the SSSM in 'The Psychological Foundations of Culture,' published in the 1992 volume 'The Adapted Mind.'",
          answer: true,
          explain: "That chapter, in the Barkow, Cosmides, and Tooby volume 'The Adapted Mind' (1992), laid out and criticized the SSSM."
        },
        {
          type: "fill",
          q: "Against the idea of one general-purpose learner, Tooby and Cosmides argued the mind is full of many domain-____ mechanisms.",
          answer: "specific",
          accept: ["specific"],
          explain: "They proposed the mind contains many specialized, domain-specific mechanisms, not a single all-purpose learning device."
        },
        {
          type: "match",
          q: "Match each model of the mind to its claim.",
          pairs: [
            ["Standard Social Science Model", "Biology gives a blank general learner; culture supplies content"],
            ["Evolutionary alternative", "Mind has many evolved, special-purpose mechanisms"],
            ["Culture, in the alternative view", "Generated and shaped by our evolved psychology"]
          ],
          explain: "Tooby and Cosmides argued culture is not a free-floating cause but is produced by evolved, specialized minds."
        },
        {
          type: "truefalse",
          q: "In the SSSM as characterized by Tooby and Cosmides, the content of the human mind comes almost entirely from the social world, not from evolved structure.",
          answer: true,
          explain: "That is the defining SSSM assumption they targeted: the mind is a blank general learner, so content flows from culture."
        },
        {
          type: "mcq",
          q: "A key problem Tooby and Cosmides raised with a single general-purpose learning mechanism is that...",
          choices: [
            "it would learn everything too quickly",
            "different adaptive problems require different, specialized solutions a blank slate cannot provide",
            "culture does not exist",
            "learning is impossible"
          ],
          answer: 1,
          explain: "A content-free learner cannot know, for example, what counts as nutritious food versus a good mate; specialized mechanisms are needed."
        },
        {
          type: "order",
          q: "Order Tooby and Cosmides' argument against pure culturalism.",
          items: [
            "A blank general learner cannot solve specialized adaptive problems",
            "So selection built many domain-specific mechanisms",
            "These mechanisms make learning and culture possible",
            "Therefore culture is shaped by evolved psychology, not free of it"
          ],
          explain: "Their case runs from the limits of a blank slate to specialized mechanisms to culture as a product of evolved minds."
        }
      ]
    },
    {
      id: "l7",
      title: "Nature Via Nurture",
      intro: "Genes and environment are not opposing forces; they interact, with genes responding to environments and environments acting through genes.",
      questions: [
        {
          type: "mcq",
          q: "The phrase 'nature via nurture' captures the idea that...",
          choices: [
            "nature and nurture are enemies",
            "genes and environment interact, each depending on the other",
            "nurture always wins",
            "genes have no role in behavior"
          ],
          answer: 1,
          explain: "The phrase, popularized by Matt Ridley's 2003 book, stresses that genes and environments work together rather than against each other."
        },
        {
          type: "truefalse",
          q: "Matt Ridley's 2003 book 'Nature via Nurture' argues that the old 'nature versus nurture' framing is a false opposition.",
          answer: true,
          explain: "Ridley argued genes are designed to take cues from the environment, dissolving the versus into a via."
        },
        {
          type: "fill",
          q: "Rather than nature versus nurture, modern biology emphasizes gene-environment ____, where each shapes the effect of the other.",
          answer: "interaction",
          accept: ["interaction", "interactions"],
          explain: "Gene-environment interaction means a gene's effect depends on the environment, and an environment's effect depends on the genes."
        },
        {
          type: "match",
          q: "Match each idea to what it means.",
          pairs: [
            ["Nature versus nurture", "The false view that genes and environment compete as separate causes"],
            ["Nature via nurture", "Genes act by responding to and using environmental inputs"],
            ["Norm of reaction", "The range of outcomes a genotype can produce across environments"]
          ],
          explain: "The modern view replaces a tug-of-war with interaction; the norm of reaction shows how one genotype yields different traits in different environments."
        },
        {
          type: "mcq",
          q: "Which statement best fits the interactionist view?",
          choices: [
            "Genes fully fix behavior regardless of environment",
            "Environment fully fixes behavior regardless of genes",
            "Genes and environment act in completely separate, non-overlapping ways",
            "Genes and environment can each change how the other affects a trait"
          ],
          answer: 3,
          explain: "Interaction means the influence of genes depends on the environment and vice versa; their effects are not simply separate or additive."
        },
        {
          type: "truefalse",
          q: "Saying a behavior is 'genetic' means the environment cannot influence it at all.",
          answer: false,
          explain: "Even strongly heritable traits develop through environmental inputs; heritability never means the environment is irrelevant."
        },
        {
          type: "order",
          q: "Order how a gene-environment interaction can unfold.",
          items: [
            "A gene is present in the genome",
            "An environmental cue is encountered",
            "The cue switches the gene's activity up or down",
            "The resulting trait reflects both gene and environment"
          ],
          explain: "Genes often act conditionally, responding to environmental signals, so the outcome depends on both together."
        }
      ]
    },
    {
      id: "l8",
      title: "Levels of Analysis",
      intro: "A coherent science of mind integrates biology, cognition, and culture as consistent levels of explanation rather than rival ones.",
      questions: [
        {
          type: "mcq",
          q: "Why does evolutionary psychology stress multiple 'levels of analysis'?",
          choices: [
            "To prove one level is the only real explanation",
            "Because biological, cognitive, and cultural accounts should fit together, not compete",
            "Because only the cultural level matters",
            "Because levels of analysis are unscientific"
          ],
          answer: 1,
          explain: "Different levels answer different questions; a good theory keeps them mutually consistent instead of pitting them against each other."
        },
        {
          type: "match",
          q: "Match David Marr's three levels of analyzing an information-processing system to their focus.",
          pairs: [
            ["Computational", "What problem is being solved and why"],
            ["Algorithmic", "What representations and steps solve it"],
            ["Implementational", "How the physical system, the brain, carries it out"]
          ],
          explain: "Marr's levels show a single system can be described at the level of goal, method, and physical realization at once."
        },
        {
          type: "truefalse",
          q: "David Marr argued that a complete understanding of an information-processing system needs the computational, algorithmic, and implementational levels together.",
          answer: true,
          explain: "Marr's framework treats the three levels as complementary; understanding one does not replace the need for the others."
        },
        {
          type: "fill",
          q: "E. O. Wilson used the word ____ for the idea that knowledge across the sciences and humanities should link into one consistent framework.",
          answer: "consilience",
          accept: ["consilience"],
          explain: "In 'Consilience' (1998), Wilson argued the natural and social sciences should form a single, mutually consistent body of knowledge."
        },
        {
          type: "mcq",
          q: "Tooby and Cosmides called for 'vertical integration' among disciplines. This means...",
          choices: [
            "ranking sciences from best to worst",
            "keeping fields entirely separate",
            "making explanations at different levels mutually compatible",
            "replacing psychology with chemistry"
          ],
          answer: 2,
          explain: "Vertical integration asks that psychology, biology, and the social sciences be consistent with one another, none contradicting the known principles of the others."
        },
        {
          type: "truefalse",
          q: "Integrating levels of analysis means reducing culture and cognition away so that only genes remain worth studying.",
          answer: false,
          explain: "Integration is not elimination; each level adds genuine explanation, and a good account respects all of them together."
        },
        {
          type: "order",
          q: "Order these levels of explaining a single behavior, from broadest evolutionary function down to physical mechanism.",
          items: [
            "The adaptive problem the behavior solves",
            "The information-processing mechanism that solves it",
            "The neural and physiological hardware that runs it"
          ],
          explain: "Moving from function to cognitive mechanism to biological implementation shows how levels nest together into one coherent account."
        }
      ]
    }
  ]
});
