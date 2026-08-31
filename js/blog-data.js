/* ============================================================
   BLOG — DATA TEMPLATE
   ------------------------------------------------------------
   Add a new post by copying one object below into the POSTS
   array and filling it in. Most recent post first — that's the
   order they render in.

   Field guide:
     id       — short post code, e.g. "0x03". Keep incrementing.
     title    — post title.
     date     — e.g. "17 Aug 2026".
     tags     — array of short topic tags (2–5 is plenty).
     readTime — optional, e.g. "4 min read". Omit the key to hide it.
     body     — array of paragraphs (plain text, one string per
                paragraph). Keep it plain text — no HTML needed.
   ============================================================ */

const POSTS = [
  // EXAMPLE POST FORMAT
  // {
  //   id: "0x01",
  //   title: "Why I'm building on TEE + FHE instead of picking one",
  //   date: "17 Aug 2026",
  //   tags: ["TEE", "FHE", "Biometrics"],
  //   readTime: "3 min read",
  //   body: [
  //     "Most privacy-preserving pipelines lean on one primitive and accept its blind spot. A TEE-only design keeps computation fast but still trusts the enclave vendor and the attestation chain. An FHE-only design removes that trust assumption but pays for it in latency that most biometric-matching workloads can't absorb.",
  //     "The pipeline I'm working on at HTX layers both: FHE keeps the biometric template encrypted end-to-end, so the server only ever touches ciphertext, while the TEE handles the parts of the matching logic where raw FHE would be too slow to be usable. Neither primitive has to be perfect on its own — they're covering for each other's weak points.",
  //     "This is a placeholder post to show the template. Replace it with your own write-up whenever you're ready to publish something real."
  //   ]
  // }
  {
    id: "0x01",
    title: "Setting Up Auto-Shutdown for a Prolink PRO851SFCU UPS on Debian",
    date: "30 Aug 2026",
    tags: ["Home-labbing", "UPS", "Debian", "Linux"],
    readTime: "10 min read.",
    body: [
        "I recently picked up a Prolink PRO851SFCU UPS to protect my home server setup against unexpected power trips. Getting the hardware plugged in is only half the battle — the real work is configuring Network UPS Tools (NUT) to handle a graceful, automated shutdown before the battery drains completely.",
        "Here is the complete configuration blueprint for setting up NUT with a 2-minute timed auto-shutdown on Debian.",
        "### Step 1: Hardware & Package Installation",
        "Connect the UPS to the server via the USB-A to USB-B cable, then install the NUT packages:",
        "```bash\nsudo apt update && sudo apt install nut nut-client nut-server\n```",
        "### Step 2: Driver & Monitoring Configuration",
        "Because the Prolink PRO851SFCU uses a single 12V 10Ah battery and a Voltronic-QS USB chip, we override the low/high voltage limits in `/etc/nut/ups.conf` to get an accurate 0–100% state-of-charge calculation and prevent poll disconnect spam:",
        "```ini\n# /etc/nut/ups.conf\n[prolink]\n    driver = nutdrv_qx\n    port = auto\n    desc = \"Prolink PRO851SFCU\"\n    override.battery.voltage.low = 9.6\n    override.battery.voltage.high = 13.2\n    override.battery.packs = 1\n    pollinterval = 2\n```",
        "Set the operation mode to standalone in `/etc/nut/nut.conf`:",
        "```ini\n# /etc/nut/nut.conf\nMODE=standalone\n```",
        "Define local monitoring credentials in `/etc/nut/upsd.users`:",
        "```ini\n# /etc/nut/upsd.users\n[monuser]\n    password = secretpass\n    upsmon primary\n```",
        "Configure `upsmon` in `/etc/nut/upsmon.conf` to delegate events to `upssched`:",
        "```ini\n# /etc/nut/upsmon.conf\nMONITOR prolink@localhost 1 monuser secretpass primary\nSHUTDOWNCMD \"/sbin/shutdown -h now\"\nPOWERDOWNFLAG /etc/killpower\n\nNOTIFYCMD /sbin/upssched\nNOTIFYFLAG ONLINE   EXEC+WARN+REGARD\nNOTIFYFLAG ONBATT   EXEC+WARN+REGARD\nNOTIFYFLAG LOWBATT  EXEC+WARN+REGARD\n```",
        "### Step 3: Timed Shutdown Script",
        "To prevent the server from instantly shutting down during brief brownouts, set up a 120-second timer buffer in `/etc/nut/upssched.conf`:",
        "```ini\n# /etc/nut/upssched.conf\nCMDSCRIPT /etc/nut/upssched-cmd\nPIPEFN /var/run/nut/upssched.pipe\nLOCKFN /var/run/nut/upssched.lock\n\nAT ONBATT * START-TIMER shutdown_timer 120\nAT ONLINE * CANCEL-TIMER shutdown_timer\n```",
        "Create the execution script at `/etc/nut/upssched-cmd` (ensure the double 's' in `upssched` to avoid execution errors):",
        "```bash\n#!/bin/sh\ncase $1 in\n    shutdown_timer)\n        /sbin/shutdown -h now \"UPS on battery for 2 minutes. Shutting down system.\"\n        ;;\n    *)\n        logger -t upssched-cmd \"Unknown event: $1\"\n        ;;\nesac\n```",
        "Apply execution permissions and set ownership for the `nut` user:",
        "```bash\nsudo chmod +x /etc/nut/upssched-cmd\nsudo chown nut:nut /etc/nut/upssched-cmd\n```",
        "### Step 4: Verification & Service Startup",
        "Clear any stuck PID files, enable the systemd services, and test the connection:",
        "```bash\nsudo systemctl stop nut-server nut-client\nsudo rm -f /run/nut/*.pid\nsudo systemctl restart nut-server nut-client\nsudo systemctl enable nut-server nut-client\n```",
        "Running `upsc prolink@localhost` should now report `ups.status: OL` and `battery.charge: 100`. You can safely test the script logic by manually executing `sudo /etc/nut/upssched-cmd shutdown_timer` and cancelling it with `sudo shutdown -c`."
      ]
  }
];
