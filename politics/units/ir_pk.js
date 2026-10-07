/* ============================================================
   Relationship — Iran & Pakistan 🇮🇷🇵🇰
   The first country to recognise Pakistan and its uneasy
   neighbour: a shared Baloch borderland that erupted into
   missile strikes in 2024, a gas pipeline stuck for 15 years,
   and Pakistan's role as mediator in the 2026 Iran war.
   Research note and sources: tools/research/ir_pk.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ir_pk", {
  id: "ir_pk",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ir_pk-1", kind: "relation", asOf: "2026-09-30",
      title: "Brothers, then rivals",
      dek: "Iran was the first country to recognise Pakistan, and the Shah backed it in its wars with India. After 1979 a Shia revolution next door and rival bets in Afghanistan turned friendship into suspicion.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir_pk/ir_pk-1-hero.webp",
          alt: "Illustration of a mosque with a turquoise tiled dome and minarets in a dusty desert town, with mountains behind.",
          caption: "Iran and Pakistan share Islam, Persian-influenced culture and poetry, but differ in their dominant sects.",
          credit: "Illustration — not a photograph",
          prompt: "A mosque with a turquoise tiled dome and two slender minarets in a dusty desert town, low mud-brick houses, rugged brown mountains behind, warm late-afternoon light, peaceful, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From friends to wary neighbours", items: [
          ["14 Aug 1947", "Iran is the first country to recognise Pakistan"],
          ["1955", "Both join the Western-backed Baghdad Pact, later CENTO"],
          ["1965, 1971", "The Shah supports Pakistan in its wars with India"],
          ["1979", "Iran's revolution; CENTO collapses"],
          ["1990s", "They back opposite sides in Afghanistan"],
          ["1998", "Taliban kill Iranian diplomats in Mazar-i-Sharif"]
        ] },
        { type: "section", head: "Early friendship", md:
          "Iran recognised Pakistan on the day it became independent, 14 August 1947, and in 1950 the Shah became the first foreign head of state to visit. Persian had been the language of Mughal India, and poets like Muhammad Iqbal, Pakistan's national poet, wrote in it. In 1955 both joined the Baghdad Pact, a Western alliance against Soviet influence later renamed CENTO. In Pakistan's wars with India in 1965 and 1971, the Shah's Iran sent supplies and political support (see [[lesson:pk-10]])." },
        { type: "section", head: "Revolution next door", md:
          "The 1979 Islamic Revolution (see [[lesson:ir-9]]) changed the relationship. Pakistan's ruler at the time, General Zia ul-Haq, was pursuing his own Sunni Islamisation (see [[lesson:pk-11]]) with Saudi money. Pakistan's large Shia minority, perhaps 15–20% of Muslims, took inspiration from Iran, while Saudi-funded Sunni seminaries spread hardline views. Sectarian violence between Sunni and Shia militants rose sharply in the 1980s and 1990s, and each side suspected outside sponsors." },
        { type: "section", head: "Afghanistan", md:
          "The two also backed rivals in Afghanistan. After the Soviet withdrawal, Pakistan supported the Taliban, who took Kabul in 1996; Iran backed the anti-Taliban Northern Alliance and Afghanistan's Shia Hazara minority. In August 1998, when the Taliban captured Mazar-i-Sharif, they killed eight Iranian diplomats and a journalist, and Iran massed troops on the border. After the Taliban's return in 2021 both have had to deal with them, but refugees and water disputes keep the region tense." },
        { type: "section", head: "Ties that survived", md:
          "Some links outlasted the revolution. In 1964 Iran, Pakistan and Turkey founded the Regional Cooperation for Development, which in 1985 became the Economic Cooperation Organization, now a ten-member bloc of Muslim states in Asia. Since 1992 Iran's interests section in Washington, which handles visas and passports because Iran and the United States have no embassies, has operated under the Pakistani embassy. There was a darker link too: the smuggling network of Abdul Qadeer Khan, the father of Pakistan's atomic bomb, sold Iran centrifuge designs and parts in the late 1980s and 1990s. Khan confessed on Pakistani television in 2004, and the designs helped launch Iran's nuclear programme (see [[unit:ir]])." },
        { type: "compare", head: "Two views",
          left: { head: "Brotherly nations", md:
            "Shared faith, culture and a long border make Iran and Pakistan natural partners, whatever outside powers want." },
          right: { head: "Uneasy rivals", md:
            "Pakistan's alliances with Saudi Arabia and the US, and Iran's ties with India, have always limited trust." } },
        { type: "section", head: "Why it matters", md:
          "Pakistan sits between Iran and its main Sunni rival, Saudi Arabia, and is close to both. How it balances them affects the Middle East and South Asia alike, especially since its 2025 defence pact with Saudi Arabia (see [[lesson:sa-6]])." }
      ],
      takeaways: [
        "Iran was the first country to recognise Pakistan and supported it in its 1965 and 1971 wars with India.",
        "After 1979 sectarian tensions and rival roles in Afghanistan strained ties.",
        "Taliban forces backed by Pakistan killed Iranian diplomats in 1998, bringing Iran close to war."
      ],
      check: { q: "What did Iran do on 14 August 1947?",
        choices: ["Invaded Balochistan", "Became the first country to recognise Pakistan", "Signed a pipeline deal"], answer: 1,
        explain: "Iran recognised Pakistan on its independence day, and the Shah was the first foreign head of state to visit, in 1950." },
      sources: [
        { title: "Evolution of Iran-Pakistan Relations", publisher: "PMF IAS", url: "https://www.pmfias.com/evolution-of-iran-pakistan-relations/", date: "n.d." },
        { title: "Historical Overview of the Relations between Iran and Pakistan", publisher: "Republic Policy", url: "https://republicpolicy.com/historical-overview-of-the-relations-between-iran-and-pakistan/", date: "n.d." },
        { title: "Pakistan-Iran relations revisited", publisher: "The Nation", url: "https://www.nation.com.pk/10-Nov-2015/pakistan-iran-relations-revisited", date: "2015-11-10" },
        { title: "Iran's consulate in Washington remains open despite war", publisher: "The National", url: "https://www.thenationalnews.com/news/us/2026/03/06/iran-consulate-washington-flag/", date: "2026-03-06" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ir_pk-2", kind: "relation", asOf: "2026-09-30",
      title: "The Baloch borderland",
      dek: "The Baloch people live on both sides of the Iran–Pakistan border, and each country accuses the other of sheltering their militants. In January 2024 the two fired missiles into each other's territory.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir_pk/ir_pk-2-hero.webp",
          alt: "Illustration of a barren desert borderland with a long fence and a watchtower running across rocky hills.",
          caption: "Iran and Pakistan share a 900-kilometre border through the deserts and mountains of Balochistan.",
          credit: "Illustration — not a photograph",
          prompt: "A barren desert borderland with a long wire fence and a lonely stone watchtower running across rocky brown hills, a dirt track alongside, harsh sunlight and dust haze, remote and tense, no people, no flags, no legible text." },
        { type: "timeline", head: "Across the border", items: [
          ["2012", "Jaish al-Adl formed, fighting Iran from Baloch areas"],
          ["2019", "Suicide bombing kills 27 Revolutionary Guards; Iran blames bases in Pakistan"],
          ["16 Jan 2024", "Iranian missiles and drones strike Pakistan's Balochistan"],
          ["18 Jan 2024", "Pakistan strikes targets in Iran's Sistan and Baluchestan"],
          ["Late Jan 2024", "Ambassadors return; tensions ease"],
          ["Apr 2024", "President Raisi visits Pakistan"]
        ] },
        { type: "section", head: "One people, two states", md:
          "The Baloch people live across a region split between Pakistan, Iran and Afghanistan. On both sides of the roughly 900-kilometre border they are among the poorest people in their countries and have long complained of neglect and repression. In Pakistan, Baloch separatists such as the Baloch Liberation Army fight the state and attack Chinese projects (see [[lesson:pk_cn-2]]). In Iran, where most Baloch are Sunni in a Shia state, the militant group Jaish al-Adl attacks Iranian forces. Smuggling of fuel and goods across the border is a way of life for many families." },
        { type: "section", head: "Tit-for-tat strikes", md:
          "Iran long accused Pakistan of letting Jaish al-Adl operate from its territory, and Pakistan accused Iran of sheltering Baloch separatists. On 16 January 2024 Iran fired missiles and drones at what it said were Jaish al-Adl bases in Pakistan's Balochistan province; Pakistan said two children were killed. Pakistan recalled its ambassador and two days later struck targets inside Iran's Sistan and Baluchestan province, killing nine people, including four children, according to Iran. It was the first time the two neighbours had attacked each other so openly." },
        { type: "section", head: "A region already on edge", md:
          "The strikes came at a tense moment. In December 2023 Jaish al-Adl killed 11 Iranian police officers in an attack on a police station in Rask, in Sistan and Baluchestan. On 3 January 2024 two Islamic State suicide bombings in Kerman killed more than 90 people at a memorial for the general Qassem Soleimani. Iran answered by firing missiles at targets in Iraq and Syria on 15 January, and struck Pakistan the next day. Pakistan named its reply Operation Marg Bar Sarmachar, borrowing Iran's own slogan style: \"death to the guerrillas\". Pakistan has also been fencing its side of the border since 2019." },
        { type: "section", head: "Stepping back", md:
          "Neither side wanted a war. Within days, ambassadors returned, and in April 2024 Iran's president Ebrahim Raisi made a three-day visit to Pakistan. The two agreed on joint border patrols and intelligence sharing. When the 2026 war began, thousands of people crossed from Iran into Pakistan's Balochistan to escape, and Pakistan opened road routes for trade to Iran (see [[lesson:ir_pk-3]])." },
        { type: "compare", head: "Who is to blame?",
          left: { head: "Tehran", md:
            "Terrorists attack Iran from Pakistani soil. If Pakistan will not act, Iran has a right to defend itself." },
          right: { head: "Islamabad", md:
            "Iran violated Pakistan's sovereignty. Pakistan also suffers from militants based across the border, and cooperation is the answer." } },
        { type: "section", head: "Why it matters", md:
          "The 2024 strikes showed how quickly border insurgencies can escalate between states, even friendly ones, in a region with nuclear-armed Pakistan and a nearby war. Balochistan's insecurity also threatens the pipeline and trade routes both countries hope to build." }
      ],
      takeaways: [
        "The Baloch live on both sides of the Iran–Pakistan border, and militants attack each state from the other side.",
        "In January 2024 Iran and Pakistan struck each other's territory, killing civilians.",
        "They quickly de-escalated and agreed on border cooperation."
      ],
      check: { q: "What happened between Iran and Pakistan in January 2024?",
        choices: ["They signed a free trade deal", "They launched missile strikes on militants in each other's territory", "They closed their embassies permanently"], answer: 1,
        explain: "Iran struck Pakistan's Balochistan on 16 January and Pakistan struck Iran on 18 January; both then de-escalated." },
      sources: [
        { title: "Iran missile attack: Pakistan condemns deadly strike on its territory as tensions spike across region", publisher: "CNN", url: "https://www.cnn.com/2024/01/17/middleeast/iran-missile-attack-pakistan-intl-hnk", date: "2024-01-17" },
        { title: "Pakistan accuses Iran of launching airstrike on its territory, killing 2 children", publisher: "The Times of Israel", url: "https://www.timesofisrael.com/pakistan-accuses-iran-of-launching-airstrike-on-its-territory-killing-2-children/amp/", date: "2024-01-17" },
        { title: "Pakistan to fence Iran border", publisher: "The Nation", url: "https://www.nation.com.pk/21-Apr-2019/pakistan-to-fence-iran-border", date: "2019-04-21" },
        { title: "Border security", publisher: "European Union Agency for Asylum", url: "https://www.euaa.europa.eu/pakistan-country-focus/412-border-security", date: "2025" },
        { title: "Balochistan on alert as thousands cross border from Iran", publisher: "Dawn", url: "https://www.dawn.com/news/1978923", date: "2026-03" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ir_pk-3", kind: "relation", asOf: "2026-09-30",
      title: "A pipeline, a war and a mediator",
      dek: "A pipeline meant to carry Iranian gas to Pakistan has been stuck for 15 years by American sanctions. In 2026 Pakistan became the go-between in the US–Iran war, and a lifeline for Iranian trade.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir_pk/ir_pk-3-hero.webp",
          alt: "Illustration of a large gas pipeline ending abruptly in a desert, with rusting sections of pipe stacked beside it.",
          caption: "Iran says it built its side of the pipeline to the border; Pakistan's side was never built.",
          credit: "Illustration — not a photograph",
          prompt: "A large steel gas pipeline running across a flat desert and ending abruptly, rusting sections of unused pipe stacked beside it, distant mountains, dusty haze, abandoned and symbolic, no people, no flags, no legible text." },
        { type: "facts", head: "The pipeline", rows: [
          ["Agreed", "2009–10, after years of talks that once included India"],
          ["Length", "About 1,900 km, most of it in Iran"],
          ["Pakistan's section", "Never built, citing US sanctions"],
          ["Arbitration", "Iran filed in September 2024, seeking about $18 billion"],
          ["2026", "Pakistan asks for a 10-year extension to 2035"]
        ] },
        { type: "section", head: "Stuck pipe", md:
          "Pakistan is short of gas, and Iran has the world's second-largest reserves. In 2009–10 the two agreed a pipeline to carry Iranian gas to Pakistan for 25 years; India had once been part of the plan but dropped out. Iran says it built its section to the border. Pakistan never built its part, fearing American sanctions on anyone doing business with Iran's energy sector. In September 2024 Iran began arbitration in Paris, seeking about $18 billion in penalties. In January 2026 Pakistan asked for a ten-year extension, to 2035, and set up a committee to seek a settlement. Meanwhile it has turned to liquefied gas from Qatar." },
        { type: "section", head: "Mediator in war", md:
          "When the United States and Israel struck Iran on 28 February 2026 (see [[lesson:ir-7]]), Pakistan found itself in a unique position. It was close to Washington, where its army chief Asim Munir had built ties with Donald Trump (see [[lesson:pk-6]]), bound to Saudi Arabia by a defence pact, and a neighbour of Iran with a large Shia population. Pakistan mediated the two-week ceasefire of 8 April 2026 and on 11–12 April hosted US–Iran talks in Islamabad, the highest-level direct contact between the two since 1979. The talks stalled, but Pakistan kept mediating until a US–Iran memorandum in June. Iranian officials publicly thanked Pakistan for its efforts." },
        { type: "section", head: "Trade by road", md:
          "With the Strait of Hormuz disrupted and a US naval blockade of Iranian ports, Pakistan opened six overland transit routes for goods bound for Iran in April 2026. Trade through border towns like Taftan has become more important, though insecurity in Balochistan and US sanctions limit it. In July 2026 officials from both countries agreed to expand border markets and crossings." },
        { type: "section", head: "Balancing act", md:
          "Pakistan's position is delicate. It depends on the IMF, Gulf money and good ties with Washington, while sharing a long border and many religious and cultural ties with Iran. Its leaders insist they can keep channels open to all sides; critics warn it could be squeezed if the war widens." },
        { type: "compare", head: "Pakistan's balancing act",
          left: { head: "An asset", md:
            "Pakistan's ties to Washington, Riyadh and Tehran make it one of the few countries able to talk to all sides." },
          right: { head: "A risk", md:
            "Trying to please everyone could leave Pakistan exposed to US sanctions, Iranian anger or Saudi pressure." } },
        { type: "section", head: "Why it matters", md:
          "Pakistan's role in the Iran war has raised its international standing, but its energy needs and border insecurity tie it to Iran in ways Washington dislikes. How the war ends will shape whether the pipeline, and wider trade, ever take off." }
      ],
      takeaways: [
        "A gas pipeline from Iran to Pakistan agreed in 2009–10 has stalled on Pakistan's side because of US sanctions; Iran seeks $18 billion.",
        "Pakistan mediated the April 2026 US–Iran ceasefire and hosted talks in Islamabad.",
        "It opened overland trade routes to Iran as Gulf shipping was disrupted."
      ],
      check: { q: "Why has Pakistan not built its part of the Iran–Pakistan gas pipeline?",
        choices: ["There is no gas in Iran", "It fears US sanctions on business with Iran's energy sector", "India blocked it"], answer: 1,
        explain: "Pakistan cites US sanctions; Iran has taken it to arbitration, seeking about $18 billion." },
      sources: [
        { title: "Pakistan seeks 10-year extension from Iran on gas pipeline amid $18 billion arbitration risk", publisher: "Profit by Pakistan Today", url: "https://profit.pakistantoday.com.pk/2026/01/23/pakistan-seeks-10-year-extension-from-iran-on-gas-pipeline-amid-18-billion-arbitration-risk-report/", date: "2026-01-23" },
        { title: "Pakistan opens up road trade routes into Iran amid Hormuz blockade", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/4/30/pakistan-opens-up-road-trade-routes-into-iran-amid-hormuz-blockade", date: "2026-04-30" },
        { title: "Pakistan, Iran agree to boost border trade, connectivity during envoy's visit to Zahedan", publisher: "The Nation", url: "https://www.nation.com.pk/31-Jul-2026/pakistan-iran-agree-boost-border-trade-connectivity-envoy-s-visit-zahedan", date: "2026-07-31" },
        { title: "How Pakistan mediated a US-Iran agreement after more than 100 days of war", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/15/how-pakistan-mediated-a-us-iran-agreement-after-more-than-100-days-of-war", date: "2026-06-15" }
      ]
    }
  ]
});
