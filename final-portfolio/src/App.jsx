import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

function App() {
  // Initialize Aerodynamic Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // F1 braking curve
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <div className="telemetry-grid"></div>
      
      <div style={{ display: 'flex', position: 'relative' }}>
        {/* Static Left Panel */}
        <Sidebar />
        
        {/* Scrollable Right Panel */}
        <main style={{ marginLeft: '40%', width: '60%' }}>
          <Hero />
          <Projects />
          {/* You can add your About, Skills, and Contact components here later */}
        </main>
      </div>
    </>
  );
}

export default App;