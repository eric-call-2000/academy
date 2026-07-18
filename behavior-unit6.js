window.ACADEMY.addUnit("behaviorism", {
  id: "unit-6",
  title: "Skinner and the Operant",
  color: "#14a58f",
  icon: "🐀",
  description: "This unit introduces B.F. Skinner's reframing of learning around consequences and voluntary, emitted behavior.",
  lessons: [
    {
      id: "l41",
      title: "Respondent vs Operant",
      intro: "Skinner divided behavior into two kinds: reflexes pulled out by a stimulus, and actions sent out by the organism and shaped by their results.",
      questions: [
        {
          type: "mcq",
          q: "What best describes respondent behavior?",
          choices: [
            "Behavior emitted spontaneously and shaped by its consequences",
            "Behavior elicited automatically by a preceding stimulus",
            "Behavior that only humans can perform",
            "Behavior with no biological basis"
          ],
          answer: 1,
          explain: "Respondent behavior is a reflex elicited by an antecedent stimulus, such as salivation when food touches the tongue."
        },
        {
          type: "truefalse",
          q: "Operant behavior is emitted by the organism rather than elicited by one specific stimulus.",
          answer: true,
          explain: "Skinner said operants are emitted and then come under the control of their consequences, unlike elicited reflexes."
        },
        {
          type: "fill",
          q: "A knee-jerk to a tap and salivation to food are examples of ____ behavior.",
          answer: "respondent",
          accept: ["respondent", "reflex", "reflexive"],
          explain: "Reflexes that a stimulus draws out automatically are respondent behavior."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Respondent", "Elicited by a preceding stimulus"],
            ["Operant", "Emitted and controlled by consequences"],
            ["Eliciting stimulus", "The antecedent that triggers a reflex"]
          ],
          explain: "Respondents are pulled out by stimuli; operants are sent out by the organism and selected by their effects."
        },
        {
          type: "mcq",
          q: "Which of these is an example of operant behavior?",
          choices: [
            "A pupil constricting in bright light",
            "A dog salivating when it smells food",
            "A rat pressing a lever to get food",
            "An eye blinking when air puffs it"
          ],
          answer: 2,
          explain: "Lever pressing is emitted and maintained by its food consequence, which makes it an operant rather than a reflex."
        },
        {
          type: "truefalse",
          q: "Respondent conditioning is just another name for the operant relationship Skinner studied.",
          answer: false,
          explain: "Respondent conditioning is Pavlovian reflex conditioning; operant conditioning is defined by consequences, not eliciting stimuli."
        },
        {
          type: "order",
          q: "Put the steps of an elicited reflex in order.",
          items: [
            "A stimulus is presented (food touches the mouth)",
            "The stimulus elicits the reflex",
            "The response occurs (salivation)"
          ],
          explain: "In respondent behavior the stimulus comes first and automatically produces the response."
        }
      ]
    },
    {
      id: "l42",
      title: "The Operant Defined",
      intro: "An operant is not one single movement but a whole class of actions grouped together because they produce the same effect on the world.",
      questions: [
        {
          type: "mcq",
          q: "An operant is best defined as:",
          choices: [
            "A single fixed muscle movement",
            "A class of responses defined by their common effect on the environment",
            "A reflex triggered by a stimulus",
            "An inherited instinct"
          ],
          answer: 1,
          explain: "Skinner defined the operant functionally: responses are grouped by the effect they produce, not by their exact form."
        },
        {
          type: "fill",
          q: "Responses are grouped into an operant by their shared ____ on the environment, not by their exact form.",
          answer: "effect",
          accept: ["effect", "consequence", "consequences", "function"],
          explain: "The operant is a functional class defined by the environmental effect the responses have in common."
        },
        {
          type: "truefalse",
          q: "Pressing a lever with a paw and pressing it with the nose can belong to the same operant if they produce the same effect.",
          answer: true,
          explain: "Because operants are defined by effect, different topographies that produce the same consequence count as one operant."
        },
        {
          type: "mcq",
          q: "The specific physical form or shape of a response is called its:",
          choices: [
            "topography",
            "contingency",
            "function",
            "operant"
          ],
          answer: 0,
          explain: "Topography is the physical form of a response; the operant, by contrast, is defined by function rather than topography."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Operant", "A functional class of responses"],
            ["Topography", "The physical form of a response"],
            ["Response class", "Actions grouped by their common effect"]
          ],
          explain: "An operant is a response class defined by effect; topography merely describes the movement's shape."
        },
        {
          type: "truefalse",
          q: "Skinner defined operants strictly by the exact topography of each movement.",
          answer: false,
          explain: "He defined them functionally by effect, so varied movements that produce the same result belong to one operant."
        },
        {
          type: "mcq",
          q: "Why is defining behavior by its effect useful for a science of behavior?",
          choices: [
            "It lets scientists ignore behavior entirely",
            "It requires reading the organism's mind",
            "It makes every single movement its own separate law",
            "It groups variable movements that serve one function into a single unit"
          ],
          answer: 3,
          explain: "Functional classes let science find orderly relations even when the exact movements vary from moment to moment."
        }
      ]
    },
    {
      id: "l43",
      title: "The Operant Chamber",
      intro: "To study operant behavior cleanly, Skinner built a controlled box and a pen that drew a running record of every response.",
      questions: [
        {
          type: "mcq",
          q: "The operant chamber is popularly known as the:",
          choices: [
            "puzzle box",
            "Skinner box",
            "maze",
            "shuttle box"
          ],
          answer: 1,
          explain: "The operant chamber Skinner invented is commonly called the Skinner box, though he himself disliked that name."
        },
        {
          type: "truefalse",
          q: "The cumulative recorder draws a line whose slope shows the rate of responding.",
          answer: true,
          explain: "Each response steps the pen upward; a steeper slope means faster responding and a flat line means no responding."
        },
        {
          type: "fill",
          q: "Inside the chamber a rat typically presses a ____ to produce food, while a pigeon pecks a lighted key.",
          answer: "lever",
          accept: ["lever", "bar"],
          explain: "The lever (or bar) is the manipulandum a rat operates; pigeons instead peck a lighted key."
        },
        {
          type: "match",
          q: "Match each part of the setup to its role.",
          pairs: [
            ["Operant chamber", "Controlled box for studying operant behavior"],
            ["Manipulandum", "The lever or key the animal operates"],
            ["Cumulative recorder", "Device that plots responses over time"],
            ["Dispenser", "Delivers the food or water reinforcer"]
          ],
          explain: "The chamber isolates variables, the manipulandum registers responses, and the recorder graphs them as they accumulate."
        },
        {
          type: "mcq",
          q: "On a cumulative record, a flat horizontal line means:",
          choices: [
            "the animal is responding very fast",
            "the recorder is broken",
            "no responses are occurring",
            "reinforcement was just delivered"
          ],
          answer: 2,
          explain: "With no responses the pen does not step up, so the cumulative line stays flat."
        },
        {
          type: "truefalse",
          q: "Skinner invented the operant chamber, whereas Thorndike had earlier built the puzzle box.",
          answer: true,
          explain: "Thorndike built the puzzle box years earlier; Skinner devised the operant chamber and the cumulative recorder."
        },
        {
          type: "order",
          q: "Trace what happens in the chamber, in order.",
          items: [
            "The rat presses the lever",
            "The dispenser delivers a food pellet",
            "The cumulative recorder steps the pen upward"
          ],
          explain: "A response operates the manipulandum, reinforcement is delivered, and the record marks that the response happened."
        }
      ]
    },
    {
      id: "l44",
      title: "The Three-Term Contingency",
      intro: "Operant behavior is best captured by a three-part relation: the situation before, the response itself, and the consequence that follows.",
      questions: [
        {
          type: "mcq",
          q: "The three-term contingency is usually written as:",
          choices: [
            "Antecedent - Behavior - Consequence",
            "Stimulus - Reflex - Recovery",
            "Cause - Effect - Feedback",
            "Drive - Habit - Reward"
          ],
          answer: 0,
          explain: "The ABC sequence -- antecedent (discriminative stimulus), behavior, consequence -- defines the operant contingency."
        },
        {
          type: "fill",
          q: "In the three-term contingency, the antecedent that signals reinforcement is available is called the ____ stimulus.",
          answer: "discriminative",
          accept: ["discriminative", "discriminative (sd)", "s-d", "sd"],
          explain: "The discriminative stimulus (SD) sets the occasion on which a particular response will be reinforced."
        },
        {
          type: "truefalse",
          q: "In the contingency, the consequence follows the behavior.",
          answer: true,
          explain: "The consequence comes after the response and shapes how likely that response is in the future."
        },
        {
          type: "order",
          q: "Put the three terms in their correct order.",
          items: [
            "Antecedent (discriminative stimulus)",
            "Behavior (the response)",
            "Consequence (what follows)"
          ],
          explain: "The antecedent precedes the behavior, which is then followed by its consequence."
        },
        {
          type: "match",
          q: "Match each term of the contingency to its description.",
          pairs: [
            ["Antecedent", "The situation or cue before the response"],
            ["Behavior", "The operant response itself"],
            ["Consequence", "The event that follows and affects future behavior"]
          ],
          explain: "The antecedent sets the occasion, the behavior occurs, and the consequence selects it going forward."
        },
        {
          type: "mcq",
          q: "A green light signals that pecking will produce grain; the pigeon pecks and gets grain. The green light is the:",
          choices: [
            "consequence",
            "behavior",
            "discriminative stimulus",
            "reinforcer"
          ],
          answer: 2,
          explain: "The green light is the antecedent discriminative stimulus signaling that the response will be reinforced."
        },
        {
          type: "truefalse",
          q: "The discriminative stimulus causes the behavior automatically, exactly like a reflex.",
          answer: false,
          explain: "The SD only sets the occasion for a reinforced response; it does not elicit it reflexively -- consequences control the operant."
        }
      ]
    },
    {
      id: "l45",
      title: "The Free Operant",
      intro: "Skinner let animals respond freely and repeatedly whenever they chose, instead of running them through one discrete trial at a time.",
      questions: [
        {
          type: "mcq",
          q: "In the free-operant method, the organism can:",
          choices: [
            "respond only once per trial set by the experimenter",
            "respond repeatedly at any time it chooses",
            "never repeat the same response",
            "respond only when the experimenter resets the apparatus"
          ],
          answer: 1,
          explain: "The free operant is freely repeatable; the animal responds at its own pace, without waiting for discrete trials."
        },
        {
          type: "truefalse",
          q: "Thorndike's puzzle box used discrete trials, whereas Skinner's chamber allowed free, continuous responding.",
          answer: true,
          explain: "In the puzzle box the animal was reset each trial; in Skinner's chamber it could keep responding on its own."
        },
        {
          type: "fill",
          q: "Because the response can be repeated over and over on its own, Skinner called it a ____ operant.",
          answer: "free",
          accept: ["free"],
          explain: "The label 'free operant' names a response the organism can emit freely and repeatedly at will."
        },
        {
          type: "match",
          q: "Match each method or apparatus to its description.",
          pairs: [
            ["Free-operant method", "Animal responds repeatedly at its own pace"],
            ["Discrete-trial method", "Experimenter resets after each single response"],
            ["Puzzle box", "Thorndike's discrete-trial apparatus"]
          ],
          explain: "The free operant leaves the response available continuously, unlike the reset-every-trial puzzle box."
        },
        {
          type: "mcq",
          q: "A key advantage of the free operant for measurement is that it:",
          choices: [
            "prevents the animal from ever being reinforced",
            "forces exactly one response per session",
            "yields a continuous stream of responses to measure rate",
            "removes the need for any apparatus"
          ],
          answer: 2,
          explain: "Continuous, freely repeated responding lets the experimenter measure the rate of responding over time."
        },
        {
          type: "truefalse",
          q: "In a discrete-trial procedure the animal sets its own pace of responding.",
          answer: false,
          explain: "In discrete trials the experimenter controls when each trial begins; only the free operant lets the animal set the pace."
        },
        {
          type: "order",
          q: "Order the steps of a free-operant session.",
          items: [
            "The apparatus stays available continuously",
            "The rat presses the lever whenever it chooses",
            "Presses accumulate as an ongoing response stream"
          ],
          explain: "Because the response stays available, the animal emits it repeatedly, producing a continuous cumulative record."
        }
      ]
    },
    {
      id: "l46",
      title: "Rate as the Datum",
      intro: "If behavior is freely repeatable, then how often it happens -- its rate -- becomes the basic number a science of behavior measures.",
      questions: [
        {
          type: "mcq",
          q: "In Skinner's approach, the fundamental datum (basic measure) of behavior is:",
          choices: [
            "response rate -- responses per unit of time",
            "the animal's reported feelings",
            "the size of each muscle movement",
            "reaction time on a single trial"
          ],
          answer: 0,
          explain: "Skinner took rate of responding -- how many responses occur per unit of time -- as behavior's basic dependent variable."
        },
        {
          type: "truefalse",
          q: "Response rate is measured as the number of responses per unit of time.",
          answer: true,
          explain: "Rate equals the count of responses divided by time, for example lever presses per minute."
        },
        {
          type: "fill",
          q: "The steeper the slope of a cumulative record, the ____ the response rate.",
          answer: "higher",
          accept: ["higher", "faster", "greater"],
          explain: "A steeper slope means more responses per unit of time, that is, a higher rate."
        },
        {
          type: "mcq",
          q: "Which measure would Skinner treat as the primary dependent variable?",
          choices: [
            "the color of the apparatus",
            "responses per minute",
            "the experimenter's mood",
            "the animal's body weight at birth"
          ],
          answer: 1,
          explain: "Responses per minute is a rate, which Skinner adopted as the basic datum of operant behavior."
        },
        {
          type: "match",
          q: "Match each idea to its meaning on a cumulative record.",
          pairs: [
            ["Response rate", "Responses per unit of time"],
            ["Cumulative record", "A visual display of rate as slope"],
            ["Steep slope", "A high rate of responding"],
            ["Flat line", "A zero rate of responding"]
          ],
          explain: "Rate is read directly off the record's slope: steep means fast responding, flat means none."
        },
        {
          type: "truefalse",
          q: "A high, steady response rate appears on a cumulative record as a flat horizontal line.",
          answer: false,
          explain: "A high steady rate appears as a steep upward slope; a flat line instead means no responding is occurring."
        },
        {
          type: "fill",
          q: "Because rate is sensitive and continuous, Skinner treated it as the basic ____ variable that reinforcement changes.",
          answer: "dependent",
          accept: ["dependent"],
          explain: "Rate of responding is the dependent variable that reinforcement and its schedules act upon."
        }
      ]
    },
    {
      id: "l47",
      title: "The Empty Organism",
      intro: "Skinner argued we can explain behavior by pointing to environmental variables, without inventing inner mental causes to fill the gap.",
      questions: [
        {
          type: "mcq",
          q: "The phrase 'empty organism' refers to Skinner's practice of:",
          choices: [
            "denying that organisms have any biology at all",
            "explaining behavior without appealing to inner mental causes",
            "studying only dead specimens",
            "ignoring the environment entirely"
          ],
          answer: 1,
          explain: "The 'empty organism' stance explains behavior through environmental variables rather than inferred inner agents."
        },
        {
          type: "truefalse",
          q: "Skinner sought the causes of behavior mainly in the environment and its consequences, not in inner mental entities.",
          answer: true,
          explain: "He located the controlling variables in the organism's environmental history of reinforcement, not in an initiating mind."
        },
        {
          type: "fill",
          q: "Skinner labeled inner agents invoked to explain behavior as explanatory ____.",
          answer: "fictions",
          accept: ["fictions", "fiction"],
          explain: "An 'explanatory fiction' only re-names the behavior; it does not identify its real environmental cause."
        },
        {
          type: "mcq",
          q: "Saying 'she ate because she was hungry,' where hunger is inferred only from her eating, is an example of:",
          choices: [
            "a testable physical measurement",
            "circular reasoning, an explanatory fiction",
            "the three-term contingency",
            "respondent conditioning"
          ],
          answer: 1,
          explain: "If hunger is inferred only from the eating it supposedly explains, the account is circular -- an explanatory fiction."
        },
        {
          type: "truefalse",
          q: "Radical behaviorism, unlike methodological behaviorism, does acknowledge private events such as thoughts and feelings.",
          answer: true,
          explain: "Skinner's radical behaviorism includes private events but denies they are the initiating causes of behavior."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Empty organism", "Explaining behavior without inner initiating causes"],
            ["Explanatory fiction", "An inner agent that names but does not explain"],
            ["Controlling variables", "The environmental causes of behavior"]
          ],
          explain: "Skinner replaced inner determiners with environmental controlling variables that can actually be observed and manipulated."
        },
        {
          type: "mcq",
          q: "For Skinner, the best place to look for the causes of an operant is:",
          choices: [
            "the person's unconscious mind",
            "inherited character traits alone",
            "the environmental history of consequences",
            "the animal's free will"
          ],
          answer: 2,
          explain: "Operants are explained by their history of reinforcement in the environment, not by inner determiners."
        }
      ]
    },
    {
      id: "l48",
      title: "Selection by Consequences",
      intro: "Skinner compared operant conditioning to Darwin's natural selection: consequences select behavior just as survival selects traits.",
      questions: [
        {
          type: "mcq",
          q: "'Selection by consequences' draws an analogy between operant conditioning and:",
          choices: [
            "Newton's laws of motion",
            "Darwinian natural selection",
            "Freudian psychoanalysis",
            "Pavlovian reflexes"
          ],
          answer: 1,
          explain: "Skinner argued consequences select behavior within a lifetime much as natural selection selects traits across generations."
        },
        {
          type: "truefalse",
          q: "Skinner presented 'Selection by Consequences' in a 1981 paper in the journal Science.",
          answer: true,
          explain: "His article 'Selection by Consequences' appeared in Science in 1981, laying out three levels of selection."
        },
        {
          type: "mcq",
          q: "Skinner said selection by consequences operates at three levels. Which set is correct?",
          choices: [
            "natural selection, operant conditioning, and cultural evolution",
            "id, ego, and superego",
            "sensation, perception, and cognition",
            "classical, operant, and vicarious conditioning"
          ],
          answer: 0,
          explain: "The three levels are natural selection (species), operant conditioning (individual), and cultural practices (culture)."
        },
        {
          type: "fill",
          q: "Just as natural selection favors traits that aid survival, operant selection favors responses that are followed by ____.",
          answer: "reinforcement",
          accept: ["reinforcement", "reinforcers", "reinforcing consequences", "reward"],
          explain: "Reinforcing consequences make responses more likely, selecting them from the pool of emitted behavior."
        },
        {
          type: "order",
          q: "Order Skinner's three levels of selection from oldest and broadest to most recent.",
          items: [
            "Natural selection of species",
            "Operant conditioning within a lifetime",
            "Evolution of cultural practices"
          ],
          explain: "Natural selection came first, operant conditioning shapes the individual, and cultural evolution builds on both."
        },
        {
          type: "match",
          q: "Match each level of selection to what it selects.",
          pairs: [
            ["Natural selection", "Traits across generations"],
            ["Operant conditioning", "Behavior within a lifetime"],
            ["Cultural evolution", "Practices within a group"]
          ],
          explain: "All three are selectionist: consequences retain what works, whether genes, responses, or cultural practices."
        },
        {
          type: "truefalse",
          q: "Selection by consequences means behavior is planned in advance toward a goal, not selected after the fact.",
          answer: false,
          explain: "Like natural selection, operant selection is retrospective -- consequences select behavior that has already occurred, without foresight."
        }
      ]
    }
  ]
});
