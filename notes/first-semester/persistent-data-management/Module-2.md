# Module 2: Relational Database Design

[← Previous: Module 1](<Module-1.md>) · [Subject index](README.md) · [Next: Module 3 →](<Module-3.md>)

## Learning outcomes

After completing this module, you should be able to:

- explain the central ideas in **Module 2: Relational Database Design** using simple language;
- apply the main method or rules to a worked example;
- connect the topic to a practical computing scenario; and
- answer short and long university questions with clear steps.


## Prerequisites

Complete [Module 1](Module-1.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Why this matters in practice | 10-15 minutes |
| 3 | Important terms explained simply | 10-15 minutes |
| 4 | 1. Why good design matters | 10-15 minutes |
| 5 | 2. Functional dependencies | 10-15 minutes |
| 6 | 3. Decomposition quality | 10-15 minutes |
| 7 | 4. Normal forms | 10-15 minutes |
| 8 | 5. Normalization procedure | 10-15 minutes |
| 9 | Practice | 10-15 minutes |
| 10 | Answer | 10-15 minutes |


## Start here: the simple idea

Database design is like arranging school information into separate registers. If a student's row contains the student name, department name, department phone, course name, and teacher name, the same facts will be written many times. Repetition causes mistakes.

**Normalization** means splitting one badly arranged table into smaller connected tables so that each fact is stored in the proper place.

### The three common problems

- **Insert problem:** we cannot add a new department until at least one student joins it.
- **Update problem:** a department name appears in 100 rows, so it must be changed 100 times.
- **Delete problem:** deleting the last student accidentally deletes the only department information.

### Functional dependency, made easy

`StudentID -> StudentName` means: if we know the student ID, exactly one student name is decided. The left side is the **determinant**.

Normalization levels can be remembered like this:

1. **1NF:** one value in one cell. Do not put `9876, 8765` together as two phone numbers.
2. **2NF:** every non-key detail must depend on the **whole** composite key, not only one part.
3. **3NF:** a non-key detail must not depend on another non-key detail.
4. **BCNF:** anything that determines another value must be a candidate key.
5. **4NF:** do not mix two independent multi-value facts, such as hobbies and languages, in one table.

The goal is not to create the largest number of tables. The goal is to avoid repeated facts while still being able to join the tables correctly.

## Why this matters in practice

- In textbooks, normalization is the main tool for removing redundancy and anomalies.
- In industry, it helps keep billing, student, order, and inventory systems consistent and easier to maintain.
- The beginner-friendly rule is simple: store each fact once, in the table where it belongs.

## Important terms explained simply

### Composite key

A **composite key** is a key made from two or more columns together.

```text
ENROLLMENT(StudentID, CourseID, Marks)
Key = (StudentID, CourseID)
```

`StudentID` alone repeats because one student studies many courses. `CourseID` alone repeats because one course has many students. Together they identify one enrolment.

### Partial dependency and 2NF

Consider:

```text
ENROLLMENT(StudentID, CourseID, StudentName, CourseName, Marks)
Key = (StudentID, CourseID)
```

- `StudentName` depends only on `StudentID`.
- `CourseName` depends only on `CourseID`.
- `Marks` depends on both `StudentID` and `CourseID`.

The first two are **partial dependencies**, so the table is not in 2NF. Split it into `STUDENT`, `COURSE`, and `ENROLLMENT`.

**Remember:** 2NF means “depend on the whole key, not half of the key.”

### Transitive dependency and 3NF

```text
StudentID -> DepartmentID
DepartmentID -> DepartmentName
```

`DepartmentName` is reached indirectly through `DepartmentID`. This is a **transitive dependency**. Move department details into a `DEPARTMENT` table.

**Remember:** 3NF means “non-key details should not depend on other non-key details.”

### Lossless join

After splitting a table, a **lossless join** means joining the smaller tables recreates the correct original information without inventing or losing rows.

## 1. Why good design matters

A poor relation repeats facts and creates:

- **Insertion anomaly:** a department cannot be stored until a student exists.
- **Update anomaly:** changing a department name requires many updates.
- **Deletion anomaly:** deleting the last student accidentally removes department facts.

Design guidelines are to give every relation a clear meaning, minimize redundancy and nulls, prevent spurious tuples, and preserve important dependencies.

## 2. Functional dependencies

For relation `R`, the functional dependency **X → Y** holds when any two legal tuples equal on attribute set X must also equal on Y. X is the determinant.

Example: in `STUDENT(StudentID, Name, Email, DepartmentID)`,

```text
StudentID → Name, Email, DepartmentID
Email → StudentID
```

Types:

- **Trivial:** `Y ⊆ X`, e.g. `{A,B} → A`
- **Non-trivial:** `Y` is not a subset of `X`
- **Full dependency:** Y depends on all of a composite determinant
- **Partial dependency:** Y depends on only part of a candidate key
- **Transitive dependency:** X → Y and Y → Z imply X → Z, where Y is not a key

### Armstrong's axioms

These sound and complete inference rules derive all implied FDs:

1. Reflexivity: if `Y ⊆ X`, then `X → Y`.
2. Augmentation: if `X → Y`, then `XZ → YZ`.
3. Transitivity: if `X → Y` and `Y → Z`, then `X → Z`.

Derived rules include union, decomposition, and pseudotransitivity.

### Attribute closure

`X+` is the set of attributes functionally determined by X.

Algorithm:

1. Set `X+ = X`.
2. For each FD `Y → Z`, if `Y ⊆ X+`, add Z to `X+`.
3. Repeat until no attribute is added.

X is a super key if `X+` contains every attribute of R. It is a candidate key if no proper subset is a super key.

Example: `R(A,B,C,D)` with `A→B`, `B→C`, `AC→D`. Start `A+={A}`, add B, then C, then D because AC is now present. Thus A is a candidate key.

## 3. Decomposition quality

A decomposition should have:

- **Lossless join:** joining the decomposed relations always reconstructs exactly the original relation.
- **Dependency preservation:** all original constraints can be checked without joining relations.

For binary decomposition of R into R1 and R2, it is lossless with respect to F if `(R1 ∩ R2) → R1` or `(R1 ∩ R2) → R2` follows from F.

A **spurious tuple** is an incorrect tuple produced when a lossy decomposition is joined.

## 4. Normal forms

### First Normal Form (1NF)

Every cell contains one atomic value; there are no repeating groups. Move multiple phone numbers to `STUDENT_PHONE(StudentID, Phone)`.

### Second Normal Form (2NF)

R is in 2NF when it is in 1NF and every non-prime attribute is fully dependent on every candidate key. It matters when a key is composite.

Example:

```text
ENROLLMENT(StudentID, CourseID, StudentName, CourseTitle, Grade)
key = (StudentID, CourseID)
StudentID → StudentName
CourseID → CourseTitle
```

Decompose into `STUDENT`, `COURSE`, and `ENROLLMENT(StudentID, CourseID, Grade)`.

### Third Normal Form (3NF)

#### Simple meaning

In 3NF, every non-key attribute must depend **directly on a candidate key**. It should not depend on the key indirectly through another non-key attribute.

In simple words:

> A non-key column must not determine another non-key column.

#### Technical definition

A relation `R` is in **Third Normal Form (3NF)** if, for every non-trivial functional dependency:

```text
X → A
```

at least one of the following conditions is true:

1. `X` is a **super key**, or
2. `A` is a **prime attribute**, meaning it belongs to at least one candidate key.

A functional dependency is **non-trivial** when `A` is not already a part of `X`.

#### Example

Consider:

```text
STUDENT
StudentID | StudentName | DepartmentID | DepartmentName
101       | Asha        | D1           | Computer Science
102       | Ravi        | D2           | Commerce
103       | Neha        | D1           | Computer Science
```

Assume `StudentID` is the primary key. The functional dependencies are:

```text
StudentID    → StudentName
StudentID    → DepartmentID
DepartmentID → DepartmentName
```

Therefore:

```text
StudentID → DepartmentID → DepartmentName
```

`DepartmentName` depends on `StudentID` indirectly through `DepartmentID`. This is called a **transitive dependency**.

The dependency:

```text
DepartmentID → DepartmentName
```

violates 3NF because:

- `DepartmentID` is not a super key of the `STUDENT` table.
- `DepartmentName` is not a prime attribute.

#### Convert the table to 3NF

Split it into two relations:

```text
STUDENT(StudentID, StudentName, DepartmentID)
Primary key: StudentID
Foreign key: DepartmentID
```

```text
DEPARTMENT(DepartmentID, DepartmentName)
Primary key: DepartmentID
```

Now:

- `StudentName` and `DepartmentID` depend directly on `StudentID`.
- `DepartmentName` depends directly on `DepartmentID`.
- The transitive dependency has been removed.

#### Why is 3NF useful?

Suppose the department name changes from `Computer Science` to `Computer Applications`.

In the original table, it may appear in hundreds of student rows and must be updated many times. After normalization, it is stored once in `DEPARTMENT`, so only one row needs to be updated.

This prevents:

- Repeated department information
- Inconsistent department names
- Update anomalies
- Accidental loss of department information

#### Memory rule

> Every non-key attribute must depend on the key, the whole key, and nothing but the key.

- **The key:** the table must have a proper identifier.
- **The whole key:** no partial dependency; this is mainly the 2NF requirement.
- **Nothing but the key:** no transitive dependency; this is the 3NF requirement.

### Boyce-Codd Normal Form (BCNF)

For every non-trivial FD `X → Y`, X must be a super key. BCNF is stricter than 3NF. A 3NF relation can violate BCNF when a determinant is not a super key but the dependent attribute is prime.

Example: `TEACH(Student, Subject, Teacher)` with `(Student, Subject)→Teacher` and `Teacher→Subject`. Candidate keys are `(Student,Subject)` and `(Student,Teacher)`. It satisfies 3NF, but `Teacher→Subject` violates BCNF.

BCNF decomposition is lossless but may not preserve all dependencies.

### Fourth Normal Form (4NF)

A multivalued dependency `X ↠ Y` means that for a fixed X, Y values vary independently of the remaining attributes. R is in 4NF if, for every non-trivial MVD `X ↠ Y`, X is a super key.

Example: if a student independently has several hobbies and languages:

```text
STUDENT_INFO(Student, Hobby, Language)
```

decompose into `STUDENT_HOBBY(Student,Hobby)` and `STUDENT_LANGUAGE(Student,Language)`.

## 5. Normalization procedure

1. List attributes, candidate keys, and valid FDs.
2. Convert repeating groups to 1NF.
3. Remove partial dependencies for 2NF.
4. Remove transitive dependencies for 3NF.
5. Check every determinant for BCNF.
6. Identify independent multivalued facts for 4NF.
7. Verify lossless join and dependency preservation.

Normalization improves consistency but can increase joins. **Denormalization** deliberately introduces controlled redundancy for proven performance needs; it requires a strategy to preserve consistency.

## Exam focus

- Normalization is based on business-rule dependencies, not sample data alone.
- 2NF concerns partial dependency on a composite candidate key.
- 3NF permits `X→A` when A is prime; BCNF does not.
- Show every decomposition and identify its primary/foreign keys.

## Common mistakes

- Normalizing from a few sample rows instead of business rules
- Checking 2NF when the key has only one attribute
- Confusing partial dependency with transitive dependency
- Splitting tables without checking whether the join is lossless

## Memory rules

- 2NF: depend on the whole composite key.
- 3NF: non-key details depend on no other non-key detail.
- BCNF: every determinant is a super key.
- Lossless means the correct original rows can be rebuilt.

## Practice

Given `ORDER(OrderNo, OrderDate, CustomerID, CustomerName, ProductID, ProductName, Qty)` and key `(OrderNo, ProductID)`, normalize it to 3NF and state the FDs used.

## Answer

Use these dependencies:

```text
OrderNo → OrderDate, CustomerID
CustomerID → CustomerName
ProductID → ProductName
(OrderNo, ProductID) → Qty
```

The 3NF relations are:

```text
CUSTOMER(CustomerID, CustomerName)
PRODUCT(ProductID, ProductName)
ORDER_HEADER(OrderNo, OrderDate, CustomerID)
ORDER_ITEM(OrderNo, ProductID, Qty)
```

## Quick revision box

- 1NF: one value per cell.
- 2NF: no dependency on only part of a composite key.
- 3NF: no non-key attribute depends on another non-key attribute.
- BCNF: every determinant must be a super key.
- 4NF: separate independent multivalued facts.
- A good decomposition should be lossless and preferably dependency-preserving.

## Mini Quiz

1. Explain the module's main idea in your own words.
2. Apply one method from this module to a small example.
3. Identify one common mistake and explain how to avoid it.

<details>
<summary>Reveal evaluation guide</summary>

A strong response uses the correct terms, shows the method in steps, and checks or justifies the result.

</details>

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

[← Previous: Module 1](<Module-1.md>) · [Subject index](README.md) · [Next: Module 3 →](<Module-3.md>)
