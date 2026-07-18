window.ACADEMY.addUnit("evopsych", {
  id: "unit-20",
  title: "Foraging, Food, and Spatial Cognition",
  color: "#7c5cff",
  icon: "🧭",
  description: "Explores how survival pressures around finding food and navigating space shaped human diet preferences, landscape tastes, and sex-typed spatial cognition.",
  lessons: [
    {
      id: "l153",
      title: "Optimal Foraging Theory",
      intro: "Optimal foraging theory models animals as if they forage to maximize energy return, using the diet-breadth and patch models.",
      questions: [
        {
          type: "mcq",
          q: "Optimal foraging theory (OFT) models a forager as if it were trying to do what?",
          choices: [
            "Eat the widest possible variety of foods",
            "Maximize net energy gained per unit of foraging time",
            "Minimize the total distance walked each day",
            "Avoid every food that requires any processing"
          ],
          answer: 1,
          explain: "OFT, developed by MacArthur, Pianka, and Emlen in 1966, treats foragers as optimizers of net energy (calories gained minus costs) per unit time, since that currency tracks fitness."
        },
        {
          type: "truefalse",
          q: "The diet-breadth model predicts a forager should pursue any food item the instant it is encountered, regardless of the item's rank.",
          answer: false,
          explain: "The diet-breadth (contingency) model says a lower-ranked item should be pursued only if its profitability beats the expected return from continuing to search for higher-ranked items."
        },
        {
          type: "fill",
          q: "In the diet-breadth model, prey types are ranked by their ____, defined as energy gained divided by handling time.",
          answer: "profitability",
          accept: ["profitability", "profit"],
          explain: "Profitability (energy per unit handling time) is the ranking currency; a forager includes items top-down until adding the next one would lower the overall intake rate."
        },
        {
          type: "order",
          q: "Following the marginal value theorem, order what an efficient forager does inside a food patch.",
          items: [
            "Enter a fresh, resource-rich patch",
            "Harvest resources as the intake rate gradually declines",
            "Reach the point where the patch's return drops to the habitat average",
            "Leave to travel toward a new patch"
          ],
          explain: "As a patch is depleted the intake rate falls; the marginal value theorem says the forager should quit once the in-patch rate equals the average rate for the whole habitat."
        },
        {
          type: "mcq",
          q: "Charnov's (1976) marginal value theorem predicts a forager should leave a patch when:",
          choices: [
            "The patch is completely empty of food",
            "It has spent a fixed, preset amount of time there",
            "Its intake rate in the patch falls to the average rate for the whole habitat",
            "A predator suddenly appears nearby"
          ],
          answer: 2,
          explain: "Charnov showed the optimal departure point is where the declining marginal return in the current patch equals the average return available across the environment, accounting for travel time."
        },
        {
          type: "match",
          q: "Match each foraging concept to what it governs.",
          pairs: [
            ["Diet-breadth model", "Which prey types to pursue versus ignore"],
            ["Patch model", "When to leave a depleting resource patch"],
            ["Handling time", "Time to capture and process an item once found"],
            ["Search time", "Time spent looking for the next food item"]
          ],
          explain: "The diet-breadth model answers 'what to eat' using handling and search times, while the patch model answers 'when to move on' using the marginal value theorem."
        },
        {
          type: "truefalse",
          q: "When high-ranked prey become very abundant, optimal foraging theory predicts a forager should narrow its diet and ignore low-ranked prey.",
          answer: true,
          explain: "If top-ranked items are found quickly, stopping to take a low-ranked item wastes time; the model predicts a narrower diet when high-quality food is plentiful."
        }
      ]
    },
    {
      id: "l154",
      title: "Evolved Food Preferences",
      intro: "Humans show innate taste biases toward sweet, fatty, salty, and umami foods that tracked calories and nutrients in ancestral environments.",
      questions: [
        {
          type: "mcq",
          q: "Human infants show an innate preference for sweet tastes largely because, ancestrally, sweetness signaled:",
          choices: [
            "Dangerous concentrations of toxins",
            "Ripe fruit and readily usable energy from sugars",
            "Rotting, spoiled meat",
            "Very high salt content"
          ],
          answer: 1,
          explain: "Sweetness reliably marked ripe fruit and sugars, a quick energy source, so a built-in liking for sweet was adaptive when calories were scarce."
        },
        {
          type: "truefalse",
          q: "A preference for fatty foods is puzzling from an evolutionary view because fat is a poor source of calories.",
          answer: false,
          explain: "Fat is the most energy-dense macronutrient (about 9 kcal per gram), so a taste for it was adaptive in ancestral environments where calories were often limited."
        },
        {
          type: "fill",
          q: "The savory taste linked to glutamate and amino acids, which signals protein-rich food, is called ____.",
          answer: "umami",
          accept: ["umami"],
          explain: "Umami, driven by glutamate, flags protein and amino acids, nutrients essential for building and repairing tissue."
        },
        {
          type: "match",
          q: "Match each evolved taste bias to the ancestral nutrient signal it tracked.",
          pairs: [
            ["Sweet", "Sugars and ripe-fruit energy"],
            ["Fat", "Dense calories for scarce times"],
            ["Salt", "Sodium and electrolyte balance"],
            ["Umami", "Amino acids signaling protein"]
          ],
          explain: "Each bias is tuned to a nutrient that was valuable but often limited, so seeking out its taste raised survival and reproductive success."
        },
        {
          type: "mcq",
          q: "A taste preference for salt was adaptive because sodium is:",
          choices: [
            "Physiologically essential yet often scarce for inland foragers",
            "Abundant everywhere in ancestral inland diets",
            "A reliable warning sign of toxins",
            "Only needed by modern humans"
          ],
          answer: 0,
          explain: "Sodium is required for nerve and fluid function but is scarce in many inland plant-based diets, so craving salt helped ancestral humans obtain enough."
        },
        {
          type: "truefalse",
          q: "In modern environments, these evolved preferences for sweet, fat, and salt can promote overeating because such foods are now cheap and abundant.",
          answer: true,
          explain: "This is an evolutionary mismatch: tastes calibrated for scarcity now drive overconsumption of engineered foods that are constantly available."
        },
        {
          type: "order",
          q: "Based on Steiner's newborn taste-response studies, order these solutions from the one that produces the most accepting facial reaction to the most rejecting.",
          items: [
            "Sweet (sucrose) - relaxed, sucking, pleasant expression",
            "Sour (citric acid) - lip pursing",
            "Bitter (quinine) - gaping and rejection"
          ],
          explain: "Steiner (1979) found newborns show an innate gustofacial reflex: positive to sweet, mildly negative to sour, and strongly aversive to bitter, before any learning."
        }
      ]
    },
    {
      id: "l155",
      title: "Bitter and Novelty Aversion",
      intro: "Bitter taste and wariness of unfamiliar foods act as evolved defenses against plant toxins and unknown dangers.",
      questions: [
        {
          type: "mcq",
          q: "Sensitivity to bitter tastes is thought to have evolved primarily to:",
          choices: [
            "Locate ripe, sugary fruit",
            "Increase overall appetite",
            "Detect and reject plant toxins such as alkaloids",
            "Find foods that are high in salt"
          ],
          answer: 2,
          explain: "Many plant defense compounds, including alkaloids, taste bitter, so bitter detection works as an early-warning system against ingesting poisons."
        },
        {
          type: "truefalse",
          q: "Humans possess only a single type of bitter taste receptor gene.",
          answer: false,
          explain: "Humans have roughly 25 bitter (TAS2R) receptor genes, far more than for sweet, reflecting the many chemically distinct toxins that had to be detected."
        },
        {
          type: "fill",
          q: "The reluctance to eat unfamiliar foods, which is especially strong in young children, is called food ____.",
          answer: "neophobia",
          accept: ["neophobia"],
          explain: "Food neophobia, wariness of novel foods, protects an omnivore from sampling potentially harmful new items."
        },
        {
          type: "mcq",
          q: "Food neophobia in early childhood is considered adaptive because it:",
          choices: [
            "Encourages toddlers to sample many new plants",
            "Strengthens parent-child social bonding",
            "Increases the variety of the diet",
            "Protects newly mobile toddlers from eating novel, possibly poisonous items"
          ],
          answer: 3,
          explain: "Neophobia peaks in early childhood, right when toddlers gain mobility and could put unknown, dangerous items in their mouths, so caution is protective."
        },
        {
          type: "match",
          q: "Match each concept to its role in defending an omnivore's diet.",
          pairs: [
            ["Bitter taste", "Warning signal for possible toxins"],
            ["Neophobia", "Avoidance of unfamiliar foods"],
            ["Omnivore's dilemma", "Tension between trying new foods and avoiding poisons"],
            ["TAS2R genes", "Family of bitter taste receptors"]
          ],
          explain: "Rozin's 'omnivore's dilemma' captures the balancing act: omnivores must explore new foods for nutrition while bitter perception and neophobia guard against harm."
        },
        {
          type: "truefalse",
          q: "Many toxic plant compounds, such as alkaloids, happen to taste bitter to humans, which is why bitterness serves as a toxin cue.",
          answer: true,
          explain: "Because a broad range of harmful plant chemicals register as bitter, an aversion to bitterness reliably steered ancestral foragers away from poisons."
        },
        {
          type: "order",
          q: "Order the steps by which bitter perception protects a forager.",
          items: [
            "A plant produces a toxic, bitter-tasting alkaloid",
            "The forager's bitter (TAS2R) receptors detect the compound",
            "The food is perceived as unpleasant",
            "The forager rejects or spits out the item"
          ],
          explain: "Detection of the bitter toxin triggers an aversive perception and rejection, preventing the poison from being swallowed."
        }
      ]
    },
    {
      id: "l156",
      title: "The Savanna Hypothesis",
      intro: "The savanna hypothesis proposes that humans have evolved aesthetic preferences for the open landscapes in which our ancestors thrived.",
      questions: [
        {
          type: "mcq",
          q: "The savanna hypothesis, associated with Gordon Orians, proposes that humans have an evolved preference for landscapes resembling:",
          choices: [
            "The open, tree-scattered African savanna where hominins evolved",
            "Dense, closed-canopy tropical rainforest",
            "Barren arctic tundra",
            "Deep, enclosed caves"
          ],
          answer: 0,
          explain: "Orians and Heerwagen argued that because hominins evolved on African savannas, we retain a preference for open grassland dotted with trees and water."
        },
        {
          type: "truefalse",
          q: "According to the savanna hypothesis, landscape aesthetic preferences are purely learned and show no cross-cultural regularities.",
          answer: false,
          explain: "The hypothesis predicts, and studies find, fairly consistent cross-cultural preferences for savanna-like scenes, suggesting an evolved rather than purely learned basis."
        },
        {
          type: "fill",
          q: "E. O. Wilson's 1984 term for an innate human affinity for nature and other living things is ____.",
          answer: "biophilia",
          accept: ["biophilia"],
          explain: "Wilson's 'biophilia' hypothesis holds that humans have an evolved emotional pull toward nature and living systems."
        },
        {
          type: "match",
          q: "Match each idea to its core claim about environmental preference.",
          pairs: [
            ["Savanna hypothesis", "Preference for open, grassy, tree-dotted terrain"],
            ["Prospect-refuge theory", "Liking places to see out without being seen"],
            ["Biophilia", "Innate affinity for nature and life"],
            ["Water and trees", "Cues of resources and safety in preferred scenes"]
          ],
          explain: "These frameworks converge on the idea that scenes signaling food, water, and safe vantage points feel attractive because they aided ancestral survival."
        },
        {
          type: "mcq",
          q: "Jay Appleton's prospect-refuge theory holds that people prefer environments offering:",
          choices: [
            "Maximum exposure with no cover at all",
            "A clear view (prospect) combined with places to hide (refuge)",
            "Total enclosure with no sightlines",
            "Featureless open plains and nothing else"
          ],
          answer: 1,
          explain: "Appleton (1975) argued we favor settings that let us observe (prospect) while remaining concealed and protected (refuge), balancing opportunity and safety."
        },
        {
          type: "truefalse",
          q: "People across cultures tend to prefer scenes that include water, a sign of a life-supporting resource.",
          answer: true,
          explain: "Water signals a vital resource, and its presence reliably raises rated attractiveness of landscapes across cultures, consistent with the savanna hypothesis."
        },
        {
          type: "order",
          q: "Order the steps in the savanna hypothesis's evolutionary logic.",
          items: [
            "Hominins evolved for roughly two million years in African savanna habitats",
            "Savanna features such as open views, scattered trees, and water aided survival",
            "Preferring those features improved survival and reproduction",
            "Modern humans still find savanna-like scenes attractive"
          ],
          explain: "Long exposure to savanna conditions selected for preferences favoring life-supporting features, and those preferences persist in people today."
        }
      ]
    },
    {
      id: "l157",
      title: "Sex Differences in Spatial Cognition",
      intro: "Silverman and Eals proposed that sex differences in spatial skills reflect the distinct demands of ancestral hunting and gathering.",
      questions: [
        {
          type: "mcq",
          q: "Silverman and Eals' (1992) foraging theory links each spatial ability to a different ancestral task. Which pairing does it propose?",
          choices: [
            "Both sexes evolved identical spatial abilities",
            "Men: object-location memory (gathering); Women: navigation (hunting)",
            "Men: navigation and mental rotation (hunting); Women: object-location memory (gathering)",
            "Neither sex evolved any spatial specialization"
          ],
          answer: 2,
          explain: "Silverman and Eals argued that hunting favored male navigation and mental rotation, while gathering favored female memory for the locations of food plants."
        },
        {
          type: "truefalse",
          q: "In Silverman and Eals' studies, women tended to outperform men at remembering the locations of objects in an array.",
          answer: true,
          explain: "Their key finding was a female advantage in object-location memory, the ability to recall where items are and notice when they have moved."
        },
        {
          type: "fill",
          q: "Silverman and Eals proposed that gathering favored women's memory for the ____ of stationary food plants.",
          answer: "location",
          accept: ["location", "locations", "position"],
          explain: "Because plant foods stay put but ripen at different times, remembering their exact locations would have raised gathering efficiency."
        },
        {
          type: "mcq",
          q: "On tasks like mental rotation of three-dimensional shapes, the typical finding is that:",
          choices: [
            "Women score substantially higher on average",
            "There is never any measurable difference",
            "Results reverse direction in every study",
            "Men score higher on average"
          ],
          answer: 3,
          explain: "Mental rotation is one of the most reliable cognitive sex differences, with men scoring higher on average, consistent with a navigation-related advantage."
        },
        {
          type: "match",
          q: "Match each ancestral task or ability to its associated spatial pattern.",
          pairs: [
            ["Hunting", "Tracking and navigating over large ranges"],
            ["Gathering", "Relocating fixed patches of plant foods"],
            ["Mental rotation", "Task showing a male advantage"],
            ["Object-location memory", "Task showing a female advantage"]
          ],
          explain: "The theory ties navigation and rotation to male hunting demands and object-location memory to female gathering demands."
        },
        {
          type: "truefalse",
          q: "Silverman and Eals proposed that spatial sex differences are best explained by a single general spatial ability that men simply have more of.",
          answer: false,
          explain: "Their central insight was that spatial ability is not unitary; women excel at object-location memory while men excel at navigation and rotation, each favored by a different task."
        },
        {
          type: "order",
          q: "Reconstruct Silverman and Eals' reasoning in order.",
          items: [
            "Ancestral men hunted and ranged widely while women gathered nearby plants",
            "Each task rewarded a different kind of spatial skill",
            "Selection shaped complementary, not uniformly better, abilities",
            "Today men excel at rotation and navigation while women excel at object location"
          ],
          explain: "Different foraging roles selected for different, complementary spatial specializations rather than a single hierarchy of ability."
        }
      ]
    },
    {
      id: "l158",
      title: "Hunting Versus Gathering Cognition",
      intro: "The division of foraging labor is thought to have shaped complementary navigation and object-location abilities in the sexes.",
      questions: [
        {
          type: "mcq",
          q: "In giving or using directions, research (e.g., Dabbs et al., 1998) finds men more often rely on ____, while women more often rely on ____.",
          choices: [
            "Landmarks; cardinal directions and distances",
            "Cardinal directions and distances; landmarks",
            "Neither cue; both cues equally",
            "Smell; sound"
          ],
          answer: 1,
          explain: "Dabbs and colleagues found men leaned on Euclidean cues (compass directions and metric distances) while women favored landmarks and relative descriptions."
        },
        {
          type: "truefalse",
          q: "The hunting-versus-gathering account predicts a male advantage in large-scale route learning and a female advantage in recalling object locations.",
          answer: true,
          explain: "Hunting demands long-range wayfinding, favoring male navigation, while gathering rewards remembering where resources sit, favoring female object-location memory."
        },
        {
          type: "fill",
          q: "A wayfinding strategy based on compass directions and metric distances is often called a ____ or geometric strategy.",
          answer: "euclidean",
          accept: ["euclidean", "cardinal", "geometric"],
          explain: "A Euclidean (geometric) strategy encodes space with directions and distances, contrasting with a landmark-based strategy that leans on salient objects."
        },
        {
          type: "match",
          q: "Match each foraging role or cue type to what it emphasizes.",
          pairs: [
            ["Hunting cognition", "Large-scale navigation and route finding"],
            ["Gathering cognition", "Memory for the locations of resources"],
            ["Euclidean cues", "Compass directions and distances"],
            ["Landmark cues", "Salient objects encountered along a route"]
          ],
          explain: "Navigation and gathering memory rest on different cue systems, one geometric and one landmark-based, matched to their ancestral demands."
        },
        {
          type: "mcq",
          q: "The female advantage in object-location memory is thought to reflect the demands of:",
          choices: [
            "Gathering, which rewards relocating stationary plants and foods",
            "Hunting fast-moving prey",
            "Long-distance seasonal migration",
            "Manufacturing stone tools"
          ],
          answer: 0,
          explain: "Gathering requires returning to fixed plant patches as they ripen, so a sharper memory for object and food locations would have boosted foraging returns."
        },
        {
          type: "truefalse",
          q: "These sex differences are large enough to predict any single individual's navigation skill with certainty.",
          answer: false,
          explain: "They are average group differences with wide overlap between the sexes; many individuals depart from the group pattern, so they cannot forecast one person's skill."
        },
        {
          type: "order",
          q: "Trace the adaptive logic linking gathering to spatial memory, in order.",
          items: [
            "Plant foods stay in fixed locations but ripen at different times",
            "Efficient gathering requires relocating those exact spots",
            "Object-location memory tracks where resources are",
            "A female advantage in this memory would raise foraging success"
          ],
          explain: "Because gathered foods are stationary and time-sensitive, memory for their precise locations directly improved the yield of ancestral gathering."
        }
      ]
    },
    {
      id: "l159",
      title: "Range Size and Navigation",
      intro: "Gaulin's comparison of vole species tested whether home-range size, not sex itself, drives spatial ability and brain differences.",
      questions: [
        {
          type: "mcq",
          q: "Gaulin and FitzGerald studied two vole species to test whether ____, rather than sex itself, drives spatial ability differences.",
          choices: [
            "Diet composition",
            "Home-range size, which is linked to the mating system",
            "Overall body size",
            "Coat color"
          ],
          answer: 1,
          explain: "Their elegant comparison held sex constant and varied mating system, isolating home-range size as the likely cause of spatial differences."
        },
        {
          type: "truefalse",
          q: "In the polygynous meadow vole, males expand their home ranges during the breeding season to locate widely dispersed females.",
          answer: true,
          explain: "Meadow voles are polygynous, and breeding males roam over large areas to find mates, creating a demand for strong spatial navigation."
        },
        {
          type: "fill",
          q: "In the monogamous ____ vole, males and females have similar home-range sizes and show no sex difference in maze performance.",
          answer: "pine",
          accept: ["pine", "woodland"],
          explain: "The monogamous pine (woodland) vole shows equal ranges and equal spatial ability in both sexes, exactly as the range-size hypothesis predicts."
        },
        {
          type: "mcq",
          q: "Jacobs, Gaulin, and colleagues (1990) found that in polygynous voles, the sex with the larger home range also had a larger:",
          choices: [
            "Heart",
            "Liver",
            "Hippocampus, a brain region for spatial memory",
            "Litter size"
          ],
          answer: 2,
          explain: "They reported that wider-ranging males had a larger hippocampus, tying the behavioral demand for navigation to a measurable brain difference."
        },
        {
          type: "match",
          q: "Match each item from Gaulin's vole research to its description.",
          pairs: [
            ["Meadow vole", "Polygynous; males range widely; male spatial advantage"],
            ["Pine vole", "Monogamous; equal ranges; no sex difference"],
            ["Home range", "Area an animal travels; predicts spatial skill"],
            ["Hippocampus", "Brain structure enlarged with a bigger range"]
          ],
          explain: "Contrasting a polygynous and a monogamous species links range size to both spatial performance and hippocampal size."
        },
        {
          type: "truefalse",
          q: "Gaulin's vole findings imply that spatial sex differences appear even when the two sexes do not differ in how far they range.",
          answer: false,
          explain: "The findings show the opposite: spatial sex differences emerge only in the wide-ranging polygynous species and vanish in the monogamous species with equal ranges."
        },
        {
          type: "order",
          q: "Reconstruct the logic of Gaulin's comparative test, in order.",
          items: [
            "Polygynous males must range widely to find mates",
            "Wide ranging demands better spatial navigation",
            "Selection enlarges spatial ability and the hippocampus in those males",
            "Monogamous species, lacking range differences, show no sex difference"
          ],
          explain: "Range size, set by the mating system, drives the demand for navigation and the resulting brain and behavioral differences, which disappear without a range difference."
        }
      ]
    },
    {
      id: "l160",
      title: "Cross-Cultural Diet Wisdom",
      intro: "Traditional practices like spicing, cooking, and food processing act as evolved and cultural defenses against pathogens and toxins.",
      questions: [
        {
          type: "mcq",
          q: "Sherman and Billing's (1999) antimicrobial hypothesis proposes that the primary adaptive function of using spices is to:",
          choices: [
            "Add extra calories to meals",
            "Kill or inhibit food-spoiling bacteria and fungi",
            "Signal the cook's wealth and status",
            "Mask the flavor of fresh, wholesome food"
          ],
          answer: 1,
          explain: "Their 'Darwinian gastronomy' analysis showed many common spices have antimicrobial effects, suggesting spice use evolved to make food safer from pathogens."
        },
        {
          type: "truefalse",
          q: "Consistent with the antimicrobial hypothesis, cuisines in hotter climates tend to use more, and more potent, spices than those in cooler climates.",
          answer: true,
          explain: "Food spoils faster in heat, so hotter regions face greater microbial risk; Sherman and Billing found spice use rises with temperature, as predicted."
        },
        {
          type: "fill",
          q: "Richard Wrangham argues in Catching Fire that ____ food was pivotal in human evolution because it detoxifies, kills pathogens, and boosts digestible calories.",
          answer: "cooking",
          accept: ["cooking", "cooked"],
          explain: "Wrangham's cooking hypothesis holds that heat-processing food unlocked more energy and reduced toxins and pathogens, supporting our large brains."
        },
        {
          type: "match",
          q: "Match each food practice to the defensive function it serves.",
          pairs: [
            ["Spices", "Antimicrobial defense against food pathogens"],
            ["Cooking", "Detoxifies and increases digestible energy"],
            ["Nixtamalization", "Alkali treatment of maize that frees niacin"],
            ["Pregnancy sickness", "Aversions that shield the embryo from toxins"]
          ],
          explain: "Each practice, whether cultural technique or evolved response, reduces exposure to toxins, pathogens, or nutrient deficiency."
        },
        {
          type: "mcq",
          q: "Treating maize with alkali (nixtamalization) helped prevent which deficiency disease in maize-dependent cultures?",
          choices: [
            "Scurvy",
            "Rickets",
            "Pellagra",
            "Goiter"
          ],
          answer: 2,
          explain: "Katz and colleagues (1974) showed alkali processing frees the niacin bound in maize, preventing pellagra, a niacin-deficiency disease."
        },
        {
          type: "truefalse",
          q: "Profet, and later Flaxman and Sherman, argued that pregnancy sickness may protect the embryo by triggering aversions to foods likely to carry toxins or pathogens.",
          answer: true,
          explain: "Flaxman and Sherman's (2000) analysis found nausea peaks during early organ development and targets meats and strong flavors, consistent with an embryo-protection function."
        },
        {
          type: "order",
          q: "Trace how spice use defends foragers, per the antimicrobial hypothesis, in order.",
          items: [
            "Raw meats and foods host spoilage microbes",
            "Cooks add spices such as garlic, onion, or oregano",
            "Antimicrobial plant compounds inhibit or kill the microbes",
            "Diners face a lower risk of foodborne illness"
          ],
          explain: "The chemical defenses in spices reduce microbial load in food, translating into fewer infections for those who eat it."
        }
      ]
    }
  ]
});
