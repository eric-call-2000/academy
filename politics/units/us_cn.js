/* ============================================================
   Relationship — United States & China 🇺🇸🇨🇳
   Steel, tariffs and soybeans: three briefings on the trade
   relationship, from Chinese overcapacity to American tariffs
   and China's retaliation against American farmers.
   Research note and sources: tools/research/us_cn.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_cn", {
  id: "us_cn",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_cn-1", kind: "relation", asOf: "2026-09-30",
      title: "Cheap steel from China",
      dek: "In twenty years China went from a modest steelmaker to producing half the world's steel. The flood of cheap metal set off America's longest-running trade fight with Beijing.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_cn/us_cn-1-hero.webp",
          alt: "Illustration of a vast steel works at dusk on a river estuary, with blast furnaces, smoke and rows of steel coils waiting on a quay beside a cargo ship.",
          caption: "China now makes more steel than the rest of the world combined, and exports a record amount.",
          credit: "Illustration — not a photograph",
          prompt: "A vast steel works on a wide river estuary at dusk, tall blast furnaces glowing orange, drifting smoke, long rows of rolled steel coils stacked on a concrete quay beside a large cargo ship being loaded by cranes, tiny workers in hard hats seen from far away, industrial and immense." },
        { type: "facts", head: "Steel in numbers (2025)", rows: [
          ["China's crude steel output", "960.8 million tonnes, about 52% of the world's"],
          ["US crude steel output", "About 80 million tonnes"],
          ["China's steel exports", "133.6 million tonnes, a record (worldsteel)"],
          ["US trade orders on Chinese steel", "34 anti-dumping and 28 anti-subsidy orders"],
          ["China's share of US steel imports", "A few percent, after decades of duties"]
        ] },
        { type: "section", head: "The world's steelmaker", md:
          "In 2000 China made about 15% of the world's steel. As it built cities, railways and factories at record speed, it built steel mills even faster, many owned by provinces and cities that wanted the jobs and tax revenue, and financed by state banks. By the 2010s China produced more than half of all the world's steel.\n\n" +
          "When the construction boom slowed, the mills did not close. Local officials kept them running to protect jobs, a textbook case of [[overcapacity]]. The surplus was sold abroad, often for less than it cost to make. In 2015–16 world steel prices collapsed, and mills from Ohio to Wales to South Korea laid off workers." },
        { type: "section", head: "Dumping and duties", md:
          "American steelmakers had an old tool against cheap imports: trade cases. If a foreign firm sells below its home price or its cost, the Commerce Department can impose an [[anti-dumping-duty|anti-dumping duty]]; if a government subsidises it, an anti-subsidy duty. In 2016 Commerce found Chinese cold-rolled steel, used in cars and appliances, was dumped by 266% and subsidised by 256%, so the combined duties topped 500%.\n\n" +
          "Case by case, product by product, Chinese steel was priced out of the American market. By the mid-2020s the US had 62 such orders on Chinese steel products, and China supplied only a few percent of America's steel imports." },
        { type: "section", head: "The problem that wouldn't go away", md:
          "The duties did not end the problem, for two reasons. First, the glut drove down prices worldwide, so American mills competed with cheap steel from everywhere. Second, Chinese steel found other routes: shipped to countries such as Vietnam, turned into pipes, wire or coated sheet, and exported to the US as someone else's product. In 2023 Vietnam became the largest buyer of Chinese steel.\n\n" +
          "Steel's decline in America began long before China, with competition from Japan and Europe in the 1970s and new, leaner 'mini-mills'. But the China shock of the 2000s, which economists blame for the loss of around a million US manufacturing jobs, made cheap Chinese steel a political symbol in industrial states." },
        { type: "compare", head: "Two views of Chinese steel",
          left: { head: "Washington and US steelmakers", md:
            "China's state-backed mills ignore markets, dump their surplus abroad and threaten an industry the US needs for defence." },
          right: { head: "Beijing", md:
            "Chinese mills are efficient and meet real demand; American duties are protectionism that punishes users of steel." } },
        { type: "section", head: "Why it matters", md:
          "Steel sits where economics meets security: tanks, ships and bridges need it, and a country that cannot make it depends on others in a crisis. That argument gave presidents of both parties a reason to go beyond case-by-case duties to tariffs on all imported steel, the story of [[lesson:us_cn-2]]. And it made steel the opening round of the wider trade war between [[unit:us]] and [[unit:cn]]." }
      ],
      takeaways: [
        "China makes more than half the world's steel, and its mills export their surplus cheaply.",
        "The US answered with anti-dumping and anti-subsidy duties, some above 500%, on Chinese steel products.",
        "Direct imports fell, but the global glut and rerouting through other countries kept the problem alive."
      ],
      check: { q: "What is an anti-dumping duty?",
        choices: ["A ban on all imports from one country", "An extra tariff on goods sold abroad below their home price or cost", "A tax on steel exports"], answer: 1,
        explain: "When a foreign firm sells below its home price or its cost and the imports hurt local producers, the US can add a duty to offset the gap." },
      sources: [
        { title: "December 2025 crude steel production and 2025 global crude steel production", publisher: "worldsteel", url: "https://worldsteel.org/media/press-releases/2026/december-2025-crude-steel-production-2025-global-crude-steel-production/", date: "2026-01" },
        { title: "World Steel in Figures 2026", publisher: "worldsteel", url: "https://worldsteel.org/data/world-steel-in-figures/world-steel-in-figures-2026/", date: "2026" },
        { title: "Commerce Finds Dumping of Imports of Certain Cold-Rolled Steel Flat Products", publisher: "US International Trade Administration", url: "https://enforcement.trade.gov/download/factsheets/factsheet-multiple-cold-rolled-steel-flat-products-ad-cvd-final-051716.pdf", date: "2016-05" },
        { title: "Comments on China's Compliance with WTO Obligations", publisher: "American Iron and Steel Institute", url: "https://www.steel.org/wp-content/uploads/2024/09/AISI-20224-Comments-on-China-Compliance-with-WTO-Obligations-09102024-Final.docx.pdf", date: "2024-09" },
        { title: "The China Shock: Learning from Labor-Market Adjustment to Large Changes in Trade", publisher: "Annual Review of Economics (Autor, Dorn and Hanson)", url: "https://www.annualreviews.org/content/journals/10.1146/annurev-economics-080315-015041", date: "2016" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_cn-2", kind: "relation", asOf: "2026-09-30",
      title: "The tariff wall",
      dek: "Since 2018 the US has taxed almost all imported steel in the name of national security, now at 50%. Aimed at China's glut, the tariffs hit America's allies hardest, and their costs are still argued over.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_cn/us_cn-2-hero.webp",
          alt: "Illustration of an American steel mill beside a river in a hilly town at dawn, with brick houses on the slopes and a bridge in the foreground.",
          caption: "Tariffs were meant to revive steel towns in Pennsylvania, Ohio and Indiana.",
          credit: "AI illustration — not a photograph",
          prompt: "An old American steel mill with tall chimneys beside a wide river in a hilly Pennsylvania town at dawn, rows of brick houses climbing the green slopes, a steel truss bridge in the foreground, soft mist on the water, a few distant figures walking to work, hopeful and weathered mood." },
        { type: "timeline", head: "Steel tariffs, 2002–2026", items: [
          ["Mar 2002", "Bush imposes 8–30% 'safeguard' tariffs on steel"],
          ["Dec 2003", "Lifted after the WTO rules against them"],
          ["Mar 2018", "Trump's Section 232 tariffs: 25% on steel, 10% on aluminium"],
          ["May 2024", "Biden triples tariffs on Chinese steel under Section 301, to 25%"],
          ["Mar 2025", "All country exemptions end"],
          ["Jun 2025", "Steel tariff doubled to 50%; Nippon Steel buys US Steel"],
          ["Feb 2026", "Supreme Court ruling on emergency tariffs leaves steel untouched"]
        ] },
        { type: "section", head: "Security as the reason", md:
          "Earlier steel tariffs had failed: George W. Bush's 2002 safeguard duties were ruled illegal by the [[wto|WTO]] and lifted within two years. In 2018 Donald Trump used a different law, [[section-232|Section 232]] of 1962, which lets a president restrict imports that threaten national security. The Commerce Department argued that cheap imports, driven by China's glut, had left American mills running well below the capacity the country would need in a war. On 23 March 2018 a 25% tariff on steel and 10% on aluminium took effect." },
        { type: "section", head: "Aimed at China, landing on allies", md:
          "Because Chinese steel was already largely kept out by duties, most of the tariffs fell on imports from Canada, Mexico, the European Union, South Korea, Japan and Brazil. Allies were furious at being called a security threat and retaliated with tariffs on bourbon, motorcycles and orange juice. Deals followed: Canada and Mexico were exempted in 2019, and the EU, Japan and Britain got quotas in 2021–22.\n\n" +
          "Joe Biden kept the tariffs and in 2024 raised those on Chinese steel and aluminium to 25% under [[section-301|Section 301]]. In 2025 Trump ended every exemption, then doubled the rate to 50% from 4 June 2025, extending it to hundreds of products made of steel. Britain alone kept a lower 25% rate." },
        { type: "section", head: "Did it work?", md:
          "The US International Trade Commission studied the first years in 2023. It found the tariffs cut imports of the covered steel by about 24%, raised steel prices by 2.4% and raised American steel output by about $1.3 billion in 2021. But industries that use steel, from carmakers to machinery firms, paid more and produced about $3.5 billion less. Because far more Americans work in steel-using industries than in steelmaking, many economists conclude the tariffs cost more jobs than they saved.\n\n" +
          "The tariffs also reshaped ownership. In June 2025 Japan's Nippon Steel completed its $14.9 billion purchase of US Steel, after Trump approved it in exchange for a 'golden share' giving the government a veto over plant closures (see [[unit:jp|Japan]])." },
        { type: "compare", head: "Two views of the steel tariffs",
          left: { head: "Supporters", md:
            "A country that can't make its own steel isn't secure; tariffs brought investment in new mills and stopped China's glut swamping the market." },
          right: { head: "Critics", md:
            "The tariffs raised costs for manufacturers, alienated allies and did little against China, whose steel was already shut out." } },
        { type: "section", head: "Where it stands", md:
          "When the Supreme Court struck down Trump's emergency tariffs in February 2026, the steel tariffs survived, because they rest on Section 232, a different law (see [[unit:us]], [[lesson:us-5]]). Chinese steel now faces the 50% tariff, the Section 301 tariffs and dozens of trade-case duties stacked together. The 2025–26 truce between Washington and Beijing, which cut other tariffs, did not touch steel." }
      ],
      takeaways: [
        "Since 2018 Section 232 national-security tariffs have covered nearly all imported steel; the rate has been 50% since June 2025.",
        "Because Chinese steel was already shut out, the tariffs hit allies such as Canada, Mexico and the EU hardest.",
        "Studies found higher steel output and prices, but losses in industries that use steel."
      ],
      check: { q: "Why did the Section 232 steel tariffs survive the Supreme Court's February 2026 tariff ruling?",
        choices: ["Congress had voted for them", "They rest on a national-security law, not the emergency-powers law the Court ruled on", "China agreed to them in the truce"], answer: 1,
        explain: "The Court ruled only that IEEPA, the 1977 emergency law, doesn't allow tariffs. Section 232 of 1962 is a separate law." },
      sources: [
        { title: "Section 232 Tariffs on Steel and Aluminum", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/IN12519", date: "2025" },
        { title: "Fact Sheet: President Donald J. Trump Increases Section 232 Tariffs on Steel and Aluminum", publisher: "The White House", url: "https://www.whitehouse.gov/fact-sheets/2025/06/fact-sheet-president-donald-j-trump-increases-section-232-tariffs-on-steel-and-aluminum/", date: "2025-06" },
        { title: "Certain Effects of Section 232 and 301 Tariffs Reduced Imports", publisher: "US International Trade Commission", url: "https://www.usitc.gov/press_room/news_release/2023/er0315_63679.htm", date: "2023-03" },
        { title: "2002 United States steel tariff", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2002_United_States_steel_tariff", date: "n.d." },
        { title: "Nippon Steel finalizes $15 billion buyout of U.S. Steel after sealing national security agreement", publisher: "PBS NewsHour", url: "https://www.pbs.org/newshour/economy/nippon-steel-finalizes-15-billion-buyout-of-u-s-steel-after-sealing-national-security-agreement", date: "2025-06" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_cn-3", kind: "relation", asOf: "2026-09-30",
      title: "Soybeans: how China hits back",
      dek: "When Washington taxes Chinese goods, Beijing answers where it hurts politically: American farms. Soybeans have become the most sensitive barometer of the trade war.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_cn/us_cn-3-hero.webp",
          alt: "Illustration of a golden soybean field in the American Midwest at harvest, with a combine harvester and tall grain silos under a big sky.",
          caption: "China was once the buyer of more than half of all US soybean exports.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast golden soybean field in the American Midwest at harvest time, a green combine harvester working in the middle distance, tall silver grain silos and a red barn beyond, a huge sky with late afternoon clouds, a lone farmer seen from far behind, calm but uncertain mood." },
        { type: "facts", head: "Soybeans and the trade war", rows: [
          ["US soybean exports to China, 2017", "$12.2 billion, 57% of all US soybean exports"],
          ["The same, 2018", "$3.1 billion, after China's 25% retaliatory tariff"],
          ["US aid to farmers", "About $23 billion in 2018–19; $12 billion 'bridge' payments in 2025"],
          ["China's pledge since the 2025 truce", "At least 25 million tonnes a year, 2026–2028"],
          ["Ordered by 11 Sep 2026", "About 15.5 million tonnes"]
        ] },
        { type: "section", head: "Why soybeans", md:
          "China is the world's biggest buyer of soybeans, importing roughly 100 million tonnes a year to feed its pigs and poultry and to make cooking oil. For years the United States supplied a large share. Soybeans are grown across the Midwest and Plains, in states that decide elections and largely vote Republican, so a Chinese [[tariff]] on them sends a political message directly to Washington." },
        { type: "section", head: "2018: the first blow", md:
          "On 6 July 2018, the day American [[section-301|Section 301]] tariffs on Chinese goods took effect, China put a 25% tariff on US soybeans. Chinese buyers switched to Brazil. American exports to China collapsed from $12.2 billion in 2017 to $3.1 billion in 2018, and prices fell. The Trump administration paid farmers about $23 billion in 'market facilitation' payments across 2018 and 2019 to make up for it.\n\n" +
          "The 'Phase One' deal of January 2020 committed China to buy $200 billion more in American goods and services over two years, farm products included. The pandemic intervened, and China bought well under two-thirds of what it promised." },
        { type: "section", head: "2025: the second blow", md:
          "When tariffs soared again in 2025, China stopped buying the new American crop altogether from the spring, while buying record amounts from Brazil, whose farmers now supply most of China's soybeans (see [[unit:br|Brazil]]). American farmers faced storage bins full of unsold beans and low prices. In December the administration announced $12 billion in 'bridge' payments to farmers.\n\n" +
          "The truce agreed in Busan on 30 October 2025 restarted trade: China promised 12 million tonnes by early 2026, which it bought, and at least 25 million tonnes a year in 2026, 2027 and 2028." },
        { type: "section", head: "Where it stands", md:
          "By mid-September 2026 Chinese buyers had ordered about 15.5 million tonnes of this season's crop, mostly through state-owned companies. China still keeps a 10% retaliatory tariff on American soybeans that Brazilian beans don't pay. After Xi's September visit to Washington, the two governments set out $60 billion of reciprocal tariff cuts covering farm goods from wheat and corn to meat, but soybeans were left out, to the disappointment of American growers." },
        { type: "compare", head: "Two readings of the soybean deals",
          left: { head: "The administration", md:
            "Tariff pressure forced China back to the table and into large, binding purchase commitments for three years." },
          right: { head: "Farm groups and critics", md:
            "Farmers lost their best customer to Brazil, and purchases managed by Beijing's state firms can stop whenever politics changes." } },
        { type: "section", head: "Why it matters", md:
          "Steel and soybeans show the two halves of the trade war. Washington protects industries it sees as strategic; Beijing retaliates against the exporters with the most political weight. The farm trade is also a signal: when Chinese purchases rise, the truce is holding, and when they stop, a new round has begun (see [[unit:cn]], [[lesson:cn-5]])." }
      ],
      takeaways: [
        "China retaliates against US tariffs by cutting purchases of American farm goods, above all soybeans.",
        "Exports to China fell from $12.2 billion in 2017 to $3.1 billion in 2018, and Brazil took much of the market.",
        "The 2025 truce committed China to 25 million tonnes a year, but a 10% tariff on US soybeans remains."
      ],
      check: { q: "Why does China target soybeans when it retaliates against US tariffs?",
        choices: ["Soybeans are America's only export", "They are a huge US export to China, grown in politically important farm states", "China grows all the soybeans it needs"], answer: 1,
        explain: "China is the world's biggest soybean importer, and cutting purchases hurts farm states whose voters matter in Washington." },
      sources: [
        { title: "U.S. Soybean Exports to China Crushed amid Rising Trade Tensions", publisher: "US International Trade Commission", url: "https://www.usitc.gov/publications/332/executive_briefings/chinasoyebot.pdf", date: "2019" },
        { title: "Trump Administration Announces $12 Billion Farmer Bridge Payments", publisher: "US Department of Agriculture", url: "https://www.usda.gov/about-usda/news/press-releases/2025/12/08/trump-administration-announces-12-billion-farmer-bridge-payments-american-farmers-impacted-unfair", date: "2025-12-08" },
        { title: "China buys all 12 million tons of soybeans it promised", publisher: "Fortune", url: "https://fortune.com/2026/01/21/china-buys-all-12-million-tons-of-soybeans-it-promised-just-in-time-for-trump-to-announce-new-tariffs/", date: "2026-01-21" },
        { title: "ASA Says China Soybean Commitments are Critical Amid Continued Tariffs", publisher: "Oklahoma Farm Report (American Soybean Association)", url: "https://www.oklahomafarmreport.com/2026/09/28/asa-says-china-soybean-commitments-are-critical-amid-continued-tariffs/", date: "2026-09-28" },
        { title: "China to Slash Tariffs on US Ag Products, Excluding Soybeans", publisher: "farm policy news, University of Illinois", url: "https://farmpolicynews.illinois.edu/2026/09/china-to-slash-tariffs-on-us-ag-products-excluding-soybeans/", date: "2026-09" }
      ]
    }
  ]
});
