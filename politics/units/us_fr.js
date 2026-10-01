/* ============================================================
   Relationship — United States & France 🇺🇸🇫🇷
   Lafayette and Yorktown, de Gaulle's 'non' to NATO's command and
   'freedom fries'; AUKUS and the recalled ambassador; and Trump,
   Greenland, Versailles and a map of North America in 2026.
   France's own story is in fr-8; Russia's in fr_ru.
   Research note and sources: tools/research/us_fr.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("us_fr", {
  id: "us_fr",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_fr-1", kind: "relation", asOf: "2026-10-01",
      title: "America's oldest ally",
      dek: "French ships and soldiers helped win America's independence at Yorktown. In return, America twice helped liberate France. But de Gaulle insisted that friendship did not mean obedience.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_fr/us_fr-1-hero.webp",
          alt: "Illustration of 18th-century French and American soldiers in trenches before earthworks, with sailing warships in a bay behind.",
          caption: "French troops and ships were decisive at the siege of Yorktown in 1781.",
          credit: "AI illustration — not a photograph",
          prompt: "18th-century soldiers in blue and white coats manning cannons in siege trenches before earthwork forts, tall sailing warships in a bay behind, smoke drifting, autumn light, historical oil painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "An old friendship", items: [
          ["1778", "France signs a treaty of alliance with the United States"],
          ["Oct 1781", "French and American forces win at Yorktown"],
          ["1917–18", "American troops fight in France: 'Lafayette, we are here'"],
          ["6 Jun 1944", "D-Day landings in Normandy"],
          ["1966", "De Gaulle takes France out of NATO's military command"],
          ["2009", "France rejoins NATO's integrated command"]
        ] },
        { type: "section", head: "Lafayette and Yorktown", md:
          "France, eager to weaken its rival Britain, secretly sent money and weapons to the American rebels, and in February 1778 signed a formal treaty of alliance, America's first. The young Marquis de Lafayette became one of George Washington's generals. In October 1781 a French fleet blocked the British at Yorktown while French and American troops besieged them on land, forcing the surrender that effectively ended the war. Without France, American independence might not have been won. The Statue of Liberty, a French gift unveiled in 1886, celebrates that bond." },
        { type: "section", head: "Two world wars", md:
          "When American troops reached France in 1917, an officer declared at Lafayette's grave, 'Lafayette, we are here'. More than 100,000 Americans died in the First World War, many in French fields. In the Second, after France fell in 1940, American and Allied forces landed in Normandy on 6 June 1944 and helped liberate Paris that August. Tens of thousands of Americans are buried in French war cemeteries, and the D-Day anniversaries remain a ritual of the alliance, attended by presidents of both countries." },
        { type: "section", head: "De Gaulle says no", md:
          "Charles de Gaulle, who had led the Free French in exile and felt slighted by Roosevelt, believed France must never depend on another power for its survival. He built a French nuclear force and, in March 1966, told the United States that all foreign troops must leave France within a year. France stayed in NATO but left its integrated military command; NATO's headquarters moved to Brussels, and American bases closed. Secretary of State Dean Rusk is said to have asked whether the order included the Americans buried in French cemeteries." },
        { type: "section", head: "Return to the fold", md:
          "Later presidents kept de Gaulle's independent streak but drifted back. French troops fought alongside Americans in the 1991 Gulf War and in Afghanistan after 2001. In 2009 Nicolas Sarkozy, nicknamed 'Sarko the American', brought France back into NATO's integrated command. Today France is one of America's most capable military partners, with forces in Africa, the Middle East and the Indo-Pacific, and, since Brexit, the only EU country with nuclear weapons." },
        { type: "compare", head: "Two ideas of alliance",
          left: { head: "Washington's", md:
            "Allies should line up behind American leadership, especially in a crisis." },
          right: { head: "Paris's", md:
            "A true ally can disagree openly; France must keep its own voice and its own bomb." } },
        { type: "section", head: "Why it matters", md:
          "The tension between loyalty and independence, born with de Gaulle, has shaped every French president's dealings with Washington since, from Mitterrand to Macron." }
      ],
      takeaways: [
        "France's 1778 alliance and its fleet at Yorktown in 1781 were vital to American independence.",
        "American troops fought in France in both world wars, landing in Normandy on D-Day.",
        "De Gaulle took France out of NATO's military command in 1966; France rejoined in 2009."
      ],
      check: { q: "What did de Gaulle do in 1966?",
        choices: ["Left the EU", "Ordered foreign troops out of France and left NATO's integrated command", "Signed a treaty with the US"], answer: 1,
        explain: "France stayed in NATO but left its military command until 2009." },
      sources: [
        { title: "France in the American Revolution", publisher: "American Battlefield Trust", url: "https://www.battlefields.org/learn/articles/france-american-revolution", date: "n.d." },
        { title: "Franco-American Alliance", publisher: "Britannica", url: "https://www.britannica.com/event/Franco-American-Alliance", date: "n.d." },
        { title: "Looking back: De Gaulle tells American Forces to leave France", publisher: "RAF Mildenhall", url: "https://www.mildenhall.af.mil/News/Article-Display/Article/272283/looking-back-de-gaulle-tells-american-forces-to-leave-france/", date: "n.d." },
        { title: "France and NATO", publisher: "NATO", url: "https://www.nato.int/cps/en/natohq/declassified_160672.htm", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_fr-2", kind: "relation", asOf: "2026-10-01",
      title: "Freedom fries and a stab in the back",
      dek: "France led the opposition to the 2003 Iraq war, and Congress renamed its chips 'freedom fries'. In 2021 America helped Australia tear up a French submarine deal, and Paris recalled its ambassador for the first time.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_fr/us_fr-2-hero.webp",
          alt: "Illustration of a conventional submarine in a dry dock under construction, with welding sparks.",
          caption: "Australia cancelled its French submarine contract in 2021 in favour of AUKUS.",
          credit: "AI illustration — not a photograph",
          prompt: "A large conventional submarine hull under construction in a covered dry dock, welding sparks, scaffolding and cranes, industrial lighting, documentary painting style, no people close up, no logos, no flags, no legible text." },
        { type: "timeline", head: "Quarrels among friends", items: [
          ["14 Feb 2003", "Villepin's UN speech against war in Iraq"],
          ["Mar 2003", "House cafeterias serve 'freedom fries'"],
          ["2013", "Obama calls off strikes on Syria that France was ready to join"],
          ["2018", "Macron addresses Congress"],
          ["15 Sep 2021", "AUKUS announced; France loses its submarine deal"],
          ["17 Sep 2021", "France recalls its ambassador from Washington"]
        ] },
        { type: "section", head: "Iraq", md:
          "In early 2003 President Jacques Chirac led opposition to an American-led invasion of Iraq, threatening a French veto at the UN Security Council. On 14 February his foreign minister, Dominique de Villepin, told the Council that war could unleash forces that would be extremely difficult to control, and drew rare applause. In Washington, anger boiled over: two congressmen had the House cafeterias rename French fries 'freedom fries', some Americans poured French wine down drains, and commentators mocked 'cheese-eating surrender monkeys'. Many in France later felt vindicated by the chaos in Iraq." },
        { type: "section", head: "Making up", md:
          "Relations recovered under Sarkozy, who rejoined NATO's command, and under François Hollande, who sent French troops to fight jihadists in Mali in 2013 with American logistical help. But in August 2013, after Syria's regime used chemical weapons, Hollande had French jets ready to strike alongside the Americans when Barack Obama called the operation off at the last minute. French officials never forgot it. Emmanuel Macron, elected in 2017, courted Donald Trump with a Bastille Day parade and addressed Congress in 2018." },
        { type: "section", head: "AUKUS", md:
          "In 2016 France had won a contract, worth tens of billions of dollars, to build conventional submarines for Australia. On 15 September 2021 the US, Britain and Australia announced AUKUS, under which Australia would get nuclear-powered submarines instead, and the French deal was dead (see [[lesson:us_au-2]]). France learned of it only hours before. Its foreign minister called it 'a stab in the back', and on 17 September France recalled its ambassador from Washington, the first time it had ever done so." },
        { type: "section", head: "Patching it up", md:
          "President Biden admitted the deal had been handled 'clumsily', and the ambassador returned within weeks. But the episode reinforced Macron's argument that Europe needs 'strategic autonomy', the ability to defend its own interests without relying on America. Many in Washington found that irritating, especially from a country that spends a smaller share of its economy on defence than the United States; the Russian invasion of Ukraine in 2022 pulled the allies together again." },
        { type: "compare", head: "Two lessons of 2003",
          left: { head: "In Washington", md:
            "France undermines American leadership when it counts and can't be relied on." },
          right: { head: "In Paris", md:
            "A friend tells you when you are making a mistake; France was right about Iraq." } },
        { type: "section", head: "Why it matters", md:
          "Each quarrel was patched up, but together they explain why French leaders call for Europe to stand on its own feet, a call that grew louder under Trump's second term." }
      ],
      takeaways: [
        "France led opposition to the 2003 Iraq war; Congress's cafeterias renamed French fries 'freedom fries'.",
        "Obama's 2013 decision not to strike Syria left France, ready to join, feeling abandoned.",
        "The 2021 AUKUS deal killed a French submarine contract, and France recalled its ambassador from Washington."
      ],
      check: { q: "Why did France recall its ambassador from Washington in 2021?",
        choices: ["Over tariffs on wine", "Over the AUKUS deal that cancelled its submarine contract with Australia", "Over the Iraq war"], answer: 1,
        explain: "France called the secretly negotiated deal 'a stab in the back'." },
      sources: [
        { title: "France recalls ambassadors to US and Australia over nuclear submarine deal", publisher: "NPR", url: "https://www.npr.org/2021/09/17/1038395237/france-recalls-ambassadors-us-australia-nuclear-submarine-deal", date: "2021-09-17" },
        { title: "France recalls its ambassadors to the United States and Australia over submarine dispute", publisher: "The Washington Post", url: "https://www.washingtonpost.com/national-security/frane-us-australia-ambassadors-recalled-submarine/2021/09/17/198fe96c-17f1-11ec-b976-f4a43b740aeb_story.html", date: "2021-09-17" },
        { title: "Freedom fries", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Freedom_fries", date: "n.d." },
        { title: "Former French PM de Villepin, known for 2003 speech against Iraq war, launches political party", publisher: "France 24", url: "https://www.france24.com/en/live-news/20250624-former-french-pm-launches-new-party-two-years-before-presidential-election", date: "2025-06-24" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_fr-3", kind: "relation", asOf: "2026-10-01",
      title: "Greenland, Versailles and a map",
      dek: "Macron pushed Europe to fight Trump's Greenland tariffs, then hosted him at Versailles for America's 250th birthday. When Trump posted a map painting North America in US colours, Macron flew to France's islands off Canada.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_fr/us_fr-3-hero.webp",
          alt: "Illustration of colourful wooden houses around a small harbour on a rocky North Atlantic island under grey skies.",
          caption: "Macron and Canada's Mark Carney visited Saint-Pierre-et-Miquelon in September 2026.",
          credit: "AI illustration — not a photograph",
          prompt: "Brightly painted wooden houses around a small fishing harbour on a rocky treeless North Atlantic island, small boats, low grey clouds, cold light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Friction and flattery", items: [
          ["17 Jan 2026", "Trump threatens tariffs on France and seven others over Greenland"],
          ["21 Jan 2026", "Trump drops the tariffs after a 'framework' deal at Davos"],
          ["2 Mar 2026", "Macron's speech on a European nuclear role"],
          ["17 Jun 2026", "Versailles dinner after the G7 at Evian"],
          ["20 Sep 2026", "Macron and Carney in Saint-Pierre-et-Miquelon"],
          ["21 Sep 2026", "Trump and Macron meet at the UN"]
        ] },
        { type: "section", head: "The Greenland crisis", md:
          "In January 2026 Trump revived his demand to acquire Greenland from Denmark, and on 17 January announced extra tariffs of 10%, rising to 25%, on France, Denmark, Germany, Britain and four other European countries until a deal was done. Macron replied that 'no intimidation nor threat will influence us, neither in Ukraine, nor in Greenland', and urged the EU to use its never-tested anti-coercion instrument, its trade 'bazooka', for the first time. Four days later, after talks with NATO's Mark Rutte at Davos, Trump announced a 'framework' deal on the Arctic and dropped the tariffs." },
        { type: "section", head: "Europe's own defence", md:
          "Macron has used Trump's second term to press his old argument: Europe must be able to defend itself. In March 2026 he offered European allies a role in French nuclear deterrence (see [[lesson:fr_ru-3]]), and France co-leads with Britain the 'coalition of the willing' for Ukraine (see [[lesson:gb_fr-3]]). Washington has welcomed Europeans spending more on defence, but bristles at talk of buying European rather than American weapons." },
        { type: "section", head: "Dinner at Versailles", md:
          "Macron's other tool is flattery. After the G7 summit he hosted at Evian in June 2026, he invited Trump to a private dinner at the Palace of Versailles on 17 June to mark the 250th anniversary of American independence, recalling France's role in it. During the dinner Trump signed the US–Iran memorandum that briefly paused the war (see [[lesson:ir-7]]). The two leaders met again in New York during the UN General Assembly on 21 September, Macron's last as president." },
        { type: "section", head: "A map and an island", md:
          "In September 2026 Trump posted an image of North America with Canada, Greenland, Mexico, much of Central America and the Caribbean, and Iceland all covered in the US flag. Macron responded by flying to Saint-Pierre-et-Miquelon, France's tiny territory off Canada's coast, where Canada's prime minister Mark Carney joined him on 20 September, the first official visit there by a Canadian leader, to defend 'the sovereignty of nations'." },
        { type: "compare", head: "Macron's two hands",
          left: { head: "Resist", md:
            "Rally Europe against tariffs and threats to allies' territory; build European defence." },
          right: { head: "Charm", md:
            "Versailles, parades and personal diplomacy to keep Trump engaged on Ukraine and Iran." } },
        { type: "section", head: "Why it matters", md:
          "France's next president, elected in 2027, will inherit both the strain and the alliance. The far-right National Rally, leading the polls, is wary of Washington and Brussels alike (see [[lesson:fr-7]]). How it would handle Trump is one of the campaign's open questions." }
      ],
      takeaways: [
        "Macron led European resistance to Trump's Greenland tariffs, which were dropped in January 2026.",
        "He hosted Trump at Versailles in June 2026 to mark America's 250th anniversary.",
        "After Trump's map of a US-flagged North America, Macron and Canada's Carney visited Saint-Pierre-et-Miquelon."
      ],
      check: { q: "Why did Macron visit Saint-Pierre-et-Miquelon in September 2026?",
        choices: ["To open a naval base", "To defend national sovereignty after Trump posted a map covering North America in the US flag", "To sign a trade deal with the US"], answer: 1,
        explain: "Canada's Mark Carney joined him on the French islands off Canada's coast." },
      sources: [
        { title: "Trump tariff threats over Greenland prompt calls for unprecedented EU counter-measures", publisher: "France 24", url: "https://www.france24.com/en/europe/20260118-macron-wants-eu-anti-coercion-instrument-against-trump-tariffs-greenland", date: "2026-01-18" },
        { title: "Trump says he reached Greenland deal 'framework' with NATO, backs off Europe tariffs", publisher: "CNBC", url: "https://www.cnbc.com/2026/01/21/trump-tariffs-nato-greenland-davos.html", date: "2026-01-21" },
        { title: "Trump speaks at close of G7 summit before dining with Macron at Versailles", publisher: "France 24", url: "https://www.france24.com/en/france/20260617-macron-invites-trump-to-versailles-dinner-as-g7-summit-wraps-up", date: "2026-06-17" },
        { title: "Macron, Carney to visit North Atlantic French islands after Trump's map post", publisher: "France 24", url: "https://www.france24.com/en/americas/20260913-macron-carney-to-visit-french-islands-after-trump-s-map-post", date: "2026-09-13" },
        { title: "Trump to meet Macron in New York on Monday — White House", publisher: "The Manila Times (AFP)", url: "https://www.manilatimes.net/2026/09/21/world/americas-emea/trump-to-meet-macron-in-new-york-on-monday-white-house/2429173", date: "2026-09-21" }
      ]
    }
  ]
});
