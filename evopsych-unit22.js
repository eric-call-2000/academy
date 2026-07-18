window.ACADEMY.addUnit("evopsych", {
  id: "unit-22",
  title: "Language, Morality, and Religion",
  color: "#7c5cff",
  icon: "🗣️",
  description: "Explores how evolutionary psychology explains higher-order human capacities, treating language, morality, and religion as either evolved adaptations or byproducts of ordinary cognition.",
  lessons: [
    {
      id: "l169",
      title: "Language as Instinct",
      intro: "Steven Pinker's 1994 book argues that language is a biological instinct built by natural selection, not a cultural invention.",
      questions: [
        { type: "mcq", q: "Which 1994 book argued that language is a biological instinct?", choices: ["The Selfish Gene", "The Language Instinct", "The Blank Slate", "Syntactic Structures"], answer: 1, explain: "Steven Pinker's 1994 book The Language Instinct popularized the view that language is an evolved biological adaptation." },
        { type: "truefalse", q: "Pinker argues that language is a cultural invention that must be consciously taught, like reading or algebra.", answer: false, explain: "Pinker contrasts language with reading; language develops instinctively without formal teaching, while reading must be explicitly taught." },
        { type: "fill", q: "Pinker compares humans' spontaneous ability to acquire language to a spider's instinct to spin a ____.", answer: "web", accept: ["web", "webs"], explain: "The web-spinning analogy captures Pinker's point that language, like web-building, is an innate, species-typical behavior." },
        { type: "mcq", q: "According to Pinker, the strongest sign that language is an instinct is that:", choices: ["only trained linguists can speak grammatically", "children acquire complex grammar rapidly and without instruction", "language differs completely across cultures", "apes learn language as easily as humans do"], answer: 1, explain: "Rapid, universal, uninstructed acquisition of complex grammar by young children is Pinker's key evidence for an evolved language instinct." },
        { type: "truefalse", q: "Pinker treats the capacity for language as a species-typical trait found in all normal human cultures.", answer: true, explain: "Universality of language across cultures is central to Pinker's adaptationist argument." },
        { type: "match", q: "Match each idea to Pinker's description of language as an instinct.", pairs: [["Instinct", "A specialized, evolved ability that develops without teaching"], ["Adaptation", "A trait built by natural selection for a function"], ["Universality", "The presence of complex language in every human society"]], explain: "Instinct, adaptation, and universality form the backbone of Pinker's 1994 argument." },
        { type: "order", q: "Order Pinker's reasoning that language is an evolved instinct, from observation to conclusion.", items: ["Children everywhere master grammar early", "No formal instruction is required", "This pattern signals a specialized mental faculty", "Such a faculty was built by natural selection"], explain: "Pinker moves from the observation of effortless acquisition to the conclusion that an evolved, dedicated faculty underlies it." }
      ]
    },
    {
      id: "l170",
      title: "Universal Grammar Debate",
      intro: "Chomsky's innate Universal Grammar contrasts with adaptationist accounts over whether language was shaped gradually by natural selection.",
      questions: [
        { type: "mcq", q: "The concept of Universal Grammar is most associated with:", choices: ["Steven Pinker", "Noam Chomsky", "Richard Dawkins", "Jonathan Haidt"], answer: 1, explain: "Noam Chomsky proposed Universal Grammar, an innate set of grammatical principles shared by all humans." },
        { type: "fill", q: "Chomsky's 'poverty of the ____' argument holds that children hear too little data to learn grammar without innate knowledge.", answer: "stimulus", accept: ["stimulus"], explain: "The poverty-of-the-stimulus argument claims the input children receive underdetermines the grammar they acquire, implying innate structure." },
        { type: "truefalse", q: "Chomsky has generally been skeptical that language evolved gradually by natural selection for communication.", answer: true, explain: "Chomsky suggested language may have arisen suddenly, for example via a mutation enabling recursion, rather than by gradual selection for communication." },
        { type: "mcq", q: "Adaptationists like Pinker differ from Chomsky mainly by arguing that language:", choices: ["is a gradually evolved adaptation for communication", "cannot be innate at all", "is identical to general intelligence", "exists only in written form"], answer: 0, explain: "Adaptationists accept innateness but insist language was shaped incrementally by natural selection for communicative function." },
        { type: "truefalse", q: "In the adaptationist view, an innate language faculty and Darwinian natural selection are incompatible.", answer: false, explain: "Pinker and Bloom argue the opposite: an innate faculty is exactly what gradual natural selection would build." },
        { type: "match", q: "Match each thinker or term to its position in the debate.", pairs: [["Chomsky", "Innate Universal Grammar, skeptical of gradual selection"], ["Pinker", "Language as a gradually selected adaptation"], ["Spandrel", "A byproduct rather than a directly selected trait"]], explain: "Chomsky emphasizes innate structure but doubts adaptationism; Pinker embraces adaptationism; 'spandrel' names the non-adaptationist alternative." },
        { type: "mcq", q: "The term 'spandrel,' used by critics to describe language as a non-adaptive byproduct, was borrowed from:", choices: ["computer science", "architecture", "genetics", "economics"], answer: 1, explain: "Gould and Lewontin borrowed 'spandrel' from architecture to describe traits that are byproducts of other structures rather than direct adaptations." }
      ]
    },
    {
      id: "l171",
      title: "Pinker-Bloom Language Evolution",
      intro: "Pinker and Bloom's 1990 paper made the case that language is a gradually selected adaptation showing complex design for communication.",
      questions: [
        { type: "mcq", q: "In their 1990 paper, Pinker and Bloom argued that language shows signs of:", choices: ["random cultural drift", "complex design for communication", "divine origin", "recent invention"], answer: 1, explain: "Pinker and Bloom argued language exhibits complex adaptive design for communication, which only natural selection can explain." },
        { type: "fill", q: "Pinker and Bloom's 1990 paper appeared in the journal Behavioral and Brain ____.", answer: "sciences", accept: ["sciences", "science"], explain: "'Natural language and natural selection' was published in Behavioral and Brain Sciences in 1990." },
        { type: "truefalse", q: "Pinker and Bloom argued that language most likely appeared in a single sudden mutation.", answer: false, explain: "They argued against saltation, favoring gradual evolution through many small selected steps." },
        { type: "mcq", q: "Pinker and Bloom's core logic is that complex biological design requires:", choices: ["natural selection as the only known explanation", "conscious engineering", "a single macromutation", "cultural learning alone"], answer: 0, explain: "Their central premise is that natural selection is the only known natural process able to produce complex adaptive design." },
        { type: "truefalse", q: "The 1990 paper was in part a response to claims that language could be a non-adaptive byproduct.", answer: true, explain: "Pinker and Bloom directly countered Chomsky's and Gould's suggestions that language need not be a selected adaptation." },
        { type: "order", q: "Order the steps in Pinker and Bloom's 1990 argument.", items: ["Language displays complex design", "Complex design demands an explanation", "Natural selection is the only known source of such design", "Therefore language evolved by natural selection"], explain: "The argument runs from observed design to the inference that gradual natural selection produced it." },
        { type: "match", q: "Match each element of the Pinker-Bloom case to its meaning.", pairs: [["Gradualism", "Evolution through many small selected changes"], ["Adaptive design", "Structure suited to a function"], ["Saltation", "Sudden origin in one leap, which they rejected"]], explain: "Pinker and Bloom defended gradualism and adaptive design while rejecting saltationist accounts." }
      ]
    },
    {
      id: "l172",
      title: "The Moral Sense",
      intro: "Jonathan Haidt argues moral judgment runs on fast intuitions, with reasoning following after, structured by a set of moral foundations.",
      questions: [
        { type: "mcq", q: "Haidt's Social Intuitionist Model claims that moral judgments are driven mainly by:", choices: ["careful logical reasoning", "fast automatic intuitions", "random guessing", "written legal rules"], answer: 1, explain: "Haidt argues moral judgments arise first as quick intuitions, with reasoning usually following after." },
        { type: "fill", q: "Haidt describes conscious moral reasoning as a post-hoc ____ of intuitions we already feel.", answer: "rationalization", accept: ["rationalization", "rationalisation", "justification"], explain: "In Haidt's model, reasoning typically rationalizes a judgment the intuition already reached." },
        { type: "truefalse", q: "In Haidt's famous metaphor, reason is the elephant and intuition is the small rider.", answer: false, explain: "Haidt reverses this: intuition is the large elephant and reasoning is the small rider that mostly follows." },
        { type: "mcq", q: "Which of these is one of Haidt's Moral Foundations?", choices: ["Profit/loss", "Care/harm", "Speed/accuracy", "Wealth/poverty"], answer: 1, explain: "Care/harm is a core foundation in Moral Foundations Theory, alongside fairness, loyalty, authority, and sanctity." },
        { type: "match", q: "Match each Moral Foundation to its concern.", pairs: [["Care/harm", "Protecting others from suffering"], ["Loyalty/betrayal", "Standing with one's group"], ["Authority/subversion", "Respect for legitimate hierarchy"], ["Sanctity/degradation", "Purity and disgust"]], explain: "These are four of Haidt's Moral Foundations, each tapping a distinct evolved intuitive concern." },
        { type: "truefalse", q: "Haidt developed Moral Foundations Theory partly to explain why moral concerns differ across cultures and politics.", answer: true, explain: "The theory maps how groups weight foundations differently, helping explain cultural and political moral divides." },
        { type: "order", q: "Order the sequence in Haidt's Social Intuitionist Model.", items: ["A situation triggers a fast moral intuition", "A moral judgment is felt almost instantly", "Reasoning is generated afterward", "The reasoning justifies the initial judgment"], explain: "Intuition comes first and drives judgment; reasoning is recruited afterward to justify it." }
      ]
    },
    {
      id: "l173",
      title: "Evolution of Fairness",
      intro: "The ultimatum game and inequity aversion reveal that humans value fairness and will punish unfairness even at a personal cost.",
      questions: [
        { type: "mcq", q: "In the ultimatum game, if the responder rejects the proposer's offer:", choices: ["the responder keeps everything", "both players receive nothing", "the proposer is fined", "the game repeats automatically"], answer: 1, explain: "Rejection means neither player gets any money, so rejecting is costly to the responder too." },
        { type: "truefalse", q: "A purely self-interested responder should accept any offer greater than zero.", answer: true, explain: "Rationally, any positive amount beats nothing, so a purely selfish responder would accept even tiny offers." },
        { type: "fill", q: "Real responders frequently reject offers seen as unfair, a pattern called costly ____ of unfairness.", answer: "punishment", accept: ["punishment", "punishing"], explain: "Rejecting a low offer sacrifices one's own gain to penalize the unfair proposer, which is costly punishment." },
        { type: "mcq", q: "Across many studies, low offers (for example under 20 to 30 percent) are typically:", choices: ["always accepted", "often rejected", "never made", "rewarded with bonuses"], answer: 1, explain: "Offers well below an even split are frequently rejected, contradicting pure self-interest and revealing fairness preferences." },
        { type: "fill", q: "The tendency to dislike unequal outcomes, modeled by Fehr and Schmidt in 1999, is called inequity ____.", answer: "aversion", accept: ["aversion"], explain: "Fehr and Schmidt's 1999 inequity-aversion model formalized people's dislike of unequal payoffs." },
        { type: "truefalse", q: "Cross-cultural studies by Henrich and colleagues found that ultimatum-game offers are identical in every society.", answer: false, explain: "Henrich et al. found substantial cross-cultural variation in offers and rejections, linked to local norms and market integration." },
        { type: "match", q: "Match each fairness concept to its meaning.", pairs: [["Ultimatum game", "A one-shot split a responder can veto"], ["Inequity aversion", "Disliking unequal payoffs"], ["Costly punishment", "Paying a price to penalize unfairness"]], explain: "Together these concepts show that humans value fairness even at personal cost." }
      ]
    },
    {
      id: "l174",
      title: "Costly Signaling and Ritual",
      intro: "Richard Sosis argues that demanding religious rituals are costly, hard-to-fake signals of commitment that build cooperation.",
      questions: [
        { type: "mcq", q: "Richard Sosis argues that demanding religious rituals function as:", choices: ["meaningless traditions", "honest signals of commitment", "tools for personal wealth", "purely aesthetic displays"], answer: 1, explain: "Sosis applies costly-signaling theory: hard-to-fake ritual costs reliably signal genuine commitment to the group." },
        { type: "fill", q: "Costly rituals help solve the ____-rider problem by screening out uncommitted members.", answer: "free", accept: ["free"], explain: "By imposing real costs, rituals deter free-riders who would enjoy group benefits without contributing." },
        { type: "truefalse", q: "In Sosis and Bressler's study of 19th-century communes, religious communes tended to outlast secular ones.", answer: true, explain: "Sosis and Bressler (2003) found that religious communes survived longer than secular communes." },
        { type: "mcq", q: "In that commune research, longevity was best predicted by:", choices: ["the number of costly requirements imposed", "the wealth of members", "proximity to cities", "the size of the buildings"], answer: 0, explain: "For religious communes, more costly behavioral requirements predicted greater longevity, consistent with costly signaling." },
        { type: "truefalse", q: "Costly signaling theory predicts that easy, cost-free rituals are the most effective commitment signals.", answer: false, explain: "Signals must be costly to be honest; cheap rituals can be faked and therefore signal little." },
        { type: "match", q: "Match each term to its role in Sosis's account.", pairs: [["Costly signal", "A hard-to-fake display of commitment"], ["Free-rider", "One who takes benefits without paying costs"], ["In-group trust", "Cooperation enabled by shared sacrifice"]], explain: "Costly signals screen out free-riders and build the in-group trust that sustains cooperation." },
        { type: "order", q: "Order how costly ritual promotes cooperation in Sosis's model.", items: ["A group requires costly rituals", "Only committed members will pay the cost", "Free-riders are screened out", "Trust and cooperation rise among the remaining members"], explain: "The costliness filters membership, leaving a more committed, cooperative group." }
      ]
    },
    {
      id: "l175",
      title: "Religion as Byproduct",
      intro: "Pascal Boyer argues religious concepts are byproducts of ordinary cognition, spreading because they are minimally counterintuitive.",
      questions: [
        { type: "mcq", q: "Pascal Boyer's book explaining religion as a cognitive byproduct is titled:", choices: ["Big Gods", "Religion Explained", "The God Delusion", "Darwin's Cathedral"], answer: 1, explain: "Boyer's Religion Explained (2001) argues that religious concepts are byproducts of ordinary cognition." },
        { type: "fill", q: "Boyer says successful religious concepts are 'minimally ____,' mostly ordinary with a few striking violations.", answer: "counterintuitive", accept: ["counterintuitive", "counter-intuitive"], explain: "Minimally counterintuitive concepts fit intuitive expectations except for one or two violations, which makes them memorable." },
        { type: "truefalse", q: "Boyer argues religion is a special, dedicated instinct separate from all other mental systems.", answer: false, explain: "Boyer's thesis is the opposite: religion is a byproduct of general-purpose cognitive systems, not a dedicated adaptation." },
        { type: "mcq", q: "A ghost, meaning a person with no physical body, is a good example of a concept that is:", choices: ["maximally counterintuitive", "minimally counterintuitive", "entirely ordinary", "impossible to remember"], answer: 1, explain: "A ghost is person-like except for lacking a body, one violation of intuitive expectations, so it is minimally counterintuitive and memorable." },
        { type: "match", q: "Match each cognitive system to its proposed role in religion.", pairs: [["Agency detection", "Sensing minds or agents behind events"], ["Theory of mind", "Attributing beliefs and desires to agents"], ["Minimally counterintuitive", "Concepts that are memorable and spread easily"]], explain: "Boyer and colleagues argue that everyday systems like agency detection and theory of mind give rise to religious concepts." },
        { type: "truefalse", q: "Justin Barrett's 'Hyperactive Agency Detection Device' (HADD) fits Boyer's byproduct approach.", answer: true, explain: "HADD, a tendency to over-detect agents, is a byproduct mechanism that can generate beliefs in unseen agents like gods and spirits." },
        { type: "order", q: "Order the byproduct explanation of how gods become believable concepts.", items: ["Ordinary cognition detects agents and reads minds", "A concept violates one intuitive expectation", "Being minimally counterintuitive makes it memorable", "The concept spreads and becomes a religious belief"], explain: "Religious concepts exploit ordinary cognition and optimal memorability to spread, with no special religion module required." }
      ]
    },
    {
      id: "l176",
      title: "Big Gods Hypothesis",
      intro: "Ara Norenzayan argues that belief in watchful, moralizing gods expanded human cooperation by discouraging cheating among strangers.",
      questions: [
        { type: "mcq", q: "Ara Norenzayan's 2013 book Big Gods argues that belief in moralizing gods:", choices: ["slowed human cooperation", "helped expand cooperation among strangers", "had no social effects", "only applied within small bands"], answer: 1, explain: "Norenzayan argues that big, moralizing gods promoted large-scale cooperation among unrelated strangers." },
        { type: "fill", q: "Norenzayan sums up his hypothesis with the slogan: 'Watched people are ____ people.'", answer: "nice", accept: ["nice"], explain: "The idea is that feeling watched by a monitoring god encourages prosocial, cooperative behavior." },
        { type: "truefalse", q: "Big Gods are described as supernatural agents who monitor and punish moral behavior.", answer: true, explain: "In Norenzayan's account, Big Gods are all-knowing moralizing agents whose surveillance discourages cheating." },
        { type: "mcq", q: "According to the hypothesis, supernatural monitoring mainly works by:", choices: ["increasing anonymity", "deterring cheating and free-riding", "eliminating all rituals", "reducing group size"], answer: 1, explain: "Belief in an ever-watching, punishing god deters cheating, which supports trust among strangers." },
        { type: "truefalse", q: "Norenzayan claims the gods of the smallest-scale foraging societies are almost always all-powerful moral enforcers.", answer: false, explain: "Big, moralizing gods tend to appear alongside large, complex societies; small-scale societies more often have limited, less moralizing spirits." },
        { type: "match", q: "Match each element of the Big Gods hypothesis to its meaning.", pairs: [["Big God", "A powerful, knowing, moralizing supernatural agent"], ["Supernatural monitoring", "The sense of being watched by a god"], ["Prosociality", "Cooperative behavior toward strangers"]], explain: "The hypothesis links watchful moralizing gods to increased prosociality that helped scale up societies." },
        { type: "order", q: "Order the causal chain in the Big Gods hypothesis.", items: ["People believe in a watchful moralizing god", "They feel monitored even among strangers", "Cheating and free-riding decline", "Large-scale cooperation becomes possible"], explain: "Belief in supernatural monitoring curbs selfish behavior, enabling cooperation to scale beyond kin and acquaintances." }
      ]
    }
  ]
});
