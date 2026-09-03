# Computational Mathematics — Important Questions

Use the answer points to check your response after attempting each question.

## Module 1

### Short answers

1. Define a proposition and give an example of a statement that is not a proposition.
2. State whether `p → q` is equivalent to `q → p`, and prove using a truth table.
3. Write the negation of "Every student solved every problem."
4. State De Morgan's laws for quantifiers.
5. What is the difference between consistency and completeness?

### Long answer

**(Logic) Prove that `p → (q → r)` is logically equivalent to `(p ∧ q) → r` using natural deduction or a truth table.**

Answer points: build truth tables (show all 8 rows identical), or derive: assume `p∧q`, derive `q→r`, then `r`; i.e. `(p∧q)→r` from `p→(q→r)`, and converse similarly.

### Natural deduction problem

Derive `p → (q → r) ⊢ q → (p → r)`.

Answer points: assume `q`; assume `p`; from `p→(q→r)` and `p` get `q→r`; from `q` get `r`; discharge to `p→r`; discharge to `q→(p→r)`.

### Type-checking question

Explain why a type system should ideally be sound, and why requiring it to be complete makes type-checking undecidable in expressive languages.

Answer points: soundness = well-typed programs don't go wrong; completeness = every safe program accepted; for Turing-complete languages you can have any two of {sound, complete, decidable}; adding higher-rank/subtyping makes inference undecidable.

## Module 2

### Short answers

1. What makes a string a well-formed formula? Give a non-example.
2. Distinguish free and bound variables. Give an example with one of each.
3. Name two benefits and one limitation of static type checking.
4. Show the formation tree for `(p ∧ q) → r`.

### Long answer

**Discuss the trade-off between expressiveness and decidability in type systems, citing one case where inference becomes undecidable.**

Answer points: stronger types express more (invariants), but inferring them is harder; Hindley-Milner is decidable; adding polymorphic recursion or higher-rank types makes inference undecidable (Pierce, 1998); trade-off managed via type annotations.

## Module 3

### Short answers

1. Define a walk, a trail, and a path.
2. State the Handshaking Lemma and its corollary about odd-degree vertices.
3. Give the necessary and sufficient condition for an Eulerian circuit.
4. Define a tree and state how many edges a tree on n vertices has.

### Problems

**(Graph) In a simple graph on 6 vertices, what is the maximum number of edges?**
Answer: n(n−1)/2 = 15.

**(MST) Given edges AB(1), BC(2), CD(3), DA(4), AC(5) for a graph, run Kruskal's algorithm. What is the MST weight?**
Answer points: sorted AB(1), BC(2), CD(3), DA(4); add AB, BC, CD → 3 edges, n−1=3, stop; AC(5) would cycle, skipped. Weight = 1+2+3 = 6.

### Long answer

**Explain how depth-first search can be used to test whether a graph is connected, and how it finds a spanning tree.**
Answer points: DFS from any vertex; mark reachable vertices; the graph is connected iff all vertices are reached; the DFS tree edges form a spanning tree.

## Module 4

### Short answers

1. Give one example each of a diagonal, symmetric, and identity matrix.
2. Is (AB)ᵀ = AᵀBᵀ or BᵀAᵀ? Give a counterexample.
3. When is a matrix invertible?
4. Interpret the determinant of A geometrically.

### Problems

**(Inverse) Find the inverse of `[[3,1],[2,4]]`.**
Answer: det = 12−2 = 10; inverse = (1/10)·[[4,−1],[−2,3]] = [[0.4, −0.1],[−0.2,0.3]].

**(Determinant) Compute det of a 3×3 by cofactor expansion.**
Answer points: pick a row/column (preferably with zeros), expand along minors, signs (+ − + …), recurse.

### Long answer

**Show that the matrix `[[a,b],[c,d]]` is invertible iff ad−bc ≠ 0, and derive the inverse formula.**
Answer points: det = ad−bc; if non-zero, the candidate `[[d,−b],[−c,a]]/det` multiplies to give the identity; if zero, rows are dependent ⇒ singular.

## Module 5

### Short answers

1. State the three subspace tests.
2. Are the polynomials {1, x, x²} linearly independent in P₂?
3. Define the kernel and image of a linear transformation.
4. What is an orthonormal basis?

### Problem

**(Projection) Project b = (4, 1) onto a = (2, 2).**
Answer: a·b = 8+2 = 10; a·a = 8; proj = (10/8)(2,2) = (2.5, 2.5).

### Long answer

**Prove that any finite-dimensional vector space basis has the same number of elements (i.e., dimension is well-defined).**
Answer points: use the exchange/steinitz lemma — a linearly independent set cannot exceed a spanning set in size; any two bases are the same size.

## Module 6

### Short answers

1. Define eigenvalue and eigenvector.
2. The eigenvalues of A are the roots of what polynomial?
3. State the relationship between eigenvalues and det(A) and trace(A).
4. Give the geometric meaning of an eigenvector.

### Problem

**(Eigen) Find the eigenvalues and eigenvectors of `[[3,1],[0,2]]`.**
Answer points: det([[3−λ,1],[0,2−λ]])=(3−λ)(2−λ)=0 ⇒ λ=3,2. λ=3: [[0,1],[0,−1]]→v=(1,0). λ=2: [[1,1],[0,0]]→v=(1,−1).

### Long answer

**Explain diagonalisation and why it makes computing Aᵏ efficient. Illustrate with a 2×2 example.**
Answer points: A=PDP⁻¹ ⇒ Aᵏ=PDᵏP⁻¹; Dᵏ is just powers of eigenvalues on the diagonal — far easier than multiplying A by itself k times.

## Full-syllabus questions

1. Compare the OSI and TCP/IP models: layer by layer.
2. Prove that a set of vectors forms a basis for ℝ³, then find the coordinate of a given vector relative to that basis.
3. A communication channel has adjacency matrix A. Explain what (A²)[i][j] counts, and how eigenvalues of A relate to the graph's connectivity.
4. Explain why the RSA cryptosystem relies on the difficulty of factoring, and outline the key generation, signing, and verification steps.

## Answer-writing checklist

- Begin with the precise definition.
- Show steps clearly in derivations.
- Use small numeric examples to illustrate.
- State assumptions and limitations.
- End with a concise conclusion or decision criterion.
