window.ACADEMY.addUnit("culture", {
  id: "unit-7",
  title: "Hofstede's Cultural Dimensions",
  color: "#e08a1e",
  icon: "🌐",
  description: "Explore Geert Hofstede's value-dimensions model built from IBM employee surveys, its six dimensions and later extensions, and its main limitations.",
  lessons: [
    {
      id: "l49",
      title: "The IBM study origins",
      intro: "Geert Hofstede built his cultural dimensions by mining employee attitude surveys from IBM offices around the world.",
      questions: [
        {
          type: "mcq",
          q: "Where did Geert Hofstede get the original data for his cultural dimensions?",
          choices: ["Employee attitude surveys collected at IBM subsidiaries in dozens of countries", "A one-time telephone poll of American university students", "Anthropological fieldwork he carried out in remote villages", "Government census tables published by the United Nations"],
          answer: 0,
          explain: "Hofstede analyzed a huge set of IBM employee attitude surveys gathered across many national subsidiaries, which let him compare country cultures."
        },
        {
          type: "truefalse",
          q: "Hofstede's core IBM survey data was gathered roughly between 1967 and 1973.",
          answer: true,
          explain: "The original questionnaires were collected in two main rounds around 1967-1973, and Hofstede analyzed them through the 1970s."
        },
        {
          type: "fill",
          q: "Hofstede analyzed attitude surveys from employees of ____, a single large multinational corporation.",
          answer: "ibm",
          accept: ["ibm", "i.b.m."],
          explain: "All respondents worked for IBM, so differences between countries could not be blamed on differences in company or industry."
        },
        {
          type: "mcq",
          q: "Why was using employees of one company like IBM an advantage for comparing national cultures?",
          choices: ["Because IBM workers were a random sample of each country's whole population", "Because it guaranteed the data would never become outdated", "Because holding company and job type roughly constant meant the remaining differences reflected nationality", "Because IBM operated in only two or three countries"],
          answer: 2,
          explain: "By keeping employer and occupation similar, Hofstede argued the leftover differences between countries mainly reflected national culture."
        },
        {
          type: "order",
          q: "Put the steps of Hofstede's research program in order.",
          items: ["IBM gathers employee surveys worldwide (about 1967-1973)", "Hofstede statistically analyzes the country average scores", "He publishes Culture's Consequences in 1980", "The model is later extended with new dimensions"],
          explain: "Data collection came first, then the statistical analysis, then the 1980 book, and finally later extensions of the model."
        },
        {
          type: "match",
          q: "Match each of Hofstede's original four dimensions to a short description.",
          pairs: [["Power distance", "Acceptance of unequal power"], ["Uncertainty avoidance", "Discomfort with ambiguity"], ["Individualism-collectivism", "How loose or tight the ties between people are"], ["Masculinity-femininity", "Achievement versus caring and quality of life"]],
          explain: "The 1980 model had four dimensions; long-term orientation and indulgence were added later."
        },
        {
          type: "truefalse",
          q: "Hofstede created his dimensions by personally interviewing tribal elders rather than using survey data.",
          answer: false,
          explain: "The dimensions came from statistical analysis of large-scale written employee surveys, not from ethnographic interviews."
        }
      ]
    },
    {
      id: "l50",
      title: "Power distance",
      intro: "Power distance captures how much a society accepts that power is distributed unequally within its institutions and organizations.",
      questions: [
        {
          type: "mcq",
          q: "What does Hofstede's power distance dimension measure?",
          choices: ["How physically far apart a country's major cities are", "The extent to which less powerful people accept and expect unequal power", "How much a government spends on its military", "The average age at which people retire"],
          answer: 1,
          explain: "Power distance is the degree to which the less powerful members of institutions accept and expect that power is distributed unequally."
        },
        {
          type: "truefalse",
          q: "Power distance is measured mainly from the point of view of bosses and rulers, not their subordinates.",
          answer: false,
          explain: "It is defined from the viewpoint of the less powerful members, focusing on how much they accept and expect inequality."
        },
        {
          type: "fill",
          q: "In ____ power distance cultures, subordinates expect to be consulted and see hierarchy as just a convenient arrangement.",
          answer: "low",
          accept: ["low"],
          explain: "Low power distance societies favor consultation and flatter organizations, treating hierarchy as convenience rather than a natural order."
        },
        {
          type: "mcq",
          q: "Which is typical of a HIGH power distance culture?",
          choices: ["Employees freely challenge the boss's decisions", "Very flat organizations with little hierarchy", "Managers and staff see themselves as basically equal", "Subordinates expect to be told what to do and rarely challenge authority"],
          answer: 3,
          explain: "High power distance cultures accept steep hierarchies, centralized authority, and clear deference to superiors."
        },
        {
          type: "match",
          q: "Match each trait to high or low power distance.",
          pairs: [["Steep hierarchy accepted as natural", "High power distance"], ["Consultative, participative management", "Low power distance"], ["Strong deference to elders and bosses", "High power distance"], ["Employees comfortable disagreeing with superiors", "Low power distance"]],
          explain: "High power distance accepts and expects inequality; low power distance tries to minimize and question it."
        },
        {
          type: "truefalse",
          q: "In Hofstede's data, countries like Malaysia score high on power distance while Austria and Denmark score low.",
          answer: true,
          explain: "Malaysia is a classic high power distance country, while Austria and the Nordic nations are among the lowest."
        },
        {
          type: "fill",
          q: "Power distance is defined by how much the less powerful members ____ an unequal distribution of power.",
          answer: "accept",
          accept: ["accept", "expect", "accept and expect"],
          explain: "The formal definition centers on the acceptance and expectation of unequal power by those who hold less of it."
        }
      ]
    },
    {
      id: "l51",
      title: "Uncertainty avoidance",
      intro: "Uncertainty avoidance describes how threatened a culture feels by ambiguity and how strongly it craves rules and structure.",
      questions: [
        {
          type: "mcq",
          q: "Uncertainty avoidance refers to how much people...",
          choices: ["Experience natural disasters in their country", "Earn on average each year", "Feel threatened by ambiguous or unknown situations", "Travel abroad during their lifetime"],
          answer: 2,
          explain: "Uncertainty avoidance is the extent to which members of a culture feel uncomfortable with ambiguity and the unknown."
        },
        {
          type: "truefalse",
          q: "Uncertainty avoidance is exactly the same thing as avoiding risk.",
          answer: false,
          explain: "They differ: high uncertainty-avoidance cultures may even accept familiar risks to reduce ambiguity, so it is about ambiguity, not risk itself."
        },
        {
          type: "fill",
          q: "Cultures high in uncertainty avoidance rely on many explicit ____ and formal structures to make life predictable.",
          answer: "rules",
          accept: ["rules", "laws", "regulations"],
          explain: "High uncertainty-avoidance societies use rules, laws, and rituals to reduce the anxiety caused by ambiguity."
        },
        {
          type: "mcq",
          q: "Which behavior fits a HIGH uncertainty avoidance culture?",
          choices: ["Preferring clear rules, structure, and expert guidance", "Feeling relaxed when plans stay vague", "Tolerating unusual ideas and dissent easily", "Having as few written procedures as possible"],
          answer: 0,
          explain: "High uncertainty avoidance brings a strong emotional need for rules, precision, and predictability."
        },
        {
          type: "match",
          q: "Match each description to high or low uncertainty avoidance.",
          pairs: [["Anxiety about the unknown and a need for rules", "High uncertainty avoidance"], ["Comfort with ambiguity and few rules", "Low uncertainty avoidance"], ["Suspicion of what is different or novel", "High uncertainty avoidance"], ["Relaxed, flexible attitude toward change", "Low uncertainty avoidance"]],
          explain: "High scorers want structure and dislike ambiguity; low scorers tolerate uncertainty comfortably."
        },
        {
          type: "truefalse",
          q: "Greece recorded one of the highest uncertainty-avoidance scores in Hofstede's data, while Singapore was among the lowest.",
          answer: true,
          explain: "Greece tops the uncertainty-avoidance ranking, while Singapore sits near the bottom, comfortable with ambiguity."
        },
        {
          type: "mcq",
          q: "A low uncertainty-avoidance culture is most likely to...",
          choices: ["Pass detailed laws for nearly every situation", "Feel comfortable with open-ended, ambiguous situations", "Show high anxiety about breaking rules", "Distrust anything unfamiliar"],
          answer: 1,
          explain: "Low uncertainty-avoidance cultures accept ambiguity, keep rules minimal, and stay relaxed about the unknown."
        }
      ]
    },
    {
      id: "l52",
      title: "Masculinity versus femininity",
      intro: "This dimension contrasts masculine values of achievement and assertiveness with feminine values of caring and quality of life.",
      questions: [
        {
          type: "mcq",
          q: "In Hofstede's model, a 'masculine' society most emphasizes...",
          choices: ["Cooperation, modesty, and caring for the weak", "Achievement, competition, assertiveness, and material success", "Equal and overlapping gender roles", "Leisure over work"],
          answer: 1,
          explain: "The masculine pole stresses achievement, competition, assertiveness, and material reward."
        },
        {
          type: "truefalse",
          q: "A 'feminine' culture in Hofstede's sense prioritizes cooperation, care for others, and quality of life.",
          answer: true,
          explain: "Feminine cultures value modesty, nurturance, consensus, and quality of life over competitive achievement."
        },
        {
          type: "fill",
          q: "In Hofstede's data, ____ scored as the most masculine society of all.",
          answer: "japan",
          accept: ["japan"],
          explain: "Japan recorded the highest masculinity score, reflecting a strong emphasis on achievement and assertiveness."
        },
        {
          type: "match",
          q: "Match each value to the masculine or feminine pole.",
          pairs: [["Competition and being the winner", "Masculine"], ["Caring for others and consensus", "Feminine"], ["Ambition and material success", "Masculine"], ["Modesty and quality of life", "Feminine"]],
          explain: "Masculine cultures reward assertive achievement; feminine cultures reward nurturance and quality of life."
        },
        {
          type: "mcq",
          q: "Which country is a classic example of a FEMININE culture in Hofstede's data?",
          choices: ["Japan", "Austria", "Italy", "Sweden"],
          answer: 3,
          explain: "Sweden and the other Nordic countries are the strongest examples of feminine cultures, while Japan and Austria are highly masculine."
        },
        {
          type: "truefalse",
          q: "The 'masculinity versus femininity' labels have been criticized as gendered and easy to misunderstand.",
          answer: true,
          explain: "Because the labels sound like they are about biological sex, some scholars prefer terms such as achievement versus nurturance."
        },
        {
          type: "order",
          q: "Order these societies from most masculine to most feminine according to Hofstede's rankings.",
          items: ["Japan (very masculine)", "Italy (moderately masculine)", "Netherlands (feminine)", "Sweden (most feminine)"],
          explain: "Japan tops the masculinity scale, Italy is moderately masculine, and the Netherlands and Sweden are strongly feminine, with Sweden lowest of all."
        }
      ]
    },
    {
      id: "l53",
      title: "Long-term orientation",
      intro: "Long-term orientation, first called Confucian dynamism, captures a culture's focus on perseverance, thrift, and future rewards.",
      questions: [
        {
          type: "mcq",
          q: "Long-term orientation is most associated with which set of values?",
          choices: ["Respect for tradition and saving face above all", "Immediate gratification and living only for today", "Perseverance, thrift, and adapting for future rewards", "Rejecting any planning for the future"],
          answer: 2,
          explain: "Long-term orientation emphasizes perseverance, thrift, and pragmatic adaptation aimed at future results."
        },
        {
          type: "fill",
          q: "Hofstede's fifth dimension was originally named ____ dynamism.",
          answer: "confucian",
          accept: ["confucian"],
          explain: "It was first labeled Confucian dynamism because its values echoed teachings associated with Confucius."
        },
        {
          type: "truefalse",
          q: "Long-term orientation grew out of the Chinese Value Survey, which was designed partly to reduce Western bias in the questions.",
          answer: true,
          explain: "Michael Harris Bond and colleagues built the Chinese Value Survey from a Chinese starting point, revealing a dimension the Western-designed IBM survey had missed."
        },
        {
          type: "match",
          q: "Match each value to long-term or short-term orientation.",
          pairs: [["Perseverance and thrift", "Long-term orientation"], ["Respect for tradition and saving face", "Short-term orientation"], ["Adapting to circumstances for the future", "Long-term orientation"], ["Reciprocating gifts and greetings promptly", "Short-term orientation"]],
          explain: "Long-term orientation stresses future-focused perseverance and thrift; short-term orientation stresses tradition, face, and social reciprocation."
        },
        {
          type: "mcq",
          q: "Why was the long-term orientation dimension added to the model?",
          choices: ["A survey built from a Chinese perspective revealed values the original Western survey overlooked", "IBM demanded a fifth dimension for marketing", "Hofstede simply wanted an even ten dimensions", "It replaced the power distance dimension"],
          answer: 0,
          explain: "The Chinese Value Survey surfaced a values dimension that the Western-authored IBM questionnaire had never asked about."
        },
        {
          type: "order",
          q: "Order Hofstede's dimensions by when they entered the model, earliest first.",
          items: ["The original four dimensions (1980)", "Long-term orientation (1991)", "Indulgence versus restraint (2010)"],
          explain: "Four dimensions came in 1980, long-term orientation was added in 1991, and indulgence versus restraint in 2010."
        },
        {
          type: "truefalse",
          q: "High long-term orientation has been linked to the rapid economic growth of several East Asian societies.",
          answer: true,
          explain: "Hofstede connected the thrift and perseverance of high long-term-orientation cultures to the economic rise of East Asian economies."
        }
      ]
    },
    {
      id: "l54",
      title: "Indulgence versus restraint",
      intro: "Indulgence versus restraint, the sixth dimension, contrasts freely enjoying life with suppressing desires under strict social norms.",
      questions: [
        {
          type: "mcq",
          q: "An 'indulgent' society, in Hofstede's model, is one that...",
          choices: ["Strictly regulates enjoyment through social norms", "Allows relatively free gratification of natural human desires for fun and enjoyment", "Bans all leisure activities", "Focuses only on long-term saving"],
          answer: 1,
          explain: "Indulgence means allowing relatively free gratification of basic human drives related to enjoying life and having fun."
        },
        {
          type: "fill",
          q: "The indulgence-versus-restraint dimension was added in ____ with the help of Michael Minkov.",
          answer: "2010",
          accept: ["2010"],
          explain: "Hofstede added the sixth dimension in 2010, drawing on Michael Minkov's analysis of World Values Survey data."
        },
        {
          type: "truefalse",
          q: "The indulgence-restraint dimension was derived largely from World Values Survey data.",
          answer: true,
          explain: "Minkov's work with the World Values Survey provided the empirical basis for this sixth dimension."
        },
        {
          type: "match",
          q: "Match each feature to indulgence or restraint.",
          pairs: [["Free enjoyment of life and leisure", "Indulgence"], ["Gratification suppressed by strict social norms", "Restraint"], ["Higher reported happiness and optimism", "Indulgence"], ["More control and cynicism about fun", "Restraint"]],
          explain: "Indulgent cultures let people enjoy life freely; restrained cultures curb gratification with strict norms."
        },
        {
          type: "mcq",
          q: "A 'restrained' culture is best described as one that...",
          choices: ["Encourages people to freely pursue fun", "Places no limits at all on personal desires", "Suppresses gratification and regulates it with strict social norms", "Has no social norms whatsoever"],
          answer: 2,
          explain: "Restraint means curbing the gratification of needs and regulating it through strict social norms."
        },
        {
          type: "truefalse",
          q: "Indulgent societies tend to report higher subjective well-being and place more value on leisure.",
          answer: true,
          explain: "Research tied indulgence to more positive emotions, higher life satisfaction, and greater importance placed on leisure."
        },
        {
          type: "mcq",
          q: "Which is the sixth and most recently added Hofstede dimension?",
          choices: ["Power distance", "Uncertainty avoidance", "Long-term orientation", "Indulgence versus restraint"],
          answer: 3,
          explain: "Indulgence versus restraint, added in 2010, is the sixth and newest dimension in the model."
        }
      ]
    },
    {
      id: "l55",
      title: "Ecological fallacy warning",
      intro: "Hofstede's scores describe national averages, so applying them to individuals commits the ecological fallacy.",
      questions: [
        {
          type: "mcq",
          q: "What is the 'ecological fallacy'?",
          choices: ["Assuming the natural environment shapes all behavior", "Confusing correlation with causation in experiments", "Drawing conclusions about individuals from group-level averages", "Ignoring ecological data entirely"],
          answer: 2,
          explain: "The ecological fallacy is reasoning from aggregate group data to claims about specific individuals within the group."
        },
        {
          type: "truefalse",
          q: "You can reliably predict one person's personality just from their country's Hofstede scores.",
          answer: false,
          explain: "Country scores are averages; individuals vary widely, so predicting a single person from them is the ecological fallacy."
        },
        {
          type: "fill",
          q: "Hofstede's dimension scores describe national ____, not the traits of any single individual.",
          answer: "averages",
          accept: ["averages", "average", "means"],
          explain: "Each score is a country mean, summarizing a whole population rather than describing one person."
        },
        {
          type: "mcq",
          q: "What did Hofstede himself say about applying his scores to individuals?",
          choices: ["He warned that the scores describe nations, not individuals", "He insisted they predict individual behavior precisely", "He never addressed the issue at all", "He said they apply only to individuals, not nations"],
          answer: 0,
          explain: "Hofstede repeatedly cautioned that his dimensions operate at the national level and should not be used to stereotype individuals."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Ecological/aggregate level", "Comparing whole-country averages"], ["Individual level", "Measuring one person's values"], ["Ecological fallacy", "Judging a person purely by their country's score"]],
          explain: "Keeping the level of analysis straight prevents sliding from country averages to false claims about individuals."
        },
        {
          type: "truefalse",
          q: "Two people from the same country can differ from each other more than their two countries' average scores differ.",
          answer: true,
          explain: "Within-country variation is often large, which is exactly why national averages cannot pin down any individual."
        },
        {
          type: "mcq",
          q: "Building an individual-level personality test directly out of country-level dimensions is known as...",
          choices: ["A representative sample", "A double-blind design", "The halo effect", "The reverse ecological fallacy"],
          answer: 3,
          explain: "The reverse ecological fallacy is assuming that country-level dimensions automatically work as individual-level measures."
        }
      ]
    },
    {
      id: "l56",
      title: "Critiques of Hofstede",
      intro: "Critics question Hofstede's equation of nation with culture and point out that his core data is now decades old.",
      questions: [
        {
          type: "mcq",
          q: "A central criticism of Hofstede's model is that it...",
          choices: ["Uses far too many dimensions to be useful", "Treats each nation as a single, uniform culture", "Relies on data that is far too recent", "Ignores survey data completely"],
          answer: 1,
          explain: "Critics argue that equating a nation-state with one homogeneous culture ignores internal diversity, subcultures, and minorities."
        },
        {
          type: "truefalse",
          q: "A common criticism is that Hofstede's core IBM data is now decades old and may be outdated.",
          answer: true,
          explain: "The original surveys date from around 1970, so critics question whether the scores still describe today's cultures."
        },
        {
          type: "fill",
          q: "Critics note that the data came from a single company, ____, which may not represent whole nations.",
          answer: "ibm",
          accept: ["ibm", "i.b.m."],
          explain: "Because every respondent worked for IBM, some argue the sample cannot stand in for entire national populations."
        },
        {
          type: "match",
          q: "Match each critique to its description.",
          pairs: [["Nation-as-culture", "Treating a whole country as one uniform culture"], ["Dated data", "Core surveys are from around 1970"], ["Single company", "All respondents worked for IBM"], ["Too few dimensions", "A handful of scores cannot capture cultural complexity"]],
          explain: "These are among the most frequently raised objections to the model."
        },
        {
          type: "mcq",
          q: "Which author is known for a prominent 2002 critique of Hofstede's model?",
          choices: ["Michael Minkov", "Michael Harris Bond", "Brendan McSweeney", "Geert Hofstede"],
          answer: 2,
          explain: "Brendan McSweeney's 2002 article challenged the model's assumptions of national uniformity and its methodology."
        },
        {
          type: "truefalse",
          q: "Hofstede's critics generally praise the model for fully capturing every subculture within a nation.",
          answer: false,
          explain: "The opposite is true: a key criticism is that the model overlooks subcultures and treats nations as homogeneous."
        },
        {
          type: "order",
          q: "Order these events in the model's history from earliest to latest.",
          items: ["IBM surveys collected (around 1970)", "Culture's Consequences published (1980)", "McSweeney's major critique published (2002)", "Sixth dimension added (2010)"],
          explain: "Data collection came first, then the 1980 book, McSweeney's 2002 critique, and the 2010 sixth dimension."
        }
      ]
    }
  ]
});
