# Module 6: First-Class Functions

[← Previous: Module 5](<Module-5.md>) · [Subject index](README.md) · [Next: Module 7 →](<Module-7.md>)

## Learning outcomes

- treat functions like ordinary values;
- write a function that returns another function;
- explain what a closure is;
- use function values in simple examples.

## Prerequisites

Read [Module 5](Module-5.md) first. You should be comfortable with function syntax and `lambda`.

## The idea in one sentence

First-class functions are functions that Python treats like ordinary values.

## Everyday analogy

Think of a recipe card. You can store it in a drawer, hand it to someone, or reuse it later. A function in Python can be handled the same way.

## Syntax

```python
def make_adder(n):
    def add(x):
        return x + n
    return add
```

## Worked example

```python
add_five = make_adder(5)
result = add_five(10)
```

Step by step:

1. `make_adder(5)` creates a new function.
2. That function remembers `n = 5`.
3. `add_five(10)` uses the remembered value.
4. The result is `15`.

## Why this matters in practice

- In college notes, it explains why functions can be passed around like data.
- In real code, it supports callbacks, decorators, pipelines, and factory functions.
- It makes programs more reusable and easier to organize.

## Important concepts

### First-class function

A function is first-class if you can:

- store it in a variable
- pass it as an argument
- return it from another function

### Closure

A closure is a function that remembers values from the environment where it was created.

```python
def outer(n):
    def inner(x):
        return x + n
    return inner
```

### Function factory

A function factory is a function that creates and returns another function.

```python
def power(exp):
    return lambda x: x ** exp
```

## Technical meaning

Python functions are first-class objects. That means they have identity, can be assigned to variables, and can carry along remembered state through closures. This supports higher-order programming patterns.

## Memory rule

- store a function in a variable
- pass a function as an argument
- return a function from another function

## Quick check

- Why is `make_adder` useful?
- What value does `add_five` remember?
- What is a closure?
- How is a function factory different from an ordinary function?

## Short exam answer

First-class functions are functions that Python can store, pass, and return like any other value. A closure is a function that remembers values from the surrounding scope. This makes function-based design more flexible and reusable.

---

[← Previous: Module 5](<Module-5.md>) · [Subject index](README.md) · [Next: Module 7 →](<Module-7.md>)
