---
title: "IoT digital twin"
sortDate: "2026-05"
period: "May 2026"
role: "Tampere University · Internet of Things (COMP.CE.450)"
stack: ["IoT", "Real-time sync", "Telemetry"]
summary: "A prototype digital twin that mirrors a physical IoT device's state in real time."
---

## The problem

Devices on unreliable wireless links drop packets, deliver them out of order and drift out of sync with whatever is monitoring them. A digital twin is only useful if it stays accurate through all of that.

## What I built

- An event-driven bridge that pushes device telemetry and state into the twin with minimal lag.
- Handling for dropped connections, out-of-order packets and reconciliation between device and cloud.
- A comparison of lightweight telemetry protocols for speed, reliability and power use.
