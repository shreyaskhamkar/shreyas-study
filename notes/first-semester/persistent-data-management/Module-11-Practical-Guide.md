# Module 11: Practical Sessions and PostgreSQL Guide

[← Previous: Module 10](<Module-10.md>) · [Subject index](README.md) · [MCQ practice →](MCQ.md)

This guide consolidates the practical PDFs in `PdfMaterial/Persistent Data Management/Module11`. The sessions repeatedly practice one complete workflow: inspect data, clean it, transform it, query it, validate the result, and report it clearly.

## Practical workflow

```text
Define objective
  -> inspect tables/files and data types
  -> clean nulls, duplicates, spaces and invalid values
  -> transform columns and formats
  -> filter, join, group, aggregate and sort
  -> validate row counts and sample results
  -> save intermediate outputs
  -> prepare final report and explain the result
```

Always record:

- input row count and output row count;
- number of null, duplicate and unmatched rows;
- join match rate;
- data types before and after transformation;
- one or two sample rows checked manually.

## PostgreSQL essentials

### Create, insert and query

```sql
CREATE TABLE department (
    department_id integer PRIMARY KEY,
    department_name varchar(80) NOT NULL UNIQUE
);

INSERT INTO department(department_id, department_name)
VALUES (10, 'Computer Science');

SELECT department_name
FROM department
WHERE department_id = 10;
```

### Safe modification

```sql
BEGIN;

UPDATE student
SET email = lower(trim(email))
WHERE student_id = 101;

-- Check the result before committing.
SELECT * FROM student WHERE student_id = 101;
COMMIT;
-- Use ROLLBACK instead of COMMIT when the result is wrong.
```

Use `IS NULL`, not `= NULL`. Use `COALESCE(value, replacement)` to replace null values in output. Use `trim`, `lower`, casts such as `value::integer`, and `CASE` for common cleaning and transformation tasks.

### Joins and aggregation

```sql
SELECT d.department_name, count(s.student_id) AS student_count
FROM department d
LEFT JOIN student s ON s.department_id = d.department_id
GROUP BY d.department_id, d.department_name
HAVING count(s.student_id) > 0
ORDER BY student_count DESC;
```

Remember:

- `WHERE` filters rows before grouping.
- `HAVING` filters groups after aggregation.
- A `LEFT JOIN` keeps unmatched rows from the left table.
- Check join keys for duplicates before trusting totals.

## Views

```sql
CREATE OR REPLACE VIEW student_result AS
SELECT s.student_id, s.name, e.course_id, e.marks
FROM student s
JOIN enrollment e ON e.student_id = s.student_id;
```

A simple single-table view may be updatable. Views using grouping, aggregates, `DISTINCT`, or complex joins are generally not directly updatable. PostgreSQL can make complex views writable using an `INSTEAD OF` trigger.

```sql
CREATE OR REPLACE VIEW active_student AS
SELECT student_id, name, email
FROM student
WHERE active = true;
```

`CREATE OR REPLACE VIEW` changes the definition while preserving the view object. A materialized view stores the result physically and must be refreshed:

```sql
CREATE MATERIALIZED VIEW department_totals AS
SELECT department_id, count(*) AS total
FROM student
GROUP BY department_id;

REFRESH MATERIALIZED VIEW department_totals;
```

## Functions, procedures and triggers

### PostgreSQL procedure

```sql
CREATE OR REPLACE PROCEDURE update_email(
    p_faculty_id integer,
    p_email text
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE faculty
    SET email = lower(trim(p_email))
    WHERE faculty_id = p_faculty_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Faculty not found: %', p_faculty_id;
    END IF;
END;
$$;

CALL update_email(7, 'person@example.com');
```

Use procedures for reusable server-side operations such as insert, update, delete, validation and controlled business rules. `RAISE NOTICE` reports information; `RAISE EXCEPTION` stops the operation.

### Trigger function and trigger

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

CREATE TRIGGER validate_marks
BEFORE INSERT OR UPDATE ON enrollment
FOR EACH ROW
EXECUTE FUNCTION check_marks();
```

`NEW` contains the new row and `OLD` contains the previous row. A `BEFORE` trigger can validate or change data. An `AFTER` trigger is useful for audit logging. Avoid recursive triggers and hidden side effects.

### Cursor pattern

```sql
DO $$
DECLARE
    r record;
    c CURSOR FOR SELECT student_id, name FROM student;
BEGIN
    OPEN c;
    LOOP
        FETCH c INTO r;
        EXIT WHEN NOT FOUND;
        RAISE NOTICE '%: %', r.student_id, r.name;
    END LOOP;
    CLOSE c;
END;
$$;
```

Cursors process rows one at a time. Prefer a normal set-based SQL query when possible because cursors are usually slower and more procedural.

## Transactions and concurrent practical testing

```text
BEGIN -> read/change data -> COMMIT
                         \-> ROLLBACK
```

- Turn off auto-commit when testing transaction behavior.
- Use two query windows to simulate concurrent transactions.
- ACID: Atomicity, Consistency, Isolation, Durability.
- `SAVEPOINT name` creates a partial rollback point; `ROLLBACK TO name` returns to it.
- Test dirty reads, lost updates, blocking and rollback only on test data.

## Hadoop, HDFS and MapReduce practical concepts

Some Module 11 PDFs cover Big Data practical work in addition to PostgreSQL.

```text
Input in HDFS
  -> Mapper creates intermediate key-value pairs
  -> Combiner may perform local aggregation
  -> Partitioner sends keys to reducers
  -> Shuffle and sort groups equal keys
  -> Reducer creates final output
```

- HDFS stores large files as replicated blocks across DataNodes.
- NameNode maintains filesystem metadata; DataNodes store blocks.
- MapReduce provides parallel batch processing.
- A combiner reduces data sent over the network but is optional.
- Fault tolerance comes from block replication and task re-execution.
- Spark is a distributed processing engine with DAG execution and optional caching; it is not the same as HDFS.

## Security and performance practicals

- Use roles and privileges to control who may connect, read, insert, update, delete or change schema objects.
- Follow least privilege: grant only the permissions required.
- Query tuning workflow: inspect the query -> run `EXPLAIN`/`EXPLAIN ANALYZE` -> find scans, joins or sorts doing excessive work -> add or adjust indexes -> rerun and compare.
- Index columns used in selective filters and joins, but remember that indexes add storage and write overhead.
- Validate that an optimization preserves the result, not only the execution time.

## Capstone and viva checklist

Be prepared to explain:

1. What was the input and what question did the workflow answer?
2. What cleaning rules were applied and why?
3. Which keys were used for joins?
4. How were nulls, duplicates and unmatched rows handled?
5. Why was a view, procedure, trigger, cursor, index or transaction chosen?
6. How was the output validated?
7. What would happen if one step failed?

## Practical exam commands to remember

```sql
CREATE TABLE ...;
INSERT INTO ...;
SELECT ... FROM ... WHERE ...;
UPDATE ... SET ... WHERE ...;
DELETE FROM ... WHERE ...;
CREATE VIEW ... AS SELECT ...;
CREATE OR REPLACE PROCEDURE ... LANGUAGE plpgsql ...;
CREATE OR REPLACE FUNCTION ... RETURNS trigger ...;
CREATE TRIGGER ... EXECUTE FUNCTION ...;
BEGIN; COMMIT; ROLLBACK; SAVEPOINT ...;
EXPLAIN ANALYZE SELECT ...;
```

The practical PDFs contain many repeated end-to-end exercises. Learn the workflow and the patterns above instead of memorizing every dataset or example name.

---

[← Previous: Module 10](<Module-10.md>) · [Subject index](README.md) · [MCQ practice →](MCQ.md)
