/* ============================================================
   Unit 41 — Kazakhstan 🇰🇿
   Research note and sources: tools/research/kz.md
   Current as of 22 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("kz", {
  id: "kz",
  asOf: "2026-10-22",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "kz-1", kind: "snapshot", asOf: "2026-10-22",
      title: "Kazakhstan in brief",
      dek: "The world's largest landlocked country, rich in oil and uranium, wedged between Russia and China, and remaking its constitution under a cautious president.",
      blocks: [
        { type: "map", src: "maps/kz.svg",
          alt: "Locator map of Central Asia with Kazakhstan highlighted, a vast country stretching from the Caspian Sea in the west to China in the east, with a very long border with Russia to the north, and a small globe showing its place in the world.",
          caption: "Kazakhstan is the ninth-largest country on earth; its border with Russia is one of the longest in the world.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Astana; the largest city is Almaty"],
          ["People", "About 20 million"],
          ["System", "Presidential republic under a new 2026 constitution"],
          ["President", "Kassym-Jomart Tokayev, since 2019"],
          ["Vice-president", "Erlan Karin, since August 2026"],
          ["Parliament", "Single-chamber Kurultai, 145 seats, elected August 2026"],
          ["Resources", "World's largest uranium producer; major oil exporter"]
        ] },
        { type: "section", head: "Why it's here", md:
          "Kazakhstan is the heavyweight of Central Asia: larger than Western Europe, it produces about 40% of the world's uranium and exports oil through [[unit:ru|Russia]] and across the Caspian. It borders both Russia and [[unit:cn|China]], and its rail lines are central to China's overland trade with Europe. Since Russia invaded [[unit:ua|Ukraine]], Western governments, Moscow and Beijing have all courted it, and it has tried to stay friends with each." },
        { type: "section", head: "Who holds power", md:
          "The president dominates. Nursultan Nazarbayev ran the country from 1989 until he handed over to Kassym-Jomart Tokayev, a career diplomat, in 2019, while keeping great influence. After deadly unrest in January 2022 Tokayev pushed Nazarbayev's family out of power. In March 2026 voters approved a new constitution that created a single-chamber parliament, the Kurultai, and restored the post of vice-president. The pro-presidential Adilet party won about 71% of the vote in August." },
        { type: "section", head: "The mood in 2026", md:
          "Kazakhs are uneasy about money. Value-added tax rose from 12% to 16% in January, and inflation reached 10.2% in February. Oil exports were hit when Ukrainian drones damaged the terminal near Russia's Black Sea port of Novorossiysk, through which most Kazakh crude flows, in late 2025. Tokayev promises a fairer, less 'super-presidential' state; critics say the new constitution changes the form of power more than its substance." },
        { type: "section", head: "Many peoples", md:
          "About 70% of the population is ethnic Kazakh, a Turkic people with a nomadic heritage, and about 15% is ethnic Russian, mostly in the north. There are also Uzbeks, Ukrainians, Uyghurs, Tatars, Germans and Koreans, many descended from people deported there under Stalin. Kazakh is the state language, but Russian is widely used. Most Kazakhs are Sunni Muslims in a secular state." },
        { type: "section", head: "Multi-vector", md:
          "Kazakhstan calls its foreign policy 'multi-vector': close ties with Russia, which it joins in the Eurasian Economic Union and a security alliance; deep trade with China; and investment from the [[unit:us|United States]] and Europe, especially in oil. In 2025 it announced it would join the [[abraham-accords]] and signed critical-minerals deals in Washington, while in 2026 it signed a deal with Russia to build its first nuclear power plant." },
        { type: "callout", tone: "why", md:
          "Kazakhstan shows how a resource-rich state between great powers balances them, and how an authoritarian system tries to reform itself from the top." },
        { type: "section", head: "Oil, uranium and the steppe", md:
          "Kazakhstan has some of the world's largest oil reserves, at Tengiz, Kashagan and Karachaganak, developed by Western companies such as Chevron and ExxonMobil. It also mines coal, copper, zinc and chromium. Oil wealth built Astana and a national fund worth tens of billions of dollars, but has also bred corruption and inequality, especially in the oil regions of the west, where the 2011 and 2022 protests began." }
      ],
      takeaways: [
        "Kazakhstan is a vast, resource-rich Central Asian state bordering Russia and China.",
        "A new constitution in 2026 created a single-chamber parliament, the Kurultai, and a vice-presidency.",
        "Its 'multi-vector' policy balances Russia, China and the West."
      ],
      check: { q: "What is Kazakhstan's new single-chamber parliament called?",
        choices: ["The Duma", "The Kurultai", "The Majlis"], answer: 1,
        explain: "The 2026 constitution replaced the Senate and Mazhilis with a 145-seat Kurultai." },
      sources: [
        { title: "Kazakhstan's pro-government party wins parliamentary election, boosting president's grip on power", publisher: "NY1 / AP", url: "https://ny1.com/nyc/all-boroughs/ap-top-news/2026/08/24/kazakhstans-pro-government-party-wins-parliamentary-election-boosting-presidents-grip-on-power", date: "2026-08-24" },
        { title: "Kazakhstan adopts new constitution after March 2026 referendum", publisher: "CEVRO", url: "https://www.cevro.cz/en/caps/kazakhstan-adopts-new-constitution-after-march-2026-referendum", date: "2026" },
        { title: "Kazakhstan", publisher: "Britannica", url: "https://www.britannica.com/place/Kazakhstan", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "kz-2", kind: "power", asOf: "2026-10-22",
      title: "A new constitution, the same president",
      dek: "The 2026 constitution merged parliament into one chamber and brought back a vice-president; the president still holds the most power.",
      blocks: [
        { type: "diagram", src: "img/kz/kz-2-power.svg",
          alt: "Diagram of power in Kazakhstan. Voters elect the president, Kassym-Jomart Tokayev, for a single seven-year term, and the 145-seat Kurultai by proportional representation for five years. The president appoints the vice-president, Erlan Karin, and the prime minister, Olzhas Bektenov, with the Kurultai's consent. A Constitutional Court reviews laws. The next presidential election is due in 2029.",
          caption: "The 2026 constitution keeps a strong president but requires parliament's consent for key appointments.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "From 1995 to 2026", md:
          "Kazakhstan's 1995 constitution built a powerful presidency for Nazarbayev, with a two-chamber parliament, the Senate and the Mazhilis, that rarely challenged him. Amendments in 2007 exempted him from term limits as 'First President'. After the 2022 unrest, a referendum stripped him of that status and limited presidents to a single seven-year term. The March 2026 referendum went further and adopted a wholly new constitution, effective from 1 July 2026." },
        { type: "section", head: "The president", md:
          "The president is head of state, commander-in-chief and the main source of policy. He appoints the prime minister and cabinet, regional governors (akims) and judges, though key appointments now require the Kurultai's consent. Tokayev was elected in 2019 and again in 2022 for seven years, so his term ends in 2029. He has said it is too early to say whether he will run again; a court ruling under the new constitution would allow it." },
        { type: "section", head: "The Kurultai", md:
          "The Kurultai, named after the traditional assemblies of steppe peoples, replaced both chambers. Its 145 members are elected by party lists for five years. It passes laws, approves the budget, consents to the appointment of the vice-president, prime minister and senior officials and can call referendums. In the first election, on 23 August 2026, the pro-presidential Adilet party won 71% of the vote; four other parties, all broadly loyal, passed the threshold." },
        { type: "section", head: "Vice-president and government", md:
          "The new constitution restored a vice-presidency, which existed only briefly in the 1990s. The vice-president, appointed by the president with the Kurultai's consent, is first in line if the president leaves office early and represents him in dealings with parliament and the government. On 31 August 2026 Tokayev appointed Erlan Karin, his long-time adviser, and reappointed Olzhas Bektenov as prime minister." },
        { type: "section", head: "Limits on politics", md:
          "Elections are tightly managed. Opposition parties struggle to register, and no genuine opposition party sat in the old parliament. International observers from the OSCE said the 2026 election lacked distinct political alternatives. Protests need permission, and critics of the government have been jailed. Independent media operate under pressure, but online debate is livelier than in most of Central Asia." },
        { type: "section", head: "Courts and regions", md:
          "A Constitutional Court, restored in 2023, can review laws and hear complaints from citizens. Judges are appointed by the president, and courts rarely rule against the government in political cases. Kazakhstan is a unitary state: regional governors, akims, are appointed by the president, although since 2021 some district and village akims have been directly elected as an experiment in local democracy." },
        { type: "section", head: "Parties", md:
          "Besides Adilet, the Kurultai includes Auyl, an agrarian party; Respublica, a business-minded party founded in 2023; Ak Zhol, a pro-business party; and the Nationwide Social Democratic Party, the oldest of the group. None opposes the president, and all describe themselves as 'constructive'. Real opposition figures operate mostly online or from abroad." },
        { type: "compare", head: "Two views of the reforms",
          left: { head: "Tokayev's view", md:
            "A 'Just Kazakhstan' with a stronger parliament, one-term presidents and a planned succession, replacing the personal rule of the past." },
          right: { head: "Critics' view", md:
            "Managed reform that tidies up the system while keeping all real power with the president and loyal parties." } }
      ],
      takeaways: [
        "The 2026 constitution replaced the two-chamber parliament with a 145-seat Kurultai.",
        "The president, limited to one seven-year term, appoints key officials with the Kurultai's consent.",
        "Elections are managed; the pro-presidential Adilet party won 71% in August 2026."
      ],
      check: { q: "How long is a Kazakh president's term since the 2022 reforms?",
        choices: ["Five years, renewable once", "A single seven-year term", "Life"], answer: 1,
        explain: "The 2022 referendum limited presidents to one seven-year term." },
      sources: [
        { title: "Kazakhstan's new constitution", publisher: "Verfassungsblog", url: "https://verfassungsblog.de/kazakhstan-constitution/", date: "2026-03-12" },
        { title: "2026 Kazakh legislative election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Kazakh_legislative_election", date: "2026" },
        { title: "Kazakhstan's Tokayev appoints longtime adviser as vice president", publisher: "Al Jazeera", url: "https://aljazeera.com/news/2026/8/31/kazakhstans-president-taps-longtime-adviser-for-vice-president-role", date: "2026-08-31" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "kz-9", kind: "founding", asOf: "2026-10-22",
      title: "Khans of the steppe",
      dek: "Nomadic Kazakh hordes ruled the steppe for centuries, until the Russian Empire absorbed them and settlers took their pastures.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kz/kz-9-hero.webp",
          alt: "Illustration of a vast golden grassland steppe at sunset with several white felt yurts, grazing horses and snow-capped mountains far away.",
          caption: "For centuries Kazakhs moved their herds and yurts across the steppe with the seasons.",
          credit: "Illustration — not a photograph",
          prompt: "A vast flat golden grassland steppe at sunset with several round white felt yurts, a herd of horses grazing, a thin line of snow-capped mountains far on the horizon, enormous pale sky with long clouds, timeless and free, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Steppe to empire", items: [
          ["1200s", "The steppe becomes part of the Mongol empire"],
          ["c. 1465", "The Kazakh Khanate is founded"],
          ["1600s–1700s", "Three hordes (zhuz); wars with the Dzungars"],
          ["1731", "The Junior Horde accepts Russian protection"],
          ["1847", "Kenesary Khan's revolt is crushed"],
          ["1916", "Revolt against conscription"],
          ["1917–1920", "The Alash Orda autonomous government"]
        ] },
        { type: "section", head: "The Kazakh Khanate", md:
          "After the Mongol empire broke up, its successor states fought over the steppe. In about 1465 two descendants of Genghis Khan, Kerei and Janibek, led their followers away from the Uzbek khanate and founded the Kazakh Khanate; the word Kazakh is often said to mean 'free wanderer'. The khanate split into three hordes, or zhuz, the Senior, Middle and Junior, a division of clans that still matters socially today." },
        { type: "section", head: "The Dzungar wars", md:
          "In the 17th and 18th centuries the Dzungars, a western Mongol people, invaded the steppe repeatedly. The 1723 invasion, remembered as the 'Great Disaster', drove Kazakhs from their pastures with huge losses. Kazakh forces later fought back, but the khans looked for protection. In 1731 Abulkhair Khan of the Junior Horde swore allegiance to Russia, and the other hordes followed over the next century." },
        { type: "section", head: "Russian rule", md:
          "Russia built a line of forts across the steppe, abolished the khans' power in the 1820s and 1840s and crushed the revolt of Kenesary Khan, the last khan, in 1847. From the late 19th century hundreds of thousands of Russian and Ukrainian peasants settled the northern steppe, taking grazing land. In 1916 Kazakhs and Kyrgyz rose against a tsarist order to conscript them for labour behind the front; the revolt was suppressed with great loss of life." },
        { type: "section", head: "Alash", md:
          "After the 1917 revolution, Kazakh intellectuals of the Alash party, led by Alikhan Bokeikhanov, declared an autonomous government, Alash Orda, and sided at first with the anti-Bolshevik Whites. By 1920 the Bolsheviks controlled the region. Most Alash leaders were later executed in Stalin's purges. Independent Kazakhstan has rehabilitated them as founders of the national idea." },
        { type: "section", head: "Nomadic life", md:
          "Kazakh society was organised around herding horses, sheep, camels and cattle, moving between summer and winter pastures. Families lived in felt yurts that could be packed onto camels in hours. Clans traced descent through the male line, and the three zhuz each had their own territory. Oral poetry, epic songs and the two-stringed dombra carried history from generation to generation." },
        { type: "section", head: "The silk roads", md:
          "Long before the Kazakhs, the southern steppe was crossed by the silk roads. Cities such as Otrar and Turkestan, home to the 14th-century mausoleum of the Sufi poet Khoja Ahmed Yasawi, grew rich on trade between China, Persia and Europe. Turkestan remains a place of pilgrimage and a symbol of Kazakh Muslim heritage." },
        { type: "compare", head: "Two views of Russian rule",
          left: { head: "Russian historians' view", md:
            "The hordes chose Russian protection, which brought security, trade, schools and later industry to the steppe." },
          right: { head: "Kazakh historians' view", md:
            "A colonial conquest that took the land, broke the nomadic way of life and prepared the way for Soviet catastrophe." } },
        { type: "section", head: "Why it matters", md:
          "Russian politicians who call northern Kazakhstan historically Russian revive this past; Kazakhs answer with the 550-year history of their khanate." }
      ],
      takeaways: [
        "The Kazakh Khanate was founded around 1465 and divided into three hordes.",
        "Russia absorbed the steppe between 1731 and the mid-19th century, settling peasants on Kazakh land.",
        "The Alash movement declared Kazakh autonomy after 1917 before the Bolsheviks took over."
      ],
      check: { q: "What was the Alash Orda?",
        choices: ["A Mongol army", "A Kazakh autonomous government formed after 1917", "A Soviet collective farm"], answer: 1,
        explain: "Alash Orda was the autonomous government declared by Kazakh nationalists in 1917; the Bolsheviks ended it by 1920." },
      sources: [
        { title: "History of Kazakhstan", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Kazakhstan", date: "n.d." },
        { title: "Kazakh Khanate", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kazakh_Khanate", date: "n.d." },
        { title: "Kazakhstan", publisher: "Britannica", url: "https://www.britannica.com/place/Kazakhstan", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "kz-3", kind: "history", asOf: "2026-10-22",
      title: "From Soviet republic to Nazarbayev's state",
      dek: "Famine, deportations and nuclear tests under Soviet rule, then three decades of independence under one man and a violent handover.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kz/kz-3-hero.webp",
          alt: "Illustration of a futuristic capital skyline on the open steppe at dusk, with a tall white tower topped by a golden sphere, glass skyscrapers and a huge tent-shaped building.",
          caption: "Astana, built on the steppe after the capital moved there from Almaty in 1997.",
          credit: "Illustration — not a photograph",
          prompt: "A futuristic capital skyline rising from flat open steppe at dusk, a tall slender white tower topped by a large golden sphere, a giant transparent tent-shaped building, glass skyscrapers and a wide boulevard, blue and orange sky, ambitious and lonely, no people close up, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1930–1933", "Famine kills about 1.5 million Kazakhs ([[lesson:kz-10]])"],
          ["1936", "Kazakh Soviet Socialist Republic"],
          ["1949–1989", "Soviet nuclear tests at Semipalatinsk ([[lesson:kz-11]])"],
          ["1954", "Khrushchev's Virgin Lands campaign"],
          ["December 1986", "Jeltoqsan protests in Almaty"],
          ["16 Dec 1991", "Independence"],
          ["1997", "Capital moves to Astana"],
          ["2019", "Nazarbayev hands over to Tokayev"],
          ["January 2022", "Deadly unrest ([[lesson:kz-12]])"]
        ] },
        { type: "section", head: "1. The Soviet republic", md:
          "Soviet rule transformed and devastated the steppe. Forced collectivisation in the early 1930s caused a famine that killed about 1.5 million Kazakhs. Stalin deported whole peoples there, including Germans, Chechens, Koreans and Poles, and the steppe held some of the largest Gulag camps. In the 1950s Khrushchev's Virgin Lands campaign ploughed up huge areas for wheat and brought hundreds of thousands of new settlers, making Kazakhs a minority in their own republic." },
        { type: "section", head: "2. Jeltoqsan", md:
          "In December 1986 Mikhail Gorbachev replaced the long-serving Kazakh party leader, Dinmukhamed Kunayev, with an ethnic Russian from outside the republic. Students protested in Almaty, and police and troops broke up the demonstrations; several people were killed and many jailed. The protests, called Jeltoqsan ('December'), were one of the first nationalist uprisings of the Soviet collapse. In 1989 Nursultan Nazarbayev, a Kazakh, became party leader." },
        { type: "section", head: "3. Independence", md:
          "Kazakhstan was the last Soviet republic to declare independence, on 16 December 1991. It inherited about 1,400 nuclear warheads and agreed to give them up; the last were removed by 1995. Nazarbayev became president and stayed in power for almost three decades through elections that were never free. Oil investment, led by US companies at Tengiz and later the giant Kashagan field, made it the richest country in Central Asia." },
        { type: "section", head: "4. Nazarbayev's system", md:
          "Nazarbayev built a new capital, Astana, on the northern steppe and moved the government there in 1997, partly to anchor the Russian-majority north. His relatives and allies controlled banks, energy and media. Opposition leaders were jailed or exiled, and in 2011 police shot dead at least 14 striking oil workers in Zhanaozen. In March 2019 he resigned but kept power as chairman of the Security Council and 'Leader of the Nation', and the capital was renamed Nur-Sultan in his honour." },
        { type: "section", head: "5. Tokayev's turn", md:
          "Kassym-Jomart Tokayev, Nazarbayev's chosen successor, at first seemed a placeholder. The unrest of January 2022 changed that: Tokayev called in troops from a Russian-led alliance, ordered security forces to shoot, then removed Nazarbayev and his relatives from key posts. The capital became Astana again in 2022. Tokayev promised a 'New Kazakhstan' and reforms leading to the 2026 constitution ([[lesson:kz-5]])." },
        { type: "compare", head: "Two views of the Nazarbayev era",
          left: { head: "Supporters", md:
            "Nazarbayev kept a multi-ethnic country peaceful, gave up nuclear weapons and turned oil into roads, schools and a new capital." },
          right: { head: "Critics", md:
            "He built a family-run kleptocracy, crushed dissent and left a system that exploded in violence in 2022." } }
      ],
      takeaways: [
        "Soviet rule brought famine, deportations, nuclear tests and mass settlement to Kazakhstan.",
        "Kazakhstan became independent in December 1991 and gave up its nuclear arsenal.",
        "Nazarbayev ruled until 2019; Tokayev sidelined his family after the 2022 unrest."
      ],
      check: { q: "What did Kazakhstan do with the Soviet nuclear weapons on its soil?",
        choices: ["Kept them", "Gave them up; the last were removed by 1995", "Sold them to China"], answer: 1,
        explain: "Kazakhstan inherited about 1,400 warheads and transferred them to Russia for dismantling by 1995." },
      sources: [
        { title: "History of Kazakhstan", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Kazakhstan", date: "n.d." },
        { title: "Nursultan Nazarbayev", publisher: "Britannica", url: "https://www.britannica.com/biography/Nursultan-Nazarbayev", date: "n.d." },
        { title: "Jeltoqsan", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jeltoqsan", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "kz-10", kind: "past", asOf: "2026-10-22",
      title: "The great famine, 1930–1933",
      dek: "Stalin's drive to settle the nomads and seize their herds killed about 1.5 million Kazakhs, perhaps 40% of the people.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kz/kz-10-hero.webp",
          alt: "Illustration of an empty frozen steppe under a grey winter sky, with an abandoned yurt frame, scattered animal bones and a lone row of telegraph poles.",
          caption: "Herds that had sustained Kazakh families for centuries were wiped out in a few years.",
          credit: "Illustration — not a photograph",
          prompt: "An empty flat frozen steppe under a heavy grey winter sky, the bare wooden frame of an abandoned yurt, scattered pale animal bones in thin snow, a lone row of telegraph poles fading into the distance, desolate and silent, no people, no flags, no legible text." },
        { type: "facts", head: "Asharshylyk", rows: [
          ["When", "1930–1933"],
          ["Deaths", "About 1.5 million Kazakhs, roughly 38–40% of the Kazakh population"],
          ["Livestock lost", "About 90% of herds"],
          ["Refugees", "About 1 million fled, many to China, Mongolia and other Soviet republics"],
          ["Name", "Asharshylyk, 'the great hunger'"]
        ] },
        { type: "section", head: "Settling the nomads", md:
          "In the late 1920s the Soviet leadership decided that Kazakh nomadism was backward and that the steppe's herds should feed industrial cities. Officials confiscated livestock from wealthier households, then forced nomads to settle on collective farms that had no housing, fodder or water. Grain and meat quotas were set impossibly high and were enforced even as people starved." },
        { type: "section", head: "Collapse", md:
          "Herds that numbered tens of millions of animals fell by about 90% as they were seized, slaughtered by owners in protest or died on badly run collective farms. Without animals, Kazakh families had nothing to eat. Hundreds of thousands fled, some across the border to China, some to Uzbekistan, Kyrgyzstan and Siberia; many died on the way. Kazakhs became a minority in their own republic, a change that shaped its demography for decades." },
        { type: "section", head: "Silence and memory", md:
          "The famine was hidden during the Soviet period. Researchers estimate that about 1.5 million Kazakhs died, roughly 38–40% of the Kazakh population, proportionally the worst of the Soviet famines of the early 1930s, which also killed millions in [[unit:ua|Ukraine]]. Independent Kazakhstan marks a day of remembrance on 31 May for victims of famine and political repression. Unlike Ukraine, it has not formally called the famine a genocide." },
        { type: "section", head: "Debates", md:
          "Historians debate whether the famine was deliberate. Many see it as the result of ruthless policy, ideological contempt for nomads and bureaucratic indifference rather than a plan to destroy Kazakhs as a people. Others argue that officials knew what was happening and continued anyway. The question is sensitive in relations with [[unit:ru|Russia]], which inherited the Soviet archives." },
        { type: "section", head: "Goloshchekin", md:
          "The campaign was led by Filipp Goloshchekin, the Communist Party chief in Kazakhstan from 1925 to 1933, who called for a 'little October' revolution in the steppe. He pushed confiscations and forced settlement harder than Moscow required. Kazakh communists who warned of the disaster, such as Turar Ryskulov, wrote to Stalin; they were ignored and later shot in the purges." },
        { type: "section", head: "The Kazakh diaspora", md:
          "The famine created a large Kazakh diaspora in China, Mongolia and later Turkey. After independence, Kazakhstan invited ethnic Kazakhs abroad, known as oralmans or qandas, to 'return'; more than a million have resettled, changing the country's ethnic balance and strengthening the Kazakh language." },
        { type: "compare", head: "Two ways to name it",
          left: { head: "A tragedy", md:
            "A catastrophe caused by Soviet collectivisation that struck many peoples, best remembered together." },
          right: { head: "A genocide", md:
            "A deliberate destruction of the Kazakh nomadic nation, which deserves formal recognition as such." } },
        { type: "section", head: "Why it matters", md:
          "The famine is the deepest wound of Kazakh history and a reason for wariness toward Moscow's version of the Soviet past." }
      ],
      takeaways: [
        "Forced settlement and confiscation of herds in 1930–1933 caused the Kazakh famine.",
        "About 1.5 million Kazakhs died, roughly 38–40% of the Kazakh population.",
        "Kazakhstan remembers the victims each 31 May but has not formally called it genocide."
      ],
      check: { q: "What was the main cause of the Kazakh famine of 1930–1933?",
        choices: ["Drought alone", "Forced collectivisation and the seizure of herds", "A foreign invasion"], answer: 1,
        explain: "Soviet policy confiscated livestock and forced nomads onto collective farms, destroying their food supply." },
      sources: [
        { title: "Kazakh famine of 1930–1933", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kazakh_famine_of_1930%E2%80%931933", date: "n.d." },
        { title: "History of Kazakhstan", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Kazakhstan", date: "n.d." },
        { title: "Kazakhstan", publisher: "Britannica", url: "https://www.britannica.com/place/Kazakhstan", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "kz-11", kind: "past", asOf: "2026-10-22",
      title: "The Polygon: forty years of nuclear tests",
      dek: "The Soviet Union exploded 456 nuclear bombs near Semipalatinsk; a protest movement closed the site, and Kazakhstan became a champion of disarmament.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kz/kz-11-hero.webp",
          alt: "Illustration of a flat dry steppe with a huge rising mushroom cloud far on the horizon at dawn, a rusting concrete observation tower in the foreground.",
          caption: "The Semipalatinsk test site, known as the Polygon, covered an area about the size of Belgium.",
          credit: "Illustration — not a photograph",
          prompt: "A flat dry brown steppe at dawn with a huge pale mushroom cloud rising far away on the horizon, a rusting concrete observation tower and broken fence posts in the foreground, eerie pink and grey light, ominous and still, no people, no flags, no legible text." },
        { type: "facts", head: "The Polygon", rows: [
          ["Site", "About 18,000 sq km near Semipalatinsk (now Semey)"],
          ["Tests", "456 nuclear explosions, 1949–1989"],
          ["First", "29 August 1949, the first Soviet atomic bomb"],
          ["Closed", "29 August 1991, by decree of Nazarbayev"],
          ["People affected", "Estimates of up to 1.5 million exposed to radiation"]
        ] },
        { type: "section", head: "The tests", md:
          "In 1949 the Soviet Union exploded its first atomic bomb on the steppe near Semipalatinsk, in north-east Kazakhstan. Over the next 40 years it carried out 456 tests there, more than 100 of them above ground until 1963, when atmospheric tests were banned, and the rest underground. Villages near the site were not evacuated; some residents say soldiers simply told them to stand outside during explosions." },
        { type: "section", head: "The cost", md:
          "Doctors in the region recorded high rates of cancer, birth defects and other illnesses that local people and many researchers link to radiation. Soviet authorities kept the effects secret. Estimates of how many people were exposed run as high as 1.5 million. Today Kazakhstan pays small compensation to those registered as affected, and families still describe the health consequences across generations." },
        { type: "section", head: "Nevada–Semipalatinsk", md:
          "In February 1989 the poet Olzhas Suleimenov used a live television broadcast to call for an end to the tests. Within weeks a mass movement, named Nevada–Semipalatinsk in solidarity with protesters at the US test site, collected more than a million signatures. It was one of the first mass protest movements tolerated in the Soviet Union. The last test was in October 1989, and on 29 August 1991, exactly 42 years after the first, Nazarbayev ordered the site closed." },
        { type: "section", head: "A disarmament champion", md:
          "Independent Kazakhstan gave up the Soviet warheads on its soil, joined the Nuclear Non-Proliferation Treaty and in 2006 helped create a nuclear-weapon-free zone in Central Asia. The UN declared 29 August the International Day against Nuclear Tests at its suggestion. Kazakhstan also hosts an international bank of low-enriched uranium. Yet it is now building its first nuclear power plant, with [[unit:ru|Russia]] ([[lesson:kz-6]])." },
        { type: "section", head: "Other Soviet sites", md:
          "Semipalatinsk was not the only Soviet military site in Kazakhstan. Baikonur, in the south, was the launch site for Sputnik in 1957 and Yuri Gagarin's flight in 1961, and Russia still leases it for space launches. Huge areas were used as missile ranges, and the island of Vozrozhdeniya in the Aral Sea held a biological weapons testing ground until 1992." },
        { type: "section", head: "The Kazakhs who campaigned", md:
          "The anti-nuclear campaign gave Kazakhs a rare chance to protest openly in the Soviet era, and many leaders of later civic movements began there. Olzhas Suleimenov became a respected public figure and later a diplomat. The site is now a scientific reserve, though scrap-metal hunters have scavenged it for years." },
        { type: "compare", head: "Two lessons drawn",
          left: { head: "For Kazakhs", md:
            "Nuclear weapons brought only suffering; giving them up made the country safer and earned respect." },
          right: { head: "For some strategists", md:
            "Ukraine's experience after giving up its arsenal shows the risk of disarming next to Russia." } },
        { type: "section", head: "Why it matters", md:
          "The Polygon gave Kazakhstan its first protest movement and a lasting role in global disarmament diplomacy." }
      ],
      takeaways: [
        "The Soviet Union carried out 456 nuclear tests near Semipalatinsk between 1949 and 1989.",
        "The Nevada–Semipalatinsk movement led to the site's closure on 29 August 1991.",
        "Kazakhstan gave up its inherited warheads and champions nuclear disarmament."
      ],
      check: { q: "Who launched the Nevada–Semipalatinsk anti-nuclear movement in 1989?",
        choices: ["Nursultan Nazarbayev", "The poet Olzhas Suleimenov", "Mikhail Gorbachev"], answer: 1,
        explain: "Suleimenov appealed on television in February 1989, sparking a movement that collected over a million signatures." },
      sources: [
        { title: "Semipalatinsk Test Site", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Semipalatinsk_Test_Site", date: "n.d." },
        { title: "Nevada Semipalatinsk", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nevada_Semipalatinsk", date: "n.d." },
        { title: "History of Kazakhstan", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Kazakhstan", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "kz-4", kind: "players", asOf: "2026-10-22",
      title: "Tokayev, Karin and the old guard",
      dek: "A diplomat-president planning his succession, the adviser now one step from power, a technocrat prime minister and the fallen Nazarbayev clan.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kz/kz-4-hero.webp",
          alt: "Illustration of a grand white presidential palace with a blue and gold dome and spire on a wide plaza in Astana at night, lit by floodlights.",
          caption: "The Akorda presidential palace in Astana.",
          credit: "Illustration — not a photograph",
          prompt: "A grand white presidential palace with a large pale blue dome topped by a golden spire and columned facade, on a wide empty plaza at night lit by floodlights, glass towers in the distance, deep blue sky, cold and imposing, no people close up, no flags, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Kassym-Jomart Tokayev", role: "President, since 2019",
            img: "img/kz/portrait-tokayev.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Former foreign minister and UN official in Geneva, fluent in Russian, Chinese and English. Term ends in 2029." },
          { name: "Erlan Karin", role: "Vice-president, since August 2026",
            img: "img/kz/portrait-karin.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Political scientist and Tokayev's chief adviser since 2019; helped draft the new constitution. Now first in line to succeed him." },
          { name: "Olzhas Bektenov", role: "Prime minister, since 2024",
            img: "img/kz/portrait-bektenov.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Former head of the anti-corruption agency; reappointed in August 2026 to manage the economy and the tax rises." },
          { name: "Nursultan Nazarbayev", role: "President 1990–2019",
            img: "img/kz/portrait-nazarbayev.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "The country's founder, now in his mid-80s. Lost his titles and his family's grip on power after January 2022." },
          { name: "Karim Massimov", role: "Former security chief",
            img: "img/kz/portrait-massimov.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Twice prime minister and head of the National Security Committee; arrested in January 2022 and jailed for 18 years for treason and attempting to seize power." },
          { name: "Timur Kulibayev", role: "Businessman, Nazarbayev's son-in-law",
            img: "img/kz/portrait-kulibayev.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Once among the country's richest and most powerful men; gave up key business posts after 2022." }
        ] },
        { type: "section", head: "Tokayev's rise", md:
          "Tokayev spent most of his career in diplomacy, rising to foreign minister, prime minister, Senate chairman and director-general of the UN office in Geneva. Nazarbayev chose him in 2019 because he seemed loyal and without his own power base. The January 2022 crisis allowed him to build one, by purging Nazarbayev's relatives and allies from the security services, state companies and parliament." },
        { type: "section", head: "Planning the succession", md:
          "The new vice-presidency is widely read as a plan for an orderly handover. Erlan Karin, a political scientist who ran the president's strategy and communications, would take over if Tokayev left office early. Tokayev has said it is too early to decide whether to run again in 2029; an analyst told Reuters he was unlikely to, while a court ruling under the new constitution leaves the option open." },
        { type: "section", head: "The old guard", md:
          "Nazarbayev's family has lost formal power but not all its wealth. His nephew Kairat Satybaldy was jailed for embezzlement, and his brother Bolat had assets seized. Some relatives' assets abroad were returned to the state under a programme to recover 'illegally acquired' wealth. Nazarbayev himself lives quietly in Astana and has said he is a pensioner; his statues and portraits have largely disappeared." },
        { type: "section", head: "The Nazarbayev family", md:
          "Nazarbayev's eldest daughter Dariga was once speaker of the Senate and seen as a possible successor until Tokayev removed her in 2020. His middle daughter Dinara and her husband Timur Kulibayev became among the richest people in the country. After 2022 several of Nazarbayev's relatives lost posts in parliament and state companies, and some assets were handed over to the state." },
        { type: "section", head: "The security services", md:
          "The National Security Committee (KNB), the successor of the Soviet KGB, is the most powerful institution after the presidency. Its chief in January 2022, Karim Massimov, was arrested within days, accused of plotting to seize power. Tokayev put loyalists in charge of the KNB, the interior ministry and the army, which is why his position is now seen as secure." },
        { type: "compare", head: "Two views of Tokayev",
          left: { head: "Supporters", md:
            "A reformer who broke the old clan system, gave parliament more power and is preparing a peaceful succession." },
          right: { head: "Critics", md:
            "A new strongman who ordered troops to shoot protesters and replaced one ruling clique with his own." } }
      ],
      takeaways: [
        "Kassym-Jomart Tokayev, a former diplomat, consolidated power after purging Nazarbayev's allies in 2022.",
        "Vice-president Erlan Karin is first in line to succeed him.",
        "Nazarbayev's family has lost its political power and some of its wealth."
      ],
      check: { q: "Who is first in line to succeed the Kazakh president under the 2026 constitution?",
        choices: ["The prime minister", "The vice-president", "The Kurultai chairman"], answer: 1,
        explain: "The restored vice-presidency, held by Erlan Karin, takes over if the president leaves office early." },
      sources: [
        { title: "Tokayev's former state adviser Erlan Karin appointed Kazakhstan's vice president", publisher: "Euronews", url: "https://www.euronews.com/2026/08/31/tokayevs-former-state-adviser-erlan-karin-appointed-kazakhstans-vice-president", date: "2026-08-31" },
        { title: "Kazakhstan's Tokayev appoints longtime adviser as vice president", publisher: "Al Jazeera", url: "https://aljazeera.com/news/2026/8/31/kazakhstans-president-taps-longtime-adviser-for-vice-president-role", date: "2026-08-31" },
        { title: "Kassym-Jomart Tokayev", publisher: "Britannica", url: "https://www.britannica.com/biography/Kassym-Jomart-Tokayev", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "kz-5", kind: "story", asOf: "2026-10-22",
      title: "A new constitution in a year",
      dek: "A referendum in March, a new parliament in August and a vice-president by September: Tokayev rebuilt the state's architecture at speed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kz/kz-5-hero.webp",
          alt: "Illustration of a modern semicircular parliament chamber with rows of empty curved desks under a domed ceiling with a large skylight.",
          caption: "The 145 members of the Kurultai were elected on 23 August 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A modern semicircular parliament chamber with rows of empty curved wooden desks facing a raised podium, under a high domed ceiling with a large round skylight letting in soft light, blue carpet, calm and formal, no people, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "In late 2025 Tokayev proposed replacing the two-chamber parliament with a single chamber. The idea grew into a whole new constitution, drafted by a commission and put to a referendum on 15 March 2026: 87% voted yes, on a turnout of 73%. It took effect on 1 July. The old parliament was dissolved, and elections to the new 145-seat Kurultai were held on 23 August, with turnout of 74%." },
        { type: "facts", head: "The timeline", rows: [
          ["15 March 2026", "Referendum: 87.15% yes, turnout 73.12%"],
          ["1 July 2026", "New constitution in force; old parliament dissolved"],
          ["23 August 2026", "Kurultai election: Adilet 71.17%"],
          ["31 August 2026", "Erlan Karin vice-president; Olzhas Bektenov prime minister"],
          ["2029", "Tokayev's term ends"]
        ] },
        { type: "section", head: "The result", md:
          "The new pro-presidential Adilet ('Justice') party won 71% of the vote and, by preliminary counts, about 110 of the 145 seats. Four smaller parties crossed the threshold: Auyl (6.3%), Respublica (5.6%), Ak Zhol (5.2%) and the Nationwide Social Democratic Party (5.1%). OSCE observers said the vote was well organised but lacked distinct political alternatives; genuinely independent parties could not register." },
        { type: "section", head: "What changes", md:
          "On paper the Kurultai is stronger than the old parliament: it must consent to the appointment of the vice-president, prime minister and senior officials, can initiate referendums and, Tokayev says, ends the 'super-presidential' system. The constitution keeps the single seven-year presidential term introduced in 2022. Critics note that with one party holding a large majority, and the president controlling that party, the balance of power has changed little." },
        { type: "section", head: "Why the hurry?", md:
          "Analysts see two motives. One is succession: Tokayev wants an orderly handover in 2029 rather than the crisis that followed Nazarbayev's semi-retirement. The other is legitimacy: after January 2022 he needed to show change. A fast timetable also left little time for opponents to organise. Economic worries, from tax rises to inflation, were a backdrop to the vote." },
        { type: "section", head: "Language and identity", md:
          "The new constitution keeps Kazakh as the state language, with Russian in official use alongside it, a sensitive balance in a country with a large Russian-speaking population. It also reaffirms Kazakhstan's secular character. Some Kazakh nationalists wanted Russian's status reduced; Moscow watches any change closely." },
        { type: "section", head: "Rights on paper", md:
          "The constitution adds new language on human rights and the independence of courts. Rights groups welcome the wording but say laws on protests, 'false information' and extremism, which are used against critics, remain unchanged, and that the test is how the new institutions behave in practice." },
        { type: "compare", head: "Two views of the new constitution",
          left: { head: "The government's view", md:
            "A modern constitution with a stronger parliament and clear succession rules, approved by a large majority." },
          right: { head: "Critics' view", md:
            "A top-down rewrite without real debate, which leaves power concentrated and opposition excluded." } },
        { type: "section", head: "What's next", md:
          "Watch how the Kurultai uses its new consent powers and whether Tokayev declares for 2029 or steps aside for Karin." }
      ],
      takeaways: [
        "Voters approved a new constitution on 15 March 2026 with 87% support.",
        "The pro-presidential Adilet party won 71% in the first Kurultai election on 23 August.",
        "Critics say the reform changes institutions more than the balance of power."
      ],
      check: { q: "What share of the vote did Adilet win in August 2026?",
        choices: ["About 41%", "About 71%", "About 95%"], answer: 1,
        explain: "Adilet won 71.17%, with four smaller parties also entering the Kurultai." },
      sources: [
        { title: "Kazakhstan announces preliminary results of Kurultai elections", publisher: "Dunyo", url: "https://dunyo.info/en/news/v-kazahstane-ozvuchili-predvaritelnye-itogi-vyborov-v-kurultay", date: "2026-08-24" },
        { title: "Kazakhstan votes in parliamentary election expected to strengthen president's grip on power", publisher: "ABC News / AP", url: "https://abcnews.com/International/wireStory/kazakhstan-votes-parliamentary-election-expected-strengthen-presidents-grip-135879339", date: "2026-08-23" },
        { title: "Kazakhstan adopts new constitution after March 2026 referendum", publisher: "CEVRO", url: "https://www.cevro.cz/en/caps/kazakhstan-adopts-new-constitution-after-march-2026-referendum", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "kz-6", kind: "story", asOf: "2026-10-22",
      title: "Oil through a war zone",
      dek: "Most Kazakh oil reaches the world through a Russian port that Ukrainian drones have hit, and Astana is scrambling for other routes.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kz/kz-6-hero.webp",
          alt: "Illustration of an offshore oil loading buoy and a tanker in a dark sea at night, with a coastal terminal of storage tanks and flares on the shore.",
          caption: "The CPC terminal near Novorossiysk handles about 80% of Kazakhstan's oil exports.",
          credit: "Illustration — not a photograph",
          prompt: "An offshore oil loading buoy with hoses connected to a large tanker in a dark sea at night, a coastal oil terminal with rows of lit storage tanks and a gas flare on the hillside shore, a faint plume of smoke, tense and industrial, no people close up, no logos, no legible text." },
        { type: "section", head: "What happened", md:
          "Kazakhstan exports most of its oil through the Caspian Pipeline Consortium (CPC), which runs 1,500 km from its western oilfields to a terminal near Novorossiysk on Russia's Black Sea coast. In late November 2025 Ukrainian sea drones attacked the terminal, damaging one of its two main mooring points and halving its capacity until a replacement was installed on 25 January 2026. CPC exports fell to about 440,000 barrels a day in January, the lowest in seven years." },
        { type: "facts", head: "Kazakh oil", rows: [
          ["Main fields", "Tengiz, Kashagan, Karachaganak"],
          ["Export route", "About 80% through the CPC pipeline to Novorossiysk"],
          ["January 2026 output", "About 1.34 million b/d, down from 2.13 million in November"],
          ["Alternatives", "Tankers across the Caspian to Baku; rail; pipelines to China"],
          ["Partners", "Chevron, ExxonMobil, Eni, Shell and others"]
        ] },
        { type: "section", head: "Production falls", md:
          "Because there was nowhere else to send the oil, production fell from about 2.13 million barrels a day in November to about 1.34 million in January, according to Bloomberg; a fire at a power plant at the giant Tengiz field added to the losses. Exports by other routes rose by only about 25,000 barrels a day, a small fraction of the drop. Kazakhstan, which has often produced more than its [[opec-plus]] quota, suddenly produced far less." },
        { type: "section", head: "Caught between Russia and Ukraine", md:
          "Astana has stayed neutral in the war, has not recognised Russia's annexations and has tried to avoid Western [[sanctions]] while keeping trade with Russia. Ukraine says it targets Russian infrastructure, and the CPC terminal is on Russian soil. Kazakhstan protested to Kyiv, while also reminding Moscow that its oil is not Russian. In a separate dispute, Russian courts and inspectors have repeatedly threatened to shut CPC operations." },
        { type: "section", head: "Other routes", md:
          "The obvious alternative is west across the Caspian Sea to Azerbaijan and then through the Baku–Tbilisi–Ceyhan pipeline to [[unit:tr|Turkey]], the 'Middle Corridor'. It carries growing volumes but needs more tankers and port capacity. Pipelines also run east to [[unit:cn|China]]. The CPC itself is completing a long-delayed expansion. Higher world prices caused by the Gulf war helped revenues even as volumes fell." },
        { type: "section", head: "Kashagan and the companies", md:
          "Kashagan, in the shallow northern Caspian, is one of the biggest oil discoveries of recent decades but cost more than $50 billion and was delayed by years of technical problems. Kazakhstan has fought long disputes with the foreign consortiums at Kashagan and Karachaganak over costs and profit-sharing, seeking billions of dollars in back payments, to show it is getting a fair share." },
        { type: "compare", head: "Two views of the dependence",
          left: { head: "Pragmatists", md:
            "The CPC is the cheapest route by far; Kazakhstan should protect it diplomatically and add routes gradually." },
          right: { head: "Critics", md:
            "Relying on a port in a country at war is a strategic risk; the Middle Corridor must be built up fast." } },
        { type: "section", head: "What's next", md:
          "Watch CPC volumes, any new strikes on Novorossiysk and investment in Caspian tankers and the Baku route." }
      ],
      takeaways: [
        "About 80% of Kazakhstan's oil exports flow through the CPC pipeline to a Russian Black Sea terminal.",
        "A Ukrainian drone attack in November 2025 halved the terminal's capacity and cut output sharply.",
        "Astana is expanding the 'Middle Corridor' across the Caspian to reduce its dependence on Russia."
      ],
      check: { q: "Where does the CPC pipeline carry most Kazakh oil?",
        choices: ["To a Chinese port", "To a terminal near Novorossiysk on Russia's Black Sea coast", "To the Persian Gulf"], answer: 1,
        explain: "The Caspian Pipeline Consortium runs from western Kazakhstan to a terminal near Novorossiysk." },
      sources: [
        { title: "Kazakhstan was able to divert only a small part of the oil from the CPC terminal near Novorossiysk", publisher: "LIGA / Bloomberg", url: "https://news.liga.net/en/amp/politics/news/kazakhstan-was-able-to-divert-only-a-small-part-of-the-oil-from-the-cpc-terminal-near-novorossiysk-bloomberg", date: "2026-02" },
        { title: "Caspian Pipeline Consortium", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Caspian_Pipeline_Consortium", date: "n.d." },
        { title: "CPC expansion nears completion", publisher: "Energy Intelligence", url: "https://www.energyintel.com/0000017b-a7cf-de4c-a17b-e7cf85050000", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "kz-7", kind: "story", asOf: "2026-10-22",
      title: "Friends with Moscow, Beijing and Washington",
      dek: "In twelve months Kazakhstan signed minerals deals in Washington, agreed to join the Abraham Accords and contracted Russia to build a nuclear plant.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kz/kz-7-hero.webp",
          alt: "Illustration of a huge dry port on the steppe with container trains, gantry cranes and rows of containers, mountains on the horizon.",
          caption: "Khorgos, on the Chinese border, is one of the world's largest dry ports, a hub of China–Europe rail trade.",
          credit: "Illustration — not a photograph",
          prompt: "A huge dry port on flat steppe with long container trains, tall gantry cranes and rows of colourful stacked containers, a line of snowy mountains on the horizon, bright clear afternoon light, busy and strategic, no people close up, no logos, no legible text." },
        { type: "section", head: "What happened", md:
          "On 6 November 2025, at a White House summit with the five Central Asian presidents, Tokayev signed deals worth about $17 billion with US companies and a critical-minerals agreement, including a $1.1 billion tungsten project in which a US firm takes a 70% stake. President Trump announced that Kazakhstan would join the [[abraham-accords]]. Six months later, on 28 May 2026, [[unit:ru|Russia]]'s President Putin made a state visit to Astana, and the two signed a deal for Rosatom to build Kazakhstan's first nuclear power plant." },
        { type: "facts", head: "Twelve months of deals", rows: [
          ["6 Nov 2025", "C5+1 summit in Washington; minerals deals; Abraham Accords announcement"],
          ["28 May 2026", "Putin in Astana; nuclear plant agreement"],
          ["3 Sep 2026", "Rosatom construction contract signed"],
          ["Plant", "Two reactors, about 2.4 GW, about $16 billion; Russia to finance 85%"],
          ["China", "Largest trade partner alongside Russia; rail hub for Europe"]
        ] },
        { type: "section", head: "Why Washington", md:
          "The United States wants Central Asian minerals, especially tungsten and rare earths, to reduce its dependence on [[unit:cn|China]], and sees the region as a place to counter Chinese and Russian influence. For Kazakhstan, which has long had diplomatic ties with [[unit:il|Israel]], joining the Abraham Accords was low-cost and won goodwill in Washington. One report said an investment vehicle backed by President Trump's sons had taken a stake in the US partner shortly before the tungsten contract was awarded, and Democrats in Congress promised scrutiny." },
        { type: "section", head: "Why Moscow", md:
          "Russia remains Kazakhstan's biggest neighbour, a partner in the Eurasian Economic Union and the Collective Security Treaty Organisation, and the main route for its oil. The nuclear plant, two Russian VVER-1200 reactors on Lake Balkhash, will tie the two countries together for decades; Russia is to finance 85% of the roughly $16 billion cost. Tokayev says Russia is the largest investor in his country. Kazakhstan also helps Russia indirectly, as a route for goods affected by sanctions." },
        { type: "section", head: "Why Beijing", md:
          "China is a top trading partner, a big investor in oil, metals and roads, and a buyer of Kazakh uranium and gas. Most rail freight between China and Europe crosses Kazakhstan. Kazakhs are wary of Chinese influence, though: there have been protests against Chinese land leases and factories, and anger at the detention of ethnic Kazakhs in camps in Xinjiang, just across the border." },
        { type: "section", head: "Central Asian neighbours", md:
          "Relations with neighbouring Uzbekistan, Kyrgyzstan and Turkmenistan have improved since 2016, with open borders, water agreements and regular summits. Central Asian leaders now meet partners as a group, the 'C5', with the US, China, Russia, the EU and others, which gives the region more weight." },
        { type: "compare", head: "Two views of multi-vector policy",
          left: { head: "Supporters", md:
            "Balancing all the great powers keeps Kazakhstan independent and brings investment from every direction." },
          right: { head: "Sceptics", md:
            "Pleasing everyone means deep dependence on Russia continues, and one day Astana may be forced to choose." } },
        { type: "section", head: "What's next", md:
          "Watch nuclear plant licensing in 2027, the tungsten project and whether Kazakhstan formally completes its Abraham Accords membership." }
      ],
      takeaways: [
        "Kazakhstan signed about $17 billion in US deals and announced it would join the Abraham Accords in November 2025.",
        "In 2026 it agreed with Russia to build its first nuclear power plant, mostly financed by Moscow.",
        "China is a top trade partner and the source of the rail traffic that crosses Kazakhstan to Europe."
      ],
      check: { q: "Which company will build Kazakhstan's first nuclear power plant?",
        choices: ["Westinghouse of the US", "Rosatom of Russia", "CNNC of China"], answer: 1,
        explain: "Russia's Rosatom won the contract; the deal was signed during Putin's May 2026 visit." },
      sources: [
        { title: "Kazakhstan to join Abraham Accords as it signs critical minerals and trade deals with the US", publisher: "Euronews", url: "https://euronews.com/2025/11/08/kazakhstan-to-join-abraham-accords-as-it-signs-critical-minerals-and-trade-deals-with-the-", date: "2025-11-08" },
        { title: "Trump and Central Asia reach critical minerals deal at Washington summit", publisher: "RFE/RL", url: "https://www.rferl.org/amp/central-asia-trump-critical-minerals-diplomatic-deals-summit/33583397.html", date: "2025-11-06" },
        { title: "Russia signs agreement to build first nuclear power plant in Kazakhstan", publisher: "The Moscow Times", url: "https://www.themoscowtimes.com/2026/05/28/russia-signs-agreement-to-build-first-nuclear-power-plant-in-kazakhstan-a92868", date: "2026-05-28" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "kz-12", kind: "spotlight", asOf: "2026-10-22",
      title: "Bloody January, 2022",
      dek: "Protests over fuel prices became the worst violence since independence; Tokayev called in Russian-led troops and ordered police to shoot.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kz/kz-12-hero.webp",
          alt: "Illustration of a large city administration building with blackened windows and smoke at dusk, with burned-out cars on a snowy square and mountains behind.",
          caption: "Protesters set fire to Almaty's city hall on 5 January 2022.",
          credit: "Illustration — not a photograph",
          prompt: "A large Soviet-era city administration building with blackened smoking windows at dusk, two burned-out cars on a snowy square in front, bare trees, snow-covered mountains rising behind the city, cold blue and orange light, aftermath of violence, no people, no flags, no legible text." },
        { type: "facts", head: "Qandy Qantar", rows: [
          ["2 January 2022", "Protests in Zhanaozen over doubled gas prices"],
          ["4–6 January", "Unrest spreads; Almaty city hall and airport seized"],
          ["5 January", "Tokayev asks the CSTO alliance for troops"],
          ["7 January", "Order to 'shoot to kill without warning'"],
          ["Killed", "238, according to official figures"],
          ["Detained", "About 10,000"]
        ] },
        { type: "section", head: "The spark", md:
          "On 1 January 2022 the price of liquefied petroleum gas, which most cars in western Kazakhstan run on, roughly doubled after price controls ended. In the oil town of Zhanaozen, where police had shot striking workers in 2011, people took to the streets the next day. Protests spread across the country within days, adding demands against corruption and against Nazarbayev, whom many still saw as the real ruler." },
        { type: "section", head: "Almaty burns", md:
          "In Almaty, peaceful protests turned into riots on 4 and 5 January. Armed groups, whose origin is still disputed, seized the airport and set the city hall and the presidential residence on fire while police largely vanished from the streets. Tokayev sacked the government, removed Nazarbayev as head of the Security Council and asked the Russian-led Collective Security Treaty Organisation for help. About 2,000 troops, mostly Russian, guarded key sites." },
        { type: "section", head: "Shoot to kill", md:
          "On 7 January Tokayev said he had ordered security forces to 'shoot to kill without warning' and blamed '20,000 terrorists' trained abroad. Officially 238 people died, including 19 security officers; about 10,000 were detained, and many said they were tortured. The CSTO troops left within two weeks. Karim Massimov, the security chief and a Nazarbayev loyalist, was arrested and later jailed for 18 years for treason." },
        { type: "section", head: "What it changed", md:
          "The crisis was also a power struggle. Tokayev used it to remove Nazarbayev's relatives and allies from the security services and the economy, and then launched constitutional reforms. Amnesty laws freed many protesters, but rights groups say few officers were prosecuted for killings or torture. The events, called Qandy Qantar ('Bloody January'), remain sensitive." },
        { type: "section", head: "Unanswered questions", md:
          "Many questions remain. Who organised the armed groups that took Almaty's airport? Why did police disappear from the streets? Was there a coup attempt within the elite, as Tokayev suggested? Courts convicted Massimov and other officials in closed trials, and a parliamentary commission was promised but its findings were limited. Families of those killed still seek answers." },
        { type: "section", head: "Russia's role", md:
          "The CSTO deployment, the alliance's first collective mission, was seen as a sign of Russian support for Tokayev, but he asked the troops to leave within days. Weeks later, Russia invaded Ukraine, and Kazakhstan refused to back the war, showing that the debt to Moscow had limits." },
        { type: "compare", head: "Two accounts of January",
          left: { head: "The official account", md:
            "Legitimate protests were hijacked by criminals and an attempted coup by insiders; firm action saved the state." },
          right: { head: "Critics' account", md:
            "A power struggle at the top used protesters as cover, and the state killed civilians, then hid the truth." } },
        { type: "section", head: "Why it matters", md:
          "January 2022 is the origin of Tokayev's reforms, his break with Nazarbayev and the 2026 constitution ([[lesson:kz-5]])." }
      ],
      takeaways: [
        "A fuel price rise sparked nationwide protests in January 2022, the worst unrest since independence.",
        "Tokayev called in CSTO troops and ordered security forces to shoot; officially 238 died.",
        "The crisis let Tokayev sideline Nazarbayev's clan and launch his reforms."
      ],
      check: { q: "Which alliance sent troops to Kazakhstan in January 2022?",
        choices: ["NATO", "The Russian-led CSTO", "The Shanghai Cooperation Organisation"], answer: 1,
        explain: "Tokayev asked the Collective Security Treaty Organisation for help; mostly Russian troops guarded key sites for about two weeks." },
      sources: [
        { title: "2022 Kazakh unrest", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2022_Kazakh_unrest", date: "n.d." },
        { title: "Kassym-Jomart Tokayev", publisher: "Britannica", url: "https://www.britannica.com/biography/Kassym-Jomart-Tokayev", date: "n.d." },
        { title: "History of Kazakhstan", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Kazakhstan", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "kz-8", kind: "now", asOf: "2026-10-22",
      title: "Where things stand",
      dek: "A new constitution, a loyal parliament and a designated heir, but rising prices, an exposed oil route and an open question about 2029.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kz/kz-8-hero.webp",
          alt: "Illustration of Almaty at sunset with apartment blocks and a tall TV tower at the foot of huge snow-capped mountains, with autumn trees.",
          caption: "Almaty, the largest city, beneath the Tian Shan mountains.",
          credit: "Illustration — not a photograph",
          prompt: "A city of apartment blocks and a few glass towers at the foot of huge snow-capped mountains at sunset, a tall slender TV tower on a hill, golden autumn trees along the streets, pink and orange light on the peaks, calm and hopeful, no people close up, no flags, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Institutions:** new constitution; Kurultai elected; vice-president appointed.\n" +
          "- **Leadership:** Tokayev's term ends in 2029; Erlan Karin is first in line.\n" +
          "- **Economy:** VAT up to 16%, inflation about 10%, oil exports disrupted.\n" +
          "- **Foreign policy:** nuclear deal with Russia, minerals deals with the US, trade with China.\n" +
          "- **Rights:** managed elections and limited room for opposition." },
        { type: "section", head: "Money worries", md:
          "To cover a budget gap as oil revenue fell, the government raised value-added tax from 12% to 16% on 1 January 2026, after first proposing 20%. The central bank warned it would add 2.5–3 percentage points to inflation, which reached 10.2% in February. A survey found 61% of people expected the tax to reduce their quality of life. Kazakhs remember that the 2022 unrest began with a price rise." },
        { type: "section", head: "Kazakhstan in the world", md:
          "Kazakhstan keeps its balance among [[unit:ru|Russia]], [[unit:cn|China]] and the [[unit:us|United States]], and courts [[unit:tr|Turkey]] and the EU as partners for the Middle Corridor. It has neither condemned nor supported Russia's war in [[unit:ua|Ukraine]], but it hosts many Russians who fled conscription and has sent humanitarian aid to Ukraine. Its uranium is vital to nuclear power plants worldwide." },
        { type: "section", head: "Water and climate", md:
          "Central Asia is warming fast. The Aral Sea, once the world's fourth-largest lake, shrank catastrophically after Soviet irrigation projects diverted its rivers; Kazakhstan's dam on the northern part has partly revived it. The Caspian Sea is falling too, threatening ports. Droughts and floods, such as the severe floods of spring 2024, are becoming more frequent." },
        { type: "section", head: "Society and the young", md:
          "Kazakhstan's population is young and increasingly urban, with Almaty, Astana and Shymkent each above a million people. Young Kazakhs are more likely than their parents to speak Kazakh as a first language and to follow politics online. Domestic violence became a major public issue after the 2023 murder of Saltanat Nukenova by her husband, a former economy minister, led to a tougher law." },
        { type: "section", head: "The rule of law", md:
          "Tokayev promised 'law and order' as a slogan of his reforms. Corruption remains widespread, but some powerful figures have been prosecuted, and the state has recovered assets from members of the old elite. Rights groups say journalists and activists still face prosecution for 'spreading false information'." },
        { type: "section", head: "Three scenarios", md:
          "- **Managed succession.** Tokayev steps aside in 2029, and Karin or another chosen successor takes over smoothly.\n" +
          "- **Tokayev stays.** He runs again under the new constitution, and reform stalls.\n" +
          "- **Economic shock.** Inflation, taxes or an oil crisis bring discontent back onto the streets." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Ongoing:** CPC exports through Novorossiysk\n" +
          "- **2027:** licensing and construction of the nuclear plant\n" +
          "- **2029:** presidential election\n" +
          "- **2031:** next Kurultai election" },
        { type: "section", head: "Connections", md:
          "Kazakhstan's story runs through [[unit:ru]] (former ruler, oil route and nuclear partner), [[unit:cn]] (trade and rail), [[unit:us]] (oil investors and minerals), [[unit:ua]] (the war that hit its oil route), [[unit:tr]] (Turkic ties and the Middle Corridor) and [[unit:il]] (the Abraham Accords)." }
      ],
      takeaways: [
        "Kazakhstan has new institutions but power remains concentrated in the presidency.",
        "A VAT rise and inflation of about 10% strain households.",
        "The biggest question is whether Tokayev steps aside in 2029."
      ],
      check: { q: "What was Kazakhstan's standard VAT rate raised to in January 2026?",
        choices: ["12%", "16%", "20%"], answer: 1,
        explain: "VAT rose from 12% to 16%; the government had first proposed 20%." },
      sources: [
        { title: "VAT hike triggers sharp inflationary pressures across Kazakh manufacturing, PMI report says", publisher: "bne IntelliNews", url: "https://intellinews.com/vat-hike-triggers-sharp-inflationary-pressures-across-kazakh-manufacturing-pmi-report-says-423713", date: "2026-02" },
        { title: "Kazakhstan's pro-government party wins parliamentary election, boosting president's grip on power", publisher: "NY1 / AP", url: "https://ny1.com/nyc/all-boroughs/ap-top-news/2026/08/24/kazakhstans-pro-government-party-wins-parliamentary-election-boosting-presidents-grip-on-power", date: "2026-08-24" },
        { title: "Kazakhstan's lower house passes controversial new tax code amid public backlash", publisher: "The Times of Central Asia", url: "https://timesca.com/kazakhstans-lower-house-passes-controversial-new-tax-code-amid-public-backlash/", date: "2025" }
      ]
    }
  ]
});
