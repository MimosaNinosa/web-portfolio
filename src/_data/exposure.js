// Where is biometric data readable, for three system designs?
// Rendered by src/_includes/exposure.njk — on the homepage and inside
// the biometric project write-up.
//   enc     — ciphertext
//   enclave — plaintext, but only inside a hardware-isolated enclave
//   plain   — plaintext the host can read
export default {
  columns: ["At rest", "In transit", "While matching"],
  rows: [
    {
      name: "Conventional",
      note: "no TEE, no FHE",
      cells: [
        { kind: "enc", label: "encrypted" },
        { kind: "enc", label: "encrypted" },
        { kind: "plain", label: "plaintext in host memory" },
      ],
    },
    {
      name: "TEE only",
      note: "SGX enclave",
      cells: [
        { kind: "enc", label: "encrypted" },
        { kind: "enc", label: "encrypted" },
        { kind: "enclave", label: "plaintext, inside enclave" },
      ],
    },
    {
      name: "TEE + FHE",
      note: "SGX + CKKS",
      cells: [
        { kind: "enc", label: "encrypted" },
        { kind: "enc", label: "encrypted" },
        { kind: "enc", label: "ciphertext, inside enclave" },
      ],
    },
  ],
};
