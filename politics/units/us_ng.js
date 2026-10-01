/* ============================================================
   Relationship — United States & Nigeria 🇺🇸🇳🇬
   An American-style constitution, oil and the Abacha years;
   Boko Haram, Chibok and a quarrel over arms and human rights;
   and Trump's religious-freedom charge, Christmas missiles, a
   travel ban and tariffs. Nigeria's security crisis is in ng-6.
   Research note and sources: tools/research/us_ng.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("us_ng", {
  id: "us_ng",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_ng-1", kind: "relation", asOf: "2026-10-01",
      title: "Oil and an American-style constitution",
      dek: "Nigeria copied America's presidential system in 1979 and for decades was one of its biggest oil suppliers. Washington turned on the military dictator Sani Abacha after he hanged a writer in 1995.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ng/us_ng-1-hero.webp",
          alt: "Illustration of an oil platform and flare in a mangrove-lined river delta at sunset.",
          caption: "Nigeria was one of America's top five sources of crude oil for almost four decades.",
          credit: "AI illustration — not a photograph",
          prompt: "An oil platform with a burning gas flare in a wide river delta lined with green mangroves at sunset, small wooden boats on the water, orange and purple sky, documentary painting style, no people close up, no logos, no flags, no legible text." },
        { type: "timeline", head: "Partners and critics", items: [
          ["1960", "Nigeria becomes independent"],
          ["1973–2011", "Nigeria among the top five sources of US crude in most years"],
          ["Apr 1978", "Carter makes the first US state visit to sub-Saharan Africa, in Lagos"],
          ["1979", "Nigeria adopts an American-style presidential constitution"],
          ["Nov 1995", "Ken Saro-Wiwa hanged; the US recalls its ambassador"],
          ["1999", "Return to civilian rule"]
        ] },
        { type: "section", head: "Independence and the Cold War", md:
          "Nigeria became independent from Britain in 1960 (see [[lesson:ng-9]]) as Africa's most populous country, and Washington saw it as a pro-Western anchor. During the Biafran civil war of 1967–70 (see [[lesson:ng-10]]) the United States stayed officially neutral and refused to sell arms to either side, while Americans raised money for starving Biafrans. Nigeria, angry at the lack of support, bought weapons from Britain and the Soviet Union." },
        { type: "section", head: "A presidential republic", md:
          "In April 1978 Jimmy Carter visited Lagos, the first state visit by an American president to sub-Saharan Africa, praising Nigeria's planned return to civilian rule. The 1979 constitution replaced the British-style parliamentary system with an American-style one: an executive president, a Senate and a House of Representatives, and a federal structure of states (see [[lesson:ng-2]]). The model survives in today's constitution." },
        { type: "section", head: "Oil", md:
          "Nigeria's light, sweet crude is easy to refine into petrol, and from 1973 to 2011 Nigeria was among the top five sources of American crude imports in almost every year. Chevron and ExxonMobil became big producers in the Niger Delta (see [[lesson:ng-12]]). Then the American shale boom changed everything: from 2011 the US produced plenty of light oil of its own and needed far less from Nigeria. By 2024 Nigeria was only ninth among America's suppliers, and the US has even sold oil to Nigeria." },
        { type: "section", head: "Abacha", md:
          "In 1993 the military annulled an election and General Sani Abacha seized power (see [[lesson:ng-11]]). In November 1995 his regime hanged the writer Ken Saro-Wiwa and eight other activists who had campaigned against oil pollution in Ogoniland. The United States recalled its ambassador, banned arms sales and imposed visa restrictions. Abacha died in 1998, and democracy returned in 1999; Washington welcomed President Olusegun Obasanjo as a partner." },
        { type: "section", head: "Regional policeman", md:
          "In the 1990s Nigeria led West African peacekeeping forces, known as ECOMOG, into the civil wars in Liberia and Sierra Leone, sending thousands of troops and bearing most of the cost. Washington, unwilling to send its own soldiers after Somalia, gave logistical support and came to see Nigeria as Africa's indispensable stabiliser, a role it still claims through the regional bloc ECOWAS." },
        { type: "compare", head: "What each wanted",
          left: { head: "America", md:
            "Oil, a stable democratic anchor in Africa and help with peacekeeping." },
          right: { head: "Nigeria", md:
            "Investment, respect as Africa's giant and less lecturing on human rights." } },
        { type: "section", head: "Why it matters", md:
          "Oil once made Nigeria vital to America. Shale removed that link, leaving security, migration and religion to dominate the relationship." }
      ],
      takeaways: [
        "Nigeria adopted an American-style presidential constitution in 1979.",
        "Nigeria was one of America's top five oil suppliers from 1973 to 2011, until shale cut demand.",
        "The US recalled its ambassador and imposed sanctions after Abacha hanged Ken Saro-Wiwa in 1995."
      ],
      check: { q: "Why did US oil imports from Nigeria fall after 2011?",
        choices: ["Nigeria stopped producing oil", "The US shale boom produced plenty of similar light oil at home", "A US embargo"], answer: 1,
        explain: "By 2024 Nigeria was only ninth among America's suppliers." },
      sources: [
        { title: "In February and March, the United States was a net exporter of crude oil to Nigeria", publisher: "US Energy Information Administration", url: "https://www.eia.gov/todayinenergy/detail.php?id=65786", date: "2025" },
        { title: "Nigeria: Overview and U.S. Policy", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/R47052", date: "n.d." },
        { title: "Boko Haram in Nigeria in 2017 (NSC simulation background)", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/education/teach/simulations/boko-haram-nigeria-2017-nsc", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_ng-2", kind: "relation", asOf: "2026-10-01",
      title: "Chibok, arms and human rights",
      dek: "When Boko Haram kidnapped the Chibok schoolgirls, Michelle Obama led a global campaign. But US human rights laws limited arms sales to Nigeria's army, and Abuja accused Washington of tying its hands.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ng/us_ng-2-hero.webp",
          alt: "Illustration of an empty school classroom with overturned desks and scattered exercise books, sunlight through broken windows.",
          caption: "Boko Haram abducted 276 schoolgirls from Chibok in April 2014.",
          credit: "AI illustration — not a photograph",
          prompt: "An empty rural school classroom with overturned wooden desks and scattered exercise books, sunlight streaming through broken windows, dusty floor, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Partners against terror", items: [
          ["Apr 2014", "Boko Haram abducts 276 schoolgirls at Chibok"],
          ["May 2014", "Michelle Obama joins #BringBackOurGirls"],
          ["2014", "Washington blocks a helicopter sale; Nigeria ends a US training programme"],
          ["Jan 2017", "Nigerian jet bombs a refugee camp at Rann"],
          ["Aug 2017", "US notifies Congress of a $593 million Super Tucano sale"],
          ["Apr 2018", "Buhari at the White House"]
        ] },
        { type: "section", head: "Chibok", md:
          "In April 2014 Boko Haram fighters stormed a girls' secondary school in Chibok in north-east Nigeria and abducted 276 students. The hashtag #BringBackOurGirls spread worldwide, and First Lady Michelle Obama posted a photo with a sign bearing it. The US sent surveillance aircraft and advisers to help find them. Many girls escaped or were freed over the following years, some in exchanges, but dozens remain missing." },
        { type: "section", head: "The Leahy law", md:
          "American law, the Leahy amendments, bars US military aid to foreign units credibly accused of gross human rights abuses. Nigeria's army was accused of extrajudicial killings and torture in the war against Boko Haram, so Washington refused to sell some weapons, including attack helicopters. President Goodluck Jonathan's government complained that America was hampering its fight, and in late 2014 Nigeria cancelled a US training programme for an army battalion." },
        { type: "section", head: "Super Tucanos", md:
          "The Obama administration was about to approve the sale of light attack aircraft when, on 17 January 2017, a Nigerian air force jet mistakenly bombed a camp for displaced people at Rann, killing more than 100 people. The sale was paused. The Trump administration went ahead, notifying Congress in August 2017 of a $593 million sale of 12 A-29 Super Tucanos. In April 2018 Muhammadu Buhari became the first sub-Saharan African leader Trump received at the White House." },
        { type: "section", head: "The diaspora", md:
          "Hundreds of thousands of Nigerians live in the United States, and Nigerian-Americans are among the country's most educated immigrant groups, prominent in medicine, engineering and business. Nigerian music and films are popular in America, and remittances home are a lifeline for families. Visa and travel rules are therefore a sensitive issue for Nigeria's middle class." },
        { type: "section", head: "#EndSARS", md:
          "In October 2020 young Nigerians protested across the country against SARS, a police unit notorious for abuses. On 20 October soldiers opened fire on protesters at the Lekki toll gate in Lagos, killing several people, according to a later judicial panel. American politicians condemned the shooting, and in 2021 members of Congress held up a sale of attack helicopters to Nigeria over human rights concerns. The sale was approved in 2022, showing again how Washington swings between security and rights." },
        { type: "compare", head: "The arms dilemma",
          left: { head: "Sell", md:
            "Nigeria needs modern weapons to defeat jihadists; refusing pushes it toward Russia and China." },
          right: { head: "Restrict", md:
            "Weapons used by abusive units fuel grievances and help jihadist recruitment." } },
        { type: "section", head: "Why it matters", md:
          "The tension between fighting terrorism and protecting civilians has shaped every American administration's dealings with Nigeria's military." }
      ],
      takeaways: [
        "Boko Haram's 2014 Chibok kidnapping drew a global campaign joined by Michelle Obama.",
        "US human rights law limited arms sales to Nigeria's army, angering Abuja.",
        "The Trump administration approved a $593 million Super Tucano sale in 2017."
      ],
      check: { q: "What does the US Leahy law do?",
        choices: ["Bans oil imports from Africa", "Bars military aid to foreign units credibly accused of gross human rights abuses", "Requires elections before arms sales"], answer: 1,
        explain: "It limited what weapons Washington would supply to Nigeria's army." },
      sources: [
        { title: "Nigerian schoolgirls: US first lady Michelle Obama 'outraged' over Boko Haram kidnapping", publisher: "ABC News (Australia)", url: "https://www.abc.net.au/news/2014-05-10/us-first-lady-michelle-obama-outraged-nigeria-kidnapped-girls/5444558", date: "2014-05-10" },
        { title: "Bring Back Our Girls: A Brief History of What We Know about the Missing Chibok Women", publisher: "Newsweek", url: "https://www.newsweek.com/chibok-girls-boko-haram-583584", date: "2017" },
        { title: "Nigeria Sale Proposed Despite Concerns", publisher: "Arms Control Association", url: "https://www.armscontrol.org/act/2017-09/news-briefs/nigeria-sale-proposed-despite-concerns", date: "2017-09" },
        { title: "Pentagon notifies U.S. Congress over sale of 12 Super Tucano A-29 to Nigeria", publisher: "Vanguard", url: "https://www.vanguardngr.com/2017/08/pentagon-notifies-u-s-congress-sale-12-super-tucano-29-bombs-rockets-worth-593-million-nigeria/", date: "2017-08" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_ng-3", kind: "relation", asOf: "2026-10-01",
      title: "Christmas missiles",
      dek: "Trump accused Nigeria of failing to protect Christians and fired missiles at jihadist camps on Christmas Day 2025. A partial travel ban and tariffs followed, and Abuja is trying to keep cooperation alive.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ng/us_ng-3-hero.webp",
          alt: "Illustration of a dry savannah landscape at night with a distant glow of an explosion on the horizon.",
          caption: "US missiles struck targets in Sokoto State on Christmas night 2025.",
          credit: "AI illustration — not a photograph",
          prompt: "A dry savannah landscape at night with scattered acacia trees and mud-brick villages, a distant orange glow on the horizon under a starry sky, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Pressure and partnership", items: [
          ["Aug 2025", "15% US tariff on Nigerian goods"],
          ["Oct 2025", "Nigeria named a 'Country of Particular Concern'"],
          ["16 Dec 2025", "Partial travel ban on Nigerians announced"],
          ["25 Dec 2025", "US strikes in Sokoto State, coordinated with Nigeria"],
          ["Jan 2026", "Travel ban takes effect; Trump warns of more strikes"],
          ["Jan 2027", "Nigeria's next general election"]
        ] },
        { type: "section", head: "'Existential threat'", md:
          "In late October 2025 Donald Trump designated Nigeria a 'Country of Particular Concern' for religious freedom, saying Christians faced an 'existential threat' there, and threatened to go in 'guns-a-blazing' if killings did not stop. American evangelicals and some members of Congress had long campaigned on attacks on Christians in Nigeria. Nigeria's government rejected claims of genocide, saying jihadists and bandits kill Muslims and Christians alike, a view shared by many researchers (see [[lesson:ng-6]])." },
        { type: "section", head: "Christmas Day", md:
          "On Christmas night 2025 US Africa Command launched strikes on what it called Islamic State camps in Sokoto State in the north-west, saying the operation was coordinated with Nigeria; Trump called it a 'Christmas present'. Nigeria described it as a joint operation. Some local residents and analysts questioned whether the targeted areas had an Islamic State presence. AFRICOM later said the US intended to get 'a lot more aggressive' in Africa, and in January 2026 Trump warned of more strikes." },
        { type: "section", head: "Travel ban and tariffs", md:
          "On 16 December 2025 Trump signed a proclamation putting Nigeria under partial travel restrictions from 1 January 2026, citing security concerns and high visa overstay rates. Nigerians can no longer get new tourist, business, student or exchange visas, a heavy blow to students and families; travel between the two countries has dropped. Since August 2025 Nigerian exports to the US have also faced a 15% tariff." },
        { type: "section", head: "Abuja's balancing act", md:
          "President Bola Tinubu (see [[lesson:ng-4]]) has chosen cooperation over confrontation, presenting the strikes as joint action and replacing his service chiefs. Nigeria also wants US help against jihadists and bandits, and American support for its economic reforms. But the religious-persecution narrative angers many Nigerians, and an alleged coup plot (see [[lesson:ng-7]]) and a January 2027 election make the government wary of looking weak before Washington." },
        { type: "section", head: "China in the wings", md:
          "Washington also worries about Beijing. Chinese firms have built Nigeria's new railways and the deep-sea port at Lekki (see [[lesson:ng_cn-2]]), and Chinese loans and goods are everywhere. Nigerian officials say they welcome partners from all sides, and some warn that tariffs and travel bans make China look the more reliable friend." },
        { type: "compare", head: "Two views of Trump's pressure",
          left: { head: "Supporters", md:
            "Nigeria has failed to protect Christians; American pressure and strikes force action." },
          right: { head: "Critics", md:
            "It oversimplifies complex conflicts, inflames religious tension and punishes ordinary Nigerians." } },
        { type: "section", head: "Why it matters", md:
          "Nigeria is Africa's most populous country. How Washington handles it will shape American influence across a continent where China and Russia are competing hard." }
      ],
      takeaways: [
        "Trump named Nigeria a 'Country of Particular Concern' in 2025 over attacks on Christians.",
        "US forces struck targets in Sokoto State on Christmas Day 2025, in coordination with Nigeria.",
        "A partial US travel ban on Nigerians took effect in January 2026; Nigerian goods face a 15% tariff."
      ],
      check: { q: "What did the US do in Nigeria on Christmas Day 2025?",
        choices: ["Opened a new embassy", "Launched strikes on what it called Islamic State camps in Sokoto State", "Signed a trade deal"], answer: 1,
        explain: "AFRICOM said the strikes were coordinated with the Nigerian government." },
      sources: [
        { title: "US airstrikes were a constrained choice for Nigeria", publisher: "Institute for Security Studies", url: "https://issafrica.org/iss-today/us-airstrikes-were-a-constrained-choice-for-nigeria", date: "2026-02" },
        { title: "'There is no ISIS here': Nigerians in Sokoto state question U.S. airstrikes", publisher: "Prism", url: "https://prismreports.org/2026/01/14/there-is-no-isis-here-nigerians-in-sokoto-state-question-u-s-airstrikes/", date: "2026-01-14" },
        { title: "US imposes partial travel ban on Nigerians, suspends entry for several visa categories", publisher: "Premium Times", url: "https://www.premiumtimesng.com/foreign/world-foreign/843621-updated-us-imposes-partial-travel-ban-on-nigerians-suspends-entry-for-several-visa-categories-2.html", date: "2025-12-16" },
        { title: "Trump raises tariffs on Nigerian imports to 15% in fresh round of trade bout", publisher: "BusinessDay", url: "https://businessday.ng/news/article/trump-raises-tariffs-on-nigerian-imports-to-15-in-fresh-round-of-trade-bout/", date: "2025-08" },
        { title: "Trump Warns of More U.S. Strikes in Nigeria", publisher: "AllAfrica", url: "https://allafrica.com/stories/202601100179.html", date: "2026-01" }
      ]
    }
  ]
});
