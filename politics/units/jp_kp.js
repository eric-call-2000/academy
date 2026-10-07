/* ============================================================
   Relationship — Japan & North Korea 🇯🇵🇰🇵
   Colonial rule, Koreans in Japan and the 'return' of 93,000 to
   a promised paradise; the abductions and Koizumi's 2002 summit;
   and missiles over Japan and Takaichi's push for a summit.
   Japan–South Korea is in jp_kr.
   Research note and sources: tools/research/jp_kp.md
   Current as of 7 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("jp_kp", {
  id: "jp_kp",
  asOf: "2026-10-07",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "jp_kp-1", kind: "relation", asOf: "2026-10-07",
      title: "Colony, exiles and a 'paradise'",
      dek: "Japan ruled Korea for 35 years. Afterwards, from 1959, more than 93,000 Koreans in Japan, and thousands of their Japanese wives, sailed to North Korea, promised a paradise on earth.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_kp/jp_kp-1-hero.webp",
          alt: "Illustration of a large passenger ship leaving a snowy Japanese port in 1959, a crowd waving from the quay.",
          caption: "Repatriation ships left the port of Niigata for North Korea from December 1959.",
          credit: "Illustration — not a photograph",
          prompt: "A large white passenger ship of the 1950s leaving a snowy Japanese harbour, a crowd on the quay waving paper streamers and plain banners, grey winter sea and sky, warehouses behind, historical documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Empire and exodus", items: [
          ["1910", "Japan annexes Korea"],
          ["1945", "Japan's defeat ends colonial rule; Korea is divided"],
          ["1955", "Chongryon, the pro-North association of Koreans in Japan, is founded"],
          ["Dec 1959", "First repatriation ship sails from Niigata"],
          ["1959–84", "About 93,000 people move to North Korea"],
          ["1965", "Japan recognises South Korea, not the North"]
        ] },
        { type: "section", head: "Colonial rule", md:
          "Japan annexed Korea in 1910 and ruled it until 1945 (see [[lesson:jp-10]]). It built railways, mines and factories, mostly in the industrial north, but suppressed Korean language and culture, forced Koreans to take Japanese names, and in the Second World War mobilised hundreds of thousands as labourers and soldiers and forced women into military brothels. North Korea's founding story is built on resistance to Japan: Kim Il Sung's legitimacy rested on his years as a guerrilla against Japanese forces in Manchuria." },
        { type: "section", head: "Koreans in Japan", md:
          "By 1945 about two million Koreans lived in Japan, many brought as labourers. Most went home, but around 600,000 stayed. They lost Japanese nationality in 1952 and faced heavy discrimination in jobs and housing. Many, especially from poor families, sympathised with the North, and in 1955 they founded Chongryon, a pro-Pyongyang association that ran its own schools, banks and businesses and acted as North Korea's de facto embassy in Japan." },
        { type: "section", head: "The return", md:
          "In 1959, with the help of the Japanese and North Korean Red Cross societies, a 'repatriation' programme began. Chongryon's campaigns portrayed North Korea as a socialist paradise with free housing, education and jobs; Japan's government welcomed the chance to reduce a poor minority it saw as a burden. From December 1959 ships carried people from Niigata to the North Korean port of Chongjin. By 1984 about 93,000 had gone, including more than 6,600 Japanese nationals, most of them Japanese wives of Korean men." },
        { type: "section", head: "The reality", md:
          "The 'returnees', most of whom had roots in the South, found poverty and suspicion. Many were classed as politically unreliable and sent to remote areas or prison camps; letters home asked relatives to send money, food and medicine. Japanese wives were promised visits home within three years; only a few dozen ever made it, decades later. Some returnees and their children later escaped back to Japan, and in 2018 several sued North Korea's government in Tokyo; in 2024 the Tokyo High Court ruled that Japanese courts could hear the case." },
        { type: "section", head: "No relations", md:
          "When Japan normalised relations with South Korea in 1965, it recognised Seoul as Korea's only lawful government. Japan and North Korea have never established diplomatic relations." },
        { type: "compare", head: "The repatriation remembered",
          left: { head: "Official story then", md:
            "A humanitarian return of Koreans to their socialist homeland." },
          right: { head: "What survivors describe", md:
            "A deception that led tens of thousands into poverty and repression." } },
        { type: "section", head: "Why it matters", md:
          "The colonial past gives North Korea a grievance it uses against Japan, and Pyongyang has long demanded reparations. The returnees' fate is a lesser-known human cost of the Cold War that both governments preferred to forget." }
      ],
      takeaways: [
        "Japan ruled Korea from 1910 to 1945; North Korea's founding myth is built on resistance to Japan.",
        "From 1959 to 1984 about 93,000 people, including Japanese wives, moved from Japan to North Korea, promised a paradise.",
        "Japan and North Korea have never had diplomatic relations."
      ],
      check: { q: "What was Chongryon?",
        choices: ["A North Korean spy agency", "The pro-Pyongyang association of Koreans in Japan", "A Japanese shipping company"], answer: 1,
        explain: "It ran schools and businesses and acted as North Korea's de facto embassy." },
      sources: [
        { title: "An Overview of North Korea-Japan Relations", publisher: "National Committee on North Korea", url: "https://www.ncnk.org/resources/briefing-papers/all-briefing-papers/overview-north-korea-japan-relations", date: "n.d." },
        { title: "Japan's Hidden Role in the 'Return' of Zainichi Koreans to North Korea", publisher: "History News Network", url: "https://www.hnn.us/article/japans-hidden-role-in-the-return-of-zainichi-korea", date: "n.d." },
        { title: "Japanese Wives in North Korea", publisher: "International Institute for Asian Studies", url: "https://www.iias.asia/the-newsletter/article/japanese-wives-north-korea", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "jp_kp-2", kind: "relation", asOf: "2026-10-07",
      title: "The abductions",
      dek: "In the 1970s and 1980s North Korean agents kidnapped Japanese citizens from beaches and city streets. In 2002 Kim Jong Il admitted it. Five came home; Japan is still waiting for the rest.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_kp/jp_kp-2-hero.webp",
          alt: "Illustration of a deserted Japanese beach at dusk on the Sea of Japan, a small boat offshore and a coastal town's lights.",
          caption: "Many of the abductees were seized near beaches on Japan's western coast.",
          credit: "Illustration — not a photograph",
          prompt: "A deserted sandy beach on the Sea of Japan coast at dusk, pine trees on the dunes, a small dark boat waiting offshore, distant lights of a coastal town, cold blue twilight, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Taken", items: [
          ["1977", "Megumi Yokota, 13, kidnapped walking home in Niigata"],
          ["1977–83", "At least 17 Japanese abducted, Japan says"],
          ["17 Sep 2002", "Koizumi in Pyongyang; Kim Jong Il admits abductions"],
          ["Oct 2002", "Five abductees return to Japan"],
          ["2004", "Remains said to be Megumi's fail Japanese DNA tests"],
          ["2014", "Stockholm agreement on a new investigation collapses"]
        ] },
        { type: "section", head: "Vanished", md:
          "From the late 1970s, Japanese people began disappearing along the Sea of Japan coast. On 15 November 1977 Megumi Yokota, a 13-year-old schoolgirl, vanished on her way home from badminton practice in Niigata. Couples disappeared from beaches. For years police suspected North Korea but could not prove it, and many Japanese dismissed the idea. North Korea, it later emerged, wanted Japanese people to teach its spies the language and customs, or to steal their identities." },
        { type: "section", head: "Koizumi's summit", md:
          "On 17 September 2002 Prime Minister Junichiro Koizumi flew to Pyongyang for the first-ever summit between the two countries. To the shock of the Japanese delegation, Kim Jong Il admitted that 'special agencies' had abducted 13 Japanese citizens, and apologised. He said five were alive and eight dead, including Megumi, who he claimed had killed herself. The two leaders signed the Pyongyang Declaration, in which Japan expressed remorse for colonial rule and promised economic aid after normalisation." },
        { type: "section", head: "Outrage", md:
          "The five survivors came home in October 2002 for what was meant to be a short visit; Japan refused to send them back. Their children followed in 2004. But Japanese anger at the deaths, and at the evidence North Korea offered, overwhelmed hopes of normal relations. Death certificates appeared to be forged, and remains said to be Megumi's failed DNA tests in Japan. Japan officially lists 17 abductees and suspects hundreds more cases." },
        { type: "section", head: "A national cause", md:
          "The abductions became one of Japan's most emotional political issues. Megumi's parents, Shigeru and Sakie Yokota, campaigned for decades; Shigeru died in 2020 without seeing her again, and Sakie, now in her 90s, still speaks at rallies. Shinzo Abe built his political career partly on the issue. Japan insists that no normalisation or aid is possible until it is resolved. A 2014 agreement in Stockholm for North Korea to reinvestigate collapsed within two years." },
        { type: "section", head: "Pyongyang's position", md:
          "North Korea says the issue was settled in 2002, that the eight are dead, and that Japan is using the abductions to avoid paying for colonial crimes." },
        { type: "compare", head: "Two demands",
          left: { head: "Japan", md:
            "Return every abductee, and the truth about those said to be dead." },
          right: { head: "North Korea", md:
            "The issue is closed; Japan owes reparations for 35 years of colonial rule." } },
        { type: "section", head: "Why it matters", md:
          "The abductions have blocked every attempt at better relations for more than two decades. Families are ageing, and Japanese leaders feel pressure to bring someone home while parents are still alive." }
      ],
      takeaways: [
        "North Korean agents abducted Japanese citizens in the 1970s and 1980s; Japan lists 17 cases.",
        "At the 2002 Koizumi–Kim summit, Kim Jong Il admitted 13 abductions; five abductees returned.",
        "Japan rejects North Korea's claim that the others are dead, and makes the issue a condition for normal relations."
      ],
      check: { q: "What did Kim Jong Il admit to Koizumi in 2002?",
        choices: ["Building nuclear weapons", "That North Korean agents had abducted 13 Japanese citizens", "Sinking a Japanese ship"], answer: 1,
        explain: "He said five were alive and eight dead." },
      sources: [
        { title: "North Korea's Abduction of Japanese Citizens and the Six-Party Talks", publisher: "Congressional Research Service (EveryCRSReport)", url: "https://www.everycrsreport.com/reports/RS22845.html", date: "2008" },
        { title: "Mr. Koizumi Goes to Pyongyang", publisher: "Comparative Connections (Pacific Forum)", url: "https://cc.pacforum.org/2002/10/mr-koizumi-goes-pyongyang/", date: "2002-10" },
        { title: "Time running out for families of Japanese abducted by North Korea", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2022/10/14/national/north-korea-abductees-time-running-out/", date: "2022-10-14" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "jp_kp-3", kind: "relation", asOf: "2026-10-07",
      title: "Missiles overhead and a summit offer",
      dek: "North Korean missiles have flown over Japan, setting off sirens. Japan has answered with missile defences and counterstrike weapons, while Prime Minister Takaichi asks Kim for a summit on the abductees.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_kp/jp_kp-3-hero.webp",
          alt: "Illustration of a missile-defence launcher vehicle deployed on a grassy slope above a Japanese city at dawn.",
          caption: "Japan deploys Patriot interceptors when North Korea threatens launches.",
          credit: "Illustration — not a photograph",
          prompt: "A missile-defence launcher truck with raised canisters deployed on a grassy slope above a Japanese city at dawn, low apartment blocks and a river below, pale pink sky with a thin contrail, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Threats and offers", items: [
          ["Aug 1998", "A Taepodong rocket flies over Japan"],
          ["Aug–Sep 2017", "Two missiles over Hokkaido; J-Alert sirens"],
          ["4 Oct 2022", "First missile over Japan in five years"],
          ["Dec 2022", "Japan decides to acquire counterstrike missiles"],
          ["Mar 2026", "Kim's sister rejects a summit with Takaichi"],
          ["Sep 2026", "Takaichi asks Trump to help broker a meeting"]
        ] },
        { type: "section", head: "Over Japan", md:
          "In August 1998 North Korea launched a Taepodong rocket that flew over northern Japan and landed in the Pacific, shocking a country that had felt safe from its neighbour. Japan responded by launching its own spy satellites and joining the United States in developing missile defences. In 2017 two North Korean missiles flew over Hokkaido, and on 4 October 2022 another flew some 4,500 kilometres over northern Japan, the first in five years. Japan's J-Alert system sounded sirens and told residents to take shelter, and trains stopped." },
        { type: "section", head: "Japan arms", md:
          "North Korea's missiles, along with China's growing power, have pushed Japan to change long-standing defence policies. Japan has built Aegis destroyers and Patriot batteries to intercept missiles. In December 2022 it decided to acquire 'counterstrike' capabilities, including US-made Tomahawk cruise missiles, able to hit launch sites in another country, a major shift for a country whose constitution renounces war. It is also doubling defence spending toward 2% of GDP." },
        { type: "section", head: "Takaichi's offer", md:
          "Prime Minister Sanae Takaichi, a long-time campaigner on the abductions, said soon after taking office in 2025 that she wanted to meet Kim Jong Un. In March 2026 Kim's sister, Kim Yo Jong, rejected the idea, saying talks would not happen just because Japan wanted them. Takaichi has persisted: at a rally on 30 May she called on Kim to hold summit talks, and in September she asked President Trump to encourage Kim to accept a meeting with Japan if a US–North Korea summit takes place (see [[lesson:us_kp-3]])." },
        { type: "section", head: "Three-way pressure", md:
          "Japan, South Korea and the United States now hold regular trilateral talks and military exercises aimed at North Korea, and share missile-warning data in real time. North Korea condemns the drills as rehearsals for invasion, and its partnership with Russia (see [[lesson:ru_kp-3]]) gives it a powerful protector that Japan cannot easily influence." },
        { type: "section", head: "Little contact", md:
          "Japan and North Korea have no embassies, no direct flights and almost no trade; Japan banned North Korean imports and port calls by its ships in 2006. Contacts happen through embassies in third countries such as China and Mongolia." },
        { type: "compare", head: "Japan's two goals",
          left: { head: "Security", md:
            "Deter and defend against North Korea's missiles and nuclear weapons." },
          right: { head: "The abductees", md:
            "Talk to Kim directly to bring surviving abductees home." } },
        { type: "section", head: "Why it matters", md:
          "Japan is within range of most of North Korea's missiles. Any Trump–Kim deal that eases pressure on Pyongyang without addressing short-range missiles or the abductions would leave Japan exposed." }
      ],
      takeaways: [
        "North Korean missiles have flown over Japan several times, most recently in October 2022, setting off J-Alert sirens.",
        "Japan has built missile defences and is acquiring counterstrike missiles such as Tomahawks.",
        "Takaichi wants a summit with Kim on the abductees and asked Trump to help; Pyongyang has so far refused."
      ],
      check: { q: "What did Japan decide in December 2022?",
        choices: ["To normalise relations with North Korea", "To acquire counterstrike missiles able to hit launch sites abroad", "To leave the alliance with the US"], answer: 1,
        explain: "It was a major shift for a country whose constitution renounces war." },
      sources: [
        { title: "North Korea fires ballistic missile over Japan for first time since 2017", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2022/10/04/national/north-korea-appears-launch-ballistic-missile-japan/", date: "2022-10-04" },
        { title: "Kim's sister rules out Pyongyang summit with Takaichi", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/03/24/japan/politics/kim-sister-denies-summit/", date: "2026-03-24" },
        { title: "Takaichi asks North Korea for summit to solve abduction issue", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/05/31/japan/politics/takaichi-north-korea-summit-abduction-issue/", date: "2026-05-31" },
        { title: "Takaichi asked Trump to broker Japan-North Korea summit", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/10/06/japan/takaichi-trump-north-korea-abductee/", date: "2026-10-06" }
      ]
    }
  ]
});
