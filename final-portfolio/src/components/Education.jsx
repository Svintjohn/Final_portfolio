import React from 'react';
import { BookOpen } from 'lucide-react';

const timeline = [
  { degree: "Bachelor Of Science In Computer Science", year: "2024 — Pursuing", school: "Holy Angel University" },
  { degree: "STEM Strand", year: "2021 — 2024", school: "Holy Angel University" },
  { degree: "Junior High School", year: "2017 — 2021", school: "Our Lord's Angel School" },
  { degree: "Elementary", year: "Graduated 2017", school: "Our Lord's Angel School" }
];

export default function Education() {
  return (
    <section id="education" className="section-padding reveal-on-scroll">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
        <h3 className="mono-tag">// ACADEMIC_TIMELINE</h3>
        <a 
          href="#" 
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-blue)', 
            textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
            transition: 'color 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--accent-blue)'}
        >
          [ DOWNLOAD_CV ]
        </a>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid rgba(255,255,255,0.1)', marginLeft: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '-13px', marginBottom: '2rem', color: 'var(--accent-yellow)' }}>
          <BookOpen size={24} style={{ background: 'var(--bg-dark)', padding: '2px' }}/>
          <span style={{ fontFamily: 'var(--font-mono)', letterSpacing: '2px' }}>EDUCATION</span>
        </div>

        {timeline.map((item, index) => (
          <div 
            key={index} 
            style={{ position: 'relative', paddingLeft: '3rem', paddingBottom: '3rem', transition: 'transform 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateX(10px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
          >
            {/* Timeline Dot */}
            <div style={{ position: 'absolute', left: '-5px', top: '5px', width: '9px', height: '9px', borderRadius: '50%', background: 'var(--accent-blue)', boxShadow: '0 0 10px rgba(0, 210, 255, 0.5)' }}></div>
            
            <h4 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>{item.degree}</h4>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-yellow)', background: 'rgba(250, 204, 21, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.5rem' }}>
              {item.year}
            </span>
            <p style={{ color: 'var(--text-muted)' }}>{item.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
}