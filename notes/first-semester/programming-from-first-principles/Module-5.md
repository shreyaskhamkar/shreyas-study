# Module 5: Anonymous Functions and Lambda Calculus

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [Next: Module 6 →](<Module-6.md>)

## Learning outcomes

- read simple lambda expressions;
- explain the idea behind lambda calculus;
- trace a tiny function call step by step;
- connect formal notation to Python function syntax.

## Prerequisites

Read [Module 4](Module-4.md) first. You should already be comfortable with functions and generators.

## The idea in one sentence

Lambda calculus is a small formal system for describing functions, while Python `lambda` gives a short way to write one-line anonymous functions.

## Everyday analogy

Think of a shortcut note scribbled on a sticky paper. It is not the full document, but it still tells you exactly what to do.

## Syntax

```python
double = lambda x: x + 1
```

```text
(\x. x + 1) 5 -> 5 + 1 -> 6
```

## Worked example

```python
add_one = lambda n: n + 1
value = add_one(5)
```

Step by step:

1. `add_one` stores a function.
2. The function takes one input `n`.
3. The call `add_one(5)` substitutes `n = 5`.
4. The result is `6`.

## Why this matters in practice

- In college notes, lambda notation helps explain how functions work formally.
- In real code, `lambda` is useful for small helper logic in sorting, mapping, and filtering.
- It keeps short function logic in one place when a full `def` is unnecessary.

## Important concepts

### `lambda`

`lambda` creates a small anonymous function.

```python
lambda x: x * 2
```

### Lambda calculus

Lambda calculus uses only a few ideas:

- variables
- abstraction
- application

### Abstraction

Abstraction means creating a function.

```text
\x. x + 1
```

### Application

Application means using the function with an argument.

```text
(\x. x + 1) 5
```

## Technical meaning

Lambda calculus is a formal model of computation. It explains function creation, substitution, scope, and reduction. Python `lambda` is inspired by the same function-centered thinking, even though Python has a much richer syntax.

## Memory rule

- abstraction = make a function
- application = call the function
- reduction = simplify the result

## Quick check

- What is the Python form of an anonymous function?
- What does `(\x. x + 1) 5` reduce to?
- Why is lambda calculus important?
- When should you avoid `lambda`?

## Short exam answer

Lambda calculus is a formal system for describing functions and computation using variables, abstraction, and application. In Python, `lambda` is a short syntax for anonymous functions, and it is often used in small helper expressions such as `map` or `sorted(key=...)`.

---

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [Next: Module 6 →](<Module-6.md>)
