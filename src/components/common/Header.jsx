import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, LogOut, User, Bell, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { collegeInfo } from '../../data/collegeInfo';
import { reloadToHomePage } from '../../utils/navigation';
import { StudentAvatar } from './StudentAvatar';

export function Header({ toggleSidebar }) {
  const { user, logout } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showToast('Logged out successfully.', 'info');
    navigate('/login');
  };

  const isFaculty = user?.role === 'faculty';

  return (
    <header className="top-header">
      <div className="header-left">
        <button
          type="button"
          onClick={toggleSidebar}
          className="header-sidebar-toggle-btn"
          id="mobile-sidebar-toggle"
          aria-label="Toggle navigation menu"
        >
          <Menu size={20} />
        </button>

        <a
          href="#/"
          onClick={reloadToHomePage}
          className="header-brand-link"
          title="Click to reload and return to Home page"
        >
          <img
            src={collegeInfo.logo}
            alt={collegeInfo.name}
            className="header-brand-logo"
          />
          <div className="header-brand-text">
            <span className="header-brand-title">
              <span className="header-brand-title-full">SRI SIVANI COLLEGE OF ENGINEERING</span>
              <span className="header-brand-title-short" style={{ display: 'none' }}>SSCE</span>
            </span>
            <span className="header-brand-sub">
              (AUTONOMOUS)
            </span>
          </div>
          <span className="badge badge-primary header-panel-badge">
            {isFaculty ? 'Faculty' : 'Student'}
          </span>
        </a>
      </div>

      <div className="header-right">
        {/* User Pill */}
        <div className="header-user-pill">
          {!isFaculty ? (
            <StudentAvatar student={user} size={30} shape="circle" />
          ) : (
            <div className="header-faculty-avatar">
              {user?.avatar || 'FC'}
            </div>
          )}
          <div className="header-user-text">
            <span className="header-user-name">
              {user?.name}
            </span>
            <span className="header-user-id">
              {isFaculty ? (user?.facultyId || 'Faculty') : (user?.rollNumber || 'Student')}
            </span>
          </div>
        </div>

        {/* Logout Action */}
        <button
          type="button"
          onClick={handleLogout}
          className="btn btn-outline btn-sm header-logout-btn"
          id="header-logout-btn"
          title="Sign Out"
        >
          <LogOut size={16} />
          <span className="header-logout-text">Logout</span>
        </button>
      </div>
    </header>
  );
}
