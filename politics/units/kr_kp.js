/* ============================================================
   Relationship — South Korea & North Korea 🇰🇷🇰🇵
   Summits and sunshine, the Kaesong factory town, and the war of
   balloons and loudspeakers across the DMZ. Kim's "two hostile
   states" doctrine is in kp-7; the Korean War in kp-10.
   Research note and sources: tools/research/kr_kp.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("kr_kp", {
  id: "kr_kp",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "kr_kp-1", kind: "relation", asOf: "2026-09-30",
      title: "Sunshine and summits",
      dek: "Five times the leaders of the two Koreas have met. Each round of engagement raised hopes of reconciliation, and each ended in a new freeze.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr_kp/kr_kp-1-hero.webp",
          alt: "Illustration of a row of low blue huts straddling a concrete border line, with a large grey building on each side and empty ground between.",
          caption: "Panmunjom, in the demilitarised zone, where Moon Jae-in and Kim Jong Un met in April 2018.",
          credit: "AI illustration — not a photograph",
          prompt: "A row of low sky-blue single-storey huts straddling a raised concrete border line, a large grey formal building on each side, open paved ground between, a few pine trees, clear spring morning, tense stillness, no people, no flags, no legible text." },
        { type: "timeline", head: "Engagement and freeze", items: [
          ["1972", "First joint statement on unification"],
          ["1991", "Both Koreas join the UN; Basic Agreement signed"],
          ["Jun 2000", "First summit: Kim Dae-jung and Kim Jong Il"],
          ["Oct 2007", "Second summit: Roh Moo-hyun and Kim Jong Il"],
          ["2010", "Cheonan sinking and Yeonpyeong shelling"],
          ["2018", "Three summits between Moon Jae-in and Kim Jong Un"],
          ["Jun 2020", "North blows up the joint liaison office"],
          ["2024", "North declares the South a hostile state"]
        ] },
        { type: "section", head: "Sunshine", md:
          "For decades after the Korean War (see [[lesson:kp-10]]), the two states barely spoke. In 1998 South Korea's new president, the veteran democrat Kim Dae-jung, launched the 'Sunshine Policy', named after the fable in which the sun, not the wind, persuades a traveller to take off his coat. Seoul would offer aid, trade and tourism in the hope of coaxing the North to open up. In June 2000 Kim flew to Pyongyang for the first-ever summit with Kim Jong Il, and later that year won the Nobel Peace Prize. It later emerged that his government had secretly paid about $500 million to the North before the summit. His successor, Roh Moo-hyun, held a second summit in 2007." },
        { type: "section", head: "Freeze", md:
          "Conservative presidents from 2008 tied help to progress on North Korea's nuclear weapons. Relations collapsed in 2010, when a South Korean warship, the Cheonan, sank, killing 46 sailors; an international investigation found a North Korean torpedo had hit it, which Pyongyang denied. Months later the North shelled Yeonpyeong Island, killing four South Koreans. Reunions of families divided since the war, 21 rounds of them since 2000, became rarer. Of the 133,000 South Koreans who registered to find relatives in the North, three-quarters have now died." },
        { type: "section", head: "2018: the last spring", md:
          "Moon Jae-in, elected in 2017, seized on the 2018 Winter Olympics in Pyeongchang, where the two Koreas marched together. On 27 April 2018 he met Kim Jong Un at Panmunjom, and the two leaders stepped hand in hand across the border line. Two more summits followed, a military agreement to reduce tensions along the border, and a joint liaison office in the North's town of Kaesong. They also helped set up Kim's meetings with Donald Trump. When those failed in 2019, Pyongyang turned on Seoul. In June 2020 it blew up the liaison office. In September 2026 a Seoul court ordered the North to pay about ₩44.6 billion in damages, a symbolic ruling it cannot enforce." },
        { type: "compare", head: "Did engagement work?",
          left: { head: "Supporters", md:
            "Engagement lowered the risk of war, reunited families and showed northerners the South's prosperity. Freezes only made the North more dangerous." },
          right: { head: "Critics", md:
            "Aid and cash propped up the regime and paid for its weapons. The North pocketed concessions and kept building bombs." } },
        { type: "section", head: "Why it matters", md:
          "Every South Korean president since 1998 has had to choose between engagement and pressure. The current one, Lee Jae-myung, has gone further than any: his government now speaks of 'peaceful coexistence' between two states rather than unification (see [[lesson:kr-8]]). Pyongyang, which has declared the South its most hostile state (see [[lesson:kp-7]]), has so far rejected every approach." }
      ],
      takeaways: [
        "Kim Dae-jung's 'Sunshine Policy' led to the first inter-Korean summit in 2000.",
        "Engagement repeatedly gave way to freezes, after the 2010 Cheonan sinking and again after 2019.",
        "In 2018 Moon Jae-in held three summits with Kim Jong Un; in 2020 the North blew up their liaison office."
      ],
      check: { q: "Where did Moon Jae-in and Kim Jong Un first meet in April 2018?",
        choices: ["Beijing", "Panmunjom, in the demilitarised zone", "Singapore"], answer: 1,
        explain: "They met at the truce village of Panmunjom on 27 April 2018 and stepped across the border line together." },
      sources: [
        { title: "Sunshine Policy", publisher: "Britannica", url: "https://www.britannica.com/topic/Sunshine-Policy", date: "n.d." },
        { title: "North Korea demolishes inter-Korean liaison office in Kaesong", publisher: "The Diplomat", url: "https://thediplomat.com/2020/06/north-korea-demolishes-inter-korean-liaison-office-in-kaesong/", date: "2020-06" },
        { title: "Court orders NK to pay S. Korea $32.5 mil. over 2020 demolition of liaison office", publisher: "The Korea Times", url: "https://www.koreatimes.co.kr/foreignaffairs/20260916/court-orders-nk-to-pay-s-korea-325-mil-over-2020-demolition-of-liaison-office", date: "2026-09-16" },
        { title: "75% of registered S. Koreans separated from family in North have died", publisher: "UPI", url: "https://www.upi.com/Top_News/World-News/2026/01/15/separated-familes-north-korea-75-percent-have-died-unification-ministry/1171768462506/", date: "2026-01-15" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "kr_kp-2", kind: "relation", asOf: "2026-09-30",
      title: "Kaesong: the factory town",
      dek: "For twelve years, South Korean companies ran factories just inside North Korea, staffed by more than 50,000 North Korean workers. It was the boldest experiment in peace through trade, and it failed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr_kp/kr_kp-2-hero.webp",
          alt: "Illustration of an empty industrial park of low factory buildings in a valley, with overgrown lots and hills behind.",
          caption: "The Kaesong Industrial Complex, just north of the border, has stood idle since February 2016.",
          credit: "AI illustration — not a photograph",
          prompt: "An empty industrial park of neat low factory buildings in a green valley, weeds growing through parking lots, closed gates, rounded hills behind, grey overcast sky, abandoned and quiet, no people, no flags, no legible text or signs." },
        { type: "facts", head: "The complex", rows: [
          ["Location", "Kaesong, North Korea, about 10 km north of the border"],
          ["Opened", "2004"],
          ["At its peak", "124 South Korean firms, about 54,700 North Korean workers"],
          ["Products", "Clothes, shoes, watches, kitchenware and parts"],
          ["Closed", "10 February 2016, by South Korea"]
        ] },
        { type: "section", head: "An experiment", md:
          "Kaesong was the flagship of the Sunshine years (see [[lesson:kr_kp-1]]). Agreed after the 2000 summit and opened in 2004, the zone let South Korean firms, mostly small and medium manufacturers, build factories on North Korean soil. They brought capital, machines and managers; the North supplied land and cheap, disciplined labour. Workers were paid through the North Korean state, which kept much of the money, and wages were far lower than in the South. Buses and trucks crossed the demilitarised zone every day. Supporters hoped the zone would show North Koreans how a market economy worked and give Pyongyang a stake in peace." },
        { type: "section", head: "Hostage to politics", md:
          "The complex survived the 2010 Cheonan sinking, but it became a lever. In April 2013, amid tensions after a nuclear test, the North withdrew its workers and shut the zone for five months. Then on 10 February 2016, after a fourth nuclear test and a long-range rocket launch, South Korea's conservative president Park Geun-hye closed it herself, arguing that the wages, around $100 million a year, were paying for weapons. The North expelled the South Koreans within hours and seized the factories and their stock. The companies' losses ran into hundreds of millions of dollars." },
        { type: "section", head: "Afterlife", md:
          "Moon Jae-in hoped to reopen Kaesong in 2018, but UN sanctions, tightened after 2016, banned joint ventures with the North, and the United States opposed it. The joint liaison office built there was blown up in 2020. Satellite images since have shown North Korea running some of the factories on its own. In October 2024 the North blew up the roads and railways that connected Kaesong to the South, and in 2026 it wrote into its constitution that its territory borders 'the Republic of Korea' to the south, as a foreign country." },
        { type: "compare", head: "Two verdicts",
          left: { head: "A model", md:
            "Kaesong built daily contact and trust between Koreans. Economic ties like it are the only realistic path to lasting peace." },
          right: { head: "A mistake", md:
            "It sent hard currency to a nuclear-armed regime and left South Korean firms at its mercy. The North could take it hostage at will." } },
        { type: "section", head: "Why it matters", md:
          "Kaesong is the clearest test so far of whether trade can change North Korea. Its fate is often quoted by both sides in the South's debate: engagers point to the thousands of daily crossings it made normal, sceptics to how easily Pyongyang turned it into leverage. Reopening it would need UN sanctions to be lifted, which is not in sight." }
      ],
      takeaways: [
        "From 2004 to 2016, 124 South Korean firms ran factories in Kaesong, North Korea, with about 54,700 North Korean workers.",
        "South Korea shut the zone in February 2016 after a nuclear test, saying the wages funded weapons.",
        "UN sanctions now bar reopening it, and the North blew up the roads linking it to the South in 2024."
      ],
      check: { q: "Who closed the Kaesong Industrial Complex in February 2016?",
        choices: ["North Korea", "South Korea", "The United Nations"], answer: 1,
        explain: "President Park Geun-hye shut it after the North's fourth nuclear test, arguing its wages were funding weapons." },
      sources: [
        { title: "Kaesong Industrial Complex: A Tortured History and Uncertain Future", publisher: "38 North", url: "https://www.38north.org/2024/09/kaesong-industrial-complex-a-tortured-history-and-uncertain-future/", date: "2024-09" },
        { title: "When Will Kaesong Reopen?", publisher: "Korea Economic Institute of America", url: "https://keia.org/analysis/when-will-kaesong-reopen/", date: "n.d." },
        { title: "The Case for Kaesong: Fostering Korean Peace through Economic Ties", publisher: "International Crisis Group", url: "https://www.crisisgroup.org/rpt/asia-pacific/korean-peninsula/300-case-kaesong-fostering-korean-peace-through-economic-ties", date: "2019" },
        { title: "North Korea revises constitution to drop reunification goal", publisher: "UPI", url: "https://www.upi.com/Top_News/World-News/2026/05/06/North-Korea-constitution-revision-drops-reunification-Kim-Jong-Un/7001778061562/", date: "2026-05-06" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "kr_kp-3", kind: "relation", asOf: "2026-09-30",
      title: "Balloons, loudspeakers and leaflets",
      dek: "Along the most heavily armed border in the world, the two Koreas have long fought with words and sound. In 2024 it turned into a war of trash balloons; in 2025 South Korea switched off its speakers.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr_kp/kr_kp-3-hero.webp",
          alt: "Illustration of large white balloons carrying bags drifting over green hills and a fenced border at dusk.",
          caption: "From May 2024 North Korea sent thousands of balloons carrying rubbish over the border.",
          credit: "AI illustration — not a photograph",
          prompt: "Several large white balloons carrying plastic bags drifting over forested green hills and a double wire border fence with guard posts at dusk, pale pink sky, eerie and absurd, no people, no flags, no legible text." },
        { type: "timeline", head: "The noise war", items: [
          ["1963", "Loudspeaker broadcasts begin"],
          ["2004", "Both sides switch them off"],
          ["2015–16", "Speakers back on after a landmine attack and a nuclear test"],
          ["Apr 2018", "Off again before the Panmunjom summit"],
          ["May 2024", "North Korea starts sending trash balloons"],
          ["Jun 2024", "South resumes loudspeaker broadcasts"],
          ["11 Jun 2025", "President Lee switches them off"],
          ["Aug 2025", "Both sides start taking speakers down"]
        ] },
        { type: "section", head: "Words as weapons", md:
          "For decades each Korea blasted propaganda across the demilitarised zone: the South played news, weather and K-pop, the North praise for its leaders. Defector-run groups in the South also sent balloons carrying leaflets, dollar bills, USB sticks with South Korean dramas and chocolate pies into the North. Pyongyang treats this as a serious threat, because outside information undermines the regime's control. The speakers were silenced in 2004, switched on again in 2015 after North Korean landmines maimed two South Korean soldiers, and turned off before the 2018 summits." },
        { type: "section", head: "Trash balloons", md:
          "In 2020, under pressure from Pyongyang, South Korea's parliament banned leaflet launches; the Constitutional Court struck the law down as a violation of free speech in 2023. Leaflets resumed, and in May 2024 North Korea replied in kind: balloons carrying cigarette butts, waste paper, plastic and even manure. By September more than 5,500 had crossed, some landing in central Seoul and one on the grounds of the presidential office. The South restarted its loudspeakers in June 2024 for the first time since 2018; the North answered with speakers of its own, blaring howls, gongs and grinding metal that kept border villagers awake at night." },
        { type: "section", head: "Silence", md:
          "President Lee Jae-myung, who took office in June 2025, ordered the South's speakers switched off on 11 June, asked activists to stop sending leaflets and in July returned six North Koreans who had drifted south by sea. The North's noise broadcasts stopped the next day. In August the South began dismantling its speakers, and its military reported North Korean troops taking some of theirs down too. Pyongyang has otherwise ignored Seoul's overtures, but the border has been quieter than at any time since 2018." },
        { type: "compare", head: "The loudspeaker debate",
          left: { head: "Switch them off", md:
            "Speakers and leaflets provoke the North, endanger border towns and do little. Lowering tension is the first step to any talks." },
          right: { head: "Keep broadcasting", md:
            "Outside news is North Koreans' only window on the truth. Silencing it rewards Pyongyang's pressure and abandons them." } },
        { type: "section", head: "Why it matters", md:
          "The noise war shows what each side fears. The North fears information more than almost anything; the South's leaders must balance free speech and human rights against the safety of border communities. For now, the two Koreas' only exchange is silence, which in the demilitarised zone counts as progress. Whether it lasts depends on Pyongyang, which has made quiet borders no promise of talks." }
      ],
      takeaways: [
        "For decades the two Koreas have fought a propaganda war of loudspeakers and leaflet balloons across the DMZ.",
        "In 2024 North Korea sent thousands of trash balloons south, and South Korea restarted its loudspeakers.",
        "In June 2025 President Lee switched the speakers off; the North stopped its own broadcasts the next day."
      ],
      check: { q: "What did North Korea send over the border from May 2024?",
        choices: ["Drones carrying leaflets", "Balloons carrying rubbish", "Radio transmitters"], answer: 1,
        explain: "It launched thousands of balloons carrying waste paper, cigarette butts and other rubbish, in reply to leaflets from the South." },
      sources: [
        { title: "North Korea launches some 420 trash balloons toward South, first in nearly month", publisher: "NK News", url: "https://www.nknews.org/2024/09/north-korea-launches-some-420-trash-balloons-toward-south-first-in-nearly-month/", date: "2024-09" },
        { title: "South Korea to restart loudspeaker broadcasts into North to combat trash balloons", publisher: "NPR", url: "https://www.npr.org/2024/06/09/g-s1-3621/south-korea-to-restart-loudspeaker-broadcasts-into-north-to-combat-trash-balloons", date: "2024-06-09" },
        { title: "A battle of sounds stops at the inter-Korean border", publisher: "NPR", url: "https://www.npr.org/2025/06/18/g-s1-73286/battle-of-sounds-inter-korean-border", date: "2025-06-18" },
        { title: "North Korea takes down propaganda loudspeakers from tense border", publisher: "CNN", url: "https://www.cnn.com/2025/08/09/asia/north-korea-removes-speakers-border-intl-hnk", date: "2025-08-09" },
        { title: "Peace First: Seoul's Two-State Answer to a Changed Peninsula", publisher: "38 North", url: "https://www.38north.org/2026/09/peace-first-seouls-two-state-answer-to-a-changed-peninsula/", date: "2026-09" }
      ]
    }
  ]
});
