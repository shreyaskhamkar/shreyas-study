# Module 1 Article: Why Data Models Matter

## The big idea

Module 1 is about how a database starts with a real-world problem and ends as tables in a DBMS. The main skill is learning to move from business language to a clean data model.

## Database and DBMS

A database stores related facts in an organized way. A DBMS adds the rules, tools, and services needed to manage those facts safely. In practice, a DBMS is useful because it reduces duplication, supports many users at once, enforces constraints, and helps with backup and recovery.

The difference from a file system is important. A file system can store data, but it does not naturally handle relationships, query language support, concurrency, or recovery in a structured way.

## Three levels of design

| Level | Question answered | Example |
|---|---|---|
| Conceptual | What does the business need? | Student, course, enrollment |
| Logical | How do we represent it in relations? | Tables, keys, foreign keys |
| Physical | How is it stored efficiently? | Indexes, pages, files |

This separation gives data independence. If the storage structure changes, the logical design can remain stable. That is why the same database can later get indexes or partitions without rewriting every application.

## ER modelling in practice

The ER model is the first real design step. Entities become the main nouns in the problem statement. Attributes describe them. Relationships connect them.

Example:

- Student enrolls in Course
- Department offers Course
- Employee works for Department

Cardinality tells us how many instances can be connected. Participation tells us whether the relationship is mandatory or optional.

## Keys and why they matter

Keys are the backbone of relational design.

- Super key: any attribute set that uniquely identifies a row
- Candidate key: minimal super key
- Primary key: the chosen candidate key
- Foreign key: references another table
- Composite key: a key made of multiple columns

A common mistake is to use a non-minimal attribute set as a candidate key. Another mistake is to treat any unique column as a primary key without checking whether it is stable and meaningful.

## Mapping ER to relations

Typical rules:

- Entity becomes a table
- Attribute becomes a column
- 1:M relationship is handled by a foreign key on the many side
- M:N relationship becomes a separate junction table

For example, Student and Course usually need an Enrollment table because one student can take many courses and one course can have many students.

## Exam angle

If you get a long answer question, write in this order:

1. Define DBMS
2. Explain three-schema architecture
3. Describe ER model
4. Explain keys
5. Show mapping from ER to relational model

That sequence gives a complete, marks-friendly answer.
