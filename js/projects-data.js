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
    summary: "A credential manager built around OWASP-recommended encryption and hashing for data at rest.",
    bullets: [
      "Applied AES-256 for encryption and Argon2/bcrypt for password hashing, following OWASP guidance throughout.",
      "Wired up a GitHub Actions CI/CD pipeline using Bandit for automated vulnerability testing and static analysis on every contribution."
    ],
    links: {}
  },
  {
    // id: "0x02",
    sortDate: "2025",
    slug: "home-server-security-infrastructure",
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
    // id: "0x03",
    sortDate: "2021",
    slug: "linux-triage-forensic-tool",
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
    // id: "0x04",
    sortDate: "2026-05",
    slug: "iab-5g-6g-wireless-security",
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
    // id: "0x05",
    sortDate: "2026-05",
    slug: "iot-digital-twin",
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
    // id: "0x06",
    sortDate: "2025-08",
    slug: "amd-process-automation-ai",
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
    // id: "0x07",
    sortDate: "2025",
    slug: "future-of-ev-charging",
    title: "The Future of EV Charging",
    period: "2025",
    role: "SUTD Product Design Studio - team technical lead, 5 people",
    tags: ["C++", "ESP32", "Motors", "Actuators", "Robotics"],
    summary: "Reimagined and redesigned an autonomous EV charger that is designed with Singapore's carpark layout and size limitation in mind. Providing hands free, on-demand charging, reducing down time between cars and increase effective EV charger coverage.",
    sections: [
      {
        title: "Problem",
        body: [
          "Singapore's carparks have a tight layout and strict size limitations, which conventional EV chargers aren't designed around. That constraint creates downtime between cars and limits how much coverage a single charger can effectively provide."
        ]
      },
      {
        title: "Solution",
        body: [
          "Reimagined and redesigned an autonomous EV charger built specifically for Singapore's carpark layout and size limitations — providing hands-free, on-demand charging that reduces downtime between cars and increases effective charger coverage."
        ]
      },
      {
        title: "My Role & What I Built",
        bullets: [
          "Played the role as the team's main coordinator, providing insights and directions to achieve the end results.",
          "Created a life-sized working prototype using ESP32, motors, actuators and 3D prints."
        ]
      },
      {
        title: "Outcome",
        bullets: [
          "Rendered a full advertisement-like project demonstration designed in Blender.",
          "Exceeded the expectations set by the team and the professors."
        ]
      }
    ],
    images: [
      {
        src: "https://assets.chunyong.cc/projects/FullRender_EVAMInterior.mp4",
        alt: "Full Blender render demo of the autonomous EV charger (EVAM), showing its interior and charging operation",
        caption: "Full render demo — EVAM autonomous EV charger"
      }
    ],
    links: {
      report: "assets/projects/EVAM Interior team report.pdf"
    }
  },
  {
    // id: "0x08",
    sortDate: "2026-09",
    slug: "biometric-tee-fhe-pipeline",
    title: "Privacy-Preserving Biometric Identification in a TEE",
    period: "Sep 2026",
    role: "HTX (Home Team Science and Technology Agency) — Cybersecurity Intern, Biometrics & Profiling",
    tags: ["TEE", "FHE", "Gramine-SGX", "TenSEAL", "Biometrics"],
    summary: "A biometric identification pipeline that keeps face data encrypted through computation, running inside a hardware-backed trusted execution environment.",
    sections: [
      { title: "Problem", body: ["Does Fully Homomorphic Encryption provide more security and how does it fair compared to current secure methods?"] },
      { title: "Solution", body: ["Build a pipeline to evaluate and compare current Trusted Execution Envionment (TEE) only and Fully Homomorphic Encryption (FHE) with TEE."] },
      { title: "What I Built", bullets: [
        "Built a full pipeline from enrollment through FHE-encrypted 1:N identification, running inside a Gramine-SGX trusted execution environment on Azure.",
        "Used ArcFace to generate face embeddings and TenSEAL (CKKS scheme) to match them directly on encrypted data, so the server never touches plaintext biometric data.",
        "Hardened the system against insider threats and inference attacks as part of HTX's defensive architecture for biometric profiling."
      ]}
    ],

    links: {}
  }

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
  const paddedNumber = String(index + 1).padStart(2, '0');
  project.id = `0x${paddedNumber}`;
});
