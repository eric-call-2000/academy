window.ACADEMY.addUnit("egt", {
  id: "unit-24",
  title: "Fairness, Finite Populations, and Structure",
  color: "#3b74e0",
  icon: "🕸️",
  description: "Explores human fairness experiments and the stochastic, structured models that explain how cooperation and fair behavior can evolve.",
  lessons: [
    {
      id: "l185",
      title: "The Ultimatum Game",
      intro: "In the Ultimatum Game a proposer offers a split of a sum and a responder can accept it or reject it, leaving both with nothing.",
      questions: [
        {
          type: "mcq",
          q: "In the Ultimatum Game, two players divide a sum of money. What does the proposer do?",
          choices: ["Suggests how to split the money", "Decides only whether to accept", "Watches without acting", "Splits the money equally by a fixed rule"],
          answer: 0,
          explain: "The proposer proposes a division of the sum; the responder then either accepts or rejects that offer."
        },
        {
          type: "truefalse",
          q: "If the responder rejects the proposer's offer, both players receive nothing.",
          answer: true,
          explain: "Rejection means the deal collapses, so neither the proposer nor the responder keeps any money."
        },
        {
          type: "fill",
          q: "The Ultimatum Game was introduced in 1982 by Guth, Schmittberger, and ____.",
          answer: "schwarze",
          accept: ["schwarze"],
          explain: "Werner Guth, Rolf Schmittberger, and Bernd Schwarze published the first Ultimatum Game experiment in 1982."
        },
        {
          type: "order",
          q: "Order the steps of a single round of the Ultimatum Game.",
          items: ["A sum of money is provided to divide", "The proposer offers a split", "The responder accepts or rejects", "Payoffs are assigned from the decision"],
          explain: "The proposer moves first with an offer, then the responder responds, which determines the payoffs."
        },
        {
          type: "mcq",
          q: "A purely self-interested, money-maximizing responder should accept which offers?",
          choices: ["Only a 50/50 split", "Any offer greater than zero", "Only offers above 40%", "No offers at all"],
          answer: 1,
          explain: "Any positive amount beats the zero from rejecting, so a pure payoff-maximizer should accept even a tiny offer."
        },
        {
          type: "match",
          q: "Match each Ultimatum Game term to its meaning.",
          pairs: [["Proposer", "Player who suggests how to divide the sum"], ["Responder", "Player who accepts or rejects the offer"], ["Rejection", "Outcome where both players get nothing"]],
          explain: "These roles and this outcome define the structure of the Ultimatum Game."
        },
        {
          type: "truefalse",
          q: "In real experiments, human proposers typically offer the responder almost nothing.",
          answer: false,
          explain: "Real proposers usually offer around 40-50%, far more than the self-interested minimum predicts."
        }
      ]
    },
    {
      id: "l186",
      title: "Rejecting unfair offers",
      intro: "Real responders reject low offers, giving up money to punish unfairness and revealing preferences that go beyond pure payoff.",
      questions: [
        {
          type: "mcq",
          q: "Human responders in the Ultimatum Game typically reject offers below roughly what share of the pot?",
          choices: ["50%", "20-30%", "5%", "45%"],
          answer: 1,
          explain: "Offers below about 20-30% are frequently rejected, even though rejecting costs the responder real money."
        },
        {
          type: "truefalse",
          q: "Rejecting a low offer is costly to the responder as well as to the proposer.",
          answer: true,
          explain: "Rejection leaves the responder with zero, so punishing the proposer means giving up one's own gain."
        },
        {
          type: "fill",
          q: "Rejecting a positive offer to punish unfairness is a form of costly ____, sometimes described as spite.",
          answer: "punishment",
          accept: ["punishment"],
          explain: "Costly punishment means paying a personal price in order to reduce an unfair partner's payoff."
        },
        {
          type: "mcq",
          q: "What does the tendency to reject unfair offers suggest about human motivation?",
          choices: ["People also care about fairness and relative outcomes", "People value only their own monetary payoff", "People cannot understand the game", "People always cooperate no matter what"],
          answer: 0,
          explain: "Rejection reveals fairness concerns and a distaste for being treated unfairly, beyond pure payoff maximization."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [["Spite", "Harming another at a cost to oneself"], ["Fairness preference", "Valuing an equitable split"], ["Homo economicus", "Idealized purely self-interested agent"]],
          explain: "These terms capture the gap between rational-choice predictions and actual human behavior."
        },
        {
          type: "order",
          q: "Order these offers from most likely to be accepted to most likely to be rejected.",
          items: ["A 50/50 split", "A 70/30 split favoring the proposer", "A 90/10 split favoring the proposer"],
          explain: "Larger shares to the responder are accepted more, while very unequal offers are rejected more often."
        },
        {
          type: "truefalse",
          q: "The rejection of unfair offers is fully explained by pure payoff maximization.",
          answer: false,
          explain: "Pure payoff maximization predicts accepting any positive offer, so rejection directly contradicts it."
        }
      ]
    },
    {
      id: "l187",
      title: "Evolving fair proposers",
      intro: "With reputation and information about co-players, natural selection can favor generous, fair splits rather than minimal offers.",
      questions: [
        {
          type: "mcq",
          q: "In Nowak, Page, and Sigmund's 2000 model, what makes fair offers evolve instead of minimal ones?",
          choices: ["Information about a partner's past behavior (reputation)", "Players having no memory", "Random mutation only", "Simply using larger sums of money"],
          answer: 0,
          explain: "When proposers can know a responder's reputation, such as its acceptance threshold, fairness is selected for."
        },
        {
          type: "truefalse",
          q: "Without any information about co-players, evolution in the Ultimatum Game tends toward the low, rational offer.",
          answer: true,
          explain: "With no reputation to exploit, selection favors offering close to the minimum that will be accepted."
        },
        {
          type: "fill",
          q: "Nowak, Page, and Sigmund published \"Fairness versus reason in the Ultimatum Game\" in Science in the year ____.",
          answer: "2000",
          accept: ["2000"],
          explain: "Their influential paper on the evolution of fairness appeared in Science in 2000."
        },
        {
          type: "order",
          q: "Order the causal chain by which fairness can evolve.",
          items: ["Responders acquire reputations for their acceptance thresholds", "Proposers can observe those reputations", "Offering too little now risks rejection", "Selection favors more generous offers"],
          explain: "Reputation lets stingy offers be punished by rejection, so more generous proposers earn higher payoffs."
        },
        {
          type: "match",
          q: "Match each term to its role in the model.",
          pairs: [["Reputation", "Knowledge of a partner's likely behavior"], ["Acceptance threshold", "Lowest offer a responder will take"], ["Selection", "Spread of higher-payoff strategies"]],
          explain: "Reputation combined with acceptance thresholds channels selection toward fair offers."
        },
        {
          type: "mcq",
          q: "A responder's evolved strategy in these models is usually summarized by which value?",
          choices: ["The total pot size", "A minimum acceptance threshold", "The number of rounds played", "The proposer's identity"],
          answer: 1,
          explain: "A responder is characterized by the lowest offer it is willing to accept, its acceptance threshold."
        },
        {
          type: "truefalse",
          q: "Generous splits can never be favored by natural selection under any conditions.",
          answer: false,
          explain: "With reputation or repeated interaction, selection can favor generous, fair offers rather than minimal ones."
        }
      ]
    },
    {
      id: "l188",
      title: "The Moran process",
      intro: "The Moran process models evolution as birth-death dynamics in a finite population of fixed size.",
      questions: [
        {
          type: "mcq",
          q: "The Moran process models evolution in a population of what size?",
          choices: ["Fixed and finite", "Infinite", "Continuously growing", "Zero"],
          answer: 0,
          explain: "The Moran process keeps a constant, finite population size N throughout the dynamics."
        },
        {
          type: "truefalse",
          q: "In each step of the Moran process, one individual reproduces and one individual dies, keeping the population size constant.",
          answer: true,
          explain: "A birth is exactly balanced by a death every step, so the population size N never changes."
        },
        {
          type: "fill",
          q: "The Moran process is named after Patrick ____, who introduced it in 1958.",
          answer: "moran",
          accept: ["moran"],
          explain: "Australian statistician Patrick Moran described this birth-death process in 1958."
        },
        {
          type: "order",
          q: "Order the events within one step of the Moran process.",
          items: ["An individual is chosen to reproduce, with probability proportional to fitness", "It produces an identical offspring", "A random individual is chosen to die", "The offspring replaces the individual that died"],
          explain: "A fitness-weighted birth plus a random death keeps the total population size constant."
        },
        {
          type: "mcq",
          q: "In the Moran process, the individual chosen to reproduce is selected with probability proportional to its:",
          choices: ["Age", "Fitness", "Position in a line", "Color"],
          answer: 1,
          explain: "Reproduction is fitness-proportional, so fitter types are more likely to be chosen to reproduce."
        },
        {
          type: "match",
          q: "Match each part of the Moran process to its rule.",
          pairs: [["Birth", "Fitness-proportional selection to reproduce"], ["Death", "A uniformly random individual is removed"], ["Population size", "Held constant at N"]],
          explain: "These three rules together define the birth-death dynamics of the Moran process."
        },
        {
          type: "truefalse",
          q: "The Moran process allows the population size to grow without limit.",
          answer: false,
          explain: "Population size is fixed at N; every birth is matched by a death, so it cannot grow."
        }
      ]
    },
    {
      id: "l189",
      title: "Fixation probability",
      intro: "Fixation probability is the chance that a single mutant lineage eventually takes over the whole finite population.",
      questions: [
        {
          type: "mcq",
          q: "Fixation probability is the chance that:",
          choices: ["A mutant lineage spreads to the entire population", "A population goes extinct", "Two species merge into one", "Fitness stays perfectly constant"],
          answer: 0,
          explain: "Fixation means a mutant's descendants replace all others, so the mutant type takes over the population."
        },
        {
          type: "truefalse",
          q: "For a single neutral mutant in a population of size N, the fixation probability is 1/N.",
          answer: true,
          explain: "With no selective difference, each of the N individuals is equally likely to be the eventual common ancestor, giving 1/N."
        },
        {
          type: "fill",
          q: "A single neutral mutant in a population of size N fixes with probability 1/____.",
          answer: "n",
          accept: ["n"],
          explain: "The neutral fixation probability equals 1/N, the reciprocal of the population size."
        },
        {
          type: "mcq",
          q: "An advantageous mutant with relative fitness r greater than 1 has a fixation probability that is:",
          choices: ["Exactly zero", "Exactly 1", "Greater than 1/N but usually below 1", "Always negative"],
          answer: 2,
          explain: "A beneficial mutant fixes more often than a neutral one (above 1/N) but is still not guaranteed to fix."
        },
        {
          type: "match",
          q: "Match each mutant to its fixation behavior in a finite population.",
          pairs: [["Neutral mutant", "Fixes with probability 1/N"], ["Advantageous mutant", "Fixes more often than 1/N"], ["Deleterious mutant", "Fixes less often than 1/N"]],
          explain: "Selection tilts the fixation probability above or below the neutral 1/N baseline."
        },
        {
          type: "truefalse",
          q: "Even a beneficial mutant is not guaranteed to reach fixation.",
          answer: true,
          explain: "Randomness in births and deaths means an advantageous mutant can still be lost by chance while it is rare."
        },
        {
          type: "order",
          q: "Order these mutants from lowest to highest fixation probability in the same population.",
          items: ["A deleterious mutant (r < 1)", "A neutral mutant (r = 1)", "An advantageous mutant (r > 1)"],
          explain: "Higher relative fitness raises fixation probability, so the advantageous mutant fixes most often."
        }
      ]
    },
    {
      id: "l190",
      title: "Drift and stochasticity",
      intro: "In small populations, random chance (genetic drift) can override selection and decide which strategies survive.",
      questions: [
        {
          type: "mcq",
          q: "Random genetic drift is most powerful in populations that are:",
          choices: ["Small", "Very large", "Infinite", "Non-existent"],
          answer: 0,
          explain: "In small populations, sampling noise (drift) can easily outweigh the effect of selection."
        },
        {
          type: "truefalse",
          q: "In a small population, a beneficial mutation can be lost purely by chance.",
          answer: true,
          explain: "Stochastic birth-death events can eliminate an advantageous mutant before it ever spreads."
        },
        {
          type: "fill",
          q: "The random change in gene or strategy frequencies due to chance sampling is called genetic ____.",
          answer: "drift",
          accept: ["drift"],
          explain: "Genetic drift is the stochastic fluctuation of frequencies, and it is strongest when N is small."
        },
        {
          type: "mcq",
          q: "As population size N grows toward infinity, the influence of drift relative to selection:",
          choices: ["Increases without bound", "Decreases", "Stays exactly the same", "Becomes infinite"],
          answer: 1,
          explain: "Larger populations average out chance fluctuations, so selection increasingly dominates over drift."
        },
        {
          type: "order",
          q: "Order these populations from most drift-dominated to most selection-dominated.",
          items: ["A population of 10", "A population of 1,000", "A population of 1,000,000"],
          explain: "Smaller populations feel drift more strongly, while larger ones are governed more by selection."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Genetic drift", "Frequency change from random sampling"], ["Selection", "Frequency change from fitness differences"], ["Stochasticity", "Randomness in the dynamics"]],
          explain: "Drift and selection are competing forces, and stochasticity is the randomness that fuels drift."
        },
        {
          type: "truefalse",
          q: "In a very small population, natural selection always overrides chance.",
          answer: false,
          explain: "When N is small, drift can override selection, fixing harmful types or losing beneficial ones."
        }
      ]
    },
    {
      id: "l191",
      title: "Evolutionary graph theory",
      intro: "Lieberman, Hauert, and Nowak showed how placing individuals on a graph lets population structure amplify or suppress selection.",
      questions: [
        {
          type: "mcq",
          q: "In evolutionary graph theory, individuals occupy the ____ of a graph.",
          choices: ["Edges", "Vertices (nodes)", "Colors", "Weights"],
          answer: 1,
          explain: "Each individual sits on a vertex, while the edges define who can replace whom during reproduction."
        },
        {
          type: "truefalse",
          q: "Lieberman, Hauert, and Nowak published \"Evolutionary dynamics on graphs\" in Nature in 2005.",
          answer: true,
          explain: "Their 2005 Nature paper founded the field of evolutionary graph theory."
        },
        {
          type: "fill",
          q: "A graph structure that raises a beneficial mutant's fixation probability above the well-mixed value is called an ____ of selection.",
          answer: "amplifier",
          accept: ["amplifier"],
          explain: "Amplifiers, such as the star graph, increase the fixation probability of advantageous mutants."
        },
        {
          type: "mcq",
          q: "The well-mixed Moran process corresponds to which graph?",
          choices: ["The complete graph", "The star graph", "A single isolated vertex", "A directed line"],
          answer: 0,
          explain: "In a complete graph every individual can replace any other, which reproduces the well-mixed Moran process."
        },
        {
          type: "match",
          q: "Match each graph concept to its effect or definition.",
          pairs: [["Amplifier", "Boosts fixation of advantageous mutants"], ["Suppressor", "Reduces fixation of advantageous mutants"], ["Vertex", "Location of an individual"], ["Edge", "Possible replacement between two individuals"]],
          explain: "The structure encoded by the edges determines whether a graph amplifies or suppresses selection."
        },
        {
          type: "order",
          q: "Order the ingredients of an evolutionary graph model.",
          items: ["Place individuals on the vertices of a graph", "Let edges define replacement relationships", "Run birth-death updating along the edges", "Measure the mutant's fixation probability"],
          explain: "The graph fixes who replaces whom, then birth-death dynamics along the edges determine fixation."
        },
        {
          type: "truefalse",
          q: "Every population structure gives the same fixation probability as the well-mixed Moran process.",
          answer: false,
          explain: "Amplifiers and suppressors change fixation probabilities; only isothermal graphs match the Moran value."
        }
      ]
    },
    {
      id: "l192",
      title: "Network and spatial reciprocity",
      intro: "On lattices and networks, cooperators form clusters that help one another and resist invasion by defectors.",
      questions: [
        {
          type: "mcq",
          q: "Nowak and May's 1992 spatial model showed that cooperators can survive by:",
          choices: ["Spreading out perfectly evenly", "Forming clusters", "Never interacting at all", "Always defecting"],
          answer: 1,
          explain: "In spatial games, cooperators form clusters where they interact mostly with each other and resist defectors."
        },
        {
          type: "truefalse",
          q: "Network (spatial) reciprocity is one of Nowak's five rules for the evolution of cooperation.",
          answer: true,
          explain: "Nowak's 2006 Science paper lists network reciprocity among the five mechanisms that can favor cooperation."
        },
        {
          type: "fill",
          q: "Nowak and May's 1992 paper \"Evolutionary games and spatial ____\" showed cooperator clusters on a lattice.",
          answer: "chaos",
          accept: ["chaos"],
          explain: "The paper was titled \"Evolutionary games and spatial chaos\" and appeared in Nature in 1992."
        },
        {
          type: "mcq",
          q: "Why does clustering help cooperators on a network?",
          choices: ["Cooperators mainly interact with other cooperators", "Defectors gain more from being in clusters", "Clusters remove all payoffs", "It prevents any reproduction"],
          answer: 0,
          explain: "Within a cluster, cooperators receive benefits from cooperating neighbors, offsetting exploitation at the edges."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Network reciprocity", "Cooperation favored by population structure"], ["Cluster", "Group of cooperators aiding one another"], ["Defector", "Individual that takes benefits without paying costs"]],
          explain: "Structure lets cooperator clusters outcompete defectors that would dominate a well-mixed group."
        },
        {
          type: "order",
          q: "Order the logic of network reciprocity.",
          items: ["Cooperators end up next to one another", "Neighboring cooperators exchange benefits", "The cluster gains a higher average payoff", "Cooperation spreads despite nearby defectors"],
          explain: "Assortment among cooperators lets their mutual benefits outweigh the exploitation at the cluster boundary."
        },
        {
          type: "truefalse",
          q: "The b/c > k rule of Ohtsuki and colleagues (2006) says cooperation is favored on a network when the benefit-to-cost ratio is smaller than the number of neighbors.",
          answer: false,
          explain: "The rule is the reverse: cooperation is favored when the benefit-to-cost ratio b/c exceeds the average number of neighbors k."
        }
      ]
    }
  ]
});
