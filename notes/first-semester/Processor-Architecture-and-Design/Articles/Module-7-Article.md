# Module 7 Article: Virtualization and the Illusion of Dedicated Hardware

## The big idea

Multiple programs run on one computer, yet each behaves as though it **owns** the
CPU, the memory, and the devices. This **illusion of dedicated hardware** is the
central trick of modern computing — and it is achieved purely by software
abstraction layers backed by a little hardware support.

## The three illusions and how each is built

### 1. CPU illusion: time-slicing

A single core can run only one program at a time, but the OS switches between
programs every **time slice** (a few milliseconds). Each program sees the CPU
almost continuously. Two classic forms:

- **Multiprogramming:** when a program blocks on I/O, switch to another.
- **Time sharing:** preempt with a **timer interrupt** to keep all programs
  responsive.

### 2. Memory illusion: virtual address spaces

Every process uses a **virtual address space** and thinks memory starts at a
fixed low address and is all its own. The OS + **MMU** translate virtual →
physical (Module 8). Benefits:

- **Isolation:** one process cannot read or write another's memory.
- **Overcommit:** total virtual memory can exceed physical RAM.
- **Simplified code:** programs assume a flat, contiguous address space.

### 3. I/O illusion: files and drivers

Devices appear as ordinary **files** (`/dev/sda`, `COM1`, a TCP socket). The
program reads/writes as if it owned the device; the OS **driver** and the
device controller actually multiplex the physical device among all processes.

## Virtualization: selling whole machines

**Virtualization** wraps an entire machine and presents a **virtual machine (VM)**
to a guest OS, as if the guest owned dedicated hardware. A thin software layer —
the **hypervisor** — does the multiplexing.

- **Type 1 (bare-metal):** runs straight on the hardware (VMware ESXi, Xen,
  Microsoft Hyper-V). Higher performance, used in servers.
- **Type 2 (hosted):** runs as an application on a host OS (VirtualBox,
  VMware Workstation, Parallels). Convenient, slightly slower.

## Memory virtualization needs extra translation

Per-process virtual memory is already guest-virtual → host-physical. To run a VM,
the hypervisor adds a **second translation**: guest-virtual → guest-physical →
host-physical. Modern CPUs provide **nested paging** (Intel EPT / AMD RVI / ARM
Stage 2) to do both translations in hardware, so the overhead is tolerable.

## I/O virtualization

- **Emulation:** the hypervisor fakes a complete device in software. Portable
  but slow (e.g., an emulated Intel e1000 NIC).
- **Para-virtualization:** the guest knows it is virtualized and calls the
  hypervisor directly (virtio). Much faster.
- **Device assignment (VT-d/IOMMU):** the hypervisor maps a real device
  directly into a VM using an **I/O memory-management unit** for protection.

## Worked example: why isolation matters

Process A (browser) and Process B (banking app) both `malloc` and write memory.

- Without protection: B could read A's decrypted data via a stray pointer.
- With protection rings + virtual memory: A's pages are marked for A's address
  space only; any access by B raises a segmentation fault.

## Exam angle

For an isolation/virtualization question:

1. State the **illusion** (dedicated hardware) and why it matters (multipurpose,
   safe, efficient).
2. Name each illusion and the mechanism: CPU (time-slicing + timer), memory
   (page tables + MMU), I/O (files + drivers).
3. Add virtualization: hypervisor (Type 1/2), nested paging, emulated vs
   para-virtualized I/O.
4. Close with the trade-off: convenience and safety vs. overhead.

> Tip: distinguish **multiprogramming** (throughput) from **time sharing**
> (interactive response) — examiners like the contrast.
