/* ============================================================
   Relationship — United States & Saudi Arabia 🇺🇸🇸🇦
   Oil for security since a meeting on a warship in 1945; the
   1973 embargo and the petrodollar; troops, terror and 9/11;
   and a crown prince who went from pariah to partner.
   Trump's 2025 deals are in sa-7.
   Research note and sources: tools/research/us_sa.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_sa", {
  id: "us_sa",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_sa-1", kind: "relation", asOf: "2026-09-30",
      title: "Oil for security",
      dek: "In 1945 a dying American president met the founder of Saudi Arabia on a warship in the Suez Canal. The bargain that followed, Saudi oil for American protection, survived an oil embargo and shaped the world economy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_sa/us_sa-1-hero.webp",
          alt: "Illustration of a grey 1940s navy cruiser anchored on a calm lake in the desert, with a carpet and tent on its deck.",
          caption: "Roosevelt and Ibn Saud met aboard the cruiser USS Quincy on the Great Bitter Lake in February 1945.",
          credit: "AI illustration — not a photograph",
          prompt: "A grey 1940s navy heavy cruiser anchored on a calm pale-blue lake surrounded by flat desert, a patterned carpet and small tent set up on its deck, a smaller destroyer nearby, bright winter sunlight, historical documentary painting style, no flags, no legible text." },
        { type: "timeline", head: "Building the bargain", items: [
          ["1933", "Standard Oil of California wins the Saudi oil concession"],
          ["1938", "Oil is struck in commercial quantities at Dammam"],
          ["14 Feb 1945", "Roosevelt meets King Abdulaziz aboard the USS Quincy"],
          ["1973–74", "Arab oil embargo on the United States"],
          ["Jun 1974", "Joint Commission on Economic Cooperation set up"],
          ["1980", "Saudi Arabia completes the buyout of Aramco"]
        ] },
        { type: "section", head: "American oilmen", md:
          "The relationship began with oil, not diplomacy. In 1933 King Abdulaziz, known in the West as Ibn Saud (see [[lesson:sa-9]]), gave a concession to Standard Oil of California, which beat British rivals by offering gold up front. American geologists struck oil in commercial quantities at Dammam in 1938. The company, later called the Arabian American Oil Company, or Aramco, built towns, roads and schools in the eastern desert, and for decades Americans ran the kingdom's most important industry. Aramco's American partners were bought out gradually, and by 1980 the Saudi state owned it completely." },
        { type: "section", head: "The meeting on the Quincy", md:
          "On 14 February 1945, returning from the Yalta conference, President Franklin Roosevelt met the king aboard the cruiser USS Quincy on the Great Bitter Lake, part of the Suez Canal. The king arrived with a retinue of 47, including a food taster and an astrologer, after sailing up the Red Sea on an American destroyer. They talked for five hours, through an interpreter, about the Jewish refugees of Europe and Palestine, colonialism and farming. No treaty was signed, but the meeting is remembered as the start of an alliance: Saudi oil would flow to the West, and the United States would help keep the kingdom safe. America soon built an airbase at Dhahran." },
        { type: "section", head: "The embargo and the petrodollar", md:
          "The bargain was tested in October 1973, when the United States resupplied Israel in the Yom Kippur War (see [[lesson:us_il-1]]). King Faisal led Arab producers in an oil embargo on the United States; prices quadrupled and Americans queued for petrol (see [[lesson:sa-10]]). Washington's answer was to bind Saudi wealth to America. In June 1974 the two set up a Joint Commission on Economic Cooperation, and Treasury Secretary William Simon flew to Jeddah. In a deal kept secret for over 40 years, the kingdom agreed to invest much of its oil surplus in US Treasury bonds and to buy American weapons. Oil kept being priced in dollars, the so-called petrodollar system." },
        { type: "compare", head: "Two sides of the bargain",
          left: { head: "What America got", md:
            "Reliable oil supplies, Saudi money in US bonds, huge arms sales and a partner against Soviet influence." },
          right: { head: "What Saudi Arabia got", md:
            "Protection from larger neighbours, modern weapons and American help building its economy." } },
        { type: "section", head: "Why it matters", md:
          "The oil-for-security bargain is 80 years old and still the core of the relationship. Every president since Roosevelt has had to decide how much to overlook in the name of it." }
      ],
      takeaways: [
        "American oilmen found Saudi oil in 1938 and ran Aramco until the Saudi state bought it out by 1980.",
        "Roosevelt's 1945 meeting with King Abdulaziz on the USS Quincy began the oil-for-security alliance.",
        "After the 1973 embargo, a 1974 deal recycled Saudi oil money into US bonds and weapons."
      ],
      check: { q: "Where did Roosevelt meet King Abdulaziz in 1945?",
        choices: ["In Riyadh", "Aboard the USS Quincy on the Great Bitter Lake", "At the White House"], answer: 1,
        explain: "They met on 14 February 1945 aboard the cruiser on the Suez Canal's Great Bitter Lake, after Yalta." },
      sources: [
        { title: "FDR's Appointment at The Great Bitter Lake: 14 February 1945", publisher: "Providence", url: "https://providencemag.com/2015/12/fdr-appointment-great-bitter-lake-14-february-1945-part-1/", date: "2015-12" },
        { title: "FDR's Last Personal Diplomacy: Ibn Saud and the Quest for a Jewish Homeland", publisher: "FDR Foundation", url: "https://fdrfoundation.org/fdrs-last-personal-diplomacy-ibn-saud-and-the-quest-for-a-jewish-homeland/", date: "n.d." },
        { title: "How the petrodollar regime came to be, and what losing it would mean for the U.S.", publisher: "NPR", url: "https://www.npr.org/2026/05/06/nx-s1-5800887/how-the-petrodollar-regime-came-to-be-and-what-losing-it-would-mean-for-the-u-s", date: "2026-05-06" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_sa-2", kind: "relation", asOf: "2026-09-30",
      title: "Troops, terror and 9/11",
      dek: "In 1990 half a million American troops came to defend Saudi Arabia. Their presence helped inspire Osama bin Laden, and on 11 September 2001, 15 of the 19 hijackers were Saudis.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_sa/us_sa-2-hero.webp",
          alt: "Illustration of rows of military tents and armoured vehicles in a desert camp under a hazy sky.",
          caption: "The 1990–91 Gulf War brought hundreds of thousands of American troops to Saudi soil.",
          credit: "AI illustration — not a photograph",
          prompt: "Rows of sand-coloured military tents and armoured vehicles in a vast flat desert camp, helicopters in the distance, hazy orange sky at sunset, dust in the air, documentary style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From ally to suspect", items: [
          ["Aug 1990", "Iraq invades Kuwait; US troops sent to Saudi Arabia"],
          ["Jan–Feb 1991", "Operation Desert Storm drives Iraq out of Kuwait"],
          ["1996", "Khobar Towers bombing kills 19 US airmen"],
          ["11 Sep 2001", "Al-Qaeda attacks; 15 of 19 hijackers Saudi"],
          ["2003", "Most US forces leave the kingdom"],
          ["2016", "The '28 pages' released; Congress passes JASTA"]
        ] },
        { type: "section", head: "Desert Shield", md:
          "When Saddam Hussein's Iraq invaded Kuwait in August 1990, Iraqi tanks were close to Saudi oilfields. King Fahd agreed to let American troops in, and Operation Desert Shield brought more than half a million US soldiers to the kingdom, the largest American deployment since the Vietnam War, alongside forces from Britain, Egypt and other countries. In January and February 1991 the coalition's Operation Desert Storm drove Iraq out of Kuwait. Saudi Arabia paid a large share of the cost. Afterwards thousands of Americans stayed on Saudi bases to watch Iraq, and in 1996 a truck bomb at the Khobar Towers housing complex in Dhahran killed 19 American airmen." },
        { type: "section", head: "Bin Laden's grievance", md:
          "Osama bin Laden, son of a wealthy Saudi construction family, had fought the Soviets in Afghanistan. He saw non-Muslim troops in the land of Mecca and Medina as a humiliation, and after offering his own fighters to defend the kingdom and being turned down, he turned against the royal family. The kingdom stripped him of his citizenship in 1994. In 1996 he declared war on the United States, citing the troops. On 11 September 2001 his al-Qaeda network killed nearly 3,000 people in New York, Washington and Pennsylvania. Fifteen of the nineteen hijackers were Saudi citizens." },
        { type: "section", head: "Suspicion and lawsuits", md:
          "The attacks turned many Americans against the kingdom. Saudi money had spread a strict form of Islam worldwide, and critics asked what officials knew. Most American forces left Saudi Arabia in 2003, moving to Qatar. A section of Congress's inquiry into 9/11, the '28 pages', stayed secret until 15 July 2016; it described financial support to some hijackers from people connected to the Saudi government, though other investigations found no evidence the government as such funded al-Qaeda. In September 2016 Congress overrode President Barack Obama's veto, for the only time in his presidency, to pass JASTA, a law letting 9/11 families sue Saudi Arabia in American courts." },
        { type: "compare", head: "Two views of the kingdom",
          left: { head: "Partner against terror", md:
            "Al-Qaeda also attacked Saudi Arabia, and Saudi intelligence has helped stop plots against Americans." },
          right: { head: "Source of the problem", md:
            "Saudi money spread extremist ideas, and questions about officials' links to the hijackers were never fully answered." } },
        { type: "section", head: "Why it matters", md:
          "9/11 left a lasting mistrust in American politics. The families' lawsuits are still in court, and every visit by a Saudi leader revives the question of what the kingdom knew." }
      ],
      takeaways: [
        "More than half a million US troops defended Saudi Arabia in 1990–91 and drove Iraq out of Kuwait.",
        "Bin Laden turned against the Saudi royals and America over foreign troops; 15 of the 9/11 hijackers were Saudi.",
        "Congress released the '28 pages' and overrode Obama's veto to let 9/11 families sue the kingdom."
      ],
      check: { q: "What did JASTA, passed in 2016, allow?",
        choices: ["US troops to return to Saudi Arabia", "9/11 families to sue Saudi Arabia in US courts", "Arms sales to resume"], answer: 1,
        explain: "Congress overrode Obama's veto, the only override of his presidency, to change the sovereign immunity law." },
      sources: [
        { title: "US Declassifies Secret 9/11 Documents Known as the '28 Pages'", publisher: "ABC News", url: "https://abcnews.com/International/us-declassifies-secret-911-documents-28-pages/story?id=40583069", date: "2016-07-15" },
        { title: "Congress Overrides Presidential Veto of JASTA Legislation", publisher: "Arab Center Washington DC", url: "https://arabcenterdc.org/resource/congress-overrides-presidential-veto-of-jasta-legislation/", date: "2016-09" },
        { title: "Sept. 11 Lawsuits: Vote Today Could Be First Reversal Of An Obama Veto", publisher: "NPR", url: "https://www.npr.org/2016/09/28/495709481/sept-11-lawsuits-vote-today-could-be-first-reversal-of-an-obama-veto", date: "2016-09-28" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_sa-3", kind: "relation", asOf: "2026-09-30",
      title: "From pariah to partner",
      dek: "After the murder of Jamal Khashoggi, Joe Biden vowed to make Saudi Arabia a 'pariah'. Within two years he was bumping fists with its crown prince, and Donald Trump has since embraced him fully.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_sa/us_sa-3-hero.webp",
          alt: "Illustration of an ornate consulate building behind a high wall on a quiet city street at dusk.",
          caption: "Jamal Khashoggi was killed inside the Saudi consulate in Istanbul in October 2018.",
          credit: "AI illustration — not a photograph",
          prompt: "An ornate pale stone consulate building behind a high wall and metal gate on a quiet city street at dusk, a few bare trees, street lamps glowing, a sombre and uneasy atmosphere, no people, no flags, no legible text." },
        { type: "timeline", head: "Pariah and back", items: [
          ["2 Oct 2018", "Jamal Khashoggi killed in the Saudi consulate in Istanbul"],
          ["26 Feb 2021", "US intelligence report: MBS approved the operation"],
          ["15 Jul 2022", "Biden fist-bumps MBS in Jeddah"],
          ["Oct 2022", "OPEC+ cuts oil output; Democrats cry betrayal"],
          ["May 2025", "Trump in Riyadh; huge investment pledges"],
          ["18 Nov 2025", "MBS at the White House; Trump defends him on Khashoggi"]
        ] },
        { type: "section", head: "A murder in Istanbul", md:
          "Jamal Khashoggi was a Saudi journalist who had become a critic of Crown Prince Mohammed bin Salman (see [[lesson:sa-4]]) and wrote columns for The Washington Post. On 2 October 2018 he went into the Saudi consulate in Istanbul to get papers for his wedding and was killed and dismembered by a team of Saudi agents. Riyadh first denied it, then called it a rogue operation. In February 2021 the Biden administration published a US intelligence assessment that the crown prince had approved an operation to 'capture or kill' Khashoggi; the team included members of his personal protection unit. The crown prince has denied ordering the killing." },
        { type: "section", head: "Biden's reversal", md:
          "As a candidate, Joe Biden promised to make Saudi Arabia a 'pariah' over Khashoggi and the war in Yemen (see [[lesson:sa-6]]), and in office he ended support for the Saudi-led coalition's offensive operations there. But after Russia invaded Ukraine in 2022, petrol prices soared. On 15 July 2022 Biden flew to Jeddah and greeted the crown prince with a fist bump, a picture critics saw as surrender. He said he raised Khashoggi's murder directly. In October 2022 the OPEC+ group, led by Saudi Arabia and Russia, announced large cuts in oil output anyway, weeks before the US midterm elections. Democrats called it a slap in the face, and Biden warned that there would be 'consequences', though in the end few came." },
        { type: "section", head: "Trump's embrace", md:
          "Donald Trump had defended the crown prince after the murder in his first term, and in his second he made Riyadh his first major foreign trip, in May 2025, returning with investment pledges of $600 billion (see [[lesson:sa-7]]). On 18 November 2025 the crown prince visited the White House. When a reporter asked about Khashoggi, Trump said the prince 'knew nothing about it', contradicting his own intelligence agencies. The visit brought approval of F-35 fighter sales and a defence agreement. The kingdom is also closely tied to the 2026 Iran war (see [[lesson:ir-7]])." },
        { type: "compare", head: "Values or interests?",
          left: { head: "Realists", md:
            "Saudi oil, money and influence matter too much to American interests to punish one murder." },
          right: { head: "Critics", md:
            "Rewarding a ruler whose agents killed a journalist tells autocrats they can do anything." } },
        { type: "section", head: "Why it matters", md:
          "The Khashoggi affair showed the limits of human rights in American foreign policy. Both parties' presidents concluded that the relationship with Riyadh was too important to break." }
      ],
      takeaways: [
        "Khashoggi was killed in the Saudi consulate in Istanbul in 2018; US intelligence said MBS approved the operation.",
        "Biden promised to make the kingdom a 'pariah' but fist-bumped MBS in 2022.",
        "Trump welcomed MBS to the White House in 2025, dismissing his link to the murder."
      ],
      check: { q: "What did the US intelligence report released in February 2021 conclude?",
        choices: ["Khashoggi's killing was a rogue operation", "The crown prince approved the operation to capture or kill Khashoggi", "Turkey was responsible"], answer: 1,
        explain: "The report, published by the Biden administration, said MBS approved the operation; he denies ordering the killing." },
      sources: [
        { title: "US intelligence report finds Saudi Crown Prince responsible for approving operation that killed Washington Post journalist", publisher: "CNN", url: "https://www.cnn.com/2021/02/26/politics/biden-administration-khashoggi-report", date: "2021-02-26" },
        { title: "Biden bumps fists with Saudi crown prince, but confronts him over Khashoggi killing", publisher: "CBC News", url: "https://www.cbc.ca/lite/story/1.6521840", date: "2022-07-15" },
        { title: "Biden Saudi trip faces new scrutiny after OPEC oil cut", publisher: "The Washington Post", url: "https://www.washingtonpost.com/politics/2022/10/06/biden-saudi-oil-trip-mbs/", date: "2022-10-06" },
        { title: "Trump contradicts US intelligence on Khashoggi murder", publisher: "PolitiFact", url: "https://www.politifact.com/article/2025/nov/18/mbs-khashoggi-murder-oval-office-saudi/", date: "2025-11-18" }
      ]
    }
  ]
});
