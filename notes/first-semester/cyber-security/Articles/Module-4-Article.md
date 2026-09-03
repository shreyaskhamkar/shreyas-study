# Module 4 Article: From CPU Rings to Incident Response

## The big idea

Security lives in layers: **hardware** (CPU rings and secure boot), **OS**
(kernel isolation, memory protection), **applications** (TLS, OWASP), and
**operations** (planning, monitoring, response). When a breach happens,
**forensics** records what occurred and **incident response** coordinates the
fix. This article connects the low-level defenses to the high-level response.

## CPU rings and the trust anchor

### Privileged levels

Modern CPUs split code into privilege levels to stop a buggy or malicious
application from taking over:

- **x86:** ring 0 (kernel), ring 3 (user); rings 1/2 unused today.
- **ARM:** EL1 (kernel), EL0 (user); EL2 (hypervisor), EL3 (secure).

A user program that executes a privileged instruction (e.g., disable interrupts)
**traps** into the kernel. This is the hardware basis of "only the kernel can
touch hardware," and it underpins system calls (Module 9 in the processor module).

### Memory defenses

- **NX / DEP (No-eXecute / Data Execution Prevention):** marks pages as data, not
  code, so a buffer-overflow payload can't execute on the stack/heap.
- **ASLR (Address Space Layout Randomization):** randomizes where code, heap, and
  stack load, so an attacker can't predict addresses to jump to.

Together they raise the bar a lot; they don't make exploits impossible, but
they make them far harder (and that's the whole game).

## Secure boot: trusting the first instruction

A compromised OS can't defend itself — so we must trust the **first code that
runs**:

```
UEFI firmware (root of trust) → signed bootloader → signed kernel → signed drivers
```

With **UEFI Secure Boot**, the firmware only runs code whose signature is in a
trusted database. Each stage verifies the next before handing off. A
**Trusted Platform Module (TPM)** records measurements (PCRs) of the boot state
so a remote party can **attest**: "this machine booted trusted software."

## Information-security models in the OS

- **Bell-LaPadula** (confidentiality): "no read up, no write down." A low-clearance
  process can't read high-classification data.
- **Biba** (integrity): "no read down, no write up." Used for integrity.
- **RBAC:** the practical model most OSes use (root, users, groups; ACLs).

A "secure OS" enforces these by default and gives users only what they need.

## Application-layer defenses

### TLS (HTTPS)

- **Handshake** authenticates the server (certificate chain to a trusted CA) and
  negotiates a session key (RSA or ECDHE).
- **Records** are encrypted and authenticated (AES-GCM in TLS 1.3).
- **Alerts** signal errors; `close_notify` prevents truncation.
- **Rule of thumb:** TLS 1.2 and 1.3 only. Disable SSLv3, TLS 1.0, 1.1, RC4, and
  export ciphers.

### OWASP Top 10 (the usual suspects)

1. Broken access control (IDOR, forceful browsing)
2. Cryptographic failures (no HTTPS, hardcoded keys)
3. Injection (SQLi, command injection)
4. Insecure design / missing controls
5. Security misconfiguration (default passwords, open S3 buckets)
6. Vulnerable & outdated components
7. Identification & authentication failures
8. Software & data integrity failures
9. Security logging & monitoring failures
10. Server-side request forgery (SSRF)

The fix for most: input validation, parameterized queries, least privilege,
dependency scanning, and secure session handling.

## Forensics: evidence that survives court

Digital evidence is fragile; the job is to record it **without changing it**:

```
1. Secure the scene (isolate, photograph)
2. Acquire: create a bit-for-bit image with a WRITE-BLOCKER
3. Hash the original and the image (SHA-256); match them
4. Analyze the copy (never the original)
5. Document the chain of custody
```

The **chain of custody** proves the evidence has not been altered since seizure.
Without it, even perfect technical findings may be excluded in court.

### Why a write-blocker?

Because any write to the original evidence (even an OS auto-mount) changes its
hash and breaks admissibility. Work on the image only.

## Incident response (NIST phases)

1. **Preparation:** playbooks, backups, communication plan, trained team.
2. **Detection & analysis:** spot, contain scope, assign severity.
3. **Containment, eradication, recovery:**
   - Short-term **containment** (isolate the infected host).
   - **Eradication** (remove malware/rootkit, patch the hole).
   - **Recovery** (restore from clean backups, bring services back).
4. **Post-incident activity:** lessons learned; update controls.

> Real incidents are messy. The famous rule: **"Contain first, investigate
> second, resume third."** Do not let curiosity (or "just checking the email")
> let attackers pivot further.

## Network security planning: thinking like an attacker

Use a threat model. **STRIDE** is the classic checklist:

- **S**poofing identity
- **T**ampering with data
- **R**epudiation (no non-repudiation)
- **I**nformation disclosure
- **D**enial of service
- **E**levation of privilege

For SecureBank: the attacker spoofs a user (weak 2FA) → tampers with a request
(no CSRF token) → repudiates a transaction (no non-repudiation) → ... The defense
is to address each STRIDE bucket: MFA, CSRF tokens, digital signatures,
rate-limiting, and least privilege.

## Legal issues

- **Compliance** (GDPR, HIPAA, PCI-DSS) creates positive obligations and
  breach-notification duties (often within 72 hours).
- **Liability** flows from duty of care and contract; a breach can trigger
  lawsuits and regulatory fines.
- **Evidence admissibility** requires the proper collection method (write-blocker,
  hashing, chain of custody).
- **Jurisdiction** is genuinely hard for cross-border cloud incidents (which law
  governs AWS us-east-1 when the attacker is in a third country?).

## Exam angle

For a "secure boot" or "incident response" long answer:

Secure boot → firmware verifies bootloader → bootloader verifies kernel → kernel
enforces rings/ELs and code signing; cite a TPM for attestation.

Incident response → Prepare → Detect → Contain → Eradicate → Recover → Lessons
learned; stress "contain first, then investigate."

> Tip: name **NX/DEP** and **ASLR** together as the two baseline memory defenses;
> name **STRIDE** for threat modeling; remember the **chain of custody** for
> forensics.
