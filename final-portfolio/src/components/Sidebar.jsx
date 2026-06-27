import React from 'react';
import { Mail, Database } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Sidebar() {
  return (
    <aside style={{
      position: 'fixed', top: 0, left: 0, width: '40%', height: '100vh',
      padding: '6rem 4rem', display: 'flex', flexDirection: 'column', 
      justifyContent: 'space-between', borderRight: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div>
        <Database size={40} color="var(--accent-yellow)" style={{ marginBottom: '2rem' }} />
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem' }}>
          JOHN <br />BERCELES
        </h1>
        <h2 style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '1rem' }}>
          DATA ANALYST // BACKEND DEVELOPER
        </h2>
        <p style={{ marginTop: '2rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '350px' }}>
          Transforming raw data into actionable insights and engineering scalable backend architectures. Precision is the baseline.
        </p>
      </div>

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