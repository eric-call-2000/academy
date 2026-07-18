window.ACADEMY.addUnit("egt", {
  id: "unit-11",
  title: "The Iterated Prisoner's Dilemma",
  color: "#3b74e0",
  icon: "🔁",
  description: "Explores how repeated play between the same partners transforms the incentives around cooperation in the Prisoner's Dilemma.",
  lessons: [
    {
      id: "l81",
      title: "Repeating the game",
      intro: "In the iterated Prisoner's Dilemma the same two players meet again and again, so today's choice affects tomorrow's relationship.",
      questions: [
        {
          type: "mcq",
          q: "What makes the Iterated Prisoner's Dilemma different from the one-shot version?",
          choices: [
            "The same players interact repeatedly over many rounds",
            "The payoff matrix changes every round",
            "Players can never defect",
            "There are always more than two players"
          ],
          answer: 0,
          explain: "Iteration means the same partners meet again and again, so each stage is a repeated encounter rather than a single isolated game."
        },
        {
          type: "truefalse",
          q: "In the iterated game, a single round is called a 'stage game'.",
          answer: true,
          explain: "Each individual round of a repeated game is a stage game; the full sequence of stage games forms the repeated game."
        },
        {
          type: "mcq",
          q: "Why can repetition change how a rational player behaves compared to a single game?",
          choices: [
            "Because past behavior can be rewarded or punished in future rounds",
            "Because the numbers in the payoff matrix double each round",
            "Because defection becomes physically impossible",
            "Because players forget what happened last round"
          ],
          answer: 0,
          explain: "When partners meet again, a player's choice today can trigger reward or retaliation later, so future consequences shape present behavior."
        },
        {
          type: "fill",
          q: "The full sequence of repeated stage games between the same partners is called the ____ game.",
          answer: "repeated",
          accept: ["repeated", "iterated"],
          explain: "The overall interaction made of many stage games is the repeated (or iterated) game."
        },
        {
          type: "truefalse",
          q: "In a one-shot Prisoner's Dilemma there is no future round in which a partner can retaliate.",
          answer: true,
          explain: "A one-shot game is played only once, so there is no later round in which defection can be punished."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Stage game", "A single round of the repeated interaction"],
            ["One-shot game", "Played only once with no future"],
            ["Iterated game", "Same partners meeting again and again"]
          ],
          explain: "A stage game is one round, a one-shot game has no future, and the iterated game strings many rounds together with the same partners."
        },
        {
          type: "order",
          q: "Order these from a single encounter to the largest structure.",
          items: ["A move by one player", "A stage game", "The full repeated game"],
          explain: "One player's move builds a stage game, and many stage games with the same partners make up the full repeated game."
        }
      ]
    },
    {
      id: "l82",
      title: "The shadow of the future",
      intro: "The 'shadow of the future' is the idea that anticipated later rounds can discipline how players act right now.",
      questions: [
        {
          type: "mcq",
          q: "What does the phrase 'the shadow of the future' refer to?",
          choices: [
            "The way expected future rounds influence current choices",
            "A hidden third player watching the game",
            "The fear of forgetting past moves",
            "A shrinking payoff matrix over time"
          ],
          answer: 0,
          explain: "The shadow of the future is the influence that anticipated future interactions cast over present decisions."
        },
        {
          type: "truefalse",
          q: "A long shadow of the future generally makes cooperation easier to sustain.",
          answer: true,
          explain: "When the future looms large, the threat of losing future cooperation outweighs the short-term gain from defecting, supporting cooperation."
        },
        {
          type: "mcq",
          q: "The political scientist most associated with popularizing 'the shadow of the future' in his study of cooperation is:",
          choices: [
            "Robert Axelrod",
            "John Nash",
            "Charles Darwin",
            "Adam Smith"
          ],
          answer: 0,
          explain: "Robert Axelrod, in The Evolution of Cooperation (1984), used the shadow of the future to explain when cooperation emerges."
        },
        {
          type: "fill",
          q: "If players expect the game to end very soon, the shadow of the future is ____, making defection more tempting.",
          answer: "short",
          accept: ["short", "small", "weak"],
          explain: "A short shadow means few or no valuable future rounds remain, so the restraint on defecting is weak."
        },
        {
          type: "truefalse",
          q: "The shadow of the future only matters in a strictly one-shot game.",
          answer: false,
          explain: "It matters precisely when there ARE future rounds; a one-shot game has no future to cast a shadow."
        },
        {
          type: "match",
          q: "Match each condition to its effect on cooperation.",
          pairs: [
            ["Long shadow of the future", "Cooperation easier to sustain"],
            ["Short shadow of the future", "Defection more tempting"],
            ["No future rounds", "Nothing disciplines present behavior"]
          ],
          explain: "The more the future matters, the more it disciplines present behavior; with no future, that discipline disappears."
        },
        {
          type: "order",
          q: "Order the logic of how the shadow of the future discourages defection.",
          items: [
            "A player considers defecting now",
            "They foresee lost cooperation in future rounds",
            "They choose to cooperate instead"
          ],
          explain: "Anticipating future losses from retaliation leads the player to forgo the short-term gain of defection."
        }
      ]
    },
    {
      id: "l83",
      title: "Discount factor and continuation",
      intro: "The discount factor captures how much future payoffs are worth today, often tied to the probability the game continues.",
      questions: [
        {
          type: "mcq",
          q: "In repeated games, the discount factor (often written as the Greek letter delta) usually represents:",
          choices: [
            "How much a player values future payoffs, or the chance the game continues",
            "The number of players in the game",
            "The total number of rounds already played",
            "The size of the punishment for defection"
          ],
          answer: 0,
          explain: "The discount factor measures the weight placed on future payoffs and can be read as the probability the interaction continues to another round."
        },
        {
          type: "truefalse",
          q: "A discount factor is typically a value between 0 and 1.",
          answer: true,
          explain: "The discount factor lies between 0 and 1, where higher values mean the future is weighted more heavily."
        },
        {
          type: "fill",
          q: "The discount factor is commonly denoted by the Greek letter ____.",
          answer: "delta",
          accept: ["delta"],
          explain: "Delta is the standard symbol for the discount factor in repeated-game analysis."
        },
        {
          type: "mcq",
          q: "If the discount factor is close to 1, what does that imply?",
          choices: [
            "Future rounds are almost as valuable as the present, so the future matters a lot",
            "The game is certain to end immediately",
            "Players ignore all future payoffs",
            "Cooperation becomes impossible"
          ],
          answer: 0,
          explain: "A delta near 1 means players barely discount the future, so future rounds carry nearly full weight, strengthening the shadow of the future."
        },
        {
          type: "truefalse",
          q: "A discount factor near 0 means players place almost no value on future rounds.",
          answer: true,
          explain: "When delta is near 0 the future is heavily discounted, so behavior is driven mostly by the immediate payoff."
        },
        {
          type: "match",
          q: "Match each discount-factor interpretation.",
          pairs: [
            ["High delta (near 1)", "Future weighted heavily; game likely continues"],
            ["Low delta (near 0)", "Future barely counts; game likely ends soon"],
            ["Continuation probability", "Chance the game reaches another round"]
          ],
          explain: "The discount factor can express both patience and the probability the game continues, and both push in the same direction."
        },
        {
          type: "order",
          q: "Order these discount factors from least to most supportive of cooperation.",
          items: ["delta = 0.1", "delta = 0.5", "delta = 0.9"],
          explain: "Higher discount factors weight the future more, making cooperation easier to sustain, so 0.9 is most supportive."
        }
      ]
    },
    {
      id: "l84",
      title: "Conditional strategies emerge",
      intro: "Repetition lets players use conditional strategies that make each move depend on what partners did before.",
      questions: [
        {
          type: "mcq",
          q: "What is a conditional strategy in a repeated game?",
          choices: [
            "A rule that chooses each move based on the history of past moves",
            "A rule that always defects no matter what",
            "A rule chosen at random each round",
            "A rule that ignores the opponent entirely"
          ],
          answer: 0,
          explain: "A conditional strategy makes the current move contingent on the observed history of the opponent's (and one's own) past behavior."
        },
        {
          type: "mcq",
          q: "Which of these is the classic conditional strategy that cooperates first, then copies the opponent's last move?",
          choices: [
            "Tit for Tat",
            "Always Defect",
            "Random",
            "Always Cooperate"
          ],
          answer: 0,
          explain: "Tit for Tat starts by cooperating and then mirrors whatever the opponent did on the previous round, a hallmark conditional strategy."
        },
        {
          type: "truefalse",
          q: "Tit for Tat was the strategy submitted by Anatol Rapoport that won Axelrod's computer tournaments.",
          answer: true,
          explain: "Anatol Rapoport submitted the simple Tit for Tat rule, which won both of Axelrod's round-robin tournaments described in 1984."
        },
        {
          type: "fill",
          q: "A conditional strategy bases its next move on the ____ of prior play.",
          answer: "history",
          accept: ["history", "record", "past"],
          explain: "Conditional strategies respond to the history of past moves rather than acting the same way regardless of context."
        },
        {
          type: "truefalse",
          q: "'Always Defect' is a conditional strategy because it reacts to the opponent's moves.",
          answer: false,
          explain: "Always Defect is unconditional: it plays defect regardless of history, so it does not depend on the opponent's behavior."
        },
        {
          type: "match",
          q: "Match each strategy to its behavior.",
          pairs: [
            ["Tit for Tat", "Cooperate first, then copy opponent's last move"],
            ["Always Defect", "Defect every round regardless of history"],
            ["Grim Trigger", "Cooperate until any defection, then defect forever"]
          ],
          explain: "Tit for Tat and Grim Trigger are conditional (they respond to history), while Always Defect is unconditional."
        },
        {
          type: "order",
          q: "Order how Tit for Tat plays across the first two rounds against a cooperator.",
          items: [
            "Round 1: cooperate by default",
            "Observe opponent cooperated",
            "Round 2: cooperate again by copying"
          ],
          explain: "Tit for Tat opens with cooperation, watches the opponent's move, then mirrors it on the next round."
        }
      ]
    },
    {
      id: "l85",
      title: "Folk theorem for repetition",
      intro: "The folk theorem shows that when the future matters enough, cooperation can be supported as an equilibrium of the repeated game.",
      questions: [
        {
          type: "mcq",
          q: "What does the folk theorem broadly state about infinitely repeated games?",
          choices: [
            "Many outcomes, including cooperation, can be sustained as equilibria if players are patient enough",
            "Only defection can ever be an equilibrium",
            "Cooperation is impossible in any repeated game",
            "The payoff matrix must be symmetric to have any equilibrium"
          ],
          answer: 0,
          explain: "The folk theorem says that with a high enough discount factor, a wide range of individually rational outcomes, including mutual cooperation, can be equilibria."
        },
        {
          type: "truefalse",
          q: "The folk theorem requires the discount factor to be sufficiently high for cooperation to be sustainable.",
          answer: true,
          explain: "Cooperation is supportable only when players weight the future enough, i.e. when the discount factor is high enough."
        },
        {
          type: "fill",
          q: "The folk theorem shows cooperation can be supported as an ____ of the repeated game, not just a hope.",
          answer: "equilibrium",
          accept: ["equilibrium", "nash equilibrium"],
          explain: "The key claim is that cooperation can be a genuine equilibrium, so no player has an incentive to unilaterally deviate."
        },
        {
          type: "mcq",
          q: "Why is it called the 'folk' theorem?",
          choices: [
            "The result was known informally among game theorists before anyone published a formal proof",
            "It was discovered by a folk musician",
            "It only applies to folk traditions",
            "It was proven by a person named Folk"
          ],
          answer: 0,
          explain: "The name reflects that the basic result circulated as common knowledge in the field before a formal published attribution."
        },
        {
          type: "truefalse",
          q: "The folk theorem guarantees that players WILL cooperate in every repeated game.",
          answer: false,
          explain: "It shows cooperation CAN be an equilibrium under the right conditions, not that it must happen; defection remains an equilibrium too."
        },
        {
          type: "match",
          q: "Match each element of the folk theorem's logic.",
          pairs: [
            ["Patient players", "High discount factor supports cooperation"],
            ["Credible punishment", "Deviations can be deterred"],
            ["Multiple equilibria", "Many outcomes can be sustained"]
          ],
          explain: "The folk theorem combines patience and credible punishment to make many outcomes, including cooperation, sustainable equilibria."
        },
        {
          type: "order",
          q: "Order the folk-theorem argument for sustaining cooperation.",
          items: [
            "Players value the future enough (high delta)",
            "A credible punishment deters deviation",
            "Cooperation becomes a stable equilibrium"
          ],
          explain: "Sufficient patience plus a credible threat of punishment makes cooperation self-enforcing in equilibrium."
        }
      ]
    },
    {
      id: "l86",
      title: "Grim trigger strategy",
      intro: "The grim trigger cooperates until the first defection, then punishes with permanent defection forever after.",
      questions: [
        {
          type: "mcq",
          q: "How does the grim trigger strategy respond to a partner's defection?",
          choices: [
            "It defects forever after, never returning to cooperation",
            "It forgives immediately and cooperates again",
            "It defects once, then cooperates",
            "It rewards the defector with cooperation"
          ],
          answer: 0,
          explain: "Grim trigger imposes permanent punishment: after any defection it switches to defecting forever, with no forgiveness."
        },
        {
          type: "truefalse",
          q: "The grim trigger strategy starts by cooperating.",
          answer: true,
          explain: "Grim trigger cooperates from the outset and continues cooperating until the opponent defects even once."
        },
        {
          type: "fill",
          q: "The grim trigger is unforgiving because its punishment phase lasts ____.",
          answer: "forever",
          accept: ["forever", "permanently", "indefinitely"],
          explain: "Once triggered, the punishment never ends, which is what makes the strategy maximally harsh."
        },
        {
          type: "mcq",
          q: "Why can the threat of grim trigger sustain cooperation in equilibrium?",
          choices: [
            "The permanent loss of future cooperation can outweigh the one-time gain from defecting",
            "It makes defection physically impossible",
            "It changes the payoffs of the stage game",
            "It adds new players to punish defectors"
          ],
          answer: 0,
          explain: "If a defector forfeits all future cooperative payoffs, and the future matters enough, the immediate temptation is not worth it."
        },
        {
          type: "truefalse",
          q: "Compared with Tit for Tat, grim trigger is more forgiving.",
          answer: false,
          explain: "Grim trigger never forgives, whereas Tit for Tat resumes cooperation as soon as the opponent does; grim trigger is the harsher rule."
        },
        {
          type: "order",
          q: "Order the phases of the grim trigger strategy.",
          items: [
            "Cooperate every round",
            "Opponent defects once",
            "Defect forever afterward"
          ],
          explain: "Grim trigger cooperates until the first defection, which permanently switches it into unending punishment."
        },
        {
          type: "match",
          q: "Match each strategy to how it treats a single defection.",
          pairs: [
            ["Grim Trigger", "Punishes with permanent defection"],
            ["Tit for Tat", "Punishes once, then can forgive"],
            ["Always Cooperate", "Never punishes at all"]
          ],
          explain: "Strategies differ in how harshly and how long they punish; grim trigger is the most severe of these three."
        }
      ]
    },
    {
      id: "l87",
      title: "Finite-horizon unraveling",
      intro: "When the number of rounds is known and finite, backward induction can unravel cooperation all the way to the first round.",
      questions: [
        {
          type: "mcq",
          q: "In a Prisoner's Dilemma repeated a known finite number of times, what does backward induction predict?",
          choices: [
            "Defection in every round, because cooperation unravels from the last round backward",
            "Cooperation in every round",
            "Cooperation only in the final round",
            "Random behavior throughout"
          ],
          answer: 0,
          explain: "With a known last round, defection is optimal there; that logic unravels backward, predicting defection in every round."
        },
        {
          type: "truefalse",
          q: "Backward induction starts its reasoning from the final round and works toward the first.",
          answer: true,
          explain: "Backward induction solves the last round first, then uses that to solve the second-to-last, and so on back to the start."
        },
        {
          type: "mcq",
          q: "Why is there no shadow of the future in the very last round of a finite game?",
          choices: [
            "There are no future rounds left to reward or punish behavior",
            "The payoffs are always zero in the last round",
            "Players are forced to cooperate",
            "The discount factor becomes greater than 1"
          ],
          answer: 0,
          explain: "In the final round nothing comes after, so there is no future cooperation to protect, making defection the dominant choice."
        },
        {
          type: "fill",
          q: "The step-by-step backward reasoning that destroys cooperation in a finite game is called ____ induction.",
          answer: "backward",
          accept: ["backward", "backwards"],
          explain: "Backward induction reasons from the end of the game toward the beginning to find each round's optimal play."
        },
        {
          type: "truefalse",
          q: "The unraveling argument requires that both players know exactly when the game ends.",
          answer: true,
          explain: "A known, fixed final round is what lets backward induction begin; without a certain endpoint the unraveling breaks down."
        },
        {
          type: "order",
          q: "Order the backward-induction unraveling logic.",
          items: [
            "Both defect in the final round",
            "Knowing this, both defect in the second-to-last round",
            "The logic unravels back to defection in round one"
          ],
          explain: "Certain defection in the last round makes the previous round effectively last, and this cascades all the way to the first round."
        },
        {
          type: "match",
          q: "Match each feature of the finite-horizon case.",
          pairs: [
            ["Known final round", "No future to protect there"],
            ["Backward induction", "Reason from last round to first"],
            ["Predicted outcome", "Defection in every round"]
          ],
          explain: "A known endpoint plus backward induction predicts universal defection in the finitely repeated Prisoner's Dilemma."
        }
      ]
    },
    {
      id: "l88",
      title: "Indefinite repetition rescues cooperation",
      intro: "When the endpoint is unknown, there is no last round to unravel, so cooperation can once again be sustained.",
      questions: [
        {
          type: "mcq",
          q: "Why does an unknown endpoint help restore the incentive to cooperate?",
          choices: [
            "There is no certain final round, so backward induction cannot unravel cooperation",
            "The payoffs increase every round",
            "Players are legally required to cooperate",
            "Defection stops being possible"
          ],
          answer: 0,
          explain: "Without a known last round, the backward-induction argument has no place to start, so the shadow of the future survives."
        },
        {
          type: "truefalse",
          q: "An indefinitely repeated game can be modeled as continuing to the next round with some probability each time.",
          answer: true,
          explain: "Indefinite repetition is often modeled with a continuation probability, which also plays the role of the discount factor."
        },
        {
          type: "fill",
          q: "Because there is no certain final round, cooperation is not destroyed by ____ induction.",
          answer: "backward",
          accept: ["backward", "backwards"],
          explain: "Backward induction needs a definite last round to begin; an unknown endpoint denies it that starting point."
        },
        {
          type: "mcq",
          q: "What key quantity determines whether cooperation can be sustained in the indefinitely repeated game?",
          choices: [
            "The continuation probability / discount factor being high enough",
            "The number of choices in the stage game",
            "The alphabetical order of the players",
            "Whether the matrix is drawn in color"
          ],
          answer: 0,
          explain: "If the probability of continuing (the discount factor) is high enough, the future is valuable enough to deter defection."
        },
        {
          type: "truefalse",
          q: "Indefinite repetition guarantees cooperation regardless of how likely the game is to continue.",
          answer: false,
          explain: "Cooperation is sustainable only when the continuation probability is high enough; if it is too low, defection can still dominate."
        },
        {
          type: "match",
          q: "Match each horizon type to its effect on cooperation.",
          pairs: [
            ["Known finite horizon", "Cooperation unravels to defection"],
            ["Indefinite horizon", "Cooperation can be sustained"],
            ["Continuation probability", "Sets how much the future matters"]
          ],
          explain: "A certain endpoint destroys cooperation, but an uncertain endpoint with a high enough continuation probability rescues it."
        },
        {
          type: "order",
          q: "Order the reasoning that shows indefinite repetition rescues cooperation.",
          items: [
            "The game may end, but no round is known to be last",
            "Backward induction has no final round to start from",
            "A high continuation probability keeps cooperation stable"
          ],
          explain: "An unknown endpoint blocks backward induction, so a sufficiently high continuation probability lets cooperation persist."
        }
      ]
    }
  ]
});
