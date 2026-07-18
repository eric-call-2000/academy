window.ACADEMY.addUnit("behaviorism", {
  id: "unit-22",
  title: "Behaviorism and the Cognitive Revolution",
  color: "#14a58f",
  icon: "🧠",
  description: "Traces the anomalies, ideas, and landmark events that displaced behaviorism and ushered in cognitive psychology.",
  lessons: [
    {
      id: "l169",
      title: "Cracks in the Program",
      intro: "Several stubborn phenomena resisted a purely stimulus-response account and exposed the limits of behaviorism.",
      questions: [
        {
          type: "mcq",
          q: "Which phenomenon posed a serious challenge to a strict behaviorist explanation?",
          choices: ["A rat pressing a lever for food", "A pigeon pecking a lit key", "A child producing sentences never heard before", "A dog salivating to a bell"],
          answer: 2,
          explain: "Children generate novel, grammatical sentences they were never reinforced for. This linguistic productivity cannot come from reinforcing previously heard responses."
        },
        {
          type: "truefalse",
          q: "Chomsky argued that reinforcement history alone could account for how children acquire language.",
          answer: false,
          explain: "Chomsky's 1959 review of Skinner's 'Verbal Behavior' argued the opposite: reinforcement cannot explain language's generativity, and children face a poverty of stimulus."
        },
        {
          type: "fill",
          q: "The Brelands' finding that trained animals drift back toward innate species behaviors is called instinctive ____.",
          answer: "drift",
          accept: ["drift", "instinctive drift"],
          explain: "Keller and Marian Breland documented instinctive drift, where species-typical behaviors override conditioned responses, an anomaly for pure conditioning."
        },
        {
          type: "match",
          q: "Match each anomaly to what it describes.",
          pairs: [
            ["Latent learning", "Learning that occurs without reinforcement and stays hidden until needed"],
            ["Insight learning", "A sudden solution to a problem without gradual trial and error"],
            ["Instinctive drift", "Trained behavior giving way to innate species patterns"]
          ],
          explain: "Each of these findings resisted the idea that all learning is gradual, reinforcement-driven conditioning."
        },
        {
          type: "mcq",
          q: "Wolfgang Kohler's chimpanzees solving problems abruptly demonstrated what kind of learning that troubled behaviorists?",
          choices: ["Classical", "Insight", "Escape", "Avoidance"],
          answer: 1,
          explain: "Kohler's apes showed insight, a sudden restructuring of the problem rather than incremental trial-and-error, challenging associative accounts."
        },
        {
          type: "order",
          q: "Put these critiques and studies of behaviorism in the order they occurred.",
          items: ["Tolman and Honzik's latent learning study (1930)", "Skinner publishes 'Verbal Behavior' (1957)", "Chomsky's critical review (1959)"],
          explain: "Anomalies like latent learning surfaced early, but Chomsky's 1959 review of Skinner's 1957 book crystallized the attack on behaviorism's reach."
        },
        {
          type: "truefalse",
          q: "The generativity of language, producing endless novel sentences, was easily handled by simple stimulus-response chains.",
          answer: false,
          explain: "Novel sentence production is exactly what stimulus-response chains cannot explain, since the responses were never previously emitted or reinforced."
        }
      ]
    },
    {
      id: "l170",
      title: "Tolman and Latent Learning Revisited",
      intro: "Edward Tolman argued that even rats in mazes form internal representations, smuggling cognition into behaviorism.",
      questions: [
        {
          type: "mcq",
          q: "Tolman's version of behaviorism, which allowed goals and expectancies, was called ____ behaviorism.",
          choices: ["Radical", "Purposive", "Methodological", "Molecular"],
          answer: 1,
          explain: "Tolman called his approach purposive (or molar) behaviorism, insisting that behavior is goal-directed rather than a chain of tiny reflexes."
        },
        {
          type: "fill",
          q: "Tolman argued that rats build an internal ____ map of the maze rather than memorizing movements.",
          answer: "cognitive",
          accept: ["cognitive"],
          explain: "In his 1948 paper 'Cognitive Maps in Rats and Men,' Tolman proposed rats form a spatial cognitive map."
        },
        {
          type: "truefalse",
          q: "In Tolman and Honzik's 1930 study, unrewarded rats showed a sharp drop in errors once a reward was finally introduced, revealing latent learning.",
          answer: true,
          explain: "Rats that explored without reward performed poorly until reward began, then improved almost immediately, showing they had learned the maze all along."
        },
        {
          type: "mcq",
          q: "What did latent learning demonstrate that challenged behaviorism?",
          choices: ["Learning requires immediate reinforcement", "Learning can occur without reinforcement and stay hidden", "Reinforcement is the only cause of performance", "Rats cannot learn mazes"],
          answer: 1,
          explain: "Latent learning shows learning can happen without reinforcement, separating learning (acquisition) from performance (showing it)."
        },
        {
          type: "match",
          q: "Match each Tolman concept to its meaning.",
          pairs: [
            ["Latent learning", "Learning that stays hidden until there is a reason to show it"],
            ["Cognitive map", "An internal representation of spatial layout"],
            ["Purposive behavior", "Behavior directed toward a goal or expectancy"]
          ],
          explain: "These ideas treat the organism as representing and anticipating, not just reacting."
        },
        {
          type: "order",
          q: "Order the logic of the latent-learning demonstration.",
          items: ["Rats explore the maze with no reward", "A reward is suddenly introduced", "Performance jumps almost immediately", "We infer learning had occurred earlier"],
          explain: "The sudden jump in performance is only explainable if the rats had already learned the maze during unrewarded exploration."
        },
        {
          type: "truefalse",
          q: "Tolman's work suggested rats learn a place, or map, rather than a fixed chain of specific movements.",
          answer: true,
          explain: "Place-learning experiments showed rats could reach a goal by new routes, implying a spatial map rather than a memorized sequence of turns."
        }
      ]
    },
    {
      id: "l171",
      title: "The Information-Processing Metaphor",
      intro: "The digital computer gave psychologists a respectable way to talk about internal mental operations.",
      questions: [
        {
          type: "mcq",
          q: "The information-processing approach compares the mind to a ____.",
          choices: ["Muscle", "Computer", "Reflex arc", "Black box"],
          answer: 1,
          explain: "The mind was likened to a computer that takes input, processes it through internal stages, and produces output."
        },
        {
          type: "truefalse",
          q: "In the computer metaphor, the brain is likened to hardware and the mind to software.",
          answer: true,
          explain: "The brain-as-hardware, mind-as-software analogy let researchers study mental programs somewhat independently of neural details."
        },
        {
          type: "fill",
          q: "Information processing describes three stages of memory: encoding, storage, and ____.",
          answer: "retrieval",
          accept: ["retrieval", "recall"],
          explain: "Encoding puts information in, storage holds it, and retrieval brings it back out, mirroring how a computer handles data."
        },
        {
          type: "order",
          q: "Put the information-processing sequence in order.",
          items: ["Input", "Encoding", "Storage", "Retrieval", "Output"],
          explain: "Information flows from sensory input, gets encoded and stored, is later retrieved, and drives output, an explicitly internal-stage model."
        },
        {
          type: "match",
          q: "Match each memory stage to its function.",
          pairs: [
            ["Encoding", "Converting input into a usable mental code"],
            ["Storage", "Maintaining information over time"],
            ["Retrieval", "Accessing stored information when needed"]
          ],
          explain: "These stages describe internal transformations, exactly what strict behaviorism refused to theorize about."
        },
        {
          type: "mcq",
          q: "Which behaviorist commitment did the information-processing metaphor reject?",
          choices: ["That behavior can be measured", "That internal representations are worth studying", "That the mind should be treated as an unopenable black box", "That experiments should be controlled"],
          answer: 2,
          explain: "The information-processing view opened the 'black box' to model internal processes, rejecting behaviorism's refusal to theorize about mental events."
        },
        {
          type: "truefalse",
          q: "The information-processing metaphor treated the mind purely as a stimulus-response reflex with no internal computation.",
          answer: false,
          explain: "The whole point of the metaphor was internal computation, information being transformed through stages between stimulus and response."
        }
      ]
    },
    {
      id: "l172",
      title: "Miller's \"Magical Number Seven\"",
      intro: "George Miller's 1956 paper measured a mental capacity limit, reviving the empirical study of the mind.",
      questions: [
        {
          type: "mcq",
          q: "George Miller's 1956 paper proposed that short-term memory holds about how many items?",
          choices: ["3 plus or minus 1", "7 plus or minus 2", "12 plus or minus 3", "20 plus or minus 5"],
          answer: 1,
          explain: "Miller's 'The Magical Number Seven, Plus or Minus Two' argued our immediate memory span is roughly seven chunks."
        },
        {
          type: "fill",
          q: "Miller argued we overcome memory limits by grouping items into meaningful ____.",
          answer: "chunks",
          accept: ["chunks", "chunk", "chunking"],
          explain: "Chunking recodes many small items into fewer meaningful units, expanding effective capacity without changing the ~7 limit."
        },
        {
          type: "truefalse",
          q: "Miller's paper is regarded as measuring an internal cognitive limit, something behaviorism avoided theorizing about.",
          answer: true,
          explain: "By quantifying a mental capacity, Miller demonstrated that internal processes could be studied rigorously and experimentally."
        },
        {
          type: "mcq",
          q: "The full title of Miller's 1956 paper refers to limits on our capacity for processing ____.",
          choices: ["Food", "Information", "Emotion", "Reflexes"],
          answer: 1,
          explain: "The title is 'The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information.'"
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Chunk", "A meaningful unit that groups smaller items"],
            ["7 plus or minus 2", "The approximate span of short-term memory"],
            ["Chunking", "Recoding information to expand effective capacity"]
          ],
          explain: "Miller's insight was that capacity is limited in chunks, and chunk size can grow with meaning and expertise."
        },
        {
          type: "order",
          q: "Order these from smallest to largest chunk size for the same information.",
          items: ["Individual letters", "Grouped into words", "Grouped into a phrase"],
          explain: "As items are recoded into larger meaningful units, fewer chunks are needed, letting more raw information fit in memory."
        },
        {
          type: "truefalse",
          q: "Because chunking depends only on external stimuli, Miller's work supported strict behaviorism.",
          answer: false,
          explain: "Chunking depends on internal, meaning-based recoding by the learner, exactly the kind of mental process behaviorism refused to invoke."
        }
      ]
    },
    {
      id: "l173",
      title: "The 1956 Symposium",
      intro: "On one day in September 1956, papers from psychology, linguistics, and computer science converged into a new field.",
      questions: [
        {
          type: "mcq",
          q: "At which 1956 meeting did several foundational cognitive-science papers converge?",
          choices: ["The Dartmouth Summer Project", "The MIT Symposium on Information Theory", "The Solvay Conference", "The Macy Conferences"],
          answer: 1,
          explain: "George Miller pointed to the MIT Symposium on Information Theory (September 11, 1956) as the moment the field came together."
        },
        {
          type: "fill",
          q: "At the 1956 symposium, Noam Chomsky presented 'Three Models for the Description of ____.'",
          answer: "language",
          accept: ["language"],
          explain: "Chomsky's paper laid out formal models of language, challenging associative accounts of grammar."
        },
        {
          type: "match",
          q: "Match each figure to their 1956-era contribution.",
          pairs: [
            ["George Miller", "The magical number seven and memory span"],
            ["Noam Chomsky", "Three Models for the Description of Language"],
            ["Newell and Simon", "The Logic Theorist reasoning program"]
          ],
          explain: "These three strands, memory, language, and machine reasoning, defined the emerging cognitive science."
        },
        {
          type: "truefalse",
          q: "George Miller later said he left the 1956 symposium convinced that psychology, linguistics, and computer science were parts of a larger whole.",
          answer: true,
          explain: "Miller wrote that he came away believing these fields were pieces of a single, coherent science of the mind."
        },
        {
          type: "mcq",
          q: "The reasoning program Allen Newell and Herbert Simon developed in this period was called the ____.",
          choices: ["Logic Theorist", "Turing Machine", "Perceptron", "General Problem Solver"],
          answer: 0,
          explain: "The Logic Theorist (1956) proved logic theorems and is often called the first artificial-intelligence program; the General Problem Solver came later."
        },
        {
          type: "truefalse",
          q: "The 1956 symposium is often called the symbolic birthday of the cognitive revolution.",
          answer: true,
          explain: "Because so many founding ideas surfaced together that day, historians treat it as the revolution's symbolic starting point."
        },
        {
          type: "mcq",
          q: "1956 is also a landmark year because the Dartmouth workshop coined which term?",
          choices: ["Cybernetics", "Artificial intelligence", "Information theory", "Behaviorism"],
          answer: 1,
          explain: "The 1956 Dartmouth Summer Research Project is where the term 'artificial intelligence' was coined, reinforcing 1956 as a pivotal year."
        }
      ]
    },
    {
      id: "l174",
      title: "Neisser's \"Cognitive Psychology\"",
      intro: "Ulric Neisser's 1967 textbook gave the new paradigm its name, definition, and identity.",
      questions: [
        {
          type: "mcq",
          q: "Who wrote the 1967 book 'Cognitive Psychology' that named the emerging field?",
          choices: ["Ulric Neisser", "George Miller", "Jerome Bruner", "Herbert Simon"],
          answer: 0,
          explain: "Ulric Neisser's 1967 book pulled scattered research together under one banner and popularized the term 'cognitive psychology.'"
        },
        {
          type: "fill",
          q: "Neisser defined cognition as all the processes by which sensory ____ is transformed, stored, and used.",
          answer: "input",
          accept: ["input", "information"],
          explain: "His definition framed cognition as the transformation, reduction, storage, recovery, and use of sensory input."
        },
        {
          type: "truefalse",
          q: "Neisser's 1967 book is often credited with giving the new paradigm its name and coherence.",
          answer: true,
          explain: "By gathering the research and defining the field, the book turned a loose movement into a recognized discipline."
        },
        {
          type: "mcq",
          q: "Neisser is frequently called the ____ of cognitive psychology.",
          choices: ["Opponent", "Funder", "Father", "Founder of behaviorism"],
          answer: 2,
          explain: "His foundational 1967 text earned him the nickname 'the father of cognitive psychology.'"
        },
        {
          type: "match",
          q: "Match each term to its description.",
          pairs: [
            ["Ulric Neisser", "Author of 'Cognitive Psychology' (1967)"],
            ["Cognition", "Processes that transform and use sensory information"],
            ["Ecological validity", "Neisser's later concern that studies reflect real life"]
          ],
          explain: "Neisser both named the field and later pushed it to study cognition in realistic settings."
        },
        {
          type: "order",
          q: "Order the arc of Neisser's career.",
          items: ["Studies shaped by Gestalt psychology", "Publishes 'Cognitive Psychology' (1967)", "Urges greater ecological validity (1976)"],
          explain: "After defining the field in 1967, Neisser's 1976 'Cognition and Reality' criticized lab-bound work as too artificial."
        },
        {
          type: "truefalse",
          q: "Later in his career, Neisser criticized cognitive psychology for being too detached from everyday, real-world settings.",
          answer: true,
          explain: "In 'Cognition and Reality' (1976) he argued the field had grown too artificial and called for ecologically valid research."
        }
      ]
    },
    {
      id: "l175",
      title: "Behaviorism's Decline",
      intro: "A cluster of critiques, new tools, and unanswered questions cost behaviorism its dominance.",
      questions: [
        {
          type: "mcq",
          q: "Which critique most damaged behaviorism's account of language?",
          choices: ["Watson's Little Albert study", "Chomsky's 1959 review of 'Verbal Behavior'", "Pavlov's dog studies", "Thorndike's law of effect"],
          answer: 1,
          explain: "Chomsky's review argued reinforcement cannot explain the creative, rule-governed nature of language, undercutting a core behaviorist claim."
        },
        {
          type: "truefalse",
          q: "The rise of the digital computer gave psychologists a respectable vocabulary for describing internal mental processes.",
          answer: true,
          explain: "The computer metaphor made talk of encoding, storage, and processing scientifically legitimate, weakening the taboo on mental states."
        },
        {
          type: "fill",
          q: "A key reason behaviorism declined was its refusal to study internal ____ states.",
          answer: "mental",
          accept: ["mental", "cognitive"],
          explain: "By excluding mental states from science, behaviorism could not address memory, attention, and language, which the new paradigm embraced."
        },
        {
          type: "mcq",
          q: "Which is NOT a genuine reason behaviorism lost dominance?",
          choices: ["Chomsky's critique of language learning", "The computer metaphor legitimized mental processes", "Failure to explain memory and attention", "Complete inability to predict any behavior"],
          answer: 3,
          explain: "Behaviorism remained good at predicting conditioned behavior; that strength was never why it declined."
        },
        {
          type: "order",
          q: "Order this broad narrative of behaviorism's decline.",
          items: ["Behaviorism dominates psychology", "Anomalies and Chomsky's critique accumulate", "The computer metaphor legitimizes mental processes", "Cognition becomes the mainstream"],
          explain: "Dominance gave way as anomalies mounted, new metaphors emerged, and cognitive psychology took center stage."
        },
        {
          type: "truefalse",
          q: "Behaviorism's decline meant it vanished entirely and left no active research tradition.",
          answer: false,
          explain: "Behaviorism lost its dominance but remained active through applied behavior analysis, behavior therapy, and learning research."
        },
        {
          type: "match",
          q: "Match each force to its role in the shift.",
          pairs: [
            ["Chomsky", "Argued reinforcement cannot explain language"],
            ["Computer metaphor", "Made internal processing scientifically respectable"],
            ["Cognitive revolution", "The turn toward studying mental representations"]
          ],
          explain: "Together these forces moved psychology from observable responses to internal representations."
        }
      ]
    },
    {
      id: "l176",
      title: "What Behaviorism Left Behind",
      intro: "Even after losing dominance, behaviorism bequeathed durable methods, therapies, and standards of rigor.",
      questions: [
        {
          type: "mcq",
          q: "Which clinical technique grew directly out of behaviorist principles?",
          choices: ["Systematic desensitization", "Dream analysis", "Free association", "Rorschach testing"],
          answer: 0,
          explain: "Systematic desensitization, developed by Joseph Wolpe, uses classical-conditioning principles to reduce phobic fear."
        },
        {
          type: "truefalse",
          q: "Applied behavior analysis (ABA), widely used today, is a direct descendant of behaviorist principles.",
          answer: true,
          explain: "ABA applies operant conditioning, especially reinforcement and shaping, and remains a thriving practical legacy of behaviorism."
        },
        {
          type: "fill",
          q: "Behaviorism's insistence on defining variables in observable, measurable terms is called using ____ definitions.",
          answer: "operational",
          accept: ["operational"],
          explain: "Operational definitions specify concepts in terms of measurable operations, a standard behaviorism embedded in scientific psychology."
        },
        {
          type: "match",
          q: "Match each enduring behaviorist tool to its description.",
          pairs: [
            ["Token economy", "A reinforcement system exchanging tokens for rewards"],
            ["Systematic desensitization", "Gradual exposure that reduces a fear response"],
            ["Shaping", "Reinforcing successive approximations of a target behavior"],
            ["Operational definition", "Specifying a concept in measurable terms"]
          ],
          explain: "Each remains in active use in classrooms, clinics, and research, long after behaviorism ceased to dominate theory."
        },
        {
          type: "mcq",
          q: "What broad methodological value did behaviorism leave to all of psychology?",
          choices: ["Reliance on introspection", "A rigorous focus on observable, measurable data", "Rejection of experiments", "A preference for anecdotes"],
          answer: 1,
          explain: "Behaviorism's demand for objective, measurable evidence became a lasting standard, one cognitive psychology kept."
        },
        {
          type: "order",
          q: "Order the steps of shaping a new behavior.",
          items: ["Reinforce any rough approximation of the goal", "Reinforce closer approximations", "Reinforce only the target behavior"],
          explain: "Shaping builds complex behavior by reinforcing successive approximations until only the target behavior earns reward."
        },
        {
          type: "truefalse",
          q: "The cognitive revolution completely discarded behaviorism's experimental rigor and measurement standards.",
          answer: false,
          explain: "Cognitive psychology inherited behaviorism's rigorous experimental methods and objective measurement, applying them to mental processes."
        }
      ]
    }
  ]
});
