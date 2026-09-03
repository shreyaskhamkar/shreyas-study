# Cyber Security — Quick Revision

## Module 1: Fundamentals of Cyber Security

- CIA + non-repudiation: Confidentiality, Integrity, Availability, plus proof of sender.
- Attacks: interception (read), modification (tamper), interruption (DoS), fabrication (inject).
- Ciphers: Caesar = shift; Substitution = fixed permutation; AES = modern symmetric block (128-bit, 10 rounds).
- Symmetric = one shared key (fast, key-distribution problem); Asymmetric = public/private pair (RSA/ECC, slow).
- Hash = fixed digest (SHA-256), collision/preimage resistant; MD5/SHA-1 are broken.
- Digital signature = sign hash with private key, verify with public key (integrity + non-repudiation).
- OSI 7 layers (App-Presentation-Session-Transport-Network-Datalink-Physical); TCP/IP = 4 layers.
- Network types PAN/LAN/MAN/WAN; topologies bus/star/ring/mesh/tree/hybrid.
- Malware: virus(needs host), worm(self-propagates), spyware, ransomware, rootkit.
- Buffer overflow overwrites return address → RCE.

## Module 2: Security Management

- Classification levels: Restricted/Internal/Public; map access + handling.
- Security policy (intent) → standards → procedures (how) → guidelines/best practices.
- Risk = Threat × Vulnerability × Impact; treat = avoid/transfer/mitigate/accept.
- BCP = keep business running; DR = restore IT; RTO (time) vs RPO (data loss).
- IPR: patent, trademark, copyright, trade secret, industrial design, GI, plant variety.
- Cyber law: unauthorized access, breach notification (e.g., GDPR 72h), digital evidence.
- DSC = digital signature certificate from a CA (trust anchor for HTTPS/PKI).
- Standards: ISO 27001, NIST CSF (Identify/Protect/Detect/Respond/Recover), PCI DSS, CIS.
- Firewall types: packet-filter, stateful, application proxy, NGFW; default-deny.
- DMZ isolates public servers between two firewalls.
- VPN = tunnel over public net; IPSec = AH/ESP + IKE; SSL VPN = browser-based.
- Cloud = shared responsibility (provider secures cloud; customer secures in-cloud).

## Module 3: Information & Network Security

- AAA: Identify (claim), Authenticate (prove: know/have/are), Authorize (allow).
- MFA = 2+ independent factors; least privilege = minimal access.
- Access models: DAC (owner), MAC (labels), RBAC (roles), ABAC (attributes).
- IDS = detect/alert (out of path); IPS = block (inline).
- NIDS (network) vs HIDS (host); misuse/signature (known, low FP) vs anomaly (model, high FP).
- Precision = TP/(TP+FP); Recall = TP/(TP+FN); false positive = false alarm; false negative = missed attack.
- Traffic analysis leaks patterns even through encrypted traffic.

## Module 4: System & Application Security

- Defense in depth: physical→firmware→kernel→OS→app→data.
- CPU rings: ring 0/EL1 (kernel), ring 3/EL0 (user); privileged instructions trap.
- Secure boot chain: firmware→bootloader→kernel each verifies next (UEFI Secure Boot).
- Models: Bell-LaPadula (confidentiality, no read up), Biba (integrity, no read down), RBAC.
- Memory protection: NX/DEP bit, ASLR; TPM/HSM for keys.
- TLS handshake: ClientHello→ServerHello→cert verify→key exchange→finished (TLS 1.2/1.3 only).
- OWASP Top 10: broken access control, injection, crypto failures, misconfigurations, etc.
- Forensics: write-block → image → hash (SHA-256) → chain of custody.
- Incident response (NIST): prepare→detect→contain→eradicate→recover→lessons.

## Ten memory lines

1. Confidentiality, integrity, availability, and non-repudiation are the goals.
2. Encrypt for secrecy; sign for truth and proof of origin.
3. Every system has layers: rings, firewall, app, data — defense in depth.
4. Identity is claimed; authentication proves; authorization allows.
5. Watch the network (IDS) or block it inline (IPS).
6. Keys must be kept secret and managed (that is PKI and the CA).
7. Patch often; run as a normal user; enable full-disk encryption.
8. TLS does the handshake; never trust unverified certificates.
9. When breached, follow an incident-response playbook, not panic.
10. Preserve evidence: write-block, hash, and keep the chain of custody.
