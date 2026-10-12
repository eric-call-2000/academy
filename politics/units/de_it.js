/* ============================================================
   Relationship — Germany & Italy 🇩🇪🇮🇹
   Two late-unified nations, the Axis and the guest workers of
   1955; the euro crisis, 'the spread' and Berlin's austerity;
   and Merz and Meloni's 2026 action plan and migration deals.
   Research note and sources: tools/research/de_it.md
   Current as of 11 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("de_it", {
  id: "de_it",
  asOf: "2026-10-11",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "de_it-1", kind: "relation", asOf: "2026-10-11",
      title: "Unification, the Axis and guest workers",
      dek: "Both became nations only in the 1860s and 1870s, fought as allies in a disastrous war, and rebuilt together in Europe. From 1955 hundreds of thousands of Italians went north to work in German factories.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_it/de_it-1-hero.webp",
          alt: "Illustration of a crowded 1950s railway platform where workers with suitcases board a long train at night.",
          caption: "From 1955 trains carried Italian workers from Milan and the south to German factories.",
          credit: "Illustration — not a photograph",
          prompt: "A crowded 1950s railway station platform at night under an iron and glass roof, men in caps and coats with cardboard suitcases boarding a long train, steam and lamplight, historical documentary painting style, figures seen from behind, no flags, no legible text." },
        { type: "timeline", head: "Parallel histories", items: [
          ["1861 / 1871", "Italy and Germany are unified"],
          ["1936–39", "Rome–Berlin Axis and the Pact of Steel"],
          ["Sep 1943", "Italy surrenders; Germany occupies the north"],
          ["Dec 1955", "Recruitment agreement brings Italian workers to Germany"],
          ["1957", "Both found the European Economic Community"],
          ["1960s", "Hundreds of thousands of Italians work in Germany"]
        ] },
        { type: "section", head: "Late nations", md:
          "Italy and Germany were the two great European countries that unified late: Italy in 1861 under the kingdom of Piedmont (see [[lesson:it-9]]), Germany in 1871 under Prussia. Both had been patchworks of small states, and both had rich regions and poor ones. For centuries German emperors had claimed authority over Italy, and German travellers, from Goethe onward, went south in search of art, sun and ruins. Italy fought against Austria and Germany in the First World War." },
        { type: "section", head: "The Axis", md:
          "In the 1930s Mussolini's Fascist Italy (see [[lesson:it-10]]) and Hitler's Germany drew together. Mussolini spoke of a Rome–Berlin 'axis' in 1936, and in 1939 the two signed the Pact of Steel. Italy entered the war in June 1940. Its campaigns went badly, and Germany often had to rescue it. When Italy surrendered to the Allies in September 1943, German troops occupied the north and centre, freed Mussolini and installed him as head of a puppet state. German forces deported Italian Jews and committed massacres of civilians, such as at Marzabotto in 1944, and hundreds of thousands of Italian soldiers were sent to German labour camps." },
        { type: "section", head: "Building Europe", md:
          "After the war both countries became democracies, joined NATO and, in 1957, signed the Treaty of Rome founding the European Economic Community with France and the Benelux countries. Leaders such as Konrad Adenauer and Alcide De Gasperi, both Christian Democrats from border regions, saw European integration as the way to prevent another war." },
        { type: "section", head: "Guest workers", md:
          "West Germany's booming economy needed workers, and southern Italy had too many. In December 1955 the two governments signed a recruitment agreement, the first of West Germany's 'guest worker' treaties, which later included Spain, Greece and Turkey. Recruiters in Milan and Verona examined applicants, and trains carried them north to car plants, mines and building sites. Italians were the largest foreign group in Germany until the 1970s. Many returned home; others stayed and built Italian communities, restaurants and ice-cream parlours across the country." },
        { type: "section", head: "Free movement", md:
          "Because Italy was a founding member of the European Community, its citizens gained the right to move and work freely in Germany in the 1960s, unlike Turks and Yugoslavs. Today more than 600,000 Italian citizens live in Germany." },
        { type: "compare", head: "Two views of the other",
          left: { head: "German image of Italy", md:
            "A land of art, holidays and good food, but also of chaos and debt." },
          right: { head: "Italian image of Germany", md:
            "Efficient and prosperous, but rigid, and once a brutal occupier." } },
        { type: "section", head: "Why it matters", md:
          "Germany and Italy are the European Union's largest and third-largest economies and its two biggest manufacturers. Their industries, from cars to machinery, are woven together across the Alps." }
      ],
      takeaways: [
        "Italy (1861) and Germany (1871) unified late; they were allies in the Axis, and Germany occupied Italy from 1943.",
        "Both founded the European Economic Community in 1957.",
        "A 1955 agreement brought hundreds of thousands of Italian guest workers to West Germany."
      ],
      check: { q: "What did the December 1955 agreement between Italy and West Germany do?",
        choices: ["Created the euro", "Recruited Italian workers for German industry", "Ended the war"], answer: 1,
        explain: "It was the first of West Germany's guest-worker treaties." },
      sources: [
        { title: "Worker Treaty Rome", publisher: "German History in Documents and Images", url: "https://ghdi.ghi-dc.org/document.cfm?document_id=4536", date: "1955" },
        { title: "Italian Guest Workers (1962)", publisher: "German History in Documents", url: "https://germanhistorydocs.org/en/two-germanies-1961-1989/italian-guest-workers-1962", date: "n.d." },
        { title: "Gastarbeiter (guest workers)", publisher: "Historisches Lexikon Bayerns", url: "https://www.historisches-lexikon-bayerns.de/Lexikon/EN:Gastarbeiter_(guest_workers)", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "de_it-2", kind: "relation", asOf: "2026-10-11",
      title: "The euro, 'the spread' and austerity",
      dek: "In 2011 Italy's borrowing costs soared and Germany demanded cuts. Berlusconi fell, a technocrat took over, and many Italians blamed Berlin. A decade later Germany agreed to share EU debt.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_it/de_it-2-hero.webp",
          alt: "Illustration of a grand Roman government palace at dusk with a crowd of reporters and cameras gathered outside.",
          caption: "Berlusconi resigned in November 2011 as Italy's borrowing costs passed 7%.",
          credit: "Illustration — not a photograph",
          prompt: "A grand Roman government palace with a columned facade at dusk, a crowd of reporters with cameras and microphones on a cobbled square outside, streetlamps glowing, documentary painting style, figures small and seen from behind, no flags, no legible text." },
        { type: "timeline", head: "The crisis years", items: [
          ["1999", "The euro is launched"],
          ["Aug 2011", "ECB letter demands Italian reforms"],
          ["Oct 2011", "Merkel and Sarkozy press Berlusconi"],
          ["Nov 2011", "Spread hits about 575 points; Berlusconi resigns; Monti appointed"],
          ["Jul 2012", "Draghi: the ECB will do 'whatever it takes'"],
          ["Jul 2020", "EU agrees a joint recovery fund; Italy the biggest recipient"]
        ] },
        { type: "section", head: "One currency, two economies", md:
          "When the euro was launched in 1999, Italy gave up the lira, which it had often devalued to keep its exports cheap. Germany gave up the Deutschmark on condition that the new currency would be run by an independent central bank on German lines, with rules limiting deficits and debt. For a decade Italy borrowed almost as cheaply as Germany, but its economy barely grew, while German exporters, after painful reforms, thrived. Italy's public debt stayed above 100% of GDP." },
        { type: "section", head: "The spread", md:
          "When the eurozone debt crisis spread from Greece in 2010 and 2011, investors began to worry that Italy, with Europe's largest debt, might not be able to pay. The gap between Italian and German ten-year borrowing costs, known in Italy simply as 'lo spread', became a daily headline. In August 2011 the European Central Bank's outgoing and incoming presidents, Jean-Claude Trichet and Mario Draghi, sent Silvio Berlusconi a secret letter listing reforms Italy should make. In October, at a summit press conference, Angela Merkel and France's Nicolas Sarkozy exchanged smiles when asked whether they trusted Berlusconi, a moment that infuriated many Italians." },
        { type: "section", head: "Berlusconi falls", md:
          "In early November the spread reached about 575 basis points and Italian ten-year yields passed 7%, levels seen as unsustainable. Berlusconi resigned on 12 November 2011, and the president appointed Mario Monti, an economist and former EU commissioner, to lead a technocratic government that raised taxes, cut spending and reformed pensions. Many Italians came to see Germany as the author of austerity and of Berlusconi's fall; Germans saw Italy as a country that would not reform without pressure." },
        { type: "section", head: "Whatever it takes", md:
          "The crisis eased only when Draghi, an Italian now running the European Central Bank, promised in July 2012 to do 'whatever it takes' to save the euro. Germany's Bundesbank opposed the bond-buying that followed, and German critics took cases to the constitutional court." },
        { type: "section", head: "Sharing debt", md:
          "The pandemic hit Italy first and hardest in Europe. In 2020 Merkel reversed decades of German policy and agreed, with France, to a €750 billion EU recovery fund financed by joint borrowing. Italy received the largest share, close to €200 billion, which it has spent on railways, broadband and reforms under Draghi and then Meloni." },
        { type: "compare", head: "The euro crisis remembered",
          left: { head: "Many Germans", md:
            "Italy lived beyond its means and needed discipline." },
          right: { head: "Many Italians", md:
            "Germany imposed austerity and profited from a currency built for its exporters." } },
        { type: "section", head: "Why it matters", md:
          "The memory of 2011 still shapes Italian politics, feeding the Euroscepticism of parties such as Meloni's Brothers of Italy, and German caution about sharing Europe's debts." }
      ],
      takeaways: [
        "In 2011 Italy's borrowing costs soared; Berlusconi resigned and the technocrat Mario Monti took over.",
        "Many Italians blamed Germany and Merkel for austerity; many Germans blamed Italian debt.",
        "In 2020 Germany agreed to joint EU borrowing for a recovery fund, of which Italy got the largest share."
      ],
      check: { q: "What is 'lo spread'?",
        choices: ["An Italian pasta", "The gap between Italian and German government borrowing costs", "A German tax"], answer: 1,
        explain: "It passed 500 basis points in November 2011." },
      sources: [
        { title: "Italy on the brink: the hidden story of the 2011 near-collapse", publisher: "LSE Euro Crisis in the Press", url: "https://blogs.lse.ac.uk/eurocrisispress/2013/07/29/italy-on-the-brink-the-hidden-story-of-the-2011-near-collapse-and-analogies-with-today/", date: "2013-07-29" },
        { title: "Berlusconi Bravado Proved No Match for Euro-Region Debt Crisis", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2011-11-13/berlusconi-bravado-proved-no-match-for-euro-region-debt-crisis", date: "2011-11-13" },
        { title: "2011 will remain in everyone's memory as the year of the euro spread", publisher: "FIRSTonline", url: "https://www.firstonline.info/en/il-2011-restera-nella-memoria-di-tutti-come-lanno-dello-spread-e-del-calvario-delleuro/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "de_it-3", kind: "relation", asOf: "2026-10-11",
      title: "Merz, Meloni and a new axis?",
      dek: "In January 2026 Merz and Meloni signed a security agreement and an action plan in Rome. Some call it 'Merzoni', a new power couple in Europe; sceptics see convergence on a few issues.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_it/de_it-3-hero.webp",
          alt: "Illustration of a grand Renaissance villa in Rome with a long colonnade and cypress trees on a sunny winter day.",
          caption: "Merz and Meloni held their summit in Rome on 23 January 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A grand Renaissance villa in Rome with a long colonnade, terracotta roof and tall cypress and umbrella pine trees on a sunny winter day, a gravel courtyard with a few dark cars, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "A closer partnership", items: [
          ["Nov 2023", "Germany and Italy sign an action plan under Scholz and Meloni"],
          ["May 2025", "Merz becomes chancellor"],
          ["23 Jan 2026", "Rome summit: security agreement and action plan"],
          ["Feb 2026", "Joint paper on EU competitiveness"],
          ["2026", "Cooperation on migration and 'return hubs'"],
          ["2027", "Italian general election due"]
        ] },
        { type: "section", head: "Two conservatives", md:
          "Giorgia Meloni became Italy's prime minister in 2022 at the head of a right-wing coalition (see [[lesson:it-4]]); Friedrich Merz, a Christian Democrat, became Germany's chancellor in May 2025 (see [[lesson:de-4]]). Despite their different party families, one from the post-fascist tradition, the other from the European centre-right, they found much in common: firm support for Ukraine, a hard line on irregular migration, scepticism about EU regulation, and a wish to keep the United States engaged in Europe." },
        { type: "section", head: "The Rome agreements", md:
          "On 23 January 2026 in Rome the two leaders signed an Agreement on Enhanced Cooperation on Security, Defence and Resilience and a German–Italian Plan of Action covering everything from research and energy to infrastructure and culture. The security agreement set up regular '2+2' meetings of foreign and defence ministers. In February they presented a joint paper to EU leaders calling for less regulation and a stronger single market to make European industry competitive with the United States and China." },
        { type: "section", head: "Migration", md:
          "Italy is the main landing point for migrants crossing the central Mediterranean (see [[lesson:it-12]]), and Germany is the main destination for many of them. Meloni's deal to process some asylum seekers in Albania, and the idea of 'return hubs' in third countries for rejected applicants, have won interest in Berlin, which under Merz has tightened border controls. The two have pushed together for tougher EU rules, and in 2026 met to discuss how 'return hubs' outside the EU might work in practice." },
        { type: "section", head: "Industry and defence", md:
          "Germany is Italy's largest trading partner. Italian suppliers in Lombardy, Veneto and Emilia-Romagna make parts for German carmakers and machinery firms, so Germany's industrial slump (see [[lesson:de-7]]) hurts northern Italy too. In defence, Rheinmetall and Italy's Leonardo have formed a joint venture to build tanks and armoured vehicles for the Italian army." },
        { type: "section", head: "Differences", md:
          "The partnership has limits. Meloni is closer to Trump and the American right; in February 2026 she broke with Merz over attitudes to the MAGA movement. Germany remains wary of new common EU debt, which Italy wants for defence, and Italy's public debt, above 135% of GDP, still worries German policymakers. Italian business leaders also complain that Berlin's own huge subsidy and spending programmes give German firms an unfair advantage in the single market." },
        { type: "compare", head: "How to read 'Merzoni'",
          left: { head: "Optimists", md:
            "A new engine for Europe as France is weakened by political crisis." },
          right: { head: "Sceptics", md:
            "Convergence on specific issues, not a structured alliance." } },
        { type: "section", head: "Why it matters", md:
          "With France consumed by political crisis before its 2027 election (see [[lesson:fr-7]]), a Berlin–Rome partnership could shape EU decisions on migration, defence and competitiveness for years." }
      ],
      takeaways: [
        "Merz and Meloni signed a security agreement and a broad action plan in Rome on 23 January 2026.",
        "They share positions on Ukraine, migration and EU deregulation, and presented a joint competitiveness paper.",
        "They differ on Trump and on joint EU debt; sceptics doubt it is a real alliance."
      ],
      check: { q: "What did Merz and Meloni sign in Rome in January 2026?",
        choices: ["A treaty merging their armies", "A security and defence cooperation agreement and an action plan", "An agreement to leave the euro"], answer: 1,
        explain: "It set up regular 2+2 ministerial meetings." },
      sources: [
        { title: "When in Rome: The Italian-German motor in action", publisher: "European Council on Foreign Relations", url: "https://ecfr.eu/article/when-in-rome-the-italian-german-motor-in-action/", date: "2026" },
        { title: "Germany and Italy: Bilateral relations", publisher: "German Federal Foreign Office", url: "https://www.auswaertiges-amt.de/en/aussenpolitik/laenderinformationen/italien-node/italy-227948", date: "n.d." },
        { title: "What is 'Merzoni'?", publisher: "Fortune", url: "https://fortune.com/2026/02/11/what-is-merzoni-meloni-merz-germany-italy-europe-alliance", date: "2026-02-11" },
        { title: "Meloni breaks with Merz on MAGA, testing Rome-Berlin EU ambitions", publisher: "Brussels Signal", url: "https://brusselssignal.eu/2026/02/meloni-breaks-with-merz-on-maga-testing-rome-berlin-eu-ambitions/", date: "2026-02" }
      ]
    }
  ]
});
