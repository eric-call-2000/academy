window.ACADEMY.addUnit("culture", {
  id: "unit-4",
  title: "Culture, Evolution, and Transmission",
  color: "#e08a1e",
  icon: "🧬",
  description: "Explores how humans acquire culture and why cumulative, socially transmitted knowledge is a species-defining adaptation.",
  lessons: [
    {
      id: "l25",
      title: "Cumulative cultural evolution",
      intro: "Cumulative culture builds complexity across generations through a ratchet effect that locks in gains so they are rarely lost.",
      questions: [
        {
          type: "mcq",
          q: "Which theorist is most associated with the 'ratchet effect' as an account of cumulative culture?",
          choices: ["Charles Darwin", "Michael Tomasello", "Franz Boas", "B.F. Skinner"],
          answer: 1,
          explain: "Michael Tomasello popularized the ratchet metaphor, arguing that faithful transmission holds cultural gains in place so they can be built upon."
        },
        {
          type: "truefalse",
          q: "The ratchet effect depends on innovations being transmitted faithfully enough that gains are not lost between generations.",
          answer: true,
          explain: "High-fidelity transmission is what stops the ratchet from slipping back, letting each generation start where the last left off."
        },
        {
          type: "fill",
          q: "The ____ effect describes how cultural knowledge accumulates over time without slipping backward.",
          answer: "ratchet",
          accept: ["ratchet"],
          explain: "Like a mechanical ratchet that turns one way, cultural improvements are retained rather than reversed."
        },
        {
          type: "order",
          q: "Order these steps that illustrate one turn of the cultural ratchet.",
          items: ["A basic tool is invented", "The next generation faithfully learns the tool", "A learner adds an improvement", "The improved tool is passed on"],
          explain: "Faithful learning preserves the design, and each added improvement is then locked in for the following generation."
        },
        {
          type: "mcq",
          q: "What primarily makes cumulative cultural evolution possible in humans?",
          choices: ["High-fidelity social learning", "Larger individual brains alone", "Frequent genetic mutation", "Random individual trial and error"],
          answer: 0,
          explain: "Accurate copying preserves innovations across generations; without it, each learner would have to reinvent everything from scratch."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Ratchet effect", "Cultural gains are retained and built upon"], ["Cumulative culture", "Complexity beyond any single inventor"], ["High-fidelity transmission", "Faithful copying that prevents loss"]],
          explain: "Together these ideas explain how populations accumulate designs no lone individual could produce."
        },
        {
          type: "truefalse",
          q: "Cumulative culture means each new generation must reinvent complex tools from scratch.",
          answer: false,
          explain: "It means the opposite: prior knowledge is inherited socially, so learners refine rather than reinvent."
        }
      ]
    },
    {
      id: "l26",
      title: "Humans as cultural species",
      intro: "Joseph Henrich argues our success comes not from raw individual intelligence but from culturally accumulated knowledge shared across a 'collective brain.'",
      questions: [
        {
          type: "mcq",
          q: "Who wrote 'The Secret of Our Success' (2015), arguing culture drives human success?",
          choices: ["Michael Tomasello", "Franz Boas", "Joseph Henrich", "Peter Richerson"],
          answer: 2,
          explain: "Joseph Henrich's book makes the case that cumulative culture, not individual genius, is the engine of human adaptation."
        },
        {
          type: "truefalse",
          q: "Henrich argues human success comes mainly from individual raw intelligence rather than accumulated culture.",
          answer: false,
          explain: "His thesis is the reverse: humans depend on knowledge accumulated over generations, which no single person could invent."
        },
        {
          type: "fill",
          q: "Henrich calls our reliance on knowledge distributed across a population the 'collective ____.'",
          answer: "brain",
          accept: ["brain", "brains"],
          explain: "The 'collective brain' idea holds that populations, not lone minds, solve hard adaptive problems."
        },
        {
          type: "mcq",
          q: "Why did some lost European explorers die in environments where local peoples thrived?",
          choices: ["They were less intelligent than locals", "They lacked culturally accumulated survival knowledge", "The climate was uniquely harsh that year", "They refused to eat local food"],
          answer: 1,
          explain: "Henrich uses such cases to show that without local cultural know-how (foraging, food processing), individual intelligence is not enough."
        },
        {
          type: "match",
          q: "Match each concept to an example or definition.",
          pairs: [["Collective brain", "Knowledge distributed across a population"], ["Cultural know-how", "Detoxifying cassava or making fire"], ["Cultural species", "Adapted to depend on learned information"]],
          explain: "Humans are biologically built to acquire and rely on culturally transmitted information."
        },
        {
          type: "order",
          q: "Order these claims to reconstruct Henrich's argument.",
          items: ["Cultural knowledge builds up over many generations", "Individuals learn far more than they could invent alone", "Populations solve problems no single person could"],
          explain: "Accumulation over time gives each learner a rich inheritance, so groups outperform any isolated genius."
        },
        {
          type: "truefalse",
          q: "According to Henrich, gene-culture coevolution shaped human anatomy and psychology.",
          answer: true,
          explain: "He argues our bodies and minds evolved to acquire, store, and transmit culture, a process of gene-culture coevolution."
        }
      ]
    },
    {
      id: "l27",
      title: "Gene-culture coevolution",
      intro: "Lactase persistence shows how a cultural practice, dairying, reshaped human genes by favoring adults who could still digest milk.",
      questions: [
        {
          type: "mcq",
          q: "What does 'lactase persistence' refer to?",
          choices: ["Digesting starch quickly", "Producing extra saliva", "Resistance to malaria", "Continuing to digest lactose into adulthood"],
          answer: 3,
          explain: "Most mammals stop producing lactase after weaning; lactase persistence keeps that ability into adulthood."
        },
        {
          type: "truefalse",
          q: "The cultural practice of dairying created selection pressure favoring the lactase persistence allele.",
          answer: true,
          explain: "Once milk was a reliable food, adults who could digest it gained a nutritional advantage, spreading the allele."
        },
        {
          type: "fill",
          q: "The enzyme ____ breaks down lactose, the sugar found in milk.",
          answer: "lactase",
          accept: ["lactase"],
          explain: "Lactase digests lactose; when it is present in adults, they can consume fresh milk without distress."
        },
        {
          type: "mcq",
          q: "The lactase persistence case is a classic example of what process?",
          choices: ["Pure genetic drift", "Cultural determinism", "A cultural practice driving genetic evolution", "Lamarckian inheritance"],
          answer: 2,
          explain: "Dairying (culture) changed the selection environment, driving genetic change: gene-culture coevolution."
        },
        {
          type: "order",
          q: "Order the steps of this gene-culture coevolution sequence.",
          items: ["Humans domesticate cattle and begin dairying", "Fresh milk becomes a valuable food source", "The lactase persistence allele is favored by selection", "The allele spreads in dairying populations"],
          explain: "A cultural innovation altered diets, which changed which genes were adaptive, spreading lactase persistence."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Lactase persistence", "Digesting milk sugar as an adult"], ["Dairying", "Cultural practice that altered selection"], ["Gene-culture coevolution", "Genes and culture shaping each other"]],
          explain: "The dairying example ties all three together as a feedback loop between practice and biology."
        },
        {
          type: "truefalse",
          q: "Lactase persistence evolved millions of years before humans kept livestock.",
          answer: false,
          explain: "It spread only within the last several thousand years, after dairying began, not long before it."
        }
      ]
    },
    {
      id: "l28",
      title: "Social learning mechanisms",
      intro: "Children acquire culture through imitation, emulation, and overimitation, and studies show they copy even causally useless steps that chimpanzees skip.",
      questions: [
        {
          type: "match",
          q: "Match each social learning mechanism to its definition.",
          pairs: [["Imitation", "Copying the specific actions used"], ["Emulation", "Copying the goal, not the method"], ["Overimitation", "Copying even irrelevant actions"]],
          explain: "These differ in how much of the demonstrator's behavior the learner reproduces."
        },
        {
          type: "mcq",
          q: "In Horner and Whiten's (2005) puzzle-box study, how did human children respond to demonstrated but causally irrelevant steps?",
          choices: ["They ignored all demonstrated steps", "They copied even the causally irrelevant steps", "They refused to open the box", "They invented a wholly new method"],
          answer: 1,
          explain: "Children overimitated, reproducing useless actions, while chimpanzees tended to skip them and go straight for the reward."
        },
        {
          type: "truefalse",
          q: "Emulation involves reproducing the demonstrator's exact bodily movements.",
          answer: false,
          explain: "Emulation targets the end result or goal; copying exact movements is imitation."
        },
        {
          type: "fill",
          q: "____ is when children copy even causally unnecessary actions in a demonstration.",
          answer: "overimitation",
          accept: ["overimitation", "over-imitation"],
          explain: "Overimitation is a strong human tendency to faithfully copy full action sequences, even inefficient ones."
        },
        {
          type: "mcq",
          q: "Compared with human children, chimpanzees are more likely to do what when learning a task?",
          choices: ["Emulate rather than faithfully imitate", "Overimitate every step shown", "Use language to learn", "Refuse to learn socially"],
          answer: 0,
          explain: "Chimpanzees tend to emulate, focusing on outcomes and skipping irrelevant steps, whereas children imitate faithfully."
        },
        {
          type: "order",
          q: "Order these mechanisms from least to most of the demonstrator's actions reproduced.",
          items: ["Emulation (goal copied only)", "Imitation (actions copied)", "Overimitation (even irrelevant actions copied)"],
          explain: "Fidelity to the demonstrator's exact behavior increases from emulation to imitation to overimitation."
        },
        {
          type: "truefalse",
          q: "Overimitation may help children acquire culturally important conventions whose purpose is not obvious.",
          answer: true,
          explain: "By copying even opaque steps, children absorb rituals and conventions whose function they cannot yet infer."
        }
      ]
    },
    {
      id: "l29",
      title: "Prestige and conformist bias",
      intro: "Learners do not copy at random; model-based biases lead them toward prestigious individuals, and frequency-based biases toward the majority.",
      questions: [
        {
          type: "match",
          q: "Match each learning bias to its description.",
          pairs: [["Prestige bias", "Preferentially learn from admired, successful models"], ["Conformist bias", "Disproportionately adopt the majority variant"], ["Content bias", "Copy ideas that are inherently appealing"]],
          explain: "Biases can target who you copy (prestige), how common a behavior is (conformist), or the idea itself (content)."
        },
        {
          type: "mcq",
          q: "What does conformist bias mean?",
          choices: ["Copying a random person", "Always copying your parents", "Copying the most frequent behavior more than its frequency alone would warrant", "Never copying anyone"],
          answer: 2,
          explain: "Conformist transmission means overweighting the common variant, adopting it at a higher rate than simple frequency predicts."
        },
        {
          type: "truefalse",
          q: "Prestige bias predicts that learners preferentially copy admired, successful individuals.",
          answer: true,
          explain: "Because success may signal useful knowledge, copying prestigious models is an efficient shortcut."
        },
        {
          type: "fill",
          q: "____ bias leads learners to adopt whatever behavior is most common in the group.",
          answer: "conformist",
          accept: ["conformist", "conformity"],
          explain: "Conformist bias favors the majority option, helping learners quickly acquire locally adaptive norms."
        },
        {
          type: "mcq",
          q: "Henrich and Gil-White (2001) distinguished prestige from which other route to high status?",
          choices: ["Intelligence", "Dominance", "Wealth", "Age"],
          answer: 1,
          explain: "They contrasted freely conferred prestige with coercive dominance as two distinct paths to status and influence."
        },
        {
          type: "order",
          q: "Order the reasoning behind why prestige bias is adaptive.",
          items: ["A learner cannot directly judge who has the best knowledge", "The learner uses success and others' attention as a cue", "The learner preferentially copies the prestigious model"],
          explain: "When quality is hard to assess directly, copying whoever others defer to is a useful heuristic."
        },
        {
          type: "truefalse",
          q: "Conformist bias makes rare, novel behaviors spread faster than common ones.",
          answer: false,
          explain: "Conformist bias favors the majority, so it tends to suppress rare variants rather than accelerate them."
        }
      ]
    },
    {
      id: "l30",
      title: "Dual inheritance theory",
      intro: "Boyd and Richerson's dual inheritance theory treats culture as a second, parallel system of inheritance that evolves alongside genes.",
      questions: [
        {
          type: "mcq",
          q: "Who developed dual inheritance theory, articulated in the 1985 book 'Culture and the Evolutionary Process'?",
          choices: ["Tomasello and Call", "Cavalli-Sforza and Feldman", "Darwin and Wallace", "Boyd and Richerson"],
          answer: 3,
          explain: "Robert Boyd and Peter Richerson formalized dual inheritance theory, modeling culture as an evolving inheritance system."
        },
        {
          type: "truefalse",
          q: "Dual inheritance theory holds that humans inherit information through two systems: genes and culture.",
          answer: true,
          explain: "The 'dual' refers to two parallel channels, genetic and cultural, each transmitting information across generations."
        },
        {
          type: "fill",
          q: "Boyd and Richerson's 1985 book was titled 'Culture and the Evolutionary ____.'",
          answer: "process",
          accept: ["process"],
          explain: "The title signals their claim that culture is subject to evolutionary processes much like genes are."
        },
        {
          type: "match",
          q: "Match each inheritance concept to its description.",
          pairs: [["Genetic inheritance", "DNA passed from parents"], ["Cultural inheritance", "Learned information passed socially"], ["Dual inheritance", "Two parallel evolving systems"]],
          explain: "Dual inheritance theory pairs a biological channel with a social-learning channel."
        },
        {
          type: "mcq",
          q: "In dual inheritance theory, culture is treated as what?",
          choices: ["A second inheritance system shaped by selection and drift", "A byproduct with no evolutionary dynamics", "Identical to genetic inheritance", "Something unrelated to biology"],
          answer: 0,
          explain: "Cultural variants are modeled as subject to forces like selection, drift, and biased transmission."
        },
        {
          type: "truefalse",
          q: "Dual inheritance theory claims culture evolves entirely independently of genes.",
          answer: false,
          explain: "The two systems interact and coevolve; the theory is explicitly about their coupling, not independence."
        },
        {
          type: "order",
          q: "Order these statements to summarize dual inheritance theory.",
          items: ["Genes transmit biological information", "Culture transmits learned information socially", "Both systems undergo evolutionary change", "The two systems interact and coevolve"],
          explain: "Genes and culture are parallel evolving channels that feed back on each other over time."
        }
      ]
    },
    {
      id: "l31",
      title: "Enculturation vs. socialization",
      intro: "Enculturation is the largely implicit process of acquiring one's own culture, while socialization is the broader shaping of behavior to fit a group's norms.",
      questions: [
        {
          type: "match",
          q: "Match each process to its meaning.",
          pairs: [["Enculturation", "Acquiring one's own native culture"], ["Socialization", "Learning to conform to social norms"], ["Acculturation", "Adapting to a new or foreign culture"]],
          explain: "Enculturation is about absorbing your first culture; acculturation is adjusting to a different one."
        },
        {
          type: "mcq",
          q: "Enculturation refers to which process?",
          choices: ["Adapting to a foreign culture", "Acquiring one's own native culture", "Rejecting cultural norms", "Teaching others your culture"],
          answer: 1,
          explain: "Enculturation is how a person absorbs and internalizes the culture they are born into."
        },
        {
          type: "truefalse",
          q: "Enculturation is often implicit, absorbed through everyday immersion rather than formal instruction.",
          answer: true,
          explain: "Much of one's native culture is picked up unconsciously by living in it, not through explicit teaching."
        },
        {
          type: "fill",
          q: "____ is the broader process of learning to behave in accordance with a group's norms and expectations.",
          answer: "socialization",
          accept: ["socialization", "socialisation"],
          explain: "Socialization shapes individuals to function within a group by internalizing its rules and roles."
        },
        {
          type: "mcq",
          q: "Compared with socialization's focus on adapting to norms, enculturation especially emphasizes what?",
          choices: ["Rejecting all norms", "Migrating abroad", "Absorbing one's own culture", "Genetic inheritance"],
          answer: 2,
          explain: "Enculturation centers on taking in one's own culture, whereas socialization stresses conforming to social expectations."
        },
        {
          type: "truefalse",
          q: "Socialization only occurs in childhood and stops in adulthood.",
          answer: false,
          explain: "Socialization is lifelong; people continue learning new roles and norms in adulthood, work, and new groups."
        },
        {
          type: "order",
          q: "Order these moments of enculturation across a lifespan.",
          items: ["An infant absorbs language and customs at home", "A child internalizes group values", "An adult transmits the culture to the next generation"],
          explain: "Culture is first absorbed, then internalized, and eventually passed on to others."
        }
      ]
    },
    {
      id: "l32",
      title: "Cultural transmission pathways",
      intro: "Cavalli-Sforza and Feldman distinguished vertical, horizontal, and oblique routes by which cultural information moves between people.",
      questions: [
        {
          type: "match",
          q: "Match each transmission pathway to its route.",
          pairs: [["Vertical transmission", "Parent to child"], ["Horizontal transmission", "Between peers of the same generation"], ["Oblique transmission", "From unrelated older generation to younger"]],
          explain: "The three pathways differ in the generational and kin relationship between teacher and learner."
        },
        {
          type: "mcq",
          q: "Who formalized these vertical, horizontal, and oblique modes of cultural transmission?",
          choices: ["Boyd and Richerson", "Michael Tomasello", "Cavalli-Sforza and Feldman", "Franz Boas"],
          answer: 2,
          explain: "Luigi Luca Cavalli-Sforza and Marcus Feldman introduced this framework in their 1981 work on cultural transmission."
        },
        {
          type: "fill",
          q: "____ transmission passes culture from parents to their offspring.",
          answer: "vertical",
          accept: ["vertical"],
          explain: "Vertical transmission runs down the generations within a family, from parent to child."
        },
        {
          type: "truefalse",
          q: "Horizontal transmission occurs between individuals of the same generation, such as peers.",
          answer: true,
          explain: "Horizontal transmission moves sideways among age-mates, like friends or classmates sharing behaviors."
        },
        {
          type: "mcq",
          q: "A teacher who is not the child's parent passing knowledge to students is an example of which transmission?",
          choices: ["Vertical", "Horizontal", "Genetic", "Oblique"],
          answer: 3,
          explain: "Oblique transmission flows from older, non-parental members of one generation to younger learners."
        },
        {
          type: "truefalse",
          q: "Vertical transmission tends to be conservative, while horizontal transmission can spread novelties quickly.",
          answer: true,
          explain: "Parent-to-child transmission preserves tradition, whereas peer-to-peer spread lets new trends move fast."
        },
        {
          type: "mcq",
          q: "Which scenario is an example of oblique transmission?",
          choices: ["A mother teaching her daughter to cook", "Two classmates sharing new slang", "An unrelated village elder instructing the young", "Twins learning a game together"],
          answer: 2,
          explain: "An unrelated older person teaching youth is oblique; the parent case is vertical and the peer cases are horizontal."
        }
      ]
    }
  ]
});
