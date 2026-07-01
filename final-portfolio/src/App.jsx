import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // 1. Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.5, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    // 2. Sync Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);

    // Global Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      gsap.set(el, { opacity: 0, y: 100 }); 
      observer.observe(el);
    });

    return () => { 
      lenis.destroy(); 
      observer.disconnect(); 
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
      <div className="animated-bg"></div>
      <div className="blueprint-grid"></div>
      <Cursor />
      
      {/* Fixed Left Sidebar */}
      <div style={{ width: '38%', position: 'relative' }}>
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main style={{ width: '62%', zIndex: 1, position: 'relative', paddingRight: '4rem', overflow: 'hidden' }}>
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}