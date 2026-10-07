/* ============================================================
   Relationship — Japan & Taiwan 🇯🇵🇹🇼
   Fifty years of Japanese rule, from conquest and the Wushe
   uprising to railways and schools; friends without diplomatic
   relations after 1972, earthquake aid and TSMC in Kumamoto;
   and Takaichi's Taiwan remark and missiles on Yonaguni.
   Beijing's reaction is told from Tokyo in jp-6.
   Research note and sources: tools/research/jp_tw.md
   Current as of 7 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("jp_tw", {
  id: "jp_tw",
  asOf: "2026-10-07",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "jp_tw-1", kind: "relation", asOf: "2026-10-07",
      title: "Fifty years a colony",
      dek: "Japan took Taiwan from China in 1895 and ruled it for half a century, crushing resistance but building railways, schools and dams. Many Taiwanese remember that era far more kindly than Koreans or Chinese do.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_tw/jp_tw-1-hero.webp",
          alt: "Illustration of a red-brick colonial-era railway station with a clock tower in a Taiwanese town, palm trees in front.",
          caption: "Japan built much of Taiwan's railway network and many of its public buildings.",
          credit: "Illustration — not a photograph",
          prompt: "A red-brick and white-stone colonial-era railway station with a small clock tower in a Taiwanese town of the 1930s, palm trees and a rickshaw in front, green mountains behind, warm afternoon light, historical documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Japanese Taiwan", items: [
          ["17 Apr 1895", "Treaty of Shimonoseki cedes Taiwan to Japan"],
          ["1895–1902", "Armed resistance crushed"],
          ["1908", "North–south railway completed"],
          ["Oct 1930", "Seediq uprising at Wushe"],
          ["1937–45", "'Japanisation' campaign; Taiwanese serve in Japan's war"],
          ["Oct 1945", "Japan surrenders Taiwan to the Republic of China"]
        ] },
        { type: "section", head: "Conquest", md:
          "Japan won Taiwan in its war with China, under the Treaty of Shimonoseki signed on 17 April 1895. Local leaders declared a short-lived 'Republic of Formosa' to resist, and Japanese troops took months to subdue the island; thousands of Taiwanese died. Guerrilla resistance continued until about 1902, and Japan put down later uprisings harshly. Taiwan became Japan's first colony, a showcase meant to prove that Japan could govern an empire as well as any Western power. A governor-general appointed from Tokyo held almost unlimited authority." },
        { type: "section", head: "Building a colony", md:
          "Under administrators such as Gotō Shinpei, Japan surveyed the land, built a north–south railway completed in 1908, harbours, dams and irrigation canals, and expanded sugar and rice production for export to Japan. It introduced public health campaigns that cut malaria and plague, and primary schools that by 1943 enrolled about 70% of children. Taiwanese had few political rights and were second-class subjects, but living standards rose." },
        { type: "section", head: "Wushe", md:
          "Japan's rule was brutal toward the island's Indigenous peoples. In October 1930, angered by forced labour and abuse, Seediq warriors led by Mona Rudao attacked a sports meeting at Wushe in the central mountains, killing about 130 Japanese. The colonial army retaliated with aircraft, artillery and reportedly poison gas, and more than 600 Seediq died or killed themselves. The uprising became the subject of a popular Taiwanese film, Seediq Bale, in 2011." },
        { type: "section", head: "Becoming Japanese", md:
          "From 1937, as Japan went to war with China, it pressed Taiwanese to adopt Japanese names, speak Japanese and worship at Shinto shrines. About 200,000 Taiwanese served in Japan's army and navy as soldiers or auxiliaries, and some 30,000 died. When Japan surrendered in 1945, Taiwan passed to the Republic of China (see [[lesson:tw-9]]), whose troops many Taiwanese first welcomed, then came to resent after the massacres of 1947." },
        { type: "section", head: "Memory", md:
          "Because the Nationalists who arrived after 1945 ruled harshly, many older Taiwanese compared them unfavourably with the Japanese. A popular saying of the time went: 'the dogs left and the pigs came', meaning that the Japanese had at least guarded the house, while the newcomers only ate. That comparison, and the economic legacy, help explain why Taiwanese views of Japan are warmer than elsewhere in Asia." },
        { type: "compare", head: "Two sides of colonial rule",
          left: { head: "Built", md:
            "Railways, harbours, schools, clinics and an export economy." },
          right: { head: "Taken", md:
            "Land, political rights, Indigenous lives and Taiwanese identity." } },
        { type: "section", head: "Why it matters", md:
          "Japan's colonial legacy is one reason Taiwan's identity differs from mainland China's, and one reason Beijing reacts so sharply when Japan speaks about Taiwan today." }
      ],
      takeaways: [
        "China ceded Taiwan to Japan in 1895; Japan ruled it until 1945.",
        "Japan built railways, harbours and schools, but crushed resistance, including the Seediq uprising at Wushe in 1930.",
        "Many Taiwanese remember Japanese rule more kindly than the Nationalist rule that followed."
      ],
      check: { q: "How did Japan acquire Taiwan?",
        choices: ["It bought it from Spain", "China ceded it in the 1895 Treaty of Shimonoseki", "It was awarded it after the First World War"], answer: 1,
        explain: "Japan won it in its war with China." },
      sources: [
        { title: "The Treaty of Shimonoseki and the political shift that reshaped Taiwan's future", publisher: "Milwaukee Independent", url: "https://www.milwaukeeindependent.com/explainers/treaty-shimonoseki-political-shift-reshaped-taiwans-future/", date: "n.d." },
        { title: "Gas bombing of the Sediq", publisher: "Taipei Times", url: "https://www.taipeitimes.com/News/feat/archives/2015/10/25/2003630860", date: "2015-10-25" },
        { title: "Contrasting conceptions of colonial rule", publisher: "Taipei Times", url: "https://www.taipeitimes.com/News/feat/archives/2018/12/11/2003705889", date: "2018-12-11" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "jp_tw-2", kind: "relation", asOf: "2026-10-07",
      title: "Friends without relations",
      dek: "Japan broke diplomatic ties with Taipei in 1972 to recognise Beijing, but kept everything else. Taiwanese gave more than anyone to Japan after the 2011 tsunami, and TSMC now makes chips in Kumamoto.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_tw/jp_tw-2-hero.webp",
          alt: "Illustration of a large modern chip factory with white buildings and cooling towers among green farmland and hills in Japan.",
          caption: "TSMC's first Japanese factory opened in Kumamoto in 2024.",
          credit: "Illustration — not a photograph",
          prompt: "A large modern semiconductor factory with long white buildings, cooling towers and car parks set among green rice fields and rolling hills in southern Japan, a volcano faintly visible behind, clear spring light, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Unofficial friends", items: [
          ["1952", "Treaty of Taipei: Japan makes peace with the Republic of China"],
          ["29 Sep 1972", "Japan recognises Beijing; Taipei breaks relations"],
          ["Dec 1972", "Unofficial exchange associations set up"],
          ["Mar 2011", "Taiwan gives more than any country for tsunami relief"],
          ["Jul 2022", "Lai attends Shinzo Abe's funeral rites in Tokyo"],
          ["Feb 2024", "TSMC opens its Kumamoto factory"]
        ] },
        { type: "section", head: "From peace to break", md:
          "In 1952 Japan signed a peace treaty with the Republic of China in Taipei, which it recognised as China's government. Twenty years later, after US President Nixon's opening to Beijing, Prime Minister Kakuei Tanaka flew to China and on 29 September 1972 recognised the People's Republic. Japan said it 'fully understands and respects' Beijing's position that Taiwan is part of China, without explicitly endorsing it (see [[lesson:tw-11]]). Taipei broke off relations the same day." },
        { type: "section", head: "Embassies in all but name", md:
          "Within three months the two sides created unofficial bodies to carry on: the Interchange Association on the Japanese side, renamed the Japan–Taiwan Exchange Association in 2017, and the East Asia Relations Commission, now the Taiwan–Japan Relations Association, on Taiwan's. Staffed by diplomats 'on leave', they issue visas and handle trade. Trade, tourism and investment grew regardless. Japan is one of Taiwan's largest trading partners, and before the pandemic millions of Taiwanese visited Japan each year." },
        { type: "section", head: "Lee Teng-hui", md:
          "Taiwan's first democratically elected president, Lee Teng-hui, grew up under Japanese rule, studied at Kyoto Imperial University and spoke fluent Japanese. He was admired by Japanese conservatives, and his visits to Japan after leaving office in 2000 angered Beijing. Shinzo Abe, who called Taiwan an important partner, cultivated close ties with Taiwanese leaders; when Abe was assassinated in 2022, William Lai, then Taiwan's vice-president, attended private funeral rites in Tokyo." },
        { type: "section", head: "The tsunami", md:
          "After the earthquake and tsunami of March 2011, Taiwanese donated more than 20 billion yen, about $240 million, more than any other country, from a population of 23 million. Japanese people still thank Taiwan for it; Japan's envoy marked the 15th anniversary in 2026 by thanking Taiwanese again. Japan returned the gesture with aid after Taiwan's earthquakes, including in Hualien in 2024." },
        { type: "section", head: "Chips", md:
          "In February 2024 TSMC, the world's largest chipmaker, opened a factory in Kumamoto in southern Japan, built with large Japanese subsidies and partners Sony, Denso and Toyota, and began mass production that year. A second plant is under way. For Japan, it rebuilds a chip industry it once led; for Taiwan, it ties a key partner's economy more closely to its own." },
        { type: "compare", head: "Japan's balancing act",
          left: { head: "Official line", md:
            "Japan respects Beijing's position and keeps relations with Taiwan unofficial." },
          right: { head: "In practice", md:
            "Close economic, cultural and, increasingly, security ties." } },
        { type: "section", head: "Why it matters", md:
          "Polls show the Japanese and Taiwanese among the most favourable toward each other in Asia. That goodwill gives Tokyo room to deepen ties without formal recognition." }
      ],
      takeaways: [
        "Japan recognised Beijing in 1972, and Taiwan broke relations, but unofficial associations act as embassies.",
        "Taiwanese donated more than any country, about $240 million, after Japan's 2011 earthquake and tsunami.",
        "TSMC opened a chip factory in Kumamoto in 2024, binding the two economies more closely."
      ],
      check: { q: "What happened on 29 September 1972?",
        choices: ["Japan recognised Taiwan as independent", "Japan recognised the People's Republic of China, and Taipei broke relations", "Japan returned Taiwan to China"], answer: 1,
        explain: "Unofficial associations were created within three months." },
      sources: [
        { title: "Japan and Taiwan, 50 Years Later", publisher: "The Diplomat", url: "https://thediplomat.com/2022/10/japan-and-taiwan-50-years-later/", date: "2022-10" },
        { title: "Strong but constrained Japan-Taiwan ties", publisher: "Brookings", url: "https://www.brookings.edu/articles/strong-but-constrained-japan-taiwan-ties/", date: "n.d." },
        { title: "TSMC Celebrates the Opening of JASM in Kumamoto, Japan", publisher: "TSMC", url: "https://pr.tsmc.com/english/news/3113", date: "2024-02-24" },
        { title: "Japan envoy marks 15th anniversary of 2011 quake, thanks Taiwan", publisher: "Focus Taiwan", url: "https://focustaiwan.tw/politics/202603110012", date: "2026-03-11" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "jp_tw-3", kind: "relation", asOf: "2026-10-07",
      title: "A war next door",
      dek: "Taiwan is 110 kilometres from Japan's westernmost island. Prime Minister Takaichi has said a Chinese attack on Taiwan could draw in Japan's forces, and Japan and the US are putting missiles on Yonaguni.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_tw/jp_tw-3-hero.webp",
          alt: "Illustration of a small subtropical island with cliffs, a lighthouse and a radar dome, a mountainous coastline faint on the horizon.",
          caption: "On a clear day, Taiwan's mountains can be seen from Yonaguni.",
          credit: "Illustration — not a photograph",
          prompt: "A small subtropical island with green hills and steep cliffs, a white lighthouse and a radar dome on the headland, turquoise sea, a faint mountainous coastline on the far horizon, clear morning, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Closer to the front", items: [
          ["2016", "Japan stations troops on Yonaguni"],
          ["Aug 2022", "Chinese missiles land in Japan's exclusive economic zone"],
          ["7 Nov 2025", "Takaichi's remark on a Taiwan contingency"],
          ["Nov 2025–Jan 2026", "China retaliates with travel, seafood and export bans"],
          ["Feb 2026", "Japan plans air-defence missiles on Yonaguni"],
          ["19–29 Oct 2026", "US Marines to bring anti-ship missiles to Yonaguni"]
        ] },
        { type: "section", head: "Why Japan cares", md:
          "Yonaguni, Japan's westernmost inhabited island, lies about 110 kilometres from Taiwan. Most of Japan's oil and trade passes through waters near Taiwan, and Japan hosts the American forces, in Okinawa and elsewhere, that would be central to any defence of the island. When China fired missiles around Taiwan in August 2022, after a visit by US House Speaker Nancy Pelosi, five landed in Japan's exclusive economic zone. Japanese leaders increasingly say that a Taiwan emergency is a Japanese emergency." },
        { type: "section", head: "Takaichi's remark", md:
          "On 7 November 2025 Prime Minister Sanae Takaichi told the Diet that a Chinese naval blockade or use of force against Taiwan could become a 'survival-threatening situation' for Japan, the legal condition that lets its forces act alongside an ally. Earlier leaders had avoided saying so. China demanded a retraction, which she refused, and retaliated: it told its citizens not to visit Japan, suspended seafood imports and banned exports of some rare earths (see [[lesson:jp-6]]). Taiwan's leaders welcomed her words." },
        { type: "section", head: "Missiles on Yonaguni", md:
          "Japan has been fortifying its southwestern islands for a decade, stationing troops, radar and missile units from Kyushu to Yonaguni. In February 2026 Defence Minister Shinjiro Koizumi said Japan would deploy medium-range surface-to-air missiles to Yonaguni by fiscal 2030. And during the Keen Sword exercise from 19 to 29 October 2026, US Marines are due to bring their NMESIS anti-ship missile system to Yonaguni for the first time, to practise defending the island chain." },
        { type: "section", head: "Islanders' worries", md:
          "Yonaguni's 1,700 residents are divided. Some welcome the troops, who have brought jobs and young families; others fear the island will become a target. Japan has drawn up plans to evacuate the people of its southernmost islands, including Yonaguni, to Kyushu in an emergency." },
        { type: "section", head: "Taiwan's view", md:
          "Taiwan's government welcomes Japan's stance and wants closer, if unofficial, security contacts, such as coastguard cooperation. Japan stops short of any formal security link, but retired Japanese officers and Taiwanese officials hold regular war games together, and lawmakers' exchanges have grown (see [[lesson:tw-7]])." },
        { type: "compare", head: "Japan's choice",
          left: { head: "Speak up", md:
            "Making clear Japan would act deters China and reassures Taiwan and the US." },
          right: { head: "Stay quiet", md:
            "Ambiguity avoids provoking Beijing and keeps trade with China flowing." } },
        { type: "section", head: "Why it matters", md:
          "Japan is now openly part of the deterrence around Taiwan. That raises the stakes of any crisis in the strait, and makes Japan's relations with China hostage to Taiwan's fate." }
      ],
      takeaways: [
        "Yonaguni, Japan's westernmost island, is about 110 km from Taiwan; Japan has stationed troops and plans missiles there.",
        "Takaichi said in November 2025 that a Chinese attack on Taiwan could be a 'survival-threatening situation' for Japan.",
        "US Marines are due to bring NMESIS anti-ship missiles to Yonaguni for the first time in October 2026."
      ],
      check: { q: "What is significant about Takaichi calling a Taiwan crisis a 'survival-threatening situation'?",
        choices: ["It means Japan would recognise Taiwan", "It is the legal condition allowing Japan's forces to act alongside an ally", "It ends Japan's alliance with the US"], answer: 1,
        explain: "Earlier prime ministers had avoided saying so explicitly." },
      sources: [
        { title: "Japan to deploy missiles to Yonaguni Island by fiscal 2030, defense chief says", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/02/24/japan/koizumi-japan-missiles-yonaguni-fiscal-2030/", date: "2026-02-24" },
        { title: "U.S. to put missile system on island near Taiwan for drills", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/10/02/japan/politics/us-missile-yonaguni-drills/", date: "2026-10-02" },
        { title: "Japan's Taiwan Policy: Strategic Shift or Tactical Adaptation?", publisher: "The Washington Quarterly", url: "https://www.tandfonline.com/doi/full/10.1080/0163660X.2025.2593112", date: "2025" },
        { title: "JMOD Details Type-03 Missile Plans In Briefing to Yonaguni Residents", publisher: "Asian Military Review", url: "https://www.asianmilitaryreview.com/2026/04/jmod-details-type-03-missile-plans-in-briefing-to-yonaguni-residents-nsbt/", date: "2026-04" }
      ]
    }
  ]
});
