import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.reveal-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.2
      });
      
      gsap.from('.reveal-fade', {
        opacity: 0,
        duration: 2,
        delay: 1,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={containerRef} className="section-padding" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ overflow: 'hidden' }}>
        <p className="mono-tag reveal-text" style={{ marginBottom: '1rem' }}>SYSTEM: ONLINE_</p>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <h2 className="reveal-text" style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1.1 }}>
          FINDING PATTERNS
        </h2>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <h2 className="reveal-text" style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1.1, color: 'var(--text-muted)' }}>
          IN THE NOISE.
        </h2>
      </div>
      
      <div className="reveal-fade" style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
        <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1rem' }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>SPECIALIZATION</h4>
          <p style={{ fontWeight: 600 }}>Python & SQL Architecture</p>
        </div>
        <div style={{ borderLeft: '2px solid var(--accent-yellow)', paddingLeft: '1rem' }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>VISUALIZATION</h4>
          <p style={{ fontWeight: 600 }}>Power BI & Analytics</p>
        </div>
      </div>
    </section>
  );
}