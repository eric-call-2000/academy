/* ============================================================
   Relationship — United States & Pakistan 🇺🇸🇵🇰
   Cold War pacts, a U-2 from Peshawar and Kissinger's secret
   flight to Beijing; the Afghan jihad, the bomb, 9/11 and bin
   Laden in Abbottabad; and Trump's 'favourite field marshal',
   oil, minerals and the Iran mediation.
   The mediation itself is in pk-6; India's view in us_in.
   Research note and sources: tools/research/us_pk.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("us_pk", {
  id: "us_pk",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_pk-1", kind: "relation", asOf: "2026-10-01",
      title: "Cold War allies of convenience",
      dek: "Pakistan joined America's anti-Soviet pacts, lent it an airbase for U-2 spy flights and opened the secret channel to China. But when Pakistan went to war with India, it found America's support had limits.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_pk/us_pk-1-hero.webp",
          alt: "Illustration of a slender black spy plane with long wings on a runway at dawn, with mountains behind.",
          caption: "Gary Powers' U-2 took off from Peshawar before it was shot down over the Soviet Union in 1960.",
          credit: "Illustration — not a photograph",
          prompt: "A slender black high-altitude spy plane with very long wings on a runway at dawn, ground crew silhouettes far away, dry hills and mountains behind, 1960 historical documentary painting style, no faces, no flags, no legible text." },
        { type: "timeline", head: "A Cold War bargain", items: [
          ["1954", "Mutual defence agreement; Pakistan joins SEATO"],
          ["1955", "Pakistan joins the Baghdad Pact (later CENTO)"],
          ["May 1960", "A U-2 flying from Peshawar is shot down over the USSR"],
          ["1965", "US cuts off arms to both Pakistan and India during their war"],
          ["Jul 1971", "Kissinger flies secretly to Beijing from Pakistan"],
          ["Dec 1971", "Nixon 'tilts' toward Pakistan; Bangladesh is born"]
        ] },
        { type: "section", head: "Signing up", md:
          "Pakistan was born in 1947 fearing India far more than communism (see [[lesson:pk-3]]). But it saw that joining America's alliances would bring weapons and money. In 1954 it signed a mutual defence agreement with the US and joined SEATO, and in 1955 the Baghdad Pact, later CENTO. American arms and aid poured in. India, which stayed non-aligned, complained that the weapons were really meant for use against it." },
        { type: "section", head: "Ayub at Mount Vernon", md:
          "The high point came under General Ayub Khan, who seized power in 1958 and was seen in Washington as a modernising, pro-Western strongman. In July 1961 he addressed a joint session of Congress, and President John F. Kennedy gave a state dinner for him at George Washington's home, Mount Vernon. American aid paid for dams, roads and the green revolution in Pakistani farming." },
        { type: "section", head: "Spy flights", md:
          "Pakistan let the US run a secret listening post at Badaber near Peshawar and fly U-2 spy planes from the city's airfield. On 1 May 1960 Francis Gary Powers took off from Peshawar and was shot down over the Soviet Union. Nikita Khrushchev reportedly warned Pakistan that Peshawar had been circled in red on Soviet maps. For Pakistan's rulers, the risk was the price of American protection." },
        { type: "section", head: "1965 and 1971", md:
          "When Pakistan and India went to war in 1965, the US cut off arms to both, which hurt Pakistan, dependent on American weapons, far more. Pakistanis felt betrayed. In 1971 Pakistan did Washington a historic favour: President Yahya Khan arranged Henry Kissinger's secret flight from Islamabad to Beijing, opening the way to Nixon's visit to China. Months later, as Pakistan's army crushed East Pakistan and India intervened, Nixon 'tilted' toward Pakistan and sent the aircraft carrier USS Enterprise into the Bay of Bengal. It could not stop Bangladesh's independence (see [[lesson:pk-10]])." },
        { type: "section", head: "Turning to China", md:
          "The lesson Pakistan's generals drew was that America was a fair-weather friend. China, by contrast, had stood by Pakistan against India (see [[lesson:pk_cn-1]]). From the 1960s Pakistan cultivated Beijing as its 'all-weather' ally, while still hoping for American arms and money whenever Washington needed it." },
        { type: "compare", head: "What each wanted",
          left: { head: "America", md:
            "A Muslim ally on the Soviet Union's southern edge, bases and intelligence." },
          right: { head: "Pakistan", md:
            "Weapons, aid and backing against India." } },
        { type: "section", head: "Why it matters", md:
          "The alliance was always transactional: each side wanted something different. That mismatch would run through every later chapter." }
      ],
      takeaways: [
        "Pakistan joined US-led alliances in 1954–55 for arms and aid, fearing India more than communism.",
        "The 1960 U-2 flight that was shot down over the USSR had taken off from Peshawar.",
        "Pakistan arranged Kissinger's secret 1971 trip to Beijing; Nixon tilted toward Pakistan in the 1971 war."
      ],
      check: { q: "What favour did Pakistan do for Washington in July 1971?",
        choices: ["It sent troops to Vietnam", "It arranged Kissinger's secret flight to Beijing", "It gave up its nuclear programme"], answer: 1,
        explain: "The trip opened the way to Nixon's 1972 visit to China." },
      sources: [
        { title: "The Tilt: The U.S. and the South Asian Crisis of 1971", publisher: "National Security Archive", url: "https://nsarchive2.gwu.edu/NSAEBB/NSAEBB79/", date: "2002" },
        { title: "1960 U-2 incident", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/1960_U-2_incident", date: "n.d." },
        { title: "Kissinger's secret trip in 1971 that paved the way for U.S.-China relations", publisher: "The China Project", url: "https://thechinaproject.com/2020/07/09/kissingers-secret-trip-in-1971-that-paved-the-way-for-u-s-china-relations/", date: "2020-07-09" },
        { title: "Pakistan's relationship with US: A Historical Perspective", publisher: "The Diplomatic Insight", url: "https://thediplomaticinsight.com/pakistans-relationship-with-us-a-historical-perspective/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_pk-2", kind: "relation", asOf: "2026-10-01",
      title: "Jihad, the bomb and bin Laden",
      dek: "Together they armed the Afghan mujahideen. Then Washington sanctioned Pakistan's bomb, needed it again after 9/11, and found Osama bin Laden living near its military academy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_pk/us_pk-2-hero.webp",
          alt: "Illustration of a walled compound on a hillside town at night, with helicopters approaching.",
          caption: "US commandos killed Osama bin Laden in his compound in Abbottabad on 2 May 2011.",
          credit: "Illustration — not a photograph",
          prompt: "A large walled concrete compound in a quiet hillside town at night, dark helicopters approaching low over rooftops, a few lit windows, pine-covered hills behind, documentary painting style, no people visible, no flags, no legible text." },
        { type: "timeline", head: "Need and distrust", items: [
          ["1979–89", "CIA arms Afghan mujahideen through Pakistan's ISI"],
          ["1990", "Pressler sanctions over Pakistan's nuclear programme"],
          ["1998", "Nuclear tests bring new sanctions"],
          ["2001", "After 9/11, Musharraf joins the US 'war on terror'"],
          ["2 May 2011", "Bin Laden killed in Abbottabad"],
          ["Jan 2018", "Trump: 'nothing but lies & deceit'; security aid suspended"]
        ] },
        { type: "section", head: "The Afghan jihad", md:
          "After the Soviet invasion of Afghanistan in 1979, Pakistan's military ruler Zia ul-Haq became America's essential partner (see [[lesson:pk-11]]). The CIA, with Saudi money, funnelled billions in weapons, including Stinger missiles, to Afghan mujahideen, but through Pakistan's ISI spy agency, which chose who got them and favoured Islamist factions. Washington looked away as Pakistan built a nuclear bomb in secret. When the Soviets left in 1989, so did American interest." },
        { type: "section", head: "Sanctions", md:
          "In 1990 President George H. W. Bush could no longer certify that Pakistan did not have a nuclear device, and under the Pressler Amendment almost all aid stopped, including F-16 jets Pakistan had paid for. Pakistan's nuclear tests in 1998, after India's, brought more sanctions, and Pervez Musharraf's 1999 coup more still. Pakistanis felt abandoned, and many still remember the 1990s as proof that America uses and discards its friends." },
        { type: "section", head: "The A. Q. Khan network", md:
          "In 2004 Abdul Qadeer Khan, father of Pakistan's bomb, confessed on television to selling nuclear technology to Iran, Libya and North Korea. Musharraf pardoned him at once, and he spent years under house arrest instead of in prison. Washington, which needed Pakistan's help in Afghanistan, made no serious attempt to punish the country, a choice critics still cite as the price of the alliance." },
        { type: "section", head: "After 9/11", md:
          "The 2001 attacks changed everything again. Musharraf joined the US campaign against al-Qaeda and the Taliban, letting America use Pakistani airspace and supply routes. Sanctions were lifted, Pakistan was named a major non-NATO ally in 2004, and billions in military and economic aid flowed. But the ISI kept ties with the Afghan Taliban, whose leaders sheltered in Pakistan. American drones struck militants in the tribal areas, killing many civilians and enraging Pakistanis." },
        { type: "section", head: "Abbottabad and after", md:
          "On 2 May 2011 US Navy SEALs killed Osama bin Laden in a compound in Abbottabad, a garrison town near Pakistan's military academy, without telling Pakistan in advance. Americans asked how he had hidden there for years; Pakistanis were humiliated by the raid. In November 2011 NATO aircraft killed 24 Pakistani soldiers at the Salala border posts, and Pakistan closed NATO's supply routes for seven months. On New Year's Day 2018 Trump tweeted that Pakistan had given 'nothing but lies & deceit', and suspended most security aid." },
        { type: "compare", head: "The blame game",
          left: { head: "America", md:
            "Pakistan took billions while sheltering the Taliban and hiding bin Laden." },
          right: { head: "Pakistan", md:
            "Pakistan lost tens of thousands of people to terrorism fighting America's war, then got blamed." } },
        { type: "section", head: "Why it matters", md:
          "Twenty years of mutual suspicion ended with the US withdrawal from Afghanistan in 2021. Few expected the warmth that came next." }
      ],
      takeaways: [
        "The CIA armed Afghan mujahideen through Pakistan's ISI in the 1980s.",
        "Sanctions over Pakistan's bomb cut aid in the 1990s; 9/11 made it an ally again.",
        "Bin Laden's killing in Abbottabad in 2011 and Trump's 2018 aid cut marked the low point of trust."
      ],
      check: { q: "Where was Osama bin Laden killed in 2011?",
        choices: ["Kabul", "Abbottabad, Pakistan", "Peshawar"], answer: 1,
        explain: "He had lived for years in a compound near Pakistan's military academy." },
      sources: [
        { title: "Piling on pressure over safe havens, U.S. suspends military aid to Pakistan", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/national-security/feud-between-us-and-pakistan-flares-up-after-trumps-lies-and-deceit-tweet/2018/01/04/7cb457b8-f08a-11e7-97bf-bba379b809ab_story.html", date: "2018-01-04" },
        { title: "US suspends security assistance to Pakistan", publisher: "CNN", url: "https://www.cnn.com/2018/01/04/politics/us-suspends-security-assistance-to-pakistan", date: "2018-01-04" },
        { title: "2011 NATO attack in Pakistan", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2011_NATO_attack_in_Pakistan", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_pk-3", kind: "relation", asOf: "2026-10-01",
      title: "Trump's favourite field marshal",
      dek: "After the 2025 clash with India, Pakistan nominated Trump for the Nobel Peace Prize and its army chief lunched at the White House. Oil, minerals and the Iran mediation followed, and India fumed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_pk/us_pk-3-hero.webp",
          alt: "Illustration of a rugged mountain mine with trucks carrying ore down a winding road.",
          caption: "Pakistan has offered the US access to its minerals.",
          credit: "Illustration — not a photograph",
          prompt: "A rugged dry mountain landscape with an open-pit mine, heavy trucks carrying ore down a winding dirt road, dust in the air, distant snow peaks, documentary painting style, no people close up, no logos, no flags, no legible text." },
        { type: "timeline", head: "A sudden warmth", items: [
          ["May 2025", "Four-day India–Pakistan conflict; Trump claims the ceasefire"],
          ["Jun 2025", "Munir lunches with Trump; Pakistan nominates him for the Nobel"],
          ["31 Jul 2025", "Trade deal: 19% tariff, and talk of 'massive oil reserves'"],
          ["8 Sep 2025", "$500 million minerals deal with US Strategic Metals"],
          ["25 Sep 2025", "Sharif and Munir at the White House"],
          ["Apr–Jun 2026", "Pakistan mediates between the US and Iran"]
        ] },
        { type: "section", head: "The war that changed things", md:
          "In May 2025, after a terrorist attack in Kashmir, India and Pakistan fought for four days with missiles and drones (see [[lesson:pk-5]]). Trump said American mediation had brought the ceasefire. India, which rejects outside mediation over Kashmir, denied it; Pakistan thanked him and in June nominated him for the Nobel Peace Prize. That month Trump hosted Field Marshal Asim Munir for lunch at the White House, an extraordinary honour for an army chief who was not head of state." },
        { type: "section", head: "Deals", md:
          "On 31 July 2025 the two sides announced a trade deal cutting the US tariff on Pakistani goods from 29% to 19%, far below India's, and Trump said the two countries would work together on Pakistan's 'massive oil reserves'. In September a Missouri firm, US Strategic Metals, signed a $500 million agreement with an army-run company to develop Pakistani critical minerals, and Pakistan sent its first shipment of rare earths that October. Pakistan also courted American crypto ventures linked to Trump's circle, and offered US firms a stake in its mining and energy projects." },
        { type: "section", head: "In the Oval Office", md:
          "On 25 September 2025 Prime Minister Shehbaz Sharif and Munir met Trump at the White House, with Vice President JD Vance and Secretary of State Marco Rubio, and Trump called them 'great leaders'. Pakistan joined his Board of Peace for Gaza in January 2026. When the US and Israel went to war with Iran, Pakistan, trusted by both Washington and Tehran, mediated the April ceasefire and the June memorandum (see [[lesson:pk-6]])." },
        { type: "section", head: "India's unease", md:
          "India was alarmed. Its officials hold Munir responsible for the militancy behind the Kashmir attack, and the 2025 tariffs Trump imposed on India were far higher than Pakistan's (see [[lesson:in-6]]). Indian commentators asked whether Washington was returning to its old Cold War habit of 'hyphenating' the two neighbours. American officials insist ties with India remain strategic, while Pakistan's are about specific deals and diplomacy." },
        { type: "compare", head: "Will it last?",
          left: { head: "Yes", md:
            "Pakistan offers minerals, mediation and access to Iran and the Taliban; Trump likes Munir." },
          right: { head: "No", md:
            "The ties rest on personal chemistry; China remains Pakistan's main ally and arms supplier." } },
        { type: "section", head: "Why it matters", md:
          "Pakistan has turned from Washington's problem into its useful partner almost overnight. The test is whether it can keep both America and China close as their rivalry grows, without losing either." }
      ],
      takeaways: [
        "After the May 2025 India–Pakistan clash, Pakistan nominated Trump for the Nobel Peace Prize.",
        "A 2025 trade deal set a 19% US tariff on Pakistan, and a $500 million minerals deal followed.",
        "Pakistan mediated between the US and Iran in 2026, deepening ties that alarm India."
      ],
      check: { q: "What did Pakistan do after Trump claimed credit for the May 2025 ceasefire?",
        choices: ["Rejected his role", "Nominated him for the Nobel Peace Prize", "Recalled its ambassador"], answer: 1,
        explain: "India denied US mediation; Pakistan thanked Trump and nominated him." },
      sources: [
        { title: "Pakistan says it wins US tariff deal; Trump cites oil reserves pact", publisher: "NBC News (Reuters)", url: "https://www.nbcnews.com/world/asia/pakistan-says-wins-us-tariff-deal-trump-cites-oil-reserves-pact-rcna222159", date: "2025-07-31" },
        { title: "US metals company signs $500m MoU with Pakistan on critical minerals", publisher: "Dawn", url: "https://www.dawn.com/news/1940515", date: "2025-09-08" },
        { title: "Shehbaz Sharif, Asim Munir meet Trump at White House", publisher: "Aaj English TV", url: "https://english.aaj.tv/news/330436480/shehbaz-sharif-asim-munir-meet-trump-at-white-house", date: "2025-09-25" },
        { title: "Pakistan hit with 19pc tariff as Trump targets dozens of countries with new duties", publisher: "The Express Tribune", url: "https://tribune.com.pk/story/2559036/pakistan-hit-with-19pc-tariff-as-trump-targets-dozens-of-countries-with-new-duties", date: "2025-08" }
      ]
    }
  ]
});
