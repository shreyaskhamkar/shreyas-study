# M.C.A. (Online Mode) Semester I Examination

**Paper Code:** OCA-501 MJ  
**Title:** Programming from First Principles  
**Time:** 3 Hours  
**Maximum Marks:** 70

## Q1) Multiple Choice Questions with reasoning — answer any 25 of 30 [25 × 2 = 50]

For every attempted question, select one option and give a brief reason.

| No. | Question | A | B | C | D |
|---:|---|---|---|---|---|
| 1 | Which built-in type is immutable? | `list` | `dict` | `set` | `tuple` |
| 2 | What is `len({1, 1, 2})`? | 1 | 2 | 3 | Error |
| 3 | A higher-order function must do what? | Use a loop | Take or return a function | Be recursive | Return a list |
| 4 | `filter(f, xs)` retains items for which `f` returns what? | A number | A string | A truthy value | `None` |
| 5 | In `if/elif/else`, how many branches execute in one pass? | All true branches | At most one | Exactly two | None always |
| 6 | A list comprehension normally produces what? | A generator | A list | A class | A function |
| 7 | Why is a generator called lazy? | It sorts automatically | It produces values on demand | It cannot be iterated | It stores only strings |
| 8 | What does `yield` normally do? | Ends the process | Suspends state and emits a value | Deletes locals | Imports a module |
| 9 | A Python lambda may contain what? | Multiple statements | One expression | A class definition | A `while` statement |
| 10 | Lambda abstraction means what? | Naming a file | Defining a function of a variable | Calling a function | Deleting a binding |
| 11 | A first-class function can be what? | Passed as an argument | Used only after `class` | Stored only globally | Returned but not stored |
| 12 | A closure captures variables from where? | A database | Its enclosing lexical scope | The import cache | A type checker |
| 13 | A function factory usually returns what? | A configured function | A loop | A module | A syntax error |
| 14 | If `f = g`, what does `f` refer to? | The result of calling `g` | The function object `g` | The string `"g"` | Nothing |
| 15 | Dynamic typing associates types primarily with what? | Names forever | Runtime values | Source files | Indentation |
| 16 | Type hints are normally what? | Runtime enforcement | Metadata for tools and readers | A replacement for tests | Required everywhere |
| 17 | `TypeVar('T')` is useful for expressing what? | A fixed integer | A relationship among generic types | Runtime casting | File types |
| 18 | A generic identity function should use what signature idea? | Unrelated `Any` types | The same type variable for input and output | Only `object` | No return type |
| 19 | A user-defined type is commonly created with which keyword? | `class` | `yield` | `break` | `continue` |
| 20 | An `Enum` is best suited to what? | Arbitrary changing strings | A fixed set of named choices | Mutable sequences | Anonymous functions |
| 21 | Every terminating recursive solution needs what? | A class | A reachable base case | A global variable | A generator |
| 22 | Recursive calls are tracked using what? | The call stack | The import path | A type table | A database |
| 23 | Operational semantics describes what? | Program-state changes during execution | Naming conventions | File layout | Documentation style |
| 24 | Syntax answers which question? | What does it do? | Is it grammatically well formed? | How fast is it? | Who wrote it? |
| 25 | Duck typing focuses on an object's what? | Declared ancestry only | Supported behaviour | Memory address | File name |
| 26 | A `Protocol` describes what? | Required operations or structure | A concrete constructor only | A loop invariant | A network connection |
| 27 | Polymorphism allows what? | One interface to work with multiple types | Variables to have no value | Classes to store identical data | Programs to avoid functions |
| 28 | Parametric polymorphism is represented by what? | Generics or type parameters | Only inheritance | Global variables | Exceptions |
| 29 | What is `list(map(lambda x: x * 2, [1, 2]))`? | `[1, 2]` | `[2, 4]` | `[2, 2]` | A function |
| 30 | What is the conventional value of `factorial(0)`? | 0 | 1 | Undefined | −1 |

## Q2) Answer any five in approximately two sentences [5 × 2 = 10]

1. Distinguish a list from a tuple.
2. What is a pure function?
3. Explain the difference between `return` and `yield`.
4. Why are type hints useful even though Python is dynamically typed?
5. What does `@dataclass` provide?
6. State the base case and recursive case of factorial.
7. Distinguish a protocol from a concrete class.

## Q3) Answer any two in approximately ten lines [2 × 5 = 10]

1. Explain higher-order functions using `map`, `filter`, and one short Python example.
2. Compare eager list construction with lazy generator evaluation, including benefits and limitations.
3. Trace `factorial(4)` recursively and explain the role of the call stack.
4. Explain dynamic typing, strong typing, type hints, `Any`, and `TypeVar` in Python.

