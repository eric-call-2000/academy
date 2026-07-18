window.ACADEMY.addUnit("egt", {
  id: "unit-21",
  title: "Signaling and Honesty",
  color: "#3b74e0",
  icon: "🦚",
  description: "Explore how reliable communication can evolve between individuals with conflicting interests, from Zahavi's handicap principle and Grafen's costly-signaling equilibrium to peacock tails, stotting gazelles, cheap talk, and unfakeable index signals.",
  lessons: [
    {
      id: "l161",
      title: "The signaling problem",
      intro: "Why should a receiver ever believe a signal sent by an individual who benefits from being believed?",
      questions: [
        {
          type: "mcq",
          q: "What is the core puzzle of animal signaling?",
          choices: [
            "Why signals are always physically impossible to produce",
            "Why a receiver should trust a signal from a sender who gains by being believed",
            "Why animals never communicate with one another",
            "Why receivers always ignore every signal they perceive"
          ],
          answer: 1,
          explain: "Signalers often benefit from being believed regardless of the truth, so the puzzle is explaining why receivers should trust signals at all rather than being systematically deceived."
        },
        {
          type: "truefalse",
          q: "If a signal were completely free to produce and interests conflicted, there would be a strong temptation for low-quality signalers to fake it.",
          answer: true,
          explain: "When a signal costs nothing, any individual can send the 'high-quality' message, so a free signal cannot reliably distinguish quality when interests conflict."
        },
        {
          type: "fill",
          q: "In signaling models, the individual who produces the signal is the sender, while the individual who observes and responds is the ____.",
          answer: "receiver",
          accept: ["receiver", "reciever"],
          explain: "The receiver perceives the signal and adjusts its behavior; whether communication is stable depends on whether trusting the signal pays for the receiver."
        },
        {
          type: "mcq",
          q: "For a signaling system to be evolutionarily stable, it generally must benefit:",
          choices: [
            "Only the sender, at the receiver's expense",
            "Only the receiver, at the sender's expense",
            "On average both senders and receivers, so neither is selected to abandon it",
            "Neither party, since signals are always wasteful"
          ],
          answer: 2,
          explain: "If receivers were consistently exploited they would evolve to ignore the signal; stable communication requires that responding to the signal pays off on average for receivers too."
        },
        {
          type: "truefalse",
          q: "A receiver that is systematically deceived by a signal will be under selection to stop attending to that signal.",
          answer: true,
          explain: "Ignoring a misleading signal saves the receiver from exploitation, so persistent deception undermines the signal and selection favors receivers that no longer respond."
        },
        {
          type: "match",
          q: "Match each signaling term to its meaning.",
          pairs: [
            ["Sender", "Individual that produces the signal"],
            ["Receiver", "Individual that observes and responds"],
            ["Honest signal", "Signal reliably correlated with the sender's true quality or state"],
            ["Deceptive signal", "Signal that misrepresents the sender's true quality or state"]
          ],
          explain: "Signaling analysis separates who sends from who receives, and asks whether the message reliably tracks reality (honest) or misleads (deceptive)."
        },
        {
          type: "order",
          q: "Order the logical steps of the signaling problem when interests conflict.",
          items: [
            "A sender benefits if the receiver believes a favorable message",
            "Low-quality senders are tempted to fake the favorable message",
            "If faking is free, the signal loses its correlation with quality",
            "Receivers evolve to ignore signals they cannot trust"
          ],
          explain: "The problem unfolds from the temptation to cheat down to the collapse of communication, which is exactly why a mechanism enforcing honesty is needed."
        }
      ]
    },
    {
      id: "l162",
      title: "Zahavi's handicap principle",
      intro: "Amotz Zahavi proposed that signals stay honest precisely because they are costly enough that only high-quality individuals can afford them.",
      questions: [
        {
          type: "mcq",
          q: "What did Amotz Zahavi propose in 1975 with the handicap principle?",
          choices: [
            "That signals evolve to be as cheap as possible",
            "That reliable signals must be costly, so only high-quality individuals can afford them",
            "That females always prefer smaller, weaker males",
            "That signals carry no information about the signaler"
          ],
          answer: 1,
          explain: "Zahavi argued that a signal's very costliness guarantees its honesty, because a low-quality individual cannot bear the cost of faking a high-quality display."
        },
        {
          type: "truefalse",
          q: "Zahavi first published the handicap principle in 1975.",
          answer: true,
          explain: "Amotz Zahavi introduced the handicap principle in a 1975 paper in the Journal of Theoretical Biology, arguing that mate choice favors handicapping signals."
        },
        {
          type: "fill",
          q: "Under the handicap principle, a signal is honest because it imposes a ____ that low-quality individuals cannot afford to pay.",
          answer: "cost",
          accept: ["cost", "handicap", "costs"],
          explain: "The differential cost is the enforcement mechanism: high-quality signalers can absorb the handicap while low-quality ones would suffer too much to bluff."
        },
        {
          type: "mcq",
          q: "Why does cost keep a handicap signal honest?",
          choices: [
            "Because cost is the same for every individual regardless of quality",
            "Because the marginal cost of the signal is higher for lower-quality individuals",
            "Because receivers cannot perceive costly signals",
            "Because costly signals are illegal to fake"
          ],
          answer: 1,
          explain: "Honesty is maintained when the same display costs a low-quality individual relatively more, so faking it is not worthwhile for cheaters."
        },
        {
          type: "truefalse",
          q: "The handicap principle claims that a costly ornament makes its bearer less fit than it would be without the ornament, in absolute terms.",
          answer: true,
          explain: "The handicap is a genuine survival cost; its bearer would survive better without it, but the ornament advertises the quality needed to bear that cost and still thrive."
        },
        {
          type: "order",
          q: "Order the logic of Zahavi's handicap principle.",
          items: [
            "A signal imposes a real cost on its bearer",
            "That cost weighs more heavily on low-quality individuals",
            "Only high-quality individuals can afford the full display",
            "Receivers can therefore treat the display as an honest indicator of quality"
          ],
          explain: "The argument runs from cost, through differential affordability, to reliability, so that receivers benefit by trusting the costly signal."
        },
        {
          type: "match",
          q: "Match each element of the handicap principle to its role.",
          pairs: [
            ["Handicap", "The costly trait that reduces survival"],
            ["Differential cost", "The reason cheaters cannot afford to fake"],
            ["Honesty", "The outcome that lets receivers trust the signal"]
          ],
          explain: "The handicap creates a cost that falls unequally on quality classes, which enforces honesty and makes the signal worth heeding."
        }
      ]
    },
    {
      id: "l163",
      title: "Grafen 1990",
      intro: "Alan Grafen's 1990 model gave the handicap principle a rigorous game-theoretic footing, showing an honest signaling equilibrium can exist.",
      questions: [
        {
          type: "mcq",
          q: "What did Alan Grafen accomplish in his 1990 papers on signaling?",
          choices: [
            "He disproved that costly signals could ever be honest",
            "He gave the handicap principle a formal, mathematically rigorous game-theoretic model",
            "He showed all signals must be free to be stable",
            "He measured peacock tails in the wild"
          ],
          answer: 1,
          explain: "Grafen (1990) built a formal signaling model demonstrating that Zahavi's verbal handicap principle could indeed support an honest signaling equilibrium, silencing earlier skepticism."
        },
        {
          type: "truefalse",
          q: "Before Grafen's formal treatment, many theorists doubted the handicap principle because early models (such as Maynard Smith's) suggested it might not work.",
          answer: true,
          explain: "The handicap principle was controversial for years; Grafen's 1990 analysis provided the mathematical support that helped it gain broad acceptance."
        },
        {
          type: "fill",
          q: "In Grafen's model, at the signaling ____, higher-quality individuals invest more in the signal and receivers correctly infer quality from signal level.",
          answer: "equilibrium",
          accept: ["equilibrium", "equilibria", "ess"],
          explain: "At the signaling equilibrium, signal intensity is a monotonic function of quality and receiver responses make that investment worthwhile, so no one gains by deviating."
        },
        {
          type: "mcq",
          q: "A key condition in Grafen's honest-signaling equilibrium is that:",
          choices: [
            "The marginal cost of signaling is identical across all quality levels",
            "The marginal cost of a given signal is lower for higher-quality individuals",
            "Receivers respond randomly to signals",
            "Signals are entirely free to produce"
          ],
          answer: 1,
          explain: "Honesty is stable when better-quality signalers pay a lower marginal cost for the same signal level, so they optimally choose higher signals that cheaters cannot profitably match."
        },
        {
          type: "truefalse",
          q: "Grafen's model requires that signal cost be exactly the same function for every individual regardless of quality.",
          answer: false,
          explain: "The model needs costs to differ by quality: because the same signal is cheaper for high-quality individuals, their higher signal levels reliably reveal their quality."
        },
        {
          type: "match",
          q: "Match each feature of Grafen's 1990 model to its description.",
          pairs: [
            ["Signal level", "Increases with the signaler's underlying quality"],
            ["Cost function", "Cheaper at the margin for higher-quality signalers"],
            ["Receiver response", "Assigns higher estimated quality to stronger signals"],
            ["Equilibrium", "State where no signaler or receiver gains by deviating"]
          ],
          explain: "Grafen tied signal, cost, and response together so that honest revelation is a stable strategy pairing for both sides."
        },
        {
          type: "order",
          q: "Order the historical development of the handicap idea.",
          items: [
            "Zahavi verbally proposes the handicap principle (1975)",
            "Early modelers question whether it can work",
            "Grafen builds a formal model of the signaling equilibrium (1990)",
            "The handicap principle gains wide acceptance"
          ],
          explain: "A verbal proposal met with skepticism was ultimately vindicated by Grafen's formal 1990 demonstration that honest costly signaling can be an equilibrium."
        }
      ]
    },
    {
      id: "l164",
      title: "Costly signaling theory",
      intro: "Costly signaling theory generalizes the idea that quality is revealed through displays only high-quality individuals can afford.",
      questions: [
        {
          type: "mcq",
          q: "What is the central claim of costly signaling theory?",
          choices: [
            "Any signal, cheap or costly, is equally reliable",
            "Reliable quality information is conveyed by displays that are affordable only to high-quality signalers",
            "Signals never carry information about the signaler",
            "Cost is irrelevant to signal honesty"
          ],
          answer: 1,
          explain: "Costly signaling theory holds that honesty is enforced when a display is affordable only to genuinely high-quality individuals, so cost differentials guarantee reliability."
        },
        {
          type: "truefalse",
          q: "Costly signaling theory says that the cost of a signal need not be the same for all individuals for the signal to stay honest.",
          answer: true,
          explain: "The key is differential cost: because the display is relatively cheaper or more bearable for high-quality individuals, only they display fully, keeping the signal honest."
        },
        {
          type: "fill",
          q: "Signals kept honest by cost are sometimes called ____ signals or handicaps, because their expense is what guarantees their reliability.",
          answer: "costly",
          accept: ["costly", "handicap", "handicap signals"],
          explain: "The label 'costly signal' emphasizes that the expense itself, unfakeable by low-quality individuals, is the mechanism enforcing honest communication."
        },
        {
          type: "mcq",
          q: "Which of these is the best example of a costly signal that reveals quality?",
          choices: [
            "A trait that costs nothing and everyone can display equally",
            "A resource-intensive display that only a well-fed, healthy individual could sustain",
            "A random noise unrelated to the sender's condition",
            "A signal that low-quality individuals produce more easily than high-quality ones"
          ],
          answer: 1,
          explain: "A display that drains resources reveals quality because only individuals with the condition to spare can sustain it, so the display honestly indicates that condition."
        },
        {
          type: "truefalse",
          q: "Under costly signaling theory, if faking a display became cheap for everyone, the display would remain a reliable indicator of quality.",
          answer: false,
          explain: "If low-quality individuals could cheaply fake the display, the differential cost that enforces honesty would vanish and the signal would no longer reveal quality."
        },
        {
          type: "order",
          q: "Order the reasoning of costly signaling theory.",
          items: [
            "A display consumes resources or imposes risk",
            "Only high-quality individuals can bear that expense while thriving",
            "So the intensity of the display tracks quality",
            "Receivers benefit by responding to the display"
          ],
          explain: "Expense filters out low-quality bluffers, letting display intensity honestly track quality and making the signal worth heeding for receivers."
        },
        {
          type: "match",
          q: "Match each concept from costly signaling theory to its meaning.",
          pairs: [
            ["Costly signal", "A display affordable only to high-quality individuals"],
            ["Differential cost", "Unequal burden of the same display across quality levels"],
            ["Honest revelation", "Reliable correlation between display and true quality"]
          ],
          explain: "Costly signaling theory links expense and its unequal burden to the honest revelation of quality that receivers can trust."
        }
      ]
    },
    {
      id: "l165",
      title: "The peacock's tail",
      intro: "The peacock's elaborate train is the textbook example of an honest handicap shaped by female mate choice.",
      questions: [
        {
          type: "mcq",
          q: "Why is the peacock's train considered a classic honest handicap?",
          choices: [
            "Because it is cheap and easy for any peacock to grow",
            "Because its cost in survival means only healthy, high-quality males can grow and carry a large one",
            "Because it helps the peacock escape predators",
            "Because peahens ignore it completely"
          ],
          answer: 1,
          explain: "The train is costly to grow and hampers escape, so a large, symmetrical, bright train reliably advertises the good condition of the male carrying it."
        },
        {
          type: "truefalse",
          q: "The peacock's train is favored by natural selection for survival, not by sexual selection through female mate choice.",
          answer: false,
          explain: "The train reduces survival; it is favored by sexual selection because peahens prefer males with more elaborate trains, illustrating a handicap under mate choice."
        },
        {
          type: "fill",
          q: "The peacock's train evolved through ____ selection, driven by peahen preference for elaborate displays.",
          answer: "sexual",
          accept: ["sexual", "mate choice", "sexual selection"],
          explain: "Because the train lowers survival yet raises mating success, it is a product of sexual selection, specifically female choice, rather than survival selection."
        },
        {
          type: "mcq",
          q: "What quality information can a peahen plausibly read from a large, bright, symmetrical train?",
          choices: [
            "The male's ability to acquire resources and resist parasites while bearing the cost",
            "The exact age of the male in days",
            "Nothing at all, since the train is free to produce",
            "The male's willingness to help raise chicks"
          ],
          answer: 0,
          explain: "A well-developed train signals that a male had the resources and health, including parasite resistance, to invest heavily in the costly ornament and still survive."
        },
        {
          type: "truefalse",
          q: "The peacock's train imposes real costs such as being metabolically expensive and making escape from predators harder.",
          answer: true,
          explain: "Growing and hauling the large train costs energy and reduces flight and escape ability, which is exactly the survival handicap that makes the signal honest."
        },
        {
          type: "match",
          q: "Match each aspect of the peacock's tail to what it illustrates.",
          pairs: [
            ["Elaborate train", "A costly ornament favored by mate choice"],
            ["Survival cost", "The handicap that enforces honesty"],
            ["Peahen preference", "The selective force driving the display"],
            ["Male condition", "The quality the train honestly advertises"]
          ],
          explain: "The peacock case ties together a costly ornament, its survival handicap, the female preference driving it, and the honest signal of male condition."
        },
        {
          type: "order",
          q: "Order the handicap logic as applied to the peacock's train.",
          items: [
            "Growing a large bright train is costly and risky",
            "Only males in good condition can afford a full display",
            "Train quality therefore correlates with male condition",
            "Peahens prefer males with more elaborate trains"
          ],
          explain: "Cost restricts full displays to high-condition males, so train quality reliably tracks condition, which is why peahen preference for it can be adaptive."
        }
      ]
    },
    {
      id: "l166",
      title: "Cheap talk and its limits",
      intro: "Costless signals, or cheap talk, can still convey information, but only when the interests of sender and receiver are sufficiently aligned.",
      questions: [
        {
          type: "mcq",
          q: "When can costless signals ('cheap talk') be reliable?",
          choices: [
            "Whenever the sender wants to be believed",
            "Only when the interests of sender and receiver are sufficiently aligned",
            "Only when the signal is extremely costly",
            "Never, under any circumstances"
          ],
          answer: 1,
          explain: "Cheap talk can carry honest information when senders have no incentive to deceive, which happens when their interests align with the receiver's; conflict makes free signals cheap to fake."
        },
        {
          type: "truefalse",
          q: "Cheap talk is a signal that costs essentially nothing to produce.",
          answer: true,
          explain: "Cheap talk refers to costless or nearly costless signals; because they carry no differential cost, their reliability depends entirely on whether interests conflict."
        },
        {
          type: "fill",
          q: "Cheap talk can remain honest when there is no ____ of interest between sender and receiver.",
          answer: "conflict",
          accept: ["conflict", "conflict of interest", "conflicting interests"],
          explain: "Without a conflict of interest the sender gains nothing by lying, so even a free signal can be trusted; conflict is what makes costless signals vulnerable to deception."
        },
        {
          type: "mcq",
          q: "Which situation is most favorable to honest cheap talk?",
          choices: [
            "Rival predators competing for the same prey",
            "Members of a cooperative group coordinating on a shared goal",
            "A prey animal trying to deceive a predator into leaving",
            "Two males competing for the same mate"
          ],
          answer: 1,
          explain: "When group members share a goal, no one benefits from misleading the others, so costless coordinating signals can be honest and stable."
        },
        {
          type: "truefalse",
          q: "When interests conflict strongly, a costless signal is a poor guarantee of honesty because it is cheap for anyone to fake.",
          answer: true,
          explain: "With conflicting interests and no cost to enforce truthfulness, low-quality or deceptive senders can send the favorable message for free, so cheap talk cannot be trusted."
        },
        {
          type: "match",
          q: "Match each signal type to when it can be honest.",
          pairs: [
            ["Cheap talk", "Honest mainly when interests align"],
            ["Costly signal", "Honest even when interests conflict"],
            ["Index signal", "Honest because it cannot physically be faked"]
          ],
          explain: "Different mechanisms secure honesty: alignment for cheap talk, differential cost for handicaps, and physical constraint for index signals."
        },
        {
          type: "order",
          q: "Order the reasoning about when cheap talk stays honest.",
          items: [
            "A signal is essentially free to produce",
            "Check whether sender and receiver interests align",
            "If interests align, the sender has no reason to lie",
            "The costless signal can then be trusted"
          ],
          explain: "For a free signal, honesty hinges on the alignment check: aligned interests remove the incentive to deceive, so the cheap signal remains credible."
        }
      ]
    },
    {
      id: "l167",
      title: "Stotting gazelles",
      intro: "A stotting gazelle leaps stiff-legged in view of a predator, apparently advertising its fitness and ability to escape.",
      questions: [
        {
          type: "mcq",
          q: "What is 'stotting' in gazelles?",
          choices: [
            "A stiff-legged, high, bouncing leap performed when a predator is detected",
            "A method of digging for water",
            "A grooming behavior between herd members",
            "A way of marking territory with scent"
          ],
          answer: 0,
          explain: "Stotting (also called pronking) is a conspicuous stiff-legged leap gazelles perform on spotting a predator, and it is widely interpreted as a signal directed at the predator."
        },
        {
          type: "truefalse",
          q: "One leading explanation is that stotting honestly signals a gazelle's fitness and escape ability to the predator, discouraging pursuit.",
          answer: true,
          explain: "By advertising vigor, a stotting gazelle tells the predator it is likely to escape, so the predator does better to target a less fit individual and give up the chase."
        },
        {
          type: "fill",
          q: "Stotting is thought to be an honest signal because a weak or unfit gazelle would find the energetic, high leaps hard to ____.",
          answer: "perform",
          accept: ["perform", "fake", "produce", "sustain"],
          explain: "Only a fit gazelle can leap high repeatedly, so the display is hard for an unfit animal to fake, keeping the signal of escape ability honest."
        },
        {
          type: "mcq",
          q: "Who is the intended receiver of a gazelle's stotting signal in the pursuit-deterrence interpretation?",
          choices: [
            "Other gazelles in the herd only",
            "The predator that has been detected",
            "The gazelle's own offspring",
            "No one; it is a random movement"
          ],
          answer: 1,
          explain: "In the pursuit-deterrence hypothesis the signal is aimed at the predator, communicating that this individual is not worth chasing because it can readily escape."
        },
        {
          type: "truefalse",
          q: "Field observations by Caro on Thomson's gazelles found that gazelles never stott when predators are near.",
          answer: false,
          explain: "Caro's studies found gazelles do stott in the presence of predators such as cheetahs and wild dogs, and that predators were more likely to give up chasing high-stotting individuals."
        },
        {
          type: "order",
          q: "Order the pursuit-deterrence logic of stotting.",
          items: [
            "A gazelle detects an approaching predator",
            "It performs high stiff-legged leaps that only a fit animal can sustain",
            "The predator reads the display as a sign of escape ability",
            "The predator gives up and seeks an easier target"
          ],
          explain: "Stotting advertises vigor to the predator, which then rationally avoids a costly chase it is unlikely to win, benefiting the fit signaler."
        },
        {
          type: "match",
          q: "Match each part of the stotting signal to its role.",
          pairs: [
            ["Stott", "The costly leaping display"],
            ["Predator", "The receiver of the signal"],
            ["Fitness", "The quality being advertised"],
            ["Deterrence", "The outcome that benefits the signaler"]
          ],
          explain: "The gazelle performs a costly display aimed at the predator to advertise fitness, achieving pursuit deterrence that benefits the signaler."
        }
      ]
    },
    {
      id: "l168",
      title: "Index signals and constraints",
      intro: "Index signals stay honest not because of their cost but because they are physically impossible to fake.",
      questions: [
        {
          type: "mcq",
          q: "What makes an 'index signal' honest?",
          choices: [
            "It is extremely expensive to produce",
            "It is physically constrained so that it cannot be faked, being tied directly to the trait it advertises",
            "It only works when interests align",
            "It is chosen at random by the sender"
          ],
          answer: 1,
          explain: "An index signal is causally linked to the quality it indicates, so it cannot be exaggerated independently of that quality; the physical constraint, not cost, enforces honesty."
        },
        {
          type: "truefalse",
          q: "Index signals rely on a physical constraint rather than on differential cost to guarantee honesty.",
          answer: true,
          explain: "Unlike handicaps, index signals are unfakeable because they are mechanically tied to the underlying trait, so no additional cost is needed to keep them honest."
        },
        {
          type: "fill",
          q: "A deep vocal pitch tied to body size is an index signal because a small animal is physically ____ to produce a large animal's low call.",
          answer: "unable",
          accept: ["unable", "incapable", "constrained"],
          explain: "Larger bodies and vocal tracts produce lower-frequency calls, so a small animal cannot fake a deep call; the constraint makes the pitch an honest index of size."
        },
        {
          type: "mcq",
          q: "Which of these is the clearest example of an index signal?",
          choices: [
            "A bird singing any tune it chooses",
            "The formant spacing of a call, which is set by the length of the vocal tract and thus by body size",
            "A costless alarm call given to allies",
            "A large peacock train grown at high energetic cost"
          ],
          answer: 1,
          explain: "Formant spacing is determined by vocal-tract length, itself tied to body size, so it cannot be faked and serves as an honest index of size rather than a costly handicap."
        },
        {
          type: "truefalse",
          q: "The difference between an index signal and a handicap is that the index is kept honest by physical impossibility of faking, while the handicap is kept honest by cost.",
          answer: true,
          explain: "Both can be honest, but index signals rely on unfakeable physical constraints whereas handicaps rely on differential cost falling on low-quality signalers."
        },
        {
          type: "match",
          q: "Match each honesty mechanism to how it prevents cheating.",
          pairs: [
            ["Index signal", "Faking is physically impossible"],
            ["Handicap", "Faking is too costly for low-quality individuals"],
            ["Cheap talk", "Faking is prevented only by aligned interests"]
          ],
          explain: "Honesty can be secured by physical constraint (index), by prohibitive cost (handicap), or by shared interests (cheap talk); index signals are the unfakeable case."
        },
        {
          type: "order",
          q: "Order the reasoning that a deep call is an honest index of body size.",
          items: [
            "Vocal-tract length is fixed by the animal's body size",
            "Call frequency is determined by vocal-tract length",
            "A small animal cannot physically produce a large animal's deep call",
            "So call depth reliably indicates body size"
          ],
          explain: "Because the physical chain from body size to call frequency cannot be broken by a small animal, the deep call is an unfakeable index of size."
        }
      ]
    }
  ]
});
