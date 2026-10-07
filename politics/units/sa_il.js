/* ============================================================
   Relationship — Saudi Arabia & Israel 🇸🇦🇮🇱
   Enemies at a distance: 1948, the 1973 oil embargo and two
   Saudi peace plans; a quiet alignment against Iran and the
   deal nearly done before 7 October; and Gaza, the push for a
   Palestinian state and normalisation on hold.
   The US side of the bargain is in sa-7; the UAE's deal in ae_il.
   Research note and sources: tools/research/sa_il.md
   Current as of 7 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("sa_il", {
  id: "sa_il",
  asOf: "2026-10-07",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "sa_il-1", kind: "relation", asOf: "2026-10-07",
      title: "Enemies at a distance",
      dek: "Saudi Arabia has never recognised Israel and never fought it directly. It used oil as a weapon in 1973, then twice offered Israel peace with the whole Arab world in return for a Palestinian state.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa_il/sa_il-1-hero.webp",
          alt: "Illustration of a line of cars queuing at a 1970s petrol station on a winter morning, pumps and a closed sign without words.",
          caption: "The Arab oil embargo of 1973 caused fuel queues across the West.",
          credit: "Illustration — not a photograph",
          prompt: "A long line of 1970s cars queuing at a small petrol station on a grey winter morning, old-fashioned pumps, bare trees and a wet road, exhaust in the cold air, historical documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Hostility and peace plans", items: [
          ["1948", "Saudi troops join the Arab war against the new Israel"],
          ["Oct 1973", "Saudi-led oil embargo after the Yom Kippur War"],
          ["1979", "Saudi Arabia breaks with Egypt over peace with Israel"],
          ["Aug 1981", "Crown Prince Fahd's peace plan"],
          ["28 Mar 2002", "Arab League adopts the Saudi-led Arab Peace Initiative"],
          ["2007", "The Arab Peace Initiative is reaffirmed"]
        ] },
        { type: "section", head: "1948 and after", md:
          "When Israel declared independence in 1948, King Abdulaziz ibn Saud sent a small force to fight alongside Egypt (see [[lesson:il-9]]). The kingdom, which sees itself as guardian of Islam's holiest sites, refused to recognise Israel and supported the Arab boycott. But it rarely fought. Saudi Arabia shares no border with Israel, and its main concerns were its own security, the rivalry with Nasser's Egypt and its alliance with the United States." },
        { type: "section", head: "The oil weapon", md:
          "In October 1973, during the Yom Kippur War, the United States airlifted weapons to Israel. King Faisal, who had warned Washington, led Arab oil producers in cutting production and embargoing exports to the United States and the Netherlands (see [[lesson:sa-10]]). Oil prices quadrupled, Western economies plunged into recession, and Americans queued for petrol. The embargo ended in March 1974, but it showed that the Arab–Israeli conflict could reach every Western household." },
        { type: "section", head: "Peace plans", md:
          "Saudi Arabia condemned Egypt's separate peace with Israel in 1979 and cut ties with Cairo. But it later offered its own route to peace. In 1981 Crown Prince Fahd proposed a plan implying recognition of Israel if it withdrew from land taken in 1967. In 2002, at the height of the Second Intifada, Crown Prince Abdullah went further: under the Arab Peace Initiative, adopted by the Arab League in Beirut on 28 March, all Arab states would establish normal relations with Israel in return for full withdrawal to the 1967 lines, a Palestinian state with East Jerusalem as its capital, and a 'just solution' for refugees." },
        { type: "section", head: "Israel's answer", md:
          "Israeli governments welcomed the idea of Arab recognition but rejected the terms, especially full withdrawal and the return of refugees. The initiative was reaffirmed in 2007 but never negotiated. It remains the formal Arab position, and the reason Saudi officials say peace must come through a Palestinian state." },
        { type: "section", head: "Religion", md:
          "Jerusalem matters to both. The al-Aqsa mosque is Islam's third-holiest site, and Saudi kings, who call themselves Custodians of the Two Holy Mosques, cannot be seen to abandon it." },
        { type: "compare", head: "The kingdom's two faces",
          left: { head: "Public", md:
            "No recognition of Israel; firm support for the Palestinian cause." },
          right: { head: "Private", md:
            "A pragmatic state focused on oil, its US alliance and its rivals." } },
        { type: "section", head: "Why it matters", md:
          "Saudi Arabia's position carries weight far beyond its borders. Its recognition of Israel would signal acceptance by much of the Muslim world, which is why it is the prize every Israeli and American leader seeks." }
      ],
      takeaways: [
        "Saudi Arabia has never recognised Israel or fought it directly; it led the 1973 oil embargo after the Yom Kippur War.",
        "The 2002 Arab Peace Initiative offered Israel normal ties with all Arab states for a Palestinian state on the 1967 lines.",
        "Israel welcomed Arab recognition but rejected the initiative's terms; it remains the formal Arab position."
      ],
      check: { q: "What did the 2002 Arab Peace Initiative offer Israel?",
        choices: ["Saudi oil at a discount", "Normal relations with all Arab states in return for a Palestinian state on the 1967 lines", "A military alliance against Iran"], answer: 1,
        explain: "It was proposed by Saudi Crown Prince Abdullah." },
      sources: [
        { title: "2002 – The Arab Peace Initiative: A vision whose time has come", publisher: "Arab News", url: "https://www.arabnews.com/node/2597176", date: "2025" },
        { title: "Fourteenth Arab Summit: The Arab Peace Initiative – 28 March 2002", publisher: "Interactive Encyclopedia of the Palestine Question", url: "https://www.palquest.org/en/historictext/23295/fourteenth-arab-summit-arab-peace-initiative", date: "2002" },
        { title: "Saudi (Arab) Peace Initiative (2002)", publisher: "Economic Cooperation Foundation", url: "https://ecf.org.il/issues/issue/167", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "sa_il-2", kind: "relation", asOf: "2026-10-07",
      title: "A common enemy and a near-deal",
      dek: "Fear of Iran drew Riyadh and Jerusalem together in secret. By September 2023 the crown prince said they were getting closer to normal relations 'every day'. Then came 7 October.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa_il/sa_il-2-hero.webp",
          alt: "Illustration of a small private jet on a desert runway at night beside a futuristic building on the Red Sea coast.",
          caption: "In November 2020 Netanyahu reportedly flew secretly to Neom to meet Saudi Arabia's crown prince.",
          credit: "Illustration — not a photograph",
          prompt: "A small private jet parked on a desert runway at night beside a sleek modern pavilion on the Red Sea coast, mountains in silhouette, runway lights and a starry sky, quiet and secretive mood, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Toward normalisation", items: [
          ["2010s", "Quiet intelligence ties against Iran"],
          ["2020", "Saudi airspace opens to Israel–UAE flights"],
          ["Sep 2020", "Abraham Accords: UAE and Bahrain recognise Israel"],
          ["22 Nov 2020", "Netanyahu reportedly meets MBS in Neom"],
          ["Jul 2022", "Saudi airspace opened to all civilian flights, including Israel's"],
          ["Sep 2023", "MBS: 'Every day we get closer'"]
        ] },
        { type: "section", head: "A shared fear", md:
          "Saudi Arabia and Israel both saw Iran's revolution, its nuclear programme and its network of armed allies as the greatest threat they faced. Both opposed the 2015 nuclear deal and lobbied against it in Washington. Behind the scenes, according to officials and reports, their intelligence services shared information about Iran and its proxies, and Israeli technology companies sold surveillance and security products in the Gulf." },
        { type: "section", head: "MBS and the Abraham Accords", md:
          "Mohammed bin Salman, crown prince from 2017, wanted to modernise the kingdom and saw Israel as a technology and security partner. In 2018 he said Israelis had a right to their own land. When the UAE and Bahrain signed the [[Abraham Accords]] with Israel in September 2020 (see [[lesson:ae_il-1]]), Saudi Arabia did not join, but it allowed flights between Israel and the UAE to cross its airspace, and in 2022 opened its skies to all civilian flights, including Israel's. On 22 November 2020, Israeli officials said, Benjamin Netanyahu flew secretly to the new city of Neom to meet MBS and the US Secretary of State, Mike Pompeo; Riyadh denied it." },
        { type: "section", head: "The near-deal", md:
          "In 2023 the Biden administration worked on a three-way bargain: Saudi Arabia would recognise Israel; the United States would give the kingdom a defence treaty and help with a civil nuclear programme; and Israel would make concessions to the Palestinians. In a Fox News interview on 20 September 2023, MBS said 'every day we get closer'. Days later Netanyahu told the UN that Israel was 'at the cusp' of a historic peace with Saudi Arabia. Israeli ministers visited Riyadh for international conferences, a first." },
        { type: "section", head: "7 October", md:
          "Two weeks later, on 7 October 2023, Hamas attacked Israel, killing about 1,200 people. Many analysts believe one aim was to derail the Saudi deal. Israel's war in Gaza, which killed tens of thousands of Palestinians, turned Saudi public opinion sharply against normalisation, and Riyadh froze the talks." },
        { type: "section", head: "Quiet contacts continue", md:
          "Even during the war, when Iran fired missiles and drones at Israel in April 2024, reports said Saudi Arabia shared intelligence that helped intercept them, though Riyadh did not confirm it." },
        { type: "compare", head: "What each side wanted",
          left: { head: "Saudi Arabia", md:
            "A US defence treaty, nuclear help and a credible path to a Palestinian state." },
          right: { head: "Israel", md:
            "Recognition by the leading Arab state, with as few Palestinian concessions as possible." } },
        { type: "section", head: "Why it matters", md:
          "The near-deal of 2023 showed how close the two came. Its collapse showed that the Palestinian question could not simply be bypassed." }
      ],
      takeaways: [
        "Fear of Iran led to quiet Saudi–Israeli cooperation; Netanyahu reportedly met MBS secretly in Neom in 2020.",
        "In 2023 a US-brokered Saudi–Israeli deal was close; MBS said 'every day we get closer'.",
        "Hamas's 7 October attack and the Gaza war froze normalisation talks."
      ],
      check: { q: "What did the 2023 three-way bargain offer Saudi Arabia?",
        choices: ["Control of Jerusalem's holy sites", "A US defence treaty and help with civil nuclear power", "Israeli oil"], answer: 1,
        explain: "In return the kingdom would recognise Israel." },
      sources: [
        { title: "'Every day we get closer' to normalization with Israel, Saudi crown prince says", publisher: "NBC News", url: "https://www.nbcnews.com/news/world/saudi-israel-normalization-closer-crown-prince-interview-fox-news-rcna111292", date: "2023-09-20" },
        { title: "Netanyahu tells UN that Israel 'at the cusp' of historic peace with Saudi Arabia", publisher: "The Times of Israel", url: "https://www.timesofisrael.com/netanyahu-tells-un-that-israel-at-the-cusp-of-historic-peace-with-saudi-arabia/", date: "2023-09-22" },
        { title: "Netanyahu met with MBS, Pompeo in Saudi Arabia: Israeli sources", publisher: "Al Jazeera", url: "https://www.aljazeera.com/amp/news/2020/11/23/netanyahu-met-with-mbs-pompeo-in-saudi-arabia-israeli-sources", date: "2020-11-23" },
        { title: "Five ways that Saudi-Israeli normalisation is already here", publisher: "Middle East Eye", url: "https://www.middleeasteye.net/news/saudi-arabia-israel-normalisation-already-happening", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "sa_il-3", kind: "relation", asOf: "2026-10-07",
      title: "A Palestinian state first",
      dek: "Since the Gaza war, Saudi Arabia has led a global push to recognise Palestine and says there will be no normalisation without an 'irreversible' path to statehood. Israel's 27 October election may decide what comes next.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa_il/sa_il-3-hero.webp",
          alt: "Illustration of a large circular assembly hall with tiers of delegates' desks under a high domed ceiling.",
          caption: "Saudi Arabia and France co-chaired the UN conference on a two-state solution in 2025.",
          credit: "Illustration — not a photograph",
          prompt: "A large circular international assembly hall with tiers of curved delegates' desks facing a podium, a high ceiling with soft lighting, blue and gold tones, delegates as small distant figures, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Recognition before normalisation", items: [
          ["Sep 2024", "MBS: no recognition of Israel without a Palestinian state"],
          ["28–30 Jul 2025", "Saudi–French UN conference: the New York Declaration"],
          ["Sep 2025", "UN General Assembly endorses the declaration, 142–10"],
          ["22 Sep 2025", "France, Britain, Canada and others recognise Palestine"],
          ["Nov 2025", "MBS at the White House; no normalisation pledge"],
          ["May 2026", "Riyadh repeats: no deal without an 'irreversible pathway'"]
        ] },
        { type: "section", head: "Harder terms", md:
          "Before 7 October, Saudi officials spoke of 'meaningful steps' for the Palestinians. After a year of war in Gaza, MBS hardened the language: in September 2024 he said the kingdom would not establish relations with Israel without an independent Palestinian state with East Jerusalem as its capital. He also accused Israel of genocide in Gaza, the strongest language a Saudi leader had used." },
        { type: "section", head: "The New York Declaration", md:
          "Saudi Arabia then went on the diplomatic offensive. With France it co-chaired a UN conference on the two-state solution from 28 to 30 July 2025. Its outcome, the New York Declaration, called for a Gaza ceasefire, the release of all hostages, Hamas's disarmament and exclusion from Palestinian politics, reform of the Palestinian Authority, and normalisation between Israel and Arab states. The UN General Assembly endorsed it by 142 votes to 10, with Israel and the United States against. At a follow-up summit on 22 September 2025, France, Britain, Canada, Australia and others formally recognised the State of Palestine." },
        { type: "section", head: "Trump's push", md:
          "Trump wants Saudi Arabia to join the Abraham Accords and pressed MBS on it at the White House in November 2025, where he agreed to sell the kingdom F-35s and signed a defence agreement (see [[lesson:sa-7]]). MBS said he wanted to join, but only with a clear path to a Palestinian state. Netanyahu's government rejects Palestinian statehood outright, so the deal has not moved." },
        { type: "section", head: "The Iran war", md:
          "The 2026 war with Iran pushed the two in contradictory directions. Iranian missiles struck Saudi oil sites, giving Riyadh and Israel a common enemy again. But Saudi Arabia had tried to stay out of the war and is wary of being seen as Israel's partner in it, and it continues to criticise Israel's conduct in Gaza and Lebanon." },
        { type: "section", head: "The election", md:
          "Israel votes on 27 October 2026 (see [[lesson:il-8]]). Netanyahu's opponents are more open to a diplomatic process with the Palestinians, though few of them back a Palestinian state on the 1967 lines. Saudi officials say their condition will not change, whoever wins." },
        { type: "compare", head: "Sequencing",
          left: { head: "Riyadh", md:
            "A credible, irreversible path to a Palestinian state first, then normal relations." },
          right: { head: "Netanyahu's government", md:
            "Normal relations now; no Palestinian state at all." } },
        { type: "section", head: "Why it matters", md:
          "A Saudi–Israeli deal would reshape the Middle East, linking the region's richest Arab state with its strongest military power. For now the kingdom has decided that the Palestinian question must be answered first." }
      ],
      takeaways: [
        "Since the Gaza war Saudi Arabia says there will be no normalisation with Israel without a Palestinian state.",
        "Riyadh co-led, with France, the 2025 UN push behind the New York Declaration and new recognitions of Palestine.",
        "Trump wants a Saudi–Israeli deal; it remains stalled, and Israel's 27 October election may shape what comes next."
      ],
      check: { q: "What did Saudi Arabia and France co-chair in July 2025?",
        choices: ["A summit on Iran's nuclear programme", "A UN conference on the two-state solution", "OPEC talks"], answer: 1,
        explain: "Its outcome was the New York Declaration, endorsed 142–10 at the UN." },
      sources: [
        { title: "France and Saudi Arabia to lead UN push for two-state solution", publisher: "France 24", url: "https://www.france24.com/en/middle-east/20250728-un-two-state-solution-israel-palestinians-france-saudi", date: "2025-07-28" },
        { title: "How Saudi-France diplomatic initiative moved Palestine one step closer to statehood", publisher: "Arab News", url: "https://www.arabnews.com/node/2615205/middle-east", date: "2025-09" },
        { title: "Saudi crown prince says no normalisation with Israel without Palestinian statehood", publisher: "Middle East Eye", url: "https://www.middleeasteye.net/news/saudi-crown-prince-says-no-normalisation-israel-without-palestinian-statehood", date: "2024-09" },
        { title: "Saudi source says normalisation with Israel still tied to Palestinian statehood", publisher: "Middle East Monitor", url: "https://www.middleeastmonitor.com/20260526-saudi-source-says-normalisation-with-israel-still-tied-to-palestinian-statehood/", date: "2026-05-26" },
        { title: "Saudi Arabia's New Approach to Israel and the Normalization Process", publisher: "INSS", url: "https://www.inss.org.il/publication/saudi-israel-2026/", date: "2026" }
      ]
    }
  ]
});
