"use client";
import HoverLink from "@/components/ui/HoverLink";

const col1 = [
  { label: "vlasovaapolina@gmail.com", href: "mailto:vlasovaapolina@gmail.com" },
  { label: "View CV", href: "/cv.pdf" },
  { label: "Telegram", href: "https://t.me/vlasovapolina" },
];
const col2 = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/palinapryshchep" },
  { label: "Instagram", href: "https://www.instagram.com/vlasovapolina" },
];

function LocationBadge({ small }: { small?: boolean }) {
  const size = small ? 12 : 12;
  const fs = small ? "12px" : "14px";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "16px" }}>
      <span style={{
        display: "inline-block", width: `${size}px`, height: `${size}px`,
        border: "1px solid var(--color-grey)", borderRadius: "3px",
        position: "relative", flexShrink: 0, marginTop: "4px",
      }}>
        <span style={{ position: "absolute", width: "4px", height: "4px", background: "var(--color-grey)", borderRadius: "50%", left: "3px", top: "3px" }} />
      </span>
      <span style={{ fontSize: fs, fontWeight: 500, color: "var(--color-grey)" }}>Based in Warsaw, Poland</span>
    </span>
  );
}

export default function Footer() {
  return (
    <>
      {/* ── DESKTOP ── */}
      <footer className="footer-desktop" style={{
        borderTop: "1px solid var(--color-stroke)",
        padding: "48px 80px 64px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        background: "white",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }}>
              <img src="/images/avatar-photo.png" alt="Polina Vlasova" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-dark)", letterSpacing: "0.13px" }}>Polina Vlasova</div>
              <div style={{ fontSize: "13px", color: "var(--color-grey-light)", letterSpacing: "0.13px" }}>UI/UX & Graphic Designer</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)" }}>Polina Vlasova ⓒ 2026</span>
            <LocationBadge />
          </div>
        </div>
        <div style={{ display: "flex", gap: "80px", paddingRight: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {col1.map(l => (
              <HoverLink key={l.label} href={l.href} style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)" }}>{l.label}</HoverLink>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {col2.map(l => (
              <HoverLink key={l.label} href={l.href} style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)" }}>{l.label}</HoverLink>
            ))}
          </div>
        </div>
      </footer>

      {/* ── MOBILE ── */}
      <footer className="footer-mobile" style={{
        borderTop: "1px solid var(--color-stroke)",
        padding: "40px 20px 64px",
        flexDirection: "column",
        gap: "40px",
        background: "white",
        display: "none",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }}>
            <img src="/images/avatar-photo.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <div style={{ fontSize: "12px", fontWeight: 500, color: "var(--color-dark)" }}>Polina Vlasova</div>
            <div style={{ fontSize: "12px", color: "var(--color-grey-light)" }}>UI/UX & Graphic Designer</div>
          </div>
        </div>
        <div style={{ borderBottom: "1px solid var(--color-stroke)", paddingBottom: "32px", display: "flex", justifyContent: "space-between", paddingRight: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {col1.map(l => (
              <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)", textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {col2.map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-grey)", textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "12px", fontWeight: 500, color: "var(--color-grey)" }}>Polina Vlasova ⓒ 2026</span>
          <LocationBadge small />
        </div>
      </footer>

      <style>{`
        @media (min-width: 769px) {
          .footer-desktop { display: flex !important; }
          .footer-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .footer-desktop { display: none !important; }
          .footer-mobile { display: flex !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .footer-desktop { padding: 40px 40px 64px !important; }
        }
      `}</style>
    </>
  );
}
