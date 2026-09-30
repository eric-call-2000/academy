/* ============================================================
   Relationship — United States & Canada 🇺🇸🇨🇦
   Allies, lumber and oil: the closest partnership in the world,
   its oldest trade fight, and the energy that ties it together.
   Research note and sources: tools/research/us_ca.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_ca", {
  id: "us_ca",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_ca-1", kind: "relation", asOf: "2026-09-30",
      title: "Allies next door",
      dek: "The world's longest land border runs between two countries that defend one airspace together. Trump's talk of a '51st state' tested a partnership built over two centuries.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ca/us_ca-1-hero.webp",
          alt: "Illustration of a radar dome on a snowy Arctic ridge under a green aurora, with two fighter jets flying in formation far above.",
          caption: "NORAD, the joint US–Canadian command, has watched North America's skies since 1958.",
          credit: "AI illustration — not a photograph",
          prompt: "A white radar dome on a snowy ridge in the Canadian Arctic at night, green northern lights rippling across the sky, two small fighter jets flying in formation high above, a lonely research hut with one lit window, cold vast landscape, no people up close, no flags, no legible text." },
        { type: "timeline", head: "From enemies to allies", items: [
          ["1812–15", "The US invades Canada, then a British colony, and is repelled"],
          ["1940", "Ogdensburg Agreement: a joint board to defend North America"],
          ["1958", "NORAD created"],
          ["1965", "Auto Pact joins the two car industries"],
          ["1988", "Free trade agreement, fought over in a Canadian election"],
          ["11 Sep 2001", "Canada takes in more than 200 diverted planes"],
          ["2025", "Trump calls Canada the '51st state'"]
        ] },
        { type: "section", head: "Old enemies", md:
          "The two countries began as rivals. American forces invaded British-ruled Canada in the War of 1812 and were driven back; the fear of American expansion was one reason the colonies united in 1867 (see [[unit:ca]], [[lesson:ca-9]]). But the border was soon demilitarised, and by the twentieth century the two had become the closest of partners, sharing an 8,891-kilometre frontier, the longest between any two countries." },
        { type: "section", head: "One air defence", md:
          "In 1940, with Britain under attack, Franklin Roosevelt and Mackenzie King agreed to plan the defence of North America together. In 1958 they created NORAD, a single command in which Americans and Canadians watch the continent's skies side by side; its deputy commander is always a Canadian. The two share intelligence through the 'Five Eyes' network with Britain, Australia and New Zealand, and fought together in both world wars, Korea and Afghanistan, where 158 Canadian soldiers died. Canada declined to join the 2003 invasion of Iraq." },
        { type: "section", head: "Friends in need", md:
          "When US airspace closed on 11 September 2001, Canada took in more than 200 diverted flights and tens of thousands of passengers; the small town of Gander, Newfoundland, housed nearly 7,000 of them, a story later told in the musical Come From Away. Tens of millions of people crossed the border each year, and millions of families lived on both sides of it." },
        { type: "section", head: "The '51st state'", md:
          "In 2025 Trump repeatedly called Canada the '51st state' and its prime minister a 'governor', and said Canada could join his planned 'Golden Dome' missile shield for $61 billion, or for free as part of the US. Canadians were furious: they booed the American anthem at hockey games, cancelled trips south and boycotted American goods. The anger helped Mark Carney win the April 2025 election ([[lesson:ca-5]]). Canada has since raised defence spending and pursued ties with Europe, but NORAD has kept working as before." },
        { type: "compare", head: "Two views of the partnership",
          left: { head: "Washington under Trump", md:
            "Canada has long relied on American protection while spending too little on defence and protecting its markets; it should pay its share." },
          right: { head: "Ottawa", md:
            "Canada is a sovereign ally that has fought alongside the US for a century; partners don't threaten to annex each other." } },
        { type: "section", head: "Why it matters", md:
          "No two countries are more intertwined. Defence of the continent, from Arctic radar to missile defence, depends on both (see [[lesson:ca-12]]), and so do supply chains, energy and families. That is why the 2025–26 rupture shocked Canadians so deeply, and why even at the height of the trade war, soldiers in the joint command kept watching the skies together." }
      ],
      takeaways: [
        "Former enemies in 1812, the US and Canada became the closest of allies, sharing the world's longest land border.",
        "Since 1958 they have defended North American airspace through NORAD, a joint command.",
        "Trump's talk of a '51st state' in 2025 shook Canadian trust, but military cooperation has continued."
      ],
      check: { q: "What is NORAD?",
        choices: ["A free-trade agreement", "A joint US–Canadian command defending North American airspace", "A pipeline"], answer: 1,
        explain: "Created in 1958, NORAD has American and Canadian personnel watching the continent's skies together." },
      sources: [
        { title: "North American Aerospace Defense Command (NORAD) Modernization", publisher: "CSIS", url: "https://www.csis.org/analysis/north-american-aerospace-defense-command-norad-modernization", date: "2025" },
        { title: "Despite US-Canada tensions, it's business as usual at NORAD", publisher: "Small Wars Journal", url: "https://smallwarsjournal.com/2026/03/04/norad-us-canada-tensions/", date: "2026-03-04" },
        { title: "Fact sheet: The Golden Dome and Canada", publisher: "Canadian Centre for Policy Alternatives", url: "https://www.policyalternatives.ca/news-research/fact-sheet-golden-dome-and-canada/", date: "2025" },
        { title: "War of 1812", publisher: "The Canadian Encyclopedia", url: "https://www.thecanadianencyclopedia.ca/en/article/war-of-1812", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_ca-2", kind: "relation", asOf: "2026-09-30",
      title: "Softwood lumber: the forty-year fight",
      dek: "Since 1982 American sawmills have accused Canada of subsidising its timber. The dispute has outlasted seven presidents, and in 2025 duties on Canadian lumber climbed to around 45%.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ca/us_ca-2-hero.webp",
          alt: "Illustration of a sawmill yard in a British Columbia valley with stacks of cut lumber, a log pond and forested mountains behind.",
          caption: "British Columbia's forests supply much of the lumber used to build American homes.",
          credit: "AI illustration — not a photograph",
          prompt: "A sawmill yard in a forested British Columbia valley, tall stacks of freshly cut pale lumber wrapped for shipping, a log pond, a freight train with flatcars waiting, snow-capped mountains and dense evergreen forest behind, soft morning light, industrious mood, no people up close, no legible text." },
        { type: "facts", head: "The dispute in brief", rows: [
          ["Began", "1982, 'Lumber I'"],
          ["Core complaint", "Low provincial 'stumpage' fees subsidise Canadian mills"],
          ["2006 deal", "US returned about $4–4.5 billion in duties; expired 2015"],
          ["Duties since August 2025", "About 35% anti-dumping and anti-subsidy duties"],
          ["Plus, since October 2025", "A 10% Section 232 tariff on all imported lumber"]
        ] },
        { type: "section", head: "Stumpage", md:
          "Most Canadian forests are publicly owned. Provinces charge companies a 'stumpage' fee for each tree they cut. In the US, most timber grows on private land and is sold at market prices. American sawmills argue that provinces set stumpage too low, a hidden subsidy that lets Canadian lumber undercut them. Canada says its fees are fair, and that Americans simply need its wood: Canada supplies roughly a quarter of the softwood lumber used in the United States, much of it to build houses." },
        { type: "section", head: "Five rounds", md:
          "The fight has run in rounds since 1982. In 'Lumber II' Canada agreed in 1986 to tax its own exports by 15% to avoid US duties. Later rounds brought duties, appeals to NAFTA panels and the WTO, which often found in Canada's favour, and truces. The 2006 Softwood Lumber Agreement returned about $4–4.5 billion of duties to Canadian firms and capped exports, but it expired in 2015. Since then the US has charged [[anti-dumping-duty|anti-dumping]] and anti-subsidy duties again, 'Lumber V'." },
        { type: "section", head: "The 2025 escalation", md:
          "In 2025 the Commerce Department more than doubled the combined duties on most Canadian lumber, to about 35% by August. Then, under [[section-232|Section 232]], Trump added a 10% national-security tariff on all imported softwood lumber from October, bringing the total for most Canadian producers to around 45%. Canada called the duties unjustified, fought them before trade panels and set aside about C$1.2 billion to support its forestry industry. Mills in British Columbia and Quebec cut shifts and closed, and some Canadian companies bought sawmills in the American South to get inside the tariff wall. A 2026 review of the duties is expected to lower the anti-dumping part somewhat, though not the new tariff." },
        { type: "compare", head: "Two views of the lumber war",
          left: { head: "US sawmills", md:
            "Canada's provinces sell timber below its value; duties simply level the field so American mills and forest owners can compete." },
          right: { head: "Canada and US homebuilders", md:
            "Duties make every new American home more expensive, while US mills can't supply enough wood to meet demand on their own." } },
        { type: "section", head: "Why it matters", md:
          "Softwood lumber shows how old grievances resurface in any trade war. It has never been covered by free trade, because both NAFTA and the [[USMCA]] left each side free to use duties against the other. Every round costs American homebuyers, Canadian mill towns and forest-dependent Indigenous communities. For Canada, it is proof that even a free-trade deal doesn't protect it from Washington (see [[lesson:ca-6]])." }
      ],
      takeaways: [
        "Since 1982 US sawmills have accused Canada's provinces of subsidising lumber through low stumpage fees.",
        "Truces came and went; the 2006 agreement expired in 2015 and duties returned.",
        "In 2025 duties rose to about 35%, and a 10% Section 232 tariff took the total to around 45%."
      ],
      check: { q: "What is 'stumpage'?",
        choices: ["A tariff on lumber", "The fee provinces charge companies to cut trees on public land", "A type of wood"], answer: 1,
        explain: "Most Canadian forests are public; the US says provincial stumpage fees are set too low." },
      sources: [
        { title: "U.S.-Canada Softwood Lumber Trade: Current Issues for Congress", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/R48781", date: "2025" },
        { title: "Softwood Lumber Dispute", publisher: "The Canadian Encyclopedia", url: "https://www.thecanadianencyclopedia.ca/en/article/softwood-lumber-dispute", date: "n.d." },
        { title: "Canadian Lumber Duties Hit 35% — And May Go Higher Soon", publisher: "National Association of Home Builders", url: "https://www.nahb.org/blog/2025/08/canadian-lumber-cvd-rates", date: "2025-08" },
        { title: "Canadian Lumber Duties Expected to Drop This Summer", publisher: "National Association of Home Builders", url: "https://www.nahb.org/blog/2026/04/canadian-lumbers-duties-to-drop", date: "2026-04" },
        { title: "Softwood lumber: recent developments", publisher: "Global Affairs Canada", url: "https://www.international.gc.ca/controls-controles/softwood-bois_oeuvre/recent.aspx?lang=eng", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_ca-3", kind: "relation", asOf: "2026-09-30",
      title: "Oil, power and water",
      dek: "Canada is America's biggest supplier of energy, from crude oil to hydroelectric power. In a trade war, that dependence cuts both ways.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ca/us_ca-3-hero.webp",
          alt: "Illustration of a pipeline crossing a wide prairie landscape under a big sky, with a line of electricity pylons in the distance.",
          caption: "Pipelines carry millions of barrels of Canadian crude south every day.",
          credit: "AI illustration — not a photograph",
          prompt: "A large steel pipeline running straight across a wide golden prairie under a vast sky with towering clouds, a line of high-voltage electricity pylons marching toward the horizon, a small pumping station, late afternoon light, calm and expansive, no people, no legible text." },
        { type: "facts", head: "Energy in numbers (2025)", rows: [
          ["Canada's share of US crude oil imports", "63.4%"],
          ["Canadian crude and products to the US", "About 4.5 million barrels a day"],
          ["Electricity exported to the US", "32.7 terawatt-hours, worth about $3.3 billion"],
          ["Canada's main oil export route", "Pipelines to the US Midwest and Gulf Coast"]
        ] },
        { type: "section", head: "Oil flows south", md:
          "Canada holds some of the world's largest oil reserves, most of them in Alberta's oil sands. Nearly all its oil exports go to the United States, by pipeline, where refineries in the Midwest and on the Gulf Coast are built to process its heavy crude. In 2025 Canada supplied 63.4% of the crude oil the US imported, more than three times the next four suppliers combined. For years that meant Canada had essentially one customer, which paid a discount for it." },
        { type: "section", head: "Pipelines and politics", md:
          "Pipelines became a political fight on both sides of the border. Barack Obama rejected the Keystone XL pipeline in 2015, Trump approved it, and Joe Biden cancelled it on his first day in 2021, angering Alberta. Canada then finished the government-owned Trans Mountain expansion to the Pacific coast in 2024, letting it sell more oil to Asia. In November 2025 Carney agreed with Alberta to pursue another pipeline to the Pacific, part of a push to depend less on the US market (see [[lesson:ca-4]])." },
        { type: "section", head: "Power across the border", md:
          "Electricity grids are also linked. Quebec, Manitoba, British Columbia and Ontario export hydroelectric and nuclear power to New York, New England, Minnesota and Michigan. In March 2025 Ontario's premier, Doug Ford, added a 25% surcharge on power sent to three US states in response to tariffs. Trump threatened to double tariffs on Canadian steel in reply, and Ford suspended it within a day. The episode showed how quickly either side could hurt the other, and how hard it is to use energy as a weapon against a neighbour." },
        { type: "section", head: "Water", md:
          "Water is the other shared resource. The two countries have managed the Great Lakes and boundary rivers together since the Boundary Waters Treaty of 1909, and the Columbia River under a 1964 treaty whose update was agreed in principle in 2024 but paused by Washington in 2025. Trump's claims in 2025 that Canada should send the US more water alarmed Canadians, though experts pointed out that little of it could practically be moved." },
        { type: "compare", head: "Two views of energy ties",
          left: { head: "Integration", md:
            "Shared pipelines and grids make North America energy-secure and lower prices for both; neither should turn them into weapons." },
          right: { head: "Diversification", md:
            "Relying on a single customer that can tax or block your exports is a risk; Canada must build routes to Asia and Europe." } },
        { type: "section", head: "Why it matters", md:
          "Energy is Canada's biggest export and its strongest card in any fight with Washington. Even at the peak of the 2025 trade war, Trump set lower tariffs on Canadian energy than on other goods, because cutting it off would raise American petrol and power prices. Canada's decision to build routes to the Pacific shows how the trade war is changing an old partnership." }
      ],
      takeaways: [
        "Canada supplied 63.4% of US crude oil imports in 2025, carried mostly by pipeline.",
        "Pipeline fights, from Keystone XL to new routes to the Pacific, have pushed Canada to sell beyond the US.",
        "Linked grids and shared waters mean both countries can hurt each other, which usually restrains them."
      ],
      check: { q: "About what share of US crude oil imports came from Canada in 2025?",
        choices: ["About 10%", "About a third", "About 63%"], answer: 2,
        explain: "Canada supplied 63.4% of US crude imports, more than three times the next four suppliers combined." },
      sources: [
        { title: "Market Snapshot: Overview of 2025 Canada–U.S. energy trade", publisher: "Canada Energy Regulator", url: "https://www.cer-rec.gc.ca/en/data-analysis/energy-markets/market-snapshots/2026/market-snapshot-overview-of-2025-canada-us-energy-trade.html", date: "2026" },
        { title: "The U.S.-Canada natural gas and electricity trade value rose in 2025", publisher: "US Energy Information Administration", url: "https://www.eia.gov/todayinenergy/detail.php?id=67924", date: "2026" },
        { title: "US-Canada trade war threatens electricity imports, prices", publisher: "Utility Dive", url: "https://www.utilitydive.com/news/us-canada-trade-war-threatens-electricity-imports-prices/828689/", date: "2025" },
        { title: "Mapped: America's Oil Imports by Country", publisher: "Visual Capitalist", url: "https://www.visualcapitalist.com/mapped-u-s-oil-imports-by-country/", date: "2026" }
      ]
    }
  ]
});
