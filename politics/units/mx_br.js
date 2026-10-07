/* ============================================================
   Relationship — Mexico & Brazil 🇲🇽🇧🇷
   Latin America's two giants: wartime allies who chose NAFTA
   and Mercosur, rivals for UN seats and the WTO; cars, planes
   and oil; and Sheinbaum and Lula between Trump and China.
   Mexico's ties to the US are in us_mx, Brazil's in us_br.
   Research note and sources: tools/research/mx_br.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("mx_br", {
  id: "mx_br",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "mx_br-1", kind: "relation", asOf: "2026-10-01",
      title: "Two giants, two paths",
      dek: "Mexico and Brazil are Latin America's biggest countries, but for most of their history they looked in different directions: Mexico north to the United States, Brazil south and to the world.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx_br/mx_br-1-hero.webp",
          alt: "Illustration of a 1940s fighter plane flying over a green tropical island, with other planes in formation.",
          caption: "Mexico's Squadron 201, the 'Aztec Eagles', fought in the Philippines in 1945.",
          credit: "Illustration — not a photograph",
          prompt: "A 1940s propeller fighter plane flying over a green tropical island with jungle and a bay, other fighters in formation behind it, puffy clouds, historical documentary painting style, no people visible, no markings, no flags, no legible text." },
        { type: "timeline", head: "Parallel lives", items: [
          ["1821–22", "Mexico and Brazil both become independent"],
          ["1942", "Both declare war on the Axis"],
          ["1944–45", "Brazilian troops in Italy; Mexican pilots in the Philippines"],
          ["1991", "Brazil founds Mercosur with its neighbours"],
          ["1994", "Mexico joins NAFTA with the US and Canada"],
          ["2013", "Brazil's candidate beats Mexico's for WTO chief"]
        ] },
        { type: "section", head: "Different empires", md:
          "Mexico won independence from Spain in 1821 after a long war (see [[lesson:mx-9]]); Brazil separated from Portugal in 1822 almost peacefully, as an empire ruled by a Portuguese prince (see [[lesson:br-9]]). One spoke Spanish, the other Portuguese. Mexico lost half its territory to the United States in 1848 (see [[lesson:mx-10]]); Brazil, bordering ten countries, became a continental giant. For a century the two had little to do with each other." },
        { type: "section", head: "Allies in war", md:
          "Both joined the Allies in 1942 after German submarines sank their ships. Brazil sent more than 25,000 troops to fight in Italy (see [[lesson:us_br-1]]). Mexico sent Squadron 201, the 'Aztec Eagles', a fighter unit that flew 96 combat missions with the US Fifth Air Force in the Philippines from April to August 1945. They were the only Latin American countries to send combat forces abroad in the war, a point of pride in both." },
        { type: "section", head: "NAFTA and Mercosur", md:
          "In the 1990s the two chose different economic models. Brazil, with Argentina, Paraguay and Uruguay, founded the Mercosur customs union in 1991 and protected its industry with high tariffs. Mexico bet on the North American Free Trade Agreement with the US and Canada from 1994, becoming an export platform for American markets. Mexico's economy became tied to the north; Brazil's to commodities sold worldwide and, later, to China." },
        { type: "section", head: "Rivals for leadership", md:
          "As Brazil rose under Lula in the 2000s, it sought a permanent seat on the UN Security Council with Germany, India and Japan. Mexico, with Argentina and Italy, led the 'Uniting for Consensus' group that opposes new permanent seats. Researchers have described Mexican diplomacy as trying to 'contain' Brazil's ambitions. In 2013 the two clashed head-on for the top job at the World Trade Organization: Brazil's Roberto Azevêdo beat Mexico's former trade minister Herminio Blanco." },
        { type: "section", head: "Football and soap operas", md:
          "Ordinary Mexicans and Brazilians know each other mostly through culture. Brazil won its third World Cup in Mexico City's Azteca stadium in 1970, with Pelé's famous team, and the two have met in many tournaments since. Both countries' television giants, Mexico's Televisa and Brazil's TV Globo, became the world's great exporters of telenovelas, soap operas watched from Russia to the Philippines." },
        { type: "compare", head: "Two strategies",
          left: { head: "Mexico", md:
            "Integrate with North America; prosperity through exports to the US." },
          right: { head: "Brazil", md:
            "Lead South America and the Global South; trade with everyone." } },
        { type: "section", head: "Why it matters", md:
          "Latin America rarely speaks with one voice partly because its two giants have so often pulled in different directions." }
      ],
      takeaways: [
        "Mexico and Brazil both fought on the Allied side in the Second World War.",
        "Mexico joined NAFTA in 1994; Brazil built Mercosur in 1991.",
        "They have competed for influence, from UN Security Council reform to the WTO's top job in 2013."
      ],
      check: { q: "Who became head of the WTO in 2013, beating Mexico's candidate?",
        choices: ["A Mexican", "Brazil's Roberto Azevêdo", "An Argentine"], answer: 1,
        explain: "He defeated former Mexican trade minister Herminio Blanco in the final round." },
      sources: [
        { title: "Curator's Choice: Aztec Eagles Over the Pacific", publisher: "National WWII Museum", url: "https://www.nationalww2museum.org/war/articles/aztec-eagles-mexican-air-force", date: "n.d." },
        { title: "New WTO General Director Is a Brazilian Diplomat", publisher: "Library of Congress", url: "https://www.loc.gov/item/global-legal-monitor/2013-05-08/brazil-world-trade-organization-new-wto-general-director-is-a-brazilian-diplomat/", date: "2013-05-08" },
        { title: "Containing Brazil: Mexico's Response to the Rise of Brazil", publisher: "Bulletin of Latin American Research", url: "https://onlinelibrary.wiley.com/doi/full/10.1111/blar.12412", date: "2016" },
        { title: "UN Security Council Reform: What the World Thinks", publisher: "Carnegie Endowment", url: "https://carnegieendowment.org/research/2023/06/un-security-council-reform-what-the-world-thinks?lang=en", date: "2023-06" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "mx_br-2", kind: "relation", asOf: "2026-10-01",
      title: "Cars, planes and oil",
      dek: "Trade between Latin America's two biggest economies is small for their size, about $14.5 billion a year. Cars, Embraer jets and a new oil partnership are trying to change that.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx_br/mx_br-2-hero.webp",
          alt: "Illustration of a modern regional passenger jet on a runway in a dry landscape with mountains.",
          caption: "Brazil's Embraer builds parts in Mexico and sells jets to Mexican airlines.",
          credit: "Illustration — not a photograph",
          prompt: "A modern white regional passenger jet taxiing on a runway in a dry northern Mexican landscape with brown mountains behind, clear blue sky, documentary painting style, no people, no logos, no flags, no legible text." },
        { type: "timeline", head: "Building trade", items: [
          ["2002", "ACE 53 and ACE 55 trade agreements"],
          ["2019", "Free trade in light vehicles"],
          ["Jul 2025", "Lula and Sheinbaum agree to expand trade"],
          ["Aug 2025", "Vice-President Alckmin leads a mission to Mexico"],
          ["Sep 2025", "Talks to expand the agreements resume"],
          ["23 Jun 2026", "Pemex and Petrobras sign a cooperation memorandum"]
        ] },
        { type: "section", head: "Limited trade", md:
          "Despite their size, the two trade relatively little: about $14.5 billion a year, mainly cars and car parts, electronics and farm products. Mexico's exports to Brazil were about $4.45 billion in 2025. Their trade is governed by two partial agreements from 2002: ACE 53, which cuts tariffs on a range of goods, and ACE 55, between Mexico and Mercosur, which covers vehicles. Trade in light vehicles became free in 2019, and tariffs on trucks were later cut too." },
        { type: "section", head: "Expanding the deals", md:
          "Trump's tariffs gave both a reason to look at each other. In July 2025 Lula proposed talks to expand the trade agreements, naming pharmaceuticals, farm goods, ethanol, biodiesel and aerospace, and Sheinbaum agreed. Vice-President Geraldo Alckmin led ministers and business leaders to Mexico City in August 2025, and negotiators reopened ACE 53 and 55 in September. Business groups estimate trade could rise toward $17 billion. A summit produced only small deals, and the talks have moved slowly." },
        { type: "section", head: "Embraer in Mexico", md:
          "Brazil's Embraer, the world's third-largest maker of commercial aircraft, opened its first wholly owned factory in Mexico in Chihuahua, making cabin interiors such as overhead bins, galleys and toilets for export, and employs more than a thousand people there. Mexican carriers fly Embraer jets: the revived state airline Mexicana uses Embraer E2s. Mexico's aerospace cluster, built to supply American and European makers, gives Embraer a base close to the US market." },
        { type: "section", head: "Pemex and Petrobras", md:
          "Oil is the newest link. Brazil's Petrobras is a world leader in deepwater drilling, while Mexico's indebted Pemex has struggled to stop falling output. On 23 June 2026 they signed a memorandum on cooperation in exploration and production in the Gulf of Mexico's shallow and deep waters, refining, petrochemicals and fertilisers. In August Lula and Sheinbaum discussed it in a video call. Both companies are state-controlled, and both governments see energy sovereignty as a priority." },
        { type: "section", head: "Companies across the region", md:
          "Investment runs both ways. Mexico's América Movil, owned by the Slim family, runs Claro, one of Brazil's largest mobile and pay-TV operators, and Grupo Bimbo bakes bread in Brazil. Brazil's Braskem built a big petrochemical complex in Veracruz with a Mexican partner, and the meat giant JBS owns chicken businesses in Mexico through Pilgrim's Pride. These firms are among Latin America's few true multinationals." },
        { type: "compare", head: "Why trade is small",
          left: { head: "Obstacles", md:
            "Distance, Brazil's tariffs, and Mexico's dependence on the US market." },
          right: { head: "Opportunities", md:
            "Cars, planes, oil, pharmaceuticals and food, if the deals expand." } },
        { type: "section", head: "Why it matters", md:
          "A deeper Mexico–Brazil partnership would give both some protection from Washington's tariffs and China's competition, but it will take years to matter." }
      ],
      takeaways: [
        "Mexico–Brazil trade is about $14.5 billion a year, small for their size.",
        "They reopened talks in 2025 to expand their 2002 trade agreements.",
        "Embraer makes cabin parts in Chihuahua, and Pemex and Petrobras signed a cooperation memorandum in June 2026."
      ],
      check: { q: "What did Pemex and Petrobras agree in June 2026?",
        choices: ["To merge", "To cooperate on exploration, production and refining", "To stop selling oil to the US"], answer: 1,
        explain: "The memorandum covers Gulf of Mexico exploration, refining and petrochemicals." },
      sources: [
        { title: "Mexico and Brazil eye expanded trade deal ahead of August meeting", publisher: "Mexico News Daily", url: "https://mexiconewsdaily.com/business/mexico-brazil-expanded-trade-deal/", date: "2025" },
        { title: "ACE 53 and ACE 55: Mexico and Brazil Resume Trade Negotiations", publisher: "Opportimes", url: "https://www.opportimes.com/en/ace-53-and-ace-55-mexico-and-brazil-resume-trade-negotiations/", date: "2025-09" },
        { title: "Brazilian aerospace giant Embraer begins manufacturing in Mexico", publisher: "Mexico News Daily", url: "https://mexiconewsdaily.com/business/embraer-manufacturing-mexico/", date: "n.d." },
        { title: "Petrobras and Pemex Sign MOU to Boost Gulf of Mexico Output", publisher: "Yahoo Finance", url: "https://finance.yahoo.com/energy/articles/petrobras-pemex-sign-mou-boost-122700628.html", date: "2026-06" },
        { title: "Mexico and Brazil's big trade summit yields small deals as allies pull the Latin American giants in separate directions", publisher: "Mexico News Daily", url: "https://mexiconewsdaily.com/news/mexico-brazil-trade-summit-deals/", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "mx_br-3", kind: "relation", asOf: "2026-10-01",
      title: "Between Trump and China",
      dek: "Sheinbaum and Lula are both leftists hit by Trump's tariffs, and both condemned the US raid on Venezuela. But Mexico has sided with Washington against Chinese imports, while Brazil leans toward Beijing.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx_br/mx_br-3-hero.webp",
          alt: "Illustration of a fork in a road through green hills, one path heading north and one south.",
          caption: "Mexico and Brazil have taken different roads between Washington and Beijing.",
          credit: "Illustration — not a photograph",
          prompt: "A country road forking into two paths through green rolling hills, one heading toward a distant city to the north and one toward distant mountains to the south, late afternoon light, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Same pressures, different answers", items: [
          ["Aug 2024", "Brazil, Mexico and Colombia call on Venezuela to publish vote tallies"],
          ["Oct 2024", "Lula attends Sheinbaum's inauguration"],
          ["2025", "US tariffs hit both countries"],
          ["Dec 2025", "Mexico approves tariffs of up to 50% on Chinese goods"],
          ["4 Jan 2026", "Both condemn the US raid on Venezuela"],
          ["4 Oct 2026", "Brazil's presidential election"]
        ] },
        { type: "section", head: "Fellow leftists", md:
          "Claudia Sheinbaum, Mexico's president since October 2024, and Lula, in his third term, come from the Latin American left and get on well; Lula attended her inauguration. In August 2024 they joined Colombia in calling on Venezuela to publish detailed results of its disputed presidential election. When American forces seized Nicolás Maduro on 3 January 2026, both condemned it: Sheinbaum said the strikes breached the UN Charter, and Lula called them 'a very serious affront' to Venezuela's sovereignty. With Spain, Chile, Colombia and Uruguay they issued a joint statement rejecting the action." },
        { type: "section", head: "Mexico's choice", md:
          "Yet on the biggest strategic question their paths diverge. Mexico sends about 80% of its exports to the United States, and the review of the USMCA trade pact (see [[lesson:mx-7]]) is a matter of national survival. Under US pressure, Mexico's Congress approved tariffs of up to 50% on goods from China and other countries without trade deals (see [[lesson:mx_cn-3]]). Sheinbaum works hard to avoid confrontation with Trump." },
        { type: "section", head: "Brazil's choice", md:
          "Brazil sells far more to China than to the US, and Lula has deepened ties with Beijing and championed the BRICS group (see [[lesson:br_cn-3]]). Hit by US tariffs over Bolsonaro's trial and its payment system (see [[lesson:br-6]]), Brazil chose to negotiate rather than retaliate but did not move closer to Washington. Analysts describe the two giants as charting different courses amid the US–China rivalry." },
        { type: "section", head: "The vote", md:
          "Brazil's election on 4 October 2026 (see [[lesson:br-7]]) could change the picture. If Flávio Bolsonaro wins, Brasília would swing toward Trump, ending the rare moment when both giants were led by the left. Mexico's next presidential election is not until 2030, so Sheinbaum will deal with whoever wins." },
        { type: "section", head: "Regional clubs", md:
          "Both belong to CELAC, the Community of Latin American and Caribbean States, a forum without the United States and Canada. Mexico hosted its summit in 2021. Bolsonaro pulled Brazil out in 2020, and Lula brought it back in 2023. Mexico and Brazil each see CELAC as a way to give Latin America a voice, though it has achieved little in practice." },
        { type: "compare", head: "Two answers to Trump",
          left: { head: "Mexico", md:
            "Accommodate: tariffs on China, cooperation on migration and drugs, keep USMCA alive." },
          right: { head: "Brazil", md:
            "Resist: defend sovereignty, deepen ties with China and BRICS, negotiate without bowing." } },
        { type: "section", head: "Why it matters", md:
          "When Mexico and Brazil agree, as on Venezuela, Latin America has a stronger voice. On the US–China contest, geography keeps pulling them apart." }
      ],
      takeaways: [
        "Sheinbaum and Lula, both on the left, condemned the January 2026 US raid on Venezuela.",
        "Mexico, dependent on the US market, imposed tariffs on Chinese goods; Brazil leans toward China and BRICS.",
        "Brazil's October 2026 election could shift the balance."
      ],
      check: { q: "How did Mexico and Brazil respond to the US seizure of Maduro?",
        choices: ["Both supported it", "Both condemned it, with a joint statement alongside other countries", "Only Mexico condemned it"], answer: 1,
        explain: "Spain, Chile, Colombia and Uruguay joined them in rejecting the unilateral action." },
      sources: [
        { title: "Spain and 5 Latin American countries reject US attack on Venezuela in joint communique", publisher: "Euronews", url: "https://euronews.com/2026/01/04/spain-and-5-latin-american-countries-reject-us-attack-on-venezuela-in-joint-communique", date: "2026-01-04" },
        { title: "World reacts to US bombing of Venezuela, 'capture' of Maduro", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/1/3/world-reacts-to-reported-us-bombing-of-venezuela", date: "2026-01-03" },
        { title: "Brazil, Mexico, Colombia call for Venezuela to release full vote tallies", publisher: "Rappler (Reuters)", url: "https://www.rappler.com/world/latin-america/brazil-mexico-colombia-call-venezuela-release-full-vote-tallies/", date: "2024-08" },
        { title: "Brazil and Mexico Chart Different Courses Amid China-US Tensions", publisher: "The Diplomat", url: "https://thediplomat.com/2025/09/brazil-and-mexico-chart-different-courses-amid-china-us-tensions/", date: "2025-09" }
      ]
    }
  ]
});
