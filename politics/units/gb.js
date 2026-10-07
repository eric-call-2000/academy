/* ============================================================
   Unit 7 — United Kingdom 🇬🇧
   Research note and sources: tools/research/gb.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("gb", {
  id: "gb",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "gb-1", kind: "snapshot", asOf: "2026-09-28",
      title: "The United Kingdom in brief",
      dek: "A nuclear power with a permanent UN Security Council seat, a new prime minister, and a party system breaking apart.",
      blocks: [
        { type: "map", src: "maps/gb.svg",
          alt: "Locator map of north-western Europe with the United Kingdom highlighted: Great Britain and Northern Ireland, beside Ireland and across the Channel from France, with a small globe showing its place in the world.",
          caption: "The United Kingdom: England, Scotland, Wales and Northern Ireland.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "London"],
          ["People", "About 69 million"],
          ["Nations", "England, Scotland, Wales and Northern Ireland"],
          ["System", "Parliamentary democracy under a constitutional monarchy"],
          ["Head of state", "King Charles III"],
          ["Prime minister", "Andy Burnham (Labour), since 20 July 2026"],
          ["Next general election", "Due by August 2029"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "The UK is one of the five permanent members of the UN Security Council and one of two nuclear powers in Western Europe, along with [[unit:fr|France]]. It has the world's sixth-largest economy, and London is one of the two great global financial centres. Its armed forces, intelligence services and diplomatic network are among the most capable in the world, and it has been a leading supporter of [[unit:ua]].\n\n" +
          "Since leaving the European Union in 2020, Britain has been working out a new place in the world: close to [[unit:us|the United States]], rebuilding ties with Europe, and trading more widely." },
        { type: "section", head: "Who holds power", md:
          "Andy Burnham, a former health secretary and for nine years the mayor of Greater Manchester, became prime minister in July 2026 after Keir Starmer resigned. He leads a Labour government that won a large majority of seats in July 2024. His chancellor, who runs the Treasury, is John Healey, the former defence secretary.\n\n" +
          "The official opposition is the Conservative Party under Kemi Badenoch. But the most dramatic change of recent years is the rise of Nigel Farage's Reform UK, the Greens and nationalist parties in Scotland and Wales, which have broken the old two-party system." },
        { type: "section", head: "The mood in 2026", md:
          "Britain has been through a decade of turmoil: the Brexit referendum, a pandemic, an energy-price shock and five changes of prime minister since 2016. Growth has been slow, public services strained and household incomes squeezed. Voters punished the Conservatives heavily in 2024, then turned on Labour within two years. In May 2026 local and devolved elections, Labour suffered historic losses, which led to Starmer's fall." },
        { type: "section", head: "Four nations, one state", md:
          "The UK is a union of four nations. England has about 84% of the people and no parliament of its own, while Scotland, Wales and Northern Ireland have their own governments. Tensions over that balance run through British politics: Scotland voted against independence in 2014, but the SNP still wants another vote, and Brexit reopened old questions about the border on the island of Ireland." },
        { type: "section", head: "What Britain wants", md:
          "Burnham's government promises to rebuild British industry, build council homes, reform how the state works and hand more power to regions. Abroad, the UK wants to keep [[NATO]] strong and the US engaged in Europe, deepen defence and trade ties with the EU without rejoining it, and help secure a durable peace for Ukraine." },
        { type: "callout", tone: "why", md:
          "Britain is a test case for a question facing many democracies: can a mainstream party win back voters who have lost faith in it, before an insurgent party of the populist right takes over?" }
      ],
      takeaways: [
        "The UK is a nuclear power, a permanent UN Security Council member and a leading backer of Ukraine.",
        "Andy Burnham became prime minister in July 2026 after Keir Starmer resigned.",
        "Reform UK, the Greens and the nationalist parties have broken Britain's old two-party system."
      ],
      check: { q: "Who became UK prime minister in July 2026?",
        choices: ["Kemi Badenoch", "Andy Burnham", "Wes Streeting"], answer: 1,
        explain: "Andy Burnham won the Labour leadership after Keir Starmer resigned, and became prime minister on 20 July 2026." },
      sources: [
        { title: "Premiership of Andy Burnham", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Premiership_of_Andy_Burnham", date: "2026-09" },
        { title: "Keir Starmer resignation, UK to get sixth PM in seven years", publisher: "CNN", url: "https://www.cnn.com/2026/06/22/world/live-news/keir-starmer-uk-pm", date: "2026-06-22" },
        { title: "Local Elections 2026: Results show Reform surge and Labour losses", publisher: "LocalGov", url: "https://www.localgov.co.uk/Local-Elections-2026-Results-show-Reform-surge-and-Labour-losses/64328", date: "2026-05" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "gb-2", kind: "power", asOf: "2026-09-28",
      title: "Parliament is sovereign",
      dek: "No written constitution, a winner-takes-all voting system, and a prime minister whom the party, not the people, can replace.",
      blocks: [
        { type: "diagram", src: "img/gb/gb-2-power.svg",
          alt: "Diagram of power in the UK. Voters elect 650 MPs in constituencies by first past the post. The House of Commons makes laws and controls taxes, and its majority decides who governs. The prime minister and cabinet, led by Andy Burnham, come from the largest party and can be replaced by that party. Power is shared with devolved governments in Scotland, Wales and Northern Ireland. The unelected House of Lords and the courts scrutinise. The monarch, King Charles III, is head of state but acts on ministers' advice.",
          caption: "Power runs through the House of Commons: whoever commands a majority there governs.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "An unwritten constitution", md:
          "The UK has no single written constitution. Its rules come from laws passed over centuries, court rulings and conventions that everyone agrees to follow. The core principle is that Parliament is sovereign: it can make or unmake any law, and no court can strike down an act of Parliament. That makes the system flexible, and it also means a government with a big majority can do a great deal." },
        { type: "section", head: "First past the post", md:
          "Britain elects the House of Commons by [[first past the post]]: each of the 650 constituencies elects one MP, and whoever gets the most votes wins, even without a majority. The system usually turns a modest lead in votes into a big lead in seats. In 2024 Labour won 411 seats, nearly two-thirds, with just 33.7% of the vote, while Reform UK won 14.3% of the vote but only 5 seats.\n\n" +
          "Now that the vote is split between five or six sizeable parties, the system has become very unpredictable: a party on 25% could win a landslide or be crushed, depending on how the others' votes fall." },
        { type: "section", head: "Prime minister and party", md:
          "Voters don't elect the prime minister directly. The monarch appoints whoever can command a majority in the Commons, which in practice means the leader of the largest party. That party can change its leader, and so the prime minister, without a general election. This has happened often: Theresa May, Boris Johnson, Liz Truss, Rishi Sunak and Andy Burnham all took office between elections. Critics call it undemocratic; defenders reply that voters choose a party and its programme, not a president." },
        { type: "section", head: "Devolution", md:
          "Since 1999, Scotland, Wales and Northern Ireland have had their own parliaments and governments, which run health, schools and much else. This is [[devolution]]: power lent from Westminster, which could in theory take it back. The devolved bodies are elected by proportional systems, so smaller parties do better there. Northern Ireland's government must be shared between unionists, who want to stay in the UK, and nationalists, who want to join Ireland, under the 1998 Good Friday Agreement." },
        { type: "section", head: "The checks", md:
          "The House of Lords, a largely appointed second chamber, can revise and delay bills but not block them for long. Judges can rule that ministers have acted unlawfully, as the Supreme Court did in 2019 when Boris Johnson suspended Parliament. The monarch signs every law but, by convention, never refuses. The strongest check is political: backbench MPs can rebel, and a party can remove a leader it thinks will lose, which is what happened to Starmer." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Its defenders", md:
            "First past the post gives clear results and strong governments, keeps extremists from holding the balance of power, and ties each MP to a local area." },
          right: { head: "Its critics", md:
            "It wastes millions of votes, gives huge majorities to parties most people didn't vote for, and now, with votes split many ways, turns elections into a lottery." } }
      ],
      takeaways: [
        "The UK has no single written constitution; Parliament is sovereign and can make or unmake any law.",
        "First past the post gave Labour 411 seats on 33.7% of the vote in 2024.",
        "A governing party can replace the prime minister without an election, as Labour did in 2026."
      ],
      check: { q: "How many seats did Reform UK win in 2024 with 14.3% of the vote?",
        choices: ["5", "50", "92"], answer: 0,
        explain: "Reform won just 5 seats, because its votes were spread thinly across the country. Under first past the post, only winning a constituency counts." },
      sources: [
        { title: "Next United Kingdom general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Next_United_Kingdom_general_election", date: "2026-09" },
        { title: "How do Labour Party leadership contests work?", publisher: "Institute for Government", url: "https://www.instituteforgovernment.org.uk/explainer/labour-party-leadership-contests", date: "2026" },
        { title: "Welsh elections 2026: Senedd Cymru (Welsh parliament)", publisher: "Institute for Government", url: "https://www.instituteforgovernment.org.uk/explainer/senedd-cymru-welsh-parliament", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "gb-9", kind: "founding", asOf: "2026-09-28",
      title: "Making the United Kingdom",
      dek: "England absorbed Wales, joined with Scotland in 1707 and with Ireland in 1801, then lost most of Ireland in 1922. The union has never stopped evolving.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb/gb-9-hero.webp",
          alt: "Illustration of a medieval stone castle on a rock above a city of old grey tenements and spires, under a moody sky.",
          caption: "Edinburgh Castle. Scotland kept its own law, church and schools after the 1707 union with England.",
          credit: "Illustration — not a photograph",
          prompt: "A medieval stone castle on top of a steep volcanic rock above an old city of tall grey stone tenements and church spires, dramatic moody sky with a shaft of sunlight, historic and proud, no people close up, no flags, no legible text." },
        { type: "timeline", head: "How the union was built", items: [
          ["1284–1542", "England conquers and annexes Wales"],
          ["1603", "Union of the Crowns: James VI of Scotland becomes James I of England"],
          ["1689", "Bill of Rights after the 'Glorious Revolution'"],
          ["1707", "Acts of Union create Great Britain"],
          ["1801", "Union with Ireland creates the United Kingdom"],
          ["1922", "Most of Ireland leaves; Northern Ireland stays"],
          ["1999", "Devolved parliaments for Scotland and Wales"]
        ] },
        { type: "section", head: "England and Wales", md:
          "The Kingdom of England took shape before the Norman Conquest of 1066. Edward I conquered Wales in the 1280s, and Henry VIII's Laws in Wales Acts of 1535–42 formally annexed it, imposing English law and administration. Wales kept its language, spoken today by nearly a third of its people, and a strong identity, but for centuries its politics were England's." },
        { type: "section", head: "Crown and Parliament", md:
          "England's defining political struggle was between monarch and Parliament. It ran from Magna Carta in 1215, which first limited royal power, to the civil wars of the 1640s, when Parliament executed King Charles I and briefly abolished the monarchy. After the 'Glorious Revolution' of 1688, Parliament invited William and Mary to take the throne on its terms, and the 1689 Bill of Rights established that the monarch could not tax, keep an army or suspend laws without Parliament. The principle of parliamentary sovereignty dates from here." },
        { type: "section", head: "Scotland joins", md:
          "Scotland was an independent kingdom that shared a monarch with England from 1603. Its parliament agreed to a full union in 1707, partly because of financial ruin after a failed colonial venture in Panama, the Darien scheme, and partly under English pressure; the poet Robert Burns later wrote that Scotland was 'bought and sold for English gold'. The Acts of Union created the Kingdom of Great Britain with one parliament at Westminster, but Scotland kept its own legal system, church and schools." },
        { type: "section", head: "Ireland in and out", md:
          "England had ruled Ireland in varying degrees since the 12th century, and Protestant settlers were planted in Ulster in the 1600s. After a rebellion in 1798, the Act of Union of 1801 abolished Dublin's parliament and created the United Kingdom of Great Britain and Ireland. Catholic grievances, the famine of the 1840s, which killed about a million people, and a century of campaigns for home rule led to the Easter Rising of 1916 and a war of independence. In 1922 the Irish Free State left, while six mostly Protestant counties of Ulster remained as Northern Ireland." },
        { type: "compare", head: "Two views of the union",
          left: { head: "Unionists", md:
            "A partnership that pooled resources, created one of the world's most successful states and allowed distinct nations to flourish together." },
          right: { head: "Nationalists", md:
            "A union built by conquest, pressure and English dominance, in which smaller nations are routinely outvoted." } },
        { type: "section", head: "Why it still matters", md:
          "The UK has no single written constitution; its arrangements have grown piece by piece, most recently with the devolved parliaments of 1999. That flexibility lets the union change without revolution, but it also means its future is always open: Scotland's independence movement ([[lesson:gb-12]]) and the question of Irish unity ([[lesson:gb-11]]) are live debates." }
      ],
      takeaways: [
        "England annexed Wales in the 16th century and joined with Scotland in 1707 to form Great Britain.",
        "Parliament's victory over the monarchy, sealed in 1689, is the root of parliamentary sovereignty.",
        "Ireland joined the union in 1801; most of it left in 1922, leaving Northern Ireland in the UK."
      ],
      check: { q: "What did the Acts of Union of 1707 do?",
        choices: ["Joined Ireland to Britain", "Joined England and Scotland into Great Britain with one parliament", "Abolished the monarchy"], answer: 1,
        explain: "The 1707 Acts created the Kingdom of Great Britain; Ireland was added in 1801 to form the United Kingdom." },
      sources: [
        { title: "Act of Union (1707)", publisher: "Britannica", url: "https://www.britannica.com/event/Act-of-Union-Great-Britain-1707", date: "n.d." },
        { title: "United Kingdom: History", publisher: "Britannica", url: "https://www.britannica.com/place/United-Kingdom/History", date: "n.d." },
        { title: "Bill of Rights 1689", publisher: "UK Parliament", url: "https://www.parliament.uk/about/living-heritage/evolutionofparliament/parliamentaryauthority/revolution/collections1/collections-glorious-revolution/billofrights/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "gb-3", kind: "history", asOf: "2026-09-28",
      title: "Empire, Europe, Brexit",
      dek: "How a former imperial power joined Europe, left it, and has been searching for its place ever since.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb/gb-3-hero.webp",
          alt: "Illustration of white chalk cliffs above a grey sea, with a ferry heading out toward a misty horizon.",
          caption: "The 2016 referendum decided that Britain would leave the European Union; it left in January 2020.",
          credit: "Illustration — not a photograph",
          prompt: "Tall white chalk cliffs above a grey-green sea, a single ferry sailing out toward a misty horizon, seagulls, a dramatic sky with sun breaking through clouds, a sense of departure, no people close up, no flags or legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1945–60s", "Empire gives way to independence for most colonies"],
          ["1973", "Britain joins the European Economic Community"],
          ["1979–90", "Margaret Thatcher remakes the economy"],
          ["1997–2010", "New Labour: Blair and Brown; devolution; the Iraq war"],
          ["2016", "The Brexit referendum: 52% vote Leave"],
          ["2020", "The UK leaves the EU"],
          ["2024", "Labour landslide under Keir Starmer"]
        ] },
        { type: "section", head: "1. From empire to Europe", md:
          "In 1945 Britain was a victorious but exhausted power ruling a quarter of the world's people. Within two decades most of its empire had become independent, starting with [[unit:in|India]] in 1947. Looking for a new role, Britain became America's closest ally, a founder of [[NATO]] and a nuclear power, and in 1973 it joined the European Economic Community, the forerunner of the EU." },
        { type: "section", head: "2. Thatcher and Blair", md:
          "Margaret Thatcher, prime minister from 1979 to 1990, broke the power of the trade unions, privatised state industries and made London a global financial hub. Her reforms divided the country: former industrial towns in the north and Wales never fully recovered. Tony Blair's New Labour won three elections from 1997, spent heavily on schools and hospitals, created the Scottish and Welsh parliaments and helped bring peace to Northern Ireland, but his support for the 2003 invasion of Iraq left lasting damage to trust." },
        { type: "section", head: "3. Crash and austerity", md:
          "The 2008 financial crisis hit Britain's bank-heavy economy hard. From 2010 the Conservatives, first in coalition with the Liberal Democrats, cut public spending sharply to reduce borrowing. Wages barely grew for a decade. In 2014 Scotland voted 55% to 45% to stay in the UK, but the nationalist SNP went on to dominate Scottish politics." },
        { type: "section", head: "4. Brexit (2016–2020)", md:
          "David Cameron called a referendum on EU membership to settle a long Conservative feud, and on 23 June 2016, 52% voted to leave. Leave won across most of England and Wales outside the big cities; Scotland, Northern Ireland and London voted Remain. Three years of deadlock followed, until Boris Johnson won an 80-seat majority in 2019 on a promise to 'Get Brexit done'. The UK left on 31 January 2020." },
        { type: "section", head: "What Brexit changed", md:
          "Leaving the EU ended free movement of people and put new checks on trade with Britain's biggest market. Official forecasters estimate it will leave the economy several percent smaller in the long run than it would otherwise have been. Northern Ireland stayed inside parts of the EU's rules to avoid a hard border with Ireland, a compromise revised in the 2023 Windsor Framework. Immigration did not fall: arrivals from outside the EU rose sharply, which fed the anger Reform later channelled." },
        { type: "section", head: "5. Turmoil (2020–2024)", md:
          "Johnson was forced out in 2022 after scandals, including parties in Downing Street during lockdown. Liz Truss lasted 49 days: her unfunded tax cuts sent borrowing costs soaring and the pound tumbling. Rishi Sunak steadied the markets but not the polls. On 4 July 2024 Keir Starmer's Labour won a landslide, and the Conservatives fell to 121 seats, their worst result ever." }
      ],
      takeaways: [
        "Britain gave up its empire after 1945, allied closely with the US and joined the European project in 1973.",
        "In 2016, 52% voted to leave the EU; the UK left in January 2020 after three years of deadlock.",
        "Scandals and the Truss market crisis ended 14 years of Conservative rule with Labour's 2024 landslide."
      ],
      check: { q: "What share of voters chose to leave the EU in the 2016 referendum?",
        choices: ["48%", "52%", "62%"], answer: 1,
        explain: "Leave won by 52% to 48%. Scotland, Northern Ireland and London voted to remain." },
      sources: [
        { title: "United Kingdom profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/uk-18028620", date: "n.d." },
        { title: "Premiership of Keir Starmer", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Premiership_of_Keir_Starmer", date: "2026" },
        { title: "Keir Starmer: Resignation, Biography", publisher: "Britannica", url: "https://www.britannica.com/biography/Keir-Starmer", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "gb-10", kind: "past", asOf: "2026-09-28",
      title: "Thatcher and the miners",
      dek: "In the 1980s Margaret Thatcher broke the unions, sold state industries and remade Britain's economy. The country still divides over her legacy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb/gb-10-hero.webp",
          alt: "Illustration of a coal mine's winding tower silhouetted against a grey sky above rows of terraced houses in a valley.",
          caption: "Mining towns were at the centre of the 1984–85 strike.",
          credit: "Illustration — not a photograph",
          prompt: "A tall iron colliery winding tower silhouetted against a heavy grey sky above rows of brick terraced houses climbing a valley side, chimney smoke, damp and working-class, no people close up, no legible text." },
        { type: "facts", head: "The Thatcher years", rows: [
          ["Prime minister", "1979–1990, the longest continuous term of the 20th century"],
          ["Miners' strike", "March 1984 – March 1985"],
          ["Union membership", "About 13 million in 1979; about 10 million by 1990"],
          ["Privatised", "British Telecom, British Gas, British Airways, water, electricity and more"],
          ["Council homes sold", "Over 1 million under 'Right to Buy' by 1990"]
        ] },
        { type: "section", head: "The 'sick man of Europe'", md:
          "By the 1970s Britain was struggling with high inflation, weak growth and frequent strikes. In the 'Winter of Discontent' of 1978–79, public-sector strikes left rubbish uncollected and, in some places, the dead unburied. Margaret Thatcher, a grocer's daughter who led the Conservatives, won the 1979 election promising to restore order, curb the unions and roll back the state. She became Britain's first woman prime minister." },
        { type: "section", head: "Monetarism and the Falklands", md:
          "Her government raised interest rates to squeeze inflation, and unemployment rose above three million, the highest since the 1930s, as old industries closed. Riots broke out in cities in 1981. Her fortunes were transformed in 1982, when she sent a task force to retake the Falkland Islands after Argentina invaded (see [[unit:ar]]), and she won a landslide in 1983." },
        { type: "section", head: "The miners' strike", md:
          "In March 1984 the National Coal Board announced pit closures, and the National Union of Mineworkers, led by Arthur Scargill, went on strike without a national ballot, which split the union. The government had stockpiled coal and was determined to win. The year-long strike brought violent clashes between pickets and police, most famously at Orgreave in South Yorkshire, and deep hardship in mining communities. The miners returned to work in March 1985, defeated. Most pits closed within a decade, and many mining towns have never recovered. Campaigners still seek an inquiry into policing at Orgreave." },
        { type: "section", head: "Remaking the economy", md:
          "Thatcher's governments passed laws requiring secret ballots before strikes and limiting picketing. They privatised state-owned companies, from British Telecom to gas, water and electricity, and sold more than a million council houses to their tenants. The 'Big Bang' of 1986 deregulated the City of London, which boomed. Critics point to soaring inequality and the destruction of industrial communities, especially in the north, Scotland and Wales." },
        { type: "compare", head: "Two verdicts",
          left: { head: "Admirers", md:
            "She rescued a declining country, tamed inflation and the unions, spread home and share ownership, and helped win the Cold War." },
          right: { head: "Critics", md:
            "She destroyed industries and communities, widened inequality and left regions that still vote against the Conservatives decades later." } },
        { type: "section", head: "Her fall and legacy", md:
          "Thatcher fell in 1990 after a revolt by her own MPs over a hugely unpopular 'poll tax' and her growing hostility to European integration. Labour's Tony Blair kept most of her reforms. Her Euroscepticism shaped the road to Brexit, and the lost industries of the 'red wall' towns explain much of their later swing to Brexit and to Reform UK." }
      ],
      takeaways: [
        "Margaret Thatcher (1979–90) curbed the unions, privatised state industries and deregulated the City.",
        "The miners' strike of 1984–85 ended in defeat for the union, and most pits closed.",
        "Her legacy still divides Britain, especially in former industrial regions."
      ],
      check: { q: "What was 'Right to Buy'?",
        choices: ["A shares scheme", "A policy letting council tenants buy their homes", "A trade deal"], answer: 1,
        explain: "Over a million council homes were sold to tenants during the 1980s, a flagship Thatcher policy." },
      sources: [
        { title: "Margaret Thatcher", publisher: "Britannica", url: "https://www.britannica.com/biography/Margaret-Thatcher", date: "n.d." },
        { title: "On 40th anniversary of UK miners' strike, can Labour win back the north?", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2024/3/8/on-40th-anniversary-of-uk-miners-strike-can-labour-win-back-the-north", date: "2024-03-08" },
        { title: "Margaret Thatcher", publisher: "Margaret Thatcher Foundation", url: "https://www.margaretthatcher.org/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "gb-11", kind: "past", asOf: "2026-09-28",
      title: "The Troubles",
      dek: "For three decades Northern Ireland was torn by violence between those who wanted to stay British and those who wanted a united Ireland. The 1998 peace deal still holds.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb/gb-11-hero.webp",
          alt: "Illustration of a tall wall of corrugated steel and brick separating two rows of terraced houses in a city, under a grey sky.",
          caption: "'Peace walls' still separate some Catholic and Protestant neighbourhoods in Belfast.",
          credit: "Illustration — not a photograph",
          prompt: "A tall wall of brick topped with high steel mesh fencing running between two rows of red-brick terraced houses in a city, a grey sky, a gate in the wall, quiet and divided, no people, no flags, no murals, no legible text." },
        { type: "facts", head: "The Troubles", rows: [
          ["Years", "Late 1960s to 1998"],
          ["Deaths", "About 3,500"],
          ["Bloody Sunday", "30 January 1972; 13 killed on the day, another died later"],
          ["Good Friday Agreement", "10 April 1998"],
          ["Approved by referendum", "71% in Northern Ireland, 94% in the Republic"]
        ] },
        { type: "section", head: "A divided province", md:
          "Northern Ireland was created in 1921 with a Protestant, unionist majority that wanted to remain British and a Catholic, nationalist minority that mostly wanted a united Ireland. For decades unionists ran it as a one-party state; Catholics faced discrimination in housing, jobs and voting, with electoral boundaries drawn to favour unionists. Inspired by the US civil rights movement, Catholics began marching for equal rights in 1968, and some marches were attacked by loyalists and the police." },
        { type: "section", head: "Descent into violence", md:
          "In 1969 rioting broke out in Derry and Belfast, and the British army was sent in, at first welcomed by many Catholics as protectors. A revived Provisional IRA launched an armed campaign to force Britain out, while loyalist paramilitaries such as the UVF and UDA targeted Catholics. On Bloody Sunday, 30 January 1972, British soldiers shot dead 13 unarmed civil rights marchers in Derry, and another died later, a turning point that drove recruits to the IRA. Britain imposed direct rule from London that year." },
        { type: "section", head: "Thirty years of conflict", md:
          "About 3,500 people were killed, more than half of them civilians. The IRA bombed pubs, shops and cities in England as well as Northern Ireland, and in 1984 almost killed Margaret Thatcher in a hotel bombing in Brighton. Loyalists carried out sectarian murders, and some members of the security forces colluded with them. Internment without trial and the deaths of ten republican hunger strikers in 1981, including Bobby Sands, who was elected an MP while starving, deepened the divide." },
        { type: "section", head: "The peace process", md:
          "Secret talks led to ceasefires in 1994. On Good Friday, 10 April 1998, the British and Irish governments and most parties signed an agreement: Northern Ireland would stay in the UK as long as a majority wished, with the possibility of a referendum on Irish unity; a devolved government would share power between unionists and nationalists; paramilitary prisoners would be released; and the Republic dropped its constitutional claim to the North. Voters on both sides of the border approved it. The IRA completed its disarmament in 2005." },
        { type: "compare", head: "Two perspectives",
          left: { head: "Unionists", md:
            "Northern Ireland is British by the consent of its majority. Republican violence was terrorism, and it failed." },
          right: { head: "Nationalists", md:
            "Partition and discrimination caused the conflict, and a peaceful, democratic route to Irish unity is now open." } },
        { type: "section", head: "Why it still matters", md:
          "The power-sharing government has collapsed several times, most recently in 2022–24 over post-Brexit trade rules, since the peace deal depends on an open border with the Republic. In 2024 Sinn Féin's Michelle O'Neill became the first nationalist first minister. Demographic change has made Catholics the largest group, and debate about a future referendum on Irish unity is growing, while a 2023 law limiting prosecutions for Troubles-era killings angered victims' families." }
      ],
      takeaways: [
        "Discrimination against Catholics in Northern Ireland led to civil rights marches and, from 1969, three decades of violence.",
        "About 3,500 people died in the Troubles, including 14 after Bloody Sunday in 1972.",
        "The 1998 Good Friday Agreement created power-sharing and still underpins peace."
      ],
      check: { q: "What did the Good Friday Agreement say about Northern Ireland's future?",
        choices: ["It would join Ireland immediately", "It stays in the UK as long as a majority wishes, with a possible referendum on unity", "It becomes independent"], answer: 1,
        explain: "The principle of consent keeps Northern Ireland in the UK unless a majority votes for a united Ireland." },
      sources: [
        { title: "The Troubles", publisher: "Britannica", url: "https://www.britannica.com/event/The-Troubles-Northern-Ireland-history", date: "n.d." },
        { title: "The Belfast Agreement", publisher: "UK Government", url: "https://www.gov.uk/government/publications/the-belfast-agreement", date: "1998" },
        { title: "Bloody Sunday Inquiry report", publisher: "UK Government", url: "https://www.gov.uk/government/publications/report-of-the-bloody-sunday-inquiry", date: "2010-06-15" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "gb-4", kind: "players", asOf: "2026-09-28",
      title: "Burnham, Farage, Badenoch and the rest",
      dek: "A new prime minister riding a honeymoon, a populist whose surge has stalled, and a Conservative party fighting for second place.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb/gb-4-hero.webp",
          alt: "Illustration of a black front door with a lion-head knocker on a quiet London street, with photographers waiting outside.",
          caption: "Downing Street has had six prime ministers since the 2016 referendum.",
          credit: "Illustration — not a photograph",
          prompt: "A glossy black Georgian front door with a brass lion-head knocker on a quiet London street, a row of photographers with cameras waiting behind a barrier seen from behind, soft grey morning light, iron railings, no legible numbers or text." },
        { type: "people", head: "Six to know", items: [
          { name: "Andy Burnham", role: "Prime minister and Labour leader, since July 2026",
            img: "img/gb/portrait-burnham.webp", source: "UK Parliament official portrait (CC BY 3.0) via Wikimedia Commons; confirm the licence.",
            md: "A former cabinet minister under Gordon Brown, twice a losing Labour leadership candidate, and mayor of Greater Manchester from 2017. Returned to Parliament in a June 2026 by-election and won the leadership. Promises to 'rewire the state' and hand power to regions." },
          { name: "John Healey", role: "Chancellor of the Exchequer, since July 2026",
            img: "img/gb/portrait-healey.webp", source: "UK Parliament official portrait (CC BY 3.0) via Wikimedia Commons; confirm the licence.",
            md: "Moved from defence to the Treasury, replacing Rachel Reeves. Presents his first budget on 28 October with little room to manoeuvre." },
          { name: "Nigel Farage", role: "Reform UK leader; MP for Clacton",
            img: "img/gb/portrait-farage.webp", source: "Official portrait or CC-licensed photo via Wikimedia Commons; confirm the licence.",
            md: "The driving force behind Brexit. His Reform UK led national polls for much of 2025 and won big in May 2026, but has slipped since Burnham took over; YouGov found 69% viewed him unfavourably in September." },
          { name: "Kemi Badenoch", role: "Conservative leader, since November 2024",
            img: "img/gb/portrait-badenoch.webp", source: "UK Parliament official portrait (CC BY 3.0) via Wikimedia Commons; confirm the licence.",
            md: "Leads a party that lost 563 councillors in May 2026 and competes with Reform for the same voters. Polls in September put the Conservatives level with or just ahead of Reform." },
          { name: "Keir Starmer", role: "Prime minister 2024–2026",
            img: "img/gb/portrait-starmer.webp", source: "Official portrait (OGL / CC BY 3.0) via Wikimedia Commons; confirm the licence.",
            md: "A former chief prosecutor who won a landslide in 2024 and resigned less than two years later after heavy election losses. Announced on 1 September 2026 that he would leave Parliament." },
          { name: "Wes Streeting", role: "Former health secretary",
            img: "img/gb/portrait-streeting.webp", source: "UK Parliament official portrait (CC BY 3.0) via Wikimedia Commons; confirm the licence.",
            md: "His resignation from the cabinet on 14 May 2026, days after the local elections, began the collapse of Starmer's authority." }
        ] },
        { type: "section", head: "The party landscape", md:
          "For a century British politics was a contest between two parties. Now there are five with serious support. A poll on 20–21 September 2026 put Labour on 23%, the Conservatives and Reform on 21% each, the Greens on 14% and the Liberal Democrats on 12%. Other polls show Labour further ahead after what the press calls the 'Burnham bounce'. With votes split this evenly, first past the post could produce almost any result." },
        { type: "section", head: "The Greens and the Lib Dems", md:
          "The Greens, led since 2025 by Zack Polanski, have pitched themselves as a left-wing alternative to Labour and won young and urban voters. The Liberal Democrats under Ed Davey won 72 seats in 2024, their best result in a century, mostly in prosperous southern seats taken from the Conservatives." },
        { type: "section", head: "What Reform stands for", md:
          "Reform UK grew out of the Brexit Party. It promises to cut immigration sharply, deport people who arrive illegally, leave the European Convention on Human Rights, scrap net-zero climate targets and cut taxes. Supporters see a party that says what others won't. Critics question its sums and point to rows over candidates' past remarks and, in September 2026, allegations about donations to the party." },
        { type: "section", head: "Scotland and Wales", md:
          "In Scotland the SNP, which wants independence, remained the largest party in May 2026 with 57 seats. In Wales, Plaid Cymru, the Welsh nationalist party, came first with 43 of 96 seats, and Reform second with 34, while Labour, which had led every Welsh government since devolution, fell to 9 seats and its First Minister lost her own seat." }
      ],
      takeaways: [
        "Burnham leads Labour; John Healey replaced Rachel Reeves as chancellor.",
        "Five parties now poll between 12% and about 25%, so first past the post could produce almost any result.",
        "Reform UK surged in 2025–26 but has slipped since Burnham took over."
      ],
      check: { q: "Which party came first in the Welsh Senedd election of May 2026?",
        choices: ["Labour", "Reform UK", "Plaid Cymru"], answer: 2,
        explain: "Plaid Cymru won 43 of 96 seats and Reform 34, while Labour, which had led every Welsh government since 1999, fell to 9." },
      sources: [
        { title: "Burnham Bounce Sees Labour Catch Farage's Reform in UK Polls", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-07-27/burnham-bounce-sees-labour-catch-farage-s-reform-in-uk-polls", date: "2026-07-27" },
        { title: "Political favourability ratings, September 2026", publisher: "YouGov", url: "https://yougov.com/en-gb/articles/55550-political-favourability-ratings-september-2026", date: "2026-09" },
        { title: "Burnham ministry", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Burnham_ministry", date: "2026-09" },
        { title: "Opinion polling for the 2026 Senedd election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Opinion_polling_for_the_2026_Senedd_election", date: "2026" },
        { title: "2026 Scottish Parliament election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Scottish_Parliament_election", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "gb-5", kind: "story", asOf: "2026-09-28",
      title: "The May earthquake",
      dek: "On 7 May 2026 Labour lost nearly 1,500 councillors, Wales and Scotland turned away from it, and Reform UK became a party of local government.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb/gb-5-hero.webp",
          alt: "Illustration of a sports hall at night during a vote count, with long tables of paper ballots and tellers counting under bright lights.",
          caption: "Counts ran through the night of 7–8 May 2026 across England, Scotland and Wales.",
          credit: "Illustration — not a photograph",
          prompt: "A school sports hall at night during an election count, long rows of trestle tables piled with paper ballots, counters in lanyards sorting votes, observers standing behind, bright overhead lights, tired but tense atmosphere, no legible text or party colours." },
        { type: "section", head: "What happened", md:
          "On 7 May 2026 voters elected thousands of local councillors across England, as well as the Scottish Parliament and the Welsh Senedd. Labour lost 1,496 councillors and control of 38 councils. Reform UK gained 1,451 councillors and 14 councils. The Conservatives lost 563 councillors.\n\n" +
          "In Wales, Plaid Cymru won 43 seats, Reform 34 and Labour just 9; Labour's First Minister, Eluned Morgan, lost her seat. In Scotland, the SNP won 57 seats, with Labour and Reform on 17 each." },
        { type: "facts", head: "By the numbers", rows: [
          ["Labour (England)", "−1,496 councillors; lost 38 councils"],
          ["Reform UK (England)", "+1,451 councillors; won 14 councils"],
          ["Conservatives (England)", "−563 councillors"],
          ["Wales (96 seats)", "Plaid 43, Reform 34, Labour 9"],
          ["Scotland (129 seats)", "SNP 57, Labour 17, Reform 17"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Starmer's government had struggled from the start. It raised taxes on employers, cut a winter fuel payment for most pensioners and then reversed the cut, and fought off rebellions over welfare. Living standards barely rose, NHS waiting lists stayed long, and small-boat crossings in the Channel continued. Voters who had backed Labour in 2024 mainly to remove the Conservatives felt little had changed.\n\n" +
          "Reform offered a sharp message on immigration and the cost of living, and won across former Labour and Conservative towns alike. On the left, the Greens took votes in cities and university towns." },
        { type: "section", head: "Why it matters", md:
          "Local councils run bins, roads, planning and social care, so Reform's gains give it real responsibility for the first time, and a chance to show voters what it would do in national government, or to stumble. Wales, where Labour had topped the poll at general elections for about a century, turned to a nationalist party. And in Scotland the SNP's strength keeps the question of independence alive." },
        { type: "section", head: "Who voted how", md:
          "The results showed a country splitting along new lines. Reform did best among older voters and in towns and coastal areas that voted Leave in 2016, taking seats from both Labour and the Conservatives. Labour held on better in big cities, but lost votes there to the Greens and, in some areas, to independent candidates. Turnout, as usual in local elections, was far lower than at a general election. Age and education now predict a vote better than class." },
        { type: "compare", head: "Reading the results",
          left: { head: "Reform's view", md:
            "Voters have given up on both old parties. Reform is now the real opposition and the party of change, winning in places Labour and the Conservatives took for granted for generations." },
          right: { head: "Its critics' view", md:
            "Local elections are protest votes with low turnout. Running councils will expose Reform's inexperience, and its national poll lead faded as soon as Labour changed leader." } },
        { type: "section", head: "What's next", md:
          "The immediate result was a Labour crisis: within a week the health secretary had resigned, and within seven weeks Starmer was gone, as the next briefing explains. The longer-term question is whether Reform can turn local power into a national breakthrough at the general election due by 2029." }
      ],
      takeaways: [
        "In May 2026 Labour lost 1,496 councillors and Reform gained 1,451.",
        "Plaid Cymru won Wales, where Labour fell to 9 seats; the SNP stayed the largest party in Scotland.",
        "Reform now runs 14 councils, its first big test of governing."
      ],
      check: { q: "Roughly how many councillors did Labour lose in May 2026?",
        choices: ["About 150", "About 500", "About 1,500"], answer: 2,
        explain: "Labour lost 1,496 councillors and control of 38 councils, one of its worst local election results." },
      sources: [
        { title: "Local Elections 2026: Results show Reform surge and Labour losses", publisher: "LocalGov", url: "https://www.localgov.co.uk/Local-Elections-2026-Results-show-Reform-surge-and-Labour-losses/64328", date: "2026-05" },
        { title: "UK's Labour set for heavy losses in elections as Reform makes early gains", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/5/8/uks-labour-set-for-heavy-losses-in-elections-as-reform-makes-early-gains", date: "2026-05-08" },
        { title: "2026 Election Results", publisher: "Scottish Parliament", url: "https://www.parliament.scot/msps/elections/2026-election-results", date: "2026-05" },
        { title: "Scottish Parliament elections 2026", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10843/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "gb-6", kind: "story", asOf: "2026-09-28",
      title: "Starmer falls, Burnham rises",
      dek: "A resignation, a vacated seat, a by-election and a leadership race: how Labour changed prime minister in ten weeks.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb/gb-6-hero.webp",
          alt: "Illustration of a red-brick northern English town high street on a rainy evening, with a campaign office window glowing.",
          caption: "Burnham returned to Parliament through a by-election in Makerfield, near Wigan, in June 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A red-brick high street in a northern English town on a rainy evening, terraced shops, a campaign office window glowing warm with volunteers inside seen as silhouettes, wet pavements reflecting streetlights, hills in the distance, no legible text or party logos." },
        { type: "section", head: "What happened", md:
          "After the May elections, pressure on Starmer grew fast. On 14 May his health secretary, Wes Streeting, resigned. The same day, Josh Simons, Labour MP for Makerfield in Greater Manchester, gave up his seat so that Andy Burnham, then mayor of Greater Manchester, could return to Parliament. Burnham won the [[by-election]] on 18 June with a majority of more than 9,000.\n\n" +
          "On 22 June Starmer announced he would resign. Burnham won the Labour leadership on 17 July and became prime minister on 20 July." },
        { type: "timeline", head: "Ten weeks", items: [
          ["7 May", "Heavy Labour losses in local, Scottish and Welsh elections"],
          ["14 May", "Streeting resigns; Makerfield seat vacated"],
          ["18 Jun", "Burnham wins the Makerfield by-election"],
          ["22 Jun", "Starmer announces his resignation"],
          ["17 Jul", "Burnham elected Labour leader"],
          ["20 Jul", "Burnham becomes prime minister"],
          ["1 Sep", "Starmer says he will leave Parliament"]
        ] },
        { type: "section", head: "Why Burnham", md:
          "Burnham had been the most popular Labour politician in the country for years, built on his record as a mayor who stood up to national governments of both parties. He had run for the leadership twice before, in 2010 and 2015, and lost. Labour's rules require the leader to be an MP, which is why he needed a seat. Many Labour MPs saw him as the only figure who could win back both the northern towns drifting to Reform and the progressive voters drifting to the Greens." },
        { type: "section", head: "A new government", md:
          "Burnham reshaped the cabinet. Rachel Reeves was removed as chancellor and replaced by John Healey, and David Lammy was dismissed. The new government's themes are re-industrialisation, council housing, 'rewiring the state' so decisions are made closer to people, and devolving power and money to England's regions, the model Burnham ran in Manchester." },
        { type: "section", head: "How Labour picks a leader", md:
          "Labour's rules set a high bar for challengers: a candidate needs nominations from 20% of the party's MPs, and then the leader is chosen by a vote of party members and affiliated supporters, including trade unionists. With Starmer gone, Burnham was the clear favourite, and the result was announced on 17 July, less than a month after Starmer's resignation." },
        { type: "compare", head: "Two views of the change",
          left: { head: "Supporters", md:
            "Labour listened to voters and changed course quickly. Burnham has a record of delivery and an appeal beyond Westminster, and the polls moved within weeks." },
          right: { head: "Critics", md:
            "Britain has had six prime ministers since 2016, most of them chosen by party members rather than voters. The Conservatives and Reform say Burnham should call an election." } },
        { type: "section", head: "Why it matters", md:
          "The change seems to have worked, for now. By September, Labour had moved back into first place in most polls, and an Ipsos survey found that the public preferred a Burnham-led Labour government to a Farage-led Reform one by 50% to 29%. Honeymoons fade, though, and Burnham must now govern with the same tight budget his predecessor faced." }
      ],
      takeaways: [
        "Wes Streeting's resignation on 14 May 2026 began the collapse of Starmer's authority.",
        "Andy Burnham returned to Parliament through the Makerfield by-election on 18 June.",
        "Starmer resigned; Burnham became Labour leader on 17 July and prime minister on 20 July."
      ],
      check: { q: "Why did Andy Burnham need to win the Makerfield by-election?",
        choices: ["To qualify for the mayoralty", "Because Labour's leader must be an MP", "To take a seat in the House of Lords"], answer: 1,
        explain: "Burnham was mayor of Greater Manchester, not an MP. Labour's rules require its leader to sit in the Commons, so he needed a seat before he could run." },
      sources: [
        { title: "2026 Makerfield by-election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Makerfield_by-election", date: "2026-06" },
        { title: "Andy Burnham Elected in Makerfield, Paving Way to Contest Starmer for Labour", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-19/makerfield-by-election-shows-a-win-for-andy-burnham", date: "2026-06-19" },
        { title: "Starmer set to resign as UK PM: How does a leadership contest work?", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/22/why-has-keir-starmer-resigned-as-uk-prime-minister-and-who-will-take-over", date: "2026-06-22" },
        { title: "2026 Labour Party leadership election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Labour_Party_leadership_election", date: "2026-07" },
        { title: "Burnham bounce continues with public more favourable towards PM than other leading UK politicians", publisher: "Ipsos", url: "https://www.ipsos.com/en-uk/burnham-bounce-continues-public-more-favourable-towards-pm-other-leading-uk-politicians", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "gb-7", kind: "story", asOf: "2026-09-28",
      title: "The budget bind",
      dek: "Burnham promised change, but his chancellor's first budget on 28 October must satisfy the bond markets that brought down Liz Truss.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb/gb-7-hero.webp",
          alt: "Illustration of a trading floor in the City of London at dawn, screens showing rising lines, with the dome of a cathedral visible through the window.",
          caption: "Britain's borrowing costs, set by trading in government bonds known as gilts, limit what any chancellor can do.",
          credit: "Illustration — not a photograph",
          prompt: "A modern trading floor at dawn with rows of screens showing abstract rising line charts, a few traders at desks, a large window revealing the dome of a baroque cathedral and city towers in soft pink light, calm tension, no legible text or numbers." },
        { type: "section", head: "What happened", md:
          "Britain borrows by selling bonds called [[gilts]], and the interest rates on them have risen to some of the highest among rich countries. In September 2026, a new surge in gilt yields raised the cost of servicing the national debt. Analysts estimate it could cut the roughly £23.6 billion buffer the Treasury had left itself against its borrowing rules by about half.\n\n" +
          "That leaves John Healey's first budget, on 28 October, with little room. The government has already taken one step on bills: from 1 October 2026, the 5% VAT on household electricity is removed." },
        { type: "facts", head: "The squeeze", rows: [
          ["Budget day", "28 October 2026"],
          ["Headroom against fiscal rules", "About £23.6 billion, which a gilt-yield rise could roughly halve"],
          ["Electricity VAT", "5% VAT on domestic electricity removed from 1 October 2026"],
          ["Defence", "Commitment to raise spending toward NATO's new targets"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Britain's debt is close to 100% of GDP, interest bills are among the largest items of spending, and growth has been weak for years. Markets remember the autumn of 2022, when Liz Truss's unfunded tax cuts caused a gilt crash and forced the Bank of England to intervene. Any chancellor who seems to lose control of borrowing risks a repeat. At the same time, schools, hospitals, prisons and councils are asking for more money, and defence spending must rise." },
        { type: "compare", head: "The choice",
          left: { head: "Borrow and invest", md:
            "Many on Labour's left, and some economists, argue that the fiscal rules are too tight, that public investment pays for itself over time, and that the country needs visible change before the next election." },
          right: { head: "Hold the line", md:
            "Others, including many in the City, warn that loosening the rules would push up borrowing costs further, cancelling out any gain. They argue the government must raise taxes or restrain spending." } },
        { type: "section", head: "Why it matters", md:
          "Burnham's political strategy depends on showing voters quickly that life is getting better: cheaper energy, more homes, better services. The budget is where that meets reality. If it has to raise taxes or delay promises, the honeymoon may fade; if it spends freely and markets react badly, the government could face a crisis like Truss's." },
        { type: "section", head: "What's in the plans", md:
          "Burnham's ministers have signalled the direction: public investment in industry and council homes, faster planning decisions, and more money and power for regional mayors. How far the budget can fund those plans, and whether it includes tax rises the party ruled out in 2024, will be the main arguments of the autumn." },
        { type: "section", head: "What's next", md:
          "Watch gilt yields in the weeks before 28 October, the independent Office for Budget Responsibility's forecasts published on budget day, and whether Healey changes the fiscal rules. Watch Labour MPs, too: a leader who won on a promise of change will face pressure from his own side if the budget feels like more of the same." }
      ],
      takeaways: [
        "Britain's borrowing costs are high, and a September 2026 rise in gilt yields squeezed the government's room for manoeuvre.",
        "John Healey's first budget comes on 28 October; the 5% VAT on household electricity goes from 1 October.",
        "The memory of Liz Truss's 2022 market crisis shapes every British chancellor's choices."
      ],
      check: { q: "What are gilts?",
        choices: ["UK government bonds", "Bank of England interest rates", "A tax on imports"], answer: 0,
        explain: "Gilts are the bonds the UK government sells to borrow money. Their yields set the government's borrowing costs." },
      sources: [
        { title: "Burnham's Budget bind", publisher: "LabourList", url: "https://labourlist.org/2026/09/burnhams-budget-bind/", date: "2026-09" },
        { title: "Labour conference is the easy bit — Burnham's real test comes in a month", publisher: "Hyphen", url: "https://hyphenonline.com/2026/09/25/andy-burnham-labour-conference-2026-budget-john-healey/", date: "2026-09-25" },
        { title: "Premiership of Andy Burnham", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Premiership_of_Andy_Burnham", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "gb-12", kind: "spotlight", asOf: "2026-09-28",
      title: "Scotland's question",
      dek: "Scotland voted to stay in the UK in 2014, then voted against Brexit in 2016. Whether it should be independent still dominates its politics.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb/gb-12-hero.webp",
          alt: "Illustration of a modern parliament building with unusual angled roofs and wooden details at the foot of a green hill, beside an old palace.",
          caption: "The Scottish Parliament at Holyrood in Edinburgh, reopened in 1999 after almost three centuries.",
          credit: "Illustration — not a photograph",
          prompt: "A striking modern parliament building with leaf-shaped roofs, angular windows and wooden trellis details at the foot of a steep green hill with rocky crags, an old stone palace nearby, bright changeable sky, no people close up, no flags, no legible text." },
        { type: "facts", head: "Scotland in numbers", rows: [
          ["Population", "About 5.5 million"],
          ["2014 independence referendum", "No 55%, Yes 45%"],
          ["2016 Brexit vote in Scotland", "Remain 62%, Leave 38%"],
          ["Scottish Parliament election, May 2026", "SNP largest party with 57 of 129 seats"],
          ["2022 Supreme Court ruling", "Holyrood cannot call a referendum without Westminster's consent"]
        ] },
        { type: "section", head: "Home rule", md:
          "Scotland kept its own legal system, church and schools after 1707, and a distinct identity. The Scottish National Party (SNP), founded in 1934, won its first seat in 1945. Resentment grew in the 1980s, when Scotland voted Labour but was governed by Margaret Thatcher's Conservatives, who introduced the unpopular poll tax there a year before England. In a 1997 referendum Scots voted overwhelmingly for a parliament of their own, which opened in 1999 with powers over health, education, justice and some taxes." },
        { type: "section", head: "The 2014 referendum", md:
          "The SNP won a majority at Holyrood in 2011, and David Cameron's government agreed to a referendum. On 18 September 2014, with a turnout of 85%, Scots voted 55% to 45% to stay in the UK. The 'No' campaign argued that independence was an economic risk, with uncertainty over the currency, oil revenues and EU membership. The debate energised Scottish politics, and in the 2015 general election the SNP won 56 of Scotland's 59 Westminster seats." },
        { type: "section", head: "Brexit changes the argument", md:
          "In the 2016 EU referendum, Scotland voted 62% to Remain, while the UK as a whole voted to Leave. The SNP argued this was a 'material change' justifying a new independence vote. But London refused, and in 2022 the UK Supreme Court ruled that the Scottish Parliament could not hold a referendum without Westminster's consent. For some voters Brexit strengthened the case for independence; for others it showed how painful separating from a union can be." },
        { type: "section", head: "Scandal and recovery", md:
          "Nicola Sturgeon, the SNP's long-serving first minister, resigned in 2023; a police investigation into party finances followed, and her husband, a former party chief executive, was charged with embezzlement. The SNP lost heavily to Labour in the 2024 general election, falling to 9 seats. Under John Swinney it recovered to remain the largest party in the Scottish Parliament in May 2026, with 57 of 129 seats, short of a majority, while Reform UK and Labour each won 17." },
        { type: "compare", head: "Two cases",
          left: { head: "For independence", md:
            "Scotland is a nation that keeps getting governments it didn't vote for, and was taken out of the EU against its will. It could thrive like other small European states." },
          right: { head: "For the union", md:
            "The UK shares a currency, market, defence and public spending that benefit Scotland; separation would mean a hard border with England, its biggest market." } },
        { type: "section", head: "Why it matters", md:
          "Polls have shown Scots roughly evenly split on independence for most of the past decade. Without Westminster's consent there is no legal route to a new referendum, so the question is political: whether a future UK government would agree, and whether Scottish voters give the SNP a mandate strong enough to force the issue." }
      ],
      takeaways: [
        "Scotland has had its own parliament since 1999 and voted 55% to 45% against independence in 2014.",
        "Scotland voted 62% to remain in the EU, reviving the independence debate.",
        "The SNP remains the largest party at Holyrood, but a referendum needs Westminster's consent."
      ],
      check: { q: "What did the UK Supreme Court rule in 2022?",
        choices: ["Scotland is independent", "The Scottish Parliament cannot hold an independence referendum without Westminster's consent", "Brexit does not apply to Scotland"], answer: 1,
        explain: "The court found that a referendum on independence relates to matters reserved to the UK Parliament." },
      sources: [
        { title: "Scottish independence referendum 2014", publisher: "Britannica", url: "https://www.britannica.com/topic/Scottish-independence-referendum-of-2014", date: "n.d." },
        { title: "Reference by the Lord Advocate of devolution issues (UKSC 2022/0098)", publisher: "UK Supreme Court", url: "https://www.supremecourt.uk/cases/uksc-2022-0098", date: "2022-11-23" },
        { title: "Scottish Parliament elections 2026", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10843/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "gb-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "A new prime minister with a poll bounce, a budget weeks away, and five parties within striking distance.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb/gb-8-hero.webp",
          alt: "Illustration of the Houses of Parliament beside the River Thames at dusk, with lights reflecting in the water.",
          caption: "Westminster, where Burnham's government must now deliver.",
          credit: "Illustration — not a photograph",
          prompt: "A gothic parliament building with a tall clock tower beside a wide river at dusk, lights reflecting in the water, a red double-decker bus crossing a bridge, soft purple sky, calm and anticipatory, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Andy Burnham, prime minister since 20 July, leads Labour with the large Commons majority won in 2024.\n" +
          "- **Polls:** Labour has regained a narrow lead; one September poll had Labour 23%, Conservatives 21%, Reform 21%, Greens 14%, Lib Dems 12%.\n" +
          "- **Money:** the first Healey budget is on 28 October, with rising borrowing costs.\n" +
          "- **Nations:** the SNP leads in Scotland; Plaid Cymru and Reform are the two biggest parties in Wales.\n" +
          "- **Abroad:** Britain co-leads Europe's 'coalition of the willing' for Ukraine with France." },
        { type: "section", head: "Britain in the world", md:
          "The UK and [[unit:fr|France]] lead planning for a European force to help secure [[unit:ua|Ukraine]] after any ceasefire. London has pledged to raise defence spending toward NATO's new goals, and is working more closely with the EU on defence, energy and trade after a 2025 'reset' summit, while ruling out rejoining the single market or customs union. It must also manage Trump's [[unit:us|United States]], whose [[tariff|tariffs]] have been lower on Britain than on most partners." },
        { type: "section", head: "The immigration question", md:
          "Migration remains one of voters' top concerns, especially the small boats crossing the Channel from France. Successive governments have promised to stop them; numbers have stayed in the tens of thousands a year. Reform wants to leave the European Convention on Human Rights to allow mass deportations; Labour has signed return deals with France and says it is breaking smuggling gangs." },
        { type: "section", head: "What voters want", md:
          "Polls suggest the cost of living, the NHS and immigration dominate voters' concerns, followed by housing and the economy. Waiting lists for hospital treatment, though falling, remain far above pre-pandemic levels, and young people struggle to afford homes. Burnham's bet is that visible improvements in these everyday areas, not arguments about Brexit or culture, will decide the next election." },
        { type: "section", head: "Scotland's question", md:
          "The SNP says its May 2026 result gives it a mandate to push again for an independence referendum. The UK government has rejected another vote, and the Supreme Court ruled in 2022 that the Scottish Parliament cannot hold one on its own. Polls on independence remain close to evenly split." },
        { type: "section", head: "Three scenarios", md:
          "- **Labour recovery.** The budget lands well, energy bills fall, and Burnham's bounce turns into a durable lead.\n" +
          "- **Four-way fight.** Support stays split, and the next election becomes a lottery in which a party on 25% could win a majority.\n" +
          "- **Reform's return.** The honeymoon fades, Reform recovers, and Farage becomes a real contender for Downing Street." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **1 October 2026:** VAT on household electricity removed\n" +
          "- **28 October 2026:** Healey's first budget\n" +
          "- **May 2027:** the next round of local elections in England\n" +
          "- **By August 2029:** the next general election" },
        { type: "section", head: "Connections", md:
          "The UK's story runs through [[unit:us]] (the 'special relationship' and trade), [[unit:fr]] and [[unit:de]] (European defence), [[unit:ua]] (the coalition of the willing), [[unit:in]] (a 2025 trade deal and a large Indian diaspora) and [[unit:cn]] (security worries and trade)." }
      ],
      takeaways: [
        "Burnham has pulled Labour back into a narrow poll lead, but five parties are competitive.",
        "His government's first budget, on 28 October, must satisfy nervous bond markets.",
        "Abroad, Britain co-leads with France the plans to guarantee Ukraine's security after any ceasefire."
      ],
      check: { q: "Which country co-leads the 'coalition of the willing' for Ukraine with the UK?",
        choices: ["Germany", "France", "Poland"], answer: 1,
        explain: "The UK and France lead the group of countries planning a force to help secure Ukraine after a ceasefire." },
      sources: [
        { title: "Nigel Farage's Reform UK Slips Behind Labour and Tories in New MRP Poll", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-09-24/farage-s-reform-slips-behind-labour-and-tories-in-new-mrp-poll", date: "2026-09-24" },
        { title: "Reform UK Drop To Third Place In Latest Poll Blow For Nigel Farage", publisher: "HuffPost UK", url: "https://www.huffingtonpost.co.uk/entry/reform-uk-third-place-nigel-farage_uk_6ab38002e4b085277b54b20a", date: "2026-09" },
        { title: "Next United Kingdom general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Next_United_Kingdom_general_election", date: "2026-09" },
        { title: "Burnham's Budget bind", publisher: "LabourList", url: "https://labourlist.org/2026/09/burnhams-budget-bind/", date: "2026-09" }
      ]
    }
  ]
});
