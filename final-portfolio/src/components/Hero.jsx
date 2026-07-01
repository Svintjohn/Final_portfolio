import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BarChart2, Cpu } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.reveal-text', {
        y: 100, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'back.out(1.5)'
      });
      gsap.from('.floating-badge', {
        scale: 0, opacity: 0, duration: 1, stagger: 0.2, delay: 0.5, ease: 'elastic.out(1, 0.5)'
      });
    }, containerRef);
    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={containerRef} className="section-padding" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
      
      <div style={{ position: 'absolute', top: '25%', right: '10%', zIndex: 0 }} className="floating-badge">
        <div className="glass-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'var(--accent-tertiary)', padding: '0.8rem', borderRadius: '50%' }}>
            <BarChart2 color="#fff" size={20} />
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>DATA SYNC</p>
            <p style={{ fontWeight: 800 }}>OPTIMIZED</p>
          </div>
        </div>
      </div>

      <div style={{ zIndex: 2, position: 'relative' }}>
        <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
          <span className="mono-tag reveal-text">USER_INTENT: ANALYZE</span>
        </div>
        
        <div style={{ overflow: 'hidden' }}>
          <h2 className="reveal-text" style={{ fontSize: '5.5rem', letterSpacing: '-0.04em', fontWeight: 900, lineHeight: 1.05, color: 'var(--text-main)' }}>
            FINDING
          </h2>
        </div>
        <div style={{ overflow: 'hidden' }}>
          {/* Outlined text effect for a high-tech feel */}
          <h2 className="reveal-text" style={{ fontSize: '5.5rem', letterSpacing: '-0.04em', fontWeight: 900, lineHeight: 1.05, color: 'transparent', WebkitTextStroke: '2px var(--accent-primary)' }}>
            PATTERNS
          </h2>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <h2 className="reveal-text" style={{ fontSize: '5.5rem', letterSpacing: '-0.04em', fontWeight: 900, lineHeight: 1.05, color: 'var(--text-main)' }}>
            IN THE NOISE.
          </h2>
        </div>

        <div className="floating-badge glass-card" style={{ marginTop: '4rem', display: 'inline-flex', padding: '1.5rem', gap: '2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Cpu color="var(--accent-primary)" size={28} />
            <div>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>CORE_STACK</h4>
              <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>Python / SQL / React</p>
            </div>
          </div>
          <div style={{ width: '1px', height: '40px', background: 'var(--border)' }}></div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>VISUALIZATION</h4>
            <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>Power BI & Analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
}