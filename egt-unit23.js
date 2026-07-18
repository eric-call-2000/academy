window.ACADEMY.addUnit("egt", {
  id: "unit-23",
  title: "Public Goods and Punishment",
  color: "#3b74e0",
  icon: "🤝",
  description: "This unit scales social dilemmas from pairs to groups, showing how public goods games, the tragedy of the commons, and costly punishment shape whether cooperation survives.",
  lessons: [
    {
      id: "l177",
      title: "The public goods game",
      intro: "The public goods game turns cooperation into a group decision: everyone can voluntarily contribute to a shared pot that benefits all, even those who give nothing.",
      questions: [
        {
          type: "mcq",
          q: "In the standard public goods game, what happens to money that players place in the common pool?",
          choices: [
            "It is returned only to the person who contributed it",
            "It is multiplied by a factor greater than 1, then split equally among all members",
            "It is taxed away and removed from the game",
            "It is kept by the experimenter as a fee"
          ],
          answer: 1,
          explain: "The pooled contributions are multiplied by a growth factor and then divided equally among every player, so the group as a whole gains from cooperation."
        },
        {
          type: "truefalse",
          q: "Because each contributor gets back only a share of the group return, a purely self-interested player is tempted to contribute nothing.",
          answer: true,
          explain: "Each dollar you contribute comes back to you only partially (your share of the split), so a selfish player maximizes personal payoff by free-riding."
        },
        {
          type: "fill",
          q: "The choice to contribute nothing while enjoying the pool that others fund is called ____ riding.",
          answer: "free",
          accept: ["free", "free-riding", "freeriding", "free riding"],
          explain: "Free-riding is benefiting from a public good without paying for it, the core temptation in the public goods game."
        },
        {
          type: "match",
          q: "Match each public goods game term to its meaning.",
          pairs: [
            ["Public good", "A benefit shared by all members, including non-contributors"],
            ["Contribution", "Money a player moves from a private account into the pool"],
            ["Multiplication factor", "The number greater than 1 applied to the total pool"],
            ["Marginal per capita return", "The payoff each member earns per unit contributed"]
          ],
          explain: "These terms define the structure of the game: what is shared, what players give, how the pool grows, and the per-person return that drives incentives."
        },
        {
          type: "order",
          q: "Put the stages of one round of a public goods game in the correct order.",
          items: [
            "Each player privately decides how much to contribute",
            "The contributions are summed into the common pool",
            "The pool is multiplied by the growth factor",
            "The multiplied pool is divided equally among all players"
          ],
          explain: "Private decisions are pooled, the pool grows, and the result is split equally, which is why individual and group interests diverge."
        },
        {
          type: "mcq",
          q: "Why is the public goods game a social dilemma?",
          choices: [
            "The pool never grows, so contributing is pointless",
            "Only the highest contributor is allowed to earn a return",
            "Players cannot communicate at any stage",
            "The group is best off if everyone contributes fully, yet each individual earns more by contributing less"
          ],
          answer: 3,
          explain: "Collective and individual incentives conflict: full contribution is best for the group, but each person is individually better off holding back."
        },
        {
          type: "truefalse",
          q: "In a one-shot public goods game, the outcome that is best for the group overall is for everyone to contribute nothing.",
          answer: false,
          explain: "Full contribution maximizes the group's total payoff; contributing nothing is the selfish equilibrium, not the socially efficient outcome."
        }
      ]
    },
    {
      id: "l178",
      title: "The tragedy of the commons",
      intro: "Garrett Hardin's 1968 essay showed how rational individuals sharing a limited resource can collectively destroy it.",
      questions: [
        {
          type: "mcq",
          q: "Who wrote the influential 1968 essay 'The Tragedy of the Commons'?",
          choices: [
            "Garrett Hardin",
            "Elinor Ostrom",
            "Robert Axelrod",
            "John Maynard Smith"
          ],
          answer: 0,
          explain: "Ecologist Garrett Hardin published 'The Tragedy of the Commons' in 1968, framing shared-resource collapse as a structural problem."
        },
        {
          type: "fill",
          q: "Hardin's essay appeared in the journal ____ in 1968.",
          answer: "science",
          accept: ["science"],
          explain: "The essay was published in the journal Science in 1968 and became one of the most cited papers on collective resource use."
        },
        {
          type: "truefalse",
          q: "Hardin illustrated his argument with herders adding cattle to a shared pasture.",
          answer: true,
          explain: "His central image is a common pasture where each herder gains by adding animals until overgrazing ruins the shared land."
        },
        {
          type: "mcq",
          q: "In Hardin's logic, why does each herder keep adding animals to the shared pasture?",
          choices: [
            "They are legally required to graze a fixed number of animals",
            "They gain the full benefit of an extra animal but share the cost of overgrazing with everyone",
            "The pasture regrows faster the more it is grazed",
            "Adding animals lowers their own profit but helps neighbors"
          ],
          answer: 1,
          explain: "The private benefit of one more animal is captured entirely by the herder, while the cost of degradation is spread across all users, so each is driven to expand."
        },
        {
          type: "order",
          q: "Order the steps by which a commons collapses in Hardin's account.",
          items: [
            "A resource is open to all with no limits on use",
            "Each user adds more to capture private benefit",
            "The costs of overuse are spread across everyone",
            "The shared resource is depleted or ruined"
          ],
          explain: "Open access plus privatized benefits and socialized costs drives overuse until the resource collapses."
        },
        {
          type: "match",
          q: "Match each term from the commons debate to its meaning.",
          pairs: [
            ["Commons", "A resource open to all users"],
            ["Overgrazing", "Degradation caused by too many animals"],
            ["Privatization", "Assigning ownership as one proposed remedy"],
            ["Regulation", "Externally imposed limits on use"]
          ],
          explain: "Hardin argued the tragedy could be avoided by privatization or by 'mutual coercion, mutually agreed upon,' meaning regulation."
        },
        {
          type: "truefalse",
          q: "Elinor Ostrom later showed that communities can sometimes self-govern a commons without either privatization or top-down control.",
          answer: true,
          explain: "Ostrom's work, notably 'Governing the Commons' (1990), documented durable community rules for shared resources and earned her the 2009 Nobel in economics."
        }
      ]
    },
    {
      id: "l179",
      title: "Multiperson free-riding",
      intro: "As a cooperating group grows larger, each person's stake shrinks and the pull toward defection grows stronger.",
      questions: [
        {
          type: "mcq",
          q: "As the number of players in a public goods setting grows, sustaining cooperation typically becomes...",
          choices: [
            "Automatic, since more people means more contributions",
            "Harder, because free-riding grows more tempting and less visible",
            "Impossible only if players can talk to each other",
            "Irrelevant, because group size has no effect"
          ],
          answer: 1,
          explain: "Larger groups make each individual's contribution feel negligible and each defector harder to notice, so free-riding becomes more tempting."
        },
        {
          type: "truefalse",
          q: "In a larger group, the visible impact of any single person's contribution on the outcome tends to shrink.",
          answer: true,
          explain: "When benefits are shared among many, one person's contribution moves the outcome less, weakening the felt incentive to contribute."
        },
        {
          type: "fill",
          q: "Economist Mancur ____ argued in 1965 that larger groups find it harder to provide collective goods.",
          answer: "olson",
          accept: ["olson"],
          explain: "Mancur Olson's 'The Logic of Collective Action' (1965) argued that large, latent groups tend to under-provide public goods."
        },
        {
          type: "mcq",
          q: "According to the collective action view, why is free-riding more tempting in a large group?",
          choices: [
            "Each person's share of the benefit is smaller and a single defector is less noticeable",
            "Large groups always have stricter monitoring",
            "Contributions are worth more in large groups",
            "Punishment is easier to organize in large groups"
          ],
          answer: 0,
          explain: "In a large group your individual share of the benefit is diluted and your defection blends into the crowd, both of which reduce the incentive to contribute."
        },
        {
          type: "match",
          q: "Match each collective action concept to its description.",
          pairs: [
            ["Collective action problem", "Difficulty of getting a group to cooperate for shared benefit"],
            ["Mancur Olson", "Argued large groups under-provide public goods"],
            ["Latent group", "A large group that fails to organize itself"],
            ["Selective incentives", "Individual rewards or penalties that spur contribution"]
          ],
          explain: "Olson proposed selective incentives, targeted at individuals, as a way to overcome free-riding in large latent groups."
        },
        {
          type: "order",
          q: "Order these group sizes from the weakest to the strongest temptation to free-ride.",
          items: [
            "Small group where each contribution is strongly noticed",
            "Medium group where monitoring gets harder",
            "Large group where individual impact feels negligible",
            "Very large anonymous group where free-riding dominates"
          ],
          explain: "As group size rises, individual impact and visibility fall, so the temptation to free-ride grows from small to very large groups."
        },
        {
          type: "truefalse",
          q: "In a large, anonymous group the temptation to free-ride is reduced because more people are watching each individual.",
          answer: false,
          explain: "Larger groups usually make monitoring harder and defection less visible, which increases rather than reduces the temptation to free-ride."
        }
      ]
    },
    {
      id: "l180",
      title: "Altruistic punishment",
      intro: "People will pay out of their own pocket to punish free-riders, an act that costs the punisher but benefits the group.",
      questions: [
        {
          type: "mcq",
          q: "What does altruistic punishment mean?",
          choices: [
            "Rewarding cooperators with a bonus from the shared pool",
            "Paying a personal cost to reduce a free-rider's payoff, which benefits the group",
            "Punishing only after the game is fully over",
            "Removing a free-rider from the game at no cost to anyone"
          ],
          answer: 1,
          explain: "Altruistic punishment is costly to the punisher and yields no private material gain, but it deters free-riding and helps the group."
        },
        {
          type: "truefalse",
          q: "It is called 'altruistic' punishment because the punisher bears a cost while the benefit of more cooperation flows to the group.",
          answer: true,
          explain: "The punisher sacrifices personal payoff, and the gains, chiefly restored cooperation, are shared by everyone, which is why it counts as altruistic."
        },
        {
          type: "fill",
          q: "In experiments, punishment that reduces the punisher's own earnings is often called ____ punishment.",
          answer: "costly",
          accept: ["costly", "altruistic"],
          explain: "Because it lowers the punisher's own payoff, this behavior is described as costly (or altruistic) punishment."
        },
        {
          type: "mcq",
          q: "What is the typical immediate effect of punishing a free-rider on the punisher's own payoff?",
          choices: [
            "It rises, because the punisher takes the free-rider's money",
            "It stays exactly the same",
            "It falls, because the punisher pays a fee to impose the penalty",
            "It doubles as a reward for enforcing norms"
          ],
          answer: 2,
          explain: "Punishing usually requires the punisher to spend money to deduct more from the target, so the punisher's own immediate payoff goes down."
        },
        {
          type: "order",
          q: "Order the steps of an altruistic punishment episode.",
          items: [
            "A free-rider contributes little to the pool",
            "A cooperator observes the low contribution",
            "The cooperator pays a fee to punish the free-rider",
            "The free-rider's payoff is reduced"
          ],
          explain: "Punishment is triggered by observed free-riding, and the cooperator spends to lower the free-rider's earnings."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Altruistic punishment", "Costly sanctioning of a free-rider"],
            ["Free-rider", "Player who benefits without contributing"],
            ["Deterrence", "Threat of punishment raising future cooperation"],
            ["Strong reciprocity", "Rewarding cooperators and punishing defectors even at a cost"]
          ],
          explain: "Strong reciprocity, studied by Gintis, Bowles, and Fehr, describes people who reward cooperation and punish defection even when it is personally costly."
        },
        {
          type: "truefalse",
          q: "Punishment can raise group cooperation even when it lowers the punisher's own earnings.",
          answer: true,
          explain: "Experiments show cooperation can be sustained by costly punishment, so the deterrent effect works despite the private cost to punishers."
        }
      ]
    },
    {
      id: "l181",
      title: "The second-order free-rider problem",
      intro: "If punishing is costly, cooperators who skip that cost free-ride on the punishers, creating a puzzle about who enforces the rules.",
      questions: [
        {
          type: "mcq",
          q: "What is the second-order free-rider problem?",
          choices: [
            "Free-riders who contribute nothing to the public good",
            "Cooperators who contribute but refuse to pay the cost of punishing free-riders",
            "Players who punish twice as much as needed",
            "People who join the game only in the second round"
          ],
          answer: 1,
          explain: "Second-order free-riders do contribute to the public good but avoid the extra cost of punishing defectors, free-riding on those who do punish."
        },
        {
          type: "truefalse",
          q: "A second-order free-rider contributes to the public good but avoids paying to punish defectors.",
          answer: true,
          explain: "That is the defining trait: they cooperate on the primary task yet leave the costly enforcement to others."
        },
        {
          type: "fill",
          q: "Cooperators who leave the costly job of punishing to others are called ____-order free-riders.",
          answer: "second",
          accept: ["second", "2nd"],
          explain: "They free-ride at a second level, not on the public good itself but on the enforcement that protects it."
        },
        {
          type: "mcq",
          q: "Why is the second-order problem a puzzle for the evolution of punishment?",
          choices: [
            "Punishers always earn more than everyone else",
            "Non-punishing cooperators earn more than punishers, so punishment could be selected against",
            "Punishment has no effect on free-riders",
            "Second-order free-riders never contribute anything"
          ],
          answer: 1,
          explain: "Since punishing is costly, non-punishing cooperators out-earn punishers, so natural selection might erode the very punishment that sustains cooperation."
        },
        {
          type: "match",
          q: "Match each role to its behavior.",
          pairs: [
            ["First-order free-rider", "Fails to contribute to the public good"],
            ["Second-order free-rider", "Contributes but will not pay to punish"],
            ["Punisher", "Pays a cost to sanction defectors"],
            ["Higher-order punishment", "Sanctioning those who fail to punish"]
          ],
          explain: "The problem nests: free-riding on the good, then free-riding on enforcement, which higher-order punishment tries to address."
        },
        {
          type: "order",
          q: "Order the logic of the second-order free-rider problem.",
          items: [
            "Free-riders threaten the public good",
            "Punishers pay a cost to sanction free-riders",
            "Non-punishing cooperators avoid those enforcement costs",
            "Punishers are undercut by second-order free-riders"
          ],
          explain: "Punishers protect the group but bear a cost that non-punishing cooperators dodge, undermining the punishers over time."
        },
        {
          type: "truefalse",
          q: "One proposed solution is to also punish those who fail to punish, known as higher-order punishment.",
          answer: true,
          explain: "Adding sanctions for non-punishers can shore up enforcement, though it raises the question of who punishes at each further level."
        }
      ]
    },
    {
      id: "l182",
      title: "Fehr and Gachter experiments",
      intro: "Ernst Fehr and Simon Gachter showed experimentally that the option to punish keeps human cooperation from unraveling.",
      questions: [
        {
          type: "mcq",
          q: "In Fehr and Gachter's public goods experiments, cooperation was sustained when players could...",
          choices: [
            "Impose costly punishment on low contributors",
            "See only their own past earnings",
            "Play just a single round with no repetition",
            "Contribute anonymously with no feedback at all"
          ],
          answer: 0,
          explain: "When participants could pay to punish free-riders, contributions stayed high across rounds instead of collapsing."
        },
        {
          type: "fill",
          q: "Ernst Fehr and Simon ____ published influential public goods punishment experiments around 2000 to 2002.",
          answer: "gachter",
          accept: ["gachter", "gaechter", "gachters"],
          explain: "Simon Gachter co-authored the studies with Ernst Fehr showing that punishment sustains cooperation."
        },
        {
          type: "truefalse",
          q: "In their experiments, when punishment was NOT possible, contributions tended to decline over repeated rounds.",
          answer: true,
          explain: "Without a punishment option, cooperation decayed toward low levels as more players free-rode over successive rounds."
        },
        {
          type: "mcq",
          q: "When the punishment option WAS available, what happened to contributions across rounds?",
          choices: [
            "They fell to zero immediately",
            "They rose or remained high",
            "They became completely random",
            "They were unaffected by punishment"
          ],
          answer: 1,
          explain: "With costly punishment available, contributions increased or stayed high, because free-riders faced sanctions."
        },
        {
          type: "truefalse",
          q: "Fehr and Gachter's 2002 paper in Nature was titled 'Altruistic punishment in humans.'",
          answer: true,
          explain: "Their 2002 Nature paper, 'Altruistic punishment in humans,' reported that people punish free-riders even at a personal cost."
        },
        {
          type: "match",
          q: "Match each experimental element to its result or role.",
          pairs: [
            ["No-punishment condition", "Contributions decay toward low levels over rounds"],
            ["Punishment condition", "Contributions rise and stay high"],
            ["Ernst Fehr", "Co-author of the punishment experiments"],
            ["Free-rider targeting", "Punishment aimed mostly at low contributors"]
          ],
          explain: "The contrast between conditions, and the fact that punishment targeted low contributors, is the heart of their findings."
        },
        {
          type: "order",
          q: "Order the arc of the Fehr and Gachter finding.",
          items: [
            "A group plays public goods rounds without any punishment",
            "Contributions steadily decline",
            "A costly punishment option is introduced",
            "Contributions jump up and are maintained"
          ],
          explain: "Cooperation decayed under no-punishment play, then recovered sharply once punishment was allowed."
        }
      ]
    },
    {
      id: "l183",
      title: "Institutions and sanctioning",
      intro: "Beyond individuals acting alone, groups can build institutions, such as pool punishment, that enforce cooperation in a coordinated way.",
      questions: [
        {
          type: "mcq",
          q: "How does pool punishment differ from peer punishment?",
          choices: [
            "Pool punishment is done secretly by one player",
            "Members pay into a shared fund or institution that sanctions defectors, rather than punishing individually",
            "Pool punishment rewards defectors instead of sanctioning them",
            "There is no real difference between the two"
          ],
          answer: 1,
          explain: "Pool punishment pre-commits resources to a shared sanctioning institution, whereas peer punishment is carried out by individuals acting on their own."
        },
        {
          type: "truefalse",
          q: "Peer punishment is carried out by individuals on their own, while pool punishment is organized collectively in advance.",
          answer: true,
          explain: "Peer punishment is decentralized and spontaneous; pool punishment relies on a jointly funded institution set up beforehand."
        },
        {
          type: "fill",
          q: "A pre-committed shared sanctioning fund is an example of an ____ that enforces cooperation.",
          answer: "institution",
          accept: ["institution", "institutions"],
          explain: "Institutions are durable rules and structures, like a sanctioning pool, that coordinate and stabilize enforcement."
        },
        {
          type: "mcq",
          q: "What is an advantage of pool or institutional punishment?",
          choices: [
            "It never costs anyone anything",
            "It eliminates the need for any cooperation",
            "It provides stable, coordinated enforcement, even against second-order free-riders",
            "It guarantees no one will ever defect again"
          ],
          answer: 2,
          explain: "By committing resources in advance, institutions offer steady enforcement and can be designed to also sanction those who fail to contribute to punishment."
        },
        {
          type: "match",
          q: "Match each enforcement concept to its description.",
          pairs: [
            ["Peer punishment", "Individuals sanction defectors on their own"],
            ["Pool punishment", "A shared fund or institution sanctions defectors"],
            ["Elinor Ostrom", "Studied real institutions governing shared resources"],
            ["Graduated sanctions", "Penalties that escalate with repeated violations"]
          ],
          explain: "Ostrom's design principles for lasting commons management include monitoring and graduated sanctions, features of effective institutions."
        },
        {
          type: "order",
          q: "Order these Ostrom-style design principles for a well-governed commons.",
          items: [
            "Clearly define who may access the resource",
            "Match the rules to local conditions",
            "Monitor use to detect violations",
            "Apply graduated sanctions to rule-breakers"
          ],
          explain: "Ostrom found lasting institutions define boundaries, fit local conditions, monitor behavior, and escalate sanctions for repeat offenders."
        },
        {
          type: "truefalse",
          q: "Pool punishment can require paying maintenance costs even in periods when there are no defectors to punish.",
          answer: true,
          explain: "A standing sanctioning institution must be funded whether or not it is currently needed, a recognized drawback of pool punishment."
        }
      ]
    },
    {
      id: "l184",
      title: "Antisocial punishment",
      intro: "Punishment does not always help: when people sanction cooperators or retaliate against punishers, the gains from cooperation can be destroyed.",
      questions: [
        {
          type: "mcq",
          q: "What is antisocial punishment?",
          choices: [
            "Punishing high contributors or cooperators rather than free-riders",
            "Punishing only the lowest contributor in a group",
            "Refusing to punish anyone at all",
            "Rewarding cooperators with extra money"
          ],
          answer: 0,
          explain: "Antisocial punishment is the spiteful sanctioning of cooperators and high contributors, the opposite of punishing free-riders."
        },
        {
          type: "fill",
          q: "The 2008 Science study 'Antisocial Punishment Across Societies' was led by Benedikt Herrmann, Christian Thoni, and Simon ____.",
          answer: "gachter",
          accept: ["gachter", "gaechter"],
          explain: "Herrmann, Thoni, and Gachter documented antisocial punishment across many societies in their 2008 Science paper."
        },
        {
          type: "truefalse",
          q: "Antisocial punishment often takes the form of retaliation against those who previously punished you.",
          answer: true,
          explain: "Much antisocial punishment is revenge: free-riders strike back at the cooperators who had sanctioned them."
        },
        {
          type: "mcq",
          q: "What did Herrmann and colleagues (2008) find across the societies they studied?",
          choices: [
            "Antisocial punishment never occurred anywhere",
            "The amount of antisocial punishment varied by society and could wipe out the cooperative benefits of punishment",
            "Punishment always increased cooperation everywhere equally",
            "Only one society ever used punishment at all"
          ],
          answer: 1,
          explain: "They found antisocial punishment differed across societies and, where it was common, it eroded the cooperation-boosting effect of punishment."
        },
        {
          type: "truefalse",
          q: "Antisocial punishment always increases overall cooperation.",
          answer: false,
          explain: "Antisocial punishment tends to undermine cooperation, since sanctioning cooperators and retaliating discourages contributing."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Antisocial punishment", "Sanctioning cooperators or high contributors"],
            ["Retaliation", "Punishing those who punished you"],
            ["Herrmann et al. 2008", "Cross-societal study published in Science"],
            ["Norm erosion", "Cooperation gains destroyed by spiteful sanctions"]
          ],
          explain: "These terms capture how punishment can be turned against cooperation itself, eroding the norms it is meant to protect."
        },
        {
          type: "order",
          q: "Order how antisocial punishment can break cooperation.",
          items: [
            "A cooperator punishes a free-rider",
            "The free-rider retaliates by punishing the cooperator",
            "Punishment costs escalate without raising contributions",
            "Cooperation collapses instead of rising"
          ],
          explain: "Retaliatory, antisocial punishment turns sanctioning into a costly feud that suppresses rather than restores cooperation."
        }
      ]
    }
  ]
});
