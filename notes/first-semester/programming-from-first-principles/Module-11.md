# Module 11: Recursion

[← Previous: Module 10](<Module-10.md>) · [Subject index](README.md) · [Next: Module 12 →](<Module-12.md>)

## Learning outcomes

- write a recursive Python function;
- explain base case and recursive case;
- trace a recursion step by step;
- decide when recursion is a good fit.

## Prerequisites

Read [Module 10](Module-10.md) first. You should understand concrete and generic types.

## The idea in one sentence

Recursion solves a problem by calling the same function on a smaller version of the problem.

## Everyday analogy

Think of a set of nested boxes. To find the smallest item, you open one box, then the smaller box inside it, then the smaller one inside that.

## Syntax

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

## Worked example

```python
factorial(3)
# 3 * factorial(2)
# 3 * 2 * factorial(1)
# 3 * 2 * 1 * factorial(0)
# 6
```

Step by step:

1. `factorial(3)` needs `3 * factorial(2)`.
2. `factorial(2)` needs `2 * factorial(1)`.
3. `factorial(1)` needs `1 * factorial(0)`.
4. `factorial(0)` returns `1`.
5. The results combine back to `6`.

## Why this matters in practice

- In college notes, recursion shows how one problem can be broken into smaller ones.
- In real code, it is common in trees, folder traversal, and divide-and-conquer algorithms.
- It gives a clean way to describe nested or self-similar data.

## Important concepts

### Base case

The base case stops the recursion.

```python
if n == 0:
    return 1
```

### Recursive case

The recursive case makes the problem smaller.

```python
return n * factorial(n - 1)
```

### Structural recursion

Structural recursion follows the shape of the data, such as a list.

```python
def total(items):
    if not items:
        return 0
    return items[0] + total(items[1:])
```

## Technical meaning

Recursion is a way to define a computation in terms of itself. The program must always make progress toward a stopping case, or it will keep calling itself forever.

## Memory rule

- base case = stop
- recursive case = smaller problem
- no base case = infinite recursion

## Quick check

- What is the base case for factorial?
- Why does recursion need a smaller input?
- When might Python recursion be a poor choice?
- What makes recursion structural?

## Short exam answer

Recursion is a technique where a function solves a problem by calling itself on a smaller version of the same problem. A recursive function needs a base case to stop and a recursive case to move toward that stop. It is useful for nested or self-similar data.

---

[← Previous: Module 10](<Module-10.md>) · [Subject index](README.md) · [Next: Module 12 →](<Module-12.md>)
