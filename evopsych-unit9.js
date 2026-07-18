window.ACADEMY.addUnit("evopsych", {
  id: "unit-9",
  title: "Reasoning, Cheater Detection, and Error Management",
  color: "#7c5cff",
  icon: "🕵️",
  description: "Explores how evolution shaped human reasoning, from cheater detection in social exchange to error-management biases that systematically skew our judgments.",
  lessons: [
    {
      id: "l65",
      title: "The Wason Selection Task",
      intro: "Peter Wason's card task shows that people reliably fail at abstract conditional reasoning.",
      questions: [
        {
          type: "mcq",
          q: "Who devised the selection task that exposed how poorly people reason about abstract conditional rules?",
          choices: ["Peter Wason", "Jean Piaget", "B.F. Skinner", "Noam Chomsky"],
          answer: 0,
          explain: "Peter Wason introduced the selection task in the 1960s to study how people test 'if-then' rules."
        },
        {
          type: "truefalse",
          q: "In the standard abstract version of the Wason selection task, most educated adults choose the logically correct cards.",
          answer: false,
          explain: "Only about 10-25 percent solve the abstract version; the large majority pick the wrong cards."
        },
        {
          type: "fill",
          q: "To test the rule 'If a card shows a vowel, then it has an even number,' you must turn the vowel card and the card showing an ____ number.",
          answer: "odd",
          accept: ["odd", "odd number"],
          explain: "Logically you check P (the vowel) and not-Q (an odd number), because only a vowel paired with an odd number can break the rule."
        },
        {
          type: "match",
          q: "For the rule 'If vowel, then even number,' match each card to the correct action.",
          pairs: [
            ["Vowel card (P)", "Turn it over"],
            ["Odd-number card (not-Q)", "Turn it over"],
            ["Even-number card (Q)", "Leave it"],
            ["Consonant card (not-P)", "Leave it"]
          ],
          explain: "A conditional is falsified only by P together with not-Q, so those are the only two cards worth checking."
        },
        {
          type: "mcq",
          q: "The abstract Wason task tests understanding of which logical structure?",
          choices: ["A statistical correlation", "The material conditional, 'if P then Q'", "A syllogism about categories", "A probability estimate"],
          answer: 1,
          explain: "The task asks which cards could falsify a conditional 'if P then Q' rule."
        },
        {
          type: "order",
          q: "Put the steps of a typical Wason selection task in order.",
          items: ["State a conditional if-then rule", "Show four cards, each with one visible side", "Ask which cards must be turned to test the rule", "Observe that most people select incorrectly"],
          explain: "The task presents a rule and cards, elicits a choice, and typically reveals systematic error."
        },
        {
          type: "mcq",
          q: "What is the most common mistake people make on the abstract task?",
          choices: ["They turn over every card", "They refuse to choose", "They turn the vowel and the even-number card, seeking confirmation", "They turn only the consonant card"],
          answer: 2,
          explain: "People show a matching and confirmation bias, checking the even-number card (Q) instead of the falsifying odd-number card (not-Q)."
        }
      ]
    },
    {
      id: "l66",
      title: "Social Contract Theory",
      intro: "Leda Cosmides argued the mind contains a specialized system for reasoning about social exchange.",
      questions: [
        {
          type: "mcq",
          q: "Which researcher proposed that human reasoning includes an evolved mechanism for social exchange?",
          choices: ["Peter Wason", "Leda Cosmides", "Randolph Nesse", "Patricia Cheng"],
          answer: 1,
          explain: "Leda Cosmides, with John Tooby, developed the social contract theory of reasoning."
        },
        {
          type: "fill",
          q: "Cosmides defined a social contract as a rule of the form 'If you take a ____, you must pay a cost.'",
          answer: "benefit",
          accept: ["benefit"],
          explain: "Social exchange trades benefits for costs; a cheater takes the benefit without paying the required cost."
        },
        {
          type: "truefalse",
          q: "Social contract theory claims natural selection shaped a mechanism specialized for detecting cheaters.",
          answer: true,
          explain: "Cosmides and Tooby argued that reciprocal altruism selected for a cheater-detection ability."
        },
        {
          type: "mcq",
          q: "In social contract theory, a 'cheater' is best defined as someone who...",
          choices: ["breaks any logical rule", "takes the benefit without paying the cost", "pays the cost but takes no benefit", "misremembers the rule"],
          answer: 1,
          explain: "Cheating specifically means illicitly taking a benefit while failing to meet the required cost."
        },
        {
          type: "match",
          q: "Match each social-contract term to its meaning.",
          pairs: [
            ["Benefit", "What the agent wants to obtain"],
            ["Cost or requirement", "What must be paid or done"],
            ["Cheater", "Takes the benefit without paying the cost"],
            ["Reciprocal altruism", "Evolutionary basis for social exchange"]
          ],
          explain: "Social exchange is built from benefits, requirements, and the risk that partners cheat."
        },
        {
          type: "truefalse",
          q: "Cosmides published her landmark study on the logic of social exchange in 1989.",
          answer: true,
          explain: "Her 1989 paper in the journal Cognition, 'The logic of social exchange,' launched the research program."
        },
        {
          type: "order",
          q: "Order the reasoning steps a cheater-detection system uses to check a social contract.",
          items: ["Identify who has taken the benefit", "Check whether that person paid the cost", "Flag anyone who took the benefit but skipped the cost"],
          explain: "The system looks for benefit-takers who failed to meet the requirement."
        }
      ]
    },
    {
      id: "l67",
      title: "Cheater-Detection Advantage",
      intro: "When an abstract logic problem is reframed as a social contract, reasoning performance jumps dramatically.",
      questions: [
        {
          type: "mcq",
          q: "When the Wason task is reframed as a social contract, roughly what share of people solve it correctly?",
          choices: ["About 10 percent", "About 25 percent", "About 75 percent", "About 100 percent"],
          answer: 2,
          explain: "Social-contract versions push accuracy to roughly 65-80 percent, up from about 25 percent or less on abstract versions."
        },
        {
          type: "truefalse",
          q: "The famous drinking-age version ('If a person is drinking alcohol, they must be over the legal age') is much easier than the abstract card task.",
          answer: true,
          explain: "Griggs and Cox's 1982 drinking-age rule dramatically raised correct performance over the abstract version."
        },
        {
          type: "fill",
          q: "In a cheater-detection frame, people spontaneously check the person taking the ____ and the person not paying the cost.",
          answer: "benefit",
          accept: ["benefit"],
          explain: "They look at benefit-takers (P) and cost-skippers (not-Q), which are exactly the logically correct cards."
        },
        {
          type: "mcq",
          q: "Cosmides showed the facilitation is NOT simply due to familiarity because...",
          choices: ["only children showed it", "unfamiliar, invented social contracts also boosted performance", "it disappeared when people were paid", "it only worked with numbers"],
          answer: 1,
          explain: "Made-up, unfamiliar exchange rules still produced high accuracy, so mere familiarity cannot explain the jump."
        },
        {
          type: "order",
          q: "Order the steps of catching a cheater under the 'must be of legal age to drink alcohol' rule.",
          items: ["Spot someone drinking alcohol", "Check whether that person is of legal age", "Flag an underage drinker as a cheater"],
          explain: "The cheater-detection system targets benefit-takers (drinkers) who fail the requirement (being of legal age)."
        },
        {
          type: "match",
          q: "Match each study or concept to its contribution.",
          pairs: [
            ["Griggs & Cox (1982)", "Drinking-age version of the task"],
            ["Cosmides (1989)", "Social contract theory of the effect"],
            ["Abstract version", "Low baseline accuracy of about 25 percent"]
          ],
          explain: "These are the key pieces behind the cheater-detection advantage."
        },
        {
          type: "truefalse",
          q: "The performance boost only appears when the cheater-detection answer points to DIFFERENT cards than the logically correct answer.",
          answer: false,
          explain: "The boost appears precisely because looking for cheaters (benefit-taker plus cost-skipper) coincides with the logically correct P and not-Q cards."
        }
      ]
    },
    {
      id: "l68",
      title: "Permission Schemas Debate",
      intro: "Cheng and Holyoak offered a domain-general rival to the specialized cheater-detection explanation.",
      questions: [
        {
          type: "mcq",
          q: "Who proposed pragmatic reasoning schemas as an alternative to a dedicated cheater-detection module?",
          choices: ["Cheng and Holyoak", "Cosmides and Tooby", "Haselton and Buss", "Wason and Johnson-Laird"],
          answer: 0,
          explain: "Patricia Cheng and Keith Holyoak proposed pragmatic reasoning schemas in 1985."
        },
        {
          type: "fill",
          q: "A permission schema says: 'If an action is to be taken, then a ____ must be satisfied.'",
          answer: "precondition",
          accept: ["precondition", "condition"],
          explain: "Permission schemas encode that an action requires a precondition be met first."
        },
        {
          type: "truefalse",
          q: "Cheng and Holyoak argued the facilitation comes from general permission and obligation schemas, not a cheating-specific module.",
          answer: true,
          explain: "Their account is domain-general: any permission or obligation context should help, whether or not cheating is involved."
        },
        {
          type: "mcq",
          q: "How does the permission-schema account differ from social contract theory?",
          choices: ["It says reasoning never improves", "It requires cost-benefit exchange specifically", "It is domain-general rather than specialized for cheaters", "It denies that people can reason at all"],
          answer: 2,
          explain: "Cheng and Holyoak claim a broad permission schema, not a narrow evolved cheater detector, drives the effect."
        },
        {
          type: "match",
          q: "Match each account to its core claim.",
          pairs: [
            ["Social contract theory", "A specialized evolved cheater detector"],
            ["Permission schema", "A general rule about actions and preconditions"],
            ["Pragmatic reasoning schema", "Learned, goal-based clusters of reasoning rules"]
          ],
          explain: "The debate pits a domain-specific adaptation against domain-general learned schemas."
        },
        {
          type: "truefalse",
          q: "Cosmides and Tooby replied that permission schemas cannot explain why 'switched' social contracts still trigger cheater-focused answers.",
          answer: true,
          explain: "They argued cheater detection predicts subtle patterns, such as responses to switched contracts, that a general permission schema does not."
        },
        {
          type: "order",
          q: "Order the historical development of this debate.",
          items: ["Wason task reveals abstract-reasoning failure in the 1960s", "Cheng and Holyoak propose permission schemas in 1985", "Cosmides proposes social contract theory in 1989", "Researchers design studies to tell the accounts apart"],
          explain: "The permission-schema proposal preceded Cosmides' work, which then argued a specialized cheater detector fits the data better."
        }
      ]
    },
    {
      id: "l69",
      title: "Hazard Management Reasoning",
      intro: "Beyond social exchange, people reason well about precautions that guard against danger.",
      questions: [
        {
          type: "mcq",
          q: "Research on hazard management suggests people have a separate reasoning system tuned for what?",
          choices: ["Grammar", "Precautions against danger", "Arithmetic", "Facial recognition"],
          answer: 1,
          explain: "Precautionary reasoning appears to be a distinct inference system for avoiding hazards."
        },
        {
          type: "fill",
          q: "A precaution rule has the form 'If you engage in hazardous activity H, then take ____ P.'",
          answer: "precaution",
          accept: ["precaution", "a precaution"],
          explain: "Precaution rules link a hazard to a protective action."
        },
        {
          type: "truefalse",
          q: "Fiddick, Cosmides, and Tooby (2000) found that people reason about precaution rules using the very same cheater-detection logic as social contracts.",
          answer: false,
          explain: "They argued precaution rules engage a separate hazard-management system, not the social-exchange (cheater) system."
        },
        {
          type: "mcq",
          q: "On a precaution version of the selection task, which cases do people spontaneously check?",
          choices: ["People who followed every rule", "Someone doing the hazard and someone lacking the precaution", "Only the safest people", "No one in particular"],
          answer: 1,
          explain: "They look for danger: a person engaged in the hazard (P) who did not take the precaution (not-Q)."
        },
        {
          type: "match",
          q: "Match each reasoning domain to the kind of rule it handles.",
          pairs: [
            ["Social exchange", "A benefit requires paying a cost"],
            ["Precaution or hazard", "A hazard requires a safety measure"],
            ["Abstract logic", "A content-free if-then rule"]
          ],
          explain: "Evidence suggests distinct systems for exchange, hazards, and pure logic."
        },
        {
          type: "truefalse",
          q: "The precaution findings support the idea that reasoning is made of several content-specialized systems rather than one general logic engine.",
          answer: true,
          explain: "Good performance on both exchange and precaution rules, driven by different cues, points to multiple specialized systems."
        },
        {
          type: "order",
          q: "Order the logic of checking a precaution rule like 'If you handle toxic chemicals, wear gloves.'",
          items: ["Notice someone handling toxic chemicals", "Check whether that person is wearing gloves", "Flag a person exposed to the hazard without protection"],
          explain: "Hazard-management reasoning targets those undertaking the danger without the required precaution."
        }
      ]
    },
    {
      id: "l70",
      title: "Error Management Theory",
      intro: "Haselton and Buss argued that when errors carry unequal costs, evolution favors a bias toward the cheaper mistake.",
      questions: [
        {
          type: "mcq",
          q: "Who introduced Error Management Theory in 2000?",
          choices: ["Martie Haselton and David Buss", "Leda Cosmides and John Tooby", "Randolph Nesse and George Williams", "Patricia Cheng and Keith Holyoak"],
          answer: 0,
          explain: "Martie Haselton and David Buss proposed Error Management Theory (EMT) in 2000."
        },
        {
          type: "fill",
          q: "EMT says that when two types of error have ____ costs, selection favors a bias toward committing the less costly one.",
          answer: "asymmetric",
          accept: ["asymmetric", "unequal", "different"],
          explain: "Asymmetric (unequal) error costs are the engine of EMT-predicted biases."
        },
        {
          type: "match",
          q: "Match each error type to its meaning.",
          pairs: [
            ["Type I error", "A false positive: seeing something that is not there"],
            ["Type II error", "A false negative: missing something that is real"],
            ["Adaptive bias", "A skew toward the cheaper of the two errors"]
          ],
          explain: "EMT predicts biases that trade more of the cheap error to avoid the costly one."
        },
        {
          type: "truefalse",
          q: "Error Management Theory predicts that unbiased, perfectly accurate judgment is always the evolved outcome.",
          answer: false,
          explain: "When error costs are unequal, a systematic bias, not unbiased accuracy, minimizes the overall fitness cost."
        },
        {
          type: "mcq",
          q: "According to EMT, a predictable bias evolves when...",
          choices: ["errors are impossible", "the two kinds of error are equally costly", "one kind of error was reliably more costly than the other over evolutionary time", "the environment never changes"],
          answer: 2,
          explain: "A recurrent cost asymmetry across ancestral generations is what selects for a directional bias."
        },
        {
          type: "order",
          q: "Order the logic of an Error Management Theory explanation.",
          items: ["A judgment can err in two directions", "One error was more costly than the other ancestrally", "Selection favors a bias toward the cheaper error", "A systematic bias appears in modern minds"],
          explain: "EMT reasons from asymmetric costs to an evolved, predictable bias."
        },
        {
          type: "truefalse",
          q: "EMT builds on signal-detection logic, in which a decision threshold can be shifted to reduce the more expensive kind of mistake.",
          answer: true,
          explain: "Like signal detection theory, EMT shifts the decision threshold toward the less costly error."
        }
      ]
    },
    {
      id: "l71",
      title: "The Smoke-Detector Principle",
      intro: "Randolph Nesse explained why well-designed defenses fire many false alarms.",
      questions: [
        {
          type: "mcq",
          q: "Whose 'smoke detector principle' explains why our defenses produce frequent false alarms?",
          choices: ["David Buss", "Randolph Nesse", "Leda Cosmides", "Peter Wason"],
          answer: 1,
          explain: "Randolph Nesse formulated the smoke detector principle to explain defensive false alarms."
        },
        {
          type: "truefalse",
          q: "The smoke detector principle says a good defense should be tuned to almost never give a false alarm.",
          answer: false,
          explain: "It says the opposite: because a miss is far costlier than a false alarm, many false alarms are actually optimal."
        },
        {
          type: "fill",
          q: "A smoke detector is set to give many false alarms because missing a real fire is far more ____ than an annoying beep.",
          answer: "costly",
          accept: ["costly", "dangerous", "expensive"],
          explain: "When misses are catastrophic and false alarms are cheap, the optimal setting tolerates many false alarms."
        },
        {
          type: "mcq",
          q: "The smoke detector principle helps explain why which responses are so easily triggered?",
          choices: ["Defenses like fear, anxiety, and nausea", "Memory for faces", "Language learning", "Color vision"],
          answer: 0,
          explain: "Protective responses such as fear, anxiety, cough, and nausea are cheap defenses that fire readily to avoid rare disasters."
        },
        {
          type: "match",
          q: "Match each outcome to its cost in the smoke-detector logic.",
          pairs: [
            ["False alarm", "Low cost: a brief, wasted response"],
            ["Missed real threat", "High cost: injury or death"],
            ["Optimal defense", "Many false alarms but few misses"]
          ],
          explain: "Because the costs are lopsided, the best system errs toward over-responding."
        },
        {
          type: "truefalse",
          q: "The smoke detector principle uses signal-detection reasoning about the costs of hits, misses, and false alarms.",
          answer: true,
          explain: "Nesse applied signal detection theory to defenses, weighing the cost of a miss against the cost of a false alarm."
        },
        {
          type: "order",
          q: "Order the smoke-detector reasoning that predicts frequent false alarms.",
          items: ["A rare threat would be catastrophic if missed", "Responding when there is no threat costs very little", "Set the trigger low so almost no threat is missed", "Accept many false alarms as the price of safety"],
          explain: "Cheap responses plus catastrophic misses justify a hair-trigger defense."
        }
      ]
    },
    {
      id: "l72",
      title: "Sexual Overperception Bias",
      intro: "Error management logic predicts that men systematically over-infer women's sexual interest.",
      questions: [
        {
          type: "mcq",
          q: "The sexual overperception bias is the tendency for men to...",
          choices: ["underestimate women's interest", "overestimate women's sexual interest", "ignore social cues entirely", "perfectly read women's intentions"],
          answer: 1,
          explain: "On average, men over-infer sexual interest from ambiguous cues relative to women's actual intent."
        },
        {
          type: "truefalse",
          q: "Haselton and Buss (2000) explained the sexual overperception bias using Error Management Theory.",
          answer: true,
          explain: "They applied EMT: over-perceiving interest was the cheaper ancestral error for men than missing a real opportunity."
        },
        {
          type: "fill",
          q: "For ancestral men, the cost of missing a real mating opportunity (a false ____) tended to exceed the cost of a mistaken advance.",
          answer: "negative",
          accept: ["negative", "false negative"],
          explain: "Missing a genuine opportunity is a false negative; EMT says selection biased men away from that costlier error."
        },
        {
          type: "mcq",
          q: "Which error did EMT treat as MORE costly for ancestral men, driving the over-inference?",
          choices: ["Falsely believing a woman was interested", "Missing a woman who was genuinely interested", "Remembering a face incorrectly", "Feeling unnecessary anxiety"],
          answer: 1,
          explain: "A missed reproductive opportunity (a false negative) was the costlier error, so the bias tilts toward over-perceiving interest."
        },
        {
          type: "match",
          q: "Match each cross-sex bias to its description.",
          pairs: [
            ["Sexual overperception bias", "Men over-infer women's sexual interest"],
            ["Commitment skepticism bias", "Women under-infer men's commitment"],
            ["Error Management Theory", "Asymmetric error costs shape both biases"]
          ],
          explain: "Haselton and Buss described complementary biases for each sex, both predicted by EMT."
        },
        {
          type: "truefalse",
          q: "The bias implies men consciously choose to misread women as a deliberate strategy.",
          answer: false,
          explain: "It is an evolved perceptual and inferential bias, not a conscious decision to misjudge."
        },
        {
          type: "order",
          q: "Order the Error Management explanation of male sexual overperception.",
          items: ["Cues to a woman's interest are ambiguous", "Missing a real opportunity cost more than a false advance", "Selection favored a bias toward inferring interest", "Men now over-perceive sexual interest on average"],
          explain: "From ambiguous cues plus asymmetric costs, EMT predicts a directional over-perception bias."
        }
      ]
    }
  ]
});
