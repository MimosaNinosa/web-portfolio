/* ============================================================
   SITE DATA — everything on the homepage lives here.
   Edit this file to update your portfolio. index.html renders
   itself from this data automatically — no HTML editing needed.
   The "Featured projects" section pulls from js/projects-data.js
   directly, so you never have to update project info twice.
   ============================================================ */

const SITE = {

  profile: {
    name: "Lee Chun Yong",
    roleTag: "Cybersecurity Engineer — Trusted Execution & Applied Cryptography",
    location: "Singapore · SUTD × Tampere University",
    status: "OPEN TO OPPORTUNITIES",     // shown as the pulsing status pill
    tagline: "I build systems that keep data private even while it's being computed on from a TEE-backed biometric pipeline at Singapore's HTX, to a homelab wired end-to-end with WireGuard, nftables, and encrypted backups.",
    email: "1008108@mymail.sutd.edu.sg",
    phone: "+65 9119 8286",
    linkedin: "https://linkedin.com/in/leechunyong",
    linkedinLabel: "linkedin.com/in/leechunyong",
    resumeFile: "https://assets.chunyong.cc/Lee_ChunYong_Resume_Cyber.pdf"
  },

  about: {
    paragraphs: [
      "Cybersecurity-focused engineer with hands-on experience across digital forensics, secure systems design, and applied cryptography. My background spans offensive security tooling, defensive programming, and privacy-preserving technologies — particularly Trusted Execution Environments (TEE) and Fully Homomorphic Encryption (FHE) — alongside AI safety evaluation work.",
      "Currently reading a BSc in Design & Artificial Intelligence at SUTD, with an exchange at Tampere University, Finland, and interning with HTX's Biometrics and Profiling department, where I work on hardening biometric data against insider threats and inference attacks."
    ],
    facts: [
      { k: "Based in", v: "Singapore" },
      { k: "Currently", v: "HTX, Biometrics & Profiling" },
      { k: "Exchange", v: "Tampere University, FI" },
      { k: "Focus", v: "TEE / FHE / Applied Crypto" },
      { k: "Daily driver", v: "Arch Linux + Hyprland" },
      { k: "Contact", v: "91198286" }
    ]
  },

  // Most recent first. To add a role: copy an object, fill it in, done.
  experience: [
    {
      role: "Cybersecurity Intern — Biometrics & Profiling",
      org: "HTX (Home Team Science and Technology Agency), Singapore",
      date: "2025 — Present",
      bullets: [
        "Implementing Trusted Execution Environments (TEE) and Fully Homomorphic Encryption (FHE) to enable privacy-preserving biometric processing, keeping data encrypted through computation.",
        "Researching practical TEE+FHE deployment to harden biometric systems against insider threats and inference attacks.",
        "Contributing to defensive architecture for biometric profiling systems in a government security context.",
        "Evaluating the effectiveness of TEE and FHE for biometrics security compared to just TEE deployments."
      ]
    },
    {
      role: "AI Engineering Intern",
      org: "Pettichat (AI Startup), Hangzhou, China",
      date: "Nov — Dec 2025",
      bullets: [
        "Built an end-to-end LLM evaluation pipeline benchmarking model outputs on accuracy, consistency, and safety.",
        "Investigated how system prompt design shapes LLM behaviour, informing safer deployment practices.",
        "Documented evaluation methodology and produced internal guidelines for responsible AI usage."
      ]
    },
    {
      role: "Cyber Advisory Intern",
      org: "KPMG Singapore",
      date: "Jul 2020 — Feb 2021",
      bullets: [
        "Built a Linux triage script from scratch (Bash/Python) for automated forensic collection during incident response, feeding real-time dashboards via Elasticsearch.",
        "Conducted malware sandbox analysis and authored internal threat intelligence documentation.",
        "Configured and tested tooling across Ubuntu, RHEL, CentOS, and Debian for client-specific requirements."
      ]
    }
  ],

  // Most recent first.
  education: [
    {
      role: "BSc, Design and Artificial Intelligence",
      org: "Singapore University of Technology and Design (SUTD) · GPA 4.08",
      date: "2023 — Present"
    },
    {
      role: "Exchange — Secure Programming, Wireless Networking, IoT, Functional Programming",
      org: "Tampere University, Finland",
      date: "Dec 2025 — Jul 2026"
    },
    {
      role: "Diploma in Cybersecurity and Digital Forensics",
      org: "Temasek Polytechnic · GPA 3.75",
      date: "2018 — 2021"
    }
  ],

  // Group order = display order. Add a group by copying one object.
  skills: [
    {
      group: "Security & Forensics",
      items: ["TEE", "FHE", "AES-256", "Argon2 / bcrypt", "Digital Forensics", "Incident Response", "Malware Analysis", "Secure Programming", "Penetration Testing", "Network Security", "IAB / 5G", "Threat Modeling"]
    },
    {
      group: "Languages",
      items: ["Python", "Bash", "JavaScript", "C++", "Haskell", "HTML/CSS"]
    },
    {
      group: "Tools & Platforms",
      items: ["Docker", "Git / GitHub Actions", "Elasticsearch / Kibana", "WireGuard", "Linux (Arch/Ubuntu/RHEL/Debian)", "React", "Arduino"]
    },
    {
      group: "AI / ML",
      items: ["LLM Evaluation", "Prompt Engineering", "OpenAI API", "TensorFlow", "Scikit-learn", "GANs", "Model Safety Assessment"]
    }
  ],

  // How many entries from js/projects-data.js to feature on the homepage.
  featuredCount: 3
};
