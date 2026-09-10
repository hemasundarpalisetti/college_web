import React from 'react';
import { Calendar, Cpu, Award, Sparkles, Compass } from 'lucide-react';

export function EngineeringDayBanner({ className = '' }) {
  return (
    <div
      id="engineering-day"
      className={`engineering-day-card ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
        borderRadius: 'var(--radius-xl)',
        padding: '2.5rem 3rem',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-blue)',
        border: '1px solid rgba(255, 255, 255, 0.15)'
      }}
    >
      {/* Decorative background geometry */}
      <svg
        style={{
          position: 'absolute',
          right: '-20px',
          bottom: '-30px',
          width: '320px',
          height: '320px',
          opacity: 0.1,
          pointerEvents: 'none'
        }}
        viewBox="0 0 100 100"
      >
        <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="none" stroke="#ffffff" strokeWidth="2" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '2rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Date Emblem */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.75rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)',
            color: '#1e3a8a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '130px'
          }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2563eb' }}>
            SEPTEMBER
          </span>
          <span style={{ fontSize: '3rem', fontWeight: '900', lineHeight: 1, margin: '0.2rem 0', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            15
          </span>
          <span style={{ fontSize: '0.725rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            ANNUAL OBSERVANCE
          </span>
        </div>

        {/* Banner Details */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.75rem'
            }}
          >
            <Cpu size={15} />
            <span>National Engineering Day</span>
          </div>

          <h3
            style={{
              fontSize: '1.85rem',
              fontWeight: '800',
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em'
            }}
          >
            Commemorating Engineering Excellence &amp; Innovation
          </h3>

          <p
            style={{
              fontSize: '0.95rem',
              color: '#dbeafe',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: 0
            }}
          >
            Dedicated to the birth anniversary of Bharat Ratna Sir M. Visvesvaraya. Celebrating our student engineers, researchers, and faculty who engineer the technological foundations of tomorrow.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginTop: '1.25rem',
              fontSize: '0.825rem',
              fontWeight: '600',
              color: '#bfdbfe'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award size={16} color="#93c5fd" />
              <span>Project Expo &amp; Prototype Showcase</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Compass size={16} color="#93c5fd" />
              <span>Academic Merit &amp; Innovation Awards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
