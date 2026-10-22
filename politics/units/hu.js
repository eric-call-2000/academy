/* ============================================================
   Unit 31 — Hungary 🇭🇺
   Research note and sources: tools/research/hu.md
   Current as of 22 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("hu", {
  id: "hu",
  asOf: "2026-10-22",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "hu-1", kind: "snapshot", asOf: "2026-10-22",
      title: "Hungary in brief",
      dek: "A small EU country that became the model for 'illiberal democracy', then voted its architect out in a landslide.",
      blocks: [
        { type: "map", src: "maps/hu.svg",
          alt: "Locator map of central Europe with Hungary highlighted, a landlocked country bordered by Austria, Slovakia, Ukraine, Romania, Serbia, Croatia and Slovenia, with a small globe showing its place in the world.",
          caption: "Hungary is landlocked in the Carpathian Basin, with seven neighbours, among them Ukraine.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Budapest"],
          ["People", "About 9.6 million"],
          ["System", "Parliamentary republic; the president is elected by parliament"],
          ["Prime minister", "Péter Magyar (Tisza), since May 2026"],
          ["President", "András Baka, since August 2026"],
          ["Parliament", "199 seats; Tisza holds 141, a two-thirds majority"],
          ["Member of", "EU (2004), NATO (1999)"]
        ] },
        { type: "section", head: "Why it's here", md:
          "Hungary has fewer people than many world cities, but for 16 years it mattered far beyond its size. Viktor Orbán, prime minister from 2010, rebuilt its institutions around his party, Fidesz, and called the result an 'illiberal' democracy. Admirers abroad, from American conservatives to Europe's nationalist right, saw a model. Critics, including the European Parliament, saw a democracy hollowed out from within.\n\n" +
          "Inside the EU, Orbán used Hungary's veto to block or delay decisions on [[unit:ua|Ukraine]], [[sanctions]] on [[unit:ru|Russia]] and the budget. That made a country of under 10 million people one of the most watched in Europe." },
        { type: "section", head: "An outsized voice", md:
          "From 2022 Budapest hosted a yearly edition of CPAC, the American conservative conference, and Donald Trump praised Orbán as a strong leader. In 2024 Fidesz helped found Patriots for Europe, which became the third-largest group in the European Parliament. Orbán also kept close ties with Vladimir Putin and China's Xi Jinping while staying inside the EU and NATO. For nationalists elsewhere, Hungary showed that a government could defy Brussels and still win elections." },
        { type: "section", head: "The 2026 turn", md:
          "On 12 April 2026 that era ended at the ballot box. Péter Magyar, a former Fidesz insider who broke with the party in 2024, led his Tisza party to 53% of the list vote and 141 of 199 seats: a two-thirds [[supermajority]] of the kind Orbán himself had used to rewrite the rules. Turnout was a record, about 79%.\n\n" +
          "The question now is the reverse of the one Hungary posed for a decade: how do you take an illiberal system apart, and can you do it without using the same tools?" },
        { type: "section", head: "The country", md:
          "Hungarians speak a language unrelated to their neighbours' Slavic, Germanic and Romance tongues. About two million ethnic Hungarians live just across the borders, in Romania, Slovakia, Serbia and Ukraine, a legacy of the 1920 Treaty of Trianon. The economy is closely tied to German industry: car plants run by Audi, Mercedes and BMW, and a wave of Chinese battery and car factories built in Orbán's last years." },
        { type: "section", head: "What Hungary wants", md:
          "The new government wants the billions in EU funds frozen under Orbán, a normal seat at the EU table, and a cleaner state. It is not a sharp turn on every issue. Magyar keeps Orbán's border fence and hard line on migration, will not send weapons to Ukraine, and says Hungary still needs Russian oil and gas for now." },
        { type: "callout", tone: "why", md:
          "Hungary is a test case for a question several democracies face: once a government has reshaped courts, media and the constitution in its favour, can the voters undo it, and how far should the winners go?" }
      ],
      takeaways: [
        "Viktor Orbán ran Hungary from 2010 to 2026 and became the face of 'illiberal democracy' in Europe.",
        "Péter Magyar's Tisza won 141 of 199 seats in April 2026, a two-thirds majority, on record turnout.",
        "The new government wants EU funds and a cleaner state, but keeps a hard line on migration and caution on Russia."
      ],
      check: { q: "What share of parliament's seats did Tisza win in April 2026?",
        choices: ["Just over half", "Two-thirds", "Less than half, so it needed a coalition"], answer: 1,
        explain: "Tisza won 141 of 199 seats, a two-thirds majority that lets it change the constitution on its own." },
      sources: [
        { title: "2026 Hungarian parliamentary election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Hungarian_parliamentary_election", date: "2026" },
        { title: "Final Hungarian election results confirm supermajority for Tisza", publisher: "bne IntelliNews", url: "https://www.intellinews.com/final-hungarian-election-results-confirm-supermajority-for-tisza-438174/", date: "2026-04" },
        { title: "Hungary's Magyar vows accountability for Orbán era while holding firm on migration", publisher: "AP via ABC News", url: "https://abcnews.com/International/wireStory/hungarys-magyar-vows-accountability-orbn-era-holding-firm-137437319", date: "2026-10-21" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "hu-2", kind: "power", asOf: "2026-10-22",
      title: "The two-thirds rule",
      dek: "Hungary's system rewards the winner: a two-thirds majority in one chamber can rewrite the constitution alone.",
      blocks: [
        { type: "diagram", src: "img/hu/hu-2-power.svg",
          alt: "Diagram of power in Hungary. Voters elect the 199-seat National Assembly through 106 constituencies and national lists. Two-thirds of it can change the Fundamental Law and the cardinal laws. It elects Prime Minister Péter Magyar, who leads a single-party Tisza government, and President András Baka, a former Supreme Court president, for up to five years. The Constitutional Court reviews laws; the 2026 amendment restored its age limit and shortened judges' terms. The next election is due in spring 2030.",
          caption: "With two-thirds of a single chamber, a Hungarian government faces few checks it cannot change.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "One chamber, mixed seats", md:
          "Hungary's parliament, the National Assembly, has a single chamber of 199 members elected every four years. 106 are chosen in single-member constituencies, where whoever comes first wins, and 93 from national party lists by proportional representation. Votes that don't win a constituency seat are added to the party's list total, which tends to magnify the winner's lead. In 2026 Tisza turned 53% of the list vote into 71% of the seats, just as Fidesz turned 54% into two-thirds in 2022." },
        { type: "section", head: "Who votes where", md:
          "Fidesz redrew the constituency map in 2011 and changed the rules in ways critics said favoured it. Ethnic Hungarians who live in neighbouring countries and hold Hungarian citizenship can vote by post for party lists, and most have backed Fidesz. Hungarians who emigrated to Western Europe, many of them younger and more critical, must vote in person at an embassy or consulate. Opposition parties called this an unfair asymmetry; the government said it reflected different registration rules." },
        { type: "section", head: "Cardinal laws", md:
          "The constitution, called the Fundamental Law since Fidesz wrote a new one in 2011, can be changed by two-thirds of all MPs. So can dozens of 'cardinal laws' on elections, the courts, the media, the central bank and family policy. Orbán used this to lock in his choices: a future government with a simple majority could not undo them. The same lock now works for Magyar, which is why his two-thirds majority matters so much." },
        { type: "section", head: "Prime minister and president", md:
          "The prime minister, elected by parliament, holds most executive power and can only be removed by a 'constructive' vote that names a successor. The president is elected by parliament for five years. The role is mostly ceremonial, but the president signs laws, can return them once to parliament or send them to the Constitutional Court, and appoints senior officials. Under Orbán, every president came from Fidesz's circle." },
        { type: "section", head: "The courts", md:
          "The Constitutional Court reviews laws against the Fundamental Law. After 2010 Fidesz enlarged it, changed how judges were chosen and filled it with its own nominees, and limited its say over budget laws. In July 2026 Tisza's amendment restored a retirement age of 70, ending the terms of the court's president and three other judges, cut judges' terms from 12 years to nine and let the judges choose their own president again." },
        { type: "section", head: "Few brakes", md:
          "Hungary has no upper house, no federal states and a weak tradition of local power. Most checks on a government are other institutions it appoints: the president, the prosecutor general, the audit office, the media council. When one party holds two-thirds, it can choose all of them. That is the core of the debate about Hungary: Orbán built a system with few brakes, and Magyar now holds the same wheel." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Its defenders", md:
            "A clear majority lets a government deliver what voters asked for. Coalitions and gridlock, as elsewhere in Europe, are not more democratic." },
          right: { head: "Its critics", md:
            "Rules that let 53% of voters rewrite the constitution invite abuse. Real checks should not depend on who happens to hold two-thirds." } }
      ],
      takeaways: [
        "Hungary has a single 199-seat chamber, elected partly in constituencies and partly from lists, which magnifies the winner's lead.",
        "Two-thirds of MPs can change the Fundamental Law and the 'cardinal laws' on courts, media and elections.",
        "The president, elected by parliament, has limited powers; most checks are bodies a two-thirds majority can appoint."
      ],
      check: { q: "What can a two-thirds majority in Hungary's parliament do on its own?",
        choices: ["Only pass the budget", "Change the constitution and the cardinal laws", "Nothing without a referendum"], answer: 1,
        explain: "Two-thirds of MPs can amend the Fundamental Law and the cardinal laws, which is how Orbán built his system and how Magyar is changing it." },
      sources: [
        { title: "Amending Hungary's constitution to dismantle Fidesz's grip on power", publisher: "OSW", url: "https://www.osw.waw.pl/en/publikacje/analyses/2026-07-14/amending-hungarys-constitution-to-dismantle-fideszs-grip-power", date: "2026-07-14" },
        { title: "TISZA wins constitutional majority in Hungarian parliamentary elections", publisher: "PISM", url: "https://pism.pl/publications/tisza-wins-constitutional-majority-in-hungarian-parliamentary-elections", date: "2026-04" },
        { title: "Hungary", publisher: "Britannica", url: "https://www.britannica.com/place/Hungary", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "hu-9", kind: "founding", asOf: "2026-10-22",
      title: "Horsemen, kings and Habsburgs",
      dek: "Nomads from the east founded a Christian kingdom in 1000, lost it to the Ottomans in 1526, and spent centuries fighting for self-rule.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/hu/hu-9-hero.webp",
          alt: "Illustration of a column of horsemen on a wide grassy plain, seen from behind, riding toward a line of low hills under a big sky.",
          caption: "Magyar horsemen settled the Carpathian Basin in the 890s.",
          credit: "Illustration — not a photograph",
          prompt: "A long column of horsemen in early medieval dress seen from behind, riding across a vast grassy plain toward a line of low wooded hills, a big pale sky with long clouds, late afternoon light, epic and quiet, no faces, no flags, no legible text." },
        { type: "timeline", head: "A thousand years in brief", items: [
          ["895–96", "Magyar tribes under Árpád settle the Carpathian Basin"],
          ["1000", "Stephen I is crowned the first Christian king"],
          ["1241–42", "The Mongols devastate the kingdom"],
          ["1526", "Defeat by the Ottomans at Mohács"],
          ["1686–99", "Habsburg armies drive the Ottomans out"],
          ["1848–49", "Revolution and war of independence, crushed"],
          ["1867", "The Compromise creates Austria-Hungary"]
        ] },
        { type: "section", head: "From the steppe", md:
          "The Magyars, the Hungarians' own name for themselves, were a confederation of tribes from the steppes east of the Volga. In 895–96, led by Árpád, they crossed the Carpathian mountains and settled the plain along the Danube. For two generations their mounted archers raided deep into western Europe, until a German army crushed them at Augsburg in 955. Their language, from the Finno-Ugric family, survives as Hungarian today." },
        { type: "section", head: "Saint Stephen's kingdom", md:
          "Árpád's descendant Stephen accepted Western Christianity and was crowned king around the year 1000 with a crown sent by the pope. He built a kingdom of counties and bishoprics that lasted, in one form or another, for 900 years. The Holy Crown associated with him is now kept in the parliament building, and 20 August, his feast day, is Hungary's main national holiday. Orbán's 2011 constitution opens by invoking him." },
        { type: "section", head: "Mohács", md:
          "Medieval Hungary was a major power; under Matthias Corvinus in the 1400s its court rivalled Italy's. Then, on 29 August 1526, an Ottoman army destroyed the Hungarian army at Mohács and killed the young king. The kingdom split in three: a strip in the west and north under the Habsburgs, the centre under the Ottomans for 150 years, and Transylvania as a semi-independent principality. 'More was lost at Mohács' is still a Hungarian saying for any misfortune." },
        { type: "section", head: "Under the Habsburgs", md:
          "Habsburg armies drove the Ottomans out by 1699, and Hungary became part of their empire. Hungarian nobles resisted Vienna's centralising rule, most famously in the revolution that began on 15 March 1848, now another national holiday. Led by Lajos Kossuth, Hungary declared independence, but Austrian and Russian armies crushed it in 1849. In 1867 a compromise made Hungary an equal partner in the Dual Monarchy of Austria-Hungary, with its own parliament in Budapest." },
        { type: "compare", head: "Two lessons Hungarians draw",
          left: { head: "A nation that survives", md:
            "A small people with a unique language kept its identity through Mongols, Ottomans and Habsburgs by holding on to faith, crown and nation." },
          right: { head: "A crossroads kingdom", md:
            "Historic Hungary was multi-ethnic: Slovaks, Romanians, Serbs, Croats and Germans lived in it, and treating it as purely Hungarian ignores them." } },
        { type: "section", head: "Why it matters", md:
          "This long story of survival between empires feeds the language of sovereignty in Hungarian politics. Orbán often cast Brussels as the latest distant power trying to rule Hungary. The size of the old kingdom also explains the trauma of its partition in 1920 ([[lesson:hu-10]])." }
      ],
      takeaways: [
        "Magyar tribes settled the Carpathian Basin in 895–96, and Stephen I founded a Christian kingdom around 1000.",
        "Defeat at Mohács in 1526 split Hungary between the Habsburgs, the Ottomans and Transylvania.",
        "The 1848 revolution was crushed, but the 1867 Compromise made Hungary an equal partner in Austria-Hungary."
      ],
      check: { q: "What happened at Mohács in 1526?",
        choices: ["Hungary's first king was crowned", "The Ottomans destroyed the Hungarian army", "Austria and Hungary agreed the Compromise"], answer: 1,
        explain: "The Ottoman victory at Mohács killed the king and split the kingdom for 150 years." },
      sources: [
        { title: "Hungary: History", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Hungary", date: "n.d." },
        { title: "Stephen I", publisher: "Britannica", url: "https://www.britannica.com/biography/Stephen-I-king-of-Hungary", date: "n.d." },
        { title: "Battle of Mohács", publisher: "Britannica", url: "https://www.britannica.com/event/Battle-of-Mohacs", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "hu-3", kind: "history", asOf: "2026-10-22",
      title: "From 1956 to Orbán and back",
      dek: "A crushed revolution, a 'goulash communism', a peaceful exit in 1989, and two very different rebuilds.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/hu/hu-3-hero.webp",
          alt: "Illustration of a crowd seen from behind in a large square in front of a long neo-Gothic parliament building beside a river, at dusk.",
          caption: "Kossuth Square in front of the parliament in Budapest, where Hungarians have gathered at every turning point since 1956.",
          credit: "Illustration — not a photograph",
          prompt: "A crowd seen from behind filling a wide square in front of a long ornate neo-Gothic parliament building with a central dome and many spires beside a broad river, dusk sky, lamps glowing, a hopeful mood, no flags, no faces, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1920", "The Treaty of Trianon shrinks Hungary by two-thirds"],
          ["1944–45", "German occupation, the Holocaust, Soviet conquest"],
          ["1956", "Revolution against Soviet rule, crushed"],
          ["1989", "The border with Austria opens; communism ends peacefully"],
          ["1999 / 2004", "Hungary joins NATO, then the EU"],
          ["2010", "Orbán wins two-thirds and begins his rebuild"],
          ["2026", "Magyar wins two-thirds and begins another"]
        ] },
        { type: "section", head: "1. War and occupation", md:
          "Shrunk by the Treaty of Trianon ([[lesson:hu-10]]), interwar Hungary was ruled by Admiral Miklós Horthy and allied itself with Nazi Germany in the hope of winning back lost land. In March 1944 Germany occupied the country; within weeks, with the help of Hungarian authorities, about 437,000 Jews were deported, most to Auschwitz. The Red Army took Budapest after a brutal siege in early 1945, and a Soviet-backed communist regime took full control by 1949." },
        { type: "section", head: "2. 1956 and after", md:
          "In October 1956 a student protest became a national uprising, and the reformist Imre Nagy announced Hungary would leave the Warsaw Pact. Soviet tanks crushed it in November ([[lesson:hu-11]]). His successor, János Kádár, ruled until 1988 with a mix of repression and tolerance later nicknamed 'goulash communism': more consumer goods and small freedoms than elsewhere in the bloc, in return for political silence." },
        { type: "section", head: "3. A peaceful exit", md:
          "In 1989 reform communists negotiated with the opposition, and Hungary cut the barbed wire on its border with Austria, letting thousands of East Germans flee west, a crack that helped bring down the Berlin Wall. On 16 June 1989 Nagy was reburied in a huge ceremony, where a 26-year-old student leader named Viktor Orbán demanded Soviet troops go home. Free elections followed in 1990; Hungary joined NATO in 1999 and the EU in 2004." },
        { type: "section", head: "4. The Orbán system", md:
          "Orbán was prime minister from 1998 to 2002, then lost two elections. After a socialist government was hit by scandal and the 2008 financial crisis, Fidesz won two-thirds in 2010 and wrote a new constitution. It won two-thirds again in 2014, 2018 and 2022. Under Orbán, courts, media, universities and the economy were reshaped around the ruling party; in 2018 the European Parliament voted to start the EU's Article 7 procedure against Hungary for breaching its values." },
        { type: "section", head: "The 2015 fence", md:
          "In 2015 hundreds of thousands of asylum seekers, many fleeing [[unit:sy|Syria]]'s war, crossed Hungary toward Germany. Orbán built a razor-wire fence along the borders with Serbia and Croatia and refused the EU's plan to share out refugees among members. A 2016 referendum against the quotas saw 98% vote with the government, though turnout of about 44% fell short of the 50% needed for it to be valid. Migration became Fidesz's defining issue." },
        { type: "section", head: "5. 2024–2026", md:
          "In February 2024 a pardon scandal forced Orbán's hand-picked president to resign ([[lesson:hu-12]]), and Péter Magyar, until then a party insider, went public against the system. His Tisza party won 30% in that June's European election, then 53% and two-thirds of parliament in April 2026, ending 16 years of Fidesz rule." }
      ],
      takeaways: [
        "Hungary was occupied by Germany in 1944, taken over by the Soviets, and rose in revolt in 1956.",
        "It left communism peacefully in 1989 and joined NATO in 1999 and the EU in 2004.",
        "Orbán won two-thirds in four elections from 2010; Magyar won two-thirds in 2026."
      ],
      check: { q: "What did Hungary do in 1989 that helped bring down the Berlin Wall?",
        choices: ["It left the EU", "It opened its border with Austria", "It joined NATO"], answer: 1,
        explain: "By cutting the barbed wire on the Austrian border, Hungary let East Germans flee west, adding to the pressure on East Germany." },
      sources: [
        { title: "Hungary: History", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Hungary", date: "n.d." },
        { title: "Viktor Orbán", publisher: "Britannica", url: "https://www.britannica.com/biography/Viktor-Orban", date: "n.d." },
        { title: "The Holocaust in Hungary", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/the-holocaust-in-hungary", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "hu-10", kind: "past", asOf: "2026-10-22",
      title: "Trianon, 1920",
      dek: "After the First World War, a peace treaty took two-thirds of Hungary's land and left a third of Hungarians outside its borders.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/hu/hu-10-hero.webp",
          alt: "Illustration of a grand palace hall with tall windows and a long table covered in papers, empty chairs around it, in grey light.",
          caption: "The treaty was signed at the Grand Trianon palace at Versailles on 4 June 1920.",
          credit: "Illustration — not a photograph",
          prompt: "A grand eighteenth-century palace hall with tall arched windows, marble pilasters and a long table covered in green cloth and scattered papers, empty gilded chairs around it, grey morning light, solemn and cold, no people, no flags, no legible text." },
        { type: "facts", head: "Trianon in numbers", rows: [
          ["Signed", "4 June 1920, at Versailles"],
          ["Territory lost", "About 72% of the old kingdom (excluding Croatia)"],
          ["Population before and after", "About 18 million, then about 8 million"],
          ["Hungarian speakers left outside", "About 3 million"],
          ["Main gainers", "Romania, Czechoslovakia, Yugoslavia, Austria"]
        ] },
        { type: "section", head: "What happened", md:
          "Austria-Hungary lost the First World War and broke apart in 1918. Its peoples declared their own states, and the victorious Allies drew new borders at the Paris peace conference. Hungary, treated as a defeated power, was not allowed to negotiate. The Treaty of Trianon, signed on 4 June 1920, gave Transylvania to Romania, Slovakia to Czechoslovakia, Croatia and the Vojvodina to the new Kingdom of Serbs, Croats and Slovenes, and a western strip to Austria." },
        { type: "section", head: "Why the borders fell where they did", md:
          "Most of the land Hungary lost had non-Hungarian majorities: Romanians in most of Transylvania, Slovaks in the north, Serbs and Croats in the south. The Allies largely followed those majorities, and the strategic and railway demands of the new states. But the lines also put about three million Hungarian speakers, often living in compact areas right along the new border, under foreign rule. Hungary's population fell from about 18 million to about 8 million." },
        { type: "section", head: "The aftermath", md:
          "Undoing Trianon became the overriding goal of interwar Hungary. Its alliance with Nazi Germany won back parts of Slovakia, Transylvania and Yugoslavia between 1938 and 1941, a gain that was reversed in 1945 and helped pull Hungary into the war and the Holocaust. Under communism the subject was largely taboo. After 1989 it returned to public life, and about two million ethnic Hungarians still live in neighbouring countries." },
        { type: "section", head: "Living across the border", md:
          "Hungarian minorities have their own parties, schools and churches in Romania, Slovakia and Serbia, and their parties have often sat in coalition governments in Bucharest and Bratislava. Relations have had flashpoints: in 2010 Slovakia answered Hungary's citizenship offer by stripping Slovak citizenship from anyone who voluntarily took another. Language rights in schools and on street signs remain recurring disputes across the region." },
        { type: "section", head: "Orbán and the diaspora", md:
          "In 2010 Orbán's government made 4 June a 'Day of National Unity' and offered simplified Hungarian citizenship to ethnic Hungarians abroad; more than a million took it, and most of those who vote back Fidesz. Budapest also funded Hungarian schools, churches and media in Romania, Slovakia and Serbia. Neighbours sometimes saw this as interference; Orbán called it protecting the nation." },
        { type: "compare", head: "Two views of Trianon",
          left: { head: "A Hungarian view", md:
            "A punitive treaty dismembered a thousand-year-old kingdom and cut millions of Hungarians off from their nation without asking them." },
          right: { head: "Neighbours' view", md:
            "The treaty freed Romanians, Slovaks and South Slavs from Hungarian rule; the borders reflect who actually lived there." } },
        { type: "section", head: "Why it matters", md:
          "Trianon still shapes Hungarian politics: its maps of 'Greater Hungary' appear on car stickers, and the diaspora is a voting bloc. It also shapes ties with Ukraine, where about 150,000 Hungarians live in Transcarpathia, and where language laws became a grievance Orbán used against Kyiv." }
      ],
      takeaways: [
        "The 1920 Treaty of Trianon cut Hungary to about a third of its former size.",
        "About three million Hungarian speakers were left in Romania, Czechoslovakia, Yugoslavia and Austria.",
        "Orbán offered citizenship to ethnic Hungarians abroad, and the diaspora remains a political force."
      ],
      check: { q: "Roughly how much of the old kingdom's territory did Hungary lose at Trianon?",
        choices: ["About a tenth", "About a third", "About two-thirds"], answer: 2,
        explain: "Hungary lost about 72% of its territory (excluding Croatia), and its population fell from about 18 million to about 8 million." },
      sources: [
        { title: "Treaty of Trianon", publisher: "Britannica", url: "https://www.britannica.com/event/Treaty-of-Trianon", date: "n.d." },
        { title: "Hungary: History", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Hungary", date: "n.d." },
        { title: "Treaty of Trianon", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Treaty_of_Trianon", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "hu-11", kind: "past", asOf: "2026-10-22",
      title: "The 1956 revolution",
      dek: "For twelve days Hungarians took on Soviet power, and lost. The memory still divides and unites the country.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/hu/hu-11-hero.webp",
          alt: "Illustration of a city boulevard in late autumn with an abandoned tank, scattered cobblestones and smoke rising between grey apartment blocks.",
          caption: "Soviet tanks returned to Budapest on 4 November 1956 and crushed the uprising within days.",
          credit: "Illustration — not a photograph",
          prompt: "A wide city boulevard in late autumn lined with grey nineteenth-century apartment blocks, an abandoned old tank turned sideways, scattered cobblestones and paper, thin smoke rising, bare trees, cold grey light, aftermath and silence, no people close up, no flags, no legible text." },
        { type: "facts", head: "The revolution", rows: [
          ["Began", "23 October 1956, with a student march in Budapest"],
          ["Leader", "Imre Nagy, reform communist prime minister"],
          ["Crushed", "Soviet invasion from 4 November"],
          ["Killed", "About 2,500 Hungarians and about 700 Soviet soldiers"],
          ["Fled abroad", "About 200,000 Hungarians"]
        ] },
        { type: "section", head: "What happened", md:
          "On 23 October 1956 students marched in Budapest with demands for free elections, a free press and the withdrawal of Soviet troops. Crowds pulled down a giant statue of Stalin, and when security police fired on protesters at the radio building, the march became an armed uprising. Workers formed councils, and the reform communist Imre Nagy became prime minister. Within days he announced a multi-party system and, on 1 November, that Hungary would leave the Warsaw Pact and become neutral." },
        { type: "section", head: "The crackdown", md:
          "Moscow would not accept it. On 4 November Soviet forces returned in strength and, after days of street fighting, crushed the resistance. About 2,500 Hungarians were killed and around 200,000 fled abroad, many to Austria. The West, distracted by the Suez crisis and unwilling to risk war, did not intervene. Nagy was seized, given a secret trial and hanged in 1958; hundreds of others were executed." },
        { type: "section", head: "The refugees", md:
          "Most of the 200,000 who fled crossed into Austria, which took them in at its own border towns. From there, tens of thousands went on to the United States, Canada, Britain, Australia and beyond, in one of the first big refugee resettlements of the Cold War. Many were young and skilled; some became prominent scientists, business people and artists abroad. Their story is part of why Hungarians' later hard line on migration surprised some outsiders." },
        { type: "section", head: "Kádár's bargain", md:
          "János Kádár, installed by Moscow, at first ruled with mass arrests. From the 1960s he softened: small private businesses, travel to the West and more consumer goods. 'Whoever is not against us is with us,' he said. 'Goulash communism' made Hungary the 'happiest barracks' in the Soviet bloc, but 1956 could only be called a 'counter-revolution'." },
        { type: "section", head: "The reburial", md:
          "On 16 June 1989, as communism was ending, Nagy and his fellow martyrs were reburied before a crowd of perhaps 250,000 in Budapest's Heroes' Square. The young Viktor Orbán, speaking for a new student party called Fidesz, made the most radical speech of the day, demanding that Soviet troops leave. It made his name. 23 October, the day the revolution began, is now a national holiday." },
        { type: "compare", head: "Two uses of 1956",
          left: { head: "The Orbán-era reading", md:
            "1956 was a national uprising for sovereignty against a foreign empire, a fight Hungary carries on against outside pressure today." },
          right: { head: "Opponents' reading", md:
            "1956 was a fight for democracy, a free press and the rule of law, the very things critics say Orbán's system eroded." } },
        { type: "section", head: "Why it matters", md:
          "Every Hungarian government claims 1956. Orbán compared Brussels to Moscow in his 23 October speeches; his opponents, including Magyar, held their own rallies on the same day. The revolution also explains Hungarians' wariness of Russia, which polls show survived Orbán's warm ties with Putin." }
      ],
      takeaways: [
        "In October 1956 a student march became a national uprising against Soviet rule, led by Imre Nagy.",
        "Soviet forces crushed it from 4 November; about 2,500 Hungarians died and 200,000 fled.",
        "Nagy's reburial in June 1989, where Orbán spoke, was a turning point in the end of communism."
      ],
      check: { q: "What did Imre Nagy announce on 1 November 1956?",
        choices: ["That Hungary would leave the Warsaw Pact", "That Hungary would join NATO", "That the revolution was over"], answer: 0,
        explain: "Nagy declared Hungary's neutrality and withdrawal from the Warsaw Pact; Soviet forces invaded three days later." },
      sources: [
        { title: "Hungarian Revolution", publisher: "Britannica", url: "https://www.britannica.com/event/Hungarian-Revolution-1956", date: "n.d." },
        { title: "Imre Nagy", publisher: "Britannica", url: "https://www.britannica.com/biography/Imre-Nagy", date: "n.d." },
        { title: "Hungarian Revolution of 1956", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hungarian_Revolution_of_1956", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "hu-4", kind: "players", asOf: "2026-10-22",
      title: "Magyar, Orbán, Baka",
      dek: "A prime minister who was once part of the system he is dismantling, the man who built it, and a judge back from exile.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/hu/hu-4-hero.webp",
          alt: "Illustration of a former Carmelite monastery building with a pale facade on a hilltop above a river, with a city spread below at dusk.",
          caption: "The Carmelite monastery in Buda Castle, which Orbán made the prime minister's office in 2019.",
          credit: "Illustration — not a photograph",
          prompt: "A pale two-storey baroque former monastery building on a hilltop castle district above a broad river, warm lit windows, a city with bridges spread below at dusk, a few small figures on the terrace seen from far away, calm and stately, no flags, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Péter Magyar", role: "Prime minister, since May 2026",
            img: "img/hu/portrait-magyar.webp", source: "European Parliament official photo via Wikimedia Commons; confirm the licence.",
            md: "A lawyer and former diplomat who held posts in Orbán's state and was married to his justice minister, Judit Varga. Broke with Fidesz in 2024, took over the small Tisza party and led it to a two-thirds win. Centre-right, pro-EU, tough on migration." },
          { name: "Viktor Orbán", role: "Leader of Fidesz",
            img: "img/hu/portrait-orban.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Prime minister 1998–2002 and 2010–2026. Gave up his seat after the defeat but was re-elected party leader unopposed in June 2026, promising a 'complete renewal'. Still close to Trump and Europe's nationalist right." },
          { name: "András Baka", role: "President, since August 2026",
            img: "img/hu/portrait-baka.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A former judge at the European Court of Human Rights and president of Hungary's Supreme Court, whose term Orbán's government cut short in 2012. Elected president by parliament while Fidesz boycotted the vote." },
          { name: "Anita Orbán", role: "Foreign minister",
            img: "img/hu/portrait-anita-orban.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A former Vodafone executive and Hungary's energy-security envoy in the 2010s; no relation to Viktor Orbán. Runs the repair of ties with Brussels and the EU's capitals." },
          { name: "András Kármán", role: "Finance minister",
            img: "img/hu/portrait-karman.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Tisza's budget and tax expert, now in charge of a deficit far bigger than the one Orbán's last budget promised, and of the talks to unlock EU funds." },
          { name: "László Toroczkai", role: "Leader of Our Homeland",
            img: "img/hu/portrait-toroczkai.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Head of the far-right Mi Hazánk (Our Homeland), the only other party in parliament, with six seats. Competes with Fidesz for the nationalist vote." }
        ] },
        { type: "section", head: "An insider's revolt", md:
          "Magyar's story is unusual: he did not come from the opposition that Orbán defeated again and again. He worked in Hungary's EU mission in Brussels and ran state companies, and his then wife was a Fidesz minister. When the 2024 pardon scandal broke ([[lesson:hu-12]]), he said the system was rotten and quit. That background let him speak to Fidesz voters in a way the old left-liberal opposition never could, and helped Tisza win rural seats Fidesz had held for years." },
        { type: "section", head: "Orbán in opposition", md:
          "Orbán, 63, now leads a party reduced to 52 seats and polling well below Tisza. He has said Fidesz needs younger leaders, but no rival has emerged, and some old loyalists have openly called for him to go. Several of his former ministers face corruption investigations, which Fidesz calls political revenge. His international network, from the Patriots for Europe group in the European Parliament to allies in Washington, remains." },
        { type: "section", head: "A one-party government", md:
          "Tisza governs alone, so there are no coalition partners to restrain or protect it. Its ministers are a mix of technocrats, lawyers and newcomers, many with no experience of government. The opposition in parliament is small: Fidesz–KDNP and Our Homeland. Outside it, the old left and liberal parties that fought Orbán for 16 years were almost wiped out in 2026." },
        { type: "compare", head: "Two views of Magyar",
          left: { head: "Supporters", md:
            "An insider who knows how the system works and has the mandate to dismantle it, while keeping what voters liked, such as border control." },
          right: { head: "Sceptics", md:
            "A former Fidesz man with Orbán's style: a one-man party with two-thirds and few checks, using the same tools on his rivals." } }
      ],
      takeaways: [
        "Péter Magyar, a former Fidesz insider, broke with the party in 2024 and became prime minister in May 2026.",
        "Viktor Orbán remains Fidesz leader in opposition, with 52 seats and several former ministers under investigation.",
        "András Baka, a judge pushed out by Orbán in 2012, became president in August 2026."
      ],
      check: { q: "Why was András Baka's election as president symbolic?",
        choices: ["He was Orbán's chosen successor", "Orbán's government had cut short his term as Supreme Court president", "He was the first president elected by voters"], answer: 1,
        explain: "In 2012 Orbán's government ended Baka's term as head of the Supreme Court early; the European Court of Human Rights later ruled that this violated his rights." },
      sources: [
        { title: "Peter Magyar unveils cabinet line-up", publisher: "bne IntelliNews", url: "https://www.intellinews.com/peter-magyar-unveils-cabinet-line-up-demands-orban-era-officials-resign-by-may-438331/", date: "2026-04" },
        { title: "Hungary's former PM Orban re-elected party leader despite election loss", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/13/hungarys-former-pm-orban-re-elected-party-leader-despite-election-loss", date: "2026-06-13" },
        { title: "Hungary parliament approves former judge Andras Baka as president", publisher: "Oman Observer / Reuters", url: "https://www.omanobserver.om/article/1194331/world/europe/hungary-parliament-approves-former-judge-andras-baka-as-president", date: "2026-08" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "hu-5", kind: "story", asOf: "2026-10-22",
      title: "The April landslide",
      dek: "After 16 years and four two-thirds victories, Orbán lost to a man who had been part of his world two years earlier.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/hu/hu-5-hero.webp",
          alt: "Illustration of a village polling station in a school at dawn, with a queue of people in coats waiting outside under bare trees.",
          caption: "Turnout on 12 April 2026 was a record, about 79%, and Tisza won even in rural Fidesz strongholds.",
          credit: "Illustration — not a photograph",
          prompt: "A small village school used as a polling station at dawn in early spring, a queue of people in coats seen from behind waiting at the door, bare trees, a church tower behind, a pale pink sky, calm determination, no faces, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "On 12 April 2026 Hungarians voted in record numbers, about 79% of those eligible. Tisza won 53% of the national list vote to Fidesz–KDNP's 39%, and 96 of the 106 constituencies, including many small towns and villages that had been Fidesz territory for 16 years. With list seats added, it took 141 of 199 seats. The far-right Our Homeland, with 5.6%, was the only other party to get in." },
        { type: "facts", head: "The result", rows: [
          ["Tisza", "53.2% of the list vote; 141 seats"],
          ["Fidesz–KDNP", "38.6%; 52 seats"],
          ["Our Homeland", "5.6%; 6 seats"],
          ["Turnout", "About 79%, a record"],
          ["Constituencies won by Tisza", "96 of 106"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Many things came together. The economy stagnated after 2022, and inflation, which reached about 25% in early 2023, was among the EU's highest; voters blamed the government. The EU's freeze on funds hurt hospitals, schools and towns. The 2024 pardon scandal damaged Fidesz's claim to defend families. And Magyar ran a relentless campaign, visiting hundreds of towns and talking about health care, corruption and pensions rather than the culture wars Orbán preferred." },
        { type: "section", head: "Fidesz's campaign", md:
          "Fidesz said Magyar would drag Hungary into the war in Ukraine and obey Brussels, and Orbán campaigned with support from Trump and Europe's nationalist leaders. It dominated television and billboards, as it had for years. This time it did not work: polls had shown Tisza ahead for more than a year, and the anti-war message failed to move voters worried about the cost of living." },
        { type: "section", head: "The opposition that vanished", md:
          "In 2022 six opposition parties ran together against Orbán and won about 34% of the list vote. In 2026 Tisza absorbed most of their voters. None of the older parties of the left and liberal centre passed the 5% threshold, so the parties that had fought Orbán for 16 years have no seats at all. The new parliament has only three groups: Tisza, Fidesz–KDNP and the far-right Our Homeland." },
        { type: "section", head: "Election night", md:
          "Orbán conceded on election night, a peaceful handover that his critics had doubted would happen. Magyar disputed one constituency in Vas County, alleging fraud, but the overall result was not in question. On 9 May the new parliament elected him prime minister by 140 votes to 54." },
        { type: "compare", head: "Two readings of the result",
          left: { head: "A vote for change", md:
            "Hungarians rejected corruption and a stagnant economy and showed that even a tilted system can be beaten at the ballot box." },
          right: { head: "A vote against fatigue", md:
            "After 16 years voters were tired, but many still share Orbán's views on migration and Ukraine, which is why Magyar kept them." } },
        { type: "section", head: "What's next", md:
          "The size of the win gave Magyar the two-thirds majority he needed to change the constitution, and he moved fast ([[lesson:hu-6]]). The next national election is due in spring 2030." }
      ],
      takeaways: [
        "Tisza won 53% and 141 of 199 seats on record turnout of about 79% on 12 April 2026.",
        "A stagnant economy, high inflation, frozen EU funds and the 2024 pardon scandal all hurt Fidesz.",
        "Orbán conceded on election night, and parliament elected Magyar prime minister on 9 May."
      ],
      check: { q: "Roughly how many of the 106 constituencies did Tisza win?",
        choices: ["About half", "Almost all, 96", "Fewer than Fidesz"], answer: 1,
        explain: "Tisza won 96 constituencies, including many rural ones Fidesz had held since 2010." },
      sources: [
        { title: "Final Hungarian election results confirm supermajority for Tisza", publisher: "bne IntelliNews", url: "https://www.intellinews.com/final-hungarian-election-results-confirm-supermajority-for-tisza-438174/", date: "2026-04" },
        { title: "Tisza beat Fidesz on its home turf", publisher: "Átlátszó", url: "https://english.atlatszo.hu/2026/04/15/tisza-beat-fidesz-on-its-home-turf-causing-a-massive-political-shift-in-rural-hungary/", date: "2026-04-15" },
        { title: "Peter Magyar voted in as prime minister of Hungary", publisher: "Qatar News Agency", url: "https://qna.org.qa/en/News-Area/News/2026-5/10/peter-magyar-voted-in-as-prime-minister-of-hungary", date: "2026-05-10" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "hu-6", kind: "story", asOf: "2026-10-22",
      title: "Taking the system apart",
      dek: "In five months Tisza removed the president, retired top judges, shut down state news and arrested two former ministers.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/hu/hu-6-hero.webp",
          alt: "Illustration of a darkened television studio with empty news desks, cameras and dimmed lights, seen through a glass wall.",
          caption: "State television news on M1 was halted in July 2026 while public media was rebuilt.",
          credit: "Illustration — not a photograph",
          prompt: "A darkened television news studio seen through a glass wall, empty curved news desks, cameras on tripods pointing at nothing, dimmed blue screens and a few work lamps, quiet and suspended, no people, no logos, no legible text." },
        { type: "section", head: "What happened", md:
          "Magyar called his victory a mandate for 'regime change', and used Tisza's two-thirds majority quickly. A June amendment limited any prime minister to eight years in office, counting Orbán's time. The 17th amendment, passed on 13 July by 139 votes to 6, ended President Tamás Sulyok's term, restored the retirement age of 70 for constitutional judges, cut their terms and created a new National Asset Recovery and Protection Office to trace public money misused under Fidesz." },
        { type: "facts", head: "Five months", rows: [
          ["27 June", "Law dissolving the state media agency MTVA takes effect"],
          ["13 July", "17th amendment passed"],
          ["20 July", "President Sulyok's term ends"],
          ["19 August", "András Baka takes office as president"],
          ["28 September", "Two former ministers lose immunity and are detained"]
        ] },
        { type: "section", head: "The president", md:
          "Sulyok, elected by Fidesz in 2024, refused to resign, saying there was no legal reason to. Tisza wrote his removal into the constitution and prepared impeachment if he did not sign. On 18 July he signed, while calling the change a trampling of constitutional principles. Parliament then elected András Baka, a judge Orbán's government had pushed out in 2012, while Fidesz boycotted the vote." },
        { type: "section", head: "Media and money", md:
          "A new media law dissolved MTVA, which ran state television, radio and the news agency and which critics called a government mouthpiece, and created new public broadcasters overseen by an independent council. State TV news stopped for weeks while new teams were hired. The asset recovery office can take over cases from prosecutors and issue warrants. On 28 September parliament lifted the immunity of two former ministers, Miklós Seszták and Balázs Hankó, accused of bribery and misuse of a culture fund; both deny wrongdoing." },
        { type: "compare", head: "Two views of the dismantling",
          left: { head: "The government's view", md:
            "Orbán captured the state; voters gave Tisza two-thirds to free it. Removing his loyalists and prosecuting theft is restoring the rule of law, not breaking it." },
          right: { head: "Fidesz's view", md:
            "Tisza is doing what it accused Orbán of: purging officials, ending fixed terms and building 'a coercive machinery' to persecute the opposition." } },
        { type: "section", head: "Why it matters", md:
          "Legal scholars outside Hungary are split. Some argue that rules written to entrench one party have no claim to respect; others warn that removing a president or judges by constitutional amendment sets a precedent the next majority could use. The EU, which criticised Orbán for similar moves, has largely welcomed Magyar's, a contrast Fidesz highlights." },
        { type: "section", head: "Smaller signals", md:
          "Tisza has also made symbolic moves. Parliament cut MPs' pay, and Magyar waived his own parliamentary immunity, saying no one should be above the law. Supporters see a culture change; critics point out that the large structural changes still depend on one party's two-thirds and one man's word." },
        { type: "section", head: "What's next", md:
          "Tisza has promised a new constitution to replace Orbán's 2011 one, and trials of former officials. Magyar told the AP in October that accountability 'must follow the rule of law', and admitted voters want faster results." }
      ],
      takeaways: [
        "Tisza used its two-thirds majority to end the president's term, retire senior judges and cap a prime minister at eight years.",
        "A new law dissolved the state media agency, and a new office pursues money misused under Fidesz.",
        "Supporters call it restoring the rule of law; Fidesz calls it a purge using Orbán's own methods."
      ],
      check: { q: "How did Tisza remove President Sulyok?",
        choices: ["By a court ruling", "By amending the constitution to end his term", "He was defeated in a popular vote"], answer: 1,
        explain: "The 17th amendment ended his term on 20 July; he signed it under the threat of impeachment." },
      sources: [
        { title: "Amending Hungary's constitution to dismantle Fidesz's grip on power", publisher: "OSW", url: "https://www.osw.waw.pl/en/publikacje/analyses/2026-07-14/amending-hungarys-constitution-to-dismantle-fideszs-grip-power", date: "2026-07-14" },
        { title: "Hungary's president agrees to step down amid push from Magyar", publisher: "Kyiv Independent", url: "https://kyivindependent.com/hungarys-president-agrees-to-step-down-amid-push-from-magyar/", date: "2026-07" },
        { title: "With two Orbán-era ministers detained, Magyar's 'Operation Purge' takes shape", publisher: "Euronews", url: "https://euronews.com/2026/09/29/with-two-orban-era-ministers-detained-magyars-operation-purge-takes-shape", date: "2026-09-29" },
        { title: "Hungary got a fresh start. Will its media?", publisher: "Columbia Journalism Review", url: "https://www.cjr.org/analysis/hungary-got-a-fresh-start-will-its-media.php", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "hu-7", kind: "story", asOf: "2026-10-22",
      title: "Brussels, Moscow and Kyiv",
      dek: "The new government is winning back EU money and dropping Orbán's vetoes, but it still buys Russian energy and won't arm Ukraine.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/hu/hu-7-hero.webp",
          alt: "Illustration of an oil pipeline running across a flat green plain toward a distant refinery with tall chimneys, under a wide sky.",
          caption: "Hungary still gets most of its oil through the Druzhba pipeline from Russia.",
          credit: "Illustration — not a photograph",
          prompt: "A large steel oil pipeline on supports running in a straight line across a flat green plain toward a distant refinery with tall chimneys and storage tanks, a wide sky with high clouds, late morning light, industrial and calm, no people, no logos, no legible text." },
        { type: "section", head: "What happened", md:
          "Orbán spent years at odds with Brussels. The EU froze billions in funds over corruption and judicial independence, and Hungary vetoed or delayed decisions on [[unit:ua|Ukraine]] and [[unit:ru|Russia]]. Within weeks of the election, Hungary lifted its veto on the EU's €90 billion loan to Ukraine, though it does not contribute. In May Magyar and Commission President Ursula von der Leyen agreed a plan to release up to €16 billion, and in September the Commission proposed unlocking €4.2 billion after Hungary met its rule-of-law conditions." },
        { type: "section", head: "Why it's not a full turn", md:
          "Magyar is cautious on Ukraine. He opposes fast-tracking its EU membership, saying a country at war cannot join, and wants Hungarians to vote on it in a referendum at the end. He will not send Hungarian weapons. Many of Tisza's voters share Orbán's wariness of the war, and about 150,000 ethnic Hungarians live in western Ukraine, where language laws remain a grievance." },
        { type: "section", head: "Energy", md:
          "Hungary is landlocked and gets most of its oil through the Soviet-era Druzhba pipeline and much of its gas from Russia via TurkStream. The new government's programme aims to end Russian energy dependence by 2035 but says Russian oil and gas are needed until then. It is also reviewing Paks II, two new nuclear reactors that Russia's Rosatom began building in February 2026. The EU's ban on Russian gas takes full effect in autumn 2027, and Hungary is expected to seek exemptions." },
        { type: "section", head: "Money", md:
          "The government needs the EU money. Orbán's last budget promised a deficit of 3.7% of GDP; Tisza's revised figure is 7.5%, partly from election-year spending it inherited and partly from its own promises to raise pensions and child benefits. Growth is weak, under 2% this year. The EU funds would pay for investment the budget cannot." },
        { type: "section", head: "The Druzhba dispute", md:
          "The loan veto had a story behind it. In February 2026 Orbán blocked the €90 billion package in a dispute with Kyiv over the Druzhba pipeline, whose deliveries to Hungary had been interrupted. When Hungary lifted the veto in April, the oil company MOL said Ukraine's pipeline operator was ready to resume deliveries. The episode showed how energy and politics remain tangled between the two neighbours." },
        { type: "compare", head: "Two views of the new line",
          left: { head: "The government's view", md:
            "Hungary is back in the European mainstream but keeps its own interests: cheap energy, no weapons for a war on its border, and its voters' say on enlargement." },
          right: { head: "Critics in Kyiv and the Baltics", md:
            "The tone has changed more than the policy. Buying Russian energy and slowing Ukraine's EU path still serves Moscow." } },
        { type: "section", head: "What's next", md:
          "EU governments have a month to approve the €4.2 billion. The bigger tests are the Paks II decision, Hungary's stance on the 2027 gas ban, and how it votes when Ukraine's accession talks open their next chapters." }
      ],
      takeaways: [
        "Hungary lifted Orbán's veto on the EU's €90 billion Ukraine loan and is winning back frozen EU funds.",
        "Magyar opposes fast-track EU membership for Ukraine and will not send weapons.",
        "Hungary still relies on Russian oil and gas and is reviewing the Russian-built Paks II nuclear plant."
      ],
      check: { q: "What is the new government's target for ending dependence on Russian energy?",
        choices: ["Immediately", "2027, with the EU ban", "2035"], answer: 2,
        explain: "Tisza's programme aims to end Russian energy dependence by 2035, later than the EU's 2027 gas-ban deadline." },
      sources: [
        { title: "Von der Leyen says Hungary strengthened rule of law, unlocks €4.2bn in EU funding", publisher: "Euronews", url: "https://euronews.com/2026/09/23/von-der-leyen-says-hungary-strengthened-rule-of-law-unlocks-42bn-in-eu-funding", date: "2026-09-23" },
        { title: "EU to finalize €90bn Ukraine loan, as Hungary lifts veto", publisher: "Insight Hungary", url: "https://insighthungary.444.hu/2026/04/25/eu-to-finalize-90bn-ukraine-loan-as-hungary-lifts-veto", date: "2026-04-25" },
        { title: "Hungary's energy ties to Russia set limits on post-Orbán pivot", publisher: "bne IntelliNews", url: "https://www.intellinews.com/hungary-s-energy-ties-to-russia-set-limits-on-post-orb-n-pivot-437186/", date: "2026" },
        { title: "Hungarian government unveils amendments to 2026 budget", publisher: "bne IntelliNews", url: "https://www.intellinews.com/hungarian-government-unveils-amendments-to-2026-budget-463238/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "hu-12", kind: "spotlight", asOf: "2026-10-22",
      title: "The pardon that broke a system",
      dek: "A quiet act of clemency in a children's-home abuse case brought down Hungary's president and set off Orbán's fall.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/hu/hu-12-hero.webp",
          alt: "Illustration of a crowd holding up phone lights at night in a square in front of a pale palace on a hill.",
          caption: "Protesters gathered outside the presidential palace in Budapest in February 2024.",
          credit: "Illustration — not a photograph",
          prompt: "A large crowd seen from behind at night in a square, many holding up small glowing phone lights, a pale classical palace lit up on a hill behind, winter coats and breath in cold air, quiet anger, no faces, no flags, no legible text." },
        { type: "facts", head: "The scandal", rows: [
          ["The pardon", "April 2023, during Pope Francis's visit to Hungary"],
          ["Who was pardoned", "The deputy director of a children's home in Bicske, convicted of helping cover up the director's abuse"],
          ["Revealed", "February 2024, by independent media"],
          ["Resigned", "President Katalin Novák and former justice minister Judit Varga, 10 February 2024"],
          ["What followed", "Péter Magyar broke with Fidesz and founded a movement"]
        ] },
        { type: "section", head: "A hidden decision", md:
          "In April 2023, during a visit by Pope Francis, President Katalin Novák pardoned about two dozen prisoners. One was the deputy director of a state children's home in Bicske, convicted of pressuring victims to withdraw their accusations against the director, who had abused boys in his care. Nobody announced it. When the independent news site 444 revealed it in early February 2024, it caused uproar, especially because Fidesz had built its image on protecting children and families." },
        { type: "section", head: "Why it hit so hard", md:
          "Family policy was at the heart of Orbán's politics: tax breaks and loans for parents, and a 2021 'child protection' law that banned showing homosexuality or gender change to minors, which the EU took to court. Novák herself had been the minister for families. A pardon in a case about protecting children from abuse cut against all of it, and it reached voters who did not usually follow politics." },
        { type: "section", head: "The fall", md:
          "Novák, a close Orbán ally and the first woman to be president, resigned on 10 February 2024, saying 'I made a mistake.' Judit Varga, the former justice minister who had countersigned the pardon and was to lead Fidesz's list in the European election, quit public life the same day. Orbán proposed a constitutional ban on pardons for crimes against children. Protesters said the resignations did not reach the top." },
        { type: "section", head: "Enter Magyar", md:
          "Days later Varga's former husband, Péter Magyar, gave interviews accusing Orbán's inner circle of using the two women as scapegoats and describing a system of privilege and propaganda he had seen from inside. He released a recording of a conversation with Varga about interference in a corruption case. Huge crowds came to his rallies. He took over a tiny party, Tisza, and in June 2024 won 30% in the European Parliament election, the strongest challenge Orbán had faced in years." },
        { type: "compare", head: "Two views of Magyar's break",
          left: { head: "Admirers", md:
            "A man who gave up a privileged life to tell the truth about a corrupt system and gave a demoralised country hope." },
          right: { head: "Critics", md:
            "A Fidesz insider who stayed silent for years and turned only when it suited him, using a private marriage for politics." } },
        { type: "section", head: "Why it matters", md:
          "The scandal showed how a system that looked unbeatable can crack from a small, morally clear event, and how much a defector who speaks the ruling party's language can do. Two years later, Magyar was prime minister and Fidesz was in opposition ([[lesson:hu-5]])." }
      ],
      takeaways: [
        "In 2023 President Novák secretly pardoned a man convicted of helping cover up child abuse.",
        "When it emerged in February 2024, Novák and Judit Varga resigned.",
        "Varga's ex-husband Péter Magyar broke with Fidesz, took over Tisza and won 30% in the June 2024 European election."
      ],
      check: { q: "Who countersigned the controversial 2023 pardon?",
        choices: ["Viktor Orbán", "Justice Minister Judit Varga", "Péter Magyar"], answer: 1,
        explain: "As justice minister, Varga countersigned the pardon; she resigned from public life when it emerged." },
      sources: [
        { title: "Katalin Novák presidential pardon scandal", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Katalin_Nov%C3%A1k_presidential_pardon_scandal", date: "2024" },
        { title: "Katalin Novák has resigned", publisher: "Telex", url: "https://telex.hu/english/2024/02/10/katalin-novak-has-resigned", date: "2024-02-10" },
        { title: "2024 European Parliament election in Hungary", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2024_European_Parliament_election_in_Hungary", date: "2024" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "hu-8", kind: "now", asOf: "2026-10-22",
      title: "Where things stand",
      dek: "A government with a huge mandate, a shrunken opposition, a budget hole and a promise to write a new constitution.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/hu/hu-8-hero.webp",
          alt: "Illustration of a chain suspension bridge across a wide river at sunrise, with a domed basilica and city buildings on the far bank.",
          caption: "The Chain Bridge in Budapest, linking Buda and Pest.",
          credit: "Illustration — not a photograph",
          prompt: "A classic nineteenth-century chain suspension bridge with two stone arched towers across a wide river at sunrise, a domed basilica and ornate city buildings on the far bank, soft gold and pink sky, mist on the water, a fresh start, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Tisza governs alone with 141 of 199 seats.\n" +
          "- **Opposition:** Fidesz–KDNP has 52 seats; Orbán leads the party from outside parliament.\n" +
          "- **Institutions:** a new president, a reshaped Constitutional Court and new public media.\n" +
          "- **Accountability:** two former ministers detained; the asset recovery office has taken over several cases.\n" +
          "- **Money:** a deficit target of 7.5% of GDP and billions in EU funds on the way." },
        { type: "section", head: "Hungary in the world", md:
          "Hungary has gone from the EU's chief blocker to a mostly ordinary member. It no longer vetoes [[sanctions]] on [[unit:ru|Russia]] or aid to [[unit:ua|Ukraine]], though it doesn't contribute to the latter, and it is rebuilding ties with [[unit:de|Germany]] and [[unit:pl|Poland]]. Orbán's warm relations with Moscow and Beijing have cooled, but Chinese investment, such as the big battery plant in Debrecen, continues. Ties with Trump's [[unit:us|United States]], close under Orbán, are now more formal." },
        { type: "section", head: "The economy", md:
          "Growth is weak, inflation has fallen sharply to under 2%, and the forint has strengthened. The budget is the problem: big promises on pensions and child benefits, an inherited election-year spending spree and an EU [[excessive-deficit-procedure|excessive-deficit procedure]] already open. EU funds and lower borrowing costs are the government's hope." },
        { type: "section", head: "What voters want", md:
          "Polls suggest voters want faster results on corruption, better hospitals and higher pensions. Tisza's ratings rose after the election, while Fidesz fell to under 20% in some polls. The risk for Magyar is the usual one for a government elected on hope: that prosecutions drag, money runs short and voters lose patience." },
        { type: "section", head: "Inside Fidesz", md:
          "Fidesz re-elected Orbán unopposed in June 2026, but only for a year, and he has said the party needs a 'complete renewal' and younger leaders. Some former loyalists have openly called on him to step aside, the first such criticism since 2010. With its media empire weakened and several former ministers under investigation, the party is learning to be an opposition for the first time in a generation." },
        { type: "section", head: "Three scenarios", md:
          "- **A clean rebuild.** A new constitution with broad support, fair trials, EU money flowing and growth returning.\n" +
          "- **A mirror image.** Tisza keeps the levers Orbán built and uses them for itself, and Hungary's institutions stay partisan.\n" +
          "- **Fidesz recovers.** Economic pain and fatigue with prosecutions revive a renewed, perhaps post-Orbán, Fidesz by 2030." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Late October 2026:** EU governments vote on releasing €4.2 billion\n" +
          "- **23 October:** the anniversary of the 1956 revolution, a big day for rallies\n" +
          "- **Autumn 2026:** the 2027 budget and the decision on Paks II\n" +
          "- **Autumn 2027:** the EU's full ban on Russian gas\n" +
          "- **Spring 2030:** the next general election" },
        { type: "section", head: "Connections", md:
          "Hungary's story runs through [[unit:ru]] (energy and Orbán's old ties), [[unit:ua]] (the war next door and the Hungarian minority), [[unit:pl]] (another country rebuilding after a nationalist government), [[unit:de]] (its car industry and biggest trading partner) and [[unit:us]] (Orbán's admirers in Trump's Washington)." }
      ],
      takeaways: [
        "Tisza governs alone with a two-thirds majority and is rebuilding Hungary's institutions.",
        "Hungary has stopped blocking EU decisions on Ukraine and Russia and is winning back frozen funds.",
        "A large deficit and voters' impatience over corruption cases are the government's biggest risks."
      ],
      check: { q: "What is the main economic problem facing the new government?",
        choices: ["Runaway inflation", "A large budget deficit", "A collapsing forint"], answer: 1,
        explain: "Inflation has fallen and the forint has strengthened, but the deficit target is 7.5% of GDP, far above EU rules." },
      sources: [
        { title: "Hungary's Magyar vows accountability for Orbán era while holding firm on migration", publisher: "AP via ABC News", url: "https://abcnews.com/International/wireStory/hungarys-magyar-vows-accountability-orbn-era-holding-firm-137437319", date: "2026-10-21" },
        { title: "Economic forecast for Hungary", publisher: "European Commission", url: "https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages/hungary/economic-forecast-hungary_en", date: "2026" },
        { title: "Von der Leyen says Hungary strengthened rule of law, unlocks €4.2bn in EU funding", publisher: "Euronews", url: "https://euronews.com/2026/09/23/von-der-leyen-says-hungary-strengthened-rule-of-law-unlocks-42bn-in-eu-funding", date: "2026-09-23" }
      ]
    }
  ]
});
