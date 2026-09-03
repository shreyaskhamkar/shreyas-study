# Module 10: Concrete Types

[← Previous: Module 9](<Module-9.md>) · [Subject index](README.md) · [Next: Module 11 →](<Module-11.md>)

## Learning outcomes

- identify concrete Python types;
- separate specific types from generic placeholders;
- explain why a concrete type is fully known;
- recognize concrete vs generic examples.

## Prerequisites

Read [Module 9](Module-9.md) first. You should understand classes, dataclasses, and enums.

## The idea in one sentence

A concrete type is a fully known type such as `int`, `bool`, `str`, or `Student`.

## Everyday analogy

Think of a labeled box with one exact purpose. A box marked "pens" is specific, while a box marked "any stationery" is still open-ended.

## Syntax

```python
age: int = 20
passed: bool = True
name: str = "Asha"
```

## Worked example

```python
from typing import TypeVar

T = TypeVar("T")

def first(items: list[T]) -> T:
    return items[0]
```

Step by step:

1. `int`, `bool`, and `str` are concrete.
2. `T` is a placeholder, not concrete.
3. `list[T]` is still generic because the element type is not fixed.
4. `list[int]` is concrete because the element type is known.

## Why this matters in practice

- In college notes, concrete types help you separate general ideas from exact ones.
- In real code, concrete types make APIs and data models easier to understand.
- They are useful when a function must work with a specific kind of value.

## Important concepts

### Concrete type

A concrete type has no unresolved type variable.

```python
count: int = 5
```

### Generic type

A generic type still has a placeholder.

```python
items: list[T]
```

### Fully known type

The type is exact and no part of it is left open.

```python
numbers: list[int]
```

## Technical meaning

A concrete type is one exact type rather than a family of possible types. It has a fixed interpretation in the program and does not depend on later substitution of a placeholder.

## Memory rule

- concrete = exact type
- generic = type still open
- `T` = placeholder

## Quick check

- Is `int` concrete?
- Is `T` concrete?
- Why is `list[int]` more specific than `list[T]`?
- Why do concrete types matter in APIs?

## Short exam answer

A concrete type is a fully known type with no unresolved type variables. Examples include `int`, `bool`, `str`, and specific classes like `Student`. Concrete types are useful because they clearly define what kind of value a program is working with.

---

[← Previous: Module 9](<Module-9.md>) · [Subject index](README.md) · [Next: Module 11 →](<Module-11.md>)
