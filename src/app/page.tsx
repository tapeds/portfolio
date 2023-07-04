"use client";

import AOS from "aos";
import { useEffect } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import SEO from "@/components/SEO";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <SEO
        title="Farrell's portfolio"
        description="This is a portfolio profile made by Farrell Matthew Lim"
      />
      <main
        className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[#212121] text-[#D4D4D4] 
    overflow-x-hidden scroll-smooth scrollbar-thin scrollbar-track-[#212121] scrollbar-thumb-gray-300
    scrollbar-rounded-lg"
      >
        <Header />
        <section className="snap-start" id="hero">
          <Hero />
        </section>
        <div className="snap-center">
          <About />
        </div>
        <section className="snap-start" id="experience">
          <Experience />
        </section>
        <section className="snap-start" id="skills">
          <Skills />
        </section>
        <section className="snap-center" id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
