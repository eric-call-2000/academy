window.ACADEMY.addUnit("attachment", {
  id: "unit-3",
  title: "The Attachment Behavioral System",
  color: "#e0518a",
  icon: "⚙️",
  description: "Explains attachment as a goal-corrected control system, covering its set-goal of felt security, its activating and terminating conditions, and its moment-to-moment balance with exploration and fear.",
  lessons: [
    {
      id: "l17",
      title: "Behavioral Systems Defined",
      intro: "A behavioral system is an inherited, goal-corrected control system that Bowlby adapted from ethology and cybernetics to explain organized infant behavior.",
      questions: [
        {
          type: "mcq",
          q: "In Bowlby's theory, what best describes a behavioral system?",
          choices: [
            "A fixed reflex that produces one unvarying movement",
            "An inherited control system that organizes behavior toward a set-goal",
            "A conscious strategy the infant reasons out step by step",
            "A habit built up only through reinforcement"
          ],
          answer: 1,
          explain: "A behavioral system is a species-typical, inherited control system that flexibly organizes many behaviors to reach a set-goal, not a single reflex or a learned habit."
        },
        {
          type: "truefalse",
          q: "Bowlby drew the concept of a goal-corrected control system from cybernetics, the science of feedback and self-regulation.",
          answer: true,
          explain: "Cybernetics, associated with Norbert Wiener, supplied the idea of control systems that use feedback to correct course toward a goal, which Bowlby applied to attachment."
        },
        {
          type: "mcq",
          q: "From which field did Bowlby borrow the idea of evolved, species-typical behavior patterns?",
          choices: [
            "Ethology, the biological study of animal behavior",
            "Psychoanalytic dream interpretation",
            "Behaviorist reinforcement theory",
            "Classical economics"
          ],
          answer: 0,
          explain: "Ethologists such as Konrad Lorenz and Niko Tinbergen studied evolved, species-typical behavior; Bowlby applied their concept of instinctive behavior systems to human attachment."
        },
        {
          type: "fill",
          q: "A control system that uses feedback to keep adjusting behavior until its aim is reached is called ____-corrected.",
          answer: "goal",
          accept: ["goal", "goal corrected", "goal-corrected"],
          explain: "Bowlby called attachment 'goal-corrected': the infant continuously monitors feedback and adjusts its behavior until the set-goal is achieved."
        },
        {
          type: "match",
          q: "Match each source or thinker to its contribution to Bowlby's model.",
          pairs: [
            ["Ethology", "Study of evolved, species-typical behavior patterns"],
            ["Cybernetics", "Control systems that self-correct using feedback"],
            ["Konrad Lorenz", "Imprinting studies in young geese"],
            ["Evolutionary theory", "Behaviors that promote survival and reproduction"]
          ],
          explain: "Bowlby synthesized ethology, cybernetics, and evolution; Lorenz's imprinting work showed early bonds need not depend on feeding."
        },
        {
          type: "order",
          q: "Order the steps by which a goal-corrected system operates.",
          items: [
            "Detect a discrepancy between the current state and the set-goal",
            "Activate behavior to reduce the discrepancy",
            "Monitor feedback about the changing conditions",
            "Terminate behavior once the set-goal is reached"
          ],
          explain: "A goal-corrected system senses the gap from its target, acts, monitors feedback, and shuts off when the goal is met."
        },
        {
          type: "truefalse",
          q: "Bowlby believed attachment is best explained as a secondary drive reduced simply by feeding.",
          answer: false,
          explain: "Bowlby rejected the secondary-drive or 'cupboard love' view; work by Lorenz and Harlow showed attachment is not reducible to feeding."
        }
      ]
    },
    {
      id: "l18",
      title: "The Set-Goal of Attachment",
      intro: "The set-goal of the attachment system is to maintain proximity and accessibility to the caregiver, sustaining a felt sense of security.",
      questions: [
        {
          type: "mcq",
          q: "What is the set-goal of the attachment behavioral system?",
          choices: [
            "Winning as much feeding as possible",
            "Complete independence from caregivers",
            "Maintaining proximity and accessibility to the attachment figure",
            "Avoiding all contact with strangers"
          ],
          answer: 2,
          explain: "Bowlby proposed the system's set-goal is keeping a desired degree of proximity to, or accessibility of, the attachment figure."
        },
        {
          type: "truefalse",
          q: "A set-goal is a target condition a behavioral system works to maintain, not a single fixed action.",
          answer: true,
          explain: "The set-goal is a desired state, such as a tolerable distance from the caregiver; the specific behaviors used to reach it vary with circumstances."
        },
        {
          type: "fill",
          q: "The attachment system continually adjusts the infant's behavior to keep the caregiver ____, meaning near and available.",
          answer: "proximate",
          accept: ["proximate", "close", "near", "accessible"],
          explain: "The set-goal is maintaining proximity and accessibility; the infant acts to keep the caregiver near and reachable."
        },
        {
          type: "mcq",
          q: "How does the set-goal change with circumstances?",
          choices: [
            "It stays a fixed number of meters at all times",
            "It disappears once the infant can walk",
            "It is set only by the caregiver, never the infant",
            "It tightens when the infant is frightened and loosens when the infant feels safe"
          ],
          answer: 3,
          explain: "The tolerable distance is dynamic: fear, illness, or fatigue shrink it while security widens it, letting the infant explore farther."
        },
        {
          type: "match",
          q: "Match each state to the infant's likely set-goal for distance.",
          pairs: [
            ["Frightened by a stranger", "Wants close bodily contact"],
            ["Calm and rested at home", "Tolerates greater distance to explore"],
            ["Ill or in pain", "Seeks to be held"]
          ],
          explain: "The set-goal is not fixed; distress narrows the acceptable distance while security widens it."
        },
        {
          type: "order",
          q: "Order these situations from the smallest tolerated caregiver distance to the largest.",
          items: [
            "Terrified and clinging",
            "Mildly wary",
            "Content and curious",
            "Deeply absorbed in confident play"
          ],
          explain: "As felt security rises, the infant tolerates and even seeks greater distance from the caregiver."
        },
        {
          type: "truefalse",
          q: "Because the set-goal can be reached by many different behaviors, the attachment system is flexible rather than a rigid reflex.",
          answer: true,
          explain: "Goal-corrected systems select whatever behavior fits the situation, such as crying, crawling, calling, or clinging, to reach the same set-goal."
        }
      ]
    },
    {
      id: "l19",
      title: "Felt Security Concept",
      intro: "Sroufe and Waters (1977) reframed the attachment system's set-goal as 'felt security,' the infant's own appraisal of safety rather than mere physical distance.",
      questions: [
        {
          type: "mcq",
          q: "Who reformulated the set-goal of attachment as 'felt security'?",
          choices: [
            "John Bowlby and Mary Ainsworth",
            "Alan Sroufe and Everett Waters",
            "Konrad Lorenz and Niko Tinbergen",
            "Harry Harlow and Robert Hinde"
          ],
          answer: 1,
          explain: "In their 1977 paper 'Attachment as an organizational construct,' Sroufe and Waters proposed felt security as the system's set-goal."
        },
        {
          type: "truefalse",
          q: "'Felt security' means the infant's subjective appraisal of safety, not simply the measured distance to the caregiver.",
          answer: true,
          explain: "Sroufe and Waters argued the set-goal is an internal, appraised sense of security, so the same distance can feel safe in one context and threatening in another."
        },
        {
          type: "fill",
          q: "Sroufe and Waters argued the attachment system aims at felt ____, an appraised sense of safety.",
          answer: "security",
          accept: ["security", "felt security"],
          explain: "They renamed the set-goal 'felt security' to capture that it is a subjective, appraised state rather than a physical measurement."
        },
        {
          type: "mcq",
          q: "Why is 'felt security' a better description of the set-goal than literal proximity?",
          choices: [
            "The same distance can feel safe or unsafe depending on context and appraisal",
            "Infants cannot actually perceive distance",
            "Proximity has no effect on infant behavior",
            "Felt security removes the need for a caregiver entirely"
          ],
          answer: 0,
          explain: "Context matters: a familiar room makes distance tolerable while a strange or threatening setting does not, and felt security captures that appraisal."
        },
        {
          type: "match",
          q: "Match each idea to the correct description.",
          pairs: [
            ["Set-goal (Sroufe and Waters)", "Felt security, a subjective appraisal"],
            ["Publication year", "1977"],
            ["Organizational construct", "Attachment seen as organizing behavior, not a trait count"]
          ],
          explain: "Their 1977 paper treated attachment as an organizational construct with felt security as its set-goal."
        },
        {
          type: "order",
          q: "Order how appraisal shapes felt security when a stranger enters.",
          items: [
            "Infant perceives the stranger and the setting",
            "Infant appraises whether the situation is safe",
            "Felt security drops if the appraisal signals threat",
            "Attachment behavior activates to restore felt security"
          ],
          explain: "Felt security depends on appraisal: perception, evaluation, a possible drop in security, and then attachment behavior to restore it."
        },
        {
          type: "truefalse",
          q: "According to the felt-security view, an infant right next to the caregiver can never show attachment distress.",
          answer: false,
          explain: "Even in contact, an infant may feel insecure if the appraisal signals threat; felt security, not distance alone, governs the system."
        }
      ]
    },
    {
      id: "l20",
      title: "Activating and Terminating Conditions",
      intro: "Attachment behavior is switched on by activating conditions such as fear, pain, or separation, and switched off by terminating conditions such as regained proximity and comfort.",
      questions: [
        {
          type: "mcq",
          q: "Which of these is an activating condition for attachment behavior?",
          choices: [
            "Feeling rested, safe, and content",
            "The caregiver holding the infant calmly",
            "Sudden alarm or the caregiver becoming inaccessible",
            "Successful, absorbed exploration"
          ],
          answer: 2,
          explain: "Activating conditions include fright, pain, fatigue, illness, and separation or inaccessibility of the attachment figure."
        },
        {
          type: "truefalse",
          q: "Regaining contact and comfort with the caregiver is a terminating condition that switches attachment behavior off.",
          answer: true,
          explain: "Terminating conditions restore the set-goal; proximity, contact, and soothing turn attachment behavior off."
        },
        {
          type: "match",
          q: "Sort each condition as activating or terminating.",
          pairs: [
            ["Illness or pain", "Activating"],
            ["Being picked up and soothed", "Terminating"],
            ["A frightening stranger", "Activating"],
            ["Sight and sound of a returning caregiver", "Terminating"]
          ],
          explain: "Distressing or threatening states activate the system; regained proximity and comfort terminate it."
        },
        {
          type: "fill",
          q: "Bowlby noted that intense activation is often only terminated by physical ____ with the caregiver, such as being held.",
          answer: "contact",
          accept: ["contact", "touch", "physical contact"],
          explain: "Mild activation may end at the sight or sound of the caregiver, but strong activation typically requires close bodily contact to terminate."
        },
        {
          type: "mcq",
          q: "How does the intensity of activation affect what terminates the behavior?",
          choices: [
            "Intensity has no effect on terminating conditions",
            "Stronger activation is always ended by a smile from across the room",
            "Only feeding can ever terminate attachment behavior",
            "Mild activation ends with sight or sound of the caregiver; intense activation needs contact"
          ],
          answer: 3,
          explain: "Terminating stimuli scale with activation: low arousal ends with distal cues, high arousal requires proximal contact and holding."
        },
        {
          type: "order",
          q: "Order a typical activation-termination cycle.",
          items: [
            "A loud noise alarms the infant",
            "Attachment behavior activates, such as crying and reaching",
            "The caregiver approaches and picks the infant up",
            "Comfort restores felt security and the behavior terminates"
          ],
          explain: "An activating cue turns the system on, behavior seeks proximity, contact is achieved, and terminating conditions shut the system off."
        },
        {
          type: "truefalse",
          q: "Once activated, attachment behavior continues at full strength regardless of whether the caregiver responds.",
          answer: false,
          explain: "The system is goal-corrected: when terminating conditions such as proximity and comfort are met, the behavior subsides rather than continuing indefinitely."
        }
      ]
    },
    {
      id: "l21",
      title: "Proximity Maintenance",
      intro: "Proximity maintenance is the infant's core drive to stay near the caregiver, the most basic output of the attachment system.",
      questions: [
        {
          type: "mcq",
          q: "What does 'proximity maintenance' refer to?",
          choices: [
            "The infant's tendency to seek and keep closeness to the attachment figure",
            "The caregiver's schedule of feedings",
            "The infant's exploration of distant objects",
            "Avoiding the caregiver after a separation"
          ],
          answer: 0,
          explain: "Proximity maintenance is the drive to gain and keep nearness to the attachment figure, the defining output of the attachment system."
        },
        {
          type: "truefalse",
          q: "Proximity maintenance is one of the defining features of an attachment bond.",
          answer: true,
          explain: "Along with safe haven, secure base, and separation distress, proximity maintenance is a hallmark of attachment relationships."
        },
        {
          type: "match",
          q: "Match each proximity-promoting behavior to its type.",
          pairs: [
            ["Crying and calling", "Signaling behavior that brings the caregiver closer"],
            ["Crawling and approaching", "Locomotor behavior that closes the distance"],
            ["Clinging and grasping", "Contact-maintaining behavior once near"]
          ],
          explain: "Signals summon the caregiver, locomotion closes the distance, and clinging maintains contact; all serve proximity."
        },
        {
          type: "fill",
          q: "Behaviors like crying and reaching are ____ behaviors, because they prompt the caregiver to come closer.",
          answer: "signaling",
          accept: ["signaling", "signalling", "signal"],
          explain: "Bowlby distinguished signaling behaviors, such as crying, smiling, and calling, that bring the caregiver to the infant from approach behaviors that bring the infant to the caregiver."
        },
        {
          type: "mcq",
          q: "Why is proximity maintenance considered adaptive in evolutionary terms?",
          choices: [
            "It teaches infants to read",
            "Staying near a protective adult improved survival against predators and dangers",
            "It guarantees more food than any other behavior",
            "It prevents infants from ever exploring"
          ],
          answer: 1,
          explain: "Bowlby argued that keeping close to a protective caregiver raised the infant's chances of surviving threats in the environment of evolutionary adaptedness."
        },
        {
          type: "order",
          q: "Order these behaviors by how much distance they close, from least to most.",
          items: [
            "Crying to summon a distant caregiver",
            "Crawling toward the caregiver",
            "Reaching up to be held",
            "Clinging tightly once in contact"
          ],
          explain: "The infant escalates from distal signaling to locomotion to contact-seeking and finally contact-maintaining as it closes the gap."
        },
        {
          type: "truefalse",
          q: "Only physical crawling counts as proximity-seeking; crying and smiling play no role.",
          answer: false,
          explain: "Signaling behaviors such as crying and smiling are key proximity-promoting behaviors because they bring the caregiver to the infant."
        }
      ]
    },
    {
      id: "l22",
      title: "Separation Distress",
      intro: "Separation distress is the protest and anxiety an infant shows when the attachment figure departs, evidence that the attachment system is strongly activated.",
      questions: [
        {
          type: "mcq",
          q: "What is separation distress?",
          choices: [
            "Calm indifference when the caregiver leaves",
            "Fear of unfamiliar foods",
            "Protest and anxiety triggered by the attachment figure's departure",
            "Excitement at meeting strangers"
          ],
          answer: 2,
          explain: "Separation distress is the distress, protest, and searching an infant shows when separated from the attachment figure."
        },
        {
          type: "truefalse",
          q: "Separation distress focused on a particular figure is evidence that a specific attachment bond has formed.",
          answer: true,
          explain: "Distress centered on one figure's absence signals a selective attachment to that person, not just general upset."
        },
        {
          type: "order",
          q: "Order the phases of a young child's response to prolonged separation, as described by Robertson and Bowlby.",
          items: [
            "Protest",
            "Despair",
            "Detachment"
          ],
          explain: "Bowlby and James Robertson described a sequence of protest, then despair, then detachment during extended separations from the attachment figure."
        },
        {
          type: "fill",
          q: "The first phase of a child's reaction to separation, marked by crying and active searching, is called ____.",
          answer: "protest",
          accept: ["protest"],
          explain: "In the protest phase the child cries, calls, and searches, trying to recover the lost attachment figure."
        },
        {
          type: "mcq",
          q: "In the detachment phase, how might a child behave when the caregiver returns?",
          choices: [
            "Cling desperately and refuse to let go",
            "Search frantically around the room",
            "Cry louder than ever before",
            "Seem distant or indifferent, as if the bond were suppressed"
          ],
          answer: 3,
          explain: "After prolonged separation, a child in detachment may appear emotionally remote on reunion, an apparent defensive suppression of attachment."
        },
        {
          type: "match",
          q: "Match each separation phase to its typical behavior.",
          pairs: [
            ["Protest", "Crying, calling, and searching for the caregiver"],
            ["Despair", "Withdrawal, sadness, and reduced activity"],
            ["Detachment", "Apparent indifference toward the caregiver"]
          ],
          explain: "The sequence moves from active protest, to hopeless despair, to defensive detachment during prolonged separation."
        },
        {
          type: "truefalse",
          q: "Focused separation distress usually appears in the first days of life, before the infant can recognize a specific caregiver.",
          answer: false,
          explain: "Focused separation distress emerges in the second half of the first year, once the infant has formed a selective attachment and can recognize the specific figure."
        }
      ]
    },
    {
      id: "l23",
      title: "The Exploration System Balance",
      intro: "The attachment and exploration systems work in dynamic balance, so an infant continually trades off staying close against venturing out to explore.",
      questions: [
        {
          type: "mcq",
          q: "How do the attachment and exploration systems relate?",
          choices: [
            "They are the same single system",
            "They are in dynamic balance, one rising as the other falls",
            "Exploration always overrides attachment",
            "Attachment permanently shuts off exploration"
          ],
          answer: 1,
          explain: "The systems are reciprocally balanced: high attachment activation suppresses exploration, while felt security frees the infant to explore."
        },
        {
          type: "truefalse",
          q: "Ainsworth described the caregiver as a 'secure base' from which the infant explores.",
          answer: true,
          explain: "Mary Ainsworth's secure-base concept captures how a confident infant ventures out to explore and returns to the caregiver for reassurance."
        },
        {
          type: "fill",
          q: "A caregiver who supports confident exploration serves as a secure ____ the infant can venture out from and return to.",
          answer: "base",
          accept: ["base", "secure base"],
          explain: "The secure-base phenomenon lets the infant explore while treating the caregiver as a reliable point of return."
        },
        {
          type: "mcq",
          q: "What typically happens to exploration when the attachment system is strongly activated by fear?",
          choices: [
            "Exploration increases sharply",
            "Exploration stays exactly the same",
            "Exploration decreases as the infant seeks the caregiver",
            "The infant permanently stops exploring for life"
          ],
          answer: 2,
          explain: "When frightened, the infant's attachment system dominates and exploration drops as it moves toward the caregiver for safety."
        },
        {
          type: "match",
          q: "Match each situation to the likely balance between the two systems.",
          pairs: [
            ["Caregiver present and infant calm", "Exploration high, attachment low"],
            ["Stranger enters the room", "Attachment rises, exploration falls"],
            ["Infant returns to caregiver and is reassured", "Attachment satisfied, exploration resumes"]
          ],
          explain: "The balance shifts moment to moment as felt security rises and falls."
        },
        {
          type: "order",
          q: "Order a typical secure-base exploration cycle.",
          items: [
            "Infant checks that the caregiver is available",
            "Infant moves out to explore a toy",
            "Infant returns to the caregiver for reassurance",
            "Reassured, the infant sets out to explore again"
          ],
          explain: "Secure-base behavior cycles between venturing out and checking back, balancing exploration with attachment."
        },
        {
          type: "truefalse",
          q: "An infant explores more freely when it feels insecure and the caregiver is absent.",
          answer: false,
          explain: "Insecurity and caregiver absence activate attachment and suppress exploration; exploration flourishes when felt security is high."
        }
      ]
    },
    {
      id: "l24",
      title: "Fear and Wariness System",
      intro: "A distinct fear and wariness system detects danger and, when alarmed, activates attachment behavior, driving the infant toward the caregiver.",
      questions: [
        {
          type: "mcq",
          q: "How does the fear and wariness system interact with the attachment system?",
          choices: [
            "Fear activates attachment behavior, driving the infant toward the caregiver",
            "Fear switches attachment behavior off completely",
            "Fear and attachment never occur together",
            "Fear only affects exploration, not attachment"
          ],
          answer: 0,
          explain: "Alarming stimuli activate the fear system, which in turn strongly activates attachment behavior and proximity-seeking."
        },
        {
          type: "truefalse",
          q: "Bowlby proposed that certain 'natural clues to danger' reliably arouse fear even without prior learning.",
          answer: true,
          explain: "Bowlby argued cues like being alone, sudden movement, darkness, and loud noise are natural clues to danger that evolved to trigger fear."
        },
        {
          type: "match",
          q: "Match each natural clue to danger to an example.",
          pairs: [
            ["Strangeness", "An unfamiliar person or place"],
            ["Sudden change", "A rapid movement or loud noise"],
            ["Being alone", "Absence of the attachment figure"],
            ["Darkness", "Loss of visibility"]
          ],
          explain: "Bowlby listed strangeness, sudden change, being alone, and darkness among the natural clues that arouse fear and wariness."
        },
        {
          type: "fill",
          q: "Wary reactions to unfamiliar people, often emerging around 7 to 9 months, are called stranger ____.",
          answer: "wariness",
          accept: ["wariness", "anxiety", "fear"],
          explain: "Stranger wariness, also called stranger anxiety, is the fear system's response to unfamiliar people, typically appearing in the second half of the first year."
        },
        {
          type: "mcq",
          q: "Why is it adaptive for fear and attachment to be linked?",
          choices: [
            "So the infant learns to fear its own caregiver",
            "So the infant ignores danger and keeps exploring",
            "So the infant avoids the caregiver when threatened",
            "So detecting danger quickly sends the infant to a protective caregiver"
          ],
          answer: 3,
          explain: "Linking fear to attachment means threat detection immediately drives the infant toward protection, improving survival."
        },
        {
          type: "order",
          q: "Order how the fear and attachment systems act together when a stranger approaches.",
          items: [
            "The fear system detects an unfamiliar person",
            "Wariness and alarm rise",
            "Attachment behavior activates",
            "The infant moves to the caregiver for protection"
          ],
          explain: "The fear system's alarm feeds into the attachment system, producing proximity-seeking toward the protective caregiver."
        },
        {
          type: "truefalse",
          q: "The fear and wariness system and the attachment system are the very same behavioral system with no distinction.",
          answer: false,
          explain: "Bowlby treated fear and wariness and attachment as distinct but interacting systems; fear activates, but is not identical to, attachment."
        }
      ]
    }
  ]
});
