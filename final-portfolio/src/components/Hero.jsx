import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance animation
      gsap.from('.reveal-text', {
        y: 120,
        opacity: 0,
        duration: 1.8,
        stagger: 0.15,
        ease: 'power4.out',
      });
      
      // Mouse Parallax Effect
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40; 
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        gsap.to(textRef.current, {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: 'power3.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={containerRef} className="section-padding" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div ref={textRef} style={{ zIndex: 2 }}>
        <div style={{ overflow: 'hidden' }}>
          <p className="mono-tag reveal-text" style={{ marginBottom: '1.5rem', color: 'var(--accent-red)' }}>SYSTEM: ONLINE_</p>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <h2 className="reveal-text" style={{ fontSize: '5.5rem', letterSpacing: '-0.04em', fontWeight: 900, lineHeight: 1 }}>
            FINDING
          </h2>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <h2 className="reveal-text" style={{ fontSize: '5.5rem', letterSpacing: '-0.04em', fontWeight: 900, lineHeight: 1, color: 'transparent', WebkitTextStroke: '2px var(--text-muted)' }}>
            PATTERNS
          </h2>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <h2 className="reveal-text" style={{ fontSize: '5.5rem', letterSpacing: '-0.04em', fontWeight: 900, lineHeight: 1 }}>
            IN THE NOISE.
          </h2>
        </div>
      </div>

      {/* Decorative ambient background element */}
      <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,210,255,0.1) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
    </section>
  );
}