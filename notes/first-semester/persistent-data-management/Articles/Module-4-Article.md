# Module 4 Article: Relational Calculus and Declarative Thinking

## The big difference from algebra

Relational calculus describes what result you want, not how to get it. That is why it is called non-procedural.

## Tuple relational calculus

TRC works with whole tuples.

General form:

`{ t | P(t) }`

Meaning: the set of tuples `t` such that predicate `P(t)` is true.

Example:

`{ t.Name | Student(t) AND t.DepartmentID = 10 }`

This means: give me the names of students from department 10.

## Domain relational calculus

DRC works with individual attribute values.

General form:

`{ <x, y> | P(x, y) }`

Example:

`{ <n, d> | Student(id, n, d, e) AND d = 10 }`

## Safety matters

Not every logical expression is safe. A safe expression produces a finite, relevant result from the database. Without safety rules, a query could describe an infinite set or unrelated values.

That is why safe expressions are a serious concept in relational calculus questions.

## Relation to SQL

SQL is closer to relational calculus than to relational algebra because you specify the result you want and the DBMS decides how to compute it.

Still, SQL is practical and calculus is theoretical. Together they show the difference between query intent and query execution.

## Exam comparison

| Feature | Relational Algebra | Relational Calculus |
|---|---|---|
| Style | Procedural | Non-procedural |
| Focus | How to retrieve | What to retrieve |
| Basis | Operators | Predicate logic |
| Typical use | Query plans, theory | Query specification, logic |

## How to answer problems

1. Identify the target attributes
2. Identify the condition
3. Write the tuple or domain variables
4. Add predicates carefully
5. Check that the expression is safe

If a question asks for both algebra and calculus, write algebra first if you want the operational path, then calculus to show declarative understanding.
