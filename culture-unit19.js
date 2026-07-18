window.ACADEMY.addUnit("culture", {
  id: "unit-19",
  title: "Linguistic Relativity",
  color: "#e08a1e",
  icon: "🗣️",
  description: "Traces the Sapir-Whorf hypothesis and weighs modern evidence on how the language we speak shapes the way we perceive and think.",
  lessons: [
    {
      id: "l145",
      title: "Sapir-Whorf origins",
      intro: "The Sapir-Whorf tradition splits into a hard claim that language determines thought and a softer claim that language merely shapes it.",
      questions: [
        {
          type: "mcq",
          q: "The Sapir-Whorf hypothesis is named after Edward Sapir and which of his students?",
          choices: ["Benjamin Lee Whorf", "Noam Chomsky", "Leonard Bloomfield", "Franz Boas"],
          answer: 0,
          explain: "Benjamin Lee Whorf studied under Sapir at Yale; later scholars attached both names to the idea."
        },
        {
          type: "truefalse",
          q: "Linguistic determinism claims that language fully fixes and limits the way a person can think.",
          answer: true,
          explain: "Determinism is the hard claim: the categories of your language set the boundaries of possible thought."
        },
        {
          type: "fill",
          q: "Linguistic ____ is the weaker claim that language influences, rather than fully fixes, habitual thought.",
          answer: "relativity",
          accept: ["relativity"],
          explain: "Relativity says language nudges attention and habit; determinism says it dictates thought outright."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Linguistic determinism", "Language sets the limits of possible thought"],
            ["Linguistic relativity", "Language shapes or influences habitual thought"],
            ["Edward Sapir", "Anthropological linguist who taught Whorf"],
            ["Benjamin Lee Whorf", "Fire-insurance engineer who studied Hopi"]
          ],
          explain: "Determinism is the strong pole and relativity the weak pole; Sapir was the mentor and Whorf the popularizer."
        },
        {
          type: "order",
          q: "Order these thinkers from earliest to latest in the lineage of the idea that language shapes thought.",
          items: ["Wilhelm von Humboldt", "Franz Boas", "Edward Sapir", "Benjamin Lee Whorf"],
          explain: "Humboldt (early 1800s) inspired the tradition, Boas taught Sapir, and Sapir taught Whorf."
        },
        {
          type: "mcq",
          q: "Which statement best captures the difference between determinism and relativity?",
          choices: [
            "Determinism says thought shapes language; relativity says the reverse",
            "Both claim language has no effect on thought at all",
            "Determinism says language limits thought; relativity says language influences thought",
            "Relativity is the strong version and determinism the weak version"
          ],
          answer: 2,
          explain: "Determinism is the strong 'language limits thought' claim; relativity is the milder 'language influences thought' claim."
        },
        {
          type: "truefalse",
          q: "Neither Sapir nor Whorf ever jointly published a single work titled 'the hypothesis'; the label was coined by later scholars.",
          answer: true,
          explain: "The paired name was assembled after their deaths; they never co-authored a formal 'Sapir-Whorf hypothesis.'"
        }
      ]
    },
    {
      id: "l146",
      title: "Strong versus weak versions",
      intro: "The strong version says language determines what we can think, while the weak version only says it tilts how we tend to think.",
      questions: [
        {
          type: "mcq",
          q: "Fill the pattern: the strong version says language ____ thought, while the weak version says it ____ thought.",
          choices: ["influences; determines", "determines; influences", "ignores; limits", "translates; blocks"],
          answer: 1,
          explain: "Strong = determines (the hard claim); weak = influences (the mild claim)."
        },
        {
          type: "truefalse",
          q: "Most contemporary researchers accept the strong deterministic version as well supported.",
          answer: false,
          explain: "The strong version is largely rejected today; the weak, influence version is what careful evidence supports."
        },
        {
          type: "fill",
          q: "The ____ version holds that a thought is impossible without the words to express it.",
          answer: "strong",
          accept: ["strong"],
          explain: "The strong (deterministic) version treats vocabulary as a hard limit on possible thought."
        },
        {
          type: "match",
          q: "Match each version or claim to its description.",
          pairs: [
            ["Strong version", "Language imprisons thought within its categories"],
            ["Weak version", "Language nudges attention, memory, and habit"],
            ["Status of the strong claim", "Largely discredited"],
            ["Status of the weak claim", "Supported by careful experiments"]
          ],
          explain: "The strong claim overreaches and is discredited; the weak claim survives controlled testing."
        },
        {
          type: "mcq",
          q: "Why is the strong version hard to defend?",
          choices: [
            "People can grasp concepts their language lacks a single word for",
            "No human language actually has grammar",
            "Everyone on Earth speaks one language",
            "Thought can never be measured in any way"
          ],
          answer: 0,
          explain: "We routinely understand ideas we have no single word for, which the strong version should forbid."
        },
        {
          type: "truefalse",
          q: "The weak version is often called 'linguistic relativity,' while the strong version is called 'linguistic determinism.'",
          answer: true,
          explain: "These are the standard labels: relativity for the mild claim, determinism for the hard one."
        },
        {
          type: "fill",
          q: "Because bilinguals switch languages yet keep the same core ideas, this counts against strong linguistic ____.",
          answer: "determinism",
          accept: ["determinism"],
          explain: "If a language dictated thought, bilinguals could not carry ideas intact across their two languages."
        }
      ]
    },
    {
      id: "l147",
      title: "Color terms and perception",
      intro: "Berlin and Kay found that basic color words emerge across languages in a strikingly predictable order.",
      questions: [
        {
          type: "mcq",
          q: "In what year did Brent Berlin and Paul Kay publish 'Basic Color Terms'?",
          choices: ["1949", "1969", "1989", "2001"],
          answer: 1,
          explain: "Their landmark book appeared in 1969."
        },
        {
          type: "truefalse",
          q: "Berlin and Kay found that basic color terms appear across languages in a largely predictable order.",
          answer: true,
          explain: "They described a universal-looking hierarchy in which certain color terms reliably precede others."
        },
        {
          type: "order",
          q: "Order these basic color terms as they emerge in Berlin and Kay's hierarchy, earliest first.",
          items: ["black and white", "red", "green and yellow", "blue", "brown"],
          explain: "The sequence runs dark/light first, then red, then green and yellow, then blue, then brown."
        },
        {
          type: "fill",
          q: "A language with only two basic color terms distinguishes ____ and white, roughly dark and light.",
          answer: "black",
          accept: ["black"],
          explain: "Stage I languages split the spectrum only into dark (black) and light (white)."
        },
        {
          type: "mcq",
          q: "What is the maximum number of basic color categories Berlin and Kay identified?",
          choices: ["7", "9", "11", "15"],
          answer: 2,
          explain: "They proposed a ceiling of eleven basic color terms."
        },
        {
          type: "match",
          q: "Match each item to its meaning.",
          pairs: [
            ["Basic color term", "Short, common, non-compound color word"],
            ["Berlin and Kay (1969)", "Proposed a universal color hierarchy"],
            ["Stage I language", "Has only terms for dark and light"],
            ["Implication", "Suggests universals, challenging strong relativity"]
          ],
          explain: "The hierarchy points to shared human patterns, which pushes back against strong relativity."
        },
        {
          type: "truefalse",
          q: "Berlin and Kay's findings were widely read as strong support for linguistic determinism.",
          answer: false,
          explain: "By showing cross-language universals, their work cut against strong relativity rather than supporting it."
        }
      ]
    },
    {
      id: "l148",
      title: "Russian blues study",
      intro: "Winawer and colleagues showed that a language's two words for blue can speed how fast its speakers tell those blues apart.",
      questions: [
        {
          type: "mcq",
          q: "What does Russian have for blue that English lacks?",
          choices: [
            "Two separate basic terms for light and dark blue",
            "No word for blue at all",
            "A single word covering both blue and green",
            "Ten interchangeable words for blue"
          ],
          answer: 0,
          explain: "Russian obligatorily distinguishes goluboy (light blue) from siniy (dark blue)."
        },
        {
          type: "fill",
          q: "In Russian, ____ names light blue while siniy names dark blue.",
          answer: "goluboy",
          accept: ["goluboy", "goluboy (light blue)"],
          explain: "Goluboy is the light-blue term; siniy is the dark-blue term."
        },
        {
          type: "truefalse",
          q: "Winawer and colleagues published the Russian blues study in 2007.",
          answer: true,
          explain: "The study appeared in PNAS in 2007."
        },
        {
          type: "mcq",
          q: "What did Russian speakers do faster than English speakers?",
          choices: [
            "Name colors while blindfolded",
            "Discriminate blues that crossed the goluboy/siniy boundary",
            "Forget the names of colors",
            "Read English text aloud"
          ],
          answer: 1,
          explain: "Russian speakers were quicker to tell apart blues that fell on opposite sides of their lexical boundary."
        },
        {
          type: "truefalse",
          q: "English speakers showed the same across-boundary speed advantage as Russian speakers.",
          answer: false,
          explain: "English lacks the obligatory light/dark blue split, so its speakers showed no such categorical advantage."
        },
        {
          type: "order",
          q: "Order the logic of the Russian blues finding.",
          items: [
            "Russian obligatorily marks light versus dark blue",
            "Speakers form two distinct blue categories",
            "Cross-boundary color pairs are told apart faster",
            "Language can speed low-level perceptual discrimination"
          ],
          explain: "An obligatory lexical split creates categories that sharpen and speed perceptual discrimination."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["goluboy", "Light blue in Russian"],
            ["siniy", "Dark blue in Russian"],
            ["Winawer et al. (2007)", "The Russian blues discrimination study"],
            ["Categorical perception", "Language sharpening a perceptual boundary"]
          ],
          explain: "The two color words map onto faster discrimination, an example of categorical perception."
        }
      ]
    },
    {
      id: "l149",
      title: "Grammatical gender effects",
      intro: "Boroditsky reported that a noun's grammatical gender can color the traits speakers spontaneously attribute to the object.",
      questions: [
        {
          type: "mcq",
          q: "Who is most associated with the bridge-and-key grammatical gender study?",
          choices: ["Steven Pinker", "Lera Boroditsky", "Daniel Everett", "Paul Kay"],
          answer: 1,
          explain: "Lera Boroditsky is the researcher best known for this line of work."
        },
        {
          type: "truefalse",
          q: "In German, 'bridge' (die Bruecke) is grammatically feminine, while in Spanish 'bridge' (el puente) is masculine.",
          answer: true,
          explain: "The two languages assign opposite grammatical genders to the word for bridge."
        },
        {
          type: "fill",
          q: "German speakers tended to call bridges beautiful and elegant, adjectives that pattern as ____.",
          answer: "feminine",
          accept: ["feminine"],
          explain: "The feminine grammatical gender of Bruecke lined up with stereotypically feminine descriptors."
        },
        {
          type: "mcq",
          q: "How did Spanish speakers tend to describe bridges, where 'el puente' is masculine?",
          choices: ["Elegant and slender", "Strong and sturdy", "Silent and cold", "Tiny and lovely"],
          answer: 1,
          explain: "The masculine gender lined up with stereotypically masculine descriptors like strong and sturdy."
        },
        {
          type: "match",
          q: "Match each gendered noun to the traits speakers tended to use.",
          pairs: [
            ["German 'key' (der Schluessel, masc.)", "Hard, heavy, jagged, metal"],
            ["Spanish 'llave' (key, fem.)", "Lovely, little, intricate, shiny"],
            ["German 'bridge' (fem.)", "Beautiful, elegant, slender"],
            ["Spanish 'bridge' (masc.)", "Strong, sturdy, towering"]
          ],
          explain: "Key and bridge flip gender between the languages, and the volunteered traits flip along with them."
        },
        {
          type: "truefalse",
          q: "Boroditsky's gender findings are usually cited as proof of the strong deterministic version.",
          answer: false,
          explain: "They illustrate the weak, influence version: grammar biases description without dictating thought."
        },
        {
          type: "order",
          q: "Order the reasoning behind the grammatical gender effect.",
          items: [
            "A noun carries a grammatical gender",
            "Speakers associate the noun with gendered traits",
            "Their descriptions take on those traits",
            "Grammar subtly biases how the object is conceived"
          ],
          explain: "Gender assignment feeds gendered associations, which surface in how people describe the object."
        }
      ]
    },
    {
      id: "l150",
      title: "Counterfactuals and grammar",
      intro: "Bloom's claim that Chinese grammar hampers counterfactual reasoning became a famous but heavily disputed test of relativity.",
      questions: [
        {
          type: "mcq",
          q: "Alfred Bloom claimed Chinese speakers were worse at reasoning about what?",
          choices: [
            "Counterfactual, hypothetical situations",
            "Simple addition",
            "Their own names",
            "Ordinary present-tense events"
          ],
          answer: 0,
          explain: "Bloom argued that Chinese speakers struggled with 'what if it had been otherwise' counterfactuals."
        },
        {
          type: "truefalse",
          q: "Bloom published 'The Linguistic Shaping of Thought' in 1981.",
          answer: true,
          explain: "His book laying out the counterfactual claim appeared in 1981."
        },
        {
          type: "fill",
          q: "Bloom argued Chinese lacks a distinct grammatical marker for the ____, unlike English 'if ... had ... would have.'",
          answer: "counterfactual",
          accept: ["counterfactual", "counterfactuals", "subjunctive"],
          explain: "He tied weaker performance to the absence of a dedicated counterfactual construction."
        },
        {
          type: "mcq",
          q: "What happened when researchers such as Terry Au retested Bloom's claim in 1983?",
          choices: [
            "The effect grew much larger",
            "Improved translations made the difference vanish",
            "Chinese speakers refused to participate",
            "English speakers suddenly did far worse"
          ],
          answer: 1,
          explain: "Au found Bloom's Chinese materials were awkwardly worded; fixing them erased the supposed gap."
        },
        {
          type: "truefalse",
          q: "Bloom's original claim is now regarded as a firmly established fact.",
          answer: false,
          explain: "It is disputed; critics traced the effect largely to flawed translations rather than to grammar."
        },
        {
          type: "match",
          q: "Match each item to its role in the debate.",
          pairs: [
            ["Alfred Bloom (1981)", "Claimed grammar limits counterfactual reasoning"],
            ["Counterfactual", "A 'what if it had been otherwise' hypothetical"],
            ["Terry Au (1983)", "Critic who blamed awkward translations"],
            ["Current view", "Disputed, weak or artifactual effect"]
          ],
          explain: "Bloom proposed the effect; Au challenged it; the consensus now treats it as unproven."
        },
        {
          type: "order",
          q: "Order how the counterfactual debate unfolded.",
          items: [
            "Bloom reports Chinese speakers struggle with counterfactuals",
            "He attributes it to missing grammar",
            "Critics find flawed Chinese translations",
            "Corrected materials erase the gap"
          ],
          explain: "The initial finding was reinterpreted once the test materials were repaired."
        }
      ]
    },
    {
      id: "l151",
      title: "Number words and cognition",
      intro: "The Piraha, whose language has few or no exact number words, offer a striking test of whether counting depends on language.",
      questions: [
        {
          type: "mcq",
          q: "The Piraha are an Indigenous people of which region?",
          choices: ["Highland Peru", "Northern Siberia", "The Brazilian Amazon", "The Australian outback"],
          answer: 2,
          explain: "The Piraha live along the Maici River in the Brazilian Amazon."
        },
        {
          type: "truefalse",
          q: "The Piraha language has been described as anumeric, lacking words for exact quantities.",
          answer: true,
          explain: "Reports describe only approximate terms like 'few' and 'many,' with no fixed count words."
        },
        {
          type: "fill",
          q: "Daniel ____ is the linguist best known for documenting the Piraha language and culture.",
          answer: "everett",
          accept: ["everett"],
          explain: "Daniel Everett lived among the Piraha and reported their lack of exact number words."
        },
        {
          type: "mcq",
          q: "In Peter Gordon's 2004 study in Science, what did Piraha speakers struggle to do?",
          choices: [
            "Match exact quantities beyond about three",
            "Recognize common colors",
            "Walk through the forest",
            "Produce any speech at all"
          ],
          answer: 0,
          explain: "Gordon found that matching tasks broke down once sets grew larger than roughly three items."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Anumeric", "Without exact number words"],
            ["Daniel Everett", "Documented Piraha grammar and culture"],
            ["Peter Gordon (2004)", "Tested Piraha exact-quantity matching"],
            ["Interpretation", "Cited for weak linguistic relativity"]
          ],
          explain: "The case is offered as evidence that lacking number words limits exact numerical performance."
        },
        {
          type: "truefalse",
          q: "Gordon reported that Piraha participants matched large exact quantities as accurately as number-using adults.",
          answer: false,
          explain: "Their accuracy fell off sharply for larger sets, unlike speakers with a full counting vocabulary."
        },
        {
          type: "order",
          q: "Order the reasoning drawn from the Piraha case.",
          items: [
            "Piraha lacks words for exact numbers",
            "Speakers rely on approximate 'few/many' terms",
            "They falter when matching large exact sets",
            "Language may constrain exact numerical cognition"
          ],
          explain: "Missing count words is linked to difficulty with exact large quantities, suggesting a real constraint."
        }
      ]
    },
    {
      id: "l152",
      title: "Whorf's original Hopi claim",
      intro: "Whorf's claim that Hopi has no concept of time became a textbook example, until Malotki's fieldwork undercut it.",
      questions: [
        {
          type: "mcq",
          q: "What did Whorf famously claim about the Hopi language?",
          choices: [
            "It had thousands of distinct color words",
            "It had no way to express time as European languages do",
            "It was essentially identical to English",
            "It lacked all nouns"
          ],
          answer: 1,
          explain: "Whorf argued Hopi lacked the linear, countable notion of time built into European grammar."
        },
        {
          type: "truefalse",
          q: "Whorf described Hopi as a 'timeless' language in his writings.",
          answer: true,
          explain: "He characterized Hopi as encoding no objective, flowing time in the way English does."
        },
        {
          type: "fill",
          q: "Ekkehart ____ wrote 'Hopi Time' (1983), a detailed refutation of Whorf's claim.",
          answer: "malotki",
          accept: ["malotki"],
          explain: "Ekkehart Malotki's 1983 study systematically challenged Whorf's timeless-Hopi thesis."
        },
        {
          type: "mcq",
          q: "What did Malotki's research document in Hopi?",
          choices: [
            "No temporal words of any kind",
            "That Hopi was actually a European language",
            "Numerous time expressions, units, and tense-like forms",
            "That Whorf had never studied Hopi at all"
          ],
          answer: 2,
          explain: "Malotki recorded extensive Hopi vocabulary and grammar for time, contradicting Whorf."
        },
        {
          type: "truefalse",
          q: "Malotki's findings strengthened Whorf's original Hopi time claim.",
          answer: false,
          explain: "They undercut it, showing Hopi has rich resources for talking about time."
        },
        {
          type: "match",
          q: "Match each item to its role in the Hopi time story.",
          pairs: [
            ["Whorf's claim", "Hopi encodes no linear, countable time"],
            ["'Hopi Time' (1983)", "Malotki's detailed rebuttal"],
            ["Malotki's evidence", "Hopi words for days, seasons, and tenses"],
            ["Lesson", "Famous relativity examples need careful checking"]
          ],
          explain: "Whorf's striking claim did not survive Malotki's close look at how Hopi actually talks about time."
        },
        {
          type: "order",
          q: "Order the historical arc of the Hopi time claim.",
          items: [
            "Whorf claims Hopi lacks a concept of time",
            "The claim becomes a textbook example",
            "Malotki gathers extensive Hopi temporal data",
            "The strong Hopi-time claim is discredited"
          ],
          explain: "A bold claim spread widely before careful fieldwork overturned it."
        }
      ]
    }
  ]
});
