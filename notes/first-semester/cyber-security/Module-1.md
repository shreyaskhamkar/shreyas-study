# Module 1: Fundamentals of Cyber Security

## Learning outcomes

After completing this module, you should be able to:

- explain the central ideas in **Module 1: Fundamentals of Cyber Security** using simple language;
- apply the main method or rules to a worked example;
- connect the topic to a practical computing scenario; and
- answer short and long university questions with clear steps.


## Prerequisites

No earlier module is required. Start with the plain-English overview and review each unfamiliar term before continuing.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Chapter 1 — Cryptography | 10-15 minutes |
| 2 | Chapter 2 — Communication & Network Security | 10-15 minutes |
| 3 | Chapter 3 — Information Security Concepts | 10-15 minutes |
| 4 | Chapter 4 — Security Threats & Vulnerabilities | 10-15 minutes |


## Chapter 1 — Cryptography

### Learning outcomes

After this chapter, you should be able to:

- explain why cryptography is needed and name the four security services;
- distinguish symmetric and asymmetric key cryptography and give an example of each;
- describe hash functions and digital signatures;
- apply the Caesar and substitution ciphers.

### Start here: the simple idea

Cryptography turns a readable message into something unreadable to everyone
**except** the intended recipient. It does not by itself solve every security
problem, but it is the foundation of confidentiality, integrity, and
non-repudiation.

### Everyday analogy

- **Symmetric:** Alice and Bob share a single secret key to lock/unlock a box.
  Fast, but they had to agree on the key first (and share it securely).
- **Asymmetric:** Alice has a public padlock (anyone can lock with it) and a
  private key (only she can open it). She can publish the padlock; the private
  key never travels.

### Need for cryptography and the security services

```text
Security objectives (CIA + non-repudiation):
  Confidentiality  — keep secrets secret
  Integrity        — data is unchanged
  Authentication   — prove identity
  Availability     — systems work when needed
  Non-repudiation  — sender cannot deny sending
```

### Security attacks

- **Interruption:** the system/service becomes unusable (e.g., DDoS).
- **Interception:** an attacker reads data in transit without the sender/receiver knowing.
- **Modification:** an attacker changes data in transit or at rest.
- (Also: **fabrication** — injecting data the recipient didn't expect.)

### History of cryptography

- **Classical:** Caesar cipher (shift by 3), substitution ciphers. Broken by
  frequency analysis (Arab mathematicians, ~9th century).
- **Mechanical:** WWII Enigma machine.
- **Modern (1970s+):**
  - **Symmetric:** DES (now broken, 56-bit key) → 3DES → **AES** (128/192/256-bit).
  - **Asymmetric:** RSA, Diffie-Hellman, Elliptic Curve (ECC).
  - **Hash:** MD5 (broken), SHA-1 (broken), **SHA-2** and **SHA-3**.

### Caesar Cipher (worked)

Shift each letter by `k` positions. With `k = 3`:

```text
Plaintext : A T T A C K A T D A W N
Ciphertext: D W W D F N D W G D Z Q
```

- Encryption: `E(x) = (x + k) mod 26`
- Decryption: `D(x) = (x − k) mod 26`
- Vulnerable to brute force (only 25 keys).

### Substitution Cipher

Each plaintext letter maps to a fixed ciphertext letter (a permutation). Vulnerable
to frequency analysis because letter frequencies leak through.

### Symmetric key cryptography

- **One key** for both encryption and decryption.
- **Examples:** AES (block cipher, 128-bit block), DES/3DES, ChaCha20.
- **Pros:** fast; **cons:** key distribution is the hard problem (n users ⇒ n(n−1)/2 keys).

```text
AES overview: 128-bit block, 10/12/14 rounds for 128/192/256-bit keys.
Operations per round: SubBytes, ShiftRows, MixColumns, AddRoundKey.
```

### Asymmetric key cryptography

- **Key pair:** public key (publish) and private key (keep secret).
- **RSA (concept):** based on integer factorization hardness.
  - Choose primes p, q; n = p·q; φ(n) = (p−1)(q−1); pick e coprime to φ(n);
    d = e⁻¹ mod φ(n). Public (n, e); private (n, d).
- **Diffie-Hellman:** two parties agree on a shared secret over an insecure
  channel using modular exponentiation.
- **ECC:** same goals as RSA with much smaller keys (256-bit ECC ≈ 3072-bit RSA).

| Scheme | Use | Key size for ~128-bit security |
|---|---|---|
| AES-128 | symmetric encryption | 128 bits |
| RSA-3072 | asymmetric encryption/signature | 3072 bits |
| ECC-256 | asymmetric encryption/signature | 256 bits |

### Hash functions

A **hash** maps any input to a fixed-size digest. Properties:

- **Deterministic:** same input → same digest.
- **Avalanche:** tiny change → ~50% bit changes.
- **Preimage resistance:** can't recover input from digest.
- **Second-preimage resistance:** can't find another input with same digest.
- **Collision resistance:** can't easily find two inputs with the same digest.

**Examples:** SHA-256 (SHA-2 family), SHA-3, BLAKE3. MD5/SHA-1 are **broken**.

### Digital signatures

**Goal:** prove who sent a message and that it wasn't altered (non-repudiation).

**How:** a signature algorithm combines the message (usually its digest) with
the sender's **private key** to create a signature. A verifier uses the public
key and the message to accept or reject that signature. Saying "encrypt the hash
with the private key" is an unsafe shortcut: it does not describe ECDSA or EdDSA
and omits the required encoding rules for RSA signatures.

```text
Sign:   signature = Sign(private_key, Hash(message))
Verify: Verify(public_key, Hash(message), signature) -> accept/reject
```

Common: **RSA-PSS**, **ECDSA**, **EdDSA** (Ed25519).

### Applications of cryptography

- **TLS/HTTPS:** TLS 1.3 normally establishes fresh keys with ephemeral
  (EC)DHE or a pre-shared key, authenticates peers with signatures, derives
  traffic keys with HKDF, and protects records with an AEAD cipher such as
  AES-GCM or ChaCha20-Poly1305. Static RSA key transport was removed from TLS 1.3.
- **SSH:** secure remote login.
- **PGP/GPG:** email encryption and signing.
- **Bitcoin:** hashing (SHA-256) + digital signatures (ECDSA).
- **Disk/volume encryption:** AES (BitLocker, FileVault).

## Chapter 2 — Communication & Network Security

### Start here: the simple idea

Data moves as packets over physical **transmission media**. Security here means
protecting data as it travels and structuring networks so trust zones are clear.

### Basics of communication systems

A communication system is: **sender → transmitter → transmission media →
receiver → receiver**. The channel must be reliable and ideally confidential.

### Communication components

Sender, receiver, transmission medium, protocol (rules), and a medium access
control (who talks when on a shared medium).

### Transmission media

| Media | Type | Bandwidth | Range | Security note |
|---|---|---|---|---|
| Twisted pair (Cat5e/6/6a) | Guided copper | Up to 10 Gbps | ~100 m | Tappable (EMI); use TLS |
| Coaxial cable | Guided copper | Up to 10 Gbps | ~500 m | Tappable; shared collision domain |
| Optical fiber | Guided light | 10–100 Gbps+ | km+ | Hard to tap physically |
| Wireless | Unguided | Variable | m–km | Broadcast; easily intercepted |

### Wireless media

Wi-Fi (802.11 a/b/g/n/ac/ax), Bluetooth, cellular (3G/4G/5G). Wireless is
"over the air," so **encryption (WPA3) and authentication (802.1X)** are
essential — broadcasting is the biggest risk.

### Network types

| Type | Scope | Typical |
|---|---|---|
| PAN (Personal) | 1–10 m | Bluetooth, USB |
| LAN (Local) | one site | Ethernet, Wi-Fi |
| MAN (Metropolitan) | city | fiber, WiMAX |
| WAN (Wide) | countries | Internet, MPLS |

### Network topologies

- **Bus:** one backbone, all nodes tap in. Simple, but a fault breaks all.
- **Star:** all nodes connect to a hub/switch. Easy to manage; hub failure kills the LAN.
- **Ring:** each node connects to two neighbours; tokens pass.
- **Mesh:** nodes interconnect redundantly (partial or full). High availability.
- **Tree:** hierarchical star-of-stars.
- **Hybrid:** mix of the above (most WANs).

### OSI 7-layer model

```text
7  Application     (HTTP, SMTP, FTP)
6  Presentation    (SSL/TLS, JPEG, ASCII)
5  Session         (NetBIOS, RPC — manage dialogs)
4  Transport       (TCP, UDP — host-to-host reliability)
3  Network         (IP — routing)
2  Data Link       (Ethernet, Wi-Fi — node-to-node frames)
1  Physical        (cables, voltages, bits)
```

**Mnemonic:** "All People Seem To Need Data Processing" (Application → Physical).

### TCP/IP model

```text
4  Application    (HTTP, DNS, SMTP)     — ~ OSI 5–7
3  Transport      (TCP, UDP)            — ~ OSI 4
2  Internet       (IP, ICMP, ARP)       — ~ OSI 3
1  Network Access (Ethernet/Wi-Fi)      — ~ OSI 1–2
```

### The Internet

The global system of networks using **TCP/IP**. Built on **best-effort** packet
switching with **end-to-end** intelligence. **DNS** maps names to IPs; **BGP**
routes between autonomous systems; **NAT** maps private addresses.

### Wireless networks

Wi-Fi uses the **802.11** MAC (CSMA/CA). Security evolved: WEP (broken) → WPA →
**WPA2/WPA3** (AES-CCMP, 802.1X). Cellular evolved 2G → 3G → 4G/LTE → 5G, each
adding stronger encryption and mutual authentication.

### Web browsers

Browsers render HTML/CSS/JS and manage **origins**, **cookies**, and
**same-origin policy**. They are the front line of client-side security
(XSS, CSRF) — see Module 4.

## Chapter 3 — Information Security Concepts

### Start here: the simple idea

**Information security** = protecting information from threats using controls,
balanced against the **CIA triad** (confidentiality, integrity, availability).

### Network security

Protecting network traffic from interception, modification, and unauthorized
access. Achieved with firewalls, IDS/IPS (Module 3), VPNs (Module 2), and
encryption in transit (TLS).

### Need for security

Digital assets (data, identity, money) move and rest online. Without security:
data theft, financial loss, privacy breaches, reputation damage, regulatory
fines, and operational disruption.

### Types of attacks

#### Passive attack

The attacker **reads** but does not change data:
- **Interception/eavesdropping:** sniffing network traffic.
- **Traffic analysis:** inferring behavior from patterns (who talks to whom).

#### Active attack

The attacker **modifies** or injects data:
- **Modification** of in-flight or stored data.
- **Replay attacks** (re-sending a captured packet).
- **Masquerade** (pretending to be another).
- **Denial of Service** (flooding, exhausting resources).

#### Distributed attack

Many compromised systems (a **botnet**) cooperatively attack a victim:
**DDoS**. Each bot sends a small amount of traffic, so the aggregate overwhelms
the target while staying under any single-source threshold.

#### Insider attack

Malicious or careless **trusted users/staff** (e.g., exfiltrating data, abusing
privileges), versus **outsider** attacks from outside the trust boundary.

#### Close-in attack

The attacker operates **physically close** to the target: dumpster diving
(tossing sensitive trash), cable tapping, shoulder surfing, or RFID skimming.

### Specific attacks

- **Phishing:** fake emails/sites that trick users to reveal credentials or run
  malware. Modern phishing is **highly targeted (spear-phishing)**.
- **Hijacking:** the attacker takes over an existing session (e.g., session
  cookie theft via XSS, or TCP sequence prediction).
- **Spoofing:** forging the source identity (IP/DNS/email spoofing, caller ID
  spoofing).
- **Buffer overflow:** writing past a buffer's end to overwrite control data
  (return address) and gain code execution.
- **Exploit attack:** leveraging a software vulnerability to run attacker code
  (often delivered via a buffer overflow).
- **Password attacks:** dictionary, brute force, rainbow tables, credential
  stuffing.
- **Malware family:**
  - **Virus:** attaches to a file/program; needs user to execute.
  - **Worm:** self-propagates across networks; no host file needed.
  - **Spyware:** steal information; **adware** serves unwanted ads.
  - **Rootkit:** hides in the OS to maintain stealthy access.
  - **Ransomware:** encrypts data and demands payment.

### Denial of Service (DoS) Attack

Overwhelm a resource so legitimate users cannot get service:

| Type | Method |
|---|---|
| Volume/traffic | Flood with traffic (ICMP/UDP floods, amplification) |
| Protocol | Exploit protocol state (SYN flood, ping of death) |
| Application | Exhaust app logic (slowloris, HTTP GET flood) |
| DDoS | Coordinated many sources (a botnet) |

Mitigation: rate limiting, SYN cookies, anycast/blackholing, CDNs, upstream
filtering.

## Chapter 4 — Security Threats & Vulnerabilities

### Security threats

A **threat** is a potential occurrence of a **threat agent** (attacker) exploiting
a **vulnerability**. A **risk** = probability × impact.

| Level | Example |
|---|---|
| Low | Weak password policy |
| Medium | Unpatched web server |
| High | Zero-day in a public-facing service |
| Critical | Credential database exposed |

### Vulnerabilities

Weaknesses in design, code, or configuration. Common categories (OWASP top):
injection, broken authentication, XSS, insecure deserialization,
misconfigured security, vulnerable components, broken access control, etc.

### Weak and strong passwords

- **Weak:** `123456`, `password`, `qwerty`, dictionary words, personal info.
- **Strong:** long (≥12 chars), mixed upper/lower/digits/symbols, or a
  **passphrase** ("correct horse battery staple"). Use a **password manager**.
- Best practice: **unique password per account** + **MFA**.

### Password cracking

- **Dictionary attack:** try common words/passwords.
- **Brute force:** try all combinations.
- **Rainbow tables:** precomputed hash→password lookups (defeated by **salting**).
- **Credential stuffing:** reuse of breached credentials.

### Insecure network connections

Unencrypted traffic (`http://`, FTP, Telnet, SMTP without STARTTLS) can be read
and modified. Fix: encrypt in transit with **TLS** and use **certificate
validation**. Avoid open/public Wi-Fi; use VPN.

### Malicious code

Re-introduces malware. Delivery vectors: email attachments, malicious sites,
removable media, compromised software updates, supply-chain attacks (e.g., the
SolarWinds breach).

### Programming bugs

The root of many exploitable vulnerabilities:

- **Buffer overflow:** unchecked input length overwrites memory.
- **Integer overflow/underflow:** wrap around to bypass checks.
- **Off-by-one:** write one element past the end.
- **Use-after-free / double-free:** memory-safety bugs leading to RCE.
- **Injection:** SQLi, command injection from un-sanitized input.

Mitigation: safe languages (Rust, managed runtimes), sanitizers, code review,
static analysis, and fuzz testing.

### Cyber crime, cyber terrorism, information warfare

- **Cyber crime:** profit-motivated (bank fraud, ransomware, identity theft).
- **Cyber terrorism:** politically/ideologically motivated, designed to cause
  mass disruption/fear (attacks on infrastructure).
- **Information warfare:** state/nation competition in cyberspace (espionage,
  disinformation, critical-infrastructure disruption).
- **Surveillance:** mass or targeted monitoring (state or corporate).

## Common mistakes

- Thinking encryption alone makes a system secure (key management, access
  control, and patching matter more).
- Confusing authentication ("who are you?") with authorization ("what can you do?").
- Forgetting that the human element (phishing, weak passwords) is usually the
  weakest link.

## Memory rules

- Confidentiality = keep secrets; Integrity = no tampering; Availability = up;
  non-repudiation = can't deny.
- Caesar = shift; Vigenère = repeated Caesar; AES = modern symmetric block.
- RSA/ECC = public/private pairs; hash = fixed digest, not encryption.
- Passive = read; active = modify; distributed = botnet; insider = trusted.
- Defense in depth: people, process, and technology.

## Check your understanding

1. Which security service does a digital signature primarily provide?
2. Why is symmetric encryption fast but hard to scale?
3. Give one passive and one active attack.
4. What is the difference between a virus and a worm?
5. How does a buffer overflow lead to code execution?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Integrity and non-repudiation (authenticity).
2. One key, fast operations, but every pair of users needs a shared secret ⇒ n(n−1)/2 keys.
3. Passive: eavesdropping/interception. Active: modification/replay/DoS.
4. A virus needs a host file executed by the user; a worm spreads itself across networks autonomously.
5. Overwriting a buffer can clobber the saved return address on the stack, redirecting execution to attacker-supplied code.

</details>

## Quick revision box

- Cryptography goals: confidentiality, integrity, authentication, availability, non-repudiation.
- Symmetric (AES, one key, fast) vs asymmetric (RSA/ECC, public/private, slow).
- Hash = fixed digest; digital signature = sign with private key, verify with public.
- OSI layers 1–7 (mnemonic helps); TCP/IP = 4 layers.
- Attacks: passive(interception), active(modification), distributed(DDoS), insider, close-in.
- Malware: virus(host), worm(self-propagate), spyware, ransomware.
- Buffer overflow overwrites control data → RCE; mitigation = safe languages + analysis.

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
