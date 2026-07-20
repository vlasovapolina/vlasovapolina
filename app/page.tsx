"use client";
import Header from "@/components/layout/Header";

const projects = [
  {
    id: "project-01",
    name: "Project Name",
    year: "2025",
    description: "Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff, collaborate closely with developers, product managers, and marketing teams.",
    hasCase: true,
  },
  {
    id: "project-02",
    name: "Project Name",
    year: "2025",
    description: "Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff, collaborate closely with developers, product managers, and marketing teams.",
    hasCase: true,
  },
  {
    id: "project-03",
    name: "Project Name",
    year: "2025",
    description: "Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff, collaborate closely with developers, product managers, and marketing teams.",
    hasCase: true,
  },
];

const Dot = () => (
  <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--color-grey)", display: "inline-block", flexShrink: 0 }} />
);

const contacts = [
  { label: "X", href: "https://x.com/Vlasovapolinaa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/palinapryshchep" },
  { label: "Telegram", href: "https://t.me/vlasovapolina" },
  { label: "CV", href: "/cv.pdf" },
];

function ContactsBlock() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)", display: "flex", alignItems: "center", gap: "4px" }}>
          <span>⊙</span> Warsaw, Poland
        </span>
        <Dot />
        <a href="mailto:vlasovaapolina@gmail.com" style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)" }}>
          vlasovaapolina@gmail.com
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
        {contacts.map((link, i) => (
          <span key={link.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <a href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)" }}>
              {link.label}
            </a>
            {i < contacts.length - 1 && <Dot />}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div style={{
      borderTop: index === 0 ? "none" : "1px solid var(--color-stroke)",
      paddingTop: "48px",
      paddingBottom: "48px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)" }}>{project.name}</span>
        <Dot />
        <span style={{ fontSize: "14px", color: "var(--color-grey)" }}>{project.year}</span>
      </div>
      <p style={{ fontSize: "14px", lineHeight: "24px", color: "var(--color-grey)", marginBottom: "16px" }}>
        {project.description}
      </p>
      {project.hasCase && (
        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "24px" }}>
          <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)", cursor: "pointer" }}>Learn more</span>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M6 1L9 4L6 7M1 4H9" stroke="#282828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
      <div style={{
        width: "100%", height: "232px",
        background: "var(--color-bg-image)",
        border: "1px solid var(--color-stroke)",
        borderRadius: "12px",
      }} className="project-image" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />

      <div style={{ display: "flex", minHeight: "100vh", paddingTop: "64px" }}>

        {/* ─── LEFT SIDEBAR (desktop only) ─── */}
        <div style={{
          position: "fixed",
          top: "64px", left: 0,
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
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            <p style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.4", letterSpacing: "0.2px", color: "var(--color-dark)" }}>
              Hi. I&apos;m <strong style={{ fontWeight: 500 }}>Polina</strong>, a UI/UX & Brand Designer
              crafting interfaces and identities. Based in Warsaw, working globally.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "24px", color: "var(--color-grey)" }}>
              Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff, collaborate closely with developers, product managers, and marketing teams. Open to freelance projects, part-time roles, and studio collaborations across Europe.
            </p>
          </div>
          <ContactsBlock />
        </div>

        {/* ─── RIGHT SCROLLABLE AREA (desktop) ─── */}
        <div style={{ marginLeft: "515px", flex: 1, paddingLeft: "24px", paddingRight: "80px" }} className="main-content">

          {/* Mobile bio block — visible only on mobile */}
          <div className="mobile-bio" style={{
            display: "none",
            paddingTop: "52px",
            paddingBottom: "0",
            flexDirection: "column",
            gap: "48px",
          }}>
            {/* On very small screens: full bio */}
            <div className="mobile-bio-full" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              <p style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.4", letterSpacing: "0.2px", color: "var(--color-dark)" }}>
                Hi. I&apos;m <strong style={{ fontWeight: 500 }}>Polina</strong>, a UI/UX & Brand Designer
                crafting interfaces and identities. Based in Warsaw, working globally.
              </p>
              <p style={{ fontSize: "14px", lineHeight: "24px", color: "var(--color-grey)" }}>
                Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff, collaborate closely with developers, product managers, and marketing teams. Open to freelance projects, part-time roles, and studio collaborations across Europe.
              </p>
            </div>
            {/* On medium screens: only headline */}
            <div className="mobile-bio-short" style={{ display: "none" }}>
              <p style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.4", letterSpacing: "0.2px", color: "var(--color-dark)" }}>
                Hi. I&apos;m <strong style={{ fontWeight: 500 }}>Polina</strong>, a UI/UX & Brand Designer
                crafting interfaces and identities. Based in Warsaw, working globally.
              </p>
            </div>
            <ContactsBlock />
          </div>

          {/* Projects */}
          <div style={{ borderTop: "1px solid var(--color-stroke)" }} className="projects-section">
            {projects.map((project, i) => (
              <ProjectRow key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* Selected work */}
          <div style={{ borderTop: "1px solid var(--color-stroke)", paddingTop: "52px", paddingBottom: "80px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
              <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)" }}>Selected work</span>
              <Dot />
              <span style={{ fontSize: "14px", color: "var(--color-grey)" }}>2020–2025</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} style={{
                  width: "100%", height: "232px",
                  background: "var(--color-bg-image)",
                  border: "1px solid var(--color-stroke)",
                  borderRadius: "12px",
                }} className="project-image" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Tablet */
        @media (max-width: 1024px) {
          .sidebar { width: 380px !important; padding-left: 40px !important; }
          .main-content { margin-left: 380px !important; padding-right: 40px !important; }
        }

        /* Mobile — hide sidebar, show bio in right column */
        @media (max-width: 768px) {
          .sidebar { display: none !important; }
          .main-content { margin-left: 0 !important; padding-left: 20px !important; padding-right: 20px !important; }
          .mobile-bio { display: flex !important; }
          .projects-section { border-top: 1px solid var(--color-stroke); margin-top: 48px; }
          .project-image { height: 232px !important; }
        }

        /* Very small ≤480px — only headline, no description */
        @media (max-width: 480px) {
          .mobile-bio-full { display: none !important; }
          .mobile-bio-short { display: block !important; }
        }

        /* Medium mobile 481–768px — full bio with description */
        @media (min-width: 481px) and (max-width: 768px) {
          .mobile-bio-full { display: flex !important; }
          .mobile-bio-short { display: none !important; }
        }

        /* Desktop image height */
        @media (min-width: 769px) {
          .project-image { height: 480px !important; }
        }
      `}</style>
    </>
  );
}
