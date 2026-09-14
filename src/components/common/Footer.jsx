import React from 'react';
import { MapPin, Mail, Phone, Globe, Shield, PhoneCall, Building2, UserCheck, GraduationCap, Navigation } from 'lucide-react';
import { collegeInfo } from '../../data/collegeInfo';
import { reloadToHomePage } from '../../utils/navigation';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main-grid">
          {/* Col 1: Brand & Accreditation */}
          <div className="footer-col-brand">
            <div className="footer-brand-header">
              <a
                href="#/"
                onClick={reloadToHomePage}
                className="footer-brand-logo-wrap"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
                title="Click to reload and return to Home page"
              >
                <img
                  src={collegeInfo.logo}
                  alt={collegeInfo.name}
                  className="footer-logo-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${import.meta.env.BASE_URL}assets/logo/college-logo.png`;
                  }}
                />
                <div className="footer-brand-text">
                  <span className="footer-college-name">SRI SIVANI COLLEGE OF ENGINEERING</span>
                  <span className="footer-college-tag">(AUTONOMOUS)</span>
                </div>
              </a>
              <div className="footer-accreditation-badge">
                {collegeInfo.accreditation}
              </div>
            </div>
            <p className="footer-bio-text">
              {collegeInfo.description}
            </p>
          </div>

          {/* Col 2: Academic Department & Campus Location */}
          <div className="footer-col-section">
            <h5 className="footer-col-title">
              Campus &amp; Department
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
              <div className="footer-info-item">
                <Globe size={18} color="var(--primary-700)" className="footer-info-icon" />
                <a
                  href={`https://${collegeInfo.contact.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-contact-link"
                >
                  {collegeInfo.contact.website}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Contact Phone Numbers */}
          <div className="footer-col-section">
            <h5 className="footer-col-title">
              Phone Numbers
            </h5>
            <div className="footer-links-list">
              {/* Primary Mobile */}
              <div className="footer-info-item">
                <Phone size={16} color="var(--primary-700)" className="footer-info-icon" />
                <div>
                  <div className="footer-info-label">Primary / Mobile:</div>
                  <div className="footer-phone-group">
                    <a href="tel:+917382651411" className="footer-contact-link">+91-7382651411</a>,{' '}
                    <a href="tel:+917382651466" className="footer-contact-link">+91-7382651466</a>
                  </div>
                </div>
              </div>

              {/* Alternative Lines */}
              <div className="footer-info-item">
                <PhoneCall size={16} color="var(--primary-700)" className="footer-info-icon" />
                <div>
                  <div className="footer-info-label">Alternative Lines:</div>
                  <div className="footer-phone-group">
                    <a href="tel:+917382651422" className="footer-contact-link">+91-7382651422</a>,{' '}
                    <a href="tel:+917382651455" className="footer-contact-link">55</a>,{' '}
                    <a href="tel:+917382651477" className="footer-contact-link">77</a>
                  </div>
                </div>
              </div>

              {/* Landline */}
              <div className="footer-info-item">
                <Building2 size={16} color="var(--primary-700)" className="footer-info-icon" />
                <div>
                  <div className="footer-info-label">Landline:</div>
                  <div className="footer-phone-group">
                    <a href="tel:08942231107" className="footer-contact-link">08942-231107</a>,{' '}
                    <a href="tel:08942231108" className="footer-contact-link">231108</a>,{' '}
                    <a href="tel:08942231106" className="footer-contact-link">231106</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Email Addresses */}
          <div className="footer-col-section">
            <h5 className="footer-col-title">
              Email Addresses
            </h5>
            <div className="footer-links-list">
              {/* General Info */}
              <div className="footer-info-item">
                <Mail size={16} color="var(--primary-700)" className="footer-info-icon" />
                <div>
                  <div className="footer-info-label">General Info:</div>
                  <a href={`mailto:${collegeInfo.contact.emails.general}`} className="footer-contact-link">
                    {collegeInfo.contact.emails.general}
                  </a>
                </div>
              </div>

              {/* Principal */}
              <div className="footer-info-item">
                <UserCheck size={16} color="var(--primary-700)" className="footer-info-icon" />
                <div>
                  <div className="footer-info-label">Principal:</div>
                  <a href={`mailto:${collegeInfo.contact.emails.principal}`} className="footer-contact-link">
                    {collegeInfo.contact.emails.principal}
                  </a>
                </div>
              </div>

              {/* Vice Principal */}
              <div className="footer-info-item">
                <GraduationCap size={16} color="var(--primary-700)" className="footer-info-icon" />
                <div>
                  <div className="footer-info-label">Vice Principal:</div>
                  <a href={`mailto:${collegeInfo.contact.emails.vicePrincipal}`} className="footer-contact-link">
                    {collegeInfo.contact.emails.vicePrincipal}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed Section */}
        <div className="footer-map-section">
          <div className="footer-map-header">
            <div className="footer-map-title-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={20} color="var(--primary-700)" />
                <h5 className="footer-map-title">Campus Location &amp; Directions</h5>
              </div>
              <p className="footer-map-subtitle">
                {collegeInfo.location}
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Sri+Sivani+College+of+Engineering,+NH-16,+Chilakapalem,+Srikakulam,+Andhra+Pradesh+532410"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm footer-map-btn"
              title="Open directions in Google Maps"
            >
              <Navigation size={15} />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="footer-map-wrapper">
            <iframe
              title="Sri Sivani College of Engineering Google Map"
              src="https://maps.google.com/maps?q=Sri+Sivani+College+of+Engineering,+NH-16,+Chilakapalem,+Srikakulam,+Andhra+Pradesh+532410&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="280"
              style={{ border: 0, display: 'block', borderRadius: 'var(--radius-lg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} {collegeInfo.name}. All rights reserved. Autonomous Engineering Academic Portal.
          </div>
          <div className="footer-bottom-meta">
            <span>Official Portal Directory</span>
            <span>Accredited by AICTE &amp; Affiliated to JNTUK (CC-W6)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
