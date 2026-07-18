window.ACADEMY.addUnit("attachment", {
  id: "unit-9",
  title: "The Strange Situation Procedure",
  color: "#e0518a",
  icon: "🚪",
  description: "This unit explains Ainsworth's laboratory paradigm for assessing the quality of infant attachment through a structured sequence of separations and reunions.",
  lessons: [
    {
      id: "l65",
      title: "Designing the Strange Situation",
      intro: "Ainsworth built a compact, standardized lab drama to make each infant's attachment behavior observable and comparable.",
      questions: [
        {
          type: "mcq",
          q: "The Strange Situation Procedure was developed by which researcher?",
          choices: ["John Bowlby", "Harry Harlow", "Mary Ainsworth", "Sigmund Freud"],
          answer: 2,
          explain: "Mary Ainsworth created the Strange Situation in the late 1960s to measure the quality of infant-caregiver attachment; Bowlby supplied the broader attachment theory it draws on."
        },
        {
          type: "truefalse",
          q: "The Strange Situation is a naturalistic observation carried out in the infant's own home.",
          answer: false,
          explain: "It is a controlled laboratory procedure staged in an unfamiliar room. Ainsworth's earlier Baltimore study used home visits, but the Strange Situation itself is a lab paradigm."
        },
        {
          type: "fill",
          q: "The Strange Situation is conducted in an unfamiliar ____ room stocked with toys.",
          answer: "laboratory",
          accept: ["laboratory", "lab"],
          explain: "The setting is a controlled lab playroom that is novel to the infant, which helps standardize the mild stress each baby experiences."
        },
        {
          type: "mcq",
          q: "What does the Strange Situation primarily measure?",
          choices: ["The infant's IQ", "The quality of the infant's attachment to a caregiver", "The caregiver's parenting knowledge", "The infant's language ability"],
          answer: 1,
          explain: "The procedure classifies the organization of an infant's attachment behavior toward a specific caregiver under conditions of mild stress."
        },
        {
          type: "match",
          q: "Match each design feature with what it means.",
          pairs: [
            ["Standardized", "Every infant goes through the same fixed sequence"],
            ["Structured", "Episodes follow a predetermined order and timing"],
            ["Miniature drama", "Escalating stressors are staged within about 20 minutes"]
          ],
          explain: "Ainsworth engineered a compact, repeatable 'drama' so infants' reactions could be compared on equal footing."
        },
        {
          type: "fill",
          q: "In total the standard procedure lasts roughly ____ minutes.",
          answer: "20",
          accept: ["20", "twenty", "about 20", "20 minutes"],
          explain: "The eight episodes together run about twenty minutes, with each episode capped at roughly three minutes."
        },
        {
          type: "truefalse",
          q: "Standardization means every infant experiences the same ordered sequence of events.",
          answer: true,
          explain: "Holding the situation constant lets researchers attribute differences in behavior to the infant's attachment pattern rather than to differing circumstances."
        }
      ]
    },
    {
      id: "l66",
      title: "The Eight Episodes",
      intro: "The procedure unfolds as eight brief episodes that build through two separations and two reunions.",
      questions: [
        {
          type: "mcq",
          q: "How many episodes make up the standard Strange Situation?",
          choices: ["Five", "Six", "Eight", "Twelve"],
          answer: 2,
          explain: "The procedure comprises eight episodes, beginning with an introduction and building through two separations and two reunions."
        },
        {
          type: "order",
          q: "Put the first four episodes in their correct order.",
          items: ["Parent and infant are introduced to the room", "Parent and infant alone; infant explores", "Stranger enters and joins them", "Parent leaves; infant with stranger (first separation)"],
          explain: "Episode 1 introduces the room, episode 2 lets the baby explore with the parent present, episode 3 adds the stranger, and episode 4 is the first separation."
        },
        {
          type: "truefalse",
          q: "The Strange Situation includes two separation episodes and two reunion episodes.",
          answer: true,
          explain: "There are two parent departures (episodes 4 and 6) and two parent returns (episodes 5 and 8)."
        },
        {
          type: "fill",
          q: "In the second separation (episode 6), the infant is left completely ____.",
          answer: "alone",
          accept: ["alone", "by themselves"],
          explain: "Episode 6 leaves the infant entirely alone in the room, usually the most stressful moment of the sequence."
        },
        {
          type: "mcq",
          q: "Which episode is the first reunion?",
          choices: ["Episode 3", "Episode 5", "Episode 7", "Episode 8"],
          answer: 1,
          explain: "Episode 5 is the first reunion: the parent returns and the stranger leaves. Episode 8 is the second reunion."
        },
        {
          type: "order",
          q: "Order the final three episodes.",
          items: ["Parent leaves; infant alone (second separation)", "Stranger returns and offers comfort", "Parent returns for the second reunion"],
          explain: "Episodes 6, 7, and 8 close the procedure: the infant is alone, then the stranger returns, then the parent returns for the final reunion."
        },
        {
          type: "truefalse",
          q: "Episode 1, the introduction to the room, is typically the longest episode.",
          answer: false,
          explain: "The introduction lasts only about 30 seconds; most other episodes run up to about three minutes each."
        }
      ]
    },
    {
      id: "l67",
      title: "Escalating the Attachment System",
      intro: "The stranger and the separations are mild, escalating stressors deliberately staged to switch on the infant's attachment system.",
      questions: [
        {
          type: "mcq",
          q: "What is the purpose of introducing a stranger and separations?",
          choices: ["To tire the infant out", "To activate the infant's attachment system so its organization becomes visible", "To test the infant's memory", "To measure the stranger's behavior"],
          answer: 1,
          explain: "Mild, escalating stressors switch on attachment behavior; how the infant seeks and uses the caregiver then reveals the attachment pattern."
        },
        {
          type: "truefalse",
          q: "Attachment behavior is most visible when an infant feels completely safe and unstressed.",
          answer: false,
          explain: "The attachment system activates under stress or threat; without some stress, attachment behaviors like proximity-seeking may not appear."
        },
        {
          type: "fill",
          q: "The two main stressors built into the procedure are the unfamiliar ____ and separation from the caregiver.",
          answer: "stranger",
          accept: ["stranger"],
          explain: "An unfamiliar adult (the stranger) plus caregiver separations are the designed sources of mild stress."
        },
        {
          type: "order",
          q: "Order these moments from least to most stressful for a typical infant.",
          items: ["Exploring with the parent present", "A stranger enters the room", "The parent leaves and a stranger remains", "The infant is left completely alone"],
          explain: "Stress rises across the procedure, peaking when the infant is left entirely alone in episode 6."
        },
        {
          type: "mcq",
          q: "Why are the stressors kept mild and brief?",
          choices: ["To avoid overwhelming the infant and to keep the procedure ethical", "Because longer stress is illegal", "To save the researchers time", "Because infants cannot feel stress"],
          answer: 0,
          explain: "Separations are curtailed if an infant becomes too distressed; the stress must be strong enough to activate attachment but mild enough to be ethical."
        },
        {
          type: "truefalse",
          q: "Separation episodes are cut short if the infant becomes overly distressed.",
          answer: true,
          explain: "Observers end a separation early when distress is severe, protecting the infant and keeping the procedure humane."
        },
        {
          type: "fill",
          q: "As the episodes progress, the stress placed on the attachment system is designed to ____.",
          answer: "escalate",
          accept: ["escalate", "increase", "rise", "build"],
          explain: "The sequence deliberately escalates stress so that increasingly clear attachment behavior emerges."
        }
      ]
    },
    {
      id: "l68",
      title: "Coding Reunion Behavior",
      intro: "Ainsworth found that how an infant responds at reunion, not how much it cries during separation, is the key diagnostic signal.",
      questions: [
        {
          type: "mcq",
          q: "Which behavior is most diagnostic of attachment quality in the Strange Situation?",
          choices: ["How much the infant cries during separation", "How the infant behaves when reunited with the caregiver", "How the infant plays before any stress", "How the infant reacts to the stranger's face"],
          answer: 1,
          explain: "Ainsworth found that the infant's response at reunion, not the amount of separation distress, best distinguishes attachment patterns."
        },
        {
          type: "truefalse",
          q: "The amount an infant cries during separation is the single best indicator of attachment security.",
          answer: false,
          explain: "Both secure and insecure infants may cry; it is the reunion response, how the infant recovers and uses the caregiver, that is diagnostic."
        },
        {
          type: "fill",
          q: "Attachment classification hinges most on the infant's behavior during the ____ episodes.",
          answer: "reunion",
          accept: ["reunion", "reunions"],
          explain: "Episodes 5 and 8, the reunions, carry the greatest weight in assigning an attachment classification."
        },
        {
          type: "mcq",
          q: "A securely attached infant at reunion typically...?",
          choices: ["Ignores the returning caregiver", "Arches away and cannot be soothed", "Seeks the caregiver, is comforted, and returns to play", "Freezes and stares blankly"],
          answer: 2,
          explain: "Secure infants greet the caregiver, are readily comforted, and then resume exploration, showing the caregiver serves as a secure base."
        },
        {
          type: "match",
          q: "Match each reunion pattern with the attachment style it suggests.",
          pairs: [
            ["Seeks contact, is soothed, resumes play", "Secure"],
            ["Avoids or ignores the caregiver", "Insecure-avoidant"],
            ["Seeks contact but resists comfort and stays upset", "Insecure-resistant"]
          ],
          explain: "Reunion behavior maps onto Ainsworth's three organized classifications: secure (B), avoidant (A), and resistant/ambivalent (C)."
        },
        {
          type: "truefalse",
          q: "Reunion behavior is weighted more heavily than the pre-separation exploration when classifying attachment.",
          answer: true,
          explain: "Coders focus on the reunions because they reveal how effectively the infant uses the caregiver to regulate distress."
        },
        {
          type: "fill",
          q: "An avoidant infant tends to ____ the caregiver at reunion rather than seek comfort.",
          answer: "avoid",
          accept: ["avoid", "ignore", "snub"],
          explain: "Insecure-avoidant infants minimize attachment behavior, turning away from or ignoring the caregiver on return."
        }
      ]
    },
    {
      id: "l69",
      title: "Interactive Behavior Scales",
      intro: "Reunion behavior is rated on four interactive scales that capture both approach and defense.",
      questions: [
        {
          type: "mcq",
          q: "How many interactive behavior scales did Ainsworth use to code reunion behavior?",
          choices: ["Two", "Four", "Six", "Ten"],
          answer: 1,
          explain: "Four seven-point scales are rated: proximity-seeking, contact-maintaining, avoidance, and resistance."
        },
        {
          type: "match",
          q: "Match each behavior scale with its description.",
          pairs: [
            ["Proximity-seeking", "Efforts to gain closeness to the caregiver"],
            ["Contact-maintaining", "Efforts to keep contact once achieved"],
            ["Avoidance", "Turning or moving away from the caregiver"],
            ["Resistance", "Angry rejection of contact or comfort"]
          ],
          explain: "These four coded behaviors capture both approach (seeking, maintaining) and defense (avoidance, resistance)."
        },
        {
          type: "truefalse",
          q: "Each interactive behavior is rated on a seven-point scale.",
          answer: true,
          explain: "Coders score proximity-seeking, contact-maintaining, avoidance, and resistance each on a 1-to-7 intensity scale."
        },
        {
          type: "fill",
          q: "____-maintaining behavior refers to an infant's efforts to prolong contact once picked up, such as clinging.",
          answer: "contact",
          accept: ["contact"],
          explain: "Contact-maintaining captures clinging or resisting release, showing the infant wants to sustain closeness."
        },
        {
          type: "mcq",
          q: "High resistance combined with high proximity-seeking is characteristic of which pattern?",
          choices: ["Secure", "Insecure-avoidant", "Insecure-resistant (ambivalent)", "Disorganized"],
          answer: 2,
          explain: "Resistant/ambivalent infants both seek the caregiver and angrily resist comfort, a conflicted mix of approach and rejection."
        },
        {
          type: "fill",
          q: "An infant who pointedly turns away and ignores the returning caregiver scores high on ____.",
          answer: "avoidance",
          accept: ["avoidance", "avoiding"],
          explain: "Avoidance measures active turning-away or ignoring, the hallmark of the insecure-avoidant pattern."
        },
        {
          type: "truefalse",
          q: "Avoidance and resistance measure the same underlying behavior.",
          answer: false,
          explain: "They are distinct: avoidance is turning away or ignoring, while resistance is angry, ambivalent rejection of the very contact the infant seeks."
        }
      ]
    },
    {
      id: "l70",
      title: "The Central Role of Reunion",
      intro: "Reunion is treated as the pivotal moment because it exposes the infant's internal working model of the caregiver.",
      questions: [
        {
          type: "mcq",
          q: "Why is reunion so revealing of an infant's internal working model?",
          choices: ["Because it shows how fast the infant runs", "Because it shows the infant's learned expectations about whether the caregiver will provide comfort", "Because it measures the infant's vocabulary", "Because it reflects the stranger's warmth"],
          answer: 1,
          explain: "Reunion behavior expresses the infant's internalized expectations, the working model, of the caregiver's availability and responsiveness."
        },
        {
          type: "truefalse",
          q: "The concept of an internal working model comes from Bowlby's attachment theory.",
          answer: true,
          explain: "Bowlby proposed that infants build internal working models, mental representations of self and caregiver, that guide expectations in relationships."
        },
        {
          type: "fill",
          q: "Reunion behavior is thought to express the infant's internal ____ model of the caregiver.",
          answer: "working",
          accept: ["working"],
          explain: "The internal working model is the infant's mental template of whether the attachment figure can be relied upon for comfort."
        },
        {
          type: "mcq",
          q: "A secure infant's easy comforting at reunion suggests a working model in which the caregiver is...?",
          choices: ["Unpredictable and frightening", "Consistently rejecting", "Reliably available and responsive", "Physically absent"],
          answer: 2,
          explain: "Prompt comforting reflects an expectation that the caregiver is a dependable source of safety, the core of secure attachment."
        },
        {
          type: "match",
          q: "Match each reunion response to the working model it implies.",
          pairs: [
            ["Comforted quickly, returns to play", "Caregiver is a dependable secure base"],
            ["Ignores caregiver, stays self-reliant", "Caregiver expected to rebuff bids for comfort"],
            ["Clings yet resists, stays distressed", "Caregiver expected to be inconsistently available"]
          ],
          explain: "Each reunion style reflects the infant's learned expectations about how the caregiver responds to distress."
        },
        {
          type: "truefalse",
          q: "Reunion behavior reflects only the events of the past few minutes, not any longer history of care.",
          answer: false,
          explain: "Reunion responses are shaped by the cumulative history of caregiver responsiveness, encoded in the working model, not just the immediate episode."
        },
        {
          type: "fill",
          q: "Because it taps the working model, reunion is treated as the key ____ moment of the whole procedure.",
          answer: "diagnostic",
          accept: ["diagnostic", "diagnosing"],
          explain: "The reunion is the pivotal diagnostic window because it exposes the infant's underlying expectations about care."
        }
      ]
    },
    {
      id: "l71",
      title: "Age Range and Validity",
      intro: "The procedure is validated for roughly twelve-to-eighteen-month-olds, when mobility and stranger wariness make attachment behavior clear.",
      questions: [
        {
          type: "mcq",
          q: "For what age range was the Strange Situation designed and validated?",
          choices: ["0-3 months", "6-9 months", "12-18 months", "3-5 years"],
          answer: 2,
          explain: "The procedure is validated for infants roughly 12 to 18 months old, when locomotion and stranger wariness make attachment behaviors clearly observable."
        },
        {
          type: "truefalse",
          q: "The Strange Situation is considered valid for use with school-age children without modification.",
          answer: false,
          explain: "It was designed for infants about 12-18 months; older children require different, age-appropriate attachment measures."
        },
        {
          type: "fill",
          q: "The classic applicability window for the Strange Situation is about twelve to ____ months of age.",
          answer: "eighteen",
          accept: ["eighteen", "18"],
          explain: "Twelve-to-eighteen months is the standard window, though some researchers extend it slightly."
        },
        {
          type: "mcq",
          q: "Why does the procedure work well around 12-18 months?",
          choices: ["Infants can drive themselves home", "Infants can crawl or walk to seek proximity and show clear wariness of strangers", "Infants can speak in full sentences", "Infants no longer form attachments"],
          answer: 1,
          explain: "By this age infants use locomotion to seek the caregiver and reliably show wariness of strangers, making attachment behavior easy to observe."
        },
        {
          type: "truefalse",
          q: "Below about 12 months, infants may lack the mobility and stranger wariness the procedure relies on.",
          answer: true,
          explain: "Younger infants often cannot actively seek proximity or show clear stranger fear, so the standard procedure is less informative."
        },
        {
          type: "order",
          q: "Order these ages from too young, to ideal, to too old for the standard procedure.",
          items: ["6 months", "14 months", "4 years"],
          explain: "Around 14 months falls squarely in the validated 12-18 month window; 6 months is generally too young and 4 years too old for the infant version."
        },
        {
          type: "fill",
          q: "A key reason for the age window is the emergence of stranger ____ around the end of the first year.",
          answer: "wariness",
          accept: ["wariness", "anxiety", "fear"],
          explain: "Stranger wariness (or anxiety) typically emerges late in the first year, which the procedure's stranger episodes rely upon."
        }
      ]
    },
    {
      id: "l72",
      title: "Strengths and Limitations",
      intro: "The procedure is highly reliable when coded by trained observers, but faces ecological-validity and cross-cultural critiques.",
      questions: [
        {
          type: "mcq",
          q: "Which meta-analysis examined cross-cultural distributions of Strange Situation classifications?",
          choices: ["Van IJzendoorn and Kroonenberg (1988)", "Watson and Rayner (1920)", "Milgram (1963)", "Piaget (1936)"],
          answer: 0,
          explain: "Van IJzendoorn and Kroonenberg's 1988 meta-analysis of 32 studies across eight countries mapped how classification rates vary within and between cultures."
        },
        {
          type: "truefalse",
          q: "The 1988 meta-analysis found that variation in attachment classifications was greater within cultures than between them.",
          answer: true,
          explain: "Intracultural variation exceeded intercultural variation, cautioning against simple national stereotypes about attachment."
        },
        {
          type: "mcq",
          q: "A common criticism of the Strange Situation is that it...?",
          choices: ["Takes several days to run", "May lack ecological validity because it is an artificial lab setting", "Requires expensive brain scans", "Cannot be coded reliably by trained observers"],
          answer: 1,
          explain: "Critics argue the contrived lab situation may not capture how infants behave in everyday life, questioning its ecological validity."
        },
        {
          type: "match",
          q: "Match each culture studied with the classification pattern often reported.",
          pairs: [
            ["North German samples", "Higher rates of avoidant (A) classification"],
            ["Japanese samples", "Higher rates of resistant (C) classification"],
            ["U.S. samples", "Majority classified as secure (B)"]
          ],
          explain: "Grossmann's German sample showed elevated avoidance and Japanese samples elevated resistance, patterns linked to differing childrearing norms."
        },
        {
          type: "truefalse",
          q: "Some critics argue the procedure reflects Western, especially American, assumptions about independence and exploration.",
          answer: true,
          explain: "The emphasis on independent exploration and reunion behavior may fit Western parenting ideals better than those of some other cultures."
        },
        {
          type: "fill",
          q: "In some Japanese samples, infants appeared highly distressed partly because they are rarely ____ from their mothers in daily life.",
          answer: "separated",
          accept: ["separated", "apart"],
          explain: "Takahashi noted that routine closeness made separations unusually stressful, potentially inflating resistant classifications, a validity concern."
        },
        {
          type: "fill",
          q: "A recognized strength of the Strange Situation is its high inter-rater ____ when coders are properly trained.",
          answer: "reliability",
          accept: ["reliability", "agreement"],
          explain: "Despite its critiques, trained observers can code the procedure with strong, replicable inter-rater reliability."
        }
      ]
    }
  ]
});
