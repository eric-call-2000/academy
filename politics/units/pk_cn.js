/* ============================================================
   Relationship — Pakistan & China 🇵🇰🇨🇳
   'Higher than the mountains': a friendship built on shared
   rivalry with India, the China–Pakistan Economic Corridor and
   the militants who attack it, and Chinese weapons tested in
   battle. Pakistan's ties with Trump are in pk-6.
   Research note and sources: tools/research/pk_cn.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("pk_cn", {
  id: "pk_cn",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "pk_cn-1", kind: "relation", asOf: "2026-09-30",
      title: "Iron brothers",
      dek: "Pakistani leaders call their friendship with China 'higher than the Himalayas and deeper than the oceans'. It began with a shared enemy and grew into China's closest partnership.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk_cn/pk_cn-1-hero.webp",
          alt: "Illustration of a winding mountain highway through jagged snowy peaks, with colourfully painted trucks on the road.",
          caption: "The Karakoram Highway, completed in 1979, crosses the Khunjerab Pass between Pakistan and China at 4,700 metres.",
          credit: "AI illustration — not a photograph",
          prompt: "A winding mountain highway through jagged snow-capped Karakoram peaks, a few brightly painted decorated trucks on the road, a turquoise river far below, crisp blue sky, dramatic and remote, no people close up, no flags, no legible text." },
        { type: "timeline", head: "A 75-year bond", items: [
          ["1951", "Diplomatic relations established"],
          ["1963", "Border agreement; Pakistan cedes the Shaksgam valley claim"],
          ["1971", "Pakistan hosts Kissinger's secret trip to Beijing"],
          ["1979", "Karakoram Highway completed"],
          ["1980s–90s", "Chinese help for Pakistan's nuclear and missile programmes, according to US officials"],
          ["2015", "China–Pakistan Economic Corridor launched"]
        ] },
        { type: "section", head: "A shared rival", md:
          "Pakistan was one of the first countries to recognise Communist China, and the two established relations in 1951. The partnership deepened after China's 1962 war with India (see [[lesson:cn_in-1]]): India became the rival both wanted to balance. In 1963 Pakistan and China signed a border agreement under which Pakistan gave up its claim to the Shaksgam valley in Kashmir, which India still considers its own. In the 1965 and 1971 wars with India, China sided with Pakistan, though it did not intervene." },
        { type: "section", head: "Go-between and nuclear partner", md:
          "Pakistan was useful to China in other ways. In July 1971 its government secretly flew Henry Kissinger from Islamabad to Beijing, paving the way for Richard Nixon's visit to China. In the 1980s and 1990s, according to US intelligence and later investigations, China helped Pakistan build its nuclear weapons and missiles, including by passing on a bomb design and missile technology. Pakistan tested its first nuclear weapons in 1998 (see [[lesson:in_pk-1]]). China denies breaking its non-proliferation commitments. After the United States imposed sanctions on Pakistan over its nuclear programme in 1990, China became Pakistan's leading arms supplier (see [[lesson:pk_cn-3]]). Ties between people have grown too: thousands of Pakistani students study in China." },
        { type: "section", head: "Words and deeds", md:
          "Pakistani officials describe the friendship as 'higher than the mountains, deeper than the oceans, sweeter than honey'. At the UN, China has repeatedly shielded Pakistan, for years blocking efforts to list Pakistan-based militant leaders as terrorists. Pakistan in turn backs China on Taiwan, Xinjiang and Hong Kong, and rarely criticises Beijing's treatment of the Uyghur Muslims, even though it often speaks up for Muslims elsewhere." },
        { type: "section", head: "Balancing America", md:
          "Pakistan has also long been courted by the United States, and in 2025 its army chief, Field Marshal Asim Munir, built unusually close ties with Donald Trump (see [[lesson:pk-6]]). Beijing has watched warily, but Pakistani officials insist they can be friends with both and that China remains their 'all-weather' partner." },
        { type: "compare", head: "Two views",
          left: { head: "Islamabad and Beijing", md:
            "A time-tested friendship between neighbours that respect each other's sovereignty and support each other's development." },
          right: { head: "Critics in India and the West", md:
            "An alliance of convenience against India, in which China arms Pakistan and shields it from pressure over terrorism." } },
        { type: "section", head: "Why it matters", md:
          "China is Pakistan's most important partner for weapons, loans and diplomatic cover. For China, Pakistan is a way to keep India focused on its western border, a route to the Arabian Sea and a showcase for its global ambitions." }
      ],
      takeaways: [
        "China and Pakistan grew close after 1962, united by rivalry with India.",
        "Pakistan helped arrange Kissinger's 1971 trip to Beijing; China later helped its nuclear programme, according to US officials.",
        "China shields Pakistan at the UN, and Pakistan backs China on Taiwan and Xinjiang."
      ],
      check: { q: "What did Pakistan do for China in July 1971?",
        choices: ["Sent troops to Tibet", "Secretly flew Henry Kissinger to Beijing", "Joined the Warsaw Pact"], answer: 1,
        explain: "Pakistan arranged Kissinger's secret trip, which paved the way for Nixon's 1972 visit to China." },
      sources: [
        { title: "'Iron brothers': How China and Pakistan built an unlikely 75-year bond", publisher: "Al Jazeera", url: "https://www.aljazeera.com/features/2026/5/21/iron-brothers-how-china-and-pakistan-built-an-unlikely-75-year-bond", date: "2026-05-21" },
        { title: "China-Pakistan Relations", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/backgrounders/china-pakistan-relations", date: "2020" },
        { title: "Kissinger's Secret Trip to China", publisher: "National Security Archive", url: "https://nsarchive2.gwu.edu/NSAEBB/NSAEBB66/", date: "2002" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "pk_cn-2", kind: "relation", asOf: "2026-09-30",
      title: "The corridor under fire",
      dek: "China promised Pakistan more than $60 billion in roads, power plants and a port. Baloch separatists and Islamist militants have killed Chinese workers again and again, and Beijing is losing patience.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk_cn/pk_cn-2-hero.webp",
          alt: "Illustration of a modern deep-water port with cranes on an arid coast under barren cliffs, with few ships.",
          caption: "Gwadar port on the Arabian Sea, built by China, is the centrepiece of the corridor but has seen little traffic.",
          credit: "AI illustration — not a photograph",
          prompt: "A modern deep-water port with a few tall cranes and an empty quay on an arid coast, dramatic barren sandstone cliffs behind, a calm blue Arabian Sea with one small ship, bright harsh sun, quiet and underused, no people, no flags, no legible text." },
        { type: "facts", head: "CPEC", rows: [
          ["Launched", "2015, during Xi Jinping's visit to Islamabad"],
          ["Pledged", "About $62 billion in projects and loans"],
          ["Main projects", "Power plants, motorways, Gwadar port and an airport"],
          ["Threat", "Baloch separatists and the Pakistani Taliban"],
          ["Chinese deaths", "At least 20 Chinese nationals killed in five years"]
        ] },
        { type: "section", head: "Belt and Road's flagship", md:
          "In April 2015 Xi Jinping visited Islamabad and launched the China–Pakistan Economic Corridor, the most ambitious part of his Belt and Road Initiative. China pledged $46 billion, later raised to about $62 billion, for coal and hydroelectric power plants, motorways and a deep-water port at Gwadar on the Arabian Sea, meant eventually to link western China to the Gulf. The power plants ended Pakistan's crippling blackouts, but they came with expensive loans and guaranteed payments that have added to Pakistan's debt troubles." },
        { type: "section", head: "Under attack", md:
          "Balochistan, where Gwadar lies, is Pakistan's poorest province, and Baloch separatists see the corridor as outsiders taking their land and resources. The Baloch Liberation Army and the Pakistani Taliban have repeatedly attacked Chinese workers. A bus bombing near the Dasu dam in July 2021 killed nine Chinese engineers; a suicide bomber killed three Chinese teachers at Karachi University in 2022; five Chinese engineers died in a suicide attack at Besham in March 2024; and two Chinese nationals were killed near Karachi airport in October 2024. At least 20 Chinese citizens have died in five years, and a wave of BLA attacks in January 2026 hit Quetta and Gwadar." },
        { type: "section", head: "Beijing's frustration", md:
          "China has pressed Pakistan hard to protect its citizens, reportedly asking to bring in its own security firms. Pakistan created a special army division of thousands of soldiers to guard Chinese projects and in 2026 announced a new special security unit. Chinese officials have publicly warned that security threats are holding back investment, and new projects have slowed. Pakistan owes China tens of billions of dollars and depends on Beijing to roll over loans." },
        { type: "section", head: "Debt and dependence", md:
          "Pakistan's economic crises have made China's money even more important. Beijing has repeatedly rolled over billions of dollars of deposits and commercial loans to help Pakistan meet IMF conditions and avoid default, though it has avoided taking on the IMF's role itself. Some Pakistani economists warn that CPEC's costs have outweighed its benefits so far." },
        { type: "compare", head: "Two verdicts on CPEC",
          left: { head: "Supporters", md:
            "CPEC ended load-shedding, built roads and gave Pakistan a strategic partner willing to invest when others would not." },
          right: { head: "Critics", md:
            "It loaded Pakistan with expensive debt, benefited Chinese firms and ignored the grievances of Baloch people, fuelling insurgency." } },
        { type: "section", head: "Why it matters", md:
          "CPEC is a test of whether China's overseas investment can survive insecurity and debt. For Pakistan it is a lifeline and a burden; for China, a showcase that has become a costly commitment." }
      ],
      takeaways: [
        "The China–Pakistan Economic Corridor, launched in 2015, pledged about $62 billion in power, roads and Gwadar port.",
        "Baloch separatists and the Pakistani Taliban have repeatedly attacked Chinese workers; at least 20 have died in five years.",
        "China has pressed Pakistan to improve security, and new investment has slowed."
      ],
      check: { q: "Why do Baloch separatists attack CPEC projects?",
        choices: ["They want more Chinese investment", "They see the corridor as outsiders taking Balochistan's land and resources", "They are paid by China"], answer: 1,
        explain: "Balochistan is Pakistan's poorest province, and separatists say its people see little benefit from projects like Gwadar." },
      sources: [
        { title: "Pakistan's New Special Security Unit Underscores China's Hold on the Country", publisher: "The Diplomat", url: "https://thediplomat.com/2026/02/pakistans-new-special-security-unit-underscores-chinas-hold-on-the-country/", date: "2026-02" },
        { title: "Pakistan's Security Challenges Threaten to Undermine Its Relationship with China", publisher: "Stimson Center", url: "https://www.stimson.org/2024/pakistans-security-challenges-threaten-to-undermine-its-relationship-with-china/", date: "2024" },
        { title: "Suicide Bombing Kills 5 Chinese Citizens in Pakistan", publisher: "VOA via GlobalSecurity.org", url: "https://www.globalsecurity.org/wmd/library/news/pakistan/2024/pakistan-240326-voa01.htm", date: "2024-03-26" },
        { title: "Beijing's losing patience with Pakistan. Attacks on Chinese nationals raising CPEC stakes", publisher: "ThePrint", url: "https://theprint.in/opinion/china-pakistan-bla-attacks-cpec/2862760/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "pk_cn-3", kind: "relation", asOf: "2026-09-30",
      title: "Chinese weapons, tested in battle",
      dek: "Most of Pakistan's new weapons come from China. In May 2025 Chinese-made fighters and missiles fought India's French and Russian jets, and China's arms industry drew lessons.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk_cn/pk_cn-3-hero.webp",
          alt: "Illustration of a grey delta-winged fighter jet taking off from a desert air base at dawn, with mountains behind.",
          caption: "Pakistan's J-10C fighters, bought from China, were used in the May 2025 clash with India.",
          credit: "AI illustration — not a photograph",
          prompt: "A grey delta-winged fighter jet taking off from a desert air base at dawn, afterburner glowing, brown mountains in the background, dust on the runway, dramatic and powerful, no markings, no flags, no legible text." },
        { type: "timeline", head: "Arms ties", items: [
          ["1960s", "Chinese tanks and jets begin to arrive"],
          ["2007", "First JF-17 fighters, developed jointly, enter service"],
          ["2020–24", "About 81% of Pakistan's arms imports come from China"],
          ["2022", "J-10C fighters delivered"],
          ["May 2025", "J-10Cs and PL-15 missiles used against India"],
          ["2025–26", "Talks on China's J-35 stealth fighter"]
        ] },
        { type: "section", head: "Pakistan's arsenal", md:
          "As the United States cut off or restricted arms sales to Pakistan at various times, China became its main supplier. The two jointly developed the JF-17 fighter, built in Pakistan, and China has supplied frigates, tanks, drones and air-defence systems. Pakistan's navy is receiving eight Hangor-class submarines, China's largest single arms export deal, some of them built in Karachi. According to the Stockholm International Peace Research Institute, China supplied about 81% of Pakistan's major arms imports in 2020–24. For China, Pakistan is by far its largest arms customer, taking roughly two-thirds of its exports." },
        { type: "section", head: "Four days in May", md:
          "In May 2025, after a militant attack in Kashmir, India struck targets in Pakistan and the two fought a short air and missile war (see [[lesson:pk-5]]). Pakistan's J-10C fighters, armed with Chinese PL-15 long-range missiles, clashed with Indian Rafales and Russian-made jets in one of the largest air battles in decades. Pakistan claimed to have shot down several Indian aircraft, including Rafales; India acknowledged losses without giving numbers. Pakistan's foreign minister confirmed the J-10Cs' role. Chinese arms makers' shares jumped." },
        { type: "section", head: "Intelligence and stealth", md:
          "Indian officers later said China had supplied Pakistan with live satellite and radar information during the fighting, which Beijing did not confirm. Since then Pakistan has discussed buying up to 40 of China's J-35 stealth fighters, which would make it the first foreign operator of the aircraft, though its defence minister has cast doubt on the timing. India watches the partnership as a 'two-front' threat: a possible war with China and Pakistan at the same time." },
        { type: "section", head: "Lessons for Beijing", md:
          "The clash gave the world a rare look at how Chinese weapons perform against Western ones, since China itself has not fought a war since 1979. Analysts in China, Taiwan and the United States studied the results closely, and Chinese state media promoted them as proof of quality. Several countries, from Indonesia to Egypt, have since been reported to be weighing Chinese fighters." },
        { type: "compare", head: "What did May 2025 show?",
          left: { head: "Beijing and Islamabad", md:
            "Chinese weapons matched or beat Western and Russian systems in real combat." },
          right: { head: "Sceptics", md:
            "Claims on both sides are unverified, and a few days of combat say more about tactics and intelligence than about the jets themselves." } },
        { type: "section", head: "Why it matters", md:
          "The arms relationship binds Pakistan to China for decades of spare parts and upgrades, and gives China a partner that tests its weapons. For India it means any conflict with Pakistan is also, in part, a contest with China." }
      ],
      takeaways: [
        "China supplied about 81% of Pakistan's major arms imports in 2020–24.",
        "Chinese-made J-10C jets and PL-15 missiles were used against India in May 2025.",
        "Pakistan is discussing China's J-35 stealth fighter; India fears a 'two-front' threat."
      ],
      check: { q: "Which Chinese-made fighter did Pakistan use against India in May 2025?",
        choices: ["The F-16", "The J-10C", "The Rafale"], answer: 1,
        explain: "Pakistan's foreign minister confirmed that J-10C jets, armed with PL-15 missiles, took part in Pakistan's response." },
      sources: [
        { title: "Pakistan confirms participation of J-10C jets in response to Indian attacks: report", publisher: "Global Times", url: "https://www.globaltimes.cn/page/202505/1333573.shtml", date: "2025-05" },
        { title: "Trends in International Arms Transfers, 2024", publisher: "SIPRI", url: "https://www.sipri.org/sites/default/files/2025-03/fs_2503_at_2024_0.pdf", date: "2025-03" },
        { title: "Why Pakistan's Defence Minister Just Brought J-35 Stealth Fighter Procurement Plans Into Serious Question", publisher: "Military Watch Magazine", url: "https://militarywatchmagazine.com/article/pakistani-defence-minister-uncertainty-j35-plans", date: "2026" }
      ]
    }
  ]
});
