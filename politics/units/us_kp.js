/* ============================================================
   Relationship — United States & North Korea 🇺🇸🇰🇵
   The Korean War and an armistice that never became peace, the
   Pueblo and the axe murders; three decades of nuclear deals
   that collapsed; and Trump's summits with Kim, then and now.
   North Korea's own story is in kp; Seoul's in kr_kp.
   Research note and sources: tools/research/us_kp.md
   Current as of 7 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("us_kp", {
  id: "us_kp",
  asOf: "2026-10-07",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_kp-1", kind: "relation", asOf: "2026-10-07",
      title: "A war that never ended",
      dek: "American troops fought North Korea for three years and signed an armistice in 1953, not a peace treaty. Since then the two have come close to war over a captured spy ship and a tree.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_kp/us_kp-1-hero.webp",
          alt: "Illustration of low blue huts straddling a border line between two guard buildings, with wooded hills behind.",
          caption: "The armistice of 1953 is still policed at Panmunjom.",
          credit: "Illustration — not a photograph",
          prompt: "Low blue single-storey conference huts straddling a concrete border line between two grey guard buildings, wooded hills behind, overcast light, quiet and tense, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "War and armistice", items: [
          ["Aug 1945", "US and Soviet forces divide Korea at the 38th parallel"],
          ["25 Jun 1950", "North Korea invades the South"],
          ["27 Jul 1953", "Armistice signed at Panmunjom"],
          ["23 Jan 1968", "North Korea seizes the spy ship USS Pueblo"],
          ["Dec 1968", "Pueblo's crew freed after 11 months"],
          ["18 Aug 1976", "Two US officers killed in the 'axe murder' incident"]
        ] },
        { type: "section", head: "Division", md:
          "As Japan surrendered in August 1945, two American officers drew a line across Korea at the 38th parallel: Soviet forces would take the Japanese surrender to the north, American forces to the south. The line was meant to be temporary. By 1948 it divided two rival states, a communist North under Kim Il Sung and an anti-communist South under Syngman Rhee." },
        { type: "section", head: "The Korean War", md:
          "On 25 June 1950 North Korea invaded the South, with Stalin's approval (see [[lesson:kp-10]]). The United States led a UN force that drove the North back almost to China, until Chinese troops entered the war. About 36,000 Americans died, and millions of Koreans. US bombing flattened most of North Korea's towns, a memory its government still uses to rally its people. The fighting stopped with an armistice on 27 July 1953, signed by American, North Korean and Chinese commanders. No peace treaty followed, so technically the war has never ended." },
        { type: "section", head: "The Pueblo", md:
          "On 23 January 1968 North Korean boats seized the USS Pueblo, a Navy intelligence ship, off the North Korean coast, killing one sailor. Its 82 surviving crew were held for 11 months, beaten and forced to make confessions. They were freed in December 1968 only after the United States signed an apology, which it repudiated as it signed. North Korea still keeps the ship in Pyongyang as a museum." },
        { type: "section", head: "The tree", md:
          "On 18 August 1976 North Korean soldiers attacked a UN work party trimming a poplar tree in the Joint Security Area at Panmunjom, killing two American officers with axes. Three days later the United States and South Korea mounted Operation Paul Bunyan: with bombers overhead and an aircraft carrier offshore, engineers cut the tree down. North Korea backed off, and Kim Il Sung sent a rare message of regret." },
        { type: "section", head: "A standing army", md:
          "About 28,500 American troops remain in South Korea under a 1953 defence treaty. North Korea calls them an occupation force and says their presence, and US nuclear weapons, justify its own arsenal." },
        { type: "compare", head: "The war in memory",
          left: { head: "In America", md:
            "'The forgotten war', fought to stop communist aggression." },
          right: { head: "In North Korea", md:
            "The 'Victorious Fatherland Liberation War' against American invaders." } },
        { type: "section", head: "Why it matters", md:
          "Because the war never formally ended, North Korea's main demand for decades has been a peace treaty with the United States and the withdrawal of American troops. Washington has always put denuclearisation first." }
      ],
      takeaways: [
        "The Korean War ended in a 1953 armistice, not a peace treaty; the US and North Korea are technically still at war.",
        "North Korea seized the USS Pueblo in 1968 and held its crew for 11 months; the ship is still in Pyongyang.",
        "About 28,500 US troops remain in South Korea under a 1953 treaty."
      ],
      check: { q: "How did the Korean War end in 1953?",
        choices: ["With a peace treaty", "With an armistice that is still in force", "With North Korea's surrender"], answer: 1,
        explain: "An armistice stopped the fighting; no peace treaty has ever been signed." },
      sources: [
        { title: "USS Pueblo captured", publisher: "History.com", url: "https://www.history.com/this-day-in-history/january-23/uss-pueblo-captured", date: "n.d." },
        { title: "The USS Pueblo Incident", publisher: "Wilson Center Digital Archive", url: "https://digitalarchive.wilsoncenter.org/essays/uss-pueblo-incident", date: "n.d." },
        { title: "An Axe Murder Triggers a Standoff in Korea's DMZ, 1976", publisher: "Association for Diplomatic Studies and Training", url: "https://adst.org/2014/12/the-bizarre-north-korean-axe-murders/", date: "2014-12" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_kp-2", kind: "relation", asOf: "2026-10-07",
      title: "Deals that didn't hold",
      dek: "In 1994 North Korea agreed to freeze its nuclear programme in return for fuel and reactors. That deal, and the six-party talks that followed, collapsed, and North Korea tested its first bomb in 2006.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_kp/us_kp-2-hero.webp",
          alt: "Illustration of a squat nuclear reactor building with a cooling tower in a river valley among bare hills.",
          caption: "The Yongbyon reactor has been frozen, restarted and frozen again.",
          credit: "Illustration — not a photograph",
          prompt: "A squat grey nuclear reactor building with a short cooling tower and pipework in a river valley among bare brown hills, late autumn light, thin smoke, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Three decades of talks", items: [
          ["1993–94", "First nuclear crisis; Carter visits Pyongyang"],
          ["Oct 1994", "Agreed Framework freezes Yongbyon"],
          ["Oct 2002", "US says the North has a secret uranium programme; the deal collapses"],
          ["Sep 2005", "Six-party talks agree a joint statement"],
          ["Oct 2006", "North Korea's first nuclear test"],
          ["Jun 2017", "Otto Warmbier dies after release from North Korean custody"]
        ] },
        { type: "section", head: "The Agreed Framework", md:
          "In 1993 North Korea threatened to leave the Nuclear Non-Proliferation Treaty, and the Clinton administration drew up plans to bomb its reactor at Yongbyon. Former President Jimmy Carter flew to Pyongyang in June 1994 and returned with an offer from Kim Il Sung to freeze the programme. Under the Agreed Framework of October 1994, North Korea froze Yongbyon; in return, a US-led consortium would build two power reactors, and the US would supply heavy fuel oil and move toward normal relations." },
        { type: "section", head: "Collapse", md:
          "The reactors fell years behind schedule, and Republicans in Congress attacked the deal as a reward for blackmail. In October 2002 the Bush administration, which had named North Korea part of an 'axis of evil', said Pyongyang had admitted a secret uranium-enrichment programme. Fuel deliveries stopped; North Korea expelled inspectors, restarted Yongbyon and left the treaty in 2003." },
        { type: "section", head: "Six-party talks", md:
          "From 2003, China hosted talks among the two Koreas, the US, China, Japan and Russia. On 19 September 2005 they agreed a joint statement in which North Korea committed to abandon all nuclear weapons in return for aid and security guarantees. It was never carried out: the sides argued over who should move first, and in October 2006 North Korea tested its first nuclear bomb (see [[lesson:kp-3]]). The talks broke down in 2009." },
        { type: "section", head: "Strategic patience", md:
          "Under President Obama the United States waited, tightening [[sanctions]] and refusing to reward North Korea with talks unless it showed it would disarm, a policy called 'strategic patience'. North Korea used the time to test bombs and missiles, and Kim Jong Un, who took over in 2011, wrote nuclear status into the constitution." },
        { type: "section", head: "Otto Warmbier", md:
          "In 2016 Otto Warmbier, a 21-year-old American student on a tourist trip, was sentenced to 15 years' hard labour for allegedly taking a propaganda poster. He was returned in a coma in June 2017 and died six days later. The United States banned its citizens from travelling to North Korea on US passports from that September, a ban it has renewed every year." },
        { type: "compare", head: "Why the deals failed",
          left: { head: "Washington's view", md:
            "North Korea cheated, took the benefits and kept building bombs." },
          right: { head: "Pyongyang's view", md:
            "The US broke promises, delayed the reactors and threatened attack." } },
        { type: "section", head: "Why it matters", md:
          "Each failure made the next deal harder. By the time Donald Trump took office in 2017, North Korea was testing missiles that could reach the United States." }
      ],
      takeaways: [
        "The 1994 Agreed Framework froze North Korea's Yongbyon reactor, but collapsed in 2002 over a secret uranium programme.",
        "The six-party talks produced a 2005 pledge to disarm; North Korea tested its first nuclear bomb in 2006.",
        "Otto Warmbier's death in 2017 led to a US ban on travel to North Korea."
      ],
      check: { q: "What did North Korea get under the 1994 Agreed Framework?",
        choices: ["A peace treaty", "Fuel oil and the promise of two power reactors", "The withdrawal of US troops from the South"], answer: 1,
        explain: "In return, it froze its reactor at Yongbyon." },
      sources: [
        { title: "Chronology of U.S.-North Korean Nuclear and Missile Diplomacy, 1985-2022", publisher: "Arms Control Association", url: "https://www.armscontrol.org/factsheets/chronology-us-north-korean-nuclear-and-missile-diplomacy-1985-2022", date: "2022" },
        { title: "The Six-Party Talks at a Glance", publisher: "Arms Control Association", url: "https://www.armscontrol.org/factsheets/six-party-talks-glance", date: "n.d." },
        { title: "After Otto Warmbier's Death, U.S. Plans To Ban Travel To North Korea", publisher: "NPR", url: "https://www.npr.org/2017/07/21/538608390/after-otto-warmbiers-death-u-s-plans-to-ban-travel-to-north-korea", date: "2017-07-21" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_kp-3", kind: "relation", asOf: "2026-10-07",
      title: "Fire and fury, then love letters",
      dek: "Trump threatened North Korea with 'fire and fury', then met Kim Jong Un three times. Back in office, he wants a fourth meeting, but Kim now says his nuclear weapons are not up for discussion.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_kp/us_kp-3-hero.webp",
          alt: "Illustration of a colonial-style hotel on a tropical island with a long table set for talks in a bright hall.",
          caption: "Trump and Kim first met at a hotel on Singapore's Sentosa island in June 2018.",
          credit: "Illustration — not a photograph",
          prompt: "A white colonial-style hotel with arched verandas on a tropical island, palm trees and a calm sea, and through tall windows a long polished table set for talks, bright midday light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Summits and silence", items: [
          ["Aug 2017", "Trump threatens 'fire and fury'"],
          ["12 Jun 2018", "First Trump–Kim summit, Singapore"],
          ["28 Feb 2019", "Hanoi summit ends without a deal"],
          ["30 Jun 2019", "Trump steps into North Korea at the DMZ"],
          ["Oct 2025", "No meeting during Trump's Asia trip"],
          ["Aug 2026", "Trump says Kim has replied to his outreach"]
        ] },
        { type: "section", head: "Fire and fury", md:
          "In 2017 North Korea tested missiles able to reach the United States and its most powerful nuclear bomb. Trump warned in August that further threats would be met with 'fire and fury like the world has never seen', and mocked Kim as 'Little Rocket Man' at the UN. Kim called Trump a 'dotard'. Many experts thought war more likely than at any time since 1953." },
        { type: "section", head: "Singapore and Hanoi", md:
          "Then, through South Korea's president, Moon Jae-in, Kim offered to talk. On 12 June 2018 in Singapore, Trump became the first sitting US president to meet a North Korean leader. They signed a short statement promising new relations and 'complete denuclearisation of the Korean Peninsula', without defining it. The second summit, in Hanoi in February 2019, ended early: Kim offered to dismantle Yongbyon in return for lifting most sanctions, and Trump, wanting more, walked away." },
        { type: "section", head: "Twenty steps", md:
          "On 30 June 2019 Trump met Kim at the demilitarised zone and took about 20 steps across the border, the first sitting president to set foot in North Korea. Working-level talks in Stockholm that October went nowhere. The two leaders exchanged warm letters, which Trump called 'love letters', but no deal followed, and North Korea resumed missile tests." },
        { type: "section", head: "A fourth meeting?", md:
          "Back in office, Trump has said repeatedly he would like to meet Kim again. Kim said in September 2025 that he had 'good memories' of Trump but would talk only if the United States dropped its demand that North Korea give up its weapons (see [[lesson:kp-8]]). In August 2026 Trump said Kim had responded to his overtures, and he has discussed meeting Kim around the APEC summit in Shenzhen, China, in November. The State Department says he is open to talks without preconditions but still seeks denuclearisation." },
        { type: "section", head: "What has changed", md:
          "North Korea is far stronger than in 2018. It has a larger arsenal, new solid-fuel ICBMs, a defence treaty with Russia, and combat experience from Russia's war (see [[lesson:ru_kp-3]]). It no longer needs American sanctions relief as badly, because Russia supplies oil, food and money." },
        { type: "compare", head: "What each side wants from a summit",
          left: { head: "Washington", md:
            "Steps toward giving up nuclear weapons, or at least a freeze on testing." },
          right: { head: "Pyongyang", md:
            "Acceptance as a nuclear power, sanctions relief and an end to US–South Korean drills." } },
        { type: "section", head: "Why it matters", md:
          "Any new summit would force Washington to choose between its decades-old goal of a nuclear-free Korea and a deal that, in practice, accepts North Korea's bomb." }
      ],
      takeaways: [
        "After threatening 'fire and fury' in 2017, Trump met Kim in Singapore (2018), Hanoi (2019) and at the DMZ (2019).",
        "Hanoi failed over sanctions: Kim offered Yongbyon for most sanctions relief, and Trump walked away.",
        "Trump wants a fourth meeting, but Kim says North Korea's nuclear weapons are no longer negotiable."
      ],
      check: { q: "Why did the Hanoi summit of February 2019 fail?",
        choices: ["Kim refused to attend", "Kim offered Yongbyon in return for lifting most sanctions, and Trump wanted more", "China blocked a deal"], answer: 1,
        explain: "Trump said the US couldn't give up all the sanctions for that." },
      sources: [
        { title: "Trump-Kim Summit Ends With No Deal", publisher: "Arms Control Association", url: "https://www.armscontrol.org/act/2019-03/news/trump-kim-summit-ends-no-deal", date: "2019-03" },
        { title: "Trump Meets Kim Jong Un, Steps Foot Inside North Korea", publisher: "NPR", url: "https://www.npr.org/2019/06/30/737365074/trump-to-meet-kim-jong-un-at-dmz", date: "2019-06-30" },
        { title: "'Very positive': Trump says Kim Jong Un has responded to his overtures", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/8/18/trump-says-n-koreas-kim-has-responded-to-his-request-for-a-conversation", date: "2026-08-18" },
        { title: "Trump pushes for Kim Jong-un meeting this year: report", publisher: "The Korea Herald", url: "https://www.koreaherald.com/article/10844783", date: "2026" },
        { title: "Trump sees North Korea talks as serving U.S. interests, not concession, State Department says", publisher: "Korea JoongAng Daily", url: "https://koreajoongangdaily.com/korea/trump-sees-north-korea-talks-as-serving-us-interests-not-concession-state-department-says/12903309", date: "2026" }
      ]
    }
  ]
});
