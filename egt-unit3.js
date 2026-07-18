window.ACADEMY.addUnit("egt", {
  id: "unit-3",
  title: "Why Biology Needed New Rules",
  color: "#3b74e0",
  icon: "🧬",
  description: "Traces the leap from rational-choice game theory to natural selection as the force that drives populations toward equilibrium.",
  lessons: [
    {
      id: "l17",
      title: "The rationality problem",
      intro: "Classical game theory assumed players reason like rational calculators, an assumption biology cannot make about animals and genes.",
      questions: [
        {
          type: "mcq",
          q: "What did classical (von Neumann and Morgenstern) game theory assume about the players in a game?",
          choices: [
            "That they reproduce faster whenever they win",
            "That they are rational agents choosing the option that maximizes expected utility",
            "That they mutate randomly each round",
            "That they always cooperate"
          ],
          answer: 1,
          explain: "Classical game theory, founded by von Neumann and Morgenstern, models players as rational actors who calculate and pick the utility-maximizing choice."
        },
        {
          type: "truefalse",
          q: "A gene can deliberate over its options and consciously choose the strategy with the highest payoff.",
          answer: false,
          explain: "Genes have no minds and cannot deliberate or choose. This is exactly why the rationality assumption of classical game theory fails in biology."
        },
        {
          type: "fill",
          q: "Classical game theory assumes each player is perfectly ____, always selecting the choice that maximizes its own payoff.",
          answer: "rational",
          accept: ["rational", "rationality"],
          explain: "The rationality assumption holds that players compute and pick optimal responses, something animals and genes cannot literally do."
        },
        {
          type: "mcq",
          q: "Why can't the rationality assumption be applied directly to most organisms?",
          choices: [
            "Because animals and genes do not calculate optimal strategies in their heads",
            "Because organisms always behave randomly",
            "Because payoffs do not exist in nature",
            "Because evolution has no equilibria"
          ],
          answer: 0,
          explain: "Insects, plants, and genes have no capacity for the conscious cost-benefit reasoning that rationality requires, so a different mechanism is needed."
        },
        {
          type: "match",
          q: "Match each idea to whether it fits classical game theory or biological reality.",
          pairs: [
            ["Player maximizes expected utility", "Classical game theory assumption"],
            ["A gene has no brain to compute payoffs", "Biological reality"],
            ["The best response is consciously chosen", "Classical game theory assumption"],
            ["Behavior arises without deliberation", "Biological reality"]
          ],
          explain: "Classical theory presumes deliberate optimization, but real organisms and genes often lack any means to deliberate at all."
        },
        {
          type: "truefalse",
          q: "The gap between rational-choice assumptions and mindless biology is what motivated a new foundation for game theory in biology.",
          answer: true,
          explain: "Because animals and genes cannot reason, biologists needed a non-rational force to reach equilibrium, which prompted evolutionary game theory."
        },
        {
          type: "order",
          q: "Order these steps from the classical premise to the biological problem it creates.",
          items: [
            "Classical game theory assumes rational players",
            "Rational players calculate the utility-maximizing choice",
            "Animals and genes cannot perform such calculations",
            "A different equilibrating mechanism is needed for biology"
          ],
          explain: "The logic runs from the rationality assumption to the recognition that mindless biological agents break it, demanding a new approach."
        }
      ]
    },
    {
      id: "l18",
      title: "Payoffs become fitness",
      intro: "In evolutionary game theory the payoff is not happiness or money but Darwinian fitness: the expected number of surviving, reproducing offspring.",
      questions: [
        {
          type: "mcq",
          q: "In evolutionary game theory, what does a strategy's 'payoff' represent?",
          choices: [
            "The player's subjective satisfaction",
            "The amount of money won",
            "Darwinian fitness, measured as reproductive success",
            "The player's social status"
          ],
          answer: 2,
          explain: "Payoffs are redefined as fitness, the expected number of offspring a strategy leaves, replacing the utility of classical theory."
        },
        {
          type: "truefalse",
          q: "In evolutionary game theory, subjective utility is replaced by reproductive success as the currency of payoffs.",
          answer: true,
          explain: "Fitness, the expected reproductive output, is the biological payoff currency, taking the place of subjective utility."
        },
        {
          type: "fill",
          q: "The biological payoff in evolutionary game theory is measured in ____, an organism's expected number of surviving offspring.",
          answer: "fitness",
          accept: ["fitness", "reproductive success", "darwinian fitness"],
          explain: "Fitness, or reproductive success, is the payoff currency: strategies that raise it spread through the population."
        },
        {
          type: "mcq",
          q: "Why is fitness a better payoff currency than utility for modeling evolution?",
          choices: [
            "Because utility is easier to measure in the field",
            "Because fitness directly determines which strategies are passed to the next generation",
            "Because fitness is always a whole number",
            "Because utility can never be negative"
          ],
          answer: 1,
          explain: "Selection acts through reproduction, so measuring payoffs in offspring links the game directly to what actually spreads over generations."
        },
        {
          type: "match",
          q: "Match each framework to its payoff currency.",
          pairs: [
            ["Classical game theory", "Subjective utility"],
            ["Evolutionary game theory", "Reproductive fitness"],
            ["Economics of rational choice", "Preference satisfaction"],
            ["Natural selection", "Surviving offspring"]
          ],
          explain: "Classical and economic models count utility or preferences, while evolutionary models count offspring, the only thing selection can act on."
        },
        {
          type: "truefalse",
          q: "A strategy that makes an animal feel good but leaves no offspring still has a high evolutionary payoff.",
          answer: false,
          explain: "Evolutionary payoff is offspring, not feelings; a strategy that leaves no descendants has zero fitness regardless of comfort."
        },
        {
          type: "order",
          q: "Order the conceptual translation from classical to evolutionary game theory.",
          items: [
            "Classical payoff is subjective utility",
            "Biology needs a measurable, heritable currency",
            "Payoff is redefined as fitness",
            "Higher-fitness strategies leave more offspring"
          ],
          explain: "Evolutionary game theory swaps utility for fitness so that payoffs map onto reproduction, the engine of selection."
        }
      ]
    },
    {
      id: "l19",
      title: "Strategies as heritable phenotypes",
      intro: "An evolutionary strategy is a heritable behavioral phenotype specified by an organism's genes, not a decision it makes.",
      questions: [
        {
          type: "mcq",
          q: "In evolutionary game theory, what is a 'strategy'?",
          choices: [
            "A plan the animal consciously devises",
            "A heritable behavioral phenotype specified by genes",
            "A random action with no genetic basis",
            "A rule imposed by the experimenter"
          ],
          answer: 1,
          explain: "A strategy is a genetically encoded behavioral phenotype, inherited rather than chosen, so that natural selection can act on it."
        },
        {
          type: "truefalse",
          q: "For a strategy to evolve by natural selection, it must be at least partly heritable.",
          answer: true,
          explain: "Selection can only change the frequency of a trait across generations if that trait is passed from parent to offspring."
        },
        {
          type: "fill",
          q: "In evolutionary game theory a strategy is a heritable ____, a trait coded by genes rather than a conscious decision.",
          answer: "phenotype",
          accept: ["phenotype", "behavioral phenotype", "behavioural phenotype"],
          explain: "Strategies are behavioral phenotypes: gene-specified traits that offspring can inherit."
        },
        {
          type: "mcq",
          q: "What allows differences in strategy to be transmitted to the next generation?",
          choices: [
            "The organism's within-lifetime learning only",
            "The genes that code for the behavior",
            "The observer's labeling of it",
            "The local weather"
          ],
          answer: 1,
          explain: "Because strategies are gene-coded phenotypes, they are heritable and can rise or fall in frequency under selection."
        },
        {
          type: "match",
          q: "Match each term to its meaning in strategy-as-phenotype thinking.",
          pairs: [
            ["Strategy", "A heritable behavioral phenotype"],
            ["Genotype", "The genes coding the behavior"],
            ["Heritability", "Passing the trait to offspring"],
            ["Phenotype", "The expressed, observable trait"]
          ],
          explain: "Genes (the genotype) specify the behavioral phenotype, and heritability lets selection change strategy frequencies over generations."
        },
        {
          type: "truefalse",
          q: "Treating a strategy as a genetic phenotype requires that the animal understand or intend it.",
          answer: false,
          explain: "No understanding is required; the behavior is expressed from genes automatically, which is precisely why no calculation is needed."
        },
        {
          type: "order",
          q: "Order the chain that lets a strategy respond to natural selection.",
          items: [
            "Genes code a behavioral phenotype",
            "The phenotype is a heritable strategy",
            "Offspring inherit the strategy",
            "Selection changes its frequency over generations"
          ],
          explain: "Because strategies are inherited phenotypes, their frequencies can be reshaped by differential reproduction."
        }
      ]
    },
    {
      id: "l20",
      title: "Selection as the optimizer",
      intro: "Natural selection, through differential reproduction, plays the role that rational calculation plays in classical theory: it drives populations toward equilibrium.",
      questions: [
        {
          type: "mcq",
          q: "In evolutionary game theory, what takes the place of a rational calculator in finding equilibria?",
          choices: [
            "Random mutation acting alone",
            "Natural selection through differential reproduction",
            "A central planner",
            "The experimenter's choices"
          ],
          answer: 1,
          explain: "Maynard Smith and Price showed that selection, not conscious reasoning, drives strategy frequencies toward equilibrium."
        },
        {
          type: "truefalse",
          q: "Differential reproduction means strategies with higher fitness leave relatively more offspring.",
          answer: true,
          explain: "Differential reproduction is the fitness-based difference in offspring number, and it is the mechanism that shifts strategy frequencies."
        },
        {
          type: "fill",
          q: "Selection acts as the optimizer because ____ reproduction favors higher-fitness strategies, raising their frequency.",
          answer: "differential",
          accept: ["differential"],
          explain: "Differential reproduction, the unequal offspring output of different strategies, is how selection 'searches' for an equilibrium."
        },
        {
          type: "mcq",
          q: "How can a mindless process like selection reach an equilibrium that a rational player would compute?",
          choices: [
            "By copying successful strategies through reproduction until change no longer pays off",
            "By having each animal explicitly solve the game",
            "By eliminating all variation instantly",
            "By ignoring fitness differences"
          ],
          answer: 0,
          explain: "Fitter strategies out-reproduce rivals generation after generation, so the population settles where no alternative does better, an equilibrium."
        },
        {
          type: "match",
          q: "Match each classical concept to its evolutionary counterpart.",
          pairs: [
            ["Rational optimizer", "Natural selection"],
            ["Choosing the best response", "Differential reproduction"],
            ["Reaching equilibrium", "Frequencies stop changing"],
            ["Utility", "Fitness"]
          ],
          explain: "Selection substitutes for rational choice: reproduction, not reasoning, converges the population on a stable strategy mix."
        },
        {
          type: "truefalse",
          q: "For selection to act as an optimizer, every individual must consciously aim to maximize its own fitness.",
          answer: false,
          explain: "No aim is needed; those that happen to reproduce more simply become more common, which mimics optimization without any intent."
        },
        {
          type: "order",
          q: "Order how selection drives a population toward equilibrium.",
          items: [
            "Strategies differ in fitness",
            "Higher-fitness strategies leave more offspring",
            "Their frequency rises in the next generation",
            "Frequencies stabilize at an equilibrium"
          ],
          explain: "Repeated differential reproduction shifts the population until no strategy can improve its share, which defines the equilibrium."
        }
      ]
    },
    {
      id: "l21",
      title: "Population thinking",
      intro: "Evolutionary game theory adopts population thinking: what matters is the distribution of strategies across a population, not any single individual.",
      questions: [
        {
          type: "mcq",
          q: "What is the central focus of 'population thinking' in evolutionary game theory?",
          choices: [
            "The single most typical individual",
            "The frequencies of different strategies in the population",
            "One organism's lifetime plan",
            "The average size of the group"
          ],
          answer: 1,
          explain: "Population thinking tracks how common each strategy is; evolution is change in these frequencies over time."
        },
        {
          type: "truefalse",
          q: "The biologist Ernst Mayr contrasted 'population thinking' with older typological thinking.",
          answer: true,
          explain: "Mayr argued that Darwinism replaced fixed 'types' with variable populations whose members differ, shifting the focus to distributions."
        },
        {
          type: "fill",
          q: "Population thinking studies the ____ of strategies, that is, how common each one is, rather than a single representative organism.",
          answer: "frequencies",
          accept: ["frequencies", "frequency", "proportions"],
          explain: "Evolution is defined as change in strategy or gene frequencies within a population over generations."
        },
        {
          type: "mcq",
          q: "Why does evolutionary game theory track populations rather than lone individuals?",
          choices: [
            "Because individuals never vary",
            "Because selection changes the proportions of strategies across many individuals over time",
            "Because individuals cannot reproduce",
            "Because frequencies are irrelevant to fitness"
          ],
          answer: 1,
          explain: "Selection is visible as shifting proportions; a single organism's fate matters only through its contribution to those frequencies."
        },
        {
          type: "match",
          q: "Match each mode of thinking to its focus.",
          pairs: [
            ["Typological thinking", "A fixed ideal type"],
            ["Population thinking", "Variation and frequencies"],
            ["Evolution", "Change in strategy frequencies"],
            ["An individual", "One contributor to the frequencies"]
          ],
          explain: "Population thinking treats variation as real and central, measuring evolution as changing frequencies rather than a shifting type."
        },
        {
          type: "truefalse",
          q: "In population thinking, evolution is best described as a change in a single individual over its lifetime.",
          answer: false,
          explain: "Individuals do not evolve; populations do, as the relative frequencies of their strategies change across generations."
        },
        {
          type: "order",
          q: "Order these from the smallest unit up to the population-level pattern that selection reshapes.",
          items: [
            "An individual carries one strategy",
            "Many individuals form a population",
            "Strategies occur at certain frequencies",
            "Selection changes those frequencies over time"
          ],
          explain: "Population thinking builds from individuals up to the frequency distribution, which is the level at which evolution is measured."
        }
      ]
    },
    {
      id: "l22",
      title: "Frequency-dependent selection",
      intro: "Under frequency-dependent selection the fitness of a strategy changes with how common it is, which is exactly what makes evolution game-like.",
      questions: [
        {
          type: "mcq",
          q: "What defines frequency-dependent selection?",
          choices: [
            "Fitness stays fixed regardless of the population",
            "A strategy's fitness depends on how common that strategy is in the population",
            "Only the largest animal reproduces",
            "The mutation rate depends on temperature"
          ],
          answer: 1,
          explain: "Under frequency dependence, a strategy's payoff varies with its own prevalence and that of others, tying fitness to the population mix."
        },
        {
          type: "truefalse",
          q: "Frequency-dependent selection is a key reason evolution can be modeled as a game: payoffs depend on what others in the population are doing.",
          answer: true,
          explain: "When your success depends on the frequencies of other strategies, you face a strategic, game-like situation, the heart of evolutionary game theory."
        },
        {
          type: "fill",
          q: "In ____-dependent selection, a strategy's fitness rises or falls depending on how common it already is.",
          answer: "frequency",
          accept: ["frequency", "frequency-dependent"],
          explain: "Frequency-dependent selection ties a strategy's payoff to its prevalence, unlike constant-fitness selection."
        },
        {
          type: "mcq",
          q: "A strategy that does well only when rare and poorly when common is an example of what?",
          choices: [
            "Negative frequency-dependent selection",
            "Constant (frequency-independent) selection",
            "Genetic drift",
            "Mutation pressure"
          ],
          answer: 0,
          explain: "Negative frequency dependence rewards rarity, and it often maintains a stable mix of strategies (a polymorphism) in the population."
        },
        {
          type: "match",
          q: "Match each selection pattern to its behavior.",
          pairs: [
            ["Frequency-independent", "Fitness ignores how common a strategy is"],
            ["Negative frequency-dependent", "Rare strategies do better"],
            ["Positive frequency-dependent", "Common strategies do better"],
            ["Game-like payoff", "Success depends on others' strategies"]
          ],
          explain: "Frequency dependence makes fitness a function of the population's strategy mix, which is precisely a strategic game."
        },
        {
          type: "truefalse",
          q: "Under frequency-dependent selection, the best strategy is always the same no matter what the rest of the population does.",
          answer: false,
          explain: "The whole point of frequency dependence is that the best strategy shifts with the population's composition."
        },
        {
          type: "order",
          q: "Order the logic linking frequency dependence to game theory.",
          items: [
            "A strategy's fitness depends on its frequency",
            "Its fitness therefore depends on what others do",
            "Players are locked in a strategic interaction",
            "Evolution can be modeled as a game"
          ],
          explain: "Because payoffs hinge on others' strategies, the situation is a game, and game theory becomes the natural tool."
        }
      ]
    },
    {
      id: "l23",
      title: "Fisher's foreshadowing",
      intro: "In 1930 R. A. Fisher explained why sex ratios tend toward 1:1 using frequency-dependent reasoning that anticipated evolutionary game theory.",
      questions: [
        {
          type: "mcq",
          q: "In his 1930 book, what did R. A. Fisher use frequency-dependent logic to explain?",
          choices: [
            "Why populations grow exponentially",
            "Why sex ratios tend toward roughly 1:1",
            "Why mutations are random",
            "Why species eventually go extinct"
          ],
          answer: 1,
          explain: "Fisher's principle explains the near-equal sex ratio: if one sex becomes rare, parents who produce it gain a reproductive advantage."
        },
        {
          type: "truefalse",
          q: "Fisher presented his sex-ratio argument in 'The Genetical Theory of Natural Selection' in 1930.",
          answer: true,
          explain: "Fisher laid out the argument in his 1930 book, a foundational work of the modern evolutionary synthesis."
        },
        {
          type: "fill",
          q: "Fisher argued that if males become rare, parents who produce more ____ gain a fitness advantage, pushing the ratio back toward balance.",
          answer: "sons",
          accept: ["sons", "males", "male offspring"],
          explain: "When a sex is scarce, each member of it has above-average mating success, so producing that sex pays until the ratio re-balances."
        },
        {
          type: "mcq",
          q: "Why is Fisher's sex-ratio argument considered 'proto-game theory'?",
          choices: [
            "Because it uses money as the payoff",
            "Because the best strategy (which sex to produce) depends on what the rest of the population is doing",
            "Because it assumes rational, calculating parents",
            "Because it ignores fitness entirely"
          ],
          answer: 1,
          explain: "The optimal sex to produce is frequency-dependent, an implicit equilibrium argument that prefigured evolutionary game theory."
        },
        {
          type: "order",
          q: "Order Fisher's frequency-dependent sex-ratio argument.",
          items: [
            "Suppose one sex becomes rarer than the other",
            "Each member of the rarer sex has higher expected reproductive success",
            "Parents producing more of the rarer sex are favored",
            "The sex ratio is pushed back toward 1:1"
          ],
          explain: "This self-correcting feedback stabilizes the ratio near equality, an equilibrium reached without any conscious calculation."
        },
        {
          type: "truefalse",
          q: "Fisher's argument required parents to consciously calculate the population's current sex ratio.",
          answer: false,
          explain: "Selection alone produces the outcome; the balancing feedback needs no awareness, which is why it foreshadows evolutionary game theory."
        },
        {
          type: "match",
          q: "Match each element of Fisher's argument to its game-theory analogue.",
          pairs: [
            ["Which sex to produce", "The strategy"],
            ["Reproductive success", "The payoff (fitness)"],
            ["Rarer sex is favored", "Frequency-dependent payoff"],
            ["A 1:1 ratio", "The stable equilibrium"]
          ],
          explain: "Fisher's parents effectively play a strategy whose payoff depends on the population, settling at a 1:1 equilibrium, all core game-theory ideas."
        }
      ]
    },
    {
      id: "l24",
      title: "Lewontin's early application",
      intro: "In 1961 Richard Lewontin applied game theory to evolution by casting the species as a player in a game against nature, the environment.",
      questions: [
        {
          type: "mcq",
          q: "In his 1961 paper, how did Richard Lewontin apply game theory to evolution?",
          choices: [
            "As a species playing a game against nature (the environment)",
            "As individuals competing in a market",
            "As genes negotiating contracts",
            "As a purely random walk"
          ],
          answer: 0,
          explain: "Lewontin modeled the species as a player whose opponent is the environment, choosing strategies against nature's states."
        },
        {
          type: "truefalse",
          q: "Lewontin's 1961 paper 'Evolution and the Theory of Games' framed the environment, not another organism, as the opponent.",
          answer: true,
          explain: "He treated evolution as a game against nature, with the species selecting strategies against environmental conditions."
        },
        {
          type: "fill",
          q: "Lewontin's 1961 model cast the species as playing a game against ____, meaning the environment rather than a rival organism.",
          answer: "nature",
          accept: ["nature", "the environment", "environment"],
          explain: "A 'game against nature' has an indifferent environment as the opponent, distinguishing it from later organism-versus-organism games."
        },
        {
          type: "mcq",
          q: "What kind of strategy did Lewontin suggest a species would favor when playing against an unpredictable nature?",
          choices: [
            "One that maximizes short-term growth only",
            "A maximin strategy that guards against the worst outcome, extinction",
            "A strategy that ignores rare environments",
            "A strategy chosen by the single strongest individual"
          ],
          answer: 1,
          explain: "Facing an indifferent environment, Lewontin argued species tend toward maximin play, guarding against the catastrophic outcome of extinction."
        },
        {
          type: "match",
          q: "Match each thinker to how they framed evolutionary game theory.",
          pairs: [
            ["Lewontin (1961)", "Species versus nature, the environment"],
            ["Fisher (1930)", "Sex-ratio equilibrium, proto-game theory"],
            ["Maynard Smith and Price (1973)", "Individual versus individual, the ESS"],
            ["Payoff currency", "Reproductive fitness"]
          ],
          explain: "Lewontin's opponent was the environment, while the later Maynard Smith framework made other organisms the opponents, defining the ESS."
        },
        {
          type: "truefalse",
          q: "Lewontin's 'game against nature' treats the environment as a rational opponent deliberately trying to drive the species extinct.",
          answer: false,
          explain: "Nature is indifferent, not strategic; a game against nature models an uncaring environment, not a scheming adversary."
        },
        {
          type: "order",
          q: "Order these milestones in the emergence of evolutionary game theory.",
          items: [
            "Fisher's 1930 sex-ratio argument",
            "Lewontin's 1961 game against nature",
            "Maynard Smith and Price's 1973 ESS concept",
            "Game theory becomes standard in behavioral ecology"
          ],
          explain: "The idea developed from Fisher's implicit frequency dependence, through Lewontin's game against nature, to the explicit ESS framework."
        }
      ]
    }
  ]
});
