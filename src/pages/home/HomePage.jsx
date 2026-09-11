import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LogIn,
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  Building,
  CheckCircle2,
  Calendar
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
      <Navbar />

      {/* 1. HERO VIDEO SECTION (RAW VIDEO QUALITY & COLORS, NO COLOR FILTERS) */}
      <section className="hero-video-section">
        {/* Exact Video Quality & Natural Colors - Zero Color Filters */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="./assets/images/college-building-1.jpg"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            filter: 'none',
            imageRendering: 'high-quality',
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            willChange: 'transform'
          }}
        >
          <source src={heroVideoFile} type="video/mp4" />
          <source src="./assets/video/college-intro.mp4" type="video/mp4" />
          <source src="/assets/video/college-intro.mp4" type="video/mp4" />
        </video>

        {/* Hero Content (Clean readable typography with contrast, perfectly responsive on mobile & desktop) */}
        <div className="hero-content-container">
          {/* College Logo / Shield Pill */}
          <div className="hero-college-badge">
            <GraduationCap size={18} color="#93c5fd" />
            <span className="hero-college-badge-text">
              {collegeInfo.name}
            </span>
          </div>

          {/* Fluid responsive heading */}
          <h1 className="hero-main-heading">
            COLLEGE ACADEMIC PORTAL
          </h1>

          {/* Fluid responsive description */}
          <p className="hero-description-text">
            Unified academic management solution for engineering students and faculty. Access grades, attendance analysis, semester transcripts, and instructional materials.
          </p>

          {/* Responsive CTAs */}
          <div className="hero-cta-group">
            {user ? (
              <Link
                to={user.role === 'faculty' ? '/faculty/dashboard' : '/student/dashboard'}
                className="btn btn-primary btn-lg hero-btn-primary"
              >
                <ShieldCheck size={20} />
                <span>Enter {user.role === 'faculty' ? 'Faculty' : 'Student'} Dashboard</span>
                <ArrowRight size={18} />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-primary btn-lg hero-btn-primary"
                  id="hero-login-btn"
                >
                  <LogIn size={20} />
                  <span>Access Portal Login</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="#college-info"
                  onClick={(e) => handleScrollTo(e, 'college-info')}
                  className="btn btn-outline btn-lg hero-btn-secondary"
                >
                  <span>Explore Overview</span>
                </a>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 2. COLLEGE INFORMATION / INSTITUTIONAL PROFILE SECTION */}
      <section id="college-info" className="section-institutional-profile">
        <div className="site-container">
          <div className="section-header-block">
            <span className="section-badge">
              Institutional Profile
            </span>
            <h2 className="section-main-heading">
              {collegeInfo.name}
            </h2>
            <p className="section-description-text">
              {collegeInfo.description}
            </p>
          </div>

          <div className="feature-cards-grid">
            {/* Card 1 */}
            <div className="card feature-card feature-card-primary">
              <div className="feature-card-icon-box">
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
            <div className="card feature-card feature-card-secondary">
              <div className="feature-card-icon-box">
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
            <div className="card feature-card feature-card-tertiary">
              <div className="feature-card-icon-box">
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
          <div className="gallery-header-block">
            <div>
              <span className="section-badge">
                Campus Gallery
              </span>
              <h2 className="section-main-heading">
                Academic &amp; Research Infrastructure
              </h2>
            </div>
            <p className="gallery-header-desc">
              Discover our world-class educational spaces, state-of-the-art computing laboratories, and student facilities.
            </p>
          </div>

          {/* Clean Responsive Card Grid */}
          <div className="gallery-cards-grid">
            {collegeInfo.gallery.map(item => (
              <div
                key={item.id}
                className="card gallery-card"
              >
                <div className="gallery-img-container">
                  <SmartImage
                    src={item.path}
                    alt={item.title}
                    title={item.title}
                    tag={item.tag}
                  />
                  <div className="gallery-tag-pill">
                    {item.tag}
                  </div>
                </div>

                <div className="gallery-content">
                  <h4 className="gallery-card-title">
                    {item.title}
                  </h4>
                  <p className="gallery-card-desc">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOGIN CTA */}
      <section className="section-login-cta">
        <div className="site-container">
          <div className="login-cta-container">
            <h2 className="section-main-heading" style={{ marginBottom: '0.75rem' }}>
              Access College Portal
            </h2>
            <p className="section-description-text" style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Login to access student academic records, marks sheets, semester transcripts, and faculty management controls.
            </p>
            <Link to="/login" className="btn btn-primary btn-lg hero-btn-primary" id="bottom-login-cta-btn">
              <LogIn size={18} />
              <span>Go to Portal Login</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <Footer />
    </div>
  );
}

