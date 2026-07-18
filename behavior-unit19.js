window.ACADEMY.addUnit("behaviorism", {
  id: "unit-19",
  title: "Behavior Therapy and Its Clinical Roots",
  color: "#14a58f",
  icon: "🛋️",
  description: "This unit shows how conditioning principles became real treatments for fear, anxiety, and maladaptive behavior, from Mary Cover Jones to the birth of CBT.",
  lessons: [
    {
      id: "l145",
      title: "Little Peter",
      intro: "In 1924 Mary Cover Jones showed that a child's fear could be unlearned, laying a foundation for behavior therapy.",
      questions: [
        {
          type: "mcq",
          q: "Who conducted the 'Little Peter' study that removed a young child's fear of a rabbit?",
          choices: ["Mary Cover Jones", "John B. Watson", "B.F. Skinner", "Joseph Wolpe"],
          answer: 0,
          explain: "Mary Cover Jones published the case of Peter in 1924, demonstrating that a fear could be systematically unlearned."
        },
        {
          type: "truefalse",
          q: "Peter's fear of the rabbit was deliberately created in the lab, just as Little Albert's was.",
          answer: false,
          explain: "Unlike Albert, Peter's fear already existed before the study; Jones set out to remove a pre-existing fear."
        },
        {
          type: "fill",
          q: "Jones gradually brought the feared rabbit closer while Peter ate a favorite food, a technique now called ____.",
          answer: "counterconditioning",
          accept: ["counterconditioning", "counter-conditioning", "direct conditioning"],
          explain: "Pairing the feared object with a pleasant response such as eating replaces fear with calm, which is counterconditioning."
        },
        {
          type: "mcq",
          q: "Besides feeding, what second method did Jones use to reduce Peter's fear?",
          choices: ["Electric shock", "Social imitation, letting Peter watch other children play with the rabbit", "Hypnosis", "Physical punishment"],
          answer: 1,
          explain: "Jones used modeling, or social imitation: Peter observed unafraid children handling the rabbit."
        },
        {
          type: "match",
          q: "Match each element of the Peter study to its role.",
          pairs: [
            ["Mary Cover Jones", "Researcher who removed Peter's fear"],
            ["Rabbit", "The feared furry stimulus"],
            ["1924", "Year the case was published"],
            ["Favorite food", "Pleasant stimulus paired with the rabbit"]
          ],
          explain: "Jones (1924) paired the feared rabbit with food Peter enjoyed so the fear gradually dissolved."
        },
        {
          type: "truefalse",
          q: "Joseph Wolpe later credited Mary Cover Jones as a pioneer of behavior therapy for this work.",
          answer: true,
          explain: "Wolpe honored Jones's counterconditioning of Peter as an early model for behavior therapy."
        },
        {
          type: "order",
          q: "Order the steps Jones used as the rabbit was moved toward Peter during feeding.",
          items: [
            "Rabbit kept far away while Peter eats",
            "Rabbit moved gradually closer each session",
            "Rabbit sits near Peter without fear",
            "Peter touches and plays with the rabbit"
          ],
          explain: "Jones advanced the rabbit step by step, keeping Peter comfortable until the fear was gone."
        }
      ]
    },
    {
      id: "l146",
      title: "Systematic Desensitization",
      intro: "Joseph Wolpe turned counterconditioning into a structured therapy that pairs deep relaxation with a graded ladder of fears.",
      questions: [
        {
          type: "mcq",
          q: "Who developed systematic desensitization in the 1950s?",
          choices: ["Aaron Beck", "Ivan Pavlov", "Joseph Wolpe", "Albert Ellis"],
          answer: 2,
          explain: "Joseph Wolpe developed systematic desensitization, presenting it fully in his 1958 book."
        },
        {
          type: "order",
          q: "Put the three phases of systematic desensitization in order.",
          items: [
            "Learn deep relaxation",
            "Build a graded anxiety hierarchy",
            "Pair relaxation with feared scenes from least to most frightening"
          ],
          explain: "The client first learns to relax, then builds a hierarchy, then works up it while staying relaxed."
        },
        {
          type: "truefalse",
          q: "In systematic desensitization the client confronts the most terrifying situation first.",
          answer: false,
          explain: "The client starts at the least anxiety-provoking item and only advances after staying calm."
        },
        {
          type: "fill",
          q: "The ranked list of feared situations ordered from mild to intense is called an anxiety ____.",
          answer: "hierarchy",
          accept: ["hierarchy"],
          explain: "The anxiety hierarchy orders feared scenes so the client can progress gradually and stay relaxed."
        },
        {
          type: "mcq",
          q: "What relaxation method is typically taught first in systematic desensitization?",
          choices: ["Progressive muscle relaxation", "Electroconvulsive therapy", "Sleep deprivation", "Caffeine dosing"],
          answer: 0,
          explain: "Wolpe adapted Jacobson's progressive muscle relaxation as the calm response that competes with anxiety."
        },
        {
          type: "truefalse",
          q: "The client advances to the next item on the hierarchy only after staying relaxed at the current one.",
          answer: true,
          explain: "Progress is contingent on remaining calm, so relaxation continually replaces the anxiety."
        },
        {
          type: "match",
          q: "Match each term to its meaning in systematic desensitization.",
          pairs: [
            ["Anxiety hierarchy", "Ranked list of feared scenes"],
            ["Progressive muscle relaxation", "Learned calm response"],
            ["SUDs", "Subjective units of distress ratings"],
            ["Joseph Wolpe", "Creator of the technique"]
          ],
          explain: "Wolpe combined a rated hierarchy with relaxation, measuring fear intensity in SUDs."
        }
      ]
    },
    {
      id: "l147",
      title: "Reciprocal Inhibition",
      intro: "Wolpe's core principle is that a response incompatible with anxiety, like relaxation, can block and weaken it.",
      questions: [
        {
          type: "fill",
          q: "Reciprocal inhibition works because relaxation is ____ with anxiety, so the two cannot be felt fully at once.",
          answer: "incompatible",
          accept: ["incompatible", "antagonistic"],
          explain: "A relaxation response that is incompatible with anxiety suppresses it, weakening the fear."
        },
        {
          type: "mcq",
          q: "Wolpe's principle of reciprocal inhibition says anxiety weakens when it is paired with a response that is:",
          choices: ["Identical to fear", "Antagonistic to anxiety", "Neutral and unrelated", "More intense than fear"],
          answer: 1,
          explain: "A response antagonistic to anxiety, such as relaxation, inhibits it and weakens the stimulus-fear bond."
        },
        {
          type: "truefalse",
          q: "The term 'reciprocal inhibition' was borrowed from Sherrington's neurophysiology of opposing muscles.",
          answer: true,
          explain: "Charles Sherrington described reciprocal innervation of muscles; Wolpe applied the idea to emotions."
        },
        {
          type: "mcq",
          q: "Which response is most commonly used to reciprocally inhibit anxiety in therapy?",
          choices: ["Anger", "Fear", "Boredom", "Deep muscle relaxation"],
          answer: 3,
          explain: "Deep relaxation is the classic response used to compete with and inhibit anxiety."
        },
        {
          type: "match",
          q: "Match each idea to its description.",
          pairs: [
            ["Reciprocal inhibition", "An incompatible response weakens anxiety"],
            ["Relaxation", "Response antagonistic to fear"],
            ["Charles Sherrington", "Source of the neurophysiological term"],
            ["Counterconditioning", "Replacing fear with a new response"]
          ],
          explain: "Reciprocal inhibition is the counterconditioning engine in which relaxation displaces fear."
        },
        {
          type: "truefalse",
          q: "Reciprocal inhibition claims a person can be deeply relaxed and intensely anxious at exactly the same moment.",
          answer: false,
          explain: "The whole point is that the two states are incompatible and cannot coexist at full strength."
        },
        {
          type: "order",
          q: "Order how reciprocal inhibition dissolves a fear response.",
          items: [
            "Feared stimulus appears",
            "A relaxation response is triggered at the same time",
            "Relaxation competes with and inhibits the anxiety",
            "The stimulus-anxiety bond weakens over repetitions"
          ],
          explain: "Repeatedly pairing the cue with relaxation lets the calm response overpower and erode the fear."
        }
      ]
    },
    {
      id: "l148",
      title: "Exposure Therapy",
      intro: "Facing a feared stimulus without the dreaded outcome lets the conditioned fear extinguish and breaks the cycle of avoidance.",
      questions: [
        {
          type: "mcq",
          q: "What learning process best explains why exposure therapy reduces fear?",
          choices: ["Reinforcement", "Extinction of the conditioned fear response", "Punishment", "Shaping"],
          answer: 1,
          explain: "Facing the feared cue while nothing bad happens extinguishes the conditioned fear response."
        },
        {
          type: "truefalse",
          q: "Exposure carried out in real-life situations is called 'in vivo' exposure.",
          answer: true,
          explain: "In vivo means the client confronts the actual feared object or situation rather than imagining it."
        },
        {
          type: "fill",
          q: "Escaping a feared situation brings relief, which negatively ____ the avoidance and keeps the fear alive.",
          answer: "reinforces",
          accept: ["reinforces", "reinforce"],
          explain: "Avoidance is negatively reinforced by relief, so the fear is never disconfirmed; exposure breaks this loop."
        },
        {
          type: "mcq",
          q: "Vividly imagining a feared scene in detail, rather than facing it physically, is called:",
          choices: ["In vivo exposure", "Imaginal exposure", "Interoceptive exposure", "Flooding"],
          answer: 1,
          explain: "Imaginal exposure uses detailed mental rehearsal of the feared scene."
        },
        {
          type: "order",
          q: "Order what typically happens to anxiety during a single, prolonged exposure session.",
          items: [
            "Anxiety rises sharply when the cue appears",
            "Anxiety peaks",
            "Anxiety gradually declines as nothing bad happens",
            "New learning: the cue is safe"
          ],
          explain: "Staying with the cue lets anxiety crest and then fall, teaching the person the situation is safe."
        },
        {
          type: "truefalse",
          q: "Continuing to avoid a feared situation is the surest way to keep the fear strong.",
          answer: true,
          explain: "Avoidance prevents disconfirmation, so exposure therapy deliberately blocks avoidance."
        },
        {
          type: "match",
          q: "Match each exposure concept to its description.",
          pairs: [
            ["In vivo exposure", "Facing the real feared situation"],
            ["Imaginal exposure", "Vividly picturing the feared scene"],
            ["Extinction", "Fear fades when the bad outcome never comes"],
            ["Avoidance", "Behavior that maintains the fear"]
          ],
          explain: "Exposure replaces fear-maintaining avoidance with extinction, whether faced in reality or imagination."
        }
      ]
    },
    {
      id: "l149",
      title: "Flooding and Implosion",
      intro: "Flooding and implosion drop the gradual ladder and confront the fear at full intensity, with no escape, until anxiety burns out.",
      questions: [
        {
          type: "mcq",
          q: "How does flooding differ from systematic desensitization?",
          choices: ["It climbs a gradual hierarchy", "It begins with full-intensity exposure to the most feared stimulus", "It relies on tangible rewards", "It avoids the feared stimulus"],
          answer: 1,
          explain: "Flooding starts at maximum intensity, with no gradual hierarchy and no relaxation training."
        },
        {
          type: "truefalse",
          q: "In flooding, the client is allowed to escape as soon as anxiety rises.",
          answer: false,
          explain: "Escape is prevented so anxiety can peak and extinguish; escaping would only reinforce the fear."
        },
        {
          type: "fill",
          q: "Stampfl's imaginal technique that vividly exaggerates the most frightening scenes is called ____ therapy.",
          answer: "implosive",
          accept: ["implosive", "implosion"],
          explain: "Thomas Stampfl developed implosive therapy, using amplified imaginal exposure to feared scenes."
        },
        {
          type: "mcq",
          q: "Who developed implosive therapy in the 1960s?",
          choices: ["Thomas Stampfl", "B.F. Skinner", "Mary Cover Jones", "Aaron Beck"],
          answer: 0,
          explain: "Thomas Stampfl created implosive therapy, an intense imaginal exposure method."
        },
        {
          type: "order",
          q: "Order what happens across a prolonged flooding session that is not cut short.",
          items: [
            "Client faces the most feared stimulus at full intensity",
            "Anxiety spikes very high",
            "Client cannot escape and stays with it",
            "Anxiety burns out and subsides"
          ],
          explain: "Blocking escape lets the intense anxiety exhaust itself, extinguishing the fear."
        },
        {
          type: "truefalse",
          q: "A key difference between implosion and in vivo flooding is that implosion is conducted in imagination.",
          answer: true,
          explain: "Implosive therapy is imaginal, whereas flooding is often carried out with the real feared stimulus."
        },
        {
          type: "match",
          q: "Match each term to its description.",
          pairs: [
            ["Flooding", "Full-intensity exposure, often in vivo"],
            ["Implosive therapy", "Amplified imaginal exposure"],
            ["Thomas Stampfl", "Originator of implosion"],
            ["Response prevention", "Blocking escape so fear extinguishes"]
          ],
          explain: "Both flood the client with fear and block escape, differing mainly in real versus imagined cues."
        }
      ]
    },
    {
      id: "l150",
      title: "Aversion Therapy",
      intro: "Aversion therapy pairs an unwanted behavior with an unpleasant stimulus so the behavior itself comes to feel repellent.",
      questions: [
        {
          type: "mcq",
          q: "Aversion therapy works by pairing an unwanted behavior with:",
          choices: ["A pleasant reward", "An unpleasant or noxious stimulus", "A neutral tone", "Nothing at all"],
          answer: 1,
          explain: "The target behavior is paired with an aversive stimulus so it comes to evoke discomfort."
        },
        {
          type: "fill",
          q: "Aversion therapy relies mainly on ____ conditioning, making the unwanted stimulus a signal for unpleasantness.",
          answer: "classical",
          accept: ["classical", "respondent", "pavlovian"],
          explain: "Through classical conditioning the behavior becomes a signal that predicts an aversive response."
        },
        {
          type: "truefalse",
          q: "Disulfiram (Antabuse) makes a person feel ill if they drink alcohol, an example of aversion therapy for alcohol use.",
          answer: true,
          explain: "Antabuse produces nausea when combined with alcohol, discouraging drinking through aversion."
        },
        {
          type: "mcq",
          q: "'Covert sensitization,' developed by Cautela, creates the aversive pairing using:",
          choices: ["Electric shock", "Real nausea-inducing drugs", "Imagined unpleasant scenes", "Physical restraint"],
          answer: 2,
          explain: "Covert sensitization uses vividly imagined aversive consequences rather than physical stimuli."
        },
        {
          type: "truefalse",
          q: "Aversion therapy is ethically uncontroversial and is still applied the same way to every condition today.",
          answer: false,
          explain: "Aversion methods are controversial; past uses, such as attempts to change sexual orientation, are now condemned as unethical."
        },
        {
          type: "match",
          q: "Match each aversion-therapy element to its description.",
          pairs: [
            ["Antabuse", "Drug causing nausea with alcohol"],
            ["Electric shock", "A physical aversive stimulus"],
            ["Covert sensitization", "Imagined aversive pairing"],
            ["Classical conditioning", "Mechanism behind aversion therapy"]
          ],
          explain: "Aversion therapy conditions discomfort toward an unwanted behavior by real or imagined aversive pairings."
        },
        {
          type: "order",
          q: "Order how aversion therapy conditions a distaste for an unwanted stimulus.",
          items: [
            "Present the unwanted stimulus, such as alcohol",
            "Immediately pair it with an aversive stimulus, such as nausea",
            "Repeat the pairing over many trials",
            "The unwanted stimulus alone now triggers discomfort"
          ],
          explain: "Repeated pairing turns a once-appealing stimulus into a cue for unpleasant feelings."
        }
      ]
    },
    {
      id: "l151",
      title: "Contingency Management",
      intro: "Contingency management uses operant reinforcement, rewarding verified abstinence to treat addiction.",
      questions: [
        {
          type: "mcq",
          q: "Contingency management treats addiction primarily through:",
          choices: ["Classical conditioning of fear", "Positive reinforcement of verified abstinence", "Aversive electric shock", "Free association"],
          answer: 1,
          explain: "It rewards drug-free behavior with tangible incentives, applying operant positive reinforcement."
        },
        {
          type: "truefalse",
          q: "Contingency management is grounded in Skinner's operant conditioning.",
          answer: true,
          explain: "It applies operant principles: behavior that is followed by reinforcement increases in frequency."
        },
        {
          type: "fill",
          q: "In voucher-based contingency management, a drug-negative urine test earns a ____ that can be exchanged for goods.",
          answer: "voucher",
          accept: ["voucher", "reward"],
          explain: "Vouchers redeemable for retail goods reinforce documented, verified abstinence."
        },
        {
          type: "mcq",
          q: "What behavior is typically reinforced in contingency management for substance use?",
          choices: ["Attending a single intake session", "Submitting a drug-negative (clean) urine sample", "Talking about childhood", "Completing a personality test"],
          answer: 1,
          explain: "Objectively verified abstinence, such as a clean urine screen, is the rewarded target behavior."
        },
        {
          type: "match",
          q: "Match each contingency-management term to its meaning.",
          pairs: [
            ["Contingency management", "Rewarding abstinence to reduce drug use"],
            ["Operant conditioning", "The underlying learning principle"],
            ["Voucher system", "Vouchers earned for clean samples"],
            ["Prize bowl (fishbowl)", "Chance to draw a prize for abstinence"]
          ],
          explain: "Both the voucher and prize methods positively reinforce verified drug-free behavior."
        },
        {
          type: "truefalse",
          q: "Contingency management punishes drug use by delivering electric shocks.",
          answer: false,
          explain: "It uses positive reinforcement of abstinence, not punishment of drug use."
        },
        {
          type: "order",
          q: "Order how a voucher-based contingency management program works.",
          items: [
            "Client submits a urine sample",
            "Sample tests drug-negative",
            "Client earns a voucher",
            "Voucher is exchanged for a desired item"
          ],
          explain: "Reinforcement follows only verified abstinence, strengthening drug-free behavior over time."
        }
      ]
    },
    {
      id: "l152",
      title: "Behavioral Roots of CBT",
      intro: "Cognitive behavioral therapy grew out of behavior therapy when Ellis and Beck added thoughts and beliefs to the picture.",
      questions: [
        {
          type: "mcq",
          q: "Who founded Rational Emotive Behavior Therapy (REBT) in 1955?",
          choices: ["Aaron Beck", "Albert Ellis", "Joseph Wolpe", "B.F. Skinner"],
          answer: 1,
          explain: "Albert Ellis introduced the approach, originally called Rational Therapy, in 1955."
        },
        {
          type: "mcq",
          q: "Who developed Cognitive Therapy for depression and described the 'cognitive triad'?",
          choices: ["Aaron Beck", "Ivan Pavlov", "Mary Cover Jones", "John B. Watson"],
          answer: 0,
          explain: "Aaron Beck developed Cognitive Therapy, identifying negative views of the self, world, and future."
        },
        {
          type: "fill",
          q: "Ellis's model summarizes emotional reactions as A-B-C: Activating event, ____, and Consequence.",
          answer: "belief",
          accept: ["belief", "beliefs"],
          explain: "In the ABC model it is the Belief about the event, not the event itself, that drives the Consequence."
        },
        {
          type: "truefalse",
          q: "CBT combines behavioral techniques like exposure with cognitive restructuring of thoughts.",
          answer: true,
          explain: "CBT integrates the behavioral tradition with methods for changing distorted thinking."
        },
        {
          type: "truefalse",
          q: "Beck and Ellis argued that only observable behavior matters and that thoughts are irrelevant.",
          answer: false,
          explain: "They placed internal beliefs and thoughts at the center, adding cognition onto behavior therapy."
        },
        {
          type: "match",
          q: "Match each figure or concept to its contribution.",
          pairs: [
            ["Aaron Beck", "Cognitive Therapy and the cognitive triad"],
            ["Albert Ellis", "REBT and the ABC model"],
            ["Cognitive restructuring", "Changing distorted thoughts"],
            ["Exposure", "Behavioral technique kept within CBT"]
          ],
          explain: "CBT fuses Beck's and Ellis's cognitive work with proven behavioral methods like exposure."
        },
        {
          type: "order",
          q: "Order the historical development from conditioning to CBT.",
          items: [
            "Classical and operant conditioning research",
            "Behavior therapy such as desensitization and exposure",
            "Ellis and Beck add cognition in the 1950s-60s",
            "Cognitive behavioral therapy (CBT)"
          ],
          explain: "CBT grew by adding cognitive theory onto the earlier learning-based behavior therapies."
        }
      ]
    }
  ]
});
