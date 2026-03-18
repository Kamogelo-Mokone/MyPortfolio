export interface Project {
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
  date: string; // ISO format "YYYY-MM" — used to sort latest first
}

export const selectedProjects: Project[] = [
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
    date: "2024-06",
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
    date: "2024-11",
  },
];

export const microsoftProjects: Project[] = [
  {
    pill: "Copilot Studio",
    variant: "light",
    title: "Intelligent Conversational Agents",
    desc: "Designed and developed conversational agents in Microsoft Copilot Studio, ranging from structured FAQ-style bots to more complex, multi-step scenario-driven automation agents.|Experience includes: designing conversational flows for structured and multi-step interactions, implementing conditional logic and branching scenarios, integrating agents with Power Platform workflows, and building context-aware interactions to support business processes.|These agents were built to support internal productivity, automate responses, and enhance digital interaction within enterprise environments.",
    tags: "Copilot Studio,Conversational AI,Power Platform,Workflow Integration,Conditional Logic",
    num: "01",
    shortDesc: "From structured FAQ bots to multi-step scenario-driven agents, integrated with Power Platform workflows.",
    arrowLabel: "View Case Study →",
    date: "2024-03",
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
    date: "2024-08",
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
    date: "2024-05",
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
    date: "2024-10",
  },
];
