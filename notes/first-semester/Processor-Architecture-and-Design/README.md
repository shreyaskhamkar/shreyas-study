# Processor Architecture and Design — Complete Study Notes

These exam-oriented notes cover all ten modules of **Processor Architecture and Design** for MCA Semester I. The folder is arranged like a learning dashboard: a main module index, deep-dive articles, and quick revision resources.

Each module follows three learning layers:

1. **Simple idea:** plain language and a familiar analogy.
2. **Worked example:** a small, step-by-step reference-machine problem.
3. **Technical meaning:** correct definitions, diagrams, and exam points.

The modules share one running example machine, **MiniCPU**, a simplified 32-bit RISC-like processor with registers `R0..R15` (where `R0` hard-wires to 0), a 32-bit address bus, and a load-store instruction set. This keeps examples consistent across modules so ideas reinforce each other.

## Module-wise study method

1. Review prerequisites, then complete one 10-15-minute study block.
2. Draw the relevant datapath, hierarchy, timing line, or address translation.
3. Trace MiniCPU state changes before reading the supplied result.
4. Attempt the mini quiz and practice ladder before revealing solutions.
5. Mark the module `Mastered` only when the diagram and calculation can be reproduced unaided.

## Module Index

| Module | Topic | File |
|---|---|---|
| 1 | Evolution to stored-program computers; machine language and the instruction cycle; control unit | [Module 1](Module-1.md) |
| 2 | Digital electronics: combinational and sequential logic, logic gates, binary systems | [Module 2](Module-2.md) |
| 3 | Computer system architecture: datapath, control, buses, CPU components | [Module 3](Module-3.md) |
| 4 | Memory systems and hierarchy: RAM, cache, ARM, performance | [Module 4](Module-4.md) |
| 5 | Performance optimization: pipelining, hazards, branch prediction, interrupts, parallelism | [Module 5](Module-5.md) |
| 6 | Instruction Set Architecture: RISC vs CISC, popular ISAs, ARM | [Module 6](Module-6.md) |
| 7 | Abstractions: virtualization and resource multiplexing | [Module 7](Module-7.md) |
| 8 | Virtual memory systems | [Module 8](Module-8.md) |
| 9 | Interrupts and exception handling | [Module 9](Module-9.md) |
| 10 | System interface: API/ABI, system calls, protected mode, bootstrapping | [Module 10](Module-10.md) |

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

**Internal exam schedule:** Processor Architecture and Design (OCA-502 MJ) is on Tuesday, 25 August 2026. Available slots are 8:00 AM-10:00 AM and 7:00 PM-9:00 PM.

- [Quick Revision](Quick-Revision.md) - last-minute review of all modules.
- [Cheat Sheet](Cheat-Sheet.md) - notation, rules, formulas, and patterns.
- [Important Questions](Important-Questions.md) - exam questions with answer points.
- [PDF-Based Study Notes](Pdf-Notes.md) - consolidated notes from the module PDFs.
- [Internal Exam 1](Internal-Exam-1.md) - 23-question paper with 8 sections and answer key.
- [Full-Syllabus Internal Exam](Internal-Exam-Full-Syllabus.md) - 23-question paper covering Modules 1-9.
- [30-Mark Internal Exam Format](Internal-Exam-Format-30-Marks.md) - official section-wise pattern with 23 questions and one descriptive answer.
- [Expected Questions - Day 2](Expected-Questions-Day-2.md) - last-minute practice paper with answers.
- [Practice Test 1](Practice-Test-1.md) - short revision test for modules 1-3.
- [Practice Test 2](Practice-Test-2.md) - short revision test for modules 4-6.
- [Practice Test 3](Practice-Test-3.md) - short revision test for modules 7-9.
- [Glossary](Glossary.md) - important terms in alphabetical order.
- [Web Resources](Web-Resources.md) - official and high-quality external references.

## How to use this folder

1. Read the matching module note first.
2. Open the matching article for a deeper explanation and extra examples.
3. Use the cheat sheet for fast revision.
4. Practice the important questions without looking at the notes.

## MiniCPU reference model

| Element | Value |
|---|---|
| Registers | `R0..R15` (32-bit each); `R0 = 0` is read-only |
| Word size | 32 bits |
| Address space | 2^32 bytes |
| Data memory | Byte-addressable, little-endian (like x86) |
| Instruction set | Load-store RISC: `LDR`, `STR`, `ADD`, `SUB`, `MUL`, `BEQ`, `JMP`, `MOV`, `HLT` |
| Instruction format | 32-bit fixed: `opcode(6) | rd(5) | rs(5) | rt(5) | funct(11)` |
| Program counter | 32-bit, increments by 4 |
| Flags | Zero (Z), Carry (C), Negative (N), Overflow (V) |

Most worked examples trace a short MiniCPU program, such as summing an array or computing factorial, instruction by instruction through the fetch-decode-execute cycle.
