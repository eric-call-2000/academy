/* ============================================================
   Relationship — Saudi Arabia & the UAE 🇸🇦🇦🇪
   Two Gulf monarchies, once led by a mentor and his protégé:
   a partnership that fought together in Yemen, split over it in
   2025, and now competes over oil, money and influence. The UAE
   in Sudan is in ae-6; Saudi oil policy in sa-10.
   Research note and sources: tools/research/sa_ae.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("sa_ae", {
  id: "sa_ae",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "sa_ae-1", kind: "relation", asOf: "2026-09-30",
      title: "The two Mohammeds",
      dek: "When Mohammed bin Salman rose to power in Riyadh, Abu Dhabi's Mohammed bin Zayed was his mentor. Together they went to war in Yemen and blockaded Qatar. Then the protégé outgrew the teacher.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa_ae/sa_ae-1-hero.webp",
          alt: "Illustration of two desert cities' skylines facing each other across sand dunes at dusk, one with a tall needle tower and one with glass skyscrapers.",
          caption: "Riyadh and Abu Dhabi were close partners in the late 2010s; now they compete.",
          credit: "Illustration — not a photograph",
          prompt: "Two modern desert city skylines facing each other across wide golden sand dunes at dusk, one with a tall needle-like tower, the other with gleaming glass skyscrapers by the sea, warm orange sky, rivalry and ambition, no people, no flags, no legible text." },
        { type: "timeline", head: "Partnership", items: [
          ["1971", "The UAE is founded"],
          ["1974", "Treaty of Jeddah settles the border, on terms the UAE later disputes"],
          ["2015", "MBS becomes defence minister; the two launch the Yemen war"],
          ["2017", "Together they blockade Qatar"],
          ["2019", "The UAE draws down its troops in Yemen"],
          ["2021", "Qatar blockade ends; OPEC+ quota row between the two"]
        ] },
        { type: "section", head: "Big brother, small neighbour", md:
          "Saudi Arabia has more than three times the UAE's population and eight times its land. When the seven emirates federated in 1971 (see [[lesson:ae-9]]), Riyadh withheld recognition until the UAE settled a border dispute in 1974, ceding land and access to the Shaybah oil field. Many Emiratis still see that treaty as imposed. For decades the UAE lived in the kingdom's shadow, but Dubai's boom and Abu Dhabi's oil wealth made it a financial, trading and military power in its own right." },
        { type: "section", head: "Mentor and protégé", md:
          "Mohammed bin Zayed, known as MBZ, the effective ruler of Abu Dhabi from the 2000s and UAE president since 2022, spotted the young Mohammed bin Salman early. When MBS became Saudi defence minister in 2015, the two forged an alliance. They shared a hostility to Iran and to the Muslim Brotherhood, and a vision of modern, authoritarian, business-friendly states. In March 2015 they led a coalition into Yemen against the Iran-aligned Houthis. In June 2017 they and their allies cut ties with Qatar, accusing it of backing Islamists and cosying up to Iran." },
        { type: "section", head: "Drifting apart", md:
          "Cracks appeared quickly. In 2019 the UAE pulled most of its troops out of Yemen, leaving Saudi Arabia to carry the war, while keeping allies there. In 2021 Riyadh ended the Qatar blockade on its own terms, and the two clashed openly in OPEC+ when the UAE demanded a higher production quota. As MBS grew into his power, he no longer needed a mentor, and his Vision 2030 plan put Saudi Arabia in direct competition with the Emirati model of openness and business." },
        { type: "section", head: "Personal and political", md:
          "In Gulf monarchies, relationships between rulers are state policy. Reports of cooled personal ties between the two men, and of each courting different partners in Washington, Beijing and Moscow, have been read by diplomats as signs of a wider rivalry. Both still coordinate against common threats, above all Iran, but the partnership of equals has become a contest." },
        { type: "compare", head: "Two readings",
          left: { head: "Healthy rivalry", md:
            "Competition between two ambitious neighbours spurs reform and investment, and they still cooperate against common threats." },
          right: { head: "Dangerous rift", md:
            "The rivalry now plays out in wars from Yemen to Sudan, where the two back opposing sides and civilians pay the price." } },
        { type: "section", head: "Why it matters", md:
          "Saudi Arabia and the UAE are the Arab world's two richest and most influential states. When they worked together, they reshaped the region. Their falling-out now shapes wars, oil markets and the Gulf's relations with the great powers." }
      ],
      takeaways: [
        "MBZ of the UAE mentored Saudi Arabia's MBS, and together they launched the Yemen war and blockaded Qatar.",
        "The UAE pulled most troops from Yemen in 2019, and the two clashed over oil quotas in 2021.",
        "As MBS grew in power, the partnership turned into a rivalry."
      ],
      check: { q: "What did Saudi Arabia and the UAE do together in 2017?",
        choices: ["Left OPEC", "Cut ties with and blockaded Qatar", "Recognised Israel"], answer: 1,
        explain: "With Bahrain and Egypt they cut ties with Qatar, accusing it of backing Islamists and being too close to Iran; the blockade ended in 2021." },
      sources: [
        { title: "Saudi–UAE Strategic Friction and Regional Fragmentation", publisher: "The Soufan Center", url: "https://thesoufancenter.org/intelbrief-2026-january-6/", date: "2026-01-06" },
        { title: "The UAE exits OPEC and Saudi-UAE tensions in 2026", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10833/", date: "2026" },
        { title: "Best of frenemies: Saudi-UAE rivalry bursts into view", publisher: "AFP via Malay Mail", url: "https://www.malaymail.com/news/world/2026/01/03/best-of-frenemies-saudi-uae-rivalry-bursts-into-view/204016", date: "2026-01-03" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "sa_ae-2", kind: "relation", asOf: "2026-09-30",
      title: "Yemen: the rupture",
      dek: "In December 2025 Emirati-backed separatists seized most of southern Yemen. Saudi Arabia bombed a shipment it said the UAE had sent them and ordered Emirati forces out. The rivalry was in the open.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa_ae/sa_ae-2-hero.webp",
          alt: "Illustration of an old harbour town of white houses at the foot of brown mountains on the Arabian Sea, with smoke rising from the port.",
          caption: "Saudi aircraft struck the port of Mukalla in southern Yemen on 30 December 2025.",
          credit: "Illustration — not a photograph",
          prompt: "An old harbour town of white and ochre houses at the foot of steep brown mountains on the Arabian Sea, a small port with cranes, a column of dark smoke rising near the docks, hazy afternoon light, tense, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Southern Yemen, 2025–26", items: [
          ["2017", "The UAE-backed Southern Transitional Council (STC) is formed"],
          ["Dec 2025", "STC forces take most of southern Yemen, including Hadramawt"],
          ["30 Dec 2025", "Saudi Arabia bombs a shipment at Mukalla it says came from the UAE"],
          ["Early Jan 2026", "The UAE says all its forces have left Yemen"],
          ["Jan 2026", "Saudi-backed forces retake most of the south"]
        ] },
        { type: "section", head: "Two different wars", md:
          "Saudi Arabia and the UAE went into Yemen in 2015 as partners, to restore the internationally recognised government against the Houthis (see [[lesson:sa-6]]). But they backed different Yemenis. Riyadh supported the government and northern tribal and Islamist-linked groups. Abu Dhabi, hostile to the Muslim Brotherhood, built up southern militias and in 2017 the Southern Transitional Council (STC), which wants to restore the independent state of South Yemen that existed until 1990. The UAE also gained influence over ports and islands along the Red Sea and the Gulf of Aden." },
        { type: "section", head: "The December offensive", md:
          "In December 2025 STC forces swept across the south, taking the oil-producing province of Hadramawt and Mahra on the Omani border, areas Saudi Arabia regards as its own backyard. On 30 December Saudi aircraft bombed the port of Mukalla, saying they had struck a weapons shipment for the separatists that had arrived from the UAE, and called Emirati actions 'extremely dangerous'. The UAE denied sending weapons, saying the vehicles were for its own forces, but within days announced that all its remaining troops had left Yemen. In January 2026 Saudi-backed forces recovered most of the territory." },
        { type: "section", head: "Sudan too", md:
          "The two are also on opposite sides in Sudan's civil war. Saudi Arabia backs the Sudanese army and has hosted peace talks; the UAE is accused by UN experts and investigators of arming the Rapid Support Forces, which it denies (see [[lesson:ae-6]]). A Reuters investigation reported that an Emirati-funded base in Ethiopia had trained thousands of RSF fighters." },
        { type: "section", head: "Damage control", md:
          "After Mukalla both governments tried to lower the temperature publicly, speaking of brotherhood and shared interests, and officials exchanged visits. But analysts described the rift as 'paused, not resolved': the underlying competition for influence in Yemen, the Horn of Africa and the Red Sea remains." },
        { type: "compare", head: "Two views of the Yemen clash",
          left: { head: "Riyadh", md:
            "Yemen's unity and stability on Saudi Arabia's border are a vital interest. Arming separatists threatened both." },
          right: { head: "Abu Dhabi", md:
            "The UAE fought terrorists and the Houthis alongside southern forces who were Yemen's most effective fighters." } },
        { type: "section", head: "Why it matters", md:
          "The Mukalla strike was the first time Saudi Arabia had openly used force against an Emirati operation. It showed that the rivalry between the two could turn violent, and that their proxy contests are now shaping the future of Yemen and Sudan, two of the world's worst humanitarian crises." }
      ],
      takeaways: [
        "In Yemen Saudi Arabia backed the government while the UAE built up southern separatists.",
        "After the STC seized much of the south in December 2025, Saudi Arabia bombed a shipment at Mukalla and the UAE withdrew its forces.",
        "The two also back opposite sides in Sudan's civil war."
      ],
      check: { q: "What did Saudi Arabia strike at Mukalla on 30 December 2025?",
        choices: ["A Houthi missile base", "A shipment it said the UAE had sent to southern separatists", "An Iranian warship"], answer: 1,
        explain: "Riyadh said the shipment was weapons for the STC; the UAE denied it but soon withdrew its forces from Yemen." },
      sources: [
        { title: "Saudi Arabia bombs Yemen port city of Mukalla over weapons shipment from UAE for separatists", publisher: "PBS NewsHour", url: "https://www.pbs.org/newshour/world/saudi-arabia-bombs-yemen-port-city-of-mukalla-over-weapons-shipment-from-uae-for-separatists", date: "2025-12-30" },
        { title: "U.A.E. pulls military forces out of Yemen following tensions with Saudi Arabia", publisher: "CBC News", url: "https://www.cbc.ca/news/world/yemen-uae-military-forces-9.7032551", date: "2026-01" },
        { title: "Saudi Arabia Moves to Rein In UAE After Yemen Exposes Rivalry", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-01-08/saudi-arabia-moves-to-rein-in-uae-after-yemen-exposes-rivalry", date: "2026-01-08" },
        { title: "Paused, Not Resolved: The Saudi-UAE Rivalry and the War in Sudan", publisher: "Arab Reform Initiative", url: "https://www.arab-reform.net/publication/paused-not-resolved-the-saudi-uae-rivalry-and-the-war-in-sudan/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "sa_ae-3", kind: "relation", asOf: "2026-09-30",
      title: "Oil, money and the OPEC exit",
      dek: "The UAE has left OPEC after 59 years, freeing itself from Saudi-led production limits. Across business, finance and tourism, the two now compete head to head.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa_ae/sa_ae-3-hero.webp",
          alt: "Illustration of offshore oil platforms in a calm turquoise Gulf sea with a city skyline faint on the horizon.",
          caption: "The UAE has invested heavily to raise its oil production capacity toward 5 million barrels a day.",
          credit: "Illustration — not a photograph",
          prompt: "Several offshore oil platforms standing in a calm turquoise Gulf sea, a faint modern city skyline on the hazy horizon, bright midday sun, industrial and wealthy, no people, no flags, no legible text." },
        { type: "facts", head: "The OPEC exit", rows: [
          ["Announced", "28 April 2026"],
          ["Effective", "1 May 2026, from both OPEC and OPEC+"],
          ["Member since", "1967 (as Abu Dhabi)"],
          ["Reason given", "A review of national production policy and capacity"],
          ["Context", "During the Iran war, which disrupted Gulf oil shipping"]
        ] },
        { type: "section", head: "Quotas", md:
          "OPEC and its wider OPEC+ grouping with Russia, both led by Saudi Arabia, set production limits for members to support prices (see [[lesson:sa-10]]). The UAE spent billions raising its capacity, but quotas kept it from pumping as much as it could. In 2021 it openly defied Riyadh in a quota dispute before a compromise. Emirati officials resented cutting output to help prices when they had invested to grow and wanted to sell more oil before demand declines." },
        { type: "section", head: "Leaving", md:
          "On 28 April 2026, in the middle of the war with Iran that had disrupted Gulf oil shipping (see [[lesson:ir-7]]), the UAE announced it would leave OPEC and OPEC+ on 1 May, after 59 years of membership. Abu Dhabi called it a national policy decision based on a review of its production capacity; analysts noted it had not consulted Riyadh. The exit weakened OPEC's ability to manage the market and was widely read as a sign of the Saudi–Emirati rift." },
        { type: "section", head: "Head-to-head", md:
          "The competition goes far beyond oil. Since 2024 Saudi Arabia has required foreign companies seeking government contracts to base their regional headquarters in the kingdom, a direct challenge to Dubai. The two compete for airline routes, tourists, film and sports events, artificial intelligence investment and influence in Washington, and their huge sovereign wealth funds chase many of the same deals. Dubai still leads as the region's business hub, home to most multinational regional offices, but Riyadh's market and spending power are far larger, and many firms now keep offices in both. Saudi Arabia's Vision 2030 has been scaled back (see [[lesson:sa-5]]), but its ambition to become the region's business capital remains." },
        { type: "section", head: "Still tied", md:
          "For all the rivalry, the two remain linked. Both host American forces, both were hit by Iranian missiles in 2026 (see [[lesson:ae-7]]), and both depend on shipping through the Strait of Hormuz. Their citizens travel freely between them, and families and tribes span the border. Both belong to the Gulf Cooperation Council, and neither government wants a public breach that Iran or others could exploit." },
        { type: "compare", head: "What does the exit mean?",
          left: { head: "Independence", md:
            "The UAE is free to pump more oil and earn more while it can, and to set its own course in energy and diplomacy." },
          right: { head: "Fragmentation", md:
            "A weaker OPEC and a divided Gulf make oil prices and regional security less predictable, and benefit outside powers." } },
        { type: "section", head: "Why it matters", md:
          "Saudi–Emirati rivalry is reshaping the Gulf economy and the oil market. How far it goes, and whether the two can manage it, will affect petrol prices worldwide and the stability of a region already scarred by war." }
      ],
      takeaways: [
        "The UAE left OPEC and OPEC+ on 1 May 2026 after 59 years, freeing it from Saudi-led quotas.",
        "The two compete for company headquarters, airlines, tourism and investment.",
        "They remain tied by security, shipping and people, even as rivalry grows."
      ],
      check: { q: "When did the UAE's exit from OPEC take effect?",
        choices: ["1 January 2025", "1 May 2026", "It has not left"], answer: 1,
        explain: "The UAE announced on 28 April 2026 that it would leave OPEC and OPEC+ from 1 May, after 59 years." },
      sources: [
        { title: "UAE leaves OPEC in blow to oil cartel during war on Iran", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/4/28/uae-leaves-opec-and-opec", date: "2026-04-28" },
        { title: "UAE announces decision to exit OPEC & OPEC+", publisher: "WAM (Emirates News Agency)", url: "https://www.wam.ae/en/article/bzxzuh7-uae-announces-decision-exit-opec-opec+", date: "2026-04-28" },
        { title: "UAE's exit rattles OPEC's grip on the oil market", publisher: "Wood Mackenzie", url: "https://www.woodmac.com/blogs/the-edge/uaes-exit-rattles-opecs-grip-on-the-oil-market/", date: "2026" },
        { title: "The UAE's Exit from OPEC: When Politics and Oil Mix", publisher: "Middle East Council on Global Affairs", url: "https://mecouncil.org/publication/the-uaes-exit-from-opec-when-politics-and-oil-mix/", date: "2026" }
      ]
    }
  ]
});
