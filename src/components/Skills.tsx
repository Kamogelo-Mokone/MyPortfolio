import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const subSkills = [
  {
    icon: `${BASE}/icons/PowerApps.png`,
    name: "Power Platform",
    desc: "Canvas App architecture, PowerFX logic, UI/UX, SharePoint-backed data layers, role-based permissions, governance.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
  },
  {
    icon: `${BASE}/icons/SharePoint.png`,
    name: "SharePoint & SPFx",
    desc: "List architecture, data modeling, permission governance, Communication Sites, custom SPFx web parts in React & TypeScript.",
    tags: ["SPFx", "React", "PnPjs", "TypeScript", "+1"],
  },
  {
    icon: `${BASE}/icons/CopilotStudio.png`,
    name: "AI & Copilot Studio",
    desc: "Conversational agent design, multi-step scenario flows, Power Platform integration, context-aware interaction building.",
    tags: ["Copilot Studio", "MS Copilot", "Conv. AI"],
  },
  {
    icon: `${BASE}/icons/M365.png`,
    name: "Solution Architecture",
    desc: "Stakeholder workshops, requirements translation, scalable system design, UI prototyping, technical documentation.",
    tags: ["Solution Design", "REST APIs", "Data Arch."],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-inner">
        <div className="reveal">
          <div className="section-tag">Expertise</div>
          <h2 className="section-title">What I work with.</h2>
        </div>

        {/* Figma featured card */}
        <div className="skill-card skill-card--featured reveal">
          <div className="skill-icon-wrap skill-icon-wrap--img">
            <Image src={`${BASE}/icons/Figma.png`} alt="Figma" width={28} height={28} />
          </div>
          <div className="skill-name">Figma</div>
          <p className="skill-desc">
            I&apos;m highly skilled in Figma, with a deep understanding of the full design workflow: from
            wireframing and ideation to building fully realized screens and interactive prototypes. I excel
            at creating design systems that ensure consistency, scalability, and efficiency across projects,
            and I can translate complex requirements into intuitive, user-friendly interfaces. Whether it&apos;s
            crafting detailed UI layouts, interactive flows, or polished high-fidelity prototypes, I use Figma
            to bring ideas to life with precision, clarity, and an eye for both aesthetics and functionality.
          </p>
          <div className="skill-tags">
            <span className="skill-tag">Wireframing</span>
            <span className="skill-tag">Design Systems</span>
            <span className="skill-tag">Prototyping</span>
          </div>
        </div>

        {/* 4-column grid */}
        <div className="skills-grid">
          {subSkills.map((s) => (
            <div key={s.name} className="skill-card reveal">
              <div className="skill-icon-wrap skill-icon-wrap--img">
                <Image src={s.icon} alt={s.name} width={28} height={28} />
              </div>
              <div className="skill-name">{s.name}</div>
              <p className="skill-desc">{s.desc}</p>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
