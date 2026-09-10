import React from 'react';
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
import { SmartVideo, SmartImage } from '../../components/common/SmartMedia';
import { EngineeringDayBanner } from '../../components/common/EngineeringDayBanner';
import { collegeInfo } from '../../data/collegeInfo';
import { useAuth } from '../../context/AuthContext';

export function HomePage() {
  const { user } = useAuth();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
      <Navbar />

      {/* 1. HERO VIDEO SECTION */}
      <section style={{ height: '80vh', minHeight: '520px', position: 'relative', overflow: 'hidden' }}>
        <SmartVideo
          src={collegeInfo.heroVideo}
          poster="/assets/images/college-building-1.jpg"
          overlayContent={
            <div
              style={{
                height: '100%',
                maxWidth: 'var(--content-max-width)',
                margin: '0 auto',
                padding: '0 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                color: '#ffffff'
              }}
            >
              {/* College Logo / Shield Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.45rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  marginBottom: '1rem'
                }}
              >
                <GraduationCap size={18} color="#93c5fd" />
                <span style={{ fontSize: '0.825rem', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#ffffff' }}>
                  {collegeInfo.name}
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
                  fontWeight: '700',
                  color: '#ffffff',
                  lineHeight: 1.25,
                  maxWidth: '750px',
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em'
                }}
              >
                COLLEGE ACADEMIC PORTAL
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  color: '#dbeafe',
                  lineHeight: 1.6,
                  maxWidth: '700px',
                  marginBottom: '2.25rem',
                  fontWeight: '400'
                }}
              >
                Unified academic management system for engineering students and faculty. Access grades, attendance analytics, semester transcripts, and institutional records.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                {user ? (
                  <Link
                    to={user.role === 'faculty' ? '/faculty/dashboard' : '/student/dashboard'}
                    className="btn btn-primary btn-lg"
                    style={{ fontSize: '1.05rem', padding: '0.9rem 2rem' }}
                  >
                    <ShieldCheck size={20} />
                    <span>Enter {user.role === 'faculty' ? 'Faculty' : 'Student'} Dashboard</span>
                    <ArrowRight size={18} />
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="btn btn-primary btn-lg"
                      id="hero-login-btn"
                      style={{ fontSize: '1.05rem', padding: '0.9rem 2.25rem' }}
                    >
                      <LogIn size={20} />
                      <span>Access Portal Login</span>
                      <ArrowRight size={18} />
                    </Link>
                    <a
                      href="#college-info"
                      className="btn btn-outline btn-lg"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(6px)'
                      }}
                    >
                      <span>Explore Overview</span>
                    </a>
                  </>
                )}
              </div>
            </div>
          }
        />
      </section>

      {/* 2. COLLEGE INFORMATION SECTION */}
      <section id="college-info" style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: '800',
                color: 'var(--primary-700)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                backgroundColor: 'var(--primary-50)',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                display: 'inline-block',
                marginBottom: '0.75rem'
              }}
            >
              Institutional Profile
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              {collegeInfo.name}
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
              {collegeInfo.description}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Card 1 */}
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--primary-700)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'var(--primary-50)', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Building size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.6rem' }}>
                Autonomous Excellence
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                {collegeInfo.accreditation}. Offering outcome-based engineering education with curriculum designed with global tech industry leaders.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--primary-600)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'var(--primary-50)', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <BookOpen size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.6rem' }}>
                Academic Department
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                {collegeInfo.department}. Fostering specialized research in Artificial Intelligence, Distributed Systems, Software Architecture, and Computing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--primary-800)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'var(--primary-50)', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.6rem' }}>
                Location &amp; Infrastructure
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                {collegeInfo.location}. Advanced computing laboratories, digital knowledge libraries, and innovation incubators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAMPUS PHOTO GALLERY */}
      <section id="campus-gallery" style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.775rem', fontWeight: '800', color: 'var(--primary-700)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Campus Gallery
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginTop: '0.25rem' }}>
                Academic &amp; Research Infrastructure
              </h2>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '420px', margin: 0 }}>
              Discover our world-class educational spaces, state-of-the-art computing laboratories, and student facilities.
            </p>
          </div>

          {/* Clean Card Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {collegeInfo.gallery.map(item => (
              <div
                key={item.id}
                className="card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <SmartImage
                    src={item.path}
                    alt={item.title}
                    title={item.title}
                    tag={item.tag}
                    style={{ transition: 'transform 0.4s ease' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      backdropFilter: 'blur(4px)',
                      color: '#ffffff',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.725rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {item.tag}
                  </div>
                </div>

                <div style={{ padding: '1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0, flex: 1 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEPTEMBER 15 ENGINEERING DAY BANNER */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: '0 2rem' }}>
          <EngineeringDayBanner />
        </div>
      </section>

      {/* 5. LOGIN CTA */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--primary-50)', borderTop: '1px solid var(--primary-100)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: 'var(--primary-700)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <LogIn size={26} />
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            Access College Portal
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
            Login to access student academic records, marks sheets, semester transcripts, and faculty management controls.
          </p>
          <Link to="/login" className="btn btn-primary btn-lg" id="bottom-login-cta-btn">
            <LogIn size={18} />
            <span>Go to Portal Login</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 6. FOOTER */}
      <Footer />
    </div>
  );
}
