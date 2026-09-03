# Persistent Data Management — Cheat Sheet

## Keys and dependencies

```text
Super key      = unique attribute set
Candidate key  = minimal super key
Primary key    = selected candidate key
Foreign key    = references a candidate/primary key
X → Y          = X functionally determines Y
X ↠ Y          = Y varies independently for a fixed X
X+             = closure of X under a set of FDs
```

## Normal forms

| NF | One-line test |
|---|---|
| 1NF | Atomic cells; no repeating groups |
| 2NF | 1NF + no partial dependency of non-prime attribute |
| 3NF | `X→A`: X super key or A prime |
| BCNF | `X→Y`: X must be a super key |
| 4NF | `X↠Y`: X must be a super key |

```text
BCNF ⇒ 3NF ⇒ 2NF ⇒ 1NF
4NF additionally handles independent multivalued facts.
```

## ER mapping

| ER construct | Relational mapping |
|---|---|
| Entity | Table |
| Simple attribute | Column |
| Composite attribute | Component columns |
| Multivalued attribute | New table with owner key |
| Weak entity | Table with owner key + partial key |
| 1:1 | FK on total-participation side + UNIQUE |
| 1:M | FK on M-side |
| M:N | Junction table |

## Relational algebra

```text
σpredicate(R)         selection: rows
πattributes(R)        projection: columns
R ⋈condition S        join
R × S                 Cartesian product
R ∪ S                 union
R − S                 difference
R ∩ S                 intersection
R ÷ S                 division: “for all”
ρNewName(R)           rename
```

## Calculus

```text
TRC: { t | P(t) }
DRC: { <x1,...,xn> | P(x1,...,xn) }
∀x(P→Q) ≡ ¬∃x(P∧¬Q)
```

Result/free variables must be range-restricted for safety.

## SQL patterns

```sql
-- Group filter
SELECT DepartmentID, COUNT(*) AS n
FROM Student
WHERE AdmissionDate >= DATE '2026-01-01'
GROUP BY DepartmentID
HAVING COUNT(*) >= 5;

-- Not exists
SELECT s.StudentID, s.Name
FROM Student s
WHERE NOT EXISTS (
  SELECT 1 FROM Enrollment e
  WHERE e.StudentID = s.StudentID
);

-- Relational division pattern: students taking every course
SELECT s.StudentID, s.Name
FROM Student s
WHERE NOT EXISTS (
  SELECT 1 FROM Course c
  WHERE NOT EXISTS (
    SELECT 1 FROM Enrollment e
    WHERE e.StudentID=s.StudentID AND e.CourseID=c.CourseID
  )
);

-- Conditional aggregation
SELECT CourseID,
       COUNT(*) AS total,
       SUM(CASE WHEN Marks >= 40 THEN 1 ELSE 0 END) AS passed
FROM Enrollment
GROUP BY CourseID;
```

```text
SQL logical order:
FROM/JOIN → WHERE → GROUP BY → HAVING
→ SELECT → DISTINCT → ORDER BY → LIMIT
```

## Index choice

| Query | Likely choice |
|---|---|
| `key = value` | Hash or B+ tree |
| `key BETWEEN a AND b` | B+ tree |
| Ordered output | B+ tree |
| Frequent low-selectivity filter | Scan may win |
| `(A=?, B range)` | Composite B+ tree `(A,B)` |

## Join algorithms

| Join | Memory hook |
|---|---|
| Indexed nested loop | Small outer, indexed inner |
| Hash join | Equality, large unsorted inputs |
| Sort-merge | Sorted inputs or reusable order |

## Transactions and schedules

```text
ACID = Atomicity, Consistency, Isolation, Durability
Conflict = different T, same item, at least one write
Precedence graph: cycle → not conflict-serializable
Strict ⇒ Cascadeless ⇒ Recoverable
```

| Operation pair | Conflict? |
|---|---:|
| R–R | No |
| R–W | Yes |
| W–R | Yes |
| W–W | Yes |

## Lock compatibility

| Requested / held | S | X |
|---|---:|---:|
| S | Yes | No |
| X | No | No |

```text
2PL: acquire phase → release phase
Strict 2PL: X locks held to commit/abort
Rigorous 2PL: S and X locks held to commit/abort
Wait-for graph cycle = deadlock
```

## Recovery

```text
WAL rule 1: log change before data page
WAL rule 2: commit log durable before success
UNDO uncommitted effects; REDO committed effects when necessary
Checkpoint reduces recovery scanning
```

## Distributed and big data

```text
2PC: PREPARE/VOTE → DECIDE/COMMIT-ABORT
CAP tradeoff: consistency vs availability during partition
5Vs: Volume, Velocity, Variety, Veracity, Value
HDFS: NameNode metadata + DataNode blocks
MapReduce: Map → Shuffle/Sort → Reduce
```

