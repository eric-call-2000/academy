window.ACADEMY.addUnit("behaviorism", {
  id: "unit-16",
  title: "Choice, Matching, and Behavioral Economics",
  color: "#14a58f",
  icon: "⚖️",
  description: "Quantitative laws describing how organisms allocate behavior among competing options, from the matching law to demand and delay discounting.",
  lessons: [
    {
      id: "l121",
      title: "Concurrent Schedules",
      intro: "Concurrent schedules place two or more reinforcement options in front of an organism at once so that choice itself can be measured.",
      questions: [
        {
          type: "mcq",
          q: "In operant research, what does a 'concurrent schedule' arrange?",
          choices: [
            "Two or more reinforcement schedules available at the same time, so the organism can choose between them",
            "A single schedule whose rate changes every minute",
            "A schedule that delivers reinforcement only after a fixed delay",
            "A punishment schedule paired with extinction"
          ],
          answer: 0,
          explain: "Concurrent schedules run two (or more) schedules simultaneously on separate responses, letting researchers watch how behavior is divided between them -- the operant definition of choice."
        },
        {
          type: "truefalse",
          q: "Concurrent schedules let researchers study choice by measuring how an organism distributes its behavior between two options.",
          answer: true,
          explain: "Because both options are live at once, the distribution of responding across them is a direct, quantitative measure of preference."
        },
        {
          type: "fill",
          q: "Choice is typically measured as the ____ response rate on one key -- its responses divided by the total responses on both keys.",
          answer: "relative",
          accept: ["relative", "proportional", "proportion"],
          explain: "Relative response rate, B1 / (B1 + B2), expresses one option's share of total behavior, which is what the matching law predicts."
        },
        {
          type: "match",
          q: "Match each concurrent-schedule term to its meaning.",
          pairs: [
            ["Concurrent schedule", "Two or more schedules operating at the same time"],
            ["Relative response rate", "One option's responses as a fraction of the total"],
            ["Changeover delay", "A brief pause that blocks reinforcement right after switching keys"]
          ],
          explain: "These are the core tools for turning free-choice behavior into numbers you can analyze."
        },
        {
          type: "mcq",
          q: "Why do experimenters often add a 'changeover delay' (COD) to concurrent schedules?",
          choices: [
            "To make each reinforcer larger",
            "To keep rapid alternating between keys from being accidentally reinforced",
            "To punish every response",
            "To guarantee equal reinforcement on both keys"
          ],
          answer: 1,
          explain: "Without a COD, a reinforcer that arrives just after a switch can reward the switching itself; the short delay ensures reinforcement follows genuine responding on an option."
        },
        {
          type: "order",
          q: "Order the steps in a two-key concurrent-choice procedure, from first to last.",
          items: [
            "Both keys become available simultaneously",
            "The animal allocates its pecks between the two keys",
            "The researcher computes the relative response rate on each key"
          ],
          explain: "The measured allocation across simultaneously available options is exactly what choice research is built to capture."
        },
        {
          type: "truefalse",
          q: "In a concurrent schedule, an organism can respond to only one option and never the other.",
          answer: false,
          explain: "Both options remain available throughout, and the organism is free to move between them; that freedom is the whole point."
        }
      ]
    },
    {
      id: "l122",
      title: "The Matching Law",
      intro: "Herrnstein's matching law states that the proportion of responses to an option matches the proportion of reinforcement it delivers.",
      questions: [
        {
          type: "mcq",
          q: "Herrnstein's matching law (1961) says relative response rate matches the relative rate of what?",
          choices: [
            "Punishment",
            "Response effort",
            "Reinforcement",
            "Deprivation"
          ],
          answer: 2,
          explain: "The share of behavior an option receives tends to equal that option's share of the total reinforcement obtained."
        },
        {
          type: "fill",
          q: "The matching law is written B1 / (B1 + B2) = R1 / (R1 + R2), where B is behavior and R stands for ____.",
          answer: "reinforcement",
          accept: ["reinforcement", "reinforcers", "reinforcement rate", "reward"],
          explain: "R is the rate of reinforcement earned on each option; the equation sets the behavior ratio equal to the reinforcement ratio."
        },
        {
          type: "truefalse",
          q: "According to the matching law, if one key delivers 75% of all reinforcers, an animal will tend to make about 75% of its responses on that key.",
          answer: true,
          explain: "Matching means response proportions track reinforcement proportions, so a 75% reinforcement share predicts roughly a 75% response share."
        },
        {
          type: "mcq",
          q: "A pigeon earns 30 reinforcers per hour on the left key and 10 per hour on the right key. What does the matching law predict?",
          choices: [
            "It makes about 75% of its responses on the left key",
            "It responds only on the right key",
            "It splits responses exactly 50/50",
            "It stops responding entirely"
          ],
          answer: 0,
          explain: "The left key provides 30 of 40 total reinforcers, or 75%, so matching predicts about 75% of responses go to the left key."
        },
        {
          type: "match",
          q: "Match each item to its description.",
          pairs: [
            ["Matching law", "Response proportions equal reinforcement proportions"],
            ["Richard Herrnstein", "Psychologist who first described matching in 1961"],
            ["Exclusive preference", "Responding to one option only -- a departure from matching"]
          ],
          explain: "The matching law is the central quantitative principle of choice; exclusive preference is a boundary condition it does not predict on typical variable schedules."
        },
        {
          type: "order",
          q: "Put the logic of the matching law in order.",
          items: [
            "Measure the reinforcers earned on each option",
            "Compute each option's share of the total reinforcement",
            "Predict that each option's response share will equal its reinforcement share"
          ],
          explain: "Matching turns measured reinforcement proportions directly into predicted response proportions."
        },
        {
          type: "truefalse",
          q: "Herrnstein first demonstrated matching using rats pressing levers for food.",
          answer: false,
          explain: "His 1961 study used pigeons pecking illuminated keys on concurrent variable-interval schedules for food."
        }
      ]
    },
    {
      id: "l123",
      title: "Undermatching and Bias",
      intro: "Real choice data usually deviate from perfect matching in two systematic ways: undermatching and bias.",
      questions: [
        {
          type: "mcq",
          q: "Undermatching, the most common deviation from perfect matching, means the organism...",
          choices: [
            "Responds even more extremely than reinforcement proportions predict",
            "Distributes behavior less extremely than reinforcement proportions predict",
            "Ignores reinforcement entirely",
            "Always chooses the leaner option"
          ],
          answer: 1,
          explain: "In undermatching, choice is pulled toward 50/50: the richer option gets somewhat less than strict matching predicts, and the leaner option gets somewhat more."
        },
        {
          type: "fill",
          q: "The generalized matching law adds a sensitivity exponent; when that sensitivity is ____ than 1, the result is undermatching.",
          answer: "less",
          accept: ["less", "lower", "smaller"],
          explain: "Baum's generalized matching law, log(B1/B2) = a log(R1/R2) + log b, produces undermatching whenever the sensitivity exponent a is below 1."
        },
        {
          type: "truefalse",
          q: "Bias is a consistent preference for one alternative that is independent of the rate of reinforcement it provides.",
          answer: true,
          explain: "Bias, captured by the constant b in the generalized matching law, shifts choice toward one side regardless of the reinforcement ratio."
        },
        {
          type: "mcq",
          q: "Which factor is a common source of bias in a concurrent-choice study?",
          choices: [
            "The two options provide identical reinforcers",
            "A side preference, or one response being easier or more preferred than the other",
            "Using the matching-law equation to analyze data",
            "Measuring the relative response rate"
          ],
          answer: 1,
          explain: "Bias arises from asymmetries unrelated to reinforcement rate -- a favored side, an easier response, or a preferred reinforcer type."
        },
        {
          type: "match",
          q: "Match each deviation or parameter to its meaning.",
          pairs: [
            ["Undermatching", "Responding less extremely than the reinforcement ratio"],
            ["Overmatching", "Responding more extremely than the reinforcement ratio"],
            ["Bias", "Preference unrelated to reinforcement rate"],
            ["Sensitivity (a)", "Exponent measuring how strongly choice tracks reinforcement"]
          ],
          explain: "The generalized matching law separates how strongly choice follows reinforcement (sensitivity) from a constant leaning toward one side (bias)."
        },
        {
          type: "order",
          q: "Order these outcomes by their sensitivity value, from lowest to highest.",
          items: [
            "Undermatching (sensitivity below 1)",
            "Perfect matching (sensitivity equal to 1)",
            "Overmatching (sensitivity above 1)"
          ],
          explain: "Sensitivity indexes how extreme choice is relative to the reinforcement ratio; it rises from undermatching through perfect matching to overmatching."
        },
        {
          type: "truefalse",
          q: "Undermatching is rare, and most subjects instead show overmatching.",
          answer: false,
          explain: "Undermatching is the typical finding; overmatching is comparatively uncommon."
        }
      ]
    },
    {
      id: "l124",
      title: "Melioration",
      intro: "Melioration is a moment-to-moment mechanism in which organisms keep shifting toward the locally richer option, producing the overall matching pattern.",
      questions: [
        {
          type: "mcq",
          q: "Melioration theory (Herrnstein and Vaughan, 1980) says organisms shift behavior toward the option with the higher...",
          choices: [
            "Total lifetime payoff",
            "Local rate of reinforcement",
            "Response effort",
            "Delay to reinforcement"
          ],
          answer: 1,
          explain: "Melioration is driven by local (per-response) reinforcement rates, not by a global calculation of long-run totals."
        },
        {
          type: "fill",
          q: "'Meliorate' means to make better; in melioration the animal keeps shifting choice until the ____ reinforcement rates of the two options are equal.",
          answer: "local",
          accept: ["local"],
          explain: "When the local reinforcement rates of both options equalize, no further shifting occurs, and the resulting distribution matches reinforcement."
        },
        {
          type: "truefalse",
          q: "Melioration provides a moment-to-moment mechanism that can produce the overall pattern described by the matching law.",
          answer: true,
          explain: "Continual local improvement drives choice to the equilibrium where local rates are equal -- which is exactly the matching outcome."
        },
        {
          type: "match",
          q: "Match each melioration concept to its meaning.",
          pairs: [
            ["Melioration", "Shifting behavior toward the locally richer option"],
            ["Local reinforcement rate", "Reinforcers earned per response invested in one option"],
            ["Equilibrium", "The point where local rates equalize and matching results"]
          ],
          explain: "Melioration reaches equilibrium precisely when the two options yield equal local reinforcement rates."
        },
        {
          type: "mcq",
          q: "Melioration can produce a suboptimal outcome because the animal responds to ____ payoffs rather than to overall maximization.",
          choices: [
            "delayed",
            "punishing",
            "local",
            "random"
          ],
          answer: 2,
          explain: "By chasing whichever option is momentarily richer, melioration can settle at a distribution that does not maximize total reinforcement."
        },
        {
          type: "order",
          q: "Order the melioration cycle from start to finish.",
          items: [
            "Compare the local reinforcement rates of the two options",
            "Shift some behavior toward the option with the higher local rate",
            "The two local rates move closer together",
            "Choice stabilizes when the local rates are equal (matching)"
          ],
          explain: "Repeated local improvement narrows the gap between options until they are equal, yielding the matching distribution."
        },
        {
          type: "truefalse",
          q: "Melioration always maximizes the total amount of reinforcement an organism could earn.",
          answer: false,
          explain: "Melioration optimizes locally, so it can lock in a distribution that earns less than the globally optimal strategy would."
        }
      ]
    },
    {
      id: "l125",
      title: "The Premack Principle",
      intro: "Premack's principle recasts reinforcement in terms of behavior: a more probable activity can reinforce a less probable one.",
      questions: [
        {
          type: "mcq",
          q: "The Premack principle (David Premack, 1959/1965) states that a ____-probability behavior can reinforce a ____-probability behavior.",
          choices: [
            "low; high",
            "high; low",
            "fast; slow",
            "learned; innate"
          ],
          answer: 1,
          explain: "Access to a more probable (preferred) activity reinforces the performance of a less probable one."
        },
        {
          type: "fill",
          q: "Premack's principle is sometimes called Grandma's rule: eat your vegetables (low probability) and then you may have ____ (high probability).",
          answer: "dessert",
          accept: ["dessert", "candy", "ice cream"],
          explain: "Making the preferred, high-probability activity contingent on the less-preferred one increases the less-preferred behavior."
        },
        {
          type: "truefalse",
          q: "In Premack's work, whether an activity reinforces another depends on their relative probabilities for that individual.",
          answer: true,
          explain: "Premack showed reinforcement is relative: the more probable behavior in a given pairing reinforces the less probable one, and the ranking can differ across individuals."
        },
        {
          type: "match",
          q: "Match each Premack term to its meaning.",
          pairs: [
            ["Premack principle", "A more probable behavior reinforces a less probable one"],
            ["High-probability behavior", "The activity the organism performs more freely"],
            ["Low-probability behavior", "The activity reinforced by access to the preferred one"]
          ],
          explain: "Identifying the probability ordering of activities tells you which can reinforce which."
        },
        {
          type: "mcq",
          q: "A key insight of the Premack principle is that reinforcers are best understood as...",
          choices: [
            "only food and water",
            "behaviors or activities, not just stimuli",
            "always external physical objects",
            "fixed, unchanging traits of an organism"
          ],
          answer: 1,
          explain: "Premack shifted the focus from reinforcing stimuli to reinforcing activities, defined by their probability of occurrence."
        },
        {
          type: "order",
          q: "Order the steps for applying the Premack principle.",
          items: [
            "Observe which behaviors the individual does more freely (high probability)",
            "Identify a lower-probability behavior you want to increase",
            "Make access to the high-probability behavior contingent on doing the low-probability one"
          ],
          explain: "The preferred activity becomes the reinforcer that is earned by performing the less-preferred one."
        },
        {
          type: "truefalse",
          q: "According to Premack, whether an activity is a reinforcer is fixed and never depends on the other behaviors available.",
          answer: false,
          explain: "Reinforcing value is relative to the momentary probability ordering; the same activity can reinforce or be reinforced depending on what it is paired with."
        }
      ]
    },
    {
      id: "l126",
      title: "The Response-Deprivation Hypothesis",
      intro: "The response-deprivation hypothesis says a behavior becomes reinforcing when a contingency restricts it below its free baseline level.",
      questions: [
        {
          type: "mcq",
          q: "The response-deprivation hypothesis (Timberlake and Allison, 1974) says a behavior becomes reinforcing when access to it is restricted below its ____.",
          choices: [
            "maximum possible rate",
            "baseline (free-operant) level",
            "punishment threshold",
            "extinction point"
          ],
          answer: 1,
          explain: "When a contingency forces a behavior below the rate at which it occurs when freely available, the opportunity to perform it becomes reinforcing."
        },
        {
          type: "truefalse",
          q: "The response-deprivation hypothesis can explain cases where a lower-probability activity reinforces a higher-probability one -- cases the Premack principle cannot handle.",
          answer: true,
          explain: "Because it depends on restriction below baseline rather than relative probability, even a normally less-probable behavior can reinforce if the contingency deprives the organism of it."
        },
        {
          type: "fill",
          q: "The response-deprivation account focuses on ____ from a behavior's baseline level rather than on which behavior is more probable.",
          answer: "deprivation",
          accept: ["deprivation", "restriction"],
          explain: "It is the deprivation relative to baseline, not the probability ranking, that determines whether access to a behavior will reinforce."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Response-deprivation hypothesis", "Restricting a behavior below baseline makes access to it reinforcing"],
            ["Baseline level", "How often a behavior occurs when freely available"],
            ["Timberlake and Allison", "Researchers who proposed the hypothesis in 1974"]
          ],
          explain: "The hypothesis reframes reinforcement around a behavior's own baseline rate of occurrence."
        },
        {
          type: "mcq",
          q: "How does the response-deprivation hypothesis differ from the Premack principle?",
          choices: [
            "It relies only on the relative probability of two behaviors",
            "It emphasizes restriction below baseline rather than which behavior is more probable",
            "It claims reinforcement is impossible",
            "It applies only to food reinforcers"
          ],
          answer: 1,
          explain: "Premack compares two behaviors' probabilities; response deprivation asks whether the contingency drives a behavior below its own free baseline."
        },
        {
          type: "order",
          q: "Order the reasoning of the response-deprivation hypothesis.",
          items: [
            "Measure a behavior's free baseline rate",
            "Impose a contingency that restricts the behavior below that baseline",
            "The restricted behavior now functions as a reinforcer"
          ],
          explain: "Depriving access relative to baseline is what confers reinforcing value under this account."
        },
        {
          type: "truefalse",
          q: "According to response deprivation, only high-probability behaviors can ever serve as reinforcers.",
          answer: false,
          explain: "Even a low-probability behavior can reinforce another response if the contingency restricts it below its baseline level."
        }
      ]
    },
    {
      id: "l127",
      title: "Behavioral Economics",
      intro: "Behavioral economics analyzes reinforcers as commodities, using demand curves and elasticity to describe how consumption changes with price.",
      questions: [
        {
          type: "mcq",
          q: "In behavioral economics, a demand curve plots how ____ of a reinforcer changes as its 'price' (responses required) increases.",
          choices: [
            "the color",
            "consumption",
            "the delay",
            "the schedule's name"
          ],
          answer: 1,
          explain: "Demand curves relate how much of a reinforcer is consumed to its unit price -- the response cost of each unit."
        },
        {
          type: "fill",
          q: "When consumption of a reinforcer drops sharply as price rises, demand is called ____; when consumption holds fairly steady, demand is inelastic.",
          answer: "elastic",
          accept: ["elastic"],
          explain: "Elasticity measures the sensitivity of consumption to price: elastic demand falls steeply, inelastic demand changes little."
        },
        {
          type: "truefalse",
          q: "Essential reinforcers such as food tend to show more inelastic demand than luxury reinforcers.",
          answer: true,
          explain: "Consumption of a needed commodity resists price increases (inelastic), whereas demand for optional luxuries collapses more readily (elastic)."
        },
        {
          type: "match",
          q: "Match each behavioral-economics term to its meaning.",
          pairs: [
            ["Demand curve", "Consumption plotted against price"],
            ["Elastic demand", "Consumption falls steeply as price rises"],
            ["Inelastic demand", "Consumption changes little as price rises"],
            ["Unit price", "Response cost per unit of reinforcer obtained"]
          ],
          explain: "These tools let researchers quantify reinforcer value by how hard an organism will work to defend its consumption."
        },
        {
          type: "mcq",
          q: "Which reinforcer is most likely to show inelastic demand?",
          choices: [
            "An optional sugary snack",
            "A highly preferred but nonessential toy",
            "A strongly needed commodity like food for a hungry animal",
            "A neutral stimulus with no value"
          ],
          answer: 2,
          explain: "Necessities are defended against rising price, so their consumption stays high even as the response cost climbs -- the hallmark of inelastic demand."
        },
        {
          type: "order",
          q: "Order these price levels by the consumption they typically produce, from highest consumption to lowest.",
          items: [
            "Low price (few responses per reinforcer)",
            "Moderate price",
            "High price (many responses per reinforcer)"
          ],
          explain: "Consumption generally declines as unit price rises, tracing out the downward-sloping demand curve."
        },
        {
          type: "truefalse",
          q: "Behavioral economics treats reinforcer 'value' as fixed and unaffected by price or effort.",
          answer: false,
          explain: "Value is expressed through demand: how much an organism consumes and how hard it works depend directly on price and effort."
        }
      ]
    },
    {
      id: "l128",
      title: "Delay Discounting",
      intro: "Delay discounting describes how a reward loses subjective value as the delay to receiving it grows, with impulsivity reflecting especially steep devaluation.",
      questions: [
        {
          type: "mcq",
          q: "Delay discounting refers to the tendency for the subjective value of a reward to ____ as the delay to receiving it increases.",
          choices: [
            "increase",
            "stay exactly the same",
            "decrease",
            "double"
          ],
          answer: 2,
          explain: "A reward is worth less to the organism the longer it must wait, so subjective value falls with delay."
        },
        {
          type: "fill",
          q: "Mazur's (1987) model describes delay discounting with a ____ function, V = A / (1 + kD), where larger k means steeper discounting.",
          answer: "hyperbolic",
          accept: ["hyperbolic"],
          explain: "The hyperbolic form V = A / (1 + kD) drops value quickly at short delays and levels off at long ones, fitting choice data better than an exponential curve."
        },
        {
          type: "truefalse",
          q: "A larger discounting-rate parameter (k) indicates greater impulsivity.",
          answer: true,
          explain: "A high k means value falls off rapidly with delay, so the individual strongly favors immediate rewards -- the definition of impulsive discounting."
        },
        {
          type: "mcq",
          q: "In delay-discounting terms, impulsivity is best described as...",
          choices: [
            "preferring a larger reward that is delayed",
            "strongly devaluing delayed rewards, so a smaller-sooner reward is chosen",
            "ignoring reward size completely",
            "never responding at all"
          ],
          answer: 1,
          explain: "Impulsivity is steep discounting: the delayed larger reward loses so much value that the smaller-sooner option wins out."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [
            ["Delay discounting", "Loss of a reward's value as its delay grows"],
            ["Hyperbolic discounting", "Value drops steeply at first, then levels off"],
            ["Impulsivity", "Steep discounting; choosing smaller-sooner rewards"],
            ["Self-control", "Choosing a larger-later reward over a smaller-sooner one"]
          ],
          explain: "Impulsivity and self-control sit at opposite ends of the discounting continuum."
        },
        {
          type: "order",
          q: "A person prefers $100 now over $110 in a week, yet prefers $110 in 53 weeks over $100 in 52 weeks. Order the stages of this preference reversal.",
          items: [
            "When both rewards are far in the future, the larger-later reward is preferred",
            "As time passes and the smaller reward becomes nearly immediate, preference shifts",
            "The smaller-sooner reward is now chosen -- a preference reversal predicted by hyperbolic discounting"
          ],
          explain: "Hyperbolic discount curves cross as delays shrink, so preference can reverse when the sooner reward becomes imminent."
        },
        {
          type: "truefalse",
          q: "Hyperbolic and exponential discounting make identical predictions, so preference reversals never occur.",
          answer: false,
          explain: "Exponential curves never cross, but hyperbolic curves do -- and those crossings are what predict the preference reversals actually seen in behavior."
        }
      ]
    }
  ]
});
