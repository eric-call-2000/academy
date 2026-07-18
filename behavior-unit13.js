window.ACADEMY.addUnit("behaviorism", {
  id: "unit-13",
  title: "Escape, Avoidance, and Aversive Control",
  color: "#14a58f",
  icon: "⚡",
  description: "This unit examines learning driven by negative reinforcement, the puzzle of avoidance, and how aversive control and punishment shape behavior.",
  lessons: [
    {
      id: "l97",
      title: "Escape Learning",
      intro: "Escape learning occurs when a response terminates an aversive stimulus that is already present, negatively reinforcing that response.",
      questions: [
        {
          type: "mcq",
          q: "A rat presses a lever and an electric shock that was already on immediately stops. This is an example of:",
          choices: ["Escape learning", "Avoidance learning", "Positive punishment", "Extinction"],
          answer: 0,
          explain: "The shock was already present and the response terminated it, which is the defining feature of escape learning."
        },
        {
          type: "truefalse",
          q: "Escape learning is a form of negative reinforcement because the response removes an aversive stimulus and thereby increases in frequency.",
          answer: true,
          explain: "Removing an ongoing aversive stimulus strengthens the response, which is exactly what negative reinforcement means."
        },
        {
          type: "fill",
          q: "In escape conditioning, the aversive stimulus is already ____ when the response is made, and the response terminates it.",
          answer: "present",
          accept: ["present", "on", "ongoing", "active"],
          explain: "Escape requires the aversive stimulus to be present so that the response can bring it to an end."
        },
        {
          type: "mcq",
          q: "Which everyday example best illustrates escape behavior?",
          choices: ["Buckling a seatbelt before the car beeps", "Studying to prevent a bad grade", "Putting on sunglasses because the sun is already in your eyes", "Saving money for a future emergency"],
          answer: 2,
          explain: "The glare is already present, so putting on sunglasses terminates an ongoing aversive stimulus, which is escape."
        },
        {
          type: "match",
          q: "Match each term with its role in escape learning.",
          pairs: [["Aversive stimulus", "The unpleasant condition that is already present"], ["Escape response", "The behavior that terminates the aversive stimulus"], ["Negative reinforcement", "The process that strengthens the escape response"]],
          explain: "The response ends the ongoing aversive stimulus, and the resulting relief negatively reinforces that response."
        },
        {
          type: "order",
          q: "Put the events of an escape episode in the correct order.",
          items: ["Aversive stimulus is turned on", "Organism makes the escape response", "Aversive stimulus is terminated", "Response is strengthened by relief"],
          explain: "The aversive event comes first, the response ends it, and the relief that follows reinforces the response."
        },
        {
          type: "truefalse",
          q: "In escape learning, the organism prevents the aversive stimulus from ever occurring.",
          answer: false,
          explain: "That describes avoidance; in escape the aversive stimulus does occur and is then terminated by the response."
        }
      ]
    },
    {
      id: "l98",
      title: "Avoidance Learning",
      intro: "In avoidance learning, a response made in advance prevents an aversive event from occurring at all.",
      questions: [
        {
          type: "mcq",
          q: "How does avoidance learning differ from escape learning?",
          choices: ["The aversive stimulus is always more intense in avoidance", "The response prevents the aversive event rather than terminating an ongoing one", "Avoidance uses positive reinforcement instead of negative", "There is never a warning signal in avoidance"],
          answer: 1,
          explain: "In avoidance the response occurs before the aversive event and stops it from happening; escape only terminates an event already in progress."
        },
        {
          type: "truefalse",
          q: "In signaled avoidance, a warning stimulus typically precedes the aversive event and allows the organism to respond in time to prevent it.",
          answer: true,
          explain: "A warning signal gives the organism an opportunity to make the avoidance response before the aversive event arrives."
        },
        {
          type: "fill",
          q: "A response that stops an aversive event from occurring at all is called an ____ response.",
          answer: "avoidance",
          accept: ["avoidance"],
          explain: "Avoidance responses prevent the aversive event entirely rather than merely ending one already underway."
        },
        {
          type: "match",
          q: "Match each scenario to escape or avoidance.",
          pairs: [["Turning off an alarm that is blaring", "Escape"], ["Leaving early to prevent getting caught in a storm", "Avoidance"], ["Silencing a shock already being delivered", "Escape"], ["Slowing down before a speed camera flashes", "Avoidance"]],
          explain: "Escape ends an ongoing aversive stimulus, while avoidance prevents one that has not yet happened."
        },
        {
          type: "mcq",
          q: "In a typical signaled avoidance procedure, the aversive event is prevented when the organism responds:",
          choices: ["After the aversive stimulus has ended", "Only during the aversive stimulus", "At a random time unrelated to the signal", "During the warning signal, before the aversive stimulus"],
          answer: 3,
          explain: "Responding during the warning signal and before the aversive stimulus is what allows the event to be avoided."
        },
        {
          type: "order",
          q: "Order the events of a successful signaled avoidance trial.",
          items: ["Warning signal is presented", "Organism makes the avoidance response", "Aversive event is prevented"],
          explain: "The signal comes first, the response follows, and because it was timely the aversive event never occurs."
        },
        {
          type: "truefalse",
          q: "Once an avoidance response is well learned, the aversive stimulus is usually experienced on every trial.",
          answer: false,
          explain: "Successful avoidance means the aversive stimulus is not experienced, and that non-occurrence is what makes avoidance puzzling."
        }
      ]
    },
    {
      id: "l99",
      title: "The Avoidance Paradox",
      intro: "The avoidance paradox asks how a response can be reinforced when the aversive event it prevents is never actually experienced.",
      questions: [
        {
          type: "mcq",
          q: "What is the core puzzle of the avoidance paradox?",
          choices: ["Why organisms escape faster than they avoid", "Why warning signals are needed at all", "How the non-occurrence of an aversive event can reinforce a response", "Why punishment weakens behavior"],
          answer: 2,
          explain: "In successful avoidance nothing aversive happens, so it is unclear what consequence could strengthen the response."
        },
        {
          type: "truefalse",
          q: "The avoidance paradox arises because a standard reinforcer must be a stimulus that is present, yet in successful avoidance no aversive stimulus occurs.",
          answer: true,
          explain: "The absence of an event is not an obvious reinforcing stimulus, which is precisely the paradox."
        },
        {
          type: "fill",
          q: "The paradox is that avoidance behavior persists even though the ____ event is never actually experienced on successful trials.",
          answer: "aversive",
          accept: ["aversive", "feared", "shock"],
          explain: "Because the aversive event is prevented, its absence cannot straightforwardly act as a reinforcer."
        },
        {
          type: "mcq",
          q: "Which observation makes the paradox especially striking?",
          choices: ["Avoidance responses can be extremely persistent and resistant to extinction", "Avoidance is only ever seen in humans", "Avoidance requires no learning at all", "Avoidance always fades after a single trial"],
          answer: 0,
          explain: "Well-learned avoidance is remarkably resistant to extinction, which deepens the mystery of what maintains it."
        },
        {
          type: "match",
          q: "Match each puzzle piece with why it is puzzling.",
          pairs: [["Missing reinforcer", "No aversive stimulus occurs on successful trials"], ["Persistence", "Avoidance resists extinction even without the aversive event"], ["Absent consequence", "The good outcome is simply that nothing bad happens"]],
          explain: "Each element highlights how avoidance seems to lack the tangible reinforcing event that operant conditioning normally requires."
        },
        {
          type: "order",
          q: "Order the reasoning that leads to the paradox.",
          items: ["Reinforcement usually requires a consequence to occur", "In successful avoidance the aversive event does not occur", "So there appears to be no consequence to reinforce the response", "Yet the avoidance response continues strongly"],
          explain: "Laying out the steps shows why theorists needed an account such as fear reduction to resolve the apparent contradiction."
        },
        {
          type: "truefalse",
          q: "The avoidance paradox is resolved by simply saying the aversive event itself directly reinforces avoidance.",
          answer: false,
          explain: "The aversive event is absent on successful trials, so it cannot be the direct reinforcer; theories like two-process were proposed instead."
        }
      ]
    },
    {
      id: "l100",
      title: "Two-Process Theory",
      intro: "Mowrer's two-process theory explains avoidance as Pavlovian fear conditioning to a signal plus operant escape from that fear.",
      questions: [
        {
          type: "mcq",
          q: "According to Mowrer's two-process (two-factor) theory, first proposed in 1947, avoidance learning combines:",
          choices: ["Two separate operant reinforcement schedules", "Pavlovian fear conditioning and operant escape from fear", "Positive reinforcement and positive punishment", "Habituation and sensitization"],
          answer: 1,
          explain: "Mowrer proposed a classically conditioned fear response plus an operantly reinforced escape from that fear."
        },
        {
          type: "fill",
          q: "In two-process theory, the warning signal becomes a conditioned stimulus that elicits ____ through Pavlovian conditioning.",
          answer: "fear",
          accept: ["fear", "anxiety"],
          explain: "The signal is paired with the aversive US and comes to elicit conditioned fear."
        },
        {
          type: "truefalse",
          q: "In two-process theory, the avoidance response is reinforced by the reduction of conditioned fear when the organism escapes the warning signal.",
          answer: true,
          explain: "Terminating the fear-eliciting signal reduces fear, and that fear reduction negatively reinforces the response."
        },
        {
          type: "mcq",
          q: "Under two-process theory, what does the organism actually escape when it makes an avoidance response?",
          choices: ["The food reinforcer", "A neutral house light", "The primary aversive shock only", "The conditioned fear elicited by the warning signal"],
          answer: 3,
          explain: "The response terminates the fear-arousing CS, so avoidance is really escape from conditioned fear."
        },
        {
          type: "match",
          q: "Match each part of Mowrer's theory to its description.",
          pairs: [["Process 1 (Pavlovian)", "Signal paired with the aversive event comes to elicit fear"], ["Process 2 (Operant)", "Response that ends the signal is reinforced by fear reduction"], ["Reinforcer of avoidance", "The reduction of conditioned fear"]],
          explain: "The first process makes the signal fearful, the second reinforces the response, and fear reduction is the reinforcer."
        },
        {
          type: "order",
          q: "Order the two-process account of a signaled avoidance trial.",
          items: ["Signal is paired with the aversive event and elicits conditioned fear", "Signal appears and arouses fear", "Organism responds and terminates the signal", "Fear decreases, reinforcing the response"],
          explain: "Pavlovian conditioning makes the signal fearful, and operant escape from that fear reinforces the response."
        },
        {
          type: "truefalse",
          q: "Mowrer's two-process theory claims that only a single learning process, operant conditioning, is involved in avoidance.",
          answer: false,
          explain: "The theory explicitly requires two processes: Pavlovian fear conditioning and operant escape from fear."
        }
      ]
    },
    {
      id: "l101",
      title: "Species-Specific Defense Reactions",
      intro: "Robert Bolles argued that animals avoid danger using innate species-specific defense reactions rather than slowly learned arbitrary responses.",
      questions: [
        {
          type: "mcq",
          q: "Robert Bolles's 1970 concept of species-specific defense reactions (SSDRs) proposes that:",
          choices: ["Animals come prepared with innate defensive behaviors such as fleeing, freezing, and fighting", "Animals must learn every avoidance response from scratch by trial and error", "Avoidance is impossible without a warning signal", "Defensive behavior is entirely reinforced by food"],
          answer: 0,
          explain: "Bolles argued that natural selection provides innate defensive reactions because there is no time to learn them when facing a predator."
        },
        {
          type: "truefalse",
          q: "Bolles argued that avoidance responses are learned quickly when the required response is compatible with the animal's innate species-specific defense reactions.",
          answer: true,
          explain: "Responses that match an existing SSDR, such as fleeing, are acquired rapidly, while responses that conflict with SSDRs are learned slowly or not at all."
        },
        {
          type: "fill",
          q: "Bolles claimed that in the wild an animal has no time to slowly learn defenses, so evolution supplies ____ defensive reactions.",
          answer: "innate",
          accept: ["innate", "instinctive", "inborn", "unlearned"],
          explain: "Because a first predator encounter can be fatal, effective defenses must be built in rather than learned."
        },
        {
          type: "match",
          q: "Match each species-specific defense reaction with an example.",
          pairs: [["Flight", "A rat running from an approaching threat"], ["Freezing", "A rabbit holding perfectly still to avoid detection"], ["Fighting", "A cornered animal attacking a predator"]],
          explain: "Fleeing, freezing, and fighting are the classic innate defensive behaviors Bolles emphasized."
        },
        {
          type: "mcq",
          q: "Why did Bolles think rats learn to run or freeze to avoid shock much faster than they learn to press a lever?",
          choices: ["Lever pressing is physically impossible for rats", "Running produces food while lever pressing does not", "Running and freezing are natural defensive reactions, whereas lever pressing is not", "Rats cannot perceive the warning signal for lever pressing"],
          answer: 2,
          explain: "Avoidance is fast when the response is an existing SSDR; arbitrary responses like lever pressing conflict with defensive tendencies and are learned poorly."
        },
        {
          type: "order",
          q: "Order Bolles's reasoning about avoidance learning.",
          items: ["A predator encounter can be fatal on the very first try", "There is no time to learn a defense by trial and error", "So effective defenses must be innate (SSDRs)", "Avoidance training succeeds when the response matches an SSDR"],
          explain: "Bolles reasoned from the lethality of first encounters to the necessity of innate defenses that shape what can be learned."
        },
        {
          type: "truefalse",
          q: "The SSDR account fully supports two-process theory and raises no challenge to it.",
          answer: false,
          explain: "Bolles's view challenges two-process theory by arguing that innate defensive behavior, not gradual fear-reduction learning, drives much avoidance."
        }
      ]
    },
    {
      id: "l102",
      title: "The Shuttle Box",
      intro: "The shuttle box is a two-compartment apparatus used to study signaled avoidance, in which an animal crosses to the other side to avoid shock.",
      questions: [
        {
          type: "mcq",
          q: "What is a shuttle box primarily used to study?",
          choices: ["Salivation to a bell", "Signaled escape and avoidance learning", "Rate of food reinforcement on interval schedules", "Color discrimination in pigeons"],
          answer: 1,
          explain: "The shuttle box is a standard apparatus for studying signaled escape and avoidance."
        },
        {
          type: "fill",
          q: "In a shuttle box, the animal moves from one ____ to the other to escape or avoid the shock.",
          answer: "compartment",
          accept: ["compartment", "side", "chamber"],
          explain: "The two-compartment design lets the animal shuttle across a barrier to the safe side."
        },
        {
          type: "truefalse",
          q: "In shuttle-box avoidance, a warning signal such as a light or tone usually precedes the shock, giving the animal time to cross to the other side.",
          answer: true,
          explain: "The signal precedes the shock so that the animal can shuttle across in time to avoid it."
        },
        {
          type: "mcq",
          q: "Solomon and Wynne's classic 1953 shuttle-box studies with dogs are famous for showing that avoidance responses were:",
          choices: ["Impossible to establish in dogs", "Quickly forgotten after training", "Extremely persistent and highly resistant to extinction", "Only learned with food rewards"],
          answer: 2,
          explain: "Solomon and Wynne found that traumatic avoidance responses in dogs were remarkably persistent and resisted extinction."
        },
        {
          type: "match",
          q: "Match each shuttle-box element with its function.",
          pairs: [["Warning signal", "Light or tone that precedes the shock"], ["Barrier", "Divider the animal crosses between compartments"], ["Grid floor", "Delivers the aversive shock"]],
          explain: "The signal cues the response, the barrier separates the two sides, and the electrified floor is the source of shock."
        },
        {
          type: "order",
          q: "Order a successful avoidance trial in a shuttle box.",
          items: ["Warning signal (tone or light) comes on", "Animal crosses the barrier to the other compartment", "Shock is avoided on that side"],
          explain: "Responding to the signal by shuttling across before the shock prevents the aversive event."
        },
        {
          type: "truefalse",
          q: "In a shuttle box, escape and avoidance can never be studied with the same apparatus.",
          answer: false,
          explain: "The shuttle box readily supports both: early trials often involve escape, and later trials involve avoidance to the signal."
        }
      ]
    },
    {
      id: "l103",
      title: "Conditioned Suppression",
      intro: "Conditioned suppression, or the conditioned emotional response, measures fear by how much a signal for shock disrupts ongoing operant behavior.",
      questions: [
        {
          type: "mcq",
          q: "The conditioned emotional response (CER), also called conditioned suppression, was first described by:",
          choices: ["Estes and Skinner in 1941", "Pavlov in 1897", "Bolles in 1970", "Thorndike in 1911"],
          answer: 0,
          explain: "Estes and Skinner (1941) introduced the CER as a way to measure conditioned fear or anxiety."
        },
        {
          type: "truefalse",
          q: "In conditioned suppression, fear is measured by the degree to which a shock-paired signal disrupts an ongoing behavior such as lever pressing for food.",
          answer: true,
          explain: "The more a CS suppresses ongoing operant responding, the greater the conditioned fear it elicits."
        },
        {
          type: "fill",
          q: "In the CER procedure, a tone paired with shock causes the rat to ____ its rate of lever pressing while the tone is on.",
          answer: "suppress",
          accept: ["suppress", "reduce", "decrease", "lower"],
          explain: "The fear-eliciting tone disrupts ongoing responding, which is why the effect is called conditioned suppression."
        },
        {
          type: "mcq",
          q: "A suppression ratio near 0 in a CER experiment indicates:",
          choices: ["No fear and normal responding during the CS", "The animal responds faster during the CS", "The CS has no effect on behavior", "Strong suppression, meaning the CS elicits strong fear"],
          answer: 3,
          explain: "A ratio near 0 means responding nearly stops during the CS, reflecting strong conditioned fear; a ratio near 0.5 means little suppression."
        },
        {
          type: "match",
          q: "Match each CER term with its meaning.",
          pairs: [["CS (tone)", "Signal paired with shock that comes to elicit fear"], ["Suppression", "Reduction in ongoing operant responding during the CS"], ["Suppression ratio", "Numerical index of how much the CS disrupts behavior"]],
          explain: "The CS elicits fear, fear disrupts responding, and the suppression ratio quantifies that disruption."
        },
        {
          type: "order",
          q: "Order the steps of a conditioned suppression (CER) experiment.",
          items: ["Train the rat to press a lever for food at a steady rate", "Present a tone (CS) that is paired with shock", "Observe that lever pressing drops during the tone", "Use the amount of suppression to index conditioned fear"],
          explain: "A stable baseline is established first so that suppression during the CS can be measured as an index of fear."
        },
        {
          type: "truefalse",
          q: "In conditioned suppression, an increase in lever pressing during the CS is taken as the measure of fear.",
          answer: false,
          explain: "Fear is shown by a decrease (suppression) in responding during the CS, not an increase."
        }
      ]
    },
    {
      id: "l104",
      title: "Punishment Dynamics",
      intro: "The suppressive power of punishment depends heavily on how immediate, intense, and consistent it is.",
      questions: [
        {
          type: "mcq",
          q: "Which set of factors most strongly determines how effectively punishment suppresses behavior?",
          choices: ["Color, size, and location of the punisher", "Immediacy, intensity, and consistency", "The organism's age, weight, and species only", "Time of day and temperature"],
          answer: 1,
          explain: "Research by Azrin and Holz showed that immediacy, intensity, and consistency are central to punishment's effectiveness."
        },
        {
          type: "truefalse",
          q: "Punishment tends to suppress behavior most effectively when it is delivered immediately after the response rather than after a delay.",
          answer: true,
          explain: "Delayed punishment is much less effective because the link between the response and its consequence weakens over time."
        },
        {
          type: "fill",
          q: "All else equal, more ____ punishment generally produces greater and more durable suppression of the punished behavior.",
          answer: "intense",
          accept: ["intense", "severe", "strong"],
          explain: "Higher intensity produces stronger and longer-lasting suppression, though it can carry unwanted side effects."
        },
        {
          type: "mcq",
          q: "Why is inconsistent punishment (punishing a response only sometimes) generally less effective?",
          choices: ["It makes the punisher more intense", "It delivers the punishment sooner", "The behavior still gets reinforced on unpunished occasions, so it persists", "It removes the need for any reinforcement"],
          answer: 2,
          explain: "When a response is only sometimes punished but otherwise still pays off, it continues to be reinforced and is suppressed far less."
        },
        {
          type: "match",
          q: "Match each punishment factor with its effect.",
          pairs: [["Immediacy", "Punishment right after the response suppresses it more"], ["Intensity", "Stronger punishers produce greater suppression"], ["Consistency", "Punishing every occurrence suppresses more than occasional punishment"]],
          explain: "Immediate, intense, and consistent punishment together yield the strongest suppression."
        },
        {
          type: "order",
          q: "Rank these punishment arrangements from least to most effective at suppressing a response, all else equal.",
          items: ["Delayed, mild, and occasional punishment", "Immediate but mild and occasional punishment", "Immediate, intense, and consistent punishment"],
          explain: "Effectiveness increases as punishment becomes more immediate, more intense, and more consistent."
        },
        {
          type: "truefalse",
          q: "Gradually introducing a punisher at low intensity and slowly increasing it produces the same suppression as introducing full intensity at once.",
          answer: false,
          explain: "Azrin and Holz found that gradually escalating intensity leads to habituation and weak suppression, whereas introducing full intensity immediately suppresses behavior strongly."
        }
      ]
    }
  ]
});
