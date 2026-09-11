import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogIn, ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';
import { collegeInfo } from '../../data/collegeInfo';
import { useAuth } from '../../context/AuthContext';

export function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getDashboardPath = () => {
    if (!user) return '/login';
    return user.role === 'faculty' ? '/faculty/dashboard' : '/student/dashboard';
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  };

  return (
    <nav className="site-navbar" role="navigation" aria-label="Main Navigation">
      <div className="site-navbar-container">
        {/* BRANDING GROUP (Logo + College Name + Portal Name) */}
        <div className="navbar-brand-group">
          {/* 1. LEFT: Official College Logo & Name in Black */}
          <div className="navbar-left">
            <Link to="/" className="navbar-logo-link" aria-label="Sri Sivani College of Engineering (Autonomous)">
              <img
                src={collegeInfo.logo}
                alt="Sri Sivani College of Engineering"
                className="navbar-logo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `${import.meta.env.BASE_URL}assets/logo/college-logo.png`;
                }}
              />
              <div className="navbar-brand-text">
                <span className="navbar-college-name">
                  SRI SIVANI COLLEGE OF ENGINEERING
                </span>
                <span className="navbar-college-tag">
                  (AUTONOMOUS)
                </span>
              </div>
            </Link>
          </div>

          {/* 2. CENTER: Balanced College Portal & Affiliation Branding */}
          <div className="navbar-center">
            <Link to="/" className="navbar-portal-brand" aria-label="College Academic Portal">
              <span className="navbar-portal-title">
                COLLEGE PORTAL
              </span>
              <span className="navbar-portal-subtitle">
                AFFILIATED TO JNTUK (CC-W6)
              </span>
            </Link>
          </div>
        </div>

        {/* 3. RIGHT: Desktop Navigation Links & Login */}
        <div className="navbar-right">
          <a
            href="#college-info"
            onClick={(e) => handleNavClick(e, 'college-info')}
            className="navbar-nav-link"
          >
            About College
          </a>
          <a
            href="#campus-gallery"
            onClick={(e) => handleNavClick(e, 'campus-gallery')}
            className="navbar-nav-link"
          >
            Campus
          </a>

          {user ? (
            <Link to={getDashboardPath()} className="btn btn-primary btn-sm navbar-login-btn">
              <ShieldCheck size={16} />
              <span>Open {user.role === 'faculty' ? 'Faculty' : 'Student'} Portal</span>
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm navbar-login-btn" id="nav-login-btn">
              <LogIn size={15} />
              <span>Portal Login</span>
            </Link>
          )}
        </div>

        {/* 4. MOBILE CONTROLS (Quick login icon + Hamburger toggle) */}
        <div className="navbar-mobile-controls">
          <Link
            to={user ? getDashboardPath() : '/login'}
            className="navbar-mobile-quick-btn"
            aria-label="Portal Login"
            title="Portal Login"
          >
            {user ? <ShieldCheck size={18} /> : <LogIn size={18} />}
          </Link>

          <button
            type="button"
            className="navbar-hamburger-btn"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE EXPANDABLE MENU DRAWER */}
      <div className={`navbar-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="navbar-mobile-drawer-content">
          <a
            href="#college-info"
            onClick={(e) => handleNavClick(e, 'college-info')}
            className="navbar-mobile-link"
          >
            About College
          </a>
          <a
            href="#campus-gallery"
            onClick={(e) => handleNavClick(e, 'campus-gallery')}
            className="navbar-mobile-link"
          >
            Campus Gallery
          </a>

          <div className="navbar-mobile-cta-wrap">
            {user ? (
              <Link
                to={getDashboardPath()}
                className="btn btn-primary btn-md navbar-mobile-cta"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShieldCheck size={18} />
                <span>Enter {user.role === 'faculty' ? 'Faculty' : 'Student'} Portal</span>
                <ArrowRight size={16} />
              </Link>
            ) : (
              <Link
                to="/login"
                className="btn btn-primary btn-md navbar-mobile-cta"
                onClick={() => setMobileMenuOpen(false)}
                id="mobile-drawer-login-btn"
              >
                <LogIn size={18} />
                <span>Access Portal Login</span>
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

