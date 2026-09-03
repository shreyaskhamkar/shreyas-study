# Programming from First Principles - Module-Wise Descriptive Answers

Use these answers as 5-mark or 10-mark long-answer templates. In the exam,
write the definition first, explain the mechanism, add a short example, and
finish with an advantage, limitation, or practical use.

## Module 1 - Data Types and Collections

### Question

Explain Python's basic data types and collection types. Compare their use,
mutability, ordering, and suitable applications.

### Model Answer

Python represents information using values with different types. Common basic
types include `int` for whole numbers, `float` for decimal values, `complex`
for complex numbers, `bool` for truth values, and `str` for text. Python also
has `None`, which represents the absence of a value. The type of a value can be
inspected using `type(value)`. Python is dynamically typed, so a variable name
does not permanently belong to one type. For example, `x = 10` can later be
reassigned to a string, although using one name for unrelated types can reduce
clarity.

Collections store multiple values. A list is an ordered, mutable sequence. It
can contain duplicate values and different types, so `marks = [70, 85, 85]` is
valid. Items can be changed with indexing or slicing, and methods such as
`append`, `remove`, and `sort` modify the list. Lists are suitable when a
program needs a sequence that changes during execution.

A tuple is an ordered, generally immutable sequence. A tuple such as
`point = (3, 4)` is useful for fixed records, coordinates, and returning
multiple values from a function. Immutability prevents accidental changes and
allows tuples to be used in situations where a stable value is required.

A set is an unordered collection of unique values. It removes duplicates and
supports operations such as union, intersection, and difference. For example,
`set([1, 1, 2])` produces `{1, 2}`. Sets are useful for membership testing and
mathematical set operations, but they should not be used when order matters.

A dictionary stores key-value pairs, such as `{"name": "Ravi", "age": 22}`.
Keys identify values and must be hashable. Dictionaries are useful for records,
lookup tables, configuration data, and counting frequencies. Modern Python
preserves insertion order for dictionaries, but their primary purpose remains
key-based lookup rather than positional access.

Choosing the correct collection is important. Use a list for an editable
ordered sequence, a tuple for a fixed sequence, a set for unique membership,
and a dictionary for labelled values. Mutability is also important: mutable
objects can change without creating a new object, while immutable objects
cannot. Understanding these differences prevents aliasing errors, accidental
data changes, and inefficient code.

## Module 2 - Higher-Order Functions

### Question

Define higher-order functions and explain how they improve abstraction and code
reuse in Python.

### Model Answer

A higher-order function is a function that accepts another function as an
argument, returns a function, or does both. This is possible because Python
treats functions as first-class objects. They can be stored in variables,
placed in collections, passed between functions, and returned as results.

Higher-order functions separate a general algorithm from the specific action
performed by that algorithm. Consider a function that applies an operation to
every item in a sequence. The traversal logic can remain fixed while the caller
supplies the operation. Python's `map`, `filter`, and `sorted` functions use
this idea. For example, `map(lambda x: x * 2, [1, 2, 3])` applies the supplied
function to each value. `filter(lambda x: x % 2 == 0, numbers)` keeps values
that satisfy a condition. `sorted(words, key=len)` sorts using a function that
computes each item's comparison key.

The same idea can be written using a custom function:

```python
def transform(items, operation):
    return [operation(item) for item in items]

result = transform([1, 2, 3], lambda x: x * x)
```

Here `transform` does not know whether the operation is squaring, formatting,
or validating. It only knows that it can call `operation`. This improves reuse
because one function supports many policies. It also improves testing because
the operation can be replaced with a small test function.

A higher-order function can also return a specialised function. A function
factory, for example, can create an adder with a fixed amount:

```python
def make_adder(amount):
    return lambda value: value + amount

add_five = make_adder(5)
```

Higher-order functions encourage declarative programming. Instead of explaining
every loop step, the programmer states that values should be mapped, filtered,
or sorted. They are also central to decorators, callbacks, event handlers, and
functional composition.

There are limitations. Excessive nesting can make code difficult to read, and
anonymous functions are unsuitable for complicated logic. A function passed as
an argument must also have a compatible interface. Nevertheless, higher-order
functions are a powerful abstraction because they make behavior configurable,
reduce duplication, and allow common algorithms to be reused with different
operations.

## Module 3 - Standard Constructs

### Question

Explain Python's standard programming constructs, including sequence, selection,
iteration, comprehensions, and exception handling.

### Model Answer

Programming constructs control the order in which statements execute. The
three fundamental constructs are sequence, selection, and iteration. In a
sequence, statements execute from top to bottom. For example, a program may
read two numbers, add them, and print the result. This is the default flow of a
Python program.

Selection chooses between alternatives. Python uses `if`, `elif`, and `else`.
The condition is evaluated as a Boolean expression. If it is true, the `if`
block runs; otherwise Python checks an `elif` block or executes `else`.

```python
if marks >= 80:
    grade = "A"
elif marks >= 40:
    grade = "Pass"
else:
    grade = "Fail"
```

Conditions can use comparison operators and logical operators such as `and`,
`or`, and `not`. Python also uses truthiness: empty collections, zero, `None`,
and `False` behave as false in conditions.

Iteration repeats work. A `for` loop visits items in an iterable, while a
`while` loop repeats while a condition remains true. `break` stops the loop,
`continue` skips to the next iteration, and `pass` provides an empty statement.
Loops should have clear termination conditions. A `while` loop whose condition
never becomes false may run indefinitely.

Comprehensions provide a compact way to build collections. The expression
`[x * x for x in numbers if x > 0]` means: take each positive `x`, calculate
`x * x`, and collect the results. Similar syntax creates sets and dictionaries.
Comprehensions are readable for simple transformations, but a normal loop is
better when many side effects or nested conditions are involved.

Functions provide another essential construct. They package reusable behavior,
accept parameters, and may return values. Local variables are created inside a
function, which limits accidental interference with other code. Good functions
usually perform one clear task.

Exception handling manages abnormal situations without crashing the whole
program. `try` contains risky code, `except` handles a selected exception,
`else` runs when no exception occurred, and `finally` runs during cleanup.
For example, a program converting user input should catch `ValueError` rather
than assuming every input is numeric.

These constructs form the basic vocabulary of algorithms. Sequence expresses
steps, selection expresses decisions, iteration expresses repetition, functions
express reusable operations, and exceptions express controlled failure.

### Additional Focus - Block Scope in Structured Programming

Block scope limits a variable's visibility to the block where it is declared.
An inner block may access an appropriate outer variable, but the outer block
cannot access a variable declared only inside the inner block. This supports
information hiding and prevents temporary variables from interfering with
unrelated code. If an inner block declares the same name as an outer block, the
inner declaration shadows the outer name while that block is active.

Python differs from languages that give every conditional and loop a new block
scope. Python normally creates local scope for functions, modules, classes, and
comprehensions, but not for ordinary `if`, `for`, or `while` blocks. Therefore,
a loop variable can remain available after the loop. An exam answer should
mention both the general structured-programming concept and Python's actual
function-based scope behavior.

## Module 4 - Iteration and Lazy Evaluation

### Question

Explain iterables, iterators, generators, and lazy evaluation. Include their
execution model, advantages, and limitations.

### Model Answer

An iterable is an object that can provide its elements one at a time. Lists,
tuples, strings, dictionaries, sets, and files are examples. The `for` loop
works with any iterable by obtaining an iterator from it. An iterator maintains
the current position and supplies the next value through `__next__()`. When no
values remain, it raises `StopIteration`.

Lazy evaluation means delaying computation until a result is actually needed.
An eager expression creates all its results immediately, while a lazy expression
produces values progressively. This difference matters when a sequence is very
large or potentially infinite.

A generator is a convenient way to create an iterator. A function containing
`yield` returns a generator object. Calling the generator function does not run
the complete body. Execution begins when `next()` or a `for` loop requests a
value. The function runs until it reaches `yield`, returns that value, and
pauses while preserving its local state. The next request resumes from the
following statement.

```python
def count_up_to(limit):
    value = 1
    while value <= limit:
        yield value
        value += 1
```

`count_up_to(3)` does not build a list containing all values. It produces 1, 2,
and 3 as requested. This saves memory because only the current value and the
generator state must be stored. Generators are useful for large files, data
pipelines, streams, and infinite sequences. Generator expressions, such as
`(x * x for x in numbers)`, provide a compact lazy form.

Lazy pipelines can combine operations without creating temporary collections.
For example, a file can be read line by line, filtered, transformed, and sent
to a final consumer. This makes programs scalable and can reduce initial work.

There are limitations. A generator is usually single-use: after it is
exhausted, it must be created again. It does not support normal random indexing
without consuming earlier values. Debugging a lazy pipeline can also be less
direct because computation occurs later than the expression that defines it.

The key distinction is that an iterable describes a source of values, an
iterator tracks traversal, and a generator is a convenient stateful iterator
created with `yield`. Lazy evaluation is therefore both a memory-saving
technique and a way to express data processing as a sequence of controlled
steps.

## Module 5 - Anonymous Functions and Lambda Calculus

### Question

Explain lambda functions and the main ideas of lambda calculus, including
abstraction, application, substitution, and practical Python use.

### Model Answer

Lambda calculus is a formal system for describing computation using functions.
Its basic elements are variables, function abstraction, and function
application. A variable is a name such as `x`. Abstraction creates a function,
written conceptually as `lambda x . expression`. Application applies a function
to an argument, such as `(lambda x . x + 1) 4`. Evaluation substitutes the
argument for the parameter, giving 5.

Python supports a practical form of anonymous function through the `lambda`
expression. For example, `lambda x: x + 1` creates a function that adds one.
The function has no required name, so it is useful when a small operation is
needed only once. Common examples include `sorted(items, key=lambda item:
item[1])`, filtering values, and mapping a transformation.

Lambda calculus highlights that functions can be treated as values. A function
can be passed into another function, returned from a function, or applied to a
value. This idea supports higher-order programming and helps explain why many
different algorithms can share the same structure.

Substitution must respect variable scope. A bound variable is controlled by its
function abstraction, while a free variable comes from outside. Accidentally
replacing a free variable with a bound one can change the meaning of an
expression. This issue is called variable capture. Careful renaming of bound
variables, often called alpha-conversion, avoids the problem.

Lambda calculus also describes evaluation strategies. In normal-order
evaluation, the outermost expression is reduced first; in applicative-order
evaluation, arguments are evaluated before the function is applied. Lazy
languages often delay argument evaluation, while eager languages evaluate
arguments earlier. Python lambda expressions themselves are evaluated eagerly
when their surrounding expressions request their arguments, although they can
be used to construct lazy pipelines with generators.

Python lambdas are intentionally limited to one expression. They cannot contain
ordinary statements such as assignments or multiple independent steps. This
limitation makes them useful for short transformations but unsuitable for
complex business logic. A named `def` function is clearer when the operation
needs documentation, testing, or several statements.

The practical value of lambda calculus is not that programmers write formal
calculus every day. Its value is conceptual: it gives a precise model of
functions, scope, substitution, and computation. Python's lambda syntax applies
these ideas in a small form and connects programming practice to the theory of
functional computation.

## Module 6 - First-Class Functions

### Question

What does it mean for functions to be first-class objects? Explain callbacks,
closures, decorators, and function composition.

### Model Answer

A programming language treats functions as first-class when functions can be
handled like other values. In Python, a function can be assigned to a variable,
stored in a list or dictionary, passed as an argument, returned from another
function, and created during execution. The function object contains executable
behavior, while its name is only a reference to that object.

This property enables callbacks. A callback is a function supplied to another
operation so that it can be called later. For example, a user-interface button
may store a callback to run when clicked. A sorting function accepts a key
function as a callback to determine how values should be compared. Callbacks
separate the event or algorithm from the action chosen by the caller.

Functions can also return other functions. Such a returned function may retain
variables from the scope where it was created. This combination is called a
closure:

```python
def make_multiplier(factor):
    def multiply(value):
        return value * factor
    return multiply
```

The returned `multiply` function remembers `factor` even after
`make_multiplier` finishes. Closures are useful for configuration, private
state, and function factories. They should be used carefully because hidden
state can make debugging more difficult.

A decorator is a higher-order function that receives a function and returns a
replacement function with additional behavior. Decorators can add logging,
timing, validation, caching, or access checks without changing the original
function body. The wrapper should preserve metadata with `functools.wraps`
when appropriate.

Function composition combines functions so that the output of one becomes the
input of another. If `double(x)` returns `2*x` and `increment(x)` returns
`x+1`, a composed operation can calculate `increment(double(x))`. Composition
supports pipelines and makes transformations reusable.

First-class functions improve modularity because behavior becomes a parameter.
Instead of writing separate functions for every small variation, a general
function can accept the changing policy. They also support testing: a fake
callback can be supplied to isolate a component. However, functions with
unclear interfaces can create confusing code, and deeply nested callbacks may
be hard to follow.

Therefore, first-class functions are both a language feature and a design tool.
They enable callbacks, closures, decorators, composition, and configurable
algorithms while encouraging small, reusable units of behavior.

## Module 7 - Type Discipline

### Question

Explain type discipline, dynamic typing, static typing, type errors, and the
trade-offs between flexible and strict type systems.

### Model Answer

Type discipline is the set of rules used to classify values and determine which
operations are valid. An integer can be added to another integer, while a
function expecting a number should not silently receive an unrelated file
object. A type system helps detect such mismatches and defines how values may
be combined.

Python is dynamically typed. Names are associated with objects at runtime, and
the same name can refer to different types at different times. This makes
experimentation and rapid development convenient. For example, `value = 10`
can later become `value = "ten"`. Python usually checks whether an operation is
valid when the operation executes. Adding an integer to a string with `+` may
therefore raise a `TypeError` at runtime.

Static typing checks some type relationships before execution. A statically
typed language may reject an invalid assignment or function call during
compilation. Static checking can find errors early, document interfaces, help
tools provide completion, and enable optimizations. Dynamic typing can make
code shorter and support patterns where an object's behavior matters more than
its declared class.

Type errors can be prevented or reduced through clear interfaces, validation,
type hints, tests, and careful naming. A function should state what it expects
and returns, either through documentation or annotations. Runtime validation is
still important for data arriving from users, files, or networks because those
values cannot be trusted merely because an annotation exists.

Strictness and flexibility involve trade-offs. A strict system provides stronger
guarantees and can make large codebases safer, but it may require more type
annotations, conversions, and design effort. A flexible system enables quick
prototyping and generic code, but errors may appear later and maintenance can
become harder if the intended types are unclear.

Type discipline is not the same as refusing all variation. Good type systems
support abstraction through generic types, unions, interfaces, and protocols.
The goal is to make valid behavior clear and invalid behavior detectable while
preserving useful reuse.

In practice, Python programs often combine dynamic execution with optional
static analysis. The programmer can add annotations and run tools such as type
checkers without changing Python's normal runtime model. This balanced approach
keeps Python flexible while improving documentation, review, and error
detection.

## Module 8 - Type Hints and Inference

### Question

Explain Python type hints and type inference. Discuss their syntax, benefits,
limitations, and relationship with runtime behavior.

### Model Answer

Type hints are annotations that describe the intended types of variables,
parameters, attributes, and return values. A simple example is
`def add(a: int, b: int) -> int: return a + b`. The annotation communicates
that `add` expects two integers and is intended to return an integer. It makes
the function interface easier to understand and allows development tools to
check calls and offer better completion.

Common annotations include `list[int]`, `dict[str, int]`, `tuple[int, int]`,
and optional or union forms such as `str | None`. Type aliases can give a
meaningful name to a complex type. A class can also annotate attributes so the
shape of an object is visible to readers and tools.

Type inference is the process of deducing a likely type from context. If a
variable is assigned `count = 0`, a checker may infer that it is an integer. If
a function returns the result of adding two integers, the tool may infer an
integer return type. Inference reduces repetitive annotations while preserving
many benefits of static analysis.

Type hints are not normally runtime enforcement in Python. The interpreter
usually does not reject `add("a", "b")` just because the parameters are
annotated as integers; the operation may even produce a string. A separate
checker analyzes the program, and runtime validation must be written explicitly
when needed. Libraries can use annotations to perform validation, serialization,
or documentation generation, but that is additional behavior.

Hints improve refactoring safety because changing a function signature exposes
incompatible callers. They also clarify data flow in large programs and help
teams agree on interfaces. Type errors found before execution are usually
cheaper to fix than errors found in production.

There are limitations. Dynamic features, reflection, incomplete third-party
annotations, complex control flow, and external data can make inference
uncertain. A type checker may report an error that is safe at runtime or fail to
prove that a dynamic operation is safe. Overly complicated annotations can also
reduce readability.

The best practice is to use annotations where they clarify public interfaces,
data structures, and non-obvious values. Combine them with tests and runtime
validation at system boundaries. Type hints and inference do not replace
reasoning about a program, but they provide a useful machine-assisted contract.

## Module 9 - User-Defined Types

### Question

Explain user-defined types in Python and show how classes combine data,
behavior, invariants, and abstraction.

### Model Answer

User-defined types allow programmers to model concepts that are not adequately
represented by primitive values. A class acts as a blueprint describing the
data and operations associated with a concept. An object is an instance of that
class. For example, a `BankAccount` class can store an account number and
balance while providing `deposit` and `withdraw` methods.

Classes combine state and behavior. The `__init__` method initializes an object,
and `self` refers to the current instance. A method can enforce rules rather
than allowing every part of the program to change data directly:

```python
class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("amount must be positive")
        self.balance += amount
```

The class expresses an invariant: a deposit must be positive. In a larger
design, access to internal state can be controlled through methods or
properties. Encapsulation means that users of the class depend on its public
interface rather than its internal representation. The implementation can
change from a number to a database record without changing every caller.

Constructors, methods, properties, and special methods define how instances
are created and used. A special method such as `__repr__` can provide a useful
debug representation, while `__eq__` can define value comparison. Dataclasses
can reduce boilerplate for classes that mainly store structured data.

User-defined types improve readability because domain concepts receive names.
`Order`, `Student`, and `Temperature` communicate more meaning than unrelated
dictionaries and numbers. They also make validation and testing local to the
concept. A well-designed type has a small public interface and clear rules.

Inheritance can reuse behavior, but it should be used only when the subclass is
truly a specialized form of the parent. Composition, where one object contains
another, is often more flexible. For example, an `Order` may contain a
`Customer` and a list of `Product` objects rather than inheriting from them.

The main risks are excessive complexity, mutable shared state, and classes that
do too many unrelated tasks. User-defined types are most useful when they
protect invariants, group related behavior, and give stable interfaces to the
rest of the program.

## Module 10 - Concrete Types

### Question

Explain concrete types and compare them with abstract descriptions of behavior.
Discuss representation, operations, mutability, and choosing an appropriate
concrete type.

### Model Answer

A concrete type specifies how values are actually represented and what
operations are implemented. Python's `int`, `str`, `list`, `dict`, and user
classes are concrete types. They can be instantiated and used directly. An
abstract description may say that an object is iterable or comparable without
specifying whether it is a list, tuple, generator, or custom class.

Concrete representation matters because it affects performance, memory, and
available operations. A list stores an ordered mutable sequence and supports
indexing. A set is optimized for unique membership tests but does not provide
normal positional indexing. A dictionary stores mappings from keys to values.
Choosing the wrong representation can make an algorithm slower or make its
intent unclear.

Mutability is a central property. A mutable object can change in place, so two
names referring to the same list observe the same changes. This is useful for
efficient updates but can create aliasing bugs. Immutable values, such as
strings and tuples, cannot be altered after creation. An apparent modification
creates a new value. Immutability makes sharing safer and can allow values to
be used as dictionary keys when they are hashable.

Concrete types define operations through methods and special methods. A class
can implement `__len__`, `__iter__`, `__getitem__`, or `__add__` to participate
in familiar Python operations. However, implementing an operation should match
its expected meaning. A custom collection should not claim to be ordered if its
iteration order is unstable.

Abstract interfaces are useful because client code can depend on behavior. A
function that accepts an iterable does not need to know whether it receives a
list or generator. The concrete type is selected at the boundary based on
requirements such as random access, uniqueness, memory usage, or update cost.

For example, if values are read once from a large file, a generator is more
appropriate than a list. If repeated indexing is required, a list may be
better. If fast membership and uniqueness matter, a set is suitable. If labels
are required, a dictionary communicates the relationship directly.

Good design separates what a caller needs from how a value is represented.
Concrete types are necessary for execution, but exposing unnecessary details
creates coupling. Use the simplest concrete representation that satisfies the
required behavior, and hide it behind a clear interface when future changes are
likely.

## Module 11 - Recursion

### Question

Explain recursion in Python. Describe base and recursive cases, stack behavior,
divide-and-conquer use, and limitations.

### Model Answer

Recursion is a problem-solving technique in which a function calls itself on a
smaller or simpler version of the same problem. A correct recursive definition
has a base case that can be answered directly and a recursive case that moves
toward the base case. Without a reachable base case, calls continue until the
program exhausts its call stack.

Factorial is the standard example. Mathematically, `n! = n * (n - 1)!` for
positive `n`, with `0! = 1`. In Python:

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

Calling `factorial(3)` creates calls for 3, 2, 1, and 0. The base call returns
1. The waiting calls then resume in reverse order: `1 * 1`, `2 * 1`, and
`3 * 2`, giving 6. Each call has its own local variables and return location
stored in the call stack.

Recursion is especially natural for tree and graph traversal, nested data,
parsing expressions, and divide-and-conquer algorithms. A binary tree can be
visited by processing the current node and recursively visiting its children.
Merge sort divides a list into halves, recursively sorts each half, and merges
the results. The recursive structure mirrors the mathematical structure of the
problem and can make complex logic easier to express.

The main limitation is stack usage. Every recursive call remains active until
its child returns, so deep recursion can cause a `RecursionError` in Python.
Some recursive algorithms also repeat work. Naive recursive Fibonacci computes
the same smaller values many times and has poor performance. Memoization or
dynamic programming can store previous results, while an iterative loop can
avoid stack growth.

A useful proof technique is structural induction. First prove the base case,
then show that if the method works for a smaller input, it works for the next
larger input. This mirrors the implementation's structure and helps verify
correctness.

Recursion should therefore be chosen when it makes the structure clearer or
when the data is naturally recursive. The programmer must state the base case,
prove progress toward it, consider stack depth, and analyze repeated work.

## Module 12 - Operational Semantics

### Question

Explain operational semantics and show how it describes the execution of a
program through states, environments, and evaluation rules.

### Model Answer

Operational semantics describes what a program does by defining how its
expressions and statements execute. Instead of describing only the final
meaning informally, it models the sequence of transitions from one program
state to another. A state may include variable bindings, memory, control
position, and input or output information.

For an assignment such as `x = 2 + 3`, an operational explanation evaluates the
right-hand expression to 5 and then updates the environment so that `x` maps to
5. For a conditional, the condition is evaluated first. If it is true, the
then-branch executes; otherwise the else-branch executes. A loop repeatedly
evaluates its condition and body until the condition becomes false.

An environment maps names to values. An expression may be evaluated in an
environment, while a statement may transform the environment. This distinction
helps explain scope. A function call creates a new environment containing
parameter bindings, evaluates the body, and returns a value to the caller.

Operational rules can be written as small-step or big-step semantics. Small-
step semantics describes one transition at a time, such as reducing one
subexpression or executing one statement. It is useful for modeling
intermediate behavior, divergence, and concurrency. Big-step semantics relates
an entire expression or statement directly to its final result or state. It is
often easier for simple language definitions.

For example, an arithmetic rule can say that if `e1` evaluates to `v1` and `e2`
evaluates to `v2`, then `e1 + e2` evaluates to `v1 + v2`. A conditional rule
can say that `if c then s1 else s2` follows `s1` when `c` evaluates to true and
follows `s2` when it evaluates to false.

Operational semantics is valuable for reasoning about correctness, scope,
evaluation order, side effects, exceptions, and type safety. It can explain why
an expression raises an error or why changing evaluation order changes a result.
It also provides a foundation for interpreters, compilers, and formal proofs.

The central idea is that execution is a transition system. A program starts in
an initial state, follows language rules, and either reaches a final state,
raises an exception, or continues indefinitely. This precise view turns vague
questions about program behavior into checkable rules.

## Module 13 - Protocols and Shared Behavior

### Question

Explain protocols, duck typing, and shared behavior in Python. Compare this
approach with inheritance and discuss its design benefits.

### Model Answer

A protocol is a description of behavior that an object must support. It focuses
on available operations rather than requiring the object to belong to one exact
class. In Python, this idea is often summarized as duck typing: if an object can
perform the required operation, it can be used. The phrase comes from the idea
that an object behaving like a duck can be treated as a duck for the relevant
purpose.

For example, a function that reads data from an object may require only an
`__iter__` operation. It can accept a list, tuple, set, generator, file, or
custom collection. The function does not need to inherit from a common concrete
base class. This reduces coupling and makes the function reusable.

```python
def total(values):
    result = 0
    for value in values:
        result += value
    return result
```

`total` depends on the iterable protocol. Any object that can supply values can
work with it. A custom class can participate by implementing `__iter__`.

Protocols can be informal, documented expectations, or explicit typing
interfaces using `typing.Protocol`. An explicit protocol can state that a type
must provide methods such as `read` and `close`. Static-analysis tools can then
check whether an object has the required shape, while runtime behavior still
uses the actual methods.

Inheritance creates an is-a relationship and reuses implementation from a
parent class. It is appropriate when the subtype genuinely specializes the
parent and should be substitutable for it. However, inheritance can create a
rigid hierarchy and force unrelated classes to share implementation details.
Protocols use a behavior-based relationship and often support composition more
flexibly.

The benefit of shared behavior is extensibility. A function designed for a
protocol can work with new classes without modification. Testing also becomes
easier because a small fake object can provide only the required methods.
Adapters can make an existing object satisfy a protocol without changing its
source code.

There are risks. If a required method is missing or has the wrong meaning, the
error may appear at runtime. Documentation and type checkers reduce this risk.
Protocols should describe cohesive behavior, not a large collection of
unrelated methods.

Protocols and duck typing therefore express a powerful design principle:
depend on the behavior a client needs, not on an unnecessary concrete class.

## Module 14 - Polymorphism

### Question

Explain polymorphism in Python. Discuss how one interface can support different
implementations through overriding, duck typing, and generic functions.

### Model Answer

Polymorphism means that the same operation or interface can work with values of
different concrete types. The word means many forms. A caller sends the same
message, such as `draw`, `save`, or `area`, and each object performs the action
appropriate to its own type.

In an inheritance-based example, a base class may define an interface and
subclasses override a method:

```python
class Shape:
    def area(self):
        raise NotImplementedError

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width, self.height = width, height

    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2
```

A function can process both shapes without checking their exact classes:
`sum(shape.area() for shape in shapes)`. The call to `area` is dynamically
resolved to the implementation belonging to the actual object. This is often
called subtype polymorphism or method overriding.

Python also supports polymorphism through duck typing. Two unrelated classes
can be accepted if both provide the operation required by the caller. A
function that calls `obj.close()` can work with files, sockets, or a custom
resource manager when each supports the same behavior. No common parent is
required.

Generic functions provide another form. A function such as `max` works with
many types because it relies on comparison behavior rather than one fixed data
type. Type variables and protocols can document the required operations while
allowing many concrete types.

Polymorphism reduces conditional code. Without it, a function might repeatedly
test whether an object is a circle, rectangle, file, or database connection.
With a shared interface, the object itself owns the type-specific behavior.
This improves extension: adding a new shape requires implementing `area`, not
rewriting every consumer.

Good polymorphic design requires a meaningful common contract. A subclass must
honor the expectations of the interface, and a method should preserve its
promised result and error behavior. Polymorphism should not hide incompatible
semantics merely because method names match.

Thus polymorphism combines abstraction and flexibility. It lets client code
depend on stable operations while different objects provide specialized
implementations, which is fundamental to reusable and maintainable programs.
