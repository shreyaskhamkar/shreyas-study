# Module 9: Inference

[← Previous: Module 8](<Module-8.md>) · [Subject index](README.md) · [Next: Module 10 →](<Module-10.md>)

## Learning outcomes

- explain what type hints do in Python;
- understand how tools infer local types;
- read a simple inferred type from code;
- use `TypeVar` in a basic generic example.

## Prerequisites

Complete [Module 8](Module-8.md) first. You should understand generic types and polymorphic code.

## The idea in one sentence

Type hints describe expected types, while type inference is the process of working out types from the code itself.

## Everyday analogy

Think of a teacher marking a notebook. Sometimes the notebook already has labels written on it. Other times the teacher can still guess the meaning from the examples inside.

## Syntax

```python
from typing import TypeVar

T = TypeVar("T")

def identity(x: T) -> T:
    return x
```

## Worked example

```python
numbers = [1, 2, 3]
first = numbers[0]
```

Step by step:

1. `numbers` is a list of integers.
2. `numbers[0]` gives the first item.
3. A type checker can infer that `first` is an `int`.

## Why this matters in practice

- In college notes, type hints help explain intent without changing runtime behavior.
- In real code, tools use hints to catch mistakes before they become bugs.
- Inference reduces repeated typing while still keeping code readable.

## Important concepts

### Type hint

A type hint tells readers and tools what kind of value is expected.

```python
def greet(name: str) -> str:
    return "Hello " + name
```

### Inference

Inference is the process of deriving a type from usage.

```python
count = 10
```

Here a tool can infer that `count` is an `int`.

### `TypeVar`

`TypeVar` is a placeholder for a generic type.

```python
T = TypeVar("T")
```

## Technical meaning

Type inference is the process of figuring out the most general type that fits a piece of code. In Python, this is mostly done by type-checking tools rather than by the runtime itself.

## Memory rule

- hint = tell the tool what you intend
- inference = tool works it out from code
- TypeVar = reusable placeholder for a type

## Quick check

- Does Python enforce most type hints at runtime?
- What does `T` stand for in the example?
- Why do type checkers help?
- What is the difference between a hint and an inference?

## Short exam answer

Type hints describe the intended type of values, and type inference is the process of determining a type from code usage. In Python, hints are mainly for tools and readers, while inference helps reduce repetitive annotations and catch mistakes early.

---

[← Previous: Module 8](<Module-8.md>) · [Subject index](README.md) · [Next: Module 10 →](<Module-10.md>)
