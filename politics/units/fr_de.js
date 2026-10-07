/* ============================================================
   Relationship — France & Germany 🇫🇷🇩🇪
   Three wars in 75 years turned into Europe's central
   partnership; the 'engine' that drives, and sometimes stalls,
   the EU; and the collapse of their joint fighter jet alongside
   new talks on France's nuclear deterrent.
   Research note and sources: tools/research/fr_de.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("fr_de", {
  id: "fr_de",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "fr_de-1", kind: "relation", asOf: "2026-09-30",
      title: "Hereditary enemies, then friends",
      dek: "France and Germany fought three wars in 75 years. In 1963 two old men who had lived through them signed a treaty of friendship. It became the foundation of post-war Europe.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_de/fr_de-1-hero.webp",
          alt: "Illustration of a vast military cemetery of white crosses on green hills under a grey sky, with a tall memorial tower.",
          caption: "Verdun, where about 700,000 French and German soldiers were killed or wounded in 1916; Mitterrand and Kohl held hands there in 1984.",
          credit: "Illustration — not a photograph",
          prompt: "A vast military cemetery of white crosses in neat rows across rolling green hills, a tall stone memorial tower and ossuary behind, grey overcast sky, solemn and immense, no people, no flags, no legible text." },
        { type: "timeline", head: "From war to friendship", items: [
          ["1870–71", "Prussia defeats France; the German Empire is proclaimed at Versailles"],
          ["1914–18", "First World War; Verdun and the Somme"],
          ["1940–44", "Germany occupies France"],
          ["1950–51", "Schuman Plan and the Coal and Steel Community"],
          ["22 Jan 1963", "Élysée Treaty signed by de Gaulle and Adenauer"],
          ["1984", "Mitterrand and Kohl hold hands at Verdun"],
          ["2019", "Aachen Treaty renews the partnership"]
        ] },
        { type: "section", head: "Three wars", md:
          "In 1870–71 Prussia crushed France, took Alsace and part of Lorraine, and proclaimed the new German Empire in the Hall of Mirrors at Versailles. France took the provinces back after the First World War, in which the two countries lost millions of men, many of them in battles such as Verdun, where some 700,000 were killed or wounded in 1916. In 1940 Nazi Germany overran France in six weeks and occupied it for four years. Each defeat bred a desire for revenge. By 1945 many in both countries concluded that the cycle had to be broken for good." },
        { type: "section", head: "Coal, steel and a treaty", md:
          "The first step was economic. In May 1950 French foreign minister Robert Schuman proposed pooling French and German coal and steel, the raw materials of war, under a common authority, so that war between them would become 'not merely unthinkable, but materially impossible'. The European Coal and Steel Community, founded in 1951 with Italy and the Benelux countries, grew into today's European Union. On 22 January 1963 President Charles de Gaulle and Chancellor Konrad Adenauer signed the Élysée Treaty, committing their governments to consult on all important questions and to build ties between their peoples." },
        { type: "section", head: "Friendship between peoples", md:
          "The treaty created the Franco-German Youth Office, which has since helped more than 9.5 million young people take part in exchanges. Hundreds of towns are twinned; there is a joint television channel, Arte, and a Franco-German brigade. In 1984 President François Mitterrand and Chancellor Helmut Kohl stood hand in hand at Verdun, an image of reconciliation. In January 2019 Emmanuel Macron and Angela Merkel signed the Treaty of Aachen, promising closer cooperation on defence, foreign policy and cross-border regions." },
        { type: "section", head: "Alsace", md:
          "The border region shows the history. Alsace and part of Lorraine changed hands four times between 1871 and 1945, and their dialects, food and half-timbered towns mix both cultures. Their capital, Strasbourg, now hosts the European Parliament and the Council of Europe, a deliberate choice to put Europe's institutions on the old front line." },
        { type: "compare", head: "Two memories",
          left: { head: "A miracle", md:
            "Reconciliation between hereditary enemies is post-war Europe's greatest achievement and a model for others." },
          right: { head: "A marriage of convenience", md:
            "France wanted to contain Germany and Germany wanted rehabilitation. Beneath the ceremonies, interests have always diverged." } },
        { type: "section", head: "Why it matters", md:
          "The Franco-German friendship is the foundation of the EU: most of its great projects, from the single market to the euro, began as deals between Paris and Bonn or Berlin. Its strength, or weakness, still decides whether Europe can act together." }
      ],
      takeaways: [
        "France and Germany fought three wars between 1870 and 1945.",
        "The 1950 Schuman Plan and the 1963 Élysée Treaty built reconciliation and the EU's foundations.",
        "Exchanges, twinned towns and joint institutions have tied the two peoples together."
      ],
      check: { q: "What did the 1950 Schuman Plan propose?",
        choices: ["A joint army", "Pooling French and German coal and steel under a common authority", "Returning Alsace to Germany"], answer: 1,
        explain: "By sharing the raw materials of war, Schuman aimed to make another war between them 'materially impossible'." },
      sources: [
        { title: "The Élysée Treaty in six questions", publisher: "French Ministry for Europe and Foreign Affairs", url: "https://www.diplomatie.gouv.fr/en/the-ministry-in-action/ensuring-the-presence-of-french-culture/franco-german-cooperation/the-elysee-treaty-in-six-questions", date: "n.d." },
        { title: "Germany and France jointly celebrate 60 years of Franco-German friendship", publisher: "German Federal Foreign Office", url: "https://www.auswaertiges-amt.de/en/aussenpolitik/laenderinformationen/frankreich-node/60-years-elysee-treaty/2574584", date: "2023" },
        { title: "Franco-German Youth Office", publisher: "FGYO", url: "https://www.fgyo.org/", date: "n.d." },
        { title: "Aachen Treaty between Germany and France", publisher: "deutschland.de", url: "https://www.deutschland.de/en/topic/politics/aachen-treaty-between-germany-and-france", date: "2019" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "fr_de-2", kind: "relation", asOf: "2026-09-30",
      title: "The engine of Europe",
      dek: "When France and Germany agree, the EU usually follows. When they don't, it stalls. From the euro to the pandemic recovery fund, their bargains have shaped the Union.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_de/fr_de-2-hero.webp",
          alt: "Illustration of a modern glass European parliament building beside a river at dusk with lights reflecting in the water.",
          caption: "Strasbourg, on the Franco-German border, is home to the European Parliament.",
          credit: "Illustration — not a photograph",
          prompt: "A large modern curved glass and steel parliament building beside a calm river at dusk, lights reflecting in the water, a pedestrian bridge and trees, blue evening sky, calm and civic, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Deals and disputes", items: [
          ["1957", "Treaty of Rome founds the European Economic Community"],
          ["1992", "Maastricht Treaty: Mitterrand and Kohl agree on the euro"],
          ["2010–12", "Euro crisis: 'Merkozy' manage the response"],
          ["May 2020", "Merkel and Macron propose a €500 billion recovery fund"],
          ["Jul 2020", "EU agrees a €750 billion recovery plan with joint borrowing"],
          ["2025–26", "Disputes over the EU–Mercosur trade deal"]
        ] },
        { type: "section", head: "Two economies, two philosophies", md:
          "Germany is Europe's largest economy and France its second. Their instincts differ. Germany, marked by the hyperinflation of the 1920s, values balanced budgets, strict rules and an independent central bank. France prefers an active state, public investment and political control over economic policy. Every big European project has had to bridge that gap. When reunified Germany gave up its beloved Deutschmark for the euro under the 1992 Maastricht Treaty, it was partly the price of French consent to reunification, and partly a way to bind Germany into Europe." },
        { type: "section", head: "Crisis bargains", md:
          "In the euro crisis of 2010–12, Angela Merkel and Nicolas Sarkozy, nicknamed 'Merkozy', met before every summit to hammer out rescue plans, with Germany insisting on austerity in return for bailouts. When Covid struck, Merkel changed Germany's long-standing position: on 18 May 2020 she and Emmanuel Macron proposed a €500 billion recovery fund financed by common EU borrowing and paid out as grants. After a marathon summit, the EU agreed a €750 billion plan in July 2020, the first large-scale joint borrowing in its history." },
        { type: "section", head: "Friction today", md:
          "Recent years have brought more quarrels. The two clashed over nuclear power, which France relies on and Germany abandoned in 2023; over Germany's 2022 decision to buy American F-35 jets and an Israeli-American missile shield; and over trade. Germany strongly backed the EU's trade agreement with the South American Mercosur bloc, signed in January 2026, while France, under pressure from its farmers, opposed it. Political weakness in Paris, where Macron has lacked a stable majority since 2024 (see [[lesson:fr-2]]), has left Germany's Friedrich Merz as the more powerful partner." },
        { type: "section", head: "Neighbours", md:
          "Beyond summits, the two economies are woven together. Germany is France's largest trading partner, Airbus builds aircraft in both countries, and tens of thousands of French residents of Alsace and Lorraine cross the border every day to work in Germany, and the two governments hold joint cabinet meetings." },
        { type: "compare", head: "Is the engine still running?",
          left: { head: "Yes", md:
            "Crises from Ukraine to American tariffs keep forcing Paris and Berlin together. Merz and Macron meet constantly and agree on the big picture." },
          right: { head: "Not really", md:
            "With 27 members, Poland's rise and divided governments at home, two countries can no longer steer the EU alone." } },
        { type: "section", head: "Why it matters", md:
          "Europe faces war on its borders, trade conflict with the United States and competition from China. Whether it responds with joint defence spending, common borrowing or new trade deals still depends largely on whether France and Germany can agree." }
      ],
      takeaways: [
        "France and Germany have different economic philosophies, and EU projects have had to bridge them.",
        "Their deals created the euro and, in 2020, the EU's first large joint borrowing for pandemic recovery.",
        "They now clash over energy, defence purchases and the Mercosur trade deal."
      ],
      check: { q: "What did Merkel and Macron propose in May 2020?",
        choices: ["Leaving the euro", "A €500 billion recovery fund financed by common EU borrowing", "A Franco-German army"], answer: 1,
        explain: "The proposal broke a German taboo on joint debt and led to the EU's €750 billion recovery plan." },
      sources: [
        { title: "Covid-19: France and Germany propose €500 billion EU recovery fund", publisher: "France 24", url: "https://www.france24.com/en/20200518-live-macron-and-merkel-present-joint-covid-19-recovery-plan-for-eu", date: "2020-05-18" },
        { title: "The EU recovery plan: A 'Merkel' but not a 'Hamilton' moment", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/blogs/new-atlanticist/the-eu-recovery-plan-a-merkel-but-not-a-hamilton-moment/", date: "2020" },
        { title: "Rekindling an Essential Relationship: France, Germany, and the Aachen Treaty", publisher: "CSIS", url: "https://www.csis.org/analysis/rekindling-essential-relationship-france-germany-and-aachen-treaty", date: "2019" },
        { title: "Franco-German defense cooperation under strain as Macron, Merz meet", publisher: "Defense News", url: "https://www.defensenews.com/global/europe/2026/07/16/franco-german-defense-cooperation-under-strain-as-macron-merz-meet/", date: "2026-07-16" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "fr_de-3", kind: "relation", asOf: "2026-09-30",
      title: "A fighter jet dies, a nuclear talk begins",
      dek: "In 2026 France and Germany gave up on building a fighter jet together after nine years of feuding. At the same time, Germany began talks about sheltering under France's nuclear umbrella.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_de/fr_de-3-hero.webp",
          alt: "Illustration of two sleek fighter jets flying in formation above clouds at sunset.",
          caption: "The joint Future Combat Air System was meant to replace French Rafales and German Eurofighters from the 2040s.",
          credit: "Illustration — not a photograph",
          prompt: "Two sleek modern fighter jets flying in formation above a sea of clouds at sunset, orange and violet sky, sharp silhouettes, dynamic and futuristic, no markings, no flags, no legible text." },
        { type: "timeline", head: "Defence ties", items: [
          ["1989", "Franco-German brigade formed"],
          ["2017", "Macron and Merkel launch the joint fighter project, FCAS"],
          ["2025", "Dassault and Airbus deadlock over leadership"],
          ["Feb 2026", "Merz confirms talks on nuclear deterrence with France"],
          ["8 Jun 2026", "The joint crewed fighter is formally abandoned"],
          ["Jul 2026", "Germany to join a French nuclear exercise"]
        ] },
        { type: "section", head: "The jet that never flew", md:
          "In 2017 Macron and Merkel announced a Future Combat Air System, FCAS: a next-generation fighter with drones and a 'combat cloud', to be built by France's Dassault and Airbus for Germany, later joined by Spain. It was meant to show Europe could build its own top-tier weapons. Instead it became nine years of industrial warfare over who would lead, who would own the designs and how the work would be split. Dassault, which builds the Rafale, insisted on control; Airbus and German unions wanted equal shares." },
        { type: "section", head: "Collapse", md:
          "A German-appointed mediator reported in April 2026 that a jointly built crewed fighter was no longer feasible, and on 8 June 2026 the two governments formally ended that part of the project. Some joint work on drones and networks may continue. France is expected to build its own successor to the Rafale, while Germany weighs options including joining another programme. Critics called it a painful symbol of how national industrial interests still trump European ambitions." },
        { type: "section", head: "The nuclear question", md:
          "Yet in another field the two moved closer. Germany has no nuclear weapons and relies on America's, some of which are stored on its territory. With doubts growing about the US commitment, Merz confirmed in February 2026 that he was discussing European nuclear deterrence with Macron. In March Macron said France would increase its arsenal and invited allies, Germany first among them, to associate themselves with its deterrent. In July 2026 Merz announced that German forces would take part in a French nuclear exercise before the end of the year, and the two set up a steering group on deterrence, meant to complement NATO rather than replace it." },
        { type: "section", head: "Other projects", md:
          "Other joint weapons programmes survive, with difficulty. A planned Franco-German tank to replace France's Leclerc and Germany's Leopard 2 has suffered similar industrial rivalries. With Italy, Poland and others they have also launched a European long-range strike initiative, begun in 2024, to develop missiles that can hit targets deep behind a front line." },
        { type: "compare", head: "A European deterrent?",
          left: { head: "Supporters", md:
            "France's deterrent can reassure Germany and Europe if America wavers, and joint exercises show Russia that Europe is united." },
          right: { head: "Sceptics", md:
            "France will never share control over its bombs. Germany should not weaken its reliance on the far larger American arsenal." } },
        { type: "section", head: "Why it matters", md:
          "Europe is rearming faster than at any time since the Cold War. The failure of FCAS and the nuclear talks show both the limits and the new possibilities of Franco-German cooperation: industry divides them, but fear of Russia and doubts about America push them together." }
      ],
      takeaways: [
        "France and Germany's joint fighter jet project, launched in 2017, collapsed in June 2026 over industrial disputes.",
        "In 2026 Germany began talks with France on European nuclear deterrence.",
        "German forces are to take part in a French nuclear exercise, meant to complement NATO."
      ],
      check: { q: "Why did the FCAS fighter jet project fail?",
        choices: ["Lack of money", "Dassault and Airbus could not agree on leadership, designs and workshare", "The United States vetoed it"], answer: 1,
        explain: "Nine years of disputes between the two companies led the governments to abandon the joint crewed fighter in June 2026." },
      sources: [
        { title: "Germany, France End Cooperation on Joint FCAS Fighter Jet Project - Reports", publisher: "Sputnik via GlobalSecurity.org", url: "https://www.globalsecurity.org/military/library/news/2026/06/mil-260609-sputnik01.htm", date: "2026-06-09" },
        { title: "Germany's Merz hails nuclear deterrence cooperation with France", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/7/17/germanys-merz-hails-nuclear-deterrence-cooperation-with-france", date: "2026-07-17" },
        { title: "Macron calls to increase French nuclear arsenal, team with Germany and others on 'deterrent'", publisher: "Breaking Defense", url: "https://breakingdefense.com/2026/03/macron-calls-to-increase-french-nuclear-arsenal-team-with-germany-and-others-on-deterrent/", date: "2026-03" },
        { title: "Germany and nuclear deterrence: dialogue with France while preserving US guarantees", publisher: "OSW Centre for Eastern Studies", url: "https://www.osw.waw.pl/en/publikacje/analyses/2026-03-02/germany-and-nuclear-deterrence-dialogue-france-while-preserving-us", date: "2026-03-02" }
      ]
    }
  ]
});
