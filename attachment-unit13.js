window.ACADEMY.addUnit("attachment", {
  id: "unit-13",
  title: "Coherence and Intergenerational Transmission",
  color: "#e0518a",
  icon: "🧬",
  description: "How adult states of mind, scored for narrative coherence, predict infant attachment and pass patterns across generations.",
  lessons: [
    {
      id: "l97",
      title: "Coherence of Mind",
      intro: "The Adult Attachment Interview scores security not by what happened to a person but by how coherently they can talk about it, drawing on Paul Grice's four maxims of cooperative conversation.",
      questions: [
        {
          type: "mcq",
          q: "Which philosopher's maxims of cooperative conversation does AAI coherence scoring draw on?",
          choices: ["Paul Grice", "John Bowlby", "Sigmund Freud", "Mary Ainsworth"],
          answer: 0,
          explain: "Paul Grice described the maxims of cooperative discourse; Mary Main adapted them to score coherence in the Adult Attachment Interview."
        },
        {
          type: "match",
          q: "Match each of Grice's four maxims to its meaning.",
          pairs: [
            ["Quality", "Be truthful and have evidence for what you say"],
            ["Quantity", "Be succinct yet complete"],
            ["Relation", "Be relevant to the topic"],
            ["Manner", "Be clear and orderly"]
          ],
          explain: "Grice's maxims (Quality, Quantity, Relation, Manner) define cooperative talk; coherent AAI transcripts honor all four."
        },
        {
          type: "fill",
          q: "Grice's overarching rule, which cooperative speakers follow, is the ____ Principle.",
          answer: "cooperative",
          accept: ["cooperative", "co-operative"],
          explain: "The maxims spell out Grice's Cooperative Principle; a coherent narrative cooperates with the listener rather than confusing or contradicting them."
        },
        {
          type: "truefalse",
          q: "The AAI classifies an adult as secure based on whether they had a happy childhood.",
          answer: false,
          explain: "Security depends on the coherence of the narrative, not on whether the remembered experiences were positive or negative."
        },
        {
          type: "mcq",
          q: "A speaker insists their childhood was 'excellent, very normal' but cannot supply a single supporting memory. Which maxim is most clearly violated?",
          choices: ["Manner", "Quality", "Relation", "None - this is coherent"],
          answer: 1,
          explain: "Sweeping positive claims with no evidence violate Quality (be truthful and back up what you say) - a hallmark of dismissing idealization."
        },
        {
          type: "fill",
          q: "A speaker who gives long, run-on, angry tangents about a parent, saying far more than needed, mainly violates the maxim of ____.",
          answer: "quantity",
          accept: ["quantity"],
          explain: "Excessive, entangled speech violates Quantity (be succinct yet complete), a pattern typical of preoccupied transcripts."
        },
        {
          type: "truefalse",
          q: "Coherence in the AAI requires both internal consistency and collaboration with the interviewer.",
          answer: true,
          explain: "A coherent transcript stays internally consistent and works cooperatively with the interviewer's questions rather than derailing them."
        }
      ]
    },
    {
      id: "l98",
      title: "Reflective Coherence",
      intro: "Secure-autonomous adults tell a story about their past that is integrated, believable, and collaborative, valuing attachment while still thinking about it objectively.",
      questions: [
        {
          type: "mcq",
          q: "The hallmark of a secure-autonomous AAI is a narrative that is:",
          choices: ["Coherent and collaborative regardless of the childhood content", "Uniformly positive about the parents", "Free of any painful memories", "Extremely brief"],
          answer: 0,
          explain: "Secure-autonomous adults value attachment yet describe it coherently and collaboratively, whether their history was happy or difficult."
        },
        {
          type: "truefalse",
          q: "A person who suffered abuse or loss can still be classified secure-autonomous if they discuss it coherently.",
          answer: true,
          explain: "This is the basis of 'earned security': a hard past discussed with insight and coherence still yields a secure-autonomous classification."
        },
        {
          type: "fill",
          q: "Peter Fonagy's term for the capacity to understand behavior in terms of underlying mental states is reflective ____.",
          answer: "functioning",
          accept: ["functioning", "function"],
          explain: "Reflective functioning (mentalization) is the ability to interpret oneself and others in terms of mental states, and it supports coherent narratives."
        },
        {
          type: "match",
          q: "Match each narrative style to its AAI classification.",
          pairs: [
            ["Coherent and collaborative", "Secure-autonomous"],
            ["Terse, dismissing of attachment", "Dismissing"],
            ["Entangled, oscillating, angry", "Preoccupied"]
          ],
          explain: "Coherent-collaborative talk signals security; terse dismissal signals a dismissing state of mind; entangled over-involvement signals preoccupation."
        },
        {
          type: "mcq",
          q: "'Earned security' refers to adults who:",
          choices: ["Never experienced adversity", "Idealize their parents", "Had difficult childhoods but produce coherent, secure AAIs", "Refuse to discuss the past"],
          answer: 2,
          explain: "Earned-secure adults report adverse childhoods yet talk about them coherently, achieving a secure-autonomous classification."
        },
        {
          type: "truefalse",
          q: "A believable AAI narrative must present the parents as perfect.",
          answer: false,
          explain: "Believability comes from consistency between general descriptions and specific memories, not from idealizing the parents."
        },
        {
          type: "fill",
          q: "Coherence combines internal consistency with ____ with the interviewer.",
          answer: "collaboration",
          accept: ["collaboration", "cooperation", "collaborating"],
          explain: "The coherence-of-transcript scale rewards both a consistent story and cooperative engagement with the interviewer."
        }
      ]
    },
    {
      id: "l99",
      title: "AAI-Strange Situation Correspondence",
      intro: "Each adult AAI state of mind maps onto a predicted infant Strange Situation classification, linking a parent's discourse to a baby's behavior.",
      questions: [
        {
          type: "match",
          q: "Match each adult AAI category to the infant Strange Situation category it predicts.",
          pairs: [
            ["Secure-autonomous (F)", "Secure (B)"],
            ["Dismissing (Ds)", "Avoidant (A)"],
            ["Preoccupied (E)", "Resistant / ambivalent (C)"],
            ["Unresolved (U)", "Disorganized (D)"]
          ],
          explain: "The four AAI categories correspond to the four infant classifications: F-B, Ds-A, E-C, and U-D."
        },
        {
          type: "mcq",
          q: "A dismissing (Ds) adult most often has an infant classified as:",
          choices: ["Secure (B)", "Avoidant (A)", "Resistant (C)", "Disorganized (D)"],
          answer: 1,
          explain: "Dismissing states of mind correspond to avoidant (A) infants, who minimize attachment signals just as the parent minimizes attachment in discourse."
        },
        {
          type: "truefalse",
          q: "An unresolved/disorganized adult state of mind corresponds to disorganized infant attachment.",
          answer: true,
          explain: "Lapses in reasoning around loss or trauma (unresolved, U) correspond to disorganized (D) infant behavior."
        },
        {
          type: "fill",
          q: "The adult AAI category that predicts a resistant/ambivalent (C) infant is ____.",
          answer: "preoccupied",
          accept: ["preoccupied", "e", "entangled"],
          explain: "Preoccupied (E) adults, entangled with past attachment, tend to have resistant/ambivalent (C) infants."
        },
        {
          type: "mcq",
          q: "Who developed the Adult Attachment Interview?",
          choices: ["John Bowlby alone", "Sigmund Freud", "Mary Main, Carol George, and Nancy Kaplan", "Harry Harlow"],
          answer: 2,
          explain: "The AAI was developed by George, Kaplan, and Main in the mid-1980s, with the scoring system elaborated by Main and Goldwyn."
        },
        {
          type: "truefalse",
          q: "The correspondence between AAI and infant Strange Situation classifications is exactly 100 percent.",
          answer: false,
          explain: "Correspondence is strong but not perfect - roughly 70 to 75 percent - leaving room for other influences."
        },
        {
          type: "fill",
          q: "The infant Strange Situation procedure was developed by Mary ____.",
          answer: "ainsworth",
          accept: ["ainsworth"],
          explain: "Mary Ainsworth created the Strange Situation, whose infant classifications the AAI is designed to predict."
        }
      ]
    },
    {
      id: "l100",
      title: "Intergenerational Transmission Effect",
      intro: "Attachment patterns tend to repeat across generations, as a parent's state of mind shapes the child's attachment security.",
      questions: [
        {
          type: "mcq",
          q: "Intergenerational transmission of attachment means:",
          choices: ["A parent's attachment representation predicts the child's attachment pattern", "Attachment is entirely genetic", "Children always develop the opposite pattern to their parents", "Attachment is fixed by temperament alone"],
          answer: 0,
          explain: "Transmission means the parent's own attachment representation forecasts how the child will be classified."
        },
        {
          type: "truefalse",
          q: "Benoit and Parker (1994) found attachment concordance across three generations: grandmother, mother, and infant.",
          answer: true,
          explain: "Their study documented significant concordance of attachment across three generations, supporting the transmission idea."
        },
        {
          type: "fill",
          q: "The caregiving mechanism proposed to carry attachment across generations is the parent's ____ (responsiveness to the infant's signals).",
          answer: "sensitivity",
          accept: ["sensitivity", "responsiveness"],
          explain: "Maternal sensitivity - prompt, appropriate responding - was the classic proposed pathway from parent state of mind to infant security."
        },
        {
          type: "match",
          q: "Match each transmission term to its meaning.",
          pairs: [
            ["Intergenerational transmission", "A pattern repeats from parent to child"],
            ["Concordance", "Agreement between parent and infant classifications"],
            ["Mediator", "A variable that carries the effect, such as sensitivity"]
          ],
          explain: "Transmission is the parent-to-child repetition; concordance is the observed match; a mediator is the mechanism linking them."
        },
        {
          type: "mcq",
          q: "In transmission research, maternal sensitivity is proposed as the ____ linking parent state of mind to infant attachment.",
          choices: ["Moderator", "Mediator", "Confound", "Outcome"],
          answer: 1,
          explain: "Sensitivity is theorized as the mediator - the step through which the parent's representation produces the infant's classification."
        },
        {
          type: "order",
          q: "Put the proposed causal chain of transmission in order.",
          items: ["Parent's attachment state of mind", "Parent's caregiving behavior (sensitivity)", "Infant's attachment classification"],
          explain: "The classic model runs from the parent's representation, through sensitive caregiving, to the infant's attachment pattern."
        },
        {
          type: "truefalse",
          q: "Transmission is perfectly deterministic: insecure parents always produce insecure children.",
          answer: false,
          explain: "Transmission is probabilistic, not certain; it raises the odds of concordance but does not guarantee it."
        }
      ]
    },
    {
      id: "l101",
      title: "The Transmission Gap",
      intro: "Maternal sensitivity explains only part of how attachment passes from parent to child; the unexplained remainder is called the transmission gap.",
      questions: [
        {
          type: "fill",
          q: "The term 'transmission ____' names the part of intergenerational transmission left unexplained by sensitivity.",
          answer: "gap",
          accept: ["gap"],
          explain: "Van IJzendoorn coined 'transmission gap' in 1995 for the portion of the parent-to-infant link that sensitivity fails to explain."
        },
        {
          type: "mcq",
          q: "The transmission gap refers to the fact that:",
          choices: ["Sensitivity fully explains transmission", "Sensitivity only partially mediates the AAI-to-infant link", "The AAI does not predict infant attachment at all", "Infants cannot be reliably classified"],
          answer: 1,
          explain: "The AAI predicts infant attachment strongly, but sensitivity mediates only weakly, leaving a gap in the causal story."
        },
        {
          type: "truefalse",
          q: "If maternal sensitivity fully mediated transmission, there would be no transmission gap.",
          answer: true,
          explain: "The gap exists precisely because sensitivity does not fully account for how the AAI predicts infant attachment."
        },
        {
          type: "mcq",
          q: "Who coined the phrase 'transmission gap'?",
          choices: ["Peter Fonagy", "John Bowlby", "Marinus van IJzendoorn", "Mary Main"],
          answer: 2,
          explain: "Marinus van IJzendoorn named the transmission gap in his 1995 meta-analysis."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [
            ["Transmission gap", "Unexplained portion of parent-to-child transmission"],
            ["Mediator", "Sensitivity, the proposed but insufficient link"],
            ["Van IJzendoorn (1995)", "Meta-analysis that named the gap"]
          ],
          explain: "The gap is the unexplained remainder; sensitivity is the weak mediator; van IJzendoorn's 1995 meta-analysis identified it."
        },
        {
          type: "truefalse",
          q: "The transmission gap implies researchers must look for additional mechanisms beyond sensitivity.",
          answer: true,
          explain: "The gap motivated new work on mentalization, mind-mindedness, and emotional communication to explain what sensitivity missed."
        },
        {
          type: "fill",
          q: "The gap remains because caregiving ____ accounts for only part of the transmission from parent to infant.",
          answer: "sensitivity",
          accept: ["sensitivity", "responsiveness"],
          explain: "Because sensitivity explains only a modest share of the effect, the remaining unexplained variance is the transmission gap."
        }
      ]
    },
    {
      id: "l102",
      title: "Van IJzendoorn's Meta-Analysis",
      intro: "Van IJzendoorn's 1995 meta-analysis quantified the strength of intergenerational transmission and exposed the transmission gap.",
      questions: [
        {
          type: "mcq",
          q: "In which journal did van IJzendoorn publish his 1995 meta-analysis on the AAI?",
          choices: ["Psychological Bulletin", "Nature", "The Lancet", "Science"],
          answer: 0,
          explain: "The meta-analysis appeared in Psychological Bulletin (1995), volume 117, on the predictive validity of the AAI."
        },
        {
          type: "fill",
          q: "The meta-analysis reported a combined effect size of about d = 1.06 for the secure-versus-insecure ____ between parent AAI and infant attachment.",
          answer: "correspondence",
          accept: ["correspondence", "concordance", "match", "link"],
          explain: "The pooled effect size of about d = 1.06 reflected a strong secure/insecure correspondence between parent AAI and infant classification."
        },
        {
          type: "truefalse",
          q: "The meta-analysis found that maternal sensitivity fully accounted for the link between AAI and infant attachment.",
          answer: false,
          explain: "Sensitivity was only a weak mediator; its limited role is exactly what van IJzendoorn labeled the transmission gap."
        },
        {
          type: "mcq",
          q: "Roughly what three-way (secure/dismissing/preoccupied) correspondence did the meta-analysis find between AAI and infant classifications?",
          choices: ["About 20 percent", "About 100 percent", "About 70 percent", "About 5 percent"],
          answer: 2,
          explain: "Three-way correspondence was around 70 percent, and secure-versus-insecure correspondence was roughly 75 percent."
        },
        {
          type: "match",
          q: "Match each meta-analytic finding to its meaning.",
          pairs: [
            ["Effect size d approx 1.06", "Strength of secure/insecure transmission"],
            ["Transmission gap", "Weak mediation by sensitivity"],
            ["Meta-analysis", "Results pooled across many studies"]
          ],
          explain: "The large effect size showed strong transmission; the weak sensitivity mediation was the gap; a meta-analysis pools many studies."
        },
        {
          type: "truefalse",
          q: "A meta-analysis combines results from many separate studies to estimate an overall effect.",
          answer: true,
          explain: "By statistically pooling many studies, a meta-analysis yields a more precise and generalizable estimate than any single study."
        },
        {
          type: "order",
          q: "Order the logic that led to the meta-analysis's central conclusion.",
          items: ["The AAI strongly predicts infant attachment", "Sensitivity was expected to explain the link", "Sensitivity only weakly mediated it", "A transmission gap remains"],
          explain: "Strong prediction plus weak mediation by sensitivity leaves an unexplained transmission gap."
        }
      ]
    },
    {
      id: "l103",
      title: "Predicting Attachment Prenatally",
      intro: "The AAI can be given to expectant parents and still predict their baby's attachment a year later, powerful evidence that transmission flows from parent to child.",
      questions: [
        {
          type: "mcq",
          q: "Which study first showed that the AAI given during pregnancy predicts infant attachment at one year?",
          choices: ["Fonagy, Steele and Steele (1991)", "Ainsworth (1978)", "Bowlby (1969)", "van IJzendoorn (1995)"],
          answer: 0,
          explain: "Fonagy, Steele and Steele (1991) found that expectant mothers' AAIs predicted their infants' Strange Situation classifications at 12 months."
        },
        {
          type: "truefalse",
          q: "Because the AAI was administered before the baby was born, prenatal prediction rules out the idea that the infant's temperament shaped the parent's AAI.",
          answer: true,
          explain: "Since the interview preceded the birth, the infant could not have influenced it, so the direction of effect must run parent-to-child."
        },
        {
          type: "fill",
          q: "Fonagy, Steele and Steele administered the AAI during the ____ trimester of pregnancy.",
          answer: "third",
          accept: ["third", "3rd", "last"],
          explain: "The expectant mothers were interviewed in the third trimester, before their infants were born."
        },
        {
          type: "mcq",
          q: "Prenatal AAI prediction is theoretically important because it:",
          choices: ["Shows infants cause parents' states of mind", "Establishes the direction of causation as parent-to-infant", "Proves attachment is purely genetic", "Disproves the AAI"],
          answer: 1,
          explain: "Predicting attachment from a pre-birth interview establishes that the parent's representation shapes the infant, not the reverse."
        },
        {
          type: "match",
          q: "Match each study to its key contribution.",
          pairs: [
            ["Fonagy, Steele & Steele (1991)", "Prenatal AAI predicts infant attachment"],
            ["Van IJzendoorn (1995)", "Meta-analytic transmission gap"],
            ["Benoit & Parker (1994)", "Three-generation concordance"]
          ],
          explain: "Each study advanced transmission research: prenatal prediction, meta-analytic quantification, and three-generation concordance."
        },
        {
          type: "truefalse",
          q: "Prenatal prediction weakens the argument for intergenerational transmission.",
          answer: false,
          explain: "It strengthens the argument by ruling out reverse causation - the parent's state of mind clearly comes first."
        },
        {
          type: "fill",
          q: "In the London cohort, the parent's reflective ____ measured prenatally helped predict infant security.",
          answer: "functioning",
          accept: ["functioning", "function"],
          explain: "Fonagy and colleagues found that parents' reflective functioning, assessed before birth, predicted their infants' later attachment security."
        }
      ]
    },
    {
      id: "l104",
      title: "Beyond Sensitivity Mechanisms",
      intro: "To close the transmission gap, researchers look past simple sensitivity to mentalization and the quality of emotional communication.",
      questions: [
        {
          type: "mcq",
          q: "Which mechanisms are proposed to help close the transmission gap beyond sensitivity?",
          choices: ["Mentalization and affective communication", "Genetics and diet", "Birth order and gender", "IQ and family income"],
          answer: 0,
          explain: "Mentalization (reflective functioning), mind-mindedness, and the quality of emotional communication are leading candidates to fill the gap."
        },
        {
          type: "fill",
          q: "Elizabeth Meins's construct for a caregiver's tendency to treat the infant as an agent with a mind is called mind-____.",
          answer: "mindedness",
          accept: ["mindedness", "minded"],
          explain: "Mind-mindedness, Meins's concept, captures a caregiver's inclination to comment appropriately on the infant's mental states."
        },
        {
          type: "truefalse",
          q: "Reflective functioning (mentalization) is the parent's capacity to hold the child's mental states in mind.",
          answer: true,
          explain: "Reflective functioning is the ability to understand behavior in terms of underlying feelings, wishes, and intentions, including the child's."
        },
        {
          type: "match",
          q: "Match each construct to its originator or meaning.",
          pairs: [
            ["Mind-mindedness", "Meins: treating the infant as a mental agent"],
            ["Reflective functioning", "Fonagy: the capacity to mentalize"],
            ["Affective communication", "Quality of parent-infant emotional signaling"]
          ],
          explain: "Meins developed mind-mindedness, Fonagy elaborated reflective functioning, and affective communication concerns emotional signaling quality."
        },
        {
          type: "mcq",
          q: "Disrupted affective communication, such as frightened or frightening behavior, is especially linked to which infant outcome?",
          choices: ["Secure attachment", "Disorganized attachment", "Avoidant attachment only", "No effect at all"],
          answer: 1,
          explain: "Main and Hesse linked frightened/frightening parental behavior and disrupted communication to disorganized infant attachment."
        },
        {
          type: "truefalse",
          q: "These mechanisms matter because sensitivity alone did not fully explain intergenerational transmission.",
          answer: true,
          explain: "The transmission gap - sensitivity's incomplete mediation - is precisely why mentalization and communication became research targets."
        },
        {
          type: "order",
          q: "Order the research progression that led to studying mentalization.",
          items: ["The AAI predicts infant attachment", "Sensitivity is proposed as the mediator", "Sensitivity leaves a transmission gap", "Mentalization and communication are studied to fill the gap"],
          explain: "Once sensitivity proved an incomplete mediator, researchers turned to mentalization and emotional communication to explain the remaining gap."
        }
      ]
    }
  ]
});
