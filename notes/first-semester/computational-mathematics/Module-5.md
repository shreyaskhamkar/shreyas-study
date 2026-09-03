# Module 5: Vector Spaces and Subspaces

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [Next: Module 6 →](<Module-6.md>)

## Learning outcomes

After this module, you should be able to:

- verify the vector-space axioms for a given set;
- test whether a subset is a subspace;
- determine linear independence and find a basis;
- define dimension and compute coordinates relative to a basis;
- describe a linear transformation and its kernel/image;
- work with orthogonal vectors, orthogonal complements, projections, and
  orthogonal/orthonormal bases.


## Prerequisites

Complete [Module 4](Module-4.md) first. Review its quick-revision section if any term below feels unfamiliar.


## Short study blocks

Study one row at a time. Draw the vectors whenever the example is in two or
three dimensions.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Vector spaces and subspaces | 10-15 minutes |
| 2 | Span, linear independence, basis, and dimension | 10-15 minutes |
| 3 | Linear transformations, kernel, and image | 10-15 minutes |
| 4 | Orthogonality and projections | 10-15 minutes |
| 5 | Orthogonal bases and Gram-Schmidt | 10-15 minutes |

## Start here: the simple idea

A **vector space** is any set where you can add elements and scale them and have
that behave like arrows in 2D/3D space. A **basis** is a minimal set of
"building blocks" you need to reach every element. **Orthogonality** means
"perpendicular," which lets you project cleanly and solve least-squares
problems.

### Everyday analogy

- Vector space = a Lego construction mat: any position on the mat is reachable by
  combining basic step vectors.
- Basis = the smallest set of Lego pieces from which you can build everything.
- Orthogonality = two walls at right angles: moving along one doesn't affect the
  other, so you can project a point straight onto each wall.

## Vector spaces

### Definition and axioms

A **vector space V over ℝ** (or ℂ) is a set with **addition** and **scalar
multiplication** satisfying 8 axioms (closure + associativity + commutativity +
identity + inverses for addition; and compatible scalar distributive laws +
1·v = v). You rarely re-derive all eight; you check closure under + and scalar ×.

**Examples:**

- **ℝⁿ** (n-tuples), **ℝ²** and **ℝ³** (the plane, 3D space).
- **P_n** = polynomials of degree ≤ n (e.g., `a₀ + a₁x + a₂x²`).
- **M_{m×n}** = all m×n matrices.
- **ℂⁿ** = complex n-tuples.

### Worked check

Is the set `S = { (x, y) ∈ ℝ² : x + y = 0 }` a vector space? Check closure:
- Sum: `(a,−a) + (b,−b) = (a+b, −(a+b))` ∈ S. ✔
- Scalar: `k(a,−a) = (ka, −ka)` ∈ S. ✔
So S is a subspace (and thus a vector space) of ℝ².

## Subspaces

A subset W of V is a **subspace** iff:

1. **0 ∈ W** (contains the zero vector).
2. **Closed under +:** u, v ∈ W ⇒ u + v ∈ W.
3. **Closed under scalar ×:** u ∈ W, c scalar ⇒ c·u ∈ W.

**Examples of subspaces of ℝ³:** the zero vector, any line through origin, any
plane through origin. A line **not** through the origin is **not** a subspace
(because 0 is not on it).

## Span and linear independence

The **span** of vectors v₁,…,vₖ is all their linear combinations `c₁v₁+…+cₖvₖ`.

Vectors are **linearly independent** if the only solution to
`c₁v₁+…+cₖvₖ = 0` is `c₁=…=cₖ=0`; otherwise **linearly dependent**.

**Worked example:** Are v₁=(1,2) and v₂=(3,4) linearly independent in ℝ²?

```text
c1(1,2) + c2(3,4) = 0  ⇒  c1+3c2=0, 2c1+4c2=0
⇒ c1 = −3c2; 2(−3c2)+4c2 = −2c2 = 0 ⇒ c2=0, c1=0. Independent.
```

## Basis and dimension

A **basis** of V is a linearly independent set whose span is **all** of V.
The **dimension** is the number of vectors in any basis.

- ℝⁿ has dimension n; the **standard basis** is `e₁=(1,0,…), e₂=(0,1,0,…), …`.
- P₂ has dimension 3; basis `{1, x, x²}`.
- If you have more vectors than the dimension, they're dependent.

### Coordinates

Relative to a basis B = {b₁,…,bₙ}, every v has a **unique** coordinate vector
`[v]_B = (c₁,…,cₙ)` with `v = c₁b₁ + … + cₙbₙ`.

## Linear transformations

A **linear transformation** T: V → W satisfies
`T(u+v) = T(u)+T(v)` and `T(cu) = cT(u)`.

- **Kernel (null space):** `{v : T(v) = 0}`.
- **Image (range):** `{T(v) : v ∈ V}`.
- **Matrix representation:** once bases are chosen, every linear T is `T(v) = Av`
  for a unique matrix A. (This is why matrices are so central.)

## Orthogonal vectors and spaces

Vectors u, v are **orthogonal** iff `u·v = 0`. The **orthogonal complement** of a
subspace S is `S⊥ = {v : v·u = 0 for all u ∈ S}`.

- `(S⊥)⊥ = S` (for subspaces of ℝⁿ).
- **Fundamental theorem of linear algebra:** row space ⊥ null space, and
  column space ⊥ left null space, in ℝⁿ and ℝᵐ.

## Projections

The **orthogonal projection** of vector b onto a non-zero vector a is:

```text
proj_a(b) = ( (a·b) / (a·a) ) · a
```

Geometrically it's the "shadow" of b onto a. If you project onto a subspace
(spanned by an orthonormal basis), you sum the projections onto each basis
vector.

### Worked example

Project `b = (3, 1)` onto `a = (2, 2)`:

```text
a·b = 6+2 = 8;  a·a = 4+4 = 8
proj = (8/8)·(2,2) = (2,2)
```

So the foot of the perpendicular from (3,1) onto the line y = x is (2,2).

## Orthogonal bases

- An **orthogonal basis** has mutually perpendicular vectors.
- An **orthonormal basis** is orthogonal with each vector **unit length**.
- **Advantage:** coordinates are just dot products (no solving linear systems).
- **Gram-Schmidt** process converts any basis of a subspace into an orthogonal
  basis; normalise to get orthonormal.

## Common mistakes

- Thinking any set containing the zero vector is independent (it's dependent — 1·0 = 0).
- Believing a spanning set is always a basis (only if independent).
- Projecting onto a non-unit vector without the `a·a` divisor.
- Confusing kernel (domain → 0) with image (domain → codomain range).

## Memory rules

- Vector space: closed under + and scalar ×; check 0 + closure.
- Subspace: contains 0, closed under +, closed under scalar ×.
- Independent = only trivial combination gives 0; basis = independent + spanning.
- dim(ℝⁿ) = n; standard basis e_i.
- Linear T: T(u+v)=T(u)+T(v), T(cu)=cT(u); represented by a matrix.
- Orthogonal: u·v = 0; proj_a(b) = ((a·b)/(a·a))a.

## Mini Quiz

Attempt all questions before revealing the answers.

1. Is the union of two subspaces always a subspace? (yes/no)
2. What is the dimension of P₄ (polynomials of degree ≤ 4)?
3. Are (1,0,0), (0,1,0), (0,0,1) linearly independent?
4. If T is linear and T(u)=0, what is u called?
5. True or false: if u·v = 0 then u and v are orthogonal.

## Answers

<details>
<summary>Reveal answers</summary>


1. No (the union need not be closed under addition); the **sum** is a subspace.
2. 5 (basis {1, x, x², x³, x⁴}).
3. Yes.
4. u is in the kernel (null space) of T.
5. True (by definition of orthogonality).

</details>

## Quick revision box

- Vector space: closed under + and scalar ×; ℝⁿ, P_n, matrices are examples.
- Subspace: contains 0, closed under + and scalar ·.
- span(S)=all combos; independent = only 0 combo; basis = indep+spanning.
- dim(V)=#basis vectors; ℝⁿ has dim n; coordinates are unique per basis.
- Linear T: T(u+v)=T(u)+T(v), T(cu)=cT(u); kernel={v:T(v)=0}, image=range.
- Orthogonal u·v=0; orthogonal complement S⊥; projection proj_a(b)=((a·b)/(a·a))a.
- Orthogonal/orthonormal bases; Gram-Schmidt orthogonalises a basis.

## Exam guidance

Define the notation, state the rule or theorem, show every calculation, and verify or interpret the final result.

## Practice ladder

1. **Easy - Recall:** Define the module's central idea in one or two sentences.
2. **Easy - Recognize:** Identify the correct method for a small example and explain why it fits.
3. **Medium - Apply:** Work through one representative problem without copying the example.
4. **Medium - Compare:** Contrast two methods or concepts from the module.
5. **Hard - Integrate:** Solve a university-style scenario and justify every major step.

<details>
<summary>Reveal self-evaluation guide</summary>

A complete response uses correct terminology, shows intermediate steps, connects the result to the scenario, and states one assumption or limitation.

</details>

---

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [Next: Module 6 →](<Module-6.md>)
