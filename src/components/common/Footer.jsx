import React from 'react';
import { GraduationCap, MapPin, Mail, Phone, Globe, Shield } from 'lucide-react';
import { collegeInfo } from '../../data/collegeInfo';

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '3.5rem',
        paddingBottom: '2rem',
        color: 'var(--text-secondary)'
      }}
    >
      <div style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <img
                src={collegeInfo.logo}
                alt={collegeInfo.name}
                style={{
                  maxHeight: '52px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  marginBottom: '0.5rem'
                }}
              />
              <div style={{ fontSize: '0.75rem', color: 'var(--primary-700)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {collegeInfo.accreditation}
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              {collegeInfo.description}
            </p>
          </div>

          {/* Col 2: Academic Department */}
          <div>
            <h5 style={{ fontSize: '0.925rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Academic Division
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Shield size={18} color="var(--primary-700)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{collegeInfo.department}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <MapPin size={18} color="var(--primary-700)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{collegeInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Portal Support & Contact */}
          <div>
            <h5 style={{ fontSize: '0.925rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Academic Portal Support
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="var(--primary-700)" />
                <a href={`mailto:${collegeInfo.contact.email}`} style={{ color: 'var(--text-secondary)' }}>
                  {collegeInfo.contact.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="var(--primary-700)" />
                <span>{collegeInfo.contact.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={16} color="var(--primary-700)" />
                <span>{collegeInfo.contact.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.825rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {collegeInfo.name}. All rights reserved. Autonomous Engineering Academic Portal.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Single-Device LocalStorage Persistent Prototype</span>
            <span>Project Expo Demonstration Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
