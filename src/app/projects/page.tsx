import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AllProjectsGrid from "@/components/AllProjectsGrid";

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

            <AllProjectsGrid />

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
