window.ACADEMY.addUnit("egt", {
  id: "unit-22",
  title: "Sexual Selection and Sex Ratios",
  color: "#3b74e0",
  icon: "🦚",
  description: "Applies game reasoning to mating conflict and offspring sex allocation, from Darwin's sexual selection to Fisher and Hamilton on sex ratios.",
  lessons: [
    {
      id: "l169",
      title: "Sexual selection basics",
      intro: "Sexual selection favors traits that win mates, working through competition within a sex and choice between the sexes.",
      questions: [
        {
          type: "mcq",
          q: "Who first developed the theory of sexual selection?",
          choices: ["Charles Darwin", "Gregor Mendel", "Ronald Fisher", "William Hamilton"],
          answer: 0,
          explain: "Darwin introduced sexual selection, most fully in The Descent of Man (1871), to explain traits that aid mating rather than survival."
        },
        {
          type: "mcq",
          q: "Sexual selection has two main mechanisms. What are they?",
          choices: ["Predation and camouflage", "Intrasexual competition and intersexual choice", "Mutation and genetic drift", "Migration and isolation"],
          answer: 1,
          explain: "Intrasexual selection is competition within one sex (often male-male), while intersexual selection is choice by the other sex (often female choice)."
        },
        {
          type: "truefalse",
          q: "Sexual selection can favor traits that reduce an individual's chance of survival.",
          answer: true,
          explain: "A peacock's heavy train hampers survival but improves mating success, so sexual selection can oppose ordinary natural selection."
        },
        {
          type: "fill",
          q: "The bright, costly tail of a peacock is a classic example of a trait shaped by ____ selection.",
          answer: "sexual",
          accept: ["sexual"],
          explain: "The peacock's train lowers survival odds yet attracts peahens, the signature of sexual selection."
        },
        {
          type: "match",
          q: "Match each term with its meaning.",
          pairs: [
            ["Intrasexual selection", "Competition among members of the same sex for mates"],
            ["Intersexual selection", "One sex choosing mates from the other sex"],
            ["Natural selection", "Differential survival based on ecological fit"]
          ],
          explain: "Intrasexual is same-sex competition, intersexual is mate choice, and natural selection acts on survival."
        },
        {
          type: "mcq",
          q: "Male-male combat with antlers or horns is an example of what?",
          choices: ["Intersexual selection", "Kin selection", "Artificial selection", "Intrasexual selection"],
          answer: 3,
          explain: "Fighting among males over access to females is intrasexual, or within-sex, competition."
        },
        {
          type: "order",
          q: "Order the logical steps by which sexual selection spreads an exaggerated trait.",
          items: ["A trait varies among individuals", "The trait improves mating success", "Bearers of the trait leave more offspring", "The trait becomes more common over generations"],
          explain: "Sexual selection spreads a trait when its variation affects mating success, giving bearers more offspring and raising its frequency."
        }
      ]
    },
    {
      id: "l170",
      title: "The Battle of the Sexes game",
      intro: "In this game-theory model females play coy or fast and males play faithful or philandering, producing cycling strategy frequencies.",
      questions: [
        {
          type: "mcq",
          q: "In the Battle of the Sexes game, what are the two female strategies?",
          choices: ["Faithful and philandering", "Coy and fast", "Hawk and dove", "Cooperate and defect"],
          answer: 1,
          explain: "Females are modeled as Coy (demand long courtship) or Fast (mate quickly); males are the ones who are Faithful or Philandering."
        },
        {
          type: "mcq",
          q: "What does a coy female require before mating?",
          choices: ["A prolonged courtship", "An immediate mating", "A larger male", "A defended territory"],
          answer: 0,
          explain: "Coy females insist on a long courtship, which screens out philandering males unwilling to invest that time."
        },
        {
          type: "truefalse",
          q: "A philandering male is willing to invest in a long courtship and help raise the young.",
          answer: false,
          explain: "Philandering males skip long courtship and desert after mating; only faithful males invest in courtship and parental care."
        },
        {
          type: "fill",
          q: "Richard Dawkins popularized this game in his 1976 book The Selfish ____.",
          answer: "gene",
          accept: ["gene", "selfish gene"],
          explain: "Dawkins laid out the coy/fast and faithful/philandering payoffs in The Selfish Gene (1976)."
        },
        {
          type: "match",
          q: "Match each strategy with its behavior.",
          pairs: [
            ["Coy female", "Insists on a lengthy courtship before mating"],
            ["Fast female", "Mates without a long courtship"],
            ["Faithful male", "Courts patiently and helps rear offspring"],
            ["Philandering male", "Mates quickly and then deserts"]
          ],
          explain: "The four strategies combine into a payoff matrix whose frequencies tend to cycle over time."
        },
        {
          type: "mcq",
          q: "What is the characteristic long-run behavior of the Battle of the Sexes dynamics?",
          choices: ["A single fixed pure strategy", "Immediate extinction of females", "Cyclical oscillation of strategy frequencies", "Every individual becoming identical"],
          answer: 2,
          explain: "The replicator dynamics of this game typically cycle, with the proportions of coy/fast and faithful/philandering rising and falling rather than settling."
        },
        {
          type: "order",
          q: "Trace the logic that protects coy females from philandering males.",
          items: ["A coy female demands a long courtship", "Philandering males are unwilling to wait", "Only faithful males complete the courtship", "The coy female mates with a caring partner"],
          explain: "The long courtship acts as a screen: it costs philanderers more than they will pay, so coy females end up pairing with faithful males."
        }
      ]
    },
    {
      id: "l171",
      title: "Parental investment theory",
      intro: "Trivers showed that the sex investing more in offspring becomes a limiting resource the other sex competes to access.",
      questions: [
        {
          type: "mcq",
          q: "Who formulated parental investment theory in 1972?",
          choices: ["Robert Trivers", "Charles Darwin", "John Maynard Smith", "Ronald Fisher"],
          answer: 0,
          explain: "Robert Trivers' 1972 paper Parental Investment and Sexual Selection linked investment differences to which sex competes and which chooses."
        },
        {
          type: "mcq",
          q: "According to Trivers, the sex that invests MORE in offspring will tend to do what?",
          choices: ["Compete more intensely for mates", "Be choosier about mates", "Produce smaller gametes", "Have higher variance in reproductive success"],
          answer: 1,
          explain: "The higher-investing sex is a limiting resource, so it can afford to be choosy; the lower-investing sex competes for access."
        },
        {
          type: "truefalse",
          q: "In most species females invest more per offspring, which is linked to male-male competition and female choice.",
          answer: true,
          explain: "Larger eggs, gestation, and lactation raise female investment, making females the choosier, limiting sex and males the competitors."
        },
        {
          type: "fill",
          q: "The principle that male reproductive success rises more steeply with the number of mates is named after A. J. ____.",
          answer: "bateman",
          accept: ["bateman", "bateman's"],
          explain: "Bateman's principle (1948) found greater variance in male reproductive success, tied to gaining extra mates."
        },
        {
          type: "mcq",
          q: "In sex-role-reversed species such as some pipefish and phalaropes, what happens?",
          choices: ["Neither sex invests in young", "Males invest more and females compete", "Females invest more and males choose", "Reproduction is asexual"],
          answer: 1,
          explain: "When males carry or care for the young they become the limiting sex, so females compete and males are choosier, reversing the usual roles."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [
            ["Parental investment", "A cost to a parent that aids one offspring at the expense of others"],
            ["Limiting sex", "The higher-investing sex that the other competes for"],
            ["Bateman's principle", "Reproductive success is more variable in the lower-investing sex"]
          ],
          explain: "Trivers built on Bateman: greater investment defines the limiting, choosier sex."
        },
        {
          type: "order",
          q: "Put Trivers' reasoning in order.",
          items: ["The sexes differ in parental investment", "The higher-investing sex becomes a limiting resource", "The lower-investing sex competes for access", "Competition and choice shape sexual selection"],
          explain: "Asymmetric investment sets who competes and who chooses, driving the direction of sexual selection."
        }
      ]
    },
    {
      id: "l172",
      title: "Fisherian runaway",
      intro: "Fisher showed a mate preference and the preferred trait can become genetically linked and reinforce each other into exaggeration.",
      questions: [
        {
          type: "mcq",
          q: "The runaway process of sexual selection is named after whom?",
          choices: ["Ronald Fisher", "Robert Trivers", "Charles Darwin", "George Price"],
          answer: 0,
          explain: "R. A. Fisher outlined the runaway idea in The Genetical Theory of Natural Selection (1930)."
        },
        {
          type: "truefalse",
          q: "In Fisherian runaway, genes for a female preference and genes for the male trait become genetically correlated.",
          answer: true,
          explain: "Because choosy females mate with ornamented males, their offspring inherit both the trait and the preference, coupling the two."
        },
        {
          type: "mcq",
          q: "Why can the runaway process accelerate a trait's exaggeration?",
          choices: ["Predators start to prefer ornamented males", "Sons inherit the trait and daughters inherit the preference", "The trait lowers the mutation rate", "Food suddenly becomes more abundant"],
          answer: 1,
          explain: "The genetic coupling creates positive feedback: more ornamented sons and choosier daughters each generation push the trait further."
        },
        {
          type: "fill",
          q: "Fisher described the runaway idea in his 1930 book, The Genetical Theory of Natural ____.",
          answer: "selection",
          accept: ["selection"],
          explain: "Fisher's 1930 work formalized how preference and trait can coevolve in a self-reinforcing loop."
        },
        {
          type: "mcq",
          q: "What eventually halts a runaway process?",
          choices: ["The trait stops being heritable", "Females forget their preference", "Natural selection against an overly costly trait", "The population goes extinct instantly"],
          answer: 2,
          explain: "Runaway continues until the survival cost of the exaggerated trait balances its mating benefit, reaching an equilibrium."
        },
        {
          type: "match",
          q: "Match each idea with its role in runaway selection.",
          pairs: [
            ["Female preference", "A genetically transmitted choice for a male trait"],
            ["Genetic correlation", "Linkage between preference genes and trait genes"],
            ["Sexy son", "Attractive males sire attractive, well-mated sons"]
          ],
          explain: "These pieces combine into the positive feedback loop Fisher described, later modeled by Lande and Kirkpatrick."
        },
        {
          type: "order",
          q: "Sequence the runaway feedback loop.",
          items: ["Some females prefer a male trait", "Preference and trait genes become correlated", "Sons carry the trait and daughters carry the preference", "The trait and preference exaggerate together"],
          explain: "Each generation reinforces both the trait and the preference until survival costs check the process."
        }
      ]
    },
    {
      id: "l173",
      title: "Fisher's sex-ratio theory",
      intro: "Fisher explained why populations tend toward equal investment in the two sexes through frequency-dependent selection.",
      questions: [
        {
          type: "mcq",
          q: "Fisher's sex-ratio argument explains why many species tend toward what?",
          choices: ["Mostly females", "Mostly males", "Roughly equal investment in the sexes", "No offspring of either sex"],
          answer: 2,
          explain: "When one sex is rarer, parents producing it gain a fitness advantage, pushing investment back toward equality."
        },
        {
          type: "truefalse",
          q: "Fisher's sex-ratio argument depends only on equal NUMBERS of the two sexes and ignores how much each costs to produce.",
          answer: false,
          explain: "Fisher's argument is really about equal parental EXPENDITURE; if one sex costs more, equal investment can yield unequal numbers."
        },
        {
          type: "fill",
          q: "Fisher's sex-ratio logic relies on ____-dependent selection, where a strategy's payoff depends on how common it is.",
          answer: "frequency",
          accept: ["frequency"],
          explain: "The advantage of producing a sex depends on that sex's current frequency, the hallmark of frequency-dependent selection."
        },
        {
          type: "mcq",
          q: "If a population becomes strongly male-biased, Fisher's logic predicts selection will favor parents who do what?",
          choices: ["Produce more sons", "Produce more daughters", "Stop reproducing", "Produce equal numbers regardless"],
          answer: 1,
          explain: "When males are common, daughters are the rarer sex and enjoy higher average mating success, so producing daughters pays off."
        },
        {
          type: "mcq",
          q: "Why does the fact that every offspring has exactly one mother and one father matter here?",
          choices: ["It makes total male and total female reproductive success equal", "It doubles the mutation rate", "It removes all competition", "It prevents any sex-ratio bias forever"],
          answer: 0,
          explain: "Since the total genetic contribution of all males equals that of all females, the rarer sex has higher per-capita success."
        },
        {
          type: "match",
          q: "Match each term to its meaning in Fisher's theory.",
          pairs: [
            ["Parental expenditure", "The resources a parent devotes to producing a sex"],
            ["Frequency dependence", "Payoff of producing a sex depends on its rarity"],
            ["Equilibrium ratio", "The point where producing either sex yields equal returns"]
          ],
          explain: "Equal expenditure is the stable point because deviations from it are self-correcting."
        },
        {
          type: "order",
          q: "Order Fisher's reasoning.",
          items: ["One sex becomes rarer in the population", "Each member of the rarer sex has higher average reproductive success", "Parents producing the rarer sex gain more grandchildren", "Investment shifts back toward balance"],
          explain: "The rare-sex advantage creates negative feedback that restores equal investment."
        }
      ]
    },
    {
      id: "l174",
      title: "Why 50-50 is an ESS",
      intro: "A 1:1 sex ratio resists invasion because whichever sex is rarer enjoys a mating advantage that restores parity.",
      questions: [
        {
          type: "mcq",
          q: "What does ESS stand for?",
          choices: ["Equal sex system", "Evolutionarily stable strategy", "Extra selective success", "Environmental selection state"],
          answer: 1,
          explain: "An evolutionarily stable strategy, a concept from Maynard Smith, cannot be invaded by a rare alternative strategy."
        },
        {
          type: "truefalse",
          q: "A 1:1 sex ratio is evolutionarily stable because any deviation gives the rarer sex an advantage that pulls the ratio back.",
          answer: true,
          explain: "Rare-sex advantage is a form of negative frequency dependence, the force that makes 50/50 an ESS."
        },
        {
          type: "mcq",
          q: "In a population skewed toward daughters, which parents do best?",
          choices: ["Those producing more daughters", "Those producing more sons", "Those producing no offspring", "All parents do equally well"],
          answer: 1,
          explain: "With females common, sons are rarer and each son mates more on average, so producing sons is favored, restoring balance."
        },
        {
          type: "fill",
          q: "The pull back toward 50/50 comes from the ____-sex advantage: minority-sex individuals have higher average mating success.",
          answer: "rare",
          accept: ["rare", "rarer", "minority"],
          explain: "Being in the minority sex means more mates per individual, which favors producing that sex until parity returns."
        },
        {
          type: "mcq",
          q: "The 50/50 outcome is best described as which kind of equilibrium?",
          choices: ["A stable point maintained by negative frequency dependence", "An unstable point that any push destroys", "A point requiring no selection at all", "A ratio set purely by random chance"],
          answer: 0,
          explain: "Deviations are self-correcting, so 50/50 is a stable equilibrium held by negative frequency-dependent selection."
        },
        {
          type: "match",
          q: "Match each term with its role in the ESS argument.",
          pairs: [
            ["ESS", "A strategy that resists invasion by rare alternatives"],
            ["Rare-sex advantage", "Minority sex has higher per-capita mating success"],
            ["Negative frequency dependence", "A strategy's payoff falls as it becomes common"]
          ],
          explain: "Together these explain why a balanced sex ratio is stable."
        },
        {
          type: "order",
          q: "Order how a female-biased population returns to balance.",
          items: ["Daughters outnumber sons", "Each son has more mating opportunities", "Parents who make more sons gain fitness", "The sex ratio moves back toward 50/50"],
          explain: "The scarcity of sons rewards son-makers until the ratio re-balances, illustrating why 50/50 is an ESS."
        }
      ]
    },
    {
      id: "l175",
      title: "Local mate competition",
      intro: "Hamilton showed that when related males compete for mates, mothers are selected to produce female-biased broods.",
      questions: [
        {
          type: "mcq",
          q: "Who introduced local mate competition in the 1967 paper Extraordinary Sex Ratios?",
          choices: ["W. D. Hamilton", "Ronald Fisher", "Robert Trivers", "John Maynard Smith"],
          answer: 0,
          explain: "William D. Hamilton's 1967 Science paper explained female-biased ratios through competition among related males."
        },
        {
          type: "truefalse",
          q: "Under strong local mate competition, mothers are favored to produce more sons than daughters.",
          answer: false,
          explain: "It is the opposite: because brothers compete for the same mates, mothers make mostly daughters and just enough sons to fertilize them."
        },
        {
          type: "mcq",
          q: "Why does local mate competition favor female-biased broods?",
          choices: ["Sons are always cheaper to produce", "Brothers compete with each other for the same females", "Daughters cannot reproduce", "Predators specifically target females"],
          answer: 1,
          explain: "Extra sons mostly compete against their own brothers, so a mother gains more grandchildren by making daughters instead."
        },
        {
          type: "fill",
          q: "Highly female-biased sex ratios from local mate competition are famously seen in fig ____.",
          answer: "wasps",
          accept: ["wasps", "wasp"],
          explain: "In fig wasps, siblings mate within the fig before dispersal, so broods are strongly female-biased with very few males."
        },
        {
          type: "mcq",
          q: "Local mate competition breaks Fisher's 1:1 prediction because it violates which assumption?",
          choices: ["That offspring are heritable", "That mating is random across the whole population", "That females can reproduce", "That the two sexes cost the same to make"],
          answer: 1,
          explain: "Fisher assumed population-wide random mating; when mating is local among relatives, sons compete with kin and the ratio skews female."
        },
        {
          type: "match",
          q: "Match each term with its meaning.",
          pairs: [
            ["Local mate competition", "Related males competing for the same mates"],
            ["Female-biased ratio", "Broods with many daughters and few sons"],
            ["Panmixia", "Random mating across the whole population"]
          ],
          explain: "When panmixia fails and mating is local, Hamilton's logic favors daughter-heavy broods."
        },
        {
          type: "order",
          q: "Order the reasoning behind Hamilton's biased sex ratios.",
          items: ["Offspring mate locally among siblings", "Extra sons mostly compete with their brothers", "A mother gains more by producing daughters", "The brood becomes strongly female-biased"],
          explain: "Because extra sons only reduce each other's mating success, the fitness-maximizing brood is daughter-heavy with just enough sons."
        }
      ]
    },
    {
      id: "l176",
      title: "Operational sex ratio",
      intro: "The operational sex ratio counts only ready-to-mate individuals and predicts how intense mating competition will be.",
      questions: [
        {
          type: "mcq",
          q: "The operational sex ratio (OSR) is defined as the ratio of what?",
          choices: ["All males to all females in a population", "Sexually receptive males to receptive females at a given time", "Juveniles to adults", "Surviving to dead individuals"],
          answer: 1,
          explain: "The OSR counts only currently available, ready-to-mate individuals, not the whole population."
        },
        {
          type: "mcq",
          q: "Who introduced the concept of the operational sex ratio in 1977?",
          choices: ["Trivers and Willard", "Lande and Kirkpatrick", "Clutton-Brock and Vincent", "Emlen and Oring"],
          answer: 3,
          explain: "Stephen Emlen and Lewis Oring coined the OSR in their 1977 paper on ecology, sexual selection, and mating systems."
        },
        {
          type: "truefalse",
          q: "A strongly male-biased operational sex ratio predicts intense competition among males for mates.",
          answer: true,
          explain: "When receptive males far outnumber receptive females, males must compete harder for the few available mates."
        },
        {
          type: "fill",
          q: "Because females may be tied up in gestation or care, the OSR can be male-biased even when the overall ____ sex ratio is 50/50.",
          answer: "population",
          accept: ["population", "adult", "census"],
          explain: "Time spent unavailable, such as being pregnant or caring for young, removes individuals from the mating pool and skews the OSR away from the census ratio."
        },
        {
          type: "mcq",
          q: "Which factor most directly makes one sex's contribution to the OSR smaller?",
          choices: ["Longer time spent unavailable while caring for young", "A brighter body color", "A larger total population size", "A colder climate on its own"],
          answer: 0,
          explain: "The longer individuals are out of the mating pool, for example while caring for young, the fewer of that sex are available, shifting the OSR."
        },
        {
          type: "match",
          q: "Match each term with its meaning.",
          pairs: [
            ["Operational sex ratio", "Ratio of ready-to-mate males to females at a time"],
            ["Potential reproductive rate", "How fast a sex can produce offspring when unconstrained"],
            ["Time out", "A period an individual is unavailable to mate"]
          ],
          explain: "Differences in time out and potential reproductive rate set the OSR, which in turn drives the intensity of competition."
        },
        {
          type: "order",
          q: "Order how parental duties skew the OSR and competition.",
          items: ["One sex spends long periods caring for young", "Fewer of that sex are available to mate", "The OSR becomes biased toward the other sex", "The more available sex competes more intensely"],
          explain: "Care removes individuals from the pool, biasing the OSR and concentrating competition in the more available sex."
        }
      ]
    }
  ]
});
