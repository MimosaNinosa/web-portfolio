---
title: "Setting Up Auto-Shutdown for a Prolink PRO851SFCU UPS on Debian"
date: 2026-08-30
topics: ["Home-labbing", "UPS", "Debian", "Linux"]
readTime: "10 min read"
legacyId: "0x01"
---

I recently picked up a Prolink PRO851SFCU UPS to protect my home server setup against unexpected power trips. Getting the hardware plugged in is only half the battle — the real work is configuring Network UPS Tools (NUT) to handle a graceful, automated shutdown before the battery drains completely.

Here is the complete configuration blueprint for setting up NUT with a 2-minute timed auto-shutdown on Debian.

## Step 1: Hardware & Package Installation

Connect the UPS to the server via the USB-A to USB-B cable, then install the NUT packages:

```bash
sudo apt update && sudo apt install nut nut-client nut-server
```

## Step 2: Driver & Monitoring Configuration

Because the Prolink PRO851SFCU uses a single 12V 10Ah battery and a Voltronic-QS USB chip, we override the low/high voltage limits in `/etc/nut/ups.conf` to get an accurate 0–100% state-of-charge calculation and prevent poll disconnect spam:

```ini
# /etc/nut/ups.conf
[prolink]
    driver = nutdrv_qx
    port = auto
    desc = "Prolink PRO851SFCU"
    override.battery.voltage.low = 9.6
    override.battery.voltage.high = 13.2
    override.battery.packs = 1
    pollinterval = 2
```

Set the operation mode to standalone in `/etc/nut/nut.conf`:

```ini
# /etc/nut/nut.conf
MODE=standalone
```

Define local monitoring credentials in `/etc/nut/upsd.users`:

```ini
# /etc/nut/upsd.users
[monuser]
    password = secretpass
    upsmon primary
```

Configure `upsmon` in `/etc/nut/upsmon.conf` to delegate events to `upssched`:

```ini
# /etc/nut/upsmon.conf
MONITOR prolink@localhost 1 monuser secretpass primary
SHUTDOWNCMD "/sbin/shutdown -h now"
POWERDOWNFLAG /etc/killpower

NOTIFYCMD /sbin/upssched
NOTIFYFLAG ONLINE   EXEC+WARN+REGARD
NOTIFYFLAG ONBATT   EXEC+WARN+REGARD
NOTIFYFLAG LOWBATT  EXEC+WARN+REGARD
```

## Step 3: Timed Shutdown Script

To prevent the server from instantly shutting down during brief brownouts, set up a 120-second timer buffer in `/etc/nut/upssched.conf`:

```ini
# /etc/nut/upssched.conf
CMDSCRIPT /etc/nut/upssched-cmd
PIPEFN /var/run/nut/upssched.pipe
LOCKFN /var/run/nut/upssched.lock

AT ONBATT * START-TIMER shutdown_timer 120
AT ONLINE * CANCEL-TIMER shutdown_timer
```

Create the execution script at `/etc/nut/upssched-cmd` (ensure the double 's' in `upssched` to avoid execution errors):

```bash
#!/bin/sh
case $1 in
    shutdown_timer)
        /sbin/shutdown -h now "UPS on battery for 2 minutes. Shutting down system."
        ;;
    *)
        logger -t upssched-cmd "Unknown event: $1"
        ;;
esac
```

Apply execution permissions and set ownership for the `nut` user:

```bash
sudo chmod +x /etc/nut/upssched-cmd
sudo chown nut:nut /etc/nut/upssched-cmd
```

## Step 4: Verification & Service Startup

Clear any stuck PID files, enable the systemd services, and test the connection:

```bash
sudo systemctl stop nut-server nut-client
sudo rm -f /run/nut/*.pid
sudo systemctl restart nut-server nut-client
sudo systemctl enable nut-server nut-client
```

Running `upsc prolink@localhost` should now report `ups.status: OL` and `battery.charge: 100`. You can safely test the script logic by manually executing `sudo /etc/nut/upssched-cmd shutdown_timer` and cancelling it with `sudo shutdown -c`.
