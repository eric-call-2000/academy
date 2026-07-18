window.ACADEMY.addUnit("attachment", {
  id: "unit-22",
  title: "The Neuroscience of Attachment",
  color: "#e0518a",
  icon: "🧠",
  description: "This unit explores the biological substrates of bonding, caregiving, and stress regulation, from oxytocin and vasopressin to the HPA axis and epigenetic programming of the developing brain.",
  lessons: [
    {
      id: "l169",
      title: "The Caregiving Brain",
      intro: "Infant cues like faces, cries, and smiles recruit dedicated neural circuits that motivate protective, nurturing behavior in caregivers.",
      questions: [
        {
          type: "mcq",
          q: "Which brain structure is central to detecting the emotional salience of an infant's cry?",
          choices: ["The cerebellum", "The amygdala", "The occipital cortex", "The spinal cord"],
          answer: 1,
          explain: "The amygdala processes emotional salience and threat, and it activates strongly to distressing infant cues, helping mobilize a caregiving response."
        },
        {
          type: "truefalse",
          q: "Seeing an infant's face can activate reward-related regions of a caregiver's brain even before any conscious recognition.",
          answer: true,
          explain: "Infant faces trigger rapid activity in reward and motivational circuits, including the orbitofrontal cortex, often within a fraction of a second."
        },
        {
          type: "mcq",
          q: "The 'baby schema' (Kindchenschema) refers to infantile features that:",
          choices: ["Reduce adult attention to infants", "Elicit caregiving and perceived cuteness", "Only affect biological parents", "Are unique to humans"],
          answer: 1,
          explain: "Konrad Lorenz's baby schema describes features like large eyes and round cheeks that reliably elicit caregiving motivation and perceptions of cuteness."
        },
        {
          type: "fill",
          q: "The orbitofrontal ____ shows rapid activity to infant faces, linking perception to caregiving motivation.",
          answer: "cortex",
          accept: ["cortex", "cortex (ofc)", "ofc"],
          explain: "The orbitofrontal cortex (OFC) responds within about 130 milliseconds to infant faces, integrating reward value into caregiving responses."
        },
        {
          type: "match",
          q: "Match each brain region to its role in the caregiving response.",
          pairs: [
            ["Amygdala", "Detects emotional salience of infant cues"],
            ["Orbitofrontal cortex", "Rapid reward valuation of infant faces"],
            ["Hypothalamus", "Coordinates hormonal caregiving signals"]
          ],
          explain: "The caregiving brain is a network: the amygdala flags salience, the OFC assigns reward value, and the hypothalamus drives hormonal output."
        },
        {
          type: "truefalse",
          q: "Only mothers, never fathers or non-parents, show brain activation to infant cues.",
          answer: false,
          explain: "Fathers, adoptive parents, and even non-parents show caregiving-network activation to infant cues; experience and hormones can amplify it."
        },
        {
          type: "order",
          q: "Order the sequence of a caregiver's neural response to a distressed infant, from perception to action.",
          items: ["Sensory perception of the cry", "Amygdala flags emotional salience", "Reward and motivation circuits engage", "Caregiving behavior is initiated"],
          explain: "The response flows from perceiving the cue, through salience detection and motivational engagement, to the actual nurturing behavior."
        }
      ]
    },
    {
      id: "l170",
      title: "Oxytocin and Bonding",
      intro: "Oxytocin is a neuropeptide produced in the hypothalamus that facilitates affiliation, trust, and the bonds between caregivers and infants and between partners.",
      questions: [
        {
          type: "mcq",
          q: "Where is oxytocin primarily synthesized?",
          choices: ["The adrenal glands", "The hypothalamus", "The thyroid", "The liver"],
          answer: 1,
          explain: "Oxytocin is synthesized by neurons in the hypothalamus (paraventricular and supraoptic nuclei) and released via the posterior pituitary."
        },
        {
          type: "truefalse",
          q: "Oxytocin is released during childbirth, breastfeeding, and warm physical contact.",
          answer: true,
          explain: "Oxytocin surges during labor, milk letdown in nursing, and affectionate touch, supporting its role in bonding."
        },
        {
          type: "fill",
          q: "Oxytocin is often nicknamed the ____ hormone because of its role in affiliation and trust.",
          answer: "love",
          accept: ["love", "bonding", "cuddle"],
          explain: "Popular labels like the 'love,' 'bonding,' or 'cuddle' hormone reflect oxytocin's association with affiliation, though its effects are more nuanced."
        },
        {
          type: "mcq",
          q: "In social behavior research, intranasal oxytocin has been reported to increase:",
          choices: ["Physical strength", "Trusting behavior in economic games", "Visual acuity", "Blood glucose"],
          answer: 1,
          explain: "Studies such as Kosfeld and colleagues (2005) reported that intranasal oxytocin increased trusting behavior in economic exchange tasks."
        },
        {
          type: "truefalse",
          q: "Oxytocin uniformly increases warmth toward everyone, including strangers and rival groups.",
          answer: false,
          explain: "Oxytocin can heighten in-group favoritism and even out-group wariness, so its effects are context- and relationship-dependent, not uniformly prosocial."
        },
        {
          type: "match",
          q: "Match each oxytocin-related event with its context.",
          pairs: [
            ["Milk letdown", "Nursing an infant"],
            ["Uterine contractions", "Labor and childbirth"],
            ["Pair-bond affiliation", "Partner touch and closeness"]
          ],
          explain: "Oxytocin operates across reproductive and social contexts: birth, nursing, and pair bonding all involve its release."
        },
        {
          type: "order",
          q: "Order the path of oxytocin from production to systemic release.",
          items: ["Synthesized in hypothalamic neurons", "Transported to the posterior pituitary", "Released into the bloodstream", "Acts on target tissues and receptors"],
          explain: "Oxytocin is made in the hypothalamus, stored and released by the posterior pituitary, then travels to act on receptors throughout the body and brain."
        }
      ]
    },
    {
      id: "l171",
      title: "Vasopressin and Pair Bonding",
      intro: "Studies of prairie voles reveal how vasopressin, alongside oxytocin, underlies monogamous pair bonding, especially in males.",
      questions: [
        {
          type: "mcq",
          q: "Prairie voles became a famous model species because they are:",
          choices: ["Socially monogamous and form pair bonds", "Completely solitary", "Unable to reproduce in labs", "Identical to lab mice in behavior"],
          answer: 0,
          explain: "Prairie voles form lasting, socially monogamous pair bonds, making them a key model for the neurobiology of attachment."
        },
        {
          type: "truefalse",
          q: "Vasopressin is especially important for pair-bonding behavior in male prairie voles.",
          answer: true,
          explain: "Research by Insel, Young, and colleagues showed vasopressin acting at the V1a receptor is central to male prairie vole partner preference and mate guarding."
        },
        {
          type: "mcq",
          q: "Montane voles differ from prairie voles largely because they:",
          choices: ["Have identical bonding behavior", "Do not form monogamous pair bonds", "Cannot produce vasopressin", "Are aquatic"],
          answer: 1,
          explain: "The closely related montane vole is not monogamous, and differences in vasopressin receptor distribution help explain the contrast."
        },
        {
          type: "fill",
          q: "Vasopressin exerts its pair-bonding effects largely through the ____ receptor.",
          answer: "v1a",
          accept: ["v1a", "v1a receptor", "vasopressin 1a", "avpr1a"],
          explain: "The V1a (AVPR1A) receptor mediates vasopressin's influence on partner preference and territorial behavior in male voles."
        },
        {
          type: "truefalse",
          q: "Differences in the brain distribution of vasopressin receptors between vole species have no effect on bonding.",
          answer: false,
          explain: "Species differences in where V1a receptors are expressed strongly influence whether voles form monogamous bonds."
        },
        {
          type: "match",
          q: "Match each species or molecule to its role in the vole bonding research.",
          pairs: [
            ["Prairie vole", "Monogamous, pair-bonding model"],
            ["Montane vole", "Non-monogamous comparison species"],
            ["V1a receptor", "Vasopressin target for male bonding"]
          ],
          explain: "Comparing monogamous and non-monogamous voles, and manipulating the V1a receptor, revealed vasopressin's role in pair bonding."
        },
        {
          type: "order",
          q: "Order the logic of the vole pair-bonding experiments.",
          items: ["Identify monogamous prairie voles", "Compare with non-monogamous montane voles", "Note differences in vasopressin receptor distribution", "Manipulate V1a receptors to alter bonding"],
          explain: "Researchers moved from behavioral comparison to receptor mapping to direct manipulation, building the causal case for vasopressin in bonding."
        }
      ]
    },
    {
      id: "l172",
      title: "The HPA Axis",
      intro: "The hypothalamic-pituitary-adrenal axis governs the body's stress hormone response, and secure attachment relationships help buffer its reactivity.",
      questions: [
        {
          type: "fill",
          q: "The HPA axis releases the stress hormone ____ from the adrenal glands.",
          answer: "cortisol",
          accept: ["cortisol", "glucocorticoid", "glucocorticoids"],
          explain: "The HPA axis culminates in the adrenal cortex releasing cortisol, the primary human glucocorticoid stress hormone."
        },
        {
          type: "mcq",
          q: "What do the letters HPA stand for?",
          choices: ["Hippocampus-Pons-Amygdala", "Hypothalamic-Pituitary-Adrenal", "Hormone-Protein-Antibody", "Hypothalamic-Parietal-Adrenal"],
          answer: 1,
          explain: "HPA stands for Hypothalamic-Pituitary-Adrenal, the three-part hormonal cascade that produces the stress response."
        },
        {
          type: "order",
          q: "Order the HPA axis cascade in response to stress.",
          items: ["Hypothalamus releases CRH", "Pituitary releases ACTH", "Adrenal glands release cortisol", "Cortisol feeds back to shut off the response"],
          explain: "CRH from the hypothalamus triggers ACTH from the pituitary, which drives cortisol from the adrenals; cortisol then provides negative feedback."
        },
        {
          type: "truefalse",
          q: "A secure attachment figure can lower a child's cortisol response to a stressor.",
          answer: true,
          explain: "The presence of a trusted caregiver buffers HPA reactivity, dampening cortisol release during stress; this is called social buffering."
        },
        {
          type: "mcq",
          q: "Chronic activation of the HPA axis with persistently high cortisol is associated with:",
          choices: ["Improved memory and calm", "Wear-and-tear effects like allostatic load", "No physiological consequences", "Lower blood pressure only"],
          answer: 1,
          explain: "Sustained cortisol elevation contributes to allostatic load, the cumulative physiological cost of chronic stress."
        },
        {
          type: "truefalse",
          q: "Cortisol has no ability to shut down its own release once secreted.",
          answer: false,
          explain: "Cortisol provides negative feedback to the hypothalamus and pituitary, normally turning off the stress cascade once the threat passes."
        },
        {
          type: "match",
          q: "Match each HPA axis component to its secretion.",
          pairs: [
            ["Hypothalamus", "CRH (corticotropin-releasing hormone)"],
            ["Pituitary", "ACTH (adrenocorticotropic hormone)"],
            ["Adrenal cortex", "Cortisol"]
          ],
          explain: "Each level of the axis releases a specific signal: CRH, then ACTH, then cortisol, in a coordinated cascade."
        }
      ]
    },
    {
      id: "l173",
      title: "Social Baseline Theory",
      intro: "James Coan's Social Baseline Theory proposes that the brain treats social proximity as the expected baseline, so companionship reduces perceived threat and the effort of self-regulation.",
      questions: [
        {
          type: "mcq",
          q: "Social Baseline Theory, developed by James Coan, argues that the human brain assumes:",
          choices: ["Solitude is the default condition", "Social proximity is the baseline expectation", "Threats are always imaginary", "Emotions are irrelevant to cognition"],
          answer: 1,
          explain: "Coan's theory holds that the brain expects social proximity as the norm, so relationships economize on effort and risk."
        },
        {
          type: "truefalse",
          q: "In Coan's handholding studies, holding a partner's hand reduced threat-related brain activation during anticipated shock.",
          answer: true,
          explain: "Coan, Schaefer, and Davidson (2006) found that holding a spouse's hand attenuated neural threat responses to the threat of shock."
        },
        {
          type: "fill",
          q: "Social Baseline Theory frames relationships as helping the brain conserve metabolic ____ during threat.",
          answer: "resources",
          accept: ["resources", "energy", "effort"],
          explain: "The theory casts social proximity as a way the brain conserves metabolic resources, offloading regulation onto trusted others."
        },
        {
          type: "mcq",
          q: "According to the theory, the quality of the relationship matters because threat buffering was strongest when:",
          choices: ["The hand belonged to a stranger", "The partner relationship was high in quality", "The person was alone", "The room was dark"],
          answer: 1,
          explain: "Buffering was greater for higher-quality marital relationships than for strangers, showing attachment quality shapes the neural benefit."
        },
        {
          type: "truefalse",
          q: "Social Baseline Theory claims that companionship increases the brain's threat response.",
          answer: false,
          explain: "It claims the opposite: companionship, especially with a trusted person, reduces the neural threat response and regulatory load."
        },
        {
          type: "order",
          q: "Order the steps of Coan's handholding experiment paradigm.",
          items: ["Participant anticipates possible shock", "Threat cue is presented", "Partner or stranger holds the hand", "Reduced threat-related brain activity is measured"],
          explain: "The paradigm presents threat cues, introduces social contact, and measures how much that contact dampens neural threat responses."
        },
        {
          type: "match",
          q: "Match each element of Coan's research to its meaning.",
          pairs: [
            ["Social baseline", "Proximity treated as the default state"],
            ["Handholding", "Manipulation providing social contact"],
            ["Relationship quality", "Moderator of the buffering effect"]
          ],
          explain: "The theory's core idea, its experimental manipulation, and the moderating role of relationship quality together explain social buffering."
        }
      ]
    },
    {
      id: "l174",
      title: "Dopamine and Reward",
      intro: "Attachment engages the brain's dopaminergic reward circuits, making closeness with attachment figures intrinsically motivating and rewarding.",
      questions: [
        {
          type: "mcq",
          q: "Which neurotransmitter is most associated with motivation and the brain's reward circuitry in attachment?",
          choices: ["Dopamine", "Melatonin", "Insulin", "Histamine"],
          answer: 0,
          explain: "Dopamine drives motivation and reward, and it is engaged when we seek and experience closeness with attachment figures."
        },
        {
          type: "truefalse",
          q: "Brain imaging of people viewing photos of a loved one shows activation in dopamine-rich reward regions.",
          answer: true,
          explain: "Studies of romantic and maternal love (e.g., Bartels and Zeki) show activation in dopamine-rich areas like the ventral tegmental area and caudate."
        },
        {
          type: "fill",
          q: "The mesolimbic reward pathway begins in the ventral tegmental ____ , a key source of dopamine.",
          answer: "area",
          accept: ["area", "area (vta)", "vta"],
          explain: "The ventral tegmental area (VTA) is a primary origin of dopamine neurons in the mesolimbic reward pathway."
        },
        {
          type: "mcq",
          q: "The nucleus accumbens is important in attachment because it:",
          choices: ["Controls balance", "Integrates dopamine reward signals with motivation", "Produces cortisol", "Stores long-term memories only"],
          answer: 1,
          explain: "The nucleus accumbens receives dopamine and helps translate reward signals into motivated approach behavior toward attachment figures."
        },
        {
          type: "truefalse",
          q: "Attachment relies only on stress hormones and has no connection to reward chemistry.",
          answer: false,
          explain: "Attachment strongly recruits dopaminergic reward circuits, which is why proximity to loved ones feels rewarding and motivating."
        },
        {
          type: "match",
          q: "Match each reward-system structure to its function.",
          pairs: [
            ["Ventral tegmental area", "Origin of mesolimbic dopamine neurons"],
            ["Nucleus accumbens", "Translates reward into motivated approach"],
            ["Dopamine", "Neurotransmitter of reward and motivation"]
          ],
          explain: "Dopamine released from the VTA acts on the nucleus accumbens to drive motivated, reward-seeking approach toward attachment figures."
        },
        {
          type: "order",
          q: "Order how the reward pathway responds to reunion with a loved one.",
          items: ["Loved one is perceived", "VTA dopamine neurons fire", "Nucleus accumbens receives dopamine", "Motivated approach and pleasure follow"],
          explain: "Perceiving an attachment figure drives VTA dopamine firing, which reaches the nucleus accumbens and produces motivated, rewarding approach."
        }
      ]
    },
    {
      id: "l175",
      title: "Early Care and Brain Development",
      intro: "Early caregiving experiences can epigenetically program the developing stress systems, shaping how the brain regulates arousal across the lifespan.",
      questions: [
        {
          type: "fill",
          q: "____ refers to changes in gene expression that occur without altering the underlying DNA sequence.",
          answer: "epigenetics",
          accept: ["epigenetics", "epigenetic", "epigenetic programming"],
          explain: "Epigenetics involves modifications like DNA methylation that change how genes are expressed without changing the DNA sequence itself."
        },
        {
          type: "mcq",
          q: "A common epigenetic mechanism by which early care influences stress genes is:",
          choices: ["DNA methylation", "Bone remodeling", "Muscle hypertrophy", "Blood clotting"],
          answer: 0,
          explain: "DNA methylation can silence or dampen gene expression, and early care experiences alter methylation of stress-related genes."
        },
        {
          type: "truefalse",
          q: "Early caregiving quality can shape how reactive a person's stress system is later in life.",
          answer: true,
          explain: "Sensitive early care is linked to better-regulated stress systems, while adversity can bias the HPA axis toward heightened reactivity."
        },
        {
          type: "mcq",
          q: "The glucocorticoid receptor is important in stress regulation because it:",
          choices: ["Produces adrenaline", "Helps cortisol provide negative feedback to shut off the stress response", "Digests fats", "Controls vision"],
          answer: 1,
          explain: "Glucocorticoid receptors let cortisol signal negative feedback; more receptors generally mean more efficient shut-off of the stress response."
        },
        {
          type: "truefalse",
          q: "Epigenetic changes from early experience are always permanent and can never be modified.",
          answer: false,
          explain: "While early epigenetic programming can be lasting, later experience and interventions can sometimes modify these marks; they are not strictly fixed."
        },
        {
          type: "match",
          q: "Match each term to its meaning in early-care neuroscience.",
          pairs: [
            ["Epigenetics", "Gene expression changes without DNA sequence change"],
            ["DNA methylation", "Chemical mark that can dampen gene expression"],
            ["Glucocorticoid receptor", "Enables cortisol's negative feedback"]
          ],
          explain: "Epigenetic marks like DNA methylation regulate genes such as the glucocorticoid receptor, linking early care to stress regulation."
        },
        {
          type: "order",
          q: "Order how early care can shape the stress system through epigenetics.",
          items: ["Quality of early caregiving is experienced", "Epigenetic marks (e.g., methylation) are altered", "Glucocorticoid receptor expression changes", "Stress reactivity is calibrated"],
          explain: "Caregiving experience alters epigenetic marks that change receptor expression, which in turn calibrates lifelong stress reactivity."
        }
      ]
    },
    {
      id: "l176",
      title: "Meaney's Rat Studies",
      intro: "Michael Meaney's research showed that variation in maternal licking and grooming in rats epigenetically alters glucocorticoid receptor gene expression and offspring stress responses.",
      questions: [
        {
          type: "mcq",
          q: "In Michael Meaney's studies, the key maternal behavior that shaped offspring stress physiology was:",
          choices: ["Nest building only", "Licking and grooming (and arched-back nursing)", "Vocalizing to pups", "Ignoring the pups"],
          answer: 1,
          explain: "Meaney and colleagues focused on natural variation in maternal licking, grooming, and arched-back nursing as the key influence on pups."
        },
        {
          type: "truefalse",
          q: "Rat pups of high-licking-and-grooming mothers grew up with lower stress reactivity as adults.",
          answer: true,
          explain: "Offspring of high-LG mothers showed calmer HPA responses and better stress regulation, an effect traced to maternal care rather than genes alone."
        },
        {
          type: "fill",
          q: "Meaney's work showed maternal care altered methylation of the ____ receptor gene in the hippocampus.",
          answer: "glucocorticoid",
          accept: ["glucocorticoid", "glucocorticoid (gr)", "gr"],
          explain: "High maternal licking reduced methylation of the glucocorticoid receptor gene, increasing its expression in the hippocampus."
        },
        {
          type: "mcq",
          q: "Cross-fostering experiments in Meaney's research were crucial because they showed:",
          choices: ["The effect was purely genetic", "The behavior of the rearing mother, not just genes, drove the outcome", "Pups could not be moved between mothers", "Licking had no measurable effect"],
          answer: 1,
          explain: "Cross-fostering pups to high- or low-LG mothers showed that the rearing mother's behavior shaped stress physiology, demonstrating an experiential effect."
        },
        {
          type: "truefalse",
          q: "Meaney's findings suggested the maternal-care effect on stress genes was entirely inherited through DNA sequence, not experience.",
          answer: false,
          explain: "The findings were a landmark for epigenetics precisely because experience (maternal care), not DNA sequence, altered gene expression."
        },
        {
          type: "order",
          q: "Order the causal chain in Meaney's high-licking-and-grooming findings.",
          items: ["High maternal licking and grooming", "Reduced methylation of the glucocorticoid receptor gene", "Increased glucocorticoid receptor expression", "Lower adult stress reactivity"],
          explain: "More maternal care lowered methylation, raised receptor expression, and produced better-regulated, less reactive adult offspring."
        },
        {
          type: "match",
          q: "Match each element of Meaney's research to its role.",
          pairs: [
            ["Licking and grooming", "Maternal behavior driving the effect"],
            ["Cross-fostering", "Design showing care, not genes, mattered"],
            ["Glucocorticoid receptor gene", "Epigenetically regulated target"]
          ],
          explain: "Maternal licking, tested via cross-fostering, changed methylation of the glucocorticoid receptor gene to program stress responses."
        }
      ]
    }
  ]
});
