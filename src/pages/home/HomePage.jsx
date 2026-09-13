import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LogIn,
  GraduationCap,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Building,
  CheckCircle2,
  Calendar,
  Sparkles,
  Maximize2,
  X,
  Phone,
  Mail
} from 'lucide-react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { SmartImage } from '../../components/common/SmartMedia';
import { collegeInfo } from '../../data/collegeInfo';
import { useAuth } from '../../context/AuthContext';
import heroVideoFile from '../../assets/video/college-intro.mp4';

export function HomePage() {
  const { user } = useAuth();
  const videoRef = useRef(null);
  const [activeGalleryItem, setActiveGalleryItem] = useState(null);

  // Close preview modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveGalleryItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Guarantee muted autoplay across all browsers without user interaction
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if needed
        });
      }
    }
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="home-page-wrapper">
      <Navbar />

      {/* 1. HERO VIDEO SECTION (RAW VIDEO QUALITY & COLORS WITH LEGIBILITY BACKDROP) */}
      <section className="hero-video-section" aria-label="College Academic Portal Hero">
        {/* Background Video (Muted, Loop, High-Quality) */}
        <div className="hero-media-wrapper">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="./assets/images/college-building-1.jpg"
            className="hero-video-bg"
          >
            <source src={heroVideoFile} type="video/mp4" />
            <source src="./assets/video/college-intro.mp4" type="video/mp4" />
            <source src="/assets/video/college-intro.mp4" type="video/mp4" />
          </video>
          {/* High-Contrast Legibility Overlay */}
          <div className="hero-overlay-scrim" />
        </div>

        {/* Hero Content Container (Fluid Typography & Flexible Stack) */}
        <div className="site-container hero-content-container">
          {/* College Badge */}
          <div className="hero-college-badge">
            <GraduationCap size={16} className="hero-badge-icon" />
            <span className="hero-college-badge-text">
              {collegeInfo.name}
            </span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="hero-main-heading">
            COLLEGE ACADEMIC PORTAL
          </h1>

          {/* Responsive Hero Description */}
          <p className="hero-description-text">
            Unified academic management solution for engineering students and faculty. Access grades, attendance analysis, semester transcripts, and instructional materials.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            {user ? (
              <Link
                to={user.role === 'faculty' ? '/faculty/dashboard' : '/student/dashboard'}
                className="btn btn-primary hero-btn-primary"
              >
                <ShieldCheck size={18} />
                <span>Enter {user.role === 'faculty' ? 'Faculty' : 'Student'} Dashboard</span>
                <ArrowRight size={18} />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-primary hero-btn-primary"
                  id="hero-login-btn"
                >
                  <LogIn size={18} />
                  <span>Access Portal Login</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="#college-info"
                  onClick={(e) => handleScrollTo(e, 'college-info')}
                  className="btn btn-outline hero-btn-secondary"
                >
                  <span>Explore Overview</span>
                </a>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL PROFILE SECTION */}
      <section id="college-info" className="section-institutional-profile">
        <div className="site-container">
          <div className="section-header-block">
            <span className="section-badge-pill">
              Institutional Profile
            </span>
            <h2 className="section-main-heading">
              {collegeInfo.name}
            </h2>
            <p className="section-lead-text">
              {collegeInfo.description}
            </p>
          </div>

          <div className="profile-feature-grid">
            {/* Card 1 */}
            <div className="feature-card feature-card-blue">
              <div className="feature-card-icon-wrap">
                <Building size={24} />
              </div>
              <h3 className="feature-card-title">
                Autonomous Excellence
              </h3>
              <p className="feature-card-desc">
                {collegeInfo.accreditation}. Offering outcome-based engineering education with curriculum designed with global tech industry leaders.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card feature-card-indigo">
              <div className="feature-card-icon-wrap">
                <BookOpen size={24} />
              </div>
              <h3 className="feature-card-title">
                Academic Department
              </h3>
              <p className="feature-card-desc">
                {collegeInfo.department}. Fostering specialized research in Artificial Intelligence, Distributed Systems, Software Architecture, and Computing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card feature-card-navy">
              <div className="feature-card-icon-wrap">
                <Award size={24} />
              </div>
              <h3 className="feature-card-title">
                Location &amp; Infrastructure
              </h3>
              <p className="feature-card-desc">
                {collegeInfo.location}. Advanced computing laboratories, digital knowledge libraries, and innovation incubators.
              </p>
            </div>
          </div>

          {/* Quick Contact & Communications Banner */}
          <div className="profile-contact-banner">
            <div className="contact-banner-header">
              <div className="contact-banner-title-wrap">
                <span className="section-badge-pill" style={{ backgroundColor: 'var(--primary-100)', color: 'var(--primary-800)' }}>
                  Institutional Directory
                </span>
                <h3 className="contact-banner-heading">Official Communications &amp; Helpdesk</h3>
              </div>
              <p className="contact-banner-subtext">
                Direct telephonic and email channels for general inquiries, administrative assistance, and student support.
              </p>
            </div>

            <div className="contact-banner-grid">
              {/* Phone Contacts */}
              <div className="contact-box">
                <div className="contact-box-icon-wrap">
                  <Phone size={22} />
                </div>
                <div className="contact-box-content">
                  <h4 className="contact-box-title">Phone &amp; Helpline Numbers</h4>
                  <div className="contact-box-item">
                    <span className="contact-box-label">Primary Mobile:</span>
                    <div className="contact-box-links">
                      <a href="tel:+917382651411" className="contact-link">+91-7382651411</a>
                      <span className="contact-sep">,</span>
                      <a href="tel:+917382651466" className="contact-link">+91-7382651466</a>
                    </div>
                  </div>
                  <div className="contact-box-item">
                    <span className="contact-box-label">Alternative Lines:</span>
                    <div className="contact-box-links">
                      <a href="tel:+917382651422" className="contact-link">+91-7382651422</a>
                      <span className="contact-sep">,</span>
                      <a href="tel:+917382651455" className="contact-link">55</a>
                      <span className="contact-sep">,</span>
                      <a href="tel:+917382651477" className="contact-link">77</a>
                    </div>
                  </div>
                  <div className="contact-box-item">
                    <span className="contact-box-label">Campus Landline:</span>
                    <div className="contact-box-links">
                      <a href="tel:08942231107" className="contact-link">08942-231107</a>
                      <span className="contact-sep">,</span>
                      <a href="tel:08942231108" className="contact-link">231108</a>
                      <span className="contact-sep">,</span>
                      <a href="tel:08942231106" className="contact-link">231106</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Contacts */}
              <div className="contact-box">
                <div className="contact-box-icon-wrap contact-box-icon-green">
                  <Mail size={22} />
                </div>
                <div className="contact-box-content">
                  <h4 className="contact-box-title">Official Email Addresses</h4>
                  <div className="contact-box-item">
                    <span className="contact-box-label">General Info &amp; Enquiries:</span>
                    <a href={`mailto:${collegeInfo.contact.emails.general}`} className="contact-link">
                      {collegeInfo.contact.emails.general}
                    </a>
                  </div>
                  <div className="contact-box-item">
                    <span className="contact-box-label">Principal Office:</span>
                    <a href={`mailto:${collegeInfo.contact.emails.principal}`} className="contact-link">
                      {collegeInfo.contact.emails.principal}
                    </a>
                  </div>
                  <div className="contact-box-item">
                    <span className="contact-box-label">Vice Principal:</span>
                    <a href={`mailto:${collegeInfo.contact.emails.vicePrincipal}`} className="contact-link">
                      {collegeInfo.contact.emails.vicePrincipal}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAMPUS PHOTO GALLERY */}
      <section id="campus-gallery" className="section-campus-gallery">
        <div className="site-container">
          <div className="gallery-header-row">
            <div>
              <span className="section-badge-pill">
                Campus Gallery
              </span>
              <h2 className="section-main-heading gallery-heading">
                Academic &amp; Research Infrastructure
              </h2>
            </div>
            <p className="gallery-subtitle-text">
              Discover our world-class educational spaces, state-of-the-art computing laboratories, and student facilities.
            </p>
          </div>

          {/* Clean Responsive Card Grid */}
          <div className="gallery-card-grid">
            {collegeInfo.gallery.map(item => (
              <div
                key={item.id}
                className="gallery-item-card"
                onClick={() => setActiveGalleryItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveGalleryItem(item); }}
                aria-label={`View ${item.title}`}
              >
                <div className="gallery-media-wrap">
                  <SmartImage
                    src={item.path}
                    alt={item.title}
                    title={item.title}
                    tag={item.tag}
                    className="gallery-image"
                  />
                  <div className="gallery-tag-pill">
                    {item.tag}
                  </div>
                  <div className="gallery-media-hover-overlay">
                    <div className="gallery-media-hover-icon" title="View Full Photo">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>

                <div className="gallery-body-content">
                  <h4 className="gallery-item-title">
                    {item.title}
                  </h4>
                  <p className="gallery-item-desc">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Preview Modal */}
          {activeGalleryItem && (
            <div
              className="gallery-modal-backdrop"
              onClick={() => setActiveGalleryItem(null)}
              role="dialog"
              aria-modal="true"
            >
              <div className="gallery-modal-card" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="gallery-modal-close-btn"
                  onClick={() => setActiveGalleryItem(null)}
                  aria-label="Close image preview"
                >
                  <X size={20} />
                </button>
                <div className="gallery-modal-img-wrap">
                  <SmartImage
                    src={activeGalleryItem.path}
                    alt={activeGalleryItem.title}
                    title={activeGalleryItem.title}
                    tag={activeGalleryItem.tag}
                    className="gallery-modal-img"
                  />
                </div>
                <div className="gallery-modal-info">
                  <span className="gallery-modal-badge">{activeGalleryItem.tag}</span>
                  <h3 className="gallery-modal-title">{activeGalleryItem.title}</h3>
                  <p className="gallery-modal-desc">{activeGalleryItem.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. ACCESS PORTAL CTA */}
      <section className="section-portal-cta">
        <div className="site-container portal-cta-container">
          <h2 className="portal-cta-heading">
            Access College Portal
          </h2>
          <p className="portal-cta-desc">
            Login to access student academic records, marks sheets, semester transcripts, and faculty management controls.
          </p>
          <Link to="/login" className="btn btn-primary btn-lg portal-cta-btn" id="bottom-login-cta-btn">
            <LogIn size={18} />
            <span>Go to Portal Login</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 5. FOOTER */}
      <Footer />
    </div>
  );
}


