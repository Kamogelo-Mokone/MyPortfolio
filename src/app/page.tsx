"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Certs from "@/components/Certs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("js-ready");

    const reveals = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("up"), i * 60);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    reveals.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Certs />
      <Contact />
      <Footer />
    </>
  );
}
