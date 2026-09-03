# Module 14: Type Classes

[← Previous: Module 13](<Module-13.md>) · [Subject index](README.md) · [MCQ practice →](MCQ.md)

## Learning outcomes

- distinguish values, types, and classes;
- use `type()` and `isinstance()` to inspect values;
- explain why Python classes are themselves objects of the `type` class;
- connect type classes with shared behavior and reusable code.

## Prerequisites

Complete [Module 13](Module-13.md) first. You should be comfortable with step-by-step reasoning about code behavior.

## The idea in one sentence

Type classes describe shared operations that different types can support. In the Python source material, this module focuses on the relationship between values, types, and classes, then connects that object model to interfaces and shared behavior.

## Everyday analogy

Think of a library. A book is a value, its category is like a type, and the cataloging system is like a class that describes how such values are organized and used.

## Syntax

```python
value = 42

print(type(value))
print(type(int))
print(isinstance(value, int))
```

## Worked example

```python
class Student:
    pass

student = Student()

print(type(student) is Student)
print(type(Student) is type)
print(isinstance(student, Student))
```

Step by step:

1. `student` is a value, specifically an instance of `Student`.
2. `type(student)` returns the class that created the value.
3. `Student` is itself an object whose type is `type`.
4. `isinstance()` checks whether a value belongs to a type or class.

## Why this matters in practice

- In college notes, this module clarifies the Python object model.
- In real code, it helps you inspect, validate, and safely process values.
- Shared operations can then be expressed through protocols, ABCs, or other interface patterns.

## Important concepts

### Values, types, and classes

Every runtime value has a type. Classes define instances, and classes themselves are objects created by the `type` class.

```python
number = 10
print(type(number))       # <class 'int'>
print(type(int))          # <class 'type'>
print(isinstance(number, int))
```

### Shared behavior

Type classes are a general way to describe operations shared by multiple types. Python commonly expresses this idea with duck typing, `Protocol`, or an abstract base class.

```python
class HasArea(Protocol):
    def area(self) -> float:
        ...
```

### Protocol and ABC

An abstract base class or protocol can make the expected shared behavior explicit for readers and static-analysis tools.

## Technical meaning

The Python object model relates values to types and types to classes. Type classes provide the broader idea of describing shared operations, while Python implements practical versions through duck typing, `Protocol`, and `ABC`.

## Memory rule

- value = runtime data
- type = classification of a value
- class = object definition and a runtime object
- `isinstance()` = membership check against a type or class

## Quick check

- What is the difference between a value, a type, and a class?
- What does `type(value)` return?
- Why is `type(int)` itself `type`?
- How do protocols and ABCs express shared behavior?

## Short exam answer

Type classes describe shared operations across different types. In Python, values have types, classes define values, and classes are themselves objects of `type`; `Protocol`, duck typing, and `ABC` provide practical forms of shared behavior.

---

[← Previous: Module 13](<Module-13.md>) · [Subject index](README.md) · [MCQ practice →](MCQ.md)
