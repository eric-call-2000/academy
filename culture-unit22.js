window.ACADEMY.addUnit("culture", {
  id: "unit-22",
  title: "Ecological and Historical Origins",
  color: "#e08a1e",
  icon: "🌍",
  description: "Explores why cultures differ psychologically by tracing values to environment, subsistence, disease, mobility, settlement, development, and religion.",
  lessons: [
    {
      id: "l169",
      title: "Subsistence-style theory",
      intro: "How a society makes its living - herding, farming, or fishing - shapes how its members think and relate.",
      questions: [
        {
          type: "mcq",
          q: "Uskul, Kitayama and Nisbett (2008) compared herding, farming and fishing communities in Turkey's Black Sea region. Which subsistence style went with the most independent, analytic thinking?",
          choices: ["Fishing", "Farming", "Herding", "Foraging"],
          answer: 2,
          explain: "Herders, who manage mobile livestock more individually, thought more analytically, while the interdependent farmers and fishers thought more holistically."
        },
        {
          type: "truefalse",
          q: "Farming and fishing tend to require coordinated, interdependent labor, which Uskul and colleagues linked to more holistic thinking.",
          answer: true,
          explain: "Cooperative subsistence fosters attention to relationships and context, the hallmark of holistic cognition."
        },
        {
          type: "fill",
          q: "The idea that a group's mode of subsistence shapes its psychology is central to the ____ framework associated with John Berry.",
          answer: "ecocultural",
          accept: ["ecocultural", "eco-cultural", "eco cultural"],
          explain: "Berry's ecocultural framework traces psychological differences to ecology and the economic activities a group uses to survive."
        },
        {
          type: "match",
          q: "Match each subsistence style to what makes it distinctive.",
          pairs: [
            ["Herding", "Mobile livestock vulnerable to theft, fostering vigilance and honor"],
            ["Farming", "Fixed land needing cooperative, coordinated labor"],
            ["Fishing", "Shared boats and catches requiring teamwork"],
            ["Foraging", "Small mobile bands gathering wild food"]
          ],
          explain: "Each economy sets up different social demands that, over time, shape typical ways of thinking and relating."
        },
        {
          type: "order",
          q: "Put the subsistence-style causal chain in order, from root cause to outcome.",
          items: ["Local ecology", "Mode of subsistence", "Social organization", "Individual psychology"],
          explain: "Ecology constrains how people make a living, which structures social life and ultimately shapes individual minds."
        },
        {
          type: "mcq",
          q: "Nisbett and Cohen argued that herding societies often develop a 'culture of honor' because...",
          choices: ["Herders have no laws or government at all", "Livestock can be stolen quickly, so a tough reputation deters theft", "Herding makes people physically stronger", "Farmers always attack herders first"],
          answer: 1,
          explain: "Because a herd can be rustled in moments, projecting toughness and a willingness to retaliate protects a herder's wealth."
        },
        {
          type: "truefalse",
          q: "Subsistence-style theory holds that genes, not ecology and economy, are the main reason herding and farming societies differ psychologically.",
          answer: false,
          explain: "The theory explains differences through ecology and subsistence practices, not genetic differences between groups."
        }
      ]
    },
    {
      id: "l170",
      title: "Rice versus wheat theory",
      intro: "Thomas Talhelm's rice theory explains a psychological divide within a single country: rice-growing versus wheat-growing China.",
      questions: [
        {
          type: "mcq",
          q: "In which journal did Talhelm and colleagues publish the rice theory in 2014?",
          choices: ["Nature", "Science", "PNAS", "Psychological Science"],
          answer: 1,
          explain: "The paper, 'Large-Scale Psychological Differences Within China Explained by Rice Versus Wheat Agriculture,' appeared in Science in 2014."
        },
        {
          type: "fill",
          q: "Paddy rice depends on shared ____ systems, forcing neighboring farmers to coordinate, which Talhelm tied to interdependence.",
          answer: "irrigation",
          accept: ["irrigation", "water"],
          explain: "Rice paddies must share and schedule water, so rice villages evolved dense webs of cooperation."
        },
        {
          type: "truefalse",
          q: "Talhelm found that people from rice-growing regions of China think more interdependently and holistically than people from wheat-growing regions.",
          answer: true,
          explain: "Rice's cooperative demands were linked to more holistic, interdependent psychology than the more individualistic wheat regions."
        },
        {
          type: "mcq",
          q: "Roughly how much more labor does paddy rice require compared with wheat, according to the rice theory?",
          choices: ["About half as much", "The same amount", "About twice as much", "About ten times as much"],
          answer: 2,
          explain: "Paddy rice takes roughly twice the labor of wheat, which historically demanded cooperative labor exchange among households."
        },
        {
          type: "match",
          q: "Match each region or crop to its description in the rice theory.",
          pairs: [
            ["Rice-growing south", "More interdependent and holistic thought"],
            ["Wheat-growing north", "More individualistic and analytic thought"],
            ["Paddy rice", "Labor-intensive crop needing irrigation coordination"],
            ["Dryland wheat", "Rain-fed crop one household can farm alone"]
          ],
          explain: "The contrast in farming demands maps onto a measurable psychological divide within one country."
        },
        {
          type: "order",
          q: "Order the steps of the rice theory's logic.",
          items: ["Grow paddy rice", "Coordinate irrigation and labor", "Develop interdependent norms", "Show more holistic thinking"],
          explain: "Cooperative rice farming builds interdependent norms that carry over into how people think."
        },
        {
          type: "truefalse",
          q: "The rice theory argues the north-south differences are explained entirely by modern wealth (GDP), not farming heritage.",
          answer: false,
          explain: "Talhelm statistically controlled for wealth and modernization, and the rice-wheat pattern still held."
        }
      ]
    },
    {
      id: "l171",
      title: "The pathogen prevalence hypothesis",
      intro: "Fincher and Thornhill proposed that regions with heavier historical disease burdens became more collectivist.",
      questions: [
        {
          type: "mcq",
          q: "Fincher, Thornhill, Murray and Schaller (2008) found that higher historical pathogen prevalence predicts higher...",
          choices: ["Individualism", "Collectivism", "Literacy", "Relational mobility"],
          answer: 1,
          explain: "Regions with heavier historical disease burdens tended to be more collectivistic across their cross-national analysis."
        },
        {
          type: "truefalse",
          q: "The pathogen prevalence hypothesis proposes that collectivist practices, such as conformity and in-group favoritism, help limit the spread of infectious disease.",
          answer: true,
          explain: "Sticking to tradition and avoiding out-groups reduces contact with novel pathogens, an anti-disease function of collectivism."
        },
        {
          type: "fill",
          q: "Because collectivism discourages contact with out-groups and enforces traditional norms, it can reduce the spread of infectious ____.",
          answer: "disease",
          accept: ["disease", "diseases", "pathogens"],
          explain: "Limiting novel contacts and preserving protective customs lowers exposure to infectious disease."
        },
        {
          type: "mcq",
          q: "Which pair of behaviors linked to collectivism could most plausibly reduce disease transmission?",
          choices: ["Traveling widely and marrying strangers", "Avoiding out-group contact and conforming to food and hygiene traditions", "Ignoring elders and improvising customs", "Preferring novelty and open borders"],
          answer: 1,
          explain: "Out-group avoidance limits new pathogens, and conformity preserves customs that historically curbed infection."
        },
        {
          type: "match",
          q: "Match each concept to its role in the pathogen prevalence hypothesis.",
          pairs: [
            ["High pathogen load", "Predicts more collectivism"],
            ["Low pathogen load", "Permits more individualism"],
            ["Out-group avoidance", "Limits exposure to novel pathogens"],
            ["Conformity to tradition", "Preserves protective customs"]
          ],
          explain: "Disease pressure is treated as an ecological force selecting for collectivist norms."
        },
        {
          type: "order",
          q: "Order the causal chain of the pathogen prevalence hypothesis.",
          items: ["High local disease burden", "Selection for wary, conforming behavior", "Collectivist cultural norms", "Reduced pathogen transmission"],
          explain: "Disease pressure favors cautious, conforming norms that, once collective, further reduce transmission."
        },
        {
          type: "truefalse",
          q: "The hypothesis claims that individualist cultures historically faced higher pathogen loads than collectivist ones.",
          answer: false,
          explain: "It is the reverse: higher historical pathogen loads are associated with collectivism, not individualism."
        }
      ]
    },
    {
      id: "l172",
      title: "Behavioral immune system",
      intro: "Mark Schaller's behavioral immune system is a set of psychological defenses that detect and avoid disease cues, sometimes spilling over into social attitudes.",
      questions: [
        {
          type: "mcq",
          q: "Who coined the term 'behavioral immune system'?",
          choices: ["Ara Norenzayan", "Mark Schaller", "Ronald Inglehart", "Thomas Talhelm"],
          answer: 1,
          explain: "Psychologist Mark Schaller named the behavioral immune system, a set of psychological defenses against disease."
        },
        {
          type: "truefalse",
          q: "The behavioral immune system relies heavily on the emotion of disgust to motivate avoidance of potential contaminants.",
          answer: true,
          explain: "Disgust flags possible sources of infection and drives people to keep their distance."
        },
        {
          type: "fill",
          q: "The core emotion that drives the behavioral immune system to reject spoiled food or visibly sick people is ____.",
          answer: "disgust",
          accept: ["disgust"],
          explain: "Disgust is the behavioral immune system's front-line signal to avoid likely contaminants."
        },
        {
          type: "mcq",
          q: "Why is the behavioral immune system described as 'smoke-detector'-like?",
          choices: ["It only reacts to real, confirmed infections", "It errs toward false alarms, treating harmless cues as threats", "It never makes mistakes", "It shuts off when people feel safe"],
          answer: 1,
          explain: "Because missing a real pathogen is costly, the system over-reacts, flagging many harmless cues just in case."
        },
        {
          type: "match",
          q: "Match each term to its meaning in behavioral immune system research.",
          pairs: [
            ["Behavioral immune system", "Psychological disease-avoidance mechanisms"],
            ["Disgust", "Emotion cueing rejection of contaminants"],
            ["Xenophobia", "Wariness of unfamiliar out-groups as possible disease carriers"],
            ["Conformity", "Sticking to safe, familiar customs"]
          ],
          explain: "The same avoidance system that rejects bad food can, over-generalized, fuel wariness of unfamiliar people."
        },
        {
          type: "order",
          q: "Order how the behavioral immune system typically operates.",
          items: ["Perceive a disease cue", "Feel disgust", "Avoid the source", "Lower infection risk"],
          explain: "A cue triggers disgust, which prompts avoidance and ultimately reduces exposure."
        },
        {
          type: "truefalse",
          q: "Experiments show that making people feel vulnerable to disease can increase prejudice toward unfamiliar out-groups.",
          answer: true,
          explain: "Faulkner, Schaller and colleagues (2004) found that disease salience heightened xenophobic attitudes, an over-extension of disease avoidance."
        }
      ]
    },
    {
      id: "l173",
      title: "Relational mobility",
      intro: "Robert Thomson's 39-country study measured relational mobility - how freely people can form new and end old relationships.",
      questions: [
        {
          type: "mcq",
          q: "Relational mobility refers to...",
          choices: ["How wealthy a person's social network is", "How far people physically move in a lifetime", "How much freedom people have to form new and end old relationships", "How quickly a language changes over time"],
          answer: 2,
          explain: "Relational mobility captures how open a society is to choosing, replacing, and leaving relationships."
        },
        {
          type: "fill",
          q: "Thomson and colleagues (2018) surveyed ____ countries to measure relational mobility.",
          answer: "39",
          accept: ["39", "thirty-nine", "thirty nine"],
          explain: "Their PNAS study spanned 39 countries, linking relational mobility to social behavior and history."
        },
        {
          type: "truefalse",
          q: "In high relational-mobility societies, people tend to invest more in self-disclosure and actively maintaining friendships because relationships are not guaranteed.",
          answer: true,
          explain: "When relationships can end, people work harder to attract and keep partners, disclosing more and offering support."
        },
        {
          type: "mcq",
          q: "Thomson linked LOW relational mobility to which historical conditions?",
          choices: ["A history of nomadic trade and open borders", "A history of settled subsistence farming and higher environmental threat", "Recent industrialization only", "No historical factors at all"],
          answer: 1,
          explain: "Societies rooted in settled farming and facing greater ecological threat showed lower relational mobility and tighter, fixed ties."
        },
        {
          type: "match",
          q: "Match each term to its description.",
          pairs: [
            ["High relational mobility", "Easy to form and leave relationships"],
            ["Low relational mobility", "Fixed, hard-to-change relationships"],
            ["Settled farming heritage", "Predicts lower relational mobility"],
            ["Trust in strangers", "Higher where relational mobility is high"]
          ],
          explain: "Relational mobility helps explain why trust and self-disclosure toward new people vary across societies."
        },
        {
          type: "order",
          q: "Order the explanatory chain in Thomson's relational mobility research.",
          items: ["Ecological and historical conditions", "Level of relational mobility", "Everyday social behaviors like trust and self-disclosure"],
          explain: "History shapes a society's relational mobility, which in turn shapes how people behave toward one another."
        },
        {
          type: "truefalse",
          q: "Thomson found that relational mobility was uniformly high across all 39 countries studied.",
          answer: false,
          explain: "Relational mobility varied widely, tending to be higher in the Americas and lower in much of East Asia and the Middle East and North Africa."
        }
      ]
    },
    {
      id: "l174",
      title: "Frontier and voluntary settlement",
      intro: "Shinobu Kitayama's research on Japan's Hokkaido frontier shows how voluntary settlement breeds independent, individualist psychology.",
      questions: [
        {
          type: "mcq",
          q: "Kitayama and colleagues studied which northern Japanese island, settled voluntarily in the 1800s, as a natural test of frontier psychology?",
          choices: ["Honshu", "Kyushu", "Hokkaido", "Okinawa"],
          answer: 2,
          explain: "Hokkaido was Japan's frontier, settled voluntarily in the 19th century, making it ideal for studying frontier individualism."
        },
        {
          type: "truefalse",
          q: "Kitayama found that people in Hokkaido show more independent, individualistic psychology than people in mainland Japan.",
          answer: true,
          explain: "Hokkaido residents showed hallmarks of independence, resembling Americans more than mainland Japanese on several measures."
        },
        {
          type: "fill",
          q: "The idea that regions settled by self-selected pioneers become more individualistic is called the ____ settlement theory of individualism.",
          answer: "voluntary",
          accept: ["voluntary"],
          explain: "Voluntary settlement theory holds that frontiers attract and reward independent-minded people."
        },
        {
          type: "mcq",
          q: "Which finding supported frontier independence in Hokkaido?",
          choices: ["Happiness and pride were tied more to personal achievement than to social harmony", "People valued conformity far more than mainlanders", "Residents had no sense of personal goals", "Emotions were identical to mainland Japan"],
          answer: 0,
          explain: "Linking good feelings to personal accomplishment rather than group harmony is a signature of the independent, individualist self."
        },
        {
          type: "match",
          q: "Match each item to its description in voluntary settlement research.",
          pairs: [
            ["Hokkaido", "Japan's voluntarily settled northern frontier"],
            ["Voluntary settlement", "Self-selection of independent-minded pioneers"],
            ["American West", "Classic frontier tied to individualism"],
            ["Mainland Japan", "More interdependent than Hokkaido"]
          ],
          explain: "Comparing frontier and heartland regions isolates settlement history as a driver of individualism."
        },
        {
          type: "order",
          q: "Order the voluntary-settlement causal chain.",
          items: ["Independent-minded people migrate to a frontier", "The frontier rewards self-reliance", "Individualist norms take root", "Later generations remain more independent"],
          explain: "Self-selection plus a self-reliant environment seeds individualist norms that persist across generations."
        },
        {
          type: "truefalse",
          q: "Frederick Jackson Turner's 'frontier thesis' argued that the American frontier had no effect on national character.",
          answer: false,
          explain: "Turner argued the opposite: the frontier experience helped forge American individualism and democracy."
        }
      ]
    },
    {
      id: "l175",
      title: "Modernization and value change",
      intro: "Ronald Inglehart used the World Values Survey to show how economic development gradually shifts a society's values.",
      questions: [
        {
          type: "mcq",
          q: "Ronald Inglehart is best known for founding and analyzing which large cross-national survey?",
          choices: ["World Values Survey", "Gallup World Poll", "Big Five Inventory", "PISA"],
          answer: 0,
          explain: "Inglehart co-founded the World Values Survey, tracking how values change with economic development."
        },
        {
          type: "truefalse",
          q: "Inglehart argued that as societies grow wealthier and more secure, they shift from 'survival' values toward 'self-expression' values.",
          answer: true,
          explain: "Rising existential security frees people to prioritize autonomy, tolerance, and quality of life over sheer survival."
        },
        {
          type: "fill",
          q: "Inglehart's two main value dimensions are traditional versus secular-rational, and survival versus ____ values.",
          answer: "self-expression",
          accept: ["self-expression", "self expression", "selfexpression"],
          explain: "The survival-to-self-expression axis captures the shift that accompanies economic development."
        },
        {
          type: "mcq",
          q: "Inglehart named the generational shift from prioritizing economic security to prioritizing autonomy and quality of life the rise of...",
          choices: ["Behaviorism", "Collectivism", "Modernization", "Postmaterialism"],
          answer: 3,
          explain: "Younger cohorts raised in security became 'postmaterialist,' valuing self-expression over material and physical security."
        },
        {
          type: "match",
          q: "Match each value type to its emphasis in Inglehart's framework.",
          pairs: [
            ["Traditional values", "Religion, family, and deference to authority"],
            ["Secular-rational values", "Less emphasis on religion and tradition"],
            ["Survival values", "Economic and physical security"],
            ["Self-expression values", "Autonomy, tolerance, and participation"]
          ],
          explain: "These two axes organize the world's cultures on Inglehart's values map."
        },
        {
          type: "order",
          q: "Order Inglehart's modernization sequence.",
          items: ["Economic development", "Greater existential security", "Shift toward self-expression values", "Rising demands for democracy and tolerance"],
          explain: "Development brings security, which shifts values and eventually fuels demands for freedom and inclusion."
        },
        {
          type: "truefalse",
          q: "Inglehart claimed that value change happens instantly the moment a society's income rises.",
          answer: false,
          explain: "He argued value change is gradual, driven largely by intergenerational replacement as new cohorts grow up secure."
        }
      ]
    },
    {
      id: "l176",
      title: "Big Gods and moralizing religion",
      intro: "Ara Norenzayan argues that belief in big, moralizing gods helped strangers cooperate and let human societies scale up.",
      questions: [
        {
          type: "mcq",
          q: "Ara Norenzayan's 2013 book on religion and cooperation is titled...",
          choices: ["The Righteous Mind", "Big Gods", "The God Delusion", "Sapiens"],
          answer: 1,
          explain: "'Big Gods: How Religion Transformed Cooperation and Conflict' lays out his argument about moralizing religion."
        },
        {
          type: "truefalse",
          q: "Norenzayan summarizes his theory with the phrase 'watched people are nice people' - feeling observed by a moralizing god encourages good behavior.",
          answer: true,
          explain: "Believing a powerful god is watching raises the felt cost of cheating, nudging believers toward cooperation."
        },
        {
          type: "fill",
          q: "Norenzayan calls large, all-knowing, morally concerned deities '____ Gods.'",
          answer: "big",
          accept: ["big"],
          explain: "'Big Gods' are powerful, omniscient, morally invested deities who monitor human conduct."
        },
        {
          type: "mcq",
          q: "According to Norenzayan, belief in moralizing high gods helped human societies...",
          choices: ["Shrink back to small family bands", "Abandon all rituals", "Expand cooperation beyond kin to large groups of strangers", "Stop trading with neighbors"],
          answer: 2,
          explain: "Shared belief in a watching, moralizing god let unrelated strangers trust and cooperate, enabling larger societies."
        },
        {
          type: "match",
          q: "Match each concept to its meaning in Norenzayan's account.",
          pairs: [
            ["Big Gods", "Large moralizing deities who monitor behavior"],
            ["Supernatural monitoring", "Feeling watched promotes good conduct"],
            ["Prosociality", "Cooperation among unrelated strangers"],
            ["Costly rituals", "Commitment signals that build group trust"]
          ],
          explain: "Monitoring gods and costly displays of faith together made large-scale cooperation possible."
        },
        {
          type: "order",
          q: "Order Norenzayan's proposed sequence for the rise of large societies.",
          items: ["Small kin-based groups", "Belief in moralizing gods spreads", "Strangers trust and cooperate", "Large-scale societies emerge"],
          explain: "Moralizing religion extended trust beyond kin, scaling cooperation up to big, complex societies."
        },
        {
          type: "truefalse",
          q: "Norenzayan claims that only moralizing religions can ever sustain large-scale cooperation, with secular institutions unable to substitute.",
          answer: false,
          explain: "He notes that secular institutions like courts and police can serve as alternative sources of monitoring and trust - 'Big Gods or Big Governments.'"
        }
      ]
    }
  ]
});
