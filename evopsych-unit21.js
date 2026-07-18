window.ACADEMY.addUnit("evopsych", {
  id: "unit-21",
  title: "Life History Theory",
  color: "#7c5cff",
  icon: "⏳",
  description: "How organisms budget finite energy across growth, maintenance, and reproduction, and how those trade-offs shape development, timing, and aging.",
  lessons: [
    {
      id: "l161",
      title: "Life History Trade-Offs",
      intro: "Life history theory studies how organisms allocate finite energy among competing demands like growth, maintenance, and reproduction.",
      questions: [
        {
          type: "mcq",
          q: "According to life history theory, why must organisms make trade-offs?",
          choices: [
            "Because energy and resources are finite and cannot be spent on two functions at once",
            "Because all species share an identical reproductive schedule",
            "Because mutation rates are fixed for every organism",
            "Because predators eliminate all variation in behavior"
          ],
          answer: 0,
          explain: "Life history theory begins from the fact that time and energy are limited, so investing in one demand leaves less for another."
        },
        {
          type: "truefalse",
          q: "Energy allocated to reproduction is no longer available for bodily growth and maintenance.",
          answer: true,
          explain: "This is the central logic of a trade-off: the same unit of energy cannot fund two competing functions at the same time."
        },
        {
          type: "fill",
          q: "Life history theory studies how organisms budget their limited ____ among growth, maintenance, and reproduction.",
          answer: "energy",
          accept: ["energy", "resources"],
          explain: "Finite energy, and resources more broadly, is the currency that must be divided across competing life functions."
        },
        {
          type: "match",
          q: "Match each life-history demand with what it accomplishes.",
          pairs: [
            ["Growth", "Increasing body size and building the body"],
            ["Maintenance", "Repairing tissue and resisting disease"],
            ["Reproduction", "Producing and rearing offspring"]
          ],
          explain: "The three major places an organism can spend energy are growth, maintenance, and reproduction."
        },
        {
          type: "order",
          q: "Order these life-history stages as they typically unfold across the life course.",
          items: ["Birth", "Growth and development", "Reproduction", "Senescence"],
          explain: "Energy shifts from building the body early in life toward reproduction, followed eventually by senescence."
        },
        {
          type: "mcq",
          q: "Which of these best illustrates a life-history trade-off?",
          choices: [
            "Choosing a heavier coat in winter",
            "Maturing earlier and reproducing sooner at the cost of a smaller adult body",
            "Preferring sweet foods over bitter ones",
            "Learning to read a second language"
          ],
          answer: 1,
          explain: "Maturing early trades continued growth for earlier reproduction, a classic energy-allocation trade-off."
        },
        {
          type: "truefalse",
          q: "Life history theory assumes an organism can maximize growth, survival, and reproduction all at once with no cost.",
          answer: false,
          explain: "The whole premise is that these goals compete, so a gain in one usually comes at a cost to another."
        }
      ]
    },
    {
      id: "l162",
      title: "The Fast-Slow Continuum",
      intro: "The classic r/K framework has been reframed by modern life history theory into a graded fast-slow continuum of strategies.",
      questions: [
        {
          type: "mcq",
          q: "Who introduced the r/K selection framework?",
          choices: [
            "Charles Darwin and Alfred Wallace",
            "Robert MacArthur and E. O. Wilson",
            "Robert Trivers working alone",
            "Thomas Kirkwood"
          ],
          answer: 1,
          explain: "MacArthur and Wilson introduced r/K selection in 1967 in The Theory of Island Biogeography."
        },
        {
          type: "fill",
          q: "In r/K terminology, K refers to the environment's ____ capacity, near which K-selected species tend to live.",
          answer: "carrying",
          accept: ["carrying"],
          explain: "K stands for carrying capacity; K-selected species live in stable populations near that ceiling."
        },
        {
          type: "truefalse",
          q: "r-selected species typically produce many offspring while giving each little parental investment.",
          answer: true,
          explain: "r-strategists maximize reproductive rate in unstable environments, producing many low-investment offspring."
        },
        {
          type: "match",
          q: "Match each strategy label with its characteristic traits.",
          pairs: [
            ["r-selected", "Many offspring, little investment, unstable environments"],
            ["K-selected", "Few offspring, heavy investment, stable environments"],
            ["Fast strategy", "Early maturation and short lifespan"],
            ["Slow strategy", "Late maturation and long lifespan"]
          ],
          explain: "Both r/K and the fast-slow continuum contrast high-output, low-investment strategies with low-output, high-investment ones."
        },
        {
          type: "mcq",
          q: "How does modern life history theory largely treat the classic r/K dichotomy?",
          choices: [
            "As the current gold standard, still used unchanged",
            "As a discredited idea with no lasting influence",
            "As a historical precursor reframed into the continuous fast-slow continuum",
            "As a theory strictly about genetic drift"
          ],
          answer: 2,
          explain: "By the 1990s r/K was largely replaced by age-structured demographic models and the continuous fast-slow continuum, which keeps its spirit."
        },
        {
          type: "truefalse",
          q: "The fast-slow continuum treats life-history strategy as a single either/or category rather than a graded dimension.",
          answer: false,
          explain: "The continuum is graded: species and individuals fall along a spectrum from fast to slow, not into two fixed boxes."
        },
        {
          type: "order",
          q: "Order these animals from the fast end toward the slow end of the life-history continuum.",
          items: ["Mouse", "Rabbit", "Deer", "Elephant"],
          explain: "Fast species like mice mature in weeks and breed prolifically; slow species like elephants mature over years and invest heavily in single calves."
        }
      ]
    },
    {
      id: "l163",
      title: "Somatic Versus Reproductive Effort",
      intro: "An organism's energy budget divides into somatic effort, which builds and maintains the body, and reproductive effort, which produces offspring.",
      questions: [
        {
          type: "mcq",
          q: "In life history theory, somatic effort refers to energy invested in...",
          choices: [
            "Producing gametes and attracting mates",
            "Building, maintaining, and repairing the body",
            "Migrating between habitats",
            "Defending territory only"
          ],
          answer: 1,
          explain: "Somatic effort is investment in the soma, meaning growth, maintenance, and survival of the body."
        },
        {
          type: "truefalse",
          q: "Reproductive effort is often subdivided into mating effort and parenting effort.",
          answer: true,
          explain: "Reproductive effort includes energy spent finding and competing for mates (mating effort) and rearing offspring (parenting effort)."
        },
        {
          type: "fill",
          q: "The word 'soma' refers to the ____, as distinguished from the reproductive germ line.",
          answer: "body",
          accept: ["body"],
          explain: "Soma means the body; the somatic-versus-germ distinction, from Weismann, underlies somatic versus reproductive effort."
        },
        {
          type: "match",
          q: "Match each form of effort with what it involves.",
          pairs: [
            ["Somatic effort", "Growth and maintenance of the body"],
            ["Mating effort", "Finding, attracting, and competing for mates"],
            ["Parenting effort", "Provisioning and protecting offspring"]
          ],
          explain: "Somatic effort supports survival, while reproductive effort splits into mating and parenting."
        },
        {
          type: "mcq",
          q: "Why can investing heavily in current reproduction reduce future reproduction?",
          choices: [
            "Because it violates Mendel's laws",
            "Because it raises the environment's carrying capacity",
            "Because energy diverted from somatic maintenance can lower survival and later output",
            "It never does; the two are completely independent"
          ],
          answer: 2,
          explain: "Reproducing now draws energy away from maintaining the body, which can shorten survival and reduce future breeding."
        },
        {
          type: "truefalse",
          q: "Early in life, organisms generally allocate a larger share of energy to growth than to reproduction.",
          answer: true,
          explain: "Juveniles prioritize somatic growth; the budget shifts toward reproduction only after maturity."
        },
        {
          type: "order",
          q: "Order the typical shift in an organism's energy budget across its life.",
          items: ["Heavy investment in growth", "Reaching sexual maturity", "Heavy investment in reproduction", "Declining somatic maintenance"],
          explain: "Budgets move from growth, to maturation, to reproduction, with somatic upkeep eventually declining."
        }
      ]
    },
    {
      id: "l164",
      title: "Quantity-Quality Trade-Off",
      intro: "With a fixed parental budget, producing more offspring means investing less in each one.",
      questions: [
        {
          type: "mcq",
          q: "The quantity-quality trade-off describes the tension between...",
          choices: [
            "The number of offspring and the investment given to each offspring",
            "Body size and brain size",
            "Mating effort and territory size",
            "Lifespan and metabolic rate"
          ],
          answer: 0,
          explain: "With a fixed budget, having more offspring means less can be invested in each one."
        },
        {
          type: "truefalse",
          q: "If a parent has a fixed energy budget, producing more offspring generally reduces the investment available per offspring.",
          answer: true,
          explain: "A fixed budget split more ways yields less per individual, which is the essence of the quantity-quality trade-off."
        },
        {
          type: "fill",
          q: "The ornithologist David ____ studied optimal clutch size, an early example of the quantity-quality trade-off in birds.",
          answer: "lack",
          accept: ["lack"],
          explain: "David Lack's work on clutch size showed that birds face a trade-off between egg number and offspring survival."
        },
        {
          type: "mcq",
          q: "Smith and Fretwell's 1974 model addressed the trade-off between...",
          choices: [
            "Predator and prey population sizes",
            "Optimal size and number of offspring given a fixed budget",
            "Somatic and germ cells",
            "Menopause timing and total lifespan"
          ],
          answer: 1,
          explain: "Smith and Fretwell modeled how a fixed parental investment is best divided between offspring size and offspring number."
        },
        {
          type: "match",
          q: "Match each term with its meaning in the quantity-quality trade-off.",
          pairs: [
            ["Quantity strategy", "Many offspring, low investment in each"],
            ["Quality strategy", "Few offspring, high investment in each"],
            ["Fixed budget", "The constraint that forces the trade-off"]
          ],
          explain: "A limited parental budget forces a choice along the quantity-quality axis."
        },
        {
          type: "truefalse",
          q: "Producing the largest possible clutch always maximizes the number of surviving offspring.",
          answer: false,
          explain: "Lack showed that intermediate clutch sizes often maximize survivors, because an overly large brood leaves too little food per chick."
        },
        {
          type: "order",
          q: "Order these outcomes as a parent shifts from a quality strategy toward a quantity strategy.",
          items: ["Few offspring, high investment each", "Moderate number, moderate investment", "Many offspring, low investment each"],
          explain: "Moving along the trade-off increases offspring number while lowering per-offspring investment."
        }
      ]
    },
    {
      id: "l165",
      title: "Belsky-Draper-Harpending Model",
      intro: "Belsky, Draper, and Harpending (1991) proposed that early childhood stress calibrates a person's later reproductive strategy and the timing of maturation.",
      questions: [
        {
          type: "mcq",
          q: "The Belsky, Draper, and Harpending (1991) model proposes that early childhood experience...",
          choices: [
            "Has no measurable effect on later reproduction",
            "Calibrates later reproductive strategy, including the timing of maturation",
            "Determines adult height and nothing else",
            "Fully reverses its effects at puberty"
          ],
          answer: 1,
          explain: "Their theory holds that early rearing experience shapes a person's later reproductive strategy and developmental timing."
        },
        {
          type: "truefalse",
          q: "In this model, children who experience early stress and unpredictability tend to develop toward a faster reproductive strategy.",
          answer: true,
          explain: "Harsh, unpredictable early environments are proposed to steer development toward earlier maturation and reproduction."
        },
        {
          type: "fill",
          q: "The model is often called psychosocial ____ theory, because early stress speeds up reproductive development.",
          answer: "acceleration",
          accept: ["acceleration"],
          explain: "Belsky and colleagues' framework is commonly labeled psychosocial acceleration theory."
        },
        {
          type: "match",
          q: "Match each early environment with the reproductive strategy the model predicts.",
          pairs: [
            ["Supportive, predictable rearing", "Slow strategy: later maturation, stable bonds, high investment"],
            ["Harsh, unpredictable rearing", "Fast strategy: earlier maturation, short-term mating, lower investment"],
            ["Early attachment quality", "A cue used to calibrate later reproductive strategy"]
          ],
          explain: "The theory links early environmental cues to divergent slow versus fast reproductive strategies."
        },
        {
          type: "mcq",
          q: "What information does early experience provide, according to the model?",
          choices: [
            "The child's future income",
            "The exact age of first reproduction, fixed at birth",
            "Cues about local mortality and environmental predictability",
            "Nothing that is adaptively useful"
          ],
          answer: 2,
          explain: "Early experience is thought to signal how harsh or predictable the world is, calibrating strategy accordingly."
        },
        {
          type: "truefalse",
          q: "The model predicts that secure, supportive early environments push development toward later maturation and higher parental investment.",
          answer: true,
          explain: "Secure, predictable rearing is predicted to favor a slow strategy with delayed maturation and greater investment."
        },
        {
          type: "order",
          q: "Order the causal chain proposed by the Belsky-Draper-Harpending model.",
          items: ["Early family stress and insecure attachment", "Perception of a harsh, unpredictable world", "Accelerated pubertal timing", "Earlier sexual activity and reproduction"],
          explain: "Early stress is read as a cue to unpredictability, which accelerates maturation and leads to earlier reproduction."
        }
      ]
    },
    {
      id: "l166",
      title: "Father Absence Effects",
      intro: "Bruce Ellis's research links father absence to accelerated pubertal timing in daughters, extending the father-absence hypothesis.",
      questions: [
        {
          type: "mcq",
          q: "Bruce Ellis's research is best known for linking father absence to...",
          choices: [
            "Delayed puberty in daughters",
            "Earlier pubertal timing in daughters",
            "Increased adult height",
            "A reduced number of siblings"
          ],
          answer: 1,
          explain: "Ellis found that father absence is associated with earlier pubertal maturation in girls."
        },
        {
          type: "truefalse",
          q: "Ellis's work suggests that the presence of a warm, investing biological father tends to delay daughters' pubertal timing.",
          answer: true,
          explain: "Paternal investment theory holds that an involved father is associated with later maturation in daughters."
        },
        {
          type: "fill",
          q: "Ellis's longitudinal research found that father absence predicts earlier ____, the first menstrual period, in girls.",
          answer: "menarche",
          accept: ["menarche"],
          explain: "Earlier menarche is a key marker of the accelerated pubertal timing associated with father absence."
        },
        {
          type: "mcq",
          q: "The father-absence hypothesis in life history theory was first proposed by...",
          choices: [
            "Draper and Harpending in 1982",
            "Kirkwood in 1977",
            "MacArthur and Wilson in 1967",
            "Hawkes in 1998"
          ],
          answer: 0,
          explain: "Draper and Harpending (1982) proposed the father-absence hypothesis, which Ellis later developed and tested."
        },
        {
          type: "match",
          q: "Match each condition or figure with the associated outcome or role.",
          pairs: [
            ["Father absent early", "Earlier pubertal timing and sexual debut in daughters"],
            ["Father present and investing", "Later pubertal timing in daughters"],
            ["Bruce Ellis", "Researcher who tested father-absence effects on puberty"]
          ],
          explain: "Ellis's studies contrast the developmental trajectories of father-absent and father-present daughters."
        },
        {
          type: "truefalse",
          q: "Ellis argues that pubertal timing is rigidly fixed by genes and cannot be shaped by the family environment.",
          answer: false,
          explain: "Ellis's integrated model treats pubertal timing as environmentally responsive, not rigidly gene-determined."
        },
        {
          type: "order",
          q: "Order the proposed pathway linking father absence to reproductive timing in daughters.",
          items: ["Absence of an investing biological father", "Environmental cue of low paternal investment", "Accelerated pubertal development", "Earlier onset of sexual activity"],
          explain: "Father absence acts as a cue that accelerates maturation and leads to earlier sexual activity, per Ellis."
        }
      ]
    },
    {
      id: "l167",
      title: "Menopause and Grandmothering",
      intro: "Kristen Hawkes's grandmother hypothesis argues that post-reproductive women boost their fitness by helping to provision grandchildren.",
      questions: [
        {
          type: "mcq",
          q: "The grandmother hypothesis, associated with Kristen Hawkes, proposes that menopause is adaptive because...",
          choices: [
            "Older women can no longer forage effectively",
            "Post-reproductive women boost fitness by helping provision grandchildren",
            "It reduces the total human population",
            "It prevents any further investment in kin"
          ],
          answer: 1,
          explain: "Hawkes argues that post-reproductive grandmothers raise their inclusive fitness by helping feed and care for grandchildren."
        },
        {
          type: "truefalse",
          q: "Hawkes developed the grandmother hypothesis partly from observations of Hadza foragers in Tanzania.",
          answer: true,
          explain: "Hawkes and colleagues observed hardworking older Hadza women provisioning grandchildren, which inspired the hypothesis."
        },
        {
          type: "fill",
          q: "By provisioning grandchildren, grandmothers can let their daughters wean sooner and shorten the ____ interval between births.",
          answer: "interbirth",
          accept: ["interbirth", "birth"],
          explain: "Grandmaternal help shortens interbirth intervals, allowing daughters to reproduce more quickly."
        },
        {
          type: "mcq",
          q: "The grandmother hypothesis is often used to help explain the evolution of...",
          choices: [
            "Human color vision",
            "Bipedal walking",
            "The long human post-reproductive lifespan",
            "Larger clutch sizes"
          ],
          answer: 2,
          explain: "Grandmaternal help is proposed as a driver of humans' unusually long post-reproductive lifespan."
        },
        {
          type: "match",
          q: "Match each term with its meaning.",
          pairs: [
            ["Menopause", "Cessation of a woman's own reproduction"],
            ["Grandmothering", "Investing in grandchildren after menopause"],
            ["Inclusive fitness", "Fitness gained by helping genetic relatives"]
          ],
          explain: "Grandmothering converts post-reproductive effort into inclusive-fitness gains through grandchildren."
        },
        {
          type: "truefalse",
          q: "Humans are the only mammals in which females experience a long post-reproductive lifespan.",
          answer: false,
          explain: "Some toothed whales, such as orcas and pilot whales, also show menopause and a long post-reproductive life."
        },
        {
          type: "order",
          q: "Order the causal steps in the grandmother hypothesis.",
          items: ["A woman reaches menopause and stops reproducing", "She forages and provisions her grandchildren", "Her daughters wean their infants earlier", "Daughters reach shorter interbirth intervals and higher fertility"],
          explain: "Grandmaternal provisioning frees daughters to reproduce faster, raising the grandmother's inclusive fitness."
        }
      ]
    },
    {
      id: "l168",
      title: "Aging and the Disposable Soma",
      intro: "Thomas Kirkwood's disposable soma theory explains aging as a trade-off between maintaining the body and investing in reproduction.",
      questions: [
        {
          type: "mcq",
          q: "The disposable soma theory of aging was proposed by...",
          choices: [
            "Thomas Kirkwood in 1977",
            "David Lack in 1947",
            "Kristen Hawkes in 1998",
            "Robert Trivers in 1972"
          ],
          answer: 0,
          explain: "Thomas Kirkwood introduced the disposable soma theory in a 1977 paper in Nature."
        },
        {
          type: "truefalse",
          q: "According to disposable soma theory, aging results from a trade-off between somatic maintenance and reproduction.",
          answer: true,
          explain: "Limited resources are divided between repairing the body and reproducing, and underinvestment in repair produces aging."
        },
        {
          type: "fill",
          q: "The theory is called 'disposable soma' because the body only needs to last long enough to ____.",
          answer: "reproduce",
          accept: ["reproduce", "reproduction"],
          explain: "Since the soma need only survive long enough to reproduce, perfect maintenance is not favored by selection."
        },
        {
          type: "mcq",
          q: "Why does natural selection not favor perfect somatic repair, according to Kirkwood?",
          choices: [
            "Because bodily repair is genetically impossible",
            "Because extrinsic mortality means the body is unlikely to survive indefinitely anyway",
            "Because reproduction requires no energy",
            "Because all species are effectively immortal"
          ],
          answer: 1,
          explain: "With predation and accidents likely to kill the body eventually, investing in indefinite repair yields little payoff."
        },
        {
          type: "truefalse",
          q: "Disposable soma theory predicts that higher extrinsic mortality should select for greater somatic maintenance and slower aging.",
          answer: false,
          explain: "It predicts the opposite: high extrinsic mortality favors early reproduction and faster aging, with less somatic investment."
        },
        {
          type: "match",
          q: "Match each term with its meaning in the theory of aging.",
          pairs: [
            ["Soma", "The body, as distinct from the germ line"],
            ["Somatic maintenance", "Repair processes that resist damage and aging"],
            ["Senescence", "Decline in function due to accumulated damage"]
          ],
          explain: "Diverting resources from somatic maintenance toward reproduction leaves damage unrepaired, causing senescence."
        },
        {
          type: "order",
          q: "Order the logic of the disposable soma theory.",
          items: ["Resources for maintenance and reproduction are limited", "Extrinsic mortality makes indefinite survival unlikely", "Selection favors reproduction over perfect repair", "Unrepaired damage accumulates as aging"],
          explain: "Because the body will not last forever, resources go to reproduction, and the accumulated damage appears as aging."
        }
      ]
    }
  ]
});
