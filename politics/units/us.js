/* ============================================================
   Unit 1 — United States 🇺🇸
   Research note and sources: tools/research/us.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us", {
  id: "us",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us-1", kind: "snapshot", asOf: "2026-09-28",
      title: "The United States in brief",
      dek: "The world's largest economy and military, a deeply divided democracy, and the country whose choices echo through every other unit.",
      blocks: [
        { type: "map", src: "maps/us.svg",
          alt: "Locator map of North America with the United States highlighted between Canada and Mexico, and a small globe showing where it sits in the world.",
          caption: "The United States: 48 contiguous states between Canada and Mexico, plus Alaska and Hawaii.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Washington, D.C."],
          ["People", "341.8 million (Census Bureau estimate, July 2025)"],
          ["Economy", "About $30.8 trillion (GDP, 2025), the world's largest"],
          ["System", "Federal presidential republic of 50 states"],
          ["Leader", "President Donald Trump (Republican), since 20 Jan 2025"],
          ["Congress", "Republican majorities: Senate 53–47, House 218–214"],
          ["Next national vote", "Midterm elections, 3 Nov 2026"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Start here because almost every other country in this course is reacting to Washington. The United States has the largest economy, the most powerful military and the world's main reserve currency, the dollar. It anchors alliances from [[NATO]] in Europe to Japan and South Korea in Asia.\n\n" +
          "In 2026 that weight has been felt more directly than usual. American [[tariff|tariffs]] have reshaped trade with almost every partner. US forces captured Venezuela's leader in January and have been fighting Iran since February. When Washington moves, the rest adjust: you'll see it in the units on [[unit:cn]], [[unit:ir]], [[unit:mx]] and [[unit:ca]]." },
        { type: "section", head: "Power in numbers", md:
          "The United States spent $954 billion on its military in 2025, a third of all the world's military spending, according to the Stockholm International Peace Research Institute. More than half of the foreign-currency reserves held by the world's central banks are in dollars, which lets Washington impose financial sanctions that few other countries could.\n\n" +
          "American companies also lead the technologies of the moment, from artificial intelligence to cloud computing, although the most advanced chips they depend on are mostly made in [[unit:tw]]." },
        { type: "section", head: "Fifty governments in one", md:
          "The United States is a [[federalism|federation]]: power is split between the national government in Washington and 50 states, each with its own constitution, governor and legislature. States run elections, most policing and most schools, so many political fights are really about which level of government gets to decide.\n\n" +
          "It is also a big, changing country. Its population grew by only 0.5% in the year to July 2025, the slowest rate since the pandemic, because net immigration roughly halved, according to the Census Bureau. Immigration is one of the sharpest dividing lines in its politics." },
        { type: "section", head: "Who's in charge right now", md:
          "Donald Trump is serving a second, non-consecutive term; only Grover Cleveland had done that before. His Republican Party holds narrow majorities in both chambers of [[Congress]], and six of the nine Supreme Court justices were appointed by Republican presidents.\n\n" +
          "On paper that is unified government. In practice the margins are thin, the courts have pushed back on some of Trump's biggest moves, and the whole House of Representatives and a third of the Senate face voters on 3 November 2026. Briefings 5 to 7 tell the three stories that define the year." },
        { type: "section", head: "What Americans are arguing about", md:
          "Four arguments run through this unit. **Prices:** headline [[inflation]] was 3.4% in August 2026, well above the 2.4% [[core inflation|core]] rate that leaves out food and energy. **Immigration:** the administration has made deportations and border control a centrepiece. **Presidential power:** how much a president can do by [[executive order]], emergency decree or military action without Congress. **War:** whether the fighting with Iran, which Congress never declared, should go on.\n\n" +
          "Where Americans stand on one of these increasingly predicts where they stand on the rest, and which party they vote for. That sorting is called [[polarization]]." },
        { type: "callout", tone: "why", md:
          "American politics sets interest rates, trade rules and war-and-peace decisions far beyond its borders. Knowing how power works in Washington makes the other 29 units easier to read." }
      ],
      takeaways: [
        "The US has the world's largest economy and military, so its decisions ripple through every other unit.",
        "It is a federation: 50 states share power with Washington and run elections, policing and schools.",
        "Republicans hold the White House and both chambers of Congress, but the whole House is on the ballot on 3 Nov 2026."
      ],
      check: { q: "Which body faces voters in full on 3 November 2026?",
        choices: ["The Senate", "The House of Representatives", "The Supreme Court"], answer: 1,
        explain: "All 435 House seats are elected every two years. Senators serve six-year terms, so only about a third of the Senate is up, and Supreme Court justices serve for life." },
      sources: [
        { title: "U.S. Population Growth Slows Due to Historic Decline in Net International Migration", publisher: "U.S. Census Bureau", url: "https://www.census.gov/newsroom/press-releases/2026/population-growth-slows.html", date: "2026" },
        { title: "GDP (Second Estimate), 4th Quarter and Year 2025", publisher: "U.S. Bureau of Economic Analysis", url: "https://www.bea.gov/news/2026/gdp-second-estimate-4th-quarter-and-year-2025", date: "2026" },
        { title: "Party Breakdown", publisher: "House Press Gallery", url: "https://pressgallery.house.gov/member-data/party-breakdown", date: "2026-09" },
        { title: "Consumer Price Index Summary — August 2026", publisher: "U.S. Bureau of Labor Statistics", url: "https://www.bls.gov/news.release/cpi.nr0.htm", date: "2026-09" },
        { title: "Trends in World Military Expenditure, 2025", publisher: "SIPRI", url: "https://www.sipri.org/publications/2026/sipri-fact-sheets/trends-world-military-expenditure-2025", date: "2026-04" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us-2", kind: "power", asOf: "2026-09-28",
      title: "Built to make power hard to use",
      dek: "Three branches, fifty states and two parties — and the ways presidents have learned to act on their own anyway.",
      blocks: [
        { type: "diagram", src: "img/us/us-2-power.svg",
          alt: "Diagram of the US system. Voters elect Congress and, through the Electoral College, the President. The President nominates Supreme Court justices and the Senate confirms them. Congress can override a veto with two-thirds. The Court can strike down laws and actions. The 50 states run elections and draw districts.",
          caption: "Separation of powers: each branch holds tools to check the other two.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "A system designed for gridlock", md:
          "The Constitution, written in 1787, splits power three ways on purpose. Its authors feared a king more than a slow government, so they built [[separation of powers]] and [[checks and balances]]: Congress writes laws and controls money, the president carries them out, and the courts decide whether either has broken the rules.\n\n" +
          "Getting anything big done usually needs several institutions to agree. That is a feature, not a bug, but it also explains why presidents keep looking for ways to act alone." },
        { type: "section", head: "Congress: laws, money and war", md:
          "Congress has two chambers. The **House of Representatives** has 435 members elected every two years, with seats shared out by population. The **Senate** has 100 members, two per state however big or small, serving six-year terms. Most bills need 60 Senate votes to get past a [[filibuster]], so a slim majority rarely gets its way alone.\n\n" +
          "The Constitution gives Congress the power to tax, to spend, to set 'duties' on imports and to declare war. The last two matter in this unit: the 2025–26 fights over [[tariff|tariffs]] and over the Iran war are both arguments about powers the Constitution hands to Congress." },
        { type: "section", head: "The president: commander and chief executive", md:
          "The president is chosen through the [[Electoral College]]: each state gets electors equal to its seats in Congress, 538 in all, and 270 wins. Presidents command the armed forces, run the federal government, sign or [[veto]] bills and nominate judges.\n\n" +
          "Modern presidents lean hard on [[executive order|executive orders]], instructions to the government that need no vote. Trump signed 225 in 2025 alone, more than in his entire first term. Congress's main check on military action is the [[War Powers Resolution]] of 1973, which presidents of both parties have long read narrowly." },
        { type: "section", head: "The Supreme Court: the final word", md:
          "Nine justices, appointed for life, interpret the Constitution. Since *Marbury v. Madison* in 1803 the Court has claimed the power of [[judicial review]]: striking down laws and actions that break the Constitution. Six of today's justices were appointed by Republican presidents and three by Democrats.\n\n" +
          "A 6–3 conservative court is not a rubber stamp, though. In February 2026 it struck down Trump's emergency tariffs, with three conservatives joining the three liberals. You'll meet that case in briefing 5." },
        { type: "section", head: "Two parties, by design", md:
          "Most American elections are winner-take-all: whoever gets the most votes in a district or state takes the seat. That rewards two big parties, today's Democrats and Republicans, over smaller ones.\n\n" +
          "Candidates are picked in [[primary election|primaries]], where the most committed voters dominate, which pulls each party toward its base. Add [[redistricting]], in which states redraw House districts, often to help one party, and many seats become safe for one side. Politicians in safe seats fear a primary challenger more than the other party, a big driver of [[polarization]]." },
        { type: "compare", head: "A strong president or a strong Congress?",
          left: { head: "The case for a strong presidency", md:
            "One leader can act fast in a crisis, speak for the whole nation and cut through a slow, divided Congress. Trump's supporters say voters chose his agenda and he should be able to carry it out." },
          right: { head: "The case for a strong Congress", md:
            "The Constitution puts taxes, tariffs and war in Congress's hands so big decisions reflect many voices, not one. Critics of executive power, on the left and the right, say emergencies are being used to bypass the legislature." } }
      ],
      takeaways: [
        "Power is split among Congress, the president and the courts on purpose, so big changes need several institutions to agree.",
        "The Constitution gives Congress the power over taxes, tariffs and war, which is why 2026's biggest fights are about presidential power.",
        "Winner-take-all elections, primaries and redistricting keep two parties dominant and push them apart."
      ],
      check: { q: "How many Electoral College votes does a candidate need to become president?",
        choices: ["218", "270", "51"], answer: 1,
        explain: "There are 538 electors, one for each member of the House and Senate plus three for Washington, D.C., so a majority is 270. (218 is a House majority; 51 a Senate majority.)" },
      sources: [
        { title: "The Constitution of the United States: A Transcription", publisher: "National Archives", url: "https://www.archives.gov/founding-docs/constitution-transcript", date: "1787" },
        { title: "Trump has already issued more executive orders in his second term than in his first", publisher: "Pew Research Center", url: "https://www.pewresearch.org/short-reads/2025/12/16/trump-has-already-issued-more-executive-orders-in-his-second-term-than-in-his-first/", date: "2025-12-16" },
        { title: "Donald Trump's executive orders and actions, 2025–2026", publisher: "Ballotpedia", url: "https://ballotpedia.org/Donald_Trump's_executive_orders_and_actions,_2025-2026", date: "2026" },
        { title: "Learning Resources, Inc. v. Trump (opinion of the Court)", publisher: "Supreme Court of the United States", url: "https://www.supremecourt.gov/opinions/25pdf/24-1287_4gcj.pdf", date: "2026-02-20" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us-3", kind: "history", asOf: "2026-09-28",
      title: "Five turning points since 1945",
      dek: "How the United States became a superpower, and how it became so divided.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us/us-3-hero.webp",
          alt: "Illustration of civil-rights-era marchers, seen from behind, crossing a wide bridge at sunrise.",
          caption: "The civil-rights movement rewrote who could vote. In 2026 the fight over its laws returned to the Supreme Court.",
          credit: "AI illustration — not a photograph",
          prompt: "Hundreds of marchers in early-1960s clothing seen from behind, crossing a wide steel-arch bridge at sunrise over a broad river, plain banners with no writing, a mood of resolve and scale." },
        { type: "timeline", head: "The short version", items: [
          ["1945–49", "Victory in the Second World War; the US helps found the UN and NATO and funds Europe's recovery"],
          ["1964–65", "The Civil Rights Act and Voting Rights Act outlaw segregation and protect Black voters"],
          ["1991", "The Soviet Union collapses and the US is the only superpower"],
          ["2001–08", "The 9/11 attacks, wars in Afghanistan and Iraq, then the financial crash"],
          ["2016–24", "Trump is elected, defeated, then returned; his supporters storm the Capitol on 6 Jan 2021"]
        ] },
        { type: "section", head: "1. The superpower builds a system (1945–49)", md:
          "The United States came out of the Second World War as the world's leading industrial power and the only country with the atomic bomb. Rather than retreat, as it had after the First World War, it built a system: the United Nations (1945), the Marshall Plan to rebuild Western Europe (1948) and [[NATO]] (1949), whose members pledge that an attack on one is an attack on all.\n\n" +
          "That web of alliances, open trade and a dollar-centred economy is what people mean by 'the US-led order'. Many of 2026's arguments, from tariffs to Greenland, are about whether it still serves American interests." },
        { type: "section", head: "2. The civil-rights revolution (1954–65)", md:
          "Nearly a century after slavery ended, Black Americans in the South were still segregated and largely kept from voting. A mass movement of boycotts, marches and court cases changed that. The Supreme Court outlawed school segregation in 1954, and Congress passed the Civil Rights Act (1964) and the [[Voting Rights Act]] (1965).\n\n" +
          "This is not just history. In April 2026 the Supreme Court sharply narrowed a key section of the Voting Rights Act, reopening fights over how election districts are drawn. That is part of briefing 7." },
        { type: "section", head: "3. The unipolar moment (1991)", md:
          "When the Soviet Union dissolved in December 1991, the [[Cold War]] ended and the United States stood alone as the only superpower. For a decade it looked as if American-style democracy and markets would simply spread. Russia's later hostility and China's rise, covered in the units on [[unit:ru]] and [[unit:cn]], are partly reactions to that moment." },
        { type: "section", head: "4. War and crash (2001–08)", md:
          "The attacks of 11 September 2001 killed nearly 3,000 people and launched a 'war on terror': a 20-year war in Afghanistan that ended with a chaotic withdrawal in 2021, and a 2003 invasion of Iraq justified by weapons of mass destruction that were never found. Then the 2008 financial crisis wiped out jobs, homes and savings. Together they fed a deep distrust of experts and elites on both the left and the right." },
        { type: "section", head: "5. The polarization era (2016–24)", md:
          "Donald Trump won the presidency in 2016 as an outsider promising to shake up Washington. He lost in 2020, refused to accept the result, and on 6 January 2021 a crowd of his supporters stormed the Capitol to stop the count. He was [[impeachment|impeached]] for a second time and acquitted by the Senate.\n\n" +
          "In 2024 he came back, winning all seven [[swing state|swing states]] and 312 electoral votes. One of his first acts in office was to pardon or commute the sentences of people charged over 6 January." }
      ],
      takeaways: [
        "After 1945 the US built the alliances and institutions (the UN, NATO, open trade) that still shape the world.",
        "The civil-rights laws of 1964–65 transformed American democracy, and they are still being fought over in court.",
        "Two decades of war, a financial crash and a disputed 2020 election fed today's deep polarization."
      ],
      check: { q: "Which of these came first?",
        choices: ["The founding of NATO", "The Voting Rights Act", "The end of the Soviet Union"], answer: 0,
        explain: "NATO was founded in 1949, the Voting Rights Act passed in 1965, and the Soviet Union dissolved in 1991." },
      sources: [
        { title: "North Atlantic Treaty Organization (NATO), 1949", publisher: "Office of the Historian, U.S. Department of State", url: "https://history.state.gov/milestones/1945-1952/nato", date: "n.d." },
        { title: "Voting Rights Act (1965)", publisher: "National Archives", url: "https://www.archives.gov/milestone-documents/voting-rights-act", date: "n.d." },
        { title: "2024 Electoral College Results", publisher: "National Archives", url: "https://www.archives.gov/electoral-college/2024", date: "2025" },
        { title: "High Court Narrows Voting Rights Act in Louisiana v. Callais", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/LSB11431", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "us-4", kind: "players", asOf: "2026-09-28",
      title: "Who holds power in Washington",
      dek: "The president, the leaders of Congress and the Chief Justice, and what each of them wants.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us/us-4-hero.webp",
          alt: "Illustration of a long ceremonial avenue at dusk linking a domed capitol building to a columned executive mansion.",
          caption: "Pennsylvania Avenue links Congress and the White House. Who holds power along it is the subject of this briefing.",
          credit: "AI illustration — not a photograph",
          prompt: "An aerial view at dusk of a long, straight ceremonial avenue linking a white domed capitol building at one end to a white columned mansion among trees at the other, street lights coming on, light traffic as tiny streaks, no people visible." },
        { type: "people", head: "The seven to know", items: [
          { name: "Donald Trump", role: "President (Republican), second term since Jan 2025",
            img: "img/us/portrait-trump.webp", source: "Official White House portrait (2025), a U.S. government work in the public domain. Find it on Wikimedia Commons and confirm the licence on the file page.",
            md: "The dominant figure in American politics for a decade. Governs through executive action, tariffs and personal deal-making, and has pressed institutions from the Federal Reserve to the courts. The 22nd Amendment bars a third term, so 2028 will bring a new president." },
          { name: "JD Vance", role: "Vice President",
            img: "img/us/portrait-vance.webp", source: "Official White House portrait (2025), public domain. Wikimedia Commons; confirm the licence on the file page.",
            md: "A former Ohio senator and a leading voice of the party's populist wing. As president of the Senate he breaks 50–50 ties, and he is widely seen as a front-runner for the 2028 Republican nomination." },
          { name: "Mike Johnson", role: "Speaker of the House (Republican, Louisiana)",
            img: "img/us/portrait-johnson.webp", source: "Official House portrait, public domain. Wikimedia Commons; confirm the licence on the file page.",
            md: "Runs the House with one of the thinnest majorities in modern times, 218 to 214. A handful of Republican rebels can sink a bill, as a July 2026 war-powers vote showed." },
          { name: "John Thune", role: "Senate Majority Leader (Republican, South Dakota)",
            img: "img/us/portrait-thune.webp", source: "Official Senate portrait, public domain. Wikimedia Commons; confirm the licence on the file page.",
            md: "Leads a 53–47 majority and decides what reaches the Senate floor, but still needs 60 votes for most bills because of the filibuster." },
          { name: "Hakeem Jeffries", role: "House Minority Leader (Democrat, New York)",
            img: "img/us/portrait-jeffries.webp", source: "Official House portrait, public domain. Wikimedia Commons; confirm the licence on the file page.",
            md: "Leads House Democrats and is in line to become Speaker if his party wins the House in November." },
          { name: "Chuck Schumer", role: "Senate Minority Leader (Democrat, New York)",
            img: "img/us/portrait-schumer.webp", source: "Official Senate portrait, public domain. Wikimedia Commons; confirm the licence on the file page.",
            md: "Leads the 47 senators who caucus with Democrats, 45 Democrats and 2 independents. His party needs a net gain of four seats in November to take the majority." },
          { name: "John Roberts", role: "Chief Justice of the United States",
            img: "img/us/portrait-roberts.webp", source: "Official Supreme Court portrait (Collection of the Supreme Court of the United States). Confirm the licence on the Wikimedia Commons file page.",
            md: "Leads a 6–3 conservative Court and wrote February 2026's decision striking down Trump's emergency tariffs. Known for guarding the Court's standing, sometimes by ruling against the president who appointed three of his colleagues." }
        ] },
        { type: "section", head: "The cabinet to watch", md:
          "Three cabinet members shape the stories in this unit. **Marco Rubio**, the secretary of state, runs diplomacy from Venezuela to Iran. **Scott Bessent**, at the Treasury, leads trade and financial talks. **Pete Hegseth** runs the Pentagon, which the administration also calls the Department of War. After the Army's top civilian, Dan Driscoll, resigned on 31 August 2026 over the firing of generals, Republican senator Thom Tillis urged Trump to replace Hegseth." },
        { type: "section", head: "The Fed: independent, under pressure", md:
          "The [[Federal Reserve]] sets interest rates and is meant to be insulated from politics. Trump spent much of 2025 attacking its chair, Jerome Powell, for not cutting rates faster. In May 2026 Powell's term as chair ended and **Kevin Warsh**, a former Fed governor nominated by Trump, took over after Senate votes along party lines. How independent the Fed stays under Warsh matters for every mortgage and every market." },
        { type: "section", head: "Where the power really sits", md:
          "On paper the president, the Speaker and the Senate leader share power. In 2025–26 the White House has set almost the whole agenda, and Republican leaders in Congress have mostly moved the president's priorities, the 2025 tax-and-spending law chief among them, rather than their own.\n\n" +
          "The exceptions are revealing: Republicans who voted with Democrats on the Iran war, senators who have criticised Hegseth, the conservative justices who joined the ruling against the emergency tariffs. Watch those cracks. They show where the president's own side is willing to say no." },
        { type: "section", head: "The opposition", md:
          "Out of power in Washington, Democrats have no single leader. Jeffries and Schumer run the fights in Congress, but some of the loudest opposition comes from the states: governors such as California's Gavin Newsom, who led the Proposition 50 redistricting push, and Democratic state attorneys general, who have taken the administration to court again and again. The midterms will test whether that adds up to a message voters want." }
      ],
      takeaways: [
        "Trump dominates his party and governs heavily through executive action; the Constitution bars him from running again in 2028.",
        "The Republican House majority is razor-thin, so a handful of its own members can defeat the leadership.",
        "The Supreme Court and the Federal Reserve are designed to be independent of the president, and both are being tested."
      ],
      check: { q: "Who would most likely become Speaker if Democrats win the House in November?",
        choices: ["Chuck Schumer", "Hakeem Jeffries", "John Thune"], answer: 1,
        explain: "Hakeem Jeffries leads House Democrats. Chuck Schumer leads Senate Democrats, and John Thune is the Republican leader of the Senate." },
      sources: [
        { title: "The Cabinet", publisher: "The White House", url: "https://www.whitehouse.gov/administration/cabinet/", date: "2026-09" },
        { title: "Party Breakdown", publisher: "House Press Gallery", url: "https://pressgallery.house.gov/member-data/party-breakdown", date: "2026-09" },
        { title: "Federal Reserve Board names Jerome H. Powell as chair pro tempore until Kevin M. Warsh is sworn in", publisher: "Federal Reserve", url: "https://www.federalreserve.gov/newsevents/pressreleases/other20260515a.htm", date: "2026-05-15" },
        { title: "Republican Senator Calls On Trump to Replace Defense Secretary Pete Hegseth", publisher: "TIME", url: "https://time.com/article/2026/09/02/trump-hegseth-tillis-driscoll-resignation-pentagon/", date: "2026-09-02" },
        { title: "For a 2nd time, House approves resolution to end the war in Iran", publisher: "NPR", url: "https://www.npr.org/2026/07/23/nx-s1-5904515/congress-iran-war-powers-vote", date: "2026-07-23" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "us-5", kind: "story", asOf: "2026-09-28",
      title: "The tariff war and the courts",
      dek: "The biggest tariffs in nearly a century, a Supreme Court defeat, and a White House that rebuilt them within hours.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us/us-5-hero.webp",
          alt: "Illustration of stacked shipping containers at a quiet port at dawn, with a white domed courthouse across the water.",
          caption: "Tariffs are taxes on imports. In 2026 the Supreme Court ruled on who gets to set them.",
          credit: "AI illustration — not a photograph",
          prompt: "Stacks of weathered shipping containers at a quiet port at dawn, cranes idle, and across grey water a white neoclassical courthouse with columns and a dome, low winter light, a feeling of standoff." },
        { type: "section", head: "What happened", md:
          "On 2 April 2025, a day he called 'Liberation Day', Trump announced [[tariff|tariffs]] on imports from almost every country: a 10% baseline plus higher 'reciprocal' rates for many partners. He relied on [[IEEPA]], a 1977 law that lets a president act against foreign threats in a national emergency, which he had already used for tariffs on Canada, Mexico and China over fentanyl.\n\n" +
          "Businesses sued, led by an Illinois toy maker, Learning Resources. On 20 February 2026 the Supreme Court ruled 6–3 that IEEPA does not let a president impose tariffs at all. The majority held that a president needs clear permission from Congress before imposing tariffs of unlimited size and length." },
        { type: "facts", head: "The ruling", rows: [
          ["Case", "Learning Resources, Inc. v. Trump"],
          ["Decided", "20 Feb 2026, 6–3"],
          ["Majority", "Roberts (writing), Sotomayor, Kagan, Gorsuch, Barrett, Jackson"],
          ["Dissent", "Thomas, Alito, Kavanaugh"]
        ] },
        { type: "section", head: "Plan B, then plan C", md:
          "The White House moved within hours. Trump imposed a temporary surcharge on most imports under [[Section 122]] of the Trade Act of 1974, which allows up to 15% for 150 days. A trade court ruled against the surcharge in May, but the ruling had little practical effect, and the charge ran until it expired on 24 July 2026 when Congress did not extend it.\n\n" +
          "The replacement was ready. From 24 July, new [[Section 301]] tariffs of 10% or 12.5% hit imports from 60 economies, after the US trade representative found they had failed to police goods made with forced labour. Separate [[Section 232]] national-security tariffs, on products such as steel, aluminium and cars, were never part of the court case." },
        { type: "section", head: "Why it happened", md:
          "Trump sees tariffs as an all-purpose tool: for protecting factories, raising revenue and pressing other countries into concessions. Many of the 2025 trade deals, with Japan, South Korea and others, were struck under the threat of higher rates.\n\n" +
          "But the Constitution gives the power to set 'duties' to Congress, not the president. Over decades Congress lent some of it out through laws such as Sections 122, 232 and 301, each with limits. The case was about whether an emergency law could be stretched into a power Congress never clearly gave." },
        { type: "compare", head: "The argument",
          left: { head: "Supporters say", md:
            "Tariffs protect American jobs and industries, raise revenue and give the president leverage that has already produced trade deals. Other countries have long taxed American goods; this levels the field." },
          right: { head: "Critics say", md:
            "Tariffs are taxes paid largely by American importers and consumers, so they raise prices. Setting them by emergency decree bypasses Congress and makes trade unpredictable for businesses and allies." } },
        { type: "section", head: "What's next", md:
          "Trade policy now rests on narrower laws with slower procedures, which courts and Congress can check more easily. In July, Senator Ron Wyden proposed going further: repealing Section 122 and requiring Congress to approve future tariffs under Sections 301, 201 and 232. Its prospects depend on who controls Congress after November.\n\n" +
          "Meanwhile the three-way trade agreement with [[unit:ca]] and [[unit:mx]], known as USMCA, is under review in 2026, and prices remain a live issue in the midterms." }
      ],
      takeaways: [
        "The Supreme Court ruled 6–3 that a 1977 emergency law does not let the president impose tariffs.",
        "The White House replaced them under other trade laws: Section 122 until July 2026, then Section 301.",
        "At the heart of the case is the Constitution, which gives Congress, not the president, the power over import duties."
      ],
      check: { q: "Which law did the Supreme Court say does NOT let a president impose tariffs?",
        choices: ["IEEPA (1977)", "Section 301 of the Trade Act (1974)", "Section 232 (1962)"], answer: 0,
        explain: "The ruling covered tariffs imposed under IEEPA, the emergency-powers law. Sections 301 and 232 are separate trade laws with their own procedures and limits." },
      sources: [
        { title: "Learning Resources, Inc. v. Trump (opinion of the Court)", publisher: "Supreme Court of the United States", url: "https://www.supremecourt.gov/opinions/25pdf/24-1287_4gcj.pdf", date: "2026-02-20" },
        { title: "Supreme Court Rules Against Tariffs Imposed Under IEEPA", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/LSB11398", date: "2026" },
        { title: "From IEEPA to Section 122: What Changed on 20 February 2026", publisher: "Global Trade Alert", url: "https://globaltradealert.org/blog/from-ieepa-to-section-122", date: "2026-02" },
        { title: "US Trade Court Strikes Down Section 122 Tariffs, but Ruling's Fate Is Uncertain and Practical Impact Is Limited", publisher: "Skadden", url: "https://www.skadden.com/insights/publications/2026/05/us-trade-court-strikes-down-section-122-tariffs", date: "2026-05" },
        { title: "USTR finalizes Section 301 forced labor tariffs on 60 economies", publisher: "EY Tax News", url: "https://taxnews.ey.com/news/2026-1607-ustr-finalizes-section-301-forced-labor-tariffs-on-60-economies-additional-tariffs-of-10-percent-or-125-percent-take-effect-24-july-2026", date: "2026-07" },
        { title: "How the Termination of Section 122 Tariffs Impacts Your Supply Chain", publisher: "Z2Data", url: "https://www.z2data.com/insights/how-the-termination-of-section-122-tariffs-impacts-your-supply-chain/", date: "2026-07" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "us-6", kind: "story", asOf: "2026-09-28",
      title: "Force abroad: Venezuela and Iran",
      dek: "In 2026 the United States seized a sitting head of state and went to war with Iran, without a declaration of war from Congress.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us/us-6-hero.webp",
          alt: "Illustration of an aircraft carrier and escort warships at dusk on a calm sea, with helicopters as small silhouettes.",
          caption: "US naval power has been at the centre of both 2026 operations, from the Caribbean to the Strait of Hormuz.",
          credit: "AI illustration — not a photograph",
          prompt: "An aircraft carrier and two escort warships at dusk on a calm tropical sea, three helicopters as small silhouettes against an orange-violet sky, a dark coastline on the horizon, quiet menace rather than combat." },
        { type: "section", head: "What happened: Venezuela", md:
          "From September 2025 the US military began destroying boats in the Caribbean, and later the eastern Pacific, that the administration said were carrying drugs. By 19 September 2026 at least 234 people had been killed or were missing, presumed dead, in 78 strikes, according to public tallies; little evidence about the boats has been made public.\n\n" +
          "Then, early on 3 January 2026, US forces struck targets in Caracas and captured President Nicolás Maduro and his wife, Cilia Flores, in a raid called Operation Absolute Resolve. Maduro, indicted in the US on narco-terrorism charges, was flown to New York; his trial is due in June 2027. Trump said no Americans were killed; Cuba said 32 of its personnel died. The story continues in [[unit:ve]]." },
        { type: "section", head: "What happened: Iran", md:
          "On 28 February 2026 the United States and Israel launched a war on Iran, killing its Supreme Leader, Ali Khamenei, in the opening strikes. Iran fired missiles and drones at Israel and at all six Gulf Arab states, and threatened shipping in the [[Strait of Hormuz]].\n\n" +
          "A ceasefire brokered by [[unit:pk]] took hold on 8 April, but talks in Islamabad failed and the US imposed a naval [[blockade]] on Iranian ports. A memorandum signed on 17 June lifted it. By early July the truce had collapsed over attacks on tankers, and the blockade returned. In September US forces sank Iranian tankers, and Iran attacked ships and fired missiles at a base in Jordan hosting US troops. TIME counted 18 US service members killed by July." },
        { type: "section", head: "Why it happened", md:
          "The administration's case: Maduro ran a criminal state that flooded the US with drugs and stole Venezuela's 2024 election, and Iran was rebuilding its nuclear and missile programmes after US and Israeli strikes in June 2025 while threatening Americans and allies.\n\n" +
          "Critics, including some Republicans, answer that the Constitution gives Congress the power to declare war, that Congress authorised neither operation, and that killing people on boats without public evidence, or removing a foreign leader by force, sets dangerous precedents under international law." },
        { type: "section", head: "Congress and war powers", md:
          "Under the [[War Powers Resolution]], a president must notify Congress within 48 hours of sending forces into hostilities and end them within 60 days unless Congress approves. Congress has voted on the Iran war again and again: both chambers passed a resolution in June directing an end to US involvement, the House passed another in July with four Republicans in favour, and on 24 September a Senate vote failed by 49 to 50.\n\n" +
          "None of these votes ended the conflict. That gap between votes and outcomes is the story: in practice, war-making power has drifted to the president, and Congress has struggled to claw it back." },
        { type: "section", head: "What's next", md:
          "Talks with Iran are stalled and the Strait of Hormuz remains contested, which keeps oil expensive and feeds straight into American prices and the midterms. In Venezuela the US now deals with the acting president, Delcy Rodríguez, who in September thanked Trump at the United Nations for restoring relations. Maduro's trial will test the legal case behind the raid." }
      ],
      takeaways: [
        "US forces captured Venezuela's president on 3 January 2026, after months of lethal strikes on alleged drug boats.",
        "The US–Israeli war on Iran, begun 28 February 2026, has swung from ceasefire to blockade to renewed fighting over the Strait of Hormuz.",
        "Congress has voted repeatedly on war powers, but the president has kept control of the fighting."
      ],
      check: { q: "What does the War Powers Resolution of 1973 require?",
        choices: ["A declaration of war before any use of force", "Notice to Congress, and an end to hostilities within 60 days unless Congress approves", "Supreme Court approval of military operations"], answer: 1,
        explain: "It requires notice within 48 hours and ends unauthorised hostilities after 60 days, with 30 more to withdraw. Presidents of both parties have argued that many operations fall outside it." },
      sources: [
        { title: "The US capture of Nicolás Maduro", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10452/", date: "2026" },
        { title: "Timeline of Boat Strikes and Related Actions", publisher: "Just Security", url: "https://www.justsecurity.org/124002/timeline-vessel-strikes-related-actions/", date: "2026-09" },
        { title: "Conflict With Iran (Global Conflict Tracker)", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/global-conflict-tracker/conflict/confrontation-between-united-states-and-iran", date: "2026-09" },
        { title: "The Strait of Hormuz: Security Developments and Impacts on Oil, Gas, and Other Commodities", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/R45281", date: "2026" },
        { title: "The Eighteen U.S. Service Members Killed in the Iran War", publisher: "TIME", url: "https://time.com/article/2026/07/20/us-service-members-killed-wounded-iran-war-casualties/", date: "2026-07-20" },
        { title: "Iran war powers resolution fails in the Senate", publisher: "NPR", url: "https://www.npr.org/2026/09/24/nx-s1-5980318/senate-iran-war-powers-vote", date: "2026-09-24" },
        { title: "Venezuela's unelected leader Delcy Rodríguez seeks lost legitimacy", publisher: "CNN", url: "https://www.cnn.com/2026/09/23/americas/us-venezuela-rodriguez-un-trump-intl-hnk", date: "2026-09-23" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "us-7", kind: "story", asOf: "2026-09-28",
      title: "The midterms: a verdict on Trump",
      dek: "On 3 November every House seat and a third of the Senate are on the ballot, and the maps were redrawn in the middle of the decade.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us/us-7-hero.webp",
          alt: "Illustration of voters queuing outside a brick school gymnasium on a cold autumn morning, seen from behind.",
          caption: "Midterms usually punish the president's party. Whether 2026 follows the pattern decides the next two years.",
          credit: "AI illustration — not a photograph",
          prompt: "A line of voters in coats queuing outside a brick school gymnasium on a cold November morning, seen from behind, trees with orange leaves, a hand-painted arrow sign with no words, breath visible in the cold air." },
        { type: "section", head: "What happened: the mood", md:
          "[[Midterm elections]], held halfway through a presidential term, usually go badly for the president's party: it has lost House seats in all but two midterms since the Second World War. Trump's approval sits in the high 30s in most averages, and in September Democrats led the [[generic ballot]] by roughly five to eight points.\n\n" +
          "The economy is voters' top concern, the Pew Research Center found. Headline inflation was 3.4% in August, well above the 2.4% core rate, while unemployment was 4.1%. The 43-day government shutdown that ended on 12 November 2025, the longest ever, also left a mark." },
        { type: "section", head: "What happened: the map war", md:
          "Before a single vote was cast, the parties fought over the lines. [[Redistricting]] normally follows the census once a decade, but in 2025 Texas redrew its House map mid-decade to win up to five more Republican seats. California answered with Proposition 50, approved by its voters, to add up to five Democratic seats. Missouri, North Carolina and Ohio also moved for Republicans, and other states followed on both sides.\n\n" +
          "Then, on 29 April 2026, the Supreme Court ruled 6–3 in *Louisiana v. Callais* that Louisiana's second majority-Black district was an unconstitutional racial [[gerrymandering|gerrymander]], sharply narrowing Section 2 of the [[Voting Rights Act]]. Some states began redrawing to remove majority-minority districts before November." },
        { type: "facts", head: "The math", rows: [
          ["House today", "218 Republicans, 214 Democrats, 1 independent, 2 vacant"],
          ["House majority", "218 of 435 seats"],
          ["Senate today", "53 Republicans, 47 Democrats and allies"],
          ["Senate seats up", "35, of which 22 are held by Republicans"],
          ["To win control", "Democrats need a few House seats and a net gain of 4 in the Senate"]
        ] },
        { type: "compare", head: "The pitches",
          left: { head: "Republicans' case", md:
            "Keep the majorities that passed the 2025 tax-and-spending law, tightened the border and backed the president's hard line on Venezuela and Iran. A Democratic House, they warn, would mean gridlock and endless investigations." },
          right: { head: "Democrats' case", md:
            "Prices, tariffs and health-care costs are squeezing families, and a war Congress never authorised has pushed up fuel prices. A Democratic Congress, they argue, would check a president who acts alone." } },
        { type: "section", head: "Why it matters", md:
          "If Democrats win the House, they gain the power to block legislation, control spending bills and issue subpoenas to investigate the administration. If they also win the Senate, they could stall Trump's nominees, including judges. If Republicans hold both chambers, Trump's agenda, and his reliance on executive action, continues with little check from Congress for his last two years." },
        { type: "section", head: "Beyond Congress", md:
          "Thirty-six states also elect governors on 3 November, along with thousands of state legislators, secretaries of state and local officials, many of the people who will run and certify the 2028 presidential election.\n\n" +
          "Far fewer Americans vote in midterms than in presidential years, so getting your own supporters to the polls matters as much as persuading the undecided. That is why both parties' messages are aimed as much at their own bases as at the middle." },
        { type: "section", head: "What's next", md:
          "Polls close on the evening of 3 November, though close races can take days to count. The new Congress is sworn in on 3 January 2027. A dispatch will update this briefing with the results." }
      ],
      takeaways: [
        "The president's party has lost House seats in all but two midterms since the Second World War.",
        "Mid-decade redistricting and the Supreme Court's Callais ruling reshaped the battlefield before voting began.",
        "Democrats need only a handful of House seats, but a net gain of four in the Senate, to take control."
      ],
      check: { q: "What is the 'generic ballot'?",
        choices: ["A poll asking which party voters want to control Congress", "A ballot with no candidates' names on it", "The ballot used for write-in candidates"], answer: 0,
        explain: "Pollsters ask which party people would back for Congress without naming candidates. It's a rough guide to the national mood in a midterm year." },
      sources: [
        { title: "What history tells us about the 2026 midterm elections", publisher: "Brookings", url: "https://www.brookings.edu/articles/what-history-tells-us-about-the-2026-midterm-elections/", date: "2026" },
        { title: "GOP midterm prospects darken as Trump approval falls", publisher: "Brookings", url: "https://www.brookings.edu/articles/gop-midterm-prospects-darken-as-trump-approval-falls/", date: "2026" },
        { title: "As the 2026 Midterms Approach, Economy Is Front and Center", publisher: "Pew Research Center", url: "https://www.pewresearch.org/politics/2026/07/23/as-the-2026-midterms-approach-economy-is-front-and-center/", date: "2026-07-23" },
        { title: "Generic Ballot September 2026: Democrats Widen Lead", publisher: "US Polling Data", url: "https://uspollingdata.com/news/generic-ballot-democrats-lead-widens-september-2026/", date: "2026-09" },
        { title: "High Court Narrows Voting Rights Act in Louisiana v. Callais", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/LSB11431", date: "2026" },
        { title: "Redistricting ahead of the 2026 elections", publisher: "Ballotpedia", url: "https://ballotpedia.org/Redistricting_ahead_of_the_2026_elections", date: "2026" },
        { title: "The longest federal government shutdown in history ends", publisher: "NPR", url: "https://www.npr.org/2025/11/12/g-s1-97607/house-vote-shutdown-end", date: "2025-11-12" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "us-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "Five weeks from the midterms: a war that won't end, tariffs rebuilt, and an economy squeezed by oil.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us/us-8-hero.webp",
          alt: "Illustration of a white capitol dome at dusk seen across a long reflecting pool, with storm clouds breaking.",
          caption: "Five weeks before the midterms, the balance of power in Washington is about to be tested.",
          credit: "AI illustration — not a photograph",
          prompt: "A white capitol dome at dusk seen across a long reflecting pool, storm clouds breaking to reveal a strip of gold light, bare trees, still water, no people, a mood of anticipation." },
        { type: "section", head: "The state of play", md:
          "- **Power:** Republicans hold the White House, the Senate (53–47) and the House (218–214). Trump's approval is in the high 30s.\n" +
          "- **War:** fighting with Iran has resumed around the Strait of Hormuz; a Senate bid to end it failed 49–50 on 24 September.\n" +
          "- **Trade:** Section 301 tariffs of 10% or 12.5% cover 60 economies, and the USMCA agreement with Canada and Mexico is under review.\n" +
          "- **Economy:** inflation 3.4% and unemployment 4.1% in August. Kevin Warsh has chaired the Federal Reserve since May.\n" +
          "- **Allies:** a January row over Trump's push to acquire Greenland ended with a 'framework' agreed with NATO's secretary-general at Davos, and threatened tariffs on eight European countries were dropped." },
        { type: "section", head: "Three scenarios for November", md:
          "- **A divided Congress.** Democrats win the House, Republicans keep the Senate. Expect investigations, spending standoffs and more war-powers votes, while Trump leans even harder on executive action.\n" +
          "- **A Democratic sweep.** Democrats win both chambers. They could block nominees and pass limits on tariffs or the Iran war, though Trump can [[veto]] them, and overriding a veto takes two-thirds of both chambers.\n" +
          "- **Republicans hold on.** Both chambers stay Republican. Trump enters his last two years with Congress on side, and the 2028 race becomes a contest to succeed him." },
        { type: "section", head: "Three open questions", md:
          "- **Can the Iran war be ended?** Every truce so far has broken down over the Strait of Hormuz. A lasting deal would ease oil prices before the vote; a wider war would do the opposite.\n" +
          "- **Will prices ease?** Core inflation is at its lowest since 2021, but energy keeps the headline rate high. The Fed under Warsh has to judge which number matters more.\n" +
          "- **How far can a president go alone?** After the tariff ruling, the question is whether the courts or a new Congress set firmer limits on emergency powers and war powers, or whether the drift toward the White House continues." },
        { type: "section", head: "What to look for on election night", md:
          "Three things will tell you how the night is going. First, the swing House districts in the suburbs, which tend to move with the national mood. Second, the Senate races in Republican-held states, the hardest part of the Democrats' map. Third, the redrawn districts in Texas and California: whether they deliver the seats their designers expected will show whether the map war paid off." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **3 Nov 2026:** midterm elections\n" +
          "- **3 Jan 2027:** the new Congress is sworn in\n" +
          "- **June 2027:** Maduro's trial due to begin in New York\n" +
          "- **Ongoing:** Iran talks and the Strait of Hormuz; the USMCA review\n" +
          "- **Early 2028:** the first presidential primaries" },
        { type: "section", head: "Connections", md:
          "The United States runs through almost every other unit. Look for it in [[unit:cn]] (the trade truce and two summits this year), [[unit:ir]] and [[unit:il]] (the war), [[unit:ve]] (the raid and its aftermath), [[unit:ca]] and [[unit:mx]] (tariffs and the USMCA review) and [[unit:ua]] (peace talks with Russia)." }
      ],
      takeaways: [
        "Republicans control Washington going into the midterms, but with low approval and thin majorities.",
        "The Iran war, tariffs and prices are the issues most likely to decide the vote.",
        "November's result decides whether Congress checks Trump's last two years in office."
      ],
      check: { q: "What does it take for Congress to override a presidential veto?",
        choices: ["A simple majority of both chambers", "Two-thirds of both chambers", "Three-fifths of the Senate"], answer: 1,
        explain: "Two-thirds of both the House and the Senate. That's why a party that wins Congress narrowly still can't force laws past a president who opposes them." },
      sources: [
        { title: "Party Breakdown", publisher: "House Press Gallery", url: "https://pressgallery.house.gov/member-data/party-breakdown", date: "2026-09" },
        { title: "Iran war powers resolution fails in the Senate", publisher: "NPR", url: "https://www.npr.org/2026/09/24/nx-s1-5980318/senate-iran-war-powers-vote", date: "2026-09-24" },
        { title: "The Employment Situation — August 2026", publisher: "U.S. Bureau of Labor Statistics", url: "https://www.bls.gov/news.release/archives/empsit_09042026.htm", date: "2026-09-04" },
        { title: "Kevin Warsh sworn in as new US Fed chair", publisher: "Al Jazeera", url: "https://www.aljazeera.com/economy/2026/5/22/kevin-warsh-sworn-in-as-new-us-fed-chair", date: "2026-05-22" },
        { title: "Trump says he reached Greenland deal 'framework' with NATO, backs off Europe tariffs", publisher: "CNBC", url: "https://www.cnbc.com/2026/01/21/trump-tariffs-nato-greenland-davos.html", date: "2026-01-21" },
        { title: "USTR finalizes Section 301 forced labor tariffs on 60 economies", publisher: "EY Tax News", url: "https://taxnews.ey.com/news/2026-1607-ustr-finalizes-section-301-forced-labor-tariffs-on-60-economies-additional-tariffs-of-10-percent-or-125-percent-take-effect-24-july-2026", date: "2026-07" }
      ]
    }
  ]
});
