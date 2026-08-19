/* ============================================================
   PROJECT LOG — DATA TEMPLATE
   ------------------------------------------------------------
   This is the only file you need to touch to add a new project.
   Copy one object below, paste it into the PROJECTS array, and
   fill in your own details. The page re-renders automatically —
   no HTML editing required.

   Field guide:
     id       — short case-file code, e.g. "0x07". Keep incrementing.
     title    — project name.
     period   — e.g. "May 2026" or "2025 — Present".
     role     — your role / context, e.g. "Solo developer · Personal".
     tags     — array of short stack/skill tags (3–6 is plenty).
     summary  — one sentence: what it is and why it exists.
     bullets  — 2–4 short lines: what you actually did / built.
     links    — { repo: "https://...", demo: "https://..." }
                omit a key entirely if it doesn't apply.
   ============================================================ */

const PROJECTS = [
  {
    id: "0x01",
    title: "Secure Password Manager",
    period: "May 2026",
    role: "Tampere University — Secure Programming (COMP.SEC.300)",
    tags: ["AES-256", "Argon2", "bcrypt", "CI/CD"],
    summary: "A credential manager built around OWASP-recommended encryption and hashing for data at rest.",
    bullets: [
      "Applied AES-256 for encryption and Argon2/bcrypt for password hashing, following OWASP guidance throughout.",
      "Wired up a GitHub Actions CI/CD pipeline using Bandit for automated vulnerability testing and static analysis on every contribution."
    ],
    links: {}
  },
  {
    id: "0x02",
    title: "Home Server & Security Infrastructure",
    period: "2025",
    role: "Personal project",
    tags: ["WireGuard", "Pi-hole", "nftables", "Docker", "SSL"],
    summary: "An old PC repurposed into a hardened, self-hosted Debian server — built without a dedicated infra budget.",
    bullets: [
      "Self-hosted WireGuard VPN, Pi-hole DNS filtering, nftables firewall rules, a reverse proxy with a custom domain and SSL, and private cloud storage, all in Docker.",
      "Implemented SSH/SFTP hardening, automated certificate renewal, service monitoring, and offsite backup routines for continuous uptime."
    ],
    links: {}
  },
  {
    id: "0x03",
    title: "Linux Triage & Forensic Visualisation Tool",
    period: "2021",
    role: "KPMG / Personal — sole developer",
    tags: ["Bash", "Python", "Elasticsearch", "Kibana"],
    summary: "An incident-response triage script that automates system artifact collection and feeds a live forensic dashboard.",
    bullets: [
      "Automated collection of process trees, network connections, logs, and persistence mechanisms across a compromised host.",
      "Deployed across Ubuntu, RHEL, CentOS, and Debian; piped output into Elasticsearch + Kibana for readable dashboards.",
      "Independently scoped, prototyped, tested, and documented with minimal supervision."
    ],
    links: {}
  },
  {
    id: "0x04",
    title: "IAB Technology Research — 5G/6G Wireless Security",
    period: "May 2026",
    role: "Tampere University — Wireless Networking (COMM.NET.600)",
    tags: ["5G-NR", "IAB", "Authentication", "Spectrum"],
    summary: "A research essay analysing Integrated Access and Backhaul (IAB) as an emerging 5G/6G threat surface.",
    bullets: [
      "Mapped IAB threat vectors and plausible future use cases in next-generation network architectures.",
      "Traced protocol evolution from 3G to 5G-NR, focusing on authentication, handover security, and spectrum management."
    ],
    links: {}
  },
  {
    id: "0x05",
    title: "IoT Digital Twin",
    period: "May 2026",
    role: "Tampere University — Internet of Things (COMP.CE.450)",
    tags: ["IoT", "Real-time Sync", "Data Integrity"],
    summary: "A prototype digital twin that mirrors a physical IoT device's state in real time.",
    bullets: [
      "Explored real-time synchronisation strategies and the data-integrity constraints of connected systems."
    ],
    links: {}
  },
  {
    id: "0x06",
    title: "AMD Process Automation & AI",
    period: "Aug 2025",
    role: "SUTD Service Design Studio — team lead, 6 people",
    tags: ["Python", "React", "Vite", "Automation"],
    summary: "A Python + React/Vite tool that replaced a 45-minute Excel VBA scheduling process with a 10-second automated run.",
    bullets: [
      "Led a 6-person team from problem framing through to a working handover.",
      "Owned GitHub branching strategy, PR workflow, and code review.",
      "Built an AI chatbot to support post-handover code maintenance."
    ],
    links: {}
  },
  {
    id: "0x07",
    title: "The Future of EV Charging",
    period: "2025",
    role: "SUTD Product Design Studio - team technical lead, 5 people",
    tags: ["C++", "ESP32", "Motors", "Actuators", "Robotics"],
    summary: `Reimagined and redesigned an autonomous EV charger that is designed with Singapore's carpark layout and size limitation in mind.
      \nProviding hands free, on-demand charging, reducing down time between cars and increase effective EV charger coverage.`,
    bullets: [
      "Played the role as the team's main coordiantor providing insights and directions to achieve the end results.",
      "Created a life-sized working prototype using ESP32, motors, actuators and 3D prints.",
      "Rendered a full advertisment-like project demostration designed in blender.",
      "Exceed the expectation set by the team and the professors."
    ],
    video: "https://assets.chunyong.cc/projects/FullRender_EVAMInterior.mp4",
    links: {
      report: "assets/projects/EVAM Interior team report.pdf"
    }
  }

  /* ---- add new projects below this line ----

  {
    id: "0x07",
    title: "",
    period: "",
    role: "",
    tags: [],
    summary: "",
    bullets: [],
    links: {}
  },

  */
];
