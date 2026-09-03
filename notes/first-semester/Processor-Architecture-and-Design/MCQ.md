# Processor Architecture and Design — MCQ (Multiple Choice Questions)

## Module 1: Introduction to Computing Systems

**1. The stored-program concept means that:**
a) Instructions are stored on punch cards, separate from data
b) Instructions and data are stored together in the same memory
c) Every program requires rewiring the hardware to load
d) Data is kept only in registers

**2. In MiniCPU, the program counter (PC) normally increments by:**
a) 1 byte
b) 4 bytes
c) 8 bytes
d) 16 bytes

**3. The control unit of the CPU:**
a) Performs arithmetic and logic operations
b) Generates control signals that route data between registers, ALU, and memory
c) Stores the program permanently in ROM
d) Acts as the arithmetic calculator

## Module 2: Digital Electronics

**4. NAND and NOR gates are called "universal" because:**
a) They are the fastest logic gates
b) Any Boolean function can be built from NAND or NOR alone
c) They consume no power
d) They have exactly two inputs

**5. A D flip-flop updates its output Q:**
a) Whenever the D input changes
b) On the active clock edge (rising edge)
c) Only when an enable signal is high
d) Continuously, like a latch

**6. In a finite-state machine, the next state is determined by:**
a) The inputs only
b) The current state only
c) The current state and the inputs
d) The clock signal only

## Module 3: Architecture of a Computer System

**7. The data bus in a system bus is:**
a) Unidirectional, from CPU to memory
b) Bidirectional, carrying data and instructions
c) Only used for addresses
d) Only used for control signals

**8. The component that arbitrates and routes traffic between the fast CPU side and slower peripherals is the:**
a) Register file
b) Arithmetic Logic Unit
c) Chipset
d) Cache controller

**9. The two tightly-linked parts inside a CPU are:**
a) Cache and MMU
b) Datapath and control unit
c) ALU and FPU
d) Register file and buses

## Module 4: Memory Systems and Hierarchy

**10. DRAM stores each bit as:**
a) A stable flip-flop value
b) A charge in a capacitor, refreshed periodically
c) A magnetic domain
d) An electric field in an insulator

**11. CPU execution time is best expressed as:**
a) Instruction count x clock frequency
b) Instruction count x CPI x cycle time
c) CPI + clock frequency
d) Clock frequency / instruction count

**12. Which of the following is NOT a standard cache-miss type?**
a) Compulsory (cold) miss
b) Capacity miss
c) Conflict miss
d) Read miss

## Module 5: Performance Optimization Techniques

**13. In an ideal 5-stage pipeline (IF-ID-EX-MEM-WB), the steady-state throughput is:**
a) One instruction every 5 cycles
b) One instruction per cycle
c) Five instructions per cycle
d) One instruction per 5-stage delay slot

**14. A data hazard occurs when:**
a) Two instructions need the same hardware resource at once
b) An instruction needs a result that a previous instruction has not yet written
c) The next program counter is unknown after a branch
d) The cache is too slow to supply memory

**15. Forwarding (bypassing) in a pipeline:**
a) Eliminates all pipeline hazards
b) Routes an ALU result directly to the input of the next stage, skipping write-back
c) Increases the clock frequency
d) Predicts the outcome of branches

## Module 6: Instruction Set Architecture

**16. The feature that most cleanly distinguishes RISC from CISC is:**
a) The number of opcodes
b) The load/store discipline (only load/store access memory)
c) The instruction length
d) The number of general-purpose registers

**17. The cache average memory access time (AMAT) is:**
a) Hit time + Miss rate x Miss penalty
b) Hit time x Miss rate
c) Hit time + Miss penalty
d) Hit time / Miss rate

**18. Which of these ISAs is open-standard and free to use?**
a) x86
b) ARM
c) RISC-V
d) MIPS

## Module 7: Abstractions for Effective System Use

**19. Time-sharing gives a program the illusion that:**
a) It has unlimited RAM
b) It owns the CPU continuously
c) It can execute privileged instructions
d) It has more registers than physically exist

**20. A Type 1 hypervisor:**
a) Runs as an ordinary application on a host OS
b) Runs directly on the hardware (bare metal)
c) Is the guest operating system
d) Runs in the computer's ROM

**21. A Type 2 hypervisor (e.g., VirtualBox) runs:**
a) Directly on the hardware
b) As an application on top of a host OS
c) Inside every guest VM at once
d) Only in protected mode

## Module 8: Virtual Memory Systems

**22. Virtual memory uses secondary storage mainly to:**
a) Replace the operating system
b) Give each process an address space larger than physical RAM
c) Cache the page table
d) Store the BIOS

**23. The Translation Lookaside Buffer (TLB) is:**
a) A cache of recent virtual-to-physical address translations
b) The page table stored in DRAM
c) A CPU register holding the program counter
d) A disk buffer for paging

**24. In a page-table entry, the dirty bit being set means:**
a) The page is executable
b) The page has been written and must be written back to disk
c) The page is not present in RAM
d) The page is shared between processes

## Module 9: Interrupts and Exception Handling

**25. A divide-by-zero error raised by executing an instruction is a:**
a) Maskable hardware interrupt
b) Non-maskable interrupt
c) Synchronous exception
d) Software system call trap

**26. A good rule for an Interrupt Service Routine (ISR) is to:**
a) Perform all required work fully inside the ISR
b) Be fast, clear the interrupt source, and defer the rest
c) Run in user mode to avoid crashing the system
d) Use blocking calls to wait for resources

**27. A system call is implemented at the hardware level as:**
a) An asynchronous maskable interrupt from a device
b) A software-triggered synchronous trap into the kernel
c) A non-maskable interrupt
d) A segmentation fault

## Module 10: System Interface and Execution

**28. Changing the calling convention (e.g., which registers hold arguments) breaks the ___ but usually not the ___:**
a) ABI, API
b) API, ABI
c) both API and ABI
d) neither

**29. The PC boot sequence order is:**
a) Kernel -> firmware -> bootloader -> init
b) Firmware -> bootloader -> kernel -> init
c) Bootloader -> firmware -> kernel -> init
d) Init -> firmware -> bootloader -> kernel

**30. A device driver must run in kernel (protected) mode because:**
a) User mode is slower than kernel mode
b) Hardware access requires privilege
c) Drivers need more RAM than user mode provides
d) Kernel mode has direct access to disk encryption

## Answers (key only)

<details>
<summary>Reveal answers after attempting the questions</summary>

1-b, 2-b, 3-b, 4-b, 5-b, 6-c, 7-b, 8-c, 9-b, 10-b, 11-b, 12-d, 13-b, 14-b, 15-b, 16-b, 17-a, 18-c, 19-b, 20-b, 21-b, 22-b, 23-a, 24-b, 25-c, 26-b, 27-b, 28-a, 29-b, 30-b.

</details>

## Extended practice: Questions 31–70

| No. | Question | A | B | C | D |
|---:|---|---|---|---|---|
| 31 | During fetch, the address of the next instruction comes from the: | IR | PC | ALU | MDR |
| 32 | The instruction register holds the: | Current instruction | Next data address | Stack top | Cache tag |
| 33 | Which unit performs addition and logical AND? | Control unit | ALU | MMU | DMA controller |
| 34 | An ISA specifies the programmer-visible: | Transistor layout | Instructions, registers, and data formats | Cache brand | Clock crystal |
| 35 | What is decimal 13 in binary? | `1010` | `1011` | `1101` | `1110` |
| 36 | A sequential circuit differs because it contains: | No gates | State/memory | Only adders | No clocked elements |
| 37 | A multiplexer: | Stores a bit | Selects one of several inputs | Adds two words | Decodes memory |
| 38 | What is the range of an 8-bit two's-complement integer? | −127 to 127 | −128 to 127 | 0 to 255 | −128 to 128 |
| 39 | The address bus is usually: | CPU-to-memory/I/O | Always bidirectional | Device-to-CPU only | Analog |
| 40 | Clock rate measures: | Instructions per program | Cycles per second | Cache misses only | Bytes per address |
| 41 | The register file provides: | Slow permanent storage | Fast operand storage near the ALU | Disk paging | Device arbitration |
| 42 | DMA improves I/O by allowing: | Devices to transfer blocks with limited CPU intervention | Cache to replace RAM | User code to enter kernel mode | ALU to access disk directly |
| 43 | Temporal locality means recently used data is: | Never reused | Likely to be reused soon | Stored sequentially | Always in ROM |
| 44 | Spatial locality means nearby addresses are: | Likely to be accessed soon | Always identical | Never cached | Virtual only |
| 45 | A direct-mapped cache permits a memory block in: | Any cache line | Exactly one cache line | Two lines only | Main memory only |
| 46 | Write-through updates: | Cache only | Lower memory on every cache write | Disk only on eviction | Registers only |
| 47 | A RAW pipeline hazard is a: | True data dependency | Control hazard | Structural conflict | Cache mapping rule |
| 48 | Forwarding primarily reduces: | RAW stalls | Branch instructions | Clock frequency | Cache capacity misses |
| 49 | A branch creates primarily a: | Structural hazard | Control hazard | Write policy | Page fault |
| 50 | Ideal speedup of a deep pipeline is limited in practice by: | Hazards and stage imbalance | Larger disks | APIs | Source language only |
| 51 | RISC commonly favors: | Simple fixed-length instructions | Many memory-to-memory operations | Microcode only | Variable operands always |
| 52 | CISC commonly provides: | Only load/store arithmetic | More complex and often variable-length instructions | No addressing modes | No compatibility |
| 53 | Microarchitecture is: | The implementation of an ISA | A source-code API | A file system | A data type |
| 54 | Load/store architecture means arithmetic usually operates on: | Memory operands directly | Registers | Disk blocks | Page tables |
| 55 | Time slicing virtualizes the: | CPU | Instruction encoding | Cache line | Data bus width |
| 56 | A process is best described as: | A program in execution with state/resources | A source file only | A CPU register | A page-table entry |
| 57 | Privileged instructions execute in: | User mode | Kernel/supervisor mode | Text mode | Cache mode |
| 58 | A context switch saves and restores: | Process CPU state | Entire disk | Source code | Cache technology |
| 59 | Paging divides virtual memory into: | Variable segments only | Fixed-size pages | Instructions | Registers |
| 60 | A page fault occurs when a referenced page: | Is not currently present as required | Has a TLB hit | Is in L1 cache | Is read-only always |
| 61 | Increasing page size generally makes page tables: | Larger | Smaller | Unrelated to entry count | Impossible |
| 62 | TLB miss and page fault are: | Always the same | Different; the page may still be in RAM | Both disk errors | Both interrupts from I/O |
| 63 | A hardware timer signal is usually a: | Synchronous exception | Asynchronous interrupt | Function call | Cache miss |
| 64 | An exception caused by the current instruction is: | Synchronous | Always asynchronous | Always maskable | A DMA transfer |
| 65 | An interrupt vector maps an event to: | Its handler address | A cache set | A process name | A disk cylinder |
| 66 | Returning from an interrupt must restore: | Saved execution context | Source text | Firmware image | Entire RAM |
| 67 | An API is primarily a: | Source-level programming interface | Binary calling convention | Page-table design | Logic gate |
| 68 | An ABI defines details such as: | Calling convention and binary layout | Algorithm pseudocode only | UI colors | Research ethics |
| 69 | Firmware normally runs before the: | Bootloader | Power supply | CPU reset | Clock signal |
| 70 | A system call changes privilege through a: | Controlled trap/gateway | Normal arithmetic add | Cache eviction | Bus reset |

## Extended answer key

31-B, 32-A, 33-B, 34-B, 35-C, 36-B, 37-B, 38-B, 39-A, 40-B,
41-B, 42-A, 43-B, 44-A, 45-B, 46-B, 47-A, 48-A, 49-B, 50-A,
51-A, 52-B, 53-A, 54-B, 55-A, 56-A, 57-B, 58-A, 59-B, 60-A,
61-B, 62-B, 63-B, 64-A, 65-A, 66-A, 67-A, 68-A, 69-A, 70-A.
