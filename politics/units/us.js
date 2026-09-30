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
          "On paper that is unified government. In practice the margins are thin, the courts have pushed back on some of Trump's biggest moves, and the whole House of Representatives and a third of the Senate face voters on 3 November 2026. Briefings [[lesson:us-5|#]] to 7 tell the three stories that define the year." },
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
          "A 6–3 conservative court is not a rubber stamp, though. In February 2026 it struck down Trump's emergency tariffs, with three conservatives joining the three liberals. You'll meet that case in [[lesson:us-5]]." },
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

    /* ---------------------------------------------------------- 9 */
    {
      id: "us-9", kind: "founding", asOf: "2026-09-28",
      title: "Revolution and the Constitution",
      dek: "Thirteen colonies broke with Britain, nearly fell apart, and then wrote the rulebook America still argues over.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us/us-9-hero.webp",
          alt: "Illustration of a Georgian brick assembly hall with tall arched windows, rows of green-covered tables and empty wooden chairs, and quill pens and papers left on the tables.",
          caption: "Independence Hall in Philadelphia, where the Declaration of Independence was adopted in 1776 and the Constitution written in 1787.",
          credit: "AI illustration — not a photograph",
          prompt: "An 18th-century Georgian assembly room with tall arched windows, wooden panelling, rows of tables covered in green baize cloth, empty wooden chairs, quill pens, inkwells and scattered papers, warm summer light, historic and hushed, no people, no flags, no legible text." },
        { type: "timeline", head: "From colonies to a constitution", items: [
          ["1765", "Stamp Act protests: 'no taxation without representation'"],
          ["1775", "Fighting begins at Lexington and Concord"],
          ["1776", "Declaration of Independence, 4 July"],
          ["1781", "British surrender at Yorktown; Articles of Confederation in force"],
          ["1787", "Constitutional Convention in Philadelphia"],
          ["1789", "George Washington becomes the first president"],
          ["1791", "The Bill of Rights is ratified"]
        ] },
        { type: "section", head: "Colonies that governed themselves", md:
          "By the 1760s Britain's thirteen colonies along the Atlantic coast held about two million people, including hundreds of thousands of enslaved Africans. They had their own elected assemblies and were used to running their own affairs. After an expensive war with France, Britain tried to make them pay more toward their defence, taxing stamps, then tea. Colonists answered that Parliament, where they had no members, had no right to tax them: 'no taxation without representation'. Boycotts, riots and the Boston Tea Party of 1773 followed, and Britain responded with troops and punitive laws." },
        { type: "section", head: "Independence", md:
          "Fighting broke out in Massachusetts in April 1775. On 4 July 1776 the Continental Congress adopted the Declaration of Independence, drafted mainly by Thomas Jefferson, which proclaimed that 'all men are created equal' with rights to 'life, liberty and the pursuit of happiness', and that governments draw their power from the consent of the governed. Its author owned slaves, a contradiction that would haunt the country. With decisive help from France, George Washington's army forced a British surrender at Yorktown in 1781, and Britain recognised independence in 1783." },
        { type: "section", head: "A government too weak to govern", md:
          "The first national charter, the Articles of Confederation, created a loose league of sovereign states. Congress could not tax, raise an army on its own, or regulate trade, and every state had one vote. The new country could not pay its war debts, states fought over trade, and in 1786 an uprising of indebted farmers in Massachusetts, Shays' Rebellion, alarmed the elite. Leaders such as James Madison and Alexander Hamilton concluded that the union needed a stronger central government." },
        { type: "section", head: "The Philadelphia bargain", md:
          "Fifty-five delegates met in Philadelphia in the summer of 1787 and, rather than amending the Articles, wrote a new constitution. It rested on compromises. Big and small states split the difference with a House elected by population and a Senate with two members per state. Slave states won the 'three-fifths compromise', counting enslaved people as three-fifths of a person for representation, and a guarantee that the slave trade could continue until 1808. The president would be chosen by an Electoral College rather than directly by voters or by Congress." },
        { type: "section", head: "Ratification and rights", md:
          "The Constitution needed nine states to ratify it. Supporters, the Federalists, made their case in essays still studied today, the Federalist Papers; opponents feared a distant government that could crush liberty. The deal that won was a promise of amendments protecting individual rights. The first ten, the Bill of Rights, ratified in 1791, guarantee freedom of speech, religion and the press, the right to bear arms, jury trials and protection from unreasonable searches." },
        { type: "compare", head: "Two ways to read the founding",
          left: { head: "A revolution for liberty", md:
            "The founders created the first large modern republic, with checks on power and guaranteed rights that inspired democrats around the world." },
          right: { head: "A compromise with injustice", md:
            "The new republic protected slavery, excluded women and dispossessed Native Americans; its ideals were extended to most people only through later struggle." } },
        { type: "section", head: "Why it still matters", md:
          "Americans still fight over the founding. Judges who follow 'originalism' try to apply the Constitution as its framers understood it; others see a living document. The Electoral College, the Senate's equal representation of states and the Second Amendment all trace back to 1787, and all remain at the centre of political battles today." }
      ],
      takeaways: [
        "Thirteen British colonies declared independence in 1776 over taxation and self-government.",
        "The weak Articles of Confederation were replaced by the Constitution, written in 1787.",
        "Its compromises, from the Senate to the Electoral College and the protection of slavery, still shape US politics."
      ],
      check: { q: "What was the 'Great Compromise' at the 1787 convention?",
        choices: ["Ending slavery", "A House elected by population and a Senate with two members per state", "Electing the president directly"], answer: 1,
        explain: "Large and small states compromised on a two-chamber Congress: population-based representation in the House, equal representation in the Senate." },
      sources: [
        { title: "American Revolution", publisher: "Britannica", url: "https://www.britannica.com/event/American-Revolution", date: "n.d." },
        { title: "Constitution of the United States", publisher: "National Archives", url: "https://www.archives.gov/founding-docs/constitution", date: "n.d." },
        { title: "The Bill of Rights: A Transcription", publisher: "National Archives", url: "https://www.archives.gov/founding-docs/bill-of-rights-transcript", date: "n.d." }
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
          "This is not just history. In April 2026 the Supreme Court sharply narrowed a key section of the Voting Rights Act, reopening fights over how election districts are drawn. That is part of [[lesson:us-7]]." },
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

    /* ---------------------------------------------------------- 10 */
    {
      id: "us-10", kind: "past", asOf: "2026-09-28",
      title: "Slavery, civil war and Reconstruction",
      dek: "The question the founders dodged split the country in two, killed some 620,000 soldiers, and left a legacy still being fought over.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us/us-10-hero.webp",
          alt: "Illustration of a quiet battlefield at dawn with a split-rail fence, a stone wall, rolling fields and mist, and a lone cannon on a ridge.",
          caption: "Gettysburg, Pennsylvania, site of the Civil War's bloodiest battle in July 1863.",
          credit: "AI illustration — not a photograph",
          prompt: "A quiet rolling battlefield at dawn, a weathered split-rail fence and low stone wall crossing green fields, mist in the hollows, a lone 19th-century cannon on a ridge, soft grey-gold light, solemn and still, no people, no flags, no legible text." },
        { type: "facts", head: "The war in numbers", rows: [
          ["Enslaved people in 1860", "About 4 million"],
          ["States that seceded", "11"],
          ["War", "April 1861 – April 1865"],
          ["Soldiers killed", "About 620,000 (some estimates are higher)"],
          ["Amendments", "13th (abolition, 1865), 14th (citizenship and equal protection, 1868), 15th (vote regardless of race, 1870)"]
        ] },
        { type: "section", head: "A house divided", md:
          "By 1860 about four million people were enslaved in the southern states, where cotton picked by slaves was the country's most valuable export. The North had abolished slavery and was industrialising. Each time the country expanded westward, the question was whether new territories would allow slavery, and a series of compromises failed to settle it. In 1857 the Supreme Court ruled in the Dred Scott case that Black Americans could not be citizens. Abraham Lincoln, whose new Republican Party opposed slavery's expansion, won the 1860 election without carrying a single southern state." },
        { type: "section", head: "Secession and war", md:
          "Eleven southern states seceded and formed the Confederacy, whose leaders said openly that it was founded to protect slavery. War began in April 1861. The North had more people, factories and railways; the South had skilled generals and fought on home ground. In 1863 Lincoln's Emancipation Proclamation declared slaves in rebel areas free, and nearly 200,000 Black soldiers joined the Union army. After Gettysburg and the fall of Vicksburg that July, the tide turned. The Confederacy surrendered in April 1865; days later Lincoln was assassinated." },
        { type: "section", head: "Reconstruction", md:
          "Three amendments rewrote the Constitution: the 13th abolished slavery, the 14th made everyone born in the US a citizen with 'equal protection of the laws', and the 15th barred denying the vote on account of race. Under federal troops, Black men voted and held office across the South; some 2,000 served, including 16 in Congress. But white resistance was fierce and often violent, led by groups such as the Ku Klux Klan. In 1877, in a deal to settle a disputed presidential election, the federal government withdrew its troops." },
        { type: "section", head: "Jim Crow", md:
          "Southern states then stripped most Black citizens of the vote through poll taxes, literacy tests and intimidation, and imposed segregation by law, known as Jim Crow. The Supreme Court upheld 'separate but equal' in 1896. Thousands of Black Americans were lynched over the following decades. Millions moved north in the Great Migration. Undoing this system took the civil rights movement of the 1950s and 1960s, the subject of the next briefing." },
        { type: "compare", head: "How Americans remember it",
          left: { head: "The consensus of historians", md:
            "The war was fought over slavery. Its outcome freed four million people, and Reconstruction was a bold, unfinished attempt at multiracial democracy." },
          right: { head: "The 'Lost Cause' myth", md:
            "For a century many white southerners taught that the war was about states' rights and honour. That view shaped monuments, textbooks and politics long after it was discredited." } },
        { type: "section", head: "Why it still matters", md:
          "The 14th Amendment is the basis of much of modern American law, from desegregation to same-sex marriage, and its promise of birthright citizenship is now contested in the courts. Battles over Confederate monuments, voting rules in the South and the [[voting-rights-act|Voting Rights Act]] all echo this era. Political scientists also trace today's party map, with the South solidly Republican, to the long aftermath of the war." }
      ],
      takeaways: [
        "Slavery divided the country until eleven southern states seceded after Lincoln's election in 1860.",
        "The Civil War killed about 620,000 soldiers and ended slavery; three amendments promised equal citizenship.",
        "Reconstruction was abandoned in 1877, and Jim Crow segregation lasted into the 1960s."
      ],
      check: { q: "What did the 14th Amendment do?",
        choices: ["Abolished slavery", "Made everyone born in the US a citizen and promised equal protection of the laws", "Gave women the vote"], answer: 1,
        explain: "The 13th Amendment abolished slavery; the 14th, ratified in 1868, established birthright citizenship and equal protection." },
      sources: [
        { title: "American Civil War", publisher: "Britannica", url: "https://www.britannica.com/event/American-Civil-War", date: "n.d." },
        { title: "Reconstruction", publisher: "History.com", url: "https://www.history.com/articles/reconstruction", date: "n.d." },
        { title: "The Civil War: Facts", publisher: "American Battlefield Trust", url: "https://www.battlefields.org/learn/articles/civil-war-facts", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "us-11", kind: "past", asOf: "2026-09-28",
      title: "The civil rights movement",
      dek: "In the 1950s and 1960s, Black Americans and their allies dismantled legal segregation through courts, boycotts, marches and new federal laws.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us/us-11-hero.webp",
          alt: "Illustration of a long line of marchers seen from behind crossing a steel arch bridge over a river under a grey sky.",
          caption: "The march from Selma to Montgomery, Alabama, in 1965 helped win the Voting Rights Act.",
          credit: "AI illustration — not a photograph",
          prompt: "A long column of marchers in 1960s coats and hats seen from behind, walking across a steel arch bridge over a wide river under a grey overcast sky, determined and peaceful, no faces visible, no flags, no legible text or signs." },
        { type: "timeline", head: "Key moments", items: [
          ["1954", "Brown v. Board of Education ends school segregation in law"],
          ["1955–56", "Montgomery bus boycott"],
          ["1963", "March on Washington: 'I have a dream'"],
          ["1964", "Civil Rights Act"],
          ["1965", "Selma marches; Voting Rights Act"],
          ["1968", "Martin Luther King Jr. assassinated; Fair Housing Act"]
        ] },
        { type: "section", head: "Segregation and its challengers", md:
          "In the 1950s the South was still segregated by law: separate schools, buses, restaurants and even drinking fountains, and most Black southerners could not vote. The NAACP, founded in 1909, fought segregation in court. In 1954, in Brown v. Board of Education, the Supreme Court unanimously ruled that segregated public schools were unconstitutional. Many southern states resisted; in 1957 President Eisenhower sent troops to escort nine Black students into a high school in Little Rock, Arkansas." },
        { type: "section", head: "Nonviolent protest", md:
          "In 1955 Rosa Parks was arrested in Montgomery, Alabama, for refusing to give up her bus seat to a white man. A year-long boycott, led by a young pastor, Martin Luther King Jr., ended with the buses desegregated. The movement spread through sit-ins at lunch counters, 'freedom rides' on interstate buses and mass marches, met often by police dogs, fire hoses, bombings and murders. Television carried the violence into homes across the country and the world, turning public opinion." },
        { type: "section", head: "The great laws", md:
          "In August 1963 about 250,000 people joined the March on Washington, where King gave his 'I have a dream' speech. After President Kennedy's assassination, Lyndon Johnson pushed the Civil Rights Act of 1964 through Congress, banning discrimination in public places and employment. After state troopers attacked peaceful marchers at Selma in March 1965, Congress passed the [[voting-rights-act|Voting Rights Act]], which suspended literacy tests and required southern states to get federal approval before changing voting rules. Black voter registration in the South soared." },
        { type: "section", head: "Beyond the South", md:
          "Legal equality did not end discrimination in housing, jobs and policing, in the North as much as the South. Riots broke out in many cities in the mid-1960s. Malcolm X and the Black Power movement rejected King's integrationist approach. King himself turned to poverty and the Vietnam War before he was assassinated in Memphis in April 1968. The movement inspired others: for women's rights, for Latino farmworkers, for Native Americans and later for gay rights." },
        { type: "compare", head: "Debates that continue",
          left: { head: "A movement completed?", md:
            "The legal pillars of segregation fell, Black political representation grew, and the country elected a Black president in 2008." },
          right: { head: "A movement unfinished", md:
            "Large gaps in wealth, health and incarceration remain, and courts have narrowed the Voting Rights Act and ended race-conscious admissions." } },
        { type: "section", head: "Why it still matters", md:
          "Many of today's fights are about the movement's legacy. In 2013 the Supreme Court struck down the part of the Voting Rights Act requiring federal approval of changes, in 2023 it ended affirmative action in university admissions, and in 2026 it narrowed the law further in Louisiana v. Callais. Debates over policing, voting rules and diversity programmes, and over how schools teach this history, all run back to the 1960s." }
      ],
      takeaways: [
        "Brown v. Board of Education (1954) ruled school segregation unconstitutional.",
        "Nonviolent protest led by figures such as Rosa Parks and Martin Luther King Jr. won the Civil Rights Act (1964) and Voting Rights Act (1965).",
        "The movement's legacy, from voting rules to affirmative action, is still contested in courts and politics."
      ],
      check: { q: "What did the Voting Rights Act of 1965 do?",
        choices: ["Gave women the vote", "Suspended literacy tests and required southern states to get federal approval for voting changes", "Lowered the voting age to 18"], answer: 1,
        explain: "It attacked the tools used to keep Black southerners from voting, including literacy tests, and placed changes under federal review." },
      sources: [
        { title: "American civil rights movement", publisher: "Britannica", url: "https://www.britannica.com/event/American-civil-rights-movement", date: "n.d." },
        { title: "Civil Rights Act (1964)", publisher: "National Archives", url: "https://www.archives.gov/milestone-documents/civil-rights-act", date: "n.d." },
        { title: "Voting Rights Act (1965)", publisher: "National Archives", url: "https://www.archives.gov/milestone-documents/voting-rights-act", date: "n.d." }
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

    /* ---------------------------------------------------------- 12 */
    {
      id: "us-12", kind: "spotlight", asOf: "2026-09-28",
      title: "A nation of immigrants, divided",
      dek: "Immigration built the United States. Who gets to come, and what to do about millions living there without papers, now divides it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us/us-12-hero.webp",
          alt: "Illustration of a large red-brick immigration hall with arched windows on an island in a harbour, with a city skyline across the water.",
          caption: "Ellis Island in New York harbour processed some 12 million immigrants between 1892 and 1954.",
          credit: "AI illustration — not a photograph",
          prompt: "A grand red-brick and limestone immigration building with four copper-domed towers and tall arched windows on a small island in a harbour, a city skyline across the water, soft morning light and calm water, historic and hopeful, no people close up, no flags, no legible text." },
        { type: "facts", head: "Immigration today", rows: [
          ["Foreign-born residents", "About 52 million, 15.4% of residents (2025), now declining"],
          ["Unauthorised immigrants", "Estimated 11–14 million before 2025"],
          ["Largest country of origin", "Mexico"],
          ["Main law", "Immigration and Nationality Act of 1965"],
          ["Children born in the US", "Citizens under the 14th Amendment, a rule now being litigated"]
        ] },
        { type: "section", head: "Waves of newcomers", md:
          "Apart from Native Americans and the descendants of enslaved Africans, nearly all Americans descend from immigrants. The Irish and Germans came in the mid-1800s; Italians, Poles, Jews and others from southern and eastern Europe around 1900. Each wave met hostility. The Chinese Exclusion Act of 1882 barred Chinese workers, and in 1924 Congress imposed quotas that favoured northern Europeans and nearly shut the door for decades." },
        { type: "section", head: "The 1965 turning point", md:
          "The Immigration and Nationality Act of 1965, passed in the civil rights era, abolished the national-origin quotas and favoured family ties and skills. Few expected its effect: immigration rose sharply and shifted to Latin America and Asia. Since then the foreign-born share has climbed from about 5% to a record of nearly 16% in early 2025, before falling slightly under Trump. In 1986 Ronald Reagan signed a law that gave legal status to about 3 million unauthorised immigrants while promising tougher enforcement." },
        { type: "section", head: "The unresolved question", md:
          "Since then Congress has repeatedly failed to pass a comprehensive reform, in 2006, 2007 and 2013. Millions of people, many of whom have lived in the country for decades and have American-born children, have no path to legal status. Presidents have acted on their own: Barack Obama protected people brought as children, the 'Dreamers', through a programme called DACA in 2012, while border arrivals and asylum claims surged in the late 2010s and again after 2021." },
        { type: "section", head: "Trump's second term", md:
          "Donald Trump returned in 2025 promising the largest deportation operation in American history. His administration expanded detention, deployed troops to the border, closed most asylum routes, sought to end temporary protected status for hundreds of thousands of people, and signed an order to end birthright citizenship for some children of immigrants, which courts blocked. Border crossings fell to their lowest levels in decades. Large-scale raids on workplaces and cities, including a 2025 raid on a Hyundai battery plant in Georgia that detained hundreds of South Korean workers, provoked protests and legal fights." },
        { type: "compare", head: "Two views",
          left: { head: "Restrictionists", md:
            "A country must control its borders. Illegal immigration undercuts wages, strains services and rewards lawbreaking; enforcement comes first." },
          right: { head: "Advocates of openness", md:
            "Immigrants fill jobs, start businesses and pay taxes. Mass deportation is cruel and costly, and long-settled people deserve a path to citizenship." } },
        { type: "section", head: "Why it matters", md:
          "Immigration reshapes American politics. It helped drive Trump's victories, and Latino voters, once solidly Democratic, shifted toward Republicans in 2024. It affects relations with [[unit:mx|Mexico]] and [[unit:ve|Venezuela]], and it sits at the heart of the 2026 midterm campaign." }
      ],
      takeaways: [
        "Immigration built the US, but each wave met hostility, and quotas nearly shut the door from 1924 to 1965.",
        "The 1965 law opened immigration to Latin America and Asia; the foreign-born share is now about 15%.",
        "Congress has failed to settle the status of millions of unauthorised immigrants; Trump's second term brought mass deportation."
      ],
      check: { q: "What did the 1965 Immigration and Nationality Act do?",
        choices: ["Banned all immigration", "Abolished national-origin quotas that favoured northern Europeans", "Built a border wall"], answer: 1,
        explain: "The law replaced the 1924 quota system with preferences for family ties and skills, opening the way to immigration from Latin America and Asia." },
      sources: [
        { title: "Key findings about U.S. immigrants", publisher: "Pew Research Center", url: "https://www.pewresearch.org/short-reads/2025/08/21/key-findings-about-us-immigrants/", date: "2025-08-21" },
        { title: "Immigration and Nationality Act of 1965", publisher: "US House of Representatives: History, Art & Archives", url: "https://history.house.gov/Historical-Highlights/1951-2000/Immigration-and-Nationality-Act-of-1965/", date: "n.d." },
        { title: "U.S. Immigration Policy Under Trump", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/backgrounder/us-immigration-debate-0", date: "2025" }
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
