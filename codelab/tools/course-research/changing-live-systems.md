# Changing Live Systems — Change It While It Runs

## Verdict
STANDALONE, SENIOR LEVEL, FOURTH OF THE SIX. 23 items / ~6h, `level: "Senior"`, id/prefix `change`.

WHY SENIOR. The senior/junior table in `senior-curriculum.md` has "changes code they didn't write,
safely" and "owns the blast radius of a change". A junior's change is correct when the new code is
correct. A senior's change is correct when the new code is correct **and** the old code still
running next to it, the old rows in the database and the old clients still calling all keep
working, at every moment of the rollout. Refactoring Legacy Code stays inside one codebase; this
course is about the boundary between running versions.

WHAT THE RESEARCH SAYS TO TEACH.
- **Two versions at once is the normal state.** A rolling deploy replaces instances one at a time,
  so for a while old and new code serve the same traffic against the same database. Mobile apps and
  third-party integrations stay old for months. Every change has to be safe for that overlap.
- **Expand and contract** (Danilo Sato's "parallel change", on Martin Fowler's bliki): add the new
  thing beside the old one (expand), move every reader and writer and the data over (migrate), and
  only then remove the old one (contract). Each phase ships alone and every phase before the
  contract can be rolled back.
- **Renames and drops are the dangerous migrations.** Strong Migrations (Andrew Kane's Rails gem)
  lists them first: renaming a column breaks the code still reading the old name; dropping one
  breaks code that still names it. The safe way is a new column, a dual write, a backfill, a read
  switch, and the drop last.
- **Backfills in batches.** One `UPDATE` over a big table holds locks and runs past statement
  timeouts. Strong Migrations, GitLab's batched background migrations and GitHub's gh-ost all move
  data in small batches. The backfill runs **after** every writer writes the new column, or rows
  written in between are missed.
- **NOT NULL on an existing table**: add the column nullable (or with a default), backfill, then
  enforce. In Postgres 11+ a column with a constant default is cheap to add.
- **APIs**: additive changes (new optional fields, new endpoints) don't break clients; removing or
  renaming fields, tightening validation and changing meaning do. Fowler's **Tolerant Reader**:
  clients read only what they need and ignore the rest. Stripe pins each account to an API version
  and keeps old versions alive with "version change" modules that transform new responses back
  into old shapes, newest first.
- **Deprecation is a protocol, not an announcement.** The `Deprecation` header (RFC 9745, 2025)
  says when a resource was or will be deprecated; `Sunset` (RFC 8594) says when it stops working,
  and must not be earlier than the deprecation; a `Link` with `rel="deprecation"` points to the
  notice. Measure who still calls before removing.
- **Feature flags** separate deploy from release (Pete Hodgson's "Feature Toggles" on Fowler's
  site): release, experiment, ops (kill switch) and permission toggles, with different lifetimes.
  Percentage rollouts must be **deterministic** (a user's bucket is stable from request to request)
  and **monotonic** (raising 10% to 20% keeps the first 10%). Release flags are debt: remove them.

## Status (2026-10-05)
BUILT: seven units, 23 items: 5 concept lessons, 10 js lessons (6 of them on the live harness),
2 js projects, 6 quizzes. Engine: `live: true` (harnessLive in runner.js, 27 tests in
tools/test-live.js, phase 0n) and validator rules for its flag. Pays 3 credits
`{ be: 1, data: 1, arch: 1 }`, not the planned 4: the lessons model at ~5.7h. Every hidden check
was tested against a wrong answer that must fail: v2 changed to stop writing the old column (rollback
to v1 breaks), batches of one row, a percentage rollout bucketed on the user id alone, a flag check
that assumes optional lists, Math.round on the deprecation time, a path match that misses query
strings, version pins compared by exact date, and a handler that treats a missing Api-Version as
the newest version.

## Engine needs
ONE NEW OPT-IN HARNESS, `live: true` (runner.js `harnessLive`, ~220 lines), contract in
`tools/test-live.js`, run as validate.js phase 0n:

- **`T.db(tables)`**: a small database with a schema it enforces. Inserts fill ids and defaults;
  unknown columns, NOT NULL violations and missing relations throw Postgres-style errors. Selects
  name their columns, so a renamed or dropped column breaks a reader that still names it.
  Migrations: addColumn (NOT NULL without a default fails on a table with rows), dropColumn,
  renameColumn, setNotNull (fails while any row is null), dropNotNull, setDefault. One UPDATE may
  touch at most `db.maxRows` rows; more is a statement timeout, which is what makes a backfill batch.
- **`T.rollout(opts)` / `T.expectRollout`**: runs a deployment plan (migrations and rolling deploys
  of named app versions) while traffic keeps arriving, round-robin over instances, so old and new
  versions overlap during each deploy. Every thrown error and every complaint from the lesson's
  `check` is a problem tied to the step, the version and the request. This grades "old and new
  callers both still work" directly.

API, deprecation and flag lessons are plain functions, graded with ordinary checks.

## Overlaps
- Refactoring Legacy Code (`refactor`): parallel change inside a codebase; the strangler fig at
  system scale. This course does the same across running versions, data and clients.
- Databases (`db`): SQL and schema basics, assumed.
- CI/CD (`cicd`): deploys and rollbacks; this course is what makes a rollback safe.

## Units
1. **Two versions at once** (concept ×2, quiz): rolling deploys, old clients, expand/contract.
2. **Expand and contract** (concept, js ×2, quiz): a rename that breaks, a rename that doesn't.
3. **Moving data** (js ×2, quiz): a NOT NULL column, a batched backfill.
4. **APIs old clients still call** (concept, js ×2, quiz): additive change and the tolerant reader,
   Stripe-style version transforms.
5. **Deprecating without surprises** (js ×2, quiz): Deprecation and Sunset headers, removing by usage.
6. **Feature flags** (concept, js ×2, quiz): deterministic, monotonic percentage rollout; a kill switch.
7. **Two projects** (js ×2): split a column in two with no failed request; retire an API field.

## Risks
- A SIMULATOR IS NOT A DATABASE. No locks, no replication lag, no transactions across statements.
  The concept lessons say so, and teach lock-heavy operations (setting NOT NULL on a big table,
  index builds) as reading, not labs.
- GAMING THE ROLLOUT. A plan that never contracts passes "nothing broke". Projects check the end
  state too: the old column is gone, every instance runs the last version.

## Sources
- Danilo Sato, Parallel Change: https://martinfowler.com/bliki/ParallelChange.html
- Andrew Kane, Strong Migrations (dangerous operations, safe alternatives, batched backfills): https://github.com/ankane/strong_migrations
- GitLab, batched background migrations: https://docs.gitlab.com/development/database/batched_background_migrations/
- GitHub, gh-ost (online schema migration in small chunks): https://github.com/github/gh-ost
- Martin Fowler, Tolerant Reader: https://martinfowler.com/bliki/TolerantReader.html
- Stripe, APIs as infrastructure: future-proofing Stripe with versioning: https://stripe.com/blog/api-versioning
- RFC 9745, The Deprecation HTTP Response Header Field: https://www.rfc-editor.org/rfc/rfc9745.html
- RFC 8594, The Sunset HTTP Header Field: https://datatracker.ietf.org/doc/html/rfc8594
- Pete Hodgson, Feature Toggles (aka Feature Flags): https://martinfowler.com/articles/feature-toggles.html
- Martin Fowler, Feature Flag: https://martinfowler.com/bliki/FeatureFlag.html
