window.ACADEMY.addUnit("evopsych", {
  id: "unit-25",
  title: "Critiques, Applications, and Frontiers",
  color: "#7c5cff",
  icon: "🧭",
  description: "Confronts the major debates over evolutionary psychology and looks toward the field's future in medicine and cultural evolution.",
  lessons: [
    {
      id: "l193",
      title: "Spandrels of San Marco",
      intro: "Gould and Lewontin's 1979 paper warned against assuming every trait is a finely tuned adaptation.",
      questions: [
        {
          type: "mcq",
          q: "The 1979 'Spandrels of San Marco' paper that challenged the adaptationist programme was written by which pair?",
          choices: ["Tooby and Cosmides", "Stephen Jay Gould and Richard Lewontin", "Daly and Wilson", "Nesse and Williams"],
          answer: 1,
          explain: "Stephen Jay Gould and Richard Lewontin published the critique in 1979 in the Proceedings of the Royal Society."
        },
        {
          type: "truefalse",
          q: "In architecture, a spandrel is a space deliberately designed to hold decorative mosaics.",
          answer: false,
          explain: "A spandrel is the tapering byproduct space created when arches meet under a dome; mosaics are a later use, not the reason it exists."
        },
        {
          type: "fill",
          q: "Gould and Lewontin mocked naive adaptationism as the '____ paradigm,' alluding to Voltaire's ever-optimistic Dr. Pangloss.",
          answer: "Panglossian",
          accept: ["panglossian"],
          explain: "They called it the Panglossian paradigm, after Pangloss, who insisted we live in the best of all possible worlds."
        },
        {
          type: "match",
          q: "Match each term from the critique to its meaning.",
          pairs: [
            ["Spandrel", "A structural byproduct, not built for what fills it"],
            ["Adaptationist programme", "Breaking an organism into traits each assumed to be optimal"],
            ["Panglossian", "Assuming every trait is the best possible design"]
          ],
          explain: "The spandrel is the byproduct, the adaptationist programme is the target of the critique, and Panglossian names its unwarranted optimism."
        },
        {
          type: "mcq",
          q: "What is the core biological lesson of the spandrel analogy?",
          choices: ["Every trait is an optimal adaptation", "Natural selection does not occur", "Some traits are byproducts of other structures, not directly selected", "Traits cannot be studied scientifically"],
          answer: 2,
          explain: "The analogy shows that some traits arise as byproducts of other features rather than being directly shaped by selection for their current use."
        },
        {
          type: "order",
          q: "Put the logic of how a spandrel is misread in the correct order.",
          items: ["Build rounded arches to support a dome", "Tapering triangular spaces appear where arches meet", "Artists later fill those spaces with mosaics", "An observer wrongly assumes the space was made for the mosaic"],
          explain: "The space is an unavoidable byproduct of the architecture; its later decoration tempts observers into a false adaptationist story."
        },
        {
          type: "truefalse",
          q: "Gould and Lewontin argued that adaptation should be treated as one hypothesis to test, not the default assumption.",
          answer: true,
          explain: "They urged researchers to weigh alternatives like byproducts, drift, and developmental constraints instead of assuming adaptation."
        }
      ]
    },
    {
      id: "l194",
      title: "The Just-So Stories Charge",
      intro: "Critics accuse adaptationism of spinning untestable tales, but good evolutionary hypotheses make real predictions.",
      questions: [
        {
          type: "fill",
          q: "The 'just-so stories' label comes from a 1902 book of children's tales by ____.",
          answer: "Kipling",
          accept: ["kipling", "rudyard kipling"],
          explain: "Rudyard Kipling's 1902 'Just So Stories' gave critics the phrase for fanciful, made-up explanations."
        },
        {
          type: "mcq",
          q: "What does the just-so stories objection claim about many adaptationist explanations?",
          choices: ["They are unfalsifiable narratives invented after the fact", "They rely on too much data", "They ignore natural selection entirely", "They are already mathematically proven"],
          answer: 0,
          explain: "The charge is that such accounts are post hoc stories crafted to fit any observation, and so cannot be tested or refuted."
        },
        {
          type: "truefalse",
          q: "The just-so stories charge says that evolutionary explanations can always be settled by a simple controlled experiment.",
          answer: false,
          explain: "The charge is the opposite: it claims these explanations are untestable, post hoc narratives rather than falsifiable claims."
        },
        {
          type: "match",
          q: "Match each scientific tool researchers use to answer the just-so charge with its role.",
          pairs: [
            ["A priori prediction", "Deriving a novel prediction before looking at the data"],
            ["Comparative method", "Testing a hypothesis across many species"],
            ["Falsifiability", "Specifying evidence that would refute the claim"]
          ],
          explain: "Making advance predictions, comparing across species, and stating what would disprove a claim turn a story into a testable hypothesis."
        },
        {
          type: "mcq",
          q: "How do evolutionary psychologists best answer the just-so charge?",
          choices: ["By insisting the narrative feels plausible", "By avoiding all hypotheses", "By appealing to authority", "By deriving specific, falsifiable predictions and testing them"],
          answer: 3,
          explain: "The strongest reply is to generate precise, risky predictions that data could contradict, and then test them."
        },
        {
          type: "order",
          q: "Order the steps that turn an adaptive idea into testable science.",
          items: ["State an adaptive hypothesis", "Derive a novel, testable prediction", "Collect data that could refute it", "Revise or reject the hypothesis if the prediction fails"],
          explain: "Science requires moving from a hunch to a refutable prediction and then honestly confronting it with data."
        },
        {
          type: "truefalse",
          q: "A well-constructed evolutionary hypothesis can generate predictions that were not already known in advance.",
          answer: true,
          explain: "Good hypotheses yield novel, previously unknown predictions, which is exactly what distinguishes them from mere just-so stories."
        }
      ]
    },
    {
      id: "l195",
      title: "Adaptation, Byproduct, or Noise",
      intro: "Buss argues the evolutionary process leaves three kinds of products, and only one is a true adaptation.",
      questions: [
        {
          type: "mcq",
          q: "According to Buss, what are the three products of the evolutionary process?",
          choices: ["Genes, memes, and traits", "Adaptations, byproducts, and noise", "Mutation, migration, and drift", "Instinct, learning, and culture"],
          answer: 1,
          explain: "Buss distinguishes adaptations, byproducts of adaptations, and random noise as the three outputs of evolution."
        },
        {
          type: "match",
          q: "Match each of Buss's categories to its definition.",
          pairs: [
            ["Adaptation", "A reliably developing trait that solved an ancestral problem"],
            ["Byproduct", "A trait carried along with an adaptation but serving no function"],
            ["Noise", "Random variation showing no functional design"]
          ],
          explain: "Adaptations are functionally designed, byproducts ride along without a function, and noise is random neutral variation."
        },
        {
          type: "fill",
          q: "In Buss's classic example, the human navel is a ____ of the umbilical cord, not an adaptation in its own right.",
          answer: "byproduct",
          accept: ["byproduct", "by-product"],
          explain: "The belly button has no function of its own; it is simply a byproduct of the umbilical cord, which was the adaptation."
        },
        {
          type: "truefalse",
          q: "The whiteness of bone is an adaptation that was selected because white bones function better than other colors.",
          answer: false,
          explain: "Bone whiteness is a byproduct of the calcium that makes bones strong; the color itself was never selected for a function."
        },
        {
          type: "mcq",
          q: "What evidence best supports calling a trait an adaptation rather than a byproduct?",
          choices: ["It shows special design features that solve a specific adaptive problem efficiently", "It is present in many people", "It looks complicated", "It varies randomly across individuals"],
          answer: 0,
          explain: "Evidence of special design, such as economy, efficiency, and precision for a function, is the hallmark of an adaptation."
        },
        {
          type: "truefalse",
          q: "Byproducts have no function of their own but exist because they are coupled to an adaptation.",
          answer: true,
          explain: "A byproduct is carried along with a functional adaptation without itself having been selected for any function."
        },
        {
          type: "order",
          q: "Order these three evolutionary products from the most functional design to the least.",
          items: ["Adaptation", "Byproduct", "Noise"],
          explain: "Adaptations show the most design, byproducts show design only in the adaptation they ride on, and noise shows none."
        }
      ]
    },
    {
      id: "l196",
      title: "The EEA Concept Debated",
      intro: "The Environment of Evolutionary Adaptedness is not a single place but a statistical mosaic of selection pressures.",
      questions: [
        {
          type: "fill",
          q: "The term 'Environment of Evolutionary Adaptedness' (EEA) was coined by attachment theorist John ____.",
          answer: "Bowlby",
          accept: ["bowlby", "john bowlby"],
          explain: "John Bowlby introduced the EEA concept while developing his theory of infant attachment."
        },
        {
          type: "mcq",
          q: "How is the EEA best defined?",
          choices: ["A single place and time, the African savanna", "The environment humans live in today", "A statistical composite of the selection pressures that shaped an adaptation", "A controlled laboratory setting"],
          answer: 2,
          explain: "Tooby and Cosmides stressed that the EEA is a statistical composite of selection pressures, not one specific place or time."
        },
        {
          type: "truefalse",
          q: "Each adaptation can have its own EEA, since different traits faced different selection pressures.",
          answer: true,
          explain: "Because pressures differed by trait, the EEA is trait-specific rather than a single shared ancestral scene."
        },
        {
          type: "match",
          q: "Match each EEA-related idea to its description.",
          pairs: [
            ["John Bowlby", "Coined the EEA term while studying attachment"],
            ["Mosaic", "Different adaptations shaped by different pressures at different times"],
            ["Common misconception", "Treating the EEA as one Pleistocene savanna snapshot"]
          ],
          explain: "Bowlby named it, the mosaic view captures its true nature, and the savanna snapshot is the popular misreading."
        },
        {
          type: "mcq",
          q: "What is a common criticism of the EEA concept?",
          choices: ["It is far too easy to reconstruct precisely", "Ancestral environments are hard to reconstruct, making claims hard to test", "It ignores natural selection", "It applies only to plants"],
          answer: 1,
          explain: "Critics argue that because we cannot fully reconstruct ancestral environments, EEA-based claims are difficult to test."
        },
        {
          type: "fill",
          q: "Because selection pressures differed across traits, the EEA is often described as a ____ of environments rather than one place.",
          answer: "mosaic",
          accept: ["mosaic"],
          explain: "The mosaic image captures how different adaptations were shaped by different pieces of the ancestral world."
        },
        {
          type: "truefalse",
          q: "Bowlby developed the EEA idea while studying the bond between human infants and their caregivers.",
          answer: true,
          explain: "The concept grew directly out of his work on attachment between infants and caregivers."
        }
      ]
    },
    {
      id: "l197",
      title: "Evolutionary Mismatch",
      intro: "Adaptations built for ancestral worlds can misfire in the novel environments we have created for ourselves.",
      questions: [
        {
          type: "mcq",
          q: "Evolutionary mismatch occurs when which of the following happens?",
          choices: ["Two species compete for the same resource", "An adaptation shaped by ancestral environments misfires in a novel modern environment", "Genes mutate at random", "Two cultures come into conflict"],
          answer: 1,
          explain: "Mismatch arises when a trait that was adaptive in the ancestral past produces harm in a rapidly changed modern setting."
        },
        {
          type: "match",
          q: "Match each modern example to why it reflects evolutionary mismatch.",
          pairs: [
            ["Sugar and fat cravings", "Once adaptive when calories were scarce, now drive obesity"],
            ["Supernormal stimulus", "An exaggerated cue that hijacks an evolved preference"],
            ["Sedentary lifestyle", "A mismatch with bodies shaped for frequent movement"]
          ],
          explain: "Each case pairs an ancestral advantage with a modern environment that turns it into a liability."
        },
        {
          type: "truefalse",
          q: "Our craving for sweet and fatty foods was already maladaptive in ancestral environments.",
          answer: false,
          explain: "The craving was adaptive when calories were scarce; only in today's calorie-rich world does it cause harm."
        },
        {
          type: "fill",
          q: "Mismatch arises because cultural and technological change is far ____ than genetic evolution.",
          answer: "faster",
          accept: ["faster", "quicker", "more rapid"],
          explain: "Culture changes environments within years, while genetic adaptation takes many generations to catch up."
        },
        {
          type: "mcq",
          q: "Which is the clearest example of an evolutionary mismatch disease?",
          choices: ["A broken bone from a fall", "A viral infection", "A genetic point mutation", "Type 2 diabetes linked to abundant refined sugar"],
          answer: 3,
          explain: "Type 2 diabetes is a classic 'disease of civilization,' driven by modern diets that clash with ancestrally tuned metabolism."
        },
        {
          type: "order",
          q: "Order the steps by which an evolutionary mismatch produces a modern malady.",
          items: ["A trait evolves to solve an ancestral problem", "The environment changes rapidly", "The old trait now produces a harmful outcome", "A modern malady emerges"],
          explain: "A once-useful trait becomes harmful when the environment shifts faster than genes can adapt."
        },
        {
          type: "truefalse",
          q: "Mismatch helps explain why 'diseases of civilization' like obesity are so common today.",
          answer: true,
          explain: "These conditions reflect ancient appetites and physiology meeting modern abundance and inactivity."
        }
      ]
    },
    {
      id: "l198",
      title: "David Buller's Adapting Minds",
      intro: "Philosopher David Buller accepts that evolution shaped the mind but challenges the massive-modularity and EEA claims.",
      questions: [
        {
          type: "fill",
          q: "David Buller's 2005 book critiquing the field is titled 'Adapting ____.'",
          answer: "Minds",
          accept: ["minds"],
          explain: "The full title is 'Adapting Minds: Evolutionary Psychology and the Persistent Quest for Human Nature' (2005)."
        },
        {
          type: "mcq",
          q: "What key distinction does Buller draw in his critique?",
          choices: ["Genetics versus epigenetics", "'Evolutionary Psychology,' a specific paradigm, versus evolutionary psychology, the broader field", "Biology versus psychology", "Nature versus nurture"],
          answer: 1,
          explain: "Buller accepts the broad field but targets the capitalized 'Evolutionary Psychology' of the Santa Barbara school."
        },
        {
          type: "truefalse",
          q: "Buller rejects the entire idea that evolution shaped the human mind.",
          answer: false,
          explain: "He explicitly accepts evolutionary psychology in the broad sense; he only critiques specific claims of one paradigm."
        },
        {
          type: "match",
          q: "Match each concept Buller examines to its meaning.",
          pairs: [
            ["Massive modularity", "The mind as many special-purpose modules, which Buller doubts"],
            ["EEA", "A statistical ancestral environment whose usefulness Buller questions"],
            ["Developmental plasticity", "The mind adapting during life, not fixed in the Pleistocene"]
          ],
          explain: "Buller challenges massive modularity and the EEA while emphasizing lifelong developmental plasticity."
        },
        {
          type: "mcq",
          q: "The 'massive modularity' thesis that Buller targets claims what about the mind?",
          choices: ["The mind is composed of many specialized, domain-specific modules", "The mind is a single general-purpose learner", "The brain has no structure at all", "Culture determines all behavior"],
          answer: 0,
          explain: "Massive modularity holds that the mind is a large collection of specialized, domain-specific mechanisms."
        },
        {
          type: "order",
          q: "Order the structure of Buller's overall argument.",
          items: ["Accept that evolution shaped the mind", "Separate the broad field from the Santa Barbara paradigm", "Challenge massive modularity and the EEA", "Re-examine specific studies like the Cinderella effect"],
          explain: "He grants the general premise, isolates the paradigm he disputes, attacks its core assumptions, and reanalyzes its evidence."
        },
        {
          type: "truefalse",
          q: "Buller reanalyzed Daly and Wilson's 'Cinderella effect' data on stepparents and questioned their conclusions.",
          answer: true,
          explain: "He challenged the interpretation of the elevated risk to stepchildren, arguing the data were more ambiguous than claimed."
        }
      ]
    },
    {
      id: "l199",
      title: "Evolutionary Medicine",
      intro: "Nesse and Williams argued that many symptoms are evolved defenses, and that natural selection never aimed at perfect health.",
      questions: [
        {
          type: "mcq",
          q: "The 1994 book 'Why We Get Sick,' which launched Darwinian medicine, was written by which pair?",
          choices: ["Gould and Lewontin", "Randolph Nesse and George Williams", "Tooby and Cosmides", "Boyd and Richerson"],
          answer: 1,
          explain: "Randolph Nesse and George C. Williams co-wrote 'Why We Get Sick' (1994), founding evolutionary medicine."
        },
        {
          type: "truefalse",
          q: "Evolutionary medicine treats fever, cough, and pain as defenses rather than simply as defects.",
          answer: true,
          explain: "These symptoms are often evolved protective responses, so suppressing them can sometimes be counterproductive."
        },
        {
          type: "fill",
          q: "Nesse's '____ detector principle' explains why defenses like anxiety fire even on false alarms, since a false alarm is cheaper than a missed threat.",
          answer: "smoke",
          accept: ["smoke"],
          explain: "Like a smoke detector, a defense set to trigger easily is worth the cost of frequent false alarms if it prevents rare catastrophes."
        },
        {
          type: "match",
          q: "Match each principle of evolutionary medicine to its meaning.",
          pairs: [
            ["Defense", "A protective symptom such as fever or cough"],
            ["Mismatch", "A modern environment differing from the ancestral one"],
            ["Trade-off", "A trait that benefits one function while costing another"],
            ["Pathogen arms race", "Hosts and pathogens coevolving against each other"]
          ],
          explain: "Defenses, mismatch, trade-offs, and host-pathogen coevolution are central explanations for why we get sick."
        },
        {
          type: "mcq",
          q: "According to the smoke-detector principle, evolved defenses are often triggered unnecessarily because what is true?",
          choices: ["Bodies are simply poorly designed", "Defenses never actually help", "The cost of a false alarm is low compared with missing a real threat", "Natural selection maximizes comfort"],
          answer: 2,
          explain: "When a missed threat can be fatal and a false alarm is cheap, selection favors defenses that fire readily."
        },
        {
          type: "order",
          q: "Order the sequence showing why blocking a defense can backfire.",
          items: ["A pathogen enters the body", "Fever is mounted as a defense", "Medication suppresses the fever", "The illness may last longer"],
          explain: "Fever can help fight infection, so suppressing it may sometimes prolong the illness it was combating."
        },
        {
          type: "truefalse",
          q: "Evolutionary medicine claims that natural selection makes bodies perfectly healthy and disease-free.",
          answer: false,
          explain: "It argues the opposite: trade-offs, mismatch, and senescence leave bodies vulnerable, because selection maximizes reproduction, not health."
        }
      ]
    },
    {
      id: "l200",
      title: "Frontiers and Cultural Evolution",
      intro: "The field's frontier explores how genes and culture evolve together and how culture itself follows Darwinian dynamics.",
      questions: [
        {
          type: "fill",
          q: "Gene-culture coevolution is also known as ____ inheritance theory.",
          answer: "dual",
          accept: ["dual", "dual-inheritance"],
          explain: "Dual inheritance theory studies how genetic and cultural evolution influence each other over time."
        },
        {
          type: "mcq",
          q: "What is the classic textbook example of gene-culture coevolution?",
          choices: ["The evolution of bipedalism", "Lactase persistence coevolving with dairy farming", "The origin of color vision", "The development of opposable thumbs"],
          answer: 1,
          explain: "Cultures that herded cattle for milk selected for genes that let adults keep digesting lactose, a textbook case of coevolution."
        },
        {
          type: "truefalse",
          q: "In gene-culture coevolution, cultural practices can change the selection pressures acting on genes.",
          answer: true,
          explain: "Practices like dairying create new selective environments that reshape which genes are favored."
        },
        {
          type: "match",
          q: "Match each frontier concept to its meaning.",
          pairs: [
            ["Meme", "A unit of cultural transmission, named by Dawkins in 1976"],
            ["Dual inheritance", "Genes and culture evolving together"],
            ["Niche construction", "Organisms altering their environment and thus their own selection pressures"],
            ["Lactase persistence", "A well-known gene-culture coevolution example"]
          ],
          explain: "Memes, dual inheritance, niche construction, and lactase persistence are key ideas at the field's cutting edge."
        },
        {
          type: "mcq",
          q: "Cultural evolution treats culture as Darwinian because it involves what?",
          choices: ["Only random, undirected change", "No transmission between individuals", "Variation, selection, and inheritance of ideas and behaviors", "Purely fixed instincts"],
          answer: 2,
          explain: "Culture shows the Darwinian ingredients of variation, selection, and inheritance, so it can evolve much like genes."
        },
        {
          type: "fill",
          q: "Richard Dawkins coined the word '____' in 1976 for a unit of cultural transmission.",
          answer: "meme",
          accept: ["meme"],
          explain: "Dawkins introduced 'meme' in 'The Selfish Gene' (1976) as a cultural analogue to the gene."
        },
        {
          type: "order",
          q: "Order the steps of the dairying gene-culture coevolution loop.",
          items: ["Humans begin herding cattle for milk", "Adults who can digest lactose gain a nutritional edge", "Lactase-persistence genes spread in dairying populations", "Dairy-based diets become even more common"],
          explain: "A cultural practice created a selective advantage for a gene, which in turn reinforced and expanded the culture."
        }
      ]
    }
  ]
});
