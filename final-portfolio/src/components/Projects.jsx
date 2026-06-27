import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projectData = [
  {
    title: "Legend of Gyro",
    desc: "A web-accessible 2D endless runner built using Python and Pygame. Designed with a dystopian cyberpunk aesthetic.",
    tags: ["Python", "Pygame", "SQLite"],
    link: "https://github.com/Svintjohn/Legend-of-Gyro"
  },
  {
    title: "Tech Inventory System",
    desc: "Database-driven application built using Python that stores, retrieves, and manages product data in a real MySQL database.",
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
    <section className="section-padding">
      <h3 className="mono-tag" style={{ marginBottom: '3rem' }}>// DEPLOYED_SYSTEMS</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {projectData.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'block',
              padding: '2.5rem',
              backgroundColor: 'var(--bg-panel)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-yellow)';
              e.currentTarget.style.transform = 'translateX(10px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{project.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '80%', marginBottom: '1.5rem' }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.3rem 0.8rem', background: 'rgba(250, 204, 21, 0.1)', color: 'var(--accent-yellow)', borderRadius: '20px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight color="var(--text-muted)" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}