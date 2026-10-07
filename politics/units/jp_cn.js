/* ============================================================
   Relationship — Japan & China 🇯🇵🇨🇳
   History that won't settle, islands both claim, and the
   economic pressure Beijing uses when relations sour. Takaichi's
   November 2025 Taiwan remark itself is in jp-6.
   Research note and sources: tools/research/jp_cn.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("jp_cn", {
  id: "jp_cn",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "jp_cn-1", kind: "relation", asOf: "2026-09-30",
      title: "History that won't settle",
      dek: "Japan invaded China in the 1930s and killed millions. Eighty years later, how Japan remembers that war still decides how warm, or cold, the two countries can be.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_cn/jp_cn-1-hero.webp",
          alt: "Illustration of a large Japanese shrine gate at dawn, with rows of stone lanterns and an empty gravel path.",
          caption: "Visits by Japanese leaders to the Yasukuni Shrine in Tokyo, which honours convicted war criminals among Japan's war dead, have repeatedly angered China.",
          credit: "Illustration — not a photograph",
          prompt: "A large dark wooden Shinto shrine gate at dawn, rows of stone lanterns lining an empty gravel path, bare cherry trees, mist and pale light, solemn and quiet, no people, no flags, no legible text." },
        { type: "timeline", head: "From war to wary neighbours", items: [
          ["1894–95", "Japan defeats Qing China and takes Taiwan"],
          ["1931", "Japan seizes Manchuria"],
          ["1937", "Full-scale war; the Nanjing Massacre"],
          ["1945", "Japan surrenders"],
          ["29 Sep 1972", "Diplomatic relations established"],
          ["1978", "Treaty of Peace and Friendship"],
          ["1995", "Prime Minister Murayama's apology"],
          ["2001–06", "Koizumi's yearly visits to Yasukuni"]
        ] },
        { type: "section", head: "The war", md:
          "Japan's modern rise came partly at China's expense. It defeated the Qing empire in 1895 and took [[unit:tw|Taiwan]], seized Manchuria in 1931 and launched a full-scale invasion in 1937. In the capital, Nanjing, Japanese troops killed tens of thousands of civilians and prisoners and raped thousands of women in the weeks after the city fell in December 1937. China puts the death toll at 300,000; many Japanese historians give lower figures, and a few nationalists deny the massacre happened at all. By 1945 the war had killed somewhere between 10 and 20 million Chinese, most of them civilians (see [[lesson:jp-10]])." },
        { type: "section", head: "Normalisation", md:
          "After 1949 Japan, an American ally, recognised the government on Taiwan. That changed in 1972, after US President Richard Nixon's opening to Beijing. On 29 September 1972 Prime Minister Kakuei Tanaka and Premier Zhou Enlai signed a joint communiqué: Japan recognised the People's Republic as China's sole legal government, said it was 'keenly conscious' of the damage it had caused, and China renounced its demand for war reparations. A peace treaty followed in 1978. In the 1980s and 1990s Japan became China's largest aid donor, lending it billions of dollars to build roads, ports and power plants." },
        { type: "section", head: "Apologies and shrines", md:
          "In 1995, on the 50th anniversary of the war's end, Prime Minister Tomiichi Murayama expressed 'deep remorse' and a 'heartfelt apology' for Japan's 'colonial rule and aggression'. Later governments repeated the statement, but some Japanese politicians questioned it, and history textbooks that played down wartime crimes angered Beijing. The sharpest issue is the Yasukuni Shrine in Tokyo, which honours Japan's 2.5 million war dead, including 14 leaders convicted as major war criminals after 1945. Junichiro Koizumi visited every year as prime minister from 2001 to 2006, and Shinzo Abe went once, in December 2013; each visit set off protests in China." },
        { type: "compare", head: "Two views of the past",
          left: { head: "Beijing", md:
            "Japan has never fully faced its wartime crimes. Shrine visits, textbook changes and a stronger military show that militarism could return." },
          right: { head: "Many in Japan", md:
            "Japan has apologised many times and has been peaceful for 80 years. Beijing uses history to stir nationalism at home and to pressure Tokyo." } },
        { type: "section", head: "Why it matters", md:
          "History is the lens through which each side reads the other's moves today. When Prime Minister Sanae Takaichi said in November 2025 that a Chinese attack on Taiwan could be a threat to Japan's survival, Chinese officials accused Japan of 'neo-militarism' and pointed back to the 1930s (see [[lesson:jp-6]]). With 2027 marking 55 years of diplomatic ties, Beijing's top diplomat Wang Yi said in September 2026 that relations needed to be 'normalised' all over again." }
      ],
      takeaways: [
        "Japan's invasion of China from 1931 to 1945 killed millions; the 1937 Nanjing Massacre is its most bitter memory.",
        "The two established relations on 29 September 1972, and China dropped its claim to war reparations.",
        "Apologies, textbooks and leaders' visits to the Yasukuni Shrine still set the temperature of the relationship."
      ],
      check: { q: "Why do visits to the Yasukuni Shrine anger China?",
        choices: ["It is on a disputed island", "It honours convicted war criminals among Japan's war dead", "It was built by China"], answer: 1,
        explain: "The shrine honours Japan's 2.5 million war dead, including 14 leaders convicted as major war criminals after 1945." },
      sources: [
        { title: "Joint Communique of the Government of Japan and the Government of the People's Republic of China", publisher: "Ministry of Foreign Affairs of Japan", url: "https://www.mofa.go.jp/region/asia-paci/china/joint72.html", date: "1972-09-29" },
        { title: "Statement by Prime Minister Tomiichi Murayama 'On the occasion of the 50th anniversary of the war's end'", publisher: "Ministry of Foreign Affairs of Japan", url: "https://www.mofa.go.jp/announce/press/pm/murayama/9508.html", date: "1995-08-15" },
        { title: "Nanjing Massacre", publisher: "Britannica", url: "https://www.britannica.com/event/Nanjing-Massacre", date: "n.d." },
        { title: "Top Chinese diplomat tells ex-Japanese foreign minister ties must be 'normalized'", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/09/29/japan/politics/china-foreign-minister-japan-iwaya/", date: "2026-09-29" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "jp_cn-2", kind: "relation", asOf: "2026-09-30",
      title: "The Senkaku islands",
      dek: "Five tiny, uninhabited islands in the East China Sea are run by Japan and claimed by China, which calls them the Diaoyu. Chinese coast guard ships now circle them almost every day.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_cn/jp_cn-2-hero.webp",
          alt: "Illustration of a steep, rocky, uninhabited island in open sea, with two grey patrol ships in the distance.",
          caption: "Chinese coast guard ships were in the waters around the Senkakus on 357 days of 2025, a record.",
          credit: "Illustration — not a photograph",
          prompt: "A steep rocky uninhabited island covered in scrub rising from a choppy blue-grey sea, two grey patrol ships at a distance on either side, overcast sky, tense and lonely, no people, no flags, no legible text or markings." },
        { type: "facts", head: "The islands", rows: [
          ["Names", "Senkaku (Japan), Diaoyu (China), Tiaoyutai (Taiwan)"],
          ["Size", "Five islets and three rocks, about 7 square kilometres in all"],
          ["Location", "About 170 km north-east of Taiwan and 410 km west of Okinawa"],
          ["Run by", "Japan, since 1895 (US administration 1945–72)"],
          ["Claimed by", "China and Taiwan, since the early 1970s"]
        ] },
        { type: "section", head: "Two stories", md:
          "Japan says it surveyed the islands, found them uninhabited and belonging to no one, and incorporated them in January 1895. After the Second World War the United States ran them as part of Okinawa and handed them back to Japan in 1972. China says the islands have been Chinese since the Ming dynasty, that Japan took them as spoils of the 1894–95 war along with Taiwan, and that they should have been returned in 1945. Beijing and Taipei began pressing their claims in 1970–71, soon after a UN survey suggested there might be oil and gas under the surrounding seabed." },
        { type: "section", head: "Shelved, then revived", md:
          "When the two countries made peace in the 1970s, China's leader Deng Xiaoping proposed leaving the question to a 'wiser' future generation. Japan says no such deal was agreed. The dispute flared in September 2010, when a Chinese fishing trawler rammed two Japanese coast guard boats and Japan arrested its captain; China halted shipments of rare earths to Japan until he was released. In September 2012 Japan's government bought three of the islands from their private Japanese owner, partly to stop Tokyo's nationalist governor from buying them first. China saw it as nationalisation. Violent anti-Japanese protests swept Chinese cities, and Japanese shops and factories were attacked." },
        { type: "section", head: "A permanent presence", md:
          "Since 2012 China's coast guard has turned the dispute into a daily routine. Its ships entered the 'contiguous zone' within 24 nautical miles of the islands on 357 days of 2025, a record, according to Japan's coast guard, including an unbroken run of 335 days from November 2024 to October 2025. They entered the 12-mile territorial sea on 32 days, once staying for more than 92 hours. Many of the ships are armed. Japan's coast guard shadows them, and Tokyo protests each incursion." },
        { type: "compare", head: "Two positions",
          left: { head: "Tokyo", md:
            "The islands are Japanese under international law and there is no dispute to negotiate. The US has confirmed its defence treaty covers them." },
          right: { head: "Beijing", md:
            "The Diaoyu are Chinese territory taken by force. China's patrols are law enforcement in its own waters, not provocations." } },
        { type: "section", head: "Why it matters", md:
          "The islands are tiny, but they sit near shipping lanes and fishing grounds and possible energy reserves, and neither government can be seen to back down. Every US administration since 2014 has said that Article 5 of the US–Japan security treaty applies to them, which means a clash at sea could draw in the United States. The daily patrols also let China show, without firing a shot, that Japan's control is contested." }
      ],
      takeaways: [
        "Japan has run the Senkakus since 1895; China and Taiwan have claimed them as the Diaoyu since the early 1970s.",
        "A 2010 trawler clash and Japan's 2012 purchase of three islands turned a shelved dispute into a crisis.",
        "Chinese coast guard ships were near the islands on a record 357 days in 2025."
      ],
      check: { q: "What happened after Japan bought three of the islands in 2012?",
        choices: ["China agreed to share them", "Anti-Japanese protests swept China and patrols stepped up", "The US took control of them"], answer: 1,
        explain: "China treated the purchase as nationalisation; protests followed and its coast guard began near-constant patrols." },
      sources: [
        { title: "China Coast Guard Presence Near Senkaku/Diaoyu Islands Reaches Record High in 2025", publisher: "The Diplomat", url: "https://thediplomat.com/2026/01/china-coast-guard-presence-near-senkaku-diaoyu-islands-reaches-record-high-in-2025/", date: "2026-01" },
        { title: "China coast guard's 'increasingly severe' presence near Japanese islands breaks another record", publisher: "Stars and Stripes", url: "https://www.stripes.com/theaters/asia_pacific/2026-01-05/senkaku-islands-china-coast-guard-20302589.html", date: "2026-01-05" },
        { title: "Senkaku Islands", publisher: "Britannica", url: "https://www.britannica.com/place/Senkaku-Islands", date: "n.d." },
        { title: "Senkaku Islands: Q&A", publisher: "Ministry of Foreign Affairs of Japan", url: "https://www.mofa.go.jp/region/asia-paci/senkaku/qa_1010.html", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "jp_cn-3", kind: "relation", asOf: "2026-09-30",
      title: "Rare earths, seafood and tourists",
      dek: "When relations sour, China squeezes Japan's economy: minerals in 2010, fish in 2023, and in 2025–26 almost everything at once. So far the pressure has not moved Tokyo.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_cn/jp_cn-3-hero.webp",
          alt: "Illustration of an empty fish market hall in Japan early in the morning, with rows of unused stalls and stacked styrofoam boxes.",
          caption: "China reimposed a ban on Japanese seafood in November 2025, after Takaichi's Taiwan remark.",
          credit: "Illustration — not a photograph",
          prompt: "An empty Japanese fish market hall early in the morning, rows of unused stalls and stacked white styrofoam boxes, wet concrete floor reflecting fluorescent lights, a single forklift parked, quiet and gloomy, no people, no legible text or signs." },
        { type: "timeline", head: "Pressure points", items: [
          ["Sep 2010", "Rare earth shipments halted after a trawler clash"],
          ["Aug 2023", "Seafood ban over Fukushima's treated water"],
          ["7 Nov 2025", "Takaichi's Taiwan remark"],
          ["14 Nov 2025", "China warns its citizens not to visit Japan"],
          ["Nov 2025", "Seafood ban reimposed"],
          ["6 Jan 2026", "Ban on 'dual-use' exports, including some rare earths"],
          ["Jan 2026", "Japan's last pandas return to China"]
        ] },
        { type: "section", head: "Deeply tied", md:
          "China is Japan's largest trading partner, and tens of thousands of Japanese companies have factories or offices there. Japan depends on China for many raw materials, above all rare earths, the metals used in magnets for electric cars, wind turbines and missiles. Chinese tourists were the biggest-spending visitors in Japan before 2020. That dependence gives Beijing levers, and it has used them." },
        { type: "section", head: "Rare earths and fish", md:
          "In September 2010, after the trawler clash near the Senkakus (see [[lesson:jp_cn-2]]), Chinese customs stopped rare earth shipments to Japan for about two months. Japan responded by investing in mines in Australia, recycling and stockpiles, cutting its reliance on China from about 90% to around 60%. In August 2023, when Japan began releasing treated water from the wrecked Fukushima nuclear plant into the sea, China banned all Japanese seafood. The International Atomic Energy Agency said the release met safety standards. Japan's seafood exports to China fell from ¥87.1 billion in 2022 to ¥6.1 billion in 2024." },
        { type: "section", head: "The 2025–26 squeeze", md:
          "After Takaichi told parliament on 7 November 2025 that a Chinese blockade of Taiwan could be a 'survival-threatening situation' for Japan (see [[lesson:jp-6]]), Beijing reached for every lever. China's consul-general in Osaka posted that 'the dirty neck that sticks itself in must be cut off'. On 14 November China told its citizens to avoid Japan; airlines cut flights, and arrivals from mainland China fell 61% in January 2026 from a year earlier. China reimposed the seafood ban, slowed approval of Japanese films and cancelled exchanges. In December 2025 Chinese carrier jets locked their fire-control radar onto Japanese fighters near Okinawa. On 6 January 2026 China banned exports to Japanese military users of 'dual-use' goods, including some rare earths. In late January the last two pandas left Tokyo's Ueno Zoo, leaving Japan without pandas for the first time in 50 years." },
        { type: "compare", head: "Does the pressure work?",
          left: { head: "Beijing's view", md:
            "Japan must pay a price for interfering in Taiwan, which China considers an internal affair. Measures will ease when Tokyo corrects its 'wrong' remarks." },
          right: { head: "Tokyo's view", md:
            "The pressure is coercion. Takaichi has not retracted her words, and her party won a landslide in February 2026 partly on standing firm." } },
        { type: "section", head: "Why it matters", md:
          "Japan has learned from each round to depend less on China, and each round leaves Japanese firms more cautious about investing there. By September 2026 the first formal meetings in almost a year had begun, but neither side had yielded. The episodes are studied well beyond Tokyo, because they show both how China uses trade as a weapon and how a target can blunt it." }
      ],
      takeaways: [
        "China has used economic pressure on Japan repeatedly: rare earths in 2010, seafood in 2023, and a broad squeeze from November 2025.",
        "After Takaichi's Taiwan remark, Chinese travel to Japan collapsed and exports of dual-use goods were banned.",
        "Japan has reduced its dependence on China each time, and Takaichi has not backed down."
      ],
      check: { q: "What did China stop exporting to Japan in 2010?",
        choices: ["Rare earths", "Pandas", "Seafood"], answer: 0,
        explain: "After the 2010 trawler clash, Chinese customs halted rare earth shipments for about two months, prompting Japan to find other suppliers." },
      sources: [
        { title: "China bans certain rare earths and other exports to Japan for military purposes over Takaichi's comments", publisher: "CNN via WRAL", url: "https://www.wral.com/story/china-bans-certain-rare-earths-and-other-exports-to-japan-for-military-purposes-over-takaichi-s-comments/22296579/", date: "2026-01-06" },
        { title: "China's Rare Earth Campaign Against Japan", publisher: "CSIS", url: "https://www.csis.org/analysis/chinas-rare-earth-campaign-against-japan", date: "2026" },
        { title: "Chinese Outbound Travel is Back, Just Not to Japan", publisher: "Skift", url: "https://skift.com/2026/01/07/chinese-outbound-travel-is-back-just-not-to-japan/", date: "2026-01-07" },
        { title: "Japan summons China envoy over 'fighter jet radar lock' as tensions surge", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/12/8/japan-summons-china-envoy-over-fighter-jet-radar-lock-as-tensions-surge", date: "2025-12-08" },
        { title: "Japan's last pair of pandas have arrived back in China", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/2026/01/28/china-japan-pandas-return-xiao-xiao-lei-lei/b630485e-fc0b-11f0-954b-b80c7ed67fc7_story.html", date: "2026-01-28" },
        { title: "China's economic coercion strengthens Takaichi's hand", publisher: "East Asia Forum", url: "https://eastasiaforum.org/2026/03/11/chinas-economic-coercion-strengthens-takaichis-hand/", date: "2026-03-11" }
      ]
    }
  ]
});
