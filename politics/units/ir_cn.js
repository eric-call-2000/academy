/* ============================================================
   Relationship — Iran & China 🇮🇷🇨🇳
   The Shah's recognition of Beijing, Silkworm missiles in the
   Iran–Iraq war and nuclear help; oil, sanctions and the 25-year
   pact; and a partner that condemned the 2026 war but would not
   fight it.
   The war itself is in ir-7; Russia's role is in ir_ru.
   Research note and sources: tools/research/ir_cn.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("ir_cn", {
  id: "ir_cn",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ir_cn-1", kind: "relation", asOf: "2026-10-01",
      title: "The Shah, the ayatollahs and the Silkworm",
      dek: "China befriended the Shah, then quickly made peace with the revolution that toppled him. In the Iran–Iraq war it sold missiles to both sides, and it helped Iran's nuclear programme until Washington pushed it to stop.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir_cn/ir_cn-1-hero.webp",
          alt: "Illustration of a tanker burning at sea in the 1980s, with a missile trail in the sky above.",
          caption: "Iran fired Chinese-made Silkworm missiles at shipping in the Gulf during the Iran–Iraq war.",
          credit: "Illustration — not a photograph",
          prompt: "An oil tanker on fire at sea in the Persian Gulf in the 1980s, black smoke rising, a white missile trail curving across a hazy sky, a small patrol boat nearby, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Old ties", items: [
          ["Aug 1971", "Iran recognises the People's Republic"],
          ["Aug 1978", "Chinese leader Hua Guofeng visits the Shah"],
          ["1979", "Revolution; China recognises the Islamic Republic"],
          ["1980–88", "China sells arms to both Iran and Iraq"],
          ["1987", "Iranian Silkworm missiles strike tankers off Kuwait"],
          ["1997", "China tells the US it will end new nuclear cooperation with Iran"]
        ] },
        { type: "section", head: "The Shah's China", md:
          "Iran and China share a past along the Silk Road, but modern ties began in August 1971, when their ambassadors met in Islamabad and Iran recognised the People's Republic. The Shah, an American ally, saw China as a fellow opponent of Soviet power. In August 1978 China's leader Hua Guofeng visited Tehran. Months later the Shah fell (see [[lesson:ir-9]]), and Beijing had to explain why it had embraced him." },
        { type: "section", head: "Arms for both sides", md:
          "The new Islamic Republic distrusted both superpowers, 'neither East nor West'. China, not a superpower then, was an acceptable partner. When Iraq invaded Iran in 1980 (see [[lesson:ir-11]]), much of the world refused to sell Iran weapons. China sold it tanks, jets and missiles, while also selling arms to Iraq. Its HY-2 anti-ship missiles, known in the West as Silkworms, were used by Iran against tankers in the Gulf; in 1987 they hit ships in Kuwaiti waters, including a US-flagged tanker." },
        { type: "section", head: "Nuclear help", md:
          "In the 1980s and early 1990s Chinese institutions helped Iran's nuclear programme, training scientists and supplying equipment, and China prepared to sell Iran two power reactors. Washington pressed hard. In 1997, as part of improving relations with the US, China promised to end new nuclear cooperation with Iran, and the reactor deal was dropped. Iran's programme continued with other suppliers and its own scientists." },
        { type: "section", head: "Why China mattered to Iran", md:
          "For a country under Western embargo, China was a source of weapons, machinery and cheap consumer goods. Iranian merchants flocked to Chinese factories, and Chinese firms helped build the Tehran metro. China was also a permanent member of the UN Security Council, able to soften resolutions against Iran. But Beijing never made Iran a priority over its far larger trade with America." },
        { type: "section", head: "Missiles that travelled", md:
          "Chinese missile designs spread through Iran to its allies. Iran built its own version of China's C-802 anti-ship missile, and in 2006 Hezbollah, Iran's ally in Lebanon, used one to hit an Israeli warship off Beirut. American officials repeatedly sanctioned Chinese companies for selling missile parts and chemicals to Iran, even after Beijing promised to tighten its export controls." },
        { type: "compare", head: "What each saw",
          left: { head: "Iran", md:
            "A great power with no colonial past in Iran, willing to trade when the West would not." },
          right: { head: "China", md:
            "A big, oil-rich country and arms customer, useful but never worth a fight with Washington." } },
        { type: "section", head: "Why it matters", md:
          "From the start, China's support for Iran has had limits. It sells, buys and shields Iran at the UN, but backs off when the price in Washington is too high." }
      ],
      takeaways: [
        "Iran recognised the People's Republic in 1971, under the Shah.",
        "China sold arms to both sides in the Iran–Iraq war, including Silkworm missiles to Iran.",
        "China helped Iran's nuclear programme, then promised the US in 1997 to stop new cooperation."
      ],
      check: { q: "What did China do during the Iran–Iraq war?",
        choices: ["It sent troops to help Iran", "It sold weapons to both Iran and Iraq", "It refused all arms sales"], answer: 1,
        explain: "Its Silkworm anti-ship missiles were used by both sides." },
      sources: [
        { title: "Chinese-Iranian Relations: Diplomatic and Commercial Relations, 1949–90", publisher: "Encyclopaedia Iranica", url: "https://www.iranicaonline.org/articles/chinese-iranian-v/", date: "n.d." },
        { title: "China-Iran Relations: A Limited but Enduring Strategic Partnership", publisher: "US-China Economic and Security Review Commission", url: "https://www.uscc.gov/sites/default/files/2021-06/China-Iran_Relations.pdf", date: "2021-06" },
        { title: "A Closer Look at China-Iran Relations", publisher: "CNA", url: "https://www.cna.org/reports/2010/D0023622.A3.pdf", date: "2010" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ir_cn-2", kind: "relation", asOf: "2026-10-01",
      title: "Oil, sanctions and a 25-year pact",
      dek: "China voted for UN sanctions on Iran, then helped negotiate the 2015 nuclear deal. When America walked out, Chinese refiners became almost the only buyers of Iran's oil.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir_cn/ir_cn-2-hero.webp",
          alt: "Illustration of two rusty oil tankers side by side at sea, transferring oil through hoses at night.",
          caption: "Iranian oil reaches China through ship-to-ship transfers and a 'shadow fleet' of old tankers.",
          credit: "Illustration — not a photograph",
          prompt: "Two old rusty oil tankers moored side by side on a calm dark sea at night, thick hoses between them, deck lights glowing, a distant coastline with refinery lights, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Customer of last resort", items: [
          ["2006–10", "China votes for UN sanctions on Iran's nuclear programme"],
          ["2015", "China helps negotiate the nuclear deal"],
          ["Jan 2016", "Xi visits Tehran after the deal"],
          ["2018", "US leaves the deal; Western buyers leave"],
          ["Mar 2021", "25-year cooperation agreement signed"],
          ["Jul 2023", "Iran joins the Shanghai Cooperation Organisation"]
        ] },
        { type: "section", head: "Sanctions and a deal", md:
          "As Iran's nuclear programme grew in the 2000s, China joined the other permanent members of the Security Council in voting for four rounds of UN sanctions between 2006 and 2010, though it worked to water them down. It then sat at the table for the 2015 nuclear deal, which lifted UN sanctions in return for limits on enrichment (see [[lesson:ir-3]]). In January 2016, days after the deal took effect, Xi Jinping visited Tehran and the two sides agreed a comprehensive strategic partnership." },
        { type: "section", head: "Buying what others won't", md:
          "When President Trump pulled the US out of the deal in 2018 and reimposed sanctions, European and Asian buyers stopped taking Iranian oil. China did not. Small independent refineries, nicknamed teapots and clustered in Shandong province, bought Iranian crude at a discount, often relabelled as Malaysian and moved through ship-to-ship transfers by a 'shadow fleet' of old tankers. By 2023 China took about 89% of Iran's oil exports, up from a quarter in 2017, and by 2025 over 90%." },
        { type: "section", head: "The 25-year pact", md:
          "In March 2021 Iran and China signed a 25-year cooperation agreement covering energy, banking, telecoms and transport. Reports said China would invest $400 billion, but the text was never published, no figures were confirmed, and the promised investment largely failed to appear. Chinese companies remain wary of American sanctions, and most big state firms keep their distance from Iran." },
        { type: "section", head: "Joining China's clubs", md:
          "Iran became a full member of the China-led Shanghai Cooperation Organisation in July 2023 and joined the BRICS group in 2024. In March 2023 China also announced the deal restoring Iran's relations with Saudi Arabia (see [[lesson:sa_cn-2]]). For Iran, these memberships signalled that it was not isolated; for China, they expanded its influence at little cost." },
        { type: "section", head: "Phones, cameras and fines", md:
          "Chinese technology runs through Iran's phone networks and, critics say, its surveillance of protesters. The cost to Chinese firms could be high: in 2017 the telecoms giant ZTE agreed to pay about $1.19 billion in US penalties for shipping American technology to Iran, and in 2018 Canada arrested Huawei's finance chief at Washington's request over alleged Iran sanctions breaches (see [[lesson:ca_cn-2]])." },
        { type: "compare", head: "Two views of the oil trade",
          left: { head: "Lifeline", md:
            "Chinese purchases keep Iran's economy and its government afloat despite sanctions." },
          right: { head: "Bargain", md:
            "China pays deep discounts, invests little, and drops Iran whenever the risk rises." } },
        { type: "section", head: "Why it matters", md:
          "China's oil purchases blunted American 'maximum pressure' and funded Iran's state, which is why Washington now targets the Chinese refineries themselves." }
      ],
      takeaways: [
        "China voted for UN sanctions on Iran in 2006–10 and helped negotiate the 2015 nuclear deal.",
        "After the US left the deal in 2018, China's teapot refineries bought about 90% of Iran's oil exports.",
        "A 25-year pact was signed in 2021, but the reported $400 billion of investment never materialised."
      ],
      check: { q: "Who bought most of Iran's oil after the US reimposed sanctions?",
        choices: ["European refiners", "Independent Chinese refineries", "Japan and South Korea"], answer: 1,
        explain: "Shandong's 'teapot' refineries took about 90% of Iran's oil exports by 2025." },
      sources: [
        { title: "China-Iran Fact Sheet: A Short Primer on the Relationship", publisher: "US-China Economic and Security Review Commission", url: "https://www.uscc.gov/research/china-iran-fact-sheet-short-primer-relationship", date: "n.d." },
        { title: "One Buyer Dominates Iran's Oil Exports", publisher: "Visual Capitalist", url: "https://www.visualcapitalist.com/china-dominates-iran-oil-exports/", date: "n.d." },
        { title: "China-Iran Relations: The Myth of Massive Investment", publisher: "The Diplomat", url: "https://thediplomat.com/2021/04/china-iran-relations-the-myth-of-massive-investment/", date: "2021-04" },
        { title: "Iran Becomes Full Member of Shanghai Cooperation Organization", publisher: "Foundation for Defense of Democracies", url: "https://www.fdd.org/analysis/2023/07/06/iran-becomes-full-member-of-shanghai-cooperation-organization/", date: "2023-07-06" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ir_cn-3", kind: "relation", asOf: "2026-10-01",
      title: "A friend that won't fight",
      dek: "China 'strongly condemned' the killing of Iran's Supreme Leader, but told Tehran it would not send weapons. The American blockade has squeezed the oil trade that was Iran's lifeline.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir_cn/ir_cn-3-hero.webp",
          alt: "Illustration of a crowded refinery complex on a flat coast, with storage tanks and idle flare stacks under a grey sky.",
          caption: "China's independent 'teapot' refineries in Shandong buy most of Iran's oil.",
          credit: "Illustration — not a photograph",
          prompt: "A dense oil refinery complex on a flat grey coast, rows of storage tanks, tall columns and idle flare stacks, a few tankers at a jetty, overcast sky, documentary painting style, no people, no logos, no flags, no legible text." },
        { type: "timeline", head: "War and the oil squeeze", items: [
          ["28 Feb 2026", "US–Israeli strikes kill Ali Khamenei"],
          ["1 Mar 2026", "China 'strongly condemns' the killing"],
          ["Mar 2026", "Iran keeps shipping oil to China through Hormuz"],
          ["Apr 2026", "US blockade of Iranian ports; Treasury warns banks over teapots"],
          ["May 2026", "China's oil imports fall to an eight-year low"],
          ["Sep 2026", "Fewer Iranian cargoes offered to Chinese buyers"]
        ] },
        { type: "section", head: "Words, not weapons", md:
          "When American and Israeli strikes killed Ali Khamenei on 28 February 2026 (see [[lesson:ir-7]]), China's foreign ministry said it 'strongly condemned' an attack that violated Iran's sovereignty and the UN Charter. Foreign Minister Wang Yi told Russia's Sergei Lavrov it was unacceptable to kill the leader of a sovereign state and incite regime change. But in an exchange of letters, Xi Jinping told Iran that China was not providing it with weapons. Beijing sent envoys and called for a ceasefire; it did not risk its relations with Washington." },
        { type: "section", head: "Oil through the war", md:
          "In the first weeks, Iran kept sending millions of barrels to China through the Strait of Hormuz even as it attacked other ships, and Iranian officials floated letting tankers pass if their cargo was traded in yuan (see [[lesson:sa_cn-3]]). By the end of 2025 China had been importing up to about 1.4 million barrels a day from Iran, around 13% of its crude imports. China had stockpiled oil early in 2026 and banned exports of refined fuel to protect supplies at home." },
        { type: "section", head: "The squeeze", md:
          "After the April ceasefire talks failed, the US blockaded Iranian ports. The Treasury warned banks they risked sanctions for dealing with Chinese teapot refineries handling Iranian oil, and targeted port terminals and logistics firms in Shandong. Iranian oil still reaches China, but volumes have fallen; by September fewer Iranian cargoes were on offer and some were selling above benchmark prices instead of at the old discounts." },
        { type: "section", head: "Russia, China and Iran", md:
          "Western officials sometimes speak of an 'axis' of China, Russia, Iran and North Korea. The war showed its limits: Russia condemned the strikes but sent no help (see [[lesson:ir_ru-3]]), and China offered diplomacy and oil purchases but no protection. Chinese analysts argued that Beijing's interests lay in a stable Gulf and in its far larger trade with the United States and the Gulf Arab states." },
        { type: "section", head: "What to watch", md:
          "In late September Iran offered a plan to end the fighting in return for lifting the blockade and oil sanctions. If a deal comes, Chinese buyers will be first in line for Iranian oil again, and Chinese firms may bid to rebuild war damage. If not, Washington's pressure on Chinese refineries will keep growing." },
        { type: "compare", head: "China's balance",
          left: { head: "For Iran", md:
            "Condemns the war, buys its oil, shields it at the UN." },
          right: { head: "Against risk", md:
            "Sends no weapons, keeps trading with Iran's Gulf enemies, and avoids a clash with America." } },
        { type: "section", head: "Why it matters", md:
          "Iran bet that China would be its economic lifeline and great-power shield. The war showed China will be the first but not the second." }
      ],
      takeaways: [
        "China strongly condemned the killing of Khamenei but told Iran it would not supply weapons.",
        "Iran kept shipping oil to China early in the war, but the US blockade later cut volumes.",
        "US sanctions now target Chinese refineries and ports handling Iranian oil."
      ],
      check: { q: "What did Xi Jinping tell Iran during the 2026 war?",
        choices: ["That China would defend Iran militarily", "That China was not providing it with weapons", "That China would stop buying its oil"], answer: 1,
        explain: "China condemned the war but avoided military involvement." },
      sources: [
        { title: "China Says 'Strongly Condemns' Khamenei Killing", publisher: "The China-Global South Project", url: "https://chinaglobalsouth.com/2026/03/01/china-condemns-killing-iran-supreme-leader-khamenei/", date: "2026-03-01" },
        { title: "China in the 2026 Iran war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/China_in_the_2026_Iran_war", date: "2026" },
        { title: "U.S. warns banks of sanctions risk over China 'teapot' refineries handling Iranian oil", publisher: "CNBC", url: "https://www.cnbc.com/2026/04/29/us-treasury-warns-sanctions-china-refineries-iran-oil-malaysian-blend.html", date: "2026-04-29" },
        { title: "China Still Buying Iranian Oil, But Volumes Fall Under U.S. Blockade", publisher: "Eurasia Review", url: "https://www.eurasiareview.com/04092026-china-still-buying-iranian-oil-but-volumes-fall-under-u-s-blockade-analysis/", date: "2026-09-04" },
        { title: "Iran sends millions of oil barrels to China through Strait of Hormuz even as war chokes the waterway", publisher: "CNBC", url: "https://www.cnbc.com/2026/03/11/iran-ships-oil-china-strait-hormuz-closure-.html", date: "2026-03-11" }
      ]
    }
  ]
});
