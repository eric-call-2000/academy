/* ============================================================
   Relationship — Indonesia & China 🇮🇩🇨🇳
   Bandung, the 1965 killings and a 23-year freeze; Chinese
   money behind Indonesia's nickel boom and its first bullet
   train; and a dispute over the seas off Natuna that Prabowo
   blurred in 2024.
   Research note and sources: tools/research/id_cn.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("id_cn", {
  id: "id_cn",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "id_cn-1", kind: "relation", asOf: "2026-09-30",
      title: "Bandung, 1965 and a long freeze",
      dek: "Sukarno's Indonesia hosted China at Bandung and drew close to Beijing. After the bloodshed of 1965 the army broke off relations for 23 years, and Chinese Indonesians paid a heavy price.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id_cn/id_cn-1-hero.webp",
          alt: "Illustration of a colonial-era meeting hall in Bandung with delegates arriving and flags on poles without markings.",
          caption: "Zhou Enlai attended the Asian–African Conference in Bandung in April 1955.",
          credit: "AI illustration — not a photograph",
          prompt: "A white 1920s art-deco meeting hall in a tropical city, 1950s delegates in suits and robes arriving in a crowd, old cars parked outside, palm trees and blue sky, historical painting style, faces not in close-up, plain empty flagpoles, no legible text." },
        { type: "timeline", head: "Friendship and rupture", items: [
          ["13 Apr 1950", "Indonesia establishes relations with the People's Republic"],
          ["Apr 1955", "Zhou Enlai at the Bandung Conference"],
          ["1965–66", "Army blames communists for a coup; mass killings follow"],
          ["23 Oct 1967", "Indonesia freezes relations with China"],
          ["8 Aug 1990", "Relations restored"],
          ["May 1998", "Riots target Chinese Indonesians as Suharto falls"]
        ] },
        { type: "section", head: "Sukarno and Beijing", md:
          "Indonesia was one of the first countries to recognise the People's Republic, in 1950. In April 1955 President Sukarno hosted the Asian–African Conference at Bandung, where Zhou Enlai won friends by taking a moderate line; the two countries also signed a treaty settling the nationality of Chinese Indonesians, many of whom had held dual citizenship. In the early 1960s Sukarno moved closer to China and to Indonesia's Communist Party, the PKI, then the largest communist party outside the communist world, and talked of a 'Jakarta–Peking axis'." },
        { type: "section", head: "1965 and the freeze", md:
          "In the early hours of 1 October 1965 a group of officers killed six generals in what they called a move to forestall a coup. The army, led by General Suharto, blamed the PKI and suspected China of backing it. Over the following months the army and allied groups killed an estimated 500,000 people or more accused of being communists (see [[lesson:id-10]]); ethnic Chinese were among the victims. Mobs attacked the Chinese embassy. On 23 October 1967 Suharto's government froze diplomatic relations, accusing Beijing of supporting the communists, and they stayed frozen until 8 August 1990." },
        { type: "section", head: "Chinese Indonesians", md:
          "Under Suharto's New Order (see [[lesson:id-3]]), Chinese Indonesians, about 1–3% of the population but prominent in business, faced official discrimination: Chinese schools and newspapers were closed, Chinese characters banned in public and families pressed to adopt Indonesian-sounding names. As Suharto fell in May 1998, riots in Jakarta, Solo, Medan and other cities targeted Chinese homes and businesses; more than a thousand people died, and many Chinese Indonesian women were raped. After 1998 the bans were lifted, and Chinese New Year became a national holiday in 2003." },
        { type: "section", head: "Partners again", md:
          "Once relations were restored, trade grew fast, and China became Indonesia's largest trading partner, buying its coal, palm oil and nickel and selling it machinery and consumer goods. In October 2013 Xi Jinping chose Indonesia's parliament to announce the 'Maritime Silk Road', the sea half of what became the Belt and Road Initiative, and the two raised ties to a 'comprehensive strategic partnership'. Chinese Indonesians, now openly celebrating their culture, often play a role in these business links." },
        { type: "compare", head: "Two legacies",
          left: { head: "Solidarity", md:
            "Bandung made Indonesia and China fellow leaders of the developing world, a bond both still invoke." },
          right: { head: "Suspicion", md:
            "The 1965 killings and anti-Chinese violence left a deep distrust of Beijing and of Chinese influence." } },
        { type: "section", head: "Why it matters", md:
          "Suspicion of China, and prejudice against Chinese Indonesians, still surfaces in Indonesian politics whenever Chinese investment or Chinese workers become an issue." }
      ],
      takeaways: [
        "Indonesia hosted China at Bandung in 1955, and Sukarno drew close to Beijing.",
        "After 1965 the army blamed communists and China; relations were frozen from 1967 to 1990.",
        "Chinese Indonesians faced discrimination under Suharto and deadly riots in 1998."
      ],
      check: { q: "Why did Indonesia freeze relations with China in 1967?",
        choices: ["Over the South China Sea", "Suharto's government accused Beijing of backing the communists after 1965", "Over nickel exports"], answer: 1,
        explain: "Relations stayed frozen until 8 August 1990." },
      sources: [
        { title: "China, Indonesia resume diplomatic relations", publisher: "The Washington Post", url: "https://www.washingtonpost.com/archive/politics/1990/07/04/china-indonesia-resume-diplomatic-relations/e50f4a3a-0950-4258-a576-3ec808754607/", date: "1990" },
        { title: "Bandung Conference (Asian-African Conference), 1955", publisher: "US Office of the Historian", url: "https://history.state.gov/milestones/1953-1960/bandung-conf", date: "n.d." },
        { title: "What Do the May 1998 Riots Mean for Young Chinese Indonesians?", publisher: "The Diplomat", url: "https://thediplomat.com/2020/05/what-do-the-may-1998-riots-mean-for-young-chinese-indonesians/", date: "2020-05" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "id_cn-2", kind: "relation", asOf: "2026-09-30",
      title: "Nickel and a bullet train",
      dek: "Indonesia banned exports of raw nickel, and Chinese firms built the smelters that made it the world's top producer. China also built Indonesia's first high-speed railway, which now struggles with its debts.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id_cn/id_cn-2-hero.webp",
          alt: "Illustration of a sprawling industrial park with smelter chimneys on a tropical coast beside green hills.",
          caption: "The Chinese-backed Morowali industrial park in Sulawesi processes nickel for batteries and steel.",
          credit: "AI illustration — not a photograph",
          prompt: "A sprawling industrial park with smelter chimneys and smoke on a tropical coast, green jungle-covered hills behind, a jetty with bulk carriers, hazy humid light, wide aerial documentary view, no people, no logos, no flags, no legible text." },
        { type: "facts", head: "China and Indonesian industry", rows: [
          ["Nickel ore export ban", "Announced 2019, in force from January 2020"],
          ["Chinese investment in nickel", "About $30 billion"],
          ["Indonesia's share of world nickel", "16% (2019) to about 43% (2024)"],
          ["Whoosh railway", "Jakarta–Bandung, 143 km, opened October 2023"],
          ["Whoosh cost", "A little over $7 billion, 75% borrowed from China"]
        ] },
        { type: "section", head: "The nickel bet", md:
          "Indonesia has the world's largest nickel reserves, used in stainless steel and electric-car batteries. Most of its ore used to be shipped raw to China. President Joko Widodo wanted Indonesia to process it at home, and from January 2020 banned exports of raw nickel ore. Chinese companies, led by the steelmaker Tsingshan, invested about $30 billion in smelters, above all at the Indonesia Morowali Industrial Park in Sulawesi, founded in 2013 with Chinese bank loans. Indonesia's share of world nickel output rose from 16% in 2019 to about 43% in 2024, and exports of processed nickel soared." },
        { type: "section", head: "The costs", md:
          "The boom has costs. Chinese firms control most of the smelting, and critics say Indonesia swapped dependence on selling ore to China for dependence on Chinese owners. Many smelters run on coal power, and forests have been cleared for mines. Workers have died in fires and accidents, and there have been clashes between Indonesian and Chinese workers, some of whom came on questionable visas. The surge in supply also crashed world nickel prices, pushing mines in Australia and elsewhere to close." },
        { type: "section", head: "Whoosh", md:
          "In 2015 Indonesia chose China over Japan to build a high-speed railway from Jakarta to Bandung, attracted by China's offer to build without a government guarantee. Named Whoosh, the 143-kilometre line opened in October 2023, years late, running at over 300 km/h. Its cost rose to a little over $7 billion, about three-quarters borrowed from China Development Bank. Ridership, about 6.2 million in 2025, has been far below forecasts, and the operator loses money; repayments of principal start in 2027. In 2025 officials called the debt a 'time bomb', and Indonesia's sovereign fund, Danantara, began talks with China on restructuring it, with President Prabowo promising the state would help." },
        { type: "section", head: "Batteries and cars", md:
          "Indonesia wants to go further, from nickel to batteries and electric cars. China's CATL, the world's biggest battery maker, leads a $5.9 billion joint project with Indonesian state companies; President Prabowo broke ground on its battery plant in Karawang, West Java, on 29 June 2025. On 3 September 2026 BYD opened a factory in Subang, also in West Java, able to build 150,000 cars a year. Indonesia hopes these projects will create skilled jobs, though critics note that Chinese firms still control the most valuable technology." },
        { type: "compare", head: "Good deals for Indonesia?",
          left: { head: "Supporters", md:
            "Chinese capital turned Indonesia into an industrial power in nickel and gave it modern railways." },
          right: { head: "Critics", md:
            "China captured the profits, the environment paid, and Indonesia is left with a loss-making train and Chinese debt." } },
        { type: "section", head: "Why it matters", md:
          "Indonesia's plan to become a rich country by 2045 relies on processing its own resources. China's role in that plan makes it Indonesia's most important economic partner." }
      ],
      takeaways: [
        "After Indonesia banned raw nickel exports in 2020, Chinese firms invested about $30 billion in smelters.",
        "Indonesia's share of world nickel output rose from 16% to about 43%.",
        "The Chinese-built Whoosh high-speed railway opened in 2023 and now struggles with its debts."
      ],
      check: { q: "What did Indonesia's 2020 nickel ore export ban lead to?",
        choices: ["A collapse of Indonesian mining", "Chinese investment of about $30 billion in Indonesian smelters", "A trade war with China"], answer: 1,
        explain: "Indonesia's share of world nickel output rose to about 43% by 2024, much of it in Chinese-run plants." },
      sources: [
        { title: "How Indonesia Used Chinese Industrial Investments to Turn Nickel into the New Gold", publisher: "Carnegie Endowment", url: "https://carnegieendowment.org/research/2023/04/how-indonesia-used-chinese-industrial-investments-to-turn-nickel-into-the-new-gold", date: "2023-04" },
        { title: "Centralizing Indonesia's nickel industry: the true costs of Chinese investments", publisher: "Pacific Forum", url: "https://pacforum.org/publications/pacnet-55-centralizing-indonesias-nickel-industry-the-true-costs-of-chinese-investments/", date: "2025" },
        { title: "Indonesia High-speed Rail Project a Financial 'Time Bomb,' Official Says", publisher: "The Diplomat", url: "https://thediplomat.com/2025/08/indonesia-high-speed-rail-project-a-financial-time-bomb-official-says/", date: "2025-08" },
        { title: "Indonesia's Whoosh Feels the Squeeze in 2025", publisher: "The Diplomat", url: "https://thediplomat.com/2026/07/indonesias-whoosh-feels-the-squeeze-in-2025/", date: "2026-07" },
        { title: "Indonesia breaks ground on $5.9 bn CATL-backed battery venture", publisher: "Nikkei Asia", url: "https://asia.nikkei.com/business/automobiles/electric-vehicles/indonesia-breaks-ground-on-5.9-bn-catl-backed-battery-venture", date: "2025-06-29" },
        { title: "BYD inaugurates new car factory in Indonesia", publisher: "electrive", url: "https://www.electrive.com/2026/09/08/byd-inaugurates-new-car-factory-in-indonesia/", date: "2026-09-08" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "id_cn-3", kind: "relation", asOf: "2026-09-30",
      title: "The sea off Natuna",
      dek: "China's 'nine-dash line' reaches into waters Indonesia claims off the Natuna Islands. In 2024 President Prabowo signed a statement that seemed to accept 'overlapping claims', to uproar at home.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id_cn/id_cn-3-hero.webp",
          alt: "Illustration of a grey coastguard ship shadowing a fishing boat on a blue sea near green islands.",
          caption: "Indonesian and Chinese coastguard ships have faced off off the Natuna Islands.",
          credit: "AI illustration — not a photograph",
          prompt: "A grey coastguard patrol ship shadowing a large fishing trawler on a deep blue tropical sea, small green islands with white beaches in the distance, bright sunlight and scattered clouds, tense documentary mood, no flags, no markings, no legible text." },
        { type: "timeline", head: "A disputed sea", items: [
          ["2016", "Jokowi holds a cabinet meeting on a warship off Natuna"],
          ["Jul 2017", "Indonesia renames the area the North Natuna Sea"],
          ["Dec 2019–Jan 2020", "Chinese fishing fleets and coastguard stand-off"],
          ["9 Nov 2024", "Prabowo–Xi statement on 'overlapping claims'"],
          ["Jan 2025", "Indonesia joins BRICS"],
          ["Aug 2026", "China–Indonesia '2+2' security dialogue"]
        ] },
        { type: "section", head: "Where the line reaches", md:
          "Indonesia does not claim any of the disputed islands in the South China Sea, and long insisted it was not a party to the dispute. But the southern tip of China's 'nine-dash line' cuts into Indonesia's exclusive economic zone north of the Natuna Islands, rich in fish and gas. An international tribunal ruled in 2016, in a case brought by the Philippines, that the line had no legal basis. Chinese fishing boats, escorted by coastguard ships, have repeatedly fished in the area. In 2016 President Joko Widodo held a cabinet meeting aboard a warship off Natuna, and in 2017 Indonesia renamed the waters the North Natuna Sea." },
        { type: "section", head: "Prabowo's statement", md:
          "President Prabowo Subianto (see [[lesson:id-5]]) chose Beijing for his first foreign trip after taking office. On 9 November 2024 he and Xi Jinping issued a joint statement saying they had reached 'important common understanding on joint development in areas of overlapping claims'. It was the first time Indonesia appeared to accept that such overlapping claims existed, and the Chinese text made clear they included the North Natuna Sea. Indonesian MPs and experts were alarmed. The foreign ministry then said the deal 'cannot be interpreted as an acknowledgment' of the nine-dash line and did not affect Indonesia's sovereign rights." },
        { type: "section", head: "Friendly, but hedging", md:
          "Prabowo pursues warm ties with Beijing: Indonesia joined the BRICS group in January 2025, and the two countries hold '2+2' meetings of foreign and defence ministers, most recently in August 2026. But Indonesia also buys French Rafale jets, trains with the United States and Australia (see [[lesson:id_au-3]]), and says its non-aligned policy means friendship with all. Prabowo, a former general, says he will defend every inch of Indonesian territory. No joint development zone has actually been set up." },
        { type: "section", head: "Sinking the boats", md:
          "Indonesia has sometimes pushed back hard. From 2014 to 2019 Fisheries Minister Susi Pudjiastuti had hundreds of foreign boats caught fishing illegally blown up or sunk, mostly Vietnamese but including a Chinese one, a policy that was hugely popular at home. In 2016 Indonesian navy ships fired warning shots at Chinese fishing boats off Natuna. Since then Indonesia has expanded its military base on the islands and sends coastguard patrols when Chinese ships appear." },
        { type: "compare", head: "What was Prabowo doing?",
          left: { head: "Pragmatism", md:
            "Joint development could avoid clashes and bring investment, without giving up any sovereignty." },
          right: { head: "A slip", md:
            "Accepting 'overlapping claims' handed China a legal foothold that Indonesia had denied for decades." } },
        { type: "section", head: "Why it matters", md:
          "Indonesia is the largest country in Southeast Asia. If it softens its stance on the nine-dash line, it weakens the region's position against China's claims." }
      ],
      takeaways: [
        "China's nine-dash line reaches into Indonesia's waters north of the Natuna Islands.",
        "Prabowo's November 2024 statement with Xi referred to 'overlapping claims', causing an uproar at home.",
        "Indonesia joined BRICS but also hedges with ties to the US, Australia and France."
      ],
      check: { q: "Why did the November 2024 Prabowo–Xi statement cause controversy?",
        choices: ["It gave China the Natuna Islands", "It referred to 'overlapping claims', which Indonesia had long denied", "It ended trade with China"], answer: 1,
        explain: "The foreign ministry later said it did not recognise the nine-dash line." },
      sources: [
        { title: "Did Prabowo just yield to China in the North Natuna Sea?", publisher: "Asia Times", url: "https://asiatimes.com/2024/11/did-prabowo-just-yield-to-china-in-the-north-natuna-sea/", date: "2024-11" },
        { title: "Indonesian President Vows to Defend Sovereignty in South China Sea", publisher: "The Diplomat", url: "https://thediplomat.com/2024/11/indonesian-president-vows-to-defend-sovereignty-in-south-china-sea/", date: "2024-11" },
        { title: "Prabowo's flawed logic on the Natuna joint development proposal", publisher: "East Asia Forum", url: "https://eastasiaforum.org/2025/05/31/prabowos-flawed-logic-on-the-natuna-joint-development-proposal/", date: "2025-05-31" },
        { title: "What the Latest '2+2' Dialogue Tells Us About China-Indonesia Relations", publisher: "The Diplomat", url: "https://thediplomat.com/2026/08/what-the-latest-22-dialogue-tells-us-about-china-indonesia-relations/", date: "2026-08" }
      ]
    }
  ]
});
