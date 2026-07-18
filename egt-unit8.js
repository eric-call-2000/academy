window.ACADEMY.addUnit("egt", {
  id: "unit-8",
  title: "Replicator Dynamics",
  color: "#3b74e0",
  icon: "📈",
  description: "Learn the replicator equation, the core rule describing how strategy frequencies change over time and how it grounds the ESS in dynamics.",
  lessons: [
    {
      id: "l57",
      title: "From statics to dynamics",
      intro: "Move beyond just finding equilibria to modeling how a population actually changes over time.",
      questions: [
        {
          type: "mcq",
          q: "What does classical (static) game theory primarily seek to identify?",
          choices: ["Random noise in payoffs", "The exact path of change over time", "Equilibrium strategy combinations", "The number of players joining"],
          answer: 2,
          explain: "Static analysis solves for equilibria such as Nash equilibria, which are stable configurations, rather than tracking the trajectory a population follows."
        },
        {
          type: "truefalse",
          q: "Replicator dynamics describes how the frequencies of strategies change over time rather than only identifying end states.",
          answer: true,
          explain: "Replicator dynamics is a dynamical (motion-over-time) model; it specifies the direction and speed of change, not just where the population might rest."
        },
        {
          type: "fill",
          q: "A ____ systems approach tracks how a population evolves moment to moment, not just where it settles.",
          answer: "dynamical",
          accept: ["dynamical", "dynamic", "dynamical systems"],
          explain: "Replicator dynamics is a dynamical systems model: an equation of motion for strategy frequencies over continuous time."
        },
        {
          type: "mcq",
          q: "Which phrase best captures the shift from statics to dynamics?",
          choices: ["From payoffs to players", "From 'which states are equilibria?' to 'how do strategy frequencies flow toward them?'", "From cooperation to defection", "From two players to many"],
          answer: 1,
          explain: "Dynamics reframes the question from labeling equilibrium states to describing the flow that carries a population between states."
        },
        {
          type: "match",
          q: "Match each idea to what it does.",
          pairs: [["Static analysis", "Solves for equilibrium configurations"], ["Dynamic analysis", "Models the trajectory of change over time"], ["Fixed point", "A state where change stops"]],
          explain: "Statics finds resting configurations; dynamics describes the motion between them; a fixed point is where that motion halts."
        },
        {
          type: "order",
          q: "Order the conceptual steps of a dynamic model of a population.",
          items: ["Define strategies and payoffs", "Write an equation of motion for the frequencies", "Track how those frequencies change over time", "Identify which states are rest points"],
          explain: "You first set up the game, then formulate the dynamics, run it forward in time, and finally locate the states where change stops."
        },
        {
          type: "truefalse",
          q: "Knowing a game's Nash equilibria automatically tells you whether a population will actually reach them.",
          answer: false,
          explain: "Equilibrium existence says nothing about the dynamics; a population may cycle, diverge, or converge only from certain starting points, so dynamics must be studied separately."
        }
      ]
    },
    {
      id: "l58",
      title: "The replicator equation conceptually",
      intro: "Understand the central idea: strategies that beat the average grow, and those below it shrink.",
      questions: [
        {
          type: "mcq",
          q: "In the replicator equation, a strategy's frequency grows when...",
          choices: ["it is chosen by the first player", "its payoff is negative", "it has the fewest users", "its payoff exceeds the population's average payoff"],
          answer: 3,
          explain: "Replicator dynamics rewards above-average performance: a strategy whose fitness beats the population mean gains share."
        },
        {
          type: "truefalse",
          q: "Under replicator dynamics, a strategy earning exactly the average payoff neither grows nor shrinks in frequency.",
          answer: true,
          explain: "Growth is proportional to the gap between a strategy's fitness and the mean; when that gap is zero, the frequency holds steady."
        },
        {
          type: "fill",
          q: "The per-capita growth rate of a strategy equals its fitness minus the population ____ fitness.",
          answer: "mean",
          accept: ["mean", "average"],
          explain: "The replicator equation makes each strategy's proportional growth rate equal to (its fitness minus the mean fitness of the population)."
        },
        {
          type: "order",
          q: "Order this cause-and-effect chain under replicator dynamics.",
          items: ["A strategy's payoff beats the population average", "Its per-capita growth rate becomes positive", "Its frequency rises in the population", "Its growing success pulls the average upward"],
          explain: "Beating the mean gives positive growth, which raises the strategy's share, which in turn drags the population mean up toward it."
        },
        {
          type: "mcq",
          q: "Which phrase best restates the replicator logic of 'survival of the fitter, on average'?",
          choices: ["All strategies grow equally", "Only the single best strategy ever survives immediately", "Above-average performers gain share; below-average performers lose share", "Frequencies change at random"],
          answer: 2,
          explain: "Replicator dynamics redistributes population share from below-average strategies to above-average ones, relative to the current mean."
        },
        {
          type: "match",
          q: "Match a strategy's relative fitness to what happens to its frequency.",
          pairs: [["Above-average fitness", "Frequency increases"], ["Below-average fitness", "Frequency decreases"], ["Exactly average fitness", "Frequency unchanged"]],
          explain: "The sign of (fitness minus mean fitness) sets the direction of change: positive grows, negative shrinks, zero holds."
        },
        {
          type: "truefalse",
          q: "Replicator dynamics requires any strategy with a negative absolute payoff to always die out.",
          answer: false,
          explain: "Only payoff relative to the mean matters, not its sign; a strategy with a negative payoff can still grow if the population average is even lower."
        }
      ]
    },
    {
      id: "l59",
      title: "Fitness relative to the mean",
      intro: "See precisely how the replicator equation measures winners against the population's average payoff.",
      questions: [
        {
          type: "mcq",
          q: "In the replicator equation x_i' = x_i(f_i - phi), what does phi represent?",
          choices: ["the fitness of strategy i alone", "the average (mean) fitness of the whole population", "the total number of strategies", "a fixed constant"],
          answer: 1,
          explain: "phi is the population's mean fitness, the benchmark each strategy's own fitness f_i is compared against."
        },
        {
          type: "fill",
          q: "The mean fitness phi is the frequency-____ average of all the strategies' payoffs.",
          answer: "weighted",
          accept: ["weighted"],
          explain: "phi equals the sum over strategies of x_i times f_i, so more common strategies count more toward the mean."
        },
        {
          type: "truefalse",
          q: "A strategy counts as a 'winner' under replicator dynamics precisely when its fitness f_i exceeds the mean fitness phi.",
          answer: true,
          explain: "When f_i is greater than phi the term (f_i - phi) is positive, so the strategy's frequency grows: it is winning relative to the average."
        },
        {
          type: "mcq",
          q: "If f_i = phi for a strategy at some moment, then at that instant its frequency...",
          choices: ["doubles", "drops to zero immediately", "becomes negative", "stays constant, since x_i' = 0"],
          answer: 3,
          explain: "With f_i equal to phi the factor (f_i - phi) is zero, so x_i' = 0 and the frequency does not change at that moment."
        },
        {
          type: "order",
          q: "Order the steps to compute one replicator update for strategy i.",
          items: ["Compute each strategy's fitness f_i", "Compute the mean fitness phi as the frequency-weighted average", "Subtract phi from f_i", "Multiply by the current frequency x_i to get the change x_i'"],
          explain: "The equation x_i' = x_i(f_i - phi) is applied in exactly this order: fitnesses, then the mean, then the difference, then scaling by current frequency."
        },
        {
          type: "match",
          q: "Match each symbol in x_i' = x_i(f_i - phi) to its meaning.",
          pairs: [["x_i", "Frequency of strategy i"], ["f_i", "Fitness (expected payoff) of strategy i"], ["phi", "Population mean fitness"], ["x_i'", "Rate of change of strategy i's frequency"]],
          explain: "The equation combines a strategy's frequency, its own fitness, and the population mean to give the rate at which its frequency changes."
        },
        {
          type: "truefalse",
          q: "Because payoffs are measured against a moving population average, the same absolute payoff can mean 'winning' in one population state and 'losing' in another.",
          answer: true,
          explain: "phi shifts as frequencies change, so a fixed f_i can sit above or below the mean depending on the current composition of the population."
        }
      ]
    },
    {
      id: "l60",
      title: "Taylor and Jonker 1978",
      intro: "Meet the paper that gave evolutionarily stable strategies an explicit dynamic foundation.",
      questions: [
        {
          type: "mcq",
          q: "Who introduced the replicator dynamics equation in 1978?",
          choices: ["John Maynard Smith and George Price", "John Nash and Lloyd Shapley", "Peter Taylor and Leo Jonker", "Robert Axelrod and William Hamilton"],
          answer: 2,
          explain: "Peter Taylor and Leo Jonker formulated the replicator dynamics in their 1978 paper linking game dynamics to evolutionary stability."
        },
        {
          type: "truefalse",
          q: "Taylor and Jonker's 1978 work gave the previously static ESS concept an explicit dynamic foundation.",
          answer: true,
          explain: "They supplied a differential equation for population change, connecting the static non-invadability idea of an ESS to a concrete dynamic process."
        },
        {
          type: "fill",
          q: "Taylor and Jonker's 1978 paper appeared in the journal Mathematical ____.",
          answer: "biosciences",
          accept: ["biosciences", "bioscience"],
          explain: "The article 'Evolutionary stable strategies and game dynamics' was published in Mathematical Biosciences in 1978."
        },
        {
          type: "mcq",
          q: "The ESS concept that Taylor and Jonker connected to dynamics had been introduced in 1973 by...",
          choices: ["von Neumann and Morgenstern", "Maynard Smith and Price", "Taylor and Jonker themselves", "Hamilton alone"],
          answer: 1,
          explain: "John Maynard Smith and George Price introduced the evolutionarily stable strategy (ESS) in a 1973 Nature paper, five years before Taylor and Jonker's dynamics."
        },
        {
          type: "order",
          q: "Put these developments in historical order.",
          items: ["1973: Maynard Smith and Price define the ESS", "1978: Taylor and Jonker formulate replicator dynamics", "The static ESS gains an explicit dynamic underpinning", "Static stability and dynamic stability become linked"],
          explain: "The ESS came first as a static idea in 1973; Taylor and Jonker's 1978 dynamics then grounded it, tying static and dynamic notions of stability together."
        },
        {
          type: "match",
          q: "Match each contribution to what it delivered.",
          pairs: [["Taylor and Jonker (1978)", "The replicator dynamics equation"], ["Maynard Smith and Price (1973)", "The ESS concept"], ["Replicator dynamics", "A dynamic foundation for the ESS"]],
          explain: "The 1973 work defined the ESS; the 1978 work built the dynamics that give that static criterion a moving-population basis."
        },
        {
          type: "truefalse",
          q: "Before 1978 the ESS was defined purely as a static, non-invadability condition without a specified dynamic process.",
          answer: true,
          explain: "The original ESS was a static criterion about resistance to invasion; Taylor and Jonker later supplied the differential equation showing how populations actually move."
        }
      ]
    },
    {
      id: "l61",
      title: "Fixed points of the dynamics",
      intro: "Find the rest states of the replicator equation, where every strategy's frequency stops changing.",
      questions: [
        {
          type: "mcq",
          q: "A fixed point (rest point) of the replicator dynamics is a state where...",
          choices: ["one strategy has payoff zero", "every strategy's frequency stops changing, so all x_i' = 0", "the game has no Nash equilibrium", "all payoffs equal one"],
          answer: 1,
          explain: "At a fixed point the rate of change of every frequency is zero, so the population composition is momentarily frozen."
        },
        {
          type: "truefalse",
          q: "At an interior fixed point, where all strategies are present, every strategy must earn the same fitness, equal to the mean.",
          answer: true,
          explain: "For x_i(f_i - phi) to be zero while every x_i is positive, each f_i must equal phi, so all present strategies earn the mean fitness."
        },
        {
          type: "fill",
          q: "Since x_i' = x_i(f_i - phi), the change is zero whenever x_i = 0 or when f_i equals ____.",
          answer: "phi",
          accept: ["phi", "the mean", "mean", "mean fitness"],
          explain: "Each term x_i(f_i - phi) vanishes if the strategy is absent (x_i = 0) or if its fitness matches the population mean (f_i = phi)."
        },
        {
          type: "mcq",
          q: "Which states are ALWAYS fixed points of the replicator dynamics, for any game?",
          choices: ["only the exact center of the simplex", "states with negative frequencies", "the vertices of the simplex, where a single strategy is at 100%", "no states at all"],
          answer: 2,
          explain: "At a vertex one strategy has frequency 1 and all others 0, so every term x_i(f_i - phi) is zero; monomorphic (single-strategy) states are always rest points."
        },
        {
          type: "order",
          q: "Order the procedure for finding the fixed points.",
          items: ["Set x_i(f_i - phi) = 0 for every strategy", "Note this holds when x_i = 0 or f_i = phi", "Collect the resulting rest states", "Check each rest state for stability separately"],
          explain: "You solve the zero-change conditions, enumerate the states that satisfy them, then analyze the stability of each one on its own."
        },
        {
          type: "match",
          q: "Match each condition to why it makes a term vanish.",
          pairs: [["x_i = 0", "Strategy is absent, so its term is zero"], ["f_i = phi", "Present strategy earns the mean, so no change"], ["All x_i' = 0", "Definition of a fixed point"]],
          explain: "A frequency stops changing either because the strategy is missing or because it earns exactly the mean; when this holds for all strategies, the state is a fixed point."
        },
        {
          type: "truefalse",
          q: "Being a fixed point guarantees that nearby trajectories converge to it.",
          answer: false,
          explain: "A fixed point can be stable, unstable, or a saddle; stability is a separate property that must be checked, since unstable rest points (like some vertices) exist."
        }
      ]
    },
    {
      id: "l62",
      title: "ESS as dynamic attractor",
      intro: "Connect evolutionary stability to dynamics: an ESS behaves as an attracting equilibrium.",
      questions: [
        {
          type: "mcq",
          q: "In a single-population replicator model, every ESS is...",
          choices: ["an unstable fixed point", "never a fixed point", "a point that repels all trajectories", "an asymptotically stable fixed point"],
          answer: 3,
          explain: "Taylor and Jonker showed that in one-population replicator dynamics every ESS is an asymptotically stable rest point, drawing nearby states back to it."
        },
        {
          type: "truefalse",
          q: "'Asymptotically stable' means that after a small perturbation the population returns to that state.",
          answer: true,
          explain: "Asymptotic stability requires that trajectories starting near the point stay near it and converge back to it over time."
        },
        {
          type: "fill",
          q: "An ESS acts as a dynamic ____, drawing nearby population states back toward it.",
          answer: "attractor",
          accept: ["attractor", "sink"],
          explain: "Because it is asymptotically stable, an ESS attracts trajectories from its neighborhood, functioning as an attractor of the dynamics."
        },
        {
          type: "mcq",
          q: "Is the converse true, that every asymptotically stable fixed point must be an ESS?",
          choices: ["Yes, always, in every model", "No; asymptotic stability is more general and does not always imply the ESS conditions", "Only when there is exactly one strategy", "Only in zero-sum games"],
          answer: 1,
          explain: "In one-population dynamics an ESS implies asymptotic stability, but the reverse implication can fail, so the two notions are not identical."
        },
        {
          type: "order",
          q: "Order the logic linking the ESS to dynamic stability.",
          items: ["A strategy satisfies the ESS non-invadability conditions", "Rare mutants earn less than the resident", "Replicator dynamics drives mutant frequency down", "The ESS state proves asymptotically stable"],
          explain: "The ESS condition makes mutants below-average, the dynamics then shrink them, and the population returns to the resident state, which is asymptotic stability."
        },
        {
          type: "match",
          q: "Match each term to its character.",
          pairs: [["ESS", "Static non-invadability criterion"], ["Asymptotically stable fixed point", "Dynamic return after perturbation"], ["Taylor and Jonker result", "Every ESS is asymptotically stable"]],
          explain: "The ESS is a static test; asymptotic stability is a dynamic property; the 1978 result bridges them for single-population dynamics."
        },
        {
          type: "truefalse",
          q: "If a population sits at an ESS and a small fraction of mutants appears, replicator dynamics tends to eliminate the mutants.",
          answer: true,
          explain: "By definition mutants at an ESS earn below-average payoff, so their frequency shrinks and the population is pulled back to the ESS."
        }
      ]
    },
    {
      id: "l63",
      title: "Folk theorem of evolutionary dynamics",
      intro: "Learn the standard links between Nash equilibria, fixed points, and stability under replicator dynamics.",
      questions: [
        {
          type: "mcq",
          q: "According to the folk theorem of evolutionary dynamics, every Nash equilibrium is...",
          choices: ["an unstable point only", "never a rest point", "a fixed point (rest point) of the replicator dynamics", "a point with zero payoff"],
          answer: 2,
          explain: "The folk theorem states that every Nash equilibrium is a rest point of the replicator dynamics, though not every rest point is Nash."
        },
        {
          type: "truefalse",
          q: "The folk theorem states that a strict Nash equilibrium is asymptotically stable under the replicator dynamics.",
          answer: true,
          explain: "One of the folk theorem's core claims is that strict Nash equilibria are asymptotically stable rest points of the dynamics."
        },
        {
          type: "fill",
          q: "The folk theorem also says that a stable rest point of the replicator dynamics is a ____ equilibrium.",
          answer: "nash",
          accept: ["nash", "a nash"],
          explain: "Stable rest points cannot be invaded by any absent strategy, which is exactly the Nash equilibrium condition."
        },
        {
          type: "mcq",
          q: "Which statement is NOT one of the folk theorem's standard claims?",
          choices: ["Every Nash equilibrium is a rest point", "Every strict Nash equilibrium is asymptotically stable", "Every fixed point of the dynamics is a strict Nash equilibrium", "The limit of an interior trajectory is a Nash equilibrium"],
          answer: 2,
          explain: "Fixed points need not be Nash; unstable vertices where an absent strategy could invade are rest points but not Nash equilibria, so this claim is false."
        },
        {
          type: "match",
          q: "Match each folk-theorem premise to its guaranteed conclusion.",
          pairs: [["Nash equilibrium", "Is a rest point of the dynamics"], ["Strict Nash equilibrium", "Is asymptotically stable"], ["Stable rest point", "Is a Nash equilibrium"], ["Limit of an interior orbit", "Is a Nash equilibrium"]],
          explain: "The folk theorem is a set of one-way links tying Nash equilibria, rest points, and stability together under the replicator dynamics."
        },
        {
          type: "truefalse",
          q: "Under the folk theorem, being a rest point of the replicator dynamics is enough to guarantee a state is a Nash equilibrium.",
          answer: false,
          explain: "Only stable rest points and interior-trajectory limits are guaranteed Nash; some rest points, such as unstable vertices, are not Nash equilibria."
        },
        {
          type: "fill",
          q: "The folk theorem links three ideas: Nash equilibria, dynamic ____ points, and asymptotic stability.",
          answer: "fixed",
          accept: ["fixed", "rest"],
          explain: "The theorem relates Nash equilibria to the fixed (rest) points of the dynamics and to the stability of those points."
        }
      ]
    },
    {
      id: "l64",
      title: "Replicator on the simplex",
      intro: "Visualize replicator dynamics geometrically as flow across the probability simplex of strategy frequencies.",
      questions: [
        {
          type: "mcq",
          q: "The state space of replicator dynamics with n strategies is...",
          choices: ["the full n-dimensional cube", "the (n-1)-dimensional simplex, where frequencies are non-negative and sum to 1", "always a single line", "the set of all integers"],
          answer: 1,
          explain: "Frequencies are non-negative and sum to one, so the state space is the (n-1)-dimensional probability simplex."
        },
        {
          type: "truefalse",
          q: "For three strategies, the simplex is a triangle (a 2-simplex) whose vertices are the pure strategies.",
          answer: true,
          explain: "With three strategies the state space is a triangular 2-simplex, and each vertex corresponds to one strategy at frequency 1."
        },
        {
          type: "fill",
          q: "Every point of the simplex represents strategy frequencies that are non-negative and sum to ____.",
          answer: "one",
          accept: ["one", "1", "1.0", "unity"],
          explain: "The simplex is defined by frequencies that are all non-negative and add up to one, since they are proportions of the population."
        },
        {
          type: "mcq",
          q: "On the simplex, the edges and vertices (faces) are ____ under replicator dynamics.",
          choices: ["invariant, so a strategy that is absent stays absent", "always unstable spirals", "where payoffs become undefined", "points of infinite frequency"],
          answer: 0,
          explain: "Since x_i' = x_i(f_i - phi), a frequency of zero stays zero, so faces of the simplex are invariant: orbits on an edge remain on that edge."
        },
        {
          type: "order",
          q: "Order the steps to sketch a three-strategy phase portrait.",
          items: ["Draw the triangular 2-simplex", "Place the three pure strategies at the vertices", "Mark the interior and boundary fixed points", "Sketch trajectory arrows showing the flow"],
          explain: "You set up the triangle, label the pure-strategy corners, locate the rest points, then draw the flow of trajectories between them."
        },
        {
          type: "match",
          q: "Match each geometric feature of the 2-simplex to what it represents.",
          pairs: [["2-simplex", "Triangle for three strategies"], ["Vertex", "A single pure strategy at 100%"], ["Interior point", "A mixture of all three strategies"], ["Edge", "Only two strategies present"]],
          explain: "Vertices are pure strategies, edges are two-strategy mixtures, and interior points use all three, all inside the triangular state space."
        },
        {
          type: "truefalse",
          q: "The replicator dynamics of standard Rock-Paper-Scissors typically produces closed cyclic orbits around the interior fixed point rather than converging to it.",
          answer: true,
          explain: "The classic zero-sum Rock-Paper-Scissors game yields neutrally stable closed orbits circling the center of the simplex, a hallmark non-convergent phase portrait."
        }
      ]
    }
  ]
});
