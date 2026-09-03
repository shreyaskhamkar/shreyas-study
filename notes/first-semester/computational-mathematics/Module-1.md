# Module 1: Logic

[↑ Semester I](../README.md) · [Subject index](README.md) · [Next: Module 2 →](<Module-2.md>)

## Learning outcomes

After this module, you should be able to:

- construct truth tables for propositional formulas and test logical equivalence;
- translate English statements into propositional and predicate logic;
- apply Boolean-algebra laws and prove simple equivalences equationally;
- use the natural-deduction proof system to derive conclusions;
- convert formulas to conjunctive (CNF) and disjunctive (DNF) normal forms;
- distinguish consistency and completeness of proof systems.


## Prerequisites

No earlier module is required. Start with the plain-English overview and review each unfamiliar term before continuing.


## Short study blocks

Study one row at a time. Attempt a small example from that section before moving
to the next row.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Propositions, connectives, and truth tables | 10-15 minutes |
| 2 | Predicate logic and quantifiers | 10-15 minutes |
| 3 | Boolean algebra and equivalence | 10-15 minutes |
| 4 | Natural deduction | 10-15 minutes |
| 5 | CNF and DNF | 10-15 minutes |
| 6 | Consistency and completeness | 10-15 minutes |

## Start here: the simple idea

Logic is the "rules of correct reasoning." **Propositional** logic treats whole
sentences (p, q) as indivisible units and combines them with and/ors. **Predicate**
logic zooms inside a sentence to talk about objects and their properties
("for every x, x is mortal").

### Everyday analogy

- Propositional: treat each sentence as a light switch (on/off). Combine switches
  with "AND" gates.
- Predicate: like a spreadsheet — for **every** row, a condition must hold.

## Important terms

A **proposition** is a statement that is either true (T) or false (F).

## Propositional calculus

### Logical connectives

| Symbol | Read | Truth table (p ⋄ q) |
|---|---|---|
| `¬p` | not p | T↔F |
| `p ∧ q` | p and q | T only if both T |
| `p ∨ q` | p or q | T if at least one T |
| `p → q` | p implies q | F only if p=T, q=F |
| `p ↔ q` | p iff q | T iff p, q equal |
| `⊥` | contradiction | always F |

**Worked example (truth table):** `(p ∧ ¬q) → q`

```text
p q | ¬q | p∧¬q | (p∧¬q)→q
T T | F  | F    |  T
T F | T  | T    |  F
F T | F  | F    |  T
F F | T  | F    |  T
```

### Logical equivalence

Two formulas are **logically equivalent** (`≡`) if they have identical truth
tables. Key laws:

| Law | Form |
|---|---|
| Double negation | `¬¬p ≡ p` |
| De Morgan | `¬(p∧q) ≡ ¬p ∨ ¬q` ; `¬(p∨q) ≡ ¬p ∧ ¬q` |
| Commutative | `p∧q ≡ q∧p` ; `p∨q ≡ q∨p` |
| Associative | `(p∧q)∧r ≡ p∧(q∧r)` |
| Distributive | `p∧(q∨r) ≡ (p∧q)∨(p∧r)` |
| Implication | `p→q ≡ ¬p ∨ q` |
| Contrapositive | `p→q ≡ ¬q → ¬p` |

### Tautology, contradiction, contingency

- **Tautology** (`⊤`): true for all valuations (e.g., `p ∨ ¬p`).
- **Contradiction** (`⊥`): false for all (e.g., `p ∧ ¬p`).
- **Contingency:** true for some, false for others.

## Predicate logic

Propositional logic cannot express "all" or "some." **Predicate logic** adds:

- **Variables (`x, y, z`)**, **predicates (`P(x)`)**, and **quantifiers**.
- **Universal:** `∀x P(x)` "for all x, P(x)".
- **Existential:** `∃x P(x)` "there exists an x such that P(x)".

### Translation and negation

Domain = people. `S(x) = "x studies"`.

- "Everyone studies": `∀x S(x)`.
- "Someone does not study": `∃x ¬S(x)`.
- Negation: `¬∀x S(x) ≡ ∃x ¬S(x)` (de Morgan for quantifiers).

### Worked example

Let `P(x)` = "x is even", domain = ℤ.

- `∀x P(x)` is **false** (not every integer is even).
- `∃x P(x)` is **true** (2 is even).
- `¬∀x P(x) ≡ ∃x ¬P(x)`: "some integer is not even."

## Boolean algebra and equational style

A **Boolean algebra** is a set with operations `∧, ∨, ¬` and constants `0, 1`
satisfying the laws above (idempotent, commutative, associative, distributive,
complement, identity).

**Equational style proof:** justify each `=` by a named law.

Prove `(p ∧ q) → r ≡ p → (q → r)`:

```text
(p ∧ q) → r
≡ ¬(p ∧ q) ∨ r           (implication)
≡ (¬p ∨ ¬q) ∨ r          (De Morgan)
≡ ¬p ∨ (¬q ∨ r)          (associativity)
≡ ¬p ∨ (q → r)           (implication, inside-out)
≡ p → (q → r)            (implication)
```

## Natural deduction proof system

Natural deduction proves `Γ ⊢ φ` (φ is derivable from assumptions Γ) with
assumption management. Core rules:

```text
Assumption / Proof by contradiction (RAA):  [¬φ] ... ⊥  ⇒  ¬¬φ ; ¬¬φ ⇒ φ
∧-intro  :  φ, ψ ⇒ φ ∧ ψ
∧-elim   :  φ ∧ ψ ⇒ φ  (and ψ)
∨-intro  :  φ ⇒ φ ∨ ψ   (ψ ⇒ φ ∨ ψ)
∨-elim   :  φ∨ψ, φ⇒χ, ψ⇒χ ⇒ χ
→-intro  :  [φ] ... ψ  ⇒ φ → ψ
→-elim   :  φ→ψ, φ ⇒ ψ   (modus ponens)
¬-intro  :  [φ] ... ⊥  ⇒ ¬φ
⊥-elim   :  ⊥ ⇒ anything (ex falso)
∀-intro  :  φ(a) for fresh a  ⇒ ∀x φ(x)
∀-elim  :  ∀x φ(x) ⇒ φ(t)
∃-intro  :  φ(t) ⇒ ∃x φ(x)
∃-elim  :  ∃x φ(x), [φ(a)]⇒ψ (a fresh) ⇒ ψ
```

### Worked example (∨-elimination)

Goal: `p ∨ q ⊢ (p ∧ r) ∨ (q ∧ r)` assuming `r`.

```text
1  p ∨ q                       (premise)
2  r                           (premise)
3  [p]                         (assume)
4  p ∧ r                       (∧I 3,2)
5  (p∧r) ∨ (q∧r)               (∨I 4)
6  [q]                         (assume)
7  q ∧ r                       (∧I 6,2)
8  (p∧r) ∨ (q∧r)               (∨I 7)
9  (p∧r) ∨ (q∧r)               (∨E 1, 3–5, 6–8)
```

## Conjunctive and disjunctive normal forms

- **Literal:** `p` or `¬p`.
- **Monomial / term:** conjunction of literals.
- **Clause:** disjunction of literals.
- **DNF:** disjunction of monomials.
- **CNF:** conjunction of clauses.

Every propositional formula has an equivalent in CNF and in DNF (proved by
transforming via De Morgan and distribution).

**Worked example:** Convert `p → (q ∧ r)` to CNF and DNF.

```text
DNF:  p → (q∧r) ≡ ¬p ∨ (q∧r) ≡ (¬p∨q) ∧ (¬p∨r)        (CNF)
      also ≡ (¬p∨q∧r): as DNF already: ¬p ∨ (q∧r) = (¬p) ∨ (q∧r)
```

Here `¬p ∨ (q∧r)` is already a DNF (disjunction of monomial `¬p` and monomial
`q∧r`). Converting fully to CNF: `(¬p ∨ q) ∧ (¬p ∨ r)`.

## Consistency and completeness

- A proof system is **consistent** if it cannot derive both φ and ¬φ (no
  contradictions).
- It is **complete** if every logical validit (tautology) is provable.
- It is **sound** if every provable formula is logically valid.
- The propositional natural-deduction system is **sound and complete**; the
  predicate system is **complete** (Gödel, 1929) but, by the **incompleteness
  theorems**, no sufficiently strong recursively axiomatized theory (e.g. PA)
  is both consistent and complete.

## Common mistakes

- Reading `p → q` as "p causes q" — it is truth-functional: false only when p=T,q=F.
- Writing the negation of `∀x P(x)` as `∀x ¬P(x)` (wrong; it is `∃x ¬P(x)`).
- Forgetting to discharge an assumption box before closing a ∨/→ introduction.
- Confusing soundness with completeness.

## Memory rules

- `p→q ≡ ¬p∨q`; implication is false only when T→F.
- De Morgan: push ¬ through ∧/∨ and flip the connective.
- Quantifier negation: `¬∀ ≡ ∃¬`, `¬∃ ≡ ∀¬`.
- ∧ and ∨ are dual (swap ∧↔∨, T↔F, ∀↔∃ and the law still holds).
- Natural deduction: open a box to assume, discharge it to conclude.

## Mini Quiz

Attempt all questions before revealing the answers.

1. What is the only valuation making `p ∧ ¬q` true?
2. Give an equivalent form of `¬(p ∨ (¬q ∧ r))` with negations pushed in.
3. Negate "Every student passed" and simplify.
4. What rule discharges an assumption in a → introduction?
5. Is the propositional natural-deduction system sound, complete, both, or neither?

## Answers

<details>
<summary>Reveal answers</summary>


1. p = True, q = False.
2. `¬p ∧ (q ∨ ¬r)`.
3. `∃x ¬Passed(x)` — "At least one student did not pass."
4. Implication introduction (→-intro): from `[p] ... q` conclude `p → q`.
5. Both sound and complete (for propositional logic).

</details>

## Quick revision box

- Proposition = T/F statement; connectives ¬∧∨→↔ with truth tables.
- Equivalence laws: De Morgan, implication `p→q ≡ ¬p∨q`, contrapositive.
- Predicate logic: ∀ (all), ∃ (some); De Morgan `¬∀≡∃¬`.
- Boolean algebra + equational proofs (justify each step by a law).
- Natural deduction: assume–discharge with ∧/∨/→/¬/∀/∃ rules.
- CNF = ∧ of clauses; DNF = ∨ of monomials; both always exist.
- Consistency (no contradiction) vs completeness (every valid is provable); soundness = only valid provable.

## Exam guidance

Define the notation, state the rule or theorem, show every calculation, and verify or interpret the final result.

## Practice ladder

1. **Easy - Recall:** Define the module's central idea in one or two sentences.
2. **Easy - Recognize:** Identify the correct method for a small example and explain why it fits.
3. **Medium - Apply:** Work through one representative problem without copying the example.
4. **Medium - Compare:** Contrast two methods or concepts from the module.
5. **Hard - Integrate:** Solve a university-style scenario and justify every major step.

<details>
<summary>Reveal self-evaluation guide</summary>

A complete response uses correct terminology, shows intermediate steps, connects the result to the scenario, and states one assumption or limitation.

</details>

---

[↑ Semester I](../README.md) · [Subject index](README.md) · [Next: Module 2 →](<Module-2.md>)
