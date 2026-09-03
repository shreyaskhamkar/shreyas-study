# Module 7: Abstractions for Effective System Use

[← Previous: Module 6](<Module-6.md>) · [Subject index](README.md) · [Next: Module 8 →](<Module-8.md>)

## Learning outcomes

After this module, you should be able to:

- explain the illusion of dedicated hardware per program;
- describe multiprogramming and resource virtualization;
- relate these abstractions to the CPU, memory, and I/O devices.


## Prerequisites

Complete [Module 6](Module-6.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | The illusion of dedicated hardware resources per program | 10-15 minutes |
| 3 | Multiprogramming and resource virtualization | 10-15 minutes |


## Start here: the simple idea

**Abstraction** in computing means hiding complicated details behind a simpler
interface. The goal is the **illusion of dedicated hardware**: every program
can act as though it alone owns the CPU, main memory, and devices, even though
many programs actually share them.

### Everyday analogy

Think of a university timetable: many classes share the same buildings and
classrooms, but the timetable gives each class the **illusion** that it has the
room to itself at its scheduled time. The scheduler (like the OS) makes sure
classes don't collide.

## The illusion of dedicated hardware resources per program

Each process is given the illusion that it has resources all to itself:

### 1. The CPU illusion

- The OS runs programs one at a time (on each core) for a short **time slice**,
  then switches. To each program, the CPU feels like it runs continuously.
- This is **multiprogramming** / **multitasking**: many programs make progress
  on a single CPU by rapid switching.

### 2. The memory illusion

- Each program references a **virtual address space** and believes it starts at
  a low, fixed address and is the only resident program.
- The MMU (Module 8) and OS translate virtual → physical addresses, mapping each
  program into different physical pages.
- This gives **memory protection** (one program can't corrupt another) and
  **memory-mapped files / devices**.

### 3. The I/O illusion

- Each program believes it has dedicated devices (a keyboard, a disk, a screen).
- The OS and device drivers multiplex devices: a process's "print" becomes a
  queue of jobs at a shared printer.

### 4. The file-system illusion

- Devices appear as **files** (`/dev/sda`, `COM1`, a directory). The program
  reads/writes files regardless of the underlying device — disk, network, or
  pipe.

### 5. Why the illusion matters

- **Multiplexing:** resources are shared efficiently (utilization up).
- **Protection isolation:** faults/misbehaviour in one process are contained.
- **Simplified programming:** write as if you own the machine.
- **Portability:** the same program runs on different hardware.

## Multiprogramming and resource virtualization

**Multiprogramming:** keep the CPU busy by loading several programs into memory
and switching between them. There are two classic forms:

- **Multiprogramming (batch):** load many jobs; CPU runs one until it does I/O,
  then the OS picks another ready job. Goal: keep CPU busy.
- **Time sharing (interactive multitasking):** give each process a **time slice**
  so interactive response stays good; the fast switching creates the illusion of
  parallelism on a single CPU.

### Resource virtualization

Virtualization wraps a resource behind a **virtual machine monitor (VMM)** or a
hypervisor, so an entire "virtual" machine can be presented to an OS image.

- The VMM maps virtual resources to real resources and enforces isolation.
- **Type 1 hypervisor:** runs directly on hardware (e.g., VMware ESXi).
- **Type 2 hypervisor:** runs as an application on a host OS (e.g., VirtualBox).
- Each virtual machine thinks it has its own CPU, memory, and I/O.

### Virtualization of the CPU

On a **virtual CPU**, the OS still thinks it owns the physical CPU and uses
trap-and-switch scheduling. On a hardware-multithreaded core, even the VMM may
present virtual CPUs mapped to hardware threads.

### Virtualization of memory

Each VM has its own virtual address space; the nested page tables (EPT/NPT) used
by modern CPUs translate guest-virtual → guest-physical → host-physical. This is
an extra layer on top of the per-process virtual memory of Module 8.

### Virtualization of I/O

Virtualized devices can be **emulated** (the hypervisor fakes the whole device,
slow but portable) or **para-virtualized** (guest is aware it's virtualized and
calls the hypervisor, fast). Modern hardware assists (VT-d/AMD-Vi) lets VMs use
real devices directly with I/O Memory Management Unit (IOMMU) protection.

## Common mistakes

- Thinking virtualization always helps performance (it adds a layer; overhead).
- Confusing multiprogramming with multiprocessing (multiple CPUs vs. shared CPU).
- Believing the per-program memory illusion is free (translation overhead + TLB).

## Memory rules

- Abstraction = hide detail behind a simpler interface.
- Illusion = each program thinks it owns the CPU, memory, and devices.
- Multiprogramming = keep CPU busy by switching jobs.
- Time sharing = time slices for interactive response.
- Virtualization = present a whole virtual machine instead of just a process.

## Check your understanding

1. What illusion does time-sharing create for a program?
2. How is the per-program memory illusion implemented?
3. Name two ways the OS gives the "dedicated I/O" illusion.
4. Distinguish a Type 1 and a Type 2 hypervisor.
5. What extra cost does virtualizing memory add beyond per-process virtual memory?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. That it has the CPU to itself, continuously, even though many programs switch
   on the same core.
2. By per-process virtual address spaces translated to physical memory by the
   MMU and the OS page table, giving each process an isolated address space.
3. Device drivers multiplex a shared physical device; devices appear as files
   (e.g. `/dev/...`, `COM1`); buffered I/O queues requests.
4. Type 1 runs directly on hardware (bare metal); Type 2 runs as an application
   on a host OS.
5. An additional translation layer (guest-virtual → guest-physical →
   host-physical, i.e., nested/second-level address translation) and its caching
   complexity.

</details>

## Quick revision box

- Abstraction hides complexity; the goal is "dedicated hardware" illusion.
- CPU illusion: time-slicing (multiprogramming/time-sharing).
- Memory illusion: per-process virtual address space via MMU + OS.
- I/O illusion: drivers + files map shared physical devices.
- Virtualization: hypervisor presents whole VMs; memory needs nested paging.

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

[← Previous: Module 6](<Module-6.md>) · [Subject index](README.md) · [Next: Module 8 →](<Module-8.md>)
