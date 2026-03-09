import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CV & Documents — Kamogelo Mokone",
};

const documents = [
  {
    title: "Curriculum Vitae",
    subtitle: "Full professional CV",
    icon: "📄",
    href: "/documents/CV.pdf",
    accent: "var(--forest)",
  },
  {
    title: "Professional Growth",
    subtitle: "Positioning statement & growth roadmap",
    icon: "🌱",
    href: "/documents/Professional Growth & Positioning Statement.pdf",
    accent: "var(--teal)",
  },
  {
    title: "Technology Expertise",
    subtitle: "Detailed technical skills & stack overview",
    icon: "⚡",
    href: "/documents/Technology Expertise.pdf",
    accent: "#7C5CBF",
  },
];

export default function CVPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="work" style={{ paddingTop: "120px" }}>
          <div className="work-inner">

            <div className="work-header">
              <div>
                <div className="section-tag">Documents</div>
                <h1 className="section-title">CV &amp; others</h1>
              </div>
              <Link
                href="/"
                className="btn-outline"
                style={{ borderColor: "rgba(0,88,64,0.2)", color: "var(--forest)", padding: "12px 24px", borderRadius: "980px", fontSize: "14px", textDecoration: "none" }}
              >
                ← Back
              </Link>
            </div>

            <p style={{ fontSize: "17px", color: "#6b7280", fontWeight: 300, marginBottom: "48px" }}>
              Select a document to open or download.
            </p>

            <div className="cv-cards">
              {documents.map((doc) => (
                <a
                  key={doc.title}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-card"
                  style={{ "--card-accent": doc.accent } as React.CSSProperties}
                >
                  <div className="cv-card-icon">{doc.icon}</div>
                  <div className="cv-card-body">
                    <div className="cv-card-title">{doc.title}</div>
                    <div className="cv-card-subtitle">{doc.subtitle}</div>
                  </div>
                  <div className="cv-card-arrow">↗</div>
                </a>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
