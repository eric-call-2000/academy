/* ============================================================
   Relationship — Iran & Russia 🇮🇷🇷🇺
   Two centuries of Russian wars, lost provinces and occupation;
   partners in Syria and in drones for Ukraine; and a 2025
   treaty with no promise of defence, tested by the 2026 war.
   The war itself is in ir-7.
   Research note and sources: tools/research/ir_ru.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ir_ru", {
  id: "ir_ru",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ir_ru-1", kind: "relation", asOf: "2026-09-30",
      title: "The bear to the north",
      dek: "Russia took the Caucasus from Iran in the 19th century, occupied its north in two world wars and tried to carve out a Soviet republic in 1946. Many Iranians still see Russia as an old predator.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir_ru/ir_ru-1-hero.webp",
          alt: "Illustration of snow-capped Caucasus mountains above a green valley with an old stone fortress.",
          caption: "Iran lost its Caucasus provinces to Russia in the wars of 1804–1813 and 1826–1828.",
          credit: "AI illustration — not a photograph",
          prompt: "Snow-capped Caucasus mountains rising above a green valley with a winding river and an old stone fortress on a hill, early morning mist, historical oil painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Centuries of pressure", items: [
          ["1813", "Treaty of Gulistan: Iran cedes much of the Caucasus"],
          ["22 Feb 1828", "Treaty of Turkmenchay: more land lost to Russia"],
          ["11 Feb 1829", "Russian envoy Griboyedov killed by a mob in Tehran"],
          ["1907", "Britain and Russia divide Iran into spheres of influence"],
          ["Aug 1941", "Soviet and British forces invade Iran"],
          ["1946", "Soviet-backed republic in Iranian Azerbaijan collapses"]
        ] },
        { type: "section", head: "Losing the Caucasus", md:
          "In the early 19th century Iran's Qajar kings fought two wars with an expanding Russian Empire and lost both. The Treaty of Gulistan in 1813 and the Treaty of Turkmenchay, signed on 22 February 1828, handed Russia most of the South Caucasus, including what are now Georgia, Armenia and much of Azerbaijan, and gave Russian merchants special privileges and Russia a say over the royal succession. The humiliation provoked fury. On 11 February 1829 a mob stormed the Russian embassy in Tehran and killed almost everyone inside, including the ambassador, Alexander Griboyedov, who was also one of Russia's most famous playwrights." },
        { type: "section", head: "The great game", md:
          "For the next century Russia and Britain competed for influence in Iran, lending money to its bankrupt kings and demanding concessions in return. In 1907 they signed an agreement dividing the country into a Russian zone in the north, a British zone in the south and a neutral strip between, without asking Iranians. In August 1941 the Soviet Union and Britain invaded Iran to secure a supply route to the Soviet Union and forced the pro-German Reza Shah to abdicate in favour of his son (see [[lesson:ir-9]]). Soviet troops occupied the north." },
        { type: "section", head: "The 1946 crisis", md:
          "After the Second World War the Soviet troops did not leave on time. Instead Moscow backed breakaway governments in Iranian Azerbaijan and among the Kurds in the northwest. The standoff became one of the first crises of the Cold War: Iran complained to the new United Nations Security Council, and the United States pressed Stalin. The Soviet forces withdrew in May 1946, and the breakaway governments collapsed within months. Afterwards the Shah aligned Iran with the United States, and the Soviet Union became the neighbour to fear." },
        { type: "section", head: "Cold War business", md:
          "Even as an American ally, the Shah traded with his giant northern neighbour. In the 1960s the Soviet Union agreed to build Iran's first big steel mill, at Isfahan, and Iran paid partly in natural gas, sent north through a new pipeline that opened in 1970. The two shared a long border across the Caspian Sea and Central Asia, and the Shah was careful not to provoke Moscow, while relying on America to deter it." },
        { type: "compare", head: "How Iranians remember Russia",
          left: { head: "A predator", md:
            "Russia took Iranian land, meddled in its politics and occupied it twice. It cannot be trusted." },
          right: { head: "A useful neighbour", md:
            "Whatever the past, Russia is a powerful neighbour that can help Iran against a hostile West." } },
        { type: "section", head: "Why it matters", md:
          "This history explains why many Iranians, including some in the ruling establishment, distrust Russia even as their governments work closely together." }
      ],
      takeaways: [
        "Iran lost most of the South Caucasus to Russia in the treaties of 1813 and 1828.",
        "Britain and Russia divided Iran into zones in 1907, and the Soviets occupied its north in 1941.",
        "Soviet support for breakaway republics in 1946 was one of the first Cold War crises."
      ],
      check: { q: "What did the 1828 Treaty of Turkmenchay do?",
        choices: ["Made Iran and Russia allies", "Forced Iran to give up more Caucasus land to Russia", "Ended the Soviet occupation"], answer: 1,
        explain: "It followed Iran's defeat in 1826–28 and also gave Russia a say in the royal succession; a mob killed Russia's envoy a year later." },
      sources: [
        { title: "The Treaty of Turkmenchay between Russia and Iran signed", publisher: "Presidential Library (Russia)", url: "https://www.prlib.ru/en/history/619048", date: "n.d." },
        { title: "The murder of a Russian ambassador — in 1829", publisher: "Dawn", url: "https://www.dawn.com/news/1304109", date: "2016-12" },
        { title: "Iran - Russia Relations", publisher: "GlobalSecurity.org", url: "https://www.globalsecurity.org/military/world/iran/forrel-ru.htm", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ir_ru-2", kind: "relation", asOf: "2026-09-30",
      title: "Partners in Syria and Ukraine",
      dek: "The Islamic Republic and Russia found common ground against the West. They fought together to save Assad in Syria, and Iranian drones became a mainstay of Russia's war on Ukraine.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir_ru/ir_ru-2-hero.webp",
          alt: "Illustration of a triangular delta-wing drone flying low over a snowy field at dusk.",
          caption: "Russia's Geran-2 drones are copies of Iran's Shahed-136, now made in Russia.",
          credit: "AI illustration — not a photograph",
          prompt: "A triangular delta-wing drone with a small propeller at the back flying low over a snowy field at dusk, bare trees and power lines in the distance, grey-blue sky, tense documentary style, no people, no flags, no legible text." },
        { type: "timeline", head: "A working alliance", items: [
          ["1995", "Russia agrees to finish the Bushehr nuclear plant"],
          ["Sep 2015", "Russia intervenes in Syria alongside Iranian forces"],
          ["2022", "Iran supplies Shahed drones for Russia's war in Ukraine"],
          ["2023–24", "Russia builds Shahed-type drones at Alabuga"],
          ["Dec 2024", "Assad falls, a defeat for both"],
          ["17 Jan 2025", "20-year strategic partnership treaty signed"]
        ] },
        { type: "section", head: "Neither East nor West?", md:
          "Ayatollah Khomeini's revolution of 1979 proclaimed 'Neither East nor West', and the Islamic Republic distrusted the atheist Soviet Union, which invaded neighbouring Afghanistan that year. But after the Soviet collapse, and with America as their shared adversary, ties warmed. Russia sold Iran fighter jets, submarines and air defences, and in 1995 agreed to finish the Bushehr nuclear power plant, begun by the Germans under the Shah; it began producing power in 2011. Russia also voted for UN sanctions on Iran's nuclear programme, and joined the 2015 nuclear deal, a reminder that Moscow always put its own interests first." },
        { type: "section", head: "Saving Assad", md:
          "The partnership became a military alliance in Syria. When Bashar al-Assad's regime was near collapse in 2015, Iran's Revolutionary Guards commander Qassem Soleimani flew to Moscow, and in September Russia began bombing Syrian rebels while Iranian officers and allied militias fought on the ground. Together they turned the war. But in December 2024, with Russia distracted by Ukraine and Iran's ally Hezbollah weakened by war with Israel, Assad's regime collapsed within days and he fled to Moscow. Both lost their foothold in Syria, and each quietly blamed the other." },
        { type: "section", head: "Drones for Russia", md:
          "After Russia invaded Ukraine in 2022, Iran became one of its key suppliers. It sent Shahed-136 drones, cheap one-way attack drones that Russia renamed Geran-2 and used to strike Ukrainian cities and power stations, along with artillery shells and, the West says, ballistic missiles. Russia then built a factory at Alabuga, in Tatarstan, to make the drones itself, and has improved them far beyond the original design. Iran denies arming Russia, but in return it is believed to have received money, weapons technology and help with its space and military programmes." },
        { type: "section", head: "The nuclear go-between", md:
          "Russia has also played a role in Iran's nuclear diplomacy. It supplies the fuel for Bushehr and takes back the spent fuel, so Iran cannot use it to make plutonium. Under the 2015 nuclear deal, Russia took most of Iran's enriched uranium: about 11 tonnes were shipped to Russia in December 2015. Yet some Iranians doubt Moscow's good faith. In a leaked recording in 2021, Iran's then foreign minister, Mohammad Javad Zarif, said Russia had tried to undermine the deal because it did not want Iran to reconcile with the West." },
        { type: "compare", head: "Who gains more?",
          left: { head: "Russia", md:
            "Russia got cheap drones in its hour of need, then learned to make better ones itself." },
          right: { head: "Iran", md:
            "Iran gained a great-power partner at the UN and in arms, but little that has changed its security." } },
        { type: "section", head: "Why it matters", md:
          "The Iran–Russia partnership links the wars in Ukraine and the Middle East. Iranian drones kill Ukrainians, and Russian help strengthens Iran against Israel and America." }
      ],
      takeaways: [
        "Russia finished Iran's Bushehr nuclear plant and sold it weapons after the Cold War.",
        "The two fought together to save Assad from 2015, but lost Syria when he fell in December 2024.",
        "Iran's Shahed drones became Russia's Geran-2, now made at Alabuga for the war in Ukraine."
      ],
      check: { q: "What is the Geran-2?",
        choices: ["A Russian tank sold to Iran", "Russia's version of Iran's Shahed-136 attack drone", "A nuclear reactor"], answer: 1,
        explain: "Russia first bought the drones from Iran, then built its own at Alabuga in Tatarstan." },
      sources: [
        { title: "Satellite Imagery Update on Alabuga Shahed-136 Drone Factory", publisher: "Institute for Science and International Security", url: "https://isis-online.org/isis-reports/satellite-imagery-update-on-alabuga-shahed-136-drone-factory", date: "2024" },
        { title: "A Closer Look at the Yelabuga UAV Factory", publisher: "CSIS Beyond Parallel", url: "https://beyondparallel.csis.org/a-closer-look-at-the-yelabuga-uav-factory/", date: "2025" },
        { title: "Strategic Transactionalism: The Iran-Russia Partnership", publisher: "Middle East Council on Global Affairs", url: "https://mecouncil.org/publication/strategic-transactionalism-the-iran-russia-partnership/", date: "2025" },
        { title: "Russia and Iran sign a 20-year comprehensive strategic partnership agreement", publisher: "Peoples Dispatch", url: "https://peoplesdispatch.org/2025/01/17/russia-and-iran-sign-a-20-year-comprehensive-strategic-partnership-agreement/", date: "2025-01-17" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ir_ru-3", kind: "relation", asOf: "2026-09-30",
      title: "A partner, not an ally",
      dek: "Iran and Russia signed a 20-year treaty in 2025, but it does not promise to defend either. When America and Israel attacked Iran in 2026, Russia condemned the strikes and shared intelligence, but sent no forces.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir_ru/ir_ru-3-hero.webp",
          alt: "Illustration of a coastal nuclear power plant with a domed reactor building beside a calm sea at dusk.",
          caption: "Russian engineers left the Bushehr nuclear plant during the 2026 war and began returning in August.",
          credit: "AI illustration — not a photograph",
          prompt: "A coastal nuclear power plant with a large domed reactor building and cooling structures beside a calm sea at dusk, palm trees and dry land around, warm hazy light, documentary style, no people, no flags, no legible text." },
        { type: "timeline", head: "Tested by war", items: [
          ["17 Jan 2025", "Putin and Pezeshkian sign the partnership treaty"],
          ["2 Oct 2025", "The treaty enters into force"],
          ["28 Feb 2026", "US and Israel attack Iran; Russia condemns the strikes"],
          ["Mar–Apr 2026", "Rosatom evacuates staff from Bushehr"],
          ["Aug 2026", "Russian nuclear workers begin returning"],
          ["1 Sep 2026", "Pezeshkian thanks Putin at the SCO summit"]
        ] },
        { type: "section", head: "No defence clause", md:
          "On 17 January 2025 Presidents Vladimir Putin and Masoud Pezeshkian signed a Comprehensive Strategic Partnership Treaty in Moscow, covering defence, energy, finance and culture for 20 years; it entered into force on 2 October 2025. Unlike Russia's 2024 treaty with North Korea (see [[lesson:cn_kp-3]]), it contains no promise of military help. Each side pledges only not to help an aggressor that attacks the other. Russia wanted to keep good relations with Israel and the Gulf states, and Iran did not want to be tied to Russia's war. Many analysts called it a partnership of convenience." },
        { type: "section", head: "The 2026 war", md:
          "The limits showed when the United States and Israel attacked Iran on 28 February 2026 (see [[lesson:ir-7]]). Russia condemned the strikes and the killing of Supreme Leader Ali Khamenei, called for a ceasefire and backed Iran at the UN. According to US intelligence cited by American media, it also passed Iran satellite images and targeting information on American forces in the Gulf. But Russia, stretched by its own war in Ukraine, sent no troops or aircraft, and Pakistan, not Russia, brokered the ceasefire (see [[lesson:ir_pk-3]]). Rosatom, Russia's nuclear company, evacuated more than 200 staff from Bushehr after a projectile struck near the plant." },
        { type: "section", head: "After the war", md:
          "Relations remain close. In August 2026 Rosatom began returning workers to Bushehr and said it would continue building two new reactors there, calling Iran its top priority in the region. On 1 September 2026, at the Shanghai Cooperation Organization summit, Pezeshkian met Putin for the first time since the war and thanked him for Russia's positions 'at every stage'; Putin said Russia stood in solidarity with the Iranian people and would keep up trade despite sanctions. A planned North–South transport corridor, linking Russia to the Indian Ocean through Iran, is another shared project, though progress has been slow." },
        { type: "section", head: "Doubts in Tehran", md:
          "Not all Iranians are grateful. Some commentators and politicians in Tehran asked why a 'strategic partner' did not supply the advanced air defences or fighter jets Iran had sought for years, which might have blunted the 2025 and 2026 attacks. Others pointed out that Russia competes with Iran to sell oil to China and India at a discount. For Iran's leaders, though, there are few alternatives: China buys its oil but avoids military entanglement, and the West remains hostile." },
        { type: "compare", head: "How strong is the bond?",
          left: { head: "Close partners", md:
            "Shared enemies, drones, nuclear power and intelligence tie the two ever closer." },
          right: { head: "Fair-weather friends", md:
            "When Iran was bombed, Russia sent words and data, not forces. Each uses the other." } },
        { type: "section", head: "Why it matters", md:
          "Iran has learned that Russia will not fight for it. That may push Tehran to rely more on China, on its own weapons, or on a deal with Washington." }
      ],
      takeaways: [
        "The 2025 Iran–Russia treaty has no mutual defence clause.",
        "In the 2026 war Russia condemned the strikes and reportedly shared intelligence, but sent no forces.",
        "Rosatom returned to Bushehr in August 2026, and Pezeshkian thanked Putin in September."
      ],
      check: { q: "What does the 2025 Iran–Russia treaty say about an attack on one of them?",
        choices: ["The other must send troops", "The other must not help the aggressor, but need not defend it", "Nothing at all"], answer: 1,
        explain: "Unlike Russia's treaty with North Korea, it has no military assistance clause." },
      sources: [
        { title: "Comprehensive Strategic Partnership Treaty between Iran and Russia enters into force", publisher: "Iran Watch (Iranian Foreign Ministry)", url: "https://www.iranwatch.org/library/governments/iran/ministry-foreign-affairs/comprehensive-strategic-partnership-treaty-between-iran-russia-enters-force", date: "2025-10-02" },
        { title: "Russia Condemns Deadly Attacks on Iran While Weighing Strategic Risks, Opportunities", publisher: "Russia Matters", url: "https://www.russiamatters.org/blog/russia-condemns-deadly-attacks-iran-while-weighing-strategic-risks-opportunities", date: "2026-03" },
        { title: "Rosatom Evacuates Staff From Iran's Bushehr Plant Over Safety Concerns", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-04-01/rosatom-evacuates-staff-from-iranian-reactor-on-safety-concerns", date: "2026-04-01" },
        { title: "Russia's Rosatom Returns Workers to Iran's Bushehr Nuclear Plant", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-22/russia-s-rosatom-returns-workers-to-iran-s-bushehr-nuclear-plant", date: "2026-08-22" },
        { title: "Iran president thanks Putin for Russia's stance during war with US", publisher: "Al Arabiya", url: "https://english.alarabiya.net/News/middle-east/2026/09/01/russia-is-in-solidarity-with-iranian-people-putin-tells-pezeshkian-", date: "2026-09-01" }
      ]
    }
  ]
});
