# Module 4: Matrices

[← Previous: Module 3](<Module-3.md>) · [Subject index](README.md) · [Next: Module 5 →](<Module-5.md>)

## Learning outcomes

After this module, you should be able to:

- write and identify matrices and their types;
- perform matrix operations and state their algebraic laws;
- compute the transpose, determinant, and inverse of a matrix;
- interpret matrices geometrically as linear / affine transforms.


## Prerequisites

Complete [Module 3](Module-3.md) first. Review its quick-revision section if any term below feels unfamiliar.


## Short study blocks

Treat each row as a separate lesson. Calculate the examples on paper rather than
only reading them.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Matrix notation, dimensions, and types | 10-15 minutes |
| 2 | Addition, multiplication, and transpose | 10-15 minutes |
| 3 | Determinants and inverses | 10-15 minutes |
| 4 | Geometric transformations | 10-15 minutes |
| 5 | Row operations and linear systems | 10-15 minutes |

## Start here: the simple idea

A matrix is a **rectangular array of numbers** that we treat as a single object.
We can add them, multiply them, and apply them to vectors to transform space —
which is why matrices are the workhorse of computer graphics, ML, and solvers.

### Everyday analogy

- A matrix is like a **spreadsheet block**: rows × columns of numbers.
- Matrix multiplication is like a **recipe**: each output cell is a dot product
  of one input row and one input column.
- A matrix applied to a vector is a **linear transformation**: stretch, rotate,
  or skew an image.

## Matrix notation and types

An **m×n matrix** A has m rows and n columns; entry `a_ij` is row i, column j.

```text
A = [a_ij]_{m×n}
1 2 3       ← row
4 0 5
^  ^
cols
```

Types:

| Type | Meaning |
|---|---|
| Square | m = n |
| Diagonal | a_ij = 0 for i ≠ j |
| Identity I_n | diagonal = 1, rest 0 |
| Zero O | all entries 0 |
| Symmetric | A = Aᵀ |
| Upper/lower triangular | zeros below/above diagonal |
| Row vector | 1 × n; Column vector | m × 1 |

**Running example:**
```text
M = [[2, 1],
     [1, 2]]   (2×2, symmetric)
A = [[1, 2, 3],
     [0, 1, 4],
     [5, 6, 0]]  (3×3)
```

## Matrix operations

### Addition and scalar multiplication

- `A + B`: entry-wise (same size only).
- `(kA)_ij = k·a_ij`.

### Matrix multiplication

`C = AB`, where `c_ij = Σ_k a_ik · b_kj` (row i of A · column j of B).
Requires: columns(A) = rows(B). Result size: rows(A) × columns(B).

**Worked example:** `M · [[1],[0]]`:

```text
[[2,1],[1,2]] · [1;0] = [2·1+1·0; 1·1+2·0] = [2;1]
```

### Transpose

`(Aᵀ)_ij = a_ji`; `(Aᵀ)ᵀ = A`; `(AB)ᵀ = BᵀAᵀ`; `(A+B)ᵀ = Aᵀ+Bᵀ`.

## Matrix algebra (laws)

| Law | Holds? |
|---|---|
| Commutative addition: A+B = B+A | ✔ |
| Associativity: (AB)C = A(BC) | ✔ |
| Distributivity: A(B+C) = AB+AC | ✔ |
| Commutative multiplication: AB = BA | ✘ (in general) |
| Zero product: AB = 0 ⇔ A = 0 or B = 0 | ✘ (can have AB = 0 both nonzero) |
| Cancellation: AB = AC ⇒ B = C | ✘ (without A invertible) |

## Determinant

For 2×2: `|[[a,b],[c,d]]| = ad − bc`. For 3×3: cofactor expansion along a row/column.

```text
|a b c|           a(ei−fh) − b(di−fg) + c(dh−eg)
|d e f|,   det =
|g h i|
```

**Key facts:** det(AB) = det(A)det(B); det(Aᵀ) = det(A); A invertible ⇔ det(A) ≠ 0.

## Inverse of a matrix

`A⁻¹` satisfies `AA⁻¹ = A⁻¹A = I`. Exists iff A is square and det(A) ≠ 0.

### 2×2 formula

```text
[[a,b],[c,d]]⁻¹ = 1/(ad−bc) · [[d,−b],[−c,a]]
```

**Worked example:** M = [[2,1],[1,2]], det = 4−1 = 3.
```text
M⁻¹ = (1/3)·[[2,−1],[−1,2]]
Check: M·M⁻¹ = (1/3)·[[2·2+1·(−1), 2·(−1)+1·2],[1·2+2·(−1), 1·(−1)+2·2]]
            = (1/3)·[[3,0],[0,3]] = I  ✔
```

### 3×3 (adjoint / cofactor method)

`A⁻¹ = (1/det(A)) · adj(A)`, where `adj(A) = (cofactor matrix of A)ᵀ`.
On exams, **Gauss-Jordan** (`[A | I] → [I | A⁻¹]`) is usually faster.

## Transpose (properties)

Already listed; note `(AB)ᵀ = BᵀAᵀ` (order reverses).

## Geometric significance

A matrix represents a **linear transformation**. Interpreting `M = [[2,1],[1,2]]`:

- Its columns are the **images of the basis vectors**:
  `e₁ → (2,1)`, `e₂ → (1,2)`.
- The **determinant** = area scale factor. det(M) = 3, so unit area triples.
- **Eigendirections** (Module 6): directions that are only stretched, not rotated.
- An **affine** transform = `x ↦ Mx + b` (matrix + translation); translation is
  added to turn the origin, so affine needs homogeneous coordinates (3×3 for 2D).

### Common 2D transforms (3×3 homogeneous form)

```text
Rotation by θ:   [[cosθ, -sinθ, 0],[sinθ, cosθ, 0],[0,0,1]]
Scaling by s,t:   [[s,0,0],[0,t,0],[0,0,1]]
Translation (tx,ty): [[1,0,tx],[0,1,ty],[0,0,1]]
```

## Elementary row operations and solving systems

To solve `Ax = b`, augment `[A | b]` and reduce to row echelon form (Gaussian
elimination). The three elementary row operations: swap rows, scale a row, add a
multiple of one row to another. These correspond to left-multiplication by
elementary matrices, and `A⁻¹` can be found via `[A | I] → [I | A⁻¹]`.

## Common mistakes

- Assuming `AB = BA` (matrix multiplication is not commutative).
- Writing `(AB)ᵀ = AᵀBᵀ` (wrong order — it is `BᵀAᵀ`).
- Thinking `det(A+B) = det(A)+det(B)` (determinant is not additive).
- Inverting a matrix with det = 0 (it is singular; no inverse).

## Memory rules

- Entry a_ij = row i, column j; multiplication requires inner dimensions match.
- Transpose flips rows/cols: (AB)ᵀ = BᵀAᵀ (order flips).
- det(AB) = det(A)det(B); A invertible ⇔ det(A) ≠ 0.
- 2×2 inverse = 1/det · swap diagonal, negate off-diagonal.
- Matrix = linear transform; det = scale factor.

## Mini Quiz

Attempt all questions before revealing the answers.

1. For which sizes is A + B defined? When is AB defined?
2. Compute `[[1,2],[3,4]] · [[0,1],[−1,0]]`.
3. What is the transpose of `[[1,2,3],[4,5,6]]`?
4. When does a square matrix have no inverse?
5. What does |det(A)| = 2 mean geometrically for a 2×2 A?

## Answers

<details>
<summary>Reveal answers</summary>


1. A+B: same dimensions. AB: columns of A = rows of B.
2. `[[1·0+2·(−1), 1·1+2·0],[3·0+4·(−1), 3·1+4·0]] = [[−2,1],[−4,3]]`.
3. `[[1,4],[2,5],[3,6]]` (3×2).
4. When det(A) = 0 (singular).
5. Areas are scaled by a factor of 2.

</details>

## Quick revision box

- Matrix = m×n array; entry a_ij (row i, col j).
- Operations: +, scalar·, multiply (row·col), transpose ((AB)ᵀ=BᵀAᵀ).
- Laws: + and × associative/distribute; × not commutative.
- det(AB)=detA·detB; A⁻¹ exists iff detA≠0; 2×2 inverse = 1/det·swap diag, flip off-diag.
- Matrix = linear transform; det = area/volume scale factor; columns = images of basis vectors.
- Gauss-Jordan: [A|I]→[I|A⁻¹].

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

[← Previous: Module 3](<Module-3.md>) · [Subject index](README.md) · [Next: Module 5 →](<Module-5.md>)
