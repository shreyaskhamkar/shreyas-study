# Module 5: Higher-Order Functions

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [Next: Module 6 →](<Module-6.md>)

## Learning outcomes

- explain what a higher-order function is in Python;
- use `map`, `filter`, and `lambda` with confidence;
- write a function that receives or returns another function;
- trace a small function example step by step.

## Prerequisites

Complete [Module 4](Module-4.md) first. Make sure you are comfortable treating functions as values.

## The idea in one sentence

A higher-order function is a function that works with other functions as values.

## Everyday analogy

Think of a teacher who does not give one fixed answer. Instead, the teacher gives a rule such as "double every number" or "keep only even numbers." You then apply that rule to a whole list.

## Syntax

```python
def apply_twice(func, value):
    return func(func(value))

double = lambda x: x * 2
```

```python
numbers = [1, 2, 3]
squared = list(map(lambda x: x * x, numbers))
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
```

## Worked example

```python
def square(x):
    return x * x

result = list(map(square, [1, 2, 3]))
```

Step by step:

1. `map(square, [1, 2, 3])` sends each list item into `square`.
2. `square(1)` gives `1`.
3. `square(2)` gives `4`.
4. `square(3)` gives `9`.
5. `list(...)` collects the results into `[1, 4, 9]`.

## Why this matters in practice

- In college notes, higher-order functions show how one idea can control many values.
- In real code, they are useful in data cleaning, report generation, validation, and repeated transformations.
- They help you write shorter code without repeating the same loop logic again and again.

## Important concepts

### Higher-order function

A higher-order function can:

- take a function as input;
- return a function as output;
- or do both.

Examples:

```python
def apply(func, value):
    return func(value)
```

```python
def make_multiplier(n):
    return lambda x: x * n
```

### `map`

`map` applies a function to every item in an iterable.

```python
list(map(str, [1, 2, 3]))
```

Result:

```python
['1', '2', '3']
```

### `filter`

`filter` keeps only the items that pass a test.

```python
list(filter(lambda x: x > 2, [1, 2, 3, 4]))
```

Result:

```python
[3, 4]
```

### `lambda`

`lambda` creates a short anonymous function when a full `def` feels too heavy.

```python
lambda x: x + 1
```

## Technical meaning

Python treats functions as first-class values. That means functions can be stored in variables, passed into other functions, and returned from other functions. A higher-order function uses that property to make programs more reusable and expressive.

## Memory rule

- `map` transforms
- `filter` selects
- `lambda` writes a small function quickly
- higher-order means "function with function power"

## Quick check

- Why is `map` higher-order?
- What does `lambda x: x + 1` do?
- What does `list(filter(...))` return?
- Why is `make_multiplier` a higher-order function?

## Short exam answer

A higher-order function is a function that takes another function as input or returns one as output. In Python, `map`, `filter`, and functions that return closures are common examples. They reduce repetition and make code easier to reuse.

---

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [Next: Module 6 →](<Module-6.md>)
