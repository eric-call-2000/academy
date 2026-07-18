window.ACADEMY.addUnit("behaviorism", {
  id: "unit-23",
  title: "Social Learning as a Bridge",
  color: "#14a58f",
  icon: "🌉",
  description: "This unit traces how observational learning theories extended and challenged strict behaviorism, from Miller and Dollard's imitation research to Bandura's social cognitive theory.",
  lessons: [
    {
      id: "l177",
      title: "Miller and Dollard",
      intro: "Neal Miller and John Dollard offered one of the first accounts of imitation as a learned behavior rather than an instinct.",
      questions: [
        {
          type: "mcq",
          q: "In 1941, Neal Miller and John Dollard published a landmark book arguing that imitation can be learned. What was its title?",
          choices: ["Science and Human Behavior", "Principles of Behavior", "Social Learning and Imitation", "Beyond Freedom and Dignity"],
          answer: 2,
          explain: "Miller and Dollard's 1941 book 'Social Learning and Imitation' was an early attempt to explain imitation through reinforcement principles."
        },
        {
          type: "truefalse",
          q: "Miller and Dollard grounded their account of imitation in Clark Hull's drive-reduction learning theory.",
          answer: true,
          explain: "They translated Hull's concepts of drive, cue, response, and reward into a social context to explain how people learn to imitate."
        },
        {
          type: "fill",
          q: "Miller and Dollard argued that imitation is not an innate instinct but is itself ____ through reinforcement.",
          answer: "learned",
          accept: ["learned", "acquired"],
          explain: "Their central claim was that imitative behavior is acquired because copying a model tends to be rewarded."
        },
        {
          type: "match",
          q: "Match each element of Miller and Dollard's learning framework to its meaning.",
          pairs: [
            ["Drive", "An internal stimulus that impels action"],
            ["Cue", "A stimulus that signals which response to make"],
            ["Response", "The behavior the learner performs"],
            ["Reward", "The reinforcement that strengthens the response"]
          ],
          explain: "Drive, cue, response, and reward are the four fundamentals Miller and Dollard borrowed from Hullian learning theory."
        },
        {
          type: "mcq",
          q: "Miller and Dollard described 'matched-dependent behavior,' in which an imitator...",
          choices: ["acts aggressively even when no model is present", "matches a model's response because doing so is rewarded", "ignores all social cues", "learns only through classical conditioning"],
          answer: 1,
          explain: "In matched-dependent behavior, the observer copies the model's response because being reinforced for the match teaches them to imitate."
        },
        {
          type: "order",
          q: "Put Miller and Dollard's four fundamentals of learning in the order they described.",
          items: ["Drive", "Cue", "Response", "Reward"],
          explain: "A drive motivates action, a cue signals the response, the response is made, and a reward reinforces it."
        },
        {
          type: "truefalse",
          q: "Miller and Dollard claimed imitation requires no learning because it is a fixed instinct.",
          answer: false,
          explain: "Their whole argument was the opposite: imitation is learned through reinforcement, not an unlearned instinct."
        }
      ]
    },
    {
      id: "l178",
      title: "Bandura's Social Learning Theory",
      intro: "Albert Bandura argued that people can learn new behaviors simply by watching others, even without any direct reinforcement.",
      questions: [
        {
          type: "mcq",
          q: "The core insight of Bandura's social learning theory is that people can learn...",
          choices: ["only by being directly rewarded or punished", "by observing others, even without direct reinforcement", "only through classical conditioning", "only during early childhood"],
          answer: 1,
          explain: "Bandura showed that observation alone can produce new behavior, going beyond the direct-consequence view of strict behaviorism."
        },
        {
          type: "truefalse",
          q: "Bandura argued that learning can occur without the learner ever performing the behavior or being directly reinforced.",
          answer: true,
          explain: "Watching a model can produce learning even if the observer never acts and is never rewarded, a form of 'no-trial' learning."
        },
        {
          type: "fill",
          q: "Learning a behavior by watching a model perform it is called ____ learning.",
          answer: "observational",
          accept: ["observational", "vicarious"],
          explain: "Observational (or vicarious) learning is the acquisition of behavior by watching a model rather than by direct trial and error."
        },
        {
          type: "mcq",
          q: "Bandura drew a key distinction between learning and performance. This means that...",
          choices: ["a behavior can be learned but not performed until there is motivation", "learning and performance are identical", "performance always comes before learning", "reinforcement plays no role at all"],
          answer: 0,
          explain: "Observers can acquire a behavior yet only display it later when they have a reason to; learning is not the same as performing."
        },
        {
          type: "match",
          q: "Match each term from Bandura's theory to its description.",
          pairs: [
            ["Model", "A person whose behavior is observed"],
            ["Modeling", "Learning by observing and imitating a model"],
            ["No-trial learning", "Acquiring a behavior without trial-and-error practice"]
          ],
          explain: "A model provides the behavior, modeling is the observational process, and no-trial learning captures how fast it can happen."
        },
        {
          type: "truefalse",
          q: "Bandura kept a role for reinforcement but added that observation alone can also produce learning.",
          answer: true,
          explain: "He did not discard reinforcement; he extended behaviorism by showing that watching models is another route to learning."
        },
        {
          type: "mcq",
          q: "Which of these is the best example of observational learning?",
          choices: ["A rat pressing a lever for food pellets", "A dog salivating to a bell", "A child learning to swing a bat by watching a coach demonstrate", "A person blinking when air puffs the eye"],
          answer: 2,
          explain: "Learning the swing by watching the coach is observational learning; the others are operant, classical, or reflexive."
        }
      ]
    },
    {
      id: "l179",
      title: "The Bobo Doll Experiment",
      intro: "Bandura's famous Bobo doll studies showed that children readily imitate aggression they observe in adults, including on film.",
      questions: [
        {
          type: "mcq",
          q: "In the original 1961 Bobo doll study, children who watched an adult attack the doll were more likely to...",
          choices: ["avoid the doll entirely", "comfort the doll", "imitate the aggressive acts themselves", "fall asleep"],
          answer: 2,
          explain: "Children exposed to an aggressive model reproduced the model's specific aggressive acts far more than children who saw a calm model."
        },
        {
          type: "truefalse",
          q: "The Bobo doll experiments were conducted by Albert Bandura with colleagues Dorothea Ross and Sheila Ross.",
          answer: true,
          explain: "Bandura, Ross, and Ross published the Bobo doll studies in the early 1960s."
        },
        {
          type: "fill",
          q: "The inflatable, weighted toy that popped back up when struck was called a ____ doll.",
          answer: "bobo",
          accept: ["bobo"],
          explain: "The Bobo doll was an inflatable clown weighted at the base so it rocked back upright after being hit."
        },
        {
          type: "mcq",
          q: "The 1963 follow-up study was important because it showed children imitated aggression even when the model was...",
          choices: ["a live adult in the same room", "shown only on film or as a cartoon character", "their own parent", "a school teacher"],
          answer: 1,
          explain: "The 1963 study demonstrated that filmed and even cartoon models produced imitative aggression, not just live models."
        },
        {
          type: "truefalse",
          q: "The Bobo doll studies suggested that watching aggression on film can increase imitative aggression in children.",
          answer: true,
          explain: "Because filmed models also prompted imitation, the research raised early concerns about media violence."
        },
        {
          type: "match",
          q: "Match each Bobo doll study detail to the correct fact.",
          pairs: [
            ["1961", "Original study using a live adult model"],
            ["1963", "Showed filmed and cartoon models also prompted imitation"],
            ["Bandura", "Lead researcher on the studies"]
          ],
          explain: "The 1961 study used live models; the 1963 study extended the finding to filmed and cartoon models; Bandura led both."
        },
        {
          type: "order",
          q: "Order the sequence of the classic Bobo doll procedure.",
          items: ["A child watches an adult model hit the Bobo doll", "The child is mildly frustrated by having attractive toys taken away", "The child is left alone in a room with the Bobo doll", "The child imitates the aggressive acts on the doll"],
          explain: "Children first observed the model, then were mildly aroused by frustration, then were left alone and observed for imitation."
        }
      ]
    },
    {
      id: "l180",
      title: "Vicarious Reinforcement",
      intro: "People adjust their behavior based on the consequences they see others receive, not only the consequences they experience directly.",
      questions: [
        {
          type: "mcq",
          q: "Vicarious reinforcement occurs when an observer becomes more likely to imitate a behavior because they...",
          choices: ["were directly rewarded for it", "saw a model rewarded for it", "were punished for it", "find the behavior instinctive"],
          answer: 1,
          explain: "Vicarious reinforcement means seeing a model rewarded raises the observer's likelihood of copying that behavior."
        },
        {
          type: "truefalse",
          q: "Vicarious punishment tends to decrease the chance an observer will imitate a behavior.",
          answer: true,
          explain: "When observers see a model punished, they are less likely to reproduce that behavior themselves."
        },
        {
          type: "fill",
          q: "Learning the likely consequences of an action by watching what happens to someone else is called ____ reinforcement or punishment.",
          answer: "vicarious",
          accept: ["vicarious"],
          explain: "Vicarious consequences are experienced indirectly, through observing what happens to a model."
        },
        {
          type: "mcq",
          q: "In Bandura's 1965 study, children who saw a model punished imitated less. But when all children were later offered a reward to reproduce the behavior...",
          choices: ["only the punished group performed it", "they still could not do it", "none of them would perform it", "all groups performed the aggression about equally"],
          answer: 3,
          explain: "Offering an incentive erased the group differences, revealing that all children had learned the behavior even if they had not shown it."
        },
        {
          type: "truefalse",
          q: "The 1965 study showed that children had learned the behavior even when they did not spontaneously perform it.",
          answer: true,
          explain: "The equal performance under reward demonstrated that learning had occurred; performance had simply been suppressed by seeing punishment."
        },
        {
          type: "match",
          q: "Match each concept to its effect on the observer.",
          pairs: [
            ["Vicarious reinforcement", "Seeing a model rewarded raises imitation"],
            ["Vicarious punishment", "Seeing a model punished lowers imitation"],
            ["Learning-performance distinction", "Behavior can be learned yet not displayed"]
          ],
          explain: "Observed rewards and punishments shape performance, while the learning-performance distinction shows the two can come apart."
        },
        {
          type: "fill",
          q: "Bandura's 1965 study is often cited to show the difference between ____ and performance.",
          answer: "learning",
          accept: ["learning"],
          explain: "The study separated learning (acquiring the behavior) from performance (actually displaying it)."
        }
      ]
    },
    {
      id: "l181",
      title: "The Four Modeling Processes",
      intro: "Bandura specified four processes that must all occur for observational learning to succeed.",
      questions: [
        {
          type: "mcq",
          q: "Bandura identified four processes required for observational learning. Which is the correct set?",
          choices: ["Attention, retention, reproduction, motivation", "Drive, cue, response, reward", "Sensation, perception, memory, action", "Encoding, storage, retrieval, decay"],
          answer: 0,
          explain: "Bandura's four modeling processes are attention, retention, reproduction, and motivation."
        },
        {
          type: "order",
          q: "Put the four modeling processes in Bandura's order.",
          items: ["Attention", "Retention", "Reproduction", "Motivation"],
          explain: "You must attend to the model, retain what you saw, be able to reproduce it, and be motivated to perform it."
        },
        {
          type: "fill",
          q: "Before you can imitate a model, you must first pay ____ to what the model does.",
          answer: "attention",
          accept: ["attention"],
          explain: "Attention is the first process; if you do not notice the model's behavior, you cannot learn it."
        },
        {
          type: "match",
          q: "Match each modeling process to what it involves.",
          pairs: [
            ["Attention", "Noticing the model's behavior"],
            ["Retention", "Remembering what was observed"],
            ["Reproduction", "Physically carrying out the behavior"],
            ["Motivation", "Having a reason to perform it"]
          ],
          explain: "Each process handles a distinct requirement: noticing, remembering, doing, and being driven to do it."
        },
        {
          type: "truefalse",
          q: "According to Bandura, you can only reproduce a modeled behavior if you first retained a memory of it.",
          answer: true,
          explain: "Retention stores a symbolic representation of the behavior, which reproduction then draws on to act."
        },
        {
          type: "mcq",
          q: "A student watches a chemistry demo carefully but forgets the steps by the next day. Which modeling process broke down?",
          choices: ["Attention", "Retention", "Motivation", "Reproduction"],
          answer: 1,
          explain: "The student attended but failed to retain the memory, so retention is the process that broke down."
        },
        {
          type: "truefalse",
          q: "Motivation determines whether a learned behavior is actually performed.",
          answer: true,
          explain: "Even a well-learned behavior stays unperformed without motivation, often supplied by expected reinforcement."
        }
      ]
    },
    {
      id: "l182",
      title: "Reciprocal Determinism",
      intro: "Bandura proposed that behavior, personal factors, and the environment continuously shape one another.",
      questions: [
        {
          type: "mcq",
          q: "Reciprocal determinism proposes that behavior is shaped by the interaction of which three factors?",
          choices: ["Id, ego, and superego", "Drive, cue, and reward", "Person, behavior, and environment", "Attention, retention, and motivation"],
          answer: 2,
          explain: "Bandura's triadic model has personal factors, behavior, and the environment all influencing each other."
        },
        {
          type: "truefalse",
          q: "In reciprocal determinism, influence flows in only one direction, from environment to behavior.",
          answer: false,
          explain: "Influence is bidirectional: the person, their behavior, and the environment all affect one another."
        },
        {
          type: "fill",
          q: "Bandura's model of three mutually influencing factors is called ____ determinism, also known as triadic reciprocal causation.",
          answer: "reciprocal",
          accept: ["reciprocal"],
          explain: "Reciprocal determinism captures the two-way influence among person, behavior, and environment."
        },
        {
          type: "match",
          q: "Match each factor in reciprocal determinism to an example.",
          pairs: [
            ["Person", "A student's confidence and beliefs"],
            ["Behavior", "The student choosing to study hard"],
            ["Environment", "A teacher's praise and the classroom setting"]
          ],
          explain: "Personal factors, behavior, and the environment each contribute and are changed by the others."
        },
        {
          type: "mcq",
          q: "How does reciprocal determinism differ from strict behaviorism?",
          choices: ["It denies that the environment matters", "It adds the person's cognition and lets all three factors influence each other", "It removes behavior from the equation", "It says only genetics shape behavior"],
          answer: 1,
          explain: "Strict behaviorism emphasized environment shaping behavior one way; reciprocal determinism adds cognition and mutual influence."
        },
        {
          type: "truefalse",
          q: "Reciprocal determinism gives people some agency, because their thoughts and actions can change their environment.",
          answer: true,
          explain: "Because people help shape the situations that act on them, the model grants humans genuine agency."
        },
        {
          type: "mcq",
          q: "Which scenario best illustrates reciprocal determinism?",
          choices: ["A person is passively molded by rewards with no influence back", "A friendly person draws warm responses, which further boosts their friendliness", "A reflex triggered automatically by a stimulus", "A behavior that occurs with no environment at all"],
          answer: 1,
          explain: "The friendly person changes the social environment, which then feeds back to strengthen their behavior, showing mutual influence."
        }
      ]
    },
    {
      id: "l183",
      title: "Self-Efficacy",
      intro: "Bandura argued that beliefs about one's own capability strongly shape which actions people attempt and how long they persist.",
      questions: [
        {
          type: "mcq",
          q: "Self-efficacy refers to a person's belief in their capability to...",
          choices: ["control other people", "predict the future", "avoid all failure", "successfully carry out the actions needed to reach a goal"],
          answer: 3,
          explain: "Self-efficacy is the belief that you can execute the behaviors required to produce a desired outcome."
        },
        {
          type: "truefalse",
          q: "Albert Bandura introduced the concept of self-efficacy in a 1977 paper.",
          answer: true,
          explain: "His 1977 paper 'Self-efficacy: Toward a Unifying Theory of Behavioral Change' launched the concept."
        },
        {
          type: "mcq",
          q: "Bandura proposed several sources of self-efficacy. Which is usually the most powerful?",
          choices: ["Mastery experiences from past successes", "Watching others succeed", "Verbal encouragement", "Current mood"],
          answer: 0,
          explain: "Direct mastery experiences, your own past successes, are the strongest source of self-efficacy beliefs."
        },
        {
          type: "match",
          q: "Match each source of self-efficacy to an example.",
          pairs: [
            ["Mastery experience", "Succeeding at a task yourself"],
            ["Vicarious experience", "Seeing a similar person succeed"],
            ["Verbal persuasion", "Being encouraged by a coach"],
            ["Emotional state", "Feeling calm rather than anxious"]
          ],
          explain: "Bandura named mastery experiences, vicarious experiences, verbal persuasion, and physiological or emotional states as the four sources."
        },
        {
          type: "fill",
          q: "According to Bandura, the strongest source of self-efficacy is direct ____ experience, meaning your own past successes.",
          answer: "mastery",
          accept: ["mastery", "performance"],
          explain: "Mastery experiences, sometimes called performance accomplishments, most powerfully build self-efficacy."
        },
        {
          type: "truefalse",
          q: "Self-efficacy is the same thing as simply expecting a behavior to produce a good outcome.",
          answer: false,
          explain: "Self-efficacy is the belief you can perform the behavior; that is distinct from outcome expectancy, the belief about what the behavior leads to."
        },
        {
          type: "mcq",
          q: "A student with high self-efficacy for math is more likely to...",
          choices: ["give up quickly on hard problems", "persist and put in more effort on difficult problems", "avoid math entirely", "assume there is no point trying"],
          answer: 1,
          explain: "High self-efficacy increases effort and persistence, especially when tasks become difficult."
        }
      ]
    },
    {
      id: "l184",
      title: "Social Cognitive Theory",
      intro: "In 1986 Bandura renamed his framework social cognitive theory to foreground thinking, self-regulation, and human agency.",
      questions: [
        {
          type: "mcq",
          q: "In 1986, Bandura renamed his social learning theory. What did he call it?",
          choices: ["Behavior analysis", "Social cognitive theory", "Cognitive dissonance theory", "Operant theory"],
          answer: 1,
          explain: "In his 1986 book, Bandura renamed the framework 'social cognitive theory.'"
        },
        {
          type: "truefalse",
          q: "The rename to social cognitive theory reflected a greater emphasis on cognition, self-regulation, and human agency.",
          answer: true,
          explain: "The new name signaled that mental processes and self-directed action, not just modeling, were central."
        },
        {
          type: "fill",
          q: "Bandura renamed the theory to highlight the role of ____ processes such as thinking, memory, and self-reflection.",
          answer: "cognitive",
          accept: ["cognitive", "mental", "cognition"],
          explain: "Adding 'cognitive' underscored the mental processes that guide observational learning and self-regulation."
        },
        {
          type: "mcq",
          q: "Why did Bandura change the name from social learning theory to social cognitive theory?",
          choices: ["To reject the idea that people learn socially", "To stress the mental and self-regulatory processes involved, not just behavior", "To return to strict behaviorism", "To remove observation from the theory"],
          answer: 1,
          explain: "The change emphasized cognition, self-regulation, and agency, moving further from a purely behaviorist account."
        },
        {
          type: "match",
          q: "Match each idea to the theory it best fits.",
          pairs: [
            ["Strict behaviorism", "Behavior explained by external consequences alone"],
            ["Social learning theory", "Learning by observing models"],
            ["Social cognitive theory", "Learning plus cognition, self-regulation, and agency"]
          ],
          explain: "The progression added first observation and then cognition and agency to the behaviorist foundation."
        },
        {
          type: "truefalse",
          q: "Social cognitive theory abandoned the idea that people can learn by observing others.",
          answer: false,
          explain: "It kept observational learning as a core mechanism and added cognitive and self-regulatory processes on top of it."
        },
        {
          type: "order",
          q: "Order these Bandura milestones from earliest to latest.",
          items: ["Bobo doll experiments in the early 1960s", "Self-efficacy concept in 1977", "Social cognitive theory renaming in 1986"],
          explain: "The Bobo doll studies came first, self-efficacy followed in 1977, and the social cognitive theory rename came in 1986."
        }
      ]
    }
  ]
});
