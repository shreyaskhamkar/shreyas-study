# Module 2 Article: Functional Dependencies and Normalization

## Why this module matters

Module 2 is the design quality module. It teaches how to remove redundancy, avoid anomalies, and make relations easier to maintain.

## Functional dependency

A functional dependency `X -> Y` means that if two rows agree on `X`, they must also agree on `Y`.

Example:

`StudentID -> Name, Email, DepartmentID`

This says one student ID determines the rest of the student details.

Functional dependencies help us discover whether a table mixes unrelated facts. They also tell us how to split a table into smaller tables without losing meaning.

## Anomalies

Poorly designed tables create three classic problems:

- Insertion anomaly: you cannot add one fact without another unrelated fact
- Update anomaly: the same fact must be changed in many places
- Deletion anomaly: deleting one row accidentally removes another fact

Normalization is the response to these problems.

## Normal forms

### 1NF

All attributes must be atomic. No repeating groups, arrays, or nested lists.

### 2NF

The table must be in 1NF and every non-key attribute must depend on the whole key, not just part of a composite key.

### 3NF

The table must be in 2NF and no non-key attribute should depend on another non-key attribute.

### BCNF

Every determinant must be a candidate key. BCNF is stricter than 3NF.

### 4NF

Used when multivalued dependencies exist. It removes independent multi-valued facts from the same relation.

## Small worked example

Suppose we have:

`Enrollment(StudentID, StudentName, CourseID, CourseName, Instructor)`

Problems:

- `StudentName` depends only on `StudentID`
- `CourseName` and `Instructor` depend on `CourseID`

This causes redundancy. A better decomposition is:

- `Student(StudentID, StudentName)`
- `Course(CourseID, CourseName, Instructor)`
- `Enrollment(StudentID, CourseID)`

## Normalization checklist

When solving a normalization question:

1. Write the functional dependencies
2. Find candidate keys
3. Check for partial dependencies
4. Check for transitive dependencies
5. Decompose step by step
6. Verify lossless join and dependency preservation where possible

## Exam points

Examiners often want the difference between 3NF and BCNF, or a decomposition from a given dependency set. The safest approach is to show:

- dependency list
- key calculation
- normal form violation
- final tables after decomposition
