window.ACADEMY.addUnit("culture", {
  id: "unit-3",
  title: "The WEIRD Problem",
  color: "#e08a1e",
  icon: "🌍",
  description: "Examines how psychology's reliance on Western, Educated, Industrialized, Rich, and Democratic samples distorts claims about universal human nature.",
  lessons: [
    {
      id: "l17",
      title: "The WEIRD acronym",
      intro: "WEIRD names five traits - Western, Educated, Industrialized, Rich, and Democratic - shared by the societies most psychology samples come from.",
      questions: [
        {
          type: "mcq",
          q: "The acronym WEIRD, coined to describe common psychology samples, stands for which set of traits?",
          choices: [
            "Wealthy, Emotional, Intelligent, Rational, Diverse",
            "Western, Educated, Industrialized, Rich, Democratic",
            "Worldly, Ethical, Independent, Refined, Dominant",
            "Western, Elite, Industrial, Religious, Developed"
          ],
          answer: 1,
          explain: "WEIRD is an acronym for Western, Educated, Industrialized, Rich, and Democratic - the profile of most study participants."
        },
        {
          type: "fill",
          q: "The letter 'E' in WEIRD stands for ____, referring to people with high levels of formal schooling.",
          answer: "educated",
          accept: ["educated", "education"],
          explain: "The E highlights that typical subjects, often university students, are highly educated relative to the rest of the world."
        },
        {
          type: "truefalse",
          q: "The final letter of WEIRD, 'D', stands for 'Developed'.",
          answer: false,
          explain: "The D stands for Democratic, not Developed - referring to societies with democratic political institutions."
        },
        {
          type: "match",
          q: "Match each WEIRD letter to the trait it represents.",
          pairs: [
            ["W", "Western"],
            ["I", "Industrialized"],
            ["R", "Rich"],
            ["D", "Democratic"]
          ],
          explain: "Spelled in full, WEIRD is Western, Educated, Industrialized, Rich, and Democratic."
        },
        {
          type: "mcq",
          q: "Why did researchers create the label 'WEIRD'?",
          choices: [
            "To praise Western societies as the ideal model of human development",
            "To describe a rare psychological disorder found in students",
            "To flag that common research samples share an unusual, narrow profile",
            "To classify societies by their average income alone"
          ],
          answer: 2,
          explain: "The label draws attention to how narrow and unrepresentative the usual samples are, not to celebrate those societies."
        },
        {
          type: "order",
          q: "Put the five WEIRD traits in the order they appear in the acronym.",
          items: ["Western", "Educated", "Industrialized", "Rich", "Democratic"],
          explain: "Reading W-E-I-R-D in order gives Western, Educated, Industrialized, Rich, Democratic."
        },
        {
          type: "truefalse",
          q: "A college undergraduate in the United States fits nearly every trait in the WEIRD profile.",
          answer: true,
          explain: "US undergraduates are Western, highly educated, and drawn from an industrialized, rich, democratic society - a textbook WEIRD sample."
        }
      ]
    },
    {
      id: "l18",
      title: "Henrich, Heine, Norenzayan 2010",
      intro: "In 2010, Joseph Henrich, Steven Heine, and Ara Norenzayan published 'The weirdest people in the world?', arguing psychology's usual subjects are among the least typical humans.",
      questions: [
        {
          type: "mcq",
          q: "Which trio of researchers published the influential 2010 paper 'The weirdest people in the world?'",
          choices: [
            "Nisbett, Peng, and Choi",
            "Henrich, Heine, and Norenzayan",
            "Segall, Campbell, and Herskovits",
            "Markus, Kitayama, and Triandis"
          ],
          answer: 1,
          explain: "Joseph Henrich, Steven Heine, and Ara Norenzayan authored the 2010 critique in the journal Behavioral and Brain Sciences."
        },
        {
          type: "fill",
          q: "The 2010 paper was provocatively titled 'The ____ people in the world?', a play on the WEIRD acronym.",
          answer: "weirdest",
          accept: ["weirdest"],
          explain: "The title puns on WEIRD, arguing that these frequently studied people are actually the most unusual, not the most typical."
        },
        {
          type: "truefalse",
          q: "Henrich and colleagues argued that WEIRD samples are a representative stand-in for humanity as a whole.",
          answer: false,
          explain: "They argued the opposite: WEIRD people are frequently unusual and a poor basis for claims about all humans."
        },
        {
          type: "mcq",
          q: "What was the central warning of the Henrich, Heine, and Norenzayan paper?",
          choices: [
            "Psychology experiments simply have too few participants overall",
            "Broad claims about human nature rest on a narrow, atypical slice of people",
            "Only brain imaging can reveal true human universals",
            "Non-Western cultures cannot be studied scientifically"
          ],
          answer: 1,
          explain: "Their core point was that sweeping claims about 'human' psychology were built on unrepresentative WEIRD samples."
        },
        {
          type: "match",
          q: "Match each author of the 2010 paper to their first name.",
          pairs: [
            ["Henrich", "Joseph"],
            ["Heine", "Steven"],
            ["Norenzayan", "Ara"]
          ],
          explain: "The paper was written by Joseph Henrich, Steven Heine, and Ara Norenzayan."
        },
        {
          type: "order",
          q: "Put the steps of the paper's argument in logical order.",
          items: [
            "Most studies sample WEIRD people",
            "WEIRD people differ from other populations",
            "Yet the findings are labeled as universal",
            "So many claims about human nature are overstated"
          ],
          explain: "The argument moves from a sampling fact, to an evidence of difference, to a labeling error, to its overstated conclusions."
        },
        {
          type: "truefalse",
          q: "The paper appeared in the journal Behavioral and Brain Sciences.",
          answer: true,
          explain: "It was published in Behavioral and Brain Sciences in 2010, accompanied by extensive open peer commentary."
        }
      ]
    },
    {
      id: "l19",
      title: "Overgeneralization in journals",
      intro: "Surveys of top journals found that about 96% of research participants came from Western industrialized nations that hold only about 12% of the world's people.",
      questions: [
        {
          type: "mcq",
          q: "According to analyses cited by Henrich and colleagues, roughly what share of psychology samples came from Western industrialized countries?",
          choices: [
            "About 25%",
            "About 50%",
            "About 96%",
            "About 12%"
          ],
          answer: 2,
          explain: "Around 96% of sampled subjects came from Western industrialized nations, a striking overrepresentation of a small part of humanity."
        },
        {
          type: "fill",
          q: "Western industrialized nations supplied about 96% of subjects while housing only about ____ percent of the world's population.",
          answer: "12",
          accept: ["12", "twelve"],
          explain: "Those countries hold roughly 12% of the world's people yet contributed about 96% of participants."
        },
        {
          type: "truefalse",
          q: "The 96%-from-12% figure shows that samples were drawn evenly from around the globe.",
          answer: false,
          explain: "It shows the opposite - a tiny, wealthy slice of humanity supplied almost all of the participants."
        },
        {
          type: "mcq",
          q: "A large share of all subjects came from a single country. Which one?",
          choices: [
            "China",
            "The United States",
            "India",
            "Germany"
          ],
          answer: 1,
          explain: "Analyses found that a majority of subjects - roughly two-thirds in some surveys - came from the United States alone."
        },
        {
          type: "match",
          q: "Match each figure to what it describes in the overgeneralization critique.",
          pairs: [
            ["96%", "Share of subjects from Western industrialized nations"],
            ["12%", "Share of world population those nations hold"],
            ["68%", "Approximate share of subjects from the US in one survey"]
          ],
          explain: "These figures capture how a small, wealthy population dominated the participant pool."
        },
        {
          type: "truefalse",
          q: "Systematically drawing samples from a narrow group is called sampling bias.",
          answer: true,
          explain: "When participants come mostly from one unrepresentative group, that sampling bias distorts general conclusions."
        },
        {
          type: "order",
          q: "Order these regions from MOST to LEAST represented in the psychology samples that prompted this critique.",
          items: [
            "United States",
            "Other Western nations",
            "Non-Western industrialized nations",
            "The rest of the world"
          ],
          explain: "US undergraduates dominated, followed by other Western samples, while most of the world was barely represented."
        }
      ]
    },
    {
      id: "l20",
      title: "Muller-Lyer illusion variation",
      intro: "The Muller-Lyer illusion fools some cultures far more than others, showing that even basic visual perception is shaped by the environment people grow up in.",
      questions: [
        {
          type: "mcq",
          q: "The Muller-Lyer illusion involves two lines that are actually equal in length but appear different because of what added feature?",
          choices: [
            "Different colors",
            "Arrow-like fins on their ends",
            "Curved shapes",
            "Flashing motion"
          ],
          answer: 1,
          explain: "Fins or arrowheads on the line ends make two lines of equal length look unequal."
        },
        {
          type: "truefalse",
          q: "American college students were among the MOST fooled by the Muller-Lyer illusion in cross-cultural studies.",
          answer: true,
          explain: "US undergraduates needed one line to be much longer before the two looked equal - they were highly susceptible."
        },
        {
          type: "fill",
          q: "The idea that growing up around straight lines and right angles increases susceptibility is called the ____ world hypothesis.",
          answer: "carpentered",
          accept: ["carpentered"],
          explain: "The 'carpentered world' hypothesis links illusion strength to environments full of manufactured straight edges."
        },
        {
          type: "mcq",
          q: "The San foragers of the Kalahari, who live where few straight edges exist, responded to the illusion how?",
          choices: [
            "They were fooled even more strongly than Americans",
            "They were barely fooled by it at all",
            "They could not see the lines",
            "They perceived the lines as curved"
          ],
          answer: 1,
          explain: "The San were hardly susceptible, showing that a carpentered environment - not universal biology alone - drives the effect."
        },
        {
          type: "match",
          q: "Match each group or factor to its relationship with the Muller-Lyer illusion.",
          pairs: [
            ["US undergraduates", "Very high susceptibility"],
            ["San foragers of the Kalahari", "Very low susceptibility"],
            ["A carpentered environment", "Strengthens the illusion"]
          ],
          explain: "Segall, Campbell, and Herskovits (1966) found susceptibility tracked how 'carpentered', or full of straight lines, a person's surroundings were."
        },
        {
          type: "mcq",
          q: "What broader lesson did the Muller-Lyer findings teach about perception?",
          choices: [
            "Perception is entirely learned with no biological basis at all",
            "Even basic visual perception can be shaped by culture and environment",
            "Only language, not vision, varies across cultures",
            "Illusions affect everyone on Earth identically"
          ],
          answer: 1,
          explain: "The results showed that something as basic as judging line length can differ by cultural environment."
        },
        {
          type: "order",
          q: "Put the logic of the carpentered-world explanation in order.",
          items: [
            "People grow up surrounded by straight-edged buildings",
            "Their visual system adapts to those angles",
            "They misjudge the fin-ended lines",
            "So the illusion fools them strongly"
          ],
          explain: "Exposure to manufactured right angles tunes perception, making the illusion more powerful for that group."
        }
      ]
    },
    {
      id: "l21",
      title: "WEIRD outliers, not baseline",
      intro: "Across many domains - fairness games, individualism, and styles of thinking - WEIRD people often sit at the extreme end rather than the middle of human variation.",
      questions: [
        {
          type: "mcq",
          q: "Henrich and colleagues argued that on many psychological measures, WEIRD people tend to be:",
          choices: [
            "Perfectly average representatives of humanity",
            "Frequent outliers at the extreme end of the range",
            "Impossible to compare with any other group",
            "Identical to non-industrial societies"
          ],
          answer: 1,
          explain: "Rather than sitting in the middle, WEIRD samples often fall at the far edge of human variation."
        },
        {
          type: "match",
          q: "Match each domain to how WEIRD people often differ from other populations.",
          pairs: [
            ["Self-concept", "More individualistic and independent"],
            ["Reasoning style", "More analytic than holistic"],
            ["Fairness games", "Unusually strong fairness toward strangers"]
          ],
          explain: "WEIRD samples skew individualistic, analytic, and fairness-oriented compared with many other societies."
        },
        {
          type: "fill",
          q: "In the ultimatum game, WEIRD players tend to make fairly ____ offers, while some small-scale societies behave quite differently.",
          answer: "equal",
          accept: ["equal", "fair", "even"],
          explain: "WEIRD participants often propose near-even splits, but offers vary widely across cultures, so their behavior is not universal."
        },
        {
          type: "truefalse",
          q: "WEIRD people tend to reason more analytically, while many East Asian samples reason more holistically.",
          answer: true,
          explain: "Research on cognition finds WEIRD samples focus on objects and categories, while holistic thinkers weigh context and relationships more heavily."
        },
        {
          type: "mcq",
          q: "'Individualism' as a WEIRD tendency means people primarily define themselves by:",
          choices: [
            "Their family, group, and social roles",
            "Their personal attributes, goals, and choices",
            "Their nation's long history",
            "Their religion alone"
          ],
          answer: 1,
          explain: "Individualistic self-concepts emphasize the independent person, while many other cultures emphasize interdependence and group ties."
        },
        {
          type: "truefalse",
          q: "Because WEIRD samples are outliers, findings from them automatically describe all of humanity.",
          answer: false,
          explain: "Being outliers means WEIRD findings are an especially risky basis for claims about all humans."
        },
        {
          type: "order",
          q: "Order these self-concepts from MOST independent to MOST interdependent.",
          items: [
            "A highly individualistic WEIRD sample",
            "A moderately individualistic society",
            "A strongly collectivist society"
          ],
          explain: "WEIRD samples cluster at the independent, individualistic extreme of this spectrum."
        }
      ]
    },
    {
      id: "l22",
      title: "Consequences for theory",
      intro: "When a pattern found only in WEIRD samples is treated as a human universal, psychology mistakes a local quirk for the shared nature of our species.",
      questions: [
        {
          type: "mcq",
          q: "What is the core theoretical danger the WEIRD critique warns about?",
          choices: [
            "Studies simply run too many statistical tests",
            "Local, culture-specific patterns get mistaken for universal human psychology",
            "Researchers never repeat their experiments",
            "Non-Western societies have no psychology worth studying"
          ],
          answer: 1,
          explain: "The central risk is generalizing a WEIRD-specific finding into a false claim about all humans."
        },
        {
          type: "truefalse",
          q: "If a trait appears in WEIRD samples, the critique says we can safely assume it is hardwired in all humans.",
          answer: false,
          explain: "We cannot assume universality; the trait must be tested across diverse populations before such a claim can hold."
        },
        {
          type: "fill",
          q: "Treating a culturally local finding as if it applied to everyone is a failure of ____, the extent to which results apply beyond the sample.",
          answer: "generalizability",
          accept: ["generalizability", "generalisability", "external validity"],
          explain: "Generalizability, also called external validity, is exactly what WEIRD-only samples put at risk."
        },
        {
          type: "match",
          q: "Match each research claim to whether it is safely universal or still needs cross-cultural testing.",
          pairs: [
            ["'All humans prefer near-equal splits'", "Needs cross-cultural testing"],
            ["'This illusion fools everyone equally'", "Needs cross-cultural testing"],
            ["'Humans everywhere can acquire language'", "Better supported across cultures"]
          ],
          explain: "Sweeping claims built only on WEIRD data must be checked elsewhere before being called universal."
        },
        {
          type: "mcq",
          q: "A textbook reports a finding from US students as a fact about 'human nature.' The WEIRD critique would call this:",
          choices: [
            "Fine, since students are typical humans",
            "An overgeneralization that may not hold in other cultures",
            "Proof that the finding is biologically universal",
            "Irrelevant to psychology"
          ],
          answer: 1,
          explain: "Presenting a WEIRD result as universal human nature is precisely the overgeneralization the critique targets."
        },
        {
          type: "truefalse",
          q: "The WEIRD critique allows that some findings may be genuinely universal, but says universality must be demonstrated rather than assumed.",
          answer: true,
          explain: "The point is not that nothing is universal, but that universality has to be tested rather than presumed from a single population."
        },
        {
          type: "order",
          q: "Order the steps by which a local pattern hardens into a false 'universal.'",
          items: [
            "A study finds a pattern in WEIRD subjects",
            "The pattern is published as a general result",
            "Textbooks repeat it as human nature",
            "Other cultures are never tested"
          ],
          explain: "Skipping cross-cultural testing lets a local finding calcify into an unquestioned 'universal.'"
        }
      ]
    },
    {
      id: "l23",
      title: "The generalizability crisis",
      intro: "Beyond whether studies replicate, the generalizability crisis asks whether their results extend to other people, settings, and stimuli - a matter of external validity long neglected.",
      questions: [
        {
          type: "mcq",
          q: "'External validity' refers to the degree to which study results:",
          choices: [
            "Were analyzed with the correct statistics",
            "Generalize to other people, settings, and situations",
            "Were free of measurement error",
            "Matched the researcher's hypothesis"
          ],
          answer: 1,
          explain: "External validity is about whether findings extend beyond the specific sample and conditions that were studied."
        },
        {
          type: "truefalse",
          q: "The WEIRD problem is essentially a challenge to the external validity of psychological findings.",
          answer: true,
          explain: "If samples are unrepresentative, results may not generalize - a direct threat to external validity."
        },
        {
          type: "fill",
          q: "Tal Yarkoni's 2020 paper named this neglected issue the '____ crisis.'",
          answer: "generalizability",
          accept: ["generalizability", "generalisability"],
          explain: "Yarkoni (2020) argued that weak generalizability, not just failed replication, is a deep problem for the field."
        },
        {
          type: "match",
          q: "Match each concept to its focus.",
          pairs: [
            ["Internal validity", "Whether a study correctly shows cause and effect within its sample"],
            ["External validity", "Whether results generalize to other people and settings"],
            ["Generalizability crisis", "Worry that many findings do not extend beyond narrow samples"]
          ],
          explain: "Internal validity is about a study's own logic, while external validity and the generalizability crisis concern its reach beyond the sample."
        },
        {
          type: "mcq",
          q: "How does the generalizability crisis differ from the more familiar replication crisis?",
          choices: [
            "It asks whether a result extends to new populations and contexts, not just whether it repeats",
            "It only concerns statistical software errors",
            "It claims no psychology finding is ever true",
            "It is exactly the same thing under a new name"
          ],
          answer: 0,
          explain: "Replication asks whether a result repeats under similar conditions; generalizability asks whether it holds under different ones."
        },
        {
          type: "truefalse",
          q: "A finding can replicate reliably in WEIRD samples yet still fail to generalize to other cultures.",
          answer: true,
          explain: "Repeatability within one population does not guarantee that the result extends to different populations."
        },
        {
          type: "order",
          q: "Order these questions from the narrowest (internal) to the broadest (generalizability) concern.",
          items: [
            "Did the effect occur in this exact study?",
            "Does the effect repeat in similar studies?",
            "Does the effect hold in other cultures and settings?"
          ],
          explain: "Each step widens the scope, ending with the broad question of generalizability across populations."
        }
      ]
    },
    {
      id: "l24",
      title: "Toward representative sampling",
      intro: "Fixing the WEIRD problem means sampling more of humanity - through cross-cultural collaboration and global databases - instead of relying on North American undergraduates.",
      questions: [
        {
          type: "mcq",
          q: "What is the main proposed remedy for the WEIRD problem?",
          choices: [
            "Stop running psychology experiments altogether",
            "Broaden samples to include more of the world's diverse populations",
            "Study only North American undergraduates, but more carefully",
            "Rely entirely on brain scans instead of behavior"
          ],
          answer: 1,
          explain: "The solution is to sample beyond WEIRD populations so findings can be tested across humanity."
        },
        {
          type: "truefalse",
          q: "Recruiting from a wider range of cultures increases the external validity of psychological claims.",
          answer: true,
          explain: "Diverse sampling lets researchers see which findings truly generalize and which are only culturally local."
        },
        {
          type: "fill",
          q: "For decades, the single most convenient participant pool was the North American college ____.",
          answer: "undergraduate",
          accept: ["undergraduate", "undergraduates", "student", "students"],
          explain: "Cheap, readily available undergraduates dominated samples - the very convenience that created the WEIRD skew."
        },
        {
          type: "match",
          q: "Match each strategy to how it helps fix the WEIRD problem.",
          pairs: [
            ["Cross-cultural collaborations", "Bring in participants from many societies"],
            ["Reporting the sampled population", "Makes overgeneralization harder to hide"],
            ["Global research databases", "Pool diverse data for broader tests"]
          ],
          explain: "Together, these practices push psychology toward samples that better represent humanity."
        },
        {
          type: "mcq",
          q: "Why should researchers clearly report exactly who their participants were?",
          choices: [
            "To make the paper longer",
            "So readers can judge how far the results might generalize",
            "Because journals require participant photos",
            "To hide the limitations of the sample"
          ],
          answer: 1,
          explain: "Transparent reporting of the sample lets others assess generalizability instead of assuming universality."
        },
        {
          type: "order",
          q: "Order these steps toward a more representative psychology.",
          items: [
            "Notice that samples are overwhelmingly WEIRD",
            "Report the actual population studied",
            "Recruit participants from diverse cultures",
            "Build shared global databases"
          ],
          explain: "Awareness leads to transparency, then to broader recruitment, and finally to shared cross-cultural data."
        },
        {
          type: "truefalse",
          q: "Expanding beyond WEIRD samples means every past psychology finding is automatically false.",
          answer: false,
          explain: "It does not falsify past work; it tests which findings generalize and which turn out to be culturally specific."
        }
      ]
    }
  ]
});
