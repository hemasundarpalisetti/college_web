import React, { useMemo } from 'react';
import { CheckSquare, AlertTriangle, CheckCircle2, FileText, Info } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { getStudentAttendance } from '../../data/storage';
import { calculateAttendance, calculateOverallAttendance } from '../../utils/calculations';
import { CircularProgress, ProgressBar } from '../../components/common/ProgressIndicators';

export function StudentAttendance() {
  const { user } = useAuth();
  const attendanceList = useMemo(() => getStudentAttendance(user?.id), [user?.id]);
  const stats = useMemo(() => calculateOverallAttendance(attendanceList), [attendanceList]);

  const isEligible = stats.overallPercentage >= 75.0;

  return (
    <div>
      <div className="page-header">
        <div className="page-title-group">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', marginBottom: '0.35rem' }}>
            <CheckCircle2 size={13} />
            <span>Biometric FRS Verified Portal</span>
          </div>
          <h1 className="page-title">Attendance Status</h1>
          <p className="page-subtitle">Official biometric attendance tracking and statutory exam eligibility</p>
        </div>
      </div>

      {/* FRS Notice Banner */}
      <div style={{ background: 'linear-gradient(90deg, #eff6ff 0%, #f0fdf4 100%)', border: '1px solid #bfdbfe', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#dbeafe', color: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <CheckSquare size={20} />
          </div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '0.925rem', color: '#1e3a8a' }}>
              Facial Recognition System (FRS) Authenticated
            </div>
            <div style={{ fontSize: '0.825rem', color: '#334155' }}>
              All attendance calculations and eligibility stats are authenticated and synced via the <strong>Facial Recognition System (FRS)</strong>.
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.825rem', color: '#1e293b' }}>
          <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '0.3rem 0.65rem', borderRadius: '4px' }}>
            📱 <strong>Student Mobile:</strong> {user?.studentPhone || user?.phone || '+91-9848022338'}
          </span>
          <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '0.3rem 0.65rem', borderRadius: '4px' }}>
            👨‍👩‍👦 <strong>Parent Mobile:</strong> {user?.parentPhone || '+91-9440155622'}
          </span>
        </div>
      </div>

      {/* Hero Attendance Overview */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="attendance-hero-row">
          {/* Circular Indicator */}
          <div className="attendance-circle-wrap">
            <CircularProgress
              percentage={stats.overallPercentage}
              size={150}
              strokeWidth={14}
              label="Overall"
            />
            <div>
              <span className="stat-label">Aggregate Attendance</span>
              <div style={{ fontSize: '2.25rem', fontWeight: '900', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                {stats.overallPercentage}%
              </div>
              <div style={{ marginTop: '0.4rem' }}>
                <span className={`badge ${isEligible ? 'badge-success' : 'badge-danger'}`} style={{ fontSize: '0.85rem' }}>
                  {isEligible ? '✓ Statutory Exam Eligible (≥ 75%)' : '⚠ Attendance Shortage (< 75%)'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="attendance-metrics-grid">
            <div>
              <span className="stat-label">Total Conducted</span>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                {stats.totalClasses}
              </div>
            </div>
            <div>
              <span className="stat-label">Attended (Present)</span>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#065f46' }}>
                {stats.totalPresent}
              </div>
            </div>
            <div>
              <span className="stat-label">Missed (Absent)</span>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: stats.totalAbsent > 15 ? '#b91c1c' : 'var(--text-secondary)' }}>
                {stats.totalAbsent}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subject-Wise Attendance Breakdown */}
      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Subject-Wise Attendance Breakdown</h3>
            <span className="card-subtitle">Calculations authenticated via FRS: (Present / Total Classes) × 100</span>
          </div>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Subject Name</th>
                <th style={{ textAlign: 'center' }}>Total Classes</th>
                <th style={{ textAlign: 'center' }}>Present</th>
                <th style={{ textAlign: 'center' }}>Absent</th>
                <th style={{ minWidth: '180px' }}>Attendance Progress</th>
                <th style={{ textAlign: 'center' }}>Attendance %</th>
                <th style={{ textAlign: 'center' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceList.map((item, idx) => {
                const pct = item.percentage !== undefined ? item.percentage : calculateAttendance(item.present, item.totalClasses);
                const subEligible = pct >= 75.0;

                return (
                  <tr key={item.subject || idx}>
                    <td style={{ fontWeight: '600', color: 'var(--primary-800)' }}>{item.subject}</td>
                    <td style={{ textAlign: 'center', fontWeight: '600' }}>{item.totalClasses}</td>
                    <td style={{ textAlign: 'center', fontWeight: '700', color: '#065f46' }}>{item.present}</td>
                    <td style={{ textAlign: 'center', fontWeight: '700', color: item.absent > 8 ? '#b91c1c' : 'var(--text-secondary)' }}>
                      {item.absent}
                    </td>
                    <td>
                      <ProgressBar value={pct} max={100} height={7} />
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: '800', color: subEligible ? 'var(--primary-800)' : '#b91c1c' }}>
                      {pct}%
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`badge ${subEligible ? 'badge-success' : 'badge-danger'}`}>
                        {subEligible ? 'Eligible' : 'Shortage'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="table-summary-row">
                <td>Aggregate Academic Summary</td>
                <td style={{ textAlign: 'center' }}>{stats.totalClasses}</td>
                <td style={{ textAlign: 'center' }}>{stats.totalPresent}</td>
                <td style={{ textAlign: 'center' }}>{stats.totalAbsent}</td>
                <td>
                  <ProgressBar value={stats.overallPercentage} max={100} height={8} />
                </td>
                <td style={{ textAlign: 'center', fontSize: '1rem' }}>{stats.overallPercentage}%</td>
                <td style={{ textAlign: 'center' }}>
                  <span className={`badge ${isEligible ? 'badge-success' : 'badge-danger'}`}>
                    {isEligible ? 'Eligible' : 'Shortage'}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
