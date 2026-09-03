# Programming from First Principles - Practice Test 2

This test covers Modules 8-14.

## Questions

1. What is type inference?
2. Why are user-defined classes useful?
3. What is the difference between a class and an object?
4. Define recursion and give its two essential parts.
5. What is operational semantics?
6. What is a protocol in Python-style design?
7. Explain duck typing.
8. What is polymorphism?
9. Why should a recursive function have a reachable base case?
10. Explain how two different classes can support the same protocol.

## Answer Key

1. The process of deducing a likely type from how a value or expression is used.
2. They model domain concepts and combine related data with behavior.
3. A class is a blueprint; an object is an instance created from that class.
4. A function solving a problem by calling itself; it needs a base case and a recursive case.
5. A description of how program expressions and statements execute or change state.
6. A shared set of operations or behaviors that an object promises to support.
7. Code uses an object's supported operations rather than requiring a specific class.
8. One interface or operation working with values of different concrete types.
9. Without it, calls may continue until a recursion error or resource exhaustion occurs.
10. Each class implements the required methods, so the same client code can use either object.
