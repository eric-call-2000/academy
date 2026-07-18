window.ACADEMY.addUnit("evopsych", {
  id: "unit-2",
  title: "Darwin and the Engine of Design",
  color: "#7c5cff",
  icon: "🌿",
  description: "How Darwin's theory of descent with modification and the mechanism of natural selection explain the origin of adaptation and design in living things.",
  lessons: [
    {
      id: "l9",
      title: "Darwin's On the Origin",
      intro: "In 1859 Darwin argued that all species descend from common ancestors, gradually modified over time by natural selection.",
      questions: [
        {
          type: "mcq",
          q: "In what year did Darwin publish 'On the Origin of Species'?",
          choices: ["1809", "1859", "1871", "1900"],
          answer: 1,
          explain: "'On the Origin of Species' appeared in November 1859, the founding text of modern evolutionary biology."
        },
        {
          type: "truefalse",
          q: "Darwin's phrase 'descent with modification' means species change across generations from common ancestors.",
          answer: true,
          explain: "'Descent with modification' was Darwin's own term for what we now call evolution: lineages that change as they descend from shared ancestors."
        },
        {
          type: "fill",
          q: "Darwin's central idea was 'descent with ____,' his term for what we now call evolution.",
          answer: "modification",
          accept: ["modification", "modifications"],
          explain: "Descent with modification captures both continuity (descent) and change (modification) between ancestors and their descendants."
        },
        {
          type: "mcq",
          q: "What did Darwin propose as the main mechanism driving descent with modification?",
          choices: ["Sudden divine creation", "Inheritance of acquired habits", "Natural selection", "Spontaneous generation"],
          answer: 2,
          explain: "Darwin's key contribution was identifying natural selection as the natural, undirected process that shapes lineages over time."
        },
        {
          type: "order",
          q: "Put these milestones in Darwin's life and work in chronological order.",
          items: ["Voyage on HMS Beagle", "Reading Malthus's essay on population", "Publishing On the Origin of Species", "Publishing The Descent of Man"],
          explain: "Darwin sailed on the Beagle (1831-1836), read Malthus in 1838, published the Origin in 1859, and The Descent of Man in 1871."
        },
        {
          type: "match",
          q: "Match each Darwinian term to its meaning.",
          pairs: [
            ["Descent with modification", "Species change over generations from shared ancestors"],
            ["Common ancestor", "A shared forebear from which lineages diverge"],
            ["Natural selection", "The mechanism Darwin proposed for adaptation"]
          ],
          explain: "These three ideas form the core of Darwin's 1859 argument: shared ancestry, divergence, and selection as the engine of change."
        },
        {
          type: "truefalse",
          q: "Darwin claimed that each species was created separately and never changes.",
          answer: false,
          explain: "Darwin argued the opposite: species are not fixed but descend, changed, from earlier forms through natural selection."
        }
      ]
    },
    {
      id: "l10",
      title: "Variation, Heredity, Selection",
      intro: "Any process of evolution by natural selection needs three ingredients: variation among individuals, heredity to pass traits on, and selection that favors some variants.",
      questions: [
        {
          type: "mcq",
          q: "Which three ingredients are required for evolution by natural selection?",
          choices: ["Variation, heredity, selection", "Mutation, migration, drift", "Growth, decay, renewal", "Size, speed, strength"],
          answer: 0,
          explain: "Wherever you have heritable variation plus differential reproduction (selection), evolution by natural selection follows almost by logic."
        },
        {
          type: "truefalse",
          q: "If every individual in a population were perfectly identical, natural selection could not occur.",
          answer: true,
          explain: "Selection needs differences to act on. With no variation, there is nothing for selection to favor over anything else."
        },
        {
          type: "fill",
          q: "For selection to change a population, the favored trait must be ____ - passed from parent to offspring.",
          answer: "heritable",
          accept: ["heritable", "inherited", "inheritable", "heredity"],
          explain: "If a helpful trait cannot be inherited, it dies with its bearer and never accumulates across generations."
        },
        {
          type: "match",
          q: "Match each ingredient of evolution to its role.",
          pairs: [
            ["Variation", "Individuals differ from one another"],
            ["Heredity", "Traits pass from parents to offspring"],
            ["Selection", "Some variants reproduce more than others"]
          ],
          explain: "Variation supplies the raw differences, heredity carries them forward, and selection biases which ones spread."
        },
        {
          type: "order",
          q: "Order these causal steps of natural selection from first to last.",
          items: ["Individuals vary in a trait", "The trait is heritable", "Some variants out-reproduce others", "The trait becomes more common over generations"],
          explain: "Variation and heredity set the stage, differential reproduction does the sorting, and the population shifts as a result."
        },
        {
          type: "mcq",
          q: "A trait that boosts survival but cannot be inherited will most likely:",
          choices: ["Spread quickly through the population", "Not accumulate by natural selection", "Become dominant instantly", "Cause a new species overnight"],
          answer: 1,
          explain: "Without heredity there is no way to pass the advantage on, so selection cannot build it up over generations."
        },
        {
          type: "truefalse",
          q: "Variation alone, with no heredity, is enough for natural selection to build adaptations.",
          answer: false,
          explain: "All three ingredients are needed. Variation without heredity cannot be transmitted, so nothing accumulates."
        }
      ]
    },
    {
      id: "l11",
      title: "Natural Selection Defined",
      intro: "Natural selection is the differential reproduction of heritable variants: the variants that reproduce more leave more copies of their traits in the next generation.",
      questions: [
        {
          type: "mcq",
          q: "Natural selection is best defined as:",
          choices: ["The survival of the physically strongest", "The differential reproduction of heritable variants", "Random changes in DNA", "The will of organisms to improve themselves"],
          answer: 1,
          explain: "The precise definition is differential reproduction of heritable variants: some heritable types leave more offspring than others."
        },
        {
          type: "truefalse",
          q: "Natural selection acts on differences in reproduction, not merely differences in survival.",
          answer: true,
          explain: "Surviving matters only because it can lead to reproducing. What ultimately counts is how many offspring a variant leaves."
        },
        {
          type: "fill",
          q: "Natural selection is the ____ reproduction of heritable variants.",
          answer: "differential",
          accept: ["differential"],
          explain: "'Differential' means unequal: some heritable variants reproduce more than others, and that inequality drives selection."
        },
        {
          type: "mcq",
          q: "Which of these is NOT required for natural selection to occur?",
          choices: ["Heritable variation", "Differences in reproductive success", "A conscious designer", "Competition for limited resources"],
          answer: 2,
          explain: "Natural selection needs no designer. It follows automatically from heritable variation and unequal reproduction."
        },
        {
          type: "match",
          q: "Match each selection term to its meaning.",
          pairs: [
            ["Differential reproduction", "Some variants leave more offspring than others"],
            ["Heritable variant", "A trait difference that can be inherited"],
            ["Selection pressure", "An environmental factor favoring certain traits"]
          ],
          explain: "Selection pressures bias reproduction so that some heritable variants systematically out-reproduce others."
        },
        {
          type: "order",
          q: "Order the steps by which a favorable variant spreads.",
          items: ["A heritable variant appears", "It raises its bearer's reproductive success", "Bearers leave more offspring", "The variant's frequency rises in the population"],
          explain: "A heritable advantage translates into more offspring, so the variant becomes steadily more common."
        },
        {
          type: "truefalse",
          q: "Natural selection has a conscious goal or endpoint it is trying to reach.",
          answer: false,
          explain: "Selection is not goal-directed. It simply reflects which variants happened to reproduce more in past environments."
        }
      ]
    },
    {
      id: "l12",
      title: "Fitness and Reproductive Success",
      intro: "In evolution, fitness means relative reproductive success - how many surviving, reproducing copies of one's traits an individual leaves - not survival alone.",
      questions: [
        {
          type: "mcq",
          q: "In evolutionary biology, 'fitness' refers to:",
          choices: ["Physical strength and health", "An organism's relative reproductive success", "How long an organism lives", "How fast an organism can run"],
          answer: 1,
          explain: "Evolutionary fitness is relative reproductive success: how many descendants a variant leaves compared with others."
        },
        {
          type: "truefalse",
          q: "An organism that lives a very long time but leaves no offspring has zero evolutionary fitness.",
          answer: true,
          explain: "Fitness is about passing on traits. Long life without reproduction contributes nothing to future generations."
        },
        {
          type: "fill",
          q: "Fitness is measured by ____ success - the number of surviving, reproducing offspring an individual leaves.",
          answer: "reproductive",
          accept: ["reproductive", "reproduction"],
          explain: "Reproductive success is the currency of natural selection, because only reproduced traits appear in the next generation."
        },
        {
          type: "mcq",
          q: "Why is mere survival not the same as fitness?",
          choices: ["Because survival matters only if it leads to reproduction", "Because survival is impossible to measure", "Because fitness ignores genes entirely", "Because only strong animals ever survive"],
          answer: 0,
          explain: "Survival is a means, not the end. It contributes to fitness only insofar as it lets an organism reproduce."
        },
        {
          type: "match",
          q: "Match each fitness term to its meaning.",
          pairs: [
            ["Fitness", "Relative reproductive success of a variant"],
            ["Reproductive success", "Number of offspring that survive to reproduce"],
            ["Relative", "Measured by comparison with others in the population"]
          ],
          explain: "Fitness is always relative: a variant is 'fitter' only in comparison to the alternatives around it."
        },
        {
          type: "order",
          q: "Order these individuals from lowest to highest evolutionary fitness, judged by offspring left.",
          items: ["Leaves 0 offspring", "Leaves 2 offspring", "Leaves 5 offspring"],
          explain: "Because fitness tracks reproductive output, more surviving offspring means higher fitness, all else equal."
        },
        {
          type: "truefalse",
          q: "Fitness is an absolute number that never depends on the rest of the population.",
          answer: false,
          explain: "Fitness is relative. The same offspring count can be high or low fitness depending on how others in the population do."
        }
      ]
    },
    {
      id: "l13",
      title: "Adaptation as Design",
      intro: "Complex adaptations such as the eye arise through cumulative selection: many small favorable steps accumulating over generations to build functional complexity.",
      questions: [
        {
          type: "mcq",
          q: "How does natural selection build complex adaptations like the eye?",
          choices: ["In a single lucky leap", "Through cumulative small favorable steps over generations", "By following an engineer's blueprint", "Through the organism's own effort and striving"],
          answer: 1,
          explain: "Cumulative selection preserves each small improvement, so complexity is assembled gradually rather than all at once."
        },
        {
          type: "truefalse",
          q: "Adaptations can appear designed even though no conscious designer planned them.",
          answer: true,
          explain: "Natural selection mimics design by retaining variants that work better, producing 'the appearance of design' without a designer."
        },
        {
          type: "fill",
          q: "The gradual buildup of small beneficial changes over many generations is called ____ selection.",
          answer: "cumulative",
          accept: ["cumulative"],
          explain: "Cumulative selection means each generation starts from the improvements of the last, so gains add up over time."
        },
        {
          type: "match",
          q: "Match each design-related term to its meaning.",
          pairs: [
            ["Adaptation", "A trait shaped by selection to serve a function"],
            ["Cumulative selection", "Small gains building up over many generations"],
            ["Function", "The reproductive job an adaptation performs"]
          ],
          explain: "Adaptations are functional because selection kept the versions that did their job better at aiding reproduction."
        },
        {
          type: "order",
          q: "Order these stages of eye evolution from simplest to most complex, following Darwin's gradation.",
          items: ["A light-sensitive patch of cells", "A cupped patch that detects light direction", "A pinhole opening that forms a crude image", "A lens that focuses a sharp image"],
          explain: "Darwin noted that each intermediate eye is useful, so a complex eye can evolve step by step from a simple light-sensitive patch."
        },
        {
          type: "mcq",
          q: "Darwin argued the complex eye could evolve because:",
          choices: ["It appeared fully formed all at once", "It was too complex to have evolved", "Numerous gradations from simple to complex each aided vision", "Only vertebrates possess eyes"],
          answer: 2,
          explain: "Darwin pointed to a graded series of working eyes across nature, each intermediate useful, bridging simple to complex."
        },
        {
          type: "truefalse",
          q: "Because the eye is complex, Darwin concluded it could not have evolved by natural selection.",
          answer: false,
          explain: "This misquotes Darwin. He raised the eye as a challenge and then argued it could indeed evolve through gradual steps."
        }
      ]
    },
    {
      id: "l14",
      title: "Malthus and the Struggle",
      intro: "Thomas Malthus observed that populations tend to outgrow their resources, creating a struggle for existence that Darwin recognized as the engine of selection.",
      questions: [
        {
          type: "mcq",
          q: "Whose essay on population inspired Darwin's idea of a struggle for existence?",
          choices: ["Charles Lyell", "Thomas Malthus", "Alfred Wallace", "Herbert Spencer"],
          answer: 1,
          explain: "Reading Malthus's 'Essay on the Principle of Population' in 1838 gave Darwin the idea of competition from overpopulation."
        },
        {
          type: "truefalse",
          q: "Malthus argued that populations tend to grow faster than their food supply.",
          answer: true,
          explain: "Malthus noted populations can multiply rapidly while resources grow slowly, so numbers press against limited food."
        },
        {
          type: "fill",
          q: "Because more individuals are born than can survive, Darwin said there is a struggle for ____.",
          answer: "existence",
          accept: ["existence", "survival", "life"],
          explain: "'Struggle for existence' was Darwin's phrase for the competition that follows when births outrun available resources."
        },
        {
          type: "mcq",
          q: "What follows when populations tend to outgrow their resources?",
          choices: ["Competition, so only some survive and reproduce", "Every individual thrives equally", "Population growth stops on its own", "Resources multiply to match the population"],
          answer: 0,
          explain: "Limited resources plus overproduction means not all can survive, so individuals compete and only some reproduce."
        },
        {
          type: "match",
          q: "Match each term about population pressure to its meaning.",
          pairs: [
            ["Thomas Malthus", "Writer whose essay described population pressure"],
            ["Struggle for existence", "Competition when births exceed resources"],
            ["Overproduction", "Populations produce more offspring than can survive"]
          ],
          explain: "Overproduction against limited resources creates the struggle for existence that Malthus described and Darwin used."
        },
        {
          type: "order",
          q: "Order the steps of the Malthusian logic that Darwin adopted.",
          items: ["Populations can grow rapidly", "Resources are limited", "More offspring are born than can survive", "Individuals compete to survive and reproduce"],
          explain: "Rapid growth against limited resources means overproduction, which forces competition, the raw material for selection."
        },
        {
          type: "truefalse",
          q: "Malthus's essay had no influence on the development of Darwin's theory.",
          answer: false,
          explain: "Darwin credited Malthus directly. The essay supplied the crucial idea of competition arising from overpopulation."
        }
      ]
    },
    {
      id: "l15",
      title: "The Descent of Man",
      intro: "In 'The Descent of Man' (1871), Darwin extended evolution to humans, arguing our bodies, minds, and even moral sense were shaped by natural and sexual selection.",
      questions: [
        {
          type: "mcq",
          q: "In which 1871 book did Darwin apply evolutionary theory directly to humans?",
          choices: ["On the Origin of Species", "The Descent of Man", "The Expression of the Emotions", "The Voyage of the Beagle"],
          answer: 1,
          explain: "'The Descent of Man, and Selection in Relation to Sex' (1871) is where Darwin explicitly addressed human evolution."
        },
        {
          type: "truefalse",
          q: "Darwin argued that humans share common ancestry with other animals.",
          answer: true,
          explain: "In The Descent of Man, Darwin argued humans are part of the tree of life, descended from earlier animal forms."
        },
        {
          type: "fill",
          q: "Darwin titled his 1871 book 'The ____ of Man,' extending his theory to our own species.",
          answer: "descent",
          accept: ["descent"],
          explain: "The title 'The Descent of Man' echoes 'descent with modification,' now applied squarely to human origins."
        },
        {
          type: "mcq",
          q: "According to Darwin, the human moral sense:",
          choices: ["Was exempt from evolution", "Proves humans were separately created", "Could arise from evolved social instincts", "Has no precursors in other animals"],
          answer: 2,
          explain: "Darwin proposed the moral sense grew out of social instincts plus intelligence, extending evolution even to morality."
        },
        {
          type: "match",
          q: "Match each idea from The Descent of Man to its meaning.",
          pairs: [
            ["The Descent of Man", "1871 book applying evolution to humans"],
            ["Sexual selection", "Selection through competition for and choice of mates"],
            ["Moral sense", "Social instincts Darwin traced to evolution"]
          ],
          explain: "The Descent of Man developed sexual selection in depth and argued that even morality has evolutionary roots."
        },
        {
          type: "order",
          q: "Order these major Darwin works from earliest to latest.",
          items: ["The Voyage of the Beagle (1839)", "On the Origin of Species (1859)", "The Descent of Man (1871)", "The Expression of the Emotions (1872)"],
          explain: "Darwin's travel narrative came first, then the Origin, then his books on human descent and on emotional expression."
        },
        {
          type: "truefalse",
          q: "Darwin held that the human mind was too special to have been shaped by evolution.",
          answer: false,
          explain: "Darwin argued the reverse: the human mind, including reason and morality, differs from animals in degree, not kind."
        }
      ]
    },
    {
      id: "l16",
      title: "Common Misreadings of \"Fittest\"",
      intro: "'Survival of the fittest' was Herbert Spencer's phrase, not originally Darwin's, and 'fittest' means best suited to reproduce in an environment, not the strongest.",
      questions: [
        {
          type: "mcq",
          q: "Who originally coined the phrase 'survival of the fittest'?",
          choices: ["Alfred Wallace", "Charles Darwin", "Herbert Spencer", "Thomas Malthus"],
          answer: 2,
          explain: "Herbert Spencer coined 'survival of the fittest' in 1864 after reading Darwin; Darwin only later borrowed the phrase."
        },
        {
          type: "truefalse",
          q: "In evolution, 'fittest' means best suited to reproduce in a given environment, not the physically strongest.",
          answer: true,
          explain: "Fitness is about fit to the environment for reproduction. A small, well-camouflaged animal can be fitter than a strong one."
        },
        {
          type: "fill",
          q: "The phrase 'survival of the fittest' was coined by Herbert ____.",
          answer: "spencer",
          accept: ["spencer"],
          explain: "Herbert Spencer introduced 'survival of the fittest' in his 'Principles of Biology' (1864)."
        },
        {
          type: "mcq",
          q: "Which is the most accurate reading of 'the fittest'?",
          choices: ["The biggest and strongest animal", "The longest-lived individual", "The fastest runner", "The best fit to its environment for reproduction"],
          answer: 3,
          explain: "'Fittest' means best matched to the environment in ways that raise reproduction, which often has nothing to do with strength."
        },
        {
          type: "match",
          q: "Match each term about 'fittest' to its meaning.",
          pairs: [
            ["Survival of the fittest", "Spencer's phrase for differential reproduction"],
            ["Fittest", "Best matched to environment for reproducing"],
            ["Common misreading", "Assuming 'fittest' means strongest or toughest"]
          ],
          explain: "The popular equation of 'fittest' with 'strongest' is the classic misreading; fitness is really about reproductive fit."
        },
        {
          type: "truefalse",
          q: "Darwin used 'survival of the fittest' in the very first 1859 edition of the Origin.",
          answer: false,
          explain: "Darwin added Spencer's phrase only in the fifth edition (1869), at Wallace's urging; the 1859 edition used 'natural selection.'"
        },
        {
          type: "order",
          q: "Order the history of the phrase 'survival of the fittest' from first to last.",
          items: ["Darwin publishes the Origin using 'natural selection' (1859)", "Spencer coins 'survival of the fittest' (1864)", "Darwin adopts the phrase in a later edition (1869)"],
          explain: "Natural selection came first as Darwin's term; Spencer coined the catchier phrase in 1864, which Darwin later adopted in 1869."
        }
      ]
    }
  ]
});
