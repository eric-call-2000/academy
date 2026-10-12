# Science & Math: Mathematics Courses (draft)

Design doc for the math half of the **Science & Math** group. Written 2026-10-12, reorganized
the same day into separate courses. **Status: draft.** Algebra I unit 1 is written and live;
everything else is outlined below.

## How it fits in the app

On the main picker, **Science & Math** is one card (a *group*, defined with
`defineGroup` in `tracks.js`). Tapping it opens a second picker listing each course.
Every course is an ordinary track with its own unit files, progress and streak, tagged
`group: "stem"`. A course with `count: 0` shows as "Coming soon"; bump `count` as unit
files land.

| Course | id / file prefix | Units | Sequence |
|---|---|---|---|
| 🔢 Algebra I | `algebra1` | 8 | first |
| 📏 Geometry | `geometry` | 6 | after Algebra I |
| 📈 Algebra II | `algebra2` | 4 | after Geometry |
| 🌊 Precalculus | `precalc` | 4 | after Algebra II |
| 🎲 Statistics & Probability | `stats` | 3 | after Algebra I |
| 🚀 Intro to Calculus | `calculus` | 2 | after Precalculus |

Files are `<prefix>-unit1.js …`, flat at repo root. Lesson ids restart at `l1` in each
course and run contiguously, 8 per unit (unit N owns `l{8N-7}`…`l{8N}`).

## Shape

8 lessons × 7 questions per unit, matching the psychology-track and System Design format.
Courses can grow: add a unit file and bump `count`.

Question types per lesson (mix, don't repeat one type more than twice): `mcq` (4 choices,
`answer` index — vary the index), `truefalse`, `fill` (with `accept` array), `match`
(3 pairs), `order` (3–4 items).

**Fill answers in math need care.** The engine matches typed text exactly (trimmed,
case-insensitive). So every numeric `fill` lists its sensible spellings in `accept`:
`"0.5"`, `".5"`, `"1/2"`; `"-3"` and `"−3"`; `"x=4"` and `"4"`. Prefer blanks whose answer
is a single integer or a single word.

## Who it's for

High school students (roughly grades 8–12), or adults rebuilding the math they missed. The
sequence follows the usual US order and lines up with the Common Core high school
standards, so a course can sit alongside a school class. Intro to Calculus is an on-ramp,
not a full calculus course.

## Tone and method

- **Why before how.** Every procedure gets one question on *why it works* (why you flip
  the inequality, why the quadratic formula has a ±).
- **Small, checkable numbers.** No calculators; numbers a student can work in their head
  or on scrap paper in under a minute.
- **Name the classic mistakes.** `(a+b)² = a²+b²`, dropping the negative, dividing by a
  variable that could be 0 — as true/false items or distractors, with an `explain` that
  says why it's wrong.
- **Real contexts, briefly.** One line of setup, not a word-problem essay.

---

## 🔢 Algebra I — `algebra1`

*Unit 1 ✅ written. The foundation every other math course assumes.*

### Unit 1 — Number Sense & the Real Numbers 🔢 ✅ written (`algebra1-unit1.js`)
*The number system everything else is built on, and the arithmetic habits algebra assumes.*

1. The real number system (naturals, wholes, integers, rationals, irrationals)
2. Operations with integers and signs
3. Fractions, decimals and percents
4. Order of operations
5. Exponents and square roots
6. Absolute value and the number line
7. Ratios, rates and proportions
8. Scientific notation

**Anchors:** √2 and π are irrational, 0.333… is rational; a negative times a negative is
positive; PEMDAS ties (× and ÷, + and −) go left to right; |x| is distance from 0.

### Unit 2 — Expressions & Properties ✏️
*Variables as numbers you haven't met yet, and the rules that let you rearrange them.*

1. Variables, terms, coefficients and constants
2. Evaluating expressions
3. Commutative, associative and identity properties
4. The distributive property
5. Combining like terms
6. Writing expressions from words
7. Equivalent expressions
8. Common algebra mistakes (and why they're wrong)

**Anchors:** −(x − 3) = −x + 3; 3x and 3x² are not like terms; "5 less than a number" is n − 5.

### Unit 3 — Linear Equations & Inequalities ⚖️
*Solving as keeping a balance — do the same thing to both sides.*

1. What a solution is
2. One- and two-step equations
3. Multi-step equations and variables on both sides
4. Equations with no solution or infinitely many
5. Literal equations and rearranging formulas
6. Inequalities and the number line
7. Why multiplying by a negative flips the inequality
8. Compound and absolute-value inequalities

**Anchors:** 0 = 5 means no solution, 0 = 0 means all reals; solve d = rt for t.

### Unit 4 — Functions 🔁
*The single most important idea in high school math.*

1. Relations vs functions
2. Function notation f(x)
3. Domain and range
4. The vertical line test
5. Reading graphs of functions
6. Increasing, decreasing, max and min
7. Function families at a glance (linear, quadratic, exponential, absolute value)
8. Transformations: shifts, stretches and reflections

**Anchors:** f(x + 2) shifts left, not right; each input has exactly one output.

### Unit 5 — Linear Functions 📈
*Constant rate of change, and the three ways to write a line.*

1. Slope as rate of change
2. Slope from two points
3. Slope-intercept form y = mx + b
4. Point-slope and standard form
5. Parallel and perpendicular lines
6. Graphing lines and intercepts
7. Linear models from real data
8. Arithmetic sequences as linear functions

**Anchors:** perpendicular slopes multiply to −1; horizontal slope 0, vertical undefined.

### Unit 6 — Systems of Equations 🔀
*Two conditions at once — where the lines meet.*

1. What a system's solution means graphically
2. Solving by graphing
3. Substitution
4. Elimination
5. No solution and infinitely many solutions
6. Word problems with systems (mixtures, tickets, speeds)
7. Systems of linear inequalities
8. Intro to linear programming

**Anchors:** parallel lines → no solution; same line → infinitely many.

### Unit 7 — Exponents & Polynomials ✖️
*The exponent rules, and polynomials as the algebra of "sums of powers."*

1. Product, quotient and power rules
2. Zero and negative exponents
3. Rational exponents preview
4. Polynomial vocabulary: degree, leading coefficient, standard form
5. Adding and subtracting polynomials
6. Multiplying polynomials (distribution, FOIL as a special case)
7. Special products: (a+b)², (a−b)², (a+b)(a−b)
8. Dividing a polynomial by a monomial

**Anchors:** x⁰ = 1 for x ≠ 0; (a + b)² ≠ a² + b².

### Unit 8 — Factoring & Quadratics 🎯
*Undoing multiplication, and the first non-linear function students meet.*

1. Greatest common factor
2. Factoring x² + bx + c
3. Factoring ax² + bx + c
4. Difference of squares and perfect-square trinomials
5. The zero-product property
6. Completing the square
7. The quadratic formula and the discriminant
8. Graphs of quadratics: vertex, axis of symmetry, roots

**Anchors:** zero-product only works when one side is 0; b² − 4ac < 0 means no real roots.


---

## 📏 Geometry — `geometry`

*Shapes, space and proof.*

### Unit 1 — Reasoning & Proof 🧩
*How mathematicians know things, rather than just believing them.*

1. Inductive vs deductive reasoning
2. Conditional statements: if–then
3. Converse, inverse and contrapositive
4. Counterexamples
5. Undefined terms, definitions, postulates and theorems
6. Two-column proofs
7. Algebraic proofs
8. Paragraph and flow proofs

**Anchors:** a statement and its contrapositive are logically equivalent; its converse is not.

### Unit 2 — Lines, Angles & Transformations 📏
1. Points, lines, planes, segments and rays
2. Angle pairs: complementary, supplementary, vertical, linear pair
3. Parallel lines cut by a transversal
4. Translations
5. Reflections
6. Rotations
7. Dilations
8. Symmetry and compositions of transformations

**Anchors:** rigid motions preserve distance and angle; dilations preserve angle only.

### Unit 3 — Triangles & Congruence 🔺
1. Triangle angle sum and exterior angles
2. Classifying triangles
3. Congruence as rigid motion
4. SSS, SAS, ASA, AAS — and why not SSA
5. CPCTC
6. Isosceles and equilateral triangles
7. Medians, altitudes, bisectors and centers
8. The triangle inequality

### Unit 4 — Similarity & Right Triangles 📐
1. Similar figures and scale factor
2. AA, SAS and SSS similarity
3. Proportions in triangles
4. The Pythagorean theorem and its converse
5. Special right triangles (45-45-90, 30-60-90)
6. SOH-CAH-TOA
7. Solving right triangles
8. Angles of elevation and depression

**Anchors:** a scale factor k multiplies area by k² and volume by k³.

### Unit 5 — Circles ⭕
1. Parts of a circle
2. Circumference and arc length
3. Central and inscribed angles
4. Chords, secants and tangents
5. Area of a circle and sectors
6. Radian measure
7. Equation of a circle (x − h)² + (y − k)² = r²
8. Completing the square to find center and radius

### Unit 6 — Area, Volume & Coordinate Geometry 🧊
1. Area of polygons
2. Surface area of prisms and cylinders
3. Volume of prisms and cylinders
4. Pyramids, cones and spheres
5. Cross-sections and solids of revolution
6. Distance and midpoint formulas
7. Proving properties with coordinates
8. Density and modeling with geometry


---

## 📈 Algebra II — `algebra2`

*New kinds of numbers and functions.*

### Unit 1 — Radicals & Complex Numbers √
1. Simplifying radicals
2. Operations with radicals and rationalizing denominators
3. Rational exponents
4. Solving radical equations (and extraneous solutions)
5. The imaginary unit i
6. Adding, subtracting and multiplying complex numbers
7. Complex conjugates and division
8. Complex solutions of quadratics

**Anchors:** i² = −1; squaring both sides can create extraneous solutions — always check.

### Unit 2 — Polynomial & Rational Functions 〰️
1. End behavior
2. Zeros and multiplicity
3. Polynomial long and synthetic division
4. Remainder and factor theorems
5. The fundamental theorem of algebra
6. Rational functions and asymptotes
7. Simplifying and operating on rational expressions
8. Solving rational equations

### Unit 3 — Exponential & Logarithmic Functions 📊
1. Exponential growth and decay
2. Compound interest and the number e
3. Inverse functions
4. Logarithms as inverse exponentials
5. Properties of logarithms
6. Solving exponential equations
7. Solving logarithmic equations
8. Modeling: half-life, population, pH, decibels

**Anchors:** log(a + b) ≠ log a + log b; log_b(x) asks "b to what power gives x?"

### Unit 4 — Sequences & Series 🔢
1. Sequence notation and recursive definitions
2. Arithmetic sequences
3. Geometric sequences
4. Sigma notation
5. Arithmetic series
6. Finite geometric series
7. Infinite geometric series and convergence
8. Mathematical induction (intro)


---

## 🌊 Precalculus — `precalc`

*Trigonometry and the tools calculus will need.*

### Unit 1 — Trigonometric Functions 🌊
1. Angles in standard position, degrees and radians
2. The unit circle
3. Sine, cosine and tangent of any angle
4. Reference angles and signs by quadrant
5. Graphs of sine and cosine
6. Amplitude, period, phase shift and midline
7. Other trig graphs (tangent, reciprocals)
8. Modeling periodic phenomena (tides, Ferris wheels)

### Unit 2 — Trig Identities & Equations 🔧
1. The Pythagorean identity
2. Reciprocal and quotient identities
3. Verifying identities
4. Sum and difference formulas
5. Double-angle formulas
6. Inverse trig functions
7. Solving trig equations
8. Law of Sines and Law of Cosines

### Unit 3 — Vectors, Matrices & Parametrics ➡️
1. Vectors: magnitude and direction
2. Vector addition and scalar multiplication
3. Matrices and matrix operations
4. Matrix multiplication
5. Determinants and inverses
6. Solving systems with matrices
7. Parametric equations
8. Polar coordinates

### Unit 4 — Conic Sections 🪐
*Parabolas, circles, ellipses and hyperbolas as slices of a cone.*

1. Slicing a cone: the four conics
2. Parabolas with focus and directrix
3. Circles revisited
4. Ellipses
5. Hyperbolas
6. Identifying a conic from its equation
7. Conics in the real world (orbits, satellite dishes, whispering galleries)
8. Systems involving conics


---

## 🎲 Statistics & Probability — `stats`

*Chance, data, and drawing honest conclusions. Needs only Algebra I.*

### Unit 1 — Probability & Counting 🎲
1. Sample spaces and basic probability
2. The fundamental counting principle
3. Permutations
4. Combinations
5. Independent and dependent events
6. Conditional probability
7. Two-way tables
8. Expected value and fair games

**Anchors:** P(A and B) = P(A)·P(B) only when independent; the gambler's fallacy.

### Unit 2 — Statistics & Data 📉
1. Types of data and sampling
2. Bias in sampling and survey design
3. Center: mean, median and mode
4. Spread: range, IQR and standard deviation
5. Distributions, shape and outliers
6. The normal distribution and z-scores
7. Scatter plots, correlation and lines of best fit
8. Correlation is not causation; experiments vs observational studies

### Unit 3 — Statistical Inference 🔎
*Using a sample to say something about a whole population — and how sure you can be.*

1. Populations, samples and parameters vs statistics
2. Sampling variability
3. Sampling distributions
4. Margin of error
5. Confidence intervals
6. The logic of a hypothesis test
7. p-values and what they don't mean
8. Comparing two groups in an experiment


---

## 🚀 Intro to Calculus — `calculus`

*Limits, derivatives and the idea of the integral.*

### Unit 1 — Limits & Rates of Change 🚀
1. Average rate of change
2. The idea of a limit
3. Limits from tables and graphs
4. Continuity
5. Instantaneous rate of change
6. The tangent line
7. The derivative as a function
8. Basic derivative rules (power rule)

### Unit 2 — Integrals & Modeling 🏁
1. The modeling cycle
2. Choosing a function family from data
3. Optimization problems
4. Area under a curve (the idea of the integral)
5. Financial math: loans, interest and budgets
6. Probability in real decisions
7. Estimation and Fermi problems
8. Where math goes next (calculus, linear algebra, statistics, discrete math)
