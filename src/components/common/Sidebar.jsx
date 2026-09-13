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
  MessageSquarePlus
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { collegeInfo } from '../../data/collegeInfo';
import { reloadToHomePage } from '../../utils/navigation';

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
    { to: '/student/results', label: 'Results & Transcripts', icon: FileSpreadsheet },
    { to: '/student/grievance', label: 'Complaints & Suggestions', icon: MessageSquarePlus },
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
        <a
          href="#/"
          onClick={reloadToHomePage}
          className="sidebar-brand"
          style={{ textDecoration: 'none', cursor: 'pointer' }}
          title="Click to reload and return to Home page"
        >
          <img
            src={collegeInfo.logo}
            alt={collegeInfo.name}
            style={{
              width: '36px',
              height: '36px',
              aspectRatio: '1 / 1',
              objectFit: 'contain',
              flexShrink: 0
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: '800',
                fontSize: '0.875rem',
                color: '#000000',
                letterSpacing: '0.01em'
              }}
            >
              SRI SIVANI
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: '700', color: '#000000', letterSpacing: '0.04em' }}>
              (AUTONOMOUS)
            </span>
          </div>
        </a>

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
