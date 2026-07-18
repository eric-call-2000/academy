window.ACADEMY.addUnit("egt", {
  id: "unit-4",
  title: "The Birth of Evolutionary Game Theory",
  color: "#3b74e0",
  icon: "🦌",
  description: "How the 1973 Maynard Smith and Price paper 'The Logic of Animal Conflict' founded evolutionary game theory by explaining restrained animal contests.",
  lessons: [
    {
      id: "l25",
      title: "Maynard Smith and Price 1973",
      intro: "In 1973 John Maynard Smith and George Price published the paper that launched evolutionary game theory.",
      questions: [
        {
          type: "mcq",
          q: "In what year did Maynard Smith and Price publish 'The Logic of Animal Conflict'?",
          choices: ["1966", "1973", "1979", "1982"],
          answer: 1,
          explain: "The paper appeared in the journal Nature in 1973 and is regarded as the founding work of evolutionary game theory."
        },
        {
          type: "mcq",
          q: "Who co-authored 'The Logic of Animal Conflict'?",
          choices: ["Konrad Lorenz and Niko Tinbergen", "Charles Darwin and Alfred Russel Wallace", "John Maynard Smith and George R. Price", "William Hamilton and Robert Trivers"],
          answer: 2,
          explain: "The paper was written by British biologist John Maynard Smith and American population geneticist George R. Price."
        },
        {
          type: "truefalse",
          q: "'The Logic of Animal Conflict' is widely regarded as the founding paper of evolutionary game theory.",
          answer: true,
          explain: "By applying game theory to animal contests, the 1973 paper opened up the whole field of evolutionary game theory."
        },
        {
          type: "fill",
          q: "The paper introduced the idea of an evolutionarily ____ strategy, one that resists invasion by alternatives.",
          answer: "stable",
          accept: ["stable"],
          explain: "The evolutionarily stable strategy (ESS) is the central concept the paper contributed."
        },
        {
          type: "match",
          q: "Match each item to its correct description.",
          pairs: [["Nature", "Journal that published the 1973 paper"], ["John Maynard Smith", "British evolutionary biologist and co-author"], ["George R. Price", "American population geneticist and co-author"]],
          explain: "Maynard Smith and Price published their game-theory analysis of conflict in Nature in 1973."
        },
        {
          type: "truefalse",
          q: "The paper concluded that animal restraint evolves because it benefits the whole species.",
          answer: false,
          explain: "The authors rejected 'good of the species' reasoning and instead sought explanations based on individual advantage."
        },
        {
          type: "order",
          q: "Order the reasoning steps the paper followed.",
          items: ["Notice that real animal fights are often restrained", "Reject 'good of the species' explanations", "Model conflict as a game between strategies", "Seek a strategy that is stable against invasion"],
          explain: "The paper moved from an observed puzzle, past group-selection thinking, to a game model and the search for a stable strategy."
        }
      ]
    },
    {
      id: "l26",
      title: "The puzzle of limited war",
      intro: "Animal contests over mates, food and territory are surprisingly often settled without lethal violence.",
      questions: [
        {
          type: "mcq",
          q: "The 'puzzle of limited war' is the observation that animals contesting a resource often...",
          choices: ["stop short of fighting to the death", "always fight until one dies", "never compete for resources", "cooperate and share everything equally"],
          answer: 0,
          explain: "Many contests are settled by displays or brief scuffles rather than lethal combat, which seems puzzling if winning matters."
        },
        {
          type: "truefalse",
          q: "If winning a contest raises fitness, we might naively expect animals to always use maximum force.",
          answer: true,
          explain: "That naive expectation is exactly what makes widespread restraint puzzling and worth explaining."
        },
        {
          type: "fill",
          q: "The puzzle asks why animals so rarely fight to the ____ over a contested resource.",
          answer: "death",
          accept: ["death"],
          explain: "Escalation to lethal fighting is surprisingly rare, which is the puzzle the paper set out to explain."
        },
        {
          type: "mcq",
          q: "Which is NOT a resource animals commonly contest?",
          choices: ["Mates", "Territory", "Food", "Photosynthesis"],
          answer: 3,
          explain: "Animals fight over mates, territory and food; photosynthesis is a plant process, not a contested prize."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Total war", "Fighting with full, dangerous force"], ["Limited war", "A contest settled with restraint"], ["Resource", "The prize being contested, such as a mate or territory"]],
          explain: "The puzzle is why limited war, not total war, is so common in nature."
        },
        {
          type: "truefalse",
          q: "Fighting to the death carries no cost to the winner.",
          answer: false,
          explain: "Even winners of escalated fights risk injury, energy loss and wasted time, so all-out fighting is costly."
        },
        {
          type: "order",
          q: "Order these outcomes from least to most costly to the animals involved.",
          items: ["A brief display settles the contest", "A short shoving match settles the contest", "An escalated fight causes serious injury"],
          explain: "Displays are cheap, shoving is costlier, and escalated fighting that injures animals is the most costly outcome."
        }
      ]
    },
    {
      id: "l27",
      title: "Ritualized combat observed",
      intro: "Field observations show that many species settle disputes through display and ritual rather than injury.",
      questions: [
        {
          type: "mcq",
          q: "In red deer, rival stags often assess each other by roaring and parallel walking before...",
          choices: ["immediately killing the loser", "possibly locking antlers if neither backs down", "ignoring each other entirely", "leaving the area together"],
          answer: 1,
          explain: "Red deer stags escalate through roaring contests and parallel walking, and only lock antlers if the display does not settle it."
        },
        {
          type: "truefalse",
          q: "Male rattlesnakes wrestle by pushing with their bodies but generally do not bite each other in these contests.",
          answer: true,
          explain: "Rattlesnakes have venom that could kill a rival, yet they settle male-male contests by non-venomous wrestling."
        },
        {
          type: "fill",
          q: "Contests settled by displays and conventional moves rather than injury are called ____ combat.",
          answer: "ritualized",
          accept: ["ritualized", "ritualised", "ritual"],
          explain: "Ritualized combat uses conventional signals and restrained tactics instead of dangerous escalation."
        },
        {
          type: "match",
          q: "Match each animal to the restrained tactic it commonly uses.",
          pairs: [["Red deer stags", "Roaring and parallel walking before any antler contest"], ["Rattlesnakes", "Wrestling without biting"], ["Horned antelope", "Clashing horns head-on rather than stabbing a rival's flank"]],
          explain: "Across very different species, contests are commonly settled by conventional displays rather than lethal force."
        },
        {
          type: "mcq",
          q: "In the context of animal conflict, a 'display' is best described as...",
          choices: ["a lethal attack aimed at vital organs", "a chemical that poisons a rival", "a signal such as posturing, roaring or showing weapons", "a way of sharing the resource equally"],
          answer: 2,
          explain: "Displays are signals - postures, calls or shows of size or weapons - that convey information without inflicting injury."
        },
        {
          type: "truefalse",
          q: "Field observations show that most contests between animals of the same species end in the death of the loser.",
          answer: false,
          explain: "Observations repeatedly show that same-species contests usually end without death, often through display and restraint."
        },
        {
          type: "order",
          q: "Order a typical escalating red deer contest from first to last stage.",
          items: ["Roaring contest between the stags", "Parallel walking to compare size", "Locking antlers and pushing"],
          explain: "Stags escalate step by step, and most contests are settled before the risky antler-locking stage."
        }
      ]
    },
    {
      id: "l28",
      title: "Group-selection explanations rejected",
      intro: "Before 1973 many biologists explained restraint as being 'for the good of the species', but that logic breaks down.",
      questions: [
        {
          type: "mcq",
          q: "Which earlier view did Maynard Smith and Price argue against?",
          choices: ["That animals never fight at all", "That genes are the unit of selection", "That restraint evolves 'for the good of the species'", "That mutations are always harmful"],
          answer: 2,
          explain: "The paper rejected the popular idea that animals restrain themselves for the benefit of their species."
        },
        {
          type: "truefalse",
          q: "'Good of the species' reasoning is a form of group-selection thinking.",
          answer: true,
          explain: "It assumes traits spread because they help the group or species, rather than the individual carrying them."
        },
        {
          type: "fill",
          q: "A ruthless mutant that fought without restraint could ____ a population of restrained individuals, undermining group-benefit explanations.",
          answer: "invade",
          accept: ["invade"],
          explain: "Because the ruthless mutant would out-reproduce restrained rivals, restraint 'for the group' is not stable against invasion."
        },
        {
          type: "mcq",
          q: "Why does 'restraint for the good of the species' fail as an evolutionary explanation?",
          choices: ["A selfish, ruthless mutant would spread at the expense of restrained individuals", "Species can consciously agree on rules of combat", "Restraint has no effect on survival either way", "Group selection is always stronger than individual selection"],
          answer: 0,
          explain: "Natural selection acts on individuals; a mutant that exploits others' restraint gains an advantage and spreads."
        },
        {
          type: "match",
          q: "Match each figure to their relevant view or contribution.",
          pairs: [["Konrad Lorenz", "Popularized 'for the good of the species' views of animal aggression"], ["V. C. Wynne-Edwards", "Argued for group selection in animal behaviour"], ["George C. Williams", "Criticized group selection and stressed individual selection"]],
          explain: "Maynard Smith and Price sided with the individual-selection critique of group-selectionist thinking."
        },
        {
          type: "truefalse",
          q: "Maynard Smith and Price accepted that natural selection usually acts for the benefit of the species as a whole.",
          answer: false,
          explain: "They rejected species-benefit reasoning and looked for explanations grounded in individual advantage."
        },
        {
          type: "order",
          q: "Order the logical steps that show why group-benefit restraint is unstable.",
          items: ["A population is full of restrained individuals", "A ruthless mutant appears", "The mutant wins more contests and leaves more offspring", "Ruthless behaviour spreads, so pure restraint is not stable"],
          explain: "This invasion argument is why 'good of the species' cannot by itself explain restraint."
        }
      ]
    },
    {
      id: "l29",
      title: "Individual-level fitness accounting",
      intro: "For restraint to evolve, it must raise the fitness of the individual practising it, not just the group.",
      questions: [
        {
          type: "mcq",
          q: "According to Maynard Smith and Price, restraint can only evolve if it...",
          choices: ["benefits the species as a whole", "increases the individual's own expected fitness", "is agreed upon by the whole population", "has no cost or benefit at all"],
          answer: 1,
          explain: "Selection favours traits that raise the bearer's own reproductive success, so restraint must pay the individual."
        },
        {
          type: "truefalse",
          q: "Escalated fighting carries costs such as injury, wasted energy and lost time.",
          answer: true,
          explain: "These costs can outweigh the benefit of winning, making restraint pay off for the individual."
        },
        {
          type: "fill",
          q: "Payoffs in the model are measured in terms of ____, an individual's expected reproductive success.",
          answer: "fitness",
          accept: ["fitness"],
          explain: "Game-theory payoffs for animals are translated into fitness, the currency natural selection tracks."
        },
        {
          type: "mcq",
          q: "Which factor is a COST that can make escalation a bad bet for an individual?",
          choices: ["Gaining the contested mate", "Winning the territory", "Scaring off the rival", "Risk of serious injury"],
          answer: 3,
          explain: "The risk of serious injury is a major cost that can outweigh the benefits of pressing an all-out fight."
        },
        {
          type: "match",
          q: "Match each item to whether it is a benefit or a cost of escalating a fight.",
          pairs: [["Winning the resource", "Benefit of escalating"], ["Serious injury", "Cost of escalating"], ["Time and energy wasted", "Cost of escalating"]],
          explain: "An individual should escalate only when expected benefits outweigh these expected costs."
        },
        {
          type: "truefalse",
          q: "In individual-level accounting, only the benefits of winning matter and costs can be ignored.",
          answer: false,
          explain: "Both benefits and costs enter the fitness calculation; ignoring costs would mispredict behaviour."
        },
        {
          type: "order",
          q: "Order these outcomes from best to worst for an individual in a contest.",
          items: ["Win the resource with no injury", "Win the resource but suffer minor injury", "Lose the contest after a serious injury"],
          explain: "Fitness accounting ranks outcomes by net benefit, and a serious injury can make even a contest you fought a poor result."
        }
      ]
    },
    {
      id: "l30",
      title: "Modeling conflict as a game",
      intro: "Maynard Smith and Price modelled a contest as a game in which each animal follows a strategy for when to escalate or retreat.",
      questions: [
        {
          type: "mcq",
          q: "In the model, a 'strategy' is...",
          choices: ["a single fixed move used only once", "a conscious plan the animal reasons out", "a rule specifying how to behave in each situation of the contest", "the resource being fought over"],
          answer: 2,
          explain: "A strategy is a behavioural rule - for example, when to display, escalate or retreat - not a conscious plan."
        },
        {
          type: "truefalse",
          q: "The model distinguishes 'conventional' tactics from 'dangerous' (escalated) tactics.",
          answer: true,
          explain: "Conventional tactics are safe displays, while dangerous tactics risk injuring the opponent and oneself."
        },
        {
          type: "fill",
          q: "In later shorthand, the strategy that always escalates and fights dangerously is called the ____ strategy.",
          answer: "hawk",
          accept: ["hawk"],
          explain: "Hawk always escalates; the contrasting Dove relies on display and retreats from a fight."
        },
        {
          type: "match",
          q: "Match each strategy from the 1973 paper to its behaviour.",
          pairs: [["Mouse", "Uses only conventional tactics and retreats if attacked"], ["Hawk", "Always escalates to dangerous fighting"], ["Bully", "Escalates against the meek but retreats if the rival fights back"], ["Retaliator", "Starts conventionally but escalates if the opponent does"]],
          explain: "The paper simulated named strategies including Mouse, Hawk, Bully, Retaliator and Prober-Retaliator."
        },
        {
          type: "mcq",
          q: "Which pair of options best captures the basic choice each strategy makes in a contest?",
          choices: ["Escalate or retreat", "Eat or sleep", "Migrate or stay", "Sing or be silent"],
          answer: 0,
          explain: "At its core the game is about whether to escalate to dangerous fighting or to retreat and stay conventional."
        },
        {
          type: "truefalse",
          q: "In the 1973 model the only two strategies considered were Hawk and Dove.",
          answer: false,
          explain: "The original paper simulated several strategies, including Mouse, Hawk, Bully, Retaliator and Prober-Retaliator."
        },
        {
          type: "order",
          q: "Order these strategies from most peaceful to most aggressive in a typical contest.",
          items: ["Mouse, which never escalates", "Retaliator, which escalates only if attacked", "Hawk, which always escalates"],
          explain: "Mouse never escalates, Retaliator escalates only in response, and Hawk always escalates."
        }
      ]
    },
    {
      id: "l31",
      title: "Computer simulations of contests",
      intro: "To test which strategies win, Maynard Smith and Price ran computer simulations of many contests.",
      questions: [
        {
          type: "mcq",
          q: "How did Maynard Smith and Price test their strategies?",
          choices: ["By interviewing zookeepers", "By running computer simulations of contests", "By fighting the animals themselves", "By solving one simple equation by hand"],
          answer: 1,
          explain: "They used computer simulations to pit strategies against each other over many simulated contests and tally payoffs."
        },
        {
          type: "truefalse",
          q: "In the simulations, each strategy accumulated a score based on the payoffs from many contests.",
          answer: true,
          explain: "Payoffs for winning, injury and wasted time were summed so strategies could be compared by total score."
        },
        {
          type: "fill",
          q: "In the original simulations, the ____ strategy performed best and was nearly evolutionarily stable.",
          answer: "retaliator",
          accept: ["retaliator"],
          explain: "Retaliator - conventional until attacked, then escalating - did best and was close to an evolutionarily stable strategy."
        },
        {
          type: "mcq",
          q: "Which of these did the simulation payoffs account for?",
          choices: ["The animal's fur colour", "The observer's opinion", "Gains from winning and costs of injury and wasted time", "The phase of the moon"],
          answer: 2,
          explain: "Scores combined the benefit of winning with the costs of serious injury and of wasting time and energy."
        },
        {
          type: "match",
          q: "Match each simulation element to what it represented.",
          pairs: [["A contest", "One simulated fight between two strategies"], ["A payoff", "The fitness gained or lost from an outcome"], ["A strategy's score", "Its total payoff across many contests"]],
          explain: "Summing payoffs across many contests let the authors see which strategies would be favoured by selection."
        },
        {
          type: "truefalse",
          q: "The simulations found that always escalating (Hawk) was the clear best strategy.",
          answer: false,
          explain: "Pure Hawk did poorly because constant escalation led to costly injuries; Retaliator did best."
        },
        {
          type: "order",
          q: "Order the steps of the simulation methodology.",
          items: ["Define several strategies", "Pair strategies in simulated contests", "Assign payoffs for each outcome", "Sum payoffs to compare strategies"],
          explain: "This tournament-style method let the authors judge which strategy natural selection would favour."
        }
      ]
    },
    {
      id: "l32",
      title: "A new equilibrium needed",
      intro: "The results showed the field needed a new equilibrium idea: a strategy stable against invasion by mutants.",
      questions: [
        {
          type: "mcq",
          q: "What new concept did the results motivate?",
          choices: ["The food chain", "The Hardy-Weinberg law", "Natural selection itself", "The evolutionarily stable strategy (ESS)"],
          answer: 3,
          explain: "The paper's central innovation was the ESS - a strategy that cannot be invaded by any alternative once it is common."
        },
        {
          type: "truefalse",
          q: "An evolutionarily stable strategy is one that, when common, cannot be invaded by a rare mutant strategy.",
          answer: true,
          explain: "That invasion-resistance is the defining property of an ESS."
        },
        {
          type: "fill",
          q: "A strategy is evolutionarily stable if no rare ____ strategy can spread against it.",
          answer: "mutant",
          accept: ["mutant", "mutant strategy"],
          explain: "The ESS test asks whether any mutant alternative could invade a population already using the strategy."
        },
        {
          type: "mcq",
          q: "Why wasn't simply 'the best strategy against the current population' enough?",
          choices: ["Because animals cannot have strategies", "Because the population itself is made of strategies that can change, so stability against invasion matters", "Because natural selection does not act on behaviour", "Because payoffs cannot be measured"],
          answer: 1,
          explain: "Fitness depends on what everyone else is doing, so the key question is whether a strategy resists invasion, not just whether it is momentarily best."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [["Evolutionarily stable strategy", "A strategy that resists invasion by mutants"], ["Mutant strategy", "A rare alternative that might try to invade"], ["Frequency dependence", "Payoffs depend on what other individuals do"]],
          explain: "These ideas together set up the formal ESS concept developed from the 1973 paper onward."
        },
        {
          type: "truefalse",
          q: "The concept of an evolutionarily stable strategy requires animals to consciously calculate their best move.",
          answer: false,
          explain: "An ESS is maintained by natural selection acting over generations, not by any conscious calculation."
        },
        {
          type: "order",
          q: "Order the development from puzzle to solution across this unit.",
          items: ["Animals show puzzling restraint in fights", "Group-benefit explanations are rejected", "Conflict is modelled as a game and simulated", "A stable-strategy concept (ESS) is proposed"],
          explain: "This arc - from puzzle to ESS - is exactly what the 1973 paper accomplished and what founded the field."
        }
      ]
    }
  ]
});
