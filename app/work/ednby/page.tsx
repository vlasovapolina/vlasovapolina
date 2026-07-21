import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Link from "next/link";

// Bullet point
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
      <span style={{
        width: "7px", height: "7px", borderRadius: "50%",
        background: "var(--color-dark)", flexShrink: 0, marginTop: "11px",
      }} />
      <p style={{ fontSize: "clamp(14px, 1.4vw, 20px)", lineHeight: "1.5", color: "var(--color-dark)", flex: 1 }}>
        {children}
      </p>
    </div>
  );
}

// Section with left label + right content
function Section({ title, children, first }: { title: string; children: React.ReactNode; first?: boolean }) {
  return (
    <div style={{
      display: "flex",
      gap: "24px",
      paddingTop: first ? "0" : "64px",
      borderTop: first ? "none" : "1px solid var(--color-stroke)",
    }} className="case-section">
      <div style={{ width: "302px", flexShrink: 0 }} className="case-label">
        <h2 style={{ fontSize: "clamp(20px, 2.2vw, 32px)", fontWeight: 500, color: "var(--color-dark)", lineHeight: "1.2" }}>
          {title}
        </h2>
      </div>
      <div style={{ flex: 1, maxWidth: "920px", display: "flex", flexDirection: "column", gap: "32px" }}>
        {children}
      </div>
    </div>
  );
}

function ImagePlaceholder({ height = 460 }: { height?: number }) {
  return (
    <div style={{
      width: "100%", aspectRatio: `1280/${height}`,
      background: "var(--color-bg-image)",
      border: "1px solid var(--color-stroke)",
      borderRadius: "12px",
    }} className="case-image" />
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "clamp(14px, 1.7vw, 24px)", fontWeight: 600, color: "var(--color-dark)", letterSpacing: "0.48px", textTransform: "uppercase", lineHeight: "1.3" }}>
      {children}
    </p>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "clamp(14px, 1.4vw, 20px)", lineHeight: "1.5", color: "var(--color-grey)" }}>
      {children}
    </p>
  );
}

// Other case card
function OtherCaseCard() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ width: "100%", aspectRatio: "760/410", background: "white", border: "1px solid var(--color-stroke)", borderRadius: "12px" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingRight: "16px" }}>
        <div>
          <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)" }}>Project Name</p>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{ fontSize: "14px", color: "var(--color-grey)" }}>Client</span>
            <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--color-grey)", flexShrink: 0 }} />
            <span style={{ fontSize: "14px", color: "var(--color-grey)" }}>2025</span>
          </div>
        </div>
        <p style={{ fontSize: "14px", lineHeight: "24px", color: "var(--color-grey)" }}>
          Short description of the project and what was done.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)" }}>Learn more</span>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M6 1L9 4L6 7M1 4H9" stroke="#282828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function EdnCasePage() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <main style={{ paddingTop: "64px" }}>
        <div style={{ padding: "52px 80px 120px", borderBottom: "1px solid var(--color-stroke)" }} className="case-container">

          {/* Hero */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "64px" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span style={{ fontSize: "20px", color: "var(--color-grey)", letterSpacing: "0.2px" }}>edn.by</span>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--color-grey)", flexShrink: 0 }} />
              <span style={{ fontSize: "20px", color: "var(--color-grey)", letterSpacing: "0.2px" }}>2025</span>
            </div>
            <h1 style={{ fontSize: "clamp(24px, 2.8vw, 40px)", fontWeight: 500, color: "var(--color-dark)", letterSpacing: "0.32px", lineHeight: "1.15" }}>
              Redesign of the electronic waybill filing flow
            </h1>
          </div>

          {/* Descriptor table */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "64px" }} className="case-descriptor">
            {[
              { label: "Product:", value: "Web\u00a0app (EDN personal account)" },
              { label: "Team:", value: null, rich: true },
              { label: "What\u00a0I\u00a0Did:", value: "Design audit\u00a0· UX/UI\u00a0& user\u00a0research · User\u00a0testing · Key UX/UI\u00a0design · UX/UI\u00a0direction" },
            ].map(({ label, value, rich }) => (
              <div key={label} style={{ display: "flex", gap: "24px", alignItems: "center", fontSize: "clamp(14px, 1.4vw, 20px)" }} className="descriptor-row">
                <div style={{ width: "302px", flexShrink: 0, fontWeight: 500, color: "var(--color-dark)", letterSpacing: "0.2px" }} className="descriptor-label">
                  {label}
                </div>
                <div style={{ color: "var(--color-grey)" }}>
                  {rich ? (
                    <><strong style={{ fontWeight: 500, color: "var(--color-dark)" }}>Product designer (me)</strong>{" · Project\u00a0Manager · Developers · QA\u00a0· Support\u00a0Team"}</>
                  ) : value}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer + first image */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "64px" }}>
            <p style={{ fontSize: "12px", color: "var(--color-grey-light)", lineHeight: "1.5", fontStyle: "italic" }}>
              All interfaces shown below are in Russian.<br />
              EDIN is an electronic document management service built specifically for the Belarusian market.
            </p>
            <div style={{ width: "100%", aspectRatio: "1280/640", background: "var(--color-bg-image)", border: "1px solid var(--color-stroke)", borderRadius: "12px" }} />
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>

            <Section title="Client, Product" first>
              <BodyText>
                EDN is a cloud-based electronic document management service in Belarus, one of the country&apos;s key accredited EDI\u00a0providers, with 80,000+ users. One of its core products is the electronic waybill (e-TTN). In Belarus, issuing an electronic waybill is mandatory for goods on the traceable/marked goods list, and the scope of this requirement is regularly expanded to new product categories.
              </BodyText>
              <p style={{ fontSize: "clamp(14px, 1.4vw, 20px)", lineHeight: "1.5", color: "var(--color-grey)" }}>
                The product at the center of this case is{" "}
                <strong style={{ fontWeight: 600, color: "var(--color-dark)" }}>the e-TTN creation form and the document table/dashboard in the personal account</strong>
                . The core users are accounting and logistics staff who fill out waybills every day.
              </p>
              <ImagePlaceholder height={460} />
            </Section>

            <Section title={"Business Requirements\u00a0& Constraints"}>
              <BodyText>
                Requirements were gathered together with the PM\u00a0— based on support tickets, customer complaints, and an analysis of where in the interface users most often abandoned filling out forms.
              </BodyText>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <SubHeading>Business goals for the redesign:</SubHeading>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Bullet>reduce the support load by cutting the number of tickets about client-facing issues;</Bullet>
                  <Bullet>speed up and simplify the routine, daily task of filling out a waybill;</Bullet>
                  <Bullet>make the interface competitive against an outdated visual style and UX;</Bullet>
                  <Bullet>replace the single, undifferentiated document dashboard with a flexible, customizable table featuring filters and type-based grouping.</Bullet>
                </div>
              </div>
              <ImagePlaceholder height={460} />
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <SubHeading>Constraint:</SubHeading>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p style={{ fontSize: "clamp(14px, 1.4vw, 20px)", lineHeight: "1.5", color: "var(--color-grey)" }}>
                    The composition and mandatory status of e-TTN fields are dictated by legislation and the document&apos;s official format\u00a0—{" "}
                    <strong style={{ fontWeight: 600, color: "var(--color-dark)" }}>they can&apos;t be removed or simplified, only regrouped and visually clarified.</strong>
                  </p>
                  <p style={{ fontSize: "clamp(14px, 1.4vw, 20px)", lineHeight: "1.5", color: "var(--color-grey)" }}>
                    <strong style={{ fontWeight: 600, color: "var(--color-dark)" }}>The product section is a separate challenge:</strong>{" "}
                    each line item carries its own nested set of attributes (marking, traceability, pricing), and which fields are required depends on the product category. This section generated the most complaints.
                  </p>
                </div>
              </div>
            </Section>

            {/* Two-column images */}
            <div style={{ display: "flex", gap: "24px" }} className="two-col-images">
              <div style={{ flex: 1, aspectRatio: "620/440", background: "var(--color-bg-image)", border: "1px solid var(--color-stroke)", borderRadius: "12px" }} />
              <div style={{ flex: 1, aspectRatio: "620/440", background: "var(--color-bg-image)", border: "1px solid var(--color-stroke)", borderRadius: "12px" }} />
            </div>

            <Section title="UX/UI Audit">
              <p style={{ fontSize: "clamp(14px, 1.4vw, 20px)", lineHeight: "1.5", color: "var(--color-grey)" }}>
                An audit of the existing form and document table showed:{" "}
                <strong style={{ fontWeight: 700, color: "var(--color-dark)" }}>interface complexity leads to user errors and data loss</strong>
                , field hierarchy is unclear, routine tasks take longer than they should, and the service visually feels outdated against user expectations for modern B2B tools.
              </p>
              <p style={{ fontSize: "clamp(14px, 1.4vw, 20px)", lineHeight: "1.5", color: "var(--color-grey)" }}>
                Surveys additionally showed that{" "}
                <strong style={{ fontWeight: 600, color: "var(--color-dark)" }}>the product section was the hardest to read</strong>
                : with a large number of line items, users struggled to navigate the data.
              </p>
              <ImagePlaceholder height={460} />
            </Section>

            <Section title="Research">
              <BodyText>
                The first hypothesis was to break the long form into sequential steps with a progress bar in a side panel.
              </BodyText>
              <p style={{ fontSize: "clamp(14px, 1.4vw, 20px)", lineHeight: "1.5", fontWeight: 600, color: "var(--color-dark)" }}>
                The hypothesis was tested with a focus group of 10 real EDN clients (7 regular users, 2 new clients, 1 in-house EDN accountant) via video interviews.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <SubHeading>Iteration 1 — tested and rejected.</SubHeading>
                  <SubHeading>Result: the hypothesis wasn&apos;t confirmed.</SubHeading>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Bullet>The progress bar was confusing — 7 out of 10 didn&apos;t understand its purpose.</Bullet>
                  <Bullet>Required and optional fields weren&apos;t visually distinguished — 8 out of 10 mixed them up.</Bullet>
                  <Bullet>The &ldquo;Sender\u00a0/ Recipient&rdquo; block read as a single, undifferentiated block of text.</Bullet>
                  <Bullet>The product section remained poorly structured.</Bullet>
                </div>
              </div>
            </Section>

            <div style={{ display: "flex", gap: "24px" }} className="two-col-images">
              <div style={{ flex: 1, aspectRatio: "620/440", background: "var(--color-bg-image)", border: "1px solid var(--color-stroke)", borderRadius: "12px" }} />
              <div style={{ flex: 1, aspectRatio: "620/440", background: "var(--color-bg-image)", border: "1px solid var(--color-stroke)", borderRadius: "12px" }} />
            </div>

            <Section title="Final Solution">
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Bullet>Clear separation of required and optional fields, with optional sections collapsed by default.</Bullet>
                <Bullet>Sender and recipient — grouped visually together.</Bullet>
                <Bullet>Introduced autofill and input &ldquo;memory&rdquo;: counterparty, GLN, loading/unloading points.</Bullet>
                <Bullet>Document table — tabs by type, customizable columns, flexible filters and sorting.</Bullet>
                <Bullet>Added a preview of the final waybill available at any stage of filling out the form.</Bullet>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <SubHeading>Product Section</SubHeading>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Bullet>Progressive disclosure by block, with only required fields shown by default. Optional blocks are hidden behind trigger buttons.</Bullet>
                  <Bullet>A hint next to each optional section explains exactly when it needs to be filled in.</Bullet>
                  <Bullet>Product traceability is determined and highlighted directly in the form.</Bullet>
                  <Bullet>An expandable preview table, search across line items, and highlighting of erroneous cells.</Bullet>
                </div>
              </div>
              <ImagePlaceholder height={460} />
            </Section>

            <Section title="Before / After">
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ display: "flex", gap: "24px" }} className="two-col-images">
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ width: "100%", aspectRatio: "440/440", background: "var(--color-bg-image)", border: "1px solid var(--color-stroke)", borderRadius: "12px" }} />
                    <BodyText>An audit of the existing form and document table showed: <strong style={{ fontWeight: 700, color: "var(--color-dark)" }}>interface complexity leads to user errors and data loss</strong>, field hierarchy is unclear, routine tasks take longer than they should.</BodyText>
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ width: "100%", aspectRatio: "440/440", background: "var(--color-bg-image)", border: "1px solid var(--color-stroke)", borderRadius: "12px" }} />
                    <BodyText>An audit of the existing form and document table showed: <strong style={{ fontWeight: 700, color: "var(--color-dark)" }}>interface complexity leads to user errors and data loss</strong>, field hierarchy is unclear, routine tasks take longer than they should.</BodyText>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "24px" }} className="two-col-images">
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ width: "100%", aspectRatio: "440/440", background: "var(--color-bg-image)", border: "1px solid var(--color-stroke)", borderRadius: "12px" }} />
                    <BodyText>An audit of the existing form and document table showed: interface complexity, field hierarchy is unclear, routine tasks take longer.</BodyText>
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ width: "100%", aspectRatio: "440/440", background: "var(--color-bg-image)", border: "1px solid var(--color-stroke)", borderRadius: "12px" }} />
                    <BodyText>An audit of the existing form and document table showed: interface complexity, field hierarchy is unclear, routine tasks take longer.</BodyText>
                  </div>
                </div>
              </div>
            </Section>

          </div>
        </div>

        {/* Full-width image */}
        <div style={{ padding: "64px 80px 0" }} className="case-container">
          <div style={{ width: "100%", aspectRatio: "1280/640", background: "var(--color-bg-image)", border: "1px solid var(--color-stroke)", borderRadius: "12px" }} />
        </div>

        {/* Results */}
        <div style={{ padding: "64px 80px 0" }} className="case-container">
          <Section title="Results" first>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <SubHeading>The redesign addressed two goals for two user groups:</SubHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Bullet>Regular accounting staff: a predictable flow with minimal extra clicks and autofill.</Bullet>
                <Bullet>New/infrequent users: clear field grouping and a clean separation between required and optional fields.</Bullet>
              </div>
            </div>
            <SubHeading>THE FOCUS GROUP CONFIRMED THAT THE FINAL DIRECTION SOLVED BOTH.</SubHeading>
            <p style={{ fontSize: "clamp(14px, 1.4vw, 20px)", lineHeight: "1.5", color: "var(--color-grey)", fontStyle: "italic" }}>
              The project was put on hold due to budget constraints right after a successful round of testing — the solution is ready for development and awaiting its production release.
            </p>
          </Section>
        </div>

        {/* Other Cases */}
        <div style={{ background: "var(--color-bg-image)", padding: "64px 80px 148px", marginTop: "64px" }} className="case-container">
          <p style={{ fontSize: "clamp(20px, 2.2vw, 32px)", fontWeight: 500, color: "var(--color-dark)", marginBottom: "24px" }}>Other Cases</p>
          <div style={{ display: "flex", gap: "24px" }} className="other-cases">
            <OtherCaseCard />
            <OtherCaseCard />
          </div>
        </div>

        <Footer />
      </main>

      <style>{`
        .case-container { padding-left: 80px; padding-right: 80px; }
        .case-section { flex-direction: row; }
        .case-label { display: block; }
        .descriptor-row { flex-direction: row; }
        .descriptor-label { display: block; }
        .other-cases { flex-direction: row; }

        @media (max-width: 1024px) {
          .case-container { padding-left: 40px !important; padding-right: 40px !important; }
        }
        @media (max-width: 768px) {
          .case-container { padding-left: 20px !important; padding-right: 20px !important; }
          .case-section { flex-direction: column !important; gap: 24px !important; }
          .case-label { width: auto !important; }
          .descriptor-row { flex-direction: column !important; gap: 4px !important; }
          .descriptor-label { width: auto !important; }
          .two-col-images { flex-direction: column !important; }
          .other-cases { flex-direction: column !important; }
        }
      `}</style>
    </>
  );
}
