import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projectData = [
  {
    title: "Legend of Gyro",
    desc: "A web-accessible 2D endless runner built using Python and Pygame. Designed with a dystopian cyberpunk aesthetic, it serves as an interactive technical showcase.",
    tags: ["Python", "Pygame", "SQLite"],
    link: "https://github.com/Svintjohn/Legend-of-Gyro"
  },
  {
    title: "Tech Inventory System",
    desc: "A simple and efficient desktop-based inventory management system allowing users to add, edit, delete, and generate reports for technology products.",
    tags: ["Python 3.x", "MySQL", "XAMPP"],
    link: "https://github.com/Svintjohn/PyStock-Manager"
  },
  {
    title: "SipatLigtas Visualizer",
    desc: "Hyperlocal hazard visualizer and mapping tool designed for disaster resilience and data-driven emergency response.",
    tags: ["React", "Leaflet", "Data Viz"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding reveal-on-scroll">
      <h3 className="mono-tag" style={{ marginBottom: '3rem' }}>// DEPLOYED_SYSTEMS</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {projectData.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="glass-card"
            style={{
              display: 'block', padding: '2.5rem',
              textDecoration: 'none', color: 'inherit',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-blue)';
              e.currentTarget.style.transform = 'scale(1.02) translateX(10px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 210, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.transform = 'scale(1) translateX(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h4 style={{ fontSize: '1.6rem', marginBottom: '0.8rem', color: 'var(--text-main)', fontWeight: 700 }}>
                  {project.title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '85%', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.4rem 1rem', background: 'rgba(0, 210, 255, 0.1)', border: '1px solid rgba(0, 210, 255, 0.2)', color: 'var(--accent-blue)', borderRadius: '20px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight color="var(--accent-red)" style={{ flexShrink: 0, transition: 'transform 0.3s ease' }} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}