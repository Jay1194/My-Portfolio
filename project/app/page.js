"use client";
import Header from '../components/Header';
import Intro from '../components/intro';
import About from '../components/About';
import Skills from '../components/Skills';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, opts) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    });
    observer.observe(document.querySelector('div.skills-container'));
    document.querySelectorAll('section').forEach(elem => {
      observer.observe( elem );
    });
  }, []);
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Skills />
      </main>
  );
}
