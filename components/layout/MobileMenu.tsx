"use client";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/confidential", label: "Confidential work" },
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
};

export default function MobileMenu({ isOpen, onClose, pathname }: Props) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 200,
      background: "#1a1a1a",
      display: "flex",
      flexDirection: "column",
      color: "white",
    }}>
      {/* Header row */}
      <div style={{
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderBottom: "1px solid #333",
      }}>
        <Link href="/" onClick={onClose} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }}>
            <img src="/images/avatar-illustration.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <span style={{ fontSize: "13px", color: "white" }}>
            <strong style={{ fontWeight: 500 }}>Polina Vlasova</strong>
            <span style={{ color: "#888", fontSize: "12px", display: "block", lineHeight: 1.2 }}>UI/UX & Graphic Designer</span>
          </span>
        </Link>

        {/* Close × */}
        <button
          onClick={onClose}
          style={{ width: "40px", height: "40px", background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
          aria-label="Close menu"
        >
          <span style={{ display: "block", width: "20px", height: "1.5px", background: "white", transform: "rotate(45deg)", transformOrigin: "center" }} />
          <span style={{ display: "block", width: "20px", height: "1.5px", background: "white", transform: "rotate(-45deg)", transformOrigin: "center", marginTop: "-1.5px" }} />
        </button>
      </div>

      {/* Nav links */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 20px" }}>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            style={{
              fontSize: "36px",
              fontWeight: 400,
              color: pathname === href ? "white" : "#555",
              padding: "12px 0",
              display: "block",
              borderBottom: "1px solid #2a2a2a",
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Bottom contacts */}
      <div style={{ padding: "24px 20px", borderTop: "1px solid #2a2a2a", display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "13px", color: "#888" }}>⊙ Warsaw, Poland</span>
          <span style={{ color: "#444" }}>·</span>
          <a href="mailto:vlasovaapolina@gmail.com" style={{ fontSize: "13px", color: "#888" }}>vlasovaapolina@gmail.com</a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          {[
            { label: "X", href: "https://x.com/Vlasovapolinaa" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/palinapryshchep" },
            { label: "Telegram", href: "https://t.me/vlasovapolina" },
            { label: "CV", href: "/cv.pdf" },
          ].map((link, i, arr) => (
            <span key={link.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#888", fontWeight: 500 }}>
                {link.label}
              </a>
              {i < arr.length - 1 && <span style={{ color: "#444", fontSize: "10px" }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
