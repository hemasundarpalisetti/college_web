import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Calendar, ShieldCheck } from 'lucide-react';
import { collegeInfo } from '../../data/collegeInfo';
import { useAuth } from '../../context/AuthContext';

export function Navbar() {
  const { user } = useAuth();

  const getDashboardPath = () => {
    if (!user) return '/login';
    return user.role === 'faculty' ? '/faculty/dashboard' : '/student/dashboard';
  };

  return (
    <nav className="site-navbar">
      <div className="site-navbar-container">
        {/* 1. LEFT: Official College Logo */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo-link" aria-label="Sri Sivani College of Engineering">
            <img
              src={collegeInfo.logo}
              alt={collegeInfo.name}
              className="navbar-logo-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${import.meta.env.BASE_URL}assets/logo/college-logo.png`;
              }}
            />
          </Link>
        </div>

        {/* 2. CENTER: Balanced College Portal & Affiliation Branding */}
        <div className="navbar-center">
          <Link to="/" className="navbar-portal-brand" aria-label="College Portal Home">
            <div className="navbar-portal-title">
              COLLEGE PORTAL
            </div>
            <div className="navbar-portal-subtitle">
              AFFILIATED TO JNTUK (CC-W6)
            </div>
          </Link>
        </div>

        {/* 3. RIGHT: Existing Navigation Links & Login */}
        <div className="navbar-right">
          <a href="/#college-info" className="navbar-nav-link">
            About College
          </a>
          <a href="/#campus-gallery" className="navbar-nav-link">
            Campus
          </a>
          <a href="/#engineering-day" className="navbar-nav-link navbar-engg-day">
            <Calendar size={15} />
            <span>Engineering Day</span>
          </a>

          {user ? (
            <Link to={getDashboardPath()} className="btn btn-primary btn-sm">
              <ShieldCheck size={16} />
              <span>Open {user.role === 'faculty' ? 'Faculty' : 'Student'} Portal</span>
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm" id="nav-login-btn">
              <LogIn size={16} />
              <span>Portal Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
