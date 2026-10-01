/* ============================================================
   Relationship — United States & United Kingdom 🇺🇸🇬🇧
   The 'special relationship': war, bombs and spies shared
   since 1941; Suez, Thatcher and Reagan, Blair and Iraq; and
   Trump's second term, from a state visit to a quarrel over
   Iran and a new prime minister who "won't bend the knee".
   Research note and sources: tools/research/us_gb.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_gb", {
  id: "us_gb",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_gb-1", kind: "relation", asOf: "2026-09-30",
      title: "The special relationship is born",
      dek: "Winston Churchill coined the phrase 'special relationship' in 1946. It rested on a shared war, shared nuclear secrets and shared spies, and survived a bitter quarrel over Suez.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_gb/us_gb-1-hero.webp",
          alt: "Illustration of a crowded college gymnasium in 1946 with a speaker at a lectern and a large audience.",
          caption: "Churchill spoke of an 'iron curtain' and a 'special relationship' at Fulton, Missouri, in March 1946.",
          credit: "Illustration — not a photograph",
          prompt: "A crowded 1940s American college gymnasium with a heavyset older speaker in a dark suit at a lectern, a large attentive audience in hats and coats, banners of bunting on the walls, warm light, sepia-toned historical painting style, no flags, no legible text." },
        { type: "timeline", head: "Forging the alliance", items: [
          ["Aug 1941", "Roosevelt and Churchill agree the Atlantic Charter"],
          ["5 Mar 1946", "Churchill's 'iron curtain' speech in Fulton, Missouri"],
          ["1946", "The UKUSA agreement links their signals intelligence"],
          ["1949", "Both found NATO"],
          ["Nov 1956", "Eisenhower forces Britain out of Suez"],
          ["1958", "Mutual Defence Agreement on nuclear weapons"]
        ] },
        { type: "section", head: "A wartime bond", md:
          "Before 1941 Britain and the United States were friendly but not allies. As Britain stood alone against Nazi Germany in 1940, America traded it 50 old destroyers for leases on British bases, and in March 1941 the Lend-Lease Act began sending weapons and food on credit. Britain made the last payment on the big American loan it took out in 1946 only in December 2006. In August 1941, before America entered the Second World War, Franklin Roosevelt and Winston Churchill met on warships off Newfoundland and agreed the Atlantic Charter, a set of shared aims for the post-war world. After Pearl Harbor the two fought side by side, planned D-Day together and worked jointly on the atomic bomb. On 5 March 1946, in a speech at Westminster College in Fulton, Missouri, Churchill warned that an 'iron curtain' had fallen across Europe and called for a 'special relationship' between the British Commonwealth and the United States." },
        { type: "section", head: "Bombs and spies", md:
          "Two things made the relationship unusually deep. The first is intelligence. The UKUSA agreement of 1946 tied Britain's code-breakers at GCHQ to America's, and was later joined by Canada, Australia and New Zealand to form the 'Five Eyes', which still share most of their signals intelligence. The second is nuclear weapons. After years of American secrecy, the Mutual Defence Agreement of 1958 let the two share nuclear designs and material. Britain's nuclear deterrent has since relied on American missiles: first Polaris, now Trident, carried on British submarines (see [[lesson:gb_fr-3]])." },
        { type: "section", head: "Suez", md:
          "The relationship was never equal, as Britain learned in 1956. When Egypt's leader Gamal Abdel Nasser nationalised the Suez Canal, Britain and France secretly planned with Israel to invade Egypt and take it back (see [[lesson:eg-10]]). President Dwight Eisenhower, who had not been told, was furious. The United States refused to support the pound as it fell and backed a United Nations call for a ceasefire. Britain had to withdraw, and Prime Minister Anthony Eden resigned in January 1957. The lesson most British leaders drew was never again to be on the opposite side from Washington in a crisis." },
        { type: "compare", head: "Special or just useful?",
          left: { head: "A unique bond", md:
            "Shared language, history, intelligence and nuclear weapons make this alliance unlike any other." },
          right: { head: "An unequal one", md:
            "Britain needs America far more than America needs Britain, as Suez showed." } },
        { type: "section", head: "Why it matters", md:
          "Intelligence sharing and the nuclear partnership are the foundations of British defence. Whatever the mood between leaders, they bind the two countries' militaries and spies together." }
      ],
      takeaways: [
        "Churchill called for a 'special relationship' in his 1946 Fulton speech.",
        "The 1946 UKUSA intelligence pact and the 1958 nuclear agreement made the alliance unusually deep.",
        "At Suez in 1956 the United States forced Britain to withdraw, showing who was the senior partner."
      ],
      check: { q: "What happened at Suez in 1956?",
        choices: ["Britain and America invaded Egypt together", "The United States forced Britain to withdraw from its invasion of Egypt", "Britain joined NATO"], answer: 1,
        explain: "Eisenhower refused to support the pound and backed a UN ceasefire; Britain pulled out and Eden resigned." },
      sources: [
        { title: "The Sinews of Peace ('Iron Curtain Speech')", publisher: "International Churchill Society", url: "https://winstonchurchill.org/resources/speeches/1946-1963-elder-statesman/the-sinews-of-peace/", date: "n.d." },
        { title: "1956 Suez fallout: Eisenhower threatens to withhold aid", publisher: "Christian Science Monitor", url: "https://www.csmonitor.com/World/Middle-East/2012/0927/Obama-Netanyahu-tensions-Not-as-bad-as-5-other-US-Israel-low-points/1956-Suez-fallout-Eisenhower-threatens-to-withhold-aid", date: "2012-09-27" },
        { title: "Fact Sheet: The U.S.-UK Special Relationship", publisher: "The White House", url: "https://www.whitehouse.gov/fact-sheets/2025/09/fact-sheet-the-u-s-uk-special-relationship", date: "2025-09" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_gb-2", kind: "relation", asOf: "2026-09-30",
      title: "Thatcher, Reagan, Blair and Iraq",
      dek: "Margaret Thatcher and Ronald Reagan made the alliance personal. Tony Blair followed George W. Bush into Iraq in 2003, and the war's failures still shape how Britons see following America.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_gb/us_gb-2-hero.webp",
          alt: "Illustration of a huge crowd of protesters marching through a city street past grand stone buildings, holding blank banners.",
          caption: "In February 2003 up to a million people marched in London against the coming war in Iraq.",
          credit: "Illustration — not a photograph",
          prompt: "A huge crowd of protesters marching down a wide London street past grand grey stone government buildings, holding blank banners and placards, overcast winter sky, a sea of coats and scarves, documentary style, no legible text, no flags." },
        { type: "timeline", head: "Close allies", items: [
          ["1981–89", "Thatcher and Reagan in power together"],
          ["1982", "US helps Britain in the Falklands War"],
          ["1991", "British forces join the Gulf War"],
          ["Sep 2001", "Blair: Britain stands 'shoulder to shoulder' with America"],
          ["Mar 2003", "US and British forces invade Iraq"],
          ["6 Jul 2016", "The Chilcot report on Iraq is published"]
        ] },
        { type: "section", head: "Thatcher and Reagan", md:
          "Margaret Thatcher (see [[lesson:gb-10]]) and Ronald Reagan shared a belief in free markets and a hard line against the Soviet Union, and a close personal friendship. When Argentina seized the Falkland Islands in 1982, Washington at first tried to mediate, then gave Britain satellite intelligence, fuel, the use of its base on Ascension Island and the latest Sidewinder missiles (see [[lesson:gb_ar-1]]); Reagan and his defence secretary, Caspar Weinberger, were later given honorary knighthoods. Britain in turn let American bombers fly from its bases to strike Libya in 1986, when other European allies refused. There were quarrels: Thatcher was angry when America invaded Grenada, a Commonwealth country, in 1983 without warning her. But the pair came to symbolise the alliance at its closest." },
        { type: "section", head: "Blair and Iraq", md:
          "Blair had already worked closely with Bill Clinton, joining American air strikes on Iraq in 1998 and NATO's war over Kosovo in 1999. After the attacks of 11 September 2001, Prime Minister Tony Blair said Britain would stand 'shoulder to shoulder' with America, and British troops fought in Afghanistan. He then backed President George W. Bush's plan to overthrow Saddam Hussein in Iraq, arguing that Iraq had weapons of mass destruction. In February 2003 up to a million people marched in London against the war. British forces joined the invasion in March 2003. No such weapons were found, Iraq fell into years of insurgency, and 179 British service personnel died there. Critics called Blair 'Bush's poodle'." },
        { type: "section", head: "The Chilcot verdict", md:
          "An official inquiry led by Sir John Chilcot took seven years and published its report on 6 July 2016. It found that Britain had joined the invasion before peaceful options were exhausted, that the threat from Iraqi weapons had been presented with a certainty that was not justified, and that planning for after the war was wholly inadequate. It also quoted a private note Blair had sent Bush in 2002: 'I will be with you, whatever.' The lesson many politicians drew was to be more cautious about following the United States to war, a lesson Keir Starmer would cite in 2026." },
        { type: "compare", head: "Two lessons of Iraq",
          left: { head: "Stay close", md:
            "Britain's influence depends on being America's most reliable ally, especially in hard times." },
          right: { head: "Keep distance", md:
            "Following Washington blindly led Britain into a disastrous war. Britain must judge for itself." } },
        { type: "section", head: "Why it matters", md:
          "Iraq still shapes British debate about the alliance. Every time an American president asks for help in a war, British leaders are judged against Blair." }
      ],
      takeaways: [
        "Thatcher and Reagan made the alliance personal; the US helped Britain in the Falklands in 1982.",
        "Blair joined Bush's invasion of Iraq in 2003; no weapons of mass destruction were found and 179 British personnel died.",
        "The 2016 Chilcot report found Britain went to war before peaceful options were exhausted."
      ],
      check: { q: "What did the Chilcot report find about the Iraq war?",
        choices: ["It was a complete success", "Britain joined before peaceful options were exhausted and post-war planning was inadequate", "Britain had not been involved"], answer: 1,
        explain: "Published in 2016 after seven years, it criticised the case for war and the lack of planning for afterwards." },
      sources: [
        { title: "Sir John Chilcot's public statement", publisher: "The Iraq Inquiry (UK National Archives)", url: "https://webarchive.nationalarchives.gov.uk/ukgwa/20170825184721mp_/http://www.iraqinquiry.org.uk/media/247010/2016-09-06-sir-john-chilcots-public-statement.pdf", date: "2016-07-06" },
        { title: "Father of British soldier killed in Iraq says Chilcot report confirms 'suspicions'", publisher: "CBC News", url: "https://amp.cbc.ca/lite/story/1.3667153", date: "2016-07-06" },
        { title: "Just How Much Did the U.S. Help?", publisher: "Time", url: "https://time.com/archive/6882618/just-how-much-did-the-u-s-help/", date: "1982" },
        { title: "Memorandum From Secretary of Defense Weinberger to President Reagan", publisher: "US Office of the Historian", url: "https://history.state.gov/historicaldocuments/frus1981-88v13/d378", date: "1982" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_gb-3", kind: "relation", asOf: "2026-09-30",
      title: "Trump, Starmer and Burnham",
      dek: "Keir Starmer courted Donald Trump with a trade deal and a royal state visit, then refused him British bases for the Iran war. His successor, Andy Burnham, says he 'won't bend the knee'.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_gb/us_gb-3-hero.webp",
          alt: "Illustration of a grand castle banquet hall with a long table set with candles and silver for a state dinner.",
          caption: "Trump's second state visit, in September 2025, included a banquet at Windsor Castle.",
          credit: "Illustration — not a photograph",
          prompt: "A grand medieval castle banqueting hall with a very long polished table set with candelabras, silver and flowers for a state dinner, gothic windows and wood panelling, warm golden candlelight, no people, no flags, no legible text." },
        { type: "timeline", head: "A turbulent two years", items: [
          ["8 May 2025", "US–UK trade deal: 10% tariff, car quota"],
          ["11 Sep 2025", "Ambassador Mandelson sacked over Epstein emails"],
          ["16–18 Sep 2025", "Trump's second state visit; tech deal signed"],
          ["20 Jan 2026", "Trump calls the Chagos deal 'an act of great stupidity'"],
          ["Mar 2026", "Starmer refuses bases for strikes, then allows 'defensive' use"],
          ["Sep 2026", "Burnham meets Trump at the UN"]
        ] },
        { type: "section", head: "Charm offensive", md:
          "Keir Starmer set out to manage Trump rather than confront him. On 8 May 2025 Britain became the first country to agree a trade deal with Trump's administration: most British goods faced a 10% tariff, and up to 100,000 British cars a year were let in at 10%. In September 2025 King Charles hosted Trump for an unprecedented second state visit, with a banquet at Windsor Castle, and the two governments signed a Tech Prosperity Deal on artificial intelligence, nuclear power and quantum computing; Starmer said American firms had pledged £150 billion of investment. But days before, Starmer had to sack his ambassador in Washington, Peter Mandelson, after emails showed his close friendship with the sex offender Jeffrey Epstein." },
        { type: "section", head: "Chagos and Iran", md:
          "Then came quarrels. Britain had agreed to hand the Chagos Islands to Mauritius while leasing back the joint US–British base on Diego Garcia for 99 years. On 20 January 2026, amid his push to acquire Greenland, Trump called the handover 'an act of GREAT STUPIDITY', and Britain later paused it. When the United States and Israel attacked Iran on 28 February 2026 (see [[lesson:ir-7]]), Starmer refused to let American bombers use British bases for the strikes, citing international law and the lessons of Iraq. Trump said 'this is not Winston Churchill that we're dealing with.' After Iranian attacks endangered Britons, Starmer allowed 'specific and limited defensive' use of RAF Fairford and Diego Garcia." },
        { type: "section", head: "A new prime minister", md:
          "Starmer resigned in June 2026 after heavy election losses, and Andy Burnham became prime minister in July (see [[lesson:gb-6]]). Burnham had once said he would refuse to meet Trump, and after taking office said he 'won't bend the knee', accusing Starmer of bowing to the president. Trump also angered London by voicing support for a united Ireland and questioning the future of the Falkland Islands. Yet when they first met, at the United Nations in September 2026, Trump told Burnham he could be a 'great prime minister' and said relations were 'more up' than under Starmer." },
        { type: "compare", head: "How to handle Trump",
          left: { head: "Flatter and deal", md:
            "Pomp, early trade deals and private persuasion win Britain better terms than public fights." },
          right: { head: "Stand firm", md:
            "Britain must say no when America is wrong, as on Iran, or it becomes a vassal." } },
        { type: "section", head: "Why it matters", md:
          "Britain left the European Union partly to strike its own deals, and the United States is its biggest single trading partner. How Burnham handles Trump will shape Britain's place between America and Europe." }
      ],
      takeaways: [
        "Britain got the first Trump trade deal in May 2025 and hosted a second state visit in September.",
        "Starmer refused US use of British bases to attack Iran in 2026, then allowed limited defensive use.",
        "Burnham, prime minister since July 2026, says he 'won't bend the knee' but has met Trump cordially."
      ],
      check: { q: "What did Starmer first decide when the Iran war began in 2026?",
        choices: ["To join the strikes", "To refuse US use of British bases for the strikes", "To close the US embassy"], answer: 1,
        explain: "He cited international law and Iraq; he later allowed limited defensive use of Fairford and Diego Garcia." },
      sources: [
        { title: "Trump and Starmer Sign Billion-Dollar U.S.-U.K. Tech Deal", publisher: "Time", url: "https://time.com/7318214/trump-starmer-us-uk-tech-prosperity-deal-signed/", date: "2025-09-18" },
        { title: "U.K. fires its ambassador to Washington over emails to Jeffrey Epstein", publisher: "NPR", url: "https://www.npr.org/2025/09/11/nx-s1-5537814/jeffrey-epstein-uk-ambassador-mandelson", date: "2025-09-11" },
        { title: "UK forced to halt Chagos Islands deal after Trump criticism", publisher: "CNN", url: "https://www.cnn.com/2026/04/11/uk/uk-pause-chagos-islands-deal-intl", date: "2026-04-11" },
        { title: "British PM Keir Starmer navigates Trump's Iran war criticism", publisher: "NBC News", url: "https://www.nbcnews.com/world/united-kingdom/british-pm-starmer-trump-iran-war-criticism-uk-bases-bombing-snl-rcna264861", date: "2026-03" },
        { title: "Trump says relationship with UK is 'more up' with Burnham than under Starmer", publisher: "ITV News", url: "https://www.itv.com/news/2026-09-22/andy-burnham-donald-trump-iran-war-un-general-assembly", date: "2026-09-22" }
      ]
    }
  ]
});
