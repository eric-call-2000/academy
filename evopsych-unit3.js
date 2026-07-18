window.ACADEMY.addUnit("evopsych", {
  id: "unit-3",
  title: "Sexual Selection",
  color: "#7c5cff",
  icon: "🦚",
  description: "Explores Darwin's second great theory and how competition for mates shapes bodies, ornaments, and minds.",
  lessons: [
    {
      id: "l17",
      title: "Darwin's Sexual Selection Idea",
      intro: "Darwin proposed a second selective force that favors traits helping animals win mates, even when those traits hurt survival.",
      questions: [
        {
          type: "mcq",
          q: "What did Darwin argue sexual selection favors?",
          choices: [
            "Traits that improve success at mating, not just survival",
            "Only traits that help an animal find food",
            "Traits that make an animal live as long as possible",
            "Random traits with no effect on reproduction"
          ],
          answer: 0,
          explain: "Sexual selection favors traits that boost reproductive access to mates, which is a separate pressure from ordinary survival."
        },
        {
          type: "truefalse",
          q: "Natural selection and sexual selection can pull a trait in opposite directions.",
          answer: true,
          explain: "A showy trait may lower survival (against natural selection) yet raise mating success (favored by sexual selection), so the two forces can conflict."
        },
        {
          type: "fill",
          q: "Darwin first laid out sexual selection in detail in his 1871 book, The Descent of Man, and Selection in Relation to ____.",
          answer: "sex",
          accept: ["sex"],
          explain: "The full title is 'The Descent of Man, and Selection in Relation to Sex,' published in 1871."
        },
        {
          type: "mcq",
          q: "Which trait is a classic example of sexual selection rather than survival selection?",
          choices: [
            "Thick fur that keeps an animal warm",
            "Sharp eyesight for spotting predators",
            "The elaborate tail of a male peacock",
            "Camouflage coloring that hides prey"
          ],
          answer: 2,
          explain: "The peacock's tail is costly for survival but attracts mates, making it a textbook product of sexual selection."
        },
        {
          type: "truefalse",
          q: "Sexual selection only ever produces traits that also help an animal survive better.",
          answer: false,
          explain: "Many sexually selected traits, like heavy antlers or bright plumage, actually reduce survival while improving mating success."
        },
        {
          type: "match",
          q: "Match each force with what it primarily rewards.",
          pairs: [
            ["Natural selection", "Surviving in the environment"],
            ["Sexual selection", "Winning access to mates"],
            ["Ornament", "A costly trait that attracts mates"]
          ],
          explain: "Natural selection tracks survival, sexual selection tracks mating success, and ornaments are the costly traits sexual selection can build."
        },
        {
          type: "order",
          q: "Order these steps in Darwin's logic for how a costly mating trait can spread.",
          items: [
            "A trait raises an individual's chance of mating",
            "That individual leaves more offspring than rivals",
            "The trait becomes more common in the next generation"
          ],
          explain: "Even if a trait is costly, if it wins more matings its bearers out-reproduce rivals and the trait spreads over generations."
        }
      ]
    },
    {
      id: "l18",
      title: "Intrasexual Competition",
      intro: "Intrasexual selection is same-sex rivalry, where members of one sex fight or compete for access to the other sex.",
      questions: [
        {
          type: "mcq",
          q: "Intrasexual competition refers to:",
          choices: [
            "Members of the same sex competing for mating access",
            "One sex choosing among the other sex",
            "Cooperation between the sexes to raise young",
            "Competition between different species for food"
          ],
          answer: 0,
          explain: "Intra means 'within,' so intrasexual competition is rivalry among members of the same sex for mates."
        },
        {
          type: "truefalse",
          q: "Large antlers and horns often evolve through intrasexual competition between males.",
          answer: true,
          explain: "Antlers and horns are weapons used in male-male contests, a classic outcome of intrasexual selection."
        },
        {
          type: "fill",
          q: "Weapons like antlers used in same-sex contests are the product of ____-sexual competition.",
          answer: "intra",
          accept: ["intra", "intrasexual"],
          explain: "Intrasexual competition (within one sex) tends to build weapons and body size used to defeat rivals."
        },
        {
          type: "mcq",
          q: "Which trait is most likely shaped by intrasexual (male-male) competition?",
          choices: [
            "Bright colors that females find attractive",
            "Large body size and strength for fighting rivals",
            "A pleasant song that draws females closer",
            "A symmetrical face that signals health"
          ],
          answer: 1,
          explain: "Traits for defeating same-sex rivals, such as size, strength, and weaponry, are hallmarks of intrasexual competition."
        },
        {
          type: "truefalse",
          q: "Intrasexual competition is always a direct physical fight and never involves display.",
          answer: false,
          explain: "Rivals may settle contests through displays, threats, or sperm competition rather than always fighting physically."
        },
        {
          type: "order",
          q: "Order these from a typical same-sex contest to its evolutionary result.",
          items: [
            "Two males compete for access to females",
            "The stronger or better-armed male wins",
            "Traits aiding victory become more common"
          ],
          explain: "When winners of same-sex contests mate more, the traits that helped them win spread through the population."
        },
        {
          type: "match",
          q: "Match each animal trait with the contest it supports.",
          pairs: [
            ["Elephant seal bulk", "Battling rival males on the beach"],
            ["Stag antlers", "Locking horns with other stags"],
            ["Beetle horns", "Prying rivals off females"]
          ],
          explain: "Each of these weapons and size traits evolved for winning direct contests against same-sex rivals."
        }
      ]
    },
    {
      id: "l19",
      title: "Intersexual Choice",
      intro: "Intersexual selection is mate choice, where the preferences of one sex shape the traits of the other sex over generations.",
      questions: [
        {
          type: "mcq",
          q: "Intersexual selection works mainly through:",
          choices: [
            "One sex choosing mates from the other sex",
            "Same-sex fights over territory",
            "Predators eating the weakest individuals",
            "Random mating with no preferences"
          ],
          answer: 0,
          explain: "Inter means 'between,' so intersexual selection is choice between the sexes, where one sex's preferences drive the other's traits."
        },
        {
          type: "truefalse",
          q: "In many species, females are the choosier sex because their reproductive investment is higher.",
          answer: true,
          explain: "Higher investment (eggs, gestation, care) makes each mating costlier, so the higher-investing sex, often females, tends to be choosier."
        },
        {
          type: "fill",
          q: "When one sex's preferences shape the other sex's appearance, this is called mate ____.",
          answer: "choice",
          accept: ["choice", "preference", "selection"],
          explain: "Mate choice is the mechanism of intersexual selection, where preferences steer the evolution of attractive traits."
        },
        {
          type: "mcq",
          q: "A male bird evolves brighter plumage over generations because females prefer bright males. This is an example of:",
          choices: [
            "Intrasexual competition",
            "Natural selection for camouflage",
            "Intersexual choice by females",
            "Kin selection"
          ],
          answer: 2,
          explain: "Female preference driving the evolution of male brightness is intersexual (mate choice) selection."
        },
        {
          type: "truefalse",
          q: "Only females can ever be the choosy sex; males never exercise mate choice.",
          answer: false,
          explain: "In sex-role-reversed species and when males invest heavily, males can be the choosier sex, so choosiness is not fixed by sex."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Intersexual selection", "Choice between the sexes"],
            ["Intrasexual selection", "Competition within one sex"],
            ["Choosy sex", "The sex that is selective about mates"]
          ],
          explain: "Intersexual selection is mate choice between sexes, intrasexual is same-sex rivalry, and the choosy sex is the selective one."
        },
        {
          type: "order",
          q: "Order the steps by which female preference builds a male trait.",
          items: [
            "Females prefer males showing a certain trait",
            "Preferred males mate more often",
            "The preferred trait becomes exaggerated over generations"
          ],
          explain: "Consistent preference for a trait gives its bearers more matings, so the trait grows more common and more exaggerated over time."
        }
      ]
    },
    {
      id: "l20",
      title: "The Peacock's Tail Problem",
      intro: "The peacock's train shows how sexual selection can build costly ornaments that lower survival yet persist because they win mates.",
      questions: [
        {
          type: "mcq",
          q: "Why is the peacock's tail called a 'problem' for evolution?",
          choices: [
            "It helps the peacock survive too well",
            "It is costly and lowers survival, yet still evolved",
            "It has no effect on the peacock at all",
            "It makes the peacock better at finding food"
          ],
          answer: 1,
          explain: "The tail is metabolically costly and makes escape from predators harder, so its existence seems to defy simple survival selection."
        },
        {
          type: "truefalse",
          q: "Darwin reportedly said the sight of a peacock's tail made him feel sick because it seemed to contradict survival selection.",
          answer: true,
          explain: "In an 1860 letter Darwin wrote that the sight of a peacock feather made him sick, since the tail's cost puzzled his theory of survival."
        },
        {
          type: "fill",
          q: "A costly, showy trait that attracts mates but hurts survival is called an ____.",
          answer: "ornament",
          accept: ["ornament", "ornaments"],
          explain: "Ornaments are extravagant, costly display traits, like the peacock's train, built by intersexual selection."
        },
        {
          type: "mcq",
          q: "How does a peacock's large train most directly reduce its survival?",
          choices: [
            "It makes the bird invisible to mates",
            "It improves its ability to fly long distances",
            "It is heavy and conspicuous, making escape from predators harder",
            "It keeps the bird cooler in hot weather"
          ],
          answer: 2,
          explain: "The bulky, brightly colored train is costly to grow and makes the peacock more visible and slower, raising predation risk."
        },
        {
          type: "truefalse",
          q: "The peacock's tail persists only because it helps the bird survive longer.",
          answer: false,
          explain: "The tail actually lowers survival; it persists because peahens prefer it, so it wins matings despite the survival cost."
        },
        {
          type: "order",
          q: "Order these to explain how a survival-lowering ornament can still spread.",
          items: [
            "An ornament grows large and costly",
            "It lowers the male's survival odds",
            "But it strongly boosts his mating success",
            "So it spreads despite the survival cost"
          ],
          explain: "If the mating benefit outweighs the survival cost, the net reproductive gain lets the costly ornament spread through the population."
        },
        {
          type: "match",
          q: "Match each part of the peacock puzzle to its role.",
          pairs: [
            ["The train", "The costly ornament"],
            ["Peahen preference", "The choosing force that maintains it"],
            ["Predation risk", "The survival cost it imposes"]
          ],
          explain: "The train is the ornament, peahen preference is the selective pressure keeping it, and predation is the survival cost it carries."
        }
      ]
    },
    {
      id: "l21",
      title: "Fisherian Runaway",
      intro: "Ronald Fisher showed how a preference and the trait it favors can become genetically coupled and drive each other to extremes.",
      questions: [
        {
          type: "mcq",
          q: "The Fisherian runaway process is driven by:",
          choices: [
            "A self-reinforcing loop between a trait and the preference for it",
            "Only the survival advantage of a trait",
            "Predators selecting for camouflage",
            "Random genetic drift with no selection"
          ],
          answer: 0,
          explain: "In runaway selection, genes for a trait and genes for preferring it become correlated, so each amplifies the other."
        },
        {
          type: "truefalse",
          q: "In Fisherian runaway, offspring can inherit both the attractive trait and the preference for it, linking the two genetically.",
          answer: true,
          explain: "Because choosy mothers pair with ornamented fathers, offspring inherit both sets of genes, creating a genetic correlation that fuels runaway."
        },
        {
          type: "fill",
          q: "The self-reinforcing coupling of a display trait and the mating preference for it is called Fisherian ____.",
          answer: "runaway",
          accept: ["runaway", "run-away"],
          explain: "Fisher's runaway describes a positive feedback loop that can drive an ornament and its preference toward ever greater extremes."
        },
        {
          type: "mcq",
          q: "Which statistician and biologist is credited with the runaway model of sexual selection?",
          choices: [
            "Charles Darwin",
            "Ronald A. Fisher",
            "Amotz Zahavi",
            "Gregor Mendel"
          ],
          answer: 1,
          explain: "Ronald A. Fisher formalized the runaway selection idea in the 1910s-1930s, notably in his 1930 book on natural selection."
        },
        {
          type: "truefalse",
          q: "In pure Fisherian runaway, the attractive trait must always signal genetic quality to spread.",
          answer: false,
          explain: "Pure Fisherian runaway can proceed on preference alone; the trait need not indicate quality, which distinguishes it from good-genes models."
        },
        {
          type: "order",
          q: "Order the steps of a Fisherian runaway loop.",
          items: [
            "Some females prefer a particular male trait",
            "Their sons inherit the trait and daughters inherit the preference",
            "Trait and preference become genetically correlated",
            "Both are pushed to greater extremes each generation"
          ],
          explain: "The genetic link between trait and preference creates positive feedback, driving both toward exaggeration until other forces halt it."
        },
        {
          type: "match",
          q: "Match each element of runaway selection to its description.",
          pairs: [
            ["Preference genes", "Passed mainly to daughters"],
            ["Trait genes", "Expressed mainly in sons"],
            ["Genetic correlation", "The link that fuels the feedback loop"]
          ],
          explain: "Because choosy mothers mate with ornamented fathers, preference and trait genes travel together, and their correlation drives runaway."
        }
      ]
    },
    {
      id: "l22",
      title: "The Handicap Principle",
      intro: "Amotz Zahavi argued that costly signals are reliable precisely because only high-quality individuals can afford to pay the cost.",
      questions: [
        {
          type: "mcq",
          q: "The core claim of Zahavi's handicap principle is that:",
          choices: [
            "Signals are honest because they are costly to produce",
            "Cheap signals are the most reliable",
            "Ornaments have no cost at all",
            "Only weak individuals grow big ornaments"
          ],
          answer: 0,
          explain: "Zahavi argued a signal's very cost keeps it honest, because low-quality individuals cannot afford to fake it."
        },
        {
          type: "truefalse",
          q: "Under the handicap principle, only high-quality individuals can afford to bear a very costly signal.",
          answer: true,
          explain: "The cost is what enforces honesty: only genuinely fit individuals survive while paying it, so the signal reliably indicates quality."
        },
        {
          type: "fill",
          q: "Zahavi's idea that costly signals stay honest is called the ____ principle.",
          answer: "handicap",
          accept: ["handicap", "handicap principle"],
          explain: "The handicap principle, proposed by Amotz Zahavi in 1975, holds that costliness guarantees signal reliability."
        },
        {
          type: "mcq",
          q: "Which biologist proposed the handicap principle in 1975?",
          choices: [
            "Ronald Fisher",
            "William Hamilton",
            "Amotz Zahavi",
            "Robert Trivers"
          ],
          answer: 2,
          explain: "Amotz Zahavi introduced the handicap principle in a 1975 paper arguing that signal cost ensures honesty."
        },
        {
          type: "truefalse",
          q: "The handicap principle says the best signals are the ones that are cheap and easy to fake.",
          answer: false,
          explain: "It says the opposite: cheap signals can be faked, so only costly handicaps are hard to fake and therefore honest."
        },
        {
          type: "match",
          q: "Match each idea to its role in the handicap principle.",
          pairs: [
            ["Signal cost", "What makes the signal hard to fake"],
            ["Honest signal", "One that reliably indicates quality"],
            ["Low-quality individual", "Cannot afford the full handicap"]
          ],
          explain: "Cost blocks cheating, honest signals track real quality, and weaker individuals simply cannot pay the handicap's price."
        },
        {
          type: "order",
          q: "Order the logic of why a costly signal stays honest.",
          items: [
            "A signal is expensive to produce or carry",
            "Only high-quality individuals can bear that cost",
            "So displaying it reliably proves quality"
          ],
          explain: "Because the cost filters out low-quality fakers, a fully expressed costly signal becomes a trustworthy badge of quality."
        }
      ]
    },
    {
      id: "l23",
      title: "Good Genes Models",
      intro: "Good-genes models propose that ornaments are attractive because they advertise heritable quality passed to offspring.",
      questions: [
        {
          type: "mcq",
          q: "Good-genes models of mate choice propose that ornaments:",
          choices: [
            "Are meaningless and chosen at random",
            "Advertise heritable quality that offspring can inherit",
            "Only ever reduce an animal's fitness",
            "Are always cheap and easy to grow"
          ],
          answer: 1,
          explain: "In good-genes models, choosers gain indirect benefits because attractive traits signal heritable quality passed to their young."
        },
        {
          type: "truefalse",
          q: "Under good-genes models, choosing an ornamented mate can give offspring genetic benefits like disease resistance.",
          answer: true,
          explain: "If ornaments reliably index heritable quality, offspring of ornamented mates inherit that quality, an indirect genetic benefit."
        },
        {
          type: "fill",
          q: "Hamilton and Zuk's 1982 hypothesis links bright ornaments to resistance against ____.",
          answer: "parasites",
          accept: ["parasites", "parasite", "disease", "pathogens"],
          explain: "The 1982 Hamilton-Zuk hypothesis proposed that bright displays signal heritable resistance to parasites and disease."
        },
        {
          type: "mcq",
          q: "The Hamilton-Zuk hypothesis is an example of which kind of model?",
          choices: [
            "A pure Fisherian runaway model",
            "A good-genes (indirect benefit) model",
            "A direct-benefits model based on food gifts",
            "A model of same-sex competition"
          ],
          answer: 1,
          explain: "Hamilton-Zuk is a good-genes model: ornaments signal heritable parasite resistance, an indirect genetic benefit to offspring."
        },
        {
          type: "truefalse",
          q: "Good-genes models focus on indirect genetic benefits to offspring rather than direct benefits to the chooser.",
          answer: true,
          explain: "Good-genes models emphasize the heritable quality offspring gain, distinct from direct benefits like food or protection for the chooser."
        },
        {
          type: "match",
          q: "Match each model to its central idea.",
          pairs: [
            ["Good genes", "Ornaments signal heritable quality"],
            ["Fisherian runaway", "Preference and trait reinforce each other"],
            ["Handicap principle", "Cost keeps the signal honest"]
          ],
          explain: "Good-genes ties ornaments to heritable quality, runaway to feedback between trait and preference, and handicaps to honesty via cost."
        },
        {
          type: "order",
          q: "Order the good-genes logic from ornament to offspring benefit.",
          items: [
            "An ornament reliably indexes heritable quality",
            "Choosers prefer well-ornamented mates",
            "Offspring inherit the genes for higher quality"
          ],
          explain: "If the ornament truly tracks good genes, preferring it lets choosers pass superior heritable quality to their offspring."
        }
      ]
    },
    {
      id: "l24",
      title: "Sexual Selection in Humans",
      intro: "Sexual selection theory also frames human mate preferences and rivalry, a topic explored in later units.",
      questions: [
        {
          type: "mcq",
          q: "Applying sexual selection to humans means studying:",
          choices: [
            "Only how humans digest food",
            "Human mate preferences and same-sex competition",
            "Only the survival of infants",
            "How humans navigate using the stars"
          ],
          answer: 1,
          explain: "In humans, sexual selection theory examines what people find attractive (choice) and how they compete for mates (rivalry)."
        },
        {
          type: "truefalse",
          q: "Both intersexual choice and intrasexual competition are thought to have shaped human traits.",
          answer: true,
          explain: "Human evolution likely involved both mate choice (preferences) and same-sex competition, mirroring the two arms of sexual selection."
        },
        {
          type: "fill",
          q: "Evolutionary psychologist David Buss led a large 37-culture study of human mate ____ published in 1989.",
          answer: "preferences",
          accept: ["preferences", "preference", "choice"],
          explain: "Buss's 1989 cross-cultural study of 37 cultures documented widespread patterns in human mate preferences."
        },
        {
          type: "mcq",
          q: "Which is an example of possible intrasexual competition in humans?",
          choices: [
            "Preferring a kind and healthy-looking partner",
            "Rivals competing for status and resources to attract mates",
            "Choosing a mate based on a pleasant voice",
            "Preferring a symmetrical face"
          ],
          answer: 1,
          explain: "Competing with same-sex rivals over status and resources is a human parallel to intrasexual competition; the other options are mate-choice examples."
        },
        {
          type: "truefalse",
          q: "Sexual selection ideas have no relevance to understanding human behavior.",
          answer: false,
          explain: "Evolutionary psychology applies sexual selection extensively to human attraction, jealousy, and competition, so it is highly relevant."
        },
        {
          type: "match",
          q: "Match each human pattern to the sexual selection concept it illustrates.",
          pairs: [
            ["Valuing traits in a partner", "Intersexual choice"],
            ["Competing with rivals for status", "Intrasexual competition"],
            ["Costly displays of skill or generosity", "Honest signaling"]
          ],
          explain: "Partner preferences reflect choice, rivalry for status reflects competition, and costly displays reflect honest signaling in humans."
        },
        {
          type: "order",
          q: "Order these levels of applying sexual selection, from general theory to human specifics.",
          items: [
            "Darwin's general theory of sexual selection",
            "The two mechanisms of choice and competition",
            "Human mate preferences and rivalry as later study topics"
          ],
          explain: "The framework moves from Darwin's broad theory, to its two mechanisms, and finally to their specific application in human behavior."
        }
      ]
    }
  ]
});
