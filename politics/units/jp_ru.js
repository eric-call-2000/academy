/* ============================================================
   Relationship — Japan & Russia 🇯🇵🇷🇺
   Two wars, four islands and no peace treaty since 1945;
   Shinzo Abe's long courtship of Vladimir Putin; and, after
   Ukraine, sanctions, Sakhalin gas and Putin's first visit to
   the disputed islands in August 2026.
   Research note and sources: tools/research/jp_ru.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("jp_ru", {
  id: "jp_ru",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "jp_ru-1", kind: "relation", asOf: "2026-09-30",
      title: "Two wars and four islands",
      dek: "Japan crushed Russia in 1905. Forty years later the Soviet Union seized four islands off Hokkaido in the last days of the Second World War, and the two countries have never signed a peace treaty.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_ru/jp_ru-1-hero.webp",
          alt: "Illustration of rugged volcanic islands rising from a cold grey sea under low clouds.",
          caption: "Japan calls the four islands the Northern Territories; Russia calls them the southern Kurils.",
          credit: "Illustration — not a photograph",
          prompt: "Rugged volcanic islands with a snow-capped cone rising from a cold grey-blue sea under low heavy clouds, rocky shoreline with drifting sea ice, a small fishing boat far away, bleak and beautiful northern mood, no people, no flags, no legible text." },
        { type: "timeline", head: "A border that moved", items: [
          ["1855", "Treaty of Shimoda: border drawn north of Etorofu"],
          ["1905", "Japan defeats Russia; wins southern Sakhalin"],
          ["8 Aug 1945", "The Soviet Union declares war on Japan"],
          ["18 Aug–2 Sep 1945", "Soviet forces seize the Kuril Islands"],
          ["1951", "The Soviet Union refuses to sign the San Francisco peace treaty"],
          ["1956", "Joint Declaration restores relations; two islands promised after a peace treaty"]
        ] },
        { type: "section", head: "Rivals in the north", md:
          "Japan and Russia first drew a border in the Treaty of Shimoda in 1855, which put the four southern islands, Etorofu, Kunashiri, Shikotan and the Habomai group, on Japan's side. As both empires expanded, they collided over Korea and Manchuria. In the war of 1904–05 Japan defeated Russia on land and destroyed its fleet at the Battle of Tsushima in May 1905, the first victory of an Asian power over a European one in modern times (see [[lesson:jp-9]]). The peace was signed at Portsmouth, New Hampshire, with the American president Theodore Roosevelt as mediator, which won him the Nobel Peace Prize. Japan won southern Sakhalin, and Russia's defeat helped set off its 1905 revolution." },
        { type: "section", head: "August 1945", md:
          "The Soviet Union and Japan signed a neutrality pact in 1941 and kept it for most of the Second World War. But on 8 August 1945, two days after Hiroshima (see [[lesson:jp-10]]), Stalin declared war and invaded Manchuria. Fighting went on after Japan announced its surrender: between 18 August and 2 September Soviet forces seized the whole Kuril chain and southern Sakhalin. According to the Japanese government, the 17,291 Japanese who lived on the four southern islands were displaced, most deported by 1949. Soviet settlers were brought in to replace them, and the islands have been run from Moscow ever since." },
        { type: "section", head: "Half a peace", md:
          "In 1951 Japan signed a peace treaty with the Allies in San Francisco, giving up its claim to 'the Kuril Islands', but the Soviet Union refused to sign. Japan says the four southern islands were never part of the Kurils. In 1956 the two countries restored diplomatic relations with a Joint Declaration, in which the Soviet Union agreed to hand over the two smallest, Shikotan and the Habomai islands, after a peace treaty was signed. Japan wanted all four, and under American pressure did not settle for two. So no treaty was signed, and none has been since." },
        { type: "compare", head: "Whose islands?",
          left: { head: "Tokyo", md:
            "The Northern Territories were always Japanese, never part of the Kurils, and were seized illegally after Japan surrendered." },
          right: { head: "Moscow", md:
            "The southern Kurils became Russian as a legitimate result of the Second World War, which Japan started." } },
        { type: "section", head: "Why it matters", md:
          "Eighty years after the war, Japan and Russia still have not formally made peace. The four islands, home to about 20,000 Russians, remain the main obstacle." }
      ],
      takeaways: [
        "Japan defeated Russia in 1905; the Soviet Union seized the Kuril Islands in August–September 1945.",
        "About 17,000 Japanese residents of the four southern islands were displaced.",
        "In 1956 Moscow promised two islands after a peace treaty, but no treaty has ever been signed."
      ],
      check: { q: "What did the 1956 Joint Declaration promise?",
        choices: ["All four islands would return to Japan at once", "Shikotan and the Habomai islands would be handed over after a peace treaty", "Japan would give up all claims"], answer: 1,
        explain: "The Soviet Union agreed to transfer the two smallest islands once a peace treaty was signed, but Japan wanted all four." },
      sources: [
        { title: "Japanese Territory: Northern Territories", publisher: "Ministry of Foreign Affairs of Japan", url: "https://www.mofa.go.jp/region/europe/russia/territory/edition01/moscow.html", date: "n.d." },
        { title: "The Southern Kuril Islands Dispute (PONARS Eurasia Policy Memo 226)", publisher: "PONARS Eurasia", url: "https://www.ponarseurasia.org/wp-content/uploads/attachments/pepm_226_Gorenburg_Sept2012-1.pdf", date: "2012-09" },
        { title: "The Details of Abe's Proposed Peace Treaty With Russia", publisher: "The Diplomat", url: "https://thediplomat.com/2019/03/the-details-of-abes-proposed-peace-treaty-with-russia/", date: "2019-03" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "jp_ru-2", kind: "relation", asOf: "2026-09-30",
      title: "Abe's courtship of Putin",
      dek: "Shinzo Abe met Vladimir Putin more than two dozen times, hoping to win back at least some islands and keep Russia from drifting towards China. He came away with nothing.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_ru/jp_ru-2-hero.webp",
          alt: "Illustration of a traditional Japanese hot-spring inn in winter, with snow on the roof and steam rising from an outdoor bath.",
          caption: "Abe hosted Putin at a hot-spring resort in his home town of Nagato in December 2016.",
          credit: "Illustration — not a photograph",
          prompt: "A traditional Japanese hot-spring inn in winter with snow on its curved tiled roofs, steam rising from an outdoor stone bath, pine trees and a small garden, lanterns glowing at dusk, calm and elegant mood, no people, no flags, no legible text." },
        { type: "timeline", head: "Hopes and failure", items: [
          ["Nov 2010", "Medvedev visits Kunashiri, the first Russian leader on the islands"],
          ["2013", "Abe begins a long series of meetings with Putin"],
          ["Dec 2016", "Putin visits Abe's home town, Nagato"],
          ["Nov 2018", "Singapore: talks to be based on the 1956 declaration"],
          ["Jan 2019", "Abe and Putin meet for the 25th time; no deal"],
          ["2020", "Russia's constitution bans giving up territory"]
        ] },
        { type: "section", head: "A personal diplomacy", md:
          "Hopes had risen once before. Mikhail Gorbachev became the first Soviet leader to visit Japan, in 1991, and admitted there was a dispute, and in 1993 Boris Yeltsin signed the Tokyo Declaration, which named all four islands as the subject of talks. Shinzo Abe, prime minister from 2012 to 2020 (see [[lesson:jp-3]]), made the islands a personal mission; his father, a foreign minister, had also tried. Abe believed only a deal between strong leaders could break the deadlock. He met Putin more than two dozen times, and even after Russia annexed Crimea in 2014 he kept sanctions light. In December 2016 he hosted Putin at a hot-spring resort in Nagato, his home town, and they agreed to explore joint economic projects on the islands, such as fish farming and tourism." },
        { type: "section", head: "Settling for two?", md:
          "In November 2018, meeting in Singapore, the two leaders agreed to speed up talks on the basis of the 1956 declaration. That was a big shift for Japan: the declaration mentions only Shikotan and the Habomai islands, which make up about 7% of the disputed land. Abe seemed ready to accept two islands first and leave Etorofu and Kunashiri, the largest, for later. Critics in Japan called it a sell-out. Russia, meanwhile, demanded guarantees that no American troops would ever be based on returned islands, and said Japan must first accept that they became Russian legally after the war." },
        { type: "section", head: "Nothing to show", md:
          "By their 25th meeting, in January 2019, there was still no progress. Russia kept building military bases on the islands, and in 2020 it changed its constitution to ban giving away any Russian territory, making a deal even harder. Abe resigned in 2020 for health reasons and was assassinated in 2022. His Russia policy is widely judged a failure: it did not win any islands, and it did not stop Russia growing closer to China, the other aim of his courtship. It did leave Japan more dependent on Russian energy, including gas from Sakhalin." },
        { type: "compare", head: "Was it worth trying?",
          left: { head: "Supporters", md:
            "Only personal diplomacy with Putin had any chance, and keeping Russia apart from China was worth the effort." },
          right: { head: "Critics", md:
            "Abe gave Putin legitimacy after Crimea, softened Japan's claims and got nothing in return." } },
        { type: "section", head: "Why it matters", md:
          "Abe's failure convinced many in Tokyo that Putin never intended to return any island. It shaped Japan's much tougher line after 2022." }
      ],
      takeaways: [
        "Abe met Putin more than two dozen times, hoping for a deal on the islands.",
        "In 2018 he agreed to base talks on the 1956 declaration, which promised only the two smallest islands.",
        "No deal came, and Russia's 2020 constitution banned giving away territory."
      ],
      check: { q: "What did Abe and Putin agree in Singapore in November 2018?",
        choices: ["To return all four islands", "To speed up talks based on the 1956 declaration", "To end all contact"], answer: 1,
        explain: "The 1956 declaration covered only Shikotan and the Habomais, so it signalled Japan might accept two islands first." },
      sources: [
        { title: "Abe's underperforming Russia policy faces growing political backlash", publisher: "East Asia Forum", url: "https://eastasiaforum.org/2019/03/13/abes-underperforming-russia-policy-faces-growing-political-backlash/", date: "2019-03-13" },
        { title: "The high price of a two-island deal", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/opinion/2018/11/16/commentary/japan-commentary/high-price-two-island-deal/", date: "2018-11-16" },
        { title: "Abe's 2016 Plan to Break the Deadlock in the Territorial Dispute with Russia", publisher: "Asia-Pacific Journal: Japan Focus", url: "https://apjjf.org/2016/04/brown", date: "2016" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "jp_ru-3", kind: "relation", asOf: "2026-09-30",
      title: "Sanctions, gas and a visit",
      dek: "After the invasion of Ukraine, Japan joined Western sanctions and Russia broke off peace talks. Japan still buys Russian gas, and in August 2026 Putin set foot on a disputed island for the first time.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_ru/jp_ru-3-hero.webp",
          alt: "Illustration of a liquefied natural gas tanker with large round tanks sailing through icy grey water.",
          caption: "Gas from Sakhalin-2 still supplies about a tenth of Japan's liquefied natural gas.",
          credit: "Illustration — not a photograph",
          prompt: "A liquefied natural gas tanker with four large white spherical tanks sailing through icy grey northern water, snowy coastal mountains behind, pale winter light, documentary style, no people, no logos, no flags, no legible text." },
        { type: "timeline", head: "A deep freeze", items: [
          ["Feb–Mar 2022", "Japan joins Western sanctions on Russia"],
          ["21 Mar 2022", "Russia halts peace treaty talks and visa-free visits"],
          ["May 2022", "Russia bans Sanae Takaichi and other Japanese from entry"],
          ["Oct 2025", "Takaichi tells Trump Japan needs Sakhalin gas"],
          ["13 Aug 2026", "Putin visits Etorofu (Iturup)"],
          ["Aug 2026", "Tokyo protests; new sanctions weighed"]
        ] },
        { type: "section", head: "Talks broken off", md:
          "When Russia invaded Ukraine in February 2022, Japan under Fumio Kishida joined Western sanctions far more firmly than it had after Crimea. It froze Russian central bank assets, restricted exports and sent Kyiv billions of dollars in financial aid and non-lethal equipment. In April 2022 it expelled eight Russian diplomats and trade officials. Russia's response came on 21 March 2022: it announced it would no longer negotiate a peace treaty with a country taking 'openly unfriendly positions', ended visa-free visits by former Japanese islanders and froze the joint economic projects Abe had championed. Kishida called the move 'completely unacceptable'. Russia and China have since held joint military exercises and bomber flights near Japan (see [[lesson:cn_ru-2]])." },
        { type: "section", head: "Gas Japan can't give up", md:
          "Japan has one big exception to its tough line: energy. Japanese firms Mitsui and Mitsubishi own stakes in the Sakhalin-2 project on Russia's Pacific island of Sakhalin, which supplies about 9% of Japan's liquefied natural gas, used to generate electricity. When Russia seized control of the project in 2022, Japan kept its stake to protect supplies. Prime Minister Sanae Takaichi (see [[lesson:jp-4]]) has long been a hawk on Russia, and Moscow banned her from entering the country in 2022. But when Donald Trump urged her in October 2025 to stop buying Russian energy, she told him Sakhalin was critical for Japan's energy security." },
        { type: "section", head: "Putin on Etorofu", md:
          "On 13 August 2026 Vladimir Putin visited Etorofu, which Russia calls Iturup, the largest of the four islands. It was his first visit to any of them in more than 25 years in power. He toured a fish plant, a hospital and a school, a message that Russia plans to stay and invest. Russian prime minister Dmitry Medvedev had visited the islands several times, but never Putin himself. Takaichi said the visit 'hurts the feelings of the Japanese people and is absolutely unacceptable', and Japan's foreign ministry summoned the Russian ambassador. The government said it was weighing further sanctions, but ruled out ending gas imports from Sakhalin, and critics at home called its response weak." },
        { type: "compare", head: "Sanctions or gas?",
          left: { head: "Hardliners", md:
            "Japan should cut Russian gas and stand with Ukraine and the West without exceptions." },
          right: { head: "Pragmatists", md:
            "Japan has few energy resources. Giving up Sakhalin gas would raise bills and hand the project to China." } },
        { type: "section", head: "Why it matters", md:
          "Japan faces Russia, China and North Korea as neighbours. How it balances sanctions, energy and the island claim shows the limits of a middle power's choices." }
      ],
      takeaways: [
        "Russia broke off peace treaty talks in March 2022 after Japan joined sanctions over Ukraine.",
        "Japan still buys gas from Sakhalin-2, about 9% of its LNG, despite US pressure.",
        "Putin made his first visit to a disputed island, Etorofu, on 13 August 2026."
      ],
      check: { q: "What did Putin do on 13 August 2026?",
        choices: ["Signed a peace treaty with Japan", "Visited Etorofu, one of the disputed islands, for the first time", "Cut off gas to Japan"], answer: 1,
        explain: "Tokyo called the visit 'absolutely unacceptable' and summoned Russia's ambassador but kept buying Sakhalin gas." },
      sources: [
        { title: "Japan opposes Russian withdrawal from World War II peace treaty talks over sanctions", publisher: "CNN", url: "https://www.cnn.com/2022/03/21/asia/russia-halts-japan-war-peace-talks-intl-hnk", date: "2022-03-21" },
        { title: "Japan Faces Hard Choices in Weaning off Russian Energy", publisher: "The Diplomat", url: "https://thediplomat.com/2026/09/japan-faces-hard-choices-in-weaning-off-russian-energy", date: "2026-09" },
        { title: "Japan condemns Putin's visit to disputed islands seized in World War Two", publisher: "CNN", url: "https://www.cnn.com/2026/08/13/asia/putin-kuril-islands-japan-intl", date: "2026-08-13" },
        { title: "Putin's Visit to Disputed Island Exacerbates Japan-Russia Tensions", publisher: "The Diplomat", url: "https://thediplomat.com/2026/08/putins-visit-to-disputed-island-exacerbates-japan-russia-tensions/", date: "2026-08" }
      ]
    }
  ]
});
