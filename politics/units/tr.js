/* ============================================================
   Unit 11 — Turkey 🇹🇷
   Research note and sources: tools/research/tr.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("tr", {
  id: "tr",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "tr-1", kind: "snapshot", asOf: "2026-09-28",
      title: "Turkey in brief",
      dek: "A NATO member between Europe and the Middle East, ruled for over two decades by one man, whose main rival is on trial.",
      blocks: [
        { type: "map", src: "maps/tr.svg",
          alt: "Locator map of the eastern Mediterranean and Black Sea region with Turkey highlighted, spanning from south-east Europe across Anatolia to borders with Georgia, Armenia, Iran, Iraq and Syria, with a small globe showing its place in the world.",
          caption: "Turkey straddles Europe and Asia and controls the straits linking the Black Sea to the Mediterranean.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Ankara (largest city: Istanbul)"],
          ["People", "About 86 million"],
          ["System", "Presidential republic since 2018"],
          ["President", "Recep Tayyip Erdoğan, in power since 2003 (as PM, then president)"],
          ["Ruling alliance", "Erdoğan's AKP and the nationalist MHP"],
          ["Main opposition", "Republican People's Party (CHP), led by Özgür Özel"],
          ["Next elections", "Due by May 2028"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Turkey sits where Europe, Russia and the Middle East meet. It has [[NATO]]'s second-largest army, controls the Bosphorus and Dardanelles straits between the Black Sea and the Mediterranean, and borders Syria, Iraq and Iran. It hosts millions of refugees, most of them Syrian, and its drones and diplomats shape conflicts from [[unit:ua|Ukraine]] to Libya.\n\n" +
          "Few countries talk to everyone as Turkey does: it is in NATO but buys Russian air-defence missiles, it backs Ukraine but trades with [[unit:ru|Russia]], and it has hosted talks between both." },
        { type: "section", head: "Who holds power", md:
          "Recep Tayyip Erdoğan has led Turkey since 2003, first as prime minister and, since 2014, as president. A 2017 referendum gave the presidency sweeping powers: he appoints ministers and many senior judges, rules by decree in many areas, and leads his Justice and Development Party (AKP). He governs with the nationalist MHP of Devlet Bahçeli.\n\n" +
          "His main rival, Ekrem İmamoğlu, the elected mayor of Istanbul, has been in jail since March 2025 and is on trial on corruption charges he says are political." },
        { type: "section", head: "The mood in 2026", md:
          "Turks have lived through years of very high inflation, which peaked above 85% in 2022 and was still 31.5% in August 2026. Many families feel much poorer than a decade ago. The opposition won the 2024 local elections, but since then prosecutors have jailed or removed dozens of its mayors. At the same time, a peace process with the Kurdish militant group, the [[PKK]], has raised hopes of ending a conflict that has killed some 40,000 people since 1984." },
        { type: "section", head: "A divided society", md:
          "Turkish politics runs along old fault lines: religious conservatives against secularists, Turkish nationalists against Kurdish movements, the booming west coast against the poorer interior and east. Erdoğan's base is strongest in Anatolian towns and among pious voters; the opposition wins the big coastal cities and, since 2019, Istanbul and Ankara." },
        { type: "section", head: "What Turkey wants", md:
          "Erdoğan's government wants a stronger, more independent Turkey: a regional power with its own arms industry, a big voice in Syria, the Caucasus and the Gaza settlement, and a seat at every table. At home, it wants to bring inflation down without a recession, end the PKK conflict, and, critics say, keep Erdoğan in power beyond his current term with a new constitution." },
        { type: "callout", tone: "why", md:
          "Turkey is a test of whether elections can still change governments when the courts, the media and the security services are closely aligned with the ruling party. The İmamoğlu trial is where that question is being fought out." }
      ],
      takeaways: [
        "Turkey is a NATO power that controls the straits between the Black Sea and the Mediterranean.",
        "Erdoğan has led the country since 2003 and holds sweeping powers as president.",
        "His main rival, Istanbul's mayor Ekrem İmamoğlu, has been jailed since March 2025."
      ],
      check: { q: "Who has led Turkey since 2003?",
        choices: ["Ekrem İmamoğlu", "Recep Tayyip Erdoğan", "Devlet Bahçeli"], answer: 1,
        explain: "Erdoğan was prime minister from 2003 and has been president since 2014. Bahçeli leads his nationalist ally, the MHP." },
      sources: [
        { title: "World Report 2026: Türkiye", publisher: "Human Rights Watch", url: "https://www.hrw.org/world-report/2026/country-chapters/turkiye", date: "2026" },
        { title: "Turkey Inflation Rate", publisher: "Trading Economics", url: "https://tradingeconomics.com/turkey/inflation-cpi", date: "2026-09" },
        { title: "Türkiye: Leading Opponent of Erdoğan on Trial", publisher: "Human Rights Watch", url: "https://www.hrw.org/news/2026/03/03/turkiye-leading-opponent-of-erdogan-on-trial", date: "2026-03-03" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "tr-2", kind: "power", asOf: "2026-09-28",
      title: "The presidential system",
      dek: "Since 2018 almost all executive power has sat with one office, and one man.",
      blocks: [
        { type: "diagram", src: "img/tr/tr-2-power.svg",
          alt: "Diagram of power in Turkey. Voters elect the president and 600 MPs. The president, Recep Tayyip Erdoğan, is head of state and government, rules by decree, appoints ministers and names many senior judges. He outweighs the 600-seat Grand National Assembly, where the AKP and MHP hold a majority and which can call early elections by three-fifths. Power is shaped by courts and prosecutors, seen as politically aligned, who bring cases against opposition mayors. It is resisted by opposition-run cities: the CHP won most big cities in 2024, and many of its mayors have been jailed or removed. Next elections are due by May 2028.",
          caption: "The 2017 referendum abolished the prime minister's office and concentrated executive power in the presidency.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "From parliament to president", md:
          "For most of its history the Turkish Republic was a parliamentary system, with a prime minister accountable to parliament and a mostly ceremonial president. In April 2017 voters narrowly approved, by 51.4%, a constitutional change creating an executive presidency. It took effect after the 2018 election. The office of prime minister was abolished, and the president became both head of state and head of government." },
        { type: "section", head: "The president's powers", md:
          "The president appoints and dismisses ministers, who no longer need to be MPs, issues decrees with the force of law in many areas, prepares the budget, can dissolve parliament (which also triggers a new presidential election) and appoints many members of the top courts and of the council that appoints judges and prosecutors. The president can also remain leader of a political party, which Erdoğan does." },
        { type: "section", head: "Parliament", md:
          "The Grand National Assembly has 600 members elected by proportional representation. Erdoğan's AKP and its ally, the MHP, hold a majority, but not the three-fifths (360 seats) needed to call an early election or send a constitutional change to a referendum by themselves. That number matters, as briefing 8 explains, because an early election called by parliament is the one route by which Erdoğan could run again." },
        { type: "section", head: "Courts and media", md:
          "Since a failed coup attempt in July 2016, which the government blamed on followers of the cleric Fethullah Gülen, more than 100,000 public employees, including thousands of judges and prosecutors, have been dismissed. Critics, including the European Court of Human Rights, say the judiciary is no longer independent. Most mainstream media are owned by businesses close to the government, and independent journalists regularly face prosecution." },
        { type: "section", head: "Elections still matter", md:
          "Yet Turkey is not a closed system. Elections are competitive and turnout is high: nearly 90% in 2023. The opposition won Istanbul and Ankara in 2019, and in 2024 it won the national vote in local elections for the first time since 1977. That is why the government's opponents see the prosecution of opposition mayors as a turning point." },
        { type: "section", head: "Local government", md:
          "Turkey's 81 provinces are run by governors appointed by the interior ministry, alongside elected mayors. In the Kurdish-majority south-east, the government has repeatedly removed elected pro-Kurdish mayors and replaced them with appointed trustees, a practice it has since extended to some CHP-run districts. Mayors of big cities control large budgets and jobs, which is one reason they are such important political prizes." },
        { type: "compare", head: "Two views of the system",
          left: { head: "The government's view", md:
            "The presidential system ended the weak coalitions of the 1990s and gave Turkey decisive leadership. Voters approved it, and they choose the president directly." },
          right: { head: "Critics' view", md:
            "It removed the checks on one man. With the courts, media and security services aligned with the president, elections are no longer fought on a level field." } }
      ],
      takeaways: [
        "A 2017 referendum created an executive presidency and abolished the prime minister's office.",
        "The president appoints ministers and many senior judges and can rule by decree in many areas.",
        "Elections remain competitive: the opposition won the 2024 local elections nationwide."
      ],
      check: { q: "What did Turkey's 2017 referendum do?",
        choices: ["Abolished the presidency", "Created an executive presidency and abolished the prime minister's office", "Took Turkey out of NATO"], answer: 1,
        explain: "Approved by 51.4%, the change made the president head of both state and government from 2018." },
      sources: [
        { title: "World Report 2026: Türkiye", publisher: "Human Rights Watch", url: "https://www.hrw.org/world-report/2026/country-chapters/turkiye", date: "2026" },
        { title: "Turkey enters new era, same strongman after Erdogan election triumph", publisher: "Euronews", url: "https://www.euronews.com/2018/06/25/turkey-enters-new-era-same-strongman-after-erdogan-election-triumph-n886261", date: "2018-06-25" },
        { title: "In Turkey, president pledges to replace constitution during his third term in office", publisher: "ConstitutionNet", url: "https://constitutionnet.org/news/turkey-president-pledges-replace-constitution-during-his-third-term-office", date: "2023" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "tr-3", kind: "history", asOf: "2026-09-28",
      title: "Atatürk's republic and Erdoğan's",
      dek: "From a secular republic guarded by generals to the rise of a religious conservative who reshaped the state.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr/tr-3-hero.webp",
          alt: "Illustration of Istanbul's skyline at dusk seen across the Bosphorus, with domes and minarets and a long suspension bridge lit up.",
          caption: "Istanbul, the former Ottoman capital and Turkey's largest city, sits on both sides of the Bosphorus.",
          credit: "AI illustration — not a photograph",
          prompt: "Istanbul's historic skyline at dusk seen from across the Bosphorus strait, silhouettes of great domes and slender minarets, a long suspension bridge glowing with lights, ferries crossing, purple and gold sky, timeless and grand, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1923", "Mustafa Kemal Atatürk founds the Turkish Republic"],
          ["1952", "Turkey joins NATO"],
          ["1960–1997", "The army intervenes against governments four times"],
          ["2002", "Erdoğan's AKP wins its first election"],
          ["2016", "A failed coup attempt; mass purges follow"],
          ["2017–18", "Executive presidency approved and introduced"],
          ["2023", "Erdoğan re-elected after a deadly earthquake"]
        ] },
        { type: "section", head: "1. Atatürk's republic", md:
          "The Ottoman Empire collapsed after the First World War. Mustafa Kemal, later called Atatürk, led the fight against occupying powers and in 1923 founded a republic on the empire's Anatolian heartland. He modernised the country at speed: he abolished the caliphate, replaced Islamic law and the Arabic script, gave women the vote and made the state strictly secular. His legacy, Kemalism, defined the Turkish state for most of the century." },
        { type: "section", head: "2. The generals' guardianship", md:
          "Turkey joined [[NATO]] in 1952 and became a front-line state in the [[Cold War]]. Its army saw itself as the guardian of Atatürk's secular order and removed or pressured elected governments in 1960, 1971, 1980 and 1997. Kurdish demands for rights met repression, and in 1984 the PKK began an armed insurgency. The 1990s brought weak coalitions, financial crises and high inflation." },
        { type: "section", head: "3. Erdoğan's rise (2002–2013)", md:
          "Erdoğan, a former mayor of Istanbul from a religious background, founded the AKP in 2001, and it won the 2002 election after a severe financial crash. His early years brought fast growth, a rising middle class, health reforms and EU membership talks, which began in 2005. He curbed the army's political role, winning praise from liberals abroad. But the 2013 Gezi Park protests, against the redevelopment of an Istanbul park, were met with a harsh crackdown and marked a turn." },
        { type: "section", head: "4. Coup and consolidation (2016–2018)", md:
          "On the night of 15 July 2016, a faction of the army tried to seize power; about 250 people were killed before the attempt collapsed. The government blamed the movement of Fethullah Gülen, a cleric once allied with Erdoğan, and launched a sweeping purge under a two-year state of emergency. In 2017 voters narrowly approved the executive presidency, and Erdoğan won the first election under it in 2018." },
        { type: "section", head: "The economy's roller coaster", md:
          "Erdoğan's first decade brought fast growth, fuelled by credit and construction. From 2018 the lira began to slide, and Erdoğan pressed the central bank to cut interest rates even as prices rose, arguing, against standard economics, that high rates cause inflation. He replaced several central bank governors. Inflation soared, peaking above 85% in October 2022, eroding savings and wages." },
        { type: "section", head: "5. Earthquake and re-election (2023)", md:
          "On 6 February 2023 earthquakes in the south-east killed more than 50,000 people in Turkey, and critics blamed poor enforcement of building rules. Three months later the opposition united behind Kemal Kılıçdaroğlu, and many expected Erdoğan to lose. Instead he won the run-off with 52.2%. The opposition regrouped: a new CHP leader, Özgür Özel, took over, and the party won the 2024 local elections." }
      ],
      takeaways: [
        "Atatürk founded a secular republic in 1923; the army acted as its guardian through repeated coups.",
        "Erdoğan's AKP has governed since 2002, first bringing growth and EU talks, then a harder line after 2013.",
        "A failed 2016 coup led to mass purges and the executive presidency; Erdoğan was re-elected in 2023."
      ],
      check: { q: "What happened on 15 July 2016?",
        choices: ["Turkey joined the EU", "A faction of the army attempted a coup, which failed", "The PKK dissolved"], answer: 1,
        explain: "The coup attempt collapsed overnight after about 250 people were killed. The government blamed the Gülen movement and launched mass purges." },
      sources: [
        { title: "Turkey profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-europe-17994865", date: "n.d." },
        { title: "World Report 2026: Türkiye", publisher: "Human Rights Watch", url: "https://www.hrw.org/world-report/2026/country-chapters/turkiye", date: "2026" },
        { title: "Erdoğan's Kurdish Initiative & the Logic Behind Arresting His Opponent", publisher: "Just Security", url: "https://www.justsecurity.org/110693/turkey-erdogan-kurds-peace-imamoglu/", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "tr-4", kind: "players", asOf: "2026-09-28",
      title: "Erdoğan and his challengers",
      dek: "A president seeking another term, his nationalist ally, and an opposition whose best-known leader is in a prison courtroom.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr/tr-4-hero.webp",
          alt: "Illustration of a vast modern presidential palace complex on a hill outside Ankara at dusk, with long lit colonnades.",
          caption: "The presidential complex in Ankara, completed in 2014, has over 1,000 rooms.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast modern palace complex with long lit colonnades on a low hill at dusk, wide ceremonial stairs, landscaped gardens, a city skyline far away, deep blue sky, imposing and grand, no people close up, no flags or legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Recep Tayyip Erdoğan", role: "President, since 2014; AKP leader",
            img: "img/tr/portrait-erdogan.webp", source: "Official photo (tccb.gov.tr) via Wikimedia Commons; confirm the licence.",
            md: "Turkey's most powerful leader since Atatürk, 72, and the dominant figure of its politics for a generation. His current term ends in 2028; his advisers say he could run again if parliament calls an early election." },
          { name: "Devlet Bahçeli", role: "Leader of the MHP",
            img: "img/tr/portrait-bahceli.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "The veteran nationalist leader whose party keeps Erdoğan's majority. Surprised everyone in October 2024 by calling on the jailed PKK founder to end the insurgency, starting the peace process." },
          { name: "Ekrem İmamoğlu", role: "Mayor of Istanbul (jailed); CHP presidential candidate",
            img: "img/tr/portrait-imamoglu.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Won Istanbul in 2019 and 2024, and was chosen as the CHP's presidential candidate days after his arrest in March 2025. On trial with over 400 co-defendants; prosecutors seek more than 2,000 years in prison." },
          { name: "Özgür Özel", role: "CHP leader, since November 2023",
            img: "img/tr/portrait-ozel.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Led the opposition to victory in the 2024 local elections and has kept up weekly rallies since İmamoğlu's arrest." },
          { name: "Mansur Yavaş", role: "Mayor of Ankara (CHP)",
            img: "img/tr/portrait-yavas.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A popular former nationalist who won the capital twice. Often named as an alternative opposition candidate if İmamoğlu is barred." },
          { name: "Abdullah Öcalan", role: "Jailed founder of the PKK",
            img: "img/tr/portrait-ocalan.webp", source: "Public domain or CC-licensed photo via Wikimedia Commons; confirm the licence.",
            md: "Imprisoned on an island since 1999. In February 2025 he called on the PKK to lay down its arms and disband, which it announced in May 2025." }
        ] },
        { type: "section", head: "The opposition", md:
          "The CHP, founded by Atatürk himself, is Turkey's oldest party and the main opposition. It won 37.8% in the 2024 local elections against the AKP's 35.5%, its first nationwide win in nearly half a century, and now runs most of Turkey's big cities. Since then, dozens of its mayors have been detained on corruption or terrorism charges, which the party calls a campaign to break it before the next election. The pro-Kurdish DEM Party, the third-largest in parliament, is a key player in the peace process." },
        { type: "section", head: "Other forces", md:
          "Smaller parties matter in close contests. The nationalist İYİ Party, the anti-refugee Victory Party and religious parties such as the New Welfare Party, which took votes from the AKP in 2024, can swing results. The army, once the arbiter of Turkish politics, is now firmly under civilian, and presidential, control." },
        { type: "section", head: "Watching from the street", md:
          "Opposition rallies still draw large crowds, and many Turks follow politics through independent YouTube channels and social media rather than mainstream television. The authorities have at times throttled access to social platforms during protests." },
        { type: "section", head: "Inside the government", md:
          "Erdoğan's ministers are appointed, not elected, and many are technocrats. The most important for markets is Mehmet Şimşek, the finance minister, a former Merrill Lynch economist whom Erdoğan brought back in 2023 to end years of unorthodox policy and bring inflation down. Hakan Fidan, the foreign minister and a former intelligence chief, is often mentioned as a possible successor. Erdoğan has never named an heir, and the question of who could hold the AKP together after him hangs over Turkish politics and over any plan for him to run again." }
      ],
      takeaways: [
        "Erdoğan governs with the nationalist MHP of Devlet Bahçeli, who opened the PKK peace process.",
        "The CHP won the 2024 local elections; its leader is Özgür Özel and its candidate İmamoğlu is jailed.",
        "Technocrats like finance minister Mehmet Şimşek run the economy."
      ],
      check: { q: "Who started Turkey's peace process with the PKK in October 2024?",
        choices: ["Özgür Özel", "Devlet Bahçeli", "Ekrem İmamoğlu"], answer: 1,
        explain: "Bahçeli, the nationalist MHP leader long known for hard-line views on the PKK, surprised Turkey by calling on Öcalan to end the insurgency." },
      sources: [
        { title: "Landmark trial opens for Turkish opposition champion Imamoglu", publisher: "France 24", url: "https://www.france24.com/en/live-news/20260309-one-year-after-arrest-turkey-opposition-champion-imamoglu-goes-on-trial", date: "2026-03-09" },
        { title: "Istanbul Mayor Imamoglu imprisoned, pending trial in Turkiye", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/3/23/turkish-court-orders-istanbul-mayor-jailed-pending-trial", date: "2025-03-23" },
        { title: "2025 PKK–Turkey peace process", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_PKK%E2%80%93Turkey_peace_process", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "tr-5", kind: "story", asOf: "2026-09-28",
      title: "The İmamoğlu case",
      dek: "The arrest of Istanbul's mayor set off Turkey's biggest protests in a decade. Now his trial could decide who can run against Erdoğan.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr/tr-5-hero.webp",
          alt: "Illustration of a huge nighttime crowd holding phone lights in front of a modern city hall building in Istanbul.",
          caption: "Hundreds of thousands protested in Istanbul after İmamoğlu's arrest in March 2025.",
          credit: "AI illustration — not a photograph",
          prompt: "A huge nighttime crowd seen from above and behind holding up glowing phone lights in front of a modern city hall building, a rainy street reflecting the lights, riot police vans at the edge, tense but peaceful mood, no faces in close-up, no legible text or flags." },
        { type: "section", head: "What happened", md:
          "On 18 March 2025, Istanbul University annulled Ekrem İmamoğlu's degree, which Turkish law requires for presidential candidates. The next morning police detained him on corruption charges, and days later a court jailed him pending trial. Hundreds of thousands protested in Istanbul and other cities, the largest demonstrations since 2013; nearly 2,000 people were detained. The CHP went ahead with its primary and chose him as its presidential candidate.\n\n" +
          "His main trial opened on 9 March 2026, with more than 400 defendants. Prosecutors accuse him of running a criminal organisation in Istanbul's municipality and seek over 2,000 years in prison. He also faces separate espionage and other cases, and in September 2026 was sentenced to about two years in an insult case, which could carry a political ban if upheld." },
        { type: "timeline", head: "How it unfolded", items: [
          ["Mar 2024", "İmamoğlu re-elected Istanbul mayor by a wide margin"],
          ["18 Mar 2025", "His university degree is annulled"],
          ["19 Mar 2025", "Detained; mass protests follow"],
          ["23 Mar 2025", "Jailed pending trial; named CHP candidate"],
          ["9 Mar 2026", "Main corruption trial opens"],
          ["Sep 2026", "Sentenced to about two years in an insult case"]
        ] },
        { type: "section", head: "Why it happened", md:
          "The government says the case is about corruption, that Turkish courts are independent, and that no one is above the law. İmamoğlu, his party and many independent observers, including Human Rights Watch, say it is a political prosecution meant to remove the one opposition figure who has repeatedly beaten Erdoğan's candidates and who led in some presidential polls." },
        { type: "compare", head: "Two views of the case",
          left: { head: "The government's view", md:
            "Investigators found evidence of bribery and bid-rigging in Istanbul's municipality. Being a popular politician doesn't protect anyone from prosecution." },
          right: { head: "The opposition's view", md:
            "The timing, the annulled degree and the sheer scale of the charges show the aim is to stop İmamoğlu running for president. It is the end of real electoral competition." } },
        { type: "section", head: "The other mayors", md:
          "İmamoğlu is not alone. Since late 2024 prosecutors have detained or removed dozens of opposition mayors, including several Istanbul district mayors, on corruption or terrorism-related charges. Courts have also heard cases challenging the CHP's own leadership elections. The party says the aim is to cripple it before the next national vote." },
        { type: "section", head: "Why it matters", md:
          "Turkey's democracy has survived many shocks because elections have stayed competitive. If the leading opposition candidate is barred by the courts, many Turks and outside observers would conclude that line has been crossed. The case also rattled markets: the lira fell sharply after the arrest, and the central bank spent billions of dollars to steady it." },
        { type: "section", head: "What's next", md:
          "The trial is expected to last many months. Watch for rulings that could bar İmamoğlu from politics, whether the CHP names an alternative candidate such as Mansur Yavaş, and whether protests revive. Europe's reaction has been muted, as governments value Turkey's role on Ukraine, migration and defence." }
      ],
      takeaways: [
        "Istanbul mayor Ekrem İmamoğlu was jailed in March 2025, a day after his degree was annulled.",
        "His arrest set off the largest protests since 2013; the CHP made him its presidential candidate anyway.",
        "His corruption trial, with 400+ defendants, opened in March 2026 and could bar him from running."
      ],
      check: { q: "Why did the annulment of İmamoğlu's university degree matter?",
        choices: ["It cost him his job as mayor", "A degree is required to run for president in Turkey", "It made him ineligible to vote"], answer: 1,
        explain: "Turkish law requires presidential candidates to hold a university degree, so the annulment was a direct obstacle to his candidacy." },
      sources: [
        { title: "Türkiye: Leading Opponent of Erdoğan on Trial", publisher: "Human Rights Watch", url: "https://www.hrw.org/news/2026/03/03/turkiye-leading-opponent-of-erdogan-on-trial", date: "2026-03-03" },
        { title: "Landmark trial opens for Turkish opposition champion Imamoglu", publisher: "France 24", url: "https://www.france24.com/en/live-news/20260309-one-year-after-arrest-turkey-opposition-champion-imamoglu-goes-on-trial", date: "2026-03-09" },
        { title: "Jailed İstanbul mayor İmamoğlu sentenced to 2 years in insult case", publisher: "Turkish Minute", url: "https://www.turkishminute.com/2026/09/11/jailed-istanbul-mayor-imamoglu-sentenced-to-2-years-in-insult-case/", date: "2026-09-11" },
        { title: "Istanbul Mayor Imamoglu imprisoned, pending trial in Turkiye", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/3/23/turkish-court-orders-istanbul-mayor-jailed-pending-trial", date: "2025-03-23" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "tr-6", kind: "story", asOf: "2026-09-28",
      title: "Making peace with the PKK",
      dek: "After four decades and some 40,000 deaths, the Kurdish militant group has announced its dissolution. What comes next is less clear.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr/tr-6-hero.webp",
          alt: "Illustration of rugged mountains in south-eastern Turkey at dawn, with a small village of stone houses in a valley and mist in the passes.",
          caption: "The PKK's insurgency was fought largely in the mountains of Turkey's south-east and northern Iraq.",
          credit: "AI illustration — not a photograph",
          prompt: "Rugged brown mountains at dawn with mist in the passes, a small village of flat-roofed stone houses in a green valley, a winding dirt road, a shepherd with sheep far away, soft golden light, peaceful but with a sense of history, no people close up, no text." },
        { type: "section", head: "What happened", md:
          "In October 2024 Devlet Bahçeli, leader of the nationalist MHP and a long-time hardliner, suggested that Abdullah Öcalan, the [[PKK]]'s founder, jailed since 1999, could call on the group to disarm. In February 2025 Öcalan did exactly that. In May 2025 the PKK announced it would dissolve and end its armed struggle, and in July a group of fighters burned their weapons at a ceremony in northern Iraq. A parliamentary commission was set up to prepare the legal steps." },
        { type: "timeline", head: "The peace process", items: [
          ["1984", "The PKK begins its armed insurgency"],
          ["Oct 2024", "Bahçeli proposes that Öcalan call for disarmament"],
          ["Feb 2025", "Öcalan calls on the PKK to disband"],
          ["May 2025", "The PKK announces its dissolution"],
          ["Jul 2025", "A first group of fighters burns its weapons"],
          ["Jan 2026", "Syria's government and the Kurdish-led SDF agree to integrate"]
        ] },
        { type: "section", head: "Why it happened", md:
          "The PKK had been weakened by years of Turkish drone strikes and cross-border operations. The fall of Syria's Assad regime in December 2024 changed the region: Turkey's allies now run Damascus, and the Kurdish-led forces in north-east Syria, linked to the PKK, lost room to manoeuvre. In January 2026 Syria's government and those forces, the SDF, agreed to integrate, a deal Turkey backs.\n\n" +
          "For Erdoğan, peace could also be politically useful. Critics note that he would need votes from the pro-Kurdish DEM Party in parliament to call an early election or change the constitution." },
        { type: "compare", head: "Two views of the process",
          left: { head: "Hopeful", md:
            "Ending a 40-year war would save lives, free the south-east to develop and remove a reason for emergency powers. Turkey's Kurds have waited decades for this." },
          right: { head: "Sceptical", md:
            "There has been little on Kurdish rights: language, local government or releasing jailed Kurdish politicians. And peace is being made while the main opposition is prosecuted." } },
        { type: "section", head: "The Syrian dimension", md:
          "Turkey's biggest security worry has long been the Kurdish-led forces in north-east Syria, which it sees as an extension of the PKK and which the United States backed against the Islamic State group. The integration deal with Damascus could remove that worry, if it holds." },
        { type: "section", head: "Why it matters", md:
          "Kurds make up an estimated 15–20% of Turkey's population. The conflict shaped its politics for 40 years, justifying emergency laws and the jailing of Kurdish politicians, including Selahattin Demirtaş, former co-leader of DEM's predecessor, the HDP,, held since 2016 despite European court rulings ordering his release. A lasting settlement would change Turkish politics and the region's, from Syria to Iraq." },
        { type: "section", head: "What's next", md:
          "Watch for laws on the reintegration of former fighters, any easing of Öcalan's conditions or release of Kurdish politicians, and whether the DEM Party ends up supporting constitutional changes that would help Erdoğan. İmamoğlu, from his cell, has accused Erdoğan of taking 'no steps' in return for the PKK's move." }
      ],
      takeaways: [
        "The PKK announced its dissolution in May 2025, after its jailed founder called on it to disband.",
        "The process began with an October 2024 proposal from Erdoğan's nationalist ally, Devlet Bahçeli.",
        "Critics say Kurdish rights have barely moved, and that peace may help Erdoğan politically."
      ],
      check: { q: "When did the PKK announce it would dissolve?",
        choices: ["1999", "May 2025", "January 2026"], answer: 1,
        explain: "The PKK announced its dissolution in May 2025, three months after Öcalan's call. In January 2026 the separate SDF–Damascus integration deal followed in Syria." },
      sources: [
        { title: "2025 PKK–Turkey peace process", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_PKK%E2%80%93Turkey_peace_process", date: "2026" },
        { title: "Turkey's Kurdish Peace Process Is Not About Erdogan", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2026/09/03/turkey-erdogan-israel-ocalan-kurds-peace-israel-iran-syria/", date: "2026-09-03" },
        { title: "Turkey backs Syria-SDF integration deal", publisher: "Bianet", url: "https://bianet.org/haber/turkey-backs-syria-sdf-integration-deal-315737", date: "2026-01" },
        { title: "Jailed İstanbul mayor accuses Erdoğan of taking 'no steps' in PKK peace process", publisher: "Turkish Minute", url: "https://www.turkishminute.com/2026/05/07/jailed-istanbul-mayor-accuses-erdogan-of-taking-no-steps-in-pkk-peace-process/", date: "2026-05-07" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "tr-7", kind: "story", asOf: "2026-09-28",
      title: "Everyone's middleman",
      dek: "Syria, Ukraine, Gaza, Iran: Turkey has a hand in almost every crisis around it, and talks to every side.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr/tr-7-hero.webp",
          alt: "Illustration of a large cargo ship passing through the Bosphorus strait at sunrise, with the shores of Europe and Asia on either side.",
          caption: "Under the 1936 Montreux Convention, Turkey controls the passage of warships through its straits.",
          credit: "AI illustration — not a photograph",
          prompt: "A large cargo ship passing through a narrow strait at sunrise, wooded hills and old waterside mansions on both shores, a fortress tower on a hillside, a small ferry in the foreground, soft mist, calm strategic importance, no legible text or flags." },
        { type: "section", head: "What happened", md:
          "In [[unit:ua|Ukraine's]] war, Turkey sold Kyiv its Bayraktar drones, closed its straits to warships under the [[Montreux Convention]], hosted Russian–Ukrainian talks in Istanbul in 2025 and helped broker prisoner swaps, while refusing to join Western [[sanctions]] on [[unit:ru|Russia]].\n\n" +
          "In Syria, it was a key backer of the rebels who toppled Assad in December 2024, and is now the new government's closest partner. In Gaza, Turkey joined Trump's Board of Peace in January 2026 but was left out of the international stabilisation force in February, after Israeli objections. And during the 2026 fighting involving Iran, Turkey opposed the war and offered to mediate, while NATO air defences intercepted Iranian missiles over Turkish territory." },
        { type: "section", head: "Why it happens", md:
          "Erdoğan's foreign policy rests on a simple idea: a Turkey that talks to everyone is more valuable to everyone. Its geography, its army and its arms industry, which now exports drones, ships and armoured vehicles to dozens of countries, give it leverage. Its economy, which depends on Russian energy, European markets and Gulf investment, gives it reasons to stay on good terms with all of them." },
        { type: "facts", head: "Turkey's balancing act", rows: [
          ["NATO", "Member since 1952; second-largest army in the alliance"],
          ["Russia", "Bought S-400 missiles in 2019; major energy supplier; no sanctions"],
          ["Ukraine", "Drones for Kyiv; host of talks and prisoner swaps"],
          ["EU", "Candidate since 1999, but talks frozen since 2018"],
          ["Syria", "Closest partner of the post-Assad government"]
        ] },
        { type: "compare", head: "Two views of Turkish diplomacy",
          left: { head: "Admirers", md:
            "Turkey is an indispensable bridge. It kept grain flowing from Ukraine, hosted peace talks, and can speak to Moscow, Hamas and Tehran when Western countries can't." },
          right: { head: "Critics", md:
            "Ankara plays all sides for its own advantage, helps Russia evade sanctions, and uses crises to win concessions from allies, such as its long delay of Sweden's NATO membership." } },
        { type: "section", head: "Refugees and migration", md:
          "Turkey hosts one of the world's largest refugee populations, mostly Syrians who fled the civil war, under a 2016 deal in which the EU pays it to host them and curb crossings to Greece. Since Assad's fall, some have gone home, but millions remain, and anti-refugee feeling is a potent force in Turkish politics." },
        { type: "section", head: "Why it matters", md:
          "With the United States less predictable and Europe rearming, Turkey's army, drone industry and position on the Black Sea make it more valuable to European security. Its relationship with [[unit:us|the United States]] has warmed under Trump, and it has agreed to buy Eurofighter jets from a European consortium. But its purchase of Russian S-400 missiles still keeps it out of the American F-35 programme." },
        { type: "section", head: "What's next", md:
          "Watch Turkey's role in any Ukraine ceasefire, where its navy and straits would matter for Black Sea security; its influence over Syria's new army; and whether it wins a place in Gaza's reconstruction. Each gives Ankara leverage, and each will be used." }
      ],
      takeaways: [
        "Turkey arms Ukraine and hosts talks, but trades with Russia and has not joined sanctions.",
        "It is the closest partner of Syria's post-Assad government and backs the SDF integration deal.",
        "It joined the Gaza Board of Peace but was left out of the stabilisation force."
      ],
      check: { q: "Why is Turkey excluded from the US F-35 fighter programme?",
        choices: ["It left NATO", "It bought Russian S-400 air-defence missiles", "It never asked to join"], answer: 1,
        explain: "The US removed Turkey from the F-35 programme in 2019 after it took delivery of Russia's S-400 system." },
      sources: [
        { title: "Turkey, Israel, Pakistan to join Trump's Board of Peace as Italy hedges", publisher: "Al-Monitor", url: "https://www.al-monitor.com/originals/2026/01/turkey-israel-pakistan-join-trumps-board-peace-italy-hedges-what-know", date: "2026-01" },
        { title: "Turkey Leaves Gaza Peace Board Summit Empty-Handed", publisher: "FDD", url: "https://www.fdd.org/analysis/2026/02/20/turkey-leaves-gaza-peace-board-summit-empty-handed/", date: "2026-02-20" },
        { title: "Turkey and the War on Iran: Between Opportunity and Catastrophe", publisher: "Arab Center Washington DC", url: "https://arabcenterdc.org/resource/turkey-and-the-war-on-iran-between-opportunity-and-catastrophe/", date: "2026" },
        { title: "How Turkey and the Syrian Interim Government Outmanoeuvred the U.S. and the SDF in Syria", publisher: "Manara Magazine", url: "https://manaramagazine.org/2026/02/turkey-syrian-government-us-sdf-syria/", date: "2026-02" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "tr-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "High inflation, a jailed rival, a Kurdish peace process, and a president preparing to stay on.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr/tr-8-hero.webp",
          alt: "Illustration of a busy Istanbul covered bazaar with shoppers and stalls of spices and lamps, prices on blank tags.",
          caption: "Inflation, still above 30%, is the everyday political issue for most Turks.",
          credit: "AI illustration — not a photograph",
          prompt: "Inside a historic covered bazaar in Istanbul, vaulted painted ceilings, stalls piled with spices and glowing mosaic lamps, shoppers seen from behind, blank price tags, warm light and bustle, a sense of daily life under pressure, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Power:** Erdoğan governs with the MHP; his current term ends in 2028.\n" +
          "- **Opposition:** İmamoğlu is on trial; the CHP runs most big cities but many of its mayors face prosecution.\n" +
          "- **Economy:** inflation was 31.5% in August 2026, down from 85% in 2022 but still high.\n" +
          "- **Peace:** the PKK has announced its dissolution; the legal steps are slow.\n" +
          "- **Abroad:** Turkey is central to Syria, active on Ukraine and Gaza, and more valuable to European security." },
        { type: "section", head: "Another term?", md:
          "Turkey's constitution limits presidents to two terms, and Erdoğan was elected under the presidential system in 2018 and 2023. But if parliament votes to call an early election during a president's second term, the president may run again. In September 2026 Erdoğan's adviser Mehmet Uçum said the elections due in May 2028 could be brought forward to April, which would allow Erdoğan to stand. A legal team is also drafting a new constitution. Calling an early election takes 360 votes in parliament, more than the governing alliance has, so it would need support from other parties, such as the DEM Party." },
        { type: "section", head: "The economy", md:
          "Since 2023, Mehmet Şimşek and the central bank have raised interest rates sharply and tightened spending to bring inflation down, reversing Erdoğan's earlier insistence that high rates cause inflation. Inflation has fallen by more than half from its peak, and foreign investors have partly returned. But the progress is slow, prices keep rising faster than wages for many families, and the lira has kept losing value." },
        { type: "section", head: "What voters want", md:
          "Polls consistently show the cost of living as Turks' top concern by far, followed by unemployment, refugees and the justice system. Young, urban voters are much more likely to back the opposition, and many young graduates say they would like to emigrate. Erdoğan's support rests on a loyal core that credits him with roads, hospitals, airports and a stronger Turkey abroad." },
        { type: "section", head: "Three scenarios", md:
          "- **Erdoğan runs again.** Parliament calls an early election with DEM support, and Erdoğan seeks a new term against a weakened opposition.\n" +
          "- **A new constitution.** A redrafted charter resets the term limits and reshapes the system.\n" +
          "- **An opposition breakthrough.** The CHP unites behind a candidate who can run, such as İmamoğlu if freed or Yavaş, and wins on economic discontent." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Monthly:** inflation figures, published at the start of each month\n" +
          "- **Ongoing:** hearings in the İmamoğlu trial and appeals in his other cases\n" +
          "- **2026–27:** the draft constitution and any parliamentary vote on early elections\n" +
          "- **By May 2028:** presidential and parliamentary elections" },
        { type: "section", head: "Connections", md:
          "Turkey's story runs through [[unit:ru]] (energy and the S-400), [[unit:ua]] (drones, talks and the Black Sea), [[unit:us]] (NATO and the F-35), [[unit:de]] (a large Turkish diaspora and EU relations), [[unit:it]] (Libya and the Mediterranean) and the wider Middle East, from Syria to Iran and Gaza." }
      ],
      takeaways: [
        "Inflation has fallen from 85% to about 31.5%, but remains the top concern for most Turks.",
        "Erdoğan's allies are preparing an early election or a new constitution that could let him run again.",
        "The İmamoğlu trial will decide whether the opposition's strongest candidate can stand."
      ],
      check: { q: "How could Erdoğan legally run again despite the two-term limit?",
        choices: ["If parliament calls an early election during his second term", "By winning a referendum on NATO", "If the MHP nominates him"], answer: 0,
        explain: "The constitution lets a president run again if parliament, by a three-fifths vote, calls an early election during the second term." },
      sources: [
        { title: "Turkey's Erdogan to Seek Reelection, Circumvent Constitutional Term Limits, Adviser Says", publisher: "Algemeiner", url: "https://www.algemeiner.com/2026/09/17/turkeys-erdogan-seek-reelection-circumvent-constitutional-term-limits-adviser-says/", date: "2026-09-17" },
        { title: "Turkey's Erdogan appoints team to draft new constitution, drawing fear of power grab", publisher: "The Times of Israel / AP", url: "https://www.timesofisrael.com/turkeys-erdogan-appoints-team-to-draft-new-constitution-drawing-fear-of-power-grab/", date: "2026" },
        { title: "Turkey Inflation Rate", publisher: "Trading Economics", url: "https://tradingeconomics.com/turkey/inflation-cpi", date: "2026-09" },
        { title: "Turkey: Erdogan to run for another term", publisher: "Fruits and Votes", url: "https://fruitsandvotes.wordpress.com/2026/09/17/turkey-erdogan-to-run-for-another-term/", date: "2026-09-17" }
      ]
    }
  ]
});
