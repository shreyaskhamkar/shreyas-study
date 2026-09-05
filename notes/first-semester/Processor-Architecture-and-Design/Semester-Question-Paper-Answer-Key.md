# OCA-502 MJ — Model Answers and Marking Guide

## Q1 answer key

Award **1 mark** for the option and **1 mark** for a valid reason.

| No. | Answer | Reason and closest-distractor check | Module |
|---:|---|---|---:|
| 1 | B | Instructions and data reside in addressable memory; rewiring describes earlier fixed-program machines. | 1 |
| 2 | B | The PC supplies the fetch address; the IR holds the fetched instruction. | 1 |
| 3 | B | It sequences datapath activity using control signals; the ALU performs arithmetic. | 1 |
| 4 | B | NAND-only or NOR-only networks can express every Boolean function; universality is not about speed. | 2 |
| 5 | B | An edge-triggered flip-flop samples D at its active edge; a latch is level-sensitive. | 2 |
| 6 | C | Transition logic combines stored current state with inputs; the clock only times updates. | 2 |
| 7 | B | Data must travel both to and from CPU/memory; addresses are normally CPU-originated. | 3 |
| 8 | C | The chipset coordinates CPU-side and peripheral traffic; the ALU computes values. | 3 |
| 9 | B | The datapath stores/transforms values and the control unit directs it. | 3 |
| 10 | B | DRAM uses capacitor charge and periodic refresh; SRAM uses bistable cells. | 4 |
| 11 | B | Cycles equal instruction count × CPI, and seconds equal cycles × cycle time. | 4 |
| 12 | D | The 3C model is compulsory, capacity, and conflict; reads can suffer any of them. | 4 |
| 13 | B | Once full, an ideal pipeline completes one instruction each cycle, not one every five. | 5 |
| 14 | B | A dependency creates a data hazard when a consumer needs an unfinished producer result. | 5 |
| 15 | B | Bypassing supplies the result early; some hazards can still require stalls. | 5 |
| 16 | B | In a load/store ISA, ALU instructions use registers and only loads/stores touch memory. | 6 |
| 17 | A | Average access combines hit time with the probability-weighted miss penalty. | 6 |
| 18 | C | RISC-V is openly specified; ARM and x86 are proprietary ISAs. | 6 |
| 19 | B | Scheduling rapidly shares the processor, creating apparent continuous ownership. | 7 |
| 20 | B | Type 1 is bare-metal; Type 2 depends on a host operating system. | 7 |
| 21 | B | Type 2 executes as host software; it does not directly replace the host OS. | 7 |
| 22 | B | Address translation and paging provide a large isolated virtual space; they do not replace the OS. | 8 |
| 23 | A | A TLB is a small cache of recent page-table translations, not the full page table. | 8 |
| 24 | B | Dirty means modified since load, so eviction may require write-back. | 8 |
| 25 | C | It is caused synchronously by the current instruction, unlike an asynchronous device interrupt. | 9 |
| 26 | B | Short ISRs reduce latency and clear the source; blocking inside an ISR is unsafe. | 9 |
| 27 | B | A deliberate synchronous trap changes privilege and transfers control to the kernel. | 9 |
| 28 | A | Register/stack calling rules are binary ABI details while source-level calls may keep the same API. | 10 |
| 29 | B | Firmware initializes hardware, loads the bootloader, which loads the kernel, which starts init. | 10 |
| 30 | B | Direct device/register access uses privileged instructions unavailable in user mode. | 10 |

## Q2 model answers

1. The PC holds the address of the next instruction to fetch; the IR holds the current fetched instruction for decoding and execution. **Marks:** PC 1; IR 1. *(Module 1)*
2. A combinational circuit's output depends only on current inputs. A sequential circuit includes state, so output also depends on prior history. **Marks:** each definition 1. *(Module 2)*
3. The address bus selects a location, the data bus carries values, and the control bus carries signals such as read, write, and interrupt. **Marks:** names 1; accurate roles 1. *(Module 3)*
4. Temporal locality predicts reuse of recently accessed items; spatial locality predicts access to nearby addresses. Caches exploit both. **Marks:** each definition 1. *(Module 4)*
5. A data hazard occurs when an instruction needs a result still being produced. Forwarding routes that result directly to the consumer before register write-back, though some cases still stall. **Marks:** hazard 1; forwarding 1. *(Module 5)*
6. A virtual address belongs to a process's logical address space; the MMU translates it through page tables/TLB into a physical RAM address. **Marks:** distinction 1; translation 1. *(Module 8)*
7. An interrupt is usually asynchronous and external, an exception is synchronous and instruction-caused, and a trap is an intentional synchronous transfer such as a system call. **Marks:** any two accurate distinctions 1 each. *(Module 9)*

## Q3 model answers

1. The PC addresses an instruction, memory returns it to the IR, the control unit decodes it, operands are read, the ALU executes, memory may be accessed, and a result is written back. The datapath contains registers, buses, and functional units; the control unit generates signals selecting their operations and updates the PC. **Rubric:** fetch 1; decode 1; execute/write-back 1; datapath 1; control 1. *(Modules 1 and 3)*
2. SRAM is fast, expensive, and uses bistable cells without refresh; DRAM is denser, cheaper, and capacitor-based with refresh. Cache uses fast SRAM and temporal/spatial locality to serve most requests quickly. `AMAT = hit time + miss rate × miss penalty`; reducing either misses or penalty lowers average time. **Rubric:** SRAM 1; DRAM 1; locality 1; hierarchy 1; AMAT 1. *(Module 4)*
3. The stages are IF, ID, EX, MEM, and WB. Overlap raises throughput toward one completion per cycle. Structural hazards compete for hardware, data hazards involve dependencies, and control hazards arise from uncertain branches. Duplication/scheduling, forwarding/stalls, and prediction/flushes respectively mitigate them. **Rubric:** stages 1; overlap 1; three hazards 2; mitigations 1. *(Module 5)*
4. Firmware performs hardware initialization, the bootloader loads the kernel, the kernel starts `init`, and services launch user applications. An API is a source-level interface; an ABI defines binary conventions; an ISA defines programmer-visible machine operations; microarchitecture is the hardware implementation of an ISA. **Rubric:** boot sequence 1; API 1; ABI 1; ISA 1; microarchitecture 1. *(Modules 6 and 10)*

