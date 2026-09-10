import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckSquare,
  Percent,
  Award,
  BookOpen,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Calendar,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { getStudentMarks, getStudentAttendance } from '../../data/storage';
import { calculateStudentSummary } from '../../utils/calculations';
import { StatCard } from '../../components/common/StatCard';
import { PerformanceChart } from '../../components/common/PerformanceChart';
import { CircularProgress, ProgressBar } from '../../components/common/ProgressIndicators';

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
        <div className="avatar-large">
          {user?.avatar || 'ST'}
        </div>
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

      {/* Main Grid: Chart & Attendance Quick Summary */}
      <div className="grid-2-1" style={{ marginBottom: '2rem' }}>
        {/* Performance Chart */}
        <PerformanceChart
          subjects={sem2Subjects}
          title="Semester 2 Subject Scores (Live)"
        />

        {/* Attendance Widget Card */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="card-header">
              <h3 className="card-title">Attendance Status</h3>
              <span className={`badge ${overallAttPct >= 75 ? 'badge-success' : 'badge-danger'}`}>
                {overallAttPct >= 75 ? 'Eligible' : 'Shortage'}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.25rem 0' }}>
              <CircularProgress
                percentage={overallAttPct}
                size={140}
                strokeWidth={12}
                label="Aggregate"
              />
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem' }}>
                {overallAttPct >= 75
                  ? 'Your attendance meets the minimum 75% institutional requirement.'
                  : 'Warning: Your attendance is below 75%. Please contact faculty coordinator.'}
              </p>
            </div>
          </div>

          <Link to="/student/attendance" className="btn btn-secondary btn-sm" style={{ width: '100%', marginTop: '1rem' }}>
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
          <div style={{ display: 'flex', gap: '0.5rem' }}>
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
                <th>Subject Code</th>
                <th>Course Name</th>
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
                <tr key={sub.code || idx}>
                  <td style={{ fontWeight: '700', color: 'var(--primary-800)' }}>{sub.code}</td>
                  <td style={{ fontWeight: '600' }}>{sub.subject}</td>
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
