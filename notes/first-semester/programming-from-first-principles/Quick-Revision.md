# Quick Revision: Programming from First Principles

Use this page for a fast sweep through all 14 modules. For deeper reading, open [Web Resources](Web-Resources.md).

## Module 1: Data Types and Collections

- Python values have types such as `int`, `float`, `bool`, `str`, `list`, `tuple`, `set`, and `dict`.
- Use `int` for whole numbers, `float` for decimal values, and `bool` for yes/no logic.
- Lists are ordered and changeable.
- Tuples are ordered and fixed.
- Sets remove duplicates.
- Dictionaries map keys to values.

## Module 2: Higher-Order Functions

- Functions are values in Python.
- `map`, `filter`, `sorted(key=...)`, and `functools.reduce` are common higher-order patterns.
- `lambda` creates a small anonymous function.
- Main benefit: reuse and compact code.

## Module 3: Standard Constructs

- Indentation defines blocks.
- `if/elif/else` chooses between paths.
- `for` and `while` repeat work.
- Comprehensions build new collections clearly.
- `match` can inspect shape in modern Python.

## Module 4: Iteration and Lazy Evaluation

- Python evaluates most expressions eagerly.
- Generators and iterators let you produce values on demand.
- `yield` creates lazy sequences.
- Lazy evaluation helps when data is large or infinite-like.

## Module 5: Anonymous Functions and Lambda Calculus

- `lambda` creates a short anonymous function.
- Function application means calling a function with arguments.
- Beta reduction means substituting inputs into a function body.
- Lambda calculus is the formal foundation behind function thinking.

## Module 6: First-Class Functions

- Functions can be stored, passed, and returned like data.
- Closures remember values from the surrounding scope.
- This makes callbacks and factories easy to write.

## Module 7: Type Discipline

- Python is dynamically typed, but type hints can improve checking.
- Runtime errors happen when the wrong kind of value is used.
- `isinstance` and type checkers help reduce mistakes.
- Type safety means fewer invalid operations.

## Module 8: Type Hints and Inference

- Type hints describe expected types.
- Editors and type checkers can infer local types from code.
- `mypy` and Pyright help spot mismatches early.
- Inference reduces repeated annotation work.

## Module 9: User-Defined Types

- `class` defines a custom type.
- `@dataclass` is useful for simple data containers.
- `Enum` is good for fixed named choices.
- Custom types model domain concepts clearly.

## Module 10: Concrete Types

- Concrete types are specific, fully known types.
- Examples: `int`, `float`, `bool`, `str`, and a specific class such as `Student`.
- `Any` and `TypeVar` are not concrete.
- Concrete types are useful when the value shape is fixed.

## Module 11: Recursion

- A recursive function calls itself on a smaller input.
- Every recursive function needs a base case.
- Structural recursion follows the shape of the data.
- Python has a recursion limit, so deep recursion needs care.

## Module 12: Operational Semantics

- Operational semantics explains step-by-step execution.
- Expressions are evaluated in a fixed order.
- Function calls create new stack frames.
- Side effects and exceptions matter in Python execution.

## Module 13: Protocols and Shared Behavior

- Python uses duck typing: if it behaves correctly, it fits.
- `abc.ABC` and `typing.Protocol` describe shared behavior.
- Special methods like `__len__` and `__eq__` provide common operations.
- Interfaces help code work across many types.

## Module 14: Polymorphism

- One function can work with many types.
- Type variables support parametric polymorphism.
- Operator overloading and protocols support shared behavior.
- Generic containers such as `list[T]` are polymorphic.

## One-Line Memory Map

```text
Types -> Functions -> Constructs -> Iteration -> Types again -> Recursion -> Behavior -> Polymorphism
```

## Web Revision Path

1. Read the module note.
2. Open the matching section in [Web Resources](Web-Resources.md).
3. Compare one formal definition and one example.
4. Return to this page for final recall.
