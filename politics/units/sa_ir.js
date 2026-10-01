/* ============================================================
   Relationship — Saudi Arabia & Iran 🇸🇦🇮🇷
   A Sunni kingdom and a Shia republic competing to lead the
   Muslim world: pilgrims and embassies, the 2019 attack on
   Abqaiq, and the contest for the Arab world. The Yemen war, the
   2023 Beijing deal and the 2026 strikes are in sa-6 and ir-7.
   Research note and sources: tools/research/sa_ir.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("sa_ir", {
  id: "sa_ir",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "sa_ir-1", kind: "relation", asOf: "2026-09-30",
      title: "Rivals for the Muslim world",
      dek: "Since 1979 a Sunni monarchy and a Shia revolutionary republic have each claimed to speak for Islam. Their rivalry has twice broken off relations, and both times it started with pilgrims or protesters.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa_ir/sa_ir-1-hero.webp",
          alt: "Illustration of a vast crowd of pilgrims in white robes walking across a plain toward a city of white tents under a hazy sun.",
          caption: "The Hajj pilgrimage to Mecca, which Saudi Arabia hosts, has repeatedly become a flashpoint with Iran.",
          credit: "Illustration — not a photograph",
          prompt: "A vast crowd of pilgrims in simple white robes walking across a dusty plain toward a sprawling city of white tents, rocky hills behind, hazy golden sunlight, seen from a distance so no faces are visible, reverent and immense, no flags, no legible text." },
        { type: "timeline", head: "Breaks and repairs", items: [
          ["1979", "Iran's Islamic Revolution"],
          ["1980–88", "Saudi Arabia bankrolls Iraq in its war with Iran"],
          ["31 Jul 1987", "Clash in Mecca kills 402, including 275 Iranians"],
          ["1988", "Riyadh cuts diplomatic ties"],
          ["1991", "Relations restored"],
          ["2 Jan 2016", "Sheikh Nimr executed; Saudi embassy in Tehran stormed"],
          ["3 Jan 2016", "Riyadh cuts ties again"],
          ["Mar 2023", "Relations restored in a deal brokered by China"]
        ] },
        { type: "section", head: "Two claims to lead", md:
          "Before 1979 the two monarchies were uneasy partners, both allied to the United States. Iran's revolution changed that (see [[lesson:ir-9]]). Ayatollah Ruhollah Khomeini denounced kings as un-Islamic and called on Muslims everywhere to follow Iran's example, a direct challenge to the House of Saud, whose legitimacy rests on guarding Islam's holiest sites in Mecca and Medina. The kingdom follows a strict Sunni tradition; Iran is the largest Shia Muslim country. Saudi Arabia, which has its own Shia minority in its oil-rich Eastern Province, feared revolution would spread. When Iraq invaded Iran in 1980, Riyadh and its Gulf neighbours lent Saddam Hussein tens of billions of dollars." },
        { type: "section", head: "Blood at the Hajj", md:
          "Iranian pilgrims had held political rallies at the Hajj since the revolution. On 31 July 1987 Saudi security forces confronted an Iranian demonstration in Mecca. According to the Saudi government, 402 people died, 275 of them Iranian pilgrims and 85 Saudi police; Saudi Arabia said the pilgrims were armed and died in a stampede, while Iran said many were shot. Crowds in Tehran then ransacked the Saudi embassy, and a Saudi diplomat later died of his injuries. Riyadh broke off relations in 1988, and Iranians stayed away from the Hajj for three years, until Riyadh agreed a new quota for Iranian pilgrims. Ties were restored in 1991, and in the late 1990s Iran's reformist president Mohammad Khatami built a real thaw, including a 2001 security agreement." },
        { type: "section", head: "The second break", md:
          "The Arab uprisings of 2011 and the wars in Syria and Yemen put the two on opposite sides again. On 2 January 2016 Saudi Arabia executed 47 people, among them Sheikh Nimr al-Nimr, a Shia cleric who had led protests in the Eastern Province. Protesters stormed and set fire to the Saudi embassy in Tehran and its consulate in Mashhad. The next day Saudi Arabia cut relations again, and several of its allies followed. They stayed broken for seven years, until the deal brokered by [[unit:cn|China]] in March 2023 (see [[lesson:sa-6]])." },
        { type: "compare", head: "How each side tells it",
          left: { head: "Riyadh", md:
            "Iran exports revolution, arms militias in Arab countries and stirs up Shia minorities. Saudi Arabia defends the region's stability." },
          right: { head: "Tehran", md:
            "Saudi Arabia is an American client that funds extremist Sunni groups and represses its own Shia. Iran defends the oppressed." } },
        { type: "section", head: "Why it matters", md:
          "Much of the Middle East's conflict since 1979, from Lebanon to Yemen, has been shaped by this rivalry. It is often described as a religious feud, but it is also a contest between two states for power, oil markets and influence, and it has cooled when both leaderships wanted calm. Even during the 2026 war, when Iranian missiles struck Saudi oil sites, the two foreign ministers kept talking by phone." }
      ],
      takeaways: [
        "Iran's 1979 revolution challenged the Saudi monarchy's claim to lead the Muslim world.",
        "A deadly clash at the 1987 Hajj and the 2016 execution of a Shia cleric each led Riyadh to cut ties.",
        "The rivalry is religious in tone but also a struggle for regional power."
      ],
      check: { q: "What led Saudi Arabia to cut ties with Iran in January 2016?",
        choices: ["An oil price war", "The storming of its embassy after it executed a Shia cleric", "A border war"], answer: 1,
        explain: "After Saudi Arabia executed Sheikh Nimr al-Nimr, protesters stormed its embassy in Tehran, and Riyadh broke off relations." },
      sources: [
        { title: "402 die as Iranians, police clash in Mecca", publisher: "The Washington Post", url: "https://www.washingtonpost.com/archive/politics/1987/08/02/402-die-as-iranians-police-clash-in-mecca/1dfa6dba-0dd0-432b-ac63-411aeb8938a4/", date: "1987-08-02" },
        { title: "Saudi Arabia's execution of cleric ignites fury in Iran", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/saudi-arabia-executes-47-people-including-prominent-shiite-cleric/2016/01/02/01bfee06-198e-4eb6-ab5e-a5bcc8fb85c6_story.html", date: "2016-01-02" },
        { title: "Protesters storm Saudi embassy in Tehran after execution of top Shiite cleric", publisher: "France 24", url: "https://www.france24.com/en/20160102-iranian-protesters-storm-saudi-embassy-tehran-nimr-execution", date: "2016-01-02" },
        { title: "How Beijing Helped Riyadh and Tehran Reach a Detente", publisher: "International Crisis Group", url: "https://www.crisisgroup.org/qna/middle-east-north-africa-saudi-arabia-iran-china/how-beijing-helped-riyadh-and-tehran-reach-detente", date: "2023" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "sa_ir-2", kind: "relation", asOf: "2026-09-30",
      title: "Abqaiq: the attack on the oil heart",
      dek: "In September 2019 drones and cruise missiles knocked out half of Saudi Arabia's oil output in minutes. The United States blamed Iran, but did not strike back, and Riyadh drew its own lessons.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa_ir/sa_ir-2-hero.webp",
          alt: "Illustration of a desert oil processing plant at night with tall fires and thick smoke rising from damaged spherical tanks.",
          caption: "Fires at the Abqaiq plant, which processes most of Saudi Arabia's crude oil, after the attack on 14 September 2019.",
          credit: "Illustration — not a photograph",
          prompt: "A vast desert oil processing plant at night, several large spherical tanks and towers damaged, tall orange fires and thick black smoke rising into a dark sky, floodlights and silhouetted pipelines, dramatic and alarming, no people, no legible text." },
        { type: "facts", head: "The attack", rows: [
          ["Date", "Early morning of 14 September 2019"],
          ["Targets", "Abqaiq processing plant and Khurais oil field"],
          ["Weapons", "Drones and cruise missiles, according to Saudi officials"],
          ["Output lost", "5.7 million barrels a day, about half of Saudi production and 5% of world supply"],
          ["Claimed by", "Yemen's Houthis; the US and Saudi Arabia blamed Iran, which denied it"]
        ] },
        { type: "section", head: "What happened", md:
          "Before dawn on 14 September 2019, a swarm of drones and cruise missiles hit Abqaiq, the world's largest oil processing plant, and the Khurais oil field in eastern Saudi Arabia. Fires burned through the night. The strike took out 5.7 million barrels a day of output, around half of the kingdom's production. Oil prices jumped by nearly 15% the next day, one of their largest one-day rises on record. Saudi Aramco restored most of the lost output within weeks, but the damage to confidence lasted longer. Abqaiq handles most of the crude the kingdom produces, and the country had spent tens of billions of dollars on American air defences that failed to stop low-flying drones and missiles. Investors noticed on the eve of Aramco's stock market listing, which went ahead that December." },
        { type: "section", head: "Whodunnit", md:
          "Yemen's Houthi movement, then at war with a Saudi-led coalition, claimed the attack. The United States, Saudi Arabia, and later Britain, France and Germany said Iran was responsible. Saudi officials displayed wreckage of Iranian-made drones and missiles and said they had come from the north, not from Yemen to the south. A UN panel of experts reported in early 2020 that it doubted the weapons had been launched from Yemen. Iran denied any role. The exact launch site has never been publicly confirmed." },
        { type: "section", head: "No retaliation", md:
          "For decades the Saudi–American bargain had been simple: Saudi oil in return for American protection (see [[lesson:sa-7]]). After Abqaiq, President Donald Trump said the United States was 'locked and loaded', but he chose sanctions rather than military strikes, saying it was an attack on Saudi Arabia, not on America. Many in Riyadh concluded that US protection had limits. Within two years, Saudi officials were holding quiet talks with Iranian counterparts in Baghdad, the first steps toward the 2023 deal." },
        { type: "compare", head: "Lessons drawn",
          left: { head: "Hedging", md:
            "Abqaiq showed the kingdom it could not rely on Washington alone, so it opened talks with Tehran and deepened ties with China and others." },
          right: { head: "Deterrence", md:
            "It showed Saudi air defences had gaps. Riyadh sought stronger US security guarantees, better missile defence and a defence pact with Pakistan." } },
        { type: "section", head: "Why it matters", md:
          "The attack exposed how vulnerable the world's oil supply is to cheap drones and missiles. It foreshadowed 2026, when Iranian missiles struck Saudi oil facilities directly during the war that began with US and Israeli strikes on Iran (see [[lesson:ir-7]]). And it helped push Riyadh toward the balancing act it still pursues: talking to Tehran while arming against it." }
      ],
      takeaways: [
        "The 14 September 2019 attack on Abqaiq and Khurais briefly cut half of Saudi Arabia's oil output.",
        "The Houthis claimed it, but the US, Saudi Arabia and European powers blamed Iran, which denied it.",
        "Washington's decision not to retaliate pushed Riyadh toward talks with Tehran."
      ],
      check: { q: "How did the United States respond to the Abqaiq attack?",
        choices: ["With air strikes on Iran", "With sanctions, but no military retaliation", "By withdrawing from the Gulf"], answer: 1,
        explain: "Trump imposed further sanctions on Iran but chose not to strike back militarily, a decision that shook Saudi confidence." },
      sources: [
        { title: "Attacks on Saudi Oil Facilities: Effects and Responses", publisher: "Congressional Research Service", url: "https://www.everycrsreport.com/reports/IN11173.html", date: "2019-09" },
        { title: "Attack on Saudi Oil Infrastructure: We May Have Dodged a Bullet, at Least for Now", publisher: "CSIS", url: "https://www.csis.org/analysis/attack-saudi-oil-infrastructure-we-may-have-dodged-bullet-least-now", date: "2019-09" },
        { title: "Houthi drone attacks on 2 Saudi Aramco oil facilities spark fires", publisher: "Al Jazeera", url: "https://www.aljazeera.com/economy/2019/9/14/houthi-drone-attacks-on-2-saudi-aramco-oil-facilities-spark-fires", date: "2019-09-14" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "sa_ir-3", kind: "relation", asOf: "2026-09-30",
      title: "The contest for the Arab world",
      dek: "In Bahrain, Lebanon, Iraq and Syria, Riyadh and Tehran backed rival sides for a decade. Since 2024 the balance has tipped against Iran.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa_ir/sa_ir-3-hero.webp",
          alt: "Illustration of a city skyline on a Mediterranean coast at dusk, with mountains behind and apartment blocks, some damaged.",
          caption: "Lebanon, where Iran backed Hezbollah and Saudi Arabia backed its rivals, has been one arena of the contest.",
          credit: "Illustration — not a photograph",
          prompt: "A dense Mediterranean coastal city skyline at dusk, apartment blocks climbing toward green mountains, a few buildings damaged, calm sea in the foreground, soft purple light, melancholy and resilient, no people, no flags, no legible text." },
        { type: "timeline", head: "Arenas", items: [
          ["Mar 2011", "Saudi-led Gulf troops enter Bahrain to help end protests"],
          ["2011–24", "Iran backs Assad in Syria; Gulf states back rebels"],
          ["Nov 2017", "Lebanon's prime minister resigns from Riyadh"],
          ["2020", "Saudi Arabia reopens its border crossing with Iraq"],
          ["Dec 2024", "Assad falls; Iran loses its Syrian ally"],
          ["Jan 2025", "Lebanon elects Joseph Aoun president with Saudi support"]
        ] },
        { type: "section", head: "Bahrain and Syria", md:
          "When mostly Shia protesters filled the streets of Bahrain, a Sunni-ruled kingdom, in 2011, Saudi Arabia sent troops across the causeway on 14 March to help crush the uprising, saying Iran was behind it; Iran denied it. In Syria the positions were reversed. Iran and its Lebanese ally Hezbollah sent fighters and money to keep Bashar al-Assad in power, while Saudi Arabia and other Gulf states armed some of the rebels. Assad survived for 13 years, largely thanks to Iran and Russia." },
        { type: "section", head: "Lebanon and Iraq", md:
          "In Lebanon, Iran built Hezbollah into the country's most powerful armed force, while Saudi Arabia backed Sunni politicians, above all the Hariri family. The contest peaked in November 2017, when Prime Minister Saad Hariri announced his resignation on television from Riyadh, blaming Iran and Hezbollah; many Lebanese believed the Saudis had forced him to. He returned home and withdrew it within weeks. In Iraq, Iran gained enormous influence through Shia parties and militias after 2003. Saudi Arabia, which long shunned Baghdad, reopened its embassy in 2015 and the Arar border crossing in 2020, trying to win Iraq back with trade." },
        { type: "section", head: "The balance tips", md:
          "Israel's war with Hezbollah in 2024 killed its leader Hassan Nasrallah and much of its command. In December 2024 Assad fled to Moscow, and Syria's new rulers, backed by Turkey and courted by Saudi Arabia, turned their backs on Tehran. In January 2025 Lebanon's parliament elected army chief Joseph Aoun as president with Saudi and American support, and his government set out to disarm Hezbollah. Then the 2026 war hit Iran itself (see [[lesson:ir-7]]). Riyadh has kept its 2023 embassy deal in place, while its foreign minister and Iran's talk regularly about keeping the war from spreading." },
        { type: "compare", head: "Two readings of the rivalry",
          left: { head: "A sectarian struggle", md:
            "Sunni and Shia identity drives the contest, and each side backs its co-religionists across the region." },
          right: { head: "A power struggle", md:
            "Both states back whoever serves their interests, including across sectarian lines; religion is a tool, not the cause." } },
        { type: "section", head: "Why it matters", md:
          "Where the two rivals competed, ordinary people often paid, in Syria's war, Lebanon's collapse and Yemen's famine. With Iran's regional network weakened, Saudi Arabia has more room to lead, but it also fears that a cornered Iran is more dangerous. The 2023 embassy deal survives, a sign that both governments prefer a working channel to each other, even in wartime and even as their rivalry for influence continues in every capital between them." }
      ],
      takeaways: [
        "Saudi Arabia and Iran backed rival sides in Bahrain, Syria, Lebanon and Iraq for over a decade.",
        "Iran's network weakened sharply in 2024–25 with Hezbollah's losses and Assad's fall.",
        "Despite the 2026 war, Riyadh and Tehran have kept diplomatic relations and a channel open."
      ],
      check: { q: "What happened to Iran's ally in Syria in December 2024?",
        choices: ["He won re-election", "Bashar al-Assad fell and fled to Moscow", "He signed a deal with Saudi Arabia"], answer: 1,
        explain: "Assad's government collapsed in December 2024, costing Iran its main Arab ally and its land route to Hezbollah." },
      sources: [
        { title: "Saudi troops enter Bahrain to quell violent protests", publisher: "France 24", url: "https://www.france24.com/en/20110314-saudi-troops-enter-bahrain-after-weeks-violent-anti-government-protests", date: "2011-03-14" },
        { title: "Saad Hariri", publisher: "Britannica", url: "https://www.britannica.com/biography/Saad-al-Hariri", date: "n.d." },
        { title: "Iranian, Saudi FMs discuss rising regional tensions", publisher: "IRNA via GlobalSecurity.org", url: "https://www.globalsecurity.org/wmd/library/news/iran/2026/09/iran-260911-irna02.htm", date: "2026-09-11" },
        { title: "Saudi, Iranian Foreign Ministers Discuss Regional Developments by Phone", publisher: "Saudi Press Agency via GlobalSecurity.org", url: "https://www.globalsecurity.org/wmd/library/news/saudi/2026/saudi-260906-spa02.htm", date: "2026-09-06" }
      ]
    }
  ]
});
