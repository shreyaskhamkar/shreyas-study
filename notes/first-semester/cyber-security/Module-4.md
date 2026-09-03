# Module 4: System & Application Security

## Learning outcomes

After completing this module, you should be able to:

- explain the central ideas in **Module 4: System & Application Security** using simple language;
- apply the main method or rules to a worked example;
- connect the topic to a practical computing scenario; and
- answer short and long university questions with clear steps.


## Prerequisites

Complete [Module 3](Module-3.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Chapter 1 — Security Architecture & Models | 10-15 minutes |
| 2 | Designing secure operating systems | 10-15 minutes |
| 3 | Information Security Models | 10-15 minutes |
| 4 | Computer architecture (CPU, memory, RAM, BIOS) and security | 10-15 minutes |
| 5 | Security components | 10-15 minutes |
| 6 | Desktop security | 10-15 minutes |
| 7 | Email security | 10-15 minutes |
| 8 | Web security | 10-15 minutes |
| 9 | Database security | 10-15 minutes |
| 10 | Wireless network security | 10-15 minutes |
| 11 | Computer forensics | 10-15 minutes |
| 12 | Steganography | 10-15 minutes |


## Chapter 1 — Security Architecture & Models

### Learning outcomes

After this chapter, you should be able to:

- describe defense-in-depth and the secure-boot chain;
- list the core information-security models and what each enforces;
- explain how CPU privilege levels, memory, and BIOS/UEFI contribute to security;
- summarize desktop, email, web, database, and wireless security controls;
- outline forensics, steganography, network security planning, incident
  response, and legal considerations.

### Start here: the simple idea

Security is not a single lock; it is **layers** (defense in depth). From the
silicon up — CPU rings, firmware, OS, apps — each layer enforces isolation and
control, and the outermost layers (desktop, network) keep attackers off the
inside.

### Everyday analogy

Think of securing a house:

- Foundation + walls (CPU/firmware) — the base layer you never see.
- Locked doors and alarms (OS + apps) inside.
- Outer gates and cameras (network security) outside.

## Designing secure operating systems

### Security controls

- **Prevention:** stop bad things (firewalls, access control, secure coding).
- **Detection:** spot breaches (IDS, logs, anti-malware).
- **Recovery:** restore after compromise (backups, DR, incident response).

### Defense in depth

Stack multiple independent controls so if one fails, others hold:

```text
Physical → Firmware → Kernel (rings) → OS → App → Data
```

### The secure boot chain

1. **Firmware (BIOS/UEFI):** immutable root of trust; verifies the bootloader.
2. **Bootloader:** verifies the OS kernel (e.g., UEFI Secure Boot, dm-verity).
3. **Kernel:** enforces user/kernel separation (rings/ELs).
4. **OS:** enforces users, permissions, patches.
5. **Apps:** least privilege, sandboxing, updates.

If each stage verifies the next, an attacker cannot drop a rootkit without
controlling the whole chain ("bootkits" are the hard case).

## Information Security Models

Models define **what is secure** so we can check designs.

| Model | Core idea | What it enforces |
|---|---|---|
| **Bell-LaPadula** (confidentiality) | "No read up, no write down" | Secrecy — a low user can't read high data |
| **Biba** (integrity) | "No read down, no write up" | Integrity — a high/lower user can't corrupt higher data |
| **Clark-Wilson** | Well-formed transactions | Commercial integrity (apps as trusted) |
| **Chinese-Wall** | Conflict of interest | Prevent insider trading of confidential info |
| **RBAC** | Roles and permissions | Least privilege via role assignment |
| **Harrison-Ruzzo-Ullman (access matrix)** | Subjects × Objects matrix | Formal model of who/what may do what |

The **CIA triad** (confidentiality, integrity, availability) maps to these:
Bell-LaPadula ≈ confidentiality; Biba ≈ integrity; others ≈ availability/integrity.

## Computer architecture (CPU, memory, RAM, BIOS) and security

### CPU privilege levels

Modern CPUs enforce **rings** (x86: 0–3) / **exception levels** (ARM: EL0–EL3):

- **Ring 0 / EL1 (kernel):** full privileges; only this level runs privileged
  instructions (I/O, page-table manipulation).
- **Ring 3 / EL0 (user):** restricted; a privileged instruction traps.

This hardware separation is what makes the OS's protection of user programs
possible (and is the basis of "kernel mode vs user mode" from Module 9).

### Memory, RAM, and protection

- **RAM** is volatile; **registers** and **cache** sit closer to the CPU.
- The **MMU** translates and checks permissions per page (R/W/X, user/supervisor).
- **DEP/NX (No-eXecute)** bit: prevents code execution on data pages (defeats
  many buffer-overflow exploits).
- **ASLR (Address Space Layout Randomization):** randomizes where code/data/stack
  load, making exploits harder to aim.

### BIOS and firmware security

- **BIOS** (Basic Input/Output System) / **UEFI** (modern): initializes hardware
  and boots the OS.
- **Secure Boot:** firmware only runs code signed by a trusted key → stops
  bootkits and unsigned rootkits.
- Firmware is the deepest, hardest-to-purge attack layer — a compromised BIOS
  survives OS reinstalls.

## Security components

- **TPM (Trusted Platform Module):** a hardware crypto chip recording boot state
  (PCR registers) for attestation.
- **HSM (Hardware Security Module):** a hardened device for key storage/signing
  (used by CAs and banks).
- **SEIM/EDR/XDR:** collecting and analyzing security telemetry.
- **Sandboxing:** running programs in a restricted environment (browser tabs,
  containers, VMs).
- **Containerization (Docker):** OS-level isolation sharing one kernel.

## Desktop security

- Keep OS and apps patched; enable a host firewall.
- Run as a **normal user** (not admin) daily; elevate only when needed (UAC).
- Use **antivirus/EDR** with real-time protection.
- Encrypt disks (**BitLocker/FileVault**) and lock screens when idle.
- **Application whitelisting** blocks unsigned executables.

## Email security

- **PGP (Pretty Good Privacy) / GPG:** encrypt and/or sign email end-to-end using
  public-key cryptography.
- **S/MIME (Secure/Multipurpose Internet Mail Extensions):** a PKI-based standard
  baked into corporate email clients.
- Both provide **encryption** (confidentiality) and **signing** (integrity +
  non-repudiation). The difference is key management: PGP uses a web of trust;
  S/MIME relies on a CA.

## Web security

### SSL/TLS

- **SSL** (deprecated, broken) evolved into **TLS** (1.0, 1.1, 1.2, 1.3). Use
  **TLS 1.2/1.3** only; disable older versions.

### SSL/TLS Handshake Protocol (simplified, TLS 1.2-style)

```text
1. ClientHello  (supported ciphers, random nonce)
2. ServerHello  (chosen cipher, server random + certificate)
3. Client verifies the certificate (chain to a trusted CA)
4. Both derive session keys (optionally via ECDHE)
5. "Finished" messages verify each side has the keys
→ secure channel established (symmetric encryption + MAC)
```

### Record Protocol

Application data is split into records, MACed (or AEAD in TLS 1.3), encrypted,
and sent over TCP.

### Alert Protocol

Errors (e.g., bad_certificate) or shutdown (close_notify) are signaled via alert
records; a `close_notify` prevents truncation attacks.

### SET (Secure Electronic Transaction)

A legacy protocol for secure credit-card transactions over the Internet (largely
superseded by modern TLS/PCI-DSS).

### OWASP Top 10 (modern web app risks)

- Broken access control, cryptographic failures (bad TLS/keys), injection
  (SQLi, command injection), insecure design, security misconfiguration,
  vulnerable/ outdated components, identification & auth failures,
  SSRF, XSS, and insufficient logging.

## Database security

- **Authentication & authorization:** least-privilege DB accounts; avoid
  `admin`/`sa` for apps.
- **Encryption:** encrypt backups, use TLS between app and DB, column-level
  encryption for sensitive fields.
- **Input validation / parameterized queries:** prevent SQL injection.
- **Auditing & monitoring:** log privileged actions and anomalous queries.

## Wireless network security

- **Wi-Fi:** WEP is broken; use **WPA2/WPA3-Enterprise** with 802.1X/EAP.
- **Bluetooth:** use the latest version; avoid "discoverable" mode.
- **Cellular:** 5G requires mutual authentication; downgrade to 2G/3G is a risk.
- General rule: never assume the wireless medium is trustworthy; encrypt and
  authenticate end-to-end.

## Computer forensics

- **Goal:** collect and preserve digital evidence for legal proceedings.
- **Chain of custody:** every handling step must be documented and verifiable.
- **Imaging:** make a bit-for-bit copy (image) with a write-blocker; work on the
  copy, never the original.
- **Hash the evidence** (SHA-256) to prove integrity.

## Steganography

Hiding the **existence** of a message (vs. cryptography, which hides its
**contents**). Examples: invisible watermarking, LSB steganography in images,
hidden partitions. Detected via statistical analysis of anomalies.

## Network security planning

- Asset inventory + threat modelling (STRIDE: Spoofing, Tampering, Repudiation,
  Information disclosure, Denial of service, Elevation of privilege).
- Define security zones and segmentation (e.g., separate the SecureBank database
  tier from the web tier).
- Monitoring, logging, and alerting (SIEM).
- Regular penetration testing and vulnerability scanning.

## Incident response

Phases (NIST):

1. **Preparation:** runbooks, backups, trained team, communication plan.
2. **Detection & analysis:** spot, classify (severity, scope).
3. **Containment, eradication, recovery:** short-term containment → remove root
  cause → restore from clean backups.
4. **Post-incident activity:** lessons learned, update controls.

## Legal issues in cyber security

- **Compliance:** GDPR, HIPAA, PCI-DSS, SOX — each imposes obligations and
  breach-notification duties.
- **Liability:** negligence, contractual security requirements.
- **Digital evidence admissibility:** collected via legal means, with chain of
  custody, on read-only media.
- **Jurisdiction:** cyber crimes cross borders; which law applies is often
  contested.

## Common mistakes

- Leaving the database on the same tier as the web server (fail the DMZ purpose).
- Encrypting at rest but sending data in cleartext over the network.
- Forgetting to disable legacy protocols (SSLv3, SSHv1, Telnet, FTP).
- Treating forensics as "copy the drive" without write-blocking or hashing.

## Information security models (quick reference)

| Model | Protects | Key rule |
|---|---|---|
| Bell-LaPadula | Confidentiality | No read up, no write down |
| Biba | Integrity | No read down, no write up |
| RBAC | Access control | Permissions via roles |
| Chinese Wall | Conflicts of interest | No read across conflicting companies |

## Memory rules

- Defense in depth: many independent layers; breach one, others hold.
- CPU rings/ELs: ring 0 = kernel/privileged; ring 3 = user/restricted.
- Secure boot: firmware → bootloader → kernel each verifies the next.
- Models: Bell-LaPadula (confidentiality), Biba (integrity), RBAC (roles).
- Web: TLS handshake authenticates + key-exchanges; OWASP Top 10 = common bugs.
- Forensics: write-block, image, hash, chain of custody.

## Check your understanding

1. Which ring/EL runs user applications, and which runs the kernel?
2. What is the difference between confidentiality models (Bell-LaPadula) and integrity models (Biba)?
3. In the TLS handshake, what proves the server's identity?
4. Why must forensic investigators use a write-blocker?
5. Give three OWASP Top 10 categories that are about access control and injection.

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Ring 3 / EL0 runs user apps; Ring 0 / EL1 runs the kernel (privileged).
2. Bell-LaPadula protects confidentiality (no read up, no write down); Biba
   protects integrity (no read down, no write up).
3. The server presents an X.509 certificate signed by a trusted Certificate
   Authority; the client verifies the chain and that the name matches.
4. To prevent altering the original evidence (which would break the chain of
   custody and admissibility); you work only on a bit-for-bit image.
5. Broken access control, injection (SQLi/command injection), and
   identification & authentication failures.

</details>

## Quick revision box

- Security architecture = layers: firmware, kernel (rings/ELs), OS, apps, data.
- Security models: Bell-LaPadula (confidentiality), Biba (integrity), RBAC
  (roles), Chinese-Wall (conflicts).
- CPU rings (0=kernel, 3=user); MMU + NX + ASLR defend memory; BIOS/UEFI Secure
  Boot starts the chain of trust.
- Desktop: patch, least privilege, firewall, disk encryption (BitLocker/FileVault).
- Email: PGP/GPG (web of trust) vs S/MIME (CA); both sign + encrypt.
- Web: TLS handshake + record/alert protocols; disable SSLv3/TLS1.0/1.1; OWASP Top 10.
- DB: least privilege, TLS to DB, parameterized queries.
- Wireless: WPA2/WPA3 + 802.1X; never trust the air.
- Forensics: write-block, image, SHA-256 hash, chain of custody.
- Planning/Response: STRIDE threats → monitor → NIST respond (contain→recover→lessons).

## Exam guidance

Identify the asset and threat, name the security objective, explain the control, and state one limitation. Use defensive examples only.

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
