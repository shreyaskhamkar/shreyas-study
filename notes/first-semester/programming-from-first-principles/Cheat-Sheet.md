# Cheat Sheet: Programming from First Principles

## Module 1

```python
marks = [10, 20]
student = {"id": 1, "name": "Asha"}
```

- `int`, `float`, `bool`, `str`
- `list`, `tuple`, `set`, `dict`

## Module 2

```python
list(map(lambda x: x * 2, [1, 2, 3]))
```

- higher-order function = takes or returns a function
- `map` transforms, `filter` selects

## Module 3

```python
if score >= 40:
    result = "Pass"
```

- indentation defines blocks
- use comprehensions for compact collection building

## Module 4

```python
def gen():
    yield 1
```

- generators produce values on demand
- `yield` pauses and resumes

## Module 5

```python
double = lambda x: x + 1
```

- lambda calculus explains functions and application

## Module 6

```python
def make_adder(n):
    return lambda x: x + n
```

- closures remember outer values

## Module 7

```python
def add(x: int, y: int) -> int:
    return x + y
```

- Python is dynamic by default
- type hints help humans and tools

## Module 8

```python
from typing import TypeVar
T = TypeVar("T")
```

- inference is mostly tool-based in Python

## Module 9

```python
from dataclasses import dataclass
```

- `class`, `@dataclass`, `Enum`

## Module 10

- concrete = exact type
- generic = still has a type variable

## Module 11

```python
def f(n):
    if n == 0:
        return 1
    return n * f(n - 1)
```

- recursion needs a base case

## Module 12

- syntax = form
- semantics = behavior
- reduction = step-by-step evaluation

## Module 13

```python
from typing import Protocol
```

- duck typing, `Protocol`, `ABC`

## Module 14

```python
T = TypeVar("T")
```

- polymorphism = one design, many types
