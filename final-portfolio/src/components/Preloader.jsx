import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const comp = useRef(null);

  useEffect(() => {
    // gsap.context() safely handles React's double-rendering
    let ctx = gsap.context(() => {
      gsap.to('.preloader-screen', { 
        opacity: 0, 
        duration: 1, 
        delay: 1.5, 
        ease: 'power4.inOut', 
        display: 'none' 
      });
    }, comp);

    return () => ctx.revert(); // Cleanup engine on unmount
  }, []);

  return (
    <div ref={comp}>
      <div className="preloader-screen" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--bg-dark)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>SYSTEMS_ONLINE...</h1>
      </div>
    </div>
  );
}