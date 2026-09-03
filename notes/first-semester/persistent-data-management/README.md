# Persistent Data Management - Complete Study Notes

These exam-oriented notes cover the ten theory modules plus the practical-session material for Persistent Data Management (DBMS) for MCA Semester I. The folder is arranged like a learning dashboard: a main module index, deep-dive articles, and quick revision resources.

Each module follows three learning layers:

1. **Simple idea:** plain language and a familiar analogy.
2. **Worked example:** a small school-database problem solved step by step.
3. **Technical meaning:** correct definitions, notation, and exam points.

Finish the memory rules and self-check before reading the answers. The files in `Articles` remain advanced supplements.

## Module-wise study method

1. Review prerequisites and keep the common student database schema nearby.
2. Complete one 10-15-minute study block at a time.
3. Draw schemas and work through relational, SQL, index, or transaction steps on paper.
4. Attempt the mini quiz and practice ladder before revealing solutions.
5. Mark the module `Mastered` after solving a new database scenario without notes.

## Module Index

| Module | Topic | File |
|---|---|---|
| 1 | Introduction, data models, ER/EER modelling | [Module 1](Module-1.md) |
| 2 | Functional dependencies and normalization | [Module 2](Module-2.md) |
| 3 | Relational algebra | [Module 3](Module-3.md) |
| 4 | Tuple and domain relational calculus | [Module 4](Module-4.md) |
| 5 | SQL, views, procedures, triggers, cursors | [Module 5](Module-5.md) |
| 6 | Indexing, B+ trees, and hashing | [Module 6](Module-6.md) |
| 7 | Query processing and optimization | [Module 7](Module-7.md) |
| 8 | Transactions, serializability, recovery | [Module 8](Module-8.md) |
| 9 | Concurrency control | [Module 9](Module-9.md) |
| 10 | XML, distributed/parallel DBMS, big data | [Module 10](Module-10.md) |
| 11 | PostgreSQL and practical sessions | [Module 11 Practical Guide](Module-11-Practical-Guide.md) |

## Deep-Dive Articles

| Module | Article |
|---|---|
| 1 | [Module-1-Article](Articles/Module-1-Article.md) |
| 2 | [Module-2-Article](Articles/Module-2-Article.md) |
| 3 | [Module-3-Article](Articles/Module-3-Article.md) |
| 4 | [Module-4-Article](Articles/Module-4-Article.md) |
| 5 | [Module-5-Article](Articles/Module-5-Article.md) |
| 6 | [Module-6-Article](Articles/Module-6-Article.md) |
| 7 | [Module-7-Article](Articles/Module-7-Article.md) |
| 8 | [Module-8-Article](Articles/Module-8-Article.md) |
| 9 | [Module-9-Article](Articles/Module-9-Article.md) |
| 10 | [Module-10-Article](Articles/Module-10-Article.md) |

## Revision Tools

- [Quick Revision](Quick-Revision.md) - last-minute review of all modules.
- [One-Day Study Guide](One-Day-Study-Guide.md) - timetable, high-yield concepts, formulas, comparisons, practical patterns, and final self-test.
- [Cheat Sheet](Cheat-Sheet.md) - notation, rules, formulas, and SQL patterns.
- [Important Questions](Important-Questions.md) - exam questions with answer points.
- [MCQ](MCQ.md) - multiple-choice practice by module.
- [Glossary](Glossary.md) - important terms in alphabetical order.
- [Module 11 Practical Guide](Module-11-Practical-Guide.md) - PostgreSQL, transactions, triggers, procedures, cursors, HDFS, MapReduce, security, and query tuning.
- [Web Resources](Web-Resources.md) - official and high-quality external references.

## How to use this folder

1. Read the matching module note first.
2. Open the matching article for a deeper explanation and extra examples.
3. Use the cheat sheet for fast revision.
4. Practice the important questions without looking at the notes.
5. For the practical PDFs, use the [Module 11 Practical Guide](Module-11-Practical-Guide.md) and reproduce the SQL patterns in PostgreSQL.

## Common example schema

Most examples use:

```text
STUDENT(StudentID, Name, DepartmentID, Email)
DEPARTMENT(DepartmentID, DepartmentName)
COURSE(CourseID, Title, Credits)
ENROLLMENT(StudentID, CourseID, Semester, Marks)
```

Primary keys are StudentID, DepartmentID, CourseID, and the composite key (StudentID, CourseID, Semester) for ENROLLMENT.
