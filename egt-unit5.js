window.ACADEMY.addUnit("egt", {
  "id": "unit-5",
  "title": "The Evolutionarily Stable Strategy",
  "color": "#3b74e0",
  "icon": "🛡️",
  "description": "This unit defines the evolutionarily stable strategy (ESS), the central invasion-proof equilibrium concept of evolutionary game theory.",
  "lessons": [
    {
      "id": "l33",
      "title": "The ESS intuition",
      "intro": "An evolutionarily stable strategy is a behavior that, once common in a population, cannot be displaced by any rare alternative.",
      "questions": [
        {
          "type": "mcq",
          "q": "What is the core idea captured by an evolutionarily stable strategy (ESS)?",
          "choices": [
            "A strategy that, once adopted by nearly everyone, resists invasion by rare mutant strategies",
            "A strategy that maximizes total population size regardless of individual payoff",
            "A strategy chosen by a central planner to benefit the group",
            "A strategy that changes every generation to stay unpredictable"
          ],
          "answer": 0,
          "explain": "An ESS is defined by its resistance to invasion: if it is common, no rare alternative can spread against it."
        },
        {
          "type": "truefalse",
          "q": "An ESS must be resistant to invasion by rare alternative (mutant) strategies.",
          "answer": true,
          "explain": "Uninvadability by rare mutants is the defining property of an ESS."
        },
        {
          "type": "fill",
          "q": "A strategy that cannot be displaced by rare alternatives is said to be evolutionarily ____.",
          "answer": "stable",
          "accept": [
            "stable"
          ],
          "explain": "The concept is named the evolutionarily STABLE strategy precisely because it stays fixed against invaders."
        },
        {
          "type": "mcq",
          "q": "Who introduced the ESS concept, and in what foundational work?",
          "choices": [
            "Charles Darwin, in On the Origin of Species (1859)",
            "John Maynard Smith and George Price, in a 1973 Nature paper",
            "John Nash, in his 1950 equilibrium papers",
            "Ronald Fisher, in The Genetical Theory of Natural Selection (1930)"
          ],
          "answer": 1,
          "explain": "John Maynard Smith and George Price introduced the ESS in their 1973 Nature paper 'The Logic of Animal Conflict'."
        },
        {
          "type": "truefalse",
          "q": "An ESS requires that individuals consciously reason about the best strategy to play.",
          "answer": false,
          "explain": "ESS is about which strategies persist under selection, not about conscious deliberation; it applies to genetically fixed behaviors."
        },
        {
          "type": "match",
          "q": "Match each term to its role in the ESS intuition.",
          "pairs": [
            [
              "ESS",
              "A strategy uninvadable by rare alternatives"
            ],
            [
              "Mutant",
              "A rare alternative strategy that appears in the population"
            ],
            [
              "Invasion",
              "A mutant increasing in frequency over time"
            ]
          ],
          "explain": "The ESS is tested by whether a rare mutant can invade; if none can, the resident strategy is stable."
        },
        {
          "type": "order",
          "q": "Order the logical steps of the ESS thought experiment.",
          "items": [
            "A resident strategy is common in the population",
            "A rare mutant strategy appears",
            "Compare the mutant's payoff to the resident's",
            "If the mutant cannot spread, the resident is an ESS"
          ],
          "explain": "The ESS test imagines a common resident, introduces a rare mutant, compares payoffs, and asks whether the mutant fails to spread."
        }
      ]
    },
    {
      "id": "l34",
      "title": "Resident and mutant framing",
      "intro": "The ESS test is framed as a competition between a common resident strategy and a rare mutant that probes for weakness.",
      "questions": [
        {
          "type": "mcq",
          "q": "In the ESS framework, what is the 'resident' strategy?",
          "choices": [
            "The rare newcomer being tested",
            "The strategy played by the vast majority of the population",
            "A strategy that is always cooperative",
            "The strategy with the lowest fitness"
          ],
          "answer": 1,
          "explain": "The resident is the incumbent strategy held by almost the entire population; the mutant is the rare challenger."
        },
        {
          "type": "mcq",
          "q": "What role does the 'mutant' strategy play in the ESS test?",
          "choices": [
            "It is the majority strategy defending its position",
            "It is a rare alternative introduced to see whether it can spread",
            "It represents the average payoff of the population",
            "It is a strategy that never interacts with residents"
          ],
          "answer": 1,
          "explain": "The mutant is a rare alternative; the ESS test checks whether this challenger can increase in frequency."
        },
        {
          "type": "truefalse",
          "q": "In the standard ESS setup, the mutant is assumed to start at a very small (near-zero) frequency.",
          "answer": true,
          "explain": "The mutant is introduced at low frequency, so residents almost always meet other residents; this is the invasion scenario."
        },
        {
          "type": "fill",
          "q": "The common incumbent strategy in the ESS test is called the ____ strategy.",
          "answer": "resident",
          "accept": [
            "resident",
            "incumbent"
          ],
          "explain": "The incumbent held by the majority is the resident; the rare challenger is the mutant."
        },
        {
          "type": "match",
          "q": "Match each population member to its frequency and role.",
          "pairs": [
            [
              "Resident",
              "Very common; the strategy under test"
            ],
            [
              "Mutant",
              "Very rare; the invader being evaluated"
            ],
            [
              "Invasion attempt",
              "The mutant trying to increase its share"
            ]
          ],
          "explain": "Stability is judged from the invasion attempt: a rare mutant challenging a common resident."
        },
        {
          "type": "order",
          "q": "Order the steps of an ESS invasion analysis, from first to last.",
          "items": [
            "Assume a resident strategy fills the population",
            "Introduce a rare mutant playing a different strategy",
            "Check whether the mutant's payoff lets it spread"
          ],
          "explain": "To test whether a strategy is an ESS you start with a near-ubiquitous resident, introduce a vanishingly rare mutant, and ask whether the mutant earns enough to invade; if not, the resident is stable."
        },
        {
          "type": "truefalse",
          "q": "Because the mutant is rare, a resident individual mostly interacts with other residents.",
          "answer": true,
          "explain": "At low mutant frequency, almost every interaction a resident has is with another resident, which shapes the stability conditions."
        }
      ]
    },
    {
      "id": "l35",
      "title": "First ESS condition",
      "intro": "The primary ESS condition says the resident must do strictly better against itself than any mutant does against the resident.",
      "questions": [
        {
          "type": "mcq",
          "q": "The first (primary) ESS condition requires that, when a mutant is rare, the resident strategy S versus S earns:",
          "choices": [
            "Strictly more than the mutant M earns against S, OR ties and then wins the tie-break",
            "Strictly less than the mutant against S",
            "Exactly the same as any possible strategy",
            "The maximum possible payoff in the whole game"
          ],
          "answer": 0,
          "explain": "The primary condition is E(S,S) > E(M,S); if equality holds, the secondary tie-break condition must decide."
        },
        {
          "type": "fill",
          "q": "The first ESS condition compares the resident against itself with the mutant against the resident: E(S,S) is at least as large, and if equal the ____ condition applies.",
          "answer": "secondary",
          "accept": [
            "secondary",
            "second",
            "tie-break",
            "tiebreak"
          ],
          "explain": "If E(S,S) = E(M,S), the primary condition is not strict and the secondary condition must be checked."
        },
        {
          "type": "truefalse",
          "q": "If the resident earns strictly more against itself than the mutant earns against the resident, the first condition alone guarantees stability.",
          "answer": true,
          "explain": "When E(S,S) > E(M,S) strictly, the resident out-reproduces the rare mutant, so no second condition is needed."
        },
        {
          "type": "mcq",
          "q": "Why does the payoff against the RESIDENT dominate the comparison when the mutant is rare?",
          "choices": [
            "Because mutants refuse to interact with each other",
            "Because nearly all interactions are against residents, so E(_,S) terms carry almost all the weight",
            "Because payoffs against mutants are always zero",
            "Because the resident payoff is defined to be larger"
          ],
          "answer": 1,
          "explain": "At low mutant frequency, both types meet residents almost exclusively, so the E(S,S) vs E(M,S) comparison determines fitness."
        },
        {
          "type": "order",
          "q": "Order the primary ESS check from the invader's viewpoint.",
          "items": [
            "Assume the mutant M is rare",
            "Both types mostly meet residents S",
            "Compare E(S,S) with E(M,S)",
            "If E(S,S) > E(M,S), M cannot invade"
          ],
          "explain": "The primary condition asks whether residents beat mutants in their shared, dominant interaction against S."
        },
        {
          "type": "match",
          "q": "Match each payoff expression to its meaning.",
          "pairs": [
            [
              "E(S,S)",
              "Resident's payoff playing against a resident"
            ],
            [
              "E(M,S)",
              "Mutant's payoff playing against a resident"
            ],
            [
              "E(S,S) > E(M,S)",
              "The strict primary ESS condition"
            ]
          ],
          "explain": "The primary ESS condition is written E(S,S) > E(M,S): the resident beats the mutant in interactions with residents."
        },
        {
          "type": "truefalse",
          "q": "The first ESS condition is identical to saying the resident is the socially optimal strategy for the whole group.",
          "answer": false,
          "explain": "The ESS condition is about invasion resistance, not group optimality; an ESS can yield lower collective payoff than a cooperative outcome."
        }
      ]
    },
    {
      "id": "l36",
      "title": "Second ESS condition",
      "intro": "When the resident and mutant tie against the resident, a secondary tie-break condition decides stability.",
      "questions": [
        {
          "type": "mcq",
          "q": "When does the SECOND (tie-break) ESS condition become decisive?",
          "choices": [
            "Whenever the mutant is common",
            "Only when E(S,S) = E(M,S), i.e. the primary condition is a tie",
            "Only when the resident has the lowest payoff",
            "Never; the first condition always suffices"
          ],
          "answer": 1,
          "explain": "The secondary condition applies exactly when E(S,S) = E(M,S), because the primary strict inequality failed."
        },
        {
          "type": "mcq",
          "q": "Given E(S,S) = E(M,S), what does the second ESS condition require for stability?",
          "choices": [
            "E(S,M) > E(M,M): the resident does better against the mutant than the mutant does against itself",
            "E(S,M) < E(M,M)",
            "E(M,M) = 0",
            "The mutant must never meet another mutant"
          ],
          "answer": 0,
          "explain": "The tie is broken by interactions with mutants: stability requires E(S,M) > E(M,M)."
        },
        {
          "type": "truefalse",
          "q": "The second ESS condition looks at how each strategy performs against the rare MUTANT.",
          "answer": true,
          "explain": "Once the mutant-vs-resident interaction ties, the decisive comparison is against mutants: E(S,M) vs E(M,M)."
        },
        {
          "type": "fill",
          "q": "If E(S,S) = E(M,S), then for an ESS the resident must satisfy E(S,M) ____ E(M,M).",
          "answer": ">",
          "accept": [
            ">",
            "greater than",
            "greater",
            "exceeds"
          ],
          "explain": "The tie-break condition is the strict inequality E(S,M) > E(M,M)."
        },
        {
          "type": "order",
          "q": "Order the full two-part ESS test.",
          "items": [
            "Check whether E(S,S) > E(M,S)",
            "If strictly greater, S is an ESS",
            "If instead E(S,S) = E(M,S), check the tie-break",
            "Require E(S,M) > E(M,M) for stability"
          ],
          "explain": "The ESS test uses the primary condition first, then the secondary tie-break only when the primary ties."
        },
        {
          "type": "match",
          "q": "Match each condition to when it decides stability.",
          "pairs": [
            [
              "E(S,S) > E(M,S)",
              "Primary condition, decides on its own"
            ],
            [
              "E(S,S) = E(M,S)",
              "Tie that triggers the secondary condition"
            ],
            [
              "E(S,M) > E(M,M)",
              "Secondary condition that breaks the tie"
            ]
          ],
          "explain": "Stability holds if the primary strict inequality holds, or if the primary ties and the secondary inequality holds."
        },
        {
          "type": "truefalse",
          "q": "If E(S,S) = E(M,S) and also E(S,M) = E(M,M), the resident is guaranteed to be an ESS.",
          "answer": false,
          "explain": "With both comparisons tied, the secondary condition (strict E(S,M) > E(M,M)) fails, so S is not an ESS."
        }
      ]
    },
    {
      "id": "l37",
      "title": "ESS versus Nash equilibrium",
      "intro": "Every ESS is a Nash equilibrium, but not every Nash equilibrium is an ESS.",
      "questions": [
        {
          "type": "mcq",
          "q": "What is the correct logical relationship between ESS and Nash equilibrium?",
          "choices": [
            "Every Nash equilibrium is an ESS, but not conversely",
            "Every ESS is a Nash equilibrium, but not every Nash equilibrium is an ESS",
            "They are exactly equivalent concepts",
            "They are completely unrelated"
          ],
          "answer": 1,
          "explain": "ESS is a strict refinement of Nash: an ESS must be Nash, but Nash equilibria can fail the ESS stability conditions."
        },
        {
          "type": "truefalse",
          "q": "ESS is a refinement of the Nash equilibrium concept.",
          "answer": true,
          "explain": "ESS adds an extra stability (uninvadability) requirement on top of Nash, so it selects among Nash equilibria."
        },
        {
          "type": "fill",
          "q": "Because an ESS must resist invasion, every ESS is also a ____ equilibrium.",
          "answer": "nash",
          "accept": [
            "nash",
            "nash equilibrium"
          ],
          "explain": "The primary ESS condition E(S,S) >= E(M,S) for all mutants is exactly the Nash best-response requirement."
        },
        {
          "type": "mcq",
          "q": "Why can a Nash equilibrium fail to be an ESS?",
          "choices": [
            "Because Nash equilibria never exist in evolutionary games",
            "Because a strategy can be a best response yet still be invadable when payoffs tie against alternatives",
            "Because ESS ignores payoffs entirely",
            "Because Nash equilibria require infinite populations"
          ],
          "answer": 1,
          "explain": "A weak (non-strict) Nash equilibrium can tie against a mutant and then fail the secondary ESS condition, so it is invadable."
        },
        {
          "type": "match",
          "q": "Match each concept to its defining requirement.",
          "pairs": [
            [
              "Nash equilibrium",
              "No player gains by unilaterally deviating"
            ],
            [
              "ESS",
              "Nash plus resistance to invasion by rare mutants"
            ],
            [
              "Strict Nash equilibrium",
              "A sufficient condition that guarantees an ESS"
            ]
          ],
          "explain": "ESS strengthens Nash with invasion resistance; any strict Nash equilibrium automatically qualifies as an ESS."
        },
        {
          "type": "order",
          "q": "Order these sets from most inclusive (largest) to most restrictive (smallest).",
          "items": [
            "All Nash equilibria",
            "All evolutionarily stable strategies",
            "All strict Nash equilibria"
          ],
          "explain": "Every strict Nash is an ESS, and every ESS is a Nash equilibrium, so the sets nest from Nash (largest) inward."
        },
        {
          "type": "truefalse",
          "q": "A strict Nash equilibrium (where deviating strictly lowers payoff) is always an ESS.",
          "answer": true,
          "explain": "Strict Nash gives E(S,S) > E(M,S) for every mutant, satisfying the primary ESS condition outright."
        }
      ]
    },
    {
      "id": "l38",
      "title": "Uninvadability formalized",
      "intro": "Uninvadability can be written as a single fitness inequality comparing mutant and resident payoffs at low mutant frequency.",
      "questions": [
        {
          "type": "mcq",
          "q": "Let epsilon be the small mutant frequency. The mutant M invades S only if its expected fitness exceeds the resident's. Which inequality expresses a mutant's fitness against a population that is mostly S with a fraction epsilon of M?",
          "choices": [
            "(1 - epsilon) E(M,S) + epsilon E(M,M)",
            "(1 - epsilon) E(S,S) + epsilon E(S,M)",
            "epsilon E(M,S) + (1 - epsilon) E(M,M)",
            "E(M,M) only"
          ],
          "answer": 0,
          "explain": "A mutant meets a resident with probability (1 - epsilon) and another mutant with probability epsilon, giving W(M) = (1 - epsilon)E(M,S) + epsilon E(M,M)."
        },
        {
          "type": "mcq",
          "q": "For S to be an ESS, which inequality must hold for every mutant M and all sufficiently small epsilon > 0?",
          "choices": [
            "W(S) < W(M)",
            "W(S) > W(M), i.e. (1 - e)E(S,S) + e E(S,M) > (1 - e)E(M,S) + e E(M,M)",
            "W(S) = W(M) exactly",
            "E(M,M) > E(S,S)"
          ],
          "answer": 1,
          "explain": "Uninvadability means the resident's fitness strictly exceeds the mutant's for all small epsilon, which reduces to the two ESS conditions."
        },
        {
          "type": "truefalse",
          "q": "As epsilon approaches zero, the invasion inequality is dominated by the E(_,S) terms, recovering the primary ESS condition.",
          "answer": true,
          "explain": "The (1 - epsilon) terms dominate as epsilon -> 0, so the leading comparison is E(S,S) vs E(M,S)."
        },
        {
          "type": "fill",
          "q": "The single requirement that no rare mutant can achieve higher fitness than the resident is called ____.",
          "answer": "uninvadability",
          "accept": [
            "uninvadability",
            "invasion resistance",
            "uninvadable"
          ],
          "explain": "Uninvadability is the fitness-based statement that residents out-reproduce any rare mutant."
        },
        {
          "type": "order",
          "q": "Order the derivation of the ESS conditions from the fitness inequality.",
          "items": [
            "Write mutant and resident fitness as mixtures over epsilon",
            "Require W(S) > W(M) for all small epsilon > 0",
            "Take the limit epsilon -> 0 to get the primary condition E(S,S) >= E(M,S)",
            "When the primary condition ties, the epsilon-order term gives E(S,M) > E(M,M)"
          ],
          "explain": "Expanding the fitness inequality in epsilon yields the primary condition at leading order and the secondary condition at next order."
        },
        {
          "type": "match",
          "q": "Match each fitness expression to its interpretation at mutant frequency epsilon.",
          "pairs": [
            [
              "(1 - e)E(S,S) + e E(S,M)",
              "Expected fitness of a resident"
            ],
            [
              "(1 - e)E(M,S) + e E(M,M)",
              "Expected fitness of a mutant"
            ],
            [
              "W(S) > W(M) for small e",
              "The uninvadability requirement"
            ]
          ],
          "explain": "Each type's fitness is a weighted average of its payoffs against residents and mutants; ESS requires the resident's to be larger."
        },
        {
          "type": "truefalse",
          "q": "The formal invasion inequality holding for ALL sufficiently small epsilon is equivalent to the combined primary and secondary ESS conditions.",
          "answer": true,
          "explain": "Maynard Smith showed the fitness inequality for small epsilon is exactly captured by the two-part E(S,S)/E(S,M) conditions."
        }
      ]
    },
    {
      "id": "l39",
      "title": "Strong versus weak stability",
      "intro": "Strict equilibria give strong stability, while ties against mutants create weaker, edge-case forms of stability.",
      "questions": [
        {
          "type": "mcq",
          "q": "A 'strict' ESS arises when which condition holds for every mutant M?",
          "choices": [
            "E(S,S) > E(M,S) strictly, so no tie-break is ever needed",
            "E(S,S) = E(M,S) for all M",
            "E(M,M) > E(S,M)",
            "The mutant frequency is exactly one half"
          ],
          "answer": 0,
          "explain": "A strict ESS satisfies the primary condition strictly against every mutant, corresponding to a strict Nash equilibrium."
        },
        {
          "type": "truefalse",
          "q": "When stability relies on the secondary condition (a tie against the resident), the ESS is a weaker, edge-case form of stability.",
          "answer": true,
          "explain": "Relying on the tie-break means the resident only marginally resists invasion, a weaker situation than a strict ESS."
        },
        {
          "type": "mcq",
          "q": "A completely mixed ESS (using every pure strategy with positive probability) can never be a STRICT equilibrium. Why?",
          "choices": [
            "Because mixed strategies have no payoffs",
            "Because at a mixed equilibrium the player is indifferent among the pure strategies in the support, so ties are unavoidable",
            "Because strict equilibria require infinite populations",
            "Because mixing always lowers fitness"
          ],
          "answer": 1,
          "explain": "Indifference across the support means E(S,S) = E(M,S) for alternative mixtures, so a mixed ESS depends on the secondary condition, never strict."
        },
        {
          "type": "fill",
          "q": "An ESS whose stability requires only the primary strict inequality is called a ____ ESS.",
          "answer": "strict",
          "accept": [
            "strict",
            "strong"
          ],
          "explain": "A strict ESS satisfies E(S,S) > E(M,S) for all mutants, the strongest form of evolutionary stability."
        },
        {
          "type": "match",
          "q": "Match each stability type to its characteristic.",
          "pairs": [
            [
              "Strict ESS",
              "E(S,S) > E(M,S) for every mutant; strongest"
            ],
            [
              "Weak (secondary-reliant) ESS",
              "Ties against the resident, decided by E(S,M) > E(M,M)"
            ],
            [
              "Mixed ESS",
              "Support strategies are payoff-indifferent, never strict"
            ]
          ],
          "explain": "Strong stability comes from strict inequalities; mixed and tie-dependent ESSs rely on the secondary condition."
        },
        {
          "type": "order",
          "q": "Order these forms of equilibrium from strongest stability to weakest.",
          "items": [
            "Strict ESS (strict Nash)",
            "ESS relying on the secondary tie-break condition",
            "Weak Nash equilibrium that is not an ESS"
          ],
          "explain": "Strict ESS is strongest, tie-break-reliant ESS is intermediate, and a non-ESS weak Nash is not evolutionarily stable at all."
        },
        {
          "type": "truefalse",
          "q": "Neutral stability, where the resident merely ties with every mutant, is exactly the same as being a strict ESS.",
          "answer": false,
          "explain": "Neutral stability allows exact ties (mutants neither spread nor decline), which is weaker than the strict inequalities of a strict ESS."
        }
      ]
    },
    {
      "id": "l40",
      "title": "Limitations of the concept",
      "intro": "The classical ESS rests on idealizing assumptions like infinite populations and random pairwise contests.",
      "questions": [
        {
          "type": "mcq",
          "q": "Which assumption underlies the classical (Maynard Smith) ESS definition?",
          "choices": [
            "A small, finite population with strong drift",
            "An effectively infinite, well-mixed population so frequencies change deterministically",
            "Players that communicate and form binding contracts",
            "Interactions occurring only among close relatives"
          ],
          "answer": 1,
          "explain": "The standard ESS assumes an infinite, well-mixed population, letting invasion be judged by deterministic payoff comparisons."
        },
        {
          "type": "truefalse",
          "q": "In a finite population, random drift can let a mutant that a classical ESS 'should' repel occasionally fix by chance.",
          "answer": true,
          "explain": "Finite populations experience stochastic drift, so the deterministic ESS criterion needs modification (e.g. Nowak's finite-population ESS conditions)."
        },
        {
          "type": "mcq",
          "q": "The classical ESS is built on which interaction structure?",
          "choices": [
            "Random PAIRWISE contests between two individuals at a time",
            "Simultaneous games among the entire population at once",
            "Repeated games with perfect memory of all past play",
            "One-sided contests where only the mutant acts"
          ],
          "answer": 0,
          "explain": "The basic ESS models random pairwise contests; multiplayer or structured interactions require extended frameworks."
        },
        {
          "type": "fill",
          "q": "The classical ESS assumes an effectively ____ population so that a single mutant has negligible initial frequency.",
          "answer": "infinite",
          "accept": [
            "infinite",
            "large",
            "well-mixed"
          ],
          "explain": "An infinite (or very large) population makes the mutant's initial share vanishingly small and removes drift from the analysis."
        },
        {
          "type": "match",
          "q": "Match each ESS limitation to the real-world complication it ignores.",
          "pairs": [
            [
              "Infinite-population assumption",
              "Random genetic drift in finite populations"
            ],
            [
              "Well-mixed assumption",
              "Spatial or network structure among interactions"
            ],
            [
              "Pairwise-contest assumption",
              "Multiplayer and group interactions"
            ]
          ],
          "explain": "Each idealization of the classical ESS is relaxed by an extended model: finite-population, spatial, or multiplayer game theory."
        },
        {
          "type": "order",
          "q": "Order these models from the most idealized classical ESS to progressively more realistic extensions.",
          "items": [
            "Infinite well-mixed population with pairwise contests",
            "Finite population with random drift",
            "Spatially structured or networked populations",
            "Multiplayer group interactions"
          ],
          "explain": "Later frameworks relax the ESS idealizations one by one: finiteness, spatial structure, and then group-level interactions."
        },
        {
          "type": "truefalse",
          "q": "The existence of an ESS is guaranteed in every game.",
          "answer": false,
          "explain": "Not every game has an ESS; for example, Rock-Paper-Scissors has a Nash equilibrium (the uniform mixture) that is not an ESS."
        }
      ]
    }
  ]
});
