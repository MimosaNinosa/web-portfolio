---
title: "Secure password manager"
sortDate: "2026-05"
period: "May 2026"
role: "Tampere University · Secure Programming (COMP.SEC.300)"
stack: ["Python", "AES-256", "Argon2", "bcrypt", "GitHub Actions", "Bandit"]
summary: "A password vault built for a secure programming course, following OWASP guidance on encryption and password hashing."
---

## Why

Password managers tend to fail in predictable ways: fast hashes that are cheap to brute-force, encryption without integrity checks, and insecure code slipping in unnoticed. I built this one around avoiding those three.

## What I built

- The vault is encrypted at rest with AES-256, using authenticated encryption.
- The master password goes through Argon2 or bcrypt. Both are deliberately slow, and Argon2 is memory-hard, which makes GPU brute-forcing expensive.
- A GitHub Actions pipeline runs Bandit static analysis on every pull request.
