window.ACADEMY.addUnit("evopsych", {
  id: "unit-12",
  title: "Jealousy and Conflict Between the Sexes",
  color: "#7c5cff",
  icon: "💔",
  description: "Examines evolved sex differences in jealousy, mate-retention tactics, sexual conflict, courtship deception, and post-copulatory female choice.",
  lessons: [
    {
      id: "l89",
      title: "Sex Differences in Jealousy",
      intro: "David Buss argued that men and women evolved partly different jealousy responses because ancestral males and females faced different reproductive threats.",
      questions: [
        {
          type: "mcq",
          q: "In David Buss's evolutionary account, why did ancestral men face a distinct adaptive problem that women did not?",
          choices: [
            "Men invested far more calories in each offspring than women",
            "Men could never be fully certain of their genetic paternity",
            "Men had far shorter reproductive lifespans than women",
            "Men were unable to detect a partner's ovulation"
          ],
          answer: 1,
          explain: "Because fertilization is internal in women, an ancestral man could not be certain a child was his; this paternity uncertainty is the core adaptive problem behind male jealousy."
        },
        {
          type: "truefalse",
          q: "Buss's hypothesis predicts that women, more than men, are especially distressed by a partner's emotional infidelity.",
          answer: true,
          explain: "Women risked losing a partner's investment and resources to a rival, so the theory predicts women weight emotional infidelity (a signal of diverted commitment) more heavily."
        },
        {
          type: "fill",
          q: "The threat that drives evolved male jealousy is paternity ____, the inability to be sure one's mate's child is genetically one's own.",
          answer: "uncertainty",
          accept: ["uncertainty", "uncertain"],
          explain: "Paternity uncertainty means a man could unknowingly invest in a rival's offspring, the ancestral cost that sexual jealousy is theorized to defend against."
        },
        {
          type: "match",
          q: "Match each sex to the ancestral reproductive threat Buss's hypothesis emphasizes.",
          pairs: [
            ["Men", "Cuckoldry: investing in a rival male's child"],
            ["Women", "Losing a partner's resources and commitment to a rival"],
            ["Both sexes", "Losing the relationship and its reproductive benefits"]
          ],
          explain: "Men faced paternity uncertainty (cuckoldry) while women faced the loss of a mate's investment; both share a general interest in keeping the partnership intact."
        },
        {
          type: "mcq",
          q: "The theory rests on the idea that men and women can face different ____ problems in reproduction.",
          choices: [
            "digestive",
            "linguistic",
            "geographic",
            "adaptive"
          ],
          answer: 3,
          explain: "Evolutionary psychology explains sex differences as solutions to different recurrent adaptive problems, here paternity uncertainty versus loss of investment."
        },
        {
          type: "truefalse",
          q: "Buss claimed jealousy is a single, sex-neutral emotion with no evolved differences between men and women.",
          answer: false,
          explain: "Buss argued the opposite: while both sexes feel jealousy, the type of infidelity that triggers the strongest response is predicted to differ by sex."
        },
        {
          type: "order",
          q: "Order the logical steps of Buss's argument, from ancestral condition to prediction.",
          items: [
            "Internal fertilization creates paternity uncertainty for men",
            "Men and women face different recurrent reproductive threats",
            "Selection favors sex-differentiated jealousy responses",
            "Men are predicted to react most to sexual infidelity, women to emotional infidelity"
          ],
          explain: "The chain runs from a biological asymmetry, to different adaptive threats, to differentiated selection, to the specific behavioral prediction."
        }
      ]
    },
    {
      id: "l90",
      title: "The Forced-Choice Findings",
      intro: "Buss, Larsen, Westen, and Semmelroth (1992) asked people to choose which type of infidelity would upset them more, revealing a striking sex difference.",
      questions: [
        {
          type: "mcq",
          q: "In the classic forced-choice question, participants had to pick which scenario would distress them more. What were the two options?",
          choices: [
            "A partner lying about money versus lying about the past",
            "A partner having sex with someone else versus forming a deep emotional attachment to someone else",
            "A partner leaving versus a partner staying but unhappy",
            "A partner flirting in person versus flirting online"
          ],
          answer: 1,
          explain: "The forced-choice paradigm pits sexual infidelity (imagined sex with a rival) against emotional infidelity (imagined deep emotional bond with a rival)."
        },
        {
          type: "truefalse",
          q: "In Buss et al. (1992), a clear majority of men chose sexual infidelity as the more distressing scenario.",
          answer: true,
          explain: "About 60% of men selected sexual infidelity as more distressing, consistent with the paternity-uncertainty prediction."
        },
        {
          type: "fill",
          q: "In the forced-choice design, respondents cannot rate both scenarios; they must ____ the single option that would upset them more.",
          answer: "choose",
          accept: ["choose", "select", "pick"],
          explain: "The method forces a single choice between the two infidelity types, which sharply separates the sexes' modal responses."
        },
        {
          type: "mcq",
          q: "In Buss et al. (1992), roughly what share of women chose sexual infidelity (rather than emotional infidelity) as more distressing?",
          choices: [
            "About 17%",
            "About 60%",
            "About 85%",
            "About 50%"
          ],
          answer: 0,
          explain: "Only about 17% of women picked sexual infidelity, meaning the large majority of women found emotional infidelity more distressing."
        },
        {
          type: "order",
          q: "Order the steps of the forced-choice jealousy procedure.",
          items: [
            "Participant imagines a committed romantic partner",
            "Two infidelity scenarios are described: one sexual, one emotional",
            "Participant selects the single more-distressing scenario",
            "Researchers compare the proportion of men versus women choosing each"
          ],
          explain: "The design has participants vividly imagine a partner, then commit to one scenario, and finally the sexes' choice distributions are compared."
        },
        {
          type: "truefalse",
          q: "The forced-choice result showed that men and women responded identically, with no sex difference.",
          answer: false,
          explain: "The finding is famous precisely because the sexes diverged: men leaned toward sexual infidelity as worse, women toward emotional infidelity."
        },
        {
          type: "match",
          q: "Match each infidelity type to what it most threatened in the ancestral past.",
          pairs: [
            ["Sexual infidelity", "Risk of a rival's child (paternity threat)"],
            ["Emotional infidelity", "Risk of losing a partner's commitment and resources"],
            ["Forced choice", "Method that made the sex difference most visible"]
          ],
          explain: "Sexual infidelity maps onto paternity risk, emotional infidelity onto loss of investment, and the forced-choice format sharpened the observed difference."
        }
      ]
    },
    {
      id: "l91",
      title: "Physiological Jealousy Studies",
      intro: "Buss et al. (1992) went beyond self-report, recording the body's reactions while participants imagined each kind of infidelity.",
      questions: [
        {
          type: "mcq",
          q: "Which set of physiological measures did Buss et al. (1992) record while participants imagined infidelity?",
          choices: [
            "Blood glucose, body temperature, and pupil size",
            "Heart rate, skin conductance (electrodermal activity), and brow-muscle activity",
            "Brain lesions, reflexes, and lung capacity",
            "Bone density, saliva pH, and grip strength"
          ],
          answer: 1,
          explain: "The study measured heart rate, electrodermal (skin-conductance) responses, and corrugator (brow) muscle activity via EMG as indices of distress."
        },
        {
          type: "truefalse",
          q: "In the physiological study, men showed greater increases in heart rate and skin conductance when imagining sexual infidelity than emotional infidelity.",
          answer: true,
          explain: "Men's autonomic arousal (heart rate and skin conductance) rose more to imagery of a partner's sexual infidelity, matching the self-report pattern."
        },
        {
          type: "fill",
          q: "Skin-conductance responses reflect activity of the ____ nervous system's sweat glands, a common physiological index of emotional arousal.",
          answer: "autonomic",
          accept: ["autonomic", "sympathetic"],
          explain: "Electrodermal activity is driven by sympathetic autonomic arousal, so rising skin conductance signals heightened emotional distress."
        },
        {
          type: "match",
          q: "Match each physiological measure to what it records.",
          pairs: [
            ["Electrocardiogram", "Heart rate"],
            ["Electrodermal activity", "Skin conductance from sweat glands"],
            ["Corrugator EMG", "Frowning (brow) muscle tension"]
          ],
          explain: "Buss et al. combined a cardiac measure, a skin-conductance measure, and a facial-muscle measure to triangulate distress."
        },
        {
          type: "mcq",
          q: "What was the main value of adding physiological measures to the jealousy research?",
          choices: [
            "They proved jealousy is entirely learned in childhood",
            "They removed the need to study men and women separately",
            "They offered evidence of distress that did not rely only on conscious self-report",
            "They showed the body reacts the same to all emotions"
          ],
          answer: 2,
          explain: "Bodily measures provide a converging, less deliberate index of distress, strengthening claims that the sex difference is not merely a reporting artifact."
        },
        {
          type: "truefalse",
          q: "Corrugator (brow) muscle activity tends to increase when a person frowns during a distressing mental image.",
          answer: true,
          explain: "The corrugator supercilii draws the brows together in frowning, so its EMG signal rises with negative emotional engagement."
        },
        {
          type: "order",
          q: "Order the steps of the physiological jealousy experiment.",
          items: [
            "Attach heart-rate, skin-conductance, and facial-EMG sensors",
            "Have the participant vividly imagine a partner's sexual infidelity",
            "Have the participant vividly imagine a partner's emotional infidelity",
            "Compare autonomic and facial responses across the two scenarios and sexes"
          ],
          explain: "Sensors are attached first, each imagery condition is run, and then the recorded responses are compared between scenarios and between sexes."
        }
      ]
    },
    {
      id: "l92",
      title: "Critiques of Jealousy Data",
      intro: "David DeSteno and colleagues challenged whether the sex difference reflects an evolved module or an artifact of how the question is asked.",
      questions: [
        {
          type: "mcq",
          q: "What is a central methodological objection DeSteno and colleagues raised against the jealousy findings?",
          choices: [
            "The studies used too many physiological sensors at once",
            "The forced-choice format may manufacture a sex difference that shrinks with continuous rating measures",
            "The samples were entirely non-human animals",
            "Participants were never told to imagine a partner"
          ],
          answer: 1,
          explain: "DeSteno et al. argued the dramatic difference is partly an artifact of forcing a binary choice; when people rate each scenario continuously, the gap narrows."
        },
        {
          type: "fill",
          q: "DeSteno and Salovey's 'double-shot' or 'two-for-one' account says people ____ that one kind of infidelity implies the other.",
          answer: "infer",
          accept: ["infer", "assume", "believe"],
          explain: "The double-shot hypothesis holds that a man may infer sex implies love and a woman may infer love implies sex, so choices reflect beliefs about co-occurrence, not a dedicated module."
        },
        {
          type: "truefalse",
          q: "DeSteno, Bartlett, Braverman, and Salovey (2002) reported that placing participants under cognitive load reduced or eliminated the forced-choice sex difference.",
          answer: true,
          explain: "Under cognitive constraint the sex difference weakened, which DeSteno took as evidence the effect depends on effortful reasoning rather than an automatic evolved response."
        },
        {
          type: "mcq",
          q: "Why did the cognitive-load result matter for the debate?",
          choices: [
            "It showed evolved modules require heavy conscious effort to operate",
            "It proved men and women have identical brains",
            "An automatic, encapsulated module should NOT vanish under cognitive load, so its disappearance argues against one",
            "It confirmed the physiological data were faked"
          ],
          answer: 2,
          explain: "Evolutionary modules are theorized to run automatically; if load erases the difference, critics argue the effect comes from deliberate inference instead."
        },
        {
          type: "match",
          q: "Match each critique-side idea to its meaning.",
          pairs: [
            ["Forced-choice artifact", "Binary format exaggerates a real-but-smaller difference"],
            ["Double-shot hypothesis", "People infer one infidelity type implies the other"],
            ["Cognitive-load test", "Load removes the gap, implying effortful processing"]
          ],
          explain: "These three arguments form the core of DeSteno's case that the sex difference is measurement- and inference-dependent rather than a hard-wired automatic module."
        },
        {
          type: "truefalse",
          q: "The critiques from DeSteno's group settled the debate, and evolutionary psychologists now agree there is no evolved sex difference in jealousy.",
          answer: false,
          explain: "The debate remains open; Buss and others responded with cross-cultural and continuous-measure data, so no consensus dismissing the effect exists."
        },
        {
          type: "order",
          q: "Order the reasoning of the cognitive-load critique.",
          items: [
            "Assume a true evolved module should operate automatically",
            "Impose a cognitive load while participants make the jealousy choice",
            "Observe that the sex difference shrinks or disappears",
            "Conclude the effect likely depends on effortful, deliberate inference"
          ],
          explain: "Starting from the automaticity assumption, the load manipulation and its result lead to the inference-based interpretation."
        }
      ]
    },
    {
      id: "l93",
      title: "Mate-Retention Tactics",
      intro: "Buss and Shackelford's 'from vigilance to violence' research catalogued the behaviors people use to hold on to a mate, from watchful guarding to abuse.",
      questions: [
        {
          type: "mcq",
          q: "The mate-retention research by Buss and Shackelford (1997) is famously titled 'From vigilance to ____.'",
          choices: [
            "affection",
            "marriage",
            "violence",
            "indifference"
          ],
          answer: 2,
          explain: "The title 'From vigilance to violence' captures the full range of tactics, from benign watchfulness to coercive aggression."
        },
        {
          type: "truefalse",
          q: "Concealing a partner from potential rivals and monitoring their whereabouts are forms of direct mate guarding.",
          answer: true,
          explain: "Vigilance, concealment of the mate, and monopolizing a partner's time are classic direct-guarding tactics meant to reduce rival access."
        },
        {
          type: "fill",
          q: "Watchfully monitoring a partner to detect or deter rivals is a mate-retention tactic broadly called mate ____.",
          answer: "guarding",
          accept: ["guarding", "guard"],
          explain: "Mate guarding is the umbrella term for behaviors that keep a partner from straying or from being poached by rivals."
        },
        {
          type: "match",
          q: "Match each mate-retention tactic to an example behavior.",
          pairs: [
            ["Vigilance", "Checking who a partner has been spending time with"],
            ["Concealment", "Keeping a partner away from attractive rivals"],
            ["Resource display", "Buying gifts and showing off provisioning ability"],
            ["Violence", "Threats or physical aggression to control a partner"]
          ],
          explain: "The tactics span monitoring, hiding the mate, positive inducements like resource display, and coercive extremes like violence."
        },
        {
          type: "mcq",
          q: "According to this research, which positive-inducement tactic did men tend to emphasize more than women?",
          choices: [
            "Enhancing physical appearance",
            "Displaying resources and provisioning ability",
            "Wearing a partner's clothing",
            "Reducing contact with all friends"
          ],
          answer: 1,
          explain: "Men more often used resource display, consistent with women's ancestral valuation of a partner's ability to invest, while women more often enhanced appearance."
        },
        {
          type: "truefalse",
          q: "In this framework, controlling violence is treated as an entirely separate phenomenon unrelated to mate guarding.",
          answer: false,
          explain: "The 'vigilance to violence' framing places coercive violence on the same continuum of possessive mate-retention behavior, not as an unrelated category."
        },
        {
          type: "order",
          q: "Order these mate-retention tactics from least to most coercive.",
          items: [
            "Vigilance and monitoring",
            "Concealing the partner from rivals",
            "Emotional manipulation and jealousy induction",
            "Threats and physical violence"
          ],
          explain: "The continuum runs from benign watchfulness, through hiding the mate and manipulation, to the coercive extreme of violence."
        }
      ]
    },
    {
      id: "l94",
      title: "Sexual Conflict Theory",
      intro: "Because the sexes often have divergent reproductive interests, evolution can pit male and female adaptations against one another.",
      questions: [
        {
          type: "mcq",
          q: "What is the core premise of sexual conflict theory?",
          choices: [
            "Males and females always share identical reproductive interests",
            "The sexes can have divergent reproductive interests, producing conflicting adaptations",
            "Conflict occurs only between members of the same sex",
            "Reproduction has no evolutionary costs for either sex"
          ],
          answer: 1,
          explain: "Sexual conflict theory holds that because optimal outcomes differ for each sex, selection can favor traits in one sex that are costly to the other."
        },
        {
          type: "truefalse",
          q: "Trivers's (1972) parental investment theory, in which the sexes typically invest unequally, helps explain why their interests can diverge.",
          answer: true,
          explain: "Different levels of obligatory investment give the sexes different optimal mating rates and strategies, the foundation for conflicting interests."
        },
        {
          type: "fill",
          q: "When a trait favored in one sex is costly to the other, the two sexes can enter an evolutionary arms race called sexually ____ coevolution.",
          answer: "antagonistic",
          accept: ["antagonistic", "antagonism"],
          explain: "Sexually antagonistic coevolution is the escalating back-and-forth in which each sex evolves counter-adaptations to the other's advantage-seeking traits."
        },
        {
          type: "mcq",
          q: "Over what do the sexes most commonly come into conflict under this theory?",
          choices: [
            "Digestion and metabolism",
            "Migration routes only",
            "Sleep-cycle timing",
            "Mating rate, mate choice, and parental investment"
          ],
          answer: 3,
          explain: "Conflict typically centers on how often to mate, with whom, and how much each parent invests, because the sexes' optima differ on these axes."
        },
        {
          type: "match",
          q: "Match each sexual-conflict concept to its meaning.",
          pairs: [
            ["Sexual conflict", "Divergent reproductive interests between the sexes"],
            ["Antagonistic coevolution", "Arms race of trait and counter-trait across sexes"],
            ["Parental investment", "Unequal costs of offspring that shape strategies"]
          ],
          explain: "Divergent interests drive an antagonistic arms race, and unequal parental investment is the underlying source of the divergence."
        },
        {
          type: "truefalse",
          q: "Sexual conflict theory predicts that adaptations always benefit both mating partners equally.",
          answer: false,
          explain: "The theory's whole point is that a trait can raise one sex's fitness while lowering the other's, so benefits are frequently unequal."
        },
        {
          type: "order",
          q: "Order the logic of sexual conflict from cause to outcome.",
          items: [
            "The sexes invest unequally in reproduction",
            "Their optimal reproductive strategies diverge",
            "Selection favors traits in one sex that are costly to the other",
            "Counter-adaptations evolve, producing an antagonistic arms race"
          ],
          explain: "Unequal investment leads to divergent optima, then to costly advantage-seeking traits, and finally to escalating counter-adaptation."
        }
      ]
    },
    {
      id: "l95",
      title: "Deception in Courtship",
      intro: "When mating value is hard to verify, individuals may send dishonest signals about their qualities, resources, or intentions.",
      questions: [
        {
          type: "mcq",
          q: "In Tooke and Camire's (1991) study of mating deception, men most often deceived by exaggerating which of the following?",
          choices: [
            "Their physical attractiveness with makeup",
            "Their resources, sincerity, and commitment",
            "Their body weight downward",
            "Their number of same-sex friends"
          ],
          answer: 1,
          explain: "Men more often misrepresented status, resources, kindness, and commitment, traits ancestrally valued by women, whereas women more often enhanced appearance."
        },
        {
          type: "truefalse",
          q: "Research suggests women, more than men, tend to deceive by enhancing their physical appearance during courtship.",
          answer: true,
          explain: "Consistent with men's valuation of youth and beauty, women more often used appearance-enhancing deception such as flattering clothing and cosmetics."
        },
        {
          type: "fill",
          q: "Zahavi's handicap principle proposes that a signal is hard to fake, and therefore honest, when it is ____ to produce.",
          answer: "costly",
          accept: ["costly", "expensive", "cost"],
          explain: "Costly signaling theory argues that only high-quality individuals can afford expensive signals, which keeps such signals reliable and hard to counterfeit."
        },
        {
          type: "match",
          q: "Match each courtship-deception concept to its description.",
          pairs: [
            ["Dishonest signal", "Misrepresenting quality, resources, or intent"],
            ["Costly signal", "Hard-to-fake display that stays honest"],
            ["Handicap principle", "Reliability comes from a signal's high cost"]
          ],
          explain: "Deception exploits cheap-to-fake cues, while costly signals and the handicap principle explain why some displays remain trustworthy."
        },
        {
          type: "mcq",
          q: "Why is dishonest signaling of intent (for example, feigning long-term commitment) an expected tactic?",
          choices: [
            "Because signals of intent are easy for a partner to verify instantly",
            "Because it always benefits the deceived partner",
            "Because faking commitment can secure mating access without paying the promised investment",
            "Because it removes all reproductive competition"
          ],
          answer: 2,
          explain: "Feigning commitment can gain a mating opportunity while avoiding the real costs of investment, so selection can favor such deception when it goes undetected."
        },
        {
          type: "truefalse",
          q: "If deceptive signals became universal and undetectable, honest signaling would remain equally valuable to receivers.",
          answer: false,
          explain: "Widespread undetectable deception erodes a signal's information value; receivers evolve skepticism and detection, favoring costlier honest signals."
        },
        {
          type: "order",
          q: "Order the coevolutionary sequence of signaling and deception.",
          items: [
            "An honest signal reliably advertises mate value",
            "Some individuals fake the signal to gain mating access",
            "Receivers evolve skepticism and deception-detection",
            "Signalers favor costlier, harder-to-fake honest displays"
          ],
          explain: "Deception invades an honest system, drives detection in receivers, and pushes signalers toward costly signals that restore reliability."
        }
      ]
    },
    {
      id: "l96",
      title: "Cryptic Female Choice",
      intro: "Female mate choice does not end at mating; internal, post-copulatory mechanisms can bias which male's sperm fertilizes the eggs.",
      questions: [
        {
          type: "mcq",
          q: "What does 'cryptic female choice' refer to?",
          choices: [
            "A female choosing a mate based only on secret rituals before mating",
            "Post-copulatory female mechanisms that bias paternity among the sperm of different males",
            "A male hiding his courtship displays from rivals",
            "Random fertilization unaffected by the female"
          ],
          answer: 1,
          explain: "Cryptic female choice describes female physiological and behavioral mechanisms, hidden inside the reproductive tract, that non-randomly favor certain males' sperm after mating."
        },
        {
          type: "truefalse",
          q: "Cryptic female choice is a form of post-copulatory sexual selection, occurring after mating rather than before.",
          answer: true,
          explain: "Unlike pre-copulatory choice (whom to mate with), cryptic choice operates after copulation, shaping fertilization outcomes internally."
        },
        {
          type: "fill",
          q: "When multiple males' sperm compete inside a single female to fertilize her eggs, the process is called sperm ____.",
          answer: "competition",
          accept: ["competition", "competitions"],
          explain: "Sperm competition, described by Geoff Parker in 1970, is the post-copulatory rivalry among sperm; cryptic female choice is the female's influence over its outcome."
        },
        {
          type: "match",
          q: "Match each post-copulatory concept to its meaning.",
          pairs: [
            ["Sperm competition", "Rival males' sperm compete within one female"],
            ["Cryptic female choice", "Female mechanisms bias which sperm succeeds"],
            ["Post-copulatory selection", "Selection acting after mating occurs"]
          ],
          explain: "Sperm competition sets up the arena, cryptic female choice is the female's biasing role, and both are forms of post-copulatory selection."
        },
        {
          type: "mcq",
          q: "Which of the following is a plausible mechanism of cryptic female choice?",
          choices: [
            "Choosing a partner by his song before mating",
            "Refusing to mate with any male at all",
            "Changing the color of courtship feathers",
            "Selectively ejecting or differentially storing a given male's sperm after mating"
          ],
          answer: 3,
          explain: "Documented mechanisms include selective sperm ejection, differential sperm storage, and biased transport, all of which occur internally after copulation."
        },
        {
          type: "truefalse",
          q: "Cryptic female choice implies that the female has no influence at all over paternity once mating has occurred.",
          answer: false,
          explain: "It implies the opposite: the female retains covert control, actively biasing which male's sperm fertilizes her eggs."
        },
        {
          type: "order",
          q: "Order these events from pre-copulatory to post-copulatory selection.",
          items: [
            "A female evaluates and chooses which males to mate with",
            "The female mates with one or more males",
            "Sperm from different males compete inside the female",
            "Cryptic female mechanisms bias which sperm fertilizes the eggs"
          ],
          explain: "Selection begins with overt mate choice, proceeds through mating and sperm competition, and ends with the female's cryptic post-copulatory biasing."
        }
      ]
    }
  ]
});
