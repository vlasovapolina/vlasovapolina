"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/confidential", label: "Confidential work" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarHovered, setAvatarHovered] = useState(false);

  return (
    <>
      <header style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: "64px",
        background: "white",
        borderBottom: "1px solid var(--color-stroke)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "80px",
        paddingRight: "80px",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Avatar with hover effect */}
          <div
            onMouseEnter={() => setAvatarHovered(true)}
            onMouseLeave={() => setAvatarHovered(false)}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "4px",
              overflow: "hidden",
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
              <img
                src="/images/avatar-photo.png"
                alt="Polina Vlasova"
                style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%",
                  objectFit: "cover", transition: "opacity 0.25s",
                  opacity: avatarHovered ? 0 : 1,
                }}
              />
              <img
                src="/images/avatar-illustration.png"
                alt=""
                style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%",
                  objectFit: "cover", transition: "opacity 0.25s",
                  opacity: avatarHovered ? 1 : 0,
                }}
              />
            </div>
          </div>
          <span style={{ fontSize: "13px", letterSpacing: "0.13px", color: "#282828" }}>
            <strong style={{ fontWeight: 500 }}>Polina Vlasova</strong>
            <span style={{ color: "var(--color-grey-light)" }}>{" — UI/UX & Graphic Designer"}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "16px", alignItems: "center" }} className="desktop-nav">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.13px",
                  color: active ? "var(--color-dark)" : "var(--color-grey-light)",
                  padding: "4px 16px",
                  borderRadius: "50px",
                  background: active ? "var(--color-stroke)" : "transparent",
                  transition: "color 0.2s, background 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile burger */}
        <button
          className="mobile-burger"
          onClick={() => setMenuOpen(true)}
          style={{
            display: "none",
            width: "40px",
            height: "40px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
          aria-label="Open menu"
        >
          <span style={{ display: "block", width: "24px", height: "1.5px", background: "var(--color-dark)" }} />
          <span style={{ display: "block", width: "24px", height: "1.5px", background: "var(--color-dark)" }} />
        </button>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
          header { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </>
  );
}
