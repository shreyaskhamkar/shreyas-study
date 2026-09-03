# Module 4 Article: Turning Geometry into Arithmetic

## The big idea

A matrix is both a **grid of numbers** and a **geometric transformation**. The
magic of linear algebra is that these two views are the same thing: solving a
system of linear equations (arithmetic) is the same as finding the intersection
of lines/planes (geometry). This duality is why matrices are everywhere in
graphics, statistics, and machine learning.

## Matrix operations: the arithmetic view

- **Addition:** entry-wise, needs same shape.
- **Scalar multiplication:** multiply every entry.
- **Multiplication:** `c_ij = Σ_k a_ik·b_kj` (row of A · column of B).
  - Shape: m×n times n×p = m×p.
  - **Not commutative** (AB ≠ BA in general).

### Worked arithmetic

```text
[[2,1],[1,2]] · [[1],[-1]] = [[2·1+1·(-1)],[1·1+2·(-1)]] = [[1],[-1]]
```

So M maps the vector (1,−1) to itself — an early sign that (1,−1) is an
eigenvector with eigenvalue 1 (Module 6).

## The geometric view: matrices as transforms

The columns of a matrix A are the **images of the basis vectors**:

```text
A = [[2,1],[1,2]]  means  e1=(1,0) → (2,1),   e2=(0,1) → (1,2)
```

So A skews the unit square into a parallelogram. The **area** of the image of
the unit square is `|det(A)|`:

```text
det([[2,1],[1,2]]) = 2·2 − 1·1 = 3
```

The unit square (area 1) becomes a parallelogram of area 3.

## Solving linear systems: three faces of one idea

`solve Ax = b` is equivalent to:
- **Algebraically:** Gaussian elimination (row reduction).
- **Geometrically:** find the intersection of hyperplanes.
- **Matrix-wise:** `x = A⁻¹b` (if A is invertible).

### Worked example: intersect two lines

```text
2x + y = 5      (line 1)
x + 2y = 4      (line 2)
A = [[2,1],[1,2]], b = [5;4]
det(A) = 3 ≠ 0, so A⁻¹ exists.
A⁻¹ = (1/3)·[[2,−1],[−1,2]]
x = A⁻¹ b = (1/3)·[[2,−1],[−1,2]]·[5;4] = (1/3)·[10−4; −5+8] = (1/3)·[6;3] = [2;1]
⇒ x = 2, y = 1.
```

Check in line 1: 2·2+1 = 5 ✓; line 2: 2 + 2·1 = 4 ✓. The intersection point (2,1)
is where the two lines meet.

## Determinants: signed volume

`det(A)` is the **signed** area/volume scale factor:

- `det(AB) = det(A)·det(B)` (scaling multiplies).
- `det(Aᵀ) = det(A)` (volume unchanged by transpose).
- `A` invertible ⟺ `det(A) ≠ 0` (non-zero area ⇒ not squashed flat).
- A negative determinant means the transform **flips orientation** (a mirror image).

## Row operations and the rank

Three elementary row operations (swap, scale, add-multiple) do not change the
**solution set** of a linear system, and they reveal the **rank** (number of
independent rows = number of independent columns). Rank also tells us existence
and uniqueness:

| System | Meaning |
|---|---|
| rank(A) = rank(A|b) = n | unique solution |
| rank(A) = rank(A|b) < n | infinitely many solutions |
| rank(A) ≠ rank(A|b) | no solution (inconsistent) |

## Common mistakes

- Assuming `(A+B)² = A² + 2AB + B²` (fails because AB ≠ BA in general).
- Writing `(AB)ᵀ = AᵀBᵀ` — the order reverses to `BᵀAᵀ`.
- Thinking `det(A+B) = det(A)+det(B)` — determinant is not additive.
- Forgetting that `A⁻¹` only exists for square, non-singular matrices.

## Exam angle

For "solve Ax = b and interpret geometrically":

1. Row-reduce `[A | b]` to row-echelon form.
2. Back-substitute for the solution.
3. State the geometric interpretation: number of independent equations = rank;
   solution = intersection point/line/plane; no solution = parallel planes.

> Tip: for a 2×2 inverse, memorize `[[a,b],[c,d]]⁻¹ = 1/(ad−bc)·[[d,−b],[−c,a]]`,
> and always check with `A·A⁻¹ = I`.

## See also

- Module 5: linear transformations as matrices; kernel = null space.
- Module 6: eigenvalues measure how much the transform stretches along eigenvectors.
