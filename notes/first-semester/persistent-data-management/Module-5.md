# Module 5: SQL

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [Next: Module 6 →](<Module-6.md>)

## Learning outcomes

After completing this module, you should be able to:

- explain the central ideas in **Module 5: SQL** using simple language;
- apply the main method or rules to a worked example;
- connect the topic to a practical computing scenario; and
- answer short and long university questions with clear steps.


## Prerequisites

Complete [Module 4](Module-4.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Why this matters in practice | 10-15 minutes |
| 3 | Important SQL ideas explained simply | 10-15 minutes |
| 4 | 1. SQL categories | 10-15 minutes |
| 5 | 2. Defining tables and constraints | 10-15 minutes |
| 6 | 3. Data modification | 10-15 minutes |
| 7 | 4. Querying | 10-15 minutes |
| 8 | 5. Joins | 10-15 minutes |
| 9 | 6. Subqueries and set operations | 10-15 minutes |
| 10 | 7. Views | 10-15 minutes |
| 11 | 8. Stored procedures | 10-15 minutes |
| 12 | 9. Triggers | 10-15 minutes |


## Start here: the simple idea

SQL is the language used to talk to a relational database. Most commands answer one of five questions:

- **DDL:** What tables and rules should exist?
- **DML:** What data should be added, changed, or removed?
- **DQL:** What data should be shown?
- **DCL:** Who is allowed to use the data?
- **TCL:** Should a group of changes be saved or cancelled?

### Read a query like a sentence

```sql
SELECT Name
FROM Student
WHERE DepartmentID = 10;
```

This means: “From the `Student` table, show the `Name` of students whose department ID is 10.”

Important beginner rules:

1. `WHERE` filters individual rows; `HAVING` filters groups made by `GROUP BY`.
2. A `JOIN` connects related rows from two tables.
3. `NULL` means missing, unknown, or not applicable. Test it with `IS NULL`, never `= NULL`.
4. `COMMIT` saves a transaction; `ROLLBACK` cancels it.
5. Before running a large `UPDATE` or `DELETE`, use the same `WHERE` in a `SELECT` to check the affected rows.

SQL differs slightly between MySQL, PostgreSQL, Oracle, and SQL Server, but the main ideas remain the same.

## Why this matters in practice

- In textbooks, SQL is the standard language for working with relational databases.
- In industry, SQL powers reports, application features, admin tools, migrations, and data cleanup.
- For beginners, read each SQL statement as plain English before focusing on the exact syntax.

## Important SQL ideas explained simply

### Constraint

A **constraint** is a rule enforced by the database:

- `PRIMARY KEY`: no duplicate identity.
- `NOT NULL`: a value is required.
- `UNIQUE`: duplicate values are forbidden.
- `CHECK`: a condition such as `Marks BETWEEN 0 AND 100`.
- `FOREIGN KEY`: the referenced row must exist.

### INNER JOIN and LEFT JOIN

An `INNER JOIN` keeps only matching rows. A `LEFT JOIN` keeps every row from the left table and shows `NULL` when no right-side match exists.

Use a left join to answer: “Show every student, including students without a department.”

### GROUP BY and HAVING

`GROUP BY DepartmentID` puts students into department groups. `COUNT(*)` counts each group. `HAVING COUNT(*) >= 5` keeps only departments containing at least five students.

### View and materialized view

A **view** stores a query definition, like a saved window into current data. A **materialized view** stores the query result itself, so reading is faster but its data may need refreshing.

### Procedure, trigger, and cursor

- **Procedure:** runs when a program or user calls it.
- **Trigger:** runs automatically after or before a data event.
- **Cursor:** handles results one row at a time; use it only when a set-based query cannot solve the task cleanly.

## 1. SQL categories

| Category | Purpose | Commands |
|---|---|---|
| DDL | Define schema | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` |
| DML | Change data | `INSERT`, `UPDATE`, `DELETE`, `MERGE` |
| DQL | Query data | `SELECT` |
| DCL | Control privileges | `GRANT`, `REVOKE` |
| TCL | Manage transactions | `COMMIT`, `ROLLBACK`, `SAVEPOINT` |

## 2. Defining tables and constraints

```sql
CREATE TABLE Department (
    DepartmentID   INT PRIMARY KEY,
    DepartmentName VARCHAR(80) NOT NULL UNIQUE
);

CREATE TABLE Student (
    StudentID   INT PRIMARY KEY,
    Name        VARCHAR(100) NOT NULL,
    Email       VARCHAR(150) UNIQUE,
    DepartmentID INT,
    AdmissionDate DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (DepartmentID)
        REFERENCES Department(DepartmentID)
        ON DELETE SET NULL
);

ALTER TABLE Student
ADD CONSTRAINT chk_email CHECK (Email IS NULL OR Email LIKE '%@%');
```

Constraints include `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`, `CHECK`, and `DEFAULT`. `DROP` removes the object and definition; `TRUNCATE` quickly removes all rows; `DELETE` can remove selected rows and is a DML operation.

## 3. Data modification

```sql
INSERT INTO Department (DepartmentID, DepartmentName)
VALUES (10, 'Computer Science');

UPDATE Student
SET DepartmentID = 10
WHERE StudentID = 101;

DELETE FROM Enrollment
WHERE StudentID = 101 AND CourseID = 20;
```

Always test the `WHERE` condition with a `SELECT` before a large update or delete.

## 4. Querying

Logical processing order is approximately:

```text
FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT
```

```sql
SELECT DepartmentID, COUNT(*) AS StudentCount
FROM Student
WHERE AdmissionDate >= DATE '2026-01-01'
GROUP BY DepartmentID
HAVING COUNT(*) >= 5
ORDER BY StudentCount DESC;
```

`WHERE` filters rows before grouping; `HAVING` filters groups after aggregation.

Aggregate functions are `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`. Except for `COUNT(*)`, they generally ignore nulls.

## 5. Joins

```sql
-- Inner join: only matching rows
SELECT s.Name, d.DepartmentName
FROM Student s
JOIN Department d ON d.DepartmentID = s.DepartmentID;

-- Left join: every student, matched department if present
SELECT s.Name, d.DepartmentName
FROM Student s
LEFT JOIN Department d ON d.DepartmentID = s.DepartmentID;

-- Students without a department
SELECT s.Name
FROM Student s
LEFT JOIN Department d ON d.DepartmentID = s.DepartmentID
WHERE d.DepartmentID IS NULL;
```

Other types are right outer join, full outer join, cross join, and self-join. Put a right-side filter in the `ON` clause when it should not remove unmatched left rows.

## 6. Subqueries and set operations

```sql
SELECT Name
FROM Student
WHERE StudentID IN (
    SELECT StudentID FROM Enrollment WHERE Marks >= 75
);

SELECT s.Name
FROM Student s
WHERE EXISTS (
    SELECT 1 FROM Enrollment e
    WHERE e.StudentID = s.StudentID
);
```

A **correlated subquery** refers to the outer row and is conceptually evaluated for it. `EXISTS` tests whether at least one matching row exists.

`UNION` removes duplicates; `UNION ALL` retains them. `INTERSECT` returns common rows and `EXCEPT`/`MINUS` returns difference, depending on DBMS.

### NULL

Null means missing, unknown, or not applicable. Comparisons with null produce `UNKNOWN`, so use `IS NULL`, not `= NULL`. SQL uses three-valued logic: true, false, unknown.

## 7. Views

A view is a stored query that behaves like a virtual table:

```sql
CREATE VIEW StudentResult AS
SELECT s.StudentID, s.Name, e.CourseID, e.Marks
FROM Student s JOIN Enrollment e ON e.StudentID = s.StudentID;
```

Views simplify queries, restrict access, and provide logical independence. Simple single-table views are often updatable; views with grouping, aggregates, `DISTINCT`, or complex joins generally are not.

A **materialized view** stores the result physically and must be refreshed. It speeds repeated expensive queries at the cost of storage and possible staleness.

## 8. Stored procedures

A stored procedure is a named server-side program containing SQL and procedural logic. Syntax varies:

PostgreSQL uses `plpgsql` for procedural logic. A practical pattern is:

```sql
CREATE OR REPLACE PROCEDURE add_bonus(
    p_dept integer,
    p_marks numeric(5,2)
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE enrollment
    SET marks = LEAST(marks + p_marks, 100)
    WHERE student_id IN (
        SELECT student_id FROM student WHERE department_id = p_dept
    );
END;
$$;

CALL add_bonus(10, 5.00);
```

Benefits include reuse, centralized rules, fewer network calls, controlled permissions, and transaction handling. Risks include vendor lock-in, difficult testing, and hidden application logic.

## 9. Triggers

A trigger runs automatically for an `INSERT`, `UPDATE`, or `DELETE`, either before/after the statement or per row depending on DBMS.

In PostgreSQL, a trigger calls a separate trigger function:

```sql
CREATE OR REPLACE FUNCTION check_marks()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
    IF NEW.marks < 0 OR NEW.marks > 100 THEN
        RAISE EXCEPTION 'Marks must be between 0 and 100';
    END IF;
    RETURN NEW;
END;
$$;

CREATE TRIGGER check_marks_before_write
BEFORE INSERT OR UPDATE ON enrollment
FOR EACH ROW
EXECUTE FUNCTION check_marks();
```

Use constraints before triggers for simple validation. Triggers suit auditing and complex cross-table rules but can cause recursion, surprising side effects, and performance issues.

## 10. Cursors

A cursor processes a query result one row at a time:

```text
DECLARE cursor → OPEN → FETCH repeatedly → CLOSE
```

Use cursors only when logic truly depends on sequential row processing. Set-based SQL is usually simpler and faster.

## 11. Transactions and access control

```sql
START TRANSACTION;
UPDATE Account SET Balance = Balance - 500 WHERE AccountID = 1;
UPDATE Account SET Balance = Balance + 500 WHERE AccountID = 2;
COMMIT; -- use ROLLBACK on failure

GRANT SELECT ON Student TO faculty_user;
REVOKE SELECT ON Student FROM faculty_user;
```

## Exam focus

- Explain SQL examples as well as writing syntax.
- State that procedural SQL differs among PostgreSQL, MySQL, Oracle, and SQL Server.
- Distinguish `WHERE` from `HAVING`, view from materialized view, and procedure from trigger.
- Prefer joins/set operations to unnecessary cursors.

## Common mistakes

- Using `= NULL` instead of `IS NULL`
- Forgetting `WHERE` in an `UPDATE` or `DELETE`
- Using `WHERE` to filter aggregate groups instead of `HAVING`
- Turning a `LEFT JOIN` into an inner join with an incorrect right-side filter
- Assuming procedure and trigger syntax is identical in every DBMS

## Memory rules

- `WHERE` filters rows; `HAVING` filters groups.
- `JOIN` connects; `UNION` stacks compatible results.
- A procedure is called; a trigger fires automatically.
- A view stores a query; a materialized view stores its result.

## Check your understanding

1. Which constraint connects a child table to a parent table?
2. How do you find rows whose email is missing?
3. What is the difference between `COMMIT` and `ROLLBACK`?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. A foreign-key constraint.
2. Use `WHERE Email IS NULL`.
3. `COMMIT` makes transaction changes permanent. `ROLLBACK` cancels uncommitted changes.

</details>

## Quick revision box

SQL defines structures, changes data, reads data, controls permissions, and manages transactions. Test destructive conditions with `SELECT` first.

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
