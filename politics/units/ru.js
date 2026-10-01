/* ============================================================
   Unit 3 — Russia 🇷🇺
   Research note and sources: tools/research/ru.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ru", {
  id: "ru",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ru-1", kind: "snapshot", asOf: "2026-09-28",
      title: "Russia in brief",
      dek: "The largest country on Earth and the largest nuclear arsenal, in the fifth year of a war it chose, run by one man for a quarter of a century.",
      blocks: [
        { type: "map", src: "maps/ru.svg",
          alt: "Locator map of northern Eurasia with Russia highlighted across eleven time zones, Crimea shown hatched, and a small globe showing its place in the world.",
          caption: "Russia. Hatched: Crimea, annexed from Ukraine in 2014 and recognised as Russian by almost no other country. Russia also claims four more Ukrainian regions it partly occupies, not shown here.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Moscow"],
          ["People", "About 146 million (Russia's own count, which includes Crimea)"],
          ["Size", "17.1 million km², the largest country on Earth"],
          ["System", "Presidential federation; in practice authoritarian"],
          ["Leader", "President Vladimir Putin, in power since 2000"],
          ["Parliament", "United Russia holds 349 of 450 Duma seats (Sept 2026)"],
          ["Next national vote", "Presidential election, 2030"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Russia has the world's largest stockpile of nuclear warheads, a permanent seat and veto on the UN Security Council, and vast reserves of oil, gas, wheat and metals. Since February 2022 it has been fighting the largest war in Europe since 1945, in [[unit:ua]], and that war has reshaped European security, energy markets and alliances.\n\n" +
          "It has also built partnerships with other countries at odds with the West: it buys drones from [[unit:ir]], ammunition and soldiers from [[unit:kp]], and sells oil to [[unit:cn]] and [[unit:in]]." },
        { type: "section", head: "A huge country, thinly spread", md:
          "Russia spans eleven time zones, from the Baltic Sea to the Pacific, but most of its people live in the European west, around Moscow and St Petersburg. Siberia and the Far East hold much of its oil, gas and minerals, and very few people.\n\n" +
          "Its population has been shrinking and ageing for years, and the war has deepened the problem: hundreds of thousands of men have been killed or wounded, according to Western estimates, and hundreds of thousands more left the country to avoid mobilisation in 2022." },
        { type: "section", head: "One man's system", md:
          "Vladimir Putin has led Russia as president or prime minister since 1999, longer than any Kremlin ruler since Stalin. Constitutional changes in 2020 reset his term count, allowing him to run again in 2030 and potentially stay until 2036.\n\n" +
          "Elections are held, but real opponents are barred, jailed or in exile, and state television dominates the news. Putin's supporters credit him with restoring order and national pride after the chaos of the 1990s; his critics say he has turned Russia into a personal dictatorship at war with its neighbours." },
        { type: "section", head: "Europe's old energy supplier", md:
          "Before 2022 Russia supplied about 40% of the gas the European Union imported, and much of its oil and coal. The war broke that relationship. Europe cut its purchases sharply, the Nord Stream pipelines under the Baltic were blown up in September 2022, and Russia turned its exports east, above all to [[unit:cn]] and [[unit:in]]. That shift is one of the war's most lasting consequences." },
        { type: "section", head: "What Moscow wants", md:
          "The Kremlin's stated aims are security guarantees against NATO's expansion, Ukraine's 'neutrality' and control of the territory it claims, and an end to what it calls Western hegemony. Western governments and Ukraine see those aims as a cover for rebuilding a Russian sphere of control over its neighbours by force." },
        { type: "callout", tone: "why", md:
          "Whether and how the war in Ukraine ends, and whether Russia remains at odds with Europe for a generation, will shape the continent's security, energy and budgets for decades." }
      ],
      takeaways: [
        "Russia has the largest nuclear arsenal, a UN veto and huge energy reserves, and has been at war in Ukraine since 2022.",
        "Vladimir Putin has ruled since 1999–2000 and can stay until 2036 under 2020 constitutional changes.",
        "Elections are held but not freely contested: opponents are barred, jailed or in exile."
      ],
      check: { q: "Under Russia's 2020 constitutional changes, how long could Putin stay in office?",
        choices: ["Until 2024", "Until 2030", "Until 2036"], answer: 2,
        explain: "The 2020 amendments reset his term count, letting him run in 2024 (which he won) and again in 2030, for a term ending in 2036." },
      sources: [
        { title: "Russia election results show Putin's party winning: What we know", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/21/russia-election-results-show-putins-party-winning-what-we-know", date: "2026-09-21" },
        { title: "Status of World Nuclear Forces", publisher: "Federation of American Scientists", url: "https://fas.org/initiative/status-world-nuclear-forces/", date: "2026" },
        { title: "War in Ukraine (Global Conflict Tracker)", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ru-2", kind: "power", asOf: "2026-09-28",
      title: "A state built around one man",
      dek: "On paper Russia is a federal republic with a parliament and courts. In practice nearly every thread of power runs to the Kremlin.",
      blocks: [
        { type: "diagram", src: "img/ru/ru-2-power.svg",
          alt: "Diagram of power in Russia. Voters take part in managed elections. The president, Vladimir Putin, appoints the government, led by Prime Minister Mikhail Mishustin. Parliament, where United Russia holds 349 of 450 Duma seats, passes the laws it is sent. The security services and the Security Council, run by Sergei Shoigu, sit alongside.",
          caption: "Everything leads to the president: the government, parliament and the security services all answer to the Kremlin.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The constitution and the reality", md:
          "Russia's 1993 constitution created a powerful presidency: the president appoints the prime minister, directs foreign and security policy, commands the armed forces and can issue decrees with the force of law. Parliament has two chambers, the elected [[State Duma]] and the Federation Council, made up of representatives of the regions.\n\n" +
          "Since 2000 Putin has emptied the checks around that office. Parliament passes what the Kremlin sends it. The courts rarely rule against the state. Regional governors, once powerful, now depend on Moscow's approval." },
        { type: "section", head: "A federation in name", md:
          "Russia is formally a federation of regions, including ethnic republics with their own languages and leaders. The world recognises 83 of them; Russia counts 89, including Crimea, Sevastopol and four Ukrainian regions it claims. Regional leaders are elected again since 2012, but the Kremlin vets candidates, and places such as Chechnya are run by strongmen whose loyalty to Putin buys them a free hand at home." },
        { type: "section", head: "The siloviki", md:
          "The men of force, or *siloviki*, are the backbone of the system: the Federal Security Service (FSB), the successor to the KGB, where Putin began his career; the military; the National Guard; and the prosecutors and investigators. The Security Council, chaired by Putin and run since 2024 by former defence minister Sergei Shoigu, brings them together.\n\n" +
          "In Putin's Russia, loyalty to the Kremlin matters more than party or ideology, and the security services are both the instrument of control and a check on anyone who might challenge it." },
        { type: "section", head: "Managed elections", md:
          "Russia holds regular elections, and voters turn out. But the authorities decide who may stand. In 2024 Putin won 87% of the vote after anti-war candidates were kept off the ballot; his best-known critic, Alexei Navalny, died in an Arctic prison a month earlier. Parties allowed into parliament, including the Communists and nationalists of the LDPR, generally back the Kremlin on the big questions and are known as the 'systemic opposition'." },
        { type: "section", head: "Money and the oligarchs", md:
          "In the 1990s a handful of tycoons, the oligarchs, grew rich from privatised state assets and wielded real political power. Putin broke that: those who challenged him, such as the oil magnate Mikhail Khodorkovsky, were jailed or exiled. Today's business elite keeps its wealth only by staying loyal, and Western sanctions since 2022 have pushed many of them closer to the state rather than against it." },
        { type: "compare", head: "Two ways of seeing it",
          left: { head: "How the Kremlin presents it", md:
            "A strong, centralised state is what holds a vast, diverse country together, protects it from Western interference and delivers stability after the collapse of the 1990s." },
          right: { head: "How critics see it", md:
            "A personalist regime that has removed every check on its leader, jails its opponents, controls the media and launched a catastrophic war that no independent institution could stop." } }
      ],
      takeaways: [
        "The 1993 constitution gives Russia's president sweeping powers, and Putin has removed most checks around them.",
        "The security services, the siloviki, are the backbone of the system.",
        "Elections are managed: the state decides who may run, and the parties in parliament back the Kremlin on big questions."
      ],
      check: { q: "What are the 'siloviki'?",
        choices: ["Russia's regional governors", "The men of the security services and military", "The billionaire oligarchs"], answer: 1,
        explain: "Siloviki means roughly 'men of force': officials from the FSB, the military, the police and prosecutors, who form the core of Putin's system." },
      sources: [
        { title: "United Russia Wins Record State Duma Majority in Elections Dubbed as Most Uncompetitive in Modern History", publisher: "The Moscow Times", url: "https://www.themoscowtimes.com/2026/09/25/united-russia-wins-record-state-duma-majority-in-elections-dubbed-as-the-most-uncompetitive-in-modern-history-a93791", date: "2026-09-25" },
        { title: "Putin Fires Longtime Ally Shoigu As Defense Minister In Cabinet Shake-Up", publisher: "RFE/RL", url: "https://www.rferl.org/a/russia-shoigu-putin-belousov-defense-minister/32943289.html", date: "2024-05-12" },
        { title: "Transition without a successor: The transformation of Putin's regime", publisher: "New Eurasian Strategies Centre", url: "https://nestcentre.org/transition-without-a-successor/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "ru-9", kind: "founding", asOf: "2026-09-28",
      title: "From Rus to empire",
      dek: "A medieval state around Kyiv, two centuries of Mongol rule, and the rise of Moscow into the world's largest empire.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru/ru-9-hero.webp",
          alt: "Illustration of a red-brick fortress wall with pointed towers beside a river in winter, with golden onion domes of cathedrals rising behind it.",
          caption: "The Moscow Kremlin, fortress of the grand princes and tsars who built the Russian state.",
          credit: "Illustration — not a photograph",
          prompt: "A long red-brick medieval fortress wall with tall pointed towers beside a frozen river in winter, golden onion domes of cathedrals rising behind, snow on the battlements, pale winter sun, historic and imposing, no people close up, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["c. 882", "Kyivan Rus founded around Kyiv"],
          ["988", "Prince Volodymyr (Vladimir) converts to Orthodox Christianity"],
          ["1240", "Mongols sack Kyiv; two centuries of Mongol overlordship"],
          ["1480", "Moscow throws off Mongol rule under Ivan III"],
          ["1547", "Ivan IV, 'the Terrible', crowned first tsar"],
          ["1613", "The Romanov dynasty begins"],
          ["1721", "Peter the Great proclaims the Russian Empire"]
        ] },
        { type: "section", head: "Kyivan Rus", md:
          "The first East Slavic state, Kyivan Rus, emerged in the late 9th century around Kyiv, today the capital of [[unit:ua|Ukraine]], ruled by a dynasty of Scandinavian origin. In 988 Prince Volodymyr, known in Russian as Vladimir, adopted Orthodox Christianity from Byzantium, tying the region's culture to the Eastern church. Russians, Ukrainians and Belarusians all trace their origins to Rus, and who is its true heir is now a question of war: Vladimir Putin argues that Russians and Ukrainians are 'one people', which Ukrainians reject." },
        { type: "section", head: "The Mongols and the rise of Moscow", md:
          "Mongol armies destroyed Kyiv in 1240, and for two centuries the Russian principalities paid tribute to the Golden Horde. Moscow, a minor town, rose by collecting that tribute for the khans and absorbing its neighbours. In 1480 Grand Prince Ivan III stopped paying and ended Mongol overlordship. His grandson Ivan IV, 'the Terrible', crowned himself tsar, from 'caesar', in 1547, conquered the Volga khanates and began the expansion into Siberia, but also terrorised his own nobles through a secret police force." },
        { type: "section", head: "Autocracy and expansion", md:
          "After a 'Time of Troubles' of famine, civil war and Polish occupation, the Romanov dynasty was installed in 1613 and ruled for three centuries. Russia expanded relentlessly: across Siberia to the Pacific by the 1640s, into Ukraine, the Baltic, Poland, the Caucasus and Central Asia. Most peasants were serfs, bound to landowners, until 1861. Power rested on an absolute monarch, the Orthodox Church and the army, a model later summed up in the slogan 'Orthodoxy, autocracy, nationality'." },
        { type: "section", head: "Peter and Catherine", md:
          "Peter the Great (1682–1725) forced Western ways on the nobility, built a navy, defeated Sweden and founded St Petersburg as a 'window on Europe', proclaiming the Russian Empire in 1721. Catherine the Great (1762–96) seized Crimea from the Ottomans in 1783, took most of Poland in its partitions, and expanded Russian control over what is now southern Ukraine, which she called 'New Russia'. Both are heroes of the modern Russian state; Putin has compared himself to Peter, returning lands to Russia." },
        { type: "compare", head: "Two ways to read the story",
          left: { head: "The Kremlin's history", md:
            "A thousand years of one Russian nation, repeatedly invaded, that gathered its lands and brought civilisation to vast territories." },
          right: { head: "Critics and neighbours", md:
            "A story of imperial conquest in which Ukrainians, Poles, Caucasians, Central Asians and Siberian peoples were subjugated, and still are." } },
        { type: "section", head: "Why it still matters", md:
          "Russia is the only European empire that never really gave up its imperial identity, and debates about its history are about its borders today. The claim that Kyiv is the 'mother of Russian cities', and that Crimea and 'New Russia' are Russian land, underpins the war in Ukraine. The tradition of a strong ruler above the law, rather than institutions that bind him, is also centuries old." }
      ],
      takeaways: [
        "Russians, Ukrainians and Belarusians all trace their roots to Kyivan Rus, which adopted Orthodox Christianity in 988.",
        "Moscow rose under Mongol overlordship and became the centre of an autocratic, expanding tsardom.",
        "Peter and Catherine the Great built an empire that took Crimea and southern Ukraine, claims Putin invokes today."
      ],
      check: { q: "Where was the capital of Kyivan Rus?",
        choices: ["Moscow", "Kyiv", "St Petersburg"], answer: 1,
        explain: "Kyiv, today Ukraine's capital, was the centre of the first East Slavic state; Moscow rose centuries later." },
      sources: [
        { title: "Kyivan Rus", publisher: "Britannica", url: "https://www.britannica.com/topic/Kyivan-Rus", date: "n.d." },
        { title: "Russia: History", publisher: "Britannica", url: "https://www.britannica.com/place/Russia/History", date: "n.d." },
        { title: "Article by Vladimir Putin 'On the Historical Unity of Russians and Ukrainians'", publisher: "President of Russia", url: "https://en.kremlin.ru/events/president/news/66181", date: "2021-07-12" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ru-3", kind: "history", asOf: "2026-09-28",
      title: "From the Soviet collapse to war",
      dek: "Why the 1990s still shape how Russia's rulers and many Russians see the world.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru/ru-3-hero.webp",
          alt: "Illustration of a snowy Moscow square at night with a lowered red flag being folded by distant figures, seen from far away.",
          caption: "On 25 December 1991 the Soviet flag came down over the Kremlin for the last time.",
          credit: "Illustration — not a photograph",
          prompt: "A snowy square at night beneath tall dark fortress walls and onion domes, a red flag being lowered from a flagpole atop a domed building, tiny distant figures in winter coats watching, falling snow, quiet and historic." },
        { type: "timeline", head: "The short version", items: [
          ["1991", "The Soviet Union collapses into 15 countries"],
          ["1990s", "Economic collapse, the oligarchs, war in Chechnya"],
          ["1999–2000", "Putin becomes prime minister, then president"],
          ["2008–14", "War with Georgia; mass protests; annexation of Crimea"],
          ["2022", "Full-scale invasion of Ukraine"]
        ] },
        { type: "section", head: "1. Collapse (1991)", md:
          "At the end of 1991 the Soviet Union dissolved into 15 independent countries, including [[unit:ua]], ending the [[Cold War]]. For many in the West it was a victory for freedom. Putin later called it 'the greatest geopolitical catastrophe of the century', and millions of Russians, who saw their savings wiped out and their country shrink, remember it as a humiliation." },
        { type: "section", head: "2. The wild nineties", md:
          "Under Boris Yeltsin, Russia tried a rapid switch to a market economy, known as shock therapy. Prices soared, output collapsed and the state defaulted on its debts in 1998. State assets were sold off cheaply to a few well-connected tycoons. A brutal war in Chechnya (1994–96) ended in humiliating stalemate.\n\n" +
          "For Putin's generation, that decade is the proof that weakness invites chaos, and that Western advice cannot be trusted." },
        { type: "section", head: "3. Putin's rise (1999–2008)", md:
          "Yeltsin made Vladimir Putin, a former KGB officer and head of the FSB, prime minister in August 1999 and handed him the presidency on 31 December. A second Chechen war and soaring oil prices made him popular: incomes rose fast in the 2000s, and order returned. At the same time independent television was taken over and the most powerful oligarchs were jailed or driven abroad." },
        { type: "section", head: "4. Turning away from the West (2008–14)", md:
          "Russia fought a short war with Georgia in 2008. In 2011–12, large protests in Moscow followed disputed elections and Putin's return to the presidency, and the Kremlin blamed Western meddling. In 2014, after Ukraine's pro-Russian president was ousted, Russia seized and annexed Crimea and backed an armed uprising in Ukraine's eastern Donbas region. Western sanctions followed." },
        { type: "section", head: "Ukraine in Putin's eyes", md:
          "In a July 2021 essay, *On the Historical Unity of Russians and Ukrainians*, Putin argued that the two are 'one people' and that Ukraine's statehood was an artificial creation turned against Russia by the West. Ukrainians, and most historians outside Russia, reject that view. The essay is widely read as the ideological groundwork for the invasion seven months later." },
        { type: "section", head: "5. The full-scale invasion (2022)", md:
          "On 24 February 2022 Russia launched a full-scale invasion of Ukraine, expecting to take Kyiv within days. It failed, and the war became a grinding struggle of artillery, drones and trenches. Russia annexed four more Ukrainian regions on paper that September and mobilised 300,000 reservists. In June 2023 the Wagner mercenary group briefly mutinied and marched toward Moscow; its leader, Yevgeny Prigozhin, died in a plane crash two months later." }
      ],
      takeaways: [
        "Putin's generation sees the 1991 collapse and the chaotic 1990s as a national humiliation to be reversed.",
        "Oil wealth and order made Putin popular in the 2000s, while independent media and rivals were crushed.",
        "Russia's break with the West ran from Georgia (2008) and Crimea (2014) to the full-scale invasion of Ukraine (2022)."
      ],
      check: { q: "In which year did Russia annex Crimea from Ukraine?",
        choices: ["2008", "2014", "2022"], answer: 1,
        explain: "Russia seized Crimea in 2014. It went to war with Georgia in 2008 and launched its full-scale invasion of Ukraine in 2022." },
      sources: [
        { title: "Russia profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-europe-17840446", date: "n.d." },
        { title: "War in Ukraine (Global Conflict Tracker)", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine", date: "2026-09" },
        { title: "Collapse of the Soviet Union, 1991", publisher: "Office of the Historian, U.S. Department of State", url: "https://history.state.gov/milestones/1989-1992/collapse-soviet-union", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "ru-10", kind: "past", asOf: "2026-09-28",
      title: "Revolution and terror",
      dek: "In 1917 the tsar fell and the Bolsheviks seized power. Under Stalin, millions died in famines, purges and the Gulag.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru/ru-10-hero.webp",
          alt: "Illustration of rows of wooden barracks behind barbed wire in a snowy forest clearing under a grey sky, with a watchtower.",
          caption: "The Gulag: a network of labour camps through which about 18 million people passed.",
          credit: "Illustration — not a photograph",
          prompt: "Rows of low wooden barracks behind a double barbed-wire fence in a snowy forest clearing, a wooden watchtower, a grey heavy sky, dark pine trees, bleak and silent, no people close up, no legible text." },
        { type: "facts", head: "The Soviet toll", rows: [
          ["Revolution", "February and October 1917"],
          ["Civil war", "1918–21; millions dead from fighting, famine and disease"],
          ["Famine of 1932–33", "Millions dead, about 3.5–5 million of them in Ukraine"],
          ["Great Terror", "1937–38; about 680,000 executed, per NKVD records"],
          ["Gulag", "About 18 million people passed through the camps, 1930–53"]
        ] },
        { type: "section", head: "1917", md:
          "The First World War broke the Russian Empire. Millions of soldiers died, food ran short, and in February 1917 strikes and mutinies in Petrograd forced Tsar Nicholas II to abdicate. A liberal Provisional Government promised elections but kept fighting the war. In October the Bolsheviks, a disciplined Marxist party led by Vladimir Lenin, seized power in a near-bloodless coup, promising 'peace, land and bread'. When they lost the elections to a constituent assembly, they dissolved it after one day." },
        { type: "section", head: "Civil war and the Soviet Union", md:
          "A brutal civil war followed between the Bolsheviks' Red Army, led by Leon Trotsky, and the anti-communist Whites, backed briefly by foreign troops. Both sides committed atrocities; the Bolsheviks' secret police, the Cheka, waged a 'Red Terror'. The royal family was shot in 1918. By 1922 the Bolsheviks had won and founded the Union of Soviet Socialist Republics, including Ukraine, Belarus and the Caucasus, under one-party rule." },
        { type: "section", head: "Stalin's revolution", md:
          "After Lenin's death in 1924, Joseph Stalin outmanoeuvred his rivals. From 1929 he forced peasants into collective farms and drove industrialisation at breakneck speed. Resistance and grain requisitions caused the famine of 1932–33, which killed millions, most in Ukraine and Kazakhstan; Ukraine calls it the Holodomor and many countries recognise it as genocide, which Russia rejects. The USSR became an industrial power, but at enormous human cost." },
        { type: "section", head: "The Great Terror and the Gulag", md:
          "In 1937–38 Stalin's secret police, the NKVD, arrested well over a million people: party leaders, army officers, engineers, ordinary workers and whole ethnic groups. Soviet records show about 680,000 were shot. Show trials made old Bolsheviks confess to absurd crimes. Millions more were sent to the Gulag, a vast system of labour camps in Siberia and the Arctic, where they mined gold, cut timber and built canals; about 18 million passed through it between 1930 and Stalin's death in 1953, and more than a million and a half died there." },
        { type: "compare", head: "Remembering Stalin",
          left: { head: "Admirers", md:
            "Stalin industrialised a backward country and led it to victory over Nazi Germany. Harsh times required harsh measures." },
          right: { head: "Historians and victims' families", md:
            "Stalin's rule killed millions of innocent people. No victory justifies the famine, the Terror and the camps." } },
        { type: "section", head: "Why it still matters", md:
          "Nikita Khrushchev denounced Stalin in 1956, and in the 1990s the human rights group Memorial documented millions of victims. Under Putin, Stalin's reputation has been partly restored as a wartime leader, and in 2021 Russia's Supreme Court ordered Memorial to close. How Russia remembers its past is closely tied to how it is governed now." }
      ],
      takeaways: [
        "The Bolsheviks seized power in October 1917 and won a brutal civil war, founding the Soviet Union in 1922.",
        "Stalin's forced collectivisation caused the famine of 1932–33; his Great Terror executed about 680,000 people in two years.",
        "Russia's courts closed Memorial, the group that documented Soviet repression, in 2021."
      ],
      check: { q: "What was the Gulag?",
        choices: ["The Soviet parliament", "A network of forced labour camps", "Stalin's secret police"], answer: 1,
        explain: "The Gulag was the system of labour camps through which about 18 million people passed; the secret police was the NKVD." },
      sources: [
        { title: "Russian Revolution", publisher: "Britannica", url: "https://www.britannica.com/event/Russian-Revolution", date: "n.d." },
        { title: "Great Purge", publisher: "Britannica", url: "https://www.britannica.com/event/Great-Purge", date: "n.d." },
        { title: "Gulag", publisher: "Britannica", url: "https://www.britannica.com/topic/Gulag", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "ru-11", kind: "past", asOf: "2026-09-28",
      title: "The Great Patriotic War",
      dek: "The Soviet Union lost about 27 million people defeating Nazi Germany. The memory of that victory is now the foundation of Russian identity.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru/ru-11-hero.webp",
          alt: "Illustration of a ruined city on a wide river in winter, with shattered factory buildings and smoke rising into a grey sky.",
          caption: "Stalingrad, where the Red Army destroyed a German army in the winter of 1942–43.",
          credit: "Illustration — not a photograph",
          prompt: "A ruined industrial city on the bank of a wide frozen river in winter, shattered factory buildings and chimneys, smoke rising into a grey sky, snow over rubble, desolate and epic, no people, no flags, no legible text." },
        { type: "timeline", head: "1939–45", items: [
          ["Aug 1939", "Nazi–Soviet pact divides eastern Europe"],
          ["22 June 1941", "Germany invades the Soviet Union"],
          ["1941–44", "Siege of Leningrad; about 1 million civilians die"],
          ["1942–43", "Battle of Stalingrad"],
          ["July 1943", "Battle of Kursk"],
          ["May 1945", "The Red Army takes Berlin; Victory Day, 9 May"]
        ] },
        { type: "section", head: "The pact and the invasion", md:
          "In August 1939 Stalin signed a non-aggression pact with Hitler, with a secret protocol dividing eastern Europe. The Soviet Union took eastern Poland, the Baltic states and part of Romania, and in 1940 its secret police shot about 22,000 Polish officers and others at Katyn and other sites. On 22 June 1941 Hitler broke the pact and invaded with more than three million troops. The Red Army, weakened by Stalin's purges of its officers, collapsed; within months the Germans were at the gates of Moscow and had surrounded Leningrad." },
        { type: "section", head: "The turning of the tide", md:
          "The Soviet Union survived by moving factories east of the Urals, mobilising its whole population and absorbing staggering losses. Leningrad endured a siege of nearly 900 days in which about a million civilians died, mostly of hunger. At Stalingrad in the winter of 1942–43, the Red Army encircled and destroyed a German army of about 300,000, the turning point of the war. After the tank battle of Kursk in 1943, Soviet forces drove west, reaching Berlin in April 1945. American aid under Lend-Lease supplied trucks, food and equipment." },
        { type: "section", head: "The cost", md:
          "About 27 million Soviet citizens died, soldiers and civilians, far more than any other country in the war; Ukraine and Belarus, occupied for years, suffered especially. The Nazis murdered Jews across the occupied territories in mass shootings, part of the Holocaust. The Red Army also committed mass rapes and reprisals as it advanced, and Stalin deported whole peoples, including the Chechens and Crimean Tatars, whom he accused of collaboration." },
        { type: "section", head: "Victory and empire", md:
          "Victory made the Soviet Union a superpower. It kept the Baltic states and installed communist governments across eastern Europe, dividing the continent for four decades, the start of the [[cold-war|Cold War]]. For Soviet citizens, the war was the one unambiguous triumph of their state, and families across the country still keep photographs of relatives who fought." },
        { type: "compare", head: "Two memories of the war",
          left: { head: "Russia's official memory", md:
            "The Soviet people saved the world from fascism at a terrible price. Questioning that memory is an insult to the dead and is now a crime." },
          right: { head: "Neighbours' memory", md:
            "For Poles, Balts and many Ukrainians, 1945 replaced one occupation with another, and the Nazi–Soviet pact is part of the story too." } },
        { type: "section", head: "Why it still matters", md:
          "Under Putin, Victory Day on 9 May has become the country's main holiday, with military parades and marches of millions carrying portraits of veterans. The Kremlin presents its invasion of Ukraine as a new fight against 'Nazis', and Russian law punishes 'rehabilitating Nazism' or 'falsifying' the Soviet role in the war, which critics say is used to silence debate about Stalin's crimes." }
      ],
      takeaways: [
        "Germany invaded the Soviet Union in June 1941; Stalingrad in 1942–43 turned the tide.",
        "About 27 million Soviet citizens died, more than any other country in the war.",
        "Victory Day is now the core of Russian national identity and is invoked to justify the war in Ukraine."
      ],
      check: { q: "Which battle is seen as the turning point of the war on the Eastern Front?",
        choices: ["Moscow, 1941", "Stalingrad, 1942–43", "Berlin, 1945"], answer: 1,
        explain: "At Stalingrad the Red Army surrounded and destroyed a whole German army, and never lost the initiative afterwards." },
      sources: [
        { title: "Operation Barbarossa", publisher: "Britannica", url: "https://www.britannica.com/event/Operation-Barbarossa", date: "n.d." },
        { title: "Battle of Stalingrad", publisher: "Britannica", url: "https://www.britannica.com/event/Battle-of-Stalingrad", date: "n.d." },
        { title: "The History Behind Victory Day, May 9, in Russia", publisher: "Time", url: "https://time.com/6173515/russia-victory-day-history/", date: "2022-05" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "ru-4", kind: "players", asOf: "2026-09-28",
      title: "The Kremlin's inner circle",
      dek: "Putin's court: the loyalists who run the war, the economy and the talks, and the opposition that operates from exile.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru/ru-4-hero.webp",
          alt: "Illustration of a long gilded hall with a very long white table and two chairs at opposite ends.",
          caption: "Access to Putin is the most valuable currency in Russian politics.",
          credit: "Illustration — not a photograph",
          prompt: "A long, ornate palace hall with white and gold walls and crystal chandeliers, a very long white table with just two empty chairs at opposite ends, afternoon light through tall windows, no people, a sense of distance and power." },
        { type: "people", head: "Seven to know", items: [
          { name: "Vladimir Putin", role: "President",
            img: "img/ru/portrait-putin.webp", source: "Kremlin.ru official photo (CC BY 4.0) via Wikimedia Commons; confirm the licence on the file page.",
            md: "Former KGB officer, in power since 1999. Makes every important decision on the war, the talks and the economy, and has not named a successor." },
          { name: "Mikhail Mishustin", role: "Prime minister",
            img: "img/ru/portrait-mishustin.webp", source: "Kremlin.ru official photo (CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "A technocrat who modernised the tax service. Runs the government and the civilian economy, and keeps a low political profile." },
          { name: "Andrei Belousov", role: "Defence minister",
            img: "img/ru/portrait-belousov.webp", source: "Kremlin.ru official photo (CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "An economist, appointed in May 2024 to run the military's vast budget more efficiently as the war economy grew." },
          { name: "Sergei Shoigu", role: "Secretary of the Security Council",
            img: "img/ru/portrait-shoigu.webp", source: "Kremlin.ru official photo (CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "Defence minister for a decade until 2024, now coordinating the security services and handling ties with allies such as North Korea." },
          { name: "Sergei Lavrov", role: "Foreign minister",
            img: "img/ru/portrait-lavrov.webp", source: "Kremlin.ru or mid.ru official photo (CC BY 4.0); confirm the licence.",
            md: "Russia's top diplomat since 2004, the public voice of its positions on Ukraine and on what Moscow calls Western hegemony." },
          { name: "Kirill Dmitriev", role: "Special envoy; head of the Russian Direct Investment Fund",
            img: "img/ru/portrait-dmitriev.webp", source: "Kremlin.ru official photo (CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "US-educated banker who became Moscow's main back channel to Trump's envoys; co-author of the 28-point peace plan of November 2025." },
          { name: "Yulia Navalnaya", role: "Opposition leader in exile",
            img: "img/ru/portrait-navalnaya.webp", source: "Find a Creative Commons photo on Wikimedia Commons and confirm the licence.",
            md: "Widow of Alexei Navalny, who died in prison in February 2024. Leads his movement from abroad and faces arrest if she returns." }
        ] },
        { type: "section", head: "How the court works", md:
          "Putin balances groups rather than ruling through a party: the security men, the technocrats who run the budget and central bank, the defence industry (led by figures such as Sergei Chemezov of the state conglomerate Rostec) and the regional bosses. The war has added a new group: veterans of the fighting, promoted into government and parliament through a Kremlin programme called 'Time of Heroes' launched in 2024. Loyalty is rewarded; independence is punished. Even insiders are not safe: in 2024 a deputy defence minister, Timur Ivanov, was arrested for bribery, the first of a wave of cases against the military leadership." },
        { type: "section", head: "Who could come next?", md:
          "Putin turns 74 in October 2026 and has no designated heir. Russian and Western analysts list possible candidates from the technocrats around him, such as Mishustin, or younger officials promoted in recent years, but the system is built so that nobody looks like a rival. Russian media sometimes float Dmitry Patrushev, a deputy prime minister since 2024 and son of a former Security Council secretary. A sudden succession would be decided inside the Kremlin and the security services, not at the ballot box." },
        { type: "section", head: "Where the opposition went", md:
          "Almost the whole organised opposition now operates from abroad, mainly from Berlin, Vilnius and other European cities. Inside Russia, criticism of the war can bring long prison sentences under laws against 'discrediting' the army, and independent media outlets have been labelled 'foreign agents' or 'undesirable'. Opinion polls inside Russia show strong support for Putin, but independent pollsters warn that fear makes such numbers hard to read. Some prominent prisoners have been freed only through exchanges, such as the August 2024 swap that released the American journalist Evan Gershkovich and several Russian dissidents." }
      ],
      takeaways: [
        "Putin makes the key decisions himself, surrounded by long-serving loyalists and technocrats.",
        "Kirill Dmitriev became Moscow's back channel to Trump's envoys in the peace talks.",
        "The organised opposition, led by Yulia Navalnaya, works from exile; criticism of the war at home can mean prison."
      ],
      check: { q: "Who is Russia's defence minister, appointed in 2024?",
        choices: ["Sergei Shoigu", "Andrei Belousov", "Sergei Lavrov"], answer: 1,
        explain: "Andrei Belousov, an economist, replaced Sergei Shoigu in May 2024. Shoigu moved to the Security Council; Lavrov is foreign minister." },
      sources: [
        { title: "In Major Shakeup, Putin Replaces Defense Minister Shoigu", publisher: "The Moscow Times", url: "https://www.themoscowtimes.com/2024/05/12/in-major-shakeup-putin-replaces-defense-minister-shoigu-a85097", date: "2024-05-12" },
        { title: "Ukraine peace talks (November 2025 to March 2026)", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10411/", date: "2026" },
        { title: "Yulia Navalnaya, widow of Alexei Navalny, undeterred in anti-Putin mission", publisher: "CBS News", url: "https://www.cbsnews.com/news/yulia-navalnaya-alexei-navalny-widow-undeterred-anti-putin-mission-60-minutes-transcript-2025-06-22/", date: "2025-06-22" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "ru-5", kind: "story", asOf: "2026-09-28",
      title: "The war economy",
      dek: "Record military spending kept Russia's economy running through sanctions. Now growth has stalled, oil money is squeezed and Ukrainian drones are hitting refineries.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru/ru-5-hero.webp",
          alt: "Illustration of an oil refinery at night in winter, with one column of dark smoke rising into a cold sky.",
          caption: "Oil pays for much of Russia's war. In 2025–26, Ukrainian drones struck refineries deep inside Russia.",
          credit: "Illustration — not a photograph",
          prompt: "An oil refinery on a snowy plain at night, lit towers and pipes, one column of dark smoke rising into a cold starry sky, a line of tanker rail cars in the foreground, stillness and strain." },
        { type: "section", head: "What happened", md:
          "When the West imposed sweeping [[sanctions]] in 2022, many expected Russia's economy to buckle. Instead it grew, powered by record military spending, higher wages in factories making weapons and oil sold to [[unit:cn]] and [[unit:in]] at a discount, often carried by an ageing '[[shadow fleet]]' of tankers.\n\n" +
          "That boom has faded. Inflation forced the central bank to raise its key interest rate to 21% in late 2024. It has since cut to 14%, but in 2026 it expects the economy to grow by between zero and 1%. The 2025 budget deficit came in far above plan, at close to 4% of GDP by some independent estimates, and the government has been drawing on its main rainy-day reserve, the National Wealth Fund, to fill the gap." },
        { type: "section", head: "The squeeze tightens", md:
          "In October 2025 the United States put sanctions directly on Russia's two biggest oil companies, Rosneft and Lukoil, and the European Union agreed its 19th sanctions package, including a ban on Russian liquefied gas from 2027 and more shadow-fleet tankers.\n\n" +
          "Ukraine added its own pressure: from August 2025 its long-range drones repeatedly hit Russian refineries, some more than 1,000 kilometres from the front, causing fuel shortages in several regions. Russia has kept exporting, but for less money." },
        { type: "facts", head: "By the numbers", rows: [
          ["Key interest rate", "14% (held on 11 Sep 2026; peak 21%)"],
          ["2026 growth forecast", "0–1% (Bank of Russia)"],
          ["Underlying inflation", "5–6% a year (Bank of Russia estimate)"],
          ["Oil majors under US sanctions", "Rosneft and Lukoil, since 22 Oct 2025"]
        ] },
        { type: "section", head: "Who pays", md:
          "Ordinary Russians are starting to feel the cost. A progressive income tax replaced the flat 13% rate in 2025, and value-added tax, paid on almost everything people buy, rose from 20% to 22% in January 2026. Companies face higher profit taxes and interest rates that make borrowing expensive. Meanwhile the army recruits volunteers with signing bonuses far above normal wages, which drives up pay across an economy already short of workers." },
        { type: "section", head: "Why it matters", md:
          "Money is one of the few things that could change the Kremlin's calculation on the war. So far Russia has been able to pay for it by borrowing at home, raising taxes and drawing on reserves. The longer growth stays near zero, the harder it becomes to fund the army, keep wages up and avoid unpopular cuts at the same time." },
        { type: "compare", head: "Two readings",
          left: { head: "Moscow's view", md:
            "Russia has adapted to sanctions, found new customers in Asia and built a defence industry that outproduces Europe's. Slower growth is a manageable cooling, not a crisis." },
          right: { head: "The sceptics' view", md:
            "A war economy spends on things that are blown up. Labour shortages, high rates and falling oil income are hollowing out the civilian economy, and the bill is being deferred, not avoided." } }
      ],
      takeaways: [
        "Military spending and discounted oil sales kept Russia growing through sanctions in 2023–24.",
        "By 2026 growth had stalled near zero, with interest rates at 14% and a far larger budget deficit than planned.",
        "US sanctions on Rosneft and Lukoil and Ukrainian drone strikes on refineries have squeezed Russia's oil income."
      ],
      check: { q: "What is Russia's 'shadow fleet'?",
        choices: ["Its submarine force", "Old tankers used to ship oil around Western sanctions", "Its fleet of cargo planes"], answer: 1,
        explain: "The shadow fleet is hundreds of ageing tankers, often with opaque ownership and insurance, that carry Russian oil around Western price caps and sanctions." },
      sources: [
        { title: "Bank of Russia keeps the key rate at 14.00% p.a.", publisher: "Bank of Russia", url: "https://www.cbr.ru/eng/press/keypr/", date: "2026-09-11" },
        { title: "Russian Central Bank lowers 2026 GDP growth forecast", publisher: "Interfax", url: "https://interfax.com/newsroom/top-stories/118504/", date: "2026" },
        { title: "U.S. and UK Sanctions Target Russia's Two Largest Oil Companies; EU Issues Significant New Sanctions Package", publisher: "Covington & Burling", url: "https://www.cov.com/en/news-and-insights/insights/2025/10/us-and-uk-sanctions-target-russias-two-largest-oil-companies-eu-issues-significant-new-russia-and-belarus-sanctions-package", date: "2025-10" },
        { title: "Ukraine's drone attacks hit more Russian refineries and create fuel shortages", publisher: "Fortune", url: "https://fortune.com/2026/06/28/ukraine-drone-attacks-russian-refineries-fuel-shortages-siberia/", date: "2026-06-28" },
        { title: "Key rate, rouble appreciation, and fiscal risks in 2026", publisher: "New Eurasian Strategies Centre", url: "https://nestcentre.org/key-rate-rouble-appreciation-and-fiscal-risks-in-2026/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "ru-6", kind: "story", asOf: "2026-09-28",
      title: "Peace talks that never land",
      dek: "A summit in Alaska, a 28-point plan, truces that lasted hours: why every attempt to end the war has stalled on the same two questions.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru/ru-6-hero.webp",
          alt: "Illustration of an empty negotiating table with two small flags and a closed folder, in a plain room with snow outside the window.",
          caption: "Territory and security guarantees: the two issues on which every draft has foundered.",
          credit: "Illustration — not a photograph",
          prompt: "A plain negotiating room with a single polished table, two empty chairs facing each other, a closed leather folder and two glasses of water, snow falling outside a tall window, cool light, an atmosphere of stalemate, no flags with legible symbols." },
        { type: "section", head: "What happened", md:
          "Donald Trump returned to office promising to end the war quickly. In February 2025 a heated Oval Office meeting with Zelensky showed how hard he was prepared to press Kyiv. On 15 August 2025 he met Putin in Anchorage, Alaska, without an agreement. In November, a 28-point plan drafted by his envoy Steve Witkoff with Russia's Kirill Dmitriev leaked. It would have had [[unit:ua]] give up the rest of the Donbas, cap its army and renounce NATO. After talks in Geneva on 23 November, a revised US–Ukrainian draft of 19 points left 'very few things' of the original, a Ukrainian negotiator said.\n\n" +
          "In 2026 the pattern repeated. A 32-hour Easter truce in April collapsed amid hundreds of reported violations. Putin rejected further de-escalation proposals in June. A pause on strikes against Kyiv and Moscow expired on 7 September." },
        { type: "timeline", head: "How the talks went", items: [
          ["15 Aug 2025", "Trump and Putin meet in Anchorage, Alaska; no deal"],
          ["19–23 Nov 2025", "A 28-point plan leaks; Geneva talks cut it to 19 points"],
          ["Apr 2026", "A 32-hour Easter truce collapses"],
          ["28 Jun 2026", "Putin rejects further de-escalation proposals"],
          ["7 Sep 2026", "A pause on strikes on Kyiv and Moscow expires"],
          ["14 Sep 2026", "Trump announces a halt to strikes on energy sites; Kyiv demands proof"]
        ] },
        { type: "section", head: "The two sticking points", md:
          "**Territory.** Russia controls about a fifth of Ukraine, including Crimea and most of the Donbas. It demands the whole of the Donbas, including towns it has not captured. Ukraine refuses to withdraw from land it holds and wants talks based on the current front line.\n\n" +
          "**Security guarantees.** Ukraine wants firm Western guarantees, possibly including European troops, so that Russia cannot attack again. Russia rejects any Western military presence in Ukraine and wants limits on Ukraine's army." },
        { type: "section", head: "Why it happened", md:
          "Each side believes time is on its side. Moscow is betting that Western support will fade and that its larger army can keep grinding forward. Kyiv is betting that sanctions, drone strikes on Russian oil and European money will make the war too costly for Russia. Until one of those bets fails, neither has a strong reason to accept the other's terms." },
        { type: "compare", head: "The argument",
          left: { head: "Moscow's position", md:
            "Russia is fighting to protect Russian speakers and its own security from NATO. Any deal must recognise its gains and keep Ukraine neutral and lightly armed." },
          right: { head: "Kyiv's position", md:
            "Ukraine was invaded and will not reward aggression by surrendering land or its right to defend itself. Without guarantees, a ceasefire would only give Russia time to rearm." } },
        { type: "section", head: "What's next", md:
          "On 14 September 2026 Trump announced that both sides had agreed to stop striking each other's energy infrastructure; Zelensky said Ukraine would stop only when Russia's commitment was 'genuine'. American envoys continue shuttling between Kyiv and Moscow, while Europe keeps Ukraine funded through a €90 billion EU loan for 2026 and 2027." }
      ],
      takeaways: [
        "Trump's push for a quick deal produced an Alaska summit and a 28-point plan, but no agreement.",
        "Every 2026 truce collapsed within days or was left to expire.",
        "Territory, especially the Donbas, and Western security guarantees for Ukraine are the two unresolved questions."
      ],
      check: { q: "Which two issues have blocked every peace draft?",
        choices: ["Oil prices and grain exports", "Territory and security guarantees", "Prisoner exchanges and war crimes trials"], answer: 1,
        explain: "Russia wants all of the Donbas and no Western forces in Ukraine; Ukraine will not give up land it holds without firm guarantees against another attack." },
      sources: [
        { title: "Ukraine peace talks (November 2025 to March 2026)", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10411/", date: "2026" },
        { title: "Russia–Ukraine: turbulent diplomacy", publisher: "IISS", url: "https://www.iiss.org/online-analysis/online-analysis/2025/11/russiaukraine-turbulent-diplomacy/", date: "2025-11" },
        { title: "The Unfinished Plan for Peace in Ukraine: Provision by Provision", publisher: "CSIS", url: "https://www.csis.org/analysis/unfinished-plan-peace-ukraine-provision-provision", date: "2025-12" },
        { title: "Mapping Russian attacks and territorial gains across Ukraine", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/24/mapping-russian-attacks-and-territorial-gains-across-ukraine", date: "2026-02-24" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "ru-7", kind: "story", asOf: "2026-09-28",
      title: "An election without a contest",
      dek: "United Russia won a record majority in September 2026, while the state blocked WhatsApp and YouTube and pushed citizens onto its own messenger.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru/ru-7-hero.webp",
          alt: "Illustration of a transparent ballot box in a small-town school polling station, with a single voter seen from behind.",
          caption: "Russia's September 2026 parliamentary vote was described by independent observers as the least competitive in its modern history.",
          credit: "Illustration — not a photograph",
          prompt: "A small-town school gymnasium turned polling station, a transparent ballot box on a table, one voter in a winter coat seen from behind, a bored official at a distance, pale fluorescent light, no legible signs or symbols." },
        { type: "section", head: "What happened", md:
          "Russians voted for a new [[State Duma]] on 18–20 September 2026, the first parliamentary election since the full-scale war began. United Russia, the party that backs Putin, won 349 of the 450 seats, beating its own record of 343 from 2016, with about 58% of the party-list vote.\n\n" +
          "Four other parties, all tolerated by the Kremlin, shared the rest: the Communists with 37 seats, the nationalist LDPR with 23, New People with 19 and A Just Russia with 17. No anti-war party was allowed to take part. Voting ran over three days, and online in some regions, formats that critics say are hard to monitor independently. The Moscow Times called it the least competitive election in modern Russian history." },
        { type: "section", head: "The digital iron curtain", md:
          "The vote came as the state tightened control of the internet. From August 2025 regulators restricted calls on WhatsApp and Telegram; on 11 February 2026 WhatsApp and YouTube were blocked completely, and Telegram, the most popular source of independent news, has been throttled and partly blocked since April. Mobile internet shutdowns have become routine in many regions, officially to stop Ukrainian drones.\n\n" +
          "In their place the government is pushing Max, a state-backed 'super-app' without end-to-end encryption, which must now come pre-installed on phones sold in Russia and is being built into public services. By February 2026 it had 77.5 million monthly users, close to WhatsApp's 80 million." },
        { type: "section", head: "Where Russians get their news", md:
          "State television, which follows the Kremlin line, remains the main source of news for older Russians. Younger people relied on Telegram channels, YouTube and VPNs to reach independent outlets, most of which now broadcast from exile. That is why the blocks bite: a 2025 law even introduced fines for searching for material the state has labelled 'extremist', and many VPN services have been blocked." },
        { type: "section", head: "Why it happened", md:
          "Wartime leaders fear dissent, and the Kremlin has treated independent information as a security threat since 2022. A dominant Duma majority also matters for what comes next: with more than two-thirds of the seats, United Russia can pass constitutional amendments through the Duma without anyone else's votes, whether to prepare for a succession or to formalise wartime powers." },
        { type: "compare", head: "Two readings",
          left: { head: "The Kremlin's view", md:
            "The result shows Russians rallying around their country in wartime. Blocking foreign apps protects citizens from fraud, extremism and Western propaganda, as other countries do." },
          right: { head: "Critics' view", md:
            "An election with no real choice is theatre. Cutting off WhatsApp, YouTube and Telegram, and pushing an unencrypted state app, is about surveillance and silencing dissent." } },
        { type: "section", head: "What's next", md:
          "The new Duma sits until 2031, beyond the next presidential election in 2030. Watch whether it passes constitutional changes, and whether the block on Telegram becomes total." }
      ],
      takeaways: [
        "United Russia won a record 349 of 450 Duma seats in September 2026, with no anti-war party on the ballot.",
        "WhatsApp and YouTube were blocked in February 2026 and Telegram throttled, as the state pushes its own app, Max.",
        "A two-thirds majority lets United Russia push constitutional changes through the Duma on its own votes."
      ],
      check: { q: "What is 'Max'?",
        choices: ["Russia's new tank", "A state-backed messaging app replacing WhatsApp and Telegram", "The main opposition party"], answer: 1,
        explain: "Max is a state-backed messenger and 'super-app' without end-to-end encryption, promoted as foreign apps are blocked." },
      sources: [
        { title: "United Russia Wins Record State Duma Majority", publisher: "The Moscow Times", url: "https://www.themoscowtimes.com/2026/09/25/united-russia-wins-record-state-duma-majority-in-elections-dubbed-as-the-most-uncompetitive-in-modern-history-a93791", date: "2026-09-25" },
        { title: "Russia election results show Putin's party winning: What we know", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/21/russia-election-results-show-putins-party-winning-what-we-know", date: "2026-09-21" },
        { title: "Russia's internet censorship in 2026: VPN crackdowns, mobile shutdowns, Telegram blocks and the state messenger Max", publisher: "Mediazona", url: "https://en.zona.media/article/2026/04/07/russian_internet_censorship_2026", date: "2026-04-07" },
        { title: "Russia: Digital Iron Curtain Falls on Internet Freedom Protection Day", publisher: "Human Rights Watch", url: "https://www.hrw.org/news/2026/03/12/russia-digital-iron-curtain-falls-on-internet-freedom-protection-day", date: "2026-03-12" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "ru-12", kind: "spotlight", asOf: "2026-09-28",
      title: "Chechnya and the making of Putin",
      dek: "Two wars in the North Caucasus shaped modern Russia, and a second one made Vladimir Putin.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru/ru-12-hero.webp",
          alt: "Illustration of a city of new glass towers and a large mosque with tall minarets, set against green mountains in the Caucasus.",
          caption: "Grozny, the Chechen capital, destroyed in the 1990s and rebuilt with Moscow's money.",
          credit: "Illustration — not a photograph",
          prompt: "A rebuilt city of shiny new glass towers and a large white mosque with four tall minarets, green Caucasus mountains rising behind, bright clear light, orderly and strangely new, no people close up, no flags, no legible text." },
        { type: "facts", head: "Two wars", rows: [
          ["First Chechen war", "1994–96; ended in de facto Chechen independence"],
          ["Second Chechen war", "1999–2009, officially"],
          ["Deaths", "Tens of thousands, most of them civilians; estimates vary widely"],
          ["Ruler of Chechnya", "Ramzan Kadyrov, since 2007"]
        ] },
        { type: "section", head: "The first war", md:
          "Chechnya, a mostly Muslim region in the North Caucasus, was conquered by the Russian Empire in the 19th century after decades of resistance, and its whole population was deported to Central Asia by Stalin in 1944. As the Soviet Union collapsed, Chechnya declared independence. In December 1994 Boris Yeltsin sent in the army, expecting a quick victory. Instead, Grozny was reduced to ruins, tens of thousands of civilians died, and a humiliated Russian army withdrew in 1996, leaving Chechnya de facto independent and lawless." },
        { type: "section", head: "Putin's war", md:
          "In August 1999 Chechen-based Islamist fighters invaded neighbouring Dagestan, and in September bombs destroyed apartment blocks in Moscow and other cities, killing about 300 people. The government blamed Chechen terrorists; critics, including journalists and a former security officer, alleged involvement by the FSB security service, which it denies. Yeltsin's new prime minister, Vladimir Putin, promised to 'wipe out' the terrorists and launched a second war. His popularity soared, Yeltsin resigned in his favour on 31 December 1999, and Putin won the presidency in March 2000." },
        { type: "section", head: "Terror and victory", md:
          "The second war was even more brutal, with widespread reports of torture, disappearances and filtration camps from rights groups. Chechen militants struck back with terror attacks, including the siege of a Moscow theatre in 2002, in which about 130 hostages died, mostly from the gas used by special forces, and the Beslan school siege of 2004, in which 334 hostages, 186 of them children, were killed. Putin used Beslan to end the direct election of regional governors." },
        { type: "section", head: "Kadyrov's Chechnya", md:
          "Moscow's solution was to hand Chechnya to a former rebel family. Akhmad Kadyrov switched sides and was assassinated in 2004; his son Ramzan has ruled since 2007. Grozny was rebuilt with federal money, and Kadyrov runs the region as a personal fief, enforcing his version of Islamic morality and loyalty to Putin. Rights groups have documented abductions, torture and a 2017 campaign against gay men, which he denies. His forces have fought in Ukraine." },
        { type: "compare", head: "Two views",
          left: { head: "The Kremlin", md:
            "Russia defeated terrorism and separatism, restored order, and kept the country from breaking apart." },
          right: { head: "Critics", md:
            "The wars killed tens of thousands of civilians, and 'peace' was bought by handing a region to an unaccountable strongman." } },
        { type: "section", head: "Why it matters", md:
          "Chechnya was where Putin built his image as a strong leader, where the security services gained their dominance, and where Russia first practised the tactics of devastating cities that it later used in Syria and [[unit:ua|Ukraine]]. Kadyrov's health and succession are now a worry for the Kremlin, which depends on his loyalty to keep the region quiet." }
      ],
      takeaways: [
        "Russia's first war in Chechnya (1994–96) ended in humiliation and de facto Chechen independence.",
        "The second war, launched by Putin in 1999 after apartment bombings, made him president.",
        "Ramzan Kadyrov has ruled Chechnya since 2007 as a loyal but unaccountable strongman."
      ],
      check: { q: "What event did Putin use to end the direct election of regional governors?",
        choices: ["The Moscow theatre siege", "The Beslan school siege of 2004", "The fall of Grozny"], answer: 1,
        explain: "After Beslan, in which 334 hostages died, Putin centralised power, including the appointment of governors." },
      sources: [
        { title: "Chechnya", publisher: "Britannica", url: "https://www.britannica.com/place/Chechnya", date: "n.d." },
        { title: "Beslan school siege", publisher: "Britannica", url: "https://www.britannica.com/event/Beslan-school-attack", date: "n.d." },
        { title: "Chechen-Russian conflict", publisher: "Encyclopedia.com", url: "https://www.encyclopedia.com/politics/encyclopedias-almanacs-transcripts-and-maps/chechen-russian-conflict", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "ru-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "Five years into the war: talks stalled, an economy near zero growth, a tighter grip at home and no successor in sight.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru/ru-8-hero.webp",
          alt: "Illustration of the red walls and towers of a Moscow fortress at dusk under heavy autumn clouds.",
          caption: "The Kremlin enters the autumn of 2026 with the war unresolved.",
          credit: "Illustration — not a photograph",
          prompt: "Tall red brick fortress walls and pointed towers at dusk under heavy autumn clouds, a wide empty cobbled square in front, wet stones reflecting street lamps, no people, a brooding mood." },
        { type: "section", head: "The state of play", md:
          "- **The war:** Russia holds about a fifth of [[unit:ua]]; the front moves slowly; strikes on each other's energy systems go on despite repeated announcements of pauses.\n" +
          "- **Talks:** US envoys still shuttle, but territory and security guarantees remain unresolved.\n" +
          "- **Economy:** growth near zero, a 14% key rate, oil income squeezed by sanctions and drone strikes.\n" +
          "- **At home:** a record Duma majority, WhatsApp and YouTube blocked, the opposition in exile.\n" +
          "- **Still working:** prisoner exchanges with Ukraine, among the few agreements that reliably hold.\n" +
          "- **Partners:** oil sales to [[unit:cn]] and [[unit:in]], soldiers and shells from [[unit:kp]], and a partner at war in [[unit:ir]]." },
        { type: "section", head: "Three scenarios", md:
          "- **Frozen conflict.** A ceasefire along roughly the current line, without a peace treaty, leaving Russia in control of occupied land and Ukraine armed and aligned with the West.\n" +
          "- **Grinding on.** No deal; slow Russian advances, rising costs on both sides, and the economy and army strained through another winter.\n" +
          "- **A settlement.** A broader deal on territory, guarantees and sanctions relief. Diplomats on all sides say this is the hardest to reach." },
        { type: "section", head: "The succession question", md:
          "Putin turns 74 in October 2026. Under the constitution, if a president dies or leaves office, the prime minister, currently Mikhail Mishustin, becomes acting president and an election must follow within three months. Putin has named no heir, and the system is built so that nobody looks like one. That makes a sudden transition the biggest unknown in Russian politics." },
        { type: "section", head: "Europe on guard", md:
          "Across the border, Europe is rearming. NATO members agreed in June 2025 to raise defence spending toward 5% of GDP by 2035, and states on Russia's flank, such as [[unit:pl]] and the Baltic countries, report drones, sabotage and cyberattacks they blame on Moscow. Whatever happens in Ukraine, a long confrontation between Russia and Europe looks set to outlast the war." },
        { type: "section", head: "What to look for", md:
          "Watch Russia's oil income and budget: if deficits keep widening, the Kremlin will face harder choices between the army and living standards. Watch the energy strikes: whether the announced pause holds through winter says a lot about both sides' intentions. And watch Europe's sanctions and the use of frozen Russian assets, which the EU chose not to tap in December 2025 but has not ruled out. At home, watch the new Duma's autumn session for further laws on the internet and military service." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Oct–Nov 2026:** Bank of Russia rate decisions; the new Duma's first session\n" +
          "- **Winter 2026–27:** strikes on energy systems, and whether the pause holds\n" +
          "- **January 2027:** the EU's LNG ban begins, under its 19th sanctions package\n" +
          "- **2030:** the next presidential election" },
        { type: "section", head: "Connections", md:
          "Russia runs through [[unit:ua]] (the war), [[unit:us]] (the talks), [[unit:cn]], [[unit:in]] and [[unit:kp]] (its partners), [[unit:pl]] and [[unit:de]] (Europe's front line and rearmament) and [[unit:tr]] (a go-between)." }
      ],
      takeaways: [
        "The war grinds on with Russia holding about a fifth of Ukraine and talks stalled on territory and guarantees.",
        "The economy has stalled, and oil income is under pressure from sanctions and drones.",
        "At home, the Kremlin has tightened control of elections and the internet."
      ],
      check: { q: "About how much of Ukraine's territory does Russia occupy?",
        choices: ["About a twentieth", "About a fifth", "About half"], answer: 1,
        explain: "Russia occupies about 20% of Ukraine, including Crimea and most of the Donbas, a share that has changed only slowly since 2022." },
      sources: [
        { title: "Mapping Russian attacks and territorial gains across Ukraine", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/24/mapping-russian-attacks-and-territorial-gains-across-ukraine", date: "2026-02-24" },
        { title: "Bank of Russia keeps the key rate at 14.00% p.a.", publisher: "Bank of Russia", url: "https://www.cbr.ru/eng/press/keypr/", date: "2026-09-11" },
        { title: "EU agrees €90 billion loan to Ukraine, but squabbles over frozen Russian assets expose the bloc's deep divisions", publisher: "The Conversation", url: "https://theconversation.com/eu-agrees-90-billion-loan-to-ukraine-but-squabbles-over-frozen-russian-assets-expose-the-blocs-deep-divisions-272095", date: "2025-12" },
        { title: "Peace negotiations in the Russo-Ukrainian war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Peace_negotiations_in_the_Russo-Ukrainian_war", date: "2026-09" }
      ]
    }
  ]
});
