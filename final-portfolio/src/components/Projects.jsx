import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const projectData = [
  {
    title: "SIPATLIGTAS",
    desc: "Hyperlocal hazard visualizer and mapping tool designed for disaster resilience.",
    tags: ["React", "Leaflet", "Data Viz"],
    link: "#",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "LEGEND OF GYRO",
    desc: "A web-accessible 2D endless runner built using Python and Pygame.",
    tags: ["Python", "Pygame"],
    link: "https://github.com/Svintjohn/Legend-of-Gyro",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "TECH INVENTORY",
    desc: "Desktop-based inventory management system allowing users to edit, delete, and generate reports.",
    tags: ["Python", "MySQL"],
    link: "https://github.com/Svintjohn/PyStock-Manager",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const floatImageRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const floatImg = floatImageRef.current;
    
    // QuickTo for super smooth 60fps tracking (Patrick David style momentum)
    const xMove = gsap.quickTo(floatImg, "left", { duration: 0.4, ease: "power3.out" });
    const yMove = gsap.quickTo(floatImg, "top", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e) => {
      // Offset by half the width/height of the image to center it on cursor
      xMove(e.clientX - 150); 
      yMove(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseEnter = (index) => {
    setActiveImage(index);
    gsap.to(floatImageRef.current, { 
      opacity: 1, 
      scale: 1, 
      rotation: Math.random() * 10 - 5, 
      duration: 0.5, 
      ease: "power3.out" 
    });
  };

  const handleMouseLeave = () => {
    gsap.to(floatImageRef.current, { 
      opacity: 0, 
      scale: 0.8, 
      duration: 0.4, 
      ease: "power3.inOut" 
    });
  };

  return (
    <section id="projects" ref={containerRef} className="section-padding reveal-on-scroll" style={{ position: 'relative' }}>
      <h3 className="mono-tag" style={{ marginBottom: '3rem' }}>// DEPLOYED_SYSTEMS</h3>
      
      {/* THE FLOATING IMAGE FOLLOWER */}
      <div 
        ref={floatImageRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '300px', height: '400px',
          pointerEvents: 'none',
          opacity: 0,
          scale: 0.8,
          zIndex: 100,
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
        }}
      >
        <div 
          style={{
            width: '100%', height: '100%',
            backgroundImage: `url(${projectData[activeImage].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.4s ease'
          }}
        />
      </div>

      {/* PROJECT LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border)' }}>
        {projectData.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '3rem 1rem', textDecoration: 'none', color: 'inherit',
              borderBottom: '1px solid var(--border)',
              position: 'relative', overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('h4').style.transform = 'translateX(20px)';
              e.currentTarget.querySelector('h4').style.color = 'var(--accent-primary)';
              e.currentTarget.querySelector('.arrow').style.transform = 'translate(10px, -10px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('h4').style.transform = 'translateX(0)';
              e.currentTarget.querySelector('h4').style.color = 'var(--text-main)';
              e.currentTarget.querySelector('.arrow').style.transform = 'translate(0, 0)';
            }}
          >
            <div style={{ zIndex: 2, width: '45%' }}>
              <h4 style={{ fontSize: '3rem', color: 'var(--text-main)', fontWeight: 900, margin: 0, transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
                {project.title}
              </h4>
            </div>

            <div style={{ zIndex: 2, width: '40%' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1rem', lineHeight: 1.6 }}>{project.desc}</p>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', padding: '0.3rem 1rem', background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: '20px', fontWeight: 600 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="arrow" style={{ zIndex: 2, transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
              <ArrowUpRight color="var(--accent-primary)" size={40} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}