window.ACADEMY.addUnit("sciskills", {
  id: "unit-1",
  title: "How Science Works",
  color: "#9c36b5",
  icon: "\u{1F52C}",
  description: "The habits and tools every science shares — testable questions, fair experiments, careful measurement, and knowing the difference between a theory and a guess.",
  lessons: [
    {
      id: "l1",
      title: "What science is (and isn't)",
      intro: "Science is a way of explaining the natural world with ideas that can be tested against evidence.",
      questions: [
        {
          type: "mcq",
          q: "Which question can science test?",
          choices: [
            "Does fertilizer make bean plants grow taller?",
            "Is jazz better music than country?",
            "Should people be kind to one another?",
            "What is the meaning of life?"
          ],
          answer: 0,
          explain: "Science works on questions that can be answered by observation or experiment. You can measure bean plants; you can't measure 'better music' or 'should'."
        },
        {
          type: "truefalse",
          q: "A scientific explanation must be possible to test, so that evidence could in principle show it's wrong.",
          answer: true,
          explain: "This is called being falsifiable. An idea that no possible observation could ever contradict isn't a scientific claim."
        },
        {
          type: "fill",
          q: "Information gathered using the senses or instruments is called an ____.",
          answer: "observation",
          accept: ["observation", "observations"],
          explain: "Observations are the raw evidence of science, such as 'the liquid turned blue' or 'the temperature read 22 °C'."
        },
        {
          type: "match",
          q: "Match each statement to its type.",
          pairs: [
            ["The leaf is 6 cm long.", "Quantitative observation"],
            ["The leaf is bright green.", "Qualitative observation"],
            ["The leaf must be getting plenty of light.", "Inference"]
          ],
          explain: "Quantitative observations use numbers, qualitative ones describe qualities, and an inference is an interpretation that goes beyond what was directly observed."
        },
        {
          type: "truefalse",
          q: "Once something is accepted in science, it can never change.",
          answer: false,
          explain: "Science is self-correcting. Well-supported ideas are rarely overturned, but they are always open to revision when strong new evidence appears."
        },
        {
          type: "mcq",
          q: "Which of these is the best example of pseudoscience?",
          choices: [
            "A drug tested in a large, randomized, double-blind trial",
            "A climate model checked against temperature records",
            "A bracelet sold to 'balance your energy fields' with no testable claims",
            "A fossil dated by measuring radioactive decay"
          ],
          answer: 2,
          explain: "Pseudoscience borrows scientific-sounding words but makes claims that can't be tested or that dodge testing."
        },
        {
          type: "order",
          q: "Order the branches by what they mainly study, from smallest scale to largest.",
          items: ["Chemistry (atoms and molecules)", "Biology (living things)", "Earth science (the planet)", "Astronomy (the universe)"],
          explain: "The branches overlap heavily, but this is a useful rough map of the science track ahead."
        }
      ]
    },
    {
      id: "l2",
      title: "Questions, hypotheses and predictions",
      intro: "A good investigation starts with a sharp question and a testable, possible answer.",
      questions: [
        {
          type: "mcq",
          q: "What is a hypothesis?",
          choices: [
            "A proven fact",
            "A testable, possible explanation for an observation",
            "The final result of an experiment",
            "A random guess with no basis"
          ],
          answer: 1,
          explain: "A hypothesis is an informed, testable explanation. It is based on what you already know, and the experiment checks it."
        },
        {
          type: "fill",
          q: "A prediction is often written in the form: 'If ____, then …'.",
          answer: "if",
          accept: ["if"],
          explain: "'If I add fertilizer, then the plants will grow taller.' The if-then form makes the test and the expected result clear."
        },
        {
          type: "truefalse",
          q: "If an experiment's results don't support the hypothesis, the experiment was a failure.",
          answer: false,
          explain: "A rejected hypothesis is still useful knowledge. It rules out one explanation and points toward a better one."
        },
        {
          type: "order",
          q: "Put a typical investigation in order.",
          items: ["Make an observation and ask a question", "Form a hypothesis", "Test it with an experiment", "Analyze the data and draw a conclusion"],
          explain: "Real science loops back and forth, but this is the basic cycle. A conclusion often raises the next question."
        },
        {
          type: "mcq",
          q: "Which hypothesis is most testable?",
          choices: [
            "Plants like music.",
            "Plants are happier in the sun.",
            "Bean plants watered with salt water will grow less than those watered with tap water.",
            "Some plants are just naturally better."
          ],
          answer: 2,
          explain: "It names what changes (salt in the water), what to measure (growth), and what to compare. The others use vague words like 'like' or 'happier'."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Question", "What you want to find out"],
            ["Hypothesis", "A testable possible explanation"],
            ["Prediction", "The specific result you expect if the hypothesis is right"]
          ],
          explain: "The question frames the investigation, the hypothesis offers an explanation, and the prediction says what you should see in the test."
        },
        {
          type: "truefalse",
          q: "A single experiment that supports a hypothesis proves it true for certain.",
          answer: false,
          explain: "Evidence supports a hypothesis; it doesn't prove it beyond all doubt. Confidence grows as results are repeated by different people in different ways."
        }
      ]
    },
    {
      id: "l3",
      title: "Variables and controlled experiments",
      intro: "A fair test changes one thing on purpose, measures one thing, and keeps everything else the same.",
      questions: [
        {
          type: "match",
          q: "In an experiment testing how fertilizer amount affects plant height, match each variable.",
          pairs: [
            ["Amount of fertilizer", "Independent variable"],
            ["Plant height", "Dependent variable"],
            ["Type of soil, water, light", "Controlled variables"]
          ],
          explain: "The independent variable is what you change, the dependent variable is what you measure, and controlled variables are kept the same."
        },
        {
          type: "mcq",
          q: "Why should an experiment change only one independent variable at a time?",
          choices: [
            "To save money",
            "Because scientists only own one of each tool",
            "It's a tradition with no real reason",
            "So any difference in results can be linked to that one change"
          ],
          answer: 3,
          explain: "If you change light AND water at once and plants grow taller, you can't tell which change caused it."
        },
        {
          type: "fill",
          q: "The group that does NOT receive the treatment, used for comparison, is the ____ group.",
          answer: "control",
          accept: ["control"],
          explain: "The control group shows what happens without the change, so you can see the treatment's real effect."
        },
        {
          type: "truefalse",
          q: "Testing a new fertilizer on just one plant is enough to draw a reliable conclusion.",
          answer: false,
          explain: "One plant could be unusually strong or weak by chance. A larger sample size and repeated trials make results more reliable."
        },
        {
          type: "mcq",
          q: "In a drug trial, neither the patients nor the doctors know who gets the real drug. What is this called?",
          choices: ["Single-blind", "Open-label", "Double-blind", "Observational"],
          answer: 2,
          explain: "Double-blinding stops expectations — from patients or researchers — from affecting the results."
        },
        {
          type: "truefalse",
          q: "A placebo is a fake treatment, like a sugar pill, given to the control group.",
          answer: true,
          explain: "People sometimes feel better just from believing they were treated (the placebo effect). Giving the control group a placebo cancels that out."
        },
        {
          type: "order",
          q: "Order the steps to set up a controlled experiment.",
          items: ["Choose one independent variable to change", "Decide how to measure the dependent variable", "Keep all other variables the same", "Run repeated trials and record the data"],
          explain: "Deciding what you change and what you measure comes first; then you lock everything else down and collect enough data."
        }
      ]
    },
    {
      id: "l4",
      title: "SI units and metric conversions",
      intro: "Scientists everywhere use the same base-10 measurement system, so results can be shared and checked.",
      questions: [
        {
          type: "match",
          q: "Match each quantity to its SI base unit.",
          pairs: [
            ["Length", "Meter (m)"],
            ["Mass", "Kilogram (kg)"],
            ["Time", "Second (s)"]
          ],
          explain: "SI (the International System of Units) has seven base units. These three, plus the kelvin for temperature, show up constantly in this track."
        },
        {
          type: "mcq",
          q: "What does the prefix 'kilo-' mean?",
          choices: ["One thousandth", "One hundred", "One thousand", "One million"],
          answer: 2,
          explain: "Kilo- means 1,000: 1 kilometer = 1,000 meters and 1 kilogram = 1,000 grams."
        },
        {
          type: "fill",
          q: "2.5 meters = ____ centimeters.",
          answer: "250",
          accept: ["250", "250 cm"],
          explain: "There are 100 centimeters in a meter, so multiply by 100: 2.5 × 100 = 250."
        },
        {
          type: "order",
          q: "Order these prefixes from smallest to largest.",
          items: ["milli- (m)", "centi- (c)", "(base unit)", "kilo- (k)"],
          explain: "milli = 0.001, centi = 0.01, the base unit = 1, kilo = 1,000."
        },
        {
          type: "mcq",
          q: "How many milliliters are in 3 liters?",
          choices: ["30", "300", "0.003", "3,000"],
          answer: 3,
          explain: "1 liter = 1,000 milliliters, so 3 liters = 3,000 mL."
        },
        {
          type: "truefalse",
          q: "Mass and weight are the same thing.",
          answer: false,
          explain: "Mass is the amount of matter (kilograms) and doesn't change with location. Weight is the force of gravity on that mass (newtons), so you weigh less on the Moon but have the same mass."
        },
        {
          type: "truefalse",
          q: "To convert from a larger unit to a smaller unit, such as km to m, you multiply.",
          answer: true,
          explain: "Smaller units mean more of them: 4 km = 4 × 1,000 = 4,000 m."
        }
      ]
    },
    {
      id: "l5",
      title: "Accuracy, precision and significant figures",
      intro: "Every measurement has some uncertainty. Good scientists say how much.",
      questions: [
        {
          type: "match",
          q: "Four archers each shoot several arrows. Match each pattern to its description.",
          pairs: [
            ["Tight cluster on the bullseye", "Accurate and precise"],
            ["Tight cluster far from the bullseye", "Precise but not accurate"],
            ["Scattered widely around the bullseye", "Accurate on average but not precise"]
          ],
          explain: "Accuracy is closeness to the true value. Precision is closeness of repeated measurements to each other."
        },
        {
          type: "mcq",
          q: "A scale always reads 0.5 g too high. What kind of error is this?",
          choices: ["Systematic error", "Random error", "No error", "Human error only"],
          answer: 0,
          explain: "A systematic error pushes every reading the same way. It hurts accuracy, and repeating the measurement won't average it out. Calibrating the scale fixes it."
        },
        {
          type: "fill",
          q: "How many significant figures are in 0.00340? ____",
          answer: "3",
          accept: ["3", "three"],
          explain: "Leading zeros are just placeholders, so they don't count. The 3, the 4, and the trailing zero after the decimal point do count: 3 significant figures."
        },
        {
          type: "truefalse",
          q: "Trailing zeros after a decimal point, like the last 0 in 2.50, are significant.",
          answer: true,
          explain: "Writing 2.50 instead of 2.5 says you measured to the hundredths place. That zero carries real information."
        },
        {
          type: "mcq",
          q: "Which measurement is the most precise?",
          choices: ["12 cm", "12.3 cm", "12.31 cm", "10 cm"],
          answer: 2,
          explain: "12.31 cm is reported to the hundredths place, the smallest division of any choice. More decimal places means a finer measurement."
        },
        {
          type: "truefalse",
          q: "If a calculator shows 3.3333333, you should report every digit to be as accurate as possible.",
          answer: false,
          explain: "An answer can't be more precise than the measurements behind it. Extra digits are false precision; round to match your significant figures."
        },
        {
          type: "order",
          q: "Order the steps to read a liquid's volume in a graduated cylinder.",
          items: ["Set the cylinder on a flat surface", "Bring your eyes level with the liquid", "Read the bottom of the curved surface (meniscus)", "Estimate one digit beyond the smallest marking"],
          explain: "Reading at eye level from the bottom of the meniscus avoids parallax error, and the estimated last digit is still a significant figure."
        }
      ]
    },
    {
      id: "l6",
      title: "Data tables and graphs",
      intro: "Organizing data so patterns become visible, and choosing the right graph to show them.",
      questions: [
        {
          type: "mcq",
          q: "On a line graph, where does the independent variable usually go?",
          choices: ["The y-axis (vertical)", "The x-axis (horizontal)", "The title", "It isn't graphed"],
          answer: 1,
          explain: "Independent goes on the x-axis and dependent on the y-axis, so you read the graph as 'as x changes, y responds'."
        },
        {
          type: "match",
          q: "Match each kind of data to the best graph.",
          pairs: [
            ["Temperature every hour for a day", "Line graph"],
            ["Number of each species counted in a field", "Bar graph"],
            ["Percent of Earth's atmosphere made of each gas", "Pie (circle) graph"]
          ],
          explain: "Line graphs show change across a continuous variable, bar graphs compare categories, and pie graphs show parts of a whole."
        },
        {
          type: "truefalse",
          q: "A graph should have a title, labeled axes, and units.",
          answer: true,
          explain: "Without labels and units, '40' could mean 40 seconds, 40 grams or 40 °C. A reader should understand the graph without asking you."
        },
        {
          type: "fill",
          q: "When the dependent variable goes up as the independent variable goes up, the relationship is called a ____ correlation.",
          answer: "positive",
          accept: ["positive", "direct", "positive or direct"],
          explain: "A positive (direct) correlation slopes upward. If one goes up while the other goes down, it's a negative (inverse) correlation."
        },
        {
          type: "mcq",
          q: "Ice cream sales and sunburns both rise in summer. What is the best conclusion?",
          choices: [
            "Ice cream causes sunburns",
            "Sunburns cause people to buy ice cream",
            "A third factor, hot sunny weather, likely drives both",
            "The data must be wrong"
          ],
          answer: 2,
          explain: "Correlation is not causation. A hidden third variable often explains why two things move together."
        },
        {
          type: "truefalse",
          q: "It's fine to start a bar graph's y-axis well above zero without saying so; readers won't be misled.",
          answer: false,
          explain: "Cutting off the bottom of the axis makes small differences look huge. It's one of the most common ways graphs mislead."
        },
        {
          type: "order",
          q: "Order the steps for making a line graph from a data table.",
          items: ["Decide which variable goes on each axis", "Choose an even scale for each axis", "Plot each data point", "Draw a best-fit line or curve and add a title"],
          explain: "Choosing axes and scale before plotting keeps the graph readable and honest."
        }
      ]
    },
    {
      id: "l7",
      title: "Laws, theories and models",
      intro: "In science, 'theory' is one of the strongest words there is — not a hunch.",
      questions: [
        {
          type: "mcq",
          q: "What is a scientific theory?",
          choices: [
            "A well-tested explanation that ties together many observations",
            "A guess that hasn't been tested",
            "A law that hasn't been proven yet",
            "An opinion held by most scientists"
          ],
          answer: 0,
          explain: "Theories like cell theory, atomic theory and the theory of evolution are supported by huge bodies of evidence and explain why things happen."
        },
        {
          type: "truefalse",
          q: "With enough evidence, a theory 'graduates' into a law.",
          answer: false,
          explain: "Laws and theories do different jobs. A law describes what happens, often as an equation; a theory explains why. Neither turns into the other."
        },
        {
          type: "match",
          q: "Match each example to its type.",
          pairs: [
            ["Mass is neither created nor destroyed in a chemical reaction.", "Law"],
            ["All living things are made of cells, which come from other cells.", "Theory"],
            ["A globe", "Model"]
          ],
          explain: "The conservation of mass describes a pattern (law), cell theory explains how life is organized (theory), and a globe is a simplified representation (model)."
        },
        {
          type: "fill",
          q: "A simplified representation of something too big, small or complex to study directly is a ____.",
          answer: "model",
          accept: ["model", "scientific model"],
          explain: "Models can be physical (a DNA kit), mathematical (an equation) or computer-based (a climate model)."
        },
        {
          type: "truefalse",
          q: "A model can be useful even though it isn't perfectly accurate.",
          answer: true,
          explain: "The Bohr model of the atom is outdated, yet it still explains a lot of chemistry. Every model leaves things out; the question is whether it's useful for its purpose."
        },
        {
          type: "order",
          q: "Order how our model of the atom developed over time.",
          items: ["Dalton: solid indivisible spheres", "Thomson: electrons in a positive 'pudding'", "Rutherford: a tiny dense nucleus", "Bohr: electrons in energy levels"],
          explain: "Each model was revised when new experiments, like Rutherford's gold foil, didn't fit the old one. You'll see this story again in Chemistry."
        },
        {
          type: "mcq",
          q: "When someone says evolution is 'just a theory', what are they misunderstanding?",
          choices: [
            "Nothing; theories are just guesses",
            "That 'theory' in science means a well-supported explanation, not a guess",
            "That evolution is actually a law",
            "That theories only apply to physics"
          ],
          answer: 1,
          explain: "In everyday speech 'theory' means a hunch; in science it is the highest level of explanation. Gravity is described by both a law and a theory."
        }
      ]
    },
    {
      id: "l8",
      title: "Claims, evidence, reasoning — and lab safety",
      intro: "How to argue from data like a scientist, and how to stay safe while getting it.",
      questions: [
        {
          type: "order",
          q: "Order the parts of a scientific explanation (CER).",
          items: ["Claim: a statement that answers the question", "Evidence: data that supports the claim", "Reasoning: the science that connects the evidence to the claim"],
          explain: "Claim–Evidence–Reasoning is the standard way to write a lab conclusion. The reasoning is the part students most often skip."
        },
        {
          type: "match",
          q: "A student tests whether salt water slows plant growth. Match each sentence to its CER part.",
          pairs: [
            ["Salt water reduced plant growth.", "Claim"],
            ["Salt-water plants averaged 4 cm; tap-water plants averaged 11 cm.", "Evidence"],
            ["Salt pulls water out of root cells by osmosis, so cells can't grow.", "Reasoning"]
          ],
          explain: "The claim answers the question, the evidence is the measured data, and the reasoning uses a scientific idea to explain why the data support the claim."
        },
        {
          type: "fill",
          q: "Before scientific work is published in a journal, other experts check it in a process called ____ review.",
          answer: "peer",
          accept: ["peer"],
          explain: "Peer review doesn't guarantee a result is right, but it catches many errors. Replication by other labs is the stronger test."
        },
        {
          type: "truefalse",
          q: "Other scientists getting the same result when they repeat an experiment makes the result more trustworthy.",
          answer: true,
          explain: "Replication is one of science's main error-catching tools. A finding nobody can reproduce gets less trust over time."
        },
        {
          type: "mcq",
          q: "A chemical splashes into your eye during a lab. What should you do first?",
          choices: [
            "Rub your eye to get it out",
            "Finish the lab, then tell the teacher",
            "Go to the eyewash station and rinse for at least 15 minutes, and alert the teacher",
            "Cover the eye with a bandage"
          ],
          answer: 2,
          explain: "Flushing with lots of water right away limits the damage. Always tell the teacher, who can get medical help."
        },
        {
          type: "mcq",
          q: "Which is the safe way to smell a chemical in the lab?",
          choices: [
            "Put your nose right over the container and breathe in",
            "Taste a tiny amount instead",
            "Heat it first so it smells stronger",
            "Waft the vapor toward your nose with your hand"
          ],
          answer: 3,
          explain: "Wafting brings a small, diluted sample of the vapor toward you. Never taste anything in a lab."
        },
        {
          type: "truefalse",
          q: "Goggles only need to be worn when you're the one doing the pouring or heating.",
          answer: false,
          explain: "A spill or splash from someone else's station can reach you too. Goggles stay on whenever anyone in the room is working with chemicals, heat or glass."
        }
      ]
    }
  ]
});
