/* Changing Live Systems — Unit 6: Feature flags */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var HASH = L(
    "// FNV-1a: the same string always gives the same 32-bit number.",
    "function hash(str) {",
    "  let h = 0x811c9dc5;",
    "  for (let i = 0; i < str.length; i++) {",
    "    h ^= str.charCodeAt(i);",
    "    h = Math.imul(h, 0x01000193) >>> 0;",
    "  }",
    "  return h;",
    "}");
  var ROLLOUT = L(
    "// From the last lesson: is this user inside the first `percent` buckets?",
    "function inRollout(flagName, userId, percent) {",
    "  return hash(flagName + \":\" + userId) % 100 < percent;",
    "}");
  var FLAG = "{ name: 'new-checkout', percent: 0, killed: false, allow: [], deny: [] }";
  var STORE = "function store(flags) { return { get: function (name) { return flags[name]; } }; }\nfunction F(o) { return Object.assign(" + FLAG + ", o || {}); }";
  var USERS = "var users = []; for (var i = 1; i <= 2000; i++) users.push('u' + i);";

  window.CODELAB.addUnit("change", {
    id: "change-u6",
    title: "Feature flags",
    icon: "🚩",
    blurb: "Deploying code and releasing a feature don't have to be the same moment. Flags let you ship dark, turn a feature on for 1% of users and then 10%, and turn it off in seconds without a deploy. Done carelessly, they flicker for users and pile up as debt.",
    cheat: [
      { h: "Four kinds of toggle (Pete Hodgson)", lang: "text", code:
"release       hide unfinished work          days to weeks\n" +
"experiment   A/B test                      weeks\n" +
"ops           kill switch, degrade a feature  can be long-lived\n" +
"permission   staff, beta, paid plans       long-lived",
        note: "Release toggles are meant to die. Each one left behind is a branch in the code nobody tests both sides of." },
      { h: "A percentage rollout that behaves", lang: "js", code:
"function isEnabled(flag, userId) {\n" +
"  return hash(flag.name + \":\" + userId) % 100 < flag.percent;\n" +
"}",
        note: "Deterministic: the same user gets the same answer every time. Monotonic: raising 10 to 20 keeps the first 10%. Salted by flag name: each flag gets a different 10%." },
      { h: "When the flag service fails", lang: "js", code:
"try { flag = store.get(name); } catch (e) { return false; }\n" +
"if (!flag) return false;",
        note: "The safe default is the old behavior. A flag outage should never become a site outage." }
    ],
    lessons: [

      {
        id: "change-u6-1",
        title: "Deploy is not release",
        kind: "concept", xp: 15, mins: 9,
        screens: [
          { read: "Without flags, merging a feature means shipping it: the code goes out and every user sees it at once. If it's wrong, the fix is another deploy, which takes minutes at best.\n\nA **feature flag** separates the two. The code ships **dark**, behind `if (isEnabled(\"new-checkout\", user))`. Releasing is flipping the flag, for staff first, then 1% of users, then 10%, watching the error rate at each step. Turning it off takes seconds and no deploy.",
            ask: { type: "pick", transfer: true,
              q: "New checkout is on for 10% of users and its error rate has doubled. What's the fastest safe response?",
              choices: [
                "Revert the merge and redeploy",
                "Turn the flag to 0%",
                "Hotfix the bug and deploy",
                "Restart the servers running the new code"
              ],
              answer: 1,
              why: [
                "That works, but a deploy is minutes and may carry other changes back out with it.",
                "Right. Everyone is back on the old checkout in seconds; then fix it calmly.",
                "Maybe later. First stop the damage.",
                "The code is on every server. The flag decides who reaches it."
              ] } },
          { read: "Pete Hodgson sorts flags by how long they live and who flips them:\n\n- **Release** toggles hide unfinished work. They should be removed within weeks.\n- **Experiment** toggles split users for an A/B test.\n- **Ops** toggles are kill switches: turn off the expensive recommendations panel when the database struggles.\n- **Permission** toggles give staff, beta users or paying plans a feature, for as long as the product exists.\n\nA release toggle left in place for a year is **debt**: two code paths, and only one of them is still tested.",
            ask: { type: "pick", transfer: true,
              q: "\"Turn off image previews when the CDN is degraded.\" Which kind of toggle is that?",
              choices: [
                "Release",
                "Experiment",
                "Ops",
                "Permission"
              ],
              answer: 2,
              why: [
                "Nothing is unfinished here. It's a switch for bad days.",
                "There's no test or comparison going on.",
                "Right. A kill switch for operating the system, possibly kept for years.",
                "It isn't about who gets the feature, but about when the system can afford it."
              ] } },
          { read: "A percentage rollout has two rules that are easy to break:\n\n1. **Deterministic.** The same user gets the same answer every time. `Math.random() < 0.1` gives each **request** a 10% chance, so a user's checkout flickers between old and new mid-purchase.\n2. **Monotonic.** Going from 10% to 20% keeps the first 10% and adds more. Otherwise users who already have the feature lose it.\n\nBoth come from hashing the user id into a fixed bucket, 0 to 99.",
            ask: { type: "pick",
              q: "A flag uses `Math.random() < percent / 100`. A user refreshes the cart page four times. What might they see?",
              choices: [
                "The same checkout each time, since the user is the same",
                "Old, new, old, new: a different roll on each request",
                "Nothing until they log in again",
                "Always the new one, after the first"
              ],
              answer: 1,
              why: [
                "Math.random knows nothing about the user.",
                "Right. That's why rollouts hash the user id instead of rolling dice.",
                "The flag is checked on every request, logged in or not.",
                "Nothing remembers the first roll."
              ] } }
        ]
      },

      {
        id: "change-u6-2",
        title: "A rollout that doesn't flicker",
        kind: "js", chip: "FLAGS", xp: 25, mins: 20,
        brief: "The current `isEnabled()` rolls dice on every call, so users flicker between the old and new checkout.\n\nRewrite it with `hash()` (provided) so that:\n\n- the same user always gets the same answer for a flag\n- about `percent`% of users are in (0 means nobody, 100 means everyone)\n- raising the percentage only **adds** users",
        steps: [
          { text: "The same user gets the same answer every time.",
            test: L(USERS,
              "users.slice(0, 200).forEach(function (u) {",
              "  var first = isEnabled({ name: 'new-checkout', percent: 50 }, u);",
              "  for (var k = 0; k < 5; k++) T.eq(isEnabled({ name: 'new-checkout', percent: 50 }, u), first, 'User ' + u + ' got a different answer on a later call.');",
              "});") },
          { text: "About `percent`% of users are in; 0 is nobody and 100 is everybody.",
            test: L(USERS,
              "[0, 10, 50, 100].forEach(function (p) {",
              "  var n = users.filter(function (u) { return isEnabled({ name: 'new-checkout', percent: p }, u); }).length;",
              "  var share = n / users.length * 100;",
              "  T.expect(Math.abs(share - p) <= 3, 'At ' + p + '%, ' + share.toFixed(1) + '% of users were in.');",
              "});") },
          { text: "Raising the percentage keeps everyone who was already in.",
            test: L(USERS,
              "var lost = users.filter(function (u) { return isEnabled({ name: 'new-checkout', percent: 10 }, u) && !isEnabled({ name: 'new-checkout', percent: 25 }, u); });",
              "T.expect(lost.length === 0, lost.length + ' users had the feature at 10% and lost it at 25% (' + lost[0] + ', for one). Compare a fixed bucket against the percentage.');") },
          { text: "Different flags pick different users.", hidden: true,
            test: L(USERS,
              "var both = users.filter(function (u) { return isEnabled({ name: 'new-checkout', percent: 10 }, u) && isEnabled({ name: 'dark-mode', percent: 10 }, u); }).length;",
              "T.expect(both / users.length < 0.03, (both / users.length * 100).toFixed(1) + '% of users are in both 10% rollouts. Bucketing on the user id alone gives every flag the same 10% of users, who then test every risky change at once. Hash the flag name with the id.');") }
        ],
        files: [{ name: "script.js", content: L(
          HASH,
          "",
          "function isEnabled(flag, userId) {",
          "  return Math.random() < flag.percent / 100;",
          "}",
          "",
          "for (const u of [\"u1\", \"u1\", \"u1\", \"u2\"]) {",
          "  console.log(u, isEnabled({ name: \"new-checkout\", percent: 50 }, u));",
          "}",
          "") }],
        hints: [
          "Turn the user id into a bucket from 0 to 99: hash(userId) % 100. The user is in when the bucket is below the percentage, so raising the percentage only lets more buckets in.",
          "Hash the flag's name together with the user id, hash(flag.name + \":\" + userId), so each flag picks its own users."
        ],
        solution: { "script.js": L(
          HASH,
          "",
          "// A fixed bucket per flag and user, 0-99. In when it's below the percentage,",
          "// so raising the percentage only adds users.",
          "function bucket(flagName, userId) {",
          "  return hash(flagName + \":\" + userId) % 100;",
          "}",
          "",
          "function isEnabled(flag, userId) {",
          "  return bucket(flag.name, userId) < flag.percent;",
          "}",
          "",
          "for (const u of [\"u1\", \"u1\", \"u1\", \"u2\"]) {",
          "  console.log(u, isEnabled({ name: \"new-checkout\", percent: 50 }, u));",
          "}",
          "") }
      },

      {
        id: "change-u6-3",
        title: "Kill switches and safe defaults",
        kind: "js", chip: "FLAGS", xp: 20, mins: 15,
        brief: "Write `isOn(store, name, user)`. It looks the flag up with `store.get(name)`, which returns `{ name, percent, killed, allow, deny }`, and decides for `user` (`{ id, staff }`), in this order:\n\n1. `killed` → off for **everyone**, staff included\n2. user id in `deny` → off\n3. staff, or user id in `allow` → on\n4. otherwise `inRollout(name, user.id, percent)` (provided)\n\nThe flag service can fail: `store.get` may **throw**, or return nothing for a deleted flag. Then the answer is **off**, the old behavior, and `isOn` must never throw.",
        steps: [
          { text: "Ordinary users follow the percentage.",
            test: L(STORE, USERS,
              "var s = store({ 'new-checkout': F({ percent: 30 }) });",
              "users.slice(0, 300).forEach(function (u) { T.eq(isOn(s, 'new-checkout', { id: u }), inRollout('new-checkout', u, 30), 'isOn for user ' + u); });") },
          { text: "Staff and the allow list get it at 0%; the deny list doesn't at 100%.",
            test: L(STORE,
              "var s = store({ a: F({ name: 'a', percent: 0, allow: ['u7'] }), b: F({ name: 'b', percent: 100, deny: ['u8'] }) });",
              "T.eq(isOn(s, 'a', { id: 'u1', staff: true }), true, 'Staff should get it.');",
              "T.eq(isOn(s, 'a', { id: 'u7' }), true, 'Users in allow should get it.');",
              "T.eq(isOn(s, 'a', { id: 'u2' }), false, 'At 0%, everyone else is off.');",
              "T.eq(isOn(s, 'b', { id: 'u8' }), false, 'Users in deny should not get it.');") },
          { text: "The kill switch turns it off for everyone.",
            test: L(STORE,
              "var s = store({ a: F({ name: 'a', percent: 100, killed: true, allow: ['u7'] }) });",
              "T.eq(isOn(s, 'a', { id: 'u1' }), false, 'killed: off for ordinary users');",
              "T.eq(isOn(s, 'a', { id: 'u7' }), false, 'killed: off for the allow list');",
              "T.eq(isOn(s, 'a', { id: 'u2', staff: true }), false, 'killed: off for staff too. A kill switch that staff are exempt from hides the outage from the people looking at it.');") },
          { text: "A missing flag or a failing store means off, not a crash.",
            test: L(STORE,
              "var broken = { get: function () { throw new Error('flag service timed out'); } };",
              "var r; try { r = isOn(broken, 'a', { id: 'u1', staff: true }); } catch (e) { T.expect(false, 'isOn threw \"' + e.message + '\". A flag outage must not become a checkout outage: return false.'); }",
              "T.eq(r, false, 'When the store fails, the answer is off.');",
              "T.eq(isOn(store({}), 'deleted-flag', { id: 'u1', staff: true }), false, 'A flag that does not exist is off.');") },
          { text: "A flag without `allow` or `deny` lists still works.", hidden: true,
            test: L(STORE,
              "var s = store({ lean: { name: 'lean', percent: 100 } });",
              "T.eq(isOn(s, 'lean', { id: 'u1' }), true, 'A flag set to 100% with no allow or deny lists should be on, but isOn says off. Config written by hand leaves optional fields out: treat a missing list as empty.');") }
        ],
        files: [{ name: "script.js", content: L(
          HASH,
          "",
          ROLLOUT,
          "",
          "function isOn(store, name, user) {",
          "  const flag = store.get(name);",
          "  return inRollout(name, user.id, flag.percent);",
          "}",
          "",
          "const flags = { \"new-checkout\": { name: \"new-checkout\", percent: 10, killed: false, allow: [\"u7\"], deny: [] } };",
          "const store = { get: name => flags[name] };",
          "console.log(isOn(store, \"new-checkout\", { id: \"u7\" }));",
          "") }],
        hints: [
          "Wrap store.get in try/catch and return false when it throws or returns nothing. Then check the rules in the order given, returning as soon as one decides.",
          "(flag.deny || []).includes(user.id) works whether or not the list is there."
        ],
        solution: { "script.js": L(
          HASH,
          "",
          ROLLOUT,
          "",
          "// Off is the safe default: the old behavior.",
          "function isOn(store, name, user) {",
          "  let flag;",
          "  try {",
          "    flag = store.get(name);",
          "  } catch (e) {",
          "    return false;",
          "  }",
          "  if (!flag || flag.killed) return false;",
          "  if ((flag.deny || []).includes(user.id)) return false;",
          "  if (user.staff || (flag.allow || []).includes(user.id)) return true;",
          "  return inRollout(name, user.id, flag.percent);",
          "}",
          "",
          "const flags = { \"new-checkout\": { name: \"new-checkout\", percent: 10, killed: false, allow: [\"u7\"], deny: [] } };",
          "const store = { get: name => flags[name] };",
          "console.log(isOn(store, \"new-checkout\", { id: \"u7\" }));",
          "") }
      },

      {
        id: "change-u6-quiz",
        title: "Unit 6 quiz: Feature flags",
        kind: "quiz", xp: 10,
        brief: "Release vs deploy, toggle types, rollouts and kill switches. 80% to pass.",
        questions: [
          { q: "What does a feature flag separate?",
            choices: ["Deploying code from releasing the feature", "Frontend from backend", "Tests from production", "Staff from customers"],
            answer: 0, explain: "The code ships dark; turning it on is a separate, reversible step." },
          { q: "Which toggle type should be removed soonest?",
            choices: ["Permission", "Ops", "Release", "All of them last forever"],
            answer: 2, explain: "Release toggles exist to hide unfinished work. Once it's done, the flag is debt." },
          { q: "Why hash the user id instead of using Math.random()?",
            choices: ["Hashing is faster to compute than a random number on every single request", "So each user gets the same answer on every request", "Math.random isn't allowed in production", "So no user ever gets the feature twice"],
            answer: 1, explain: "Random rolls make a user's experience flicker from one request to the next." },
          { q: "Why include the flag name in the hash?",
            choices: ["To make the hash longer", "It's required by FNV-1a", "So each flag picks a different set of users", "So the flag can be renamed"],
            answer: 2, explain: "Otherwise the same unlucky 10% gets every risky rollout at once." },
          { q: "The flag service is down. What should a flag check return?",
            choices: ["Throw, so someone notices", "Whatever it returned last week", "On, so users still get the new feature while the flag service is recovering", "The safe default: usually off, the old behavior"],
            answer: 3, explain: "A flag outage must never become a site outage." }
        ]
      }
    ]
  });
})();
