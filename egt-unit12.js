window.ACADEMY.addUnit("egt", {
  id: "unit-12",
  title: "Axelrod's Tournaments",
  color: "#3b74e0",
  icon: "🏆",
  description: "Recounts Robert Axelrod's famous computer tournaments that pitted strategies against each other and revealed why the simple Tit-for-Tat rule triumphed.",
  lessons: [
    {
      id: "l89",
      title: "Axelrod's 1980 tournaments",
      intro: "Robert Axelrod invited game theorists to submit strategies that competed in a round-robin of the repeated Prisoner's Dilemma.",
      questions: [
        {
          type: "mcq",
          q: "What did Robert Axelrod do in 1980 to study cooperation?",
          choices: [
            "Ran a computer tournament where submitted strategies played the repeated Prisoner's Dilemma against each other",
            "Surveyed people about whether they would cooperate",
            "Observed animals sharing food in the wild",
            "Solved the Prisoner's Dilemma with a single equation"
          ],
          answer: 0,
          explain: "Axelrod invited experts to submit computer programs (strategies) that competed in a round-robin repeated Prisoner's Dilemma tournament."
        },
        {
          type: "truefalse",
          q: "In Axelrod's tournament, each strategy played against every other strategy in a round-robin format.",
          answer: true,
          explain: "Round-robin means every entry meets every other entry (and itself), accumulating points across all pairings."
        },
        {
          type: "fill",
          q: "The game that strategies repeatedly played in the tournament was the iterated Prisoner's ____.",
          answer: "dilemma",
          accept: ["dilemma"],
          explain: "The tournament was built on the iterated (repeated) Prisoner's Dilemma, where players choose to cooperate or defect each round."
        },
        {
          type: "mcq",
          q: "Who submitted the strategies that competed in Axelrod's first tournament?",
          choices: [
            "Randomly generated computer programs",
            "Game theorists and researchers who mailed in their programs",
            "Undergraduate students only",
            "Axelrod himself wrote all of them"
          ],
          answer: 1,
          explain: "Axelrod solicited entries from professional game theorists and researchers across several disciplines, who submitted their coded strategies."
        },
        {
          type: "truefalse",
          q: "A strategy in the tournament decides its move based only on random chance, never on past interactions.",
          answer: false,
          explain: "Most strategies used the history of prior moves against a given opponent to decide whether to cooperate or defect."
        },
        {
          type: "order",
          q: "Order the steps of how Axelrod's tournament was run, from first to last.",
          items: [
            "Axelrod invites experts to submit strategies",
            "Each strategy plays every other in round-robin",
            "Scores are summed across all games",
            "The highest total score is declared the winner"
          ],
          explain: "Axelrod collected entries, ran the full round-robin, summed each strategy's points, and ranked them by total score."
        },
        {
          type: "match",
          q: "Match each tournament term to its meaning.",
          pairs: [
            ["Strategy", "A rule for choosing cooperate or defect each round"],
            ["Round-robin", "Every entry plays every other entry"],
            ["Payoff", "Points earned from the outcome of a round"]
          ],
          explain: "Strategies are decision rules, round-robin structures the matchups, and payoffs are the points that determine the winner."
        }
      ]
    },
    {
      id: "l90",
      title: "Tit-for-Tat wins",
      intro: "The simplest program submitted, Anatol Rapoport's Tit-for-Tat, won both of Axelrod's tournaments.",
      questions: [
        {
          type: "mcq",
          q: "Which strategy won Axelrod's tournaments?",
          choices: [
            "Random",
            "Always Defect",
            "Tit-for-Tat",
            "Grim Trigger"
          ],
          answer: 2,
          explain: "Tit-for-Tat, submitted by Anatol Rapoport, earned the highest total score and won both tournaments."
        },
        {
          type: "fill",
          q: "Tit-for-Tat was submitted by the mathematician and psychologist Anatol ____.",
          answer: "rapoport",
          accept: ["rapoport", "rappoport"],
          explain: "Anatol Rapoport submitted Tit-for-Tat, which was also the shortest program in the tournament."
        },
        {
          type: "truefalse",
          q: "Tit-for-Tat was one of the most complex and longest programs in the tournament.",
          answer: false,
          explain: "Tit-for-Tat was the simplest and shortest entry, using only a few lines of code, yet it still won."
        },
        {
          type: "mcq",
          q: "How does Tit-for-Tat behave?",
          choices: [
            "It cooperates on the first move, then copies whatever the opponent did last",
            "It always defects to protect itself",
            "It picks its move randomly each round",
            "It defects first, then cooperates forever"
          ],
          answer: 0,
          explain: "Tit-for-Tat opens with cooperation and thereafter mirrors the opponent's previous move."
        },
        {
          type: "truefalse",
          q: "A striking lesson from the tournament was that a very simple strategy could outperform far more elaborate ones.",
          answer: true,
          explain: "Tit-for-Tat's success showed that simplicity, not complexity, produced the best overall results."
        },
        {
          type: "order",
          q: "Trace a Tit-for-Tat game: order these moves from first to last.",
          items: [
            "Tit-for-Tat cooperates on round one",
            "Opponent defects on round one",
            "Tit-for-Tat defects on round two (copying)",
            "Opponent cooperates, so Tit-for-Tat cooperates next"
          ],
          explain: "Tit-for-Tat starts nice, then echoes the opponent's last move, punishing defection but returning to cooperation."
        },
        {
          type: "match",
          q: "Match each fact to Tit-for-Tat.",
          pairs: [
            ["Author", "Anatol Rapoport"],
            ["First move", "Cooperate"],
            ["Later moves", "Copy the opponent's previous move"]
          ],
          explain: "Rapoport's Tit-for-Tat cooperates first and then simply repeats what the opponent just did."
        }
      ]
    },
    {
      id: "l91",
      title: "Nice strategies",
      intro: "Axelrod found that the highest-scoring strategies were 'nice' -- they were never the first to defect.",
      questions: [
        {
          type: "mcq",
          q: "In Axelrod's terminology, what makes a strategy 'nice'?",
          choices: [
            "It never defects at all",
            "It is never the first to defect",
            "It always forgives instantly",
            "It scores the most points"
          ],
          answer: 1,
          explain: "A nice strategy will not defect unless the opponent has already defected -- it never throws the first punch."
        },
        {
          type: "truefalse",
          q: "Every one of the top-scoring strategies in Axelrod's first tournament was nice.",
          answer: true,
          explain: "Axelrod observed that all of the highest-ranking entries shared the property of being nice."
        },
        {
          type: "fill",
          q: "A nice strategy is defined as one that is never the first to ____.",
          answer: "defect",
          accept: ["defect", "defect first", "betray"],
          explain: "Niceness means refusing to defect first; the strategy only defects in response to an opponent's defection."
        },
        {
          type: "mcq",
          q: "Which of these strategies is NOT nice?",
          choices: [
            "Tit-for-Tat",
            "Always Cooperate",
            "A strategy that defects on the very first move",
            "Grim Trigger (cooperates until the opponent defects)"
          ],
          answer: 2,
          explain: "Defecting on the first move makes a strategy the first to defect, so it fails the definition of nice."
        },
        {
          type: "truefalse",
          q: "A nice strategy can still defect after its opponent defects first.",
          answer: true,
          explain: "Niceness only bars defecting first; a nice strategy may retaliate once the opponent has defected."
        },
        {
          type: "match",
          q: "Classify each strategy as nice or not nice.",
          pairs: [
            ["Tit-for-Tat", "Nice (cooperates first)"],
            ["Always Defect", "Not nice (defects first)"],
            ["Always Cooperate", "Nice (never defects first)"]
          ],
          explain: "Tit-for-Tat and Always Cooperate open with cooperation, so they are nice; Always Defect opens with defection."
        },
        {
          type: "order",
          q: "Order these strategies from the nicest opening behavior to the least nice.",
          items: [
            "Always Cooperate (never defects)",
            "Tit-for-Tat (cooperates first, retaliates later)",
            "Always Defect (defects immediately)"
          ],
          explain: "Always Cooperate never defects, Tit-for-Tat only defects after being provoked, and Always Defect strikes first."
        }
      ]
    },
    {
      id: "l92",
      title: "Retaliatory strategies",
      intro: "A successful strategy must be provokable -- it should punish a defection quickly rather than letting it slide.",
      questions: [
        {
          type: "mcq",
          q: "What does it mean for a strategy to be 'retaliatory' (provokable) in Axelrod's analysis?",
          choices: [
            "It defects at random to keep opponents guessing",
            "It responds to an opponent's defection by defecting in return",
            "It never punishes defection to stay friendly",
            "It defects first to gain an advantage"
          ],
          answer: 1,
          explain: "A retaliatory strategy answers a defection with a defection, discouraging the opponent from exploiting it."
        },
        {
          type: "truefalse",
          q: "Axelrod found that strategies which were too forgiving of defection, never punishing it, tended to be exploited.",
          answer: true,
          explain: "Non-retaliatory strategies like Always Cooperate got taken advantage of by strategies that defected."
        },
        {
          type: "fill",
          q: "Tit-for-Tat retaliates by ____ on the round right after its opponent defects.",
          answer: "defecting",
          accept: ["defecting", "defect", "punishing"],
          explain: "Tit-for-Tat punishes a defection immediately, defecting on the very next move to signal it will not be exploited."
        },
        {
          type: "mcq",
          q: "Why is quick retaliation important for a strategy's success?",
          choices: [
            "It makes the strategy the first to defect",
            "It signals that defection will not pay off, discouraging exploitation",
            "It guarantees the highest score in every single game",
            "It confuses the opponent with randomness"
          ],
          answer: 1,
          explain: "Prompt retaliation teaches opponents that defecting brings an immediate cost, so cooperation becomes the better choice for them."
        },
        {
          type: "truefalse",
          q: "Tit-for-Tat waits several rounds before responding to a defection.",
          answer: false,
          explain: "Tit-for-Tat retaliates on the very next round, not after a delay -- its response is immediate."
        },
        {
          type: "order",
          q: "Order the sequence showing Tit-for-Tat retaliating.",
          items: [
            "Both players are cooperating",
            "The opponent defects",
            "Tit-for-Tat defects on the next round in response",
            "The opponent, deterred, returns to cooperating"
          ],
          explain: "Tit-for-Tat's immediate defection after being wronged deters further defection and can restore mutual cooperation."
        },
        {
          type: "match",
          q: "Match each strategy trait to how it handles an opponent's defection.",
          pairs: [
            ["Retaliatory (Tit-for-Tat)", "Punishes the defection right away"],
            ["Too forgiving (Always Cooperate)", "Ignores it and keeps cooperating"],
            ["Exploiter (Always Defect)", "Keeps defecting regardless"]
          ],
          explain: "Retaliatory strategies punish defection promptly, while over-forgiving ones invite exploitation."
        }
      ]
    },
    {
      id: "l93",
      title: "Forgiving strategies",
      intro: "After punishing a defection, a strong strategy forgives -- it returns to cooperation instead of holding a grudge.",
      questions: [
        {
          type: "mcq",
          q: "What does 'forgiving' mean for a strategy in Axelrod's framework?",
          choices: [
            "Never punishing any defection",
            "Being willing to return to cooperation after retaliating",
            "Always defecting once wronged",
            "Never cooperating with defectors again"
          ],
          answer: 1,
          explain: "A forgiving strategy stops punishing and resumes cooperation once the opponent cooperates again."
        },
        {
          type: "truefalse",
          q: "Tit-for-Tat is forgiving because it resumes cooperation as soon as its opponent goes back to cooperating.",
          answer: true,
          explain: "Once the opponent cooperates, Tit-for-Tat copies that cooperation on the next move, ending the punishment."
        },
        {
          type: "mcq",
          q: "Which strategy is the LEAST forgiving?",
          choices: [
            "Tit-for-Tat",
            "Tit-for-Two-Tats",
            "Grim Trigger (defects forever after one defection)",
            "Always Cooperate"
          ],
          answer: 2,
          explain: "Grim Trigger never forgives -- a single defection makes it defect permanently, holding a grudge forever."
        },
        {
          type: "fill",
          q: "A strategy that holds a permanent grudge and never returns to cooperation is called ____ Trigger.",
          answer: "grim",
          accept: ["grim", "grim trigger"],
          explain: "Grim Trigger punishes forever after one defection, the opposite of a forgiving strategy."
        },
        {
          type: "truefalse",
          q: "Being unforgiving, like Grim Trigger, was found to be the key to Tit-for-Tat's success.",
          answer: false,
          explain: "It was the opposite: forgiveness helped Tit-for-Tat recover cooperation, whereas unforgiving grudges trap both players in mutual defection."
        },
        {
          type: "order",
          q: "Order this sequence showing Tit-for-Tat forgiving after retaliating.",
          items: [
            "Opponent defects once",
            "Tit-for-Tat retaliates by defecting next round",
            "Opponent cooperates again",
            "Tit-for-Tat forgives and cooperates"
          ],
          explain: "Tit-for-Tat punishes once, then forgives the moment the opponent cooperates, restoring mutual cooperation."
        },
        {
          type: "match",
          q: "Match each strategy to how forgiving it is.",
          pairs: [
            ["Tit-for-Tat", "Forgives after one round of punishment"],
            ["Grim Trigger", "Never forgives"],
            ["Tit-for-Two-Tats", "Extra forgiving; needs two defections to react"]
          ],
          explain: "Tit-for-Tat forgives quickly, Tit-for-Two-Tats is even more lenient, and Grim Trigger never forgives at all."
        }
      ]
    },
    {
      id: "l94",
      title: "Clarity of behavior",
      intro: "Axelrod noted that a good strategy is clear -- opponents can quickly understand it and learn that cooperating pays.",
      questions: [
        {
          type: "mcq",
          q: "Why did Axelrod say clarity of behavior helped a strategy succeed?",
          choices: [
            "Confusing opponents lets you exploit them more",
            "An opponent that can read your strategy learns that cooperating with you pays off",
            "Clear strategies always score higher in a single game",
            "Clarity has no effect on outcomes"
          ],
          answer: 1,
          explain: "When a strategy is easy to understand, opponents quickly learn that cooperation is rewarded and defection is punished, so they cooperate."
        },
        {
          type: "truefalse",
          q: "Tit-for-Tat is easy for an opponent to understand and predict.",
          answer: true,
          explain: "Tit-for-Tat's rule -- cooperate first, then copy the opponent -- is transparent, so opponents quickly grasp how to earn good outcomes."
        },
        {
          type: "fill",
          q: "Axelrod listed four properties of top strategies: nice, retaliatory, forgiving, and ____.",
          answer: "clear",
          accept: ["clear", "clarity", "clear behavior"],
          explain: "The fourth property is clarity: being simple and understandable so the opponent can adapt toward cooperation."
        },
        {
          type: "mcq",
          q: "What problem can an overly complex or 'tricky' strategy run into?",
          choices: [
            "It always loses on the first move",
            "Opponents cannot recognize a pattern, so they may not learn to cooperate with it",
            "It is banned from tournaments",
            "It becomes too nice"
          ],
          answer: 1,
          explain: "If opponents cannot decode a strategy, they cannot learn that cooperation is rewarded, and mutual cooperation may never develop."
        },
        {
          type: "truefalse",
          q: "Axelrod concluded that being clever and unpredictable was the surest route to winning the tournament.",
          answer: false,
          explain: "The opposite held: clarity, not cleverness, helped strategies elicit cooperation and win overall."
        },
        {
          type: "order",
          q: "Order Axelrod's four properties of a successful strategy as commonly listed.",
          items: [
            "Nice (never defect first)",
            "Retaliatory (punish defection)",
            "Forgiving (return to cooperation)",
            "Clear (easy to understand)"
          ],
          explain: "Axelrod summarized winning strategies as nice, retaliatory (provokable), forgiving, and clear."
        },
        {
          type: "match",
          q: "Match each of Axelrod's four properties to its meaning.",
          pairs: [
            ["Nice", "Never the first to defect"],
            ["Retaliatory", "Punishes defection promptly"],
            ["Forgiving", "Returns to cooperation"],
            ["Clear", "Easy for opponents to read"]
          ],
          explain: "These four properties -- nice, retaliatory, forgiving, and clear -- characterized the strongest tournament strategies."
        }
      ]
    },
    {
      id: "l95",
      title: "The ecological tournament",
      intro: "Axelrod ran an 'ecological' analysis where more successful strategies grew more common in each new round.",
      questions: [
        {
          type: "mcq",
          q: "What is the key idea of Axelrod's ecological tournament?",
          choices: [
            "Each strategy plays only once and is then removed",
            "A strategy's share of the population grows in proportion to how well it scored, generation after generation",
            "New random strategies are added every round",
            "The worst strategy is copied the most"
          ],
          answer: 1,
          explain: "In the ecological version, successful strategies reproduce -- their proportion of the population rises based on their scores, like natural selection."
        },
        {
          type: "truefalse",
          q: "In the ecological tournament, poorly performing strategies gradually died out while successful ones proliferated.",
          answer: true,
          explain: "Low-scoring strategies shrank toward extinction each generation, while high-scoring ones grew more numerous."
        },
        {
          type: "fill",
          q: "In the ecological simulation, Tit-for-Tat's share of the population grew over successive ____.",
          answer: "generations",
          accept: ["generations", "rounds", "generation"],
          explain: "Generation after generation, Tit-for-Tat proliferated because it kept scoring well against the surviving mix of strategies."
        },
        {
          type: "mcq",
          q: "Why did Always Defect fare poorly in the long run of the ecological tournament?",
          choices: [
            "It was disqualified for defecting",
            "Once it wiped out the exploitable nice strategies, it was left mostly meeting other defectors and scoring badly",
            "It could not defect against itself",
            "It kept switching to cooperation"
          ],
          answer: 1,
          explain: "Always Defect thrives on exploitable partners; as those vanished, it faced mostly defectors and earned the low mutual-defection payoff."
        },
        {
          type: "truefalse",
          q: "The ecological tournament simulates an evolutionary process similar to natural selection.",
          answer: true,
          explain: "Strategies that scored better 'reproduced' more, mimicking how fitter traits spread in a population under natural selection."
        },
        {
          type: "order",
          q: "Order what happens to Tit-for-Tat's population share across the ecological simulation.",
          items: [
            "All strategies start with roughly equal shares",
            "High scorers gain population share each generation",
            "Exploitable and exploiter strategies decline",
            "Tit-for-Tat ends up dominating the population"
          ],
          explain: "As generations pass, successful strategies like Tit-for-Tat grow while weak ones fade, until Tit-for-Tat dominates."
        },
        {
          type: "match",
          q: "Match each strategy to its typical fate in the ecological tournament.",
          pairs: [
            ["Tit-for-Tat", "Proliferates and comes to dominate"],
            ["Always Defect", "Rises early, then collapses"],
            ["Overly nice, non-retaliatory strategies", "Exploited early and die out"]
          ],
          explain: "Tit-for-Tat grew steadily, Always Defect boomed then busted once prey ran out, and pushover strategies were eliminated early."
        }
      ]
    },
    {
      id: "l96",
      title: "Collective stability of Tit-for-Tat",
      intro: "Once Tit-for-Tat is common in a population, no other strategy can invade and do better -- it is collectively stable.",
      questions: [
        {
          type: "mcq",
          q: "What does it mean that Tit-for-Tat is 'collectively stable'?",
          choices: [
            "It always beats every opponent in a single game",
            "Once a population plays Tit-for-Tat, no invading strategy can earn a higher score",
            "It never changes its first move",
            "It requires a central authority to enforce cooperation"
          ],
          answer: 1,
          explain: "Collective stability means that in a population of Tit-for-Tat players, no alternative strategy can invade and outperform them."
        },
        {
          type: "truefalse",
          q: "Collective stability is closely related to the idea of an evolutionarily stable strategy resisting invasion.",
          answer: true,
          explain: "Axelrod's collective stability parallels the ESS concept: a resident strategy that cannot be beaten by a rare mutant invader."
        },
        {
          type: "fill",
          q: "Tit-for-Tat's collective stability depends on the shadow of the future being large enough -- that is, a high enough probability that the game ____.",
          answer: "continues",
          accept: ["continues", "continue", "goes on", "repeats"],
          explain: "Stability requires that players are likely to meet again; a large 'shadow of the future' makes defection unprofitable."
        },
        {
          type: "mcq",
          q: "Why can't Always Defect invade a population of Tit-for-Tat players?",
          choices: [
            "Tit-for-Tat refuses to play against it",
            "An invading defector gets punished after the first round and earns less than the mutual cooperation the residents enjoy",
            "Always Defect cannot defect twice in a row",
            "The tournament rules forbid invaders"
          ],
          answer: 1,
          explain: "Against Tit-for-Tat, a defector is punished from round two onward, so it earns less than residents who cooperate with each other -- assuming the game lasts long enough."
        },
        {
          type: "truefalse",
          q: "Tit-for-Tat is collectively stable no matter how likely the game is to end after each round.",
          answer: false,
          explain: "If the game is very likely to end soon (a small shadow of the future), defection can pay off and Tit-for-Tat loses its stability."
        },
        {
          type: "order",
          q: "Order the reasoning for why Tit-for-Tat resists an Always Defect invader (when the future looms large).",
          items: [
            "Residents cooperate with each other for a steady reward",
            "An Always Defect invader wins big only on its first move",
            "Tit-for-Tat retaliates, so the invader then meets constant punishment",
            "Over many rounds the invader's total falls below the residents'"
          ],
          explain: "The invader's one-time gain is outweighed by repeated punishment, so it cannot beat the cooperating residents over a long game."
        },
        {
          type: "match",
          q: "Match each term to its meaning in the stability of Tit-for-Tat.",
          pairs: [
            ["Collective stability", "No strategy can invade and score higher"],
            ["Shadow of the future", "The chance the game continues to another round"],
            ["Invader", "A rare mutant strategy trying to beat the residents"]
          ],
          explain: "Tit-for-Tat is collectively stable when a large shadow of the future makes any invader unable to outscore the cooperating residents."
        }
      ]
    }
  ]
});
