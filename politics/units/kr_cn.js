/* ============================================================
   Relationship — South Korea & China 🇰🇷🇨🇳
   Enemies in the Korean War, then trading partners from 1992;
   THAAD and China's boycott of Lotte, tourists and K-pop; and
   Lee Jae-myung's reset, Yellow Sea structures and anti-China
   rallies. China's ties to the North are in cn_kp.
   Research note and sources: tools/research/kr_cn.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("kr_cn", {
  id: "kr_cn",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "kr_cn-1", kind: "relation", asOf: "2026-10-01",
      title: "From enemies to partners",
      dek: "Chinese troops fought South Koreans and Americans in the Korean War, and for forty years the two countries had no ties. In 1992 Seoul dropped Taiwan for Beijing, and China became its biggest customer.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr_cn/kr_cn-1-hero.webp",
          alt: "Illustration of a busy container port with huge cranes loading ships under a hazy sky.",
          caption: "China has been South Korea's largest trading partner for two decades.",
          credit: "Illustration — not a photograph",
          prompt: "A vast busy container port with huge gantry cranes loading stacked containers onto enormous ships, apartment towers and hills behind, hazy morning sky, documentary painting style, no people close up, no logos, no flags, no legible text." },
        { type: "timeline", head: "Enemies to partners", items: [
          ["Oct 1950", "Chinese troops enter the Korean War"],
          ["1953", "Armistice; no relations for four decades"],
          ["1983", "A hijacked Chinese airliner lands in South Korea, prompting first official talks"],
          ["1988", "China attends the Seoul Olympics"],
          ["24 Aug 1992", "Diplomatic relations; Seoul cuts ties with Taipei"],
          ["2004", "China becomes South Korea's largest trading partner"]
        ] },
        { type: "section", head: "Old tributary", md:
          "For centuries Korea's kings sent tribute to China's emperors, and Korean scholars wrote in Chinese characters and studied Confucius. That order ended when Japan defeated China in the war of 1894–95, and the peace treaty forced China to give up its claims over Korea, which Japan then annexed in 1910. During Japanese rule, Korea's government-in-exile was based in Shanghai and later Chongqing, protected by China's Nationalists." },
        { type: "section", head: "War", md:
          "In October 1950, as American-led UN forces pushed north toward the Chinese border, hundreds of thousands of Chinese 'volunteers' crossed the Yalu River and drove them back; in January 1951 they helped retake Seoul. The war ended in a 1953 armistice that left Korea divided (see [[lesson:kr-9]]). China signed a treaty of alliance with North Korea in 1961 (see [[lesson:cn_kp-1]]), while South Korea, allied with the United States, recognised Taiwan as China's government." },
        { type: "section", head: "Thaw", md:
          "Contacts began by accident. In May 1983 hijackers forced a Chinese airliner to land at a US base in South Korea, and Chinese officials had to negotiate directly with Seoul to get the passengers and plane back, the first official talks between the two governments. China sent athletes to the 1986 Asian Games and the 1988 Olympics in Seoul, ignoring North Korea's boycott. As the Cold War ended and the Soviet Union recognised Seoul in 1990, China followed." },
        { type: "section", head: "1992", md:
          "On 24 August 1992 South Korea and China established diplomatic relations, and Seoul simultaneously cut ties with Taiwan, which felt betrayed; South Korea handed Taiwan's embassy building in Seoul to Beijing. Pyongyang was furious at its ally's move. For South Korea it was the crowning success of 'Nordpolitik', the policy of opening to the communist world, and it hoped China would help restrain North Korea." },
        { type: "section", head: "Trade boom", md:
          "Trade soared. South Korean companies such as Samsung, Hyundai and LG built factories in China, and China became South Korea's largest trading partner by the mid-2000s, buying chips, displays, petrochemicals and machinery. In 2008 the two declared a 'strategic cooperative partnership', and a free trade agreement took effect in 2015. Millions of Chinese tourists came to Seoul and Jeju, and Korean dramas and pop music became hugely popular in China." },
        { type: "compare", head: "Seoul's bet",
          left: { head: "Hope", md:
            "Close ties with China would bring prosperity and Beijing's help in managing North Korea." },
          right: { head: "Risk", md:
            "Economic dependence would give China leverage over South Korea's security choices." } },
        { type: "section", head: "Why it matters", md:
          "South Korea's security depends on the United States and its prosperity on China, a dilemma that came to a head over a missile-defence system in 2016." }
      ],
      takeaways: [
        "Chinese troops fought South Korean and UN forces in the Korean War.",
        "South Korea and China established relations on 24 August 1992, and Seoul cut ties with Taiwan.",
        "China became South Korea's largest trading partner in the mid-2000s."
      ],
      check: { q: "What did South Korea do when it recognised Beijing in 1992?",
        choices: ["Left the alliance with the US", "Cut diplomatic ties with Taiwan", "Signed a peace treaty with North Korea"], answer: 1,
        explain: "It also handed Taiwan's embassy building in Seoul to the People's Republic." },
      sources: [
        { title: "Sino-Korean relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sino-Korean_relations", date: "n.d." },
        { title: "South Korea–Taiwan relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/South_Korea%E2%80%93Taiwan_relations", date: "n.d." },
        { title: "Reassessing Seoul's 'One China' Policy: South Korea-Taiwan 'Unofficial' Relations after 30 Years", publisher: "ResearchGate", url: "https://www.researchgate.net/publication/363556497_Reassessing_Seoul's_One_China_Policy_South_Korea-Taiwan_Unofficial_Relations_after_30_Years_1992-2022", date: "2022" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "kr_cn-2", kind: "relation", asOf: "2026-10-01",
      title: "THAAD and the boycott",
      dek: "When Seoul let the US deploy a missile-defence system, China closed Lotte's stores, stopped tour groups and froze out K-pop. It was a lesson in economic coercion South Korea has not forgotten.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr_cn/kr_cn-2-hero.webp",
          alt: "Illustration of missile launcher trucks and a large radar on a hilltop golf course turned military base.",
          caption: "The THAAD battery was deployed on a former golf course in Seongju in 2017.",
          credit: "Illustration — not a photograph",
          prompt: "Military missile launcher trucks and a large flat radar array on a hilltop that was once a golf course, green fairways and fences, misty Korean hills around, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From embrace to punishment", items: [
          ["Sep 2015", "President Park attends China's military parade in Beijing"],
          ["Jul 2016", "Seoul agrees to host the US THAAD system"],
          ["Mar 2017", "China bans group tours to South Korea; Lotte stores closed"],
          ["May 2017", "THAAD becomes operational"],
          ["Oct 2017", "Seoul's 'three nos' ease the dispute"],
          ["2017–19", "Losses estimated at about $7.5 billion"]
        ] },
        { type: "section", head: "Park's gamble", md:
          "President Park Geun-hye tried to win China over. In September 2015 she stood with Xi Jinping and Vladimir Putin at Beijing's parade marking the end of the Second World War, a rare appearance for the leader of a US ally. But North Korea's nuclear and missile tests continued, and China did little to stop them. In July 2016 Seoul agreed to host THAAD, an American missile-defence system, to protect against North Korean missiles." },
        { type: "section", head: "China's anger", md:
          "Beijing said THAAD's powerful radar could see deep into China and weaken its nuclear deterrent. Seoul and Washington said it was aimed only at North Korea. China's response was economic. The Lotte Group, which had provided the golf course where THAAD was deployed, saw 75 of its Chinese stores closed by regulators, citing safety violations, and later sold its Chinese supermarkets. On 15 March 2017 Chinese travel agencies were told to stop selling group tours to South Korea." },
        { type: "section", head: "Tourists and K-pop", md:
          "Chinese visitors to South Korea collapsed, falling by millions in 2017 and costing the tourism industry billions of dollars. K-pop stars were denied visas for Chinese concerts, Korean dramas disappeared from Chinese streaming sites, and Korean cosmetics and cars lost sales. China never admitted any of this was official policy. The Hyundai Research Institute estimated South Korea's losses at about $7.5 billion, roughly 0.5% of GDP." },
        { type: "section", head: "The three nos", md:
          "In October 2017 Moon Jae-in's government eased the dispute by stating its 'three nos': no additional THAAD deployments, no joining a US regional missile-defence network, and no trilateral military alliance with the US and Japan. China called it a commitment; Seoul's conservatives called it a surrender of sovereignty. THAAD stayed, and some Chinese restrictions, such as on group tours, lasted for years." },
        { type: "section", head: "History and kimchi", md:
          "The quarrels are cultural as well as strategic. In the 2000s a Chinese state research programme, the Northeast Project, treated the ancient kingdom of Goguryeo as part of Chinese regional history, outraging Koreans who see it as their own. More recently, online fights have broken out over whether kimchi and the hanbok, Korea's traditional dress, have Chinese origins. Such rows feed young South Koreans' particularly negative views of China." },
        { type: "compare", head: "Lessons drawn",
          left: { head: "In Seoul", md:
            "China will punish South Korea economically for its security choices; dependence is dangerous." },
          right: { head: "In Beijing", md:
            "Pressure works: Seoul promised limits on its cooperation with the US and Japan." } },
        { type: "section", head: "Why it matters", md:
          "THAAD turned South Korean public opinion sharply against China. Polls since show most South Koreans see China unfavourably, which constrains any government in Seoul." }
      ],
      takeaways: [
        "Seoul agreed in 2016 to host the US THAAD missile-defence system, which China opposed.",
        "China closed Lotte stores, banned group tours and froze out K-pop, costing about $7.5 billion.",
        "Moon's 2017 'three nos' eased the dispute but angered South Korean conservatives."
      ],
      check: { q: "Why was the Lotte Group targeted by China in 2017?",
        choices: ["It sold weapons to Taiwan", "It provided the land where THAAD was deployed", "It refused to pay taxes"], answer: 1,
        explain: "Lotte swapped a golf course in Seongju for government land; its Chinese stores were then shut." },
      sources: [
        { title: "China retaliates on South Korea over US THAAD missile defense system by going after Lotte, and K-pop", publisher: "CBS News", url: "https://www.cbsnews.com/news/china-retaliates-south-korea-us-thaad-missile-defense-lotte-and-k-pop/", date: "2017-03" },
        { title: "South Korean Losses from China's THAAD Retaliation Continue to Grow", publisher: "Korea Economic Institute of America", url: "https://keia.org/the-peninsula/south-korean-losses-from-chinas-thaad-retaliation-continue-to-grow/", date: "n.d." },
        { title: "Chinese Economic Coercion during the THAAD Dispute", publisher: "The Asan Forum", url: "https://theasanforum.org/chinese-economic-coercion-during-the-thaad-dispute/", date: "n.d." },
        { title: "Korea still taking Chinese economic hits over US missiles", publisher: "Asia Times", url: "https://asiatimes.com/2019/12/korea-still-taking-chinese-economic-hits-over-us-missiles/", date: "2019-12" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "kr_cn-3", kind: "relation", asOf: "2026-10-01",
      title: "Lee's reset",
      dek: "After Yoon's tilt toward Washington and Tokyo, Lee Jae-myung hosted Xi at APEC and went to Beijing with 200 business chiefs. But steel rigs in the Yellow Sea and anti-China rallies in Seoul show the limits.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr_cn/kr_cn-3-hero.webp",
          alt: "Illustration of a large steel platform standing in grey open sea, with a coastguard ship watching nearby.",
          caption: "China's steel structures in the Yellow Sea have alarmed Seoul.",
          credit: "Illustration — not a photograph",
          prompt: "A large rusty steel platform on tall legs standing in grey open sea, a white coastguard ship watching from a distance, low clouds and choppy water, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "A cautious thaw", items: [
          ["Feb 2025", "Sea stand-off over a Chinese structure in the Yellow Sea"],
          ["2025", "Anti-China rallies surge in Seoul"],
          ["29 Sep 2025", "Visa-free entry for Chinese tour groups"],
          ["Oct–Nov 2025", "Xi at APEC in Gyeongju; state visit to South Korea"],
          ["5 Jan 2026", "Lee's state visit to Beijing"],
          ["2026", "China extends visa-free entry for Koreans"]
        ] },
        { type: "section", head: "Yoon's tilt", md:
          "President Yoon Suk Yeol, elected in 2022, made the US alliance and reconciliation with Japan his priorities, joined a trilateral summit with them at Camp David in 2023, and said the Taiwan question was a global issue, angering Beijing. Relations with China cooled. After Yoon's martial-law fiasco in December 2024 (see [[lesson:kr-5]]) and his removal, his supporters accused China of meddling in Korean elections, without evidence, and anti-China rallies surged, especially in Seoul's Myeong-dong shopping district near the Chinese embassy." },
        { type: "section", head: "Lee reaches out", md:
          "Lee Jae-myung, elected in June 2025, promised 'pragmatic' diplomacy: keeping the US alliance while repairing ties with China. From 29 September 2025 South Korea let Chinese tour groups enter without visas, and police restricted anti-China protests. Xi Jinping attended the APEC summit in Gyeongju from 30 October to 1 November 2025 and paid a state visit, his first to South Korea in over a decade. Lee then went to Beijing for a state visit on 5 January 2026, with more than 200 business leaders, saying 2026 should be the year of 'full restoration'." },
        { type: "section", head: "Steel in the sea", md:
          "In the Yellow Sea, where the two countries' claims overlap, China has installed large steel structures it says are fish farms. In February 2025 Chinese vessels blocked a South Korean ship from inspecting one, leading to a two-hour stand-off. Seoul has considered building its own structures in response. Many South Koreans see a pattern from the South China Sea, where China built up its claims step by step, and fear the same could happen closer to home." },
        { type: "section", head: "Trade and chips", md:
          "China remains South Korea's biggest export market, taking about $131 billion in 2025, though that fell slightly as sales of petrochemicals, phones and machinery declined. Chips are the most sensitive area: Samsung and SK Hynix have big plants in China, while US export controls limit what technology they can bring in. Lee's bargain with Trump (see [[lesson:kr-6]]) makes balancing harder." },
        { type: "compare", head: "Can Seoul balance?",
          left: { head: "Yes", md:
            "Lee keeps the US alliance and invests in America while trading with and talking to China." },
          right: { head: "No", md:
            "Washington wants Seoul on its side against China, and Beijing punishes any step it dislikes." } },
        { type: "section", head: "Why it matters", md:
          "China is also North Korea's main protector (see [[lesson:cn_kp-3]]). Any progress on the peninsula needs Beijing, which is why every South Korean president, whatever their politics, ends up courting it, however unpopular China is at home." }
      ],
      takeaways: [
        "Yoon's tilt to the US and Japan cooled ties with China; anti-China rallies grew in 2025.",
        "Xi visited South Korea for APEC in 2025, and Lee made a state visit to Beijing in January 2026.",
        "Chinese steel structures in the Yellow Sea and US chip controls limit the thaw."
      ],
      check: { q: "What has China placed in the Yellow Sea that worries South Korea?",
        choices: ["An aircraft carrier base", "Large steel structures it says are fish farms", "A bridge to Korea"], answer: 1,
        explain: "In 2025 Chinese ships blocked a South Korean inspection of one, leading to a stand-off." },
      sources: [
        { title: "Lee's First Visit to Beijing: A Nuanced Restoration of China-South Korea Ties", publisher: "The Diplomat", url: "https://thediplomat.com/2026/01/lees-first-visit-to-beijing-a-nuanced-restoration-of-china-south-korea-ties/", date: "2026-01" },
        { title: "South Korea's Lee, in Beijing, says he seeks full restoration of China ties in 2026", publisher: "NBC News (Reuters)", url: "https://www.nbcnews.com/world/asia/south-koreas-lee-beijing-says-seeks-full-restoration-china-ties-2026-rcna252498", date: "2026-01" },
        { title: "China blocks South Korean inspection of disputed sea structure: Seoul", publisher: "Radio Free Asia", url: "https://www.rfa.org/english/china/2025/03/19/china-south-korea-steel-structure-dispute/", date: "2025-03-19" },
        { title: "Anti-China rallies increase in Korea amid visa-free tourism policy", publisher: "The Korea Times", url: "https://www.koreatimes.co.kr/southkorea/society/20251001/anti-china-rallies-increase-in-korea-amid-visa-free-tourism-policy", date: "2025-10-01" },
        { title: "Korea's Annual Exports Reach New Highs in 2025", publisher: "Ministry of Trade, Industry and Resources", url: "https://english.motir.go.kr/eng/article/EATCLdfa319ada/2470/view", date: "2026-01" }
      ]
    }
  ]
});
