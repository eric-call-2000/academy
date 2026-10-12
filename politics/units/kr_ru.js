/* ============================================================
   Relationship — South Korea & Russia 🇰🇷🇷🇺
   A king who hid in the Russian legation, the Soviet division
   of Korea and the downing of KAL 007; recognition in 1990,
   cars, ships and gas; and North Korean troops for Russia,
   Hyundai's lost factory and Seoul's cautious outreach.
   North Korea–Russia is in ru_kp.
   Research note and sources: tools/research/kr_ru.md
   Current as of 11 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("kr_ru", {
  id: "kr_ru",
  asOf: "2026-10-11",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "kr_ru-1", kind: "relation", asOf: "2026-10-11",
      title: "A king's refuge and a downed airliner",
      dek: "In 1896 Korea's king fled to the Russian legation for safety. Fifty years later Soviet troops divided Korea, and in 1983 a Soviet fighter shot down a Korean airliner, killing all 269 aboard.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr_ru/kr_ru-1-hero.webp",
          alt: "Illustration of a white 19th-century European-style legation building with a tower on a hill above traditional Korean tiled roofs.",
          caption: "King Gojong ruled from the Russian legation in Seoul for a year from February 1896.",
          credit: "Illustration — not a photograph",
          prompt: "A white 19th-century European-style legation building with a small square tower on a hill above the curved grey tiled roofs of traditional Korean houses and a palace wall, pine trees, winter afternoon light, historical documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Russia and Korea", items: [
          ["1884", "Korea and Russia sign a treaty of friendship"],
          ["Feb 1896", "King Gojong flees to the Russian legation"],
          ["1904–05", "Japan defeats Russia; Korea falls under Japan"],
          ["Aug 1945", "Soviet troops occupy northern Korea"],
          ["1950–53", "Moscow arms the North in the Korean War"],
          ["1 Sep 1983", "Soviet fighter shoots down KAL 007"]
        ] },
        { type: "section", head: "The king's refuge", md:
          "In the 1890s Korea's Joseon kingdom was caught between Japan, China and Russia. In October 1895 Japanese agents murdered Korea's Queen Min in her palace. Fearing for his life, King Gojong fled in disguise on 11 February 1896 to the Russian legation in Seoul, and governed from there for a year. Russian influence rose sharply while he stayed, and Russia gained timber and mining concessions. Gojong returned to his palace in 1897 and proclaimed the Korean Empire." },
        { type: "section", head: "Japan wins", md:
          "Russia's ambitions in Manchuria and Korea led to war with Japan in 1904. Japan's victory in 1905 ended Russian influence; Korea became a Japanese protectorate and, in 1910, a colony." },
        { type: "section", head: "Division", md:
          "In August 1945 Soviet troops entered northern Korea as Japan collapsed, while Americans landed in the south; the line between them at the 38th parallel became a border (see [[lesson:kr-9]]). The Soviets installed Kim Il Sung in the north and armed his invasion of the South in 1950 (see [[lesson:ru_kp-1]]). For the next four decades South Korea and the Soviet Union had no diplomatic relations, and the Soviet Union was South Korea's enemy." },
        { type: "section", head: "KAL 007", md:
          "On 1 September 1983 Korean Air Lines Flight 007, flying from New York to Seoul via Anchorage, strayed into Soviet airspace over Kamchatka and Sakhalin. A Soviet Su-15 fighter shot it down, killing all 269 people aboard, including 62 Americans, among them a US congressman. The Soviet Union first denied involvement, then said the plane was on a spy mission. The disaster provoked worldwide outrage, and led the United States to open its GPS satellite navigation system to civilian use." },
        { type: "section", head: "Koreans of Russia", md:
          "Koreans had migrated to Russia's Far East from the 1860s. In 1937 Stalin deported about 172,000 of them to Central Asia, fearing they would spy for Japan. Their descendants, the Koryo-saram, live across the former Soviet Union, and many have since moved to South Korea for work." },
        { type: "section", head: "Thaw", md:
          "By the late 1980s both sides wanted change. South Korea's President Roh Tae-woo pursued 'Nordpolitik', opening to communist countries, and the Soviet Union, under Gorbachev, needed trade and credit." },
        { type: "compare", head: "Russia in Korean memory",
          left: { head: "Protector", md:
            "A refuge for Korea's king against Japan in 1896." },
          right: { head: "Threat", md:
            "The power that divided Korea, armed the North and shot down KAL 007." } },
        { type: "section", head: "Why it matters", md:
          "Russia has long been a great power on Korea's border. Its choices, from 1896 to 1950 to today, have repeatedly shaped the peninsula's fate." }
      ],
      takeaways: [
        "King Gojong took refuge in the Russian legation in Seoul in 1896, after Japanese agents murdered the queen.",
        "Soviet troops occupied northern Korea in 1945 and armed the North in the Korean War.",
        "In 1983 a Soviet fighter shot down Korean Air Lines Flight 007, killing all 269 aboard."
      ],
      check: { q: "What happened to Korean Air Lines Flight 007 in 1983?",
        choices: ["It was hijacked to North Korea", "It strayed into Soviet airspace and was shot down, killing all 269 aboard", "It crashed in a storm"], answer: 1,
        explain: "The Soviet Union later claimed it was a spy plane." },
      sources: [
        { title: "Gojong's internal exile to the Russian legation", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gojong's_internal_exile_to_the_Russian_legation", date: "n.d." },
        { title: "Korean Air Lines Flight 007", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Korean_Air_Lines_Flight_007", date: "n.d." },
        { title: "Russia–South Korea relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Russia%E2%80%93South_Korea_relations", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "kr_ru-2", kind: "relation", asOf: "2026-10-11",
      title: "Cars, ships and gas",
      dek: "Seoul and Moscow established relations in 1990. Korean cars, phones and ships flooded into Russia, and trade boomed, until the war in Ukraine put it into reverse.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr_ru/kr_ru-2-hero.webp",
          alt: "Illustration of a large car factory with long white buildings and parked rows of new cars beside a snowy road at dusk.",
          caption: "Hyundai's St Petersburg plant made hundreds of thousands of cars a year before 2022.",
          credit: "Illustration — not a photograph",
          prompt: "A large car factory with long white buildings and a tall chimney, rows of new parked cars covered in light snow in a vast car park beside a road at winter dusk, birch trees and street lamps, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Business partners", items: [
          ["30 Sep 1990", "South Korea and the Soviet Union establish relations"],
          ["Dec 1990", "Roh Tae-woo visits Moscow"],
          ["1991", "Seoul extends $3 billion in credit to Moscow"],
          ["2010", "Hyundai opens a plant in St Petersburg"],
          ["2014", "Visa-free travel between the two"],
          ["2021", "Trade near its peak"]
        ] },
        { type: "section", head: "Recognition", md:
          "On 30 September 1990 South Korea and the Soviet Union established diplomatic relations, a triumph for Roh Tae-woo's Nordpolitik and a blow to North Korea (see [[lesson:ru_kp-2]]). Roh visited Moscow that December, and Seoul extended $3 billion in loans to the struggling Soviet economy. Russia, which inherited the Soviet seat, became a partner in trade and, for a time, in diplomacy on the North." },
        { type: "section", head: "Cars and phones", md:
          "South Korean companies saw a huge market. Hyundai and Kia cars became among the best-selling in Russia; in 2010 Hyundai opened a factory in St Petersburg that could build more than 200,000 cars a year. Samsung and LG sold televisions, phones and appliances, and built factories near Moscow and in Kaluga. Korean instant noodles, especially the Doshirak brand, became a Russian staple, and Korean pop culture, from K-pop to television dramas, won a large following among young Russians." },
        { type: "section", head: "Energy and ships", md:
          "Russia sold South Korea oil, coal, natural gas from Sakhalin, and seafood. Korean shipyards built some of the world's largest ice-class tankers to carry liquefied natural gas from Russia's Arctic Yamal project, sailing through ice along the Northern Sea Route. Plans for a gas pipeline and a railway from Russia through North Korea to the South, discussed for decades, never materialised because of the North." },
        { type: "section", head: "Space and science", md:
          "Russia trained South Korea's first astronaut, Yi So-yeon, who flew to the International Space Station in 2008 on a Russian rocket, and helped develop the first stage of Korea's Naro space launcher, which reached orbit in 2013." },
        { type: "section", head: "Peak", md:
          "Trade grew for three decades and was near its peak in 2021, when Korea was one of Russia's leading Asian trading partners; the two allowed visa-free travel from 2014. South Korea kept its distance from Western sanctions after Russia annexed Crimea in 2014." },
        { type: "section", head: "Diplomacy", md:
          "Russia joined the six-party talks on North Korea's nuclear programme from 2003 and, until 2022, voted for UN sanctions on Pyongyang. South Korean leaders, especially progressives such as Moon Jae-in, hoped Moscow could help coax the North into engagement, and Putin and Moon met several times to discuss railway and pipeline links through the peninsula." },
        { type: "compare", head: "The bargain",
          left: { head: "Seoul gained", md:
            "A huge market for cars and electronics, and energy supplies." },
          right: { head: "Moscow gained", md:
            "Investment, technology and a partner that balanced its ties to the North." } },
        { type: "section", head: "Why it matters", md:
          "For thirty years South Korea treated Russia as a market and a partner, not a threat. The war in Ukraine, and Russia's alliance with North Korea, changed that." }
      ],
      takeaways: [
        "South Korea and the Soviet Union established diplomatic relations on 30 September 1990.",
        "Korean cars, electronics and ships sold well in Russia; Hyundai built a plant in St Petersburg in 2010.",
        "Trade grew for three decades and was near its peak in 2021."
      ],
      check: { q: "When did South Korea and the Soviet Union establish diplomatic relations?",
        choices: ["1953", "1990", "2000"], answer: 1,
        explain: "It was a triumph of Roh Tae-woo's Nordpolitik." },
      sources: [
        { title: "SOVIET UNION OPENS TIES WITH S. KOREA", publisher: "The Washington Post", url: "https://www.washingtonpost.com/archive/politics/1990/10/01/soviet-union-opens-ties-with-s-korea/57ed3692-0420-4b44-990b-d244e4145de3/", date: "1990-10-01" },
        { title: "Russia–South Korea relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Russia%E2%80%93South_Korea_relations", date: "n.d." },
        { title: "Russia-South Korea ties: Drifting, Holding, or Hardening?", publisher: "Observer Research Foundation", url: "https://www.orfonline.org/expert-speak/russia-south-korea-ties-drifting-holding-or-hardening", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "kr_ru-3", kind: "relation", asOf: "2026-10-11",
      title: "North Korean troops and a lost factory",
      dek: "Russia's war in Ukraine, and the North Korean soldiers who fought in it, turned Moscow into a threat. Hyundai lost its Russian plant, trade collapsed, and Seoul is trying carefully to reopen a channel.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr_ru/kr_ru-3-hero.webp",
          alt: "Illustration of an empty car factory yard in winter with gates closed and snow on the ground, a single light on.",
          caption: "Hyundai sold its St Petersburg plant for a token price, and its option to buy it back lapsed in January 2026.",
          credit: "Illustration — not a photograph",
          prompt: "An empty car factory yard in winter with high gates closed, snow covering the ground and empty parking rows, long white buildings dark except for a single lit window, grey dusk, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "From partner to problem", items: [
          ["Feb 2022", "Seoul joins sanctions on Russia"],
          ["Dec 2023", "Hyundai sells its Russian plant for a token price"],
          ["Jun 2024", "Russia–North Korea defence treaty"],
          ["Oct 2024", "North Korean troops deploy to Kursk"],
          ["Jan 2026", "Hyundai's buyback option lapses; Putin hopes to restore ties"],
          ["Sep 2026", "Seoul skips Russia's Eastern Economic Forum"]
        ] },
        { type: "section", head: "Sanctions", md:
          "When Russia invaded Ukraine in 2022, South Korea joined Western export controls, despite its trade with Russia, and Russia put it on its list of 'unfriendly' countries. Seoul sent Ukraine humanitarian aid and sold large quantities of artillery shells to the United States and tanks and howitzers to Poland, freeing Western stocks for Ukraine, but refused to send weapons to Ukraine directly." },
        { type: "section", head: "Troops from the North", md:
          "The 2024 Russia–North Korea treaty and the deployment of North Korean soldiers to Kursk (see [[lesson:kp-5]]) alarmed Seoul. Its intelligence service tracked the deployments, and officials warned that Russia might help the North with missiles, satellites or submarines in return. President Yoon Suk Yeol said South Korea might reconsider supplying weapons to Ukraine; it did not. Russia warned that doing so would destroy relations." },
        { type: "section", head: "A lost factory", md:
          "Korean companies left or scaled back. In December 2023 Hyundai sold its St Petersburg plant to a Russian buyer for a symbolic price, reported at 140,000 won, about $97, with an option to buy it back within two years. Hyundai said it could not use the option while the war continued, and it lapsed in January 2026. By one count trade fell from $17.4 billion in 2021 to $6.9 billion in 2024." },
        { type: "section", head: "Lee's outreach", md:
          "President Lee Jae-myung, elected in June 2025, promised to move swiftly to improve ties with China and Russia, arguing that geography and economics made separation impossible. Dialogue resumed; LG restarted a factory near Moscow, and resuming direct flights has been discussed. In January 2026 Putin said he hoped to restore relations with Seoul as he received South Korea's new ambassador." },
        { type: "section", head: "Limits", md:
          "The North remains the obstacle. Seoul has pressed Moscow over its military partnership with Pyongyang, so far without result, and in September 2026 skipped Russia's Eastern Economic Forum amid speculation that Kim Jong Un might attend." },
        { type: "section", head: "Arctic hopes", md:
          "Korean shipbuilders and energy companies still eye Russia's Arctic gas projects and the Northern Sea Route, should sanctions ever be lifted." },
        { type: "compare", head: "Seoul's dilemma",
          left: { head: "Engage", md:
            "Keep a channel open to restrain Russia's help to the North and protect business." },
          right: { head: "Confront", md:
            "Russia arms the North; Seoul should stand firmly with Ukraine and the West." } },
        { type: "section", head: "Why it matters", md:
          "Russia's alliance with North Korea is the biggest change on the peninsula in decades. How Seoul handles Moscow will shape its security long after the war in Ukraine." }
      ],
      takeaways: [
        "South Korea joined sanctions on Russia in 2022 and sold shells and tanks to allies, but sent no weapons to Ukraine directly.",
        "North Korean troops fighting for Russia alarmed Seoul; trade fell to about $6.9 billion in 2024.",
        "Hyundai sold its Russian plant for about $97 in 2023; President Lee is cautiously trying to reopen ties."
      ],
      check: { q: "What happened to Hyundai's St Petersburg factory?",
        choices: ["It was nationalised in 2022", "It was sold for a token price in 2023, and the buyback option lapsed in 2026", "It still makes Hyundai cars"], answer: 1,
        explain: "Hyundai said it could not buy it back while the war continued." },
      sources: [
        { title: "Hyundai Sells St. Petersburg Auto Plant", publisher: "The Moscow Times", url: "https://www.themoscowtimes.com/2023/12/19/hyundai-sells-st-petersburg-auto-plant-a83473", date: "2023-12-19" },
        { title: "Hyundai shifts emerging market focus after Russia plant buyback lapses", publisher: "UPI", url: "https://www.upi.com/Top_News/World-News/2026/02/02/hyundai-motor-strategy-russia-plant-india-southeast-asia/2871770078398/", date: "2026-02-02" },
        { title: "Putin says hopes to restore S. Korea-Russia relations", publisher: "The Korea Times", url: "https://www.koreatimes.co.kr/foreignaffairs/20260116/putin-says-hopes-to-restore-s-korea-russia-relations-report", date: "2026-01-16" },
        { title: "South Korea skips Russia's Eastern Economic Forum in Vladivostok", publisher: "Korea JoongAng Daily", url: "https://www.koreajoongangdaily.com/korea/south-korea-to-skip-russias-economic-forum/12851826", date: "2026" },
        { title: "South Korea's Lee Jae-myung caps first month in office with pledge to improve China, Russia ties", publisher: "South China Morning Post", url: "https://www.scmp.com/news/china/diplomacy/article/3316801/south-koreas-lee-jae-myung-caps-first-month-office-pledge-improve-china-russia-ties", date: "2025-07" }
      ]
    }
  ]
});
