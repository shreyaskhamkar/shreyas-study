# Module 2: Well-Formed Formulae and Computable Type Checking

[← Previous: Module 1](<Module-1.md>) · [Subject index](README.md) · [Next: Module 3 →](<Module-3.md>)

## Learning outcomes

After this module, you should be able to:

- define a well-formed formula (WFF) and distinguish it from a non-formula;
- build formation trees and identify free vs bound variables;
- explain why type checking is needed and what it buys us;
- describe the limits of computable (static) type checking.


## Prerequisites

Complete [Module 1](Module-1.md) first. Review its quick-revision section if any term below feels unfamiliar.


## Short study blocks

Study one row at a time and pause after its examples.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Well-formed formulae and grammar rules | 10-15 minutes |
| 2 | Formation trees, free variables, and bound variables | 10-15 minutes |
| 3 | Why programs need type checking | 10-15 minutes |
| 4 | Decidability and limitations of type systems | 10-15 minutes |

## Start here: the simple idea

A **well-formed formula** is a string of symbols that follows the grammar rules
of logic — like a sentence with correct grammar. A **type system** does the
same for programs: it ensures every expression has a sensible type so that
certain classes of errors are impossible at runtime.

### Everyday analogy

- WFF grammar = English grammar: "the cat sat" is grammatical; "sat cat the"
  is not, even though it uses the same words.
- Type checking = a bank teller checking that you hand over the right kind of
  token (cash, not a coupon) for the transaction — catching mistakes early.

## Well-Formed Formulae (WFF): definition

A WFF is built recursively from a formal grammar. For propositional logic, a
standard BNF:

```text
<prop>   ::= <atom> | (¬<prop>) | (<prop> ∧ <prop>) | (<prop> ∨ <prop>)
          | (<prop> → <prop>) | (<prop> ↔ <prop>)
<atom>   ::= p | q | r | ...         (propositional variables)
```

Examples:
- WFF: `(p ∧ q) → r` — constructed from atoms using the rules.
- Not a WFF: `p ∧ → q` — `∧` expects two operands; `→` has none on its left.

### Formation tree

A WFF's **parse tree** shows how it was built. For `(p ∧ q) → r`:

```text
        →
       / \
      ∧   r
     / \
    p   q
```

The leaves are atoms; each internal node is a connective. The tree makes the
structure unambiguous — important for proving things by **structural induction**.

### Free and bound variables (predicate logic)

- A variable is **free** if it is not within the scope of a quantifier.
- A variable is **bound** if it appears inside `∀x …` or `∃x …`.

Examples:

```text
∀x (P(x) → Q(y))    x is bound; y is free
∃x P(x) ∧ P(x)      first x bound; second x free
```

A formula with **no free variables** is a **sentence (closed formula)**.

A WFF should have a clear, unambiguous structure (unique readability), which the
inductive grammar guarantees.

## Computable type checking: necessity

Static type checking catches errors **before** the program runs:

- **Wrong-arity / wrong-type function calls** (`length("hi")` vs `length("hi", "ho")`).
- **Type mismatches** (using a string where a number is expected).
- **Unsafe operations** (indexing an array that the type system proves is safe).
- **Interface contracts** (ensuring a value passed across a module boundary is the
  declared type).

Benefits:

1. **Earlier bug detection** (at compile time, not in production).
2. **Clearer documentation** of intent (types are executable documentation).
3. **Compiler optimizations** (the type tells the machine how to lay out data).
4. **Refactoring safety** (changing a type surfaces all the places that break).

```text
Example (Haskell-like):
  add :: Int -> Int -> Int
  add x y = x + y
  add 3 "hi"   -- type error: second argument is String, not Int
```

## Computable type checking: limitations

### 1. Type inference is not always decidable

In a simple typed lambda calculus with type reconstruction, Hindley-Milner
(used by ML, Haskell without extensions) inference is **decidable**. But once
you add features, inference becomes **undecidable**:

- **Polymorphic recursion** in general.
- **Higher-rank polymorphism** (e.g., ∀-types under arrows).
- **Subtyping** with bounded quantification (F<:).

In those systems you must write explicit type annotations.

### 2. Some safety properties are undecidable (Rice's theorem / the halting problem)

No general static checker can prove or disprove arbitrary properties of programs
(e.g., "this loop terminates," "this array is never out of bounds") — because
that would solve the halting problem. Type systems approximate, trading
**precision** for **decidability**.

| Property | Checkable by types? |
|---|---|
| Type mismatch | Yes |
| Division by zero | Generally no (value-dependent) |
| Array bounds | Only with dependent/refinement types (limited) |
| Termination | No (undecidable) |
| Memory safety (no use-after-free) | Yes in Rust/Cyclone (ownership types) |

### 3. Type systems are conservative (false positives)

A sound type system rejects some programs that would actually run safely. The
classic trade-off:

- **Sound** = well-typed programs can't go wrong (but some safe programs rejected).
- **Complete** = every safe program accepted (but then you must reject some unsafe ones).

A **sound, complete, and computable** type system for a Turing-complete language
is impossible — pick two (or weaken "Turing-complete").

### 4. Expressiveness vs decidability

More expressive types (dependent types, refinement types) let you express
stronger invariants, but checking them usually **pushes some checking to
runtime** or requires theorem-prover input (e.g., Liquid Haskell, Agda, Coq).

## Common mistakes

- Treating "well-typed" as "correct" — it only rules out *some* bugs (type
  errors), not logic errors.
- Assuming all type inference is automatic (it isn't, in expressive systems).
- Expecting a static checker to prove termination or absence of all runtime errors.

## Memory rules

- WFF = grammar-valid; non-WFF = grammar-violating strings.
- Free variable = not bound by a quantifier; bound = inside ∀/∃ scope.
- Type checking catches type/arity errors early → safer, clearer, faster.
- Inference is decidable for Hindley-Milner but undecidable with full
  polymorphic recursion / higher-rank / subtyping.
- Sound + complete + computable type checking is impossible for Turing-complete
  code; pick two.

## Mini Quiz

Attempt all questions before revealing the answers.

1. Which of these is a WFF: `(p ∧ q) → r`, `p ∧ → q`, or both?
2. In `∀x (P(x) ∨ Q(y))`, which variable is free and which is bound?
3. Name one benefit of static type checking.
4. Why can't a type system statically rule out all array-out-of-bounds errors?
5. What must you give up if you want a sound, complete, and decidable type system
   for a Turing-complete language?

## Answers

<details>
<summary>Reveal answers</summary>


1. Only `(p ∧ q) → r`.
2. x is bound (in scope of ∀x); y is free.
3. Any one: earlier bug detection, documentation, optimization, or refactoring safety.
4. Bounds depend on runtime values (a dependent/refinement property); general
   static checking of such properties is undecidable.
5. You cannot have all three — at least one of soundness, completeness, or
   decidability must be relaxed (or the language restricted).

</details>

## Quick revision box

- WFF follows an inductive grammar; parse tree shows structure; unique readability.
- Free = not in scope of ∀/∃; bound = under a quantifier; closed = no free vars.
- Type checking = catch type errors at compile time; benefits: safety, docs, speed.
- Decidable inference (Hindley-Milner) vs undecidable (higher-rank, poly recursion, subtyping).
- Sound ≠ Complete ≠ Computable: for Turing-complete languages, no type system has all three.

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

[← Previous: Module 1](<Module-1.md>) · [Subject index](README.md) · [Next: Module 3 →](<Module-3.md>)
