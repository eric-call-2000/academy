/* ============================================================
   Unit 34 — Belarus 🇧🇾
   Research note and sources: tools/research/by.md
   Current as of 22 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("by", {
  id: "by",
  asOf: "2026-10-22",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "by-1", kind: "snapshot", asOf: "2026-10-22",
      title: "Belarus in brief",
      dek: "Europe's longest-ruling leader, Russia's closest ally, and a country that rose up in 2020 and was crushed.",
      blocks: [
        { type: "map", src: "maps/by.svg",
          alt: "Locator map of eastern Europe with Belarus highlighted, a landlocked country bordered by Russia to the east, Ukraine to the south, Poland to the west and Lithuania and Latvia to the north-west, with a small globe showing its place in the world.",
          caption: "Belarus lies between Russia and three NATO members, Poland, Lithuania and Latvia, and borders Ukraine to the south.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Minsk"],
          ["People", "About 9 million"],
          ["System", "Authoritarian presidential state"],
          ["President", "Alexander Lukashenko, since 1994"],
          ["Ally", "Russia, through the Union State (1999)"],
          ["Political prisoners", "More than 800 still held, the EU says (September 2026)"],
          ["Opposition leader", "Sviatlana Tsikhanouskaya, in exile"]
        ] },
        { type: "section", head: "Why it's here", md:
          "Belarus matters because of where it is and whom it serves. It sits between [[unit:ru|Russia]] and NATO's eastern flank, with [[unit:pl|Poland]], Lithuania and Latvia on one side. In February 2022 Russian troops invaded [[unit:ua|Ukraine]] from Belarusian territory and drove toward Kyiv. Russia has since moved what it says are tactical nuclear weapons and its new Oreshnik intermediate-range missile to Belarus. For NATO planners, the narrow Suwałki Gap between Belarus and Russia's Kaliningrad exclave is one of the most vulnerable places in Europe." },
        { type: "section", head: "Who holds power", md:
          "Alexander Lukashenko, a former collective-farm director, has ruled since 1994, longer than any other European leader. He controls the security services, the courts, parliament and the media. In 2020 he claimed 80% of the vote in an election the opposition and Western governments say was rigged, and the largest protests in the country's history followed. They were crushed: tens of thousands were detained, and opposition leaders were jailed or forced abroad. In January 2025 he declared himself re-elected with 87%." },
        { type: "section", head: "The mood in 2026", md:
          "Inside Belarus, open politics is impossible. Independent media and rights groups have been labelled 'extremist', and reading or sharing them can lead to prison. Hundreds of thousands have emigrated since 2020, many of them young professionals. Yet something has shifted: since 2025 Lukashenko has freed hundreds of political prisoners in deals with the [[unit:us|United States]], which has eased some sanctions in return. Whether that is a thaw or a trade remains the question." },
        { type: "section", head: "The economy", md:
          "Belarus kept much of its Soviet-era industry: tractors, trucks, fertilisers, refineries. Its economy depends on Russia, which buys more than half of its exports, supplies nearly three-quarters of its imports and sells it cheap oil and gas. Western sanctions since 2020 and 2022 cut off EU markets and pushed trade through Russia. Growth was over 4% in 2024 thanks to Russia's war economy, but has slowed to around 1%." },
        { type: "section", head: "What Belarus wants", md:
          "Lukashenko wants to stay in power, keep Russian support, and escape some of the West's isolation. He presents himself as a peacemaker who hosted the Minsk talks on Ukraine in 2014–15, and has offered to mediate again. The exiled opposition wants free elections, the release of all political prisoners and a European future, and argues that Western sanctions should stay until then." },
        { type: "callout", tone: "why", md:
          "Belarus shows how a small country can become another country's forward base, and how a dictator can use prisoners as bargaining chips with great powers." },
        { type: "section", head: "A divided identity", md:
          "Most Belarusians speak Russian in daily life, though Belarusian is the other official language and a symbol of national identity for the opposition. The Orthodox Church is the largest faith, with a Catholic minority in the west. Many families have relatives in Russia, Poland and Lithuania, and the country's identity has long been pulled between east and west." }
      ],
      takeaways: [
        "Alexander Lukashenko has ruled Belarus since 1994, longer than any other European leader.",
        "Russia used Belarus to invade Ukraine in 2022 and has moved nuclear-capable missiles there.",
        "Since 2025 Lukashenko has freed hundreds of political prisoners in exchange for US sanctions relief."
      ],
      check: { q: "Since when has Lukashenko ruled Belarus?",
        choices: ["2020", "1994", "1991"], answer: 1,
        explain: "Lukashenko was elected in July 1994, three years after independence, and has ruled ever since." },
      sources: [
        { title: "Belarus", publisher: "Britannica", url: "https://www.britannica.com/place/Belarus", date: "n.d." },
        { title: "Belarus frees 25 political prisoners in return for US sanctions relief", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/16/belarus-frees-25-political-prisoners-in-return-for-us-sanctions-relief", date: "2026-09-16" },
        { title: "Belarus country risk", publisher: "Coface", url: "https://www.coface.com/news-economy-and-insights/business-risk-dashboard/country-risk-files/belarus", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "by-2", kind: "power", asOf: "2026-10-22",
      title: "One man's state",
      dek: "On paper Belarus has a parliament, courts and elections. In practice every lever leads back to Lukashenko.",
      blocks: [
        { type: "diagram", src: "img/by/by-2-power.svg",
          alt: "Diagram of power in Belarus. Voters take part in elections that are neither free nor fair. President Alexander Lukashenko, in power since 1994, appoints the government, judges and regional heads and rules by decree. He also chairs the All-Belarusian People's Assembly, a body of about 1,200 loyalists created by the 2022 constitution. The National Assembly passes laws with no opposition members. The KGB and interior ministry enforce control; more than 800 political prisoners are held. Russia is the main backer through the Union State.",
          caption: "Belarus's formal institutions all answer to the president.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The president", md:
          "Belarus's 1994 constitution created a presidential republic, and referendums in 1996 and 2004, both criticised as unfair, gave the president sweeping powers and then removed term limits. The president appoints the prime minister, ministers, judges, regional governors and the heads of state companies, and can rule by decree. Lukashenko has been elected seven times, and international observers have judged none of the votes since 1994 free or fair." },
        { type: "section", head: "The 2022 constitution", md:
          "A new constitution, approved in a referendum in February 2022 days after Russia's invasion of Ukraine began, created the All-Belarusian People's Assembly, a body of about 1,200 delegates drawn from officials and pro-government groups, as the 'highest representative body'. It can override parliament and dismiss officials. Lukashenko became its chairman in 2024, a post he can hold even after leaving the presidency. The same text restored a two-term limit, counting only from 2025, and dropped Belarus's commitment to being nuclear-free." },
        { type: "section", head: "Parliament and parties", md:
          "The National Assembly has a 110-seat lower house and an upper house partly appointed by the president. Since 2024 no opposition party has been allowed to register; most were dissolved by court order. In elections the authorities control the candidate lists, the counting and the media, and independent observers are excluded or arrested. Parliament's role is to approve the president's laws." },
        { type: "section", head: "Force and fear", md:
          "Belarus's security service is still called the KGB. Together with the interior ministry's riot police and the courts, it enforces a system in which criticism can mean prison. Rights groups say more than 65,000 people have been detained since 2020. Independent news sites, the rights group Viasna and even some songs and symbols, such as the white-red-white flag used by protesters, have been branded 'extremist'. Many of the 800-plus political prisoners are held in isolation." },
        { type: "section", head: "Russia's role", md:
          "The 1999 Union State treaty envisages a common economy, currency and defence, though in practice Belarus has kept its own state. Russia provides cheap energy and loans, buys Belarusian goods and, in 2020, promised security help if the protests got out of hand. Integration plans move slowly: by early 2026 only about 40% of the latest programme's measures had been carried out. But Lukashenko's survival depends heavily on Moscow." },
        { type: "section", head: "Courts and law", md:
          "Courts in Belarus do not act independently in political cases. Trials of opponents are often held behind closed doors, defence lawyers who take such cases have lost their licences or been jailed themselves, and charges such as 'extremism', 'insulting the president' or 'treason' carry long sentences. Since 2023 a law allows the courts to try exiles in absentia, and several opposition leaders abroad have been sentenced that way." },
        { type: "compare", head: "Two views of the system",
          left: { head: "The government's view", md:
            "Belarus is a stable, sovereign state that avoided the chaos and oligarchs of other post-Soviet countries; the 2020 protests were a Western-backed coup attempt." },
          right: { head: "The opposition's view", md:
            "Belarus is a personal dictatorship that steals elections, jails critics and depends on Moscow to survive." } }
      ],
      takeaways: [
        "The president appoints the government, judges and regional heads, and term limits were removed in 2004.",
        "The 2022 constitution created the All-Belarusian People's Assembly, which Lukashenko chairs.",
        "No opposition party is registered, and more than 65,000 people have been detained since 2020."
      ],
      check: { q: "What did Belarus's 2022 constitution drop?",
        choices: ["The presidency", "The country's non-nuclear status", "Russian as an official language"], answer: 1,
        explain: "The new constitution removed the commitment to be nuclear-free, opening the way for Russian nuclear weapons." },
      sources: [
        { title: "2022 Belarusian constitutional referendum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2022_Belarusian_constitutional_referendum", date: "2022" },
        { title: "Belarus: Government and society", publisher: "Britannica", url: "https://www.britannica.com/place/Belarus", date: "n.d." },
        { title: "No breakthrough planned: the current state of Russia–Belarus integration", publisher: "OSW", url: "https://www.osw.waw.pl/en/publikacje/analyses/2026-02-27/no-breakthrough-planned-current-state-russia-belarus-integration", date: "2026-02-27" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "by-9", kind: "founding", asOf: "2026-10-22",
      title: "Between Lithuania and Russia",
      dek: "For centuries Belarusian lands belonged to the Grand Duchy of Lithuania and Poland, then to Russia. A Belarusian state appeared only in the 20th century.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/by/by-9-hero.webp",
          alt: "Illustration of a white medieval stone castle with round towers reflected in a lake, surrounded by birch and pine forest in early autumn.",
          caption: "Mir Castle, built in the 1500s, from the era of the Grand Duchy of Lithuania.",
          credit: "Illustration — not a photograph",
          prompt: "A white and red-brick medieval castle with several round and square towers reflected in a still lake, surrounded by birch and pine forest in early autumn, soft morning mist, calm and old, no people, no flags, no legible text." },
        { type: "timeline", head: "From principalities to a republic", items: [
          ["862", "Polotsk first mentioned, seat of an early principality"],
          ["1200s–1300s", "Belarusian lands join the Grand Duchy of Lithuania"],
          ["1569", "The Polish-Lithuanian Commonwealth is formed"],
          ["1772–95", "The partitions bring the region under Russia"],
          ["1918", "The Belarusian People's Republic is proclaimed"],
          ["1919", "The Belarusian Soviet republic is founded"],
          ["1939", "Western Belarus, then Polish, is annexed by the USSR"]
        ] },
        { type: "section", head: "Polotsk and the Grand Duchy", md:
          "The ancestors of Belarusians were East Slavs who settled the forests and marshes between the Baltic and the Black Sea. Polotsk, first mentioned in 862, was one of the leading principalities of medieval Rus. From the 1200s these lands were absorbed into the Grand Duchy of Lithuania, a huge state in which the Old Belarusian language was the language of law and government. Belarusian historians see the Grand Duchy as their own heritage, not only Lithuania's." },
        { type: "section", head: "Poland and the Commonwealth", md:
          "In 1569 the Grand Duchy joined Poland in the Polish-Lithuanian Commonwealth. The local nobility increasingly adopted the Polish language and Catholicism, while peasants stayed Orthodox or joined the Uniate Church, which kept Orthodox rites under the pope. Towns had large Jewish communities; by 1900, Jews were the majority in many Belarusian towns. The Commonwealth's partitions between 1772 and 1795 brought the whole region under the Russian Empire." },
        { type: "section", head: "Russian rule", md:
          "The tsars treated the region as 'Northwestern Territory' and its people as a branch of Russians. After a Polish-led uprising in 1863, led in this region by Kastus Kalinouski, now a Belarusian national hero, the empire banned printing in Belarusian in the Latin alphabet and promoted Russian. A Belarusian national movement grew from the 1900s around newspapers and poets such as Yanka Kupala." },
        { type: "section", head: "Two states in 1918–19", md:
          "As the Russian Empire collapsed, activists proclaimed a Belarusian People's Republic on 25 March 1918 under German occupation; it never controlled its territory, and its government went into exile, where it still exists. In 1919 the Bolsheviks created a Soviet Belarusian republic. The 1921 Treaty of Riga split the land: the west went to Poland, the east stayed Soviet. In 1939, under the Nazi–Soviet pact, the USSR annexed western Belarus." },
        { type: "section", head: "The Soviet years before the war", md:
          "Under Stalin, Soviet Belarus first promoted the Belarusian language in the 1920s, then turned on its own intelligentsia. In the purges of the 1930s, tens of thousands were shot, many in the Kurapaty forest outside Minsk, where mass graves were found in 1988. Kurapaty became a symbol for the national movement; the authorities have resisted turning it into a full memorial." },
        { type: "compare", head: "Two founding stories",
          left: { head: "The opposition's story", md:
            "Belarus is a European nation rooted in the Grand Duchy and the 1918 republic, whose white-red-white flag protesters carried in 2020." },
          right: { head: "Lukashenko's story", md:
            "Belarus was born as a Soviet republic, liberated by the Red Army, and belongs with Russia in one Slavic civilisation." } },
        { type: "section", head: "Why it matters", md:
          "The two stories, European or Russian, are at the heart of today's politics. Lukashenko restored Soviet-era symbols in a 1995 referendum; the opposition took up the older flag and coat of arms." }
      ],
      takeaways: [
        "Belarusian lands were part of the Grand Duchy of Lithuania and the Polish-Lithuanian Commonwealth for centuries.",
        "The partitions of 1772–95 put them under Russian rule, which discouraged Belarusian identity.",
        "A Belarusian People's Republic was declared in 1918; the Soviet Belarusian republic was founded in 1919."
      ],
      check: { q: "Which flag did protesters carry in 2020?",
        choices: ["The Soviet red flag", "The white-red-white flag of the 1918 republic", "The Russian tricolour"], answer: 1,
        explain: "The white-red-white flag, used by the 1918 republic and briefly after 1991, became the symbol of the 2020 protests." },
      sources: [
        { title: "Belarus: History", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Belarus", date: "n.d." },
        { title: "Vytautas the Great", publisher: "Britannica", url: "https://www.britannica.com/biography/Vytautas-the-Great", date: "n.d." },
        { title: "Belarusian Democratic Republic", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Belarusian_Democratic_Republic", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "by-3", kind: "history", asOf: "2026-10-22",
      title: "From the Soviet Union to 2020",
      dek: "Devastated by war, poisoned by Chernobyl, independent by accident in 1991, and run by one man since 1994.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/by/by-3-hero.webp",
          alt: "Illustration of a vast avenue in Minsk lined with grand Stalin-era buildings with columns and towers, under a pale winter sky, with a few distant cars.",
          caption: "Minsk was rebuilt after the war as a showcase Soviet city, with avenues of Stalin-era buildings.",
          credit: "Illustration — not a photograph",
          prompt: "A vast straight avenue lined with grand Stalin-era neoclassical buildings with columns, arches and small towers, a pale winter sky, a few distant old cars and tiny walking figures, wide and empty, orderly and monumental, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1941–44", "German occupation; about a quarter of the population killed"],
          ["1986", "The Chernobyl disaster contaminates much of the south"],
          ["1991", "Independence as the Soviet Union breaks up"],
          ["1994", "Lukashenko wins the first presidential election"],
          ["1999", "Union State treaty with Russia"],
          ["2020", "Disputed election and mass protests"],
          ["2022", "Russia invades Ukraine partly from Belarus"]
        ] },
        { type: "section", head: "1. War and rebuilding", md:
          "Few places suffered as Belarus did in the Second World War. Under German occupation from 1941 to 1944, roughly a quarter of the population died, among them most of its Jews ([[lesson:by-10]]). Minsk was almost entirely destroyed. After the war Belarus was rebuilt as an industrial workshop of the Soviet Union, producing tractors, trucks and electronics, and Minsk became a city of wide Stalinist avenues. Its Soviet leaders, such as Pyotr Masherov, are still remembered fondly by many." },
        { type: "section", head: "2. Chernobyl and independence", md:
          "On 26 April 1986 a reactor exploded at Chernobyl, just across the border in Soviet Ukraine. About 70% of the radioactive fallout landed on Belarus ([[lesson:by-11]]). In December 1991 the leaders of Russia, Ukraine and Belarus met in a hunting lodge in the Belavezha forest and declared the Soviet Union dissolved. Belarus became independent under Stanislau Shushkevich, a physicist, with a weak sense of national identity and an economy tied to Russia." },
        { type: "section", head: "3. Lukashenko's rise", md:
          "In 1994 Alexander Lukashenko, a populist who had built a name fighting corruption in parliament, won the first presidential election with 80% in the run-off. He quickly halted privatisation, kept state farms and factories and restored Soviet-style symbols. A 1996 referendum gave him power over parliament and the courts. Opponents disappeared in 1999–2000, and a Council of Europe inquiry later linked senior officials to their deaths. In 1999 he signed the Union State treaty with Russia." },
        { type: "section", head: "4. Stability and repression", md:
          "For two decades Lukashenko offered Belarusians a bargain: stable wages and pensions, low inequality and order, in exchange for political silence. Cheap Russian oil, refined and re-exported to Europe, paid for much of it. Protests after the 2006 and 2010 elections were broken up and candidates jailed. After Russia annexed Crimea in 2014, Lukashenko tried to balance, hosting the Minsk peace talks on Ukraine and opening to the West, until 2020." },
        { type: "section", head: "5. 2020 and after", md:
          "In 2020, after a botched response to Covid and growing economic strain, Sviatlana Tsikhanouskaya stood in for her jailed husband and drew huge crowds. After the official result gave Lukashenko 80%, hundreds of thousands protested for months ([[lesson:by-5]]). The crackdown that followed made Belarus more dependent on Russia than ever, and in February 2022 it let Russian troops use its territory to invade [[unit:ua|Ukraine]]." },
        { type: "section", head: "6. A Soviet-style economy", md:
          "Unlike most post-Soviet states, Belarus never carried out mass privatisation. About half of the economy is still state-owned, including the giant tractor, truck and potash companies. That spared it the oligarchs and the sudden poverty of 1990s Russia and Ukraine, but left it with low productivity, debt and a reliance on Russian subsidies that tied Lukashenko ever closer to Moscow." }
      ],
      takeaways: [
        "Belarus lost about a quarter of its people in the Second World War and was rebuilt as a Soviet industrial centre.",
        "It became independent in 1991; Lukashenko was elected in 1994 and has ruled ever since.",
        "After the disputed 2020 election and mass protests, it became ever more dependent on Russia."
      ],
      check: { q: "Where was the end of the Soviet Union agreed in December 1991?",
        choices: ["Moscow", "The Belavezha forest in Belarus", "Kyiv"], answer: 1,
        explain: "The leaders of Russia, Ukraine and Belarus signed the Belavezha Accords in a hunting lodge in the Belavezha forest." },
      sources: [
        { title: "Belarus: History", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Belarus", date: "n.d." },
        { title: "Alexander Lukashenko", publisher: "Britannica", url: "https://www.britannica.com/biography/Alexander-Lukashenko", date: "n.d." },
        { title: "2020–2021 Belarusian protests", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2020%E2%80%932021_Belarusian_protests", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "by-10", kind: "past", asOf: "2026-10-22",
      title: "The burned villages",
      dek: "In three years of German occupation, Belarus lost about a quarter of its people. Hundreds of villages were burned with everyone inside.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/by/by-10-hero.webp",
          alt: "Illustration of a memorial field of stone chimney-shaped columns in a snowy clearing surrounded by birch forest, under a grey sky.",
          caption: "The Khatyn memorial, where each chimney-shaped column stands for a burned house.",
          credit: "Illustration — not a photograph",
          prompt: "A memorial field in a snowy forest clearing with rows of tall grey stone columns shaped like chimneys, each topped with a small bell, birch trees around, a heavy grey sky, solemn silence, no people, no flags, no legible text." },
        { type: "facts", head: "The war in Belarus", rows: [
          ["Occupation", "June 1941 to July 1944"],
          ["Deaths", "Roughly a quarter of the population, perhaps more"],
          ["Jews murdered", "About 800,000 in Belarus's present borders"],
          ["Villages burned with their people", "More than 600"],
          ["Khatyn", "22 March 1943; 149 villagers killed"]
        ] },
        { type: "section", head: "Occupation", md:
          "Germany invaded the Soviet Union on 22 June 1941, and within weeks all of Belarus was occupied. The Nazis planned to starve and expel much of the Slavic population to make room for German settlement. Minsk, Vitebsk, Gomel and other cities were reduced to ruins. About two million people from Belarus died, roughly a quarter of the population, though estimates vary and some historians give higher figures." },
        { type: "section", head: "The Holocaust", md:
          "Belarus had one of Europe's largest Jewish populations. German units and local collaborators murdered most of them, usually by mass shootings at pits outside towns rather than in camps. About 80,000 people were packed into the Minsk ghetto. Maly Trostenets, near Minsk, was one of the biggest killing sites in the occupied Soviet Union. A thousand-year-old Jewish world was almost entirely destroyed." },
        { type: "section", head: "Partisans and reprisals", md:
          "Belarus's forests and marshes became the heartland of the Soviet partisan movement, with several hundred thousand fighters by 1944, as well as Polish and Jewish partisan units. The Germans responded with 'anti-partisan' operations that wiped out whole villages. At Khatyn, on 22 March 1943, a police battalion, which included Ukrainian collaborators and the notorious SS Dirlewanger unit, herded 149 villagers into a barn and set it on fire. More than 600 villages met the same fate." },
        { type: "section", head: "Liberation", md:
          "In the summer of 1944 the Red Army's Operation Bagration destroyed Germany's Army Group Centre and liberated Belarus within weeks, one of the biggest defeats in German military history. Minsk was liberated on 3 July, now Independence Day. After the war, Belarus's borders were moved west, and many Poles left for Poland." },
        { type: "section", head: "Remembering the war", md:
          "Monuments to the war are everywhere in Belarus, from the Brest fortress, which held out for weeks in 1941, to the vast Khatyn memorial, where bells ring every 30 seconds for the dead. Every family has its losses. The state museum of the Great Patriotic War in Minsk is one of the largest in the former Soviet Union, and Victory Day on 9 May is a central public holiday." },
        { type: "compare", head: "Two uses of memory",
          left: { head: "The official memory", md:
            "The Great Patriotic War is the founding story of modern Belarus; a 2022 law even made 'genocide of the Belarusian people' a crime to deny." },
          right: { head: "Critics' concern", md:
            "The state uses wartime memory to cast the West as an enemy and to justify the alliance with Russia, while ignoring Soviet crimes." } },
        { type: "section", head: "Why it matters", md:
          "The war shapes Belarusians' deep aversion to fighting. Polls, though hard to trust in a dictatorship, suggest most Belarusians oppose joining Russia's war in [[unit:ua|Ukraine]], one reason Lukashenko has kept his army out of it." }
      ],
      takeaways: [
        "German occupation in 1941–44 killed roughly a quarter of Belarus's population.",
        "Most of its Jews were murdered, and more than 600 villages, including Khatyn, were burned with their people.",
        "The Red Army liberated Minsk on 3 July 1944, now Belarus's Independence Day."
      ],
      check: { q: "Which date is Belarus's Independence Day?",
        choices: ["25 March", "3 July, the liberation of Minsk in 1944", "25 August, the 1991 declaration"], answer: 1,
        explain: "A 1996 referendum moved Independence Day to 3 July, the day the Red Army liberated Minsk." },
      sources: [
        { title: "Khatyn massacre", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Khatyn_massacre", date: "n.d." },
        { title: "Belarus: History", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Belarus", date: "n.d." },
        { title: "Minsk", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/minsk", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "by-11", kind: "past", asOf: "2026-10-22",
      title: "Chernobyl's shadow",
      dek: "The 1986 disaster happened in Ukraine, but most of the fallout landed on Belarus. A fifth of the country was contaminated.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/by/by-11-hero.webp",
          alt: "Illustration of an abandoned village of wooden houses overgrown with trees and tall grass, with a rusted warning sign post and empty road, in summer haze.",
          caption: "Hundreds of villages in south-eastern Belarus were evacuated and never resettled.",
          credit: "Illustration — not a photograph",
          prompt: "An abandoned village of weathered wooden houses with carved window frames overgrown by young trees and tall grass, a rusted blank metal sign on a post, an empty cracked road, summer haze, eerie quiet, no people, no legible text." },
        { type: "facts", head: "Chernobyl and Belarus", rows: [
          ["Date", "26 April 1986"],
          ["Fallout on Belarus", "About 70% of the total"],
          ["Land contaminated", "About a fifth of the country"],
          ["People resettled", "More than 130,000 in Belarus"],
          ["Exclusion zone", "The Polesie State Radioecological Reserve"]
        ] },
        { type: "section", head: "What happened", md:
          "In the early hours of 26 April 1986, during a safety test, reactor No. 4 at the Chernobyl nuclear plant in Soviet Ukraine exploded and burned for days, releasing radioactive material across Europe. Winds carried most of it north. About 70% of the fallout landed on Belarus, especially the Gomel and Mogilev regions. Soviet authorities said little for days; May Day parades went ahead in Minsk and Kyiv." },
        { type: "section", head: "The cost", md:
          "Over the following years more than 130,000 Belarusians were moved, and hundreds of villages were abandoned or bulldozed. About a fifth of the country's land, including large areas of farmland and forest, was contaminated. Thyroid cancer among children rose sharply, a link scientists accept; the wider health toll is still debated. In some years the government spent a fifth or more of its budget on Chernobyl's consequences." },
        { type: "section", head: "A political awakening", md:
          "The disaster and the cover-up fuelled anger at Moscow in the late Soviet years. The writer Svetlana Alexievich, who later won the Nobel Prize in Literature, gathered survivors' testimony in 'Voices from Chernobyl'. A 'Chernobyl Way' march each 26 April became an opposition tradition in Minsk, until it was effectively banned." },
        { type: "section", head: "A new nuclear plant", md:
          "Despite Chernobyl, Belarus built its first nuclear power station at Astravets, near the Lithuanian border, with Russia's Rosatom and Russian loans. It started producing electricity in 2020. Lithuania, whose capital Vilnius is about 50 kilometres away, called it unsafe and refused to buy its power; Belarus says it meets international standards." },
        { type: "section", head: "Living with radiation", md:
          "Families still live in parts of the contaminated regions, where farmers are given guidance on which fields and mushrooms to avoid. International agencies have helped monitor food and soil. For years foreign charities brought 'Chernobyl children' from Belarus for summer holidays abroad to recover their health, a tradition that tied many Belarusian families to Italy, Ireland and Germany." },
        { type: "section", head: "What scientists say", md:
          "International studies by UN agencies found a sharp rise in thyroid cancer among people exposed as children, with thousands of cases, most of them treatable. Estimates of eventual deaths across the region from Chernobyl-related cancers range widely, from several thousand to tens of thousands, and remain disputed." },
        { type: "compare", head: "Two views of the legacy",
          left: { head: "The government's view", md:
            "Belarus has recovered: contaminated land is being returned to use, and the Astravets plant shows the country can be a modern nuclear power." },
          right: { head: "Critics' view", md:
            "The state has downplayed health risks and moved too fast to resettle land, and Astravets ties Belarus's energy to Russia." } },
        { type: "section", head: "Why it matters", md:
          "Chernobyl is part of Belarusian identity, a trauma imposed from outside. In 2022 Russian troops crossed from Belarus through the Chernobyl exclusion zone on their way toward Kyiv, digging trenches in contaminated soil." }
      ],
      takeaways: [
        "About 70% of the fallout from the 1986 Chernobyl explosion landed on Belarus.",
        "More than 130,000 people were resettled and about a fifth of the land was contaminated.",
        "Belarus has since built a Russian-designed nuclear plant at Astravets, near Lithuania."
      ],
      check: { q: "Where was the Chernobyl nuclear plant?",
        choices: ["In Belarus", "In Soviet Ukraine, near the Belarusian border", "In Russia"], answer: 1,
        explain: "The plant was in northern Ukraine, but winds carried most of the fallout north into Belarus." },
      sources: [
        { title: "Chornobyl", publisher: "International Atomic Energy Agency", url: "https://www.iaea.org/topics/chornobyl", date: "n.d." },
        { title: "How many people died as a result of the Chernobyl disaster?", publisher: "Britannica", url: "https://www.britannica.com/question/How-many-people-died-as-a-result-of-the-Chernobyl-disaster", date: "n.d." },
        { title: "Belarus: History", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Belarus", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "by-4", kind: "players", asOf: "2026-10-22",
      title: "Lukashenko, Tsikhanouskaya, the prisoners",
      dek: "A ruler of three decades, the woman who challenged him, and political prisoners now being traded for sanctions relief.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/by/by-4-hero.webp",
          alt: "Illustration of a vast modern palace with a long colonnade and a glass dome on a wide empty square in Minsk at dusk.",
          caption: "The Palace of Independence in Minsk, Lukashenko's official residence and venue for foreign talks.",
          credit: "Illustration — not a photograph",
          prompt: "A vast modern palace with a long white colonnade and a low glass dome on a huge empty paved square at dusk, rows of lamps lit, a pink and grey sky, cold and imposing, no people close up, no flags, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Alexander Lukashenko", role: "President, since 1994",
            img: "img/by/portrait-lukashenko.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Born in 1954, a former state-farm director who has ruled for 32 years. Depends on Putin but has opened a channel to Trump's Washington. Chairs the People's Assembly, a post he can keep after the presidency." },
          { name: "Sviatlana Tsikhanouskaya", role: "Opposition leader, in exile",
            img: "img/by/portrait-tsikhanouskaya.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Ran in 2020 after her blogger husband, Siarhei Tsikhanouski, was jailed. Forced into exile in Lithuania, she moved her base to Warsaw in 2026. Her husband was freed in 2025." },
          { name: "Maria Kalesnikava", role: "Protest leader, freed in 2025",
            img: "img/by/portrait-kalesnikava.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A flautist who became a face of the 2020 protests and tore up her passport at the border to avoid expulsion. Sentenced to 11 years, she was released in the December 2025 deal." },
          { name: "Viktar Babaryka", role: "Former banker and would-be candidate",
            img: "img/by/portrait-babaryka.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Head of a Russian-owned bank who tried to run in 2020 and was jailed for 14 years before the vote. Freed in December 2025." },
          { name: "Ales Bialiatski", role: "Founder of the Viasna rights group",
            img: "img/by/portrait-bialiatski.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Won the Nobel Peace Prize in 2022 while in prison; sentenced to ten years. Freed in December 2025 as the US lifted sanctions on potash." },
          { name: "John Coale", role: "US envoy",
            img: "img/by/portrait-coale.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A lawyer and friend of Trump who has negotiated each prisoner release since 2025 in face-to-face meetings with Lukashenko in Minsk." }
        ] },
        { type: "section", head: "The ruler", md:
          "Lukashenko has outlasted every Western leader of the 1990s. His style mixes folksy populism, threats and constant bargaining: he plays Moscow and the West against each other when he can. After 2020 he lost that room, and Putin's support kept him in power. Questions about his health and succession recur; his sons hold security and sports posts, but no successor has been named." },
        { type: "section", head: "The opposition abroad", md:
          "Most opposition leaders are in prison or exile. Tsikhanouskaya leads a 'United Transitional Cabinet' from Vilnius and Warsaw, meets Western leaders and argues for sanctions until all political prisoners are free and new elections are held. Exile politics is divided, and its influence inside Belarus is hard to measure. Many released prisoners were deported straight to Lithuania or Ukraine, some against their will." },
        { type: "section", head: "Moscow's man in Minsk?", md:
          "Lukashenko has refused to send Belarusian troops into Ukraine, and he has kept Belarus a separate state despite Russian pressure to merge. But he has allowed Russian forces, missiles and the Wagner group's fighters onto his soil. After Wagner's mutiny in June 2023, he brokered a deal that sent its leader, Yevgeny Prigozhin, briefly to Belarus; Prigozhin died in a plane crash in Russia two months later." },
        { type: "section", head: "The family", md:
          "Lukashenko's sons have held important roles: Viktor, the eldest, was long a national security adviser and heads the National Olympic Committee; Nikolai, the youngest, often appears beside his father at official events. Lukashenko has said he does not want a dynasty, but Belarusians watch every hint about succession." },
        { type: "compare", head: "Two views of the prisoner deals",
          left: { head: "Supporters of engagement", md:
            "Every freed prisoner is a life saved; talking to Lukashenko may also pry him a little away from Moscow." },
          right: { head: "Sceptics", md:
            "Lukashenko arrests new people as fast as he frees others; paying for prisoners rewards hostage-taking." } }
      ],
      takeaways: [
        "Lukashenko depends on Putin but has opened talks with Trump's envoy John Coale.",
        "Sviatlana Tsikhanouskaya leads the opposition in exile, now from Warsaw as well as Vilnius.",
        "Prisoners such as Maria Kalesnikava, Viktar Babaryka and Nobel laureate Ales Bialiatski were freed in December 2025."
      ],
      check: { q: "Why did Sviatlana Tsikhanouskaya run for president in 2020?",
        choices: ["She was Lukashenko's chosen successor", "Her husband, a would-be candidate, was jailed", "She had led a party for decades"], answer: 1,
        explain: "When her husband, the blogger Siarhei Tsikhanouski, was jailed, she registered in his place and drew huge crowds." },
      sources: [
        { title: "Belarus frees 123 prisoners including Ales Bialiatski as US lifts sanctions", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/12/13/belarus-frees-123-prisoners-including-ales-bialiatski-as-us-lifts-sanctions", date: "2025-12-13" },
        { title: "Belarus opposition leader Tsikhanouskaya begins work in Warsaw", publisher: "LRT", url: "https://www.lrt.lt/en/news-in-english/19/2834388/belarus-opposition-leader-tsikhanouskaya-begins-work-in-warsaw-after-move-from-vilnius", date: "2026-02-09" },
        { title: "Alexander Lukashenko", publisher: "Britannica", url: "https://www.britannica.com/biography/Alexander-Lukashenko", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "by-5", kind: "story", asOf: "2026-10-22",
      title: "The 2020 uprising",
      dek: "A disputed election brought hundreds of thousands into the streets, led largely by women. Within a year, the protests had been crushed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/by/by-5-hero.webp",
          alt: "Illustration of a long line of women in white clothes holding flowers, seen from behind, standing along a wide city avenue facing a row of riot police in dark uniforms.",
          caption: "Women in white with flowers formed 'solidarity chains' in Minsk in August 2020.",
          credit: "Illustration — not a photograph",
          prompt: "A long line of women in white clothes holding bunches of flowers seen from behind, standing along a wide city avenue, facing a distant row of riot police in dark uniforms with shields, late summer light, peaceful and tense, no faces, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "In 2020 three rivals tried to challenge Lukashenko: the blogger Siarhei Tsikhanouski, the banker Viktar Babaryka and the diplomat Valery Tsapkala. The first two were jailed and the third fled. Three women took their place: Tsikhanouski's wife, Sviatlana; Babaryka's campaign manager, Maria Kalesnikava; and Tsapkala's wife, Veronika. Their rallies drew the biggest crowds in Belarusian history. On 9 August the official result gave Lukashenko 80% and Tsikhanouskaya 10%." },
        { type: "facts", head: "The uprising", rows: [
          ["Election", "9 August 2020"],
          ["Official result", "Lukashenko 80%, Tsikhanouskaya 10%"],
          ["Biggest marches", "Perhaps 200,000 or more in Minsk on Sundays in August"],
          ["Detained", "More than 35,000 in the first months; over 65,000 since"],
          ["Exiled", "Hundreds of thousands have left since 2020"]
        ] },
        { type: "section", head: "The crackdown", md:
          "Riot police beat and detained thousands in the first nights; released detainees described torture in jails. The brutality brought even more people onto the streets. Workers struck at state factories. Lukashenko appeared with a rifle at his palace, and Putin promised to send police if needed. Tsikhanouskaya was forced to leave for Lithuania; Kalesnikava tore up her passport rather than be expelled and was jailed for 11 years." },
        { type: "section", head: "Why it failed", md:
          "The security forces stayed loyal, and Russia backed Lukashenko with money and media support. The protests were decentralised and peaceful by design, which made them hard to crush but also hard to turn into a transfer of power. Western sanctions came slowly. By early 2021 the marches had been broken up, and the repression turned into a long purge of independent media, NGOs and anyone who had protested." },
        { type: "section", head: "Ryanair and the migrants", md:
          "In May 2021 Belarus forced a Ryanair flight between Athens and Vilnius to land in Minsk with a false bomb alert, and arrested the exiled journalist Raman Pratasevich on board. The EU banned Belarusian airlines. That summer Belarus began flying migrants from the Middle East to Minsk and pushing them toward the EU's borders ([[lesson:by-12]]), a move the EU called a 'hybrid attack'." },
        { type: "section", head: "Who protested", md:
          "The protests drew people who had never been political: doctors, IT workers, factory workers, pensioners and students. Belarus's booming tech sector, which had enjoyed special tax rules, was a centre of support, and many of its companies and workers later moved to Poland, Lithuania and Georgia. Women's marches, held every Saturday, became a symbol of the movement." },
        { type: "compare", head: "Two views of 2020",
          left: { head: "The opposition's view", md:
            "Belarusians voted Lukashenko out; he stole the election and stayed in power by force and Russian help." },
          right: { head: "The government's view", md:
            "A colour revolution organised from abroad tried to seize power, and the state defended order and sovereignty." } },
        { type: "section", head: "What's next", md:
          "No free election is in sight. The next presidential vote is due in 2030, and the opposition's hope rests on prisoner releases, a change in Russia or a split inside the regime." }
      ],
      takeaways: [
        "In 2020 three women led the challenge to Lukashenko after male rivals were jailed or forced out.",
        "After an official result of 80%, hundreds of thousands protested; tens of thousands were detained.",
        "Russian support and loyal security forces kept Lukashenko in power."
      ],
      check: { q: "What did Belarus do in May 2021 that led the EU to ban its airlines?",
        choices: ["Shot down a plane", "Forced a Ryanair flight to land to arrest a journalist", "Closed its airspace"], answer: 1,
        explain: "It diverted a Ryanair flight to Minsk with a false bomb alert and arrested Raman Pratasevich on board." },
      sources: [
        { title: "2020–2021 Belarusian protests", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2020%E2%80%932021_Belarusian_protests", date: "n.d." },
        { title: "Belarus' Lukashenko secures seventh term in widely condemned election", publisher: "To Vima", url: "https://tovima.com/world/belarus-lukashenko-secures-seventh-term-in-widely-condemned-election", date: "2025-01" },
        { title: "Belarus: History", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Belarus", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "by-6", kind: "story", asOf: "2026-10-22",
      title: "Russia's forward base",
      dek: "Russian tanks rolled from Belarus toward Kyiv in 2022. Now Russia says its nuclear-capable missiles are based there too.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/by/by-6-hero.webp",
          alt: "Illustration of a column of large military missile launcher trucks driving along a forest road through pine trees on a cold grey morning.",
          caption: "Russia said in December 2025 that its Oreshnik missile system was on duty in Belarus.",
          credit: "Illustration — not a photograph",
          prompt: "A column of large green military missile launcher trucks with long covered tubes driving along a straight road through dark pine forest on a cold grey morning, mist between the trees, ominous and quiet, no people visible, no markings, no legible text." },
        { type: "section", head: "What happened", md:
          "In February 2022 tens of thousands of Russian troops who had come to Belarus for 'exercises' crossed into [[unit:ua|Ukraine]] and drove south toward Kyiv, the shortest route to the capital. Belarusian airfields launched Russian jets and missiles. The assault on Kyiv failed and Russian forces withdrew in early April, but Belarus remained a staging ground and a threat that tied down Ukrainian troops on the northern border." },
        { type: "section", head: "Nuclear weapons", md:
          "In 2023 Putin announced that Russia would station tactical nuclear weapons in Belarus, the first such move outside Russia since the Soviet collapse. Lukashenko later said the weapons had arrived and that there were 'dozens'. Independent monitors say there is no public evidence that warheads are there, though storage sites have been prepared. In December 2025 Russia said its new Oreshnik intermediate-range missile, which can carry nuclear or conventional warheads, was on combat duty in Belarus." },
        { type: "facts", head: "Russia's military footprint", rows: [
          ["2022", "Invasion route toward Kyiv"],
          ["2023", "Tactical nuclear weapons announced; Wagner fighters arrive briefly"],
          ["December 2025", "Oreshnik missile declared on duty"],
          ["Control", "Russian; Belarus has no say over use"],
          ["Exercises", "Zapad, held jointly near NATO's borders"]
        ] },
        { type: "section", head: "Why Moscow wants it", md:
          "Belarus extends Russia's reach several hundred kilometres west, to the edge of [[unit:pl|Poland]] and Lithuania. Missiles there can reach most of central Europe within minutes. Russian analysts present the deployments as a response to NATO's growth and to US plans to station long-range missiles in [[unit:de|Germany]]. For Lukashenko, the weapons are a sign of importance and a security guarantee." },
        { type: "section", head: "NATO's response", md:
          "Poland, Lithuania and Latvia have reinforced their borders, built fences and trenches, and planned for a possible attack through the Suwałki Gap, the 65-kilometre strip of Polish and Lithuanian land between Belarus and Russia's Kaliningrad exclave. During the Zapad exercises of September 2025, Poland sealed its border with Belarus completely. Germany has stationed a brigade in Lithuania, its first permanent foreign deployment since 1945." },
        { type: "section", head: "Wagner's brief stay", md:
          "After Wagner's failed mutiny in June 2023, Lukashenko brokered a deal under which its leader, Yevgeny Prigozhin, and some of his fighters went to Belarus. A camp was built near Asipovichy, and Wagner instructors trained Belarusian troops. After Prigozhin died in a plane crash near Moscow that August, most of the fighters left, many for Africa." },
        { type: "section", head: "Belarus's own army", md:
          "Belarus has an army of about 50,000 active troops, with old Soviet equipment and new Russian weapons. Lukashenko has kept it out of the war in Ukraine, saying Belarusians would only fight if attacked, and analysts doubt it would be reliable in an offensive war." },
        { type: "compare", head: "Two views of the deployments",
          left: { head: "Minsk and Moscow", md:
            "The weapons are defensive: they deter NATO from attacking the Union State and protect Belarus's sovereignty." },
          right: { head: "NATO's eastern members", md:
            "They are an escalation that turns Belarus into a launch pad and ends any pretence of its neutrality." } },
        { type: "section", head: "What's next", md:
          "The number of Oreshnik launchers in Belarus is expected to grow; Lukashenko has said up to ten. Whether Belarusian troops would ever join a Russian war remains the most important unknown." }
      ],
      takeaways: [
        "Russian troops invaded Ukraine from Belarus in February 2022.",
        "Russia says it has stationed tactical nuclear weapons and Oreshnik missiles in Belarus, under Russian control.",
        "NATO's eastern members have fortified their borders, especially around the Suwałki Gap."
      ],
      check: { q: "What is the Suwałki Gap?",
        choices: ["A pass in the Carpathians", "The strip of land between Belarus and Russia's Kaliningrad exclave", "A Belarusian missile base"], answer: 1,
        explain: "It is the roughly 65-kilometre Polish–Lithuanian border area between Belarus and Kaliningrad, seen as NATO's weak point." },
      sources: [
        { title: "Russia deploys Oreshnik missile system in Belarus", publisher: "Novaya Gazeta Europe", url: "https://novayagazeta.eu/en/articles/2025/12/30/russia-deploys-oreshnik-missile-system-in-belarus-en-news", date: "2025-12-30" },
        { title: "Russia's nuclear-capable Oreshnik missiles have entered active service", publisher: "Gulf News", url: "https://gulfnews.com/world/europe/russia-s-nuclear-capable-oreshnik-missiles-have-entered-active-service-moscow-says-1.500394259", date: "2025-12" },
        { title: "The Belarusian nuclear myth", publisher: "iSANS", url: "https://isans.org/wp-content/uploads/2025/12/belarusian-nuclear-myth-2.pdf", date: "2025-12" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "by-7", kind: "story", asOf: "2026-10-22",
      title: "Prisoners for sanctions",
      dek: "Since 2025 Lukashenko has freed hundreds of political prisoners in deals with Washington, which has lifted sanctions on potash, banks and the national airline.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/by/by-7-hero.webp",
          alt: "Illustration of a minibus stopped at a forest border crossing at dawn, with a few people carrying small bags walking toward a barrier, seen from behind.",
          caption: "Many freed prisoners were driven straight to the Lithuanian border.",
          credit: "Illustration — not a photograph",
          prompt: "A white minibus stopped at a remote forest border crossing at dawn, a raised striped barrier, a few people carrying small bags walking toward it seen from behind, pine trees and mist, a mix of relief and uncertainty, no faces, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "In 2025 the Trump administration opened direct talks with Lukashenko. Its envoy, John Coale, flew to Minsk several times. In September 2025 Belarus freed 52 prisoners and Washington eased sanctions on the airline Belavia. In December 2025 it freed 123, including Nobel laureate Ales Bialiatski and protest leader Maria Kalesnikava, in return for lifting US sanctions on Belarus's potash fertiliser. In March 2026 250 more were freed, and in September 2026 another 25." },
        { type: "facts", head: "The deals", rows: [
          ["September 2025", "52 freed; relief for Belavia"],
          ["December 2025", "123 freed; US sanctions on potash lifted"],
          ["March 2026", "250 freed; relief for part of the banking sector"],
          ["September 2026", "25 freed; two state firms delisted, frozen assets returned"],
          ["Still held", "More than 800, the EU says"]
        ] },
        { type: "section", head: "What each side gets", md:
          "Lukashenko gets money and recognition: potash is one of Belarus's biggest exports, and US sanctions had forced it to ship through Russia. US officials have talked of reopening the embassy in Minsk, closed since 2022, and of a Lukashenko visit; Trump said in March 2026 he planned to meet him. Washington gets freed prisoners, including some US citizens, and perhaps a channel to Moscow. Some officials also hope to draw Minsk slightly away from Russia." },
        { type: "section", head: "Europe's dilemma", md:
          "The EU has kept its own sanctions, which are broader, and says they will stay until all political prisoners are freed and repression ends. Lithuania and Poland, which host most of the exiles and have suffered Belarus's border pressure, are especially wary. US envoys have urged Vilnius and Minsk to improve ties, but Lithuania has kept its ban, in force since 2022, on Belarusian potash passing through its port of Klaipėda." },
        { type: "section", head: "The revolving door", md:
          "Rights groups say arrests have continued even as prisoners are freed. Before the March 2026 release, the rights group Viasna counted more than 1,100 political prisoners; after it, still well over 800. Many of those freed were expelled from the country, not allowed home. Some, such as Kalesnikava, have called for a total amnesty and new elections." },
        { type: "section", head: "Who was freed", md:
          "Those freed include well-known figures such as Bialiatski, Kalesnikava, Babaryka and Tsikhanouski, but also journalists, lawyers, priests and ordinary protesters, along with a number of foreign citizens. Several said they had been held in isolation for years without contact with families or lawyers, and some were in poor health." },
        { type: "compare", head: "Two views of the deals",
          left: { head: "Washington's view", md:
            "Quiet diplomacy has freed more prisoners in a year than sanctions did in five, at small cost to US interests." },
          right: { head: "Critics' view", md:
            "Each release buys Lukashenko relief while repression continues; the deals turn political prisoners into currency." } },
        { type: "section", head: "What's next", md:
          "More releases are expected. The question is whether the US goes further, toward lifting sanctions on Belarus's main state industries or recognising Lukashenko, and whether the EU follows." }
      ],
      takeaways: [
        "Since September 2025 Belarus has freed more than 450 political prisoners in four deals with the US.",
        "In return the US lifted sanctions on Belavia, potash, part of the banking sector and some state firms.",
        "The EU keeps its sanctions; more than 800 political prisoners are still held."
      ],
      check: { q: "What did the US lift in return for the December 2025 release?",
        choices: ["Sanctions on Belarusian potash", "Its embassy closure", "The ban on Russian oil"], answer: 0,
        explain: "The US lifted sanctions on Belarus's potash fertiliser exports when 123 prisoners, including Bialiatski, were freed." },
      sources: [
        { title: "Belarus frees 52 political prisoners after US mediation", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/9/11/belarus-frees-52-political-prisoners-after-us-mediation", date: "2025-09-11" },
        { title: "Belarus releases 250 political prisoners in a deal with the US to lift some sanctions", publisher: "Courthouse News / AP", url: "https://www.courthousenews.com/belarus-releases-250-political-prisoners-in-a-deal-with-the-us-to-lift-some-sanctions/", date: "2026-03" },
        { title: "Trump envoy secures release of 25 Belarus prisoners as U.S. drops more sanctions", publisher: "NBC News", url: "https://www.nbcnews.com/world/europe/belarus-frees-25-prisoners-return-easing-us-sanctions-rcna598083", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "by-12", kind: "spotlight", asOf: "2026-10-22",
      title: "Migrants, balloons and a border war",
      dek: "Belarus has pressed on the EU's eastern border with migrants, smuggling balloons and closed crossings, a campaign its neighbours call hybrid warfare.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/by/by-12-hero.webp",
          alt: "Illustration of a tall steel border fence topped with razor wire running through a pine forest at night, with a few small balloons drifting overhead against the moon.",
          caption: "Poland and Lithuania have built fences along their borders with Belarus; balloons have repeatedly shut Vilnius airport.",
          credit: "Illustration — not a photograph",
          prompt: "A tall steel border fence topped with coiled razor wire running straight through a dark pine forest at night, a few small pale balloons drifting overhead against a bright moon, cold blue light, tense and eerie, no people close up, no flags, no legible text." },
        { type: "facts", head: "The border pressure", rows: [
          ["2021", "Migrants flown to Minsk and pushed toward Poland, Lithuania and Latvia"],
          ["2022", "Poland finishes a 5.5-metre steel fence"],
          ["October 2025", "Lithuania closes crossings over smuggling balloons"],
          ["2025–26", "Belarus holds hundreds of Lithuanian trucks for months"],
          ["November 2025", "Poland reopens two crossings closed since 2021 and 2023"]
        ] },
        { type: "section", head: "The migrants", md:
          "In 2021, after the EU imposed sanctions over the stolen election, Belarus eased visas for people from Iraq, Syria and Afghanistan, flew thousands to Minsk and helped them toward the borders of [[unit:pl|Poland]], Lithuania and Latvia. Border guards pushed many back; some died of cold in the forests. The EU called it a 'hybrid attack' using people as weapons. Poland built a tall steel fence and later suspended the right to claim asylum at the border; crossing attempts continue." },
        { type: "section", head: "The balloons", md:
          "Since 2025, weather balloons carrying smuggled cigarettes have floated from Belarus into Lithuania by the hundreds, repeatedly forcing Vilnius airport to close. Lithuania says Minsk tolerates or encourages it and called it 'a hybrid attack'. In October 2025 it closed its main crossings for weeks. Belarus responded by holding hundreds of Lithuanian trucks inside the country, releasing them only in March 2026." },
        { type: "section", head: "Drones and sabotage", md:
          "Russian drones attacking Ukraine have strayed, or been sent, into Polish, Lithuanian and Latvian airspace from Belarus, and in September 2025 NATO jets shot some down over Poland. Belarus has also been linked to sabotage plots and espionage in its neighbours. Lukashenko denies hostile intent and says the West is the aggressor." },
        { type: "section", head: "Open and shut", md:
          "The neighbours face a dilemma. Closing the border hurts their own truckers and traders and the many Belarusians with family abroad; keeping it open invites pressure. Poland reopened two crossings in November 2025 and more than half a million people used them in six months, while warning it would shut them again if needed." },
        { type: "section", head: "The human cost", md:
          "At least dozens of migrants have died in the forests and swamps along the Polish and Lithuanian borders since 2021, according to rights groups, from cold, exhaustion or drowning. Aid workers in Poland have been prosecuted for helping them, though some were acquitted. The border zone has been closed to journalists at times, making the situation hard to monitor." },
        { type: "compare", head: "Two views of the border",
          left: { head: "Poland and Lithuania", md:
            "Belarus is waging a deliberate campaign to destabilise the EU; strong borders and quick closures are self-defence." },
          right: { head: "Minsk", md:
            "Belarus is not the EU's border guard; Western sanctions and closures hurt ordinary people and cause the problems." } },
        { type: "section", head: "Why it matters", md:
          "Belarus's border has become a test of how democracies respond to pressure that falls short of war, and of how far human rights at the border can be limited in the name of security. The answers chosen in Warsaw and Vilnius are being copied elsewhere in Europe." }
      ],
      takeaways: [
        "In 2021 Belarus flew migrants to Minsk and pushed them toward the EU's borders; Poland built a steel fence.",
        "Smuggling balloons from Belarus repeatedly closed Vilnius airport in 2025–26, and Lithuania shut its crossings.",
        "The EU calls it hybrid warfare; Minsk blames Western sanctions."
      ],
      check: { q: "Why did Lithuania close its border crossings with Belarus in October 2025?",
        choices: ["A flood", "Smuggling balloons that disrupted Vilnius airport", "A trade dispute over potash"], answer: 1,
        explain: "Hundreds of balloons carrying smuggled cigarettes repeatedly forced Vilnius airport to close; Lithuania called it a hybrid attack." },
      sources: [
        { title: "Balloons from Belarus disrupt Lithuanian airport for 2 successive nights", publisher: "NBC News", url: "https://www.nbcnews.com/world/europe/balloons-belarus-disrupt-lithuanian-airport-rcna239833", date: "2025-10" },
        { title: "Lithuania closes border with Belarus over repeated balloon incursions", publisher: "The Moscow Times", url: "https://www.themoscowtimes.com/2026/08/02/lithuania-closes-border-with-belarus-over-repeated-balloon-incursions", date: "2026-08-02" },
        { title: "Poland reopens two key border crossings with Belarus", publisher: "Polskie Radio", url: "https://www.polskieradio.pl/395/7785/Artykul/3608375,poland-reopens-two-key-border-crossings-with-belarus", date: "2025-11" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "by-8", kind: "now", asOf: "2026-10-22",
      title: "Where things stand",
      dek: "A dictatorship that is freeing some prisoners, hosting Russian missiles and slowly reopening to Washington while the EU keeps its distance.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/by/by-8-hero.webp",
          alt: "Illustration of a modern glass skyline across a river in Minsk at dusk, with an old church on the near bank and a quiet embankment.",
          caption: "Minsk, a city of about two million, at dusk.",
          credit: "Illustration — not a photograph",
          prompt: "A modern glass and concrete skyline across a calm river at dusk, an old white church with a small dome on the near bank, a quiet tree-lined embankment with lamps, a violet sky, still and uncertain, no people close up, no flags, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Power:** Lukashenko re-elected in January 2025 for a seventh term; no opposition allowed.\n" +
          "- **Prisoners:** more than 450 freed since September 2025; more than 800 still held.\n" +
          "- **US:** sanctions on Belavia, potash and some banks and firms lifted; talk of reopening the embassy.\n" +
          "- **EU:** sanctions remain; borders with Poland and Lithuania tense.\n" +
          "- **Russia:** Oreshnik missiles and, it says, nuclear weapons stationed in Belarus." },
        { type: "section", head: "Belarus in the world", md:
          "Belarus's foreign policy runs through [[unit:ru|Russia]], its patron, and increasingly [[unit:cn|China]], which has invested in an industrial park near Minsk and joined Belarus to the Shanghai Cooperation Organisation in 2024. Its relations with [[unit:ua|Ukraine]] are hostile; with [[unit:pl|Poland]] and the Baltic states, confrontational. The opening to the [[unit:us|United States]] is the only real change since 2020." },
        { type: "section", head: "The economy", md:
          "Growth has slowed to about 1% as Russia's economy cools. Belarus earns money supplying Russia's war economy with trucks, optics and machinery, and its refineries process Russian oil. Labour shortages, caused by emigration, are severe. Lifting US sanctions on potash helps, but without EU markets and Lithuania's ports the gains are limited." },
        { type: "section", head: "Society", md:
          "Fear keeps most Belarusians quiet. Exiles estimate several hundred thousand people have left since 2020. Inside, the state promotes Russian language and a Soviet-style memory; Belarusian-language culture survives mainly in private and abroad. Surveys conducted from abroad suggest many Belarusians want neither war nor union with Russia, but they are hard to verify." },
        { type: "section", head: "Three scenarios", md:
          "- **Managed thaw.** More releases, more US relief and a cautious opening, with Lukashenko firmly in charge and Russia's forces still present.\n" +
          "- **Deeper absorption.** A weakening Lukashenko or a Russian push brings Belarus closer to merger with Russia.\n" +
          "- **Transition.** A health crisis or succession fight opens the system, and the exiled opposition finds a way back in." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Late 2026:** a possible Trump–Lukashenko meeting and further prisoner releases\n" +
          "- **Ongoing:** Lithuanian and Polish border closures\n" +
          "- **2027:** the next Zapad-style exercise cycle with Russia\n" +
          "- **2030:** the next presidential election" },
        { type: "section", head: "Connections", md:
          "Belarus's story runs through [[unit:ru]] (its patron and the missiles), [[unit:ua]] (the 2022 invasion route), [[unit:pl]] (the border, the fence and the exiles), [[unit:us]] (the prisoner deals) and [[unit:cn]] (investment and the SCO)." },
        { type: "section", head: "What the opposition wants now", md:
          "The exiled opposition welcomes each release but warns against ending sanctions while repression continues. It argues that Belarus is effectively under Russian occupation, and asks Western governments to keep supporting independent media and to help the hundreds of thousands of exiles, many of whom face expiring passports, which Belarusian embassies no longer renew abroad." },
        { type: "section", head: "Lukashenko's next move", md:
          "Lukashenko wants more: the lifting of sanctions on state companies, the return of the US embassy and a meeting with Trump. He also wants the EU to talk to him, which most European governments refuse while political prisoners remain." }
      ],
      takeaways: [
        "Lukashenko remains in full control, and more than 800 political prisoners are still held.",
        "US sanctions relief in exchange for prisoners is the only real thaw since 2020.",
        "Russia's missiles and the tense EU border keep Belarus at the centre of European security."
      ],
      check: { q: "Which organisation did Belarus join in 2024?",
        choices: ["NATO", "The Shanghai Cooperation Organisation", "The EU"], answer: 1,
        explain: "Belarus became a full member of the China- and Russia-led Shanghai Cooperation Organisation in July 2024." },
      sources: [
        { title: "Belarus frees 25 political prisoners in return for US sanctions relief", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/16/belarus-frees-25-political-prisoners-in-return-for-us-sanctions-relief", date: "2026-09-16" },
        { title: "Belarus' GDP growth expected near 1% in 2026", publisher: "Reform.news", url: "https://reform.news/en/belarus-gdp-growth-expected-near-1-in-2026-macroby", date: "2026" },
        { title: "Trump envoy says US seeks improved Belarus–Lithuania ties as Minsk releases more prisoners", publisher: "LRT", url: "https://www.lrt.lt/en/news-in-english/19/2872355/trump-envoy-says-us-seeks-improved-belarus-lithuania-ties-as-minsk-releases-more-prisoners", date: "2026-03-19" }
      ]
    }
  ]
});
