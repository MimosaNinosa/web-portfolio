---
title: "Face identification on homomorphically encrypted data, inside an SGX enclave"
sortDate: "2026-09"
period: "Jun – Sep 2026"
role: "HTX, Biometrics & Profiling · Cybersecurity intern"
stack: ["Gramine-SGX", "Azure", "TenSEAL (CKKS)", "ArcFace", "Python"]
summary: "A 1:N face identification pipeline where embeddings stay encrypted during matching, running inside an SGX enclave, benchmarked against a TEE-only version."
result: "~6,000× cost of FHE matching"
featured: true
---

## The problem

Most biometric systems encrypt face data at rest and in transit, then decrypt it to do the matching. At that moment the templates sit in memory as plaintext, where memory scraping or a privileged insider can read them.

A trusted execution environment narrows that window: the plaintext only exists inside a hardware-isolated enclave. But it is still plaintext. The question I worked on was whether adding fully homomorphic encryption, so that matching happens directly on ciphertext, closes the gap without making the system too slow to be usable.

## Where the face data is readable

{% include "exposure.njk" %}

## What I built

- The full lifecycle from enrollment to 1:N identification, running inside a Gramine-SGX enclave on Azure.
- Face embeddings from ArcFace, encrypted with the CKKS scheme via TenSEAL, so similarity scores are computed on ciphertext.
- A TEE-only baseline of the same pipeline, so the cost of FHE could be measured rather than guessed.

## Threats in scope

- Privileged insiders with access to the host.
- Memory scraping during processing.
- Inference attacks against stored templates.

## Results

- **Matching on ciphertext was about 6,000× slower** than matching plaintext embeddings, and the time grew as the gallery of enrolled faces got bigger.
- **The network, not the encryption maths, was the biggest cost.** The enclave can't decrypt the similarity scores, so it can't pick the best match itself. Every encrypted score has to go back to the client to be decrypted, and that traffic grows with every face enrolled.
- **So FHE closes the last gap, at a price.** I documented the benchmarks and trade-offs for the HTX team, as evidence for how much protection the extra cost buys.
