window.ACADEMY.addUnit("egt", {
  id: "unit-20",
  title: "Asymmetric Contests and Ownership",
  color: "#3b74e0",
  icon: "🚩",
  description: "How arbitrary differences between rivals, such as size, role, or who owns a resource, resolve animal conflicts without costly fighting.",
  lessons: [
    {
      id: "l153",
      title: "Asymmetries in contests",
      intro: "Real animal contests are rarely between identical opponents; differences in size, role, or ownership shape who wins.",
      questions: [
        {
          type: "mcq",
          q: "In evolutionary game theory, what does an 'asymmetry' between two contestants mean?",
          choices: [
            "A difference between the two contestants, such as size, role, or ownership",
            "That both contestants are exactly identical",
            "A tie in which neither animal wins",
            "A signal that a fight must escalate to injury"
          ],
          answer: 0,
          explain: "An asymmetry is simply any difference between the rivals, and these differences often decide the contest."
        },
        {
          type: "truefalse",
          q: "Maynard Smith and Parker (1976) argued that asymmetries between contestants can be used to settle contests.",
          answer: true,
          explain: "Their paper 'The logic of asymmetric contests' showed that differences between rivals can settle fights cheaply."
        },
        {
          type: "fill",
          q: "A difference in body ____ is one of the most common asymmetries that decides who wins a contest.",
          answer: "size",
          accept: ["size"],
          explain: "Larger, stronger animals usually have the advantage, so size is a very common decisive asymmetry."
        },
        {
          type: "match",
          q: "Match each type of asymmetry to what it describes.",
          pairs: [
            ["Size asymmetry", "A difference in body strength or bulk"],
            ["Role asymmetry", "A difference such as owner versus intruder"],
            ["Resource asymmetry", "A difference in how much the prize is worth to each"]
          ],
          explain: "Contests can differ in fighting ability (size), in role (owner vs intruder), and in the value of the resource to each side."
        },
        {
          type: "mcq",
          q: "Which of the following is NOT typically classed as an asymmetry in animal contests?",
          choices: [
            "Difference in size between the two rivals",
            "Difference in whether an animal owns the territory",
            "The two rivals being perfectly identical in every respect",
            "Difference in the value of the resource to each"
          ],
          answer: 2,
          explain: "Identical rivals have no asymmetry to exploit; asymmetry requires some difference between the two contestants."
        },
        {
          type: "order",
          q: "Order these contest asymmetries from the most directly tied to fighting ability to the most arbitrary.",
          items: [
            "Body size and strength",
            "Value of the resource to each animal",
            "Which animal happens to be the owner"
          ],
          explain: "Size reflects fighting ability, resource value affects the payoff, and ownership can be a purely arbitrary cue."
        },
        {
          type: "truefalse",
          q: "Asymmetries are unimportant because contests are always decided purely by random chance.",
          answer: false,
          explain: "Asymmetries such as size and ownership systematically bias who wins; contests are not pure chance."
        }
      ]
    },
    {
      id: "l154",
      title: "Uncorrelated asymmetry",
      intro: "Some differences between rivals carry no information about fighting ability or reward, yet contestants can still use them to settle a fight.",
      questions: [
        {
          type: "mcq",
          q: "What is an 'uncorrelated asymmetry'?",
          choices: [
            "A difference between contestants that is unrelated to fighting ability or the value of the resource",
            "A difference in body size that reliably predicts the winner",
            "A tie that must always be broken by fighting",
            "A difference in how hungry each animal happens to be"
          ],
          answer: 0,
          explain: "An uncorrelated asymmetry is arbitrary: it does not track who is stronger or who values the prize more."
        },
        {
          type: "fill",
          q: "An uncorrelated asymmetry is an ____ cue, carrying no information about who would win an all-out fight.",
          answer: "arbitrary",
          accept: ["arbitrary"],
          explain: "The cue is arbitrary because it is uncorrelated with fighting ability or resource value."
        },
        {
          type: "truefalse",
          q: "A classic example of an uncorrelated asymmetry is which contestant arrived first and 'owns' the site.",
          answer: true,
          explain: "Ownership or prior residence is the textbook example of an arbitrary, uncorrelated asymmetry."
        },
        {
          type: "mcq",
          q: "Why is ownership often treated as an uncorrelated asymmetry?",
          choices: [
            "Because being the owner usually makes an animal much stronger",
            "Because who owns a site may be unrelated to fighting ability or resource value, yet still differs between the two",
            "Because owners always lose their contests",
            "Because ownership changes the physical size of both animals"
          ],
          answer: 1,
          explain: "Ownership can be assigned by chance of arrival and need not reflect strength or resource value, so it is uncorrelated."
        },
        {
          type: "match",
          q: "Match each kind of asymmetry to its definition.",
          pairs: [
            ["Uncorrelated asymmetry", "Arbitrary difference unrelated to payoffs"],
            ["Correlated asymmetry", "Difference tied to fighting ability (RHP)"],
            ["Payoff asymmetry", "Difference in resource value to each rival"]
          ],
          explain: "Only the uncorrelated asymmetry is arbitrary; the others track fighting ability or the value of the prize."
        },
        {
          type: "truefalse",
          q: "For an asymmetry to be uncorrelated, it must strongly predict which animal has greater strength.",
          answer: false,
          explain: "The opposite is true: an uncorrelated asymmetry carries no information about strength or payoff."
        },
        {
          type: "order",
          q: "Rank these asymmetries from most arbitrary (uncorrelated) to most tied to real fighting power.",
          items: [
            "Which animal was there first",
            "How valuable the food is to each",
            "Which animal is larger and stronger"
          ],
          explain: "Prior arrival is arbitrary, resource value is a payoff difference, and size tracks true fighting power."
        }
      ]
    },
    {
      id: "l155",
      title: "The Bourgeois strategy",
      intro: "The Bourgeois strategy uses an arbitrary ownership cue: fight when you own the resource, but back down when you are the intruder.",
      questions: [
        {
          type: "mcq",
          q: "What does the Bourgeois strategy prescribe?",
          choices: [
            "Always escalate, no matter your role",
            "Escalate if you are the owner, retreat if you are the intruder",
            "Always retreat, no matter your role",
            "Escalate only against physically smaller opponents"
          ],
          answer: 1,
          explain: "Bourgeois conditions behavior on the ownership role: Hawk as owner, Dove as intruder."
        },
        {
          type: "truefalse",
          q: "In the Hawk-Dove game with an ownership cue, Bourgeois can be an evolutionarily stable strategy (ESS).",
          answer: true,
          explain: "Maynard Smith showed that conditioning on an arbitrary role like ownership can be an ESS."
        },
        {
          type: "fill",
          q: "Under the Bourgeois strategy, an animal plays Hawk when it is the ____ and Dove when it is the intruder.",
          answer: "owner",
          accept: ["owner", "resident"],
          explain: "The owner escalates (Hawk) and the intruder yields (Dove), settling the contest by role."
        },
        {
          type: "mcq",
          q: "Who introduced and named the Bourgeois strategy?",
          choices: [
            "John Maynard Smith",
            "Charles Darwin",
            "Ronald Fisher",
            "W. D. Hamilton"
          ],
          answer: 0,
          explain: "John Maynard Smith coined 'Bourgeois' in his work on the evolution of animal contests."
        },
        {
          type: "match",
          q: "Match each element of the Bourgeois strategy to its behavior.",
          pairs: [
            ["Owner", "Plays Hawk (escalates)"],
            ["Intruder", "Plays Dove (retreats)"],
            ["Ownership cue", "Arbitrary signal that settles the contest"]
          ],
          explain: "Bourgeois maps the owner to Hawk and the intruder to Dove, using ownership as the settling cue."
        },
        {
          type: "truefalse",
          q: "The Bourgeois strategy requires owners to be physically stronger than intruders to work.",
          answer: false,
          explain: "Bourgeois works on a purely arbitrary ownership cue; it needs no strength difference between the rivals."
        },
        {
          type: "order",
          q: "Trace what happens when two Bourgeois players meet at a resource one of them owns.",
          items: [
            "One animal is the owner, the other is the intruder",
            "The owner escalates (Hawk) while the intruder retreats (Dove)",
            "The owner keeps the resource without a costly fight"
          ],
          explain: "Because both follow the same rule, the roles never collide and the contest ends cheaply."
        }
      ]
    },
    {
      id: "l156",
      title: "Respect for ownership",
      intro: "Respecting ownership is a convention that lets animals settle conflicts without paying the high cost of fighting.",
      questions: [
        {
          type: "mcq",
          q: "How does 'respect for ownership' reduce the cost of contests?",
          choices: [
            "By letting an agreed convention decide the winner instead of an injurious fight",
            "By forcing both animals to fight to the death",
            "By making the contested resource worthless",
            "By increasing the body size of the intruder"
          ],
          answer: 0,
          explain: "A convention such as 'the owner wins' settles disputes without the costs of escalation."
        },
        {
          type: "truefalse",
          q: "A convention like 'the owner wins' can settle a dispute even when it is arbitrary.",
          answer: true,
          explain: "Even an arbitrary rule works if both sides follow it, because it consistently breaks the deadlock."
        },
        {
          type: "fill",
          q: "Respecting ownership acts as a ____ that ends disputes without escalation.",
          answer: "convention",
          accept: ["convention", "rule"],
          explain: "A convention is a shared rule both animals follow, avoiding costly conflict."
        },
        {
          type: "match",
          q: "Match each term to its meaning in the context of settling contests.",
          pairs: [
            ["Convention", "Shared rule both animals follow"],
            ["Escalation", "Costly, risky fighting"],
            ["Respect for ownership", "Owner keeps the resource, intruder yields"]
          ],
          explain: "Following a convention lets rivals avoid escalation; respecting ownership is one such convention."
        },
        {
          type: "mcq",
          q: "Why might natural selection favor respecting an ownership convention?",
          choices: [
            "Because fighting is completely free of any cost",
            "Because avoiding costly fights raises average fitness when both sides follow the rule",
            "Because intruders always have higher fitness than owners",
            "Because owners are always the larger animal"
          ],
          answer: 1,
          explain: "When both sides skip injurious fights, the average payoff rises, so the convention can be favored."
        },
        {
          type: "truefalse",
          q: "Conventions that settle disputes cheaply are only useful when fighting has no cost.",
          answer: false,
          explain: "Conventions matter most precisely because fighting is costly; if fights were free there would be little to save."
        },
        {
          type: "order",
          q: "Order these outcomes from cheapest to most costly for the contestants.",
          items: [
            "Both respect ownership and the intruder yields",
            "A brief display before one retreats",
            "An all-out fight with injuries"
          ],
          explain: "Conventional yielding is cheapest, a short display costs a little more, and injurious combat is most costly."
        }
      ]
    },
    {
      id: "l157",
      title: "Speckled wood butterfly",
      intro: "Nick Davies's study of the speckled wood butterfly is a famous test of whether territory owners reliably win contests.",
      questions: [
        {
          type: "mcq",
          q: "In Davies's (1978) study, which speckled wood butterflies tended to win contests over sunspots?",
          choices: [
            "The resident (owner) of the sunspot",
            "Always the physically larger butterfly",
            "The intruder that arrived later",
            "Whichever butterfly happened to be hungrier"
          ],
          answer: 0,
          explain: "Davies found the resident male almost always won, with the intruder quickly retreating."
        },
        {
          type: "truefalse",
          q: "The speckled wood butterfly is scientifically named Pararge aegeria.",
          answer: true,
          explain: "Pararge aegeria is the speckled wood, the species Davies studied in Wytham Woods."
        },
        {
          type: "fill",
          q: "Male speckled wood butterflies compete for sunlit ____ on the forest floor, which help them attract mates.",
          answer: "spots",
          accept: ["spots", "sunspots", "patches"],
          explain: "Males defend patches of sunlight (sunspots), prime spots for intercepting females."
        },
        {
          type: "mcq",
          q: "In Davies's experiment, what happened when he tricked two butterflies into each believing it owned the same sunspot?",
          choices: [
            "Nothing changed; the intruder still fled instantly",
            "The contest escalated into a much longer spiral flight",
            "Both butterflies immediately left the forest",
            "The larger one always won at once"
          ],
          answer: 1,
          explain: "When both saw themselves as owner, the shared convention broke down and the spiral contest lasted far longer."
        },
        {
          type: "match",
          q: "Match each term from the speckled wood contest to its meaning.",
          pairs: [
            ["Resident", "The butterfly already holding the sunspot"],
            ["Intruder", "The butterfly that arrives later"],
            ["Spiral flight", "The escalated contest between rivals"]
          ],
          explain: "The resident normally wins; when roles conflict, rivals engage in a longer upward spiral flight."
        },
        {
          type: "truefalse",
          q: "Davies found that intruding speckled wood butterflies usually defeated the residents and took over the sunspot.",
          answer: false,
          explain: "It was the reverse: residents almost always kept the sunspot and intruders retreated."
        },
        {
          type: "order",
          q: "Sequence a typical speckled wood territory contest as Davies described it.",
          items: [
            "A male occupies a sunspot as resident",
            "An intruder arrives and a brief spiral flight begins",
            "The intruder retreats and the resident keeps the sunspot"
          ],
          explain: "Residency settled most contests quickly, with the intruder yielding after a short spiral flight."
        }
      ]
    },
    {
      id: "l158",
      title: "The paradoxical anti-Bourgeois",
      intro: "Mathematically, the mirror image of Bourgeois, retreat if you own it and escalate if you are the intruder, is also a stable strategy, though it is rarely seen.",
      questions: [
        {
          type: "mcq",
          q: "What does the anti-Bourgeois (paradoxical) strategy prescribe?",
          choices: [
            "Escalate if owner, retreat if intruder",
            "Retreat if owner, escalate if intruder",
            "Always escalate regardless of role",
            "Always retreat regardless of role"
          ],
          answer: 1,
          explain: "Anti-Bourgeois reverses the usual rule: the owner yields and the intruder escalates."
        },
        {
          type: "truefalse",
          q: "In the abstract Hawk-Dove game with an uncorrelated asymmetry, anti-Bourgeois is mathematically an ESS.",
          answer: true,
          explain: "The model has two mirror-image stable solutions: Bourgeois and anti-Bourgeois are both formal ESSs."
        },
        {
          type: "fill",
          q: "The anti-Bourgeois strategy is called ____ because the owner gives way to the intruder.",
          answer: "paradoxical",
          accept: ["paradoxical"],
          explain: "It seems paradoxical that the one already holding the resource is the one to retreat."
        },
        {
          type: "mcq",
          q: "Why is the anti-Bourgeois strategy almost never seen in nature, despite being a logical ESS?",
          choices: [
            "Because it is mathematically impossible",
            "Because owners are usually already present and often have more to gain, so 'owner retreats' rarely gets established",
            "Because intruders never actually exist in nature",
            "Because it always forces a fight to the death"
          ],
          answer: 1,
          explain: "Real biology (residents commonly value or defend the site) makes the owner-retreats rule hard to establish, so Bourgeois dominates."
        },
        {
          type: "match",
          q: "Match each strategy to what the owner does.",
          pairs: [
            ["Bourgeois", "Owner escalates, intruder retreats"],
            ["Anti-Bourgeois", "Owner retreats, intruder escalates"],
            ["Uncorrelated asymmetry", "The arbitrary ownership cue both use"]
          ],
          explain: "Both strategies read the same ownership cue but assign opposite behavior to the owner."
        },
        {
          type: "truefalse",
          q: "The fact that anti-Bourgeois is a logical ESS shows the ownership convention could in principle run in either direction.",
          answer: true,
          explain: "The math is symmetric, so either 'owner wins' or 'owner yields' could be stable; biology usually picks the former."
        },
        {
          type: "order",
          q: "Trace what happens when two anti-Bourgeois players meet at a resource one of them owns.",
          items: [
            "One animal owns the resource, the other is the intruder",
            "The owner retreats (Dove) while the intruder escalates (Hawk)",
            "The intruder wins the resource without a costly fight"
          ],
          explain: "Under the reversed convention the roles still never collide, so the intruder takes the resource cheaply."
        }
      ]
    },
    {
      id: "l159",
      title: "Assessment and resource-holding potential",
      intro: "When asymmetries reflect real fighting ability, animals assess each other's resource-holding potential and the weaker one often withdraws.",
      questions: [
        {
          type: "mcq",
          q: "What does 'resource-holding potential' (RHP) mean?",
          choices: [
            "An animal's ability to win an all-out fight, based on traits like size and strength",
            "The arbitrary cue of who owns a site",
            "The value of the resource to a passing bystander",
            "The total number of offspring an animal has produced"
          ],
          answer: 0,
          explain: "RHP measures fighting ability; higher-RHP animals are more likely to win escalated contests."
        },
        {
          type: "truefalse",
          q: "The concept of resource-holding potential was introduced by Geoffrey Parker in 1974.",
          answer: true,
          explain: "Parker's 1974 paper on assessment strategy introduced RHP as a measure of fighting ability."
        },
        {
          type: "fill",
          q: "Before escalating, animals often ____ each other's fighting ability, and the weaker one withdraws.",
          answer: "assess",
          accept: ["assess", "gauge"],
          explain: "By assessing RHP, contestants avoid fights they are likely to lose."
        },
        {
          type: "mcq",
          q: "When a contest is settled by a correlated asymmetry, what usually decides the winner?",
          choices: [
            "A coin-flip arbitrary cue with no meaning",
            "The contestant with greater resource-holding potential (RHP)",
            "Whichever animal happens to be the intruder",
            "The animal that values the resource least"
          ],
          answer: 1,
          explain: "A correlated asymmetry tracks fighting ability, so the higher-RHP contestant tends to win."
        },
        {
          type: "match",
          q: "Match each concept to its meaning.",
          pairs: [
            ["RHP", "Fighting ability from size and strength"],
            ["Assessment", "Sizing up a rival before escalating"],
            ["Correlated asymmetry", "Difference tied to real fighting power"]
          ],
          explain: "Assessment lets an animal estimate a rival's RHP, a correlated asymmetry that predicts the fight's outcome."
        },
        {
          type: "truefalse",
          q: "Assessing a rival's RHP lets animals avoid fights they are likely to lose.",
          answer: true,
          explain: "If assessment reveals a stronger opponent, retreating avoids the cost of a losing fight."
        },
        {
          type: "order",
          q: "Order the steps of a contest settled by assessment of fighting ability.",
          items: [
            "Two rivals meet and display",
            "Each assesses the other's resource-holding potential",
            "The weaker rival withdraws before serious injury"
          ],
          explain: "Displays reveal RHP, and the weaker animal quits early, sparing both the cost of a full fight."
        }
      ]
    },
    {
      id: "l160",
      title: "Conventions replacing combat",
      intro: "Across the animal world, arbitrary conventions often replace dangerous combat, letting rivals settle disputes at low cost.",
      questions: [
        {
          type: "mcq",
          q: "How can an arbitrary convention replace combat?",
          choices: [
            "By giving both rivals a shared rule to decide the winner without fighting",
            "By making every contest end in injury",
            "By removing all resources worth fighting over",
            "By forcing the larger animal to always lose"
          ],
          answer: 0,
          explain: "A shared convention settles who wins so the rivals never have to pay the cost of an actual fight."
        },
        {
          type: "truefalse",
          q: "Conventional settlement of contests can persist even when the deciding cue is arbitrary.",
          answer: true,
          explain: "As Bourgeois shows, an arbitrary cue such as ownership can support a stable, lasting convention."
        },
        {
          type: "fill",
          q: "Ritualized displays and ownership rules are ____ that let animals avoid costly combat.",
          answer: "conventions",
          accept: ["conventions", "rules"],
          explain: "These shared conventions substitute for fighting, reducing the risk of injury."
        },
        {
          type: "match",
          q: "Match each term to its role in resolving contests.",
          pairs: [
            ["Convention", "Arbitrary shared rule settling a fight"],
            ["Combat", "Escalated fighting with injury risk"],
            ["Bourgeois convention", "Owner wins, intruder yields"]
          ],
          explain: "Conventions replace combat; Bourgeois is a specific ownership convention that ends contests cheaply."
        },
        {
          type: "mcq",
          q: "What is the main evolutionary advantage of conventions that replace combat?",
          choices: [
            "They increase the injury rate among rivals",
            "They lower the average cost of contests, raising fitness",
            "They make contested resources disappear entirely",
            "They eliminate every asymmetry between animals"
          ],
          answer: 1,
          explain: "By avoiding injurious fights, conventions raise the average payoff and thus fitness."
        },
        {
          type: "truefalse",
          q: "Because conventions are arbitrary, they can never be evolutionarily stable.",
          answer: false,
          explain: "Arbitrary conventions such as Bourgeois can be fully evolutionarily stable, which is exactly why they persist."
        },
        {
          type: "order",
          q: "Order these ways of settling a contest from most conventional (least violent) to most violent.",
          items: [
            "Following an ownership convention with no fight",
            "A ritualized display of strength",
            "An escalated fight with real injury"
          ],
          explain: "A pure convention is least costly, a ritualized display costs a little more, and injurious combat is most violent."
        }
      ]
    }
  ]
});
