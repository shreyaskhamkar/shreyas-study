# Module 8: Polymorphism

[← Previous: Module 7](<Module-7.md>) · [Subject index](README.md) · [Next: Module 9 →](<Module-9.md>)

## Learning outcomes

- explain how one function can work with many types;
- read a generic Python example;
- distinguish parametric and behavior-based polymorphism;
- connect polymorphism with reusable code.

## Prerequisites

Complete [Module 7](Module-7.md) first. You should understand type discipline and the difference between concrete and generic types.

## The idea in one sentence

Polymorphism means one piece of code can work in many forms without changing its core logic.

## Everyday analogy

Think of a universal remote. The same button press can control a TV, fan, or AC because each device understands the same idea in its own way.

## Syntax

```python
from typing import TypeVar

T = TypeVar("T")

def first(items: list[T]) -> T:
    return items[0]
```

## Worked example

```python
first([10, 20, 30])
first(["a", "b", "c"])
```

Step by step:

1. The same function is used for numbers.
2. The same function is used for text.
3. The function logic does not change.
4. Only the type of input changes.

## Why this matters in practice

- In college notes, polymorphism shows how generic code stays reusable.
- In real code, it helps with helper functions, containers, and behavior-based APIs.
- It reduces duplication because one design can serve many types.

## Important concepts

### Parametric polymorphism

Parametric polymorphism uses a type variable such as `T`.

```python
def echo(value: T) -> T:
    return value
```

### Behavior-based polymorphism

Different types can support the same operation.

```python
len("abc")
len([1, 2, 3])
```

### Generic function

A generic function works with more than one type.

```python
def first(items: list[T]) -> T:
    return items[0]
```

## Technical meaning

Polymorphism means many forms. In Python, it appears when one function or method works across different types without changing its core logic. This can happen through type variables, shared methods, or operations defined by behavior.

## Memory rule

- parametric = type variable
- behavior-based = shared operations
- generic = works for more than one type

## Quick check

- Why is `first` polymorphic?
- What type does `T` represent?
- How does Python support many forms of behavior?
- Why is polymorphism useful in reusable code?

## Short exam answer

Polymorphism means one piece of code can work with many types. In Python, it appears in generic functions that use type variables and in behavior-based code where different objects provide the same operations. It makes programs more reusable and flexible.

---

[← Previous: Module 7](<Module-7.md>) · [Subject index](README.md) · [Next: Module 9 →](<Module-9.md>)
