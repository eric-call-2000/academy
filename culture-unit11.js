window.ACADEMY.addUnit("culture", {
  id: "unit-11",
  title: "Social Attribution and Explanation",
  color: "#e08a1e",
  icon: "🔍",
  description: "Examines how the causes people assign to behavior, whether inner disposition or outer situation, vary systematically across cultures.",
  lessons: [
    {
      id: "l81",
      title: "The fundamental attribution error",
      intro: "The fundamental attribution error is the tendency to overweight personal dispositions and underweight the situation when explaining other people's behavior.",
      questions: [
        {
          type: "mcq",
          q: "The fundamental attribution error refers to the tendency to:",
          choices: [
            "Overweight situational forces and ignore personality",
            "Overweight personal dispositions and underweight the situation",
            "Explain all behavior as pure chance",
            "Attribute behavior only to social class"
          ],
          answer: 1,
          explain: "The error is a bias toward internal, dispositional explanations for others' behavior while discounting powerful situational influences."
        },
        {
          type: "truefalse",
          q: "The term 'fundamental attribution error' was coined by Lee Ross in 1977.",
          answer: true,
          explain: "Ross introduced the phrase in 1977 to name the pervasive human tendency to favor dispositional over situational explanation."
        },
        {
          type: "fill",
          q: "In the fundamental attribution error, observers overweight ____ causes such as personality while discounting the situation.",
          answer: "dispositional",
          accept: ["dispositional", "disposition", "internal"],
          explain: "Dispositional causes locate the reason for behavior inside the person, which the error over-applies."
        },
        {
          type: "mcq",
          q: "In Jones and Harris's (1967) essay study, participants inferred that a writer truly held pro-Castro views even when told the writer:",
          choices: [
            "Was already a known Castro supporter",
            "Had freely chosen the topic",
            "Was assigned the position by a coin toss",
            "Had written many essays before"
          ],
          answer: 2,
          explain: "Even when the stance was clearly imposed with no choice, observers still inferred a matching attitude, ignoring the situational constraint."
        },
        {
          type: "order",
          q: "Put the mental steps of committing the fundamental attribution error in order.",
          items: [
            "Observe another person's behavior",
            "Immediately infer a matching personal trait",
            "Fail to consider situational pressures",
            "Feel confident the trait explains the act"
          ],
          explain: "The error is a fast leap from behavior to trait that skips over any careful analysis of the situation."
        },
        {
          type: "match",
          q: "Match each attribution term with its meaning.",
          pairs: [
            ["Fundamental attribution error", "Over-attributing others' acts to disposition"],
            ["Situational attribution", "Explaining behavior by external circumstances"],
            ["Dispositional attribution", "Explaining behavior by inner traits"],
            ["Correspondence bias", "Another name for the same dispositional error"]
          ],
          explain: "These terms distinguish internal versus external causes and label the bias toward internal ones."
        },
        {
          type: "truefalse",
          q: "The fundamental attribution error means people always explain their OWN behavior with traits and others' with the situation.",
          answer: false,
          explain: "That reversed pattern is the actor-observer asymmetry; the fundamental attribution error specifically concerns over-dispositionalizing OTHERS' behavior."
        }
      ]
    },
    {
      id: "l82",
      title: "Miller 1984 developmental study",
      intro: "Joan Miller's 1984 study showed that Indian and American causal attributions diverge with age, pointing to culture rather than cognitive maturation.",
      questions: [
        {
          type: "mcq",
          q: "Who conducted the 1984 developmental study comparing Indian and American everyday social explanations?",
          choices: [
            "Lee Ross",
            "Joan Miller",
            "Fritz Heider",
            "Hazel Markus"
          ],
          answer: 1,
          explain: "Joan Miller's 1984 paper 'Culture and the development of everyday social explanation' traced attributions across age groups in India and the United States."
        },
        {
          type: "truefalse",
          q: "In Miller's (1984) study, 8-year-old Indian and American children already differed sharply in their attribution styles.",
          answer: false,
          explain: "At age 8 there was essentially no cultural difference; the divergence emerged only as participants got older."
        },
        {
          type: "fill",
          q: "Miller found that as they aged, American participants increasingly favored ____ explanations, referencing general personality traits.",
          answer: "dispositional",
          accept: ["dispositional", "dispositionist", "trait"],
          explain: "Older Americans leaned more on abstract, context-free traits to explain behavior."
        },
        {
          type: "mcq",
          q: "What did Indian adults in Miller's study tend to emphasize when explaining behavior?",
          choices: [
            "General dispositions and traits",
            "Genetic inheritance",
            "Contextual and situational factors",
            "Random chance"
          ],
          answer: 2,
          explain: "Indian adults referenced the actor's context, relationships, roles, and circumstances rather than abstract personal traits."
        },
        {
          type: "truefalse",
          q: "The developmental widening of the cultural gap suggests the difference is learned through socialization rather than fixed at birth.",
          answer: true,
          explain: "Because young children looked alike and diverged only with age, Miller argued that culture, not innate cognition, drives the pattern."
        },
        {
          type: "match",
          q: "Match each group with the attribution pattern Miller observed.",
          pairs: [
            ["American adults", "Peak use of dispositional explanations"],
            ["Indian adults", "Peak use of contextual explanations"],
            ["8-year-olds in both cultures", "No cultural difference in attributions"],
            ["Direction of change with age", "Cultures grow further apart"]
          ],
          explain: "The signature result is convergence early in life and steady cultural divergence with development."
        },
        {
          type: "order",
          q: "Order the four age bands Miller sampled from youngest to oldest.",
          items: [
            "8-year-olds",
            "11-year-olds",
            "15-year-olds",
            "adults"
          ],
          explain: "Sampling these four bands let Miller trace how attribution style develops across childhood into adulthood."
        }
      ]
    },
    {
      id: "l83",
      title: "Morris and Peng 1994",
      intro: "Morris and Peng analyzed newspaper coverage of two mass murders and found American and Chinese reporters explained the same events differently.",
      questions: [
        {
          type: "mcq",
          q: "In one study, Morris and Peng (1994) analyzed:",
          choices: [
            "Children's drawings of families",
            "Newspaper coverage of two mass murders in Chinese- and English-language papers",
            "Standardized IQ tests",
            "Advertising slogans"
          ],
          answer: 1,
          explain: "They compared how English-language and Chinese-language newspapers explained the causes of two similar mass killings."
        },
        {
          type: "truefalse",
          q: "English-language (American) newspapers emphasized the killers' personality and mental state.",
          answer: true,
          explain: "US coverage stressed dispositional causes such as the perpetrator's temperament, psychology, and character."
        },
        {
          type: "fill",
          q: "Chinese-language newspaper coverage stressed ____ causes such as strained relationships and the availability of guns.",
          answer: "situational",
          accept: ["situational", "situation", "contextual", "external"],
          explain: "Chinese-language reporters pointed to the surrounding context and circumstances rather than the killer's inner nature."
        },
        {
          type: "mcq",
          q: "One of the two cases involved Gang Lu, who was a:",
          choices: [
            "Postal worker in Michigan",
            "Journalist in Beijing",
            "Physics graduate student at the University of Iowa",
            "Police officer in Iowa City"
          ],
          answer: 2,
          explain: "Gang Lu was a Chinese physics doctoral student at the University of Iowa; the other case was postal worker Thomas McIlvane."
        },
        {
          type: "match",
          q: "Match each item to its detail from the Morris and Peng study.",
          pairs: [
            ["New York Times (English)", "More dispositional explanations"],
            ["World Journal (Chinese)", "More situational explanations"],
            ["Gang Lu", "University of Iowa graduate student"],
            ["Thomas McIlvane", "Michigan postal worker"]
          ],
          explain: "The two language communities diverged systematically in the kinds of causes they highlighted."
        },
        {
          type: "truefalse",
          q: "Morris and Peng found that the two language communities explained the same events in essentially identical ways.",
          answer: false,
          explain: "The central finding was a systematic divergence: English coverage was more dispositional, Chinese coverage more situational."
        },
        {
          type: "order",
          q: "Order the logic of the Morris and Peng newspaper study.",
          items: [
            "Select two comparable murder cases",
            "Gather English- and Chinese-language articles",
            "Code each causal statement as dispositional or situational",
            "Compare the cultural patterns"
          ],
          explain: "Coding causal statements in matched coverage let them measure cultural differences in explanation."
        }
      ]
    },
    {
      id: "l84",
      title: "Correspondence bias across cultures",
      intro: "East Asians show the correspondence bias too, but they are more sensitive to situational information and correct their inferences more readily.",
      questions: [
        {
          type: "mcq",
          q: "The correspondence bias is the tendency to:",
          choices: [
            "Assume behavior reflects a matching underlying disposition even under constraint",
            "Assume all behavior is caused by luck",
            "Sort people only by demographic group",
            "Exchange letters with study participants"
          ],
          answer: 0,
          explain: "Gilbert and Malone (1995) described the bias as inferring a disposition that corresponds to the behavior, even when a situation forced it."
        },
        {
          type: "truefalse",
          q: "Research shows East Asians never display the correspondence bias.",
          answer: false,
          explain: "East Asians do show the bias, but they are more responsive to situational information and correct more when constraints are salient."
        },
        {
          type: "fill",
          q: "Compared with Americans, East Asians are more ____ to situational information when it is made salient, reducing their dispositional inferences.",
          answer: "sensitive",
          accept: ["sensitive", "responsive", "attentive"],
          explain: "Heightened situational sensitivity lets East Asians correct the automatic dispositional inference."
        },
        {
          type: "mcq",
          q: "Choi and Nisbett (1998) found that Koreans reduced their dispositional attributions most when:",
          choices: [
            "The essay topic was interesting",
            "The situational constraint on the writer was made salient",
            "They were paid more money",
            "The writer shared their nationality"
          ],
          answer: 1,
          explain: "When the no-choice constraint was made vivid, Koreans lowered their trait inferences far more than Americans did."
        },
        {
          type: "match",
          q: "Match each concept with its role in cross-cultural correspondence-bias research.",
          pairs: [
            ["Correspondence bias", "Inferring a trait that matches the behavior"],
            ["Situational salience", "Cue that helps East Asians correct the inference"],
            ["Gilbert and Malone", "Named the correspondence-bias mechanism"],
            ["East Asian pattern", "Bias present but more correctable"]
          ],
          explain: "The bias is universal in tendency but its strength depends on how salient the situation is made, especially for East Asians."
        },
        {
          type: "truefalse",
          q: "When situational information is emphasized, East Asians lower their dispositional judgments more than Americans do.",
          answer: true,
          explain: "The cultural difference appears mainly in correction: East Asians adjust more once the situation is highlighted."
        },
        {
          type: "order",
          q: "Order the steps of a constraint-salience manipulation like Choi and Nisbett's.",
          items: [
            "Show participants an essay written under no choice",
            "Add information making the constraint vivid",
            "Ask for the writer's true attitude",
            "Observe East Asians correct more than Americans"
          ],
          explain: "Making the constraint vivid is what reveals the cultural gap in how much people correct the bias."
        }
      ]
    },
    {
      id: "l85",
      title: "Fish-tank animations",
      intro: "Morris and Peng's animated fish displays showed Americans attributing a lone fish's movement to internal forces and Chinese to external ones.",
      questions: [
        {
          type: "mcq",
          q: "In Morris and Peng's (1994) fish animations, participants judged whether a fish's movement was caused by:",
          choices: [
            "Water temperature versus food supply",
            "Internal (dispositional) versus external (situational) forces",
            "Time of day versus season",
            "The fish's color versus its size"
          ],
          answer: 1,
          explain: "The animations forced a choice between an internal cause in the fish and an external cause in the surrounding group."
        },
        {
          type: "truefalse",
          q: "American participants were more likely than Chinese participants to explain an individual fish's movement by internal factors.",
          answer: true,
          explain: "US participants applied dispositional reasoning even to cartoon fish, while Chinese participants leaned on external, group-based causes."
        },
        {
          type: "fill",
          q: "Chinese participants attributed the lone fish's movement more to ____ forces, such as the surrounding group.",
          answer: "external",
          accept: ["external", "situational", "group", "outside"],
          explain: "For Chinese participants the group and the situation, not the individual fish, carried the explanatory weight."
        },
        {
          type: "mcq",
          q: "The fish-animation results parallel which broader finding?",
          choices: [
            "Americans favor dispositional causes; East Asians weight situational causes more",
            "Everyone reasons identically about animals",
            "Fish behavior is truly caused by personality",
            "Chinese participants ignored the group entirely"
          ],
          answer: 0,
          explain: "The fish study mirrors the newspaper study: a US tilt toward internal causes and a Chinese tilt toward external ones."
        },
        {
          type: "match",
          q: "Match each element of the fish study with its description.",
          pairs: [
            ["A fish moving away from a group", "Ambiguous event needing a causal story"],
            ["American interpretation", "The fish itself (internal) caused it"],
            ["Chinese interpretation", "The group (external) caused it"],
            ["Morris and Peng (1994)", "Ran both the newspaper and fish studies"]
          ],
          explain: "The same ambiguous display drew opposite causal readings across the two cultures."
        },
        {
          type: "truefalse",
          q: "The fish study shows dispositional bias appears only when judging humans, never simple animated shapes.",
          answer: false,
          explain: "The bias extended even to cartoon fish, showing how deeply cultural attribution styles generalize beyond human targets."
        },
        {
          type: "order",
          q: "Order the American dispositional reading of a lone fish swimming ahead.",
          items: [
            "See one fish move away from the group",
            "Assume the cause lies inside that fish",
            "Infer a fish-level disposition, such as 'it wants to lead'",
            "Downplay the group's pull"
          ],
          explain: "The dispositional chain locates the cause inside the individual and discounts the situation."
        }
      ]
    },
    {
      id: "l86",
      title: "Conjunction and dispositionism",
      intro: "Choi and Nisbett's surprise studies show that dispositionist Americans expect trait-consistent behavior while holistic Koreans accept many interacting causes.",
      questions: [
        {
          type: "mcq",
          q: "Choi and Nisbett's (2000) surprise studies compared which two groups?",
          choices: [
            "Indians and Japanese",
            "Koreans and Americans",
            "Chinese and Germans",
            "Brazilians and Kenyans"
          ],
          answer: 1,
          explain: "The 'Cultural psychology of surprise' paper compared Korean and American reactions to counter-dispositional behavior."
        },
        {
          type: "truefalse",
          q: "Americans, being more dispositionist, were more surprised when an actor behaved contrary to an expected trait.",
          answer: true,
          explain: "Expecting behavior to follow from stable traits, Americans found trait-inconsistent acts surprising; Koreans, attuned to the situation, were less so."
        },
        {
          type: "fill",
          q: "Holistic thinkers are more comfortable with the ____ of multiple, even contradictory, causes acting together.",
          answer: "conjunction",
          accept: ["conjunction", "combination", "coexistence"],
          explain: "Holism treats causation as many factors joined together, so contradictions feel less jarring."
        },
        {
          type: "mcq",
          q: "Why were Koreans less surprised by counter-dispositional behavior?",
          choices: [
            "They ignored the story",
            "They disliked the actor",
            "Their holistic view expects situations to shape behavior",
            "They could not remember the trait"
          ],
          answer: 2,
          explain: "Because they expect the situation to matter, trait-inconsistent behavior did not violate their expectations."
        },
        {
          type: "match",
          q: "Match each reasoning style or reaction with its description.",
          pairs: [
            ["Dispositionism", "Expecting behavior to match a stable inner trait"],
            ["Holism", "Expecting many situational causes to interact"],
            ["American reaction", "More surprised by trait-inconsistent acts"],
            ["Korean reaction", "Less surprised by trait-inconsistent acts"]
          ],
          explain: "Dispositionism breeds surprise at inconsistency; holism absorbs it as normal complexity."
        },
        {
          type: "truefalse",
          q: "Choi and Nisbett published these surprise studies in 1984.",
          answer: false,
          explain: "The 'Cultural psychology of surprise' paper appeared in 2000; 1984 is the date of Miller's developmental study."
        },
        {
          type: "order",
          q: "Order the dispositionist chain that makes an outcome feel surprising.",
          items: [
            "Assume a person has a fixed trait",
            "Predict behavior straight from that trait",
            "Encounter behavior that contradicts the trait",
            "Experience strong surprise"
          ],
          explain: "Surprise arises precisely because a rigid trait prediction leaves no room for situational variation."
        }
      ]
    },
    {
      id: "l87",
      title: "Hindsight bias variation",
      intro: "Holistic East Asian thinking is linked to stronger hindsight bias, the 'I knew it all along' sense that outcomes were foreseeable.",
      questions: [
        {
          type: "mcq",
          q: "Hindsight bias is best described as:",
          choices: [
            "Forgetting that past events happened",
            "The 'I knew it all along' overestimation of how predictable an outcome was",
            "Accurately predicting the future",
            "Refusing ever to change one's mind"
          ],
          answer: 1,
          explain: "After learning a result, people overestimate how obvious or predictable it was beforehand."
        },
        {
          type: "truefalse",
          q: "Choi and Nisbett (2000) found Koreans showed stronger hindsight bias than Americans.",
          answer: true,
          explain: "Holistic thinkers more readily felt outcomes were foreseeable, producing greater 'I knew it all along' effects."
        },
        {
          type: "fill",
          q: "Because holistic thinkers see the world as complex and interconnected, they more readily judge an outcome as having been ____ in hindsight.",
          answer: "foreseeable",
          accept: ["foreseeable", "predictable", "inevitable", "expected"],
          explain: "If everything is connected and knowable in principle, any result can feel like it was bound to happen."
        },
        {
          type: "mcq",
          q: "Which reasoning style is linked to greater hindsight bias?",
          choices: [
            "Analytic, dispositionist thinking",
            "Random guessing",
            "Holistic thinking that expects many interacting causes",
            "Formal statistical training"
          ],
          answer: 2,
          explain: "Holistic thinking, which expects rich webs of causes, makes outcomes seem foreseeable after the fact."
        },
        {
          type: "match",
          q: "Match each term with its description.",
          pairs: [
            ["Hindsight bias", "'I knew it all along' after learning the result"],
            ["Holistic thinking", "World is complex; outcomes feel foreseeable"],
            ["Koreans (Choi and Nisbett)", "Stronger hindsight bias"],
            ["Americans", "Comparatively weaker hindsight bias"]
          ],
          explain: "The cross-cultural pattern ties a holistic worldview to a stronger sense of foreseeability."
        },
        {
          type: "truefalse",
          q: "Hindsight bias means people accurately remember their original predictions.",
          answer: false,
          explain: "It is a distortion: after learning the outcome, people misremember having predicted it, overstating its earlier predictability."
        },
        {
          type: "order",
          q: "Order how hindsight bias unfolds.",
          items: [
            "Face an uncertain event",
            "Learn the actual outcome",
            "Feel the outcome was obvious all along",
            "Overestimate one's earlier certainty"
          ],
          explain: "Knowing the result reshapes memory of what one supposedly expected beforehand."
        }
      ]
    },
    {
      id: "l88",
      title: "Ultimate attribution error",
      intro: "The ultimate attribution error extends dispositional bias to whole groups, producing group-serving explanations of in-group and out-group acts.",
      questions: [
        {
          type: "mcq",
          q: "The ultimate attribution error was named by:",
          choices: [
            "Lee Ross (1977)",
            "Thomas Pettigrew (1979)",
            "Joan Miller (1984)",
            "Michael Morris (1994)"
          ],
          answer: 1,
          explain: "Pettigrew coined the term in 1979, extending Allport's analysis of prejudice to group-level attribution."
        },
        {
          type: "truefalse",
          q: "The ultimate attribution error applies the dispositional bias to whole social groups rather than single individuals.",
          answer: true,
          explain: "Pettigrew extended the fundamental attribution error to intergroup perception, which is why it is called 'ultimate.'"
        },
        {
          type: "fill",
          q: "A person committing the ultimate attribution error attributes an out-group member's negative act to ____ (bad character) rather than to circumstances.",
          answer: "disposition",
          accept: ["disposition", "dispositional", "character", "internal", "traits"],
          explain: "Negative out-group behavior gets blamed on inner character, reinforcing the negative stereotype."
        },
        {
          type: "mcq",
          q: "How is a POSITIVE act by an out-group member typically explained under the ultimate attribution error?",
          choices: [
            "As solid proof of good character",
            "As identical to an in-group act",
            "As a fluke, luck, or special situation",
            "It is never noticed at all"
          ],
          answer: 2,
          explain: "Positive out-group behavior is discounted as exceptional or situational, protecting the negative stereotype."
        },
        {
          type: "match",
          q: "Match each act with how the ultimate attribution error explains it.",
          pairs: [
            ["In-group positive act", "Explained by good disposition"],
            ["In-group negative act", "Explained away by the situation"],
            ["Out-group positive act", "Dismissed as luck or an exception"],
            ["Out-group negative act", "Attributed to bad disposition"]
          ],
          explain: "The pattern is group-serving: it always casts the in-group favorably and the out-group unfavorably."
        },
        {
          type: "truefalse",
          q: "Under the ultimate attribution error, an in-group member's failure is usually blamed on their bad character.",
          answer: false,
          explain: "In-group failures are excused situationally; it is out-group failures that get blamed on character."
        },
        {
          type: "order",
          q: "Order the ultimate-attribution-error logic across an out-group member's good and bad acts.",
          items: [
            "Notice an out-group member act badly",
            "Attribute it to their inner character",
            "Notice an out-group member act well",
            "Explain it away as luck or a special case"
          ],
          explain: "Whether the act is bad or good, the reasoning consistently protects a negative view of the out-group."
        }
      ]
    }
  ]
});
