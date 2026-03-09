"use client";

import { useState, useEffect } from "react";

interface Project {
  pill: string;
  variant: "green" | "teal" | "light";
  title: string;
  desc: string;
  tags: string;
  featured?: boolean;
  teal?: boolean;
  num?: string;
  shortDesc: string;
  arrowLabel?: string;
}

const selectedProjects: Project[] = [
  {
    pill: "Web App",
    variant: "green",
    title: "Streetwear E-Commerce App",
    desc: "A mobile-first e-commerce concept designed to showcase clothing collections, curated outfits, and seamless product discovery through a clean, modern interface.|Built with a focus on performance, visual hierarchy, and conversion-optimized UX patterns — blending editorial aesthetics with functional commerce design.",
    tags: "UI/UX Design,React,E-Commerce,Mobile First,Figma",
    featured: true,
    num: "01",
    shortDesc: "A mobile-first e-commerce concept designed to showcase clothing collections, curated outfits, and seamless product discovery through a clean, modern interface.",
    arrowLabel: "View Case Study →",
  },
  {
    pill: "Website",
    variant: "teal",
    title: "Freelancing Platform Concept",
    desc: "A modern platform concept designed to connect freelancers with opportunities they love through a streamlined search experience and visually engaging interface.|Focused on reducing friction in the discovery and matching process, with clean typography, intuitive filters, and a design system built for scale.",
    tags: "UI/UX Design,Figma,Product Design,Design System",
    teal: true,
    num: "02",
    shortDesc: "A modern platform concept designed to connect freelancers with opportunities they love through a streamlined search experience and visually engaging interface.",
    arrowLabel: "View Case Study →",
  },
];

const microsoftProjects: Project[] = [
  {
    pill: "Copilot Studio",
    variant: "light",
    title: "Intelligent Conversational Agents",
    desc: "Designed and developed conversational agents in Microsoft Copilot Studio, ranging from structured FAQ-style bots to more complex, multi-step scenario-driven automation agents.|Experience includes: designing conversational flows for structured and multi-step interactions, implementing conditional logic and branching scenarios, integrating agents with Power Platform workflows, and building context-aware interactions to support business processes.|These agents were built to support internal productivity, automate responses, and enhance digital interaction within enterprise environments.",
    tags: "Copilot Studio,Conversational AI,Power Platform,Workflow Integration,Conditional Logic",
    num: "01",
    shortDesc: "From structured FAQ bots to multi-step scenario-driven agents, integrated with Power Platform workflows.",
    arrowLabel: "View Case Study →",
  },
  {
    pill: "SharePoint / SPFx",
    variant: "light",
    title: "JustDeving Platform",
    desc: "Built a custom SharePoint SPFx web part platform from scratch using Heft (Node.js 22), working through the full lifecycle: scaffolding, TypeScript interfaces, PnP-based service layers, SCSS module declarations, and .sppkg deployment.|Highlights include a policy acknowledgment web part with group-based filtering, color-coded acknowledgment status badges, and integration across two SharePoint lists (PolicyWP and PolicyAcknowledgments). Also resolved production deployment issues including PnPjs initialisation problems and null-safety handling.",
    tags: "SPFx,React,TypeScript,PnPjs,SharePoint Lists,Heft",
    num: "02",
    shortDesc: "Custom SPFx web parts — policy acknowledgment system with group-based filtering, status tracking, and PnPjs-powered data layers.",
    arrowLabel: "View Case Study →",
  },
  {
    pill: "SharePoint",
    variant: "light",
    title: "Digital Collaboration Environments",
    desc: "Designed and built multiple SharePoint Communication Sites to improve digital collaboration environments across enterprise clients.|Focus areas included governance-aligned information architecture, permission structuring, Communication Site design and implementation, and creating structured digital workspaces that enhance team collaboration and internal communication.",
    tags: "SharePoint Online,Communication Sites,Governance,Information Architecture,M365",
    num: "03",
    shortDesc: "Multiple SharePoint Communication Sites improving internal governance, communication, and digital collaboration.",
    arrowLabel: "View Case Study →",
  },
  {
    pill: "Solution Design",
    variant: "light",
    title: "Architecture & Strategy Sessions",
    desc: "Led solution design sessions across complex enterprise projects — facilitating stakeholder workshops, translating business requirements into scalable and maintainable technical architectures, and aligning solutions with enterprise governance standards.|Collaborated with national development teams, produced structured technical documentation, and designed scalable system structures and UI screen flows for multiple client projects.",
    tags: "Solution Architecture,Stakeholder Workshops,Technical Documentation,Governance,Enterprise Design",
    num: "04",
    shortDesc: "Leading stakeholder workshops, translating business requirements into scalable technical architectures aligned with enterprise governance standards.",
    arrowLabel: "View Details →",
  },
];

function ProjectCard({ p, onClick }: { p: Project; onClick: () => void }) {
  return (
    <div
      className={`project-card reveal${p.featured ? " featured" : ""}${p.teal ? " teal-card" : ""}`}
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

export default function Work() {
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
      <section className="work" id="work">
        <div className="work-inner">

          {/* Selected Projects */}
          <div className="work-header reveal">
            <div>
              <div className="section-tag">Work</div>
              <h2 className="section-title">Selected Projects</h2>
            </div>
            <a
              href="/projects"
              className="btn-outline"
              style={{ borderColor: "rgba(0,88,64,0.2)", color: "var(--forest)", padding: "12px 24px", borderRadius: "980px", fontSize: "14px", textDecoration: "none" }}
            >
              All Projects →
            </a>
          </div>

          <div className="projects-grid projects-grid--two" style={{ marginBottom: "96px" }}>
            {selectedProjects.map((p) => (
              <ProjectCard key={p.title} p={p} onClick={() => setActive(p)} />
            ))}
          </div>

          {/* Microsoft Projects */}
          <div className="work-header reveal">
            <div>
              <div className="section-tag">Work</div>
              <h2 className="section-title">Microsoft Projects</h2>
            </div>
            <a
              href="/projects"
              className="btn-outline"
              style={{ borderColor: "rgba(0,88,64,0.2)", color: "var(--forest)", padding: "12px 24px", borderRadius: "980px", fontSize: "14px", textDecoration: "none" }}
            >
              All Projects →
            </a>
          </div>

          <div className="projects-grid projects-grid--three">
            {microsoftProjects.map((p) => (
              <ProjectCard key={p.title} p={p} onClick={() => setActive(p)} />
            ))}
          </div>

        </div>
      </section>

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
