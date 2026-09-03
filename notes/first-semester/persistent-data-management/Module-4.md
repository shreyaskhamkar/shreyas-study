# Module 4: Relational Calculus

[← Previous: Module 3](<Module-3.md>) · [Subject index](README.md) · [Next: Module 5 →](<Module-5.md>)

## Learning outcomes

After completing this module, you should be able to:

- explain the central ideas in **Module 4: Relational Calculus** using simple language;
- apply the main method or rules to a worked example;
- connect the topic to a practical computing scenario; and
- answer short and long university questions with clear steps.


## Prerequisites

Complete [Module 3](Module-3.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Why this matters in practice | 10-15 minutes |
| 3 | Difficult ideas explained simply | 10-15 minutes |
| 4 | 1. Relational calculus | 10-15 minutes |
| 5 | 2. Logic used in calculus | 10-15 minutes |
| 6 | 3. Tuple Relational Calculus | 10-15 minutes |
| 7 | 4. Domain Relational Calculus | 10-15 minutes |
| 8 | 5. Safe and unsafe expressions | 10-15 minutes |
| 9 | 6. Comparison | 10-15 minutes |
| 10 | Translation approach | 10-15 minutes |


## Start here: the simple idea

Relational calculus describes **what answer we want**, without listing the steps used to find it.

Compare:

- Relational algebra: “Open the student table, keep CS rows, then keep the name column.”
- Relational calculus: “Give me names of students whose department is CS.”

There are two forms:

- **TRC (Tuple Relational Calculus):** variables stand for complete rows.
- **DRC (Domain Relational Calculus):** variables stand for individual values inside cells.

### Logic words you already know

| Logic idea | Plain English |
|---|---|
| AND | both conditions must be true |
| OR | at least one condition is true |
| NOT | the condition is false |
| “there exists” | at least one matching item exists |
| “for every” | all matching items satisfy the condition |

A **safe query** can return only a limited set of values taken from the database or written as constants. Safety matters because an unsafe query could describe an unlimited result.

Do not be frightened by the symbols below. First say the query as an English sentence, then replace the words with logical symbols.

## Why this matters in practice

- In textbooks, calculus teaches you to focus on the result you want, not the steps to get it.
- In industry, that same thinking appears in filters, search conditions, and many SQL queries.
- For a beginner, the easiest approach is to identify the condition first, then the result.

## Difficult ideas explained simply

### Procedural and declarative

- **Procedural:** give the steps, like a cooking recipe.
- **Declarative:** describe the wanted result, like ordering food from a menu.

Relational algebra is procedural. Relational calculus and SQL are declarative.

### Tuple and domain

A **tuple** means one complete table row. A **domain value** means one individual value, such as `101` or `Asha`.

**Remember:** TRC talks about rows; DRC talks about values.

### “There exists” and “for every”

“There exists” means **at least one**:

```text
There exists a course taken by Asha.
```

“For every” means **all**:

```text
For every compulsory course, Asha has an enrolment.
```

### Free and bound variables

A **free variable** appears in the answer. A **bound variable** is only used while checking a condition. In “show student names where there exists an enrolment,” the student name is free and the enrolment is bound.

### Safe expression

A safe expression returns only a finite result based on stored values. It does not ask the database to consider every possible value in the world.

## 1. Relational calculus

Relational calculus is a formal **non-procedural (declarative)** query language based on predicate logic. It states **what** result must satisfy, not the sequence of operations used to obtain it.

- **Tuple Relational Calculus (TRC):** variables range over tuples.
- **Domain Relational Calculus (DRC):** variables range over individual attribute values.

Relational algebra and safe relational calculus are equivalent in expressive power; this is called **Codd's theorem**.

## 2. Logic used in calculus

| Symbol | Meaning |
|---|---|
| `∧` | and |
| `∨` | or |
| `¬` | not |
| `→` | implies |
| `∃` | there exists |
| `∀` | for every |

A **free variable** contributes to the result. A **bound variable** is controlled by `∃` or `∀`.

## 3. Tuple Relational Calculus

General form:

```text
{ t | P(t) }
```

This means “the set of tuples t for which predicate P is true.”

Assume `STUDENT(SID, Name, Dept)`, `COURSE(CID, Title, Dept)`, and `ENROLL(SID,CID,Grade)`.

### CS students

```text
{ s | STUDENT(s) ∧ s.Dept='CS' }
```

### Names of students enrolled in DBMS

```text
{ <s.Name> |
  STUDENT(s) ∧
  ∃e (ENROLL(e) ∧ e.SID=s.SID ∧
      ∃c (COURSE(c) ∧ c.CID=e.CID ∧ c.Title='DBMS'))
}
```

### Students with no enrolment

```text
{ s | STUDENT(s) ∧ ¬∃e (ENROLL(e) ∧ e.SID=s.SID) }
```

### Students enrolled in every course

```text
{ s |
  STUDENT(s) ∧
  ∀c (COURSE(c) →
      ∃e (ENROLL(e) ∧ e.SID=s.SID ∧ e.CID=c.CID))
}
```

Universal quantification is often rewritten using `¬∃`:

```text
∀x(P(x)→Q(x)) ≡ ¬∃x(P(x)∧¬Q(x))
```

Thus “every required course” becomes “there does not exist a required course that the student did not take.”

## 4. Domain Relational Calculus

General form:

```text
{ <x1, x2, ..., xn> | P(x1, x2, ..., xn) }
```

### IDs and names of CS students

```text
{ <sid, name> |
  ∃dept (STUDENT(sid, name, dept) ∧ dept='CS')
}
```

### Student names enrolled in DBMS

```text
{ <name> |
  ∃sid ∃dept ∃cid ∃grade ∃cdept
  (STUDENT(sid,name,dept) ∧
   ENROLL(sid,cid,grade) ∧
   COURSE(cid,'DBMS',cdept))
}
```

TRC is usually more compact for whole rows; DRC makes each value variable explicit.

## 5. Safe and unsafe expressions

An expression is **safe** or **range-restricted** when it produces a finite result using values drawn from the database or explicitly stated constants.

Unsafe example:

```text
{ <x> | ¬STUDENT(x, 'Asha', 'CS') }
```

If x can range over an infinite universe, the result may be infinite. Safe query languages restrict free and quantified variables to active database domains.

## 6. Comparison

| Feature | Relational algebra | TRC | DRC |
|---|---|---|---|
| Style | Procedural | Declarative | Declarative |
| Variables | Relations/expressions | Tuples | Attribute values |
| Foundation | Set operations | Predicate logic | Predicate logic |
| User states | How to compute | Desired tuple condition | Desired value condition |

SQL is declarative and conceptually influenced by calculus, but it also has duplicates, nulls, aggregation, ordering, and other practical features beyond classical calculus.

## Translation approach

1. Identify the output attributes.
2. Introduce variables for required relations.
3. connect relations using equality predicates.
4. add selection predicates.
5. use `∃` for “some/at least one,” `¬∃` for “none,” and `∀` or its equivalent for “all.”
6. verify that every result variable is range-restricted.

## Exam focus

- TRC variables represent tuples; DRC variables represent domain values.
- Quantifier scope and parentheses matter.
- “All” queries need universal quantification or double negation.
- Explain safety whenever discussing expressive power.

## Common mistakes

- Treating TRC as a step-by-step language
- Forgetting to connect related tables using equal key values
- Confusing “there exists” with “for every”
- Leaving a result variable unrestricted

## Memory rules

- TRC talks about complete rows.
- DRC talks about individual values.
- `∃` means “at least one exists.”
- `∀` means “every one.”
- Safe means the result is finite and based on database values.

## Check your understanding

1. Is relational calculus procedural or declarative?
2. Which calculus uses whole-row variables?
3. How can “every course” be expressed without using `∀`?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Declarative: it states the condition the answer must satisfy.
2. TRC uses whole-row or tuple variables.
3. Say that there does not exist a course that the student has not completed.

</details>

## Quick revision box

Write the wanted result first. Add relation variables, connect their keys, add conditions, and confirm that every result variable is range-restricted.

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

[← Previous: Module 3](<Module-3.md>) · [Subject index](README.md) · [Next: Module 5 →](<Module-5.md>)
