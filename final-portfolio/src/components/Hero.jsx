import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from('.reveal-text', {
        y: 150, opacity: 0, duration: 1.5, stagger: 0.1, ease: 'power4.out'
      });

      // PATRICK DAVID SCROLL PARALLAX 
      // Ang "FINDING" aabante pakaliwa
      gsap.to(text1Ref.current, {
        x: -150,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1 
        }
      });

      // Ang "IN THE NOISE" aabante pakanan
      gsap.to(text2Ref.current, {
        x: 150,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
      
    }, containerRef);
    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={containerRef} className="section-padding" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
      
      <div style={{ zIndex: 2, position: 'relative' }}>
        <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
          <span className="mono-tag reveal-text">USER_INTENT: ANALYZE</span>
        </div>
        
        <div style={{ overflow: 'hidden' }}>
          <h2 ref={text1Ref} className="reveal-text" style={{ fontSize: '7rem', letterSpacing: '-0.04em', fontWeight: 900, lineHeight: 1, color: 'var(--text-main)', whiteSpace: 'nowrap' }}>
            FINDING
          </h2>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <h2 className="reveal-text" style={{ fontSize: '7rem', letterSpacing: '-0.04em', fontWeight: 900, lineHeight: 1, color: 'transparent', WebkitTextStroke: '2px var(--accent-primary)', whiteSpace: 'nowrap' }}>
            PATTERNS
          </h2>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <h2 ref={text2Ref} className="reveal-text" style={{ fontSize: '7rem', letterSpacing: '-0.04em', fontWeight: 900, lineHeight: 1, color: 'var(--text-main)', whiteSpace: 'nowrap' }}>
            IN THE NOISE.
          </h2>
        </div>
      </div>
    </section>
  );
}