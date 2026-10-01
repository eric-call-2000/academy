/* ============================================================
   Relationship — United States & Mexico 🇺🇸🇲🇽
   Factories, migrants and guns: how two neighbours are bound
   together by trade, people and crime.
   Research note and sources: tools/research/us_mx.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_mx", {
  id: "us_mx",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_mx-1", kind: "relation", asOf: "2026-09-30",
      title: "Built together",
      dek: "Cars, televisions and medical devices are made on both sides of the border at once. That deep integration is why tariffs between the two countries hurt so much.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_mx/us_mx-1-hero.webp",
          alt: "Illustration of long lines of cargo trucks waiting at a border crossing in the desert at dawn, with factory buildings on the far side.",
          caption: "Most US–Mexico trade crosses the land border by truck and train.",
          credit: "Illustration — not a photograph",
          prompt: "Long lines of cargo trucks waiting at a busy land border crossing in the desert at dawn, customs canopies and lanes in the middle distance, low factory buildings and hills on the far side, warm hazy light, a sense of scale and routine, no people up close, no flags, no legible text." },
        { type: "facts", head: "Trade in numbers", rows: [
          ["Two-way goods trade, 2025", "$872.8 billion, a record"],
          ["Rank", "Mexico has been the top US trading partner since 2023"],
          ["Share of Mexico's exports sold to the US", "About four-fifths"],
          ["Free trade since", "NAFTA, 1994; the USMCA replaced it in 2020"]
        ] },
        { type: "section", head: "From border plants to NAFTA", md:
          "In 1965 Mexico launched the maquiladora programme: factories near the border could import American parts duty-free, assemble them with Mexican labour and send the finished goods back north. Towns such as Tijuana and Ciudad Juárez grew into manufacturing cities. The North American Free Trade Agreement (NAFTA), in force from 1994, removed most tariffs between the US, Mexico and Canada and turned that border arrangement into a continental one." },
        { type: "section", head: "One production line", md:
          "Today many products are made in both countries at once. A car part can cross the border several times: steel from Texas, stamped in Coahuila, fitted into a seat in Michigan and finally installed in a car assembled in Guanajuato. Mexico is the largest exporter of cars and trucks to the US, and a major supplier of televisions, computers, medical equipment and fresh produce such as avocados and tomatoes. In return it buys American petrol, natural gas, corn and pork.\n\n" +
          "Since 2023 Mexico has been America's biggest trading partner, overtaking China and Canada, helped by 'nearshoring': companies moving production closer to the US to avoid tariffs on China and long supply chains." },
        { type: "section", head: "Why tariffs bite", md:
          "Because goods cross the border so often, a tariff is paid again and again, and American factories that depend on Mexican parts pay it too. In 2025 Trump imposed tariffs on Mexico over fentanyl and migration, but exempted goods that met the rules of the [[USMCA]], which covered most trade. The Supreme Court struck down those emergency tariffs in February 2026, but [[section-232|Section 232]] tariffs on steel, aluminium and cars that don't meet US-content rules remain (see [[unit:us]])." },
        { type: "compare", head: "Two views of integration",
          left: { head: "Supporters", md:
            "Shared production keeps North American industry competitive with Asia, and every Mexican job in a supply chain supports American ones too." },
          right: { head: "Critics", md:
            "Free trade sent American factory jobs south to lower wages, and Chinese firms use Mexico as a back door into the US market." } },
        { type: "section", head: "Where it stands", md:
          "The USMCA is under its first formal review in 2026. Washington wants more of each vehicle made in the US and tighter rules against Chinese parts and investment; Mexico has raised its own tariffs on Chinese imports to show it is not a back door. If the review fails, the agreement doesn't end at once but starts a ten-year countdown to 2036 with yearly reviews, an uncertainty investors dislike (see [[unit:mx]], [[lesson:mx-7]])." },
        { type: "section", head: "Why it matters", md:
          "For Mexico, the US market is the economy: without it growth and millions of jobs would collapse. For the US, Mexico is the largest customer for many American farm goods and a pillar of its car industry. Neither can impose costs on the other without paying a share itself, which is why trade disputes between them usually end in a deal." }
      ],
      takeaways: [
        "Mexico has been America's biggest trading partner since 2023, with a record $872.8 billion in goods trade in 2025.",
        "From the 1965 border factories to NAFTA and the USMCA, the two economies became one production line.",
        "Because parts cross the border many times, tariffs hurt both countries; the USMCA's 2026 review will set the rules."
      ],
      check: { q: "Why do tariffs between the US and Mexico hurt American factories too?",
        choices: ["Mexico pays the tariffs directly", "Parts cross the border several times, so US producers pay the tariff on their own supply chains", "The USMCA bans tariffs"], answer: 1,
        explain: "Many American manufacturers depend on parts made in Mexico, so a tariff raises their own costs." },
      sources: [
        { title: "US-Mexico trade hits new high of $872B in 2025", publisher: "FreightWaves", url: "https://www.freightwaves.com/news/us-mexico-trade-hits-new-high-of-872b-in-2025", date: "2026-02" },
        { title: "U.S.-Mexico Trade Relations", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/IF11175", date: "2026" },
        { title: "Maquiladora", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Maquiladora", date: "n.d." },
        { title: "This one auto part crosses the border four times on its way to your car", publisher: "NBC News", url: "https://www.nbcnews.com/business/autos/one-auto-part-crosses-border-four-way-car-rcna200706", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_mx-2", kind: "relation", asOf: "2026-09-30",
      title: "Migrants and money",
      dek: "Millions of Mexicans live in the United States and send billions home. Since 2025 crossings have fallen to a 55-year low, deportations have risen, and the money flowing south has shrunk.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_mx/us_mx-2-hero.webp",
          alt: "Illustration of a tall steel border fence running across desert hills at sunset, with a small town on one side.",
          caption: "Crossings at the southern border fell to their lowest level since 1970 in 2025.",
          credit: "Illustration — not a photograph",
          prompt: "A tall steel bollard border fence running across rolling desert hills at sunset, long shadows, a small town with lights coming on in the valley on one side, empty dirt road alongside the fence, vast sky, quiet and heavy mood, no people, no legible text." },
        { type: "facts", head: "People and money", rows: [
          ["Border Patrol arrests, fiscal 2025", "237,565, the lowest since 1970"],
          ["Deportations of Mexicans, 2025", "About 160,000"],
          ["Remittances to Mexico, 2025", "$61.8 billion, down 4.6%, the biggest fall since 2009"],
          ["New US tax", "1% on cash-funded money transfers, since January 2026"]
        ] },
        { type: "section", head: "A shared population", md:
          "Migration has tied the two countries together for more than a century, from the wartime 'Bracero' farmworker programme of 1942–64 to the large flows of the 1990s and 2000s. About 11 million people born in Mexico live in the United States, and tens of millions of Americans have Mexican roots. For decades Mexicans made up most people crossing the border without papers; by the 2020s most came from Central and South America, Haiti and beyond, crossing Mexico to reach the US." },
        { type: "section", head: "Mexico as America's gatekeeper", md:
          "As crossings hit records in 2021–23, Washington pressed Mexico to stop migrants before they reached the border. Mexico deployed its National Guard, broke up caravans and let the US send some asylum seekers back to wait in Mexico. In 2025 Trump declared a border emergency, closed off asylum at the border and threatened tariffs. Sheinbaum sent 10,000 troops to the frontier. Arrests fell to 237,565 in the year to September 2025, the lowest since 1970." },
        { type: "section", head: "Deportations and the money home", md:
          "Deportations from the interior of the US rose sharply, and Mexico opened shelters to receive returning citizens under a programme called 'Mexico embraces you'. Fear of raids also kept many workers home, and from January 2026 the US began charging a 1% tax on money transfers paid in cash.\n\n" +
          "Remittances, the money migrants send home, are one of Mexico's biggest sources of foreign income, larger than oil exports or tourism, and vital to poorer states such as Michoacán, Guerrero and Oaxaca. In 2025 they fell 4.6% to $61.8 billion, the biggest drop since the 2009 financial crisis." },
        { type: "section", head: "What the money pays for", md:
          "Most remittances are small, regular transfers of a few hundred dollars, spent on food, rent, school fees and medicine, or saved to build a house. In some villages in western and southern Mexico they are the main source of income. Economists worry less about the national total, which is a small share of Mexico's economy, than about the families and towns that depend on it almost entirely." },
        { type: "compare", head: "Two views of the crackdown",
          left: { head: "Supporters", md:
            "Restoring control of the border was overdue; lower crossings reduce smuggling and deaths, and pressure on Mexico worked." },
          right: { head: "Critics", md:
            "Closing asylum and mass deportations break families and harm industries that rely on migrant workers, on both sides of the border." } },
        { type: "section", head: "Why it matters", md:
          "Migration is where American domestic politics and Mexican cooperation meet. Mexico's help at its own borders is one of its main bargaining chips in trade talks, and Washington uses the threat of tariffs to get more. Fewer migrants and smaller remittances ease one problem for the US while creating another for Mexico's poorest regions (see [[unit:mx]] and [[unit:us]])." }
      ],
      takeaways: [
        "About 11 million Mexican-born people live in the US, and remittances are one of Mexico's biggest sources of income.",
        "Under pressure from Washington, Mexico now polices migration toward the US; border arrests in fiscal 2025 were the lowest since 1970.",
        "Deportations and fear of raids pushed remittances down 4.6% in 2025, the biggest fall since 2009."
      ],
      check: { q: "What are remittances?",
        choices: ["Tariffs on imports", "Money migrants send to families in their home country", "Payments from the US government to Mexico"], answer: 1,
        explain: "Migrants in the US sent $61.8 billion to Mexico in 2025, a major source of income for many families." },
      sources: [
        { title: "Lowest Fiscal Year for Border Patrol Apprehensions Since 1970", publisher: "US Customs and Border Protection", url: "https://www.cbp.gov/newsroom/national-media-release/lowest-fiscal-year-border-patrol-apprehensions-1970", date: "2025-10" },
        { title: "Migrant encounters at the US-Mexico border are at their lowest level in more than 50 years", publisher: "Pew Research Center", url: "https://www.pewresearch.org/short-reads/2026/02/02/migrant-encounters-at-the-us-mexico-border-are-at-their-lowest-level-in-more-than-50-years/", date: "2026-02-02" },
        { title: "Remittances dropped 4.6% in 2025, the biggest annual decline in 16 years", publisher: "Mexico News Daily", url: "https://mexiconewsdaily.com/news/remittance-biggest-decline-in-16-years/", date: "2026-02" },
        { title: "1 percent tax on remittances from US takes effect in 2026", publisher: "Border Report", url: "https://www.borderreport.com/news/trade/1-percent-tax-on-remittances-from-us-takes-effect-in-2026/", date: "2025" },
        { title: "Mexico: did deportations of Mexicans from the US increase?", publisher: "BBVA Research", url: "https://www.bbvaresearch.com/en/publicaciones/mexico-did-deportations-of-mexicans-from-the-us-increase/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_mx-3", kind: "relation", asOf: "2026-09-30",
      title: "Guns south, drugs north",
      dek: "American demand pays for Mexico's cartels, and American guns arm them. Each government blames the other's half of the problem, and both have changed course since 2025.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_mx/us_mx-3-hero.webp",
          alt: "Illustration of a highway border checkpoint at night, with a pickup truck being inspected under floodlights by officers seen from behind.",
          caption: "Drugs are mostly smuggled north through official crossings; guns travel south the same way.",
          credit: "Illustration — not a photograph",
          prompt: "A highway border checkpoint at night lit by harsh floodlights, a pickup truck stopped with its doors open, two officers seen from behind inspecting it with a dog, a line of headlights behind, tense and procedural mood, no faces, no legible text, no insignia." },
        { type: "facts", head: "The two flows", rows: [
          ["US overdose deaths, 2025", "About 70,000, down 14% (CDC)"],
          ["Guns traced in Mexico from the US", "About 70% of those submitted for tracing (ATF)"],
          ["Cartel prisoners sent to the US", "92 in three transfers, Feb 2025–Jan 2026"],
          ["Mexico's lawsuit against US gun makers", "Rejected 9–0 by the Supreme Court, June 2025"]
        ] },
        { type: "section", head: "Drugs north", md:
          "Mexico's cartels grew rich supplying American demand, first for marijuana and cocaine, then heroin and methamphetamine, and since the late 2010s fentanyl, a synthetic opioid made from chemicals largely bought from China. Fentanyl drove the worst overdose crisis in US history. Deaths have since fallen for three years in a row, to about 70,000 in 2025, though fentanyl still kills tens of thousands of Americans. Most of it is smuggled through official crossings, often by US citizens." },
        { type: "section", head: "Guns south", md:
          "Mexico has strict gun laws and a single legal gun shop, run by the army. Yet its cartels are heavily armed, largely with weapons bought in US gun shops and smuggled south: of the guns recovered in Mexico and traced, about 70% came from the United States, according to the ATF. Mexico sued American gun makers, arguing they knowingly supplied traffickers. In June 2025 the US Supreme Court unanimously threw out the case, ruling that a 2005 law shields manufacturers from such suits." },
        { type: "section", head: "A new bargain", md:
          "In 2025 Washington designated six Mexican cartels as foreign terrorist organisations and threatened military action on Mexican soil. Sheinbaum answered with cooperation on her terms. Mexico sent 92 imprisoned cartel figures to the US in three mass transfers, including Rafael Caro Quintero, wanted for the 1985 murder of a DEA agent, arrested thousands of suspects and seized record amounts of fentanyl, while insisting there would be no American troops or strikes in Mexico. The killing of the Jalisco cartel's leader, 'El Mencho', by Mexican troops with US intelligence support in February 2026 was the biggest blow yet (see [[unit:mx]], [[lesson:mx-6]])." },
        { type: "compare", head: "Whose problem is it?",
          left: { head: "Washington's view", md:
            "Mexico has let cartels control territory and corrupt officials; they are terrorists poisoning Americans and must be treated that way." },
          right: { head: "Mexico's view", md:
            "The cartels are funded by American demand and armed by American guns; the US must do its part at home, and respect Mexico's sovereignty." } },
        { type: "section", head: "Why it matters", md:
          "Security is where the relationship is most fragile. A unilateral US strike against cartels in Mexico would be the gravest crisis between the neighbours in generations, touching the memory of the 1846–48 war (see [[unit:mx]], [[lesson:mx-10]]). Cooperation, by contrast, has become Mexico's way of heading off tariffs and threats, which is why drugs, trade and migration are negotiated together." }
      ],
      takeaways: [
        "Cartels profit from American demand for drugs, above all fentanyl; US overdose deaths fell 14% in 2025 to about 70,000.",
        "About 70% of traced guns recovered in Mexico came from the US; the Supreme Court threw out Mexico's suit against gun makers in 2025.",
        "Under US pressure, Mexico sent 92 cartel prisoners north and stepped up raids, while ruling out US military action on its soil."
      ],
      check: { q: "Where do most guns used by Mexican cartels come from, according to ATF tracing?",
        choices: ["Mexico's army", "The United States", "Central America"], answer: 1,
        explain: "About 70% of the guns recovered in Mexico and submitted for tracing were sourced from the US." },
      sources: [
        { title: "U.S. Overdose Deaths Decrease for Third Consecutive Year in 2025", publisher: "CDC National Center for Health Statistics", url: "https://www.cdc.gov/nchs/pressroom/releases/20260513.html", date: "2026-05-13" },
        { title: "Firearms Trafficking: U.S. Efforts to Disrupt Gun Smuggling into Mexico", publisher: "US Government Accountability Office", url: "https://www.gao.gov/products/gao-21-322", date: "2021" },
        { title: "Smith & Wesson Brands, Inc. v. Estados Unidos Mexicanos", publisher: "US Supreme Court", url: "https://www.supremecourt.gov/opinions/24pdf/23-1141_lkgn.pdf", date: "2025-06-05" },
        { title: "Mexico sends 37 more drug cartel suspects to US amid Trump attack threats", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/1/21/mexico-sends-37-more-drug-cartel-suspects-to-us-amid-trump-attack-threats", date: "2026-01-21" },
        { title: "Mexico sends Rafael Caro Quintero, 28 other cartel suspects to U.S.", publisher: "CBS News", url: "https://www.cbsnews.com/news/mexico-extradites-drug-traffickers-us-rafael-caro-quintero/", date: "2025-02-28" }
      ]
    }
  ]
});
