"use client";
import { motion } from "framer-motion";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const services = [
  { title: "UI/UX Design", description: "End-to-end product design — research, flows, prototypes, handoff." },
  { title: "Brand Identity", description: "Visual identity, logo, typography, colour — the full system." },
  { title: "Web Design & Build", description: "Designed in Figma, built in Tilda or Framer. Ready to launch." },
  { title: "Communication Design", description: "Marketing materials, decks, social, email campaigns." },
];

export default function StudioPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />

      <section style={{ padding: "10rem 2rem 5rem", maxWidth: "960px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
          className="t-label" style={{ marginBottom: "1.5rem" }}
        >
          Freelance & Studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="t-display" style={{ marginBottom: "2rem" }}
        >
          Let&apos;s work together.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "560px", lineHeight: 1.6 }}
        >
          I take on freelance projects and studio collaborations across Europe. Brands, products, websites — from concept to production.
        </motion.p>
      </section>

      {/* Services */}
      <section style={{ padding: "4rem 2rem 8rem", maxWidth: "960px", margin: "0 auto", borderTop: "1px solid var(--border)" }}>
        <p className="t-label" style={{ marginBottom: "3rem" }}>Services</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              style={{
                padding: "2rem", border: "1px solid var(--border)",
                background: "var(--surface)",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                {s.title}
              </h3>
              <p className="t-body" style={{ fontSize: "0.875rem" }}>{s.description}</p>
            </motion.div>
          ))}
        </div>
        <div style={{ marginTop: "4rem" }}>
          <a
            href="mailto:hello@vlasovapolina.com"
            style={{
              display: "inline-block", padding: "0.875rem 2rem",
              border: "1px solid var(--accent)", color: "var(--accent)",
              textDecoration: "none", fontSize: "0.875rem", letterSpacing: "0.06em", borderRadius: "2px",
            }}
          >
            Start a project
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
