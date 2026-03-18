"use client";

import { useState, useEffect } from "react";
import { selectedProjects, microsoftProjects, type Project } from "@/data/projects";

const sortedSelected = [...selectedProjects].sort(
  (a, b) => b.date.localeCompare(a.date)
);

function ProjectCard({ p, onClick }: { p: Project; onClick: () => void }) {
  return (
    <div
      className={`project-card${p.featured ? " featured" : ""}${p.teal ? " teal-card" : ""}`}
      onClick={onClick}
    >
      <div className="project-card-top">
        <div className="project-pill">{p.pill}</div>
        {p.num && <span className="project-num">{p.num}</span>}
      </div>
      <h3 className="project-title">{p.title}</h3>
      <p className="project-desc">{p.shortDesc}</p>
      <div className="project-arrow">{p.arrowLabel ?? "View Case Study →"}</div>
    </div>
  );
}

export default function AllProjectsGrid() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
  }, [active]);

  return (
    <>
      {/* Selected Projects */}
      <div className="work-header reveal" style={{ marginTop: "48px" }}>
        <div>
          <div className="section-tag">Selected</div>
          <h2 className="section-title">Selected Projects</h2>
        </div>
      </div>

      <div className="projects-grid projects-grid--two" style={{ marginBottom: "96px" }}>
        {sortedSelected.map((p) => (
          <ProjectCard key={p.title} p={p} onClick={() => setActive(p)} />
        ))}
      </div>

      {/* Microsoft Projects */}
      <div className="work-header reveal">
        <div>
          <div className="section-tag">Microsoft</div>
          <h2 className="section-title">Microsoft Projects</h2>
        </div>
      </div>

      <div className="projects-grid projects-grid--three">
        {microsoftProjects.map((p) => (
          <ProjectCard key={p.title} p={p} onClick={() => setActive(p)} />
        ))}
      </div>

      {/* Overlay */}
      <div
        className={`project-overlay${active ? " active" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) setActive(null); }}
      >
        {active && (
          <div
            className={`project-detail-card${
              active.variant === "green" ? " variant-green" : active.variant === "light" ? " variant-light" : ""
            }`}
          >
            <div className="detail-top">
              <span className="detail-pill">{active.pill}</span>
              <button className="detail-close" onClick={() => setActive(null)} aria-label="Close">✕</button>
            </div>
            <h3 className="detail-title">{active.title}</h3>
            {active.desc.split("|").map((d, i) => (
              <p key={i} className="detail-desc">{d.trim()}</p>
            ))}
            <div className="detail-tags">
              {active.tags.split(",").map((t) => (
                <span key={t} className="detail-tag">{t.trim()}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
