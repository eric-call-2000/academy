window.ACADEMY.addUnit("culture", {
  id: "unit-23",
  title: "Acculturation and Bicultural Minds",
  color: "#e08a1e",
  icon: "🌐",
  description: "Explores what happens in the mind when cultures meet within a single person, from Berry's acculturation strategies to cultural frame switching, bicultural identity, and the creative payoff of multicultural experience.",
  lessons: [
    {
      id: "l177",
      title: "Berry's acculturation model",
      intro: "John Berry mapped four acculturation strategies onto two simple questions about heritage and host cultures.",
      questions: [
        {
          type: "mcq",
          q: "Berry's fourfold model is built on the answers to which two underlying questions?",
          choices: [
            "Whether to maintain one's heritage culture, and whether to have contact with the host society",
            "Whether to learn the host language, and whether to earn citizenship",
            "Whether one is wealthy, and whether one is educated",
            "Whether one migrated voluntarily, and whether one intends to return home"
          ],
          answer: 0,
          explain: "Berry crossed two dimensions - maintaining one's heritage culture and seeking contact with the host society - to derive the four strategies."
        },
        {
          type: "match",
          q: "Match each acculturation strategy with its definition.",
          pairs: [
            ["Integration", "Maintains the heritage culture and also engages with the host society"],
            ["Assimilation", "Gives up the heritage culture and adopts the host culture"],
            ["Separation", "Retains the heritage culture and avoids the host society"],
            ["Marginalization", "Rejects both the heritage culture and the host society"]
          ],
          explain: "The four strategies come from the yes/no combinations of Berry's two questions about heritage maintenance and host contact."
        },
        {
          type: "truefalse",
          q: "In Berry's model, integration is generally linked to the most positive psychological outcomes.",
          answer: true,
          explain: "Across many studies, biculturals who integrate - keeping their heritage while engaging the host culture - tend to show the best adjustment and well-being."
        },
        {
          type: "fill",
          q: "The strategy of abandoning one's heritage culture while fully adopting the host culture is called ____.",
          answer: "assimilation",
          accept: ["assimilation"],
          explain: "Assimilation is heritage-culture low and host-culture high: the person melts into the mainstream and lets the origin culture fade."
        },
        {
          type: "mcq",
          q: "Which strategy describes someone who keeps strong ties to their heritage but deliberately avoids the mainstream host society?",
          choices: [
            "Assimilation",
            "Integration",
            "Separation",
            "Marginalization"
          ],
          answer: 2,
          explain: "Separation is heritage-culture high and host-contact low - the person stays within the origin community and withdraws from the host society."
        },
        {
          type: "fill",
          q: "When a person identifies with neither their heritage culture nor the host society, Berry calls this ____.",
          answer: "marginalization",
          accept: ["marginalization"],
          explain: "Marginalization is low on both dimensions and is typically the least common and least adaptive outcome."
        },
        {
          type: "truefalse",
          q: "Berry's model assumes that adopting the host culture necessarily requires abandoning one's heritage culture.",
          answer: false,
          explain: "That is the older unidimensional assumption. Berry treats heritage and host orientation as independent, which is exactly why integration is possible."
        }
      ]
    },
    {
      id: "l178",
      title: "Acculturative stress",
      intro: "Adapting to a new culture can strain well-being, and the strategy a person uses shapes how heavy that strain becomes.",
      questions: [
        {
          type: "mcq",
          q: "What does the term acculturative stress refer to?",
          choices: [
            "The excitement immigrants feel when they first arrive in a new country",
            "The reduction in well-being and stress reactions that can arise from the demands of adapting to a new culture",
            "A physical illness caused by unfamiliar foods",
            "The economic cost of relocating"
          ],
          answer: 1,
          explain: "Berry described acculturative stress as the psychological strain, anxiety, and lowered well-being that adapting to a new cultural context can produce."
        },
        {
          type: "truefalse",
          q: "Berry proposed that marginalization tends to be associated with the highest levels of acculturative stress.",
          answer: true,
          explain: "Being cut off from both the heritage culture and the host society leaves the least support, so marginalization is usually the most stressful strategy."
        },
        {
          type: "match",
          q: "Match each idea to its description.",
          pairs: [
            ["Psychological adaptation", "Emotional well-being and satisfaction in the new culture"],
            ["Sociocultural adaptation", "The ability to manage daily life and fit into the host society"],
            ["Integration", "Strategy associated with the lowest acculturative stress"],
            ["Marginalization", "Strategy associated with the highest acculturative stress"]
          ],
          explain: "Colleen Ward split adaptation into a psychological (emotional) side and a sociocultural (behavioral competence) side, and stress varies by strategy."
        },
        {
          type: "fill",
          q: "Across many studies, the ____ strategy is linked with the least acculturative stress and the best well-being.",
          answer: "integration",
          accept: ["integration"],
          explain: "Integrating gives a person support from both cultures, which buffers stress better than assimilation, separation, or marginalization."
        },
        {
          type: "mcq",
          q: "Which factor tends to REDUCE acculturative stress?",
          choices: [
            "Perceived discrimination from the host society",
            "A large cultural distance between the heritage and host cultures",
            "Being forced to migrate involuntarily",
            "Strong social support from family and community"
          ],
          answer: 3,
          explain: "Social support is a well-documented buffer; discrimination, large cultural distance, and involuntary migration all tend to raise stress."
        },
        {
          type: "truefalse",
          q: "Acculturative stress is best understood as a permanent mental illness that never improves over time.",
          answer: false,
          explain: "It is a stress response to the demands of adaptation, and it typically eases as people build skills, support, and familiarity with the new culture."
        },
        {
          type: "fill",
          q: "Colleen Ward distinguished psychological adaptation from ____ adaptation, which concerns fitting into daily life.",
          answer: "sociocultural",
          accept: ["sociocultural", "socio-cultural"],
          explain: "Sociocultural adaptation is about behavioral competence - navigating jobs, schools, and social norms - as opposed to purely emotional well-being."
        }
      ]
    },
    {
      id: "l179",
      title: "Bidimensional acculturation",
      intro: "Modern models treat heritage identification and host identification as two independent axes rather than a single tug-of-war.",
      questions: [
        {
          type: "mcq",
          q: "The bidimensional model treats a person's heritage-culture orientation and host-culture orientation as...",
          choices: [
            "two ends of a single continuum",
            "two independent dimensions that can each be high or low",
            "identical constructs that always move together",
            "irrelevant to identity"
          ],
          answer: 1,
          explain: "The bidimensional view lets the two orientations vary separately, so a person can be high on one, both, or neither."
        },
        {
          type: "truefalse",
          q: "The older unidimensional model assumes that gaining the host culture and keeping the heritage culture are fully independent.",
          answer: false,
          explain: "The unidimensional model puts them at opposite ends of one scale, so gaining the host culture supposedly means losing the heritage culture. Independence is the bidimensional claim."
        },
        {
          type: "match",
          q: "Match each model or outcome to its bidimensional description.",
          pairs: [
            ["Unidimensional model", "Heritage and host cultures sit at opposite ends of one scale"],
            ["Bidimensional model", "Heritage and host orientations are separate axes"],
            ["Integration", "High on both the heritage and the host dimensions"],
            ["Marginalization", "Low on both the heritage and the host dimensions"]
          ],
          explain: "When you separate the two axes, Berry's four strategies fall out naturally as the high/low combinations."
        },
        {
          type: "fill",
          q: "In the bidimensional view, identifying strongly with your heritage culture and identifying strongly with the host culture are ____ of each other.",
          answer: "independent",
          accept: ["independent"],
          explain: "Because the two orientations are independent, a bicultural person can hold both strongly at once, which is what integration means."
        },
        {
          type: "mcq",
          q: "Ryder, Alden, and Paulhus (2000) supported the bidimensional model by developing which measure?",
          choices: [
            "The Implicit Association Test",
            "The Big Five Inventory",
            "The Vancouver Index of Acculturation",
            "The Marlowe-Crowne Social Desirability Scale"
          ],
          answer: 2,
          explain: "Their Vancouver Index of Acculturation (VIA) measured heritage and mainstream orientations separately and fit the data better than a single bipolar scale."
        },
        {
          type: "truefalse",
          q: "The bidimensional model can represent a person who is highly engaged with both their heritage culture and the host culture at the same time.",
          answer: true,
          explain: "Representing that both-and case is precisely the advantage the bidimensional model has over the either-or unidimensional model."
        },
        {
          type: "fill",
          q: "The older unidimensional model placed full assimilation and full heritage retention at opposite ends of a single ____.",
          answer: "continuum",
          accept: ["continuum", "scale", "dimension"],
          explain: "Treating acculturation as one continuum forces the false trade-off that any move toward the host culture is a loss of heritage."
        }
      ]
    },
    {
      id: "l180",
      title: "Cultural frame switching",
      intro: "Hong and Chiu's dynamic constructivist approach shows that biculturals can shift interpretive lenses depending on the cultural cues around them.",
      questions: [
        {
          type: "mcq",
          q: "Cultural frame switching refers to...",
          choices: [
            "biculturals shifting between two cultural lenses depending on cues in the situation",
            "immigrants permanently forgetting their first culture",
            "switching languages in the middle of a sentence",
            "changing one's legal citizenship"
          ],
          answer: 0,
          explain: "Cultural frame switching (CFS) is the movement between two internalized cultural interpretive frames in response to situational cues."
        },
        {
          type: "truefalse",
          q: "The dynamic constructivist approach views culture as a network of knowledge structures that can be activated by cues, rather than a single fixed essence.",
          answer: true,
          explain: "Hong and colleagues argued that people carry loose networks of cultural knowledge, and cues make particular constructs momentarily accessible."
        },
        {
          type: "fill",
          q: "According to Hong and colleagues, cultural frame switching is triggered by cultural ____ in the environment.",
          answer: "cues",
          accept: ["cues", "cue", "primes", "icons"],
          explain: "A cultural cue - an icon, symbol, or language - makes one cultural knowledge network more accessible and shifts interpretation toward it."
        },
        {
          type: "match",
          q: "Match each term to its meaning in the dynamic constructivist approach.",
          pairs: [
            ["Cultural frame switching", "Shifting the interpretive lens in response to cultural cues"],
            ["Dynamic constructivism", "Culture as networks of knowledge activated situationally"],
            ["Cultural cue", "An image or symbol that makes one culture accessible"],
            ["Bicultural individual", "A person who has internalized two cultures"]
          ],
          explain: "The approach is dynamic because activation shifts with context, and constructivist because meaning is built from whichever knowledge is currently accessible."
        },
        {
          type: "mcq",
          q: "The dynamic constructivist approach to culture and cognition was articulated by which team in a 2000 American Psychologist article?",
          choices: [
            "Markus and Kitayama",
            "Triandis and Hofstede",
            "Berry and Ward",
            "Hong, Morris, Chiu, and Benet-Martinez"
          ],
          answer: 3,
          explain: "Hong, Morris, Chiu, and Benet-Martinez (2000) introduced the dynamic constructivist framework and the cultural frame switching evidence for it."
        },
        {
          type: "truefalse",
          q: "Dynamic constructivism claims biculturals fuse their two cultures into one system that never responds to context.",
          answer: false,
          explain: "It claims the opposite: the two frames stay available and context determines which one guides interpretation at a given moment."
        },
        {
          type: "order",
          q: "Put the steps of cultural frame switching in order.",
          items: [
            "A person internalizes two cultures",
            "A cultural cue appears in the situation",
            "The matching cultural knowledge network becomes accessible",
            "The person interprets events through that cultural frame"
          ],
          explain: "Two internalized cultures plus a situational cue equal the temporary activation of one frame, which then colors interpretation."
        }
      ]
    },
    {
      id: "l181",
      title: "Priming cultural icons",
      intro: "Hong and colleagues showed that flashing American versus Chinese icons could swing biculturals' judgments toward the primed culture.",
      questions: [
        {
          type: "mcq",
          q: "In Hong et al.'s priming studies, showing the Statue of Liberty tended to make Hong Kong biculturals...",
          choices: [
            "make more external, situational attributions",
            "make more internal, dispositional attributions, as Americans typically do",
            "refuse to answer the questions",
            "score lower on intelligence tests"
          ],
          answer: 1,
          explain: "American icons activated a Western frame, nudging biculturals toward the internal, dispositional attributions common in individualist cultures."
        },
        {
          type: "mcq",
          q: "Priming the Great Wall of China tended to shift biculturals toward...",
          choices: [
            "more external, situational attributions, as East Asians typically show",
            "more internal, dispositional attributions",
            "no measurable change at all",
            "greater physical aggression"
          ],
          answer: 0,
          explain: "Chinese icons activated an East Asian frame, nudging biculturals toward the situational, context-sensitive attributions common in collectivist cultures."
        },
        {
          type: "truefalse",
          q: "The fish attribution task asked participants to explain why an individual fish was swimming ahead of a group of fish.",
          answer: true,
          explain: "Participants judged whether the lone fish was leading (an internal cause) or being chased by the group (an external cause), revealing their attribution style."
        },
        {
          type: "fill",
          q: "American cultural primes pushed biculturals toward more ____, dispositional explanations of behavior.",
          answer: "internal",
          accept: ["internal", "dispositional"],
          explain: "Internal or dispositional attributions locate the cause inside the individual, a pattern more typical of Western, individualist thinking."
        },
        {
          type: "match",
          q: "Match each element of the priming studies with its role.",
          pairs: [
            ["American icons", "Prompted more internal, dispositional attributions"],
            ["Chinese icons", "Prompted more external, situational attributions"],
            ["Fish attribution task", "Judging whether a lone fish leads or is chased"],
            ["Priming", "Briefly showing cultural symbols to activate a frame"]
          ],
          explain: "By varying only the icons shown, the researchers demonstrated that a fleeting cue can switch which cultural frame guides judgment."
        },
        {
          type: "truefalse",
          q: "The priming studies showed that biculturals' attributions were completely unaffected by which cultural icons they saw.",
          answer: false,
          explain: "The whole point was the opposite: attributions shifted systematically toward whichever culture's icons had just been shown."
        },
        {
          type: "order",
          q: "Put the steps of Hong et al.'s priming procedure in order.",
          items: [
            "Recruit Hong Kong biculturals",
            "Show American, Chinese, or neutral icons",
            "Present the ambiguous fish scene",
            "Record whether attributions are internal or external"
          ],
          explain: "The design varied only the cultural primes, then measured attribution style, isolating the priming effect on frame switching."
        }
      ]
    },
    {
      id: "l182",
      title: "Bicultural identity integration",
      intro: "Benet-Martinez's work distinguishes biculturals who blend their two identities from those who feel torn between them.",
      questions: [
        {
          type: "mcq",
          q: "Bicultural identity integration (BII) describes...",
          choices: [
            "how many languages a person can speak",
            "whether an immigrant obtains legal citizenship",
            "the degree to which a bicultural sees their two cultural identities as compatible versus conflicting",
            "the income gap between immigrants and native-born residents"
          ],
          answer: 2,
          explain: "BII is an individual difference in whether a person perceives their two cultures as blended and harmonious or as separate and clashing."
        },
        {
          type: "truefalse",
          q: "Veronica Benet-Martinez is the researcher most associated with the concept of bicultural identity integration.",
          answer: true,
          explain: "Benet-Martinez and colleagues developed the BII construct and its measures in the early 2000s."
        },
        {
          type: "match",
          q: "Match each BII idea to its meaning.",
          pairs: [
            ["Cultural blendedness", "Feeling the two cultures are combined versus kept separate"],
            ["Cultural harmony", "Feeling the two cultures are compatible versus in conflict"],
            ["High BII", "Sees the two identities as complementary"],
            ["Low BII", "Sees the two identities as oppositional"]
          ],
          explain: "BII has two components - blendedness versus compartmentalization, and harmony versus conflict - and people range from high to low on each."
        },
        {
          type: "fill",
          q: "Low-BII biculturals tend to experience their two cultures as being in ____ with each other.",
          answer: "conflict",
          accept: ["conflict", "tension", "opposition"],
          explain: "Low BII means the two cultural identities feel oppositional and hard to reconcile, rather than blended and harmonious."
        },
        {
          type: "mcq",
          q: "In Benet-Martinez et al.'s (2002) priming study, how did LOW-BII biculturals typically respond to cultural primes?",
          choices: [
            "They assimilated smoothly toward the primed culture",
            "They showed no response at all",
            "They simply became more creative",
            "They showed a contrastive (reverse) reaction, behaving opposite to the prime"
          ],
          answer: 3,
          explain: "Because low-BII people feel their cultures clash, a prime could trigger a reactive contrast, shifting them away from rather than toward the primed culture."
        },
        {
          type: "truefalse",
          q: "High-BII and low-BII biculturals respond to cultural primes in exactly the same way.",
          answer: false,
          explain: "High-BII people tend to assimilate toward the prime, while low-BII people often show a contrastive reaction - the same cue produces opposite shifts."
        },
        {
          type: "fill",
          q: "One component of BII, cultural ____, captures whether a person feels their cultures are combined or compartmentalized.",
          answer: "blendedness",
          accept: ["blendedness", "blend"],
          explain: "Cultural blendedness (versus compartmentalization) is one of the two BII dimensions, alongside cultural harmony versus conflict."
        }
      ]
    },
    {
      id: "l183",
      title: "Heritage and second-generation shifts",
      intro: "Acculturation unfolds across generations, and immigrant parents and their children often adapt at different rates.",
      questions: [
        {
          type: "mcq",
          q: "The 'second generation' typically refers to...",
          choices: [
            "immigrants who arrived in the host country as adults",
            "the children of immigrants, born or raised in the host country",
            "grandparents who stayed in the home country",
            "temporary tourists and visitors"
          ],
          answer: 1,
          explain: "The first generation are the immigrants themselves; the second generation are their children raised in the host society."
        },
        {
          type: "truefalse",
          q: "Compared with their immigrant parents, second-generation children are usually more oriented toward the host culture.",
          answer: true,
          explain: "Growing up inside host-country schools and peer groups, the second generation typically acculturates faster and often becomes bicultural."
        },
        {
          type: "fill",
          q: "A mismatch in acculturation levels between immigrant parents and their children is often called an acculturation ____.",
          answer: "gap",
          accept: ["gap"],
          explain: "The acculturation gap - parents more heritage-oriented, children more host-oriented - can strain family communication and relationships."
        },
        {
          type: "match",
          q: "Match each generational term to its description.",
          pairs: [
            ["First generation", "Immigrants who themselves moved to the host country"],
            ["Second generation", "Their children raised in the host country"],
            ["Acculturation gap", "Parents and children acculturate at different rates"],
            ["Heritage language loss", "Common decline of the origin language across generations"]
          ],
          explain: "These terms track how cultural orientation and language typically shift as families move from the immigrant generation onward."
        },
        {
          type: "mcq",
          q: "Segmented assimilation theory (Portes and Zhou, 1993) argues that...",
          choices: [
            "immigrant descendants can follow several different adaptation paths, not one uniform route",
            "all immigrants inevitably assimilate in the same way",
            "acculturation never happens across generations",
            "the second generation always returns to the home country"
          ],
          answer: 0,
          explain: "Segmented assimilation holds that outcomes vary - upward mobility, downward assimilation, or selective acculturation that preserves ethnic ties."
        },
        {
          type: "truefalse",
          q: "Acculturation gaps between generations have no effect on family relationships.",
          answer: false,
          explain: "Gaps in language, values, and cultural orientation are a documented source of intergenerational conflict and reduced parent-child understanding."
        },
        {
          type: "order",
          q: "Order these groups from the one usually least acculturated to the host culture to the one usually most acculturated.",
          items: [
            "First generation (immigrant parents)",
            "1.5 generation (children who immigrated young)",
            "Second generation (children born in host country)",
            "Third generation (grandchildren)"
          ],
          explain: "Host-culture orientation generally increases with each successive generation, while heritage-language fluency generally declines."
        }
      ]
    },
    {
      id: "l184",
      title: "Multicultural experience and creativity",
      intro: "Leung and Chiu's research shows that engaging with more than one culture can boost creativity, but only under the right conditions.",
      questions: [
        {
          type: "mcq",
          q: "Leung, Maddux, Galinsky, and Chiu (2008) argued that multicultural experience tends to...",
          choices: [
            "reduce creativity",
            "enhance creativity under the right conditions",
            "have no effect on cognition",
            "only improve rote memory"
          ],
          answer: 1,
          explain: "Their American Psychologist paper, 'Multicultural experience enhances creativity: The when and how,' linked cultural exposure to greater creativity when people engage with the culture."
        },
        {
          type: "truefalse",
          q: "Maddux and Galinsky (2009) found that time spent living abroad, more than merely traveling abroad, predicted greater creativity.",
          answer: true,
          explain: "Deep adaptation while living abroad - not brief tourism - was the ingredient that predicted stronger creative performance."
        },
        {
          type: "fill",
          q: "Leung and colleagues titled their 2008 article claiming that multicultural experience enhances ____.",
          answer: "creativity",
          accept: ["creativity"],
          explain: "The paper's thesis is that exposure to and engagement with multiple cultures can expand the range of ideas people can access and combine."
        },
        {
          type: "match",
          q: "Match each concept to its description.",
          pairs: [
            ["Multicultural experience", "Exposure to and engagement with more than one culture"],
            ["Creativity", "Generating ideas that are both novel and useful"],
            ["Openness to experience", "A trait that helps people benefit from foreign cultures"],
            ["Cultural threat or closure", "A mindset that can block the creativity benefit"]
          ],
          explain: "The creativity payoff depends not just on exposure but on an open, non-threatened mindset that lets a person learn from the new culture."
        },
        {
          type: "mcq",
          q: "According to this research, the creativity benefits of multicultural exposure are STRONGEST when people...",
          choices: [
            "feel threatened by the foreign culture",
            "avoid engaging with the new culture",
            "are open and actually adapt to and learn from the culture",
            "stay for only a single day"
          ],
          answer: 2,
          explain: "Openness and genuine adaptation are the conditions that turn exposure into creative gain; threat and avoidance can erase the effect."
        },
        {
          type: "truefalse",
          q: "This research shows that simply being exposed to another culture guarantees a creativity boost for everyone, regardless of mindset.",
          answer: false,
          explain: "The effect is conditional. When people feel threatened or crave certainty, the creativity benefit shrinks or disappears - mindset and depth of engagement matter."
        },
        {
          type: "order",
          q: "Order the proposed pathway from multicultural experience to creativity.",
          items: [
            "A person engages deeply with a foreign culture",
            "They become open and receptive to unfamiliar ideas",
            "They access a wider range of concepts and perspectives",
            "They produce more novel, creative solutions"
          ],
          explain: "Deep engagement fosters openness and idea receptiveness, which broadens the mental material available for making creative, unconventional combinations."
        }
      ]
    }
  ]
});
