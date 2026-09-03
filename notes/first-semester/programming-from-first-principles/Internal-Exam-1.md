# Programming from First Principles - Internal Exam 1

**Exam schedule:** Monday, 24 August 2026 | **Slots:** 8:00 AM-10:00 AM or 7:00 PM-9:00 PM

## Instructions

- Total questions: 23
- Sections: 8
- Answer all questions.
- This paper covers Modules 1-14.
- Time suggested: 90 minutes

## Section 1 - MCQ

1. Which Python collection stores key-value pairs?
   - A. List
   - B. Tuple
   - C. Dictionary
   - D. Set

2. What does a function return when it reaches the end without a return statement?
   - A. `0`
   - B. `False`
   - C. `None`
   - D. An exception always occurs

3. Which construct creates values lazily one at a time?
   - A. Generator
   - B. List literal
   - C. String
   - D. Boolean expression

## Section 2 - Multiple-Select MCQ

4. Which are properties of first-class functions? Select all that apply.
   - A. They can be assigned to variables
   - B. They can be passed as arguments
   - C. They can be returned from functions
   - D. They can only be called at program startup

5. Which statements about type hints are true? Select all that apply.
   - A. They document intended types
   - B. They can help static-analysis tools
   - C. They always enforce types at runtime
   - D. They improve code readability

6. Which are useful properties of recursion? Select all that apply.
   - A. It needs a base case
   - B. It solves a problem through smaller subproblems
   - C. It always uses less memory than iteration
   - D. Each recursive call may have its own local state

## Section 3 - True / False

7. A tuple is generally immutable after creation.
8. A generator must create its complete result list before producing its first value.
9. Duck typing focuses on supported behavior rather than an object's exact class.

## Section 4 - Assertion and Reason

10. Assertion: A closure can use a variable from its enclosing function. Reason: The inner function retains access to the enclosing lexical environment.
   - A. Both are true, and the reason explains the assertion.
   - B. Both are true, but the reason does not explain the assertion.
   - C. Assertion is true, but reason is false.
   - D. Assertion is false, but reason is true.

11. Assertion: A recursive function can run forever. Reason: A recursive definition without a reachable base case keeps making recursive calls.
   - A. Both are true, and the reason explains the assertion.
   - B. Both are true, but the reason does not explain the assertion.
   - C. Assertion is true, but reason is false.
   - D. Assertion is false, but reason is true.

12. Assertion: Python type hints always prevent invalid values at runtime. Reason: Type hints are primarily annotations used by tools and readers.
   - A. Both are true, and the reason explains the assertion.
   - B. Both are true, but the reason does not explain the assertion.
   - C. Assertion is true, but reason is false.
   - D. Assertion is false, but reason is true.

## Section 5 - Ordering

13. Arrange the usual function-call process: (A) return result, (B) evaluate arguments, (C) enter function body, (D) bind parameters.

14. Arrange a generator interaction: (A) resume at the next statement, (B) call `next`, (C) yield a value, (D) pause generator execution.

15. Arrange recursive factorial evaluation for `factorial(3)`: (A) return 1 for the base case, (B) call `factorial(2)`, (C) call `factorial(3)`, (D) multiply returned values while unwinding.

## Section 6 - Two-Side Match and Choose

16. Match: 1. List 2. Tuple 3. Set 4. Dictionary; a. Unique unordered values b. Key-value mapping c. Ordered mutable sequence d. Ordered immutable sequence.

17. Match: 1. Higher-order function 2. Lambda 3. Closure 4. Generator; a. Small anonymous function b. Function retaining enclosing state c. Function accepting/returning functions d. Lazy producer.

18. Match: 1. Class 2. Protocol 3. Polymorphism 4. Type inference; a. Common behavior contract b. Same interface, different implementations c. Blueprint for objects d. Tool deduces a likely type.

## Section 7 - Descriptive Questions

19. Explain the difference between a normal function, a higher-order function, a closure, and a generator with small Python examples.

20. Explain block scope in structured programming. Discuss local variables, nested blocks, shadowing, lifetime, and how Python handles block scope.

## Section 8 - Fill in the Blanks

21. A function passed as an argument to another function is a __________ function.
22. The Python keyword used to produce a value lazily from a generator is __________.
23. A function that calls itself is called a __________ function.

## Answer Key

1. C  2. C  3. A
4. A, B, C  5. A, B, D  6. A, B, D
7. True  8. False  9. True
10. A  11. A  12. D
13. B, D, C, A  14. B, C, D, A  15. C, B, A, D
16. 1-c, 2-d, 3-a, 4-b
17. 1-c, 2-a, 3-b, 4-d
18. 1-c, 2-a, 3-b, 4-d
19. Award marks for correct definitions, examples, and distinctions between eager and lazy behavior.
20. Award marks for base case, recursive case, stack/unwinding explanation, and a limitation such as recursion depth or repeated work.
21. Higher-order  22. `yield`  23. Recursive

## Descriptive Answers

### Answer 19

A normal function performs a defined operation and returns a result. A higher-order function accepts another function as an argument or returns a function, such as `map` or a custom function that applies a supplied operation. A closure is an inner function that remembers variables from its enclosing scope after the outer function has returned. A generator uses `yield` to produce values lazily and pauses between values. For example:

```python
def apply_twice(f, value):
    return f(f(value))

def make_adder(amount):
    def add(value):
        return value + amount
    return add

def numbers():
    yield 1
    yield 2
```

Here `apply_twice` is higher-order, `add` is a closure, and `numbers` is a generator.

### Answer 20

Block scope limits a variable's visibility and lifetime to the block in which it
is declared. In structured programming, a block is a group of statements
controlled by a condition, loop, function, or explicit begin/end markers. Block
scope supports information hiding because code outside the block does not need
to know about temporary variables used inside it.

An inner block may read an accessible variable from an outer block, but an outer
block cannot use a variable declared only inside the inner block. When a block
finishes, its temporary variables go out of scope. If an inner block declares a
variable with the same name as an outer variable, the inner declaration shadows
the outer one while the inner block is active. Shadowing can be useful, but
excessive use makes programs difficult to understand.

```text
if condition {
    integer result = 10
    print(result)
}
print(result)       // invalid in a block-scoped language
```

Block scope is different from function scope. Function scope makes variables
available throughout a function, whereas block scope restricts them to a
smaller region. Python mainly uses function, module, class, and comprehension
scopes. Ordinary `if`, `for`, and `while` blocks do not create a separate local
scope, so a loop variable can remain available after the loop. A comprehension
does have its own iteration-variable scope in modern Python. Python functions
use the LEGB lookup rule: Local, Enclosing, Global, and Built-in.

Scope rules reduce accidental interference and allow temporary names to be
reused safely. Good practice is to define variables close to where they are
used, avoid unnecessary shadowing, and distinguish the general structured-
programming concept of block scope from Python's actual function-based behavior.
