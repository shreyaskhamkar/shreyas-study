# Module 1: Standard Constructs

[↑ Semester I](../README.md) · [Subject index](README.md) · [Next: Module 2 →](<Module-2.md>)

## Learning outcomes

- use Python control flow correctly;
- write simple loops and comprehensions;
- recognize the syntax of common program blocks;
- explain how Python groups and repeats statements.

## Prerequisites

No earlier module is required. Start with the standard constructs and review each unfamiliar term before continuing.

## The idea in one sentence

Standard constructs are the everyday building blocks that let Python make decisions, repeat work, and build new values.

## Everyday analogy

Think of a restaurant order system. It checks a condition, chooses one branch, repeats actions for every item, and sometimes builds a final list of items to serve.

## Syntax

```python
if score >= 75:
    grade = "Distinction"
elif score >= 40:
    grade = "Pass"
else:
    grade = "Fail"
```

```python
squares = [x * x for x in range(1, 6) if x % 2 == 0]
```

## Worked example

```python
total = 0
for n in [1, 2, 3]:
    total += n
```

Step by step:

1. Start with `total = 0`.
2. Take `n = 1`, add it to `total`.
3. Take `n = 2`, add it to `total`.
4. Take `n = 3`, add it to `total`.
5. Final result is `6`.

## Why this matters in practice

- In college notes, these constructs show how code is structured.
- In real code, they are used for menus, validation, filtering, summarizing, and repeated processing.
- They are the basic grammar of almost every Python program.

## Important concepts

### `if/elif/else`

Use this when code must choose one path from several options.

```python
if mark >= 75:
    result = "High"
elif mark >= 40:
    result = "Medium"
else:
    result = "Low"
```

### `for`

Use this when you want to go through items one by one.

```python
for item in [1, 2, 3]:
    print(item)
```

### `while`

Use this when the loop should continue until a condition changes.

```python
count = 3
while count > 0:
    count -= 1
```

### Comprehension

Use this to create a new collection from existing data.

```python
[x * x for x in range(5)]
```

## Technical meaning

Standard constructs control the flow of execution. They determine how statements are grouped, how conditions are tested, and how repetition is expressed in a Python program.

## Memory rule

- condition -> `if`
- repeated items -> `for`
- repeated test -> `while`
- new list from old data -> comprehension

## Quick check

- Why is indentation important in Python?
- What does a list comprehension create?
- When should you use `while` instead of `for`?
- What does `elif` mean?

## Short exam answer

Standard constructs are the basic control features of Python. `if/elif/else` selects between choices, `for` and `while` repeat work, and comprehensions build new collections in a compact form. They are the core tools for program flow.

---

[↑ Semester I](../README.md) · [Subject index](README.md) · [Next: Module 2 →](<Module-2.md>)
