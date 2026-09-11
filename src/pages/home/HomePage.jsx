import React, { useRef, useEffect } from 'react';
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
  Sparkles
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
              <div key={item.id} className="gallery-item-card">
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


