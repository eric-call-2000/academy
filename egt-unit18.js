window.ACADEMY.addUnit("egt", {
  id: "unit-18",
  title: "Coordination and the Stag Hunt",
  color: "#3b74e0",
  icon: "🦌",
  description: "How players win by matching choices rather than exploiting each other, using the Stag Hunt, coordination equilibria, focal points, and basin-size selection.",
  lessons: [
    {
      id: "l137",
      title: "The Stag Hunt story",
      intro: "Rousseau's parable of two hunters who must choose between cooperating for a stag or defecting for a safe hare.",
      questions: [
        {
          type: "mcq",
          q: "Which thinker told the parable of hunters that inspired the Stag Hunt game?",
          choices: ["Jean-Jacques Rousseau", "John Nash", "Thomas Hobbes", "John Maynard Smith"],
          answer: 0,
          explain: "Rousseau described the hunt in his 1755 Discourse on the Origin of Inequality to illustrate fragile cooperation."
        },
        {
          type: "truefalse",
          q: "In the Stag Hunt, catching the stag requires both hunters to cooperate.",
          answer: true,
          explain: "A stag can only be taken if both hunters stay at their posts; one alone cannot bring it down."
        },
        {
          type: "fill",
          q: "A single hunter who leaves his post can always catch a ____ by himself.",
          answer: "hare",
          accept: ["hare", "rabbit"],
          explain: "The hare is the safe solo catch: smaller than the stag, but sure to be won alone."
        },
        {
          type: "mcq",
          q: "What happens to the stag if one hunter abandons the hunt to chase a hare?",
          choices: ["Both hunters share it", "The stag is caught anyway", "The stag escapes and the loyal hunter gets nothing", "The stag attacks the hunters"],
          answer: 2,
          explain: "The stag needs both hunters; if one defects, it escapes and the hunter who stayed loyal is left empty-handed."
        },
        {
          type: "order",
          q: "Order the outcomes for a hunter from best to worst in the Stag Hunt.",
          items: ["Both hunt the stag and share it", "Catch a hare alone", "Stay loyal to the stag while the partner defects (get nothing)"],
          explain: "Sharing the stag beats the safe hare, which still beats being left with nothing."
        },
        {
          type: "match",
          q: "Match each Stag Hunt element to its meaning.",
          pairs: [["Stag", "A large reward that needs cooperation"], ["Hare", "A small reward one can get alone"], ["Deserting the hunt", "Choosing safety over trust"]],
          explain: "The stag rewards cooperation, the hare is the safe solo option, and deserting trades trust for safety."
        },
        {
          type: "truefalse",
          q: "Rousseau used the story to show that early humans easily kept cooperation going with no risk at all.",
          answer: false,
          explain: "His point was the opposite: cooperation was fragile because a hunter would abandon the stag for a passing hare."
        }
      ]
    },
    {
      id: "l138",
      title: "Payoff-dominant equilibrium",
      intro: "The equilibrium that makes everyone best off if trust holds, and why being best is not enough to guarantee it.",
      questions: [
        {
          type: "mcq",
          q: "A payoff-dominant equilibrium is one that...",
          choices: ["gives every player a higher payoff than any other equilibrium", "minimizes each player's risk", "is always chosen in practice", "requires mixed strategies"],
          answer: 0,
          explain: "It Pareto-dominates the other equilibria: everyone does at least as well, and at least one player does strictly better."
        },
        {
          type: "fill",
          q: "In the Stag Hunt, the payoff-dominant equilibrium is for both hunters to hunt the ____.",
          answer: "stag",
          accept: ["stag", "deer"],
          explain: "Both hunting the stag yields the highest payoff for each player."
        },
        {
          type: "truefalse",
          q: "The payoff-dominant equilibrium Pareto-dominates the other equilibrium of the game.",
          answer: true,
          explain: "Both hunting stag makes every player better off than both hunting hare, so it Pareto-dominates that outcome."
        },
        {
          type: "mcq",
          q: "Which pair of economists introduced the terms 'payoff dominance' and 'risk dominance'?",
          choices: ["von Neumann and Morgenstern", "Harsanyi and Selten", "Maynard Smith and Price", "Axelrod and Hamilton"],
          answer: 1,
          explain: "John Harsanyi and Reinhard Selten introduced both in their 1988 theory of equilibrium selection."
        },
        {
          type: "match",
          q: "Match each idea to its description.",
          pairs: [["Payoff-dominant", "Highest payoff for all if reached"], ["Both hunt stag", "The payoff-dominant outcome"], ["Trust required", "Each must believe the other cooperates"]],
          explain: "The payoff-dominant outcome is the best one, but it demands mutual trust to reach."
        },
        {
          type: "order",
          q: "Using payoffs of 4 for a shared stag and 3 for a hare, order these outcomes by a hunter's payoff, highest first.",
          items: ["Both hunt the stag: 4 each", "Both hunt the hare: 3 each", "Hunt the stag while the partner takes a hare: 0"],
          explain: "4 beats 3 beats 0, so both-stag is the payoff-dominant equilibrium."
        },
        {
          type: "truefalse",
          q: "Reaching the payoff-dominant equilibrium is guaranteed simply because it is best for everyone.",
          answer: false,
          explain: "Being best is not enough; players may still fail to coordinate on it if each fears the other will play safe."
        }
      ]
    },
    {
      id: "l139",
      title: "Risk-dominant equilibrium",
      intro: "The safer equilibrium a cautious player picks when unsure what the partner will do.",
      questions: [
        {
          type: "mcq",
          q: "The risk-dominant equilibrium is the one that...",
          choices: ["gives the highest payoff", "is the best response when you are most uncertain about the other player", "uses only mixed strategies", "is never a Nash equilibrium"],
          answer: 1,
          explain: "It is the strategy you would choose under 50/50 beliefs, treating the other's actions as equally likely."
        },
        {
          type: "fill",
          q: "In our Stag Hunt, hunting the ____ is risk-dominant because it pays 3 no matter what the partner does.",
          answer: "hare",
          accept: ["hare", "rabbit"],
          explain: "The hare gives a guaranteed 3, so it wins whenever you are unsure about your partner."
        },
        {
          type: "truefalse",
          q: "The risk-dominant and payoff-dominant equilibria are always the same equilibrium.",
          answer: false,
          explain: "In the Stag Hunt they conflict: stag is payoff-dominant while hare is risk-dominant."
        },
        {
          type: "mcq",
          q: "With a stag paying 4 only if the partner also hunts stag (else 0) and a hare paying 3 always, above what belief p that your partner hunts stag should you hunt stag?",
          choices: ["p > 1/4", "any value of p", "p > 3/4", "p > 1/2"],
          answer: 2,
          explain: "Hunt stag only if 4p > 3, that is p > 3/4; below that threshold the hare is safer."
        },
        {
          type: "order",
          q: "Order the reasoning that leads a cautious hunter to the risk-dominant choice.",
          items: ["Assume you are unsure what your partner will do", "Note the hare guarantees 3 while the stag risks getting 0", "Choose the hare, the risk-dominant option"],
          explain: "Under uncertainty, the guaranteed payoff outweighs the risky larger one."
        },
        {
          type: "match",
          q: "Match each term to its role.",
          pairs: [["Risk-dominant", "Safer under uncertainty about others"], ["Payoff-dominant", "Best if coordination succeeds"], ["Hare in the Stag Hunt", "The risk-dominant strategy"]],
          explain: "Risk-dominance is about safety under doubt, not about the maximum possible reward."
        },
        {
          type: "truefalse",
          q: "A player who thinks the partner is equally likely to hunt stag or hare would pick the risk-dominant strategy.",
          answer: true,
          explain: "Risk-dominance is defined as the best response under uniform 50/50 beliefs; here the hare pays 3 versus the stag's 2, so hare wins."
        }
      ]
    },
    {
      id: "l140",
      title: "Trust and assurance",
      intro: "Why Stag Hunt cooperation is a coordination problem of trust, not a temptation to cheat like the Prisoner's Dilemma.",
      questions: [
        {
          type: "mcq",
          q: "The Stag Hunt is often called an 'assurance game' because...",
          choices: ["players are always tempted to cheat", "players just need assurance the other will cooperate", "the game has no equilibrium", "defection always pays best"],
          answer: 1,
          explain: "If you are assured your partner hunts stag, hunting stag is your best reply, so there is no temptation to defect."
        },
        {
          type: "truefalse",
          q: "Unlike the Prisoner's Dilemma, mutual cooperation IS a Nash equilibrium in the Stag Hunt.",
          answer: true,
          explain: "If both hunt stag, neither gains by switching to hare, so cooperation is self-enforcing once trust exists."
        },
        {
          type: "fill",
          q: "The term 'assurance game' was introduced by the economist Amartya ____.",
          answer: "sen",
          accept: ["sen", "amartya sen"],
          explain: "Amartya Sen coined it in his 1967 paper on isolation, assurance, and the social rate of discount."
        },
        {
          type: "mcq",
          q: "The core obstacle to cooperation in the Stag Hunt is...",
          choices: ["lack of trust that the other will cooperate", "the temptation to exploit the other", "the absence of any good outcome", "a dominant strategy to defect"],
          answer: 0,
          explain: "Both players want to cooperate; the only barrier is uncertainty, which makes it a coordination problem of trust."
        },
        {
          type: "match",
          q: "Contrast the two classic games.",
          pairs: [["Prisoner's Dilemma", "Defection is a dominant strategy (temptation)"], ["Stag Hunt", "Cooperation is an equilibrium (needs trust)"], ["Assurance", "Belief that the partner will cooperate"]],
          explain: "The Prisoner's Dilemma is about temptation; the Stag Hunt is about assurance."
        },
        {
          type: "truefalse",
          q: "In the Stag Hunt, hunting the hare is a dominant strategy just as defecting is in the Prisoner's Dilemma.",
          answer: false,
          explain: "The hare is not dominant: if you know the partner hunts stag, the stag pays more (4 versus 3). Neither strategy dominates."
        },
        {
          type: "order",
          q: "Order the chain of reasoning for a trusting hunter.",
          items: ["I trust my partner will hunt the stag", "Hunting the stag is then my best response", "We both hunt the stag and each earn 4"],
          explain: "Trust removes the coordination barrier, and cooperation follows as each player's best response."
        }
      ]
    },
    {
      id: "l141",
      title: "Two ESSs coexisting",
      intro: "Both all-stag and all-hare are evolutionarily stable, separated by an unstable mixed boundary.",
      questions: [
        {
          type: "mcq",
          q: "In the evolutionary Stag Hunt, how many pure strategies are evolutionarily stable (ESS)?",
          choices: ["none", "exactly one", "both of them", "infinitely many"],
          answer: 2,
          explain: "Both 'always hunt stag' and 'always hunt hare' are ESSs, since each resists invasion by the other."
        },
        {
          type: "truefalse",
          q: "A population where everyone hunts stag cannot be invaded by a few hare-hunters.",
          answer: true,
          explain: "In an all-stag population a rare hare-hunter earns 3 while stag-hunters earn 4, so hare cannot invade; all-stag is an ESS."
        },
        {
          type: "truefalse",
          q: "A population where everyone hunts hare can easily be invaded by a few stag-hunters.",
          answer: false,
          explain: "In an all-hare population a stag mutant meets hare-hunters and earns 0 versus 3, so stag cannot invade; all-hare is also an ESS."
        },
        {
          type: "fill",
          q: "The unstable mixed equilibrium acts as a ____ between the two basins of attraction.",
          answer: "boundary",
          accept: ["boundary", "dividing line", "threshold", "fault line", "separatrix"],
          explain: "The mixed point (here a stag-fraction of 3/4) separates the two basins and is not itself stable."
        },
        {
          type: "mcq",
          q: "Why is the mixed-strategy equilibrium of the Stag Hunt NOT an ESS?",
          choices: ["it earns the highest payoff of all", "small perturbations push the population toward one pure ESS or the other", "it exists only in three-player games", "it is not an equilibrium at all"],
          answer: 1,
          explain: "The interior equilibrium is unstable: any nudge sends the population off to all-stag or all-hare."
        },
        {
          type: "match",
          q: "Match each state to its stability.",
          pairs: [["All hunt stag", "A stable ESS (payoff-dominant)"], ["All hunt hare", "A stable ESS (risk-dominant)"], ["Mixed 3/4 stag", "Unstable boundary, not an ESS"]],
          explain: "Two stable ESSs flank a single unstable interior equilibrium."
        },
        {
          type: "order",
          q: "Starting just above the tipping point of stag-hunters, order what evolution does.",
          items: ["Stag-hunters are slightly more common than the 3/4 threshold", "Hunting the stag earns above-average payoff", "The population evolves to all stag"],
          explain: "Above the boundary, selection drives the population all the way to the stag ESS."
        }
      ]
    },
    {
      id: "l142",
      title: "The Battle of the Sexes coordination",
      intro: "A coordination game where players want to match choices but disagree on which outcome to reach.",
      questions: [
        {
          type: "mcq",
          q: "In the Battle of the Sexes, the two players...",
          choices: ["both want to avoid each other", "want to be together but prefer different activities", "have identical preferences", "each have a dominant strategy"],
          answer: 1,
          explain: "Both prefer coordinating (being together), yet each prefers a different one of the two joint activities."
        },
        {
          type: "truefalse",
          q: "The Battle of the Sexes has two pure-strategy Nash equilibria.",
          answer: true,
          explain: "Both-at-the-opera and both-at-the-match are each Nash, since neither player wants to end up alone."
        },
        {
          type: "fill",
          q: "Unlike the symmetric Stag Hunt, the Battle of the Sexes adds a conflict of ____ over which equilibrium to reach.",
          answer: "interest",
          accept: ["interest", "interests", "preference", "preferences"],
          explain: "Each player prefers a different one of the two coordinated outcomes, creating a clash of interest."
        },
        {
          type: "mcq",
          q: "What do the two players most want to avoid in the Battle of the Sexes?",
          choices: ["ending up apart at different places", "coordinating at all", "the payoff-dominant outcome", "earning any payoff"],
          answer: 0,
          explain: "The worst outcomes are the miscoordinated ones where the players end up separated."
        },
        {
          type: "match",
          q: "Match each feature to its meaning.",
          pairs: [["Coordination", "Both prefer to be together"], ["Conflict", "Each prefers a different venue"], ["Two equilibria", "One favors each player"]],
          explain: "The game blends a shared interest in coordinating with a clash over which coordinated outcome occurs."
        },
        {
          type: "order",
          q: "Rank the outcomes for a player who prefers the opera, from best to worst.",
          items: ["Both go to the opera", "Both go to the football match", "They end up apart"],
          explain: "Being together at her favorite beats being together at his, which still beats being separated."
        },
        {
          type: "truefalse",
          q: "Because their preferences conflict, the players in the Battle of the Sexes gain nothing from coordinating.",
          answer: false,
          explain: "They still both prefer any coordinated outcome to being apart, so coordination remains valuable despite the conflict."
        }
      ]
    },
    {
      id: "l143",
      title: "Focal points and conventions",
      intro: "How Schelling's salience helps players pick the same equilibrium among many, hardening into conventions.",
      questions: [
        {
          type: "mcq",
          q: "A 'focal point' (Schelling point) is...",
          choices: ["the equilibrium with the highest payoff", "a solution people gravitate to because it stands out as natural or salient", "a device for randomizing choices", "the single unique Nash equilibrium"],
          answer: 1,
          explain: "Schelling showed people coordinate on salient options even without any communication."
        },
        {
          type: "fill",
          q: "The idea of the focal point was introduced by Thomas ____ in his 1960 book The Strategy of Conflict.",
          answer: "schelling",
          accept: ["schelling", "thomas schelling"],
          explain: "Schelling's 1960 book launched focal-point reasoning in game theory."
        },
        {
          type: "truefalse",
          q: "Schelling found that, asked to meet a stranger in New York with no communication, many people chose the same salient time and place.",
          answer: true,
          explain: "A common answer was Grand Central Station at noon, a shared focal point people converged on."
        },
        {
          type: "mcq",
          q: "Focal points matter most in games that have...",
          choices: ["multiple equilibria needing selection", "a single equilibrium", "no equilibrium at all", "a dominant strategy"],
          answer: 0,
          explain: "When several equilibria exist, salience helps players select the same one."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [["Focal point", "A salient, natural solution"], ["Convention", "A regularity everyone expects everyone to follow"], ["Salience", "What makes one option stand out"]],
          explain: "Salience creates focal points, which can harden into lasting conventions."
        },
        {
          type: "truefalse",
          q: "A focal point works only if it also gives the mathematically highest payoff.",
          answer: false,
          explain: "Salience, not payoff, drives focal points; they can be culturally or contextually obvious rather than optimal."
        },
        {
          type: "order",
          q: "Order how a convention emerges from a coordination problem.",
          items: ["A game has several equally good equilibria", "One option is salient or gets used repeatedly", "Everyone expects it, and it becomes a convention"],
          explain: "Repeated salient coordination hardens into a self-sustaining convention, as David Lewis argued in 1969."
        }
      ]
    },
    {
      id: "l144",
      title: "Basin size and risk-dominance",
      intro: "Why long-run evolutionary selection under noise favors the larger-basin, risk-dominant convention.",
      questions: [
        {
          type: "mcq",
          q: "The 'basin of attraction' of an equilibrium is...",
          choices: ["the set of starting states that evolve to it", "its total payoff", "the number of players in the game", "the population's mutation rate"],
          answer: 0,
          explain: "It is the range of initial population mixes from which the dynamics converge to that equilibrium."
        },
        {
          type: "fill",
          q: "In our Stag Hunt the hare equilibrium has the larger basin, covering starting stag-fractions below ____.",
          answer: "3/4",
          accept: ["3/4", "0.75", "75%", "three quarters"],
          explain: "You need more than 3/4 stag-hunters to reach the stag equilibrium, so hare owns the wider 3/4 basin."
        },
        {
          type: "truefalse",
          q: "In a 2x2 coordination game, the risk-dominant equilibrium has the larger basin of attraction.",
          answer: true,
          explain: "Risk-dominance is essentially the larger-basin criterion, matching the best response under 50/50 beliefs."
        },
        {
          type: "mcq",
          q: "Under small persistent mutation (stochastic stability), which equilibrium is selected in the long run?",
          choices: ["the payoff-dominant one", "the risk-dominant one", "a new random one each period", "none of them"],
          answer: 1,
          explain: "Kandori-Mailath-Rob (1993) and Peyton Young (1993) showed that persistent noise selects the risk-dominant equilibrium."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Basin of attraction", "States that flow to an equilibrium"], ["Risk-dominant", "Larger basin, favored by long-run selection"], ["Stochastic stability", "Selection under persistent random shocks"]],
          explain: "Bigger basins are harder to escape, so noise settles the population on the risk-dominant convention."
        },
        {
          type: "order",
          q: "Order the reasoning for why risk-dominance wins in the long run under noise.",
          items: ["The risk-dominant equilibrium has the larger basin", "Random shocks rarely push the population out of it", "Over long time the population spends almost all its time there"],
          explain: "A larger basin needs more improbable shocks to escape, so it dominates over long time horizons."
        },
        {
          type: "truefalse",
          q: "This means evolution always ends up at the outcome that is best for everyone.",
          answer: false,
          explain: "No: selection can favor the risk-dominant (safe) equilibrium even when it is worse than the payoff-dominant one, as hare over stag shows."
        }
      ]
    }
  ]
});
