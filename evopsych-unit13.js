window.ACADEMY.addUnit("evopsych", {
  id: "unit-13",
  title: "Physical Attractiveness",
  color: "#7c5cff",
  icon: "✨",
  description: "Explores the evolutionary science of how faces and bodies signal health, fertility, and genetic quality, and why the human eye is tuned to read them.",
  lessons: [
    {
      id: "l97",
      title: "Attractiveness as Adaptation",
      intro: "Evolutionary psychology treats beauty not as arbitrary taste but as a perceptual system for assessing a potential mate's fitness.",
      questions: [
        {
          type: "mcq",
          q: "In evolutionary psychology, what does physical attractiveness primarily function to signal?",
          choices: [
            "A person's wealth and social class",
            "Cues to health, fertility, and genetic quality (mate value)",
            "Learned cultural fashions with no biological basis",
            "A person's moral character"
          ],
          answer: 1,
          explain: "The core adaptationist claim is that attractiveness judgments track fitness-relevant cues such as health, fertility, and heritable quality, guiding mate choice."
        },
        {
          type: "truefalse",
          q: "The 'good genes' hypothesis holds that some attractive traits are honest signals of heritable quality that a mate could pass to offspring.",
          answer: true,
          explain: "Good-genes models argue that certain hard-to-fake traits advertise underlying genetic quality, so preferring them yields fitter offspring."
        },
        {
          type: "fill",
          q: "The idea that beauty preferences are shaped by natural selection to serve mate assessment treats attraction as an evolved ____ mechanism.",
          answer: "psychological",
          accept: ["psychological", "cognitive", "adaptive", "adaptation"],
          explain: "Evolutionary psychologists frame attraction as an evolved psychological (information-processing) mechanism, not a random preference."
        },
        {
          type: "mcq",
          q: "Which finding most challenges the view that beauty standards are purely learned and arbitrary?",
          choices: [
            "Fashion in clothing changes each decade",
            "Cross-cultural agreement on which faces are attractive, including among infants",
            "People disagree strongly about celebrity attractiveness",
            "Beauty products are a large industry"
          ],
          answer: 1,
          explain: "High cross-cultural agreement, and infants gazing longer at faces adults rate attractive, suggests some tuning is early-emerging and not merely taught."
        },
        {
          type: "truefalse",
          q: "Evolutionary accounts claim that every attractiveness preference is rigidly fixed and identical in all people regardless of context.",
          answer: false,
          explain: "Evolved preferences are condition-dependent and calibrated by ecology, individual condition, and context; universality of some cues does not mean rigidity."
        },
        {
          type: "match",
          q: "Match each attractiveness concept to its description.",
          pairs: [
            ["Mate value", "Overall desirability as a partner, summed across fitness cues"],
            ["Honest signal", "A trait too costly to fake, so it reliably indicates quality"],
            ["Condition-dependent", "A cue whose expression depends on the bearer's health or resources"]
          ],
          explain: "These terms form the backbone of adaptationist attractiveness theory: cues have value, some are honest and costly, and many depend on condition."
        },
        {
          type: "order",
          q: "Order the logical steps of the adaptationist argument for beauty preferences, from premise to prediction.",
          items: [
            "Certain traits reliably indicate health or fertility",
            "Ancestors who preferred those traits had fitter offspring",
            "Selection favored the preference over generations",
            "Modern humans still find those traits attractive"
          ],
          explain: "The argument runs from honest cues, to a selective advantage for preferring them, to the spread of the preference, to its presence today."
        }
      ]
    },
    {
      id: "l98",
      title: "Facial Symmetry",
      intro: "Bilateral symmetry is studied as a visible marker of developmental stability, with fluctuating asymmetry as the flaw selection can detect.",
      questions: [
        {
          type: "mcq",
          q: "What is 'fluctuating asymmetry' (FA)?",
          choices: [
            "Deliberate makeup that emphasizes one side of the face",
            "Small, random left-right deviations from perfect bilateral symmetry",
            "Symmetry that changes with a person's mood",
            "Directional asymmetry programmed into every body, like the heart's position"
          ],
          answer: 1,
          explain: "Fluctuating asymmetry is random, non-directional departure from symmetry in traits that should be symmetrical, used as an index of developmental noise."
        },
        {
          type: "truefalse",
          q: "Low fluctuating asymmetry is interpreted as a sign of developmental stability, the ability to develop normally despite genetic and environmental stress.",
          answer: true,
          explain: "The reasoning is that resisting perturbations (parasites, toxins, mutations) during growth yields more symmetrical features, so symmetry advertises robustness."
        },
        {
          type: "fill",
          q: "Because symmetry is thought to reflect an organism's resistance to stressors during growth, it is treated as a marker of developmental ____.",
          answer: "stability",
          accept: ["stability", "stableness"],
          explain: "Developmental stability is the buffering of development against disturbance; symmetry is its most-studied visible proxy."
        },
        {
          type: "mcq",
          q: "In attractiveness research, symmetrical faces are generally rated as:",
          choices: [
            "Less attractive because they look artificial",
            "Attractive only in women, never in men",
            "More attractive on average, though the effect can be modest",
            "Irrelevant to attractiveness judgments"
          ],
          answer: 2,
          explain: "Meta-analyses find a positive but often modest association between facial symmetry and rated attractiveness across many studies."
        },
        {
          type: "truefalse",
          q: "Directional asymmetry, such as the heart being on the left, is the same thing as fluctuating asymmetry and signals poor genes.",
          answer: false,
          explain: "Directional asymmetry is normal and programmed; only fluctuating (random) asymmetry is used as a stress index. Confusing the two is a common error."
        },
        {
          type: "order",
          q: "Order the causal chain proposed to link genetic quality to attractiveness via symmetry.",
          items: [
            "Good genes and low stress during development",
            "Greater developmental stability",
            "Lower fluctuating asymmetry (more symmetrical face)",
            "Higher rated attractiveness"
          ],
          explain: "The hypothesized path is that quality plus low stress buffers development, reducing random asymmetry and raising perceived attractiveness."
        },
        {
          type: "match",
          q: "Match each symmetry term to its meaning.",
          pairs: [
            ["Fluctuating asymmetry", "Random small left-right deviations used as a stress index"],
            ["Developmental stability", "Capacity to develop the intended form despite disturbance"],
            ["Directional asymmetry", "Consistent, normal one-sided difference (not a quality cue)"]
          ],
          explain: "Distinguishing these three is essential: only fluctuating asymmetry is read as an honest cue to developmental quality."
        }
      ]
    },
    {
      id: "l99",
      title: "Averageness Effect",
      intro: "Langlois and Roggman showed that mathematically averaged composite faces tend to be rated more attractive than the individual faces composing them.",
      questions: [
        {
          type: "mcq",
          q: "What did Langlois and Roggman's 1990 study demonstrate?",
          choices: [
            "Unusual, distinctive faces are the most attractive",
            "Only symmetry, not averageness, affects attractiveness",
            "Attractiveness cannot be measured experimentally",
            "Computer-averaged composite faces are rated more attractive than most individual faces"
          ],
          answer: 3,
          explain: "Their paper 'Attractive Faces Are Only Average' found that digitally averaged composites were judged more attractive than nearly all the component faces."
        },
        {
          type: "truefalse",
          q: "In the averageness effect, blending more faces into a composite tends to increase its rated attractiveness up to a point.",
          answer: true,
          explain: "Langlois and Roggman found composites of more faces (e.g., 16 or 32) were generally rated higher than composites of fewer faces."
        },
        {
          type: "fill",
          q: "The averageness effect says faces close to the mathematical ____ of a population tend to be judged more attractive.",
          answer: "average",
          accept: ["average", "mean", "prototype"],
          explain: "Attractive faces cluster near the population average or prototype; averaging cancels out asymmetries and extreme features."
        },
        {
          type: "mcq",
          q: "Which is a leading evolutionary explanation for why average faces are attractive?",
          choices: [
            "Average faces are the rarest and thus prized",
            "Averageness may signal genetic diversity and developmental normality, and is easier for the brain to process",
            "Average faces always have the most extreme features",
            "People are taught in childhood to prefer averaged photos"
          ],
          answer: 1,
          explain: "Proposed accounts include averageness signaling heterozygosity and normal development, plus a cognitive fluency benefit of easily processed prototypes."
        },
        {
          type: "truefalse",
          q: "The averageness effect proves that the single most attractive possible face is exactly average with no distinctive features.",
          answer: false,
          explain: "Later work shows caricaturing an already-attractive composite away from average can raise attractiveness, so 'average' is not the absolute ceiling."
        },
        {
          type: "order",
          q: "Order the steps of the classic composite-face procedure used to test averageness.",
          items: [
            "Photograph many individual faces",
            "Digitally align and average them into a composite",
            "Have raters judge composites and individuals for attractiveness",
            "Compare ratings and find composites score higher"
          ],
          explain: "This is the core method: collect faces, average them by computer, then compare attractiveness ratings of composites versus originals."
        },
        {
          type: "match",
          q: "Match each concept related to averageness to its description.",
          pairs: [
            ["Composite face", "An image made by mathematically averaging many faces"],
            ["Processing fluency", "Ease of perceiving a prototype, which can boost liking"],
            ["Heterozygosity cue", "Idea that averageness hints at genetic diversity"]
          ],
          explain: "Composites, cognitive fluency, and genetic-diversity signaling are the main ideas tied to why average faces appeal."
        }
      ]
    },
    {
      id: "l100",
      title: "Sexual Dimorphism Cues",
      intro: "Sex hormones sculpt adult faces, so testosterone and estrogen markers act as visible cues to sex-typical development and hormone levels.",
      questions: [
        {
          type: "mcq",
          q: "Which facial features are considered testosterone-linked masculine cues?",
          choices: [
            "A pronounced brow ridge, wider and longer lower jaw, and thinner cheeks",
            "Large eyes, full lips, and a small chin",
            "A rounded forehead and narrow jaw",
            "High, smooth cheekbones with a soft jawline"
          ],
          answer: 0,
          explain: "Testosterone during development promotes a heavier brow, broader and longer jaw, and more angular features, the classic masculine markers."
        },
        {
          type: "mcq",
          q: "Which features are typically described as estrogen-linked feminine cues?",
          choices: [
            "A heavy brow ridge and square jaw",
            "Full lips, larger eyes, a smaller nose and chin, and higher cheekbones",
            "Thin lips and a broad lower face",
            "A receding hairline and coarse skin"
          ],
          answer: 1,
          explain: "Estrogen caps bone growth in the lower face and enhances lips and eye size, producing softer, more feminine facial proportions."
        },
        {
          type: "truefalse",
          q: "The immunocompetence handicap hypothesis proposes that testosterone-dependent traits are costly because testosterone can suppress immune function, making them honest signals.",
          answer: true,
          explain: "Folstad and Karter's idea is that only high-quality males can afford the immune cost of strong testosterone signals, so those cues stay honest."
        },
        {
          type: "fill",
          q: "Sex differences in traits driven by hormones like testosterone and estrogen are called sexual ____.",
          answer: "dimorphism",
          accept: ["dimorphism"],
          explain: "Sexual dimorphism is systematic difference in form between the sexes; facial masculinity and femininity are dimorphic hormone markers."
        },
        {
          type: "truefalse",
          q: "Research shows women uniformly and strongly prefer the most extremely masculinized male faces in every context.",
          answer: false,
          explain: "Preferences vary: highly masculine faces can read as attractive but also less warm or trustworthy, and preferences shift with context and study."
        },
        {
          type: "order",
          q: "Order the steps of the immunocompetence handicap logic for masculine facial cues.",
          items: [
            "High testosterone builds masculine markers but suppresses immune function",
            "Only high-quality males can afford this immune cost",
            "The unaffordable cost keeps the masculine markers honest and hard to fake",
            "Observers preferring those markers tend to secure higher-quality mates"
          ],
          explain: "The handicap logic runs from a costly trait, to who can pay the cost, to why that keeps the signal honest, to the payoff for choosers."
        },
        {
          type: "match",
          q: "Match each hormone cue to what it signals or produces.",
          pairs: [
            ["Testosterone markers", "Angular jaw and brow; potentially costly immune handicap"],
            ["Estrogen markers", "Full lips and large eyes; cue to female reproductive hormones"],
            ["Immunocompetence handicap", "Why testosterone signals can stay honest despite their cost"]
          ],
          explain: "Testosterone builds masculine structure, estrogen builds feminine features, and the handicap logic explains why costly cues remain reliable."
        }
      ]
    },
    {
      id: "l101",
      title: "Waist-to-Hip Ratio",
      intro: "Devendra Singh argued that a low female waist-to-hip ratio near 0.7 is a cross-culturally attractive cue to health and fertility, though the claim is debated.",
      questions: [
        {
          type: "fill",
          q: "Waist-to-hip ratio is calculated by dividing waist circumference by ____ circumference.",
          answer: "hip",
          accept: ["hip", "hips"],
          explain: "WHR = waist circumference divided by hip circumference; a lower value means a relatively narrower waist compared with the hips."
        },
        {
          type: "mcq",
          q: "In Devendra Singh's 1993 research, which female waist-to-hip ratio was reported as most attractive across the groups he studied?",
          choices: [
            "About 0.9",
            "About 0.7",
            "About 1.0",
            "About 0.5"
          ],
          answer: 1,
          explain: "Singh reported that a WHR of roughly 0.7 was rated most attractive, which he linked to estrogen profiles, health, and fertility."
        },
        {
          type: "truefalse",
          q: "Singh proposed that a low waist-to-hip ratio is an honest cue partly because it correlates with hormonal profile, health, and fertility.",
          answer: true,
          explain: "He argued fat distribution tracks estrogen and androgen balance, and that a low WHR is associated with better health and reproductive indicators."
        },
        {
          type: "mcq",
          q: "Which is a major critique of the strong 'universal 0.7' claim?",
          choices: [
            "No one has ever measured waist-to-hip ratio",
            "Waist-to-hip ratio only matters for men",
            "The ratio is impossible to see in real bodies",
            "Preferred WHR varies across cultures and ecologies, and body mass often predicts attractiveness at least as strongly"
          ],
          answer: 3,
          explain: "Critics such as Yu, Shepard, and Tovee found cross-cultural variation and showed BMI can account for as much or more variance than WHR."
        },
        {
          type: "truefalse",
          q: "Early WHR studies were criticized for using line-drawing stimuli in which changing the waist also changed apparent body weight, confounding the two cues.",
          answer: true,
          explain: "A key methodological complaint was that Singh's figure drawings altered perceived weight and WHR together, making their effects hard to separate."
        },
        {
          type: "order",
          q: "Order these developments in the waist-to-hip ratio debate chronologically.",
          items: [
            "Singh publishes the 0.7 WHR attractiveness findings (1993)",
            "Researchers question the line-drawing stimuli as confounding weight",
            "Cross-cultural studies report varying preferred ratios",
            "BMI is shown to rival WHR in predicting attractiveness"
          ],
          explain: "The debate moved from Singh's original claim to methodological critiques, cross-cultural counterexamples, and the rise of BMI as a competing predictor."
        },
        {
          type: "match",
          q: "Match each waist-to-hip ratio concept to its description.",
          pairs: [
            ["Ratio near 0.7", "The value Singh reported as most attractive for women"],
            ["Estrogen influence", "Hormone that promotes fat deposition on hips and thighs"],
            ["BMI confound", "Body-mass variable that can rival WHR in predicting attractiveness"]
          ],
          explain: "The 0.7 figure, its hormonal basis, and the competing role of overall body mass are the pillars of the WHR debate."
        }
      ]
    },
    {
      id: "l102",
      title: "Body Mass and BMI",
      intro: "Body mass index, weight scaled to height, predicts attractiveness strongly, and its optimum shifts with ecology and resource scarcity.",
      questions: [
        {
          type: "fill",
          q: "Body mass index is a person's weight divided by their height ____ (weight over height times height).",
          answer: "squared",
          accept: ["squared", "square", "squared (m^2)"],
          explain: "BMI = weight in kilograms divided by height in meters squared, a simple scale-free index of body mass."
        },
        {
          type: "mcq",
          q: "What did Tovee and colleagues argue about BMI versus waist-to-hip ratio in judging female body attractiveness?",
          choices: [
            "WHR explains nearly all the variance and BMI is irrelevant",
            "Neither BMI nor WHR relates to attractiveness",
            "BMI is often the stronger predictor of attractiveness ratings for real photographed bodies",
            "Only height matters, not mass"
          ],
          answer: 2,
          explain: "Tovee's group found that for images of real bodies, BMI typically accounts for more variance in attractiveness ratings than WHR does."
        },
        {
          type: "truefalse",
          q: "In populations facing food scarcity, heavier bodies tend to be preferred more than in food-secure populations.",
          answer: true,
          explain: "Cross-cultural work links resource scarcity to a preference for higher body weight, plausibly because body fat signals access to food and buffering."
        },
        {
          type: "mcq",
          q: "The shift in preferred body weight between resource-rich and resource-poor environments is best described as evidence of:",
          choices: [
            "A fixed, invariant beauty standard",
            "Ecologically sensitive, condition-dependent preferences",
            "Purely random variation with no pattern",
            "A cue unrelated to health"
          ],
          answer: 1,
          explain: "The pattern illustrates that mate preferences are calibrated by local ecology rather than being one fixed ideal everywhere."
        },
        {
          type: "truefalse",
          q: "Both very low and very high body mass tend to be rated less attractive, so BMI preferences follow a curve with an intermediate peak.",
          answer: true,
          explain: "Attractiveness usually peaks at a moderate BMI and declines toward both extremes, consistent with health costs at either end."
        },
        {
          type: "order",
          q: "Order these developments as the BMI-versus-WHR debate unfolded.",
          items: [
            "Singh emphasizes waist-to-hip ratio as the key body cue",
            "Tovee and colleagues test ratings of real photographed bodies",
            "BMI emerges as a stronger predictor than WHR for those images",
            "Preferred BMI is shown to shift with ecological conditions"
          ],
          explain: "Research moved from WHR's primacy, to tests on real bodies, to BMI's stronger predictive power, to evidence that its optimum is ecologically tuned."
        },
        {
          type: "match",
          q: "Match each idea to its description in the body-mass literature.",
          pairs: [
            ["BMI", "Weight scaled to height; a strong predictor of body attractiveness"],
            ["Resource scarcity effect", "Heavier bodies favored where food is uncertain"],
            ["Curvilinear preference", "Attractiveness peaks at moderate mass, falling at extremes"]
          ],
          explain: "BMI predicts ratings, ecology shifts the optimum, and the relationship is curved rather than always favoring thinner or heavier."
        }
      ]
    },
    {
      id: "l103",
      title: "Skin, Hair, and Health Cues",
      intro: "Beyond shape, the color and condition of skin and hair broadcast diet, oxygenation, and health, with carotenoid coloration a key honest signal.",
      questions: [
        {
          type: "mcq",
          q: "How does carotenoid coloration in skin act as a health cue?",
          choices: [
            "Carotenoids from fruits and vegetables give skin a golden-yellow tint linked to diet and immune health",
            "Carotenoids bleach the skin to signal age",
            "Carotenoids are produced only by disease",
            "Carotenoids have no measurable effect on skin color"
          ],
          answer: 0,
          explain: "Dietary carotenoid pigments add a yellowish hue that observers find healthy-looking, and because carotenoids also support immunity the color can be an honest signal."
        },
        {
          type: "truefalse",
          q: "Research by Stephen and colleagues found that increased skin redness from oxygenated blood can make faces look healthier.",
          answer: true,
          explain: "Stephen et al. showed that adding oxygenated-blood redness and carotenoid yellowness to face images increased rated healthiness."
        },
        {
          type: "fill",
          q: "Even, unblemished skin ____ (uniformity) is used by observers as a cue to a person's underlying health and age.",
          answer: "homogeneity",
          accept: ["homogeneity", "evenness", "uniformity", "texture"],
          explain: "Skin homogeneity, or evenness of tone and texture, cues health and youth; blotchiness and damage reduce perceived attractiveness."
        },
        {
          type: "mcq",
          q: "Why is glossy, well-maintained hair sometimes treated as a cue to condition?",
          choices: [
            "Hair grows only when a person is ill",
            "Hair color is unrelated to any physiological state",
            "Hair records months of growth, so its length and quality can reflect sustained health and nutrition",
            "Long hair guarantees high status in all cultures"
          ],
          answer: 2,
          explain: "Because hair grows slowly over months, its shine, strength, and length can integrate a record of nutrition, stress, and health over time."
        },
        {
          type: "truefalse",
          q: "Carotenoid skin coloration cannot be an honest signal because carotenoids are free and unlimited for everyone.",
          answer: false,
          explain: "Carotenoids are limited and must be traded off between coloration and immune or antioxidant functions, which is exactly what keeps the signal honest."
        },
        {
          type: "order",
          q: "Order how dietary carotenoids become a visible honest signal of condition.",
          items: [
            "A person eats a diet rich in carotenoid-containing fruits and vegetables",
            "Carotenoids circulate and are deposited in the skin, adding yellowness",
            "The same carotenoids are also drawn on for immune and antioxidant defense",
            "Skin color therefore honestly reflects both diet and health reserve"
          ],
          explain: "Because the pigment is limited and shared between coloration and immune defense, the resulting skin tone cannot be faked cheaply."
        },
        {
          type: "match",
          q: "Match each skin or hair cue to what it signals.",
          pairs: [
            ["Carotenoid yellowness", "Diet rich in fruit and vegetables plus immune reserve"],
            ["Oxygenated-blood redness", "Good circulation and cardiovascular condition"],
            ["Skin homogeneity", "Even tone signaling youth and health"]
          ],
          explain: "Carotenoid color, blood-oxygen redness, and skin evenness each convey distinct health-related information observers read as attractive."
        }
      ]
    },
    {
      id: "l104",
      title: "Ovulatory Cycle Effects",
      intro: "The ovulatory-shift hypothesis claimed women's mate preferences change near ovulation, but the field became a landmark case in psychology's replication crisis.",
      questions: [
        {
          type: "mcq",
          q: "What did the classic 'ovulatory shift hypothesis' predict?",
          choices: [
            "Women lose all mate preferences during ovulation",
            "Near ovulation, women show heightened preference for cues of male genetic quality such as facial masculinity and symmetry",
            "Men's preferences change across the female cycle",
            "Ovulation has no effect on any behavior"
          ],
          answer: 1,
          explain: "The hypothesis held that fertile-phase women would more strongly prefer good-genes cues (masculinity, symmetry, dominance), especially for short-term partners."
        },
        {
          type: "truefalse",
          q: "Many ovulatory-shift findings failed to replicate, and the area became a prominent example of psychology's replication crisis.",
          answer: true,
          explain: "Large preregistered studies and meta-analyses produced weak, inconsistent, or null effects, making cycle-shift research a cautionary replication case."
        },
        {
          type: "fill",
          q: "A study that specifies its hypotheses and analyses in advance to guard against flexible analysis is called a ____ study.",
          answer: "preregistered",
          accept: ["preregistered", "pre-registered", "registered"],
          explain: "Preregistration locks in predictions and methods beforehand; its adoption is what exposed how fragile many original cycle effects were."
        },
        {
          type: "mcq",
          q: "Which methodological problem was blamed for many early, inflated ovulatory-shift results?",
          choices: [
            "Samples that were far too large",
            "Small samples, imprecise ovulation timing, and analytic flexibility (researcher degrees of freedom)",
            "Refusal to publish any positive findings",
            "Using only preregistered designs from the start"
          ],
          answer: 1,
          explain: "Small underpowered samples, crude cycle-phase estimation, and many uncontrolled analytic choices produced false positives that later work could not confirm."
        },
        {
          type: "truefalse",
          q: "Because some cycle-shift effects did not replicate, researchers concluded the hormonal cycle has been proven to have no influence on any psychology whatsoever.",
          answer: false,
          explain: "Non-replication of specific preference shifts does not prove zero hormonal influence; it shows the original effects were overstated and need rigorous testing."
        },
        {
          type: "order",
          q: "Order the arc of ovulatory-shift research as it unfolded.",
          items: [
            "Early studies report fertile-phase preference shifts toward masculine, symmetric men",
            "The findings gain wide attention and theoretical elaboration",
            "Preregistered replications with better cycle measurement find weak or null effects",
            "The topic becomes a leading example in the replication crisis"
          ],
          explain: "The field moved from exciting early claims, to popularity, to rigorous replications that failed to confirm them, to status as a replication-crisis case study."
        },
        {
          type: "match",
          q: "Match each ovulatory-cycle research concept to its description.",
          pairs: [
            ["Ovulatory shift hypothesis", "Claim that fertile-phase preferences shift toward good-genes cues"],
            ["Replication crisis", "Widespread failure of published effects to reproduce"],
            ["Researcher degrees of freedom", "Analytic flexibility that can inflate false positives"]
          ],
          explain: "The hypothesis, its collapse under replication, and the analytic flexibility that inflated early effects are the core lessons of this literature."
        }
      ]
    }
  ]
});
