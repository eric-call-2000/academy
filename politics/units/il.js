/* ============================================================
   Unit 12 — Israel 🇮🇱
   Research note and sources: tools/research/il.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("il", {
  id: "il",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "il-1", kind: "snapshot", asOf: "2026-09-28",
      title: "Israel in brief",
      dek: "A small country at the centre of the Middle East's wars, a month away from an election that is a verdict on 7 October and everything since.",
      blocks: [
        { type: "map", src: "maps/il.svg",
          alt: "Locator map of the eastern Mediterranean with Israel highlighted between Lebanon, Syria, Jordan and Egypt. The Golan Heights in the north-east are hatched in Israel's colour; the West Bank and the Gaza Strip are hatched in grey.",
          caption: "Israel within its pre-1967 lines. Hatched in blue: the Golan Heights, captured from Syria in 1967 and annexed by Israel in 1981, which most countries regard as Syrian. Hatched in grey: the Palestinian territories of the West Bank, under Israeli occupation since 1967, and the Gaza Strip.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Jerusalem (not recognised by most countries, whose embassies are in Tel Aviv)"],
          ["People", "About 10 million: roughly 73% Jewish, 21% Arab"],
          ["System", "Parliamentary democracy, no written constitution"],
          ["Prime minister", "Benjamin Netanyahu (Likud), since December 2022"],
          ["President", "Isaac Herzog, a largely ceremonial role"],
          ["Parliament", "The 120-seat Knesset"],
          ["Next election", "27 October 2026"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Israel has the strongest military in the Middle East, the region's most advanced technology industry and, by wide consensus, an undeclared nuclear arsenal. Since the Hamas-led attack of 7 October 2023 it has fought in Gaza, Lebanon, Syria, Yemen and, twice, [[unit:ir|Iran]], the last time alongside [[unit:us|the United States]] in 2026.\n\n" +
          "Its conflict with the Palestinians is one of the world's most argued-over political questions. The war in Gaza has reshaped global politics, from student protests to International Court of Justice proceedings, and strained Israel's relations with many of its partners." },
        { type: "section", head: "Who holds power", md:
          "Benjamin Netanyahu is Israel's longest-serving prime minister, in office for more than 18 years across three spells. He leads a right-wing and religious coalition that includes the far-right parties of Finance Minister Bezalel Smotrich and National Security Minister Itamar Ben-Gvir.\n\n" +
          "Netanyahu is also on trial for corruption, charges he denies, and has asked the president for a pardon. The main challenger in the coming election is Gadi Eisenkot, a former army chief of staff." },
        { type: "section", head: "The mood in 2026", md:
          "Israelis are exhausted. Three years of war have killed hundreds of soldiers, displaced tens of thousands of people from the north and south, and kept reservists away from home and work for months at a time. Most of the hostages taken on 7 October came home, alive or dead, under the ceasefire of October 2025, but the country remains deeply divided over who is responsible for the failures of that day and over where the wars have led." },
        { type: "section", head: "A diverse society", md:
          "Israel's Jewish majority is itself varied: secular and religious, descendants of European, Middle Eastern and North African Jews, and a large community from the former Soviet Union. Ultra-Orthodox Jews are about 14% of the population and growing fast. Arab citizens, most of them Muslim, have full voting rights but say they face discrimination. Those divisions shape almost every political fight." },
        { type: "section", head: "What Israel wants", md:
          "Across most of its politics, Israel wants Hamas disarmed and unable to rule Gaza, Hezbollah pushed back from its northern border, Iran's nuclear and missile programmes destroyed or contained, and normal relations with Arab states such as [[unit:sa|Saudi Arabia]]. Israelis disagree sharply on the rest: whether a Palestinian state should ever exist, the future of settlements in the West Bank, and the balance between the government and the courts." },
        { type: "callout", tone: "why", md:
          "What Israel decides on Gaza, the West Bank and Iran shapes the whole region, from the Gulf's oil to Egypt's security, and affects how the United States and Europe spend their diplomatic energy. The 27 October election will set that direction." }
      ],
      takeaways: [
        "Israel is the Middle East's strongest military power and has fought on several fronts since 7 October 2023.",
        "Benjamin Netanyahu leads a right-wing and religious coalition and is on trial for corruption, which he denies.",
        "Israelis vote on 27 October 2026, with Gadi Eisenkot as his main challenger."
      ],
      check: { q: "What status does most of the world give the Golan Heights?",
        choices: ["Part of Israel", "Syrian territory held by Israel since 1967", "An independent state"], answer: 1,
        explain: "Israel captured the Golan from Syria in 1967 and annexed it in 1981. Most countries regard it as Syrian territory under Israeli control; the United States recognised Israel's sovereignty in 2019." },
      sources: [
        { title: "2026 Israeli legislative election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Israeli_legislative_election", date: "2026-09" },
        { title: "2026 Israeli Elections", publisher: "Britannica", url: "https://www.britannica.com/event/2026-Israeli-Elections", date: "2026" },
        { title: "Israel-Hamas War", publisher: "Britannica", url: "https://www.britannica.com/event/Israel-Hamas-War", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "il-2", kind: "power", asOf: "2026-09-28",
      title: "Coalitions, courts and Basic Laws",
      dek: "Pure proportional voting guarantees coalition government, and the lack of a constitution makes the Supreme Court the battleground.",
      blocks: [
        { type: "diagram", src: "img/il/il-2-power.svg",
          alt: "Diagram of power in Israel. Voters cast one national list vote with a 3.25% threshold. The 120-seat Knesset is proportional, so every government is a coalition, and it can bring down the government. A 61-seat majority forms the government under Prime Minister Benjamin Netanyahu, who leads the coalition and the war cabinet. The Supreme Court reviews laws against the Basic Laws and was the centre of the 2023 overhaul fight. The president, Isaac Herzog, is largely ceremonial, asks a leader to form a government and can pardon. The next election is on 27 October 2026.",
          caption: "Power runs through the Knesset majority; the Supreme Court is the main check on it.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "One vote, one country-wide list", md:
          "Israelis cast a single vote for a party list, and the whole country is one constituency. Seats in the 120-member Knesset are shared out in proportion to votes among every list that clears 3.25%, which works out at four seats. That makes it one of the most proportional systems in the world, and it means no party has ever won a majority alone. Every government since 1948 has been a coalition.\n\n" +
          "After an election the president consults the parties and asks the leader most likely to command 61 seats to form a government. Small parties, including religious and far-right ones, can hold the balance of power." },
        { type: "section", head: "Why coalitions keep breaking", md:
          "Israeli coalitions tend to be fragile. Israel held five elections between 2019 and 2022 as neither Netanyahu's bloc nor his opponents could reach 61 seats. Today's coalition has lived through repeated crises, the most serious over whether ultra-Orthodox (Haredi) men, long exempt, should be drafted into the army. The Supreme Court ruled in 2024 that the exemptions had no legal basis, and ultra-Orthodox parties walked out of the government in July 2025 over the issue." },
        { type: "section", head: "Basic Laws and the court", md:
          "Israel has no single written constitution. Instead, the Knesset has passed a series of Basic Laws on the government, the courts, human dignity and more, which the Supreme Court treats as a constitution. Since the 1990s the court has struck down laws and government decisions that it found violated them.\n\n" +
          "Supporters see the court as the main protector of rights and minorities in a system with no upper house and no federal structure. Critics, mostly on the right and among religious parties, say unelected judges have taken powers the Knesset never gave them." },
        { type: "section", head: "The 2023 overhaul", md:
          "In January 2023 Netanyahu's new government announced a judicial overhaul: to let a Knesset majority override court rulings, give politicians control of judicial appointments and limit the court's review of 'unreasonable' decisions. Hundreds of thousands protested every week for months, and reservists threatened not to serve. Only the 'reasonableness' change passed, and the Supreme Court struck it down in January 2024. The fight was suspended by the war, but it has not gone away." },
        { type: "section", head: "The army and the reserves", md:
          "Most Jewish Israelis, men and women, are conscripted at 18, and men serve in the reserves for years afterwards. That makes the army a central institution of society, and it is why the ultra-Orthodox exemption causes such anger in wartime." },
        { type: "compare", head: "Two views of the court",
          left: { head: "The government's view", md:
            "An activist court has made itself the final word on everything, from security to appointments. Elected lawmakers, not judges, should decide policy." },
          right: { head: "The opposition's view", md:
            "In a country with no constitution, no upper house and a single-chamber majority, the court is the only real check. Weakening it would leave minorities and rights unprotected." } }
      ],
      takeaways: [
        "Israel elects its 120-seat Knesset by nationwide proportional representation, so every government is a coalition.",
        "With no written constitution, the Supreme Court reviews laws against the Basic Laws.",
        "The 2023 judicial overhaul set off mass protests; the court struck down its one enacted part in 2024."
      ],
      check: { q: "How many Knesset seats does a coalition need to govern?",
        choices: ["50", "61", "80"], answer: 1,
        explain: "A government needs a majority of the 120-seat Knesset, which is 61 seats." },
      sources: [
        { title: "Israel Election 2026: The parties, blocs and battles that will shape Israel's future", publisher: "The Jerusalem Post", url: "https://www.jpost.com/jerusalem-report/article-907099", date: "2026" },
        { title: "Israel's 2026 Elections: The Political Landscape and Strategic Outlook", publisher: "Steptoe", url: "https://www.steptoe.com/en/news-publications/stepwise-risk-outlook/israels-2026-elections-the-political-landscape-and-strategic-outlook.html", date: "2026" },
        { title: "Israel elections 2026: A guide to the parties, candidates and issues", publisher: "Unpacked", url: "https://unpacked.media/israel-elections-2026-a-guide-to-the-parties-candidates-and-issues/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "il-3", kind: "history", asOf: "2026-09-28",
      title: "From 1948 to 7 October",
      dek: "Independence and the Palestinian catastrophe, the wars that redrew the map, a peace process that rose and failed, and the day that changed everything.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/il/il-3-hero.webp",
          alt: "Illustration of the stone walls of Jerusalem's Old City at golden hour, with domes and bell towers behind them and olive trees in the foreground.",
          caption: "Jerusalem, sacred to Jews, Christians and Muslims, has been at the centre of the conflict since 1948.",
          credit: "AI illustration — not a photograph",
          prompt: "The ancient honey-coloured stone walls of an old Middle Eastern city at golden hour, a golden dome and church bell towers rising behind them, olive trees and a winding path in the foreground, long shadows, timeless and contested, no people close up, no flags or legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1948", "Israel declares independence; war with Arab states; about 700,000 Palestinians flee or are expelled"],
          ["1967", "The Six-Day War: Israel takes the West Bank, Gaza, East Jerusalem, Sinai and the Golan"],
          ["1979", "Peace with Egypt; Sinai returned"],
          ["1993–95", "The Oslo Accords; Prime Minister Rabin assassinated"],
          ["2005", "Israel withdraws from Gaza; Hamas takes control in 2007"],
          ["7 Oct 2023", "Hamas-led attack; war in Gaza"]
        ] },
        { type: "section", head: "1. Independence and the Nakba (1948)", md:
          "Zionism, the movement for a Jewish homeland, drew hundreds of thousands of Jews to Ottoman and then British-ruled Palestine, especially as persecution in Europe grew and after the Holocaust. In 1947 the UN proposed splitting the land into Jewish and Arab states. Jewish leaders accepted, Arab leaders refused, and fighting broke out. Israel declared independence in May 1948 and defeated the armies of neighbouring states. About 700,000 Palestinians fled or were expelled from their homes, an event Palestinians call the *Nakba*, the catastrophe." },
        { type: "section", head: "2. 1967 and the occupation", md:
          "In the Six-Day War of June 1967 Israel defeated Egypt, Jordan and Syria and took Sinai, Gaza, the West Bank, East Jerusalem and the Golan Heights. Israel annexed East Jerusalem and later the Golan, moves most of the world does not recognise, and began building settlements in the occupied territories, which most countries and the UN consider illegal under international law, a view Israel disputes. Around 700,000 Israelis now live in settlements in the West Bank and East Jerusalem." },
        { type: "section", head: "3. Peace and its limits (1973–2000)", md:
          "After the 1973 war, Egypt's President Sadat made peace with Israel in 1979 and got Sinai back; Jordan followed in 1994. In the 1993 Oslo Accords Israel and the Palestine Liberation Organization recognised each other and created a Palestinian Authority. In 1995 Prime Minister Yitzhak Rabin was assassinated by a Jewish extremist opposed to the deal. Talks at Camp David in 2000 failed, and a second Palestinian uprising, the intifada, brought years of suicide bombings and military raids." },
        { type: "section", head: "4. Gaza and Hamas (2005–2023)", md:
          "In 2005 Israel withdrew its soldiers and settlers from Gaza. Hamas, an Islamist movement that rejects Israel's existence, won Palestinian elections in 2006 and seized Gaza from the rival Fatah party in 2007. Israel and Egypt imposed a blockade, and Israel and Hamas fought several short wars. Meanwhile the 2020 Abraham Accords normalised Israel's relations with [[unit:ae|the UAE]], Bahrain and Morocco, and talks with [[unit:sa|Saudi Arabia]] were advancing." },
        { type: "section", head: "5. 7 October 2023", md:
          "On 7 October 2023 Hamas-led fighters broke through the Gaza border fence and attacked army posts, towns, kibbutzim and a music festival. About 1,200 people were killed, most of them civilians, and 251 were taken hostage into Gaza. It was the deadliest day in Israel's history, and the worst for Jews since the Holocaust. Israel declared war on Hamas the same day." }
      ],
      takeaways: [
        "Israel's 1948 independence war was also the Palestinian Nakba, when about 700,000 fled or were expelled.",
        "Since 1967 Israel has occupied the West Bank and held the Golan; peace came with Egypt (1979) and Jordan (1994), but Oslo failed.",
        "The 7 October 2023 attack killed about 1,200 people in Israel and began the Gaza war."
      ],
      check: { q: "Which Arab country was the first to make peace with Israel, in 1979?",
        choices: ["Jordan", "Egypt", "Saudi Arabia"], answer: 1,
        explain: "Egypt signed a peace treaty with Israel in 1979 and got Sinai back. Jordan followed in 1994; Saudi Arabia has never established relations." },
      sources: [
        { title: "Israel profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-middle-east-29123668", date: "n.d." },
        { title: "Israel-Hamas War", publisher: "Britannica", url: "https://www.britannica.com/event/Israel-Hamas-War", date: "2026" },
        { title: "Gaza war hostage crisis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gaza_war_hostage_crisis", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "il-4", kind: "players", asOf: "2026-09-28",
      title: "Netanyahu and those who would replace him",
      dek: "A prime minister fighting for political survival, two far-right ministers, and an opposition led by former soldiers and former prime ministers.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/il/il-4-hero.webp",
          alt: "Illustration of a modern stone parliament building on a hill in Jerusalem at dusk, with a large menorah sculpture in front and lit windows.",
          caption: "The Knesset in Jerusalem. After 27 October, 61 of its 120 seats will decide who governs.",
          credit: "AI illustration — not a photograph",
          prompt: "A modern rectangular stone parliament building on a hill at dusk, a large bronze candelabrum sculpture on the lawn in front, lit windows, rows of cypress trees, dusky blue sky, calm and civic, no flags or legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Benjamin Netanyahu", role: "Prime minister; Likud leader",
            img: "img/il/portrait-netanyahu.webp", source: "Government Press Office photo via Wikimedia Commons; confirm the licence.",
            md: "Prime minister 1996–99, 2009–21 and since 2022. On trial since 2020 for bribery, fraud and breach of trust, which he denies; the ICC issued a warrant for his arrest in 2024, which Israel rejects." },
          { name: "Gadi Eisenkot", role: "Leader of Yashar",
            img: "img/il/portrait-eisenkot.webp", source: "IDF Spokesperson's Unit photo (CC BY-SA) via Wikimedia Commons; confirm the licence.",
            md: "Army chief of staff 2015–19, briefly in the war cabinet in 2023, whose son was killed in Gaza. His new party leads most polls, and he heads the main anti-Netanyahu bloc." },
          { name: "Naftali Bennett", role: "Leader of Together",
            img: "img/il/portrait-bennett.webp", source: "Government Press Office photo via Wikimedia Commons; confirm the licence.",
            md: "A right-wing former prime minister (2021–22) who formed a joint list with Yair Lapid in April 2026. Talks to merge with Eisenkot failed, and they run separately." },
          { name: "Yair Lapid", role: "Opposition leader; number two on Together",
            img: "img/il/portrait-lapid.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Leader of the centrist Yesh Atid and prime minister in 2022. Now allied with Bennett." },
          { name: "Bezalel Smotrich", role: "Finance minister; Religious Zionism leader",
            img: "img/il/portrait-smotrich.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A settler leader who also oversees much of civilian policy in the West Bank. Wants Israeli sovereignty there and opposes a Palestinian state; his party is rising in polls." },
          { name: "Isaac Herzog", role: "President, since 2021",
            img: "img/il/portrait-herzog.webp", source: "Official photo (CC BY-SA) via Wikimedia Commons; confirm the licence.",
            md: "Former Labour leader. In April 2026 he shelved Netanyahu's pardon request and urged a plea deal instead." }
        ] },
        { type: "section", head: "Itamar Ben-Gvir", md:
          "The national security minister leads the far-right Jewish Power party and controls the police. Once convicted of incitement to racism and support for a terrorist group, he has pushed for tougher policing, more guns for civilians and Jewish prayer on the Temple Mount, or Haram al-Sharif, a flashpoint holy site. He left the government briefly in 2025 in protest at a ceasefire and then returned." },
        { type: "section", head: "The two blocs", md:
          "Israeli politics is organised into two camps: those who would serve under Netanyahu and those who wouldn't. His bloc includes Likud, the far-right parties of Smotrich and Ben-Gvir, and the ultra-Orthodox parties. The opposing bloc includes Eisenkot's Yashar, Bennett and Lapid's Together, Avigdor Lieberman's Yisrael Beytenu and the left-wing Democrats. Arab parties, which win 10 to 15 seats, sit apart: they oppose Netanyahu, but no Arab party has ever formally joined a government except Ra'am, in Bennett's coalition of 2021–22." },
        { type: "section", head: "The generals", md:
          "Eisenkot is not the only former commander in politics: several of Israel's opposition figures are ex-generals, a long Israeli tradition. Their security credentials matter to voters in wartime." },
        { type: "section", head: "The trial and the pardon", md:
          "Netanyahu has been on trial since 2020 in three cases involving gifts from wealthy friends and alleged favours to media owners. In November 2025 he formally asked President Herzog for a pardon, after Trump publicly urged one. Pardons in Israel usually follow a conviction and an admission of guilt. Herzog, under pressure from both sides, said in April 2026 that he wanted the parties to try to reach a plea agreement first. The trial continues, with Netanyahu testifying between wartime duties and his campaign." }
      ],
      takeaways: [
        "Netanyahu's bloc (Likud, the far right and the ultra-Orthodox parties) faces a bloc led by Gadi Eisenkot.",
        "Bennett and Lapid formed a joint list, Together; Eisenkot's Yashar runs separately.",
        "Netanyahu is on trial for corruption; Herzog has shelved his pardon request in favour of a possible plea deal."
      ],
      check: { q: "What did President Herzog decide about Netanyahu's pardon request in April 2026?",
        choices: ["He granted it", "He rejected it outright", "He shelved it and urged a plea deal"], answer: 2,
        explain: "Herzog said the parties should first try to reach an agreement ending the case, and set the request aside for now." },
      sources: [
        { title: "Rebuffing Netanyahu's pardon request, at least for now, Herzog calls for new plea deal talks", publisher: "The Times of Israel", url: "https://www.timesofisrael.com/herzog-pushes-for-new-plea-deal-talks-says-he-wont-consider-netanyahu-pardon-request-yet/", date: "2026-04-26" },
        { title: "No Centrist Merger: Eisenkot's Party to Run Separately From Bennett-Lapid", publisher: "Haaretz", url: "https://www.haaretz.com/israel-news/elections/2026-09-07/ty-article/.premium/no-centrist-merger-together-and-yashar-parties-to-run-for-election-separately/000001a0-7bf6-d3de-adf6-7ff78f5f0000", date: "2026-09-07" },
        { title: "Naftali Bennett, Yair Lapid join forces under unified party ahead of Israeli elections", publisher: "The Jerusalem Post", url: "https://www.jpost.com/israel-news/politics-and-diplomacy/article-894194", date: "2026-04" },
        { title: "Israel's Election and Eisenkot's Arab Coalition Dilemma", publisher: "Arab Center Washington DC", url: "https://arabcenterdc.org/resource/israels-election-and-eisenkots-arab-coalition-dilemma/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "il-5", kind: "story", asOf: "2026-09-28",
      title: "The Gaza war",
      dek: "Two years of war after 7 October: the hostages, the devastation of Gaza, and the arguments in the world's courts.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/il/il-5-hero.webp",
          alt: "Illustration of a wall covered in rows of blank paper posters in a city square at dusk, with a small crowd standing before it, seen from behind.",
          caption: "For two years, posters of the hostages covered walls across Israel.",
          credit: "AI illustration — not a photograph",
          prompt: "A long concrete wall in a city square at dusk covered in rows of blank white paper posters, some weathered and torn, a small quiet crowd seen from behind standing before it, candles on the ground, yellow ribbons tied to a railing, sombre, no faces, no legible text." },
        { type: "section", head: "What happened", md:
          "After 7 October Israel launched an air and ground campaign to destroy Hamas and bring home the hostages. The war lasted two years. Israel killed most of Hamas's leaders, including Yahya Sinwar, and destroyed much of its tunnel network. Hundreds of Israeli soldiers were killed in the fighting.\n\n" +
          "For Gaza's 2 million people the war was catastrophic. More than 73,000 Palestinians were killed by July 2026, according to Gaza's health ministry, whose figures the UN cites; the ministry does not separate civilians from fighters, and Israel says it killed more than 20,000 militants. Most of the population was displaced, often many times, most buildings were damaged or destroyed, and UN-backed experts declared famine in parts of Gaza in 2025." },
        { type: "facts", head: "By the numbers", rows: [
          ["Killed in Israel, 7 Oct 2023", "About 1,200"],
          ["Hostages taken", "251"],
          ["Palestinians killed (Gaza health ministry)", "More than 73,000 by July 2026"],
          ["Last hostages' remains returned", "January 2026"]
        ] },
        { type: "section", head: "Why it was so destructive", md:
          "Hamas fought from tunnels and dense urban areas and held hostages throughout. Israel's government argued that only military pressure would free the hostages and destroy Hamas, and blamed Hamas for embedding among civilians. Critics, including the UN, many humanitarian organisations and some of Israel's allies, said Israel used disproportionate force and restricted food and aid in ways that broke international law. Israel rejects those accusations." },
        { type: "section", head: "The courts", md:
          "The war went to international courts. In a case brought by South Africa, the International Court of Justice ordered Israel in 2024 to prevent acts of genocide and allow aid, while the main case continues. In November 2024 the International Criminal Court issued arrest warrants for Netanyahu and his former defence minister, and for Hamas leaders. In September 2025 a UN commission of inquiry concluded that Israel had committed genocide. Israel rejects all of these as biased and says it acted in self-defence against an enemy that attacked it." },
        { type: "section", head: "The hostages", md:
          "The fate of the 251 hostages dominated Israeli life. Some were freed in a short truce in November 2023 and another in early 2025, a few were rescued by the army, and dozens died in captivity. Their families led weekly mass protests demanding a deal, often accusing the government of putting the war ahead of their return. The government said military pressure was what brought Hamas to the table." },
        { type: "compare", head: "Two accounts of the war",
          left: { head: "Israel's government", md:
            "Israel fought a just war of self-defence against a group that massacred its citizens and hid among civilians. Hamas bears responsibility for the suffering in Gaza." },
          right: { head: "Its critics", md:
            "Nothing justifies the scale of killing, destruction and hunger inflicted on Gaza's civilians. Many legal experts and UN bodies say it broke international law." } },
        { type: "section", head: "What's next", md:
          "The war ended in a ceasefire in October 2025, as the next briefing but one explains. The ICJ case, the ICC warrants and accountability inquiries inside Israel continue; a state commission into the failures of 7 October, long resisted by the government, is a key election issue." }
      ],
      takeaways: [
        "The Gaza war followed the 7 October 2023 attack, in which about 1,200 people were killed and 251 taken hostage.",
        "Gaza's health ministry counts more than 73,000 Palestinians killed; most of Gaza was destroyed or damaged.",
        "The war is before the ICJ and the ICC; Israel rejects accusations that it broke international law."
      ],
      check: { q: "Which court issued an arrest warrant for Netanyahu in November 2024?",
        choices: ["The International Criminal Court", "Israel's Supreme Court", "The European Court of Human Rights"], answer: 0,
        explain: "The ICC, which tries individuals, issued warrants for Netanyahu, his former defence minister and Hamas leaders. Israel is not a member and rejects its jurisdiction." },
      sources: [
        { title: "Israel-Hamas War", publisher: "Britannica", url: "https://www.britannica.com/event/Israel-Hamas-War", date: "2026" },
        { title: "Humanitarian Situation Report, 16 July 2026", publisher: "UN OCHA", url: "https://www.ochaopt.org/content/humanitarian-situation-report-16-july-2026", date: "2026-07-16" },
        { title: "Gaza war hostage crisis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gaza_war_hostage_crisis", date: "2026" },
        { title: "A Guide to the Gaza Peace Deal", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/articles/guide-trumps-twenty-point-gaza-peace-deal", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "il-6", kind: "story", asOf: "2026-09-28",
      title: "The Iran wars",
      dek: "Twelve days in June 2025, then a joint war with the United States from February 2026 that killed Iran's Supreme Leader and spread across the region.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/il/il-6-hero.webp",
          alt: "Illustration of a night sky over a coastal city with the bright streaks of interceptor missiles rising and small flashes high above.",
          caption: "Israel's air defences intercepted most of the missiles Iran fired, but not all.",
          credit: "AI illustration — not a photograph",
          prompt: "A coastal city skyline at night seen from a distance, bright thin streaks of interceptor missiles rising into a dark sky, small flashes high above, apartment windows dark, the sea reflecting light, tense and eerie, no people close up, no legible text." },
        { type: "section", head: "What happened", md:
          "For decades Israel and [[unit:ir|Iran]] fought a shadow war of assassinations, sabotage and proxies. In April and October 2024 they exchanged direct strikes for the first time. Then, on 13 June 2025, Israel launched a full air campaign against Iran's nuclear sites, missile forces and commanders. Iran fired hundreds of ballistic missiles at Israeli cities. On 22 June the United States bombed the nuclear sites at Fordow, Natanz and Isfahan, and a ceasefire followed two days later: the 12-day war.\n\n" +
          "On 28 February 2026 Israel and the United States began a much larger war. Strikes on the first day killed Supreme Leader Ali Khamenei. Iran fired missiles and drones at Israel and at US bases and oil facilities across the Gulf, and tried to close the Strait of Hormuz. Hezbollah joined from Lebanon, and Israel invaded southern Lebanon until a ceasefire there in April." },
        { type: "timeline", head: "How it unfolded", items: [
          ["Apr & Oct 2024", "First direct Iran–Israel exchanges of fire"],
          ["13–24 Jun 2025", "The 12-day war; US strikes on nuclear sites"],
          ["28 Feb 2026", "US–Israeli war on Iran begins; Khamenei killed"],
          ["2 Mar 2026", "Hezbollah enters; Israel later invades southern Lebanon"],
          ["8 Apr 2026", "US–Iran ceasefire mediated by Pakistan"],
          ["16 Apr 2026", "Israel–Lebanon ceasefire"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Israel sees a nuclear-armed Iran, which calls for its destruction and funds Hamas, Hezbollah and the Houthis, as an existential threat. Israeli leaders argued that Iran's enrichment of uranium close to weapons grade, and the weakening of its air defences and proxies after 2024, created a window that might not return. Iran says its programme is peaceful and that the strikes were unprovoked aggression." },
        { type: "compare", head: "Two views of the wars",
          left: { head: "Supporters in Israel and the US", md:
            "Iran was closer than ever to a bomb and had armed groups on Israel's borders. Striking now set its programme back years and weakened a regime that has brutalised its own people." },
          right: { head: "Critics", md:
            "The wars broke international law, killed thousands in Iran and Lebanon, disrupted the world's oil and may push Iran's leaders to decide they need a bomb. Military force can delay a programme, not end the knowledge behind it." } },
        { type: "section", head: "Why it matters", md:
          "The wars reshaped the region. Iran's leadership was decapitated but not overthrown, and a new Supreme Leader, Mojtaba Khamenei, took over. Gulf states were hit by Iranian missiles. And for Israelis the wars were a moment of rare national agreement: most supported striking Iran, whatever they thought of the government." },
        { type: "section", head: "What's next", md:
          "The US–Iran ceasefire and a June memorandum have frayed, with renewed US and Iranian strikes at sea in September 2026. Any US–Iran deal would affect Israel directly, and Israel's next government will decide how far to go if Iran rebuilds its nuclear or missile programmes." }
      ],
      takeaways: [
        "Israel and Iran fought a 12-day war in June 2025, ending after US strikes on Iran's nuclear sites.",
        "From 28 February 2026 Israel and the US waged a larger war that killed Iran's Supreme Leader.",
        "Hezbollah joined in March 2026; Israel invaded southern Lebanon until an April ceasefire."
      ],
      check: { q: "Which three Iranian nuclear sites did the US bomb on 22 June 2025?",
        choices: ["Bushehr, Arak and Tehran", "Fordow, Natanz and Isfahan", "Qom, Tabriz and Shiraz"], answer: 1,
        explain: "US bombers struck Fordow, Natanz and Isfahan, bringing the 12-day war to an end two days later." },
      sources: [
        { title: "2026 Iran war", publisher: "Britannica", url: "https://www.britannica.com/event/2026-Iran-war", date: "2026" },
        { title: "2026 Lebanon war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Lebanon_war", date: "2026" },
        { title: "US-Iran ceasefire deal: What are the terms, and what's next?", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/4/8/us-iran-ceasefire-deal-what-are-the-terms-and-whats-next", date: "2026-04-08" },
        { title: "Why is there fighting in Lebanon?", publisher: "CNN", url: "https://www.cnn.com/2026/06/20/middleeast/why-is-there-fighting-in-lebanon-and-does-it-threaten-the-iran-deal", date: "2026-06-20" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "il-7", kind: "story", asOf: "2026-09-28",
      title: "After the ceasefire",
      dek: "The hostages came home and the guns mostly fell silent. But Gaza's future, and who holds weapons there, is still undecided.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/il/il-7-hero.webp",
          alt: "Illustration of a flattened urban landscape with a few standing buildings, a road cleared through rubble and a line of aid trucks at dawn.",
          caption: "Gaza's reconstruction will take years, and depends on who governs it.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast landscape of rubble and damaged concrete buildings at dawn, a cleared road running through it with a line of white aid trucks, a few people walking far away, dust in soft pink light, the sea on the horizon, quiet devastation and fragile hope, no faces, no legible text." },
        { type: "section", head: "What happened", md:
          "Under a US-brokered plan, a ceasefire took effect in Gaza on 10 October 2025. On 13 October Hamas released the 20 living hostages, and Israel released nearly 2,000 Palestinian prisoners and detainees. The remains of deceased hostages were returned over the following months, the last by January 2026. Israeli troops pulled back to a line inside Gaza, but after the ceasefire still held around half of the territory.\n\n" +
          "In January 2026 a Board of Peace chaired by Trump was set up to oversee Gaza's transition, with an International Stabilisation Force to be formed from several countries' troops. The Rafah crossing to [[unit:eg|Egypt]] reopened for limited travel in February." },
        { type: "timeline", head: "How it unfolded", items: [
          ["10 Oct 2025", "Ceasefire takes effect"],
          ["13 Oct 2025", "20 living hostages freed; prisoners released"],
          ["Jan 2026", "Last hostage remains returned; Board of Peace formed"],
          ["Feb 2026", "Rafah crossing reopens for limited travel"],
          ["31 Jul 2026", "Board of Peace announces a Hamas disarmament roadmap"]
        ] },
        { type: "section", head: "The disarmament question", md:
          "The hardest issue is Hamas's weapons. On 31 July 2026 the Board of Peace announced a three-year roadmap under which Hamas and other armed groups would hand their weapons to a Palestinian committee in stages, as Israeli forces withdraw. Hamas says it will not implement any part until Israel withdraws; Israel has not confirmed it accepts the roadmap, and says Hamas must disarm first. Israeli strikes and clashes continue, and the UN says the humanitarian situation remains dire." },
        { type: "compare", head: "Two views of what comes first",
          left: { head: "Israel's government", md:
            "Hamas must disarm completely before Israel withdraws. Anything else lets it rebuild and attack again, as it did in 2023." },
          right: { head: "Hamas and many Palestinians", md:
            "Israel must withdraw and let Gaza rebuild. Weapons will be handed over only to a Palestinian authority, as part of a path to statehood." } },
        { type: "section", head: "Why it matters", md:
          "Without disarmament and withdrawal, the ceasefire could collapse, and Gaza cannot be rebuilt at scale. Arab and European governments, which would pay for reconstruction, want a clear path to Palestinian self-government. In September 2025 the UK, France, Canada, Australia and others recognised a Palestinian state; Israel's government strongly opposed the move." },
        { type: "section", head: "Who runs Gaza", md:
          "Under the plan, a committee of Palestinian technocrats is to run daily life under the Board of Peace's supervision, while a reformed Palestinian Authority might eventually take over. Hamas says it will give up governing Gaza day to day, but not its role in Palestinian politics. Israel's government opposes any return of the Palestinian Authority." },
        { type: "section", head: "What's next", md:
          "Watch whether the Stabilisation Force deploys at scale, whether the first stage of disarmament begins, and how the election changes Israel's position. Watch the West Bank, too, where violence between settlers, Palestinians and the army has risen, and where some ministers push to annex territory." }
      ],
      takeaways: [
        "A US-brokered ceasefire took effect on 10 October 2025; all living hostages were freed on 13 October.",
        "A Board of Peace chaired by Trump oversees Gaza's transition; Rafah reopened for limited travel in February 2026.",
        "A July 2026 disarmament roadmap is stalled over whether Hamas disarms or Israel withdraws first."
      ],
      check: { q: "What did the Board of Peace's July 2026 roadmap propose?",
        choices: ["Israeli annexation of Gaza", "A staged handover of Hamas's weapons as Israel withdraws", "Elections in Gaza within a month"], answer: 1,
        explain: "The roadmap sets out a three-year transition in which disarmament and Israeli withdrawal happen in linked stages. Neither side has started implementing it." },
      sources: [
        { title: "Gaza Board of Peace announces Hamas disarmament agreement: What we know", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/7/31/gaza-board-of-peace-announces-hamas-disarmament-agreement-what-we-know", date: "2026-07-31" },
        { title: "U.S. says officials reached roadmap for Hamas disarmament in Gaza", publisher: "The Washington Post", url: "https://www.washingtonpost.com/politics/2026/07/30/us-says-officials-reached-roadmap-hamas-disarmament-gaza/", date: "2026-07-30" },
        { title: "Gaza's Rafah border crossing with Egypt reopens for limited traffic", publisher: "NPR", url: "https://www.npr.org/2026/02/02/g-s1-108287/gaza-rafah-border-crossing-reopens", date: "2026-02-02" },
        { title: "A Guide to the Gaza Peace Deal", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/articles/guide-trumps-twenty-point-gaza-peace-deal", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "il-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand: the 27 October election",
      dek: "The first election since 7 October is a referendum on Netanyahu, and the polls say it is too close to call.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/il/il-8-hero.webp",
          alt: "Illustration of a school gymnasium set up as a polling station, with a blue ballot box and small booths behind cardboard screens.",
          caption: "Israelis vote on 27 October 2026, the first national election since the 7 October attack.",
          credit: "AI illustration — not a photograph",
          prompt: "A school gymnasium set up as a polling station, a pale blue ballot box on a table, small voting booths behind cardboard screens, trays of blank paper ballots, basketball hoops above, soft morning light, a few voters seen from behind, calm civic mood, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Election:** 27 October 2026, for all 120 Knesset seats.\n" +
          "- **Polls:** late-September polls give Eisenkot's bloc 52–54 seats and Netanyahu's 50–51, with Arab parties on 11–15; neither camp reaches 61.\n" +
          "- **Parties:** Eisenkot's Yashar polls 23–24 seats, Likud 19–21; Smotrich's party is at a new high.\n" +
          "- **Gaza:** the ceasefire holds shakily; disarmament is stalled.\n" +
          "- **Iran and Lebanon:** ceasefires in place but fragile." },
        { type: "section", head: "What the election is about", md:
          "The campaign is a referendum on Netanyahu and on 7 October. His opponents blame him for the failures that led to the attack, for resisting a state commission of inquiry and for dividing the country with the judicial overhaul. His supporters credit him with the blows against Hezbollah and Iran and with bringing the hostages home. The ultra-Orthodox draft, the cost of living and the West Bank are also on the ballot, alongside the question of how Israel should be governed after three years of war." },
        { type: "section", head: "The arithmetic", md:
          "If neither bloc reaches 61, the outcome depends on coalition bargaining. Eisenkot's camp can only reach a majority with the support of Arab parties, from outside the government or within it, which some of its own right-leaning voters oppose. Netanyahu would need a defector from the other camp. Israel has held repeated elections before when neither side could form a government, most recently five in under four years between 2019 and 2022." },
        { type: "section", head: "The campaign", md:
          "The parties submitted their lists in September. Bennett and Lapid's Together and Eisenkot's Yashar failed to merge and are competing for some of the same voters, which could waste votes. On the right, Smotrich's party has gained at Likud's expense. Turnout among Arab citizens, often low, could decide whether the anti-Netanyahu camp has a path to power." },
        { type: "section", head: "Beyond the vote", md:
          "Whoever governs will face the same questions: whether to push for a Saudi normalisation deal that would require a path to a Palestinian state, how to rebuild the army after three years of war, how to heal the divisions of the judicial overhaul, and how to repair relations with European partners angered by Gaza, and with a younger generation of Americans far more critical of Israel than their parents." },
        { type: "section", head: "Three scenarios", md:
          "- **Change of government.** Eisenkot forms a coalition with Bennett, Lapid and others, with outside support from Arab parties.\n" +
          "- **Netanyahu survives.** His bloc gains in the final weeks, or a centrist party joins him.\n" +
          "- **Deadlock.** Neither side reaches 61, and Israel heads for another election in 2027." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **27 October 2026:** election day\n" +
          "- **Early November:** official results; the president's consultations\n" +
          "- **Ongoing:** Gaza disarmament, the Iran talks and Netanyahu's trial" },
        { type: "section", head: "Connections", md:
          "Israel's story runs through [[unit:us]] (its closest ally), [[unit:ir]] (the wars), [[unit:eg]] (Gaza's border and the oldest peace treaty), [[unit:sa]] (normalisation on hold), [[unit:ae]] (the Abraham Accords), [[unit:tr]] (a sharp critic) and [[unit:ru]] (Syria)." }
      ],
      takeaways: [
        "Israel votes on 27 October 2026; polls show neither bloc reaching 61 seats.",
        "Eisenkot's party leads Likud, but his bloc needs Arab parties' support to govern.",
        "The election is a referendum on Netanyahu and the failures of 7 October."
      ],
      check: { q: "Why is it hard for Eisenkot's bloc to form a government even if it wins more seats?",
        choices: ["The president must approve him", "It needs the support of Arab parties to reach 61", "It is barred from joining coalitions"], answer: 1,
        explain: "Polls put the anti-Netanyahu Jewish parties below 61 seats, so they would need Arab parties' support, which some of their own voters oppose." },
      sources: [
        { title: "Israel Election Poll: Eisenkot Bloc Leads Over Netanyahu Coalition by One Seat", publisher: "Haaretz", url: "https://www.haaretz.com/israel-news/elections/2026-09-24/ty-article/.premium/channel-13-news-poll-eisenkot-bloc-leads-with-52-seats-netanyahu-bloc-with-51/000001a0-cfc1-decb-affc-dfe9ca2f0000", date: "2026-09-24" },
        { title: "Israel Election Poll: Eisenkot-Netanyahu Tie as Smotrich Hits New High", publisher: "Haaretz", url: "https://www.haaretz.com/israel-news/israel-politics/2026-09-27/ty-article/israel-election-poll-eisenkot-netanyahu-tie-as-smotrich-hits-new-high/000001a0-e43c-db4b-a7a5-f67e17050000", date: "2026-09-27" },
        { title: "Israel Election 2026: Can Eisenkot Beat Netanyahu?", publisher: "Quillette", url: "https://quillette.com/2026/09/14/israels-most-consequential-election-netanyahu-eisenkot/", date: "2026-09-14" },
        { title: "Israel's Election and Eisenkot's Arab Coalition Dilemma", publisher: "Arab Center Washington DC", url: "https://arabcenterdc.org/resource/israels-election-and-eisenkots-arab-coalition-dilemma/", date: "2026" }
      ]
    }
  ]
});
