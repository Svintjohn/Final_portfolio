import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const move = (e) => { xTo(e.clientX); yTo(e.clientY); };
    window.addEventListener("mousemove", move);

    const addHover = () => {
      const interactables = document.querySelectorAll('a, button');
      interactables.forEach(el => {
        el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 3, backgroundColor: 'rgba(0, 210, 255, 0.1)', border: '1px solid var(--accent-blue)', duration: 0.3 }));
        el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, backgroundColor: 'var(--accent-red)', border: 'none', duration: 0.3 }));
      });
    };

    setTimeout(addHover, 2000);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div 
      ref={cursorRef} 
      style={{ 
        position: 'fixed', top: 0, left: 0, width: '12px', height: '12px', 
        borderRadius: '50%', backgroundColor: 'var(--accent-red)', 
        pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 10px rgba(225, 6, 0, 0.8)'
      }} 
    />
  );
}