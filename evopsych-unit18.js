window.ACADEMY.addUnit("evopsych", {
  id: "unit-18",
  title: "Disgust and the Behavioral Immune System",
  color: "#7c5cff",
  icon: "🤢",
  description: "Explores how the emotion of disgust evolved to avoid pathogens and how that pathogen-avoidance psychology spills over into mate choice, morality, and prejudice.",
  lessons: [
    {
      id: "l137",
      title: "Three Domains of Disgust",
      intro: "Tybur, Lieberman, and Griskevicius (2009) argued that disgust splits into three functional domains: pathogen, sexual, and moral.",
      questions: [
        {
          type: "mcq",
          q: "The influential three-domain model of disgust (pathogen, sexual, and moral) was proposed in 2009 by which researchers?",
          choices: [
            "Freud and Jung",
            "Skinner and Watson",
            "Tybur, Lieberman, and Griskevicius",
            "Piaget and Vygotsky"
          ],
          answer: 2,
          explain: "Josh Tybur, Debra Lieberman, and Vladas Griskevicius (2009) proposed that disgust serves three distinct adaptive functions: pathogen, sexual, and moral."
        },
        {
          type: "match",
          q: "Match each domain of disgust to the adaptive problem it helps solve.",
          pairs: [
            ["Pathogen disgust", "Avoiding contact with infectious microbes"],
            ["Sexual disgust", "Avoiding biologically costly or low-value mates"],
            ["Moral disgust", "Avoiding social-norm violators and cheaters"]
          ],
          explain: "Each domain targets a different fitness threat: infection, poor mate choices, and social exploitation."
        },
        {
          type: "truefalse",
          q: "In the three-domain model, sexual and moral disgust are thought to share an evolutionary root in the older pathogen-avoidance system.",
          answer: true,
          explain: "The model proposes that disgust first evolved to avoid pathogens, then was recruited to also guide sexual and moral avoidance."
        },
        {
          type: "fill",
          q: "Feeling revolted by the thought of incest or of a partner who poses reproductive costs is an example of ____ disgust.",
          answer: "sexual",
          accept: ["sexual"],
          explain: "Sexual disgust motivates avoidance of mates and sexual acts that would be biologically costly, such as incest with close kin."
        },
        {
          type: "mcq",
          q: "Which reaction best illustrates pathogen disgust specifically?",
          choices: [
            "Disapproving of a politician who took a bribe",
            "Recoiling from rotting meat crawling with maggots",
            "Admiring a beautiful sunset",
            "Feeling proud after finishing a workout"
          ],
          answer: 1,
          explain: "Pathogen disgust is triggered by cues of infectious contamination, such as decaying flesh and maggots."
        },
        {
          type: "truefalse",
          q: "Moral disgust in this model is aimed at potential mates who would be poor reproductive investments.",
          answer: false,
          explain: "That description fits sexual disgust. Moral disgust targets social-norm violators such as cheaters and thieves."
        },
        {
          type: "order",
          q: "Order the three domains from most directly about physical infection to most about abstract social norms.",
          items: [
            "Pathogen disgust",
            "Sexual disgust",
            "Moral disgust"
          ],
          explain: "Pathogen disgust addresses direct infection, sexual disgust concerns mate choice (partly disease-relevant), and moral disgust polices social norms."
        }
      ]
    },
    {
      id: "l138",
      title: "The Behavioral Immune System",
      intro: "Mark Schaller coined the term 'behavioral immune system' for the psychology that helps us avoid pathogens before they ever enter the body.",
      questions: [
        {
          type: "mcq",
          q: "The term 'behavioral immune system' was coined by which psychologist?",
          choices: [
            "Paul Rozin",
            "David Buss",
            "Sigmund Freud",
            "Mark Schaller"
          ],
          answer: 3,
          explain: "Mark Schaller introduced the term to describe a suite of psychological mechanisms that detect and avoid pathogen threats."
        },
        {
          type: "truefalse",
          q: "The behavioral immune system acts before pathogens enter the body, whereas the classical physiological immune system acts after infection.",
          answer: true,
          explain: "The behavioral system is a first line of defense: it drives avoidance so infection never happens, sparing the costly physiological response."
        },
        {
          type: "fill",
          q: "Because it detects pathogens from surface cues and drives avoidance before infection, the behavioral immune system is best described as a ____ defense.",
          answer: "prophylactic",
          accept: ["prophylactic", "preventive", "preventative"],
          explain: "It is prophylactic (preventive): it heads off infection in advance rather than combating it after the fact."
        },
        {
          type: "mcq",
          q: "The behavioral immune system is biased toward false alarms. Following the 'smoke-detector principle,' why is this bias adaptive?",
          choices: [
            "False alarms conserve the most calories",
            "Pathogens no longer exist in the modern world",
            "Missing a real pathogen is far costlier than a needless avoidance",
            "It ensures perfectly accurate detection every time"
          ],
          answer: 2,
          explain: "When a miss can mean deadly infection and a false alarm just wastes a little effort, selection favors an oversensitive, error-prone system."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [
            ["Physiological immune system", "Costly internal response after infection"],
            ["Behavioral immune system", "Cheap avoidance triggered by external cues"],
            ["Disgust", "The core emotional output of the behavioral system"]
          ],
          explain: "The behavioral system is a cheap, cue-driven front line whose main emotional signal is disgust; the physiological system is the costly backup."
        },
        {
          type: "truefalse",
          q: "The behavioral immune system is metabolically more expensive than mounting a full physiological response to an active infection.",
          answer: false,
          explain: "Avoidance is cheap. Fighting an active infection (fever, inflammation, immune activation) is metabolically costly, which is why prevention is favored."
        },
        {
          type: "order",
          q: "Put the steps of the behavioral immune system in the order they typically occur.",
          items: [
            "A sensory cue of possible contamination is detected",
            "Disgust or aversion is triggered",
            "The individual avoids or withdraws from the source"
          ],
          explain: "Cue detection leads to an aversive emotional response, which motivates behavioral avoidance before any contact or infection."
        }
      ]
    },
    {
      id: "l139",
      title: "Disease-Avoidance Cues",
      intro: "The behavioral immune system reads rough surface cues of illness, which makes it powerful but prone to stigmatizing harmless people.",
      questions: [
        {
          type: "mcq",
          q: "A well-documented side effect of the behavioral immune system is that it can trigger avoidance of people who...",
          choices: [
            "Are visibly sneezing with a cold",
            "Have oozing, infected wounds",
            "Smell strongly of decay",
            "Have a visible disfigurement but pose no infection risk"
          ],
          answer: 3,
          explain: "Because the system relies on crude heuristics, it overgeneralizes and can stigmatize people with disabilities or disfigurements who are not contagious at all."
        },
        {
          type: "truefalse",
          q: "Because it relies on rough cues, the behavioral immune system produces many false positives, sometimes stigmatizing harmless individuals.",
          answer: true,
          explain: "Its oversensitive, heuristic design means many non-contagious people who merely look atypical can wrongly trigger avoidance."
        },
        {
          type: "fill",
          q: "Rashes, lesions, and unusual pallor act as visual ____ cues that the behavioral immune system uses to infer possible infection.",
          answer: "disease",
          accept: ["disease", "pathogen", "infection", "disgust"],
          explain: "Such anomalies serve as disease cues: heuristic signals that a person or object may carry pathogens."
        },
        {
          type: "match",
          q: "Match each perceptible cue to the disease threat the system infers from it.",
          pairs: [
            ["Facial lesions or rashes", "Possible skin infection"],
            ["Coughing and sneezing", "Airborne respiratory pathogen"],
            ["Foul body odor", "Rotting or infected tissue"]
          ],
          explain: "The system maps each surface cue onto a plausible pathogen threat and reacts with avoidance."
        },
        {
          type: "mcq",
          q: "Research by Park, Faulkner, and Schaller found that people high in chronic disease concern hold more negative implicit attitudes toward whom?",
          choices: [
            "People who exercise regularly",
            "Individuals with visible physical disabilities",
            "Professional athletes",
            "Fashion models"
          ],
          answer: 1,
          explain: "Their work showed that disease-avoidance psychology can fuel prejudice against people with physical disabilities, even though disability is not contagious."
        },
        {
          type: "truefalse",
          q: "The behavioral immune system is only ever triggered by cues that genuinely indicate a contagious disease.",
          answer: false,
          explain: "It is heuristic and overinclusive, so it also fires on harmless anomalies such as birthmarks, scars, or disabilities."
        },
        {
          type: "order",
          q: "Order how a harmless anomaly can end in unfair stigma.",
          items: [
            "A perceiver notices an anomalous body cue",
            "The cue is heuristically matched to a disease template",
            "Aversion and avoidance are triggered",
            "A harmless person may be unfairly stigmatized"
          ],
          explain: "An atypical cue is over-matched to a 'sick' template, producing avoidance and, at the social level, stigma toward people who pose no real risk."
        }
      ]
    },
    {
      id: "l140",
      title: "Pregnancy Sickness",
      intro: "Margie Profet proposed that so-called morning sickness is an adaptation that shields the vulnerable embryo from food-borne toxins.",
      questions: [
        {
          type: "mcq",
          q: "The hypothesis that 'morning sickness' evolved to protect the embryo from food-borne toxins was proposed by whom?",
          choices: [
            "Mark Schaller",
            "David Buss",
            "Margie Profet",
            "Paul Ekman"
          ],
          answer: 2,
          explain: "Margie Profet (1992) argued that pregnancy sickness is an evolved defense that reduces the embryo's exposure to teratogens and toxins."
        },
        {
          type: "truefalse",
          q: "Pregnancy sickness typically peaks during the first trimester, when the embryo's organs are forming and most vulnerable to toxins.",
          answer: true,
          explain: "Nausea and aversions peak early, aligning with organ formation, the window when toxins do the most developmental harm."
        },
        {
          type: "fill",
          q: "Profet argued that nausea and food aversions shield the vulnerable embryo during ____, the period of early organ formation.",
          answer: "organogenesis",
          accept: ["organogenesis", "organ formation"],
          explain: "Organogenesis, in the first trimester, is when developing organs are most easily damaged by toxins, so protection matters most then."
        },
        {
          type: "match",
          q: "Match each commonly aversive item to why avoiding it could protect the embryo.",
          pairs: [
            ["Bitter vegetables", "May contain plant toxins (phytochemicals)"],
            ["Meat and fish", "Higher risk of harmful microbes and parasites"],
            ["Caffeine and alcohol", "Known teratogens harmful to development"]
          ],
          explain: "Profet's hypothesis predicts aversion to exactly the foods most likely to carry toxins, pathogens, or teratogens."
        },
        {
          type: "mcq",
          q: "According to the toxin-avoidance hypothesis, first-trimester women should most develop aversions to which kind of food?",
          choices: [
            "Bland starches like plain bread and rice",
            "Strong-tasting, bitter, or pungent foods",
            "Sweet ripe fruits",
            "Plain water"
          ],
          answer: 1,
          explain: "Strong, bitter, or pungent flavors often signal plant toxins or spoilage, so the hypothesis predicts these are most avoided; bland starches are tolerated."
        },
        {
          type: "truefalse",
          q: "The toxin-avoidance hypothesis predicts that pregnancy sickness should be worst in the third trimester, just before birth.",
          answer: false,
          explain: "It predicts the opposite: sickness should peak in the first trimester during organogenesis, when toxins are most dangerous, and wane later."
        },
        {
          type: "order",
          q: "Order the three trimesters from most to least typical severity of pregnancy sickness.",
          items: [
            "First trimester",
            "Second trimester",
            "Third trimester"
          ],
          explain: "Nausea is usually highest early (protecting organ formation) and eases as pregnancy progresses, a pattern Flaxman and Sherman (2000) documented cross-culturally."
        }
      ]
    },
    {
      id: "l141",
      title: "Disgust Sensitivity Variation",
      intro: "How easily disgust is triggered varies widely between individuals and across cultures, shaped by sex, vulnerability, and local norms.",
      questions: [
        {
          type: "mcq",
          q: "Across most studies using the Disgust Scale, who tends to score higher in disgust sensitivity?",
          choices: [
            "Men score much higher on average",
            "Women score higher on average",
            "There are never any group differences",
            "Only elderly men score high"
          ],
          answer: 1,
          explain: "Women typically report higher disgust sensitivity, possibly reflecting the greater reproductive cost of infection during pregnancy and child-rearing."
        },
        {
          type: "truefalse",
          q: "Disgust sensitivity varies not only between individuals but also across cultures.",
          answer: true,
          explain: "Both individual traits and cultural learning shape how readily disgust is triggered and what specific things count as disgusting."
        },
        {
          type: "fill",
          q: "The widely used self-report instrument developed by Haidt, McCauley, and Rozin to measure this trait is called the ____ Scale.",
          answer: "disgust",
          accept: ["disgust"],
          explain: "The Disgust Scale (Haidt, McCauley, and Rozin, 1994) is the classic questionnaire measure of individual disgust sensitivity."
        },
        {
          type: "mcq",
          q: "Higher disgust sensitivity has been empirically associated with which of the following?",
          choices: [
            "Being taller than average",
            "Colorblindness",
            "Musical talent",
            "More socially conservative and cautious attitudes"
          ],
          answer: 3,
          explain: "Research links higher disgust sensitivity to more socially conservative attitudes, including stricter sexual and purity-related views."
        },
        {
          type: "match",
          q: "Match each source of variation to its effect on disgust sensitivity.",
          pairs: [
            ["Pregnancy (first trimester)", "Temporarily heightened disgust sensitivity"],
            ["Perceived vulnerability to disease", "Higher chronic disgust sensitivity"],
            ["Cultural norms", "Shape which specific things feel disgusting"]
          ],
          explain: "Sensitivity is tuned by reproductive state, felt vulnerability, and cultural learning about what is unclean."
        },
        {
          type: "truefalse",
          q: "Because disgust is an evolved response, every human being finds exactly the same things equally disgusting.",
          answer: false,
          explain: "The capacity for disgust is universal, but its intensity and its targets vary substantially across people and cultures."
        },
        {
          type: "fill",
          q: "Women's higher average disgust sensitivity may reflect the greater reproductive cost of infection during ____ and child-rearing.",
          answer: "pregnancy",
          accept: ["pregnancy"],
          explain: "Infection during pregnancy can harm the developing fetus, so heightened avoidance in women may have been favored by selection."
        }
      ]
    },
    {
      id: "l142",
      title: "Xenophobia and Contagion",
      intro: "Because unfamiliar out-groups may carry novel pathogens, the behavioral immune system can be recruited into fear and avoidance of foreigners.",
      questions: [
        {
          type: "mcq",
          q: "Faulkner, Schaller, and colleagues (2004) found that heightened disease concern predicts more negative attitudes toward whom?",
          choices: [
            "Close family members",
            "Familiar next-door neighbors",
            "Unfamiliar foreign out-groups",
            "One's own children"
          ],
          answer: 2,
          explain: "Their studies showed that both chronic and experimentally induced disease concern increased xenophobic attitudes toward unfamiliar foreign groups."
        },
        {
          type: "truefalse",
          q: "Parasite-stress theory proposes that regions with historically high pathogen loads tend to show stronger in-group favoritism and out-group avoidance.",
          answer: true,
          explain: "Fincher and Thornhill's parasite-stress theory links high pathogen prevalence to greater collectivism, conformity, and wariness of out-groups."
        },
        {
          type: "fill",
          q: "The theory linking regional pathogen prevalence to xenophobia, conformity, and collectivism is called ____-stress theory.",
          answer: "parasite",
          accept: ["parasite", "pathogen"],
          explain: "Parasite-stress theory argues that living with more infectious disease shapes cultures toward stronger in-group boundaries."
        },
        {
          type: "mcq",
          q: "Why might the behavioral immune system fuel avoidance of out-groups?",
          choices: [
            "Foreigners are inherently more infectious as a rule",
            "Out-groups may carry novel pathogens and follow unfamiliar hygiene and food norms",
            "In-group members are genetically immune to all disease",
            "Disease has no social dimension at all"
          ],
          answer: 1,
          explain: "Ancestrally, unfamiliar people could carry pathogens locals had no immunity to, and their differing customs could breach local disease-avoidance norms."
        },
        {
          type: "match",
          q: "Match each condition to its associated social outcome.",
          pairs: [
            ["High regional pathogen load", "Stronger collectivism and xenophobia"],
            ["Experimentally induced disease threat", "More negative attitudes toward foreigners"],
            ["Familiar in-group members", "Perceived as safer and lower disease risk"]
          ],
          explain: "Both chronic and momentary disease threat push attitudes toward in-group favoritism and out-group avoidance."
        },
        {
          type: "truefalse",
          q: "Making people feel safe and protected from disease has no effect on their attitudes toward immigrants or foreigners.",
          answer: false,
          explain: "Studies find the opposite: reducing disease threat (for example, after handwashing or vaccination reminders) softens prejudiced attitudes."
        },
        {
          type: "order",
          q: "Order the causal chain by which pathogen stress can feed prejudice.",
          items: [
            "Elevated pathogen threat in the environment",
            "Activation of the behavioral immune system",
            "Increased avoidance of unfamiliar out-groups",
            "Stronger xenophobic or ethnocentric attitudes"
          ],
          explain: "Perceived disease threat switches on avoidance psychology, which is directed at unfamiliar groups and can harden into ethnocentric attitudes."
        }
      ]
    },
    {
      id: "l143",
      title: "Moral Disgust",
      intro: "The visceral revulsion built for spoiled food and pathogens appears to have been recruited to react to violations of moral and social norms.",
      questions: [
        {
          type: "mcq",
          q: "Chapman and colleagues (2009) found the same facial muscle activates for bad tastes, disgusting images, AND unfair treatment. What does this suggest?",
          choices: [
            "Fairness perception is unrelated to disgust",
            "Physical and moral disgust use totally separate systems",
            "Moral disgust borrows the same machinery as physical disgust",
            "Facial muscles are irrelevant to emotion"
          ],
          answer: 2,
          explain: "Their 'In Bad Taste' study showed shared facial-muscle activation, evidence that moral disgust recruits the ancient food- and pathogen-rejection system."
        },
        {
          type: "truefalse",
          q: "Moral disgust is thought to be an evolutionary co-option of a system that originally evolved for food rejection and pathogen avoidance.",
          answer: true,
          explain: "Rozin and others argue that core disgust (for bad food and contamination) was later recruited to police social and moral violations."
        },
        {
          type: "fill",
          q: "In Haidt's moral foundations framework, moral disgust is most closely tied to violations of the ____ foundation.",
          answer: "purity",
          accept: ["purity", "sanctity", "purity/sanctity"],
          explain: "The purity/sanctity foundation, rooted in disgust, treats certain acts as degrading or defiling regardless of direct harm."
        },
        {
          type: "mcq",
          q: "Which of the following best exemplifies moral disgust rather than pathogen disgust?",
          choices: [
            "Gagging at the smell of spoiled milk",
            "Recoiling from a pile of feces",
            "Avoiding a stranger who is sneezing",
            "Feeling sickened by an act of cruel betrayal"
          ],
          answer: 3,
          explain: "Revulsion at moral violations such as betrayal or cruelty is moral disgust; the others are core pathogen disgust triggered by physical contaminants."
        },
        {
          type: "match",
          q: "Match each form of disgust (or its feature) to the correct description.",
          pairs: [
            ["Physical disgust", "Rejects contaminated food and pathogens"],
            ["Moral disgust", "Rejects norm violators and unfair acts"],
            ["Shared facial expression", "Nose wrinkle and raised upper lip"]
          ],
          explain: "Both forms rely on the same nose-wrinkling, lip-raising expression, hinting at their common evolutionary origin."
        },
        {
          type: "truefalse",
          q: "Because moral disgust and physical disgust feel completely different, they never share any bodily or facial expressions.",
          answer: false,
          explain: "They share the characteristic nose-wrinkle and raised-upper-lip expression, which is central evidence that one was built from the other."
        },
        {
          type: "order",
          q: "Order the proposed evolutionary expansion of disgust from its origin outward.",
          items: [
            "Disgust evolves to reject toxic or contaminated food",
            "It expands to guard against pathogens and physical contact",
            "It is recruited to react to sexual and interpersonal violations",
            "It comes to police abstract moral norms"
          ],
          explain: "Rozin's account traces disgust from core food rejection, out to contamination, and finally to interpersonal and moral policing."
        }
      ]
    },
    {
      id: "l144",
      title: "Contamination and Contagion Laws",
      intro: "Paul Rozin showed that modern disgust obeys ancient 'laws of sympathetic magic,' making people reject harmless things that merely resemble or touched a contaminant.",
      questions: [
        {
          type: "mcq",
          q: "The application of the anthropological 'laws of sympathetic magic' to modern disgust was pioneered by whom?",
          choices: [
            "Mark Schaller",
            "Paul Rozin",
            "David Buss",
            "Sigmund Freud"
          ],
          answer: 1,
          explain: "Paul Rozin (with Millman and Nemeroff, 1986) showed that disgust follows the laws of contagion and similarity described by early anthropologists."
        },
        {
          type: "truefalse",
          q: "The law of contagion holds that once two objects touch, properties can transfer and persist even after contact ends ('once in contact, always in contact').",
          answer: true,
          explain: "Contagion thinking treats a brief touch as permanently transferring an 'essence,' so the contact's effect lingers long after separation."
        },
        {
          type: "match",
          q: "Match each law or demonstration to its meaning.",
          pairs: [
            ["Law of contagion", "Once in contact, always in contact"],
            ["Law of similarity", "The image equals the object"],
            ["Brief cockroach contact", "Renders a whole glass of juice undrinkable"]
          ],
          explain: "Contagion transfers essence through touch; similarity equates an image with the real thing; both drive irrational disgust in Rozin's studies."
        },
        {
          type: "fill",
          q: "In Rozin's studies, people refused to eat fudge shaped like ____ even though they knew it was harmless, illustrating the law of similarity.",
          answer: "feces",
          accept: ["feces", "faeces", "dog feces", "poop", "dog poop"],
          explain: "By the law of similarity, an object that merely looks like feces is treated as if it were disgusting, despite being known to be safe fudge."
        },
        {
          type: "mcq",
          q: "A sterilized dead cockroach is briefly dipped in juice, and people then refuse to drink it. Which law does this demonstrate?",
          choices: [
            "The law of similarity",
            "The law of gravity",
            "The law of contagion",
            "The law of diminishing returns"
          ],
          answer: 2,
          explain: "This is the law of contagion: the brief contact is felt to have transferred a contaminating essence, even though the insect was sterile and harmless."
        },
        {
          type: "truefalse",
          q: "Rozin found that people are perfectly rational here and will happily drink juice a sterilized insect briefly touched, since it poses no real risk.",
          answer: false,
          explain: "People overwhelmingly refuse, even while admitting there is no real danger, showing that contagion-based disgust overrides rational judgment."
        },
        {
          type: "order",
          q: "Order the steps of the contagion effect Rozin documented.",
          items: [
            "A contaminant briefly contacts a clean object",
            "People believe an 'essence' has transferred",
            "The object is rejected as disgusting",
            "Rejection persists even after the contaminant is removed"
          ],
          explain: "A momentary touch is felt to pass on a lasting essence, so the object stays disgusting long after the contaminant itself is gone."
        }
      ]
    }
  ]
});
