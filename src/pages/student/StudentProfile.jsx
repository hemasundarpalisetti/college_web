import React from 'react';
import { User, Mail, Phone, BookOpen, Calendar, Shield, Lock, Info, Building } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { collegeInfo } from '../../data/collegeInfo';

export function StudentProfile() {
  const { user } = useAuth();

  return (
    <div>
      <div className="page-header">
        <div className="page-title-group">
          <h1 className="page-title">Student Profile</h1>
          <p className="page-subtitle">Official Student Academic Identity &amp; Enrollment Records</p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header">
          <h3 className="card-title">
            <User size={20} color="var(--primary-700)" />
            <span>Academic Identity Details</span>
          </h3>
          <span className="badge badge-primary">Active Regular Student</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '2rem',
            paddingBottom: '2rem',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--border-light)'
          }}
        >
          {/* Avatar / Photo placeholder */}
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--primary-100)',
              color: 'var(--primary-800)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.25rem',
              fontWeight: '800',
              border: '3px solid var(--primary-300)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {user?.avatar || 'ST'}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
              {user?.name}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <span className="badge badge-primary" style={{ fontSize: '0.825rem' }}>
                Roll No: {user?.rollNumber}
              </span>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Username: <strong>{user?.username}</strong>
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
              {collegeInfo.name} • {collegeInfo.department}
            </p>
          </div>
        </div>

        {/* Academic & Personal Grid */}
        <div className="profile-info-grid">
          <div className="info-item">
            <span className="info-label">Degree / Program</span>
            <span className="info-value">{user?.branch || 'Artificial Intelligence & Machine Learning (AIML)'}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Current Academic Year</span>
            <span className="info-value">{user?.year || '2nd Year'}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Current Semester</span>
            <span className="info-value">{user?.semester || 'Semester 3'}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Assigned Section</span>
            <span className="info-value">Section {user?.section || 'A'}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Official Email Address</span>
            <span className="info-value">{user?.email || `${user?.username}@srisivani.edu.in`}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Student Mobile Number</span>
            <span className="info-value" style={{ fontWeight: '700', color: 'var(--primary-800)' }}>
              📱 {user?.studentPhone || user?.phone || '+91-9848022338'}
            </span>
          </div>

          <div className="info-item">
            <span className="info-label">Parent / Guardian Name</span>
            <span className="info-value">{user?.parentName || 'Parent / Guardian'}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Parent Mobile Number</span>
            <span className="info-value" style={{ fontWeight: '700', color: '#065f46' }}>
              👨‍👩‍👦 {user?.parentPhone || '+91-9440155622'}
            </span>
          </div>

          <div className="info-item">
            <span className="info-label">Biometric FRS Status</span>
            <span className="info-value" style={{ color: '#1e40af', fontWeight: '700' }}>
              ✓ Enrolled &amp; Active (FRS-W6-{user?.rollNumber})
            </span>
          </div>

          <div className="info-item">
            <span className="info-label">Admission / Enrollment Date</span>
            <span className="info-value">{user?.admissionDate || '2023-08-15'}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Enrollment Status</span>
            <span className="info-value" style={{ color: '#065f46' }}>Regular Full-Time (Autonomous)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
