"use client";
import { motion } from "framer-motion";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />

      <section style={{ padding: "10rem 2rem 5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
          className="t-label" style={{ marginBottom: "1.5rem" }}
        >
          UI/UX & Brand Designer · Warsaw
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="t-display" style={{ maxWidth: "900px", marginBottom: "3rem" }}
        >
          Designing interfaces and brand experiences that work.
        </motion.h1>
      </section>

      <section style={{ padding: "0 2rem 8rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))", gap: "1.5rem" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <Link href={`/work/${project.id}`} style={{ textDecoration: "none", display: "block" }}>
                <div
                  style={{
                    background: "var(--surface)", border: "1px solid var(--border)",
                    borderRadius: "4px", overflow: "hidden", transition: "border-color 0.2s", cursor: "pointer",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div style={{
                    width: "100%", aspectRatio: "16/9", background: "var(--bg-2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--border)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>
                    Cover image
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                      <span className="t-label">{project.category} · {project.year}</span>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                        {project.tags.map(tag => (
                          <span key={tag} style={{
                            fontSize: "0.7rem", padding: "0.2rem 0.6rem",
                            border: "1px solid var(--border)", borderRadius: "2px",
                            color: "var(--text-secondary)", letterSpacing: "0.06em",
                          }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 300, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                      {project.title}
                    </h2>
                    <p className="t-body" style={{ fontSize: "0.875rem" }}>{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
