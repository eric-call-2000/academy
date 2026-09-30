/* ============================================================
   Unit 10 — Poland 🇵🇱
   Research note and sources: tools/research/pl.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("pl", {
  id: "pl",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "pl-1", kind: "snapshot", asOf: "2026-09-28",
      title: "Poland in brief",
      dek: "NATO's front-line state, the biggest spender on defence as a share of its economy, and a country split down the middle between two political camps.",
      blocks: [
        { type: "map", src: "maps/pl.svg",
          alt: "Locator map of central and eastern Europe with Poland highlighted, bordering Germany, the Czech Republic, Slovakia, Ukraine, Belarus, Lithuania and Russia's Kaliningrad exclave, with a small globe showing its place in the world.",
          caption: "Poland borders Ukraine, Belarus and Russia's Kaliningrad exclave, which puts it on NATO's eastern front line.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Warsaw"],
          ["People", "About 37 million"],
          ["System", "Parliamentary republic with a directly elected president"],
          ["Prime minister", "Donald Tusk (Civic Coalition), since December 2023"],
          ["President", "Karol Nawrocki, backed by Law and Justice, since August 2025"],
          ["Defence spending", "About 4.8% of GDP in 2026, the highest share in NATO"],
          ["Next parliamentary election", "Autumn 2027"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Poland is the largest country on [[NATO]]'s eastern flank and the main hub for Western weapons and aid flowing to [[unit:ua|Ukraine]]. It is building one of Europe's largest armies and spends a bigger share of its economy on defence than any other NATO member, including [[unit:us|the United States]].\n\n" +
          "It is also one of Europe's great economic success stories. Since the fall of communism in 1989 its economy has grown almost every year, and in 2025 it passed $1 trillion in size. Poland has become one of the EU's six largest economies and a political heavyweight in its own right." },
        { type: "section", head: "Who holds power", md:
          "Power is divided. Donald Tusk, a former president of the European Council, leads a coalition government of his centre-right Civic Coalition, the centrist Third Way parties and The Left, which came to power in December 2023 after eight years of rule by the national-conservative Law and Justice party (PiS).\n\n" +
          "But the president, Karol Nawrocki, elected in 2025 with PiS backing, can veto laws, and the government lacks the three-fifths majority in the [[Sejm]] needed to override him. The result is a constant tug of war between the two." },
        { type: "section", head: "The mood in 2026", md:
          "Poles feel both proud and anxious. Wages have risen fast, cities are booming and the country is more secure in NATO than ever. But Russian drones have entered Polish airspace, saboteurs have targeted railways, and the war next door feels close. Politics is deeply polarised: many families are split between supporters of Tusk and of PiS, and the two camps disagree about almost everything, from courts to abortion to the EU." },
        { type: "section", head: "A changed society", md:
          "Poland is one of the most ethnically uniform countries in Europe, and traditionally one of the most Catholic, though church attendance has fallen fast among the young. Millions of Poles emigrated to Britain, Germany and Ireland after 2004; since 2022, Poland has itself taken in around a million Ukrainians." },
        { type: "section", head: "What Poland wants", md:
          "Across both camps, Poland wants a strong NATO with American troops on its soil, a Ukraine that doesn't lose the war, and Russia held back. Tusk's government also wants to restore what it calls the [[rule of law]] after PiS's changes to the courts, and to put Poland at the centre of EU decision-making. PiS and the president put more stress on national sovereignty and are more sceptical of Brussels and of Ukrainian refugees' benefits." },
        { type: "callout", tone: "why", md:
          "If Russia ever tested NATO directly, Poland would be on the front line. That is why it is rearming faster than anyone, and why its internal divisions are watched closely in Moscow, Washington and Brussels." }
      ],
      takeaways: [
        "Poland is NATO's front-line state and spends about 4.8% of GDP on defence, the highest share in the alliance.",
        "Donald Tusk's government and President Karol Nawrocki, backed by the opposition, are in constant conflict.",
        "Its economy has grown almost every year since 1989 and passed $1 trillion in 2025."
      ],
      check: { q: "Why can't Tusk's government simply override President Nawrocki's vetoes?",
        choices: ["Vetoes are final in Poland", "It lacks the three-fifths Sejm majority needed", "Only the Senate can override"], answer: 1,
        explain: "Overriding a presidential veto needs three-fifths of the votes in the Sejm, which Tusk's coalition doesn't have." },
      sources: [
        { title: "Poland plans record defence spending of 4.8% GDP in 2026 budget", publisher: "Notes From Poland", url: "https://notesfrompoland.com/2025/08/29/poland-plans-record-defence-spending-of-4-8-gdp-in-2026-budget-along-with-lower-deficit/", date: "2025-08-29" },
        { title: "Nawrocki issues record 37th veto – more than any other president in Polish history", publisher: "Notes From Poland", url: "https://notesfrompoland.com/2026/06/12/nawrocki-issues-record-37th-veto-more-than-any-other-president-in-polish-history/", date: "2026-06-12" },
        { title: "Poland: The Tusk government and the 2025 presidential election", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10300/", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "pl-2", kind: "power", asOf: "2026-09-28",
      title: "A government and a president at war",
      dek: "Poland's constitution splits power between a prime minister who governs and a president who can block him.",
      blocks: [
        { type: "diagram", src: "img/pl/pl-2-power.svg",
          alt: "Diagram of power in Poland. Voters elect the Sejm, the Senate and the president. The 460-seat Sejm passes laws, approves the government and needs three-fifths to override a veto. It backs Prime Minister Donald Tusk, who leads a four-party coalition and runs policy and the budget. He is blocked by President Karol Nawrocki, directly elected for five years, who vetoes laws and signs appointments. The courts are fought over: judges named under PiS are contested, and EU courts weigh in. The next parliamentary election is in autumn 2027.",
          caption: "When the president and the government come from rival camps, Poland's system produces gridlock.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "Parliament", md:
          "Poland's parliament has two chambers. The [[Sejm]], with 460 members elected by proportional representation, is the more powerful: it passes laws and approves the prime minister and cabinet. A party needs 5% of the vote to win seats, and a coalition of parties running together needs 8%. The 100-member Senate reviews laws but can be overruled by the Sejm." },
        { type: "section", head: "Prime minister and president", md:
          "The prime minister runs the government and most policy. But the president, elected directly for up to two five-year terms, is much more than a figurehead. The president can veto any law, and overriding a veto takes three-fifths of the votes in the Sejm. The president also commands the armed forces, represents Poland abroad alongside the government, appoints judges on the proposal of a judicial council and can send laws to the Constitutional Tribunal.\n\n" +
          "When both come from the same camp, the system works smoothly. When they don't, as since 2025, it becomes a kind of hostile [[cohabitation]]." },
        { type: "section", head: "Record vetoes", md:
          "Karol Nawrocki has used his veto more than any president in Polish history: by June 2026 he had vetoed 37 laws. Among them were a reform of the body that appoints judges, a law to receive billions in EU defence loans, and changes to how elections are supervised. He argues he is protecting Poles from a government that overreaches. Tusk's camp says he is simply blocking its programme on behalf of PiS." },
        { type: "section", head: "The courts", md:
          "The Constitutional Tribunal, which rules on whether laws comply with the constitution, is at the centre of the conflict. Between 2015 and 2023 PiS appointed its judges in ways that the European Court of Human Rights and many Polish lawyers called unlawful. Tusk's government does not recognise some of its rulings, while the president and PiS defend it. The result is that Poland effectively has two rival legal systems, a problem the next briefing but one explores." },
        { type: "section", head: "Cohabitation before", md:
          "Poland has seen divided power before. From 2007 to 2010 Tusk governed alongside President Lech Kaczyński, and the two clashed constantly over foreign policy and who should represent Poland at EU summits. But no president used the veto as often as Nawrocki. His office has also drafted its own bills and proposed a new constitution, presenting the presidency as an alternative centre of government." },
        { type: "section", head: "Local and regional power", md:
          "Poland is divided into 16 regions, or voivodeships, each with an elected assembly that manages EU funds and regional development, and a governor appointed by the national government. City mayors, like Warsaw's, are directly elected and can be powerful national figures. The EU's cohesion funds, which have transformed Polish infrastructure, flow largely through these regions." },
        { type: "compare", head: "Two views of the president's role",
          left: { head: "The president's supporters", md:
            "The president has his own direct mandate from voters. Checking a government that bends rules to purge PiS-era officials is exactly what the constitution intends." },
          right: { head: "The government's supporters", md:
            "Voters chose this government in 2023 to undo PiS's damage. A president who vetoes almost everything is obstructing that mandate, not balancing it." } }
      ],
      takeaways: [
        "The Sejm elects the government, but the directly elected president can veto its laws.",
        "Overriding a veto needs three-fifths of the Sejm, which Tusk's coalition lacks.",
        "Nawrocki had vetoed a record 37 laws by June 2026."
      ],
      check: { q: "How many laws had Nawrocki vetoed by June 2026?",
        choices: ["About 5", "37, a record", "Over 100"], answer: 1,
        explain: "His 37th veto, in June 2026, made him the most prolific vetoer of any Polish president." },
      sources: [
        { title: "Nawrocki issues record 37th veto – more than any other president in Polish history", publisher: "Notes From Poland", url: "https://notesfrompoland.com/2026/06/12/nawrocki-issues-record-37th-veto-more-than-any-other-president-in-polish-history/", date: "2026-06-12" },
        { title: "Nawrocki vetoes Tusk election-control bid over political interference fears", publisher: "Brussels Signal", url: "https://brusselssignal.eu/2026/05/nawrocki-vetoes-tusk-election-control-bid-over-political-interference-fears/", date: "2026-05" },
        { title: "Constitution of the Republic of Poland", publisher: "Sejm", url: "https://www.sejm.gov.pl/prawo/konst/angielski/kon1.htm", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "pl-9", kind: "founding", asOf: "2026-09-28",
      title: "Reborn in 1918",
      dek: "Poland was a great European power, vanished from the map for 123 years, and returned as an independent state at the end of the First World War.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl/pl-9-hero.webp",
          alt: "Illustration of a Renaissance royal castle on a hill above a river, with brick walls, towers and a cathedral, in autumn light.",
          caption: "Wawel Castle in Kraków, seat of Polish kings for five centuries.",
          credit: "AI illustration — not a photograph",
          prompt: "A Renaissance royal castle with red brick walls, towers and a cathedral with golden domes on a hill above a wide river, autumn trees in gold and red, soft afternoon light, historic and proud, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Rise, fall and rebirth", items: [
          ["966", "Mieszko I is baptised; the Polish state is born"],
          ["1569", "Union of Lublin creates the Polish-Lithuanian Commonwealth"],
          ["1683", "King Jan III Sobieski defeats the Ottomans at Vienna"],
          ["1791", "Constitution of 3 May, Europe's first modern written constitution"],
          ["1772–95", "Three partitions erase Poland from the map"],
          ["11 Nov 1918", "Independence restored"],
          ["1920", "Poland defeats the Red Army at the Battle of Warsaw"]
        ] },
        { type: "section", head: "A Commonwealth", md:
          "The Polish state dates its birth to 966, when Duke Mieszko I accepted Christianity. In 1569 Poland and Lithuania formed a Commonwealth that became one of Europe's largest states, stretching from the Baltic toward the Black Sea and home to Poles, Lithuanians, Ruthenians, Germans and Europe's largest Jewish community. It was unusual: its nobles, about a tenth of the population, elected their kings and met in a parliament, the Sejm, where any single member could veto legislation, the famous liberum veto." },
        { type: "section", head: "Partition", md:
          "That system left the Commonwealth weak as its neighbours grew stronger. In three partitions, in 1772, 1793 and 1795, Russia, Prussia and Austria divided it among themselves. A last attempt at reform, the Constitution of 3 May 1791, often called Europe's first modern written constitution, came too late. For 123 years Poland did not exist as a state. Poles rose against Russian rule in 1830 and 1863 and were crushed; Polish culture, the Catholic Church and a romantic literature of national longing kept the idea of Poland alive." },
        { type: "section", head: "Independence", md:
          "The First World War destroyed all three partitioning empires. On 11 November 1918, the day the war ended, Józef Piłsudski, a socialist-turned-nationalist who had led Polish legions in the war, took command in Warsaw; the date is now Independence Day. The new republic fought wars over its borders with Ukrainians, Lithuanians and Germans, and above all with Soviet Russia. In August 1920, when the Red Army reached the gates of Warsaw, the Poles counter-attacked and routed it, a victory remembered as the 'Miracle on the Vistula'." },
        { type: "section", head: "The Second Republic", md:
          "Interwar Poland was a multi-ethnic state: about a third of its citizens were Ukrainians, Jews, Belarusians or Germans. Its democracy was fragile; in 1926 Piłsudski staged a coup and ruled in an increasingly authoritarian way until his death in 1935. Squeezed between Nazi Germany and the Soviet Union, the republic lasted only 21 years before both invaded it in September 1939 (see the next briefing)." },
        { type: "compare", head: "Two founding traditions",
          left: { head: "Piłsudski's Poland", md:
            "A civic, multi-ethnic republic in the tradition of the old Commonwealth, and a bulwark against Russia." },
          right: { head: "Dmowski's Poland", md:
            "Roman Dmowski's National Democrats saw Poland as an ethnically Polish, Catholic nation, a strand that still runs through the Polish right." } },
        { type: "section", head: "Why it still matters", md:
          "Centuries of partition and occupation explain Poland's fierce attachment to sovereignty, its deep distrust of Russia, and its enthusiasm for NATO. They also explain why Poles argue so passionately about their own history, as the Smolensk debate ([[lesson:pl-11]]) shows." }
      ],
      takeaways: [
        "The Polish-Lithuanian Commonwealth was one of Europe's largest states until Russia, Prussia and Austria partitioned it by 1795.",
        "Poland regained independence on 11 November 1918, led by Józef Piłsudski.",
        "In 1920 it defeated the Red Army at Warsaw; its independence lasted until 1939."
      ],
      check: { q: "For how long did Poland disappear from the map after the partitions?",
        choices: ["About 20 years", "123 years", "Two centuries"], answer: 1,
        explain: "From the third partition in 1795 until independence in 1918, there was no Polish state." },
      sources: [
        { title: "Poland: History", publisher: "Britannica", url: "https://www.britannica.com/place/Poland/History", date: "n.d." },
        { title: "Partitions of Poland", publisher: "Britannica", url: "https://www.britannica.com/event/Partitions-of-Poland", date: "n.d." },
        { title: "Józef Piłsudski", publisher: "Britannica", url: "https://www.britannica.com/biography/Jozef-Pilsudski", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "pl-3", kind: "history", asOf: "2026-09-28",
      title: "Partitions, Solidarity, Europe",
      dek: "A country wiped off the map for 123 years, devastated by war, freed by a trade union, and transformed by joining the West.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl/pl-3-hero.webp",
          alt: "Illustration of shipyard workers gathered at a tall iron gate decorated with flowers, with cranes behind them, in 1980s style.",
          caption: "Strikes at the Gdańsk shipyard in 1980 gave birth to Solidarity, the first independent trade union in the Soviet bloc.",
          credit: "AI illustration — not a photograph",
          prompt: "Shipyard workers in 1980s work clothes gathered at a tall iron gate decorated with flowers and hand-drawn blank placards, huge harbour cranes behind them, overcast summer sky, a sense of peaceful defiance, muted film colours, no legible text or faces in close-up." },
        { type: "timeline", head: "The short version", items: [
          ["1795", "Poland partitioned by Russia, Prussia and Austria"],
          ["1918", "Independence restored"],
          ["1939", "Invaded by Nazi Germany and the Soviet Union"],
          ["1980", "Solidarity is born in Gdańsk"],
          ["1989", "Communism ends after partly free elections"],
          ["1999 / 2004", "Poland joins NATO, then the EU"],
          ["2015–2023", "Law and Justice governs"]
        ] },
        { type: "section", head: "1. Erased and reborn", md:
          "In 1795 Poland was carved up by [[unit:ru|Russia]], Prussia and Austria and disappeared from the map for 123 years. It was restored in 1918, only to be invaded by Nazi Germany and the Soviet Union in 1939. Around six million Polish citizens died in the Second World War, half of them Jews murdered in the Holocaust, much of which the Nazis carried out in camps on occupied Polish soil. After the war, Stalin moved Poland's borders westward and imposed communist rule." },
        { type: "section", head: "2. Solidarity (1980–1989)", md:
          "In 1980 strikes at the Gdańsk shipyard, led by the electrician Lech Wałęsa, forced the regime to accept Solidarity, an independent trade union that soon had ten million members. The regime crushed it under [[martial law]] in 1981, but could not destroy it. In 1989 round-table talks led to partly free elections on 4 June, which Solidarity swept. Poland's peaceful revolution helped set off the fall of communism across Eastern Europe." },
        { type: "section", head: "3. The leap West (1989–2015)", md:
          "Poland adopted 'shock therapy', a rapid switch to a market economy that brought painful unemployment at first and three decades of growth after. It joined [[NATO]] in 1999 and the EU in 2004, which opened Western markets and brought billions in EU funds for roads, railways and towns. Donald Tusk, prime minister from 2007 to 2014, steered Poland through the 2008 crisis without a recession. In 2010 President Lech Kaczyński and 95 others died in a plane crash near Smolensk in Russia, a tragedy that deepened the split between the two main parties." },
        { type: "section", head: "4. The PiS years (2015–2023)", md:
          "Law and Justice, led by the late president's twin brother Jarosław Kaczyński, won power in 2015. It expanded child benefits and the minimum wage, which made it popular with poorer and rural voters, and took control of public media. It also reshaped the courts, a campaign the EU said broke its rules, leading Brussels to freeze billions in funds. Opposition grew over a near-total abortion ban imposed by a court ruling in 2020." },
        { type: "section", head: "5. The 2023 turn", md:
          "In October 2023 PiS won the most votes, 35.4%, but lost its majority. A record turnout of 74% gave Tusk's Civic Coalition, the Third Way and The Left together 248 of 460 seats. Tusk became prime minister in December and the EU unfroze its funds. But in 2025 the PiS-backed historian Karol Nawrocki narrowly beat Tusk's ally Rafał Trzaskowski for the presidency, 50.9% to 49.1%." }
      ],
      takeaways: [
        "Poland was erased from the map for 123 years and devastated in the Second World War.",
        "Solidarity's peaceful revolution in 1989 helped end communism across Eastern Europe.",
        "PiS governed from 2015 to 2023; Tusk's coalition took over, but a PiS-backed president won in 2025."
      ],
      check: { q: "Who narrowly won Poland's 2025 presidential election?",
        choices: ["Rafał Trzaskowski", "Karol Nawrocki", "Donald Tusk"], answer: 1,
        explain: "Karol Nawrocki, backed by PiS, beat Rafał Trzaskowski of Tusk's Civic Coalition by 50.9% to 49.1% in the run-off." },
      sources: [
        { title: "Poland profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-europe-17754512", date: "n.d." },
        { title: "2025 Polish presidential election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_Polish_presidential_election", date: "2025" },
        { title: "Poland: The Tusk government and the 2025 presidential election", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10300/", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "pl-10", kind: "past", asOf: "2026-09-28",
      title: "War, occupation and the Holocaust",
      dek: "From 1939 to 1945 Poland was carved up by Hitler and Stalin. About six million of its citizens died, half of them Jews murdered in the Holocaust.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl/pl-10-hero.webp",
          alt: "Illustration of a city of ruined buildings under a smoky sky, with the shell of a church tower standing among the rubble.",
          caption: "Warsaw was about 85% destroyed by the end of the war.",
          credit: "AI illustration — not a photograph",
          prompt: "A ruined European city of shattered brick buildings under a smoky grey sky, the gutted shell of a church tower standing among mountains of rubble, winter light, silent and devastated, no people, no flags, no legible text." },
        { type: "facts", head: "Poland's war", rows: [
          ["Invaded", "1 September 1939 by Germany; 17 September by the USSR"],
          ["Polish citizens killed", "About 6 million, roughly 17% of the population"],
          ["Polish Jews murdered", "About 3 million, about 90% of the community"],
          ["Katyn massacre", "About 22,000 Poles shot by the Soviet NKVD, 1940"],
          ["Warsaw Uprising", "August–October 1944; about 200,000 killed"]
        ] },
        { type: "section", head: "Two invaders", md:
          "Germany invaded Poland on 1 September 1939, starting the Second World War. On 17 September the Soviet Union invaded from the east under its secret pact with Hitler. Poland was partitioned again. Both occupiers set out to destroy the Polish elite: the Germans murdered teachers, priests and officials; in spring 1940 Stalin's secret police shot about 22,000 Polish officers, police and intellectuals at Katyn and other sites. Moscow blamed the Germans for half a century, admitting responsibility only in 1990." },
        { type: "section", head: "The Holocaust", md:
          "Poland had Europe's largest Jewish community, about 3.3 million people. The Germans confined Jews in ghettos, including Warsaw's, where about 400,000 were crowded together, and from 1942 deported them to death camps built on occupied Polish soil: Auschwitz-Birkenau, Treblinka, Sobibor, Bełżec, Chełmno and Majdanek. About three million Polish Jews were murdered, along with Jews from across Europe. In 1943 the Warsaw Ghetto Uprising fought the Germans for nearly a month before it was crushed." },
        { type: "section", head: "Occupation and resistance", md:
          "Poles under German rule faced mass executions, forced labour and deportations; about three million non-Jewish Polish citizens also died. Poland built one of the largest underground resistance movements in Europe, the Home Army, loyal to a government in exile in London. Some Poles risked their lives to hide Jews; Poland has the largest number of people honoured by Israel's Yad Vashem as 'Righteous Among the Nations'. Others betrayed or killed Jews, as at Jedwabne in 1941." },
        { type: "section", head: "Warsaw, 1944", md:
          "In August 1944, as the Red Army approached, the Home Army rose in Warsaw to liberate the city before the Soviets arrived. The Soviet forces halted across the river. After 63 days the uprising was crushed; about 200,000 people, mostly civilians, were killed, and the Germans systematically razed the city. After the war the Soviet Union installed a communist government, and Poland's borders were moved westward, with millions of Poles and Germans expelled." },
        { type: "compare", head: "Debates about memory",
          left: { head: "A nation of victims and heroes", md:
            "Poland was the first to fight, suffered terribly under two occupiers, and many Poles saved Jews at the risk of death." },
          right: { head: "A fuller account", md:
            "Historians argue that remembrance must also include Polish complicity in some crimes against Jews, a debate that grew heated over a 2018 law." } },
        { type: "section", head: "Why it still matters", md:
          "The war explains Poland's view of Germany and Russia today: its demand for German reparations, raised by the PiS government, and its conviction that Russia is an existential threat. A 2018 law criminalising claims that the Polish nation shared responsibility for Nazi crimes caused a diplomatic storm with Israel before it was softened." }
      ],
      takeaways: [
        "Germany and the Soviet Union invaded and divided Poland in 1939.",
        "About 6 million Polish citizens died, including about 3 million Jews murdered in the Holocaust.",
        "The Warsaw Uprising of 1944 was crushed and the city razed; the war shapes Polish attitudes to Germany and Russia."
      ],
      check: { q: "Who carried out the Katyn massacre of 1940?",
        choices: ["The German army", "The Soviet secret police (NKVD)", "Polish partisans"], answer: 1,
        explain: "The NKVD shot about 22,000 Polish officers and others; Moscow admitted it only in 1990." },
      sources: [
        { title: "Invasion of Poland, Fall 1939", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/invasion-of-poland-fall-1939", date: "n.d." },
        { title: "Katyn Massacre", publisher: "Britannica", url: "https://www.britannica.com/event/Katyn-Massacre", date: "n.d." },
        { title: "Warsaw Uprising", publisher: "Britannica", url: "https://www.britannica.com/event/Warsaw-Uprising", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "pl-11", kind: "past", asOf: "2026-09-28",
      title: "Smolensk, 2010",
      dek: "A plane crash killed Poland's president and 95 others on their way to commemorate Katyn. The disaster split the country for a decade.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl/pl-11-hero.webp",
          alt: "Illustration of a misty birch forest in early spring with candles and flowers laid on the ground in the foreground.",
          caption: "Mourners laid candles for the victims of the crash near Smolensk, in western Russia.",
          credit: "AI illustration — not a photograph",
          prompt: "A misty birch forest in early spring, rows of small glowing candles in red and white glass holders and bunches of flowers laid on the damp ground in the foreground, grey morning light, grief and silence, no people, no legible text." },
        { type: "facts", head: "The disaster", rows: [
          ["Date", "10 April 2010"],
          ["Killed", "96, including President Lech Kaczyński and his wife"],
          ["Also killed", "The army chief of staff, the central bank governor and many MPs"],
          ["Official Polish and Russian inquiries", "Pilot error in fog, with Russian air-traffic control failings"],
          ["PiS-era subcommittee", "Alleged an explosion; rejected by most experts, abolished in December 2023"]
        ] },
        { type: "section", head: "The crash", md:
          "On 10 April 2010 a Polish air force Tu-154 carrying President Lech Kaczyński, his wife and much of Poland's political and military elite was flying to Russia to mark the 70th anniversary of the Katyn massacre. Attempting to land in thick fog at a military airfield near Smolensk, it hit trees and crashed, killing all 96 people on board, among them the chief of the general staff, the central bank governor and many members of parliament. Poland was plunged into mourning." },
        { type: "section", head: "The investigations", md:
          "Russian and Polish government investigations concluded that the crew had descended below the safe altitude in fog, under pressure to land, with failings by Russian air-traffic controllers. Russia's refusal to return the wreckage and black boxes, still in its possession, fuelled suspicion. Jarosław Kaczyński, the president's twin brother and leader of the Law and Justice party (PiS), rejected the findings and suggested the crash had been an assassination." },
        { type: "section", head: "A national rift", md:
          "Smolensk became a dividing line in Polish politics. PiS supporters held monthly commemorations outside the presidential palace for years, and many believed the government of Donald Tusk, then prime minister, bore responsibility for failing to secure the flight or the investigation. After PiS returned to power in 2015, a subcommittee led by defence minister Antoni Macierewicz exhumed victims' bodies and claimed that explosions had destroyed the plane. Independent experts and most of the victims' families rejected those conclusions." },
        { type: "section", head: "Closing the file", md:
          "After Tusk's coalition took power in December 2023, the Macierewicz subcommittee was dissolved, and in 2024 a government-appointed team produced an 800-page report accusing it of deliberately manipulating black-box material to support the explosion theory, and sent dozens of notifications of possible crimes to prosecutors. Macierewicz has since been charged with disclosing classified information and faces investigation over other alleged offences, which he denies. PiS denounced this as a political attack. For many Poles on both sides, the tragedy remains raw." },
        { type: "compare", head: "Two versions",
          left: { head: "The official investigations", md:
            "A tragic accident caused by a combination of pilot error in bad weather, pressure to land and poor airfield control." },
          right: { head: "Kaczyński's supporters", md:
            "Russia may have caused the crash, and the Tusk government failed the victims and covered up the truth." } },
        { type: "section", head: "Why it matters", md:
          "Smolensk deepened the bitter rivalry between Tusk and Kaczyński that has defined Polish politics for two decades, and hardened suspicion of Russia long before its invasion of [[unit:ua|Ukraine]]. It shows how events can become symbols that divide a nation more than any policy." }
      ],
      takeaways: [
        "In April 2010 a plane crash near Smolensk killed President Lech Kaczyński and 95 others.",
        "Official inquiries found an accident in fog; Jarosław Kaczyński's PiS alleged a possible assassination.",
        "The disaster became a symbol of the Tusk–Kaczyński rivalry that divides Poland."
      ],
      check: { q: "Why was the Polish delegation flying to Russia in April 2010?",
        choices: ["For trade talks", "To mark the 70th anniversary of the Katyn massacre", "For a NATO summit"], answer: 1,
        explain: "The president was travelling to a commemoration of the 1940 massacre of Polish officers by the Soviet NKVD." },
      sources: [
        { title: "Death in Smolensk: A Polish Tragedy", publisher: "RUSI", url: "https://www.rusi.org/explore-our-research/publications/commentary/death-smolensk-polish-tragedy", date: "2010-04" },
        { title: "Polish government finds large-scale irregularities in predecessor's Smolensk investigation commission", publisher: "Notes from Poland", url: "https://notesfrompoland.com/2024/10/24/polish-government-finds-large-scale-irregularities-in-predecessors-smolensk-investigation-commission/", date: "2024-10-24" },
        { title: "Lech Kaczyński", publisher: "Britannica", url: "https://www.britannica.com/biography/Lech-Kaczynski", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "pl-4", kind: "players", asOf: "2026-09-28",
      title: "Tusk, Nawrocki, Kaczyński",
      dek: "Two old rivals, a young president, and a growing hard right that could decide who governs after 2027.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl/pl-4-hero.webp",
          alt: "Illustration of a classical palace on a Warsaw avenue at night, with a statue of a horseman in front and lamps along the street.",
          caption: "The Presidential Palace in Warsaw, from which Nawrocki has issued a record number of vetoes.",
          credit: "AI illustration — not a photograph",
          prompt: "A neoclassical palace on a wide city avenue at night, a bronze equestrian statue in front, street lamps glowing along the pavement, a few passers-by in coats, light snow, dignified and cold, no flags or legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Donald Tusk", role: "Prime minister, since December 2023",
            img: "img/pl/portrait-tusk.webp", source: "European Council official photo via Wikimedia Commons; confirm the licence.",
            md: "Prime minister for the second time, after 2007–2014, and former president of the European Council. A liberal-conservative with strong ties in Brussels, now fighting a president who blocks many of his laws." },
          { name: "Karol Nawrocki", role: "President, since August 2025",
            img: "img/pl/portrait-nawrocki.webp", source: "Official photo (prezydent.pl) via Wikimedia Commons; confirm the licence.",
            md: "A historian and former head of the Institute of National Remembrance, the state body that investigates Nazi and communist crimes. Ran as an independent backed by PiS. Close to Trump, tougher on Ukraine over history and refugee benefits." },
          { name: "Jarosław Kaczyński", role: "Leader of Law and Justice (PiS)",
            img: "img/pl/portrait-kaczynski.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Co-founder of PiS and its leader for over two decades, and the dominant figure on the Polish right. Now in his late 70s, he still decides the party's strategy." },
          { name: "Władysław Kosiniak-Kamysz", role: "Deputy PM and defence minister",
            img: "img/pl/portrait-kosiniak-kamysz.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Leader of the Polish People's Party, a coalition partner. Runs the defence ministry during Poland's historic military build-up." },
          { name: "Rafał Trzaskowski", role: "Mayor of Warsaw",
            img: "img/pl/portrait-trzaskowski.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Civic Coalition's candidate in 2025, who lost the presidency by fewer than 400,000 votes. Remains a leading figure in Tusk's camp." },
          { name: "Sławomir Mentzen", role: "Co-leader of the Confederation",
            img: "img/pl/portrait-mentzen.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Leader of the libertarian-nationalist Confederation, popular with young men. Won nearly 15% in the 2025 presidential first round; any future PiS government would probably need his party." }
        ] },
        { type: "section", head: "Two camps", md:
          "For two decades Polish politics has been a duel between Tusk and Kaczyński, and between their parties. Civic Coalition draws its support from cities, the west of the country, the young and the educated; PiS from small towns, the east, older and more religious voters. The divide goes beyond policy to identity: what it means to be Polish, the role of the Catholic Church, and how close to be to Brussels and Berlin." },
        { type: "section", head: "Tusk's coalition", md:
          "Tusk's government is a four-party alliance: his own Civic Coalition, the agrarian Polish People's Party and the centrist Poland 2050, which ran together as the Third Way in 2023, and The Left. They united to beat PiS, but disagree on abortion, taxes and the pace of change. Poland 2050 and The Left have fallen sharply in polls, which worries Tusk, because his majority depends on them." },
        { type: "section", head: "The PiS machine", md:
          "Even out of government, PiS remains the country's second-largest party, with a loyal base in the east and south, friendly television channels and newspapers, and a strong network in local government and the church. It won the 2025 presidential race and hopes to return to power in 2027." },
        { type: "section", head: "The new right", md:
          "The duel is becoming a crowd. On the right, the Confederation and Grzegorz Braun's more extreme Confederation of the Polish Crown have grown fast, especially among young voters angry about housing, taxes and immigration. Tusk's Civic Coalition leads PiS in polls, but the right-wing parties together are strong enough that the 2027 election could still bring a right-wing government." }
      ],
      takeaways: [
        "Polish politics has been a two-decade duel between Donald Tusk and Jarosław Kaczyński.",
        "President Karol Nawrocki, backed by PiS, has become the government's main obstacle.",
        "The hard-right Confederation parties are growing and could decide who governs after 2027."
      ],
      check: { q: "What did Karol Nawrocki do before becoming president?",
        choices: ["He was a general", "He led the Institute of National Remembrance", "He was mayor of Warsaw"], answer: 1,
        explain: "Nawrocki, a historian, headed the Institute of National Remembrance, which investigates Nazi and communist crimes. Trzaskowski is mayor of Warsaw." },
      sources: [
        { title: "Populist Karol Nawrocki wins Polish presidential election, setting stage for more clashes with PM Tusk", publisher: "AP via Yahoo News", url: "https://www.yahoo.com/news/poland-presidential-election-knife-edge-195352590.html", date: "2025-06-02" },
        { title: "Poland's duopoly is cracking as the 2027 battle begins", publisher: "TVP World", url: "https://tvpworld.com/95157323/poland-2027-election-tusk-pis-and-a-divided-right", date: "2026" },
        { title: "Poland election 2027: Tusk is winning the battle of the parties but not the blocs", publisher: "Poland Watch", url: "https://polandwatch.substack.com/p/poland-election-2027-tusk-is-winning", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "pl-5", kind: "story", asOf: "2026-09-28",
      title: "The front-line state",
      dek: "Russian drones in its skies, sabotage on its railways, and a defence budget bigger, as a share of the economy, than America's.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl/pl-5-hero.webp",
          alt: "Illustration of a row of modern tanks on a snowy training ground at dawn, with a forest edge and soldiers in winter gear.",
          caption: "Poland is building one of the largest land armies in Europe.",
          credit: "AI illustration — not a photograph",
          prompt: "A row of modern main battle tanks on a snowy military training ground at dawn, a dark pine forest edge, soldiers in winter camouflage seen from behind, vapour in the cold air, pale sunrise, powerful and still, no insignia or legible markings." },
        { type: "section", head: "What happened", md:
          "On the night of 9–10 September 2025, around 20 Russian drones crossed into Polish airspace during an attack on western Ukraine. Polish and allied jets shot some of them down, the first time NATO aircraft had fired on Russian military assets over alliance territory in the war. Poland asked for NATO consultations under Article 4. In November 2025 an explosion damaged a railway line used to carry aid to Ukraine, which Warsaw blamed on saboteurs working for Russia.\n\n" +
          "Poland's answer has been to spend. Its 2026 budget devotes about 4.8% of GDP to defence, more than any other NATO member." },
        { type: "facts", head: "By the numbers", rows: [
          ["Defence spending 2026", "About 4.8% of GDP, over $50 billion"],
          ["Army", "Among the largest in the EU, aiming for 300,000 troops"],
          ["Big purchases", "US Abrams and South Korean K2 tanks, HIMARS rockets, Apache helicopters, F-35 jets"],
          ["EU SAFE loans", "€43.7 billion, signed in May 2026"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Poles remember being invaded from both sides in 1939 and ruled from Moscow for four decades. Most see [[unit:ru|Russia]] as an existential threat and believe it could attack a NATO country if Ukraine falls. They are also unsure how far the United States under Trump will go to defend Europe, so Poland buys American weapons, hosts around 10,000 US troops and tries to make itself too valuable to abandon, while also building its own strength." },
        { type: "section", head: "The SAFE fight", md:
          "In 2025 the EU created [[SAFE]], a €150 billion loan programme for European defence, and Poland was allotted €43.7 billion, the largest share. In March 2026 Nawrocki vetoed the law needed to take the loans, arguing that EU borrowing threatened Polish sovereignty and favoured European over American weapons. Tusk's government went ahead anyway, signing the loan agreements with the EU on 8 May 2026." },
        { type: "section", head: "A defence industry", md:
          "Poland wants more than imports. It has agreed to build South Korean tanks under licence in Polish factories, is expanding its state-owned arms group, and is investing heavily in drones, ammunition and air defence, so that more of the money it spends stays at home." },
        { type: "compare", head: "Two views of the SAFE loans",
          left: { head: "The government's view", md:
            "Cheap EU loans let Poland rearm faster and build its own defence industry with European partners. Refusing them would be a gift to Russia." },
          right: { head: "The president's view", md:
            "The loans tie Poland to EU rules and debt, and risk pushing it away from the American weapons that really deter Russia. Parliament should decide, and it didn't." } },
        { type: "section", head: "What's next", md:
          "Poland is also building the 'East Shield', fortifications along its borders with Belarus and Russia. Watch whether the SAFE money turns into contracts, how Poland pays for spending at this level as its budget deficit grows, and how it responds to further Russian drones, sabotage and pressure on the Belarus border." }
      ],
      takeaways: [
        "Russian drones entered Polish airspace in September 2025, and allied jets shot some down.",
        "Poland spends about 4.8% of GDP on defence in 2026, the highest share in NATO.",
        "Tusk signed €43.7 billion in EU SAFE defence loans in May 2026, despite Nawrocki's veto."
      ],
      check: { q: "What is SAFE?",
        choices: ["An EU loan programme for defence", "A NATO air-defence system", "Poland's border wall"], answer: 0,
        explain: "SAFE is a €150 billion EU loan programme for defence. Poland has the largest allocation, €43.7 billion." },
      sources: [
        { title: "Poland's PM Tusk defies president's veto over €43.7 billion EU defence loan", publisher: "Euronews", url: "https://www.euronews.com/2026/03/13/polands-pm-tusk-defies-presidents-veto-over-437-billion-eu-defence-loan", date: "2026-03-13" },
        { title: "President vetoes bill on Poland receiving €44bn in EU defence loans", publisher: "Notes From Poland", url: "https://notesfrompoland.com/2026/03/12/president-vetoes-bill-on-poland-receiving-e44bn-in-eu-defence-loans/", date: "2026-03-12" },
        { title: "Poland's Defense Spending Poised to Skyrocket", publisher: "National Defense Magazine", url: "https://www.nationaldefensemagazine.org/articles/2026/5/26/polands-defense-spending-poised-to-skyrocket", date: "2026-05-26" },
        { title: "Poland plans record defence spending of 4.8% GDP in 2026 budget", publisher: "Notes From Poland", url: "https://notesfrompoland.com/2025/08/29/poland-plans-record-defence-spending-of-4-8-gdp-in-2026-budget-along-with-lower-deficit/", date: "2025-08-29" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "pl-6", kind: "story", asOf: "2026-09-28",
      title: "Undoing PiS",
      dek: "Tusk promised to restore the rule of law. Nearly three years on, Poland has rival courts, contested judges and a president who blocks the fixes.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl/pl-6-hero.webp",
          alt: "Illustration of a modern court building with tall columns in Warsaw at dusk, with a small crowd holding candles on the steps.",
          caption: "Protests in defence of judicial independence were a feature of the PiS years.",
          credit: "AI illustration — not a photograph",
          prompt: "A large modern court building with tall green columns at dusk, a small crowd seen from behind holding candles on the wide steps, blue evening light, quiet and determined, no legible text or signs." },
        { type: "section", head: "What happened", md:
          "Between 2015 and 2023, PiS reshaped Poland's courts. It filled the Constitutional Tribunal with its own appointees, including judges chosen for seats that had already been filled, took control of the National Council of the Judiciary (KRS), which nominates judges, and created a disciplinary chamber to punish judges. The EU's Court of Justice ruled against several reforms and Brussels froze billions in funds.\n\n" +
          "Tusk's government, elected to reverse all this, has found it hard. The president has vetoed a reform of the KRS, and many of the judges appointed under PiS remain in place." },
        { type: "section", head: "Why it's so hard", md:
          "Undoing the changes by ordinary law risks the same accusation made against PiS: that politicians are purging judges. Doing it by the book requires the president's signature, which Nawrocki withholds. So the government has taken shortcuts, such as refusing to publish some Constitutional Tribunal rulings and, in its first weeks, taking over public media by putting the old companies into liquidation. Critics, and not only PiS, say that fighting illegality with more legal shortcuts has deepened the chaos." },
        { type: "section", head: "The tribunal", md:
          "In 2026, as the terms of PiS-era judges expired, the Sejm elected new members of the Constitutional Tribunal. After a long standoff, the president swore in the first new judges for four years in April. In May, a European court ordered the tribunal to accept judges the president had rejected. On 4 September the Sejm elected Maciej Berek, a minister in Tusk's government, which gave coalition-chosen judges a majority on the tribunal; Nawrocki said the court needed 'another politician' least of all." },
        { type: "compare", head: "Two views of the fight",
          left: { head: "The government's view", md:
            "PiS captured the courts illegally, as European courts have confirmed. Repairing them is a duty, and the president is protecting the damage." },
          right: { head: "PiS's view", md:
            "Tusk's government is doing exactly what it accused PiS of: stuffing courts with allies, ignoring rulings it dislikes, and seizing the media." } },
        { type: "section", head: "The EU's role", md:
          "Brussels unfroze most of Poland's EU funds in 2024 after Tusk presented a plan to restore judicial independence, betting that the new government would deliver. Critics say it released the money too early, before laws were actually changed." },
        { type: "section", head: "Why it matters", md:
          "When courts are contested, everything they touch is contested: whether rulings are valid, whether judges were lawfully appointed, even whether elections were properly certified. That uncertainty affects businesses, citizens in court and Poland's standing in the EU. It also means whoever wins in 2027 may try to reshape the courts again." },
        { type: "section", head: "What's next", md:
          "Watch whether the president swears in the newest tribunal judges, how the EU responds, and whether the two camps can agree any lasting settlement. For now, most analysts expect the stalemate to last until the 2027 election, and possibly the next presidential election in 2030." }
      ],
      takeaways: [
        "PiS took control of Poland's top court and the body that nominates judges between 2015 and 2023.",
        "Tusk's efforts to reverse this are blocked by presidential vetoes and criticised as legal shortcuts.",
        "In September 2026 the Sejm elected a Tusk minister to the Constitutional Tribunal, giving coalition picks a majority."
      ],
      check: { q: "What does Poland's National Council of the Judiciary (KRS) do?",
        choices: ["It nominates judges", "It runs elections", "It oversees public media"], answer: 0,
        explain: "The KRS nominates judges for appointment. PiS changed how its members are chosen, and the EU's top court ruled against the change." },
      sources: [
        { title: "President vetoes bill reforming judicial body at heart of Poland's rule-of-law crisis", publisher: "Notes From Poland", url: "https://notesfrompoland.com/2026/02/19/president-vetoes-bill-reforming-judicial-body-at-heart-of-polands-rule-of-law-crisis/", date: "2026-02-19" },
        { title: "Prime minister's 'right-hand man' elected as Polish constitutional court judge", publisher: "Notes From Poland", url: "https://notesfrompoland.com/2026/09/04/prime-ministers-right-hand-man-elected-as-polish-constitutional-court-judge/", date: "2026-09-04" },
        { title: "European court orders Polish Constitutional Tribunal to accept judges rejected by president", publisher: "Notes From Poland", url: "https://notesfrompoland.com/2026/05/06/european-court-orders-polish-constitutional-tribunal-to-accept-judges-rejected-by-president/", date: "2026-05-06" },
        { title: "In Uncertain Waters: The Restoration of the Rule of Law in Poland", publisher: "German Marshall Fund", url: "https://www.gmfus.org/news/uncertain-waters-restoration-rule-law-poland", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "pl-7", kind: "story", asOf: "2026-09-28",
      title: "The road to 2027",
      dek: "Tusk's party leads the polls, but the right-wing bloc as a whole may be bigger. The next election will decide which counts.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl/pl-7-hero.webp",
          alt: "Illustration of a polling station in a Polish village school gymnasium, with voters queueing at wooden booths.",
          caption: "Turnout in the 2023 election, 74%, was the highest since the fall of communism.",
          credit: "AI illustration — not a photograph",
          prompt: "A small school gymnasium in a Polish village set up as a polling station, voters of different ages queueing at simple wooden booths with curtains, a ballot box on a table, autumn light through high windows, calm civic mood, no legible text." },
        { type: "section", head: "What happened", md:
          "Polls through 2026 put Tusk's Civic Coalition first, 11 to 15 points ahead of PiS in September. But its partners, the Third Way and The Left, are struggling to reach the thresholds for seats. On the right, PiS is weaker than before, while the Confederation and Grzegorz Braun's Confederation of the Polish Crown have grown.\n\n" +
          "Analysts point out that the right-wing parties, taken together, may outpoll Tusk's coalition. The key question is whether votes for the smaller parties are wasted below the threshold or turned into seats." },
        { type: "section", head: "Why it's so close", md:
          "Poland's electoral system rewards big parties and punishes small ones that miss 5%. If Tusk's small partners fall below it, their votes are wasted, and his coalition could lose its majority even while Civic Coalition wins the most votes. On the right, PiS would need the Confederation, and perhaps Braun, to govern; the Confederation's free-market economics sit awkwardly with PiS's big welfare state." },
        { type: "section", head: "The issues", md:
          "Security unites Poles more than it divides them: both camps back high defence spending. The fights are over the courts, abortion (Tusk promised to liberalise the law but lacks the votes), relations with the EU, migration, and support for [[unit:ua|Ukrainian]] refugees, around a million of whom live in Poland. Housing costs, taxes and the pension age matter a great deal to younger voters, many of whom are drawn to the Confederation." },
        { type: "section", head: "The candidates for prime minister", md:
          "Tusk, now 69, remains the dominant figure in his camp, and Kaczyński, in his late 70s, still leads PiS. Both parties face questions about who comes next, and either could present a fresh face as its candidate for prime minister before 2027. Younger voters in particular say they are tired of the same two men who have defined Polish politics since the 2000s." },
        { type: "compare", head: "Two views of the race",
          left: { head: "Tusk's camp", md:
            "Poland is safer and richer than ever, its standing in Europe restored. A return of PiS with the far right would mean more fights with Brussels and a return to capturing the courts." },
          right: { head: "The right", md:
            "Tusk has broken promises, used shortcuts against his opponents and tied Poland too closely to Berlin and Brussels. Poles want sovereignty, security and lower costs." } },
        { type: "section", head: "Why it matters", md:
          "A right-wing government in 2027, working with President Nawrocki, would end the gridlock but likely restart the conflicts with the EU of the PiS years. A Tusk win would continue the tug of war with the president until at least 2030. Either way, Poland's strong support for NATO and its defence build-up look set to continue." },
        { type: "section", head: "What's next", md:
          "Watch whether Tusk's partners merge or run on a joint list to avoid the threshold trap, whether PiS and the Confederation signal an alliance, and whether the Confederation keeps growing among young voters." }
      ],
      takeaways: [
        "Civic Coalition leads PiS by 11–15 points, but the right-wing bloc as a whole is close to Tusk's coalition.",
        "The 5% threshold could waste votes for Tusk's smaller partners and hand the right a majority.",
        "Both camps back high defence spending; they fight over courts, the EU, abortion and migration."
      ],
      check: { q: "Why could Tusk's coalition lose the 2027 election even if Civic Coalition wins the most votes?",
        choices: ["Because the president picks the prime minister freely", "Because its small partners may fall below the threshold, wasting their votes", "Because the Senate decides"], answer: 1,
        explain: "Parties below 5% (or 8% for coalitions) win no seats, so their votes are wasted and the bigger bloc on the other side could win a majority." },
      sources: [
        { title: "Poland election 2027: Tusk is winning the battle of the parties but not the blocs", publisher: "Poland Watch", url: "https://polandwatch.substack.com/p/poland-election-2027-tusk-is-winning", date: "2026" },
        { title: "Poland's duopoly is cracking as the 2027 battle begins", publisher: "TVP World", url: "https://tvpworld.com/95157323/poland-2027-election-tusk-pis-and-a-divided-right", date: "2026" },
        { title: "Opinion polling for the next Polish parliamentary election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Next_Polish_parliamentary_election", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "pl-12", kind: "spotlight", asOf: "2026-09-28",
      title: "The Polish economic miracle",
      dek: "Since communism fell, Poland has grown faster than almost any European economy, more than tripling its output. Now it is catching up with the West.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl/pl-12-hero.webp",
          alt: "Illustration of a modern city skyline of glass towers beside a grand socialist-realist palace with a spire, at dusk.",
          caption: "Warsaw's skyline, where new towers rise around the Stalin-era Palace of Culture and Science.",
          credit: "AI illustration — not a photograph",
          prompt: "A modern city skyline of glass skyscrapers at dusk rising around a massive socialist-realist palace with a tall spire, lit windows, a wide avenue with light trails, confident and dynamic, no people close up, no legible text or logos." },
        { type: "facts", head: "The miracle in numbers", rows: [
          ["Shock therapy", "The Balcerowicz plan, January 1990"],
          ["Years without recession", "1992 to 2019, the longest run in the EU"],
          ["GDP per head (purchasing power)", "About 51% of the EU average in 2004; 80% in 2024"],
          ["EU membership", "Since 2004; the largest net recipient of EU funds"],
          ["Economy", "Among the world's 20 largest (2025)"]
        ] },
        { type: "section", head: "Shock therapy", md:
          "In 1989 Poland's communist economy was collapsing, with shortages, debt and inflation running at hundreds of per cent. The first non-communist government, with Leszek Balcerowicz as finance minister, launched a 'shock therapy' programme on 1 January 1990: prices were freed, subsidies cut, the currency made convertible and the budget tightened. Output and living standards fell sharply at first and unemployment soared, but new private businesses sprang up and inflation was brought down." },
        { type: "section", head: "Three decades of growth", md:
          "From 1992 Poland's economy grew every single year until the pandemic, the longest run of uninterrupted growth in the European Union; it was the only EU country to avoid recession in the 2008–09 financial crisis. Foreign investment poured into factories making cars, appliances and furniture, and later into services centres. Joining the EU in 2004 opened markets and brought hundreds of billions of euros in funds for motorways, railways and cities. Measured by purchasing power, output per person rose from about half the EU average when Poland joined in 2004 to 80% in 2024." },
        { type: "section", head: "Who was left behind", md:
          "The gains were uneven. Unemployment exceeded 20% in the early 2000s, and about two million Poles emigrated after 2004, many to Britain and Ireland. Small towns and the rural east felt left behind by booming cities such as Warsaw, Kraków and Wrocław. That resentment helped PiS win power in 2015 with generous family benefits, including a monthly child payment, '500+', later raised to 800 złoty, which cut child poverty sharply." },
        { type: "section", head: "Challenges ahead", md:
          "Poland now faces the problems of success: rising wages that erode its cost advantage, a rapidly ageing population and low birth rate, dependence on coal for much of its electricity, and huge spending on defence, now over 4% of GDP, the highest in NATO. It has also taken in about a million Ukrainian refugees, many of whom have joined the workforce." },
        { type: "compare", head: "Two views of the transition",
          left: { head: "A success story", md:
            "Bold reform and EU membership turned Poland into one of Europe's most dynamic economies within a generation." },
          right: { head: "A costly transition", md:
            "Shock therapy imposed heavy costs on workers and regions, and growth relied on low wages and EU money." } },
        { type: "section", head: "Why it matters", md:
          "Poland's prosperity underpins its new weight in Europe: its army is set to be the EU's largest, and its economy is now bigger than Sweden's or Belgium's. A country that queued for bread in 1989 is now one of Europe's leading economies and military powers." }
      ],
      takeaways: [
        "Poland's 1990 'shock therapy' ended communist economics at a heavy short-term cost.",
        "It grew every year from 1992 to 2019 and avoided recession in the 2008–09 crisis.",
        "EU membership and investment have taken output per person from about half the EU average in 2004 to 80% in 2024."
      ],
      check: { q: "What was notable about Poland in the 2008–09 financial crisis?",
        choices: ["It left the EU", "It was the only EU country to avoid a recession", "It adopted the euro"], answer: 1,
        explain: "Poland kept growing through the crisis, part of an unbroken run from 1992 to 2019." },
      sources: [
        { title: "Poland: Economy", publisher: "Britannica", url: "https://www.britannica.com/place/Poland/Economy", date: "n.d." },
        { title: "Leszek Balcerowicz", publisher: "Britannica", url: "https://www.britannica.com/biography/Leszek-Balcerowicz", date: "n.d." },
        { title: "Poland's GDP is already 80% of the EU average", publisher: "Trade.gov.pl", url: "https://www.trade.gov.pl/en/news/polands-gdp-is-already-80-of-the-eu-average/", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "pl-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "A booming, rearming country, a government and president locked in conflict, and a year to go before the voters decide.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl/pl-8-hero.webp",
          alt: "Illustration of Warsaw's skyline at sunset, with glass towers beside a tall wedding-cake-style Soviet-era palace.",
          caption: "Warsaw's skyline, where glass towers now surround the Palace of Culture, Stalin's 'gift' to Poland.",
          credit: "AI illustration — not a photograph",
          prompt: "A city skyline at sunset with modern glass skyscrapers surrounding a tall ornate 1950s socialist-realist palace tower, a river in the foreground with a bridge, warm orange and pink sky, sense of transformation, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Tusk's coalition holds a Sejm majority but not the three-fifths needed to beat vetoes.\n" +
          "- **President:** Nawrocki has vetoed a record number of laws.\n" +
          "- **Defence:** about 4.8% of GDP in 2026; €43.7 billion of EU SAFE loans signed.\n" +
          "- **Courts:** coalition-chosen judges now form a majority on the contested Constitutional Tribunal.\n" +
          "- **Polls:** Civic Coalition leads PiS, but the right-wing bloc may be larger overall." },
        { type: "section", head: "Poland in the world", md:
          "Poland has become a leading voice in Europe on Russia and Ukraine, and a key partner for [[unit:us|the United States]], [[unit:de|Germany]], [[unit:fr|France]] and [[unit:gb|the UK]]. It is part of the core group of European countries planning Ukraine's security guarantees, though it has said it will not send troops to Ukraine. Relations with [[unit:ua|Ukraine]] itself are close but prickly, over farm imports and the wartime Volhynia massacres of Poles, which Nawrocki has raised often." },
        { type: "section", head: "The economy", md:
          "Poland's economy keeps growing faster than most of Europe's, with growth of around 3% a year, low unemployment and rising wages. The risks are a large budget deficit, driven partly by defence, an ageing population and dependence on German industry, whose troubles ripple into Polish factories." },
        { type: "section", head: "What voters want", md:
          "Polls suggest Poles' top concerns are prices, health care, security and housing. Waiting times in the public health system are long, and young people in big cities struggle with rents. Migration is sensitive: Poland has taken in Ukrainians but strongly opposes EU plans to share out asylum seekers from the Mediterranean, a position both camps hold. Voters also show fatigue with the endless fights between government and president, and many say neither side is delivering what it promised." },
        { type: "section", head: "Belarus", md:
          "Since 2021, Belarus, a close Russian ally, has pushed migrants toward the Polish border, a tactic Warsaw calls hybrid warfare. Poland has built a steel fence and deployed soldiers along the frontier, and at times closed border crossings, which also hurts trade. The border remains one of the most tense places in Europe, and a reminder that Poland's security problems do not come only from Russia's war in Ukraine." },
        { type: "section", head: "Three scenarios", md:
          "- **Stalemate to 2027.** Vetoes continue, little changes, and voters decide.\n" +
          "- **Tusk wins again.** His coalition keeps its majority, and the conflict with Nawrocki continues until 2030.\n" +
          "- **The right returns.** PiS and the Confederation form a government with Nawrocki's support, restarting fights with Brussels over courts and funds." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Autumn 2026:** the 2027 budget, and whether Nawrocki signs it\n" +
          "- **Ongoing:** swearing-in of Constitutional Tribunal judges\n" +
          "- **Ongoing:** Russian drones, sabotage and pressure on the Belarus border\n" +
          "- **Autumn 2027:** the parliamentary election" },
        { type: "section", head: "Connections", md:
          "Poland's story runs through [[unit:ua]] (the war next door and refugees), [[unit:ru]] (the threat), [[unit:us]] (US troops and weapons), [[unit:de]] (its biggest trading partner), [[unit:fr]] and [[unit:gb]] (European defence) and the EU (courts, funds and SAFE loans)." }
      ],
      takeaways: [
        "Tusk and Nawrocki remain locked in conflict; the courts are still contested.",
        "Poland is rearming at a pace unmatched in NATO and keeps its economy growing.",
        "The autumn 2027 election will decide whether the gridlock ends, and in whose favour."
      ],
      check: { q: "What historical issue has strained Polish–Ukrainian relations?",
        choices: ["The Volhynia massacres of Poles during the Second World War", "The partitions of 1795", "The 1989 round-table talks"], answer: 0,
        explain: "The wartime Volhynia massacres, in which Ukrainian nationalists killed tens of thousands of Poles, remain a sensitive issue that Nawrocki raises often." },
      sources: [
        { title: "Poland monthly briefing: Tusk vs. Nawrocki", publisher: "China-CEE Institute", url: "https://china-cee.eu/2026/02/10/poland-monthly-briefing-2026-tusk-vs-nawrocki-reconfiguration-of-the-right-wing-opposition-poland-leads-growth/", date: "2026-02-10" },
        { title: "Tusk gets his right-hand man elected to court", publisher: "Brussels Signal", url: "https://brusselssignal.eu/2026/09/tusk-gets-his-minister-and-right-hand-man-elected-to-polish-top-court/", date: "2026-09" },
        { title: "Poland election 2027: Poland's election is becoming a fight between Tusk and Nawrocki", publisher: "Poland Watch", url: "https://polandwatch.substack.com/p/poland-election-2027", date: "2026" }
      ]
    }
  ]
});
