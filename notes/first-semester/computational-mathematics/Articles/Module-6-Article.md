# Module 6 Article: Eigenvalues, Stability, and Diagonalisation

## The big idea

An **eigenvector** of a matrix is a direction that the matrix does not rotate. It only stretches or shrinks that direction. The stretch factor is the **eigenvalue**.

This matters because eigenvalues tell us how a system behaves:

- whether repeated application of a transformation grows or dies out;
- whether a system is stable;
- how data can be simplified using principal directions;
- how ranking methods such as PageRank work.

## Eigenvalues and eigenvectors

For an `n x n` matrix `A`, a non-zero vector `v` is an eigenvector if

```text
Av = lambda v
```

Here `lambda` is the eigenvalue.

Rearranging gives

```text
(A - lambda I)v = 0
```

For a non-trivial solution `v != 0`, the matrix `A - lambda I` must be singular. So we solve

```text
det(A - lambda I) = 0
```

This is the **characteristic equation**. Its roots are the eigenvalues.

## Worked example

Let

```text
A = [[2, 1],
     [1, 2]]
```

### Step 1: Find the eigenvalues

```text
det(A - lambda I) = det([[2-lambda, 1],
                         [1, 2-lambda]])
                  = (2-lambda)^2 - 1
                  = lambda^2 - 4lambda + 3
                  = (lambda - 3)(lambda - 1)
```

So the eigenvalues are:

- `lambda = 3`
- `lambda = 1`

### Step 2: Find the eigenvectors

For `lambda = 3`:

```text
(A - 3I)v = 0
[[ -1, 1],
 [  1,-1]] [x, y]^T = 0
```

This gives `y = x`, so one eigenvector is

```text
v1 = [1, 1]^T
```

For `lambda = 1`:

```text
(A - I)v = 0
[[1, 1],
 [1, 1]] [x, y]^T = 0
```

This gives `y = -x`, so one eigenvector is

```text
v2 = [1, -1]^T
```

## Geometric interpretation

Eigenvectors are the **special directions** of a transformation.

For the matrix above:

- the direction `[1, 1]` is stretched by a factor of `3`;
- the direction `[1, -1]` is unchanged because its eigenvalue is `1`.

So the matrix acts like a transformation that is simple along those two axes, even if it looks complicated in the standard coordinate system.

## Diagonalisation

If a matrix has enough independent eigenvectors, it can be written as

```text
A = P D P^-1
```

where:

- `P` contains the eigenvectors as columns;
- `D` is a diagonal matrix of eigenvalues.

This is useful because powers become easy:

```text
A^k = P D^k P^-1
```

That is why eigenvalues are important in repeated processes and dynamical systems.

## Why eigenvalues matter

- **Stability:** if the magnitude of an eigenvalue is small, repeated application may shrink toward zero; if it is large, the system may grow.
- **PCA:** the principal directions of a data set come from the eigenvectors of its covariance matrix.
- **PageRank:** the steady-state ranking is based on an eigenvector with eigenvalue `1`.
- **Vibrations:** natural vibration modes are eigenvectors of the system matrix.

## Similarity transformations

Two matrices are similar if

```text
B = P^-1 A P
```

Similar matrices represent the same linear transformation in different bases. They have the same eigenvalues.

Key facts:

- Similar matrices share eigenvalues.
- `trace(A)` equals the sum of eigenvalues.
- `det(A)` equals the product of eigenvalues.

## Common mistakes

- forgetting that an eigenvector must be non-zero;
- assuming all eigenvalues are positive;
- mixing up `PDP^-1` and `P^-1DP`;
- assuming every matrix is diagonalizable.

## Quick revision

- Solve `Av = lambda v`.
- Rearrange to `(A - lambda I)v = 0`.
- Find eigenvalues from `det(A - lambda I) = 0`.
- Then find eigenvectors from the null space of `A - lambda I`.
- Diagonalisation helps compute powers and understand stability.

## Exam angle

If asked about eigenvalues and eigenvectors:

1. Define them using `Av = lambda v`.
2. Show the characteristic equation.
3. Solve one simple example.
4. Mention one application such as PCA or PageRank.
