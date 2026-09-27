/* ============================================================
   SITE DATA — the homepage and shared details.
   Available in every template as `site`.
   Text fields are plain text. In `profile.intro`, wrap a phrase
   in *asterisks* to set it in italic accent colour.
   Projects live in src/projects/*.md, posts in src/blog/*.md.
   ============================================================ */

export default {
  profile: {
    name: "Lee Chun Yong",
    location: "Singapore",
    study: "BSc Design & AI, SUTD",
    status: "Open to opportunities", // set to "" to hide
    intro:
      "I'm Chun Yong, a security-focused student at SUTD. This summer at HTX I worked on face matching that runs on data which stays *encrypted, even inside the machine doing the matching.*",
    sub:
      "Before that: digital forensics at KPMG and LLM evaluation at an AI startup in Hangzhou. I also run a small hardened home server, which occasionally turns into a blog post.",
    email: "email@chunyong.cc",
    linkedin: "https://linkedin.com/in/leechunyong",
    linkedinLabel: "linkedin.com/in/leechunyong",
    resumeFile: "https://assets.chunyong.cc/Lee_ChunYong_Resume.docx",
  },

  // The "Research question" block on the homepage. The diagram itself
  // is defined in src/_data/exposure.js.
  research: {
    caption:
      "Most biometric systems protect face data at rest and in transit, then decrypt it to compare faces. A TEE shrinks who can see that moment; FHE removes the plaintext altogether. My HTX project measured what closing that last column costs.",
    projectSlug: "biometric-tee-fhe-pipeline",
  },

  about: {
    paragraphs: [
      "I got into security through a diploma in Cybersecurity and Digital Forensics at Temasek Polytechnic, and an internship at KPMG where I wrote a Linux triage script for incident response. These days I'm more interested in the other end of the problem: designing systems that leak less when someone does get in.",
      "I'm reading a BSc in Design & Artificial Intelligence at SUTD, with exchange semesters at Zhejiang University in Hangzhou and Tampere University in Finland.",
    ],
    facts: [
      { k: "Based in", v: "Singapore" },
      { k: "Studying", v: "SUTD, Design & AI" },
      { k: "Recently", v: "HTX, Biometrics & Profiling" },
      { k: "Interests", v: "TEEs, FHE, applied cryptography" },
      { k: "Daily driver", v: "Arch Linux + Hyprland" },
    ],
  },

  // Most recent first. To add a role: copy an object, fill it in, done.
  experience: [
    {
      role: "Cybersecurity Intern, Biometrics & Profiling",
      org: "HTX (Home Team Science and Technology Agency), Singapore",
      date: "Jun 2026 – Sep 2026",
      bullets: [
        "Built a proof-of-concept 1:N face identification pipeline inside a Gramine-SGX enclave, with matching done on CKKS-encrypted embeddings (TenSEAL).",
        "Compared it against a TEE-only version of the same pipeline, looking at protection against insider threats and inference attacks as well as practical cost.",
        "Contributed to the defensive architecture of biometric profiling systems in a government security setting.",
      ],
    },
    {
      role: "AI Engineering Intern",
      org: "Pettichat (AI startup), Hangzhou, China",
      date: "Nov 2025 – Dec 2025",
      bullets: [
        "Built an evaluation pipeline that scores LLM outputs for accuracy, consistency and safety.",
        "Tested how system-prompt design changes model behaviour, and wrote the findings up as internal guidelines for responsible use.",
      ],
    },
    {
      role: "Cyber Advisory Intern",
      org: "KPMG Singapore",
      date: "Jul 2020 – Feb 2021",
      bullets: [
        "Wrote a Linux triage script (Bash/Python) that collects forensic artifacts during incident response and feeds them into Elasticsearch dashboards.",
        "Analysed malware samples in a sandbox and wrote internal threat-intelligence notes.",
        "Tested tooling across Ubuntu, RHEL, CentOS and Debian for client environments.",
      ],
    },
  ],

  // Most recent first.
  education: [
    {
      role: "BSc, Design and Artificial Intelligence",
      org: "Singapore University of Technology and Design (SUTD) · GPA 4.08",
      date: "2023 – present",
    },
    {
      role: "Exchange: Secure Programming, Wireless Networking, IoT, Functional Programming",
      org: "Tampere University, Finland",
      date: "Jan 2026 – Jun 2026",
    },
    {
      role: "Exchange: Entrepreneurship Programme",
      org: "Zhejiang University, China",
      date: "Sep 2025 – Dec 2025",
    },
    {
      role: "Diploma in Cybersecurity and Digital Forensics",
      org: "Temasek Polytechnic · GPA 3.75",
      date: "2018 – 2021",
    },
  ],

  // Group order = display order. Add a group by copying one object.
  skills: [
    {
      group: "Security",
      items: [
        "TEEs (SGX / Gramine)",
        "FHE (CKKS)",
        "AES-256",
        "Argon2 / bcrypt",
        "Digital forensics",
        "Incident response",
        "Malware analysis",
        "Secure programming",
        "Penetration testing",
        "Network security",
        "5G / IAB security",
        "Threat modelling",
      ],
    },
    {
      group: "Languages",
      items: ["Python", "Bash", "JavaScript", "C++", "Haskell", "HTML/CSS"],
    },
    {
      group: "Tools & platforms",
      items: [
        "Linux (Arch, Ubuntu, RHEL, Debian)",
        "Docker",
        "Git / GitHub Actions",
        "Elasticsearch / Kibana",
        "WireGuard",
        "React",
        "Arduino / ESP32",
      ],
    },
    {
      group: "AI / ML",
      items: [
        "LLM evaluation",
        "Prompt engineering",
        "OpenAI API",
        "TensorFlow",
        "scikit-learn",
        "GANs",
      ],
    },
  ],
};
