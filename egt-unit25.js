window.ACADEMY.addUnit("egt", {
  id: "unit-25",
  title: "Frontiers and Applications",
  color: "#3b74e0",
  icon: "🧭",
  description: "Explores cyclic dynamics, adaptive and cultural evolution, the Price equation, and how evolutionary games reach economics, language, and AI.",
  lessons: [
    {
      id: "l193",
      title: "Rock-paper-scissors dynamics",
      intro: "Rock-paper-scissors is the classic game whose intransitive cycle leaves no strategy safe and no evolutionarily stable strategy.",
      questions: [
        {
          type: "mcq",
          q: "In rock-paper-scissors, which statement best describes the three strategies?",
          choices: [
            "Each strategy beats one rival and loses to another, forming a cycle",
            "One strategy dominates all the others",
            "All strategies are equally likely to win every single match",
            "Two strategies tie and the third always wins"
          ],
          answer: 0,
          explain: "RPS is intransitive: rock beats scissors, scissors beats paper, and paper beats rock, so no single strategy is best."
        },
        {
          type: "truefalse",
          q: "A rock-paper-scissors game has a strict evolutionarily stable strategy (ESS) in pure strategies.",
          answer: false,
          explain: "No pure strategy resists invasion, since each one can be beaten by another, so RPS has no ESS."
        },
        {
          type: "fill",
          q: "Because RPS strategies cannot be ranked from best to worst, its competitive structure is called ____.",
          answer: "intransitive",
          accept: ["intransitive", "intransitivity"],
          explain: "Intransitivity means A beats B and B beats C, yet C beats A, so no linear ranking exists."
        },
        {
          type: "mcq",
          q: "In the standard zero-sum replicator dynamics of RPS, the trajectories around the interior equilibrium tend to...",
          choices: [
            "collapse immediately to a single strategy",
            "form closed cycles of neutral oscillation",
            "always spiral inward to the center",
            "leave the strategy simplex entirely"
          ],
          answer: 1,
          explain: "In the symmetric zero-sum version the point (1/3, 1/3, 1/3) is neutrally stable and orbits form closed loops that cycle forever."
        },
        {
          type: "order",
          q: "Put one full winning cycle of rock-paper-scissors in order, each item beating the next.",
          items: ["Rock beats scissors", "Scissors beats paper", "Paper beats rock"],
          explain: "The cycle closes on itself, rock over scissors over paper over rock, the signature of an intransitive game."
        },
        {
          type: "match",
          q: "Match each rock-paper-scissors concept to its meaning.",
          pairs: [
            ["Intransitivity", "No strategy can be ranked strictly best"],
            ["No ESS", "No strategy resists invasion by all others"],
            ["Interior equilibrium", "Mixed state using all three strategies equally"],
            ["Cyclic dynamics", "Strategy frequencies oscillate over time"]
          ],
          explain: "RPS is the textbook case of a game with cyclic dynamics and no evolutionarily stable strategy."
        },
        {
          type: "truefalse",
          q: "Changing the payoffs of an RPS game can turn the neutral cycles into an inward spiral toward the center or an outward spiral toward the boundary.",
          answer: true,
          explain: "When the game is no longer exactly zero-sum, the interior point can become a stable spiral or a repeller with heteroclinic cycling along the edges."
        }
      ]
    },
    {
      id: "l194",
      title: "The side-blotched lizard",
      intro: "Uta stansburiana shows a real rock-paper-scissors cycle among three male mating morphs discovered by Sinervo and Lively.",
      questions: [
        {
          type: "mcq",
          q: "Which researchers described the rock-paper-scissors mating system in the side-blotched lizard?",
          choices: [
            "John Maynard Smith and George Price",
            "Martin Nowak and Karl Sigmund",
            "Barry Sinervo and Curtis Lively",
            "Robert Axelrod and William Hamilton"
          ],
          answer: 2,
          explain: "Sinervo and Lively published the finding in Nature in 1996, showing three male morphs cycling like rock-paper-scissors."
        },
        {
          type: "fill",
          q: "The three male morphs of Uta stansburiana are distinguished by their ____ color.",
          answer: "throat",
          accept: ["throat"],
          explain: "Males come in orange-, blue-, and yellow-throated morphs, each following a different mating strategy."
        },
        {
          type: "match",
          q: "Match each throat morph to its mating strategy.",
          pairs: [
            ["Orange", "Aggressive, holds a large territory with many females"],
            ["Blue", "Guards a single female closely (mate-guarding)"],
            ["Yellow", "Sneaker that mimics females to steal matings"]
          ],
          explain: "The three morphs use ultra-dominant, mate-guarding, and female-mimicking sneaker tactics respectively."
        },
        {
          type: "order",
          q: "Put the lizard rock-paper-scissors cycle in order, each morph beating the next.",
          items: ["Orange beats blue", "Blue beats yellow", "Yellow beats orange"],
          explain: "Aggressive orange overpowers mate-guarding blue, vigilant blue detects yellow sneakers, and sneaky yellow cuckolds wide-ranging orange, a closed cycle."
        },
        {
          type: "truefalse",
          q: "The frequencies of the three lizard morphs stay perfectly constant from one year to the next.",
          answer: false,
          explain: "The morph frequencies oscillate over roughly a six-year cycle, exactly as an intransitive rock-paper-scissors dynamic predicts."
        },
        {
          type: "mcq",
          q: "Why does the yellow sneaker morph beat the orange morph?",
          choices: [
            "Yellow males are larger and win direct fights",
            "Orange males cannot defend their large territories against female-mimicking sneakers",
            "Yellow males guard females more closely than orange do",
            "Orange males refuse to mate at all"
          ],
          answer: 1,
          explain: "Orange males hold territories too big to police, so female-mimicking yellow males slip in and steal matings, letting yellow beat orange."
        },
        {
          type: "truefalse",
          q: "The side-blotched lizard is a real-world biological example of an intransitive game with no evolutionarily stable strategy.",
          answer: true,
          explain: "Because each morph is beaten by another in a cycle, no single strategy is uninvadable, making it a living rock-paper-scissors system."
        }
      ]
    },
    {
      id: "l195",
      title: "Adaptive dynamics",
      intro: "Adaptive dynamics tracks how a continuous trait evolves under frequency-dependent selection and can even split one lineage into two.",
      questions: [
        {
          type: "mcq",
          q: "Adaptive dynamics is a framework for studying the evolution of...",
          choices: [
            "discrete strategies with no mutation",
            "genes with fixed, frequency-independent fitness",
            "purely random genetic drift",
            "continuous traits under frequency-dependent selection"
          ],
          answer: 3,
          explain: "Adaptive dynamics models how continuous traits, such as body size or resource use, evolve when fitness depends on the population's trait distribution."
        },
        {
          type: "fill",
          q: "The fitness of a rare mutant introduced into a resident population is called its ____ fitness.",
          answer: "invasion",
          accept: ["invasion", "invasion fitness"],
          explain: "Invasion fitness measures whether a rare mutant can spread, and its sign sets the direction of evolution."
        },
        {
          type: "truefalse",
          q: "In adaptive dynamics, evolution is pictured as a series of small mutant substitutions climbing the local selection gradient.",
          answer: true,
          explain: "The trait moves in small steps in the direction that increases invasion fitness, following the selection gradient toward singular strategies."
        },
        {
          type: "mcq",
          q: "What is a singular strategy in adaptive dynamics?",
          choices: [
            "A trait value where the local selection gradient is zero",
            "A trait that can never be invaded by anything",
            "A strategy used by only one individual",
            "The largest possible value of the trait"
          ],
          answer: 0,
          explain: "At a singular strategy the local selection gradient vanishes, and its further behavior depends on the stability properties evaluated there."
        },
        {
          type: "truefalse",
          q: "Evolutionary branching happens when a population reaches a singular point where selection becomes disruptive, splitting one lineage into two.",
          answer: true,
          explain: "A branching point is convergence stable (attracting) but not evolutionarily stable, so disruptive selection splits the population into two divergent morphs."
        },
        {
          type: "match",
          q: "Match each adaptive-dynamics term to its meaning.",
          pairs: [
            ["Invasion fitness", "Growth rate of a rare mutant among residents"],
            ["Selection gradient", "Slope of invasion fitness in trait space"],
            ["Singular strategy", "Trait value where the gradient is zero"],
            ["Branching point", "Singular point where selection turns disruptive"]
          ],
          explain: "These tools let one trace continuous-trait evolution and predict when a lineage will diversify."
        },
        {
          type: "order",
          q: "Put the adaptive-dynamics account of diversification in order.",
          items: [
            "A rare mutant appears near the resident trait",
            "Its invasion fitness sign sets the direction of change",
            "The trait climbs the gradient to a singular point",
            "Disruptive selection splits the lineage in two"
          ],
          explain: "Mutation, invasion, convergence, and branching are how adaptive dynamics can generate two morphs from one."
        }
      ]
    },
    {
      id: "l196",
      title: "Convergence stability",
      intro: "A strategy that gradual evolution actually reaches must be convergence stable, which is a separate property from being an uninvadable ESS.",
      questions: [
        {
          type: "mcq",
          q: "A strategy is convergence stable if...",
          choices: [
            "it can never be invaded by any mutant",
            "nearby populations gradually evolve toward it",
            "it maximizes total population size",
            "it is used by exactly half the population"
          ],
          answer: 1,
          explain: "Convergence stability is about attraction: starting nearby, small evolutionary steps carry the trait toward the strategy."
        },
        {
          type: "truefalse",
          q: "Being an ESS (uninvadable) automatically guarantees that gradual evolution will reach that strategy.",
          answer: false,
          explain: "An ESS can be uninvadable yet not convergence stable, a Garden-of-Eden state that evolution moves away from rather than toward."
        },
        {
          type: "fill",
          q: "A singular strategy that is both convergence stable and evolutionarily stable is called a ____ stable strategy (CSS).",
          answer: "continuously",
          accept: ["continuously", "continuously stable"],
          explain: "Eshel's continuously stable strategy (CSS) combines attraction (convergence stability) with uninvadability (ESS)."
        },
        {
          type: "match",
          q: "Match each stability property to its meaning.",
          pairs: [
            ["Evolutionary stability", "The strategy cannot be invaded once common"],
            ["Convergence stability", "Gradual evolution approaches the strategy"],
            ["CSS", "Both convergence stable and evolutionarily stable"],
            ["Branching point", "Convergence stable but not evolutionarily stable"]
          ],
          explain: "ESS and convergence stability are logically independent; a CSS has both, while a branching point has attraction without uninvadability."
        },
        {
          type: "truefalse",
          q: "A branching point is convergence stable but not evolutionarily stable.",
          answer: true,
          explain: "Evolution converges to a branching point, but there selection is disruptive, so it is not an ESS and the lineage splits."
        },
        {
          type: "mcq",
          q: "Who introduced the concept of a continuously stable strategy?",
          choices: [
            "John Nash",
            "George Price",
            "Ilan Eshel",
            "Ronald Fisher"
          ],
          answer: 2,
          explain: "Ilan Eshel introduced the continuously stable strategy in 1983, distinguishing convergence stability from evolutionary stability."
        },
        {
          type: "order",
          q: "Order the steps for classifying a singular strategy.",
          items: [
            "Locate the singular strategy where the gradient is zero",
            "Check convergence stability: does evolution approach it?",
            "Check evolutionary stability: is it uninvadable?",
            "Combine the two results to classify it (CSS, branching point, or repeller)"
          ],
          explain: "A singular point is classified by testing convergence stability and evolutionary stability separately, then combining the two verdicts."
        }
      ]
    },
    {
      id: "l197",
      title: "The Price equation",
      intro: "George Price's equation is an exact identity that splits evolutionary change into a selection term and a transmission term for any system whatsoever.",
      questions: [
        {
          type: "mcq",
          q: "Who derived the Price equation?",
          choices: [
            "George R. Price",
            "John Maynard Smith",
            "W. D. Hamilton",
            "Sewall Wright"
          ],
          answer: 0,
          explain: "George Price published his covariance selection equation in 1970, giving a general accounting of evolutionary change."
        },
        {
          type: "truefalse",
          q: "The Price equation is a mathematical identity that holds for any system with selection and inheritance, regardless of the genetic details.",
          answer: true,
          explain: "It is an exact accounting identity that makes no assumptions about genetics; it simply partitions change into selection and transmission parts."
        },
        {
          type: "fill",
          q: "In the Price equation, the selection component is expressed as the ____ between fitness and the trait value.",
          answer: "covariance",
          accept: ["covariance", "co-variance"],
          explain: "The term Cov(w, z) captures selection: traits associated with higher fitness increase in frequency."
        },
        {
          type: "match",
          q: "Match each part of the Price equation to what it represents.",
          pairs: [
            ["Covariance term", "Selection: association of the trait with fitness"],
            ["Expectation term", "Transmission bias between parents and offspring"],
            ["Total change", "Overall change in the mean trait"]
          ],
          explain: "The Price equation splits change in a mean trait into a selection part (covariance) and a transmission part (fitness-weighted expectation of change)."
        },
        {
          type: "mcq",
          q: "The transmission (expectation) term of the Price equation captures...",
          choices: [
            "random sampling error only",
            "systematic differences between parents and their offspring",
            "the number of species in an ecosystem",
            "the covariance of two unrelated traits"
          ],
          answer: 1,
          explain: "The E(w times delta-z) term measures transmission bias, such as mutation or imperfect inheritance, by which offspring trait values differ from their parents'."
        },
        {
          type: "truefalse",
          q: "The Price equation can be applied recursively to derive results in multilevel (group) selection and kin selection, including Hamilton's rule.",
          answer: true,
          explain: "Expanding the covariance term across levels yields multilevel selection partitions, and the same framework produces Hamilton's rule for kin selection."
        },
        {
          type: "order",
          q: "Order the Price equation's logic for one generation of change.",
          items: [
            "Measure each type's trait value and fitness",
            "Compute the covariance of fitness and trait (selection)",
            "Add the fitness-weighted transmission change (bias)",
            "Obtain the total change in the mean trait"
          ],
          explain: "Selection (covariance) plus transmission (expectation) sum to the full change in the mean trait, which is the structure of the Price equation."
        }
      ]
    },
    {
      id: "l198",
      title: "Replicator-mutator and language",
      intro: "The replicator-mutator equation adds a learning matrix to replicator dynamics, and Nowak used it to explain how a shared grammar can evolve.",
      questions: [
        {
          type: "mcq",
          q: "The replicator-mutator equation extends the replicator dynamics by adding...",
          choices: [
            "a mutation or learning matrix that lets one type produce another",
            "a term that removes all mutation",
            "an assumption of infinite fitness",
            "a fixed limit of exactly two strategies"
          ],
          answer: 0,
          explain: "A mutation matrix Q gives the probability that a parent of one type produces, or is learned as, another type, coupling reproduction with imperfect transmission."
        },
        {
          type: "mcq",
          q: "Martin Nowak and colleagues applied the replicator-mutator equation to the evolution of...",
          choices: [
            "predator-prey cycles",
            "antibiotic resistance only",
            "language and universal grammar",
            "planetary orbits"
          ],
          answer: 2,
          explain: "Nowak, Komarova, and Niyogi used it around 2001 to model how grammars spread and how learning fidelity shapes the emergence of a shared language."
        },
        {
          type: "fill",
          q: "In Nowak's language model, the mutation matrix represents the fidelity of ____ - how accurately a child acquires a parent's grammar.",
          answer: "learning",
          accept: ["learning", "language learning"],
          explain: "Q captures the chance that a learner exposed to one grammar ends up using another, so the matrix encodes learning accuracy."
        },
        {
          type: "truefalse",
          q: "Nowak's model predicts a coherence threshold: if learning fidelity is too low, a population cannot maintain a common language.",
          answer: true,
          explain: "Below a critical learning accuracy, grammars fail to be transmitted reliably and linguistic coherence collapses; above it, one shared grammar can dominate."
        },
        {
          type: "match",
          q: "Match each element of the language model to its role.",
          pairs: [
            ["Grammar", "A strategy or type in the population"],
            ["Payoff", "Communicative success between two grammars"],
            ["Mutation matrix Q", "Fidelity of learning a grammar from others"],
            ["Coherence threshold", "Minimum learning accuracy for a shared language"]
          ],
          explain: "These pieces turn language acquisition into a replicator-mutator dynamic over competing grammars."
        },
        {
          type: "truefalse",
          q: "The quasispecies equation from molecular evolution is a special case of the replicator-mutator equation.",
          answer: true,
          explain: "With constant, frequency-independent fitness the replicator-mutator equation reduces to Eigen's quasispecies equation, unifying the two frameworks."
        },
        {
          type: "order",
          q: "Order how a shared language emerges in the replicator-mutator model.",
          items: [
            "Individuals use several competing grammars",
            "Communicative success gives each grammar a payoff",
            "Children learn grammars with some fidelity Q",
            "If fidelity exceeds the threshold, one grammar comes to dominate"
          ],
          explain: "Selection on communication plus sufficiently accurate learning drives the population toward a coherent shared grammar."
        }
      ]
    },
    {
      id: "l199",
      title: "Cultural evolution and imitation",
      intro: "Ideas spread by imitation, and under payoff-biased copying rules cultural change obeys the very same replicator dynamics as biological evolution.",
      questions: [
        {
          type: "mcq",
          q: "In cultural evolution, the main way successful behaviors spread is through...",
          choices: [
            "genetic inheritance only",
            "social learning and imitation",
            "random mutation of DNA",
            "physical migration alone"
          ],
          answer: 1,
          explain: "Cultural traits pass between individuals by imitation and teaching rather than genes, so they can spread within a single generation."
        },
        {
          type: "truefalse",
          q: "Under suitable imitation rules, such as copying better-performing individuals in proportion to their success, cultural dynamics can reproduce the replicator equation.",
          answer: true,
          explain: "Schlag's proportional imitation and similar payoff-biased copying rules yield the replicator dynamics, so one equation describes cultural and biological change."
        },
        {
          type: "fill",
          q: "Richard Dawkins coined the term ____ for a unit of culture that is copied from mind to mind.",
          answer: "meme",
          accept: ["meme", "memes"],
          explain: "In The Selfish Gene (1976) Dawkins introduced the meme as a cultural replicator analogous to the gene."
        },
        {
          type: "match",
          q: "Match each cultural-transmission concept to its meaning.",
          pairs: [
            ["Payoff-biased transmission", "Copying whoever appears more successful"],
            ["Conformist transmission", "Copying whatever behavior is most common"],
            ["Meme", "A unit of culture spread by imitation"],
            ["Proportional imitation", "Switching to a better strategy with probability tied to the payoff gap"]
          ],
          explain: "Different copying biases produce different dynamics; payoff-biased proportional imitation maps onto the replicator equation."
        },
        {
          type: "mcq",
          q: "Which pair of researchers is best known for foundational mathematical models of gene-culture coevolution?",
          choices: [
            "Robert Boyd and Peter Richerson",
            "James Watson and Francis Crick",
            "Barry Sinervo and Curtis Lively",
            "John Nash and Lloyd Shapley"
          ],
          answer: 0,
          explain: "Boyd and Richerson's Culture and the Evolutionary Process (1985), alongside Cavalli-Sforza and Feldman, built the modern theory of cultural evolution."
        },
        {
          type: "truefalse",
          q: "Because imitation can copy strategies faster than genetic reproduction, cultural replicator dynamics can operate within a single generation of people.",
          answer: true,
          explain: "Social learning transmits behaviors between living individuals, so cultural change need not wait for births and deaths."
        },
        {
          type: "order",
          q: "Order the steps by which a better strategy spreads through proportional imitation.",
          items: [
            "An individual observes another's strategy and payoff",
            "They compare it with their own payoff",
            "They switch with probability rising in the payoff difference",
            "Successful strategies grow in frequency like a replicator"
          ],
          explain: "Proportional imitation makes higher-payoff strategies spread at a rate proportional to their success, exactly the replicator equation."
        }
      ]
    },
    {
      id: "l200",
      title: "Economics, politics, and AI",
      intro: "Evolutionary games reach beyond biology to explain market conventions, political norms, and the learning dynamics of multi-agent AI systems.",
      questions: [
        {
          type: "mcq",
          q: "Evolutionary game theory is useful in economics mainly because it replaces the assumption of...",
          choices: [
            "perfectly rational, all-knowing agents with boundedly rational agents who learn and adapt",
            "money with barter",
            "competition with monopoly",
            "supply with demand"
          ],
          answer: 0,
          explain: "Instead of perfect rationality, EGT models agents who adjust strategies over time through learning and imitation, converging toward equilibria or cycling."
        },
        {
          type: "truefalse",
          q: "Evolutionary models have been used to explain how social conventions become established, such as which side of the road to drive on.",
          answer: true,
          explain: "Young (1993) and Kandori, Mailath, and Rob (1993) showed how stochastic evolutionary dynamics select conventions and equilibria among adapting agents."
        },
        {
          type: "fill",
          q: "In multi-agent AI, certain reinforcement-learning update rules have been shown to approximate the ____ dynamics of evolutionary game theory.",
          answer: "replicator",
          accept: ["replicator"],
          explain: "Borgers and Sarin (1997) proved that Cross's reinforcement learning converges, in the continuous-time limit, to the replicator equation, linking learning to EGT."
        },
        {
          type: "match",
          q: "Match each field to an evolutionary-game application.",
          pairs: [
            ["Economics", "Emergence of conventions and boundedly rational market behavior"],
            ["Politics", "Spread of cooperation, norms, and voting behavior"],
            ["Multi-agent AI", "Learning dynamics and self-play analyzed as replicator dynamics"]
          ],
          explain: "The same frequency-dependent selection logic describes markets, political behavior, and populations of learning algorithms."
        },
        {
          type: "mcq",
          q: "Empirical game-theoretic analysis (used to study AI agents such as game-playing systems) works by...",
          choices: [
            "assuming every agent is perfectly rational",
            "estimating a game's payoffs from simulated matches, then analyzing its dynamics",
            "ignoring strategy interactions entirely",
            "solving the game by hand with pencil and paper"
          ],
          answer: 1,
          explain: "EGTA builds an empirical payoff matrix from simulated or played games and then applies evolutionary tools such as replicator dynamics to understand strategies."
        },
        {
          type: "truefalse",
          q: "Self-play training methods used in modern game-playing AI have no connection to evolutionary game theory's ideas of populations competing and adapting.",
          answer: false,
          explain: "Self-play and population-based training borrow evolutionary ideas directly: strategies compete, the strongest are reinforced, and dynamics resemble selection processes."
        },
        {
          type: "order",
          q: "Order the workflow of an empirical game-theoretic analysis of AI agents.",
          items: [
            "Define a set of candidate agent strategies",
            "Simulate many matches to estimate payoffs",
            "Assemble the empirical payoff matrix",
            "Apply replicator dynamics to study which strategies persist"
          ],
          explain: "EGTA turns messy multi-agent interactions into a tractable game and analyzes it with evolutionary-dynamics tools."
        }
      ]
    }
  ]
});
