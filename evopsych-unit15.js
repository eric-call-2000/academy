window.ACADEMY.addUnit("evopsych", {
  id: "unit-15",
  title: "Parent–Offspring Relations and Conflict",
  color: "#7c5cff",
  icon: "👶",
  description: "How genetic self-interest creates conflict over investment between parents, offspring, siblings, and even genes, including stepparent risk and grandparental bias.",
  lessons: [
    {
      id: "l113",
      title: "Parent-Offspring Conflict",
      intro: "Robert Trivers showed in 1974 that because parents and offspring are unequally related to kin, they are selected to disagree over how much a parent should invest.",
      questions: [
        {
          type: "mcq",
          q: "Who formalized parent-offspring conflict theory in 1974?",
          choices: ["Robert Trivers", "W. D. Hamilton", "David Haig", "Martin Daly"],
          answer: 0,
          explain: "Robert Trivers published 'Parent-Offspring Conflict' in American Zoologist in 1974."
        },
        {
          type: "truefalse",
          q: "A mother is equally related (r = 0.5) to each of her offspring, yet each offspring is more related to itself than to a full sibling.",
          answer: true,
          explain: "A parent shares r = 0.5 with every child, while an individual shares r = 1 with itself and only 0.5 with a full sib, creating asymmetric interests."
        },
        {
          type: "fill",
          q: "From an offspring's genetic point of view, it is related to itself by r = ____ but to a full sibling by only 0.5.",
          answer: "1",
          accept: ["1", "1.0", "one"],
          explain: "An individual is related to itself by 1, so it values its own welfare above a sibling's, which is only 0.5."
        },
        {
          type: "mcq",
          q: "The core of parent-offspring conflict is disagreement over ____.",
          choices: ["the sex of the offspring", "how much investment the parent should give", "which parent provides care", "the number of grandchildren"],
          answer: 1,
          explain: "Offspring are selected to demand more investment than parents are selected to provide."
        },
        {
          type: "truefalse",
          q: "Trivers argued that offspring should always accept exactly the level of investment that maximizes the parent's fitness.",
          answer: false,
          explain: "Offspring are selected to demand MORE than the parental optimum, because they weight their own interests more heavily than the parent does."
        },
        {
          type: "match",
          q: "Match each relationship with its coefficient of relatedness (r).",
          pairs: [["Self", "1.0"], ["Full sibling", "0.5"], ["Half sibling", "0.25"], ["Parent to child", "0.5"]],
          explain: "These r values drive the asymmetry: an offspring values itself (1.0) above a full sib (0.5), while a parent values all children equally (0.5)."
        },
        {
          type: "order",
          q: "Order the logic of parent-offspring conflict from premise to prediction.",
          items: ["A parent is equally related to all its offspring", "Each offspring values itself more than its siblings", "Offspring are selected to demand extra investment", "Parent and offspring conflict over the optimum"],
          explain: "Equal parental relatedness plus offspring self-favoritism produces demands above the parental optimum, and hence conflict."
        }
      ]
    },
    {
      id: "l114",
      title: "Weaning Conflict",
      intro: "Weaning conflict is the textbook example of parent-offspring conflict: mother and young are selected to battle over when nursing should end.",
      questions: [
        {
          type: "mcq",
          q: "Weaning conflict is fundamentally a dispute over ____.",
          choices: ["when the mother should stop nursing", "which nipple the infant uses", "the infant's diet after weaning", "how many siblings to have"],
          answer: 0,
          explain: "The offspring is selected to prolong nursing, while the mother is selected to stop and invest in future young."
        },
        {
          type: "truefalse",
          q: "The mother is selected to prolong nursing far beyond the point that benefits her future reproduction.",
          answer: false,
          explain: "The mother is selected to STOP nursing so she can invest in future offspring; it is the current offspring that wants nursing prolonged."
        },
        {
          type: "fill",
          q: "Infant temper ____ can be understood as manipulation aimed at extracting continued parental investment.",
          answer: "tantrums",
          accept: ["tantrums", "tantrum"],
          explain: "Trivers interpreted tantrums as offspring tactics to psychologically pressure parents into more investment."
        },
        {
          type: "mcq",
          q: "Why does the current offspring 'want' more nursing than the mother is selected to give?",
          choices: ["It can never digest solid food", "It is related to future siblings by only 0.5 or less, so it discounts their welfare", "The mother produces too little milk", "It is related to itself by only 0.5"],
          answer: 1,
          explain: "Because the offspring values a future sibling (r at most 0.5) less than itself, it discounts the mother's future reproduction and demands more now."
        },
        {
          type: "truefalse",
          q: "Weaning conflict arises in mammals because lactation is a limited maternal resource that trades off against future offspring.",
          answer: true,
          explain: "Milk is costly, and time spent nursing one infant delays the next, setting up the conflict."
        },
        {
          type: "order",
          q: "Put the weaning-conflict sequence in order.",
          items: ["Mother nurses the current infant", "Mother's optimum shifts to investing in the next offspring", "Infant resists with begging or tantrums", "Weaning eventually occurs near the mother's optimum"],
          explain: "The mother moves toward ending nursing, the infant resists, and weaning settles closer to the maternal optimum."
        },
        {
          type: "match",
          q: "Match each party with what it 'prefers' during weaning.",
          pairs: [["Current offspring", "Continue nursing longer"], ["Mother", "End nursing sooner"], ["Future sibling (indirectly)", "The mother's conserved resources"]],
          explain: "The offspring favors more milk now, the mother favors stopping, and future offspring gain from resources the mother saves."
        }
      ]
    },
    {
      id: "l115",
      title: "Genomic Imprinting",
      intro: "David Haig's kinship theory explains genomic imprinting as a tug-of-war between paternally and maternally inherited genes over how much the fetus draws from the mother.",
      questions: [
        {
          type: "mcq",
          q: "Genomic imprinting means that a gene's expression depends on ____.",
          choices: ["the offspring's sex", "which parent it was inherited from", "the mother's age", "random chance alone"],
          answer: 1,
          explain: "Imprinted genes are expressed differently depending on their parent of origin."
        },
        {
          type: "mcq",
          q: "Under Haig's theory, paternally expressed genes in the fetus tend to ____.",
          choices: ["restrain fetal growth to conserve maternal resources", "have no effect on growth", "promote extraction of more resources from the mother", "silence all maternal genes"],
          answer: 2,
          explain: "Paternally derived genes favor greater demand on the mother, because the father may not sire her future offspring."
        },
        {
          type: "truefalse",
          q: "Maternally expressed imprinted genes tend to restrain fetal demands to conserve the mother's resources for future offspring.",
          answer: true,
          explain: "The mother is equally related to all her offspring, so her genes favor balanced investment and tend to limit the fetus's draw."
        },
        {
          type: "fill",
          q: "In mice the growth-promoting gene ____ is paternally expressed, while its maternally expressed antagonist Igf2r suppresses growth.",
          answer: "igf2",
          accept: ["igf2", "insulin-like growth factor 2", "insulin-like growth factor 2 (igf2)"],
          explain: "Paternally expressed Igf2 boosts growth while maternally expressed Igf2r degrades the IGF2 protein, exactly the tug-of-war Haig predicted."
        },
        {
          type: "truefalse",
          q: "Haig's kinship theory predicts that the paternal and maternal genomes have identical interests in fetal growth.",
          answer: false,
          explain: "The theory's whole point is that their interests DIFFER, producing conflict expressed through imprinting."
        },
        {
          type: "match",
          q: "Match each imprinting item with its role.",
          pairs: [["Paternally expressed genes", "Push for more maternal investment"], ["Maternally expressed genes", "Rein in fetal demand"], ["David Haig", "Proposed the kinship theory of imprinting"]],
          explain: "Paternal genes take more, maternal genes conserve, and Haig framed this as the kinship theory of genomic imprinting."
        },
        {
          type: "order",
          q: "Order the reasoning of Haig's genomic tug-of-war.",
          items: ["A father may not sire the mother's future offspring", "Paternal genes favor taking more from this mother now", "Maternal genes favor conserving resources across all her offspring", "Opposing imprinted genes co-exist within one fetus"],
          explain: "Uncertain future paternity makes paternal genes greedy and maternal genes thrifty, leaving both sets tugging inside the same genome."
        }
      ]
    },
    {
      id: "l116",
      title: "Discriminative Parental Solicitude",
      intro: "Martin Daly and Margo Wilson argued that parental care is not automatic but discriminative, calibrated to cues of relatedness and a child's expected reproductive value.",
      questions: [
        {
          type: "mcq",
          q: "'Discriminative parental solicitude' refers to the idea that parents ____.",
          choices: ["invest equally in every child and unrelated child alike", "allocate care according to cues of relatedness and expected fitness returns", "never favor their own genetic children", "only ever invest in firstborns"],
          answer: 1,
          explain: "Daly and Wilson proposed that parents adjust investment based on parenthood certainty and the offspring's likely reproductive value."
        },
        {
          type: "truefalse",
          q: "Daly and Wilson are the two evolutionary psychologists most associated with discriminative parental solicitude.",
          answer: true,
          explain: "The Canadian researchers developed the concept, notably in their 1988 book 'Homicide.'"
        },
        {
          type: "fill",
          q: "Because males face paternity ____, cues that lower confidence of fatherhood are predicted to reduce paternal investment.",
          answer: "uncertainty",
          accept: ["uncertainty", "uncertain", "insecurity"],
          explain: "Only mothers are certain of parenthood, so a male's investment should track his confidence of paternity."
        },
        {
          type: "mcq",
          q: "Which factor is NOT part of the discriminative-solicitude calculus?",
          choices: ["Certainty of parenthood", "The offspring's ability to convert investment into fitness", "Alternative uses of the parent's resources", "The parent's astrological sign"],
          answer: 3,
          explain: "Relatedness certainty, offspring reproductive value, and alternative resource uses all matter; astrology does not."
        },
        {
          type: "truefalse",
          q: "The theory claims that parents consciously calculate genetic relatedness before deciding to care for a child.",
          answer: false,
          explain: "The mechanisms are evolved psychological cues such as bonding and resemblance, not conscious genetic accounting."
        },
        {
          type: "match",
          q: "Match each cue with its predicted effect on parental investment.",
          pairs: [["Low certainty of parenthood", "Reduced investment"], ["High offspring reproductive value", "Increased investment"], ["Better alternative uses of resources", "Reduced investment in this child"]],
          explain: "Investment is predicted to rise with relatedness and reproductive value and to fall when resources are better spent elsewhere."
        },
        {
          type: "order",
          q: "Rank these children by predicted parental investment, highest to lowest, all else equal.",
          items: ["A healthy genetic child", "A sickly genetic child with low survival odds", "A genetically unrelated stepchild"],
          explain: "Solicitude is predicted to track relatedness and reproductive value, so a healthy own-child ranks highest and an unrelated child lowest."
        }
      ]
    },
    {
      id: "l117",
      title: "The Cinderella Effect",
      intro: "Daly and Wilson's 'Cinderella effect' names the finding that children living with a stepparent face a much higher risk of abuse than those living with two genetic parents.",
      questions: [
        {
          type: "mcq",
          q: "The 'Cinderella effect' describes elevated risk of ____ for stepchildren.",
          choices: ["academic failure", "abuse and even homicide by a stepparent", "childhood allergies", "left-handedness"],
          answer: 1,
          explain: "Daly and Wilson documented that stepchildren are at greater risk of maltreatment and lethal violence."
        },
        {
          type: "truefalse",
          q: "Daly and Wilson named the effect after the fairy-tale character Cinderella, who was mistreated by a stepmother.",
          answer: true,
          explain: "Their 1998 book 'The Truth About Cinderella' uses the tale as a label for elevated stepchild risk."
        },
        {
          type: "fill",
          q: "In Daly and Wilson's Canadian data, the risk of being killed by a ____ was many times higher than the risk from a genetic parent.",
          answer: "stepparent",
          accept: ["stepparent", "step-parent", "stepfather", "step parent"],
          explain: "Co-residing with a stepparent was one of the strongest known risk factors for child homicide in their analyses."
        },
        {
          type: "mcq",
          q: "What is the evolutionary rationale offered for the Cinderella effect?",
          choices: ["Stepparents are inherently cruel people", "Stepchildren provoke abuse deliberately", "A stepparent has no genetic stake in an unrelated child, weakening parental solicitude", "Fairy tales directly cause real behavior"],
          answer: 2,
          explain: "Lacking genetic relatedness, a stepparent's evolved parental-investment mechanisms are, on average, less engaged."
        },
        {
          type: "truefalse",
          q: "The Cinderella effect claims that every stepparent abuses their stepchildren.",
          answer: false,
          explain: "It describes a statistically elevated RISK across populations, not inevitable behavior by any individual stepparent."
        },
        {
          type: "order",
          q: "Order the reasoning behind the Cinderella effect.",
          items: ["Parental care evolved to benefit one's own genetic offspring", "A stepparent is genetically unrelated to the stepchild", "Solicitude toward the stepchild is on average weaker", "Rates of abuse are statistically higher in step households"],
          explain: "Care evolved for kin, a stepchild is not kin, solicitude is weaker, and recorded abuse risk is therefore higher."
        },
        {
          type: "match",
          q: "Match each item with its description in the Cinderella-effect literature.",
          pairs: [["Two genetic parents", "Lower baseline risk of child abuse"], ["Household with a stepparent", "Elevated risk of child abuse"], ["Daly & Wilson", "Researchers who documented the pattern"]],
          explain: "Genetic-parent homes are the low-risk baseline, step households show elevated risk, and Daly and Wilson reported the effect."
        }
      ]
    },
    {
      id: "l118",
      title: "Critiques of Cinderella",
      intro: "Not everyone accepts the Cinderella effect at face value: Hans Temrin and others argue detection bias and confounds may inflate the apparent risk.",
      questions: [
        {
          type: "mcq",
          q: "Hans Temrin's critique of the Cinderella effect was based largely on reanalyzing child-homicide data from ____.",
          choices: ["Sweden", "Brazil", "Japan", "Kenya"],
          answer: 0,
          explain: "Temrin and colleagues re-examined Swedish records and questioned the simple stepparent interpretation."
        },
        {
          type: "truefalse",
          q: "One Temrin finding was that in some 'stepfamily' homicides the perpetrator was actually the child's genetic parent, not the stepparent.",
          answer: true,
          explain: "Temrin et al. reported that labeling risk by 'stepfamily' mislabels cases where a genetic parent was the killer."
        },
        {
          type: "fill",
          q: "The 'detection ____' objection says stepfamilies are more heavily scrutinized, so abuse is more likely to be recorded there.",
          answer: "bias",
          accept: ["bias"],
          explain: "If authorities watch step households more closely, higher recorded abuse rates could partly reflect reporting, not true incidence."
        },
        {
          type: "mcq",
          q: "Which of these is a genuine critique of the Cinderella-effect evidence?",
          choices: ["Stepparents cannot legally adopt", "Confounds like poverty and young parenthood may inflate the association", "Fairy tales are fictional", "Genetic parents never harm children"],
          answer: 1,
          explain: "Critics note that stepfamilies differ from intact families in poverty, parental age, and stress, which could confound the risk estimate."
        },
        {
          type: "truefalse",
          q: "Critics such as Temrin argue that detection and reporting biases can never affect abuse statistics.",
          answer: false,
          explain: "The critique is the opposite: such biases CAN inflate the apparent stepchild risk."
        },
        {
          type: "match",
          q: "Match each critique with its claim.",
          pairs: [["Detection bias", "Step households are watched more, so abuse is recorded more"], ["Confounding", "Poverty and parental age differ between family types"], ["Misclassification", "Some 'stepfamily' killings were done by a genetic parent"]],
          explain: "The three objections attack over-recording, hidden confounds, and mislabeled perpetrators respectively."
        },
        {
          type: "order",
          q: "Order the logic of the detection-bias objection.",
          items: ["Authorities view stepfamilies as higher-risk", "Step households receive more scrutiny", "Abuse there is more likely to be detected and recorded", "Recorded rates overstate the true difference"],
          explain: "Extra scrutiny yields extra detection, which can inflate the recorded gap between step and genetic households."
        }
      ]
    },
    {
      id: "l119",
      title: "Grandparental Investment",
      intro: "Because paternity is never certain, grandparents differ predictably in how much they invest, producing a matrilateral (maternal-side) bias.",
      questions: [
        {
          type: "mcq",
          q: "Which grandparent typically invests the MOST, having no paternity-uncertain links to the grandchild?",
          choices: ["Paternal grandfather", "Maternal grandmother", "Paternal grandmother", "Maternal grandfather"],
          answer: 1,
          explain: "The maternal grandmother is linked to the grandchild through two certain maternal links, so she has zero paternity uncertainty."
        },
        {
          type: "mcq",
          q: "Which grandparent typically invests the LEAST?",
          choices: ["Maternal grandmother", "Maternal grandfather", "Paternal grandmother", "Paternal grandfather"],
          answer: 3,
          explain: "The paternal grandfather has two uncertain links: his own paternity of the father, and the father's paternity of the grandchild."
        },
        {
          type: "truefalse",
          q: "The typical ordering of grandparental investment is maternal grandmother > maternal grandfather > paternal grandmother > paternal grandfather.",
          answer: true,
          explain: "Euler and Weitzel's 1996 German study found exactly this rank order of grandparental solicitude."
        },
        {
          type: "fill",
          q: "The paternal ____ has two paternity-uncertain links to the grandchild, predicting the lowest investment.",
          answer: "grandfather",
          accept: ["grandfather", "grandpa", "pgf"],
          explain: "Both his link to his son and his son's link to the grandchild are uncertain, doubling the discount on relatedness."
        },
        {
          type: "truefalse",
          q: "A 'matrilateral bias' means grandparental investment tends to flow more through the mother's side of the family.",
          answer: true,
          explain: "Maternal-side links carry less paternity uncertainty, so investment skews matrilaterally."
        },
        {
          type: "order",
          q: "Order grandparents from most to least predicted investment.",
          items: ["Maternal grandmother", "Maternal grandfather", "Paternal grandmother", "Paternal grandfather"],
          explain: "Investment declines as the number of paternity-uncertain links rises from zero (MGM) to two (PGF)."
        },
        {
          type: "match",
          q: "Match each grandparent with its number of paternity-uncertain links to the grandchild.",
          pairs: [["Maternal grandmother", "0"], ["Maternal grandfather", "1"], ["Paternal grandmother", "1"], ["Paternal grandfather", "2"]],
          explain: "MGM has none, MGF and PGM each have one, and PGF has two, which underlies the observed investment order."
        }
      ]
    },
    {
      id: "l120",
      title: "Sibling Rivalry and Birth Order",
      intro: "Frank Sulloway argued that siblings compete for parental investment by carving out distinct family 'niches,' shaping personality by birth order.",
      questions: [
        {
          type: "mcq",
          q: "In Sulloway's 1996 book 'Born to Rebel,' siblings reduce competition by ____.",
          choices: ["all adopting identical personalities", "occupying different family niches", "leaving home as early as possible", "sharing every resource equally"],
          answer: 1,
          explain: "Sulloway proposed that diversifying into unoccupied niches lets siblings minimize direct competition for parental investment."
        },
        {
          type: "mcq",
          q: "According to Sulloway, firstborns tend to be ____.",
          choices: ["rebellious and open to radical ideas", "the most agreeable of all siblings", "conscientious and identified with parental authority", "indifferent to status"],
          answer: 2,
          explain: "Firstborns are predicted to defend the status quo and align with parents, having first claim on the 'responsible' niche."
        },
        {
          type: "truefalse",
          q: "Sulloway predicted that laterborns are, on average, more open to experience and more likely to support revolutionary ideas.",
          answer: true,
          explain: "Shut out of the firstborn niche, laterborns are predicted to be more rebellious and unconventional."
        },
        {
          type: "fill",
          q: "Sulloway's explanation is called the family-____ hypothesis, in which siblings specialize to avoid competing head-on.",
          answer: "niche",
          accept: ["niche", "niches"],
          explain: "The idea borrows the ecological concept of niche partitioning and applies it within the family."
        },
        {
          type: "truefalse",
          q: "The niche hypothesis assumes that siblings never compete for parental resources.",
          answer: false,
          explain: "Siblings DO compete for limited parental investment, and that competition is exactly what drives niche diversification."
        },
        {
          type: "match",
          q: "Match each family position with Sulloway's predicted tendency.",
          pairs: [["Firstborn", "Conscientious, status-quo defender"], ["Laterborn", "Open, rebellious risk-taker"], ["Parents", "The limited investment siblings compete over"]],
          explain: "Firstborns take the responsible niche, laterborns the rebellious one, and parents supply the scarce investment being contested."
        },
        {
          type: "order",
          q: "Order the logic of Sulloway's niche hypothesis.",
          items: ["Parental investment is limited", "Siblings compete for that investment", "Each child specializes in a distinct family niche", "Birth order becomes linked to personality differences"],
          explain: "Scarcity drives competition, competition drives niche specialization, and specialization links birth order to personality."
        }
      ]
    }
  ]
});
