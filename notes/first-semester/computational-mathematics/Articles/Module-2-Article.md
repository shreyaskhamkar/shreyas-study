# Module 2 Article: Grammar, Trees, and the Cost of Safety

## The big idea

A program is a string of symbols. Before a machine can reason about it, it must
be **well-formed** — built according to a precise grammar. Type checking is the
next gate: it rejects programs that combine values in illegal ways. These give
safety, but **stronger** checks demand **more** from the programmer, and
sometimes make automatic checking impossible.

## Grammar and formation trees

A **context-free grammar** defines what counts as a well-formed formula (WFF).
For propositional logic:

```text
<formula> ::= <atom>
            | (¬ <formula>)
            | (<formula> <binop> <formula>)
<binop>   ::= ∧ | ∨ | → | ↔
<atom>    ::= p | q | r | ...
```

Because every rule adds exactly one operator, each formula has a **unique**
parse tree (unique readability). A malformed string like `p ∧ → q` has no valid
parse — it is *syntactically* invalid.

### Worked example: parse tree for `(p ∧ q) → r`

```text
        →
       / \
      ∧   r
     / \
    p   q
```

The tree records the **order of operations**: ∧ binds before → because of the
parentheses. Two structurally identical trees (modulo renaming) mean two graphs
are **isomorphic**.

## Free vs bound: scope matters

In `(∀x P(x)) → Q(y)`:

- `x` is **bound** (inside the scope of `∀x`).
- `y` is **free** (no quantifier governs it).

A formula with **no free variables** is a **sentence** — its truth value doesn't
depend on an assignment, so it either holds or doesn't.

## Type checking: catching mistakes early

Static type checkers examine a program **without running it** and reject programs
that violate typing rules:

```haskell
length :: [a] -> Int
length "hello"   -- OK, "hello" is a list of Char
length 42        -- ERROR: 42 is an Int, not a list
```

### What type checking buys you

1. **No type errors at runtime** (e.g., adding a string to a number).
2. **Documentation**: types document the intended shape of data.
3. **Refactoring safety**: changing a type surfaces every call site that breaks.
4. **Optimisation**: the compiler knows the layout of data.

## The decidability trade-off

- **Hindley-Milner** (used by ML, Haskell 98) — type inference is **decidable**
  and **complete**: the compiler infers the most general type with no
  annotations.
- But more **expressive** systems make inference **undecidable**:
  - **Polymorphic recursion** (a recursive function whose recursive calls change
    the type) — typing is undecidable.
  - **Higher-rank polymorphism** (e.g., ∀a. a→a as an argument) — typing is
    undecidable without annotations.
  - **Subtype polymorphism** in the presence of other features.

### The fundamental limitation

For any **Turing-complete** type system:
- you can have **soundness + decidability**, but then you must **reject some safe
  programs** (incomplete); or
- you can try for **completeness**, but then checking becomes **undecidable** or
  the system is **unsound**.

This is the same impossibility that shadows logic itself (Gödel): you pick which
two of {sound, complete, decidable} you want.

## Worked example: the undecidability boundary

```haskell
-- Hindley-Milner infers this fine:
f x = (x, x)            -- f :: a -> (a, a)

-- Polymorphic recursion needs an annotation:
data Nest a = Z a | S (Nest (a, a))
size :: Nest a -> Int
size (Z _) = 1
size (S n) = 1 + size n   -- recursive call type changes: Nest (a,a)
```

A compiler that refuses annotations here could never accept `size`; one that
accepts everything cannot be checked automatically.

## Exam angle

For "why is strong typing not a free lunch?":

1. Define soundness (no false acceptances) and completeness (no false rejections).
2. State that for Turing-complete languages, you cannot have sound + complete +
   decidable type checking simultaneously.
3. Give a concrete undecidable case: polymorphic recursion or higher-rank types.
4. Note the practical outcome: require programmer annotations.

> Tip: connect this back to Gödel — the same "you can't have all three" idea
> appears in logic (Module 1) and in type systems. Examiners reward the link.

## See also

- Module 1 for soundness/completeness of proof systems.
- Module 5 (vector spaces) for how type-like structure (closure) appears in algebra.
