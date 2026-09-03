# Module 3: Architecture of a Computer System

[← Previous: Module 2](<Module-2.md>) · [Subject index](README.md) · [Next: Module 4 →](<Module-4.md>)

## Learning outcomes

After this module, you should be able to:

- identify the core components of a computer system and their roles;
- explain the function of the system bus and bus hierarchy;
- describe the internal structure of the CPU: datapath and control unit;
- contrast a hardwired system with a general-purpose PC.


## Prerequisites

Complete [Module 2](Module-2.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Core components | 10-15 minutes |
| 3 | Processor interfaces and chipset role | 10-15 minutes |
| 4 | CPU internal structure: datapath and control | 10-15 minutes |
| 5 | State-based circuit design (review from Module 2) | 10-15 minutes |
| 6 | Bus elements | 10-15 minutes |
| 7 | System bus and bus hierarchy | 10-15 minutes |
| 8 | CPU components (in detail) | 10-15 minutes |
| 9 | Hardwired systems to general-purpose PC | 10-15 minutes |


## Start here: the simple idea

A computer is a collection of components that pass data along shared wires. The
key idea is **structure**: the CPU, memory, and I/O are connected by buses, and
the chipset routes traffic between them. The more standard the interface, the
more general-purpose the machine.

### Everyday analogy

Think of a city:

- **CPU** = the town hall where decisions are made.
- **Memory** = the city archive where records are stored.
- **I/O devices** = post office and railway station.
- **Buses** = the roads connecting everything.
- **Chipset** = the traffic control tower that decides which vehicle goes where
  and when, so the roads don't jam.

## Core components

| Component | Role |
|---|---|
| CPU | Executes instructions: fetches, decodes, executes. |
| Main memory (RAM) | Holds the program and data currently in use. |
| Input/output (I/O) | Lets the CPU talk to keyboards, disks, screens. |
| System bus | Wires connecting CPU, memory, and I/O. |
| Chipset | Coordinates traffic on the buses. |

## Processor interfaces and chipset role

In MiniCPU the CPU talks to memory and I/O through a single interface: the bus.
In a real PC the chipset (traditionally called **northbridge** and
**southbridge**, or **CPU socket → PCH → devices**) bridges the very fast CPU
side to slower peripherals:

- **Northbridge (or direct CPU links):** memory controller, high-speed PCIe lanes.
- **Southbridge / PCH:** slower devices: USB, SATA, audio, network, legacy I/O.

The chipset handles **arbitration** (deciding which device gets the bus) and
**translation** (e.g. address decoding, interrupt routing).

## CPU internal structure: datapath and control

The CPU has two tightly linked parts:

1. **Datapath:** the data-carrying hardware — registers, ALU, buses, multiplexers.
2. **Control unit:** the decision-making hardware — generates control signals.

In MiniCPU the datapath is built from the single-cycle design introduced in
Module 1: a register file, an ALU, an adder for the PC+4, and multiplexers that
select operand sources. The control unit reads the opcode and raises signals
like `ALUOp`, `RegDst`, `MemRead`, `MemWrite`, and `RegWrite`.

### Control unit

Two classic styles:

- **Hardwired control:** the control signals are produced directly by a fixed
  logic circuit that decodes the opcode. Fast, but hard to change.
- **Microprogrammed control:** each instruction's control signals are stored as a
  **microprogram** in control memory. Flexible and easier to extend.

## State-based circuit design (review from Module 2)

A multi-cycle CPU uses the same idea as a state machine: the same datapath is
reused across several **control steps**, each step being one state.

```
InstructionFetch → Decode → ReadReg → Execute → Memory → WriteBack → back to Fetch
```

Each arrow corresponds to a state, and the control unit advances the state
based on the decoded instruction and status flags.

## Bus elements

A bus is a shared set of wires, but only one device should drive them at a time.
**Bus elements** solve this:

- **Tri-state buffer / driver:** outputs either data or a high-impedance (off)
  state.
- **Multiplexer:** selects one of several inputs onto a single output line.
- **Decoder:** activates one of several devices (e.g. chip select lines).

## System bus and bus hierarchy

The **system bus** has three kinds of lines:

| Bus | Carries | Direction |
|---|---|---|
| Data bus | actual data and instructions | Bidirectional |
| Address bus | memory/IO address | CPU → rest |
| Control bus | read/write, interrupts, clock | Mostly CPU → rest; some bidirectional |

### Bus hierarchy

A single bus is too slow for a modern system. Modern CPUs use a **bus
hierarchy**:

- **System bus** (motherboard) connects CPU, memory, and main chipset.
- **Front-side / memory bus** (or Infinity Fabric / UPI) connects CPU to RAM.
- **PCIe lanes** connect CPU to GPU, NVMe, network.
- **Peripheral buses** (USB, SATA, I2C) connect to the chipset for low-speed devices.

Each level trades speed, width, and distance differently; faster closer, slower
farther.

## CPU components (in detail)

A modern general-purpose CPU contains:

- **Register file:** 32 integer registers (R0–R31 in RISC), special registers
  (PC, IR, flags) in simple designs; more in real CPUs.
- **Arithmetic Logic Unit (ALU):** integer arithmetic and logic.
- **Floating-point unit (FPU):** floating-point arithmetic.
- **Control unit:** hardwired or microprogrammed control.
- **Caches:** L1 (split I and D), L2, L3 (see Module 4).
- **Pipelines:** overlapping instruction execution (see Module 5).
- **Branch predictor:** guesses the outcome of branches.
- **MMU (Memory Management Unit):** translates virtual → physical addresses.

## Hardwired systems to general-purpose PC

- A **hardwired/special-purpose** system (e.g. a traffic light controller or a
  simple microcontroller) runs one fixed program in ROM. It is cheap and fast
  but cannot be reprogrammed for other tasks.
- A **general-purpose PC** can load and run any compatible program from disk.
  This flexibility comes from a standardized OS, a programmable ISA, and
  standard buses (PCIe, USB, SATA). The same MiniCPU can, in principle, run any
  program that matches its ISA — that is the stored-program idea from Module 1.

## Common mistakes

- Calling the chipset "just a cable." It actively arbitrates and decodes.
- Forgetting that the data bus is bidirectional but the address bus mostly is not.
- Mixing up "system bus" (one shared bus) with "bus hierarchy" (many layers).

## Memory rules

- CPU + control = executes instructions.
- Memory + storage = data at rest.
- I/O = communication with the outside.
- Buses = wires; chipset = traffic control.
- Hardwired = fixed program; general-purpose = loads any program.

## Check your understanding

1. Which component stores the instructions currently in use?
2. What is the difference between the data bus and the address bus?
3. Name the two parts of the CPU internal structure.
4. What signal decides which device "owns" a shared bus?
5. What is the key difference between a microcontroller and a general-purpose PC?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Main memory (RAM).
2. Data bus carries data and is bidirectional; address bus carries addresses and
   is (mostly) output-only from the CPU.
3. The datapath (registers, ALU, buses) and the control unit (control signals).
4. **Arbitration** signals / tri-state enable lines (chip-select via a decoder).
5. A microcontroller runs one fixed program in ROM; a general-purpose PC can
   load and run any compatible program.

</details>

## Quick revision box

- Core parts: CPU, memory, I/O, buses, chipset.
- CPU = datapath + control unit.
- System bus: data (bidirectional), address (CPU→rest), control.
- Bus hierarchy: fast/inner (memory/CPU) → slow/outer (peripherals).
- Hardwired = fixed function; general-purpose PC = runs any program.

## Exam guidance

Draw the relevant block or timing diagram, label data movement, show the calculation, and explain the performance consequence.

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
