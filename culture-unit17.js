window.ACADEMY.addUnit("culture", {
  id: "unit-17",
  title: "Cultures of Honor",
  color: "#e08a1e",
  icon: "⚔️",
  description: "Examines honor-based social logic and its psychological, physiological, and behavioral signatures across regions and history.",
  lessons: [
    {
      id: "l129",
      title: "Honor cultures defined",
      intro: "A culture of honor is a social system in which reputation must be defended, sometimes through retaliation, to secure one's standing and safety.",
      questions: [
        {
          type: "mcq",
          q: "In a culture of honor, what is a person's reputation primarily used to secure?",
          choices: [
            "Access to formal education",
            "Social standing, deterrence, and protection of self and property",
            "Membership in a religious order",
            "Eligibility for government pensions"
          ],
          answer: 1,
          explain: "Honor functions as a form of social currency: a strong reputation for toughness deters exploitation and protects a person's standing, family, and property."
        },
        {
          type: "truefalse",
          q: "In honor cultures, tolerating an insult without response can be socially costly because it signals weakness.",
          answer: true,
          explain: "Where reputation must be publicly defended, letting an insult pass can mark someone as an easy target, so responding to affronts is expected."
        },
        {
          type: "fill",
          q: "A culture of honor relies on the threat of ____ to enforce respect and deter would-be aggressors.",
          answer: "retaliation",
          accept: ["retaliation", "retribution", "revenge", "reprisal"],
          explain: "Because formal law is often weak or absent in these settings, the credible threat of personal retaliation is what keeps others from taking advantage."
        },
        {
          type: "mcq",
          q: "Honor cultures tend to arise most strongly under which social conditions?",
          choices: [
            "Strong central government and reliable police protection",
            "Abundant food and dense urban populations",
            "Weak rule of law where individuals must protect their own resources",
            "Widespread literacy and formal courts"
          ],
          answer: 2,
          explain: "When the state cannot reliably enforce order, individuals must build a reputation for defending themselves, which fuels honor-based norms."
        },
        {
          type: "match",
          q: "Match each concept to its role in a culture of honor.",
          pairs: [
            ["Reputation", "Social asset that must be publicly maintained"],
            ["Insult", "Challenge that threatens one's standing"],
            ["Retaliation", "Response that restores or defends honor"]
          ],
          explain: "Reputation is the asset, an insult is the threat to it, and retaliation is the mechanism used to defend or restore it."
        },
        {
          type: "truefalse",
          q: "Cultures of honor value passive acceptance of affronts as the highest social virtue.",
          answer: false,
          explain: "The opposite is true: honor cultures prize a willingness to defend oneself, and passively accepting affronts is seen as a loss of face."
        },
        {
          type: "order",
          q: "Order the typical honor-culture sequence from initial threat to social outcome.",
          items: [
            "A public insult or affront occurs",
            "The insulted party feels reputation is at stake",
            "A retaliatory or assertive response is made",
            "Social standing is defended or restored"
          ],
          explain: "The honor logic runs from affront, to perceived threat to reputation, to an assertive response, and finally to the defense of standing."
        }
      ]
    },
    {
      id: "l130",
      title: "Nisbett and Cohen",
      intro: "Richard Nisbett and Dov Cohen's research argued that the US South carries a distinctive culture of honor with measurable psychological effects.",
      questions: [
        {
          type: "mcq",
          q: "Which book by Richard Nisbett and Dov Cohen laid out the case for a Southern culture of honor?",
          choices: [
            "Culture of Honor: The Psychology of Violence in the South (1996)",
            "The Geography of Thought (2003)",
            "Thinking, Fast and Slow (2011)",
            "The Better Angels of Our Nature (2011)"
          ],
          answer: 0,
          explain: "Nisbett and Cohen published 'Culture of Honor: The Psychology of Violence in the South' in 1996, presenting their combined survey, archival, and experimental evidence."
        },
        {
          type: "truefalse",
          q: "Nisbett and Cohen argued that the US South has a culture of honor rooted in its history and social ecology.",
          answer: true,
          explain: "Their central thesis was that the South developed and retained an honor culture that shapes attitudes toward insults and violence."
        },
        {
          type: "fill",
          q: "Nisbett and Cohen traced the Southern culture of honor partly to early settlers from the Scots-Irish ____ regions of the British Isles.",
          answer: "herding",
          accept: ["herding", "herder", "pastoral", "livestock"],
          explain: "They argued that many Southern settlers came from herding backgrounds where defending mobile livestock encouraged an honor-based stance."
        },
        {
          type: "mcq",
          q: "According to Nisbett and Cohen, Southern attitudes toward violence are best described as approving of violence that is:",
          choices: [
            "Random and unprovoked",
            "Used for economic gain in robberies",
            "Defensive or in response to insults and threats to home and family",
            "Directed at strangers for entertainment"
          ],
          answer: 2,
          explain: "Their surveys showed Southerners were not generally more pro-violence, but were more approving of violence used for self-protection and to answer affronts."
        },
        {
          type: "match",
          q: "Match each Nisbett and Cohen research method to what it examined.",
          pairs: [
            ["Attitude surveys", "Approval of violence for self-defense or insults"],
            ["Archival homicide data", "Regional patterns in types of killings"],
            ["Laboratory experiment", "Physiological reactions to an insult"]
          ],
          explain: "They combined survey attitudes, archival homicide statistics, and controlled lab experiments to build a converging case."
        },
        {
          type: "truefalse",
          q: "Nisbett and Cohen claimed that Southerners are more approving of violence in every situation, including robbery and unprovoked attacks.",
          answer: false,
          explain: "Their evidence showed the difference was specific to honor-relevant, defensive, or insult-driven violence, not violence in general."
        },
        {
          type: "order",
          q: "Order the elements of Nisbett and Cohen's overall argument.",
          items: [
            "Historical roots in herding economies and weak law",
            "Transmission of honor norms across generations",
            "Distinctive attitudes approving defensive violence",
            "Measurable behavioral and physiological differences today"
          ],
          explain: "Their argument moves from historical origins, to cultural transmission, to present-day attitudes, and finally to observable modern effects."
        }
      ]
    },
    {
      id: "l131",
      title: "The herding hypothesis",
      intro: "The herding hypothesis proposes that economies dependent on movable livestock breed honor norms because herds can be stolen in an instant.",
      questions: [
        {
          type: "mcq",
          q: "Why does the herding hypothesis link livestock economies to cultures of honor?",
          choices: [
            "Herders have abundant free time to fight",
            "Livestock is movable wealth that can be rustled quickly, so a fierce reputation deters theft",
            "Farming produces more food surpluses than herding",
            "Herders never encounter strangers"
          ],
          answer: 1,
          explain: "A herd represents a family's entire wealth and can be driven off in minutes, so cultivating a reputation for retaliation deters would-be thieves."
        },
        {
          type: "truefalse",
          q: "The herding hypothesis argues that farmers, whose crops cannot be stolen instantly, face less pressure to develop honor norms than herders.",
          answer: true,
          explain: "Crops in the ground are hard to steal quickly, so farming communities face less need for a deterrent reputation than herders whose animals are easily rustled."
        },
        {
          type: "fill",
          q: "Because a herd can be driven away in moments, a herder's main protection is a reputation for a swift and credible ____ response.",
          answer: "retaliatory",
          accept: ["retaliatory", "aggressive", "violent", "retaliation"],
          explain: "Deterrence in herding societies depends on the believable threat that any theft will be met with a forceful, retaliatory response."
        },
        {
          type: "mcq",
          q: "Which group did Nisbett and Cohen highlight as bringing herding-based honor norms to the American South?",
          choices: [
            "Puritan farmers of New England",
            "Dutch traders of New Amsterdam",
            "Scots-Irish settlers from herding regions of Britain and Ireland",
            "French Huguenot artisans"
          ],
          answer: 2,
          explain: "They pointed to Scots-Irish immigrants from pastoral, herding backgrounds who settled the Southern backcountry and carried honor norms with them."
        },
        {
          type: "match",
          q: "Match each economy to the theft-risk logic the herding hypothesis assigns it.",
          pairs: [
            ["Herding", "Wealth is mobile and vulnerable to rapid theft"],
            ["Farming", "Wealth is fixed and hard to steal quickly"],
            ["Honor norms", "Stronger where wealth is easily and suddenly lost"]
          ],
          explain: "The hypothesis ties the strength of honor norms to how quickly a family's wealth can be seized, which is high for herders and low for farmers."
        },
        {
          type: "truefalse",
          q: "The herding hypothesis claims that terrain suitable for farming, such as fertile lowlands, tends to strengthen cultures of honor.",
          answer: false,
          explain: "It predicts the reverse: rugged terrain suited to herding, not fertile farmland, is where honor norms are expected to be strongest."
        },
        {
          type: "order",
          q: "Order the causal chain proposed by the herding hypothesis.",
          items: [
            "Land suits herding rather than crop farming",
            "Livestock wealth is easily stolen",
            "Families cultivate reputations for retaliation",
            "Honor norms take root in the culture"
          ],
          explain: "The chain runs from herding ecology, to vulnerable mobile wealth, to reputations for retaliation, to entrenched honor norms."
        }
      ]
    },
    {
      id: "l132",
      title: "The insult experiment",
      intro: "In a landmark experiment, Cohen and colleagues insulted men in a hallway and measured how Southerners reacted physiologically and behaviorally.",
      questions: [
        {
          type: "mcq",
          q: "In the Cohen and Nisbett insult experiment (1996), how were participants provoked?",
          choices: [
            "They were shown violent film clips",
            "A confederate bumped them and called them a demeaning name in a hallway",
            "They were given failing grades on a test",
            "They were excluded from a group game"
          ],
          answer: 1,
          explain: "A confederate bumped each participant and muttered an insulting slur, staging a real affront to test honor-culture reactions."
        },
        {
          type: "truefalse",
          q: "After being insulted, Southern participants showed larger rises in cortisol and testosterone than Northern participants.",
          answer: true,
          explain: "Insulted Southerners had bigger spikes in cortisol (a stress hormone) and testosterone (linked to aggression and dominance) than insulted Northerners."
        },
        {
          type: "fill",
          q: "The insult experiment measured the stress hormone ____ and the hormone testosterone from participants' saliva.",
          answer: "cortisol",
          accept: ["cortisol"],
          explain: "Researchers assayed saliva for cortisol, which rises with stress and threat, and testosterone, which is associated with aggression and dominance."
        },
        {
          type: "mcq",
          q: "What did the rise in testosterone among insulted Southerners suggest to the researchers?",
          choices: [
            "They were preparing for calm negotiation",
            "They were physiologically primed for aggression and dominance displays",
            "They had become sleepy and disengaged",
            "They felt no reaction to the insult"
          ],
          answer: 1,
          explain: "Elevated testosterone signaled a readiness for aggressive, dominance-oriented behavior, consistent with defending threatened honor."
        },
        {
          type: "match",
          q: "Match each measure in the insult experiment to what it indexed.",
          pairs: [
            ["Cortisol", "Stress and perceived threat"],
            ["Testosterone", "Aggression and dominance readiness"],
            ["The 'chicken' or handshake task", "Willingness to act tough or dominant afterward"]
          ],
          explain: "Cortisol tracked stress, testosterone tracked aggressive priming, and follow-up behavioral tasks captured how tough or dominant participants then acted."
        },
        {
          type: "truefalse",
          q: "Northern participants reacted to the same insult with hormone spikes just as large as Southern participants.",
          answer: false,
          explain: "Northerners were more likely to shrug off the insult, showing much smaller hormonal and behavioral reactions than Southerners."
        },
        {
          type: "order",
          q: "Order the stages of the insult experiment procedure.",
          items: [
            "Participant walks down a narrow hallway",
            "A confederate bumps and insults him",
            "Saliva is sampled for cortisol and testosterone",
            "Behavior in a follow-up task is observed"
          ],
          explain: "The study staged the hallway bump and insult, then measured hormonal responses, then assessed subsequent behavior."
        }
      ]
    },
    {
      id: "l133",
      title: "Southern violence patterns",
      intro: "Archival data showed the South's higher homicide rates concentrate in argument-related killings rather than felony-related ones.",
      questions: [
        {
          type: "mcq",
          q: "According to Nisbett and Cohen's archival data, the South's elevated homicide rate was driven mainly by which type of killing?",
          choices: [
            "Felony-related homicides during robberies",
            "Argument- and conflict-related homicides over insults or disputes",
            "Accidental deaths",
            "Killings by strangers for money"
          ],
          answer: 1,
          explain: "The regional gap was concentrated in argument-related homicides, the kind that arise from honor disputes, not in felony-related killings."
        },
        {
          type: "truefalse",
          q: "The data showed that Southern and non-Southern regions differed little in felony-related homicide rates but diverged in argument-related ones.",
          answer: true,
          explain: "Felony-related homicide rates were similar across regions, while argument-related homicides, tied to honor, were notably higher in the South."
        },
        {
          type: "fill",
          q: "The honor-culture interpretation predicts higher rates of ____-related homicide, which stem from insults and personal disputes.",
          answer: "argument",
          accept: ["argument", "argument", "conflict", "dispute"],
          explain: "Argument-related homicides grow out of quarrels and affronts, exactly the situations where honor norms press people toward violence."
        },
        {
          type: "mcq",
          q: "Why was the argument-versus-felony distinction important for the honor-culture argument?",
          choices: [
            "It proved Southerners were more criminal overall",
            "It showed the violence was tied to defending reputation, not to greed or predation",
            "It showed the South had more poverty",
            "It showed felony homicides were undercounted"
          ],
          answer: 1,
          explain: "By isolating argument-related killings, the data suggested the excess violence flowed from honor disputes rather than from general criminality or economic predation."
        },
        {
          type: "match",
          q: "Match each homicide type to how it fits the honor-culture account.",
          pairs: [
            ["Argument-related", "Elevated in the South, fits honor logic"],
            ["Felony-related", "Similar across regions, not honor-driven"],
            ["Rural small-town South", "Where the honor pattern appeared strongest"]
          ],
          explain: "Argument-related killings were the honor-linked excess, felony killings were regionally similar, and the pattern was clearest in smaller Southern towns."
        },
        {
          type: "truefalse",
          q: "Nisbett and Cohen concluded that the South's higher homicide rate was mostly explained by robbery and other felony crimes.",
          answer: false,
          explain: "They concluded the opposite: the excess came from argument-related, honor-linked homicides, not from felony-related crime."
        },
        {
          type: "order",
          q: "Order the reasoning from data to conclusion in the homicide analysis.",
          items: [
            "Separate homicides into argument-related and felony-related",
            "Compare Southern and non-Southern rates for each type",
            "Find the gap lies in argument-related killings",
            "Infer honor norms, not general criminality, drive the difference"
          ],
          explain: "The analysis split homicides by type, compared regions, located the gap in argument-related cases, and inferred an honor-based cause."
        }
      ]
    },
    {
      id: "l134",
      title: "Honor and gender",
      intro: "In many honor cultures, family reputation is bound to the sexual purity and conduct of its women, producing sharply gendered honor codes.",
      questions: [
        {
          type: "mcq",
          q: "In classic honor cultures, male and female honor typically take which contrasting forms?",
          choices: [
            "Both are based on wealth alone",
            "Male honor rests on toughness and defense; female honor rests on chastity and modesty",
            "Female honor rests on physical strength; male honor on beauty",
            "Neither gender's honor matters socially"
          ],
          answer: 1,
          explain: "Male honor is commonly tied to courage, strength, and the ability to protect, while female honor centers on sexual purity, modesty, and fidelity."
        },
        {
          type: "truefalse",
          q: "In many honor cultures, a woman's perceived sexual conduct can affect the reputation of her entire family.",
          answer: true,
          explain: "Female purity is often treated as collective family honor, so a woman's perceived conduct can raise or damage the standing of male relatives too."
        },
        {
          type: "fill",
          q: "In gendered honor codes, a woman's ____ is often treated as central to the honor of her whole family.",
          answer: "purity",
          accept: ["purity", "chastity", "virginity", "modesty", "sexual purity"],
          explain: "Female sexual purity or chastity is frequently the linchpin of family honor, making its protection a family-wide concern."
        },
        {
          type: "mcq",
          q: "So-called 'honor killings' are best understood as:",
          choices: [
            "Random acts of violence with no social meaning",
            "Violence, often against women, framed as restoring family honor after perceived transgressions",
            "Legal executions carried out by courts",
            "A practice unique to a single country"
          ],
          answer: 1,
          explain: "Honor killings are acts of violence, usually targeting women, that perpetrators justify as restoring family honor after alleged sexual or behavioral transgressions."
        },
        {
          type: "match",
          q: "Match each gendered honor element to its typical description.",
          pairs: [
            ["Male honor", "Strength, courage, and capacity to defend"],
            ["Female honor", "Chastity, modesty, and sexual reputation"],
            ["Family honor", "Collective standing shaped by members' conduct"]
          ],
          explain: "Honor codes assign toughness to men, purity to women, and treat the family's collective standing as dependent on both."
        },
        {
          type: "truefalse",
          q: "In strongly gendered honor cultures, men and women are judged by exactly the same standards of honor.",
          answer: false,
          explain: "These cultures apply asymmetric standards: men are judged on toughness and protection, women largely on chastity and modesty."
        },
        {
          type: "order",
          q: "Order the honor-and-gender logic as often described in these cultures.",
          items: [
            "Female purity is defined as central to family honor",
            "A woman's conduct is perceived as violating that purity",
            "The family's collective reputation is seen as damaged",
            "Male relatives feel pressure to restore honor"
          ],
          explain: "The gendered logic ties purity to honor, treats a perceived violation as collective damage, and places restoration pressure on male kin."
        }
      ]
    },
    {
      id: "l135",
      title: "Mediterranean and Middle Eastern honor",
      intro: "Ethnographers documented honor-and-shame complexes across Mediterranean and Middle Eastern societies, offering comparative support for honor theory.",
      questions: [
        {
          type: "mcq",
          q: "Anthropologists have long described an 'honor-and-shame' complex in which region?",
          choices: [
            "Scandinavia and the Baltic",
            "The Mediterranean and the Middle East",
            "Coastal Japan",
            "The Canadian Arctic"
          ],
          answer: 1,
          explain: "Classic ethnography documented a widespread honor-and-shame complex around the Mediterranean and into the Middle East, a key comparative case for honor theory."
        },
        {
          type: "truefalse",
          q: "Comparative ethnographic evidence from multiple world regions strengthens the claim that honor cultures share recurring features.",
          answer: true,
          explain: "Finding similar honor-and-shame patterns across the Mediterranean, Middle East, and US South suggests honor cultures share common structural features."
        },
        {
          type: "fill",
          q: "In many Mediterranean and Middle Eastern societies, honor is paired with its opposite pole, ____, which marks a loss of social esteem.",
          answer: "shame",
          accept: ["shame", "dishonor"],
          explain: "Ethnographers describe an honor-and-shame system, where shame is the negative counterpart that follows a failure to defend one's honor."
        },
        {
          type: "mcq",
          q: "One reason many Mediterranean and Middle Eastern honor systems resemble the US Southern pattern is that both often had:",
          choices: [
            "Strong centralized states with reliable policing",
            "Pastoral or herding economies and periods of weak state control",
            "Fully industrialized urban economies",
            "No concept of family reputation"
          ],
          answer: 1,
          explain: "Many of these regions historically combined herding economies with weak central authority, the same social ecology honor theory links to strong honor norms."
        },
        {
          type: "match",
          q: "Match each region to its role in the comparative honor literature.",
          pairs: [
            ["Mediterranean societies", "Classic ethnographies of honor and shame"],
            ["Middle East", "Documented honor codes tied to family reputation"],
            ["US South", "Modern psychological studies of honor"]
          ],
          explain: "Mediterranean and Middle Eastern ethnography and Southern US psychology together form the comparative evidence base for honor theory."
        },
        {
          type: "truefalse",
          q: "Cross-cultural evidence suggests that honor cultures appear in only one part of the world and nowhere else.",
          answer: false,
          explain: "Honor cultures have been documented across many regions, including the Mediterranean, Middle East, and US South, not a single locale."
        },
        {
          type: "order",
          q: "Order the logic of using comparative ethnography to support honor theory.",
          items: [
            "Study honor norms in several distinct regions",
            "Identify recurring honor-and-shame features",
            "Note shared conditions such as herding and weak states",
            "Conclude honor cultures share common causes"
          ],
          explain: "Comparative work observes multiple regions, finds recurring features, links them to shared conditions, and infers common causes."
        }
      ]
    },
    {
      id: "l136",
      title: "Honor ideology and policy",
      intro: "Honor-culture ideology extends beyond duels and feuds into modern attitudes about self-protection, guns, and how institutions respond to threats.",
      questions: [
        {
          type: "mcq",
          q: "Research on honor ideology suggests that stronger honor beliefs are associated with more supportive attitudes toward:",
          choices: [
            "Strict gun control and disarmament",
            "Gun ownership and the right to armed self-protection",
            "Abolishing self-defense laws",
            "Banning all personal weapons"
          ],
          answer: 1,
          explain: "Honor ideology emphasizes self-reliance in protection, and studies link it to stronger support for gun ownership and armed self-defense."
        },
        {
          type: "truefalse",
          q: "Honor-culture attitudes emphasize protecting oneself and one's family rather than relying solely on authorities.",
          answer: true,
          explain: "A core theme of honor ideology is self-protection: individuals feel personally responsible for defending self, family, and property."
        },
        {
          type: "fill",
          q: "Honor ideology stresses personal ____-protection, the idea that one must be ready to defend oneself and one's family.",
          answer: "self",
          accept: ["self", "self-protection"],
          explain: "The emphasis on self-protection reflects the honor-culture belief that safety ultimately depends on one's own readiness to respond to threats."
        },
        {
          type: "mcq",
          q: "In studies of institutional responses, how have honor-state schools tended to react to threats such as bullying or perceived provocation?",
          choices: [
            "With more lenient responses than non-honor states",
            "With harsher or more punitive responses, consistent with defending against affronts",
            "By ignoring the incidents entirely",
            "With identical policies regardless of region"
          ],
          answer: 1,
          explain: "Research (for example, by Brown and colleagues) found schools in honor states tended toward harsher, more punitive responses, mirroring honor logic about answering threats."
        },
        {
          type: "match",
          q: "Match each honor-ideology theme to a modern attitude or policy it predicts.",
          pairs: [
            ["Self-protection", "Support for armed self-defense"],
            ["Answering affronts", "Harsher institutional responses to threats"],
            ["Reputation defense", "Reluctance to appear weak or back down"]
          ],
          explain: "Honor themes map onto modern attitudes: self-protection to gun support, answering affronts to punitive responses, and reputation defense to standing firm."
        },
        {
          type: "truefalse",
          q: "Honor-culture research applies only to historical duels and has no connection to present-day attitudes or institutional policy.",
          answer: false,
          explain: "Honor-culture concepts extend to contemporary findings on gun attitudes, self-defense beliefs, and how institutions like schools respond to threats."
        },
        {
          type: "order",
          q: "Order how honor ideology is thought to translate into modern policy attitudes.",
          items: [
            "Honor culture stresses self-reliant protection",
            "Individuals endorse readiness to defend self and family",
            "This supports pro-gun and self-defense attitudes",
            "Institutions adopt firmer, more punitive threat responses"
          ],
          explain: "Honor ideology moves from self-reliant protection, to personal defense readiness, to pro-self-defense attitudes, to tougher institutional responses."
        }
      ]
    }
  ]
});
