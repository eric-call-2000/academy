/* ============================================================
   Unit 5 — Ukraine 🇺🇦
   Research note and sources: tools/research/ua.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ua", {
  id: "ua",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ua-1", kind: "snapshot", asOf: "2026-09-28",
      title: "Ukraine in brief",
      dek: "Europe's largest country after Russia, fighting for its survival since 2022, and the place where the continent's security order is being decided.",
      blocks: [
        { type: "map", src: "maps/ua.svg",
          alt: "Locator map of Eastern Europe with Ukraine highlighted within its internationally recognised borders, Crimea shown hatched, and a small globe showing its place in the world.",
          caption: "Ukraine within its internationally recognised borders. Hatched: Crimea, annexed by Russia in 2014. Russia also occupies large parts of the east and south, about a fifth of the country in all.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Kyiv"],
          ["Size", "603,500 km², the largest country entirely in Europe"],
          ["People", "Hard to count in wartime: millions have fled abroad or live under occupation"],
          ["System", "Semi-presidential republic; under martial law since February 2022"],
          ["President", "Volodymyr Zelensky, elected in 2019"],
          ["Prime minister", "Serhiy Koretskyi, since July 2026"],
          ["Occupied", "About a fifth of the country, including Crimea and most of the Donbas"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Ukraine is where the largest war in Europe since 1945 is being fought. Its outcome will decide whether borders in Europe can be changed by force, how much [[unit:us]] and Europe will pay for their security, and what kind of country [[unit:ru]] becomes.\n\n" +
          "It also matters in its own right: a country of tens of millions with some of the world's richest farmland, a major grain exporter to Africa and the Middle East, and a defence industry that now builds millions of drones a year." },
        { type: "section", head: "A country at war", md:
          "Since Russia's full-scale invasion on 24 February 2022, Ukraine has lived under [[martial law]]. Men of military age mostly cannot leave the country, cities are hit by missiles and drones almost nightly, and the national budget is devoted largely to the army, while foreign aid pays for pensions, schools and hospitals.\n\n" +
          "The front runs for more than 1,000 kilometres, from the north-east to the Black Sea coast. It has moved only slowly since late 2022, with Russia gaining ground at great cost in the Donbas." },
        { type: "section", head: "Who holds power", md:
          "President Volodymyr Zelensky, a former comedian and television star elected in a landslide in 2019, has led the country through the war. His five-year term would have ended in 2024, but the constitution bars elections under martial law, so he remains in office. His office, now run by the former military intelligence chief Kyrylo Budanov, is the centre of power.\n\n" +
          "Ukraine's parliament and government, its independent anti-corruption agencies and a lively press all push back on the presidency in ways that wartime has not stopped." },
        { type: "section", head: "Grain and the Black Sea", md:
          "Ukraine is one of the world's biggest exporters of wheat, maize and sunflower oil. When Russia pulled out of a UN-backed deal to let grain ships sail in July 2023, Ukraine opened its own shipping corridor along its coast after driving much of Russia's Black Sea fleet away from its waters with sea drones and missiles. Exports through Odesa and nearby ports have continued ever since, despite frequent strikes on the ports." },
        { type: "section", head: "What Ukraine wants", md:
          "Ukraine's government wants a ceasefire along the current front line, firm guarantees from Western allies that Russia cannot attack again, the return of its people and prisoners, and a path into the European Union and, eventually, NATO. It says it will never legally recognise Russia's annexations." },
        { type: "callout", tone: "why", md:
          "If Ukraine is forced to give up territory without guarantees, many European governments fear Russia will try again, there or elsewhere. If it holds, it becomes one of the most battle-hardened and technologically advanced militaries in Europe." }
      ],
      takeaways: [
        "Ukraine has fought Russia's full-scale invasion since February 2022; Russia occupies about a fifth of its territory.",
        "It has been under martial law since then, so no national elections have been held and Zelensky remains president.",
        "It wants a ceasefire on the current line, Western security guarantees and a path into the EU."
      ],
      check: { q: "Why hasn't Ukraine held a presidential election since 2019?",
        choices: ["Zelensky abolished them", "The constitution bars elections under martial law", "Russia vetoed them"], answer: 1,
        explain: "Ukraine's constitution does not allow national elections while martial law is in force, which it has been since the 2022 invasion." },
      sources: [
        { title: "War in Ukraine (Global Conflict Tracker)", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine", date: "2026-09" },
        { title: "Mapping Russian attacks and territorial gains across Ukraine", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/24/mapping-russian-attacks-and-territorial-gains-across-ukraine", date: "2026-02-24" },
        { title: "Zelenskyy appoints Budanov as head of President's Office", publisher: "Ukrainska Pravda", url: "https://www.pravda.com.ua/eng/news/2026/01/02/8014417/", date: "2026-01-02" },
        { title: "Rada Appoints Koretsky as Ukraine's Prime Minister in Sweeping Wartime Cabinet Reshuffle", publisher: "Kyiv Post", url: "https://www.kyivpost.com/post/80366", date: "2026-07-16" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ua-2", kind: "power", asOf: "2026-09-28",
      title: "Governing under martial law",
      dek: "A strong president, a parliament that still argues, and anti-corruption agencies that answer to no one in the government.",
      blocks: [
        { type: "diagram", src: "img/ua/ua-2-power.svg",
          alt: "Diagram of power in Ukraine. There has been no national election since 2019 because of martial law. The president, Volodymyr Zelensky, is commander-in-chief and nominates the prime minister. The Verkhovna Rada approves the prime minister and cabinet, led since July 2026 by Serhiy Koretskyi. Independent anti-corruption bodies, NABU and SAPO, investigate and prosecute. EU and IMF money is tied to reform.",
          caption: "A semi-presidential system, bent by war toward the presidency, but still checked by parliament, independent agencies and foreign partners.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "President and parliament", md:
          "Ukraine is a semi-presidential republic. The president is elected directly for five years, commands the armed forces, runs foreign and security policy and chairs the National Security and Defence Council. The [[Verkhovna Rada]], a 450-seat parliament, passes laws and the budget and approves the prime minister and cabinet, whom the president in practice chooses.\n\n" +
          "Zelensky's Servant of the People party won an outright majority in 2019, the first in Ukraine's history, but defections and vacancies have left it depending on votes from other groups for difficult laws." },
        { type: "section", head: "Martial law", md:
          "[[Martial law]], declared on 24 February 2022 and renewed by parliament every 90 days, gives the state wide powers: it limits men's travel abroad, allows curfews, merged the main TV channels into a single wartime news broadcast, and bars national elections. Parliament keeps sitting and voting, and courts keep working.\n\n" +
          "Critics argue that the long suspension of elections and the unified broadcast concentrate power in the president's office. The government's answer is that a country with a fifth of its land occupied and millions abroad cannot hold a fair vote while missiles fall." },
        { type: "section", head: "Regions and front-line towns", md:
          "Ukraine is divided into 24 regions, or oblasts, plus Crimea. Since 2022, towns near the front have been run by military administrations rather than elected councils, and in occupied areas Russia has installed its own officials, issued Russian passports and held votes that Ukraine and most of the world do not recognise. How to reintegrate those areas, and their people, is one of the hardest questions any peace will face." },
        { type: "section", head: "The anti-corruption watchdogs", md:
          "After the 2014 revolution, and under pressure from the EU, the IMF and the United States, Ukraine created independent anti-corruption bodies: the National Anti-Corruption Bureau ([[NABU]]) to investigate, a specialised prosecutor's office (SAPO) to prosecute, and a High Anti-Corruption Court to try senior officials.\n\n" +
          "They are deliberately beyond the control of the president and government, and they have used that independence. In 2025–26 they uncovered the biggest scandal of the war, reaching into Zelensky's inner circle, as [[lesson:ua-7]] explains." },
        { type: "section", head: "Allies as a check", md:
          "Ukraine's budget depends on foreign money, and that money comes with conditions. The European Union and the IMF tie their loans to reforms of the courts, the anti-corruption system and public finances. When the government moved to curb NABU's independence in July 2025, protests at home and warnings from Brussels forced it to reverse the law within days." },
        { type: "compare", head: "Two views of wartime power",
          left: { head: "The government's view", md:
            "A country fighting for survival needs a clear chain of command. Martial law is temporary, parliament still works, and elections will follow as soon as a ceasefire makes them safe and fair." },
          right: { head: "Critics' view", md:
            "Too much power has gathered in the presidential office, which has run the country through a small circle. The war cannot become an excuse to weaken the checks Ukraine built after 2014." } }
      ],
      takeaways: [
        "Ukraine is a semi-presidential republic; wartime has shifted power toward the president's office.",
        "Martial law, renewed every 90 days since 2022, bars national elections but parliament and courts still sit.",
        "Independent anti-corruption bodies (NABU, SAPO and a special court) and foreign lenders act as strong checks."
      ],
      check: { q: "What happened when Ukraine's government tried to curb NABU's independence in July 2025?",
        choices: ["Parliament abolished NABU", "Protests and EU warnings forced it to reverse the law within days", "The IMF took over NABU"], answer: 1,
        explain: "Street protests, the first big ones since the invasion, and pressure from Brussels led parliament to restore NABU's independence at the end of July 2025." },
      sources: [
        { title: "Explainer: How Ukraine's biggest corruption scheme persisted despite all odds", publisher: "The Kyiv Independent", url: "https://kyivindependent.com/explainer-how-ukraines-biggest-corruption-scheme-persisted-despite-all-odds/", date: "2026" },
        { title: "A 'Tsunami' for Ukraine: Zelensky Rejects Wartime Elections", publisher: "TIME", url: "https://time.com/article/2026/08/24/volodymyr-zelensky-elections-ukraine-wartime-mykhailo-fedorov/", date: "2026-08-24" },
        { title: "Ukraine: corruption scandal involving senior government officials continues", publisher: "OSW Centre for Eastern Studies", url: "https://www.osw.waw.pl/en/publikacje/analyses/2026-05-13/ukraine-corruption-scandal-involving-senior-government-officials", date: "2026-05-13" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "ua-9", kind: "founding", asOf: "2026-09-28",
      title: "1991: independence",
      dek: "A nation with a thousand-year history and centuries of foreign rule voted overwhelmingly to leave the Soviet Union.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua/ua-9-hero.webp",
          alt: "Illustration of a golden-domed monastery on a green hill above a wide river, with a city beyond, in soft summer light.",
          caption: "Kyiv, on the Dnipro, capital of medieval Rus and of independent Ukraine.",
          credit: "Illustration — not a photograph",
          prompt: "A white monastery with gleaming golden domes on a wooded hill above a wide river, a city spreading beyond, soft summer evening light, peaceful and historic, no people close up, no flags, no legible text." },
        { type: "timeline", head: "The long road to 1991", items: [
          ["988", "Kyivan Rus adopts Christianity"],
          ["1648", "Cossack uprising under Bohdan Khmelnytsky"],
          ["1917–21", "A short-lived Ukrainian People's Republic"],
          ["1922", "Ukraine becomes a Soviet republic"],
          ["24 Aug 1991", "Parliament declares independence"],
          ["1 Dec 1991", "92% vote for independence in a referendum"],
          ["1994", "Budapest Memorandum: Ukraine gives up nuclear weapons"]
        ] },
        { type: "section", head: "Between empires", md:
          "Ukrainians trace their state to Kyivan Rus, the medieval realm centred on Kyiv. After the Mongol conquest, Ukrainian lands were ruled for centuries by Lithuania, Poland, the Ottoman-backed Crimean Khanate, Russia and Austria. In the 17th century Cossacks, free warrior communities on the steppe, rose against Poland and built their own 'Hetmanate', which later fell under Russian control. The Russian Empire called Ukrainians 'Little Russians' and restricted publishing in the Ukrainian language in the 19th century." },
        { type: "section", head: "Soviet Ukraine", md:
          "After the 1917 revolution, a Ukrainian People's Republic declared independence but was overrun in a chaotic civil war, and in 1922 Ukraine became a founding republic of the Soviet Union. Soviet rule brought industrialisation, but also the famine of 1932–33, the Holodomor (see the next briefing), the Great Terror, and the devastation of the Second World War, when Ukraine was a main battlefield and much of its Jewish population was murdered in the Holocaust. Stalin annexed western Ukraine from Poland in 1939, and in 1954 Crimea was transferred from Russia to Ukraine within the USSR." },
        { type: "section", head: "Independence", md:
          "Under Gorbachev's reforms, Ukrainians organised a national movement, Rukh. After a failed hardline coup in Moscow in August 1991, Ukraine's parliament declared independence on 24 August. On 1 December, 92% of voters approved it in a referendum, including majorities in every region, among them Crimea and the Russian-speaking east. A week later the leaders of Russia, Ukraine and Belarus agreed to dissolve the Soviet Union. Leonid Kravchuk, a former Communist official, became the first president." },
        { type: "section", head: "Nuclear weapons and borders", md:
          "Ukraine inherited the world's third-largest nuclear arsenal, about 1,900 strategic warheads. In the 1994 Budapest Memorandum it agreed to hand them to Russia in exchange for assurances from Russia, the US and the UK to respect its independence and borders. A friendship treaty with Russia in 1997 recognised those borders. Many Ukrainians now see the disarmament as a historic mistake, because the assurances did not prevent Russia's seizure of Crimea in 2014 and full invasion in 2022." },
        { type: "compare", head: "Two stories of Ukraine",
          left: { head: "Ukraine's view", md:
            "A distinct nation with its own language, culture and history of struggle for freedom, which chose independence democratically in 1991." },
          right: { head: "The Kremlin's view", md:
            "Putin argues Ukrainians and Russians are 'one people' and that modern Ukraine is an artificial creation; historians overwhelmingly reject this." } },
        { type: "section", head: "Why it still matters", md:
          "The war is, at root, about whether the 1991 independence and borders stand. The Budapest Memorandum's failure also shapes debates worldwide about nuclear weapons and security guarantees, including what guarantees Ukraine should get in any peace deal." }
      ],
      takeaways: [
        "Ukrainians trace their history to Kyivan Rus and spent centuries under Polish, Russian and other rule.",
        "On 1 December 1991, 92% voted for independence, with majorities in every region.",
        "In 1994 Ukraine gave up the world's third-largest nuclear arsenal for security assurances that failed."
      ],
      check: { q: "What did Ukraine get in exchange for giving up its nuclear weapons in 1994?",
        choices: ["NATO membership", "Assurances from Russia, the US and the UK to respect its borders", "Nothing"], answer: 1,
        explain: "The Budapest Memorandum gave security assurances, not binding guarantees; Russia later violated them." },
      sources: [
        { title: "Ukraine: History", publisher: "Britannica", url: "https://www.britannica.com/place/Ukraine/History", date: "n.d." },
        { title: "Ukraine, Nuclear Weapons, and Security Assurances at a Glance", publisher: "Arms Control Association", url: "https://www.armscontrol.org/factsheets/ukraine-nuclear-weapons-and-security-assurances-glance", date: "n.d." },
        { title: "The Budapest Memorandum 1994 After 30 Years", publisher: "National Security Archive", url: "https://nsarchive.gwu.edu/briefing-book/nato-75-russia-programs/2024-12-05/budapest-memorandum-1994-after-30-years-non", date: "2024-12-05" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ua-3", kind: "history", asOf: "2026-09-28",
      title: "Independence, revolutions, invasion",
      dek: "Thirty-five years in which Ukraine kept turning West, and Russia kept trying to stop it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua/ua-3-hero.webp",
          alt: "Illustration of a snowy city square at night filled with tents and a huge crowd around braziers, seen from above.",
          caption: "Kyiv's Independence Square, the Maidan, was the heart of revolutions in 2004 and 2013–14.",
          credit: "Illustration — not a photograph",
          prompt: "A large snowy city square at night seen from above, filled with tents, a huge crowd gathered around smoking braziers, a tall white column monument, warm firelight against blue snow, plain flags without symbols, no legible signs." },
        { type: "timeline", head: "The short version", items: [
          ["1991", "Over 90% vote for independence as the Soviet Union collapses"],
          ["1994", "Ukraine gives up its nuclear weapons in return for security assurances"],
          ["2004", "The Orange Revolution overturns a rigged election"],
          ["2014", "The Maidan revolution; Russia annexes Crimea and backs war in the Donbas"],
          ["2022", "Russia's full-scale invasion"]
        ] },
        { type: "section", head: "1. Independence (1991)", md:
          "Ukraine had been ruled from Moscow for most of the previous three centuries and suffered terribly under Stalin, above all in the Holodomor, the man-made famine of 1932–33 in which millions died. On 1 December 1991, more than 90% of voters chose independence, including majorities in Crimea and the Donbas. Within weeks the Soviet Union was gone." },
        { type: "section", head: "2. The nuclear bargain (1994)", md:
          "Independent Ukraine inherited the world's third-largest nuclear arsenal. In the 1994 Budapest Memorandum it agreed to give the weapons up, in return for assurances from Russia, the United States and the United Kingdom that they would respect its independence and borders. Russia's later annexation of Crimea broke that promise; many Ukrainians see the memorandum as the lesson that paper guarantees are not enough." },
        { type: "section", head: "3. Two revolutions (2004 and 2014)", md:
          "In 2004 mass protests in Kyiv, the Orange Revolution, forced a rerun of a rigged presidential election. In late 2013 President Viktor Yanukovych abandoned a planned agreement with the European Union under Russian pressure, and protesters filled the Maidan again. After police and snipers killed around 100 protesters in February 2014, Yanukovych fled to Russia." },
        { type: "section", head: "4. Crimea and the Donbas (2014–21)", md:
          "Within weeks Russian forces seized Crimea, and Moscow annexed it after a referendum held under occupation and recognised by almost no one. Russia then armed and led separatists in the eastern Donbas region. The Minsk agreements of 2014–15 froze the fighting but never ended it; about 14,000 people died by 2021. In 2019 Ukrainians elected Zelensky, an outsider who promised to end the war and fight corruption." },
        { type: "section", head: "Language and identity", md:
          "Many Ukrainians, especially in the east and south, grew up speaking Russian at home. Since 2014, and far more since 2022, millions have switched to Ukrainian in daily life, and national identity has hardened. In 2019 Ukraine's Orthodox Church won independence from Moscow's patriarchate. The war that Putin justified as protecting Russian speakers has done more than anything to turn them against Russia." },
        { type: "section", head: "5. The invasion (2022–)", md:
          "On 24 February 2022 Russia invaded from the north, east and south. It expected to take Kyiv in days and was driven back within weeks; the withdrawal revealed massacres of civilians in towns such as Bucha. Ukraine recaptured Kharkiv region and the city of Kherson that autumn, but a 2023 counteroffensive failed to break Russian lines, and since then the war has been a slow grind of drones, artillery and trenches." }
      ],
      takeaways: [
        "Ukraine voted overwhelmingly for independence in 1991 and gave up its nuclear weapons in 1994 for security assurances.",
        "Two revolutions, in 2004 and 2014, turned it toward Europe; Russia answered by seizing Crimea and backing war in the Donbas.",
        "Russia's 2022 invasion failed to take Kyiv and became a grinding war of attrition."
      ],
      check: { q: "What did Ukraine give up under the 1994 Budapest Memorandum?",
        choices: ["Crimea", "Its nuclear weapons", "Its Black Sea fleet"], answer: 1,
        explain: "Ukraine handed over the Soviet nuclear weapons on its soil in return for assurances, including from Russia, that its borders would be respected." },
      sources: [
        { title: "Ukraine profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-europe-18010123", date: "n.d." },
        { title: "War in Ukraine (Global Conflict Tracker)", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine", date: "2026-09" },
        { title: "Budapest Memorandum on Security Assurances", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Budapest_Memorandum_on_Security_Assurances", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "ua-10", kind: "past", asOf: "2026-09-28",
      title: "The Holodomor",
      dek: "In 1932–33 millions of Ukrainians starved in a famine caused by Stalin's policies. Ukraine and many countries call it genocide.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua/ua-10-hero.webp",
          alt: "Illustration of a bare, empty wheat field under a leaden sky with a lone abandoned wooden house and a leafless tree.",
          caption: "Ukraine, the Soviet 'breadbasket', starved while grain was taken away.",
          credit: "Illustration — not a photograph",
          prompt: "A vast bare harvested field under a heavy leaden sky, a lone abandoned whitewashed village house with a thatched roof and an empty doorway, a leafless tree, cold and desolate, no people, no legible text." },
        { type: "facts", head: "The famine", rows: [
          ["Years", "1932–33"],
          ["Deaths in Ukraine", "About 3.5 to 5 million, by most scholarly estimates"],
          ["Cause", "Forced collectivisation, grain requisitions, blacklists and a ban on leaving"],
          ["Remembrance day", "Fourth Saturday of November"],
          ["Recognition as genocide", "Ukraine (2006) and over 30 countries, including the US and Germany"]
        ] },
        { type: "section", head: "Collectivisation", md:
          "From 1929 Stalin forced peasants across the Soviet Union into collective farms, seizing land, livestock and tools. Better-off farmers, labelled 'kulaks', were deported or shot. Peasants resisted, slaughtering animals rather than hand them over, and harvests fell. In Ukraine, the country's richest farming region and a centre of national feeling, Moscow set grain quotas that could not be met." },
        { type: "section", head: "Starvation by policy", md:
          "When villages failed to deliver, the authorities took everything. Brigades searched homes and confiscated food; villages were 'blacklisted' and cut off from supplies; a 1932 law made the theft of even a handful of grain from collective fields punishable by death. In January 1933 peasants were forbidden to leave Ukraine and the Kuban region to look for food. Meanwhile the Soviet Union continued to export grain. People ate grass, bark and pets, and there were cases of cannibalism. By most estimates, between 3.5 and 5 million people died in Ukraine." },
        { type: "section", head: "Silence and denial", md:
          "The Soviet government denied the famine for decades, and some Western journalists, notably Walter Duranty of The New York Times, played it down, while the Welsh reporter Gareth Jones described it. Ukrainians could not speak of it openly until the late 1980s. At the same time, Stalin purged Ukraine's Communist leaders and cultural figures, which many historians see as part of an assault on Ukrainian national identity." },
        { type: "section", head: "Was it genocide?", md:
          "Ukraine's parliament declared the Holodomor, meaning 'death by hunger', a genocide in 2006, and more than 30 countries, including the United States, Germany, Canada and Poland, have done so, several since Russia's 2022 invasion. Some historians argue that Stalin deliberately targeted Ukrainians as a nation; others see a catastrophe caused by brutal policies that also devastated Kazakhstan, where a larger share of the population died, and parts of Russia. Russia rejects the genocide label." },
        { type: "compare", head: "Two interpretations",
          left: { head: "A genocide", md:
            "Measures such as blacklists and the ban on leaving were aimed specifically at Ukraine, alongside the destruction of its elite, showing intent to break the Ukrainian nation." },
          right: { head: "A Soviet-wide crime", md:
            "Collectivisation killed millions across the USSR; the famine was a crime against humanity but not aimed at Ukrainians as such, some historians argue." } },
        { type: "section", head: "Why it still matters", md:
          "For Ukrainians, the Holodomor is a founding trauma and a warning about Russian rule, one invoked often since 2022, when Russian forces blockaded Ukrainian grain exports. Each November, Ukrainians light candles in their windows in remembrance, and a national museum of the Holodomor stands on a hill above the Dnipro in Kyiv." }
      ],
      takeaways: [
        "Stalin's collectivisation and grain seizures caused a famine that killed about 3.5 to 5 million people in Ukraine in 1932–33.",
        "Villages were blacklisted and peasants barred from leaving to find food.",
        "Ukraine and more than 30 countries recognise the Holodomor as genocide; Russia rejects the term."
      ],
      check: { q: "What does 'Holodomor' mean?",
        choices: ["Great revolution", "Death by hunger", "Collective farm"], answer: 1,
        explain: "The word combines the Ukrainian for hunger and for killing or death." },
      sources: [
        { title: "Holodomor", publisher: "Britannica", url: "https://www.britannica.com/event/Holodomor", date: "n.d." },
        { title: "Holodomor Basic Facts", publisher: "Holodomor Research and Education Consortium", url: "https://holodomor.ca/resource/holodomor-basic-facts/", date: "n.d." },
        { title: "Germany recognizes Holodomor as genocide against Ukrainian people", publisher: "The Kyiv Independent", url: "https://kyivindependent.com/germany-recognizes-holodomor-as-genocide-against-ukrainian-people/", date: "2022-11-30" }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "ua-11", kind: "past", asOf: "2026-09-28",
      title: "Chernobyl",
      dek: "In April 1986 a reactor near Kyiv exploded. The disaster, and the lies about it, helped bring down the Soviet Union.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua/ua-11-hero.webp",
          alt: "Illustration of an abandoned city of concrete apartment blocks overgrown with trees, with a rusting Ferris wheel in the foreground.",
          caption: "Pripyat, the city of 49,000 evacuated after the Chernobyl explosion, has stood empty ever since.",
          credit: "Illustration — not a photograph",
          prompt: "An abandoned Soviet city of concrete apartment blocks overgrown with birch trees, a rusting yellow Ferris wheel in the foreground, empty streets, overcast light, eerie silence, no people, no legible text." },
        { type: "timeline", head: "The disaster", items: [
          ["26 Apr 1986, 01:23", "Reactor No. 4 explodes during a safety test"],
          ["27 Apr", "Pripyat evacuated, 36 hours later"],
          ["28 Apr", "Sweden detects radiation; Moscow admits an accident"],
          ["1 May", "May Day parades go ahead in Kyiv"],
          ["2000", "The last reactor shuts down"],
          ["2022", "Russian troops occupy the site for five weeks"]
        ] },
        { type: "section", head: "The explosion", md:
          "In the early hours of 26 April 1986, operators at the Chernobyl nuclear power plant, about 100 kilometres north of Kyiv, ran a poorly designed safety test on reactor No. 4. A flawed reactor design and breaches of procedure caused a power surge; the reactor exploded and its graphite core burned for days, releasing radioactive material across Ukraine, Belarus, Russia and much of Europe. Two workers died that night; 28 plant staff and firefighters died of acute radiation sickness within months." },
        { type: "section", head: "Secrecy", md:
          "The authorities evacuated the nearby city of Pripyat only 36 hours later, telling residents they would be away for three days. Moscow admitted an accident only after Swedish monitors detected radiation on 28 April. Days later, May Day parades went ahead in Kyiv, with children marching as radiation drifted over the city. Eventually about 350,000 people were resettled, and a 30-kilometre exclusion zone remains. Hundreds of thousands of 'liquidators' were sent to clean up, many with little protection." },
        { type: "section", head: "The toll", md:
          "The long-term death toll is disputed. A UN-led study in 2005 projected up to about 4,000 eventual cancer deaths among the most exposed people; other scientists and groups estimate tens of thousands across Europe. Thousands of thyroid cancers in children who drank contaminated milk are clearly linked to the disaster. Belarus, downwind, received much of the fallout." },
        { type: "section", head: "Glasnost and independence", md:
          "Mikhail Gorbachev later said Chernobyl was perhaps the real cause of the Soviet Union's collapse. The cover-up discredited the system, and his policy of glasnost, openness, gained force as people demanded the truth. In Ukraine, anger at Moscow's handling of the disaster helped feed the environmental and national movement that led to independence in 1991." },
        { type: "section", head: "The zone today", md:
          "The exclusion zone has become an accidental wildlife reserve, home to wolves, elk and rare wild horses, and a site for scientists and, before 2022, tourists. A giant steel arch, completed in 2016 with international funding, covers the ruined reactor." },
        { type: "compare", head: "Lessons drawn",
          left: { head: "A failure of the Soviet system", md:
            "Secrecy, fear of reporting bad news and disregard for human life turned an accident into a catastrophe." },
          right: { head: "A warning about nuclear power", md:
            "Some see Chernobyl, with Fukushima in 2011, as proof that nuclear power is too dangerous; others note that modern reactors are far safer." } },
        { type: "section", head: "Why it still matters", md:
          "Chernobyl returned to the news in 2022, when Russian troops occupied the site for five weeks, digging trenches in contaminated soil, and in February 2025, when a drone struck the giant shelter over the ruined reactor, which Ukraine blamed on Russia. Russia's occupation of the Zaporizhzhia nuclear plant, Europe's largest, keeps the fear of another disaster alive, and international inspectors remain stationed there to monitor it." }
      ],
      takeaways: [
        "Reactor No. 4 at Chernobyl exploded on 26 April 1986, spreading radiation across Europe.",
        "Soviet secrecy delayed evacuation and warnings; about 350,000 people were eventually resettled.",
        "The cover-up discredited Soviet rule and fed Ukraine's independence movement."
      ],
      check: { q: "How did the world first learn of the Chernobyl disaster?",
        choices: ["A Soviet announcement that night", "Swedish monitors detected radiation", "A leak to the press in Kyiv"], answer: 1,
        explain: "Moscow admitted an accident only after radiation was detected at a Swedish nuclear plant on 28 April." },
      sources: [
        { title: "Chernobyl disaster", publisher: "Britannica", url: "https://www.britannica.com/event/Chernobyl-disaster", date: "n.d." },
        { title: "Chernobyl Accident 1986", publisher: "World Nuclear Association", url: "https://world-nuclear.org/information-library/safety-and-security/safety-of-plants/chernobyl-accident", date: "2022" },
        { title: "Chernobyl: the true scale of the accident", publisher: "World Health Organization", url: "https://www.who.int/news/item/05-09-2005-chernobyl-the-true-scale-of-the-accident", date: "2005-09-05" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "ua-4", kind: "players", asOf: "2026-09-28",
      title: "Zelensky and the people around him",
      dek: "A wartime president, his spy-chief chief of staff, a new prime minister, and the general who could beat him in an election.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua/ua-4-hero.webp",
          alt: "Illustration of a government building in Kyiv at night, its windows sandbagged, with a single lit office.",
          caption: "Ukraine's government has worked from sandbagged buildings since the first days of the invasion.",
          credit: "Illustration — not a photograph",
          prompt: "A grand government building in an Eastern European capital at night, lower windows walled with sandbags, a single upper office window lit, bare winter trees, empty street with a checkpoint barrier, quiet resolve." },
        { type: "people", head: "Six to know", items: [
          { name: "Volodymyr Zelensky", role: "President, since 2019",
            img: "img/ua/portrait-zelensky.webp", source: "President.gov.ua official photo (CC BY 4.0) via Wikimedia Commons; confirm the licence on the file page.",
            md: "A former comedian who became the face of Ukraine's resistance. Rules out elections until a ceasefire; still the country's most popular politician in first-round polls, but vulnerable in a run-off." },
          { name: "Kyrylo Budanov", role: "Head of the Presidential Office, since January 2026",
            img: "img/ua/portrait-budanov.webp", source: "Official photo; find a CC-licensed version on Wikimedia Commons and confirm the licence.",
            md: "Ukraine's military intelligence chief from 2020, known for daring operations deep in Russia. Replaced Andriy Yermak after the corruption scandal forced Yermak out." },
          { name: "Serhiy Koretskyi", role: "Prime minister, since July 2026",
            img: "img/ua/portrait-koretskyi.webp", source: "Official photo (kmu.gov.ua); confirm the licence on Wikimedia Commons.",
            md: "The former head of Naftogaz, the state energy company, confirmed by 289 votes. His government's priorities are the defence industry and getting through another winter." },
          { name: "Oleksandr Syrskyi", role: "Commander-in-chief of the armed forces",
            img: "img/ua/portrait-syrskyi.webp", source: "Official photo (Ministry of Defence, CC BY 4.0); confirm the licence.",
            md: "In charge of the war since early 2024, including the 2024 incursion into Russia's Kursk region; criticised by some soldiers for costly defensive battles." },
          { name: "Valerii Zaluzhnyi", role: "Ambassador to the UK; former commander-in-chief",
            img: "img/ua/portrait-zaluzhnyi.webp", source: "Official photo (CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "Led the army through 2022–23 and was replaced in 2024. Has not declared any political ambitions, yet polls show him level with Zelensky in a first round and ahead in a run-off." },
          { name: "Mykhailo Fedorov", role: "Former defence minister (January–July 2026)",
            img: "img/ua/portrait-fedorov.webp", source: "Official photo (CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "The architect of Ukraine's drone and digital war effort, promoted to defence minister in January 2026 and removed in July's reshuffle, a move analysts at Chatham House argued backfired on Zelensky." }
        ] },
        { type: "section", head: "The soldiers", md:
          "The army's biggest problem is people. Ukraine lowered its mobilisation age from 27 to 25 in 2024 and has offered special contracts to volunteers aged 18 to 24, but infantry units remain short of men, and many soldiers have served for years without relief. Mobilisation is unpopular and sometimes heavy-handed, and it is one of the most sensitive issues in Ukrainian politics." },
        { type: "section", head: "Allies who matter", md:
          "Outside Ukraine, the people who shape its fate include European leaders in London, Paris, Berlin and Warsaw, who fund its budget and lead the planning for a post-ceasefire force; the European Commission, which runs the €90 billion loan and accession talks; and the American envoys who carry proposals between Kyiv and Moscow." },
        { type: "section", head: "The inner circle", md:
          "For most of the war Zelensky governed through a small group around his chief of staff, Andriy Yermak, who handled diplomacy, appointments and peace talks and was widely seen as the second most powerful person in the country. The Operation Midas scandal forced Yermak out in November 2025, and in May 2026 he was charged with money laundering, which he denies.\n\n" +
          "Zelensky has since reshuffled his team twice, bringing in Budanov as chief of staff in January and a new prime minister in July." },
        { type: "section", head: "The polls", md:
          "A September 2026 poll put Zelensky at 19.1% and Zaluzhnyi at 19.0% in a hypothetical first round, with Zaluzhnyi winning a run-off by 46% to 28%. Other surveys earlier in 2026 showed Zelensky further ahead. Trust in Zelensky personally remains higher than in most Ukrainian institutions, but war fatigue and the corruption scandal have taken a toll." }
      ],
      takeaways: [
        "Zelensky governs through a small team; Kyrylo Budanov has run his office since the corruption scandal toppled Andriy Yermak.",
        "Serhiy Koretskyi, former head of Naftogaz, became prime minister in July 2026.",
        "Former army chief Valerii Zaluzhnyi, now ambassador in London, runs level with Zelensky in polls."
      ],
      check: { q: "Who replaced Andriy Yermak as head of the Presidential Office?",
        choices: ["Valerii Zaluzhnyi", "Kyrylo Budanov", "Serhiy Koretskyi"], answer: 1,
        explain: "Kyrylo Budanov, the military intelligence chief, took over on 2 January 2026. Koretskyi became prime minister in July; Zaluzhnyi is ambassador to the UK." },
      sources: [
        { title: "Volodymyr Zelenskyy names spy chief Kyrylo Budanov as new top aide", publisher: "ABC News (Australia)", url: "https://www.abc.net.au/news/2026-01-03/volodymyr-zelenskyy-names-kyrylo-budanov-as-top-aide/106195996", date: "2026-01-03" },
        { title: "Ukraine gets a new prime minister. Who is Serhii Koretskyi?", publisher: "Ukrainska Pravda", url: "https://www.pravda.com.ua/eng/news/2026/07/16/8044351/", date: "2026-07-16" },
        { title: "Sociopolis Poll: Zelensky and Zaluzhny Lead September 2026 Presidential Ratings", publisher: "Inkorr", url: "https://inkorr.com/en/opituvanna-sociopolis-zelenskij-ta-zaluznij-lidiruut-u-prezidentskomu-rejtingu-veresna-2026-roku-347930", date: "2026-09" },
        { title: "How the dismissal of Ukraine's popular defence minister backfired for Zelenskyy", publisher: "Chatham House", url: "https://www.chathamhouse.org/2026/07/how-dismissal-ukraines-popular-defence-minister-backfired-zelenskyy", date: "2026-07" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "ua-5", kind: "story", asOf: "2026-09-28",
      title: "A war of drones",
      dek: "Cheap drones have changed how the war is fought, from the trenches to Russian air bases thousands of kilometres away, and to the power stations that keep Ukraine warm.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua/ua-5-hero.webp",
          alt: "Illustration of a drone operator in a dugout at dawn, seen from behind, watching a screen, with a small quadcopter resting on a crate.",
          caption: "Drones now cause most casualties on the front line, according to military analysts.",
          credit: "Illustration — not a photograph",
          prompt: "Inside a log-lined dugout at dawn, a soldier seen from behind in winter gear watching a small glowing screen, a small quadcopter drone resting on a wooden ammunition crate, cables and a radio, cold blue light through a gap, focus and tension, no insignia." },
        { type: "section", head: "What happened: the front", md:
          "Since 2023 the front line has been dominated by drones. Small, cheap first-person-view drones, flown by operators miles away, hunt tanks, trucks and soldiers, making it very hard for either side to mass troops for a breakthrough. Ukraine builds millions a year in hundreds of workshops, and Russia has scaled up just as fast.\n\n" +
          "The result is a slow war. Russia occupies about a fifth of Ukraine and has advanced in the Donbas, but at a very high cost in lives and equipment for each kilometre." },
        { type: "section", head: "What happened: deep strikes", md:
          "Ukraine has also taken the war into Russia. In Operation Spiderweb on 1 June 2025, drones smuggled in trucks were launched from inside Russia against air bases as far away as Siberia, damaging strategic bombers. From August 2025 Ukrainian long-range drones repeatedly hit Russian oil refineries, some more than 1,000 kilometres from the front, causing fuel shortages in several Russian regions.\n\n" +
          "Russia, in turn, has fired waves of drones and missiles at Ukrainian cities and its power grid, including Iranian-designed Shahed drones now built in Russia, sometimes several hundred in a single night. In January 2026, with temperatures near −20°C, strikes left millions without electricity or heating, and Kyiv suffered its worst blackouts of the war. By February only about 11.5 gigawatts of Ukraine's generating capacity remained available." },
        { type: "facts", head: "By the numbers", rows: [
          ["Operation Spiderweb", "1 June 2025: drones launched from inside Russia hit air bases"],
          ["Refinery strikes", "Repeated since August 2025, some over 1,000 km from the front"],
          ["January 2026", "Temperatures near −20°C; millions without power or heat"],
          ["Generating capacity", "About 11.5 GW available by February 2026"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Both sides lack the numbers of trained soldiers and armoured vehicles that big offensives need, and drones are cheap, quick to build and hard to stop. Striking energy is a way to pressure the other side's economy and people without advancing on the ground. Ukraine argues its targets are military and economic; Russia's strikes on power and heating in winter have been condemned by the UN's human rights chief." },
        { type: "compare", head: "Two views of the strikes",
          left: { head: "Kyiv's view", md:
            "Refineries fuel Russia's army and pay for the war, so they are legitimate targets. Russia's attacks on homes, hospitals and heating are meant to freeze civilians into surrender." },
          right: { head: "Moscow's view", md:
            "Its strikes target energy that powers Ukraine's military industry, and Ukraine's attacks on refineries, ports and tankers are terrorism that threatens civilians and world energy markets." } },
        { type: "section", head: "What's next", md:
          "Winter is coming again. On 14 September 2026 Trump announced that both sides had agreed to stop hitting each other's energy infrastructure; Kyiv said it would comply only if Russia's commitment proved genuine. Whether that pause holds will shape how Ukrainians get through the cold months." }
      ],
      takeaways: [
        "Cheap drones dominate the front line and make large breakthroughs very hard, so the front moves slowly.",
        "Ukraine strikes deep into Russia, from bombers in Siberia (June 2025) to oil refineries across the country.",
        "Russia's winter strikes on Ukraine's grid left millions without power or heat in January 2026."
      ],
      check: { q: "What was Operation Spiderweb (1 June 2025)?",
        choices: ["A Russian cyberattack on Kyiv", "A Ukrainian drone strike on Russian air bases launched from inside Russia", "A NATO air-defence exercise"], answer: 1,
        explain: "Ukraine smuggled drones into Russia in trucks and launched them at several air bases, damaging strategic bombers as far away as Siberia." },
      sources: [
        { title: "Kyiv is freezing in the dark as Russian strikes leave Ukraine's capital powerless", publisher: "NBC News", url: "https://www.nbcnews.com/world/ukraine/kyiv-freezing-dark-russian-strikes-leave-ukraines-capital-powerless-rcna254359", date: "2026-01" },
        { title: "Cold and dark: UN rights chief condemns Russian strikes on Ukraine's power grid", publisher: "UN News", url: "https://news.un.org/en/story/2026/01/1166798", date: "2026-01" },
        { title: "Ukraine's drone attacks hit more Russian refineries and create fuel shortages", publisher: "Fortune", url: "https://fortune.com/2026/06/28/ukraine-drone-attacks-russian-refineries-fuel-shortages-siberia/", date: "2026-06-28" },
        { title: "Ukraine's energy system under attack", publisher: "International Energy Agency", url: "https://www.iea.org/reports/ukraines-energy-security-and-the-coming-winter/ukraines-energy-system-under-attack", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "ua-6", kind: "story", asOf: "2026-09-28",
      title: "Negotiating under fire",
      dek: "From a shouting match in the Oval Office to a minerals deal, a 28-point plan and truces that collapsed: the peace process seen from Kyiv.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua/ua-6-hero.webp",
          alt: "Illustration of a long corridor in a grand government building with two groups of officials walking toward each other, seen from far away.",
          caption: "Ukraine has had to negotiate with Washington as hard as with Moscow.",
          credit: "Illustration — not a photograph",
          prompt: "A long, grand corridor with marble floors and tall windows, two small groups of officials in dark coats walking toward each other from opposite ends, seen from far away, soft winter light, a sense of careful diplomacy, no flags or legible signs." },
        { type: "section", head: "What happened", md:
          "Ukraine's relationship with Trump's Washington began badly. On 28 February 2025 a meeting between Zelensky, Trump and Vice President JD Vance in the Oval Office turned into a public shouting match, and US intelligence sharing was briefly paused. Relations recovered with a minerals deal in April, which set up a joint investment fund for Ukraine's natural resources.\n\n" +
          "In November 2025 a 28-point plan drafted by US envoy Steve Witkoff and Russia's Kirill Dmitriev leaked. It asked Ukraine to give up the rest of the Donbas, cap its army and rule out NATO. After talks in Geneva on 23 November, Ukraine and the US produced a shorter draft of 19 points that removed much of the original." },
        { type: "timeline", head: "How the talks went, from Kyiv", items: [
          ["28 Feb 2025", "Oval Office clash; US intelligence sharing briefly paused"],
          ["30 Apr 2025", "US–Ukraine minerals deal signed"],
          ["15 Aug 2025", "Trump–Putin summit in Alaska, without Ukraine"],
          ["Nov 2025", "28-point plan leaks; Geneva talks cut it to 19 points"],
          ["Sep 2026", "US announces a halt to energy strikes; Kyiv sceptical"]
        ] },
        { type: "section", head: "Security guarantees", md:
          "For Kyiv the key question is what stops Russia from attacking again. Its allies have discussed several answers: a European 'coalition of the willing', led by the United Kingdom and France, ready to send forces to Ukraine after a ceasefire; American support for that force; and long-term arms supplies to make the Ukrainian army itself the main deterrent.\n\n" +
          "Russia rejects any Western troops in Ukraine. The gap between those positions, along with the fate of the Donbas, is why no draft has been signed." },
        { type: "section", head: "Truces that didn't hold", md:
          "In 2026 every ceasefire attempt broke down within days: a 32-hour Easter truce in April collapsed amid hundreds of reported violations, a pause on strikes on Kyiv and Moscow expired on 7 September, and a US-announced halt to energy strikes on 14 September was met with scepticism in Kyiv. Prisoner exchanges, by contrast, have continued throughout, often brokered by Turkey or the United Arab Emirates." },
        { type: "compare", head: "The argument inside Ukraine",
          left: { head: "Those who favour a deal soon", md:
            "Ukraine is running short of soldiers and money; a ceasefire on the current line, even an imperfect one, would save lives and let the country rebuild and move toward the EU." },
          right: { head: "Those who say not on these terms", md:
            "Giving up land Ukraine still holds, without firm guarantees, would reward aggression and invite another invasion in a few years. Pressure should go on Russia, not Kyiv." } },
        { type: "section", head: "What's next", md:
          "US envoys continue to shuttle between capitals, and Europe has promised to keep Ukraine funded through 2027. Watch for any movement on the Donbas and on guarantees: without both, no ceasefire is likely to last. Kyiv's red line is unchanged: no withdrawal from land it holds without guarantees it trusts." }
      ],
      takeaways: [
        "Relations with Washington went from an Oval Office clash in February 2025 to a minerals deal and joint peace drafts.",
        "A Russian-US 28-point plan in November 2025 was cut to 19 points after Ukraine pushed back.",
        "Security guarantees and the Donbas remain the unresolved issues; every 2026 truce collapsed."
      ],
      check: { q: "What did the US–Ukraine minerals deal of April 2025 create?",
        choices: ["A US military base in Ukraine", "A joint investment fund for Ukraine's natural resources", "A ban on Ukrainian grain exports"], answer: 1,
        explain: "The agreement set up a joint fund, shared by the two governments, to invest in Ukraine's minerals, oil and gas, linking American economic interests to Ukraine's future." },
      sources: [
        { title: "Ukraine peace talks (November 2025 to March 2026)", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10411/", date: "2026" },
        { title: "Russia–Ukraine: turbulent diplomacy", publisher: "IISS", url: "https://www.iiss.org/online-analysis/online-analysis/2025/11/russiaukraine-turbulent-diplomacy/", date: "2025-11" },
        { title: "Peace negotiations in the Russo-Ukrainian war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Peace_negotiations_in_the_Russo-Ukrainian_war", date: "2026-09" },
        { title: "Ukraine-Russia peace talks: How US envoys and a 28-point plan failed to secure deal", publisher: "The Week", url: "https://www.theweek.in/magazine/theweek/more/2026/09/12/ukraine-russia-peace-talks-how-us-envoys-and-a-28-point-plan-failed-to-secure-deal.html", date: "2026-09-12" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "ua-7", kind: "story", asOf: "2026-09-28",
      title: "The war at home",
      dek: "A kickback scheme at the state nuclear company, the fall of Zelensky's right-hand man, two government reshuffles, and the question of when Ukrainians will vote again.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua/ua-7-hero.webp",
          alt: "Illustration of young protesters holding blank cardboard signs in a city square on a summer evening, seen from behind.",
          caption: "In July 2025 thousands protested in Kyiv against a law that curbed anti-corruption agencies; it was reversed within days.",
          credit: "Illustration — not a photograph",
          prompt: "Young people holding blank handmade cardboard signs in a city square on a warm summer evening, seen from behind, a grand theatre building in the background, soft golden light, a peaceful but determined crowd, no legible text on the signs." },
        { type: "section", head: "What happened: Operation Midas", md:
          "In November 2025 Ukraine's anti-corruption bureau, [[NABU]], revealed Operation Midas: an investigation into a scheme that allegedly took about $100 million in kickbacks from contractors of Energoatom, the state nuclear energy company, at a time when the grid was under constant attack. The alleged organiser, Tymur Mindich, a former business partner of Zelensky, fled to Israel before he could be charged.\n\n" +
          "The scandal reached the top. Two ministers resigned, and on 28 November Zelensky's chief of staff, Andriy Yermak, stepped down after his home was searched. In May 2026 Yermak was charged with laundering about 460 million hryvnias through a luxury housing project near Kyiv, and released on bail. He denies wrongdoing." },
        { type: "section", head: "The reshuffles", md:
          "Zelensky responded by changing his team. In January 2026 the military intelligence chief, Kyrylo Budanov, took over the presidential office, and Mykhailo Fedorov moved to the defence ministry. In July, parliament dismissed Prime Minister Yulia Svyrydenko's government and approved Serhiy Koretskyi, the former head of Naftogaz, with 289 votes; Fedorov was removed in the same reshuffle.\n\n" +
          "Supporters say the changes brought in managers for a long war. Critics say they reflect a president protecting his authority rather than sharing it." },
        { type: "timeline", head: "How it unfolded", items: [
          ["Jul 2025", "Protests force parliament to restore NABU's independence"],
          ["Nov 2025", "Operation Midas; ministers resign; Yermak steps down"],
          ["Jan 2026", "Budanov takes over the presidential office"],
          ["May 2026", "Yermak charged with money laundering; released on bail"],
          ["Jul 2026", "New government under Serhiy Koretskyi"]
        ] },
        { type: "section", head: "Why it matters", md:
          "Corruption scandals matter doubly in wartime. They anger soldiers and taxpayers, and they give ammunition to politicians in the US and Europe who oppose aid. But the fact that independent Ukrainian investigators could pursue the president's closest aide is also, for many Western officials, evidence that the reforms since 2014 work." },
        { type: "callout", tone: "why", md:
          "Ukraine's EU and IMF money depends on showing that corruption is being fought, not hidden. How the Yermak case ends will be read closely in Brussels and Washington, and by Ukrainians deciding whom to trust after the war." },
        { type: "section", head: "The election question", md:
          "Elections cannot legally be held under martial law, and in August 2026 Zelensky said voting was 'impossible' while Russia refuses a ceasefire. Trump and Putin have both called for Ukrainian elections, for different reasons. Most Ukrainians, according to polls, do not want a vote while the fighting continues, but they want one soon after it stops." },
        { type: "compare", head: "Two readings",
          left: { head: "Ukraine's institutions are working", md:
            "Independent investigators charged the president's own former chief of staff. That is what a country on the path to EU membership should look like." },
          right: { head: "The problem runs deep", md:
            "A $100 million scheme in the energy sector during wartime, reaching the president's inner circle, shows how much power sits with a small group, and how weak its oversight was." } }
      ],
      takeaways: [
        "Operation Midas exposed an alleged $100 million kickback scheme at Energoatom, reaching Zelensky's inner circle.",
        "Chief of staff Andriy Yermak resigned in November 2025 and was charged in May 2026; he denies wrongdoing.",
        "Zelensky reshuffled his team in January and July 2026; elections remain impossible under martial law."
      ],
      check: { q: "Which state company was at the centre of Operation Midas?",
        choices: ["Naftogaz", "Energoatom", "Ukrzaliznytsia (the railways)"], answer: 1,
        explain: "Investigators allege contractors of Energoatom, the state nuclear energy company, paid kickbacks worth about $100 million." },
      sources: [
        { title: "Explainer: How Ukraine's biggest corruption scheme persisted despite all odds", publisher: "The Kyiv Independent", url: "https://kyivindependent.com/explainer-how-ukraines-biggest-corruption-scheme-persisted-despite-all-odds/", date: "2026" },
        { title: "A test for Ukraine, a dilemma for Zelensky: What's at stake in the Andriy Yermak corruption probe", publisher: "France 24", url: "https://www.france24.com/en/europe/20260515-test-for-ukraine-dilemma-zelensky-what-stake-andriy-yermak-corruption-probe", date: "2026-05-15" },
        { title: "Zelensky's chief of staff resigns amid corruption probe", publisher: "Axios", url: "https://www.axios.com/2025/11/28/zelensky-chief-staff-yermak-resign-scandal-corruption", date: "2025-11-28" },
        { title: "Government reshuffle in Ukraine: Parliament dismisses Prime Minister Yulia Svyrydenko", publisher: "Euronews", url: "https://www.euronews.com/my-europe/2026/07/14/government-reshuffle-in-ukraine-parliament-dismisses-prime-minister-yulia-svyrydenko", date: "2026-07-14" },
        { title: "A 'Tsunami' for Ukraine: Zelensky Rejects Wartime Elections", publisher: "TIME", url: "https://time.com/article/2026/08/24/volodymyr-zelensky-elections-ukraine-wartime-mykhailo-fedorov/", date: "2026-08-24" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "ua-12", kind: "spotlight", asOf: "2026-09-28",
      title: "Corruption and the road to Europe",
      dek: "Ukraine wants to join the EU. To get there, it must beat the oligarchs and graft that have plagued it since independence.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua/ua-12-hero.webp",
          alt: "Illustration of a modern courtroom with a long bench and empty chairs, papers stacked on tables, and tall windows looking out on a city.",
          caption: "Ukraine built new anti-corruption courts and agencies after 2014.",
          credit: "Illustration — not a photograph",
          prompt: "A modern courtroom with a long pale-wood judges' bench, empty chairs, stacks of case files on tables, tall windows looking out over a city of old and new buildings, clean daylight, serious and hopeful, no people, no flags, no legible text." },
        { type: "facts", head: "The fight in brief", rows: [
          ["EU candidate status", "June 2022"],
          ["EU accession talks opened", "June 2024"],
          ["Anti-corruption bureau (NABU)", "Created 2015"],
          ["High Anti-Corruption Court", "Operating since 2019"],
          ["Transparency International index (2024)", "105th of 180 countries"]
        ] },
        { type: "section", head: "The oligarchs", md:
          "In the 1990s, as state industries were privatised, a handful of businessmen gained control of steel, coal, gas, media and banks, and with them influence over parliament and governments. These oligarchs, such as Rinat Akhmetov, Ihor Kolomoisky and Viktor Pinchuk, funded parties and owned TV channels. Bribery was routine in courts, customs, police and hospitals. President Viktor Yanukovych, overthrown in 2014, left behind a lavish estate that became a symbol of looting." },
        { type: "section", head: "Reform after Maidan", md:
          "The 2014 revolution brought pressure from voters, the EU and the IMF for change. Ukraine created an independent [[nabu|National Anti-Corruption Bureau]], a special prosecutor's office and later a High Anti-Corruption Court; introduced an electronic public procurement system, ProZorro; required officials to declare their assets online; and ended opaque gas deals. In 2021 a law on 'de-oligarchisation' sought to curb oligarchs' political influence. Kolomoisky was arrested in 2023 on fraud charges, which he denies." },
        { type: "section", head: "Graft in wartime", md:
          "The war raised the stakes: billions of dollars of Western aid flow through Ukraine's institutions, and donors watch closely. Scandals over overpriced army food and equipment led to the dismissal of officials and a defence minister in 2023. In July 2025 parliament voted to curb the independence of NABU and the anti-corruption prosecutor, setting off the largest street protests since the invasion; within days President Zelensky reversed course and restored their powers. In November 2025 NABU exposed an alleged kickback scheme at the state nuclear company, Energoatom, which led to the resignation of two ministers." },
        { type: "section", head: "The EU prize", md:
          "Ukraine applied to join the EU days after the 2022 invasion, won candidate status that June, and opened accession talks in 2024. Membership requires reforms to the courts, the rule of law and the fight against corruption, as well as agreement from every member state; Hungary has repeatedly blocked progress. For many Ukrainians, joining the EU is the reward that makes the sacrifices of the war and the reforms worthwhile." },
        { type: "section", head: "Zelensky and the oligarchs", md:
          "Volodymyr Zelensky, a comedian who had played an honest president on television, won in 2019 promising to 'break the system'. Martial law and wartime unity have since strengthened the presidency, and critics say his office has become too powerful." },
        { type: "compare", head: "Two views",
          left: { head: "Optimists", md:
            "Ukraine has built some of the strongest anti-corruption institutions in the region, and a vigilant public and press defended them in 2025." },
          right: { head: "Sceptics", md:
            "Graft remains widespread, powerful people keep trying to capture the watchdogs, and wartime centralisation of power makes abuse easier." } },
        { type: "section", head: "Why it matters", md:
          "Corruption is Russia's most effective argument against aid to Ukraine, and the EU's main condition for membership. How Ukraine handles it will shape both its reconstruction, which the World Bank and others estimate will cost hundreds of billions of dollars, and its future in Europe." }
      ],
      takeaways: [
        "After 1991, oligarchs gained control of much of Ukraine's economy and politics.",
        "After 2014 Ukraine built anti-corruption institutions such as NABU and a special court.",
        "In 2025 protests forced the reversal of a law curbing NABU; EU membership depends on reform."
      ],
      check: { q: "What happened after parliament voted to curb NABU's independence in July 2025?",
        choices: ["NABU was abolished", "Mass protests led Zelensky to restore its powers within days", "The EU admitted Ukraine"], answer: 1,
        explain: "Street protests and pressure from the EU led to a new law restoring the bureau's independence." },
      sources: [
        { title: "EU welcomes Ukrainian law restoring independence to anti-corruption agencies", publisher: "CNN", url: "https://www.cnn.com/2025/07/31/europe/ukraine-anti-corruption-agencies-law-latam-intl", date: "2025-07-31" },
        { title: "Corruption Perceptions Index 2024", publisher: "Transparency International Ukraine", url: "https://ti-ukraine.org/en/research/corruption-perceptions-index-2024/", date: "2025-02" },
        { title: "EU enlargement: Ukraine", publisher: "European Commission", url: "https://enlargement.ec.europa.eu/european-neighbourhood-policy/countries-region/ukraine_en", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "ua-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "A fifth winter of war ahead, money secured to 2027, EU talks blocked by Hungary, and no ceasefire in sight.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua/ua-8-hero.webp",
          alt: "Illustration of a golden wheat field under a stormy sky with a distant church with golden domes.",
          caption: "Ukraine remains one of the world's great grain exporters, even in wartime.",
          credit: "Illustration — not a photograph",
          prompt: "A vast golden wheat field under a dramatic stormy sky, a small white church with golden onion domes on the horizon, a strip of sunlight breaking through the clouds onto the wheat, no people, hope and uncertainty." },
        { type: "section", head: "The state of play", md:
          "- **The war:** Russia holds about a fifth of the country; the front moves slowly; both sides strike each other's energy systems.\n" +
          "- **Talks:** no agreement on territory or guarantees; a US-announced pause on energy strikes is untested.\n" +
          "- **Money:** the EU agreed on 18–19 December 2025 to lend €90 billion for 2026 and 2027, without using frozen Russian assets.\n" +
          "- **Europe:** EU accession talks began in 2026, but Hungary has blocked the next steps four times over minority-rights demands.\n" +
          "- **At home:** a new prime minister, the Yermak case in court, and polls tightening between Zelensky and Zaluzhnyi." },
        { type: "section", head: "The road to Europe", md:
          "Ukraine became an EU candidate in June 2022. Accession talks are organised in six 'clusters' of subjects; the first opened in June 2026 and the external-relations cluster in July. Hungary, which conditions its support on rights for Ukraine's Hungarian-speaking minority, has withheld approval for the next two, even after Viktor Orbán's defeat in April 2026. Kyiv has promised guarantees for minority-language schooling, but says Budapest has not spelled out what more it wants." },
        { type: "section", head: "The rebuilding bill", md:
          "Whenever the fighting stops, Ukraine faces one of the largest reconstruction jobs since 1945. The World Bank and its partners estimated in 2025 that rebuilding homes, power, transport and industry would cost more than $500 billion over a decade. Who pays, whether frozen Russian assets are used, and how to prevent the money being stolen will be major political fights in Kyiv, Brussels and Washington." },
        { type: "section", head: "What to look for", md:
          "Watch the power grid this winter: whether the announced pause on energy strikes holds is the clearest test of either side's intentions. Watch Brussels and Budapest: if Hungary lifts its veto, Ukraine's EU talks can speed up. And watch the polls and the courts at home: the Yermak case, and the gap between Zelensky and Zaluzhnyi, will shape Ukrainian politics the moment martial law ends." },
        { type: "section", head: "Three scenarios", md:
          "- **Ceasefire on the line.** A truce roughly along the front, with European guarantees and a slow path to the EU; the occupied land stays in dispute.\n" +
          "- **Long war.** No deal; another hard winter; Ukraine holds with European money while Russia's economy strains.\n" +
          "- **A bad deal.** Pressure forces Ukraine to give up land it holds without firm guarantees, which many Ukrainians fear would only pause the war." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Oct 2026 onward:** the heating season, and whether the energy-strike pause holds\n" +
          "- **Every 90 days:** parliament's vote to extend martial law\n" +
          "- **Autumn 2026:** further EU attempts to open accession clusters\n" +
          "- **2027:** the second year of the EU's €90 billion loan" },
        { type: "section", head: "Connections", md:
          "Ukraine runs through [[unit:ru]] (the war), [[unit:us]] (the talks and the minerals deal), [[unit:pl]] and [[unit:de]] (Europe's aid and rearmament), [[unit:tr]] (grain corridors and prisoner swaps) and [[unit:kp]] (whose soldiers fought for Russia in Kursk)." }
      ],
      takeaways: [
        "Russia holds about a fifth of Ukraine, and no ceasefire has held; a fifth winter of war is coming.",
        "The EU's €90 billion loan covers Ukraine's needs through 2027.",
        "EU accession talks began in 2026, but Hungary is blocking the next steps."
      ],
      check: { q: "How is the EU funding Ukraine in 2026 and 2027?",
        choices: ["By seizing all frozen Russian assets", "With a €90 billion loan backed by the EU budget", "Through NATO's budget"], answer: 1,
        explain: "EU leaders agreed a €90 billion loan in December 2025, raised on markets and backed by the EU budget, after failing to agree on using frozen Russian assets." },
      sources: [
        { title: "EU agrees €90 billion loan to Ukraine, but squabbles over frozen Russian assets expose the bloc's deep divisions", publisher: "The Conversation", url: "https://theconversation.com/eu-agrees-90-billion-loan-to-ukraine-but-squabbles-over-frozen-russian-assets-expose-the-blocs-deep-divisions-272095", date: "2025-12" },
        { title: "Hungary's continued veto slows Ukraine's EU accession process as minority rights row persists", publisher: "Euronews", url: "https://www.euronews.com/my-europe/2026/09/09/another-hungarian-veto-slows-ukraines-eu-accession-process", date: "2026-09-09" },
        { title: "Hungary Blocks Ukraine's EU Accession Clusters for Fourth Time", publisher: "Kyiv Post", url: "https://www.kyivpost.com/post/84061", date: "2026-09" },
        { title: "War in Ukraine (Global Conflict Tracker)", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine", date: "2026-09" }
      ]
    }
  ]
});
