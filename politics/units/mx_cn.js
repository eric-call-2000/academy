/* ============================================================
   Relationship — Mexico & China 🇲🇽🇨🇳
   Silver and silk on the Manila galleons, Chinese migrants and
   the 1911 Torreón massacre; the chemicals behind Mexico's
   fentanyl trade; and a Mexico squeezed between its biggest
   customer and its second-biggest supplier.
   Trump's pressure on Mexico is in mx-7.
   Research note and sources: tools/research/mx_cn.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("mx_cn", {
  id: "mx_cn",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "mx_cn-1", kind: "relation", asOf: "2026-09-30",
      title: "Silver, silk and a massacre",
      dek: "For 250 years Spanish galleons carried Mexican silver to Asia and Chinese silk back. Chinese migrants later helped build northern Mexico, and then suffered one of the worst massacres of the Mexican Revolution.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx_cn/mx_cn-1-hero.webp",
          alt: "Illustration of a large Spanish galleon under full sail on a wide ocean at sunset.",
          caption: "From 1565 to 1815 the Manila galleons linked Acapulco with Asia.",
          credit: "Illustration — not a photograph",
          prompt: "A large sixteenth-century Spanish galleon under full white sails on a wide calm ocean at sunset, golden light on the waves, a second ship far behind, historical oil painting style, no flags, no legible text." },
        { type: "timeline", head: "Early ties", items: [
          ["1565–1815", "Manila galleons link Acapulco and Asia"],
          ["1899", "Mexico and Qing China sign a treaty of friendship and trade"],
          ["13–15 May 1911", "303 Chinese killed in the Torreón massacre"],
          ["1931", "Thousands of Chinese expelled from Sonora"],
          ["14 Feb 1972", "Mexico recognises the People's Republic"],
          ["17 May 2021", "López Obrador apologises for Torreón"]
        ] },
        { type: "section", head: "The galleon trade", md:
          "From 1565 to 1815 Spanish galleons sailed once or twice a year between Acapulco and Manila, in the Philippines. They carried silver mined in Mexico and the Andes west, and brought back Chinese silk, porcelain and spices, which were sold across the Americas and Europe. Mexican silver pesos became a common currency in southern China for centuries; Chinese merchants stamped and weighed them. Historians call it one of the first truly global trade routes. Some Asians, known in Mexico as 'chinos', settled in Acapulco and Mexico City." },
        { type: "section", head: "Migrants and a massacre", md:
          "In the late 19th century, as the United States banned Chinese immigration, thousands of Chinese workers came to northern Mexico instead, to build railways and work in mines. Many became successful shopkeepers in states such as Sonora and Coahuila, which fuelled resentment. In May 1911, during the Mexican Revolution (see [[lesson:mx-11]]), revolutionary troops and a local mob took the railway town of Torreón. Over about ten hours they looted Chinese businesses and killed 303 Chinese residents, as well as five Japanese. It was among the worst anti-Chinese massacres in the Americas." },
        { type: "section", head: "Expulsion and apology", md:
          "Hostility continued. In the 1920s anti-Chinese campaigns spread through the north, with laws banning marriages between Mexicans and Chinese in some states. In 1931 the governor of Sonora, Rodolfo Calles, drove out the state's Chinese population; more than 3,500 were expelled, many trucked across the US border. Mexico restored ties with China after the Communist victory only in February 1972, when President Luis Echeverría recognised the People's Republic and cut ties with Taiwan. On 17 May 2021, at Torreón, President Andrés Manuel López Obrador made an official apology for the massacre." },
        { type: "section", head: "Chinese Mexicans today", md:
          "Some of those expelled, and their Mexican wives and children, ended up in China and Macau; in 1960 the Mexican government organised a repatriation that brought hundreds of Chinese Mexican families home. A distinctive community survived in Mexicali, near the US border, whose Chinatown, La Chinesca, gave the city its famous Chinese-Mexican food. Chinese Mexicans remain a small community, but their history is now far better known than before." },
        { type: "compare", head: "Two faces of the past",
          left: { head: "Connection", md:
            "Mexico and China have traded for 450 years; Mexican silver helped finance Chinese commerce." },
          right: { head: "Exclusion", md:
            "Chinese Mexicans faced massacre, discrimination and expulsion, a history only recently acknowledged." } },
        { type: "section", head: "Why it matters", md:
          "The galleons show that trade across the Pacific is not new, and the massacre and expulsions show how quickly economic resentment can turn on outsiders, a warning that still resonates as Chinese goods pour into Mexico." }
      ],
      takeaways: [
        "For 250 years the Manila galleons carried Mexican silver to Asia and Chinese silk back.",
        "303 Chinese were killed in the 1911 Torreón massacre; Mexico apologised in 2021.",
        "Sonora expelled its Chinese in 1931; Mexico recognised the People's Republic in 1972."
      ],
      check: { q: "What happened in Torreón in May 1911?",
        choices: ["A trade treaty with China was signed", "Revolutionary troops and a mob killed 303 Chinese residents", "Chinese workers finished a railway"], answer: 1,
        explain: "It was one of the worst anti-Chinese massacres in the Americas; López Obrador apologised in 2021." },
      sources: [
        { title: "Mexico apologizes for 1911 massacre of Chinese in Torreón, Coahuila", publisher: "Mexico News Daily", url: "https://mexiconewsdaily.com/news/mx-apologizes-for-1911-killings/", date: "2021-05-18" },
        { title: "Mexican president apologizes for massacre of Chinese migrants in 1911", publisher: "The China Project", url: "https://thechinaproject.com/2021/05/17/mexican-president-apologizes-for-massacre-of-chinese-migrants-in-1911/", date: "2021-05-17" },
        { title: "Mexico Faces Up to Uneasy Anniversary of Chinese Massacre", publisher: "History News Network", url: "https://www.historynewsnetwork.org/article/mexico-faces-up-to-uneasy-anniversary-of-chinese-m", date: "2021" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "mx_cn-2", kind: "relation", asOf: "2026-09-30",
      title: "The fentanyl chain",
      dek: "Mexican cartels make fentanyl from chemicals bought in China, and Chinese money-laundering networks help them move the profits. Washington has pressed both countries to break the chain.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx_cn/mx_cn-2-hero.webp",
          alt: "Illustration of a container port at night with stacks of shipping containers and a cargo ship, lit by floodlights.",
          caption: "Precursor chemicals for fentanyl often arrive in Mexico by sea, hidden among legal cargo.",
          credit: "Illustration — not a photograph",
          prompt: "A busy container port at night, tall stacks of colourful shipping containers, a large cargo ship at the quay, cranes lit by floodlights, wet ground reflecting lights, moody documentary style, no people close up, no logos, no flags, no legible text." },
        { type: "facts", head: "The supply chain", rows: [
          ["Chemicals", "Precursors mostly bought from Chinese companies"],
          ["Production", "Clandestine labs run by the Sinaloa and Jalisco cartels"],
          ["Money", "Chinese networks linked to $312 billion in suspicious transactions, 2020–24"],
          ["Jun 2025", "China schedules all internationally listed fentanyl precursors"],
          ["Nov 2025", "China restricts exports of 13 precursors to North America"]
        ] },
        { type: "section", head: "Chemicals from China", md:
          "Fentanyl, the synthetic opioid behind most American overdose deaths, is mostly made in Mexico by the Sinaloa and Jalisco New Generation cartels (see [[lesson:mx-6]]). Their labs rely on precursor chemicals, and on pill presses, bought mostly from companies in China, the world's largest chemical producer. Many of these chemicals have legal uses, which makes them hard to control. They arrive by sea at ports such as Manzanillo and Lázaro Cárdenas, often mislabelled, or are routed through other countries. US agencies say China is the main source of the precursors." },
        { type: "section", head: "Laundering the profits", md:
          "Chinese networks have also become key to moving the cartels' money. In an August 2025 advisory the US Treasury's financial crimes unit, FinCEN, described how Chinese money-laundering networks buy dollars from Mexican cartels and sell them to wealthy Chinese clients trying to get money round China's strict capital controls. The cartels get pesos in Mexico without moving cash across borders; the Chinese buyers get dollars abroad. FinCEN linked these networks to about $312 billion in suspicious transactions between 2020 and 2024." },
        { type: "section", head: "Pressure from Washington", md:
          "The Trump administration has used tariffs to push both countries. It justified tariffs on Mexico (see [[lesson:mx-7]]) and China (see [[lesson:us_cn-2]]) partly by fentanyl, demanding that Mexico stop the drugs and that China stop the chemicals. China says the problem is American demand, but it has tightened controls: in June 2025 it finished adding all fentanyl precursors listed under a UN convention to its controlled list, and in November 2025 it restricted exports of 13 more chemicals to North America. Mexico has seized record quantities of drugs and chemicals, sent cartel prisoners to the United States and deployed troops to ports." },
        { type: "section", head: "A letter to Xi", md:
          "Mexico has also appealed to Beijing directly. In 2023 President López Obrador wrote to Xi Jinping asking for help in controlling shipments of fentanyl and its chemicals; China's foreign ministry replied that there was no illegal fentanyl trafficking between the two countries, though it said it would cooperate. For its part, Mexico points out that most of the guns used by its cartels are smuggled from the United States (see [[lesson:us_mx-3]]), and that addiction is an American problem as much as a Mexican or Chinese one." },
        { type: "compare", head: "Who is responsible?",
          left: { head: "Washington", md:
            "China supplies the chemicals and launders the money; Mexico lets the cartels operate. Both must act." },
          right: { head: "Beijing and Mexico City", md:
            "The crisis is driven by American demand and American guns flowing south. Blame must be shared." } },
        { type: "section", head: "Why it matters", md:
          "Fentanyl kills tens of thousands of Americans a year and has become a reason for tariffs. Breaking the chain from Chinese chemicals to Mexican labs is one of Washington's top demands of both countries." }
      ],
      takeaways: [
        "Mexican cartels make fentanyl mainly from precursor chemicals bought in China.",
        "Chinese money-laundering networks help cartels move their profits, according to US Treasury.",
        "Under US pressure, China tightened controls on precursors in 2025."
      ],
      check: { q: "What role do Chinese money-laundering networks play for Mexican cartels?",
        choices: ["They sell the cartels weapons", "They buy the cartels' dollars and sell them to Chinese clients evading capital controls", "They run fentanyl labs in Mexico"], answer: 1,
        explain: "FinCEN's 2025 advisory linked these networks to about $312 billion in suspicious transactions." },
      sources: [
        { title: "China Primer: Illicit Fentanyl and China's Role", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/IF10890", date: "2025" },
        { title: "FinCEN Advisory on Chinese Money Laundering Networks", publisher: "FinCEN", url: "https://www.fincen.gov/system/files/2025-08/FinCEN-Advisory-CMLN-508.pdf", date: "2025-08-28" },
        { title: "Mandatory Congressional Report on China Narcotics", publisher: "US State Department", url: "https://www.state.gov/wp-content/uploads/2025/09/Tab-1-Mandatory-Congressional-Report-on-China-Narcotics-Accessible-9.17.2025.pdf", date: "2025-09-17" },
        { title: "National Drug Threat Assessment 2025", publisher: "DEA", url: "https://www.dea.gov/sites/default/files/2025-07/2025NationalDrugThreatAssessment.pdf", date: "2025-07" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "mx_cn-3", kind: "relation", asOf: "2026-09-30",
      title: "Caught between two giants",
      dek: "Mexico buys more than $100 billion a year of Chinese goods but sells little back. Under pressure from Washington, it has put tariffs of up to 50% on Chinese imports, and BYD has shelved a car plant.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx_cn/mx_cn-3-hero.webp",
          alt: "Illustration of a large modern industrial park in northern Mexico with factory buildings and mountains behind.",
          caption: "Some Chinese firms opened factories in Mexico to reach the US market, a move Washington wants to stop.",
          credit: "Illustration — not a photograph",
          prompt: "A large modern industrial park in the dry hills of northern Mexico, rows of white factory buildings and loading bays, lorries on a new road, rugged brown mountains behind under a clear sky, documentary style, no logos, no flags, no legible text." },
        { type: "timeline", head: "Trade under pressure", items: [
          ["2024", "Record $120 billion trade deficit with China"],
          ["Jul 2025", "BYD shelves its planned Mexican car plant"],
          ["Dec 2025", "Congress approves tariffs of up to 50% on Chinese goods"],
          ["Jan 2026", "The tariffs take effect; China protests"],
          ["2026", "Review of the USMCA trade pact with the US and Canada"],
          ["Nov 2026", "Sheinbaum due at the APEC summit in China"]
        ] },
        { type: "section", head: "A lopsided trade", md:
          "China is Mexico's second-largest trading partner after the United States, but the trade runs one way. In 2024 Mexico bought more than $130 billion of Chinese goods and sold China less than $10 billion, a record deficit of about $120 billion. Chinese parts, machinery and electronics feed Mexican factories that then export to the United States, and cheap Chinese clothing, shoes and toys compete with Mexican makers. Some Chinese companies opened factories in Mexico to get inside the North American trade zone, the USMCA (see [[lesson:us_mx-1]])." },
        { type: "section", head: "Washington's demand", md:
          "The United States sees this as a back door for Chinese goods, and made closing it a condition for keeping Mexico's privileged access to the American market. BYD, the Chinese electric-car giant, had announced in 2023 a plant to build about 150,000 cars a year in Mexico; in July 2025 it shelved the plan, citing uncertainty over US tariffs and geopolitics, and Chinese regulators were also reported to be wary of its technology leaking to the US. In December 2025 Mexico's Congress approved tariffs of 5% to 50% on more than 1,400 products, such as cars, car parts, steel, textiles, toys and furniture, from countries without a trade deal with Mexico, above all China." },
        { type: "section", head: "Balancing", md:
          "China urged Mexico to reverse the tariffs, saying they would 'substantially harm' its interests. President Claudia Sheinbaum (see [[lesson:mx-4]]) says the tariffs protect Mexican jobs rather than obeying Washington, and she has avoided confrontation with Beijing: she plans to attend the APEC summit in Shenzhen in November 2026 and hopes to meet Xi Jinping. The review of the USMCA in 2026, and Trump's tariffs on Mexico, will decide how far Mexico must go in cutting China out of its supply chains." },
        { type: "section", head: "Cars and consumers", md:
          "Ordinary Mexicans have benefited from cheap Chinese goods, from phones to clothes. Chinese car brands such as MG, Chirey and JAC grew quickly in Mexico, selling cars well below the price of Japanese, American or European rivals, which worried Mexico's own car industry and its American partners. The new tariffs of up to 50% on cars from non-trade-deal countries aim squarely at them. Critics warn that the tariffs will raise prices for Mexican families while doing little to build local industry." },
        { type: "compare", head: "Mexico's choice",
          left: { head: "Side with America", md:
            "Four-fifths of Mexico's exports go to the United States; keeping that market matters far more than Chinese goods." },
          right: { head: "Keep options open", md:
            "Chinese investment and cheap inputs help Mexico's economy; being Washington's enforcer has costs." } },
        { type: "section", head: "Why it matters", md:
          "Mexico is the United States' largest trading partner. Whether it becomes a bridge for Chinese goods or a wall against them shapes the whole North American economy." }
      ],
      takeaways: [
        "Mexico runs a huge trade deficit with China, its second-largest trading partner.",
        "Under US pressure BYD shelved a Mexican plant and Mexico put tariffs of up to 50% on Chinese goods.",
        "Sheinbaum avoids confrontation with Beijing and hopes to meet Xi in November 2026."
      ],
      check: { q: "What did Mexico's Congress approve in December 2025?",
        choices: ["A free trade deal with China", "Tariffs of up to 50% on many imports from China and other non-trade-deal countries", "A ban on all Chinese cars"], answer: 1,
        explain: "The tariffs cover more than 1,400 products and took effect in January 2026; China urged Mexico to reverse them." },
      sources: [
        { title: "Mexico Records Trade Deficit of Nearly USD 120 Billion with China", publisher: "Fundación Andrés Bello", url: "https://www.fundacionandresbello.org/en/news/mexico-%F0%9F%87%B2%F0%9F%87%BD-news/mexico-records-trade-deficit-of-nearly-usd-120-billion-with-china/", date: "2025" },
        { title: "Mexico to Impose Tariffs as High as 50% on Chinese Imports", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-12-11/mexico-aligns-with-us-on-tougher-tariffs-on-chinese-asian-goods", date: "2025-12-11" },
        { title: "China urges Mexico to reverse 50% tariffs 'as soon as possible'", publisher: "Mexico News Daily", url: "https://mexiconewsdaily.com/news/china-mexico-50-tariffs/", date: "2025-12" },
        { title: "BYD cancels plans for Mexico factory", publisher: "Mexico News Daily", url: "https://mexiconewsdaily.com/business/byd-cancels-plans-for-mexico/", date: "2025-07" }
      ]
    }
  ]
});
