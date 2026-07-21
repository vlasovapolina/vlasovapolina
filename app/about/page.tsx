"use client";
import Header from "@/components/layout/Header";
import HoverLink from "@/components/ui/HoverLink";

export default function AboutPage() {
  return (
    <>
      <Header />

      <div style={{
        paddingTop: "64px",
        minHeight: "100vh",
      }}>
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 80px",
        }} className="about-container">

          {/* Intro section */}
          <div style={{
            display: "flex",
            paddingTop: "52px",
            paddingBottom: "64px",
            borderBottom: "1px solid var(--color-stroke)",
            gap: "0",
          }} className="about-section">

            {/* Label */}
            <div style={{ width: "193px", flexShrink: 0 }} className="about-label">
              <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)" }}>Intro</span>
            </div>

            {/* Content */}
            <div style={{ flex: 1, maxWidth: "628px" }}>
              <p style={{
                fontSize: "14px",
                lineHeight: "24px",
                color: "var(--color-grey)",
                marginBottom: "40px",
              }}>
                Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff, collaborate closely with developers, product managers, and marketing teams.
              </p>

              {/* Photo placeholder */}
              <div style={{
                width: "302px",
                height: "234px",
                background: "var(--color-bg-image)",
                border: "1px solid var(--color-stroke)",
                borderRadius: "12px",
              }} />
            </div>
          </div>

          {/* Experience section */}
          <div style={{
            display: "flex",
            paddingTop: "52px",
            paddingBottom: "80px",
            gap: "0",
          }} className="about-section">

            {/* Label */}
            <div style={{ width: "193px", flexShrink: 0 }} className="about-label">
              <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)" }}>Experience</span>
            </div>

            {/* Content */}
            <div style={{ flex: 1, maxWidth: "628px", display: "flex", flexDirection: "column", gap: "40px" }}>
              <p style={{ fontSize: "14px", lineHeight: "24px", color: "var(--color-grey)" }}>
                Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff, collaborate closely with developers, product managers, and marketing teams.
              </p>
              <p style={{ fontSize: "14px", lineHeight: "24px", color: "var(--color-grey)" }}>
                Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff, collaborate closely with developers, product managers, and marketing teams.
              </p>
            </div>
          </div>

          {/* Contacts - right side */}
          <div style={{
            position: "fixed",
            top: "116px",
            right: "80px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }} className="about-contacts">
            <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "flex-end", flexWrap: "wrap" }}>
              {[
                { label: "X", href: "https://x.com/Vlasovapolinaa" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/palinapryshchep" },
                { label: "Telegram", href: "https://t.me/vlasovapolina" },
                { label: "CV", href: "/cv.pdf" },
              ].map((link, i, arr) => (
                <span key={link.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <HoverLink href={link.href} style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)" }}>
                    {link.label}
                  </HoverLink>
                  {i < arr.length - 1 && (
                    <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--color-grey-light)", flexShrink: 0 }} />
                  )}
                </span>
              ))}
            </div>
            <div style={{ textAlign: "right" }}>
              <HoverLink href="mailto:vlasovaapolina@gmail.com" style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)" }}>
                vlasovaapolina@gmail.com
              </HoverLink>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-container { padding: 0 40px !important; }
          .about-contacts { display: none !important; }
        }
        @media (max-width: 768px) {
          .about-container { padding: 0 20px !important; }
          .about-section { flex-direction: column !important; gap: 24px !important; }
          .about-label { width: auto !important; }
        }
      `}</style>
    </>
  );
}
