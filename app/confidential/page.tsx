"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";

const PASSWORD = process.env.NEXT_PUBLIC_CONFIDENTIAL_PASSWORD || "portfolio2025";

export default function ConfidentialPage() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (unlocked) {
    return (
      <>
        <Header />
        <div style={{ paddingTop: "64px", minHeight: "100vh", padding: "120px 80px 80px" }}>
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontSize: "14px", color: "var(--color-grey-light)", marginBottom: "8px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>
              Confidential work
            </p>
            <h1 style={{ fontSize: "20px", fontWeight: 500, color: "var(--color-dark)", marginBottom: "48px" }}>
              NDA projects
            </h1>
            <p style={{ fontSize: "14px", lineHeight: "24px", color: "var(--color-grey)" }}>
              Case studies and projects under NDA will appear here.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div style={{
        paddingTop: "64px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{ width: "100%", maxWidth: "360px", padding: "0 20px" }}>
          <p style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--color-dark)",
            marginBottom: "8px",
          }}>
            Confidential work
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-grey)", marginBottom: "32px", lineHeight: "24px" }}>
            This section contains NDA projects. Enter the password to view.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input
              type="password"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Password"
              autoFocus
              style={{
                width: "100%",
                height: "48px",
                border: `1px solid ${error ? "#E53E3E" : "var(--color-stroke)"}`,
                borderRadius: "8px",
                padding: "0 16px",
                fontSize: "14px",
                color: "var(--color-dark)",
                background: "var(--color-bg-image)",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
            {error && (
              <p style={{ fontSize: "13px", color: "#E53E3E" }}>Incorrect password</p>
            )}
            <button
              type="submit"
              style={{
                height: "48px",
                background: "var(--color-dark)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
