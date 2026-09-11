import React from 'react';
import { MapPin, Mail, Phone, Globe, Shield } from 'lucide-react';
import { collegeInfo } from '../../data/collegeInfo';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col-brand">
            <div className="footer-brand-header">
              <div className="footer-brand-logo-wrap">
                <img
                  src={collegeInfo.logo}
                  alt={collegeInfo.name}
                  className="footer-logo-img"
                />
                <div className="footer-brand-text">
                  <span className="footer-college-name">SRI SIVANI COLLEGE OF ENGINEERING</span>
                  <span className="footer-college-tag">(AUTONOMOUS)</span>
                </div>
              </div>
              <div className="footer-accreditation-badge">
                {collegeInfo.accreditation}
              </div>
            </div>
            <p className="footer-bio-text">
              {collegeInfo.description}
            </p>
          </div>

          {/* Col 2: Academic Department */}
          <div className="footer-col-section">
            <h5 className="footer-col-title">
              Academic Division
            </h5>
            <div className="footer-links-list">
              <div className="footer-info-item">
                <Shield size={18} color="var(--primary-700)" className="footer-info-icon" />
                <span>{collegeInfo.department}</span>
              </div>
              <div className="footer-info-item">
                <MapPin size={18} color="var(--primary-700)" className="footer-info-icon" />
                <span>{collegeInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Portal Support & Contact */}
          <div className="footer-col-section">
            <h5 className="footer-col-title">
              Academic Portal Support
            </h5>
            <div className="footer-links-list">
              <div className="footer-info-item">
                <Mail size={16} color="var(--primary-700)" className="footer-info-icon" />
                <a href={`mailto:${collegeInfo.contact.email}`} className="footer-contact-link">
                  {collegeInfo.contact.email}
                </a>
              </div>
              <div className="footer-info-item">
                <Phone size={16} color="var(--primary-700)" className="footer-info-icon" />
                <span>{collegeInfo.contact.phone}</span>
              </div>
              <div className="footer-info-item">
                <Globe size={16} color="var(--primary-700)" className="footer-info-icon" />
                <span>{collegeInfo.contact.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} {collegeInfo.name}. All rights reserved. Autonomous Engineering Academic Portal.
          </div>
          <div className="footer-bottom-meta">
            <span>Single-Device LocalStorage Persistent Prototype</span>
            <span>Project Expo Demonstration Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
