window.ACADEMY.addUnit("attachment", {
  id: "unit-2",
  title: "Evolutionary and Ethological Foundations",
  color: "#e0518a",
  icon: "🧬",
  description: "Explores the biological and evolutionary logic that frames attachment as an adaptive system, drawing on ethology and the classic animal studies of Lorenz, Tinbergen, and Harlow.",
  lessons: [
    {
      id: "l9",
      title: "Environment of Evolutionary Adaptedness",
      intro: "The environment of evolutionary adaptedness (EEA) is the ancestral setting whose dangers shaped the attachment system into an adaptation.",
      questions: [
        {
          type: "mcq",
          q: "Who brought the concept of the environment of evolutionary adaptedness into attachment theory?",
          choices: [
            "Konrad Lorenz",
            "John Bowlby",
            "Harry Harlow",
            "Mary Ainsworth"
          ],
          answer: 1,
          explain: "John Bowlby drew on the idea of the EEA to argue that attachment evolved to fit the conditions of ancestral human life."
        },
        {
          type: "truefalse",
          q: "The EEA refers to the modern, urban environment in which children are raised today.",
          answer: false,
          explain: "The EEA is the ancestral environment of adaptation, not the present-day world; evolved traits may be mismatched to modern settings."
        },
        {
          type: "fill",
          q: "In the EEA, the constant threat of ____ is thought to have made staying close to a caregiver highly adaptive.",
          answer: "predation",
          accept: ["predation", "predators", "predator"],
          explain: "Protection from predators was a major selection pressure favoring infants who stayed near protective adults."
        },
        {
          type: "mcq",
          q: "For humans, the EEA is usually described as which kind of setting?",
          choices: [
            "Industrial cities",
            "Agricultural villages",
            "Small hunter-gatherer groups",
            "Seafaring colonies"
          ],
          answer: 2,
          explain: "The human EEA is typically characterized as the small, nomadic hunter-gatherer bands of the Pleistocene."
        },
        {
          type: "truefalse",
          q: "A behavior that was adaptive in the EEA may no longer be perfectly suited to the modern environment.",
          answer: true,
          explain: "Adaptations are shaped by past environments, so a mismatch with today's conditions is entirely possible."
        },
        {
          type: "match",
          q: "Match each idea to its meaning.",
          pairs: [
            ["EEA", "Ancestral environment that shaped an adaptation"],
            ["Adaptation", "Trait favored because it aided survival or reproduction"],
            ["Selection pressure", "Environmental demand that drives evolutionary change"]
          ],
          explain: "The EEA is the setting, adaptations are the traits it favored, and selection pressures are the demands driving the process."
        },
        {
          type: "order",
          q: "Order these human settings from most ancestral to present day.",
          items: [
            "Pleistocene hunter-gatherer bands",
            "Early agricultural villages",
            "Modern industrial cities"
          ],
          explain: "Human attachment evolved in Pleistocene foraging groups, long before agriculture and modern cities existed."
        }
      ]
    },
    {
      id: "l10",
      title: "Attachment as Survival Mechanism",
      intro: "Bowlby argued that attachment behaviors persist because they kept vulnerable infants close to protectors and safe from danger.",
      questions: [
        {
          type: "mcq",
          q: "According to Bowlby, what is the primary biological function of the attachment system?",
          choices: [
            "Teaching language",
            "Protection from predators and danger",
            "Providing nutrition",
            "Encouraging solitary play"
          ],
          answer: 1,
          explain: "Bowlby held that attachment evolved chiefly to keep infants safe by maintaining protective proximity to a caregiver."
        },
        {
          type: "truefalse",
          q: "Crying, clinging, and following are attachment behaviors that reduce the distance between infant and caregiver.",
          answer: true,
          explain: "These signaling and approach behaviors all work to restore or maintain proximity to the caregiver."
        },
        {
          type: "fill",
          q: "Attachment behaviors increase an infant's chances of ____ by keeping a protective adult nearby.",
          answer: "survival",
          accept: ["survival", "surviving", "staying alive"],
          explain: "Proximity to a caregiver shields the infant from threats, raising the odds of survival."
        },
        {
          type: "match",
          q: "Match each attachment behavior to how it maintains proximity.",
          pairs: [
            ["Crying", "Signals distress to bring the caregiver closer"],
            ["Following", "Moves the infant toward the caregiver"],
            ["Clinging", "Holds on to keep contact once close"]
          ],
          explain: "Signaling, approach, and contact behaviors all serve the shared goal of proximity to a protector."
        },
        {
          type: "mcq",
          q: "Which situation is MOST likely to activate an infant's attachment behaviors?",
          choices: [
            "A calm, familiar room",
            "A frightening or dangerous event",
            "A full stomach after feeding",
            "A long, restful nap"
          ],
          answer: 1,
          explain: "The attachment system is triggered by threat, fear, or separation, prompting the infant to seek the caregiver."
        },
        {
          type: "truefalse",
          q: "Bowlby believed attachment behaviors are random and provide no survival advantage.",
          answer: false,
          explain: "He argued the opposite: attachment behaviors are organized and adaptive, favoring infant survival."
        },
        {
          type: "order",
          q: "Order the sequence by which attachment protects an infant from a threat.",
          items: [
            "Infant senses a threat",
            "Infant cries and reaches for the caregiver",
            "Caregiver moves close and protects the infant"
          ],
          explain: "Threat activates attachment behavior, which draws the protector near, shielding the infant from harm."
        }
      ]
    },
    {
      id: "l11",
      title: "Lorenz and Imprinting",
      intro: "Konrad Lorenz showed that newly hatched precocial birds imprint on and follow the first moving object they encounter.",
      questions: [
        {
          type: "mcq",
          q: "Which scientist is best known for studying imprinting in greylag geese?",
          choices: [
            "Konrad Lorenz",
            "Harry Harlow",
            "John Bowlby",
            "Niko Tinbergen"
          ],
          answer: 0,
          explain: "Konrad Lorenz, an Austrian ethologist, famously demonstrated imprinting in greylag geese."
        },
        {
          type: "truefalse",
          q: "In Lorenz's studies, goslings imprinted on Lorenz himself and followed him as if he were their mother.",
          answer: true,
          explain: "Goslings that first saw Lorenz followed him, showing they had imprinted on the first moving object they encountered."
        },
        {
          type: "fill",
          q: "Imprinting is typically studied in ____ birds, which can walk and follow shortly after hatching.",
          answer: "precocial",
          accept: ["precocial"],
          explain: "Precocial birds such as geese and ducks are mobile soon after hatching, which makes following possible."
        },
        {
          type: "mcq",
          q: "In imprinting, what does the young bird typically follow?",
          choices: [
            "The largest object nearby",
            "The first moving object it sees",
            "The warmest object nearby",
            "The object that feeds it"
          ],
          answer: 1,
          explain: "Imprinting causes the hatchling to follow the first moving object it perceives, which is usually its mother."
        },
        {
          type: "match",
          q: "Match each term to its description.",
          pairs: [
            ["Imprinting", "Rapid early attachment to a moving object"],
            ["Precocial", "Able to move and follow soon after hatching"],
            ["Greylag goose", "Species Lorenz used to study imprinting"]
          ],
          explain: "Lorenz studied imprinting, a fast early bond, in precocial greylag geese."
        },
        {
          type: "truefalse",
          q: "Lorenz shared a Nobel Prize in 1973 for his contributions to ethology.",
          answer: true,
          explain: "Lorenz shared the 1973 Nobel Prize in Physiology or Medicine with Niko Tinbergen and Karl von Frisch."
        },
        {
          type: "mcq",
          q: "Why is imprinting considered relevant to attachment theory?",
          choices: [
            "It shows early bonds can form without any feeding",
            "It proves birds cannot form bonds at all",
            "It proves feeding is the cause of every bond",
            "It shows imprinting lasts only a few minutes"
          ],
          answer: 0,
          explain: "Because goslings imprint on a non-feeding moving object, imprinting suggests early bonds need not depend on being fed."
        }
      ]
    },
    {
      id: "l12",
      title: "Critical and Sensitive Periods",
      intro: "Bonds like imprinting form best within limited time windows, described as rigid critical periods or the more flexible sensitive periods.",
      questions: [
        {
          type: "mcq",
          q: "What best describes a critical period?",
          choices: [
            "A window in which learning is completely impossible",
            "A fixed window during which a bond must form or it may never form",
            "A period that begins only in adulthood",
            "A window that has no time limit at all"
          ],
          answer: 1,
          explain: "A critical period is a rigid, time-limited window during which a specific bond or ability must develop."
        },
        {
          type: "truefalse",
          q: "A sensitive period is more flexible than a critical period, allowing bonding to still occur later, though less easily.",
          answer: true,
          explain: "Sensitive periods are optimal but not strictly closed windows, unlike rigid critical periods."
        },
        {
          type: "fill",
          q: "Lorenz found that imprinting in geese must occur within a ____ period of roughly the first day after hatching.",
          answer: "critical",
          accept: ["critical"],
          explain: "Lorenz described imprinting as bound to a critical period during the first hours after hatching."
        },
        {
          type: "match",
          q: "Match each term to its key feature.",
          pairs: [
            ["Critical period", "Rigid window; the opportunity is largely lost if missed"],
            ["Sensitive period", "Optimal but flexible window for learning"],
            ["Imprinting", "Bird behavior tied to an early critical period"]
          ],
          explain: "Critical periods are rigid, sensitive periods are flexible, and imprinting illustrates a critical window."
        },
        {
          type: "mcq",
          q: "Why do many theorists prefer 'sensitive period' over 'critical period' for human attachment?",
          choices: [
            "Human attachment cannot form at all",
            "Humans imprint in exactly the same way as geese",
            "Human attachments can still form beyond the ideal window",
            "Humans have no early bonding window whatsoever"
          ],
          answer: 2,
          explain: "Human attachment is more flexible than bird imprinting, so a sensitive window fits the evidence better than a rigid one."
        },
        {
          type: "truefalse",
          q: "If a critical period is missed, the associated bond or ability can always be fully acquired later with no difficulty.",
          answer: false,
          explain: "By definition, missing a critical period means the outcome may be impossible or greatly impaired afterward."
        },
        {
          type: "order",
          q: "Order these bonding windows from most rigid to most flexible.",
          items: [
            "Critical period",
            "Sensitive period",
            "Lifelong learning"
          ],
          explain: "Critical periods are the most rigid, sensitive periods more flexible, and general learning the most open-ended."
        }
      ]
    },
    {
      id: "l13",
      title: "Tinbergen's Four Questions",
      intro: "Niko Tinbergen proposed four complementary questions for fully explaining any behavior, including attachment.",
      questions: [
        {
          type: "mcq",
          q: "Who proposed the four questions for analyzing animal behavior?",
          choices: [
            "Niko Tinbergen",
            "Konrad Lorenz",
            "Harry Harlow",
            "Mary Ainsworth"
          ],
          answer: 0,
          explain: "Niko Tinbergen set out four levels of explanation in his 1963 paper on the aims and methods of ethology."
        },
        {
          type: "truefalse",
          q: "Tinbergen's four questions divide into proximate (immediate) and ultimate (evolutionary) explanations.",
          answer: true,
          explain: "Causation and development are proximate questions; function and evolution are ultimate questions."
        },
        {
          type: "match",
          q: "Match each of Tinbergen's four questions to its focus.",
          pairs: [
            ["Causation", "Immediate mechanism triggering the behavior"],
            ["Development", "How the behavior arises over the lifespan"],
            ["Function", "Survival or adaptive value of the behavior"],
            ["Evolution", "Phylogenetic history across the species"]
          ],
          explain: "The four questions cover mechanism, ontogeny, adaptive value, and evolutionary history."
        },
        {
          type: "mcq",
          q: "Asking 'how does a behavior increase survival and reproduction' addresses which of Tinbergen's questions?",
          choices: [
            "Causation",
            "Development",
            "Function",
            "Evolution"
          ],
          answer: 2,
          explain: "The function question concerns the adaptive value, or survival value, of a behavior."
        },
        {
          type: "fill",
          q: "Questions about immediate mechanism and about development are together called ____ explanations.",
          answer: "proximate",
          accept: ["proximate"],
          explain: "Causation and development are proximate explanations, addressing how a behavior works and how it develops."
        },
        {
          type: "truefalse",
          q: "The evolution question asks about the phylogenetic history of a behavior across a species' ancestry.",
          answer: true,
          explain: "The evolution, or phylogeny, question traces how a behavior arose over evolutionary time."
        },
        {
          type: "order",
          q: "List Tinbergen's four questions with the two proximate ones before the two ultimate ones.",
          items: [
            "Causation",
            "Development",
            "Function",
            "Evolution"
          ],
          explain: "Causation and development are the proximate questions; function and evolution are the ultimate questions."
        }
      ]
    },
    {
      id: "l14",
      title: "Harlow's Contact Comfort",
      intro: "Harry Harlow's surrogate-mother experiments showed that infant monkeys prefer soft contact comfort over the wire mother that fed them.",
      questions: [
        {
          type: "mcq",
          q: "In Harlow's classic experiments, which animals were raised with surrogate mothers?",
          choices: [
            "Rhesus monkeys",
            "Greylag geese",
            "Laboratory rats",
            "Chimpanzees"
          ],
          answer: 0,
          explain: "Harlow studied infant rhesus monkeys that were separated from their mothers and given surrogate mothers."
        },
        {
          type: "mcq",
          q: "Harlow offered infant monkeys two surrogate mothers. What were they made of?",
          choices: [
            "Two cloth mothers",
            "One cloth mother and one wire mother",
            "Two bare wire mothers",
            "One plastic and one glass mother"
          ],
          answer: 1,
          explain: "One surrogate was bare wire and the other was covered in soft terry cloth."
        },
        {
          type: "truefalse",
          q: "In the key comparison, it was the wire mother, not the cloth mother, that was fitted with a feeding bottle.",
          answer: true,
          explain: "In the crucial condition the wire mother provided the milk, yet monkeys still preferred the cloth mother."
        },
        {
          type: "fill",
          q: "Harlow used the term contact ____ to describe the soothing value of soft physical touch.",
          answer: "comfort",
          accept: ["comfort"],
          explain: "Contact comfort refers to the comfort derived from soft physical contact, independent of feeding."
        },
        {
          type: "mcq",
          q: "Even when the wire mother provided all the food, where did the infant monkeys spend most of their time?",
          choices: [
            "On the wire mother",
            "Equally divided between both",
            "On the cloth mother",
            "Away from both mothers"
          ],
          answer: 2,
          explain: "Monkeys clung to the soft cloth mother most of the time, going to the wire mother only briefly to feed."
        },
        {
          type: "truefalse",
          q: "Harlow's results supported the idea that attachment forms mainly because the mother provides food.",
          answer: false,
          explain: "The results undercut that idea: monkeys bonded to the cloth mother that gave comfort, not to the one that fed them."
        },
        {
          type: "match",
          q: "Match each surrogate or term to what it offered.",
          pairs: [
            ["Wire mother", "Milk from a bottle but no soft contact"],
            ["Cloth mother", "Soft contact comfort but no food"],
            ["Contact comfort", "The soothing value of soft physical touch"]
          ],
          explain: "The wire mother fed, the cloth mother comforted, and monkeys clearly preferred the contact comfort."
        }
      ]
    },
    {
      id: "l15",
      title: "Harlow's Secure Base Finding",
      intro: "Harlow found that frightened infant monkeys clung to the cloth mother and then used her as a secure base from which to explore.",
      questions: [
        {
          type: "mcq",
          q: "When Harlow's infant monkeys were frightened by a novel or scary object, what did they do?",
          choices: [
            "Ran to the wire mother",
            "Ran to the cloth mother and clung to her",
            "Froze and did nothing",
            "Attacked the object immediately"
          ],
          answer: 1,
          explain: "Frightened monkeys rushed to the soft cloth mother and clung to her for comfort."
        },
        {
          type: "truefalse",
          q: "After calming on the cloth mother, monkeys would venture out to explore the frightening object.",
          answer: true,
          explain: "Once reassured, monkeys used the cloth mother as a base and explored, which is secure-base behavior."
        },
        {
          type: "fill",
          q: "The cloth mother acted as a ____ base from which the infant monkey could explore its surroundings.",
          answer: "secure",
          accept: ["secure", "safe"],
          explain: "A secure base provides reassurance that supports confident exploration of the environment."
        },
        {
          type: "mcq",
          q: "In an unfamiliar room, monkeys with access to the cloth mother tended to:",
          choices: [
            "Refuse to move at all",
            "Explore more confidently",
            "Sit only on the wire mother",
            "Try to escape the room"
          ],
          answer: 1,
          explain: "With the cloth mother present as a secure base, monkeys explored the novel space more readily."
        },
        {
          type: "truefalse",
          q: "Monkeys placed in a strange room with only the wire mother explored just as calmly as those with the cloth mother.",
          answer: false,
          explain: "With only the wire mother, monkeys were distressed and explored little, unlike those with the cloth mother."
        },
        {
          type: "order",
          q: "Order the secure-base sequence Harlow observed when a monkey was frightened.",
          items: [
            "A frightening object appears",
            "The monkey runs to the cloth mother and clings",
            "The monkey calms down",
            "The monkey explores out from the cloth mother"
          ],
          explain: "Fear drives contact, contact restores calm, and calm then enables exploration from the secure base."
        },
        {
          type: "match",
          q: "Match each concept to Harlow's observation.",
          pairs: [
            ["Safe haven", "Monkey retreats to the cloth mother when afraid"],
            ["Secure base", "Monkey explores outward from the cloth mother"],
            ["Wire mother", "Fails to calm the frightened monkey"]
          ],
          explain: "The cloth mother served as both a safe haven in fear and a secure base for exploration."
        }
      ]
    },
    {
      id: "l16",
      title: "Instinct Versus Learned Feeding",
      intro: "Evidence from Harlow, Lorenz, and Schaffer refutes the cupboard-love theory that infants bond simply with whoever feeds them.",
      questions: [
        {
          type: "mcq",
          q: "The 'cupboard love' theory claims that an infant becomes attached to a caregiver mainly because the caregiver:",
          choices: [
            "Plays with the infant",
            "Provides food and satisfies hunger",
            "Talks to the infant",
            "Physically resembles the infant"
          ],
          answer: 1,
          explain: "Cupboard-love, or secondary-drive, theory says the bond forms because the caregiver reduces the infant's hunger."
        },
        {
          type: "truefalse",
          q: "The secondary-drive account treats attachment as learned through the association of the caregiver with feeding.",
          answer: true,
          explain: "In that view attachment is a secondary, learned drive built on top of the primary drive of hunger."
        },
        {
          type: "mcq",
          q: "Which finding most directly contradicts the cupboard-love theory?",
          choices: [
            "Monkeys preferred the feeding wire mother",
            "Monkeys preferred the non-feeding cloth mother",
            "Geese refused to imprint on anything",
            "Infants ignored all caregivers equally"
          ],
          answer: 1,
          explain: "Monkeys bonded to the comforting cloth mother despite being fed by the wire mother, contradicting cupboard love."
        },
        {
          type: "fill",
          q: "Bowlby argued that attachment is a primary, evolved ____ rather than a byproduct of feeding.",
          answer: "instinct",
          accept: ["instinct", "instinctual system", "behavioral system", "drive"],
          explain: "Bowlby saw attachment as an innate, primary behavioral system, not a learned consequence of being fed."
        },
        {
          type: "truefalse",
          q: "Lorenz's imprinting supports cupboard-love theory because goslings imprint only on whoever feeds them.",
          answer: false,
          explain: "Goslings imprinted on the first moving object regardless of feeding, which undercuts the cupboard-love idea."
        },
        {
          type: "match",
          q: "Match each study or thinker to its blow against cupboard-love theory.",
          pairs: [
            ["Harlow", "Monkeys chose comfort over the feeding surrogate"],
            ["Lorenz", "Birds imprinted without receiving any food"],
            ["Schaffer and Emerson", "Infants often bonded to non-feeding people"]
          ],
          explain: "All three lines of evidence show that attachment forms independently of who provides the food."
        },
        {
          type: "order",
          q: "Order the logic that refutes cupboard-love theory.",
          items: [
            "Cupboard love predicts babies bond with whoever feeds them",
            "Studies show bonds form with non-feeding figures",
            "Therefore feeding is not the basis of attachment"
          ],
          explain: "The prediction fails against the evidence, so feeding cannot be the foundation of attachment."
        }
      ]
    }
  ]
});
