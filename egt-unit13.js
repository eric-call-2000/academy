window.ACADEMY.addUnit("egt", {
  id: "unit-13",
  title: "Beyond Tit-for-Tat",
  color: "#3b74e0",
  icon: "🔁",
  description: "Explores the strategies and refinements -- from Generous Tit-for-Tat to Pavlov -- that improved on Axelrod's tournament winner.",
  lessons: [
    {
      id: "l97",
      title: "Tit-for-Tat's weakness",
      intro: "Tit-for-Tat is strong, but a single accidental defection can trigger a chain of mutual retaliation.",
      questions: [
        {
          type: "mcq",
          q: "Why is Tit-for-Tat vulnerable when two TFT players meet and one accidentally defects?",
          choices: [
            "Each player retaliates against the other's last move, so a single defection ricochets back and forth",
            "One player immediately switches to all-cooperate to smooth things over",
            "Both players forgive instantly and never notice the error",
            "TFT ignores the opponent's previous move entirely"
          ],
          answer: 0,
          explain: "Because TFT copies the opponent's last move, one accidental defection makes each player defect in turn, producing an alternating chain of retaliation."
        },
        {
          type: "truefalse",
          q: "An 'echo effect' means a single mistake between two Tit-for-Tat players can keep bouncing back and forth for many rounds.",
          answer: true,
          explain: "Since each TFT player mirrors the last move, one error echoes -- each defection triggers another, so the mistake reverberates instead of dying out."
        },
        {
          type: "fill",
          q: "When two Tit-for-Tat players fall into alternating defect-cooperate patterns after one slip, they get stuck in a retaliatory ____.",
          answer: "echo",
          accept: ["echo", "echo effect", "loop", "spiral"],
          explain: "The self-perpetuating back-and-forth caused by mirroring is called an echo effect, where a single error keeps echoing between the two players."
        },
        {
          type: "order",
          q: "Order what happens after a single accidental defection between two TFT players (from first to later):",
          items: [
            "Player A accidentally defects instead of cooperating",
            "Player B copies that defection on the next round",
            "Player A now retaliates against B's defection",
            "The two alternate defections, echoing the original error"
          ],
          explain: "The mirroring rule turns one slip into a chain: A's error is copied by B, then punished by A, and the echo continues until something breaks it."
        },
        {
          type: "mcq",
          q: "What real-world feature does the echo-effect weakness of TFT highlight?",
          choices: [
            "That cooperation is impossible in any repeated game",
            "That strict reciprocity handles honest mistakes poorly",
            "That defection always pays more than cooperation",
            "That players should never remember past moves"
          ],
          answer: 1,
          explain: "The echo effect shows strict tit-for-tat reciprocity is fragile when errors occur -- it cannot distinguish an honest mistake from deliberate betrayal."
        },
        {
          type: "truefalse",
          q: "In an error-free environment, two Tit-for-Tat players cooperate forever with no echo problem.",
          answer: true,
          explain: "The echo weakness only appears when a mistake occurs; with no errors, two TFT players mutually cooperate every round indefinitely."
        },
        {
          type: "match",
          q: "Match each term to its meaning in the context of TFT's weakness:",
          pairs: [
            ["Echo effect", "A single error bouncing back and forth between reciprocators"],
            ["Retaliation", "Defecting in response to the opponent's previous defection"],
            ["Mutual cooperation", "The stable outcome TFT reaches when no mistakes occur"]
          ],
          explain: "TFT's mirroring yields mutual cooperation without errors, but retaliation on a mistaken defection creates an echo effect that disrupts that cooperation."
        }
      ]
    },
    {
      id: "l98",
      title: "Noise and trembling hands",
      intro: "Real interactions involve noise: players sometimes misperceive a move or fail to execute the one they intended.",
      questions: [
        {
          type: "mcq",
          q: "In game theory, what does 'noise' refer to?",
          choices: [
            "Loud arguments between players about the rules",
            "Random errors in perceiving or executing moves",
            "The payoff a player earns for cooperating",
            "A strategy that always defects"
          ],
          answer: 1,
          explain: "Noise means random errors -- a player may misperceive the opponent's move or accidentally play the wrong move, unlike the clean signals of an idealized game."
        },
        {
          type: "match",
          q: "Match each type of error to its description:",
          pairs: [
            ["Execution error", "You intend to cooperate but accidentally defect"],
            ["Perception error", "Your opponent cooperated but you register it as a defection"],
            ["Noisy environment", "A game where such errors occur with some probability"]
          ],
          explain: "Execution errors garble the move you make; perception errors garble the move you receive. A noisy environment has some chance of either."
        },
        {
          type: "fill",
          q: "Selten's idea that a rational player might slip and choose an unintended action with small probability is called the ____ hand.",
          answer: "trembling",
          accept: ["trembling", "shaky"],
          explain: "Reinhard Selten's 'trembling hand' captures the notion that even a rational player's hand may tremble and execute the wrong move with tiny probability."
        },
        {
          type: "truefalse",
          q: "A 'trembling hand' error is an execution error: the player intended one action but performed another.",
          answer: true,
          explain: "The trembling-hand metaphor describes execution noise -- the intended move is correct, but the hand 'trembles' and carries out a different action."
        },
        {
          type: "mcq",
          q: "Why does adding noise make strict Tit-for-Tat perform worse?",
          choices: [
            "Noise removes all payoffs from the game",
            "Noise turns rare mistakes into echoing retaliation that TFT cannot repair",
            "Noise forces every player to always cooperate",
            "Noise has no effect on Tit-for-Tat at all"
          ],
          answer: 1,
          explain: "In a noisy world, occasional errors are inevitable, and TFT's inability to forgive them turns each mistake into a costly retaliation echo."
        },
        {
          type: "truefalse",
          q: "Perception errors and execution errors are exactly the same thing.",
          answer: false,
          explain: "They differ: a perception error misreads what the opponent did, while an execution error mis-performs what you intended to do."
        },
        {
          type: "order",
          q: "Order these from the cleanest game to the noisiest (least to most error):",
          items: [
            "Perfect information, no mistakes ever",
            "Rare execution slips only",
            "Both execution and perception errors present"
          ],
          explain: "Realistic models add layers of noise: from a flawless game, to occasional trembling-hand slips, to a fully noisy world with both misexecution and misperception."
        }
      ]
    },
    {
      id: "l99",
      title: "Generous Tit-for-Tat",
      intro: "Generous Tit-for-Tat sometimes cooperates even after being defected on, letting it break out of retaliation spirals.",
      questions: [
        {
          type: "mcq",
          q: "How does Generous Tit-for-Tat (GTFT) differ from strict Tit-for-Tat?",
          choices: [
            "It always defects first",
            "It occasionally cooperates even after the opponent defected",
            "It never punishes defection under any circumstances",
            "It copies the opponent's move twice each round"
          ],
          answer: 1,
          explain: "GTFT plays like TFT but, with some probability, forgives a defection by cooperating anyway -- this occasional generosity is its defining feature."
        },
        {
          type: "truefalse",
          q: "By occasionally forgiving, Generous Tit-for-Tat can break the echo of mutual retaliation that traps strict TFT after an error.",
          answer: true,
          explain: "A single act of forgiveness resets the interaction back toward cooperation, ending the alternating defection echo that plain TFT cannot escape."
        },
        {
          type: "fill",
          q: "Generous Tit-for-Tat relies on occasional ____ to escape a spiral of mutual defection.",
          answer: "forgiveness",
          accept: ["forgiveness", "generosity", "forgiving"],
          explain: "The mechanism is forgiveness: cooperating despite a defection lets the pair recover mutual cooperation instead of echoing punishment forever."
        },
        {
          type: "mcq",
          q: "What is the risk of being TOO generous (forgiving nearly every defection)?",
          choices: [
            "You become exploitable by strategies that always defect",
            "You can no longer cooperate with anyone",
            "You are forced to defect on the first move",
            "Your payoffs are guaranteed to be highest"
          ],
          answer: 0,
          explain: "Excessive generosity invites exploitation: a pure defector can keep taking advantage if you forgive too readily, so the forgiveness rate must be tuned."
        },
        {
          type: "order",
          q: "Order how Generous Tit-for-Tat recovers after an accidental defection:",
          items: [
            "An error causes one player to defect",
            "The opponent would normally retaliate",
            "GTFT instead forgives and cooperates on some chance",
            "Mutual cooperation is restored"
          ],
          explain: "GTFT interrupts the retaliation chain by sometimes cooperating after a defection, which nudges both players back to mutual cooperation."
        },
        {
          type: "truefalse",
          q: "Generous Tit-for-Tat never punishes defection at all.",
          answer: false,
          explain: "GTFT still usually retaliates like TFT; it only forgives some of the time, so it retains enough punishment to deter persistent defectors."
        },
        {
          type: "match",
          q: "Match each property to the strategy it best describes:",
          pairs: [
            ["Always retaliates after a defection", "Strict Tit-for-Tat"],
            ["Sometimes cooperates after a defection", "Generous Tit-for-Tat"],
            ["Gets stuck in echoing retaliation", "Strict Tit-for-Tat under noise"]
          ],
          explain: "Strict TFT always mirrors and can echo under noise; GTFT adds probabilistic forgiveness so it can recover from mistakes."
        }
      ]
    },
    {
      id: "l100",
      title: "Win-Stay, Lose-Shift",
      intro: "The Pavlov strategy keeps its move when it did well last round and switches when it did poorly.",
      questions: [
        {
          type: "mcq",
          q: "What is the core rule of the Win-Stay, Lose-Shift (Pavlov) strategy?",
          choices: [
            "Always copy the opponent's last move",
            "Repeat your last move if it earned a good payoff, switch if it earned a poor one",
            "Always defect regardless of outcome",
            "Cooperate only on even-numbered rounds"
          ],
          answer: 1,
          explain: "Pavlov judges its own last outcome: a good payoff means 'win, stay' (repeat the move); a poor payoff means 'lose, shift' (switch the move)."
        },
        {
          type: "fill",
          q: "The Win-Stay, Lose-Shift strategy is nicknamed ____ after the psychologist known for conditioned responses.",
          answer: "pavlov",
          accept: ["pavlov"],
          explain: "It is called Pavlov because, like a conditioned reflex, it repeats rewarded behavior and abandons punished behavior."
        },
        {
          type: "truefalse",
          q: "Unlike Tit-for-Tat, Pavlov's decision depends on its OWN payoff last round, not simply on the opponent's last move.",
          answer: true,
          explain: "Pavlov reacts to the reward it received (win or lose), whereas TFT reacts only to what the opponent did; this makes their logic fundamentally different."
        },
        {
          type: "match",
          q: "For Pavlov, match each last-round outcome to the next move (assume it cooperated last round):",
          pairs: [
            ["Both cooperated (a win)", "Stay: cooperate again"],
            ["I cooperated, opponent defected (a loss)", "Shift: switch to defect"],
            ["Rule name", "Win-Stay, Lose-Shift"]
          ],
          explain: "A good outcome tells Pavlov to keep its move; a bad outcome (being suckered) tells it to switch, so it flips from cooperate to defect."
        },
        {
          type: "order",
          q: "Order Pavlov's decision process for a single round:",
          items: [
            "Observe the payoff from your own last move",
            "Decide whether it counts as a win or a loss",
            "Stay with the same move if a win, shift if a loss"
          ],
          explain: "Pavlov first reads its own payoff, classifies it as win or loss, and then either repeats or reverses its previous action accordingly."
        },
        {
          type: "mcq",
          q: "After mutual defection (both got a poor payoff), what does Pavlov do next?",
          choices: [
            "Stay and keep defecting",
            "Shift, moving toward cooperation",
            "Quit the game",
            "Copy the opponent forever"
          ],
          answer: 1,
          explain: "Mutual defection is a 'lose' outcome, so Pavlov shifts its move -- switching from defect toward cooperation to try for a better result."
        },
        {
          type: "truefalse",
          q: "Pavlov requires the player to remember its own previous move as well as the resulting payoff.",
          answer: true,
          explain: "To 'stay or shift,' Pavlov must know both what it played last and how well that move did, so it tracks its own move and its reward."
        }
      ]
    },
    {
      id: "l101",
      title: "Pavlov exploits unconditional cooperators",
      intro: "Pavlov gains an edge over Tit-for-Tat by continuing to exploit a partner who cooperates no matter what.",
      questions: [
        {
          type: "mcq",
          q: "Against an unconditional cooperator (always cooperates), how does Pavlov behave once it happens to defect?",
          choices: [
            "It shifts back to cooperation immediately out of guilt",
            "It keeps defecting, because exploiting a cooperator is a 'win' worth staying with",
            "It copies the cooperator and cooperates forever",
            "It leaves the game"
          ],
          answer: 1,
          explain: "Defecting on a cooperator yields the top payoff -- a 'win' -- so Pavlov's win-stay rule tells it to keep defecting and exploit the naive partner."
        },
        {
          type: "truefalse",
          q: "Tit-for-Tat, unlike Pavlov, keeps cooperating with an unconditional cooperator and never exploits it.",
          answer: true,
          explain: "TFT simply mirrors the cooperator's cooperation, so it never starts exploiting; Pavlov, by contrast, will keep taking the higher payoff once it defects."
        },
        {
          type: "fill",
          q: "Pavlov's advantage over TFT is that it learns to ____ a partner who cooperates unconditionally.",
          answer: "exploit",
          accept: ["exploit", "exploits", "exploiting"],
          explain: "Because unpunished defection is a win, Pavlov continues to exploit an always-cooperator, extracting extra payoff that forgiving TFT leaves on the table."
        },
        {
          type: "mcq",
          q: "Why is exploiting unconditional cooperators an EVOLUTIONARY advantage for Pavlov?",
          choices: [
            "It earns extra payoff that unforgiving TFT would forgo",
            "It makes Pavlov cooperate more often",
            "It guarantees Pavlov always loses",
            "It stops all defectors from reproducing"
          ],
          answer: 0,
          explain: "In evolutionary terms, more payoff means more reproductive success; harvesting free gains from naive cooperators helps Pavlov out-reproduce plain TFT."
        },
        {
          type: "order",
          q: "Order what happens when Pavlov meets an unconditional cooperator after an accidental defection:",
          items: [
            "Pavlov defects while the partner cooperates",
            "Pavlov receives the highest (temptation) payoff -- a win",
            "Win-Stay tells Pavlov to keep defecting",
            "Pavlov keeps exploiting the cooperator round after round"
          ],
          explain: "The top payoff registers as a win, so Pavlov stays on defect and continues exploiting a partner that never retaliates."
        },
        {
          type: "truefalse",
          q: "Against a Tit-for-Tat opponent that DOES retaliate, Pavlov cannot exploit endlessly, because retaliation turns exploitation into a loss.",
          answer: true,
          explain: "A retaliating partner makes defection lead to mutual defection -- a loss -- so Pavlov shifts back; only against non-retaliators does exploitation persist."
        },
        {
          type: "match",
          q: "Match each strategy to how it treats an unconditional cooperator:",
          pairs: [
            ["Pavlov", "Keeps defecting to exploit it once it starts"],
            ["Tit-for-Tat", "Keeps cooperating and never exploits"],
            ["Payoff difference", "Pavlov earns more against naive cooperators"]
          ],
          explain: "The behavioral split -- exploit versus mirror -- gives Pavlov an edge in payoff whenever unconditional cooperators are present in the population."
        }
      ]
    },
    {
      id: "l102",
      title: "Nowak and Sigmund 1993",
      intro: "Martin Nowak and Karl Sigmund's 1993 simulations showed Pavlov emerging and outcompeting Tit-for-Tat under noise.",
      questions: [
        {
          type: "mcq",
          q: "What did Martin Nowak and Karl Sigmund report in their 1993 Nature paper?",
          choices: [
            "That Tit-for-Tat is unbeatable in every setting",
            "That Win-Stay, Lose-Shift (Pavlov) can emerge and outperform Tit-for-Tat in evolutionary simulations",
            "That cooperation can never evolve at all",
            "That all strategies converge to always-defect"
          ],
          answer: 1,
          explain: "Nowak and Sigmund (1993) found that Pavlov (Win-Stay, Lose-Shift) tended to emerge and dominate, correcting errors and exploiting cooperators better than TFT."
        },
        {
          type: "fill",
          q: "The pair of researchers who showed Pavlov's evolutionary emergence in 1993 were Martin Nowak and Karl ____.",
          answer: "sigmund",
          accept: ["sigmund"],
          explain: "Karl Sigmund, together with Martin Nowak, published the influential 1993 study demonstrating that Win-Stay, Lose-Shift could evolve and prevail."
        },
        {
          type: "truefalse",
          q: "Nowak and Sigmund's 1993 result appeared in the journal Nature.",
          answer: true,
          explain: "Their paper, 'A strategy of win-stay, lose-shift that outperforms tit-for-tat in the Prisoner's Dilemma game,' was published in Nature in 1993."
        },
        {
          type: "mcq",
          q: "In their simulations, what conditions helped Pavlov out-compete Tit-for-Tat?",
          choices: [
            "A perfectly error-free environment",
            "The presence of noise plus cooperative populations Pavlov could exploit and error-correct within",
            "A rule banning cooperation",
            "Removing all payoffs from the game"
          ],
          answer: 1,
          explain: "With noise and a mix of strategies, Pavlov's error-correction and its ability to exploit unconditional cooperators let it displace TFT over time."
        },
        {
          type: "order",
          q: "Order the evolutionary sequence Nowak and Sigmund observed (as populations shifted over time):",
          items: [
            "Defectors initially spread in the population",
            "Tit-for-Tat rises to suppress the defectors",
            "Pavlov emerges and displaces TFT by exploiting cooperators and self-correcting"
          ],
          explain: "Their simulations showed waves: defection, then TFT curbing it, then Pavlov taking over thanks to its error-correction and exploitation abilities."
        },
        {
          type: "match",
          q: "Match each element of the Nowak and Sigmund 1993 study to its detail:",
          pairs: [
            ["Winning strategy", "Win-Stay, Lose-Shift (Pavlov)"],
            ["Journal", "Nature (1993)"],
            ["Key mechanism", "Error-correction plus exploiting cooperators"]
          ],
          explain: "The study is remembered for showing Pavlov -- via error-correction and exploitation -- outperforming TFT, published in Nature in 1993."
        },
        {
          type: "truefalse",
          q: "Nowak and Sigmund concluded that Tit-for-Tat is the permanent, final winner of all evolutionary competition.",
          answer: false,
          explain: "They concluded the opposite for their conditions: Pavlov could dethrone TFT, showing no strategy is a permanent, universal champion."
        }
      ]
    },
    {
      id: "l103",
      title: "Contrite Tit-for-Tat",
      intro: "Contrite Tit-for-Tat tracks whether it deserved to be punished, so it can absorb blame for its own mistaken defections.",
      questions: [
        {
          type: "mcq",
          q: "What key idea does Contrite Tit-for-Tat add to plain Tit-for-Tat?",
          choices: [
            "It never defects under any circumstances",
            "It tracks whether it was at fault, and accepts punishment for its own mistaken defection instead of retaliating",
            "It always defects after any cooperation",
            "It ignores its own past moves entirely"
          ],
          answer: 1,
          explain: "Contrite TFT keeps a 'standing' record; if it recognizes its own erroneous defection was the cause, it cooperates (accepts the punishment) rather than escalating."
        },
        {
          type: "fill",
          q: "Contrite Tit-for-Tat uses the idea of a player's ____, a record of whether they are currently at fault, to decide whether to accept punishment.",
          answer: "standing",
          accept: ["standing", "good standing"],
          explain: "The concept of 'standing' lets Contrite TFT know if its own mistake put it in the wrong, so it can take the punishment instead of retaliating."
        },
        {
          type: "truefalse",
          q: "Contrite Tit-for-Tat can stop an echo of retaliation by accepting a justified punishment for its own accidental defection.",
          answer: true,
          explain: "By recognizing it erred and absorbing one round of punishment without hitting back, Contrite TFT halts the retaliation echo that plain TFT would sustain."
        },
        {
          type: "mcq",
          q: "How does Contrite TFT respond if the OPPONENT defects while Contrite TFT was in good standing (had done nothing wrong)?",
          choices: [
            "It cheerfully cooperates and ignores the defection",
            "It retaliates, since the punishment was undeserved",
            "It quits the game",
            "It defects forever with no possibility of recovery"
          ],
          answer: 1,
          explain: "Contrition applies only to its own faults; when it is blameless and the opponent defects unprovoked, Contrite TFT still retaliates like normal TFT."
        },
        {
          type: "order",
          q: "Order how Contrite Tit-for-Tat handles its own accidental defection:",
          items: [
            "Contrite TFT accidentally defects, losing good standing",
            "The opponent retaliates against that defection",
            "Contrite TFT recognizes the punishment is deserved",
            "It cooperates to accept the punishment and restore cooperation"
          ],
          explain: "By tracking fault, Contrite TFT takes responsibility: it accepts the deserved retaliation without counter-retaliating, which rebuilds mutual cooperation."
        },
        {
          type: "truefalse",
          q: "Contrite Tit-for-Tat and Generous Tit-for-Tat handle errors in exactly the same way.",
          answer: false,
          explain: "They differ: GTFT forgives the OPPONENT's defections at random, while Contrite TFT accepts punishment for ITS OWN mistaken defections based on fault."
        },
        {
          type: "match",
          q: "Match each strategy to how it deals with an accidental defection:",
          pairs: [
            ["Generous TFT", "Randomly forgives the opponent's defection"],
            ["Contrite TFT", "Accepts punishment for its own mistaken defection"],
            ["Standing", "The record of whether a player is currently at fault"]
          ],
          explain: "Both repair the echo problem, but via different routes: generosity forgives others, contrition owns one's own faults using a standing record."
        }
      ]
    },
    {
      id: "l104",
      title: "No single best strategy",
      intro: "Which strategy wins depends on the mix of opponents, the level of noise, and the structure of the environment.",
      questions: [
        {
          type: "mcq",
          q: "What is the central lesson of the strategies that came after Tit-for-Tat?",
          choices: [
            "There is one universally best strategy for all situations",
            "A strategy's success depends on the strategic environment it faces",
            "Cooperation can never succeed",
            "Only always-defect ever wins"
          ],
          answer: 1,
          explain: "No strategy dominates everywhere; performance depends on the opponents present, the noise level, and the population's structure -- the strategic environment."
        },
        {
          type: "truefalse",
          q: "Because success is environment-dependent, a strategy that wins one tournament may lose in a population with different opponents or more noise.",
          answer: true,
          explain: "Results are contingent: change the mix of strategies or the noise, and the ranking shifts, so a past winner can become a loser in a new setting."
        },
        {
          type: "fill",
          q: "Whether Pavlov, Generous TFT, or plain TFT wins depends on the strategic ____ they are placed in.",
          answer: "environment",
          accept: ["environment", "context", "ecology"],
          explain: "The strategic environment -- the population of opponents, the noise, and the structure -- determines which strategy comes out ahead."
        },
        {
          type: "mcq",
          q: "In a noisy environment with many unconditional cooperators, which strategy is likely to gain an edge?",
          choices: [
            "Strict Tit-for-Tat, because it never forgives",
            "Pavlov, because it corrects errors and exploits naive cooperators",
            "A strategy that quits immediately",
            "Any strategy at all -- the environment does not matter"
          ],
          answer: 1,
          explain: "Noise rewards error-correction and abundant cooperators reward exploitation, both of which favor Pavlov -- illustrating environment-dependent success."
        },
        {
          type: "match",
          q: "Match each environment to a strategy that tends to do well in it:",
          pairs: [
            ["Noisy world with cooperators to exploit", "Pavlov (Win-Stay, Lose-Shift)"],
            ["Noisy world, avoid retaliation echoes", "Generous or Contrite Tit-for-Tat"],
            ["Clean world of mixed reciprocators", "Plain Tit-for-Tat"]
          ],
          explain: "Different conditions favor different strategies, which is exactly why no single rule is best across all strategic environments."
        },
        {
          type: "order",
          q: "Order these claims from most to least supported by post-Axelrod research:",
          items: [
            "The best strategy depends on the environment",
            "Some strategies beat TFT under noise",
            "One fixed strategy is best in every possible setting"
          ],
          explain: "Research strongly supports environment-dependence and that TFT can be beaten under noise, while firmly rejecting the idea of one universally best strategy."
        },
        {
          type: "truefalse",
          q: "The idea that 'Tit-for-Tat is the final answer to the Prisoner's Dilemma' is fully supported by later research.",
          answer: false,
          explain: "Later work overturned that view: strategies like Pavlov, Generous TFT, and Contrite TFT can each outperform TFT under the right environmental conditions."
        }
      ]
    }
  ]
});
