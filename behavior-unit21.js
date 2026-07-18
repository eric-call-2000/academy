window.ACADEMY.addUnit("behaviorism", {
  id: "unit-21",
  title: "Verbal Behavior and the Chomsky Debate",
  color: "#14a58f",
  icon: "🗣️",
  description: "Explores Skinner's operant account of language and Chomsky's landmark critique that helped end behaviorism's reign over psychology.",
  lessons: [
    {
      id: "l161",
      title: "Skinner's \"Verbal Behavior\"",
      intro: "Skinner argued that language is learned operant behavior shaped by reinforcement from a verbal community.",
      questions: [
        {
          type: "mcq",
          q: "In what year did B.F. Skinner publish his book 'Verbal Behavior'?",
          choices: ["1938", "1948", "1957", "1971"],
          answer: 2,
          explain: "Skinner published 'Verbal Behavior' in 1957, laying out his behavioral account of language."
        },
        {
          type: "truefalse",
          q: "Skinner treated verbal behavior as a special kind of operant behavior shaped by consequences.",
          answer: true,
          explain: "Skinner's central move was to analyze language with the same operant principles used for other behavior: it is emitted and shaped by reinforcement."
        },
        {
          type: "fill",
          q: "In Skinner's account, verbal behavior is reinforced through the mediation of another person, called the ____.",
          answer: "listener",
          accept: ["listener", "audience", "mediator"],
          explain: "Unlike behavior that acts directly on the physical world, verbal behavior is reinforced only through the mediation of a listener."
        },
        {
          type: "mcq",
          q: "What did Skinner call the group whose reinforcement practices shape an individual's speech?",
          choices: ["The verbal community", "The reference group", "The speech cohort", "The language module"],
          answer: 0,
          explain: "Skinner argued that the 'verbal community' establishes and maintains verbal behavior by reinforcing certain utterances."
        },
        {
          type: "truefalse",
          q: "Skinner classified verbal operants mainly by the words' dictionary meanings.",
          answer: false,
          explain: "Skinner classified verbal operants by their functional relationships (their controlling variables and consequences), not by traditional meaning or grammar."
        },
        {
          type: "match",
          q: "Match each idea from 'Verbal Behavior' to its description.",
          pairs: [
            ["Verbal operant", "A functional unit of language defined by its controlling variables"],
            ["Verbal community", "The people who reinforce a speaker's utterances"],
            ["Functional analysis", "Explaining speech by its antecedents and consequences"]
          ],
          explain: "Skinner's framework replaced meaning-based accounts with a functional analysis of verbal operants maintained by a verbal community."
        },
        {
          type: "order",
          q: "Order these steps in Skinner's operant account of a spoken response.",
          items: ["A controlling variable is present", "The speaker emits a verbal response", "A listener mediates reinforcement", "The response is strengthened for the future"],
          explain: "For Skinner, verbal behavior follows the operant sequence: an antecedent condition, an emitted response, listener-mediated reinforcement, and increased future probability."
        }
      ]
    },
    {
      id: "l162",
      title: "The Mand",
      intro: "The mand is a verbal operant, such as a request or command, reinforced by a specific consequence it specifies.",
      questions: [
        {
          type: "mcq",
          q: "In Skinner's taxonomy, a 'mand' is best described as a:",
          choices: ["Label for an object in view", "Request or demand reinforced by a specific consequence", "Repetition of what was just heard", "Response cued by another person's words"],
          answer: 1,
          explain: "A mand (from 'demand'/'command') is under the control of deprivation or aversive stimulation and is reinforced by the specific consequence it specifies."
        },
        {
          type: "fill",
          q: "Saying 'Water!' when thirsty and being handed water is an example of a verbal operant called the ____.",
          answer: "mand",
          accept: ["mand"],
          explain: "The mand specifies its own reinforcer; 'Water!' is reinforced by receiving water and is controlled by a state of deprivation."
        },
        {
          type: "truefalse",
          q: "A mand tends to be under the control of motivating conditions such as deprivation or discomfort.",
          answer: true,
          explain: "Mands are controlled by motivating operations like deprivation (hunger, thirst) or aversive stimulation, which make the specified reinforcer effective."
        },
        {
          type: "mcq",
          q: "Which everyday utterance is clearest example of a mand?",
          choices: ["That is a red car.", "Pass the salt, please.", "Cat rhymes with hat.", "The store is on Main Street."],
          answer: 1,
          explain: "'Pass the salt' requests a specific consequence (getting the salt) and is controlled by the speaker's current need, making it a mand."
        },
        {
          type: "truefalse",
          q: "A key feature of the mand is that it specifies its own reinforcer.",
          answer: true,
          explain: "Unlike other verbal operants, the mand tends to specify the very reinforcer that will strengthen it (asking for water yields water)."
        },
        {
          type: "match",
          q: "Match each mand to the consequence that reinforces it.",
          pairs: [
            ["'Help!'", "Assistance from another person"],
            ["'Stop!'", "Removal of an ongoing aversive action"],
            ["'More, please'", "Additional amount of a desired item"]
          ],
          explain: "Each mand specifies its own reinforcer, whether obtaining help, removing something aversive, or getting more of a desired item."
        },
        {
          type: "order",
          q: "Order the events in a mand controlled by thirst.",
          items: ["Water deprivation occurs", "Speaker says 'Water, please'", "Listener provides water", "Manding is reinforced"],
          explain: "The mand begins with a motivating condition (deprivation), leads to the request, and is reinforced when the listener delivers the specified item."
        }
      ]
    },
    {
      id: "l163",
      title: "The Tact",
      intro: "The tact is a verbal operant that labels or comments on objects and events under the stimulus control of the environment.",
      questions: [
        {
          type: "mcq",
          q: "A 'tact' in Skinner's system is a verbal operant that:",
          choices: ["Requests a needed item", "Names or describes something present in the environment", "Copies a heard sound", "Is prompted by an earlier verbal statement"],
          answer: 1,
          explain: "A tact (from 'contact') is evoked by an object, event, or property and lets the speaker make 'contact' with the environment by labeling it."
        },
        {
          type: "fill",
          q: "Saying 'dog' upon seeing a dog is a verbal operant under stimulus control called the ____.",
          answer: "tact",
          accept: ["tact"],
          explain: "The tact is controlled by a nonverbal stimulus (the dog) and is typically reinforced by generalized social reinforcement rather than a specific item."
        },
        {
          type: "truefalse",
          q: "The tact is primarily reinforced by generalized reinforcers such as social approval or attention.",
          answer: true,
          explain: "Tacts are usually maintained by generalized conditioned reinforcement (praise, agreement, attention) rather than by a specific consequence the way a mand is."
        },
        {
          type: "mcq",
          q: "Which utterance is the clearest example of a tact?",
          choices: ["'Give me the ball.'", "'That's an airplane!'", "'Ball' repeated right after hearing 'ball'", "'Fine, thanks' after 'How are you?'"],
          answer: 1,
          explain: "'That's an airplane!' names an object in the environment and is controlled by that stimulus, which defines the tact."
        },
        {
          type: "truefalse",
          q: "The main difference between a mand and a tact is that only the mand is under the control of a nonverbal environmental stimulus.",
          answer: false,
          explain: "It is the reverse: the tact is under the control of a nonverbal stimulus, while the mand is controlled by motivating conditions and specifies its reinforcer."
        },
        {
          type: "match",
          q: "Match each verbal operant to its controlling variable.",
          pairs: [
            ["Mand", "Deprivation or aversive stimulation"],
            ["Tact", "A nonverbal object, event, or property"],
            ["Reinforcer for the tact", "Generalized social reinforcement"]
          ],
          explain: "The mand is controlled by motivation and specifies its reinforcer; the tact is controlled by the environment and earns generalized social reinforcement."
        },
        {
          type: "order",
          q: "Order the steps by which a child's tact is shaped.",
          items: ["An object appears in view", "The child emits a label like 'ball'", "A caregiver praises the label", "Tacting that object is strengthened"],
          explain: "Tacts develop when an environmental stimulus evokes a label that the verbal community reinforces with praise or attention."
        }
      ]
    },
    {
      id: "l164",
      title: "Echoic and Intraverbal",
      intro: "The echoic imitates a heard verbal stimulus, while the intraverbal is a verbal response cued by other verbal behavior.",
      questions: [
        {
          type: "mcq",
          q: "An 'echoic' verbal operant occurs when a speaker:",
          choices: ["Requests something needed", "Names an object in view", "Repeats a verbal stimulus with point-to-point correspondence", "Answers a question with related but different words"],
          answer: 2,
          explain: "The echoic reproduces a heard verbal stimulus; the response has point-to-point correspondence and formal similarity with what was heard."
        },
        {
          type: "fill",
          q: "Answering 'four' when someone says 'two plus two equals' is an example of an ____ verbal operant.",
          answer: "intraverbal",
          accept: ["intraverbal"],
          explain: "An intraverbal is a verbal response controlled by a prior verbal stimulus but without point-to-point correspondence (the words differ from the prompt)."
        },
        {
          type: "truefalse",
          q: "In an echoic, the response has point-to-point correspondence with the verbal stimulus that evokes it.",
          answer: true,
          explain: "The echoic is defined by point-to-point correspondence and formal similarity: repeating 'cat' after hearing 'cat'."
        },
        {
          type: "mcq",
          q: "Which is the clearest example of an intraverbal?",
          choices: ["Repeating 'apple' right after hearing 'apple'", "Saying 'Paris' when asked 'What's the capital of France?'", "Saying 'cookie' while pointing to want one", "Naming a cup when shown a cup"],
          answer: 1,
          explain: "Answering 'Paris' to a spoken question is an intraverbal: prior verbal behavior evokes a related verbal response with no formal similarity."
        },
        {
          type: "truefalse",
          q: "Reciting the alphabet or saying 'thanks' after 'how are you' involves intraverbal chains.",
          answer: true,
          explain: "Sequences like the alphabet, counting, and conversational fillers are intraverbals, where each verbal response is cued by the preceding verbal behavior."
        },
        {
          type: "match",
          q: "Match each verbal operant to its defining relationship.",
          pairs: [
            ["Echoic", "Repeats a heard word with matching form"],
            ["Intraverbal", "Verbal cue evokes a different verbal response"],
            ["Point-to-point correspondence", "Feature that defines the echoic"]
          ],
          explain: "The echoic copies the form of what was heard, while the intraverbal is cued by verbal behavior yet differs in form from the prompt."
        },
        {
          type: "order",
          q: "Order the events in an echoic response during language teaching.",
          items: ["Teacher says 'ball'", "Child hears the verbal stimulus", "Child repeats 'ball'", "Teacher reinforces the imitation"],
          explain: "Echoic training presents a verbal model, the learner imitates it with matching form, and the correct imitation is reinforced."
        }
      ]
    },
    {
      id: "l165",
      title: "Chomsky's 1959 Review",
      intro: "Noam Chomsky's 1959 review of 'Verbal Behavior' argued that operant terms cannot explain human language.",
      questions: [
        {
          type: "mcq",
          q: "In what year did Noam Chomsky publish his influential review of Skinner's 'Verbal Behavior'?",
          choices: ["1957", "1959", "1965", "1971"],
          answer: 1,
          explain: "Chomsky's review appeared in 1959 in the journal 'Language', two years after Skinner's book."
        },
        {
          type: "fill",
          q: "Chomsky's 1959 critique was a ____ of Skinner's book 'Verbal Behavior'.",
          answer: "review",
          accept: ["review", "book review", "critique"],
          explain: "The piece was a formal book review of 'Verbal Behavior' published in the linguistics journal 'Language'."
        },
        {
          type: "truefalse",
          q: "Chomsky argued that terms like 'stimulus,' 'response,' and 'reinforcement' lose their scientific meaning when stretched to explain language.",
          answer: true,
          explain: "Chomsky claimed the operant terms were precise only in the lab; applied to language they became vague metaphors that explained nothing."
        },
        {
          type: "mcq",
          q: "Which was a central charge in Chomsky's review?",
          choices: ["Skinner used too much mathematics", "Behavioral terms were used only as loose metaphors outside the lab", "Skinner ignored animal research entirely", "Skinner denied that children learn any words"],
          answer: 1,
          explain: "Chomsky argued that when 'stimulus control' and 'reinforcement' are applied to speech, they are drained of the meaning they had in animal experiments."
        },
        {
          type: "truefalse",
          q: "Chomsky's review is widely regarded as a turning point that weakened behaviorism's dominance in psychology.",
          answer: true,
          explain: "The review is often cited as a landmark of the 'cognitive revolution' and a major blow to behaviorism's grip on the study of mind and language."
        },
        {
          type: "match",
          q: "Match each figure to their role in the debate.",
          pairs: [
            ["B.F. Skinner", "Wrote 'Verbal Behavior' (1957)"],
            ["Noam Chomsky", "Wrote the 1959 critical review"],
            ["Journal 'Language'", "Where the 1959 review was published"]
          ],
          explain: "Skinner authored the 1957 book; Chomsky's 1959 review in the journal 'Language' launched the critique."
        },
        {
          type: "order",
          q: "Order these events in the Skinner-Chomsky debate.",
          items: ["Skinner publishes 'Verbal Behavior' (1957)", "Chomsky publishes his review (1959)", "The cognitive revolution gains momentum", "Behaviorism's dominance declines"],
          explain: "Skinner's 1957 book was answered by Chomsky's 1959 review, which helped fuel the cognitive revolution and the decline of strict behaviorism."
        }
      ]
    },
    {
      id: "l166",
      title: "The Poverty of the Stimulus",
      intro: "The poverty of the stimulus argument holds that the language children hear is too limited to explain what they come to know.",
      questions: [
        {
          type: "mcq",
          q: "The 'poverty of the stimulus' argument claims that:",
          choices: ["Poor children learn language more slowly", "The linguistic input to children is too impoverished to account for the grammar they acquire", "Stimuli must be strong to be effective reinforcers", "Language cannot be studied scientifically"],
          answer: 1,
          explain: "The argument holds that the speech children hear is limited and imperfect, yet they acquire rich, rule-governed grammar, so learning alone cannot explain it."
        },
        {
          type: "fill",
          q: "Chomsky argued that children produce and understand novel sentences they have never heard, showing language is too ____ to come from conditioning alone.",
          answer: "rich",
          accept: ["rich", "complex", "creative", "generative"],
          explain: "The creativity of language (endless novel sentences) is central to the argument that mere imitation and reinforcement cannot produce grammatical knowledge."
        },
        {
          type: "truefalse",
          q: "The poverty of the stimulus supports the view that some grammatical knowledge is innate rather than fully learned from experience.",
          answer: true,
          explain: "Because the input underdetermines the grammar acquired, Chomsky concluded that children must bring innate linguistic structure to the task."
        },
        {
          type: "truefalse",
          q: "According to the argument, children learn to speak grammatically only by directly imitating every sentence they later produce.",
          answer: false,
          explain: "The argument stresses that speakers produce endless novel sentences never heard before, which direct imitation cannot explain."
        },
        {
          type: "mcq",
          q: "Which observation is used to support the poverty of the stimulus?",
          choices: ["Children rarely make any grammatical errors", "Children acquire complex grammar quickly despite incomplete and error-filled input", "Adults always correct every childhood error", "Language input is unlimited and perfect"],
          answer: 1,
          explain: "Despite hearing fragmentary, error-laden speech and little explicit correction, children rapidly master complex grammar, suggesting innate support."
        },
        {
          type: "match",
          q: "Match each claim to the side it supports.",
          pairs: [
            ["Input is limited and imperfect", "Poverty of the stimulus"],
            ["Children say novel, rule-governed sentences", "Knowledge exceeds the input"],
            ["Reinforcement fully explains grammar", "Skinner's learning view"]
          ],
          explain: "The first two claims support the poverty argument for innate structure; the third represents the behaviorist position Chomsky rejected."
        },
        {
          type: "order",
          q: "Order the reasoning of the poverty of the stimulus argument.",
          items: ["Children receive limited, imperfect input", "They acquire complex grammar anyway", "The input underdetermines that grammar", "Some linguistic knowledge must be innate"],
          explain: "The argument moves from impoverished input to rich acquired grammar, concluding that innate knowledge must bridge the gap."
        }
      ]
    },
    {
      id: "l167",
      title: "Universal Grammar",
      intro: "Universal Grammar is Chomsky's proposal that humans are born with an innate language faculty underlying all languages.",
      questions: [
        {
          type: "mcq",
          q: "Chomsky's 'Universal Grammar' refers to:",
          choices: ["A single language everyone speaks", "An innate set of principles shared by all human languages", "A dictionary of universal words", "The grammar of Latin as a model language"],
          answer: 1,
          explain: "Universal Grammar is the innate structure or set of principles Chomsky argued underlies every human language, guiding acquisition."
        },
        {
          type: "fill",
          q: "Chomsky proposed that humans possess an innate mental ____ specialized for acquiring language.",
          answer: "faculty",
          accept: ["faculty", "module", "capacity"],
          explain: "The innate 'language faculty' (sometimes described via a Language Acquisition Device) equips children to acquire grammar from limited input."
        },
        {
          type: "truefalse",
          q: "Universal Grammar contrasts with the behaviorist view that language is learned entirely through reinforcement and imitation.",
          answer: true,
          explain: "Where behaviorism sees language as fully learned, Universal Grammar posits innate structure, making the two accounts sharply opposed."
        },
        {
          type: "mcq",
          q: "What term did Chomsky use for a hypothesized innate mechanism enabling children to learn language?",
          choices: ["Reinforcement schedule", "Language Acquisition Device (LAD)", "Verbal community", "Operant chamber"],
          answer: 1,
          explain: "Chomsky's Language Acquisition Device (LAD) is the proposed innate mechanism that lets children extract grammar from the speech they hear."
        },
        {
          type: "truefalse",
          q: "Under Universal Grammar, the specific words and sounds of English are claimed to be innate and identical in every human.",
          answer: false,
          explain: "Universal Grammar posits innate abstract principles common to all languages, not the particular vocabulary or sounds of any one language, which are learned."
        },
        {
          type: "match",
          q: "Match each account of language to its core claim.",
          pairs: [
            ["Skinner", "Language is learned operant behavior"],
            ["Chomsky", "An innate Universal Grammar guides acquisition"],
            ["Language Acquisition Device", "Innate mechanism for extracting grammar"]
          ],
          explain: "Skinner emphasized learning; Chomsky emphasized innate structure realized through a Language Acquisition Device."
        },
        {
          type: "order",
          q: "Order the steps of Chomsky's nativist account of language learning.",
          items: ["A child is born with a language faculty", "The child hears limited speech input", "Innate principles constrain the possible grammars", "The child acquires the local language's grammar"],
          explain: "For Chomsky, innate Universal Grammar constrains learning so that limited input is enough to converge on the surrounding language's grammar."
        }
      ]
    },
    {
      id: "l168",
      title: "Legacy in Autism Intervention",
      intro: "Skinner's verbal operants live on in Verbal Behavior therapy, a modern branch of Applied Behavior Analysis for autism.",
      questions: [
        {
          type: "mcq",
          q: "How does Skinner's 'Verbal Behavior' remain influential today?",
          choices: ["As the basis of Universal Grammar theory", "As the foundation of Verbal Behavior therapy within Applied Behavior Analysis", "As a rejected idea with no practical use", "As a method for teaching animals to read"],
          answer: 1,
          explain: "Though criticized by linguists, Skinner's verbal operants became the basis of Verbal Behavior (VB) approaches within Applied Behavior Analysis for teaching communication."
        },
        {
          type: "fill",
          q: "Verbal Behavior therapy is a branch of Applied Behavior Analysis, often abbreviated ____.",
          answer: "aba",
          accept: ["aba", "a.b.a."],
          explain: "Applied Behavior Analysis (ABA) applies operant principles, including Skinner's verbal operants, to teach skills to individuals with autism."
        },
        {
          type: "truefalse",
          q: "The Verbal Behavior approach explicitly teaches operants such as the mand, tact, echoic, and intraverbal.",
          answer: true,
          explain: "VB programs target Skinner's specific verbal operants, often beginning with manding, to build functional communication skill by skill."
        },
        {
          type: "mcq",
          q: "In many Verbal Behavior programs, which operant is often taught first because it directly benefits the learner?",
          choices: ["The intraverbal", "The tact", "The mand", "The autoclitic"],
          answer: 2,
          explain: "Manding (requesting) is frequently taught first because it gives learners a way to get what they want, providing strong, immediate reinforcement."
        },
        {
          type: "truefalse",
          q: "Chomsky's critique caused Skinner's verbal operant categories to be completely abandoned in all applied fields.",
          answer: false,
          explain: "Despite the linguistic critique, Skinner's operant categories are widely and successfully used in applied behavior analysis and autism intervention today."
        },
        {
          type: "match",
          q: "Match each verbal operant to a skill it targets in Verbal Behavior therapy.",
          pairs: [
            ["Mand", "Requesting a desired item"],
            ["Tact", "Labeling objects and events"],
            ["Intraverbal", "Answering questions and conversing"]
          ],
          explain: "VB therapy builds communication by explicitly teaching manding, tacting, and intraverbal responding as distinct skills."
        },
        {
          type: "order",
          q: "Order the historical arc of Skinner's verbal behavior ideas.",
          items: ["Skinner theorizes verbal operants (1957)", "Chomsky critiques the theory (1959)", "Linguists move toward nativism", "Applied behavior analysts adopt verbal operants for autism therapy"],
          explain: "Skinner's 1957 theory was critiqued by Chomsky in 1959; linguistics turned nativist, yet applied behavior analysts kept the verbal operants for practical teaching."
        }
      ]
    }
  ]
});
