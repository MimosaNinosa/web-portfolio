---
title: "Hardened home server"
sortDate: "2025"
period: "2025"
role: "Personal project"
stack: ["Debian", "Docker", "WireGuard", "nftables", "Pi-hole"]
summary: "An old PC turned into a hardened, self-hosted Debian server, with no infrastructure budget."
featured: true
---

## What runs on it

- WireGuard VPN for remote access.
- Pi-hole for DNS filtering.
- An nftables firewall.
- A reverse proxy with a custom domain and SSL.
- Private cloud storage. Services run in Docker.

## Keeping it up

- Hardened SSH and SFTP.
- Automated certificate renewal and service monitoring.
- Offsite backups.
- A UPS with automatic graceful shutdown, [written up on the blog](/blog/ups-auto-shutdown-debian/).
