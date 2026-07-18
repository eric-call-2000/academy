window.ACADEMY.addUnit("evopsych", {
  id: "unit-8",
  title: "The Adapted Mind and Modularity",
  color: "#7c5cff",
  icon: "🧩",
  description: "Explores the Cosmides-Tooby view that the mind is not one general-purpose computer but a large collection of domain-specific, evolved modules.",
  lessons: [
    {
      id: "l57",
      title: "The Adapted Mind Volume",
      intro: "The 1992 anthology 'The Adapted Mind' gathered the arguments that launched modern evolutionary psychology as a field.",
      questions: [
        {
          type: "mcq",
          q: "In what year was the field-defining collection 'The Adapted Mind' published?",
          choices: ["1975", "1983", "1992", "2004"],
          answer: 2,
          explain: "'The Adapted Mind: Evolutionary Psychology and the Generation of Culture' was published in 1992 by Oxford University Press."
        },
        {
          type: "mcq",
          q: "Who were the three editors of 'The Adapted Mind'?",
          choices: ["Steven Pinker, Richard Dawkins, and E.O. Wilson", "Charles Darwin, William James, and Konrad Lorenz", "David Buss, Martin Daly, and Margo Wilson", "Jerome Barkow, Leda Cosmides, and John Tooby"],
          answer: 3,
          explain: "The volume was edited by anthropologist Jerome Barkow, psychologist Leda Cosmides, and anthropologist John Tooby."
        },
        {
          type: "truefalse",
          q: "'The Adapted Mind' is widely credited with helping establish evolutionary psychology as a distinct field.",
          answer: true,
          explain: "Its collected essays laid out the theoretical program that defined evolutionary psychology in the 1990s."
        },
        {
          type: "fill",
          q: "The book's full subtitle was 'Evolutionary Psychology and the Generation of ____.'",
          answer: "culture",
          accept: ["culture"],
          explain: "The subtitle signaled the claim that evolved psychological mechanisms are the source from which culture is generated."
        },
        {
          type: "truefalse",
          q: "'The Adapted Mind' argued that the human mind is a blank slate shaped only by culture and learning.",
          answer: false,
          explain: "It argued the opposite: the mind contains many evolved, specialized mechanisms, and it critiqued blank-slate assumptions."
        },
        {
          type: "mcq",
          q: "In their opening chapter, Tooby and Cosmides critiqued which view of the mind?",
          choices: ["The Standard Social Science Model (SSSM)", "The Computational Theory of Mind", "The Triune Brain Model", "Classical conditioning"],
          answer: 0,
          explain: "Their chapter 'The Psychological Foundations of Culture' attacked the Standard Social Science Model, which treats the mind as a general-purpose, content-free learner."
        },
        {
          type: "match",
          q: "Match each item to what it names.",
          pairs: [
            ["The Adapted Mind", "1992 field-defining anthology"],
            ["Standard Social Science Model", "The blank-slate view the editors critiqued"],
            ["Generation of Culture", "The subtitle's phrase for culture's evolved roots"]
          ],
          explain: "The anthology used evolved psychological mechanisms to explain how culture is generated, rejecting the Standard Social Science Model."
        }
      ]
    },
    {
      id: "l58",
      title: "Domain-Specific Modularity",
      intro: "Evolutionary psychologists argue the mind is built from specialized problem-solvers, not one all-purpose logic engine.",
      questions: [
        {
          type: "mcq",
          q: "What does it mean for a mental mechanism to be 'domain-specific'?",
          choices: ["It is specialized to handle one particular kind of problem", "It can solve any problem using general logic", "It only operates during sleep", "It is stored in a single brain cell"],
          answer: 0,
          explain: "A domain-specific mechanism is dedicated to a narrow class of adaptive problems rather than being a general all-purpose reasoner."
        },
        {
          type: "truefalse",
          q: "Evolutionary psychologists claim the mind runs mostly on a single, general-purpose reasoning system.",
          answer: false,
          explain: "They argue the reverse: the mind is a collection of many specialized, domain-specific mechanisms."
        },
        {
          type: "mcq",
          q: "In Cosmides's Wason selection task studies, people reason much better when the identical logic problem is framed as what?",
          choices: ["An abstract letters-and-numbers puzzle", "A social-contract, cheater-detection situation", "A mathematics exam", "A rote memory test"],
          answer: 1,
          explain: "Cosmides (1989) found people solve the same conditional far better in social-exchange framings, suggesting a specialized cheater-detection mechanism."
        },
        {
          type: "fill",
          q: "Cosmides argued that humans possess a specialized mechanism for ____ detection in social exchange.",
          answer: "cheater",
          accept: ["cheater", "cheating", "cheater-detection"],
          explain: "Her social-contract theory proposes an evolved procedure that spots people who take a benefit without paying the required cost."
        },
        {
          type: "truefalse",
          q: "The fact that Wason-task performance changes with the problem's content suggests reasoning is not purely abstract, content-free logic.",
          answer: true,
          explain: "These 'content effects' are evidence that specialized, subject-matter-sensitive mechanisms are doing the reasoning."
        },
        {
          type: "match",
          q: "Match each proposed domain-specific mechanism to the problem it evolved to solve.",
          pairs: [
            ["Cheater detection", "Policing cheating in social exchange"],
            ["Face recognition", "Identifying specific individuals"],
            ["Predator avoidance", "Detecting and evading dangerous animals"]
          ],
          explain: "Each mechanism is tuned to a distinct recurrent adaptive problem rather than to problems in general."
        },
        {
          type: "mcq",
          q: "According to this view, domain-specific mechanisms were shaped primarily by what?",
          choices: ["Conscious decisions to specialize", "Cultural fashion of the moment", "Natural selection acting on recurrent ancestral problems", "Purely random daily experience"],
          answer: 2,
          explain: "Recurrent adaptive problems over deep time selected for dedicated mechanisms optimized to solve each one."
        }
      ]
    },
    {
      id: "l59",
      title: "The Swiss-Army-Knife Mind",
      intro: "Cosmides and Tooby compare the mind to a Swiss army knife: many specialized tools rather than one general blade.",
      questions: [
        {
          type: "mcq",
          q: "In the Swiss-army-knife metaphor, the mind is portrayed as what?",
          choices: ["A single all-purpose blade", "A bundle of many specialized tools", "An empty toolbox", "A featureless blank slate"],
          answer: 1,
          explain: "Like a Swiss army knife, the mind is pictured as many dedicated instruments, each built for a particular job."
        },
        {
          type: "truefalse",
          q: "In the metaphor, each 'blade' stands for a specialized mechanism aimed at a particular adaptive problem.",
          answer: true,
          explain: "Each tool corresponds to a distinct evolved solution, just as each mechanism targets one class of problem."
        },
        {
          type: "fill",
          q: "A Swiss army knife works well because each blade is ____ for one specific job.",
          answer: "specialized",
          accept: ["specialized", "specialised", "dedicated"],
          explain: "Specialization lets each tool be shaped to its own task instead of compromising across many."
        },
        {
          type: "mcq",
          q: "Why is a specialized tool often better than a general one for a specific job?",
          choices: ["It is always cheaper to make", "It works equally on every possible task", "It can be optimized for its particular task", "It can never wear out or break"],
          answer: 2,
          explain: "A dedicated tool can be tuned to the structure of one problem, so it usually outperforms a jack-of-all-trades on that problem."
        },
        {
          type: "truefalse",
          q: "The metaphor implies that a single general tool would outperform specialized tools on every task.",
          answer: false,
          explain: "The point is the opposite: specialized tools beat a general one on the specific problems each is designed for."
        },
        {
          type: "match",
          q: "Match each part of the Swiss-army-knife image to what it represents about the mind.",
          pairs: [
            ["A single blade", "One task-specific mental module"],
            ["The whole knife", "The entire mind of many modules"],
            ["Adding a new blade", "Evolving a new specialized mechanism"]
          ],
          explain: "The knife maps a many-tool architecture onto a many-module mind."
        },
        {
          type: "order",
          q: "Order the logic behind adding a new 'blade' to the mind.",
          items: ["A recurrent adaptive problem arises", "Selection favors a specialized solution", "A new mental tool becomes part of the mind"],
          explain: "Recurrent problems drive selection for dedicated mechanisms, which accumulate as more specialized tools."
        }
      ]
    },
    {
      id: "l60",
      title: "Fodor's Modularity Roots",
      intro: "The modern module concept began with Jerry Fodor's 1983 book, whose central idea was informational encapsulation.",
      questions: [
        {
          type: "mcq",
          q: "Who wrote the 1983 book 'The Modularity of Mind'?",
          choices: ["Jerry Fodor", "Noam Chomsky", "Leda Cosmides", "Steven Pinker"],
          answer: 0,
          explain: "Philosopher Jerry Fodor introduced the influential modern account of mental modules in 'The Modularity of Mind' (1983)."
        },
        {
          type: "fill",
          q: "Fodor's signature property of a module is informational ____: it cannot draw on all the knowledge the rest of the mind holds.",
          answer: "encapsulation",
          accept: ["encapsulation"],
          explain: "An encapsulated module works only from its own limited inputs, sealed off from the system's general beliefs."
        },
        {
          type: "truefalse",
          q: "Fodor held that central cognition, such as belief fixation, is itself fully modular.",
          answer: false,
          explain: "Fodor argued that only input systems are modular; central, holistic reasoning is NOT modular in his view."
        },
        {
          type: "mcq",
          q: "Which cluster of features describes a Fodorian module?",
          choices: ["Slow, effortful, and optional", "Fast, mandatory, and domain-specific", "Consciously controlled step by step", "Freely accessing all mental information"],
          answer: 1,
          explain: "Fodor's modules operate quickly, automatically, and only on their own narrow domain of input."
        },
        {
          type: "truefalse",
          q: "Fodor mainly restricted full modularity to input systems such as perception and language.",
          answer: true,
          explain: "He treated perception and language processing as modular but denied that central thought is modular."
        },
        {
          type: "match",
          q: "Match each Fodorian module property to its meaning.",
          pairs: [
            ["Domain specificity", "Handles only one kind of input"],
            ["Informational encapsulation", "Walled off from other knowledge"],
            ["Mandatory operation", "Fires automatically, not by choice"]
          ],
          explain: "These are three of the properties Fodor used to characterize modular input systems."
        },
        {
          type: "mcq",
          q: "The Muller-Lyer illusion persisting even when you KNOW the two lines are equal best illustrates which property?",
          choices: ["Informational encapsulation", "Conscious control", "Domain generality", "Learning from feedback"],
          answer: 0,
          explain: "Your belief that the lines are equal cannot penetrate the perceptual module, showing it is encapsulated."
        }
      ]
    },
    {
      id: "l61",
      title: "Massive Modularity Thesis",
      intro: "Cosmides and Tooby push modularity further than Fodor, claiming the whole mind is made of many specialized modules.",
      questions: [
        {
          type: "mcq",
          q: "The 'massive modularity' thesis claims what?",
          choices: ["Only perception is modular", "The entire mind, including reasoning, is composed of many specialized modules", "The mind has exactly one module", "Mental modules do not really exist"],
          answer: 1,
          explain: "Massive modularity says even central cognition is built from a large number of domain-specific mechanisms."
        },
        {
          type: "truefalse",
          q: "Massive modularity goes beyond Fodor by treating central cognition as modular too.",
          answer: true,
          explain: "Where Fodor stopped modularity at input systems, Cosmides and Tooby extend it across the whole mind."
        },
        {
          type: "fill",
          q: "Because it posits a very large number of modules, the Cosmides-Tooby view is called ____ modularity.",
          answer: "massive",
          accept: ["massive"],
          explain: "'Massive' captures the claim that the mind contains many, many specialized mechanisms rather than a few."
        },
        {
          type: "mcq",
          q: "How do Cosmides and Tooby differ from Fodor on modularity's scope?",
          choices: ["They restrict modules to reflexes only", "They deny that modules exist", "They extend modularity to central reasoning, which Fodor left non-modular", "They agree modularity applies only to vision"],
          answer: 2,
          explain: "Their strong claim is that reasoning itself is modular, precisely the domain Fodor said was not modular."
        },
        {
          type: "truefalse",
          q: "Cosmides and Tooby insist every module must possess all of Fodor's properties, especially strict informational encapsulation.",
          answer: false,
          explain: "Their 'Darwinian modules' are functionally specialized but need not have every Fodorian feature, so encapsulation is not required of all of them."
        },
        {
          type: "match",
          q: "Match each thinker or term to its position.",
          pairs: [
            ["Fodor", "Modularity limited to input systems"],
            ["Cosmides and Tooby", "Massive modularity of the whole mind"],
            ["Darwinian module", "A functionally specialized problem-solver"]
          ],
          explain: "The contrast is scope: a few peripheral modules versus a mind massively composed of specialized mechanisms."
        },
        {
          type: "order",
          q: "Order these modularity claims from the narrowest to the broadest scope.",
          items: ["No real modules at all", "Only perception is modular (Fodor)", "The whole mind is modular (massive modularity)"],
          explain: "Massive modularity is the strongest claim, applying modular structure to the entire mind."
        }
      ]
    },
    {
      id: "l62",
      title: "Why Not a General Computer",
      intro: "A single general-purpose mind would drown in possibilities; specialization is the escape from combinatorial explosion and the frame problem.",
      questions: [
        {
          type: "mcq",
          q: "Why do evolutionary psychologists argue a purely general-purpose mind is inadequate?",
          choices: ["It would face combinatorial explosion and could not tell what is relevant", "General minds are physically impossible to build", "It would think far too quickly", "Computation cannot occur in brains"],
          answer: 0,
          explain: "Without built-in assumptions, a general system has no way to prune the exploding space of possibilities or judge relevance."
        },
        {
          type: "fill",
          q: "When there are too many possible combinations to evaluate, a domain-general system suffers combinatorial ____.",
          answer: "explosion",
          accept: ["explosion"],
          explain: "The number of possibilities grows explosively, overwhelming any system that must consider them all."
        },
        {
          type: "truefalse",
          q: "The 'frame problem' is the difficulty of deciding which information is relevant to the problem at hand.",
          answer: true,
          explain: "First raised in AI, the frame problem is about knowing what to consider and what to ignore."
        },
        {
          type: "mcq",
          q: "How do domain-specific mechanisms help with combinatorial explosion?",
          choices: ["By trying every possibility at random", "By constraining the search to a small set of relevant options", "By slowing all thinking down", "By deleting all stored information"],
          answer: 1,
          explain: "Built-in, problem-specific assumptions narrow the search space so a good solution can be found efficiently."
        },
        {
          type: "truefalse",
          q: "A general-purpose learner with no built-in assumptions would learn faster than a specialized one.",
          answer: false,
          explain: "With no priors it cannot separate relevant from irrelevant options, so it bogs down; specialized assumptions actually speed learning."
        },
        {
          type: "mcq",
          q: "The frame problem originally comes from which field?",
          choices: ["Artificial intelligence", "Astronomy", "Geology", "Macroeconomics"],
          answer: 0,
          explain: "It was posed in artificial intelligence (McCarthy and Hayes, 1969) and later borrowed as an argument for specialized minds."
        },
        {
          type: "order",
          q: "Order the argument for why the mind must be specialized.",
          items: ["A mind faces many possible actions", "A general system cannot rank them all (combinatorial explosion)", "Specialized mechanisms supply built-in relevance", "Adaptive problems get solved efficiently"],
          explain: "Specialization is proposed as the way real minds avoid drowning in possibilities."
        }
      ]
    },
    {
      id: "l63",
      title: "Evolved Psychological Mechanisms",
      intro: "Buss describes an evolved psychological mechanism as a device with a clear structure: input, decision rules, and output.",
      questions: [
        {
          type: "mcq",
          q: "According to Buss, an evolved psychological mechanism processes things in what order?",
          choices: ["Output, then decision rules, then input", "Input, then decision rules, then output", "Decision rules only, with no input or output", "In a random order each time"],
          answer: 1,
          explain: "An EPM receives a narrow input, applies decision rules, and produces an output."
        },
        {
          type: "order",
          q: "Order the three core parts of an evolved psychological mechanism.",
          items: ["Input", "Decision rules", "Output"],
          explain: "Information enters as input, is transformed by decision rules, and leaves as output."
        },
        {
          type: "fill",
          q: "An EPM is designed to take in only a narrow slice of ____ that signals a specific adaptive problem.",
          answer: "information",
          accept: ["information", "input"],
          explain: "The narrow input tells the organism which particular adaptive problem it is currently facing."
        },
        {
          type: "truefalse",
          q: "The output of an EPM can be behavior, physiological activity, or information sent to other mechanisms.",
          answer: true,
          explain: "Buss lists all three possible output types for an evolved psychological mechanism."
        },
        {
          type: "mcq",
          q: "An evolved psychological mechanism exists in its current form because it:",
          choices: ["Was designed by a committee of experts", "Was invented within the last century", "Recurrently solved a specific adaptive problem over evolutionary time", "Serves no function at all"],
          answer: 2,
          explain: "By definition, an EPM exists because it solved a recurrent survival or reproduction problem across ancestral generations."
        },
        {
          type: "truefalse",
          q: "An evolved psychological mechanism is designed to take in all available information equally.",
          answer: false,
          explain: "It is built to take in only a narrow, specific slice of information relevant to its adaptive problem."
        },
        {
          type: "match",
          q: "Match each part of an EPM to its role.",
          pairs: [
            ["Input", "The narrow information that triggers the mechanism"],
            ["Decision rules", "Procedures that transform input into output"],
            ["Output", "Behavior, physiology, or signals to other mechanisms"]
          ],
          explain: "Together these three parts define the information-processing structure of an evolved mechanism."
        }
      ]
    },
    {
      id: "l64",
      title: "Critiques of Modularity",
      intro: "Critics argue that brain plasticity and development undermine the picture of many innately fixed, pre-specified modules.",
      questions: [
        {
          type: "mcq",
          q: "A central objection to massive modularity is that the brain shows extensive what during development?",
          choices: ["Rigidity", "Shrinkage", "Plasticity", "Silence"],
          answer: 2,
          explain: "Developmental and neural plasticity suggest brain organization is shaped by experience, not simply pre-wired into fixed modules."
        },
        {
          type: "truefalse",
          q: "Neural plasticity, such as visual cortex being repurposed in people who are blind, challenges the idea of fixed, pre-specified modules.",
          answer: true,
          explain: "If cortex can take on new functions, brain regions are less rigidly dedicated than a strong module view assumes."
        },
        {
          type: "mcq",
          q: "Which 2005 book critiqued evolutionary psychology's massive-modularity claims?",
          choices: ["'Adapting Minds' by David Buller", "'The Selfish Gene' by Richard Dawkins", "'The Adapted Mind' by Barkow, Cosmides, and Tooby", "'Sociobiology' by E.O. Wilson"],
          answer: 0,
          explain: "David Buller's 'Adapting Minds' (2005) is a well-known philosophical critique of the massive-modularity program."
        },
        {
          type: "fill",
          q: "Annette Karmiloff-Smith argued that modules are gradually ____ through development rather than innately given.",
          answer: "constructed",
          accept: ["constructed", "built"],
          explain: "Her neuroconstructivist view holds that modular structure emerges over development instead of being pre-installed."
        },
        {
          type: "truefalse",
          q: "Jerry Fodor endorsed massive modularity in his 2000 book 'The Mind Doesn't Work That Way.'",
          answer: false,
          explain: "Fodor argued AGAINST massive modularity there, maintaining that central cognition is not modular."
        },
        {
          type: "mcq",
          q: "The 'grain problem' for modularity concerns which question?",
          choices: ["How much grain the brain consumes for fuel", "How fine- or coarse-grained modules should be individuated", "Whether neurons are edible", "How fast a single neuron fires"],
          answer: 1,
          explain: "The grain problem asks how many modules there are and how narrowly each should be defined, which the thesis leaves unclear."
        },
        {
          type: "match",
          q: "Match each critique or critic to its point.",
          pairs: [
            ["Developmental plasticity", "Brain wiring adjusts to experience"],
            ["Neuroconstructivism", "Modules are built up over development"],
            ["Grain problem", "How to count and individuate modules"],
            ["David Buller", "Author of the 2005 critique 'Adapting Minds'"]
          ],
          explain: "These objections target the innateness, fixity, and countability of the proposed modules."
        }
      ]
    }
  ]
});
