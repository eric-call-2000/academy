window.ACADEMY.addUnit("evopsych", {
  id: "unit-19",
  title: "Fear, Learning, and Prepared Cognition",
  color: "#7c5cff",
  icon: "🐍",
  description: "Explores how evolution shaped biased, prepared learning systems that make certain fears easy to acquire and certain associations nearly impossible to train.",
  lessons: [
    {
      id: "l145",
      title: "Prepared Learning",
      intro: "Martin Seligman's 1971 preparedness theory argues that organisms are biologically biased to learn some associations far more easily than others.",
      questions: [
        {
          type: "mcq",
          q: "Who proposed the preparedness theory of phobias in 1971?",
          choices: ["Ivan Pavlov", "John Garcia", "Martin Seligman", "B.F. Skinner"],
          answer: 2,
          explain: "Martin Seligman's 1971 paper 'Phobias and Preparedness' introduced the idea that evolution biases which fears we learn."
        },
        {
          type: "truefalse",
          q: "Preparedness theory claims that all stimuli are equally likely to become associated with fear.",
          answer: false,
          explain: "Preparedness theory says the opposite: some stimuli are biologically privileged for fear learning, so associations are not equally probable."
        },
        {
          type: "fill",
          q: "Seligman argued that organisms are biologically ____ to fear ancestral dangers such as snakes and heights.",
          answer: "prepared",
          accept: ["prepared", "biologically prepared"],
          explain: "The core claim is that natural selection left us 'prepared' to acquire fears of recurrent ancestral threats."
        },
        {
          type: "mcq",
          q: "Where on Seligman's continuum does an association fall if it is learned in a single trial and strongly resists extinction?",
          choices: ["Prepared", "Unprepared", "Contra-prepared", "Unconditioned"],
          answer: 0,
          explain: "Prepared associations sit at one end of the continuum: fast to acquire, often single-trial, and highly resistant to extinction."
        },
        {
          type: "order",
          q: "Order Seligman's preparedness continuum from easiest to hardest for an organism to learn.",
          items: ["prepared", "unprepared", "contra-prepared"],
          explain: "The continuum runs from prepared (learned easily) through unprepared (learned with effort) to contra-prepared (resisted or never learned)."
        },
        {
          type: "match",
          q: "Match each region of the preparedness continuum with its learning profile.",
          pairs: [
            ["Prepared", "Learned quickly, often in one trial, and resists extinction"],
            ["Unprepared", "Learned only with many pairings; typically neutral stimuli"],
            ["Contra-prepared", "Resisted or essentially never learned"]
          ],
          explain: "Preparedness is a graded continuum, not a simple on/off switch, spanning easy to nearly impossible learning."
        },
        {
          type: "truefalse",
          q: "Prepared associations tend to be learned rapidly and to resist extinction.",
          answer: true,
          explain: "Speed of acquisition and resistance to extinction are two hallmarks Seligman used to identify prepared learning."
        }
      ]
    },
    {
      id: "l146",
      title: "Snake and Spider Fears",
      intro: "Laboratory conditioning studies show that fear is acquired selectively, attaching far more readily to snakes and spiders than to neutral objects.",
      questions: [
        {
          type: "mcq",
          q: "In Öhman's conditioning experiments, which paired stimulus produced fear responses most resistant to extinction?",
          choices: ["Flowers", "Mushrooms", "Snakes and spiders", "Geometric shapes"],
          answer: 2,
          explain: "Conditioned fear responses to fear-relevant stimuli like snakes and spiders extinguished much more slowly than those to flowers or mushrooms."
        },
        {
          type: "truefalse",
          q: "People acquire and retain conditioned fear to snakes more readily than to flowers or mushrooms.",
          answer: true,
          explain: "This selectivity is the central finding: fear-relevant stimuli condition faster and persist longer than fear-irrelevant ones."
        },
        {
          type: "fill",
          q: "Fear conditioning to snakes and spiders is described as ____, meaning some stimuli condition much more easily than others.",
          answer: "selective",
          accept: ["selective", "selectivity"],
          explain: "Selective fear conditioning means the learning system is tuned toward particular, evolutionarily meaningful stimuli."
        },
        {
          type: "match",
          q: "Match each label to the correct example or tool from Ohman's fear-conditioning work.",
          pairs: [
            ["Fear-relevant", "Snakes and spiders"],
            ["Fear-irrelevant", "Flowers and mushrooms"],
            ["Measure used", "Skin-conductance response"]
          ],
          explain: "Ohman contrasted fear-relevant and fear-irrelevant stimuli while recording skin-conductance responses as an index of fear."
        },
        {
          type: "mcq",
          q: "The finding that conditioned responses to snakes resist extinction best supports which idea?",
          choices: ["All fears are learned equally", "Fear learning is biologically selective", "Snakes are objectively harmless", "Extinction is impossible for any stimulus"],
          answer: 1,
          explain: "Selective resistance to extinction is evidence that fear learning is biased toward evolutionarily relevant stimuli."
        },
        {
          type: "order",
          q: "Order the steps of a typical Öhman fear-conditioning procedure.",
          items: ["show a fear-relevant image such as a snake as the CS", "pair it with a mild electric shock as the US", "record the skin-conductance fear response", "test whether the response resists extinction"],
          explain: "A neutral-looking picture becomes a conditioned stimulus through pairing with a shock, then extinction resistance is measured."
        },
        {
          type: "truefalse",
          q: "A snake image among flowers is detected faster than a flower among snakes, the 'snake in the grass' effect.",
          answer: true,
          explain: "Visual-search studies show an attentional bias: threatening targets pop out faster than neutral ones, aiding rapid threat detection."
        }
      ]
    },
    {
      id: "l147",
      title: "Öhman & Mineka's Fear Module",
      intro: "Öhman and Mineka (2001) proposed an evolved 'fear module': an automatic, encapsulated system for detecting and responding to threat.",
      questions: [
        {
          type: "mcq",
          q: "Öhman & Mineka (2001) argued the fear module is centered on which brain structure?",
          choices: ["Hippocampus", "Amygdala", "Cerebellum", "Prefrontal cortex"],
          answer: 1,
          explain: "The amygdala is the proposed neural core of the fear module, driving rapid threat responses."
        },
        {
          type: "match",
          q: "Match each of the four defining features of Öhman and Mineka's fear module with its description.",
          pairs: [
            ["Selectivity", "Fear is acquired mainly to ancestral threats"],
            ["Automaticity", "Triggered without conscious effort, even by masked images"],
            ["Encapsulation", "Runs largely independent of higher cognition"],
            ["Neural circuitry", "Centered on the amygdala"]
          ],
          explain: "Ohman and Mineka defined the module by selectivity, automaticity, encapsulation, and dedicated amygdala-based circuitry."
        },
        {
          type: "truefalse",
          q: "'Encapsulation' means the fear module operates relatively independently of conscious, higher cognition.",
          answer: true,
          explain: "Encapsulation captures the idea that the module runs its own fast computations that deliberate reasoning cannot easily override."
        },
        {
          type: "fill",
          q: "The fear module can be triggered ____, even by masked images shown too briefly for conscious recognition.",
          answer: "automatically",
          accept: ["automatically", "automatic"],
          explain: "Automaticity means the module reacts before, and without needing, conscious awareness of the stimulus."
        },
        {
          type: "mcq",
          q: "Which is NOT one of the four defining features of the fear module?",
          choices: ["Selectivity", "Automaticity", "Encapsulation", "Memorization"],
          answer: 3,
          explain: "The four features are selectivity, automaticity, encapsulation, and specialized neural circuitry; memorization is not one of them."
        },
        {
          type: "order",
          q: "Order how the fear module is thought to process a threat.",
          items: ["a threat stimulus appears", "the amygdala activates automatically", "a rapid fear response is produced", "conscious appraisal follows afterward"],
          explain: "The module reacts fast and automatically first, with slower conscious evaluation arriving only afterward."
        },
        {
          type: "truefalse",
          q: "The fear module can respond to masked or subliminal fear stimuli.",
          answer: true,
          explain: "Backward-masking studies show conditioned fear responses to snakes even when the image is presented below conscious awareness."
        }
      ]
    },
    {
      id: "l148",
      title: "Monkey Fear Learning",
      intro: "Cook and Mineka's studies of rhesus monkeys showed that fear can be acquired by observation, but only selectively for fear-relevant stimuli.",
      questions: [
        {
          type: "mcq",
          q: "Cook & Mineka studied observational fear learning primarily in which animal?",
          choices: ["Rats", "Pigeons", "Rhesus monkeys", "Dogs"],
          answer: 2,
          explain: "Their landmark observational-conditioning experiments used laboratory-reared rhesus monkeys."
        },
        {
          type: "truefalse",
          q: "The lab-reared monkeys in Cook & Mineka's studies were born already afraid of snakes.",
          answer: false,
          explain: "Lab-reared monkeys showed no initial snake fear; they acquired it only after watching a fearful model."
        },
        {
          type: "fill",
          q: "Monkeys acquired a lasting snake fear by ____ another monkey reacting fearfully to a snake.",
          answer: "watching",
          accept: ["watching", "observing", "observation"],
          explain: "Fear was transmitted socially through observation of a fearful model, not through direct shock or bites."
        },
        {
          type: "mcq",
          q: "When the fearful monkey reaction was spliced onto footage of flowers or a toy rabbit, observer monkeys...",
          choices: ["acquired a strong fear", "did NOT acquire a fear", "became aggressive", "stopped fearing real snakes"],
          answer: 1,
          explain: "Observers did not learn to fear flowers or a toy rabbit, showing observational fear learning is selective for fear-relevant objects."
        },
        {
          type: "match",
          q: "Match each element of the Cook & Mineka observational studies to its role or outcome.",
          pairs: [
            ["Model monkey", "Demonstrates the fear reaction"],
            ["Observer monkey", "Acquires the fear by watching"],
            ["Snake or crocodile", "Fear is learned"],
            ["Flowers or toy rabbit", "Fear is not learned"]
          ],
          explain: "The same fearful reaction produced learning for snakes and crocodiles but not for flowers or a toy rabbit."
        },
        {
          type: "order",
          q: "Order the logic of the Cook & Mineka splicing experiment.",
          items: ["a lab-reared monkey shows no fear of snakes", "it watches a model monkey react fearfully to a snake", "the observer acquires a lasting snake fear", "a spliced flowers control produces no such fear"],
          explain: "By splicing the same reaction onto different objects, they isolated the selectivity of observational fear learning."
        },
        {
          type: "truefalse",
          q: "The results show that observational fear learning is selective for fear-relevant stimuli.",
          answer: true,
          explain: "Fear transferred readily to snakes and crocodiles but not to flowers, demonstrating a prepared, selective learning bias."
        }
      ]
    },
    {
      id: "l149",
      title: "Taste Aversion",
      intro: "The Garcia effect shows that learning obeys biological constraints: rats link tastes to nausea and sounds to shock, but not the reverse.",
      questions: [
        {
          type: "mcq",
          q: "Conditioned taste aversion is most closely associated with which researcher?",
          choices: ["John Garcia", "Martin Seligman", "Robert Rescorla", "Edward Thorndike"],
          answer: 0,
          explain: "John Garcia, with Robert Koelling (1966), demonstrated conditioned taste aversion, now often called the Garcia effect."
        },
        {
          type: "truefalse",
          q: "In taste-aversion learning, nausea can occur hours after eating and still produce a strong aversion.",
          answer: true,
          explain: "Long CS-US delays that block ordinary conditioning still support taste aversion, reflecting a specialized biological adaptation."
        },
        {
          type: "fill",
          q: "Garcia's findings challenged the principle of ____, the assumption that any stimulus can be associated equally with any consequence.",
          answer: "equipotentiality",
          accept: ["equipotentiality", "equipotential", "equal potentiality"],
          explain: "Equipotentiality assumed all CS-US pairings are equally learnable; Garcia showed learning is biologically constrained instead."
        },
        {
          type: "match",
          q: "Match each cue-consequence pairing from Garcia & Koelling to how readily it is learned.",
          pairs: [
            ["Taste + illness", "Readily associated"],
            ["Sound or light + shock", "Readily associated"],
            ["Taste + shock", "Poorly associated"],
            ["Sound or light + illness", "Poorly associated"]
          ],
          explain: "Rats connect tastes to internal illness and audiovisual cues to external pain, a pattern called belongingness."
        },
        {
          type: "mcq",
          q: "Rats readily associate ____ with nausea but not with electric shock.",
          choices: ["a tone", "a light", "a taste", "a location"],
          answer: 2,
          explain: "Illness is naturally linked to what was eaten, so taste, not audiovisual cues, becomes associated with nausea."
        },
        {
          type: "order",
          q: "Order the sequence of a typical one-trial taste-aversion learning episode.",
          items: ["eat a novel-tasting food", "feel nauseated hours later", "form an aversion to that taste", "avoid the flavor in the future"],
          explain: "Taste aversion often forms in a single trial despite a long delay, protecting animals from repeat poisoning."
        },
        {
          type: "truefalse",
          q: "Taste-aversion learning usually requires dozens of pairings before it forms.",
          answer: false,
          explain: "It typically forms in just one trial, one of its most striking departures from ordinary conditioning."
        }
      ]
    },
    {
      id: "l150",
      title: "Heights, Water, and Strangers",
      intro: "Fears of heights, deep water, and strangers map onto dangers that recurred throughout human evolution, not onto modern hazards.",
      questions: [
        {
          type: "mcq",
          q: "The 'visual cliff' experiment by Gibson and Walk tested infants' fear of what?",
          choices: ["Strangers", "Heights", "Water", "Loud noises"],
          answer: 1,
          explain: "The visual cliff used a glass-covered apparent drop-off to study infants' avoidance of heights."
        },
        {
          type: "truefalse",
          q: "Stranger anxiety typically emerges in infants around 6 to 8 months of age.",
          answer: true,
          explain: "Wariness of unfamiliar people reliably appears in the second half of the first year across cultures."
        },
        {
          type: "fill",
          q: "Fears of heights, deep water, and strangers reflect ____ recurrent threats faced by ancestral humans.",
          answer: "evolutionarily",
          accept: ["evolutionarily", "evolutionary"],
          explain: "These fears track dangers that recurred over evolutionary time, which is why they emerge so readily."
        },
        {
          type: "match",
          q: "Match each recurrent fear object to the ancestral danger it reflects.",
          pairs: [
            ["Heights", "Falling; tested by the visual cliff"],
            ["Strangers", "Stranger anxiety around 8 months"],
            ["Deep water", "Risk of drowning"],
            ["Darkness", "Concealed predators"]
          ],
          explain: "Each common early fear corresponds to a hazard that would have reduced survival in ancestral environments."
        },
        {
          type: "mcq",
          q: "Which of these is an example of an evolutionarily recurrent fear object?",
          choices: ["Electrical outlets", "Handguns", "Snakes", "Automobiles"],
          answer: 2,
          explain: "Snakes were a persistent ancestral threat, whereas outlets, guns, and cars are evolutionarily recent."
        },
        {
          type: "order",
          q: "Order how an infant typically behaves during the visual cliff test.",
          items: ["placed on glass over an apparent drop", "reaches the deep side and hesitates", "shows wariness or distress", "refuses to cross the cliff"],
          explain: "Even crawling infants stop at the apparent edge, suggesting an early-emerging wariness of heights."
        },
        {
          type: "truefalse",
          q: "Common phobias tend to cluster around modern hazards like cars rather than ancestral ones.",
          answer: false,
          explain: "Phobias cluster around ancestral dangers such as snakes, heights, and water, not around modern hazards."
        }
      ]
    },
    {
      id: "l151",
      title: "Contra-Prepared Learning",
      intro: "At the far end of Seligman's continuum, contra-prepared associations resist training because biology pulls the organism the other way.",
      questions: [
        {
          type: "mcq",
          q: "On Seligman's continuum, associations an organism learns only with great difficulty, if at all, are called...",
          choices: ["Prepared", "Unprepared", "Contra-prepared", "Superprepared"],
          answer: 2,
          explain: "Contra-prepared associations occupy the hard end of the continuum, resisting learning even with extensive training."
        },
        {
          type: "truefalse",
          q: "Contra-prepared associations are learned rapidly in a single trial.",
          answer: false,
          explain: "The opposite is true: contra-prepared associations resist learning and may never be reliably acquired."
        },
        {
          type: "fill",
          q: "The Brelands documented ____ drift, in which trained animals revert to instinctive behaviors.",
          answer: "instinctive",
          accept: ["instinctive", "instinct"],
          explain: "Keller and Marian Breland (1961) described 'instinctive drift,' where innate behaviors override conditioned ones."
        },
        {
          type: "match",
          q: "Match each region of the continuum to how the organism responds to training.",
          pairs: [
            ["Prepared", "Learned readily"],
            ["Unprepared", "Needs many trials; neutral stimuli"],
            ["Contra-prepared", "Resists learning"]
          ],
          explain: "The continuum spans easy (prepared), effortful (unprepared), and resistant (contra-prepared) learning."
        },
        {
          type: "mcq",
          q: "Which best illustrates a contra-prepared or biologically constrained association?",
          choices: ["A rat linking taste to nausea", "A human fearing snakes", "A pigeon pecking to avoid shock", "A monkey fearing a snake by observation"],
          answer: 2,
          explain: "Pigeons struggle to peck to escape shock because their natural defensive responses are flapping and flight, not pecking."
        },
        {
          type: "order",
          q: "Order Seligman's continuum from the easiest to the hardest for an organism to learn.",
          items: ["prepared", "unprepared", "contra-prepared"],
          explain: "Learning difficulty increases from prepared through unprepared to contra-prepared associations."
        },
        {
          type: "truefalse",
          q: "Instinctive drift, described by Breland and Breland in 1961, shows that biology can override operant conditioning.",
          answer: true,
          explain: "Their trained animals reverted to species-typical behaviors, showing innate tendencies can defeat reinforcement schedules."
        }
      ]
    },
    {
      id: "l152",
      title: "Modern Phobias Puzzle",
      intro: "Despite the real dangers of cars and guns, phobias rarely form to them, a puzzle that preparedness theory helps explain.",
      questions: [
        {
          type: "mcq",
          q: "Despite causing many deaths each year, which of these rarely becomes the object of a phobia?",
          choices: ["Snakes", "Spiders", "Cars", "Heights"],
          answer: 2,
          explain: "Cars kill far more people than snakes today, yet car phobias are rare while snake phobias are common."
        },
        {
          type: "truefalse",
          q: "The rarity of car and gun phobias supports simple equipotential conditioning over preparedness.",
          answer: false,
          explain: "Equipotential conditioning predicts we should most fear what harms us now; the actual pattern instead supports preparedness."
        },
        {
          type: "fill",
          q: "Objects like cars and guns are evolutionarily ____, so we lack an evolved bias to fear them.",
          answer: "novel",
          accept: ["novel", "new", "recent"],
          explain: "Because these hazards are evolutionarily recent, no prepared fear response evolved for them."
        },
        {
          type: "match",
          q: "Match each category to how commonly it becomes a phobia and why.",
          pairs: [
            ["Ancestral threat", "Commonly phobic, like snakes"],
            ["Modern hazard", "Rarely phobic, like cars"],
            ["Underlying mechanism", "Prepared fear learning"]
          ],
          explain: "Prepared learning targets ancestral threats, explaining why old dangers dominate phobia lists over modern ones."
        },
        {
          type: "mcq",
          q: "Why do phobias cluster around snakes rather than automobiles?",
          choices: ["Cars are objectively safe", "Snakes were recurrent ancestral dangers", "Cars are extremely rare", "Snakes are more common today"],
          answer: 1,
          explain: "Snakes threatened humans across evolutionary time, so we are prepared to fear them; cars are too recent to have shaped this bias."
        },
        {
          type: "order",
          q: "Order the reasoning that makes modern phobias a puzzle for simple conditioning.",
          items: ["cars and guns kill many people today", "yet phobias of cars and guns are rare", "snakes and spiders threatened humans for millions of years", "we are prepared to fear ancestral dangers, not modern ones"],
          explain: "The mismatch between current danger and actual phobia patterns is resolved by evolutionary preparedness."
        },
        {
          type: "truefalse",
          q: "Blood, heights, and enclosed spaces are common phobia objects consistent with ancestral threats.",
          answer: true,
          explain: "These recurring phobia types map onto ancestral dangers, reinforcing the prepared-learning account of phobias."
        }
      ]
    }
  ]
});
