# Module 3 Article: Relational Algebra as the Language of Operations

## Core idea

Relational algebra is the procedural foundation of querying. It tells the DBMS how to get data using a sequence of operations on relations.

## Main operators

- Selection `sigma` filters rows
- Projection `pi` selects columns
- Union combines compatible relations
- Difference finds rows in one relation but not another
- Cartesian product combines every row with every row
- Join combines related rows
- Division finds rows related to all values in another relation

## Why it feels procedural

In relational algebra, the order of operations matters. You do not just ask for the final result. You describe the steps needed to get there.

For example:

`pi Name (sigma DepartmentID=10 (Student))`

This means: first filter students from department 10, then keep only the Name column.

## Join intuition

Joins are the most important practical operation because they connect information spread across tables.

Example:

- Student joined with Enrollment gives student-course combinations.
- Enrollment joined with Course adds course titles.

That is how one query can reconstruct meaningful information from normalized tables.

## Division intuition

Division is the operator students often find hardest. It answers questions like:

"Which students have taken all required courses?"

If `A` is student-course enrollment and `B` is the set of required courses, then division returns students linked to every course in `B`.

## Good exam strategy

When translating English into algebra:

1. Identify the base relations
2. Find the needed rows first
3. Decide whether you need columns only, rows only, or both
4. Add joins if the information lives in more than one table

## Common mistakes

- Using projection too early and removing columns needed for joins
- Confusing selection with projection
- Forgetting that union and difference require union-compatible relations

## Why this still matters

Even though SQL is used in real systems, relational algebra explains what query optimizers are trying to do. It is the theory behind efficient query execution.
