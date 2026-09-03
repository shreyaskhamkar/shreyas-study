# Cyber Security — Important Questions

Use the answer points to check your response after attempting each question.

## Module 1

### Short answers

1. State the CIA triad and explain non-repudiation with an example.
2. Differentiate symmetric and asymmetric key cryptography. Give one example each.
3. Describe the three-stages of the fetch-decode-execute cycle.
4. List the seven OSI layers in order (with a mnemonic).
5. Classify each attack as passive or active: (a) sniffing, (b) replay, (c) phishing.

### Long answer

**Explain how a Caesar cipher and a modern cipher like AES differ in security, and why "encryption alone" does not make a system secure.**

Answer points: Caesar = 25 keys (brute-forceable), mono-alphabetic (frequency analysis); AES = 128-bit block, 10 rounds, mathematically sound; encryption provides confidentiality only — it says nothing about availability, authentication, key management, or patching.

### Problem

Encrypt "HELLO" with a Caesar cipher using key k = 5.

Answer: H→M, E→J, L→Q, L→Q, L→Q, O→T → "MJQQT". Use `E(x) = (x + 5) mod 26`.

## Module 2

### Short answers

1. What is the difference between a security policy and a security procedure?
2. Define RTO and RPO. Which matters more when sizing backups?
3. Explain the default-deny firewall principle.
4. Distinguish IPSec tunnel mode from transport mode.
5. What is the shared-responsibility model in cloud security?

### Long answer

**A company handles customer credit-card data. Which security standard applies, which IPR protects the company's software, and which cyber-law obligation is triggered if customer data is breached?**

Answer points: PCI DSS applies to cardholder data; copyright/trade secret protects the software; breach-notification law (e.g., GDPR 72 hours / local equivalents) requires reporting the breach.

### Problem

Order these from fastest/smallest to slowest/largest: L1 cache, register, SSD, RAM, HDD, L2 cache.

Answer: register → L1 cache → L2 cache → RAM → SSD → HDD.

## Module 3

### Short answers

1. Differentiate authentication and authorization with an example.
2. What is the difference between an IDS and an IPS?
3. Define false positive and false negative. Which is worse for a hospital monitor?
4. Distinguish misuse-based and anomaly-based detection.
5. What do the AAA letters in "AAA triad" actually stand for?

### Long answer

**A bank deploys an intrusion detection system. Explain whether it should be host-based, network-based, or both, and how you would balance false positives against false negatives in a high-transaction environment.**

Answer points: NIDS at the perimeter for broad traffic view; HIDS on critical servers (DB/app) for system-call-level insight; both for defense in depth. Balance by tuning signatures, using baseline-aware anomaly detectors, correlating alerts in a SIEM, and setting acceptable precision/recall thresholds (prioritise low false negatives for attacks, accept some false positives to a triage queue).

## Module 4

### Short answers

1. State the two rules of the Bell-LaPadula model.
2. What is the difference between ring 0 and ring 3?
3. In the TLS handshake, what proves the server's identity?
4. Name four OWASP Top 10 categories.
5. Why must forensic investigators use a write-blocker?

### Long answer

**Describe the secure-boot chain from firmware to applications, and explain how each stage verifies the next.**

Answer points: Firmware (UEFI Secure Boot) verifies the bootloader signature; the bootloader verifies the kernel (e.g., dm-verity); the kernel enforces rings/ELs and verifies loaded modules; the OS restricts apps to user mode and enforces code signing. Each stage's verification prevents a bootkit/rootkit from installing without compromising the prior stage.

### Problem

If a cache has a 1 ns hit time and a 20 ns miss penalty with a 5% miss rate, what is the AMAT?

Answer: AMAT = 1 + 0.05 × 20 = 2 ns.

## Full-syllabus questions

1. Trace an HTTPS request from a browser to a web server, naming the security layers (TLS, server certificate, HTTP) and the confidentiality/integrity/authentication each provides.
2. Compare the CIA triad with the Bell-LaPadula and Biba models — which goal does each model protect?
3. A SecureBank database holds customer records. List the full defense stack: network segmentation (DMZ), database encryption, access control (RBAC), WAF, TLS to DB, and explain how each maps to CIA.
4. Explain how virtualization, virtual memory, and system calls cooperate to give each program the illusion of dedicated, protected hardware.

## Answer-writing checklist

- Begin with a precise definition.
- Draw any requested diagram or table.
- Explain the mechanism step by step with a small example.
- State advantages, limitations, and suitable use.
- End comparisons with a clear decision criterion.
