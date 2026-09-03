# Module 7: Type Discipline

[← Previous: Module 6](<Module-6.md>) · [Subject index](README.md) · [Next: Module 8 →](<Module-8.md>)

## Learning outcomes

- explain dynamic typing in Python;
- compare runtime checks and static checks;
- read and write simple type hints;
- describe how Python handles type-related mistakes.

## Prerequisites

Read [Module 6](Module-6.md) first. You should already be comfortable with functions as values.

## The idea in one sentence

Type discipline describes when and how Python checks types and what happens when the wrong kind of value is used.

## Everyday analogy

Think of a shop counter that checks whether a card is valid before letting a payment go through. Some checks happen right away, and some warnings can be added by the system in advance.

## Syntax

```python
def add(x: int, y: int) -> int:
    return x + y
```

```python
name: str = "Asha"
```

## Worked example

```python
value = 10 + 5
# value = 10 + "five"   # TypeError at runtime
```

Step by step:

1. `10 + 5` works because both values are numbers.
2. `10 + "five"` does not work because the values are not compatible.
3. Python reports the problem when the line runs.

## Why this matters in practice

- In college notes, type discipline explains how errors are caught.
- In real code, it helps you understand why some mistakes fail immediately and why type hints improve readability.
- It is especially useful when programs become large and many people work on the same code.

## Important concepts

### Dynamic typing

Python checks many type problems at runtime.

### Type hints

Type hints describe intended types for readers and tools.

```python
def greet(name: str) -> str:
    return "Hello " + name
```

### `isinstance`

`isinstance` checks a value at runtime.

```python
isinstance(42, int)
```

### Type safety

Type safety means avoiding invalid operations on the wrong kind of value.

## Technical meaning

Type discipline is the set of rules that control how Python checks and enforces or reports type-related behavior. Python is dynamically typed, but annotations and external type tools can improve discipline and reduce mistakes.

## Memory rule

- dynamic typing = check while running
- type hints = document intent
- type safety = avoid invalid operations

## Quick check

- Is Python static or dynamic by default?
- What does `x: int` mean?
- When would `isinstance` be useful?
- Why might type hints still matter in Python?

## Short exam answer

Python is dynamically typed, so many type checks happen when code runs. Type hints describe intended types for humans and tools, and functions like `isinstance` can be used for runtime checks. Good type discipline reduces invalid operations and makes code easier to maintain.

---

[← Previous: Module 6](<Module-6.md>) · [Subject index](README.md) · [Next: Module 8 →](<Module-8.md>)
