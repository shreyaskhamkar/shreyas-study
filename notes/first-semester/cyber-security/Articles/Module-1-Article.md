# Module 1 Article: How Cryptography Became Modern Security

## The big idea

Cryptography is the art and science of secret writing, but modern cryptography
is **mathematics made practical**: it gives us confidentiality, integrity, and
non-repudiation as **composable, reusable services**. Where the ancients used
sponge secret inks, we now use AES, SHA-256, and RSA/Elliptic-Curve signatures.

The single lesson: **encryption is a building block, not a solution.** You
still need key management, authentication, access control, and patching.

## From Caesar to computers

The Caesar cipher shifts letters by a fixed amount. With 26 letters, there are
only 25 non-trivial keys, so **brute force is trivial**. The substitution cipher
is no better against frequency analysis, because English letter frequencies
(E, T, A, O, I, N …) leak through.

These are fun to break, but the deeper insight is the **key-space argument**:
security must rest on a large key space, not on the enemy not knowing *how* the
cipher works (Kerckhoffs's principle: the algorithm can be public; only the key
stays secret).

## Symmetric encryption: fast secrecy

Modern **symmetric** algorithms share one secret key:

- **DES** used a 56-bit key (now brute-forceable on a phone).
- **3DES** = three DES passes (slow, deprecated).
- **AES** (the standard since 2001): 128/192/256-bit keys, 10/12/14 rounds,
  128-bit block, based on substitution-permutation networks.

AES is fast in hardware and software and is what TLS, disk encryption, and SSH
use for bulk secrecy.

```text
AES at a glance:
  Input: 128-bit block, key
  Rounds: SubBytes, ShiftRows, MixColumns, AddRoundKey
  Why secure: designed to resist differential & linear cryptanalysis
```

## Asymmetric encryption and digital signatures: solving key distribution

Symmetric crypto's fatal flaw is **key distribution**: if Alice and Bob can share
a secret securely, they don't need crypto in the first place.

**Public-key cryptography** (Diffie–Hellman 1976; RSA 1977) gives each party a
**public key** (publishable) and a **private key** (secret). Now:

- Bob publishes his public key; Alice encrypts with it; only Bob's private key
  can read it.
- Alice hashes the message and encrypts the hash with her **private** key = a
  **digital signature**; anyone verifies with Alice's public key.

This also solves **non-repudiation** (she can't later deny signing — provided her
key is safe).

## Hash functions: integrity fingerprints

A **hash function** (SHA-256) turns any input into a short, fixed digest. Good
hashes are **one-way** (can't reverse) and **collision-resistant** (can't find two
inputs with the same digest). They are the glue of integrity:

- Download a file? Verify its SHA-256 matches the publisher's.
- Git stores every object by its SHA-1/SHA-256 content hash.
- TLS uses HMAC (hash + secret) as a checksum.

**Warning:** MD5 and SHA-1 are broken — finding collisions is now feasible. Never
use them for security.

## How TLS puts it together

HTTPS works by composing primitives:

1. The **server's certificate** (X.509) binds its public key to its name, signed
   by a trusted **Certificate Authority (CA)** — this is **authentication**.
2. The client and server do a **key exchange** (RSA or ECDHE) to derive a shared
   **session key** — **confidentiality** of future packets begins here.
3. All application data is encrypted+authenticated with that key
   (e.g., AES-GCM) — **integrity** too.
4. If the handshake is done right and TLS 1.2/1.3 is used, an eavesdropper
   learns nothing and cannot tamper.

## Worked example: signing an email (PGP/GPG)

```
Message
   ↓
Hash(message) → digest          (integrity fingerprint)
   ↓
Encrypt digest with your PRIVATE key → digital signature
   ↓
Send {message, signature}
   ↓
Recipient: decrypt signature with your PUBLIC key → digest'
           hash(message) → digest''
           if digest' == digest'' : authentic + intact
```

This gives **integrity, authentication, and non-repudiation** — but not
confidentiality (the message is still visible). Add encryption for that.

## Security services recap

| Service | Achieved with | Question it answers |
|---|---|---|
| Confidentiality | symmetric/asymmetric encryption | "Who can read this?" |
| Integrity | hash / HMAC | "Was it tampered with?" |
| Authentication | digital signature / MAC | "Who sent this?" |
| Non-repudiation | digital signature (private key) | "Can they deny it?" |
| Availability | redundancy, anti-DoS | "Is the service up?" |

## Common pitfalls

- **Encryption without authentication** is dangerous: an attacker can tamper
  with ciphertext (e.g., padding-oracle, bit-flipping). Use **authenticated
  encryption** (AES-GCM) or encrypt-then-MAC.
- **Small keys**: 56-bit DES, small RSA keys, or a Caesar shift are all
  trivially breakable today.
- **Homegrown crypto**: never design your own cipher or protocol; use vetted
  libraries (OpenSSL, libsodium). Cryptographic math is unforgiving.

## Exam angle

For "explain confidentiality, integrity, and non-repudiation with examples":

1. **Confidentiality** — encrypt data (AES). Example: HTTPS.
2. **Integrity** — hash/MAC. Example: SHA-256 checksum on download.
3. **Non-repudiation** — digital signature with a private key. Example: signed
   email. "Can't deny it" because only the private-key holder could have signed.

> Tip: link each service to a concrete primitive and an everyday example; that is
> worth full marks.

## See also

- Module 6 (ISA) for the math behind ECC used in modern signatures.
- Module 4 (System Security) for how TLS handshakes authenticate servers.
- `Cheat-Sheet.md` for key sizes and cipher names to memorize.
