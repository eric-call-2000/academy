window.ACADEMY.addUnit("evopsych", {
  id: "unit-24",
  title: "Methods and Evidence",
  color: "#7c5cff",
  icon: "🔬",
  description: "Learn the research tools evolutionary psychologists use to test hypotheses, from comparing species and cultures to twin studies, economic games, and hormone measures.",
  lessons: [
    {
      id: "l185",
      title: "The Comparative Method",
      intro: "The comparative method compares traits across related species to reconstruct their evolutionary history and infer function.",
      questions: [
        {
          type: "mcq",
          q: "What is the core logic of the comparative method in evolutionary psychology?",
          choices: [
            "Surveying a single population repeatedly over many years",
            "Randomly assigning subjects to experimental conditions",
            "Comparing traits across species to reconstruct evolutionary history and infer function",
            "Interviewing people about their earliest childhood memories"
          ],
          answer: 2,
          explain: "The comparative method looks across related species, using their similarities and differences to infer how and why a trait evolved."
        },
        {
          type: "match",
          q: "Match each comparative concept with its meaning.",
          pairs: [
            ["Homology", "Similarity due to shared common ancestry"],
            ["Analogy (homoplasy)", "Similarity due to convergent selection, not shared ancestry"],
            ["Phylogeny", "The branching tree of evolutionary relationships among species"]
          ],
          explain: "Homology reflects inheritance from a common ancestor, analogy reflects independent evolution of a similar solution, and a phylogeny maps how species are related."
        },
        {
          type: "truefalse",
          q: "A phylogeny is a branching diagram that represents the evolutionary relationships among species.",
          answer: true,
          explain: "A phylogeny (phylogenetic tree) shows lines of descent, letting researchers map where in evolutionary history a trait arose."
        },
        {
          type: "fill",
          q: "Large testes relative to body size in chimpanzees are explained by intense ____ competition among males whose mates copulate with several partners.",
          answer: "sperm",
          accept: ["sperm", "sperm competition"],
          explain: "When females mate with multiple males, males compete by producing more sperm, favoring larger testes; this pattern is read off a comparison across primate species."
        },
        {
          type: "mcq",
          q: "Comparing primates, gorillas have relatively small testes while chimpanzees have large testes. What does this pattern best illustrate?",
          choices: [
            "That larger animals always have larger testes",
            "That sperm competition intensity tracks a species' mating system",
            "That testosterone alone determines a mating system",
            "That gorillas are more closely related to humans than chimps are"
          ],
          answer: 1,
          explain: "Gorillas have single-male harems with little sperm competition, while promiscuous chimp mating creates strong sperm competition, so testes size tracks the mating system."
        },
        {
          type: "order",
          q: "Order the steps of a comparative analysis, from first to last.",
          items: [
            "Identify a trait of interest across several species",
            "Map the trait onto a known phylogeny",
            "Judge whether shared traits reflect common ancestry or convergence",
            "Infer the selective pressures that shaped the trait"
          ],
          explain: "Comparative reasoning moves from measuring a trait, to placing it on the tree, to distinguishing homology from analogy, to inferring the selection behind it."
        },
        {
          type: "truefalse",
          q: "An outgroup species can never be used to infer the ancestral state of a trait.",
          answer: false,
          explain: "Outgroups are routinely used: comparing a group to a more distantly related species helps reconstruct which trait state is ancestral versus derived."
        }
      ]
    },
    {
      id: "l186",
      title: "Cross-Cultural Studies",
      intro: "Cross-cultural comparison distinguishes human universals from local variation, often drawing on archives like the HRAF.",
      questions: [
        {
          type: "fill",
          q: "The Human Relations Area Files, abbreviated ____, is a Yale-based archive of ethnographic data used to test cross-cultural claims.",
          answer: "HRAF",
          accept: ["hraf"],
          explain: "The HRAF, organized by George Murdock at Yale, compiles ethnographies from hundreds of societies so researchers can test whether a pattern is widespread."
        },
        {
          type: "mcq",
          q: "David Buss's landmark 1989 study of mate preferences sampled roughly how many cultures?",
          choices: [
            "2 cultures in North America",
            "A single culture studied longitudinally",
            "37 cultures across six continents",
            "Over 500 cultures on one continent"
          ],
          answer: 2,
          explain: "Buss (1989) surveyed 37 cultures on six continents, finding cross-cultural regularities such as men valuing youth and women valuing resources."
        },
        {
          type: "truefalse",
          q: "A trait found in every documented human society is evidence that it may be a human universal.",
          answer: true,
          explain: "Pan-cultural presence is a hallmark of universals, though researchers still ask whether it reflects an evolved mechanism or a shared developmental input."
        },
        {
          type: "match",
          q: "Match each item with the category evolutionary psychologists usually assign it.",
          pairs: [
            ["Use of language", "Human universal"],
            ["The specific language spoken (e.g., Swahili)", "Local cultural variation"],
            ["Concern with fairness in exchange", "Human universal"],
            ["Particular table manners and etiquette", "Local cultural variation"]
          ],
          explain: "The capacity for language and a sense of fairness recur everywhere, while which language or which etiquette rules people follow varies by culture."
        },
        {
          type: "mcq",
          q: "Who catalogued hundreds of 'human universals' in a 1991 book of that name?",
          choices: [
            "George Murdock",
            "Donald Brown",
            "Margaret Mead",
            "Franz Boas"
          ],
          answer: 1,
          explain: "Anthropologist Donald Brown's 'Human Universals' (1991) compiled traits found in all known societies, providing targets for evolutionary explanation."
        },
        {
          type: "fill",
          q: "When a psychological trait appears across widely separated, historically independent cultures, it is harder to explain as mere ____ diffusion between neighbors.",
          answer: "cultural",
          accept: ["cultural", "culture"],
          explain: "Independent recurrence rules out simple borrowing between adjacent groups, strengthening the case that the trait reflects a shared human design."
        },
        {
          type: "truefalse",
          q: "Finding that a preference varies in its expression across cultures automatically proves it has no evolved basis.",
          answer: false,
          explain: "Evolved mechanisms are often facultative, producing different outputs depending on local conditions, so variation is compatible with an underlying evolved program."
        }
      ]
    },
    {
      id: "l187",
      title: "Hunter-Gatherer Research",
      intro: "Contemporary foragers like the Hadza and !Kung offer imperfect but valuable models of ancestral human ecology.",
      questions: [
        {
          type: "mcq",
          q: "The Hadza, a foraging people often studied by evolutionary anthropologists, live in which region?",
          choices: [
            "Northern Tanzania, around Lake Eyasi",
            "The Amazon basin in Brazil",
            "The Arctic tundra of Canada",
            "The highlands of Papua New Guinea"
          ],
          answer: 0,
          explain: "The Hadza live near Lake Eyasi in northern Tanzania and are one of the last groups still relying substantially on hunting and gathering."
        },
        {
          type: "match",
          q: "Match each foraging population with a researcher associated with studying it.",
          pairs: [
            ["!Kung San", "Richard Lee"],
            ["Hadza", "Frank Marlowe"],
            ["!Kung demography", "Nancy Howell"]
          ],
          explain: "Richard Lee's Kalahari fieldwork made the !Kung famous, Frank Marlowe wrote a major monograph on the Hadza, and Nancy Howell documented !Kung demography."
        },
        {
          type: "truefalse",
          q: "Modern hunter-gatherers are literally unchanged 'living fossils' identical to Stone Age humans.",
          answer: false,
          explain: "Living foragers have their own histories, trade, and contact with outsiders; they are models to reason with, not time capsules of the Pleistocene."
        },
        {
          type: "fill",
          q: "The !Kung San, studied intensively by Richard Lee in the 1960s, forage in the ____ Desert of southern Africa.",
          answer: "Kalahari",
          accept: ["kalahari"],
          explain: "The !Kung (Ju/'hoansi) inhabit the Kalahari Desert, and Lee's work there reshaped views of forager work effort and diet."
        },
        {
          type: "mcq",
          q: "Why do evolutionary psychologists study contemporary hunter-gatherers?",
          choices: [
            "Because they are genetically different from other humans",
            "Because their subsistence ecology can illuminate conditions under which human adaptations evolved",
            "Because they never experience any cultural change",
            "Because agriculture is thought to have no effect on human behavior"
          ],
          answer: 1,
          explain: "Foraging life resembles the ecological problems humans faced for most of our history, offering clues about the environments that shaped our psychology."
        },
        {
          type: "order",
          q: "Order the reasoning steps when using foragers as a model of the ancestral past, from first to last.",
          items: [
            "Observe subsistence and social patterns among living foragers",
            "Note features shared across many independent forager groups",
            "Treat those shared features as plausible for ancestral environments",
            "Remember that living foragers are still modern people, not time capsules"
          ],
          explain: "Careful inference moves from observation, to cross-group regularities, to cautious generalization, always tempered by the limits of the analogy."
        },
        {
          type: "truefalse",
          q: "The environment of evolutionary adaptedness (EEA) refers to the statistical composite of selection pressures that shaped an adaptation, not a single time or place.",
          answer: true,
          explain: "The EEA is defined per adaptation as the recurring problems that selected for it, which is why no single 'ancestral scene' captures it."
        }
      ]
    },
    {
      id: "l188",
      title: "Behavioral Genetics",
      intro: "Twin and adoption studies estimate how much of the variation in a trait is heritable versus environmental.",
      questions: [
        {
          type: "fill",
          q: "Identical twins, who share nearly 100 percent of their genes, are called ____ twins.",
          answer: "monozygotic",
          accept: ["monozygotic", "mz", "identical"],
          explain: "Monozygotic (MZ) twins form from one fertilized egg and are genetically nearly identical, making them a key tool for estimating heritability."
        },
        {
          type: "mcq",
          q: "On average, dizygotic (fraternal) twins share what proportion of their segregating genes?",
          choices: [
            "About 100 percent",
            "About 50 percent",
            "About 25 percent",
            "0 percent"
          ],
          answer: 1,
          explain: "Dizygotic twins are like ordinary siblings, sharing about 50 percent of segregating genes, versus nearly 100 percent for identical twins."
        },
        {
          type: "truefalse",
          q: "Heritability is a population statistic describing the share of trait variance attributable to genetic differences, not the fraction of one person's trait caused by genes.",
          answer: true,
          explain: "Heritability applies to variation within a population; it does not say how much of an individual's height or IQ was 'caused by' genes."
        },
        {
          type: "match",
          q: "Match each behavioral-genetics term with its meaning.",
          pairs: [
            ["Heritability", "Proportion of trait variance in a population due to genetic variance"],
            ["Shared environment", "Environmental influences that make family members more alike"],
            ["Nonshared environment", "Environmental influences unique to each individual"]
          ],
          explain: "Twin designs partition variance into genetic, shared-environment, and nonshared-environment components."
        },
        {
          type: "mcq",
          q: "What makes adoption studies useful for separating genes from family environment?",
          choices: [
            "Adopted children share genes but not the rearing home with their biological parents",
            "Adopted children are genetically identical to their adoptive parents",
            "Adoption removes all environmental influence",
            "Adopted children have no biological parents"
          ],
          answer: 0,
          explain: "Because adoptees are raised apart from biological kin, resemblance to birth parents points to genes and resemblance to adoptive parents points to shared environment."
        },
        {
          type: "fill",
          q: "A rough heritability estimate doubles the difference between identical- and fraternal-twin correlations: h-squared is about 2 times (r-MZ minus r-DZ), a formula named after ____.",
          answer: "Falconer",
          accept: ["falconer"],
          explain: "Falconer's formula estimates heritability from the gap between MZ and DZ twin correlations; larger gaps imply stronger genetic influence."
        },
        {
          type: "truefalse",
          q: "The equal environments assumption holds that identical and fraternal twin pairs experience equally similar environments, and critics argue it can be violated.",
          answer: true,
          explain: "Twin heritability estimates assume MZ and DZ pairs share environments to a similar degree; if MZ twins are treated more alike, estimates can be biased upward."
        }
      ]
    },
    {
      id: "l189",
      title: "Adaptationism Done Rigorously",
      intro: "George Williams argued that adaptation is a demanding concept to be invoked only when special design requires it.",
      questions: [
        {
          type: "mcq",
          q: "In which 1966 book did George C. Williams set strict standards for identifying adaptations?",
          choices: [
            "The Selfish Gene",
            "Adaptation and Natural Selection",
            "On the Origin of Species",
            "Sociobiology: The New Synthesis"
          ],
          answer: 1,
          explain: "Williams's 'Adaptation and Natural Selection' (1966) argued that adaptation should be recognized cautiously, only when the evidence demands it."
        },
        {
          type: "fill",
          q: "Williams argued that adaptation is an 'onerous' concept that should be invoked only when demanded by evidence of ____ design.",
          answer: "special",
          accept: ["special"],
          explain: "Evidence of 'special design' (features precisely organized to serve a function) is what warrants calling a trait an adaptation rather than an accident."
        },
        {
          type: "truefalse",
          q: "Under Williams's approach, complexity, economy, efficiency, and precision that reliably serve a function are evidence of adaptation.",
          answer: true,
          explain: "These design features are unlikely to arise by chance, so their presence signals that selection built the trait for that function."
        },
        {
          type: "match",
          q: "Match each category with its description.",
          pairs: [
            ["Adaptation", "A trait built by selection because it solved an ancestral problem"],
            ["By-product", "A trait carried along with an adaptation but serving no function of its own"],
            ["Noise", "Random variation not attributable to selection"]
          ],
          explain: "Williams and later Buss and Tooby stressed distinguishing designed adaptations from incidental by-products and random noise."
        },
        {
          type: "mcq",
          q: "The human belly button (navel) is best described as which of the following?",
          choices: [
            "An adaptation for storing fat",
            "A by-product of the umbilical cord, not designed for any function",
            "Random developmental noise unique to each person",
            "An adaptation specifically for attracting mates"
          ],
          answer: 1,
          explain: "The navel is a by-product of how the umbilical cord attaches; it shows no special design for a function, so it is not itself an adaptation."
        },
        {
          type: "order",
          q: "Order the logic of Williams's rigorous adaptationism, from first to last.",
          items: [
            "Default to the simplest explanation and avoid casual adaptation claims",
            "Look for evidence of special design: precision, economy, reliability",
            "If such design is present, conclude the trait is an adaptation",
            "Otherwise treat the trait as a by-product or noise"
          ],
          explain: "The method starts skeptical, demands evidence of design, and reserves the label 'adaptation' for traits that pass that test."
        },
        {
          type: "truefalse",
          q: "Williams believed that every trait of an organism is necessarily an adaptation shaped for a purpose.",
          answer: false,
          explain: "Williams argued the opposite: adaptation is an onerous concept, and many traits are by-products or noise rather than designed adaptations."
        }
      ]
    },
    {
      id: "l190",
      title: "Reverse Engineering Method",
      intro: "Reverse engineering starts from an ancestral adaptive problem and predicts the design features of the mechanism that would solve it.",
      questions: [
        {
          type: "mcq",
          q: "In evolutionary psychology, 'reverse engineering' the mind means:",
          choices: [
            "Reasoning from an adaptive problem to the design a mechanism would need to solve it",
            "Taking a physical brain apart neuron by neuron",
            "Running a factory production line backwards",
            "Guessing a person's childhood from their current behavior"
          ],
          answer: 0,
          explain: "Just as an engineer infers a device's purpose from its structure, evolutionary psychologists infer likely mechanisms from the adaptive problems ancestors faced."
        },
        {
          type: "fill",
          q: "Leda Cosmides and John ____ championed the reverse-engineering, computational approach to the evolved mind.",
          answer: "Tooby",
          accept: ["tooby"],
          explain: "Cosmides and Tooby argued the mind is a set of evolved information-processing programs, each designed to solve a specific adaptive problem."
        },
        {
          type: "truefalse",
          q: "A task analysis specifies the information-processing requirements an adaptive problem imposes, guiding predictions about the mechanism.",
          answer: true,
          explain: "By spelling out what a problem logically requires (what inputs, computations, and outputs), researchers predict features the solving mechanism should have."
        },
        {
          type: "order",
          q: "Order the steps of the reverse-engineering method, from first to last.",
          items: [
            "Specify a recurrent adaptive problem faced by ancestors",
            "Perform a task analysis of what solving it requires",
            "Predict specific design features of the mechanism",
            "Test those predictions with experiments or data"
          ],
          explain: "The method runs from problem, to task analysis, to predicted design, to empirical test, keeping hypotheses falsifiable."
        },
        {
          type: "match",
          q: "Match each research direction or tool with its description.",
          pairs: [
            ["Reverse engineering", "From adaptive problem to predicted mechanism"],
            ["Forward inference", "From an observed mechanism to its likely function"],
            ["Task analysis", "Cataloguing the computational demands of a problem"]
          ],
          explain: "Reverse engineering reasons from function to design, forward inference from design to function, and task analysis defines the demands in between."
        },
        {
          type: "mcq",
          q: "Cosmides's work on the Wason selection task suggested people reason far better when the problem is framed as:",
          choices: [
            "An abstract logic puzzle with letters and numbers",
            "Detecting cheaters in a social exchange rule",
            "A mathematics word problem",
            "A memory test for random words"
          ],
          answer: 1,
          explain: "Performance jumps when the same logic is cast as catching someone who took a benefit without paying the cost, supporting a hypothesized cheater-detection mechanism."
        },
        {
          type: "truefalse",
          q: "Reverse engineering guarantees that any hypothesized adaptation is real, with no need for empirical testing.",
          answer: false,
          explain: "Reverse engineering generates predictions, but those predictions must still be tested; a plausible story is not evidence on its own."
        }
      ]
    },
    {
      id: "l191",
      title: "Experiments and Economic Games",
      intro: "Controlled experiments and economic games let researchers test predictions about cooperation, fairness, and punishment.",
      questions: [
        {
          type: "match",
          q: "Match each economic game with its basic structure.",
          pairs: [
            ["Ultimatum game", "A proposer splits money; a responder can accept or reject for both"],
            ["Dictator game", "A giver simply decides how much to hand over, with no veto"],
            ["Public goods game", "Players choose how much to contribute to a shared pot"],
            ["Trust game", "An investor sends money that is multiplied, hoping some is returned"]
          ],
          explain: "These games isolate specific social decisions, letting researchers test predictions about fairness, cooperation, and trust under controlled payoffs."
        },
        {
          type: "mcq",
          q: "In the ultimatum game, responders often reject very unfair offers even though rejecting leaves them with nothing. This suggests:",
          choices: [
            "People are purely selfish payoff maximizers",
            "People will pay a cost to punish perceived unfairness",
            "People cannot understand the rules of the game",
            "Money has no value to the participants"
          ],
          answer: 1,
          explain: "Rejecting a low offer sacrifices money to deny the proposer a payoff, revealing a willingness to punish unfairness rather than pure self-interest."
        },
        {
          type: "truefalse",
          q: "In the standard dictator game, the recipient has no power to reject the allocation.",
          answer: true,
          explain: "The dictator game removes the veto, so any amount given reflects the giver's own generosity rather than fear of rejection."
        },
        {
          type: "fill",
          q: "Fehr and Gachter's 2002 study showed that people will pay a personal cost to punish free-riders, a behavior called altruistic ____.",
          answer: "punishment",
          accept: ["punishment"],
          explain: "Altruistic punishment sustains cooperation: individuals absorb a cost to sanction cheaters, benefiting the group even though punishing is personally costly."
        },
        {
          type: "mcq",
          q: "What is the main advantage of laboratory economic games for testing social predictions?",
          choices: [
            "They allow controlled manipulation of incentives and comparison of conditions",
            "They perfectly replicate ancestral environments",
            "They eliminate the need for any theory",
            "They can only be run with non-human animals"
          ],
          answer: 0,
          explain: "By holding conditions constant and varying one factor, games let researchers isolate what actually drives cooperative or punishing behavior."
        },
        {
          type: "order",
          q: "Order the steps of a one-shot ultimatum game, from first to last.",
          items: [
            "The proposer is given a sum of money",
            "The proposer offers a split to the responder",
            "The responder accepts or rejects the offer",
            "If rejected, both players receive nothing"
          ],
          explain: "The sequence of endowment, offer, decision, and payoff is what makes rejection of unfair splits a costly, informative choice."
        },
        {
          type: "truefalse",
          q: "In a public goods game, the group as a whole does best when everyone contributes, but each individual is tempted to free-ride.",
          answer: true,
          explain: "This tension between collective benefit and individual temptation makes the public goods game a clean test of cooperation and its enforcement."
        }
      ]
    },
    {
      id: "l192",
      title: "Hormones and Physiology",
      intro: "Measuring hormones such as testosterone, cortisol, and oxytocin links evolved psychology to its underlying physiology.",
      questions: [
        {
          type: "match",
          q: "Match each hormone with the domain it is most associated with.",
          pairs: [
            ["Testosterone", "Mating effort, status, and competition"],
            ["Cortisol", "Stress and the body's response to threat"],
            ["Oxytocin", "Bonding, attachment, and trust"]
          ],
          explain: "These three hormones give researchers physiological windows onto mating, stress, and social bonding systems."
        },
        {
          type: "mcq",
          q: "The 'challenge hypothesis' (Wingfield et al., 1990) predicts that testosterone rises in response to:",
          choices: [
            "Restful sleep and relaxation",
            "Competitive or mating-related challenges",
            "Eating a large meal",
            "Cold temperatures only"
          ],
          answer: 1,
          explain: "The challenge hypothesis holds that testosterone increases during competition and mating opportunities, fueling status-seeking behavior."
        },
        {
          type: "truefalse",
          q: "Cortisol is released by the HPA (hypothalamic-pituitary-adrenal) axis in response to stressors.",
          answer: true,
          explain: "Stress activates the HPA axis, culminating in cortisol release, which makes salivary cortisol a common physiological marker of stress."
        },
        {
          type: "fill",
          q: "Cortisol and testosterone can both be measured non-invasively from samples of ____, collected by having participants spit into a tube.",
          answer: "saliva",
          accept: ["saliva", "spit"],
          explain: "Salivary assays let researchers track hormones repeatedly without drawing blood, which is ideal for behavioral studies."
        },
        {
          type: "mcq",
          q: "Kosfeld and colleagues (2005) found that intranasal oxytocin increased participants' willingness to do what in a trust game?",
          choices: [
            "Reject all offers on principle",
            "Transfer more money to a trustee",
            "Leave the experiment early",
            "Lie about their own identity"
          ],
          answer: 1,
          explain: "Kosfeld et al. (2005) reported that oxytocin raised investors' transfers to trustees, linking the hormone to trusting behavior."
        },
        {
          type: "order",
          q: "Order the steps of a typical salivary cortisol stress study, from first to last.",
          items: [
            "Collect a baseline saliva sample",
            "Expose the participant to a stressor task",
            "Collect saliva samples at intervals afterward",
            "Compare post-stress cortisol to the baseline"
          ],
          explain: "Measuring before, then repeatedly after a stressor, isolates the cortisol response the stressor produced."
        },
        {
          type: "truefalse",
          q: "The dual-hormone hypothesis proposes that testosterone's link to status-seeking depends on cortisol levels.",
          answer: true,
          explain: "The dual-hormone hypothesis holds that testosterone predicts dominance behavior mainly when cortisol is low, so the two hormones must be considered together."
        }
      ]
    }
  ]
});
