window.ACADEMY.addUnit("culture", {
  id: "unit-16",
  title: "Tight and Loose Cultures",
  color: "#e08a1e",
  icon: "🧵",
  description: "Presents Michele Gelfand's theory of cultural tightness-looseness, explaining how the strength of social norms is shaped by ecological threat and predicts behavior from everyday situations to pandemic response.",
  lessons: [
    {
      id: "l121",
      title: "Tightness-looseness defined",
      intro: "Cultural tightness-looseness describes how strong a society's social norms are and how much it tolerates people who break them.",
      questions: [
        {
          type: "mcq",
          q: "In Gelfand's framework, what two ingredients define cultural tightness-looseness?",
          choices: ["Wealth and education levels", "Strength of social norms and tolerance for deviant behavior", "Religiosity and political ideology", "Population age and life expectancy"],
          answer: 1,
          explain: "Tightness-looseness is defined by the strength of a society's social norms combined with how strongly it sanctions people who deviate from those norms."
        },
        {
          type: "truefalse",
          q: "A tight culture has strong social norms and low tolerance for deviant behavior.",
          answer: true,
          explain: "Tight cultures maintain strong, clearly enforced norms and punish deviance readily, whereas loose cultures have weaker norms and greater permissiveness."
        },
        {
          type: "fill",
          q: "Cultures with weak social norms and high tolerance for rule-breaking are described as ____.",
          answer: "loose",
          accept: ["loose", "looseness"],
          explain: "Loose cultures have weaker, more informal norms and are far more permissive of behavior that departs from convention."
        },
        {
          type: "match",
          q: "Match each culture type with the behavior it tends to show.",
          pairs: [
            ["Tight culture", "Strong norms, strict sanctions for deviance"],
            ["Loose culture", "Weak norms, high tolerance for deviance"],
            ["Sanction", "Social punishment for breaking a norm"]
          ],
          explain: "Tight cultures enforce strong norms through sanctions, while loose cultures tolerate a wider range of behavior with fewer penalties."
        },
        {
          type: "mcq",
          q: "Which example best illustrates a tight cultural norm being enforced?",
          choices: ["People freely jaywalking with no reaction from others", "A stranger being openly scolded for littering in public", "A wide variety of dress being accepted everywhere", "Loose scheduling where meetings start whenever"],
          answer: 1,
          explain: "Public scolding for a minor violation like littering reflects strong norms and readiness to sanction deviance, the hallmark of a tight culture."
        },
        {
          type: "truefalse",
          q: "Tightness-looseness is best understood as a single spectrum rather than two unrelated categories.",
          answer: true,
          explain: "Societies fall along a continuum from very tight to very loose; the terms mark ends of one dimension of norm strength, not separate types."
        },
        {
          type: "fill",
          q: "The overall pressure a society places on people to conform to its norms is called norm ____.",
          answer: "strength",
          accept: ["strength", "strong", "tightness"],
          explain: "Norm strength captures how binding a society's expectations are; high norm strength is the essence of a tight culture."
        }
      ]
    },
    {
      id: "l122",
      title: "Gelfand's 33-nation study",
      intro: "In 2011 Michele Gelfand and colleagues measured tightness-looseness across 33 nations, quantifying how much each constrains everyday behavior.",
      questions: [
        {
          type: "mcq",
          q: "How many nations did Gelfand and colleagues compare in their landmark tightness-looseness study published in Science in 2011?",
          choices: ["12 nations", "33 nations", "50 nations", "68 nations"],
          answer: 1,
          explain: "The 2011 Science paper by Gelfand and colleagues surveyed people across 33 nations to build a comparative index of cultural tightness."
        },
        {
          type: "truefalse",
          q: "Gelfand's 33-nation study was published in the journal Science in 2011.",
          answer: true,
          explain: "The study, titled 'Differences Between Tight and Loose Cultures: A 33-Nation Study,' appeared in Science in 2011."
        },
        {
          type: "mcq",
          q: "According to Gelfand's index, which of these nations ranked among the tightest?",
          choices: ["Ukraine", "The Netherlands", "Pakistan", "Brazil"],
          answer: 2,
          explain: "Pakistan, along with countries like Malaysia, India, and Singapore, scored among the tightest, while Ukraine, the Netherlands, and Brazil scored looser."
        },
        {
          type: "mcq",
          q: "Which nation ranked among the loosest in Gelfand's 33-nation study?",
          choices: ["Singapore", "Japan", "The Netherlands", "South Korea"],
          answer: 2,
          explain: "The Netherlands, along with countries such as Ukraine, Hungary, and Brazil, scored among the loosest, reflecting weaker and more permissive norms."
        },
        {
          type: "fill",
          q: "Gelfand measured how much everyday situations ____ or constrain the range of acceptable behavior.",
          answer: "restrict",
          accept: ["restrict", "constrain", "limit"],
          explain: "The study gauged 'situational constraint' by asking how much behavior is restricted across common settings like banks, parks, and libraries."
        },
        {
          type: "order",
          q: "Order these steps of how Gelfand's team built its tightness index, from first to last.",
          items: ["Survey people about norms across many everyday settings", "Score each nation's average situational constraint", "Rank the 33 nations from tightest to loosest"],
          explain: "The team surveyed situational constraint across settings, averaged those responses per nation, and then ranked nations along the tightness-looseness continuum."
        },
        {
          type: "truefalse",
          q: "Gelfand's index measured actual gross domestic product rather than perceptions of social norms.",
          answer: false,
          explain: "The tightness index was built from survey ratings of norm strength and situational constraint, not from economic output figures like GDP."
        }
      ]
    },
    {
      id: "l123",
      title: "Ecological threat origins",
      intro: "Gelfand argues that tightness grows out of a history of ecological and human-made threats that make strong rules adaptive.",
      questions: [
        {
          type: "mcq",
          q: "According to Gelfand, what root cause tends to make a culture tighter over time?",
          choices: ["A long history of ecological and human threats", "Abundant natural resources and safety", "A tradition of individual artistic freedom", "Low population and few neighbors"],
          answer: 0,
          explain: "Gelfand's ecological account holds that recurring threats create pressure for the strong coordinating rules that define tight cultures."
        },
        {
          type: "truefalse",
          q: "Gelfand found that nations with more natural disasters, disease, and population density tend to be tighter.",
          answer: true,
          explain: "Higher exposure to famine, natural disasters, pathogen prevalence, and crowding all predicted greater tightness across her data."
        },
        {
          type: "match",
          q: "Match each ecological threat with why it can push a culture toward tightness.",
          pairs: [
            ["Natural disasters", "Demand coordinated collective response"],
            ["Disease and pathogens", "Reward strict rules that limit contagion"],
            ["High population density", "Require more rules to reduce conflict"]
          ],
          explain: "Each threat raises the payoff of strong, coordinated norms, so societies facing more threat historically develop tighter cultures."
        },
        {
          type: "fill",
          q: "The prevalence of infectious disease, or ____ load, is one ecological predictor of tightness.",
          answer: "pathogen",
          accept: ["pathogen", "pathogens", "disease"],
          explain: "Higher historical pathogen load predicts tightness because strict behavioral norms help limit the spread of infection."
        },
        {
          type: "mcq",
          q: "Why does high population density tend to be associated with tighter norms?",
          choices: ["Dense living removes any need for cooperation", "Coordinating many people in close quarters requires stronger rules", "Density makes people wealthier and more relaxed", "Crowding eliminates exposure to threats"],
          answer: 1,
          explain: "When many people live in close quarters, stronger shared rules are needed to reduce friction and coordinate behavior, favoring tightness."
        },
        {
          type: "truefalse",
          q: "In Gelfand's theory, tightness is a random cultural quirk with no connection to a society's history of threat.",
          answer: false,
          explain: "Tightness is not random; it is a functional adaptation to a society's historical and ongoing exposure to ecological and human threats."
        },
        {
          type: "order",
          q: "Order this ecological causal chain in Gelfand's theory, from cause to result.",
          items: ["Society faces chronic threats like disaster or disease", "Strong coordinating norms become adaptive", "Culture becomes tighter over generations"],
          explain: "Chronic threat raises the value of strong coordinating rules, and over time societies facing more threat become tighter."
        }
      ]
    },
    {
      id: "l124",
      title: "Everyday situational strength",
      intro: "Tightness shows up in daily life through how much latitude a given situation gives people to behave as they please.",
      questions: [
        {
          type: "mcq",
          q: "What does 'situational strength' refer to in the study of tightness-looseness?",
          choices: ["How wealthy a location is", "How much a setting constrains the range of acceptable behavior", "How many people a place can hold", "How old a cultural tradition is"],
          answer: 1,
          explain: "Situational strength is the degree to which a setting restricts behavior; strong situations allow little latitude, weak situations allow much."
        },
        {
          type: "truefalse",
          q: "A library is a 'strong' situation that permits little behavioral latitude, while a public park is a 'weaker' one.",
          answer: true,
          explain: "Libraries impose strict norms (quiet, no eating) giving low latitude, while parks allow a much wider range of acceptable behavior."
        },
        {
          type: "fill",
          q: "The amount of freedom a setting gives you to choose how to behave is called behavioral ____.",
          answer: "latitude",
          accept: ["latitude", "freedom"],
          explain: "Behavioral latitude is high in weak situations and low in strong ones; tight cultures have more strong situations overall."
        },
        {
          type: "order",
          q: "Order these everyday settings from the strongest situation (least latitude) to the weakest (most latitude).",
          items: ["A funeral service", "A workplace office", "A city park"],
          explain: "A funeral tightly scripts behavior, an office moderately so, and a park gives people wide latitude, illustrating a range of situational strength."
        },
        {
          type: "mcq",
          q: "Why do the same people often behave more uniformly in tight cultures?",
          choices: ["Their personalities are genetically identical", "Strong situations leave less room for individual variation", "They lack any personal preferences", "Weak situations dominate daily life there"],
          answer: 1,
          explain: "Because tight cultures contain more strong situations, they constrain behavior tightly, so individuals act more alike across settings."
        },
        {
          type: "match",
          q: "Match each setting with its typical situational strength.",
          pairs: [
            ["Job interview", "Strong situation, low latitude"],
            ["Public park", "Weak situation, high latitude"],
            ["Bedroom at home", "Weak situation, very high latitude"]
          ],
          explain: "Formal, scripted settings are strong situations with low latitude, while private or informal settings are weak with high latitude."
        },
        {
          type: "truefalse",
          q: "In loose cultures, most everyday situations impose extremely strict behavioral constraints.",
          answer: false,
          explain: "Loose cultures contain more weak situations that permit wide behavioral latitude, so everyday life feels less constrained."
        }
      ]
    },
    {
      id: "l125",
      title: "Tightness within nations",
      intro: "Tightness varies not only between nations but within them, as Harrington and Gelfand showed by ranking the fifty US states.",
      questions: [
        {
          type: "mcq",
          q: "Who led the 2014 study extending tightness-looseness to the fifty US states?",
          choices: ["Jesse Harrington and Michele Gelfand", "Geert Hofstede", "Richard Nisbett", "Harry Triandis"],
          answer: 0,
          explain: "Jesse R. Harrington and Michele Gelfand published 'Tightness-looseness across the 50 United States' in PNAS in 2014."
        },
        {
          type: "truefalse",
          q: "Harrington and Gelfand found that tightness-looseness varies across regions within a single country, not just between nations.",
          answer: true,
          explain: "Their fifty-state analysis showed meaningful variation in tightness within the United States, with tighter and looser regions."
        },
        {
          type: "mcq",
          q: "In the fifty-state study, which region of the United States tended to be tighter?",
          choices: ["The West Coast", "The Northeast", "The South and Midwest", "The Pacific Northwest"],
          answer: 2,
          explain: "Southern and Midwestern states tended to score tighter, while many Northeastern and West Coast states scored looser."
        },
        {
          type: "fill",
          q: "Harrington and Gelfand built a state-level ____ index using measures such as laws, punishments, and religiosity.",
          answer: "tightness",
          accept: ["tightness", "tightness-looseness"],
          explain: "They combined indicators like the severity of legal punishments and levels of religiosity into a composite tightness index for each state."
        },
        {
          type: "match",
          q: "Match each state-level factor with how it related to tightness in the study.",
          pairs: [
            ["Higher tightness", "Stronger law enforcement and more religiosity"],
            ["Higher looseness", "More creativity and social tolerance"],
            ["Ecological threat", "Predicted tighter states"]
          ],
          explain: "Tighter states showed more punitive institutions and religiosity, looser states showed more openness and creativity, and past threat predicted tightness, mirroring the cross-national pattern."
        },
        {
          type: "truefalse",
          q: "The fifty-state findings contradicted the national-level theory, showing threat had no effect within the United States.",
          answer: false,
          explain: "The state-level results reinforced the theory: states with more ecological and historical threat tended to be tighter, just as nations do."
        },
        {
          type: "mcq",
          q: "What does the fifty-state analysis add to Gelfand's original cross-national work?",
          choices: ["It shows tightness only exists between countries", "It shows the same threat-tightness logic operates at a finer geographic scale", "It disproves the idea of loose cultures", "It replaces ecology with genetics as the cause"],
          answer: 1,
          explain: "By finding the same threat-tightness relationship within one nation, the study showed the framework generalizes across geographic scales."
        }
      ]
    },
    {
      id: "l126",
      title: "Trade-offs of tightness",
      intro: "Neither tight nor loose is simply better; each buys certain strengths at the cost of others.",
      questions: [
        {
          type: "mcq",
          q: "According to Gelfand, what is the central trade-off between tight and loose cultures?",
          choices: ["Wealth versus poverty", "Order and coordination versus openness and creativity", "Youth versus age", "Language versus religion"],
          answer: 1,
          explain: "Tight cultures tend to gain order, self-control, and coordination, while loose cultures tend to gain openness, tolerance, and creativity."
        },
        {
          type: "truefalse",
          q: "Gelfand argues that tight cultures tend to have more order and coordination but less openness to new ideas.",
          answer: true,
          explain: "Strong norms deliver reliability and coordination in tight cultures, but the same rigidity can limit openness and innovation."
        },
        {
          type: "match",
          q: "Match each culture type with a characteristic strength it tends to enjoy.",
          pairs: [
            ["Tight culture", "Order, coordination, and self-control"],
            ["Loose culture", "Creativity, openness, and tolerance"],
            ["Trade-off", "Gaining one strength at the cost of another"]
          ],
          explain: "Tight cultures excel at order and coordination, loose cultures excel at creativity and tolerance, and the trade-off means each gains one profile of strengths at the cost of the other."
        },
        {
          type: "fill",
          q: "Loose cultures tend to score higher on openness and ____ than tight cultures.",
          answer: "creativity",
          accept: ["creativity", "creative", "innovation"],
          explain: "The permissiveness of loose cultures fosters experimentation and creativity, one of their signature strengths."
        },
        {
          type: "mcq",
          q: "Which is a potential downside of a very loose culture?",
          choices: ["Excessive coordination and conformity", "Weaker coordination and less self-control", "Too much order in daily life", "An inability to tolerate any deviance"],
          answer: 1,
          explain: "Loose cultures can struggle with coordination and impulse control, the flip side of their openness and flexibility."
        },
        {
          type: "truefalse",
          q: "Gelfand concludes that tight cultures are objectively superior to loose ones.",
          answer: false,
          explain: "Gelfand frames tightness and looseness as a balance of trade-offs, not a ranking; each offers advantages and vulnerabilities."
        },
        {
          type: "order",
          q: "Order these ideas to complete the trade-off logic, from premise to conclusion.",
          items: ["Tight cultures enforce strong norms", "This yields order but constrains novelty", "Loose cultures trade some order for greater creativity"],
          explain: "Strong norms create order at the expense of novelty, so looser cultures accept less order in exchange for more creativity, capturing the core trade-off."
        }
      ]
    },
    {
      id: "l127",
      title: "Cultural tightness and the mind",
      intro: "Living in a tight culture shapes individual psychology, strengthening the mental habits that help people meet strong norms.",
      questions: [
        {
          type: "mcq",
          q: "Gelfand found that people in tight cultures tend to score higher on which psychological trait?",
          choices: ["Sensation seeking", "Self-monitoring and self-regulation", "Openness to fantasy", "Impulsivity"],
          answer: 1,
          explain: "Tight cultures cultivate stronger self-monitoring and self-regulation because closely watched norms reward careful control of one's behavior."
        },
        {
          type: "truefalse",
          q: "People in tight cultures tend to show greater impulse control than people in loose cultures.",
          answer: true,
          explain: "Strong norms and the threat of sanctions in tight cultures foster higher impulse control and cautiousness at the individual level."
        },
        {
          type: "fill",
          q: "The tendency to watch and adjust one's own behavior to fit a situation is called self-____.",
          answer: "monitoring",
          accept: ["monitoring", "regulation", "control"],
          explain: "Self-monitoring, closely related to self-regulation, is elevated in tight cultures where deviance is quickly noticed and sanctioned."
        },
        {
          type: "match",
          q: "Match each culture type with the individual-level tendency it fosters.",
          pairs: [
            ["Tight culture", "Higher self-monitoring and impulse control"],
            ["Loose culture", "More impulsivity and risk tolerance"],
            ["Prevention focus", "Vigilance about avoiding mistakes"]
          ],
          explain: "Tight cultures encourage vigilant self-control and a prevention focus, while loose cultures allow more impulsivity and openness to risk."
        },
        {
          type: "mcq",
          q: "Why would strong self-regulation be adaptive in a tight culture?",
          choices: ["Because norms are rarely enforced there", "Because closely watched, strictly enforced norms punish slips", "Because there are no social expectations", "Because deviance is celebrated"],
          answer: 1,
          explain: "When norms are strong and violations are punished, carefully regulating one's own behavior helps a person avoid costly sanctions."
        },
        {
          type: "truefalse",
          q: "Gelfand's work suggests culture only shapes group norms and has no measurable effect on individual psychology.",
          answer: false,
          explain: "A key finding is that tightness reaches into the individual mind, shaping traits like self-monitoring, caution, and impulse control."
        },
        {
          type: "fill",
          q: "Loose cultures tend to foster more ____ control at the individual level than tight cultures.",
          answer: "impulsive",
          accept: ["impulsive", "impulsivity", "less"],
          explain: "Because weaker norms tolerate more spontaneity, people in loose cultures tend to show more impulsive, less tightly regulated behavior."
        }
      ]
    },
    {
      id: "l128",
      title: "Tightness and contemporary events",
      intro: "The tightness-looseness framework helps explain why nations responded so differently to the COVID-19 pandemic.",
      questions: [
        {
          type: "mcq",
          q: "In a 2021 Lancet study, Gelfand and colleagues linked cultural tightness to what outcome during the COVID-19 pandemic?",
          choices: ["Higher tourism revenue", "Lower case and death rates", "Higher birth rates", "Faster internet speeds"],
          answer: 1,
          explain: "The 2021 analysis found that tighter nations tended to have far fewer COVID-19 cases and deaths, consistent with stronger norm adherence."
        },
        {
          type: "truefalse",
          q: "Gelfand's team reported that loose cultures had significantly higher COVID-19 case and death rates than tight cultures.",
          answer: true,
          explain: "Looser cultures, with weaker norm adherence, showed substantially higher COVID-19 cases and deaths in the 2021 study."
        },
        {
          type: "fill",
          q: "Tight cultures showed stronger ____ with public health rules like mask wearing and distancing.",
          answer: "compliance",
          accept: ["compliance", "adherence", "cooperation"],
          explain: "Higher norm strength translated into greater compliance with collective health measures, which helped curb viral spread."
        },
        {
          type: "mcq",
          q: "Which mechanism best explains why tight cultures fared better against COVID-19 in the study?",
          choices: ["They had warmer climates", "Their strong norms produced greater cooperation with restrictions", "They had no elderly residents", "They ignored public health advice"],
          answer: 1,
          explain: "Strong norms and readiness to sanction deviance made people in tight cultures more likely to follow distancing and masking rules together."
        },
        {
          type: "truefalse",
          q: "The pandemic findings show that tightness is only a historical curiosity with no relevance to modern crises.",
          answer: false,
          explain: "The COVID-19 results show the framework is highly relevant today, predicting how societies coordinate responses to contemporary threats."
        },
        {
          type: "order",
          q: "Order this reasoning linking tightness to pandemic outcomes, from cause to effect.",
          items: ["A culture has strong, strictly enforced norms", "People broadly comply with distancing and masking", "The nation experiences lower COVID-19 cases and deaths"],
          explain: "Strong norms drive high compliance with health measures, which in turn produced lower cases and deaths in tighter nations."
        },
        {
          type: "match",
          q: "Match each pandemic-related idea with what it describes.",
          pairs: [
            ["Tight nation", "High norm compliance, lower COVID-19 toll"],
            ["Loose nation", "Weaker compliance, higher COVID-19 toll"],
            ["Collective threat", "A shared danger that rewards strong norms"]
          ],
          explain: "Tighter nations paired strong compliance with lower tolls, looser nations the reverse, and a shared threat like a pandemic makes strong coordinating norms especially valuable."
        }
      ]
    }
  ]
});
