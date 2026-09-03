# Module 10: Advanced Topics

[← Previous: Module 9](<Module-9.md>) · [Subject index](README.md) · [Next: Module 11 →](<Module-11-Practical-Guide.md>)

## Learning outcomes

After completing this module, you should be able to:

- explain the central ideas in **Module 10: Advanced Topics** using simple language;
- apply the main method or rules to a worked example;
- connect the topic to a practical computing scenario; and
- answer short and long university questions with clear steps.


## Prerequisites

Complete [Module 9](Module-9.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Why this matters in practice | 10-15 minutes |
| 3 | Advanced terms explained simply | 10-15 minutes |
| 4 | 1. XML databases | 10-15 minutes |
| 5 | 2. Distributed databases | 10-15 minutes |
| 6 | 3. Distributed transactions | 10-15 minutes |
| 7 | 4. Parallel databases | 10-15 minutes |
| 8 | 5. Big data | 10-15 minutes |
| 9 | 6. Hadoop ecosystem | 10-15 minutes |
| 10 | 7. Apache Spark | 10-15 minutes |
| 11 | 8. NoSQL models | 10-15 minutes |
| 12 | 9. Choosing a technology | 10-15 minutes |


## Start here: the simple idea

This module explains databases that go beyond one ordinary table-based system.

| Topic | Simple meaning |
|---|---|
| XML | Stores information using nested tags, similar to HTML |
| Distributed database | One logical database stored on several networked computers |
| Parallel database | Several processors work together to finish work faster |
| Big data | Data too large, fast, or varied for convenient traditional processing |
| Hadoop/HDFS | Stores very large files across many machines |
| Spark | Processes large distributed data, often faster for repeated work |
| NoSQL | Database models other than only relational tables |

### Everyday picture

Imagine a school chain with campuses in different cities. Each campus may keep nearby student data for speed, while the organization treats it as one database. Data may be **fragmented** (split into parts) or **replicated** (copied to more than one place).

## Why this matters in practice

- In textbooks, advanced topics show how databases work beyond a single server.
- In industry, these ideas support cloud systems, analytics platforms, large applications, and high-availability services.
- For beginners, read each technology first as a storage or processing strategy, not as a separate world.

If the network between campuses breaks, the system may have to choose between always showing the latest data (**consistency**) and always giving some response (**availability**). This is the central CAP idea during a network partition.

NoSQL does not mean “no SQL” or “no rules.” It describes models such as key-value, document, wide-column, and graph databases. Choose a technology based on the type of data, queries, consistency, speed, scale, skills, and cost—not because one technology is fashionable.

## Advanced terms explained simply

### Fragmentation and replication

- **Fragmentation:** split one table into parts. Example: Pune students at the Pune server and Mumbai students at the Mumbai server.
- **Replication:** keep copies of the same data at several servers.

**Remember:** fragmentation means divide; replication means copy.

### Two-phase commit

For one transaction involving several servers:

1. **Prepare:** the coordinator asks every server, “Are you ready to save?”
2. **Decision:** if all say yes, everyone commits; if any says no, everyone aborts.

This protects all-or-nothing behavior, but ready servers may have to wait if the coordinator fails.

### CAP theorem

During a network break, a distributed system cannot guarantee both:

- **Consistency:** every read gets the latest successful value.
- **Availability:** every request gets a non-error response.

Partition tolerance means the system continues operating despite lost network messages. CAP is specifically about behavior during a partition.

### Hadoop and Spark

**HDFS** stores pieces of large files on several machines. **MapReduce** processes them using map, shuffle, and reduce stages. **Spark** is a general processing engine that can keep useful intermediate data in memory and build a multi-step execution graph.

### NoSQL models

- **Key-value:** find a value using one key, like a dictionary.
- **Document:** store a complete JSON-like object.
- **Wide-column:** store huge, sparse records with flexible columns.
- **Graph:** store nodes and connections; useful for social networks and routes.

## 1. XML databases

XML represents hierarchical, self-describing data using nested elements and attributes:

```xml
<student id="101">
  <name>Asha</name>
  <department code="CS">Computer Science</department>
</student>
```

XML must be **well-formed**: one root element, proper nesting, matching case-sensitive tags, and quoted attributes. It is **valid** when it also follows a schema.

- **DTD:** older grammar for permitted structure; limited data typing.
- **XSD (XML Schema):** XML-based, supports data types, namespaces, occurrence constraints, and complex types.
- **XPath:** selects nodes by paths and predicates.
- **XQuery:** queries and constructs XML.
- **XSLT:** transforms XML into XML, HTML, or text.

Relational databases may store XML as text/binary, shredded relational columns, or a native XML type. Native XML databases suit irregular, document-centric, deeply nested data; relational systems suit highly structured data and joins.

## 2. Distributed databases

A distributed database is a logically related database physically stored at multiple networked sites and managed as one system.

Goals include local autonomy, availability, scalability, location transparency, and reduced latency. Challenges include network failure, distributed deadlock, replica consistency, security, and complex recovery.

### Data distribution

- **Horizontal fragmentation:** divide rows, e.g. customers by region.
- **Vertical fragmentation:** divide columns while retaining a key for reconstruction.
- **Hybrid fragmentation:** combine both.
- **Replication:** maintain copies at several sites.

Correct fragmentation should provide completeness, reconstruction, and normally disjointness (except replicated key attributes for vertical fragments).

### Transparency

- Location transparency: users need not know the data site.
- Fragmentation transparency: users need not know how a relation is split.
- Replication transparency: users need not know how many copies exist.

### Replication

Synchronous replication waits for replicas and improves consistency but increases write latency/availability sensitivity. Asynchronous replication reduces latency but allows lag and stale reads.

## 3. Distributed transactions

**Two-phase commit (2PC)** coordinates atomic commit:

1. Prepare/voting phase: coordinator asks participants to prepare; each logs and votes yes/no.
2. Decision phase: if all vote yes, coordinator records commit and tells all; otherwise abort.

2PC ensures atomicity but can block when the coordinator fails after participants prepare. Consensus protocols solve a related but different agreement problem and are often used to replicate state reliably.

### CAP theorem

When a network partition occurs, a distributed system cannot simultaneously guarantee both:

- **Consistency:** every read sees the latest successful write (in the CAP sense)
- **Availability:** every request receives a non-error response
- **Partition tolerance:** operation continues despite lost/delayed network messages

Since real distributed systems must tolerate partitions, designs choose behavior between consistency and availability during a partition. CAP does not mean choosing only two properties during normal operation.

## 4. Parallel databases

Parallel DBMSs use multiple processors/disks to execute operations simultaneously.

- **Inter-query parallelism:** different queries run in parallel.
- **Intra-query parallelism:** one query is divided among workers.
- **Inter-operator:** different plan operators execute concurrently.
- **Intra-operator:** one scan/join/aggregate is partitioned across workers.

Architectures:

| Architecture | Characteristics |
|---|---|
| Shared memory | Processors share memory and disks; simple communication, limited scale |
| Shared disk | Private memory, common disks; high availability, coordination cost |
| Shared nothing | Each node owns memory and disk; scalable, data movement/skew challenges |

Performance concepts:

- **Speedup:** same task completes faster with more resources.
- **Scaleup:** proportionally larger task completes in roughly the same time with proportional resources.
- **Skew:** uneven data/work distribution leaves some workers overloaded.

## 5. Big data

The **5 Vs**:

- Volume: large amount
- Velocity: high arrival/processing rate
- Variety: structured, semi-structured, unstructured
- Veracity: uncertainty and quality
- Value: useful insight or outcome

Big data is not just “large”; it describes workloads whose scale, speed, or diversity exceeds convenient handling by traditional single-system techniques.

## 6. Hadoop ecosystem

### HDFS

Hadoop Distributed File System splits files into large blocks and distributes replicated copies across DataNodes.

- **NameNode:** manages namespace and block metadata.
- **DataNode:** stores and serves blocks.
- Replication and re-creation of lost replicas provide fault tolerance.
- Optimized for high-throughput sequential access, not low-latency small updates.

### MapReduce

```text
Input splits → Map(key,value) → Shuffle/sort → Reduce(key,values) → Output
```

Mappers transform records into intermediate key-value pairs. Shuffle groups equal keys, and reducers aggregate/process each group. It is fault-tolerant but repeated disk materialization makes iterative work slow.

## 7. Apache Spark

Spark is a distributed processing engine supporting batch, SQL, streaming, machine learning, and graph workloads. Its DAG scheduler can pipeline work, and caching helps iterative algorithms.

- RDD: immutable distributed collection with lineage
- DataFrame/Dataset: structured data with optimizer benefits
- Transformation: lazy operation producing a new dataset
- Action: triggers execution and returns/writes a result

Spark is not simply “in-memory Hadoop”; it is a general compute engine and can use HDFS and other storage systems.

## 8. NoSQL models

| Model | Best suited to | Example structure |
|---|---|---|
| Key-value | Cache/session/simple lookup | key → opaque value |
| Document | Flexible nested records | JSON-like document |
| Wide-column | Huge sparse datasets | row key and column families |
| Graph | Relationship traversal | vertices and edges |

NoSQL commonly emphasizes horizontal scaling, flexible schemas, and workload-specific models. It does not mean “no query language” or “no transactions”; capabilities vary.

**BASE** is often summarized as Basically Available, Soft state, Eventually consistent. Eventual consistency means replicas converge if updates stop; it does not specify how quickly.

## 9. Choosing a technology

Choose based on access patterns, consistency requirements, transaction boundaries, latency, volume, growth, operational skills, and cost:

- Relational DBMS: strong integrity, transactions, flexible joins
- Document DB: evolving nested aggregates
- Graph DB: deep relationship traversal
- HDFS/object storage + Spark: large analytical processing
- Distributed SQL/NewSQL: relational semantics with scale-out architecture

Polyglot persistence uses multiple stores, but increases integration, governance, backup, and consistency complexity.

## Exam focus

- Differentiate fragmentation from replication.
- Explain 2PC phases and its blocking limitation.
- State CAP specifically under partition.
- Compare Hadoop storage/MapReduce with Spark processing.
- Describe NoSQL by data model and workload, not by vague “unstructured data” claims.

## Common mistakes

- Saying CAP means choosing any two properties during normal operation
- Confusing splitting data with copying data
- Treating Hadoop, HDFS, MapReduce, and Spark as the same tool
- Assuming NoSQL means no transactions or no query language
- Choosing technology only from data size

## Memory rules

- Fragment = divide; replicate = copy.
- 2PC = prepare, then decide.
- HDFS stores; Spark processes.
- CAP describes behavior during a network partition.
- Choose a database from workload needs, not fashion.

## Check your understanding

1. What is the difference between horizontal and vertical fragmentation?
2. Why can two-phase commit block?
3. Which NoSQL model best represents a social network?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Horizontal fragmentation splits rows; vertical fragmentation splits columns while keeping a reconstruction key.
2. Prepared participants may have to wait if the coordinator fails before sending the final decision.
3. A graph database because it stores and traverses relationships directly.

</details>

## Quick revision box

Distributed systems spread data across sites. Parallel systems spread computation. Big-data tools handle scale, speed, or variety beyond convenient single-system processing.

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

[← Previous: Module 9](<Module-9.md>) · [Subject index](README.md) · [Next: Module 11 →](<Module-11-Practical-Guide.md>)
