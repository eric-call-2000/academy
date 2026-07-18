window.ACADEMY.addUnit("culture", {
  id: "unit-8",
  title: "Related Value Frameworks",
  color: "#e08a1e",
  icon: "⚖️",
  description: "Surveys the major alternative value taxonomies that extend or rival Hofstede's model, from Schwartz and GLOBE to Inglehart, Trompenaars, Kluckhohn and Strodtbeck, and Gelfand.",
  lessons: [
    {
      id: "l57",
      title: "Schwartz's value theory",
      intro: "Shalom Schwartz mapped ten basic human values arranged in a circle by how their underlying motivations align or clash.",
      questions: [
        {
          type: "mcq",
          q: "How many basic values does Schwartz's theory of basic human values identify?",
          choices: ["Five", "Seven", "Ten", "Twelve"],
          answer: 2,
          explain: "Schwartz's 1992 theory specifies ten basic values, such as Power, Achievement, Benevolence, and Universalism."
        },
        {
          type: "truefalse",
          q: "In Schwartz's circular model, values placed opposite one another express conflicting motivations.",
          answer: true,
          explain: "The circle is organized so that opposing values (for example Self-Direction versus Conformity) are motivationally incompatible, while adjacent values are compatible."
        },
        {
          type: "match",
          q: "Match each Schwartz value to the motivation it expresses.",
          pairs: [
            ["Self-Direction", "Independent thought and action"],
            ["Benevolence", "Preserving the welfare of close others"],
            ["Power", "Social status, prestige, and dominance"],
            ["Security", "Safety, harmony, and stability"]
          ],
          explain: "Each of the ten values is defined by a distinct motivational goal, and these goals determine where the value sits in the circle."
        },
        {
          type: "order",
          q: "Starting from Self-Direction and moving around Schwartz's circle toward Self-Enhancement, arrange these values in their circular order.",
          items: ["Self-Direction", "Stimulation", "Hedonism", "Achievement"],
          explain: "The circle runs Self-Direction, Stimulation, Hedonism, Achievement, Power and onward, reflecting the gradual shift from Openness to Change toward Self-Enhancement motivations."
        },
        {
          type: "fill",
          q: "The two poles of one higher-order dimension are Self-Enhancement and Self-____.",
          answer: "transcendence",
          accept: ["transcendence", "self-transcendence"],
          explain: "Self-Enhancement (Power, Achievement) opposes Self-Transcendence (Benevolence, Universalism), one of two higher-order dimensions in the model."
        },
        {
          type: "mcq",
          q: "Which higher-order dimension sits opposite Openness to Change in Schwartz's model?",
          choices: ["Self-Transcendence", "Conservation", "Self-Enhancement", "Hedonism"],
          answer: 1,
          explain: "Openness to Change (Self-Direction, Stimulation) is opposed by Conservation (Security, Conformity, Tradition) on the circle's other axis."
        },
        {
          type: "truefalse",
          q: "Adjacent values in Schwartz's circle represent opposing, incompatible motivations.",
          answer: false,
          explain: "Adjacent values are compatible and share motivational elements; it is values on opposite sides of the circle that conflict."
        }
      ]
    },
    {
      id: "l58",
      title: "Embeddedness and autonomy",
      intro: "At the cultural level Schwartz proposed seven value orientations forming three bipolar dimensions, anchored by Embeddedness versus Autonomy.",
      questions: [
        {
          type: "mcq",
          q: "What does Schwartz's Embeddedness orientation emphasize?",
          choices: ["Individuals as fully autonomous agents", "People as embedded in a collective, maintaining the status quo", "Mastery and exploitation of the natural world", "An equal distribution of power and resources"],
          answer: 1,
          explain: "Embeddedness views people as parts of a collectivity whose meaning comes from shared goals and preserving tradition, opposing the Autonomy pole."
        },
        {
          type: "mcq",
          q: "Autonomy in Schwartz's cultural theory splits into which two sub-types?",
          choices: ["Intellectual and Affective autonomy", "Vertical and Horizontal autonomy", "Economic and Political autonomy", "Personal and Social autonomy"],
          answer: 0,
          explain: "Intellectual Autonomy (pursuing one's own ideas) and Affective Autonomy (pursuing pleasure and stimulation) are the two autonomy orientations."
        },
        {
          type: "match",
          q: "Match each cultural-level orientation to its description.",
          pairs: [
            ["Embeddedness", "Identity rooted in group membership and a shared way of life"],
            ["Intellectual Autonomy", "Encouraging curiosity, creativity, and one's own ideas"],
            ["Hierarchy", "Unequal roles and power treated as legitimate"],
            ["Harmony", "Fitting into the world rather than exploiting it"]
          ],
          explain: "Schwartz's cultural framework contains seven orientations that fall along three bipolar dimensions."
        },
        {
          type: "truefalse",
          q: "Schwartz's cultural-level dimensions are simply identical to his ten individual-level values.",
          answer: false,
          explain: "The cultural level uses seven distinct orientations grouped into three dimensions; it is theoretically and empirically separate from the ten individual values."
        },
        {
          type: "fill",
          q: "Hierarchy stands opposite ____ on one of Schwartz's three cultural dimensions.",
          answer: "egalitarianism",
          accept: ["egalitarianism", "egalitarian"],
          explain: "The Hierarchy versus Egalitarianism dimension contrasts accepting unequal power with treating people as moral equals."
        },
        {
          type: "mcq",
          q: "In Schwartz's cultural model, Mastery is opposed to which orientation?",
          choices: ["Egalitarianism", "Harmony", "Embeddedness", "Hierarchy"],
          answer: 1,
          explain: "Mastery (actively controlling and changing the environment) is the opposite pole of Harmony (accepting and fitting into the world)."
        },
        {
          type: "fill",
          q: "Schwartz derived his cultural orientations largely from surveys of schoolteachers and college ____ across many nations.",
          answer: "students",
          accept: ["students", "student"],
          explain: "Matched samples of schoolteachers and university students provided the cross-national data behind the seven cultural orientations."
        }
      ]
    },
    {
      id: "l59",
      title: "The GLOBE project",
      intro: "The GLOBE project extended Hofstede to nine cultural dimensions and uniquely measured each as both practices and values.",
      questions: [
        {
          type: "mcq",
          q: "What does the acronym GLOBE stand for?",
          choices: ["Global Organizational Behavior Enterprise", "Global Leadership and Organizational Behavior Effectiveness", "General Longitudinal Observation of Business Ethics", "Global Overview of Business Environments"],
          answer: 1,
          explain: "GLOBE is the Global Leadership and Organizational Behavior Effectiveness research program, launched by Robert House."
        },
        {
          type: "mcq",
          q: "What was GLOBE's key methodological innovation compared with Hofstede?",
          choices: ["Measuring each dimension as both practices ('As Is') and values ('Should Be')", "Measuring only what people ideally value", "Measuring only observed economic output", "Combining everything into a single blended index"],
          answer: 0,
          explain: "GLOBE separately scored cultural practices ('As Is') and aspirational values ('Should Be') for each of its nine dimensions."
        },
        {
          type: "fill",
          q: "The GLOBE project was founded and led by researcher Robert ____.",
          answer: "house",
          accept: ["house"],
          explain: "Robert J. House initiated GLOBE in the early 1990s, with major findings published in 2004."
        },
        {
          type: "truefalse",
          q: "GLOBE identified nine cultural dimensions, several of which extend Hofstede's original set.",
          answer: true,
          explain: "GLOBE's nine dimensions include Power Distance and Uncertainty Avoidance from Hofstede plus new ones like Performance Orientation and Humane Orientation."
        },
        {
          type: "match",
          q: "Match each GLOBE dimension to what it captures.",
          pairs: [
            ["Performance Orientation", "Rewarding improvement and excellence"],
            ["Humane Orientation", "Rewarding fairness, altruism, and kindness"],
            ["Assertiveness", "Being confrontational and tough in relationships"],
            ["Future Orientation", "Planning and investing for the future"]
          ],
          explain: "These are four of GLOBE's nine dimensions, each measured at the society level."
        },
        {
          type: "mcq",
          q: "GLOBE split collectivism into which two separate dimensions?",
          choices: ["Vertical and Horizontal Collectivism", "Institutional and In-Group Collectivism", "Economic and Social Collectivism", "Tight and Loose Collectivism"],
          answer: 1,
          explain: "GLOBE distinguished Institutional Collectivism (collective distribution of resources) from In-Group Collectivism (pride and loyalty in families and organizations)."
        },
        {
          type: "truefalse",
          q: "GLOBE found that a society's practices and values on a dimension always match each other closely.",
          answer: false,
          explain: "For several dimensions, practices ('As Is') and values ('Should Be') were actually negatively correlated, a striking GLOBE finding."
        }
      ]
    },
    {
      id: "l60",
      title: "Inglehart's World Values Survey",
      intro: "Ronald Inglehart's World Values Survey maps cultures on two axes: traditional versus secular-rational, and survival versus self-expression.",
      questions: [
        {
          type: "mcq",
          q: "The World Values Survey and its cultural map are most associated with which researcher?",
          choices: ["Geert Hofstede", "Ronald Inglehart", "Shalom Schwartz", "Fons Trompenaars"],
          answer: 1,
          explain: "Political scientist Ronald Inglehart led the World Values Survey and, with Christian Welzel, produced its influential cultural map."
        },
        {
          type: "mcq",
          q: "What are the two main dimensions of the Inglehart-Welzel cultural map?",
          choices: ["Individualism and masculinity", "Power distance and uncertainty avoidance", "Traditional versus secular-rational and survival versus self-expression", "Universalism and particularism"],
          answer: 2,
          explain: "The map's vertical axis runs traditional to secular-rational, and its horizontal axis runs survival to self-expression."
        },
        {
          type: "match",
          q: "Match each Inglehart value cluster to its emphasis.",
          pairs: [
            ["Traditional values", "Religion, family ties, and deference to authority"],
            ["Secular-rational values", "Less emphasis on religion and traditional authority"],
            ["Survival values", "Economic and physical security with lower trust"],
            ["Self-expression values", "Tolerance, participation, and quality of life"]
          ],
          explain: "Each pole reflects a coherent bundle of attitudes measured across the World Values Survey."
        },
        {
          type: "truefalse",
          q: "Inglehart argued that economic development tends to shift societies toward secular-rational and self-expression values.",
          answer: true,
          explain: "Rising security and prosperity, he argued, move societies up and to the right on the map, though history and religion leave lasting imprints."
        },
        {
          type: "fill",
          q: "Inglehart's earlier ____ thesis argued that prosperity shifts younger generations from material to postmaterial priorities.",
          answer: "postmaterialism",
          accept: ["postmaterialism", "post-materialism", "postmaterialist"],
          explain: "In 'The Silent Revolution' (1977) Inglehart proposed postmaterialism: secure generations prioritize self-expression over material security."
        },
        {
          type: "truefalse",
          q: "The survival versus self-expression axis is mainly about deference to religious authority.",
          answer: false,
          explain: "Deference to religion belongs to the traditional versus secular-rational axis; survival versus self-expression concerns security versus tolerance and autonomy."
        },
        {
          type: "order",
          q: "Arrange Inglehart and Welzel's human-development sequence from cause to consequence.",
          items: ["Economic development", "Rising existential security", "Shift toward self-expression values", "Growing demand for democracy"],
          explain: "Development raises security, which fosters self-expression values, which in turn increases pressure for democratic freedoms."
        }
      ]
    },
    {
      id: "l61",
      title: "Trompenaars's dimensions",
      intro: "Fons Trompenaars identified seven dimensions of culture for business, led by the contrast between universalism and particularism.",
      questions: [
        {
          type: "mcq",
          q: "In Trompenaars's model, universalism means:",
          choices: ["Relationships and circumstances override rules", "Rules and standards apply equally to everyone", "Emotions should always be openly displayed", "Status is inherited rather than earned"],
          answer: 1,
          explain: "Universalist cultures treat rules and standards as applying to everyone regardless of particular relationships."
        },
        {
          type: "mcq",
          q: "Particularism, by contrast, emphasizes:",
          choices: ["Obligations to specific relationships and situations", "Applying identical rules regardless of who is involved", "Sequential rather than synchronous time", "Achieved rather than ascribed status"],
          answer: 0,
          explain: "Particularist cultures judge conduct by the demands of the particular relationship and context, not one universal rule."
        },
        {
          type: "match",
          q: "Match each Trompenaars dimension to what it contrasts.",
          pairs: [
            ["Specific vs Diffuse", "How far personal and work life overlap"],
            ["Neutral vs Affective", "How openly emotions are expressed"],
            ["Achievement vs Ascription", "Whether status is earned or granted by birth or role"],
            ["Individualism vs Communitarianism", "Orientation to the self versus the group"]
          ],
          explain: "These are four of the seven dimensions Trompenaars used to analyze cross-cultural business behavior."
        },
        {
          type: "truefalse",
          q: "Trompenaars co-developed his framework with Charles Hampden-Turner in 'Riding the Waves of Culture'.",
          answer: true,
          explain: "Trompenaars and Hampden-Turner presented the seven-dimension model in 'Riding the Waves of Culture' (1997)."
        },
        {
          type: "fill",
          q: "Trompenaars's classic dilemma asks whether you would lie in court to protect a ____ who caused a car accident.",
          answer: "friend",
          accept: ["friend"],
          explain: "The car-accident dilemma tests universalism versus particularism: universalists tell the truth, particularists protect the friend."
        },
        {
          type: "truefalse",
          q: "In Trompenaars's model, an 'ascription' culture bases status mainly on personal accomplishments.",
          answer: false,
          explain: "Ascription grants status by birth, age, gender, or role; it is achievement cultures that reward personal accomplishments."
        },
        {
          type: "mcq",
          q: "Which Trompenaars dimension concerns how cultures handle time?",
          choices: ["Neutral vs Affective", "Specific vs Diffuse", "Universalism vs Particularism", "Sequential vs Synchronous"],
          answer: 3,
          explain: "The Sequential versus Synchronous dimension contrasts doing one thing at a time with juggling several overlapping activities."
        }
      ]
    },
    {
      id: "l62",
      title: "Kluckhohn and Strodtbeck",
      intro: "Kluckhohn and Strodtbeck (1961) argued that all cultures answer a few universal questions about nature, time, and human activity.",
      questions: [
        {
          type: "mcq",
          q: "Kluckhohn and Strodtbeck's framework assumes cultures differ in how they solve a small set of:",
          choices: ["Economic transactions", "Universal human problems", "Linguistic puzzles", "Legal disputes"],
          answer: 1,
          explain: "They argued every society faces the same basic human problems and varies in which solutions it prefers."
        },
        {
          type: "match",
          q: "Match each value orientation to the range of answers it allows.",
          pairs: [
            ["Time orientation", "Past, present, or future"],
            ["Man-nature relationship", "Subjugation, harmony, or mastery"],
            ["Activity orientation", "Being, being-in-becoming, or doing"],
            ["Human nature", "Evil, mixed, or good"]
          ],
          explain: "Each orientation names a universal problem, and cultures lean toward one of a few possible solutions."
        },
        {
          type: "mcq",
          q: "The man-nature orientation ranges across which three positions?",
          choices: ["Subjugation, harmony, mastery", "Past, present, future", "Being, becoming, doing", "Lineal, collateral, individual"],
          answer: 0,
          explain: "Cultures may see humans as subject to nature, living in harmony with it, or seeking mastery over it."
        },
        {
          type: "truefalse",
          q: "In the activity orientation, a 'doing' culture stresses accomplishment and measurable achievement.",
          answer: true,
          explain: "The 'doing' orientation values action and results, in contrast to 'being' (spontaneous self-expression) and 'being-in-becoming' (inner development)."
        },
        {
          type: "fill",
          q: "The time orientation contrasts cultures focused on the past, the present, or the ____.",
          answer: "future",
          accept: ["future"],
          explain: "Cultures differ in whether they emphasize tradition (past), the here and now (present), or planning and progress (future)."
        },
        {
          type: "order",
          q: "Order the three man-nature positions from least to most human control over nature.",
          items: ["Subjugation to nature", "Harmony with nature", "Mastery over nature"],
          explain: "The scale runs from being controlled by nature, to living in balance with it, to dominating and exploiting it."
        },
        {
          type: "truefalse",
          q: "Kluckhohn and Strodtbeck's framework is unrelated to anthropology and comes purely from economics.",
          answer: false,
          explain: "Florence Kluckhohn was an anthropologist, and 'Variations in Value Orientations' is a foundational anthropological work."
        }
      ]
    },
    {
      id: "l63",
      title: "Cultural tightness as value",
      intro: "Michele Gelfand's tightness-looseness dimension contrasts cultures with strong, strictly enforced norms against those with weak, permissive norms.",
      questions: [
        {
          type: "mcq",
          q: "In Gelfand's terms, a 'tight' culture has:",
          choices: ["Weak norms and high tolerance of deviance", "Strong social norms and low tolerance of deviance", "No social norms at all", "Only economic norms"],
          answer: 1,
          explain: "Tight cultures maintain many strong norms and punish deviations firmly, leaving little room for behavioral latitude."
        },
        {
          type: "mcq",
          q: "A 'loose' culture is characterized by:",
          choices: ["Weak social norms and greater tolerance of deviant behavior", "Strong norms and harsh sanctions for violations", "No variation between individuals", "Mandatory religious observance"],
          answer: 0,
          explain: "Loose cultures have weaker norms and permit a wider range of behavior with milder sanctions."
        },
        {
          type: "truefalse",
          q: "Gelfand's 2011 study in Science linked ecological and historical threats to greater cultural tightness.",
          answer: true,
          explain: "Across 33 nations, threats such as high population density, disasters, and disease predicted tighter norms and stronger sanctioning."
        },
        {
          type: "fill",
          q: "The tight-loose distinction was first foreshadowed by anthropologist Pelto in ____.",
          answer: "1968",
          accept: ["1968"],
          explain: "Pertti Pelto's 1968 work distinguished 'tight' and 'loose' societies long before Gelfand operationalized the dimension."
        },
        {
          type: "match",
          q: "Match each tightness-looseness idea to its description.",
          pairs: [
            ["Tight culture", "Many strong rules, strict punishment, high self-control"],
            ["Loose culture", "Few strong rules, permissiveness, openness to change"],
            ["Ecological threat", "Disasters and scarcity that push cultures toward tightness"],
            ["Gelfand's book", "'Rule Makers, Rule Breakers' (2018)"]
          ],
          explain: "Tightness reflects both the strength of norms and the strength of sanctioning, shaped by a society's history of threat."
        },
        {
          type: "truefalse",
          q: "Tightness-looseness is best understood simply as a measure of national wealth.",
          answer: false,
          explain: "It measures the strength of social norms and sanctioning, not wealth; tight and loose cultures exist at many income levels."
        },
        {
          type: "order",
          q: "Order the causal chain Gelfand proposed for how tightness develops.",
          items: ["Ecological and historical threats", "Greater need for coordination and order", "Stronger social norms", "Tighter culture with strict sanctions"],
          explain: "Chronic threat raises the need for coordinated order, which strengthens norms and produces a tighter culture."
        }
      ]
    },
    {
      id: "l64",
      title: "Comparing the frameworks",
      intro: "Despite different methods, the major value frameworks converge on a small set of dimensions, above all individualism-collectivism.",
      questions: [
        {
          type: "mcq",
          q: "Which dimension appears, under different names, across nearly all major value frameworks?",
          choices: ["Tightness-looseness", "Individualism-collectivism", "Future orientation", "Neutral-affective"],
          answer: 1,
          explain: "The contrast between the individual and the group recurs in Hofstede, Schwartz, GLOBE, Trompenaars, and Inglehart alike."
        },
        {
          type: "match",
          q: "Match each framework to its version of the individualism-collectivism contrast.",
          pairs: [
            ["Hofstede", "Individualism vs Collectivism"],
            ["Schwartz", "Autonomy vs Embeddedness"],
            ["Trompenaars", "Individualism vs Communitarianism"],
            ["GLOBE", "In-Group and Institutional Collectivism"]
          ],
          explain: "Independent research programs arrived at closely related person-versus-group constructs, a sign of convergent validity."
        },
        {
          type: "mcq",
          q: "Hofstede's Power Distance most closely overlaps with which Schwartz cultural dimension?",
          choices: ["Mastery vs Harmony", "Openness vs Conservation", "Hierarchy vs Egalitarianism", "Neutral vs Affective"],
          answer: 2,
          explain: "Both capture how far a culture accepts unequal power: Hofstede's Power Distance parallels Schwartz's Hierarchy versus Egalitarianism."
        },
        {
          type: "truefalse",
          q: "The convergence of frameworks on similar dimensions strengthens confidence that these cultural differences are real rather than artifacts of one method.",
          answer: true,
          explain: "When independent methods and samples recover the same dimensions, the findings are less likely to reflect a single study's quirks."
        },
        {
          type: "truefalse",
          q: "Because the frameworks overlap heavily, they are considered completely identical with no unique dimensions.",
          answer: false,
          explain: "They overlap on core dimensions but each adds distinctive contributions, such as GLOBE's practices-versus-values split and Gelfand's tightness."
        },
        {
          type: "fill",
          q: "The repeated appearance of the same construct across independent methods is a form of ____ validity.",
          answer: "convergent",
          accept: ["convergent"],
          explain: "Convergent validity means different measures of the same underlying idea agree with one another."
        },
        {
          type: "order",
          q: "Order these frameworks from earliest to most recent by their landmark publication.",
          items: ["Kluckhohn and Strodtbeck (1961)", "Hofstede (1980)", "Schwartz values (1992)", "GLOBE (2004)", "Gelfand tightness (2011)"],
          explain: "The frameworks emerged over five decades, each building on and extending the value dimensions that came before."
        }
      ]
    }
  ]
});
