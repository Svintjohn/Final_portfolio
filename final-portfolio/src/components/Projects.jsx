import React from 'react';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

const projectData = [
  {
    title: "SipatLigtas",
    desc: "Hyperlocal hazard visualizer and mapping tool designed for disaster resilience and data-driven emergency response.",
    tags: ["React", "Leaflet", "Data Viz"],
    link: "#",
    color: "var(--accent-primary)"
  },
  {
    title: "Legend of Gyro",
    desc: "A web-accessible 2D endless runner built using Python and Pygame. Dystopian cyberpunk aesthetic.",
    tags: ["Python", "Pygame"],
    link: "https://github.com/Svintjohn/Legend-of-Gyro",
    color: "var(--accent-tertiary)"
  },
  {
    title: "Tech Inventory",
    desc: "Desktop-based inventory management system allowing users to edit, delete, and generate reports.",
    tags: ["Python", "MySQL"],
    link: "https://github.com/Svintjohn/PyStock-Manager",
    color: "var(--accent-secondary)"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding reveal-on-scroll">
      <h3 className="mono-tag" style={{ marginBottom: '3rem' }}>// DEPLOYED_SYSTEMS</h3>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
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
              position: 'relative', overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02) translateY(-10px)';
              e.currentTarget.style.boxShadow = `0 20px 40px ${project.color}33`; // 33 is 20% opacity hex
              e.currentTarget.querySelector('.project-icon').style.transform = 'rotate(45deg) scale(1.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(0,0,0,0.05)';
              e.currentTarget.querySelector('.project-icon').style.transform = 'rotate(0deg) scale(1)';
            }}
          >
            {/* Colorful accent line */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: project.color }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: `${project.color}15`, padding: '1rem', borderRadius: '12px' }}>
                  <FolderGit2 size={28} color={project.color} />
                </div>
                <h4 style={{ fontSize: '2rem', color: 'var(--text-main)', fontWeight: 800, margin: 0 }}>
                  {project.title}
                </h4>
              </div>
              <div className="project-icon" style={{ background: 'var(--bg-main)', padding: '0.8rem', borderRadius: '50%', transition: 'all 0.3s' }}>
                <ArrowUpRight color={project.color} size={24} />
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '90%' }}>
              {project.desc}
            </p>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', padding: '0.4rem 1.2rem', background: 'var(--bg-main)', border: '1px solid var(--border)', color: 'var(--text-main)', borderRadius: '8px', fontWeight: 600 }}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}