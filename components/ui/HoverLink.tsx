"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function HoverLink({ href, children, style }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => { setHovered(true); window.dispatchEvent(new Event("cursor:link")); }}
      onMouseLeave={() => { setHovered(false); window.dispatchEvent(new Event("cursor:default")); }}
      animate={hovered ? { y: -1 } : { y: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
      style={{ position: "relative", display: "inline-flex", textDecoration: "none", ...style }}
    >
      {hovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          style={{
            position: "absolute",
            inset: "-4px -10px",
            background: "#f0f0f0",
            borderRadius: "50px",
            zIndex: 0,
          }}
        />
      )}
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </motion.a>
  );
}
