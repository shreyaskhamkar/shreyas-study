# Module 3: Knowledge Representation

[← Previous: Module 2](<Module-2.md>) · [Subject index](README.md) · [Next: Module 4 →](<Module-4.md>)

## Learning outcomes

After completing this module, you should be able to:

- explain the purpose and requirements of knowledge representation;
- represent knowledge using logic, semantic networks, frames, and scripts;
- describe conceptual dependency and partitioned semantic networks;
- distinguish an ontology from a knowledge graph; and
- perform basic inference in propositional logic.


## Prerequisites

Complete [Module 2](Module-2.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Knowledge representation in AI | 10-15 minutes |
| 2 | Types of knowledge | 10-15 minutes |
| 3 | Propositional logic | 10-15 minutes |
| 4 | Semantic networks | 10-15 minutes |
| 5 | Frames and slot-filler structures | 10-15 minutes |
| 6 | Scripts | 10-15 minutes |
| 7 | Conceptual dependency | 10-15 minutes |
| 8 | Ontologies | 10-15 minutes |
| 9 | Knowledge graphs | 10-15 minutes |
| 10 | Representation comparison | 10-15 minutes |
| 11 | Worked representation | 10-15 minutes |


## Knowledge representation in AI

Knowledge representation (KR) encodes facts, concepts, relationships, rules, and
events in a form an AI system can use for reasoning.

A useful representation should provide:

- **representational adequacy:** it can express the required knowledge;
- **inferential adequacy:** it supports deriving new knowledge;
- **inferential efficiency:** it guides reasoning toward relevant conclusions;
- **acquisitional efficiency:** knowledge can be added and updated easily; and
- **clarity and consistency:** meanings are unambiguous and contradictions can be managed.

## Types of knowledge

| Type | Meaning | Example |
|---|---|---|
| Declarative | Facts about the world | Pune is in Maharashtra |
| Procedural | How to perform a task | Steps of an algorithm |
| Heuristic | Experience-based rule | Prefer the most constrained variable |
| Meta-knowledge | Knowledge about other knowledge | Source A is more reliable |
| Structural | Relationships among concepts | A car has an engine |

## Propositional logic

A proposition is a statement that is either true or false. Complex formulas use:

| Notation | Meaning |
|---|---|
| `NOT P` | Negation |
| `P AND Q` | Conjunction |
| `P OR Q` | Disjunction |
| `P -> Q` | Implication |
| `P <-> Q` | Biconditional |

### Inference rules

**Modus ponens**:

```text
P
P -> Q
Therefore Q
```

**Modus tollens**:

```text
P -> Q
NOT Q
Therefore NOT P
```

An inference procedure is **sound** if every derived statement is entailed by
the knowledge base. It is **complete** if it can derive every entailed statement.

### Resolution

Resolution usually works with formulas in conjunctive normal form (CNF). To
prove a query, add its negation to the knowledge base and derive a contradiction.

Example clauses:

```text
NOT Rain OR Wet
Rain
```

Resolving them gives `Wet`.

Propositional logic is precise and supports formal inference, but it cannot
compactly express objects, relations, or universal rules. Predicate logic adds
predicates, variables, and quantifiers for these purposes.

## Semantic networks

A semantic network represents knowledge as a labelled graph:

- nodes represent objects or concepts;
- edges represent relations such as `is-a`, `instance-of`, and `has-part`.

```text
Canary --is-a--> Bird --is-a--> Animal
Bird --has--> Wings
Canary --colour--> Yellow
```

Inheritance lets Canary receive properties of Bird and Animal. Exceptions must
be handled carefully; for example, a penguin is a bird but normally cannot fly.

### Partitioned semantic networks

Partitioning groups nodes and arcs into contexts. It helps represent quantified
statements, beliefs, hypothetical situations, and statements whose scope must be
kept separate.

## Frames and slot-filler structures

A **frame** is a structured record for a stereotyped object or situation. Slots
name attributes and fillers hold values.

```text
Frame: Student
  name: Shreya
  programme: MCA
  semester: 1
  institution: [value]
```

Slots may contain:

- default values;
- value restrictions;
- inherited values;
- procedures triggered when a value is read or changed; and
- links to other frames.

Frames are intuitive and efficient for structured domain knowledge, but their
inference semantics are less uniform than formal logic.

## Scripts

A script represents a common event sequence. A restaurant script might include
entering, getting a table, ordering, eating, paying, and leaving. Scripts help an
AI system infer omitted events, but they are brittle when events depart greatly
from the expected pattern.

## Conceptual dependency

Conceptual dependency (CD) represents sentence meaning using a small set of
primitive actions. Sentences with the same underlying meaning should receive a
similar representation.

Common primitives include:

| Primitive | Meaning | Example |
|---|---|---|
| ATRANS | Transfer of possession | Riya gives Sam a book |
| PTRANS | Physical movement | Sam goes to college |
| MTRANS | Transfer of information | Teacher tells the class |
| INGEST | Taking something into the body | Sam drinks water |
| PROPEL | Applying physical force | Sam throws a ball |

CD makes implicit roles and causal relations explicit, but building detailed CD
representations is labour-intensive and its primitive set may be domain-sensitive.

## Ontologies

An ontology gives a shared, formal specification of concepts and relationships
in a domain. It normally defines:

- classes and subclasses;
- individuals or instances;
- properties and relations;
- constraints or axioms; and
- controlled vocabulary.

For a university ontology, `Student` and `Course` may be classes,
`enrolledIn` a relation, and a particular learner an instance of `Student`.

## Knowledge graphs

A knowledge graph stores entities and relationships as triples:

```text
(Ada Lovelace, occupation, Mathematician)
(Ada Lovelace, workedOn, Analytical Engine)
```

An ontology defines the schema and meaning of a domain; a knowledge graph often
contains the actual instance data. The two are commonly used together.

## Representation comparison

| Technique | Strength | Limitation |
|---|---|---|
| Logic | Precise semantics and formal proof | Can be costly and rigid |
| Semantic network | Visual and supports inheritance | Relations may be ambiguous |
| Frame | Natural structured description | No single standard inference model |
| Script | Captures expected event sequences | Handles unusual cases poorly |
| Conceptual dependency | Represents language-independent meaning | Complex to construct |
| Ontology/knowledge graph | Shared vocabulary and linked data | Requires careful schema design |

## Worked representation

Knowledge: "Every student is a person. Mira is a student."

- Logic: `Student(Mira)` and `Student(x) -> Person(x)`.
- Semantic network: `Mira --instance-of--> Student --is-a--> Person`.
- Frame: a `Mira` frame whose parent is `Student`, which inherits from `Person`.

All three support the conclusion that Mira is a person, but they organize and
derive that knowledge differently.

## Common mistakes

- Confusing a class such as `Student` with an instance such as `Mira`.
- Assuming inheritance has no exceptions, for example concluding every bird flies.
- Treating a semantic network edge as meaningful without defining its relation.
- Using propositional logic when objects, relations, or quantifiers are required.
- Confusing an ontology's schema with the instance facts in a knowledge graph.

## Quick revision

- Logic provides precise inference; semantic networks provide graph-shaped relations.
- Frames organize attributes in slots and support defaults and inheritance.
- Scripts represent expected event sequences.
- Ontologies define shared concepts and constraints; knowledge graphs store linked facts.
- Sound inference derives only entailed conclusions; complete inference can derive every entailed conclusion.

## Important exam questions

1. Explain the requirements of a good knowledge-representation system.
2. Compare semantic networks, frames, scripts, and conceptual dependency.
3. Represent a given domain using a semantic network and explain inheritance.
4. Explain propositional resolution with a worked example.
5. Distinguish ontology, knowledge base, and knowledge graph.
6. Explain partitioned semantic networks and their need.

## PDF-aligned additions

### Explicit, implicit, domain, and common-sense knowledge

- **Explicit knowledge** is directly stored as a fact, rule, or definition.
- **Implicit knowledge** is inferred from stored facts and rules.
- **Domain knowledge** is specialized knowledge about medicine, law, education,
  or another field.
- **Common-sense knowledge** is broad everyday knowledge.

Keep concepts and instances separate: `Student` is a class, while `Mira` may be
an instance of that class. A knowledge base also contains symbols, relations,
rules, constraints, and queries.

### Ambiguity, change, and exceptions

A practical representation must support updates and exceptions. “Birds fly” may
be a default rule, but `Penguin` can be represented as a bird that does not fly.
Facts that are stored directly are explicit; conclusions derived from rules are
implicit.

### Propositional-resolution checklist

1. Translate facts and the query into propositions.
2. Convert implications to `NOT P OR Q`.
3. Convert the knowledge base and negated query to CNF.
4. Resolve clauses containing complementary literals.
5. Derive the empty clause to prove contradiction and entailment.

Propositional logic cannot compactly express variables, objects, or quantified
rules; predicate logic is the natural extension when those are required.

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
