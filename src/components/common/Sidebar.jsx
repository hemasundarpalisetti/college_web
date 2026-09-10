import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  CheckSquare,
  Award,
  FileSpreadsheet,
  Users,
  FileText,
  LogOut,
  GraduationCap,
  Sparkles,
  Calendar
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { collegeInfo } from '../../data/collegeInfo';

export function Sidebar({ isOpen, onClose }) {
  const { user, logout } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showToast('Logged out successfully.', 'info');
    navigate('/login');
  };

  const isFaculty = user?.role === 'faculty';

  const studentLinks = [
    { to: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/student/profile', label: 'My Profile', icon: User },
    { to: '/student/attendance', label: 'Attendance', icon: CheckSquare },
    { to: '/student/marks', label: 'Marks', icon: Award },
    { to: '/student/results', label: 'Semester Results', icon: FileSpreadsheet },
  ];

  const facultyLinks = [
    { to: '/faculty/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/faculty/students', label: 'Students', icon: Users },
    { to: '/faculty/attendance', label: 'Attendance', icon: CheckSquare },
    { to: '/faculty/marks', label: 'Marks', icon: Award },
    { to: '/faculty/reports', label: 'Reports & Transcripts', icon: FileText },
    { to: '/faculty/profile', label: 'Faculty Profile', icon: User },
  ];

  const links = isFaculty ? facultyLinks : studentLinks;

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Brand Banner */}
        <div className="sidebar-brand">
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--primary-800), var(--primary-600))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: 'var(--shadow-blue-sm)'
            }}
          >
            <GraduationCap size={22} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: '800',
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15
              }}
            >
              COLLEGE PORTAL
            </span>
            <span style={{ fontSize: '0.7rem', fontWeight: '600', color: 'var(--primary-700)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {isFaculty ? 'Faculty Management' : 'Student Access'}
            </span>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="sidebar-nav">
          <div style={{ padding: '0 0.5rem 0.5rem', fontSize: '0.725rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Main Menu
          </div>

          {links.map(link => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </NavLink>
            );
          })}

          <div style={{ margin: '1.25rem 0 0.5rem', padding: '0 0.5rem 0.25rem', fontSize: '0.725rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Institutional Highlights
          </div>

          <a
            href="/#engineering-day"
            className="sidebar-link"
            style={{ color: 'var(--primary-800)', backgroundColor: 'var(--primary-50)' }}
          >
            <Calendar size={18} color="var(--primary-700)" />
            <span>Sept 15 Engg Day</span>
          </a>
        </nav>

        {/* User Card & Logout in Footer */}
        <div className="sidebar-footer">
          <button
            type="button"
            onClick={handleLogout}
            className="sidebar-link"
            style={{ width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--status-danger-text)' }}
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
