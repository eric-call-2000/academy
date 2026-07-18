window.ACADEMY.addUnit("behaviorism", {
  id: "unit-3",
  title: "Pavlov and Classical Conditioning",
  color: "#14a58f",
  icon: "🔔",
  description: "Trace Ivan Pavlov's path from digestion research to the conditioned reflex, and learn the terms, timing, and processes that govern classical conditioning.",
  lessons: [
    {
      id: "l17",
      title: "From Digestion to Reflexes",
      intro: "Pavlov's study of salivary secretion in dogs led him to discover that reflexes could be learned.",
      questions: [
        {
          type: "mcq",
          q: "For what research did Ivan Pavlov receive the 1904 Nobel Prize?",
          choices: ["The physiology of digestion", "The theory of evolution", "The structure of the neuron", "The anatomy of the spinal cord"],
          answer: 0,
          explain: "Pavlov won the 1904 Nobel Prize in Physiology or Medicine for his work on the digestive glands, not for conditioning, which he studied later."
        },
        {
          type: "truefalse",
          q: "Pavlov's Nobel Prize was awarded for his work on digestion, not for classical conditioning.",
          answer: true,
          explain: "The conditioned reflex came out of his digestion research; his Nobel recognition was specifically for the physiology of digestion."
        },
        {
          type: "fill",
          q: "Pavlov called the dogs' anticipatory salivation, which appeared before food touched the mouth, ____ secretions.",
          answer: "psychic",
          accept: ["psychic", "psychical"],
          explain: "He first labeled the anticipatory drooling 'psychic secretions' before reframing it as a measurable conditioned reflex."
        },
        {
          type: "match",
          q: "Match each element of Pavlov's early work to its role.",
          pairs: [
            ["Salivary glands", "Where Pavlov measured secretions in dogs"],
            ["Nobel Prize 1904", "Awarded for his digestion research"],
            ["Psychic secretion", "Salivation before food is even tasted"]
          ],
          explain: "Pavlov measured salivary output while studying digestion, and the puzzling anticipatory ('psychic') secretions pointed him toward conditioning."
        },
        {
          type: "order",
          q: "Put Pavlov's shift of scientific focus in the correct order.",
          items: ["Study digestive secretions in dogs", "Notice salivation before food arrives", "Investigate these anticipatory reflexes", "Formulate the conditioned reflex"],
          explain: "The unexpected early salivation observed during digestion experiments drove Pavlov to study, then formalize, the conditioned reflex."
        },
        {
          type: "mcq",
          q: "Which observation redirected Pavlov toward the study of learning?",
          choices: ["Dogs refused to eat in the lab", "Dogs salivated at the sight of the attendant who fed them", "Dogs stopped digesting food", "Dogs slept during the trials"],
          answer: 1,
          explain: "Dogs began salivating to cues that reliably preceded food, such as the sight of the feeder, revealing a learned rather than innate reflex."
        },
        {
          type: "truefalse",
          q: "Pavlov began his career as a psychologist studying the human mind.",
          answer: false,
          explain: "Pavlov was trained as a physiologist and always described his conditioning work in physiological, not psychological, terms."
        }
      ]
    },
    {
      id: "l18",
      title: "The Four Terms",
      intro: "Classical conditioning is built from four precise parts: the US, UR, CS, and CR.",
      questions: [
        {
          type: "match",
          q: "Match each conditioning term to its definition.",
          pairs: [
            ["US", "Stimulus that naturally triggers a response without learning"],
            ["UR", "Unlearned, automatic reaction to the US"],
            ["CS", "Neutral stimulus that gains power through pairing"],
            ["CR", "Learned response produced by the CS"]
          ],
          explain: "The US and UR are innate and automatic; the CS and CR are learned through repeated pairing of a neutral stimulus with the US."
        },
        {
          type: "mcq",
          q: "In Pavlov's experiment, what is the unconditioned stimulus (US)?",
          choices: ["The metronome", "The food", "The salivation to the metronome", "The dog's hunger"],
          answer: 1,
          explain: "Food naturally and automatically triggers salivation without any training, which makes it the unconditioned stimulus."
        },
        {
          type: "truefalse",
          q: "Before conditioning, the CS is a neutral stimulus that does not produce the CR.",
          answer: true,
          explain: "A metronome or buzzer means nothing to the dog at first; it only elicits salivation after being paired with food."
        },
        {
          type: "fill",
          q: "Salivation produced automatically by food in the mouth is the ____ response.",
          answer: "unconditioned",
          accept: ["unconditioned", "unconditional", "ur"],
          explain: "The automatic, unlearned reaction to the US is called the unconditioned response (UR)."
        },
        {
          type: "mcq",
          q: "The salivation triggered by a metronome after training is called the:",
          choices: ["Conditioned response", "Unconditioned response", "Conditioned stimulus", "Unconditioned stimulus"],
          answer: 0,
          explain: "Salivation elicited by the trained metronome is a learned reaction to a CS, making it the conditioned response (CR)."
        },
        {
          type: "truefalse",
          q: "The unconditioned response and the conditioned response can look identical, such as both being salivation, even though different stimuli trigger them.",
          answer: true,
          explain: "The topography can match (salivation), but the UR is triggered by the US while the CR is triggered by the CS."
        },
        {
          type: "mcq",
          q: "Which statement correctly identifies the CS and US in Pavlov's classic study?",
          choices: ["The metronome is the CS and the food is the US", "The food is the CS and the metronome is the US", "The salivation is the CS and the food is the US", "The food is the CR and the metronome is the CS"],
          answer: 0,
          explain: "The originally neutral metronome becomes the CS, while the naturally effective food is the US."
        }
      ]
    },
    {
      id: "l19",
      title: "Acquisition",
      intro: "Acquisition is the stage where repeated CS-US pairings build up the conditioned response.",
      questions: [
        {
          type: "mcq",
          q: "Acquisition refers to:",
          choices: ["The automatic reflex to food", "The fading of a learned response", "The initial stage in which CS and US are paired to build the CR", "The return of a response after a rest period"],
          answer: 2,
          explain: "Acquisition is the phase where a neutral stimulus, paired with the US, gradually comes to elicit the conditioned response."
        },
        {
          type: "truefalse",
          q: "During acquisition, each CS-US pairing tends to strengthen the conditioned response.",
          answer: true,
          explain: "Repeated pairings build associative strength, so the CR usually grows stronger and more reliable over trials."
        },
        {
          type: "fill",
          q: "In acquisition, the neutral stimulus is repeatedly ____ with the unconditioned stimulus.",
          answer: "paired",
          accept: ["paired", "associated"],
          explain: "Learning depends on the CS being reliably paired with the US across trials."
        },
        {
          type: "order",
          q: "Order the events within a single acquisition trial (delayed conditioning).",
          items: ["Metronome (CS) starts", "Food (US) is presented", "Dog salivates", "The CS-US association is strengthened"],
          explain: "The CS begins, the US follows, the response occurs, and the pairing further strengthens the learned link."
        },
        {
          type: "mcq",
          q: "The graph showing a conditioned response getting stronger over repeated pairings is the ____ curve.",
          choices: ["Extinction", "Acquisition", "Recovery", "Inhibition"],
          answer: 1,
          explain: "The rising curve of CR strength across pairings is called the acquisition curve."
        },
        {
          type: "truefalse",
          q: "A single pairing of CS and US always produces a fully learned, permanent conditioned response.",
          answer: false,
          explain: "Conditioning typically requires several pairings; strength builds gradually rather than instantly from one trial."
        },
        {
          type: "mcq",
          q: "Up to a point, what happens to the conditioned response as the number of pairings increases?",
          choices: ["It grows stronger and more reliable", "It disappears immediately", "It stays exactly the same", "It turns into the unconditioned response"],
          answer: 0,
          explain: "Added pairings increase associative strength, so the CR becomes stronger and more consistent until it levels off."
        }
      ]
    },
    {
      id: "l20",
      title: "Timing of Pairings",
      intro: "The order and timing of the CS and US define delay, trace, simultaneous, and backward conditioning.",
      questions: [
        {
          type: "match",
          q: "Match each conditioning arrangement to its timing.",
          pairs: [
            ["Delay", "CS begins and stays on until the US appears"],
            ["Trace", "CS starts and ends, then a gap before the US"],
            ["Simultaneous", "CS and US occur at the same time"],
            ["Backward", "US comes before the CS"]
          ],
          explain: "These four arrangements differ in when the CS turns on and off relative to the US."
        },
        {
          type: "mcq",
          q: "Which timing arrangement is generally the most effective for producing conditioning?",
          choices: ["Backward conditioning", "Simultaneous conditioning", "Short-delay conditioning", "Trace conditioning with a long gap"],
          answer: 2,
          explain: "Short-delay conditioning, where the CS precedes and overlaps the US, usually yields the strongest, most reliable learning."
        },
        {
          type: "truefalse",
          q: "In backward conditioning the US is presented before the CS, and it usually produces weak or no conditioning.",
          answer: true,
          explain: "When the US precedes the CS, the CS predicts nothing new, so backward conditioning is typically very weak or ineffective."
        },
        {
          type: "order",
          q: "Order these arrangements from generally most effective to least effective at producing a CR.",
          items: ["Delay conditioning", "Trace conditioning", "Simultaneous conditioning", "Backward conditioning"],
          explain: "Delay conditioning is usually strongest, trace next, while simultaneous and backward arrangements are weak because the CS poorly predicts the US."
        },
        {
          type: "fill",
          q: "In ____ conditioning, the CS turns on and off before the US appears, leaving a time gap between them.",
          answer: "trace",
          accept: ["trace"],
          explain: "The gap requires the animal to hold a 'trace' of the CS in memory until the US arrives, which is why it is called trace conditioning."
        },
        {
          type: "mcq",
          q: "In simultaneous conditioning, the CS and US:",
          choices: ["Never overlap at all", "Occur at exactly the same time", "Are separated by several hours", "Are actually the same stimulus"],
          answer: 1,
          explain: "Simultaneous conditioning presents the CS and US together; because the CS adds no predictive value, learning is usually weak."
        },
        {
          type: "truefalse",
          q: "Simultaneous and backward conditioning typically produce stronger CRs than delay conditioning.",
          answer: false,
          explain: "Delay conditioning is generally the strongest arrangement; simultaneous and backward conditioning are the weakest."
        }
      ]
    },
    {
      id: "l21",
      title: "Extinction",
      intro: "Presenting the CS alone, without the US, gradually weakens the conditioned reflex.",
      questions: [
        {
          type: "mcq",
          q: "Extinction occurs when:",
          choices: ["The US is presented alone repeatedly", "The CS is presented repeatedly without the US", "The CS and US are paired again", "The dog is given extra food"],
          answer: 1,
          explain: "Repeatedly presenting the CS with no US following it causes the conditioned response to fade, which is extinction."
        },
        {
          type: "truefalse",
          q: "During extinction, the conditioned response gradually weakens and may disappear.",
          answer: true,
          explain: "Without the US to back it up, the CS loses its power and the CR declines over trials."
        },
        {
          type: "fill",
          q: "Extinction happens when the conditioned stimulus is presented ____ the unconditioned stimulus.",
          answer: "without",
          accept: ["without", "alone without"],
          explain: "The defining feature of extinction is CS-alone trials, with the US omitted."
        },
        {
          type: "order",
          q: "Order the steps that lead to extinction.",
          items: ["A CR is well established", "The CS is presented alone with no US", "The CR weakens over trials", "The CR stops appearing"],
          explain: "Starting from a learned CR, repeated unreinforced CS presentations drive the response down until it disappears."
        },
        {
          type: "mcq",
          q: "Pavlov argued that extinction is not simple forgetting but the building of an active ____ process.",
          choices: ["Inhibition", "Excitation", "Salivation", "Digestion"],
          answer: 0,
          explain: "Pavlov proposed that extinction reflects active internal inhibition that suppresses the CR rather than erasing the memory."
        },
        {
          type: "truefalse",
          q: "Extinction permanently erases the original CS-US association from the brain.",
          answer: false,
          explain: "The later reappearance of the CR (spontaneous recovery) shows the original learning is suppressed, not erased."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Extinction", "CR fades when the CS is repeated without the US"],
            ["Inhibition", "Active process Pavlov said suppresses the CR"],
            ["Acquisition", "Building the CR through CS-US pairings"]
          ],
          explain: "Acquisition builds the response, extinction weakens it, and Pavlov attributed extinction to active inhibition."
        }
      ]
    },
    {
      id: "l22",
      title: "Spontaneous Recovery",
      intro: "After extinction and a rest period, an extinguished conditioned response can reappear on its own.",
      questions: [
        {
          type: "mcq",
          q: "Spontaneous recovery is:",
          choices: ["The first learning of a CR", "The reappearance of an extinguished CR after a rest period", "The strengthening of a CR through pairings", "The automatic response to food"],
          answer: 1,
          explain: "Spontaneous recovery is the return of a previously extinguished conditioned response following a break, with no new pairings."
        },
        {
          type: "truefalse",
          q: "Spontaneous recovery shows that extinction does not completely erase the original learning.",
          answer: true,
          explain: "Because the CR returns after rest, the original association must have been suppressed rather than destroyed."
        },
        {
          type: "fill",
          q: "After extinction and a ____ period, presenting the CS again can revive the conditioned response.",
          answer: "rest",
          accept: ["rest", "time", "pause"],
          explain: "A time gap after extinction sets the stage for the CR to reappear when the CS is presented again."
        },
        {
          type: "order",
          q: "Order the sequence that demonstrates spontaneous recovery.",
          items: ["Condition the response through acquisition", "Extinguish the response", "Wait through a rest interval", "Present the CS and see the CR return"],
          explain: "Only after a response is acquired, extinguished, and then rested can spontaneous recovery be observed."
        },
        {
          type: "mcq",
          q: "Compared with the original conditioned response, a spontaneously recovered CR is usually:",
          choices: ["Much stronger", "Exactly the same", "Weaker", "An unconditioned response"],
          answer: 2,
          explain: "The recovered response typically returns at reduced strength compared with the fully conditioned original."
        },
        {
          type: "truefalse",
          q: "A spontaneously recovered response is always as strong as the original conditioned response.",
          answer: false,
          explain: "Recovered CRs are generally weaker than the original and extinguish again more quickly."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [
            ["Extinction", "CR fades during CS-alone trials"],
            ["Rest interval", "Time gap following extinction"],
            ["Spontaneous recovery", "Weakened CR reappears after rest"]
          ],
          explain: "Extinction reduces the CR, and after a rest interval spontaneous recovery brings back a weaker version of it."
        }
      ]
    },
    {
      id: "l23",
      title: "Pavlov's Apparatus",
      intro: "Pavlov's surgical fistula and controlled setup let him measure salivation drop by drop.",
      questions: [
        {
          type: "mcq",
          q: "Pavlov measured salivation using a surgically implanted:",
          choices: ["Electrode", "Fistula", "Feeding tube", "Blood pressure cuff"],
          answer: 1,
          explain: "A fistula, a surgical opening connected to a salivary duct, channeled saliva outside the body so it could be measured."
        },
        {
          type: "truefalse",
          q: "A fistula allowed Pavlov to collect and precisely measure the saliva a dog produced.",
          answer: true,
          explain: "The fistula diverted saliva to a container or tube, giving Pavlov an exact, quantifiable measure of the response."
        },
        {
          type: "fill",
          q: "Pavlov quantified conditioning by counting the ____ of saliva secreted.",
          answer: "drops",
          accept: ["drops", "drop"],
          explain: "Salivation was recorded as the number of drops (or volume) secreted, turning a reflex into precise data."
        },
        {
          type: "match",
          q: "Match each part of the apparatus to its purpose.",
          pairs: [
            ["Fistula", "Diverts saliva out of the body to be measured"],
            ["Harness and stand", "Keeps the dog still and isolated"],
            ["Metronome or buzzer", "Serves as the conditioned stimulus"]
          ],
          explain: "The fistula measured the response, the harness controlled the animal, and a neutral sound served as the CS."
        },
        {
          type: "mcq",
          q: "Why did Pavlov place the dog in a quiet, controlled, isolated room?",
          choices: ["To prevent stray stimuli from affecting the results", "To make the dog fall asleep", "To speed up digestion", "To hide the equipment from view"],
          answer: 0,
          explain: "Isolation removed distracting stimuli so that only the intended CS and US influenced the dog's salivation."
        },
        {
          type: "truefalse",
          q: "Pavlov relied only on subjective impressions and never quantified salivation.",
          answer: false,
          explain: "His whole method was built on objective, precise measurement of salivary drops, not subjective judgment."
        },
        {
          type: "order",
          q: "Order the steps of Pavlov's experimental setup.",
          items: ["Surgically implant a fistula on a salivary duct", "Place the dog in a harness in an isolated room", "Present the CS and US", "Collect and count the drops of saliva"],
          explain: "Pavlov prepared the fistula, restrained and isolated the dog, delivered the stimuli, and then measured the salivary output."
        }
      ]
    },
    {
      id: "l24",
      title: "Higher Nervous Activity",
      intro: "Pavlov explained conditioning through excitation and inhibition in the cerebral cortex, calling this higher nervous activity.",
      questions: [
        {
          type: "mcq",
          q: "Pavlov used the phrase 'higher nervous activity' to refer to:",
          choices: ["Simple spinal reflexes", "The functions of the cerebral cortex underlying conditioning", "Digestion in the stomach", "The circulatory system"],
          answer: 1,
          explain: "'Higher nervous activity' was Pavlov's term for the cortical processes he believed produced conditioned reflexes."
        },
        {
          type: "truefalse",
          q: "Pavlov believed conditioning reflected activity in the cerebral cortex.",
          answer: true,
          explain: "He located the conditioned reflex in the cortex, viewing conditioning as a window onto brain function."
        },
        {
          type: "match",
          q: "Match each of Pavlov's cortical concepts to its meaning.",
          pairs: [
            ["Excitation", "Neural process that activates a response"],
            ["Inhibition", "Neural process that suppresses a response"],
            ["Irradiation", "Spread of a process across the cortex"],
            ["Concentration", "Narrowing of a process to a focused area"]
          ],
          explain: "Pavlov described the cortex as governed by excitation and inhibition, which could spread (irradiate) or focus (concentrate)."
        },
        {
          type: "fill",
          q: "Pavlov proposed two basic cortical processes: excitation and ____.",
          answer: "inhibition",
          accept: ["inhibition"],
          explain: "Excitation and inhibition were, for Pavlov, the two fundamental opposing processes of the cortex."
        },
        {
          type: "mcq",
          q: "The spreading of excitation or inhibition to nearby cortical areas Pavlov called:",
          choices: ["Irradiation", "Concentration", "Extinction", "Acquisition"],
          answer: 0,
          explain: "Irradiation is the spread of a cortical process outward, while concentration is its narrowing to a focal point."
        },
        {
          type: "truefalse",
          q: "Pavlov thought conditioned reflexes were unrelated to the brain's cortex.",
          answer: false,
          explain: "On the contrary, Pavlov tied conditioned reflexes directly to cortical excitation and inhibition."
        },
        {
          type: "order",
          q: "Order Pavlov's explanatory levels from simplest to most complex.",
          items: ["Unconditioned reflex", "Conditioned reflex", "Cortical excitation and inhibition", "Theory of higher nervous activity"],
          explain: "Pavlov built from innate reflexes up through learned reflexes and cortical processes to his broad theory of higher nervous activity."
        }
      ]
    }
  ]
});
