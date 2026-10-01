/* ============================================================
   Relationship — China & North Korea 🇨🇳🇰🇵
   'Close as lips and teeth': Chinese armies saved Kim Il Sung
   in 1950 and a 1961 treaty still binds them; China's lifeline
   and its limits under sanctions and nuclear tests; and the
   2025 reconciliation after Kim turned to Russia.
   The Beijing parade is in kp-6.
   Research note and sources: tools/research/cn_kp.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("cn_kp", {
  id: "cn_kp",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "cn_kp-1", kind: "relation", asOf: "2026-09-30",
      title: "Sealed in blood",
      dek: "In 1950 hundreds of thousands of Chinese troops crossed the Yalu river to save North Korea. The 1961 treaty that followed is still China's only mutual defence pact.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn_kp/cn_kp-1-hero.webp",
          alt: "Illustration of a long steel bridge across a wide river in winter, with snowy hills on both banks.",
          caption: "Chinese troops crossed the Yalu river into Korea in October 1950.",
          credit: "Illustration — not a photograph",
          prompt: "A long old steel truss bridge across a wide half-frozen river in winter, snowy low hills on both banks, a column of small figures crossing at dusk seen from far away, cold blue light, historical documentary painting style, no flags, no legible text." },
        { type: "timeline", head: "Brothers in arms", items: [
          ["Oct 1950", "Chinese 'People's Volunteers' cross the Yalu"],
          ["Nov 1950", "Mao's son Mao Anying is killed in an air raid"],
          ["Jul 1953", "Armistice; Chinese troops stay until 1958"],
          ["11 Jul 1961", "Treaty of Friendship, Cooperation and Mutual Assistance"],
          ["1960s", "Kim balances between China and the Soviet Union"],
          ["1992", "China recognises South Korea"]
        ] },
        { type: "section", head: "Crossing the Yalu", md:
          "When American-led UN forces drove North Korea's army back towards the Chinese border in autumn 1950 (see [[lesson:kp-10]]), Mao Zedong decided to intervene, barely a year after founding the People's Republic (see [[lesson:cn-9]]). In October 1950 Chinese troops, officially 'People's Volunteers', crossed the Yalu river in secret and drove the Americans back south. Around three million Chinese served in the war. Chinese official figures give about 180,000 dead; Western estimates are much higher. Among the dead was Mao's own son, Mao Anying, killed in an American air raid in November 1950. China calls it the 'War to Resist America and Aid Korea'. Since 2014 South Korea has returned the remains of Chinese soldiers found on its soil, and China greets them with state ceremonies." },
        { type: "section", head: "Lips and teeth", md:
          "The war created a relationship both sides describe as 'as close as lips and teeth': if the lips are gone, the teeth feel the cold. North Korea is China's buffer against American troops in the South. On 11 July 1961 Zhou Enlai and Kim Il Sung signed a Treaty of Friendship, Cooperation and Mutual Assistance, promising immediate military help if either is attacked. It is renewed every 20 years and remains the only defence treaty China has with any country. Yet Kim Il Sung (see [[lesson:kp-9]]) resented dependence and played China against the Soviet Union, and he purged pro-Chinese rivals from his party." },
        { type: "section", head: "Betrayal in 1992", md:
          "The friendship had many strains. During China's Cultural Revolution, Red Guards mocked Kim as a 'fat revisionist', and relations froze. Worse came in 1992, when China established diplomatic relations with South Korea, putting business with a rich neighbour ahead of loyalty to Pyongyang. North Korea felt betrayed; Kim Il Sung had been told only shortly before. China's trade with South Korea is now many times its trade with the North. The collapse of the Soviet Union the year before had already cut off North Korea's main supplier, and the famine of the 1990s followed (see [[lesson:kp-11]])." },
        { type: "compare", head: "Two views of the alliance",
          left: { head: "Blood brothers", md:
            "Shared sacrifice in the Korean War created a bond between two socialist states that outsiders cannot break." },
          right: { head: "Wary neighbours", md:
            "Each uses the other. China wants a buffer; North Korea wants aid but fears Chinese control." } },
        { type: "section", head: "Why it matters", md:
          "Because of 1950 and the 1961 treaty, any war on the Korean peninsula could draw in China. That is one reason no one has tried to overthrow North Korea's regime by force." }
      ],
      takeaways: [
        "China sent around three million troops to save North Korea in the Korean War; Mao's son was among the dead.",
        "The 1961 treaty is China's only mutual defence pact with any country.",
        "China's recognition of South Korea in 1992 made Pyongyang feel betrayed."
      ],
      check: { q: "What is unusual about the 1961 China–North Korea treaty?",
        choices: ["It was never signed", "It is China's only mutual defence treaty with any country", "It allows North Korea to join China"], answer: 1,
        explain: "Signed by Zhou Enlai and Kim Il Sung, it promises immediate military help and is renewed every 20 years." },
      sources: [
        { title: "The China-North Korea Relationship", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/backgrounders/china-north-korea-relationship", date: "2019" },
        { title: "China stages solemn ceremony to welcome home remains of 117 soldiers killed in Korean war", publisher: "South China Morning Post", url: "https://www.scmp.com/news/china/diplomacy/article/3103243/china-stages-solemn-ceremony-welcome-home-remains-117-soldiers", date: "2020-09" },
        { title: "Friends forever? The China-North Korea defense treaty turns 59", publisher: "NK News", url: "https://www.nknews.org/2020/07/friends-forever-the-china-dprk-defense-treaty-turns-59/", date: "2020-07" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "cn_kp-2", kind: "relation", asOf: "2026-09-30",
      title: "Lifeline with limits",
      dek: "China supplies most of North Korea's trade, oil and food. But it opposes Kim's nuclear weapons, backed UN sanctions after his tests, and was angered when he executed Beijing's favourite contact.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn_kp/cn_kp-2-hero.webp",
          alt: "Illustration of lorries queuing to cross a bridge at a border checkpoint in a river valley, with a Chinese city on one side and dark hills on the other.",
          caption: "Most of North Korea's trade crosses the Yalu between Dandong and Sinuiju.",
          credit: "Illustration — not a photograph",
          prompt: "A line of cargo lorries queuing at a border checkpoint to cross a bridge over a river valley, a bright modern city with tall buildings on one bank and dark sparsely lit hills on the other, evening light, documentary style, no people close up, no flags, no legible text." },
        { type: "facts", head: "China and the North", rows: [
          ["Share of North Korea's trade", "About 90% or more"],
          ["Main crossing", "Dandong (China) to Sinuiju"],
          ["2006–17", "North Korea's six nuclear tests; China backs UN sanctions"],
          ["Dec 2013", "Jang Song Thaek, Beijing's key contact, executed"],
          ["Mar 2018", "Kim's first trip abroad: Beijing"]
        ] },
        { type: "section", head: "The lifeline", md:
          "Since the Soviet collapse China has been North Korea's economic lifeline. It accounts for about 90% or more of the North's recorded trade, and supplies much of its oil and food. Most trade crosses the Yalu between the Chinese city of Dandong and Sinuiju, whose contrast, bright towers facing dark hills, sums up the gap between them. In 2010 and 2011 the two announced joint economic zones on islands in the Yalu and at Rason, a northeastern port that would give China's landlocked northeast an outlet to the sea, but most plans stalled, and a new Chinese-built bridge across the Yalu stood unused for years. China has also sent back North Koreans who escape across the border, treating them as illegal migrants rather than refugees; human rights groups say those returned face prison camps or worse (see [[lesson:kp-12]])." },
        { type: "section", head: "Bombs and sanctions", md:
          "China does not want a nuclear-armed North Korea: it could provoke Japan and South Korea to build their own bombs, and it gives America reasons to reinforce its forces nearby. After North Korea's first nuclear test in 2006 China voted for UN sanctions, and after the tests of 2016 and 2017, including a hydrogen bomb, it backed the toughest ones yet, banning imports of North Korean coal, iron, seafood and textiles. Enforcement was patchy, and smuggling continued. China's main aim is stability: it fears a collapse of the regime would bring refugees and perhaps American troops to its border." },
        { type: "section", head: "The uncle and the summits", md:
          "Kim Jong Un, who took power in 2011, kept Beijing at arm's length. In December 2013 he had his uncle Jang Song Thaek executed. Jang had run economic ties with China and backed Chinese-style reforms, and among the charges was selling the country's resources 'at cheap prices', an implied dig at Beijing. Kim did not meet Xi Jinping for more than six years. Then, as he prepared to meet Donald Trump in 2018, Kim made his first trip abroad as leader, to Beijing in March 2018, and met Xi several more times that year and the next. China wanted a say in any deal." },
        { type: "compare", head: "How much can China do?",
          left: { head: "A lot", md:
            "China controls North Korea's economy and could force it to change course if it chose." },
          right: { head: "Little", md:
            "Pressing too hard could collapse the regime, which China fears more than the bomb." } },
        { type: "section", head: "Why it matters", md:
          "Western governments have long asked China to rein in North Korea. China's reluctance to squeeze too hard is one reason sanctions have never stopped the North's weapons programmes." }
      ],
      takeaways: [
        "China accounts for about 90% or more of North Korea's trade and sends back escapees.",
        "China backed UN sanctions after North Korea's nuclear tests but enforced them loosely.",
        "Kim executed Beijing's key contact, his uncle Jang, in 2013, then visited Beijing in 2018."
      ],
      check: { q: "Why was Jang Song Thaek's execution in 2013 a blow to China?",
        choices: ["He was a Chinese citizen", "He ran economic ties with China and backed Chinese-style reforms", "He led North Korea's army"], answer: 1,
        explain: "Jang was Beijing's key contact; his indictment accused him of selling resources cheaply, a dig at China." },
      sources: [
        { title: "China accounts for more than 90% of North Korea's total trade", publisher: "Daily NK", url: "https://www.dailynk.com/english/report-china-accounts-for-more-tha/", date: "n.d." },
        { title: "China's Official Response To Jang Song-Thaek's Execution: An Analysis", publisher: "The Diplomat", url: "https://thediplomat.com/2013/12/chinas-official-response-to-jang-song-thaeks-execution-an-analysis/", date: "2013-12" },
        { title: "North Korea's Kim Jong Un met Xi Jinping on surprise visit to China", publisher: "CNN", url: "https://edition.cnn.com/2018/03/27/asia/north-korea-kim-jong-un-china-visit/index.html", date: "2018-03-27" },
        { title: "The China-North Korea Strategic Rift", publisher: "US-China Economic and Security Review Commission", url: "https://www.uscc.gov/sites/default/files/2022-01/China-North_Korea_Strategic_Rift.pdf", date: "2022-01" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "cn_kp-3", kind: "relation", asOf: "2026-09-30",
      title: "Back in Beijing's embrace",
      dek: "When Kim turned to Russia after 2022, China seemed to lose influence. In 2025 it won him back, with a place beside Xi at a Beijing parade and a premier at Pyongyang's.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn_kp/cn_kp-3-hero.webp",
          alt: "Illustration of a huge square with a massed military parade, missiles on launch vehicles and crowds in the stands.",
          caption: "China's premier watched North Korea's October 2025 parade, which displayed new intercontinental missiles.",
          credit: "Illustration — not a photograph",
          prompt: "A huge city square at night lit by floodlights with a massed military parade, giant missiles on long launch vehicles rolling past, crowds in grandstands, fireworks in the sky, seen from high above and far away, no faces, no flags, no legible text." },
        { type: "timeline", head: "Rivalry and reconciliation", items: [
          ["2023–24", "North Korea sends Russia shells and missiles"],
          ["Jun 2024", "Kim and Putin sign a mutual defence treaty"],
          ["Oct 2024", "North Korean troops deploy to fight for Russia"],
          ["3 Sep 2025", "Kim stands beside Xi and Putin at Beijing's parade"],
          ["9–11 Oct 2025", "Premier Li Qiang in Pyongyang for the party's 80th anniversary"],
          ["Jul 2026", "65th anniversary of the 1961 treaty"]
        ] },
        { type: "section", head: "Losing out to Moscow", md:
          "Russia's war in Ukraine gave Kim a new patron. From 2023 North Korea shipped millions of artillery shells and missiles to Russia, and in June 2024 Kim and Vladimir Putin signed a mutual defence treaty, promising the kind of support that until then only China had pledged. Late in 2024 thousands of North Korean soldiers went to fight for Russia (see [[lesson:kp-5]]). In return North Korea got oil, food, money and, many fear, military technology. For China this was uncomfortable: it lost some of its leverage over Pyongyang, and the new alliance risked drawing more American and allied forces into Northeast Asia." },
        { type: "section", head: "The parade", md:
          "China moved to win Kim back. On 3 September 2025 Kim stood beside Xi Jinping and Putin at Beijing's parade marking 80 years since the end of the Second World War (see [[lesson:kp-6]]), his first appearance at a big multilateral event and a sign that China accepted him, nuclear weapons and all. A month later Premier Li Qiang, one of China's seven top leaders, flew to Pyongyang for the 80th anniversary of the Workers' Party, the first visit by a Chinese premier in 16 years and the most senior since Xi in 2019. On 10 October he watched a parade that showed off North Korea's Hwasong-20, which it called its most powerful intercontinental missile." },
        { type: "section", head: "A quieter line on the bomb", md:
          "China used to call regularly for the 'denuclearisation of the peninsula'. Since 2024 it has largely stopped stressing that aim in public, as Kim insists his nuclear status is permanent (see [[lesson:kp-7]]). Trade has recovered from the Covid border closure, though it is still modest. In July 2026 the two marked 65 years of their 1961 treaty with warm messages. China wants to keep North Korea stable and friendly, keep Russia from dominating it, and keep its own voice in any future talks between Kim and Donald Trump." },
        { type: "compare", head: "Who has more influence?",
          left: { head: "China", md:
            "China is the North's neighbour and main trading partner; Russia's interest may fade when the war ends." },
          right: { head: "Russia", md:
            "Russia gives Kim what China won't: technology, cash for soldiers and open support for his nuclear status." } },
        { type: "section", head: "Why it matters", md:
          "China, Russia and North Korea standing together worries America and its allies. How China balances its ties with Pyongyang and Moscow shapes the whole region." }
      ],
      takeaways: [
        "North Korea turned to Russia after 2022, sending shells, missiles and troops, and signed a defence treaty in 2024.",
        "China won Kim back in 2025: he stood beside Xi at Beijing's parade, and Li Qiang visited Pyongyang.",
        "China has stopped publicly pressing for denuclearisation as Kim insists his nuclear status is permanent."
      ],
      check: { q: "What was significant about Li Qiang's October 2025 visit to Pyongyang?",
        choices: ["It was the first Chinese premier's visit in 16 years", "He signed a new defence treaty", "He demanded denuclearisation"], answer: 0,
        explain: "Li attended the Workers' Party's 80th anniversary and watched the parade, the most senior Chinese visit since 2019." },
      sources: [
        { title: "Chinese Premier Li Qiang arrives in North Korea ahead of military parade", publisher: "NK News", url: "https://www.nknews.org/2025/10/chinese-premier-li-qiang-arrives-in-north-korea-ahead-of-military-parade/", date: "2025-10-09" },
        { title: "Diplomatic Review, Oct 2025: First Visit by a Chinese Premier to the DPRK in 16 Years", publisher: "Sino-NK", url: "https://sinonk.com/2025/11/07/diplomatic-review-oct-2025-first-north-korea-visit-by-chinese-premier-in-16-years/", date: "2025-11-07" },
        { title: "'Sealed in blood': Where does the China-North Korea alliance stand today?", publisher: "Al Jazeera", url: "https://www.aljazeera.com/amp/news/2026/7/11/sealed-in-blood-where-does-the-china-north-korea-alliance-stand-today", date: "2026-07-11" },
        { title: "'Socialist paradise': North Korea's Kim marks 80th year of governing party", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/10/10/socialist-paradise-north-koreas-kim-marks-80th-year-of-governing-party", date: "2025-10-10" }
      ]
    }
  ]
});
