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
];
