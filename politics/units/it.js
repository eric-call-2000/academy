/* ============================================================
   Unit 9 — Italy 🇮🇹
   Research note and sources: tools/research/it.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("it", {
  id: "it",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "it-1", kind: "snapshot", asOf: "2026-09-28",
      title: "Italy in brief",
      dek: "The country famous for short-lived governments now has one of Western Europe's most stable, led by a prime minister from the far right.",
      blocks: [
        { type: "map", src: "maps/it.svg",
          alt: "Locator map of southern Europe with Italy highlighted, including Sicily and Sardinia, bordering France, Switzerland, Austria and Slovenia, with a small globe showing its place in the world.",
          caption: "Italy's long peninsula reaches deep into the Mediterranean, making it a front line for migration from Africa.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Rome"],
          ["People", "About 59 million, and shrinking"],
          ["System", "Parliamentary republic"],
          ["Prime minister", "Giorgia Meloni (Brothers of Italy), since October 2022"],
          ["President", "Sergio Mattarella, since 2015"],
          ["Coalition", "Brothers of Italy, the League, Forza Italia and a small centrist party"],
          ["Next general election", "Due by late 2027"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Italy is the EU's third-largest economy, a founding member of the European Union and [[NATO]], and a member of the G7. It carries one of the largest public debts in the world, so its budgets matter to the whole euro area. Sitting in the middle of the Mediterranean, it is the first European landfall for many migrants crossing from North Africa, which makes it central to the EU's most divisive debate.\n\n" +
          "Politically, it is a laboratory. Italy had a populist government before most of Europe, and in 2022 it became the first big Western European country since the war to be led by a party with roots in post-fascism." },
        { type: "section", head: "Who holds power", md:
          "Giorgia Meloni, 49, leads Brothers of Italy, a party she co-founded in 2012 when it polled around 2%. She governs in a right-wing coalition with Matteo Salvini's League and Forza Italia, the party founded by the late Silvio Berlusconi and now led by Antonio Tajani. Salvini and Tajani are both deputy prime ministers.\n\n" +
          "The head of state, President Sergio Mattarella, is a respected elder statesman whose role is mostly ceremonial but becomes crucial when governments fall." },
        { type: "section", head: "The mood in 2026", md:
          "Meloni's government has lasted longer than almost any in Italy's post-war history, a remarkable achievement in a country that has had 68 governments since 1946. Financial markets, once nervous about her, now lend to Italy at rates close to [[unit:fr|France's]]. But growth is slow, wages have barely risen in decades, and young Italians emigrate in large numbers. In March 2026 voters rejected her flagship justice reform in a referendum, her first major defeat." },
        { type: "section", head: "North and south", md:
          "Italy was unified only in 1861, and its regions still feel distinct. The industrial north, around Milan and Turin, is among the richest parts of Europe; the south, the Mezzogiorno, is much poorer, with higher unemployment and weaker public services. Organised crime groups such as the Sicilian Mafia and Calabria's 'Ndrangheta remain powerful. Every government promises to close the gap; none has managed it." },
        { type: "section", head: "What Italy wants", md:
          "Meloni's government wants to cut irregular migration, keep the budget deficit below the EU's limit, change the constitution to give the prime minister more power, and keep Italy close to both the EU and Trump's [[unit:us|United States]]. It has been a firm supporter of [[unit:ua|Ukraine]], and its 'Mattei Plan' promises investment in Africa to reduce the causes of migration." },
        { type: "callout", tone: "why", md:
          "Meloni is watched across Europe as a model: a leader from the hard right who governs as a pragmatic conservative, loyal to NATO and cooperative with Brussels, while pushing hard on migration and national identity. Admirers want to copy her; critics warn the model normalises the far right." }
      ],
      takeaways: [
        "Italy is the EU's third-largest economy, with one of the world's largest public debts.",
        "Giorgia Meloni has led a stable right-wing coalition since October 2022, a rarity in Italian politics.",
        "Voters handed her a first big defeat in a March 2026 referendum; the next election is due by late 2027."
      ],
      check: { q: "Which party does Giorgia Meloni lead?",
        choices: ["The League", "Forza Italia", "Brothers of Italy"], answer: 2,
        explain: "Meloni co-founded and leads Brothers of Italy. The League (Salvini) and Forza Italia (Tajani) are her coalition partners." },
      sources: [
        { title: "Next Italian general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Next_Italian_general_election", date: "2026-09" },
        { title: "Can Meloni's Stability Record Survive Italy's 2027 Election?", publisher: "Modern Diplomacy", url: "https://moderndiplomacy.eu/2026/08/31/can-melonis-stability-record-survive-italys-2027-election/", date: "2026-08-31" },
        { title: "Economic forecast for Italy", publisher: "European Commission", url: "https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages-including-country-reports/italy/economic-forecast-italy_en", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "it-2", kind: "power", asOf: "2026-09-28",
      title: "A system built for weak governments",
      dek: "Two equal chambers, a president who picks prime ministers, and a constitution that makes big changes hard.",
      blocks: [
        { type: "diagram", src: "img/it/it-2-power.svg",
          alt: "Diagram of power in Italy. Voters elect both chambers, mostly by party lists. Parliament, with 400 deputies and 200 senators, must give the government its confidence, and both chambers must pass every law. The prime minister, Giorgia Meloni, leads a right-wing coalition and often governs by decree-law. The president, Sergio Mattarella, is elected by parliament for seven years, picks the prime minister and can dissolve parliament. The Constitutional Court reviews laws, and voters confirm constitutional changes by referendum. Regions run health care, and EU rules shape the budget.",
          caption: "Italy's constitution spreads power thinly, a reaction to Mussolini's dictatorship.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "Written against Mussolini", md:
          "Italy's constitution came into force in 1948, after two decades of Fascist dictatorship and a war that ended with Mussolini's fall. Its authors wanted to make sure no one could concentrate power again. So they gave the prime minister relatively weak tools, made parliament strong, created an independent judiciary and a Constitutional Court, and gave voters referendums to check parliament." },
        { type: "section", head: "Two equal chambers", md:
          "Italy has 'perfect bicameralism': the Chamber of Deputies and the Senate have exactly the same powers. Every law must pass both in identical form, and the government needs the confidence of both. A 2020 referendum cut their size from 945 elected members to 600: 400 deputies and 200 senators.\n\n" +
          "Because passing laws is slow, governments rely heavily on decree-laws, which take effect immediately but lapse unless parliament converts them within 60 days." },
        { type: "section", head: "The president", md:
          "The president is elected by parliament and regional delegates for seven years. In calm times the job is ceremonial. When a government falls, the president becomes the kingmaker: consulting parties, choosing whom to ask to form a government, and deciding whether to call an election. Presidents have used that power to install [[technocratic government|technocratic governments]] led by non-politicians, such as Mario Monti in 2011 and Mario Draghi in 2021." },
        { type: "section", head: "The electoral system", md:
          "Italy's electoral law has changed often, usually to suit whoever was in power. The current system, from 2017, elects about a third of seats in single-member constituencies and the rest proportionally. It rewards parties that form pre-election coalitions, which is how the right won clear majorities in 2022 with about 44% of the vote. Meloni's government is now trying to replace it, as [[lesson:it-7]] explains." },
        { type: "section", head: "Regions and Europe", md:
          "Italy's 20 regions run health care, which takes most of their budgets, and five of them have special autonomy. The north is much richer than the south, a divide as old as the unified state. And Brussels matters: as a large debtor in the euro, Italy must follow EU budget rules, and it is the largest beneficiary of the EU's post-pandemic recovery fund." },
        { type: "section", head: "Referendums", md:
          "Italians can vote directly in two kinds of referendum. A confirmatory referendum is held on a constitutional change that parliament passed without a two-thirds majority, and it has no minimum turnout. An abrogative referendum can repeal an existing law, but only counts if more than half of voters take part, a bar that has often not been met. Referendums have decided big questions, from divorce in 1974 to cutting the size of parliament in 2020." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Its defenders", md:
            "The checks built in 1948 have kept Italian democracy safe through terrorism, mafia wars and corruption scandals. Governments change, but the institutions hold." },
          right: { head: "Its critics", md:
            "Italy has had 68 governments in 80 years. Weak executives can't carry out long-term reforms, which is why Meloni wants a directly elected prime minister." } }
      ],
      takeaways: [
        "The 1948 constitution spreads power thinly to prevent another dictatorship.",
        "Both chambers have equal powers; governments often rule through decree-laws.",
        "The president, elected by parliament for seven years, becomes kingmaker when governments fall."
      ],
      check: { q: "What does 'perfect bicameralism' mean in Italy?",
        choices: ["Parliament has only one chamber", "The Chamber and the Senate have exactly the same powers", "The Senate is appointed by the president"], answer: 1,
        explain: "Both chambers must pass every law in identical form, and the government needs the confidence of both." },
      sources: [
        { title: "Constitution of the Italian Republic", publisher: "Senato della Repubblica", url: "https://www.senato.it/documenti/repository/istituzione/costituzione_inglese.pdf", date: "n.d." },
        { title: "Elections in Italy", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Elections_in_Italy", date: "n.d." },
        { title: "Italian electoral law of 2017", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Italian_electoral_law_of_2017", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "it-9", kind: "founding", asOf: "2026-09-28",
      title: "The Risorgimento",
      dek: "Italy was a patchwork of states until 1861. Its unification, by diplomacy and war, created a nation whose regions still feel very different.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it/it-9-hero.webp",
          alt: "Illustration of a line of volunteers in red shirts seen from behind marching along a dusty Sicilian road toward a hill town at sunset.",
          caption: "Garibaldi's 'Thousand' landed in Sicily in 1860 and conquered the south for the new Italy.",
          credit: "Illustration — not a photograph",
          prompt: "A long line of 19th-century volunteers in red shirts seen from behind marching along a dusty road through olive groves toward a hilltop town in Sicily at sunset, warm golden light, heroic and romantic, no faces visible, no flags, no legible text." },
        { type: "timeline", head: "Making Italy", items: [
          ["1815", "Congress of Vienna restores a divided Italy"],
          ["1848", "Revolutions across Italy fail"],
          ["1859", "Piedmont and France defeat Austria"],
          ["1860", "Garibaldi's Thousand conquer Sicily and Naples"],
          ["17 Mar 1861", "Kingdom of Italy proclaimed"],
          ["1870", "Rome captured and made the capital"],
          ["2 June 1946", "Italians vote to become a republic"]
        ] },
        { type: "section", head: "A geographical expression", md:
          "After the fall of Rome, Italy was divided for more than a thousand years among city-states, kingdoms, the Papal States and foreign powers. In 1815 the Austrian statesman Metternich dismissed it as 'a geographical expression': Austria ruled Lombardy and Venetia, the Pope governed central Italy, a Bourbon king ruled Naples and Sicily, and the Kingdom of Piedmont-Sardinia, based in Turin, was the only independent Italian state of weight." },
        { type: "section", head: "Three founding fathers", md:
          "The Risorgimento, or 'resurgence', had three famous leaders with very different ideas. Giuseppe Mazzini, a revolutionary, dreamed of a democratic republic built by the people. Count Camillo Cavour, Piedmont's prime minister, was a liberal pragmatist who used diplomacy and alliances. Giuseppe Garibaldi was a guerrilla fighter and popular hero. After the revolutions of 1848 failed, Cavour's approach prevailed: Piedmont joined with France to defeat Austria in 1859 and annexed much of the north and centre." },
        { type: "section", head: "Unification", md:
          "In May 1860 Garibaldi sailed from Genoa with about a thousand volunteers, the 'Redshirts', landed in Sicily and, amid popular uprisings, conquered the Bourbon kingdom of Naples. Rather than found a republic, he handed his conquests to Piedmont's king, Victor Emmanuel II. The Kingdom of Italy was proclaimed on 17 March 1861. Venice followed in 1866, and in 1870, when French troops protecting the Pope withdrew, Italian forces took Rome, which became the capital. The Pope refused to recognise the new state until 1929." },
        { type: "section", head: "Making Italians", md:
          "'We have made Italy; now we must make Italians,' a Piedmontese statesman is said to have remarked. Only a few per cent of the population spoke standard Italian in 1861. The new state imposed Piedmont's laws and taxes on the south, where a violent rebellion, called 'brigandage' by the government, was crushed in the 1860s. Millions of southerners emigrated to the Americas over the following decades. The gap between the industrial north and the poorer south, the Mezzogiorno, has never closed." },
        { type: "compare", head: "Two views of the Risorgimento",
          left: { head: "The national epic", md:
            "Heroic patriots freed Italy from foreign rule and united a people divided for centuries." },
          right: { head: "Southern and critical views", md:
            "Unification was a conquest by the north that impoverished the south, a grievance that still feeds regional resentment." } },
        { type: "section", head: "From kingdom to republic", md:
          "The monarchy led Italy through the First World War and then allowed Benito Mussolini to take power (see the next briefing). In a referendum on 2 June 1946, Italians voted 54% to 46% to abolish the monarchy, and a new constitution took effect in 1948. The north–south divide, regional identities and the Northern League's campaigns for autonomy all trace back to how Italy was made." }
      ],
      takeaways: [
        "Italy was divided among many states until the Risorgimento unified it between 1859 and 1870.",
        "Cavour's diplomacy and Garibaldi's Thousand created the Kingdom of Italy, proclaimed in 1861.",
        "Italy became a republic by referendum in 1946; the north–south divide dates from unification."
      ],
      check: { q: "Who led the 'Thousand' that conquered Sicily and Naples in 1860?",
        choices: ["Cavour", "Garibaldi", "Mazzini"], answer: 1,
        explain: "Giuseppe Garibaldi's Redshirts conquered the south and handed it to King Victor Emmanuel II." },
      sources: [
        { title: "Risorgimento", publisher: "Britannica", url: "https://www.britannica.com/event/Risorgimento", date: "n.d." },
        { title: "Giuseppe Garibaldi", publisher: "Britannica", url: "https://www.britannica.com/biography/Giuseppe-Garibaldi", date: "n.d." },
        { title: "Italy: History", publisher: "Britannica", url: "https://www.britannica.com/place/Italy/History", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "it-3", kind: "history", asOf: "2026-09-28",
      title: "Republic, scandal, populism",
      dek: "From the Christian Democrats' long reign to Berlusconi, technocrats and the rise of Brothers of Italy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it/it-3-hero.webp",
          alt: "Illustration of a Roman piazza at dusk with a baroque church, a crowd gathered around a stage, and scooters parked at the edge.",
          caption: "Italian politics has been reinvented repeatedly since 1946, often from the piazza.",
          credit: "Illustration — not a photograph",
          prompt: "A Roman piazza at dusk with a baroque church facade and an obelisk, a crowd gathered in front of a small stage with warm lights, scooters parked along the edge, terracotta buildings, an energetic but ordinary evening, no legible banners or flags." },
        { type: "timeline", head: "The short version", items: [
          ["1946", "Italians vote to abolish the monarchy"],
          ["1948–92", "Christian Democrats lead every government"],
          ["1992–94", "The 'Clean Hands' corruption scandal sweeps the old parties away"],
          ["1994–2011", "The Berlusconi era"],
          ["2011", "Debt crisis; technocrat Mario Monti takes over"],
          ["2018", "Populist Five Star Movement and League form a government"],
          ["2022", "Meloni wins"]
        ] },
        { type: "section", head: "1. The First Republic (1946–1992)", md:
          "In 1946 Italians voted to abolish the monarchy that had enabled Mussolini. For the next 45 years the Christian Democrats led every government, keeping the large Communist Party out of power with American backing during the [[Cold War]]. Italy grew rich in an 'economic miracle', but governments changed almost every year, and corruption became part of the system." },
        { type: "section", head: "2. Clean Hands (1992–1994)", md:
          "In 1992 Milan prosecutors uncovered a vast system of bribes paid by businesses to parties. The investigation, known as *Mani pulite* or Clean Hands, reached thousands of politicians. Within two years the Christian Democrats and Socialists had collapsed. The same years saw the Mafia murder the anti-mafia judges Giovanni Falcone and Paolo Borsellino, and a public turning against organised crime." },
        { type: "section", head: "3. Berlusconi (1994–2011)", md:
          "Into the vacuum stepped Silvio Berlusconi, a media billionaire whose new party, Forza Italia, won the 1994 election. He was prime minister three times, dominating politics for nearly two decades while fighting a stream of criminal cases. He built the modern Italian right, bringing the League and the heirs of the post-fascist movement into government." },
        { type: "section", head: "4. Crisis and populism (2011–2021)", md:
          "In 2011 the euro debt crisis pushed Italy's borrowing costs to dangerous levels, and Berlusconi resigned. The economist Mario Monti led a technocratic government that raised taxes and the pension age. Anger at austerity fuelled the anti-establishment Five Star Movement, founded by the comedian Beppe Grillo, which won a third of the vote in 2018 and formed a populist government with Salvini's League. Governments kept changing; in 2021 the former European Central Bank chief Mario Draghi led a national unity government." },
        { type: "section", head: "Why governments kept falling", md:
          "Italian governments rarely lose elections; they fall between them. Coalition partners walk out, party factions revolt, or a leader loses a confidence vote. The average government has lasted little more than a year. Every new leader has promised stability, and every new electoral law has been sold as the cure, which is why Meloni's longevity stands out." },
        { type: "section", head: "5. Meloni's rise (2012–2022)", md:
          "Meloni began in the youth wing of a party descended from Mussolini's followers. She co-founded Brothers of Italy in 2012; it won just 4% in 2018. Staying out of the Draghi government made it the only major opposition party, and when Draghi fell in July 2022, it surged. In the election on 25 September 2022, Brothers of Italy won 26%, the right-wing coalition won majorities in both chambers, and Meloni became Italy's first woman prime minister." }
      ],
      takeaways: [
        "The Christian Democrats led every government from 1948 until the Clean Hands scandal of the early 1990s.",
        "Berlusconi dominated for nearly two decades; the 2011 debt crisis brought technocrats and then populists.",
        "Meloni's Brothers of Italy went from 4% in 2018 to 26% in 2022, making her Italy's first woman prime minister."
      ],
      check: { q: "What was 'Clean Hands' (Mani pulite)?",
        choices: ["A 1990s anti-corruption investigation that destroyed the old parties", "Meloni's migration policy", "An EU recovery fund"], answer: 0,
        explain: "Clean Hands exposed a system of bribes to political parties, and the Christian Democrats and Socialists collapsed within two years." },
      sources: [
        { title: "Italy profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-europe-17435616", date: "n.d." },
        { title: "2022 Italian general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2022_Italian_general_election", date: "2022" },
        { title: "Results of the 2022 Italian general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Results_of_the_2022_Italian_general_election", date: "2022" }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "it-10", kind: "past", asOf: "2026-09-28",
      title: "Mussolini and Fascism",
      dek: "Italy invented fascism. Mussolini ruled for two decades, allied with Hitler and led the country to defeat, and his shadow still falls on its politics.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it/it-10-hero.webp",
          alt: "Illustration of a stark white marble building with rows of identical arches in a severe geometric style, under a clear blue sky.",
          caption: "Fascist architecture in Rome's EUR district, built for a world's fair planned for 1942.",
          credit: "Illustration — not a photograph",
          prompt: "A stark white travertine building with many rows of identical arches in a severe geometric rationalist style, under a clear deep blue sky, long shadows, empty square in front, imposing and cold, no people, no legible text." },
        { type: "facts", head: "The Fascist era", rows: [
          ["March on Rome", "October 1922"],
          ["Dictatorship declared", "1925"],
          ["Racial laws against Jews", "1938"],
          ["Italy enters the war", "June 1940, as Germany's ally"],
          ["Mussolini overthrown", "July 1943"],
          ["Mussolini killed by partisans", "28 April 1945"]
        ] },
        { type: "section", head: "The rise", md:
          "Italy emerged from the First World War on the winning side but felt cheated of territory, with 600,000 dead, a shattered economy, and strikes and factory occupations that frightened landowners and industrialists. Benito Mussolini, a former socialist journalist, founded the Fascist movement in 1919. His blackshirt squads beat and killed socialists and trade unionists. In October 1922, as Fascists marched on Rome, King Victor Emmanuel III refused to declare martial law and instead appointed Mussolini prime minister." },
        { type: "section", head: "The regime", md:
          "After his militia murdered the socialist deputy Giacomo Matteotti in 1924, Mussolini declared a dictatorship in 1925: other parties were banned, the press was controlled, and opponents were jailed or exiled. The regime built roads, drained marshes and promoted a cult of the Duce. In 1929 it signed the Lateran Pacts with the Church, creating Vatican City. In 1935–36 Italy conquered Ethiopia, using poison gas." },
        { type: "section", head: "Alliance with Hitler", md:
          "Mussolini allied with Nazi Germany, and in 1938 his regime passed racial laws excluding Jews from schools, jobs and public life. Italy entered the Second World War in June 1940, suffering defeats in Greece and North Africa. After the Allies landed in Sicily in July 1943, the Fascist Grand Council and the king deposed Mussolini. Germany occupied the north, rescued him and installed him as head of a puppet state; about 7,500 Jews were deported from Italy, most to Auschwitz." },
        { type: "section", head: "Resistance and republic", md:
          "From 1943 to 1945 Italy suffered a civil war as well as the Allied campaign. Partisans, many of them communists, fought the Germans and Fascists. In April 1945 partisans caught Mussolini trying to flee, shot him and hung his body upside down in Milan. The Resistance became a founding myth of the new republic, whose 1948 constitution bans the reorganisation of the Fascist party." },
        { type: "section", head: "Life under Fascism", md:
          "The regime sought to control every part of life. Children joined Fascist youth groups, workers belonged to state-run corporations instead of free unions, and propaganda glorified Mussolini as a man of action. Critics were sent into internal exile on remote islands; the Marxist thinker Antonio Gramsci died after years in prison. Many Italians conformed; others quietly resisted." },
        { type: "compare", head: "Two memories",
          left: { head: "The anti-fascist republic", md:
            "Italy's democracy was born from the Resistance; Fascism was a criminal dictatorship that led the country to ruin." },
          right: { head: "Nostalgia and ambiguity", md:
            "A minority has long seen Mussolini as a strong leader who 'did good things' before the war, a view that persists in parts of the right." } },
        { type: "section", head: "Why it still matters", md:
          "Giorgia Meloni's Brothers of Italy traces its roots to the Italian Social Movement, founded by Mussolini loyalists in 1946. Meloni has condemned the racial laws and says her party has left fascism behind; critics point to the flame in its logo and to members' nostalgia. Every 25 April, Liberation Day, the debate returns." }
      ],
      takeaways: [
        "Mussolini came to power in 1922 and declared a dictatorship in 1925.",
        "Fascist Italy conquered Ethiopia, passed racial laws in 1938 and fought alongside Hitler.",
        "The Resistance founded the republic; the Fascist legacy still shapes debates about Meloni's party."
      ],
      check: { q: "How did Mussolini become prime minister in 1922?",
        choices: ["He won an election", "The king appointed him during the Fascist March on Rome", "He led a military coup"], answer: 1,
        explain: "Victor Emmanuel III refused to use the army against the Fascist marchers and appointed Mussolini instead." },
      sources: [
        { title: "Benito Mussolini", publisher: "Britannica", url: "https://www.britannica.com/biography/Benito-Mussolini", date: "n.d." },
        { title: "Fascism", publisher: "Britannica", url: "https://www.britannica.com/topic/fascism", date: "n.d." },
        { title: "Italy", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/italy", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "it-11", kind: "past", asOf: "2026-09-28",
      title: "The Mafia and 'Clean Hands'",
      dek: "In the early 1990s the Mafia murdered Italy's top anti-Mafia judges, and a corruption investigation destroyed the parties that had ruled since 1945.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it/it-11-hero.webp",
          alt: "Illustration of a motorway through dry Sicilian hills with a simple memorial of two columns beside the road and flowers at their base.",
          caption: "Near Capaci in Sicily, where Judge Giovanni Falcone was killed by a bomb under the motorway in May 1992.",
          credit: "Illustration — not a photograph",
          prompt: "A motorway through dry golden Sicilian hills near the sea, a simple memorial of two tall red columns beside the road with flowers at their base, bright afternoon light, solemn and quiet, no people, no legible text." },
        { type: "timeline", head: "A decade of upheaval", items: [
          ["1986–87", "The Maxi Trial convicts 338 mafiosi"],
          ["Feb 1992", "Mani Pulite ('Clean Hands') begins in Milan"],
          ["23 May 1992", "Judge Giovanni Falcone killed at Capaci"],
          ["19 July 1992", "Judge Paolo Borsellino killed in Palermo"],
          ["1993", "Toto Riina arrested; bombs in Rome, Florence and Milan"],
          ["1994", "The old parties collapse; Berlusconi wins power"]
        ] },
        { type: "section", head: "Cosa Nostra", md:
          "The Sicilian Mafia, Cosa Nostra, grew in the 19th century as a network of 'men of honour' who controlled land, protection rackets and politics. After 1945 it expanded into construction and, from the 1970s, the global heroin trade. It was one of several crime syndicates, alongside the 'Ndrangheta of Calabria and the Camorra of Naples. Politicians, especially in Sicily's Christian Democrat machine, often protected it in exchange for votes." },
        { type: "section", head: "The Maxi Trial and the judges' murders", md:
          "In the 1980s two Palermo judges, Giovanni Falcone and Paolo Borsellino, persuaded mafiosi to testify for the first time. The resulting Maxi Trial of 1986–87 convicted 338 defendants, and in January 1992 the Supreme Court upheld the verdicts. The Mafia, led by Toto Riina, took revenge. On 23 May 1992 a huge bomb under the motorway near Capaci killed Falcone, his wife and three bodyguards; on 19 July a car bomb in Palermo killed Borsellino and five bodyguards. Public outrage led to a crackdown: Riina was arrested in 1993 after 23 years on the run." },
        { type: "section", head: "Clean Hands", md:
          "In February 1992 Milan prosecutors arrested a Socialist official taking a bribe. The investigation, Mani Pulite ('Clean Hands'), uncovered a vast system of kickbacks, known as Tangentopoli ('Bribesville'), through which businesses paid parties for public contracts. Within two years thousands of politicians and businessmen were investigated, the Christian Democrats and Socialists that had governed since the war collapsed, and former Socialist prime minister Bettino Craxi fled to Tunisia to avoid prison." },
        { type: "section", head: "The Second Republic", md:
          "Into the vacuum stepped Silvio Berlusconi, a media tycoon who founded a party, Forza Italia, and won the 1994 election. He dominated politics for two decades, repeatedly clashing with prosecutors he accused of political bias. Investigations continued into alleged negotiations between the state and the Mafia during the bombing season of 1992–93, a case that ended in acquittals on appeal. Matteo Messina Denaro, the last of the bombing-era bosses, was arrested in 2023 after 30 years in hiding." },
        { type: "compare", head: "Two views",
          left: { head: "A cleansing", md:
            "Brave judges broke the Mafia's code of silence and exposed a corrupt political class, showing the power of an independent judiciary." },
          right: { head: "Judges in politics", md:
            "Some argue that prosecutors became too powerful, destroying parties and careers, a grievance behind today's reforms of the judiciary." } },
        { type: "section", head: "Why it still matters", md:
          "Falcone and Borsellino are national heroes; Palermo's airport bears their names. Organised crime has shifted from bombs to business, with the 'Ndrangheta now among Europe's biggest cocaine traffickers. And the long battle between politicians and magistrates continues: the justice reform that Meloni's government put to a referendum in 2026 grew out of it." }
      ],
      takeaways: [
        "The Maxi Trial convicted 338 mafiosi; in 1992 the Mafia murdered judges Falcone and Borsellino.",
        "The 'Clean Hands' investigation exposed systemic bribery and destroyed the parties that had ruled since 1945.",
        "Berlusconi's rise and the long feud between politicians and judges followed."
      ],
      check: { q: "What was 'Clean Hands' (Mani Pulite)?",
        choices: ["An anti-Mafia law", "A corruption investigation that brought down Italy's governing parties in the 1990s", "A public health campaign"], answer: 1,
        explain: "Milan prosecutors uncovered a system of kickbacks, 'Tangentopoli', that implicated much of the political class." },
      sources: [
        { title: "Mafia", publisher: "Britannica", url: "https://www.britannica.com/topic/Mafia", date: "n.d." },
        { title: "Giovanni Falcone", publisher: "Britannica", url: "https://www.britannica.com/biography/Giovanni-Falcone", date: "n.d." },
        { title: "Matteo Messina Denaro: Italian mafia boss arrested in Sicily", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2023/1/16/italian-police-arrest-fugitive-mafia-boss-in-sicily", date: "2023-01-16" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "it-4", kind: "players", asOf: "2026-09-28",
      title: "Meloni's coalition and her rivals",
      dek: "Two deputy prime ministers competing for the right's voters, a centre-left still seeking a leader, and a general with a new party.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it/it-4-hero.webp",
          alt: "Illustration of a grand Roman palazzo housing the prime minister's office, with a colonnade and a guard at the door, at golden hour.",
          caption: "Palazzo Chigi in Rome, the seat of the Italian prime minister.",
          credit: "Illustration — not a photograph",
          prompt: "A grand ochre Roman palazzo facing a square with an ancient carved column, golden hour light, a ceremonial guard at a tall wooden door, a few pedestrians and a tram, warm and dignified, no legible text or flags." },
        { type: "people", head: "Six to know", items: [
          { name: "Giorgia Meloni", role: "Prime minister, since October 2022",
            img: "img/it/portrait-meloni.webp", source: "Official portrait (governo.it, CC BY 3.0 IT) via Wikimedia Commons; confirm the licence.",
            md: "A skilled communicator who has kept her coalition together, built good relations with both Brussels and Trump, and kept her party near 30% in polls. The March 2026 referendum defeat was her first serious setback." },
          { name: "Matteo Salvini", role: "Deputy PM and infrastructure minister; League leader",
            img: "img/it/portrait-salvini.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Once the dominant figure on the Italian right, he was overtaken by Meloni. His League competes with her for hardline voters and now faces a new rival in Vannacci's party." },
          { name: "Antonio Tajani", role: "Deputy PM and foreign minister; Forza Italia leader",
            img: "img/it/portrait-tajani.webp", source: "European Parliament official photo (CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "A former president of the European Parliament who leads Berlusconi's old party, the coalition's moderate, pro-European voice." },
          { name: "Elly Schlein", role: "Leader of the Democratic Party (PD)",
            img: "img/it/portrait-schlein.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Leader of the main centre-left opposition since 2023, pushing a more left-wing agenda on wages and health care, and trying to build a broad alliance for 2027." },
          { name: "Giuseppe Conte", role: "Leader of the Five Star Movement",
            img: "img/it/portrait-conte.webp", source: "Official portrait (governo.it) via Wikimedia Commons; confirm the licence.",
            md: "Prime minister from 2018 to 2021. His party is much smaller than in 2018 but still essential to any centre-left majority." },
          { name: "Roberto Vannacci", role: "Founder of National Future",
            img: "img/it/portrait-vannacci.webp", source: "European Parliament official photo (CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "A former army general and bestselling author of controversial views, elected to the European Parliament for the League in 2024. Broke away in February 2026 to launch his own hard-right party." }
        ] },
        { type: "section", head: "The coalition", md:
          "The three main parties of the right have governed together before, under Berlusconi, but never with Brothers of Italy in charge. They disagree on some issues: the League wants more autonomy for the rich northern regions, Forza Italia defends business and a pro-EU line, and all three compete for the same voters. But they share a strong incentive to stay together, because divided they would lose." },
        { type: "section", head: "The president", md:
          "Sergio Mattarella, a former constitutional judge from Sicily whose brother was murdered by the Mafia in 1980, was re-elected in 2022 when parties could not agree on a successor. He is Italy's most trusted politician, and his term runs to 2029, so he would oversee the formation of the next government after the 2027 election." },
        { type: "section", head: "The opposition", md:
          "The centre-left is split between the Democratic Party, the Five Star Movement, the Greens and Left alliance, and several small centrist parties. Together they poll within a few points of the right, but they have struggled to agree on a common leader or programme, and in 2022 their divisions handed the right its majority. Their unity is the main question for 2027." },
        { type: "section", head: "A new threat on the right", md:
          "Roberto Vannacci's National Future appeals to voters who find Meloni too moderate, particularly on immigration and the EU. Some polls since its launch in February 2026 have put it as high as 9%. Its first electoral test, a by-election in Calabria on 28 September 2026, went to the government's candidate, but it could still take enough votes to cost the right seats in 2027." }
      ],
      takeaways: [
        "Meloni governs with Salvini's League and Tajani's Forza Italia; both party leaders are deputy prime ministers.",
        "The centre-left opposition, led by the PD's Elly Schlein, is still seeking a common front for 2027.",
        "Roberto Vannacci's National Future, launched in February 2026, challenges Meloni from the right."
      ],
      check: { q: "Who launched the hard-right party National Future in February 2026?",
        choices: ["Matteo Salvini", "Roberto Vannacci", "Giuseppe Conte"], answer: 1,
        explain: "Roberto Vannacci, a former general elected to the European Parliament for the League, launched National Future as a rival on the right." },
      sources: [
        { title: "Italy's Meloni Passes By-Election Test Against New Far-Right Rival", publisher: "US News / Reuters", url: "https://www.usnews.com/news/world/articles/2026-09-28/italys-meloni-passes-by-election-test-against-new-far-right-rival", date: "2026-09-28" },
        { title: "Italy Election Polls", publisher: "PolitPro", url: "https://politpro.eu/en/italy", date: "2026-09" },
        { title: "Next Italian general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Next_Italian_general_election", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "it-5", kind: "story", asOf: "2026-09-28",
      title: "The referendum Meloni lost",
      dek: "In March 2026 Italians rejected a reform that would have split the careers of judges and prosecutors, handing Meloni her first big defeat.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it/it-5-hero.webp",
          alt: "Illustration of the steps and columns of a monumental Italian courthouse under a grey sky, with lawyers in dark robes climbing the steps.",
          caption: "The justice reform would have changed how Italy's judges and prosecutors are appointed and disciplined.",
          credit: "Illustration — not a photograph",
          prompt: "The monumental white stone steps and columns of an Italian palace of justice under a grey spring sky, a few lawyers in black robes climbing the steps seen from behind, statues on the roofline, stern and solemn, no legible text." },
        { type: "section", head: "What happened", md:
          "On 22–23 March 2026 Italians voted in a constitutional referendum on the government's justice reform. It would have separated the careers of judges and prosecutors, who in Italy belong to the same profession and can switch between roles, and split the body that governs them into two. The reform lost: 53.2% voted No and 46.8% Yes.\n\n" +
          "Meloni accepted the result, calling it 'a lost opportunity', and said she would not resign." },
        { type: "section", head: "Why the reform was proposed", md:
          "The Italian right has argued for decades that prosecutors are too powerful and too political, a view shaped by the many cases brought against Berlusconi. Separating the careers, supporters said, would make judges truly neutral between prosecution and defence, as in many other democracies. Because the reform changed the constitution and did not win two-thirds in parliament, it had to go to a confirmatory referendum, which needs no minimum turnout." },
        { type: "section", head: "Why it lost", md:
          "Judges' and prosecutors' associations campaigned hard against it, arguing it would put prosecutors under political control. The opposition parties, united for once, turned the vote into a verdict on Meloni's government. Some voters also punished the government for slow growth and rising living costs. Many analysts compared it to Matteo Renzi's lost referendum in 2016, which ended his government; Meloni avoided that fate by refusing to make it a vote on herself." },
        { type: "section", head: "How Italian justice works", md:
          "Italy's judges and prosecutors are recruited through the same exam and governed by one self-governing body, the Superior Council of the Magistracy, which handles appointments, promotions and discipline. That independence was designed to protect prosecutors from political pressure after Fascism. Trials are notoriously slow: civil cases can take years, a problem the EU's recovery fund has pushed Italy to fix." },
        { type: "compare", head: "Two readings of the vote",
          left: { head: "The government's view", md:
            "A narrow loss on a technical reform, not a verdict on the government. The coalition's support in polls is unchanged, and it will continue with its other reforms." },
          right: { head: "The opposition's view", md:
            "The first proof Meloni can be beaten nationwide, when the centre-left unites. It shows the government's plans to change the constitution lack popular support." } },
        { type: "section", head: "Why it matters", md:
          "The defeat punctured Meloni's image of invincibility and energised the opposition ahead of the 2027 election. It also makes her other constitutional plan, the *premierato*, harder. That reform would have the prime minister elected directly by voters, with a guaranteed majority in parliament. It passed the Senate in June 2024 but has stalled in the Chamber, and it too would probably need a referendum." },
        { type: "section", head: "What's next", md:
          "The government has shifted its focus from changing the constitution to changing the electoral law, which needs only ordinary majorities in parliament and no referendum, as the next-but-one briefing explains. Watch whether the centre-left can repeat its referendum unity in the general election." }
      ],
      takeaways: [
        "In March 2026 Italians rejected Meloni's justice reform by 53.2% to 46.8%.",
        "The reform would have separated the careers of judges and prosecutors.",
        "The defeat makes her plan for a directly elected prime minister, the premierato, harder to pass."
      ],
      check: { q: "What would the 2026 justice reform have changed?",
        choices: ["It would have abolished the Constitutional Court", "It would have separated the careers of judges and prosecutors", "It would have let the president appoint all judges"], answer: 1,
        explain: "In Italy judges and prosecutors belong to one profession. The reform would have split them into two, with separate governing bodies." },
      sources: [
        { title: "Italian voters reject Giorgia Meloni's judicial reform in referendum defeat", publisher: "France 24", url: "https://www.france24.com/en/europe/20260323-italian-voters-reject-giorgia-meloni-s-judicial-reform-in-referendum-defeat", date: "2026-03-23" },
        { title: "Meloni admits defeat as Italians reject judicial reform in major referendum", publisher: "Euronews", url: "https://www.euronews.com/my-europe/2026/03/23/meloni-admits-defeat-as-italians-reject-judicial-reform-in-major-referendum", date: "2026-03-23" },
        { title: "Italy's Meloni concedes referendum defeat, calling it 'a lost opportunity'", publisher: "Al Jazeera", url: "https://aljazeera.com/news/2026/3/23/italys-meloni-concedes-referendum-defeat-calling-it-a-lost-opportunity", date: "2026-03-23" },
        { title: "2026 Italian constitutional referendum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Italian_constitutional_referendum", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "it-6", kind: "story", asOf: "2026-09-28",
      title: "Stable, but stuck",
      dek: "Meloni has calmed the markets and kept the deficit in check, but Italy's economy barely grows and its young people keep leaving.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it/it-6-hero.webp",
          alt: "Illustration of a quiet southern Italian hill town at dawn, with a young person carrying a suitcase down a stone street toward a bus stop.",
          caption: "Italy's population is shrinking, and many young graduates move abroad for work.",
          credit: "Illustration — not a photograph",
          prompt: "A quiet southern Italian hill town at dawn, stone houses and a bell tower, a young person seen from behind wheeling a suitcase down a steep cobbled street toward a small bus stop, soft pink light, washing lines, bittersweet, no legible text." },
        { type: "section", head: "What happened", md:
          "When Meloni took office in 2022, many investors feared a spending spree. Instead her government has been cautious with money. The deficit, which hit 8% of GDP in 2022 partly because of generous building subsidies, has fallen sharply. The government's target for 2026 is 2.9% of GDP, just below the EU's 3% limit, which would allow Italy to leave the EU's [[excessive deficit procedure]]. Ratings agencies upgraded Italy in 2025, and the gap between Italian and German borrowing costs fell to its lowest in years." },
        { type: "facts", head: "By the numbers", rows: [
          ["Deficit target 2026", "2.9% of GDP, below the EU's 3% limit"],
          ["Public debt", "About 135–138% of GDP, among the highest in the world"],
          ["EU recovery fund", "Italy is the largest beneficiary, with nearly €200 billion"],
          ["Population", "About 59 million and falling"]
        ] },
        { type: "section", head: "The problem", md:
          "Italy's economy has barely grown in a quarter of a century. Real wages are roughly where they were in 1990, productivity is stagnant, and the population is ageing and shrinking: more people die than are born each year. Hundreds of thousands of young Italians, many with degrees, have moved abroad in the past decade. The south remains far poorer than the north, and public debt is so high that interest payments take a large share of tax revenue." },
        { type: "section", head: "The recovery fund", md:
          "Italy is the biggest recipient of the EU's post-pandemic recovery fund, with nearly €200 billion in grants and loans to spend on railways, broadband, green energy and reforms by the end of 2026. The deadline has put enormous pressure on ministries and local governments. When the money stops, growth may slow further." },
        { type: "compare", head: "Two views of Meloni's economics",
          left: { head: "Supporters", md:
            "She restored credibility with markets and Brussels, cut the deficit, and kept employment at record levels. Stability itself is an achievement in Italy." },
          right: { head: "Critics", md:
            "Prudence has come without reform. Wages stay low, the young leave, and the government has done little to raise productivity or fix the south." } },
        { type: "section", head: "Jobs and families", md:
          "There is good news too. Employment has reached record levels, and more women are working than ever, though still far fewer than in most EU countries. The government has offered bonuses and tax breaks to families with children to lift the birth rate, one of the lowest in the world. So far, births keep falling." },
        { type: "section", head: "Why it matters", md:
          "With debt this high, Italy's finances depend on market confidence. Any new crisis, from a jump in interest rates to a political shock, could quickly make its debt harder to service, with consequences for the whole euro area. And weak growth feeds the discontent that has kept Italian politics volatile for decades." },
        { type: "section", head: "What's next", md:
          "Watch the 2027 budget, due in parliament this autumn: it will be the last before the election, and the temptation to spend will be strong. Watch the final recovery-fund payments, and whether Italy formally leaves the excessive deficit procedure next year." }
      ],
      takeaways: [
        "Meloni's government has cut the deficit and targets 2.9% of GDP in 2026, below the EU limit.",
        "Italy's debt is among the world's highest, and its economy has barely grown in 25 years.",
        "It is the largest beneficiary of the EU recovery fund, which ends in 2026."
      ],
      check: { q: "Why does Italy want its 2026 deficit below 3% of GDP?",
        choices: ["To join the euro", "To leave the EU's excessive deficit procedure", "To qualify for NATO membership"], answer: 1,
        explain: "Getting below the 3% limit would let Italy exit the EU's excessive deficit procedure, which it entered in 2024." },
      sources: [
        { title: "Italy sticks with commitment to keep 2026 deficit below EU 3% of GDP ceiling", publisher: "Reuters via KFGO", url: "https://kfgo.com/2026/09/23/italy-sticks-with-commitment-to-keep-2026-deficit-below-eu-3-of-gdp-ceiling/", date: "2026-09-23" },
        { title: "Economic forecast for Italy", publisher: "European Commission", url: "https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages-including-country-reports/italy/economic-forecast-italy_en", date: "2026" },
        { title: "Economy of Italy", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Economy_of_Italy", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "it-7", kind: "story", asOf: "2026-09-28",
      title: "Changing the rules before the game",
      dek: "A year before the election, Meloni's majority is rewriting the electoral law, with a big bonus for whoever wins 42%.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it/it-7-hero.webp",
          alt: "Illustration of an Italian parliamentary chamber with curved wooden benches and a large electronic voting board lit with blank coloured lights.",
          caption: "The new electoral law has passed the Chamber and the Senate once each, and returns to the Chamber for a final vote.",
          credit: "Illustration — not a photograph",
          prompt: "An ornate Italian parliamentary chamber with curved dark wooden benches in a semicircle, a large illuminated voting board showing rows of blank green and red lights, art nouveau skylight above, members as small distant silhouettes, formal tension, no legible text or numbers." },
        { type: "section", head: "What happened", md:
          "Meloni's coalition is replacing the 2017 electoral law. The new system is proportional, but with a large 'governability bonus': whichever party or coalition wins at least 42% of the vote gets an extra 70 seats in the Chamber and 35 in the Senate, enough to guarantee a majority. Voters would also be able to pick preferred candidates, though each list's top name would still be chosen by party leaders. Coalitions need 10% to win seats, single parties 3%.\n\n" +
          "The Chamber approved the bill on 16 July 2026 by 217 votes to 152. The Senate passed an amended version on 15 September, by 113 to 71, sending it back to the Chamber for a final reading scheduled for late September." },
        { type: "facts", head: "The new rules", rows: [
          ["System", "Proportional, with a majority bonus"],
          ["Bonus", "+70 Chamber seats and +35 Senate seats"],
          ["Bonus threshold", "42% of the vote"],
          ["Thresholds", "10% for coalitions, 3% for single parties"],
          ["Votes so far", "Chamber 217–152 (July); Senate 113–71 (September)"]
        ] },
        { type: "section", head: "Why the government wants it", md:
          "The coalition says Italy needs stable governments that can last a full term, and that voters should know on election night who has won, rather than waiting for weeks of coalition deals. With the right polling in the low-to-mid 40s and the opposition divided, a 42% threshold also looks, to critics, well tailored to the government's own chances." },
        { type: "section", head: "What it could mean", md:
          "Under the current law, the right would likely win again but with a narrower majority. Under the new one, a coalition clearing 42% would be sure of a working majority in both chambers. That matters beyond ordinary laws: a large enough majority could pass constitutional changes such as the premierato, though a referendum could still be triggered." },
        { type: "compare", head: "Two views of the reform",
          left: { head: "The government", md:
            "The bonus ends the era of revolving-door governments, gives the winner a mandate to govern, and is similar to systems used in Italy's own regions and cities." },
          right: { head: "The opposition", md:
            "It is a power grab: a coalition winning less than half the votes would get a secure majority, possibly enough to change the constitution alone. Changing the rules a year before an election is unfair." } },
        { type: "section", head: "History echoes", md:
          "Italy has had majority bonuses before, and they are sensitive. The 1923 Acerbo Law gave two-thirds of seats to the list with a quarter of the vote and helped Mussolini consolidate power. Much more recently, the Constitutional Court struck down parts of the bonus systems in the 2005 and 2015 electoral laws. Opponents are likely to challenge this one in court as well." },
        { type: "section", head: "What's next", md:
          "If the Chamber approves the final text, the law will govern the 2027 election. Watch whether the Constitutional Court is asked to review it, and how the opposition responds: the reform gives the centre-left a strong incentive to unite in one coalition, since only a bloc near 42% can win the bonus." }
      ],
      takeaways: [
        "Meloni's majority is replacing the electoral law with a proportional system and a big majority bonus.",
        "A party or coalition winning 42% would get 70 extra Chamber seats and 35 extra Senate seats.",
        "The opposition calls it a power grab; the final Chamber vote was set for late September 2026."
      ],
      check: { q: "What share of the vote would a coalition need to win the new majority bonus?",
        choices: ["35%", "42%", "50%"], answer: 1,
        explain: "The bonus goes to the list or coalition that wins at least 42% of the vote, adding 70 Chamber and 35 Senate seats." },
      sources: [
        { title: "Italy's Senate approves controversial electoral reform bill", publisher: "The Local Italy", url: "https://www.thelocal.it/20260915/italys-senate-approves-controversial-electoral-reform-bill", date: "2026-09-15" },
        { title: "Italian Senate clears Meloni's electoral reform amid opposition resistance", publisher: "Internazionale / Reuters", url: "https://www.internazionale.it/ultime-notizie-reuters/2026/09/15/italian-senate-clears-meloni-s-electoral-reform-amid-opposition-resistance", date: "2026-09-15" },
        { title: "Italy is changing its electoral system (again)", publisher: "Fruits and Votes", url: "https://fruitsandvotes.wordpress.com/2026/07/27/italy-is-changing-its-electoral-system-again/", date: "2026-07-27" },
        { title: "Italy senate passes electoral reform bill amid backlash from opposition", publisher: "Wanted in Rome", url: "https://www.wantedinrome.com/news/italy-senate-passes-new-electoral-bill-amid-backlash-from-opposition.html", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "it-12", kind: "spotlight", asOf: "2026-09-28",
      title: "The Mediterranean crossing",
      dek: "For a decade Italy has been Europe's front door for migrants crossing the sea from Africa. How to handle them has made and broken governments.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it/it-12-hero.webp",
          alt: "Illustration of a small island harbour with fishing boats and a coast guard vessel at dawn, a lighthouse on the rocks and calm sea.",
          caption: "Lampedusa, an Italian island closer to Tunisia than to Sicily, where many migrant boats land.",
          credit: "Illustration — not a photograph",
          prompt: "A small island harbour at dawn with colourful fishing boats and a grey coast guard vessel moored, a white lighthouse on pale rocks, calm turquoise sea, soft pink light, quiet and poignant, no people close up, no legible text." },
        { type: "facts", head: "The crossing", rows: [
          ["Peak arrivals by sea", "About 181,000 in 2016"],
          ["Arrivals in 2023", "About 158,000"],
          ["Arrivals in 2024", "About 66,000"],
          ["Deaths in the central Mediterranean since 2014", "Over 20,000 recorded, per the UN's IOM"],
          ["Italy–Albania deal", "Processing centres in Albania, opened 2024"]
        ] },
        { type: "section", head: "Why Italy", md:
          "Italy's long coastline and southern islands lie a short sail from Libya and Tunisia, making the central Mediterranean one of the world's busiest and deadliest migration routes. Arrivals surged after the fall of Muammar Gaddafi in Libya in 2011, when smuggling networks flourished. Most people come from sub-Saharan Africa, North Africa and South Asia, fleeing war, poverty or persecution, and many hope to move on to northern Europe." },
        { type: "section", head: "Tragedies at sea", md:
          "In October 2013 a boat sank off Lampedusa, killing more than 360 people. Italy launched a large search-and-rescue mission, Mare Nostrum, which saved tens of thousands before it ended in 2014 over costs and claims that it encouraged crossings. Since then, charity rescue ships have filled much of the gap. The UN's migration agency has recorded more than 20,000 deaths and disappearances on the central Mediterranean route since 2014." },
        { type: "section", head: "Politics of the ports", md:
          "Under EU rules, migrants must usually seek asylum in the first country they reach, leaving Italy and Greece with most of the burden. Anger at other EU states helped Matteo Salvini's League rise; as interior minister in 2018–19 he closed ports to charity rescue ships, and was later tried for keeping 147 rescued migrants on a ship off Lampedusa, and acquitted in 2024. Italy has also paid and trained the Libyan coast guard to intercept boats, a policy that human rights groups say returns people to abuse in Libyan detention centres." },
        { type: "section", head: "Meloni's approach", md:
          "Giorgia Meloni came to power in 2022 promising to stop the boats. Her government restricted charity ships, struck deals with Tunisia and Libya, and in 2024 opened centres in Albania to process asylum claims offshore; Italian courts repeatedly blocked transfers there, and the centres were repurposed as holding facilities. Arrivals fell by more than half in 2024. Meloni also created legal work routes for hundreds of thousands of foreign workers, whom Italy's ageing economy needs." },
        { type: "compare", head: "Two views",
          left: { head: "Meloni and supporters", md:
            "Europe cannot let smugglers decide who enters. Deals with transit countries save lives by stopping dangerous crossings." },
          right: { head: "Critics and rights groups", md:
            "Outsourcing migration control to Libya and Tunisia funds abuse, and offshore centres undermine the right to asylum." } },
        { type: "section", head: "Why it matters", md:
          "Italy's policies, from the Albania model to deals with North African governments, have become a template that other EU governments are studying, and the EU's new migration pact, due to apply from 2026, reflects many of Rome's demands, including faster border procedures and returns of rejected applicants." }
      ],
      takeaways: [
        "Italy is the main landing point for migrants crossing the central Mediterranean, one of the world's deadliest routes.",
        "EU rules leave most responsibility with arrival countries, fuelling the rise of Salvini's League and Meloni's party.",
        "Meloni's deals with North Africa and offshore centres in Albania coincided with a sharp fall in arrivals."
      ],
      check: { q: "What did Italy's government set up in Albania in 2024?",
        choices: ["A military base", "Centres to process asylum claims offshore", "A new port"], answer: 1,
        explain: "The centres were meant to process some asylum seekers outside Italy; courts blocked many transfers." },
      sources: [
        { title: "Missing Migrants Project: Mediterranean", publisher: "International Organization for Migration", url: "https://missingmigrants.iom.int/region/mediterranean", date: "2026" },
        { title: "Italy – Mediterranean situation", publisher: "UNHCR Operational Data Portal", url: "https://data.unhcr.org/en/situations/mediterranean/location/5205", date: "2026" },
        { title: "Salvini acquitted in Open Arms case", publisher: "ANSA", url: "https://www.ansa.it/english/news/general_news/2024/12/21/salvini-acquitted-in-open-arms-case_7715b50e-1695-425e-93ad-b4262a7b7f85.html", date: "2024-12-21" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "it-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "A stable government heading into its final year, a new electoral law, and an opposition that must unite to win.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it/it-8-hero.webp",
          alt: "Illustration of a Mediterranean harbour at sunset with fishing boats, a lighthouse and a coast guard vessel on the horizon.",
          caption: "Migration across the Mediterranean remains one of Italy's defining political issues.",
          credit: "Illustration — not a photograph",
          prompt: "A small Mediterranean harbour at sunset, colourful wooden fishing boats moored, a white lighthouse on the breakwater, a grey coast guard vessel far out on the horizon, warm orange sky over calm sea, peaceful but watchful, no people close up, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Meloni's coalition is intact after nearly four years, and her party still polls near 30%.\n" +
          "- **Setback:** the March 2026 referendum defeat on justice reform.\n" +
          "- **Rules:** a new electoral law with a 42% majority bonus awaits final approval.\n" +
          "- **Rivals:** the centre-left, if united, polls within a few points of the right; Vannacci's new party competes on the far right.\n" +
          "- **Economy:** a 2026 deficit target of 2.9%, slow growth and a shrinking population." },
        { type: "section", head: "Migration", md:
          "Meloni promised to stop irregular arrivals by sea. Numbers fell sharply after a peak in 2023, helped by deals with Tunisia and Libya that critics say come at a heavy human-rights cost. Her flagship plan to process asylum seekers in centres built in Albania was repeatedly blocked by Italian courts and repurposed. Other European governments now watch Italy's approach closely, and some want to copy it." },
        { type: "section", head: "Italy in the world", md:
          "Meloni has positioned Italy as a bridge between Europe and Trump's [[unit:us|United States]], while staying firmly in support of [[unit:ua|Ukraine]]. Italy left [[unit:cn|China's]] Belt and Road Initiative in 2023. It is also a Mediterranean power with interests in Libya, Tunisia and the Middle East, and its energy company ENI is a major player across Africa. Italy has raised defence spending under NATO pressure, though from a lower base than most allies, and it hosts important US and NATO bases, from Sicily to the Veneto." },
        { type: "section", head: "What voters want", md:
          "Surveys suggest Italians' top concerns are the cost of living and low wages, health care waiting lists, jobs and migration. Trust in parties is low, and turnout has been falling: just 64% voted in 2022, a record low. Whoever mobilises disillusioned voters, especially in the south, could decide the 2027 election." },
        { type: "section", head: "Meloni's balancing act", md:
          "Meloni must keep hardline voters, who are tempted by Vannacci, while keeping the moderate image that has won her respect in Brussels and with markets. Her final budget before the election, the electoral law and her handling of migration are all shaped by that balance." },
        { type: "section", head: "Three scenarios", md:
          "- **Meloni wins again.** The right clears 42%, takes the bonus and governs with a secure majority, possibly reviving the premierato.\n" +
          "- **A united left wins.** The PD, Five Star and allies form one coalition and beat the right, as they did in the referendum.\n" +
          "- **No clear winner.** Nobody reaches 42%, and Italy returns to post-election coalition bargaining, and perhaps another technocrat." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Late September 2026:** the Chamber's final vote on the electoral law\n" +
          "- **Autumn 2026:** the 2027 budget, the last before the election\n" +
          "- **Spring 2027:** confirmation of Italy's exit from the excessive deficit procedure, if the target is met\n" +
          "- **By late 2027:** the general election" },
        { type: "section", head: "Connections", md:
          "Italy's story runs through [[unit:fr]] and [[unit:de]] (EU budget rules and migration), [[unit:us]] (Meloni's ties with Trump), [[unit:ua]] (support for Kyiv), [[unit:tr]] (Libya and the Mediterranean) and [[unit:cn]] (the Belt and Road exit)." }
      ],
      takeaways: [
        "Meloni's government is stable but lost the March 2026 referendum.",
        "A new electoral law with a 42% majority bonus will shape the 2027 election.",
        "Migration, slow growth and debt remain Italy's defining issues."
      ],
      check: { q: "What happened to Italy's plan to process asylum seekers in Albania?",
        choices: ["It was copied by the whole EU", "Italian courts repeatedly blocked it, and the centres were repurposed", "Albania cancelled the deal"], answer: 1,
        explain: "Italian courts blocked the transfer of asylum seekers to the Albanian centres several times, and the government repurposed them as return centres." },
      sources: [
        { title: "Can Meloni's Stability Record Survive Italy's 2027 Election?", publisher: "Modern Diplomacy", url: "https://moderndiplomacy.eu/2026/08/31/can-melonis-stability-record-survive-italys-2027-election/", date: "2026-08-31" },
        { title: "Italy's Meloni Passes By-Election Test Against New Far-Right Rival", publisher: "US News / Reuters", url: "https://www.usnews.com/news/world/articles/2026-09-28/italys-meloni-passes-by-election-test-against-new-far-right-rival", date: "2026-09-28" },
        { title: "Italy's Senate approves controversial electoral reform bill", publisher: "The Local Italy", url: "https://www.thelocal.it/20260915/italys-senate-approves-controversial-electoral-reform-bill", date: "2026-09-15" }
      ]
    }
  ]
});
