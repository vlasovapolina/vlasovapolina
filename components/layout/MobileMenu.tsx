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
      background: "white",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header row */}
      <div style={{
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderBottom: "1px solid var(--color-stroke)",
      }}>
        <Link href="/" onClick={onClose} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Illustration shows in mobile menu */}
          <div style={{ width: "32px", height: "32px", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }}>
            <img
              src="/images/avatar-illustration.png"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <span style={{ fontSize: "13px", color: "#282828" }}>
            <strong style={{ fontWeight: 500 }}>Polina Vlasova</strong>
            <span style={{ color: "var(--color-grey-light)", fontSize: "12px", display: "block", lineHeight: 1.2 }}>UI/UX & Graphic Designer</span>
          </span>
        </Link>

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            width: "40px", height: "40px",
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: "0",
            alignItems: "center", justifyContent: "center",
          }}
          aria-label="Close menu"
        >
          <span style={{
            display: "block", width: "24px", height: "1.5px",
            background: "var(--color-dark)", transform: "rotate(45deg)", transformOrigin: "center",
          }} />
          <span style={{
            display: "block", width: "24px", height: "1.5px",
            background: "var(--color-dark)", transform: "rotate(-45deg) translateY(-1.5px)", transformOrigin: "center",
            marginTop: "-1.5px",
          }} />
        </button>
      </div>

      {/* Nav links — vertically centered */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 20px",
        gap: "0",
      }}>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            style={{
              fontSize: "36px",
              fontWeight: 400,
              color: pathname === href ? "var(--color-dark)" : "var(--color-grey-light)",
              padding: "12px 0",
              display: "block",
              borderBottom: "1px solid var(--color-stroke)",
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Bottom contacts */}
      <div style={{
        padding: "24px 20px",
        borderTop: "1px solid var(--color-stroke)",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "13px", color: "var(--color-grey)" }}>⊙ Warsaw, Poland</span>
          <span style={{ color: "var(--color-stroke)" }}>·</span>
          <a href="mailto:vlasovaapolina@gmail.com" style={{ fontSize: "13px", color: "var(--color-grey)" }}>vlasovaapolina@gmail.com</a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
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
                style={{ fontSize: "13px", color: "var(--color-grey)", fontWeight: 500 }}
              >
                {link.label}
              </a>
              {i < arr.length - 1 && <span style={{ color: "var(--color-stroke)", fontSize: "10px" }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
