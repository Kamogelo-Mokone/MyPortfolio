"use client";

export default function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">KM.</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact" className="nav-cta">Get in touch</a></li>
      </ul>
    </nav>
  );
}
