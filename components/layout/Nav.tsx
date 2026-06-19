"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Work" },
  { href: "/hire", label: "Hire me" },
  { href: "/studio", label: "Studio" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 2rem",
        borderBottom: "1px solid transparent",
        background: "rgba(14,14,14,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: 300 }}>
          Polina Vlasova
        </span>
      </Link>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                textDecoration: "none",
                fontSize: "0.875rem",
                color: active ? "var(--text-primary)" : "var(--text-secondary)",
                transition: "color 0.2s",
                position: "relative",
              }}
            >
              {label}
              {active && (
                <motion.span
                  layoutId="nav-indicator"
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "var(--accent)",
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
