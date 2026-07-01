import React from 'react';
import { Award, FileBadge, Star, GraduationCap } from 'lucide-react';

const achievements = [
  { title: "President and Chief Executive Officer, GDGoC-HAU", org: "Holy Angel University", icon: <Award size={32} /> },
  { title: "DOST Junior Level Science Scholarship (JLSS)", org: "Applicant", icon: <FileBadge size={32} /> },
  { title: "NCLE TechHorizon Convention", org: "Active Participant", icon: <Star size={32} /> },
  { title: "Data Camp", org: "Scholarship Applicant", icon: <GraduationCap size={32} /> }
];

export default function Achievements() {
  return (
    <section className="section-padding reveal-on-scroll">
      <h3 className="mono-tag" style={{ marginBottom: '3rem' }}>// MILESTONES_&_EVENTS</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {achievements.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '2rem', 
              backgroundColor: 'var(--bg-panel)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '8px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
          >
            <div style={{ color: 'var(--accent-yellow)', marginBottom: '1.5rem' }}>
              {item.icon}
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.8rem', lineHeight: 1.4 }}>
              {item.title}
            </h4>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {item.org}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}