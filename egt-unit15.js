window.ACADEMY.addUnit("egt", {
  id: "unit-15",
  title: "Indirect Reciprocity and Reputation",
  color: "#3b74e0",
  icon: "👁️",
  description: "How cooperation survives among strangers when a public reputation, not a repeated pairing, decides who gets helped.",
  lessons: [
    {
      id: "l113",
      title: "The indirect reciprocity problem",
      intro: "In large groups you often help people you may never meet again, so cooperation needs a mechanism beyond repeated pairings.",
      questions: [
        {
          type: "mcq",
          q: "What distinguishes indirect reciprocity from direct reciprocity?",
          choices: [
            "Both require you to meet the same partner many times",
            "Indirect reciprocity only works between close relatives",
            "Direct reciprocity depends on repeated meetings with the same partner, while indirect reciprocity does not",
            "Indirect reciprocity forbids ever helping strangers"
          ],
          answer: 2,
          explain: "Direct reciprocity ('I help you, you help me') needs repeated encounters with the same individual. Indirect reciprocity lets cooperation work even among people who may never meet again."
        },
        {
          type: "truefalse",
          q: "In a large population, you may help someone you will likely never encounter again.",
          answer: true,
          explain: "That is exactly the situation indirect reciprocity addresses: benefits flow through the group rather than back from the same partner."
        },
        {
          type: "fill",
          q: "The slogan that captures indirect reciprocity is 'I help you, and ____ helps me.'",
          answer: "someone",
          accept: ["someone", "someone else", "a third party", "third party"],
          explain: "Unlike direct reciprocity's 'I help you, you help me,' in indirect reciprocity a third party returns the favor."
        },
        {
          type: "order",
          q: "Put the reasoning behind the indirect reciprocity problem in order.",
          items: [
            "A stranger needs help",
            "You may never meet this stranger again",
            "Direct payback from them is unlikely",
            "Reputation gives a reason to help anyway"
          ],
          explain: "The puzzle is why help when a direct return is unlikely; reputation is what resolves it."
        },
        {
          type: "match",
          q: "Match each idea to its description.",
          pairs: [
            ["Direct reciprocity", "Cooperation repaid by the same partner over repeated meetings"],
            ["Indirect reciprocity", "Cooperation repaid by third parties who track your behavior"],
            ["The core puzzle", "Why help someone who cannot repay you directly"]
          ],
          explain: "Indirect reciprocity solves cooperation among strangers by routing repayment through others."
        },
        {
          type: "truefalse",
          q: "Indirect reciprocity requires that the exact person you help must be the one who repays you.",
          answer: false,
          explain: "The whole point is that repayment comes from others in the group, guided by your reputation."
        },
        {
          type: "mcq",
          q: "Why can direct reciprocity alone fail to sustain cooperation in a large, fluid group?",
          choices: [
            "People in large groups are always relatives",
            "Encounters are often one-shot, so the same partner rarely returns to repay you",
            "Large groups have no way to communicate at all",
            "Direct reciprocity is banned in large groups"
          ],
          answer: 1,
          explain: "With many people and rare repeat meetings, tit-for-tat with the same partner breaks down, so reputation-based indirect reciprocity is needed."
        }
      ]
    },
    {
      id: "l114",
      title: "Nowak and Sigmund image scoring",
      intro: "In 1998 Martin Nowak and Karl Sigmund modeled reputation as a public 'image score' that rises when you help and falls when you refuse.",
      questions: [
        {
          type: "mcq",
          q: "Who published the influential image-scoring model of indirect reciprocity in Nature in 1998?",
          choices: [
            "Robert Trivers and W. D. Hamilton",
            "Martin Nowak and Karl Sigmund",
            "John Maynard Smith and George Price",
            "Robert Axelrod and William Hamilton"
          ],
          answer: 1,
          explain: "Nowak and Sigmund's 1998 Nature paper 'Evolution of indirect reciprocity by image scoring' launched the modern study of reputation-based cooperation."
        },
        {
          type: "fill",
          q: "In the model, each player carries a public number called an ____ score.",
          answer: "image",
          accept: ["image"],
          explain: "The image score is a public reputation others can see and use to decide whether to help you."
        },
        {
          type: "truefalse",
          q: "In image scoring, helping another player raises your image score.",
          answer: true,
          explain: "Cooperating (paying a cost to help) increases your image; refusing lowers it."
        },
        {
          type: "mcq",
          q: "In the classic image-scoring model, what happens to your score when you refuse to help?",
          choices: [
            "It rises",
            "It stays exactly the same forever",
            "It falls",
            "It doubles"
          ],
          answer: 2,
          explain: "Refusal signals stinginess and lowers your public image, making others less willing to help you later."
        },
        {
          type: "order",
          q: "Trace how a discriminating donor uses image scores in one round.",
          items: [
            "A donor is paired with a recipient",
            "The donor checks the recipient's image score",
            "The donor helps only if the score meets a threshold",
            "Onlookers update the donor's own image score"
          ],
          explain: "Discriminators condition help on the recipient's public score, and the donor's own choice then changes the donor's reputation."
        },
        {
          type: "match",
          q: "Match each action to its effect on the image score.",
          pairs: [
            ["Helping a recipient", "Your image score goes up"],
            ["Refusing to help", "Your image score goes down"],
            ["Being a discriminator", "You help only those whose score clears a threshold"]
          ],
          explain: "Image scoring makes reputation a running tally of generosity that others read."
        },
        {
          type: "truefalse",
          q: "The image score is private information that only the individual can see.",
          answer: false,
          explain: "The image score is a PUBLIC reputation; its visibility is what lets others reward or punish behavior."
        }
      ]
    },
    {
      id: "l115",
      title: "Helping raises your image",
      intro: "Acts of help that others can see build a good reputation, which makes future partners more willing to help you.",
      questions: [
        {
          type: "truefalse",
          q: "Only help that others can observe (or hear about) can improve your reputation.",
          answer: true,
          explain: "Reputation depends on information; an unobserved good deed leaves your public image unchanged."
        },
        {
          type: "mcq",
          q: "Why does a good image score make others more likely to help you?",
          choices: [
            "A high score forces them to help by law",
            "A high score marks you as a cooperator worth helping, so discriminators assist you",
            "A high score makes you invisible to cheaters",
            "A high score pays them cash directly"
          ],
          answer: 1,
          explain: "Discriminating players help those with good reputations, so a high image score attracts future help."
        },
        {
          type: "fill",
          q: "Generosity only boosts reputation when it is ____ by others.",
          answer: "observed",
          accept: ["observed", "seen", "witnessed"],
          explain: "Reputation runs on information: an unseen good deed carries no reputational payoff."
        },
        {
          type: "mcq",
          q: "A player who helps generously in full view of the group can expect what?",
          choices: [
            "A falling image score",
            "To be excluded from all future rounds",
            "A rising image score and more help returned later",
            "No change at all"
          ],
          answer: 2,
          explain: "Visible generosity raises the image score, and a higher score draws help from discriminators in later rounds."
        },
        {
          type: "order",
          q: "Put the reputation feedback loop in order.",
          items: [
            "You help someone while others watch",
            "Your image score rises",
            "Discriminators notice your high score",
            "They choose to help you in a later round"
          ],
          explain: "Visible help feeds a loop that converts reputation into future benefits."
        },
        {
          type: "match",
          q: "Match cause to effect in reputation building.",
          pairs: [
            ["Helping in public", "Reputation improves"],
            ["Helping in secret", "Reputation unchanged"],
            ["High reputation", "Attracts future help"]
          ],
          explain: "Observability is the hinge: the same act helps your image only when others register it."
        },
        {
          type: "truefalse",
          q: "A generous act done where no one can observe it reliably raises your image score.",
          answer: false,
          explain: "Without an audience or word spreading, the deed produces no reputational gain."
        }
      ]
    },
    {
      id: "l116",
      title: "I help you, someone helps me",
      intro: "In indirect reciprocity the return favor flows through a chain: you help one person, and a different observer later helps you.",
      questions: [
        {
          type: "fill",
          q: "In downstream indirect reciprocity, the person who repays you is usually a ____ party, not the one you helped.",
          answer: "third",
          accept: ["third", "third-party", "different"],
          explain: "Benefit flows through the group: an observing third party, not the original recipient, returns the favor."
        },
        {
          type: "mcq",
          q: "Which phrase best captures the indirect chain of benefit?",
          choices: [
            "I help you, you help me",
            "I help you, someone helps me",
            "I help you, no one helps anyone",
            "You help me before I help you"
          ],
          answer: 1,
          explain: "The signature of indirect reciprocity is that a third party, not the original recipient, provides the return help."
        },
        {
          type: "truefalse",
          q: "In the indirect chain, the help you receive can come from someone who merely observed your good deed.",
          answer: true,
          explain: "Observers use your reputation to decide to help you, so a return can come from a bystander rather than the recipient."
        },
        {
          type: "order",
          q: "Order one full indirect chain of benefit.",
          items: [
            "You help person A",
            "Person B observes your generosity",
            "Your reputation rises",
            "Later, person B helps you"
          ],
          explain: "The loop closes through a third party (B) guided by your reputation, not through A repaying you."
        },
        {
          type: "mcq",
          q: "How does 'downstream' indirect reciprocity differ from 'upstream' (pay-it-forward) reciprocity?",
          choices: [
            "Downstream: you help after being observed and are repaid by observers; upstream: you help because you were just helped",
            "They are exactly the same thing",
            "Downstream only occurs between siblings",
            "Upstream requires money to change hands"
          ],
          answer: 0,
          explain: "Downstream (image-based) reciprocity is repaid by observers who track reputation; upstream reciprocity is passing on help you just received to someone new."
        },
        {
          type: "match",
          q: "Match each role to what they do in the chain.",
          pairs: [
            ["Donor", "Pays a cost to help another"],
            ["Recipient", "Receives help but need not repay directly"],
            ["Observer", "Watches, updates reputation, and may repay the donor later"]
          ],
          explain: "The observer is the extra role that makes reciprocity 'indirect.'"
        },
        {
          type: "truefalse",
          q: "Indirect reciprocity means the recipient must always directly repay the exact person who helped them.",
          answer: false,
          explain: "Repayment is routed through reputation to third parties, which is precisely what makes it indirect."
        }
      ]
    },
    {
      id: "l117",
      title: "Reputation as social capital",
      intro: "A good reputation is like an asset you invest in now and draw on later, functioning as social capital.",
      questions: [
        {
          type: "mcq",
          q: "Calling reputation 'social capital' means it is best understood as:",
          choices: [
            "A tax you must pay each round",
            "An asset built by past behavior that yields future benefits",
            "A one-time reward with no lasting value",
            "A punishment for cooperating"
          ],
          answer: 1,
          explain: "Like capital, a reputation is accumulated through investment (helping) and pays dividends later (receiving help)."
        },
        {
          type: "truefalse",
          q: "Building a good reputation can involve paying short-term costs for long-term gains.",
          answer: true,
          explain: "Helping is costly now, but the resulting good standing brings help back later, which is investment logic."
        },
        {
          type: "fill",
          q: "Reputation acts as social ____, an asset you build now and draw on later.",
          answer: "capital",
          accept: ["capital"],
          explain: "The 'social capital' metaphor frames reputation as a resource accumulated and spent over time."
        },
        {
          type: "order",
          q: "Order how reputation works as an investment.",
          items: [
            "Pay a cost to help others now",
            "Earn a good reputation",
            "Others recognize your standing",
            "Collect help when you need it later"
          ],
          explain: "Reputation converts present generosity into future security, much like saving and withdrawing."
        },
        {
          type: "match",
          q: "Match each financial term to its reputation counterpart.",
          pairs: [
            ["Investment", "Helping others at a cost today"],
            ["Asset", "The good reputation you have accumulated"],
            ["Dividend", "Help returned to you later"]
          ],
          explain: "Reputation behaves like capital: invested, held, and paid out."
        },
        {
          type: "mcq",
          q: "Someone with a strong reputation who suddenly starts refusing to help will most likely:",
          choices: [
            "Keep their reputation forever regardless",
            "Erode their standing and lose future help",
            "Instantly gain an even higher score",
            "Become invisible to the group"
          ],
          answer: 1,
          explain: "Reputation is maintained by ongoing behavior; stop investing and the asset depreciates, costing future help."
        },
        {
          type: "truefalse",
          q: "Once earned, a good reputation lasts permanently no matter how you behave afterward.",
          answer: false,
          explain: "Reputation must be maintained; repeated refusals depreciate this social capital."
        }
      ]
    },
    {
      id: "l118",
      title: "Assessment rules and moral judgment",
      intro: "How onlookers judge an action, not just the action itself, shapes which reputations get assigned; standing, shunning, and stern-judging are three such rules.",
      questions: [
        {
          type: "mcq",
          q: "An 'assessment rule' (social norm) in indirect reciprocity determines:",
          choices: [
            "How fast players move",
            "What reputation an observer assigns to a donor's action",
            "The market price of helping",
            "How many players are in the game"
          ],
          answer: 1,
          explain: "Assessment rules map an action, and its context, onto a good or bad reputation for the donor."
        },
        {
          type: "truefalse",
          q: "Under the 'standing' rule (Sugden, 1986), refusing to help someone who already has a bad reputation does NOT damage your own standing.",
          answer: true,
          explain: "Standing treats justified refusal as legitimate, so you keep good standing when you decline to help a bad-standing recipient."
        },
        {
          type: "match",
          q: "Match each assessment rule to how it judges a donor.",
          pairs: [
            ["Standing", "You stay good unless you refuse someone in good standing"],
            ["Stern-judging", "Helping a bad person is judged bad; refusing them is judged good"],
            ["Shunning", "Any refusal marks you bad, even a justified one"]
          ],
          explain: "These norms differ mainly in how they treat justified defection against a bad-reputation recipient."
        },
        {
          type: "fill",
          q: "A rule that judges an action using the recipient's reputation as well, not just the action, is a ____-order assessment rule.",
          answer: "second",
          accept: ["second", "second-order", "2nd"],
          explain: "First-order rules look only at the action; second-order rules also weigh the recipient's reputation, letting 'justified' defection be recognized."
        },
        {
          type: "mcq",
          q: "Why does simple image scoring (a first-order rule) struggle compared with 'standing'?",
          choices: [
            "It cannot count above ten",
            "It marks down anyone who refuses to help, even when refusing a bad person was justified",
            "It requires players to be relatives",
            "It ignores helping entirely"
          ],
          answer: 1,
          explain: "First-order scoring penalizes all refusals equally; standing (second-order) forgives justified refusal of a bad-reputation recipient."
        },
        {
          type: "truefalse",
          q: "'Shunning' can perform poorly because it assigns a bad reputation even to someone who justifiably refused to help a bad person.",
          answer: true,
          explain: "By punishing justified defection, shunning weakens the incentive to withhold help from cheaters, undermining cooperation."
        },
        {
          type: "order",
          q: "Order assessment rules from the least to the most information they use.",
          items: [
            "First-order: judge only the action",
            "Second-order: judge the action plus the recipient's reputation",
            "Third-order: judge the action, the recipient's reputation, and the donor's reputation"
          ],
          explain: "Higher-order rules use more context, which lets observers distinguish justified from unjustified defection."
        }
      ]
    },
    {
      id: "l119",
      title: "Gossip and information spread",
      intro: "Reputation systems need information to travel; human language and gossip let reputations spread far beyond what any one person can directly observe.",
      questions: [
        {
          type: "mcq",
          q: "Why is language and gossip important for indirect reciprocity in large groups?",
          choices: [
            "It replaces the need to ever help anyone",
            "It spreads reputational information beyond those who directly witnessed an act",
            "It keeps reputations secret",
            "It slows cooperation down"
          ],
          answer: 1,
          explain: "Direct observation is limited; gossip transmits reputations across the group so many people can act on them."
        },
        {
          type: "truefalse",
          q: "Gossip can substitute for direct observation as a source of reputation information.",
          answer: true,
          explain: "Experiments (Sommerfeld and colleagues, 2007) show people use gossip about others' past behavior much as they use firsthand observation."
        },
        {
          type: "fill",
          q: "Human ____ lets reputations spread to people who never witnessed the original act.",
          answer: "language",
          accept: ["language", "gossip", "speech"],
          explain: "Language and gossip scale reputation systems far beyond the reach of direct observation."
        },
        {
          type: "match",
          q: "Match each information source to its reach.",
          pairs: [
            ["Direct observation", "Limited to those who personally saw the act"],
            ["Gossip", "Reaches many who did not witness the act"],
            ["No information sharing", "Reputation cannot form at all"]
          ],
          explain: "Gossip dramatically extends how far a reputation can travel."
        },
        {
          type: "mcq",
          q: "A limitation or danger of relying on gossip is that:",
          choices: [
            "It always conveys the perfect truth",
            "Information can be distorted, dishonest, or spread as a false reputation",
            "It can only carry good news",
            "It never reaches more than two people"
          ],
          answer: 1,
          explain: "Because gossip is second-hand, it can carry errors or lies, so reputation systems need ways to keep information honest."
        },
        {
          type: "order",
          q: "Order how a reputation spreads through gossip.",
          items: [
            "One person observes an act",
            "They tell others about it",
            "Listeners update their view of the actor",
            "Even non-witnesses treat the actor accordingly"
          ],
          explain: "Gossip turns a single observation into group-wide reputational knowledge."
        },
        {
          type: "truefalse",
          q: "In a large group, direct observation alone is enough for everyone to know everyone's reputation.",
          answer: false,
          explain: "No one can watch everyone, which is precisely why language-based gossip is needed to scale reputation."
        }
      ]
    },
    {
      id: "l120",
      title: "Costly reputation and honesty",
      intro: "Reputations are hard to fake because maintaining a good one requires actually paying the cost of helping, which keeps the system honest.",
      questions: [
        {
          type: "mcq",
          q: "Why is a good image score hard to fake?",
          choices: [
            "Because scores are assigned at random",
            "Because you must actually pay the real cost of helping to earn it",
            "Because everyone lies equally",
            "Because the rules simply forbid cheating"
          ],
          answer: 1,
          explain: "You cannot obtain a high image score without genuinely helping and paying its cost, which makes the reputation an honest signal."
        },
        {
          type: "truefalse",
          q: "Because building a good reputation is costly, a high image score tends to be an honest signal of cooperativeness.",
          answer: true,
          explain: "Signals that are costly to produce are hard to fake, a core idea linking reputation to honest signaling."
        },
        {
          type: "fill",
          q: "A reputation is trustworthy partly because it is ____ to earn, so cheaters cannot easily fake it.",
          answer: "costly",
          accept: ["costly", "expensive", "hard"],
          explain: "The real cost of helping is what prevents free-riders from cheaply faking a good reputation."
        },
        {
          type: "mcq",
          q: "A free-rider who never helps but expects help from others will typically:",
          choices: [
            "Keep a perfect reputation",
            "Accumulate a poor reputation and be denied help by discriminators",
            "Be rewarded for saving effort",
            "Never be noticed by anyone"
          ],
          answer: 1,
          explain: "Refusing to help lowers the image score, so discriminators withhold help; exploitation carries a reputational cost."
        },
        {
          type: "match",
          q: "Match each element to its role in keeping scoring honest.",
          pairs: [
            ["Cost of helping", "Makes a good reputation hard to fake"],
            ["Discriminators", "Withhold help from those with bad reputations"],
            ["Free-rider", "Earns a bad reputation and loses future help"]
          ],
          explain: "Costs plus conditional helping punish exploitation and reward genuine cooperation."
        },
        {
          type: "order",
          q: "Order why exploiting image scoring does not pay off.",
          items: [
            "A cheater refuses to help to save costs",
            "Their image score falls",
            "Discriminators notice the low score",
            "They refuse to help the cheater in the future"
          ],
          explain: "The reputational penalty for cheating removes the short-term advantage of free-riding."
        },
        {
          type: "truefalse",
          q: "If reputations could be built cheaply, with no real cost at all, they would be easier to fake.",
          answer: true,
          explain: "Cheap-to-produce signals invite dishonesty; the real cost of helping is what protects image scoring from exploitation."
        }
      ]
    }
  ]
});
