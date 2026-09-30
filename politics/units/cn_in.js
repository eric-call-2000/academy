/* ============================================================
   Relationship — China & India 🇨🇳🇮🇳
   The world's two most populous countries: a Himalayan border
   that has seen war and hand-to-hand killing, trade that India
   depends on and resents, and the contest over Tibet, its rivers
   and the Dalai Lama's succession.
   Research note and sources: tools/research/cn_in.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("cn_in", {
  id: "cn_in",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "cn_in-1", kind: "relation", asOf: "2026-09-30",
      title: "The Himalayan border",
      dek: "China and India share a 3,400 km border that has never been agreed. They fought a war over it in 1962, and in 2020 their soldiers killed each other with clubs and stones.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn_in/cn_in-1-hero.webp",
          alt: "Illustration of a barren high-altitude valley with a narrow river between brown mountains and snow-capped peaks, with a small military post.",
          caption: "The Galwan valley in Ladakh, where Indian and Chinese troops clashed in June 2020.",
          credit: "AI illustration — not a photograph",
          prompt: "A barren high-altitude valley with a narrow grey-green river winding between steep brown mountains, snow-capped peaks beyond, a tiny military outpost with tents on a ridge, thin clear air and harsh sunlight, remote and tense, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Clashes and talks", items: [
          ["1914", "The McMahon Line drawn at a conference China never ratified"],
          ["1959", "Dalai Lama flees to India"],
          ["Oct–Nov 1962", "China defeats India in a border war"],
          ["1993, 1996", "Agreements to keep the peace; no firearms near the line"],
          ["2017", "73-day stand-off at Doklam"],
          ["15 Jun 2020", "Galwan clash kills 20 Indian and at least 4 Chinese soldiers"],
          ["Oct 2024", "Patrolling deal ends the stand-off"],
          ["12 Sep 2026", "Xi visits India for the first time since 2019"]
        ] },
        { type: "section", head: "An unsettled line", md:
          "The border runs through some of the highest terrain on earth. In the west, China holds Aksai Chin, a high plateau India claims as part of Ladakh; China built a road across it in the 1950s linking Tibet and Xinjiang. In the east, India holds Arunachal Pradesh, which China calls 'South Tibet', up to the McMahon Line drawn by British officials in 1914. After China took control of Tibet in 1950 and the Dalai Lama fled to India in 1959, tensions rose. In October 1962 Chinese forces attacked on both fronts, routed India's army, then declared a ceasefire and withdrew in the east while keeping Aksai Chin. More than 1,300 Indian soldiers died. The defeat still shapes India's view of China." },
        { type: "section", head: "Rules of the road", md:
          "After 1962 the two settled into an uneasy peace along the Line of Actual Control, which neither side has ever mapped jointly. Agreements in 1993 and 1996 committed them not to use firearms near it. Patrols pushed and shoved, and a 73-day stand-off at Doklam, near Bhutan, in 2017 ended without shots. Then on 15 June 2020, in the Galwan valley in Ladakh, troops fought for hours with clubs wrapped in barbed wire, rocks and fists. Twenty Indian soldiers died; China later said four of its soldiers were killed. Both sides rushed tens of thousands of troops and heavy weapons to the border." },
        { type: "section", head: "Thaw", md:
          "Four years of talks produced a deal in October 2024 on patrolling in the last disputed areas, Depsang and Demchok. Narendra Modi and Xi Jinping met days later in Russia, and again in China in 2025. Flights and pilgrimages resumed. On 12 September 2026, on his first visit to India since 2019, for the BRICS summit in New Delhi, Xi met Modi, who said 'peace and tranquillity' on the border was essential to relations. Their officials have held 25 rounds of talks on the boundary, but a final settlement is not in sight." },
        { type: "compare", head: "Two views of the border",
          left: { head: "New Delhi", md:
            "China seized Indian land in 1962 and keeps probing. Normal ties depend on peace at the border first." },
          right: { head: "Beijing", md:
            "The McMahon Line is a colonial imposition. The border question should be kept in its place and not block wider cooperation." } },
        { type: "section", head: "Why it matters", md:
          "Two nuclear-armed giants, with over 2.8 billion people between them, face each other along the Himalayas. Even with the thaw, both keep large forces there and are building roads, airstrips and villages close to the line, and each is modernising its military with the other in mind." }
      ],
      takeaways: [
        "China and India have never agreed their 3,400 km border; China won a short war over it in 1962.",
        "In June 2020, 20 Indian and at least 4 Chinese soldiers died in hand-to-hand fighting in the Galwan valley.",
        "A 2024 patrolling deal and Xi's September 2026 visit to India have eased tensions, but the border is unsettled."
      ],
      check: { q: "How did Indian and Chinese troops fight in the Galwan valley in 2020?",
        choices: ["With artillery", "With clubs, rocks and fists, under agreements not to use firearms", "With air strikes"], answer: 1,
        explain: "Agreements from the 1990s bar firearms near the line, so the deadly clash was fought hand to hand." },
      sources: [
        { title: "Sino-Indian War", publisher: "Britannica", url: "https://www.britannica.com/event/Sino-Indian-War", date: "n.d." },
        { title: "Modi and Xi seek to reset India-China ties on BRICS sidelines", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/12/chinas-xi-heads-to-india-for-brics-summit-overshadowed-by-wars", date: "2026-09-12" },
        { title: "Indian Prime Minister Modi says border peace is key to India-China ties", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/12/india-china-modi-xi-brics-border.html", date: "2026-09-12" },
        { title: "India-China relations in focus: from deadly border clashes to Modi-Xi talks in Beijing", publisher: "Malay Mail", url: "https://www.malaymail.com/news/world/2025/08/29/india-china-relations-in-focus-from-deadly-border-clashes-to-modi-xi-talks-in-beijing/189321", date: "2025-08-29" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "cn_in-2", kind: "relation", asOf: "2026-09-30",
      title: "Rivals who trade",
      dek: "China is now India's biggest trading partner, selling it $131 billion of goods a year and buying just $19 billion. India wants China's factories but not its dominance.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn_in/cn_in-2-hero.webp",
          alt: "Illustration of a busy electronics assembly line with rows of workers placing parts on circuit boards under bright lights.",
          caption: "India makes more phones than ever, but many of their components still come from China.",
          credit: "AI illustration — not a photograph",
          prompt: "A long bright electronics assembly line with rows of workers in blue caps and smocks, seen from behind and the side, placing components on green circuit boards, conveyor belts and bins of parts, busy and modern, no faces clearly visible, no legible text or logos." },
        { type: "facts", head: "Trade in 2025–26", rows: [
          ["Imports from China", "$131.6 billion"],
          ["Exports to China", "$19.5 billion"],
          ["Deficit", "$112.6 billion, a record"],
          ["Rank", "China overtook the US as India's largest trading partner"],
          ["Main imports", "Electronics, machinery, chemicals, solar panels, medicine ingredients"]
        ] },
        { type: "section", head: "A lopsided relationship", md:
          "India's factories, from phone assembly to pharmaceuticals, depend on Chinese parts, machines and chemicals. In the year to March 2026, India imported $131.6 billion of goods from China and exported $19.5 billion, leaving a record deficit of $112.6 billion, and China overtook the United States as its largest trading partner. Indian manufacturers say they cannot compete with cheap Chinese goods; Indian officials complain that Chinese markets are closed to their software, farm produce and medicines." },
        { type: "section", head: "After Galwan", md:
          "After the 2020 border clash, India struck back economically. It banned TikTok and dozens of other Chinese apps, required government approval for any investment from countries sharing its land border, which in practice meant China, and kept Chinese firms out of its 5G networks. Investigators raided Chinese phone makers over tax and money-laundering claims. China, in turn, has at times restricted exports to India of rare-earth magnets, specialist fertilisers and tunnel-boring machines, which Indian industry needs." },
        { type: "section", head: "Moving the factories", md:
          "Western firms looking to reduce their reliance on China have turned to India. Apple now assembles a growing share of its iPhones there. Beijing has pushed back quietly: in 2025 Foxconn, Apple's main assembler, recalled hundreds of Chinese engineers from its Indian plants, and exports of some specialised equipment slowed, according to industry reports. Chinese companies want in too, but India has been wary; a plan by the carmaker BYD for an Indian factory was rejected in 2023." },
        { type: "section", head: "Pakistan and the West", md:
          "Two other relationships complicate matters. China is Pakistan's closest ally and main arms supplier; Chinese-made jets and missiles were used against India in the May 2025 fighting (see [[lesson:in-5]]). And India has built closer ties with the United States, Japan and Australia in the 'Quad'. But Donald Trump's tariffs on Indian goods in 2025 (see [[lesson:in-6]]) pushed New Delhi to hedge, and to consider easing some curbs on Chinese investment. At the September 2026 summit Modi and Xi backed stronger trade and transport links, and India pressed for market access and reliable supplies of rare earths." },
        { type: "compare", head: "Two strategies",
          left: { head: "Decouple", md:
            "India should cut its dependence on China, build its own industries and join Western supply chains, whatever the short-term cost." },
          right: { head: "Engage", md:
            "India cannot manufacture without Chinese inputs. Letting in Chinese investment, with safeguards, would create jobs and exports." } },
        { type: "section", head: "Why it matters", md:
          "India hopes to become the world's next manufacturing hub as companies move production out of China. Whether it can do so while importing so much from China, and while managing a tense border, is one of the central economic questions of the coming decade." }
      ],
      takeaways: [
        "China overtook the US as India's largest trading partner in 2025–26, with a record $112.6 billion deficit for India.",
        "After the 2020 clash India banned Chinese apps and curbed Chinese investment; China has restricted key exports.",
        "China's alliance with Pakistan and India's ties with the West complicate the relationship."
      ],
      check: { q: "What did India do economically after the 2020 border clash?",
        choices: ["Cut all trade with China", "Banned Chinese apps and required approval for Chinese investment", "Joined China's Belt and Road"], answer: 1,
        explain: "India banned TikTok and other apps and required government approval for investment from neighbouring countries, chiefly China." },
      sources: [
        { title: "China becomes India's top trade partner in FY26; deficit widens to $112 bn", publisher: "Business Standard", url: "https://www.business-standard.com/economy/news/china-becomes-india-s-top-trade-partner-in-fy26-deficit-widens-to-usd-112-bn-126041501317_1.html", date: "2026-04-15" },
        { title: "Xi Modi meeting: India China thaw faces hurdles over border, trade and Pakistan", publisher: "Business Today", url: "https://www.businesstoday.in/india/story/xi-modi-meeting-india-china-thaw-faces-hurdles-over-border-trade-and-pakistan-554914-2026-09-11", date: "2026-09-11" },
        { title: "Xi-Modi Bilateral Talks Seek to Stabilize Ties After Border Tensions", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-09-12/xi-sits-down-with-modi-during-first-trip-to-india-in-seven-years", date: "2026-09-12" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "cn_in-3", kind: "relation", asOf: "2026-09-30",
      title: "Tibet, rivers and the Dalai Lama",
      dek: "India hosts the Dalai Lama and Tibet's government in exile. China is building the world's biggest dam upstream of India. And both are preparing for the day the 91-year-old spiritual leader dies.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn_in/cn_in-3-hero.webp",
          alt: "Illustration of a deep river gorge winding between steep forested mountains with snowy peaks, mist rising from the water.",
          caption: "The Yarlung Tsangpo flows through a deep gorge in Tibet before entering India as the Brahmaputra.",
          credit: "AI illustration — not a photograph",
          prompt: "A deep dramatic river gorge winding between steep green forested mountains, snowy Himalayan peaks above, mist rising from a fast turquoise river, prayer flags faint on a distant ridge, awe-inspiring and remote, no people, no legible text." },
        { type: "timeline", head: "Tibet and India", items: [
          ["1950", "China takes control of Tibet"],
          ["1959", "Dalai Lama flees to India after a failed uprising"],
          ["1960", "Tibetan exile government set up in Dharamsala"],
          ["2 Jul 2025", "Dalai Lama says his successor will be chosen by his own office"],
          ["19 Jul 2025", "Construction starts on the Medog dam in Tibet"],
          ["2025", "Indian pilgrimages to Mount Kailash in Tibet resume"]
        ] },
        { type: "section", head: "A guest in Dharamsala", md:
          "In March 1959, as Chinese troops crushed an uprising in Lhasa, the 23-year-old Dalai Lama escaped on foot over the Himalayas to India. Prime Minister Jawaharlal Nehru gave him refuge, and since 1960 the Tibetan government in exile has been based in the hill town of Dharamsala, home to tens of thousands of Tibetan refugees. China calls the Dalai Lama a separatist; India says he is a respected religious leader and does not allow political activity against China. Beijing protests whenever Indian leaders meet him or when he visits Arunachal Pradesh, which it claims." },
        { type: "section", head: "Who chooses the next one", md:
          "Tibetan Buddhists believe each Dalai Lama is reborn and the child is then found by senior lamas. On 2 July 2025, days before his 90th birthday, the Dalai Lama said the institution would continue and that only his own office, the Gaden Phodrang Trust, could recognise his reincarnation; he has said it will be found in the 'free world'. China says the successor must be chosen under Chinese law, including a golden urn used by the Qing emperors, and approved by Beijing. There could one day be two rival Dalai Lamas, one recognised in India and one in China, and India would have to choose." },
        { type: "section", head: "The water tower", md:
          "Tibet is the source of rivers that water much of Asia. On 19 July 2025 China began building a hydropower project on the Yarlung Tsangpo, near where it turns south into India to become the Brahmaputra. Officially costing about 1.2 trillion yuan (about $165 billion), it would produce around three times as much electricity as the Three Gorges Dam, making it the world's largest. China says it will not harm countries downstream. India and Bangladesh worry about control of water flows, sediment and the risk of disaster in an earthquake zone; India plans a large dam of its own on the river." },
        { type: "compare", head: "Two views",
          left: { head: "Beijing", md:
            "Tibet is part of China and its development is China's affair. Religious succession must follow Chinese law and history." },
          right: { head: "Tibetans in exile and many in India", md:
            "China suppresses Tibetan religion and culture. Only Tibetan Buddhists can choose their spiritual leader, and upstream dams threaten India's rivers." } },
        { type: "section", head: "Why it matters", md:
          "Tibet sits between the two powers physically and politically. The Dalai Lama's eventual death, and a fight over his successor, could become one of the sharpest tests of the China–India relationship, while the dams being built on both sides will shape water security for hundreds of millions of people." }
      ],
      takeaways: [
        "India has hosted the Dalai Lama and a Tibetan exile government since 1959–60.",
        "In July 2025 the Dalai Lama said only his office can choose his successor; China insists it must approve.",
        "China began building the world's largest hydropower project upstream of India in July 2025."
      ],
      check: { q: "Who does the Dalai Lama say will recognise his successor?",
        choices: ["The Chinese government", "His own office, the Gaden Phodrang Trust", "The Indian government"], answer: 1,
        explain: "In July 2025 he said only the Gaden Phodrang Trust has the authority to recognise his reincarnation; China rejects this." },
      sources: [
        { title: "Dalai Lama confirms he will have a successor after his death", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/7/2/dalai-lama-confirms-he-will-have-a-successor-after-his-death", date: "2025-07-02" },
        { title: "The Dalai Lama announces plans for a successor, signaling China won't have a say", publisher: "NPR", url: "https://npr.org/2025/07/02/nx-s1-5453083/dalai-lama-says-successor-will-be-named-after-his-death", date: "2025-07-02" },
        { title: "China Starts Construction on Yarlung Tsangpo Megadam", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2025/07/22/china-energy-megadam-tibet-hydropower-electricity-yarlung-tsangpo/", date: "2025-07-22" },
        { title: "What's Driving China's Mega Medog Hydropower Project?", publisher: "The Diplomat", url: "https://thediplomat.com/2026/02/whats-driving-chinas-mega-medog-hydropower-project/", date: "2026-02" }
      ]
    }
  ]
});
