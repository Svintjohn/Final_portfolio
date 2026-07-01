import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3.out" });

    const move = (e) => { xTo(e.clientX); yTo(e.clientY); };
    window.addEventListener("mousemove", move);

    const initHoverEffects = () => {
      const interactables = document.querySelectorAll('a, button');
      interactables.forEach(el => {
        el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 3, backgroundColor: 'rgba(37, 99, 235, 0.1)', border: '2px solid var(--accent-primary)', duration: 0.3, ease: "back.out(2)" }));
        el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, backgroundColor: 'var(--accent-primary)', border: 'none', duration: 0.3 }));
      });
    };

    setTimeout(initHoverEffects, 1000);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={cursorRef} style={{ position: 'fixed', top: 0, left: 0, width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%, -50%)', boxShadow: '0 4px 10px rgba(37, 99, 235, 0.4)' }} />
  );
}