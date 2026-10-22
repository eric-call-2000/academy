/* ============================================================
   Unit 36 — Syria 🇸🇾
   Research note and sources: tools/research/sy.md
   Current as of 22 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("sy", {
  id: "sy",
  asOf: "2026-10-22",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "sy-1", kind: "snapshot", asOf: "2026-10-22",
      title: "Syria in brief",
      dek: "After 54 years of Assad rule and 13 years of war, a former rebel commander leads a fragile, divided country back into the world.",
      blocks: [
        { type: "map", src: "maps/sy.svg",
          alt: "Locator map of the eastern Mediterranean with Syria highlighted, bordered by Turkey, Iraq, Jordan, Israel and Lebanon. The Golan Heights in the south-west are hatched in Syria's colour, and the West Bank and Gaza are hatched grey. A small globe shows its place in the world.",
          caption: "Syria borders Turkey, Iraq, Jordan, Israel and Lebanon. The hatched Golan Heights have been held by Israel since 1967 and are claimed by Syria; most countries regard them as occupied Syrian territory.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Damascus"],
          ["People", "About 24 million inside the country, with millions more abroad"],
          ["System", "Transitional presidential government under a 2025 constitutional declaration"],
          ["President", "Ahmed al-Sharaa, since January 2025"],
          ["Parliament", "A 210-seat People's Assembly, partly indirectly chosen, partly appointed"],
          ["Main groups", "Sunni Arab majority; Alawites, Kurds, Christians, Druze and others"],
          ["Reconstruction cost", "About $216 billion, the World Bank estimates"]
        ] },
        { type: "section", head: "Why it's here", md:
          "Syria sits at the crossroads of the Middle East, and its war drew in almost every regional and global power: [[unit:ru|Russia]] and [[unit:ir|Iran]] backed Bashar al-Assad; [[unit:tr|Turkey]], the Gulf states and the West backed rebels; the [[unit:us|United States]] fought the Islamic State group alongside Kurdish forces; [[unit:il|Israel]] struck Iranian targets. Its collapse produced the world's largest refugee crisis. In December 2024, Assad's government fell in 11 days. What replaces it will shape the region for decades." },
        { type: "section", head: "Who holds power", md:
          "Ahmed al-Sharaa, who once led al-Qaeda's Syrian affiliate and later broke with it, led the rebel coalition that took Damascus. He was named president in January 2025 and governs under a 'constitutional declaration' that gives the presidency strong powers during a five-year transition. A new parliament met for the first time in July 2026; two-thirds of its members were chosen by local electoral colleges and one-third by Sharaa. There have been no nationwide elections." },
        { type: "section", head: "The mood in 2026", md:
          "For many Syrians, the end of the Assad era brought relief and hope: political prisoners were freed, and about 1.8 million refugees have returned from neighbouring countries. Western sanctions have been lifted, and money and investors are trickling in. But the country is shattered and poor, and fear runs deep among minorities after massacres of Alawites on the coast in March 2025 and Druze in the south that July. The Kurdish-led northeast is only now being absorbed into the state." },
        { type: "section", head: "A mosaic", md:
          "About seven in ten Syrians are Sunni Arabs. The rest include Alawites, the sect of the Assad family, about a tenth of the population, concentrated on the coast; Kurds in the north and northeast; Christians of many churches; Druze in the south; Ismailis, Turkmen and others. Under Assad, the security services were dominated by Alawites. Whether the new state can protect all of these communities is the central test of the transition." },
        { type: "section", head: "What Syria wants", md:
          "The new government wants money to rebuild, the return of refugees and recognition as Syria's legitimate authority. It wants Israel to withdraw from the territory it seized after Assad's fall, Turkey's support without Turkish domination, and the Kurdish-led forces folded into a national army. It has cut ties with Iran and Hezbollah, which backed Assad, and has turned toward Turkey, the Gulf and the United States." },
        { type: "callout", tone: "why", md:
          "Syria is a test of whether a country torn apart by dictatorship and civil war can rebuild a state that all its people accept, and whether outside powers will let it." }
      ],
      takeaways: [
        "Bashar al-Assad's government fell in December 2024 after 54 years of family rule and 13 years of war.",
        "Ahmed al-Sharaa, a former rebel commander, leads a transitional government with strong presidential powers.",
        "Sanctions have been lifted, but sectarian violence and a shattered economy make the transition fragile."
      ],
      check: { q: "Who has held the Golan Heights since 1967?",
        choices: ["Syria", "Israel", "Jordan"], answer: 1,
        explain: "Israel captured the Golan Heights in 1967 and annexed it in 1981; most countries regard it as occupied Syrian territory." },
      sources: [
        { title: "Syria in 2026: interim government and Kurdish integration", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10430/", date: "2026" },
        { title: "Syrian parliament convenes for first time following al-Assad's overthrow", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/7/12/syrian-parliament-convenes-for-first-time-following-al-assads-overthrow", date: "2026-07-12" },
        { title: "Syria", publisher: "Britannica", url: "https://www.britannica.com/place/Syria", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "sy-2", kind: "power", asOf: "2026-10-22",
      title: "A transition built around one man",
      dek: "Syria's interim constitution gives the president sweeping powers for five years. Critics fear a new strongman; supporters say order comes first.",
      blocks: [
        { type: "diagram", src: "img/sy/sy-2-power.svg",
          alt: "Diagram of power in Syria. There are no nationwide elections yet. President Ahmed al-Sharaa, named in January 2025, heads the state and government for a five-year transition under the March 2025 constitutional declaration, appoints ministers and a third of parliament, and commands the armed forces. The 210-seat People's Assembly, two-thirds chosen by regional electoral colleges, passes laws but cannot dismiss the government. The new army absorbs former rebel factions and is integrating the Kurdish-led SDF. A permanent constitution is expected by 2029.",
          caption: "During the transition, power runs through the president; parliament cannot remove the government.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The constitutional declaration", md:
          "In March 2025 Sharaa signed a 'constitutional declaration' to govern a five-year transition. It keeps Syria's name, says the president must be a Muslim and makes Islamic jurisprudence 'the main source' of legislation, wording similar to Assad-era constitutions. It promises freedom of expression, women's rights and the separation of powers. But it gives the president control of the government, a say over the courts and the power to appoint a third of parliament, with no mechanism for parliament to remove him." },
        { type: "section", head: "Parliament", md:
          "The People's Assembly has 210 seats. In October 2025 regional electoral colleges, made up of local notables chosen by committees the president appointed, picked two-thirds of the members; Sharaa named the remaining third in July 2026. Seats in Kurdish-held areas and the Druze province of Sweida were left unfilled at first because of security conditions. The assembly passes laws and the budget but cannot hold a vote of confidence. Its first task is to set up a committee to draft a permanent constitution, expected by 2029." },
        { type: "section", head: "The government and the army", md:
          "Sharaa leads the government directly; there is no prime minister. His cabinet includes former HTS figures in key security posts, technocrats, a Christian woman, a Kurd and a Druze. The rebel factions were formally dissolved in January 2025 and folded into a new defence ministry, though many still act like separate militias. The army is being rebuilt almost from scratch; Assad's army and intelligence services were disbanded, and thousands of their former members went home or into hiding." },
        { type: "section", head: "Islamist roots", md:
          "Sharaa, known in the war as Abu Mohammed al-Jolani, founded the Nusra Front in 2012 as al-Qaeda's Syrian branch, broke with al-Qaeda in 2016 and rebranded his group as Hayat Tahrir al-Sham (HTS), which ran the north-western province of Idlib with an Islamist administration. The US had offered $10 million for information on him. Since taking power he has presented himself as a pragmatic nationalist, and in 2025 the US and the UN dropped terrorist designations against him and HTS." },
        { type: "section", head: "Justice and the past", md:
          "The Assad government held more than 100,000 people who disappeared in its prisons, and the new government has set up commissions for the missing and for transitional justice. Prosecuting Assad-era crimes is popular; prosecuting crimes by the new government's own forces, such as the coastal massacres of 2025, is harder. Assad himself lives in Moscow, which has refused to extradite him." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Supporters", md:
            "After 13 years of war, a strong centre is needed to rebuild an army, a state and an economy before free elections can be held." },
          right: { head: "Critics, including many minorities", md:
            "The rules concentrate power in one man with an Islamist past and leave Alawites, Kurds and Druze without guarantees." } }
      ],
      takeaways: [
        "A March 2025 constitutional declaration gives the president sweeping powers for a five-year transition.",
        "Two-thirds of the 210-seat parliament was chosen by electoral colleges and one-third by the president; it cannot remove the government.",
        "Sharaa once led al-Qaeda's Syrian branch; the US and UN dropped terrorist designations against him in 2025."
      ],
      check: { q: "How were most members of Syria's new parliament chosen?",
        choices: ["In a nationwide popular vote", "By regional electoral colleges", "By lottery"], answer: 1,
        explain: "Two-thirds were chosen by regional electoral colleges in October 2025; the president appointed the other third." },
      sources: [
        { title: "Constitutional Declaration of the Syrian Arab Republic", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Constitutional_Declaration_of_the_Syrian_Arab_Republic", date: "2025" },
        { title: "New Syrian parliament convenes", publisher: "ConstitutionNet", url: "https://constitutionnet.org/news/new-syrian-parliament-convenes", date: "2026-07" },
        { title: "Presidency of Ahmed al-Sharaa", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Presidency_of_Ahmed_al-Sharaa", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "sy-9", kind: "founding", asOf: "2026-10-22",
      title: "From caliphs to the French",
      dek: "Damascus was the capital of an empire stretching from Spain to India. Modern Syria's borders were drawn by Britain and France.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sy/sy-9-hero.webp",
          alt: "Illustration of a great mosque courtyard with arcades, a domed treasury on columns and a tall minaret, with figures crossing the marble paving in evening light.",
          caption: "The Umayyad Mosque in Damascus, built in the early 700s when the city ruled an empire.",
          credit: "Illustration — not a photograph",
          prompt: "A vast mosque courtyard with arched arcades, a small domed pavilion raised on columns and a tall square minaret, polished marble paving reflecting warm evening light, a few small figures crossing at a distance, timeless and serene, no faces, no flags, no legible text." },
        { type: "timeline", head: "Empires to independence", items: [
          ["661–750", "Damascus is capital of the Umayyad caliphate"],
          ["1516", "The Ottomans conquer Syria"],
          ["1916", "Sykes–Picot plans a British–French division of the region"],
          ["1920", "Faisal's Arab Kingdom in Damascus is crushed by France"],
          ["1920–46", "French mandate; Lebanon is separated from Syria"],
          ["1939", "France cedes the Hatay province to Turkey"],
          ["1946", "The last French troops leave"]
        ] },
        { type: "section", head: "An ancient land", md:
          "Damascus and Aleppo are among the oldest continuously inhabited cities on earth. The region was ruled by Arameans, Assyrians, Persians, Greeks and Romans; Palmyra, in the desert, was a great caravan city. In 661 Damascus became the capital of the Umayyad caliphate, the first Muslim dynasty, which ruled from Spain to Central Asia. Its Great Mosque, built in the early 700s, still stands. After 750 the capital moved to Baghdad and Syria became a province." },
        { type: "section", head: "Ottoman Syria", md:
          "From 1516 to 1918 Syria was part of the Ottoman Empire. 'Greater Syria', the Arabic 'Bilad al-Sham', covered today's Syria, Lebanon, Jordan, Israel and the Palestinian territories, and its cities were trading hubs. In the late 1800s an Arab cultural revival began in Damascus and Beirut. During the First World War, Ottoman authorities executed Arab nationalists, and famine killed many." },
        { type: "section", head: "A kingdom crushed", md:
          "In 1916 Britain encouraged an Arab revolt against the Ottomans, led by Sharif Hussein of Mecca and his son Faisal, with promises of an Arab state. At the same time, in the secret Sykes–Picot agreement, Britain and France planned to divide the region. In 1920 a Syrian congress proclaimed Faisal king of an independent Syria. A French army defeated his forces at Maysalun that July and occupied Damascus." },
        { type: "section", head: "The French mandate", md:
          "Under a League of Nations mandate, France ruled Syria until 1946. It split off Lebanon as a separate state and at times divided Syria itself into Alawite, Druze and other statelets, and it recruited heavily from minorities, especially Alawites, into its local forces, a pattern with long consequences. A great revolt in 1925–27, starting among the Druze, was bombed into submission. In 1939 France gave the province of Hatay, around Antakya, to Turkey, which Syria long refused to accept." },
        { type: "section", head: "Independence", md:
          "Syria's nationalists pressed for independence through the 1930s, and a 1936 treaty promised it but was never ratified by France. During the Second World War, Free French and British forces took Syria from Vichy France in 1941 and promised independence. After French troops shelled Damascus in May 1945, Britain intervened, and the last French soldiers left on 17 April 1946, now Syria's national day." },
        { type: "compare", head: "Two views of the borders",
          left: { head: "A nationalist view", md:
            "Colonial powers carved up historic Greater Syria and left the region with artificial borders and conflicts." },
          right: { head: "A historian's caution", md:
            "The Ottoman provinces were never one nation; local identities and rivalries shaped the new states as much as Paris and London did." } },
        { type: "section", head: "Why it matters", md:
          "The French reliance on minorities helped Alawite officers rise in the army, the path the Assads later took to power. The memory of carved-up borders still feeds nationalist politics across the region." }
      ],
      takeaways: [
        "Damascus was capital of the Umayyad caliphate (661–750), which stretched from Spain to Central Asia.",
        "After four centuries of Ottoman rule, France crushed Faisal's Arab Kingdom in 1920 and ruled Syria until 1946.",
        "France separated Lebanon, recruited minorities into its forces and gave Hatay to Turkey in 1939."
      ],
      check: { q: "Which European power ruled Syria under a mandate from 1920 to 1946?",
        choices: ["Britain", "France", "Italy"], answer: 1,
        explain: "France held the League of Nations mandate for Syria and Lebanon; its last troops left Syria in 1946." },
      sources: [
        { title: "Syria: History", publisher: "Britannica", url: "https://www.britannica.com/place/Syria/History", date: "n.d." },
        { title: "Umayyad dynasty", publisher: "Britannica", url: "https://www.britannica.com/topic/Umayyad-dynasty-Islamic-history", date: "n.d." },
        { title: "Sykes–Picot Agreement", publisher: "Britannica", url: "https://www.britannica.com/event/Sykes-Picot-Agreement", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "sy-3", kind: "history", asOf: "2026-10-22",
      title: "Coups, the Assads and the war",
      dek: "From a string of coups to half a century of one family's rule, ending in a war that killed hundreds of thousands.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sy/sy-3-hero.webp",
          alt: "Illustration of a large public square at night with a toppled statue lying on a plinth and crowds of people gathered around it, seen from behind.",
          caption: "Statues of Hafez al-Assad were pulled down across Syria in December 2024.",
          credit: "Illustration — not a photograph",
          prompt: "A large public square at night lit by streetlamps, a huge bronze statue toppled and lying beside its stone plinth, crowds of people gathered around it seen from behind, some climbing the plinth, celebratory and stunned, no faces, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1949", "The first of several military coups"],
          ["1958–61", "Union with Egypt as the United Arab Republic"],
          ["1963", "The Ba'ath Party seizes power"],
          ["1970", "Hafez al-Assad takes control"],
          ["1982", "Hama uprising crushed"],
          ["2000", "Bashar al-Assad succeeds his father"],
          ["2011–24", "Uprising and civil war; Assad falls on 8 December 2024"]
        ] },
        { type: "section", head: "1. Instability", md:
          "Independent Syria was unstable from the start. Army officers staged three coups in 1949 alone. Fearing communism and seeking Arab unity, Syria's leaders merged the country with Gamal Abdel Nasser's [[unit:eg|Egypt]] in 1958 as the United Arab Republic, but Syrians resented Egyptian dominance and left in 1961. In 1963 officers from the Ba'ath Party, which preached Arab socialism and unity, took power." },
        { type: "section", head: "2. Hafez al-Assad", md:
          "In 1970 Hafez al-Assad, an air force officer from the Alawite minority, seized control. He built a state around loyal security services, many led by Alawite relatives, and a cult of personality. Syria lost the Golan Heights to [[unit:il|Israel]] in 1967 and failed to retake them in 1973. Assad intervened in Lebanon's civil war in 1976 and kept troops there until 2005. In 1982 he crushed an Islamist uprising in Hama, killing thousands ([[lesson:sy-10]])." },
        { type: "section", head: "3. Bashar", md:
          "When Hafez died in 2000, his son Bashar, a London-trained eye doctor, took over; parliament lowered the minimum age for president from 40 to 34 to allow it. Hopes of a 'Damascus Spring' of reform faded within a year. Bashar opened the economy to a crony elite while rural areas suffered from drought. He allied ever more closely with [[unit:ir|Iran]] and Hezbollah." },
        { type: "section", head: "4. Uprising and war", md:
          "In March 2011, after teenagers in Deraa were arrested and tortured for anti-government graffiti, protests spread. Security forces shot demonstrators, and the uprising became a civil war ([[lesson:sy-11]]). Russia, Iran and Hezbollah saved Assad; the Islamic State seized the east; Kurdish forces took the northeast with US help; Turkey took border areas. By 2020 the front lines had frozen, with Assad holding about two-thirds of the country." },
        { type: "section", head: "5. Eleven days", md:
          "In late November 2024, with Russia focused on Ukraine and Hezbollah weakened by its war with Israel, HTS and allied rebels launched an offensive from Idlib. Aleppo fell in days, then Hama and Homs, as Assad's army collapsed. On 8 December rebels entered Damascus and Assad flew to Moscow ([[lesson:sy-5]]). In January 2025 Sharaa was named president." },
        { type: "section", head: "6. Syria and Lebanon", md:
          "For three decades Syria dominated its smaller neighbour. Its troops entered Lebanon in 1976 and stayed until 2005, when the assassination of former Lebanese prime minister Rafik Hariri, which a UN-backed tribunal later linked to Hezbollah members, set off mass protests and forced a withdrawal. Syria's alliance with Hezbollah outlasted that, and Hezbollah fighters later fought for Assad in Syria's own war." },
        { type: "section", head: "7. Economy and drought", md:
          "In the late 2000s a severe drought drove hundreds of thousands of farmers from the north-east into the outskirts of cities, while the opening of the economy enriched people close to the Assad family. Some historians see these pressures, with repression and the example of Tunisia and Egypt, as part of the background to 2011." }
      ],
      takeaways: [
        "After coups and a brief union with Egypt, the Ba'ath Party took power in 1963; Hafez al-Assad seized control in 1970.",
        "Bashar al-Assad succeeded his father in 2000; the 2011 uprising became a civil war.",
        "Assad's government collapsed in an 11-day rebel offensive and he fled to Moscow on 8 December 2024."
      ],
      check: { q: "What set off the 2011 protests in Deraa?",
        choices: ["An election result", "The arrest and torture of teenagers over graffiti", "A rise in bread prices"], answer: 1,
        explain: "Teenagers were detained and tortured for anti-government graffiti; protests over their treatment spread across Syria." },
      sources: [
        { title: "Syria: History", publisher: "Britannica", url: "https://www.britannica.com/place/Syria/History", date: "n.d." },
        { title: "Syrian Civil War", publisher: "Britannica", url: "https://www.britannica.com/event/Syrian-Civil-War", date: "n.d." },
        { title: "Fall of the Assad regime", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fall_of_the_Assad_regime", date: "2024" }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "sy-10", kind: "past", asOf: "2026-10-22",
      title: "Hama, 1982",
      dek: "To crush an Islamist revolt, Hafez al-Assad's forces besieged and shelled a city for weeks. Thousands died, and the fear lasted a generation.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sy/sy-10-hero.webp",
          alt: "Illustration of large wooden waterwheels on a river beside old stone houses, with empty rubble-strewn lanes and a grey winter sky.",
          caption: "Hama is famous for its ancient waterwheels, the norias; much of its old city was destroyed in 1982.",
          credit: "Illustration — not a photograph",
          prompt: "Several huge ancient wooden waterwheels on a slow river beside old stone houses, some houses ruined, empty lanes strewn with rubble, a grey winter sky, silent and mournful, no people, no flags, no legible text." },
        { type: "facts", head: "The massacre", rows: [
          ["When", "February 1982, for about four weeks"],
          ["Who", "Army units and special forces commanded by Rifaat al-Assad"],
          ["Against", "An uprising led by the Muslim Brotherhood"],
          ["Killed", "Estimates range from 10,000 to 40,000, mostly civilians"],
          ["Aftermath", "Membership of the Brotherhood made punishable by death"]
        ] },
        { type: "section", head: "Background", md:
          "In the late 1970s an armed Islamist insurgency, led by militants linked to Syria's Muslim Brotherhood, waged a campaign of assassinations and bombings against the Assad government, which they saw as a secular, Alawite-dominated tyranny. In 1979 gunmen killed dozens of Alawite cadets at an Aleppo military school. In 1980 the Brotherhood nearly killed Hafez al-Assad. His government answered with mass arrests, and a law made membership of the Brotherhood punishable by death." },
        { type: "section", head: "The siege", md:
          "In February 1982, insurgents in Hama, a conservative Sunni city, ambushed troops and called for a general uprising. Assad's response was overwhelming. Army units and special forces, many under his brother Rifaat, surrounded the city and shelled it for weeks, then went house to house. Much of the old city was flattened. The government never published a death toll; estimates range from 10,000 to 40,000, mostly civilians, and many people disappeared." },
        { type: "section", head: "Silence", md:
          "For decades Hama could not be discussed openly in Syria. The lesson the government wanted Syrians to draw was clear: rebellion would be met with total force. Many historians see the 'Hama rules' as the model Bashar al-Assad applied after 2011, when cities such as Homs and Aleppo were besieged and bombarded. Rifaat al-Assad later went into exile in Europe, where a French court convicted him in 2020 of money laundering." },
        { type: "section", head: "Hama in 2011 and 2024", md:
          "Hama saw some of the largest peaceful protests of 2011, with hundreds of thousands in its main square, before a crackdown. In December 2024, when rebels took the city during their final offensive, crowds pulled down a statue of Hafez al-Assad, and many residents spoke publicly about 1982 for the first time." },
        { type: "section", head: "The wider purge", md:
          "Hama was the climax of a broader campaign. Thousands of suspected Brotherhood members and sympathisers were arrested in the early 1980s; many were held in Tadmor prison in the desert, where a massacre of hundreds of inmates took place in 1980. Families often never learned what had happened to them. That pattern of disappearance would return on a far larger scale after 2011." },
        { type: "compare", head: "Two ways it was told",
          left: { head: "The government's story", md:
            "The state defeated a terrorist rebellion by the Muslim Brotherhood that had murdered officials and civilians." },
          right: { head: "Survivors' story", md:
            "The state punished an entire city for an insurgency, killing thousands of civilians and erasing neighbourhoods." } },
        { type: "section", head: "Why it matters", md:
          "Hama explains both the fear that kept Syrians silent for decades and the depth of anger that exploded in 2011. Transitional justice for 1982 is one of the demands survivors now make of the new government." }
      ],
      takeaways: [
        "In February 1982 Hafez al-Assad's forces crushed an Islamist uprising in Hama.",
        "Estimates of the dead range from 10,000 to 40,000, mostly civilians.",
        "The 'Hama rules' of total force shaped the government's response to the 2011 uprising."
      ],
      check: { q: "Who commanded many of the forces that besieged Hama in 1982?",
        choices: ["Bashar al-Assad", "Rifaat al-Assad, Hafez's brother", "The Muslim Brotherhood"], answer: 1,
        explain: "Special forces under Rifaat al-Assad led much of the assault; he later went into exile in Europe." },
      sources: [
        { title: "1982 Hama massacre", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/1982_Hama_massacre", date: "n.d." },
        { title: "Syria: History", publisher: "Britannica", url: "https://www.britannica.com/place/Syria/History", date: "n.d." },
        { title: "Hama", publisher: "Britannica", url: "https://www.britannica.com/place/Hamah", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "sy-11", kind: "past", asOf: "2026-10-22",
      title: "The civil war, 2011–2024",
      dek: "A peaceful uprising became the century's most destructive war, with half the population driven from their homes.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sy/sy-11-hero.webp",
          alt: "Illustration of a city of bombed-out concrete apartment blocks with collapsed floors stretching to the horizon, under a hazy sky, with one small figure walking along a cleared road.",
          caption: "Whole districts of Aleppo, Homs and the Damascus suburbs were destroyed in the war.",
          credit: "Illustration — not a photograph",
          prompt: "A city of bombed-out grey concrete apartment blocks with collapsed floors and gaping holes stretching to the horizon, a hazy beige sky, one small distant figure walking along a cleared road between mounds of rubble, desolate and vast, no faces, no flags, no legible text." },
        { type: "facts", head: "The war in numbers", rows: [
          ["Killed", "Estimated at about half a million or more"],
          ["Displaced", "More than 13 million, about half the pre-war population"],
          ["Refugees abroad", "About 6 million at the peak, most in Turkey, Lebanon and Jordan"],
          ["Chemical attacks", "Dozens documented; sarin killed hundreds near Damascus in 2013"],
          ["Detained or missing", "More than 100,000"]
        ] },
        { type: "section", head: "From protest to war", md:
          "The 2011 protests began peacefully, but security forces shot demonstrators and arrested and tortured thousands. Soldiers who refused to fire defected, and armed groups formed under the banner of the Free Syrian Army. By 2012 the country was at war. The government besieged rebel-held districts, cut off food and medicine and dropped barrel bombs from helicopters. Over time the armed opposition became dominated by Islamist factions, including the Nusra Front, led by the man now known as Ahmed al-Sharaa." },
        { type: "section", head: "Chemical weapons", md:
          "In August 2013 rockets loaded with sarin hit rebel-held suburbs of Damascus, killing hundreds of people, more than 1,400 by US estimates. The US had called chemical weapons a 'red line', but instead of striking it agreed with Russia on a deal to remove Syria's declared stockpile. Attacks continued: UN-backed investigators blamed the government for later sarin and chlorine attacks, including at Khan Shaykhun in 2017, which led to US missile strikes." },
        { type: "section", head: "The Islamic State", md:
          "In 2014 the Islamic State group declared a 'caliphate' across eastern Syria and western Iraq, with its capital at Raqqa, and carried out atrocities including the enslavement of Yazidi women. A US-led coalition, working with the Kurdish-led Syrian Democratic Forces (SDF), drove it from Raqqa in 2017 and from its last village, Baghuz, in 2019. Tens of thousands of its fighters and their families remain in camps and prisons in the northeast." },
        { type: "section", head: "Foreign powers", md:
          "From 2015 Russian air power turned the war in Assad's favour, helping retake eastern Aleppo in 2016. Iran and Hezbollah provided ground forces. [[unit:tr|Turkey]] backed rebel groups and sent its own troops into the north against the Kurdish-led forces. [[unit:il|Israel]] carried out hundreds of strikes against Iranian and Hezbollah targets. The war turned Syria into a battlefield for other countries' rivalries." },
        { type: "section", head: "The refugees", md:
          "Syrians became the world's largest refugee population. About 3.5 million went to Turkey, more than a million to Lebanon, and hundreds of thousands to Jordan and Iraq. In 2015 more than a million people, many of them Syrians, crossed into Europe, most heading for Germany, which took in hundreds of thousands. The crisis reshaped European politics and fed the rise of anti-immigration parties." },
        { type: "compare", head: "Two views of the war",
          left: { head: "Assad's view", md:
            "Syria fought foreign-backed terrorists, and the state, with its allies, saved the country from jihadist rule." },
          right: { head: "The opposition's view", md:
            "A dictatorship waged war on its own people to stay in power, and outside powers let it." } },
        { type: "section", head: "Why it matters", md:
          "Almost every Syrian family lost someone or something. Refugees reshaped politics in [[unit:tr|Turkey]], Lebanon, Jordan and Europe, and the war's legacies, from mass graves to divided communities, are the new state's inheritance." }
      ],
      takeaways: [
        "A peaceful 2011 uprising became a war that killed about half a million people and displaced more than 13 million.",
        "The government used chemical weapons; the Islamic State held a 'caliphate' in the east until 2019.",
        "Russia, Iran and Hezbollah saved Assad; Turkey, the US and Israel also intervened."
      ],
      check: { q: "Which Kurdish-led force fought the Islamic State with US support?",
        choices: ["Hezbollah", "The Syrian Democratic Forces (SDF)", "The Free Syrian Army"], answer: 1,
        explain: "The SDF, backed by the US-led coalition, drove the Islamic State from Raqqa in 2017 and Baghuz in 2019." },
      sources: [
        { title: "Syrian Civil War", publisher: "Britannica", url: "https://www.britannica.com/event/Syrian-Civil-War", date: "n.d." },
        { title: "Syria", publisher: "Britannica", url: "https://www.britannica.com/place/Syria", date: "n.d." },
        { title: "Fall of the Assad regime", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fall_of_the_Assad_regime", date: "2024" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "sy-4", kind: "players", asOf: "2026-10-22",
      title: "Sharaa, Abdi, Hijri",
      dek: "A former jihadist turned president, the Kurdish commander folding his forces into the state, and a Druze leader who looks to Israel.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sy/sy-4-hero.webp",
          alt: "Illustration of a large modern palace on a hilltop above Damascus with the city spread out below in the evening haze and a mountain behind.",
          caption: "The People's Palace on Mount Mezzeh above Damascus, now the seat of the transitional president.",
          credit: "Illustration — not a photograph",
          prompt: "A large modern palace of pale stone with a long flat facade on a hilltop above a sprawling city spread out below in evening haze, a bare mountain behind, warm dusk light, imposing and quiet, no people close up, no flags, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Ahmed al-Sharaa", role: "President, since January 2025",
            img: "img/sy/portrait-sharaa.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Born in 1982 in Riyadh and raised in Damascus. Fought with al-Qaeda in Iraq, founded the Nusra Front, broke with al-Qaeda and led HTS to Damascus. Has met Trump at the White House and joined the anti-IS coalition." },
          { name: "Asaad al-Shaibani", role: "Foreign minister",
            img: "img/sy/portrait-shaibani.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A long-time Sharaa ally who has led the diplomatic campaign to lift sanctions and the talks with Israel, Russia and the Kurds." },
          { name: "Mazloum Abdi", role: "Commander of the Syrian Democratic Forces",
            img: "img/sy/portrait-abdi.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Led the Kurdish-led force that defeated the Islamic State with US backing. Signed the 2026 deals to merge the SDF into the national army. Turkey sees his movement as linked to the [[pkk|PKK]]." },
          { name: "Hikmat al-Hijri", role: "Druze spiritual leader in Sweida",
            img: "img/sy/portrait-hijri.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "The most prominent of the Druze sheikhs, hostile to the new government after the July 2025 violence. Has called for international protection and welcomed Israeli support." },
          { name: "Bashar al-Assad", role: "Former president, in Moscow",
            img: "img/sy/portrait-assad.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Ruled from 2000 to 2024. Fled to Russia on 8 December 2024 and lives there with his family; Damascus has asked for his extradition, which Moscow has refused." },
          { name: "Tom Barrack", role: "US special envoy for Syria",
            img: "img/sy/portrait-barrack.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Also US ambassador to Turkey. Brokered ceasefires in Sweida and the northeast and pushed for the lifting of sanctions." }
        ] },
        { type: "section", head: "The president's balancing act", md:
          "Sharaa has to satisfy very different audiences. Foreign governments want inclusion, minority rights and a firm break with jihadism. His own base of former fighters, some of them foreign, wants an Islamic state and revenge on Assad's supporters. Minorities want guarantees. So far he has leaned on personal authority and foreign support, from [[unit:tr|Turkey]], [[unit:sa|Saudi Arabia]], [[unit:qa|Qatar]] and the [[unit:us|United States]], more than on building institutions." },
        { type: "section", head: "Minorities and the centre", md:
          "The three regions where the state's authority is weakest are home to minorities: the Alawite coast, the Druze south and the Kurdish northeast. Each has its own armed groups and leaders, and each has an outside patron or sympathiser: Kurds have had US support, the Druze look to Israel, and some Alawite exiles to Russia. Damascus sees decentralisation as a step toward partition; many minorities see it as their only protection." },
        { type: "section", head: "The old guard", md:
          "Many Assad-era officials fled abroad, and some are wanted for war crimes. Others have reconciled with the new government, especially business people. Assad's brother Maher, who commanded the elite Fourth Division and was linked to the drug captagon, also fled; Syria's new authorities have seized large stocks of the drug, which the Assad state had made into a major export." },
        { type: "section", head: "Turkey's man?", md:
          "Turkey hosted millions of Syrian refugees and protected Idlib, where Sharaa's group ruled, and it is now his most important backer. Critics in Israel and the Gulf call Sharaa a Turkish client; his supporters say he has also courted Saudi Arabia, Qatar, the US and even Russia to avoid dependence on anyone." },
        { type: "compare", head: "Two views of Sharaa",
          left: { head: "Supporters", md:
            "A pragmatic leader who ended Assad's rule, reopened Syria to the world and is holding a fractured country together." },
          right: { head: "Sceptics", md:
            "A former jihadist whose forces have killed minority civilians and who is building a new one-man system." } }
      ],
      takeaways: [
        "Ahmed al-Sharaa, a former al-Qaeda affiliate leader, has won Western backing as Syria's transitional president.",
        "Mazloum Abdi's SDF is merging into the national army; Druze leader Hikmat al-Hijri remains hostile to Damascus.",
        "Bashar al-Assad lives in Moscow, which refuses to extradite him."
      ],
      check: { q: "Who commands the Kurdish-led Syrian Democratic Forces?",
        choices: ["Asaad al-Shaibani", "Mazloum Abdi", "Hikmat al-Hijri"], answer: 1,
        explain: "Mazloum Abdi led the SDF against the Islamic State and signed the 2026 deals to merge it into the army." },
      sources: [
        { title: "Al-Sharaa, Abdi discuss SDF integration agreement", publisher: "Enab Baladi", url: "https://english.enabbaladi.net/archives/2026/08/al-sharaa-abdi-discuss-sdf-integration-agreement/", date: "2026-08" },
        { title: "Syrian president Sharaa makes the first White House visit by a Syrian head of state", publisher: "NPR via KUOW", url: "https://www.kuow.org/stories/syrian-president-sharaa-makes-the-1st-white-house-visit-by-a-syrian-head-of-state", date: "2025-11-10" },
        { title: "Syria says it reached deal with Moscow on future of Russian bases", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/8/9/syria-says-it-reached-deal-with-moscow-on-future-of-russian-bases", date: "2026-08-09" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "sy-5", kind: "story", asOf: "2026-10-22",
      title: "Eleven days that ended an era",
      dek: "In late 2024 rebels from Idlib swept through Aleppo, Hama and Homs to Damascus. Assad's army melted away and he fled to Moscow.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sy/sy-5-hero.webp",
          alt: "Illustration of the gates of a vast prison complex in the hills at dawn, wide open, with small figures walking out along the road and families waiting.",
          caption: "When rebels reached Damascus, they opened the gates of Sednaya prison, where thousands had been held and many killed.",
          credit: "Illustration — not a photograph",
          prompt: "The gates of a vast grey concrete prison complex in bare hills at dawn, wide open, small figures walking out along the road seen from behind, families waiting at a distance, mist and soft pink light, overwhelming relief, no faces, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "On 27 November 2024, HTS and allied factions attacked from their enclave in Idlib. Within three days they had taken Aleppo, Syria's second city, with little resistance. Hama fell on 5 December and Homs on 7 December, while rebels in the south moved on Damascus. Early on 8 December Assad flew to Russia. Rebels entered the capital, and crowds celebrated in the streets. The prime minister agreed to hand over power." },
        { type: "facts", head: "Eleven days", rows: [
          ["27 November 2024", "Offensive begins from Idlib"],
          ["30 November", "Aleppo falls"],
          ["5 December", "Hama falls"],
          ["7 December", "Homs falls; southern rebels advance"],
          ["8 December", "Assad flees to Moscow; rebels enter Damascus"]
        ] },
        { type: "section", head: "Why it collapsed", md:
          "Assad's state had been hollow for years: soldiers were paid a few dollars a month, the economy had collapsed under war and sanctions, and the government relied on its allies. In 2024 those allies were distracted. [[unit:ru|Russia]] was absorbed by its war in [[unit:ua|Ukraine]]; Hezbollah had been badly weakened by [[unit:il|Israel]]'s strikes and invasion of Lebanon; and [[unit:ir|Iran]] could not send help fast enough. When the attack came, many units simply abandoned their posts." },
        { type: "section", head: "Opening the prisons", md:
          "Rebels opened the prisons, including Sednaya, where rights groups say thousands were executed. Families rushed to search for relatives who had disappeared, some missing for a decade or more. Investigators found mass graves around Damascus. The images of emaciated prisoners and torture rooms shocked Syrians and the world, and gave the new authorities a powerful argument for their legitimacy." },
        { type: "section", head: "The first months", md:
          "HTS formed a caretaker government drawn largely from its Idlib administration. In January 2025 a conference of rebel commanders named Sharaa president and dissolved the factions, the old army and the Ba'ath Party. Arab and Western diplomats flocked to Damascus. Meanwhile [[unit:il|Israel]] destroyed most of the old army's weapons from the air and seized the buffer zone on the Golan ([[lesson:sy-12]])." },
        { type: "section", head: "The world reacts", md:
          "Arab, Turkish and Western officials quickly travelled to Damascus. In May 2025, during a visit to Saudi Arabia, President Trump met Sharaa and announced the lifting of most US sanctions, saying Syria deserved 'a chance at greatness'. Russia, which had sheltered Assad, opened talks with the new government about its bases. Iran, which had spent billions on Assad, lost its main Arab ally and its land route to Hezbollah." },
        { type: "section", head: "The captagon state", md:
          "The new authorities also exposed the scale of the Assad state's drug trade. Factories producing captagon, an amphetamine-type pill sold across the Gulf, were found in former army and regime-linked facilities, confirming what Western governments had long alleged. Destroying the stocks became a way for the new government to win Gulf goodwill." },
        { type: "compare", head: "Two readings of the fall",
          left: { head: "A liberation", md:
            "Syrians freed themselves from a murderous dictatorship, and the new rulers have so far kept order and reached out to the world." },
          right: { head: "A takeover", md:
            "An Islamist armed group seized the state; the choice of who governs was made by fighters, not voters." } },
        { type: "section", head: "Why it matters", md:
          "The fall of Assad removed a key ally of Iran and Russia from the region and reshaped the balance of power between [[unit:tr|Turkey]], Israel and the Gulf." }
      ],
      takeaways: [
        "Rebels led by HTS took Aleppo, Hama and Homs in under two weeks in late 2024.",
        "Assad fled to Moscow on 8 December 2024 as his army collapsed.",
        "Opening prisons such as Sednaya revealed the scale of the old government's crimes."
      ],
      check: { q: "Why couldn't Assad's allies save him in 2024?",
        choices: ["They had signed a peace deal", "Russia was absorbed in Ukraine and Hezbollah weakened by Israel", "They had already left Syria in 2015"], answer: 1,
        explain: "With Russia focused on Ukraine and Hezbollah battered by its war with Israel, help did not come in time." },
      sources: [
        { title: "Fall of the Assad regime", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fall_of_the_Assad_regime", date: "2024" },
        { title: "Syrian Civil War", publisher: "Britannica", url: "https://www.britannica.com/event/Syrian-Civil-War", date: "n.d." },
        { title: "Presidency of Ahmed al-Sharaa", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Presidency_of_Ahmed_al-Sharaa", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "sy-6", kind: "story", asOf: "2026-10-22",
      title: "Massacres on the coast and in Sweida",
      dek: "In 2025 waves of sectarian killing hit Alawites and Druze, raising the question of whether the new state can protect its minorities.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sy/sy-6-hero.webp",
          alt: "Illustration of a quiet mountain village of stone houses among pine trees above the sea, with smoke rising from two houses and an empty road.",
          caption: "In March 2025 about 1,400 people, mostly Alawite civilians, were killed in villages along the coast.",
          credit: "Illustration — not a photograph",
          prompt: "A quiet mountain village of pale stone houses with red roofs among pine trees on a slope above the sea, smoke rising from two houses, an empty winding road, grey morning light, dread and stillness, no people, no flags, no legible text." },
        { type: "section", head: "What happened on the coast", md:
          "On 6 March 2025, gunmen loyal to the old government ambushed security forces in the coastal provinces of Latakia and Tartus, the Alawite heartland, killing dozens. The government sent troops and called for help; thousands of armed men, including factions now in the army and foreign fighters, poured in. Over several days, about 1,400 people were killed, most of them Alawite civilians, many shot in their homes or villages." },
        { type: "facts", head: "Two waves of violence", rows: [
          ["Coast, March 2025", "About 1,400 killed, mostly Alawite civilians (UN commission)"],
          ["Government inquiry", "1,426 dead; 298 suspects identified"],
          ["Sweida, July 2025", "Hundreds killed; more than 128,000 displaced"],
          ["Israeli response", "Strikes on government forces and in Damascus"],
          ["Ceasefire", "Brokered by the US in July 2025"]
        ] },
        { type: "section", head: "The inquiries", md:
          "A government committee confirmed 1,426 deaths, identified 298 suspects and said it found no evidence that commanders had ordered the killings. A UN commission of inquiry concluded that war crimes had probably been committed by both government forces and Assad loyalists. Trials of some suspects began in late 2025. Survivors say many perpetrators remain free and that fear has driven Alawites to flee to Lebanon or stay in their villages." },
        { type: "section", head: "Sweida", md:
          "In July 2025 clashes broke out in Sweida, the southern province where most of Syria's Druze live, between Druze militias and Sunni Bedouin clans. Government forces sent to restore order were accused by witnesses and rights groups of killing Druze civilians and looting homes. [[unit:il|Israel]], which has its own Druze citizens, struck government troops and the defence ministry in Damascus. Hundreds were killed and more than 128,000 people displaced before a US-brokered ceasefire." },
        { type: "section", head: "The aftermath", md:
          "Sweida remains largely outside government control, run by Druze factions loyal to Sheikh Hikmat al-Hijri, and a road and aid corridor became a sticking point in Israel–Syria talks. Jordan and the US backed a plan for accountability and reconciliation. On the coast, government forces are present, but many Alawites say they live in fear and that former officers were targeted for revenge." },
        { type: "section", head: "Fear and flight", md:
          "After the coastal killings, thousands of Alawites fled to Lebanon, and many who stayed say they avoid travelling or speaking openly. Christians, though not targeted in the same way, were shaken by a suicide bombing that killed worshippers at a Damascus church in June 2025, which the government blamed on the Islamic State. Each attack deepened minorities' demands for guarantees beyond the government's promises." },
        { type: "compare", head: "Two views of the violence",
          left: { head: "The government's view", md:
            "Assad loyalists started the coastal fighting; abuses by undisciplined units are being investigated and punished." },
          right: { head: "Minority and rights groups' view", md:
            "State-aligned forces carried out sectarian killings, and the government has not held commanders accountable." } },
        { type: "section", head: "What's next", md:
          "Whether courts convict those responsible, including members of government forces, will be one of the clearest tests of the new state's promise to protect all Syrians." }
      ],
      takeaways: [
        "In March 2025 about 1,400 people, mostly Alawite civilians, were killed on the coast after an insurgent attack.",
        "In July 2025 violence in Druze-majority Sweida killed hundreds; Israel struck government forces.",
        "A UN commission said war crimes were likely committed by both sides on the coast; accountability is incomplete."
      ],
      check: { q: "Which community lives mainly in Sweida province?",
        choices: ["Alawites", "Druze", "Kurds"], answer: 1,
        explain: "Sweida, in the south, is the heartland of Syria's Druze, a minority that also lives in Lebanon and Israel." },
      sources: [
        { title: "War crimes likely committed by both sides in Syria coastal violence: UN", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/8/14/war-crimes-likely-committed-by-both-sides-in-syria-sectarian-violence-un-commission-says", date: "2025-08-14" },
        { title: "Over 1,400 mostly civilians were killed in sectarian violence in coastal Syria in March, government says", publisher: "PBS / AP", url: "https://www.pbs.org/newshour/world/over-1400-mostly-civilians-were-killed-in-sectarian-violence-in-coastal-syria-in-march-government-says", date: "2025-07" },
        { title: "Israel and Syria agree on ceasefire after days of bloodshed in Sweida, says US envoy", publisher: "Khaleej Times", url: "https://www.khaleejtimes.com/world/mena/israel-and-syria-agree-on-ceasefire-after-days-of-bloodshed-in-sweida-says-us-envoy?amp=1", date: "2025-07" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "sy-7", kind: "story", asOf: "2026-10-22",
      title: "Folding in the Kurdish northeast",
      dek: "After weeks of fighting in early 2026, the Kurdish-led SDF agreed to hand over Raqqa and Deir ez-Zor and merge into the national army.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sy/sy-7-hero.webp",
          alt: "Illustration of oil pumpjacks and storage tanks on a flat brown plain beside the Euphrates river at sunset, with a column of military trucks on a distant road.",
          caption: "Syria's oil fields lie in the northeast, along the Euphrates, an area the SDF held for over a decade.",
          credit: "Illustration — not a photograph",
          prompt: "Several oil pumpjacks and round storage tanks on a flat brown plain beside a wide winding river at sunset, a column of small military trucks on a distant road, long shadows, a hazy orange sky, quiet transition, no people close up, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "For more than a decade, the Syrian Democratic Forces, led by the Kurdish YPG, ran about a quarter of Syria, including the oil fields and Arab-majority cities such as Raqqa, under an 'Autonomous Administration'. In March 2025 Mazloum Abdi and Sharaa agreed in principle to merge it into the state, but talks dragged. In January 2026 clashes in Aleppo were followed by a government push toward Raqqa, and the SDF lost much of its Arab-majority territory." },
        { type: "facts", head: "The January 2026 deals", rows: [
          ["18 January", "Ceasefire: Raqqa and Deir ez-Zor handed to the government"],
          ["29 January", "Integration agreement signed"],
          ["Terms", "SDF fighters join the army; border crossings and oil fields to the state"],
          ["Islamic State camps", "Management transferred to the government"],
          ["August 2026", "Integration in its 'final stages', officials say"]
        ] },
        { type: "section", head: "Why it happened", md:
          "The SDF's position weakened as its patrons changed course. The [[unit:us|United States]], which once had about 2,000 troops in the northeast, drew down and backed Sharaa's government, which joined the anti-IS coalition in November 2025. [[unit:tr|Turkey]], which regards the SDF as part of the [[pkk|PKK]], threatened force and backed Damascus. Many Arab tribes in Raqqa and Deir ez-Zor switched sides. A peace process between Turkey and the PKK, which announced its dissolution in 2025, also changed the calculation." },
        { type: "section", head: "What the Kurds keep", md:
          "Under the deals, SDF-nominated commanders and officials are to hold senior posts, and local Kurdish institutions in Hasakah province are being absorbed rather than abolished. Kurdish leaders want constitutional recognition of Kurdish language and rights and some form of decentralisation. Damascus has offered cultural rights and local administration but rejects federalism. In August 2026 Sharaa and Abdi met again in Damascus to complete the process." },
        { type: "section", head: "The camps", md:
          "The northeast holds camps such as al-Hol, where tens of thousands of women and children linked to Islamic State fighters have lived for years, and prisons holding thousands of the group's fighters. Responsibility for them has passed to the government. Western countries worry about escapes and the return of foreign fighters; many still refuse to repatriate their citizens." },
        { type: "section", head: "Arabs and Kurds", md:
          "Most people in Raqqa and Deir ez-Zor are Arabs, many of them members of large tribes. Under SDF rule, some complained of discrimination, forced conscription and the dominance of Kurdish cadres linked to the PKK, while others valued the security it provided after the Islamic State. When the government advanced in January 2026, many tribes switched sides quickly." },
        { type: "compare", head: "Two views of the deal",
          left: { head: "Damascus and Ankara", md:
            "Syria cannot have two armies; integrating the SDF restores national unity and ends a PKK-linked enclave on Turkey's border." },
          right: { head: "Many Kurds", md:
            "After defeating the Islamic State with Western help, Kurds are being pressured to give up the self-rule that protected them." } },
        { type: "section", head: "What's next", md:
          "Officials have hinted that the formal dissolution of the SDF and the Autonomous Administration may be announced soon." }
      ],
      takeaways: [
        "The Kurdish-led SDF ran about a quarter of Syria for over a decade, including the oil fields.",
        "After fighting in January 2026, it handed Raqqa and Deir ez-Zor to the government and agreed to merge into the army.",
        "Kurds seek constitutional rights and decentralisation; Damascus rejects federalism."
      ],
      check: { q: "Why does Turkey oppose the SDF?",
        choices: ["It is allied with Iran", "It sees it as part of the PKK", "It controls Turkey's oil"], answer: 1,
        explain: "Turkey regards the YPG, the core of the SDF, as part of the PKK, which has fought the Turkish state since 1984." },
      sources: [
        { title: "Erdogan welcomes Syria–SDF agreement, urges full implementation", publisher: "Al-Monitor", url: "https://www.al-monitor.com/originals/2026/01/erdogan-welcomes-syria-sdf-agreement-urges-full-implementation", date: "2026-01" },
        { title: "The Syrian army completes its takeover of Raqqa and Deir Ezzor", publisher: "Enab Baladi", url: "https://english.enabbaladi.net/archives/2026/01/the-syrian-army-completes-its-takeover-of-raqqa-and-deir-ezzor/", date: "2026-01" },
        { title: "Al-Sharaa, Abdi discuss SDF integration agreement", publisher: "Enab Baladi", url: "https://english.enabbaladi.net/archives/2026/08/al-sharaa-abdi-discuss-sdf-integration-agreement/", date: "2026-08" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "sy-12", kind: "spotlight", asOf: "2026-10-22",
      title: "Israel, the Golan and the south",
      dek: "Israel moved into Syria the day Assad fell. Two years on, the old enemies have a hotline, talks and a first leaders' call.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sy/sy-12-hero.webp",
          alt: "Illustration of a snow-capped mountain rising above green hills and a valley with a winding road and a small military post on a ridge.",
          caption: "Mount Hermon, whose Syrian side Israel seized in December 2024.",
          credit: "Illustration — not a photograph",
          prompt: "A broad snow-capped mountain rising above rolling green and brown hills, a valley with a winding road, a small military observation post with antennas on a ridge in the foreground, clear cold light, watchful and tense, no people close up, no flags, no legible text." },
        { type: "facts", head: "Israel and Syria", rows: [
          ["1967", "Israel captures the Golan Heights"],
          ["1974", "Disengagement agreement creates a UN-patrolled buffer zone"],
          ["1981", "Israel annexes the Golan; the UN calls it null and void"],
          ["December 2024", "Israel seizes the buffer zone and the Syrian side of Mount Hermon"],
          ["January 2026", "US-supervised joint mechanism to share intelligence and de-escalate"]
        ] },
        { type: "section", head: "Moving in", md:
          "As Assad fell, [[unit:il|Israel]] declared the 1974 disengagement agreement void, sent troops into the UN-monitored buffer zone and took the Syrian peak of Mount Hermon, overlooking Damascus. Its air force destroyed most of the old Syrian army's aircraft, ships, missiles and chemical-weapons sites. Israel said it was preventing weapons falling into jihadist hands; Syria and most countries called it a violation of Syrian sovereignty." },
        { type: "section", head: "The Druze card", md:
          "Israel has also declared itself protector of Syria's Druze, linked by family ties to Druze citizens of Israel, and of a demilitarised south. In 2025 it struck government forces moving into Sweida and hit the defence ministry in Damascus during the July violence ([[lesson:sy-6]]). Damascus says Israel is using the Druze to keep Syria weak and divided; Israel says it will not allow forces it distrusts on its border." },
        { type: "section", head: "Talking to the enemy", md:
          "Remarkably, the two countries, formally at war since 1948, began talking. US-brokered meetings in Baku, Paris and London aimed at a security pact that would demilitarise southern Syria in return for Israeli withdrawal from the new zones. Talks stalled in September 2025 over an Israeli demand for an aid corridor to Sweida. In January 2026, in Paris, they agreed a US-supervised 'fusion mechanism' to share intelligence and avoid clashes. The Iran war paused talks; in October 2026 Netanyahu said he had spoken to Sharaa, the first such call disclosed." },
        { type: "section", head: "The Golan question", md:
          "Syria has said that sovereignty over the Golan Heights, annexed by Israel in 1981 and recognised as Israeli by the US in 2019, is not on the table in current talks, which focus on the zones seized since 2024. Sharaa has said a security pact could one day lead to a wider peace, but Syrians across the spectrum say they will never give up the Golan. That makes full normalisation, as under the [[abraham-accords|Abraham Accords]], unlikely soon." },
        { type: "compare", head: "Two views of Israel's role",
          left: { head: "Israel's view", md:
            "After 7 October, Israel will not trust a former jihadist on its border; buffer zones and air power protect its citizens and the Druze." },
          right: { head: "Damascus's view", md:
            "Israel is exploiting Syria's weakness to grab land and divide the country; withdrawal is the price of any security deal." } },
        { type: "section", head: "Why it matters", md:
          "A Syria–Israel security deal would be one of the region's biggest shifts in decades, ending a state of war that has lasted since 1948. Failure could leave southern Syria a zone of strikes, militias and smuggling." }
      ],
      takeaways: [
        "Israel seized the buffer zone and Syria's side of Mount Hermon when Assad fell in December 2024.",
        "It has struck Syrian government forces, citing protection of the Druze; Damascus calls this interference.",
        "US-brokered talks produced a joint mechanism in January 2026 and a first leaders' call in October."
      ],
      check: { q: "What did Israel do in the buffer zone created in 1974?",
        choices: ["Withdrew from it in 2024", "Moved troops into it after Assad fell", "Handed it to the UN"], answer: 1,
        explain: "Israel declared the 1974 agreement void and sent troops into the buffer zone and onto Mount Hermon in December 2024." },
      sources: [
        { title: "Israel, Syria agree to dedicated communication line in US-brokered talks", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/1/6/israel-syria-agree-to-dedicated-communication-line-in-us-brokered-talks", date: "2026-01-06" },
        { title: "In first, Israel's Netanyahu says he held call with Syria's Ahmed al-Sharaa", publisher: "Al-Monitor", url: "https://www.al-monitor.com/originals/2026/10/first-israels-netanyahu-says-he-held-call-syrias-ahmed-al-sharaa", date: "2026-10" },
        { title: "Israel–Syria relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Israel%E2%80%93Syria_relations", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "sy-8", kind: "now", asOf: "2026-10-22",
      title: "Where things stand",
      dek: "Sanctions gone, refugees returning and a new parliament sitting, but a $216 billion rebuild, fragile minorities and foreign forces on its soil.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sy/sy-8-hero.webp",
          alt: "Illustration of an old covered market street being repaired, with scaffolding, a few reopened shops lit inside, and people walking under the arched roof.",
          caption: "Shops reopening in a covered market: much of Syria's rebuilding is being done by families and small businesses.",
          credit: "Illustration — not a photograph",
          prompt: "An old covered market street with a long arched iron roof pierced by beams of light, scaffolding on some damaged shopfronts, a few reopened shops glowing warmly inside, people walking seen from behind, dust in the air, hopeful and fragile, no faces, no flags, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Politics:** transitional president, appointed and indirectly chosen parliament, constitution due by 2029.\n" +
          "- **Security:** the SDF merging into the army; Sweida outside government control; Israeli troops in the south.\n" +
          "- **Sanctions:** US Caesar Act repealed in December 2025; UN and EU measures eased.\n" +
          "- **Returns:** about 1.8 million refugees back from neighbouring countries since December 2024.\n" +
          "- **Rebuilding:** about $216 billion needed, the World Bank estimates." },
        { type: "section", head: "Syria in the world", md:
          "Syria has turned from Iran's ally into a partner of [[unit:tr|Turkey]], [[unit:sa|Saudi Arabia]], [[unit:qa|Qatar]] and the [[unit:us|United States]]. Its relationship with [[unit:ru|Russia]] survived: in August 2026 the two agreed to turn the Russian bases at Hmeimim and Tartus into joint training centres, with a final deal expected by the end of the year. Ties with [[unit:ir|Iran]] are broken, and relations with [[unit:il|Israel]] are a tense mix of strikes and talks." },
        { type: "section", head: "The economy", md:
          "The economy shrank by more than half during the war, and most Syrians live in poverty. Electricity is scarce, and the currency is weak. The lifting of US sanctions, including the repeal of the Caesar Act, has opened the door to Gulf and Turkish investment and to reconnecting Syrian banks with the world. Reconstruction will cost about ten times Syria's annual output, and donors want stability and inclusion first." },
        { type: "section", head: "Society", md:
          "Hope and fear sit side by side. Returning refugees often find their homes destroyed or occupied. Women's rights activists worry about the Islamist tilt of some officials, while many Sunni Syrians feel represented for the first time. Alawites, Druze and many Christians remain anxious. The search for the missing, more than 100,000 people, continues." },
        { type: "section", head: "Three scenarios", md:
          "- **Consolidation.** The SDF merges, Sweida is brought back by agreement, investment flows and a constitution passes by 2029.\n" +
          "- **Strongman Syria.** Order returns under a centralised, Islamist-leaning presidency with little room for opposition.\n" +
          "- **Fragmentation.** Sectarian violence, an Israel–Syria clash or a split in the ruling coalition revives the war." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **By end-2026:** final Russia–Syria base agreement\n" +
          "- **Ongoing:** formal dissolution of the SDF; Israel–Syria talks\n" +
          "- **2026–27:** trials over the coastal killings; the constitution committee\n" +
          "- **By 2029:** a permanent constitution and elections" },
        { type: "section", head: "Connections", md:
          "Syria's story runs through [[unit:tr]] (its main backer and the Kurdish question), [[unit:il]] (the Golan and the south), [[unit:ru]] and [[unit:ir]] (Assad's old patrons), [[unit:us]] (sanctions and the anti-IS coalition), [[unit:sa]] and [[unit:qa]] (money and diplomacy) and [[unit:eg]] and Jordan (refugees and the Arab world)." },
        { type: "section", head: "Justice and memory", md:
          "The new authorities have created bodies to search for the missing and to pursue transitional justice, and some Assad-era officials have been arrested. Human rights groups say justice must cover crimes by all sides, including new government forces, and that international courts should be allowed to help." }
      ],
      takeaways: [
        "Sanctions have been lifted and about 1.8 million refugees have returned, but rebuilding will cost about $216 billion.",
        "Syria has swapped Iran for Turkey, the Gulf and the US as partners, while keeping a deal with Russia over its bases.",
        "Minority safety, the Kurdish merger and Israel's presence in the south are the biggest tests ahead."
      ],
      check: { q: "What happened to the US Caesar Act sanctions on Syria in December 2025?",
        choices: ["They were tightened", "Congress repealed them", "They were extended for ten years"], answer: 1,
        explain: "The FY2026 National Defense Authorization Act repealed the Caesar Act, with reporting requirements on Syria's progress." },
      sources: [
        { title: "Syria welcomes the permanent repeal of sweeping US sanctions", publisher: "Annahar", url: "https://fr.annahar.com/en/region/middle-east/263688/syria-welcomes-the-permanent-repeal-of-sweeping-us-sanctions", date: "2025-12" },
        { title: "Over 1.2 million Syrians return since fall of Assad", publisher: "The New Arab", url: "https://www.newarab.com/news/over-12-million-syrians-return-fall-assad", date: "2026" },
        { title: "Damascus, Moscow work on final deal for Russian bases", publisher: "Enab Baladi", url: "https://english.enabbaladi.net/archives/2026/10/damascus-moscow-work-on-final-deal-for-russian-bases/", date: "2026-10" }
      ]
    }
  ]
});
