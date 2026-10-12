/* ============================================================
   Relationship — Canada & Mexico 🇨🇦🇲🇽
   Distant neighbours joined by NAFTA and farm workers; a visa
   fight over asylum claims; and two countries facing Trump's
   tariffs and the 2026 USMCA review, together and apart.
   The US side is in us_ca and us_mx.
   Research note and sources: tools/research/ca_mx.md
   Current as of 11 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("ca_mx", {
  id: "ca_mx",
  asOf: "2026-10-11",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ca_mx-1", kind: "relation", asOf: "2026-10-11",
      title: "Neighbours of a neighbour",
      dek: "Canada and Mexico share a continent but not a border. For most of their history they dealt with each other through the giant between them, until NAFTA, farm workers and tourists brought them closer.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca_mx/ca_mx-1-hero.webp",
          alt: "Illustration of farm workers picking in long rows of a greenhouse with vines, seen from behind, in soft morning light.",
          caption: "Mexican seasonal workers have come to Canadian farms since 1974.",
          credit: "Illustration — not a photograph",
          prompt: "Farm workers in hats picking tomatoes along long rows of vines inside a large greenhouse in soft morning light, plastic crates on the ground, glass roof above, documentary painting style, figures seen from behind and at a distance, no flags, no legible text." },
        { type: "timeline", head: "Getting to know each other", items: [
          ["1944", "Canada and Mexico establish diplomatic relations"],
          ["1974", "Mexican workers join Canada's seasonal farm worker programme"],
          ["1990", "Canada joins the Organization of American States"],
          ["1 Jan 1994", "NAFTA takes effect"],
          ["2004", "Canada–Mexico Partnership launched"],
          ["2010s", "Millions of Canadians holiday in Mexico each year"]
        ] },
        { type: "section", head: "Far apart", md:
          "Canada and Mexico are separated by the 3,000 kilometres of the United States and by language, history and wealth. Canada was a British dominion; Mexico won independence from Spain in 1821 and lost half its territory to the United States (see [[lesson:mx-10]]). For most of the 20th century each dealt with Washington and paid little attention to the other. They did not establish full diplomatic relations until 1944, and trade between them was tiny." },
        { type: "section", head: "Farm workers", md:
          "One early link was labour. Since 1974 Mexican workers have come to Canada under the Seasonal Agricultural Worker Program, which lets farms hire foreign workers for up to eight months a year. Tens of thousands now arrive each season to pick fruit and vegetables, work in greenhouses and on tobacco farms in Ontario, Quebec and British Columbia. The programme is valued by both governments, but rights groups have long criticised workers' housing, their dependence on a single employer and the difficulty of complaining about abuse." },
        { type: "section", head: "NAFTA", md:
          "What really brought the two together was the North American Free Trade Agreement. Canada and the United States had signed a free trade deal in 1988; when Mexico sought one with Washington, Canada insisted on joining to protect its interests. NAFTA took effect on 1 January 1994. Trade between Canada and Mexico grew many times over, and car plants in Ontario and Mexico became part of one North American production line." },
        { type: "section", head: "Investment and people", md:
          "Canadian companies became major investors in Mexico, especially in mining, where Canadian firms run many of Mexico's gold and silver mines, and in banking, rail and energy. Mexico became one of the most popular winter destinations for Canadians, more than two million of whom visit each year, with beach resorts such as Cancún and Puerto Vallarta full of Canadian tourists." },
        { type: "section", head: "Mines and conflict", md:
          "Canadian mining has also caused friction. Some Mexican communities have accused Canadian-owned mines of polluting water and failing to share benefits, and activists opposing mines have been threatened and, in a few cases, killed." },
        { type: "section", head: "Shared positions", md:
          "Both countries are middle powers that value international law, multilateral institutions and good relations with Washington. Both stayed out of the 2003 Iraq war." },
        { type: "compare", head: "Two different neighbours",
          left: { head: "Canada", md:
            "Rich, sparsely populated, close to the US in culture and language." },
          right: { head: "Mexico", md:
            "Much larger population, poorer, wary of the US after centuries of conflict." } },
        { type: "section", head: "Why it matters", md:
          "Mexico is Canada's third-largest trading partner, after the United States and China. Their relationship has always depended on the United States, which is why Trump's return has tested it." }
      ],
      takeaways: [
        "Canada and Mexico share no border and had little contact until the late 20th century.",
        "Mexican workers have come to Canadian farms under a seasonal programme since 1974.",
        "NAFTA, from 1994, tied their economies together; Canadian firms run many Mexican mines."
      ],
      check: { q: "Why did Canada join the NAFTA talks?",
        choices: ["To create a common currency", "To protect its interests when Mexico sought a free trade deal with the US", "Because Mexico invited only Canada"], answer: 1,
        explain: "NAFTA took effect on 1 January 1994." },
      sources: [
        { title: "Canada-Mexico relations", publisher: "Government of Canada", url: "https://www.international.gc.ca/country-pays/mexico-mexique/relations.aspx?lang=eng", date: "n.d." },
        { title: "Joint Statement by Prime Minister Carney and President Sheinbaum", publisher: "Embassy of Canada to Mexico", url: "https://canadainmexico.com/2025/09/joint-statement-by-prime-minister-carney-and-president-sheinbaum/", date: "2025-09-18" },
        { title: "Inside the Mechanics of the 2026 USMCA Review", publisher: "CSIS", url: "https://www.csis.org/analysis/inside-mechanics-2026-usmca-review", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ca_mx-2", kind: "relation", asOf: "2026-10-11",
      title: "Visas and asylum",
      dek: "Canada imposed visas on Mexicans in 2009, lifted them in 2016 and brought them back for most travellers in 2024, after asylum claims soared. Each time, Mexico was angry.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca_mx/ca_mx-2-hero.webp",
          alt: "Illustration of a busy airport arrivals hall with passport control booths and travellers queuing with luggage.",
          caption: "Mexican visitors were the largest source of asylum claims in Canada in 2023.",
          credit: "Illustration — not a photograph",
          prompt: "A busy airport arrivals hall with a row of passport control booths, travellers queuing with rolling suitcases behind a barrier, large windows with planes outside, cool fluorescent light, documentary painting style, figures seen from behind, no flags, no legible text." },
        { type: "timeline", head: "The visa fight", items: [
          ["2009", "Harper government imposes visas on Mexicans"],
          ["Jun 2016", "Trudeau promises to lift the visa"],
          ["1 Dec 2016", "Visa requirement lifted"],
          ["2023", "Nearly 24,000 asylum claims by Mexicans"],
          ["29 Feb 2024", "Visa reimposed for most Mexican travellers"],
          ["Mar–Sep 2024", "Mexican asylum claims fall by 70%"]
        ] },
        { type: "section", head: "2009", md:
          "In the 2000s growing numbers of Mexicans arrived in Canada and claimed asylum, many citing cartel violence or persecution; most claims were rejected. In 2009 Stephen Harper's Conservative government imposed a visa requirement on Mexican travellers to stem the flow. Mexico was furious: it saw the measure as an insult to a NAFTA partner and retaliated by requiring visas for Canadian diplomats. Tourism and business travel from Mexico fell sharply." },
        { type: "section", head: "Lifted", md:
          "Justin Trudeau promised to lift the visa, and in June 2016 announced it alongside Mexico's president, Enrique Peña Nieto; it ended on 1 December 2016. In return Mexico reopened its market to Canadian beef. Mexicans could now visit Canada with a simple electronic travel authorisation." },
        { type: "section", head: "Claims soar", md:
          "After 2016 asylum claims from Mexicans rose again, from 260 in 2016 to almost 24,000 in 2023, when Mexicans made 17% of all claims in Canada. Many flew to Canada as visitors and then claimed asylum; some were also crossing into the United States. Quebec's government complained about the burden on its services, and the Biden administration was concerned about Mexicans crossing south from Canada." },
        { type: "section", head: "2024", md:
          "On 29 February 2024 the Trudeau government reimposed visa requirements on most Mexican travellers. Those who had held a Canadian visa in the past ten years or a valid US visa could still apply for an electronic authorisation to fly in; others needed a visa. Officials estimated that about 40% of Mexican travellers would be affected. Asylum claims by Mexicans fell by 70% in the following months." },
        { type: "section", head: "Mexico's response", md:
          "President Andrés Manuel López Obrador criticised the decision but did not retaliate with visas for Canadians, saying Mexico would not respond in kind. Mexican business groups and the tourism industry complained that the rule hurt trade and investment, and Mexican diplomats pressed Ottawa to speed up visa processing, which can take weeks or months." },
        { type: "section", head: "Students and workers", md:
          "Despite the visa rules, Mexican students, temporary workers and skilled migrants continue to come to Canada in large numbers, and the seasonal farm programme is unaffected. Canada also issues more work permits to Mexicans than to almost any other Latin American nationality, and a growing Mexican community lives in Toronto, Montreal and Vancouver." },
        { type: "compare", head: "The visa question",
          left: { head: "Ottawa", md:
            "A necessary tool to protect the asylum system from abuse." },
          right: { head: "Mexico City", md:
            "An unfriendly act toward a close partner that hurts trade and tourism." } },
        { type: "section", head: "Why it matters", md:
          "The visa fights show how domestic pressures over migration can strain even friendly relationships, and how each country's ties with the US shape its decisions." }
      ],
      takeaways: [
        "Canada imposed visas on Mexicans in 2009 and lifted them in December 2016.",
        "Asylum claims from Mexicans rose to almost 24,000 in 2023, 17% of all claims in Canada.",
        "Canada reimposed visas for most Mexican travellers on 29 February 2024; claims fell by 70%."
      ],
      check: { q: "Why did Canada reimpose visas on most Mexican travellers in 2024?",
        choices: ["A trade dispute", "A sharp rise in asylum claims by Mexicans", "A security incident"], answer: 1,
        explain: "Claims had risen from 260 in 2016 to nearly 24,000 in 2023." },
      sources: [
        { title: "Canada reimposes a visa requirement on Mexicans", publisher: "Seattle Times (AP)", url: "https://www.seattletimes.com/business/canada-reimposes-a-visa-requirement-on-mexicans/", date: "2024-02-29" },
        { title: "Mexico: Border Crossings/Asylum Claims (CIMM briefing)", publisher: "Immigration, Refugees and Citizenship Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/committees/cimm-nov-25-2024/mexico-border-crossings-asylum-claims.html", date: "2024-11-25" },
        { title: "Visa requirements reimposed for Mexican nationals", publisher: "BDO Canada", url: "https://www.bdo.ca/insights/canada-reimposes-visa-requirements-for-mexican-nationals", date: "2024" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ca_mx-3", kind: "relation", asOf: "2026-10-11",
      title: "Two targets of Trump",
      dek: "Both face Trump's tariffs and the 2026 review of their trade pact with Washington. Carney and Sheinbaum signed an action plan in 2025 and promised to coordinate, but they have taken different paths.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca_mx/ca_mx-3-hero.webp",
          alt: "Illustration of a long line of freight trucks waiting at a border crossing on a highway at dawn.",
          caption: "Most trade between the three countries crosses by truck and rail.",
          credit: "Illustration — not a photograph",
          prompt: "A long line of freight trucks waiting at a border crossing on a multi-lane highway at dawn, inspection booths and canopies ahead, flat landscape with low hills, pale pink sky, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Facing Washington", items: [
          ["Jul 2020", "USMCA replaces NAFTA"],
          ["2025", "Trump imposes tariffs on both countries"],
          ["18 Sep 2025", "Carney and Sheinbaum sign a strategic partnership and action plan"],
          ["Mar 2026", "Mexico opens technical talks with the US"],
          ["Apr 2026", "Leaders agree 'close coordination' on the USMCA review"],
          ["Jul 2026", "Formal joint review of USMCA begins"]
        ] },
        { type: "section", head: "Trump's first term", md:
          "In his first term Trump called NAFTA 'the worst trade deal ever' and forced its renegotiation. In 2018 Mexico, under outgoing President Peña Nieto, reached a preliminary deal with Washington first, leaving Canada to scramble to join. The result, the USMCA, took effect in July 2020. Canadian officials did not forget that Mexico had gone ahead without them." },
        { type: "section", head: "Tariffs again", md:
          "Trump's second term brought tariffs on both, justified at first by drugs and migration. Mexico's Claudia Sheinbaum chose quiet negotiation, sending troops to the US border and extraditing cartel figures (see [[lesson:mx-7]]). Canada's Mark Carney won an election in 2025 on standing up to Trump, and when talks collapsed in August 2026, Ottawa faced 50% tariffs on cars, dairy and drinks and struck back (see [[lesson:ca-6]])." },
        { type: "section", head: "The action plan", md:
          "Carney made Mexico City one of his first foreign trips. On 18 September 2025 he and Sheinbaum announced a comprehensive strategic partnership and a three-year Canada–Mexico Action Plan, covering trade, energy, infrastructure, agriculture, health, mobility and security. They talked of new maritime routes linking Canadian and Mexican ports, bypassing the United States, and of more Canadian investment in Mexico." },
        { type: "section", head: "Different paths", md:
          "In April 2026 the two leaders agreed to coordinate closely on the USMCA review. In practice they have diverged. Mexico opened technical talks with the US Trade Representative in March 2026 on rules of origin and supply chains, and in September Sheinbaum said Mexico would buy more American goods to help reduce the US trade deficit. Canada spent months in a breakdown with Washington and has focused on diversifying its trade toward Europe and Asia." },
        { type: "section", head: "The review", md:
          "Under the USMCA, the three governments had to meet in July 2026 to decide whether to extend the pact for 16 years, revise it or let it head toward expiry in 2036. The review is under way; its outcome will shape both economies." },
        { type: "section", head: "Competition", md:
          "Canada and Mexico also compete: both want car plants and investment that might otherwise go elsewhere in North America, and both could gain if Washington favours one over the other. Canadian officials worry that Mexico's lower wages and closer ties with Chinese investors could make it a target for American restrictions that also hurt Canada." },
        { type: "compare", head: "Two strategies",
          left: { head: "Mexico", md:
            "Negotiate quietly, make concessions and avoid open confrontation." },
          right: { head: "Canada", md:
            "Hit back with tariffs and diversify away from the US." } },
        { type: "section", head: "Why it matters", md:
          "If Canada and Mexico stand together, they have more leverage in the review. If they compete for Washington's favour, either could be left worse off." }
      ],
      takeaways: [
        "Carney and Sheinbaum signed a strategic partnership and a three-year action plan on 18 September 2025.",
        "Both face Trump's tariffs; Mexico negotiates quietly while Canada has retaliated.",
        "They promised to coordinate on the 2026 USMCA review, but have taken different paths."
      ],
      check: { q: "What must the three USMCA countries decide in the 2026 review?",
        choices: ["Whether to adopt a common currency", "Whether to extend, revise or let the pact head toward expiry", "Whether to admit new members"], answer: 1,
        explain: "Without an extension the pact would expire in 2036." },
      sources: [
        { title: "Prime Minister Carney meets with President of Mexico Claudia Sheinbaum", publisher: "Prime Minister of Canada", url: "https://www.pm.gc.ca/en/news/readouts/2025/09/18/prime-minister-carney-meets-president-mexico-claudia-sheinbaum", date: "2025-09-18" },
        { title: "Canada, Mexico agree to 'close co-ordination' on USMCA talks", publisher: "The Globe and Mail", url: "https://www.theglobeandmail.com/politics/article-canada-mexico-agree-to-close-coordination-on-usmca-talks/", date: "2026-04" },
        { title: "Canada and Mexico on different paths heading into USMCA crunch time", publisher: "The Globe and Mail", url: "https://www.theglobeandmail.com/business/article-canada-mexico-usmca-review-date-trade-talks/", date: "2026" },
        { title: "Mexico plans to boost US imports as part of trade treaty review, Sheinbaum says", publisher: "Reuters (via Stacks)", url: "https://stacks921.com/2026/09/21/mexico-plans-to-boost-us-imports-as-part-of-trade-treaty-review-sheinbaum-says/", date: "2026-09-21" }
      ]
    }
  ]
});
