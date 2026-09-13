import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  GraduationCap,
  Shield,
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  LogIn,
  CheckCircle2,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { collegeInfo } from '../../data/collegeInfo';
import { Modal } from '../../components/common/Modal';

export function LoginPage() {
  const [activeTab, setActiveTab] = useState('student'); // 'student' | 'faculty'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  // If already logged in, redirect to respective dashboard
  useEffect(() => {
    if (user) {
      if (user.role === 'faculty') {
        navigate('/faculty/dashboard');
      } else {
        navigate('/student/dashboard');
      }
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = login(username, password, activeTab);
    setIsSubmitting(false);

    if (res.success) {
      showToast(`Welcome back, ${res.user.name}!`, 'success');
      if (activeTab === 'faculty') {
        navigate('/faculty/dashboard');
      } else {
        navigate('/student/dashboard');
      }
    } else {
      showToast(res.error || 'Invalid credentials.', 'error');
    }
  };

  const handleQuickDemoFill = (u, p, role) => {
    setActiveTab(role);
    setUsername(u);
    setPassword(p);
    showToast(`Loaded ${role} credentials for: ${u}`, 'info', 2000);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-secondary)',
        padding: '1.5rem'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-subtle)',
          overflow: 'hidden'
        }}
      >
        {/* Header Branding */}
        <div
          style={{
            padding: '2rem 2.25rem 1.5rem',
            textAlign: 'center',
            borderBottom: '1px solid var(--border-light)',
            background: 'linear-gradient(180deg, var(--primary-50) 0%, #ffffff 100%)'
          }}
        >
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.825rem',
              fontWeight: '600',
              color: 'var(--primary-700)',
              marginBottom: '1rem'
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
            <img
              src={collegeInfo.logo}
              alt={collegeInfo.name}
              style={{
                height: '54px',
                width: '54px',
                aspectRatio: '1 / 1',
                objectFit: 'contain',
                flexShrink: 0
              }}
            />
            <div style={{ textAlign: 'left', lineHeight: '1.2' }}>
              <div style={{ fontSize: '0.925rem', fontWeight: '800', color: '#000000', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                SRI SIVANI COLLEGE OF ENGINEERING
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#000000', letterSpacing: '0.04em' }}>
                (AUTONOMOUS)
              </div>
            </div>
          </div>

          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: '800',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              margin: 0
            }}
          >
            Academic Management Portal
          </h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Affiliated to JNTUK (CC-W6) • Srikakulam
          </p>
        </div>

        <div style={{ padding: '2rem 2.25rem' }}>
          {/* TWO LARGE TABS/BUTTONS: [ STUDENT ] [ FACULTY ] */}
          <div className="segmented-tabs" style={{ marginBottom: '1.75rem' }}>
            <button
              type="button"
              className={`segmented-tab ${activeTab === 'student' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('student');
                setUsername('');
                setPassword('');
              }}
              id="student-login-tab"
            >
              <User size={18} />
              <span>Student</span>
            </button>
            <button
              type="button"
              className={`segmented-tab ${activeTab === 'faculty' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('faculty');
                setUsername('');
                setPassword('');
              }}
              id="faculty-login-tab"
            >
              <Shield size={18} />
              <span>Faculty</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="portal-username">
                {activeTab === 'student' ? 'Student Username / Roll No' : 'Faculty Username / ID'}
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  id="portal-username"
                  className="form-input"
                  placeholder={activeTab === 'student' ? 'e.g. 25W61A6142 or student01' : 'e.g. pradeep or himabindu'}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label className="form-label" htmlFor="portal-password">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setForgotModalOpen(true)}
                  style={{
                    fontSize: '0.775rem',
                    fontWeight: '600',
                    color: 'var(--primary-700)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  Forgot password?
                </button>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="portal-password"
                  className="form-input"
                  placeholder="Enter your password (e.g. student123 or faculty123)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  style={{ paddingRight: '2.75rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '0.25rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ width: '16px', height: '16px', accentColor: 'var(--primary-700)', cursor: 'pointer' }}
              />
              <label htmlFor="remember-me" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                Remember my session on this browser
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              id="login-submit-btn"
              disabled={isSubmitting}
              style={{ width: '100%', fontSize: '0.975rem' }}
            >
              <LogIn size={18} />
              <span>{isSubmitting ? 'Verifying...' : `Login as ${activeTab === 'student' ? 'Student' : 'Faculty'}`}</span>
            </button>
          </form>

          {/* Quick Demo Credentials Panel */}
          <div
            style={{
              marginTop: '1.75rem',
              padding: '1.15rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary-700)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                <Sparkles size={14} />
                <span>Quick-Fill Demo Logins:</span>
              </div>
              <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>All 4 B.Tech Years</span>
            </div>

            {/* Faculty Logins */}
            <div style={{ marginBottom: '0.85rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                🛡️ Faculty Accounts:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => handleQuickDemoFill('pradeep', 'faculty123', 'faculty')}
                  id="quick-demo-pradeep"
                  title="Dr. Pradeep - HOD of AIML (pwd: faculty123)"
                  style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
                >
                  <strong>Dr. Pradeep</strong> (HOD)
                </button>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => handleQuickDemoFill('himabindu', 'faculty123', 'faculty')}
                  id="quick-demo-himabindu"
                  title="Prof. Himabindu - Class Teacher (pwd: faculty123)"
                  style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
                >
                  <strong>Prof. Himabindu</strong> (Faculty)
                </button>
              </div>
            </div>

            {/* Student Logins across 4 Years */}
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                👤 Student Accounts (Password: <code>student123</code>):
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))', gap: '0.4rem' }}>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleQuickDemoFill('26W61A6101', 'student123', 'student')}
                  id="quick-demo-student-101"
                  style={{ fontSize: '0.725rem', justifyContent: 'flex-start', textAlign: 'left', padding: '0.35rem 0.55rem' }}
                >
                  <span>[1st Yr] <strong>Ananya</strong> (6101)</span>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleQuickDemoFill('25W61A6142', 'student123', 'student')}
                  id="quick-demo-student-6142"
                  style={{ fontSize: '0.725rem', justifyContent: 'flex-start', textAlign: 'left', padding: '0.35rem 0.55rem' }}
                >
                  <span>[2nd Yr] <strong>Hemasundar</strong> (6142)</span>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleQuickDemoFill('25W61A6122', 'student123', 'student')}
                  id="quick-demo-student-6122"
                  style={{ fontSize: '0.725rem', justifyContent: 'flex-start', textAlign: 'left', padding: '0.35rem 0.55rem' }}
                >
                  <span>[2nd Yr] <strong>Ganesh</strong> (6122)</span>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleQuickDemoFill('23W61A6101', 'student123', 'student')}
                  id="quick-demo-student-301"
                  style={{ fontSize: '0.725rem', justifyContent: 'flex-start', textAlign: 'left', padding: '0.35rem 0.55rem' }}
                >
                  <span>[3rd Yr] <strong>Sai Kumar</strong> (6101)</span>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleQuickDemoFill('22W61A6105', 'student123', 'student')}
                  id="quick-demo-student-401"
                  style={{ fontSize: '0.725rem', justifyContent: 'flex-start', textAlign: 'left', padding: '0.35rem 0.55rem' }}
                >
                  <span>[4th Yr] <strong>Manoj</strong> (6105)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <Modal
        isOpen={forgotModalOpen}
        onClose={() => setForgotModalOpen(false)}
        title="Password Recovery Assistance"
        footer={
          <button type="button" className="btn btn-primary btn-sm" onClick={() => setForgotModalOpen(false)}>
            Close
          </button>
        }
      >
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '1rem' }}>
            <strong>For Students:</strong> In accordance with institutional security guidelines, student account credentials cannot be changed self-service. Please contact your assigned <strong>Department Faculty Coordinator</strong> or Class Advisor to have your password securely reset.
          </p>
          <p style={{ margin: 0 }}>
            <strong>For Faculty:</strong> Predefined faculty credentials are managed directly by the Academic Systems Administrator.
          </p>
        </div>
      </Modal>
    </div>
  );
}
