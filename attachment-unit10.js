window.ACADEMY.addUnit("attachment", {
  id: "unit-10",
  title: "The ABC Attachment Classifications",
  color: "#e0518a",
  icon: "🔤",
  description: "This unit defines the three organized infant attachment patterns from Ainsworth's Strange Situation and the behavioral signatures and caregiving that shape each one.",
  lessons: [
    {
      id: "l73",
      title: "Secure Attachment B",
      intro: "The securely attached (Group B) infant protests separation yet is readily comforted and recovers at reunion.",
      questions: [
        {
          type: "mcq",
          q: "In Ainsworth's Strange Situation, how does a securely attached (Group B) infant typically respond when the caregiver returns?",
          choices: [
            "Ignores the caregiver and keeps playing with toys",
            "Shows fear and freezing with no clear plan",
            "Actively seeks contact or interaction, is comforted, and returns to play",
            "Cries but stiffens and arches away when picked up"
          ],
          answer: 2,
          explain: "The secure signature at reunion is active greeting or contact-seeking followed by easy comforting and a return to exploration."
        },
        {
          type: "truefalse",
          q: "A securely attached infant uses the caregiver as a secure base from which to explore the room.",
          answer: true,
          explain: "Secure infants venture out to explore, checking back to the caregiver, who functions as a secure base."
        },
        {
          type: "fill",
          q: "A securely attached infant is usually distressed when the caregiver leaves but is readily ____ at reunion, then goes back to exploring.",
          answer: "soothed",
          accept: ["soothed", "comforted", "calmed", "settled"],
          explain: "The hallmark of security is effective recovery: the infant is quickly soothed and resumes play."
        },
        {
          type: "match",
          q: "Match each Strange Situation moment to the secure infant's typical response.",
          pairs: [
            ["Caregiver present, novel room", "Explores toys while checking back to the caregiver"],
            ["Caregiver leaves", "Shows distress or a drop in play"],
            ["Caregiver returns", "Greets, seeks comfort, and is soothed"]
          ],
          explain: "Secure infants explore from a base, protest departure, and reconnect and recover at reunion."
        },
        {
          type: "order",
          q: "Put a secure infant's behavior across the Strange Situation in the order it unfolds.",
          items: [
            "Explores using the caregiver as a secure base",
            "Becomes distressed when the caregiver departs",
            "Seeks and receives comfort at reunion",
            "Settles and returns to play"
          ],
          explain: "Exploration, separation distress, comfort-seeking at reunion, and recovery define the organized secure sequence."
        },
        {
          type: "mcq",
          q: "What does the secure infant's easy recovery at reunion most suggest about the caregiver?",
          choices: [
            "The caregiver has discouraged all crying",
            "The caregiver is a reliable, effective source of comfort",
            "The caregiver frightens the infant",
            "The caregiver responds only unpredictably"
          ],
          answer: 1,
          explain: "Ready comforting reflects an expectation, built from experience, that the caregiver reliably relieves distress."
        },
        {
          type: "truefalse",
          q: "Secure infants never show any distress when separated from the caregiver.",
          answer: false,
          explain: "Secure infants typically do show distress at separation; what defines security is the recovery at reunion, not the absence of distress."
        }
      ]
    },
    {
      id: "l74",
      title: "Subgroups of Secure",
      intro: "Ainsworth divided the secure category into four subgroups, B1 through B4, spanning a continuum from near-avoidant to near-resistant.",
      questions: [
        {
          type: "mcq",
          q: "How many subgroups make up the secure (B) classification in Ainsworth's system?",
          choices: [
            "Two (B1 and B2)",
            "Three (B1, B2, B3)",
            "Four (B1, B2, B3, B4)",
            "Five (B1 through B5)"
          ],
          answer: 2,
          explain: "Ainsworth described four secure subgroups, B1 through B4, forming a graded continuum within security."
        },
        {
          type: "truefalse",
          q: "B3 is often regarded as the prototypical or most securely attached subgroup.",
          answer: true,
          explain: "B3 infants show the clearest balance of exploration, separation distress, and easy comforting, making them the secure prototype."
        },
        {
          type: "mcq",
          q: "Which secure subgroups sit closest to the avoidant (A) end of the continuum?",
          choices: [
            "B3 and B4",
            "B1 and B2",
            "Only B4",
            "All four are equidistant"
          ],
          answer: 1,
          explain: "B1 and B2 greet more from a distance and are placed nearest the avoidant end of the secure range."
        },
        {
          type: "truefalse",
          q: "The B4 subgroup shows somewhat more distress and preoccupation with the caregiver, sitting nearer the resistant (C) end.",
          answer: true,
          explain: "B4 infants are still secure but more distressed and contact-maintaining, placing them toward the resistant border."
        },
        {
          type: "fill",
          q: "On reunion, B1 and B2 infants tend to greet more from a ____, with looking and interaction, rather than by seeking close physical contact.",
          answer: "distance",
          accept: ["distance", "distal", "afar"],
          explain: "Distal greeting (across the room) rather than close bodily contact leans B1 and B2 toward the avoidant end while staying secure."
        },
        {
          type: "order",
          q: "Order the secure subgroups from the near-avoidant end to the near-resistant end of the continuum.",
          items: ["B1", "B2", "B3", "B4"],
          explain: "The B subgroups run B1 to B4, from most avoidant-leaning to most resistant-leaning, with B3 as the balanced center."
        },
        {
          type: "match",
          q: "Match each secure subgroup to its brief characterization.",
          pairs: [
            ["B1", "Secure but greets more at a distance, near the avoidant end"],
            ["B3", "Prototypically secure: seeks contact and is readily comforted"],
            ["B4", "Secure but more distressed and preoccupied, near the resistant end"]
          ],
          explain: "The subgroups vary in how distress and contact are expressed while all remain organized and secure."
        }
      ]
    },
    {
      id: "l75",
      title: "Insecure-Avoidant A",
      intro: "The avoidant (Group A) infant minimizes overt distress and turns away from the caregiver at reunion.",
      questions: [
        {
          type: "mcq",
          q: "What is the defining behavior of a Group A (avoidant) infant at reunion?",
          choices: [
            "Crying and clinging while resisting comfort",
            "Being easily soothed and returning to play",
            "Freezing with a dazed expression",
            "Actively avoiding or ignoring the caregiver"
          ],
          answer: 3,
          explain: "Avoidant infants conspicuously turn, look, or move away from the caregiver rather than seeking contact at reunion."
        },
        {
          type: "truefalse",
          q: "Avoidant infants typically show little overt distress when the caregiver leaves the room.",
          answer: true,
          explain: "A muted or absent reaction to separation is a defining feature of the avoidant pattern."
        },
        {
          type: "truefalse",
          q: "Despite appearing calm, avoidant infants often show physiological signs of stress such as elevated heart rate.",
          answer: true,
          explain: "Sroufe and Waters (1977) found avoidant infants had elevated heart rate; their calm is behavioral, not physiological."
        },
        {
          type: "fill",
          q: "At reunion, the avoidant infant tends to keep attention on ____ rather than on the returning caregiver.",
          answer: "toys",
          accept: ["toys", "the toys", "objects", "play"],
          explain: "Redirecting attention to toys and the environment lets the avoidant infant look away from the caregiver."
        },
        {
          type: "match",
          q: "Match each Strange Situation moment to the avoidant infant's typical response.",
          pairs: [
            ["Separation", "Minimal crying, continues playing"],
            ["Reunion", "Turns or moves away, avoids gaze and contact"],
            ["Attention focus", "Toys and environment, not the caregiver"]
          ],
          explain: "The avoidant pattern minimizes both separation distress and reunion contact, keeping focus on objects."
        },
        {
          type: "order",
          q: "Order the avoidant infant's behavior across the Strange Situation.",
          items: [
            "Explores toys with little reference to the caregiver",
            "Shows little distress when the caregiver leaves",
            "Avoids or ignores the caregiver at reunion"
          ],
          explain: "Low reference to the caregiver, muted separation distress, and reunion avoidance define the organized avoidant sequence."
        },
        {
          type: "mcq",
          q: "The avoidant pattern belongs to which overall attachment category?",
          choices: [
            "Secure",
            "Insecure-avoidant",
            "Insecure-resistant",
            "Disorganized"
          ],
          answer: 1,
          explain: "Group A is the insecure-avoidant category, one of the two organized insecure patterns."
        }
      ]
    },
    {
      id: "l76",
      title: "The Avoidant Strategy",
      intro: "Avoidance is a deactivating strategy: the infant down-regulates attachment displays to stay near a rejecting caregiver.",
      questions: [
        {
          type: "mcq",
          q: "The avoidant infant's minimizing behavior is best described as a ____ strategy.",
          choices: [
            "Hyperactivating",
            "Deactivating",
            "Disorganized",
            "Secure-base"
          ],
          answer: 1,
          explain: "Avoidance deactivates, or down-regulates, the display of the attachment system to manage a rejecting caregiver."
        },
        {
          type: "truefalse",
          q: "A deactivating strategy down-regulates the outward display of attachment behavior.",
          answer: true,
          explain: "Deactivation suppresses signals like crying and contact-seeking so the infant does not press bids the caregiver rebuffs."
        },
        {
          type: "mcq",
          q: "Why might suppressing distress be adaptive with a caregiver who is uncomfortable with closeness?",
          choices: [
            "It provokes the caregiver into more rejection",
            "It permanently eliminates the infant's attachment needs",
            "It maintains proximity without triggering further rejection",
            "It makes the caregiver more anxious and clingy"
          ],
          answer: 2,
          explain: "By not pressing bids that get rebuffed, the infant stays near the caregiver without provoking more rejection."
        },
        {
          type: "fill",
          q: "By muting bids for comfort, the avoidant infant avoids further ____ from a caregiver who is uncomfortable with closeness.",
          answer: "rejection",
          accept: ["rejection", "rebuff", "rebuffs", "rebuffing"],
          explain: "Suppressing attachment displays lowers the risk of another rejection from an averse caregiver."
        },
        {
          type: "truefalse",
          q: "Deactivation means the infant no longer needs or is affected by the caregiver at all.",
          answer: false,
          explain: "The attachment need remains, as physiological arousal shows; deactivation suppresses only its expression."
        },
        {
          type: "order",
          q: "Order the logic of the deactivating (avoidant) strategy.",
          items: [
            "Caregiver rejects or rebuffs bids for closeness",
            "Infant learns that showing distress risks more rejection",
            "Infant minimizes attachment displays",
            "Proximity is preserved without provoking the caregiver"
          ],
          explain: "Repeated rejection teaches the infant to suppress displays, which keeps the caregiver near without further rebuff."
        },
        {
          type: "match",
          q: "Match each element of the avoidant strategy to its description.",
          pairs: [
            ["Deactivating strategy", "Suppress the display of attachment"],
            ["Function", "Keep proximity to a rejecting caregiver"],
            ["Underlying state", "Distress remains but is hidden"]
          ],
          explain: "Avoidance hides distress to preserve proximity while the underlying need persists."
        }
      ]
    },
    {
      id: "l77",
      title: "Insecure-Resistant C",
      intro: "The resistant (Group C) infant is intensely distressed and, at reunion, seeks yet resists comfort and cannot settle.",
      questions: [
        {
          type: "mcq",
          q: "Group C (resistant, or ambivalent) infants are best characterized at reunion by:",
          choices: [
            "Ignoring the caregiver and playing",
            "Seeking contact but resisting it, unable to settle",
            "Quickly calming and returning to exploration",
            "Approaching with a bright, easy greeting"
          ],
          answer: 1,
          explain: "The resistant signature is conflicted reunion behavior: wanting contact yet resisting it, with no effective settling."
        },
        {
          type: "truefalse",
          q: "Resistant infants are often intensely distressed by separation and hard to console at reunion.",
          answer: true,
          explain: "Heightened distress and difficulty being consoled are defining features of the resistant pattern."
        },
        {
          type: "fill",
          q: "The resistant infant may seek contact and at the same time show ____, such as pushing away or arching, at reunion.",
          answer: "anger",
          accept: ["anger", "angry resistance", "resistance", "angry"],
          explain: "Mixing contact-seeking with angry resistance (pushing, arching) is the core ambivalence of Group C."
        },
        {
          type: "truefalse",
          q: "Resistant infants readily return to exploring the toys once the caregiver comes back.",
          answer: false,
          explain: "Resistant infants cannot settle at reunion, so exploration stays impaired rather than resuming."
        },
        {
          type: "match",
          q: "Match each Strange Situation moment to the resistant infant's typical response.",
          pairs: [
            ["Before separation", "Often wary, low exploration, clingy"],
            ["Separation", "Intense distress"],
            ["Reunion", "Seeks contact yet resists it and cannot settle"]
          ],
          explain: "Resistant infants show pre-separation wariness, strong protest, and unsettled, conflicted reunions."
        },
        {
          type: "order",
          q: "Order the resistant infant's behavior across the Strange Situation.",
          items: [
            "Shows heightened distress at separation",
            "Seeks the caregiver at reunion",
            "Resists comfort with anger or passivity",
            "Fails to settle and resume play"
          ],
          explain: "Intense protest, contact-seeking, resistance to comfort, and failure to settle define the organized resistant sequence."
        },
        {
          type: "mcq",
          q: "The resistant pattern is also commonly labeled:",
          choices: [
            "Disorganized",
            "Avoidant",
            "Secure",
            "Ambivalent"
          ],
          answer: 3,
          explain: "Group C is often called resistant or ambivalent, reflecting the simultaneous wish for and resistance to contact."
        }
      ]
    },
    {
      id: "l78",
      title: "The Resistant Strategy",
      intro: "Resistance is a hyperactivating strategy: the infant amplifies distress to compel a response from an inconsistent caregiver.",
      questions: [
        {
          type: "mcq",
          q: "The resistant infant's amplified, hard-to-settle distress is best described as a ____ strategy.",
          choices: [
            "Deactivating",
            "Hyperactivating",
            "Disorganized",
            "Avoidant"
          ],
          answer: 1,
          explain: "Resistance hyperactivates, or up-regulates, the attachment system to maximize the caregiver's attention."
        },
        {
          type: "truefalse",
          q: "A hyperactivating strategy up-regulates and exaggerates attachment behavior.",
          answer: true,
          explain: "Hyperactivation amplifies crying, clinging, and protest so the caregiver is more likely to respond."
        },
        {
          type: "mcq",
          q: "Hyperactivation is an adaptation to which kind of caregiving?",
          choices: [
            "Consistently rejecting caregiving",
            "Sensitive, reliably responsive caregiving",
            "Inconsistent, unpredictable caregiving",
            "Frightening or frightened caregiving"
          ],
          answer: 2,
          explain: "When responsiveness is unpredictable, escalating distress raises the odds of finally eliciting a response."
        },
        {
          type: "fill",
          q: "By escalating distress and clinging, the infant tries to ____ a response from an unreliable caregiver.",
          answer: "compel",
          accept: ["compel", "force", "extract", "demand", "elicit"],
          explain: "Amplified displays aim to compel or extract the caregiving that comes only inconsistently."
        },
        {
          type: "truefalse",
          q: "Difficulty settling at reunion helps the resistant infant keep the caregiver's attention engaged.",
          answer: true,
          explain: "Prolonged, unsettled distress maintains the caregiver's focus, consistent with a hyperactivating aim."
        },
        {
          type: "order",
          q: "Order the logic of the hyperactivating (resistant) strategy.",
          items: [
            "Caregiver responds inconsistently",
            "Infant cannot predict when comfort will come",
            "Infant amplifies distress and clinging",
            "This maximizes the chance of eliciting a response"
          ],
          explain: "Unpredictable care teaches the infant to escalate displays to improve the odds of a response."
        },
        {
          type: "match",
          q: "Match each element of the resistant strategy to its description.",
          pairs: [
            ["Hyperactivating strategy", "Amplify the display of attachment"],
            ["Caregiving trigger", "Inconsistent responsiveness"],
            ["Goal", "Compel the caregiver to respond"]
          ],
          explain: "Resistance up-regulates attachment displays to pull a response from an unreliable caregiver."
        }
      ]
    },
    {
      id: "l79",
      title: "Caregiving Antecedents of ABC",
      intro: "Ainsworth linked each attachment pattern to a distinct caregiving style: sensitivity, rejection, or inconsistency.",
      questions: [
        {
          type: "match",
          q: "Match each attachment pattern to the caregiving style Ainsworth associated with it.",
          pairs: [
            ["Secure (B)", "Sensitive, responsive caregiving"],
            ["Avoidant (A)", "Rejecting, especially of closeness"],
            ["Resistant (C)", "Inconsistent, unpredictable caregiving"]
          ],
          explain: "Secure links to sensitivity, avoidant to rejection of contact, and resistant to inconsistent responsiveness."
        },
        {
          type: "mcq",
          q: "Ainsworth linked secure attachment most strongly to maternal:",
          choices: [
            "Rejection",
            "Sensitivity",
            "Inconsistency",
            "Intrusiveness"
          ],
          answer: 1,
          explain: "Ainsworth's central finding tied security to maternal sensitivity: accurate reading of and prompt response to the infant's signals."
        },
        {
          type: "truefalse",
          q: "Avoidant attachment is associated with caregivers who tend to rebuff bids for physical contact and comfort.",
          answer: true,
          explain: "Rejection of closeness, especially of physical contact, is the caregiving pattern linked to avoidance."
        },
        {
          type: "fill",
          q: "Resistant attachment is associated with caregiving that is ____, sometimes responsive and sometimes not.",
          answer: "inconsistent",
          accept: ["inconsistent", "unpredictable", "erratic"],
          explain: "Unpredictable, inconsistent availability is the caregiving antecedent tied to the resistant pattern."
        },
        {
          type: "truefalse",
          q: "Sensitive caregiving means responding perfectly to the infant every single time, with no misattunement.",
          answer: false,
          explain: "Sensitivity is reading and responding appropriately much of the time and repairing missteps, not flawless perfection."
        },
        {
          type: "mcq",
          q: "A caregiver who is consistently uncomfortable with closeness and discourages crying is most likely to foster which pattern?",
          choices: [
            "Secure (B)",
            "Resistant (C)",
            "Avoidant (A)",
            "No pattern at all"
          ],
          answer: 2,
          explain: "Consistent discomfort with closeness pushes the infant to suppress bids, the route to avoidant attachment."
        },
        {
          type: "order",
          q: "Order these caregiving styles from most to least reliably responsive.",
          items: [
            "Sensitive and consistently responsive (secure)",
            "Inconsistently responsive (resistant)",
            "Consistently rejecting of closeness (avoidant)"
          ],
          explain: "Sensitive care is most reliable, inconsistent care is partly responsive, and rejecting care most reliably turns bids away."
        }
      ]
    },
    {
      id: "l80",
      title: "Organized Strategies Concept",
      intro: "Secure, avoidant, and resistant are all organized strategies: coherent, predictable adaptations to the caregiving the infant has met.",
      questions: [
        {
          type: "mcq",
          q: "What do the A, B, and C patterns have in common?",
          choices: [
            "Each is a coherent, organized strategy for managing the attachment relationship",
            "They all reflect secure attachment",
            "They all show a breakdown of any strategy",
            "They are unrelated to the caregiving experienced"
          ],
          answer: 0,
          explain: "All three ABC patterns are organized: consistent, patterned solutions fitted to the caregiver's behavior."
        },
        {
          type: "truefalse",
          q: "Even though A and C are insecure, they are still considered organized strategies.",
          answer: true,
          explain: "Avoidant and resistant infants use coherent, predictable strategies; insecurity does not mean disorganization."
        },
        {
          type: "mcq",
          q: "Which classification lacks a coherent, organized strategy and was added later by Main and Solomon?",
          choices: [
            "Secure (B)",
            "Avoidant (A)",
            "Resistant (C)",
            "Disorganized (D)"
          ],
          answer: 3,
          explain: "Main and Solomon (1986/1990) added disorganized (D) for infants who show contradictory, disoriented behavior with no single strategy."
        },
        {
          type: "fill",
          q: "Each ABC pattern represents the infant's best ____ to the particular caregiving it has experienced.",
          answer: "adaptation",
          accept: ["adaptation", "adjustment", "solution", "response"],
          explain: "Each organized pattern is an adaptive fit to a specific caregiving environment rather than a flaw in the infant."
        },
        {
          type: "truefalse",
          q: "An organized strategy means the infant's behavior is predictable and patterned rather than contradictory and disoriented.",
          answer: true,
          explain: "Organization refers to a consistent, coherent approach to the caregiver, unlike the contradictory behavior seen in disorganization."
        },
        {
          type: "order",
          q: "Order the three organized strategies along the dimension from most minimizing to most amplifying of attachment.",
          items: [
            "Avoidant (A): deactivating",
            "Secure (B): flexible and balanced",
            "Resistant (C): hyperactivating"
          ],
          explain: "Avoidance minimizes attachment displays, secure is balanced in the middle, and resistance maximizes them."
        },
        {
          type: "match",
          q: "Match each pattern to its organizational description.",
          pairs: [
            ["Secure (B)", "Organized: flexible use of the caregiver"],
            ["Avoidant (A)", "Organized: consistently minimizes attachment"],
            ["Resistant (C)", "Organized: consistently maximizes attachment"],
            ["Disorganized (D)", "Lacks a coherent strategy"]
          ],
          explain: "B, A, and C are all coherent strategies; only D marks the collapse of an organized approach."
        }
      ]
    }
  ]
});
