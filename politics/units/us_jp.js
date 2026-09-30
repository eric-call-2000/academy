/* ============================================================
   Relationship — United States & Japan 🇺🇸🇯🇵
   From occupation to the alliance at the heart of US power in
   Asia; Okinawa, which carries most of the bases; and trade
   fights from 'Japan-bashing' to a $550 billion investment deal.
   Japan's post-war rise is in jp-3 and jp-11.
   Research note and sources: tools/research/us_jp.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_jp", {
  id: "us_jp",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_jp-1", kind: "relation", asOf: "2026-09-30",
      title: "From enemies to allies",
      dek: "Four years after Pearl Harbor and Hiroshima, the United States was rewriting Japan's constitution. Six years after that, the two were allies. The alliance is now the backbone of American power in Asia.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_jp/us_jp-1-hero.webp",
          alt: "Illustration of a large grey aircraft carrier moored in a Japanese harbour with green hills and houses behind.",
          caption: "Yokosuka, near Tokyo, is home port of the US Seventh Fleet's aircraft carrier.",
          credit: "AI illustration — not a photograph",
          prompt: "A large grey aircraft carrier moored at a naval pier in a Japanese harbour, forested green hills and small houses rising behind, cranes and smaller warships nearby, soft morning haze, calm and powerful, no people close up, no flags, no legible text or hull numbers." },
        { type: "timeline", head: "Building the alliance", items: [
          ["1945–52", "US occupation under General MacArthur"],
          ["1947", "New constitution; Article 9 renounces war"],
          ["1951", "San Francisco peace treaty and first security treaty"],
          ["1960", "Revised treaty; huge 'Anpo' protests in Tokyo"],
          ["1972", "Okinawa returned to Japan"],
          ["2015", "Japan allows limited 'collective self-defence'"],
          ["Oct 2025", "Takaichi becomes prime minister"]
        ] },
        { type: "section", head: "Occupation", md:
          "After Japan's surrender in August 1945 (see [[lesson:jp-10]]), American forces under General Douglas MacArthur occupied the country for almost seven years. They disarmed it, purged militarists, broke up big business groups, gave women the vote and oversaw a new constitution. Its Article 9 renounced war and the maintenance of armed forces. The Cold War changed American priorities: when the Korean War broke out in 1950, Washington wanted Japan as a base and an ally, and pressed it to create what became the Self-Defence Forces." },
        { type: "section", head: "The treaty", md:
          "In September 1951, the day Japan signed its peace treaty with the Allies in San Francisco, it also signed a security treaty allowing American forces to stay. A revised treaty in 1960 committed the United States to defend Japan; in return Japan provides bases. The revision was deeply controversial. Hundreds of thousands protested in Tokyo, a visit by President Eisenhower was cancelled, and Prime Minister Nobusuke Kishi, Shinzo Abe's grandfather, resigned once it passed. Article 5 of that treaty, under which an attack on territory administered by Japan is an attack on both, remains the core of the alliance." },
        { type: "section", head: "Shocks", md:
          "The partnership has had jolts. In July 1971 Richard Nixon announced his trip to China without warning Tokyo, and weeks later ended the dollar's link to gold, pushing up the yen; Japanese still call them the 'Nixon shocks'. Leaders have worked hard at personal ties since: Shinzo Abe was the first foreign leader to meet Donald Trump after his 2016 election, and the two often played golf together." },
        { type: "section", head: "A more equal partner", md:
          "For decades Japan relied on America's nuclear umbrella and kept defence spending near 1% of GDP. That has changed. Shinzo Abe's 2015 security laws let Japan defend allies in limited circumstances, and in 2022 Tokyo pledged to double defence spending to 2% of GDP and acquire long-range missiles. Sanae Takaichi, Abe's protégé, has accelerated those plans and said in November 2025 that a Chinese attack on Taiwan could justify Japanese military action (see [[lesson:jp-6]])." },
        { type: "compare", head: "Two views of the alliance",
          left: { head: "Supporters", md:
            "The alliance deters China and North Korea and has kept Japan safe and prosperous for 70 years. Both countries gain." },
          right: { head: "Sceptics", md:
            "In America some say Japan free-rides on US protection; in Japan some fear being dragged into American wars and resent the bases." } },
        { type: "section", head: "Why it matters", md:
          "Japan hosts more American troops than any other country, and the alliance anchors the US position in the western Pacific. How far Japan is willing to fight alongside the United States, especially over Taiwan, is one of the biggest questions in Asian security." }
      ],
      takeaways: [
        "The US occupied Japan from 1945 to 1952 and shaped its pacifist constitution.",
        "The 1960 security treaty commits the US to defend Japan in return for bases.",
        "Japan is now doubling defence spending and taking a larger military role, especially under Takaichi."
      ],
      check: { q: "What does Article 5 of the US–Japan security treaty say?",
        choices: ["Japan will pay for all US bases", "An attack on territory administered by Japan is an attack on both", "Japan may not have an army"], answer: 1,
        explain: "Article 5 commits the United States to defend Japan; Washington has said it covers the Senkaku islands too." },
      sources: [
        { title: "Occupation of Japan", publisher: "Office of the Historian, US Department of State", url: "https://history.state.gov/milestones/1945-1952/japan-reconstruction", date: "n.d." },
        { title: "Treaty of Mutual Cooperation and Security between Japan and the United States of America", publisher: "Ministry of Foreign Affairs of Japan", url: "https://www.mofa.go.jp/region/n-america/us/q&a/ref/1.html", date: "1960" },
        { title: "Takaichi takes on Trump", publisher: "Chatham House", url: "https://www.chathamhouse.org/2026/03/takaichi-takes-trump", date: "2026-03" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_jp-2", kind: "relation", asOf: "2026-09-30",
      title: "Okinawa carries the bases",
      dek: "A small island chain holds most of the land used by American forces in Japan. Thirty years after the two governments agreed to close one base, it is still open.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_jp/us_jp-2-hero.webp",
          alt: "Illustration of a military airfield runway running through a dense town of white concrete houses, with the sea behind.",
          caption: "Futenma air station sits in the middle of the crowded city of Ginowan.",
          credit: "AI illustration — not a photograph",
          prompt: "A long military airfield runway running through the middle of a dense subtropical town of low white concrete houses, a turquoise sea and coral reef behind, a few grey aircraft parked, bright sun, crowded and tense, no people close up, no flags, no legible text." },
        { type: "facts", head: "Okinawa and the bases", rows: [
          ["US troops in Japan", "About 54,000, the most in any foreign country"],
          ["Okinawa's share", "About 70% of land used exclusively by US forces, on 0.6% of Japan's area"],
          ["US rule", "1945–1972"],
          ["Futenma deal", "Agreed in 1996; still not closed"],
          ["Henoko", "Replacement airfield under construction, expected after 2033"]
        ] },
        { type: "section", head: "An island apart", md:
          "Okinawa, once an independent kingdom, was annexed by Japan in 1879. In 1945 it was the scene of the bloodiest battle of the Pacific war, in which about a quarter of its civilian population died. The United States ruled it directly until 1972, building airfields and bases on seized farmland. When Okinawa returned to Japan, most of the bases stayed. Today about 70% of the land used exclusively by American forces in Japan is in Okinawa Prefecture, which makes up just 0.6% of the country's area. Many Okinawans feel they bear a burden the rest of Japan avoids. The prefecture also hosts Kadena, the largest American air base in the Pacific, and Japan is now stationing its own missile units on islands nearer Taiwan, such as Yonaguni." },
        { type: "section", head: "Futenma", md:
          "In 1995 three American servicemen abducted and raped a 12-year-old Okinawan girl. Huge protests followed, and in 1996 Tokyo and Washington agreed to close the Marine Corps' Futenma air station, which sits in the middle of the crowded city of Ginowan. The replacement was to be a new airfield on reclaimed land at Henoko, on the quieter east coast. Opposition from Okinawan governors, lawsuits and environmental worries about the coral bay have delayed it for decades. In June 2026 new land reclamation began at Henoko, and completion is not expected before 2033. The Pentagon has said it will not hand back Futenma until a long enough runway is available." },
        { type: "section", head: "A change in Naha", md:
          "For 12 years Okinawa's governors opposed the Henoko plan. In September 2026 voters elected Genta Koja, the first governor in that time to support the relocation as the fastest way to close Futenma. Crimes and accidents involving US personnel still spark anger, and Japan pays more than a billion dollars a year toward the cost of hosting American forces." },
        { type: "compare", head: "Two views from Okinawa",
          left: { head: "Opponents of the bases", md:
            "Okinawa is treated as a colony: its land, sea and safety are sacrificed for a national policy decided in Tokyo and Washington." },
          right: { head: "Supporters of relocation", md:
            "China's navy is close by. Moving Futenma to Henoko is the realistic way to reduce the danger to Ginowan while keeping deterrence." } },
        { type: "section", head: "Why it matters", md:
          "Okinawa sits close to Taiwan and on the edge of the waters China's navy must pass to reach the Pacific. Its bases would be vital in any conflict, which makes local consent to them a strategic question, not just a local one." }
      ],
      takeaways: [
        "Okinawa, under US rule until 1972, holds about 70% of the land used exclusively by US forces in Japan.",
        "After a 1995 crime, the two governments agreed to close Futenma air station; it is still open.",
        "Okinawa elected a governor who supports the Henoko replacement in September 2026."
      ],
      check: { q: "Why is the Futenma air station controversial?",
        choices: ["It is on a disputed island", "It sits in the middle of a crowded city, and its promised closure has been delayed for 30 years", "It belongs to China"], answer: 1,
        explain: "Tokyo and Washington agreed in 1996 to replace it with a new airfield at Henoko, which is still under construction." },
      sources: [
        { title: "Futenma base site not yet returned to Japan, 30 years on", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/04/13/japan/politics/okinawa-futenma-30-years/", date: "2026-04-13" },
        { title: "Fresh land reclamation work begins at Henoko for U.S. base transfer", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/06/17/japan/landfill-start-henoko-transfer/", date: "2026-06-17" },
        { title: "Okinawa elects first governor in 12 years to support Marine airfield relocation", publisher: "Stars and Stripes", url: "https://www.stripes.com/branches/marine_corps/2026-09-14/okinawa-governor-futenma-relocation-22847547.html", date: "2026-09-14" },
        { title: "U.S. won't return Futenma site unless Japan agrees to long runway at Henoko", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/02/19/japan/futenma-runway-okinawa/", date: "2026-02-19" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_jp-3", kind: "relation", asOf: "2026-09-30",
      title: "From car quotas to $550 billion",
      dek: "In the 1980s Americans smashed Japanese cars on television. In 2025 Japan promised to invest $550 billion in the United States to avoid higher tariffs. Trade has always tested the alliance.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_jp/us_jp-3-hero.webp",
          alt: "Illustration of rows of new cars lined up at a port beside a huge car-carrier ship under a clear sky.",
          caption: "Cars are Japan's biggest export to the United States.",
          credit: "AI illustration — not a photograph",
          prompt: "Rows of shiny new cars lined up on a vast port dock beside a huge boxy car-carrier ship, cranes and a clear blue sky, orderly and industrial, no people, no logos, no legible text." },
        { type: "timeline", head: "Trade battles", items: [
          ["1981", "Japan agrees to limit car exports to the US"],
          ["1985", "Plaza Accord pushes up the yen"],
          ["1986", "Semiconductor agreement"],
          ["Jun 2025", "Nippon Steel completes its takeover of US Steel"],
          ["Jul 2025", "Deal: 15% US tariff and a $550 billion investment pledge"],
          ["Sep 2026", "Takaichi and Trump meet in New York"]
        ] },
        { type: "section", head: "Japan-bashing", md:
          "As Japanese cars, televisions and chips conquered American markets in the 1970s and 1980s, a backlash grew. In 1981 Japan agreed to 'voluntarily' limit car exports to the United States to 1.68 million a year; Japanese firms responded by building factories in America, which now employ many thousands of workers. In 1985 the Plaza Accord pushed up the yen's value (see [[lesson:jp-11]]), and a 1986 semiconductor pact forced Japan to open its chip market. Congressmen smashed a Toshiba radio on the Capitol lawn in 1987. Japan's long economic slump after 1990 and China's rise ended the panic. Today Japan is also the biggest foreign holder of US government debt, with more than $1 trillion of Treasury bonds." },
        { type: "section", head: "Tariffs and investment", md:
          "Donald Trump's second-term tariffs hit Japan hard. In July 2025 the two governments agreed a deal: most Japanese goods, including cars, would face a 15% tariff, and Japan pledged $550 billion of investment and loans in the United States. Unusually, an investment committee chaired by the US commerce secretary picks the projects, with the president having the final say. Early projects include energy development in Texas, a critical minerals plant in Georgia and power for artificial intelligence data centres. In June 2025 Nippon Steel completed its purchase of US Steel after agreeing to give the US government a 'golden share' with veto rights over some decisions." },
        { type: "section", head: "Takaichi and Trump", md:
          "Takaichi has courted Trump, highlighting Japan's investments and defence spending. In September 2026, just before Xi Jinping's state visit to Washington, she met Trump in New York to discuss China, chips, AI and critical minerals, and Trump phoned her afterwards to report on his talks with Xi. Japanese officials worry that a US–China deal on trade or Taiwan could be struck over Japan's head, as Nixon's opening to China was in 1971." },
        { type: "compare", head: "Fair deal?",
          left: { head: "Washington", md:
            "Japan has long enjoyed open access to the US market and American protection. Tariffs and investment pledges rebalance the relationship." },
          right: { head: "Tokyo's critics", md:
            "Japan is paying for its own protection twice: with bases and money, and now with investment steered by the White House." } },
        { type: "section", head: "Why it matters", md:
          "Japan is the largest foreign investor in the United States. How trade disputes are handled shows whether the alliance can survive an 'America First' president, and whether Japan can shape the US–China relationship rather than simply react to it." }
      ],
      takeaways: [
        "In the 1980s US anger at Japanese exports led to car quotas, the Plaza Accord and a chip pact.",
        "A July 2025 deal set a 15% tariff on Japanese goods and a $550 billion Japanese investment pledge steered by Washington.",
        "Takaichi has courted Trump, but Tokyo fears a US–China deal made over its head."
      ],
      check: { q: "Who chooses the projects under Japan's $550 billion investment pledge?",
        choices: ["Japan's parliament", "A committee chaired by the US commerce secretary, with the US president having the final say", "The World Bank"], answer: 1,
        explain: "The 2025 framework gives Washington the lead in picking projects, an unusual feature of the deal." },
      sources: [
        { title: "From Reciprocal Tariffs to Economic Security: The Strategic Significance of Japan's Pledge of $550 Billion Investment in the United States", publisher: "Nippon.com", url: "https://www.nippon.com/en/in-depth/d01191/", date: "2025" },
        { title: "Takaichi and Trump discuss China ahead of Xi's visit to U.S.", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/09/23/japan/politics/us-japan-trump-takaichi-un-meeting/", date: "2026-09-23" },
        { title: "Trump Debriefs Takaichi on Xi Meeting, Underscoring Japan-US Ties", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-09-26/takaichi-says-trump-gave-detailed-debrief-on-xi-s-state-visit", date: "2026-09-26" },
        { title: "Japan's Sanae Takaichi Has Little Answer for Trump's Betrayals", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2026/08/27/trump-japan-takaichi-alliance/", date: "2026-08-27" }
      ]
    }
  ]
});
