window.ACADEMY.addUnit("evopsych", {
  id: "unit-7",
  title: "Parental Investment and Mating Asymmetry",
  color: "#7c5cff",
  icon: "⚖️",
  description: "How Trivers's parental investment theory explains why the sex that invests more per offspring becomes the choosier, limiting sex and the other competes.",
  lessons: [
    {
      id: "l49",
      title: "Bateman's Principles",
      intro: "Angus Bateman's 1948 fruit fly experiments revealed that reproductive success varies more among males than among females.",
      questions: [
        {
          type: "mcq",
          q: "Who ran the foundational experiments on reproductive variance, and in what organism?",
          choices: [
            "Angus Bateman, using fruit flies (Drosophila)",
            "Robert Trivers, using baboons",
            "Charles Darwin, using finches",
            "William Hamilton, using paper wasps"
          ],
          answer: 0,
          explain: "Bateman's 1948 study of Drosophila melanogaster tracked how reproductive success changed with number of mates in each sex."
        },
        {
          type: "truefalse",
          q: "Bateman found that male reproductive success typically shows greater variance than female reproductive success.",
          answer: true,
          explain: "Some males monopolized many mates while others got none, so male success ranged more widely than female success."
        },
        {
          type: "fill",
          q: "The positive relationship between a male's number of mates and his reproductive success is called the Bateman ____.",
          answer: "gradient",
          accept: ["gradient", "slope"],
          explain: "The Bateman gradient is the slope linking mate number to offspring number; it is steeper for males than for females."
        },
        {
          type: "mcq",
          q: "According to Bateman's findings, a female's reproductive success tends to...",
          choices: [
            "increase steeply with each additional mate",
            "plateau after she has mated with one or a few males",
            "fall to zero after any mating at all",
            "always exceed that of the most successful male"
          ],
          answer: 1,
          explain: "A female's output is capped by how many eggs she can produce, so once she has enough sperm, extra mates add little."
        },
        {
          type: "match",
          q: "Match each of Bateman's principles to what it states.",
          pairs: [
            ["Variance in reproductive success", "Males differ more than females in offspring produced"],
            ["Variance in mate number", "Males differ more than females in how many mates they secure"],
            ["Bateman gradient", "Stronger link between mates and offspring in males"]
          ],
          explain: "Bateman's three principles describe higher male variance in offspring, higher male variance in mates, and a steeper male mates-to-offspring slope."
        },
        {
          type: "truefalse",
          q: "Bateman's principles imply that the reproductive payoff of one additional mating is usually higher for males than for females.",
          answer: true,
          explain: "Because sperm are cheap, an extra mate can add offspring for a male, while a female already limited by egg supply gains little."
        },
        {
          type: "order",
          q: "Order Bateman's argument from its starting cause to its final consequence.",
          items: [
            "Sperm are cheap and abundant while eggs are costly and limited",
            "Males can raise reproductive success by mating with more females",
            "Male reproductive success varies more than female reproductive success",
            "Sexual selection acts more strongly on males"
          ],
          explain: "Gamete economics let males benefit from extra mates, producing higher male variance and therefore stronger sexual selection on males."
        }
      ]
    },
    {
      id: "l50",
      title: "Trivers's Parental Investment",
      intro: "In 1972 Robert Trivers defined parental investment and showed how investment differences drive sexual selection.",
      questions: [
        {
          type: "mcq",
          q: "In what year did Robert Trivers publish his theory of parental investment and sexual selection?",
          choices: ["1948", "1964", "1972", "1985"],
          answer: 2,
          explain: "Trivers's chapter 'Parental Investment and Sexual Selection' appeared in 1972 and built on Bateman's earlier work."
        },
        {
          type: "fill",
          q: "Trivers defined parental ____ as any help to an offspring that raises its survival at the cost of the parent's ability to invest in other offspring.",
          answer: "investment",
          accept: ["investment", "parental investment"],
          explain: "The key feature is the trade-off: aid to one offspring reduces resources available for future offspring."
        },
        {
          type: "truefalse",
          q: "Trivers argued that the sex investing more per offspring becomes the choosier sex.",
          answer: true,
          explain: "Higher cost per offspring raises the stakes of each mating, favoring selectivity in the higher-investing sex."
        },
        {
          type: "mcq",
          q: "Which of the following counts as parental investment under Trivers's definition?",
          choices: [
            "A courtship display that attracts additional mates",
            "Time and energy spent feeding and guarding one's existing offspring",
            "Producing large numbers of sperm",
            "Fighting rival males for territory"
          ],
          answer: 1,
          explain: "Parental investment is directed at a specific offspring and trades off against future reproduction; feeding and guarding young qualifies."
        },
        {
          type: "match",
          q: "Match each term from Trivers's theory to its meaning.",
          pairs: [
            ["Parental investment", "Costly help to one offspring that reduces capacity for others"],
            ["Higher-investing sex", "Tends to be selective about mates"],
            ["Lower-investing sex", "Tends to compete for mating access"]
          ],
          explain: "Trivers tied choosiness and competition to which sex invests more, not to being male or female as such."
        },
        {
          type: "truefalse",
          q: "Trivers's theory claims that only females can ever be the higher-investing sex.",
          answer: false,
          explain: "Which sex invests more varies by species; in some fish and birds males invest more, producing sex-role reversal."
        },
        {
          type: "order",
          q: "Arrange Trivers's causal chain from investment to selection.",
          items: [
            "One sex invests more per offspring than the other",
            "The higher-investing sex becomes a limiting resource",
            "The lower-investing sex competes for access to it",
            "Sexual selection is stronger on the competing sex"
          ],
          explain: "Unequal investment makes the high-investing sex scarce, which drives competition and stronger sexual selection on the low-investing sex."
        }
      ]
    },
    {
      id: "l51",
      title: "The Limiting Sex",
      intro: "The sex that invests more per offspring reproduces more slowly and becomes the limiting resource the other sex competes to access.",
      questions: [
        {
          type: "mcq",
          q: "The 'limiting sex' in mating is best described as...",
          choices: [
            "the sex whose reproduction is capped by its own high investment, making it the resource others compete for",
            "the sex that always produces the smaller gametes",
            "the sex that is always physically larger",
            "the sex with the higher potential reproductive rate"
          ],
          answer: 0,
          explain: "Because its heavy investment slows its reproduction, the limiting sex is scarce and becomes the bottleneck the other sex competes over."
        },
        {
          type: "truefalse",
          q: "In most mammals, females are the limiting sex because their investment through gestation and lactation is high.",
          answer: true,
          explain: "Pregnancy and nursing tie female mammals to each offspring for long periods, making receptive females the scarce resource."
        },
        {
          type: "fill",
          q: "Because the higher-investing sex reproduces more slowly, it becomes the ____ resource for which the other sex competes.",
          answer: "limiting",
          accept: ["limiting", "limited"],
          explain: "Its slower reproductive rate makes it the factor that limits the other sex's reproduction."
        },
        {
          type: "mcq",
          q: "Why does the higher-investing sex tend to become choosier?",
          choices: [
            "Because each reproductive event costs it more, so a poor choice is more expensive",
            "Because it produces so many gametes it can afford to waste them",
            "Because it is under weaker sexual selection",
            "Because it has more potential mates available at any time"
          ],
          answer: 0,
          explain: "When one mating consumes a large share of lifetime reproduction, mistakes are costly, so selectivity pays off."
        },
        {
          type: "match",
          q: "Match each sex role to its description.",
          pairs: [
            ["Limiting sex", "Reproduction bottlenecked by high investment; is choosy"],
            ["Competing sex", "Reproduction bottlenecked by mate access; competes"],
            ["Reproductive rate", "Slower in the higher-investing sex"]
          ],
          explain: "The limiting sex is choosy and scarce; the competing sex has spare reproductive capacity and fights for access."
        },
        {
          type: "truefalse",
          q: "The competing, lower-investing sex generally has a lower potential reproductive rate than the limiting sex.",
          answer: false,
          explain: "It is the reverse: the lower-investing sex has a higher potential reproductive rate, which is why it competes for scarce partners."
        },
        {
          type: "order",
          q: "Order the steps from investment to competition.",
          items: [
            "High investment slows one sex's reproductive rate",
            "That sex becomes scarce relative to ready-to-mate partners",
            "Its availability limits the other sex's reproduction",
            "The other sex competes for access to it"
          ],
          explain: "Slow reproduction creates scarcity, which limits the other sex and forces it to compete for the limiting sex."
        }
      ]
    },
    {
      id: "l52",
      title: "Anisogamy as Foundation",
      intro: "The size difference between tiny sperm and large eggs, called anisogamy, is the ultimate root of sex differences in investment.",
      questions: [
        {
          type: "fill",
          q: "The existence of two distinct gamete sizes within a species is called ____.",
          answer: "anisogamy",
          accept: ["anisogamy"],
          explain: "Anisogamy (from Greek for 'unequal marriage') is the defining asymmetry between large eggs and small sperm."
        },
        {
          type: "mcq",
          q: "By definition, the female sex is the one that produces...",
          choices: [
            "the more numerous, mobile gametes",
            "the larger, more costly gametes",
            "gametes only after fertilization",
            "gametes exactly equal in size to the male's"
          ],
          answer: 1,
          explain: "Femaleness is defined by producing the larger gamete (the egg or ovum); maleness by producing the smaller one (sperm)."
        },
        {
          type: "truefalse",
          q: "Under isogamy, the two mating types produce gametes of roughly equal size.",
          answer: true,
          explain: "Isogamy is the ancestral condition of equal-sized gametes, in contrast to the unequal gametes of anisogamy."
        },
        {
          type: "mcq",
          q: "Why is anisogamy considered the foundation of the whole investment asymmetry?",
          choices: [
            "It is the earliest and most basic difference in investment per gamete, from which later differences cascade",
            "It determines which sex survives longer",
            "It matters only in mammals",
            "It equalizes the reproductive potential of the sexes"
          ],
          answer: 0,
          explain: "The initial difference in cost per gamete sets up divergent selection pressures that build into broader differences in parental investment."
        },
        {
          type: "match",
          q: "Match each gamete or concept to its description.",
          pairs: [
            ["Egg (ovum)", "Large, resource-rich, produced in limited numbers"],
            ["Sperm", "Small, cheap, produced in vast numbers"],
            ["Anisogamy", "Two unequal gamete sizes in one species"],
            ["Isogamy", "Two gametes of equal size"]
          ],
          explain: "Eggs are costly and few while sperm are cheap and many; anisogamy names that inequality, isogamy its absence."
        },
        {
          type: "truefalse",
          q: "Anisogamy means males and females invest exactly the same amount in each gamete.",
          answer: false,
          explain: "Anisogamy is precisely the unequal investment per gamete: a female pours far more resources into each egg than a male does into each sperm."
        },
        {
          type: "order",
          q: "Order the evolutionary logic that produced anisogamy.",
          items: [
            "Ancestral gametes were equal in size (isogamy)",
            "Selection favored some gametes becoming larger and provisioned",
            "Other gametes became smaller and more numerous",
            "The result is anisogamy: eggs versus sperm"
          ],
          explain: "Disruptive selection on an isogamous ancestor split gametes into large provisioned eggs and small numerous sperm."
        }
      ]
    },
    {
      id: "l53",
      title: "Obligate Versus Facultative Investment",
      intro: "Obligate investment is the minimum a parent must give to reproduce, while facultative investment is everything extra and optional.",
      questions: [
        {
          type: "mcq",
          q: "'Obligate' parental investment refers to...",
          choices: [
            "any investment beyond the bare minimum",
            "the minimum investment required to produce viable offspring",
            "investment that only fathers provide",
            "investment measured only in calories"
          ],
          answer: 1,
          explain: "Obligate investment is the unavoidable minimum a parent must supply for offspring to exist at all."
        },
        {
          type: "mcq",
          q: "In mammals, which sex typically has the far larger obligate investment, and why?",
          choices: [
            "Males, because they defend territory",
            "Neither; it is equal in mammals",
            "Females, because of internal gestation and lactation",
            "Males, because they produce more gametes"
          ],
          answer: 2,
          explain: "A female mammal must gestate and then nurse offspring, an unavoidable large cost, whereas a male's minimum can be just insemination."
        },
        {
          type: "fill",
          q: "Investment beyond the required minimum, which parents may or may not provide, is called ____ investment.",
          answer: "facultative",
          accept: ["facultative"],
          explain: "Facultative investment is optional and varies among individuals, unlike the fixed obligate minimum."
        },
        {
          type: "truefalse",
          q: "A male mammal's obligate parental investment can, in principle, be as small as a single mating.",
          answer: true,
          explain: "Beyond contributing sperm, a male mammal is not physiologically required to invest further, so his obligate minimum is very low."
        },
        {
          type: "truefalse",
          q: "Facultative investment is fixed and identical for every member of a sex.",
          answer: false,
          explain: "Facultative investment is exactly the variable, optional part; it differs among individuals and with circumstances."
        },
        {
          type: "match",
          q: "Match each term to its description.",
          pairs: [
            ["Obligate investment", "Minimum needed to produce offspring"],
            ["Facultative investment", "Optional care given above the minimum"],
            ["Female mammal", "Large obligate investment (gestation, lactation)"],
            ["Male mammal", "Small possible obligate investment"]
          ],
          explain: "The obligate minimum differs sharply between mammalian sexes, while facultative care is where fathers can choose to add more."
        },
        {
          type: "order",
          q: "Order these mammalian investments from smallest to largest obligate cost.",
          items: [
            "A male's minimum: a single mating",
            "A female's minimum: pregnancy",
            "A female's minimum plus months of lactation"
          ],
          explain: "The obligate cost climbs from a male's brief contribution to gestation and then to gestation plus prolonged nursing."
        }
      ]
    },
    {
      id: "l54",
      title: "Operational Sex Ratio",
      intro: "The operational sex ratio counts only the sexually available members of each sex and predicts how intense mating competition will be.",
      questions: [
        {
          type: "mcq",
          q: "The operational sex ratio (OSR) is defined as the ratio of...",
          choices: [
            "all males to all females in a population",
            "sexually receptive (available) males to sexually receptive females at a given time",
            "offspring to adults",
            "juveniles to breeding adults"
          ],
          answer: 1,
          explain: "The OSR counts only currently available or receptive individuals, not everyone in the population."
        },
        {
          type: "truefalse",
          q: "A strongly male-biased operational sex ratio tends to intensify competition among males for mates.",
          answer: true,
          explain: "When available males outnumber available females, each female is contested by more males, raising male-male competition."
        },
        {
          type: "fill",
          q: "Biologists Emlen and Oring, in their 1977 paper, linked the operational sex ratio to the intensity of sexual ____.",
          answer: "selection",
          accept: ["selection", "competition"],
          explain: "Emlen and Oring (1977) proposed the OSR as a predictor of how strong sexual selection and mating competition would be."
        },
        {
          type: "mcq",
          q: "Which factor can skew the operational sex ratio toward more available males?",
          choices: [
            "A long female gestation or care period that removes females from the mating pool",
            "Equal parental investment by both sexes",
            "Males dying much younger than females",
            "A general food shortage affecting everyone"
          ],
          answer: 0,
          explain: "When females are tied up in gestation or care, fewer are receptive, leaving relatively more available males and a male-biased OSR."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Operational sex ratio", "Ratio of available males to available females"],
            ["Male-biased OSR", "Stronger male-male competition"],
            ["Emlen and Oring (1977)", "Tied OSR to the intensity of sexual selection"],
            ["Time out of mating pool", "Longer for the higher-investing sex"]
          ],
          explain: "OSR captures who is actually available to mate, which Emlen and Oring linked to competition intensity."
        },
        {
          type: "truefalse",
          q: "A parent that is busy caring for young is counted as part of the available pool in the operational sex ratio.",
          answer: false,
          explain: "Caring parents are 'timed out' of mating and are not counted as available, which is how care skews the OSR."
        },
        {
          type: "order",
          q: "Order the causal chain from investment to competition intensity.",
          items: [
            "The higher-investing sex spends longer timed out caring for young",
            "Fewer of that sex are sexually available at any moment",
            "The operational sex ratio becomes skewed toward the other sex",
            "Competition among the more available sex intensifies"
          ],
          explain: "Longer time-outs for the caring sex shrink its available numbers, skewing the OSR and heating up competition in the other sex."
        }
      ]
    },
    {
      id: "l55",
      title: "Sex-Role Reversal",
      intro: "In pipefish and jacanas the males invest more, and as Trivers's theory predicts, the females become the competitive sex while males grow choosy.",
      questions: [
        {
          type: "mcq",
          q: "In sex-role-reversed species, which pattern is observed?",
          choices: [
            "Males invest more, and females compete and are often larger or more ornamented",
            "Females invest more and also compete",
            "Neither sex invests in offspring",
            "Both sexes are equally choosy and equally competitive"
          ],
          answer: 0,
          explain: "When males become the higher-investing sex, the theory predicts females compete for them and males become the choosy sex."
        },
        {
          type: "truefalse",
          q: "In pipefish and seahorses, the male carries the developing embryos in a brood pouch.",
          answer: true,
          explain: "Male pipefish and seahorses brood the young in a specialized pouch, making the male the higher-investing sex."
        },
        {
          type: "mcq",
          q: "Why are sex-role-reversed species important evidence for Trivers's theory?",
          choices: [
            "They show that competition follows gamete size, not investment",
            "They show that choosy and competitive roles follow which sex invests more, not the sex label itself",
            "They disprove parental investment theory",
            "They show that females are always the choosy sex"
          ],
          answer: 1,
          explain: "The theory predicts roles from relative investment; reversed species confirm it because the higher-investing sex is choosy whether it is male or female."
        },
        {
          type: "fill",
          q: "In the ____, a wading bird, the female defends a territory and mates with several males who each incubate a clutch of eggs.",
          answer: "jacanas",
          accept: ["jacanas", "jacana", "the jacana"],
          explain: "Jacanas are classically polyandrous: females are larger and compete for males, who do the incubating and chick care."
        },
        {
          type: "truefalse",
          q: "Sex-role reversal shows that being male automatically makes an animal the competitive sex.",
          answer: false,
          explain: "Reversal shows the opposite: competition tracks lower investment, so a low-investing female competes and a high-investing male is choosy."
        },
        {
          type: "match",
          q: "Match each species or role to its feature.",
          pairs: [
            ["Pipefish / seahorse", "Male pregnancy in a brood pouch"],
            ["Jacana", "Polyandrous female; males incubate and tend chicks"],
            ["Higher-investing sex", "Choosy about mates"],
            ["Lower-investing sex", "Competes for mates"]
          ],
          explain: "In both example species the male invests more and is choosy, while the female invests less and competes."
        },
        {
          type: "order",
          q: "Order the sex-role-reversed logic from cause to outcome.",
          items: [
            "Males provide most of the parental care",
            "Males become the limiting reproductive resource",
            "Females compete for access to males",
            "Females evolve larger size or ornaments and males grow choosy"
          ],
          explain: "Heavy male care makes males scarce, so females compete and evolve competitive traits while males become selective."
        }
      ]
    },
    {
      id: "l56",
      title: "Certainty of Maternity",
      intro: "Because internal fertilization guarantees maternity but leaves paternity uncertain, males evolved distinctive psychological responses.",
      questions: [
        {
          type: "mcq",
          q: "The asymmetry called 'paternity uncertainty' arises specifically because...",
          choices: [
            "fertilization is internal, so a mother always knows the offspring is hers but a father cannot be sure",
            "males produce smaller gametes than females",
            "females tend to live longer than males",
            "males invest more than females do"
          ],
          answer: 0,
          explain: "With internal fertilization the mother gives birth and is certain of maternity, while the father can never be fully certain of paternity."
        },
        {
          type: "truefalse",
          q: "Maternity is essentially always certain in species with internal fertilization.",
          answer: true,
          explain: "Because the mother carries and delivers the offspring, her genetic relationship to it is guaranteed."
        },
        {
          type: "fill",
          q: "The risk that a male could invest in offspring that are not genetically his is called paternity ____.",
          answer: "uncertainty",
          accept: ["uncertainty", "insecurity", "doubt"],
          explain: "Paternity uncertainty is the fitness threat that shapes male mating psychology in internally fertilizing species."
        },
        {
          type: "mcq",
          q: "Which male tendency is commonly explained as an adaptation to paternity uncertainty?",
          choices: [
            "indifference to a partner's fidelity",
            "sexual jealousy and mate-guarding",
            "producing fewer sperm over a lifetime",
            "a preference for much older mates"
          ],
          answer: 1,
          explain: "Sexual jealousy and mate-guarding function to lower the chance a male invests in another male's offspring."
        },
        {
          type: "truefalse",
          q: "Paternity uncertainty is expected to be a strong force in external fertilizers where a male can guard the eggs as he fertilizes them.",
          answer: false,
          explain: "External fertilization can give a male higher paternity assurance, which is one reason male care is more common in such fish; the asymmetry weakens."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [
            ["Certainty of maternity", "Mother is always genetically related to her offspring"],
            ["Paternity uncertainty", "Father cannot be fully sure of genetic relatedness"],
            ["Mate-guarding", "Behavior reducing a partner's chance to mate with rivals"],
            ["Sexual jealousy", "Emotional response hypothesized to protect paternity"]
          ],
          explain: "The maternity/paternity asymmetry under internal fertilization is proposed to underlie male jealousy and mate-guarding."
        },
        {
          type: "order",
          q: "Order the reasoning from fertilization mode to male psychology.",
          items: [
            "Fertilization occurs internally, inside the female",
            "The mother is certain of maternity but the father is not",
            "Investing in non-kin would be costly for a male",
            "Selection favors male vigilance such as jealousy and mate-guarding"
          ],
          explain: "Internal fertilization creates paternity uncertainty, and the cost of misplaced investment favors psychological safeguards in males."
        }
      ]
    }
  ]
});
