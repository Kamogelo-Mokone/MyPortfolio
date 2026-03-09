import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "All Projects — Kamogelo Mokone",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="work" style={{ paddingTop: "120px" }}>
          <div className="work-inner">

            {/* Header */}
            <div className="work-header">
              <div>
                <div className="section-tag">Projects</div>
                <h1 className="section-title">All Projects</h1>
              </div>
              <Link
                href="/#work"
                className="btn-outline"
                style={{ borderColor: "rgba(0,88,64,0.2)", color: "var(--forest)", padding: "12px 24px", borderRadius: "980px", fontSize: "14px", textDecoration: "none" }}
              >
                ← Back
              </Link>
            </div>

            {/* Empty state — ready for future projects */}
            <div className="projects-empty">
              <div className="projects-empty-icon">🚧</div>
              <h2 className="projects-empty-title">More projects coming soon.</h2>
              <p className="projects-empty-sub">
                New work is being documented and will be added here shortly.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
