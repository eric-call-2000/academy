window.ACADEMY.addUnit("culture", {
  id: "unit-24",
  title: "Methods in Cultural Psychology",
  color: "#e08a1e",
  icon: "🔬",
  description: "Surveys the core toolkit of cultural psychology - priming, situated cognition, experience sampling, ethnography, measurement equivalence, response-style corrections, unpackaging, and cultural neuroscience - along with the methodological hazards each addresses.",
  lessons: [
    {
      id: "l185",
      title: "Priming culture experimentally",
      intro: "By momentarily activating an independent or interdependent construal, researchers can show that culture causally shapes thought within a single person.",
      questions: [
        {
          type: "mcq",
          q: "Why does experimentally priming a cultural mindset give stronger evidence of causation than simply comparing two nations?",
          choices: ["It manipulates the mindset within people while holding other factors constant", "It always uses larger samples", "It avoids using any statistics", "It proves that genes cause the difference"],
          answer: 0,
          explain: "Random assignment to a prime manipulates culture-relevant construal directly, ruling out the many confounds that differ between whole nations."
        },
        {
          type: "mcq",
          q: "In Trafimow, Triandis, and Goto's 1991 study, how were people primed toward a private versus a collective self?",
          choices: ["By being shown national flags", "By taking a personality test", "By thinking about how they differ from versus resemble family and friends", "By learning a second language"],
          answer: 2,
          explain: "Reading a story and focusing on differences from family and friends primed the private self, while focusing on similarities primed the collective self."
        },
        {
          type: "truefalse",
          q: "Hong, Morris, Chiu, and Benet-Martinez (2000) showed that bicultural Hong Kong participants could 'frame-switch,' making more external attributions after seeing Chinese icons than after American ones.",
          answer: true,
          explain: "This dynamic constructivist study demonstrated cultural frame switching: icons like the Great Wall versus Superman shifted whether attributions were situational or dispositional."
        },
        {
          type: "truefalse",
          q: "Because a prime shifts a person's construal only briefly, it demonstrates that cultural differences are fixed and unchangeable.",
          answer: false,
          explain: "The opposite: that a brief prime can move judgments shows these differences are dynamic and context-activated, not rigidly fixed."
        },
        {
          type: "fill",
          q: "Priming that momentarily makes an independent or interdependent self-view accessible is used to test whether culture ____ psychological differences.",
          answer: "causes",
          accept: ["causes", "causally produces", "produces", "drives"],
          explain: "Because the prime is randomly assigned, any resulting difference points to culture as a cause rather than a mere correlate."
        },
        {
          type: "order",
          q: "Order the logic of a cultural priming experiment.",
          items: ["Randomly assign people to an independent or interdependent prime", "The prime activates one self-construal", "Measure how judgments differ between conditions"],
          explain: "Random assignment plus a manipulated construal lets differences in the outcome be attributed to the primed mindset."
        },
        {
          type: "match",
          q: "Match each priming concept or study to its description.",
          pairs: [["Cultural priming", "Momentarily activating a self-construal"], ["Trafimow et al. (1991)", "Story task priming the private versus collective self"], ["Hong et al. (2000)", "Cultural frame switching in biculturals"]],
          explain: "Each is a way of activating a cultural mindset in the moment to observe its causal effect on cognition."
        }
      ]
    },
    {
      id: "l186",
      title: "Situated cognition approach",
      intro: "Oyserman's culture-as-situated-cognition model treats individualism and collectivism not as fixed traits but as mindsets cued online by the immediate context.",
      questions: [
        {
          type: "mcq",
          q: "The culture-as-situated-cognition perspective treats individualism and collectivism as...",
          choices: ["Fixed personality traits present at all times", "Mindsets that can be momentarily cued by context", "Purely genetic tendencies", "Facts about national economies"],
          answer: 1,
          explain: "Oyserman argues these are cognitive mindsets made accessible by situational cues, not stable dispositions carried unchanged everywhere."
        },
        {
          type: "truefalse",
          q: "In this view, the same person can think in a more independent or a more interdependent way depending on what the situation makes salient.",
          answer: true,
          explain: "Situated cognition holds that both mindsets are available to most people and that context determines which is used at a given moment."
        },
        {
          type: "truefalse",
          q: "The situated-cognition approach assumes culture is a stable internal trait that appears identically across all contexts.",
          answer: false,
          explain: "It rejects the trait view, arguing instead that cultural cognition is dynamic and triggered by the immediate situation."
        },
        {
          type: "fill",
          q: "Culture-as-situated-cognition says cultural knowledge is used only when the ____ makes it accessible.",
          answer: "situation",
          accept: ["situation", "context", "cue", "environment"],
          explain: "Cultural mindsets are treated as online processes: they influence thought when a cue in the situation calls them up."
        },
        {
          type: "order",
          q: "Order how culture works as a situated, online process.",
          items: ["A situational cue is encountered", "A relevant cultural mindset becomes accessible", "It shapes perception and judgment in that moment"],
          explain: "The model is a moment-to-moment sequence: cue, activation of a mindset, then its effect on cognition."
        },
        {
          type: "match",
          q: "Match each accessibility term to its meaning.",
          pairs: [["Chronic accessibility", "A mindset one's culture makes habitually available"], ["Momentary accessibility", "A mindset cued by the immediate situation"], ["Frame switching", "Shifting mindsets as cues change"]],
          explain: "Situated cognition distinguishes what is habitually accessible from what a passing cue activates in the moment."
        },
        {
          type: "mcq",
          q: "A key implication of the situated-cognition model is that cross-cultural differences...",
          choices: ["Can be reproduced within a single person through priming", "Can never be studied experimentally", "Prove that biology determines all thought", "Disappear entirely under every condition"],
          answer: 0,
          explain: "If mindsets can be cued in anyone, then priming can recreate cross-national contrasts inside one individual, tying the two approaches together."
        }
      ]
    },
    {
      id: "l187",
      title: "Experience sampling methods",
      intro: "Experience sampling, developed by Csikszentmihalyi and Larson, captures emotion and behavior as they happen in daily life, reducing the distortions of retrospective memory.",
      questions: [
        {
          type: "mcq",
          q: "The Experience Sampling Method (ESM), developed by Csikszentmihalyi and Larson, collects data by...",
          choices: ["Interviewing people once about their whole childhood", "Signaling people at random times to report their current experience", "Measuring brain activity in a scanner", "Analyzing historical documents"],
          answer: 1,
          explain: "ESM uses a signaling device that beeps at random moments, prompting people to record what they are doing and feeling right then."
        },
        {
          type: "truefalse",
          q: "A central advantage of ESM is high ecological validity: it captures experience in real-life settings rather than in the lab.",
          answer: true,
          explain: "By sampling ordinary life as it unfolds, ESM reflects how people actually think and feel in their everyday environments."
        },
        {
          type: "truefalse",
          q: "ESM is designed to depend heavily on participants' long-term retrospective memory of past weeks.",
          answer: false,
          explain: "ESM does the reverse: it asks about the present moment precisely to bypass the errors of long-range retrospective recall."
        },
        {
          type: "fill",
          q: "Because it captures feelings as they happen, ESM reduces the ____ bias that distorts memories recalled long afterward.",
          answer: "retrospective",
          accept: ["retrospective", "recall", "memory"],
          explain: "Momentary reporting sidesteps retrospective bias, the tendency to reconstruct past emotion inaccurately when recalling it later."
        },
        {
          type: "match",
          q: "Match each method or idea to its description.",
          pairs: [["Experience Sampling Method", "Momentary reports triggered by a signal"], ["Day Reconstruction Method", "Reconstructing yesterday episode by episode"], ["Ecological validity", "Reflecting real everyday life"]],
          explain: "Kahneman and colleagues' Day Reconstruction Method complements ESM, and both aim for ecological validity."
        },
        {
          type: "order",
          q: "Order a typical experience-sampling study.",
          items: ["Participants carry a signaling device", "A beep prompts them at a random moment", "They immediately record their emotion and activity"],
          explain: "The prompt-and-record cycle repeats across days, building a picture of experience sampled in real time."
        },
        {
          type: "mcq",
          q: "Why is ESM especially useful for cross-cultural research on emotion?",
          choices: ["It removes all cultural differences", "It only works in laboratories", "It samples real emotional life rather than global self-reports", "It requires no participant effort"],
          answer: 2,
          explain: "ESM captures how emotions are actually lived across cultures, avoiding the biases of abstract, summary self-descriptions."
        }
      ]
    },
    {
      id: "l188",
      title: "Ethnography and thick description",
      intro: "Clifford Geertz's interpretive anthropology reads culture as webs of meaning, using 'thick description' to capture not just behavior but the significance behind it.",
      questions: [
        {
          type: "mcq",
          q: "The phrase 'thick description,' central to Clifford Geertz's interpretive anthropology, refers to...",
          choices: ["Writing very long field notes", "Describing behavior together with the web of meaning that makes it intelligible", "Measuring behavior with statistics", "Printing a thick book"],
          answer: 1,
          explain: "Thick description records not only the physical act but the layers of social meaning that make it what it is to participants."
        },
        {
          type: "truefalse",
          q: "Geertz borrowed the term 'thick description' from the philosopher Gilbert Ryle.",
          answer: true,
          explain: "Geertz adapted Ryle's distinction between thin and thick description for his 1973 book The Interpretation of Cultures."
        },
        {
          type: "mcq",
          q: "Geertz's classic example contrasts a mere twitch of the eye with a wink. The difference lies in...",
          choices: ["Nothing at all", "The color of the eye", "The speed of the movement", "The layered social meaning of the gesture"],
          answer: 3,
          explain: "A twitch and a wink can be physically identical; only the shared cultural meaning distinguishes a signal from an involuntary spasm."
        },
        {
          type: "fill",
          q: "For Geertz, culture consists of the 'webs of ____' that humans themselves have spun.",
          answer: "significance",
          accept: ["significance", "meaning", "meanings"],
          explain: "His famous line describes people as suspended in webs of significance they have spun, which he takes culture to be."
        },
        {
          type: "truefalse",
          q: "Geertz argued that ethnography should reduce culture to universal laws and numerical measurement.",
          answer: false,
          explain: "Geertz championed interpretation, treating culture like a text to be read for meaning rather than reduced to general laws."
        },
        {
          type: "match",
          q: "Match each Geertzian term to its meaning.",
          pairs: [["Thick description", "Recording action plus its meanings"], ["Thin description", "The bare physical behavior alone"], ["Deep Play", "Geertz's essay on the Balinese cockfight"]],
          explain: "Thick versus thin marks the gap between meaningful action and raw movement; 'Deep Play' is his best-known interpretive study."
        },
        {
          type: "order",
          q: "Order how an interpretive ethnographer works, according to Geertz.",
          items: ["Observe a social action such as a wink", "Ask what it means to participants", "Interpret it within its web of cultural meaning"],
          explain: "Interpretation moves from the observed act to its local significance and finally to the wider system of meaning."
        }
      ]
    },
    {
      id: "l189",
      title: "Measurement equivalence",
      intro: "Comparing minds across cultures requires equivalence: showing an instrument measures the same construct in the same way, or comparisons become meaningless.",
      questions: [
        {
          type: "mcq",
          q: "Measurement (or construct) equivalence asks whether...",
          choices: ["An instrument measures the same construct in the same way across cultures", "Two cultures have equal wealth", "Everyone gives identical answers", "Translators are paid equally"],
          answer: 0,
          explain: "Equivalence is about comparability of measurement: only if the same construct is captured the same way can scores be compared."
        },
        {
          type: "truefalse",
          q: "Without scalar (full-score) equivalence, directly comparing mean scores across cultures can be misleading.",
          answer: true,
          explain: "Mean comparisons assume equal item intercepts; without scalar invariance, a mean difference may be an artifact of the instrument."
        },
        {
          type: "fill",
          q: "When an item works differently across groups even at equal trait levels, it shows item bias, also called differential item ____.",
          answer: "functioning",
          accept: ["functioning", "function"],
          explain: "Differential item functioning (DIF) occurs when people of equal standing on the trait answer an item differently by group."
        },
        {
          type: "match",
          q: "Match each source of bias (van de Vijver and Leung) to its description.",
          pairs: [["Construct bias", "The concept itself differs across cultures"], ["Method bias", "Sample, instrument, or administration differences"], ["Item bias (DIF)", "A single item behaves differently across groups"]],
          explain: "Van de Vijver and Leung distinguish bias at the level of the construct, the method, and individual items."
        },
        {
          type: "order",
          q: "Order the increasingly strict levels of measurement invariance.",
          items: ["Configural (same factor pattern)", "Metric (equal factor loadings)", "Scalar (equal intercepts)"],
          explain: "Each level adds a constraint; scalar invariance is the strongest and is required before comparing latent means."
        },
        {
          type: "mcq",
          q: "Which level of equivalence must hold before you can meaningfully compare average scores between cultures?",
          choices: ["Configural only", "Metric only", "Scalar (full-score) equivalence", "No equivalence is needed"],
          answer: 2,
          explain: "Scalar equivalence ensures equal intercepts, so an observed mean difference reflects a true difference in the construct."
        },
        {
          type: "truefalse",
          q: "Establishing construct equivalence guarantees that translated items are automatically free of bias.",
          answer: false,
          explain: "Even with a shared construct, method and item biases can remain and must be checked separately."
        }
      ]
    },
    {
      id: "l190",
      title: "Reference-group and response styles",
      intro: "Self-report comparisons across cultures are threatened by response styles like acquiescence and extreme responding, and by the reference-group effect that Heine and colleagues identified.",
      questions: [
        {
          type: "mcq",
          q: "The reference-group effect (Heine et al., 2002) is the tendency to...",
          choices: ["Rate oneself against the implicit standards of one's own culture", "Always agree with a group", "Copy a control group's answers", "Ignore other people entirely"],
          answer: 0,
          explain: "People judge themselves relative to their own culture's norm, so the same rating means different things in different cultures."
        },
        {
          type: "mcq",
          q: "Heine, Lehman, Peng, and Greenholtz (2002) used the reference-group effect to explain why...",
          choices: ["All Likert scales are invalid within a single culture", "Self-report Likert comparisons across cultures can fail to match behavioral differences", "Nobody can be surveyed", "Reaction times differ"],
          answer: 1,
          explain: "Because each group anchors on its own standard, subjective Likert comparisons often contradict what behavior and other measures show."
        },
        {
          type: "truefalse",
          q: "Acquiescence bias, or 'yea-saying,' is the tendency to agree with items regardless of their content.",
          answer: true,
          explain: "Acquiescent responders endorse statements broadly, which can inflate or distort scores when it varies across cultures."
        },
        {
          type: "fill",
          q: "The tendency to choose the endpoints of a rating scale, such as 1 or 7, is called ____ response style.",
          answer: "extreme",
          accept: ["extreme", "extreme responding"],
          explain: "Extreme response style (ERS) is a preference for the scale's endpoints and differs systematically across cultures."
        },
        {
          type: "match",
          q: "Match each response tendency to its description.",
          pairs: [["Acquiescence", "Agreeing regardless of content"], ["Extreme responding", "Favoring the scale endpoints"], ["Reference-group effect", "Comparing oneself to one's own culture's norm"]],
          explain: "Each of these biases can make raw cross-cultural self-report scores non-comparable."
        },
        {
          type: "order",
          q: "Order how the reference-group effect distorts a cross-cultural comparison.",
          items: ["Each person rates a trait against their own culture's norm", "The implicit standard differs between cultures", "Group means look similar despite real differences"],
          explain: "Anchoring on culture-specific standards can wash out or even reverse genuine differences in the raw means."
        },
        {
          type: "truefalse",
          q: "Anchoring vignettes and score standardization are tools used to correct for response styles and the reference-group effect.",
          answer: true,
          explain: "Anchoring vignettes provide a common yardstick, and standardization rescales responses to reduce style-driven artifacts."
        }
      ]
    },
    {
      id: "l191",
      title: "Unpackaging culture",
      intro: "Championed by Michael Harris Bond and colleagues, unpackaging replaces the vague label 'culture' with a measured psychological variable that mediates a cross-national difference.",
      questions: [
        {
          type: "mcq",
          q: "'Unpackaging' culture means...",
          choices: ["Replacing the label 'culture' with the specific psychological variable that explains a difference", "Removing culture from a study entirely", "Shipping surveys internationally", "Translating a questionnaire"],
          answer: 0,
          explain: "Unpackaging opens the black box of 'culture' by identifying the concrete variable that actually carries the effect."
        },
        {
          type: "truefalse",
          q: "In unpackaging, a measured variable such as self-construal or values is tested as a mediator of a cross-national difference.",
          answer: true,
          explain: "The strategy treats a candidate variable as the mechanism through which nationality relates to the outcome."
        },
        {
          type: "fill",
          q: "In an unpackaging study, the cultural variable is tested statistically as a ____ that accounts for the national difference in the outcome.",
          answer: "mediator",
          accept: ["mediator", "mediating variable", "mediation"],
          explain: "If the variable mediates the effect, it explains why the two nations differ, replacing 'culture' as the explanation."
        },
        {
          type: "mcq",
          q: "Michael Harris Bond is a cross-cultural psychologist closely associated with which strategy?",
          choices: ["Banning all cross-cultural research", "Studying only one country", "Rejecting the use of values", "Unpackaging cultural differences into measurable variables"],
          answer: 3,
          explain: "Bond and colleagues advocated unpackaging, urging researchers to name and measure the variables that culture stands in for."
        },
        {
          type: "match",
          q: "Match each element of the unpackaging strategy to its role.",
          pairs: [["Country or culture", "The unexplained 'package' or black box"], ["Mediator", "The measured variable that carries the effect"], ["Unpackaging", "Showing the mediator explains the difference"]],
          explain: "Unpackaging swaps an unexplained grouping variable for a measured mechanism that accounts for the difference."
        },
        {
          type: "order",
          q: "Order the steps of an unpackaging analysis.",
          items: ["Find a difference in an outcome between two nations", "Measure a candidate cultural variable in both", "Show it statistically mediates the difference"],
          explain: "You start with a national difference, propose a mechanism, and test whether it accounts for the gap."
        },
        {
          type: "truefalse",
          q: "If a proposed variable fully mediates the difference, then 'culture' as an unexplained category adds little further explanation.",
          answer: true,
          explain: "Full mediation means the measured variable does the explanatory work, so the bare label 'culture' becomes redundant."
        }
      ]
    },
    {
      id: "l192",
      title: "Neuroscience of culture",
      intro: "Cultural neuroscience uses tools like fMRI to show that cultural experience shapes brain function, as in studies where self and close others overlap in the medial prefrontal cortex.",
      questions: [
        {
          type: "mcq",
          q: "Cultural neuroscience investigates...",
          choices: ["How cultural experience shapes brain function and structure", "Only the anatomy of single neurons", "Whether culture exists at all", "The genetics of language alone"],
          answer: 0,
          explain: "The field links cultural experience and psychological processes to measurable patterns of brain activity."
        },
        {
          type: "mcq",
          q: "In Zhu, Zhang, Fan, and Han's 2007 fMRI study, Chinese participants showed overlapping activity for thinking about the self and about their mother in which region?",
          choices: ["The cerebellum", "The medial prefrontal cortex (mPFC)", "The primary visual cortex", "The brainstem"],
          answer: 1,
          explain: "For Chinese participants, judgments about self and mother engaged the same mPFC region tied to self-representation."
        },
        {
          type: "truefalse",
          q: "In that study, Western participants showed the same overlap of self and mother in the medial prefrontal cortex as Chinese participants did.",
          answer: false,
          explain: "Westerners differentiated self from mother in the mPFC, whereas interdependent Chinese participants represented the mother within the self."
        },
        {
          type: "fill",
          q: "Zhu and colleagues' finding suggests that for interdependent selves, close others like the mother are represented as part of the ____.",
          answer: "self",
          accept: ["self", "self-concept", "self-representation"],
          explain: "The shared neural signature implies the interdependent self literally includes close others in its self-representation."
        },
        {
          type: "match",
          q: "Match each term to its description.",
          pairs: [["Medial prefrontal cortex", "Region linked to self-representation"], ["Zhu et al. (2007)", "Self and mother overlap in Chinese participants"], ["Cultural neuroscience", "Links cultural experience to brain activity"]],
          explain: "The mPFC is a key self-related region, and Zhu et al. is a landmark cultural neuroscience study of the self."
        },
        {
          type: "truefalse",
          q: "Priming studies (for example, by Chiao and colleagues) suggest neural self-representation can shift with a momentarily activated cultural mindset.",
          answer: true,
          explain: "Priming biculturals toward independence or interdependence changed self-related mPFC responses, echoing the situated-cognition idea in the brain."
        },
        {
          type: "order",
          q: "Order the reasoning behind a cultural neuroscience self-representation study.",
          items: ["Cultures differ in independent versus interdependent self-construal", "Participants judge traits of the self and of a close other", "Brain overlap reveals how the self includes others"],
          explain: "The design translates a cultural hypothesis about the self into a neural prediction about overlapping activation."
        }
      ]
    }
  ]
});
