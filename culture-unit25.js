window.ACADEMY.addUnit("culture", {
  id: "unit-25",
  title: "Applications and Frontiers",
  color: "#e08a1e",
  icon: "🌍",
  description: "Applies cultural psychology to clinical care, diagnosis, business, education, health, and change, then surveys the field's critiques and future.",
  lessons: [
    {
      id: "l193",
      title: "Cultural clinical psychology",
      intro: "Distress is shaped by culture, giving rise to culture-bound syndromes and shared idioms for expressing suffering.",
      questions: [
        {
          type: "mcq",
          q: "Which best defines a culture-bound syndrome?",
          choices: [
            "A disorder with identical symptoms in every society",
            "A recurrent pattern of troubling experience recognized as an illness largely within one culture",
            "Any mental illness listed in the DSM-5",
            "A physical disease with no psychological component"
          ],
          answer: 1,
          explain: "Culture-bound syndromes are locally recognized patterns of distress that make sense mainly within a particular cultural context."
        },
        {
          type: "fill",
          q: "____ de nervios, common among some Latino groups, involves shouting, crying, trembling, and a sense of losing control.",
          answer: "ataque",
          accept: ["ataque"],
          explain: "Ataque de nervios is a classic idiom of distress in Caribbean and Latino communities, often triggered by acute stress or grief."
        },
        {
          type: "match",
          q: "Match each culture-related syndrome to its description.",
          pairs: [
            ["Taijin kyofusho", "Japanese fear of offending others through one's body or actions"],
            ["Susto", "Latin American illness attributed to fright or soul loss"],
            ["Koro", "Anxiety that the genitals are retracting into the body"],
            ["Amok", "Sudden outburst of violent behavior, described in Malay culture"]
          ],
          explain: "Each of these patterns is understood as an illness primarily within the culture where it is named and recognized."
        },
        {
          type: "truefalse",
          q: "DSM-5 largely replaced the older term 'culture-bound syndrome' with 'cultural concepts of distress.'",
          answer: true,
          explain: "DSM-5 (2013) shifted to 'cultural concepts of distress' to capture syndromes, idioms, and explanations without implying rigid, bounded disorders."
        },
        {
          type: "mcq",
          q: "An 'idiom of distress' is best described as:",
          choices: [
            "A culturally shared way of expressing and communicating suffering",
            "A medication used only in one country",
            "A slang word with no emotional meaning",
            "A diagnosis unique to Western psychiatry"
          ],
          answer: 0,
          explain: "Idioms of distress are common local expressions, like 'nervios,' through which people convey emotional and physical suffering."
        },
        {
          type: "truefalse",
          q: "'Thinking too much' (for example kufungisisa in Shona) is an idiom of distress reported across many cultures.",
          answer: true,
          explain: "Reports of harmful 'thinking too much' appear worldwide and are a well-documented idiom of distress in cross-cultural mental health research."
        },
        {
          type: "mcq",
          q: "DSM-5 groups cultural concepts of distress into three types. Which is NOT one of them?",
          choices: [
            "Cultural syndromes",
            "Cultural idioms of distress",
            "Cultural explanations or perceived causes",
            "Culture-free biomarkers"
          ],
          answer: 3,
          explain: "The three DSM-5 categories are syndromes, idioms of distress, and explanations/perceived causes; there is no 'culture-free biomarker' category."
        }
      ]
    },
    {
      id: "l194",
      title: "Culture and diagnosis",
      intro: "The DSM-5 Cultural Formulation Interview gives clinicians a structured way to understand how culture shapes a patient's problem.",
      questions: [
        {
          type: "mcq",
          q: "The Cultural Formulation Interview (CFI) in DSM-5 is:",
          choices: [
            "A set of questions helping clinicians assess how culture shapes a patient's problem",
            "A blood test for cultural background",
            "A list of banned diagnoses",
            "A personality quiz for therapists"
          ],
          answer: 0,
          explain: "The CFI is a structured interview that centers the patient's own cultural understanding of their difficulties."
        },
        {
          type: "fill",
          q: "The core DSM-5 Cultural Formulation Interview consists of ____ questions.",
          answer: "16",
          accept: ["16", "sixteen"],
          explain: "The standard CFI has 16 questions organized into four domains, with supplementary modules available for deeper assessment."
        },
        {
          type: "truefalse",
          q: "The CFI appeared in DSM-5 (2013), while the earlier Outline for Cultural Formulation was introduced in DSM-IV (1994).",
          answer: true,
          explain: "DSM-IV first added the Outline for Cultural Formulation; DSM-5 built on it with the practical, question-based CFI."
        },
        {
          type: "match",
          q: "Match each CFI domain to what it explores.",
          pairs: [
            ["Cultural definition of the problem", "How the person names and describes their difficulty"],
            ["Perceptions of cause and context", "What the person believes is causing the problem"],
            ["Self-coping and past help seeking", "What the person has already done to cope"],
            ["Current help seeking", "What kind of help the person now wants"]
          ],
          explain: "The CFI's four domains move from how the problem is defined through its causes, past coping, and current help preferences."
        },
        {
          type: "mcq",
          q: "A key goal of the CFI is to:",
          choices: [
            "Diagnose faster by ignoring the patient's views",
            "Reduce misdiagnosis by centering the patient's own cultural understanding",
            "Replace all clinical judgment with checklists",
            "Assign patients to cultural stereotypes"
          ],
          answer: 1,
          explain: "By eliciting the patient's own explanations, the CFI aims to improve accuracy, rapport, and treatment planning."
        },
        {
          type: "truefalse",
          q: "The CFI is designed to rely on the clinician's assumptions about a patient's culture rather than the patient's own explanations.",
          answer: false,
          explain: "The CFI deliberately elicits the individual's own views to avoid stereotyping people based on assumed group membership."
        },
        {
          type: "order",
          q: "Order the CFI's flow from the patient's perspective, from defining the problem to seeking help.",
          items: [
            "Define the problem",
            "Explore perceived causes and context",
            "Review past coping and help seeking",
            "Identify current help preferences"
          ],
          explain: "The interview progresses from how the patient frames the problem, through causes and prior coping, to what help they now want."
        }
      ]
    },
    {
      id: "l195",
      title: "Intercultural competence",
      intro: "Milton Bennett's developmental model traces growth from ethnocentric to ethnorelative ways of experiencing cultural difference.",
      questions: [
        {
          type: "mcq",
          q: "Who developed the Developmental Model of Intercultural Sensitivity (DMIS)?",
          choices: [
            "Geert Hofstede",
            "Milton Bennett",
            "Richard Nisbett",
            "Harry Triandis"
          ],
          answer: 1,
          explain: "Milton Bennett proposed the DMIS in the 1980s and 1990s to describe how people experience cultural difference over time."
        },
        {
          type: "order",
          q: "Order the first five stages of Bennett's model from most ethnocentric to more ethnorelative.",
          items: [
            "Denial",
            "Defense",
            "Minimization",
            "Acceptance",
            "Adaptation"
          ],
          explain: "The DMIS progresses Denial, Defense, Minimization (ethnocentric), then Acceptance, Adaptation, and finally Integration (ethnorelative)."
        },
        {
          type: "truefalse",
          q: "Bennett's model describes movement from ethnocentric stages toward ethnorelative stages.",
          answer: true,
          explain: "Development runs from experiencing one's own culture as central (ethnocentric) to experiencing cultures as relative to one another (ethnorelative)."
        },
        {
          type: "match",
          q: "Match each DMIS stage to its description.",
          pairs: [
            ["Denial", "Not recognizing that cultural difference exists"],
            ["Defense", "Seeing one's own culture as superior and others as threatening"],
            ["Minimization", "Assuming everyone is basically the same underneath"],
            ["Adaptation", "Shifting one's behavior and perspective to fit another culture"]
          ],
          explain: "Each stage reflects a distinct way of experiencing difference, from ignoring it to actively shifting frames of reference."
        },
        {
          type: "mcq",
          q: "In the Minimization stage, a person tends to:",
          choices: [
            "Deny that other cultures exist",
            "Emphasize human similarities and downplay real cultural differences",
            "Fully integrate multiple cultural frames",
            "Attack other cultures as inferior"
          ],
          answer: 1,
          explain: "Minimization is the last ethnocentric stage: differences are acknowledged but glossed over by stressing universal similarity."
        },
        {
          type: "truefalse",
          q: "In Bennett's model, Integration means attacking and rejecting other cultures.",
          answer: false,
          explain: "Integration is the most ethnorelative stage, where a person can move fluidly among cultural worldviews, not reject them."
        },
        {
          type: "fill",
          q: "Bennett's model separates ethnocentric stages from ____ stages, where cultural difference is experienced as valuable.",
          answer: "ethnorelative",
          accept: ["ethnorelative"],
          explain: "Ethnorelative stages (Acceptance, Adaptation, Integration) treat cultures as different yet equally valid rather than ranked."
        }
      ]
    },
    {
      id: "l196",
      title: "Culture in business and negotiation",
      intro: "Working across borders means adjusting to culture shock, mastering new environments, and managing diverse global teams.",
      questions: [
        {
          type: "mcq",
          q: "The U-curve model of cultural adjustment describes:",
          choices: [
            "A steady rise in happiness abroad",
            "An initial high, then a dip during culture shock, then recovery",
            "A constant decline in mood over time",
            "No emotional change at all"
          ],
          answer: 1,
          explain: "The U-curve, associated with Lysgaard (1955), traces a honeymoon high, a slump during culture shock, then gradual adjustment."
        },
        {
          type: "fill",
          q: "Anthropologist Kalervo Oberg coined the term 'culture ____' in 1960 to describe the anxiety of losing familiar cues.",
          answer: "shock",
          accept: ["shock"],
          explain: "Oberg described culture shock as the disorientation that follows the loss of familiar social signs and symbols."
        },
        {
          type: "order",
          q: "Order the classic phases of expatriate adjustment.",
          items: [
            "Honeymoon",
            "Culture shock",
            "Adjustment",
            "Mastery"
          ],
          explain: "Expatriates often move from initial excitement, through disorientation, to gradual adjustment and eventual mastery of the new setting."
        },
        {
          type: "truefalse",
          q: "Black, Mendenhall, and Oddou (1991) proposed that expatriate adjustment includes work, interaction, and general adjustment.",
          answer: true,
          explain: "Their influential framework breaks in-country adjustment into three facets: work, interaction with locals, and general daily living."
        },
        {
          type: "match",
          q: "Match each adjustment concept to its meaning.",
          pairs: [
            ["Work adjustment", "Comfort with new job tasks and expectations"],
            ["Interaction adjustment", "Comfort socializing with host-country nationals"],
            ["General adjustment", "Comfort with daily living such as food and housing"],
            ["Repatriation", "Readjusting after returning to one's home country"]
          ],
          explain: "Expatriate research distinguishes several facets of adjustment abroad, plus the often-overlooked challenge of returning home."
        },
        {
          type: "mcq",
          q: "In diverse global teams, a 'faultline' refers to:",
          choices: [
            "A hypothetical dividing line that splits a team into subgroups along aligned attributes",
            "A software bug in video conferencing",
            "A legal contract clause",
            "A type of currency risk"
          ],
          answer: 0,
          explain: "Faultlines (Lau and Murnighan, 1998) form when multiple attributes align, splitting a team into subgroups that can reduce cohesion."
        },
        {
          type: "truefalse",
          q: "Reverse culture shock when returning to one's home country is generally impossible.",
          answer: false,
          explain: "Reverse (or re-entry) culture shock is common, as returnees find home changed or themselves changed by time abroad."
        }
      ]
    },
    {
      id: "l197",
      title: "Culture and education",
      intro: "Cultural beliefs about effort versus innate ability shape teaching styles and help explain cross-national achievement gaps.",
      questions: [
        {
          type: "mcq",
          q: "Compared with many U.S. parents and teachers, East Asian educational traditions tend to attribute achievement more to:",
          choices: [
            "Innate, fixed ability",
            "Effort and persistence",
            "Luck",
            "Physical height"
          ],
          answer: 1,
          explain: "Research finds East Asian educational cultures emphasize effort and improvability, while U.S. beliefs lean more on innate talent."
        },
        {
          type: "fill",
          q: "Harold Stevenson and James Stigler documented these differences in their 1992 book 'The Learning ____.'",
          answer: "gap",
          accept: ["gap"],
          explain: "'The Learning Gap' compared U.S., Japanese, and Chinese schooling and highlighted differing beliefs about effort and achievement."
        },
        {
          type: "truefalse",
          q: "Carol Dweck's distinction between a 'growth mindset' and a 'fixed mindset' concerns whether ability is seen as malleable.",
          answer: true,
          explain: "A growth mindset treats ability as improvable through effort, while a fixed mindset treats it as an unchangeable trait."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Incremental theory", "Belief that intelligence can grow with effort"],
            ["Entity theory", "Belief that intelligence is fixed and unchangeable"],
            ["Achievement gap", "Persistent differences in performance between groups"],
            ["TIMSS", "International comparison of math and science achievement"]
          ],
          explain: "Beliefs about the nature of intelligence, and large-scale comparisons like TIMSS, both inform cross-cultural work on achievement."
        },
        {
          type: "mcq",
          q: "Believing intelligence is malleable tends to lead students to:",
          choices: [
            "Give up quickly after failure",
            "Avoid all challenges",
            "Persist and treat effort as worthwhile",
            "Ignore feedback"
          ],
          answer: 2,
          explain: "When ability seems improvable, setbacks read as signals to work harder rather than as proof of fixed limits."
        },
        {
          type: "truefalse",
          q: "Cross-national achievement gaps are fully explained by genetics, with no cultural or instructional influence.",
          answer: false,
          explain: "Teaching methods, effort beliefs, time on task, and other cultural factors strongly shape achievement differences across nations."
        },
        {
          type: "fill",
          q: "In many East Asian classrooms, publicly working through a hard problem, sometimes called productive ____, is valued as part of learning.",
          answer: "struggle",
          accept: ["struggle"],
          explain: "Productive struggle treats difficulty as a normal, useful part of learning rather than a sign of low ability."
        }
      ]
    },
    {
      id: "l198",
      title: "Culture and health behavior",
      intro: "Cultural beliefs about the causes and cures of illness influence how people seek care, follow treatment, and recover.",
      questions: [
        {
          type: "mcq",
          q: "Arthur Kleinman's concept of 'explanatory models' refers to:",
          choices: [
            "A patient's personal beliefs about the cause, course, and treatment of their illness",
            "The hospital's billing system",
            "A government health policy",
            "A laboratory diagnostic machine"
          ],
          answer: 0,
          explain: "Explanatory models are the ideas patients and clinicians hold about what causes an illness and how it should be treated."
        },
        {
          type: "fill",
          q: "In many Latin American and Asian traditions, a 'hot-____' theory classifies illnesses and foods as opposing qualities to be balanced.",
          answer: "cold",
          accept: ["cold"],
          explain: "Hot-cold theories treat health as a balance of qualities, guiding which foods or remedies are used for a given condition."
        },
        {
          type: "truefalse",
          q: "Kleinman distinguished 'disease' (biological malfunction) from 'illness' (the person's lived experience of it).",
          answer: true,
          explain: "Kleinman argued that treating only the disease while ignoring the patient's experience of illness undermines effective care."
        },
        {
          type: "match",
          q: "Match each health concept to its meaning.",
          pairs: [
            ["Explanatory model", "Beliefs about what causes and cures a condition"],
            ["Adherence", "The extent to which a patient follows a treatment plan"],
            ["Fatalism", "Belief that outcomes are predetermined and beyond one's control"],
            ["Cultural competence", "A provider's ability to work effectively across cultural differences"]
          ],
          explain: "These concepts link a patient's beliefs to their behavior and to the provider skills needed for effective cross-cultural care."
        },
        {
          type: "mcq",
          q: "A mismatch between a clinician's and a patient's explanatory models can lead to:",
          choices: [
            "Guaranteed recovery",
            "Lower adherence and poorer outcomes",
            "No effect on treatment",
            "Automatic cultural competence"
          ],
          answer: 1,
          explain: "When explanations clash, patients may distrust or abandon treatment, worsening adherence and health outcomes."
        },
        {
          type: "truefalse",
          q: "Patient health beliefs have no measurable effect on whether they take prescribed medication.",
          answer: false,
          explain: "Beliefs about illness causes, side effects, and control strongly predict whether patients follow prescribed treatments."
        },
        {
          type: "order",
          q: "Order a culturally responsive clinical encounter using Kleinman's approach.",
          items: [
            "Elicit the patient's explanatory model",
            "Compare it with the biomedical model",
            "Negotiate a shared understanding",
            "Agree on a treatment plan"
          ],
          explain: "Kleinman recommended eliciting the patient's model first, then negotiating toward a plan both sides can accept."
        }
      ]
    },
    {
      id: "l199",
      title: "Cultural change and globalization",
      intro: "Large-scale data show individualism rising across generations in most of the world as economies modernize.",
      questions: [
        {
          type: "mcq",
          q: "A 2017 study by Santos, Varnum, and Grossmann analyzing 51 years of data found that individualism:",
          choices: [
            "Declined in most countries",
            "Rose in the majority of countries studied",
            "Stayed exactly constant everywhere",
            "Could not be measured"
          ],
          answer: 1,
          explain: "Their study 'Global Increases in Individualism' found individualist values and practices rose in most societies over five decades."
        },
        {
          type: "fill",
          q: "That study reported that roughly ____ percent of the countries examined showed rising individualism over time.",
          answer: "78",
          accept: ["78", "seventy-eight"],
          explain: "Individualism increased in about 78% of the countries with sufficient data, a strikingly broad global trend."
        },
        {
          type: "truefalse",
          q: "Rising individualism worldwide has been linked to socioeconomic development and urbanization.",
          answer: true,
          explain: "Greater wealth, education, and urban living are among the strongest correlates of increasing individualism across nations."
        },
        {
          type: "match",
          q: "Match each thinker or concept to its contribution.",
          pairs: [
            ["Greenfield's theory of social change", "Shifts toward urban, commercial life raise individualism"],
            ["Santos, Varnum, and Grossmann (2017)", "Documented global increases in individualism over decades"],
            ["Jean Twenge", "Documented rising individualistic traits across U.S. generations"],
            ["Modernization", "Economic development associated with more individualist values"]
          ],
          explain: "Multiple lines of work converge on the idea that development and modernization tend to push cultures toward individualism."
        },
        {
          type: "mcq",
          q: "Patricia Greenfield's theory argues that as societies shift from rural subsistence toward urban commercial life, values move toward:",
          choices: [
            "Greater collectivism",
            "Greater individualism and independence",
            "No change in values",
            "Total social isolation"
          ],
          answer: 1,
          explain: "Greenfield's theory of social change ties ecological shifts (wealth, schooling, urban living) to more individualistic psychology."
        },
        {
          type: "truefalse",
          q: "The rise in individualism means every collectivist practice has completely disappeared.",
          answer: false,
          explain: "Trends toward individualism are gradual and uneven; many collectivist values and practices persist alongside them."
        },
        {
          type: "order",
          q: "Order Greenfield's proposed chain of social change.",
          items: [
            "Shift from rural to urban living",
            "Rise of formal schooling and wealth",
            "Move toward individualistic values"
          ],
          explain: "Greenfield argued that ecological and economic shifts drive changes in learning environments and, in turn, in cultural values."
        }
      ]
    },
    {
      id: "l200",
      title: "Frontiers and critiques",
      intro: "The field confronts its Western bias and asks how to decolonize psychology and broaden whose knowledge counts.",
      questions: [
        {
          type: "mcq",
          q: "Henrich, Heine, and Norenzayan's 2010 critique argued that most psychology relies on 'WEIRD' samples, which stands for:",
          choices: [
            "Western, Educated, Industrialized, Rich, and Democratic",
            "Wealthy, Eastern, Intelligent, Rural, and Diverse",
            "Worldwide, Equal, Integrated, Reliable, and Diverse",
            "Western, Emotional, Instinctive, Relational, and Dynamic"
          ],
          answer: 0,
          explain: "WEIRD stands for Western, Educated, Industrialized, Rich, and Democratic, a narrow and unrepresentative slice of humanity."
        },
        {
          type: "fill",
          q: "The 'D' in WEIRD stands for ____.",
          answer: "democratic",
          accept: ["democratic"],
          explain: "The final letter, D, stands for Democratic, completing the Western, Educated, Industrialized, Rich, Democratic acronym."
        },
        {
          type: "truefalse",
          q: "The WEIRD critique warns that findings from a narrow slice of humanity are often treated as universal.",
          answer: true,
          explain: "The critique highlights that overreliance on WEIRD participants can produce claims about 'human nature' that do not generalize."
        },
        {
          type: "match",
          q: "Match each concept or figure to its description.",
          pairs: [
            ["Decolonizing psychology", "Challenging the dominance of Western frameworks in the field"],
            ["Indigenous psychologies", "Theories built from within a culture's own concepts"],
            ["Ignacio Martin-Baro", "Founder of liberation psychology in Latin America"],
            ["WEIRD samples", "Overreliance on Western, educated participants"]
          ],
          explain: "These ideas push the field to widen whose experiences and concepts shape psychological theory."
        },
        {
          type: "mcq",
          q: "A central aim of decolonizing psychology is to:",
          choices: [
            "Make all cultures adopt Western theories",
            "Value knowledge produced within diverse cultures rather than imposing one framework",
            "Stop studying culture altogether",
            "Eliminate all research ethics"
          ],
          answer: 1,
          explain: "Decolonizing psychology seeks to include and respect knowledge from many cultures instead of universalizing one tradition."
        },
        {
          type: "truefalse",
          q: "Liberation psychology, associated with Ignacio Martin-Baro, emphasizes social justice and the perspective of the oppressed.",
          answer: true,
          explain: "Martin-Baro argued psychology should serve the marginalized and address the social conditions that produce suffering."
        },
        {
          type: "mcq",
          q: "One future direction for cultural psychology is to broaden samples beyond WEIRD populations, mainly to improve the field's:",
          choices: [
            "Generalizability across humanity",
            "Advertising revenue",
            "Use of decorative fonts",
            "Reliance on a single country"
          ],
          answer: 0,
          explain: "Studying more diverse populations helps ensure conclusions reflect people worldwide, not just a narrow subset."
        }
      ]
    }
  ]
});
