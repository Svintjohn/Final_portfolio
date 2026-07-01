import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('href'), { offset: -50 });
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { opacity: 1, y: 0, duration: 1, ease: 'back.out(1.2)' });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      gsap.set(el, { opacity: 0, y: 60 });
      observer.observe(el);
    });

    return () => { lenis.destroy(); observer.disconnect(); };
  }, []);

  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
      {/* Dynamic Backgrounds */}
      <div className="animated-bg"></div>
      <div className="blueprint-grid"></div>
      
      <Cursor />
      
      <div style={{ width: '40%', position: 'relative' }}>
        <Sidebar />
      </div>

      <main style={{ width: '60%', zIndex: 1, position: 'relative', paddingRight: '4rem' }}>
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}