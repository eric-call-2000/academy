window.ACADEMY.addUnit("egt", {
  id: "unit-2",
  title: "Solving Classical Games",
  color: "#3b74e0",
  icon: "🎯",
  description: "Learn the core solution concepts of rational game theory: dominance, best responses, Nash equilibrium, mixed strategies, and the puzzle of multiple equilibria.",
  lessons: [
    {
      id: "l9",
      title: "Dominant strategies",
      intro: "A dominant strategy is one that gives a player the best outcome no matter what the opponents do.",
      questions: [
        {
          type: "mcq",
          q: "Which statement best describes a strictly dominant strategy?",
          choices: [
            "A strategy that does better than every alternative only if opponents cooperate",
            "A strategy that yields a strictly higher payoff than any alternative, no matter what opponents do",
            "A strategy that copies whatever the opponent plays",
            "A strategy that is best only on average across random opponents"
          ],
          answer: 1,
          explain: "A strictly dominant strategy beats all of the player's other options against every possible opponent choice, so its optimality never depends on predicting the opponent."
        },
        {
          type: "truefalse",
          q: "If a player has a strictly dominant strategy, a rational player should always play it.",
          answer: true,
          explain: "Because it is best against every opponent choice, playing it can never be regretted, so rational players always select a strictly dominant strategy."
        },
        {
          type: "fill",
          q: "A strategy that is at least as good as any alternative against every opponent choice, and strictly better against at least one, is called a ____ dominant strategy.",
          answer: "weakly",
          accept: ["weakly", "weak"],
          explain: "Weak dominance requires being never worse and sometimes strictly better, unlike strict dominance which requires being strictly better in every case."
        },
        {
          type: "mcq",
          q: "In the Prisoner's Dilemma, why is Defect a dominant strategy?",
          choices: [
            "Because it gives a higher payoff whether the other prisoner cooperates or defects",
            "Because both prisoners agree to it in advance",
            "Because it guarantees the socially best outcome",
            "Because it is chosen at random"
          ],
          answer: 0,
          explain: "Each player earns more by defecting against either opponent choice, making Defect strictly dominant even though mutual cooperation would pay both more."
        },
        {
          type: "truefalse",
          q: "Every game gives each player at least one dominant strategy.",
          answer: false,
          explain: "Many games, such as Matching Pennies, have no dominant strategy at all; dominance is a special feature, not a guarantee."
        },
        {
          type: "match",
          q: "Match each dominance term to its meaning.",
          pairs: [
            ["Strictly dominant", "Strictly better against every opponent choice"],
            ["Weakly dominant", "Never worse and sometimes strictly better"],
            ["Dominated", "A strategy some other choice always beats"]
          ],
          explain: "Strict dominance is best everywhere, weak dominance is never worse and sometimes better, and a dominated strategy is one that another choice always outperforms."
        },
        {
          type: "order",
          q: "Order the steps for checking whether one of your strategies is dominant.",
          items: [
            "List all of your own available strategies",
            "For each opponent choice, compare that strategy's payoff to your alternatives",
            "Confirm it is best (or no worse) in every one of those comparisons",
            "Conclude it is dominant and play it"
          ],
          explain: "You check a strategy against every opponent choice; if it is never beaten by your other options across all of them, it is dominant."
        }
      ]
    },
    {
      id: "l10",
      title: "Iterated elimination of dominated strategies",
      intro: "By repeatedly deleting strategies no rational player would use, we can shrink a game toward its solution.",
      questions: [
        {
          type: "mcq",
          q: "Iterated elimination of dominated strategies simplifies a game by:",
          choices: [
            "Deleting dominated strategies, then re-checking the smaller game for newly dominated strategies, and repeating",
            "Deleting the highest-payoff strategy each round",
            "Merging both players into one decision maker",
            "Adding random noise until one strategy survives"
          ],
          answer: 0,
          explain: "Pruning a dominated strategy can make other strategies dominated in the smaller game, so the deletion process iterates until none remain."
        },
        {
          type: "truefalse",
          q: "When only strictly dominated strategies are removed, the final reduced game does not depend on the order of removal.",
          answer: true,
          explain: "Elimination of strictly dominated strategies is order-independent, so any sequence of deletions yields the same surviving strategies."
        },
        {
          type: "fill",
          q: "A game that iterated elimination reduces to a single strategy per player is called ____-solvable.",
          answer: "dominance",
          accept: ["dominance", "dominance solvable", "dominance-solvable"],
          explain: "Such games are 'dominance-solvable': pruning strictly dominated strategies alone pins down a unique predicted outcome."
        },
        {
          type: "order",
          q: "Order the steps of iterated elimination of strictly dominated strategies.",
          items: [
            "Identify a strategy that is strictly dominated for some player",
            "Delete that strategy from the game",
            "Re-examine the smaller game for newly dominated strategies",
            "Repeat until no strictly dominated strategies remain"
          ],
          explain: "You remove a dominated strategy, then recheck the reduced game, looping until nothing more can be cut."
        },
        {
          type: "match",
          q: "Match each term to its role in iterated elimination.",
          pairs: [
            ["Dominated strategy", "A choice some alternative always beats"],
            ["Iteration", "Re-checking the game after each deletion"],
            ["Dominance-solvable", "Reduces to one strategy per player"]
          ],
          explain: "A dominated strategy is removed, iteration means rechecking after each cut, and a dominance-solvable game shrinks to a single strategy per player."
        },
        {
          type: "mcq",
          q: "Why might a strategy that was NOT dominated at the start become removable later?",
          choices: [
            "Because payoffs change randomly between rounds",
            "Because deleting an opponent's strategy can leave it strictly dominated in the smaller game",
            "Because players are allowed to add new strategies",
            "Because a referee forces its removal"
          ],
          answer: 1,
          explain: "Removing an opponent's dominated strategy narrows the situations a strategy must handle, and it may then be strictly dominated and eliminated in turn."
        },
        {
          type: "truefalse",
          q: "Iterated elimination of weakly dominated strategies is order-independent, just like the strict case.",
          answer: false,
          explain: "Weak-dominance elimination is order-dependent; different removal orders can yield different survivors and even discard legitimate equilibria."
        }
      ]
    },
    {
      id: "l11",
      title: "Best response defined",
      intro: "A best response is the strategy that earns a player the highest payoff given a fixed choice by the opponents.",
      questions: [
        {
          type: "mcq",
          q: "What is a best response?",
          choices: [
            "The strategy that hurts the opponent the most",
            "The strategy opponents expect you to avoid",
            "The strategy that maximizes your payoff given what the opponents are doing",
            "Any strategy chosen with equal probability"
          ],
          answer: 2,
          explain: "A best response is defined relative to fixed opponent strategies: it is whatever choice gives you the highest payoff against them."
        },
        {
          type: "truefalse",
          q: "A player can have more than one best response to the same opponent strategy.",
          answer: true,
          explain: "If two strategies tie for the highest payoff against the opponent's choice, both are best responses, so the best-response set can contain several strategies."
        },
        {
          type: "fill",
          q: "A dominant strategy is a best response to ____ strategy the opponent might choose.",
          answer: "every",
          accept: ["every", "any", "all"],
          explain: "Because a dominant strategy is optimal against all opponent choices, it is simultaneously a best response to every one of them."
        },
        {
          type: "match",
          q: "Match each idea to its definition.",
          pairs: [
            ["Best response", "Payoff-maximizing reply to a fixed opponent choice"],
            ["Best-response set", "All strategies tying for the highest payoff"],
            ["Dominant strategy", "Best response to every opponent strategy"]
          ],
          explain: "A best response maximizes payoff against a fixed choice, the best-response set collects all tying maximizers, and a dominant strategy best-responds to everything."
        },
        {
          type: "mcq",
          q: "How does the best-response idea define a Nash equilibrium?",
          choices: [
            "It is a profile in which every player's strategy is a best response to the others'",
            "It is a profile where one player best-responds and the rest do not",
            "It is the strategy that the loser must play",
            "It is any random combination of strategies"
          ],
          answer: 0,
          explain: "A Nash equilibrium is exactly a mutual-best-response profile: each player's choice is a best response to everyone else's, so no one wants to switch."
        },
        {
          type: "truefalse",
          q: "To find your best response, you need to know (or assume) the opponent's strategy.",
          answer: true,
          explain: "Best response is always defined against a specified opponent strategy; change the opponent's choice and your best response may change."
        },
        {
          type: "order",
          q: "Order the steps to compute your best response to a known opponent strategy.",
          items: [
            "Fix the opponent's strategy",
            "Compute your payoff for each of your strategies against it",
            "Select the strategy (or strategies) with the highest payoff"
          ],
          explain: "With the opponent's choice held fixed, you evaluate each of your options and keep whichever gives the top payoff."
        }
      ]
    },
    {
      id: "l12",
      title: "Nash equilibrium concept",
      intro: "At a Nash equilibrium every player's strategy is a best response to the others, so no one can gain by changing alone.",
      questions: [
        {
          type: "mcq",
          q: "A Nash equilibrium is a strategy profile in which:",
          choices: [
            "One player earns the maximum possible payoff",
            "No player can raise their payoff by unilaterally changing strategy",
            "All players earn identical payoffs",
            "Every player uses a dominant strategy"
          ],
          answer: 1,
          explain: "The defining property is unilateral stability: holding others fixed, no single player can do better by deviating."
        },
        {
          type: "truefalse",
          q: "At a Nash equilibrium, players could still do better if several of them changed strategies together.",
          answer: true,
          explain: "Nash equilibrium only rules out profitable single-player deviations; a coordinated joint change, as in the Prisoner's Dilemma, can still help everyone."
        },
        {
          type: "fill",
          q: "A Nash equilibrium is a profile where each player's strategy is a mutual ____ response.",
          answer: "best",
          accept: ["best"],
          explain: "Nash equilibrium is precisely a profile of mutual best responses: everyone is simultaneously best-responding to everyone else."
        },
        {
          type: "mcq",
          q: "In the Prisoner's Dilemma, which outcome is the Nash equilibrium?",
          choices: [
            "Both cooperate",
            "One cooperates, one defects",
            "Both defect",
            "The game has no Nash equilibrium"
          ],
          answer: 2,
          explain: "Mutual defection is the unique Nash equilibrium: given the other's choice, each prisoner still prefers to defect, so neither can profitably deviate."
        },
        {
          type: "truefalse",
          q: "Every Nash equilibrium is automatically the best outcome for the group.",
          answer: false,
          explain: "Equilibria can be inefficient; mutual defection in the Prisoner's Dilemma is a Nash equilibrium yet worse for both than mutual cooperation."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Nash equilibrium", "No profitable unilateral deviation"],
            ["Unilateral deviation", "One player changing while others stay fixed"],
            ["Mutual best response", "Each strategy is optimal against the others"]
          ],
          explain: "A Nash equilibrium blocks profitable unilateral deviations, meaning each player's strategy is already a best response to the rest."
        },
        {
          type: "order",
          q: "Order the steps to check whether a strategy profile is a Nash equilibrium.",
          items: [
            "Pick one player and hold the others' strategies fixed",
            "Check whether that player can gain by switching to another strategy",
            "Repeat for every player",
            "If no player can gain by switching, the profile is a Nash equilibrium"
          ],
          explain: "You test each player for a profitable unilateral switch; if none exists for anyone, the profile is a Nash equilibrium."
        }
      ]
    },
    {
      id: "l13",
      title: "John Nash's 1950 theorem",
      intro: "In 1950 John Nash proved that every finite game has at least one equilibrium, possibly in mixed strategies.",
      questions: [
        {
          type: "mcq",
          q: "What did John Nash prove in 1950?",
          choices: [
            "Every finite game has at least one Nash equilibrium, allowing mixed strategies",
            "Every game has a dominant strategy",
            "No game can have more than one equilibrium",
            "Cooperation is always rational"
          ],
          answer: 0,
          explain: "Nash's existence theorem guarantees at least one equilibrium in any game with finitely many players and strategies, though it may require mixed strategies."
        },
        {
          type: "truefalse",
          q: "Nash's theorem guarantees an equilibrium only because mixed (randomized) strategies are allowed.",
          answer: true,
          explain: "Some finite games, like Matching Pennies, have no pure equilibrium; the existence guarantee holds precisely because mixed strategies are permitted."
        },
        {
          type: "fill",
          q: "Nash's existence proof relied on a mathematical result known as a ____ point theorem.",
          answer: "fixed",
          accept: ["fixed", "fixed-point", "fixed point"],
          explain: "Nash used a fixed-point theorem (Kakutani's in his 1950 note, Brouwer's in the 1951 paper) to show a mutual-best-response profile must exist."
        },
        {
          type: "mcq",
          q: "Nash's theorem requires the game to have:",
          choices: [
            "Infinitely many players",
            "Finitely many players and finitely many strategies each",
            "Only two possible payoffs",
            "A dominant strategy for someone"
          ],
          answer: 1,
          explain: "The theorem applies to finite games: a finite number of players, each with a finite set of pure strategies."
        },
        {
          type: "truefalse",
          q: "Nash's theorem tells you exactly which equilibrium will be played.",
          answer: false,
          explain: "It is an existence result only; it guarantees at least one equilibrium exists but does not select among them when several are present."
        },
        {
          type: "match",
          q: "Match each item to its role in Nash's result.",
          pairs: [
            ["1950", "Year Nash published his equilibrium existence result"],
            ["Fixed-point theorem", "Mathematical tool behind the proof"],
            ["Finite game", "Finitely many players and strategies"],
            ["Mixed strategy", "May be needed for the guaranteed equilibrium"]
          ],
          explain: "Nash's 1950 note used a fixed-point theorem to prove that every finite game has an equilibrium, possibly requiring mixed strategies."
        },
        {
          type: "mcq",
          q: "Nash's contribution to game theory was later recognized with which honor?",
          choices: [
            "The Fields Medal in 1950",
            "The Turing Award in 1970",
            "The Nobel Memorial Prize in Economic Sciences in 1994",
            "No major award"
          ],
          answer: 2,
          explain: "John Nash shared the 1994 Nobel Memorial Prize in Economic Sciences with John Harsanyi and Reinhard Selten for his equilibrium work."
        }
      ]
    },
    {
      id: "l14",
      title: "Pure versus mixed equilibria",
      intro: "A pure strategy commits to one action, while a mixed strategy randomizes over actions with set probabilities.",
      questions: [
        {
          type: "mcq",
          q: "What is the difference between a pure and a mixed strategy?",
          choices: [
            "A pure strategy always randomizes; a mixed strategy never does",
            "A pure strategy picks one action for sure; a mixed strategy assigns probabilities to actions",
            "A pure strategy is only for two-player games",
            "There is no real difference between them"
          ],
          answer: 1,
          explain: "A pure strategy is a deterministic single action, while a mixed strategy is a probability distribution over the player's pure strategies."
        },
        {
          type: "truefalse",
          q: "A pure strategy is a special case of a mixed strategy that puts all probability on one action.",
          answer: true,
          explain: "Assigning probability 1 to a single action and 0 to the rest is a degenerate mixed strategy identical to that pure strategy."
        },
        {
          type: "fill",
          q: "In a mixed-strategy equilibrium, a player randomizes so that the opponent is left ____ between their own options.",
          answer: "indifferent",
          accept: ["indifferent", "indifference"],
          explain: "By the indifference principle, each player mixes so the opponent earns equal expected payoff from the strategies they are mixing, leaving them willing to randomize."
        },
        {
          type: "mcq",
          q: "Which game has no pure-strategy equilibrium and requires a mixed one?",
          choices: [
            "Prisoner's Dilemma",
            "A game with a dominant strategy for both players",
            "Matching Pennies",
            "Any game that has a Nash equilibrium"
          ],
          answer: 2,
          explain: "Matching Pennies has no pure equilibrium; its only equilibrium has each player randomizing 50-50."
        },
        {
          type: "truefalse",
          q: "If a finite game has a pure-strategy equilibrium, it can never also have a mixed one.",
          answer: false,
          explain: "Games can have both; coordination games, for example, have pure equilibria plus an additional mixed-strategy equilibrium."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [
            ["Pure strategy", "One action chosen with certainty"],
            ["Mixed strategy", "Probabilities spread over actions"],
            ["Indifference condition", "Opponent earns equal expected payoff from mixed options"]
          ],
          explain: "A pure strategy is certain, a mixed strategy is probabilistic, and the indifference condition is what sustains a mixed equilibrium."
        },
        {
          type: "order",
          q: "Order these from most deterministic to least deterministic.",
          items: [
            "A pure strategy playing one action with probability 1",
            "A mixed strategy weighted heavily toward one action",
            "A 50-50 mixed strategy"
          ],
          explain: "Determinism decreases as probability spreads out: a pure strategy is fully certain, a skewed mix is partly random, and an even 50-50 mix is maximally uncertain between two actions."
        }
      ]
    },
    {
      id: "l15",
      title: "Matching Pennies example",
      intro: "Matching Pennies is a zero-sum game with no pure equilibrium, solvable only when both players randomize.",
      questions: [
        {
          type: "mcq",
          q: "In Matching Pennies, how does the 'matcher' win?",
          choices: [
            "When the two coins show the same face",
            "When both coins show Heads only",
            "When the coins show different faces",
            "When the coins add up to an odd number"
          ],
          answer: 0,
          explain: "The matcher wins if the two pennies match, both Heads or both Tails; the other player, the mismatcher, wins when they differ."
        },
        {
          type: "truefalse",
          q: "Matching Pennies is a zero-sum game: one player's gain equals the other's loss.",
          answer: true,
          explain: "Whatever one player wins the other loses, so the payoffs sum to zero; it is a game of pure conflict."
        },
        {
          type: "truefalse",
          q: "Matching Pennies has a pure-strategy Nash equilibrium.",
          answer: false,
          explain: "No pure profile is stable: from any pure outcome the losing player wants to switch, so the only equilibrium is in mixed strategies."
        },
        {
          type: "fill",
          q: "In the unique equilibrium of Matching Pennies, each player chooses Heads with probability ____.",
          answer: "1/2",
          accept: ["1/2", "0.5", "50%", "one half", "half"],
          explain: "Randomizing 50-50 makes the opponent indifferent between Heads and Tails, which is exactly the mixed-strategy equilibrium."
        },
        {
          type: "mcq",
          q: "Why must a Matching Pennies player randomize 50-50?",
          choices: [
            "To guarantee a win every round",
            "So the opponent cannot exploit any predictable pattern",
            "Because the rules forbid pure strategies",
            "To turn the game into a cooperative one"
          ],
          answer: 1,
          explain: "Any predictable bias could be exploited by the opponent; mixing 50-50 keeps the opponent indifferent and unable to gain from prediction."
        },
        {
          type: "match",
          q: "Match each role or feature to its description in Matching Pennies.",
          pairs: [
            ["Matcher", "Wins when the coins match"],
            ["Mismatcher", "Wins when the coins differ"],
            ["Mixed equilibrium", "Each plays Heads with probability one half"],
            ["Zero-sum", "One player's gain is the other's loss"]
          ],
          explain: "The matcher and mismatcher have opposite goals, the payoffs are zero-sum, and the unique equilibrium is the 50-50 mix."
        },
        {
          type: "order",
          q: "Order the reasoning that shows Matching Pennies needs a mixed strategy.",
          items: [
            "Check each pure outcome for stability",
            "Notice the losing player always wants to switch",
            "Conclude no pure equilibrium exists",
            "Find the 50-50 mixed equilibrium instead"
          ],
          explain: "Because every pure outcome invites the loser to deviate, no pure equilibrium exists, leaving only the 50-50 mixed equilibrium."
        }
      ]
    },
    {
      id: "l16",
      title: "Multiple equilibria problem",
      intro: "When a game has several equilibria, solution concepts alone cannot tell players which one to expect.",
      questions: [
        {
          type: "mcq",
          q: "What is the 'multiple equilibria problem'?",
          choices: [
            "A game has no equilibrium at all",
            "A game has several equilibria and the theory does not say which will occur",
            "Players always pick the worst equilibrium",
            "Equilibria only exist in mixed strategies"
          ],
          answer: 1,
          explain: "When more than one Nash equilibrium exists, the equilibrium concept alone fails to predict a single outcome, creating a selection problem."
        },
        {
          type: "truefalse",
          q: "Nash's existence theorem also guarantees that the equilibrium is unique.",
          answer: false,
          explain: "The theorem guarantees at least one equilibrium but says nothing about uniqueness; many games have several."
        },
        {
          type: "fill",
          q: "A salient shared expectation that helps players converge on one equilibrium is called a ____ point, a term due to Thomas Schelling.",
          answer: "focal",
          accept: ["focal", "focal point", "schelling"],
          explain: "Thomas Schelling's 'focal points' (1960) are salient outcomes players coordinate on using shared context, culture, or cues beyond the payoffs themselves."
        },
        {
          type: "mcq",
          q: "Which classic game has two pure-strategy equilibria that players must coordinate on?",
          choices: [
            "Matching Pennies",
            "A dominance-solvable game",
            "Battle of the Sexes",
            "A one-player decision problem"
          ],
          answer: 2,
          explain: "Battle of the Sexes has two pure Nash equilibria, with both partners at the same event; the challenge is coordinating on which one."
        },
        {
          type: "truefalse",
          q: "The equilibrium selection problem asks which of several equilibria rational players will actually reach.",
          answer: true,
          explain: "Equilibrium selection studies extra criteria, such as focal points, risk dominance, or communication, that pick one equilibrium when the basic concept allows many."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Multiple equilibria", "More than one stable outcome"],
            ["Selection problem", "Deciding which equilibrium occurs"],
            ["Focal point", "Salient outcome players coordinate on"],
            ["Battle of the Sexes", "Coordination game with two pure equilibria"]
          ],
          explain: "Multiple equilibria create a selection problem, and focal points are one way players coordinate, as in the two-equilibrium Battle of the Sexes."
        },
        {
          type: "order",
          q: "Order the coordination challenge in a game with two good equilibria.",
          items: [
            "Both equilibria are stable, so neither is ruled out",
            "Each player prefers to match the other's choice",
            "Without a shared cue, players may miscoordinate",
            "A focal point can help them agree on one equilibrium"
          ],
          explain: "With two stable equilibria and a desire to match, players risk miscoordination unless a shared focal point steers them to the same one."
        }
      ]
    }
  ]
});
