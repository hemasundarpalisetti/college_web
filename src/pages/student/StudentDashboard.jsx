import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckSquare,
  Percent,
  Award,
  BookOpen,
  ArrowRight,
  FileSpreadsheet,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { getStudentMarks, getStudentAttendance } from '../../data/storage';
import { calculateStudentSummary } from '../../utils/calculations';
import { StatCard } from '../../components/common/StatCard';
import { CircularProgress } from '../../components/common/ProgressIndicators';
import { StudentAvatar } from '../../components/common/StudentAvatar';

export function StudentDashboard() {
  const { user } = useAuth();

  // Load live data from localStorage
  const marksData = useMemo(() => getStudentMarks(user?.id), [user?.id]);
  const attendanceData = useMemo(() => getStudentAttendance(user?.id), [user?.id]);

  const summary = useMemo(() => {
    return calculateStudentSummary(user?.id, { [user?.id]: marksData }, { [user?.id]: attendanceData });
  }, [user?.id, marksData, attendanceData]);

  const sem2Subjects = summary.sem2.subjects || [];
  const overallAttPct = summary.attendance.overallPercentage;
  const currentSGPA = summary.sem2.sgpa || summary.sem1.sgpa;
  const overallPct = summary.overallPercentage;

  return (
    <div>
      {/* Welcome Banner */}
      <div className="profile-hero" style={{ marginBottom: '2rem' }}>
        <StudentAvatar student={user} size={90} shape="rounded" />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(255, 255, 255, 0.16)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            <Sparkles size={13} />
            <span>Active Student Session</span>
          </div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 0.25rem 0' }}>
            Welcome back, {user?.name}
          </h1>
          <p style={{ fontSize: '0.925rem', color: '#dbeafe', margin: 0 }}>
            Roll No: <strong>{user?.rollNumber}</strong> • {user?.branch} • {user?.semester} (Sec {user?.section})
          </p>
          <div style={{ marginTop: '0.65rem', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem', color: '#ffffff' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(255,255,255,0.12)', padding: '0.25rem 0.65rem', borderRadius: '4px' }}>
              📱 <strong>Student Mobile:</strong> {user?.studentPhone || user?.phone || '+91-9848022338'}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(255,255,255,0.12)', padding: '0.25rem 0.65rem', borderRadius: '4px' }}>
              👨‍👩‍👦 <strong>Parent Mobile:</strong> {user?.parentPhone || '+91-9440155622'}
            </span>
          </div>
        </div>
      </div>

      {/* 4 Overview Stat Cards */}
      <div className="grid-4" style={{ marginBottom: '2rem' }}>
        <StatCard
          title="Overall Attendance"
          value={`${overallAttPct}%`}
          helper={`${summary.attendance.totalPresent} of ${summary.attendance.totalClasses} classes attended`}
          icon={CheckSquare}
          variant={overallAttPct >= 75 ? 'primary' : 'danger'}
        />
        <StatCard
          title="Overall Percentage"
          value={`${overallPct}%`}
          helper={`Combined Sem 1 & Sem 2 Marks`}
          icon={Percent}
          variant="primary"
        />
        <StatCard
          title="Current SGPA"
          value={currentSGPA.toFixed(2)}
          helper={`Semester 2 Performance`}
          icon={Award}
          variant="success"
        />
        <StatCard
          title="Current Semester"
          value={user?.semester || 'Semester 2'}
          helper={`${user?.year || '1st Year'} • Section ${user?.section || 'A'}`}
          icon={BookOpen}
          variant="primary"
        />
      </div>

      {/* Attendance Status Card */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header">
          <div>
            <h3 className="card-title">Attendance Status &amp; FRS Compliance</h3>
            <span className="card-subtitle">Biometric Facial Recognition System (FRS) authenticated record</span>
          </div>
          <span className={`badge ${overallAttPct >= 75 ? 'badge-success' : 'badge-danger'}`}>
            {overallAttPct >= 75 ? 'Statutory Eligible' : 'Attendance Shortage'}
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', padding: '1rem 0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <CircularProgress
              percentage={overallAttPct}
              size={130}
              strokeWidth={12}
              label="Aggregate"
            />
            <div>
              <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                {overallAttPct >= 75 ? 'Statutory Examination Eligible (≥ 75%)' : 'Attendance Shortage Warning (< 75%)'}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0', maxWidth: '520px', lineHeight: 1.5 }}>
                {overallAttPct >= 75
                  ? `Your aggregate attendance of ${overallAttPct}% meets institutional requirements across ${summary.attendance.totalClasses} conducted sessions (${summary.attendance.totalPresent} present, ${summary.attendance.totalAbsent} absent).`
                  : `Your aggregate attendance of ${overallAttPct}% is below the mandatory 75% institutional requirement (${summary.attendance.totalAbsent} absences recorded). Please contact your faculty coordinator.`}
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.65rem', background: '#eff6ff', borderRadius: 'var(--radius-sm)', border: '1px solid #bfdbfe', fontSize: '0.75rem', color: '#1e40af' }}>
                <Sparkles size={13} style={{ flexShrink: 0, color: '#2563eb' }} />
                <span>Authenticated via FRS (Facial Recognition System)</span>
              </div>
            </div>
          </div>

          <Link to="/student/attendance" className="btn btn-secondary btn-sm">
            <span>View Full Attendance Sheet</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Recent Marks Overview & Quick Links */}
      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Subject-Wise Academic Performance (Semester 2)</h3>
            <span className="card-subtitle">Real-time marks recorded by faculty</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link to="/student/marks" className="btn btn-outline btn-sm">
              <span>View Marks Table</span>
            </Link>
            <Link to="/student/results" className="btn btn-primary btn-sm">
              <FileSpreadsheet size={15} />
              <span>Official Result &amp; PDF</span>
            </Link>
          </div>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Subject Name</th>
                <th>Credits</th>
                <th>Internal (/40)</th>
                <th>External (/60)</th>
                <th>Total (/100)</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sem2Subjects.map((sub, idx) => (
                <tr key={sub.subject || idx}>
                  <td style={{ fontWeight: '600', color: 'var(--primary-800)' }}>{sub.subject}</td>
                  <td>{sub.credits}</td>
                  <td>{sub.internal}</td>
                  <td>{sub.external}</td>
                  <td style={{ fontWeight: '700' }}>{sub.total}</td>
                  <td>
                    <span className="badge badge-primary">{sub.grade}</span>
                  </td>
                  <td>
                    <span className={`badge ${sub.status === 'Pass' ? 'badge-success' : 'badge-danger'}`}>
                      {sub.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
