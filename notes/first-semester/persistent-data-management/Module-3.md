# Module 3: Relational Algebra

[← Previous: Module 2](<Module-2.md>) · [Subject index](README.md) · [Next: Module 4 →](<Module-4.md>)

## Learning outcomes

After completing this module, you should be able to:

- explain the central ideas in **Module 3: Relational Algebra** using simple language;
- apply the main method or rules to a worked example;
- connect the topic to a practical computing scenario; and
- answer short and long university questions with clear steps.


## Prerequisites

Complete [Module 2](Module-2.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Why this matters in practice | 10-15 minutes |
| 3 | Important operations explained with examples | 10-15 minutes |
| 4 | 1. Introduction | 10-15 minutes |
| 5 | 2. Fundamental operations | 10-15 minutes |
| 6 | 3. Derived operations | 10-15 minutes |
| 7 | 4. Worked queries | 10-15 minutes |
| 8 | 5. Algebraic equivalences | 10-15 minutes |
| 9 | Comparison of operations | 10-15 minutes |
| 10 | Practice | 10-15 minutes |


## Start here: the simple idea

Relational algebra is a set of step-by-step instructions for getting an answer from tables. Think of it as giving directions to the database.

Use this tiny memory trick:

| Operation | Simple meaning | Similar SQL |
|---|---|---|
| Selection | Keep chosen **rows** | `WHERE` |
| Projection | Keep chosen **columns** | `SELECT` |
| Join | Connect related tables | `JOIN` |
| Union | Put compatible results together | `UNION` |
| Difference | Keep rows in the first result but not the second | `EXCEPT` |
| Product | Pair every row with every other row | `CROSS JOIN` |
| Division | Find items related to **all** required items | “for every” query |

Example: first select CS students, then project only their names. In symbols this is written as:

```text
project Name (select Dept='CS' (STUDENT))
```

The symbols used later are simply short mathematical names for these actions. Always read an expression from the innermost brackets outward.

## Why this matters in practice

- In textbooks, relational algebra is the step-by-step language used to describe database operations.
- In industry, SQL engines use the same logic when they break a query into smaller operations.
- If you can read the operators as actions, SQL becomes much easier to understand.

## Important operations explained with examples

Assume:

```text
STUDENT(SID, Name, Dept)
1, Asha, CS
2, Ravi, Commerce
3, Neha, CS
```

### Selection and projection

**Selection** keeps rows:

```text
select students where Dept = 'CS'
Result: Asha and Neha
```

**Projection** keeps columns:

```text
project only Name
Result: Asha, Ravi, Neha
```

**Remember:** selection is horizontal because it chooses rows; projection is vertical because it chooses columns.

### Join

A join connects related rows. `STUDENT` and `ENROLLMENT` can be joined where their `SID` values match. This allows us to show a student's name beside their marks.

### Cartesian product

If table A has 3 rows and table B has 4 rows, their Cartesian product has `3 x 4 = 12` row combinations. Most real queries add a condition to turn this large product into a useful join.

### Division

Division answers an **all** question: “Which students completed every compulsory course?” Use division only when words such as “all” or “every” appear.

## 1. Introduction

Relational algebra is a **procedural** formal query language: an expression specifies both the required result and a sequence of operations. Every operation takes relation(s) and returns a relation, so operations can be composed. Classical algebra uses set semantics, although SQL commonly uses bag semantics unless `DISTINCT` is requested.

Assume:

```text
STUDENT(SID, Name, Dept)
COURSE(CID, Title, Dept)
ENROLL(SID, CID, Grade)
```

## 2. Fundamental operations

### Selection: σ

Chooses rows satisfying a predicate; the degree stays the same.

```text
σ Dept='CS' (STUDENT)
σ Grade='A' ∧ CID='DB101' (ENROLL)
```

SQL equivalent: `WHERE`.

### Projection: π

Chooses columns and removes duplicate tuples under set semantics.

```text
π Name, Dept (STUDENT)
```

SQL equivalent: `SELECT DISTINCT Name, Dept`.

### Rename: ρ

Renames a relation or attributes and is essential for self-joins.

```text
ρ S1(SID, StudentName, Department) (STUDENT)
```

### Union: ∪

Returns tuples appearing in either relation. Operands must be **union-compatible**: same degree and corresponding domains.

### Set difference: −

Returns tuples in the first relation but not the second; also requires union compatibility.

### Cartesian product: ×

Pairs every tuple of R with every tuple of S. If `|R|=m` and `|S|=n`, the result has `m×n` tuples before duplicate-name handling.

## 3. Derived operations

### Intersection: ∩

`R ∩ S = R − (R − S)`. It returns tuples common to union-compatible relations.

### Join: ⋈

A theta join combines product and selection:

```text
R ⋈condition S = σcondition(R × S)
```

- **Equijoin:** condition contains equality.
- **Natural join:** automatically joins equally named attributes and retains one copy.
- **Outer join:** keeps unmatched tuples, padding missing values with nulls; left, right, or full.
- **Self-join:** joins a renamed relation with itself.

Examples:

```text
STUDENT ⋈ STUDENT.SID=ENROLL.SID ENROLL
STUDENT ⋈ ENROLL
```

Natural join is concise but risky if unrelated columns share a name.

### Division: ÷

Division answers “for all” queries. If `TAKES(SID,CID)` and `REQUIRED(CID)`, then:

```text
TAKES ÷ REQUIRED
```

returns students who take **every** required course.

Equivalent construction:

```text
π SID(TAKES) − π SID((π SID(TAKES) × REQUIRED) − TAKES)
```

Read it as: all candidate students minus students missing at least one required course.

### Assignment and aggregation

Assignment stores an intermediate result: `T ← expression`. Extended algebra uses grouping/aggregation, often written `γ`:

```text
Dept γ COUNT(SID)→StudentCount (STUDENT)
```

## 4. Worked queries

### Names of students enrolled in DBMS

```text
π Name (
  STUDENT ⋈
  (ENROLL ⋈ (σ Title='DBMS'(COURSE)))
)
```

### Students not enrolled in any course

```text
π SID(STUDENT) − π SID(ENROLL)
```

To obtain names, join that result back with STUDENT.

### Course pairs from the same department

```text
π C1.Title, C2.Title (
  σ C1.Dept=C2.Dept ∧ C1.CID<C2.CID
  (ρ C1(COURSE) × ρ C2(COURSE))
)
```

## 5. Algebraic equivalences

Equivalences allow an optimizer to transform expressions:

- Cascaded selections: `σp∧q(R) = σp(σq(R))`
- Selection commutativity: `σp(σq(R)) = σq(σp(R))`
- Push selection through a join when its attributes belong to one input.
- Cascaded projection can discard unneeded intermediate columns.
- Join is commutative and associative for inner joins under suitable conditions.

Applying selective operations early reduces intermediate results.

## Comparison of operations

| Operation | Acts mainly on | Changes rows | Changes columns |
|---|---|---:|---:|
| Selection | One relation | Yes | No |
| Projection | One relation | Possibly (duplicate removal) | Yes |
| Join | Two relations | Yes | Yes |
| Union | Two compatible relations | Yes | No |
| Difference | Two compatible relations | Yes | No |
| Division | Two related relations | Yes | Yes |

## Common mistakes

- Using union on incompatible schemas
- Confusing selection (rows) with projection (columns)
- Forgetting to rename attributes in a self-join
- Treating natural join as a Cartesian product
- Using division for “any” instead of “all”

## Practice

Write algebra for: (a) CS students with grade A, (b) courses with no enrolment, and (c) students who completed every CS course.

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

```text
(a) π Name(σ Dept='CS' AND Grade='A'(STUDENT ⋈ ENROLL))

(b) π CID(COURSE) − π CID(ENROLL)

(c) π SID,CID(ENROLL) ÷ π CID(σ Dept='CS'(COURSE))
```

For part (c), join the resulting student IDs with `STUDENT` if names are required.

</details>

## Memory rules

- Selection chooses rows; projection chooses columns.
- Join means “connect matching rows.”
- Product means “make every possible pair.”
- Division answers “all” or “every” questions.

## Quick revision box

Read relational-algebra expressions from the innermost brackets outward. Apply selective operations early to reduce intermediate rows.

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

[← Previous: Module 2](<Module-2.md>) · [Subject index](README.md) · [Next: Module 4 →](<Module-4.md>)
