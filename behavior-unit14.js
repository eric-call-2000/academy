window.ACADEMY.addUnit("behaviorism", {
  id: "unit-14",
  title: "Biological Constraints on Learning",
  color: "#14a58f",
  icon: "🐀",
  description: "This unit confronts behaviorism with evolved predispositions -- taste aversion, instinctive drift, and preparedness -- that limit the reach of general learning laws.",
  lessons: [
    {
      id: "l105",
      title: "The Equipotentiality Premise",
      intro: "Early behaviorism assumed that any stimulus could be linked to any response with equal ease -- a premise this unit will dismantle.",
      questions: [
        {
          type: "mcq",
          q: "What does the equipotentiality premise assume about conditioning?",
          choices: [
            "That any perceivable stimulus can be associated equally well with any response or outcome",
            "That only biologically relevant stimuli can be conditioned",
            "That reinforcement schedules determine which stimuli can be learned",
            "That animals inherit fixed associations that cannot be changed"
          ],
          answer: 0,
          explain: "Equipotentiality holds that all stimuli are interchangeable inputs -- any CS is as conditionable as any other, so the brain is treated as a general-purpose association former."
        },
        {
          type: "truefalse",
          q: "The equipotentiality premise holds that some stimuli are naturally easier to associate with certain outcomes than others.",
          answer: false,
          explain: "That is the opposite of equipotentiality. The premise denies any built-in bias, claiming all stimulus-outcome pairings are equally learnable."
        },
        {
          type: "fill",
          q: "Under equipotentiality, theorists treated the nervous system as a general-purpose ____ machine, indifferent to what was paired with what.",
          answer: "association",
          accept: ["association", "associative", "learning"],
          explain: "The general-process view saw the organism as a blank association-forming device, so the specific content of a pairing was assumed not to matter."
        },
        {
          type: "match",
          q: "Match each term to its meaning within the general-process tradition.",
          pairs: [
            ["Equipotentiality", "Any stimulus is as conditionable as any other"],
            ["General-process view", "One universal set of learning laws fits all species and cues"],
            ["Arbitrary CS", "A signal chosen without regard to its biological meaning"]
          ],
          explain: "These ideas fit together: if all cues are equipotential, then one general process governs learning and researchers may use any arbitrary CS they like."
        },
        {
          type: "order",
          q: "Order the reasoning chain that leads from the equipotentiality premise to its strongest claim.",
          items: [
            "Treat the brain as a blank association former",
            "Assume any CS can be paired with any US",
            "Predict all associations form at similar rates",
            "Conclude one set of learning laws fits every case"
          ],
          explain: "Equipotentiality begins with a blank slate, extends to arbitrary pairings, predicts uniform learning rates, and ends in a claim of universal laws."
        },
        {
          type: "mcq",
          q: "Which finding most directly violates the equipotentiality premise?",
          choices: [
            "A pigeon pecking faster on a variable-ratio schedule",
            "A rat forming a taste-illness link far more easily than a taste-shock link",
            "A dog salivating to a bell after repeated pairings",
            "A child imitating a modeled behavior"
          ],
          answer: 1,
          explain: "If cues were equipotential, taste-illness and taste-shock should be equally learnable. That they are not shows built-in associative biases the premise denies."
        },
        {
          type: "truefalse",
          q: "Equipotentiality predicts that a rat should learn a taste-shock association about as easily as a taste-illness association.",
          answer: true,
          explain: "That is exactly the prediction -- and it is why taste-aversion research became so damaging: the prediction turned out to be false."
        }
      ]
    },
    {
      id: "l106",
      title: "The Garcia Effect",
      intro: "John Garcia showed that rats can link a flavor to sickness hours later, breaking the rule that a CS and US must be nearly simultaneous.",
      questions: [
        {
          type: "mcq",
          q: "The Garcia effect is another name for which phenomenon?",
          choices: [
            "Spontaneous recovery of an extinguished response",
            "Conditioned taste aversion",
            "Higher-order conditioning",
            "Stimulus generalization"
          ],
          answer: 1,
          explain: "The Garcia effect is conditioned taste aversion: after a flavor is followed by illness, the animal avoids that flavor, often after a single experience."
        },
        {
          type: "fill",
          q: "In taste-aversion learning, an animal can link a flavor to illness even when the sickness occurs several ____ later.",
          answer: "hours",
          accept: ["hours", "hours later", "an hour", "hour"],
          explain: "Garcia found aversions form across delays of up to several hours, far longer than the seconds-long window classical conditioning was thought to require."
        },
        {
          type: "truefalse",
          q: "The Garcia effect challenges the principle that a CS and US must occur close together in time.",
          answer: true,
          explain: "Long-delay taste-aversion learning defies temporal contiguity, which had been treated as a near-universal requirement for association."
        },
        {
          type: "match",
          q: "Match each taste-aversion term to its description.",
          pairs: [
            ["Conditioned taste aversion", "Avoiding a flavor after it was followed by sickness"],
            ["Bait shyness", "Wild animals refusing poisoned bait after one bad experience"],
            ["Long-delay learning", "Forming the link despite hours between taste and illness"]
          ],
          explain: "Garcia's lab work explained the old farming puzzle of bait shyness: animals learn from a single delayed illness, which ordinary contiguity rules could not predict."
        },
        {
          type: "order",
          q: "Order the events of a conditioned taste-aversion trial.",
          items: [
            "Rat drinks a novel-flavored solution",
            "Several hours pass with no cue",
            "The rat becomes nauseated",
            "Later the rat refuses that flavor"
          ],
          explain: "The novel taste is sampled, a long gap follows, illness arrives, and the animal subsequently avoids the flavor -- learning bridged by a delay of hours."
        },
        {
          type: "mcq",
          q: "Which long-standing principle does long-delay taste learning most clearly contradict?",
          choices: [
            "The law of effect",
            "Temporal contiguity",
            "Reciprocal determinism",
            "The premack principle"
          ],
          answer: 1,
          explain: "Temporal contiguity says the CS and US must be nearly simultaneous. Taste aversion forms across hours, directly contradicting it."
        },
        {
          type: "truefalse",
          q: "Garcia's taste-aversion findings were immediately and warmly accepted by mainstream learning journals.",
          answer: false,
          explain: "Editors initially resisted the results as impossible; Garcia reportedly was told the findings were no more likely than bird droppings in a cuckoo clock."
        }
      ]
    },
    {
      id: "l107",
      title: "One-Trial Taste Learning",
      intro: "Seligman's 'sauce-Bearnaise syndrome' shows a taste aversion can be built in a single trial and attach selectively to a novel flavor.",
      questions: [
        {
          type: "mcq",
          q: "Whose own experience gave rise to the term 'sauce-Bearnaise syndrome'?",
          choices: [
            "B. F. Skinner",
            "John Garcia",
            "Martin Seligman",
            "Keller Breland"
          ],
          answer: 2,
          explain: "Seligman coined the term after developing an aversion to sauce Bearnaise following a meal that was later followed by illness."
        },
        {
          type: "truefalse",
          q: "Seligman's aversion to the sauce required many repeated pairings of the flavor with illness before it formed.",
          answer: false,
          explain: "It formed in a single trial -- one meal followed by sickness -- illustrating that taste aversions can be one-trial learning."
        },
        {
          type: "fill",
          q: "Seligman's aversion attached to the ____ of the sauce, not to his wife, the plates, or the restaurant.",
          answer: "taste",
          accept: ["taste", "flavor", "flavour"],
          explain: "The aversion selectively bound to the novel flavor. This selective association shows the animal is biased about which cue gets linked to illness."
        },
        {
          type: "match",
          q: "Match each feature of the sauce-Bearnaise episode to what it demonstrates.",
          pairs: [
            ["Single meal", "One-trial learning"],
            ["Aversion to the novel sauce only", "Selective association"],
            ["Aversion persisted after he learned a flu caused it", "Non-cognitive, automatic learning"]
          ],
          explain: "Even knowing the flu -- not the sauce -- made him sick, Seligman still could not enjoy the sauce, showing the reaction bypassed rational belief."
        },
        {
          type: "order",
          q: "Order the sequence of Seligman's sauce-Bearnaise experience.",
          items: [
            "Eats steak with a novel sauce Bearnaise",
            "Hours later comes down with illness",
            "Develops a lasting distaste for the sauce",
            "Learns the flu, not the sauce, was to blame"
          ],
          explain: "The novel flavor, delayed illness, resulting aversion, and later rational correction map exactly onto the surprising features of taste-aversion learning."
        },
        {
          type: "mcq",
          q: "Why did the aversion attach to the sauce rather than to the familiar filet mignon?",
          choices: [
            "The filet was eaten in a larger quantity",
            "Novel tastes are far more likely to be blamed for later illness",
            "Meat cannot support conditioned aversions",
            "The sauce was consumed last"
          ],
          answer: 1,
          explain: "Novelty drives taste-aversion learning; familiar, previously safe foods are unlikely to be newly blamed, a bias sometimes called learned safety."
        },
        {
          type: "truefalse",
          q: "The persistence of Seligman's aversion after he knew the true cause suggests the learning was automatic rather than reasoned.",
          answer: true,
          explain: "Correct knowledge did not erase the reaction, showing the aversion was a prepared, gut-level process not governed by conscious belief."
        }
      ]
    },
    {
      id: "l108",
      title: "Cue-to-Consequence Specificity",
      intro: "Garcia and Koelling's 1966 study showed that tastes bind to illness and audiovisual cues bind to shock -- cues and consequences must 'belong' together.",
      questions: [
        {
          type: "mcq",
          q: "In Garcia and Koelling's 1966 experiment, rats made ill afterward learned to avoid which cue?",
          choices: [
            "The bright, noisy component of the water",
            "The taste of the water",
            "The color of the cage",
            "The time of day"
          ],
          answer: 1,
          explain: "Illness bound to the taste. Nausea-based learning selectively attaches to flavor, an internal cue, not to external sights and sounds."
        },
        {
          type: "truefalse",
          q: "Rats in the study readily associated the audiovisual cue with nausea.",
          answer: false,
          explain: "They did not. Audiovisual cues bound to foot shock, while taste bound to illness -- each cue paired only with its 'belonging' consequence."
        },
        {
          type: "fill",
          q: "The rats used 'bright, noisy, tasty water,' where a light and a click made up the ____ cue paired with shock.",
          answer: "audiovisual",
          accept: ["audiovisual", "audio-visual", "external"],
          explain: "The external audiovisual cue (light plus click) became a signal for the external pain of shock, but not for internal illness."
        },
        {
          type: "match",
          q: "Match each cue to the consequence it readily bound with in the Garcia and Koelling study.",
          pairs: [
            ["Taste cue", "Internal illness (nausea)"],
            ["Audiovisual cue", "External foot shock"],
            ["Belongingness", "Built-in fit between certain cues and consequences"]
          ],
          explain: "Cue-to-consequence specificity means tastes belong with sickness and external signals belong with external pain, reflecting evolved associative biases."
        },
        {
          type: "order",
          q: "Order the logic of the cue-to-consequence experiment.",
          items: [
            "Present bright, noisy, tasty water",
            "Punish one group with illness and another with shock",
            "Test which cue each group avoids",
            "Find taste binds to illness and audiovisual to shock"
          ],
          explain: "By crossing two cues with two consequences, Garcia and Koelling isolated the selective belongingness that equipotentiality could not explain."
        },
        {
          type: "mcq",
          q: "What broad principle do these selective pairings illustrate?",
          choices: [
            "All cues are equally associable with all outcomes",
            "Belongingness: organisms are predisposed to link certain cues with certain consequences",
            "Reinforcement must be immediate to work",
            "Extinction erases prepared associations quickly"
          ],
          answer: 1,
          explain: "Belongingness, or cue-to-consequence specificity, directly contradicts equipotentiality by showing evolved constraints on which pairings form easily."
        },
        {
          type: "truefalse",
          q: "The taste-illness and audiovisual-shock pattern makes adaptive sense because sickness usually comes from what an animal eats, while external pain comes from the outside world.",
          answer: true,
          explain: "The biases mirror real causal structure: bad food causes internal illness, so tasting-then-sick is a useful link to form, and external threats cause external pain."
        }
      ]
    },
    {
      id: "l109",
      title: "Instinctive Drift",
      intro: "The Brelands found that conditioned animals drift back toward instinctive behaviors that interfere with the trained response.",
      questions: [
        {
          type: "mcq",
          q: "What is 'instinctive drift'?",
          choices: [
            "The gradual fading of a response when reinforcement stops",
            "The tendency of a conditioned animal to revert to instinctive behavior that disrupts the trained response",
            "The spread of a response to similar stimuli",
            "The slow drift of a reinforcement schedule over time"
          ],
          answer: 1,
          explain: "Instinctive drift is the pull back toward species-typical instinctive behavior, even when it delays or blocks reinforcement of the trained act."
        },
        {
          type: "truefalse",
          q: "Instinctive drift shows that operant conditioning can override any instinct given enough training.",
          answer: false,
          explain: "It shows the opposite: instincts reassert themselves and interfere, revealing biological limits on what conditioning can maintain."
        },
        {
          type: "fill",
          q: "The Brelands' raccoon, trained to deposit coins, instead rubbed them together in a way resembling food-____ behavior.",
          answer: "washing",
          accept: ["washing", "rubbing", "food-washing"],
          explain: "Raccoons instinctively handle and 'wash' food; the coins triggered this rubbing, which drifted in and delayed the reinforced deposit."
        },
        {
          type: "match",
          q: "Match each Breland-trained animal to the instinctive behavior that drifted in.",
          pairs: [
            ["Raccoon", "Rubbing coins together like food handling"],
            ["Pig", "Rooting and tossing the coins with its snout"],
            ["Chicken", "Scratching or pecking at the reinforced object"]
          ],
          explain: "Across species the drift was always toward food-related instinctive routines, showing the animal's evolutionary history shaping trained behavior."
        },
        {
          type: "order",
          q: "Order how instinctive drift typically unfolded in the Brelands' animals.",
          items: [
            "Animal learns the trained operant response for food",
            "Behavior is performed reliably at first",
            "Instinctive food-related actions begin intruding",
            "Instinctive behavior grows and delays reinforcement"
          ],
          explain: "Training succeeds initially, then instinctive routines creep in and strengthen over time even though they postpone the reward."
        },
        {
          type: "mcq",
          q: "What does instinctive drift reveal about operant conditioning?",
          choices: [
            "It has no biological limits",
            "It works only on mammals",
            "It is constrained by an animal's evolved, species-typical behavior",
            "It requires continuous reinforcement to occur at all"
          ],
          answer: 2,
          explain: "The drift demonstrates that conditioning operates within boundaries set by evolution; instinct can override the contingencies the trainer arranges."
        },
        {
          type: "truefalse",
          q: "Keller and Marian Breland were trained in the operant tradition of B. F. Skinner before running their animal business.",
          answer: true,
          explain: "The Brelands were Skinner's students and applied operant methods commercially, which makes their discovery of conditioning's limits especially striking."
        }
      ]
    },
    {
      id: "l110",
      title: "Preparedness",
      intro: "Seligman placed associations on a continuum from prepared to contraprepared, capturing how biologically ready an organism is to learn them.",
      questions: [
        {
          type: "mcq",
          q: "Who proposed the preparedness continuum in his 1970 paper on the generality of the laws of learning?",
          choices: [
            "Martin Seligman",
            "Edward Thorndike",
            "John Watson",
            "Robert Rescorla"
          ],
          answer: 0,
          explain: "Seligman introduced preparedness to explain why some associations form in one trial while others resist learning entirely."
        },
        {
          type: "order",
          q: "Order the preparedness continuum from easiest to hardest to learn.",
          items: [
            "Prepared",
            "Unprepared",
            "Contraprepared"
          ],
          explain: "Prepared associations form in very few trials, unprepared ones need many trials, and contraprepared ones are learned slowly or not at all."
        },
        {
          type: "fill",
          q: "A ____ association is learned in very few trials, as taste aversion is.",
          answer: "prepared",
          accept: ["prepared"],
          explain: "Prepared associations sit at the easy end of the continuum; evolution has readied the organism to form them rapidly."
        },
        {
          type: "truefalse",
          q: "A contraprepared association is one the organism learns especially quickly.",
          answer: false,
          explain: "Contraprepared associations are the hardest -- the organism is biologically biased against forming them, so they may never be learned."
        },
        {
          type: "match",
          q: "Match each point on the continuum to its defining feature.",
          pairs: [
            ["Prepared", "Learned in one or few trials"],
            ["Unprepared", "Learned only with many trials"],
            ["Contraprepared", "Learned very slowly or not at all"]
          ],
          explain: "The continuum indexes how much input is needed for learning, replacing equipotentiality with a graded, biology-based scale."
        },
        {
          type: "mcq",
          q: "Conditioned taste aversion is an example of an association at which end of the continuum?",
          choices: [
            "The contraprepared end",
            "The unprepared middle",
            "The prepared end",
            "It falls outside the continuum"
          ],
          answer: 2,
          explain: "Taste aversion forms in a single trial across long delays, making it a textbook prepared association."
        },
        {
          type: "truefalse",
          q: "Most standard laboratory conditioning tasks that need many trials would count as 'unprepared' on Seligman's scale.",
          answer: true,
          explain: "Typical arbitrary lab pairings require repeated trials, placing them in the unprepared middle of the continuum rather than at either extreme."
        }
      ]
    },
    {
      id: "l111",
      title: "Prepared Phobias",
      intro: "Seligman's preparedness idea explains why phobias cluster around ancestral threats like snakes and spiders rather than modern dangers.",
      questions: [
        {
          type: "mcq",
          q: "According to the preparedness theory of phobias, fears are biased toward which kinds of objects?",
          choices: [
            "Modern hazards such as cars and electrical outlets",
            "Evolutionarily ancient threats such as snakes and spiders",
            "Randomly encountered neutral objects",
            "Whatever object was paired with pain most recently"
          ],
          answer: 1,
          explain: "Phobias overwhelmingly target ancestral dangers -- snakes, spiders, heights, deep water -- that threatened human survival over evolutionary time."
        },
        {
          type: "truefalse",
          q: "Phobias of electrical outlets and cars are just as common as phobias of snakes, even though outlets and cars injure more people today.",
          answer: false,
          explain: "Despite being more dangerous now, modern hazards rarely become phobias; fear is biologically prepared for ancient threats, not recent ones."
        },
        {
          type: "fill",
          q: "Prepared phobias are typically acquired ____, sometimes after a single frightening experience, unlike ordinary conditioning.",
          answer: "easily",
          accept: ["easily", "quickly", "rapidly"],
          explain: "Prepared fears are learned fast, often in one trial, matching their place at the prepared end of Seligman's continuum."
        },
        {
          type: "match",
          q: "Match each property of prepared phobias to its description.",
          pairs: [
            ["Selective", "Focused on ancestral threats like snakes"],
            ["Easily acquired", "Formed after very few pairings"],
            ["Resistant to extinction", "Slow to fade even after safe experiences"]
          ],
          explain: "Seligman argued prepared phobias are selective, quickly learned, resistant to extinction, and relatively non-cognitive -- unlike arbitrary conditioned fears."
        },
        {
          type: "order",
          q: "Order these fear objects from most likely to become a common phobia to least likely.",
          items: [
            "Snakes",
            "Spiders",
            "Electrical outlets"
          ],
          explain: "Ancestral threats such as snakes top the list, spiders follow, and modern hazards like outlets rarely become phobias despite their real danger."
        },
        {
          type: "mcq",
          q: "In Mineka and Cook's monkey studies, lab-reared monkeys readily learned by observation to fear which item?",
          choices: [
            "A brightly colored flower",
            "A toy snake",
            "A wooden block",
            "A plastic rabbit"
          ],
          answer: 1,
          explain: "Monkeys quickly acquired observational fear of snake-like objects but not of flowers or neutral toys, supporting a prepared fear bias for ancestral threats."
        },
        {
          type: "truefalse",
          q: "Prepared phobias tend to be more resistant to extinction than fears conditioned to arbitrary, modern objects.",
          answer: true,
          explain: "A hallmark of prepared fears is that they extinguish slowly, persisting even after repeated safe encounters."
        }
      ]
    },
    {
      id: "l112",
      title: "The Misbehavior of Organisms",
      intro: "Breland and Breland's 1961 article reconsidered conditioning by showing that evolved instincts constrain what training can achieve.",
      questions: [
        {
          type: "mcq",
          q: "The title 'The Misbehavior of Organisms' plays on which earlier work?",
          choices: [
            "Watson's 'Behaviorism'",
            "Skinner's 'The Behavior of Organisms'",
            "Pavlov's 'Conditioned Reflexes'",
            "Thorndike's 'Animal Intelligence'"
          ],
          answer: 1,
          explain: "The Brelands' 1961 title deliberately echoes Skinner's 1938 book 'The Behavior of Organisms,' signaling a friendly challenge from within his own tradition."
        },
        {
          type: "truefalse",
          q: "'The Misbehavior of Organisms' was published in 1961.",
          answer: true,
          explain: "Keller and Marian Breland published the article in American Psychologist in 1961, drawing on years of commercial animal training."
        },
        {
          type: "fill",
          q: "The article was written by Keller and Marian ____, a husband-and-wife team of former Skinner students.",
          answer: "breland",
          accept: ["breland", "brelands"],
          explain: "The Brelands ran Animal Behavior Enterprises and reported repeated instinctive drift across many trained species."
        },
        {
          type: "match",
          q: "Match each assumption the Brelands challenged to a plain restatement.",
          pairs: [
            ["Tabula rasa", "The animal arrives at the lab as a blank slate"],
            ["Species irrelevance", "Differences between species do not matter for learning"],
            ["Arbitrary conditioning", "Any response can be conditioned to any stimulus"]
          ],
          explain: "The Brelands argued all three assumptions were false: evolutionary history, species differences, and cue-response fit all shape what can be learned."
        },
        {
          type: "order",
          q: "Order the argument the Brelands built across their article.",
          items: [
            "Apply standard operant training to many species",
            "Observe instinctive behaviors intruding on trained acts",
            "Name the pattern 'instinctive drift'",
            "Conclude conditioning is bounded by evolved instinct"
          ],
          explain: "From broad training experience, to observed intrusions, to naming instinctive drift, they reached a conclusion about biological limits on conditioning."
        },
        {
          type: "mcq",
          q: "What was the central message of 'The Misbehavior of Organisms'?",
          choices: [
            "Operant conditioning is universally powerful and unbounded",
            "Instinct never affects conditioned behavior",
            "An organism's evolutionary history sets limits on what conditioning can achieve",
            "Reinforcement schedules are irrelevant to animal training"
          ],
          answer: 2,
          explain: "The Brelands concluded that behavior cannot be understood apart from an animal's instinctive, evolved repertoire, tempering strong behaviorist claims."
        },
        {
          type: "truefalse",
          q: "The Brelands rejected operant conditioning entirely and abandoned it in their work.",
          answer: false,
          explain: "They still used and valued operant methods commercially; their point was that conditioning has biological boundaries, not that it is useless."
        }
      ]
    }
  ]
});
