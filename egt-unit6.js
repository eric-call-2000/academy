window.ACADEMY.addUnit("egt", {
  id: "unit-6",
  title: "The Hawk-Dove Game",
  color: "#3b74e0",
  icon: "🕊️",
  description: "The foundational Hawk-Dove model of aggression versus restraint, from resource value V and injury cost C to the pure and mixed evolutionarily stable strategies.",
  lessons: [
    {
      id: "l41",
      title: "The Hawk-Dove setup",
      intro: "The Hawk-Dove game pictures two animals contesting a single resource whose fitness value is written V.",
      questions: [
        {
          type: "mcq",
          q: "In the Hawk-Dove game, what are two individuals competing over?",
          choices: [
            "A single resource, such as food, territory, or a mate",
            "The right to lead the whole herd forever",
            "Nothing; they simply fight for fun",
            "A cash prize measured in dollars"
          ],
          answer: 0,
          explain: "The Hawk-Dove game models a contest between two individuals over one resource whose contribution to reproductive fitness is written V."
        },
        {
          type: "fill",
          q: "The fitness benefit an individual gains from winning the contested resource is written as the letter ____.",
          answer: "v",
          accept: ["v"],
          explain: "By convention the value of the resource, its contribution to reproductive fitness, is denoted V."
        },
        {
          type: "truefalse",
          q: "The Hawk-Dove game was introduced by John Maynard Smith and George Price in a 1973 paper on the logic of animal conflict.",
          answer: true,
          explain: "Maynard Smith and Price presented the Hawk-Dove model and the ESS concept in their 1973 Nature paper 'The Logic of Animal Conflict'."
        },
        {
          type: "mcq",
          q: "In this model, 'Hawk' and 'Dove' refer to what?",
          choices: [
            "Two different bird species that fight each other",
            "Two behavioural strategies any individual might adopt",
            "The two referees who judge the contest",
            "Two separate resources on offer"
          ],
          answer: 1,
          explain: "Hawk and Dove are strategies, not species: Hawk escalates and is willing to fight, while Dove displays and retreats. Any individual could in principle play either."
        },
        {
          type: "match",
          q: "Match each element of the Hawk-Dove setup to its meaning.",
          pairs: [
            ["V", "Fitness value of the contested resource"],
            ["Hawk", "Strategy that escalates and is willing to fight"],
            ["Dove", "Strategy that displays but retreats from a fight"]
          ],
          explain: "The setup has a resource worth V and two strategies: the aggressive Hawk and the restrained Dove."
        },
        {
          type: "mcq",
          q: "Why is V measured in units of fitness rather than money?",
          choices: [
            "Because money would be easier to count",
            "Because the animals agreed on a price beforehand",
            "Because evolution selects on reproductive success, so payoffs are fitness",
            "Because V never actually matters to the outcome"
          ],
          answer: 2,
          explain: "In evolutionary game theory payoffs are changes in fitness (expected reproductive success), since that is what natural selection acts on."
        },
        {
          type: "truefalse",
          q: "In the simplest model, Hawk and Dove are the only two strategies considered, representing pure aggression and pure restraint.",
          answer: true,
          explain: "The basic Hawk-Dove game considers just two pure strategies, unconditional aggression (Hawk) and unconditional restraint (Dove), before more complex strategies are added."
        }
      ]
    },
    {
      id: "l42",
      title: "Cost of injury C",
      intro: "When two aggressors truly fight, the loser can be injured, and that cost of escalation is written C.",
      questions: [
        {
          type: "mcq",
          q: "In the Hawk-Dove game, what does the cost C represent?",
          choices: [
            "The time wasted displaying to an opponent",
            "The fitness cost of injury from an escalated fight",
            "The value of the resource that is won",
            "The number of Doves in the population"
          ],
          answer: 1,
          explain: "C is the cost of injury: the fitness lost by an individual that is hurt in a serious, escalated fight."
        },
        {
          type: "truefalse",
          q: "The injury cost C is paid only when two Hawks meet and actually escalate the contest.",
          answer: true,
          explain: "Injury cost is incurred only when a fight truly escalates. A Hawk meeting a Dove wins without a fight, so C matters only in Hawk versus Hawk contests."
        },
        {
          type: "fill",
          q: "When two Hawks fight, the loser suffers an injury that reduces its fitness by an amount written as the letter ____.",
          answer: "c",
          accept: ["c"],
          explain: "The injury cost of losing an escalated fight is denoted C in the standard Hawk-Dove payoffs."
        },
        {
          type: "mcq",
          q: "Why does a large value of C discourage all-out fighting?",
          choices: [
            "Because a big injury cost can outweigh the resource's value V",
            "Because Doves refuse to eat when C is large",
            "Because C makes the resource worth more",
            "Because a large C is against the rules"
          ],
          answer: 0,
          explain: "If C is large relative to V, the expected cost of fighting can exceed the benefit of the resource, making aggression a poor strategy."
        },
        {
          type: "match",
          q: "Match each quantity to what it measures.",
          pairs: [
            ["V", "Benefit of winning the resource"],
            ["C", "Cost of injury in an escalated fight"],
            ["(V - C)/2", "Average payoff when two Hawks fight"]
          ],
          explain: "V is the prize and C is the injury cost; two Hawks each average (V - C)/2 because each is equally likely to win V or be injured by C."
        },
        {
          type: "truefalse",
          q: "In the standard model, a Dove that retreats from a Hawk still pays the full injury cost C.",
          answer: false,
          explain: "A Dove retreats before being hurt, so it pays no injury cost. It simply gets nothing (a payoff of 0) while the Hawk takes the resource."
        },
        {
          type: "mcq",
          q: "Two evenly matched Hawks each have a 50 percent chance of winning V and a 50 percent chance of an injury costing C. What is each Hawk's expected payoff?",
          choices: [
            "V + C",
            "V/2",
            "(V - C)/2",
            "C - V"
          ],
          answer: 2,
          explain: "Averaging a 50 percent chance of gaining V and a 50 percent chance of losing C gives an expected payoff of (V - C)/2."
        }
      ]
    },
    {
      id: "l43",
      title: "The four payoff outcomes",
      intro: "Every pairing of Hawk and Dove produces a distinct payoff, and together they fill in the game's payoff matrix.",
      questions: [
        {
          type: "mcq",
          q: "What does a Hawk receive when it meets a Dove?",
          choices: [
            "Half the resource, V/2",
            "Nothing, a payoff of 0",
            "An injury cost of C",
            "The whole resource, worth V, because the Dove retreats"
          ],
          answer: 3,
          explain: "Against a Dove, the Hawk escalates, the Dove retreats, and the Hawk takes the entire resource V without any fight."
        },
        {
          type: "mcq",
          q: "What do two Doves get when they meet?",
          choices: [
            "One takes V while the other is injured",
            "They each average V/2, sharing the resource",
            "They each get the full V",
            "They each pay the cost C"
          ],
          answer: 1,
          explain: "Two Doves display but neither escalates, so they share the resource, each averaging V/2 with no injury."
        },
        {
          type: "truefalse",
          q: "When a Dove meets a Hawk, the Dove gets a payoff of zero.",
          answer: true,
          explain: "The Dove retreats from the Hawk, avoiding injury but winning nothing, so its payoff is 0 while the Hawk gets V."
        },
        {
          type: "fill",
          q: "Two Hawks that fight each earn an average payoff of (V minus C) divided by ____.",
          answer: "2",
          accept: ["2", "two"],
          explain: "Each Hawk wins half the time (gaining V) and loses half the time (losing C), giving an expected payoff of (V - C)/2."
        },
        {
          type: "match",
          q: "Match each pairing to the payoff of the first player.",
          pairs: [
            ["Hawk vs Hawk", "(V - C)/2"],
            ["Hawk vs Dove", "V"],
            ["Dove vs Hawk", "0"],
            ["Dove vs Dove", "V/2"]
          ],
          explain: "These four entries form the Hawk-Dove payoff matrix: Hawks split gains and injuries, a Hawk beats a Dove for V, a Dove loses to a Hawk for 0, and two Doves share V/2."
        },
        {
          type: "order",
          q: "Rank these four payoffs from lowest to highest, assuming C is greater than V.",
          items: [
            "(V - C)/2, the Hawk-Hawk payoff",
            "0, the Dove-Hawk payoff",
            "V/2, the Dove-Dove payoff",
            "V, the Hawk-Dove payoff"
          ],
          explain: "With C greater than V, (V - C)/2 is negative and so is lowest; then 0, then V/2, then the full V a Hawk takes from a Dove."
        },
        {
          type: "truefalse",
          q: "A Hawk always does at least as well as a Dove would in the very same contest, no matter who the opponent is.",
          answer: false,
          explain: "Hawk beats Dove against a Dove opponent, but when facing another Hawk with C greater than V, the Hawk's payoff (V - C)/2 is negative, worse than the 0 a Dove would get."
        }
      ]
    },
    {
      id: "l44",
      title: "Pure Hawk instability",
      intro: "A population made entirely of Hawks is not always safe from invasion, and this lesson shows when restraint pays.",
      questions: [
        {
          type: "mcq",
          q: "In a population of all Hawks, what payoff does each Hawk earn on average when C is greater than V?",
          choices: [
            "V, the full resource",
            "V/2",
            "(V - C)/2, which is negative",
            "0"
          ],
          answer: 2,
          explain: "Every contest is Hawk versus Hawk, so each earns (V - C)/2; when C exceeds V this average is negative, meaning Hawks harm their own fitness."
        },
        {
          type: "mcq",
          q: "A single Dove mutant appears in a population of Hawks, with C greater than V. What does it earn?",
          choices: [
            "0, because it retreats from every Hawk it meets",
            "A negative payoff, worse than the Hawks",
            "The full V every time",
            "The injury cost C"
          ],
          answer: 0,
          explain: "The lone Dove meets only Hawks and retreats each time, earning 0. Since 0 is greater than the Hawks' negative (V - C)/2, the Dove does better."
        },
        {
          type: "truefalse",
          q: "When C is greater than V, a population of pure Hawks can be invaded by Doves.",
          answer: true,
          explain: "Because a Dove earns 0 while resident Hawks earn a negative (V - C)/2, Doves have higher fitness and spread, so pure Hawk is not evolutionarily stable."
        },
        {
          type: "fill",
          q: "A strategy that, once common, cannot be invaded by any rare alternative strategy is called an evolutionarily stable strategy, abbreviated ____.",
          answer: "ess",
          accept: ["ess", "e.s.s."],
          explain: "An ESS is a strategy that, if adopted by a population, cannot be invaded by any rare mutant strategy. Pure Hawk fails this test when C is greater than V."
        },
        {
          type: "truefalse",
          q: "Pure Hawk is an ESS regardless of the sizes of V and C.",
          answer: false,
          explain: "Pure Hawk is an ESS only when V is at least as large as C. When C exceeds V, Doves can invade, so all-Hawk is unstable."
        },
        {
          type: "order",
          q: "Trace the logic showing why pure Hawk collapses when C is greater than V, from first step to last.",
          items: [
            "Every Hawk fights other Hawks and averages (V - C)/2",
            "With C greater than V, that average payoff is negative",
            "A rare Dove retreats instead and earns 0",
            "Because 0 beats a negative payoff, Doves spread and invade"
          ],
          explain: "High injury costs make constant fighting a losing game, so the non-fighting Dove earns more and increases in frequency."
        },
        {
          type: "match",
          q: "Match each condition to the fate of a pure-Hawk population.",
          pairs: [
            ["V greater than C", "Stable: Hawks average a positive payoff and resist Doves"],
            ["C greater than V", "Unstable: Doves invade because Hawks average a loss"],
            ["V equal to C", "Borderline: Hawks average exactly 0"]
          ],
          explain: "The comparison of V and C decides everything: only when the resource is worth at least the injury cost can all-Hawk hold."
        }
      ]
    },
    {
      id: "l45",
      title: "When V exceeds C",
      intro: "When the prize is worth more than the risk of injury, unrestrained aggression becomes the stable strategy.",
      questions: [
        {
          type: "mcq",
          q: "When V is greater than C, which strategy is the ESS?",
          choices: [
            "Dove",
            "Hawk",
            "A guaranteed fifty-fifty mix",
            "Neither is stable"
          ],
          answer: 1,
          explain: "If the resource value exceeds the injury cost, Hawk earns a positive (V - C)/2 even against other Hawks and always beats Dove, making pure Hawk the ESS."
        },
        {
          type: "truefalse",
          q: "When V exceeds C, a Hawk facing another Hawk still earns a positive average payoff.",
          answer: true,
          explain: "The Hawk-Hawk payoff is (V - C)/2, which is positive whenever V is greater than C, so fighting still pays on average."
        },
        {
          type: "fill",
          q: "When the resource value V is greater than the injury cost C, the Hawk strategy is the pure ____, the strategy no rare mutant can invade.",
          answer: "ess",
          accept: ["ess", "evolutionarily stable strategy", "e.s.s."],
          explain: "With V greater than C, Hawk cannot be invaded by Dove or anything else, so it is the pure evolutionarily stable strategy."
        },
        {
          type: "mcq",
          q: "Why can't a Dove invade a Hawk population when V is greater than C?",
          choices: [
            "Because the Dove earns 0 against Hawks, less than the Hawks' positive payoff",
            "Because Doves are forbidden from entering",
            "Because the Dove is injured every time",
            "Because the Dove also earns (V - C)/2"
          ],
          answer: 0,
          explain: "A Dove meeting Hawks earns 0, but the resident Hawks earn a positive (V - C)/2, so the Dove does worse and cannot spread."
        },
        {
          type: "truefalse",
          q: "When V is greater than C, the population settles into a mix of Hawks and Doves rather than all Hawks.",
          answer: false,
          explain: "A mixed equilibrium arises only when C exceeds V. When V is greater than C the stable outcome is pure Hawk, with no Doves persisting."
        },
        {
          type: "match",
          q: "Match each relationship between V and C to the resulting stable outcome.",
          pairs: [
            ["V greater than C", "Pure Hawk is the ESS"],
            ["C greater than V", "A mixed Hawk-Dove ESS"],
            ["Very large C, small V", "Mostly Dove-like restraint"]
          ],
          explain: "The larger the injury cost relative to the prize, the more restraint the ESS contains; only when V exceeds C does pure aggression win."
        },
        {
          type: "mcq",
          q: "Intuitively, why does aggression pay when V exceeds C?",
          choices: [
            "Because injuries never happen",
            "Because the prize is worth more than the risk of being hurt",
            "Because Doves are extinct everywhere",
            "Because C becomes negative"
          ],
          answer: 1,
          explain: "When the resource is worth more than the cost of injury, the expected benefit of fighting outweighs the risk, so escalating is favored."
        }
      ]
    },
    {
      id: "l46",
      title: "Mixed ESS solution",
      intro: "When injury is costly, the stable population is a precise blend of aggression and restraint set by the ratio V over C.",
      questions: [
        {
          type: "mcq",
          q: "When C is greater than V, what fraction of the population plays Hawk at the mixed ESS?",
          choices: [
            "V/C",
            "C/V",
            "Always 1/2",
            "V - C"
          ],
          answer: 0,
          explain: "Setting the Hawk and Dove payoffs equal gives an equilibrium Hawk frequency of V/C, the ratio of resource value to injury cost."
        },
        {
          type: "fill",
          q: "At the mixed evolutionarily stable strategy, the equilibrium proportion of Hawks equals V divided by ____.",
          answer: "c",
          accept: ["c"],
          explain: "The mixed ESS Hawk frequency is V/C: the value of the resource divided by the cost of injury."
        },
        {
          type: "truefalse",
          q: "At the mixed ESS, Hawks and Doves earn exactly the same average payoff.",
          answer: true,
          explain: "An interior mixed equilibrium requires equal payoffs for both strategies; if either did better its frequency would rise, so at V/C the two payoffs match."
        },
        {
          type: "mcq",
          q: "If V = 2 and C = 4, what fraction of the population plays Hawk at the ESS?",
          choices: [
            "2, twice the population",
            "1/2, since V/C = 2/4",
            "1/4",
            "1, all Hawks"
          ],
          answer: 1,
          explain: "The ESS Hawk fraction is V/C = 2/4 = 1/2, so half the population plays Hawk and half plays Dove."
        },
        {
          type: "truefalse",
          q: "The mixed ESS can be read either as a stable mix of Hawk and Dove individuals, or as each individual playing Hawk with probability V/C.",
          answer: true,
          explain: "A mixed ESS has two equivalent readings: a polymorphic population at frequency V/C, or every individual randomizing and playing Hawk with probability V/C."
        },
        {
          type: "order",
          q: "Order the steps used to derive the mixed ESS Hawk frequency.",
          items: [
            "Write the payoff to a Hawk and to a Dove as functions of the Hawk frequency p",
            "Set the Hawk payoff equal to the Dove payoff",
            "Solve the resulting equation for p",
            "Obtain p = V/C"
          ],
          explain: "Equating the two strategies' payoffs and solving for the Hawk frequency p yields the equilibrium p = V/C."
        },
        {
          type: "mcq",
          q: "As the injury cost C grows very large while V stays fixed, what happens to the Hawk fraction V/C?",
          choices: [
            "It grows toward 1",
            "It stays at 1/2",
            "It shrinks toward 0, so the population becomes mostly Doves",
            "It becomes negative"
          ],
          answer: 2,
          explain: "Since the Hawk fraction is V/C, a larger C makes the ratio smaller, so costlier injuries mean fewer Hawks and more restraint."
        }
      ]
    },
    {
      id: "l47",
      title: "Blood and restraint interpreted",
      intro: "The Hawk-Dove model explains why real animals so often settle disputes with displays instead of deadly fights.",
      questions: [
        {
          type: "mcq",
          q: "What real biological puzzle does the Hawk-Dove game help explain?",
          choices: [
            "Why all animals are always violent",
            "Why resources have no value",
            "Why animals never compete at all",
            "Why animals often use ritualized displays instead of fighting to the death"
          ],
          answer: 3,
          explain: "The model shows that limited, ritualized contests can be individually favored when injury is costly, explaining widespread restraint in animal conflict."
        },
        {
          type: "truefalse",
          q: "Maynard Smith argued that animal restraint evolves for the good of the species, to keep the species from wiping itself out.",
          answer: false,
          explain: "Maynard Smith rejected that group-selection reasoning. Restraint is favored because it benefits the individual's own fitness, not for the good of the species."
        },
        {
          type: "fill",
          q: "Ritualized contests that avoid serious injury are sometimes described as a form of ____ war, reflecting the restraint the model predicts.",
          answer: "limited",
          accept: ["limited"],
          explain: "The idea of 'limited war' captures how the ESS often involves display and restraint rather than escalation to lethal injury."
        },
        {
          type: "mcq",
          q: "According to the model, when is Dove-like restraint most strongly favored?",
          choices: [
            "When the resource value V is enormous",
            "When the cost of injury C is high relative to V",
            "When there is no cost to fighting",
            "When animals cannot see each other"
          ],
          answer: 1,
          explain: "The mixed ESS Hawk fraction is V/C, so a high injury cost relative to the prize means more restraint, that is, more Dove-like behaviour."
        },
        {
          type: "truefalse",
          q: "The Hawk-Dove model implies that a purely peaceful, all-Dove population is evolutionarily stable.",
          answer: false,
          explain: "An all-Dove population is easily invaded by a Hawk, which takes the full V from every Dove it meets, so pure Dove is never an ESS."
        },
        {
          type: "match",
          q: "Match each level of explanation to how it accounts for animal restraint.",
          pairs: [
            ["Group selection (rejected)", "Restraint evolved to protect the species from extinction"],
            ["Individual selection (Maynard Smith)", "Restraint pays off for each individual when injury is costly"],
            ["Hawk-Dove ESS", "A stable mix of aggression and restraint set by V and C"]
          ],
          explain: "Maynard Smith replaced the vague 'good of the species' story with an individual-level ESS argument grounded in the payoffs V and C."
        },
        {
          type: "mcq",
          q: "Why is 'for the good of the species' a poor explanation for restraint, according to game theory?",
          choices: [
            "Because species do not really exist",
            "Because a selfish Hawk mutant would out-reproduce restrained individuals and spread",
            "Because restraint never actually occurs in nature",
            "Because V and C are always equal"
          ],
          answer: 1,
          explain: "Group-level restraint is not stable: a cheating Hawk would gain higher fitness and invade, so restraint must be explained at the individual level."
        }
      ]
    },
    {
      id: "l48",
      title: "Adding assessment strategies",
      intro: "Real animals do more than play a fixed Hawk or Dove: they read cues about ownership and strength, pointing toward conditional strategies.",
      questions: [
        {
          type: "mcq",
          q: "What is a conditional strategy in the context of the Hawk-Dove game?",
          choices: [
            "A strategy that ignores all information about the contest",
            "A strategy that chooses Hawk or Dove depending on a cue, such as ownership or size",
            "A strategy that always plays Hawk",
            "A strategy available only to Doves"
          ],
          answer: 1,
          explain: "Conditional strategies use information, such as who owns the resource or who is larger, to decide whether to escalate, unlike unconditional Hawk or Dove."
        },
        {
          type: "fill",
          q: "The strategy 'play Hawk if you are the owner, Dove if you are the intruder' is known as the ____ strategy.",
          answer: "bourgeois",
          accept: ["bourgeois"],
          explain: "Maynard Smith named this ownership-based conditional rule the Bourgeois strategy; it can be an ESS by using an arbitrary asymmetry to settle contests."
        },
        {
          type: "truefalse",
          q: "The Bourgeois strategy can be an ESS, settling contests using the arbitrary cue of who owns the resource.",
          answer: true,
          explain: "Bourgeois uses an uncorrelated asymmetry (ownership) as a settling convention; because it is self-consistent it resists invasion and can be an ESS."
        },
        {
          type: "mcq",
          q: "An individual's fighting ability, used to decide whether to escalate, is often called its resource holding potential, or RHP. Who introduced this concept?",
          choices: [
            "Charles Darwin",
            "Geoffrey Parker",
            "Gregor Mendel",
            "Ronald Fisher"
          ],
          answer: 1,
          explain: "Geoffrey Parker introduced 'resource holding potential' (RHP) in 1974 to describe an individual's fighting ability, which assessor strategies use to decide contests."
        },
        {
          type: "match",
          q: "Match each strategy or concept to its description.",
          pairs: [
            ["Bourgeois", "Play Hawk if owner, Dove if intruder"],
            ["Assessor", "Escalate only if you judge yourself stronger than your rival"],
            ["RHP", "An individual's resource holding potential, or fighting ability"]
          ],
          explain: "These conditional ideas extend the basic game: contests can be settled by ownership (Bourgeois) or by assessing relative strength (Assessor, via RHP)."
        },
        {
          type: "truefalse",
          q: "Adding conditional strategies means every real contest must always end in a bloody fight.",
          answer: false,
          explain: "Conditional strategies like Bourgeois and Assessor usually let contests be settled without escalation, further reducing injury compared with unconditional Hawks."
        },
        {
          type: "order",
          q: "Order these approaches from the simplest to the most information-rich.",
          items: [
            "Unconditional Hawk or Dove, ignoring all cues",
            "Bourgeois, conditioning on arbitrary ownership",
            "Assessor, conditioning on assessed fighting ability (RHP)"
          ],
          explain: "The progression adds information: from fixed strategies, to using an arbitrary ownership cue, to actively assessing the opponent's strength."
        }
      ]
    }
  ]
});
