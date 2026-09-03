# Module 13: Operational Semantics

[← Previous: Module 12](<Module-12.md>) · [Subject index](README.md) · [Next: Module 14 →](<Module-14.md>)

## Learning outcomes

- describe execution as step-by-step evaluation;
- trace a simple Python expression;
- explain why order of evaluation matters;
- connect evaluation rules to program behavior.

## Prerequisites

Complete [Module 12](Module-12.md) first. You should understand recursion and step-by-step reasoning.

## The idea in one sentence

Operational semantics explains how a program runs by describing what happens at each evaluation step.

## Everyday analogy

Think of following a cooking recipe. Each step changes the state of the dish until the final meal is ready.

## Syntax

```python
result = (2 + 3) * 4
```

## Worked example

```text
(2 + 3) * 4 -> 5 * 4 -> 20
```

Step by step:

1. Compute the inner addition first.
2. Replace `(2 + 3)` with `5`.
3. Multiply `5 * 4`.
4. Final result is `20`.

## Why this matters in practice

- In college notes, operational semantics shows how to reason about execution.
- In real code, it helps you understand why order, side effects, and function calls matter.
- It is useful when debugging and when studying how interpreters work.

## Important concepts

### Syntax

Syntax is how code is written.

```python
value = 10
```

### Semantics

Semantics is what the code means when it runs.

### Reduction

Reduction is one evaluation step.

```text
2 + 3 -> 5
```

### Stack frame

A function call creates a new stack frame.

```python
def add(x, y):
    return x + y
```

## Technical meaning

Operational semantics is a formal description of computation. It explains how expressions are transformed into simpler expressions until a final result is reached. This gives a precise model of program execution.

## Memory rule

- syntax = form
- semantics = behavior
- reduction = step-by-step evaluation

## Quick check

- What is the result of `(2 + 3) * 4`?
- Why does evaluation order matter?
- What does a function call create?
- Why is operational semantics useful in debugging?

## Short exam answer

Operational semantics describes how a program executes by showing each evaluation step. It explains the meaning of code through reduction, evaluation order, and function-call behavior. This helps programmers reason about how expressions become final results.

---

[← Previous: Module 12](<Module-12.md>) · [Subject index](README.md) · [Next: Module 14 →](<Module-14.md>)
