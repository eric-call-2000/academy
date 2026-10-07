/* ============================================================
   Relationship — United States & Israel 🇺🇸🇮🇱
   Recognised in eleven minutes, armed from the 1960s, allied
   through wars; the largest cumulative recipient of US aid,
   now negotiating an end to that aid; and fighting side by
   side against Iran while American opinion shifts.
   Research note and sources: tools/research/us_il.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_il", {
  id: "us_il",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_il-1", kind: "relation", asOf: "2026-09-30",
      title: "Eleven minutes to a special relationship",
      dek: "The United States recognised Israel minutes after it was born, but for two decades kept it at arm's length. Wars in 1967 and 1973 turned it into America's closest partner in the Middle East.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_il/us_il-1-hero.webp",
          alt: "Illustration of a large military cargo plane unloading crates onto a desert airfield at dawn.",
          caption: "In October 1973 an American airlift resupplied Israel in the middle of a war.",
          credit: "Illustration — not a photograph",
          prompt: "A huge grey 1970s military cargo plane with its rear ramp open on a desert airfield at dawn, crates and pallets being unloaded by forklifts, heat haze, distant hills, historical documentary mood, no flags, no legible text." },
        { type: "timeline", head: "How the bond was built", items: [
          ["14 May 1948", "Truman recognises Israel 11 minutes after its founding"],
          ["1956–57", "Eisenhower forces Israel to leave Sinai after the Suez war"],
          ["Aug 1962", "Kennedy sells Hawk missiles, the first major US arms sale"],
          ["1967", "The Six-Day War makes Israel a Cold War asset"],
          ["Oct 1973", "Operation Nickel Grass airlifts arms mid-war"],
          ["1978–79", "Carter brokers Camp David and the Egypt–Israel treaty"]
        ] },
        { type: "section", head: "Recognition, then distance", md:
          "David Ben-Gurion proclaimed the State of Israel on 14 May 1948 (see [[lesson:il-9]]). Eleven minutes later President Harry Truman recognised it, over the objections of his Secretary of State, George Marshall, who feared angering the Arab world and its oil producers. Recognition did not mean alliance. The United States refused to sell Israel major weapons for years; France was its main arms supplier. When Israel joined Britain and France in invading Egypt in 1956, President Dwight Eisenhower demanded a full withdrawal from the Sinai peninsula, and in February 1957 threatened to cut off aid. Israel pulled out by March." },
        { type: "section", head: "From arms to alliance", md:
          "In August 1962 John F. Kennedy became the first president to sell Israel a major weapons system, the Hawk anti-aircraft missile. The turning point came in 1967, when Israel defeated Egypt, Syria and Jordan in six days (see [[lesson:il-10]]). With Egypt and Syria armed by the Soviet Union, Washington came to see Israel as a Cold War asset, and in 1968 agreed to sell it Phantom jets. France, meanwhile, had turned away after the war. From then on, the United States replaced France as Israel's main arms supplier." },
        { type: "section", head: "The airlift", md:
          "On 6 October 1973 Egypt and Syria attacked on Yom Kippur, and Israel began running short of ammunition. From 14 October to 14 November American C-5 and C-141 transport planes flew Operation Nickel Grass, carrying about 22,000 tons of tanks, artillery and supplies. Most European allies, fearing an Arab oil embargo, refused landing or overflight rights; Portugal let the planes refuel in the Azores. Arab oil producers answered with an embargo on the United States. After the war American diplomats brokered disengagement deals, and in 1978 President Jimmy Carter hosted Israel's Menachem Begin and Egypt's Anwar Sadat at Camp David, which led to a peace treaty in 1979." },
        { type: "compare", head: "Why the bond grew",
          left: { head: "Shared values", md:
            "A fellow democracy, founded after the Holocaust, with deep ties to American Jews and evangelical Christians." },
          right: { head: "Strategic interest", md:
            "A strong military partner against Soviet clients, and later against Iran and armed groups, in a vital region." } },
        { type: "section", head: "Why it matters", md:
          "The pattern set in these years still shapes the alliance: American presidents give Israel weapons and diplomatic cover, but sometimes use that support as leverage, as Eisenhower did in 1957. Every argument today about conditions on aid looks back to that history." }
      ],
      takeaways: [
        "Truman recognised Israel 11 minutes after its founding in 1948, but major US arms sales began only in 1962.",
        "After the 1967 war the United States became Israel's main arms supplier.",
        "The 1973 airlift and the 1978 Camp David accords made America Israel's indispensable partner."
      ],
      check: { q: "What was Operation Nickel Grass?",
        choices: ["The US recognition of Israel in 1948", "An American airlift of weapons to Israel during the 1973 war", "Israel's invasion of Sinai in 1956"], answer: 1,
        explain: "From 14 October to 14 November 1973 US transport planes flew about 22,000 tons of arms and supplies to Israel." },
      sources: [
        { title: "Recognition of the State of Israel", publisher: "Truman Library", url: "https://www.trumanlibrary.gov/education/lesson-plans/recognition-state-israel", date: "n.d." },
        { title: "1956 Suez fallout: Eisenhower threatens to withhold aid", publisher: "Christian Science Monitor", url: "https://www.csmonitor.com/World/Middle-East/2012/0927/Obama-Netanyahu-tensions-Not-as-bad-as-5-other-US-Israel-low-points/1956-Suez-fallout-Eisenhower-threatens-to-withhold-aid", date: "2012-09-27" },
        { title: "John F. Kennedy and Israel: A Look Back", publisher: "National Library of Israel", url: "https://blog.nli.org.il/en/jfk_and_israel/", date: "n.d." },
        { title: "Nickel Grass", publisher: "Air & Space Forces Magazine", url: "https://www.airandspaceforces.com/article/1298nickel/", date: "1998-12-01" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_il-2", kind: "relation", asOf: "2026-09-30",
      title: "Aid, arms and the end of aid",
      dek: "Israel has received more American aid than any other country since the Second World War, now $3.8 billion a year in military help. In 2026 the two began talks on a new deal that would wind that aid down.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_il/us_il-2-hero.webp",
          alt: "Illustration of an air-defence missile battery on a hillside launching an interceptor into a night sky.",
          caption: "The United States helps pay for Israel's missile defences, including Iron Dome.",
          credit: "Illustration — not a photograph",
          prompt: "A mobile air-defence missile battery on a rocky hillside at night launching a bright interceptor missile that leaves a glowing trail into a dark sky, city lights far below, tense documentary mood, no flags, no legible text." },
        { type: "facts", head: "The money", rows: [
          ["Total since 1946", "About $298 billion in 2024 dollars"],
          ["Current deal", "2016 memorandum of understanding, 2019–2028"],
          ["Per year", "$3.3 billion in military financing + $500 million for missile defence"],
          ["After 7 Oct 2023", "Extra wartime aid passed by Congress"],
          ["New talks", "Began June 2026, on phasing aid out"]
        ] },
        { type: "section", head: "The largest recipient", md:
          "According to the Congressional Research Service, Israel is the largest cumulative recipient of American foreign aid since the Second World War: about $298 billion in today's money. In earlier decades much of it was economic aid, but since 2008 it has been almost all military. Aid is set in ten-year memorandums of understanding (MOUs). The current one, signed under Barack Obama in 2016, covers 2019 to 2028: $3.3 billion a year in Foreign Military Financing, which Israel spends mostly on American weapons such as F-35 jets, plus $500 million a year for joint missile-defence programmes such as Iron Dome, David's Sling and Arrow. American law also commits the United States to keeping Israel's 'qualitative military edge' over its neighbours." },
        { type: "section", head: "Arms as leverage", md:
          "The Gaza war that began on 7 October 2023 (see [[lesson:il-5]]) tested this system. Congress passed extra aid, and the United States sent air-defence batteries and bombs. But as Palestinian deaths rose, pressure grew on President Joe Biden. In May 2024 he paused a shipment of 1,800 2,000-pound bombs and 1,700 500-pound bombs, fearing their use in Rafah, where more than a million displaced Gazans were sheltering. It was a rare case of Washington holding back offensive weapons over civilian casualties. Donald Trump released the bombs within days of taking office in January 2025, saying Israel had 'ordered and paid for' them." },
        { type: "section", head: "Winding it down", md:
          "Surprisingly, the next step came from Israel. Prime Minister Benjamin Netanyahu (see [[lesson:il-4]]) has said Israel should wean itself off American financial aid within a decade, and pay for its own purchases. Formal talks on a new MOU began in the first week of June 2026. Secretary of State Marco Rubio confirmed that the two governments were discussing an Israeli proposal to wind the aid down, and the US ambassador to Israel, Mike Huckabee, wrote that the new MOU 'ends aid & will be based on trade'. Both sides talk instead of joint research and production." },
        { type: "compare", head: "Two views of ending aid",
          left: { head: "Supporters", md:
            "A rich country should pay its own way. Ending aid frees Israel from American conditions and removes a political target." },
          right: { head: "Sceptics", md:
            "Aid ties Israel to American industry and keeps Washington involved. Ending it could loosen the alliance, not strengthen it." } },
        { type: "section", head: "Why it matters", md:
          "If aid ends, one of the main tools Washington has for influencing Israel goes with it. The terms of the new deal, due before the old one expires in 2028, will shape the alliance for another decade." }
      ],
      takeaways: [
        "Israel is the largest cumulative recipient of US aid, now $3.8 billion a year under the 2016 MOU.",
        "Biden paused a shipment of heavy bombs in 2024; Trump released it in 2025.",
        "Talks on a new MOU began in June 2026, with both governments discussing an end to aid."
      ],
      check: { q: "What did Ambassador Huckabee say about the next MOU?",
        choices: ["It will double aid to Israel", "It ends aid and will be based on trade", "It bans weapons sales"], answer: 1,
        explain: "In 2026 Huckabee wrote that the new MOU 'ends aid & will be based on trade', after Israel proposed winding aid down." },
      sources: [
        { title: "U.S. Foreign Aid to Israel: Overview and Developments since October 7, 2023", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/RL33222", date: "2025" },
        { title: "Possible Changes in U.S. Military Aid to Israel: Considerations for Congress", publisher: "Congressional Research Service", url: "https://www.everycrsreport.com/reports/IN12695.html", date: "2026-06-04" },
        { title: "Rubio confirms administration, Israel discussing winding down U.S. aid in next MOU", publisher: "Jewish Insider", url: "https://jewishinsider.com/2026/06/rubio-israel-u-s-memorandum-of-understanding-winding-down-aid/", date: "2026-06" },
        { title: "Scoop: Trump lifts Biden's hold on 2,000-pound bombs to Israel", publisher: "Axios", url: "https://www.axios.com/2025/01/25/trump-israel-bomb-shipment-hold-gaza", date: "2025-01-25" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_il-3", kind: "relation", asOf: "2026-09-30",
      title: "Allies at war, a public divided",
      dek: "In 2025 and 2026 American and Israeli forces fought Iran side by side. At home, Americans' sympathies have shifted, and Democrats in Congress are breaking with a long consensus.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_il/us_il-3-hero.webp",
          alt: "Illustration of the US Capitol dome at dusk with a small crowd of protesters holding blank signs on the lawn.",
          caption: "Support for Israel, once shared across both parties, has become a divisive issue in American politics.",
          credit: "Illustration — not a photograph",
          prompt: "The white dome of the United States Capitol at dusk, a small crowd of protesters holding blank signs on the lawn in front, soft purple sky, street lamps coming on, calm but charged documentary mood, no flags, no legible text." },
        { type: "timeline", head: "War and politics", items: [
          ["22 Jun 2025", "US bombers strike Iran's nuclear sites during the 12-day war"],
          ["30 Jul 2025", "Most Senate Democrats vote to block some arms sales"],
          ["10 Oct 2025", "Gaza ceasefire under Trump's plan takes effect"],
          ["Feb 2026", "Gallup: sympathy for Palestinians passes Israelis"],
          ["28 Feb 2026", "Joint US–Israeli war on Iran begins"],
          ["8 Apr 2026", "US–Iran ceasefire, mediated by Pakistan"]
        ] },
        { type: "section", head: "Fighting together", md:
          "For decades America armed Israel but did not fight beside it. That changed with Iran (see [[lesson:il-6]]). During Israel's 12-day war with Iran in June 2025, American B-2 bombers struck the nuclear sites at Fordow, Natanz and Isfahan on 22 June. On 28 February 2026 the two countries launched a joint war on Iran that killed Supreme Leader Ali Khamenei (see [[lesson:us-6]]). It ended in a US–Iran ceasefire on 8 April, mediated by Pakistan (see [[lesson:ir_pk-3]]). In Gaza, too, Trump pressed both sides into the ceasefire of October 2025 and chairs the Board of Peace that oversees what comes next (see [[lesson:il-7]])." },
        { type: "section", head: "A shift in opinion", md:
          "American opinion has moved. In Gallup's annual poll in February 2026, for the first time since it began asking in 2001, Americans no longer sympathised more with Israelis than with Palestinians: 41% chose the Palestinians and 36% the Israelis, against 46% to 33% for the Israelis a year earlier. Among Americans aged 18 to 34, 53% sided with the Palestinians. The gap between parties is wide: about two-thirds of Democrats sympathise more with the Palestinians, while Republicans back the Israelis by 70% to 13%. Older Americans still lean towards Israel." },
        { type: "section", head: "Congress breaks ranks", md:
          "Support for Israel was once one of the few things both parties agreed on. On 30 July 2025, more than half of Senate Democrats voted for Senator Bernie Sanders' resolutions to block sales of bombs, guidance kits and rifles to Israel; they failed by 27 votes to 70 and 24 to 73, with every Republican against. In April 2026, during the Iran war, only seven Senate Democrats joined Republicans in voting down another such attempt. Some Republicans on the populist right have also questioned aid, including a proposed House resolution calling for it to end. The midterms (see [[lesson:us-7]]) and Israel's own election in October (see [[lesson:il-8]]) will test how deep these shifts run." },
        { type: "compare", head: "Two readings",
          left: { head: "An alliance at its peak", md:
            "The two militaries have never been closer. Fighting Iran together shows the alliance works." },
          right: { head: "An alliance at risk", md:
            "Young Americans and Democrats are turning away. Without broad public support, policy will change." } },
        { type: "section", head: "Why it matters", md:
          "The US–Israel alliance has rested on support from both parties. If one party turns against it, future presidents may treat Israel very differently, with effects across the Middle East." }
      ],
      takeaways: [
        "American forces struck Iran alongside Israel in June 2025 and in the 2026 war.",
        "In 2026, for the first time in Gallup's measure, Americans did not sympathise more with Israelis than Palestinians.",
        "Most Senate Democrats now vote to block some arms sales to Israel, ending a long bipartisan consensus."
      ],
      check: { q: "What did Gallup's February 2026 poll find?",
        choices: ["Record support for Israel among young Americans", "More Americans sympathised with Palestinians (41%) than Israelis (36%)", "Republicans had turned against Israel"], answer: 1,
        explain: "It was the first time since 2001 that Israelis were not ahead; the shift was led by Democrats and young people." },
      sources: [
        { title: "Israelis No Longer Ahead in Americans' Middle East Sympathies", publisher: "Gallup", url: "https://news.gallup.com/poll/702440/israelis-no-longer-ahead-americans-middle-east-sympathies.aspx", date: "2026-02-27" },
        { title: "Most Democrats vote for failed resolutions to block arms sales to Israel", publisher: "The Washington Post", url: "https://www.washingtonpost.com/politics/2025/07/31/senate-democrats-vote-block-israel-arms-sales/", date: "2025-07-31" },
        { title: "The Seven Democrats Who Joined Republicans in Opposing Measure to Block Arms Sales to Israel", publisher: "Time", url: "https://time.com/article/2026/04/16/the-seven-senate-democrats-who-caucused-with-republicans-to-continue-arms-sales-to-israel/", date: "2026-04-16" },
        { title: "The U.S. and Israel: From Aid to Strategic Integration", publisher: "International Crisis Group", url: "https://www.crisisgroup.org/cmt/middle-east-north-africa/israelpalestine/us-and-israel-aid-strategic-integration", date: "2026" }
      ]
    }
  ]
});
