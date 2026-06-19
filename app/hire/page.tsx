"use client";
import { motion } from "framer-motion";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const skills = {
  "Design & Craft": ["UI/UX Design", "Brand Identity", "Communication Design", "Interaction Design", "Design Systems", "Graphic Design", "Motion / Basic Animation"],
  "Tools & Tech": ["Figma", "Adobe Creative Suite", "Tilda (no-code web)", "Framer", "AI tools (Midjourney, Figma AI)"],
  "Leadership & Collaboration": ["Creative Direction", "Stakeholder Communication", "Cross-functional Collaboration", "Freelance Ownership"],
};

export default function HirePage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: "10rem 2rem 5rem", maxWidth: "960px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
          className="t-label" style={{ marginBottom: "1.5rem" }}
        >
          Available for hire
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="t-display" style={{ marginBottom: "2rem" }}
        >
          UI/UX & Brand Designer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "600px", lineHeight: 1.6, marginBottom: "2.5rem" }}
        >
          9 years of experience across UI/UX, brand, and communication design. I work at the intersection of visual craft and product thinking — designing interfaces, identities, and web experiences that are clear, considered, and built to last.
        </motion.p>
        <motion.a
          href="mailto:hello@vlasovapolina.com"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            display: "inline-block", padding: "0.875rem 2rem",
            border: "1px solid var(--accent)", color: "var(--accent)",
            textDecoration: "none", fontSize: "0.875rem", letterSpacing: "0.06em",
            transition: "all 0.2s", borderRadius: "2px",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--bg)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
        >
          Get in touch
        </motion.a>
      </section>

      {/* Skills */}
      <section style={{ padding: "4rem 2rem 8rem", maxWidth: "960px", margin: "0 auto", borderTop: "1px solid var(--border)" }}>
        <p className="t-label" style={{ marginBottom: "3rem" }}>What I do</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "3rem" }}>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p style={{ fontSize: "0.875rem", color: "var(--text-primary)", marginBottom: "1rem", fontFamily: "var(--font-display)", fontWeight: 300 }}>
                {group}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {items.map(skill => (
                  <li key={skill} style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
