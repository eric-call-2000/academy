window.ACADEMY.addUnit("egt", {
  id: "unit-9",
  title: "Dynamics, Stability, and Attractors",
  color: "#3b74e0",
  icon: "🌀",
  description: "This unit explores how evolving populations move through strategy space over time, covering basins of attraction, bistability, saddle points, cycles, neutral stability, Lyapunov intuition, and the difference between discrete and continuous dynamics.",
  lessons: [
    {
      id: "l65",
      title: "Basins of attraction",
      intro: "A basin of attraction is the set of starting states that all end up flowing to the same equilibrium.",
      questions: [
        {
          type: "mcq",
          q: "What is a basin of attraction?",
          choices: [
            "The set of initial conditions that all converge to a particular attractor",
            "A single equilibrium point of the dynamics",
            "The speed at which a population reaches equilibrium",
            "A strategy that can never be invaded"
          ],
          answer: 0,
          explain: "A basin of attraction is the collection of all starting states whose trajectories end up at the same attractor, so initial conditions decide the eventual outcome."
        },
        {
          type: "truefalse",
          q: "In a system with multiple attractors, the starting point can determine which equilibrium the population reaches.",
          answer: true,
          explain: "When several attractors exist, the phase space splits into basins; which basin the initial state falls into fixes the final outcome."
        },
        {
          type: "fill",
          q: "The boundary that separates one basin of attraction from another is called a ____.",
          answer: "separatrix",
          accept: ["separatrix", "basin boundary", "threshold"],
          explain: "A separatrix is the dividing surface between basins; crossing it sends a trajectory toward a different attractor."
        },
        {
          type: "mcq",
          q: "If a population starts just on one side of a separatrix versus just on the other, what typically happens?",
          choices: [
            "It always reaches the same equilibrium regardless of side",
            "It converges to different attractors depending on which side it started",
            "It stays fixed at the separatrix forever",
            "It oscillates between the two attractors"
          ],
          answer: 1,
          explain: "The whole point of a separatrix is that nearby starts on opposite sides fall into different basins and reach different attractors."
        },
        {
          type: "match",
          q: "Match each term to its meaning:",
          pairs: [
            ["Attractor", "A state trajectories are drawn toward"],
            ["Basin", "Set of initial conditions leading to one attractor"],
            ["Separatrix", "Dividing line between basins"]
          ],
          explain: "The attractor is the destination, the basin is everything that flows to it, and the separatrix is the border between competing basins."
        },
        {
          type: "truefalse",
          q: "Every dynamical system has exactly one basin of attraction covering the whole state space.",
          answer: false,
          explain: "Systems with more than one attractor have multiple basins; a single global basin only occurs when one attractor captures all initial conditions."
        },
        {
          type: "order",
          q: "Order these steps in tracing where a population ends up, from first to last:",
          items: [
            "Identify the initial condition",
            "Determine which basin it lies in",
            "Follow the trajectory to the attractor"
          ],
          explain: "You start from the initial state, find its basin, and then the dynamics carry it to that basin's attractor."
        }
      ]
    },
    {
      id: "l66",
      title: "Bistability defined",
      intro: "Bistability means a system has two stable equilibria separated by an unstable threshold.",
      questions: [
        {
          type: "mcq",
          q: "A bistable system has:",
          choices: [
            "One stable equilibrium and nothing else",
            "Two stable equilibria separated by an unstable threshold",
            "Infinitely many stable equilibria",
            "No equilibria at all"
          ],
          answer: 1,
          explain: "Bistability specifically means two stable rest states with an unstable equilibrium (a threshold) dividing their basins."
        },
        {
          type: "truefalse",
          q: "In a bistable coordination game, both pure strategies can be stable outcomes depending on the starting mix.",
          answer: true,
          explain: "Coordination games like Stag Hunt are classic bistable systems: each pure equilibrium is stable and has its own basin."
        },
        {
          type: "fill",
          q: "The unstable equilibrium that separates the two basins in a bistable system acts as a ____ that decides the outcome.",
          answer: "threshold",
          accept: ["threshold", "tipping point", "separatrix"],
          explain: "The interior unstable point is a threshold; starting above it flows to one equilibrium, below it to the other."
        },
        {
          type: "mcq",
          q: "In the Stag Hunt game, why is it considered bistable?",
          choices: [
            "Because only hunting hare is ever stable",
            "Because both all-hunt-stag and all-hunt-hare are stable equilibria",
            "Because there are no stable strategies",
            "Because the population always cycles"
          ],
          answer: 1,
          explain: "Stag Hunt has two evolutionarily stable pure states (all stag, all hare), each with its own basin, which is the signature of bistability."
        },
        {
          type: "order",
          q: "Order the equilibria of a typical bistable one-dimensional system by position, from one stable end to the other:",
          items: [
            "Stable equilibrium A",
            "Unstable threshold",
            "Stable equilibrium B"
          ],
          explain: "A bistable line has a stable point at each end with the unstable threshold sitting between them."
        },
        {
          type: "match",
          q: "Match each equilibrium type in a bistable system to its role:",
          pairs: [
            ["Stable point", "An attractor the population settles into"],
            ["Unstable threshold", "The divider between the two basins"],
            ["Basin", "Region flowing to one stable point"]
          ],
          explain: "Two stable attractors are separated by an unstable threshold, and each attractor owns a basin of starting states."
        },
        {
          type: "truefalse",
          q: "In a bistable system, a small perturbation is always enough to switch the population from one stable state to the other.",
          answer: false,
          explain: "Small perturbations decay back to the same stable state; only a disturbance large enough to cross the threshold flips the outcome."
        }
      ]
    },
    {
      id: "l67",
      title: "Interior versus boundary equilibria",
      intro: "Equilibria can sit in the interior as mixtures of strategies or on the boundary where one strategy fixes.",
      questions: [
        {
          type: "mcq",
          q: "An interior equilibrium of a population's strategy dynamics represents:",
          choices: [
            "A state where only one strategy survives",
            "A stable mixture where multiple strategies coexist at nonzero frequencies",
            "A state with no individuals at all",
            "A point outside the simplex"
          ],
          answer: 1,
          explain: "Interior equilibria lie inside the strategy simplex, meaning every strategy is present at a positive frequency (a mixture)."
        },
        {
          type: "truefalse",
          q: "A boundary equilibrium corresponds to the fixation of one strategy, where at least one strategy has frequency zero.",
          answer: true,
          explain: "Boundary equilibria sit on the edges or corners of the simplex where one or more strategies are absent, including pure fixations at the corners."
        },
        {
          type: "fill",
          q: "A corner of the strategy simplex where a single strategy makes up the entire population is called a ____ equilibrium.",
          answer: "boundary",
          accept: ["boundary", "pure", "vertex", "fixation"],
          explain: "Corners are boundary (pure) equilibria representing fixation, since all but one strategy have frequency zero."
        },
        {
          type: "mcq",
          q: "In the Hawk-Dove game, the polymorphic mix of hawks and doves is an example of what?",
          choices: [
            "A boundary equilibrium",
            "An interior equilibrium",
            "A saddle point on the corner",
            "A point with no biological meaning"
          ],
          answer: 1,
          explain: "Hawk-Dove settles at a stable interior mixture of both strategies, which is an interior equilibrium inside the simplex."
        },
        {
          type: "match",
          q: "Match each equilibrium location to what it means biologically:",
          pairs: [
            ["Interior point", "Coexistence of multiple strategies"],
            ["Corner (vertex)", "Fixation of a single strategy"],
            ["Edge", "One strategy absent, others mixed"]
          ],
          explain: "Interior means coexistence, corners mean pure fixation, and edges mean at least one strategy has dropped to zero while others mix."
        },
        {
          type: "order",
          q: "Order these locations by how many strategies are present, from fewest to most (in a three-strategy simplex):",
          items: [
            "Vertex (one strategy)",
            "Edge (two strategies)",
            "Interior (three strategies)"
          ],
          explain: "A vertex has one strategy, an edge has two, and the interior has all three present at nonzero frequency."
        },
        {
          type: "truefalse",
          q: "An interior equilibrium requires at least one strategy to have frequency zero.",
          answer: false,
          explain: "Interior equilibria have every strategy at a strictly positive frequency; a zero frequency would place the point on the boundary instead."
        }
      ]
    },
    {
      id: "l68",
      title: "Saddle points and instability",
      intro: "A saddle point is an equilibrium that attracts along some directions but repels along others.",
      questions: [
        {
          type: "mcq",
          q: "A saddle point is an equilibrium that is:",
          choices: [
            "Stable in every direction",
            "Unstable in every direction",
            "Stable along some directions but unstable along others",
            "Never actually an equilibrium"
          ],
          answer: 2,
          explain: "A saddle attracts trajectories along its stable directions and repels them along its unstable directions, making it stable only in part."
        },
        {
          type: "truefalse",
          q: "Because it repels in at least one direction, a saddle point is overall an unstable equilibrium.",
          answer: true,
          explain: "Any equilibrium with even one repelling direction is unstable overall, since almost all nearby trajectories eventually move away."
        },
        {
          type: "fill",
          q: "The directions along which trajectories approach a saddle point are called the ____ directions.",
          answer: "stable",
          accept: ["stable", "attracting", "converging"],
          explain: "Trajectories approach along the stable (attracting) directions and depart along the unstable ones; a saddle has both."
        },
        {
          type: "mcq",
          q: "For a two-dimensional linear system, a saddle point occurs when the eigenvalues of the Jacobian are:",
          choices: [
            "Both negative real numbers",
            "Both positive real numbers",
            "Real with opposite signs (one positive, one negative)",
            "A complex conjugate pair with zero real part"
          ],
          answer: 2,
          explain: "Real eigenvalues of opposite sign give one attracting and one repelling direction, the defining signature of a saddle."
        },
        {
          type: "match",
          q: "Match each equilibrium type to its stability character:",
          pairs: [
            ["Stable node", "Attracts in all directions"],
            ["Unstable node", "Repels in all directions"],
            ["Saddle", "Attracts some directions, repels others"]
          ],
          explain: "Nodes are uniform (all attract or all repel), while a saddle mixes attracting and repelling directions."
        },
        {
          type: "truefalse",
          q: "A population resting exactly on a saddle point will remain there even after a tiny random disturbance.",
          answer: false,
          explain: "A disturbance with any component along an unstable direction grows, so the population drifts away from the saddle rather than staying."
        },
        {
          type: "order",
          q: "Order what happens to a trajectory placed near (but not on) a saddle point, from first to last:",
          items: [
            "Approaches the saddle along a stable direction",
            "Slows near the saddle point",
            "Departs along an unstable direction"
          ],
          explain: "Trajectories near a saddle first close in along stable directions, linger, then peel away along the unstable direction."
        }
      ]
    },
    {
      id: "l69",
      title: "Cyclic and closed orbits",
      intro: "Some populations never settle down but instead circulate perpetually along closed orbits in strategy space.",
      questions: [
        {
          type: "mcq",
          q: "A closed orbit in a population's dynamics represents:",
          choices: [
            "A trajectory that converges to a fixed point",
            "A trajectory that returns to its starting state and repeats forever",
            "A trajectory that escapes to infinity",
            "A single equilibrium point"
          ],
          answer: 1,
          explain: "A closed orbit is a periodic trajectory: it loops back to where it began and repeats, so the population cycles indefinitely."
        },
        {
          type: "truefalse",
          q: "The Rock-Paper-Scissors game under replicator dynamics can produce cyclic behavior where strategy frequencies chase each other.",
          answer: true,
          explain: "In Rock-Paper-Scissors each strategy beats the next, driving perpetual cycling of frequencies rather than settling to a fixed mix."
        },
        {
          type: "fill",
          q: "An isolated closed orbit that nearby trajectories spiral toward or away from is called a ____ cycle.",
          answer: "limit",
          accept: ["limit", "limit cycle"],
          explain: "A limit cycle is an isolated periodic orbit; unlike a center's family of orbits, neighboring trajectories approach or leave it."
        },
        {
          type: "mcq",
          q: "In the classic Lotka-Volterra predator-prey model, the populations trace out:",
          choices: [
            "A stable fixed point",
            "A family of closed orbits around the coexistence equilibrium",
            "A saddle point escape",
            "A monotone approach to extinction"
          ],
          answer: 1,
          explain: "The Lotka-Volterra model produces a nested family of closed orbits circling the interior equilibrium, so predator and prey numbers cycle."
        },
        {
          type: "match",
          q: "Match each orbit type to its description:",
          pairs: [
            ["Closed orbit", "Periodic loop that repeats"],
            ["Limit cycle", "Isolated attracting or repelling loop"],
            ["Fixed point", "State that does not change"]
          ],
          explain: "Closed orbits repeat periodically, limit cycles are isolated loops that pull or push neighbors, and fixed points are stationary."
        },
        {
          type: "order",
          q: "Order the phases of a Rock-Paper-Scissors cycle as one strategy rises, from first to last:",
          items: [
            "Rock becomes common",
            "Paper rises to beat Rock",
            "Scissors rises to beat Paper"
          ],
          explain: "Each strategy's success invites its counter: abundant Rock favors Paper, then abundant Paper favors Scissors, continuing the cycle."
        },
        {
          type: "truefalse",
          q: "On a closed orbit the population eventually settles at a single fixed strategy frequency.",
          answer: false,
          explain: "By definition a closed orbit keeps looping and never settles; frequencies keep changing periodically rather than converging."
        }
      ]
    },
    {
      id: "l70",
      title: "Neutral stability",
      intro: "Neutrally stable orbits neither spiral inward nor outward, so perturbations neither grow nor decay.",
      questions: [
        {
          type: "mcq",
          q: "A neutrally stable equilibrium is one where nearby trajectories:",
          choices: [
            "Converge back to the equilibrium",
            "Diverge away from the equilibrium",
            "Neither converge nor diverge, staying on nearby orbits",
            "Immediately jump to a distant attractor"
          ],
          answer: 2,
          explain: "Neutral stability means perturbations neither shrink nor grow; the system stays on a nearby orbit without returning or escaping."
        },
        {
          type: "truefalse",
          q: "A center, surrounded by a family of concentric closed orbits, is a classic example of neutral stability.",
          answer: true,
          explain: "At a center, trajectories orbit at a fixed distance forever, so it is neutrally (but not asymptotically) stable."
        },
        {
          type: "fill",
          q: "An equilibrium surrounded by a nested family of closed orbits is called a ____.",
          answer: "center",
          accept: ["center", "centre"],
          explain: "A center has purely imaginary eigenvalues and is ringed by closed orbits, giving neutral stability with no net attraction."
        },
        {
          type: "mcq",
          q: "For a linear two-dimensional system, neutral stability (a center) arises when the eigenvalues are:",
          choices: [
            "Purely imaginary (zero real part)",
            "Both negative real",
            "Both positive real",
            "Real with opposite signs"
          ],
          answer: 0,
          explain: "Purely imaginary eigenvalues produce undamped oscillation around a center, the hallmark of neutral stability."
        },
        {
          type: "match",
          q: "Match each stability type to how perturbations behave:",
          pairs: [
            ["Asymptotically stable", "Perturbations decay to zero"],
            ["Unstable", "Perturbations grow"],
            ["Neutrally stable", "Perturbations neither grow nor decay"]
          ],
          explain: "Asymptotic stability returns to equilibrium, instability moves away, and neutral stability keeps the disturbance at constant size."
        },
        {
          type: "truefalse",
          q: "A neutrally stable equilibrium is also asymptotically stable.",
          answer: false,
          explain: "Asymptotic stability requires trajectories to return to the equilibrium; neutral stability keeps them nearby but never brings them back."
        },
        {
          type: "order",
          q: "Order these stability behaviors by how strongly they pull toward equilibrium, from strongest pull to none:",
          items: [
            "Asymptotically stable (returns)",
            "Neutrally stable (stays near)",
            "Unstable (moves away)"
          ],
          explain: "Asymptotic stability actively returns, neutral stability merely stays nearby, and instability pushes trajectories away."
        }
      ]
    },
    {
      id: "l71",
      title: "Lyapunov stability intuition",
      intro: "Lyapunov stability distinguishes merely staying near an equilibrium from actually returning to it.",
      questions: [
        {
          type: "mcq",
          q: "Lyapunov stability of an equilibrium means:",
          choices: [
            "Trajectories that start close enough always eventually return exactly to the equilibrium",
            "Trajectories that start close enough stay close for all future time",
            "Trajectories always diverge to infinity",
            "The equilibrium does not exist"
          ],
          answer: 1,
          explain: "Lyapunov (stable in the sense of Lyapunov) means nearby starts stay nearby forever; it does not require returning to the equilibrium."
        },
        {
          type: "truefalse",
          q: "Asymptotic stability is stronger than Lyapunov stability because it also requires trajectories to converge back to the equilibrium.",
          answer: true,
          explain: "Asymptotic stability adds the requirement of eventual return; Lyapunov stability alone only guarantees staying close."
        },
        {
          type: "fill",
          q: "An equilibrium that is stable in the sense of Lyapunov but whose nearby trajectories never converge back is only ____ stable, like a center.",
          answer: "neutrally",
          accept: ["neutrally", "neutral", "marginally"],
          explain: "A center is Lyapunov (neutrally) stable: trajectories stay near on closed orbits but never return to the point itself."
        },
        {
          type: "mcq",
          q: "A named tool for proving stability without solving the equations is a Lyapunov function, which near a stable equilibrium should:",
          choices: [
            "Increase along trajectories",
            "Stay constant along every trajectory",
            "Not increase (be non-increasing) along trajectories",
            "Change sign randomly"
          ],
          answer: 2,
          explain: "A Lyapunov function is like an energy that does not increase along trajectories, so the state cannot escape a neighborhood; strict decrease gives asymptotic stability."
        },
        {
          type: "match",
          q: "Match each stability notion to its defining requirement:",
          pairs: [
            ["Lyapunov stable", "Stays close if it starts close"],
            ["Asymptotically stable", "Stays close and returns to equilibrium"],
            ["Unstable", "Leaves any small neighborhood"]
          ],
          explain: "Lyapunov stability is staying near, asymptotic stability adds returning, and instability means escaping the neighborhood."
        },
        {
          type: "truefalse",
          q: "Aleksandr Lyapunov developed the stability theory that bears his name in the late 19th century.",
          answer: true,
          explain: "The Russian mathematician Aleksandr Lyapunov introduced this stability theory in his 1892 doctoral work on the stability of motion."
        },
        {
          type: "order",
          q: "Order these notions from weakest to strongest guarantee about a perturbed trajectory:",
          items: [
            "Unstable (may leave the neighborhood)",
            "Lyapunov stable (stays nearby)",
            "Asymptotically stable (returns to equilibrium)"
          ],
          explain: "Instability offers no guarantee, Lyapunov stability guarantees staying near, and asymptotic stability additionally guarantees return."
        }
      ]
    },
    {
      id: "l72",
      title: "Discrete versus continuous time",
      intro: "Evolutionary dynamics can be modeled in discrete generational steps or as smooth continuous flow.",
      questions: [
        {
          type: "mcq",
          q: "The key difference between discrete-time and continuous-time dynamics is that:",
          choices: [
            "Discrete-time updates in separate steps while continuous-time changes smoothly at every instant",
            "Continuous-time can only describe extinction",
            "Discrete-time has no equilibria",
            "There is no real difference between them"
          ],
          answer: 0,
          explain: "Discrete-time models jump forward one generation at a time, whereas continuous-time models change smoothly through differential equations."
        },
        {
          type: "truefalse",
          q: "Continuous-time evolutionary dynamics are typically written as differential equations, such as the replicator equation.",
          answer: true,
          explain: "The continuous replicator equation is a differential equation giving the smooth rate of change of strategy frequencies over time."
        },
        {
          type: "fill",
          q: "Discrete-time dynamics that advance the population one generation at a time are usually written as a ____ map or difference equation.",
          answer: "recurrence",
          accept: ["recurrence", "difference", "iterated", "iteration"],
          explain: "A recurrence (difference equation) computes the next generation from the current one, stepping forward in discrete jumps."
        },
        {
          type: "mcq",
          q: "Organisms with non-overlapping generations, like an annual insect that breeds once then dies, are most naturally modeled with:",
          choices: [
            "Continuous-time differential equations",
            "Discrete-time (generational) dynamics",
            "A saddle point only",
            "No model at all"
          ],
          answer: 1,
          explain: "Non-overlapping, once-per-season generations map cleanly onto discrete generational updates rather than smooth continuous change."
        },
        {
          type: "match",
          q: "Match each modeling framework to its typical form:",
          pairs: [
            ["Discrete time", "Difference equation / map"],
            ["Continuous time", "Differential equation / flow"],
            ["Generation", "One discrete update step"]
          ],
          explain: "Discrete time uses maps that step generation to generation, continuous time uses differential equations describing smooth flow."
        },
        {
          type: "truefalse",
          q: "Discrete-time maps can display complex behavior such as period-doubling and chaos that the corresponding one-dimensional continuous flow cannot.",
          answer: true,
          explain: "One-dimensional continuous flows are monotone between equilibria, but discrete maps like the logistic map can period-double into chaos."
        },
        {
          type: "order",
          q: "Order these steps of simulating one update of a discrete-time model, from first to last:",
          items: [
            "Start with the current generation's frequencies",
            "Apply the update rule (fitness-weighted reproduction)",
            "Obtain the next generation's frequencies"
          ],
          explain: "Discrete simulation takes the current state, applies the generational update rule, and produces the next generation's state."
        }
      ]
    }
  ]
});
