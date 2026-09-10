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
          <h1 className="page-title">Attendance Status</h1>
          <p className="page-subtitle">Real-time subject attendance tracking and statutory exam eligibility</p>
        </div>
      </div>

      {/* Hero Attendance Overview */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem'
          }}
        >
          {/* Circular Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              backgroundColor: 'var(--bg-secondary)',
              padding: '1.25rem 1.75rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}
          >
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
            <span className="card-subtitle">Formula: (Present / Total Classes) × 100</span>
          </div>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Subject Code</th>
                <th>Course Name</th>
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
                  <tr key={item.code || idx}>
                    <td style={{ fontWeight: '700', color: 'var(--primary-800)' }}>{item.code}</td>
                    <td style={{ fontWeight: '600' }}>{item.subject}</td>
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
                <td colSpan={2}>Aggregate Academic Summary</td>
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
