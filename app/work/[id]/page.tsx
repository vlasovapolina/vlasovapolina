import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />

      <article style={{ padding: "10rem 2rem 8rem", maxWidth: "960px", margin: "0 auto" }}>
        <p className="t-label" style={{ marginBottom: "1rem" }}>{project.category} · {project.year}</p>
        <h1 className="t-heading" style={{ marginBottom: "1.5rem" }}>{project.title}</h1>
        <p className="t-body" style={{ maxWidth: "560px", marginBottom: "4rem" }}>{project.description}</p>

        {/* Cover */}
        <div style={{
          width: "100%", aspectRatio: "16/9", background: "var(--surface)",
          border: "1px solid var(--border)", borderRadius: "4px",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--text-secondary)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase",
          marginBottom: "4rem",
        }}>
          Project visuals coming soon
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontSize: "0.75rem", padding: "0.3rem 0.75rem",
              border: "1px solid var(--border)", borderRadius: "2px",
              color: "var(--text-secondary)",
            }}>{tag}</span>
          ))}
        </div>
      </article>

      <Footer />
    </main>
  );
}
