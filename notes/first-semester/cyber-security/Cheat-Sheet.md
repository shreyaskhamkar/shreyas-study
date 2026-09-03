# Cyber Security — Cheat Sheet

## CIA + goals

```text
C = Confidentiality   keep secrets secret       (encryption, access control)
I = Integrity        no tampering               (hashes, signatures)
A = Availability     systems up when needed     (redundancy, anti-DoS)
+ Non-repudiation    can't deny sending         (digital signatures)
```

## Attacks

```text
Interception   = read in transit (eavesdrop)
Modification   = tamper in transit/storage
Interruption   = DoS/DDoS (service down)
Fabrication    = inject forged data
Passive  = observe;   Active = change state
```

## Cryptography

```text
Caesar:  E(x) = (x + k) mod 26
AES:     128-bit block, 128/192/256-bit keys, ~10/12/14 rounds
RSA key sizes: 2048-bit ~ 112-bit security; 3072-bit ~ 128-bit security
ECC:     256-bit ~ 128-bit security (much smaller than RSA)
SHA-2:   SHA-256/384/512  (use);  SHA-1/MD5  (broken, avoid)
Sign:    signature = PrivKey( Hash(message) ); verify with PubKey
```

## Symmetric vs Asymmetric

| | Symmetric (AES) | Asymmetric (RSA/ECC) |
|---|---|---|
| Keys | one shared secret | public/private pair |
| Speed | fast | slow (~1000x slower) |
| Uses | bulk encryption | key exchange, signatures |
| Problem | key distribution | expensive computation |

## Hash properties

Deterministic, avalanche (~50% bit change), preimage-resistant,
second-preimage-resistant, collision-resistant. MD5/SHA-1 broken.

## OSI & TCP/IP

```text
OSI  : App(7) Presentation(6) Session(5) Transport(4) Network(3) DataLink(2) Physical(1)
       "All People Seem To Need Data Processing"
TCP/IP: Application(4) Transport(3) Internet(2) NetworkAccess(1)
```

## Networking basics

```text
HTTP 80  HTTPS 443  SSH 22  Telnet 23  SMTP 25  FTP 21  DNS 53  SMTP(S) 465/587
LAN  (Ethernet/Wi-Fi)   MAN (fiber, WiMAX)   WAN (MPLS/Internet)   PAN (Bluetooth)
Wi-Fi: WEP(broken) → WPA → WPA2(WPA2-PSK/Enterprise) → WPA3
```

## Security controls (CIA triad mapping)

| Control | Helps |
|---|---|
| Encryption | Confidentiality |
| Hash/signature | Integrity, non-repudiation |
| Redundancy, load balancing | Availability |
| Firewalls, access control | All three |
| Backup + offline copies | Availability against ransomware |

## Firewalls & DMZ

- Default-deny; ordered allow rules; log denies.
- Types: packet-filter, stateful, application-proxy, NGFW.
- DMZ: Public servers (web/mail/DNS) isolated between two firewalls.

## VPN / tunneling / cloud

```text
VPN = private tunnel over public net
IPSec: AH(auth, no enc) / ESP(enc+auth) / IKE(key mgmt) ; transport vs tunnel mode
SSL VPN: browser-based remote access
Cloud models: IaaS / PaaS / SaaS ; shared responsibility (provider secures cloud, 
              customer secures in-cloud: IAM, data, config)
```

## Access control models

```text
DAC  = owner decides                 (Unix perms, ACLs)
MAC  = system labels (Top Secret)    (Bell-LaPadula)
RBAC = roles (admin/accountant)     (most apps)
ABAC = attributes (time, device)    (fine-grained)
Least privilege  = give minimal rights
MFA  = 2+ independent factors
```

## IDS / IPS

```text
IDS  = watch & alert (out of path)
IPS  = watch & block (inline)
NIDS/NIPS = network layer        HIDS/HIPS = host layer
Misuse/signature = known attacks, low FP, blind to 0-day
Anomaly        = baselined, catches 0-day, higher FP
Precision = TP/(TP+FP)   Recall = TP/(TP+FN)
FP = false alarm (Type I)  FN = missed attack (Type II)
```

## CPU privilege / secure boot

```text
x86 rings: 0 kernel, 1-2 reserved, 3 user
ARM ELs:   EL3 (secure) → EL2 (hypervisor) → EL1 (kernel) → EL0 (user)
Secure boot: firmware→bootloader→kernel (each verifies the next; UEFI Secure Boot)
NX/DEP bit = no-execute data pages   ASLR = randomize layout
TPM/HSM = hardware trust anchors for keys
```

## Security models

| Model | Protects | Rule |
|---|---|---|
| Bell-LaPadula | Confidentiality | No read up, no write down |
| Biba | Integrity | No read down, no write up |
| Chinese Wall | Conflict of interest | No read across competing orgs |
| RBAC | Access | Permissions grouped in roles |

## TLS (use 1.2/1.3 only)

```text
Handshake: ClientHello→ServerHello→Certificate→(key exchange)→Finished→secure channel
Record Protocol: split data → MAC/AEAD → encrypt → send
Alert Protocol: report errors / close_notify
OWASP Top 10: broken access control, injection, crypto failures, misconfiguration,
              vulnerable/outdated, identification/auth, SSRF, XSS, ...
```

## Forensics & response

```text
Forensics: write-block → image → hash(SHA-256) → chain of custody
Incident response (NIST): Prepare→Detect→Contain→Eradicate→Recover→Lessons learned
STRIDE threats: Spoofing, Tampering, Repudiation, Info disclosure, DoS, Elevation of privilege
```

## Cryptography cheat (key guidance)

- Use AES for encryption, SHA-256/SHA-3 for hashing, RSA-3072/ECC-256 for signing.
- Never roll your own crypto; use vetted libraries (OpenSSL, libsodium).
- Protect keys at rest (KMS/HSM) and in use; rotate keys.
