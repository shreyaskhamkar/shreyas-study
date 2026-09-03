# Module 6: Eigenvalues and Eigenvectors

[← Previous: Module 5](<Module-5.md>) · [Subject index](README.md) · [MCQ practice →](MCQ.md)

## Learning outcomes

After this module, you should be able to:

- define eigenvalues and eigenvectors and compute them;
- write and solve the characteristic equation;
- interpret eigenvalues/eigenvectors geometrically;
- explain the significance of eigenvalues in applications;
- relate similarity transformations to eigenvalues.


## Prerequisites

Complete [Module 5](Module-5.md) first. Review its quick-revision section if any term below feels unfamiliar.


## Short study blocks

Study one row at a time. Do not start diagonalisation until eigenvalues and
eigenvectors can be calculated confidently.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Eigenvalue and eigenvector intuition | 10-15 minutes |
| 2 | Characteristic equation and calculation | 10-15 minutes |
| 3 | Diagonalisation and geometric interpretation | 10-15 minutes |
| 4 | Stability, PCA, PageRank, and similarity | 10-15 minutes |

## Start here: the simple idea

An **eigenvector** of a matrix A is a direction that A **only stretches** (it is
not rotated). The amount of stretch is the **eigenvalue**. Eigenvalues tell you
how a system behaves over time and whether it is stable.

### Everyday analogy

Stretch a rubber sheet with a grid drawn on it. Most grid lines bend and rotate,
but two special directions only get **lengthened** (or shrunk) — those are the
eigenvectors, and the stretch factors are the eigenvalues.

## Eigenvalues and eigenvectors

For an n×n matrix A, a non-zero vector **v** is an **eigenvector** of A with
eigenvalue **λ** if

```text
A v = λ v
```

- v must be **non-zero** (by definition; λ = 0 with a zero v is trivial).
- λ can be any scalar (including 0 or negative).

## The characteristic equation

Rearrange `Av = λv` ⇒ `(A − λI)v = 0`. For a **non-trivial** solution v ≠ 0, the
matrix `(A − λI)` must be **singular** (non-invertible), i.e.,

```text
det(A − λI) = 0
```

This is the **characteristic equation** (a polynomial in λ of degree n). Its
roots are the **eigenvalues**. For each λ, solve `(A − λI)v = 0` for v.

## Worked example: M = [[2, 1], [1, 2]]

### Find eigenvalues

```text
A − λI = [[2−λ, 1    ],
          [1,     2−λ]]

det(A − λI) = (2−λ)² − 1 = λ² − 4λ + 3 = (λ − 3)(λ − 1)
```

Eigenvalues: **λ₁ = 3**, **λ₂ = 1**.

### Find eigenvectors

For **λ₁ = 3**: solve `(A − 3I)v = 0` ⇒ `[[-1, 1],[1, -1]] [x,y]ᵀ = 0`.
`−x + y = 0` ⇒ `y = x`. Eigenvector v₁ = (1, 1) (any non-zero multiple works).

For **λ₂ = 1**: solve `(A − I)v = 0` ⇒ `[[1, 1],[1, 1]] [x,y]ᵀ = 0`.
`x + y = 0` ⇒ `y = −x`. Eigenvector v₂ = (1, −1).

Check: `A·(1,1) = (3,3) = 3·(1,1)` ✔ ; `A·(1,−1) = (1,−1) = 1·(1,−1)` ✔.

## Diagonalisation (significance of eigenvalues)

If A has n linearly independent eigenvectors, form **P** = [v₁ v₂ … vₙ] and
**D** = diag(λ₁,…,λₙ). Then:

```text
A = P D P⁻¹         (diagonalisation)
```

**Worked example (continued):**

```text
P = [[1, 1 ],    D = [[3,0],[0,1]],   P⁻¹ = (1/2)·[[1,1],[1,-1]]
     [1, -1]]
```

Check: `P D P⁻¹ = [[1,1],[1,-1]]·[[3,0],[0,1]]·(1/2)[[1,1],[1,-1]] = [[2,1],[1,2]] = A` ✔

When A is diagonalisable, powers are easy: `Aᵏ = P Dᵏ P⁻¹`.

## Geometric interpretation

- Eigenvectors give the **principal directions** of the transformation.
- Eigenvalues give the **scale factors** along those directions.
- det(A) = product of eigenvalues = overall area/volume scale.
- det(A − λI) = 0 means those directions are exactly the ones where A acts like
  scaling (no rotation).

For M = [[2,1],[1,2]]: the transformation stretches the (1,1) direction by 3×
and the (1,−1) direction by 1× (unchanged). The "skew square" becomes a
rectangle stretched 3× along the main diagonal.

## Significance of eigenvalues and eigenvectors

- **Discrete-time linear systems:** for `x_(k+1) = Ax_k`, the system decays to
  zero when every eigenvalue satisfies `|λ| < 1`; an eigenvalue with `|λ| > 1`
  produces growth in its eigendirection. Continuous-time systems use a different
  test: the real parts of all eigenvalues must be negative for asymptotic stability.
- **PCA (Principal Component Analysis):** the axes of greatest data variance are
  the eigenvectors of the covariance matrix; eigenvalues rank importance.
- **Google PageRank:** the dominant eigenvector of the link matrix ranks pages.
- **Vibration/modes:** eigenvectors of a stiffness matrix are the natural
  vibration modes; eigenvalues are their frequencies².
- **PageRank / Markov chains:** the steady state is the eigenvector for λ = 1.

## Similarity transformation and eigenvalues

Matrices A and B are **similar** if `B = P⁻¹AP` for some invertible P.
Similar matrices represent the **same linear map** in different bases.

**Key facts:**

- Similar matrices have the **same eigenvalues** (and same det, trace, rank).
- `trace(A) = Σ λᵢ`, `det(A) = Π λᵢ`.
- Diagonalisation is exactly the statement that A is similar to a diagonal D.

## Common mistakes

- Forgetting that eigenvectors must be **non-zero**.
- Thinking eigenvalues must be positive (negative and zero are allowed).
- Computing `P D P⁻¹` with the wrong order (it's P D P⁻¹, not P⁻¹ D P for the A=PDP⁻¹ form).
- Assuming every matrix is diagonalisable (only if it has n independent eigenvectors).

## Memory rules

- Av = λv; solve det(A−λI) = 0 for λ, then (A−λI)v = 0 for v.
- det(A) = product of eigenvalues; trace(A) = sum of eigenvalues.
- Diagonalisation: A = P D P⁻¹; Aᵏ = P Dᵏ P⁻¹.
- Eigenvectors = directions stretched; eigenvalues = stretch factors.
- Similar matrices share eigenvalues and trace/det.

## Mini Quiz

Attempt all questions before revealing the answers.

1. How many complex eigenvalues does a 3×3 real matrix have when algebraic multiplicity is counted?
2. If λ is an eigenvalue of A, is λ also an eigenvalue of Aᵀ?
3. True or false: every matrix is diagonalisable.
4. If det(A) = 0, what eigenvalue must A have?
5. What do the eigenvectors of a covariance matrix represent (in PCA)?

## Answers

<details>
<summary>Reveal answers</summary>


1. Three over the complex numbers, counting algebraic multiplicity. Not all three must be real.
2. Yes — det(A−λI) = det((A−λI)ᵀ) = det(Aᵀ−λI), so A and Aᵀ share eigenvalues.
3. False (only if A has n linearly independent eigenvectors).
4. λ = 0 (since det(A) = product of eigenvalues).
5. The principal components / axes of greatest data variance.

</details>

## Quick revision box

- Eigenvalue/eigenvector: Av = λv; solve det(A−λI)=0 for λ, then (A−λI)v=0.
- Characteristic polynomial is degree n ⇒ n eigenvalues (with multiplicity).
- det = product of λ; trace = sum of λ.
- Diagonalisation A = P D P⁻¹; powers Aᵏ = P Dᵏ P⁻¹ (if diagonalisable).
- Geometric: eigenvectors = pure-stretc. directions; eigenvalues = stretch factors.
- Applications: stability, PCA (eigenvectors of covariance), PageRank (λ=1), vibrations.
- Similarity B=P⁻¹AP ⇒ same eigenvalues; diagonalisation is similarity to a diagonal matrix.

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

[← Previous: Module 5](<Module-5.md>) · [Subject index](README.md) · [MCQ practice →](MCQ.md)
