window.ACADEMY.addUnit("culture", {
  id: "unit-21",
  title: "Culture and Morality",
  color: "#e08a1e",
  icon: "⚖️",
  description: "Examines how cultures shape moral judgment, from Kohlberg's stages and Shweder's three ethics to moral foundations, purity, trolley problems, and the peculiarity of WEIRD morality.",
  lessons: [
    {
      id: "l161",
      title: "Kohlberg's stage theory",
      intro: "Lawrence Kohlberg mapped moral reasoning onto developmental stages, but critics argue his highest stage privileges a Western, justice-centered ethic.",
      questions: [
        {
          type: "mcq",
          q: "Which dilemma did Kohlberg use to elicit moral reasoning?",
          choices: ["The trolley dilemma", "The veil of ignorance", "The Heinz dilemma", "The marshmallow test"],
          answer: 2,
          explain: "Kohlberg presented the Heinz dilemma (whether a man should steal a drug to save his dying wife) and scored the reasoning behind the answer, not the answer itself."
        },
        {
          type: "order",
          q: "Order Kohlberg's three levels of moral development from earliest to most advanced.",
          items: ["Preconventional", "Conventional", "Postconventional"],
          explain: "Reasoning shifts from avoiding punishment and seeking reward (preconventional), to conforming to social rules and approval (conventional), to abstract self-chosen principles (postconventional)."
        },
        {
          type: "truefalse",
          q: "Kohlberg held that his highest stage rests on universal principles of justice.",
          answer: true,
          explain: "At the postconventional level, Kohlberg said people reason from abstract principles of justice and individual rights that hold regardless of local law or custom."
        },
        {
          type: "fill",
          q: "Psychologist Carol ____ argued Kohlberg's scale neglected an ethic of care and relationships.",
          answer: "gilligan",
          accept: ["gilligan"],
          explain: "Carol Gilligan claimed Kohlberg's justice-based ladder undervalued a relational 'ethic of care' more evident in women's moral reasoning."
        },
        {
          type: "mcq",
          q: "What is the main cross-cultural critique of Kohlberg's top stage?",
          choices: ["It focuses on emotion rather than logic", "It reflects a Western, individualist, justice-centered ideal", "It applies only to young children", "It ignores the role of punishment"],
          answer: 1,
          explain: "Critics note that ranking abstract individual-rights justice as the pinnacle privileges Western liberal values over community- and duty-based moralities."
        },
        {
          type: "match",
          q: "Match each Kohlberg level to its characteristic reasoning.",
          pairs: [["Preconventional", "Avoiding punishment and seeking rewards"], ["Conventional", "Upholding laws and social approval"], ["Postconventional", "Following self-chosen ethical principles"]],
          explain: "Each level marks a broader basis for moral judgment, from personal consequences to shared rules to abstract principles."
        },
        {
          type: "truefalse",
          q: "Kohlberg built his original stage model mainly from interviews with women in non-Western societies.",
          answer: false,
          explain: "His longitudinal sample was mostly American boys and young men, a key reason critics questioned how universal the model really is."
        }
      ]
    },
    {
      id: "l162",
      title: "Shweder's three ethics",
      intro: "Richard Shweder proposed that moral talk worldwide draws on three ethics: autonomy, community, and divinity.",
      questions: [
        {
          type: "mcq",
          q: "What are the three ethics in Richard Shweder's model of moral discourse?",
          choices: ["Care, fairness, and loyalty", "Autonomy, community, and divinity", "Reason, emotion, and instinct", "Guilt, shame, and honor"],
          answer: 1,
          explain: "Shweder's 'Big Three' ethics are autonomy (the individual), community (the group), and divinity (the sacred)."
        },
        {
          type: "match",
          q: "Match each of Shweder's ethics to its core concern.",
          pairs: [["Autonomy", "Individual rights, harm, and justice"], ["Community", "Duty, hierarchy, and interdependence"], ["Divinity", "Purity, sanctity, and sacred order"]],
          explain: "Each ethic supplies a different vocabulary for what makes an act right or wrong."
        },
        {
          type: "fill",
          q: "The ethic of ____ frames morality around individual rights and freedom from harm.",
          answer: "autonomy",
          accept: ["autonomy"],
          explain: "The ethic of autonomy treats the individual as the key moral unit, protecting personal choice and preventing harm."
        },
        {
          type: "truefalse",
          q: "In Shweder's model, the ethic of divinity can treat the body as a temple to be kept pure.",
          answer: true,
          explain: "Divinity morality links right and wrong to purity, sanctity, and a natural or sacred order, often framing the body as something that can be sanctified or defiled."
        },
        {
          type: "mcq",
          q: "Which ethic do Western liberal societies tend to emphasize most?",
          choices: ["Divinity", "Community", "Autonomy", "Honor"],
          answer: 2,
          explain: "Shweder observed that WEIRD, individualist societies lean heavily on the ethic of autonomy, while many other cultures weight community and divinity more."
        },
        {
          type: "truefalse",
          q: "The ethic of community centers on duties tied to social roles and group membership.",
          answer: true,
          explain: "Community morality emphasizes obligations of role, rank, and interdependence rather than individual preference."
        },
        {
          type: "mcq",
          q: "Shweder's three ethics grew partly out of ethnographic fieldwork in which country?",
          choices: ["Japan", "India", "Brazil", "Kenya"],
          answer: 1,
          explain: "Shweder's research in the Hindu temple town of Bhubaneswar, India, highlighted community and divinity concerns that a purely autonomy-based framework missed."
        }
      ]
    },
    {
      id: "l163",
      title: "Moral foundations theory",
      intro: "Haidt and Graham's Moral Foundations Theory identifies innate intuitions that cultures build their moral systems upon.",
      questions: [
        {
          type: "mcq",
          q: "Moral Foundations Theory is primarily associated with which pair of psychologists?",
          choices: ["Jonathan Haidt and Jesse Graham", "Lawrence Kohlberg and Carol Gilligan", "Paul Rozin and Peter Singer", "Richard Shweder and Joseph Henrich"],
          answer: 0,
          explain: "Jonathan Haidt and Jesse Graham developed Moral Foundations Theory, extending Shweder's cross-cultural work."
        },
        {
          type: "match",
          q: "Match each moral foundation to an example concern.",
          pairs: [["Care/harm", "Compassion for those who suffer"], ["Fairness/cheating", "Reciprocity and just deserts"], ["Loyalty/betrayal", "Standing by one's group"], ["Authority/subversion", "Respect for legitimate leaders and tradition"]],
          explain: "Each foundation is an evolved intuition that cultures elaborate into specific virtues and rules."
        },
        {
          type: "fill",
          q: "A sixth foundation later proposed by the theorists is ____/oppression.",
          answer: "liberty",
          accept: ["liberty"],
          explain: "Liberty/oppression, added after the original five, tracks resentment of domination and the impulse to resist bullies and tyrants."
        },
        {
          type: "truefalse",
          q: "Research suggests political liberals rely mainly on Care and Fairness, while conservatives draw more evenly on all foundations.",
          answer: true,
          explain: "Haidt and Graham found liberals prioritize the 'individualizing' foundations (Care, Fairness), while conservatives also weight Loyalty, Authority, and Sanctity."
        },
        {
          type: "mcq",
          q: "How many foundations were in the original version of the theory?",
          choices: ["Three", "Four", "Five", "Seven"],
          answer: 2,
          explain: "The original set was five: Care, Fairness, Loyalty, Authority, and Sanctity; Liberty was proposed later as a sixth."
        },
        {
          type: "truefalse",
          q: "The Sanctity/degradation foundation is closely tied to the emotion of disgust.",
          answer: true,
          explain: "Sanctity draws on disgust and notions of purity, shaping intuitions about contamination and the sacred."
        },
        {
          type: "fill",
          q: "The foundation concerned with in-group solidarity is Loyalty/____.",
          answer: "betrayal",
          accept: ["betrayal"],
          explain: "Loyalty/betrayal underlies patriotism and self-sacrifice for the group, and condemns those who betray it."
        }
      ]
    },
    {
      id: "l164",
      title: "The moral dumbfounding studies",
      intro: "Haidt's dumbfounding studies show people cling to moral judgments even when they cannot justify them, suggesting intuition comes first.",
      questions: [
        {
          type: "mcq",
          q: "In Haidt's 'Julie and Mark' story, what makes it a good test of moral intuition?",
          choices: ["It involves clear physical harm to a stranger", "It describes consensual, harm-free sibling incest that still feels wrong", "It has an obviously correct utilitarian answer", "It centers on stealing to save a life"],
          answer: 1,
          explain: "The story removes harm (protected sex, no pregnancy, kept secret) so that lingering disapproval reveals intuition operating without a harm-based reason."
        },
        {
          type: "truefalse",
          q: "Moral dumbfounding is when people keep a moral judgment even after they run out of reasons to justify it.",
          answer: true,
          explain: "Participants insisted an act was wrong yet could not supply supporting reasons, becoming 'dumbfounded' while still condemning it."
        },
        {
          type: "fill",
          q: "Haidt's account of these results is called the social ____ model.",
          answer: "intuitionist",
          accept: ["intuitionist"],
          explain: "The social intuitionist model holds that fast moral intuitions usually come first, with reasoning arriving afterward."
        },
        {
          type: "order",
          q: "Order the steps in Haidt's social intuitionist model.",
          items: ["A rapid gut intuition", "A moral judgment", "Post-hoc reasoning"],
          explain: "An automatic intuition triggers the judgment, and conscious reasoning typically follows to justify it rather than to produce it."
        },
        {
          type: "mcq",
          q: "What do dumbfounding results suggest about moral reasoning?",
          choices: ["It always precedes moral judgment", "It often functions as after-the-fact justification", "It is unrelated to emotion", "It is identical across all cultures"],
          answer: 1,
          explain: "The studies imply reasoning frequently rationalizes an intuition already reached, rather than driving the verdict."
        },
        {
          type: "truefalse",
          q: "In the social intuitionist model, deliberate reasoning normally precedes and causes our moral judgments.",
          answer: false,
          explain: "The model reverses the classic picture: intuition leads and reasoning usually follows as post-hoc justification."
        },
        {
          type: "fill",
          q: "Haidt likened conscious reasoning to a small ____ atop, and often serving, an intuitive elephant.",
          answer: "rider",
          accept: ["rider"],
          explain: "In Haidt's metaphor the emotional 'elephant' leads and the reasoning 'rider' mostly rationalizes its direction."
        }
      ]
    },
    {
      id: "l165",
      title: "Purity, disgust, and divinity",
      intro: "Sanctity and purity form a moral domain rooted in the emotion of disgust and ideas of the sacred.",
      questions: [
        {
          type: "mcq",
          q: "Which psychologist is most associated with the science of disgust?",
          choices: ["Paul Rozin", "Jonathan Haidt", "Lawrence Kohlberg", "Peter Singer"],
          answer: 0,
          explain: "Paul Rozin pioneered research on disgust, from food rejection to its role in moral judgment."
        },
        {
          type: "fill",
          q: "Rozin argued that 'animal-reminder' disgust guards against cues of our own ____ nature and mortality.",
          answer: "animal",
          accept: ["animal"],
          explain: "Reminders of our animal nature, such as death and bodily products, trigger disgust that Rozin linked to purity concerns."
        },
        {
          type: "truefalse",
          q: "The sanctity/purity domain often treats the body as something that can be sanctified or defiled.",
          answer: true,
          explain: "Purity morality frames the body and self as capable of elevation or contamination, echoing Shweder's ethic of divinity."
        },
        {
          type: "match",
          q: "Match each type of disgust Rozin described to its trigger.",
          pairs: [["Core disgust", "Contaminated food and bodily waste"], ["Animal-reminder disgust", "Death, gore, and body-envelope violations"], ["Sociomoral disgust", "Certain moral offenses and 'tainted' people"]],
          explain: "Rozin proposed disgust expanded from protecting the mouth, to guarding against our animal nature, to policing moral and social boundaries."
        },
        {
          type: "mcq",
          q: "A distinctive feature of purity violations is that they can feel wrong even when...",
          choices: ["a law is clearly broken", "there is no identifiable victim or harm", "money changes hands", "two adults disagree"],
          answer: 1,
          explain: "Purity and sanctity judgments often condemn acts that harm no one, which is why they resist purely harm-based explanations."
        },
        {
          type: "truefalse",
          q: "Purity concerns are equally central in every culture and never vary in strength.",
          answer: false,
          explain: "Cultures differ widely in how much weight they give sanctity and purity, one of the clearest sources of cross-cultural moral variation."
        },
        {
          type: "fill",
          q: "In Shweder's framework, purity and sanctity belong to the ethic of ____.",
          answer: "divinity",
          accept: ["divinity"],
          explain: "The sanctity domain maps onto Shweder's ethic of divinity, which links morality to purity and a sacred order."
        }
      ]
    },
    {
      id: "l166",
      title: "Trolley problems across cultures",
      intro: "Trolley dilemmas reveal both shared moral instincts and culturally variable judgments.",
      questions: [
        {
          type: "mcq",
          q: "Who first introduced the original trolley problem in a 1967 paper?",
          choices: ["Judith Jarvis Thomson", "Philippa Foot", "Peter Singer", "Joshua Greene"],
          answer: 1,
          explain: "Philippa Foot devised the original case in 1967; Judith Jarvis Thomson later named it the 'trolley problem' and added the footbridge variant."
        },
        {
          type: "truefalse",
          q: "Most people judge it permissible to divert the trolley with a switch, but not to push a man off a footbridge to stop it.",
          answer: true,
          explain: "This gap between the switch and footbridge cases is one of the most robust and cross-culturally common findings in moral psychology."
        },
        {
          type: "fill",
          q: "The large online study of moral choices for self-driving cars is called the Moral ____ experiment.",
          answer: "machine",
          accept: ["machine"],
          explain: "The Moral Machine (Awad et al., 2018) collected millions of judgments about whom an autonomous car should spare."
        },
        {
          type: "mcq",
          q: "What did the Moral Machine study find across cultures?",
          choices: ["No shared preferences at all", "Shared tendencies plus culturally clustered differences", "Identical judgments everywhere", "That trolley problems have no real-world relevance"],
          answer: 1,
          explain: "It found broad preferences (spare more lives, humans over animals, the young) alongside three cultural clusters that weighted factors differently."
        },
        {
          type: "match",
          q: "Match each trolley-related idea to its meaning.",
          pairs: [["Switch case", "Reroute the trolley so one dies instead of five"], ["Footbridge case", "Push a large person onto the tracks to stop it"], ["Utilitarian judgment", "Choose the outcome that saves the most lives"], ["Deontological judgment", "Hold that some acts are wrong regardless of results"]],
          explain: "The cases pit maximizing outcomes against constraints on using a person merely as a means."
        },
        {
          type: "truefalse",
          q: "The Moral Machine study found no cross-cultural variation whatsoever.",
          answer: false,
          explain: "It identified distinct 'Western,' 'Eastern,' and 'Southern' clusters, showing systematic cultural variation on top of shared tendencies."
        },
        {
          type: "fill",
          q: "Judging that some acts are wrong regardless of their consequences reflects a ____ moral outlook.",
          answer: "deontological",
          accept: ["deontological", "deontology"],
          explain: "Deontological ethics holds that certain actions are forbidden even if they would produce better outcomes."
        }
      ]
    },
    {
      id: "l167",
      title: "Moral circle and parochialism",
      intro: "The moral circle defines who counts as deserving moral consideration, while parochialism pulls that circle toward the in-group.",
      questions: [
        {
          type: "mcq",
          q: "Who popularized the idea of an 'expanding circle' of moral concern?",
          choices: ["Peter Singer", "Richard Shweder", "Paul Rozin", "Carol Gilligan"],
          answer: 0,
          explain: "Philosopher Peter Singer's 1981 book 'The Expanding Circle' argued that the boundary of moral concern has widened over history."
        },
        {
          type: "fill",
          q: "A being whose interests can be wronged and deserve moral consideration is a moral ____.",
          answer: "patient",
          accept: ["patient"],
          explain: "A moral patient is any being that can be morally wronged, whether or not it can itself act morally."
        },
        {
          type: "truefalse",
          q: "Parochialism means extending equal moral concern to all humans regardless of group.",
          answer: false,
          explain: "Parochialism is the opposite: a bias toward one's own in-group that narrows rather than widens moral concern."
        },
        {
          type: "order",
          q: "Order these groups from the innermost to a more expanded moral circle, following the historical trend Singer describes.",
          items: ["Immediate family", "Nation or tribe", "All of humanity", "Non-human animals"],
          explain: "Singer describes moral concern gradually extending outward from kin, to nation, to all people, and toward sentient animals."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Moral agent", "One who can be held responsible for actions"], ["Moral patient", "One whose interests deserve consideration"], ["Parochial altruism", "Sacrifice for the in-group, often against outsiders"], ["Moral circle", "The boundary of who counts morally"]],
          explain: "Agents can act rightly or wrongly; patients can be wronged; and the moral circle marks who is included."
        },
        {
          type: "mcq",
          q: "Parochial altruism is best described as...",
          choices: ["Kindness extended equally to everyone", "In-group generosity paired with out-group hostility", "Selfishness toward all groups", "Concern only for non-human animals"],
          answer: 1,
          explain: "Parochial altruism couples self-sacrifice for one's group with wariness or aggression toward outsiders, a recurring feature of human cooperation."
        },
        {
          type: "truefalse",
          q: "On many historical accounts, the moral circle has tended to expand outward over time.",
          answer: true,
          explain: "Thinkers like Singer argue that, unevenly and with reversals, moral concern has broadened from kin toward strangers and other species."
        }
      ]
    },
    {
      id: "l168",
      title: "WEIRD morality's peculiarity",
      intro: "WEIRD populations show a peculiar morality that emphasizes impartial rules and individual rights over kin-based loyalty.",
      questions: [
        {
          type: "mcq",
          q: "The acronym WEIRD, coined by Henrich, Heine, and Norenzayan in 2010, stands for what?",
          choices: ["Wealthy, Elite, Insular, Rational, Distant", "Western, Educated, Industrialized, Rich, Democratic", "Worldly, Egalitarian, Independent, Reflective, Diverse", "Western, Emotional, Impartial, Religious, Developed"],
          answer: 1,
          explain: "WEIRD flags that most psychology samples come from Western, Educated, Industrialized, Rich, and Democratic societies, which are unusual worldwide."
        },
        {
          type: "fill",
          q: "WEIRD stands for Western, Educated, Industrialized, Rich, and ____.",
          answer: "democratic",
          accept: ["democratic"],
          explain: "The final letter, Democratic, completes the acronym describing an atypical slice of humanity."
        },
        {
          type: "truefalse",
          q: "WEIRD people tend to apply impartial moral rules even when doing so conflicts with helping family or friends.",
          answer: true,
          explain: "A hallmark of WEIRD morality is impartiality: the same rules apply to strangers and kin alike, over loyalty-based obligations."
        },
        {
          type: "mcq",
          q: "Joseph Henrich's 2020 book on this topic is titled...",
          choices: ["The Righteous Mind", "The Expanding Circle", "The WEIRDest People in the World", "Moral Tribes"],
          answer: 2,
          explain: "Henrich's 'The WEIRDest People in the World' (2020) argues that WEIRD psychology is historically and culturally unusual."
        },
        {
          type: "match",
          q: "Match each feature of WEIRD morality to its description.",
          pairs: [["Impartiality", "Applying the same rules to strangers and kin"], ["Individualism", "Emphasizing individual rights and choices"], ["Universalism", "Treating moral principles as applying to everyone"], ["Guilt orientation", "Relying on internal standards over public shame"]],
          explain: "Henrich contrasts WEIRD morality's impartial, individualist, guilt-based profile with more kin-based, relational moralities elsewhere."
        },
        {
          type: "truefalse",
          q: "Henrich argues that WEIRD psychology is representative of humanity as a whole.",
          answer: false,
          explain: "His central point is the opposite: WEIRD people are outliers, so findings from them should not be generalized to all humans."
        },
        {
          type: "fill",
          q: "In cross-cultural surveys, WEIRD people are comparatively less willing to lie in court to protect a ____.",
          answer: "friend",
          accept: ["friend"],
          explain: "Studies such as Trompenaars' passenger dilemma find WEIRD respondents favor impartial truth-telling over loyalty to a friend."
        }
      ]
    }
  ]
});
