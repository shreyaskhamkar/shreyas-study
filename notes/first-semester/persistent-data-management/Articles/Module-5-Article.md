# Module 5 Article: SQL as the Working Language of DBMS

## Why SQL matters

SQL is the language you use in real databases every day. It combines schema definition, data manipulation, querying, permissions, and transaction control.

## The major categories

| Category | Purpose | Examples |
|---|---|---|
| DDL | Define structure | `CREATE`, `ALTER`, `DROP` |
| DML | Change rows | `INSERT`, `UPDATE`, `DELETE` |
| DQL | Read rows | `SELECT` |
| DCL | Control access | `GRANT`, `REVOKE` |
| TCL | Control transactions | `COMMIT`, `ROLLBACK` |

## Joins and subqueries

Most SQL exam questions rely on joins. If data lives in two tables, join them using the shared key.

Subqueries help when one result becomes the input to another condition.

Example pattern:

```sql
SELECT Name
FROM Student
WHERE DepartmentID IN (
    SELECT DepartmentID
    FROM Department
    WHERE DepartmentName = 'Computer Science'
);
```

## Views

A view is a virtual table based on a query. It is useful for:

- simplifying complex queries
- hiding sensitive columns
- presenting different user-specific views

## Stored procedures and triggers

A stored procedure is a saved program inside the DBMS. It is useful for repeated business logic.

A trigger runs automatically in response to an event such as insert, update, or delete. Triggers are often used for auditing and enforcing business rules.

## Cursors

Cursors process query results row by row. They are less common than set-based SQL, but they appear in procedural database programming and exam questions.

## Best practice mindset

SQL should be:

- readable
- consistent
- constrained by keys and checks
- tested with small data before large changes

## Exam tip

When writing SQL in an exam, always show:

1. Table names
2. Join condition
3. Filter condition
4. Grouping condition if needed
5. Output columns

That makes your query easier to follow and reduces mistakes.
