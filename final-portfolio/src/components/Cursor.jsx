import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // QuickTo is highly optimized for tracking mouse events smoothly
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3.out" });

    const move = (e) => { 
      xTo(e.clientX); 
      yTo(e.clientY); 
    };
    
    window.addEventListener("mousemove", move);

    const initHoverEffects = () => {
      const interactables = document.querySelectorAll('a, button');
      interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
          gsap.to(cursor, { 
            scale: 4, 
            backgroundColor: 'transparent', 
            border: '1px solid var(--accent-blue)', 
            duration: 0.3,
            ease: "back.out(1.5)"
          });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(cursor, { 
            scale: 1, 
            backgroundColor: 'var(--accent-red)', 
            border: 'none', 
            duration: 0.3 
          });
        });
      });
    };

    // Delay initialization to ensure DOM is painted
    setTimeout(initHoverEffects, 1000);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div 
      ref={cursorRef} 
      style={{ 
        position: 'fixed', top: 0, left: 0, width: '16px', height: '16px', 
        borderRadius: '50%', backgroundColor: 'var(--accent-red)', 
        pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%, -50%)',
        mixBlendMode: 'difference' // Pro-level touch for dynamic contrast
      }} 
    />
  );
}