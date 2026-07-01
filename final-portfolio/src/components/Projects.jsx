import React from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const projectData = [
  {
    title: "Legend of Gyro",
    desc: "A web-accessible 2D endless runner built using Python and Pygame.",
    tags: ["Python", "Pygame"],
    link: "https://github.com/Svintjohn/Legend-of-Gyro"
  },
  {
    title: "Tech Inventory",
    desc: "Desktop-based inventory management system for tech hardware.",
    tags: ["Python", "MySQL"],
    link: "https://github.com/Svintjohn/PyStock-Manager"
  },
  {
    title: "SipatLigtas",
    desc: "Hyperlocal hazard visualizer mapping tool for disaster resilience.",
    tags: ["React", "Leaflet"],
    link: "#"
  }
];

export default function Projects() {
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget.querySelector('.project-arrow'), { x: 10, y: -10, color: 'var(--accent-blue)', duration: 0.3 });
    gsap.to(e.currentTarget.querySelector('.project-bg'), { scaleY: 1, duration: 0.4, ease: 'power3.out' });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget.querySelector('.project-arrow'), { x: 0, y: 0, color: 'var(--text-muted)', duration: 0.3 });
    gsap.to(e.currentTarget.querySelector('.project-bg'), { scaleY: 0, duration: 0.4, ease: 'power3.out' });
  };

  return (
    <section id="projects" className="section-padding reveal-on-scroll">
      <h3 className="mono-tag" style={{ marginBottom: '3rem' }}>// DEPLOYED_SYSTEMS</h3>
      
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        {projectData.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '3rem 1rem', textDecoration: 'none', color: 'inherit',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              position: 'relative', overflow: 'hidden'
            }}
          >
            {/* Hover Background Reveal */}
            <div className="project-bg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 210, 255, 0.05)', transformOrigin: 'bottom', transform: 'scaleY(0)', zIndex: 0 }} />
            
            <div style={{ zIndex: 1, width: '40%' }}>
              <h4 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0, transition: 'color 0.3s' }}>
                {project.title}
              </h4>
            </div>
            
            <div style={{ zIndex: 1, width: '45%' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1rem', lineHeight: 1.6 }}>{project.desc}</p>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-main)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.2rem 0.8rem', borderRadius: '20px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ zIndex: 1 }}>
              <ArrowUpRight className="project-arrow" size={40} color="var(--text-muted)" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}