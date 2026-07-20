"use client";
import Header from "@/components/layout/Header";
import Link from "next/link";

const projects = [
  {
    id: "project-01",
    name: "Project Name",
    year: "2025",
    description: "Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff.",
    hasCase: true,
  },
  {
    id: "project-02",
    name: "Project Name",
    year: "2025",
    description: "Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff.",
    hasCase: true,
  },
  {
    id: "project-03",
    name: "Project Name",
    year: "2025",
    description: "Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff.",
    hasCase: true,
  },
];

const selectedImages = [1, 2, 3]; // placeholder count

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div style={{
      borderTop: index === 0 ? "none" : "1px solid var(--color-stroke)",
      paddingTop: "52px",
      paddingBottom: "52px",
    }}>
      {/* Meta */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)" }}>{project.name}</span>
        <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--color-grey)" }} />
        <span style={{ fontSize: "14px", color: "var(--color-grey)" }}>{project.year}</span>
      </div>

      {/* Description */}
      <p style={{
        fontSize: "14px",
        lineHeight: "24px",
        color: "var(--color-grey)",
        marginBottom: "16px",
        maxWidth: "720px",
      }}>
        {project.description}
      </p>

      {/* Learn more */}
      {project.hasCase && (
        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "24px" }}>
          <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)", cursor: "pointer" }}>
            Learn more
          </span>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M6 1L9 4L6 7M1 4H9" stroke="#282828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}

      {/* Image placeholder */}
      <div style={{
        width: "100%",
        height: "480px",
        background: "var(--color-bg-image)",
        border: "1px solid var(--color-stroke)",
        borderRadius: "12px",
      }} />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />

      <div style={{
        display: "flex",
        minHeight: "100vh",
        paddingTop: "64px",
      }}>
        {/* Left sidebar — fixed */}
        <div style={{
          position: "fixed",
          top: "64px",
          left: 0,
          width: "515px",
          height: "calc(100vh - 64px)",
          borderRight: "1px solid var(--color-stroke)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingLeft: "80px",
          paddingRight: "42px",
          paddingTop: "52px",
          paddingBottom: "80px",
        }} className="sidebar">

          {/* Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            <p style={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "1.4",
              letterSpacing: "0.2px",
              color: "var(--color-dark)",
            }}>
              Hi. I&apos;m <strong style={{ fontWeight: 500 }}>Polina</strong>, a UI/UX & Brand Designer
              crafting interfaces and identities. Based in Warsaw, working globally.
            </p>

            <p style={{
              fontSize: "14px",
              lineHeight: "24px",
              color: "var(--color-grey)",
            }}>
              Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff, collaborate closely with developers, product managers, and marketing teams. Open to freelance projects, part-time roles, and studio collaborations across Europe.
            </p>
          </div>

          {/* Contacts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)", display: "flex", alignItems: "center", gap: "4px" }}>
                <span>⊙</span> Warsaw, Poland
              </span>
              <span style={{ color: "var(--color-stroke)" }}>·</span>
              <a href="mailto:vlasovaapolina@gmail.com" style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)" }}>
                vlasovaapolina@gmail.com
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {[
                { label: "X", href: "https://x.com/Vlasovapolinaa" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/palinapryshchep" },
                { label: "Telegram", href: "https://t.me/vlasovapolina" },
                { label: "CV", href: "/cv.pdf" },
              ].map((link, i, arr) => (
                <span key={link.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)" }}
                  >
                    {link.label}
                  </a>
                  {i < arr.length - 1 && (
                    <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--color-grey-light)", flexShrink: 0 }} />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right scrollable area */}
        <div style={{
          marginLeft: "515px",
          flex: 1,
          paddingLeft: "24px",
          paddingRight: "80px",
        }} className="main-content">

          {/* Featured projects */}
          <div>
            {projects.map((project, i) => (
              <ProjectRow key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* Selected work gallery */}
          <div style={{ borderTop: "1px solid var(--color-stroke)", paddingTop: "52px", paddingBottom: "80px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
              <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)" }}>Selected work</span>
              <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--color-grey)" }} />
              <span style={{ fontSize: "14px", color: "var(--color-grey)" }}>2020–2025</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {selectedImages.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "100%",
                    height: "480px",
                    background: "var(--color-bg-image)",
                    border: "1px solid var(--color-stroke)",
                    borderRadius: "12px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .sidebar {
            width: 380px !important;
            padding-left: 40px !important;
          }
          .main-content {
            margin-left: 380px !important;
            padding-right: 40px !important;
          }
        }
        @media (max-width: 768px) {
          .sidebar {
            display: none !important;
          }
          .main-content {
            margin-left: 0 !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>
    </>
  );
}
