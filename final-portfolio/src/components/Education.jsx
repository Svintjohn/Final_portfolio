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
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '2px solid var(--accent-primary)', marginLeft: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '-15px', marginBottom: '2rem', color: 'var(--accent-primary)' }}>
          <BookOpen size={28} style={{ background: 'var(--bg-main)', padding: '2px' }}/>
          <span style={{ fontFamily: 'var(--font-mono)', letterSpacing: '2px', fontWeight: 800 }}>EDUCATION</span>
        </div>
        {timeline.map((item, index) => (
          <div key={index} style={{ position: 'relative', paddingLeft: '3rem', paddingBottom: '3rem', transition: 'transform 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateX(10px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
            <div style={{ position: 'absolute', left: '-7px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 10px rgba(37, 99, 235, 0.5)' }}></div>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>{item.degree}</h4>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', background: 'rgba(37, 99, 235, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.5rem', fontWeight: 600 }}>{item.year}</span>
            <p style={{ color: 'var(--text-muted)' }}>{item.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
}