import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, LogOut, User, Bell, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { collegeInfo } from '../../data/collegeInfo';

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
          className="btn btn-outline btn-icon-only"
          style={{ display: 'none' }}
          id="mobile-sidebar-toggle"
          aria-label="Toggle navigation menu"
        >
          <Menu size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={collegeInfo.logo}
            alt={collegeInfo.name}
            style={{
              width: '44px',
              height: '44px',
              aspectRatio: '1 / 1',
              objectFit: 'contain',
              flexShrink: 0
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: '800',
                fontSize: '1.05rem',
                color: '#000000',
                letterSpacing: '0.01em'
              }}
            >
              SRI SIVANI COLLEGE OF ENGINEERING
            </span>
            <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--primary-700)', letterSpacing: '0.04em' }}>
              (AUTONOMOUS) • AFFILIATED TO JNTUK (CC-W6)
            </span>
          </div>
          <span className="badge badge-primary" style={{ display: 'inline-flex', marginLeft: '0.35rem' }}>
            {isFaculty ? 'Faculty Panel' : 'Student Panel'}
          </span>
        </div>
      </div>

      <div className="header-right">
        {/* User Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.35rem 0.85rem',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-full)'
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-700)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: '700'
            }}
          >
            {user?.avatar || (isFaculty ? 'FC' : 'ST')}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)' }}>
              {user?.name}
            </span>
            <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
              {isFaculty ? (user?.facultyId || 'Faculty') : (user?.rollNumber || 'Student')}
            </span>
          </div>
        </div>

        {/* Logout Action */}
        <button
          type="button"
          onClick={handleLogout}
          className="btn btn-outline btn-sm"
          id="header-logout-btn"
          title="Sign Out"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}
