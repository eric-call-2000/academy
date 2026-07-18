window.ACADEMY.addUnit("egt", {
  id: "unit-1",
  title: "What Is a Game?",
  color: "#3b74e0",
  icon: "\u{1F3B2}",
  description: "Introduces the classical game-theory vocabulary of players, strategies, payoffs, and rationality that all later evolutionary reasoning is built upon.",
  lessons: [
    {
      id: "l1",
      title: "Strategic interaction defined",
      intro: "A strategic interaction is any situation where your best move depends on what the other decision-makers choose to do.",
      questions: [
        {
          type: "mcq",
          q: "What best defines a strategic interaction?",
          choices: [
            "A situation where each player's outcome depends on the choices of others",
            "A situation decided entirely by random chance",
            "A choice made by one person in complete isolation",
            "A calculation with no decision-makers involved"
          ],
          answer: 0,
          explain: "Game theory studies strategic interactions, where the result for each player is shaped not only by their own action but by the actions of everyone else."
        },
        {
          type: "truefalse",
          q: "In a strategic interaction, a player can guarantee the outcome entirely on their own, no matter what others do.",
          answer: false,
          explain: "The defining feature is interdependence: outcomes hinge on the combination of everyone's choices, so no single player fully controls the result."
        },
        {
          type: "fill",
          q: "Game theory studies ____ interaction, where each player's payoff depends on the choices of all the players.",
          answer: "strategic",
          accept: ["strategic"],
          explain: "The word 'strategic' captures that each player must plan around the anticipated choices of others."
        },
        {
          type: "mcq",
          q: "Which of these is a genuine example of strategic interaction?",
          choices: [
            "Deciding what to eat for breakfast alone",
            "Rolling a die by yourself",
            "Reading a book quietly",
            "Two firms setting prices, each affected by the other's price"
          ],
          answer: 3,
          explain: "When two firms set prices, each firm's profit depends on the rival's price too, making the choices interdependent and therefore strategic."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Interdependence", "Each player's result hinges on the actions of others"],
            ["Isolation", "An outcome unaffected by anyone else's choice"],
            ["Player", "A decision-maker whose action helps set the outcome"]
          ],
          explain: "Strategic interaction is marked by interdependence among players, in contrast to isolated one-person decisions."
        },
        {
          type: "truefalse",
          q: "A situation with a single decision-maker facing only chance events is usually called decision theory, not game theory.",
          answer: true,
          explain: "Game theory specifically requires two or more agents whose choices strategically affect one another; one agent versus chance is the domain of decision theory."
        },
        {
          type: "order",
          q: "Order the steps a strategic thinker takes when facing an interaction.",
          items: [
            "Recognize that others' choices affect my payoff",
            "Anticipate what those others are likely to choose",
            "Choose my best response given their likely choices"
          ],
          explain: "Strategic reasoning starts by noticing interdependence, then forming beliefs about others, then best-responding to those beliefs."
        }
      ]
    },
    {
      id: "l2",
      title: "Players, strategies, payoffs",
      intro: "Every formal game is built from three primitives: the players, the strategies available to them, and the payoffs they receive.",
      questions: [
        {
          type: "mcq",
          q: "What are the three primitives of any formal game?",
          choices: [
            "Rules, referees, and rewards",
            "Cards, dice, and boards",
            "Buyers, sellers, and prices",
            "Players, strategies, and payoffs"
          ],
          answer: 3,
          explain: "To fully specify a game you need who is deciding (players), what they can do (strategies), and what each outcome is worth to them (payoffs)."
        },
        {
          type: "match",
          q: "Match each primitive to its meaning.",
          pairs: [
            ["Players", "The decision-makers who act in the game"],
            ["Strategies", "The complete plans of action available to a player"],
            ["Payoffs", "The value a player assigns to each possible outcome"]
          ],
          explain: "These three elements together define a game: the actors, their options, and how they rank results."
        },
        {
          type: "fill",
          q: "A player's ____ is a complete plan that specifies what action to take in every situation they might face.",
          answer: "strategy",
          accept: ["strategy"],
          explain: "A strategy is a full contingent plan, not just a single move; it prescribes an action for every decision point."
        },
        {
          type: "truefalse",
          q: "A payoff represents how much a player values an outcome, and need not be an amount of money.",
          answer: true,
          explain: "Payoffs are utilities that capture preferences; they can stand for money, time, survival, or any valued result."
        },
        {
          type: "mcq",
          q: "In game theory, a 'player' is best described as:",
          choices: [
            "Only an individual human being",
            "Any decision-making entity, such as a person, firm, animal, or gene",
            "Whichever participant happens to move first",
            "The eventual winner of the game"
          ],
          answer: 1,
          explain: "A player is any entity that makes strategic choices, which is why evolutionary game theory can treat organisms or genes as players."
        },
        {
          type: "truefalse",
          q: "In game theory, a 'strategy' and an 'action' always mean exactly the same thing.",
          answer: false,
          explain: "An action is a single move, while a strategy is a complete plan of actions covering every situation the player could reach."
        },
        {
          type: "order",
          q: "Order the steps used to specify a game formally.",
          items: [
            "List the players",
            "Specify each player's available strategies",
            "Assign a payoff to each combination of strategies"
          ],
          explain: "You first name the decision-makers, then their options, then the payoffs attached to every strategy combination."
        }
      ]
    },
    {
      id: "l3",
      title: "Von Neumann and Morgenstern",
      intro: "Modern game theory began in 1944 when John von Neumann and Oskar Morgenstern published the founding text and formalized utility under risk.",
      questions: [
        {
          type: "mcq",
          q: "Who co-authored the 1944 book that founded modern game theory?",
          choices: [
            "John Nash and Lloyd Shapley",
            "John von Neumann and Oskar Morgenstern",
            "John Maynard Smith and George Price",
            "Robert Aumann and Thomas Schelling"
          ],
          answer: 1,
          explain: "Mathematician John von Neumann and economist Oskar Morgenstern co-wrote the founding text in 1944."
        },
        {
          type: "fill",
          q: "The 1944 founding text was titled Theory of Games and Economic ____.",
          answer: "behavior",
          accept: ["behavior", "behaviour"],
          explain: "The book Theory of Games and Economic Behavior launched game theory as a formal discipline."
        },
        {
          type: "truefalse",
          q: "Von Neumann and Morgenstern's founding book was published in 1944.",
          answer: true,
          explain: "Princeton University Press published Theory of Games and Economic Behavior in 1944."
        },
        {
          type: "mcq",
          q: "The von Neumann-Morgenstern utility theorem shows that a rational agent facing risk acts to maximize:",
          choices: [
            "Expected utility",
            "Total money held",
            "The number of players in the game",
            "The length of the game"
          ],
          answer: 0,
          explain: "Their theorem proves that a rational agent whose preferences satisfy certain axioms behaves as if maximizing expected utility."
        },
        {
          type: "match",
          q: "Match each contributor or idea to its description.",
          pairs: [
            ["John von Neumann", "Mathematician who proved the minimax theorem"],
            ["Oskar Morgenstern", "Economist and co-author of the 1944 text"],
            ["Expected utility", "Probability-weighted value of risky outcomes"]
          ],
          explain: "Von Neumann supplied the mathematics, Morgenstern the economic framing, and together they axiomatized expected utility."
        },
        {
          type: "truefalse",
          q: "Von Neumann had already proved the minimax theorem for two-player zero-sum games in 1928, before the 1944 book.",
          answer: true,
          explain: "His 1928 minimax theorem was an early foundation that the 1944 book built upon and extended."
        },
        {
          type: "order",
          q: "Order these milestones in the early history of game theory.",
          items: [
            "Von Neumann proves the minimax theorem (1928)",
            "Theory of Games and Economic Behavior is published (1944)",
            "Nash defines his equilibrium concept (1950)"
          ],
          explain: "The minimax result came first, the founding book followed in 1944, and Nash equilibrium arrived around 1950."
        }
      ]
    },
    {
      id: "l4",
      title: "The payoff matrix",
      intro: "A payoff matrix lays out two players' strategies as rows and columns, with each cell showing the payoff to both players.",
      questions: [
        {
          type: "mcq",
          q: "In a standard two-player payoff matrix, the rows and columns represent:",
          choices: [
            "The two players' strategies",
            "The passage of time within a turn",
            "Random events outside the players' control",
            "The referee's rulings"
          ],
          answer: 0,
          explain: "One player's strategies label the rows and the other player's strategies label the columns, so each cell is one strategy combination."
        },
        {
          type: "truefalse",
          q: "In a bimatrix, each cell typically lists two numbers: the payoff to the row player and the payoff to the column player.",
          answer: true,
          explain: "A bimatrix shows both players' payoffs per outcome, which is why each cell holds a pair of numbers."
        },
        {
          type: "fill",
          q: "By convention, in each cell the ____ player's payoff is written first, followed by the column player's payoff.",
          answer: "row",
          accept: ["row"],
          explain: "The usual ordering lists the row player's payoff first and the column player's second, as in (row, column)."
        },
        {
          type: "mcq",
          q: "A cell entry of (3, 5) in a payoff matrix usually means:",
          choices: [
            "The game will last exactly 8 turns",
            "The row player gets 3 and the column player gets 5",
            "The row player gets 5 and the column player gets 3",
            "Both players receive 15"
          ],
          answer: 1,
          explain: "With the (row, column) convention, the first number 3 is the row player's payoff and the second number 5 is the column player's."
        },
        {
          type: "match",
          q: "Match each part of a payoff matrix to what it represents.",
          pairs: [
            ["Row", "A strategy of the first player"],
            ["Column", "A strategy of the second player"],
            ["Cell", "The pair of payoffs for one strategy combination"]
          ],
          explain: "Rows and columns are the two players' strategies, and each cell reports the resulting payoffs."
        },
        {
          type: "truefalse",
          q: "A two-player game in which each player has two strategies produces a 2x2 payoff matrix with four cells.",
          answer: true,
          explain: "Two row strategies times two column strategies yields four strategy combinations, hence four cells."
        },
        {
          type: "order",
          q: "Order the steps for reading a payoff from a matrix.",
          items: [
            "Pick the row for the first player's strategy",
            "Pick the column for the second player's strategy",
            "Read the payoff pair in the intersecting cell"
          ],
          explain: "You locate the chosen row, then the chosen column, and the intersecting cell gives both players' payoffs."
        }
      ]
    },
    {
      id: "l5",
      title: "Zero-sum versus non-zero-sum",
      intro: "In zero-sum games one player's gain is exactly another's loss, while non-zero-sum games allow mutual gains or mutual losses.",
      questions: [
        {
          type: "mcq",
          q: "In a zero-sum game, the players' payoffs in every outcome:",
          choices: [
            "Always sum to the same constant, so one player's gain is another's loss",
            "Are always equal to each other",
            "Are always positive for everyone",
            "Never depend on the strategies chosen"
          ],
          answer: 0,
          explain: "Zero-sum (more generally constant-sum) means the payoffs add up to a fixed total, so any gain for one is a matching loss for another."
        },
        {
          type: "truefalse",
          q: "Poker played for a fixed pot among the players is essentially a zero-sum game.",
          answer: true,
          explain: "The money only shifts among players, so one player's winnings equal the others' combined losses."
        },
        {
          type: "fill",
          q: "A game in which the payoffs need not add up to a constant is called a ____-zero-sum game.",
          answer: "non",
          accept: ["non", "non-zero", "nonzero"],
          explain: "Non-zero-sum games allow the total payoff to vary across outcomes, so players can both win or both lose."
        },
        {
          type: "mcq",
          q: "Which of these is a non-zero-sum game?",
          choices: [
            "Matching Pennies, where one wins exactly what the other loses",
            "The Prisoner's Dilemma, where both players can gain or both can lose",
            "Rock-paper-scissors played for a single point",
            "Splitting one fixed prize between two rivals"
          ],
          answer: 1,
          explain: "In the Prisoner's Dilemma the total payoff depends on the outcome, so both can do well or both badly, making it non-zero-sum."
        },
        {
          type: "match",
          q: "Match each game to its type.",
          pairs: [
            ["Chess with win, lose, or draw", "Zero-sum: one side's win is the other's loss"],
            ["Prisoner's Dilemma", "Non-zero-sum: total payoff varies by outcome"],
            ["Mutually beneficial trade", "Non-zero-sum: both parties can be better off"]
          ],
          explain: "Pure-conflict games are zero-sum, while games that allow shared gains or losses are non-zero-sum."
        },
        {
          type: "truefalse",
          q: "In a non-zero-sum game, it is impossible for both players to be better off in one outcome than in another.",
          answer: false,
          explain: "The whole point of non-zero-sum games is that mutual improvement is possible, as with cooperation or trade."
        },
        {
          type: "order",
          q: "Order these interactions from pure conflict toward fully shared interest.",
          items: [
            "A strictly zero-sum duel",
            "A mixed-motive bargaining game",
            "A pure coordination game where interests fully align"
          ],
          explain: "Conflict is total in zero-sum games, partial in mixed-motive games, and absent in pure coordination games."
        }
      ]
    },
    {
      id: "l6",
      title: "Simultaneous versus sequential games",
      intro: "Simultaneous-move games are captured by the normal form, while sequential-move games are drawn as extensive-form trees.",
      questions: [
        {
          type: "mcq",
          q: "In a simultaneous game, the players:",
          choices: [
            "Choose without knowing the others' current choices",
            "Always move strictly one after another",
            "Can always see every move that came before",
            "Never have more than one strategy each"
          ],
          answer: 0,
          explain: "Simultaneous play means each player commits without observing the others' concurrent choice, even if not literally at the same instant."
        },
        {
          type: "mcq",
          q: "The extensive form of a game is drawn as:",
          choices: [
            "A single summary number",
            "A tree of nodes and branches showing the order of moves",
            "A pie chart of payoffs",
            "A payoff matrix and nothing more"
          ],
          answer: 1,
          explain: "The extensive form is a game tree whose nodes are decision points and whose branches are actions, capturing the sequence of play."
        },
        {
          type: "truefalse",
          q: "The normal (strategic) form is typically used to represent simultaneous-move games.",
          answer: true,
          explain: "The normal form, usually a payoff matrix, suits simultaneous games because it lists strategies without an explicit move order."
        },
        {
          type: "fill",
          q: "A sequential game, in which players move in turn, is commonly drawn as a game ____.",
          answer: "tree",
          accept: ["tree", "game tree"],
          explain: "Sequential games are represented as trees, where branching shows the order in which players move."
        },
        {
          type: "match",
          q: "Match each form or concept to its feature.",
          pairs: [
            ["Normal form", "A payoff matrix for simultaneous choices"],
            ["Extensive form", "A tree showing the sequence of moves"],
            ["Information set", "Nodes a player cannot tell apart when moving"]
          ],
          explain: "The normal form is matrix-based, the extensive form is tree-based, and information sets encode what a player does not know."
        },
        {
          type: "truefalse",
          q: "In a sequential game with perfect information, a later mover cannot observe what earlier players did.",
          answer: false,
          explain: "Perfect information means every player, when moving, knows all the moves already made, so later movers do observe earlier moves."
        },
        {
          type: "order",
          q: "Order the parts of an extensive-form tree from the start of play to the end.",
          items: [
            "Root node where the first player moves",
            "Branches for each available action",
            "Terminal nodes listing the final payoffs"
          ],
          explain: "Play begins at the root, follows branches as players act, and ends at terminal nodes where payoffs are recorded."
        }
      ]
    },
    {
      id: "l7",
      title: "Common knowledge and rationality",
      intro: "Classical game theory assumes players are rational and that this rationality is common knowledge among them.",
      questions: [
        {
          type: "mcq",
          q: "A rational player, in the game-theory sense, is one who:",
          choices: [
            "Acts randomly at all times",
            "Chooses actions to maximize their own expected payoff given their beliefs",
            "Always cooperates no matter the situation",
            "Ignores the payoffs entirely"
          ],
          answer: 1,
          explain: "Rationality means having consistent preferences and choosing the action that best serves them given what the player believes."
        },
        {
          type: "fill",
          q: "A fact is ____ knowledge when everyone knows it, everyone knows that everyone knows it, and so on without end.",
          answer: "common",
          accept: ["common"],
          explain: "Common knowledge is this infinite tower of mutual knowing, not just each person individually knowing the fact."
        },
        {
          type: "truefalse",
          q: "Common knowledge requires only that each player individually knows the fact, with no higher levels of knowing.",
          answer: false,
          explain: "Common knowledge goes further: each player must also know that the others know, and know that they know that they know, endlessly."
        },
        {
          type: "mcq",
          q: "The concept of common knowledge was introduced and later formalized by:",
          choices: [
            "Charles Darwin",
            "Adam Smith working alone",
            "David Lewis and later Robert Aumann",
            "Isaac Newton"
          ],
          answer: 2,
          explain: "Philosopher David Lewis introduced common knowledge in his 1969 book Convention, and Robert Aumann gave it a formal treatment in 1976."
        },
        {
          type: "match",
          q: "Match each assumption to its meaning.",
          pairs: [
            ["Rationality", "Each player maximizes their own expected payoff"],
            ["Common knowledge of rationality", "Everyone knows everyone is rational, and knows that they know"],
            ["Complete information", "Players know the strategies and payoffs of the game"]
          ],
          explain: "Classical analysis leans on rationality, its common knowledge, and often complete information about the game's structure."
        },
        {
          type: "truefalse",
          q: "Assuming rationality is common knowledge lets each player reason about how the others will reason.",
          answer: true,
          explain: "Because each player can rely on the others being rational and on that being mutually known, they can anticipate one another's reasoning."
        },
        {
          type: "order",
          q: "Order the first layers of common knowledge of a fact F.",
          items: [
            "Each player knows F",
            "Each player knows that the others know F",
            "Each player knows that the others know that they know F"
          ],
          explain: "Common knowledge is built from these nested layers of knowing, continuing infinitely upward."
        }
      ]
    },
    {
      id: "l8",
      title: "Utility as preference ordering",
      intro: "Payoffs are utilities that rank a player's preferences over outcomes, rather than literal measures of cash.",
      questions: [
        {
          type: "mcq",
          q: "In game theory, a payoff or utility number primarily represents:",
          choices: [
            "How much a player prefers an outcome relative to the alternatives",
            "The exact dollar amount in every case",
            "The number of players in the game",
            "The amount of time the game takes"
          ],
          answer: 0,
          explain: "Utility encodes preference: a higher number simply means the outcome is more preferred by that player."
        },
        {
          type: "truefalse",
          q: "Utility measures a preference ordering, so a higher utility means an outcome is more preferred.",
          answer: true,
          explain: "By construction, utility assigns larger numbers to more-preferred outcomes, which is what makes it a preference ordering."
        },
        {
          type: "fill",
          q: "Because one dollar can matter more to a poor person than to a rich one, money and ____ are not the same thing.",
          answer: "utility",
          accept: ["utility"],
          explain: "The same amount of money can carry different utility for different people, so payoffs are measured in utility, not raw cash."
        },
        {
          type: "mcq",
          q: "An ordinal utility scale conveys:",
          choices: [
            "The exact intensity of preferences measured in cash",
            "Only the rank order of outcomes, not the size of the gaps between them",
            "Nothing at all about preferences",
            "The number of strategies available"
          ],
          answer: 1,
          explain: "Ordinal utility captures only which outcome is preferred to which; it does not claim the numerical gaps are meaningful."
        },
        {
          type: "match",
          q: "Match each utility concept to its description.",
          pairs: [
            ["Ordinal utility", "Ranks outcomes from best to worst"],
            ["Cardinal (vN-M) utility", "Assigns magnitudes usable for expected-value calculations"],
            ["Diminishing marginal utility", "Each extra dollar adds less satisfaction than the last"]
          ],
          explain: "Ordinal utility only ranks, cardinal utility supports expected-value reasoning, and diminishing marginal utility explains why money and utility diverge."
        },
        {
          type: "truefalse",
          q: "If a player prefers outcome A to outcome B, then their utility for A must be lower than their utility for B.",
          answer: false,
          explain: "A preferred outcome receives the higher utility, so utility for A must be greater than utility for B, not lower."
        },
        {
          type: "order",
          q: "Order these results from lowest to highest utility for a hungry person choosing a meal.",
          items: [
            "An empty plate",
            "A small snack",
            "A full meal"
          ],
          explain: "A hungry person prefers more food, so utility rises from the empty plate, to the snack, to the full meal."
        }
      ]
    }
  ]
});
