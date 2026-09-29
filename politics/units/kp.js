/* ============================================================
   Unit 19 — North Korea 🇰🇵
   Research note and sources: tools/research/kp.md
   Current as of 29 Sep 2026.
   Information from inside North Korea is scarce; figures here are
   estimates by governments and researchers and are attributed.
   ============================================================ */
window.POLITICS.addUnit("kp", {
  id: "kp",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "kp-1", kind: "snapshot", asOf: "2026-09-29",
      title: "North Korea in brief",
      dek: "The world's most closed country: a hereditary dictatorship with nuclear weapons, whose soldiers now fight for Russia.",
      blocks: [
        { type: "map", src: "maps/kp.svg",
          alt: "Locator map of north-east Asia with North Korea highlighted on the northern half of the Korean Peninsula, bordering China and a short stretch of Russia to the north and South Korea to the south, with a small globe showing its place in the world.",
          caption: "North Korea borders China along the Yalu and Tumen rivers, has a short border with Russia, and faces South Korea across the Demilitarised Zone.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Pyongyang"],
          ["People", "About 26 million"],
          ["System", "One-party totalitarian state ruled by the Kim family"],
          ["Leader", "Kim Jong Un, since December 2011"],
          ["Nuclear tests", "Six, from 2006 to 2017"],
          ["Main allies", "Russia (a 2024 mutual-defence treaty) and China"],
          ["Information", "Almost none independent; figures are outside estimates"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "North Korea is one of the world's poorest countries, but it has built nuclear weapons and missiles that can, by most expert assessments, reach [[unit:us|the United States]]. It is still technically at war with [[unit:kr|South Korea]], and its capital is within artillery range of Seoul's millions.\n\n" +
          "Since 2024 it has also become a combatant in Europe's biggest war. North Korean soldiers have fought for [[unit:ru|Russia]] against [[unit:ua|Ukraine]], and its factories have shipped millions of artillery shells and dozens of missiles. In return, Pyongyang has gained money, food, oil, combat experience and, many governments fear, military technology." },
        { type: "section", head: "Who holds power", md:
          "Kim Jong Un, the third leader of a dynasty founded by his grandfather Kim Il Sung in 1948, holds absolute power as head of the Workers' Party, the state and the armed forces. There are no free elections, no independent media, no free movement and no legal opposition. Hundreds of thousands of people are believed to have passed through political prison camps, according to the UN and rights groups." },
        { type: "section", head: "The mood in 2026", md:
          "Pyongyang is more confident than it has been in decades. The partnership with Moscow has broken its isolation and eased the pinch of UN sanctions. Kim stood beside Xi Jinping and Vladimir Putin at a military parade in Beijing in September 2025. At a Party Congress in February 2026 he declared the country a permanent nuclear state and formally abandoned the goal of reunification with the South." },
        { type: "section", head: "An economy apart", md:
          "North Korea's economy is tiny, perhaps a fiftieth the size of South Korea's, and heavily controlled. Most official trade is with China. The state also earns money through arms sales, overseas workers and, according to the UN and US officials, cyber theft: its hackers have stolen billions of dollars in cryptocurrency, including about $1.5 billion from the exchange Bybit in 2025." },
        { type: "section", head: "What North Korea wants", md:
          "Kim's regime wants, above all, to survive. It sees nuclear weapons as the guarantee: it will not give them up, and it wants the world to accept it as a nuclear power. It also wants sanctions eased, the US–South Korean alliance weakened, and the economic benefits of its new friendships with Russia and China." },
        { type: "callout", tone: "why", md:
          "North Korea shows how a small, poor dictatorship can defy the world's great powers for decades, and how the war in Ukraine has knitted together a bloc of authoritarian states, from Moscow and Beijing to Pyongyang and Tehran." }
      ],
      takeaways: [
        "North Korea is a hereditary dictatorship led by Kim Jong Un, with nuclear weapons and long-range missiles.",
        "Its troops and shells support Russia's war in Ukraine, in exchange for money, food and technology.",
        "In February 2026 it declared itself a permanent nuclear state and abandoned reunification."
      ],
      check: { q: "Which country signed a mutual-defence treaty with North Korea in 2024?",
        choices: ["China", "Russia", "Iran"], answer: 1,
        explain: "Kim Jong Un and Vladimir Putin signed a Comprehensive Strategic Partnership treaty with a mutual-defence clause in June 2024." },
      sources: [
        { title: "Russia-North Korea Relations", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/IF12760", date: "2026" },
        { title: "North Korea Codifies Nuclear Statehood and Hostile 'Two-State' Relations at 9th Party Congress", publisher: "The Diplomat", url: "https://thediplomat.com/2026/02/north-korea-codifies-nuclear-statehood-and-hostile-two-state-relations-at-9th-party-congress/", date: "2026-02" },
        { title: "North Korea's military partnership with Russia has consequences far beyond Ukraine", publisher: "Chatham House", url: "https://www.chathamhouse.org/2026/09/north-koreas-military-partnership-russia-has-consequences-far-beyond-ukraine", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "kp-2", kind: "power", asOf: "2026-09-29",
      title: "The Kim dynasty and the Party",
      dek: "A state built around one family, where the Party decides, the army enforces and the security services watch everyone.",
      blocks: [
        { type: "diagram", src: "img/kp/kp-2-power.svg",
          alt: "Diagram of power in North Korea. The leader, Kim Jong Un, the third of the Kim dynasty, has ruled since 2011. The Workers' Party of Korea is the only party; its general secretary is Kim, and a congress every five years sets the line. It commands the Korean People's Army, about 1.3 million strong, whose nuclear forces answer to Kim and whose troops have been sent to fight for Russia. The State Affairs Commission, chaired by Kim as president, runs the state, and the cabinet runs the economy. Security services watch every citizen and run political prison camps. The Supreme People's Assembly is a rubber-stamp parliament with single-candidate elections.",
          caption: "Every institution in North Korea answers to Kim Jong Un.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The leader", md:
          "Kim Jong Un is general secretary of the Workers' Party of Korea, president of the State Affairs Commission, and supreme commander of the armed forces. His grandfather Kim Il Sung is the 'eternal president', and portraits of both previous leaders hang in every home and office. Loyalty to the Kim family is the central principle of the state's ideology, alongside *Juche*, or self-reliance." },
        { type: "section", head: "The Party", md:
          "The Workers' Party of Korea runs the country. Its Congress, which Kim revived and now holds every five years, sets policy and elects the Central Committee; a small Presidium of the Politburo makes the key decisions. At the February 2026 Congress, 161 of the 250 Central Committee members were replaced, a sweeping generational change that tightened Kim's control." },
        { type: "section", head: "Army and security", md:
          "The Korean People's Army, with an estimated 1.3 million active troops, is one of the world's largest in proportion to population. Men serve for around a decade, and women for several years. Under Kim's father, the army came first in all things; Kim Jong Un has restored the Party's supremacy over it. The Ministry of State Security runs the political prison camps and, with the police and neighbourhood informants, monitors daily life." },
        { type: "section", head: "Class and control", md:
          "North Koreans are classified by the state according to their families' political loyalty, a system called *songbun* that shapes where they can live, study and work. Pyongyang is reserved for the most trusted. Listening to foreign broadcasts, or watching South Korean dramas smuggled in on USB sticks, can bring long prison sentences, and in some cases, according to defectors and rights groups, execution." },
        { type: "section", head: "Elections without choice", md:
          "The Supreme People's Assembly, the parliament, meets briefly once or twice a year to approve decisions. Elections to it offer a single approved candidate per seat, and official results usually show near-total turnout and approval. Voting is compulsory in practice, and a vote against the candidate is a dangerous act that would be noticed by the officials watching the ballot box." },
        { type: "section", head: "Ideology", md:
          "The state teaches that the Kim family saved Korea from Japanese colonisers and American aggressors. *Juche* stresses self-reliance; *Songun*, 'military first', was Kim Jong Il's creed; Kim Jong Un's era has added 'people first' slogans alongside nuclear power. Children learn the leaders' biographies from kindergarten, and adults attend regular 'self-criticism' sessions at work." },
        { type: "compare", head: "Two views of the regime",
          left: { head: "Pyongyang's account", md:
            "A united socialist nation led by a wise leader, defending its sovereignty against the United States and its puppets with nuclear deterrence." },
          right: { head: "The UN and rights groups", md:
            "A state whose crimes against humanity, from prison camps to executions and forced starvation, have no parallel in the modern world, as a UN inquiry concluded in 2014." } }
      ],
      takeaways: [
        "Kim Jong Un leads the Party, the state and the army; loyalty to the Kim family is the core of state ideology.",
        "The Party Congress, now held every five years, sets policy; the February 2026 Congress replaced most of the Central Committee.",
        "Security services, a caste-like loyalty system and harsh punishments keep control over the population."
      ],
      check: { q: "What is 'songbun' in North Korea?",
        choices: ["The state's classification of families by political loyalty", "A missile programme", "The national anthem"], answer: 0,
        explain: "Songbun classifies citizens by their families' loyalty to the regime, shaping where they can live, study and work." },
      sources: [
        { title: "Report of the Commission of Inquiry on Human Rights in the DPRK", publisher: "UN Human Rights Council", url: "https://www.ohchr.org/en/hr-bodies/hrc/co-idprk/reportofthe-commission-of-inquiry-dprk", date: "2014" },
        { title: "9th Congress of the Workers' Party of Korea", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/9th_Congress_of_the_Workers%27_Party_of_Korea", date: "2026" },
        { title: "North Korea profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-pacific-15256929", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "kp-3", kind: "history", asOf: "2026-09-29",
      title: "Three Kims and the bomb",
      dek: "A Soviet-installed leader, a devastating war, a famine, and a nuclear programme that became the regime's guarantee.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kp/kp-3-hero.webp",
          alt: "Illustration of a vast stadium seen from high above at night, filled with thousands of performers holding coloured cards to form a giant abstract mosaic.",
          caption: "Mass games, with tens of thousands of performers, are a signature of North Korean state spectacle.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast oval stadium seen from high above at night, tens of thousands of tiny performers on the field and stands holding coloured cards to form a giant abstract geometric mosaic, torches around the rim, dramatic floodlights, overwhelming scale, no legible text, no faces." },
        { type: "timeline", head: "The short version", items: [
          ["1948", "Kim Il Sung founds the Democratic People's Republic of Korea"],
          ["1950–53", "The Korean War"],
          ["1994", "Kim Il Sung dies; Kim Jong Il succeeds"],
          ["1994–98", "Famine kills hundreds of thousands or more"],
          ["2006", "First nuclear test"],
          ["2011", "Kim Jong Un takes power"],
          ["2017", "Sixth nuclear test; first ICBM launches"]
        ] },
        { type: "section", head: "1. Kim Il Sung", md:
          "After Japan's defeat in 1945, the Soviet Union installed Kim Il Sung, a former anti-Japanese guerrilla, in the North. In 1950, with Stalin's approval, he invaded the South, starting the Korean War; Chinese troops later saved his regime from defeat. After the 1953 armistice he purged rivals, built a personality cult and a planned economy that for a time outperformed the South's." },
        { type: "section", head: "2. Kim Jong Il and the famine", md:
          "When Kim Il Sung died in 1994, his son Kim Jong Il inherited power, the first communist hereditary succession. The collapse of the Soviet Union had ended subsidised oil and food, and floods destroyed harvests. The famine of the mid-1990s, which the regime calls the 'Arduous March', killed somewhere between several hundred thousand and more than two million people, according to different estimates. Informal markets spread as the state food system collapsed, and they have never gone away." },
        { type: "section", head: "3. The bomb", md:
          "North Korea pursued nuclear weapons for decades. A 1994 deal with the United States froze its plutonium programme for a time, and talks in the 2000s involving China, Russia, Japan and the two Koreas produced agreements that collapsed. In October 2006 it carried out its first nuclear test. Five more followed, the last and largest in September 2017, which it said was a hydrogen bomb." },
        { type: "section", head: "4. Kim Jong Un", md:
          "Kim Jong Un, in his late twenties, took over when his father died in December 2011. He consolidated power ruthlessly, executing his uncle Jang Song Thaek in 2013; his half-brother Kim Jong Nam was killed with a nerve agent in Malaysia in 2017. He accelerated missile development, testing ICBMs able to reach the United States in 2017, then met Donald Trump in Singapore in 2018, in Hanoi in 2019 and at the border. The talks broke down over sanctions and denuclearisation." },
        { type: "section", head: "5. Closing the door (2020–2024)", md:
          "During the COVID-19 pandemic North Korea sealed its borders almost completely, even from China, deepening shortages. In 2023 it wrote its nuclear policy into the constitution. In 2024 Kim declared South Korea a separate, hostile state, dismantled the agencies that dealt with unification, and blew up road and rail links across the border. Kim said reunification with a country he called the 'principal enemy' was no longer possible, reversing decades of official policy on both sides of the border." }
      ],
      takeaways: [
        "Kim Il Sung founded North Korea in 1948 and started the Korean War in 1950.",
        "Under Kim Jong Il, a famine in the 1990s killed hundreds of thousands or more; the first nuclear test came in 2006.",
        "Kim Jong Un, in power since 2011, tested ICBMs, met Trump three times, and in 2024 declared the South a hostile state."
      ],
      check: { q: "When did North Korea carry out its first nuclear test?",
        choices: ["1994", "2006", "2017"], answer: 1,
        explain: "The first test was in October 2006; the sixth and largest was in September 2017." },
      sources: [
        { title: "North Korea profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-pacific-15258068", date: "n.d." },
        { title: "North Korea", publisher: "Britannica", url: "https://www.britannica.com/place/North-Korea", date: "n.d." },
        { title: "Previewing North Korea's Grand Strategy for 2026", publisher: "The Diplomat", url: "https://thediplomat.com/2025/12/previewing-north-koreas-grand-strategy-for-2026/", date: "2025-12" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "kp-4", kind: "players", asOf: "2026-09-29",
      title: "Kim and the few around him",
      dek: "A leader, his sister, a daughter who may be his heir, and the diplomat who handles Moscow and Washington.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kp/kp-4-hero.webp",
          alt: "Illustration of an empty grand boulevard in Pyongyang at dawn with monumental buildings and a tall tower with a flame-shaped top.",
          caption: "Pyongyang, the showcase capital where the elite live.",
          credit: "AI illustration — not a photograph",
          prompt: "An empty grand boulevard in a monumental socialist capital at dawn, pastel apartment towers, a tall stone tower topped with a red flame sculpture beside a river, almost no cars, pale mist, eerie order and silence, no people close up, no legible text." },
        { type: "people", head: "Five to know", items: [
          { name: "Kim Jong Un", role: "General Secretary and President of State Affairs, since 2011",
            img: "img/kp/portrait-kim-jong-un.webp", source: "Kremlin.ru photo (CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "Educated partly in Switzerland; took power at about 27. Has built the nuclear arsenal, met Donald Trump three times in 2018–19, and made Russia his closest partner." },
          { name: "Kim Yo Jong", role: "Senior Party official; Kim's sister",
            img: "img/kp/portrait-kim-yo-jong.webp", source: "Official or CC-licensed photo via Wikimedia Commons; confirm the licence.",
            md: "Her brother's closest aide and the regime's sharpest voice toward Seoul and Washington, issuing statements that often signal policy." },
          { name: "Kim Ju Ae", role: "Kim's daughter",
            img: "img/kp/portrait-kim-ju-ae.webp", source: "Do not use; she is a minor. Use initials.",
            md: "Name reported by South Korean intelligence, which in 2026 assessed her as the designated successor. She appears at missile launches and parades, but has been given no title." },
          { name: "Choe Son Hui", role: "Foreign minister, since 2022",
            img: "img/kp/portrait-choe.webp", source: "Kremlin.ru photo (CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "The first woman in the job and a veteran of nuclear talks with the US, now central to the relationship with Russia." },
          { name: "The generals", role: "Korean People's Army",
            img: "img/kp/portrait-kpa.webp", source: "Use an abstract emblem or initials; not a person.",
            md: "Kim regularly rotates his top commanders. Those who led the troops in Russia have been publicly honoured." }
        ] },
        { type: "section", head: "How decisions are made", md:
          "Very little is known about how decisions are made inside the regime. Outsiders read the order in which officials stand at events, the size of their photographs in state media and who accompanies Kim on inspections. Officials can rise and vanish suddenly; some reappear after 're-education', others never do." },
        { type: "section", head: "The succession question", md:
          "Kim Jong Un's health is a constant subject of speculation abroad: he is overweight and a heavy smoker, and his father and grandfather both died of heart problems. Since 2022 he has repeatedly appeared with a daughter, believed to be around 13, at missile tests, parades and even the Beijing parade in 2025. South Korea's intelligence service now calls her the designated successor, though the regime has not said so, and a woman has never led the country." },
        { type: "section", head: "Pak Jong Chon and the Party secretaries", md:
          "Below the family, a handful of senior Party secretaries and military chiefs, such as the veteran marshal Pak Jong Chon, oversee the army, the munitions industry and the economy. They owe their positions entirely to Kim, and several have been demoted and later restored, a pattern that keeps everyone insecure, dependent and loyal to the leader alone, rather than to any faction or institution." },
        { type: "section", head: "Who else might matter", md:
          "If Kim died suddenly, power would probably pass through a small group: his sister, top Party secretaries and senior generals. Analysts disagree on whether the system would hold. Most believe the elite would close ranks around a Kim family member, because their own survival depends on the regime's." },
        { type: "section", head: "Life for ordinary people", md:
          "Most North Koreans live very differently from the elite in Pyongyang. Food shortages are common in the countryside, electricity is unreliable, and many people depend on informal markets to survive. Defectors describe a society where survival depends on bribes, connections and staying silent." }
      ],
      takeaways: [
        "Kim Jong Un rules with a tiny inner circle that includes his sister, Kim Yo Jong.",
        "South Korean intelligence believes his daughter, Kim Ju Ae, is his designated successor.",
        "Ordinary North Koreans face shortages and rely on informal markets, far from Pyongyang's privileges."
      ],
      check: { q: "Who is North Korea's foreign minister?",
        choices: ["Kim Yo Jong", "Choe Son Hui", "Kim Ju Ae"], answer: 1,
        explain: "Choe Son Hui, a veteran nuclear negotiator, has been foreign minister since 2022, the first woman in the job." },
      sources: [
        { title: "Kim Ju-ae Emerges As North Korea Successor", publisher: "Grand Pinnacle Tribune", url: "https://evrimagaci.org/gpt/kim-juae-emerges-as-north-korea-successor-528552", date: "2026" },
        { title: "6 Takeaways From North Korea's 9th Party Congress", publisher: "The Diplomat", url: "https://thediplomat.com/2026/02/6-takeaways-from-north-koreas-9th-party-congress/", date: "2026-02" },
        { title: "North Korea's Ninth Party Congress: Key Outcomes and Analysis", publisher: "Daily NK", url: "https://www.dailynk.com/english/north-korea-ninth-party-congress/", date: "2026-02" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "kp-5", kind: "story", asOf: "2026-09-29",
      title: "Soldiers for Moscow",
      dek: "North Korea has sent thousands of troops and millions of shells to Russia's war. What it gets back could change the balance in Asia.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kp/kp-5-hero.webp",
          alt: "Illustration of a long freight train crossing a steel bridge over a frozen river in snow, with its wagons covered in tarpaulins.",
          caption: "Trains across the short Russia–North Korea border carry arms one way and supplies the other.",
          credit: "AI illustration — not a photograph",
          prompt: "A long freight train of covered wagons crossing a steel girder bridge over a frozen river in heavy snow, bare hills on both banks, grey winter light, secretive and cold, no flags or legible text." },
        { type: "section", head: "What happened", md:
          "In June 2024 Kim Jong Un and Vladimir Putin signed a treaty pledging mutual military aid. From October 2024 North Korean soldiers were deployed to Russia's Kursk region, where Ukraine had launched an incursion. South Korean and Western estimates put the total sent at 14,000 to 15,000 troops, of whom about 6,000 were killed or wounded. After months of silence, Pyongyang acknowledged the deployment in April 2025, and in 2026 Kim publicly honoured the soldiers of its 'overseas military operations'.\n\n" +
          "North Korea has also supplied Russia with millions of artillery shells, ballistic missiles and rocket launchers. In 2026 Ukraine reported North Korean drone operators and warned that more troops were being prepared." },
        { type: "facts", head: "By the estimates", rows: [
          ["Troops sent", "About 14,000–15,000 (South Korean and Western estimates)"],
          ["Killed or wounded", "About 6,000"],
          ["Weapons", "Millions of shells; KN-23 and KN-24 missiles; rocket launchers"],
          ["Treaty", "Mutual-defence pact signed June 2024"]
        ] },
        { type: "section", head: "What Pyongyang gets", md:
          "In return, according to US, South Korean and Ukrainian officials, North Korea has received oil, food, hard currency and help with military technology. Governments suspect Russian assistance with satellites, air defence, drones and possibly nuclear-powered submarines. Just as valuable is experience: North Korean soldiers and engineers have learned modern drone warfare, and its missiles have been tested in real combat." },
        { type: "section", head: "Why it happened", md:
          "Russia needed soldiers and shells for a long war; North Korea had both, and needed a powerful protector that would shield it from sanctions. Russia has since vetoed the renewal of the UN panel that monitored sanctions on North Korea, and the two countries have opened new trade and tourist links." },
        { type: "section", head: "The human cost", md:
          "Ukrainian officials say many North Korean soldiers fought in waves across open ground and were ordered to avoid capture; a few who were captured have asked not to be sent home. Defectors say families in the North were told little or nothing about where their sons had gone." },
        { type: "compare", head: "Two views of the alliance",
          left: { head: "Moscow and Pyongyang", md:
            "Two sovereign states are helping each other against Western pressure, as their treaty allows." },
          right: { head: "Seoul, Kyiv and the West", md:
            "North Korea's involvement broke UN sanctions, prolonged Russia's war, and is giving Pyongyang technology that makes it more dangerous to its neighbours." } },
        { type: "section", head: "A shift for Seoul", md:
          "For South Korea, the deployment is doubly alarming: North Korean soldiers gained combat experience its own army lacks, and Russian help could close technology gaps that have long given Seoul and Washington an edge. It has also complicated South Korea's relations with Russia, a country it once hoped to keep neutral." },
        { type: "section", head: "What's next", md:
          "On 28 September 2026 Ukraine's President Zelensky said North Korea was preparing to send about 10,000 more troops. Watch for further deployments, any sign of Russian help with North Korean submarines or satellites, and what happens to the partnership if the war in Ukraine ends." }
      ],
      takeaways: [
        "About 14,000–15,000 North Korean troops have been sent to Russia since 2024, according to South Korean and Western estimates.",
        "Pyongyang has also supplied millions of shells and ballistic missiles.",
        "In return it gets money, fuel, food, combat experience and, governments fear, military technology."
      ],
      check: { q: "Where did North Korean troops first fight for Russia?",
        choices: ["Crimea", "Russia's Kursk region", "Belarus"], answer: 1,
        explain: "They were deployed from late 2024 to Russia's Kursk region, where Ukraine had launched an incursion." },
      sources: [
        { title: "North Korea's battlefield dividend", publisher: "Lowy Institute", url: "https://www.lowyinstitute.org/the-interpreter/north-korea-s-battlefield-dividend", date: "2026" },
        { title: "Ukraine's Zelenskiy Says North Korea Prepares to Deploy Another 10,000 Troops to Russia", publisher: "US News / Reuters", url: "https://www.usnews.com/news/world/articles/2026-09-28/ukraines-zelenskiy-says-north-korea-prepares-to-deploy-another-10-000-troops-to-russia", date: "2026-09-28" },
        { title: "North Korea boosts support for Russia to include drone operators, Ukraine says", publisher: "CNN", url: "https://www.cnn.com/2026/08/21/europe/russia-north-korea-ukraine-drones-intl", date: "2026-08-21" },
        { title: "Kim Jong Un Publicly Honours North Korea Troops in 'Overseas Military Operations'", publisher: "Eastern Herald", url: "https://easternherald.com/2026/09/10/kim-jong-un-dprk-troops-russia-overseas-operations/", date: "2026-09-10" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "kp-6", kind: "story", asOf: "2026-09-29",
      title: "The Beijing parade",
      dek: "In September 2025 Kim Jong Un stood beside Xi Jinping and Vladimir Putin, a picture that ended years of isolation.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kp/kp-6-hero.webp",
          alt: "Illustration of a vast square in Beijing during a military parade, with ranks of soldiers, rows of missiles on trucks and a large reviewing stand in the distance.",
          caption: "China's September 2025 parade marked 80 years since the end of the Second World War.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast city square during a military parade seen from high above, ranks of soldiers marching in perfect formation, rows of missiles on trucks, a long red reviewing stand far away, aircraft in formation overhead, grandiose and ordered, no faces, no legible text or flags." },
        { type: "section", head: "What happened", md:
          "On 3 September 2025, [[unit:cn|China]] held a huge military parade in Beijing to mark 80 years since Japan's defeat. On the reviewing stand, Xi Jinping stood between Vladimir Putin and Kim Jong Un. It was Kim's first appearance at a major multilateral event and the first time the leaders of the three countries had appeared together. He travelled by armoured train, and brought his daughter.\n\n" +
          "Weeks later, at Pyongyang's own parade for the Party's 80th anniversary in October 2025, North Korea displayed a new intercontinental missile, the Hwasong-20, with senior Chinese and Russian guests in attendance." },
        { type: "section", head: "Why it matters", md:
          "For years China had kept Kim at a distance, supporting UN sanctions and frustrated by his nuclear tests. The parade signalled that Beijing now accepts him as part of a group of countries opposed to the US-led order. Western commentators called it an 'axis of upheaval'. For Kim, it meant the two most powerful countries he borders were treating him as a partner, not a problem." },
        { type: "compare", head: "Two views of the parade",
          left: { head: "Beijing's framing", md:
            "A commemoration of the victory over fascism, attended by friendly nations, not an alliance against anyone." },
          right: { head: "Critics' framing", md:
            "A show of solidarity among autocracies waging or enabling war, which normalised a nuclear-armed dictator who is arming Russia." } },
        { type: "section", head: "China's calculation", md:
          "China remains North Korea's economic lifeline, accounting for almost all its official trade. Beijing does not want a nuclear crisis on its border, but it wants even less a collapse that could bring US-allied forces up to the Yalu river. Warming ties with Kim also keep him from depending solely on Moscow." },
        { type: "section", head: "Kim abroad", md:
          "Before 2018 Kim had never met a foreign head of state. Since then he has met Xi several times, Putin in Vladivostok, at the Vostochny spaceport and in Pyongyang, and Trump three times. The Beijing trip showed a leader far more comfortable on the world stage than his reclusive father ever was." },
        { type: "section", head: "Sanctions", md:
          "UN sanctions on North Korea, imposed between 2006 and 2017, still formally ban most of its exports and limit its oil imports. But with Russia openly trading with Pyongyang and China enforcing the rules loosely, the sanctions have lost much of their bite. In 2024 Russia vetoed the renewal of the UN panel of experts that monitored them." },
        { type: "section", head: "The wider bloc", md:
          "The parade crowned a period in which Russia, China, Iran and North Korea have drawn closer: arming each other, trading around sanctions and coordinating at the UN. They are not a formal alliance, and they have different interests, but together they pose a challenge to the US-led system that has shaped Asia since 1945." },
        { type: "section", head: "What's next", md:
          "Watch for a Kim visit to Beijing or Moscow, new Chinese investment, and whether Beijing tries to restrain another nuclear test." }
      ],
      takeaways: [
        "Kim stood beside Xi and Putin at China's military parade on 3 September 2025.",
        "It signalled China's acceptance of North Korea as part of an anti-Western grouping.",
        "UN sanctions remain on paper, but Russia and China enforce them loosely or not at all."
      ],
      check: { q: "What did China's September 2025 parade commemorate?",
        choices: ["The founding of the People's Republic", "80 years since the end of the Second World War", "Kim Jong Un's birthday"], answer: 1,
        explain: "The parade marked 80 years since Japan's defeat in 1945; Kim, Xi and Putin appeared together on the reviewing stand." },
      sources: [
        { title: "APEC 2025, China–North Korea relations and more", publisher: "Brookings", url: "https://connect.brookings.edu/apec-2025-china-north-korea-relations-and-more", date: "2025" },
        { title: "Russia-North Korea Relations", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/IF12760", date: "2026" },
        { title: "All the Way With Moscow? Pyongyang's Strategic Calculations in Support of Russia's War", publisher: "38 North", url: "https://www.38north.org/2026/08/all-the-way-with-moscow-pyongyangs-strategic-calculations-in-support-of-russias-war/", date: "2026-08" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "kp-7", kind: "story", asOf: "2026-09-29",
      title: "The 9th Party Congress",
      dek: "In February 2026 Kim set the course for five years: a permanent nuclear state, a hostile South, and a new generation of officials.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kp/kp-7-hero.webp",
          alt: "Illustration of a huge congress hall with thousands of delegates in identical rows facing a stage with a massive red backdrop.",
          caption: "Party Congresses are held in Pyongyang's vast April 25 House of Culture.",
          credit: "AI illustration — not a photograph",
          prompt: "A huge congress hall with thousands of delegates in identical dark rows seen from the back, facing a distant stage with a massive red curtain backdrop and a long table, bright uniform lighting, overwhelming conformity, no legible text or faces." },
        { type: "section", head: "What happened", md:
          "The Workers' Party's 9th Congress met in Pyongyang in February 2026 and closed on 25 February. It adopted a new five-year economic plan, confirmed North Korea's status as a permanent nuclear power, and wrote the 'two hostile states' doctrine toward South Korea into the Party's line, abandoning the goal of peaceful reunification that both Koreas had formally held since 1948. It replaced 161 of the 250 members of the Central Committee." },
        { type: "facts", head: "The Congress in brief", rows: [
          ["Closed", "25 February 2026"],
          ["Nuclear status", "Declared permanent and non-negotiable"],
          ["South Korea", "Treated as a separate, hostile foreign state"],
          ["Central Committee", "161 of 250 members replaced"],
          ["Kim Ju Ae", "Appeared only at the closing parade; no title given"]
        ] },
        { type: "section", head: "Why 'two hostile states'", md:
          "For decades, North Korea said it sought reunification, on its own terms. Kim's turn to calling the South a hostile foreign country, begun in 2023–24, has several possible motives, according to analysts: to cut off the pull of South Korea's wealth and culture on his own people, to justify nuclear weapons that could be used against the South, and to remove any ideological reason to negotiate with Seoul." },
        { type: "section", head: "The economy", md:
          "Kim told the Congress that living standards had improved, and pledged to raise them further, with factories in every county under a regional development drive and new tourist sites such as the Wonsan-Kalma beach resort, opened in 2025. Outside analysts note that trade with Russia and China has lifted the economy after the pandemic years, but that it remains tiny and heavily controlled." },
        { type: "section", head: "The new generation", md:
          "The replacement of most of the Central Committee brought younger officials, many trained in technical fields, into senior roles. Analysts see it as Kim building a leadership loyal to him personally, and perhaps preparing for an eventual succession." },
        { type: "compare", head: "Two views of the Congress",
          left: { head: "Pyongyang's view", md:
            "A historic Congress that consolidated victory, secured the nation with nuclear power and opened a new era of prosperity." },
          right: { head: "Outside analysts", md:
            "A formal break with the South and with denuclearisation, shutting the door on diplomacy and locking in confrontation for years." } },
        { type: "section", head: "Watching the pictures", md:
          "Much of what outsiders know about the Congress comes from state media: who sat where, which slogans were repeated, and which officials disappeared from the front rows. Analysts noted that images of Kim's daughter were limited to the parade, a sign that her status is still being carefully managed." },
        { type: "section", head: "Seoul's reaction", md:
          "South Korea's government said it would keep offering dialogue and would not respond to hostility with hostility, but that it would strengthen deterrence. For many older South Koreans, the formal end of the reunification goal was a painful moment." },
        { type: "section", head: "What's next", md:
          "The Congress sets the direction until the next one, around 2031. Watch whether Kim Ju Ae receives a formal title, whether North Korea conducts a seventh nuclear test, and whether the 'two states' line is written into the constitution." }
      ],
      takeaways: [
        "The 9th Party Congress, closing on 25 February 2026, confirmed a permanent nuclear state.",
        "It wrote the 'two hostile states' line into the Party's policy, abandoning reunification.",
        "A sweeping reshuffle replaced 161 of the 250 Central Committee members."
      ],
      check: { q: "What did North Korea abandon at the 9th Party Congress?",
        choices: ["Its nuclear weapons", "The goal of reunification with the South", "Its alliance with Russia"], answer: 1,
        explain: "The Congress wrote the 'two hostile states' doctrine into Party policy, abandoning the long-held goal of reunification." },
      sources: [
        { title: "North Korea Codifies Nuclear Statehood and Hostile 'Two-State' Relations at 9th Party Congress", publisher: "The Diplomat", url: "https://thediplomat.com/2026/02/north-korea-codifies-nuclear-statehood-and-hostile-two-state-relations-at-9th-party-congress/", date: "2026-02" },
        { title: "What the Ninth Party Congress Tells Us About Where North Korea Is Headed", publisher: "Korea Economic Institute of America", url: "https://keia.org/analysis/what-the-ninth-party-congress-tells-us-about-where-north-korea-is-headed/", date: "2026" },
        { title: "Kim Jong Un opens North Korea's 9th party congress, highlights economic gains", publisher: "France 24", url: "https://www.france24.com/en/asia-pacific/20260219-kim-jong-un-north-korea-9th-party-congress-economic-gains", date: "2026-02-19" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "kp-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "More weapons, more friends, no talks, and a succession question that hangs over everything.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kp/kp-8-hero.webp",
          alt: "Illustration of a large stone arch monument over an empty motorway, with mountains behind and no traffic.",
          caption: "Pyongyang demolished its Arch of Reunification monument in 2024, as Kim abandoned the goal of unification.",
          credit: "AI illustration — not a photograph",
          prompt: "A large empty multi-lane motorway leading into misty mountains, a single abandoned concrete pedestal by the road where a monument once stood, no traffic, overcast sky, desolate and symbolic, no people, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Power:** Kim Jong Un secure; his daughter increasingly visible.\n" +
          "- **Weapons:** a growing arsenal of nuclear warheads and missiles, including the new Hwasong-20 ICBM.\n" +
          "- **Russia:** troops, shells and missiles for Moscow; aid and technology in return.\n" +
          "- **China:** relations warmer than in years.\n" +
          "- **Diplomacy:** no talks with Seoul; Pyongyang says it will talk to Washington only if denuclearisation is off the table." },
        { type: "section", head: "Talks with Trump?", md:
          "Trump, who met Kim three times in his first term, has said repeatedly he would like to meet him again. Kim said in September 2025 that he had 'good memories' of Trump and could talk if the United States dropped its demand that North Korea give up its nuclear weapons. No meeting took place during Trump's Asia trip in October 2025. Any new summit would force Washington to choose between its long-standing goal of denuclearisation and a deal that accepts North Korea's arsenal." },
        { type: "section", head: "The arsenal", md:
          "Researchers estimate North Korea has enough material for around 50 nuclear warheads, possibly many more, and is producing more each year. It has tested solid-fuel ICBMs that are harder to detect before launch, tactical nuclear weapons for use on the battlefield, and is working on submarines and satellites. A seventh nuclear test would signal a new stage." },
        { type: "section", head: "Human rights", md:
          "The UN estimates that tens of thousands remain in political prison camps. Since the pandemic, border controls have made escape much harder: only a few hundred defectors reach South Korea each year, compared with thousands a decade ago. Laws passed since 2020 punish the consumption of South Korean culture severely." },
        { type: "section", head: "Japan and the abductees", md:
          "North Korea admitted in 2002 that it had kidnapped Japanese citizens in the 1970s and 1980s. The unresolved fate of some of them remains an emotional issue in [[unit:jp|Japan]], and a condition for any Japanese deal with Pyongyang. Takaichi has said she wants to meet Kim to resolve it, but Pyongyang says the issue is closed. Japan, South Korea and the US hold regular trilateral talks on how to deter and, one day, engage the North." },
        { type: "section", head: "Three scenarios", md:
          "- **Managed standoff.** No talks, occasional missile tests, and a slowly growing arsenal.\n" +
          "- **A Trump–Kim deal.** A summit trades a freeze on testing for sanctions relief, recognising North Korea's arsenal in practice.\n" +
          "- **Crisis.** A nuclear test, a clash along the border or a succession struggle." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **10 October:** the Party's founding anniversary, often marked by parades\n" +
          "- **Ongoing:** new troop deployments to Russia\n" +
          "- **Ongoing:** any seventh nuclear test\n" +
          "- **Any time:** a Trump–Kim meeting" },
        { type: "section", head: "Connections", md:
          "North Korea's story runs through [[unit:ru]] (its new ally), [[unit:cn]] (its lifeline), [[unit:kr]] (the divided peninsula), [[unit:us]] (the adversary it wants to talk to on its own terms), [[unit:jp]] (in missile range), [[unit:ua]] (where its soldiers fought) and [[unit:ir]] (a fellow sanctioned state)." }
      ],
      takeaways: [
        "North Korea's arsenal keeps growing, and it now has powerful backers in Russia and China.",
        "Kim says he could talk to Trump only if denuclearisation is dropped.",
        "The succession and a possible seventh nuclear test are the big unknowns."
      ],
      check: { q: "On what condition has Kim said he could talk to the US?",
        choices: ["If US troops leave Japan", "If the US drops its demand for denuclearisation", "If South Korea joins the talks"], answer: 1,
        explain: "Kim said in September 2025 that he could talk if Washington abandoned its goal of making North Korea give up nuclear weapons." },
      sources: [
        { title: "North Korea's military partnership with Russia has consequences far beyond Ukraine", publisher: "Chatham House", url: "https://www.chathamhouse.org/2026/09/north-koreas-military-partnership-russia-has-consequences-far-beyond-ukraine", date: "2026-09" },
        { title: "Russia Is Helping Supercharge North Korea's Military Drones", publisher: "The Diplomat", url: "https://thediplomat.com/2026/09/russia-is-helping-supercharge-north-koreas-military-drones/", date: "2026-09" },
        { title: "North Korea and Russia Cooperation", publisher: "CSIS Beyond Parallel", url: "https://beyondparallel.csis.org/north-korea-russia-cooperation/", date: "2026" }
      ]
    }
  ]
});
