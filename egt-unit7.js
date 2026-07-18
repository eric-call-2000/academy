window.ACADEMY.addUnit("egt", {
  id: "unit-7",
  title: "Mixed Strategies and Polymorphism",
  color: "#3b74e0",
  icon: "🎲",
  description: "Shows the two ways a mixed equilibrium can be realized in a population: individuals that randomize versus fixed fractions of pure types, and how to tell them apart.",
  lessons: [
    {
      id: "l49",
      title: "Randomizing individuals",
      intro: "In a monomorphic mixed strategy, every individual follows the same rule: play Hawk with probability p and Dove with probability 1 - p.",
      questions: [
        {
          type: "mcq",
          q: "In a monomorphic mixed-strategy population, what is true of every individual?",
          choices: [
            "Each individual plays Hawk with probability p and Dove with probability 1 - p",
            "Each individual is either a pure Hawk or a pure Dove for life",
            "Exactly half of the individuals never fight",
            "Individuals copy whatever their neighbors last did"
          ],
          answer: 0,
          explain: "Monomorphic means one type: every individual shares the identical randomizing rule, playing Hawk with the same probability p on each encounter."
        },
        {
          type: "truefalse",
          q: "In a monomorphic mixed strategy, individuals differ from one another in their behavioral program.",
          answer: false,
          explain: "They are identical. Every individual uses the same probability p; the variation is within an individual across encounters, not between individuals."
        },
        {
          type: "fill",
          q: "Playing Hawk with probability p and Dove with probability 1 - p is called a ____ strategy.",
          answer: "mixed",
          accept: ["mixed", "mixed strategy", "randomized"],
          explain: "A mixed strategy assigns probabilities to the pure actions rather than committing to a single one."
        },
        {
          type: "mcq",
          q: "If p = 0.3, over many contests a single individual will roughly...",
          choices: [
            "always play Hawk",
            "play Hawk in about 70% of contests",
            "play Hawk in about 30% of contests",
            "never play Hawk"
          ],
          answer: 2,
          explain: "The probability p = 0.3 is the long-run frequency with which that individual chooses Hawk, so about 30% of its contests."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Pure strategy", "Always take the same single action"],
            ["Mixed strategy", "Randomize actions with fixed probabilities"],
            ["p", "Probability an individual plays Hawk"]
          ],
          explain: "A pure strategy is deterministic; a mixed strategy randomizes; p names the Hawk probability."
        },
        {
          type: "truefalse",
          q: "A rule that says 'play Hawk on heads, Dove on tails' using a fair coin is a mixed strategy with p = 0.5.",
          answer: true,
          explain: "A fair coin gives each action probability one half, which is exactly a mixed strategy with p = 0.5."
        },
        {
          type: "mcq",
          q: "Where does the observed variation in behavior come from in a monomorphic mixed-strategy population?",
          choices: [
            "From genetic differences between individuals",
            "From each individual randomizing across its repeated encounters",
            "From the environment forcing specific moves",
            "There is no variation of any kind"
          ],
          answer: 1,
          explain: "Since everyone is identical, the only source of variation is the internal coin-flip each individual makes in every contest."
        }
      ]
    },
    {
      id: "l50",
      title: "Polymorphic populations",
      intro: "A polymorphism produces the same average behavior a different way: fixed fractions of pure Hawks and pure Doves, each individual committed to one action.",
      questions: [
        {
          type: "mcq",
          q: "In a polymorphic population, how is the frequency of Hawk behavior produced?",
          choices: [
            "Every individual randomizes on each contest",
            "A fixed fraction of individuals are pure Hawks and the rest are pure Doves",
            "Individuals change type with the seasons",
            "Only a single Hawk exists at any time"
          ],
          answer: 1,
          explain: "Polymorphism means several fixed types coexist: a set proportion are always Hawk, the remainder always Dove."
        },
        {
          type: "truefalse",
          q: "In a polymorphism, a single individual typically plays the same pure action in every contest.",
          answer: true,
          explain: "Each individual is a fixed pure type, so it repeats the same action; variation exists between individuals, not within one."
        },
        {
          type: "fill",
          q: "A population containing two or more distinct, fixed behavioral types is called ____.",
          answer: "polymorphic",
          accept: ["polymorphic", "a polymorphism", "polymorphism"],
          explain: "Polymorphic (many forms) describes a population made of several coexisting fixed types."
        },
        {
          type: "mcq",
          q: "If a polymorphic population is 30% pure Hawks and 70% pure Doves, the overall frequency of Hawk play is...",
          choices: [
            "0%",
            "70%",
            "50%",
            "30%"
          ],
          answer: 3,
          explain: "Because Hawks always play Hawk, the population-level Hawk frequency equals the fraction of pure Hawks, which is 30%."
        },
        {
          type: "order",
          q: "Arrange these levels of description from smallest to largest scale.",
          items: [
            "A single pure-Hawk individual",
            "The subpopulation of all Hawks",
            "The entire polymorphic population"
          ],
          explain: "One individual sits inside its type-group, which sits inside the whole mixed population."
        },
        {
          type: "match",
          q: "Match each term to its description.",
          pairs: [
            ["Pure Hawk", "Individual that always escalates"],
            ["Pure Dove", "Individual that always displays and retreats"],
            ["Polymorphism", "Population mixture of fixed pure types"]
          ],
          explain: "Pure types repeat one action; the polymorphism is the mixture of those types in fixed proportions."
        },
        {
          type: "truefalse",
          q: "In a polymorphism, behavioral variation exists between individuals rather than within a single individual.",
          answer: true,
          explain: "Each individual is consistent, so the differences show up across individuals of different fixed types."
        }
      ]
    },
    {
      id: "l51",
      title: "Genetic equivalence of the two",
      intro: "Maynard Smith noted that a monomorphic mixed strategy and the matching polymorphism generate identical payoffs at the population level.",
      questions: [
        {
          type: "mcq",
          q: "Why can a monomorphic mixed strategy and a polymorphism be equivalent?",
          choices: [
            "They only match when p equals 1",
            "They can never be equivalent",
            "They produce the same population-level frequency of each behavior and thus the same average payoffs",
            "One of them always earns strictly more"
          ],
          answer: 2,
          explain: "Both yield the same frequency of Hawk versus Dove in the population, so the mean payoffs an individual experiences are the same."
        },
        {
          type: "truefalse",
          q: "An observer who only counts how often Hawk is played cannot tell whether the population is monomorphic-mixed or polymorphic.",
          answer: true,
          explain: "The two mechanisms yield the same aggregate frequencies, so a frequency count alone cannot distinguish them."
        },
        {
          type: "fill",
          q: "Maynard Smith noted a mixed ESS can be read either as each individual randomizing or as a genetically ____ population.",
          answer: "polymorphic",
          accept: ["polymorphic", "mixed", "varied"],
          explain: "The polymorphic reading replaces one randomizing type with several fixed types in the right proportions."
        },
        {
          type: "mcq",
          q: "A population where everyone plays Hawk with p = 0.4 has the same Hawk frequency as a polymorphism with...",
          choices: [
            "4% pure Hawks",
            "40% pure Hawks",
            "60% pure Hawks",
            "100% pure Hawks"
          ],
          answer: 1,
          explain: "A Hawk probability of 0.4 per individual matches a population where 40% of individuals are pure Hawks."
        },
        {
          type: "match",
          q: "Match each label to its meaning.",
          pairs: [
            ["Monomorphic mixed", "Each individual plays Hawk with probability p"],
            ["Polymorphic", "A fraction p of individuals are pure Hawks"],
            ["Equivalence", "Same mean payoffs at the population level"]
          ],
          explain: "The two realizations differ in mechanism but converge on identical population-average payoffs."
        },
        {
          type: "truefalse",
          q: "The two interpretations give identical results at every level of detail, including individual life histories.",
          answer: false,
          explain: "They match in population-average payoffs, but individual behavior differs: a mixed individual varies over time, whereas a polymorphic individual is a fixed type."
        },
        {
          type: "mcq",
          q: "The equivalence is clearest when we compare which quantity?",
          choices: [
            "The color of each animal",
            "The average payoff across the whole population",
            "The exact move of one animal on one day",
            "The names given to the players"
          ],
          answer: 1,
          explain: "The equivalence is a statement about population-level average payoffs, not about any single individual's moment-to-moment behavior."
        }
      ]
    },
    {
      id: "l52",
      title: "Bishop-Cannings theorem",
      intro: "The Bishop-Cannings theorem (1978) states that every pure strategy in the support of a mixed ESS earns the same payoff against that ESS.",
      questions: [
        {
          type: "mcq",
          q: "What does the Bishop-Cannings theorem state about the pure strategies in the support of a mixed ESS?",
          choices: [
            "Only one of them is ever actually used",
            "They earn wildly different payoffs",
            "The first-listed strategy always wins",
            "They all earn equal payoff when played against the ESS"
          ],
          answer: 3,
          explain: "The theorem's core result: every pure strategy in the support is an equally good reply to the ESS, all earning the same payoff."
        },
        {
          type: "fill",
          q: "The set of pure strategies used with positive probability in a mixed strategy is called its ____.",
          answer: "support",
          accept: ["support"],
          explain: "The support lists exactly those pure actions that the mixed strategy plays with nonzero probability."
        },
        {
          type: "truefalse",
          q: "The Bishop-Cannings theorem was published by Bishop and Cannings in 1978.",
          answer: true,
          explain: "D. T. Bishop and Chris Cannings introduced it in their 1978 paper 'A generalized war of attrition' in the Journal of Theoretical Biology."
        },
        {
          type: "mcq",
          q: "At the mixed ESS of the Hawk-Dove game, how do the payoffs to pure Hawk and pure Dove compare?",
          choices: [
            "Hawk always earns more",
            "Dove always earns more",
            "They are equal",
            "Both earn exactly zero"
          ],
          answer: 2,
          explain: "At the equilibrium frequency the two pure types are equally fit; this equal payoff is exactly what Bishop-Cannings predicts."
        },
        {
          type: "truefalse",
          q: "Because the pure strategies in the support are equally good against the ESS, an individual gains nothing by switching among them.",
          answer: true,
          explain: "Equal payoffs mean no supported pure strategy beats the mix, so switching between them offers no advantage."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Support", "Pure strategies used with positive probability"],
            ["Bishop-Cannings", "Equal payoffs across the support"],
            ["Consequence", "No supported pure alternative can beat the mix"]
          ],
          explain: "The support defines which pure strategies participate; the theorem equalizes their payoffs, blocking invasion."
        },
        {
          type: "mcq",
          q: "Why is the equal-payoff property important for stability?",
          choices: [
            "It forces everyone to play Hawk",
            "It proves games have no equilibria",
            "It means no pure type in the support can earn more and invade the mix",
            "It makes all payoffs infinite"
          ],
          answer: 2,
          explain: "If every supported pure strategy already earns the ESS payoff, none can do strictly better, so none can invade."
        }
      ]
    },
    {
      id: "l53",
      title: "Stability of the mix",
      intro: "Negative frequency dependence stabilizes the equilibrium mix: whichever strategy becomes too common earns less and is pushed back down.",
      questions: [
        {
          type: "mcq",
          q: "What is negative frequency dependence?",
          choices: [
            "A strategy does better the more common it is",
            "A strategy does better the rarer it is",
            "Payoffs never depend on strategy frequency",
            "Rare strategies always go extinct"
          ],
          answer: 1,
          explain: "Under negative frequency dependence, being rare is an advantage, which is what pulls a population back toward balance."
        },
        {
          type: "truefalse",
          q: "In Hawk-Dove, when Hawks become too common they meet each other more often and suffer costly injuries, lowering their payoff.",
          answer: true,
          explain: "Hawk-versus-Hawk contests carry the injury cost, so a surplus of Hawks drives Hawk payoffs down."
        },
        {
          type: "fill",
          q: "When a strategy's payoff falls as it becomes more common, selection is ____ frequency-dependent.",
          answer: "negatively",
          accept: ["negatively", "negative"],
          explain: "Negative frequency dependence is the signature of a stable interior mix."
        },
        {
          type: "order",
          q: "Trace how an excess of Hawks is corrected.",
          items: [
            "Hawks rise above the equilibrium frequency",
            "Hawks meet other Hawks more often and pay injury costs",
            "Hawk payoff falls below Dove payoff",
            "Hawk frequency declines back toward equilibrium"
          ],
          explain: "The feedback loop lowers the payoff of the over-common strategy until its frequency returns to equilibrium."
        },
        {
          type: "mcq",
          q: "If Doves become too common, what happens?",
          choices: [
            "Nothing changes",
            "Doves keep increasing forever",
            "Everyone goes extinct",
            "Hawks are now rare, mostly meet Doves, earn high payoff, and increase"
          ],
          answer: 3,
          explain: "Rare Hawks in a Dove-heavy population win most contests, so they gain and rise back toward equilibrium."
        },
        {
          type: "truefalse",
          q: "Positive frequency dependence, where common strategies do best, would tend to stabilize a 50/50 mix.",
          answer: false,
          explain: "Positive frequency dependence rewards being common, so it destabilizes mixes and drives populations toward fixation on one strategy."
        },
        {
          type: "match",
          q: "Match each situation to its outcome.",
          pairs: [
            ["Negative frequency dependence", "Rare types favored, restoring the mix"],
            ["Hawks above equilibrium", "Hawk payoff drops"],
            ["Hawks below equilibrium", "Hawk payoff rises"]
          ],
          explain: "The restoring force acts in both directions, always pushing frequencies back to the equilibrium point."
        }
      ]
    },
    {
      id: "l54",
      title: "Distinguishing them empirically",
      intro: "Telling behavioral randomization from genetic polymorphism requires tracking the same identified individuals across many contests.",
      questions: [
        {
          type: "mcq",
          q: "How can you empirically distinguish a monomorphic mixed strategy from a polymorphism?",
          choices: [
            "Count the total number of animals present",
            "Measure the air temperature",
            "Track the same individuals over many contests to see whether each one varies its behavior",
            "It is impossible to tell even in principle"
          ],
          answer: 2,
          explain: "Only by following identified individuals can you see whether variation lives within each individual or between them."
        },
        {
          type: "truefalse",
          q: "Under a monomorphic mixed strategy, a single tracked individual should sometimes play Hawk and sometimes Dove.",
          answer: true,
          explain: "Each individual randomizes, so across repeated contests the same animal should show both actions."
        },
        {
          type: "truefalse",
          q: "Under a genetic polymorphism, a single tracked individual should switch frequently between Hawk and Dove.",
          answer: false,
          explain: "A polymorphic individual is a fixed pure type, so it should repeat the same action, not switch."
        },
        {
          type: "match",
          q: "Match each mechanism to its empirical signature.",
          pairs: [
            ["Monomorphic mixed", "Variation within each individual over time"],
            ["Genetic polymorphism", "Variation between individuals, each consistent"],
            ["Key observation", "Repeated contests by identified individuals"]
          ],
          explain: "The two mechanisms are separated by where the variation sits: within versus between individuals."
        },
        {
          type: "fill",
          q: "The clearest empirical signature of a polymorphism is behavioral ____ within each individual across its lifetime.",
          answer: "consistency",
          accept: ["consistency", "constancy", "fixity"],
          explain: "A fixed pure type behaves consistently, so within-individual consistency points to a polymorphism."
        },
        {
          type: "mcq",
          q: "You find that each marked lizard always uses the same tactic across dozens of encounters. This suggests...",
          choices: [
            "A monomorphic mixed strategy",
            "A genetic polymorphism of fixed types",
            "Random noise with no strategy",
            "That the animals are not playing a game"
          ],
          answer: 1,
          explain: "Individual-level consistency across many contests is the hallmark of fixed, distinct types, that is, a polymorphism."
        },
        {
          type: "truefalse",
          q: "At the population level alone the two mechanisms can look identical, which is why individual tracking is needed.",
          answer: true,
          explain: "They share the same aggregate frequencies, so only individual-level data can separate them."
        }
      ]
    },
    {
      id: "l55",
      title: "Multiple strategies in a mix",
      intro: "A mixed equilibrium can rest on a support of three or more pure strategies, all earning equal payoffs by Bishop-Cannings.",
      questions: [
        {
          type: "mcq",
          q: "Can a mixed ESS involve more than two pure strategies?",
          choices: [
            "No, only two are ever allowed",
            "Yes, the support can contain three or more pure strategies",
            "Only if all payoffs are negative",
            "Only in games with a single player"
          ],
          answer: 1,
          explain: "Nothing limits a support to two; equilibria can mix three or more pure strategies together."
        },
        {
          type: "truefalse",
          q: "By Bishop-Cannings, if three pure strategies share the support of a mixed ESS, all three earn the same payoff against it.",
          answer: true,
          explain: "The equal-payoff property applies to the whole support, however many pure strategies it contains."
        },
        {
          type: "fill",
          q: "A classic three-strategy cyclic system is ____-paper-scissors, where each type beats one and loses to another.",
          answer: "rock",
          accept: ["rock"],
          explain: "Rock-paper-scissors is the standard model for a three-way cyclic dominance structure."
        },
        {
          type: "mcq",
          q: "In a rock-paper-scissors dynamic, why is no single pure strategy stable on its own?",
          choices: [
            "Because all payoffs equal zero",
            "Because there is really only one strategy",
            "Because the game has no players",
            "Because whichever strategy is common can be invaded by the one that beats it"
          ],
          answer: 3,
          explain: "Every strategy has a predator: as one becomes common, the type that beats it gains and invades, preventing fixation."
        },
        {
          type: "order",
          q: "Order the rock-paper-scissors dominance cycle, starting from rock.",
          items: [
            "Rock beats scissors",
            "Scissors beats paper",
            "Paper beats rock"
          ],
          explain: "Each step names the winner, and the cycle closes back to rock, giving cyclic dominance."
        },
        {
          type: "match",
          q: "Match each support size to an example or property.",
          pairs: [
            ["Two-strategy support", "Hawk-Dove mixed equilibrium"],
            ["Three-strategy support", "Rock-paper-scissors type system"],
            ["Bishop-Cannings", "All supported pure types earn equal payoff"]
          ],
          explain: "Supports can be any size; the equal-payoff rule holds across all of them."
        },
        {
          type: "truefalse",
          q: "Three-strategy cyclic systems always settle to a single unchanging frequency exactly like Hawk-Dove.",
          answer: false,
          explain: "Cyclic-dominance systems often oscillate rather than settling to a static point, so their dynamics can differ from a simple stable Hawk-Dove mix."
        }
      ]
    },
    {
      id: "l56",
      title: "Interpreting real polymorphisms",
      intro: "Real foraging and mating polymorphisms are held in balance by negative frequency-dependent selection.",
      questions: [
        {
          type: "mcq",
          q: "In the producer-scrounger foraging game, why don't scroungers take over the population?",
          choices: [
            "Scroungers always find their own food",
            "Producers simply refuse to eat",
            "When scroungers are common there are too few producers to exploit, so scrounging pays less",
            "Scrounging is never profitable at all"
          ],
          answer: 2,
          explain: "Scrounging depends on producers to parasitize; as scroungers grow common the payoff drops, a negative frequency-dependent brake studied by Barnard and Sibly in house sparrows (1981)."
        },
        {
          type: "truefalse",
          q: "Side-blotched lizards (Uta stansburiana) have three male throat-color morphs whose frequencies cycle in a rock-paper-scissors pattern, as described by Sinervo and Lively in 1996.",
          answer: true,
          explain: "Sinervo and Lively (1996, Nature) documented the orange-blue-yellow male morphs cycling like rock-paper-scissors."
        },
        {
          type: "match",
          q: "Match each real system to its type.",
          pairs: [
            ["Producer-scrounger", "Foraging tactic polymorphism"],
            ["Side-blotched lizard morphs", "Mating tactic polymorphism"],
            ["Scale-eating cichlid", "Left- versus right-mouthed foraging morphs"]
          ],
          explain: "Frequency-dependent selection maintains tactic mixtures in both foraging (cichlids, producer-scrounger) and mating (lizards) contexts."
        },
        {
          type: "fill",
          q: "In Hori's 1993 study, scale-eating cichlids come in left-mouthed and ____-mouthed forms held near a 1:1 ratio by frequency-dependent selection.",
          answer: "right",
          accept: ["right", "right-mouthed"],
          explain: "Hori (1993, Science) showed the rarer mouth form gains an attacking advantage, keeping left and right morphs near equal frequency."
        },
        {
          type: "mcq",
          q: "The three male morphs of the side-blotched lizard are usually described by which throat colors?",
          choices: [
            "Orange, blue, and yellow",
            "Red, green, and black",
            "White, brown, and grey",
            "Pink, purple, and gold"
          ],
          answer: 0,
          explain: "Orange males are aggressive territory-holders, blue males guard single mates, and yellow males are sneakers that mimic females."
        },
        {
          type: "truefalse",
          q: "These real polymorphisms are held in balance because each tactic does best when it is rare, an example of negative frequency-dependent selection.",
          answer: true,
          explain: "In each system the rare tactic gains an edge, which prevents any one form from taking over and sustains the mixture."
        },
        {
          type: "order",
          q: "Trace the rock-paper-scissors cycle of side-blotched lizard morphs.",
          items: [
            "Orange (aggressive) outcompetes blue (mate-guarders)",
            "Blue (mate-guarders) outcompetes yellow (sneakers)",
            "Yellow (sneakers) outcompetes orange (aggressive)"
          ],
          explain: "Aggressive orange overpowers guarding blue, cooperative blue detects sneaky yellow, and yellow sneakers exploit orange's large territories, closing the cycle."
        }
      ]
    }
  ]
});
