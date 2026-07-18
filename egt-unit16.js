window.ACADEMY.addUnit("egt", {
  id: "unit-16",
  title: "Kin Selection and Hamilton's Rule",
  color: "#3b74e0",
  icon: "🐝",
  description: "This unit explains how altruism toward relatives can evolve, grounding self-sacrifice in the mathematics of shared genes through Hamilton's rule, relatedness, and inclusive fitness.",
  lessons: [
    {
      id: "l121",
      title: "The altruism paradox",
      intro: "Altruism costs the actor and benefits others, so classical natural selection seems unable to explain why it persists.",
      questions: [
        {
          type: "mcq",
          q: "Why does altruistic self-sacrifice pose a paradox for classical natural selection?",
          choices: [
            "It reduces the altruist's own survival and reproduction, so genes for it should be eliminated",
            "It always benefits unrelated competitors more than the group",
            "It requires conscious moral reasoning that animals lack",
            "It increases the mutation rate of nearby genes"
          ],
          answer: 0,
          explain: "Selection favors traits that raise an individual's own reproductive success; a behavior that lowers it should be weeded out, which is the puzzle."
        },
        {
          type: "truefalse",
          q: "In evolutionary biology, altruism is defined by its behavioral effect on fitness, not by intention or kindness.",
          answer: true,
          explain: "Biological altruism means the actor lowers its own fitness while raising another's fitness, regardless of any conscious motive."
        },
        {
          type: "fill",
          q: "A biologically altruistic act imposes a fitness ____ on the actor while benefiting a recipient.",
          answer: "cost",
          accept: ["cost", "costs"],
          explain: "By definition the altruist pays a reproductive cost, which is exactly why naive selection should oppose it."
        },
        {
          type: "mcq",
          q: "A ground squirrel gives an alarm call that draws a predator's attention to itself while warning others. This is a classic example of what?",
          choices: [
            "Mutualism with the predator",
            "Apparent altruism, because the caller risks itself to benefit others",
            "Pure selfishness with no cost",
            "Genetic drift"
          ],
          answer: 1,
          explain: "The caller increases its own risk to benefit others, the hallmark of behavioral altruism that the paradox seeks to explain."
        },
        {
          type: "truefalse",
          q: "The paradox of altruism is easily solved by saying the behavior is simply 'for the good of the species.'",
          answer: false,
          explain: "Naive group-selection 'good of the species' reasoning fails because selfish individuals within a group out-reproduce altruists; a rigorous gene-level account is needed."
        },
        {
          type: "match",
          q: "Match each social behavior with how it affects the actor's and recipient's fitness.",
          pairs: [
            ["Altruism", "Actor's fitness down, recipient's up"],
            ["Selfishness", "Actor's fitness up, recipient's down"],
            ["Mutual benefit", "Both actor and recipient gain"]
          ],
          explain: "Sorting behaviors by their fitness effects clarifies why altruism, uniquely, seems to defy selection and demands a special explanation."
        },
        {
          type: "order",
          q: "Order the logical steps of the altruism paradox as classically stated.",
          items: [
            "An individual performs a costly act that helps others",
            "The act lowers the actor's own survival or reproduction",
            "Selection should reduce genes causing that costly act",
            "Yet such altruistic behavior is widespread in nature"
          ],
          explain: "Laying out the steps shows the tension: selection predicts altruism should vanish, but observation shows it persists, so something is missing from the naive model."
        }
      ]
    },
    {
      id: "l122",
      title: "Hamilton 1964",
      intro: "In 1964 W. D. Hamilton introduced inclusive fitness theory, giving altruism a rigorous gene-centered explanation.",
      questions: [
        {
          type: "mcq",
          q: "Who published the foundational theory of inclusive fitness in 1964?",
          choices: [
            "Charles Darwin",
            "W. D. Hamilton",
            "John Maynard Smith",
            "Sewall Wright"
          ],
          answer: 1,
          explain: "William Donald Hamilton published 'The Genetical Evolution of Social Behaviour' in 1964, launching inclusive fitness theory."
        },
        {
          type: "fill",
          q: "Hamilton's 1964 theory is called ____ fitness theory.",
          answer: "inclusive",
          accept: ["inclusive"],
          explain: "Hamilton coined 'inclusive fitness' to capture reproduction achieved both directly and by helping relatives reproduce."
        },
        {
          type: "truefalse",
          q: "Hamilton's 1964 papers appeared in the Journal of Theoretical Biology.",
          answer: true,
          explain: "Hamilton's two-part 1964 paper, 'The Genetical Evolution of Social Behaviour,' was published in the Journal of Theoretical Biology."
        },
        {
          type: "mcq",
          q: "What key insight did Hamilton's 1964 work provide about altruism?",
          choices: [
            "Altruism is a learned cultural behavior with no genetic basis",
            "Genes can spread by causing their bearers to help genetic relatives who also carry those genes",
            "Altruism only evolves in humans",
            "Altruism requires group selection acting against individual selection"
          ],
          answer: 1,
          explain: "Hamilton showed a gene for altruism can spread if it helps copies of itself in relatives reproduce, a gene's-eye view of selection."
        },
        {
          type: "truefalse",
          q: "Before Hamilton's 1964 formalization, there was no rigorous mathematical framework linking altruism to shared genes among relatives.",
          answer: true,
          explain: "Earlier thinkers hinted at kin-based benefits, but Hamilton was first to formalize it mathematically as inclusive fitness."
        },
        {
          type: "order",
          q: "Order these milestones in the development of the gene-centered view of altruism.",
          items: [
            "Darwin notes sterile castes puzzle in 1859",
            "Hamilton formalizes inclusive fitness in 1964",
            "Maynard Smith names 'kin selection' in 1964",
            "Dawkins popularizes the gene's-eye view in 1976"
          ],
          explain: "Hamilton's 1964 math is the pivot: Darwin flagged the puzzle, Maynard Smith coined 'kin selection,' and Dawkins later popularized the framework."
        },
        {
          type: "match",
          q: "Match each figure with their contribution to kin selection theory.",
          pairs: [
            ["W. D. Hamilton", "Formalized inclusive fitness in 1964"],
            ["John Maynard Smith", "Coined the term 'kin selection'"],
            ["Richard Dawkins", "Popularized the gene's-eye view"]
          ],
          explain: "Hamilton supplied the mathematics; Maynard Smith gave it its name; Dawkins brought it to a wide audience."
        }
      ]
    },
    {
      id: "l123",
      title: "Hamilton's rule rB greater than C",
      intro: "Hamilton's rule states that an altruism gene spreads when the relatedness-weighted benefit to the recipient exceeds the cost to the actor.",
      questions: [
        {
          type: "mcq",
          q: "Hamilton's rule states that altruism is favored by selection when:",
          choices: [
            "rB > C",
            "rC > B",
            "B > rC",
            "r > BC"
          ],
          answer: 0,
          explain: "Hamilton's rule is rB > C: relatedness times benefit to the recipient must exceed the cost to the actor."
        },
        {
          type: "fill",
          q: "In Hamilton's rule rB > C, the letter C stands for the fitness ____ paid by the altruist.",
          answer: "cost",
          accept: ["cost", "costs"],
          explain: "C is the reproductive cost the altruist incurs; B is the benefit to the recipient and r is their relatedness."
        },
        {
          type: "truefalse",
          q: "According to Hamilton's rule, higher relatedness (r) makes altruism easier to favor, all else being equal.",
          answer: true,
          explain: "A larger r raises the left side rB, so the inequality rB > C is satisfied more readily when the recipient is a closer relative."
        },
        {
          type: "match",
          q: "Match each symbol in Hamilton's rule with its meaning.",
          pairs: [
            ["r", "Coefficient of relatedness"],
            ["B", "Reproductive benefit to the recipient"],
            ["C", "Reproductive cost to the actor"]
          ],
          explain: "Hamilton's rule rB > C combines relatedness r, recipient benefit B, and actor cost C into one selection condition."
        },
        {
          type: "mcq",
          q: "If a helper's cost is C = 1 offspring and the recipient is a full sibling (r = 0.5), the benefit B must exceed what for altruism to be favored?",
          choices: [
            "B > 0.5",
            "B > 1",
            "B > 2",
            "B > 4"
          ],
          answer: 2,
          explain: "rB > C means 0.5 * B > 1, so B > 2: the sibling must gain more than two offspring to outweigh the helper's cost of one."
        },
        {
          type: "truefalse",
          q: "Hamilton's rule implies that altruism toward a completely unrelated individual (r = 0) can never be favored by kin selection alone.",
          answer: true,
          explain: "With r = 0 the term rB is zero, which cannot exceed a positive cost C, so kin selection alone cannot favor helping non-relatives."
        },
        {
          type: "order",
          q: "Order the steps to apply Hamilton's rule to a helping decision.",
          items: [
            "Estimate the cost C to the actor",
            "Estimate the benefit B to the recipient",
            "Determine the relatedness r between them",
            "Check whether rB is greater than C"
          ],
          explain: "You gather cost, benefit, and relatedness, then test the inequality rB > C to predict whether altruism will be favored."
        }
      ]
    },
    {
      id: "l124",
      title: "Relatedness coefficient r",
      intro: "The coefficient of relatedness r measures the probability that two individuals share a given gene by common descent.",
      questions: [
        {
          type: "mcq",
          q: "What is the coefficient of relatedness r between full siblings in a diploid species?",
          choices: [
            "0.125",
            "0.25",
            "0.5",
            "1.0"
          ],
          answer: 2,
          explain: "Full siblings share on average half their genes by descent, giving r = 0.5."
        },
        {
          type: "fill",
          q: "The coefficient r is the probability that two individuals share a particular gene by common ____.",
          answer: "descent",
          accept: ["descent", "ancestry"],
          explain: "Relatedness r reflects genes shared identical by descent from common ancestors, not just any matching alleles."
        },
        {
          type: "match",
          q: "Match each diploid relationship with its coefficient of relatedness r.",
          pairs: [
            ["Parent and offspring", "0.5"],
            ["Full siblings", "0.5"],
            ["Half siblings", "0.25"],
            ["First cousins", "0.125"]
          ],
          explain: "Each step of shared ancestry halves expected relatedness: parent-offspring and full sibs are 0.5, half sibs 0.25, first cousins 0.125."
        },
        {
          type: "truefalse",
          q: "In a diploid species, a parent and its offspring have a relatedness of r = 0.5.",
          answer: true,
          explain: "An offspring inherits exactly half of each parent's genes, so parent-offspring relatedness is 0.5."
        },
        {
          type: "mcq",
          q: "What is the relatedness r between identical (monozygotic) twins?",
          choices: [
            "0.25",
            "0.5",
            "0.75",
            "1.0"
          ],
          answer: 3,
          explain: "Identical twins arise from one zygote and share essentially all their genes, giving r = 1.0."
        },
        {
          type: "truefalse",
          q: "Relatedness always decreases as you move to more distant relatives on a family tree.",
          answer: true,
          explain: "Each additional generational link between relatives roughly halves the probability of sharing a gene by descent, lowering r."
        },
        {
          type: "order",
          q: "Order these diploid relatives from highest to lowest coefficient of relatedness r.",
          items: [
            "Identical twin (r = 1.0)",
            "Full sibling (r = 0.5)",
            "Half sibling (r = 0.25)",
            "First cousin (r = 0.125)"
          ],
          explain: "Relatedness declines from 1.0 for identical twins down through siblings and half sibs to 0.125 for first cousins."
        }
      ]
    },
    {
      id: "l125",
      title: "Inclusive fitness defined",
      intro: "Inclusive fitness sums an individual's own reproduction plus its effect on the reproduction of relatives, each weighted by relatedness.",
      questions: [
        {
          type: "mcq",
          q: "Inclusive fitness is best defined as:",
          choices: [
            "Only the offspring an individual produces directly",
            "An individual's direct reproduction plus its effect on relatives' reproduction, weighted by relatedness",
            "The total number of individuals in a population",
            "The average lifespan of a species"
          ],
          answer: 1,
          explain: "Inclusive fitness combines direct (personal) reproduction with indirect contributions from helping relatives, each discounted by r."
        },
        {
          type: "fill",
          q: "The reproduction an individual gains by helping relatives survive and breed is called its ____ fitness component.",
          answer: "indirect",
          accept: ["indirect"],
          explain: "The indirect component captures extra copies of one's genes passed on through aided relatives; the direct component is one's own offspring."
        },
        {
          type: "match",
          q: "Match each fitness term with its meaning.",
          pairs: [
            ["Direct fitness", "Reproduction through one's own offspring"],
            ["Indirect fitness", "Reproduction gained by helping relatives breed"],
            ["Inclusive fitness", "Direct plus indirect fitness combined"]
          ],
          explain: "Inclusive fitness is the sum of the direct and indirect components, capturing all of an individual's gene-propagating effects."
        },
        {
          type: "truefalse",
          q: "Inclusive fitness counts an individual's own offspring twice: once directly and once indirectly.",
          answer: false,
          explain: "Direct fitness covers one's own offspring; indirect fitness covers relatives' offspring one has helped. They are distinct, not double-counted."
        },
        {
          type: "mcq",
          q: "Why does the indirect fitness component weight a relative's extra offspring by the relatedness r?",
          choices: [
            "Because r sets the number of offspring a relative can have",
            "Because only a fraction r of the relative's genes are shared by descent with the helper",
            "Because r measures the physical distance between relatives",
            "Because relatives always reproduce at rate r"
          ],
          answer: 1,
          explain: "Each offspring the relative produces carries the helper's genes only with probability r, so the contribution is discounted by r."
        },
        {
          type: "truefalse",
          q: "Inclusive fitness explains altruism without needing group selection, by focusing on gene propagation through relatives.",
          answer: true,
          explain: "Hamilton's inclusive fitness works at the level of gene copies shared among kin, so it explains altruism through individual and kin effects rather than group selection."
        },
        {
          type: "order",
          q: "Order the steps to calculate an individual's inclusive fitness contribution.",
          items: [
            "Count offspring produced directly",
            "Count extra offspring relatives produced due to help",
            "Weight each relative's extra offspring by relatedness r",
            "Add the direct and weighted indirect contributions"
          ],
          explain: "Inclusive fitness is built by summing direct offspring with the relatedness-weighted extra offspring gained by aided relatives."
        }
      ]
    },
    {
      id: "l126",
      title: "Haldane's quip",
      intro: "J. B. S. Haldane's famous joke about dying for two brothers or eight cousins captures the arithmetic of kin selection.",
      questions: [
        {
          type: "mcq",
          q: "J. B. S. Haldane reportedly quipped that he would lay down his life for how many brothers?",
          choices: [
            "Two brothers",
            "Four brothers",
            "Eight brothers",
            "Sixteen brothers"
          ],
          answer: 0,
          explain: "Haldane joked he would give his life for two brothers, because two brothers (r = 0.5 each) together carry gene copies equal to one of himself."
        },
        {
          type: "mcq",
          q: "In Haldane's quip, how many cousins would be worth one's own life?",
          choices: [
            "Two cousins",
            "Four cousins",
            "Eight cousins",
            "Sixteen cousins"
          ],
          answer: 2,
          explain: "First cousins have r = 0.125, so eight of them (8 * 0.125 = 1) together match one's own genetic complement."
        },
        {
          type: "fill",
          q: "Haldane's quip reflects that two brothers or eight cousins each carry, in total, the genetic equivalent of ____ copy of oneself.",
          answer: "one",
          accept: ["one", "1"],
          explain: "Two brothers at r = 0.5 sum to 1.0, and eight cousins at r = 0.125 also sum to 1.0, matching one full self."
        },
        {
          type: "truefalse",
          q: "Haldane's quip illustrates the logic of kin selection using the arithmetic of relatedness.",
          answer: true,
          explain: "The joke turns relatedness coefficients into a rule of thumb: sacrifice pays genetically when the relatives saved sum to more than one's own relatedness value."
        },
        {
          type: "match",
          q: "Match each group of relatives with the summed relatedness that equals one genetic 'self.'",
          pairs: [
            ["Two brothers", "2 x 0.5 = 1.0"],
            ["Four half-siblings", "4 x 0.25 = 1.0"],
            ["Eight first cousins", "8 x 0.125 = 1.0"]
          ],
          explain: "Haldane's arithmetic: enough relatives to sum a total relatedness of 1.0 carry, on average, as many of your genes as you do."
        },
        {
          type: "truefalse",
          q: "Haldane published a rigorous mathematical proof of kin selection before Hamilton, based on this brothers-and-cousins quip.",
          answer: false,
          explain: "Haldane's remark was an offhand quip illustrating the idea; the rigorous formalization came from Hamilton in 1964."
        },
        {
          type: "order",
          q: "Order the reasoning behind Haldane's quip from premise to conclusion.",
          items: [
            "A full sibling shares half your genes (r = 0.5)",
            "Two full siblings together share the genetic equivalent of one you",
            "Saving two siblings breaks even genetically with your own loss",
            "Therefore dying for two brothers is genetically 'worth it'"
          ],
          explain: "The quip builds from relatedness values to a break-even point: relatives summing to r = 1.0 offset the loss of oneself."
        }
      ]
    },
    {
      id: "l127",
      title: "Haplodiploidy and eusociality",
      intro: "In haplodiploid Hymenoptera, unusual relatedness among sisters may help explain the evolution of sterile worker castes.",
      questions: [
        {
          type: "mcq",
          q: "In haplodiploid species like bees, ants, and wasps, how is sex determined?",
          choices: [
            "Females develop from unfertilized eggs and are haploid",
            "Males develop from unfertilized eggs and are haploid; females from fertilized eggs are diploid",
            "Both sexes are always diploid",
            "Sex is determined purely by temperature"
          ],
          answer: 1,
          explain: "In haplodiploidy, males arise from unfertilized (haploid) eggs and females from fertilized (diploid) eggs, which skews relatedness patterns."
        },
        {
          type: "mcq",
          q: "Under haplodiploidy, what is the relatedness r between full sisters sharing the same father?",
          choices: [
            "0.25",
            "0.5",
            "0.75",
            "1.0"
          ],
          answer: 2,
          explain: "Full sisters share all of their haploid father's genes plus half of their mother's, giving an unusually high r of 0.75."
        },
        {
          type: "fill",
          q: "The idea that r = 0.75 among sisters promotes worker sterility in Hymenoptera is called the ____ hypothesis.",
          answer: "haplodiploidy",
          accept: ["haplodiploidy", "haplodiploid", "three-quarters", "3/4"],
          explain: "The haplodiploidy hypothesis proposes that the three-quarters relatedness among sisters favors helping the queen over reproducing directly."
        },
        {
          type: "truefalse",
          q: "Because sisters are related to each other by 0.75 but to their own daughters by only 0.5, workers may gain more genetically by raising sisters.",
          answer: true,
          explain: "Higher relatedness to sisters (0.75) than to potential offspring (0.5) can make helping the queen produce more sisters genetically favorable."
        },
        {
          type: "match",
          q: "Match each haplodiploid relationship with its relatedness r (from a female's viewpoint).",
          pairs: [
            ["Full sister (same father)", "0.75"],
            ["Own daughter", "0.5"],
            ["Brother", "0.25"]
          ],
          explain: "Haplodiploidy produces asymmetric relatedness: sisters 0.75, daughters 0.5, brothers only 0.25, shaping which relatives are worth helping."
        },
        {
          type: "truefalse",
          q: "The haplodiploidy hypothesis is now regarded as the sole and complete explanation for all eusociality.",
          answer: false,
          explain: "Eusociality also appears in diploid species like termites and naked mole-rats, so haplodiploidy is at most a contributing factor, not the whole story."
        },
        {
          type: "mcq",
          q: "What is a sterile worker caste, characteristic of eusocial insects?",
          choices: [
            "A group that reproduces more than the queen",
            "Individuals that forgo their own reproduction to help raise the queen's offspring",
            "Males that fertilize all eggs in the colony",
            "Solitary insects that never cooperate"
          ],
          answer: 1,
          explain: "Sterile workers give up direct reproduction and instead raise the queen's brood, gaining inclusive fitness through their relatives."
        }
      ]
    },
    {
      id: "l128",
      title: "Greenbeard genes",
      intro: "A greenbeard gene directs altruism toward others carrying the same gene, enabling helping based on recognition rather than kinship.",
      questions: [
        {
          type: "mcq",
          q: "What defines a 'greenbeard' gene?",
          choices: [
            "A gene that causes altruism only toward close family members",
            "A gene that produces a recognizable signal, recognizes that signal in others, and directs help toward bearers of it",
            "A gene that lowers relatedness between siblings",
            "A gene expressed only in males"
          ],
          answer: 1,
          explain: "A greenbeard gene must do three things: create a perceptible tag, let bearers recognize the tag, and cause preferential help toward fellow tag-bearers."
        },
        {
          type: "fill",
          q: "Greenbeard altruism is directed at others who share the same gene, so it does not require genealogical ____.",
          answer: "kinship",
          accept: ["kinship", "relatedness", "kin"],
          explain: "Greenbeards recognize gene-mates directly by a tag, so help can flow between unrelated individuals who happen to share the gene."
        },
        {
          type: "truefalse",
          q: "The greenbeard concept was introduced by Richard Dawkins in 'The Selfish Gene' (1976), building on a suggestion by Hamilton.",
          answer: true,
          explain: "Dawkins coined the vivid 'green beard' thought experiment in 1976, elaborating an idea Hamilton had raised, to illustrate gene-level recognition."
        },
        {
          type: "mcq",
          q: "How does a greenbeard mechanism differ from ordinary kin selection?",
          choices: [
            "It relies on a shared recognizable trait rather than genealogical relatedness",
            "It only works among identical twins",
            "It requires the recipients to be unrelated",
            "It ignores the gene's own propagation"
          ],
          answer: 0,
          explain: "Kin selection uses genealogical relatedness as a statistical proxy for shared genes; greenbeards detect the shared gene directly via its signal."
        },
        {
          type: "truefalse",
          q: "Greenbeard genes have never been found in any real organism and remain purely hypothetical.",
          answer: false,
          explain: "Real greenbeard-like systems exist, for example the csA adhesion gene in the slime mold Dictyostelium and the Gp-9 gene in fire ants."
        },
        {
          type: "match",
          q: "Match each greenbeard requirement with its description.",
          pairs: [
            ["Signal", "A perceptible tag such as a 'green beard'"],
            ["Recognition", "The ability to detect the tag in others"],
            ["Directed help", "Preferential altruism toward tag-bearers"]
          ],
          explain: "A true greenbeard gene bundles all three effects: it produces a tag, recognizes that tag, and channels altruism toward fellow bearers."
        },
        {
          type: "order",
          q: "Order the three linked effects a greenbeard gene must produce, as Dawkins described.",
          items: [
            "Produce a perceptible signal or tag in the bearer",
            "Enable the bearer to recognize that same tag in others",
            "Cause the bearer to behave altruistically toward tag-bearers"
          ],
          explain: "Dawkins's greenbeard requires a tag, recognition of the tag, and preferential altruism toward those displaying it, all from one gene."
        }
      ]
    }
  ]
});
