# OCA-503 MJ — Model Answers and Marking Guide

## Q1 answer key

Award **1 mark** for the option and **1 mark** for a valid reason.

| No. | Answer | Reason and closest-distractor check | Module |
|---:|---|---|---:|
| 1 | C | It is declarative and has a definite truth value; `x+2=5` is open until x is assigned. | 1 |
| 2 | C | Implication is false only for true p and false q, exactly as `¬p∨q`; `p∧¬q` is its negation. | 1 |
| 3 | B | Not every x satisfying P means some x fails P; it does not mean all fail. | 1 |
| 4 | C | Three Boolean variables have `2³=8` valuations, not `2×3`. | 1 |
| 5 | C | Implication introduction discharges the assumption p; modus ponens uses an existing implication. | 1 |
| 6 | B | The binary connective lacks a left operand; the other parentheses/connectives are grammatical. | 2 |
| 7 | B | Soundness means accepted programs avoid the specified errors; completeness is the converse coverage property. | 2 |
| 8 | D | Only x is bound by `∀x`; y and z remain free. | 2 |
| 9 | B | Every finite tree on n vertices has `n−1` edges; n edges would contain a cycle. | 3 |
| 10 | B | Connectedness plus all even degrees gives an Euler circuit; exactly two odd degrees gives only an open trail. | 3 |
| 11 | B | Kruskal adds the lightest safe edge and rejects one that closes a cycle. | 3 |
| 12 | B | Degree sum is `2|E|`, so the count of odd addends must be even. | 3 |
| 13 | B | `(AB)C=A(BC)`, but generally `AB≠BA`; confusing these properties is the trap. | 4 |
| 14 | B | Determinants are multiplicative; they are not additive. | 4 |
| 15 | B | Nonzero determinant is equivalent to full rank and an inverse; symmetry alone is insufficient. | 4 |
| 16 | B | Matrix multiplication sums all two-edge intermediate walks; it does not merely count distinct destinations. | 4 |
| 17 | D | A subspace needs zero and closure; a proper subspace cannot contain every parent-space basis vector. | 5 |
| 18 | C | A basis must both span and be independent; either condition alone is insufficient. | 5 |
| 19 | B | `{1,x,x²,x³}` is a four-element basis. | 5 |
| 20 | B | Orthogonality is zero dot product; unit length would additionally make vectors orthonormal. | 5 |
| 21 | A | A nonzero eigenvector solves `(A−λI)v=0`, so the matrix is singular. | 6 |
| 22 | B | Eigenvalue product is determinant; their sum is trace, counting multiplicity. | 6 |
| 23 | B | Independent eigenvectors form the change-of-basis matrix; nonzero determinant alone does not ensure this. | 6 |
| 24 | B | Similarity preserves characteristic polynomial, hence determinant and trace; entries need not match. | 6 |
| 25 | B | `Av=λv` means λ scales its eigenvector direction. | 6 |
| 26 | B | This is precisely implication introduction, not use of the implication after it exists. | 1 |
| 27 | B | The endpoints of a longest path are distinct leaves; one leaf is impossible for a nontrivial tree. | 3 |
| 28 | B | `det(A⁻¹)=1/det(A)=1/6`; it is not unchanged under inversion. | 4 |
| 29 | B | Its roots are eigenvalues; `Av=λv` is the associated vector equation. | 6 |
| 30 | A | Orthogonal means pairwise zero dot products; unit norms are not required. | 5 |

## Q2 model answers

1. A tautology is true under every valuation; a contradiction is false under every valuation. **Marks:** each definition 1. *(Module 1)*
2. A bound variable lies within the scope of its quantifier; a free variable does not. The truth of an open formula may depend on assignments to its free variables. **Marks:** distinction 1; consequence 1. *(Module 2)*
3. In an undirected graph, the sum of all vertex degrees is twice the number of edges: `Σdeg(v)=2|E|`. Consequently, the number of odd-degree vertices is even. **Marks:** equation 1; consequence 1. *(Module 3)*
4. A trail does not repeat edges, though it may repeat vertices; a path does not repeat vertices. Every path is therefore a trail. **Marks:** each definition 1. *(Module 3)*
5. `AB` exists exactly when the inner dimensions match, `n=p`. The product then has dimensions `m×q`. **Marks:** condition 1; result size 1. *(Module 4)*
6. Vectors are linearly independent when `c₁v₁+...+cₙvₙ=0` has only the solution with every coefficient zero. Otherwise one vector is a linear combination of the others. **Marks:** equation/definition 1; interpretation 1. *(Module 5)*
7. A and B are similar if an invertible P satisfies `B=P⁻¹AP`. Similar matrices represent one transformation in different bases and share characteristic polynomial, eigenvalues, trace, and determinant. **Marks:** equation 1; invariant/meaning 1. *(Module 6)*

## Q3 model answers

1. The columns for `(p,q)` are TT, TF, FT, FF. `p→q` is T,F,T,T and `¬q→¬p` is T,F,T,T; their biconditional is T in every row. Hence the formula is a tautology expressing equivalence with the contrapositive. **Rubric:** rows 1; first implication 1; contrapositive 1; biconditional 1; classification 1. *(Module 1)*
2. Sort edges as AB1, BC2, AC3, BD4, CD5. Choose AB and BC; reject AC because it forms cycle A-B-C-A; choose BD to include D. The MST is `{AB,BC,BD}` with weight `1+2+4=7`. **Rubric:** sort 1; AB/BC 1; cycle rejection 1; BD 1; total 1. *(Module 3)*
3. `det(A)=1×4−2×3=−2`. Therefore `A⁻¹=(-1/2)[[4,-2],[-3,1]]=[[-2,1],[3/2,-1/2]]`. For example, the first entry of `AA⁻¹` is `1(−2)+2(3/2)=1`; the off-diagonal first-row entry is `1(1)+2(−1/2)=0`. **Rubric:** determinant 1; formula 1; inverse 2; verification 1. *(Module 4)*
4. `det(A−λI)=(2−λ)(3−λ)=0`, so λ is 2 or 3. For λ=2, eigenvectors span `(1,0)`; for λ=3, they span `(0,1)`. The two independent eigenvectors form a basis, so A is diagonalisable (indeed already diagonal). **Rubric:** equation 1; values 1; each eigenspace 1; conclusion 1. *(Module 6)*

