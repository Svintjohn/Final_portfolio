import React from 'react';
import { Mail, Terminal, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section-padding reveal-on-scroll" style={{ paddingBottom: '8rem' }}>
      <div 
        style={{
          background: 'linear-gradient(135deg, var(--bg-panel) 0%, rgba(225, 6, 0, 0.05) 100%)',
          border: '1px solid rgba(225, 6, 0, 0.2)',
          borderRadius: '12px',
          padding: '3rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative background glow */}
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--accent-red)', filter: 'blur(100px)', opacity: 0.2 }}></div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Terminal size={24} color="var(--accent-blue)" />
          <h3 className="mono-tag" style={{ margin: 0, color: 'var(--accent-blue)' }}>// INITIATE_COLLABORATION</h3>
        </div>
        
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
          Ready to engineer the next solution?
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.6 }}>
          Whether it's building scalable backend architectures, analyzing complex datasets, or leading community tech initiatives, my inbox is always open for new opportunities.
        </p>

        <a 
          href="mailto:bercelesjohnbenedict25@gmail.com"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
            background: 'var(--accent-red)', color: '#fff',
            padding: '1rem 2rem', borderRadius: '4px',
            textDecoration: 'none', fontWeight: 600, fontFamily: 'var(--font-mono)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: '0 4px 20px rgba(225, 6, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(225, 6, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(225, 6, 0, 0.3)';
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