# Module 4: Iteration and Lazy Evaluation

[← Previous: Module 3](<Module-3.md>) · [Subject index](README.md) · [Next: Module 5 →](<Module-5.md>)

## Learning outcomes

- explain eager and lazy behavior in Python;
- write and read a generator;
- use `yield` to produce values on demand;
- connect iteration with memory-friendly code.

## Prerequisites

Read [Module 3](Module-3.md) first. Make sure you are comfortable with loops and comprehensions.

## The idea in one sentence

Iteration lets Python move through values repeatedly, while lazy behavior delays work until a value is actually needed.

## Everyday analogy

Think of a water tap. You do not fill every bucket in advance. You open the tap and take water only when needed. A generator behaves in a similar on-demand way.

## Syntax

```python
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1
```

## Worked example

```python
nums = count_up_to(3)
first = next(nums)
second = next(nums)
```

Step by step:

1. `count_up_to(3)` creates a generator.
2. `next(nums)` gives `1`.
3. The generator pauses.
4. The next `next(nums)` gives `2`.
5. Another call gives `3`.

## Why this matters in practice

- In college notes, generators show how Python can delay work.
- In real code, they are useful for large files, streams, and data pipelines.
- They help save memory because values are produced one at a time.

## Important concepts

### Eager evaluation

Python usually computes values right away.

```python
result = 2 + 3
```

### Lazy behavior

Lazy behavior waits until the value is needed.

```python
def numbers():
    yield 1
    yield 2
```

### Generator

A generator is an iterator that produces values one by one.

```python
def gen():
    yield "A"
    yield "B"
```

### `yield`

`yield` returns a value and pauses the function so it can continue later.

## Technical meaning

Lazy evaluation means computation is delayed until the result is required. Python is not fully lazy, but generators and iterators give a lazy-style way to handle sequences efficiently.

## Memory rule

- eager = compute now
- lazy = compute when needed
- `yield` = hand out one value and pause

## Quick check

- Why does `next()` work on a generator?
- What does `yield` do?
- Why are generators useful for large data?
- How is a generator different from a list?

## Short exam answer

Python is usually eager, but generators provide lazy-style evaluation. A generator uses `yield` to produce values one at a time, which helps save memory and makes it easier to work with large or endless sequences.

---

[← Previous: Module 3](<Module-3.md>) · [Subject index](README.md) · [Next: Module 5 →](<Module-5.md>)
