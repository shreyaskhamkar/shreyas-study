# Cyber Security — Complete Study Notes

These exam-oriented notes cover all four modules of **Cyber Security** for MCA Semester I, based on the 219-page study material. The folder is arranged like a learning dashboard: a main module index, deep-dive articles, and quick revision resources.

Each module follows three learning layers:

1. **Simple idea:** plain language and a familiar analogy.
2. **Worked example:** a concrete, step-by-step scenario.
3. **Technical meaning:** correct definitions, tables, and exam points.

The notes use a recurring reference scenario — **SecureBank**, a small online-banking service — to keep examples consistent across modules.

## Module-wise study method

1. Review prerequisites and identify the SecureBank asset being protected.
2. Complete one 10-15-minute study block at a time.
3. Map each threat to a security objective, preventive control, and limitation.
4. Attempt the mini quiz and practice ladder before revealing solutions.
5. Mark the module `Mastered` after explaining a fresh defensive scenario safely and accurately.

## Module Index

| Module | Topic | File |
|---|---|---|
| 1 | Fundamentals: cryptography, network & communication security, threats & vulnerabilities | [Module 1](Module-1.md) |
| 2 | Security management, laws & standards, network security technologies | [Module 2](Module-2.md) |
| 3 | Information & network security: access control & intrusion detection | [Module 3](Module-3.md) |
| 4 | System & application security: architecture, OS, web, email, databases, forensics | [Module 4](Module-4.md) |

## Deep-Dive Articles

| Module | Article |
|---|---|
| 1 | [Module-1-Article](Articles/Module-1-Article.md) |
| 2 | [Module-2-Article](Articles/Module-2-Article.md) |
| 3 | [Module-3-Article](Articles/Module-3-Article.md) |
| 4 | [Module-4-Article](Articles/Module-4-Article.md) |

## Revision Tools

- [Quick Revision](Quick-Revision.md) - last-minute review of all modules.
- [Cheat Sheet](Cheat-Sheet.md) - algorithms, port numbers, protocol summaries.
- [Important Questions](Important-Questions.md) - exam questions with answer points.
- [MCQ](MCQ.md) - multiple-choice practice by chapter.
- [Glossary](Glossary.md) - important terms in alphabetical order.
- [Web Resources](Web-Resources.md) - official and high-quality external references.

## How to use this folder

1. Read the matching module note first.
2. Open the matching article for a deeper explanation and extra examples.
3. Use the cheat sheet for fast revision.
4. Practice the MCQs and important questions without looking at the notes.

## SecureBank reference scenario

Throughout the notes, **SecureBank** is used as a running example:

```text
SecureBank = online banking app
Clients       : web/mobile apps over HTTPS
Backend       : application servers + database
Network       : Internet ← DMZ (reverse proxy + WAF) ← internal LAN
Assets       : customer credentials, session tokens, account records
Threat model  : outsider attacker (network) vs insider (staff)
```
