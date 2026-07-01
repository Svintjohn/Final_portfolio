import React from 'react';
import { Mail, Terminal, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding reveal-on-scroll" style={{ paddingBottom: '12rem' }}>
      <div 
        style={{
          background: 'linear-gradient(135deg, var(--bg-panel) 0%, rgba(225, 6, 0, 0.05) 100%)',
          border: '1px solid rgba(225, 6, 0, 0.2)',
          borderRadius: '12px',
          padding: '4rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative background glow */}
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent-red)', filter: 'blur(120px)', opacity: 0.2 }}></div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Terminal size={24} color="var(--accent-blue)" />
          <h3 className="mono-tag" style={{ margin: 0, color: 'var(--accent-blue)' }}>// INITIATE_COLLABORATION</h3>
        </div>
        
        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Ready to engineer <br />the next solution?
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.6, fontSize: '1.1rem' }}>
          Whether it's building scalable backend architectures, analyzing complex datasets, or leading community tech initiatives, my inbox is always open for new opportunities.
        </p>

        <a 
          href="mailto:bercelesjohnbenedict25@gmail.com"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
            background: 'var(--accent-red)', color: '#fff',
            padding: '1rem 2rem', borderRadius: '4px',
            textDecoration: 'none', fontWeight: 600, fontFamily: 'var(--font-mono)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            boxShadow: '0 4px 20px rgba(225, 6, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(225, 6, 0, 0.5)';
            e.currentTarget.style.background = '#ff1a1a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(225, 6, 0, 0.3)';
            e.currentTarget.style.background = 'var(--accent-red)';
          }}
        >
          <Mail size={18} />
          PING_MY_SERVER
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}