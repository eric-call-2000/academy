/* ============================================================
   Relationship — United States & Argentina 🇺🇸🇦🇷
   'Braden or Perón', the Falklands and Menem's 'carnal
   relations'; defaults, vulture funds and record IMF loans; and
   Trump's $20 billion rescue of Milei and the corridor that
   followed. The bailout night is in ar-6; China is in ar_cn.
   Research note and sources: tools/research/us_ar.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("us_ar", {
  id: "us_ar",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_ar-1", kind: "relation", asOf: "2026-10-01",
      title: "Braden, the Falklands and 'carnal relations'",
      dek: "An American ambassador's attack on Perón handed him the presidency. In 1982 Washington sided with Britain over the Falklands. Then in the 1990s Argentina declared a 'carnal relationship' with the US.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ar/us_ar-1-hero.webp",
          alt: "Illustration of a huge crowd filling a plaza in front of a pink government palace in Buenos Aires in the 1940s.",
          caption: "Perón turned an American ambassador's opposition into a campaign slogan in 1946.",
          credit: "AI illustration — not a photograph",
          prompt: "A huge 1940s crowd filling a plaza in front of a pink neoclassical government palace in Buenos Aires, men in hats, banners without text, palm trees, sunny sky, historical documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "A pendulum", items: [
          ["1945", "Ambassador Spruille Braden campaigns against Perón"],
          ["Feb 1946", "Perón wins with 52%: 'Braden or Perón'"],
          ["1976–83", "US first backs, then criticises, the military junta"],
          ["Apr 1982", "Haig's shuttle diplomacy; the US then backs Britain"],
          ["1990", "Menem's minister speaks of 'carnal relations'"],
          ["1998", "Argentina named a major non-NATO ally"]
        ] },
        { type: "section", head: "Braden or Perón", md:
          "Argentina stayed neutral for most of the Second World War, which Washington took as sympathy for the Axis. In 1945 the US ambassador, Spruille Braden, openly backed the opposition to Colonel Juan Perón, and the State Department published a 'Blue Book' accusing Perón's circle of collaborating with the Nazis. Perón turned it into a slogan: 'Braden or Perón'. He won the February 1946 election with 52% (see [[lesson:ar-10]]). For decades, Peronists cited Braden as proof that America meddles in Argentine politics." },
        { type: "section", head: "Juntas and human rights", md:
          "When Argentina's military seized power in 1976 and began its 'Dirty War', Secretary of State Henry Kissinger reportedly told the junta's foreign minister to act quickly before Congress returned. Under President Carter, Washington changed course, cutting military aid over human rights abuses and documenting disappearances. Declassified US files later helped Argentine courts convict junta members (see [[lesson:ar-11]])." },
        { type: "section", head: "The Falklands", md:
          "In April 1982 Argentina's junta invaded the Falkland Islands, believing the US would stay neutral; it had backed America's anti-communist operations in Central America. Secretary of State Alexander Haig shuttled between London and Buenos Aires, while privately assuring Margaret Thatcher 'We are not impartial'. When his mediation failed at the end of April, Washington openly backed Britain, suspended aid to Argentina and quietly supplied British forces (see [[lesson:gb_ar-1]]). Many Argentines saw it as betrayal." },
        { type: "section", head: "Carnal relations", md:
          "After democracy returned, President Carlos Menem bet on the United States. He tied the peso to the dollar, privatised state companies and sent warships to the 1991 Gulf War. His foreign minister, Guido di Tella, described the relationship as 'carnal'. In 1998 the US named Argentina a major non-NATO ally, the only one in Latin America at the time. The pendulum swung back under the Kirchners, who clashed with Washington and leaned toward Venezuela and China." },
        { type: "section", head: "Terror in Buenos Aires", md:
          "The two countries also share a fight against terrorism. In 1992 a bomb destroyed Israel's embassy in Buenos Aires, and in 1994 another killed 85 people at the AMIA Jewish community centre (see [[lesson:ar-12]]). Argentine prosecutors, backed by US and Israeli intelligence, blamed Iran and Hezbollah. The cases have been a constant in Argentina's relations with Washington and Tehran." },
        { type: "compare", head: "The Argentine pendulum",
          left: { head: "Pro-American", md:
            "Menem, Macri and Milei: align with Washington for investment and security." },
          right: { head: "Independent", md:
            "Perón and the Kirchners: keep distance, defend sovereignty, seek other partners." } },
        { type: "section", head: "Why it matters", md:
          "Argentina has swung between embracing and defying the United States. Milei sits at the far pro-American end of the pendulum." }
      ],
      takeaways: [
        "US Ambassador Braden's campaign against Perón helped Perón win in 1946.",
        "In 1982 the US backed Britain in the Falklands War after Haig's mediation failed.",
        "Under Menem, Argentina declared 'carnal relations' with the US and became a major non-NATO ally in 1998."
      ],
      check: { q: "What was 'Braden or Perón'?",
        choices: ["A trade dispute", "Perón's 1946 campaign slogan against the US ambassador", "A Falklands battle"], answer: 1,
        explain: "Perón cast the election as a choice between himself and American interference." },
      sources: [
        { title: "Spruille Braden", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Spruille_Braden", date: "n.d." },
        { title: "Reagan on the Falkland/Malvinas: 'Give Maggie enough to carry on'", publisher: "National Security Archive", url: "https://nsarchive2.gwu.edu/NSAEBB/NSAEBB374/", date: "2012" },
        { title: "Crisis in the South Atlantic: The Reagan Administration and the Anglo-Argentine War of 1982", publisher: "Office of the Historian", url: "https://history.state.gov/milestones/1981-1988/south-atlantic", date: "n.d." },
        { title: "Of 'carnal' relations and pendulum politics in U.S.–Argentine relations", publisher: "Diplomatic Courier", url: "https://www.diplomaticourier.com/posts/carnal-relations-and-pendulum-politics-u-s--argentine-relations", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_ar-2", kind: "relation", asOf: "2026-10-01",
      title: "Defaults, vulture funds and the IMF",
      dek: "Argentina's debts have tied it to Washington for decades: the IMF that Americans dominate, the New York courts that judge its bonds, and the hedge funds that chased it around the world.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ar/us_ar-2-hero.webp",
          alt: "Illustration of a large grey naval training ship tied up at a foreign port, with officials on the dock.",
          caption: "In 2012 a creditor had an Argentine navy ship impounded in Ghana.",
          credit: "AI illustration — not a photograph",
          prompt: "A tall three-masted naval training sailing ship tied up at a tropical African port, officials with documents on the dock, cranes and containers behind, hazy afternoon light, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Debt and Washington", items: [
          ["Dec 2001", "Argentina defaults on about $100 billion"],
          ["2005 & 2010", "Debt swaps; holdouts led by Elliott refuse"],
          ["2012", "Navy ship impounded in Ghana at creditors' request"],
          ["Jul 2014", "Judge Griesa's ruling pushes Argentina into default"],
          ["2016", "Macri settles with the holdouts"],
          ["2018", "Record IMF loan, backed by Trump"]
        ] },
        { type: "section", head: "The 2001 crash", md:
          "Menem's peg of the peso to the dollar ended in disaster. In December 2001, with savings frozen and riots in the streets, Argentina defaulted on about $100 billion of debt, then the biggest sovereign default in history (see [[lesson:ar-3]]). Many Argentines blamed the IMF, and by extension Washington, for pushing austerity and then refusing more help. Néstor Kirchner later paid off the IMF in full in 2006 to be free of it." },
        { type: "section", head: "Vulture funds", md:
          "In 2005 and 2010 Argentina offered creditors new bonds worth about 30 cents on the dollar; 92% accepted. A minority of 'holdouts', led by NML Capital, part of Paul Singer's Elliott Management, sued in New York, where the bonds had been issued. They chased Argentine assets worldwide; in 2012 they persuaded a court in Ghana to hold the Argentine navy's training ship Libertad. Argentina's government called them 'vulture funds'." },
        { type: "section", head: "Judge Griesa", md:
          "In 2014 US District Judge Thomas Griesa ruled that Argentina could not pay the bondholders who had accepted the swap unless it also paid the holdouts in full. Cristina Kirchner refused, and in July 2014 Argentina defaulted again on restructured debt. The case showed how much power American courts hold over countries that borrow under New York law. In 2016 Mauricio Macri settled with the holdouts, paying billions, and Argentina returned to the markets." },
        { type: "section", head: "Record IMF loans", md:
          "When the peso crashed in 2018, Macri turned to the IMF. With strong backing from the Trump administration, the Fund agreed a loan that reached $57 billion, the largest in its history, of which about $44 billion was paid out before Macri lost the 2019 election. The United States is the IMF's largest shareholder. In April 2025 the Fund approved another $20 billion programme for Milei, again with Washington's support." },
        { type: "section", head: "Living with the Fund", md:
          "Macri's loan outlived him. In 2022 the Peronist government of Alberto Fernández, unable to repay, signed a new IMF programme of about $45 billion to refinance it, which split his own coalition: Cristina Kirchner's son Máximo resigned as the government's leader in Congress in protest. By the time Milei took office in December 2023, Argentina was the IMF's largest debtor by far, and every programme review was watched as closely in Buenos Aires as in Washington." },
        { type: "compare", head: "Who's to blame?",
          left: { head: "Argentina's critics", md:
            "Decades of overspending, money-printing and broken promises drove the defaults." },
          right: { head: "Argentina's defenders", md:
            "IMF austerity, harsh creditors and US courts made each crisis worse." } },
        { type: "section", head: "Why it matters", md:
          "Because Argentina owes so much to the IMF and borrows under American law, Washington has unusual leverage over it, which Trump used openly in 2025." }
      ],
      takeaways: [
        "Argentina's 2001 default, about $100 billion, was then the biggest in history.",
        "US hedge funds and a New York judge pushed Argentina into another default in 2014.",
        "With US backing, the IMF made Argentina its biggest-ever loan in 2018."
      ],
      check: { q: "Why could a New York judge decide how Argentina paid its debts?",
        choices: ["Argentina is a US territory", "Its bonds had been issued under New York law", "The IMF asked him to"], answer: 1,
        explain: "Borrowing under New York law gave American courts jurisdiction over the disputes." },
      sources: [
        { title: "When the Holdouts Hurt", publisher: "Harvard Political Review", url: "https://harvardpolitics.com/argentina-holdouts-hurt/", date: "n.d." },
        { title: "Argentina's Struggle for Stability", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/backgrounders/argentinas-struggle-stability", date: "n.d." },
        { title: "Argentina debt settlement", publisher: "Fortune", url: "https://fortune.com/2016/02/29/argentina-debt-settlement", date: "2016-02-29" },
        { title: "Argentina: Overview and U.S. Relations", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/R48303", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_ar-3", kind: "relation", asOf: "2026-10-01",
      title: "Trump's rescue of Milei",
      dek: "Trump offered Argentina $20 billion and told voters his help depended on Milei winning. Milei won. Since then the two have signed a trade deal and an energy corridor, and Argentina is Washington's closest friend in South America.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ar/us_ar-3-hero.webp",
          alt: "Illustration of gas processing plants and pipelines across a dry Patagonian plain at sunset.",
          caption: "Most of the new US financing is for a gas export project in Vaca Muerta.",
          credit: "AI illustration — not a photograph",
          prompt: "Gas processing plants, drilling rigs and long pipelines stretching across a dry flat Patagonian plain at sunset, distant hills, orange sky, documentary painting style, no people, no logos, no flags, no legible text." },
        { type: "timeline", head: "A rescue and its rewards", items: [
          ["Apr 2025", "IMF approves a $20 billion programme"],
          ["Oct 2025", "US Treasury's $20 billion swap; it buys pesos"],
          ["14 Oct 2025", "Trump: 'If he loses, we are not going to be generous'"],
          ["26 Oct 2025", "Milei's party wins the midterms"],
          ["6 Feb 2026", "Trade deal; US beef quota raised to 100,000 tonnes"],
          ["24 Sep 2026", "Andes-Atlantic Corridor with up to $7 billion"]
        ] },
        { type: "section", head: "Ideological brothers", md:
          "Javier Milei, elected in 2023, was the first foreign leader to meet Donald Trump after his 2024 victory, and he has called Trump an ally in a global fight against 'socialism'. He votes with Washington at the UN, backs Israel and talks of moving Argentina's embassy to Jerusalem. In return, Trump's officials see Argentina as a model of free-market reform and a partner against China's influence in the region (see [[lesson:ar_cn-3]])." },
        { type: "section", head: "The bailout", md:
          "In September 2025, after a heavy defeat in Buenos Aires province, the peso plunged and Argentina burned through its reserves. Treasury Secretary Scott Bessent announced a $20 billion currency swap and, unusually, had the US Treasury buy pesos directly. Hosting Milei at the White House on 14 October, Trump said: 'If he loses, we are not going to be generous with Argentina.' Twelve days later Milei's party won the midterms with almost 41% (see [[lesson:ar-6]]). Trump said Milei 'had a lot of help from us'." },
        { type: "section", head: "Criticism at home and abroad", md:
          "Peronists called Trump's words open interference in Argentina's election, recalling 'Braden or Perón' (see [[lesson:us_ar-1]]). In the United States, Democrats and some farm-state Republicans asked why Washington was rescuing Argentina while American soybean farmers lost the Chinese market, especially when Argentina sold record soybeans to China weeks later. The Treasury said the swap was a sound investment that would be repaid." },
        { type: "section", head: "Beef, gas and minerals", md:
          "On 6 February 2026 the two countries signed a trade and investment agreement that cut tariffs on more than 1,600 Argentine products and raised the quota for Argentine beef in the US market to 100,000 tonnes, five times the old level, angering some American ranchers. On 24 September 2026 they launched the Andes-Atlantic Corridor: up to $7 billion of US export credit and development finance by 2027, $6 billion of it for a liquefied natural gas project in Vaca Muerta led by YPF." },
        { type: "compare", head: "The alliance",
          left: { head: "For Argentina", md:
            "A financial lifeline, investment in energy and mining, and a powerful friend." },
          right: { head: "For Washington", md:
            "A loyal ally in South America, gas and lithium, and a counterweight to China." } },
        { type: "section", head: "Why it matters", md:
          "Argentina is the clearest test of Trump's approach in Latin America: reward friends generously. If Milei loses in 2027, the bet could unravel, and a Peronist government might look again to China for credit and investment." }
      ],
      takeaways: [
        "In October 2025 the US offered Argentina a $20 billion swap; Trump tied it to Milei's election.",
        "Milei won the midterms; a February 2026 trade deal raised the US beef quota fivefold.",
        "In September 2026 the two launched the Andes-Atlantic Corridor with up to $7 billion of US financing."
      ],
      check: { q: "What did Trump say while hosting Milei in October 2025?",
        choices: ["That he would stay neutral in Argentina's election", "'If he loses, we are not going to be generous with Argentina'", "That Argentina should leave the IMF"], answer: 1,
        explain: "He tied US support to Milei's party winning the midterms." },
      sources: [
        { title: "Trump threatens to pull support for Argentina if its politics don't align with US", publisher: "ABC7 (AP)", url: "https://abc7.com/post/trump-welcomes-argentinas-javier-milei-us-extends-20-billion-lifeline/18006222/", date: "2025-10-14" },
        { title: "'He Had A Lot Of Help From Us': Trump Praises Milei's Electoral Win In Argentina", publisher: "Forbes", url: "https://www.forbes.com/sites/siladityaray/2025/10/27/he-had-a-lot-of-help-from-us-trump-praises-mileis-electoral-win-in-argentina/", date: "2025-10-27" },
        { title: "U.S. to Quadruple Beef Imports from Argentina", publisher: "Farm Policy News (University of Illinois)", url: "https://farmpolicynews.illinois.edu/2026/02/u-s-to-quadruple-beef-imports-from-argentina/", date: "2026-02" },
        { title: "Argentina and the US sign US$7 billion 'Andes-Atlantic Corridor' initiative", publisher: "Buenos Aires Herald", url: "https://buenosairesherald.com/economics/argentina-and-the-us-sign-us7-billion-andes-atlantic-corridor-initiative", date: "2026-09" },
        { title: "U.S. launches financial rescue of Argentina, Treasury buys pesos", publisher: "Fortune", url: "https://fortune.com/2025/10/09/treasury-argentina-bailout-20-billion-scott-bessent-milei/", date: "2025-10-09" }
      ]
    }
  ]
});
