window.ACADEMY.addUnit("behaviorism", {
  id: "unit-12",
  title: "Tolman's Purposive Behaviorism",
  color: "#14a58f",
  icon: "🗺️",
  description: "Explore how Edward Tolman challenged strict behaviorism from within by showing that behavior is goal-directed and guided by internal cognitive maps.",
  lessons: [
    {
      id: "l89",
      title: "Purposive Behaviorism",
      intro: "Tolman argued that behavior is best understood as molar and goal-directed, not just a chain of molecular reflexes.",
      questions: [
        {
          type: "mcq",
          q: "What did Edward Tolman mean by 'purposive behaviorism'?",
          choices: [
            "That all behavior reduces to simple stimulus-response reflexes",
            "That behavior is goal-directed and best studied as meaningful wholes",
            "That only conscious introspection can explain behavior",
            "That reinforcement plays no role in learning at all"
          ],
          answer: 1,
          explain: "Tolman kept behavior as the object of study but insisted it is purposive, organized around goals rather than reducible to isolated reflex arcs."
        },
        {
          type: "truefalse",
          q: "Tolman described behavior as 'molar' rather than 'molecular.'",
          answer: true,
          explain: "Molar behavior refers to whole, goal-directed acts (like running a maze to reach food), while molecular refers to tiny muscle-twitch units. Tolman focused on the molar level."
        },
        {
          type: "mcq",
          q: "Which best describes a 'molecular' unit of behavior in Tolman's terms?",
          choices: [
            "A rat navigating an entire maze toward food",
            "A single gland secretion or muscle contraction",
            "An animal choosing a goal after weighing options",
            "A learned expectation about where reward is"
          ],
          answer: 1,
          explain: "Molecular behavior is the fine-grained physiological unit, such as a single muscle twitch or gland response. Tolman argued psychology should study larger molar acts instead."
        },
        {
          type: "fill",
          q: "Tolman argued that behavior is 'docile,' meaning it is teachable and shaped toward a ____.",
          answer: "goal",
          accept: ["goal", "purpose", "end", "goals"],
          explain: "Tolman used 'docile' to mean behavior is malleable and reorganizes itself in service of reaching a goal, a hallmark of its purposive character."
        },
        {
          type: "truefalse",
          q: "Purposive behaviorism claims that goals and purposes must be inferred from observable behavior, not from introspection.",
          answer: true,
          explain: "Tolman stayed a behaviorist by insisting purpose be read off objective behavior, such as persistence toward and selection of a goal, rather than from self-report."
        },
        {
          type: "match",
          q: "Match each term to its meaning in Tolman's purposive behaviorism.",
          pairs: [
            ["Molar behavior", "Whole, goal-directed act studied as a unit"],
            ["Molecular behavior", "Tiny physiological muscle or gland response"],
            ["Purposive", "Organized toward reaching a goal"]
          ],
          explain: "Tolman contrasted molar (whole, purposive acts) with molecular (physiological micro-units) and treated behavior as goal-directed."
        },
        {
          type: "order",
          q: "Order these from smallest unit of analysis to largest, as Tolman would rank them.",
          items: ["Single muscle twitch", "A movement sequence", "A whole goal-directed maze run"],
          explain: "Tolman moved analysis up from molecular micro-units (a twitch) through movement sequences to the molar goal-directed act, which he considered the proper level of study."
        }
      ]
    },
    {
      id: "l90",
      title: "Intervening Variables",
      intro: "Tolman introduced intervening variables as inferred internal processes that link observable stimuli to observable responses.",
      questions: [
        {
          type: "mcq",
          q: "What is an 'intervening variable' in Tolman's framework?",
          choices: [
            "A stimulus that appears between two responses",
            "An inferred internal process linking stimuli and inputs to behavior",
            "A reflex that cannot be measured directly",
            "A reward delivered on a variable schedule"
          ],
          answer: 1,
          explain: "Intervening variables are unobservable constructs (like hunger, expectancy, or demand) inferred from measurable inputs and outputs to explain how behavior is produced."
        },
        {
          type: "truefalse",
          q: "Tolman believed psychology could ignore internal states entirely and study only stimulus-response links.",
          answer: false,
          explain: "Unlike strict S-R theorists, Tolman argued that internal intervening variables were necessary to explain the flexibility and goal-direction of behavior."
        },
        {
          type: "mcq",
          q: "Intervening variables are defined by their relationship to what two things?",
          choices: [
            "Conscious thoughts and dreams",
            "Genes and environment",
            "Independent (input) variables and dependent (behavioral) variables",
            "Punishment and extinction"
          ],
          answer: 2,
          explain: "Tolman anchored each intervening variable to observable antecedent conditions (inputs) and observable behavior (outputs), keeping the constructs scientifically respectable."
        },
        {
          type: "fill",
          q: "Because intervening variables sit between stimulus and response, Tolman's model can be written as S - ____ - R.",
          answer: "o",
          accept: ["o", "organism", "intervening variable", "intervening"],
          explain: "Tolman's approach is often written S-O-R, where O (the organism's internal intervening variables) mediates between stimulus and response, contrasting with plain S-R."
        },
        {
          type: "mcq",
          q: "Which of these is an example of an intervening variable Tolman used?",
          choices: [
            "The color of the maze walls",
            "The rat's degree of hunger or drive",
            "The exact running speed in seconds",
            "The number of maze trials scheduled"
          ],
          answer: 1,
          explain: "Drive states like hunger are classic intervening variables: unobservable directly, but inferred from deprivation conditions and inferred from their effect on behavior."
        },
        {
          type: "truefalse",
          q: "Tolman insisted that intervening variables must be tied to observable, measurable conditions to remain scientific.",
          answer: true,
          explain: "By operationally linking each construct to inputs and outputs, Tolman kept intervening variables testable rather than vague mentalistic speculation."
        },
        {
          type: "order",
          q: "Order the elements of Tolman's S-O-R chain from first to last.",
          items: ["Stimulus / environmental input", "Intervening variable in the organism", "Observable response"],
          explain: "In Tolman's model an environmental stimulus acts on the organism's internal intervening variables, which then shape the observable response."
        }
      ]
    },
    {
      id: "l91",
      title: "Cognitive Maps",
      intro: "Tolman proposed that animals build internal spatial representations, or cognitive maps, that guide flexible navigation.",
      questions: [
        {
          type: "mcq",
          q: "What is a 'cognitive map' according to Tolman?",
          choices: [
            "A physical diagram researchers draw of a maze",
            "An internal mental representation of spatial layout and relationships",
            "A chain of memorized left-and-right turns",
            "A reinforcement schedule for navigation"
          ],
          answer: 1,
          explain: "Tolman argued animals form an internal map-like representation of the environment, encoding places and relationships rather than a fixed sequence of movements."
        },
        {
          type: "truefalse",
          q: "Tolman introduced the phrase 'cognitive maps' in his 1948 paper 'Cognitive Maps in Rats and Men.'",
          answer: true,
          explain: "His influential 1948 address and paper, 'Cognitive Maps in Rats and Men,' brought the term into psychology."
        },
        {
          type: "mcq",
          q: "Evidence for cognitive maps came partly from studies where rats could take a novel ____ to the goal when a familiar path was blocked.",
          choices: [
            "reward",
            "shortcut",
            "reflex",
            "punishment"
          ],
          answer: 1,
          explain: "In shortcut and detour experiments, rats chose a new direct route pointing toward the goal's location, implying they had a spatial map rather than fixed turn habits."
        },
        {
          type: "fill",
          q: "A cognitive map represents the ____ of the goal, letting an animal find it from new starting points.",
          answer: "location",
          accept: ["location", "place", "position", "spatial location"],
          explain: "Because the map encodes where the goal is in space, an animal can navigate to it flexibly rather than only repeating one learned response chain."
        },
        {
          type: "mcq",
          q: "How does the cognitive map idea differ from a strict stimulus-response view of maze learning?",
          choices: [
            "It says animals learn nothing at all in mazes",
            "It says animals learn a flexible spatial representation, not just fixed movements",
            "It says only reinforcement matters",
            "It says rats cannot learn shortcuts"
          ],
          answer: 1,
          explain: "S-R theory predicts rigid chains of learned turns, while Tolman's map predicts flexible navigation and novel shortcuts, which the data supported."
        },
        {
          type: "truefalse",
          q: "Tolman warned that overly 'narrow' cognitive maps could apply to human social behavior, such as prejudice.",
          answer: true,
          explain: "In 'Cognitive Maps in Rats and Men' Tolman speculated that stress and frustration can produce narrow maps, which he connected to phenomena like regression and prejudice in people."
        },
        {
          type: "match",
          q: "Match each concept to how it explains reaching a goal.",
          pairs: [
            ["Cognitive map", "Uses an internal spatial representation of places"],
            ["S-R chain", "Repeats a fixed memorized sequence of turns"],
            ["Shortcut test", "Reveals whether an animal knows the goal's location"]
          ],
          explain: "The cognitive map encodes places, S-R learning encodes fixed responses, and shortcut tests distinguish the two by requiring knowledge of location."
        }
      ]
    },
    {
      id: "l92",
      title: "Latent Learning",
      intro: "Tolman showed that rats can learn a maze without reinforcement, learning that stays hidden until reward makes it worth performing.",
      questions: [
        {
          type: "mcq",
          q: "What is 'latent learning'?",
          choices: [
            "Learning that only happens with strong punishment",
            "Learning that occurs without reinforcement and is not shown until there is a reason to perform",
            "Learning that fades immediately without practice",
            "Learning that requires conscious verbal instruction"
          ],
          answer: 1,
          explain: "Latent learning is acquired without obvious reinforcement and stays 'latent' or hidden in performance until a reward gives the animal motivation to display it."
        },
        {
          type: "truefalse",
          q: "Latent learning suggests that learning and performance are two separate things.",
          answer: true,
          explain: "The key lesson is that an animal can learn (acquire knowledge) without immediately performing it; reinforcement affects performance more than the underlying learning."
        },
        {
          type: "mcq",
          q: "In classic latent learning studies, unrewarded rats explored a maze and then, once food was introduced, quickly performed as well as always-rewarded rats. This shows they had:",
          choices: [
            "Learned nothing until reward began",
            "Already learned the maze layout during unrewarded exploration",
            "Only random behavior throughout",
            "A purely reflexive response to food"
          ],
          answer: 1,
          explain: "The sudden drop in errors once food appeared shows the rats had already built up knowledge of the maze during the unrewarded phase; reward simply released performance."
        },
        {
          type: "fill",
          q: "Latent learning challenged the idea that ____ is necessary for learning to occur.",
          answer: "reinforcement",
          accept: ["reinforcement", "reward", "reinforcer"],
          explain: "Strict reinforcement theory held that reward is required for learning, but latent learning demonstrated that learning can happen even without it."
        },
        {
          type: "truefalse",
          q: "Latent learning fully supports Hull's claim that reinforcement is required for all learning.",
          answer: false,
          explain: "Latent learning directly contradicts the strong reinforcement requirement; rats learned without reward, undermining the claim that reinforcement is necessary for learning."
        },
        {
          type: "order",
          q: "Order the phases of a typical latent learning experiment.",
          items: ["Rats explore the maze with no food reward", "Errors stay high during unrewarded trials", "Food is introduced as a reward", "Errors drop sharply, revealing prior learning"],
          explain: "Rats first explore without reward and make many errors, then once food is introduced their error rate plunges, exposing the learning that had been latent."
        },
        {
          type: "match",
          q: "Match each term to its role in latent learning.",
          pairs: [
            ["Learning", "Acquiring knowledge of the maze"],
            ["Performance", "Actually running the maze efficiently"],
            ["Reinforcement", "Motivates performance more than learning"]
          ],
          explain: "Latent learning separates knowledge acquisition (learning) from its expression (performance), with reinforcement chiefly driving performance."
        }
      ]
    },
    {
      id: "l93",
      title: "The Blodgett Experiment",
      intro: "Hugh Blodgett's 1929 maze study gave Tolman the first classic demonstration of latent learning through delayed reward.",
      questions: [
        {
          type: "mcq",
          q: "What did Hugh Blodgett's 1929 experiment demonstrate?",
          choices: [
            "That rats cannot learn mazes without punishment",
            "That introducing reward late caused a sudden drop in errors, revealing earlier latent learning",
            "That reinforcement has no effect on rats at all",
            "That rats prefer response learning over place learning"
          ],
          answer: 1,
          explain: "Blodgett found that rats first run without food reward improved sharply once reward was introduced, evidence that they had learned the maze earlier without reinforcement."
        },
        {
          type: "truefalse",
          q: "In Blodgett's study, a group given delayed reward eventually performed about as well as rats rewarded from the start.",
          answer: true,
          explain: "Once the delayed-reward group finally received food, their error rate quickly fell to roughly match the consistently rewarded group, showing hidden prior learning."
        },
        {
          type: "mcq",
          q: "The sharp improvement after reward was introduced is best explained by which idea?",
          choices: [
            "The rats suddenly grew smarter overnight",
            "Reward converted already-acquired latent learning into performance",
            "The maze became physically easier",
            "The rats had never actually explored the maze"
          ],
          answer: 1,
          explain: "The rapid drop shows the rats already knew the maze; the reward simply gave them a reason to translate that latent knowledge into efficient performance."
        },
        {
          type: "fill",
          q: "Blodgett's delayed-reward finding is considered the first clear demonstration of ____ learning.",
          answer: "latent",
          accept: ["latent"],
          explain: "Blodgett's 1929 maze study is historically cited as the first classic demonstration of latent learning, later extended by Tolman and Honzik."
        },
        {
          type: "mcq",
          q: "Whose 1930 study with Tolman further extended Blodgett's latent-learning results using three rat groups?",
          choices: [
            "C. H. Honzik",
            "B. F. Skinner",
            "John B. Watson",
            "Ivan Pavlov"
          ],
          answer: 0,
          explain: "Tolman and C. H. Honzik's 1930 experiment used always-rewarded, never-rewarded, and delayed-reward groups, confirming and extending Blodgett's latent-learning finding."
        },
        {
          type: "truefalse",
          q: "Blodgett's results were fully consistent with the strict view that reward is necessary for learning to happen.",
          answer: false,
          explain: "The results undercut that view: rats clearly learned during the unrewarded phase, showing reward was needed for performance, not for the learning itself."
        },
        {
          type: "order",
          q: "Order the events in Blodgett's delayed-reward condition.",
          items: ["Rats run the maze with no reward", "Errors remain high", "Reward is finally introduced", "Errors drop abruptly to match rewarded rats"],
          explain: "The delayed-reward rats made many errors while unrewarded, then improved sharply the moment reward arrived, revealing the learning had already occurred."
        }
      ]
    },
    {
      id: "l94",
      title: "Place vs Response Learning",
      intro: "Tolman's maze studies asked whether rats learn the location of a goal or a fixed sequence of body movements.",
      questions: [
        {
          type: "mcq",
          q: "In the place-versus-response debate, what does 'place learning' claim?",
          choices: [
            "Animals learn a fixed set of turns regardless of location",
            "Animals learn the spatial location of the goal and can reach it from new starting points",
            "Animals learn only through punishment",
            "Animals never form any spatial knowledge"
          ],
          answer: 1,
          explain: "Place learning says the animal encodes where the goal is in space, allowing flexible routes, which fits Tolman's cognitive-map view."
        },
        {
          type: "truefalse",
          q: "'Response learning' claims that animals learn specific body movements, such as 'always turn right,' rather than the goal's location.",
          answer: true,
          explain: "Response learning is the S-R style account: the animal learns a fixed motor response, in contrast to place learning's flexible spatial knowledge."
        },
        {
          type: "mcq",
          q: "A cross-maze (plus-maze) study is used to test place vs response learning by changing the rat's:",
          choices: [
            "Food type",
            "Starting arm, then seeing whether it goes to the same place or repeats the same turn",
            "Body temperature",
            "Age"
          ],
          answer: 1,
          explain: "By starting the rat from the opposite arm, experimenters see whether it returns to the original goal location (place learning) or makes the same body turn (response learning)."
        },
        {
          type: "fill",
          q: "Tolman's own maze results generally favored ____ learning, supporting his cognitive-map idea.",
          answer: "place",
          accept: ["place", "place-learning", "spatial"],
          explain: "Tolman's experiments tended to show rats learning the goal's location (place learning), which supported cognitive maps over rigid response chains."
        },
        {
          type: "mcq",
          q: "Later research found that place vs response learning depends partly on:",
          choices: [
            "The exact temperature of the room only",
            "Conditions such as amount of training and available cues, so both can occur",
            "Whether the rat is left- or right-handed",
            "The color of the experimenter's coat"
          ],
          answer: 1,
          explain: "Follow-up work showed the outcome is not all-or-none: with extensive training or few landmarks, response learning can dominate, while rich cues favor place learning."
        },
        {
          type: "truefalse",
          q: "The place-versus-response question was purely theoretical and never tested with actual maze experiments.",
          answer: false,
          explain: "It was tested directly, most famously with plus-maze designs that varied the start point to separate spatial-location learning from fixed-turn learning."
        },
        {
          type: "match",
          q: "Match each account to its prediction in a plus-maze when the start arm is switched.",
          pairs: [
            ["Place learning", "Rat still goes to the original goal location"],
            ["Response learning", "Rat repeats the same body turn"],
            ["Cognitive map", "Supports place learning via spatial representation"]
          ],
          explain: "Place learning predicts returning to the same location, response learning predicts the same motor turn, and the cognitive-map idea aligns with place learning."
        }
      ]
    },
    {
      id: "l95",
      title: "Expectancies",
      intro: "Tolman argued that animals learn expectancies, or sign-gestalt relationships, about what leads to what.",
      questions: [
        {
          type: "mcq",
          q: "What is an 'expectancy' in Tolman's theory?",
          choices: [
            "A reflex triggered automatically by a stimulus",
            "A learned belief that a certain sign leads to a certain outcome",
            "A random guess with no basis in experience",
            "A physical reward given after every response"
          ],
          answer: 1,
          explain: "An expectancy is Tolman's term for a learned relationship, a belief that if I follow this sign or path I will reach that outcome or goal."
        },
        {
          type: "truefalse",
          q: "Tolman used the term 'sign-gestalt' to describe learned means-end relationships between cues and goals.",
          answer: true,
          explain: "Tolman's 'sign-gestalt' captures the learned whole linking a sign (cue), a path (means), and a significate (goal), an organized expectancy rather than a mere reflex."
        },
        {
          type: "mcq",
          q: "In a sign-gestalt, the three linked elements are the sign, the means-end path, and the:",
          choices: [
            "Punisher",
            "Significate (the goal or outcome expected)",
            "Reflex arc",
            "Drive reduction"
          ],
          answer: 1,
          explain: "Tolman described learning as connecting a sign, the behavior route (means-end relation), and the significate, the expected goal the sign points toward."
        },
        {
          type: "fill",
          q: "Expectancy learning means the animal learns 'what leads to ____.'",
          answer: "what",
          accept: ["what", "the goal", "the outcome", "reward"],
          explain: "Tolman summarized expectancy learning as acquiring knowledge of 'what leads to what,' a network of anticipations about outcomes."
        },
        {
          type: "mcq",
          q: "Evidence for expectancies includes the 'reward-shift' finding, in which rats reacted to a change in reward. This suggested they had:",
          choices: [
            "No memory of previous rewards",
            "An expectation about the reward they should receive",
            "Only reflexive salivation",
            "A purely genetic response"
          ],
          answer: 1,
          explain: "When a familiar reward was reduced, rats showed disruption, implying they expected a specific outcome, evidence of learned expectancies rather than blind habit."
        },
        {
          type: "truefalse",
          q: "Expectancies are consistent with a purely mechanical stimulus-response account that ignores anticipation.",
          answer: false,
          explain: "Expectancies are inherently anticipatory and cognitive; they go beyond mechanical S-R links by attributing to the animal knowledge of upcoming outcomes."
        },
        {
          type: "match",
          q: "Match each part of Tolman's sign-gestalt to its meaning.",
          pairs: [
            ["Sign", "The cue or stimulus encountered"],
            ["Means-end path", "The route or behavior connecting cue to goal"],
            ["Significate", "The expected goal or outcome"]
          ],
          explain: "A sign-gestalt links a sign (cue), a means-end relation (path), and a significate (goal), forming the learned expectancy of what leads to what."
        }
      ]
    },
    {
      id: "l96",
      title: "Tolman's Cognitive Bridge",
      intro: "Tolman's ideas of maps, expectancies, and internal variables anticipated the cognitive revolution that followed behaviorism.",
      questions: [
        {
          type: "mcq",
          q: "Why is Tolman often called a bridge to the cognitive revolution?",
          choices: [
            "He rejected all experimental methods",
            "He introduced internal cognitive constructs while keeping behavior as objective data",
            "He proved that learning is impossible",
            "He abandoned the study of behavior completely"
          ],
          answer: 1,
          explain: "Tolman stayed methodologically behaviorist yet insisted on internal representations like maps and expectancies, foreshadowing the mind-focused cognitive psychology of the 1950s and 1960s."
        },
        {
          type: "truefalse",
          q: "Tolman's work influenced later cognitive concepts such as mental representations and information processing.",
          answer: true,
          explain: "His cognitive maps and expectancies prefigured the mental representations and internal processing central to the later cognitive revolution."
        },
        {
          type: "mcq",
          q: "How did Tolman differ from strict behaviorists like Watson and Hull?",
          choices: [
            "He denied that behavior could be observed",
            "He argued internal cognitive processes were needed to explain flexible, goal-directed behavior",
            "He relied only on introspection",
            "He rejected the use of animals in research"
          ],
          answer: 1,
          explain: "Where Watson and Hull emphasized S-R connections and reinforcement, Tolman insisted that inferred cognitive processes were essential to explain purposive, adaptable behavior."
        },
        {
          type: "fill",
          q: "Tolman's blend of behaviorist method with mental constructs is sometimes called ____ behaviorism, reflecting its cognitive leanings.",
          answer: "purposive",
          accept: ["purposive", "cognitive"],
          explain: "His system is called purposive behaviorism, and because of its emphasis on maps and expectancies it is also seen as an early cognitive form of behaviorism."
        },
        {
          type: "mcq",
          q: "The broader 'cognitive revolution' that Tolman anticipated gained momentum around which decades?",
          choices: [
            "The 1890s to 1900s",
            "The 1950s to 1960s",
            "The 1820s to 1830s",
            "The 2000s to 2010s"
          ],
          answer: 1,
          explain: "The cognitive revolution took hold in the 1950s and 1960s, decades after Tolman's key papers had already argued for internal representations."
        },
        {
          type: "truefalse",
          q: "Tolman gave up on making psychology objective and scientific in favor of pure speculation.",
          answer: false,
          explain: "Tolman remained committed to objective, behavioral evidence; he tied his cognitive constructs to measurable inputs and outputs rather than abandoning scientific rigor."
        },
        {
          type: "order",
          q: "Order these developments in the history of learning theory from earliest to latest.",
          items: ["Watson's strict S-R behaviorism", "Tolman's purposive behaviorism and cognitive maps", "The cognitive revolution of the 1950s-60s"],
          explain: "Watson's behaviorism came first, Tolman then added purposive and cognitive elements, and this helped set the stage for the full cognitive revolution decades later."
        }
      ]
    }
  ]
});
