# Module 10: User-Defined Types

[← Previous: Module 9](<Module-9.md>) · [Subject index](README.md) · [Next: Module 11 →](<Module-11.md>)

## Learning outcomes

- create custom Python types;
- use `class`, `@dataclass`, and `Enum`;
- explain why custom types improve clarity;
- read simple object-based code.

## Prerequisites

Complete [Module 9](Module-9.md) first. You should understand inferred types and generic placeholders.

## The idea in one sentence

User-defined types let you create new kinds of values that fit your own problem domain.

## Everyday analogy

Think of a school database. It does not just store random text. It stores students, classes, subjects, and attendance records, each with a clear shape.

## Syntax

```python
from dataclasses import dataclass
from enum import Enum

@dataclass
class Student:
    roll_no: int
    name: str

class TrafficLight(Enum):
    RED = 1
    YELLOW = 2
    GREEN = 3
```

## Worked example

```python
student = Student(1, "Asha")
light = TrafficLight.RED
```

Step by step:

1. `Student(1, "Asha")` creates one student object.
2. `TrafficLight.RED` picks a fixed choice from the enum.
3. The data now has structure instead of being plain unrelated values.

## Why this matters in practice

- In college notes, custom types show how programs model real things clearly.
- In real code, they make forms, records, states, and business rules easier to manage.
- They reduce mistakes because related data is grouped together.

## Important concepts

### `class`

A class defines a custom type.

```python
class Book:
    def __init__(self, title):
        self.title = title
```

### `@dataclass`

A dataclass is a convenient way to define a data-holding class.

```python
@dataclass
class Point:
    x: int
    y: int
```

### `Enum`

An enum is a fixed set of named values.

```python
class Day(Enum):
    MON = 1
    TUE = 2
```

## Technical meaning

User-defined types let a program model the real world or a problem domain directly. That makes code easier to read, test, and change because the data structure reflects the meaning of the data.

## Memory rule

- class = custom type
- dataclass = simple record-like type
- Enum = fixed named options

## Quick check

- Why use a dataclass instead of a plain dict?
- When is an Enum better than a string?
- What does a class let you model?
- How does a custom type improve readability?

## Short exam answer

User-defined types let programmers create their own data models using classes, dataclasses, and enums. They are useful because they group related values, make code easier to read, and help represent real-world concepts more clearly.

---

[← Previous: Module 9](<Module-9.md>) · [Subject index](README.md) · [Next: Module 11 →](<Module-11.md>)
