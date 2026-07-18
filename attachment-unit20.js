window.ACADEMY.addUnit("attachment", {
  id: "unit-20",
  title: "Institutional Deprivation and Attachment Disorders",
  color: "#e0518a",
  icon: "🏚️",
  description: "This unit examines severe early deprivation in institutions, the timing of recovery, and the clinical attachment disorders that can follow.",
  lessons: [
    {
      id: "l153",
      title: "Studying Institutional Rearing",
      intro: "Global early deprivation in institutions can harm children's cognitive, physical, social, and emotional development all at once.",
      questions: [
        {
          type: "mcq",
          q: "What does 'global' deprivation in institutional rearing refer to?",
          choices: ["Deprivation across many domains at once: cognitive, emotional, physical, and social", "Deprivation limited only to physical nutrition", "Deprivation that occurs worldwide but is always mild", "Deprivation of a single specific sense such as hearing"],
          answer: 0,
          explain: "Global deprivation means a child lacks care and stimulation across cognitive, emotional, physical, and social domains at the same time, as in poorly resourced institutions."
        },
        {
          type: "truefalse",
          q: "Classic depriving institutions often had high child-to-caregiver ratios that limited individualized attention.",
          answer: true,
          explain: "Large numbers of children per caregiver meant little one-to-one interaction, a defining feature of depriving institutions."
        },
        {
          type: "fill",
          q: "The psychoanalyst Rene ____ described 'hospitalism,' the severe decline of infants raised in barren institutions in the 1940s.",
          answer: "spitz",
          accept: ["spitz"],
          explain: "Rene Spitz documented hospitalism and anaclitic depression in institutionalized infants who lacked responsive, individualized caregiving."
        },
        {
          type: "mcq",
          q: "Which cluster of problems is commonly seen after prolonged institutional rearing?",
          choices: ["Accelerated growth and advanced language", "Growth stunting, cognitive delay, and attachment difficulties", "Improved immune function and calm mood", "Heightened but well-regulated emotions"],
          answer: 1,
          explain: "Prolonged institutional care is associated with physical growth stunting, cognitive delay, and disturbed attachment, reflecting deprivation across multiple domains."
        },
        {
          type: "match",
          q: "Match each researcher or term to its role in studying institutional rearing.",
          pairs: [["Rene Spitz", "Described hospitalism in institutionalized infants"], ["Global deprivation", "Lack of care across many domains at once"], ["Growth stunting", "Physical under-development caused by deprivation"]],
          explain: "Early observers like Spitz first documented that institutional deprivation harms body, mind, and attachment together."
        },
        {
          type: "order",
          q: "Order the logic that lets researchers treat institutions as 'natural experiments.'",
          items: ["Children experience severe deprivation not created by researchers", "Some children are later removed and placed in enriched homes", "Researchers compare outcomes to study deprivation and recovery"],
          explain: "Because deliberately depriving children is unethical, researchers study existing institutions as natural experiments, tracking children before and after removal."
        },
        {
          type: "truefalse",
          q: "The harm from institutional rearing is best explained by a single missing nutrient rather than broad deprivation of care and stimulation.",
          answer: false,
          explain: "Institutional harm reflects global deprivation of relationships, stimulation, and individualized care, not one missing nutrient."
        }
      ]
    },
    {
      id: "l154",
      title: "English and Romanian Adoptees",
      intro: "Michael Rutter's English and Romanian Adoptees study followed children rescued from Romanian institutions to track their long-term recovery.",
      questions: [
        {
          type: "mcq",
          q: "The English and Romanian Adoptees (ERA) study was led by which researcher?",
          choices: ["Michael Rutter", "Harry Harlow", "Mary Ainsworth", "John Bowlby"],
          answer: 0,
          explain: "Sir Michael Rutter led the ERA study, following Romanian orphans adopted into UK families over many years."
        },
        {
          type: "truefalse",
          q: "The Romanian children in the ERA study were institutionalized under the deprived conditions that followed the Ceausescu era.",
          answer: true,
          explain: "After the 1989 fall of Ceausescu's regime, many severely deprived Romanian orphans became available for international adoption."
        },
        {
          type: "fill",
          q: "The ERA study compared Romanian adoptees with a group of within-UK adoptees who had not suffered early ____ deprivation.",
          answer: "institutional",
          accept: ["institutional", "early", "severe"],
          explain: "A comparison group of non-deprived UK adoptees let researchers isolate the effects of early institutional deprivation from adoption itself."
        },
        {
          type: "mcq",
          q: "The ERA study is methodologically notable because it was...",
          choices: ["A single one-time snapshot of the children", "A longitudinal study following the same children over many years", "A laboratory study of rats", "A study with no comparison group"],
          answer: 1,
          explain: "ERA is a prospective longitudinal design, assessing the same children repeatedly from early childhood into adulthood."
        },
        {
          type: "order",
          q: "Order the ERA assessment ages at which the children were followed up.",
          items: ["Age 4", "Age 6", "Age 11", "Age 15"],
          explain: "Rutter's team assessed the adoptees at ages 4, 6, 11, and 15, and later into young adulthood, tracking change over time."
        },
        {
          type: "match",
          q: "Match each ERA study feature to its description.",
          pairs: [["Sample", "Romanian orphans adopted into UK homes"], ["Comparison group", "Non-deprived UK-born adoptees"], ["Design", "Prospective longitudinal follow-up"]],
          explain: "These design features let the ERA team distinguish deprivation effects from the effects of adoption itself."
        },
        {
          type: "truefalse",
          q: "The ERA study found that the adopted Romanian children showed no improvement at all after leaving the institutions.",
          answer: false,
          explain: "Children showed substantial catch-up in growth and cognition after adoption, though some deficits persisted, especially after longer deprivation."
        }
      ]
    },
    {
      id: "l155",
      title: "Duration and Recovery Gradient",
      intro: "In the ERA study, how long children spent deprived, not adoption itself, shaped how fully they later recovered.",
      questions: [
        {
          type: "mcq",
          q: "In the ERA study, children adopted before which age showed the most complete recovery?",
          choices: ["Before about 6 months", "Before about 4 years", "Before about 8 years", "Before about 11 years"],
          answer: 0,
          explain: "Romanian children adopted before roughly 6 months of age showed recovery broadly similar to non-deprived UK adoptees."
        },
        {
          type: "truefalse",
          q: "The relationship between duration of deprivation and later impairment resembled a dose-response gradient.",
          answer: true,
          explain: "Longer institutional deprivation predicted greater and more persistent deficits, a dose-response style pattern."
        },
        {
          type: "fill",
          q: "Children who left the institutions after about ____ months of age showed more persistent cognitive and attachment problems.",
          answer: "6",
          accept: ["6", "six"],
          explain: "The roughly 6-month threshold marked a shift toward more lasting deprivation-specific difficulties."
        },
        {
          type: "mcq",
          q: "Which statement best captures the ERA 'recovery gradient'?",
          choices: ["All children fully recovered regardless of timing", "Later-adopted children recovered faster than early-adopted ones", "Earlier adoption was linked to fuller recovery than later adoption", "Adoption made no difference to outcomes"],
          answer: 2,
          explain: "Recovery was graded by timing: the earlier a child left deprivation, the fuller the catch-up tended to be."
        },
        {
          type: "order",
          q: "Order these groups from most to least complete recovery in the ERA study.",
          items: ["Adopted before 6 months", "Adopted between 6 months and 2 years", "Adopted after 2 years of deprivation"],
          explain: "Recovery declined as duration of deprivation increased, so the earliest-adopted children fared best."
        },
        {
          type: "match",
          q: "Match each ERA subgroup to its typical outcome.",
          pairs: [["Adopted before 6 months", "Near-full recovery, like UK adoptees"], ["Adopted after 6 months", "More persistent deficits"], ["Longest-deprived", "Highest rates of lasting impairment"]],
          explain: "The pattern shows that timing of removal from deprivation strongly shapes long-term outcomes."
        },
        {
          type: "truefalse",
          q: "The ERA results proved that the harm of early deprivation is always permanent and never reversible.",
          answer: false,
          explain: "Much harm was reversible, especially with early adoption; only longer deprivation left more persistent effects."
        }
      ]
    },
    {
      id: "l156",
      title: "Bucharest Early Intervention Project",
      intro: "The Bucharest Early Intervention Project was the first randomized trial testing foster care against continued institutional care.",
      questions: [
        {
          type: "mcq",
          q: "The Bucharest Early Intervention Project (BEIP) is distinctive because it used which design?",
          choices: ["A randomized controlled trial assigning children to foster care or institutions", "An anonymous online survey", "A retrospective chart review", "A single case study"],
          answer: 0,
          explain: "BEIP randomly assigned institutionalized children to high-quality foster care or continued institutional 'care as usual,' an unusual randomized design in this field."
        },
        {
          type: "truefalse",
          q: "BEIP was directed by Charles Zeanah, Nathan Fox, and Charles Nelson.",
          answer: true,
          explain: "The project was led by Charles Zeanah, Nathan Fox, and Charles Nelson, beginning around 2000 in Bucharest, Romania."
        },
        {
          type: "fill",
          q: "In BEIP, children were randomly assigned either to newly created foster care or to continued ____ care.",
          answer: "institutional",
          accept: ["institutional", "institution"],
          explain: "The comparison was between a foster-care intervention and 'care as usual' in institutions."
        },
        {
          type: "mcq",
          q: "Which outcomes improved for children placed into BEIP foster care compared with those who stayed in institutions?",
          choices: ["Only height, with no cognitive change", "IQ, language, and attachment security, among others", "Nothing measurable improved", "Only their weight decreased"],
          answer: 1,
          explain: "Foster-care children showed gains in IQ, language, attachment security, and even brain (EEG) activity relative to those who remained institutionalized."
        },
        {
          type: "match",
          q: "Match each BEIP element to its description.",
          pairs: [["Intervention group", "Placed into high-quality foster care"], ["Comparison group", "Remained in institutional 'care as usual'"], ["EEG measures", "Brain activity that improved with foster placement"]],
          explain: "BEIP measured cognitive, emotional, and neural outcomes across its randomized groups."
        },
        {
          type: "order",
          q: "Order the basic steps of the BEIP design.",
          items: ["Identify young children living in institutions", "Randomly assign them to foster care or continued institutional care", "Compare developmental outcomes between the two groups"],
          explain: "Random assignment let researchers attribute later group differences to the foster-care intervention itself."
        },
        {
          type: "truefalse",
          q: "The BEIP team built in ethical safeguards so that no child was prevented from later adoption or family placement.",
          answer: true,
          explain: "The researchers addressed ethics carefully; children could still be adopted or reunited, and the findings spurred reforms to reduce institutional care."
        }
      ]
    },
    {
      id: "l157",
      title: "Sensitive Periods for Recovery",
      intro: "Recovery from deprivation depends on sensitive periods: earlier placement into families opens wider windows for attachment and cognitive rebound.",
      questions: [
        {
          type: "mcq",
          q: "In BEIP, children placed in foster care before roughly which age tended to show notably better outcomes?",
          choices: ["Before about 24 months", "Before about 10 years", "Before about 15 years", "Age of placement made no difference"],
          answer: 0,
          explain: "BEIP found stronger recovery, for example in attachment and language, when foster placement occurred before about 24 months."
        },
        {
          type: "truefalse",
          q: "A 'sensitive period' is a developmental window during which experience has an especially strong effect on an outcome.",
          answer: true,
          explain: "Sensitive periods are times when the developing brain is particularly responsive to relevant experience, such as language or attachment input."
        },
        {
          type: "fill",
          q: "BEIP data suggested a sensitive period for ____ development, with better recovery when children were placed in families earlier.",
          answer: "language",
          accept: ["language", "cognitive"],
          explain: "Language and cognitive gains were greatest for children placed into foster care earlier, consistent with a sensitive period."
        },
        {
          type: "mcq",
          q: "The ERA and BEIP evidence together suggests sensitive periods are best described as...",
          choices: ["Rigid deadlines after which no recovery is possible", "Windows of heightened, but not unlimited, opportunity for recovery", "Completely irrelevant to attachment", "Relevant only to physical height"],
          answer: 1,
          explain: "Earlier placement helps most, but the windows are graded rather than absolute cut-offs, so some later recovery still occurs."
        },
        {
          type: "order",
          q: "Order these placements from generally strongest to weakest expected recovery.",
          items: ["Placed in a family in early infancy", "Placed in a family in the second year", "Placed in a family after several years of deprivation"],
          explain: "Earlier family placement, within sensitive-period windows, tends to yield fuller attachment and cognitive rebound."
        },
        {
          type: "match",
          q: "Match each concept to its meaning.",
          pairs: [["Sensitive period", "A window of heightened responsiveness to experience"], ["Cognitive rebound", "Catch-up in IQ and language after enrichment"], ["Attachment window", "Earlier placement supports forming secure bonds"]],
          explain: "Both cognitive and attachment recovery are shaped by how early enriched care finally arrives."
        },
        {
          type: "truefalse",
          q: "The evidence shows that a child adopted at age 8 has exactly the same recovery prospects as one adopted at 5 months.",
          answer: false,
          explain: "Later-adopted children generally recover less fully, because they missed more of the sensitive-period window for early care."
        }
      ]
    },
    {
      id: "l158",
      title: "Reactive Attachment Disorder",
      intro: "Reactive Attachment Disorder describes children who, after grossly inadequate care, fail to seek or respond to comfort and appear emotionally withdrawn.",
      questions: [
        {
          type: "mcq",
          q: "Reactive Attachment Disorder (RAD) in DSM-5 is characterized primarily by...",
          choices: ["Indiscriminate friendliness toward strangers", "Inhibited, emotionally withdrawn behavior toward caregivers", "Excessive fear of animals", "Advanced early language skills"],
          answer: 1,
          explain: "RAD is marked by an inhibited, withdrawn pattern in which the child rarely seeks or responds to comfort from caregivers."
        },
        {
          type: "truefalse",
          q: "A child with RAD rarely turns to attachment figures for comfort even when clearly distressed.",
          answer: true,
          explain: "A core sign of RAD is minimal comfort-seeking and minimal response to comfort during distress."
        },
        {
          type: "fill",
          q: "DSM-5 requires that RAD follows a pattern of ____ care, such as neglect or repeated changes of caregiver.",
          answer: "insufficient",
          accept: ["insufficient", "pathogenic", "inadequate", "grossly inadequate"],
          explain: "A diagnosis of RAD requires evidence of grossly insufficient (pathogenic) care presumed to cause the disturbance."
        },
        {
          type: "mcq",
          q: "Which additional feature is part of RAD's clinical picture?",
          choices: ["Limited positive affect with unexplained irritability, sadness, or fearfulness", "Constant, exuberant positive affect", "Overly familiar approach to strangers", "No emotional symptoms at all"],
          answer: 0,
          explain: "Beyond withdrawn attachment behavior, RAD includes reduced positive emotion and episodes of unexplained irritability, sadness, or fear."
        },
        {
          type: "match",
          q: "Match each RAD requirement to its description.",
          pairs: [["Inhibited behavior", "Rarely seeks or responds to comfort"], ["Emotional signs", "Low positive affect and unexplained distress"], ["Pathogenic care", "History of neglect or unstable caregiving"]],
          explain: "RAD is diagnosed from withdrawn attachment behavior plus emotional dysregulation and a history of inadequate care."
        },
        {
          type: "order",
          q: "Order the developmental logic behind a RAD diagnosis.",
          items: ["A child experiences grossly inadequate care", "The child fails to form a preferred attachment", "The child shows inhibited, withdrawn behavior toward caregivers"],
          explain: "RAD is understood as a failure to develop selective attachment following depriving care."
        },
        {
          type: "truefalse",
          q: "DSM-5 allows RAD to be diagnosed in a child whose developmental age is below 9 months.",
          answer: false,
          explain: "DSM-5 requires a developmental age of at least 9 months, so that the child is capable of forming selective attachments."
        }
      ]
    },
    {
      id: "l159",
      title: "Disinhibited Social Engagement Disorder",
      intro: "Disinhibited Social Engagement Disorder describes children who are indiscriminately friendly and overly familiar with unfamiliar adults.",
      questions: [
        {
          type: "mcq",
          q: "Disinhibited Social Engagement Disorder (DSED) is characterized by...",
          choices: ["Extreme fear of all adults", "Overly familiar, indiscriminate behavior toward unfamiliar adults", "Complete withdrawal from all people", "A strong, selective preference for one caregiver"],
          answer: 1,
          explain: "DSED involves reduced reticence and overly familiar behavior with strangers, without the normal wariness expected for the child's age."
        },
        {
          type: "truefalse",
          q: "A child with DSED may willingly wander off with an unfamiliar adult with little or no hesitation.",
          answer: true,
          explain: "Diminished checking-back with caregivers and willingness to go off with strangers are hallmark DSED behaviors."
        },
        {
          type: "fill",
          q: "Unlike RAD, DSED behaviors can persist even after a child is placed in ____ caregiving environments.",
          answer: "adequate",
          accept: ["adequate", "improved", "normal", "good"],
          explain: "DSED can linger after care improves, whereas RAD symptoms tend to remit once caregiving becomes adequate."
        },
        {
          type: "mcq",
          q: "In DSM-5, RAD and DSED are treated as...",
          choices: ["Two separate disorders rather than subtypes of one", "Identical diagnoses with a single name", "Subtypes of autism spectrum disorder", "Two forms of an anxiety disorder"],
          answer: 0,
          explain: "DSM-5 split the former Reactive Attachment Disorder subtypes into two distinct disorders: RAD and DSED."
        },
        {
          type: "match",
          q: "Match each DSED feature to its description.",
          pairs: [["Reduced reticence", "Little wariness toward unfamiliar adults"], ["Over-familiarity", "Overly personal verbal or physical behavior with strangers"], ["Failure to check back", "Not returning to a caregiver in unfamiliar settings"]],
          explain: "DSED is defined by a cluster of behaviors showing absent stranger wariness."
        },
        {
          type: "order",
          q: "Order the contrast between RAD and DSED behavior toward people.",
          items: ["A RAD child withdraws and rarely seeks comfort", "A DSED child approaches even unfamiliar adults freely", "The two disorders describe opposite social styles"],
          explain: "RAD is inhibited and withdrawn, while DSED is disinhibited and over-familiar, an opposite outward pattern."
        },
        {
          type: "truefalse",
          q: "DSED requires that the child has never experienced any inadequate or disrupted care.",
          answer: false,
          explain: "On the contrary, DSED, like RAD, requires a history of insufficient care, though its symptoms can persist longer."
        }
      ]
    },
    {
      id: "l160",
      title: "Quasi-Autism and Deprivation",
      intro: "Severe early deprivation can produce quasi-autistic patterns and other deprivation-specific features that go beyond the attachment disorders.",
      questions: [
        {
          type: "mcq",
          q: "In the ERA study, 'quasi-autism' referred to...",
          choices: ["Classic autism identical to non-deprived cases", "Autism-like features arising from severe deprivation that often partly improved", "A complete absence of any social difficulty", "A form of intellectual giftedness"],
          answer: 1,
          explain: "Rutter described quasi-autistic patterns: autism-like social and communication features linked to deprivation that showed more improvement and flexibility than typical autism."
        },
        {
          type: "truefalse",
          q: "Rutter identified deprivation-specific patterns that included disinhibited attachment, quasi-autism, cognitive impairment, and inattention/overactivity.",
          answer: true,
          explain: "These four deprivation-specific patterns were the features most distinctively tied to severe early institutional deprivation."
        },
        {
          type: "fill",
          q: "The pattern is called '____-autism' because it resembles autism yet tends to be more changeable and partly reversible.",
          answer: "quasi",
          accept: ["quasi"],
          explain: "The prefix 'quasi' signals an autism-like but not identical pattern, more open to improvement than classic autism."
        },
        {
          type: "mcq",
          q: "Roughly what proportion of severely deprived ERA children showed quasi-autistic features?",
          choices: ["Around 6 to 10 percent", "About half", "Essentially all of them", "None at all"],
          answer: 0,
          explain: "Quasi-autistic features appeared in a minority, on the order of 6 to 10 percent, and were more common among the longest-deprived children."
        },
        {
          type: "match",
          q: "Match each deprivation-specific pattern to its description.",
          pairs: [["Quasi-autism", "Autism-like features that often partly improve"], ["Disinhibited attachment", "Indiscriminate friendliness with strangers"], ["Inattention/overactivity", "Difficulty concentrating and heightened restlessness"], ["Cognitive impairment", "Lowered IQ and learning difficulties"]],
          explain: "These patterns cluster together as the distinctive fingerprint of severe early deprivation."
        },
        {
          type: "order",
          q: "Order the reasoning that distinguishes quasi-autism from classic autism.",
          items: ["A deprived child shows autism-like social difficulties", "With enriched care the features often lessen over time", "This changeability marks it as quasi-autism rather than classic autism"],
          explain: "Classic autism is generally stable, whereas quasi-autism's tendency to improve sets it apart."
        },
        {
          type: "truefalse",
          q: "Deprivation-specific patterns like quasi-autism prove that all children exposed to institutions develop classic autism.",
          answer: false,
          explain: "Only a minority show quasi-autistic features, and these differ from classic autism, so deprivation does not simply cause autism in everyone."
        }
      ]
    }
  ]
});
