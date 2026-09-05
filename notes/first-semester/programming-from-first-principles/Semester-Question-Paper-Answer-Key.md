# OCA-501 MJ — Model Answers and Marking Guide

## Q1 answer key

Award **1 mark** for the option and **1 mark** for a valid reason.

| No. | Answer | Reason and closest-distractor check | Module |
|---:|---|---|---:|
| 1 | D | Tuples cannot be changed in place; lists, dictionaries, and sets are mutable. | 1 |
| 2 | B | A set removes duplicates, leaving `{1, 2}`; counting the repeated literal as a third item is the trap. | 1 |
| 3 | B | Higher-order functions accept or return functions; recursion is not required. | 2 |
| 4 | C | `filter` keeps values whose predicate is truthy; the predicate need not return a number. | 2 |
| 5 | B | The first matching branch runs; separate `if` statements, unlike an `elif` chain, may run more than once. | 3 |
| 6 | B | Square brackets in a comprehension build a list; a parenthesised generator expression is lazy. | 3 |
| 7 | B | A generator computes the next value only when requested; it remains iterable. | 4 |
| 8 | B | `yield` emits a value while preserving execution state; it does not finish the function permanently. | 4 |
| 9 | B | Python lambdas contain one expression, not a suite of statements. | 5 |
| 10 | B | Abstraction defines a function parameterised by a variable; application calls it. | 5 |
| 11 | A | First-class functions can be passed, stored, and returned; their scope is not restricted to classes. | 6 |
| 12 | B | A closure retains bindings from its lexical environment, not from global infrastructure. | 6 |
| 13 | A | A function factory creates and returns a function configured by captured values. | 7 |
| 14 | B | Assignment copies the function reference; parentheses would be needed to call `g`. | 7 |
| 15 | B | Values carry runtime types; a variable name can later refer to another type. | 8 |
| 16 | B | Hints support readers and static tools but normally do not enforce assignments at runtime. | 8 |
| 17 | B | A type variable relates generic input and output types; it is not a runtime cast. | 9 |
| 18 | B | Reusing one type variable preserves the input-output type relationship; unrelated `Any` loses it. | 9 |
| 19 | A | `class` defines a user-defined type; `yield` defines generator behaviour. | 10 |
| 20 | B | An enum represents a closed set of named alternatives, not arbitrary mutable data. | 10 |
| 21 | B | A reachable base case stops recursive expansion; a global variable is unnecessary. | 11 |
| 22 | A | Each call creates a stack frame with locals and return information. | 11 |
| 23 | A | Operational semantics models execution steps and state changes; syntax only governs form. | 12 |
| 24 | B | Syntax determines grammatical validity, not meaning or performance. | 12 |
| 25 | B | Duck typing asks whether an object supports required behaviour rather than demanding ancestry. | 13 |
| 26 | A | A protocol specifies the structural operations a compatible type must expose. | 13 |
| 27 | A | Polymorphism lets common code operate on several compatible types. | 14 |
| 28 | A | Parametric polymorphism uses generic parameters; subtype polymorphism typically uses inheritance. | 14 |
| 29 | B | The lambda doubles each element, so `map` yields 2 and 4; converting it to a list materialises them. | 2 |
| 30 | B | The empty product is 1, which also supplies factorial's standard base case. | 11 |

## Q2 model answers

1. A list is mutable, whereas a tuple is normally immutable. Both are ordered sequences and may contain duplicates. **Marks:** distinction 1; accurate shared property 1. *(Module 1)*
2. A pure function has no observable side effects and returns the same result for the same inputs. It does not mutate arguments or external state. **Marks:** definition 1; consequence/example 1. *(Module 2)*
3. `return` completes a function and supplies its result; `yield` emits one value and suspends state for later resumption. A function containing `yield` creates a generator. **Marks:** contrast 1; generator/state point 1. *(Module 4)*
4. Type hints document intent and let editors or static checkers detect mismatches before execution. They normally do not change Python's runtime typing. **Marks:** benefit 1; runtime limitation 1. *(Module 8)*
5. `@dataclass` generates common methods such as `__init__`, `__repr__`, and equality from declared fields. It reduces boilerplate for data-holding classes. **Marks:** generated behaviour 1; purpose 1. *(Module 10)*
6. Factorial's base case is `factorial(0) = 1`; its recursive case is `factorial(n) = n * factorial(n-1)` for positive `n`. **Marks:** each case 1. *(Module 11)*
7. A protocol specifies required behaviour structurally, while a concrete class supplies actual data and implementations and can be instantiated. Unrelated classes may satisfy the same protocol. **Marks:** protocol 1; concrete class 1. *(Modules 13–14)*

## Q3 model answers

1. A higher-order function accepts or returns a function. `map(f, xs)` transforms every item, while `filter(p, xs)` retains items satisfying a predicate. Example: `list(map(lambda x: x*x, filter(lambda x: x%2 == 0, [1,2,3,4])))` gives `[4,16]`. This separates reusable operations from traversal. **Rubric:** definition 1; `map` 1; `filter` 1; correct example/result 1; benefit 1. *(Module 2)*
2. A list computes and stores all values immediately; a generator produces values on demand and preserves suspended state. Lists support repeated traversal and indexing but may use much memory. Generators reduce memory use and can represent long or infinite streams, but are normally consumed once and do not support arbitrary indexing. **Rubric:** eager list 1; lazy generator 1; memory benefit 1; list benefit 1; generator limitation 1. *(Modules 3–4)*
3. `factorial(4)` expands to `4*factorial(3)`, then `4*3*factorial(2)`, then `4*3*2*factorial(1)`, then `4*3*2*1*factorial(0)`. The base case returns 1. Frames then unwind to 1, 2, 6, and 24. Each frame stores its `n` and pending multiplication. **Rubric:** expansion 2; base case 1; unwinding/result 1; stack explanation 1. *(Module 11)*
4. Dynamic typing attaches types to runtime values; strong typing rejects unsupported operations rather than silently coercing unrelated values. Type hints describe expected types for tools but normally are not runtime enforcement. `Any` disables most static restrictions, whereas `TypeVar` preserves a relationship such as identical input and output types. **Rubric:** dynamic 1; strong 1; hints 1; `Any` 1; `TypeVar` 1. *(Modules 8–9)*

