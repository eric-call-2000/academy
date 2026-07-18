window.ACADEMY.addUnit("behaviorism", {
  id: "unit-4",
  title: "Mechanisms of Classical Conditioning",
  color: "#14a58f",
  icon: "🔔",
  description: "Explore how conditioned responses spread, sharpen, chain, and misfire through generalization, discrimination, higher-order conditioning, and Siegel's compensatory-response model.",
  lessons: [
    {
      id: "l25",
      title: "Stimulus Generalization",
      intro: "After conditioning, stimuli that merely resemble the CS can trigger the conditioned response even though they were never paired with the US.",
      questions: [
        {
          type: "mcq",
          q: "What is stimulus generalization?",
          choices: [
            "Responding with the CR to stimuli that resemble the original CS",
            "Learning to respond only to the exact CS and nothing else",
            "The gradual weakening of a CR when the US is withheld",
            "Pairing two neutral stimuli together with no US"
          ],
          answer: 0,
          explain: "Generalization is the tendency for stimuli similar to the CS to elicit the conditioned response even without direct training."
        },
        {
          type: "truefalse",
          q: "In Watson and Rayner's Little Albert study, the infant's conditioned fear of the white rat spread to a rabbit, a dog, and a fur coat.",
          answer: true,
          explain: "Albert's fear generalized to other furry, whitish objects, a classic demonstration of stimulus generalization."
        },
        {
          type: "fill",
          q: "The more a new stimulus ____ the original CS, the stronger the generalized response tends to be.",
          answer: "resembles",
          accept: ["resembles", "resemble", "is similar to", "similar", "matches"],
          explain: "Generalization strength rises with the similarity between the test stimulus and the trained CS."
        },
        {
          type: "match",
          q: "Match each term to its role in generalization.",
          pairs: [
            ["Conditioned stimulus (CS)", "The trained cue that reliably evokes the CR"],
            ["Generalized stimulus", "A similar, untrained cue that also evokes the CR"],
            ["Conditioned response (CR)", "The learned reaction triggered by the CS or similar cues"]
          ],
          explain: "The CR, first tied to the CS, also appears to nearby stimuli through generalization."
        },
        {
          type: "mcq",
          q: "A dog conditioned to salivate to a 1000 Hz tone also salivates to a 1200 Hz tone it never heard in training. This illustrates:",
          choices: [
            "Extinction",
            "Stimulus generalization",
            "Spontaneous recovery",
            "Higher-order conditioning"
          ],
          answer: 1,
          explain: "The response transfers to a similar but untrained tone, which is exactly what generalization describes."
        },
        {
          type: "truefalse",
          q: "Stimulus generalization has no survival value and is simply an error of the nervous system.",
          answer: false,
          explain: "Generalization is adaptive: it lets a learned response transfer to new but similar and relevant situations."
        },
        {
          type: "order",
          q: "Order the events that produce a generalized response.",
          items: [
            "A neutral stimulus is repeatedly paired with a US",
            "The stimulus becomes a CS that evokes a CR",
            "A new, similar stimulus is presented",
            "The similar stimulus evokes the CR without any training"
          ],
          explain: "Once a CS is established, a resembling stimulus can trigger the CR on its own through generalization."
        }
      ]
    },
    {
      id: "l26",
      title: "Stimulus Discrimination",
      intro: "Discrimination is the flip side of generalization: the organism learns to respond to one specific cue and to withhold responding to similar ones.",
      questions: [
        {
          type: "mcq",
          q: "Stimulus discrimination is best defined as:",
          choices: [
            "Responding equally to a wide range of similar stimuli",
            "Responding to the CS but not to similar stimuli that do not signal the US",
            "Losing the CR entirely across all stimuli",
            "Pairing a CS with a second neutral stimulus"
          ],
          answer: 1,
          explain: "Discrimination narrows responding so the CR occurs to the trained cue and not to look-alike cues."
        },
        {
          type: "truefalse",
          q: "Discrimination training typically involves pairing one stimulus with the US while presenting a similar stimulus without the US.",
          answer: true,
          explain: "Differential reinforcement, CS+ followed by the US and CS- without it, sharpens discrimination."
        },
        {
          type: "fill",
          q: "Pavlov produced discrimination by pairing one tone with food and presenting a different tone with ____ food, so the dog salivated only to the first.",
          answer: "no",
          accept: ["no", "without", "no food", "none"],
          explain: "By never following the second tone with food, Pavlov taught the dog to respond only to the reinforced tone."
        },
        {
          type: "match",
          q: "Match each term to its meaning in discrimination.",
          pairs: [
            ["CS+", "A cue that is followed by the US"],
            ["CS-", "A similar cue that is never followed by the US"],
            ["Discrimination", "Responding to CS+ but withholding the CR to CS-"]
          ],
          explain: "The animal learns the CS+ predicts the US while the CS- does not, and responds accordingly."
        },
        {
          type: "mcq",
          q: "Generalization and discrimination are best described as:",
          choices: [
            "Identical processes with different names",
            "Complementary opposites that balance each other",
            "Two forms of extinction",
            "Processes unrelated to conditioning"
          ],
          answer: 1,
          explain: "Generalization broadens responding while discrimination narrows it; together they tune behavior to the right cues."
        },
        {
          type: "order",
          q: "Order the steps of discrimination training.",
          items: [
            "Present the CS+ paired with the US",
            "Present a similar CS- without the US",
            "Repeat both cues across many trials",
            "The CR now occurs to the CS+ only"
          ],
          explain: "Repeated differential pairing teaches the organism to separate the reinforced cue from the unreinforced one."
        },
        {
          type: "truefalse",
          q: "Once discrimination is learned, the organism responds equally to CS+ and CS-.",
          answer: false,
          explain: "Discrimination means the CR appears to the CS+ but is withheld to the CS-, not delivered equally to both."
        }
      ]
    },
    {
      id: "l27",
      title: "Generalization Gradient",
      intro: "A generalization gradient plots response strength against how similar test stimuli are to the CS, peaking at the CS and falling as similarity drops.",
      questions: [
        {
          type: "mcq",
          q: "A generalization gradient shows that response strength is:",
          choices: [
            "Greatest for the CS and declines as stimuli become less similar",
            "Equal across all stimuli regardless of similarity",
            "Greatest for the most dissimilar stimulus",
            "Zero at the CS itself"
          ],
          answer: 0,
          explain: "The gradient peaks at the training stimulus and tapers off as stimuli grow more different from it."
        },
        {
          type: "truefalse",
          q: "The peak of a typical generalization gradient falls at or very near the original CS.",
          answer: true,
          explain: "The strongest CR occurs to the training stimulus, with responding declining on either side."
        },
        {
          type: "fill",
          q: "A flat generalization gradient indicates poor discrimination, while a steep gradient indicates ____ discrimination.",
          answer: "good",
          accept: ["good", "sharp", "strong", "precise", "fine"],
          explain: "A steep gradient means responding drops quickly, so the organism clearly tells the CS from similar cues."
        },
        {
          type: "match",
          q: "Match each gradient feature to what it represents.",
          pairs: [
            ["Gradient peak", "Response to the training CS"],
            ["Gradient slope", "How fast responding declines with dissimilarity"],
            ["Flat gradient", "Broad generalization and weak discrimination"],
            ["Steep gradient", "Narrow responding and strong discrimination"]
          ],
          explain: "The shape of the gradient reveals how broadly or narrowly the learned response has spread."
        },
        {
          type: "mcq",
          q: "A pigeon trained to peck at a 550 nm light pecks most to 550 nm and progressively less at 540 and 560 nm. This pattern is a:",
          choices: [
            "Extinction curve",
            "Learning curve",
            "Generalization gradient",
            "Fixed-ratio schedule"
          ],
          answer: 2,
          explain: "Guttman and Kalish (1956) documented exactly this wavelength gradient, with responding highest at the trained color."
        },
        {
          type: "truefalse",
          q: "The steeper the generalization gradient, the more broadly the animal responds to dissimilar stimuli.",
          answer: false,
          explain: "A steeper gradient means responding falls off faster, so the animal responds more narrowly, not more broadly."
        },
        {
          type: "order",
          q: "For a CS of a 1000 Hz tone, order these test tones from strongest to weakest expected response.",
          items: [
            "1000 Hz tone (the CS)",
            "1100 Hz tone",
            "1400 Hz tone",
            "2000 Hz tone"
          ],
          explain: "Response strength declines steadily as the tone moves further from the trained CS frequency."
        }
      ]
    },
    {
      id: "l28",
      title: "Higher-Order Conditioning",
      intro: "In higher-order conditioning an already-established CS acts like a US, giving a brand-new neutral stimulus the power to evoke the CR.",
      questions: [
        {
          type: "mcq",
          q: "In higher-order conditioning, a new neutral stimulus is paired with:",
          choices: [
            "The unconditioned stimulus",
            "An already-established conditioned stimulus",
            "Nothing at all",
            "The unconditioned response"
          ],
          answer: 1,
          explain: "The new cue borrows its power from an existing CS rather than from the original US."
        },
        {
          type: "truefalse",
          q: "Higher-order conditioning lets learning extend to new cues without any further presentations of the original US.",
          answer: true,
          explain: "The established CS substitutes for the US, so the US itself need not appear during the new pairings."
        },
        {
          type: "fill",
          q: "In higher-order conditioning, the previously conditioned stimulus functions much like an ____ stimulus for the new cue.",
          answer: "unconditioned",
          accept: ["unconditioned", "us", "unconditioned stimulus"],
          explain: "The prior CS takes on the role the US once played, driving new learning."
        },
        {
          type: "order",
          q: "Order the steps of higher-order conditioning.",
          items: [
            "A neutral stimulus (NS1) is paired with a US until it becomes CS1",
            "CS1 reliably evokes the CR on its own",
            "A new neutral stimulus (NS2) is paired with CS1",
            "NS2 becomes CS2 and evokes the CR by itself"
          ],
          explain: "An established CS is used to condition a further stimulus, extending the association a step further."
        },
        {
          type: "mcq",
          q: "Which is generally true of the CR produced by higher-order conditioning?",
          choices: [
            "It is stronger than the response to the original CS",
            "It is usually weaker and more fragile than the first-order CR",
            "It never extinguishes",
            "It requires the US on every trial"
          ],
          answer: 1,
          explain: "Because no US backs it up, a higher-order CR is typically weaker and extinguishes more readily."
        },
        {
          type: "truefalse",
          q: "In practice, higher-order conditioning rarely extends beyond the second or third order because the response grows weaker at each step.",
          answer: true,
          explain: "Each additional link lacks direct US support, so responding fades and third-order effects are hard to demonstrate."
        },
        {
          type: "match",
          q: "Match each term to its description.",
          pairs: [
            ["First-order conditioning", "A neutral stimulus paired directly with the US"],
            ["Higher-order conditioning", "A neutral stimulus paired with an established CS"],
            ["CS1", "The product of pairing a cue with the US"],
            ["CS2", "A new cue that gained its power from CS1"]
          ],
          explain: "Higher-order conditioning stacks a new association on top of a CS built by first-order conditioning."
        }
      ]
    },
    {
      id: "l29",
      title: "Second-Order Conditioning",
      intro: "Second-order conditioning is the first and most-studied step of higher-order conditioning: a new cue is paired with a single established CS while the US is never presented.",
      questions: [
        {
          type: "mcq",
          q: "Second-order conditioning specifically refers to:",
          choices: [
            "Pairing a new stimulus with a CS that itself became a CS through one round of US pairing",
            "Pairing two unconditioned stimuli together",
            "The extinction of a second-order CS",
            "A schedule of partial reinforcement"
          ],
          answer: 0,
          explain: "In second-order conditioning the new cue is trained against CS1, which had earlier been paired with the US."
        },
        {
          type: "truefalse",
          q: "During the second-order phase, the unconditioned stimulus is deliberately absent; only CS1 and the new cue are paired.",
          answer: true,
          explain: "The defining feature is that CS2 gains strength from CS1 alone, with no US present."
        },
        {
          type: "fill",
          q: "Second-order conditioning is the second link in a broader process called ____-order conditioning.",
          answer: "higher",
          accept: ["higher", "higher order", "high"],
          explain: "Second-order conditioning is simply the first extension within the larger family of higher-order conditioning."
        },
        {
          type: "order",
          q: "Put this second-order conditioning experiment in order.",
          items: [
            "Pair a bell with food until the bell (CS1) evokes salivation",
            "Stop presenting the food",
            "Pair a black square (CS2) with the bell (CS1)",
            "The black square alone now evokes salivation"
          ],
          explain: "CS2 acquires the CR from CS1 during pairings in which the US (food) never appears."
        },
        {
          type: "match",
          q: "Match each element of a second-order conditioning study to what it is.",
          pairs: [
            ["US", "Food, never given during the second-order phase"],
            ["CS1", "Bell, trained first with food"],
            ["CS2", "Black square, trained with the bell"],
            ["CR", "Salivation"]
          ],
          explain: "CS2 comes to evoke the CR through its pairing with CS1, without any direct link to the US."
        },
        {
          type: "mcq",
          q: "Why does a second-order CR often extinguish quickly?",
          choices: [
            "Because the US is never delivered to sustain it",
            "Because CS1 is too strong",
            "Because the response is innate",
            "Because the CR is actually unconditioned"
          ],
          answer: 0,
          explain: "With no US ever reinforcing CS2, its associative strength is fragile and fades rapidly."
        },
        {
          type: "truefalse",
          q: "Second-order conditioning proves that learning always requires a direct pairing with a biologically significant US.",
          answer: false,
          explain: "It shows the opposite: a cue can gain associative strength from another CS, with no direct US pairing at all."
        }
      ]
    },
    {
      id: "l30",
      title: "Excitatory and Inhibitory",
      intro: "Conditioning can make a stimulus signal that the US is coming (excitatory) or signal that the US will not come (inhibitory), suppressing the response.",
      questions: [
        {
          type: "mcq",
          q: "An excitatory conditioned stimulus is one that:",
          choices: [
            "Signals the US will occur and elicits the CR",
            "Signals the US will not occur",
            "Has no effect on behavior",
            "Is identical to the US"
          ],
          answer: 0,
          explain: "An excitatory CS predicts the US, so it raises the expectation of the US and elicits the CR."
        },
        {
          type: "mcq",
          q: "A conditioned inhibitor (CS-) is a stimulus that:",
          choices: [
            "Predicts the US and boosts responding",
            "Predicts the absence of the US and suppresses the CR",
            "Is the same thing as an unconditioned stimulus",
            "Always produces experimental neurosis"
          ],
          answer: 1,
          explain: "A conditioned inhibitor signals that the US will not arrive, lowering the expectation and damping the CR."
        },
        {
          type: "truefalse",
          q: "A conditioned inhibitor signals safety, that the expected US will not arrive, and dampens the conditioned response.",
          answer: true,
          explain: "Inhibitory conditioning creates a cue for the absence of the US, which suppresses responding."
        },
        {
          type: "fill",
          q: "A stimulus that reliably predicts the US and increases responding is called an ____ conditioned stimulus.",
          answer: "excitatory",
          accept: ["excitatory", "excitor", "excitation"],
          explain: "Excitatory conditioning builds a cue that signals the US is coming and thereby raises the CR."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [
            ["Excitatory CS (CS+)", "Signals the US is coming and elicits the CR"],
            ["Inhibitory CS (CS-)", "Signals the US is absent and suppresses the CR"],
            ["Summation test", "Checks whether a CS- reduces responding to a known CS+"]
          ],
          explain: "Rescorla's summation and retardation tests are standard ways to confirm a conditioned inhibitor."
        },
        {
          type: "order",
          q: "Rank these from most response-suppressing to most response-eliciting.",
          items: [
            "A strong conditioned inhibitor (CS-)",
            "A neutral stimulus",
            "A strong excitatory CS (CS+)"
          ],
          explain: "Inhibitors lower the expectation of the US, neutral cues are in the middle, and excitors raise it."
        },
        {
          type: "truefalse",
          q: "Excitation and inhibition are the same process under two different names.",
          answer: false,
          explain: "They are opposite associative tendencies: one raises and the other lowers the expectation of the US."
        }
      ]
    },
    {
      id: "l31",
      title: "Experimental Neurosis",
      intro: "When Pavlov's dogs were pushed to make a discrimination that became impossible, they broke down into agitated, disturbed behavior he called experimental neurosis.",
      questions: [
        {
          type: "mcq",
          q: "Experimental neurosis refers to:",
          choices: [
            "A fast, efficient form of learning",
            "Disturbed, agitated behavior produced when a required discrimination becomes impossible",
            "The ordinary extinction of a CR",
            "A schedule of partial reinforcement"
          ],
          answer: 1,
          explain: "Pavlov used the term for the breakdown in behavior that occurred when a discrimination task exceeded the animal's capacity."
        },
        {
          type: "truefalse",
          q: "In the classic study a dog was trained to discriminate a circle from an ellipse, and breakdown occurred as the ellipse was gradually reshaped to look almost like the circle.",
          answer: true,
          explain: "Shenger-Krestovnikova's study in Pavlov's lab pushed the ellipse toward a circle until discrimination collapsed and the dog became disturbed."
        },
        {
          type: "fill",
          q: "Pavlov reported that the neurotic dogs lost previously learned discriminations and showed agitation, squealing, and struggling, a state he compared to a human ____ breakdown.",
          answer: "nervous",
          accept: ["nervous", "neurotic", "mental", "emotional"],
          explain: "Pavlov drew an analogy between these disturbed dogs and human nervous or neurotic breakdowns."
        },
        {
          type: "match",
          q: "Match each element of the circle-ellipse study to its role.",
          pairs: [
            ["Circle", "Shape paired with food (CS+)"],
            ["Ellipse", "Shape paired with no food (CS-)"],
            ["Near-circular ellipse", "Impossible discrimination that triggered breakdown"],
            ["Experimental neurosis", "Agitated, disorganized behavior that resulted"]
          ],
          explain: "As the CS+ and CS- became indistinguishable, the conflict between them produced the neurotic breakdown."
        },
        {
          type: "mcq",
          q: "Which factor was key to producing experimental neurosis?",
          choices: [
            "Giving the animal too much food",
            "Forcing a discrimination that exceeded the animal's sensory capacity",
            "Removing the animal from the lab",
            "Using only excitatory conditioning"
          ],
          answer: 1,
          explain: "The clash between excitation and inhibition when the two cues became indistinguishable drove the disturbance."
        },
        {
          type: "order",
          q: "Order the sequence that led to experimental neurosis.",
          items: [
            "The dog learns circle equals food and ellipse equals no food",
            "The ellipse is gradually made rounder",
            "The two shapes become nearly indistinguishable",
            "The dog's behavior breaks down into agitation"
          ],
          explain: "The breakdown followed directly from making the required discrimination impossible."
        },
        {
          type: "truefalse",
          q: "Experimental neurosis suggested to Pavlov that conditioning methods could model the emergence of abnormal, disordered behavior.",
          answer: true,
          explain: "The findings linked classical conditioning to theories of how stress and conflict can generate psychological disturbance."
        }
      ]
    },
    {
      id: "l32",
      title: "Conditioned Compensatory Responses",
      intro: "Shepard Siegel showed that cues surrounding drug use trigger compensatory responses opposite to the drug's effect, explaining tolerance and why a usual dose can be fatal in a new setting.",
      questions: [
        {
          type: "mcq",
          q: "In Siegel's model, the conditioned response to drug-associated cues is:",
          choices: [
            "Identical to the drug's direct effect",
            "Opposite to the drug's direct effect (a compensatory response)",
            "Completely unrelated to the drug",
            "Always absent"
          ],
          answer: 1,
          explain: "The body prepares for the drug by mounting a response that counteracts it, which is what produces tolerance."
        },
        {
          type: "truefalse",
          q: "Because the compensatory CR offsets part of the drug's effect, it contributes to drug tolerance.",
          answer: true,
          explain: "Cues elicit an anticipatory opposite response, so the same dose produces a smaller net effect over time."
        },
        {
          type: "fill",
          q: "Siegel argued that much drug tolerance is ____-specific: it is strongest in the environment where the drug is usually taken.",
          answer: "situation",
          accept: ["situation", "situational", "context", "environment", "setting"],
          explain: "The compensatory response is cued by the usual setting, so tolerance travels with those cues."
        },
        {
          type: "mcq",
          q: "Siegel's model explains why a tolerant user who takes the usual dose in an unfamiliar place can overdose, because:",
          choices: [
            "The drug itself is chemically stronger there",
            "Familiar drug cues are absent, so the compensatory CR is not triggered and tolerance drops",
            "Users always take a larger amount in new places",
            "The drug becomes an unconditioned stimulus"
          ],
          answer: 1,
          explain: "Without the usual cues, the protective compensatory response is not elicited, so the same dose hits far harder."
        },
        {
          type: "match",
          q: "Match each component of Siegel's model to its meaning.",
          pairs: [
            ["US (drug effect)", "The direct physiological action of the drug"],
            ["Drug-paired cues", "The room, ritual, and paraphernalia of use"],
            ["Compensatory CR", "An anticipatory response opposite to the drug"],
            ["Novel setting", "Cues absent, tolerance reduced, overdose risk raised"]
          ],
          explain: "Tolerance depends on the cues that normally trigger the body's compensatory reaction."
        },
        {
          type: "truefalse",
          q: "Siegel's rat studies found that heroin-tolerant rats given their usual dose in a novel environment had much lower mortality than those tested in the familiar drug environment.",
          answer: false,
          explain: "It was the reverse: in Siegel et al. (1982), rats tested in the novel environment lacked the compensatory cues and died at far higher rates."
        },
        {
          type: "order",
          q: "Trace Siegel's overdose logic in order.",
          items: [
            "Repeated drug use in a fixed setting builds conditioned compensatory responses to that setting",
            "Those cues cause tolerance, so the usual dose feels weaker",
            "The user takes the usual dose in a new, cue-free setting",
            "The compensatory response is missing, and the dose overwhelms the body"
          ],
          explain: "Removing the learned cues strips away the tolerance they supported, turning a familiar dose into an overdose."
        }
      ]
    }
  ]
});
