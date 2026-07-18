window.ACADEMY.addUnit("behaviorism", {
  id: "unit-18",
  title: "Applied Behavior Analysis",
  color: "#14a58f",
  icon: "🧩",
  description: "This unit shows how operant principles became an applied science for changing socially important behavior, from assessment and analysis to teaching, reduction procedures, token systems, and the field's ethical debates.",
  lessons: [
    {
      id: "l137",
      title: "The Dimensions of ABA",
      intro: "In 1968 Baer, Wolf, and Risley defined seven criteria that separate applied behavior analysis from basic research and casual behavior change.",
      questions: [
        {
          type: "mcq",
          q: "In what year did Baer, Wolf, and Risley publish 'Some Current Dimensions of Applied Behavior Analysis'?",
          choices: ["1938", "1953", "1968", "1987"],
          answer: 2,
          explain: "The landmark paper appeared in 1968 in the very first issue of the Journal of Applied Behavior Analysis (JABA), founding the field's identity."
        },
        {
          type: "match",
          q: "Match each of the seven dimensions to its meaning.",
          pairs: [
            ["Applied", "Targets behavior that is socially significant to the person"],
            ["Analytic", "Demonstrates that the intervention caused the change"],
            ["Technological", "Procedures described clearly enough to be replicated"],
            ["Generality", "Effects last over time, settings, and behaviors"]
          ],
          explain: "The seven dimensions are Applied, Behavioral, Analytic, Technological, Conceptually Systematic, Effective, and Generality."
        },
        {
          type: "fill",
          q: "The ____ dimension means the behavior chosen for change must be socially significant to the individual and society.",
          answer: "applied",
          accept: ["applied"],
          explain: "'Applied' distinguishes ABA from basic research: it studies problems that matter in people's real lives, not just theoretically interesting responses."
        },
        {
          type: "truefalse",
          q: "The 'technological' dimension means an intervention must use electronic devices or computers.",
          answer: false,
          explain: "'Technological' means the procedures are described in enough detail that another person could read them and replicate the intervention precisely."
        },
        {
          type: "mcq",
          q: "Which dimension requires showing that the intervention, and not some other variable, produced the behavior change?",
          choices: ["Behavioral", "Analytic", "Effective", "Applied"],
          answer: 1,
          explain: "The 'analytic' dimension demands a believable demonstration of experimental control, typically through a single-subject design that shows functional relations."
        },
        {
          type: "mcq",
          q: "'Conceptually systematic' means that ABA interventions should be:",
          choices: [
            "Kept secret from other practitioners",
            "Based only on the therapist's intuition",
            "Derived from and described in terms of basic behavioral principles",
            "Focused on internal mental states"
          ],
          answer: 2,
          explain: "Being conceptually systematic ties techniques back to established principles like reinforcement and extinction, so the field grows as a coherent body of knowledge rather than a bag of tricks."
        },
        {
          type: "truefalse",
          q: "The 'effective' dimension asks whether an intervention produces changes large enough to be practically important in the person's life.",
          answer: true,
          explain: "A statistically detectable change is not enough; 'effective' means the improvement is clinically or socially meaningful to the individual."
        }
      ]
    },
    {
      id: "l138",
      title: "Functional Behavior Assessment",
      intro: "A functional behavior assessment gathers information to identify why a behavior occurs, so treatment addresses its purpose rather than just its appearance.",
      questions: [
        {
          type: "fill",
          q: "FBA stands for functional behavior ____.",
          answer: "assessment",
          accept: ["assessment"],
          explain: "A functional behavior assessment is the process of gathering data to determine the environmental purpose a behavior serves."
        },
        {
          type: "mcq",
          q: "What is the primary goal of a functional behavior assessment?",
          choices: [
            "To identify the function or purpose the behavior serves",
            "To measure how tall the behavior makes the person",
            "To rank people by intelligence",
            "To prove the behavior is caused by genetics"
          ],
          answer: 0,
          explain: "The point of an FBA is to discover what maintains the behavior, so an intervention can teach a better way to achieve that same function."
        },
        {
          type: "order",
          q: "Put the parts of an A-B-C recording in their correct order.",
          items: ["Antecedent (what happens right before)", "Behavior (the response itself)", "Consequence (what happens right after)"],
          explain: "A-B-C recording captures the antecedent, the behavior, and the consequence, revealing patterns that hint at the behavior's function."
        },
        {
          type: "truefalse",
          q: "An FBA focuses mainly on what the behavior looks like (its topography) rather than why it happens.",
          answer: false,
          explain: "Two behaviors that look identical can serve different functions, so an FBA emphasizes function over topography."
        },
        {
          type: "match",
          q: "Match each FBA method to how it collects information.",
          pairs: [
            ["Indirect assessment", "Interviews, questionnaires, and rating scales"],
            ["Descriptive assessment", "Direct A-B-C observation in the natural setting"],
            ["Functional analysis", "Experimentally manipulating antecedents and consequences"]
          ],
          explain: "FBA methods range from indirect (reports), to descriptive (direct observation), to the most rigorous experimental functional analysis."
        },
        {
          type: "mcq",
          q: "The Motivation Assessment Scale (MAS), a questionnaire completed by caregivers, is an example of which FBA method?",
          choices: ["Functional analysis", "Descriptive assessment", "Indirect assessment", "Single-subject design"],
          answer: 2,
          explain: "The MAS is a rating scale that relies on informant report rather than direct observation, making it an indirect assessment tool."
        },
        {
          type: "truefalse",
          q: "Descriptive assessment involves directly observing the behavior as it occurs in its natural context.",
          answer: true,
          explain: "Descriptive assessment records real-time A-B-C data in the everyday environment without experimentally manipulating conditions."
        }
      ]
    },
    {
      id: "l139",
      title: "Functional Analysis",
      intro: "Functional analysis, formalized by Iwata and colleagues in 1982, experimentally tests which environmental variables maintain a behavior by systematically arranging analog conditions.",
      questions: [
        {
          type: "mcq",
          q: "Whose 1982 study introduced the standard experimental functional analysis of self-injurious behavior?",
          choices: ["B. F. Skinner", "Brian Iwata and colleagues", "Ivan Pavlov", "Albert Bandura"],
          answer: 1,
          explain: "Iwata, Dorsey, Slifer, Bauman, and Richman published the seminal functional analysis methodology in 1982."
        },
        {
          type: "mcq",
          q: "In the classic Iwata functional analysis, which condition serves as the control?",
          choices: ["Attention", "Demand", "Play", "Alone"],
          answer: 2,
          explain: "The play (or 'leisure') condition provides rich attention, no demands, and free access to materials, so it acts as a control against which the test conditions are compared."
        },
        {
          type: "match",
          q: "Match each functional analysis condition to the maintaining variable it tests.",
          pairs: [
            ["Attention condition", "Social positive reinforcement"],
            ["Demand condition", "Escape / negative reinforcement"],
            ["Alone condition", "Automatic (sensory) reinforcement"],
            ["Play condition", "Control comparison"]
          ],
          explain: "Each analog condition isolates one possible function, so elevated responding in a condition points to that function."
        },
        {
          type: "fill",
          q: "In the demand condition, elevated behavior suggests it is reinforced by ____ from task demands.",
          answer: "escape",
          accept: ["escape", "escape or avoidance", "avoidance"],
          explain: "If a behavior spikes when demands are presented and stops when demands are withdrawn, it is maintained by escape (negative reinforcement)."
        },
        {
          type: "truefalse",
          q: "Iwata and colleagues' 1982 study was originally published in 'Analysis and Intervention in Developmental Disabilities' and reprinted in JABA in 1994.",
          answer: true,
          explain: "The influential paper first appeared in 1982 and was reprinted in the Journal of Applied Behavior Analysis in 1994, extending its reach."
        },
        {
          type: "truefalse",
          q: "A functional analysis only observes behavior passively and never manipulates any variables.",
          answer: false,
          explain: "The defining feature of a functional analysis is that it experimentally manipulates antecedents and consequences to establish a functional relation."
        },
        {
          type: "order",
          q: "Order the steps of conducting a functional analysis.",
          items: [
            "Arrange the analog test conditions (attention, demand, alone, play)",
            "Present the antecedent for a given condition",
            "Deliver the programmed consequence contingent on the behavior",
            "Compare response rates across conditions to identify the function"
          ],
          explain: "By comparing how often the behavior occurs across systematically arranged conditions, the analyst identifies which consequence maintains it."
        }
      ]
    },
    {
      id: "l140",
      title: "The Four Functions",
      intro: "Most behaviors are maintained by one of four functions: attention, escape, access to tangibles, or automatic reinforcement.",
      questions: [
        {
          type: "mcq",
          q: "Which of these is NOT one of the four commonly identified functions of behavior?",
          choices: ["Attention", "Escape", "Punishment", "Automatic reinforcement"],
          answer: 2,
          explain: "Punishment is a consequence that reduces behavior, not a maintaining function. The four functions are attention, escape, tangible, and automatic reinforcement."
        },
        {
          type: "match",
          q: "Match each function to what maintains the behavior.",
          pairs: [
            ["Attention", "Gaining social interaction or reactions from others"],
            ["Escape", "Avoiding or getting away from demands or aversive situations"],
            ["Tangible", "Gaining access to a preferred item or activity"],
            ["Automatic", "Internal sensory stimulation independent of others"]
          ],
          explain: "Each function describes the reinforcing outcome that keeps the behavior going."
        },
        {
          type: "fill",
          q: "Behavior maintained by sensory stimulation it directly produces, independent of other people, serves an ____ function.",
          answer: "automatic",
          accept: ["automatic", "automatic reinforcement", "sensory"],
          explain: "Automatic reinforcement (sometimes called sensory) is produced by the behavior itself, such as rocking or humming, without needing another person."
        },
        {
          type: "truefalse",
          q: "Escape-maintained behavior is an example of negative reinforcement.",
          answer: true,
          explain: "Escape removes or postpones an aversive event, and removing a stimulus to strengthen behavior is the definition of negative reinforcement."
        },
        {
          type: "mcq",
          q: "A child tantrums in a store and is then handed a candy bar to quiet down. Which function is most likely being reinforced?",
          choices: ["Escape", "Automatic", "Attention", "Tangible"],
          answer: 3,
          explain: "Receiving a preferred item (the candy) after the behavior reinforces a tangible-access function."
        },
        {
          type: "truefalse",
          q: "Both the attention and tangible functions involve positive reinforcement, because something is added following the behavior.",
          answer: true,
          explain: "Attention and tangible functions add a stimulus (social contact or an item), making them forms of positive reinforcement."
        },
        {
          type: "mcq",
          q: "The mnemonic SEAT is used to remember the four functions. What do its letters stand for?",
          choices: [
            "Sit, Eat, Ask, Talk",
            "Sensory (automatic), Escape, Attention, Tangible",
            "Skill, Effort, Attitude, Time",
            "Stimulus, Extinction, Antecedent, Trial"
          ],
          answer: 1,
          explain: "SEAT stands for Sensory/automatic, Escape, Attention, and Tangible, a handy way to recall the four functions."
        }
      ]
    },
    {
      id: "l141",
      title: "Discrete Trial Training",
      intro: "Discrete trial training, central to Lovaas-style early intensive intervention, breaks skills into small units taught in repeated, highly structured trials.",
      questions: [
        {
          type: "mcq",
          q: "Which psychologist pioneered intensive behavioral intervention for autistic children using discrete trial methods?",
          choices: ["Ole Ivar Lovaas", "John B. Watson", "Edward Thorndike", "Joseph Wolpe"],
          answer: 0,
          explain: "Ole Ivar Lovaas developed early intensive behavioral intervention for autism at UCLA, popularizing discrete trial training."
        },
        {
          type: "mcq",
          q: "In what year did Lovaas publish the landmark study reporting that about 47% of children in intensive treatment achieved normal educational and intellectual functioning?",
          choices: ["1953", "1971", "1987", "2001"],
          answer: 2,
          explain: "Lovaas's much-cited study appeared in 1987 in the Journal of Consulting and Clinical Psychology."
        },
        {
          type: "order",
          q: "Order the components of a single discrete trial.",
          items: [
            "Discriminative stimulus (the instruction or cue)",
            "Prompt (extra help, if needed)",
            "Response (the learner's answer)",
            "Consequence (reinforcement or correction)",
            "Inter-trial interval (brief pause)"
          ],
          explain: "A discrete trial flows from cue, to optional prompt, to response, to consequence, then a short pause before the next trial."
        },
        {
          type: "fill",
          q: "The instruction or cue that signals the start of a discrete trial is called the ____ stimulus.",
          answer: "discriminative",
          accept: ["discriminative", "sd", "discriminative stimulus"],
          explain: "The discriminative stimulus (SD) sets the occasion for the target response and signals that reinforcement is available for a correct answer."
        },
        {
          type: "truefalse",
          q: "Lovaas's 1987 intensive program involved roughly 40 hours of one-to-one therapy per week.",
          answer: true,
          explain: "The experimental group received about 40 hours per week of intensive intervention over two or more years."
        },
        {
          type: "match",
          q: "Match each discrete-trial component to its role.",
          pairs: [
            ["Discriminative stimulus", "The cue or instruction that begins the trial"],
            ["Prompt", "Extra assistance to evoke the correct response"],
            ["Consequence", "Reinforcement for correct, correction for incorrect"],
            ["Inter-trial interval", "A brief pause before the next trial begins"]
          ],
          explain: "Each component has a defined role that keeps trials consistent and measurable."
        },
        {
          type: "truefalse",
          q: "Discrete trial training teaches skills only in unstructured, spontaneous play settings.",
          answer: false,
          explain: "DTT is highly structured, using repeated massed trials; naturalistic teaching is a different approach often used alongside it."
        }
      ]
    },
    {
      id: "l142",
      title: "Differential Reinforcement Procedures",
      intro: "Differential reinforcement reduces problem behavior not through punishment but by reinforcing its absence or a better alternative.",
      questions: [
        {
          type: "match",
          q: "Match each differential reinforcement procedure to what it reinforces.",
          pairs: [
            ["DRO", "The absence of the target behavior for a set interval"],
            ["DRA", "An appropriate alternative behavior"],
            ["DRI", "A behavior physically incompatible with the target"],
            ["DRL", "Gradually lower rates of the behavior"]
          ],
          explain: "DRO, DRA, DRI, and DRL all strengthen something other than the problem behavior to reduce it constructively."
        },
        {
          type: "mcq",
          q: "In the abbreviation DRO, what does the 'O' stand for?",
          choices: ["Operant", "Other behavior (or omission)", "Overcorrection", "Observation"],
          answer: 1,
          explain: "DRO is differential reinforcement of other behavior, delivering reinforcement when the target behavior is omitted for an interval."
        },
        {
          type: "fill",
          q: "Reinforcing a behavior that physically cannot occur at the same time as the problem behavior is called ____ (its three-letter abbreviation).",
          answer: "dri",
          accept: ["dri", "differential reinforcement of incompatible behavior", "incompatible"],
          explain: "DRI reinforces an incompatible response, such as hands in lap, which cannot happen at the same time as hitting."
        },
        {
          type: "truefalse",
          q: "In DRA, the reinforced alternative is often a functionally equivalent replacement that achieves the same outcome as the problem behavior.",
          answer: true,
          explain: "DRA works best when the alternative behavior earns the same reinforcer the problem behavior did, giving the person an acceptable way to meet the need."
        },
        {
          type: "mcq",
          q: "A teacher praises a student for keeping hands folded, a response that cannot co-occur with hitting. Which procedure is this?",
          choices: ["DRL", "DRO", "DRI", "DRA"],
          answer: 2,
          explain: "Reinforcing an incompatible behavior (folded hands vs. hitting) is DRI."
        },
        {
          type: "truefalse",
          q: "DRO delivers reinforcement contingent on the problem behavior actually occurring.",
          answer: false,
          explain: "DRO does the opposite: it reinforces the absence of the problem behavior across an interval, not its occurrence."
        },
        {
          type: "mcq",
          q: "Which procedure reinforces gradually reduced frequencies of a behavior rather than eliminating it entirely, useful when some level is acceptable?",
          choices: ["DRL", "DRI", "DRO", "DRA"],
          answer: 0,
          explain: "DRL (differential reinforcement of low rates) reinforces lower response rates, fitting behaviors like raising a hand that are fine in moderation."
        }
      ]
    },
    {
      id: "l143",
      title: "Token Economies",
      intro: "Ayllon and Azrin's token economy uses tokens as generalized conditioned reinforcers exchangeable for a wide range of backup rewards.",
      questions: [
        {
          type: "mcq",
          q: "Who authored the foundational 1968 book 'The Token Economy: A Motivational System for Therapy and Rehabilitation'?",
          choices: [
            "Watson and Rayner",
            "Ayllon and Azrin",
            "Baer and Wolf",
            "Premack and Skinner"
          ],
          answer: 1,
          explain: "Teodoro Ayllon and Nathan Azrin developed and described the token economy in their 1968 book."
        },
        {
          type: "fill",
          q: "Tokens are called ____ conditioned reinforcers because they can be exchanged for many different backup reinforcers.",
          answer: "generalized",
          accept: ["generalized", "generalised"],
          explain: "Because a token buys access to many rewards, it functions as a generalized conditioned reinforcer, effective across many states of deprivation."
        },
        {
          type: "match",
          q: "Match each token economy component to its description.",
          pairs: [
            ["Token", "The generalized reinforcer earned for target behavior"],
            ["Backup reinforcer", "The item or activity tokens are exchanged for"],
            ["Exchange system", "The rules for trading tokens for backups"],
            ["Target behavior", "The response that earns tokens"]
          ],
          explain: "A working token economy specifies what earns tokens, what tokens buy, and how and when exchanges happen."
        },
        {
          type: "truefalse",
          q: "A token has inherent reinforcing value on its own, regardless of what it can be exchanged for.",
          answer: false,
          explain: "A token is a neutral stimulus; its reinforcing power comes entirely from being paired with, and exchangeable for, backup reinforcers."
        },
        {
          type: "mcq",
          q: "How does a token acquire its reinforcing power?",
          choices: [
            "Through pairing with, and exchange for, backup reinforcers",
            "Because tokens are naturally motivating from birth",
            "By being physically heavy or colorful",
            "Through punishment of unwanted behavior"
          ],
          answer: 0,
          explain: "Tokens become conditioned reinforcers by being reliably paired with established backup reinforcers."
        },
        {
          type: "truefalse",
          q: "Ayllon and Azrin developed the token economy while working with psychiatric patients at Anna State Hospital.",
          answer: true,
          explain: "Their early token economy research was conducted with psychiatric inpatients at Anna State Hospital in Illinois."
        },
        {
          type: "order",
          q: "Order the basic operation of a token economy.",
          items: [
            "Define target behaviors and choose the tokens",
            "Deliver a token immediately after the target behavior",
            "Let the person accumulate tokens over time",
            "Exchange tokens for backup reinforcers"
          ],
          explain: "The cycle runs from defining behaviors, to earning tokens contingently, to saving them, to exchanging them for meaningful rewards."
        }
      ]
    },
    {
      id: "l144",
      title: "Ethics and Controversy",
      intro: "Autistic self-advocates and the neurodiversity movement have raised serious ethical critiques of ABA, prompting reforms in how the field is practiced.",
      questions: [
        {
          type: "mcq",
          q: "A common neurodiversity critique is that ABA has historically aimed to make autistic children:",
          choices: [
            "More creative than their peers",
            "Indistinguishable from their non-autistic peers",
            "Physically taller",
            "Better at standardized tests only"
          ],
          answer: 1,
          explain: "Critics object to the historical goal, framed in Lovaas's own words, of making autistic children 'indistinguishable' from peers, arguing it pressures masking of natural traits."
        },
        {
          type: "truefalse",
          q: "Early Lovaas-era ABA programs sometimes used aversive procedures such as punishment.",
          answer: true,
          explain: "Some early programs used aversives, a practice now widely rejected in mainstream ABA and central to many ethical critiques."
        },
        {
          type: "fill",
          q: "Autistic self-advocates argue that suppressing harmless self-soothing behaviors, known as ____, can be distressing and counterproductive.",
          answer: "stimming",
          accept: ["stimming", "self-stimulation", "self stimulation"],
          explain: "Stimming (self-stimulatory behavior) often serves regulation; critics say suppressing harmless stimming removes a coping tool."
        },
        {
          type: "match",
          q: "Match each concept to its role in the ethics debate.",
          pairs: [
            ["Neurodiversity movement", "Views autism as natural variation, not a defect to cure"],
            ["Assent", "The learner's willingness to participate, stressed in modern ethics"],
            ["Compliance concern", "Worry that obedience training reduces self-advocacy"],
            ["Social validity", "Whether goals truly matter to the individual and community"]
          ],
          explain: "Modern ethical practice emphasizes assent, social validity, and respecting neurodiversity rather than enforcing compliance."
        },
        {
          type: "truefalse",
          q: "The Behavior Analyst Certification Board (BACB) has no ethics code governing its practitioners.",
          answer: false,
          explain: "The BACB maintains an enforceable ethics code that certified behavior analysts must follow."
        },
        {
          type: "mcq",
          q: "Which is a common modern reform made in response to community critiques?",
          choices: [
            "Increasing the use of aversives",
            "Removing all reinforcement from programs",
            "Incorporating client assent and more naturalistic, less rigid procedures",
            "Requiring 80 hours of therapy per week"
          ],
          answer: 2,
          explain: "Contemporary practice increasingly centers assent, individualized goals, and naturalistic teaching over rigid compliance-focused drills."
        },
        {
          type: "truefalse",
          q: "A 2018 study by Kupferstein reported an association between ABA exposure and PTSD symptoms, though its methodology has been widely criticized.",
          answer: true,
          explain: "Kupferstein's 2018 paper reported such an association and fueled debate, but critics note methodological limitations, so it is cited cautiously rather than as settled proof."
        }
      ]
    }
  ]
});
