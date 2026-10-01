/* ============================================================
   Relationship — India & Russia 🇮🇳🇷🇺
   A Cold War friendship of steel mills, MiGs and a 1971
   treaty; the arms bond and its slow decline; and after 2022,
   cheap Russian oil, Trump's penalty tariff, Putin's Delhi
   visit and Indians recruited to fight in Ukraine.
   Tariffs are in in-6.
   Research note and sources: tools/research/in_ru.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("in_ru", {
  id: "in_ru",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "in_ru-1", kind: "relation", asOf: "2026-09-30",
      title: "The Cold War friendship",
      dek: "India was officially non-aligned, but from the 1950s the Soviet Union built its steel mills, sold it jets and, in 1971, signed a treaty that shielded it in war. Many Indians still see Russia as a friend who stood by them.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in_ru/in_ru-1-hero.webp",
          alt: "Illustration of a huge steel plant with blast furnaces and chimneys under a smoky orange sky.",
          caption: "The Soviet Union helped build the Bhilai steel plant in central India in the 1950s.",
          credit: "Illustration — not a photograph",
          prompt: "A huge 1960s steel plant with tall blast furnaces, chimneys and conveyor gantries under a smoky orange evening sky, workers in the distance, a railway line with wagons of ore in front, historical documentary painting style, no flags, no legible text." },
        { type: "timeline", head: "Building a friendship", items: [
          ["1955", "Khrushchev and Bulganin tour India; Soviets agree to build the Bhilai steel plant"],
          ["1962", "India agrees to make MiG-21 fighters under licence"],
          ["Jan 1966", "Soviet mediation at Tashkent ends the 1965 India–Pakistan war"],
          ["9 Aug 1971", "Indo-Soviet Treaty of Peace, Friendship and Cooperation"],
          ["Dec 1971", "Soviet vetoes at the UN shield India in the Bangladesh war"],
          ["1984", "Rakesh Sharma flies to space on a Soviet mission"]
        ] },
        { type: "section", head: "Steel and jets", md:
          "After independence (see [[lesson:in-9]]), Jawaharlal Nehru's India refused to join either Cold War bloc. But the Soviet Union courted it. In 1955 Nikita Khrushchev and Nikolai Bulganin toured India, and Moscow agreed to build a giant steel plant at Bhilai, in central India; Soviet engineers worked there for decades. Moscow also offered weapons on easy terms, which the West would not. From 1962 India built Soviet MiG-21 fighters under licence, beginning a military bond that lasted half a century. The Soviet Union also backed India's claim to Kashmir at the United Nations, using its veto several times." },
        { type: "section", head: "The 1971 treaty", md:
          "In 1971 a crisis in East Pakistan was pushing India towards war with Pakistan, which was backed by both the United States and China (see [[lesson:pk-10]]). On 9 August 1971 India and the Soviet Union signed a Treaty of Peace, Friendship and Cooperation, promising to consult if either was attacked. It was a sharp break from non-alignment, and a warning to Washington and Beijing to stay out. When India went to war in December and helped create Bangladesh, Soviet vetoes blocked UN ceasefire resolutions that would have halted its advance. President Nixon sent an American aircraft carrier into the Bay of Bengal, and many Indians have never forgotten which superpower stood with them." },
        { type: "section", head: "Friends of the people", md:
          "The friendship reached ordinary life. Soviet books were translated into Indian languages and sold cheaply; Russian films and circus tours were popular; thousands of Indian students trained in Soviet universities. Trade ran on a rupee–rouble system that avoided scarce dollars, with India paying for Soviet machines and arms in goods such as tea and textiles. In 1984 Rakesh Sharma became the first Indian in space, aboard a Soviet Soyuz. When the Soviet Union collapsed in 1991, India lost its easy rupee trade and its most generous arms supplier overnight, and turned towards the market economy and the West (see [[lesson:in-11]])." },
        { type: "compare", head: "How Indians remember it",
          left: { head: "A true friend", md:
            "Moscow helped India industrialise and defend itself when the West sided with Pakistan." },
          right: { head: "A useful partner", md:
            "The Soviet Union backed India to counter China and the US, not out of friendship." } },
        { type: "section", head: "Why it matters", md:
          "Memories of 1971 still shape Indian opinion. Polls regularly show Russia as one of the countries Indians trust most, which gives Moscow goodwill no Western pressure can easily erase." }
      ],
      takeaways: [
        "From 1955 the Soviet Union built Indian steel plants and, from 1962, licensed MiG fighters.",
        "The 1971 friendship treaty shielded India when it went to war with Pakistan and helped create Bangladesh.",
        "Trade in rupees and roubles, students and culture made the friendship popular in India."
      ],
      check: { q: "What did the Soviet Union do for India in the December 1971 war?",
        choices: ["Sent troops to fight Pakistan", "Used its UN veto to block ceasefire resolutions", "Stayed neutral"], answer: 1,
        explain: "Backed by the August 1971 treaty, Soviet vetoes gave India time to win; the US sent a carrier towards the Bay of Bengal." },
      sources: [
        { title: "Indo-Soviet Treaty of 1971: 50th anniversary commemoration", publisher: "Embassy of India, Moscow", url: "https://indianembassy-moscow.gov.in/pdf/Indo%20Soviet%20Treaty_2021.pdf", date: "2021" },
        { title: "India-Russia relations", publisher: "Encyclopaedia Britannica", url: "https://www.britannica.com/topic/India-Russia-Relations", date: "n.d." },
        { title: "The Decline of India-Russia Strategic Relations", publisher: "ORF America", url: "https://orfamerica.org/newresearch/india-russia-strategic-relations", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "in_ru-2", kind: "relation", asOf: "2026-09-30",
      title: "Arms from Moscow",
      dek: "For decades most of India's weapons came from Moscow. That share has fallen sharply as India buys from France, America and Israel, but Russian missiles still guard Indian skies.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in_ru/in_ru-2-hero.webp",
          alt: "Illustration of mobile air-defence missile launchers raised on trucks in a dry plain at dawn.",
          caption: "India bought Russia's S-400 air-defence system despite American objections.",
          credit: "Illustration — not a photograph",
          prompt: "Several large mobile air-defence missile launchers with tubes raised on heavy military trucks in a dry dusty plain at dawn, radar vehicle beside them, pale pink sky, documentary style, no people close up, no flags, no legible text." },
        { type: "facts", head: "Russia's share of India's arms imports (SIPRI)", rows: [
          ["2009–13", "76%"],
          ["2014–18", "58%"],
          ["2019–23", "36%, the first period since the early 1960s below half"],
          ["Main rivals", "France (Rafale jets), the US, Israel"],
          ["Big Russian deals", "S-400 air defence (2018), BrahMos missile (joint)"]
        ] },
        { type: "section", head: "Built on Soviet kit", md:
          "By the end of the Cold War most of India's tanks, fighter jets and warships were Soviet-made, and after 1991 Russia kept supplying them: Sukhoi Su-30 fighters built under licence, T-90 tanks, and an old Soviet aircraft carrier rebuilt as INS Vikramaditya. The two jointly developed the BrahMos cruise missile, named after India's Brahmaputra and Russia's Moskva rivers, now also sold abroad. Russia leased India nuclear-powered submarines and built its largest nuclear power plant, at Kudankulam in Tamil Nadu. Few other countries would share such technology with India." },
        { type: "section", head: "The S-400", md:
          "In 2018 India signed a deal worth about $5.4 billion for Russia's S-400 long-range air-defence system, despite an American law, CAATSA, that threatens sanctions on anyone buying major Russian weapons. Washington never imposed them, deciding that India mattered too much as a partner against China. India says the S-400 performed well in its four-day conflict with Pakistan in May 2025 (see [[lesson:in-5]]), and at Putin's visit in December 2025 Russia pushed to sell more, along with its Su-57 stealth fighter." },
        { type: "section", head: "Diversifying", md:
          "Still, India has been steadily moving away. According to the Stockholm International Peace Research Institute (SIPRI), Russia's share of India's arms imports fell from 76% in 2009–13 to 36% in 2019–23, the first period since the early 1960s in which it supplied less than half. India bought French Rafale jets, American transport planes, helicopters and drones, and Israeli missiles, and is building more weapons at home under 'Make in India'. The war in Ukraine sped the shift: Russia's own army needs its factories' output, deliveries were delayed, and paying Russia became harder under Western sanctions." },
        { type: "section", head: "The China problem", md:
          "The deepest worry for Indian planners is China. When Indian and Chinese troops clashed in the Galwan valley in June 2020, killing 20 Indian soldiers (see [[lesson:cn_in-1]]), India rushed to buy more Russian jets and ammunition. Yet Russia also sells weapons to China, and since 2022 it has grown dependent on Beijing as its main buyer and supplier (see [[lesson:cn_ru-3]]). Indian officials fear that in a future war with China, Russia might not deliver spare parts on time, or might share secrets about the weapons India uses." },
        { type: "compare", head: "Should India keep buying Russian?",
          left: { head: "Yes", md:
            "Russia shares technology others won't, its weapons suit India's forces, and it has never cut India off." },
          right: { head: "No", md:
            "Russian arms are late, sanctions make them risky, and Russia's closeness to China could compromise them." } },
        { type: "section", head: "Why it matters", md:
          "India still depends on Russian spare parts to keep much of its military running. That dependence is one reason New Delhi has refused to condemn the invasion of Ukraine." }
      ],
      takeaways: [
        "Most of India's weapons were Soviet or Russian, and the two jointly build the BrahMos missile.",
        "India bought the S-400 in 2018 despite the threat of US sanctions.",
        "Russia's share of India's arms imports fell from 76% in 2009–13 to 36% in 2019–23."
      ],
      check: { q: "How has Russia's share of India's arms imports changed?",
        choices: ["It has risen to over 90%", "It fell from 76% in 2009–13 to 36% in 2019–23", "It stayed the same"], answer: 1,
        explain: "SIPRI data show India buying more from France, the US and Israel and making more at home." },
      sources: [
        { title: "India world's top arms importer between 2019-23: SIPRI", publisher: "Civilsdaily", url: "https://www.civilsdaily.com/news/india-worlds-top-arms-importer-between-2019-23-sipri/", date: "2024-03" },
        { title: "The Loss of India: The war in Ukraine is depriving Russia of its largest arms market", publisher: "Re: Russia", url: "https://re-russia.net/en/analytics/0146/", date: "2024" },
        { title: "Trends in International Arms Transfers, 2024", publisher: "SIPRI", url: "https://www.sipri.org/sites/default/files/2025-03/fs_2503_at_2024_0.pdf", date: "2025-03" },
        { title: "Vladimir Putin's India visit: Narendra Modi summit talks", publisher: "Deccan Herald", url: "https://www.deccanherald.com/india/vladimir-putin-india-visit-narendra-modi-summit-talks-world-news-russia-bilateral-trade-dinner-s400-3820542", date: "2025-12" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "in_ru-3", kind: "relation", asOf: "2026-09-30",
      title: "Cheap oil and a hard choice",
      dek: "After 2022 India became one of the biggest buyers of Russian oil, and trade quintupled. Trump punished it with tariffs, then cut them in return for a promise to buy less, while Putin offered 'uninterrupted' supplies.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in_ru/in_ru-3-hero.webp",
          alt: "Illustration of an oil refinery on a coast at night with a tanker moored at a jetty.",
          caption: "Indian refineries bought discounted Russian crude after Western countries shunned it.",
          credit: "Illustration — not a photograph",
          prompt: "A large oil refinery on a flat tropical coast at night, lit towers and pipes glowing, flare stacks burning, a crude oil tanker moored at a long jetty, warm humid haze, documentary style, no people, no logos, no flags, no legible text." },
        { type: "timeline", head: "Oil, tariffs and a summit", items: [
          ["2022–25", "India's Russian oil imports soar; trade reaches $68.7 billion"],
          ["Aug 2025", "Trump adds a 25% penalty tariff over Russian oil"],
          ["5 Dec 2025", "Putin in New Delhi offers 'uninterrupted' fuel supplies"],
          ["2 Feb 2026", "US–India deal: tariff cut to 18%, less Russian oil"],
          ["Feb 2026", "Russian oil imports fall to 1.16 million barrels a day"],
          ["2025–26", "India says 51 citizens recruited by Russia's army have died"]
        ] },
        { type: "section", head: "Oil boom", md:
          "When Russia invaded Ukraine in 2022, India refused to condemn it at the United Nations and called for dialogue. As Europe stopped buying Russian crude, Indian refiners bought it at a discount, and India became one of Russia's largest oil customers, taking an average of about 1.71 million barrels a day in 2025. Trade between the two leapt from about $13 billion in 2021 to $68.7 billion in the year to March 2025, about 80% of it oil, and most of it paid in rupees and roubles. But the flow was almost one-way: Indian exports to Russia were under $5 billion, leaving Russia holding piles of rupees it struggled to spend." },
        { type: "section", head: "Trump's penalty", md:
          "The United States argued that Indian purchases were paying for Russia's war. In August 2025 President Trump added a 25% penalty tariff on Indian goods over Russian oil, on top of another 25%, making 50% (see [[lesson:in-6]]). Modi did not back down publicly. On 5 December 2025 he hosted Vladimir Putin in New Delhi with a red-carpet welcome; Putin promised 'uninterrupted shipments of fuel', and the two aimed for $100 billion of trade by 2030. Then on 2 February 2026 India and the United States announced a trade deal: Washington dropped the penalty, bringing the tariff to 18%, and Trump said India had agreed to stop buying Russian oil." },
        { type: "section", head: "Less oil, and a darker side", md:
          "India never officially promised to stop, but its refiners cut back. Russian oil imports fell to 1.16 million barrels a day in February 2026, the lowest since late 2022. Another issue has strained ties: Indian men lured to Russia with promises of well-paid jobs, then sent to fight in Ukraine. India's foreign ministry has said that of 227 Indians recruited into the Russian army, 51 have died, and it keeps pressing Moscow to release the rest and warning citizens not to go." },
        { type: "compare", head: "India's balancing act",
          left: { head: "Strategic autonomy", md:
            "India buys where it gets the best deal and keeps an old friend who could help balance China." },
          right: { head: "Critics", md:
            "Buying Russian oil funds a war of conquest and risks India's far larger ties with America and Europe." } },
        { type: "section", head: "Why it matters", md:
          "India's choices matter for Russia's war budget and for America's hopes of making India a partner against China. So far New Delhi has refused to pick one side." }
      ],
      takeaways: [
        "India became a top buyer of Russian oil after 2022, and trade reached $68.7 billion in 2024–25.",
        "Trump added a 25% penalty tariff in August 2025 and removed it in a February 2026 deal.",
        "India's Russian oil imports fell sharply in 2026; 51 Indians recruited into Russia's army have died."
      ],
      check: { q: "What did the February 2026 US–India trade deal do?",
        choices: ["Raised tariffs to 75%", "Removed the 25% penalty tariff, bringing the rate to 18%, as India cut Russian oil", "Banned Indian oil imports"], answer: 1,
        explain: "Trump said India agreed to stop buying Russian oil; India cut back without formally saying so." },
      sources: [
        { title: "'Uninterrupted oil shipments': Key takeaways from Putin-Modi talks in Delhi", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/12/5/uninterrupted-oil-shipments-key-takeaways-from-putin-modi-talks-in-delhi", date: "2025-12-05" },
        { title: "Trump cuts India tariffs to 18% as Modi agrees to stop buying Russian oil", publisher: "Al Jazeera", url: "https://www.aljazeera.com/economy/2026/2/2/trump-to-slash-us-tariffs-on-india-from-50-percent-to-18-percent", date: "2026-02-02" },
        { title: "U.S. Supreme Court tariff ruling will likely allow India to keep buying Russian oil", publisher: "CNBC", url: "https://www.cnbc.com/2026/02/25/us-tariff-ruling-india-russian-oil-purchases.html", date: "2026-02-25" },
        { title: "Mapping Russian Investment in India", publisher: "Observer Research Foundation", url: "https://www.orfonline.org/research/mapping-russian-investment-in-india", date: "2025" },
        { title: "51 Indians recruited into Russian army killed: MEA", publisher: "The Pioneer", url: "https://dailypioneer.com/news/51-indians-recruited-into-russian-army-killed-mea", date: "2025" }
      ]
    }
  ]
});
