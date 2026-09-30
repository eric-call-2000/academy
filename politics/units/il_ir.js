/* ============================================================
   Relationship — Israel & Iran 🇮🇱🇮🇷
   From allies to arch-enemies: secret friendship under the Shah,
   the shadow war, and Iran's network of armed allies.
   The open wars of 2024–26 are in il-6 and ir-7.
   Research note and sources: tools/research/il_ir.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("il_ir", {
  id: "il_ir",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "il_ir-1", kind: "relation", asOf: "2026-09-30",
      title: "Friends before 1979",
      dek: "Under the Shah, Iran sold Israel most of its oil and their spies worked together. The revolution turned a quiet alliance into open hostility, though not at once.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/il_ir/il_ir-1-hero.webp",
          alt: "Illustration of an oil tanker at a desert port on the Red Sea at dusk, with storage tanks and a pipeline running inland.",
          caption: "From 1968 a pipeline carried Iranian oil from Eilat on the Red Sea across Israel.",
          credit: "AI illustration — not a photograph",
          prompt: "An oil tanker moored at a small desert port on the Red Sea at dusk, white storage tanks and a pipeline running inland across bare mountains, calm turquoise water, warm fading light, 1970s atmosphere, no people up close, no flags, no legible text." },
        { type: "timeline", head: "An alliance and its end", items: [
          ["1950", "Iran recognises Israel de facto"],
          ["1950s", "Ben-Gurion's 'periphery doctrine' seeks non-Arab allies"],
          ["1968", "Eilat–Ashkelon pipeline carries Iranian oil"],
          ["Feb 1979", "Revolution; Israel's mission in Tehran handed to the PLO"],
          ["1985–86", "Israel helps ship US arms to Iran (Iran–Contra)"],
          ["2015", "Swiss court orders Israel to pay Iran $1.1 billion for Shah-era oil"]
        ] },
        { type: "section", head: "The periphery doctrine", md:
          "Surrounded by hostile Arab states, Israel's first prime minister, David Ben-Gurion, sought friends on the 'periphery' of the Arab world: Turkey, Ethiopia and, above all, the Shah's Iran. Iran recognised Israel de facto in 1950 but kept ties discreet to avoid angering Arab and Muslim opinion. Behind the scenes they grew close: Israeli experts advised on farming and water, Israeli companies built roads and housing, and the Mossad helped train SAVAK, the Shah's secret police." },
        { type: "section", head: "Oil and arms", md:
          "The deepest tie was oil. Boycotted by Arab producers, Israel bought much of its oil from Iran, and after it returned Sinai's oil fields to Egypt in 1975 Iran supplied most of what it needed. From 1968 a jointly owned pipeline carried Iranian crude from Eilat on the Red Sea to Ashkelon on the Mediterranean, bypassing the Suez Canal. The two also cooperated on weapons, including a secret missile project in the late 1970s. After the revolution the partnership ended in lawsuits; in 2015 a Swiss court ordered an Israeli company to pay Iran about $1.1 billion for oil delivered under the Shah, which Israel has refused to pay." },
        { type: "section", head: "The revolution", md:
          "Ayatollah Khomeini called Israel an illegitimate 'Zionist entity' and the United States the 'Great Satan'. In February 1979 Iran broke off ties and handed Israel's mission in Tehran to the Palestine Liberation Organization (see [[unit:ir]], [[lesson:ir-9]]). Most of Iran's roughly 80,000 Jews left in the following decades; about 10,000 remain, with a seat reserved for them in parliament." },
        { type: "section", head: "An old habit", md:
          "Hostility did not stop cooperation at once. During the Iran–Iraq War, Israel, which saw Saddam Hussein's Iraq as the bigger threat, sold Iran weapons and spare parts in the early 1980s, and in 1985–86 helped the Reagan administration secretly ship missiles to Iran in the Iran–Contra affair. Only in the 1990s, as Iraq was contained and Iran backed Hezbollah and Palestinian militants, did the two become each other's main enemy." },
        { type: "compare", head: "Two views of the old alliance",
          left: { head: "Realists", md:
            "Israel and Iran share interests as non-Arab regional powers; their enmity comes from the Islamic Republic's ideology, not from geography." },
          right: { head: "The Islamic Republic", md:
            "Ties with Israel were the Shah's betrayal of Muslims and Palestinians; opposing Israel is a core principle of the revolution." } },
        { type: "section", head: "Why it matters", md:
          "The history shows that the enmity is political, not ancient: many Israelis and Iranians say their peoples have no quarrel with each other. It also explains why some in the Iranian opposition and diaspora promise restored ties with Israel if the Islamic Republic falls." }
      ],
      takeaways: [
        "Under the Shah, Iran was a quiet ally of Israel, selling it most of its oil through a joint pipeline.",
        "The 1979 revolution ended relations; Iran declared Israel illegitimate and gave its mission to the PLO.",
        "Israel still sold Iran arms in the 1980s; the two became main enemies only in the 1990s."
      ],
      check: { q: "What was the 'periphery doctrine'?",
        choices: ["Iran's plan to arm Hezbollah", "Israel's strategy of allying with non-Arab states such as Iran, Turkey and Ethiopia", "A UN peace plan"], answer: 1,
        explain: "Ben-Gurion sought friends on the edge of the Arab world to counter Arab hostility." },
      sources: [
        { title: "Israel i. Relations with Iran", publisher: "Encyclopaedia Iranica", url: "https://www.iranicaonline.org/articles/israel-i-relations-with-iran/", date: "n.d." },
        { title: "Israeli-Iranian relations: past friendship, current hostility", publisher: "Israel Affairs (Furlan)", url: "https://www.tandfonline.com/doi/full/10.1080/13537121.2022.2041304", date: "2022" },
        { title: "Swiss Court Orders Israel to Pay Iran Billion-Dollar Award in Oil Pipeline Dispute", publisher: "American Society of International Law", url: "https://www.asil.org/blogs/swiss-court-orders-israel-pay-iran-billion-dollar-award-oil-pipeline-dispute-may-20-2015", date: "2015-05-20" },
        { title: "Iranian Jews", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Iranian_Jews", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "il_ir-2", kind: "relation", asOf: "2026-09-30",
      title: "The shadow war",
      dek: "For fifteen years Israel and Iran fought without declaring war: computer worms, assassinations, stolen archives and strikes on each other's allies. In April 2024 the shadows lifted.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/il_ir/il_ir-2-hero.webp",
          alt: "Illustration of a dim underground hall of centrifuges, long rows of tall grey cylinders under cold light.",
          caption: "Iran's enrichment sites were the main target of sabotage.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast dim underground hall filled with long rows of tall grey centrifuge cylinders connected by pipes, cold blue-white light, a faint haze, industrial and secretive atmosphere, no people, no legible text or symbols." },
        { type: "timeline", head: "From sabotage to open fire", items: [
          ["2010", "Stuxnet computer worm damages Iran's centrifuges"],
          ["2010–12", "Four Iranian nuclear scientists assassinated"],
          ["Jan 2018", "Mossad steals Iran's nuclear archive from a Tehran warehouse"],
          ["Nov 2020", "Top nuclear scientist Mohsen Fakhrizadeh killed"],
          ["1 Apr 2024", "Israeli strike on Iran's consulate in Damascus"],
          ["13 Apr 2024", "Iran's first direct attack: over 300 drones and missiles"],
          ["1 Oct 2024", "About 180 ballistic missiles fired at Israel"]
        ] },
        { type: "section", head: "Stopping the bomb", md:
          "Israel regards a nuclear-armed Iran, whose leaders call for its destruction, as an existential threat. Rather than bomb Iran's nuclear sites, it long preferred sabotage. Around 2010 the Stuxnet computer worm, widely attributed to the US and Israel, made centrifuges at Natanz spin out of control. Between 2010 and 2012 four Iranian nuclear scientists were killed, several by bombs attached to their cars; Iran blamed Israel. In November 2020 the head of Iran's weapons research, Mohsen Fakhrizadeh, was shot dead by a remote-controlled machine gun. Explosions repeatedly hit Natanz." },
        { type: "section", head: "Spies and secrets", md:
          "In January 2018 Mossad agents broke into a warehouse in Tehran and carried off tens of thousands of documents on Iran's past nuclear weapons work. Prime Minister Netanyahu displayed them that April, arguing that Iran had lied, and weeks later Trump withdrew from the 2015 nuclear deal ([[lesson:ir-3]]). Iran, for its part, ran plots against Israelis and Jews abroad, cyberattacks on Israeli infrastructure, and attacks on ships linked to Israel, which Israel answered in kind." },
        { type: "section", head: "Through allies", md:
          "Much of the war was fought through third parties. Iran armed Hezbollah in Lebanon and groups in Syria, Iraq, Gaza and Yemen ([[lesson:il_ir-3]]). Israel carried out hundreds of air strikes in Syria against Iranian weapons shipments and bases, a 'campaign between wars' it rarely acknowledged." },
        { type: "section", head: "Into the open", md:
          "On 1 April 2024 an Israeli strike on Iran's consulate in Damascus killed a senior Revolutionary Guards commander. On 13 April Iran struck Israel directly for the first time, with more than 300 drones and missiles; with help from the US, Britain, France and Jordan, about 99% were intercepted. After Israel killed Hamas's leader in Tehran and Hezbollah's leader in Beirut, Iran fired about 180 ballistic missiles on 1 October; Israel hit Iran's air defences and missile factories that month. The shadow war was over. The open wars of 2025 and 2026 are told in [[unit:il]], [[lesson:il-6]]." },
        { type: "compare", head: "Two views of the shadow war",
          left: { head: "Israel's view", md:
            "Covert action delayed Iran's bomb for years at little cost in lives, and deterred it without full-scale war." },
          right: { head: "Iran's view", md:
            "Israel committed terrorism and murder on Iranian soil; its attacks justify Iran's resistance and its deterrent forces." } },
        { type: "section", head: "Why it matters", md:
          "The shadow war shaped everything that followed: it slowed Iran's programme, deepened each side's belief that the other sought its destruction, and made the step to open war easier once the old restraints broke." }
      ],
      takeaways: [
        "From about 2010 Israel fought Iran's nuclear programme covertly: cyber sabotage, assassinations and a stolen archive.",
        "Iran answered through allied militias, plots abroad and attacks on ships.",
        "In April 2024 Iran struck Israel directly for the first time, ending the shadow war."
      ],
      check: { q: "What was Stuxnet?",
        choices: ["An Iranian missile", "A computer worm that damaged Iran's nuclear centrifuges", "An Israeli spy satellite"], answer: 1,
        explain: "The worm, widely attributed to the US and Israel, made centrifuges at Natanz malfunction around 2010." },
      sources: [
        { title: "Iran's Unprecedented Attack on Israel", publisher: "The Iran Primer, US Institute of Peace", url: "https://iranprimer.usip.org/blog/2024/apr/15/iran%E2%80%99s-unprecedented-attack-israel", date: "2024-04-15" },
        { title: "Explainer: Iran's Missile Assault on Israel", publisher: "The Iran Primer, US Institute of Peace", url: "https://iranprimer.usip.org/blog/2024/oct/02/explainer-iran%E2%80%99s-missile-assault-israel", date: "2024-10-02" },
        { title: "The strike on Iran's consulate in Syria could be the spark that ignites the Middle East", publisher: "Chatham House", url: "https://www.chathamhouse.org/2024/04/strike-irans-consulate-syria-could-be-spark-ignites-middle-east", date: "2024-04" },
        { title: "Israel-Iran October 2024", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10113/", date: "2024-10" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "il_ir-3", kind: "relation", asOf: "2026-09-30",
      title: "The axis of resistance",
      dek: "Iran spent four decades building a ring of armed allies around Israel, from Hezbollah to the Houthis. Between 2024 and 2026 most of that ring was broken.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/il_ir/il_ir-3-hero.webp",
          alt: "Illustration of a hilly southern Lebanese landscape at dusk with a village of stone houses and a damaged road, smoke rising in the distance.",
          caption: "Southern Lebanon, Hezbollah's heartland, has been a front line between Israel and Iran's allies for decades.",
          credit: "AI illustration — not a photograph",
          prompt: "Rolling hills of southern Lebanon at dusk, a village of pale stone houses with olive groves, a cracked road in the foreground, a thin column of smoke rising far in the distance, soft orange light, tense stillness, no people, no flags, no legible text." },
        { type: "facts", head: "The network", rows: [
          ["Lebanon", "Hezbollah, founded 1982 with Revolutionary Guards help"],
          ["Syria", "Bashar al-Assad's government, until December 2024"],
          ["Gaza", "Hamas and Palestinian Islamic Jihad, funded and armed by Iran"],
          ["Yemen", "The Houthis (Ansar Allah)"],
          ["Iraq", "Shia militias in the Popular Mobilisation Forces"]
        ] },
        { type: "section", head: "Building the ring", md:
          "After Israel invaded Lebanon in 1982, Iran's Revolutionary Guards helped create Hezbollah among Lebanon's Shia Muslims. It became the most powerful of Iran's partners: a militia, a political party and a social movement, with an arsenal of rockets aimed at Israel. It fought Israel to a stalemate in 2006. Argentine courts blame Iran and Hezbollah for the 1994 bombing of a Jewish centre in Buenos Aires (see [[lesson:ar-12]]). Iran also backed Syria's Assad family, armed Hamas and Islamic Jihad in Gaza, and supported the Houthis in Yemen and militias in Iraq. It called this the 'axis of resistance'." },
        { type: "section", head: "Strategy", md:
          "The network gave Iran 'forward defence': if Israel or the United States attacked Iran, its allies could strike back from Israel's borders. It let Tehran project power cheaply, keep its own hands officially clean, and claim leadership of the Palestinian cause. Israel saw it as a ring of fire around the country." },
        { type: "section", head: "After 7 October", md:
          "Hamas's attack on Israel on 7 October 2023 set the axis in motion. Hezbollah fired rockets in solidarity, the Houthis attacked shipping in the Red Sea, and Iraqi militias targeted US bases. Israel's response was devastating. In September 2024 thousands of booby-trapped pagers and radios exploded among Hezbollah members, killing dozens and wounding thousands, including civilians; days later an air strike killed Hezbollah's leader, Hassan Nasrallah. Hamas's leaders were killed in Tehran and Gaza. In December 2024 Assad fell to Syrian rebels, cutting Iran's land route to Lebanon." },
        { type: "section", head: "What's left", md:
          "Hezbollah joined Iran's side in the 2026 war and was pushed back again by an Israeli invasion of southern Lebanon, which ended in an April ceasefire ([[lesson:il-6]]). Lebanon's government has pledged to disarm it; the army says it has taken control of weapons south of the Litani river, but Hezbollah refuses to give up its arsenal further north. The Houthis remain the most defiant member, and Iran itself, under a new Supreme Leader, is weaker than at any time since the 1980s ([[lesson:ir-8]])." },
        { type: "compare", head: "Two views of the axis",
          left: { head: "Israel and its allies", md:
            "A network of terrorist proxies used by Iran to wage war on Israel and destabilise Arab states; dismantling it made the region safer." },
          right: { head: "Iran and its allies", md:
            "Legitimate resistance to Israeli occupation and Western domination, whose fighters defended their lands." } },
        { type: "section", head: "Why it matters", md:
          "The collapse of the axis changed the Middle East: Syria has a new government, Lebanon has a chance to rebuild its state, and Arab governments see Iran as weaker. But it also leaves armed groups, grievances and the Palestinian question unresolved, the ground from which such networks grew." }
      ],
      takeaways: [
        "Iran built an 'axis of resistance' of allied armed groups around Israel, led by Hezbollah.",
        "After 7 October 2023, Israel's campaign killed Hezbollah's and Hamas's leaders, and Assad fell in December 2024.",
        "Hezbollah was weakened again in the 2026 war; Lebanon has pledged to disarm it, but it keeps weapons in the north."
      ],
      check: { q: "What happened in Syria in December 2024 that hurt Iran's network?",
        choices: ["Hezbollah took power", "Bashar al-Assad's government fell to rebels", "Iran opened a new base"], answer: 1,
        explain: "Assad's fall cut Iran's main land route for supplying Hezbollah in Lebanon." },
      sources: [
        { title: "2024 Lebanon pager explosions", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2024_Lebanon_pager_explosions", date: "n.d." },
        { title: "Israel Kills Leader of Lebanese Hezbollah", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/IN12431", date: "2024-09" },
        { title: "Lebanon says first phase of plan to disarm Hezbollah completed", publisher: "CNN", url: "https://www.cnn.com/2026/01/08/middleeast/hezbollah-disarmament-israel-lebanon-conflict-intl", date: "2026-01-08" },
        { title: "Lebanon 2025: Plans to disarm Hezbollah", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10347/", date: "2025" }
      ]
    }
  ]
});
