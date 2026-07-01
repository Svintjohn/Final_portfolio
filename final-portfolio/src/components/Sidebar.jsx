import React from 'react';
import { Mail, Database } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Sidebar() {
  const navLinks = [
    { name: '01 // SPECIALIZATION', id: '#skills' },
    { name: '02 // TIMELINE', id: '#education' },
    { name: '03 // ARCHITECTURE', id: '#projects' },
    { name: '04 // PING_ME', id: '#contact' }
  ];

  return (
    <aside style={{
      position: 'fixed', top: 0, left: 0, width: '40%', height: '100vh',
      padding: '5rem 4rem', display: 'flex', flexDirection: 'column', 
      justifyContent: 'space-between', borderRight: '1px solid rgba(255,255,255,0.05)',
      zIndex: 10
    }}>
      <div>
        <Database size={40} color="var(--accent-blue)" style={{ marginBottom: '2rem', filter: 'drop-shadow(0 0 10px rgba(0,210,255,0.5))' }} />
        <h1 style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-2px' }}>
          JOHN <br />BERCELES
        </h1>
        <h2 style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontSize: '1rem', letterSpacing: '2px' }}>
          DATA ANALYST // BACKEND DEV
        </h2>
        <p style={{ marginTop: '2rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '350px' }}>
          Transforming raw data into actionable insights and engineering scalable backend architectures. Precision is the baseline.
        </p>
      </div>

      {/* Radar Navigation Links */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {navLinks.map((link) => (
          <a 
            key={link.id} 
            href={link.id}
            style={{ 
              textDecoration: 'none', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', 
              fontSize: '0.85rem', letterSpacing: '1px', width: 'max-content',
              transition: 'color 0.3s ease, transform 0.3s ease' 
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-blue)'; e.currentTarget.style.transform = 'translateX(10px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateX(0)'; }}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="https://github.com/Svintjohn" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/john-benedict-berceles-8787b0228" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:bercelesjohnbenedict25@gmail.com" style={{ color: 'var(--text-muted)' }}>
          <Mail size={24} />
        </a>
      </div>
    </aside>
  );
}