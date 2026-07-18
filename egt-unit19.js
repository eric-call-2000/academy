window.ACADEMY.addUnit("egt", {
  id: "unit-19",
  title: "Contests Over Time",
  color: "#3b74e0",
  icon: "⏳",
  description: "Explores the war of attrition, where fights are settled by which contestant is willing to persist the longest rather than by a single decisive move.",
  lessons: [
    {
      id: "l145",
      title: "The War of Attrition",
      intro: "The war of attrition models fights that are settled not by a single blow but by which contestant is willing to persist the longest.",
      questions: [
        {
          type: "mcq",
          q: "Who first formalized the war of attrition as a model of animal conflict?",
          choices: [
            "Charles Darwin, in 1859",
            "John Maynard Smith, in 1974",
            "W. D. Hamilton, in 1964",
            "Ronald Fisher, in 1930"
          ],
          answer: 1,
          explain: "John Maynard Smith introduced the war of attrition in his 1974 paper on the theory of games and the evolution of animal conflicts."
        },
        {
          type: "truefalse",
          q: "In a war of attrition the winner is decided by which contestant is willing to persist the longest, not by a single decisive blow.",
          answer: true,
          explain: "The whole point of the model is that the contest is one of endurance: the animal prepared to keep going longer wins the resource."
        },
        {
          type: "fill",
          q: "The contestant that gives up first is the ____, and its rival wins the contested resource.",
          answer: "loser",
          accept: ["loser"],
          explain: "The first to quit loses the resource, while the animal that outlasts it becomes the winner."
        },
        {
          type: "mcq",
          q: "How long does a war-of-attrition contest last?",
          choices: [
            "Until a fixed time set in advance for all contests",
            "For exactly the numerical value of the resource",
            "Until the first contestant gives up, that is, the shorter of the two chosen persistence times",
            "Forever, because neither side ever quits"
          ],
          answer: 2,
          explain: "The contest ends the instant one animal quits, so its duration equals the shorter of the two intended persistence times."
        },
        {
          type: "match",
          q: "Match each role or quantity in a war of attrition to its description.",
          pairs: [
            ["Winner", "Takes the resource, worth V"],
            ["Loser", "Quits first and gains nothing, yet still paid a cost"],
            ["Contest length", "Set by the first contestant to give up"]
          ],
          explain: "The winner claims value V, the loser gets nothing, and the fight lasts exactly until the quitter drops out."
        },
        {
          type: "truefalse",
          q: "Only the loser pays a cost in a war of attrition; the winner escapes cost-free.",
          answer: false,
          explain: "Both animals display for the same duration up to the moment one quits, so both pay a time cost; the winner simply also collects the resource V."
        },
        {
          type: "order",
          q: "Put the stages of a war-of-attrition contest in order.",
          items: [
            "Both contestants begin displaying",
            "Time costs accumulate for both sides",
            "One contestant reaches its limit and quits",
            "The persister claims the resource"
          ],
          explain: "Displaying starts, costs mount equally, the first to reach its limit drops out, and the remaining animal wins."
        }
      ]
    },
    {
      id: "l146",
      title: "Continuous strategy space",
      intro: "Unlike the two-move Hawk-Dove game, the war of attrition gives each animal a continuous choice: exactly how long to keep going.",
      questions: [
        {
          type: "mcq",
          q: "In the war of attrition, what exactly is an individual's strategy?",
          choices: [
            "A choice between only 'fight' or 'flee'",
            "A persistence time: how long it is prepared to keep going",
            "The amount of damage it inflicts per second",
            "Whether to signal honestly or to bluff"
          ],
          answer: 1,
          explain: "A strategy is simply the length of time the animal is willing to persist before giving up."
        },
        {
          type: "truefalse",
          q: "The war of attrition has just two discrete strategies, like the Hawk and Dove of the Hawk-Dove game.",
          answer: false,
          explain: "Its strategies form a continuum of possible persistence times, not a short list of discrete moves."
        },
        {
          type: "fill",
          q: "Because a persistence time can take any value on a continuum, the war of attrition has a ____ strategy space.",
          answer: "continuous",
          accept: ["continuous"],
          explain: "Any non-negative waiting time is allowed, so the set of strategies is continuous rather than discrete."
        },
        {
          type: "match",
          q: "Match each game to its strategy set.",
          pairs: [
            ["Hawk-Dove", "A small discrete set of pure moves"],
            ["War of attrition", "A continuous range of persistence times"],
            ["A strategy in the war of attrition", "A single number, a giving-up time"]
          ],
          explain: "Hawk-Dove offers a couple of discrete moves; the war of attrition offers a continuum, each strategy being one giving-up time."
        },
        {
          type: "mcq",
          q: "How many distinct pure strategies does a continuous war of attrition allow?",
          choices: [
            "Exactly two",
            "Exactly three",
            "A finite handful",
            "Infinitely many, one for each possible persistence time"
          ],
          answer: 3,
          explain: "Since any waiting time on the continuum is a valid strategy, there are infinitely many pure strategies."
        },
        {
          type: "truefalse",
          q: "A pure strategy in the war of attrition can be written as a single non-negative number t, the time the animal will persist.",
          answer: true,
          explain: "Each pure strategy corresponds to one specific persistence time t, a single number that is at least zero."
        },
        {
          type: "fill",
          q: "Choosing a strategy in this game means deciding how ____ to persist before giving up.",
          answer: "long",
          accept: ["long"],
          explain: "The only decision is duration: how long the animal will hold out before quitting."
        }
      ]
    },
    {
      id: "l147",
      title: "No pure ESS exists",
      intro: "No single fixed persistence time can be evolutionarily stable, because a mutant can always do better against it.",
      questions: [
        {
          type: "mcq",
          q: "Suppose every individual in a population always persists for exactly the same fixed time T. Which mutant can invade?",
          choices: [
            "One that persists for a slightly longer time, T plus a little",
            "One that persists for exactly T as well",
            "One that never enters any contest",
            "No mutant can ever invade a fixed strategy"
          ],
          answer: 0,
          explain: "A mutant waiting just a moment longer than T wins every contest against the residents, gaining V for almost the same cost."
        },
        {
          type: "truefalse",
          q: "A population in which everyone waits exactly the same fixed time is an evolutionarily stable strategy.",
          answer: false,
          explain: "Any fixed time can be beaten by a mutant that waits slightly longer, so no fixed time is an ESS."
        },
        {
          type: "fill",
          q: "Any pure, fixed-time strategy in the war of attrition is ____ by a mutant playing a different time.",
          answer: "invadable",
          accept: ["invadable", "invaded"],
          explain: "Every fixed persistence time is invadable, which is exactly why no pure strategy can be stable."
        },
        {
          type: "mcq",
          q: "Against a population all playing time T, what payoff does a mutant playing T plus a tiny bit get?",
          choices: [
            "It loses every contest",
            "It wins every contest, gaining V for about the same cost",
            "It always ties and gains nothing",
            "It is immediately driven extinct"
          ],
          answer: 1,
          explain: "By outlasting every resident by a hair, the mutant wins the resource each time while paying almost the same time cost."
        },
        {
          type: "order",
          q: "Put the reasoning that rules out a pure ESS in order.",
          items: [
            "Assume every resident persists for the same fixed time T",
            "Introduce a mutant that persists for T plus a little",
            "The mutant wins every contest against residents",
            "The mutant spreads, so fixed time T was not stable"
          ],
          explain: "Starting from a uniform fixed time, a slightly-longer mutant wins everything and spreads, proving the fixed time unstable."
        },
        {
          type: "truefalse",
          q: "Since no single fixed time is stable, the ESS of the war of attrition must be a mixed (randomized) strategy.",
          answer: true,
          explain: "Because every pure strategy is invadable, stability can only come from a probability distribution over persistence times."
        },
        {
          type: "match",
          q: "Match each candidate pure strategy to the mutant that beats it.",
          pairs: [
            ["Everyone waits time T", "A mutant waiting slightly longer than T"],
            ["Everyone gives up instantly (T = 0)", "A mutant that waits a tiny positive time and wins V cheaply"],
            ["A pure ESS", "Does not exist in the war of attrition"]
          ],
          explain: "Whatever fixed time the population adopts, some deviant time exploits it, so no pure ESS survives."
        }
      ]
    },
    {
      id: "l148",
      title: "The mixed ESS distribution",
      intro: "The evolutionarily stable solution is not one time but a probability distribution of giving-up times shaped like a negative exponential.",
      questions: [
        {
          type: "mcq",
          q: "What form does the ESS of the war of attrition take?",
          choices: [
            "A single best fixed persistence time",
            "A probability distribution over persistence times, that is, a mixed strategy",
            "Always giving up immediately",
            "Always persisting to the maximum possible time"
          ],
          answer: 1,
          explain: "The stable solution is a mixed strategy: each contestant draws its giving-up time at random from a set distribution."
        },
        {
          type: "fill",
          q: "The ESS giving-up times follow a negative ____ distribution.",
          answer: "exponential",
          accept: ["exponential", "negative exponential"],
          explain: "Maynard Smith showed the stable spread of persistence times is a negative exponential distribution."
        },
        {
          type: "truefalse",
          q: "At the ESS, the probability density of persisting until time t is p(t) = (1/V) times e to the power of minus t over V.",
          answer: true,
          explain: "The stable density is p(t) = (1/V) e^(-t/V), where V is the resource value in cost units."
        },
        {
          type: "mcq",
          q: "For the ESS distribution p(t) = (1/V)e^(-t/V), what is the mean (average) giving-up time?",
          choices: [
            "Zero",
            "V, the value of the resource",
            "Two times V",
            "Infinite"
          ],
          answer: 1,
          explain: "An exponential distribution with rate 1/V has mean V, so the average giving-up time equals the resource value."
        },
        {
          type: "truefalse",
          q: "At the mixed ESS, every persistence time within the distribution's range yields the same expected payoff.",
          answer: true,
          explain: "This equal-payoff or equalizer condition is precisely what makes the random mixture stable: no time is better than any other."
        },
        {
          type: "fill",
          q: "Because all persistence times earn equal expected payoff, no single time is favored, so the stable solution must be a ____ strategy.",
          answer: "mixed",
          accept: ["mixed", "randomized", "random"],
          explain: "With every time equally good, the population settles on a mixed strategy that randomizes over those times."
        },
        {
          type: "match",
          q: "Match each feature of the war-of-attrition ESS to its value.",
          pairs: [
            ["Shape of the distribution", "Negative exponential"],
            ["Mean giving-up time", "Equal to V"],
            ["Expected payoff across allowed times", "The same for every time"],
            ["Type of strategy", "Mixed (randomized)"]
          ],
          explain: "The ESS is an exponential mixed strategy with mean V, and it equalizes the payoff of every persistence time it uses."
        }
      ]
    },
    {
      id: "l149",
      title: "Persistence proportional to value",
      intro: "The more a resource is worth, the longer contestants persist, and the ESS distribution scales directly with that value.",
      questions: [
        {
          type: "mcq",
          q: "How does the average persistence time at the ESS change as the resource value V rises?",
          choices: [
            "It falls toward zero",
            "It stays fixed regardless of V",
            "It rises in proportion to V",
            "It becomes infinite at any value"
          ],
          answer: 2,
          explain: "Since the mean giving-up time equals V, raising the resource value raises expected persistence in direct proportion."
        },
        {
          type: "truefalse",
          q: "Contestants should generally be willing to persist longer for more valuable resources.",
          answer: true,
          explain: "Greater value justifies a greater cost, so animals are predicted to hold out longer when more is at stake."
        },
        {
          type: "fill",
          q: "At the ESS, the mean giving-up time is exactly equal to the resource value ____.",
          answer: "V",
          accept: ["v", "value"],
          explain: "The exponential ESS has mean V, tying average persistence directly to what the resource is worth."
        },
        {
          type: "mcq",
          q: "In an asymmetric war of attrition where individuals value the resource differently, how long should each persist?",
          choices: [
            "The same length of time for everyone",
            "In proportion to its own valuation of the resource",
            "Always the shortest possible time",
            "At random, ignoring the resource's worth"
          ],
          answer: 1,
          explain: "An individual should be willing to wait in proportion to how much the resource is worth to it, so those valuing it more persist longer."
        },
        {
          type: "truefalse",
          q: "Doubling the value of the contested resource leaves the average contest length unchanged.",
          answer: false,
          explain: "Because mean persistence scales with V, doubling the value roughly doubles the expected contest length."
        },
        {
          type: "order",
          q: "Order these contests from shortest to longest expected duration, by resource value.",
          items: [
            "A resource barely worth anything",
            "A moderately valuable resource",
            "A highly valuable resource"
          ],
          explain: "Expected persistence grows with value, so the least valuable resource yields the briefest contest and the most valuable the longest."
        },
        {
          type: "match",
          q: "Match each resource value to its predicted contest.",
          pairs: [
            ["Low value", "Brief contest, quick giving up"],
            ["High value", "Prolonged, hard-fought contest"],
            ["Mean persistence time", "Equals the value V"]
          ],
          explain: "Cheap resources get short fights, valuable resources get long ones, and on average persistence equals V."
        }
      ]
    },
    {
      id: "l150",
      title: "Bluffing and honesty",
      intro: "In the pure war of attrition, animals cannot honestly advertise how long they intend to persist, so signals of intent are unreliable.",
      questions: [
        {
          type: "mcq",
          q: "In the pure war of attrition, can a display honestly reveal how long an animal intends to persist?",
          choices: [
            "Yes, such displays are always perfectly honest",
            "No, signals of intended persistence are not evolutionarily stable",
            "Only the winner's display is honest",
            "Only displays given in daylight are honest"
          ],
          answer: 1,
          explain: "Because exaggerating intent costs nothing, signals of intended persistence cannot be evolutionarily stable and so cannot be trusted."
        },
        {
          type: "truefalse",
          q: "Maynard Smith argued that cost-free signals of intended persistence cannot be evolutionarily stable in the war of attrition.",
          answer: true,
          explain: "He showed that if signalling intent is free, any animal can bluff, so such signals are driven to unreliability."
        },
        {
          type: "fill",
          q: "A display that exaggerates or misrepresents an animal's true resolve is called a ____.",
          answer: "bluff",
          accept: ["bluff", "bluffing"],
          explain: "Overstating one's willingness to persist is bluffing, and in the pure war of attrition nothing stops it."
        },
        {
          type: "mcq",
          q: "Why can't animals honestly signal their intended persistence at the ESS?",
          choices: [
            "Because all persistence times give equal expected payoff, so there is nothing to lose by exaggerating",
            "Because animals physically cannot see one another",
            "Because signalling is forbidden by law",
            "Because the resource has no value at all"
          ],
          answer: 0,
          explain: "With every persistence time earning the same expected payoff, there is no cost to claiming you will persist longer than you truly will."
        },
        {
          type: "truefalse",
          q: "Honest signalling can still evolve if a signal is costly and reveals an animal's true fighting ability or condition.",
          answer: true,
          explain: "Under Zahavi's handicap principle (1975), a signal too costly to fake can reliably reveal genuine quality or state."
        },
        {
          type: "match",
          q: "Match each signal type to its reliability.",
          pairs: [
            ["Signal of intended persistence", "Unreliable, essentially a bluff"],
            ["Costly signal of true state or ability", "Can be honest"],
            ["Handicap principle", "Amotz Zahavi, 1975"]
          ],
          explain: "Cheap signals of intent are bluffs, but costly signals of real ability can stay honest, as Zahavi's handicap principle explains."
        },
        {
          type: "fill",
          q: "For a signal of fighting ability to stay honest under the handicap principle, it must be ____ to produce.",
          answer: "costly",
          accept: ["costly", "expensive"],
          explain: "Honesty is enforced by cost: only a genuinely capable animal can afford the costly signal, so faking it does not pay."
        }
      ]
    },
    {
      id: "l151",
      title: "Energetic costs of waiting",
      intro: "In real contests the cost is not just clock time but the energy an animal burns while persisting, so stamina and condition matter.",
      questions: [
        {
          type: "mcq",
          q: "In the basic war of attrition, the cost each contestant pays is proportional to what?",
          choices: [
            "The elapsed time of the contest",
            "The color of the opponent",
            "The number of onlookers watching",
            "Nothing, because contests are free"
          ],
          answer: 0,
          explain: "In the simplest model the cost accrues steadily with time, so both animals pay a cost proportional to how long the contest runs."
        },
        {
          type: "truefalse",
          q: "In the energetic war of attrition, the real cost is total energy expended, not merely time on the clock.",
          answer: true,
          explain: "Payne and Pagel (1996) modelled displays of endurance where the cost that matters is accumulated energy spent, not just elapsed time."
        },
        {
          type: "fill",
          q: "Because persisting burns reserves, contest cost is best measured as accumulated ____ rather than raw clock time.",
          answer: "energy",
          accept: ["energy", "effort"],
          explain: "Energetic models price attrition in the energy an animal expends, since that is what actually depletes it."
        },
        {
          type: "mcq",
          q: "Two contestants display for the same length of time yet pay different costs. Why?",
          choices: [
            "They burn energy at different rates or differ in stamina",
            "One of them is completely invisible",
            "Time literally runs differently for each",
            "Cost cannot possibly differ if the time is equal"
          ],
          answer: 0,
          explain: "If cost is energy rather than time, an animal that expends energy faster or has less to spare pays more for the same duration."
        },
        {
          type: "truefalse",
          q: "The energetic model predicts that, all else equal, an individual in poorer condition should give up sooner.",
          answer: true,
          explain: "A contestant with smaller reserves reaches exhaustion earlier, so it is expected to quit before a fitter rival."
        },
        {
          type: "match",
          q: "Match each model or factor to what it says about cost.",
          pairs: [
            ["Basic war of attrition", "Cost proportional to time"],
            ["Energetic war of attrition", "Cost proportional to accumulated energy"],
            ["Stamina or condition", "Sets the rate at which cost is paid"],
            ["Prediction", "Fitter animals can persist longer"]
          ],
          explain: "The basic model prices attrition in time; the energetic model prices it in energy, so stamina governs who can hold out."
        },
        {
          type: "order",
          q: "Order the stages of cost accumulation in an energetic war of attrition.",
          items: [
            "The contest begins and both animals display",
            "Energy reserves are burned as displaying continues",
            "One contestant's reserves run low",
            "That weaker contestant gives up first"
          ],
          explain: "As displaying drains energy, the animal whose reserves deplete first hits its limit and quits."
        }
      ]
    },
    {
      id: "l152",
      title: "Empirical contests",
      intro: "Real animals, from dung flies to display-locked lizards, show the timing and persistence patterns predicted by the war of attrition.",
      questions: [
        {
          type: "mcq",
          q: "Which biologist is famous for studying timing and competition decisions in the yellow dung fly (Scathophaga stercoraria)?",
          choices: [
            "Gregor Mendel",
            "Geoffrey Parker",
            "Niko Tinbergen",
            "Karl von Frisch"
          ],
          answer: 1,
          explain: "Geoffrey Parker's classic yellow dung fly studies helped found behavioural ecology and the analysis of optimal timing in male competition."
        },
        {
          type: "truefalse",
          q: "Male yellow dung flies gather at fresh cattle droppings, where decisions about how long to stay and search are ecologically important.",
          answer: true,
          explain: "Males compete for females arriving at fresh dung, so how long each male persists and searches has real fitness consequences."
        },
        {
          type: "match",
          q: "Match each empirical example or term to its description.",
          pairs: [
            ["Yellow dung fly", "Geoffrey Parker's classic study system for contest and timing decisions"],
            ["Territorial lizard displays", "Prolonged standoffs settled when one male retreats"],
            ["War-of-attrition prediction", "Persist longer for a more valuable resource"],
            ["Loser", "The first contestant to give up"]
          ],
          explain: "Dung flies and display-locked lizards both illustrate contests of endurance in which the first to quit loses."
        },
        {
          type: "mcq",
          q: "In prolonged lizard display standoffs, how does the contest typically end?",
          choices: [
            "Both animals die on the spot",
            "One individual gives up and retreats while the other holds the site",
            "A referee steps in to separate them",
            "The two territories permanently merge"
          ],
          answer: 1,
          explain: "Such display contests are won by persistence: the less-motivated lizard eventually backs down and the persister keeps the territory."
        },
        {
          type: "truefalse",
          q: "Empirical studies have never found any support for war-of-attrition predictions.",
          answer: false,
          explain: "Many systems fit the predictions, for example animals persisting longer over more valuable resources, so the model has real empirical support."
        },
        {
          type: "fill",
          q: "Contests decided by which animal persists longest, rather than by a single decisive blow, illustrate the war of ____.",
          answer: "attrition",
          accept: ["attrition"],
          explain: "Endurance contests where the first to quit loses are exactly what the war of attrition describes."
        },
        {
          type: "order",
          q: "Order the stages of a prolonged lizard display contest.",
          items: [
            "Two males meet at a territory boundary",
            "Each performs escalating displays",
            "A prolonged, costly standoff develops",
            "The less-motivated male retreats",
            "The persister keeps the territory"
          ],
          explain: "The rivals meet, escalate their displays into a costly standoff, and the fight ends when one retreats, leaving the persister in control."
        }
      ]
    }
  ]
});
