import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-photo reveal">
          <Image
            src="/ProfilePicture.png"
            alt="Kamogelo Mokone"
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            priority
          />
          <div className="photo-badge">📍 Midrand, SA</div>
        </div>

        <div className="about-text reveal">
          <div className="section-tag">About</div>
          <h2 className="section-title">Engineering meets<br />creative intent.</h2>

          <p>
            I&apos;m a <span className="about-highlight">Microsoft Power Platform</span>,{" "}
            <span className="about-highlight">SharePoint</span>,{" "}
            <span className="about-highlight">AI Solutions Developer</span>, and{" "}
            <span className="about-highlight">UI/UX designer</span> based in Midrand, South Africa.
            My work sits at the intersection of structured engineering and creative problem-solving
            where technology becomes a tool to build thoughtful, human-centered systems.
          </p>

          <p>
            I design and build solutions across the Microsoft ecosystem, from Power Apps and
            automation workflows to SharePoint architectures and conversational AI agents. I enjoy
            taking complex ideas or business challenges and translating them into clear, scalable
            digital solutions that people can actually use and understand.
          </p>

          <p>
            Beyond development, I see myself as a creative technologist. I&apos;m naturally drawn to
            writing, reflection, and exploring ideas around identity, growth, and the role technology
            plays in our lives. That perspective influences how I approach building software with
            intention, empathy, and a long-term mindset.
          </p>

          <p>
            I&apos;m continuously evolving toward enterprise architecture and AI-driven strategy,
            focusing not only on delivering solutions but on designing systems that grow with people
            and organizations over time. At the core of my work is a simple philosophy: build with{" "}
            <span className="about-highlight">integrity</span>,{" "}
            <span className="about-highlight">creativity</span>, and the{" "}
            <span className="about-highlight">long game in mind</span>.
          </p>

          <div className="about-quote">
            <span className="about-quote-mark">&ldquo;</span>
            <p>
              Digital systems should reduce friction, not create it. They should empower teams, not
              overwhelm them.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="/cv"
              className="btn-primary"
              style={{ background: "var(--forest)", color: "var(--lime)" }}
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="btn-outline"
              style={{ borderColor: "rgba(0,88,64,0.2)", color: "var(--forest)" }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
