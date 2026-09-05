# M.C.A. (Online Mode) Semester I Examination

**Paper Code:** OCA-502 MJ  
**Title:** Processor Architecture and Design  
**Time:** 3 Hours  
**Maximum Marks:** 70

## Q1) Multiple Choice Questions with reasoning — answer any 25 of 30 [25 × 2 = 50]

For every attempted question, select one option and give a brief reason.

| No. | Question | A | B | C | D |
|---:|---|---|---|---|---|
| 1 | The stored-program concept means that: | Instructions are separate from data | Instructions and data share memory | Hardware must be rewired | Data stays only in registers |
| 2 | During fetch, the next instruction address comes from the: | IR | PC | ALU | MDR |
| 3 | The control unit primarily: | Calculates arithmetic | Generates control signals | Stores programs permanently | Replaces the datapath |
| 4 | NAND and NOR are universal because: | They are fastest | Either can implement any Boolean function | They use no power | They have two inputs |
| 5 | A D flip-flop normally updates Q: | Whenever D changes | On the active clock edge | Only without a clock | Continuously like a latch |
| 6 | An FSM's next state depends on: | Inputs only | Current state only | Current state and inputs | Clock frequency only |
| 7 | The data bus is normally: | CPU-to-memory only | Bidirectional | Address-only | Control-only |
| 8 | Which component routes traffic between the fast CPU side and slower peripherals? | Register file | ALU | Chipset | Instruction register |
| 9 | The two central CPU parts are: | Cache and MMU | Datapath and control unit | ALU and disk | ROM and buses |
| 10 | DRAM stores a bit as: | A stable flip-flop | Capacitor charge needing refresh | A magnetic domain | A fuse |
| 11 | CPU execution time equals: | instruction count × clock rate | instruction count × CPI × cycle time | CPI + clock rate | clock rate ÷ instructions |
| 12 | Which is not a standard cache-miss class? | Compulsory | Capacity | Conflict | Read |
| 13 | An ideal five-stage pipeline's steady throughput is: | One instruction per five cycles | One instruction per cycle | Five per cycle | One per delay slot |
| 14 | A data hazard occurs when: | Two instructions need one resource | A needed result is not yet available | A branch target is unknown | A cache misses |
| 15 | Forwarding does what? | Removes every hazard | Routes a result to a later stage before write-back | Raises clock rate | Predicts branches |
| 16 | Which feature best identifies a load/store RISC design? | Opcode count | Only loads/stores access memory | Variable instruction length | Few registers |
| 17 | AMAT is: | hit time + miss rate × miss penalty | hit time × miss rate | hit time + miss penalty | hit time ÷ miss rate |
| 18 | Which ISA is an open standard? | x86 | ARM | RISC-V | 68000 |
| 19 | Time-sharing gives each process the illusion that it: | Has unlimited RAM | Owns the CPU continuously | May execute privileged instructions | Has extra registers |
| 20 | A Type 1 hypervisor runs: | As a host application | Directly on hardware | Inside each guest | In firmware only |
| 21 | A Type 2 hypervisor runs: | On bare metal | On a host OS | In every guest | Only in protected ROM |
| 22 | Virtual memory primarily gives each process: | A replacement OS | A large private address space | A cache-only address | BIOS storage |
| 23 | A TLB caches: | Address translations | Whole page tables only | Instructions | Disk blocks |
| 24 | A set dirty bit means the page: | Is executable | Has been written | Is absent | Is shared |
| 25 | Divide-by-zero during instruction execution is a: | Hardware interrupt | NMI | Synchronous exception | DMA request |
| 26 | A good ISR should: | Do all work inside it | Be fast and defer noncritical work | Run in user mode | Block for resources |
| 27 | A system call enters the kernel through a: | Device interrupt | Software-triggered synchronous trap | Power failure | Cache miss |
| 28 | Changing a calling convention breaks the: | ABI, usually not API | API, usually not ABI | Cache only | ISA only |
| 29 | The normal PC boot order is: | Kernel, firmware, bootloader, init | Firmware, bootloader, kernel, init | Bootloader, firmware, init, kernel | Init, firmware, kernel, bootloader |
| 30 | Device drivers need kernel privilege because: | User mode is slower | Hardware access is privileged | Drivers always need more RAM | Encryption requires it |

## Q2) Answer any five in approximately two sentences [5 × 2 = 10]

1. State the roles of the PC and IR during the instruction cycle.
2. Distinguish combinational and sequential circuits.
3. Name the address, data, and control buses and state one role of each.
4. Distinguish temporal and spatial locality.
5. What is a pipeline data hazard, and how can forwarding help?
6. Distinguish virtual and physical addresses.
7. Differentiate an interrupt, an exception, and a trap.

## Q3) Answer any two in approximately ten lines [2 × 5 = 10]

1. Explain the fetch–decode–execute cycle and the roles of the datapath and control unit.
2. Compare SRAM and DRAM, then explain how cache exploits locality to reduce AMAT.
3. Explain the five-stage instruction pipeline and the three classes of pipeline hazard.
4. Trace the boot path from firmware to user applications and distinguish API, ABI, ISA, and microarchitecture.

