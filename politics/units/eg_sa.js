/* ============================================================
   Relationship — Egypt & Saudi Arabia 🇪🇬🇸🇦
   Nasser against the kings in Yemen; a break over Camp David;
   Saudi billions that kept Sisi afloat, repaid with two Red Sea
   islands; and a 2026 partnership of power lines, deposits and
   shared worries over Gaza and Sudan.
   Research note and sources: tools/research/eg_sa.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("eg_sa", {
  id: "eg_sa",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "eg_sa-1", kind: "relation", asOf: "2026-09-30",
      title: "Nasser against the kings",
      dek: "In the 1960s Egypt's revolutionary leader and Saudi Arabia's king fought a proxy war in Yemen that historians call the Arab Cold War. Later the kingdom broke with Egypt over its peace with Israel.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg_sa/eg_sa-1-hero.webp",
          alt: "Illustration of steep terraced mountains in Yemen with a stone village perched on a ridge and a military truck on a dirt road.",
          caption: "Up to 70,000 Egyptian troops fought in the mountains of North Yemen in the 1960s.",
          credit: "Illustration — not a photograph",
          prompt: "Steep terraced brown mountains in Yemen with a tall stone tower-house village perched on a ridge, a 1960s military truck on a winding dirt road below, dust and harsh afternoon light, historical documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Rivals, then partners", items: [
          ["1962", "Coup in North Yemen; Egypt backs republicans, Saudi Arabia the royalists"],
          ["1965", "Around 60,000 Egyptian troops in Yemen"],
          ["Aug 1967", "Khartoum deal: Egypt agrees to withdraw"],
          ["Oct 1973", "Saudi oil embargo backs Egypt's war on Israel"],
          ["1979", "Saudi Arabia cuts ties over Egypt's peace with Israel"],
          ["1987", "Relations restored"]
        ] },
        { type: "section", head: "The Arab Cold War", md:
          "After the Free Officers' revolution of 1952 (see [[lesson:eg-9]]), Gamal Abdel Nasser preached Arab nationalism and socialism, and his radio stations urged Arabs to overthrow their kings. Saudi Arabia's monarchy, conservative and allied to America, saw him as a mortal threat. In 1962 Egyptian-trained officers overthrew the imam of North Yemen and declared a republic. Nasser sent troops to defend it, eventually as many as 70,000, while Saudi Arabia and Jordan armed the tribes loyal to the deposed imam, with covert British help. For five years the two countries fought a bitter proxy war in Yemen's mountains, and Egyptian planes even bombed Saudi border towns such as Najran that the royalists used as bases." },
        { type: "section", head: "Defeat and reconciliation", md:
          "Yemen drained Nasser's army, and in June 1967 Israel crushed Egypt in six days (see [[lesson:il-10]]). At an Arab summit in Khartoum that August, Egypt agreed to pull out of Yemen, and Saudi Arabia, under King Faisal, agreed with Kuwait and Libya to help pay for Egypt's recovery. The republic in Yemen survived, but Nasser's prestige never did. After Nasser's death in 1970 his successor, Anwar Sadat, turned towards the West and the conservative Gulf. The partnership peaked in October 1973: when Egypt and Syria attacked Israel, Faisal led the Arab oil embargo against Israel's backers (see [[lesson:sa-10]]), turning oil into a weapon for Egypt's cause." },
        { type: "section", head: "The Camp David rupture", md:
          "Sadat's next move shocked his Saudi allies. In 1977 he flew to Jerusalem, and in 1979 he signed a peace treaty with Israel (see [[lesson:eg-11]]). The Arab League expelled Egypt and moved its headquarters from Cairo to Tunis, and Saudi Arabia broke off diplomatic relations and cut its aid. Sadat was assassinated in 1981. His successor, Hosni Mubarak, slowly brought Egypt back into the Arab fold, and Saudi Arabia restored relations in 1987. In 1990–91, when Iraq invaded Kuwait, Egyptian troops joined the coalition that defended Saudi Arabia, and the two became the anchors of the Arab world's pro-American camp." },
        { type: "compare", head: "Who leads the Arabs?",
          left: { head: "Cairo", md:
            "Egypt, the most populous Arab country with the largest army, is the natural leader of the Arab world." },
          right: { head: "Riyadh", md:
            "Saudi Arabia, home to Islam's holiest sites and the biggest oil reserves, has the money and religious authority." } },
        { type: "section", head: "Why it matters", md:
          "Egypt has the people and the army; Saudi Arabia has the money. Their rivalry and partnership have shaped the Arab world for 70 years." }
      ],
      takeaways: [
        "Nasser's Egypt and Saudi Arabia fought a proxy war in North Yemen from 1962 to 1967.",
        "They united in 1973, when Saudi Arabia used the oil weapon in support of Egypt's war.",
        "Saudi Arabia broke with Egypt over its 1979 peace with Israel and restored ties in 1987."
      ],
      check: { q: "Why did Saudi Arabia cut relations with Egypt in 1979?",
        choices: ["Over the war in Yemen", "Over Egypt's peace treaty with Israel", "Over oil prices"], answer: 1,
        explain: "The Arab League expelled Egypt after the treaty; Saudi Arabia restored ties in 1987." },
      sources: [
        { title: "The Proxy of My Proxy: Saudi Arabia vs. Egypt in North Yemen", publisher: "Association for Diplomatic Studies and Training", url: "https://adst.org/2015/07/the-proxy-of-my-proxy-saudi-arabia-against-egypt-in-north-yemen/", date: "2015-07" },
        { title: "Yemen's Endless Wars", publisher: "History Today", url: "https://www.historytoday.com/archive/behind-times/yemens-endless-wars", date: "n.d." },
        { title: "Egypt and the Gulf: Sisi's debt to his Gulf Arab backers", publisher: "Chatham House", url: "https://www.chathamhouse.org/2020/04/egypt-and-gulf/sisis-debt-his-gulf-arab-backers", date: "2020-04" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "eg_sa-2", kind: "relation", asOf: "2026-09-30",
      title: "Billions for Sisi, islands for Riyadh",
      dek: "When Egypt's army removed the Muslim Brotherhood's president in 2013, Saudi Arabia and its allies sent billions to keep the new regime afloat. In return Egypt handed over two Red Sea islands, to fury at home.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg_sa/eg_sa-2-hero.webp",
          alt: "Illustration of two small barren islands in a turquoise sea at the mouth of a narrow gulf, with desert mountains behind.",
          caption: "Tiran and Sanafir guard the entrance to the Gulf of Aqaba.",
          credit: "Illustration — not a photograph",
          prompt: "Two small barren rocky islands in a bright turquoise sea at the narrow mouth of a gulf, coral reefs visible in the clear water, rugged reddish desert mountains on the mainland behind, a ship passing, harsh sunlight, no people, no flags, no legible text." },
        { type: "timeline", head: "Money and islands", items: [
          ["Jul 2013", "Morsi ousted; Saudi Arabia, UAE and Kuwait pledge $12 billion"],
          ["2015", "Egypt joins the Saudi-led coalition in Yemen but sends no ground troops"],
          ["Apr 2016", "King Salman in Cairo; islands deal and aid announced"],
          ["Oct 2016", "Aramco suspends fuel shipments after a UN vote"],
          ["Jan 2017", "Egypt's top administrative court voids the islands deal"],
          ["Jun 2017", "Parliament approves the transfer; Sisi ratifies it"]
        ] },
        { type: "section", head: "Bankrolling a coup", md:
          "Saudi Arabia saw the Muslim Brotherhood, which won Egypt's elections after the 2011 revolution (see [[lesson:eg-12]]), as a threat to monarchies across the region. When the army under Abdel Fattah el-Sisi removed President Mohammed Morsi in July 2013 (see [[lesson:eg-3]]), Saudi Arabia, the United Arab Emirates and Kuwait announced $12 billion in aid within days. Saudi Arabia's share was $5 billion: deposits at Egypt's central bank, cash and oil products. More followed in later years. When Western governments criticised the killing of hundreds of Morsi's supporters in August 2013, the Saudi king publicly backed Egypt's army." },
        { type: "section", head: "Tiran and Sanafir", md:
          "In April 2016 King Salman made a state visit to Cairo, announcing investments and loans. During the visit Egypt signed a maritime border deal recognising two small, uninhabited islands at the mouth of the Gulf of Aqaba, Tiran and Sanafir, as Saudi. Saudi Arabia said it had only lent them to Egypt in 1950. To many Egyptians, whose soldiers had fought over the islands in wars with Israel, it looked as if Sisi was selling Egyptian land. Rare street protests broke out. In January 2017 Egypt's High Administrative Court ruled the islands Egyptian and barred the handover, but in June 2017 parliament approved it anyway and Sisi ratified it; the constitutional court ended the legal challenges in March 2018." },
        { type: "section", head: "Limits of loyalty", md:
          "Egypt did not always do as its backers wished. When Saudi Arabia went to war in Yemen in 2015 (see [[lesson:sa-6]]), Egypt joined the coalition with its navy but, remembering Nasser's war, sent no ground troops. In October 2016 Egypt voted at the UN Security Council for a Russian resolution on Syria that Riyadh opposed; the same month Saudi Aramco suspended fuel shipments promised on easy terms. Sisi denied any link, and deliveries resumed in March 2017 after the leaders met." },
        { type: "compare", head: "A fair exchange?",
          left: { head: "Supporters of the deal", md:
            "Egypt needed Saudi money, the islands were Saudi historically, and the partnership protects both from Islamists and Iran." },
          right: { head: "Critics", md:
            "Egypt sold its sovereignty for cash, and Sisi ignored the courts and the public to do it." } },
        { type: "section", head: "Why it matters", md:
          "The islands handed Saudi Arabia a direct stake in the Red Sea route near Israel, and could matter in any future Saudi–Israeli normalisation. The episode showed how dependent Egypt's regime is on Gulf money." }
      ],
      takeaways: [
        "Saudi Arabia, the UAE and Kuwait pledged $12 billion to Egypt after the army ousted Morsi in 2013.",
        "In 2016–17 Egypt handed Tiran and Sanafir to Saudi Arabia despite protests and a court ruling.",
        "Egypt kept some independence, refusing ground troops for Yemen and voting with Russia on Syria in 2016."
      ],
      check: { q: "What happened to Tiran and Sanafir?",
        choices: ["They stayed Egyptian after a court ruling", "Parliament approved their transfer to Saudi Arabia in 2017 despite a court ruling", "Israel annexed them"], answer: 1,
        explain: "The top administrative court voided the deal in January 2017, but parliament approved it in June and Sisi ratified it." },
      sources: [
        { title: "Friends again? Saudi Arabia, UAE jump in to aid Egypt", publisher: "Christian Science Monitor", url: "https://www.csmonitor.com/World/Global-Issues/2013/0710/Friends-again-Saudi-Arabia-UAE-jump-in-to-aid-Egypt", date: "2013-07-10" },
        { title: "Egypt lawmakers approve island transfer to Saudi Arabia", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2017/6/14/egypt-lawmakers-approve-island-transfer-to-saudi-arabia", date: "2017-06-14" },
        { title: "The transfer of two islands to Saudi Arabia sparks turmoil in Egypt", publisher: "France 24", url: "https://www.france24.com/en/20170615-egypt-saudi-arabia-islands-tiran-sanafir-territorial-dispute-israel-history", date: "2017-06-15" },
        { title: "Egypt: Saudi Arabia halts fuel shipments indefinitely", publisher: "Al Jazeera", url: "https://www.aljazeera.com/economy/2016/11/8/egypt-saudi-arabia-halts-fuel-shipments-indefinitely", date: "2016-11-08" },
        { title: "Saudi Aramco to resume oil shipments to Egypt", publisher: "Mada Masr", url: "https://www.madamasr.com/en/2017/03/15/news/u/saudi-aramco-to-resume-oil-shipments-to-egypt/", date: "2017-03-15" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "eg_sa-3", kind: "relation", asOf: "2026-09-30",
      title: "Power lines, deposits and Sudan",
      dek: "Saudi Arabia wants to turn its loans to Egypt into investments, a new cable will link their power grids, and they stand together on Gaza and Sudan. But Egypt's debts give Riyadh the upper hand.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg_sa/eg_sa-3-hero.webp",
          alt: "Illustration of high-voltage power line towers marching across a desert towards a coastline at sunset.",
          caption: "A $1.8 billion link will let Egypt and Saudi Arabia trade up to 3,000 megawatts of electricity.",
          credit: "Illustration — not a photograph",
          prompt: "A long line of tall high-voltage electricity pylons marching across a flat sandy desert towards a blue sea coastline at sunset, a large converter station with white buildings in the foreground, orange and purple sky, no people, no logos, no flags, no legible text." },
        { type: "facts", head: "The partnership in numbers", rows: [
          ["Saudi deposits at Egypt's central bank", "About $10 billion, to be turned into investment"],
          ["Power link", "3,000 MW, 1,320 km, about $1.8 billion"],
          ["Link status", "Egypt's side complete, September 2026"],
          ["Ras Gamila", "Red Sea resort land Saudi investors want"],
          ["Latest summit", "MBS in Cairo, 15 September 2026"]
        ] },
        { type: "section", head: "From loans to investments", md:
          "Egypt's economy has lurched from crisis to crisis, with a falling pound, heavy debts and IMF bailouts (see [[lesson:eg-6]]). Its Gulf backers have grown tired of simply lending. Instead of more deposits, they now want assets. The UAE led the way in 2024 with a $35 billion deal for the Mediterranean resort land of Ras El Hekma. Saudi Arabia has discussed converting its roughly $10 billion of deposits at Egypt's central bank into investments, possibly in Ras Gamila, a strip of Red Sea coast near Sharm el-Sheikh, though Egypt has said no deal is done. Critics in Egypt say the country is selling off prime land to pay its bills." },
        { type: "section", head: "Wired together", md:
          "The biggest joint project is a power link. A $1.8 billion high-voltage line, running 1,320 kilometres with cables under the Red Sea, will let the two countries swap up to 3,000 megawatts of electricity, using the fact that their demand peaks at different times of day. Egypt, which is also planning cables to Europe, hopes the link will help make it a regional energy hub, while Saudi Arabia wants outlets for the solar power it is building. The work was delayed for years, but by September 2026 Egypt said it had completed its side and only final work and tests remained on the Saudi side. Millions of Egyptians also work in Saudi Arabia, and the money they send home is one of Egypt's biggest sources of foreign currency." },
        { type: "section", head: "Standing together", md:
          "On regional crises the two now largely agree. Both back Sudan's army against the Rapid Support Forces paramilitary in its civil war, putting them at odds with the United Arab Emirates, which is accused of arming the RSF (see [[lesson:ae-6]]). Both want the Gaza ceasefire to hold and a Palestinian state (see [[lesson:eg-5]]). Houthi attacks on shipping have cut Egypt's Suez Canal revenues, a shared worry about the Red Sea. On 15 September 2026 Crown Prince Mohammed bin Salman visited Cairo, where he and President Sisi discussed Gaza, Sudan and Yemen and investment, under a Supreme Coordination Council they set up to steer the partnership." },
        { type: "compare", head: "Equal partners?",
          left: { head: "Partnership", md:
            "Egypt brings people, an army and the Suez Canal; Saudi Arabia brings capital. Both gain." },
          right: { head: "Patronage", md:
            "Egypt depends on Saudi money, and Riyadh increasingly sets the terms, from islands to beachfront land." } },
        { type: "section", head: "Why it matters", md:
          "Egypt is the Arab world's most populous country and Saudi Arabia its richest big state. Their partnership shapes the Red Sea, Gaza and Sudan." }
      ],
      takeaways: [
        "Saudi Arabia wants to convert its deposits in Egypt into investments such as Red Sea resort land.",
        "A $1.8 billion power link will let them swap up to 3,000 MW of electricity.",
        "They back Sudan's army together, and MBS visited Cairo in September 2026."
      ],
      check: { q: "What will the Egypt–Saudi power link do?",
        choices: ["Carry oil under the Red Sea", "Let the two countries exchange up to 3,000 MW of electricity", "Supply water to Cairo"], answer: 1,
        explain: "The 1,320 km link uses the difference in their peak demand times; Egypt completed its side in 2026." },
      sources: [
        { title: "Saudi Arabia, Egypt plan $10bn deposit to investment deal", publisher: "AGBI", url: "https://www.agbi.com/banking-finance/2024/08/saudi-arabia-egypt-10bn/", date: "2024-08" },
        { title: "Egypt says no deal with Saudi Arabia on Ras Gamila yet", publisher: "The New Arab", url: "https://www.newarab.com/news/egypt-says-no-deal-saudi-arabia-ras-gamila-yet", date: "2025" },
        { title: "Egypt completes its side of electricity interconnection with Saudi Arabia", publisher: "Reuters (via TradingView)", url: "https://www.tradingview.com/news/reuters.com,2026-09-29:newsml_ZawpqgbC:0-egypt-completes-its-side-of-electricity-interconnection-with-saudi-arabia/", date: "2026-09-29" },
        { title: "Al-Sisi, Saudi Crown Prince discuss regional security, trade and investment in Cairo", publisher: "Daily News Egypt", url: "https://www.dailynewsegypt.com/2026/09/15/al-sisi-saudi-crown-prince-discuss-regional-security-trade-and-investment-in-cairo/", date: "2026-09-15" }
      ]
    }
  ]
});
