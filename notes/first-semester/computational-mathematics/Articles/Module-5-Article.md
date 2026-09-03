# Module 5 Article: Spaces, Bases, and Least Squares

## The big idea

A **vector space** is any collection where you can add and scale and get back
something of the same kind — arrows in 2D/3D, polynomials, matrices, functions.
A **basis** is a minimal set of "building blocks" that reach everything, and the
**dimension** counts how many blocks you need. Once you pick a basis, every
vector has **coordinates**, and a **linear transformation** is just a matrix
relative to those bases. **Orthogonality** lets you project cleanly and solve
"best fit" problems even when there is no exact solution (least squares).

## Vector spaces beyond arrows

Don't think only of ℝ²/ℝ³. Examples:

- **P_n** = polynomials of degree ≤ n, basis `{1, x, x², …, xⁿ}`, dimension n+1.
- **M_{m×n}** = all m×n matrices, dimension mn.
- **C[a,b]** = continuous functions on [a,b] — an infinite-dimensional space
  (no finite basis).

The axioms (closure under +, scalar ×, etc.) are the same; the elements just look
different.

## Subspaces and the subspace tests

A subset W is a **subspace** iff:

1. `0 ∈ W`,
2. u, v ∈ W ⇒ u + v ∈ W,
3. u ∈ W, c scalar ⇒ c·u ∈ W.

**Key subspaces of a matrix A:**

- **Column space** C(A) = span of columns.
- **Row space** = span of rows (= C(Aᵀ)).
- **Null space** N(A) = {x : Ax = 0} (the solutions to the homogeneous system).

## Linear independence and basis

Vectors are **independent** if no vector in the set is a combination of the
others; equivalently `Σ cᵢvᵢ = 0` only with all cᵢ = 0.

A **basis** is an independent spanning set. Every vector then has a **unique**
coordinate representation in that basis.

```text
Example: In ℝ³, the standard basis is {e1,e2,e3} = {(1,0,0),(0,1,0),(0,0,1)}.
Any v = (x,y,z) = x·e1 + y·e2 + z·e3  → coordinates (x,y,z).
```

## Dimension and the rank–nullity theorem

**dim(V)** = number of vectors in any basis (well-defined). For A an m×n matrix:

```text
rank(A) + nullity(A) = n
```

- rank = dim(column space) = number of pivot columns.
- nullity = dim(null space) = n − rank = number of free variables.

## Linear transformations and their matrix

A **linear transformation** T satisfies T(u+v)=T(u)+T(v) and T(cu)=cT(u). Once
bases are fixed, every T is `T(v) = Av` for a unique A.

- **Kernel** = {v : T(v) = 0} (= null space of A).
- **Image** = {T(v)} (= column space of A).

## Orthogonality, projections, and least squares

Vectors u, v are **orthogonal** when `u·v = 0`. The **orthogonal complement** of a
subspace S is `S⊥ = {v : v·u = 0 for all u ∈ S}`.

### Projection onto a line

```text
proj_a(b) = ((a·b)/(a·a)) · a
```

Worked: project `b = (3,1)` onto `a = (2,2)`:

```text
a·b = 6+2 = 8 ; a·a = 8 ; proj = (8/8)(2,2) = (2,2)
```

The vector `b − proj = (1,−1)` is perpendicular to `a` — that is the shortest
distance from b to the line.

### Least squares: solving overdetermined systems

When you have **more equations than unknowns** (an overdetermined system
`Ax = b` with no exact solution), you instead find x minimizing `||Ax − b||²`.
The minimum is the projection of b onto the **column space** of A, giving the
**normal equations**:

```text
AᵀA x = Aᵀb          →  x = (AᵀA)⁻¹ Aᵀb   (if AᵀA invertible)
```

**Worked idea:** fitting a line `y = mx + c` to points (1,2), (2,3), (3,5):

```text
A = [[1,1],[1,2],[1,3]]   x = [c; m]   b = [2;3;5]
Solve AᵀA x = Aᵀb for the best (c, m).
```

## Gram-Schmidt and orthonormal bases

**Gram-Schmidt** converts a basis into an orthogonal one (then normalise to
orthonormal). Orthonormal bases are nice because:

- coordinates are just dot products,
- the basis matrix Q satisfies `QᵀQ = I` (Q⁻¹ = Qᵀ),
- projections become `QQᵀ`.

## Exam angle

For "basis, dimension, and coordinates":

1. Define independence (Σ cᵢvᵢ = 0 ⇒ all cᵢ = 0) and basis (independent + spanning).
2. Show a set spans and is independent for the chosen space.
3. Express a target vector as a linear combination → read off coordinates.

> Tip: connect "orthonormal" to `QᵀQ = I`; connect "least squares" to projecting
> b onto Col(A) and the normal equations `AᵀAx = Aᵀb`.

## See also

- Module 4: null space = kernel; row reduction finds rank.
- Module 6: eigenvectors form a basis when A is diagonalisable.
