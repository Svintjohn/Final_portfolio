import React from 'react';
import { Mail, Terminal, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding reveal-on-scroll" style={{ paddingBottom: '12rem' }}>
      <div className="glass-card" style={{ background: 'linear-gradient(135deg, var(--bg-panel) 0%, rgba(37, 99, 235, 0.05) 100%)', padding: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Terminal size={24} color="var(--accent-primary)" />
          <h3 className="mono-tag" style={{ margin: 0, color: 'var(--accent-primary)' }}>// INITIATE_COLLABORATION</h3>
        </div>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--text-main)' }}>Ready to engineer <br />the next solution?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.6, fontSize: '1.1rem' }}>Whether it's building scalable backend architectures, analyzing complex datasets, or leading community tech initiatives, my inbox is always open for new opportunities.</p>
        <a href="mailto:bercelesjohnbenedict25@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', background: 'var(--accent-primary)', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontFamily: 'var(--font-mono)', transition: 'all 0.3s ease', boxShadow: '0 10px 20px rgba(37, 99, 235, 0.3)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(37, 99, 235, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(37, 99, 235, 0.3)'; }}>
          <Mail size={18} /> PING_MY_SERVER <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}