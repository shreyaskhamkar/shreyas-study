# Computational Mathematics — Cheat Sheet

## Logic

```text
Connectives:  ¬p (not), p∧q (and), p∨q (or), p→q (if p then q), p↔q (iff)
Implication:  p→q ≡ ¬p ∨ q
De Morgan:    ¬(p∧q) ≡ ¬p ∨ ¬q ;  ¬(p∨q) ≡ ¬p ∧ ¬q
Quantifiers:  ¬∀xP(x) ≡ ∃x¬P(x) ;  ¬∃xP(x) ≡ ∀x¬P(x)
Tautology=always T; Contradiction=always F; Contingency=sometimes.
```

### Natural deduction rules

```text
∧I  φ,ψ ⇒ φ∧ψ           ∧E  φ∧ψ ⇒ φ (and ψ)
∨I  φ ⇒ φ∨ψ             ∨E  φ∨ψ, φ⇒χ, ψ⇒χ ⇒ χ
→I  [φ]…ψ ⇒ φ→ψ         →E  φ→ψ, φ ⇒ ψ   (modus ponens)
¬I  [φ]…⊥ ⇒ ¬φ          ¬E  φ,¬φ ⇒ ⊥
∀I  φ(a) [a fresh] ⇒ ∀xφ(x)   ∀E  ∀xφ(x) ⇒ φ(t)
∃I  φ(t) ⇒ ∃xφ(x)       ∃E  ∃xφ(x),[φ(a)]⇒χ ⇒ χ   (a fresh)
RAA: [¬φ]…⊥ ⇒ φ
```

## Matrices

```text
A = [a_ij]_{m×n}   a_ij = row i, col j
(Aᵀ)_ij = a_ji     (AB)ᵀ = BᵀAᵀ
c_ij = Σ_k a_ik·b_kj  (need cols(A)=rows(B))
2×2 det = ad−bc    det(AB)=det(A)det(B) ; det(Aᵀ)=det(A)
A⁻¹ exists iff det(A)≠0
2×2⁻¹ = 1/det·[[d,−b],[−c,a]]
Gauss-Jordan:  [A | I] → [I | A⁻¹]
```

## Linear algebra

```text
Vector space axioms: closed under + and scalar × ; 0 ∈ V
Subspace W: 0∈W ; u,v∈W ⇒ u+v∈W ; c·u∈W
Span(S)=all combos ; independent: Σc_i v_i=0 ⇒ all c_i=0
Basis = indep + spanning ; dim(V)=#basis vectors
Linear T: T(u+v)=T(u)+T(v), T(cu)=cT(u)
  kernel={v:T(v)=0} ; image=range
Row rank = Col rank = rank(A)
```

### Orthogonality

```text
u·v = 0  ⇒ u ⟂ v
proj_a(b) = ((a·b)/(a·a))·a
S⊥ = {v : v·u=0 ∀u∈S} ;  (S⊥)⊥ = S
Orthonormal basis: u_i·u_j = δ_ij
Gram-Schmidt → orthonormal basis
```

## Eigenvalues

```text
A v = λ v
Characteristic eq:  det(A − λI) = 0
det(A) = Π λ_i       trace(A) = Σ λ_i
Diagonalisable: A = P D P⁻¹  (P=[v_i], D=diag(λ_i))
Powers: Aᵏ = P Dᵏ P⁻¹
Similar B=P⁻¹AP ⇒ same eigenvalues, trace, det
```

## Graphs

```text
G=(V,E) ; degree d(v) ; Handshaking: Σ d(v) = 2|E|
Eulerian circuit ⇔ connected & all degrees even
Eulerian trail ⇔ exactly two odd-degree vertices
Tree: connected + acyclic ; n vertices ⇒ n−1 edges
Subgraph: V'⊆V, E'⊆E ; Induced: keep all edges of G ; Spanning: V'=V
Kruskal: sort edges, union-find, skip cycles
Prim: grow cheapest edge from a vertex
Adjacency matrix A; Aᵀ=A if undirected; (A²)[i][j]=2-walks
```

## Key theorems

```text
- det(AB)=det(A)det(B)
- rank(A)=rank(Aᵀ)
- det(A)=Π eigenvalues
- trace(A)=Σ eigenvalues
- Cayley-Hamilton: p_A(A)=0 (optional)
- Fundamental theorem of linear algebra (four subspaces)
- Spectral theorem: symmetric A ⇒ orthonormal eigenvectors
```
