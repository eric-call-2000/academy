window.ACADEMY.addUnit("egt", {
  id: "unit-17",
  title: "Five Rules for Cooperation",
  color: "#3b74e0",
  icon: "🤝",
  description: "Surveys Martin Nowak's unifying framework of five mechanisms that let cooperation evolve despite the pull of defection.",
  lessons: [
    {
      id: "l129",
      title: "Nowak 2006",
      intro: "In 2006 Martin Nowak surveyed five distinct mechanisms that can make cooperation win in a world where defection is tempting.",
      questions: [
        {
          type: "mcq",
          q: "Which scientist authored the 2006 Science paper 'Five Rules for the Evolution of Cooperation'?",
          choices: ["Martin Nowak", "Charles Darwin", "Ronald Fisher", "George Price"],
          answer: 0,
          explain: "Martin A. Nowak published the unifying five-rule review in Science in 2006."
        },
        {
          type: "truefalse",
          q: "Nowak's framework argues that a single mechanism explains all cooperation in nature.",
          answer: false,
          explain: "Nowak's point is the opposite: five distinct mechanisms can each independently favor cooperation."
        },
        {
          type: "fill",
          q: "Nowak frames cooperation as a puzzle because natural selection normally favors ____, not helping others at a cost to oneself.",
          answer: "defection",
          accept: ["defection", "defectors", "selfishness", "cheating"],
          explain: "Cooperation is costly to the actor, so plain selection favors defectors unless a mechanism intervenes."
        },
        {
          type: "mcq",
          q: "How many distinct mechanisms for the evolution of cooperation does Nowak's 2006 framework identify?",
          choices: ["Three", "Four", "Five", "Seven"],
          answer: 2,
          explain: "The title says it all: there are five rules, each a separate route to cooperation."
        },
        {
          type: "match",
          q: "Match each of Nowak's five rules to its one-word key idea.",
          pairs: [["Kin selection", "Relatedness"], ["Direct reciprocity", "Repetition"], ["Indirect reciprocity", "Reputation"], ["Network reciprocity", "Clustering"]],
          explain: "Each rule rests on a different feature; the fifth, group selection, rests on between-group competition."
        },
        {
          type: "truefalse",
          q: "In every one of Nowak's five rules, cooperation is locally costly to a lone cooperator paired with a lone defector.",
          answer: true,
          explain: "Cooperation always costs the actor; each mechanism supplies extra structure that lets it pay off overall."
        },
        {
          type: "order",
          q: "Order Nowak's five rules as he numbers them in the 2006 paper.",
          items: ["Kin selection", "Direct reciprocity", "Indirect reciprocity", "Network reciprocity", "Group selection"],
          explain: "Nowak lists them in this canonical order: relatedness, repetition, reputation, clustering, then group competition."
        }
      ]
    },
    {
      id: "l130",
      title: "Kin selection recapped",
      intro: "Rule one, kin selection, lets cooperation spread when helpers and recipients share genes, captured by Hamilton's rule.",
      questions: [
        {
          type: "mcq",
          q: "Kin selection favors cooperation when Hamilton's rule is satisfied. Which inequality is Hamilton's rule?",
          choices: ["rb > c", "b > rc", "r > bc", "c > rb"],
          answer: 0,
          explain: "Hamilton's rule states rb > c: relatedness times benefit must exceed the cost of helping."
        },
        {
          type: "fill",
          q: "In Hamilton's rule, the symbol r stands for the genetic ____ between the helper and the recipient.",
          answer: "relatedness",
          accept: ["relatedness", "relationship", "kinship"],
          explain: "r is the coefficient of relatedness, the probability of sharing a gene by common descent."
        },
        {
          type: "truefalse",
          q: "Hamilton's rule was first formulated by W. D. Hamilton in 1964, well before Nowak's 2006 survey.",
          answer: true,
          explain: "Hamilton derived rb > c in his 1964 papers on inclusive fitness; Nowak later folded it in as rule one."
        },
        {
          type: "mcq",
          q: "For full siblings in a diploid species, the coefficient of relatedness r is approximately:",
          choices: ["1", "0.5", "0.25", "0.125"],
          answer: 1,
          explain: "Full siblings share on average half their genes, so r is about 0.5."
        },
        {
          type: "mcq",
          q: "Rewriting Hamilton's rule as a benefit-to-cost threshold gives:",
          choices: ["b/c > r", "b/c > 1/r", "b/c > 1 - r", "b/c > r squared"],
          answer: 1,
          explain: "Dividing rb > c by rc gives b/c > 1/r, so lower relatedness demands a higher benefit-to-cost ratio."
        },
        {
          type: "truefalse",
          q: "According to Hamilton's rule, a very low relatedness makes cooperation easier to evolve.",
          answer: false,
          explain: "Low r raises the required b/c because 1/r grows, so low relatedness makes altruism harder, not easier."
        },
        {
          type: "order",
          q: "Rank these pairs from LOWEST to HIGHEST typical coefficient of relatedness r.",
          items: ["Cousins (r about 0.125)", "Half siblings (r about 0.25)", "Full siblings (r about 0.5)", "Identical twins (r about 1)"],
          explain: "Relatedness rises from cousins to half sibs to full sibs to genetically identical twins."
        }
      ]
    },
    {
      id: "l131",
      title: "Direct reciprocity recapped",
      intro: "Rule two, direct reciprocity, sustains cooperation when the same two players meet again and can pay back help or punish cheating.",
      questions: [
        {
          type: "mcq",
          q: "Direct reciprocity requires that:",
          choices: ["players are close genetic relatives", "the same two individuals interact repeatedly", "a third party observes each move", "the population lives on a lattice"],
          answer: 1,
          explain: "Direct reciprocity depends on repeated encounters between the same pair, so future rounds can reward or punish."
        },
        {
          type: "truefalse",
          q: "The strategy tit-for-tat, famous from Axelrod's tournaments, is an example of direct reciprocity.",
          answer: true,
          explain: "Tit-for-tat cooperates first then copies the partner's last move, exploiting repeated meetings."
        },
        {
          type: "fill",
          q: "Nowak's condition for direct reciprocity is that the probability of another round, w, must exceed the ____-to-benefit ratio, c/b.",
          answer: "cost",
          accept: ["cost", "cost-to-benefit"],
          explain: "The rule is w > c/b: cooperation pays when the next encounter is likely enough relative to c/b."
        },
        {
          type: "mcq",
          q: "In the condition w > c/b, the quantity w represents:",
          choices: ["the genetic relatedness of the pair", "the reputation score of a player", "the probability of a further interaction", "the number of neighbors on a network"],
          answer: 2,
          explain: "w is the probability that the same two players meet for another round of the game."
        },
        {
          type: "match",
          q: "Match each direct-reciprocity concept to its description.",
          pairs: [["Tit-for-tat", "Copy the partner's previous move"], ["w", "Probability of another round"], ["Trivers 1971", "Early theory of reciprocal altruism"]],
          explain: "Robert Trivers formalized reciprocal altruism in 1971; w and tit-for-tat are core to the repeated game."
        },
        {
          type: "truefalse",
          q: "Direct reciprocity can support cooperation even in a single, one-shot Prisoner's Dilemma with no chance of meeting again.",
          answer: false,
          explain: "With no future round (w = 0) the condition w > c/b fails; repetition is essential."
        },
        {
          type: "order",
          q: "Put the logic of direct reciprocity in sequence.",
          items: ["Two individuals meet", "One cooperates at a cost", "They are likely to meet again", "The partner reciprocates in a later round"],
          explain: "The mechanism runs on repeated pairings where today's help is repaid in a future encounter."
        }
      ]
    },
    {
      id: "l132",
      title: "Indirect reciprocity recapped",
      intro: "Rule three, indirect reciprocity, lets cooperation spread through reputation: helping someone can be repaid by a third party who saw or heard about the good deed.",
      questions: [
        {
          type: "mcq",
          q: "Indirect reciprocity differs from direct reciprocity mainly because:",
          choices: ["it needs no genetic relatedness", "the return of help can come from a third party, not the recipient", "it only works on spatial lattices", "it requires between-group competition"],
          answer: 1,
          explain: "In indirect reciprocity your good deeds build a reputation, and someone else may then help you."
        },
        {
          type: "truefalse",
          q: "Indirect reciprocity was developed theoretically by Nowak and Sigmund in the 1990s.",
          answer: true,
          explain: "Martin Nowak and Karl Sigmund published influential models of reputation-based cooperation in the 1990s."
        },
        {
          type: "fill",
          q: "In indirect reciprocity, a person's track record of good and bad deeds is summarized by their ____.",
          answer: "reputation",
          accept: ["reputation", "image score", "image"],
          explain: "Reputation (often modeled as an image score) lets observers decide whether to help someone."
        },
        {
          type: "mcq",
          q: "Nowak's condition for indirect reciprocity is q > c/b. What does q represent?",
          choices: ["the probability of knowing someone's reputation", "the probability of another direct round", "the coefficient of relatedness", "the number of groups in the population"],
          answer: 0,
          explain: "q is the probability that you know a partner's reputation; cooperation pays when q > c/b."
        },
        {
          type: "match",
          q: "Match each rule to the quantity in its threshold condition.",
          pairs: [["Direct reciprocity", "w, probability of another round"], ["Indirect reciprocity", "q, probability of knowing reputation"], ["Kin selection", "r, coefficient of relatedness"]],
          explain: "Each mechanism has its own key parameter that must be large enough to beat the relevant cost ratio."
        },
        {
          type: "truefalse",
          q: "Language and gossip are thought to strengthen indirect reciprocity because they spread reputational information.",
          answer: true,
          explain: "Gossip raises q, the chance others know your reputation, making reputation-based cooperation more effective."
        },
        {
          type: "order",
          q: "Order the steps of indirect reciprocity.",
          items: ["A helper aids a recipient at a cost", "Observers note the helper's good reputation", "Later, a third party recognizes that reputation", "The third party helps the original helper"],
          explain: "Help flows onward through reputation rather than back from the original recipient."
        }
      ]
    },
    {
      id: "l133",
      title: "Network reciprocity introduced",
      intro: "Rule four, network reciprocity, shows that when individuals sit on a network or lattice, cooperators can survive by forming clusters that help one another.",
      questions: [
        {
          type: "mcq",
          q: "Network (spatial) reciprocity allows cooperation to persist because:",
          choices: ["every player interacts with every other player", "cooperators form clusters and mainly interact with each other", "players are always close relatives", "reputations spread through gossip"],
          answer: 1,
          explain: "On a network, cooperators can clump together so most of their interactions are with fellow cooperators."
        },
        {
          type: "truefalse",
          q: "Nowak and May's 1992 spatial game showed cooperators and defectors can coexist in shifting, dynamic patterns on a lattice.",
          answer: true,
          explain: "Nowak and May (1992, Nature) found persistent, changing spatial patterns of cooperators and defectors."
        },
        {
          type: "fill",
          q: "In network reciprocity, cooperation is favored when the benefit-to-cost ratio b/c exceeds the average number of ____ each individual has, k.",
          answer: "neighbors",
          accept: ["neighbors", "neighbours", "neighbor", "links", "contacts"],
          explain: "Nowak's simple rule is b/c > k, where k is the average degree (number of neighbors) in the network."
        },
        {
          type: "mcq",
          q: "Nowak's condition for network reciprocity is b/c > k. What is k?",
          choices: ["the number of groups", "the average number of neighbors (degree)", "the probability of reputation", "the mutation rate"],
          answer: 1,
          explain: "k is the average degree of the network; sparser networks (small k) make cooperation easier."
        },
        {
          type: "mcq",
          q: "According to b/c > k, cooperation on a network is EASIEST when individuals have:",
          choices: ["many neighbors (large k)", "few neighbors (small k)", "no neighbors at all", "exactly average relatedness"],
          answer: 1,
          explain: "A small k lowers the threshold b/c must beat, so sparse links help cooperation while dense hubs hurt it."
        },
        {
          type: "truefalse",
          q: "Network reciprocity requires players to consciously track each other's reputations.",
          answer: false,
          explain: "No reputation tracking is needed; clustering alone, from local interaction structure, sustains cooperation."
        },
        {
          type: "order",
          q: "Trace how clustering rescues cooperation on a lattice.",
          items: ["Cooperators are scattered among defectors", "Neighboring cooperators form a cluster", "Cluster members share benefits with each other", "The cluster grows or holds against defectors"],
          explain: "Spatial structure lets cooperators aggregate and out-reproduce isolated defectors at the cluster edge."
        }
      ]
    },
    {
      id: "l134",
      title: "Group selection introduced",
      intro: "Rule five, group selection, works when a population is divided into groups: groups with more cooperators outcompete groups of defectors, even though defectors win within a group.",
      questions: [
        {
          type: "mcq",
          q: "Group selection (multilevel selection) favors cooperation through:",
          choices: ["competition between groups, where cooperative groups outproduce selfish ones", "high genetic relatedness within families", "repeated pairwise encounters", "reputations spread by gossip"],
          answer: 0,
          explain: "Cooperation loses within a group but cooperative groups grow faster, so between-group selection can win."
        },
        {
          type: "truefalse",
          q: "In group selection, defectors still tend to have higher fitness than cooperators WITHIN their own group.",
          answer: true,
          explain: "Within any single group defection pays; cooperation is rescued only by the success of cooperative groups as wholes."
        },
        {
          type: "fill",
          q: "Group selection is also called ____-level selection because it acts on both individuals and groups.",
          answer: "multi",
          accept: ["multi", "multilevel", "multiple"],
          explain: "Multilevel selection theory partitions selection into within-group and between-group components."
        },
        {
          type: "mcq",
          q: "Nowak's condition for group selection is b/c > 1 + n/m. In this expression, n and m are:",
          choices: ["relatedness and reputation", "neighbors and rounds", "cost and benefit", "group size (n) and number of groups (m)"],
          answer: 3,
          explain: "n is the maximum group size and m is the number of groups; many small groups make the threshold easier."
        },
        {
          type: "match",
          q: "Match each group-selection idea to its meaning.",
          pairs: [["Within-group selection", "Favors defectors"], ["Between-group selection", "Favors cooperative groups"], ["n", "Maximum group size"], ["m", "Number of groups"]],
          explain: "Cooperation survives when the between-group advantage outweighs the within-group cost, per b/c > 1 + n/m."
        },
        {
          type: "truefalse",
          q: "Group selection can only work if there is just a single, very large group.",
          answer: false,
          explain: "The opposite: many groups (large m) and small groups (small n) lower 1 + n/m, aiding cooperation."
        },
        {
          type: "order",
          q: "Order the group-selection story.",
          items: ["A population splits into several groups", "Defectors gain within each group", "Cooperative groups grow and reproduce faster", "Groups split, spreading cooperation between groups"],
          explain: "Between-group competition and group reproduction let cooperation spread despite within-group losses."
        }
      ]
    },
    {
      id: "l135",
      title: "A benefit-cost threshold each",
      intro: "Nowak's elegant summary: each of the five rules reduces to a simple threshold that a benefit-to-cost ratio, or a key probability, must beat.",
      questions: [
        {
          type: "match",
          q: "Match each rule to Nowak's threshold condition.",
          pairs: [["Kin selection", "b/c > 1/r"], ["Direct reciprocity", "w > c/b"], ["Indirect reciprocity", "q > c/b"], ["Network reciprocity", "b/c > k"]],
          explain: "Each mechanism has a compact inequality; group selection's is b/c > 1 + n/m."
        },
        {
          type: "mcq",
          q: "Nowak's threshold for group selection is:",
          choices: ["b/c > k", "b/c > 1/r", "w > c/b", "b/c > 1 + n/m"],
          answer: 3,
          explain: "Group selection requires b/c > 1 + n/m, with n the group size and m the number of groups."
        },
        {
          type: "fill",
          q: "For network reciprocity the rule is compactly written b/c > ____, where that symbol is the average number of neighbors.",
          answer: "k",
          accept: ["k"],
          explain: "b/c > k: sparser networks with smaller k make cooperation easier to sustain."
        },
        {
          type: "truefalse",
          q: "For direct reciprocity, the condition w > c/b is equivalent to b/c > 1/w.",
          answer: true,
          explain: "Rearranging w > c/b gives b/c > 1/w, the same threshold written in benefit-cost form."
        },
        {
          type: "mcq",
          q: "Kin selection's threshold b/c > 1/r means that a HIGHER relatedness r:",
          choices: ["raises the benefit-cost ratio needed", "lowers the benefit-cost ratio needed", "has no effect on the threshold", "requires more neighbors"],
          answer: 1,
          explain: "Larger r shrinks 1/r, so closely related helpers need only a small benefit-to-cost ratio."
        },
        {
          type: "truefalse",
          q: "All five thresholds are unrelated and share no common form.",
          answer: false,
          explain: "They share a striking family resemblance: a benefit-cost ratio or key probability must clear a simple bound."
        },
        {
          type: "order",
          q: "List the five thresholds in the rules' canonical order (kin, direct, indirect, network, group).",
          items: ["b/c > 1/r  (kin selection)", "w > c/b  (direct reciprocity)", "q > c/b  (indirect reciprocity)", "b/c > k  (network reciprocity)", "b/c > 1 + n/m  (group selection)"],
          explain: "Listing the thresholds in the rules' canonical order shows one inequality per mechanism."
        }
      ]
    },
    {
      id: "l136",
      title: "Unifying the landscape",
      intro: "Nowak's achievement was to show that many seemingly separate explanations of cooperation are really five variations on one theme: structure that lets cooperators interact more with each other.",
      questions: [
        {
          type: "mcq",
          q: "The unifying insight behind all five rules is that cooperation evolves when there is some form of:",
          choices: ["random, well-mixed interaction", "assortment, so cooperators are more likely to interact with cooperators", "unlimited population growth", "complete absence of defectors"],
          answer: 1,
          explain: "Every rule creates positive assortment: relatedness, repetition, reputation, clustering, or grouping links cooperators together."
        },
        {
          type: "truefalse",
          q: "Nowak's framework treats the five rules as mutually exclusive, so only one can ever operate in a given population.",
          answer: false,
          explain: "Several mechanisms can act at once; the rules are complementary lenses, not rival either-or explanations."
        },
        {
          type: "fill",
          q: "Nowak famously proposed that alongside mutation and selection, ____ deserves recognition as a fundamental principle of evolution.",
          answer: "cooperation",
          accept: ["cooperation", "co-operation"],
          explain: "Nowak argued cooperation is a third fundamental force of evolution, next to mutation and natural selection."
        },
        {
          type: "match",
          q: "Match each rule to the feature that clusters cooperators together.",
          pairs: [["Kin selection", "Shared genes"], ["Direct reciprocity", "Repeated meetings"], ["Indirect reciprocity", "Shared reputations"], ["Group selection", "Membership in the same group"]],
          explain: "Each mechanism is a different way of making cooperators disproportionately interact with one another."
        },
        {
          type: "mcq",
          q: "Which statement best captures Nowak's 2006 contribution?",
          choices: ["He proved cooperation cannot evolve", "He unified diverse cooperation mechanisms into five simple rules", "He replaced natural selection with kin selection", "He showed only humans cooperate"],
          answer: 1,
          explain: "Nowak's review synthesized decades of theory into five compact, comparable mechanisms."
        },
        {
          type: "truefalse",
          q: "A real biological system, such as microbes or human society, may be shaped by more than one of the five mechanisms simultaneously.",
          answer: true,
          explain: "Multiple mechanisms often overlap in nature; the framework helps disentangle their joint contributions."
        },
        {
          type: "order",
          q: "Order the five rules from the one relying on shared genes to the one relying on between-group competition, following Nowak's numbering.",
          items: ["Kin selection (shared genes)", "Direct reciprocity (repeated meetings)", "Indirect reciprocity (reputation)", "Network reciprocity (clustering)", "Group selection (between-group competition)"],
          explain: "Nowak's canonical order runs from relatedness through reciprocity and clustering to group competition."
        }
      ]
    }
  ]
});
