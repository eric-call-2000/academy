window.ACADEMY.addUnit("attachment", {
  id: "unit-7",
  title: "Separation and Maternal Deprivation",
  color: "#e0518a",
  icon: "💔",
  description: "Examines early separation research, the protest-despair-detachment sequence, Robertson's hospital films, Bowlby's 44 Thieves study, and Rutter's critique of the maternal deprivation hypothesis.",
  lessons: [
    {
      id: "l49",
      title: "Phases of Separation Response",
      intro: "Robertson and Bowlby observed that young children separated from a caregiver move through a predictable sequence of protest, despair, and detachment.",
      questions: [
        { type: "order", q: "Order the phases of a young child's response to prolonged separation from a caregiver.", items: ["Protest", "Despair", "Detachment"], explain: "Robertson and Bowlby observed a consistent three-phase sequence: protest first, then despair, then detachment." },
        { type: "mcq", q: "The protest-despair-detachment model grew out of observations by which pair of researchers?", choices: ["James Robertson and John Bowlby", "Sigmund and Anna Freud", "Harry and Margaret Harlow", "Mary Ainsworth and Mary Main"], answer: 0, explain: "James Robertson, working with John Bowlby at the Tavistock Clinic, documented the sequence in young children separated from their mothers." },
        { type: "truefalse", q: "The three phases of separation response typically appear in a fixed order over time.", answer: true, explain: "Children usually pass through protest first, then despair, and finally detachment as the separation continues." },
        { type: "fill", q: "The protest-despair-detachment sequence was based on observations of young children separated from their ____ during stays in hospitals and residential nurseries.", answer: "caregivers", accept: ["caregivers", "caregiver", "mothers", "mother", "parents"], explain: "The model came from watching young children separated from their primary caregivers, usually their mothers, in institutional settings." },
        { type: "mcq", q: "In what settings were these separation reactions first closely observed?", choices: ["Ordinary daycare drop-offs", "Hospitals and residential nurseries", "University laboratories", "Adoption interviews"], answer: 1, explain: "Robertson observed young children separated from their families during hospital admissions and stays in residential nurseries." },
        { type: "match", q: "Match each separation phase to its core feature.", pairs: [["Protest", "Active crying and searching for the caregiver"], ["Despair", "Withdrawal and apparent hopelessness"], ["Detachment", "Emotional distancing behind apparent recovery"]], explain: "Each phase has a distinct emotional signature, moving from active distress to withdrawal to defensive detachment." },
        { type: "truefalse", q: "Detachment is the first reaction a young child shows when a caregiver leaves.", answer: false, explain: "Protest, not detachment, comes first; detachment only appears after prolonged separation." }
      ]
    },
    {
      id: "l50",
      title: "The Protest Phase",
      intro: "The protest phase is the immediate reaction to separation, marked by active distress and searching for the absent caregiver.",
      questions: [
        { type: "mcq", q: "Which behaviors are most characteristic of the protest phase?", choices: ["Quiet apathy and reduced play", "Crying, screaming, and searching for the caregiver", "Cheerful engagement with strangers", "Indifference when the caregiver returns"], answer: 1, explain: "In the protest phase the child is acutely distressed, crying and actively searching for the absent caregiver." },
        { type: "truefalse", q: "During the protest phase, a child often rejects comfort offered by unfamiliar adults.", answer: true, explain: "The protesting child wants the specific missing caregiver and typically resists substitutes." },
        { type: "fill", q: "The protest phase is marked by active ____, with the child crying loudly and looking for the caregiver.", answer: "distress", accept: ["distress", "protest", "searching"], explain: "Protest is defined by intense, active distress rather than the quiet withdrawal seen later." },
        { type: "mcq", q: "When does the protest phase usually occur?", choices: ["Weeks after the caregiver leaves", "Immediately after the separation begins", "Only once the caregiver returns", "After the detachment phase"], answer: 1, explain: "Protest is the first, immediate reaction and can last from hours to a few days." },
        { type: "match", q: "Match each protest-phase behavior to what it signals.", pairs: [["Loud crying", "Acute emotional distress"], ["Scanning the door", "Searching for the caregiver"], ["Pushing away a nurse", "Rejecting a substitute caregiver"]], explain: "Protest behaviors all express the child's urgent wish to recover the specific absent caregiver." },
        { type: "truefalse", q: "A child in the protest phase appears calm and content.", answer: false, explain: "Protest involves visible agitation and crying, not calm contentment; calmness marks the later despair phase." },
        { type: "order", q: "Order these protest-phase reactions from the child's first response outward.", items: ["Caregiver leaves the room", "Child cries and reaches out", "Child searches and rejects strangers"], explain: "Protest unfolds as an immediate outcry followed by active searching and refusal of substitutes." }
      ]
    },
    {
      id: "l51",
      title: "The Despair Phase",
      intro: "As protest fades, the child enters despair, becoming withdrawn, hopeless, and noticeably less active.",
      questions: [
        { type: "mcq", q: "What best describes a child in the despair phase?", choices: ["Loud and physically agitated", "Withdrawn, quiet, and less active", "Sociable and playful with strangers", "Angry and demanding toward staff"], answer: 1, explain: "In despair the child becomes calmer but withdrawn, apathetic, and noticeably less active." },
        { type: "truefalse", q: "The reduced crying seen in the despair phase means the child has recovered and is no longer upset.", answer: false, explain: "The quiet of despair reflects hopelessness and withdrawal, not genuine recovery from distress." },
        { type: "fill", q: "In the despair phase the child seems to lose ____ that the caregiver will return, becoming listless and withdrawn.", answer: "hope", accept: ["hope"], explain: "Despair is characterized by an apparent loss of hope, with diminished activity and mournful withdrawal." },
        { type: "mcq", q: "Compared with the protest phase, activity and outward emotion in the despair phase are:", choices: ["Greatly increased", "About the same", "Noticeably diminished", "Completely absent forever"], answer: 2, explain: "Despair brings a marked drop in activity and outward emotional expression compared with the earlier protest." },
        { type: "match", q: "Match each despair-phase sign to its description.", pairs: [["Withdrawal", "Reduced interest in people and surroundings"], ["Apathy", "Low energy and diminished play"], ["Occasional crying", "Quiet mourning for the absent caregiver"]], explain: "Despair combines withdrawal, apathy, and intermittent mournful crying as the child seems to give up hope." },
        { type: "order", q: "Order these signs as a child moves from protest into despair.", items: ["Intense crying and searching", "Crying gradually quiets", "Child becomes withdrawn and listless"], explain: "As protest fades, the child grows quieter and slips into the withdrawn listlessness of despair." },
        { type: "truefalse", q: "The despair phase follows protest and comes before detachment.", answer: true, explain: "Despair is the middle phase, sitting between the initial protest and the later detachment." }
      ]
    },
    {
      id: "l52",
      title: "The Detachment Phase",
      intro: "In detachment the child appears to recover and become sociable, but this surface calm masks real emotional distancing from the caregiver.",
      questions: [
        { type: "mcq", q: "What makes the detachment phase potentially misleading to observers?", choices: ["The child looks recovered but is emotionally distanced", "The child cries more than ever before", "The child refuses to eat or sleep", "The child physically clings to every adult"], answer: 0, explain: "In detachment the child appears sociable and 'recovered,' but this masks real emotional distancing from the caregiver." },
        { type: "truefalse", q: "In the detachment phase, a child may seem indifferent or even avoidant when the caregiver returns.", answer: true, explain: "Detached children often ignore or turn away from the returning caregiver, showing the emotional distance beneath the calm." },
        { type: "fill", q: "The apparent recovery of the detachment phase actually masks emotional ____ from the caregiver.", answer: "distancing", accept: ["distancing", "detachment", "distance"], explain: "The child's renewed sociability hides a defensive distancing from the caregiver rather than true recovery." },
        { type: "mcq", q: "How might a detached child respond when the caregiver finally returns?", choices: ["With immediate joyful reunion", "With turning away or seeming not to care", "With prolonged, angry protest", "With the same searching as on day one"], answer: 1, explain: "Detachment often shows up as indifference or avoidance at reunion, as if the child has emotionally withdrawn from the bond." },
        { type: "match", q: "Match each detachment-phase feature to its meaning.", pairs: [["Renewed sociability", "Surface appearance of recovery"], ["Indifference at reunion", "Emotional distancing from the caregiver"], ["Engaging with staff", "Coping by relying less on the missing bond"]], explain: "The friendliness of detachment is a defensive surface; underneath, the child has distanced from the caregiver." },
        { type: "order", q: "Order the full separation sequence ending in detachment.", items: ["Protest", "Despair", "Detachment"], explain: "Detachment is the final phase, following protest and despair in the separation sequence." },
        { type: "truefalse", q: "A child's cheerful behavior in the detachment phase always means the separation caused no harm.", answer: false, explain: "The cheerfulness is a surface defense; detachment can signal that the child has emotionally withdrawn, not that no harm occurred." }
      ]
    },
    {
      id: "l53",
      title: "James Robertson's Films",
      intro: "James Robertson's 1952 documentary 'A Two-Year-Old Goes to Hospital' captured a young child's distress and became powerful evidence about separation.",
      questions: [
        { type: "mcq", q: "James Robertson's landmark 1952 film was titled:", choices: ["'Genie: A Wild Child'", "'A Two-Year-Old Goes to Hospital'", "'The Strange Situation'", "'Rock-a-Bye Baby'"], answer: 1, explain: "Robertson filmed 'A Two-Year-Old Goes to Hospital' in 1952 to document a young child's distress during a hospital stay." },
        { type: "truefalse", q: "James Robertson worked alongside John Bowlby at the Tavistock Clinic.", answer: true, explain: "Robertson was a social worker on Bowlby's team at the Tavistock, where he observed and filmed separated children." },
        { type: "fill", q: "Robertson's film followed a two-year-old girl named ____ during an eight-day hospital stay.", answer: "laura", accept: ["laura"], explain: "The film documented Laura, a two-year-old admitted for a minor operation, capturing her mounting distress." },
        { type: "mcq", q: "Why did Robertson film at set times with a clock in view?", choices: ["To make the footage more dramatic", "To provide unbiased, time-sampled evidence", "To keep the child entertained", "To shorten the film's length"], answer: 1, explain: "Filming at fixed intervals with a clock visible showed the record was not cherry-picked, making the evidence of distress credible." },
        { type: "truefalse", q: "Robertson's film showed the child remaining happy and untroubled throughout her hospital stay.", answer: false, explain: "The film instead documented the child's growing distress and withdrawal, which was its whole point." },
        { type: "match", q: "Match each detail to Robertson's 1952 film.", pairs: [["Child filmed", "A two-year-old named Laura"], ["Reason for admission", "A minor operation"], ["Team behind it", "Bowlby's group at the Tavistock Clinic"]], explain: "The film centered on Laura, admitted for minor surgery, and was made by Robertson within Bowlby's Tavistock group." },
        { type: "fill", q: "The film was intended to change how hospitals treated young ____ separated from their parents.", answer: "children", accept: ["children", "patients"], explain: "Robertson made the film as evidence to push hospitals toward more humane treatment of young child patients." }
      ]
    },
    {
      id: "l54",
      title: "Hospital and Institutional Reform",
      intro: "Robertson's evidence helped overturn restrictive hospital visiting rules, contributing to reforms like Britain's 1959 Platt Report.",
      questions: [
        { type: "mcq", q: "Before reform, how did many hospitals handle parents visiting sick young children?", choices: ["They encouraged parents to stay overnight", "They severely restricted or banned visiting", "They required parents to visit daily", "They had no rules about visiting"], answer: 1, explain: "Many mid-century hospitals sharply limited or forbade visiting, fearing it upset children and spread infection." },
        { type: "truefalse", q: "Robertson's film was immediately embraced by the medical establishment without objection.", answer: false, explain: "The film was initially met with hostility and disbelief from many doctors before attitudes gradually changed." },
        { type: "fill", q: "The 1959 ____ Report in Britain recommended unrestricted visiting and letting mothers stay with hospitalized children.", answer: "platt", accept: ["platt"], explain: "The Platt Report, 'The Welfare of Children in Hospital' (1959), pushed for open visiting and parental presence." },
        { type: "mcq", q: "What key change did reformers like Robertson push hospitals to adopt?", choices: ["Longer isolation from parents", "Unrestricted parental visiting and presence", "Ending all pediatric surgery", "Filming every patient"], answer: 1, explain: "The central reform was allowing parents to visit freely and stay with their children to buffer separation distress." },
        { type: "truefalse", q: "Robertson argued that a parent's presence could ease a hospitalized child's distress.", answer: true, explain: "His work showed that keeping parents close helped protect children from the harm of separation." },
        { type: "match", q: "Match each item to its role in hospital reform.", pairs: [["Old policy", "Restricted or banned visiting"], ["Robertson's film", "Evidence of separation distress"], ["Platt Report (1959)", "Called for open visiting"]], explain: "Robertson's filmed evidence helped move policy from restricted visiting toward the open access urged by the Platt Report." },
        { type: "order", q: "Order these steps in the reform of pediatric visiting.", items: ["Hospitals restrict parental visiting", "Robertson films a child's distress", "Platt Report calls for open visiting"], explain: "Restrictive policy came first, Robertson's film exposed its harm, and the Platt Report then recommended open visiting." }
      ]
    },
    {
      id: "l55",
      title: "The 44 Thieves Study",
      intro: "Bowlby's 1944 study of 44 juvenile thieves linked early prolonged separation from the mother to 'affectionless' character and delinquency.",
      questions: [
        { type: "mcq", q: "Who conducted the 44 Thieves study, published in 1944?", choices: ["Michael Rutter", "John Bowlby", "Mary Ainsworth", "Harry Harlow"], answer: 1, explain: "John Bowlby carried out the 44 Thieves study, linking early maternal separation to later delinquency." },
        { type: "truefalse", q: "The 44 Thieves study compared juvenile thieves with a control group of non-thieving children.", answer: true, explain: "Bowlby compared 44 juvenile thieves with 44 emotionally disturbed children who had not stolen." },
        { type: "fill", q: "Bowlby described some of the thieves as 'affectionless ____,' lacking normal guilt or empathy.", answer: "psychopaths", accept: ["psychopaths", "psychopath", "characters", "character"], explain: "He labeled 14 of the thieves 'affectionless psychopaths,' marked by an inability to feel affection, shame, or guilt." },
        { type: "mcq", q: "What did Bowlby find about the 'affectionless' thieves' early histories?", choices: ["Most had never been separated from their mothers", "Most had experienced prolonged early separation from their mothers", "All had been raised in orphanages", "None had criminal records"], answer: 1, explain: "Of the 14 affectionless thieves, most (12) had suffered prolonged separation from their mothers in the first two years of life." },
        { type: "truefalse", q: "Because it was based on retrospective reports and correlations, the 44 Thieves study cannot prove that separation directly caused the delinquency.", answer: true, explain: "The study is correlational and relied on looking back at histories, so it shows an association rather than proof of cause." },
        { type: "match", q: "Match each element of the 44 Thieves study to its description.", pairs: [["Sample", "44 juvenile thieves plus 44 controls"], ["Key subgroup", "14 'affectionless' thieves"], ["Common history", "Early prolonged maternal separation"]], explain: "Bowlby linked a subgroup of affectionless thieves to early maternal separation, forming the basis of his deprivation claims." },
        { type: "fill", q: "Bowlby argued that early maternal separation could contribute to later ____, such as juvenile theft.", answer: "delinquency", accept: ["delinquency", "crime", "stealing", "theft"], explain: "The study was used to argue that disrupted early bonds could feed into later delinquency and antisocial behavior." }
      ]
    },
    {
      id: "l56",
      title: "Maternal Deprivation Hypothesis Critiqued",
      intro: "Michael Rutter's 1972 reassessment argued Bowlby confused deprivation, losing a bond, with privation, never forming one at all.",
      questions: [
        { type: "mcq", q: "Which psychologist reassessed and critiqued Bowlby's maternal deprivation hypothesis?", choices: ["Michael Rutter", "Konrad Lorenz", "Erik Erikson", "Rudolph Schaffer"], answer: 0, explain: "Michael Rutter reexamined the hypothesis in his 1972 book 'Maternal Deprivation Reassessed.'" },
        { type: "truefalse", q: "Rutter argued that Bowlby had blurred two different ideas: deprivation and privation.", answer: true, explain: "Rutter's central critique was that Bowlby lumped together the loss of a bond (deprivation) and the failure to form one (privation)." },
        { type: "fill", q: "Rutter used the term ____ for the failure to ever form an attachment bond in the first place.", answer: "privation", accept: ["privation"], explain: "Privation means an attachment bond was never formed, which Rutter saw as more damaging than losing an existing one." },
        { type: "match", q: "Match each term to Rutter's meaning.", pairs: [["Deprivation", "Loss of an attachment bond that had formed"], ["Privation", "Never forming an attachment bond at all"], ["Rutter's view", "Privation tends to cause more lasting harm"]], explain: "Rutter distinguished losing an existing bond (deprivation) from never developing one (privation), and argued privation was the more harmful." },
        { type: "mcq", q: "According to Rutter, which is generally more damaging to a child?", choices: ["Deprivation (losing a bond)", "Privation (never forming a bond)", "A single brief separation", "Having more than one caregiver"], answer: 1, explain: "Rutter argued that privation, never forming an attachment at all, is more likely to cause severe, lasting harm." },
        { type: "truefalse", q: "Rutter agreed that all lasting harm comes solely from separation from the mother specifically.", answer: false, explain: "Rutter argued bonds with others matter too, and that accompanying factors like family discord often drive the harm, not separation from the mother alone." },
        { type: "fill", q: "Bowlby's original claim appeared in his 1951 report for the World Health Organization on maternal ____ and mental health.", answer: "care", accept: ["care", "deprivation"], explain: "Bowlby's WHO report 'Maternal Care and Mental Health' (1951) laid out the maternal deprivation hypothesis that Rutter later reassessed." }
      ]
    }
  ]
});
