import React from 'react';
import { Shield, Mail, Phone, BookOpen, Award, Building, Lock, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { collegeInfo } from '../../data/collegeInfo';

export function FacultyProfile() {
  const { user } = useAuth();

  return (
    <div>
      <div className="page-header">
        <div className="page-title-group">
          <h1 className="page-title">Faculty Academic Profile</h1>
          <p className="page-subtitle">Faculty Credentials, Academic Appointments, and Assigned Departmental Roles</p>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header">
          <h3 className="card-title">
            <Shield size={20} color="var(--primary-700)" />
            <span>Faculty Appointment Record</span>
          </h3>
          <span className="badge badge-success">Permanent Academic Faculty</span>
        </div>

        <div className="profile-identity-bar">
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--primary-800)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.25rem',
              fontWeight: '800',
              border: '3px solid var(--primary-200)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            {user?.avatar || 'FC'}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
              {user?.name}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <span className="badge badge-primary" style={{ fontSize: '0.825rem' }}>
                Faculty ID: {user?.facultyId}
              </span>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Username: <strong>{user?.username}</strong>
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
              {user?.designation} • {collegeInfo.name}
            </p>
          </div>
        </div>

        <div className="profile-info-grid" style={{ marginBottom: '2rem' }}>
          <div className="info-item">
            <span className="info-label">Faculty Identifier</span>
            <span className="info-value" style={{ fontFamily: 'monospace' }}>{user?.facultyId}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Academic Designation</span>
            <span className="info-value">{user?.designation}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Department</span>
            <span className="info-value">{user?.department}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Institutional Email</span>
            <span className="info-value">{user?.email}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Direct Contact Phone</span>
            <span className="info-value">{user?.phone}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Portal Access Level</span>
            <span className="info-value" style={{ color: 'var(--primary-800)' }}>Full Evaluator &amp; Coordinator</span>
          </div>
        </div>

        {/* Assigned Courses Section */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={16} color="var(--primary-700)" />
            <span>Assigned Teaching Courses &amp; Evaluation Responsibilities</span>
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {(user?.assignedCourses || ['Artificial Intelligence Principles & Techniques', 'Machine Learning Foundations']).map((course, idx) => (
              <span key={idx} className="badge badge-primary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
                ✓ {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
