window.ACADEMY.addUnit("egt", {
  id: "unit-10",
  title: "The Prisoner's Dilemma",
  color: "#3b74e0",
  icon: "🔒",
  description: "Learn the Prisoner's Dilemma: its story, its T-R-P-S payoffs, why defection dominates, and the mechanisms that might help cooperation escape the trap.",
  lessons: [
    {
      id: "l73",
      title: "The Prisoner's Dilemma story",
      intro: "Two suspects, held apart, each face the temptation to betray the other for a lighter sentence.",
      questions: [
        {
          type: "mcq",
          q: "In the classic Prisoner's Dilemma story, why can't the two suspects coordinate their answers?",
          choices: [
            "They are held in separate cells and cannot communicate",
            "They speak different languages",
            "They have already been convicted",
            "The prosecutor lets them confer first"
          ],
          answer: 0,
          explain: "The whole tension comes from isolation: each must choose alone, without knowing what the other will do."
        },
        {
          type: "truefalse",
          q: "Each prisoner is offered a lighter sentence for testifying against the other.",
          answer: true,
          explain: "The deal rewards betrayal: testifying against a silent partner lets you go free while they take the heavy sentence."
        },
        {
          type: "fill",
          q: "The tempting move of testifying against your partner is called ____.",
          answer: "defection",
          accept: ["defection", "defecting", "defect", "to defect"],
          explain: "Betraying the partner is 'defection'; staying silent to protect the partner is 'cooperation'."
        },
        {
          type: "match",
          q: "Match each pair of choices to its outcome in the story.",
          pairs: [
            ["Both stay silent", "Both get a light sentence"],
            ["You testify, partner silent", "You go free, partner gets the worst sentence"],
            ["Both testify", "Both get a moderate sentence"]
          ],
          explain: "Mutual silence is good for both, one-sided betrayal is best for the betrayer, and mutual betrayal is bad for both."
        },
        {
          type: "order",
          q: "Order the steps of how the dilemma is set up.",
          items: [
            "Two suspects are arrested",
            "They are placed in separate cells",
            "The prosecutor offers each the same deal",
            "Each decides alone whether to testify"
          ],
          explain: "Arrest, separation, the identical offer, and then a private decision are the ingredients that create the dilemma."
        },
        {
          type: "mcq",
          q: "Who devised this game in 1950 at the RAND Corporation, before Albert Tucker gave it its story and name?",
          choices: [
            "John Nash and Lloyd Shapley",
            "Merrill Flood and Melvin Dresher",
            "John von Neumann and Oskar Morgenstern",
            "Robert Axelrod and William Hamilton"
          ],
          answer: 1,
          explain: "Flood and Dresher formulated the game at RAND in 1950; Albert W. Tucker later dressed it up as the prisoner story and coined the name."
        },
        {
          type: "truefalse",
          q: "If both suspects stay silent, each does better than if both testify.",
          answer: true,
          explain: "Mutual cooperation (both silent) yields a lighter sentence for each than mutual defection (both testifying)."
        }
      ]
    },
    {
      id: "l74",
      title: "The T, R, P, S payoffs",
      intro: "Every Prisoner's Dilemma is defined by four payoffs ranked temptation, reward, punishment, then sucker.",
      questions: [
        {
          type: "mcq",
          q: "What does the payoff T (temptation) represent?",
          choices: [
            "Reward when both cooperate",
            "Punishment when both defect",
            "Payoff for defecting while the other cooperates",
            "Sucker's payoff for cooperating while the other defects"
          ],
          answer: 2,
          explain: "T is the temptation payoff: the biggest reward, earned by defecting on a partner who cooperated."
        },
        {
          type: "order",
          q: "Order the four payoffs from largest to smallest in a Prisoner's Dilemma.",
          items: [
            "T (temptation)",
            "R (reward)",
            "P (punishment)",
            "S (sucker)"
          ],
          explain: "The defining ranking is T > R > P > S: betraying a cooperator beats mutual cooperation, which beats mutual defection, which beats being the sucker."
        },
        {
          type: "match",
          q: "Match each payoff symbol to its meaning.",
          pairs: [
            ["T", "Temptation: defect while partner cooperates"],
            ["R", "Reward: both cooperate"],
            ["P", "Punishment: both defect"],
            ["S", "Sucker: cooperate while partner defects"]
          ],
          explain: "T, R, P, S label the four cells of the payoff table and their ranking is what makes the game a dilemma."
        },
        {
          type: "fill",
          q: "The defining inequality of the Prisoner's Dilemma is T > R > P > ____.",
          answer: "S",
          accept: ["s", "sucker"],
          explain: "S, the sucker's payoff, sits at the bottom: T > R > P > S is the signature of the game."
        },
        {
          type: "truefalse",
          q: "In a Prisoner's Dilemma the reward for mutual cooperation R is larger than the punishment for mutual defection P.",
          answer: true,
          explain: "R > P is required: both players prefer mutual cooperation to mutual defection, which is exactly why the trap is frustrating."
        },
        {
          type: "mcq",
          q: "For the iterated (repeated) game to stay a genuine dilemma, one extra condition is added. Which?",
          choices: [
            "T + S > 2R",
            "R > T",
            "P > R",
            "2R > T + S"
          ],
          answer: 3,
          explain: "2R > T + S ensures that steady mutual cooperation beats taking turns exploiting each other, keeping cooperation the best long-run target."
        },
        {
          type: "truefalse",
          q: "The sucker's payoff S is the highest of the four payoffs.",
          answer: false,
          explain: "S is the lowest payoff: it is what you get for cooperating with someone who defects on you."
        }
      ]
    },
    {
      id: "l75",
      title: "Defection dominates",
      intro: "Because defecting beats cooperating no matter what the partner does, mutual defection is the game's only Nash equilibrium.",
      questions: [
        {
          type: "mcq",
          q: "In the one-shot Prisoner's Dilemma, defection is a dominant strategy because...",
          choices: [
            "it is the kind thing to do",
            "it always yields a higher payoff than cooperating, whatever the other player does",
            "it maximizes the group's total payoff",
            "it is chosen at random"
          ],
          answer: 1,
          explain: "A dominant strategy beats the alternative in every case, so a self-interested player defects regardless of the partner's move."
        },
        {
          type: "truefalse",
          q: "The unique Nash equilibrium of the one-shot Prisoner's Dilemma is mutual defection.",
          answer: true,
          explain: "At (defect, defect) neither player can gain by switching alone, so it is the single Nash equilibrium of the game."
        },
        {
          type: "fill",
          q: "A ____ equilibrium is an outcome where no player can gain by unilaterally changing strategy.",
          answer: "Nash",
          accept: ["nash"],
          explain: "Named for John Nash, an equilibrium is stable when no one can do better by changing their own choice alone."
        },
        {
          type: "mcq",
          q: "If your partner cooperates, which of your options gives more: T (you defect) or R (you cooperate)?",
          choices: [
            "R",
            "They are equal",
            "T",
            "Neither is defined"
          ],
          answer: 2,
          explain: "Since T > R, defecting on a cooperating partner pays more than cooperating with them."
        },
        {
          type: "match",
          q: "Match each case to why defection is the best reply.",
          pairs: [
            ["Partner cooperates", "Defecting gives T > R, so defect"],
            ["Partner defects", "Defecting gives P > S, so defect"],
            ["Either way", "Defection is the best reply"]
          ],
          explain: "Whichever move the partner makes, defecting scores higher, so defection dominates cooperation."
        },
        {
          type: "order",
          q: "Order the logic that shows defection dominates.",
          items: [
            "Assume partner cooperates: T beats R",
            "Assume partner defects: P beats S",
            "Defecting wins in both cases",
            "So both players defect at equilibrium"
          ],
          explain: "Case by case, defection wins, so a rational player defects and both land on mutual defection."
        },
        {
          type: "truefalse",
          q: "Because defection is a dominant strategy, a rational player must know the partner's choice before deciding.",
          answer: false,
          explain: "A dominant strategy is best no matter what the other does, so you can decide to defect without knowing the partner's move at all."
        }
      ]
    },
    {
      id: "l76",
      title: "The social dilemma",
      intro: "When each player rationally defects, both end up worse off than if they had cooperated.",
      questions: [
        {
          type: "mcq",
          q: "Why is the Prisoner's Dilemma called a social dilemma?",
          choices: [
            "It can only be played in groups of ten",
            "It requires players to be irrational",
            "Cooperation is always the equilibrium",
            "Individually rational choices lead to a collectively worse outcome"
          ],
          answer: 3,
          explain: "Each player acting in self-interest produces a group result worse for everyone, the hallmark of a social dilemma."
        },
        {
          type: "truefalse",
          q: "Mutual cooperation (R, R) would leave both players better off than mutual defection (P, P).",
          answer: true,
          explain: "Because R > P, both players prefer the cooperative outcome, yet rational play still drives them to the worse one."
        },
        {
          type: "fill",
          q: "The mutual-defection outcome is Pareto-____, meaning both players could do better without making either worse off.",
          answer: "inefficient",
          accept: ["inefficient", "suboptimal", "dominated"],
          explain: "Mutual defection is Pareto-inefficient: switching to mutual cooperation would improve both players at once."
        },
        {
          type: "mcq",
          q: "Mutual cooperation gives both players more than mutual defection. This means the outcome (P, P) is ____.",
          choices: [
            "a dominant strategy",
            "Pareto-dominated by (R, R)",
            "the unique social optimum by law",
            "impossible to reach"
          ],
          answer: 1,
          explain: "(R, R) makes both players better off than (P, P), so mutual defection is Pareto-dominated by mutual cooperation."
        },
        {
          type: "match",
          q: "Match each level of the dilemma to its result.",
          pairs: [
            ["Individual rationality", "Each player defects"],
            ["Collective outcome", "Both get P, the punishment"],
            ["What they wanted", "Both get R by cooperating"]
          ],
          explain: "Rational individuals reach the punishing outcome even though the cooperative outcome was better for the pair."
        },
        {
          type: "truefalse",
          q: "In the Prisoner's Dilemma, what is best for each individual is also best for the pair.",
          answer: false,
          explain: "Individual and collective interest conflict: each does best by defecting, but the pair does worst when both defect."
        },
        {
          type: "order",
          q: "Order the chain that produces the social dilemma.",
          items: [
            "Each player reasons selfishly",
            "Each chooses to defect",
            "Both receive the punishment payoff P",
            "Both end up worse than if they had cooperated"
          ],
          explain: "Selfish reasoning leads to mutual defection and the punishment payoff, a worse result than mutual cooperation."
        }
      ]
    },
    {
      id: "l77",
      title: "Cooperation as altruism",
      intro: "In the donation form of the game, cooperating means paying a personal cost to hand a larger benefit to your partner.",
      questions: [
        {
          type: "mcq",
          q: "In the donation form of the game, a cooperator ____.",
          choices: [
            "receives a benefit while paying nothing",
            "harms the partner to help itself",
            "pays a cost c to give a benefit b to the partner",
            "does nothing at all"
          ],
          answer: 2,
          explain: "Cooperation is modeled as donation: the cooperator pays cost c so the partner gains benefit b, with b greater than c."
        },
        {
          type: "fill",
          q: "Behaviour that lowers the actor's own fitness while raising another's fitness is called ____.",
          answer: "altruism",
          accept: ["altruism", "altruistic", "altruistic behaviour", "altruistic behavior"],
          explain: "Altruism means paying a personal fitness cost to benefit someone else, exactly what a cooperator does here."
        },
        {
          type: "truefalse",
          q: "In the donation game, cooperation makes sense as altruism only when the benefit b is greater than the cost c.",
          answer: true,
          explain: "If b > c, cooperation creates net value to give away; if not, there is nothing worth donating."
        },
        {
          type: "match",
          q: "Match each outcome of the donation game to its payoff formula.",
          pairs: [
            ["Both cooperate", "R = b - c"],
            ["You cooperate, partner defects", "S = -c"],
            ["You defect, partner cooperates", "T = b"],
            ["Both defect", "P = 0"]
          ],
          explain: "With T = b, R = b - c, P = 0, and S = -c (and b > c > 0), the ranking T > R > P > S still holds."
        },
        {
          type: "mcq",
          q: "In the donation game, a defector pays ____ and gives ____.",
          choices: [
            "cost c; benefit b",
            "benefit b; cost c",
            "cost c; nothing",
            "nothing; nothing"
          ],
          answer: 3,
          explain: "A defector spends nothing and provides nothing; it simply keeps any benefit a cooperating partner sends."
        },
        {
          type: "truefalse",
          q: "From the cooperator's own fitness ledger, paying cost c with no direct return is favoured by simple selfish advantage.",
          answer: false,
          explain: "Donating is a net loss to the cooperator on its own, so some extra mechanism (like kinship or repetition) is needed to make it pay."
        },
        {
          type: "order",
          q: "Order these donation-game outcomes from most costly to the actor to most beneficial to the actor.",
          items: [
            "Being the sucker: pay c, get nothing (S)",
            "Mutual defection: pay 0 (P)",
            "Mutual cooperation: net b - c (R)",
            "Successful defection: gain b (T)"
          ],
          explain: "Ranked by the actor's own payoff, S = -c is worst, then P = 0, then R = b - c, then T = b."
        }
      ]
    },
    {
      id: "l78",
      title: "Defection as the only ESS",
      intro: "In a single, one-shot game with no future, always-defect is the only evolutionarily stable strategy.",
      questions: [
        {
          type: "mcq",
          q: "In a single-round Prisoner's Dilemma, the only evolutionarily stable strategy (ESS) is ____.",
          choices: [
            "always cooperate",
            "always defect",
            "tit-for-tat",
            "random play"
          ],
          answer: 1,
          explain: "With no repetition, always-defect resists invasion by any rare mutant, making it the unique ESS."
        },
        {
          type: "fill",
          q: "The concept of an evolutionarily ____ strategy was introduced by John Maynard Smith and George Price in 1973.",
          answer: "stable",
          accept: ["stable"],
          explain: "Maynard Smith and Price's 1973 paper defined the evolutionarily stable strategy, a strategy that cannot be invaded once common."
        },
        {
          type: "truefalse",
          q: "A population of defectors can be invaded by rare cooperator mutants in the one-shot game.",
          answer: false,
          explain: "A cooperator mutant meets defectors and earns S, while residents earn P; since P > S, cooperators lose and cannot invade."
        },
        {
          type: "mcq",
          q: "Why can't 'always cooperate' be an ESS in the one-shot game?",
          choices: [
            "Cooperators earn too much",
            "Cooperation is illegal",
            "A defecting mutant earns T against cooperators, beating their R, and spreads",
            "There are never any mutants"
          ],
          answer: 2,
          explain: "In a cooperator population a defector scores T against every cooperator's R; since T > R, defection invades and cooperation is unstable."
        },
        {
          type: "match",
          q: "Match each term to its role in the one-shot game.",
          pairs: [
            ["ESS", "A strategy that, once common, resists invasion by mutants"],
            ["All-Defect", "The only ESS of the one-shot dilemma"],
            ["All-Cooperate", "Invadable by defectors, so not an ESS"]
          ],
          explain: "Only all-defect is uninvadable in the one-shot game, so it alone qualifies as an ESS."
        },
        {
          type: "order",
          q: "Order the invasion test showing cooperation is unstable.",
          items: [
            "Start with a population of cooperators",
            "A rare defector mutant appears",
            "The mutant earns T against cooperators (T > R)",
            "Defectors spread and cooperation collapses"
          ],
          explain: "Because a defector out-earns cooperators when they are common, the mutant spreads and cooperation cannot hold."
        },
        {
          type: "truefalse",
          q: "In a one-shot game with no future interaction, selfish defection is evolutionarily favoured.",
          answer: true,
          explain: "Without repetition, relatedness, or structure, natural selection favours the defector, so selfishness wins."
        }
      ]
    },
    {
      id: "l79",
      title: "Real-world dilemmas",
      intro: "Arms races, doping, and overfishing are all Prisoner's Dilemmas where each party's rational choice harms everyone.",
      questions: [
        {
          type: "mcq",
          q: "Two nations each keep building more weapons because disarming while the rival arms is dangerous. This mutual buildup is a Prisoner's Dilemma called ____.",
          choices: [
            "an act of charity",
            "an arms race",
            "a trade agreement",
            "a peace treaty"
          ],
          answer: 1,
          explain: "An arms race is a classic dilemma: each side defects (arms up) to avoid being the sucker, and both end up poorer and no safer."
        },
        {
          type: "match",
          q: "Match each real-world dilemma to its mutual-defection outcome.",
          pairs: [
            ["Arms race", "Both nations overspend on weapons; both worse off"],
            ["Doping in sport", "Both athletes dope; neither gains an edge, both risk harm"],
            ["Overfishing", "Each boat takes more; the shared stock collapses"]
          ],
          explain: "In each case individually sensible defection leads to a collectively bad outcome, the signature of the dilemma."
        },
        {
          type: "truefalse",
          q: "When athletes both dope, they cancel out any advantage yet both bear the health costs, mirroring mutual defection.",
          answer: true,
          explain: "If everyone dopes, the relative edge disappears but the risks remain, leaving all athletes worse off, just like (P, P)."
        },
        {
          type: "fill",
          q: "Overexploiting a shared resource like a fishery is often called the tragedy of the ____.",
          answer: "commons",
          accept: ["commons", "common"],
          explain: "The tragedy of the commons describes how a shared resource is depleted when each user rationally takes as much as possible."
        },
        {
          type: "mcq",
          q: "The phrase 'tragedy of the commons' was popularized in a 1968 essay by ____.",
          choices: [
            "John Maynard Smith",
            "Robert Axelrod",
            "Garrett Hardin",
            "Albert Tucker"
          ],
          answer: 2,
          explain: "Ecologist Garrett Hardin popularized the tragedy of the commons in his 1968 Science essay."
        },
        {
          type: "truefalse",
          q: "In these real-world dilemmas, each party's individually sensible choice leads to a group outcome everyone dislikes.",
          answer: true,
          explain: "That gap between smart individual choices and a bad shared result is exactly what makes them Prisoner's Dilemmas."
        },
        {
          type: "order",
          q: "Order how a fishery collapses as a commons dilemma.",
          items: [
            "The stock is shared by many boats",
            "Each boat catches as much as it can (defects)",
            "The stock is harvested faster than it renews",
            "The fishery collapses and all boats lose"
          ],
          explain: "Shared access plus individual over-taking drains the stock faster than it recovers, ruining it for everyone."
        }
      ]
    },
    {
      id: "l80",
      title: "Escaping the trap",
      intro: "Repetition, kinship, and population structure are the main routes by which cooperation can escape the dilemma.",
      questions: [
        {
          type: "mcq",
          q: "Repeating the game many times can favour cooperation through ____.",
          choices: [
            "shorter memories",
            "direct reciprocity, where players can reward and punish over time",
            "removing all future rounds",
            "playing only once"
          ],
          answer: 1,
          explain: "When players meet again, direct reciprocity lets today's cooperation be rewarded and defection punished tomorrow."
        },
        {
          type: "match",
          q: "Match each escape route to the mechanism it uses.",
          pairs: [
            ["Repetition", "Direct reciprocity: I cooperate if you will again"],
            ["Kinship", "Kin selection: help relatives who share your genes"],
            ["Structure", "Network reciprocity: cooperators cluster together"]
          ],
          explain: "Repeated play, shared genes, and spatial clustering are three distinct ways cooperation can be favoured."
        },
        {
          type: "fill",
          q: "In repeated play, a famously successful simple strategy is ____-for-tat, which copies the partner's last move.",
          answer: "tit",
          accept: ["tit", "tit for tat", "tit-for-tat"],
          explain: "Tit-for-tat cooperates first, then mirrors the partner, rewarding cooperation and answering defection in kind."
        },
        {
          type: "truefalse",
          q: "Hamilton's rule says altruism toward kin is favoured when relatedness times benefit exceeds cost (rb > c).",
          answer: true,
          explain: "W. D. Hamilton's rule, rb > c, shows helping relatives can spread because they carry copies of the helper's genes."
        },
        {
          type: "mcq",
          q: "Robert Axelrod's computer tournaments around 1980 found that the winning strategy was ____.",
          choices: [
            "Always Defect",
            "Always Cooperate",
            "Tit-for-Tat, submitted by Anatol Rapoport",
            "Random"
          ],
          answer: 2,
          explain: "In Axelrod's iterated-dilemma tournaments, Anatol Rapoport's simple Tit-for-Tat scored highest overall."
        },
        {
          type: "truefalse",
          q: "Giving players a shared spatial structure, so cooperators can cluster with cooperators, can never help cooperation.",
          answer: false,
          explain: "Network reciprocity does help: when cooperators cluster, they mostly interact with each other and out-earn scattered defectors."
        },
        {
          type: "order",
          q: "Order the steps by which direct reciprocity can sustain cooperation.",
          items: [
            "Players expect to meet again",
            "Each can remember the partner's last move",
            "Cooperation can be rewarded and defection punished next round",
            "Cooperating becomes worthwhile over the long run"
          ],
          explain: "A shadow of the future plus memory lets reciprocity reward cooperators and punish defectors, making cooperation pay."
        }
      ]
    }
  ]
});
