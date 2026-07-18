window.ACADEMY.addUnit("behaviorism", {
  id: "unit-15",
  title: "The Rescorla-Wagner Model",
  color: "#14a58f",
  icon: "🎯",
  description: "Discover the landmark theory that conditioning depends on whether a cue predicts the outcome, driven by surprise and prediction error rather than mere pairing.",
  lessons: [
    {
      id: "l113",
      title: "Contingency, Not Contiguity",
      intro: "Rescorla's truly random control showed that conditioning depends on whether a CS predicts the US, not simply on their pairing in time.",
      questions: [
        {
          type: "mcq",
          q: "In Rescorla's 1968 'truly random control,' what relationship held between the CS and the US?",
          choices: [
            "The US always followed the CS immediately",
            "The US never occurred during the experiment",
            "The US was equally likely whether or not the CS was present",
            "The CS reliably signaled a period free of the US"
          ],
          answer: 2,
          explain: "In the truly random control the US occurs at the same rate with or without the CS, so there is no contingency even though CS and US are sometimes paired."
        },
        {
          type: "truefalse",
          q: "Rescorla found that pairing a CS and US in time was enough for conditioning even when the US was just as likely without the CS.",
          answer: false,
          explain: "That is exactly what Rescorla disproved: with no contingency, animals did not condition to the CS despite many CS-US pairings, undermining pure contiguity."
        },
        {
          type: "fill",
          q: "Rescorla argued that conditioning depends on the ____ between CS and US, whether the CS actually predicts the US, not on mere temporal pairing.",
          answer: "contingency",
          accept: ["contingency", "correlation"],
          explain: "Contingency is the predictive relationship: the US must be more (or less) likely given the CS than without it for learning to occur."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Contiguity", "CS and US occurring close together in time"],
            ["Contingency", "The CS reliably predicting the US"],
            ["Truly random control", "US equally probable with and without the CS"]
          ],
          explain: "Contiguity is mere closeness in time, contingency is a predictive relationship, and the truly random control removes contingency while keeping some contiguity."
        },
        {
          type: "mcq",
          q: "For a positive (excitatory) contingency, how do the probabilities compare?",
          choices: [
            "P(US given CS) equals P(US given no CS)",
            "P(US given CS) is greater than P(US given no CS)",
            "P(US given CS) is less than P(US given no CS)",
            "P(US given CS) is always zero"
          ],
          answer: 1,
          explain: "A positive contingency means the US is more probable when the CS is present than when it is absent, so the CS signals that the US is coming."
        },
        {
          type: "truefalse",
          q: "A negative contingency, in which the US is less likely when the CS is present, can turn the CS into a signal for safety.",
          answer: true,
          explain: "When the US is less probable given the CS, the CS predicts the absence of the US and becomes a conditioned inhibitor, a safety signal."
        },
        {
          type: "order",
          q: "Order these CS-US arrangements from the strongest excitatory contingency to no contingency at all.",
          items: ["The US occurs only during the CS", "The US is more likely during the CS than when absent", "The US is equally likely with or without the CS"],
          explain: "Strength of prediction falls from a perfect signal, to a probabilistic positive contingency, to the truly random case where the CS predicts nothing."
        }
      ]
    },
    {
      id: "l114",
      title: "Prediction Error",
      intro: "Rescorla and Wagner proposed that learning is driven by surprise, the discrepancy between what is expected and what actually happens, not by proximity.",
      questions: [
        {
          type: "mcq",
          q: "According to the Rescorla-Wagner view, what drives associative learning?",
          choices: [
            "The sheer number of CS-US pairings",
            "The discrepancy between what is expected and what occurs",
            "The physical closeness of CS and US in space",
            "The intensity of the CS on its own"
          ],
          answer: 1,
          explain: "Learning is proportional to prediction error, the gap between the expected outcome and the actual outcome, not just to how often or how closely CS and US pair."
        },
        {
          type: "truefalse",
          q: "If a US is already fully predicted by existing cues, a newly added CS paired with it will still be learned strongly.",
          answer: false,
          explain: "A fully predicted US produces little prediction error, so there is nothing left to learn and the new cue gains little associative strength."
        },
        {
          type: "fill",
          q: "Kamin proposed that a US must be ____, that is, unexpected, for an animal to form new associations to a cue.",
          answer: "surprising",
          accept: ["surprising", "surprise", "unexpected"],
          explain: "Kamin's surprise principle says only an unpredicted (surprising) US drives new learning, an insight the Rescorla-Wagner model formalized."
        },
        {
          type: "match",
          q: "Match each situation to the amount of learning it produces.",
          pairs: [
            ["Fully predicted US", "Little or no new learning"],
            ["Completely unexpected US", "Strong associative change"],
            ["Partly predicted US", "Moderate learning"]
          ],
          explain: "The more surprising the US, the larger the prediction error and the more associative change occurs on that trial."
        },
        {
          type: "mcq",
          q: "When the outcome of a trial exactly matches expectation, the prediction error is:",
          choices: [
            "Large and positive",
            "Negative",
            "Undefined",
            "Zero"
          ],
          answer: 3,
          explain: "If actual equals expected, the discrepancy is zero, so no associative change is produced on that trial."
        },
        {
          type: "truefalse",
          q: "Greater surprise on a trial produces a greater change in associative strength.",
          answer: true,
          explain: "Because learning is proportional to prediction error, a larger gap between expected and actual outcome yields a bigger update."
        },
        {
          type: "order",
          q: "Order the steps of a single conditioning trial in the prediction-error account.",
          items: ["The CS is presented", "The animal generates an expectation of the US", "The actual US occurs (or fails to)", "Prediction error is computed", "The association is updated"],
          explain: "On each trial the cue evokes an expectation, the real outcome is compared to it, and the resulting error drives the update to associative strength."
        }
      ]
    },
    {
      id: "l115",
      title: "The Rescorla-Wagner Equation",
      intro: "The 1972 equation states that associative change equals a rate constant times the discrepancy between the US asymptote and the combined expectation of all present cues.",
      questions: [
        {
          type: "mcq",
          q: "Which formula expresses the Rescorla-Wagner model of associative change on a trial?",
          choices: [
            "delta V = alpha x beta x (lambda - sum V)",
            "delta V = lambda + sum V",
            "delta V = alpha / beta",
            "delta V = lambda x sum V"
          ],
          answer: 0,
          explain: "The model states delta V = alpha x beta x (lambda - sum V): the change in a cue's strength is a learning rate times the prediction error (lambda minus the total expectation)."
        },
        {
          type: "fill",
          q: "In the equation, ____ represents the maximum associative strength the US can support, that is, the asymptote of learning.",
          answer: "lambda",
          accept: ["lambda", "l"],
          explain: "Lambda is the ceiling on associative strength set by the US; strength grows toward lambda and stops when it is reached."
        },
        {
          type: "match",
          q: "Match each symbol in the equation to what it stands for.",
          pairs: [
            ["alpha", "Salience of the CS"],
            ["beta", "Learning-rate parameter tied to the US"],
            ["lambda", "Asymptote the US can support"],
            ["sum V", "Total associative strength of all cues present"]
          ],
          explain: "Alpha and beta set how fast learning proceeds, lambda sets the ceiling, and sum V is the combined expectation of every cue on the trial."
        },
        {
          type: "truefalse",
          q: "When the combined strength (sum V) equals lambda, the change in associative strength is zero and learning stops.",
          answer: true,
          explain: "At sum V = lambda the prediction error (lambda minus sum V) is zero, so delta V is zero and the cue is at asymptote."
        },
        {
          type: "mcq",
          q: "What does the model predict happens when sum V exceeds lambda?",
          choices: [
            "Associative strength increases further",
            "Nothing changes",
            "Associative strength decreases (delta V is negative)",
            "The US intensity increases"
          ],
          answer: 2,
          explain: "If cues collectively over-predict the US, lambda minus sum V is negative, so delta V is negative and the cues lose strength."
        },
        {
          type: "truefalse",
          q: "The term (lambda minus sum V) is the model's mathematical expression of prediction error.",
          answer: true,
          explain: "That difference between what the US can support and what the cues currently predict is precisely the trial-by-trial surprise that drives learning."
        },
        {
          type: "order",
          q: "Order the associative strength of a single reinforced CS across successive trials, from earliest to latest.",
          items: ["V near zero on the first trial", "V rises quickly at first", "V rises more slowly as it nears lambda", "V levels off at the lambda asymptote"],
          explain: "Because delta V shrinks as sum V approaches lambda, learning is negatively accelerated: fast early, then slowing to a plateau at lambda."
        }
      ]
    },
    {
      id: "l116",
      title: "Blocking",
      intro: "Kamin's blocking effect shows that a cue already predicting the US prevents a new cue from being learned, a prime success of the prediction-error model.",
      questions: [
        {
          type: "mcq",
          q: "In a blocking experiment, cue A is first trained to predict the US. When A and a new cue B are then reinforced together, cue B:",
          choices: [
            "Becomes a stronger predictor than A",
            "Gains little or no associative strength",
            "Becomes a conditioned inhibitor",
            "Completely replaces A"
          ],
          answer: 1,
          explain: "Because A already predicts the US, the compound produces little prediction error, so B is 'blocked' and acquires almost no strength."
        },
        {
          type: "fill",
          q: "The blocking effect was demonstrated by Leon ____, who showed that prior learning about one cue prevents learning about a redundant added cue.",
          answer: "kamin",
          accept: ["kamin"],
          explain: "Leon Kamin reported blocking in the late 1960s, and it became a key motivation for the Rescorla-Wagner model."
        },
        {
          type: "truefalse",
          q: "Blocking occurs because the added cue B is simply presented far fewer times than cue A.",
          answer: false,
          explain: "B is paired with the US on every compound trial; it is blocked not by low exposure but because A already predicts the US, leaving no prediction error."
        },
        {
          type: "order",
          q: "Order the stages of a blocking experiment.",
          items: ["Phase 1: cue A alone is paired with the US", "A becomes a reliable predictor (V of A near lambda)", "Phase 2: compound AB is paired with the US", "Because sum V already equals lambda, prediction error is near zero", "B gains little associative strength"],
          explain: "Pretraining A drives its strength to lambda, so when AB is reinforced there is no surprise left for B to absorb."
        },
        {
          type: "mcq",
          q: "Why does the Rescorla-Wagner model predict blocking?",
          choices: [
            "Cue B has inherently low salience",
            "The US is too weak to support learning",
            "V of A is already near lambda, so (lambda - sum V) is near zero and nothing is left for B",
            "B and A are perceptually identical"
          ],
          answer: 2,
          explain: "The pretrained cue A pushes sum V up to lambda, driving prediction error to about zero on compound trials, so B cannot gain strength."
        },
        {
          type: "match",
          q: "Match each phase or quantity in blocking to its outcome.",
          pairs: [
            ["Phase 1 (A+)", "A becomes a predictor of the US"],
            ["Phase 2 (AB+)", "A blocks learning about B"],
            ["Prediction error on AB+ trials", "Near zero because A already predicts the US"]
          ],
          explain: "Prior training of A removes the surprise on compound trials, so B is left out even though it is paired with the US."
        },
        {
          type: "truefalse",
          q: "Blocking is strong evidence that mere CS-US pairing is not sufficient for conditioning.",
          answer: true,
          explain: "B is reliably paired with the US yet is not learned, showing that a predictive gap, not just pairing, is required for conditioning."
        }
      ]
    },
    {
      id: "l117",
      title: "Overshadowing",
      intro: "When two cues of unequal salience are conditioned together, the more salient cue captures most of the associative strength and overshadows the weaker one.",
      questions: [
        {
          type: "mcq",
          q: "Overshadowing occurs when:",
          choices: [
            "A single cue is presented alone many times",
            "A more salient cue in a compound gains most of the strength, leaving little for the weaker cue",
            "A cue signals the absence of the US",
            "Two cues are each trained to full strength separately"
          ],
          answer: 1,
          explain: "In a compound of unequal cues, the stronger (more salient) cue takes the larger share of associative strength, overshadowing the weaker cue."
        },
        {
          type: "fill",
          q: "In overshadowing, the more ____ (noticeable) cue captures most of the available associative strength.",
          answer: "salient",
          accept: ["salient", "salience", "intense"],
          explain: "Salience corresponds to the parameter alpha in the model; a higher-alpha cue learns faster and claims more of the limited strength lambda."
        },
        {
          type: "truefalse",
          q: "Overshadowing was first described by Ivan Pavlov.",
          answer: true,
          explain: "Pavlov reported that a stronger stimulus in a compound could overshadow a weaker one, a phenomenon the Rescorla-Wagner model later explained."
        },
        {
          type: "match",
          q: "Match each element to its role in overshadowing.",
          pairs: [
            ["Salient cue", "Gains the larger share of associative strength"],
            ["Weak cue", "Is overshadowed and conditions poorly"],
            ["Compound CS", "Two cues trained together on the same trials"]
          ],
          explain: "The salient cue dominates because its higher salience makes it learn faster, leaving less of lambda for the weak cue."
        },
        {
          type: "mcq",
          q: "How does the Rescorla-Wagner model explain overshadowing?",
          choices: [
            "Each cue independently reaches full lambda",
            "The cues share the available lambda in proportion to their salience (alpha)",
            "The weaker cue becomes a conditioned inhibitor",
            "The US intensity is cut in half"
          ],
          answer: 1,
          explain: "Both cues draw on the same limited lambda; the higher-alpha cue learns faster and claims more, so the low-alpha cue ends up weak."
        },
        {
          type: "truefalse",
          q: "In overshadowing, the two cues are trained separately rather than together as a compound.",
          answer: false,
          explain: "Overshadowing requires the cues to be trained together as a compound; their competition for the same limited strength is what produces the effect."
        },
        {
          type: "order",
          q: "Order the outcome after compound conditioning of a bright light (high salience) and a faint tone (low salience).",
          items: ["The compound as a whole predicts the US (sum V near lambda)", "The high-salience light claims most of the strength", "The low-salience tone is left with little strength"],
          explain: "The compound reaches lambda, but the salient light dominates the share of strength, overshadowing the faint tone."
        }
      ]
    },
    {
      id: "l118",
      title: "Overexpectation",
      intro: "When two separately trained predictors are combined, their summed expectation exceeds what the US supports, so both cues lose associative strength.",
      questions: [
        {
          type: "mcq",
          q: "What is the overexpectation effect?",
          choices: [
            "Two novel cues gaining strength faster than one",
            "Two separately trained predictors, when combined, losing associative strength because they over-predict the US",
            "A cue signaling that the US will not occur",
            "A single cue reaching lambda more slowly"
          ],
          answer: 1,
          explain: "Two cues each trained to lambda, when reinforced together, jointly predict more than the US supports, so both lose strength."
        },
        {
          type: "fill",
          q: "A ____ prediction error, produced when combined cues over-predict the US, causes both cues to lose associative strength.",
          answer: "negative",
          accept: ["negative"],
          explain: "When sum V exceeds lambda, the term (lambda minus sum V) is negative, so delta V is negative and the cues lose strength."
        },
        {
          type: "truefalse",
          q: "In the overexpectation effect, cues lose associative strength even though the US is still presented on those trials.",
          answer: true,
          explain: "The US still occurs, but because the combined cues predicted an even larger US, the surprise is negative and strength declines."
        },
        {
          type: "order",
          q: "Order the phases that produce overexpectation.",
          items: ["Phase 1: A+ and B+ trained separately, each reaching lambda", "Phase 2: the compound AB+ is reinforced", "Sum V (V of A plus V of B) exceeds lambda", "The prediction error (lambda - sum V) is negative", "A and B each lose associative strength"],
          explain: "Combining two full predictors pushes total expectation above lambda, creating negative error that erodes both cues' strength."
        },
        {
          type: "mcq",
          q: "Why do the cues lose strength in overexpectation?",
          choices: [
            "Because the US doubled in strength",
            "Because sum V exceeds lambda, giving a negative discrepancy",
            "Because the cues become inhibitory to one another",
            "Because their salience suddenly dropped"
          ],
          answer: 1,
          explain: "The combined expectation over-predicts the US, so lambda minus sum V is negative and strength is driven back down toward lambda."
        },
        {
          type: "match",
          q: "Match each condition to its consequence in overexpectation.",
          pairs: [
            ["Two predictors combined", "Expectation exceeds what the US supports"],
            ["Sum V greater than lambda", "Negative prediction error"],
            ["Result on both cues", "Each loses associative strength"]
          ],
          explain: "Over-prediction yields negative error, and the model corrects it by lowering the strength of the present cues."
        },
        {
          type: "truefalse",
          q: "Overexpectation supports the idea that the total expectation, sum V, rather than each cue alone, drives the update.",
          answer: true,
          explain: "It is the combined sum V across all present cues, compared to lambda, that determines the error and the change in strength."
        }
      ]
    },
    {
      id: "l119",
      title: "Conditioned Inhibition",
      intro: "A cue that reliably signals the absence of an expected US acquires negative associative strength and becomes a conditioned inhibitor.",
      questions: [
        {
          type: "mcq",
          q: "A conditioned inhibitor is a cue that:",
          choices: [
            "Signals that the US is about to occur",
            "Signals the absence of the US",
            "Has no predictive value at all",
            "Is identical to a conditioned excitor"
          ],
          answer: 1,
          explain: "A conditioned inhibitor predicts that an otherwise-expected US will not occur, acquiring negative associative strength in the model."
        },
        {
          type: "fill",
          q: "In the Rescorla-Wagner model, a conditioned inhibitor acquires ____ associative strength, that is, a negative V.",
          answer: "negative",
          accept: ["negative"],
          explain: "Because the inhibitor is present when an expected US is omitted, the model drives its strength below zero, making it a net predictor of no-US."
        },
        {
          type: "truefalse",
          q: "The feature-negative procedure interleaves reinforced A+ trials with non-reinforced AB- trials.",
          answer: true,
          explain: "Presenting A alone with the US but the AB compound without it teaches B to signal that the US will be omitted, making B inhibitory."
        },
        {
          type: "order",
          q: "Order the steps by which cue B becomes a conditioned inhibitor on AB- trials.",
          items: ["A+ trials make the V of A positive", "On AB- trials, A predicts the US", "But no US actually occurs (lambda = 0)", "Sum V exceeds lambda, so the error is negative", "B acquires negative associative strength"],
          explain: "A raises expectation on the non-reinforced compound trials; the missing US creates negative error that is absorbed by B, making it inhibitory."
        },
        {
          type: "match",
          q: "Match each test or term to its description.",
          pairs: [
            ["Summation test", "Inhibitor reduces the CR to a separate excitor"],
            ["Retardation test", "Inhibitor is slow to become excitatory later"],
            ["Conditioned inhibitor", "Signals that the US will not occur"]
          ],
          explain: "Conditioned inhibition is verified with the summation and retardation tests, both of which reveal the cue's negative associative value."
        },
        {
          type: "mcq",
          q: "In an A+/AB- procedure, cue B comes to signal:",
          choices: [
            "That the US is more likely",
            "That the US intensity has doubled",
            "That the US will not occur",
            "Nothing about the US"
          ],
          answer: 2,
          explain: "Because the US is omitted only when B is present, B becomes a reliable signal of no-US, the defining property of a conditioned inhibitor."
        },
        {
          type: "truefalse",
          q: "A conditioned inhibitor should speed up later excitatory conditioning to itself.",
          answer: false,
          explain: "The retardation test shows the opposite: an inhibitor, starting from negative strength, is slower than a neutral cue to become excitatory."
        }
      ]
    },
    {
      id: "l120",
      title: "Model Limits",
      intro: "Despite its successes, the Rescorla-Wagner model fails to explain latent inhibition and other phenomena, spurring attention-based successors.",
      questions: [
        {
          type: "mcq",
          q: "What does latent inhibition refer to?",
          choices: [
            "Faster conditioning after a cue is pre-exposed",
            "Slower conditioning to a cue that was pre-exposed without the US",
            "The loss of an established conditioned response",
            "Inhibition of a second, added cue"
          ],
          answer: 1,
          explain: "Latent inhibition is the finding that repeatedly presenting a CS alone, with no US, slows later conditioning to that CS."
        },
        {
          type: "fill",
          q: "The Rescorla-Wagner model cannot explain ____ inhibition, because a non-reinforced pre-exposed CS keeps its V at zero and so predicts no change.",
          answer: "latent",
          accept: ["latent"],
          explain: "With no US during pre-exposure, prediction error is zero and V stays at zero, so the model predicts no difference from a novel cue, contradicting the data."
        },
        {
          type: "truefalse",
          q: "Because the Rescorla-Wagner model treats each cue's salience (alpha) as fixed, it struggles with attention-based phenomena.",
          answer: true,
          explain: "Holding alpha constant means the model cannot capture how learning changes a cue's associability, which later attention models were built to address."
        },
        {
          type: "match",
          q: "Match each model to its central claim about attention or learning.",
          pairs: [
            ["Mackintosh (1975)", "Attention rises to cues that are good predictors"],
            ["Pearce-Hall (1980)", "Attention rises to cues whose outcomes are surprising"],
            ["Rescorla-Wagner (1972)", "Learning from a fixed-salience prediction error"]
          ],
          explain: "The Mackintosh and Pearce-Hall models add changing attention (associability), addressing effects like latent inhibition that the fixed-alpha Rescorla-Wagner model misses."
        },
        {
          type: "mcq",
          q: "Which phenomenon does the Rescorla-Wagner model FAIL to explain?",
          choices: [
            "Blocking",
            "Overshadowing",
            "Latent inhibition",
            "Overexpectation"
          ],
          answer: 2,
          explain: "The model handles blocking, overshadowing, and overexpectation well, but cannot account for latent inhibition, which involves a change in the cue's associability."
        },
        {
          type: "truefalse",
          q: "The Rescorla-Wagner model neatly accounts for spontaneous recovery of a response after extinction.",
          answer: false,
          explain: "The model treats extinction as unlearning that returns V toward zero, so it cannot easily explain why an extinguished response spontaneously returns over time."
        },
        {
          type: "fill",
          q: "The ____-Hall model of 1980 holds that attention increases to cues whose outcomes are surprising, explaining effects the Rescorla-Wagner model misses.",
          answer: "pearce",
          accept: ["pearce"],
          explain: "The Pearce-Hall model links associability to recent prediction error, capturing attentional phenomena such as latent inhibition."
        }
      ]
    }
  ]
});
