import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Pinalitan natin ng HEX codes ang unang tatlo para gumana yung gradient transparency!
const skills = [
  { name: 'Python (Pandas, NumPy, SciPy)', level: 92, color: '#2563eb' }, /* Royal Blue */
  { name: 'Advanced Excel', level: 90, color: '#ec4899' }, /* Pink */
  { name: 'Power BI & Data Visualization', level: 85, color: '#f59e0b' }, /* Amber */
  { name: 'Backend Integration', level: 85, color: '#10b981' }, /* Emerald */
  { name: 'SQL / Database Mgt', level: 84, color: '#8b5cf6' }, /* Violet */
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const bars = sectionRef.current.querySelectorAll('.skill-bar-fill');
    const numbers = sectionRef.current.querySelectorAll('.skill-number');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animation para humaba ang bar
          bars.forEach(bar => {
            gsap.to(bar, { width: bar.dataset.width, duration: 1.5, ease: "power4.out", delay: 0.1 });
          });
          // Animation para pumalo pataas ang number text
          numbers.forEach(num => {
            gsap.to(num, { innerHTML: num.dataset.target, duration: 1.5, snap: { innerHTML: 1 }, ease: "power4.out", delay: 0.1 });
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding reveal-on-scroll">
      <h3 className="mono-tag" style={{ marginBottom: '3rem' }}>// TECHNICAL_CAPABILITIES</h3>
      
      <div className="glass-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {skills.map(s => (
          <div key={s.name} style={{ cursor: 'none' }} onMouseEnter={(e) => e.currentTarget.querySelector('.skill-bar-fill').style.filter = 'brightness(1.3)'} onMouseLeave={(e) => e.currentTarget.querySelector('.skill-bar-fill').style.filter = 'brightness(1)'}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 700 }}>
              <span style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>{s.name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: s.color }}>
                <span className="skill-number" data-target={s.level}>0</span>%
              </span>
            </div>
            
            <div style={{ height: '14px', background: 'var(--border)', width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
              <div 
                className="skill-bar-fill" 
                data-width={`${s.level}%`} 
                style={{ 
                  height: '100%', 
                  width: '0%', 
                  background: `linear-gradient(90deg, ${s.color}88, ${s.color})`, 
                  borderRadius: '10px', 
                  transition: 'filter 0.3s ease' 
                }} 
              />
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}