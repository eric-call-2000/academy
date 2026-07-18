window.ACADEMY.addUnit("evopsych", {
  id: "unit-6",
  title: "Reciprocity and Cooperation",
  color: "#7c5cff",
  icon: "🤝",
  description: "How cooperation evolves among non-relatives through reciprocal exchange, from Trivers's theory and game-theory tournaments to reputation, punishment, and the emotions that keep exchange honest.",
  lessons: [
    {
      id: "l41",
      title: "Trivers's Reciprocal Altruism",
      intro: "In 1971 Robert Trivers showed how natural selection can favor helping non-relatives when the favor is likely to be returned later.",
      questions: [
        {
          type: "mcq",
          q: "Who published the foundational 1971 paper 'The Evolution of Reciprocal Altruism'?",
          choices: ["Robert Trivers", "W. D. Hamilton", "Richard Dawkins", "John Maynard Smith"],
          answer: 0,
          explain: "Robert Trivers published 'The Evolution of Reciprocal Altruism' in the Quarterly Review of Biology in 1971."
        },
        {
          type: "truefalse",
          q: "Reciprocal altruism requires that the helper and the recipient be close genetic relatives.",
          answer: false,
          explain: "Reciprocal altruism explains cooperation among non-relatives; helping close kin is instead covered by kin selection."
        },
        {
          type: "fill",
          q: "Reciprocal altruism involves a ____ return: the helper pays a cost now and receives the benefit later.",
          answer: "delayed",
          accept: ["delayed", "deferred", "later"],
          explain: "The defining feature is a delayed return, so the exchange only pays off if the partner reciprocates in the future."
        },
        {
          type: "mcq",
          q: "Which is a classic biological example of reciprocal altruism?",
          choices: ["Ants sacrificing for their queen", "A peacock growing a large tail", "Vampire bats regurgitating blood to feed hungry roost-mates", "A cuckoo laying eggs in another bird's nest"],
          answer: 2,
          explain: "Gerald Wilkinson's work on vampire bats showed they share regurgitated blood meals, later repaid by past recipients, a textbook case of reciprocal altruism."
        },
        {
          type: "truefalse",
          q: "For reciprocal altruism to be favored, the benefit to the receiver should exceed the cost to the giver.",
          answer: true,
          explain: "When the benefit received outweighs the cost of giving, both partners come out ahead over repeated exchanges, allowing the behavior to spread."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [
            ["Reciprocal altruism", "Helping non-kin who are likely to return the favor"],
            ["Kin selection", "Helping relatives who share your genes"],
            ["Delayed return", "The benefit is repaid at a later time"],
            ["Vampire bats", "Share regurgitated blood with hungry roost-mates"]
          ],
          explain: "Reciprocal altruism (non-kin, delayed payback) is distinct from kin selection (shared genes), and vampire bats are its best-known animal example."
        },
        {
          type: "order",
          q: "Put the steps of a reciprocal exchange in order.",
          items: ["Individual A pays a cost to help B", "B receives the benefit", "Later, B has a chance to help A", "B repays A by helping"],
          explain: "Reciprocal altruism runs as a loop over time: help given now must be repaid later for the strategy to be worthwhile."
        }
      ]
    },
    {
      id: "l42",
      title: "The Prisoner's Dilemma",
      intro: "The Prisoner's Dilemma captures why two rational actors may fail to cooperate even when cooperation would leave both better off.",
      questions: [
        {
          type: "mcq",
          q: "Which ordering of Prisoner's Dilemma payoffs is correct, from best to worst for a single player?",
          choices: ["Reward > Temptation > Punishment > Sucker", "Temptation > Reward > Punishment > Sucker", "Sucker > Punishment > Reward > Temptation", "Punishment > Reward > Temptation > Sucker"],
          answer: 1,
          explain: "The defining inequality is T > R > P > S: Temptation (defect on a cooperator) beats Reward (mutual cooperation), which beats Punishment (mutual defection), which beats the Sucker's payoff."
        },
        {
          type: "truefalse",
          q: "In a single one-shot Prisoner's Dilemma, mutual defection is the Nash equilibrium.",
          answer: true,
          explain: "Because defecting yields a higher payoff whatever the partner does, both rational players defect, even though mutual cooperation would have paid both more."
        },
        {
          type: "fill",
          q: "In a one-shot Prisoner's Dilemma, the dominant strategy for a self-interested player is to ____.",
          answer: "defect",
          accept: ["defect", "defection", "cheat"],
          explain: "Defection is dominant: it gives a higher payoff no matter what the other player chooses, which is exactly what makes the situation a dilemma."
        },
        {
          type: "order",
          q: "Rank the four payoffs from highest to lowest.",
          items: ["Temptation", "Reward", "Punishment", "Sucker"],
          explain: "The payoff structure is T > R > P > S, the ordering that makes defection tempting yet mutual cooperation collectively better."
        },
        {
          type: "match",
          q: "Match each payoff to the outcome that produces it.",
          pairs: [
            ["Temptation (T)", "You defect while your partner cooperates"],
            ["Reward (R)", "Both players cooperate"],
            ["Punishment (P)", "Both players defect"],
            ["Sucker (S)", "You cooperate while your partner defects"]
          ],
          explain: "Each payoff corresponds to one of the four combinations of two players choosing cooperate or defect."
        },
        {
          type: "mcq",
          q: "What does receiving the 'sucker's payoff' mean?",
          choices: ["You cooperated but your partner defected", "Both of you cooperated", "You defected while your partner cooperated", "Both of you defected"],
          answer: 0,
          explain: "The sucker's payoff (S) is the worst outcome: you paid the cost of cooperating while your partner exploited you by defecting."
        },
        {
          type: "truefalse",
          q: "Mutual cooperation gives the two players a higher combined payoff than mutual defection.",
          answer: true,
          explain: "Because R > P, two cooperators jointly earn more than two defectors, which is why the failure to cooperate is called a dilemma."
        }
      ]
    },
    {
      id: "l43",
      title: "Axelrod's Tournaments",
      intro: "Robert Axelrod's computer tournaments in the early 1980s revealed that a simple strategy, Tit-for-Tat, could outperform far more elaborate rivals.",
      questions: [
        {
          type: "mcq",
          q: "Who submitted the winning Tit-for-Tat strategy to Axelrod's tournaments?",
          choices: ["John Nash", "Robert Axelrod himself", "Anatol Rapoport", "George Price"],
          answer: 2,
          explain: "Game theorist Anatol Rapoport submitted Tit-for-Tat, the shortest program entered, and it won both of Axelrod's tournaments."
        },
        {
          type: "truefalse",
          q: "Tit-for-Tat cooperates on the very first move.",
          answer: true,
          explain: "Tit-for-Tat opens with cooperation, then simply copies whatever the opponent did on the previous move."
        },
        {
          type: "fill",
          q: "Axelrod called Tit-for-Tat '____' because it is never the first to defect.",
          answer: "nice",
          accept: ["nice"],
          explain: "A 'nice' strategy never defects first. Axelrod found that nice strategies dominated the top of both tournaments."
        },
        {
          type: "match",
          q: "Match each property of a successful strategy to its meaning.",
          pairs: [
            ["Nice", "Never the first to defect"],
            ["Retaliatory", "Punishes a defection promptly"],
            ["Forgiving", "Returns to cooperation once the partner does"],
            ["Clear", "Simple enough for the partner to predict"]
          ],
          explain: "Axelrod identified these four traits as the recipe for success; Tit-for-Tat embodies all of them."
        },
        {
          type: "order",
          q: "Trace Tit-for-Tat's responses across a short exchange.",
          items: ["Round 1: cooperate", "Opponent defects", "Next round: defect to retaliate", "Opponent cooperates", "Next round: cooperate to forgive"],
          explain: "Tit-for-Tat mirrors the opponent's last move: it retaliates against defection but forgives immediately once cooperation resumes."
        },
        {
          type: "mcq",
          q: "What is the title of Axelrod's 1984 book summarizing this research?",
          choices: ["The Selfish Gene", "The Evolution of Cooperation", "The Descent of Man", "Games and Decisions"],
          answer: 1,
          explain: "Axelrod's 1984 book 'The Evolution of Cooperation' presented the tournament results and their implications for how cooperation can emerge."
        },
        {
          type: "truefalse",
          q: "Tit-for-Tat won by beating its individual opponents head-to-head in most games.",
          answer: false,
          explain: "Tit-for-Tat never scores more than an opponent in a direct pairing; it won the tournament overall by eliciting mutual cooperation and thus accumulating a high total score."
        }
      ]
    },
    {
      id: "l44",
      title: "Conditions for Reciprocity",
      intro: "Reciprocity can only evolve when individuals interact repeatedly and can tell each other apart.",
      questions: [
        {
          type: "mcq",
          q: "Which set of conditions makes reciprocal cooperation most likely to evolve?",
          choices: ["Anonymous, one-time encounters with strangers", "Large groups where individuals never meet twice", "Repeated interactions with recognizable partners and good memory", "Interactions only among close genetic kin"],
          answer: 2,
          explain: "Reciprocity needs repeated contact, the ability to recognize partners, and memory of past behavior so cooperation can be conditioned on how a partner acted before."
        },
        {
          type: "truefalse",
          q: "One-time anonymous interactions strongly favor the evolution of reciprocity.",
          answer: false,
          explain: "If partners never meet again and cannot be recognized, there is no future in which a favor could be repaid, so defection wins and reciprocity cannot get started."
        },
        {
          type: "fill",
          q: "The high probability that partners will meet again is often called the 'shadow of the ____'.",
          answer: "future",
          accept: ["future"],
          explain: "A long 'shadow of the future' means defection is likely to be punished later, which makes cooperation the smarter choice today."
        },
        {
          type: "match",
          q: "Match each requirement for reciprocity to its description.",
          pairs: [
            ["Repeated interaction", "Partners meet again and again"],
            ["Recognition", "Being able to tell individuals apart"],
            ["Memory", "Recalling how a partner behaved before"],
            ["Shadow of the future", "High odds of a future encounter"]
          ],
          explain: "Without repeated meetings, individual recognition, memory, and a real chance of future contact, conditional cooperation cannot be sustained."
        },
        {
          type: "order",
          q: "Order the ingredients that let conditional reciprocity operate.",
          items: ["Partners meet repeatedly", "They recognize one another", "They remember past behavior", "They give help only to past cooperators"],
          explain: "Repeated meetings plus recognition and memory allow an individual to condition its help on the partner's track record."
        },
        {
          type: "mcq",
          q: "As the probability of future interaction with a partner drops toward zero, what happens to the rational choice?",
          choices: ["Cooperation becomes more attractive", "Defection becomes more attractive", "The two choices stay exactly equal", "The partner is guaranteed to reciprocate"],
          answer: 1,
          explain: "With little chance of meeting again, there is no future payback to protect, so the short-term gain from defecting dominates."
        },
        {
          type: "truefalse",
          q: "Individual recognition and memory of past encounters are needed to direct reciprocity toward reliable cooperators.",
          answer: true,
          explain: "You can only reward cooperators and withhold help from cheats if you can recognize partners and recall what they did last time."
        }
      ]
    },
    {
      id: "l45",
      title: "Direct Versus Indirect Reciprocity",
      intro: "Cooperation can be repaid directly by the recipient, or indirectly through one's reputation in a wider community.",
      questions: [
        {
          type: "mcq",
          q: "Which statement best describes indirect reciprocity?",
          choices: ["Helping only your genetic relatives", "The same two individuals repeatedly trading favors", "Refusing to help anyone who cannot repay you at once", "Helping someone and later being helped by a different observer because of your good reputation"],
          answer: 3,
          explain: "In indirect reciprocity the return comes not from the person you helped but from third parties who observed and now trust your reputation."
        },
        {
          type: "truefalse",
          q: "Indirect reciprocity depends on reputation and being observed by others.",
          answer: true,
          explain: "Since the recipient may never repay you, indirect reciprocity works only if others witness your behavior and adjust how they treat you accordingly."
        },
        {
          type: "fill",
          q: "Nowak and Sigmund's 1998 model of indirect reciprocity is based on 'image ____', a running measure of reputation.",
          answer: "scoring",
          accept: ["scoring", "score"],
          explain: "In image scoring, helping others raises your image score and makes onlookers more willing to help you in turn."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Direct reciprocity", "I help you, and you later help me"],
            ["Indirect reciprocity", "I help you, and a third party later helps me"],
            ["Reputation", "The public record of how you treat others"],
            ["Image scoring", "Nowak and Sigmund's reputation model"]
          ],
          explain: "Direct reciprocity is repaid by the same partner; indirect reciprocity is repaid by the community through reputation, formalized as image scoring."
        },
        {
          type: "order",
          q: "Order the chain of events in indirect reciprocity.",
          items: ["A helps B", "Onlookers observe A's helpful act", "A gains a good reputation", "C later helps A because of that reputation"],
          explain: "The payback in indirect reciprocity flows from observers, not the original recipient: a good reputation earned in one interaction is cashed in with someone else."
        },
        {
          type: "mcq",
          q: "Which researchers formalized indirect reciprocity through image scoring in a 1998 Nature paper?",
          choices: ["Martin Nowak and Karl Sigmund", "Robert Trivers and W. D. Hamilton", "Ernst Fehr and Simon Gachter", "John Maynard Smith and George Price"],
          answer: 0,
          explain: "Martin Nowak and Karl Sigmund's 1998 Nature paper showed image scoring can make indirect reciprocity evolve."
        },
        {
          type: "truefalse",
          q: "Direct reciprocity requires that the same two individuals interact again.",
          answer: true,
          explain: "Direct reciprocity is repaid by the original partner, so it depends on that specific pair meeting more than once."
        }
      ]
    },
    {
      id: "l46",
      title: "Cheating and Enforcement",
      intro: "Because cheating pays in the short term, cooperation persists only when cheats are detected and made to bear a cost.",
      questions: [
        {
          type: "mcq",
          q: "Why is enforcement, such as punishing defectors, important for cooperation?",
          choices: ["It makes cooperation illegal", "It removes the short-term advantage of cheating", "It guarantees everyone is related", "It eliminates the need for recognition"],
          answer: 1,
          explain: "Punishment lowers the payoff to cheating so that defection no longer beats cooperation, keeping cooperators from being exploited."
        },
        {
          type: "truefalse",
          q: "If defection carries no cost at all, stable cooperation is easy to maintain.",
          answer: false,
          explain: "When cheating is costless, defectors out-earn cooperators and spread, so cooperation collapses without some cost imposed on cheats."
        },
        {
          type: "fill",
          q: "To stop exploitation, cooperators need a cheater-____ ability to spot those who take without giving back.",
          answer: "detection",
          accept: ["detection", "detecting"],
          explain: "Cheater detection lets cooperators identify defectors and withhold help or punish them, protecting the system from exploitation."
        },
        {
          type: "match",
          q: "Match each enforcement concept to its description.",
          pairs: [
            ["Cheater detection", "Spotting those who take without giving"],
            ["Punishment", "Imposing a cost on a defector"],
            ["Costly punishment", "The punisher pays a price to sanction a cheat"],
            ["Reputation loss", "A cheat loses access to future partners"]
          ],
          explain: "Cooperation is defended by detecting cheats and then imposing costs, either directly through punishment or indirectly through lost reputation."
        },
        {
          type: "order",
          q: "Order how enforcement typically unfolds against a cheat.",
          items: ["A cheat gains a short-term benefit", "Partners detect the cheating", "The cheat loses reputation", "Partners withhold cooperation or punish"],
          explain: "Detection turns a short-term cheating gain into a longer-term loss through withdrawn cooperation and punishment."
        },
        {
          type: "mcq",
          q: "What makes punishment 'costly' or 'altruistic' punishment?",
          choices: ["The punisher gains money from punishing", "Punishing is free and risk-free", "The punisher pays a cost yet may gain nothing personally", "Only relatives can punish"],
          answer: 2,
          explain: "Costly punishment is a puzzle precisely because the punisher pays to sanction a cheat while the benefit of restored cooperation is shared by the whole group."
        },
        {
          type: "truefalse",
          q: "Threat of punishment can make cooperating the more profitable choice for a would-be cheat.",
          answer: true,
          explain: "If the expected penalty exceeds the gain from cheating, a self-interested individual is better off cooperating, which stabilizes cooperation."
        }
      ]
    },
    {
      id: "l47",
      title: "Strong Reciprocity Debate",
      intro: "Ernst Fehr's experiments show that people will punish cheats at a cost to themselves even when they can expect no future benefit.",
      questions: [
        {
          type: "mcq",
          q: "Fehr and Gachter's influential 2002 Nature study is best known for demonstrating what?",
          choices: ["Altruistic punishment in humans", "Kin recognition in wasps", "Tit-for-Tat in computer tournaments", "Image scoring in monkeys"],
          answer: 0,
          explain: "Ernst Fehr and Simon Gachter's 2002 Nature paper 'Altruistic Punishment in Humans' showed people pay to punish free-riders even without personal gain."
        },
        {
          type: "truefalse",
          q: "Strong reciprocity includes a willingness to punish defectors even at a personal cost with no expected future return.",
          answer: true,
          explain: "Strong reciprocators cooperate with cooperators and punish cheats even in one-shot, anonymous settings where narrow self-interest predicts they should not."
        },
        {
          type: "fill",
          q: "Fehr and Gachter labeled paying to punish cheats without any personal benefit as 'altruistic ____'.",
          answer: "punishment",
          accept: ["punishment", "punishing"],
          explain: "Altruistic punishment is costly to the punisher and benefits the group, which is why it is hard to explain by direct reciprocity alone."
        },
        {
          type: "match",
          q: "Match each term from this debate to its meaning.",
          pairs: [
            ["Ernst Fehr", "Ran key altruistic-punishment experiments"],
            ["Public goods game", "Lab test of group cooperation"],
            ["Altruistic punishment", "Paying to punish with no personal gain"],
            ["Strong reciprocity", "Cooperating and punishing beyond self-interest"]
          ],
          explain: "In public goods games, Fehr and colleagues showed strong reciprocity: people cooperate and pay to punish free-riders."
        },
        {
          type: "order",
          q: "Order the classic public goods game finding when punishment is introduced.",
          items: ["Without punishment, cooperation starts moderate", "Over successive rounds, cooperation declines toward zero", "A punishment option is added", "Cooperation rises and stabilizes at a high level"],
          explain: "Cooperation erodes when free-riding goes unchecked, but allowing players to punish free-riders reverses the decline and sustains cooperation."
        },
        {
          type: "mcq",
          q: "In public goods experiments, what happens to cooperation once players can punish free-riders?",
          choices: ["It collapses immediately", "It stays flat at zero", "It rises and is sustained at a higher level", "It becomes impossible to measure"],
          answer: 2,
          explain: "Giving players the option to punish free-riders, even at a cost, raises and stabilizes cooperation compared with games without punishment."
        },
        {
          type: "truefalse",
          q: "Strong reciprocity is fully explained by narrow self-interest and expected future payback.",
          answer: false,
          explain: "The debate exists precisely because strong reciprocity appears in one-shot, anonymous games where self-interested future payback cannot be the motive."
        }
      ]
    },
    {
      id: "l48",
      title: "Gratitude, Guilt, and Trust",
      intro: "Trivers argued that moral emotions such as gratitude, guilt, and trust evolved to regulate reciprocal exchange and keep it honest.",
      questions: [
        {
          type: "mcq",
          q: "According to Trivers, which emotion primarily motivates repaying someone who has helped you?",
          choices: ["Gratitude", "Disgust", "Fear", "Boredom"],
          answer: 0,
          explain: "Gratitude motivates repayment: it prompts a helped individual to reciprocate, keeping the exchange relationship going."
        },
        {
          type: "truefalse",
          q: "Guilt can motivate a cheater to make amends and repair a valuable relationship.",
          answer: true,
          explain: "Trivers proposed that guilt discourages cheating and, when cheating happens, pushes the cheat to compensate and restore the partnership."
        },
        {
          type: "fill",
          q: "Feelings of ____ prompt us to repay those who have done us a favor.",
          answer: "gratitude",
          accept: ["gratitude"],
          explain: "Gratitude is the emotion that tracks benefits received and drives us to reciprocate them."
        },
        {
          type: "match",
          q: "Match each moral emotion to the role Trivers gave it in regulating exchange.",
          pairs: [
            ["Gratitude", "Motivates repaying a benefactor"],
            ["Guilt", "Prompts making amends after cheating"],
            ["Moralistic aggression", "Drives punishing cheats"],
            ["Trust", "Willingness to enter into exchange"]
          ],
          explain: "Trivers argued these emotions form a system: gratitude rewards helpers, guilt repairs breaches, moralistic aggression deters cheats, and trust opens exchange."
        },
        {
          type: "order",
          q: "Order how gratitude regulates a simple exchange.",
          items: ["A friend does you a favor", "You feel gratitude", "You watch for a chance to repay", "You return the favor"],
          explain: "Gratitude links a received benefit to the motivation to repay, closing the loop of reciprocal exchange."
        },
        {
          type: "mcq",
          q: "What function did Trivers attribute to 'moralistic aggression'?",
          choices: ["It rewards generous partners", "It motivates punishing cheats and deterring exploitation", "It makes us forget past favors", "It replaces the need for trust"],
          answer: 1,
          explain: "Moralistic aggression is the anger felt toward cheats; it motivates punishment and protects reciprocators from being exploited."
        },
        {
          type: "truefalse",
          q: "Trust is unnecessary for reciprocal exchange because partners always know each other's future actions.",
          answer: false,
          explain: "Reciprocity involves a delayed, uncertain return, so trust is essential for a partner to risk paying the up-front cost of helping."
        }
      ]
    }
  ]
});
