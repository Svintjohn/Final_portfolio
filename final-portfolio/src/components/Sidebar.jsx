import React from 'react';
import { Mail, Database, Activity } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Sidebar() {
  const navLinks = [
    { name: '01 // SPECIALIZATION', id: '#skills' },
    { name: '02 // TIMELINE', id: '#education' },
    { name: '03 // ARCHITECTURE', id: '#projects' },
    { name: '04 // PING_ME', id: '#contact' }
  ];

  return (
    <aside className="glass-card" style={{
      position: 'fixed', top: '2rem', left: '2rem', width: '35%', height: 'calc(100vh - 4rem)',
      padding: '4rem', display: 'flex', flexDirection: 'column', 
      justifyContent: 'space-between', zIndex: 10, borderRight: 'none'
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ background: 'var(--accent-primary)', padding: '1rem', borderRadius: '12px', boxShadow: '0 10px 20px rgba(37, 99, 235, 0.3)' }}>
            <Database size={32} color="#fff" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(15, 23, 42, 0.05)', padding: '0.4rem 0.8rem', borderRadius: '20px' }}>
            <Activity size={16} color="var(--accent-secondary)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>SYSTEM_ACTIVE</span>
          </div>
        </div>

        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.5rem', letterSpacing: '-1.5px', color: 'var(--text-main)' }}>
          JOHN <br />BERCELES
        </h1>
        <h2 style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontSize: '1rem', letterSpacing: '1px', fontWeight: 700 }}>
          DATA ANALYST // BACKEND DEV
        </h2>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '350px', fontSize: '1.05rem' }}>
          Transforming raw data into actionable insights and engineering scalable backend architectures. Precision is the baseline.
        </p>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {navLinks.map((link) => (
          <a 
            key={link.id} href={link.id}
            style={{ 
              textDecoration: 'none', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', 
              fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px', width: 'max-content',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'translateX(15px) scale(1.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateX(0) scale(1)'; }}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="https://github.com/Svintjohn" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', transition: 'all 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}><FaGithub size={28} /></a>
        <a href="https://www.linkedin.com/in/john-benedict-berceles-8787b0228" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', transition: 'all 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}><FaLinkedin size={28} /></a>
        <a href="mailto:bercelesjohnbenedict25@gmail.com" style={{ color: 'var(--accent-secondary)', transition: 'all 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}><Mail size={28} /></a>
      </div>
    </aside>
  );
}