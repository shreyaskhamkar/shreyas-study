# Computational Mathematics — MCQ (Multiple Choice Questions)

## Module 1: Logic

**1. Which of the following is a proposition?**
a) "Close the door."
b) "What time is it?"
c) "The sum of 2 and 2 is 4."
d) "x + 2 = 5"

**2. Which statement is logically equivalent to `p → q`?**
a) `p ∧ ¬q`
b) `¬p ∧ q`
c) `¬p ∨ q`
d) `p ∨ q`

**3. The negation of `∀x P(x)` is:**
a) `∀x ¬P(x)`
b) `∃x ¬P(x)`
c) `¬∀x ¬P(x)`
d) `∃x P(x)`

**4. How many rows does a truth table for a formula with 3 distinct propositions have?**
a) 3
b) 6
c) 8
d) 9

**5. Which rule is used to prove `p → q` by assuming p and deriving q?**
a) Modus ponens
b) Modus tollens
c) Implication introduction
d) Reductio ad absurdum

## Module 2: Well-Formed Formulae

**6. Which of the following strings is NOT well-formed in propositional logic?**
a) `(p ∧ q) → r`
b) `p ∧ → q`
c) `(¬p) ∨ (q ∧ r)`
d) `((p → q) ↔ ¬r)`

**7. A type system that rejects some safe programs but admits no unsafe ones is called:**
a) Complete
b) Sound
c) Decidable
d) Expressive

**8. In the formula `∀x (P(x, y) → Q(z))`, which variable is free?**
a) x
b) y
c) z
d) both y and z

## Module 3: Graphs and Trees

**9. A tree on n vertices has how many edges?**
a) n
b) n − 1
c) n + 1
d) 2n

**10. For which graph does an Eulerian circuit exist?**
a) A graph with exactly two odd-degree vertices
b) A connected graph where all vertices have even degree
c) Any connected graph
d) A graph with no edges

**11. In Kruskal's algorithm, an edge is rejected when it:**
a) Is the heaviest remaining edge
b) Forms a cycle
c) Has a greater weight than already-selected edges
d) Connects two already-connected components

**12. The Handshaking Lemma implies that any graph has an even number of vertices of:**
a) Even degree
b) Odd degree
c) Total degree
d) No fixed parity

## Module 4: Matrices

**13. Matrix multiplication is:**
a) Always commutative
b) Associative but not commutative
c) Commutative but not associative
d) Neither associative nor commutative

**14. `det(AB)` equals:**
a) det(A) + det(B)
b) det(A) · det(B)
c) det(A) · det(B) − 1
d) det(A + B)

**15. A 3×3 matrix A is invertible only if:**
a) All diagonal entries are 1
b) det(A) ≠ 0
c) A is symmetric
d) All eigenvalues are positive

**16. What does `(A²)[i][j]` count if A is the adjacency matrix of a graph?**
a) Number of edges from i to j
b) Number of length-2 walks from i to j
c) Number of vertices reachable in 2 steps
d) Degree of vertex i times degree of vertex j

## Module 5: Vector Spaces

**17. Which condition is NOT required for a subset to be a subspace?**
a) Contains the zero vector
b) Closed under addition
c) Closed under scalar multiplication
d) Contains all basis vectors

**18. A basis of a vector space is:**
a) Any spanning set
b) Any linearly independent set
c) A linearly independent spanning set
d) A set containing the zero vector

**19. The dimension of P₃ (polynomials of degree ≤ 3) is:**
a) 3
b) 4
c) 5
d) Infinite

**20. For orthogonal vectors u and v, which is true?**
a) u · v = 1
b) u · v = 0
c) u + v = 0
d) u × v = 0

## Module 6: Eigenvalues

**21. If λ is an eigenvalue of A, then:**
a) det(A − λI) = 0
b) A + λI is invertible
c) A − λI has full rank
d) λ is a root of the minimal polynomial only

**22. The product of the eigenvalues of a matrix equals:**
a) Its trace
b) Its determinant
c) Its rank
d) Its nullity

**23. A matrix A is diagonalisable if:**
a) It is square
b) det(A) ≠ 0
c) It has n linearly independent eigenvectors
d) All eigenvalues are distinct

**24. If A is similar to B (B = P⁻¹AP), then:**
a) det(A) = det(B) and trace(A) = trace(B)
b) A = B
c) A and B have different eigenvalues
d) A is symmetric iff B is symmetric

**25. Eigenvalues give the:**
a) Position of the kernel
b) Scale factors along the eigenvectors
c) Number of pivots in Gaussian elimination
d) Entries of the inverse matrix

## Practice questions (26–30)

**26. In natural deduction, the rule that discharges an assumption to derive `p → q` is:**
a) Modus ponens
b) Implication introduction
c) Reductio ad absurdum
d) Double-negation elimination

**27. A tree on n ≥ 2 vertices has at least how many pendant (leaf) vertices?**
a) 1
b) 2
c) n
d) 0

**28. If A is an n×n invertible matrix with det(A) = 6, then det(A⁻¹) is:**
a) 6
b) 1/6
c) 36
d) −6

**29. The characteristic equation used to find eigenvalues is:**
a) A·v = λ·v
b) det(A − λI) = 0
c) A + λI = 0
d) det(A) = 0

**30. Vectors in an orthogonal basis (but not orthonormal) satisfy:**
a) Each pair has dot product 0
b) Each vector has length 1
c) The vectors sum to 0
d) Each pair has dot product 1

## Answers (key only)

<details>
<summary>Reveal answers after attempting all questions</summary>

1-c, 2-c, 3-b, 4-c, 5-c, 6-b, 7-b, 8-d, 9-b, 10-b, 11-b, 12-b, 13-b, 14-b, 15-b, 16-b, 17-d, 18-c, 19-b, 20-b, 21-a, 22-b, 23-c, 24-a, 25-b, 26-b, 27-b, 28-b, 29-b, 30-a.

</details>

## Extended practice: Questions 31–70

| No. | Question | A | B | C | D |
|---:|---|---|---|---|---|
| 31 | A tautology is true under: | One valuation | Every valuation | No valuation | Only false premises |
| 32 | `p ↔ q` is true when p and q: | Differ | Have the same truth value | Are both propositions only | Are both false only |
| 33 | The contrapositive of `p → q` is: | `q → p` | `¬p → ¬q` | `¬q → ¬p` | `p → ¬q` |
| 34 | De Morgan's negation of `p ∧ q` is: | `¬p ∧ ¬q` | `¬p ∨ ¬q` | `p ∨ q` | `¬p → q` |
| 35 | From `p → q` and `p`, infer q by: | Modus ponens | Modus tollens | Addition | Resolution |
| 36 | `∃x P(x)` is disproved by showing: | `P(a)` once | `∀x ¬P(x)` | `∃x ¬P(x)` | `∀x P(x)` |
| 37 | A formula's main connective is the: | First symbol | Outermost operator | Last variable | Deepest negation |
| 38 | In `∀x(P(x) ∨ Q(y))`, y is: | Bound | Free | A constant | Quantified by x |
| 39 | Type-checker soundness means accepted programs do not exhibit the modeled: | Formatting | Type errors | Algorithms | Comments |
| 40 | Undecidability implies a checker cannot be both complete and terminating for: | Every nontrivial semantic property | Integer addition | Tokenization | Finite tables only |
| 41 | The sum of degrees in an undirected graph is: | `|E|` | `2|E|` | `|V|+|E|` | `|V|²` |
| 42 | A graph has an Euler trail but no Euler circuit when it is connected and has: | 0 odd vertices | Exactly 2 odd vertices | 4 odd vertices | 1 odd vertex |
| 43 | A path repeats: | No vertices | No edges but may repeat vertices | Every edge | Its start always |
| 44 | The complete graph `K_n` has: | n edges | n−1 edges | n(n−1)/2 edges | n² edges |
| 45 | A spanning tree of a connected graph contains: | Every edge | Every vertex | Every cycle | Only odd vertices |
| 46 | Kruskal chooses the next safe edge by: | Lowest weight globally | Highest degree | Lowest vertex label | DFS order |
| 47 | Prim grows: | A forest without a start | One tree from a chosen start | An Euler circuit | An adjacency matrix |
| 48 | An adjacency matrix of an undirected simple graph is: | Skew-symmetric | Symmetric | Always diagonal | Rectangular only |
| 49 | Matrices A(m×n) and B(p×q) can multiply as AB when: | m=q | n=p | m=p | n=q only |
| 50 | `(AB)^T` equals: | `A^T B^T` | `B^T A^T` | `AB` | `A+B` |
| 51 | A square matrix is invertible exactly when its determinant is: | 0 | Nonzero | 1 only | Positive only |
| 52 | The determinant of a triangular matrix is the: | Sum of diagonal entries | Product of diagonal entries | Rank | Trace squared |
| 53 | Row swapping changes a determinant's: | Sign | Magnitude only | Dimension | Rank to zero |
| 54 | The identity matrix satisfies: | `AI=IA=A` | `AI=0` | `A+I=A` | `I=A⁻¹` always |
| 55 | Matrix multiplication is generally: | Commutative | Noncommutative | Undefined for square matrices | Element-wise |
| 56 | Rank is the number of: | Entries | Linearly independent rows/columns | Zero rows before reduction | Eigenvalues only |
| 57 | A subset W is a subspace only if it contains: | Any basis of V | The zero vector and is closed | Exactly two vectors | No dependent vectors |
| 58 | A set containing the zero vector is necessarily: | Independent | Dependent | A basis | Orthogonal |
| 59 | If n vectors in an n-dimensional space are independent, they: | Cannot span | Form a basis | Include zero | Have equal length |
| 60 | Dimension is the number of vectors in: | Any spanning set | Any basis | The whole space | Any dependent set |
| 61 | Orthogonal nonzero vectors are automatically: | Dependent | Independent | Equal | Unit length |
| 62 | An orthonormal set is orthogonal and each vector has norm: | 0 | 1 | n | −1 |
| 63 | A linear transformation satisfies `T(u+v)` =: | `T(u)+T(v)` | `T(u)T(v)` | `u+v` | 0 always |
| 64 | Zero is an eigenvalue of A exactly when A is: | Invertible | Singular | Orthogonal | Diagonal only |
| 65 | The sum of eigenvalues, counting multiplicity, equals the: | Determinant | Trace | Rank | Nullity |
| 66 | Eigenvectors must be: | Zero vectors | Nonzero vectors | Unit vectors only | Row vectors only |
| 67 | Distinct eigenvalues have eigenvectors that are: | Linearly independent | Always orthogonal | Equal | Zero |
| 68 | A real symmetric matrix has: | Complex eigenvalues only | Real eigenvalues and orthogonal eigenvectors | No diagonalization | Zero trace |
| 69 | Similar matrices have the same: | Entries | Characteristic polynomial | Eigenvectors always | Row operations only |
| 70 | For eigenvalue λ, an eigenvector lies in the null space of: | `A+λI` | `A−λI` | A only | I only |

## Extended answer key

31-B, 32-B, 33-C, 34-B, 35-A, 36-B, 37-B, 38-B, 39-B, 40-A,
41-B, 42-B, 43-A, 44-C, 45-B, 46-A, 47-B, 48-B, 49-B, 50-B,
51-B, 52-B, 53-A, 54-A, 55-B, 56-B, 57-B, 58-B, 59-B, 60-B,
61-B, 62-B, 63-A, 64-B, 65-B, 66-B, 67-A, 68-B, 69-B, 70-B.
