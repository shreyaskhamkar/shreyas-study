# Module 10 Article: Advanced Topics in Modern Data Systems

## XML and XSD

XML stores structured data with nested tags. It is human-readable and flexible. XSD defines the structure, data types, and validation rules for XML documents.

XML is useful when data naturally has a hierarchy, such as order details, configuration files, or exchange documents.

## Distributed databases

A distributed database stores data across multiple sites but presents it as one logical system. This improves availability, scalability, and local access speed.

Key ideas:

- fragmentation
- replication
- distributed query processing
- distributed transaction control

The hard part is keeping data consistent while still being fast and available.

## Parallel databases

Parallel databases use multiple processors or nodes to speed up query processing. The work is divided across resources so large queries can run faster.

This is especially useful for warehouse and analytics workloads.

## Big data and Hadoop ecosystem

Big data refers to data that is too large or too fast-changing for traditional single-server handling alone.

Important tools:

- HDFS for distributed storage
- Hadoop for batch processing
- Spark for in-memory distributed computation

## NoSQL

NoSQL systems are useful when the relational model is not the best fit. They often support flexible schemas and horizontal scaling.

Common styles:

- key-value
- document
- column-family
- graph

## 5Vs of big data

- Volume
- Velocity
- Variety
- Veracity
- Value

## Final exam point

This module is usually best answered by showing the connection between storage architecture and business scale. Start with why traditional DBMS solutions struggle at very large scale, then explain how distributed and parallel systems help.
