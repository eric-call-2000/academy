/* ============================================================
   Relationship — Japan & Australia 🇯🇵🇦🇺
   War, bombs on Darwin and the Burma railway, then the 1957
   trade deal that made enemies into partners; iron ore, gas,
   beef and a quarrel over whales; and the Mogami frigates and
   a quasi-alliance against China's rise.
   Research note and sources: tools/research/jp_au.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("jp_au", {
  id: "jp_au",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "jp_au-1", kind: "relation", asOf: "2026-10-01",
      title: "From war to trade",
      dek: "Japan bombed Darwin and worked Australian prisoners to death on the Burma railway. Just twelve years after the war, Australia signed a trade deal with Tokyo that made the two countries rich together.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_au/jp_au-1-hero.webp",
          alt: "Illustration of smoke rising from ships and wharves in a tropical harbour under attack from aircraft, 1942.",
          caption: "Japanese aircraft bombed Darwin on 19 February 1942.",
          credit: "AI illustration — not a photograph",
          prompt: "Black smoke rising from burning ships and wooden wharves in a tropical harbour in 1942, distant aircraft in a hazy blue sky, palm trees on the shore, historical documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Enemies, then customers", items: [
          ["19 Feb 1942", "Japanese aircraft bomb Darwin"],
          ["31 May 1942", "Midget submarines attack Sydney Harbour"],
          ["1942–43", "Australian prisoners build the Burma–Thailand railway"],
          ["6 Jul 1957", "Agreement on Commerce signed"],
          ["1976", "Basic Treaty of Friendship and Cooperation"],
          ["1970s", "Japan becomes Australia's largest trading partner"]
        ] },
        { type: "section", head: "War comes to Australia", md:
          "On 19 February 1942, ten weeks after Pearl Harbor, Japanese aircraft from the same carrier force bombed Darwin, killing more than 230 people; the town would be raided dozens of times more. On the night of 31 May 1942 three midget submarines slipped into Sydney Harbour; a torpedo meant for an American cruiser sank the barracks ship HMAS Kuttabul, killing 21 sailors. For many Australians it was the first time the war felt like an invasion threat (see [[lesson:au-11]])." },
        { type: "section", head: "The death railway", md:
          "More than 22,000 Australians became prisoners of the Japanese after the fall of Singapore and other defeats. About 9,500 were forced to build the Burma–Thailand railway through jungle, and at least 2,815 of them died there of disease, starvation and beatings, alongside more than 11,000 other Allied prisoners and tens of thousands of Asian labourers. Overall, about a third of Australians held by Japan died in captivity. The memory left deep bitterness that lasted for decades." },
        { type: "section", head: "Cowra", md:
          "There was suffering on the other side too. In August 1944 more than a thousand Japanese prisoners at a camp near Cowra in New South Wales, ashamed to have been captured, staged a mass breakout; 231 Japanese and four Australians died. After the war, the town became an unlikely symbol of reconciliation: it tends a Japanese war cemetery and built a large Japanese garden, visited by Japanese diplomats and students." },
        { type: "section", head: "Trade before forgiveness", md:
          "Yet on 6 July 1957, only twelve years after the war, Australia signed an Agreement on Commerce with Japan, one of the first former Allies to normalise trade. Trade minister John McEwen argued that Australia's farmers and miners needed Japan's market more than they needed to nurse grievances; many veterans were furious. The gamble paid off. As Japan rebuilt, its steel mills needed Australian iron ore and coal, and by the 1970s Japan had become Australia's largest trading partner." },
        { type: "section", head: "Friends by treaty", md:
          "In 1976 the two countries signed a Basic Treaty of Friendship and Cooperation, whose 50th anniversary falls in 2026. Japanese tourists, students and investors poured into Australia, and Australian beef, wheat and later gas fed Japan. Former enemies became each other's most dependable partners in Asia, both allied to the United States (see [[lesson:us_jp-1]] and [[lesson:us_au-1]])." },
        { type: "compare", head: "Remembering the war",
          left: { head: "Australia", md:
            "Darwin, the death railway and prisoner cruelty are central to its war memory." },
          right: { head: "Japan", md:
            "The war in the south Pacific is less remembered; apologies have come mainly from prime ministers." } },
        { type: "section", head: "Why it matters", md:
          "The 1957 decision to trade with a former enemy is one of the great successes of Australian diplomacy, and a model of how economic ties can heal political wounds." }
      ],
      takeaways: [
        "Japan bombed Darwin and attacked Sydney Harbour in 1942; thousands of Australian prisoners died in Japanese camps.",
        "Australia signed a commerce agreement with Japan in 1957, only twelve years after the war.",
        "Japan became Australia's largest trading partner by the 1970s."
      ],
      check: { q: "What did Australia sign with Japan on 6 July 1957?",
        choices: ["A military alliance", "An agreement on commerce", "A peace treaty"], answer: 1,
        explain: "It made Australia one of the first former Allies to normalise trade with Japan." },
      sources: [
        { title: "Bombing of Darwin", publisher: "Australian War Memorial", url: "https://www.awm.gov.au/collection/E84294", date: "n.d." },
        { title: "Japanese Midget Submarine", publisher: "Australian War Memorial", url: "https://www.awm.gov.au/articles/encyclopedia/midgetsub", date: "n.d." },
        { title: "Stolen Years: Australian prisoners of war – The Burma–Thailand Railway", publisher: "Australian War Memorial", url: "https://www.awm.gov.au/visit/exhibitions/stolenyears/ww2/japan/burmathai", date: "n.d." },
        { title: "Australia-Japan Commerce Agreement", publisher: "Robert Menzies Institute", url: "https://www.robertmenziesinstitute.org.au/on-this-day/australia-japan-commerce-agreement-3/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "jp_au-2", kind: "relation", asOf: "2026-10-01",
      title: "Gas, whales and a lost submarine deal",
      dek: "Australia keeps Japan's lights on with gas and coal. The partners fell out over whaling, and Tokyo was stung when Australia chose French submarines over Japanese ones in 2016.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_au/jp_au-2-hero.webp",
          alt: "Illustration of a large LNG tanker with round tanks loading at a jetty on an arid coast.",
          caption: "Japan is the biggest buyer of Australian liquefied natural gas.",
          credit: "AI illustration — not a photograph",
          prompt: "A large liquefied natural gas tanker with spherical domed tanks loading at a long jetty beside a gas processing plant on a red arid coast of north-west Australia, calm turquoise sea, documentary painting style, no people, no logos, no flags, no legible text." },
        { type: "timeline", head: "Partners with quarrels", items: [
          ["1960s", "Japanese demand drives Australia's iron-ore boom"],
          ["1989", "Australia and Japan help found APEC"],
          ["2007", "First joint declaration on security cooperation"],
          ["2014", "International court rules against Japan's Antarctic whaling"],
          ["2015", "Economic partnership agreement takes effect"],
          ["Apr 2016", "Australia picks French, not Japanese, submarines"]
        ] },
        { type: "section", head: "Energy for Japan", md:
          "Japan has few natural resources of its own, and Australia supplies much of what it lacks: iron ore and coking coal for its steel mills, thermal coal for power, and liquefied natural gas. Japan is the biggest buyer of Australian LNG, and Japanese companies have invested heavily in Australian gas projects. After the 2011 Fukushima nuclear disaster shut Japan's reactors, Australian gas helped keep the lights on. Australia is now also courting Japan as a buyer of hydrogen and critical minerals." },
        { type: "section", head: "Building Asia's institutions", md:
          "Both countries were keen to knit the Asia-Pacific together. In 1989 Australia's Bob Hawke, with strong Japanese support, launched APEC, the regional economic forum. They worked together on the Trans-Pacific Partnership, and when Donald Trump pulled the US out in 2017, Japan and Australia led the effort to save it as the CPTPP. A bilateral economic partnership agreement took effect in 2015, cutting tariffs on Australian beef and Japanese cars." },
        { type: "section", head: "Whales", md:
          "Whaling was the sorest point. Japan kept hunting whales in Antarctic waters under a 'scientific research' programme, which Australians saw as commercial whaling in disguise. Activist ships clashed with Japanese whalers in the Southern Ocean. In 2010 Australia took Japan to the International Court of Justice, and in March 2014 the court ruled that the programme was not for scientific purposes. Japan left the International Whaling Commission in 2019 and now hunts only in its own waters." },
        { type: "section", head: "The submarine that wasn't", md:
          "In the mid-2010s Prime Minister Shinzo Abe hoped Japan's Soryu-class submarines would win Australia's contract for new boats, the first big export of Japanese weapons since the war. In April 2016 Australia chose France instead, a blow to Abe and to Japanese industry. Five years later Australia scrapped the French deal for nuclear-powered submarines under AUKUS (see [[lesson:us_fr-2]]). Japan got its chance a decade later with frigates." },
        { type: "section", head: "People to people", md:
          "Ties go beyond mines and ports. In 1980 Japan became the first country with which Australia signed a working holiday agreement, letting young people live and work in each other's countries for a year. Japanese is among the most widely taught foreign languages in Australian schools, and hundreds of thousands of Japanese tourists visit Australia each year, with skiers flowing the other way to Hokkaido and Nagano." },
        { type: "compare", head: "What each needs",
          left: { head: "Japan", md:
            "Secure supplies of energy and minerals from a stable democracy." },
          right: { head: "Australia", md:
            "A rich, reliable customer and investor that is not China." } },
        { type: "section", head: "Why it matters", md:
          "Japan was Australia's largest trading partner until China overtook it in 2007. Japan's steady investment is a counterweight to dependence on Beijing." }
      ],
      takeaways: [
        "Australia supplies Japan with iron ore, coal and LNG; Japan is the biggest buyer of Australian LNG.",
        "In 2014 the International Court of Justice ruled against Japan's Antarctic whaling after Australia sued.",
        "Japan lost a 2016 submarine contest to France, a blow to Shinzo Abe."
      ],
      check: { q: "What did the International Court of Justice rule in 2014?",
        choices: ["That Australia must sell Japan more gas", "That Japan's Antarctic whaling was not for scientific purposes", "That the Senkaku islands are Japanese"], answer: 1,
        explain: "Australia had brought the case in 2010; Japan later left the International Whaling Commission." },
      sources: [
        { title: "Australia-Japan trade relations: From mines to the lab and back", publisher: "Lowy Institute", url: "https://www.lowyinstitute.org/the-interpreter/australia-japan-trade-relations-mines-lab-back", date: "n.d." },
        { title: "Australia-Japan resources and energy relationship", publisher: "Australian Embassy Tokyo", url: "https://japan.embassy.gov.au/tkyo/resources.html", date: "n.d." },
        { title: "The facts about Japan and Australian LNG", publisher: "Australian Energy Producers / ANGEA", url: "https://angeassociation.com/japan-lng/", date: "n.d." },
        { title: "Japan-Australia Relations", publisher: "Ministry of Foreign Affairs of Japan", url: "https://www.mofa.go.jp/a_o/ocn/au/page4e_001195.html", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "jp_au-3", kind: "relation", asOf: "2026-10-01",
      title: "Frigates and a quasi-alliance",
      dek: "Worried by China, Japan and Australia now train in each other's countries and are building warships together. Australia's purchase of Mogami frigates is Japan's biggest arms export since the war.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_au/jp_au-3-hero.webp",
          alt: "Illustration of a sleek grey stealth frigate with angular sides sailing in open sea.",
          caption: "Australia is buying 11 upgraded Mogami-class frigates from Japan.",
          credit: "AI illustration — not a photograph",
          prompt: "A sleek modern grey stealth frigate with smooth angular sides and an enclosed mast sailing through open blue sea, white wake, clear sky, documentary painting style, no people visible, no markings, no flags, no legible text." },
        { type: "timeline", head: "Towards an alliance", items: [
          ["Jan 2022", "Reciprocal Access Agreement signed"],
          ["Oct 2022", "New Joint Declaration on Security Cooperation"],
          ["Aug 2023", "Access agreement takes effect"],
          ["5 Aug 2025", "Australia selects Japan's Mogami frigate"],
          ["18 Apr 2026", "Contract for the first three frigates"],
          ["4 May 2026", "Takaichi and Albanese sign a defence statement in Canberra"]
        ] },
        { type: "section", head: "Reciprocal access", md:
          "As China's navy grew and Beijing punished Australia with trade sanctions (see [[lesson:au_cn-2]]), Canberra and Tokyo drew closer. In January 2022 they signed a Reciprocal Access Agreement, which sets the rules for each country's forces training in the other. It was Japan's first such agreement with any country but the United States. In October 2022 Albanese and Fumio Kishida signed a new declaration on security cooperation, promising to consult on contingencies that affect their sovereignty and regional security." },
        { type: "section", head: "The Mogami deal", md:
          "On 5 August 2025 Australia chose Mitsubishi Heavy Industries' upgraded Mogami-class frigate for its new fleet of 11 general-purpose warships, beating a German design. The first three will be built in Nagasaki, with delivery due by the end of 2029, and the other eight in Western Australia. The contract for the first three was signed on 18 April 2026. It is the largest defence deal between the two countries and the biggest Japanese warship export since 1945, made possible by Japan's loosening of its post-war limits on arms sales." },
        { type: "section", head: "Takaichi in Canberra", md:
          "On 4 May 2026 Prime Minister Sanae Takaichi visited Canberra (see [[lesson:jp-5]]). She and Anthony Albanese issued a joint statement on enhanced defence and security cooperation, marking 50 years since the 1976 friendship treaty, and agreed to work together on critical minerals and fuel security. Japan's Taiwan comments, which angered Beijing (see [[lesson:jp-6]]), made Tokyo even keener on partners in the region." },
        { type: "section", head: "Allies of America, and each other", md:
          "Both countries are close US allies, and they hold three-way exercises and meetings with Washington, as well as with India in the Quad (see [[lesson:jp_in-3]]). Analysts call their relationship a 'quasi-alliance': not a mutual defence treaty, but closer than any other security partnership either has outside the United States. Some Japanese and Australian strategists see it as insurance if America's commitment to Asia weakens." },
        { type: "section", head: "Minerals beyond China", md:
          "Japan learned early how risky dependence on China can be. When Beijing restricted rare-earth exports to Japan during a 2010 dispute over the Senkaku islands (see [[lesson:jp_cn-2]]), Japanese government agencies and the trading house Sojitz helped finance Australia's Lynas, giving Japan a supply of rare earths outside China. Critical minerals are now a central part of the partnership." },
        { type: "compare", head: "The frigate deal",
          left: { head: "Supporters", md:
            "Ties Australia's navy to a trusted ally and builds a shared defence industry." },
          right: { head: "Doubters", md:
            "Japan has little experience exporting warships; delays could leave the navy short." } },
        { type: "section", head: "Why it matters", md:
          "Former enemies are becoming military partners. If a crisis came over Taiwan or the South China Sea, Japan and Australia would likely be side by side." }
      ],
      takeaways: [
        "Japan and Australia signed a Reciprocal Access Agreement in 2022, Japan's first beyond the US.",
        "Australia chose Japan's Mogami frigate in 2025; the first three were contracted in April 2026.",
        "Takaichi and Albanese signed a defence statement in Canberra in May 2026."
      ],
      check: { q: "What is Australia buying from Japan's Mitsubishi Heavy Industries?",
        choices: ["Submarines", "11 Mogami-class frigates", "Fighter jets"], answer: 1,
        explain: "The first three are being built in Nagasaki; the rest in Western Australia." },
      sources: [
        { title: "Australia, Japan strike largest defence deal for advanced warships", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/8/5/australia-japan-strike-largest-defence-deal-for-advanced-warships", date: "2025-08-05" },
        { title: "Japan, Australia sign deal for first three Mogami frigate warships", publisher: "ABC News (Australia)", url: "https://www.abc.net.au/news/2026-04-18/japan-warship-deal-australia-with-mogami-frigate-richard-marles/106579734", date: "2026-04-18" },
        { title: "Enhanced Defence and Security Cooperation with Japan", publisher: "Australian Minister for Defence", url: "https://www.minister.defence.gov.au/media-releases/2026-05-04/enhanced-defence-security-cooperation-japan", date: "2026-05-04" },
        { title: "Australia and Japan to sign Reciprocal Access Agreement setting out security cooperation framework", publisher: "CNN", url: "https://www.cnn.com/2022/01/04/asia/australia-japan-defense-pact-intl-hnk", date: "2022-01-04" },
        { title: "What's New in Australia and Japan's Updated Joint Declaration of Security Cooperation?", publisher: "The Diplomat", url: "https://thediplomat.com/2022/10/whats-new-in-australia-and-japans-updated-joint-declaration-of-security-cooperation/", date: "2022-10" }
      ]
    }
  ]
});
