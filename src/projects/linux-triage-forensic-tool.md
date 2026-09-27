---
title: "Linux triage and forensic dashboards"
sortDate: "2021"
period: "2021"
role: "KPMG Singapore · Sole developer"
stack: ["Bash", "Python", "Elasticsearch", "Kibana"]
summary: "An incident-response script that collects evidence from a compromised Linux host and feeds it into Kibana dashboards."
---

## The problem

Triage on a compromised Linux server usually means running commands by hand and reading raw output under time pressure. It is slow, easy to get wrong, and hard to review afterwards.

## What I built

- Bash and Python collectors for process trees, network connections, persistence (cron, systemd units) and logs, designed to change the host as little as possible.
- Tested across Ubuntu, RHEL, CentOS and Debian.
- Output streamed into Elasticsearch, with Kibana dashboards that lay events out as a timeline.
- Scoped, prototyped, tested and documented largely on my own.
