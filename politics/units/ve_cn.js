/* ============================================================
   Relationship — Venezuela & China 🇻🇪🇨🇳
   Chávez's courtship of Beijing, satellites and weapons; about
   $60 billion lent against oil, and the arrears that followed;
   and a China that lost its partner overnight when US forces
   seized Maduro in January 2026.
   The raid is in ve-5, the oil deals with the US in ve-6.
   Research note and sources: tools/research/ve_cn.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ve_cn", {
  id: "ve_cn",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ve_cn-1", kind: "relation", asOf: "2026-09-30",
      title: "Chávez's new friend",
      dek: "Hugo Chávez flew to Beijing in his first year as president, looking for a partner that would help him stand up to Washington. China brought money, satellites and weapons, but it always cared more about business than revolution.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve_cn/ve_cn-1-hero.webp",
          alt: "Illustration of a rocket lifting off from a launch pad in mountains, trailing fire and smoke.",
          caption: "China launched satellites for Venezuela, part of a partnership that went far beyond oil.",
          credit: "Illustration — not a photograph",
          prompt: "A white space rocket lifting off from a launch tower in green mountains at dawn, bright flame and billowing smoke, distant control buildings, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Building a partnership", items: [
          ["1999", "Chávez visits Beijing in his first year in office"],
          ["2001", "Jiang Zemin visits Caracas; a high-level commission is set up"],
          ["2007", "The first Chinese oil-backed loan fund"],
          ["2008", "Venezuela orders Chinese K-8 jets; China launches its first satellite"],
          ["2012", "China launches Venezuela's first Earth-observation satellite"],
          ["2013–14", "Chinese armoured vehicles bought, and used against protests"]
        ] },
        { type: "section", head: "Looking east", md:
          "Hugo Chávez came to power in 1999 (see [[lesson:ve-3]]) promising a 'Bolivarian revolution' and a world no longer run from Washington. Venezuela sold most of its oil to the United States, and Chávez wanted other customers and friends. That same year he made his first trip to Beijing, where he and President Jiang Zemin signed a string of cooperation agreements. Jiang visited Caracas in April 2001, and the two sides set up a high-level commission to steer the relationship." },
        { type: "section", head: "Satellites and weapons", md:
          "China became Venezuela's partner in space. A Chinese rocket launched Venezuela's first communications satellite in 2008, and in 2012 China launched VRSS-1, an Earth-observation satellite built by a Chinese state company. When the United States banned arms sales to Venezuela in 2006, Caracas turned to Russia and China. In 2008 it announced the purchase of 18 Chinese K-8 jet trainers, and from 2013 it bought hundreds of Chinese VN-4 armoured vehicles, which the National Guard used against street protests in 2014." },
        { type: "section", head: "Business, not revolution", md:
          "Chávez spoke of socialist brotherhood, but Beijing kept its distance from his fiery politics. China wanted oil, a market for its goods and contracts for its companies. Chinese firms built housing, railways and factories, though many projects were left unfinished. For China, Venezuela was one of many partners in a campaign for resources and influence across Latin America, not a revolutionary cause." },
        { type: "section", head: "Tools of control", md:
          "Critics say China also helped the government watch its people. Reuters reported in 2018 that the Chinese telecoms company ZTE helped build Venezuela's 'homeland card', an ID card linked to food handouts and state benefits that opponents said was used to reward loyalty. The government said the card simply made social programmes fairer." },
        { type: "section", head: "From Chávez to Maduro", md:
          "Chávez died in March 2013, and his chosen successor, Nicolás Maduro, leaned on China even more as the economy collapsed and Western doors closed. He visited Beijing several times, and during a state visit in September 2023 the two governments upgraded their ties to an 'all-weather strategic partnership', a label China gives only to its closest friends. China also backed Maduro at the UN, opposing Western efforts to recognise the opposition's claim to power in 2019." },
        { type: "compare", head: "What each wanted",
          left: { head: "Venezuela", md:
            "A powerful friend that would buy oil, lend money and sell weapons without lectures about democracy." },
          right: { head: "China", md:
            "Oil, contracts for its companies and a foothold in America's backyard." } },
        { type: "section", head: "Why it matters", md:
          "Venezuela became China's closest partner in South America. That gave Beijing influence, and made it a target when Washington decided to act." }
      ],
      takeaways: [
        "Chávez visited Beijing in his first year in office, 1999, looking for a partner against US influence.",
        "China launched Venezuelan satellites and sold it jets and armoured vehicles after a 2006 US arms ban.",
        "China's interest was mainly oil and business, not Chávez's revolution."
      ],
      check: { q: "Why did Venezuela turn to China and Russia for weapons?",
        choices: ["They were cheaper than local ones", "The United States banned arms sales to Venezuela in 2006", "NATO asked them to"], answer: 1,
        explain: "After the US ban, Venezuela bought Russian fighters and Chinese jets and armoured vehicles." },
      sources: [
        { title: "China-Venezuela Relations in the Twenty-First Century: From Overconfidence to Uncertainty", publisher: "US Institute of Peace", url: "https://www.usip.org/sites/default/files/2020-09/20200924-sr_484-china-venezuela_relations_in_the_twenty-first_century_from_overconfidence_to_uncertainty-sr.pdf", date: "2020-09-24" },
        { title: "Chinese Long March 2D launches Venezuela's VRSS-1", publisher: "NASASpaceFlight.com", url: "https://www.nasaspaceflight.com/2012/09/chinese-long-march-2d-launches-vrss-1/", date: "2012-09" },
        { title: "Venezuela Uses Chinese Weapons in Crackdown", publisher: "The Diplomat", url: "https://thediplomat.com/2014/03/venezuela-uses-chinese-weapons-in-crackdown/", date: "2014-03" },
        { title: "Venezuelan Air Force receives Hongdu K8-W jet trainers", publisher: "Airforce Technology", url: "https://www.airforce-technology.com/news/newsvenezuelan-air-force-receives-hongdu-k8-w-jet-trainers-4863335/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ve_cn-2", kind: "relation", asOf: "2026-09-30",
      title: "Oil for loans",
      dek: "China lent Venezuela about $60 billion, to be repaid in barrels of oil. Then oil prices crashed, production collapsed, and Beijing found itself one of the biggest creditors of a bankrupt state.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve_cn/ve_cn-2-hero.webp",
          alt: "Illustration of a large oil tanker loading at a jetty beside storage tanks on a tropical coast.",
          caption: "Chinese loans were repaid with shipments of Venezuelan oil.",
          credit: "Illustration — not a photograph",
          prompt: "A large crude oil tanker moored at a long jetty beside rows of white storage tanks on a tropical coast, palm trees and hazy hills behind, pipes and loading arms, late afternoon light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Boom and bust", items: [
          ["2007", "China Development Bank begins oil-backed lending"],
          ["2007–15", "Loan commitments grow to about $60 billion in 17 contracts"],
          ["2014", "Oil prices crash"],
          ["2016", "Venezuela starts falling behind on payments"],
          ["2019", "US sanctions on Venezuela's oil industry"],
          ["2025", "China takes about three-quarters of Venezuela's oil exports"]
        ] },
        { type: "section", head: "How the loans worked", md:
          "From 2007, China's policy banks, mainly the China Development Bank, lent Venezuela money in a special way. The loans were tied to contracts under which Venezuela's state oil company, PDVSA, sold oil to Chinese state firms, and the proceeds went to repay the bank. Over 17 contracts, commitments grew to about $60 billion by 2015, roughly half of all Chinese lending to Latin America. The money paid for power plants, housing, railways and imports, much of it handled by Chinese companies." },
        { type: "section", head: "The crash", md:
          "The deal assumed oil prices would stay high and Venezuela's output would hold. Neither did. Prices crashed in 2014, and years of mismanagement, corruption and underinvestment sent production into a steep decline (see [[lesson:ve-3]]). Venezuela had to ship more barrels to pay the same debt, and had fewer to sell for cash. From 2016 it fell behind. China agreed to grace periods but, after Maduro took over in 2013, offered no new credit lines, only lending to joint ventures in which Chinese firms produced oil themselves." },
        { type: "section", head: "Buyer of last resort", md:
          "When the United States sanctioned Venezuela's oil industry in 2019, most Western buyers left. China, mostly through small independent refiners, kept buying at a discount, often via ships that switched off their trackers and cargoes relabelled as coming from Malaysia. By 2025 China took about three-quarters of Venezuela's oil exports. That trade kept Maduro's government afloat, and paid down some of the debt." },
        { type: "section", head: "What's still owed", md:
          "Estimates of what Venezuela still owes China vary, from at least $10 billion to around $19 billion. Researchers at AidData, who study Chinese lending, say it is very unlikely to be repaid in full. Analysts say Venezuela's experience made Beijing more cautious about big oil-backed loans to risky governments elsewhere." },
        { type: "section", head: "Chinese oil companies", md:
          "China also invested directly. Its state oil company, CNPC, became a partner of PDVSA in joint ventures in the Orinoco belt, home to some of the world's largest reserves of heavy crude, such as Sinovensa. Venezuela's thick oil needs diluents and special equipment, and Chinese partners supplied some of both. Even so, output from these ventures fell along with the rest of the industry as money and maintenance ran short." },
        { type: "compare", head: "Two views of the loans",
          left: { head: "Partnership", md:
            "China provided money when Western lenders would not, and built projects Venezuela needed." },
          right: { head: "Trap", md:
            "The loans tied Venezuela's oil to China, funded waste and left a debt it cannot pay." } },
        { type: "section", head: "Why it matters", md:
          "Venezuela is China's biggest single oil-backed loan. Who controls Venezuela's oil now decides whether Beijing gets its money back." }
      ],
      takeaways: [
        "China lent Venezuela about $60 billion from 2007 to 2015 in 17 loans repaid with oil.",
        "Falling oil prices and output meant Venezuela fell behind on payments from 2016.",
        "Under US sanctions, China bought most of Venezuela's oil; perhaps $10–19 billion is still owed."
      ],
      check: { q: "How were China's loans to Venezuela meant to be repaid?",
        choices: ["In gold", "With shipments of oil", "In Chinese yuan from tourism"], answer: 1,
        explain: "PDVSA sold oil to Chinese state firms, and the proceeds repaid the China Development Bank." },
      sources: [
        { title: "How China's oil-backed lending in Venezuela fell into distress—and what might come next", publisher: "AidData", url: "https://www.aiddata.org/blog/how-chinas-oil-backed-lending-in-venezuela-fell-into-distress", date: "2026" },
        { title: "China-Venezuela Fact Sheet: A Short Primer on the Relationship", publisher: "US-China Economic and Security Review Commission", url: "https://www.uscc.gov/research/china-venezuela-fact-sheet-short-primer-relationship", date: "n.d." },
        { title: "US Action Threatens Venezuela-China Oil Flows, Debt Repayment, and Investments", publisher: "Center on Global Energy Policy, Columbia University", url: "https://www.energypolicy.columbia.edu/venezuela-china-oil-ties-severely-impacted-by-us-action/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ve_cn-3", kind: "relation", asOf: "2026-09-30",
      title: "Losing Venezuela",
      dek: "Hours after Maduro welcomed Xi Jinping's envoy, American commandos seized him. China protested loudly but could do little, and now must bargain with a Venezuela whose oil money runs through Washington.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve_cn/ve_cn-3-hero.webp",
          alt: "Illustration of a grand palace courtyard at night, lit by floodlights, with an empty reception room visible through tall windows.",
          caption: "Maduro met China's envoy at the Miraflores Palace hours before US forces captured him.",
          credit: "Illustration — not a photograph",
          prompt: "A grand colonial-style presidential palace courtyard at night lit by floodlights, tall windows showing an empty reception room with chairs arranged for a meeting, palm trees, helicopters as dark shapes in the distant sky, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "A partner lost", items: [
          ["16 Dec 2025", "Trump orders a blockade of sanctioned tankers"],
          ["2 Jan 2026", "Maduro receives China's special envoy Qiu Xiaoqi"],
          ["3 Jan 2026", "US forces seize Maduro in Caracas"],
          ["Jan 2026", "Beijing condemns the raid; banks told to report their exposure"],
          ["2026", "Oil revenue flows through a US-controlled account"],
          ["2026", "Venezuela's oil increasingly goes to the US"]
        ] },
        { type: "section", head: "The night of the raid", md:
          "On 2 January 2026 Maduro welcomed Qiu Xiaoqi, China's special representative for Latin America, to the Miraflores Palace, and thanked Xi Jinping for being like an 'older brother'. Hours later American special forces seized Maduro and his wife (see [[lesson:ve-5]]). China said it was 'deeply shocked'. Foreign Minister Wang Yi said no country could act as the world's policeman or its judge. But China sent no ships and imposed no penalties; it had no way to protect a partner on the far side of the world." },
        { type: "section", head: "Counting the cost", md:
          "Even before the raid, the American blockade of sanctioned tankers from December 2025 had choked Venezuela's shipments to China. Afterwards Beijing reportedly asked its banks to report their exposure and drew up plans to limit its losses. The new government under Delcy Rodríguez opened the oil sector to American companies, and a growing share of Venezuela's oil now goes to the United States (see [[lesson:ve-6]]). Washington said proceeds from Venezuelan oil sales would go into an account it controls, which gives it a say over which creditors get paid, and when." },
        { type: "section", head: "Bargaining over debt", md:
          "Venezuela owes more than $150 billion in defaulted debts and legal claims, and around a tenth is thought to be owed to China. Any restructuring will pit Chinese banks against American and European bondholders, with Washington holding the purse strings. Some analysts argue that Maduro's removal could benefit China in the long run, if a stable Venezuela recovers enough to pay its debts; others think Beijing will have to write off much of what it is owed." },
        { type: "section", head: "Lessons drawn", md:
          "The raid alarmed governments across the region that had welcomed Chinese money. On Chinese social media, some nationalist voices hailed it as a model for how China might one day deal with Taiwan (see [[lesson:cn_tw-1]]), an idea officials did not endorse. For Beijing, the clearest lesson was that economic ties do not buy protection in America's own hemisphere." },
        { type: "compare", head: "China's options",
          left: { head: "Adapt", md:
            "Work with the new government, keep buying some oil, and negotiate repayment through Washington." },
          right: { head: "Write off", md:
            "Accept that Venezuela is now in America's sphere and limit future lending in the region." } },
        { type: "section", head: "Why it matters", md:
          "Venezuela was China's biggest bet in Latin America. How it ends will shape Chinese lending, and American muscle, across the region, from Brazil and Argentina to Cuba." }
      ],
      takeaways: [
        "Maduro met China's special envoy on 2 January 2026, hours before US forces seized him.",
        "China condemned the raid but could not act; a US blockade and new deals shifted Venezuela's oil toward America.",
        "China is owed perhaps a tenth of Venezuela's $150 billion in debts, and Washington now controls the oil money."
      ],
      check: { q: "What did China do after US forces seized Maduro?",
        choices: ["Sent warships to Venezuela", "Condemned the raid but took no action to stop it", "Recognised the new government immediately and cancelled the debt"], answer: 1,
        explain: "Wang Yi said no country could be the world's policeman, but Beijing had no way to protect Maduro." },
      sources: [
        { title: "Maduro met Chinese envoy hours before US capture from Caracas as Beijing slams operation", publisher: "Fox News", url: "https://www.foxnews.com/world/maduro-met-chinese-envoy-hours-before-us-capture-from-caracas-beijing-slams-operation", date: "2026-01" },
        { title: "Maduro's capture is a blow to China. But on Chinese social media it's being hailed as a blueprint for Taiwan", publisher: "CNN", url: "https://www.cnn.com/2026/01/06/world/venezuela-china-taiwan-analysis-intl-hnk", date: "2026-01-06" },
        { title: "Beijing moves to cut losses in Venezuela after Maduro's capture", publisher: "Asia Times", url: "https://asiatimes.com/2026/01/beijing-moves-to-cut-losses-in-venezuela-after-maduros-capture/", date: "2026-01" },
        { title: "Why Maduro's removal could ultimately benefit China", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/dispatches/why-maduros-removal-could-ultimately-benefit-china/", date: "2026" },
        { title: "Analysis: US control of Venezuela oil risks debt restructuring showdown with China", publisher: "Reuters via Yahoo News", url: "https://www.yahoo.com/news/articles/analysis-us-control-venezuela-oil-060659714.html", date: "2026-01" }
      ]
    }
  ]
});
