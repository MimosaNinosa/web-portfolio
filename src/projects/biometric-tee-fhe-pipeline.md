---
title: "Face identification on encrypted data, inside a TEE"
sortDate: "2026-09"
period: "Jun – Sep 2026"
role: "HTX, Biometrics & Profiling · Cybersecurity intern"
stack: ["Gramine-SGX", "Azure", "TenSEAL (CKKS)", "ArcFace", "Python"]
summary: "A 1:N face identification pipeline where embeddings stay encrypted during matching, running inside an SGX enclave, benchmarked against a TEE-only version."
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
