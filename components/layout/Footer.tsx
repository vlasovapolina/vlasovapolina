export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "var(--text-secondary)",
      fontSize: "0.8rem",
    }}>
      <span>© 2025 Polina Vlasova</span>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          style={{ color: "var(--text-secondary)", textDecoration: "none" }}>LinkedIn</a>
        <a href="mailto:hello@vlasovapolina.com"
          style={{ color: "var(--text-secondary)", textDecoration: "none" }}>hello@vlasovapolina.com</a>
      </div>
    </footer>
  );
}
