# Module 2: Standard Data Types

[← Previous: Module 1](<Module-1.md>) · [Subject index](README.md) · [Next: Module 3 →](<Module-3.md>)

## Learning outcomes

- identify common Python data types;
- choose a suitable collection for a small problem;
- read simple Python syntax and examples;
- explain the difference between built-in types and containers.

## Prerequisites

Complete [Module 1](Module-1.md) first. Review its control-flow and expression examples if any term below feels unfamiliar.

## The idea in one sentence

A data type tells Python what kind of value you are using and what operations are allowed.

## Everyday analogy

Think of a stationery box with separate slots for pens, pencils, erasers, and clips. Each item fits a different slot, and the slot tells you what belongs there.

## Syntax

```python
x = 5
name = "Asha"
marks = [12, 18, 20]
point = (3, 4)
tags = {"python", "exam"}
student = {"id": 1, "name": "Asha"}
```

## Worked example

```python
count = 3
ratio = 2.5
passed = True
letter = "A"
numbers = [1, 2, 3]
```

Here:

- `count` is an `int`
- `ratio` is a `float`
- `passed` is a `bool`
- `letter` is a `str`
- `numbers` is a `list`

## Why this matters in practice

- In college notes, types help you classify values clearly.
- In real code, types help you choose the right storage form for marks, names, statuses, and grouped data.
- They reduce confusion when a value should behave like a number, text, or collection.

## Important concepts

### `int`

Whole numbers.

```python
age = 21
```

### `float`

Numbers with decimal points.

```python
price = 99.50
```

### `bool`

True/False values.

```python
is_passed = True
```

### `str`

Text.

```python
name = "Asha"
```

### `list`

An ordered, changeable collection.

```python
marks = [45, 52, 61]
```

### `tuple`

An ordered, fixed collection.

```python
point = (3, 4)
```

### `set`

A collection with unique values only.

```python
tags = {"python", "exam"}
```

### `dict`

A key-value mapping.

```python
student = {"id": 1, "name": "Asha"}
```

## Technical meaning

In Python, every value has a type. The type controls behavior such as addition, indexing, membership checks, and method availability. Collections group related values and describe how those values are organized.

## Memory rule

- list = ordered and changeable
- tuple = ordered and fixed
- set = unique items only
- dict = key to value mapping

## Quick check

- What type is `"A"`?
- Which type is best for unique tags?
- Which type is best for named fields?
- Why would you use a tuple instead of a list?

## Short exam answer

Python data types classify values such as numbers, text, and collections. `int`, `float`, `bool`, and `str` are basic built-in types, while `list`, `tuple`, `set`, and `dict` are common collection types. Choosing the right type helps programs stay clear and correct.

---

[← Previous: Module 1](<Module-1.md>) · [Subject index](README.md) · [Next: Module 3 →](<Module-3.md>)
