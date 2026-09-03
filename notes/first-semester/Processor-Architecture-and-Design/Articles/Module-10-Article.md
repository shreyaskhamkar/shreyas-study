# Module 10 Article: API, ABI, and the System Call Boundary

## The big idea

For code to talk to an OS or another library without rewriting everything each
time, it needs a stable **interface**. Two layers matter:

- An **API** (application programming interface): the *source-level* contract —
  function names, argument types, and headers.
- An **ABI** (application binary interface): the *binary* contract — calling
  convention, name mangling, struct layout, and library format.

A program is source-compatible if it recompiles against a new version; it is
binary-compatible if the **existing executable** keeps running without
recompilation. ABIs are harder to keep stable, and that is where compatibility
breaks.

## API vs ABI, concretely

Consider a C function:

```c
int add(int a, int b);
```

- **API:** the signature `int add(int, int)` and the header `add.h`. If a new
  version renames a parameter or keeps the same types, the API is unchanged and
  old code recompiles fine.
- **ABI:** also specifies that `a` and `b` go in registers (e.g., `rdi`, `rsi`
  on x86-64 System V), the result comes back in `rax`, the symbol is literally
  `add` (not C++-mangled), and `int` is 32 bits. If any of these change, an
  already-compiled `.so` or executable breaks.

### A breaking ABI change that does not break the API

Reordering `struct` fields changes the binary offsets:

```c
struct S { char c; int i; };   // size 8 (1 + 3 pad + 4)
```

→

```c
struct S { int i; char c; };   // size 5 (different layout)
```

The type and field *names* are the same API, but compiled code that reads field
`c` at offset 4 now reads garbage. The ABI broke; the API didn't.

## System calls: the kernel entry point

A **system call** is the program's request for OS service. The path:

```
program sets args in registers → issue `syscall` instruction →
CPU switches to kernel mode → kernel dispatches handler →
kernel returns result → program resumes in user mode
```

### Example (x86-64 Linux)

```c
#include <unistd.h>
long _start() {
    const char msg[] = "hi\n";
    syscall(SYS_write, 1, msg, 2);   // write(fd=1, buf=msg, count=2)
    syscall(SYS_exit, 0);
}
```

At the ABI level this means: `rax = 1` (write), `rdi = fd`, `rsi = buf`,
`rdx = count`; the kernel returns the byte count in `rax`. The exact register
assignment **is the ABI**.

## Protected mode and drivers

**Protected mode** (x86) / **hypervisor mode** (ARM EL1) is the hardware
support that makes user/kernel separation real:

- Virtual addresses are translated (MMU) and **checked** against the
  process's page tables and ring 2/3 permissions.
- I/O instructions (`in`/`out`, accessing PCIe MMIO) are **privileged**; only
  ring 0 can execute them. A user `in` instruction traps to the kernel.
- The OS runs in **ring 0**; applications run in **ring 3**. Drivers are kernel
  modules — which is exactly why a bad driver can crash the whole system.

## Keeping binaries compatible

Operating systems keep old programs working through:

- **Symbol versioning** (glibc attaches `GLIBC_2.2.5`, `GLIBC_2.34`, … to each
  symbol so old and new callers link to the right version).
- **Deprecation without removal**: keep old symbols forever; add new ones.
- **Stable ABIs at the boundary**: POSIX APIs and the Linux syscall ABI are kept
  stable even as kernels evolve.

## Startup scripts and bootstrapping

### Boot

1. **Firmware (UEFI/BIOS):** runs POST, initializes hardware, selects a boot
   device.
2. **Bootloader (GRUB/systemd-boot):** reads its config, loads the **kernel**
   image and an **initrd** (initial RAM disk with early drivers).
3. **Kernel:** mounts `rootfs`, brings up memory management and devices, starts
   the first process, **init** (PID 1, or `systemd`).
4. **init/systemd:** bring up services in dependency order — this is what
   "startup scripts" used to mean (SysV `/etc/init.d/` scripts), now
   **systemd units** started in parallel.

### Startup scripts today

- `systemd` unit files replace `/etc/init.d/*` scripts.
- `systemctl enable <name>` marks a service to start at boot; `systemctl start`
  runs it now.
- The equivalent of "run level 3" is a target like
  `multi-user.target`; "run level 5" is `graphical.target`.

## Exam angle

For "API vs ABI":
1. Define both; stress that API = source-level, ABI = binary-level.
2. Give a concrete difference: changing struct layout breaks ABI, not API.
3. For system calls: trace the register setup + `syscall` + kernel-mode switch.
4. Mention protected mode gives ring 0 to the kernel (and drivers), ring 3 to
   applications.

> Tip: when comparing "API change that breaks ABI," **struct field
> reordering** is the textbook example examiners expect.
