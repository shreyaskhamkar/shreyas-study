# Computational Mathematics — Quick Revision

## Module 1: Logic

- Proposition = T/F statement; connectives ¬∧∨→↔; implication `p→q ≡ ¬p∨q`.
- Truth tables decide equivalence; De Morgan `¬(p∧q) ≡ ¬p∨¬q`.
- Predicate logic: ∀ (all), ∃ (some); De Morgan `¬∀≡∃¬`, `¬∃≡∀¬`.
- Boolean algebra: complement, identity, distributive, idempotent, duality.
- Natural deduction: assume–discharge; ∨/→/¬/∀/∃ intro/elim; RAA.
- CNF = ∧ of clauses; DNF = ∨ of monomials; both always exist.
- Sound (only valid provable) + complete (all valid provable); Gödel: PA neither complete nor consistent-and-complete.

## Module 2: Well-Formed Formulae

- WFF follows grammar; parse tree shows structure; unique readability.
- Free = not bound by a quantifier; bound = under ∀/∃; closed = no free vars.
- Type checking catches arity/type errors at compile time.
- Decidable inference (Hindley-Milner); undecidable with higher-rank/subtyping/poly-recursion.
- Sound+complete+decidable type checking impossible for Turing-complete code; pick two.

## Module 3: Graphs and Trees

- Graph G=(V,E); degree d(v); Handshaking Σd=2|E|; odd-degree vertices are even in count.
- Walk/trail/path/cycle; Eulerian trail uses every edge once; Euler: all degrees even (circuit) or exactly 2 odd (trail).
- Tree = connected+acyclic; n vertices ⇒ n−1 edges; unique path between vertices; ≥2 leaves.
- Rooted/binary trees; pendant vertex = leaf; centre via leaf-peeling (1 or 2).
- Subgraph (V'⊆V,E'⊆E); induced = all edges; spanning = all vertices.
- MST = min total weight; Kruskal (sort+union-find, skip cycles); Prim (grow from vertex).
- Adjacency matrix A; A symmetric iff undirected; (A²)[i][j] = 2-walks.

## Module 4: Matrices

- m×n, entry a_ij (row i, col j); types (square/diagonal/identity/zero/symmetric/triangular).
- Operations: + (same size), scalar·, multiply (row·col; AB≠BA), transpose ((AB)ᵀ=BᵀAᵀ).
- Laws: + and × associative/distributive; × NOT commutative; no cancellation without inverse.
- det(AB)=detA·detB; det(Aᵀ)=detA; A⁻¹ exists iff detA≠0.
- 2×2 inverse = 1/det·[[d,−b],[−c,a]]; 3×3 via adjugate or Gauss-Jordan [A|I]→[I|A⁻¹].
- Matrix = linear transform; det = area/volume scale; columns = images of basis vectors.

## Module 5: Vector Spaces and Subspaces

- Vector space: closed under + and scalar ×; ℝⁿ, P_n, M_{m×n}.
- Subspace: contains 0, closed under +, closed under scalar ×.
- Span = all combos; independent = only trivial 0-combo; basis = indep+spanning.
- dim(V)=#basis; ℝⁿ has dim n; coordinates unique per chosen basis.
- Linear T: T(u+v)=T(u)+T(v), T(cu)=cT(u); kernel={v:T(v)=0}, image=range.
- Orthogonal: u·v=0; orthogonal complement S⊥; (S⊥)⊥=S.
- Projection onto a: proj_a(b)=((a·b)/(a·a))a.
- Orthogonal/orthonormal basis; Gram-Schmidt orthogonalises a basis.

## Module 6: Eigenvalues and Eigenvectors

- Eigenvalue/eigenvector: Av=λv; solve det(A−λI)=0 for λ, then (A−λI)v=0 for v.
- Characteristic polynomial degree n ⇒ n eigenvalues (with multiplicity).
- det = product of λ; trace = sum of λ.
- Diagonalisation A=PDP⁻¹; powers Aᵏ=PDᵏP⁻¹ (if diagonalisable).
- Geometric: eigenvectors = pure-stretch directions; eigenvalues = stretch factors.
- Applications: stability, PCA (eigenvectors of covariance), PageRank (λ=1), vibrations.
- Similarity B=P⁻¹AP ⇒ same eigenvalues; diagonalisation is similarity to a diagonal matrix.

## Ten memory lines

1. Propositions combine with and/or; implication hides a negated disjunction.
2. Quantifiers flip under negation the way De Morgan flips and/or.
3. A tree is connected with no cycles and exactly n−1 edges.
4. The MST joins everything cheapest; Kruskal sorts, Prim grows.
5. Matrix multiplication is row-by-column and not commutative.
6. A determinant of zero means no inverse and a squashed space.
7. A basis is the smallest building set; dimension counts the builders.
8. A linear map is captured fully by a matrix.
9. Eigenvalues are the stretch factors of a transformation.
10. Orthogonality lets you project cleanly and solve least-squares problems.
