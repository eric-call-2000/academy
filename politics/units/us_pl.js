/* ============================================================
   Relationship — United States & Poland 🇺🇸🇵🇱
   Kościuszko and Pulaski, Wilson's thirteenth point, millions of
   emigrants and the 'betrayal' of Yalta; Solidarity, NATO, Iraq
   and a CIA prison; and US troops, Patriots and 'Fort Trump'.
   Poland's defence build-up is in pl-5.
   Research note and sources: tools/research/us_pl.md
   Current as of 7 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("us_pl", {
  id: "us_pl",
  asOf: "2026-10-07",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_pl-1", kind: "relation", asOf: "2026-10-07",
      title: "Heroes, emigrants and Yalta",
      dek: "Two Poles fought for American independence; an American president helped revive Poland in 1918. Millions of Poles emigrated to the US, and many of their descendants never forgave Roosevelt for Yalta.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_pl/us_pl-1-hero.webp",
          alt: "Illustration of a crowded immigrant ship arriving in a harbour with brick warehouses and a grey industrial city behind.",
          caption: "Around two million Poles emigrated to the United States between 1870 and 1914.",
          credit: "Illustration — not a photograph",
          prompt: "A crowded steamship of the 1900s arriving in a busy American harbour, passengers on deck with bundles, brick warehouses and factory chimneys of a grey industrial city behind, morning haze, historical documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Old ties", items: [
          ["1777", "Kościuszko's fortifications help win at Saratoga"],
          ["1779", "Pulaski killed leading cavalry at Savannah"],
          ["1870–1914", "Around two million Poles emigrate to the US"],
          ["Jan 1918", "Wilson's Fourteen Points call for an independent Poland"],
          ["Feb 1945", "Yalta leaves Poland in the Soviet sphere"],
          ["1956–70s", "Polish Americans press Washington against communism"]
        ] },
        { type: "section", head: "Revolutionary heroes", md:
          "Two Polish officers fought for American independence. Tadeusz Kościuszko, a military engineer, designed the defences that helped the Americans win at Saratoga in 1777 and fortified West Point; he later led a Polish uprising against Russia. Casimir Pulaski, remembered as the father of the American cavalry, died of wounds at the Battle of Savannah in 1779. Towns, bridges and streets across the United States are named after them, and Pulaski was made an honorary US citizen in 2009." },
        { type: "section", head: "Emigrants", md:
          "From the 1870s millions of Poles, then divided among Russia, Prussia and Austria, emigrated to the United States, many to work in the steel mills, mines and meatpacking plants of Chicago, Pittsburgh, Detroit and Buffalo. By 2000 about 9 million Americans reported Polish ancestry. Chicago was once called the largest Polish city after Warsaw. Polish Americans built churches, newspapers and fraternal societies, and became an important voting bloc in the industrial Midwest." },
        { type: "section", head: "Wilson's thirteenth point", md:
          "In January 1918 President Woodrow Wilson set out his Fourteen Points for peace. The thirteenth called for an independent Polish state with access to the sea. When Poland was reborn that November (see [[lesson:pl-9]]), Wilson was remembered as one of its godfathers; American food aid, organised by Herbert Hoover, helped feed the new country through its first hungry years." },
        { type: "section", head: "Yalta", md:
          "In the Second World War Poland fought on the Allied side from the first day. But at Yalta in February 1945, Roosevelt and Churchill accepted Stalin's demand for Poland's eastern lands and, in practice, Soviet control of its government. Many Poles and Polish Americans called it a betrayal. The Polish American Congress, founded in 1944, campaigned for decades against the settlement, and both parties courted Polish-American votes with promises to stand up to Moscow." },
        { type: "section", head: "Behind the curtain", md:
          "During the Cold War Washington kept contacts with Poland's communist government while broadcasting to Poles through Radio Free Europe, which became one of the country's most trusted news sources. Polish émigrés in America, such as the future national security adviser Zbigniew Brzezinski, born in Warsaw, helped shape US policy toward the Soviet bloc." },
        { type: "compare", head: "Yalta remembered",
          left: { head: "American defenders", md:
            "The Red Army already occupied Poland; there was little the West could do." },
          right: { head: "Polish critics", md:
            "The Allies handed an ally to a dictator without a fight." } },
        { type: "section", head: "Why it matters", md:
          "Poles' trust in America, and their fear of being abandoned by it, both have roots in this history. Polish leaders still invoke Yalta when they worry that great powers might decide Europe's future over their heads." }
      ],
      takeaways: [
        "Kościuszko and Pulaski fought for American independence and are honoured across the US.",
        "Millions of Poles emigrated to America; about 9 million Americans reported Polish ancestry in 2000.",
        "Wilson backed Polish independence in 1918, but Yalta in 1945 left Poland under Soviet control."
      ],
      check: { q: "What did Wilson's thirteenth point call for?",
        choices: ["A Polish–American alliance", "An independent Poland with access to the sea", "A US base in Poland"], answer: 1,
        explain: "Poland regained independence in November 1918." },
      sources: [
        { title: "Polish Americans", publisher: "Encyclopedia.com", url: "https://www.encyclopedia.com/history/united-states-and-canada/us-history/polish-americans", date: "n.d." },
        { title: "U.S. Relations With Poland", publisher: "US Department of State", url: "https://2017-2021.state.gov/u-s-relations-with-poland/index.html", date: "2020" },
        { title: "Franklin Roosevelt, Polish-Americans, Yalta, and the 1944 election", publisher: "University of Chicago (Chicago Journal of History)", url: "https://cjh.uchicago.edu/issues/fall16/7.10.pdf", date: "2016" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_pl-2", kind: "relation", asOf: "2026-10-07",
      title: "Solidarity, NATO and Iraq",
      dek: "America backed Solidarity against communism, then brought Poland into NATO. Poland repaid the favour by sending troops to Iraq and, secretly, by hosting a CIA prison.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_pl/us_pl-2-hero.webp",
          alt: "Illustration of a crowd of workers gathered at the gate of a shipyard with tall cranes, decorated with flowers.",
          caption: "The Solidarity movement was born at the Gdańsk shipyard in August 1980.",
          credit: "Illustration — not a photograph",
          prompt: "A large crowd of workers in caps gathered at the gate of a 1980s shipyard decorated with flowers and plain banners, tall cranes and a ship hull behind, overcast summer light, historical documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "From Solidarity to Iraq", items: [
          ["Aug 1980", "Solidarity founded at the Gdańsk shipyard"],
          ["Dec 1981", "Martial law; the US imposes sanctions"],
          ["1989", "Round-table talks and partly free elections"],
          ["12 Mar 1999", "Poland joins NATO"],
          ["2003", "Polish special forces join the invasion of Iraq"],
          ["2002–05", "CIA runs a secret prison at Stare Kiejkuty"]
        ] },
        { type: "section", head: "Solidarity", md:
          "In August 1980 strikes at the Lenin Shipyard in Gdańsk gave birth to Solidarity, the first independent trade union in the Soviet bloc, led by an electrician, Lech Wałęsa (see [[lesson:pl-3]]). When Poland's leader, General Wojciech Jaruzelski, declared martial law in December 1981, President Reagan imposed sanctions, and American unions and the CIA quietly sent money, printing presses and radios to the underground. A Polish pope, John Paul II, elected in 1978, was the other great outside influence." },
        { type: "section", head: "Freedom and reform", md:
          "In 1989 talks between the government and Solidarity led to partly free elections, which Solidarity swept, and to the first non-communist government in the Soviet bloc. American advisers and money helped design Poland's 'shock therapy' reforms, and the United States forgave part of its debt. Wałęsa addressed Congress in November 1989, opening with the words 'We the People', and later became Poland's first freely elected president." },
        { type: "section", head: "Into NATO", md:
          "Poland's governments of every stripe saw joining [[NATO]] as the only real guarantee against Russia. With strong support from Polish Americans, President Clinton backed enlargement despite Russian objections, and on 12 March 1999 Poland, Hungary and the Czech Republic joined the alliance. Poland joined the European Union five years later." },
        { type: "section", head: "Iraq", md:
          "When the United States invaded Iraq in 2003, Poland was one of only four countries to send combat troops to the invasion. It then commanded a multinational division in south-central Iraq. Twenty-eight Polish soldiers were killed before the mission ended in 2011. Polish leaders hoped loyalty would bring rewards, such as visa-free travel to the US, which Poles did not get until 2019." },
        { type: "section", head: "The black site", md:
          "In secret, Poland hosted a CIA prison at a military intelligence base at Stare Kiejkuty from 2002 to 2005, where suspected al-Qaeda members were interrogated. In 2014 the European Court of Human Rights ruled 'beyond reasonable doubt' that the CIA had held and tortured two men there, and ordered Poland to pay damages. Polish officials long denied the site existed, and a Polish criminal investigation opened in 2008 has never brought anyone to trial." },
        { type: "compare", head: "Poland's bargain",
          left: { head: "What Poland gave", md:
            "Troops in Iraq and Afghanistan, bases, and a secret prison." },
          right: { head: "What it wanted", md:
            "Security against Russia, American troops on its soil, and respect." } },
        { type: "section", head: "Why it matters", md:
          "Poland has been among America's most loyal allies for more than 35 years, and polls show Poles among the most pro-American people in Europe. Its leaders believe that loyalty is the best insurance against Russia." }
      ],
      takeaways: [
        "The US backed Solidarity against martial law in the 1980s and supported Poland's democratic transition.",
        "Poland joined NATO on 12 March 1999 and sent troops to the 2003 invasion of Iraq.",
        "The CIA ran a secret prison in Poland from 2002 to 2005; a European court ruled against Poland in 2014."
      ],
      check: { q: "When did Poland join NATO?",
        choices: ["1989", "1999", "2004"], answer: 1,
        explain: "With Hungary and the Czech Republic, on 12 March 1999." },
      sources: [
        { title: "Poland and NATO", publisher: "NATO", url: "https://www.nato.int/en/about-us/nato-history/history-by-theme/my-country-and-nato/poland-and-nato", date: "n.d." },
        { title: "Polish troops join U.S.-led Iraq force", publisher: "NPR", url: "https://www.npr.org/2003/08/09/1390763/polish-troops-join-u-s-led-iraq-force", date: "2003-08-09" },
        { title: "European court rules against Poland in CIA black sites case", publisher: "NPR", url: "https://www.npr.org/sections/thetwo-way/2014/07/24/334867581/european-court-rules-against-poland-in-cia-black-sites-case", date: "2014-07-24" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_pl-3", kind: "relation", asOf: "2026-10-07",
      title: "Troops, missiles and 'Fort Trump'",
      dek: "Poland buys American weapons, hosts American troops and a missile-defence base, and wants a permanent US base it would name after Trump. A scare in May 2026 showed how much it depends on Washington.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_pl/us_pl-3-hero.webp",
          alt: "Illustration of tanks and armoured vehicles lined up at a military base in a flat pine-forest landscape.",
          caption: "About 7,000 US troops rotate through Poland; Warsaw wants a permanent base.",
          credit: "Illustration — not a photograph",
          prompt: "Rows of modern main battle tanks and armoured vehicles lined up at a military base on a flat plain bordered by pine forest, low barracks and hangars, cold autumn morning, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Building a front line", items: [
          ["Sep 2009", "Obama scraps Bush's missile-shield plan"],
          ["2018", "President Duda proposes a permanent 'Fort Trump'"],
          ["2020", "US troop presence agreed at about 5,500"],
          ["Jul 2024", "Aegis Ashore missile-defence site at Redzikowo enters service"],
          ["May 2026", "A US troop rotation is cancelled, then restored"],
          ["Sep 2026", "Trump and Nawrocki announce progress on a permanent base"]
        ] },
        { type: "section", head: "Missile shield", md:
          "In 2008 the Bush administration agreed to base interceptor missiles in Poland. In September 2009 President Obama scrapped the plan in favour of a different system, announcing it on 17 September, the anniversary of the Soviet invasion of Poland in 1939, which many Poles took as a slight. A US Navy missile-defence site at Redzikowo, on the Baltic coast, eventually entered service in 2024, under NATO command." },
        { type: "section", head: "Buying American", md:
          "Poland spends a larger share of its economy on defence than any other NATO member, about 4.8% in 2026 (see [[lesson:pl-5]]), and much of that money goes to American weapons: Patriot air defences, HIMARS rocket launchers, Abrams tanks, Apache helicopters and F-35 fighters. Polish leaders say the purchases buy not just equipment but American commitment." },
        { type: "section", head: "Troops", md:
          "After Russia seized Crimea in 2014, the United States and NATO began rotating troops through Poland. In 2018 President Andrzej Duda offered to pay for a permanent American base and suggested calling it 'Fort Trump'. A 2020 deal set the US presence at about 5,500, and after Russia's full-scale invasion of Ukraine it rose further; about 7,000 American soldiers now rotate through Poland, and the US Army's V Corps has a forward headquarters in Poznań." },
        { type: "section", head: "The May scare", md:
          "In May 2026 Washington unexpectedly cancelled the rotation of almost 4,000 troops, alarming Warsaw. The decision was reversed with new commitments. In September President Karol Nawrocki, a Trump ally, said a permanent US base was 'just a question of time' and would be called Fort Trump; reports said Poland would pay up to 17 billion złoty ($4.4 billion) and that it could open in 2029, hosting around 5,000 troops. Trump spoke of sending 5,000 more soldiers. Polish officials stress that the base would be paid for largely by Poland, a point aimed squarely at a president who complains that allies do not pay their way." },
        { type: "section", head: "One country, two voices", md:
          "Nawrocki and Prime Minister Donald Tusk are bitter rivals at home. Nawrocki courts Trump directly; Tusk invests in European defence too, such as the EU's SAFE loans, in case America's commitment weakens." },
        { type: "compare", head: "How Poland hedges",
          left: { head: "The American bet", md:
            "Buy US weapons, host US troops, and make Poland indispensable to Washington." },
          right: { head: "The European bet", md:
            "Build Europe's own defences in case the US turns away." } },
        { type: "section", head: "Why it matters", md:
          "Poland is NATO's front line against Russia and the main route for Western aid to Ukraine. Whether American troops stay, and how many, is the clearest test of Washington's commitment to Europe's east." }
      ],
      takeaways: [
        "Poland spends about 4.8% of GDP on defence and buys Patriots, HIMARS, Abrams tanks and F-35s from the US.",
        "About 7,000 US troops rotate through Poland; a US missile-defence site at Redzikowo entered service in 2024.",
        "After a troop scare in May 2026, Nawrocki says a permanent 'Fort Trump', paid for by Poland, is coming."
      ],
      check: { q: "Who first proposed a permanent US base called 'Fort Trump'?",
        choices: ["Donald Trump", "Poland's President Andrzej Duda, in 2018", "NATO's secretary-general"], answer: 1,
        explain: "Nawrocki revived the idea in 2026." },
      sources: [
        { title: "New US 'Fort Trump' military base in Poland 'confirmed', says President Nawrocki", publisher: "Notes from Poland", url: "https://notesfrompoland.com/2026/09/23/new-us-fort-trump-military-base-in-poland-confirmed-says-president-nawrocki/", date: "2026-09-23" },
        { title: "Poland to pay up to $4.4 billion for Fort Trump, report says", publisher: "The Spokesman-Review (Bloomberg)", url: "https://www.spokesman.com/stories/2026/sep/26/poland-to-pay-up-to-44-billion-for-fort-trump-repo/", date: "2026-09-26" },
        { title: "Trump touts plan for new U.S. base in Poland", publisher: "CBS News", url: "https://www.cbsnews.com/news/trump-poland-us-military-base-russia-ukraine-war-nato/", date: "2026-09" },
        { title: "NATO activates Poland antimissile site", publisher: "Defense News", url: "https://www.defensenews.com/global/europe/2024/11/20/nato-activates-poland-antimissile-site-as-warsaw-ups-ammo-production/", date: "2024-11-20" }
      ]
    }
  ]
});
