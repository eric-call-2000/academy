/* ============================================================
   Relationship — United States & Ukraine 🇺🇸🇺🇦
   Nuclear weapons given up for assurances in 1994; a phone
   call that led to an impeachment; the biggest American war
   aid in decades after 2022; and under Trump, a shouting
   match, a minerals deal, weapons sold through NATO instead of
   given, and pressure to make a deal.
   Peace talks seen from Kyiv are in ua-6.
   Research note and sources: tools/research/us_ua.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_ua", {
  id: "us_ua",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_ua-1", kind: "relation", asOf: "2026-09-30",
      title: "Bombs given up, promises made",
      dek: "In 1994 Ukraine gave up the world's third-largest nuclear arsenal in return for assurances from America, Britain and Russia. Twenty years later Russia seized Crimea, and Ukraine became a battleground in American politics.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ua/us_ua-1-hero.webp",
          alt: "Illustration of an empty missile silo in a snowy steppe, its heavy concrete lid pushed aside.",
          caption: "Ukraine's Soviet-era nuclear missiles were removed and their silos destroyed in the 1990s.",
          credit: "AI illustration — not a photograph",
          prompt: "An empty Soviet-era missile silo in a flat snowy steppe, its huge round concrete lid pushed aside, rusting fences and a small guard hut nearby, grey winter sky, bleak and quiet atmosphere, no people, no flags, no legible text." },
        { type: "timeline", head: "From assurances to a phone call", items: [
          ["1991", "Ukraine inherits about 1,900 strategic nuclear warheads"],
          ["5 Dec 1994", "Budapest Memorandum signed"],
          ["2014", "Russia annexes Crimea; war in Donbas"],
          ["2018", "The US sells Ukraine Javelin anti-tank missiles"],
          ["25 Jul 2019", "Trump asks Zelensky to investigate the Bidens"],
          ["Dec 2019", "Trump impeached by the House over the call"]
        ] },
        { type: "section", head: "The Budapest Memorandum", md:
          "When the Soviet Union collapsed in 1991 (see [[lesson:ua-9]]), Ukraine was left with the world's third-largest nuclear arsenal, including about 1,900 strategic warheads aimed at the United States. The Bush and Clinton administrations worked hard to persuade Ukraine, Belarus and Kazakhstan to give theirs up. In return, on 5 December 1994 in Budapest, the United States, Britain and Russia signed a memorandum promising to respect Ukraine's independence and existing borders and not to threaten or use force against it. The warheads went to Russia to be dismantled; the last left Ukraine in 1996, and American money from the Nunn–Lugar programme paid to destroy the missiles and blow up their silos. The memorandum was a political commitment, not a treaty, and did not promise to defend Ukraine." },
        { type: "section", head: "Crimea and caution", md:
          "In 2014, after Ukraine's Maidan revolution toppled a pro-Russian president (see [[lesson:ua-3]]), Russia annexed Crimea and backed separatists in the Donbas. Ukrainians pointed to Budapest; Washington and London imposed sanctions but did not fight. President Barack Obama sent non-lethal aid and trainers but refused to send lethal weapons, fearing escalation. In 2018 Donald Trump's administration approved the sale of Javelin anti-tank missiles, a symbolic step that Obama had refused. Many Ukrainians concluded that giving up the bomb had been a mistake; in 2024, at the memorandum's 30th anniversary, Ukraine's foreign ministry called it 'a monument to short-sightedness'." },
        { type: "section", head: "The phone call", md:
          "Ukraine then landed in the middle of American politics. On 25 July 2019 Trump phoned Volodymyr Zelensky, newly elected, and asked him to 'do us a favor' by investigating Joe Biden, his likely election rival, and Biden's son Hunter, who had sat on the board of a Ukrainian gas company. At the time the White House was holding up almost $400 million in military aid to Ukraine. A whistleblower complaint led the House of Representatives to impeach Trump in December 2019 for abuse of power; the Senate acquitted him in February 2020. The episode shaped how each side of American politics came to see Ukraine." },
        { type: "compare", head: "What did Budapest promise?",
          left: { head: "Ukraine's view", md:
            "Ukraine gave up nuclear weapons trusting the great powers; America and Britain owe it protection." },
          right: { head: "Washington's reading", md:
            "The memorandum promised to respect Ukraine's borders, not to defend them; Russia is the one that broke it." } },
        { type: "section", head: "Why it matters", md:
          "Ukraine's fate is watched by countries deciding whether to rely on American assurances or build their own nuclear weapons." }
      ],
      takeaways: [
        "In 1994 Ukraine gave up its nuclear arsenal for assurances in the Budapest Memorandum.",
        "After Russia seized Crimea in 2014, Obama refused lethal aid; Trump sold Javelins in 2018.",
        "Trump's 2019 call asking Zelensky to investigate the Bidens led to his first impeachment."
      ],
      check: { q: "What did the 1994 Budapest Memorandum commit the US, UK and Russia to?",
        choices: ["Defend Ukraine with troops if attacked", "Respect Ukraine's independence and borders and not use force against it", "Admit Ukraine to NATO"], answer: 1,
        explain: "It was a political commitment in return for Ukraine giving up its nuclear weapons, not a defence guarantee." },
      sources: [
        { title: "Ukraine, Nuclear Weapons, and Security Assurances at a Glance", publisher: "Arms Control Association", url: "https://www.armscontrol.org/factsheets/ukraine-nuclear-weapons-and-security-assurances-glance", date: "n.d." },
        { title: "On its 30th anniversary, Ukraine calls 1994 Budapest Memorandum 'a monument to short-sightedness'", publisher: "VOA", url: "https://www.voanews.com/a/on-its-30th-anniversary-ukraine-calls-1994-budapest-memorandum-a-monument-to-short-sightedness-/7887918.html", date: "2024-12-05" },
        { title: "30 years ago today, Ukraine traded nuclear arms for security assurances", publisher: "The Kyiv Independent", url: "https://kyivindependent.com/30-years-ago-ukraine-traded-nuclear-arms-for-security-assurances-a-decision-that-haunts-kyiv-today/", date: "2024-12-05" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_ua-2", kind: "relation", asOf: "2026-09-30",
      title: "Arsenal of Ukraine",
      dek: "After Russia's full invasion in 2022, the United States led the West in arming Ukraine, with Congress approving about $175 billion. But each new weapon came late, and by 2024 aid had become a partisan fight.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ua/us_ua-2-hero.webp",
          alt: "Illustration of a mobile rocket launcher truck firing a rocket at dusk across a flat field.",
          caption: "American HIMARS rocket launchers helped Ukraine strike Russian supply lines in 2022.",
          credit: "AI illustration — not a photograph",
          prompt: "A mobile rocket launcher truck firing a rocket with a bright trail at dusk across a flat muddy farm field, smoke and dust around the vehicle, tree line in the distance, dramatic documentary style, no people close up, no flags, no legible text." },
        { type: "facts", head: "American support, 2022–24", rows: [
          ["Approved by Congress", "About $174 billion in five bills (FY2022–24)"],
          ["Committed to Ukraine (Kiel)", "About €115 billion by mid-2025"],
          ["Key weapons", "Javelin, HIMARS, Patriot, Abrams tanks, ATACMS"],
          ["Delay", "Six months of deadlock in the House, 2023–24"],
          ["20 Apr 2024", "House passes $61 billion for Ukraine"]
        ] },
        { type: "section", head: "Arming a war", md:
          "When Russia launched its full invasion on 24 February 2022, US intelligence had warned for months that it was coming, and Washington had shared much of it publicly. President Joe Biden rallied allies behind sanctions and weapons. American Javelins and Stingers helped Ukraine stop the assault on Kyiv; HIMARS rocket launchers, arriving that summer, hit Russian ammunition dumps and helped Ukraine retake Kharkiv region and Kherson. Congress passed five aid bills from 2022 to 2024 worth about $174 billion, though much of that money was spent in the United States, replacing American stocks and paying American factories. America also shared intelligence on Russian forces, trained Ukrainian troops at bases in Germany, and the Starlink satellite network of Elon Musk's SpaceX kept Ukraine's army connected." },
        { type: "section", head: "Too little, too late?", md:
          "Biden moved step by step, fearing that giving Ukraine more powerful weapons might provoke Russia into escalation, even nuclear use. Ukraine asked for tanks, long-range missiles and fighter jets; each was refused at first, then sent months later: Patriot air defences at the end of 2022, Abrams tanks in 2023, long-range ATACMS missiles in 2024, and F-16 jets supplied by European allies with American permission. Supporters say caution avoided a wider war. Critics, including many Ukrainians, say it gave Russia time to dig in and cost Ukraine its best chance to win in 2023 (see [[lesson:ua-5]])." },
        { type: "section", head: "A partisan fight", md:
          "At first aid was bipartisan. But as the war dragged on, many Republicans, following Donald Trump, argued that America was spending too much on Ukraine and too little at home. From autumn 2023 a new aid bill was stuck in the House for six months, while Ukraine ran short of shells and lost the town of Avdiivka. On 20 April 2024 Speaker Mike Johnson finally brought it to a vote, and the House passed $61 billion for Ukraine with Democratic support and a split among Republicans; hardliners tried to remove him. It was the last big American aid package, and the weapons it paid for were still arriving in 2025." },
        { type: "compare", head: "Was the aid worth it?",
          left: { head: "Supporters", md:
            "For a small share of the defence budget, America helped Ukraine wear down its main rival without risking US troops." },
          right: { head: "Critics", md:
            "Billions went to a war with no clear end, while Europe, whose security is most at stake, should pay more." } },
        { type: "section", head: "Why it matters", md:
          "American weapons and intelligence were vital to Ukraine's survival. The end of new aid in 2025 put the burden on Europe." }
      ],
      takeaways: [
        "After the 2022 invasion Congress approved about $174 billion in aid for Ukraine.",
        "Biden sent weapons step by step, fearing escalation; critics say too slowly.",
        "Aid became partisan; the last big package, $61 billion, passed in April 2024 after six months of delay."
      ],
      check: { q: "What happened to the Ukraine aid bill in 2023–24?",
        choices: ["It passed at once", "It was stuck in the House for six months before passing in April 2024", "It was vetoed"], answer: 1,
        explain: "Speaker Johnson brought the $61 billion package to a vote on 20 April 2024 despite hardliner opposition." },
      sources: [
        { title: "Relief in Ukraine as House approves military, economic aid — but worries linger", publisher: "NPR", url: "https://www.npr.org/2024/04/21/1246170238/ukraine-military-assistance-house-vote-mike-johnson-volodymr-zelenskyy", date: "2024-04-21" },
        { title: "European support for Ukraine continues steadily—US assistance stalls", publisher: "Kiel Institute", url: "https://www.kielinstitut.de/media/news/european-support-for-ukraine-continues-steadily-us-assistance-stalls/", date: "2025" },
        { title: "Tracking US and NATO support for Ukraine: A full breakdown", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/8/21/tracking-us-and-nato-support-for-ukraine-a-full-breakdown", date: "2025-08-21" },
        { title: "Wartime Assistance to Ukraine: The Successes, Failures, and Future Prospects of US and EU Support Models", publisher: "CEPA", url: "https://cepa.org/comprehensive-reports/wartime-assistance-to-ukraine-the-successes-failures-and-future-prospects-of-us-and-eu-support-models/", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_ua-3", kind: "relation", asOf: "2026-09-30",
      title: "Trump's terms",
      dek: "Trump stopped new American aid, clashed with Zelensky in the Oval Office and took a stake in Ukraine's minerals. Weapons now reach Ukraine mainly when Europeans pay for them, while Washington presses both sides to make a deal.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ua/us_ua-3-hero.webp",
          alt: "Illustration of an ornate office with two armchairs facing each other in front of a fireplace, empty.",
          caption: "Zelensky's Oval Office meeting with Trump on 28 February 2025 ended in a public shouting match.",
          credit: "AI illustration — not a photograph",
          prompt: "An ornate oval office with two empty armchairs facing each other in front of a marble fireplace, tall windows with golden curtains, a portrait on the wall, soft afternoon light, tense quiet mood, no people, no flags, no legible text." },
        { type: "timeline", head: "Trump and Ukraine", items: [
          ["28 Feb 2025", "Oval Office clash; aid and intelligence briefly paused"],
          ["30 Apr 2025", "US–Ukraine minerals and reconstruction fund deal"],
          ["Aug 2025", "NATO's PURL scheme: allies buy US weapons for Ukraine"],
          ["17 Oct 2025", "Trump declines to send Tomahawk missiles"],
          ["14 Sep 2026", "Trump says both sides agreed to halt energy strikes; Kyiv unaware"],
          ["Sep 2026", "Trump and Zelensky meet at the UN"]
        ] },
        { type: "section", head: "The Oval Office", md:
          "Trump returned in January 2025 promising to end the war quickly, and blamed Ukraine as well as Russia for it. On 28 February 2025 Zelensky came to the White House to sign a deal on Ukraine's minerals. In front of the cameras, Vice-President JD Vance accused him of ingratitude and Trump told him he was 'gambling with World War Three'; Zelensky was asked to leave. Days later the United States briefly paused weapons deliveries and intelligence sharing, showing how much Ukraine depended on them. Relations were patched up, and on 30 April 2025 the two signed a deal creating a joint fund, fed by future Ukrainian mineral revenues, to invest in Ukraine's reconstruction (see [[lesson:ua-6]])." },
        { type: "section", head: "Pay to arm", md:
          "Trump asked Congress for no new aid for Ukraine. Instead, in the summer of 2025 NATO and Washington set up the Prioritized Ukraine Requirements List, or PURL: European and other allies pay for American weapons, such as Patriot missiles, which are then sent to Ukraine. By the end of 2025 allies had pledged more than $4 billion, about $1 billion a month. Trump has limited what he will sell. On 17 October 2025, after talking to Putin, he told Zelensky at the White House that he would not supply long-range Tomahawk cruise missiles, saying America needed them and they could be an 'escalation'." },
        { type: "section", head: "Pressure for a deal", md:
          "Trump's envoys have pushed a series of plans, including a 28-point proposal in November 2025 that many in Kyiv saw as rewarding Russia, and summits with Putin (see [[lesson:ru-6]]). None has ended the war. On 14 September 2026 Trump announced that Russia and Ukraine had agreed to stop striking each other's energy facilities, but neither confirmed it, and Ukrainian energy officials said they knew of no deal. When Trump and Zelensky met at the United Nations later that month, Zelensky said no agreement had been reached, but that Ukraine was ready for an energy ceasefire if Russia stopped its attacks. Trump was reported to doubt that Putin would agree before winter." },
        { type: "compare", head: "Trump's approach",
          left: { head: "Supporters", md:
            "Europe now pays its share, America earns from minerals, and pressure on both sides is the only road to peace." },
          right: { head: "Critics", md:
            "Cutting aid and pressing Kyiv to concede rewards Russia's aggression and weakens America's word worldwide." } },
        { type: "section", head: "Why it matters", md:
          "How the war ends will shape Europe's security for decades. The United States is still the one power that can push both Kyiv and Moscow to a deal." }
      ],
      takeaways: [
        "Zelensky's February 2025 Oval Office clash was followed by an April minerals and reconstruction deal.",
        "Under NATO's PURL scheme, allies pay for US weapons for Ukraine; Trump refused Tomahawks.",
        "In September 2026 Trump announced an energy ceasefire that neither side confirmed."
      ],
      check: { q: "How does the PURL scheme work?",
        choices: ["The US gives weapons free to Ukraine", "European and other allies pay for American weapons that are sent to Ukraine", "Ukraine pays with grain"], answer: 1,
        explain: "Launched in 2025, it replaced new American aid; allies pledged more than $4 billion by the end of 2025." },
      sources: [
        { title: "Trump Rejects Tomahawk Missile Sale to Ukraine", publisher: "Arms Control Association", url: "https://www.armscontrol.org/act/2025-11/news/trump-rejects-tomahawk-missile-sale-ukraine", date: "2025-11" },
        { title: "NATO Allies and partners fund over 4 billion in PURL packages for Ukraine", publisher: "NATO (via GlobalSecurity)", url: "https://www.globalsecurity.org/wmd/library/news/ukraine/2025/12/ukraine-251210-nato01.htm", date: "2025-12-10" },
        { title: "Trump claims Ukraine, Russia agree to halt strikes on energy targets, Kyiv unaware of deal", publisher: "The Kyiv Independent", url: "https://kyivindependent.com/breaking-trump-claims-ukraine-russia-agree-to-halt-strikes-on-energy-targets/", date: "2026-09-14" },
        { title: "Zelensky: U.S. pushing energy ceasefire, trilateral talks with Russia", publisher: "Axios", url: "https://www.axios.com/2026/09/24/zelensky-ukraine-russia-war-energy-ceasefire-grain", date: "2026-09-24" }
      ]
    }
  ]
});
