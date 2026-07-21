"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Link from "next/link";
import HoverLink from "@/components/ui/HoverLink";

const projects = [
  {
    id: "ednby",
    name: "Redesign of the electronic waybill filing flow",
    client: "edn.by",
    year: "2025",
    description: "Product: Web\u00a0app (personal\u00a0account). EDN is a\u00a0cloud-based electronic document management service in\u00a0Belarus, one of\u00a0the\u00a0country's key accredited EDI\u00a0providers, with\u00a080,000+ users. One of\u00a0its core products is\u00a0the\u00a0electronic waybill\u00a0(e-TTN).",
    hasCase: true,
    image: "/images/ednby_case_image.svg",
    caseUrl: "/work/ednby",
  },
  {
    id: "project-02",
    name: "Project Name",
    client: null,
    year: "2025",
    description: "Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff, collaborate closely with developers, product managers, and marketing teams.",
    hasCase: true,
    image: null,
    caseUrl: null,
  },
  {
    id: "project-03",
    name: "Project Name",
    client: null,
    year: "2025",
    description: "Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff, collaborate closely with developers, product managers, and marketing teams.",
    hasCase: true,
    image: null,
    caseUrl: null,
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
        <HoverLink href="mailto:vlasovaapolina@gmail.com" style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)" }}>
          vlasovaapolina@gmail.com
        </HoverLink>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
        {contacts.map((link, i) => (
          <span key={link.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <HoverLink href={link.href} style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)" }}>
              {link.label}
            </HoverLink>
            {i < contacts.length - 1 && <Dot />}
          </span>
        ))}
      </div>
    </div>
  );
}

// Learn more button with spring hover
function LearnMoreBtn({ href }: { href?: string }) {
  const [hovered, setHovered] = useState(false);
  const content = (
    <motion.div
      style={{ display: "inline-flex", alignItems: "center", marginBottom: "24px", position: "relative", marginLeft: "-12px" }}
      onMouseEnter={() => { setHovered(true); window.dispatchEvent(new Event("cursor:link")); }}
      onMouseLeave={() => { setHovered(false); window.dispatchEvent(new Event("cursor:default")); }}
      animate={hovered ? { y: -1 } : { y: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
    >
      <div style={{ position: "relative", padding: "4px 12px", borderRadius: "50px" }}>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            style={{ position: "absolute", inset: 0, background: "#f0f0f0", borderRadius: "50px", zIndex: 0 }}
          />
        )}
        <span style={{ position: "relative", zIndex: 1, fontSize: "14px", fontWeight: 500, color: "var(--color-dark)", display: "flex", alignItems: "center", gap: "4px" }}>
          Learn more
          <motion.span animate={hovered ? { x: 3 } : { x: 0 }} transition={{ type: "spring", stiffness: 280, damping: 28 }}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M6 1L9 4L6 7M1 4H9" stroke="#282828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.span>
        </span>
      </div>
    </motion.div>
  );
  if (href) return <Link href={href} style={{ textDecoration: "none" }}>{content}</Link>;
  return content;
}

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <div style={{
      borderTop: index === 0 ? "none" : "1px solid var(--color-stroke)",
      paddingTop: "48px",
      paddingBottom: "48px",
    }}>
      {/* Meta */}
      <div style={{ maxWidth: "920px" }}>
        <div style={{ marginBottom: "12px" }}>
          {/* Desktop: all in one row */}
          <div className="project-meta-desktop" style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "nowrap" }}>
            <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)", whiteSpace: "nowrap" }}>{project.name}</span>
            {project.client && <><Dot /><span style={{ fontSize: "14px", color: "var(--color-grey)", whiteSpace: "nowrap" }}>{project.client}</span></>}
            <Dot />
            <span style={{ fontSize: "14px", color: "var(--color-grey)", whiteSpace: "nowrap" }}>{project.year}</span>
          </div>
          {/* Mobile: title on first line, client+year on second */}
          <div className="project-meta-mobile" style={{ display: "none" }}>
            <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)", marginBottom: "2px" }}>{project.name}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {project.client && <><span style={{ fontSize: "14px", color: "var(--color-grey)" }}>{project.client}</span><Dot /></>}
              <span style={{ fontSize: "14px", color: "var(--color-grey)" }}>{project.year}</span>
            </div>
          </div>
        </div>

      <p style={{ fontSize: "14px", lineHeight: "24px", color: "var(--color-grey)", marginBottom: "16px" }}>
        {project.description}
      </p>
      {project.hasCase && <LearnMoreBtn href={project.caseUrl || undefined} />}
      </div>

      {/* Image */}
      <div
        onMouseEnter={() => { setImgHovered(true); window.dispatchEvent(new Event("cursor:project")); }}
        onMouseLeave={() => { setImgHovered(false); window.dispatchEvent(new Event("cursor:default")); }}
        style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}
      >
        <motion.div
          animate={imgHovered ? { scale: 1.015 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 28 }}
          style={{
            width: "100%",
            aspectRatio: "760 / 480",
            background: "var(--color-bg-image)",
            border: "1px solid var(--color-stroke)",
            borderRadius: "12px",
            borderColor: imgHovered ? "#ccc" : "var(--color-stroke)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />

      <div style={{ display: "flex", minHeight: "100vh", paddingTop: "64px" }}>

        {/* LEFT SIDEBAR */}
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

        {/* RIGHT CONTENT */}
        <div style={{ marginLeft: "515px", flex: 1, paddingLeft: "24px", paddingRight: "80px" }} className="main-content">

          {/* Mobile bio */}
          <div className="mobile-bio" style={{ display: "none", paddingTop: "52px", flexDirection: "column", gap: "48px" }}>
            <div className="mobile-bio-full" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              <p style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.4", color: "var(--color-dark)" }}>
                Hi. I&apos;m <strong style={{ fontWeight: 500 }}>Polina</strong>, a UI/UX & Brand Designer crafting interfaces and identities. Based in Warsaw, working globally.
              </p>
              <p style={{ fontSize: "14px", lineHeight: "24px", color: "var(--color-grey)" }}>
                Started in graphic and brand design, moved into UI/UX over the last 5 years — with a background spanning brand identity, web, and product design. Worked with startups, SaaS, e-commerce, healthtech, and cultural projects. Lead projects from brief to handoff, collaborate closely with developers, product managers, and marketing teams. Open to freelance projects, part-time roles, and studio collaborations across Europe.
              </p>
            </div>
            <div className="mobile-bio-short" style={{ display: "none" }}>
              <p style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.4", color: "var(--color-dark)" }}>
                Hi. I&apos;m <strong style={{ fontWeight: 500 }}>Polina</strong>, a UI/UX & Brand Designer crafting interfaces and identities. Based in Warsaw, working globally.
              </p>
            </div>
            <ContactsBlock />
          </div>

          {/* Projects */}
          <div className="projects-section">
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
                  width: "100%",
                  aspectRatio: "760 / 480",
                  background: "var(--color-bg-image)",
                  border: "1px solid var(--color-stroke)",
                  borderRadius: "12px",
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .sidebar { width: 380px !important; padding-left: 40px !important; }
          .main-content { margin-left: 380px !important; padding-right: 40px !important; }
        }
        @media (max-width: 768px) {
          .sidebar { display: none !important; }
          .main-content { margin-left: 0 !important; padding-left: 20px !important; padding-right: 20px !important; }
          .mobile-bio { display: flex !important; }
          .projects-section { border-top: 1px solid var(--color-stroke); margin-top: 48px; }
          .project-meta-desktop { display: none !important; }
          .project-meta-mobile { display: block !important; }
        }
        @media (max-width: 480px) {
          .mobile-bio-full { display: none !important; }
          .mobile-bio-short { display: block !important; }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .mobile-bio-full { display: flex !important; }
          .mobile-bio-short { display: none !important; }
        }
      `}</style>
    </>
  );
}
