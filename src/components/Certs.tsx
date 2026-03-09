const certs = [
  { name: "Power Platform Fundamentals (PL-900)", meta: "Microsoft Certified · July 2024" },
  { name: "Introduction to PowerApps", meta: "Microsoft Badge · April 2023" },
  { name: "Introduction to Power Platform", meta: "Microsoft Badge · March 2023" },
];

function MSLogo() {
  return (
    <div className="cert-ms-logo">
      <div className="ms-sq r" />
      <div className="ms-sq g" />
      <div className="ms-sq b" />
      <div className="ms-sq y" />
    </div>
  );
}

export default function Certs() {
  return (
    <section className="certs">
      <div className="certs-inner reveal">
        <div className="section-tag">Certifications</div>
        <h2 className="section-title" style={{ fontSize: "clamp(28px,3vw,40px)" }}>
          Microsoft Credentials
        </h2>
        <div className="certs-row">
          {certs.map((c) => (
            <div key={c.name} className="cert-card">
              <MSLogo />
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-meta">{c.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
