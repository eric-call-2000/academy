window.ACADEMY.addUnit("egt", {
  id: "unit-14",
  title: "Reciprocal Altruism",
  color: "#3b74e0",
  icon: "🤝",
  description: "Explains how cooperation can evolve between unrelated individuals when favors given now are reliably returned later.",
  lessons: [
    {
      id: "l105",
      title: "Trivers 1971",
      intro: "In 1971 Robert Trivers showed how natural selection can favor altruism between unrelated individuals when favors are reliably returned.",
      questions: [
        { type: "mcq", q: "Who introduced the theory of reciprocal altruism in a landmark 1971 paper?", choices: ["Robert Trivers", "William Hamilton", "John Maynard Smith", "George Price"], answer: 0, explain: "Robert Trivers published 'The Evolution of Reciprocal Altruism' in 1971, formalizing cooperation between non-relatives." },
        { type: "truefalse", q: "Reciprocal altruism explains cooperation only among close genetic relatives.", answer: false, explain: "It specifically explains cooperation between unrelated individuals; kin selection is the theory that covers relatives." },
        { type: "fill", q: "Trivers argued a costly act can evolve if the recipient later ____ the favor.", answer: "returns", accept: ["returns", "reciprocates", "repays", "return"], explain: "The system works because helpers are later repaid, so both partners gain across repeated exchanges." },
        { type: "mcq", q: "In which journal did Trivers publish the 1971 theory?", choices: ["Nature", "The Quarterly Review of Biology", "Science", "The American Naturalist"], answer: 1, explain: "'The Evolution of Reciprocal Altruism' appeared in The Quarterly Review of Biology in 1971." },
        { type: "match", q: "Match each idea to its description.", pairs: [["Reciprocal altruism", "Aiding unrelated others who later return aid"], ["Kin selection", "Aiding relatives who share copies of your genes"], ["Robert Trivers", "Biologist who formalized reciprocity in 1971"]], explain: "Trivers' reciprocity complements Hamilton's kin selection by covering cooperation among non-relatives." },
        { type: "order", q: "Order the stages of a single reciprocal altruism exchange.", items: ["One individual pays a cost to help another", "Time passes", "The former recipient helps the original donor"], explain: "A helper pays first, and the favor is returned later, giving both a net gain over time." },
        { type: "mcq", q: "Why is reciprocal altruism considered altruistic at the moment it occurs?", choices: ["The helper gains immediately", "The helper pays a short-term cost before any return", "It only happens among kin", "It requires no cost at all"], answer: 1, explain: "At the instant of helping the actor bears a real cost; the benefit arrives only later when the favor is repaid." }
      ]
    },
    {
      id: "l106",
      title: "Cost now, benefit later",
      intro: "Reciprocal altruism pays because a small cost paid now buys a larger benefit returned later.",
      questions: [
        { type: "mcq", q: "For reciprocal altruism to be favored, the cost to the giver should be ____ the benefit to the receiver.", choices: ["larger than", "smaller than", "equal to", "unrelated to"], answer: 1, explain: "When the giver's cost is smaller than the recipient's benefit, returned favors leave both partners ahead." },
        { type: "truefalse", q: "In reciprocal altruism the benefit to the actor is delayed rather than immediate.", answer: true, explain: "The actor pays now and is repaid later; the mutual gain is spread out over time." },
        { type: "fill", q: "Because the payback comes later, reciprocity depends on a ____ relationship rather than a one-time meeting.", answer: "repeated", accept: ["repeated", "ongoing", "long-term", "lasting", "continuing"], explain: "Only repeated interaction lets the delayed benefit actually be collected." },
        { type: "order", q: "Order these events by time in a reciprocal exchange.", items: ["Donor pays a small cost today", "Recipient enjoys a large benefit today", "Later, roles reverse and the debt is repaid"], explain: "A cheap favor now yields a valuable return later, netting both partners a gain." },
        { type: "mcq", q: "Why can a small cost now be worth a large benefit later?", choices: ["A resource in surplus for the donor can be a lifesaver for a partner in need", "Costs are always zero", "Benefits shrink over time", "Partners never meet again"], answer: 0, explain: "When a resource is cheap for the donor but critical for the recipient, the trade is highly efficient for both." },
        { type: "truefalse", q: "If two partners never interact again, delayed repayment cannot occur, so reciprocity breaks down.", answer: true, explain: "Without a future meeting there is no chance to collect the return, so the incentive to help disappears." },
        { type: "match", q: "Match each term to its role in delayed mutual gain.", pairs: [["Immediate cost", "The price the helper pays up front"], ["Delayed benefit", "The larger return collected in the future"], ["Net gain", "Benefit minus cost, positive for both over time"]], explain: "Reciprocity is favored when the delayed benefit outweighs the immediate cost for each partner." }
      ]
    },
    {
      id: "l107",
      title: "Requirements for reciprocity",
      intro: "Reciprocity can only evolve under specific conditions: partners must meet repeatedly and be able to recognize one another.",
      questions: [
        { type: "mcq", q: "Which condition is essential for reciprocal altruism to evolve?", choices: ["Partners meet only once", "Partners repeatedly interact over time", "Partners are anonymous", "Partners are always relatives"], answer: 1, explain: "Repeated interaction is required so that a returned favor can eventually be collected." },
        { type: "truefalse", q: "Reciprocal altruism requires individuals to recognize and remember specific partners.", answer: true, explain: "You must know who helped you in order to selectively return favors and withhold help from cheats." },
        { type: "fill", q: "A short lifespan and high ____ reduce the chance partners meet again, making reciprocity harder to evolve.", answer: "dispersal", accept: ["dispersal", "mobility", "turnover"], explain: "Trivers noted that long life and low dispersal keep the same individuals in contact, enabling repayment." },
        { type: "match", q: "Match each Trivers condition to why it matters.", pairs: [["Repeated meetings", "Give chances for favors to be returned"], ["Individual recognition", "Lets an animal target the right partner"], ["Long lifespan", "Keeps partners available to reciprocate"]], explain: "Trivers argued these life-history and cognitive traits together make reciprocity feasible." },
        { type: "order", q: "Order the requirements as a chain that enables reciprocity.", items: ["Individuals live long and stay near each other", "They meet the same partners repeatedly", "They recognize and remember who cooperated"], explain: "Longevity and low dispersal produce repeated meetings, and recognition lets favors be tracked." },
        { type: "mcq", q: "Why is individual recognition necessary for reciprocity?", choices: ["To reward past cooperators and stop aiding defectors", "To increase dispersal", "To shorten lifespan", "To keep partners anonymous"], answer: 0, explain: "Recognition lets an animal repay the right individuals and cut off cheaters." },
        { type: "truefalse", q: "Reciprocal altruism works best in species where individuals rarely encounter the same partner twice.", answer: false, explain: "It works best when the same individuals meet repeatedly, so that debts can actually be repaid." }
      ]
    },
    {
      id: "l108",
      title: "Vampire bats sharing blood",
      intro: "Vampire bats provide a textbook example of reciprocity: well-fed bats regurgitate blood to hungry roost-mates.",
      questions: [
        { type: "mcq", q: "Which biologist documented reciprocal blood sharing in vampire bats in 1984?", choices: ["Gerald Wilkinson", "Robert Trivers", "Robert Axelrod", "Amotz Zahavi"], answer: 0, explain: "Gerald Wilkinson's 1984 study in Nature described reciprocal food sharing in the common vampire bat." },
        { type: "truefalse", q: "Vampire bats share food by regurgitating blood to roost-mates that failed to feed.", answer: true, explain: "A fed bat brings up part of its blood meal for a hungry companion, who might otherwise starve." },
        { type: "fill", q: "A vampire bat can starve after only about ____ nights without a blood meal.", answer: "two", accept: ["two", "2", "three", "3", "2-3", "two to three"], explain: "Vampire bats have very high metabolic needs and can die after roughly two to three nights without feeding, which makes shared blood extremely valuable." },
        { type: "mcq", q: "What best predicted which bats shared blood with each other?", choices: ["Random chance", "Past sharing and repeated association", "Body size only", "Fur color"], answer: 1, explain: "Bats preferentially fed those who had fed them before and with whom they associated, consistent with reciprocity (kinship also played a role)." },
        { type: "order", q: "Order the reciprocal blood-sharing sequence.", items: ["A bat returns to the roost without a meal", "A well-fed roost-mate regurgitates blood to it", "On a later night the roles may reverse"], explain: "Sharing rescues a hungry bat now and is repaid when fortunes reverse later." },
        { type: "truefalse", q: "Vampire bats are more likely to give blood to individuals that have previously helped them.", answer: true, explain: "Wilkinson found sharing was directed toward past donors, a hallmark of direct reciprocity." },
        { type: "match", q: "Match each fact about the vampire bat case.", pairs: [["Species", "Common vampire bat, Desmodus rotundus"], ["Behavior", "Regurgitating blood to hungry roost-mates"], ["Wilkinson 1984", "The Nature study demonstrating reciprocal food sharing"]], explain: "This study is a classic real-world demonstration of reciprocal altruism in a wild mammal." }
      ]
    },
    {
      id: "l109",
      title: "Cleaner fish mutualism",
      intro: "Cleaner fish and their clients show cooperation between different species: cleaners eat parasites while clients get cleaned.",
      questions: [
        { type: "mcq", q: "What does the cleaner wrasse gain from a client fish?", choices: ["A meal of parasites and dead tissue", "Shelter inside the client", "Protection from currents", "Nothing at all"], answer: 0, explain: "Cleaners feed on ectoparasites and dead skin removed from the client, so cleaning provides them a meal." },
        { type: "fill", q: "The client fish benefits mainly by having its ____ removed by the cleaner.", answer: "parasites", accept: ["parasites", "ectoparasites", "parasite"], explain: "Clients visit cleaning stations to have ectoparasites and dead tissue removed from their bodies." },
        { type: "truefalse", q: "Cleaner fish mutualism is an example of cooperation between two different species.", answer: true, explain: "It is interspecific cooperation: a cleaner wrasse and a different client species each benefit from the exchange." },
        { type: "mcq", q: "How can a cleaner fish 'cheat' its client?", choices: ["By hiding from clients", "By biting off the client's healthy mucus or scales", "By eating other cleaners", "By refusing to swim"], answer: 1, explain: "Cleaners occasionally cheat by biting living mucus, which they prefer over parasites, at the client's expense." },
        { type: "truefalse", q: "Client fish have no way to respond when a cleaner cheats them.", answer: false, explain: "Clients punish cheating cleaners by chasing them or by switching to a different cleaning station." },
        { type: "match", q: "Match each partner or behavior in the cleaning mutualism.", pairs: [["Cleaner wrasse", "Removes and eats parasites from clients"], ["Client fish", "Presents itself and refrains from eating the cleaner"], ["Cheating", "Cleaner biting healthy client tissue"]], explain: "The mutualism stays stable because clients can punish or avoid cheaters." },
        { type: "order", q: "Order a typical cleaning-station interaction.", items: ["A client visits the cleaner's station", "The cleaner removes parasites from the client", "The client leaves cleaned and the cleaner is fed"], explain: "Both partners end up better off, which sustains cooperation across species." }
      ]
    },
    {
      id: "l110",
      title: "Direct reciprocity defined",
      intro: "Direct reciprocity is the simplest form of reciprocity: you help those who have helped you.",
      questions: [
        { type: "mcq", q: "Direct reciprocity is best summarized as:", choices: ["Help anyone regardless of history", "Help those who have helped you", "Help only relatives", "Never help"], answer: 1, explain: "Direct reciprocity means aiding partners who previously aided you, based on your shared history with them." },
        { type: "truefalse", q: "In direct reciprocity, the same two individuals repeatedly exchange help.", answer: true, explain: "It relies on repeated encounters between the same pair, unlike reputation-based indirect reciprocity." },
        { type: "fill", q: "Direct reciprocity contrasts with ____ reciprocity, where you help someone because of their reputation.", answer: "indirect", accept: ["indirect"], explain: "Indirect reciprocity uses third-party reputation; direct reciprocity uses your own experience with the partner." },
        { type: "mcq", q: "Which strategy embodies direct reciprocity in the repeated Prisoner's Dilemma?", choices: ["Always defect", "Tit-for-tat", "Random play", "Always cooperate blindly"], answer: 1, explain: "Tit-for-tat cooperates first, then copies the partner's last move, rewarding help and answering defection." },
        { type: "match", q: "Match the two forms of reciprocity and a related rule.", pairs: [["Direct reciprocity", "I help you because you helped me"], ["Indirect reciprocity", "I help you because you helped others"], ["Tit-for-tat", "A rule that returns your partner's last action"]], explain: "Direct reciprocity is partner-specific, while indirect reciprocity works through reputation." },
        { type: "order", q: "Order a direct-reciprocity interaction using tit-for-tat.", items: ["You cooperate on the first meeting", "Your partner cooperates in return", "You keep cooperating as long as they do"], explain: "Tit-for-tat starts kind and then mirrors the partner, sustaining mutual help." },
        { type: "truefalse", q: "Under direct reciprocity you decide how to treat a partner based on a third party's opinion.", answer: false, explain: "That describes indirect reciprocity; direct reciprocity uses your own past experience with that specific partner." }
      ]
    },
    {
      id: "l111",
      title: "Memory and recognition demands",
      intro: "Tracking who cooperated and who cheated demands memory and the ability to recognize individuals.",
      questions: [
        { type: "mcq", q: "Why does direct reciprocity require good memory?", choices: ["To recall which partners cooperated or defected", "To count parasites", "To navigate long distances", "To grow larger"], answer: 0, explain: "An animal must remember each partner's past behavior to decide whether to help that partner again." },
        { type: "truefalse", q: "Reciprocal altruism places heavier cognitive demands on animals than simple kin-directed helping.", answer: true, explain: "Reciprocity requires recognizing individuals and remembering interactions, a bigger cognitive burden than aiding any relative." },
        { type: "fill", q: "To repay the right partner, an animal must first ____ that individual among many others.", answer: "recognize", accept: ["recognize", "identify", "recognise"], explain: "Individual recognition lets the animal match a returned favor to the correct past cooperator." },
        { type: "match", q: "Match each cognitive ability to its role in reciprocity.", pairs: [["Individual recognition", "Telling one partner apart from another"], ["Memory", "Storing who helped or cheated in the past"], ["Scorekeeping", "Updating a partner's standing over time"]], explain: "Together these abilities let an animal reward cooperators and avoid cheats." },
        { type: "mcq", q: "Which type of species is most likely to sustain reciprocal altruism?", choices: ["Species with poor memory and anonymous groups", "Species with strong recognition and memory in stable groups", "Species that meet strangers only once", "Species that never interact"], answer: 1, explain: "Reciprocity needs stable groups plus the cognition to recognize and remember partners." },
        { type: "order", q: "Order the cognitive steps behind returning a favor.", items: ["Recognize the individual in front of you", "Recall your past interactions with them", "Decide whether to help based on that history"], explain: "Recognition and memory together feed the decision to reciprocate or to withhold help." },
        { type: "truefalse", q: "Because reciprocity needs only simple reflexes, it evolves easily in every species.", answer: false, explain: "It requires demanding cognition, so it is limited to species that can recognize and remember their partners." }
      ]
    },
    {
      id: "l112",
      title: "Cheating and enforcement",
      intro: "Reciprocity survives cheaters only because cooperators can detect defectors and cut off their help.",
      questions: [
        { type: "mcq", q: "How is reciprocal altruism protected against cheaters?", choices: ["By helping cheaters more", "By withdrawing help from those who fail to reciprocate", "By ignoring all partners", "By giving at random"], answer: 1, explain: "Conditional cooperation means stopping aid to defectors, which removes the payoff from cheating." },
        { type: "truefalse", q: "If cheaters could exploit helpers with no consequences, reciprocal altruism would collapse.", answer: true, explain: "Unpunished cheating out-competes cooperation, so some form of enforcement is essential for reciprocity to persist." },
        { type: "fill", q: "A cheater in reciprocity is one who accepts help but fails to ____ it.", answer: "return", accept: ["return", "reciprocate", "repay"], explain: "Defectors take the benefit without paying the cost of returning it, undermining the exchange." },
        { type: "order", q: "Order how tit-for-tat handles a defector.", items: ["Your partner defects instead of helping", "On the next meeting you withhold help too", "Your partner can restore cooperation by helping again"], explain: "Tit-for-tat punishes defection immediately but forgives once the partner cooperates again." },
        { type: "mcq", q: "Which response did Trivers propose helps enforce reciprocity in humans?", choices: ["Moralistic aggression toward cheaters", "Indifference to cheaters", "Rewarding cheaters", "Random punishment of helpers"], answer: 0, explain: "Trivers suggested moralistic aggression, or anger at cheats, evolved to enforce fair reciprocity among humans." },
        { type: "match", q: "Match each enforcement mechanism to its meaning.", pairs: [["Conditional cooperation", "Helping only partners who reciprocate"], ["Partner switching", "Leaving a cheater for a better partner"], ["Moralistic aggression", "Punitive anger directed at cheaters"]], explain: "These mechanisms raise the cost of cheating and so stabilize cooperation." },
        { type: "truefalse", q: "The best way to sustain reciprocity is to keep helping partners no matter how often they cheat.", answer: false, explain: "Unconditional helping rewards cheaters; sustaining reciprocity requires withdrawing help from persistent defectors." }
      ]
    }
  ]
});
