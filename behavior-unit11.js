window.ACADEMY.addUnit("behaviorism", {
  id: "unit-11",
  title: "Hull's Drive-Reduction Theory",
  color: "#14a58f",
  icon: "⚙️",
  description: "Explore Clark Hull's ambitious attempt to build a mathematical, physiological system of learning grounded in drive reduction.",
  lessons: [
    {
      id: "l81",
      title: "Hypothetico-Deductive Method",
      intro: "Hull tried to build psychology like geometry, deriving testable behavior from a set of formal postulates.",
      questions: [
        {
          type: "mcq",
          q: "What was Hull's central goal in adopting the hypothetico-deductive method?",
          choices: [
            "To describe behavior purely through introspection",
            "To build behavior theory as a formal deductive system, like geometry",
            "To reject all use of mathematics in psychology",
            "To study only unconscious motivation"
          ],
          answer: 1,
          explain: "Hull admired Euclid and Newton and wanted psychology to derive behavioral predictions from explicit axioms."
        },
        {
          type: "truefalse",
          q: "In the hypothetico-deductive method, postulates are basic assumptions from which testable theorems are logically derived.",
          answer: true,
          explain: "Postulates are the starting axioms; theorems are deduced from them and then checked against data."
        },
        {
          type: "fill",
          q: "Hull's 1943 book Principles of Behavior stated his theory as a numbered set of ____ from which theorems could be deduced.",
          answer: "postulates",
          accept: ["postulates", "postulate", "axioms"],
          explain: "Hull laid out numbered postulates (16 in 1943) so that theorems could be formally derived and tested."
        },
        {
          type: "order",
          q: "Put the steps of Hull's hypothetico-deductive method in order.",
          items: [
            "State formal postulates",
            "Deduce a theorem",
            "Predict an observable outcome",
            "Test the prediction by experiment"
          ],
          explain: "Reasoning flows from axioms to derived theorems to concrete predictions that experiments can confirm or refute."
        },
        {
          type: "match",
          q: "Match each part of Hull's deductive system to its role.",
          pairs: [
            ["Postulate", "A basic assumption taken as a starting point"],
            ["Theorem", "A statement logically derived from postulates"],
            ["Prediction", "An expected, testable observation"],
            ["Experiment", "The empirical test of a derived claim"]
          ],
          explain: "Each layer builds on the one before, ending in an empirical test that can falsify the theory."
        },
        {
          type: "mcq",
          q: "If an experiment repeatedly contradicts a theorem derived from Hull's postulates, what should happen?",
          choices: [
            "The data must be discarded",
            "The method forbids any change",
            "The postulates should be revised or rejected",
            "The theorem is simply promoted to a postulate"
          ],
          answer: 2,
          explain: "A deductive system is falsifiable, so contradicting evidence forces revision of the underlying assumptions."
        },
        {
          type: "truefalse",
          q: "Hull believed behavioral laws could not be expressed in mathematical form.",
          answer: false,
          explain: "The opposite is true: Hull explicitly aimed for quantitative, mathematical laws of behavior."
        }
      ]
    },
    {
      id: "l82",
      title: "Drive Reduction",
      intro: "For Hull, learning is reinforced whenever a response reduces a drive tied to a biological need.",
      questions: [
        {
          type: "mcq",
          q: "In Hull's theory, a stimulus-response bond is reinforced when the response ____.",
          choices: [
            "increases a biological need",
            "reduces a drive tied to a biological need",
            "is followed by punishment",
            "produces a cognitive map"
          ],
          answer: 1,
          explain: "Reinforcement, for Hull, is drive reduction: the bond strengthens when the response lowers the drive/need state."
        },
        {
          type: "truefalse",
          q: "Hunger and thirst are examples of primary drives arising from tissue needs.",
          answer: true,
          explain: "Primary drives stem directly from biological deficits such as lack of food or water."
        },
        {
          type: "fill",
          q: "A bodily deficit such as lack of food creates a need, which produces a ____ that energizes behavior.",
          answer: "drive",
          accept: ["drive", "drive state"],
          explain: "The need generates a drive (D), a motivational state that pushes the organism to act."
        },
        {
          type: "match",
          q: "Match each drive-reduction term to its meaning.",
          pairs: [
            ["Need", "A tissue deficit such as low blood sugar"],
            ["Drive", "Motivational state energized by a need"],
            ["Drive reduction", "Lowering the drive, which reinforces the response"],
            ["Primary drive", "Innate drive from a biological requirement"]
          ],
          explain: "Needs create drives; reducing those drives is what reinforces the preceding response."
        },
        {
          type: "mcq",
          q: "Which sequence best captures Hull's reinforcement logic?",
          choices: [
            "Reward, then need, then drive, then response",
            "Drive reduction, then need, then stimulus, then drive",
            "Response, then punishment, then learning",
            "Need, then drive, then response, then drive reduction, then reinforcement"
          ],
          answer: 3,
          explain: "Learning is strengthened only after the response actually reduces the drive, completing the cycle."
        },
        {
          type: "order",
          q: "Order the events in Hull's drive-reduction cycle.",
          items: [
            "A tissue need arises",
            "A drive energizes behavior",
            "A response reduces the drive",
            "The stimulus-response bond is reinforced"
          ],
          explain: "Reinforcement is the final step, occurring because the response successfully reduced the drive."
        },
        {
          type: "truefalse",
          q: "According to drive-reduction theory, a response that reduces no drive at all is still strongly reinforced.",
          answer: false,
          explain: "Only drive reduction reinforces; a response that lowers no drive gains no habit strength."
        }
      ]
    },
    {
      id: "l83",
      title: "Habit Strength",
      intro: "Habit strength (sHr) is the learned bond between stimulus and response, growing with each reinforced trial.",
      questions: [
        {
          type: "mcq",
          q: "What does the symbol sHr stand for in Hull's system?",
          choices: [
            "Stimulus intensity",
            "Habit strength, the strength of a stimulus-response bond",
            "Drive magnitude",
            "Incentive value"
          ],
          answer: 1,
          explain: "sHr denotes habit strength, the learned association between a stimulus (s) and a response (r)."
        },
        {
          type: "truefalse",
          q: "Habit strength (sHr) grows with the number of reinforced trials.",
          answer: true,
          explain: "Each reinforced trial increments sHr, so the S-R bond becomes progressively stronger with practice."
        },
        {
          type: "fill",
          q: "As reinforced practice continues, sHr rises rapidly at first and then levels off, approaching an ____.",
          answer: "asymptote",
          accept: ["asymptote", "upper limit", "ceiling"],
          explain: "Habit strength grows toward a maximum ceiling, or asymptote, that it never quite exceeds."
        },
        {
          type: "mcq",
          q: "The growth curve of habit strength is best described as:",
          choices: [
            "linear and unbounded",
            "a sudden all-or-none jump",
            "negatively accelerated toward a maximum",
            "randomly fluctuating with no trend"
          ],
          answer: 2,
          explain: "Each added reinforcement contributes less than the previous one, so sHr climbs with diminishing returns toward its asymptote."
        },
        {
          type: "truefalse",
          q: "In Hull's theory, an established habit (sHr) drops instantly to zero after a single non-reinforced trial.",
          answer: false,
          explain: "sHr is a relatively durable learned structure; momentary performance dips come from other factors like inhibition, not erased habit."
        },
        {
          type: "order",
          q: "Order these habit-strength values from earliest to latest in reinforced training.",
          items: [
            "Low sHr after a few trials",
            "Moderate sHr as trials accumulate",
            "High sHr approaching asymptote"
          ],
          explain: "Habit strength accumulates over trials, rising toward but never surpassing its asymptotic ceiling."
        },
        {
          type: "match",
          q: "Match each habit-strength term to its meaning.",
          pairs: [
            ["sHr", "Habit strength symbol"],
            ["Reinforced trial", "Event that increments habit strength"],
            ["Asymptote", "Upper ceiling habit strength approaches"],
            ["Negatively accelerated", "Shape of the habit growth curve"]
          ],
          explain: "Reinforced trials build sHr along a negatively accelerated curve toward an asymptotic limit."
        }
      ]
    },
    {
      id: "l84",
      title: "The Reaction Potential Equation",
      intro: "Hull combined habit and drive multiplicatively to predict the momentary tendency to respond.",
      questions: [
        {
          type: "mcq",
          q: "In Hull's 1943 theory, reaction potential (sEr) was calculated as:",
          choices: [
            "sHr plus D",
            "sHr minus D",
            "sHr multiplied by D (habit strength times drive)",
            "D divided by sHr"
          ],
          answer: 2,
          explain: "Reaction potential is the multiplicative product of habit strength and drive."
        },
        {
          type: "truefalse",
          q: "Because sEr = sHr x D is multiplicative, if drive is zero the reaction potential is zero even when habit strength is high.",
          answer: true,
          explain: "In a multiplicative rule any zero factor yields a zero product, so no drive means no tendency to respond."
        },
        {
          type: "fill",
          q: "The momentary tendency to respond, obtained by combining habit and drive, is called ____ potential.",
          answer: "reaction",
          accept: ["reaction"],
          explain: "Hull symbolized reaction potential as sEr, the immediate strength of the tendency to make a response."
        },
        {
          type: "mcq",
          q: "In his later system Hull expanded the rule to sEr = sHr x D x K x V. What does K represent?",
          choices: [
            "incentive motivation (reward magnitude)",
            "the number of reinforced trials",
            "stimulus-intensity dynamism",
            "reactive inhibition"
          ],
          answer: 0,
          explain: "K is incentive motivation, reflecting the size or quality of the reward; V is stimulus-intensity dynamism."
        },
        {
          type: "truefalse",
          q: "Reaction potential influences observable measures such as response probability, latency, and resistance to extinction.",
          answer: true,
          explain: "Higher sEr shows up as more probable, faster, and more persistent responding."
        },
        {
          type: "match",
          q: "Match each symbol from Hull's expanded equation to its meaning.",
          pairs: [
            ["sEr", "Reaction potential"],
            ["sHr", "Habit strength"],
            ["D", "Drive"],
            ["K", "Incentive motivation"]
          ],
          explain: "Reaction potential is the product of habit strength, drive, and (later) incentive and stimulus-intensity factors."
        },
        {
          type: "order",
          q: "A rat has strong habit but is completely sated (zero drive). Trace Hull's prediction in order.",
          items: [
            "Drive D equals zero",
            "sHr times D equals zero",
            "Reaction potential is zero",
            "The response does not occur"
          ],
          explain: "A zero drive collapses the multiplicative product, so despite strong habit the reaction potential vanishes."
        }
      ]
    },
    {
      id: "l85",
      title: "Intervening Variables",
      intro: "Hull's key constructs are unobservable variables anchored to observable inputs and outputs.",
      questions: [
        {
          type: "mcq",
          q: "An intervening variable in Hull's theory is:",
          choices: [
            "a directly observable stimulus",
            "an unobservable construct linking observable inputs and outputs",
            "a measurement error to be removed",
            "a type of spinal reflex"
          ],
          answer: 1,
          explain: "Constructs like sHr and D cannot be seen directly but are tied to observable independent and dependent variables."
        },
        {
          type: "truefalse",
          q: "The term intervening variable was introduced into psychology by Edward Tolman before Hull built quantitative versions of such constructs.",
          answer: true,
          explain: "Tolman coined the term; Hull then anchored such constructs with explicit equations."
        },
        {
          type: "fill",
          q: "Intervening variables sit between the observable ____ variables (stimulus conditions) and the dependent variables (responses).",
          answer: "independent",
          accept: ["independent"],
          explain: "Independent variables are the manipulated inputs; dependent variables are the measured outputs; constructs intervene between them."
        },
        {
          type: "match",
          q: "Match each type of variable to an example in Hull's system.",
          pairs: [
            ["Independent variable", "Observable input such as hours of food deprivation"],
            ["Intervening variable", "Inferred construct such as drive (D)"],
            ["Dependent variable", "Observable response such as running speed"]
          ],
          explain: "Drive is inferred from an antecedent (deprivation) and revealed through a consequent (response strength)."
        },
        {
          type: "mcq",
          q: "Why did Hull anchor intervening variables to observables on both sides?",
          choices: [
            "To make them purely philosophical",
            "To avoid using any mathematics",
            "To keep the constructs scientifically measurable and testable",
            "To hide them from experimental scrutiny"
          ],
          answer: 2,
          explain: "By tying constructs to manipulable inputs and measurable outputs, Hull kept them empirically grounded and falsifiable."
        },
        {
          type: "truefalse",
          q: "Hull treated drive (D) as something observed directly, with no link to antecedent conditions.",
          answer: false,
          explain: "Drive is an intervening variable inferred from antecedents like hours of deprivation, not observed directly."
        },
        {
          type: "order",
          q: "Arrange Hull's explanatory chain from cause to effect.",
          items: [
            "Independent variable (deprivation)",
            "Intervening variable (drive)",
            "Dependent variable (response strength)"
          ],
          explain: "Observable antecedents produce inferred internal states, which in turn produce observable responses."
        }
      ]
    },
    {
      id: "l86",
      title: "Incentive Motivation",
      intro: "Hull added incentive motivation (K) after the Crespi effect showed reward magnitude shifts behavior fast.",
      questions: [
        {
          type: "mcq",
          q: "In the expanded equation, the incentive factor K depends mainly on:",
          choices: [
            "the number of reinforced trials",
            "the magnitude or quality of the reward",
            "the loudness of the stimulus",
            "the age of the animal"
          ],
          answer: 1,
          explain: "K, incentive motivation, scales with how large or attractive the reward is, independent of habit."
        },
        {
          type: "truefalse",
          q: "The Crespi effect showed that suddenly changing the size of a reward can rapidly change performance.",
          answer: true,
          explain: "Crespi (1942) found abrupt shifts in reward amount produced quick performance shifts, motivating a separate incentive variable."
        },
        {
          type: "fill",
          q: "Leo ____ demonstrated in 1942 that rats shifted to a larger reward sped up, while those shifted to a smaller reward slowed down.",
          answer: "crespi",
          accept: ["crespi"],
          explain: "Crespi's reward-shift experiments are the classic evidence that incentive magnitude affects performance directly."
        },
        {
          type: "mcq",
          q: "When rats shifted to a much larger reward briefly outperform rats always given that large reward, this overshoot is called the:",
          choices: [
            "depression effect",
            "goal gradient",
            "elation effect",
            "partial reinforcement effect"
          ],
          answer: 2,
          explain: "The positive overshoot is the elation effect; the undershoot after a downward shift is the depression effect."
        },
        {
          type: "truefalse",
          q: "The Crespi effect fit neatly with the idea that only habit strength, and nothing about reward size, controls performance.",
          answer: false,
          explain: "Rapid shifts with an unchanged training history showed reward magnitude matters, so incentive (K) had to be added."
        },
        {
          type: "match",
          q: "Match each incentive-motivation term to its meaning.",
          pairs: [
            ["Incentive motivation (K)", "Performance factor set by reward magnitude"],
            ["Elation effect", "Overshoot after an increase in reward"],
            ["Depression effect", "Undershoot after a decrease in reward"],
            ["Crespi (1942)", "Study of shifted reward amounts"]
          ],
          explain: "Crespi's shifts produced elation and depression effects that Hull captured with the incentive factor K."
        },
        {
          type: "order",
          q: "A rat is switched from a small reward to a large reward. Order the Crespi-effect outcome.",
          items: [
            "Running speed rises quickly",
            "Speed briefly overshoots the steady large-reward group",
            "Speed settles to the large-reward level"
          ],
          explain: "The abrupt increase triggers a fast rise and a temporary elation overshoot before leveling off."
        }
      ]
    },
    {
      id: "l87",
      title: "The Goal Gradient",
      intro: "Hull's goal-gradient hypothesis holds that responses grow stronger the nearer the organism is to reward.",
      questions: [
        {
          type: "mcq",
          q: "Hull's goal-gradient hypothesis (1932) states that the tendency to respond:",
          choices: [
            "is constant at every point in a maze",
            "gets stronger the closer the animal is to the goal",
            "is strongest at the start box",
            "disappears near the reward"
          ],
          answer: 1,
          explain: "Response strength increases as the reward draws nearer, so animals move faster near the goal."
        },
        {
          type: "truefalse",
          q: "Hull observed that rats run faster and make fewer errors as they approach the food reward.",
          answer: true,
          explain: "Near-goal responding is strongest, producing faster speeds and fewer errors close to the reward."
        },
        {
          type: "fill",
          q: "In a maze, rats tend to eliminate the blind alleys ____ to the goal before those farther away.",
          answer: "closer",
          accept: ["closer", "nearer", "nearest", "close"],
          explain: "Because response strength is greater near the goal, errors close to the reward are corrected first."
        },
        {
          type: "mcq",
          q: "Which observation is predicted by the goal gradient?",
          choices: [
            "Errors are equally likely everywhere in the maze",
            "Rats slow down as they near the food",
            "Blind alleys near the goal are dropped sooner than distant ones",
            "Rats prefer longer paths to the reward"
          ],
          answer: 2,
          explain: "Stronger responding near the goal means near-goal errors get eliminated before more distant ones."
        },
        {
          type: "truefalse",
          q: "The goal gradient predicts that animals should choose longer routes over shorter routes to the same reward.",
          answer: false,
          explain: "Greater near-goal strength favors shorter paths, since more of a short path lies in the high-gradient zone."
        },
        {
          type: "order",
          q: "Order a rat's running speed as predicted by the goal gradient, from start to finish.",
          items: [
            "Slower near the start box",
            "Faster in the middle",
            "Fastest just before the goal"
          ],
          explain: "Speed climbs as the reward nears because reaction potential rises along the goal gradient."
        },
        {
          type: "match",
          q: "Match each location in the maze to the behavior the goal gradient predicts.",
          pairs: [
            ["Goal gradient", "Response strength grows nearer the reward"],
            ["Near the goal", "Fastest running, fewest errors"],
            ["Far from the goal", "Slower running, more errors"]
          ],
          explain: "The gradient makes responding strongest close to reward and weakest far from it."
        }
      ]
    },
    {
      id: "l88",
      title: "Hull's Legacy and Decline",
      intro: "Neo-Hullians extended the system, but over-precise constants and the cognitive revolution led to its fall.",
      questions: [
        {
          type: "mcq",
          q: "Which of these was a leading neo-Hullian who developed the Hull-Spence theory?",
          choices: [
            "B. F. Skinner",
            "Edward Tolman",
            "Kenneth Spence",
            "Jean Piaget"
          ],
          answer: 2,
          explain: "Kenneth Spence extended and revised Hull's system; their joint framework is called Hull-Spence theory."
        },
        {
          type: "truefalse",
          q: "In the 1940s and early 1950s Hull was among the most frequently cited psychologists in experimental journals.",
          answer: true,
          explain: "At his peak Hull's learning theory dominated citations in experimental psychology."
        },
        {
          type: "fill",
          q: "Neal Miller and John ____ applied Hullian drive theory to personality and psychotherapy in their 1950 book Personality and Psychotherapy.",
          answer: "dollard",
          accept: ["dollard"],
          explain: "Miller and Dollard translated drive, cue, response, and reward into a theory of learning, conflict, and therapy."
        },
        {
          type: "mcq",
          q: "A major reason for the decline of Hull's grand system was that:",
          choices: [
            "its precise numerical constants failed to generalize across situations",
            "it ignored reinforcement entirely",
            "no one could read its notation",
            "it was never actually published"
          ],
          answer: 0,
          explain: "The exact quantitative constants Hull specified did not hold beyond the narrow experiments they came from, undermining the whole system."
        },
        {
          type: "truefalse",
          q: "Tolman's evidence for latent learning and cognitive maps strengthened strict drive-reduction theory.",
          answer: false,
          explain: "Latent learning (learning without drive reduction) and cognitive maps were evidence against Hull's core claim."
        },
        {
          type: "match",
          q: "Match each figure to their contribution around Hull's system.",
          pairs: [
            ["Kenneth Spence", "Chief neo-Hullian; Hull-Spence theory"],
            ["Neal Miller", "Extended drive theory to conflict and therapy"],
            ["O. H. Mowrer", "Two-factor theory of avoidance learning"],
            ["Edward Tolman", "Rival who emphasized cognition and expectancies"]
          ],
          explain: "Neo-Hullians refined the system from within while Tolman challenged it from a cognitive standpoint."
        },
        {
          type: "order",
          q: "Order Hull's arc in the history of psychology.",
          items: [
            "Grand deductive system dominates 1940s learning theory",
            "Neo-Hullians revise and extend it",
            "Cognitive revolution and failed constants erode it",
            "System largely abandoned as a global theory"
          ],
          explain: "Hull's system rose to dominance, was patched by followers, then faded as its precise laws and drive-reduction core broke down."
        }
      ]
    }
  ]
});
