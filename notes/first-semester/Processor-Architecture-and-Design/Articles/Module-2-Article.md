# Module 2 Article: Building Processors from Gates

## The big idea

Every digital computer is built, at the bottom, from **logic gates** that
combine 0s and 1s. Combinational gates make decisions "now"; flip-flops add
memory so machines can "remember." Stacking these gives registers, adders, and
finally the datapath and control of a real CPU.

## Logic gates and combinational circuits

A **bit** is 0 (LOW) or 1 (HIGH). The basic gates:

```
NOT : Y = ¬A
AND : Y = A·B
OR  : Y = A + B
XOR : Y = A ⊕ B
NAND: Y = ¬(A·B)   (universal)
NOR : Y = ¬(A + B)  (universal)
```

Because NAND and NOR are **universal**, you can build any Boolean function using
only one of them. A **combinational** circuit's output depends **only** on
current inputs — think of it as a pure function of the inputs.

### Building an adder

A **half-adder** adds two 1-bit numbers:

```
Sum   = A ⊕ B
Carry = A · B
```

A **full-adder** takes a carry-in, letting us chain them for multi-bit addition:

```
S  = A ⊕ B ⊕ Cin
Cout = (A·B) + (Cin·(A ⊕ B))
```

Four full adders chained = a 4-bit adder. This same structure appears inside the
ALU that every CPU uses.

## Sequential logic and the D flip-flop

The key missing piece from combinational logic is **memory**: a way to hold a
value. The **D flip-flop** is the workhorse:

```
On the rising clock edge:  Q ← D
Otherwise: Q holds its last value
```

Two rules matter:

- **Setup time:** D must be stable *before* the clock edge.
- **Hold time:** D must stay stable *after* the clock edge.

Violating either → **metastability** (the output is unpredictable). A **register**
is several flip-flops sharing a clock; a **register file** is a bank of
registers you can address by number.

## From gates to a finite-state machine

A **finite-state machine (FSM)** is the bridge from gates to control logic:

- **State:** the current memory (stored in flip-flops).
- **Input:** observed now.
- **Output:** produced now.
- **Next-state logic:** combinational function of (current state, input).

Example: a light controller with states `OFF → ON → BLINK → OFF`. The state
flip-flops remember where we are; combinational logic decides, for each input,
the next state and the lights' outputs.

### The counter worked example

A 2-bit counter cycles `00 → 01 → 10 → 11 → 00`:

```
Present (Q1 Q0)  Next (Q1* Q0*)
00              01      (D1=0, D0=1)
01              10      (D1=1, D0=0)
10              11      (D1=1, D0=1)
11              00      (D1=0, D0=0)
```

Truth-table → Karnaugh map → equations:

```
D0 = ¬Q0        (toggle every step)
D1 = Q1 ⊕ Q0    (toggle every other step)
```

## Building blocks of a datapath

A CPU **datapath** is just an organized network of these building blocks:

- **Register file:** 32 registers you can read/write by number.
- **ALU:** add, subtract, AND, OR, shift.
- **Bus:** shared wires; a **multiplexer** selects which register drives it.
- **Control signals:** route operands, pick the ALU op, enable writes.

The **control unit** (next module) just produces the right pattern of control
signals for each instruction. So really, a CPU is: many gates, a few registers,
an ALU, and a controller that knows how to connect them.

## Exam angle

For a "design a circuit" question:

1. State the function in words, then the truth table.
2. Derive the minimal Boolean expression (K-map or algebra).
3. Draw the gate-level schematic with labels.
4. If sequential, specify the flip-flop input equations and the state table.

> Tip: when asked about flip-flop timing, always mention **setup** and **hold**
> time — marks reward the detail even for small questions.
