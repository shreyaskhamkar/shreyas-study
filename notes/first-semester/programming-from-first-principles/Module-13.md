# Module 13: Protocols and Shared Behavior

[← Previous: Module 12](<Module-12.md>) · [Subject index](README.md) · [Next: Module 14 →](<Module-14.md>)

## Learning outcomes

- describe shared behavior in Python;
- use `Protocol` or `ABC` to state an interface;
- understand duck typing;
- explain why shared behavior is useful.

## Prerequisites

Read [Module 12](Module-12.md) first. You should be comfortable with step-by-step reasoning about code behavior.

## The idea in one sentence

Protocols and shared behavior let one piece of code work with many types as long as they support the same operations.

## Everyday analogy

Think of different kinds of vehicles. A car and a bus are different, but both can move forward and stop. The behavior matters more than the label.

## Syntax

```python
from typing import Protocol

class HasArea(Protocol):
    def area(self) -> float:
        ...

def print_area(shape: HasArea) -> None:
    print(shape.area())
```

## Worked example

```python
class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius
```

Step by step:

1. `Circle` has an `area()` method.
2. `print_area` only needs something that supports `area()`.
3. The exact class name matters less than the behavior.

## Why this matters in practice

- In college notes, this module shows how Python handles shared behavior.
- In real code, it helps you write functions that accept many object types.
- It makes code flexible without forcing everything into one inheritance tree.

## Important concepts

### Duck typing

If an object behaves correctly, it fits.

```python
def show_area(shape):
    print(shape.area())
```

### Protocol

A protocol describes the operations an object must support.

```python
class HasArea(Protocol):
    def area(self) -> float:
        ...
```

### ABC

An abstract base class is a class meant to define shared behavior for subclasses.

## Technical meaning

Shared behavior is a way to write code that works with many types as long as they support the same operations. Python often uses duck typing, while `Protocol` and `ABC` let you describe that behavior more explicitly for tools and readers.

## Memory rule

- protocol = behavior contract
- duck typing = behavior matters more than type name
- ABC = abstract base class

## Quick check

- What does `HasArea` describe?
- Why is duck typing useful?
- How is a protocol different from a plain class?
- When would you use an ABC?

## Short exam answer

Protocols and shared behavior let Python code work with many different types as long as those types provide the same methods. Duck typing uses behavior directly, while `Protocol` and `ABC` make the expected behavior more explicit.

---

[← Previous: Module 12](<Module-12.md>) · [Subject index](README.md) · [Next: Module 14 →](<Module-14.md>)
