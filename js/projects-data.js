/* ============================================================
   PROJECT LOG — DATA TEMPLATE
   ------------------------------------------------------------
   This is the only file you need to touch to add a new project.
   Copy one object below, paste it into the PROJECTS array, and
   fill in your own details. The page re-renders automatically —
   no HTML editing required.

   Field guide:
     id       — short case-file code, e.g. "0x09". Keep incrementing.
     slug     — URL-friendly name for this project's own page, e.g.
                "secure-password-manager". Lowercase, hyphens, no spaces.
                Used as project.html?slug=secure-password-manager
                If you skip it, the page falls back to matching on `id`.
     title    — project name.
     period   — e.g. "May 2026" or "2025 — Present".
     role     — your role / context, e.g. "Solo developer · Personal".
     tags     — array of short stack/skill tags (3–6 is plenty).
     summary  — one sentence: what it is and why it exists. Shown on
                the project list and homepage teaser cards.
     detail   — optional array of paragraphs (plain text) shown right
                under summary, still inside the intro panel. Good for
                one or two extra sentences of framing before the
                sections below. Leave it out to skip straight to
                sections/bullets.
     sections — how the project's own page is broken into labelled
                parts — Problem, Solution, My Role, Outcome, whatever
                fits. Array of objects:
                  { title: "Problem", body: ["paragraph one.", "paragraph two."] }
                  { title: "What I Built", bullets: ["did this", "did that"] }
                A section can have `body` (paragraphs), `bullets`, or
                both — whichever fits what you're describing. Order in
                the array is the order they're shown. See the EV
                charging project below for a worked example.
     bullets  — legacy field, still supported: if a project has no
                `sections`, its `bullets` render as a single
                "What I Built" section automatically. New projects
                should use `sections` instead — it's the same idea,
                just with room for more than one labelled part.
     images   — array of key screenshots, diagrams, or videos for this
                project. Omit the key, or leave it as [], for none.
                Each entry: { src, alt, caption }
                  src     — path or URL to the file, e.g.
                            "assets/projects/my-shot.png" or a full
                            https:// URL to something you're self-hosting.
                            Video files (.mp4, .webm, .mov, .ogv) are
                            detected automatically by extension and
                            rendered as a playable <video> instead of
                            an image — same field, no extra flag needed.
                  alt     — short description, for screen readers (required)
                  caption — optional one-line note shown under the image/video
     links    — { repo: "https://...", demo: "https://...",
                  report: "path-or-url-to-a-report.pdf" }
                omit whichever keys don't apply. Each renders as its
                own button on the project's page.
   ============================================================ */

const PROJECTS = [
  {
    // id: "0x01",
    sortDate: "2026-05",
    slug: "secure-password-manager",
    title: "Secure Password Manager",
    period: "May 2026",
    role: "Tampere University — Secure Programming (COMP.SEC.300)",
    tags: ["AES-256", "Argon2", "bcrypt", "CI/CD"],
    summary:
      "A credential manager built around OWASP-recommended encryption and hashing for data at rest.",
    sections: [
      {
        title: "Problem",
        body: [
          "Credential managers risk data exfiltration if they rely on outdated hashing algorithms, unauthenticated encryption schemes, or unverified code changes reaching production.",
        ],
      },
      {
        title: "Solution",
        body: [
          "Engineered an OWASP-compliant credential storage application built around authenticated encryption, memory-hard key derivation, and automated continuous security testing.",
        ],
      },
      {
        title: "What I Built",
        bullets: [
          "Cryptographic Storage: Implemented AES-256 to encrypt the password vault at rest and integrated Argon2/bcrypt for master key derivation resistant to GPU-accelerated brute-force attacks.",
          "Automated Security Pipeline: Configured a GitHub Actions CI/CD pipeline using Bandit to automatically run static application security testing (SAST) and flag vulnerabilities on every pull request.",
        ],
      },
    ],
    // bullets: [
    //   "Applied AES-256 for encryption and Argon2/bcrypt for password hashing, following OWASP guidance throughout.",
    //   "Wired up a GitHub Actions CI/CD pipeline using Bandit for automated vulnerability testing and static analysis on every contribution.",
    // ],
    links: {},
  },
  {
    // id: "0x02",
    sortDate: "2025",
    slug: "home-server-security-infrastructure",
    title: "Home Server & Security Infrastructure",
    period: "2025",
    role: "Personal project",
    tags: ["WireGuard", "Pi-hole", "nftables", "Docker", "SSL"],
    summary:
      "An old PC repurposed into a hardened, self-hosted Debian server — built without a dedicated infra budget.",
    bullets: [
      "Self-hosted WireGuard VPN, Pi-hole DNS filtering, nftables firewall rules, a reverse proxy with a custom domain and SSL, and private cloud storage, all in Docker.",
      "Implemented SSH/SFTP hardening, automated certificate renewal, service monitoring, and offsite backup routines for continuous uptime.",
    ],
    links: {},
  },
  {
    // id: "0x03",
    sortDate: "2021",
    slug: "linux-triage-forensic-tool",
    title: "Linux Triage & Forensic Visualisation Tool",
    period: "2021",
    role: "KPMG / Personal — sole developer",
    tags: ["Bash", "Python", "Elasticsearch", "Kibana"],
    summary:
      "An incident-response triage script that automates system artifact collection and feeds a live forensic dashboard.",
    sections: [
      {
        title: "Problem",
        body: [
          "Incident responders handling compromised Linux servers often rely on manual command-line artifact extraction, which is slow, error-prone, and leaves analysts parsing raw text streams during high-stakes triage windows.",
        ],
      },
      {
        title: "Solution",
        body: [
          "Built an automated incident-response collection engine and real-time visualization pipeline that extracts volatility data across heterogeneous Linux distributions and indexes it into forensic dashboards.",
        ],
      },
      {
        title: "What I Built",
        bullets: [
          "Automated Evidence Collection: Authored modular Bash and Python scripts to collect process trees, active network sockets, persistence mechanisms (cron, systemd units), and system logs with minimal host alteration.",
          "Cross-Distribution Portability: Designed and validated the ingestion engine to execute reliably across enterprise distributions, including Ubuntu, RHEL, CentOS, and Debian.",
          "Telemetry Ingestion & Visual Dashboards: Streamed collected host artifacts directly into Elasticsearch and configured Kibana dashboards to provide interactive chronological event timelines for investigators.",
        ],
      },
    ],
    // bullets: [
    //   "Automated collection of process trees, network connections, logs, and persistence mechanisms across a compromised host.",
    //   "Deployed across Ubuntu, RHEL, CentOS, and Debian; piped output into Elasticsearch + Kibana for readable dashboards.",
    //   "Independently scoped, prototyped, tested, and documented with minimal supervision.",
    // ],
    links: {},
  },
  {
    // id: "0x04",
    sortDate: "2026-05",
    slug: "iab-5g-6g-wireless-security",
    title: "IAB Technology Research — 5G/6G Wireless Security",
    period: "May 2026",
    role: "Tampere University — Wireless Networking (COMM.NET.600)",
    tags: ["5G-NR", "IAB", "Authentication", "Spectrum"],
    summary:
      "A research essay analysing Integrated Access and Backhaul (IAB) as an emerging 5G/6G threat surface.",
    sections: [
      {
        title: "Problem",
        body: [
          "Integrated Access and Backhaul (IAB) reduces the need for physical fiber backhaul in 5G-NR and emerging 6G deployments, but sharing the wireless spectrum between access and backhaul links introduces multi-hop trust vulnerabilities and expands the radio attack surface.",
        ],
      },
      {
        title: "Solution",
        body: [
          "Conducted an in-depth security analysis examining architectural threat vectors, authentication protocols, and spectrum-sharing vulnerabilities across multi-hop IAB cellular networks.",
        ],
      },
      {
        title: "What I Built",
        bullets: [
          "Threat Vector Modeling: Mapped interception, spoofing, and rogue-relay attack surfaces unique to multi-hop IAB node topologies in next-generation telecom infrastructure.",
          "Protocol Security Evolution: Evaluated the progression of cellular authentication, handover mechanics, and spectrum management protocols from legacy 3G standards through to 5G-NR.",
          "Architectural Recommendations: Formulated mitigation strategies to protect backhaul payload integrity and prevent eavesdropping across untrusted intermediate relay nodes.",
        ],
      },
    ],
    // bullets: [
    //   "Mapped IAB threat vectors and plausible future use cases in next-generation network architectures.",
    //   "Traced protocol evolution from 3G to 5G-NR, focusing on authentication, handover security, and spectrum management.",
    // ],
    links: {},
  },
  {
    // id: "0x05",
    sortDate: "2026-05",
    slug: "iot-digital-twin",
    title: "IoT Digital Twin",
    period: "May 2026",
    role: "Tampere University — Internet of Things (COMP.CE.450)",
    tags: ["IoT", "Real-time Sync", "Data Integrity"],
    summary:
      "A prototype digital twin that mirrors a physical IoT device's state in real time.",
    // bullets: [
    //   "Explored real-time synchronisation strategies and the data-integrity constraints of connected systems.",
    // ],
    sections: [
      {
        title: "Problem",
        body: [
          "Physical IoT edge nodes operating over unreliable wireless channels frequently encounter latency jitter, lost packets, and state drift, breaking real-time fidelity between edge devices and remote monitoring platforms.",
        ],
      },
      {
        title: "Solution",
        body: [
          "Developed an IoT digital twin prototype that maintains continuous, low-latency state synchronization with a physical device while preserving data integrity.",
        ],
      },
      {
        title: "What I Built",
        bullets: [
          "Real-Time State Synchronization: Engineered an event-driven messaging bridge to reflect physical device telemetry and operational states into the digital twin layer with minimal lag.",
          "Data Integrity Architecture: Built synchronization safeguards to handle transient connectivity loss, out-of-order sensor packets, and edge-to-cloud telemetry reconciliation.",
          "Resource-Constrained Optimization: Evaluated lightweight telemetry protocols to balance transmission speed, message reliability, and embedded power consumption.",
        ],
      },
    ],
    links: {},
  },
  {
    // id: "0x06",
    sortDate: "2025-08",
    slug: "amd-process-automation-ai",
    title: "AMD Process Automation & AI",
    period: "Aug 2025",
    role: "SUTD Service Design Studio — team lead, 6 people",
    tags: ["Python", "React", "Vite", "Automation"],
    summary:
      "A Python + React/Vite tool that replaced a 45-minute Excel VBA scheduling process with a 10-second automated run.",
    // bullets: [
    //   "Led a 6-person team from problem framing through to a working handover.",
    //   "Owned GitHub branching strategy, PR workflow, and code review.",
    //   "Built an AI chatbot to support post-handover code maintenance.",
    // ],
    sections: [
      {
        title: "Problem",
        body: [
          "A 45-minute manual scheduling workflow relying on legacy Excel VBA macros caused operational bottlenecks, high human error rates, and maintenance overhead for engineering staff.",
        ],
      },
      {
        title: "Solution",
        body: [
          "Led a 6-person software engineering team to replace the legacy workflow with a full-stack automation platform, reducing execution time from 45 minutes to 10 seconds.",
        ],
      },
      {
        title: "What I Built",
        bullets: [
          "Core Automation Engine: Re-architected the legacy scheduling logic into optimized Python routines, cutting runtime by over 99%.",
          "Full-Stack Dashboard: Delivered an operational web interface using React and Vite to manage data uploads, visualize schedule assignments, and flag edge-case scheduling conflicts.",
          "Engineering Leadership & AI Support: Managed repository branching workflows and code reviews across 6 contributors, and integrated an AI chatbot to assist non-technical stakeholders with ongoing codebase maintenance.",
        ],
      },
    ],
    links: {},
  },
  {
    // id: "0x07",
    sortDate: "2025",
    slug: "future-of-ev-charging",
    title: "The Future of EV Charging",
    period: "2025",
    role: "SUTD Product Design Studio - team technical lead, 5 people",
    tags: ["C++", "ESP32", "Motors", "Actuators", "Robotics"],
    summary:
      "Reimagined and redesigned an autonomous EV charger that is designed with Singapore's carpark layout and size limitation in mind. Providing hands free, on-demand charging, reducing down time between cars and increase effective EV charger coverage.",
    sections: [
      {
        title: "Problem",
        body: [
          "Singapore's carparks have a tight layout and strict size limitations, which conventional EV chargers aren't designed around. That constraint creates downtime between cars and limits how much coverage a single charger can effectively provide.",
        ],
      },
      {
        title: "Solution",
        body: [
          "Reimagined and redesigned an autonomous EV charger built specifically for Singapore's carpark layout and size limitations — providing hands-free, on-demand charging that reduces downtime between cars and increases effective charger coverage.",
        ],
      },
      {
        title: "My Role & What I Built",
        bullets: [
          "Played the role as the team's main coordinator, providing insights and directions to achieve the end results.",
          "Created a life-sized working prototype using ESP32, motors, actuators and 3D prints.",
        ],
      },
      {
        title: "Outcome",
        bullets: [
          "Rendered a full advertisement-like project demonstration designed in Blender.",
          "Built a life sized scaled working model. Featuring the robotic arm.",
          "Exceeded the expectations set by the team and the professors.",
        ],
      },
    ],
    images: [
      {
        src: "https://assets.chunyong.cc/projects/FullRender_EVAMInterior.mp4",
        alt: "Full Blender render demo of the autonomous EV charger (EVAM), showing its interior and charging operation",
        caption: "Full render demo — EVAM autonomous EV charger",
      },
    ],
    links: {
      report: "assets/projects/EVAM Interior team report.pdf",
    },
  },
  {
    // id: "0x08",
    sortDate: "2026-09",
    slug: "biometric-tee-fhe-pipeline",
    title: "Privacy-Preserving Biometric Identification in a TEE",
    period: "Sep 2026",
    role: "HTX (Home Team Science and Technology Agency) — Cybersecurity Intern, Biometrics & Profiling",
    tags: ["TEE", "FHE", "Gramine-SGX", "TenSEAL", "Biometrics"],
    summary:
      "A biometric identification pipeline that keeps face data encrypted through computation, running inside a hardware-backed trusted execution environment.",
    sections: [
      {
        title: "Problem",
        body: [
          "Traditional biometric systems secure data at rest and in transit, but must decrypt it during processing. This exposes highly sensitive facial profiles to memory scraping and privileged insider threats.The challenge was evaluating whether FHE could close this vulnerability—allowing matching on encrypted data—without destroying system viability.",
        ],
      },
      {
        title: "Solution",
        body: [
          "Engineered a proof-of-concept pipeline to benchmark a traditional TEE-only architecture against a combined TEE + FHE approach, proving that 1:N facial identification can be executed securely without the server ever seeing plaintext data.",
        ],
      },
      {
        title: "What I Built",
        bullets: [
          "End-to-End Encrypted Pipeline: Built the complete lifecycle from user enrollment to 1:N identification, running entirely within an Azure Gramine-SGX enclave.",
          "Zero-Knowledge Processing: Integrated ArcFace for facial embeddings and the TenSEAL library (CKKS scheme) to compute matches directly on ciphertext.",
          "Enterprise-Grade Hardening: Defended the architecture against inference attacks and insider threats, directly contributing to HTX’s defensive biometric profiling strategy.",
        ],
      },
    ],

    links: {},
  },

  /* ---- add new projects below this line ----

  {
    // id: "0x09",
    sortDate: "",
    slug: "",
    title: "",
    period: "",
    role: "",
    tags: [],
    summary: "",
    sections: [
      { title: "Problem", body: [""] },
      { title: "Solution", body: [""] },
      { title: "What I Built", bullets: [""] }
    ],
    images: [],
    links: {}
  },

  */
];

// 1. Sort the projects from newest to oldest based on sortDate
PROJECTS.sort((a, b) => {
  const dateA = a.sortDate || "";
  const dateB = b.sortDate || "";
  return dateB.localeCompare(dateA);
});

// 2. Auto-generate the 'id' field sequentially (0x01, 0x02, etc.)
PROJECTS.forEach((project, index) => {
  const paddedNumber = String(index + 1).padStart(2, "0");
  project.id = `0x${paddedNumber}`;
});
