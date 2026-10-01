/* ============================================================
   Relationship — Poland & Germany 🇵🇱🇩🇪
   Borders moved and a chancellor kneeling in Warsaw, the long
   argument over war reparations, and two neighbours whose trade
   and security are now bound together, even as border checks
   return. The war itself is in pl-10.
   Research note and sources: tools/research/pl_de.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("pl_de", {
  id: "pl_de",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "pl_de-1", kind: "relation", asOf: "2026-09-30",
      title: "Borders and forgiveness",
      dek: "After the war, Poland's borders moved west onto German land and millions of Germans were driven out. It took decades, a bishops' letter and a chancellor on his knees to make the two neighbours friends.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl_de/pl_de-1-hero.webp",
          alt: "Illustration of a bronze memorial wall with a wreath of flowers laid at its base on a grey winter day, with bare trees behind.",
          caption: "On 7 December 1970 West Germany's chancellor Willy Brandt knelt before the memorial to the Warsaw Ghetto Uprising.",
          credit: "Illustration — not a photograph",
          prompt: "A dark bronze and stone memorial wall with relief figures, a large wreath of white and red flowers laid at its base, wet paving stones, bare trees behind on a grey winter day, solemn and quiet, no people, no legible text." },
        { type: "timeline", head: "From enemies to neighbours", items: [
          ["1939–45", "German occupation; about 6 million Polish citizens killed"],
          ["1945", "Poland's border moves west to the Oder and Neisse rivers"],
          ["1965", "Polish bishops: 'we forgive and ask forgiveness'"],
          ["7 Dec 1970", "Warsaw Treaty; Brandt kneels at the ghetto memorial"],
          ["1990", "Reunited Germany confirms the border"],
          ["1991", "Treaty of good neighbourliness"],
          ["2004", "Poland joins the EU with German backing"]
        ] },
        { type: "section", head: "A country moved west", md:
          "Nazi Germany's occupation of Poland from 1939 was among the most brutal of the war: about six million Polish citizens died, half of them Jews murdered in the Holocaust, and Warsaw was razed after the 1944 uprising (see [[lesson:pl-10]]). At the end of the war the Allies moved Poland bodily westward. The Soviet Union kept Poland's eastern lands, and Poland received German territory up to the Oder and Neisse rivers, including Silesia, Pomerania and the city of Breslau, now Wrocław. Millions of Germans fled or were expelled, and Poles, many of them expelled from the east themselves, settled in their place." },
        { type: "section", head: "Forgiveness", md:
          "For two decades West Germany refused to recognise the new border, and expellee groups demanded their homes back. The first breakthrough came from the churches. In 1965 Poland's Catholic bishops wrote to their German counterparts: 'We forgive and ask for forgiveness.' The communist government denounced the letter, but it opened a door. On 7 December 1970 Chancellor Willy Brandt signed a treaty in Warsaw accepting the Oder–Neisse line, then laid a wreath at the memorial to the Warsaw Ghetto Uprising and unexpectedly fell to his knees. The image became a symbol of German atonement." },
        { type: "section", head: "Partners in Europe", md:
          "When Germany reunified in 1990 it signed a treaty confirming the border for good, and in 1991 the two agreed a treaty of good neighbourliness. Germany championed Poland's entry into NATO in 1999 and the EU in 2004. Millions of Poles have since worked in Germany, and around two million people there have Polish roots. Young people from both countries take part in exchanges run by a joint youth office, and German and Polish historians have written shared textbooks." },
        { type: "compare", head: "How the past is remembered",
          left: { head: "Many Poles", md:
            "Germany has apologised but has never fully repaid what it destroyed, and Germans know too little about the occupation of Poland compared with the Holocaust." },
          right: { head: "Many Germans", md:
            "Germany has faced its crimes more thoroughly than almost any nation, and reconciliation with Poland is one of post-war Europe's great achievements." } },
        { type: "section", head: "Why it matters", md:
          "Reconciliation between Poland and Germany, like that between France and Germany, underpins the European Union. But memory remains political. Polish nationalists accuse Germany of dominating Europe, and German visitors are still sometimes surprised by how present the war is in Polish towns, museums and politics, above all in the argument over reparations (see [[lesson:pl_de-2]])." }
      ],
      takeaways: [
        "After 1945 Poland's border moved west onto former German land, and millions of Germans were expelled.",
        "A 1965 bishops' letter and Willy Brandt's 1970 treaty and kneeling in Warsaw began reconciliation.",
        "Reunited Germany confirmed the border in 1990 and backed Poland's entry into NATO and the EU."
      ],
      check: { q: "What did Willy Brandt do in Warsaw on 7 December 1970?",
        choices: ["Claimed back German land", "Signed a treaty accepting the border and knelt at the ghetto memorial", "Opened a new embassy"], answer: 1,
        explain: "Brandt accepted the Oder–Neisse border and, laying a wreath at the Warsaw Ghetto memorial, fell to his knees in a gesture of atonement." },
      sources: [
        { title: "Oder-Neisse Line", publisher: "Britannica", url: "https://www.britannica.com/place/Oder-Neisse-Line", date: "n.d." },
        { title: "Willy Brandt", publisher: "Britannica", url: "https://www.britannica.com/biography/Willy-Brandt", date: "n.d." },
        { title: "Poland and Germany Are Europe's New Special Relationship—and They Need Couples Therapy", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2026/01/29/germany-poland-europe-eu-special-relationship/", date: "2026-01-29" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "pl_de-2", kind: "relation", asOf: "2026-09-30",
      title: "The reparations question",
      dek: "Poland's nationalists say Germany owes it €1.3 trillion for the war. Berlin says the matter was closed decades ago. In September 2026 Poland's president raised it again.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl_de/pl_de-2-hero.webp",
          alt: "Illustration of a city of ruined, roofless buildings under snow, with a lone church tower still standing.",
          caption: "About 85% of Warsaw was destroyed by the end of the war; its old town was rebuilt from paintings and photographs.",
          credit: "Illustration — not a photograph",
          prompt: "A city of ruined roofless brick buildings under a thin layer of snow, rubble in the streets, a single damaged church tower still standing, grey winter sky, desolate and historic, no people, no flags, no legible text." },
        { type: "facts", head: "The claim", rows: [
          ["1953", "Communist Poland renounces reparations from Germany"],
          ["2022 report", "PiS-appointed experts put losses at 6.2 trillion złoty (€1.3 trillion)"],
          ["Germany's position", "The question is legally and politically closed"],
          ["2024–25", "Tusk government seeks help for surviving victims instead"],
          ["1 Sep 2026", "President Nawrocki renews the demand"]
        ] },
        { type: "section", head: "Closed or open?", md:
          "After the war, reparations to Poland were to come out of the Soviet share of German assets. In 1953 Poland's communist government, under pressure from Moscow, declared that it would seek no more from East Germany. The Federal Republic has always held that this declaration, the 1990 treaty on German unity, known as the Two Plus Four agreement, and payments it has made to individual victims settle the matter. Germany paid compensation to some Polish survivors of Nazi persecution and forced labour in the 1990s and 2000s, through foundations set up with German companies." },
        { type: "section", head: "PiS's demand", md:
          "The Law and Justice party (PiS) argued that the 1953 declaration was imposed by Moscow and never valid. On 1 September 2022, the anniversary of the invasion, it published a report by experts it had appointed estimating Poland's losses at 6.2 trillion złoty, about €1.3 trillion, including the deaths of 5.2 million citizens and the destruction of cities and industry. Poland sent Germany a formal note. Berlin replied that 'the issue is closed'. Greece, occupied by Germany from 1941, has made a similar claim, which Berlin has also rejected, saying all such questions were settled long ago." },
        { type: "section", head: "Tusk and Nawrocki", md:
          "Donald Tusk's government, in power since December 2023, dropped the formal demand but did not abandon the idea, pressing instead for help to the dwindling number of surviving victims; Germany promised such support, and Tusk urged Berlin in 2025 to 'hurry up'. President Karol Nawrocki, a nationalist historian elected in 2025, has revived the full claim. At a ceremony on 1 September 2026 he said a 'true, firm alliance' required Germany to pay, and proposed that the money go to Poland's armed forces. The argument will feature in the 2027 election (see [[lesson:pl-7]])." },
        { type: "compare", head: "Two views",
          left: { head: "For reparations", md:
            "Poland suffered more per head than almost any country and received almost nothing. The 1953 waiver was dictated by Stalin and is not binding." },
          right: { head: "Against", md:
            "Reopening the post-war settlement is legally unfounded and dangerous. Germany helps Poland through the EU and defence, and reconciliation matters more than money." } },
        { type: "section", head: "Why it matters", md:
          "The dispute shows how history shapes Polish politics: demanding reparations is popular, and the right uses it to paint pro-European politicians as too soft on Berlin. For Germany it touches on its identity as a country that has faced its past. Neither side expects a court to settle it; the question is whether a political gesture, such as funding Polish defence or memorials, could close it." }
      ],
      takeaways: [
        "Communist Poland renounced reparations in 1953; Germany says the question is closed.",
        "In 2022 the PiS government demanded €1.3 trillion, based on a report by experts it appointed.",
        "President Nawrocki renewed the demand on 1 September 2026, proposing the money fund Poland's army."
      ],
      check: { q: "Why do Polish nationalists say the 1953 waiver is invalid?",
        choices: ["It was never signed", "It was imposed by Moscow on a communist government", "Germany did not exist then"], answer: 1,
        explain: "They argue the waiver was dictated by the Soviet Union and did not reflect a sovereign Polish decision." },
      sources: [
        { title: "Poland seeks $1.3 trillion in WWII reparations from Germany", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2022/9/1/poland-demands-1-3-trillion-in-wwii-reparations-from-germany", date: "2022-09-01" },
        { title: "Polish president calls for reparations at WWII ceremony", publisher: "RTÉ", url: "https://www.rte.ie/news/europe/2026/0901/1589923-poland-ww2-commenoration/", date: "2026-09-01" },
        { title: "Tusk hails relations with Germany after Merz talks but urges Berlin to 'hurry up' with WW2 compensation", publisher: "Notes from Poland", url: "https://notesfrompoland.com/2025/12/01/tusk-hails-relations-with-germany-after-merz-talks-but-urges-berlin-to-hurry-up-with-ww2-compensation/", date: "2025-12-01" },
        { title: "Germany rebuffs Polish demand for huge WWII reparations: 'Issue is closed'", publisher: "The Times of Israel", url: "https://www.timesofisrael.com/germany-rebuffs-polish-demand-for-huge-wwii-reparations-issue-is-closed/amp/", date: "2022" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "pl_de-3", kind: "relation", asOf: "2026-09-30",
      title: "Trade, troops and border checks",
      dek: "Poland is about to become Germany's biggest trading partner, and the two are building a defence pact against Russia. Yet for the first time in years, cars are stopped at their border.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl_de/pl_de-3-hero.webp",
          alt: "Illustration of a road bridge over a wide river at a border crossing, with a line of cars and trucks and a police checkpoint tent.",
          caption: "Germany and Poland have both reintroduced checks at crossings along the Oder and Neisse rivers.",
          credit: "Illustration — not a photograph",
          prompt: "A road bridge over a wide calm river at a quiet border crossing, a line of cars and lorries slowly moving, a small police checkpoint with a white tent and traffic cones, green riverbanks, morning light, orderly and slightly tense, no legible text, no flags." },
        { type: "facts", head: "Bound together", rows: [
          ["Trade", "About €180 billion in goods in 2025"],
          ["Rank", "Germany is Poland's largest partner; Poland is Germany's fifth"],
          ["People", "Around two million people in Germany have Polish roots"],
          ["German checks", "At the Polish border since October 2023"],
          ["Polish checks", "Since July 2025; extended to 30 March 2027"]
        ] },
        { type: "section", head: "Factory Europe", md:
          "Poland's economy has grown almost without interruption since 1992 (see [[lesson:pl-12]]), much of it by becoming a workshop for German industry: car parts, appliances, furniture and electronics made in Poland feed German factories and exports. Trade in goods between the two reached about €180 billion in 2025. Poland is Germany's fifth-largest trading partner, behind France, the United States, China and the Netherlands, and on current trends could overtake France. Germany is by far Poland's largest market." },
        { type: "section", head: "Security", md:
          "Russia's war has changed the balance. Poland now spends more of its economy on defence than any other NATO member and is building one of Europe's largest armies (see [[lesson:pl-5]]). Germany, rearming too, has stationed Patriot air-defence batteries in Poland and a brigade in neighbouring Lithuania. In December 2025 Chancellor Friedrich Merz and Tusk agreed to deepen defence ties, with a formal agreement planned. Tusk has said he wants more American troops in Poland but not at Germany's expense." },
        { type: "section", head: "Checks at the border", md:
          "Both countries are in the Schengen zone, where internal border checks are meant to be the exception. In October 2023 Germany began checking cars crossing from Poland to stop irregular migrants, and from 2025 German police turned some asylum seekers back. Poland's right accused Germany of 'dumping' migrants on Poland. In July 2025 Poland introduced its own checks at about 50 crossings on the German border, and has extended them repeatedly, most recently until 30 March 2027." },
        { type: "section", head: "Twin towns", md:
          "Along the border, daily life is shared. Poles have been free to work anywhere in Germany since 2011, and many commute across. Frankfurt an der Oder and Słubice, one town split by the river in 1945, share a bus line and a university: the German Viadrina runs a campus on the Polish bank. The new checks, with queues on bridges that had been open for years, have drawn complaints from commuters, shops and firms that depend on crossing freely." },
        { type: "compare", head: "Partners or rivals?",
          left: { head: "Partners", md:
            "Their economies are intertwined and they face the same Russian threat. Poland and Germany are Europe's new central partnership." },
          right: { head: "Rivals", md:
            "Poland resents German dominance of the EU and its past Russia policy; Germany finds Poland's nationalist politics and historical demands hard to manage." } },
        { type: "section", head: "Why it matters", md:
          "As Britain has left the EU and France struggles with debt and political deadlock, the Polish–German relationship has become one of the most important in Europe. Whether it becomes a real partnership may depend on Poland's 2027 election and on whether the two can move past reparations and border checks." }
      ],
      takeaways: [
        "Trade between Poland and Germany reached about €180 billion in 2025, and Poland may soon be Germany's top partner.",
        "Russia's war has pushed the two into closer defence cooperation, with an agreement planned.",
        "Both have reintroduced checks at their shared border, Poland's now extended to March 2027."
      ],
      check: { q: "Why did Poland introduce checks at its border with Germany in 2025?",
        choices: ["To stop smuggled cars", "In response to Germany turning back migrants and to counter irregular migration", "Because it left Schengen"], answer: 1,
        explain: "After Germany began turning some asylum seekers back to Poland, Warsaw introduced its own checks, citing irregular migration." },
      sources: [
        { title: "Poland-Germany trade hits record €90 billion in first half of 2025", publisher: "Polskie Radio", url: "https://www.polskieradio.pl/395/7786/artykul/3564020,polandgermany-trade-hits-record-%E2%82%AC90-billion-in-first-half-of-2025", date: "2025" },
        { title: "Poland became the 5th Commercial Partner of Germany", publisher: "Government of Poland", url: "https://www.gov.pl/web/development-technology/poland-became-the-5th-commercial-partner-of-germany", date: "n.d." },
        { title: "Merz says Germany to deepen defense ties with Poland", publisher: "Anadolu Agency", url: "https://www.aa.com.tr/en/europe/merz-says-germany-to-deepen-defense-ties-with-poland/3759044", date: "2025-12" },
        { title: "Poland wants more US troops but not at Germany's expense, says Tusk", publisher: "Notes from Poland", url: "https://notesfrompoland.com/2026/05/05/poland-wants-more-us-troops-but-not-at-germanys-expense-says-tusk/", date: "2026-05-05" },
        { title: "Poland extends border controls with Germany and Lithuania until October", publisher: "Anadolu Agency", url: "https://www.aa.com.tr/en/europe/poland-extends-border-controls-with-germany-and-lithuania-until-october/3884308", date: "2026-03" }
      ]
    }
  ]
});
