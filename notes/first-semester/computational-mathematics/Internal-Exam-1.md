# Computational Mathematics - Internal Exam 1

**Exam schedule:** Wednesday, 26 August 2026 | **Slots:** 8:00 AM-10:00 AM or 7:00 PM-9:00 PM

## Instructions

- Total questions: 23
- Sections: 8
- Answer all questions.
- This paper covers the PDF material in Modules 1-4.
- Time suggested: 90 minutes

## Section 1 - MCQ

1. Which formula is false only when `p` is true and `q` is false?
   - A. `p and q`
   - B. `p or q`
   - C. `p -> q`
   - D. `p iff q`

2. A graph with `n` vertices is complete when:
   - A. It has no edges
   - B. Every pair of distinct vertices is joined
   - C. It has exactly `n` edges
   - D. Every vertex has degree one

3. When does a square matrix have an inverse?
   - A. When its determinant is zero
   - B. When its determinant is nonzero
   - C. When it is rectangular
   - D. When all entries are equal

## Section 2 - Multiple-Select MCQ

4. Which are logic equivalence laws? Select all that apply.
   - A. De Morgan's law
   - B. Double negation
   - C. Handshaking lemma
   - D. Distributive law

5. Which are properties of a tree? Select all that apply.
   - A. It is connected
   - B. It is acyclic
   - C. It has a unique path between two vertices
   - D. It must contain an Eulerian circuit

6. Which statements about matrices are true? Select all that apply.
   - A. Addition requires equal dimensions
   - B. Multiplication uses row-by-column products
   - C. Matrix multiplication is always commutative
   - D. `(AB)^T = B^T A^T`

## Section 3 - True / False

7. The negation of `forall x P(x)` is `exists x not P(x)`.
8. A trail cannot repeat vertices.
9. Kruskal's algorithm skips an edge if it creates a cycle.

## Section 4 - Assertion and Reason

10. Assertion: Every tree with `n` vertices has `n - 1` edges. Reason: A tree is connected and acyclic.
   - A. Both are true, and the reason explains the assertion.
   - B. Both are true, but the reason does not explain the assertion.
   - C. Assertion is true, but reason is false.
   - D. Assertion is false, but reason is true.

11. Assertion: Matrix multiplication is not generally commutative. Reason: The dimensions and row-column products impose an order.
   - A. Both are true, and the reason explains the assertion.
   - B. Both are true, but the reason does not explain the assertion.
   - C. Assertion is true, but reason is false.
   - D. Assertion is false, but reason is true.

12. Assertion: Every syntactically valid expression is a well-formed formula. Reason: A well-formed formula must follow the grammar rules of its formal language.
   - A. Both are true, and the reason explains the assertion.
   - B. Both are true, but the reason does not explain the assertion.
   - C. Assertion is true, but reason is false.
   - D. Assertion is false, but reason is true.

## Section 5 - Ordering

13. Arrange a truth-table evaluation: (A) evaluate the complete formula, (B) assign truth values, (C) evaluate subexpressions, (D) list all valuations.

14. Arrange Kruskal's algorithm: (A) stop after `n - 1` accepted edges, (B) sort edges, (C) test for a cycle, (D) accept a safe edge.

15. Arrange matrix inverse checking: (A) compute determinant, (B) verify product is identity, (C) form the candidate inverse, (D) confirm determinant is nonzero.

## Section 6 - Two-Side Match and Choose

16. Match: 1. Tautology 2. Contradiction 3. CNF 4. DNF; a. Always false b. AND of OR-clauses c. Always true d. OR of AND-terms.

17. Match: 1. Walk 2. Trail 3. Path 4. Tree; a. No repeated edges b. Connected and acyclic c. May repeat edges and vertices d. No repeated vertices.

18. Match: 1. Kruskal 2. Prim 3. Determinant 4. Transpose; a. Swaps rows and columns b. Edge-sorting MST method c. Scalar associated with a square matrix d. Grows an MST from a vertex.

## Section 7 - Descriptive Questions

19. Explain propositional and predicate logic. Include quantifiers, truth tables, De Morgan's laws, and one example of negating a quantified statement.

20. Explain and compare Kruskal's and Prim's minimum spanning tree algorithms with a small weighted graph example.

## Section 8 - Fill in the Blanks

21. The sum of the degrees of all vertices in an undirected graph is __________ times the number of edges.
22. A matrix with ones on the main diagonal and zeros elsewhere is an __________ matrix.
23. A formula that is true for every possible valuation is a __________.

## Answer Key

1. C  2. B  3. B
4. A, B, D  5. A, B, C  6. A, B, D
7. True  8. False  9. True
10. A  11. A  12. D
13. D, B, C, A  14. B, C, D, A  15. A, D, C, B
16. 1-c, 2-a, 3-b, 4-d
17. 1-c, 2-a, 3-d, 4-b
18. 1-b, 2-d, 3-c, 4-a
19. Award marks for definitions, connectives/quantifiers, truth-table reasoning, equivalence laws, and correct negation.
20. Award marks for sorting/growing procedures, cycle handling, termination, and a correct worked example.
21. 2  22. identity  23. tautology

## Descriptive Answers

### Answer 19

Propositional logic treats complete statements as propositions such as `p` and `q`. Connectives combine them: `not p`, `p and q`, `p or q`, `p -> q`, and `p iff q`. A truth table lists every valuation and evaluates the formula. Predicate logic adds variables and quantifiers. `forall x P(x)` means every object has property `P`, while `exists x P(x)` means at least one object has it. Quantifier negation changes both the quantifier and the predicate: `not forall x P(x)` is equivalent to `exists x not P(x)`. De Morgan's law similarly gives `not(p and q)` equivalent to `not p or not q`. These rules allow formulas to be translated, simplified, and proved.

### Answer 20

Kruskal's algorithm first sorts all weighted edges from smallest to largest. It accepts an edge when adding it does not create a cycle, usually checked with a union-find structure, and stops after `n - 1` accepted edges. Prim's algorithm starts with one vertex and repeatedly chooses the cheapest edge connecting the current tree to a new vertex. Both produce a minimum spanning tree for a connected weighted graph. Kruskal grows several components that merge together, while Prim grows one connected component. For edges `AB(1), BC(2), AC(3), CD(4)`, Kruskal accepts `AB`, `BC`, and `CD`; Prim starting at `A` also selects `AB`, then `BC`, then `CD`. The total weight is `1 + 2 + 4 = 7`.
