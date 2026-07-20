"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/confidential", label: "Confidential work" },
];

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{ position: "relative", textDecoration: "none" }}
      onMouseEnter={() => {
        setHovered(true);
        window.dispatchEvent(new Event("cursor:link"));
      }}
      onMouseLeave={() => {
        setHovered(false);
        window.dispatchEvent(new Event("cursor:default"));
      }}
    >
      <motion.div
        style={{
          fontSize: "13px",
          letterSpacing: "0.13px",
          color: active ? "var(--color-dark)" : "var(--color-grey-light)",
          padding: "4px 16px",
          borderRadius: "50px",
          position: "relative",
          whiteSpace: "nowrap",
        }}
        animate={hovered ? { y: -1 } : { y: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
      >
        {/* Background pill */}
        <AnimatePresence>
          {(hovered || active) && (
            <motion.div
              layoutId="nav-bg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              style={{
                position: "absolute",
                inset: 0,
                background: active ? "var(--color-stroke)" : "#f0f0f0",
                borderRadius: "50px",
                zIndex: 0,
              }}
            />
          )}
        </AnimatePresence>
        <span style={{ position: "relative", zIndex: 1 }}>{label}</span>
      </motion.div>
    </Link>
  );
}

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
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
          onMouseEnter={() => window.dispatchEvent(new Event("cursor:link"))}
          onMouseLeave={() => window.dispatchEvent(new Event("cursor:default"))}
        >
          <div
            onMouseEnter={() => setAvatarHovered(true)}
            onMouseLeave={() => setAvatarHovered(false)}
            style={{ width: "32px", height: "32px", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }}
          >
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
              <img src="/images/avatar-photo.png" alt="Polina Vlasova"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.25s", opacity: avatarHovered ? 0 : 1 }} />
              <img src="/images/avatar-illustration.png" alt=""
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.25s", opacity: avatarHovered ? 1 : 0 }} />
            </div>
          </div>
          <span style={{ fontSize: "13px", letterSpacing: "0.13px", color: "#282828" }}>
            <strong style={{ fontWeight: 500 }}>Polina Vlasova</strong>
            <span style={{ color: "var(--color-grey-light)" }}>{" — UI/UX & Graphic Designer"}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "4px", alignItems: "center" }} className="desktop-nav">
          {navLinks.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} active={pathname === href} />
          ))}
        </nav>

        {/* Mobile burger — dark circle */}
        <button
          className="mobile-burger"
          onClick={() => setMenuOpen(true)}
          style={{
            display: "none",
            width: "40px", height: "40px",
            background: "var(--color-dark)",
            border: "none", borderRadius: "50%",
            cursor: "none",
            alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}
          aria-label="Open menu"
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M0 1H16M0 5H16M0 9H16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
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
