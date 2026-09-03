# Module 10: System Interface and Execution

[← Previous: Module 9](<Module-9.md>) · [Subject index](README.md) · [MCQ practice →](MCQ.md)

## Learning outcomes

After this module, you should be able to:

- distinguish API and ABI and explain why each matters;
- describe system calls and how programs request services from the OS;
- explain protected mode and driver interactions;
- describe startup scripts and the bootstrapping process;
- identify common architectural (ABI/API) compatibility issues.


## Prerequisites

Complete [Module 9](Module-9.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | API vs ABI: definition and distinction | 10-15 minutes |
| 3 | Decoding architectural issues | 10-15 minutes |
| 4 | Role of system calls (overview) | 10-15 minutes |
| 5 | API vs ABI theory | 10-15 minutes |
| 6 | Protected mode basics and driver interactions | 10-15 minutes |
| 7 | Startup scripts and system bootstrapping | 10-15 minutes |


## Start here: the simple idea

When software talks to the operating system or to hardware, it uses agreed
**interfaces**. A **system call** is the program's request to the OS
("open this file," "allocate memory"). The **API** and **ABI** are
contracts that let programs and libraries work together across compilers and
even different operating systems.

### Everyday analogy

- An **API** is like a restaurant menu: it lists dishes (functions) and what you
  get, without showing the kitchen.
- An **ABI** is like the exact plate size, cutlery placement, and payment
  format the kitchen expects — if the format changes, old waiters break.

## API vs ABI: definition and distinction

| Aspect | API (Application Programming Interface) | ABI (Application Binary Interface) |
|---|---|---|
| Level | Source code | Binary |
| Checked when | Compile/link | Load/run |
| Covers | Function names, arguments, return types, headers | Calling convention, register usage, name mangling, struct layout, library format |
| Example change | Rename a parameter (if types stay same) — still compiles | Change struct field order — already-compiled .so breaks |
| Stability goal | Readable, documented, evolvable | Backward-compatible binary contract |

**Example:** A C library exposes `int add(int, int);` (API). The ABI also fixes
that arguments go in registers/stack in a specific order, that `int` is 32 bits,
and that the symbol is named `add` (or `__add` if mangled). A C++ compiler
mangles names differently, so C++ cannot link to a C library unless the ABI is
agreed at the boundary (`extern "C"`).

## Decoding architectural issues

### Part 1: Calling convention

The **calling convention** defines *how* arguments and return values are
passed: which registers vs stack, who cleans the stack (callee vs caller),
and which registers must be preserved. Differences (e.g., x86-32 `stdcall` vs
`x86-64 System V`) break binary compatibility.

### Part 2: Data representation

- **Endianness:** byte order. Little-endian (x86): least-significant byte first.
  Big-endian (network byte order, classic ARM): most-significant byte first.
- **Alignment & padding:** `struct { char; int; }` may be padded to 8 bytes;
  changing it changes the binary layout.
- **Size of types:** `int`, `long`, and pointers differ across 32/64-bit ABIs
  (the classic "LLP64 vs LP64" problem).

## Role of system calls (overview)

A **system call** is the controlled entry point into the kernel. Common calls:

| Call | Purpose |
|---|---|
| `read` / `write` | I/O on file descriptors |
| `open` / `close` | file access |
| `fork` / `exec` / `wait` | process control |
| `mmap` / `brk` | memory management |
| `socket` / `send` / `recv` | networking |

### How a system call works (recap from Module 9)

The program sets up arguments, executes a privileged instruction
(`syscall`/`int 0x80`/`svc #0`), the CPU switches to kernel mode and dispatches
to the syscall handler, the OS performs the service, and returns the result.
This is the **same exception/trap mechanism**; the syscall is a *deliberate*
trap.

## API vs ABI theory

A stable API is easy to keep readable; a stable ABI is harder because binaries
are frozen. Strategies:

- **Symbol versioning:** keep old symbol names while providing new ones (glibc
  `GLIBC_2.2.5`, etc.).
- **Deprecation without removal:** mark old APIs deprecated but keep them.
- **Wrapper/compat layer:** translate old ABIs to new ones.
- **Avoid opaque struct layout:** use accessors, not direct field access, across
  the ABI boundary.

## Protected mode basics and driver interactions

### Protected mode

In **protected mode** (x86 term), the CPU uses segmentation and paging to give
each process a **virtual address space** and enforce **protection**:

- **Segmentation:** base + limit per segment → bounds checking.
- **Paging:** virtual → physical translation, per-page protection.
- **Privilege levels (rings 0–3):** only ring-0 code can execute privileged
  instructions (I/O, CLI/STI, HLT, etc.).

Protected mode is what makes the user/kernel separation (Module 9) possible and
is the foundation of virtual memory (Module 8).

### Drivers

A **device driver** is the kernel module that talks to hardware on behalf of
user programs. Interactions:

1. User opens `/dev/<name>` and issues `read`/`write`/`ioctl`.
2. The OS routes the request to the driver's file operations.
3. The driver programs the device (I/O ports / MMIO registers), possibly via
   DMA, and may use interrupts (Module 9) to know when I/O completes.
4. The driver returns data or a status.

Drivers run in **kernel mode** (ring 0) because hardware access is privileged;
this is also why a buggy driver can crash the whole system.

## Startup scripts and system bootstrapping

### Bootstrapping (boot)

Boot sequence (x86):

1. **BIOS/UEFI** firmware runs power-on self-test and initializes hardware.
2. Firmware reads the **bootloader** from a known device.
3. Bootloader loads the **kernel** image and an initial RAM disk (`initrd`).
4. Kernel initializes memory management, devices, mounts `rootfs`, and starts
   the first **init** process (PID 1).

### Startup scripts

- **Traditional:** `init` runs `/etc/inittab`, then SysV init scripts in
  `/etc/init.d/` with runlevels.
- **Modern:** `systemd` starts **units** (services, sockets, timers) in
  parallel, replacing init scripts. On macOS/BSD, `launchd`/`launchctl`.

Startup scripts configure networking, mount filesystems, and launch daemons and
the login shell — the system is now ready for users and services.

## Common mistakes

- Confusing API (source) with ABI (binary): a source-compatible change can still
  break the ABI.
- Ignoring endianness when reading multi-byte data across machines.
- Writing drivers that block or use non-reentrant code (like ISRs, they must be
  careful).
- Assuming protected mode is optional — virtually all modern OSes run in it.

## Memory rules

- API = source contract; ABI = binary contract.
- Calling convention + struct layout + type sizes define the ABI.
- System call = deliberate trap into the kernel (privileged service).
- Protected mode = virtual addresses + privilege levels + paging.
- Driver = kernel module that owns hardware access for a device.
- Boot = firmware → bootloader → kernel → init → startup scripts.

## Check your understanding

1. What is one change that can break an ABI but not the API?
2. How does a system call enter the kernel, at the hardware level?
3. Why must drivers run in kernel mode?
4. Name the four stages of the PC boot sequence in order.
5. What problem does symbol versioning solve?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Changing the layout of a `struct` (field order/ padding) breaks the ABI for
   code compiled against the old layout while the API (function name + types)
   stays the same.
2. The program executes a privileged instruction (e.g., `syscall`/`int 0x80`)
   which traps to kernel mode and dispatches via the interrupt vector to the
   syscall handler.
3. Hardware access (I/O ports, MMIO, privileged instructions) is restricted to
   ring 0; user mode cannot touch devices directly.
4. Firmware (BIOS/UEFI) → bootloader → kernel → init (PID 1), after which
   startup scripts bring up services.
5. Symbol versioning lets a library keep old binary symbols for old programs
   while exposing new symbols to new programs, preserving backward ABI
   compatibility.

</details>

## Quick revision box

- API = source contract; ABI = binary contract (calling convention, layout, sizes).
- System call = deliberate trap into the kernel; same hardware as interrupts.
- Protected mode = virtual memory + privilege rings (only ring 0 uses privileged I/O).
- Drivers = kernel modules owning hardware; interact via file ops (`read`/`ioctl`).
- Boot: firmware → bootloader → kernel → init → startup scripts (systemd/init.d).

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

[← Previous: Module 9](<Module-9.md>) · [Subject index](README.md) · [MCQ practice →](MCQ.md)
