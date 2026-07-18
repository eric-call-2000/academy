window.ACADEMY.addUnit("evopsych", {
  id: "unit-5",
  title: "Inclusive Fitness and Kin Selection",
  color: "#7c5cff",
  icon: "👪",
  description: "How William Hamilton's theory of inclusive fitness solved the puzzle of altruism by showing that genes can spread by helping copies of themselves in relatives.",
  lessons: [
    {
      id: "l33",
      title: "The Puzzle of Altruism",
      intro: "Self-sacrifice that lowers your own reproduction seems to defy natural selection, so why does altruism keep appearing in nature?",
      questions: [
        {
          type: "mcq",
          q: "In evolutionary biology, when is a behavior called 'altruistic'?",
          choices: [
            "When it raises both the actor's and the recipient's fitness",
            "When it lowers the recipient's fitness to help the actor",
            "When it lowers the actor's own fitness while raising a recipient's fitness",
            "When it has no measurable effect on anyone's fitness"
          ],
          answer: 2,
          explain: "Biological altruism is defined by its fitness consequences: a cost to the actor and a benefit to the recipient."
        },
        {
          type: "truefalse",
          q: "Biological altruism is defined by the actor's kind intentions rather than by its effects on fitness.",
          answer: false,
          explain: "Biologists define altruism strictly by fitness outcomes (cost to actor, benefit to recipient), not by conscious intentions."
        },
        {
          type: "fill",
          q: "A sterile worker bee that never reproduces yet labors to feed the queen's young is a classic example of biological ____.",
          answer: "altruism",
          accept: ["altruism", "altruistic behavior", "altruistic behaviour"],
          explain: "The worker pays a huge fitness cost (zero personal reproduction) to benefit others, the hallmark of biological altruism."
        },
        {
          type: "match",
          q: "Match each behavior to why it counts as altruistic.",
          pairs: [
            ["Alarm call", "Warning others of a predator while drawing danger to yourself"],
            ["Sterile worker", "Forgoing reproduction to raise the colony's young"],
            ["Food sharing", "Giving away hard-won calories that could have fed you"]
          ],
          explain: "Each act imposes a fitness cost on the actor while benefiting others, which is exactly what makes altruism a puzzle."
        },
        {
          type: "order",
          q: "Put the steps of the altruism puzzle in logical order.",
          items: [
            "Natural selection favors traits that raise an individual's own reproduction",
            "Altruism lowers the actor's own reproduction",
            "So altruism should be selected against",
            "Yet self-sacrificing behavior is common in nature"
          ],
          explain: "The clash between the third and fourth steps is precisely the puzzle that inclusive fitness later resolved."
        },
        {
          type: "mcq",
          q: "Before Hamilton, how did many biologists wrongly explain self-sacrifice?",
          choices: [
            "By arguing that genes never influence behavior",
            "By claiming animals act 'for the good of the species' (naive group selection)",
            "By denying that altruism exists in nature at all",
            "By proposing that altruists always secretly out-reproduce everyone"
          ],
          answer: 1,
          explain: "The vague 'for the good of the species' view dominated until George C. Williams (1966) and others exposed its flaws."
        },
        {
          type: "truefalse",
          q: "Self-sacrificing behavior appeared to conflict with the Darwinian expectation that selection favors an individual's own reproductive success.",
          answer: true,
          explain: "That apparent conflict is the whole puzzle: individual-level selection seems to punish altruists, yet altruism persists."
        }
      ]
    },
    {
      id: "l34",
      title: "Hamilton's 1964 Papers",
      intro: "William Hamilton's two 1964 papers formalized inclusive fitness, extending Darwin from the individual to the gene shared among kin.",
      questions: [
        {
          type: "mcq",
          q: "In what year did W. D. Hamilton publish his two landmark papers on the genetical evolution of social behaviour?",
          choices: [
            "1964",
            "1859",
            "1976",
            "1930"
          ],
          answer: 0,
          explain: "Hamilton's two-part paper appeared in 1964 in the Journal of Theoretical Biology. (1859 = Darwin's Origin; 1976 = Dawkins' Selfish Gene; 1930 = Fisher.)"
        },
        {
          type: "mcq",
          q: "Which key concept did Hamilton's 1964 papers formalize?",
          choices: [
            "Group selection",
            "Sexual selection",
            "Genetic drift",
            "Inclusive fitness"
          ],
          answer: 3,
          explain: "Hamilton introduced inclusive fitness: an individual's own reproduction plus its relatedness-weighted effects on kin."
        },
        {
          type: "truefalse",
          q: "The term 'kin selection' was coined by John Maynard Smith, not by Hamilton himself.",
          answer: true,
          explain: "Maynard Smith coined 'kin selection' in 1964; Hamilton had framed the underlying idea as inclusive fitness."
        },
        {
          type: "fill",
          q: "Inclusive fitness equals an individual's own reproduction plus its effect on the reproduction of ____, each weighted by relatedness.",
          answer: "relatives",
          accept: ["relatives", "kin", "relative", "family"],
          explain: "Inclusive fitness adds the relatedness-weighted reproductive effects on relatives to an individual's personal reproduction."
        },
        {
          type: "match",
          q: "Match each name or term to its contribution.",
          pairs: [
            ["W. D. Hamilton", "Formalized inclusive fitness in 1964"],
            ["John Maynard Smith", "Coined the term 'kin selection'"],
            ["Richard Dawkins", "Popularized the gene's-eye view in The Selfish Gene (1976)"],
            ["Inclusive fitness", "Own reproduction plus relatedness-weighted effects on kin"]
          ],
          explain: "Hamilton built the theory, Maynard Smith named kin selection, and Dawkins popularized the gene's-eye interpretation."
        },
        {
          type: "order",
          q: "Order these milestones by publication date, earliest first.",
          items: [
            "Darwin publishes On the Origin of Species (1859)",
            "Hamilton publishes the inclusive-fitness papers (1964)",
            "Maynard Smith coins 'kin selection' (1964)",
            "Dawkins publishes The Selfish Gene (1976)"
          ],
          explain: "Hamilton's 1964 theory came a century after Darwin and set the stage for Dawkins' 1976 popular synthesis."
        },
        {
          type: "truefalse",
          q: "Inclusive fitness counts only an individual's own direct offspring and ignores effects on relatives.",
          answer: false,
          explain: "The whole point of inclusive fitness is that it also includes the relatedness-weighted effects an actor has on kin."
        }
      ]
    },
    {
      id: "l35",
      title: "Hamilton's Rule",
      intro: "Hamilton's rule, rB > C, states the simple condition under which natural selection favors an altruistic act.",
      questions: [
        {
          type: "mcq",
          q: "Which inequality is Hamilton's rule?",
          choices: [
            "rC > B",
            "rB > C",
            "B > rC",
            "r > B x C"
          ],
          answer: 1,
          explain: "Altruism is favored when relatedness times the benefit to the recipient exceeds the cost to the actor: rB > C."
        },
        {
          type: "fill",
          q: "In Hamilton's rule rB > C, the letter C stands for the fitness ____ paid by the actor.",
          answer: "cost",
          accept: ["cost", "c", "the cost"],
          explain: "C is the reproductive cost the altruist pays; B is the benefit to the recipient, and r is their relatedness."
        },
        {
          type: "truefalse",
          q: "Hamilton's rule predicts that altruism spreads when the cost to the actor is greater than the relatedness-weighted benefit.",
          answer: false,
          explain: "It is the reverse: altruism is favored when the relatedness-weighted benefit (rB) exceeds the cost (C)."
        },
        {
          type: "match",
          q: "Match each symbol in Hamilton's rule to its meaning.",
          pairs: [
            ["r", "Coefficient of relatedness between actor and recipient"],
            ["B", "Fitness benefit gained by the recipient"],
            ["C", "Fitness cost paid by the actor"]
          ],
          explain: "Hamilton's rule rB > C combines relatedness, benefit, and cost into a single selection condition."
        },
        {
          type: "mcq",
          q: "You could save a full sibling (r = 0.5), and the act costs you 1 unit of fitness. By Hamilton's rule, how large must the benefit B to your sibling be for the act to pay off?",
          choices: [
            "More than 0.25 units",
            "More than 1 unit",
            "More than 2 units",
            "Any benefit at all works"
          ],
          answer: 2,
          explain: "Solve rB > C: 0.5 x B > 1, so B must exceed 2 units for the altruism to be favored."
        },
        {
          type: "order",
          q: "Order the steps for applying Hamilton's rule to a possible altruistic act.",
          items: [
            "Measure the fitness cost C to the actor",
            "Measure the fitness benefit B to the recipient",
            "Weight the benefit by the relatedness r",
            "Favor the act only if rB exceeds C"
          ],
          explain: "Hamilton's rule compares the relatedness-discounted benefit against the cost the actor pays."
        },
        {
          type: "truefalse",
          q: "All else equal, higher relatedness (r) makes an altruistic act easier for selection to favor.",
          answer: true,
          explain: "A larger r inflates the rB term, so the benefit needed to clear the cost C is smaller."
        }
      ]
    },
    {
      id: "l36",
      title: "Coefficient of Relatedness",
      intro: "The coefficient of relatedness r measures the chance that two individuals share a given gene by descent, and it halves with each pedigree link.",
      questions: [
        {
          type: "mcq",
          q: "What is the coefficient of relatedness (r) between full siblings?",
          choices: [
            "1.0",
            "0.125",
            "0.5",
            "0.25"
          ],
          answer: 2,
          explain: "Full siblings share, on average, half their genes by descent, giving r = 0.5."
        },
        {
          type: "mcq",
          q: "What is r between first cousins?",
          choices: [
            "0.125",
            "0.5",
            "0.25",
            "0.0625"
          ],
          answer: 0,
          explain: "First cousins share one-eighth of their genes by descent, so r = 0.125."
        },
        {
          type: "fill",
          q: "A parent and their biological child share a coefficient of relatedness of ____.",
          answer: "0.5",
          accept: ["0.5", ".5", "0.50", "one half", "1/2"],
          explain: "A child inherits exactly half of each parent's genes, so parent-offspring r = 0.5."
        },
        {
          type: "match",
          q: "Match each relationship to its coefficient of relatedness.",
          pairs: [
            ["Identical twin", "1.0"],
            ["Full sibling or parent", "0.5"],
            ["Grandparent or half-sibling", "0.25"],
            ["First cousin", "0.125"]
          ],
          explain: "Relatedness falls by half with each additional step through the family tree."
        },
        {
          type: "truefalse",
          q: "Identical (monozygotic) twins have a coefficient of relatedness of 1.0.",
          answer: true,
          explain: "Monozygotic twins are genetically identical, so they share all their genes and r = 1.0."
        },
        {
          type: "order",
          q: "Order these relatives from MOST to LEAST related to you.",
          items: [
            "Identical twin (r = 1.0)",
            "Full sibling (r = 0.5)",
            "Grandparent (r = 0.25)",
            "First cousin (r = 0.125)"
          ],
          explain: "Each extra link in the pedigree multiplies relatedness by one-half, producing this descending sequence."
        },
        {
          type: "truefalse",
          q: "First cousins are more closely related to each other than full siblings are.",
          answer: false,
          explain: "First cousins (r = 0.125) are far less related than full siblings (r = 0.5)."
        }
      ]
    },
    {
      id: "l37",
      title: "Haldane's Quip",
      intro: "J. B. S. Haldane's joke about dying for 'two brothers or eight cousins' captures the gene-accounting intuition behind Hamilton's rule.",
      questions: [
        {
          type: "mcq",
          q: "Which biologist is famous for quipping that he would lay down his life for 'two brothers or eight cousins'?",
          choices: [
            "Charles Darwin",
            "W. D. Hamilton",
            "Richard Dawkins",
            "J. B. S. Haldane"
          ],
          answer: 3,
          explain: "The quip is attributed to J. B. S. Haldane and anticipates the arithmetic Hamilton later formalized."
        },
        {
          type: "fill",
          q: "Haldane joked that he would lay down his life for ____ brothers or eight cousins.",
          answer: "two",
          accept: ["two", "2"],
          explain: "Two brothers at r = 0.5 each sum to 1.0, matching eight cousins at r = 0.125 each."
        },
        {
          type: "mcq",
          q: "Why does Haldane's quip pair 'two brothers' with 'eight cousins'?",
          choices: [
            "Because brothers and cousins are equally related to you",
            "Because 2 brothers (r = 0.5) and 8 cousins (r = 0.125) each sum to 1.0 copies of your genes",
            "Because eight is simply a memorable round number",
            "Because cousins are actually more related than brothers"
          ],
          answer: 1,
          explain: "2 x 0.5 = 1.0 and 8 x 0.125 = 1.0, so each bundle carries, on average, one full copy of the actor's genes."
        },
        {
          type: "truefalse",
          q: "Haldane's quip captures the same gene-accounting logic that Hamilton later formalized as inclusive fitness.",
          answer: true,
          explain: "The joke does the relatedness bookkeeping informally, which is exactly what Hamilton's rule made rigorous."
        },
        {
          type: "match",
          q: "Match each bundle of relatives to its total relatedness.",
          pairs: [
            ["2 brothers", "0.5 + 0.5 = 1.0"],
            ["4 nephews", "4 x 0.25 = 1.0"],
            ["8 cousins", "8 x 0.125 = 1.0"]
          ],
          explain: "Each bundle sums to about one full genetic copy of the actor, so Hamilton's rule roughly breaks even."
        },
        {
          type: "order",
          q: "Arrange these kin bundles from the FEWEST to the MOST individuals needed to equal one 'self' in gene terms.",
          items: [
            "2 brothers (r = 0.5 each)",
            "4 nephews (r = 0.25 each)",
            "8 cousins (r = 0.125 each)"
          ],
          explain: "As relatedness drops, more individuals are needed to carry, on average, a full copy of your genes."
        },
        {
          type: "truefalse",
          q: "Haldane claimed he would sacrifice himself to save a single first cousin.",
          answer: false,
          explain: "One cousin (r = 0.125) carries only about an eighth of his genes, far below the break-even point in the quip."
        }
      ]
    },
    {
      id: "l38",
      title: "Eusociality and Haplodiploidy",
      intro: "Sterile worker castes in ants and bees puzzled Darwin; haplodiploidy offers one kin-selection route to their evolution.",
      questions: [
        {
          type: "mcq",
          q: "Which set of traits defines a eusocial species?",
          choices: [
            "Cooperative brood care, overlapping generations, and a reproductive division of labor (sterile castes)",
            "Solitary living with no parental care at all",
            "Seasonal migration in large mixed flocks",
            "Lifelong monogamy between one male and one female"
          ],
          answer: 0,
          explain: "Eusociality means cooperative care of young, overlapping generations, and a reproductive division of labor with non-reproductive helpers."
        },
        {
          type: "mcq",
          q: "Under haplodiploidy (as in ants, bees, and wasps), how do males develop?",
          choices: [
            "From fertilized, diploid eggs",
            "By splitting off from a female twin",
            "From unfertilized, haploid eggs",
            "Only during the autumn season"
          ],
          answer: 2,
          explain: "In Hymenoptera, males arise from unfertilized haploid eggs, while females come from fertilized diploid eggs."
        },
        {
          type: "fill",
          q: "Because their father is haploid, full sisters in a bee colony share an unusually high relatedness of r = ____.",
          answer: "0.75",
          accept: ["0.75", ".75", "3/4", "three quarters", "three-quarters"],
          explain: "Sisters share all of the haploid father's genes plus half of the mother's, giving r = 0.75."
        },
        {
          type: "truefalse",
          q: "Because a worker is more related to her full sisters (0.75) than she would be to her own offspring (0.5), helping raise sisters can boost her inclusive fitness.",
          answer: true,
          explain: "This relatedness asymmetry is Hamilton's classic haplodiploidy argument for the evolution of sterile female workers."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Eusociality", "Cooperative brood care with a non-reproductive worker caste"],
            ["Haplodiploidy", "Males from unfertilized eggs, females from fertilized eggs"],
            ["Queen", "The colony's primary reproductive female"],
            ["Worker", "A non-reproductive female that helps raise siblings"]
          ],
          explain: "Haplodiploidy raises sister-sister relatedness, which Hamilton linked to the origin of sterile worker castes."
        },
        {
          type: "truefalse",
          q: "Termites are eusocial yet diplodiploid, showing that haplodiploidy is not strictly required for eusociality to evolve.",
          answer: true,
          explain: "Termites (and eusocial naked mole-rats) lack haplodiploidy, so it is one contributing factor, not a necessary cause."
        },
        {
          type: "order",
          q: "Arrange these relatives of a worker bee from MOST to LEAST related to her.",
          items: [
            "A full sister (r = 0.75)",
            "Her own offspring (r = 0.5)",
            "A brother (r = 0.25)"
          ],
          explain: "Haplodiploidy makes full sisters (0.75) more related to a worker than her own offspring would be (0.5)."
        }
      ]
    },
    {
      id: "l39",
      title: "Kin Recognition Mechanisms",
      intro: "To direct help toward relatives, animals use cues ranging from simple spatial rules to phenotype matching against a learned template.",
      questions: [
        {
          type: "mcq",
          q: "What is 'phenotype matching' in kin recognition?",
          choices: [
            "Attacking any unfamiliar individual on sight",
            "Comparing another individual's traits (such as odor) to a learned template of self or known kin",
            "Counting how many offspring a rival has produced",
            "Choosing social partners completely at random"
          ],
          answer: 1,
          explain: "Phenotype matching compares a stranger's cues against an internal template built from self or familiar relatives."
        },
        {
          type: "mcq",
          q: "A bird that treats whoever grew up in its nest as a sibling is relying on which cue?",
          choices: [
            "Phenotype matching",
            "A recognition (green-beard) allele",
            "Random guessing",
            "Association and familiarity (spatial context)"
          ],
          answer: 3,
          explain: "Association rules ('treat nestmates as kin') exploit reliable rearing context instead of reading genes directly."
        },
        {
          type: "fill",
          q: "The Westermarck effect describes how children raised together from an early age tend to develop reduced sexual ____ toward one another as adults.",
          answer: "attraction",
          accept: ["attraction", "desire", "interest", "sexual attraction"],
          explain: "Co-rearing acts as a familiarity cue for kinship, dampening later sexual attraction and helping avoid inbreeding."
        },
        {
          type: "match",
          q: "Match each kin-recognition mechanism to its description.",
          pairs: [
            ["Spatial / association cue", "Treat whoever is in my nest or home as kin"],
            ["Familiarity", "Recognize individuals known since early rearing"],
            ["Phenotype matching", "Compare a stranger's cues to a template of self or kin"],
            ["Recognition allele (green-beard)", "A gene that marks its bearer and directs help to fellow bearers"]
          ],
          explain: "These mechanisms range from crude spatial rules to the rare single-gene 'green-beard' effect."
        },
        {
          type: "truefalse",
          q: "Body-odor cues linked to the MHC (major histocompatibility complex) can contribute to kin recognition and mate choice in humans.",
          answer: true,
          explain: "MHC-linked scent cues help distinguish kin and shape preferences, as suggested by Wedekind's 1995 odor studies."
        },
        {
          type: "truefalse",
          q: "Kin recognition requires that an animal consciously know and reason about its family tree.",
          answer: false,
          explain: "Most kin recognition runs on simple cues (location, familiarity, phenotype matching) with no explicit knowledge of pedigrees."
        },
        {
          type: "order",
          q: "Order the steps an animal follows when using phenotype matching.",
          items: [
            "Build an internal template from self or familiar kin",
            "Compare a stranger's cues to that template",
            "Treat the stranger as kin if the cues closely match"
          ],
          explain: "Phenotype matching works by forming a template, comparing against it, then making a kin-versus-non-kin decision."
        }
      ]
    },
    {
      id: "l40",
      title: "Nepotism in Humans",
      intro: "Human helping, resource flow, and investment are biased toward genetic relatives in graded ways that track Hamilton's rule.",
      questions: [
        {
          type: "mcq",
          q: "In evolutionary terms, 'nepotism' refers to...",
          choices: [
            "Avoiding all contact with relatives",
            "Sharing resources equally with total strangers",
            "Biasing help and resources toward genetic relatives",
            "Competing hardest against your own close kin"
          ],
          answer: 2,
          explain: "Nepotism is favoring genetic kin, exactly the pattern kin selection predicts."
        },
        {
          type: "mcq",
          q: "Burnstein, Crandall, and Kitayama (1994) found that as decisions shifted from everyday favors to life-or-death help, willingness to help...",
          choices: [
            "Rose more steeply with the recipient's genetic relatedness",
            "Became random with respect to kinship",
            "Favored distant strangers over close kin",
            "Disappeared entirely"
          ],
          answer: 0,
          explain: "In high-cost, life-or-death scenarios, helping tracked genetic relatedness much more strongly, as kin selection predicts."
        },
        {
          type: "fill",
          q: "A maternal grandmother is, on average, the most investing grandparent partly because she faces no uncertain links of ____ to her grandchild.",
          answer: "paternity",
          accept: ["paternity", "paternity certainty"],
          explain: "A maternal grandmother is linked to her grandchild through two certain birth events, so she has zero paternity uncertainty."
        },
        {
          type: "truefalse",
          q: "Inheritance and bequests tend to flow toward close genetic kin, consistent with kin selection.",
          answer: true,
          explain: "People overwhelmingly leave wealth to children and other close relatives, channeling resources along lines of relatedness."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [
            ["Nepotism", "Directing help and resources toward genetic relatives"],
            ["Life-or-death aid", "Tracks relatedness more steeply than everyday favors"],
            ["Grandparental gradient", "Maternal grandmothers typically invest the most"],
            ["Hamilton's rule", "Predicts help should be graded by r, B, and C"]
          ],
          explain: "Human helping patterns line up closely with the graded predictions of kin selection."
        },
        {
          type: "order",
          q: "Arrange grandparents from the one who typically invests MOST to the one who typically invests LEAST (Euler and Weinstein, 1996).",
          items: [
            "Maternal grandmother",
            "Maternal grandfather",
            "Paternal grandmother",
            "Paternal grandfather"
          ],
          explain: "The commonly reported gradient runs MGM > MGF > PGM > PGF, tracking how many links of uncertain paternity separate each grandparent from the grandchild."
        },
        {
          type: "truefalse",
          q: "Studies show that humans distribute help at random, with no bias toward genetic relatives.",
          answer: false,
          explain: "The evidence is the opposite: help, resources, and life-saving aid are all biased toward closer kin."
        }
      ]
    }
  ]
});
