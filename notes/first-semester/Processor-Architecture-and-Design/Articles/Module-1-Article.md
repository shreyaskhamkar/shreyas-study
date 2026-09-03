# Module 1 Article: The Stored-Program Machine

## The big idea

Before the 1940s, "programming" meant rewiring plugboards or swapping punch
cards. The stored-program concept changed everything: **instructions live in
memory as data**, so a machine can be reprogrammed by simply loading a new
program — no rewiring. This single idea is the foundation of every computer we
use today.

## From mechanical to electronic

| Era | Example | How it worked |
|---|---|---|
| Mechanical | Pascaline (1642) | Gears for addition/carry |
| Programmable | Babbage Analytical Engine (1870s) | Punched cards for program/data |
| Electronic stored-program | EDVAC, EDSAC (1949) | Instructions in electronic memory |

Von Neumann's 1945 "First Draft of a Logical and Statistical Composition
Apparatus" described a machine that stored both program and data in the same
addressable memory — the von Neumann architecture, also called the
**stored-program** or **von Neumann** model. The competing **Harvard architecture**
keeps program and data in separate memories (still used for caches today).

## Machine language and the instruction cycle

A processor executes **machine language**: 0s and 1s grouped into instructions.
Each instruction has two logical parts:

- **Opcode:** identifies the operation (ADD, LOAD, STORE, BRANCH).
- **Operands:** register numbers, immediate constants, or addresses.

The CPU repeats a simple cycle for each instruction:

1. **Fetch:** `IR ← MEM[PC]`, then `PC ← PC + instruction_length`.
2. **Decode:** read the opcode; identify and read source registers.
3. **Execute:** the ALU performs the operation.
4. **Memory:** for load/store, access data memory.
5. **Write-back:** store the result into the destination register.

## Worked example: tracing an ADD

MiniCPU program: add `R2` and `R3` and store in `R1`, then halt.

```
Address  Instruction        Comment
0x1000   0x00000000          ; placeholder NOP (or branch)
0x1004   ADD R1, R2, R3     ; opcode 0
0x1008   HLT                ; halt
```

Cycle trace (single-cycle style):

```
Cycle 1: IR ← MEM[PC=0x1004]; PC ← 0x1008; decode ADD
Cycle 2: read R2, R3; ALU computes R2+R3
Cycle 3: write result to R1
Cycle 4: fetch HLT; decode; halt
```

The control unit produces, for the ADD: `MemRead=0`, `ALUOp=ADD`, `RegDst=R1`,
`RegWrite=1`, and advances the PC.

## Instruction Set Architecture as a contract

The **ISA** is the programmer-visible part: the instruction set, registers,
addressing modes, and memory model. Crucially, **many** physical
microarchitectures can implement the **same** ISA. Intel x86 and AMD x86-64
both implement the x86 ISA but use very different internal designs. This
separation lets software run across vendors.

## The control unit's job

The control unit is the traffic-light system. For each instruction step it raises
control wires that select:

- which register drives the internal bus,
- which ALU operation to perform,
- whether to write to a register or to memory,
- whether to branch the PC,
- when to latch pipeline registers.

**Hardwired control** decodes the opcode with fixed logic (fast, hard to change).
**Microprogrammed control** stores each instruction's control sequence in a
control-memory word (microcode), making the design easier to extend.

## Exam angle

For a "describe the fetch-decode-execute cycle" question, write in this order:

1. Define the cycle and name the PC and IR.
2. Fetch: PC → MAR; read memory → IR; PC + offset.
3. Decode: opcode → control unit; read registers.
4. Execute + memory + write-back: ALU operation and result destination.
5. Mention pipelining and hazards as the natural extension.

> Tip: if asked "stored program vs Harvard," mention that von Neumann uses one
> memory for code+data (self-modifying code risk), while Harvard keeps them
> separate (common in microcontrollers and CPU caches).
