/* ============================================================
   Unit 17 — Japan 🇯🇵
   Research note and sources: tools/research/jp.md
   Current as of 29 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("jp", {
  id: "jp",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "jp-1", kind: "snapshot", asOf: "2026-09-29",
      title: "Japan in brief",
      dek: "One of the world's biggest economies, America's key ally in Asia, and a country rearming under its first woman prime minister.",
      blocks: [
        { type: "map", src: "maps/jp.svg",
          alt: "Locator map of East Asia with Japan highlighted: the four main islands of Hokkaido, Honshu, Shikoku and Kyushu and the island chains to the south, facing Korea, China and Russia, with the southern Kuril Islands north-east of Hokkaido hatched.",
          caption: "Japan's four main islands and outlying chains. Hatched: the southern Kuril Islands, held by Russia since 1945 and claimed by Japan as its Northern Territories. Japan also administers the Senkaku Islands, which China claims.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Tokyo"],
          ["People", "About 123 million, and shrinking"],
          ["System", "Parliamentary democracy with an emperor as symbol of the state"],
          ["Prime minister", "Sanae Takaichi (LDP), since October 2025"],
          ["Parliament", "The Diet; the LDP holds 316 of 465 lower-house seats"],
          ["Emperor", "Naruhito, since 2019"],
          ["Economy", "Among the world's five largest"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Japan is one of the world's largest economies, a leader in cars, robotics, machine tools and the materials that go into semiconductors. It hosts around 55,000 American troops and is the anchor of the US alliance system in Asia. It sits a few hundred kilometres from [[unit:cn|China]], [[unit:kp|North Korea]] and [[unit:ru|Russia]], and near [[unit:tw|Taiwan]], so its choices on defence matter for the whole region.\n\n" +
          "It is also a preview of problems other rich countries will face: the fastest-ageing big society on Earth, a shrinking workforce and huge public debt." },
        { type: "section", head: "Who holds power", md:
          "Sanae Takaichi, 65, became Japan's first woman prime minister in October 2025. A conservative and protégé of the late Shinzo Abe, she leads the Liberal Democratic Party (LDP), which has governed Japan for almost all of the period since 1955. In a snap election in February 2026 she won a landslide: 316 of 465 seats in the lower house, the first time a single party has won a two-thirds majority since the Second World War." },
        { type: "section", head: "The mood in 2026", md:
          "Takaichi's win reflected a mood of wanting a strong leader after years of weak, scandal-hit governments. Prices have risen after decades of near-zero inflation, and wages are only now catching up. Relations with China are the worst in years after her comments on Taiwan in November 2025. By September her approval had slipped in some polls, after she appointed politicians involved in a party funding scandal to senior posts." },
        { type: "section", head: "An ageing society", md:
          "Almost 30% of Japanese people are 65 or older, the highest share of any large country, and the population has fallen every year since the late 2000s. Villages empty, schools close and companies struggle to hire. The government has cautiously opened the door to more foreign workers, now about 3% of residents, while trying to raise the birth rate with child benefits and free education. Neither has yet reversed the decline." },
        { type: "section", head: "Neighbours", md:
          "Japan's relations with its neighbours carry the weight of history. [[unit:cn|China]] and the two Koreas remember Japanese colonial rule and wartime atrocities; Japan and Russia never signed a peace treaty after 1945 because of the disputed Kurils. North Korean missiles regularly fly into the sea near Japan, sometimes over it." },
        { type: "section", head: "What Japan wants", md:
          "Takaichi's government wants a stronger military and a constitution that recognises it, a secure supply of critical minerals less dependent on China, a strong alliance with [[unit:us|the United States]] and closer ties with partners such as [[unit:au|Australia]], [[unit:in|India]], [[unit:kr|South Korea]] and the Philippines. At home, it promises growth, higher wages and help with rising prices." },
        { type: "callout", tone: "why", md:
          "Japan was for decades a pacifist economic giant. It is becoming a military power again, a shift that its neighbours watch with alarm and its allies with relief, and that will shape the balance of power in Asia." }
      ],
      takeaways: [
        "Japan is one of the world's largest economies and the anchor of the US alliance system in Asia.",
        "Sanae Takaichi became its first woman prime minister in October 2025.",
        "Her LDP won 316 of 465 seats in February 2026, a two-thirds majority on its own."
      ],
      check: { q: "What was historic about the LDP's result in February 2026?",
        choices: ["It lost power for the first time", "It won a two-thirds majority on its own, a first since the war", "It formed a coalition with the Communists"], answer: 1,
        explain: "The LDP won 316 of 465 seats, the first single-party two-thirds majority in the lower house since the Second World War." },
      sources: [
        { title: "LDP secures two-thirds supermajority in Lower House election victory", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/02/09/japan/politics/japan-2026-lower-house-election/", date: "2026-02-09" },
        { title: "Premiership of Sanae Takaichi", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Premiership_of_Sanae_Takaichi", date: "2026-09" },
        { title: "Takaichi Cabinet Approval Rate Falls to 44.1 Pct: Jiji Poll", publisher: "Nippon.com", url: "https://www.nippon.com/en/news/yjj2026091700746/takaichi-cabinet-approval-rate-falls-to-44-1-pct-jiji-poll.html", date: "2026-09-17" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "jp-2", kind: "power", asOf: "2026-09-29",
      title: "The Diet, the LDP and Article 9",
      dek: "A parliamentary democracy in which one party has almost always ruled, under a constitution that has never been amended.",
      blocks: [
        { type: "diagram", src: "img/jp/jp-2-power.svg",
          alt: "Diagram of power in Japan. Voters elect both houses of the Diet. The 465-seat House of Representatives, the stronger chamber, picks the prime minister; the LDP has held 316 seats since February 2026. It elects Prime Minister Sanae Takaichi, who leads the cabinet and the LDP and can dissolve the lower house. She needs the 248-seat House of Councillors, whose members serve six-year terms with half elected every three years, and where the LDP and its allies lack a majority. All are checked by the constitution, unchanged since 1947: Article 9 renounces war, and amending it needs two-thirds of both houses and a referendum. The emperor, Naruhito, is a symbol of the state with no political powers.",
          caption: "The lower house chooses the government; the upper house and the constitution slow it down.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The Diet", md:
          "Japan's parliament, the Diet, has two chambers. The House of Representatives, with 465 members elected for up to four years, chooses the prime minister and has the final say on the budget and treaties. The House of Councillors, with 248 members serving six-year terms, can delay other laws; the lower house can override it only with a two-thirds majority. Most members are elected in single-seat districts, the rest by proportional representation." },
        { type: "section", head: "One party, many factions", md:
          "The Liberal Democratic Party has governed Japan almost without a break since it was founded in 1955, losing power only in 1993–94 and 2009–12. Its dominance has rested on rural voters, business support and a network of local politicians. Instead of competing parties, politics was long about competing factions inside the LDP, which traded posts and money. A scandal over unrecorded fundraising revenue in 2023–24 led most factions to disband, at least formally." },
        { type: "section", head: "The prime minister", md:
          "The prime minister is the leader of the largest party or coalition in the lower house, chosen by a Diet vote. In practice, the LDP picks its leader in an internal election and that person becomes prime minister. Prime ministers can call snap elections by dissolving the lower house, which Takaichi did in January 2026 to turn her popularity into seats. Japan had six prime ministers in the six years from 2006 to 2012, including Abe's own short first term, before his long second term brought stability." },
        { type: "section", head: "Article 9", md:
          "Japan's constitution was written under American occupation in 1946 and has never been amended. Article 9 renounces war and says Japan will not maintain 'land, sea and air forces'. Governments have long interpreted it to allow the Self-Defence Forces for self-defence, and in 2015 Abe's government reinterpreted it to allow 'collective self-defence' with allies in a 'survival-threatening situation'. Amending it requires two-thirds of both houses of the Diet and a majority in a national referendum." },
        { type: "section", head: "Bureaucrats and business", md:
          "Japan's powerful civil service drafts most laws, and big business federations have long been close to the LDP. Critics call it an 'iron triangle' of politicians, bureaucrats and companies; defenders see a system that delivered decades of stable, competent government. Local governments run schools and welfare but depend heavily on money from Tokyo." },
        { type: "section", head: "The emperor", md:
          "Emperor Naruhito, who succeeded his father in 2019, has no political powers. He formally appoints the prime minister chosen by the Diet and opens parliament, but acts only on the cabinet's advice. Whether a woman could one day inherit the throne remains a live debate." },
        { type: "compare", head: "Two views of changing the constitution",
          left: { head: "Supporters", md:
            "A constitution imposed by occupiers should be updated to recognise the Self-Defence Forces and reflect a more dangerous world." },
          right: { head: "Opponents", md:
            "Article 9 has kept Japan out of wars for 80 years. Changing it risks militarism and alarms neighbours who suffered from Japanese aggression." } }
      ],
      takeaways: [
        "The lower house chooses the prime minister; the upper house can delay most laws.",
        "The LDP has ruled Japan almost without a break since 1955.",
        "Article 9 renounces war; changing it needs two-thirds of both houses and a referendum."
      ],
      check: { q: "What does amending Japan's constitution require?",
        choices: ["A simple majority in the lower house", "Two-thirds of both houses and a national referendum", "The emperor's consent"], answer: 1,
        explain: "A proposed amendment needs two-thirds of the members of each house of the Diet, then a majority in a national referendum." },
      sources: [
        { title: "The Constitution of Japan", publisher: "Prime Minister's Office of Japan", url: "https://japan.kantei.go.jp/constitution_and_government_of_japan/constitution_e.html", date: "n.d." },
        { title: "Proposed Japanese constitutional referendum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Proposed_Japanese_constitutional_referendum", date: "2026" },
        { title: "Takaichi Sanae and the Constitutional Revision Debate", publisher: "The Diplomat", url: "https://thediplomat.com/2026/03/takaichi-sanae-and-the-constitutional-revision-debate/", date: "2026-03" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "jp-9", kind: "founding", asOf: "2026-09-29",
      title: "The Meiji Restoration",
      dek: "Forced open by American warships, Japan overthrew its shoguns in 1868 and transformed itself into a modern industrial power in a single generation.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp/jp-9-hero.webp",
          alt: "Illustration of black-hulled steamships with tall funnels anchored in a calm bay, with wooded hills and a small Japanese fishing village on the shore.",
          caption: "Commodore Perry's 'black ships' arrived in 1853, forcing Japan to open to the world.",
          credit: "Illustration — not a photograph",
          prompt: "Several black-hulled 19th-century steamships with tall funnels and masts anchored in a calm bay, wooded green hills and a small traditional fishing village with thatched roofs on the shore, misty morning light, woodblock-print-inspired style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From shogunate to empire", items: [
          ["1603", "The Tokugawa shogunate begins"],
          ["1639", "Japan largely closes itself to foreigners"],
          ["1853–54", "Commodore Perry's 'black ships' force Japan open"],
          ["1868", "Meiji Restoration: the emperor restored to power"],
          ["1889", "Meiji Constitution, Asia's first modern constitution"],
          ["1895", "Victory over China; Taiwan becomes a colony"],
          ["1905", "Victory over Russia"]
        ] },
        { type: "section", head: "The closed country", md:
          "For two and a half centuries Japan was ruled by the Tokugawa shoguns, military rulers in Edo (today's Tokyo), while the emperor in Kyoto had a ceremonial role. Society was divided into classes, with the samurai warrior class at the top. From 1639 Japan largely shut itself off from the outside world, allowing only limited trade with the Dutch and Chinese at Nagasaki." },
        { type: "section", head: "The black ships", md:
          "In 1853 the American Commodore Matthew Perry sailed into Edo Bay with steam-powered warships and demanded that Japan open its ports. Unable to resist, the shogunate signed treaties with the US and European powers that gave them trading rights and put foreigners beyond Japanese law, 'unequal treaties' like those imposed on China. Many samurai, especially from the south-western domains of Satsuma and Chōshū, blamed the shogunate for the humiliation, rallying under the slogan 'Revere the emperor, expel the barbarians'." },
        { type: "section", head: "Restoration", md:
          "In 1868 a coalition of these domains overthrew the shogunate in a short civil war and 'restored' power to the teenage Emperor Meiji. In reality a small group of former samurai ran the new government. Rather than expel the foreigners, they decided to learn from them, to become strong enough to resist them. The capital moved to Edo, renamed Tokyo. Feudal domains were abolished, the samurai class dissolved, conscription introduced and universal education created." },
        { type: "section", head: "Rich country, strong army", md:
          "Under the slogan 'rich country, strong army', Japan sent missions to study Western governments, factories and armies, built railways, shipyards and textile mills, and adopted a constitution in 1889 modelled on Prussia's, with an elected lower house but great power for the emperor and army. By 1900 Japan had renegotiated the unequal treaties. It defeated China in 1895, taking Taiwan, and Russia in 1905, the first Asian victory over a European great power, and annexed Korea in 1910." },
        { type: "compare", head: "Two legacies",
          left: { head: "A model of modernisation", md:
            "Japan showed that a non-Western country could modernise on its own terms and stand as an equal among great powers." },
          right: { head: "The road to empire", md:
            "The Meiji state glorified the emperor and the army, and its expansion into Korea and China led toward the catastrophe of 1937–45." } },
        { type: "section", head: "Why it still matters", md:
          "The Meiji era is still celebrated as Japan's great leap forward, and its reformers are national heroes. Japanese conservatives, including the late Shinzo Abe, who came from the old Chōshū region, have drawn on its spirit. But its imperial expansion is the root of lasting grievances in [[unit:kr|Korea]] and [[unit:cn|China]]." }
      ],
      takeaways: [
        "Japan was largely closed to the world under the Tokugawa shoguns until US warships forced it open in 1853.",
        "The 1868 Meiji Restoration overthrew the shogunate and launched rapid Western-style modernisation.",
        "By 1910 Japan had defeated China and Russia and annexed Korea, becoming Asia's first modern great power."
      ],
      check: { q: "What was the Meiji Restoration?",
        choices: ["A return to isolation", "The 1868 overthrow of the shogunate and restoration of the emperor, launching modernisation", "Japan's postwar constitution"], answer: 1,
        explain: "Reformist samurai restored the emperor's authority and used it to transform Japan into a modern state." },
      sources: [
        { title: "Meiji Restoration", publisher: "Britannica", url: "https://www.britannica.com/event/Meiji-Restoration", date: "n.d." },
        { title: "Japan: History", publisher: "Britannica", url: "https://www.britannica.com/place/Japan/History", date: "n.d." },
        { title: "The United States and the Opening to Japan, 1853", publisher: "US Department of State, Office of the Historian", url: "https://history.state.gov/milestones/1830-1860/opening-to-japan", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "jp-3", kind: "history", asOf: "2026-09-29",
      title: "From defeat to the Abe era",
      dek: "Eighty years in which Japan rebuilt itself as a pacifist economic power, stalled, and began to rethink its place in the world.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp/jp-3-hero.webp",
          alt: "Illustration of a bullet train speeding past a snow-capped volcano under a clear sky, with rice fields in the foreground.",
          caption: "The first bullet train opened in 1964, the year Tokyo hosted the Olympics, a symbol of Japan's post-war rebirth.",
          credit: "Illustration — not a photograph",
          prompt: "A sleek white high-speed train speeding across a viaduct past a large snow-capped conical volcano under a clear blue sky, flooded rice fields reflecting the mountain in the foreground, crisp and optimistic, no people close up, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1945", "Defeat in the Second World War; American occupation"],
          ["1947", "The new constitution takes effect"],
          ["1955", "The LDP is founded"],
          ["1990s", "The bubble bursts; the 'lost decades' begin"],
          ["2011", "Earthquake, tsunami and Fukushima nuclear disaster"],
          ["2012–20", "Shinzo Abe's long premiership"],
          ["2022", "Abe assassinated"]
        ] },
        { type: "section", head: "1. Defeat and rebirth", md:
          "Imperial Japan's wars of conquest across Asia ended in 1945 with the atomic bombings of Hiroshima and Nagasaki and surrender. The American occupation disarmed the country, gave it a democratic constitution and turned the emperor into a symbol. From 1951 Japan aligned itself with the United States, which kept bases there and promised to defend it. The memory of its wartime atrocities, from Nanjing to forced labour, still shapes its relations with [[unit:cn|China]] and [[unit:kr|Korea]]." },
        { type: "section", head: "2. The economic miracle", md:
          "Under LDP governments Japan grew faster than any big economy for three decades, becoming the world's second-largest economy by 1968. Companies like Toyota, Sony and Panasonic conquered world markets. By the late 1980s property and share prices had soared in a speculative bubble." },
        { type: "section", head: "3. The lost decades", md:
          "When the bubble burst in the early 1990s, banks were left with bad loans and the economy stagnated for years. Prices fell rather than rose, wages stagnated, and China overtook Japan as the world's second-largest economy in 2010. The population began to shrink. The 2011 earthquake and tsunami, which killed more than 18,000 people and caused the Fukushima nuclear meltdown, deepened a sense of national crisis." },
        { type: "section", head: "4. The Abe era", md:
          "Shinzo Abe, prime minister in 2006–07 and again from 2012 to 2020, the longest in Japanese history, promised to revive the economy with 'Abenomics': massive monetary easing, government spending and reforms. He strengthened ties with the United States, India and Australia, and in 2015 reinterpreted the constitution to let Japan's forces help allies. On 8 July 2022, after he had left office, he was shot dead at a campaign event by a man with a grudge against the Unification Church; revelations about the church's ties to LDP politicians followed." },
        { type: "section", head: "Japan in the world", md:
          "For decades Japan's foreign policy was built on the 'Yoshida doctrine': rely on the US for security and focus on the economy. It gave huge amounts of aid across Asia and invested heavily in China. From the 2010s, as China's power grew, Japan began to take on more of its own defence and to build partnerships with Australia, India and the Philippines." },
        { type: "section", head: "5. Scandal and instability (2023–2025)", md:
          "A scandal over unreported political funds hit the LDP in 2023. Prime Minister Fumio Kishida stepped down in 2024. His successor, Shigeru Ishiba, lost the LDP's lower-house majority in October 2024 and its upper-house majority in July 2025, and resigned that September, opening the way for Takaichi." }
      ],
      takeaways: [
        "After defeat in 1945, Japan became a US ally with a pacifist constitution and grew into an economic giant.",
        "The early-1990s crash began decades of stagnation, falling prices and a shrinking population.",
        "Shinzo Abe, the longest-serving prime minister, reshaped defence and diplomacy before his assassination in 2022."
      ],
      check: { q: "Who was Japan's longest-serving prime minister?",
        choices: ["Fumio Kishida", "Shinzo Abe", "Sanae Takaichi"], answer: 1,
        explain: "Shinzo Abe served in 2006–07 and again from 2012 to 2020, longer than any other Japanese prime minister." },
      sources: [
        { title: "Japan profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-pacific-15219730", date: "n.d." },
        { title: "Japan", publisher: "Britannica", url: "https://www.britannica.com/place/Japan", date: "n.d." },
        { title: "Premiership of Shigeru Ishiba", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Premiership_of_Shigeru_Ishiba", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "jp-10", kind: "past", asOf: "2026-09-29",
      title: "Empire, war and Hiroshima",
      dek: "Japan's empire expanded across Asia from 1931, attacked the United States in 1941, and ended in 1945 with two atomic bombs and surrender.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp/jp-10-hero.webp",
          alt: "Illustration of the skeletal ruin of a domed building beside a river, with a quiet park and paper lanterns floating on the water at dusk.",
          caption: "The Atomic Bomb Dome in Hiroshima, preserved as a memorial; lanterns are floated on the river every 6 August.",
          credit: "Illustration — not a photograph",
          prompt: "The skeletal ruin of a domed brick building beside a calm river at dusk, a quiet green park, many small glowing paper lanterns floating on the water, peaceful and mournful, no people close up, no legible text." },
        { type: "facts", head: "The war", rows: [
          ["Manchuria seized", "1931"],
          ["War with China", "From 1937; Nanjing massacre, December 1937"],
          ["Pearl Harbor", "7 December 1941"],
          ["Hiroshima and Nagasaki", "6 and 9 August 1945; over 200,000 dead by the end of 1945"],
          ["Surrender", "Announced 15 August, signed 2 September 1945"],
          ["Japanese war dead", "About 3 million"]
        ] },
        { type: "section", head: "Militarism", md:
          "In the 1920s Japan had party governments and a growing democracy, but the Depression, rising nationalism and assassinations of politicians gave the army power. In 1931 officers staged an incident in Manchuria as a pretext to seize it. Japan left the League of Nations, and in 1937 began a full-scale war with China. In December 1937 Japanese troops massacred civilians and prisoners and committed mass rapes in Nanjing; Chinese estimates put the dead at 300,000, others lower." },
        { type: "section", head: "War with America", md:
          "Japan allied with Nazi Germany and Italy and moved into French Indochina. When the United States cut off oil exports, Japan's leaders chose war. On 7 December 1941 they attacked the US fleet at Pearl Harbor, and within months Japan conquered the Philippines, Malaya, Singapore, the Dutch East Indies and Burma, proclaiming a 'Greater East Asia Co-Prosperity Sphere'. Its occupation was brutal: forced labour, massacres, and hundreds of thousands of women, many Korean, coerced into sexual slavery as so-called 'comfort women'." },
        { type: "section", head: "Defeat", md:
          "After Midway in June 1942, the US advanced island by island. American bombing destroyed Japanese cities; a single firebombing raid on Tokyo in March 1945 killed about 100,000 people. On 6 August 1945 the US dropped an atomic bomb on Hiroshima, and on 9 August on Nagasaki; the Soviet Union also declared war. By the end of 1945 more than 200,000 people had died from the bombs. On 15 August Emperor Hirohito announced Japan's surrender by radio, the first time most Japanese had heard his voice." },
        { type: "section", head: "Occupation", md:
          "US forces under General Douglas MacArthur occupied Japan until 1952. They disbanded the army, tried war leaders, and wrote a new constitution in 1947 that made the emperor a symbol, guaranteed rights and, in Article 9, renounced war. Hirohito kept his throne and was never tried. Japan became a close US ally." },
        { type: "compare", head: "Memory and apology",
          left: { head: "Japan's official apologies", md:
            "Japanese governments have repeatedly expressed 'deep remorse' and apologised, notably in the 1995 Murayama statement, and paid reparations." },
          right: { head: "Neighbours' view", md:
            "China and South Korea say visits by politicians to the Yasukuni Shrine, which honours war criminals among the dead, show apologies are not sincere." } },
        { type: "section", head: "Why it still matters", md:
          "The war shapes Japan's pacifism, its alliance with the US, and its relations with [[unit:cn|China]] and [[unit:kr|South Korea]]. Hiroshima made Japan the leading voice against nuclear weapons; in 2024 the survivors' group Nihon Hidankyo won the Nobel Peace Prize. Prime Minister Takaichi's views on history are closely watched by Beijing and Seoul." }
      ],
      takeaways: [
        "Japan seized Manchuria in 1931, invaded China in 1937 and attacked Pearl Harbor in 1941.",
        "Its wartime occupation of Asia was brutal; the atomic bombs of August 1945 killed over 200,000 people.",
        "US occupation brought a pacifist constitution; wartime memory still strains ties with China and Korea."
      ],
      check: { q: "What does Article 9 of Japan's 1947 constitution do?",
        choices: ["Restores the emperor's power", "Renounces war as a sovereign right", "Creates the Diet"], answer: 1,
        explain: "Article 9 renounces war and, literally read, the maintenance of armed forces; Japan interprets it to allow self-defence forces." },
      sources: [
        { title: "Atomic bombings of Hiroshima and Nagasaki", publisher: "Britannica", url: "https://www.britannica.com/event/atomic-bombings-of-Hiroshima-and-Nagasaki", date: "n.d." },
        { title: "Statement by Prime Minister Tomiichi Murayama", publisher: "Ministry of Foreign Affairs of Japan", url: "https://www.mofa.go.jp/announce/press/pm/murayama/9508.html", date: "1995-08-15" },
        { title: "The Nobel Peace Prize 2024: Nihon Hidankyo", publisher: "The Nobel Prize", url: "https://www.nobelprize.org/prizes/peace/2024/nihon-hidankyo/facts/", date: "2024" }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "jp-11", kind: "past", asOf: "2026-09-29",
      title: "Miracle, bubble and the lost decades",
      dek: "Japan rose from ruins to become the world's second-largest economy, then a spectacular bubble burst and growth stalled for thirty years.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp/jp-11-hero.webp",
          alt: "Illustration of a sleek white bullet train speeding past rice fields with a snow-capped volcano in the background.",
          caption: "The Shinkansen bullet train, launched in 1964, symbolised Japan's postwar boom.",
          credit: "Illustration — not a photograph",
          prompt: "A sleek white bullet train speeding across a viaduct past green rice paddies, a snow-capped symmetrical volcano in the background under a clear blue sky, dynamic and optimistic, no people, no legible text or logos." },
        { type: "facts", head: "Boom and bust", rows: [
          ["Average growth, 1956–73", "About 9% a year"],
          ["Tokyo Olympics and bullet train", "1964"],
          ["Nikkei peak", "38,916 on 29 December 1989"],
          ["Nikkei regains its 1989 peak", "February 2024"],
          ["Largest economy after the US", "From 1968 until China overtook it in 2010"]
        ] },
        { type: "section", head: "The miracle", md:
          "From the ruins of 1945, Japan grew faster than any major economy in history. Protected by the US alliance and freed from military spending, it poured investment into steel, ships, cars and electronics. The powerful trade ministry, MITI, guided industry; banks and companies were bound together in groups called keiretsu; workers enjoyed lifetime employment. Growth averaged about 9% a year from the mid-1950s to 1973. The 1964 Tokyo Olympics and the new bullet train announced Japan's return, and by 1968 it was the world's second-largest economy." },
        { type: "section", head: "Japan as Number One", md:
          "In the 1970s and 1980s Toyota, Sony and Honda conquered world markets, and American politicians accused Japan of unfair trade. In 1985 the Plaza Accord pushed up the yen; to cushion exporters, the Bank of Japan cut interest rates, and cheap money flowed into shares and land. By 1989 the grounds of the Imperial Palace in Tokyo were said, by one popular estimate, to be worth more than all the real estate in California, and the Nikkei stock index peaked at nearly 39,000 at the end of 1989." },
        { type: "section", head: "The bust", md:
          "The Bank of Japan raised rates, and the bubble burst. Shares fell by more than half within three years and land prices kept falling for over a decade. Banks were saddled with bad loans that governments were slow to clean up, keeping zombie companies alive. Growth slumped, prices began to fall, and the 1990s became the 'lost decade', stretching into two and then three." },
        { type: "section", head: "Abenomics and after", md:
          "Shinzo Abe's 'Abenomics' from 2012 combined massive money-printing, government spending and reforms. It weakened the yen, lifted share prices and employment, but failed to generate lasting inflation or higher wages. Only after the pandemic did prices and wages start rising steadily, and in 2024 the Nikkei finally surpassed its 1989 peak and the Bank of Japan ended negative interest rates." },
        { type: "compare", head: "Two readings of the lost decades",
          left: { head: "Pessimists", md:
            "Japan stagnated for a generation, lost its technological edge and was overtaken by China, a warning of debt and deflation." },
          right: { head: "Optimists", md:
            "Measured per working-age person, Japan grew respectably while keeping unemployment low and society stable, despite a shrinking population." } },
        { type: "section", head: "Why it still matters", md:
          "Japan's government debt, at over 200% of GDP, is the highest of any rich country, a legacy of decades of stimulus. Rising prices after years of deflation fuelled voters' anger at the cost of living, which shaped the 2025–26 elections described in this unit." }
      ],
      takeaways: [
        "Japan grew about 9% a year from the mid-1950s to 1973, becoming the world's second-largest economy by 1968.",
        "A share and property bubble peaked in 1989 and then burst, followed by decades of slow growth and deflation.",
        "The Nikkei regained its 1989 peak only in 2024; government debt exceeds 200% of GDP."
      ],
      check: { q: "When did the Nikkei stock index finally regain its 1989 peak?",
        choices: ["1999", "2012", "2024"], answer: 2,
        explain: "It took 34 years; the index passed its December 1989 record in February 2024." },
      sources: [
        { title: "Japan: Economy", publisher: "Britannica", url: "https://www.britannica.com/place/Japan/Economy", date: "n.d." },
        { title: "Japan's Nikkei 225 surpasses all-time high reached in 1989", publisher: "CNN", url: "https://www.cnn.com/2024/02/22/business/japan-nikkei-225-record-high-intl-hnk/index.html", date: "2024-02-22" },
        { title: "Bank of Japan ends the world's only negative rates regime", publisher: "CNBC", url: "https://www.cnbc.com/2024/03/19/bank-of-japan-boj-march-2024-policy-decision-mpm-meeting.html", date: "2024-03-19" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "jp-4", kind: "players", asOf: "2026-09-29",
      title: "Takaichi and the new landscape",
      dek: "A dominant prime minister, a reform-minded partner from Osaka, a collapsed opposition and a rising populist right.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp/jp-4-hero.webp",
          alt: "Illustration of the Japanese Diet building, a pale stone structure with a stepped central tower, framed by cherry trees in blossom.",
          caption: "The National Diet Building in Tokyo, where the LDP now holds two-thirds of the lower house.",
          credit: "Illustration — not a photograph",
          prompt: "A symmetrical pale granite parliament building with a stepped pyramid-topped central tower, framed by cherry trees in full pink blossom, a wide empty plaza in front, soft spring light, calm and formal, no people close up, no flags or legible text." },
        { type: "people", head: "Five to know", items: [
          { name: "Sanae Takaichi", role: "Prime minister and LDP president, since October 2025",
            img: "img/jp/portrait-takaichi.webp", source: "Official portrait (Prime Minister's Office, government standard terms) via Wikimedia Commons; confirm the licence.",
            md: "Former economic security minister and heavy-metal drummer in her youth. A hawk on China and defence, a champion of constitutional revision, and the first woman to lead Japan." },
          { name: "Hirofumi Yoshimura", role: "Leader of Ishin (Japan Innovation Party)",
            img: "img/jp/portrait-yoshimura.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Governor of Osaka and leader of the party that became the LDP's partner in October 2025, pushing for smaller government and decentralisation." },
          { name: "Shinjiro Koizumi", role: "LDP heavyweight",
            img: "img/jp/portrait-koizumi.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Son of a former prime minister and Takaichi's run-off rival for the LDP leadership in 2025; a likely future contender." },
          { name: "Yoshihiko Noda", role: "Former prime minister; opposition figure",
            img: "img/jp/portrait-noda.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Led the Constitutional Democrats into a merger with Komeito, the Centrist Reform Alliance, which was crushed in February 2026 and broke up in September." },
          { name: "Sohei Kamiya", role: "Leader of Sanseito",
            img: "img/jp/portrait-kamiya.webp", source: "CC-licensed photo via Wikimedia Commons; confirm the licence.",
            md: "Leads a populist party with a 'Japanese First' message on immigration and foreign influence, which won 15 lower-house seats in 2026." }
        ] },
        { type: "section", head: "Inside the LDP", md:
          "Takaichi's position within her own party depends on her popularity. LDP leaders who lose voters' confidence are often replaced quickly, and several rivals, including Koizumi and former foreign and defence ministers, are waiting. Her September 2026 reshuffle, which rewarded allies caught up in the funding scandal, showed how much she relies on the party's conservative wing." },
        { type: "section", head: "Ishin", md:
          "Ishin, the Japan Innovation Party, began in Osaka as a movement for smaller government and more power for regions. It holds its own policy demands over the LDP, from cutting the number of Diet members to making Osaka a second capital, and could walk away if they are ignored." },
        { type: "section", head: "Other parties", md:
          "The Democratic Party for the People, a centrist party focused on raising take-home pay, gained ground among young voters in 2024–25. The Communists and small left-wing parties hold a handful of seats. Japan's opposition has been fragmented for most of the past three decades, which is one reason the LDP keeps winning." },
        { type: "section", head: "The coalition shake-up", md:
          "For 26 years the LDP governed with Komeito, a party backed by the Buddhist lay movement Soka Gakkai. When Takaichi won the LDP leadership in October 2025, Komeito walked out, citing the funding scandal and her hawkish views. Takaichi struck a deal instead with Ishin, the Osaka-based reformist party. After the February landslide the ruling bloc holds 352 of 465 lower-house seats." },
        { type: "section", head: "The opposition's collapse", md:
          "Hoping to stop Takaichi, the centre-left Constitutional Democrats and Komeito merged their lower-house members into the Centrist Reform Alliance in January 2026. It fell from 167 seats to 49. In September 2026 it broke up again, succeeded by a Democratic Reform Party and a revived Komeito." },
        { type: "section", head: "The new right", md:
          "Sanseito, founded in 2020 through YouTube videos, grew fast by campaigning against immigration and 'globalism'. Japan has few foreign residents by rich-world standards, about 3% of the population, but numbers have risen quickly, and the issue has moved into mainstream politics." }
      ],
      takeaways: [
        "Takaichi's LDP now governs with Ishin after Komeito left the coalition in 2025.",
        "The opposition merged into the Centrist Reform Alliance, was crushed and broke up again.",
        "Sanseito's 'Japanese First' populism has pushed immigration into mainstream debate."
      ],
      check: { q: "Which party left the coalition with the LDP in October 2025?",
        choices: ["Ishin", "Komeito", "Sanseito"], answer: 1,
        explain: "Komeito, the LDP's partner for 26 years, left when Takaichi became leader; Ishin then became the LDP's partner." },
      sources: [
        { title: "Centrist Reform Alliance", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Centrist_Reform_Alliance", date: "2026-09" },
        { title: "Why the CDP and Komeito are forming a new party", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/01/16/japan/politics/why-cdp-komeito-new-party/", date: "2026-01-16" },
        { title: "Results of the 2026 Japanese general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Results_of_the_2026_Japanese_general_election", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "jp-5", kind: "story", asOf: "2026-09-29",
      title: "The first woman prime minister",
      dek: "How an LDP in crisis turned to its most conservative candidate, lost its oldest partner and found a new one within three weeks.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp/jp-5-hero.webp",
          alt: "Illustration of a hall of politicians in dark suits applauding, seen from the back, with a single figure at a podium under bright lights.",
          caption: "Takaichi won the LDP leadership in October 2025 in a run-off against Shinjiro Koizumi.",
          credit: "Illustration — not a photograph",
          prompt: "A large conference hall seen from the back, rows of politicians in dark suits applauding, a single small figure at a podium far away under bright stage lights, a plain backdrop, formal and momentous, no faces visible, no legible text." },
        { type: "section", head: "What happened", md:
          "Shigeru Ishiba's LDP lost its lower-house majority in October 2024 and its upper-house majority in July 2025, when voters punished it for the funding scandal and rising prices. Ishiba announced his resignation on 7 September 2025. On 4 October LDP members chose Sanae Takaichi as their leader, beating Shinjiro Koizumi in a run-off.\n\n" +
          "Six days later Komeito ended its 26-year partnership with the LDP. For a moment Takaichi's premiership looked in doubt, as opposition parties discussed a joint candidate. Instead, Ishin agreed to back her in exchange for policy commitments, and on 21 October 2025 the Diet elected her Japan's first woman prime minister." },
        { type: "timeline", head: "How it unfolded", items: [
          ["Jul 2025", "LDP and Komeito lose their upper-house majority"],
          ["7 Sep 2025", "Ishiba announces his resignation"],
          ["4 Oct 2025", "Takaichi wins the LDP leadership"],
          ["10 Oct 2025", "Komeito leaves the coalition"],
          ["21 Oct 2025", "Takaichi elected prime minister with Ishin's support"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Many LDP members felt the party had drifted and was losing conservative voters to Sanseito and others. Takaichi, Abe's ideological heir, promised strong leadership, more defence spending and economic stimulus. Komeito, more dovish and cautious on constitutional change, saw her as a step too far and objected to her handling of the funding scandal." },
        { type: "section", head: "A woman at the top", md:
          "Takaichi's rise broke a glass ceiling in a country that ranks low on gender equality, with few women in the Diet or in corporate boardrooms. But she is a traditional conservative on social issues: she has opposed allowing married couples to keep separate surnames and supports keeping the imperial throne male-only. Some women's rights campaigners celebrated her rise; others doubted it would change much for Japanese women." },
        { type: "section", head: "Her programme", md:
          "Takaichi promised 'responsible, proactive public finances': more spending on defence, strategic industries such as semiconductors and energy, and relief from rising prices. She also pledged tougher rules on foreign land purchases and on spying, and an early start to constitutional debate." },
        { type: "compare", head: "Two views of Takaichi",
          left: { head: "Supporters", md:
            "A decisive leader who will strengthen Japan's defences, stand up to China and revive the economy, and who has brought voters back to the LDP." },
          right: { head: "Critics", md:
            "A nationalist whose views on history and defence inflame relations with Asian neighbours, and whose economic promises risk fuelling inflation and debt." } },
        { type: "section", head: "The first weeks", md:
          "Takaichi's first weeks were busy: a summit with Trump in Tokyo, the APEC meeting in South Korea, and a stimulus package to help households with prices. Her approval ratings in early polls were among the highest for a new prime minister in years, which encouraged her to seek a fresh mandate." },
        { type: "section", head: "What's next", md:
          "Within four months Takaichi had turned a shaky minority government into a landslide majority, as [[lesson:jp-7]] explains. The next test is whether she can use it without overreaching." }
      ],
      takeaways: [
        "Ishiba resigned in September 2025 after the LDP lost both of its parliamentary majorities.",
        "Takaichi won the LDP leadership on 4 October; Komeito left the coalition six days later.",
        "With Ishin's backing she became Japan's first woman prime minister on 21 October 2025."
      ],
      check: { q: "Whom did Takaichi beat in the run-off for the LDP leadership?",
        choices: ["Shigeru Ishiba", "Shinjiro Koizumi", "Yoshihiko Noda"], answer: 1,
        explain: "Takaichi defeated Shinjiro Koizumi in the run-off on 4 October 2025." },
      sources: [
        { title: "Sanae Takaichi", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sanae_Takaichi", date: "2026" },
        { title: "Premiership of Shigeru Ishiba", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Premiership_of_Shigeru_Ishiba", date: "2025" },
        { title: "Komeito", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Komeito", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "jp-6", kind: "story", asOf: "2026-09-29",
      title: "The Taiwan remark",
      dek: "Two weeks after taking office, Takaichi said a Chinese attack on Taiwan could draw in Japan's forces. Beijing responded with a campaign of economic pressure.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp/jp-6-hero.webp",
          alt: "Illustration of a grey warship leaving a harbour at dawn, with container cranes and green hills behind it.",
          caption: "Japan's forces could be drawn into a Taiwan conflict, Takaichi told the Diet in November 2025.",
          credit: "Illustration — not a photograph",
          prompt: "A grey naval destroyer leaving a harbour at dawn, container cranes and green forested hills behind, calm water with a long wake, pale gold sky, sober and strategic, no flags or legible markings." },
        { type: "section", head: "What happened", md:
          "On 7 November 2025, answering a question in the Diet, Takaichi said that a Chinese naval blockade or use of force against [[unit:tw|Taiwan]] could 'by all means' become a 'survival-threatening situation' for Japan, the legal term that allows its forces to act alongside allies. Previous prime ministers had avoided saying so explicitly.\n\n" +
          "China reacted furiously. It demanded a retraction, which Takaichi refused, advised its citizens not to travel to Japan, and on 19 November suspended all imports of Japanese seafood. In January 2026 it banned exports to Japan of dual-use items that could have military uses, including some rare earths." },
        { type: "timeline", head: "How it unfolded", items: [
          ["7 Nov 2025", "Takaichi's remark in the Diet"],
          ["Nov 2025", "China advises citizens against travel to Japan"],
          ["19 Nov 2025", "China suspends Japanese seafood imports"],
          ["Jan 2026", "China bans dual-use exports, including some rare earths, to Japan"],
          ["Feb 2026", "Japan retrieves rare-earth mud from the deep sea in a test mission"]
        ] },
        { type: "section", head: "Why it matters", md:
          "Taiwan is only about 110 kilometres from Japan's westernmost island, and Japan hosts the US forces that would be central to any defence of it. For Beijing, any suggestion that Japan might intervene recalls Japan's colonial rule of Taiwan from 1895 to 1945. For Tokyo, the remark stated the obvious: a war next door would inevitably involve Japan." },
        { type: "compare", head: "Two views of the remark",
          left: { head: "Tokyo and its supporters", md:
            "Takaichi only described the law and the geography honestly. Deterrence depends on China knowing that aggression against Taiwan would have wider consequences." },
          right: { head: "Beijing and some critics", md:
            "Taiwan is China's internal affair. By abandoning deliberate ambiguity, Japan's leader provoked China and put the region at risk." } },
        { type: "section", head: "The US angle", md:
          "Takaichi's remark came as Washington was seeking better relations with Beijing, and Trump did not publicly back her. Some Japanese commentators worried that Tokyo was more exposed than before, taking a firm line on Taiwan without certainty of American support." },
        { type: "section", head: "The economic fight", md:
          "China is Japan's biggest trading partner, and Chinese visitors had been among the largest groups of tourists. The travel advisory cost Japanese hotels and shops heavily, and the rare-earth ban hit industries that depend on Chinese supplies. Japan has responded by accelerating efforts to diversify, from Australian mines to a first-of-its-kind mission that retrieved rare-earth-rich mud from the seabed." },
        { type: "section", head: "Public opinion", md:
          "Polls suggested many Japanese people supported Takaichi's refusal to retract her words. Public views of China, already negative, hardened further. Businesses with large Chinese sales were more anxious, and pressed the government for a way to calm tensions without appearing to give in." },
        { type: "section", head: "What's next", md:
          "Relations remain frosty. Watch whether China extends its export bans, whether leaders' meetings resume, and how Takaichi's defence build-up and any US–China understanding on Taiwan affect the standoff." }
      ],
      takeaways: [
        "On 7 November 2025 Takaichi said a Chinese attack on Taiwan could be a 'survival-threatening situation' for Japan.",
        "China responded with a travel advisory, a seafood ban and, in January 2026, export curbs including rare earths.",
        "Japan is racing to diversify its supplies of critical minerals away from China."
      ],
      check: { q: "What did China ban in January 2026 in response to Takaichi's remark?",
        choices: ["All trade with Japan", "Exports of dual-use items, including some rare earths, to Japan", "Japanese cars"], answer: 1,
        explain: "China banned exports to Japan of dual-use items with possible military uses, including some rare earths." },
      sources: [
        { title: "2025–2026 China–Japan diplomatic crisis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025%E2%80%932026_China%E2%80%93Japan_diplomatic_crisis", date: "2026" },
        { title: "China warns there is 'no market' for Japanese seafood exports as spat over Taiwan comments escalates", publisher: "CNN", url: "https://www.cnn.com/2025/11/19/china/japan-china-taiwan-dispute-intl-hnk", date: "2025-11-19" },
        { title: "Japanese PM's Taiwan comments prompt China to ban certain exports to Japan", publisher: "CNN Business", url: "https://www.cnn.com/2026/01/06/business/china-japan-export-controls-intl-hnk", date: "2026-01-06" },
        { title: "Japan deep-sea hunt finds rare earths as it seeks to cut reliance on China", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/2/japan-deep-sea-hunt-finds-rare-earths-as-it-seeks-to-cut-reliance-on-china", date: "2026-02-02" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "jp-7", kind: "story", asOf: "2026-09-29",
      title: "The landslide",
      dek: "In February 2026 Takaichi gambled on a snap election and won the biggest victory of any party in post-war Japan.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp/jp-7-hero.webp",
          alt: "Illustration of a Tokyo street at night in the rain, with a crowd under umbrellas watching a giant screen showing blank results bars.",
          caption: "Election night, 8 February 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A busy Tokyo street crossing at night in light rain, a crowd under clear umbrellas seen from behind watching a giant outdoor video screen showing blank coloured bar charts, neon reflections on wet pavement, excitement, no legible text or faces." },
        { type: "section", head: "What happened", md:
          "Riding high approval ratings, Takaichi dissolved the lower house in January 2026. In the election on 8 February the LDP won 316 of 465 seats, the most any party has won since the war and a two-thirds majority on its own. With Ishin, the ruling bloc holds 352 seats. The opposition Centrist Reform Alliance fell to 49, and the populist Sanseito rose to 15. Turnout was about 56%, slightly higher than in 2024." },
        { type: "facts", head: "The results", rows: [
          ["LDP", "316 seats"],
          ["Ruling bloc (LDP and Ishin)", "352 seats"],
          ["Centrist Reform Alliance", "49 seats, down from 167"],
          ["Sanseito", "15 seats"],
          ["Turnout", "About 56%"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Voters rewarded a leader who seemed decisive after years of drift, and many conservative voters who had defected to smaller parties came back. The opposition's last-minute merger confused its own supporters, and Komeito's organisation could not save it. Takaichi's standoff with China may also have helped her at home, rallying voters around a leader seen as standing firm." },
        { type: "section", head: "What a two-thirds majority means", md:
          "With two-thirds of the lower house, the LDP can override the upper house on ordinary legislation. It is also enough in the lower house to propose a constitutional amendment, but not in the upper house, where the LDP and its allies lack even a simple majority. The next upper-house election, in 2028, is therefore crucial for Takaichi's plans to revise Article 9." },
        { type: "section", head: "The campaign", md:
          "Takaichi campaigned on her record in office, strong defence and help with the cost of living, including a pledge to cut taxes on food, which some voters doubted she could afford. The opposition campaigned against the funding scandal and warned against giving one party too much power. Neither message dominated, but the prime minister's personal popularity carried LDP candidates across the country." },
        { type: "compare", head: "Two readings of the landslide",
          left: { head: "A mandate", md:
            "Voters gave Takaichi an unprecedented mandate to rebuild Japan's defences, revise the constitution and revive the economy." },
          right: { head: "A warning", md:
            "Low turnout and a fractured opposition inflated the result. Such a dominant party, with few checks, risks complacency and overreach." } },
        { type: "section", head: "Who voted how", md:
          "The LDP did especially well among older and rural voters, as usual, but also regained ground with younger voters who had drifted to the Democratic Party for the People and Sanseito in 2024–25. Opposition parties won most of their seats in big cities, where the LDP has long been weaker." },
        { type: "section", head: "Since then", md:
          "Power has brought familiar problems. In September 2026 Takaichi reshuffled her cabinet and gave senior posts to politicians involved in the funding scandal, which 68.6% of respondents to a Jiji poll opposed. Jiji's September survey put her approval at 44.1%, the lowest since she took office, though a Nikkei poll after the reshuffle found 62%." }
      ],
      takeaways: [
        "On 8 February 2026 the LDP won 316 of 465 seats, the most for any party since the war.",
        "The opposition's merged party collapsed to 49 seats; Sanseito rose to 15.",
        "The LDP can now override the upper house on ordinary laws, but constitutional change still needs the upper house."
      ],
      check: { q: "Why can't Takaichi amend the constitution with her lower-house majority alone?",
        choices: ["The emperor must approve", "Amendments also need two-thirds of the upper house and a referendum", "The Supreme Court decides"], answer: 1,
        explain: "An amendment needs two-thirds in both houses and then a referendum; the ruling bloc lacks even a majority in the upper house." },
      sources: [
        { title: "Japan's Takaichi secures historic supermajority in landslide election victory", publisher: "CNN", url: "https://www.cnn.com/2026/02/08/asia/japan-takaichi-snap-election-exit-polls-intl", date: "2026-02-08" },
        { title: "A Landslide for Takaichi's LDP: House of Representatives Election Results", publisher: "Nippon.com", url: "https://www.nippon.com/en/japan-data/h02703/", date: "2026-02" },
        { title: "Japan's thunderbolt election: Takaichi resets politics, economics, and diplomacy", publisher: "Brookings", url: "https://www.brookings.edu/articles/japans-thunderbolt-election-takaichi-resets-politics-economics-and-diplomacy/", date: "2026-02" },
        { title: "Ahead of reshuffle, approval rate for Takaichi Cabinet fell to 44.1%", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/09/18/japan/politics/poll-takaichi-approval-rate/", date: "2026-09-18" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "jp-12", kind: "spotlight", asOf: "2026-09-29",
      title: "An ageing nation",
      dek: "Japan has the world's oldest population and is shrinking by nearly a million people a year. It is slowly opening its doors to foreign workers.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp/jp-12-hero.webp",
          alt: "Illustration of an empty rural village street with old wooden houses, shuttered shops and an elderly person walking slowly in the distance, with mountains behind.",
          caption: "Across rural Japan, millions of homes stand empty as villages age and shrink.",
          credit: "Illustration — not a photograph",
          prompt: "An empty rural Japanese village street with old wooden houses and tiled roofs, shuttered shops, an elderly figure far in the distance walking slowly, green forested mountains behind, soft autumn light, quiet and melancholy, no face visible, no legible text." },
        { type: "facts", head: "Demography", rows: [
          ["Population", "About 124 million, falling"],
          ["Aged 65 or over", "About 29%, the highest share in the world"],
          ["Births in 2024", "About 686,000 Japanese nationals, a record low"],
          ["Fertility rate", "About 1.15 children per woman (2024)"],
          ["Foreign residents", "A record 3.95 million by mid-2025, about 3% of the population"]
        ] },
        { type: "section", head: "Fewer babies, longer lives", md:
          "Japanese people live longer than almost anyone else, and have far fewer children than they used to. The fertility rate has been below the replacement level of 2.1 since the 1970s and fell to about 1.15 in 2024. Fewer than 700,000 Japanese babies were born that year, the lowest since records began. The population peaked around 2008 and is now falling by roughly 900,000 a year. Nearly three in ten Japanese are 65 or older." },
        { type: "section", head: "Why", md:
          "Young Japanese are marrying later or not at all, and few children are born outside marriage. Long working hours, insecure jobs for young people, high education costs, cramped city housing and traditional expectations that women handle childcare while working have all been blamed. Successive governments have expanded childcare, parental leave and child allowances, with limited effect so far." },
        { type: "section", head: "The consequences", md:
          "A shrinking workforce means labour shortages in care homes, construction, farming, transport and shops. Rural towns are emptying: millions of houses stand abandoned, and schools close every year. Pension and health costs strain the budget. Robots, automation and older people working longer have filled some gaps; about a quarter of people aged 65 and over still work." },
        { type: "section", head: "Opening the door", md:
          "Japan long resisted immigration, prizing social cohesion. That has changed quietly: foreign residents have risen to a record of about 3.95 million, led by people from China, Vietnam and South Korea, with fast growth from Nepal and the Philippines; many work through trainee and 'specified skilled worker' visas. The old technical-intern programme, criticised for abuse, is being replaced from 2027. The influx has also fed a backlash: the anti-immigration Sanseito party made big gains in 2025 with a 'Japanese first' message, and the government has pledged tougher rules on foreigners." },
        { type: "section", head: "Tokyo and the rest", md:
          "The decline is uneven. Young people keep moving to Tokyo and a few other big cities, whose populations have held up, while the countryside empties. In 2024 Tokyo's fertility rate fell below one child per woman, the lowest in the country, a sign that city life itself makes raising children harder." },
        { type: "compare", head: "Two answers",
          left: { head: "Open up", md:
            "Japan cannot sustain its economy and care for its elderly without many more foreign workers, and should welcome them as permanent residents." },
          right: { head: "Stay cautious", md:
            "Technology, higher productivity and getting more women and older people into work are better answers than large-scale immigration." } },
        { type: "section", head: "Why it matters", md:
          "Japan is the first major economy to face deep population decline, and its choices on work, welfare and immigration are being watched by [[unit:kr|South Korea]], [[unit:cn|China]] and Europe, which face the same future." }
      ],
      takeaways: [
        "Japan has the world's oldest population; about 29% are 65 or over.",
        "Births hit a record low in 2024 and the population is falling by nearly a million a year.",
        "Foreign residents have reached a record of nearly 4 million, easing labour shortages but fuelling a political backlash."
      ],
      check: { q: "About how much is Japan's population falling each year?",
        choices: ["10,000", "Nearly 1 million", "10 million"], answer: 1,
        explain: "With deaths far outnumbering births, Japan's population is shrinking by roughly 900,000 a year." },
      sources: [
        { title: "Births in Japan Fall Below 700,000 for the First Time in 2024", publisher: "Nippon.com", url: "https://www.nippon.com/en/japan-data/h02429/", date: "2025-06" },
        { title: "Statistical Handbook of Japan", publisher: "Statistics Bureau of Japan", url: "https://www.stat.go.jp/english/data/handbook/index.html", date: "2025" },
        { title: "Foreign residents in Japan hit record 3.95 million", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2025/10/10/japan/foreign-residents-record/", date: "2025-10-10" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "jp-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "A dominant government with a constitutional agenda, a defence build-up, a cold war with China and an ageing society.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp/jp-8-hero.webp",
          alt: "Illustration of a quiet rural Japanese village in autumn, with old wooden houses, a shrine gate and an elderly person walking along a lane.",
          caption: "Japan's countryside is ageing fast; more than one in four Japanese people is 65 or older.",
          credit: "Illustration — not a photograph",
          prompt: "A quiet rural Japanese village in autumn, old wooden houses with tiled roofs, a red shrine gate at the edge of a forest, maple trees turning red, an elderly person seen from behind walking slowly along a lane, gentle melancholy, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Takaichi's LDP holds 316 of 465 lower-house seats; with Ishin, 352.\n" +
          "- **Approval:** slipping in some polls after a September reshuffle.\n" +
          "- **Defence:** a budget of over ¥9 trillion for fiscal 2026 and plans to go further.\n" +
          "- **Constitution:** Takaichi wants to recognise the Self-Defence Forces in the text; she lacks the upper-house votes.\n" +
          "- **China:** relations frozen since November 2025, with export curbs in place." },
        { type: "section", head: "Rearmament", md:
          "Japan's defence budget has grown fast since 2022, reaching more than ¥9 trillion (about $58 billion) for fiscal 2026. It is buying long-range missiles able to strike enemy bases, building up forces in its south-western islands near Taiwan, and loosening rules on exporting weapons. Takaichi wants to go further, arguing that [[unit:cn|China]], [[unit:kp|North Korea]] and [[unit:ru|Russia]] pose the most serious threats since the war." },
        { type: "section", head: "The economy and society", md:
          "After decades of falling prices, inflation has returned, and the Bank of Japan has slowly raised interest rates. Takaichi favours government spending and cheap money to support growth, which worries some investors given Japan's public debt of more than twice its GDP. The population is shrinking by hundreds of thousands a year, and the number of foreign workers is growing, an uncomfortable issue in a country long wary of immigration." },
        { type: "section", head: "Japan and America", md:
          "The alliance with [[unit:us|the United States]] remains the foundation of Japan's security. Tokyo agreed a trade deal with Washington in 2025 that set a 15% US tariff on most Japanese goods in exchange for $550 billion of Japanese investment in the US. Japan wants to be seen as a contributor, not a free rider, and Takaichi's spending plans are partly aimed at Washington, where Trump has long complained that allies do not pay enough for their own defence." },
        { type: "section", head: "Korea and the region", md:
          "Relations with [[unit:kr|South Korea]] have been steady under President Lee Jae-myung, despite fears that his left-leaning government would revive historical disputes. Japan also deepened defence ties with the Philippines and [[unit:au|Australia]], and is part of trilateral cooperation with the US and Seoul on North Korea." },
        { type: "section", head: "What voters want", md:
          "Surveys suggest Japanese voters care most about prices, wages and pensions, followed by the birth rate and national security. Many are uneasy about rapid rearmament but more worried about China and North Korea than a decade ago." },
        { type: "section", head: "Three scenarios", md:
          "- **A new Japan.** Takaichi wins the 2028 upper-house election and moves to amend Article 9, completing Abe's project.\n" +
          "- **Overreach.** Scandals and rising prices erode her support, and the LDP turns on its leader, as it has many times before.\n" +
          "- **Thaw with China.** A leaders' meeting eases the standoff and trade restrictions, without changing Japan's defence course." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Autumn 2026:** the Diet session after the reshuffle\n" +
          "- **Ongoing:** Chinese export curbs and any leaders' meeting\n" +
          "- **Summer 2028:** the next upper-house election, key to constitutional change" },
        { type: "section", head: "Connections", md:
          "Japan's story runs through [[unit:us]] (the alliance), [[unit:cn]] (rival and trading partner), [[unit:tw]] (the remark), [[unit:kr]] (a neighbour and partner), [[unit:kp]] (missiles overhead), [[unit:ru]] (the Kurils), [[unit:au]] and [[unit:in]] (partners in the Quad)." }
      ],
      takeaways: [
        "Takaichi's government dominates the Diet but faces slipping approval.",
        "Japan is rearming fast, with a defence budget above ¥9 trillion.",
        "Amending Article 9 depends on the 2028 upper-house election."
      ],
      check: { q: "Which election is key to Takaichi's plans to amend Article 9?",
        choices: ["The 2028 upper-house election", "The next LDP leadership race", "Local elections in Osaka"], answer: 0,
        explain: "An amendment needs two-thirds of both houses; the ruling bloc lacks a majority in the upper house until at least 2028." },
      sources: [
        { title: "Article 9 in focus as Takaichi pushes for revision of Constitution", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/05/03/japan/politics/takaichi-constitution-day/", date: "2026-05-03" },
        { title: "Japan PM Takaichi's approval rating stays at 62% after cabinet reshuffle", publisher: "Nikkei Asia", url: "https://asia.nikkei.com/politics/japan-pm-takaichi-s-approval-rating-stays-at-62-after-cabinet-reshuffle", date: "2026-09" },
        { title: "A Message to China from Japan's Takaichi Administration", publisher: "The Diplomat", url: "https://thediplomat.com/2026/09/a-message-to-china-from-japans-takaichi-administration/", date: "2026-09" }
      ]
    }
  ]
});
