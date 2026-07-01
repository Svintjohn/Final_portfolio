import React from 'react';

const skills = [
  { name: 'Python (Pandas, NumPy, SciPy)', level: 92 },
  { name: 'Advanced Excel', level: 90 },
  { name: 'Power BI & Data Visualization', level: 85 },
  { name: 'Backend Integration', level: 85 },
  { name: 'SQL / Database Management', level: 84 },
];

export default function Skills() {
  return (
    <section className="section-padding reveal-on-scroll">
      <h3 className="mono-tag" style={{ marginBottom: '3rem' }}>// TECHNICAL_CAPABILITIES</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {skills.map(s => (
          <div key={s.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-main)' }}>{s.name}</span>
              <span style={{ color: 'var(--accent-yellow)' }}>{s.level}%</span>
            </div>
            <div style={{ height: '2px', background: 'rgba(255,255,255,0.1)', width: '100%', position: 'relative' }}>
              <div 
                style={{ 
                  position: 'absolute', top: 0, left: 0, height: '100%', 
                  width: `${s.level}%`, background: 'var(--accent-blue)',
                  boxShadow: '0 0 10px rgba(37, 99, 235, 0.5)' // Neon glow effect
                }} 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}