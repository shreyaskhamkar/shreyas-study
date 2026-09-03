# MCQ

## 1. Which value is a `bool`?
A. `42`
B. `"42"`
C. `True`
D. `[True]`

## 2. Which collection keeps items unique?
A. list
B. tuple
C. set
D. str

## 3. What does `map` do?
A. Sorts items
B. Applies a function to each item
C. Removes duplicates
D. Creates a dictionary

## 4. Which keyword creates a small anonymous function?
A. `def`
B. `lambda`
C. `class`
D. `yield`

## 5. What does indentation define in Python?
A. Variable names
B. Blocks of code
C. Types
D. Imports

## 6. What does `yield` usually create?
A. A generator
B. A class
C. A tuple
D. A dictionary

## 7. What is a closure?
A. A loop
B. A function that remembers outer values
C. A type hint
D. A list comprehension

## 8. What is Python by default?
A. Statically typed
B. Dynamically typed
C. Strongly compiled only
D. Untyped

## 9. What does `@dataclass` help with?
A. Networking
B. Simple data classes
C. Lazy loading only
D. File I/O

## 10. Which is a concrete type?
A. `T`
B. `Any`
C. `int`
D. `TypeVar`

## 11. What is the base case in recursion?
A. The repeated step
B. The stop condition
C. The import line
D. The type hint

## 12. What does operational semantics describe?
A. How code is styled
B. How code runs step by step
C. How packages install
D. How variables are named

## Answers
1-C, 2-C, 3-B, 4-B, 5-B, 6-A, 7-B, 8-B, 9-B, 10-C, 11-B, 12-B

## Extended practice: Questions 13–70

Choose one answer. Trace code on paper before checking the key.

| No. | Question | A | B | C | D |
|---:|---|---|---|---|---|
| 13 | Which built-in type is immutable? | `list` | `dict` | `set` | `tuple` |
| 14 | What is `len({1, 1, 2})`? | 1 | 2 | 3 | Error |
| 15 | Which expression creates an empty set? | `{}` | `set()` | `[]` | `()` |
| 16 | A dictionary primarily stores: | Unique values only | Key–value pairs | Ordered numbers only | Functions only |
| 17 | What does `xs[-1]` select? | First item | Last item | All except last | Error always |
| 18 | Which operation mutates list `xs`? | `xs + [4]` | `tuple(xs)` | `xs.append(4)` | `xs[0]` |
| 19 | A higher-order function must: | Use a loop | Take or return a function | Be recursive | Return a list |
| 20 | `filter(f, xs)` retains items for which `f` returns: | A number | A string | Truthy | `None` |
| 21 | `list(map(lambda x: x*2, [1,2]))` equals: | `[1,2]` | `[2,4]` | `[2,2]` | A function |
| 22 | Which function combines a sequence into one accumulated result? | `filter` | `map` | `reduce` | `range` |
| 23 | A pure function normally: | Changes global state | Has no observable side effects | Reads user input | Mutates its argument |
| 24 | In `if/elif/else`, how many branches execute in one pass? | All true branches | At most one | Exactly two | None always |
| 25 | When the number of repetitions is known, which is usually clearest? | `for` | Infinite `while` | Recursion only | `match` only |
| 26 | What stops a `while` loop? | Its condition becomes false | It reaches ten iterations | Indentation ends | A list is created |
| 27 | A list comprehension produces: | A generator always | A list | A set always | A class |
| 28 | `break` does what? | Skips one iteration | Exits the nearest loop | Restarts the loop | Exits Python |
| 29 | `continue` does what? | Ends the function | Exits the loop | Skips to the next iteration | Pauses execution |
| 30 | A generator is lazy because it: | Computes every value immediately | Produces values on demand | Cannot be iterated | Stores only strings |
| 31 | Calling a generator function returns: | The final yielded value | A generator object | A list | `None` always |
| 32 | In a generator, `yield` normally: | Ends the process | Suspends state and emits a value | Deletes local variables | Imports a module |
| 33 | Compared with a list of one million items, a generator usually uses: | More memory | Less memory | Exactly equal memory | No CPU |
| 34 | A Python lambda may contain: | Multiple statements | One expression | A class definition | A `while` statement |
| 35 | In `(lambda x: x + 1)(4)`, `4` is: | An abstraction | An argument in an application | A return type | A free function |
| 36 | Lambda abstraction means: | Naming a file | Defining a function of a variable | Calling a function | Deleting a binding |
| 37 | A first-class function can be: | Passed as an argument | Used only after `class` | Stored only globally | Returned but not stored |
| 38 | A closure captures variables from its: | Database | Enclosing lexical scope | Import cache | Type checker only |
| 39 | A function factory usually returns: | A newly configured function | A loop | A module | A syntax error |
| 40 | If `f = g`, then `f` refers to: | The result of calling `g` | The function object `g` | A string `g` | Nothing |
| 41 | Dynamic typing associates types primarily with: | Variable names forever | Runtime values | Source files | Indentation levels |
| 42 | Python is strongly typed because it generally: | Silently combines incompatible types | Rejects invalid cross-type operations | Requires declarations | Compiles no code |
| 43 | Type hints are normally: | Enforced by the interpreter at every assignment | Metadata for tools and readers | A replacement for tests | Required syntax |
| 44 | `isinstance(x, int)` checks: | A static hint | Runtime type membership | Variable scope | Mutability |
| 45 | Type inference means a tool: | Guesses randomly | Deduces a type from context | Converts every value | Removes annotations |
| 46 | `Any` tells a static checker to: | Reject all operations | Permit essentially any type operation | Require an integer | Infer `None` |
| 47 | `TypeVar('T')` is useful for expressing: | A fixed integer | A relationship among generic types | Runtime casting | File types only |
| 48 | If a function returns the same type it receives, the best generic signature uses: | Unrelated `Any` values | The same `TypeVar` for input and output | Only `object` | No return type |
| 49 | A user-defined type is commonly created with: | `class` | `yield` | `import` | `break` |
| 50 | `@dataclass` commonly generates: | Network handlers | Methods such as `__init__` and `__repr__` | A database | A generator |
| 51 | An `Enum` is best for: | Arbitrary changing strings | A fixed set of named choices | Mutable sequences | Anonymous functions |
| 52 | An instance is: | A class definition | A concrete object created from a class | A module | A protocol only |
| 53 | Which is a concrete type? | `list[int]` | `list[T]` with unresolved `T` | `TypeVar('T')` | `Any` as a relationship |
| 54 | “Concrete” most directly means: | Abstract behavior only | Fully specified type | Dynamically allocated | Immutable |
| 55 | Every correct recursive function needs: | A class | A reachable base case | A global variable | A generator |
| 56 | Recursive calls are tracked using the: | Heap only | Call stack | Import path | Type table |
| 57 | Tail recursion in standard Python: | Is always optimized away | Is not generally tail-call optimized | Cannot terminate | Requires `yield` |
| 58 | Structural recursion reduces a problem according to: | Its data structure | Clock time | File size only | Type hints only |
| 59 | `factorial(0)` is normally: | 0 | 1 | Undefined | −1 |
| 60 | Operational semantics describes: | Valid spelling only | How program states change during execution | Naming conventions | Documentation style |
| 61 | Syntax answers: | “What does it do?” | “Is it grammatically well formed?” | “How fast is it?” | “Who wrote it?” |
| 62 | A small-step semantics models execution as: | One final leap only | A sequence of individual transitions | A type declaration | A UML diagram |
| 63 | A stack frame commonly stores: | Local variables and return information | All disk files | Source-control history | Only global constants |
| 64 | Duck typing focuses on an object's: | Declared ancestry only | Supported behavior | Memory address | File name |
| 65 | A `Protocol` describes: | Required operations/structure | A concrete constructor only | A loop invariant | A network only |
| 66 | An abstract base class may: | Define required abstract methods | Be only a string | Disable inheritance | Replace every protocol |
| 67 | Polymorphism lets: | One interface work with multiple types | One variable have no value | Every class use identical data | Code avoid functions |
| 68 | Parametric polymorphism is represented by: | Generics/type parameters | Only inheritance | Global variables | Exception handling |
| 69 | Subtype polymorphism commonly relies on: | Compatible derived objects | List slicing | Lazy iteration | Arithmetic precedence |
| 70 | The safest way to answer a code-tracing MCQ is to: | Guess from keywords | Track values and control flow step by step | Choose the longest option | Ignore types |

## Extended answer key

13-D, 14-B, 15-B, 16-B, 17-B, 18-C, 19-B, 20-C, 21-B, 22-C,
23-B, 24-B, 25-A, 26-A, 27-B, 28-B, 29-C, 30-B, 31-B, 32-B,
33-B, 34-B, 35-B, 36-B, 37-A, 38-B, 39-A, 40-B, 41-B, 42-B,
43-B, 44-B, 45-B, 46-B, 47-B, 48-B, 49-A, 50-B, 51-B, 52-B,
53-A, 54-B, 55-B, 56-B, 57-B, 58-A, 59-B, 60-B, 61-B, 62-B,
63-A, 64-B, 65-A, 66-A, 67-A, 68-A, 69-A, 70-B.
