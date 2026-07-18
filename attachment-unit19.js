window.ACADEMY.addUnit("attachment", {
  id: "unit-19",
  title: "Cross-Cultural Attachment",
  color: "#e0518a",
  icon: "🌍",
  description: "Tests attachment theory's claim to be universal against evidence from Germany, Japan, Israel, Mali, and a worldwide meta-analysis of infant distributions.",
  lessons: [
    {
      id: "l145",
      title: "The Universality Hypothesis",
      intro: "Attachment theory claims that forming a bond to a caregiver is a species-wide feature of human infancy, rooted in evolution.",
      questions: [
        {
          type: "mcq",
          q: "What does the universality hypothesis actually claim?",
          choices: [
            "Virtually all human infants form an attachment to a caregiver, across cultures",
            "All infants worldwide are securely attached",
            "Attachment only develops in Western industrialized societies",
            "Attachment must be taught to infants through explicit training"
          ],
          answer: 0,
          explain: "The universality hypothesis says nearly every infant becomes attached to a caregiver; it does not claim the attachment is always secure (that is the separate normativity hypothesis)."
        },
        {
          type: "truefalse",
          q: "Bowlby argued the attachment system evolved because staying close to a caregiver improved an infant's chances of survival.",
          answer: true,
          explain: "Bowlby framed attachment in evolutionary and ethological terms: proximity to a protective caregiver reduced danger from predators and other threats, so the system was naturally selected."
        },
        {
          type: "fill",
          q: "The universality hypothesis holds that nearly all infants, except those with severe neurological impairment, become ____ to a caregiver.",
          answer: "attached",
          accept: ["attached", "attach", "attachment"],
          explain: "Universality refers to the near-universal formation of an attachment bond itself, not to any one attachment classification."
        },
        {
          type: "mcq",
          q: "Which field most directly grounds Bowlby's claim that attachment is a species-wide human trait?",
          choices: [
            "Behaviorist learning theory",
            "Cognitive-developmental stage theory",
            "Ethology and evolutionary biology",
            "Classical psychoanalytic drive theory alone"
          ],
          answer: 2,
          explain: "Bowlby drew on ethology (for example imprinting in animals) and evolution to argue that attachment is an inherited, adaptive behavioral system rather than a purely learned or drive-based response."
        },
        {
          type: "match",
          q: "Match each idea to its meaning within the universality claim.",
          pairs: [
            ["Attachment behavioral system", "Inborn system that keeps infants close to caregivers"],
            ["Ethology", "Study of animal behavior that inspired Bowlby's thinking"],
            ["Universality hypothesis", "Almost all infants form an attachment bond"],
            ["Adaptive value", "The survival benefit that favored the trait's evolution"]
          ],
          explain: "Together these concepts frame attachment as an evolved, cross-species-inspired system with clear survival value, hence its predicted universality in humans."
        },
        {
          type: "order",
          q: "Put Bowlby's evolutionary argument for universal attachment in logical order.",
          items: [
            "Infants who stayed near caregivers were better protected",
            "Protected infants were more likely to survive and reproduce",
            "Genes favoring proximity-seeking spread through the species",
            "Attachment became a near-universal human trait"
          ],
          explain: "The argument runs from a survival advantage, to differential reproduction, to selection of proximity-seeking genes, to the trait's presence in virtually all humans."
        },
        {
          type: "truefalse",
          q: "The universality hypothesis claims every infant forms an attachment of exactly the same quality, regardless of the care they receive.",
          answer: false,
          explain: "Universality is only about whether a bond forms, not its quality. The distribution of secure versus insecure patterns is addressed by the normativity hypothesis and can vary with caregiving."
        }
      ]
    },
    {
      id: "l146",
      title: "Van IJzendoorn and Kroonenberg",
      intro: "A 1988 meta-analysis pooled Strange Situation studies from around the world to ask how attachment distributions vary across and within cultures.",
      questions: [
        {
          type: "mcq",
          q: "What did Van IJzendoorn and Kroonenberg's 1988 study combine?",
          choices: [
            "A single new study run in eight countries at once",
            "32 Strange Situation studies from 8 countries (about 2,000 infants)",
            "Interviews with adults recalling their childhoods",
            "Only American and British samples"
          ],
          answer: 1,
          explain: "Their meta-analysis pooled 32 published Strange Situation studies across 8 countries, covering roughly 2,000 infant classifications."
        },
        {
          type: "fill",
          q: "In every country studied, ____ attachment was the most common single classification.",
          answer: "secure",
          accept: ["secure", "type b", "b"],
          explain: "Secure (Type B) attachment was the majority pattern in every culture sampled, supporting the normativity hypothesis that secure attachment is the species-typical norm."
        },
        {
          type: "truefalse",
          q: "The meta-analysis found that differences within a single culture were larger than differences between cultures.",
          answer: true,
          explain: "Intra-cultural variation was about one and a half times greater than inter-cultural variation, a headline finding that cautions against treating whole cultures as uniform."
        },
        {
          type: "mcq",
          q: "Which conclusion is best supported by the meta-analysis?",
          choices: [
            "Secure attachment is rare outside the United States",
            "Cultures are internally uniform in attachment style",
            "Variation is greater within cultures than between them",
            "Avoidant attachment is the global norm"
          ],
          answer: 2,
          explain: "The strongest, most cited finding is that within-culture variation exceeded between-culture variation, warning against broad national stereotypes about attachment."
        },
        {
          type: "match",
          q: "Match each country pattern reported in or around the meta-analysis to its distinctive feature.",
          pairs: [
            ["Germany (West)", "Higher rate of avoidant classifications"],
            ["Japan", "Higher rate of resistant classifications"],
            ["United States", "Distribution close to Ainsworth's original"],
            ["Israel (kibbutz)", "Elevated resistant, few avoidant"]
          ],
          explain: "While secure was the norm everywhere, the insecure minority tilted avoidant in West Germany and resistant in Japan and on Israeli kibbutzim."
        },
        {
          type: "order",
          q: "Order these facts about the study from broadest scope to most specific finding.",
          items: [
            "Pooled 32 studies across 8 countries",
            "Secure was the majority in every country",
            "Insecure minorities differed by culture",
            "Within-culture variation exceeded between-culture variation"
          ],
          explain: "The study moves from a wide data pool, to a shared secure norm, to culturally patterned insecure minorities, to its key comparative statistic."
        },
        {
          type: "truefalse",
          q: "The meta-analysis proved that culture has no measurable influence on attachment distributions.",
          answer: false,
          explain: "Culture did shape the balance of insecure types (avoidant in Germany, resistant in Japan and kibbutzim); the point was that within-culture differences were even larger, not that culture was irrelevant."
        }
      ]
    },
    {
      id: "l147",
      title: "The German Bielefeld Study",
      intro: "Grossmann and colleagues found unusually high avoidance in a northern German sample, interpreted through a culture that prizes early independence.",
      questions: [
        {
          type: "mcq",
          q: "What was distinctive about the Grossmann et al. (1985) Bielefeld sample?",
          choices: [
            "Almost no infants could be classified at all",
            "A markedly high proportion of avoidant (Type A) infants",
            "A near-total absence of secure infants",
            "An unusually high rate of disorganized attachment"
          ],
          answer: 1,
          explain: "The northern German sample showed an elevated rate of avoidant (Type A) classifications, higher than Ainsworth's original American baseline."
        },
        {
          type: "truefalse",
          q: "Grossmann and colleagues interpreted the high avoidance as reflecting a cultural value placed on independence and interpersonal distance.",
          answer: true,
          explain: "They argued northern German parents encouraged self-reliance and kept some interpersonal distance, so an avoidant-looking response could reflect a valued 'non-clingy' ideal rather than poor care."
        },
        {
          type: "fill",
          q: "In the Bielefeld interpretation, avoidance was linked to a cultural preference for infant ____ and self-reliance.",
          answer: "independence",
          accept: ["independence", "independent", "autonomy", "self-reliance"],
          explain: "The German cultural ideal of an independent, undemanding child was used to explain why more infants kept their distance in the Strange Situation."
        },
        {
          type: "mcq",
          q: "Why does the Bielefeld study complicate a simple reading of avoidant attachment?",
          choices: [
            "It shows avoidance is impossible to measure",
            "It suggests avoidance may partly reflect cultural parenting values, not only insensitivity",
            "It proves avoidance is genetically fixed",
            "It shows the Strange Situation cannot be used in Europe"
          ],
          answer: 1,
          explain: "If cultural values encourage distance, then some avoidant classifications may reflect a culturally endorsed style, challenging the assumption that avoidance always signals insensitive care."
        },
        {
          type: "match",
          q: "Match each element of the Bielefeld study to its description.",
          pairs: [
            ["Grossmann et al.", "Researchers who ran the study"],
            ["Northern Germany", "Cultural setting of the sample"],
            ["Type A (avoidant)", "Classification that was elevated"],
            ["Independence value", "Cultural explanation offered"]
          ],
          explain: "The study pairs a specific team, region, and elevated classification with a culture-based explanation centered on valuing early independence."
        },
        {
          type: "order",
          q: "Order the reasoning chain the Grossmann group used to explain their results.",
          items: [
            "German culture values early independence",
            "Parents discourage clingy behavior",
            "Infants show more distance in the Strange Situation",
            "Avoidant classifications appear elevated"
          ],
          explain: "The interpretation moves from a cultural value, through parenting practice, to infant behavior, to the measured rise in avoidant classifications."
        },
        {
          type: "truefalse",
          q: "The Bielefeld findings mean the Strange Situation should never be interpreted with any attention to cultural context.",
          answer: false,
          explain: "The lesson is the opposite: results like Bielefeld's show that interpretation must consider cultural parenting values, not ignore them."
        }
      ]
    },
    {
      id: "l148",
      title: "The Japanese Study",
      intro: "Japanese Strange Situation studies found high resistance and virtually no avoidance, linked to infants rarely being separated from their mothers.",
      questions: [
        {
          type: "mcq",
          q: "What pattern did Japanese Strange Situation studies (for example Takahashi, 1986) typically show?",
          choices: [
            "High avoidant and no resistant infants",
            "High resistant (Type C) infants and very few or no avoidant ones",
            "An even split across all categories",
            "Almost entirely disorganized classifications"
          ],
          answer: 1,
          explain: "Japanese samples showed elevated resistant (Type C) classifications and near-zero avoidant ones, close to the mirror image of the German pattern."
        },
        {
          type: "truefalse",
          q: "Japanese infants in these studies were rarely separated from their mothers in everyday life before the study.",
          answer: true,
          explain: "Traditional Japanese childrearing kept mothers and infants in close, near-constant contact, so the separations in the Strange Situation were far more novel and stressful than for American infants."
        },
        {
          type: "fill",
          q: "Because separations were so unusual, many Japanese infants became extremely distressed and some Strange Situation episodes had to be ____ early.",
          answer: "stopped",
          accept: ["stopped", "ended", "terminated", "halted", "cut short"],
          explain: "The procedure sometimes had to be curtailed because infants who were almost never left alone became overwhelmingly upset, which can inflate resistant-looking scores."
        },
        {
          type: "mcq",
          q: "Why might the Strange Situation overstate insecurity in Japanese samples?",
          choices: [
            "Japanese infants dislike their mothers",
            "The separation is far more unfamiliar and stressful than the test assumes",
            "Japanese infants cannot form attachments",
            "The test rewards avoidant behavior"
          ],
          answer: 1,
          explain: "The Strange Situation assumes brief separations are only mildly stressful; for infants who are almost never separated, the same episodes are much more intense, so extreme distress may reflect novelty rather than true insecurity."
        },
        {
          type: "fill",
          q: "The Japanese cultural emphasis on close mother-infant dependence is often described using the term ____.",
          answer: "amae",
          accept: ["amae"],
          explain: "Amae refers to a valued sense of dependence and indulged closeness; it frames the mother-infant bond differently from the Western emphasis on promoting exploration and autonomy."
        },
        {
          type: "match",
          q: "Match each feature of the Japanese studies to its description.",
          pairs: [
            ["Type C (resistant)", "The elevated classification"],
            ["Avoidant rate", "Near zero in the samples"],
            ["Rare separation", "Everyday childrearing practice"],
            ["Amae", "Cultural value of indulged dependence"]
          ],
          explain: "High resistance, near-zero avoidance, rare everyday separation, and the value of amae together form the Japanese profile that mirrors the German one."
        },
        {
          type: "truefalse",
          q: "The Japanese and German results show insecure attachment tilts in the same direction in both cultures.",
          answer: false,
          explain: "They tilt in opposite directions: German samples skewed avoidant, Japanese samples skewed resistant, which is why the two are often taught as contrasting cases."
        }
      ]
    },
    {
      id: "l149",
      title: "Israeli Kibbutzim Research",
      intro: "Studies on Israeli kibbutzim linked communal sleeping arrangements, with inconsistent nighttime care, to higher rates of resistant attachment.",
      questions: [
        {
          type: "mcq",
          q: "What childrearing feature did kibbutz attachment research (Sagi et al.) focus on?",
          choices: [
            "Whether infants slept communally or at home with parents",
            "Whether infants were bottle-fed or breastfed",
            "The number of siblings in each family",
            "Whether mothers worked outside the kibbutz"
          ],
          answer: 0,
          explain: "The key comparison was between infants raised with communal (children's-house) sleeping versus those in kibbutzim that had switched to home-based family sleeping."
        },
        {
          type: "truefalse",
          q: "Infants in communal-sleeping kibbutzim showed lower rates of secure attachment than infants in home-sleeping arrangements.",
          answer: true,
          explain: "Communal-sleeping infants were less often secure and more often resistant, which researchers linked to inconsistent responsiveness by night-watch caregivers who were often unfamiliar."
        },
        {
          type: "fill",
          q: "In communal sleeping, infants were watched at night by a small number of caregivers, so nighttime responses to a child's distress were often inconsistent and ____.",
          answer: "unfamiliar",
          accept: ["unfamiliar", "impersonal", "unpredictable", "unresponsive"],
          explain: "At night a few watchers monitored many children, so a distressed infant might not get a prompt or familiar response, an experience linked to insecure-resistant patterns."
        },
        {
          type: "fill",
          q: "The trained caregiver responsible for kibbutz children during the day was called the ____.",
          answer: "metapelet",
          accept: ["metapelet", "metaplet"],
          explain: "The metapelet was the communal caregiver in the children's house; kibbutz infants formed attachments to both mother and metapelet, but nighttime care quality was the focus of the sleeping comparison."
        },
        {
          type: "mcq",
          q: "What did the kibbutz results suggest about attachment security?",
          choices: [
            "Communal living guarantees secure attachment",
            "Consistent, responsive nighttime care supports security",
            "Attachment is unaffected by who provides care",
            "Only biological mothers can foster secure attachment"
          ],
          answer: 1,
          explain: "The higher security of home-sleeping infants pointed to the value of consistent, familiar, responsive care, especially at night, rather than the communal structure itself."
        },
        {
          type: "match",
          q: "Match each kibbutz term to its meaning.",
          pairs: [
            ["Communal sleeping", "Infants sleep in the children's house at night"],
            ["Metapelet", "Trained communal daytime caregiver"],
            ["Resistant pattern", "Classification elevated by communal sleeping"],
            ["Home-based sleeping", "Arrangement linked to more security"]
          ],
          explain: "The comparison contrasts communal versus home sleeping, with the metapelet as caregiver and elevated resistance in the communal condition."
        },
        {
          type: "order",
          q: "Order the causal story researchers proposed for communal-sleeping kibbutzim.",
          items: [
            "Infants sleep away from parents in the children's house",
            "Few, sometimes unfamiliar watchers cover the night",
            "Nighttime distress is met inconsistently",
            "Resistant attachment becomes more common"
          ],
          explain: "The chain runs from the sleeping arrangement, to thin and unfamiliar nighttime staffing, to inconsistent responses, to elevated resistant attachment."
        }
      ]
    },
    {
      id: "l150",
      title: "The Dogon of Mali",
      intro: "True and colleagues studied the Dogon, a natural-fertility farming people, and found secure and disorganized attachment but no avoidant classifications at all.",
      questions: [
        {
          type: "mcq",
          q: "What was the striking finding among the Dogon of Mali (True et al., 2001)?",
          choices: [
            "Avoidant attachment was the most common pattern",
            "No infants were classified as avoidant at all",
            "No infants formed any attachment",
            "All infants were classified as disorganized"
          ],
          answer: 1,
          explain: "The Dogon sample contained secure and disorganized classifications but no avoidant ones, an absence that stood out sharply against Western distributions."
        },
        {
          type: "truefalse",
          q: "Dogon infants were breastfed on demand and kept in near-constant physical proximity to their mothers.",
          answer: true,
          explain: "In this natural-fertility society, mothers fed infants immediately in response to distress and stayed close, so an infant had little reason or opportunity to develop an avoidant strategy."
        },
        {
          type: "fill",
          q: "Because feeding was immediate and responsive, an infant had little reason to develop an ____ strategy of minimizing signals of need.",
          answer: "avoidant",
          accept: ["avoidant", "avoidance", "avoiding"],
          explain: "Avoidance is thought to develop when caregivers reliably rebuff bids for comfort; with prompt on-demand feeding and constant contact, that strategy had no functional basis among the Dogon."
        },
        {
          type: "mcq",
          q: "Why is the Dogon 'natural-fertility' context important to the finding?",
          choices: [
            "It means birth control and scheduled feeding were absent, so care was highly on-demand",
            "It means infants were raised entirely by strangers",
            "It means mothers rarely interacted with infants",
            "It means the Strange Situation could not be run"
          ],
          answer: 0,
          explain: "Natural-fertility societies lack modern contraception and scheduled feeding; on-demand breastfeeding and close proximity created conditions where infants had no pull toward avoidant behavior."
        },
        {
          type: "mcq",
          q: "What did the presence of disorganized but not avoidant classifications suggest to the researchers?",
          choices: [
            "Disorganization is impossible outside the West",
            "Frightening or unpredictable care can still produce disorganization, but ordinary avoidance had no cultural niche",
            "The Dogon infants were all insecure",
            "Attachment categories are meaningless"
          ],
          answer: 1,
          explain: "Disorganization, often tied to frightening caregiver behavior or loss, still appeared, while organized avoidance did not, suggesting some patterns are more culturally contingent than others."
        },
        {
          type: "match",
          q: "Match each Dogon study element to its description.",
          pairs: [
            ["True et al. (2001)", "Researchers who studied the Dogon"],
            ["Natural-fertility society", "No modern contraception or scheduled feeding"],
            ["On-demand breastfeeding", "Immediate response to infant hunger and distress"],
            ["Absent category", "Avoidant attachment, not observed"]
          ],
          explain: "The study links a specific team, a natural-fertility setting, on-demand feeding, and the complete absence of the avoidant category."
        },
        {
          type: "truefalse",
          q: "The Dogon findings suggest the avoidant category may partly depend on specific caregiving conditions rather than being equally likely everywhere.",
          answer: true,
          explain: "If a whole society reliably produces no avoidant infants, then avoidance appears to require particular patterns of care, supporting a more context-dependent reading of that classification."
        }
      ]
    },
    {
      id: "l151",
      title: "The Sensitivity Universality Debate",
      intro: "Critics ask whether 'sensitive' caregiving means the same thing everywhere, framing the argument as emic (culture-specific) versus etic (universal).",
      questions: [
        {
          type: "mcq",
          q: "In cross-cultural psychology, what is the difference between emic and etic approaches?",
          choices: [
            "Emic studies infants; etic studies adults",
            "Emic uses culture-specific insider meanings; etic seeks universal cross-cultural constructs",
            "Emic is quantitative; etic is always qualitative",
            "They are two names for the same method"
          ],
          answer: 1,
          explain: "An emic approach describes behavior in a culture's own terms; an etic approach applies concepts intended to hold across cultures. The sensitivity debate asks which one attachment measures assume."
        },
        {
          type: "truefalse",
          q: "The sensitivity hypothesis claims that secure attachment grows out of caregiving that is sensitively responsive to the infant's signals.",
          answer: true,
          explain: "Ainsworth's sensitivity hypothesis holds that promptly and appropriately reading and meeting infant signals fosters secure attachment; the cross-cultural debate is over what counts as 'appropriate.'"
        },
        {
          type: "fill",
          q: "Rothbaum and colleagues (2000) argued that Western definitions of sensitivity emphasize supporting the infant's autonomy and ____.",
          answer: "exploration",
          accept: ["exploration", "exploring", "independence", "autonomy"],
          explain: "They noted that in Japan, sensitive care may instead emphasize anticipating needs and promoting dependence (amae), so a single Western yardstick may misjudge non-Western caregiving."
        },
        {
          type: "mcq",
          q: "What is the core worry raised by the sensitivity-universality debate?",
          choices: [
            "That no culture has sensitive caregivers",
            "That a Western-defined idea of sensitivity may be imposed as if it were universal",
            "That sensitivity cannot be observed at all",
            "That only fathers can be sensitive"
          ],
          answer: 1,
          explain: "Critics worry attachment research treats a culturally specific (Western) notion of sensitivity as a universal etic standard, potentially mislabeling competent non-Western caregiving as insensitive."
        },
        {
          type: "match",
          q: "Match each term in the debate to its meaning.",
          pairs: [
            ["Emic", "Insider, culture-specific meaning"],
            ["Etic", "Outsider standard meant to be universal"],
            ["Sensitivity hypothesis", "Responsive care fosters security"],
            ["Amae-style care", "Sensitivity expressed as promoting dependence"]
          ],
          explain: "The debate contrasts emic and etic lenses and asks whether the sensitivity hypothesis, as usually operationalized, quietly privileges one culture's ideal of good care."
        },
        {
          type: "order",
          q: "Order the steps of the critics' argument about sensitivity.",
          items: [
            "Sensitivity is defined mainly from Western research",
            "That definition stresses autonomy and exploration",
            "It is applied as a universal (etic) standard",
            "Non-Western caregiving may be wrongly judged insensitive"
          ],
          explain: "The critique moves from a Western-anchored definition, to its autonomy emphasis, to its universal application, to the risk of misjudging other cultures' care."
        },
        {
          type: "truefalse",
          q: "Everyone in the field agrees that maternal sensitivity has an identical meaning and identical effects in every culture.",
          answer: false,
          explain: "There is genuine disagreement: this is exactly the debate. Some defend a broadly universal sensitivity effect while others argue its meaning is at least partly emic and culture-specific."
        }
      ]
    },
    {
      id: "l152",
      title: "Culture-Specific Versus Universal",
      intro: "Van IJzendoorn and Sagi organized the whole debate around a set of hypotheses about what may be universal and what may be culturally configured.",
      questions: [
        {
          type: "mcq",
          q: "Which set of four hypotheses did Van IJzendoorn and Sagi use to organize cross-cultural attachment claims?",
          choices: [
            "Universality, normativity, sensitivity, competence",
            "Nature, nurture, culture, biology",
            "Secure, avoidant, resistant, disorganized",
            "Emic, etic, proximal, distal"
          ],
          answer: 0,
          explain: "They distinguished the universality, normativity, sensitivity, and competence hypotheses so that each could be tested separately against cross-cultural evidence."
        },
        {
          type: "match",
          q: "Match each hypothesis to what it claims.",
          pairs: [
            ["Universality", "Almost all infants form an attachment"],
            ["Normativity", "Secure attachment is the most common pattern"],
            ["Sensitivity", "Responsive care produces secure attachment"],
            ["Competence", "Secure attachment predicts later competence"]
          ],
          explain: "Separating the four claims lets researchers accept, say, universality and normativity while still debating whether sensitivity and competence hold identically across cultures."
        },
        {
          type: "truefalse",
          q: "The competence hypothesis claims that secure attachment in infancy predicts more competent functioning later in development.",
          answer: true,
          explain: "The competence hypothesis links early security to better later social and emotional outcomes; critics ask whether the specific competencies valued are themselves culture-bound."
        },
        {
          type: "fill",
          q: "The configuration debate asks whether the specific behavioral pattern that expresses secure-base use is universal or partly ____-specific.",
          answer: "culture",
          accept: ["culture", "cultural", "culturally"],
          explain: "Even if security is universal, the exact configuration of behaviors that signals a secure base (how closeness and exploration are balanced) may look somewhat different across cultures."
        },
        {
          type: "mcq",
          q: "Which position best captures the current consensus this unit builds toward?",
          choices: [
            "Attachment is entirely culture-free and identical everywhere",
            "Attachment does not exist outside the West",
            "The bond is broadly universal, but its distribution and expression are shaped by culture",
            "Culture fully determines whether attachment forms at all"
          ],
          answer: 2,
          explain: "The evidence supports a moderate view: forming attachments is near-universal (universality and normativity largely hold), while the balance of insecure types and the expression of care are shaped by culture."
        },
        {
          type: "order",
          q: "Order these hypotheses from the most broadly supported cross-culturally to the most contested.",
          items: [
            "Universality (almost all infants attach)",
            "Normativity (secure is the norm)",
            "Sensitivity (responsive care yields security)",
            "Competence (security predicts later competence, defined similarly everywhere)"
          ],
          explain: "Universality and normativity hold up well cross-culturally, while the sensitivity and competence hypotheses draw more debate about whether their meaning is the same in every culture."
        },
        {
          type: "truefalse",
          q: "Concluding that culture shapes attachment forces us to reject the idea that attachment has any universal basis.",
          answer: false,
          explain: "The mature conclusion is 'both/and': attachment has a universal, evolved core, and culture shapes how it is distributed and expressed, so accepting cultural influence does not require abandoning universality."
        }
      ]
    }
  ]
});
