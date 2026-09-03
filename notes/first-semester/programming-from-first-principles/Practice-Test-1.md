# Programming from First Principles - Practice Test 1

This test covers Modules 1-7.

## Questions

1. What is the difference between a list and a tuple?
2. What is a higher-order function?
3. Write a list comprehension that produces the squares of 1, 2, and 3.
4. What is lazy evaluation?
5. What is a lambda function?
6. What does it mean for a function to be first-class?
7. What is a closure?
8. Explain dynamic typing and type hints.
9. Trace the result of `list(map(lambda x: x * 2, [1, 2, 3]))`.
10. State one advantage and one limitation of generators.

## Answer Key

1. A list is mutable; a tuple is generally immutable.
2. A function that accepts another function or returns a function.
3. `[x * x for x in [1, 2, 3]]`.
4. Delaying computation until a result is required.
5. A small anonymous function written with `lambda`.
6. It can be assigned, passed, returned, and stored like other values.
7. An inner function together with retained access to variables from its enclosing scope.
8. Dynamic typing checks types during execution; type hints document intended types and assist tools but do not normally enforce them.
9. `[2, 4, 6]`.
10. Advantage: low memory use. Limitation: values are consumed progressively and may not be reusable without recreating the generator.
