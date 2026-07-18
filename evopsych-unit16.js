window.ACADEMY.addUnit("evopsych", {
  id: "unit-16",
  title: "Aggression, Violence, and Homicide",
  color: "#7c5cff",
  icon: "⚔️",
  description: "Examines the evolved psychology of human conflict and its lethal extremes, from homicide data and the young male syndrome to honor, jealousy, infanticide, and coalitional warfare.",
  lessons: [
    {
      id: "l121",
      title: "Homicide as a Lens",
      intro: "How Martin Daly and Margo Wilson used homicide records as a precise window into the evolved psychology of human conflict.",
      questions: [
        {
          type: "mcq",
          q: "Who authored the influential 1988 book 'Homicide' that launched the evolutionary study of killing?",
          choices: ["Martin Daly and Margo Wilson", "David Buss and Todd Shackelford", "Napoleon Chagnon and Richard Wrangham", "Sarah Hrdy and Robert Trivers"],
          answer: 0,
          explain: "Martin Daly and Margo Wilson published 'Homicide' in 1988, pioneering the evolutionary analysis of lethal human conflict."
        },
        {
          type: "truefalse",
          q: "Daly and Wilson treated homicide mainly as an 'assay' of the conflicts that produce it, rather than as an adaptation designed for killing.",
          answer: true,
          explain: "They argued homicide is usually a byproduct or overshoot of conflict, and its reliable recording makes it a clean measure of what people fight over."
        },
        {
          type: "fill",
          q: "Because killings are among the most reliably ____ of all violent acts, Daly and Wilson used homicide data as a precise measure of human conflict.",
          answer: "recorded",
          accept: ["recorded", "documented", "reported"],
          explain: "Homicides are hard to conceal and heavily documented, giving researchers unusually clean data on serious conflict."
        },
        {
          type: "mcq",
          q: "Why did Daly and Wilson consider homicide a useful 'assay' of interpersonal conflict?",
          choices: ["Because most killings are premeditated for material gain", "Because homicides are consistently recorded and reveal what triggers deadly conflict", "Because homicide rates are identical in every society", "Because killers are a random sample of the population"],
          answer: 1,
          explain: "The reliability of homicide records lets researchers read off the typical sources and patterns of the most severe conflicts."
        },
        {
          type: "match",
          q: "Match each idea to its meaning in Daly and Wilson's approach.",
          pairs: [["Assay", "Using a measurable outcome to gauge a hidden process"], ["Byproduct", "A trait that is a side effect rather than a designed function"], ["Conflict of interest", "The evolutionary root of most disputes that turn lethal"]],
          explain: "Daly and Wilson read homicide as an assay of conflicts of interest, viewing most killing as a byproduct of those conflicts."
        },
        {
          type: "truefalse",
          q: "Daly and Wilson claimed natural selection directly favors killing one's own close kin as a routine strategy.",
          answer: false,
          explain: "They found close kin are strongly protected; killings concentrate among non-relatives, consistent with kin-selection theory."
        },
        {
          type: "order",
          q: "Put Daly and Wilson's reasoning in order.",
          items: ["Conflicts of interest exist between individuals", "These conflicts sometimes escalate to violence", "The most extreme cases end in homicide", "Reliable homicide records reveal the conflict patterns"],
          explain: "Their logic runs from evolved conflicts, to escalation, to lethal extremes, to reading those extremes as data on conflict."
        }
      ]
    },
    {
      id: "l122",
      title: "The Young Male Syndrome",
      intro: "Why young men worldwide take the greatest risks and commit the most competitive violence, the pattern Wilson and Daly named the young male syndrome.",
      questions: [
        {
          type: "mcq",
          q: "The phrase 'young male syndrome' was coined in a 1985 paper by:",
          choices: ["Wilson and Daly", "Buss and Shackelford", "Trivers and Hrdy", "Chagnon and Wrangham"],
          answer: 0,
          explain: "Margo Wilson and Martin Daly's 1985 paper 'Competitiveness, risk taking, and violence: the young male syndrome' named the pattern."
        },
        {
          type: "truefalse",
          q: "The young male syndrome describes elevated risk-taking and competitive aggression that peaks in young adult males.",
          answer: true,
          explain: "Risk-taking and status-driven violence spike in young men and decline with age and pair-bonding."
        },
        {
          type: "fill",
          q: "Because males historically had higher variance in reproductive success, sexual selection favored greater ____ -taking in young men competing for status and mates.",
          answer: "risk",
          accept: ["risk"],
          explain: "When the reproductive payoff distribution is riskier for males, selection favors bolder, more competitive behavior."
        },
        {
          type: "mcq",
          q: "Which evolutionary logic best explains the young male syndrome?",
          choices: ["Females compete more intensely than males for mates", "Higher male reproductive variance rewards competition and risk for status", "Aggression has no link to reproduction", "Older men reliably take the most risks"],
          answer: 1,
          explain: "Greater potential reproductive payoff, plus a greater risk of leaving no offspring, pushes young males toward competition and risk."
        },
        {
          type: "truefalse",
          q: "According to this account, dangerous competitiveness should increase steadily across a man's entire lifespan.",
          answer: false,
          explain: "It peaks in young adulthood and then declines; marriage, fatherhood, and age all dampen risky competition."
        },
        {
          type: "match",
          q: "Match each factor to its role in the young male syndrome.",
          pairs: [["Reproductive variance", "Higher in males, favoring competition"], ["Status", "A resource young men fight to gain or defend"], ["Age", "Risk-taking falls as men get older"]],
          explain: "Sexual selection on status, amplified by male reproductive variance and moderated by age, drives the syndrome."
        },
        {
          type: "order",
          q: "Order the causal chain of the young male syndrome.",
          items: ["Ancestral males varied widely in reproductive success", "Competition for status and mates intensified", "Young men evolved heightened risk-taking", "Competitive violence peaks in young adulthood"],
          explain: "The chain runs from reproductive variance to competition to evolved risk psychology to the observed young-adult peak."
        }
      ]
    },
    {
      id: "l123",
      title: "Age-Sex Homicide Curve",
      intro: "Across very different societies, the graph of who kills takes the same shape, a sharp young-male peak Daly and Wilson called astonishingly uniform.",
      questions: [
        {
          type: "mcq",
          q: "The age-sex distribution of same-sex homicide offenders peaks among:",
          choices: ["Older women", "Young adult men", "Middle-aged women", "Elderly men"],
          answer: 1,
          explain: "Offending rises steeply in adolescence, peaks in the early-to-mid twenties among men, then declines."
        },
        {
          type: "truefalse",
          q: "Daly and Wilson found the basic shape of the male age-homicide curve is remarkably similar across very different cultures.",
          answer: true,
          explain: "From Chicago to England to small-scale societies, the young-male peak recurs, suggesting a shared evolved psychology."
        },
        {
          type: "fill",
          q: "Most same-sex homicides are committed by men against other ____ .",
          answer: "men",
          accept: ["men", "males"],
          explain: "Male-male killings dominate same-sex homicide, reflecting intense intrasexual competition among men."
        },
        {
          type: "mcq",
          q: "Which statement about the age-sex homicide curve is TRUE?",
          choices: ["Women commit the large majority of homicides", "The offender peak occurs in early old age", "The peak occurs in young adulthood and the shape repeats across societies", "The curve differs completely in every culture"],
          answer: 2,
          explain: "The curve reliably peaks in young adulthood and keeps its shape across cultures, a signature of evolved conflict psychology."
        },
        {
          type: "truefalse",
          q: "The cross-cultural consistency of this curve is fully explained just by differences in local gun laws.",
          answer: false,
          explain: "Weapon availability changes overall rates, but the age-sex shape persists regardless, pointing to deeper causes."
        },
        {
          type: "order",
          q: "Order the male homicide-offending rate across the lifespan.",
          items: ["Low in childhood", "Rises sharply in adolescence", "Peaks in the early-to-mid twenties", "Declines through middle and older age"],
          explain: "The rate climbs at puberty, peaks in young adulthood, then falls, a robust developmental signature."
        },
        {
          type: "match",
          q: "Match each feature of the age-sex curve to its description.",
          pairs: [["Sex of offenders", "Overwhelmingly male"], ["Peak age", "Early-to-mid twenties"], ["Cross-cultural shape", "Strikingly similar worldwide"]],
          explain: "A young, male, cross-culturally uniform peak defines the age-sex homicide curve."
        }
      ]
    },
    {
      id: "l124",
      title: "Reputation and Honor",
      intro: "Many killings begin as trivial arguments over respect, showing why disputes about face and honor can turn lethal among men.",
      questions: [
        {
          type: "mcq",
          q: "Daly and Wilson noted that a large share of male-male homicides arise from:",
          choices: ["Carefully planned robberies", "Seemingly trivial altercations over status or 'face'", "Accidental weapon discharges", "Disputes over inheritance law"],
          answer: 1,
          explain: "So-called 'trivial altercations' over insults, challenges, and saving face account for many male-male killings."
        },
        {
          type: "truefalse",
          q: "In many such killings the stated cause is a minor insult or challenge to reputation rather than material gain.",
          answer: true,
          explain: "Status and reputation are the true stakes; the trigger is often a small slight escalated in front of an audience."
        },
        {
          type: "fill",
          q: "Nisbett and Cohen's 1996 book argued the U.S. South historically had a ____ of honor that lowered the threshold for violent responses to insults.",
          answer: "culture",
          accept: ["culture"],
          explain: "'Culture of Honor' (Nisbett and Cohen, 1996) tied herding-economy roots to stronger reactions to affronts."
        },
        {
          type: "mcq",
          q: "Why can a small insult escalate to killing in a status contest?",
          choices: ["A reputation for toughness deters future exploitation, so backing down is costly", "Insults cause direct physical harm", "Bystanders are legally required to intervene", "Material theft is always the real motive"],
          answer: 0,
          explain: "Where reputation governs safety and status, appearing weak invites future predation, raising the stakes of an affront."
        },
        {
          type: "truefalse",
          q: "An audience of onlookers tends to reduce the chance that a status dispute escalates to violence.",
          answer: false,
          explain: "Audiences raise the reputational stakes, making men less willing to back down and escalation more likely."
        },
        {
          type: "match",
          q: "Match each term to its meaning in honor-based violence.",
          pairs: [["Trivial altercation", "A minor dispute that escalates lethally"], ["Culture of honor", "Norms endorsing violent defense of reputation"], ["Face", "Public standing a man is unwilling to lose"]],
          explain: "Honor violence hinges on defending face; a culture of honor lowers the threshold, so trivial altercations turn deadly."
        },
        {
          type: "order",
          q: "Order how a status contest can escalate to homicide.",
          items: ["A public insult or challenge occurs", "Backing down would threaten reputation", "The confrontation escalates before an audience", "Violence results, sometimes lethal"],
          explain: "Escalation runs from affront, to reputational threat, to public showdown, to lethal outcome."
        }
      ]
    },
    {
      id: "l125",
      title: "Intimate Partner Violence",
      intro: "How male sexual proprietariness and jealousy underlie coercive control and violence against romantic partners.",
      questions: [
        {
          type: "mcq",
          q: "Wilson and Daly explained much intimate partner violence in terms of male sexual:",
          choices: ["Indifference", "Proprietariness", "Generosity", "Shyness"],
          answer: 1,
          explain: "They described 'male sexual proprietariness', treating a partner as owned, as a driver of jealousy, coercion, and violence."
        },
        {
          type: "truefalse",
          q: "Proprietary jealousy is frequently cited as a motive in the killing of wives and girlfriends.",
          answer: true,
          explain: "Sexual jealousy and control over a partner's fidelity recur as motives in intimate partner homicide."
        },
        {
          type: "fill",
          q: "The killing of a wife by her husband is called ____ .",
          answer: "uxoricide",
          accept: ["uxoricide"],
          explain: "Uxoricide, the killing of a wife, was a central focus of Daly and Wilson's analysis of proprietary violence."
        },
        {
          type: "mcq",
          q: "Which pattern fits the proprietary-jealousy account of partner violence?",
          choices: ["Risk to a woman drops sharply when she tries to leave", "Estrangement or a partner leaving can spike the risk of lethal violence", "Jealousy plays no role in these killings", "Only strangers are dangerous to women"],
          answer: 1,
          explain: "Actual or threatened separation often heightens danger, consistent with coercive control aimed at retaining a partner."
        },
        {
          type: "truefalse",
          q: "Coercive control includes non-physical tactics such as monitoring, isolation, and restricting a partner's autonomy.",
          answer: true,
          explain: "Coercion is broader than physical assault, encompassing surveillance and control that enforce proprietary claims."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Sexual proprietariness", "Treating a partner as an owned resource"], ["Coercive control", "Monitoring and restricting a partner's freedom"], ["Uxoricide", "Killing of a wife by her husband"]],
          explain: "Proprietariness motivates coercive control and, at its extreme, uxoricide."
        },
        {
          type: "mcq",
          q: "Male sexual proprietariness is best understood as linked to which recurrent ancestral problem?",
          choices: ["Uncertainty of paternity", "Excess of food", "Lack of predators", "A surplus of available mates"],
          answer: 0,
          explain: "Because males cannot be certain of paternity, selection may have favored mate-guarding psychology that, distorted, fuels control and violence."
        }
      ]
    },
    {
      id: "l126",
      title: "Infanticide Patterns",
      intro: "Sarah Blaffer Hrdy's work on infanticide, from langur monkeys to human parental decisions, reveals when and why offspring are harmed.",
      questions: [
        {
          type: "mcq",
          q: "Sarah Blaffer Hrdy's classic fieldwork documented sexually selected infanticide in which primate?",
          choices: ["Chimpanzees", "Hanuman langurs", "Gorillas", "Baboons"],
          answer: 1,
          explain: "Hrdy's study of Hanuman langurs at Abu (1977) documented males killing unrelated infants to hasten female fertility."
        },
        {
          type: "truefalse",
          q: "In langurs, an incoming male that kills nursing infants can bring females back into fertility sooner, benefiting his own reproduction.",
          answer: true,
          explain: "Removing a rival's infant ends lactational suppression, so the female cycles again, a sexually selected male strategy."
        },
        {
          type: "fill",
          q: "Daly and Wilson found children living with a step-parent face elevated risk, a pattern later dubbed the ____ effect.",
          answer: "cinderella",
          accept: ["cinderella"],
          explain: "The 'Cinderella effect' describes markedly higher abuse and infanticide risk for stepchildren than for genetic children."
        },
        {
          type: "mcq",
          q: "In humans, Daly and Wilson found the risk of being killed by a parent is elevated when:",
          choices: ["The family is wealthy", "The child is an only child", "A step-parent is in the household", "The child is genetically related to both parents"],
          answer: 2,
          explain: "Genetic parents invest more; the presence of a step-parent raises risk, consistent with discriminative parental solicitude."
        },
        {
          type: "truefalse",
          q: "Hrdy argued that human mothers are programmed for unconditional care regardless of their circumstances.",
          answer: false,
          explain: "In 'Mother Nature' (1999) Hrdy described maternal investment as conditional on support, resources, and infant viability."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [["Sexually selected infanticide", "Males killing unrelated young to gain mating access"], ["Cinderella effect", "Higher risk to children from step-parents"], ["Maternal ambivalence", "Conditional, circumstance-sensitive maternal investment"]],
          explain: "Hrdy's work spans male infanticide strategy and the conditional nature of maternal and parental investment."
        },
        {
          type: "order",
          q: "Order the langur sexually selected infanticide sequence.",
          items: ["A new male takes over the troop", "He kills unrelated nursing infants", "Females resume cycling sooner", "He fathers offspring with those females"],
          explain: "Takeover, infanticide, renewed fertility, and the male's own reproduction form the sexually selected sequence."
        }
      ]
    },
    {
      id: "l127",
      title: "Warfare and Raiding",
      intro: "Why male coalitions in small-scale societies raid rather than wage pitched battle, and what chimpanzees reveal about the roots of coalitional violence.",
      questions: [
        {
          type: "mcq",
          q: "Richard Wrangham's 'imbalance of power' hypothesis holds that coalitional killing occurs when:",
          choices: ["Two sides are evenly matched", "Females lead the raids", "Attackers can strike a lone or outnumbered victim at very low risk to themselves", "Weapons are unavailable"],
          answer: 2,
          explain: "Wrangham argued lethal raiding happens when an attacking coalition faces little risk, overwhelming a lone or outnumbered target."
        },
        {
          type: "truefalse",
          q: "Wrangham and Peterson's 'Demonic Males' (1996) drew parallels between chimpanzee coalitional raiding and human warfare.",
          answer: true,
          explain: "They argued male coalitional aggression has deep roots shared with chimpanzees, favoring low-risk raids over fair fights."
        },
        {
          type: "fill",
          q: "Napoleon Chagnon's long-term study of the ____ of Amazonia documented raiding, revenge, and links between violence and male status.",
          answer: "yanomamo",
          accept: ["yanomamo", "yanomami"],
          explain: "Chagnon's fieldwork among the Yanomamo described cycles of raiding and revenge tied to reputation and reproduction."
        },
        {
          type: "mcq",
          q: "Small-scale warfare tends to favor which tactic?",
          choices: ["Pitched, face-to-face battles with roughly equal losses", "Ambushes and raids that minimize attacker risk", "Single formal duels only", "Purely defensive fortification"],
          answer: 1,
          explain: "Ambush and raid tactics let coalitions inflict casualties while keeping their own risk low, the recurring pattern."
        },
        {
          type: "truefalse",
          q: "Coalitional raiding typically seeks fair, evenly matched confrontations.",
          answer: false,
          explain: "The opposite is true: attackers exploit imbalances of power and avoid costly symmetric battles."
        },
        {
          type: "order",
          q: "Order a typical low-risk raid.",
          items: ["A coalition of males forms", "They locate an isolated or outnumbered enemy", "They attack with overwhelming local advantage", "They withdraw with minimal casualties"],
          explain: "Forming, targeting the vulnerable, striking at advantage, and retreating safely define the raiding pattern."
        },
        {
          type: "match",
          q: "Match each idea to its meaning.",
          pairs: [["Imbalance-of-power hypothesis", "Attack when risk to attackers is low"], ["Coalitional aggression", "Cooperative group violence against outsiders"], ["Raiding", "Surprise attacks rather than open battle"]],
          explain: "Male coalitions exploiting power imbalances through surprise raids is the through-line of this research."
        }
      ]
    },
    {
      id: "l128",
      title: "Adaptation Versus Byproduct",
      intro: "The central debate: is lethal violence a specially designed adaptation, or a byproduct of psychological mechanisms built for other ends?",
      questions: [
        {
          type: "mcq",
          q: "Daly and Wilson generally argued that homicide itself is best viewed as:",
          choices: ["A byproduct or overshoot of mechanisms built for winning conflicts", "A precisely designed adaptation for killing", "Entirely learned with no evolved basis", "A purely random event"],
          answer: 0,
          explain: "They saw most homicide as a byproduct, with conflict and dominance psychology occasionally overshooting into killing."
        },
        {
          type: "mcq",
          q: "Buss and Shackelford's 'homicide adaptation theory' proposes that:",
          choices: ["Humans have no evolved conflict psychology", "Killing was, in some contexts, favored enough to shape dedicated adaptations", "Only byproducts can explain homicide", "Homicide has no fitness consequences"],
          answer: 1,
          explain: "Buss and Shackelford (2005) argued recurrent fitness benefits could have selected for context-specific homicide adaptations."
        },
        {
          type: "truefalse",
          q: "The adaptation-versus-byproduct debate concerns whether killing was directly selected for or is a side effect of other adaptations.",
          answer: true,
          explain: "That distinction, designed function versus incidental side effect, is exactly what the two camps dispute."
        },
        {
          type: "fill",
          q: "A trait that arises as an incidental side effect of another adaptation, rather than being selected for its own function, is called a ____ .",
          answer: "byproduct",
          accept: ["byproduct", "by-product", "by product"],
          explain: "A byproduct rides along with an adaptation without having been selected for its own effect."
        },
        {
          type: "truefalse",
          q: "Everyone in evolutionary psychology agrees that homicide is a directly selected adaptation.",
          answer: false,
          explain: "There is real disagreement: Daly and Wilson favor a byproduct view, while Buss and Shackelford defend dedicated adaptations."
        },
        {
          type: "match",
          q: "Match each position to its claim.",
          pairs: [["Byproduct view (Daly and Wilson)", "Killing is an overshoot of conflict psychology"], ["Homicide adaptation theory (Buss and Shackelford)", "Killing was directly favored in some contexts"], ["Adaptation", "A trait selected for its own function"]],
          explain: "The debate contrasts a byproduct account with a dedicated-adaptation account of homicide."
        },
        {
          type: "order",
          q: "Order the logic of testing whether a behavior is an adaptation.",
          items: ["Identify a recurrent ancestral problem", "Ask whether a mechanism shows special design to solve it", "Check for a byproduct explanation of the same behavior", "Weigh which account better fits the evidence"],
          explain: "Distinguishing adaptation from byproduct requires evidence of special design and ruling out incidental explanations."
        }
      ]
    }
  ]
});
