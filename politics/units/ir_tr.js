/* ============================================================
   Relationship — Iran & Turkey 🇮🇷🇹🇷
   Ottomans and Safavids, a border fixed in 1639 and two
   modernising strongmen; gas, gold and a sanctions-busting
   scheme, and rival sides in Syria; and the 2026 war, a missile
   toward Turkey and a gas contract that ran out.
   Research note and sources: tools/research/ir_tr.md
   Current as of 11 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("ir_tr", {
  id: "ir_tr",
  asOf: "2026-10-11",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ir_tr-1", kind: "relation", asOf: "2026-10-11",
      title: "Sultans, shahs and a lasting border",
      dek: "The Ottoman and Safavid empires fought for more than a century, then fixed a frontier in 1639 that still largely holds. In the 1930s two modernising strongmen, Atatürk and Reza Shah, became friends.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir_tr/ir_tr-1-hero.webp",
          alt: "Illustration of a snow-capped volcanic mountain rising above a high plateau with a lone caravan on a road.",
          caption: "Mount Ararat stands near the border of Turkey and Iran.",
          credit: "Illustration — not a photograph",
          prompt: "A huge snow-capped volcanic mountain rising above a high dry plateau, a small caravan of camels and horses on a dusty road in the foreground, clear cold light, historical documentary painting style, no faces, no flags, no legible text." },
        { type: "timeline", head: "Empires and republics", items: [
          ["1514", "Ottomans defeat the Safavids at Chaldiran"],
          ["1639", "Treaty of Zuhab fixes the frontier"],
          ["1923", "Atatürk founds the Turkish Republic"],
          ["1925", "Reza Khan becomes Shah of Iran"],
          ["Jun 1934", "Reza Shah visits Turkey, his only state visit abroad"],
          ["1955", "Both join the Western-backed Baghdad Pact"]
        ] },
        { type: "section", head: "Sunni sultan, Shia shah", md:
          "In 1501 the Safavid dynasty made Shia Islam the state religion of Iran, setting it apart from the Sunni Ottoman Empire to the west. The two fought repeatedly for eastern Anatolia, the Caucasus and Iraq. At Chaldiran in 1514 Ottoman cannon and muskets crushed the Safavid cavalry, and Sultan Selim I briefly took the Safavid capital, Tabriz. Wars continued for more than a century, with Baghdad changing hands several times." },
        { type: "section", head: "Zuhab", md:
          "In 1639 the Treaty of Zuhab ended the fighting and divided the region roughly along the Zagros mountains: Iraq to the Ottomans, the Iranian plateau to the Safavids. Later wars and treaties adjusted the line, but the frontier it drew has largely endured, and much of today's Iran–Turkey and Iran–Iraq border follows it. The two states, Persian and Turkish, Shia and Sunni, have not fought a full war against each other since the early 19th century." },
        { type: "section", head: "Two strongmen", md:
          "After the First World War both empires gave way to modernising nationalists. Mustafa Kemal Atatürk founded a secular Turkish Republic in 1923 (see [[lesson:tr-9]]); in Iran an army officer, Reza Khan, seized power and crowned himself Shah in 1925. Reza Shah admired Atatürk, and in 1934 made his only state visit abroad, to Turkey, where he saw Atatürk's reforms at first hand. Back home he banned the veil, imposed Western dress and built railways and universities, though more by decree and with less success." },
        { type: "section", head: "Cold War partners", md:
          "In 1937 the two signed the Saadabad Pact with Iraq and Afghanistan, and in 1955 both joined the Baghdad Pact, later CENTO, a Western-backed alliance against Soviet expansion. Under the last Shah, Iran and NATO member Turkey were both American allies, cooperating on security and trade." },
        { type: "section", head: "Neighbours", md:
          "The two share a border of about 530 kilometres through mountainous Kurdish country. Both have large Kurdish and Azeri populations, which gives each a reason to watch the other's minorities closely." },
        { type: "section", head: "A shared heritage", md:
          "Persian was for centuries the language of Ottoman poetry and courts, and Turkish-speaking dynasties ruled Iran for much of its history; Iran's large Azeri minority speaks a Turkic language." },
        { type: "compare", head: "Two empires, two models",
          left: { head: "Ottoman Turkey", md:
            "Sunni, a European and Middle Eastern empire, then a secular republic." },
          right: { head: "Safavid Iran", md:
            "Shia, Persian, centred on the plateau, later a monarchy then an Islamic republic." } },
        { type: "section", head: "Why it matters", md:
          "Rivalry without war has been the pattern for two centuries. Iran and Turkey compete for influence, but both know the costs of fighting each other." }
      ],
      takeaways: [
        "The Ottoman and Safavid empires fought for over a century; the 1639 Treaty of Zuhab drew a border that largely endures.",
        "Iran and Turkey have not fought a full war against each other since the early 19th century.",
        "Reza Shah admired Atatürk and visited Turkey in 1934; both were Western allies in the Cold War."
      ],
      check: { q: "What did the Treaty of Zuhab of 1639 do?",
        choices: ["Created the Turkish Republic", "Fixed a frontier between the Ottoman and Safavid empires", "Made Iran a Shia state"], answer: 1,
        explain: "Much of today's border still follows its line." },
      sources: [
        { title: "Treaty of Zuhab", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Treaty_of_Zuhab", date: "n.d." },
        { title: "Turkey's red lines in the Iran conflict", publisher: "Foundation for Defense of Democracies", url: "https://www.fdd.org/analysis/2026/03/17/what-are-turkeys-red-lines-in-the-iran-conflict/", date: "2026-03-17" },
        { title: "Battle of Chaldiran", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Chaldiran", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ir_tr-2", kind: "relation", asOf: "2026-10-11",
      title: "Gas, gold and Syria",
      dek: "After 1979 Turkey and Iran became uneasy partners: trading gas, helping each other dodge sanctions, and fighting a proxy contest in Syria that Turkey won when Assad fell.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir_tr/ir_tr-2-hero.webp",
          alt: "Illustration of a large gas pipeline crossing rolling steppe toward distant mountains under a big sky.",
          caption: "A pipeline from Tabriz has carried Iranian gas to Turkey since 2001.",
          credit: "Illustration — not a photograph",
          prompt: "A large steel gas pipeline on supports crossing rolling dry steppe toward distant mountains under a big sky with high clouds, a small compressor station with a flare, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Partners and rivals", items: [
          ["1980–88", "Turkey stays neutral and trades with both sides in the Iran–Iraq war"],
          ["2001", "Gas starts flowing through the Tabriz–Ankara pipeline"],
          ["May 2010", "Turkey and Brazil broker a nuclear fuel swap deal"],
          ["2012–13", "Gold-for-gas scheme through Turkey's Halkbank"],
          ["2011–24", "Rival sides in Syria's civil war"],
          ["Dec 2024", "Assad falls; Iran loses its ally, Turkey gains"]
        ] },
        { type: "section", head: "After 1979", md:
          "Turkey's secular generals viewed Iran's Islamic revolution with alarm, fearing it would inspire Islamists at home, and Iran's leaders denounced Turkey's NATO membership and Western ways. But Turkey kept relations open. During the Iran–Iraq war (see [[lesson:ir-11]]) it stayed neutral and traded with both sides, and Turkish lorries became a lifeline for an Iran under embargo." },
        { type: "section", head: "Gas", md:
          "In 1996 the two signed a 25-year deal for Iran to sell Turkey gas, and from 2001 it flowed through a pipeline from Tabriz to Ankara. Iran became Turkey's second-largest gas supplier after Russia, though disputes over price and frequent winter cuts strained ties, and Turkey took Iran to international arbitration and won a price reduction." },
        { type: "section", head: "Gold for gas", md:
          "As Western [[sanctions]] on Iran tightened, Turkey kept buying its gas, paying in Turkish lira held at the state-owned Halkbank. From 2012 an Iranian-Turkish gold trader, Reza Zarrab, used those funds to buy gold and ship it to Iran, an estimated $13 billion in 2012–13. In 2017 Zarrab, arrested in Miami, pleaded guilty in New York and testified that senior Turkish ministers had taken bribes and that Erdoğan, then prime minister, had approved the scheme, which Erdoğan denied. A Halkbank executive was convicted in 2018." },
        { type: "section", head: "Syria", md:
          "When Syria's civil war began in 2011, Turkey backed rebels seeking to overthrow Bashar al-Assad, while Iran sent advisers, militias and money to save him. The two were on opposite sides of a brutal war, yet from 2017 they sat together, with Russia, in the 'Astana process' to manage it. In December 2024 rebels backed by Turkey swept into Damascus and Assad fled, a major defeat for Iran and a victory for Ankara." },
        { type: "section", head: "Kurds", md:
          "Both fight Kurdish militants: Turkey the PKK (see [[lesson:tr-6]]), Iran its offshoot PJAK. They have sometimes cooperated against them, and sometimes accused each other of sheltering them." },
        { type: "section", head: "A nuclear deal that wasn't", md:
          "In May 2010 Turkey and Brazil brokered a deal under which Iran would ship low-enriched uranium to Turkey in exchange for reactor fuel. Washington, preparing new UN sanctions, dismissed it, and the plan died." },
        { type: "compare", head: "A relationship of balance",
          left: { head: "Cooperation", md:
            "Gas, trade, tourism and a shared interest in stopping Kurdish independence." },
          right: { head: "Rivalry", md:
            "Opposite sides in Syria and Iraq, and competing visions for the region." } },
        { type: "section", head: "Why it matters", md:
          "Turkey's habit of keeping doors open to Iran, while remaining in NATO, made it a key player when the US and Israel went to war with Iran in 2026." }
      ],
      takeaways: [
        "Iranian gas has flowed to Turkey through a pipeline from Tabriz since 2001.",
        "A gold-for-gas scheme through Halkbank helped Iran evade sanctions in 2012–13; its organiser testified in New York.",
        "The two backed opposite sides in Syria; Assad's fall in December 2024 was a defeat for Iran and a win for Turkey."
      ],
      check: { q: "Who was Reza Zarrab?",
        choices: ["Iran's foreign minister", "A gold trader who ran a sanctions-busting scheme through Turkey", "A Turkish general"], answer: 1,
        explain: "He pleaded guilty in New York and testified against a Halkbank executive." },
      sources: [
        { title: "Gas for gold: Turkey and Iran scheme explained", publisher: "Yahoo Finance", url: "https://finance.yahoo.com/news/gas-gold-turkey-iran-scheme-explained-151517687.html", date: "2017" },
        { title: "Halkbank Indictment Points to Turkish Government Role in Iran Sanctions Evasion", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2019/10/16/halkbank-indictment-turbocharges-u-s-turkey-tensions-zarrab-erdogan-iran/", date: "2019-10-16" },
        { title: "Major Turkish Bank Prosecuted in Unprecedented Iran Sanctions Evasion Case", publisher: "Iran Watch", url: "https://www.iranwatch.org/our-publications/articles-reports/major-turkish-bank-prosecuted-unprecedented-iran-sanctions-evasion-case", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ir_tr-3", kind: "relation", asOf: "2026-10-11",
      title: "A war next door",
      dek: "Turkey opposed the US–Israeli war on Iran, offered to mediate and braced for refugees. An Iranian missile headed toward Turkey in March, and the gas contract between them expired in July.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir_tr/ir_tr-3-hero.webp",
          alt: "Illustration of a concrete border wall with watchtowers winding across bare hills at dusk.",
          caption: "Turkey has built a wall along much of its border with Iran.",
          credit: "Illustration — not a photograph",
          prompt: "A tall concrete border wall with watchtowers winding across bare brown hills at dusk, a patrol road beside it, snow on distant peaks, cold blue light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Through the war", items: [
          ["Feb 2026", "Erdoğan opposes military action and offers to mediate"],
          ["28 Feb 2026", "US–Israeli war on Iran begins"],
          ["4 Mar 2026", "An Iranian missile is fired toward southern Turkey"],
          ["Apr 2026", "Erdoğan steps up efforts to end the war"],
          ["31 Jul 2026", "25-year gas contract expires without renewal"],
          ["Sep 2026", "Fidan meets US and Iranian envoys at the UN"]
        ] },
        { type: "section", head: "Against the war", md:
          "Erdoğan opposed military action against Iran and offered Turkey as a mediator between Tehran and Washington. When the United States and Israel attacked on 28 February 2026 (see [[lesson:ir-7]]), he urged a return to talks before the war 'sets the entire region on fire', and blamed Israel for undermining peace efforts." },
        { type: "section", head: "A missile toward Turkey", md:
          "On 4 March, early in the war, Iran's Revolutionary Guards fired a ballistic missile toward southern Turkey, drawing protests from Ankara and its NATO allies. Turkey hosts a NATO radar at Kürecik, which Iran has long said helps Israel, and the US air base at Incirlik. Analysts said Erdoğan was determined to keep Turkey out of the war, fearing its costs at home." },
        { type: "section", head: "Refugees and borders", md:
          "Turkey already hosts millions of refugees, mostly Syrians, and many Afghans who came through Iran. It has built a concrete wall along much of the Iranian border since 2017, and during the war officials watched for a new wave of refugees. Turkish voters are hostile to more arrivals." },
        { type: "section", head: "Gas runs out", md:
          "The 25-year gas contract signed in 1996 expired on 31 July 2026. With the war under way and UN sanctions restored by [[snapback]] in 2025, no talks on a new deal had begun; Turkey's energy minister said in April that there were no negotiations. Gas has reportedly kept flowing under temporary arrangements, but payments are a problem: Halkbank agreed in 2026, in a settlement with US prosecutors, to avoid transactions benefiting Iran. Turkey has turned to LNG and Azerbaijani gas instead." },
        { type: "section", head: "Mediation sidelined", md:
          "Turkey wanted to be the mediator, but Pakistan brokered the April ceasefire (see [[lesson:pk-6]]) and Qatar has carried later messages. Foreign Minister Hakan Fidan met American envoys and Iran's Araghchi at the UN in September, but Washington has preferred Doha to Ankara." },
        { type: "section", head: "Balancing", md:
          "Turkey's new defence pact with Saudi Arabia and Pakistan (see [[lesson:sa_tr-3]]) links it to Iran's main Gulf rival, yet Ankara insists the pact is not aimed at Tehran." },
        { type: "compare", head: "Turkey's position",
          left: { head: "As a NATO member", md:
            "Hosts US forces and radar, shoots down Iranian missiles." },
          right: { head: "As Iran's neighbour", md:
            "Opposes the war, keeps talking to Tehran and fears refugees." } },
        { type: "section", head: "Why it matters", md:
          "Turkey is the only NATO country that borders Iran. How it balances alliance duties against its own interests will shape the region whether the war ends or drags on." }
      ],
      takeaways: [
        "Turkey opposed the 2026 US–Israeli war on Iran and offered to mediate, but Pakistan and Qatar took that role.",
        "An Iranian missile fired toward southern Turkey on 4 March 2026 drew protests from Ankara and NATO.",
        "The 25-year Iran–Turkey gas contract expired on 31 July 2026 without a new deal."
      ],
      check: { q: "What happened to the Iran–Turkey gas contract in July 2026?",
        choices: ["It was renewed for 25 years", "It expired without a new deal being negotiated", "Turkey cancelled it early"], answer: 1,
        explain: "Gas reportedly kept flowing under temporary arrangements, with payments a problem." },
      sources: [
        { title: "Türkiye ready to mediate between Iran, US, rejects military action against Tehran", publisher: "Anadolu Agency", url: "https://www.aa.com.tr/en/politics/turkiye-ready-to-mediate-between-iran-us-rejects-military-action-against-tehran-president-erdogan/3819980", date: "2026-02" },
        { title: "What are Turkey's red lines in the Iran conflict?", publisher: "Foundation for Defense of Democracies", url: "https://www.fdd.org/analysis/2026/03/17/what-are-turkeys-red-lines-in-the-iran-conflict/", date: "2026-03-17" },
        { title: "Turkey says no talks under way yet on extending Iran gas deal set to expire in July", publisher: "Turkish Minute", url: "https://www.turkishminute.com/2026/04/18/turkey-says-no-talks-under-way-yet-on-extending-iran-gas-deal-set-to-expire-in-july-report/", date: "2026-04-18" },
        { title: "Turkey's Iran Gas Deal Ends In July. The Real Test Is The Payment Rail", publisher: "Forbes", url: "https://www.forbes.com/sites/guneyyildiz/2026/06/29/turkeys-iran-gas-deal-ends-in-july-the-real-test-is-the-payment-rail/", date: "2026-06-29" },
        { title: "Erdogan says Turkey stepping up efforts to end Iran war", publisher: "The Times of Israel", url: "https://www.timesofisrael.com/liveblog_entry/erdogan-says-turkey-stepping-up-efforts-to-end-iran-war/", date: "2026-04" }
      ]
    }
  ]
});
