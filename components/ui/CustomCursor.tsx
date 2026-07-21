"use client";
import { useEffect, useRef, useState } from "react";

export type CursorVariant = "default" | "project" | "link" | "hidden";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true); // assume touch until proven otherwise
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Don't activate on touch/coarse pointer devices
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    // Detect non-touch device by first mousemove
    const onFirstMouseMove = () => {
      setIsTouch(false);
      window.removeEventListener("mousemove", onFirstMouseMove);
    };
    window.addEventListener("mousemove", onFirstMouseMove);

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);

    const loop = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    const onProject = () => setVariant("project");
    const onDefault = () => setVariant("default");
    const onLink = () => setVariant("link");

    window.addEventListener("cursor:project", onProject);
    window.addEventListener("cursor:default", onDefault);
    window.addEventListener("cursor:link", onLink);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", onFirstMouseMove);
      document.documentElement.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf.current);
      window.removeEventListener("cursor:project", onProject);
      window.removeEventListener("cursor:default", onDefault);
      window.removeEventListener("cursor:link", onLink);
    };
  }, []);

  // Don't render anything on touch devices
  if (isTouch) return null;

  const isProject = variant === "project";
  const isLink = variant === "link";

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          zIndex: 9999,
          pointerEvents: "none",
          willChange: "transform",
          marginLeft: isProject ? "-56px" : "-6px",
          marginTop: isProject ? "-18px" : "-6px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s, margin 0.25s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {isProject ? (
          <div style={{
            background: "var(--color-dark)",
            color: "white",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            padding: "8px 16px",
            borderRadius: "100px",
            whiteSpace: "nowrap",
          }}>
            Open Project
          </div>
        ) : (
          <div style={{
            width: isLink ? "20px" : "12px",
            height: isLink ? "20px" : "12px",
            background: isLink ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.25)",
            borderRadius: "50%",
            transition: "width 0.2s cubic-bezier(0.34,1.56,0.64,1), height 0.2s cubic-bezier(0.34,1.56,0.64,1)",
          }} />
        )}
      </div>
    </>
  );
}

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);

    const loop = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    // Listen for custom events dispatched by other components
    const onProject = () => setVariant("project");
    const onDefault = () => setVariant("default");
    const onLink = () => setVariant("link");

    window.addEventListener("cursor:project", onProject);
    window.addEventListener("cursor:default", onDefault);
    window.addEventListener("cursor:link", onLink);

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf.current);
      window.removeEventListener("cursor:project", onProject);
      window.removeEventListener("cursor:default", onDefault);
      window.removeEventListener("cursor:link", onLink);
    };
  }, []);

  const isProject = variant === "project";
  const isLink = variant === "link";

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
          willChange: "transform",
          // Center the cursor on the mouse point
          marginLeft: isProject ? "-56px" : "-6px",
          marginTop: isProject ? "-18px" : "-6px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s, margin 0.25s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {isProject ? (
          // "Open Project" pill
          <div style={{
            background: "var(--color-dark)",
            color: "white",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            padding: "8px 16px",
            borderRadius: "100px",
            whiteSpace: "nowrap",
            transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          }}>
            Open Project
          </div>
        ) : (
          // Default grey circle
          <div style={{
            width: isLink ? "20px" : "12px",
            height: isLink ? "20px" : "12px",
            background: isLink ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.25)",
            borderRadius: "50%",
            transition: "width 0.2s cubic-bezier(0.34,1.56,0.64,1), height 0.2s cubic-bezier(0.34,1.56,0.64,1), background 0.2s",
          }} />
        )}
      </div>
    </>
  );
}
