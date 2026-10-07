/* Changing Live Systems — Unit 1: Two versions at once */
(function () {
  window.CODELAB.addUnit("change", {
    id: "change-u1",
    title: "Two versions at once",
    icon: "🔀",
    blurb: "A deploy isn't a moment, it's a stretch of time when old and new code serve the same users against the same database, and old phone apps keep calling for months. Why that makes some changes safe and others an outage.",
    cheat: [
      { h: "During a rolling deploy", lang: "text", code:
"instance 1   v1 → v2\n" +
"instance 2   v1 ──────→ v2\n" +
"instance 3   v1 ───────────→ v2\n" +
"database     one schema, shared by both",
        note: "For minutes (or hours, or forever if you roll back), v1 and v2 read and write the same rows." },
      { h: "Safe and unsafe changes", lang: "text", code:
"usually safe     add a nullable column, add a table,\n" +
"                 add an optional field, add an endpoint\n" +
"breaks someone   rename, drop, change a type or meaning,\n" +
"                 make something required that wasn't",
        note: "Adding is safe because nothing old depends on what didn't exist. Renaming is a drop plus an add." },
      { h: "Compatibility in both directions", lang: "text", code:
"backward   new code works with old data and old clients\n" +
"forward    old code works with new data (rollback!)",
        note: "A rollback puts v1 back on a database v2 has already written to." }
    ],
    lessons: [

      {
        id: "change-u1-1",
        title: "A deploy is a stretch of time",
        kind: "concept", xp: 15, mins: 9,
        screens: [
          { read: "On a laptop, \"deploy\" means: stop the app, start the new one. In production nobody stops. A **rolling deploy** replaces servers one at a time while the rest keep serving, so for several minutes some users hit the old version and some the new one.\n\nBoth versions talk to **one** database. Whatever schema it has during those minutes has to work for both.",
            ask: { type: "pick", transfer: true,
              q: "Three servers run v1. A rolling deploy of v2 has just replaced the first one. Which code is serving users right now?",
              choices: [
                "Only v2: a deploy switches everything at once",
                "Only v1, until the deploy finishes",
                "v1 and v2 both, against the same database",
                "v2, against a copy of the database made for it"
              ],
              answer: 2,
              why: [
                "That's a stop-and-start deploy. Rolling deploys never stop serving.",
                "The replaced server is already taking traffic.",
                "Right. Two servers on v1, one on v2, one database.",
                "There's one database. Both versions read and write the same rows."
              ] } },
          { read: "The overlap doesn't end with the deploy:\n\n- **Rollbacks.** If v2 misbehaves you put v1 back, on a database v2 has already written to.\n- **Old clients.** A phone app updates when its owner feels like it. Some people run last year's version, calling your API as it was then.\n- **Old data.** Rows written years ago, queued jobs, caches and events all still have the old shape.\n\nSo every change needs two kinds of compatibility: **backward** (new code handles old data and old clients) and **forward** (old code handles what new code writes).",
            ask: { type: "pick", transfer: true,
              q: "v2 starts writing dates as \"2026-10-05\" instead of a number of milliseconds. v2 has a bug, so you roll back to v1. What happens?",
              choices: [
                "Nothing: a rollback restores the database too",
                "v1 meets rows in a format it has never seen, and may crash on them",
                "v1 converts the new rows back automatically",
                "The rollback refuses to run until the rows are converted"
              ],
              answer: 1,
              why: [
                "Rolling back code doesn't roll back data.",
                "Right. That's forward compatibility: v1 had to cope with what v2 wrote, and it can't.",
                "v1 was written before the new format existed; it can't know how.",
                "Deploy tools know nothing about your rows. That's your job."
              ] } },
          { read: "The practical rule: **never ship a change that needs two things to happen at the same instant.** \"Rename the column and deploy the code that uses the new name\" needs exactly that, and there's no such instant: during the deploy, half the servers still use the old name.\n\nInstead, each step has to be safe with **whatever else might be running** at that moment.",
            ask: { type: "order",
              q: "A migration renames `users.name` to `users.full_name`, then v2 (which reads `full_name`) rolls out. Put what happens in order.",
              lines: ["The migration renames the column", "v1 servers query users.name and get errors", "v2 rolls out server by server", "Errors stop once the last v1 server is replaced"],
              why: "Between the rename and the end of the deploy, every request to a v1 server fails. That window is the outage." } }
        ]
      },

      {
        id: "change-u1-2",
        title: "Which changes are safe",
        kind: "concept", xp: 15, mins: 9,
        screens: [
          { read: "A change is **additive** when it only adds: a nullable column, a new table, a new optional field in an API response, a new endpoint. Old code never mentions the new thing, so it can't break on it.\n\nA change is **destructive** when something old depended on what it removes or alters: dropping or renaming a column, changing a column's type, making an optional field required, changing what a value means.\n\nAdditive changes can ship any time. Destructive ones have to wait until nothing depends on the old thing, and you have to be able to prove that.",
            ask: { type: "pick", transfer: true,
              q: "Which of these can ship while v1 is still running, without any coordination?",
              choices: [
                "Renaming orders.total to orders.amount",
                "Adding a nullable orders.gift_note column",
                "Changing orders.total from dollars to cents",
                "Making orders.coupon required"
              ],
              answer: 1,
              why: [
                "A rename is a drop of the old name, and v1 still uses it.",
                "Right. v1 never mentions gift_note, and inserts that leave it out still work.",
                "Same column, new meaning: v1 reads 1999 and charges $1,999.",
                "v1 inserts orders without a coupon, and those inserts would start failing."
              ] } },
          { read: "Some changes look additive and aren't:\n\n- **A NOT NULL column without a default.** v1's inserts don't mention it, so they fail.\n- **A new required request field.** Old clients don't send it.\n- **A new enum value.** An old client with a `switch` over `\"card\" | \"bank\"` meets `\"wallet\"` and does something odd.\n\nAsk of every change: **what does the oldest thing still running do when it meets this?**",
            ask: { type: "pick", transfer: true,
              q: "You add `phone TEXT NOT NULL DEFAULT ''` to users. Does v1's insert, which doesn't mention phone, still work?",
              choices: [
                "No: NOT NULL columns always need a value from the insert",
                "Yes: the default fills it in",
                "Only if v1 is redeployed after the migration",
                "No: the migration fails on the existing rows"
              ],
              answer: 1,
              why: [
                "Only when there's no default. Here there is one.",
                "Right. The default makes it safe for old writers. Without it, every v1 signup would fail.",
                "v1's code doesn't change, and doesn't need to.",
                "Existing rows get the default too (and in Postgres 11+ that's cheap)."
              ] } },
          { read: "Back to the question that matters: **what does the oldest thing still running do?** Here's a change to an API response, and the client code that's been in the app store for a year.",
            ask: { type: "predict",
              q: "v2 of the API sends `{ \"price\": { \"amount\": 1999, \"currency\": \"usd\" } }` where v1 sent `{ \"price\": 19.99 }`. What does last year's app show?",
              code: "const res = { price: { amount: 1999, currency: \"usd\" } };\nconsole.log(\"$\" + res.price);",
              run: true,
              answer: "$[object Object]",
              why: "Changing a field's type is destructive. The safe version adds a new field (price_v2, or amount and currency beside price) and keeps price as it was." } }
        ]
      },

      {
        id: "change-u1-quiz",
        title: "Unit 1 quiz: Two versions at once",
        kind: "quiz", xp: 10,
        brief: "Rolling deploys, rollbacks, old clients, and additive vs destructive changes. 80% to pass.",
        questions: [
          { q: "During a rolling deploy, what runs?",
            choices: ["Only the new version, since the deploy switches every server at once", "The old and new versions, against one database", "Only the old version until it ends", "Each version against its own database"],
            answer: 1, explain: "Servers are replaced one at a time, so both versions serve traffic at once." },
          { q: "What does forward compatibility mean here?",
            choices: ["New code handles old data", "The API has a version number in the URL", "Old code handles what new code wrote", "The database is backed up first"],
            answer: 2, explain: "It's what makes a rollback safe: v1 has to cope with rows v2 wrote." },
          { q: "Which change is additive?",
            choices: ["Renaming a column", "Adding a nullable column", "Changing a column's type", "Making a field required"],
            answer: 1, explain: "Old code never mentions the new column, so it can't break on it." },
          { q: "Why is renaming a column in one migration an outage?",
            choices: ["Renames always lock the whole table for hours while every row is rewritten", "Renames lose the data", "Renames break foreign keys", "Old servers still use the old name until the deploy ends"],
            answer: 3, explain: "There's no instant where the schema and every server change together." },
          { q: "You add a column NOT NULL with no default. What breaks?",
            choices: ["Old code's inserts, which don't mention it", "Nothing", "Only reads of the new column, because inserts skip columns they don't name", "Only the backup"],
            answer: 0, explain: "Old writers don't send the column, so every insert violates the constraint (and on a table with rows, the migration itself fails)." }
        ]
      }
    ]
  });
})();
