"use client";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    document.title = "Jayden Taylor - Portfolio";
    const observer = new IntersectionObserver((entries, opts) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    });
    observer.observe(document.querySelector("div.skills-container"));
    document.querySelectorAll("section").forEach(elem => {
      observer.observe( elem );
    });
  }, []);
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      </main>
  );
}
