import React from 'react';
import { collegeInfo } from '../../data/collegeInfo';
import { calculateAttendance, calculateOverallAttendance } from '../../utils/calculations';

export function AttendancePdfTemplate({ student, attendance = [] }) {
  if (!student) return null;

  const stats = calculateOverallAttendance(attendance);
  const isEligible = stats.overallPercentage >= 75.0;

  return (
    <div id="printable-attendance-sheet" className="official-document">
      {/* Official College Letterhead */}
      <div className="document-header">
        <img
          src={collegeInfo.logo}
          alt={collegeInfo.name}
          style={{
            height: '64px',
            width: '64px',
            aspectRatio: '1 / 1',
            objectFit: 'contain',
            flexShrink: 0
          }}
        />
        <div className="document-title-block" style={{ borderLeft: '2px solid #1e40af', paddingLeft: '1rem' }}>
          <h1 className="doc-inst-name" style={{ color: '#000000', margin: 0, fontSize: '1.25rem' }}>
            SRI SIVANI COLLEGE OF ENGINEERING (AUTONOMOUS)
          </h1>
          <p className="doc-inst-sub">{collegeInfo.accreditation}</p>
          <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>
            {collegeInfo.location} • Affiliated to JNTUK (CC-W6)
          </p>
        </div>
      </div>

      {/* Document Classification */}
      <div className="doc-type-banner">
        OFFICIAL CUMULATIVE ATTENDANCE TRANSCRIPT &amp; ELIGIBILITY REPORT
      </div>

      {/* Student Credentials Grid */}
      <div className="doc-info-grid">
        <div className="doc-info-row">
          <span className="label">Student Name:</span>
          <span className="val">{student.name}</span>
        </div>
        <div className="doc-info-row">
          <span className="label">Roll Number:</span>
          <span className="val">{student.rollNumber}</span>
        </div>
        <div className="doc-info-row">
          <span className="label">Branch / Program:</span>
          <span className="val">{student.branch}</span>
        </div>
        <div className="doc-info-row">
          <span className="label">Current Semester:</span>
          <span className="val">{student.semester} ({student.year})</span>
        </div>
        <div className="doc-info-row">
          <span className="label">Student Mobile:</span>
          <span className="val">{student.studentPhone || student.phone || '+91-9848022338'}</span>
        </div>
        <div className="doc-info-row">
          <span className="label">Parent Mobile:</span>
          <span className="val">{student.parentPhone || '+91-9440155622'}</span>
        </div>
        <div className="doc-info-row">
          <span className="label">Section:</span>
          <span className="val">Section {student.section}</span>
        </div>
        <div className="doc-info-row">
          <span className="label">Date of Report:</span>
          <span className="val">{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
        </div>
      </div>

      {/* FRS Notice */}
      <div style={{ margin: '0.75rem 0', padding: '0.45rem 0.85rem', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px', fontSize: '0.75rem', color: '#1e40af', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span><strong>Biometric Verification:</strong> Attendance calculations are authenticated and synchronized daily via the <strong>Facial Recognition System (FRS)</strong>.</span>
        <span style={{ fontWeight: '700' }}>FRS-W6-{student.rollNumber}</span>
      </div>

      {/* Subject-Wise Attendance Table */}
      <div className="doc-table-wrap">
        <table className="doc-table">
          <thead>
            <tr>
              <th style={{ width: '14%', textAlign: 'center' }}>Course Code</th>
              <th style={{ width: '36%', textAlign: 'left' }}>Subject Title</th>
              <th style={{ width: '10%', textAlign: 'center' }}>Total<br /><span style={{ fontSize: '0.675rem', fontWeight: 'normal', opacity: 0.9 }}>Classes</span></th>
              <th style={{ width: '10%', textAlign: 'center' }}>Present</th>
              <th style={{ width: '10%', textAlign: 'center' }}>Absent</th>
              <th style={{ width: '10%', textAlign: 'center' }}>Attendance<br /><span style={{ fontSize: '0.675rem', fontWeight: 'normal', opacity: 0.9 }}>%</span></th>
              <th style={{ width: '10%', textAlign: 'center' }}>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((item, idx) => {
              const pct = item.percentage !== undefined ? item.percentage : calculateAttendance(item.present, item.totalClasses);
              const subEligible = pct >= 75.0;
              return (
                <tr key={item.code || idx}>
                  <td style={{ fontWeight: '700', fontFamily: 'monospace' }}>{item.code}</td>
                  <td style={{ fontWeight: '600' }}>{item.subject}</td>
                  <td style={{ textAlign: 'center' }}>{item.totalClasses}</td>
                  <td style={{ textAlign: 'center', fontWeight: '700', color: '#065f46' }}>{item.present}</td>
                  <td style={{ textAlign: 'center', fontWeight: '700', color: item.absent > 8 ? '#b91c1c' : '#475569' }}>{item.absent}</td>
                  <td style={{ textAlign: 'center', fontWeight: '800', color: subEligible ? '#1e40af' : '#b91c1c' }}>
                    {pct}%
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: '700', color: subEligible ? '#065f46' : '#b91c1c' }}>
                    {subEligible ? 'Eligible' : 'Shortage'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Box */}
      <div className="doc-summary-box">
        <div className="doc-summary-item">
          <div className="title">Total Sessions</div>
          <div className="value">{stats.totalClasses}</div>
        </div>
        <div className="doc-summary-item">
          <div className="title">Sessions Attended</div>
          <div className="value" style={{ color: '#065f46' }}>{stats.totalPresent}</div>
        </div>
        <div className="doc-summary-item">
          <div className="title">Sessions Missed</div>
          <div className="value" style={{ color: stats.totalAbsent > 15 ? '#b91c1c' : '#475569' }}>{stats.totalAbsent}</div>
        </div>
        <div className="doc-summary-item">
          <div className="title">Overall Percentage</div>
          <div className="value" style={{ color: isEligible ? '#1d4ed8' : '#b91c1c' }}>{stats.overallPercentage}%</div>
        </div>
      </div>

      <div style={{ padding: '0.6rem 1rem', background: isEligible ? '#ecfdf5' : '#fffbeb', border: `1px solid ${isEligible ? '#a7f3d0' : '#fde68a'}`, borderRadius: '6px', textAlign: 'center', fontWeight: '800', fontSize: '0.95rem', color: isEligible ? '#065f46' : '#92400e', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        STATUTORY EXAM ELIGIBILITY: {isEligible ? 'MINIMUM 75% ATTENDANCE CRITERION SATISFIED (ELIGIBLE)' : 'SHORTAGE OF ATTENDANCE — SPECIAL CONDONATION / NOTICE REQUIRED'}
      </div>

      {/* Signatures */}
      <div className="doc-signatures">
        <div className="doc-signature-block">
          <div className="doc-signature-line"></div>
          <div className="doc-signature-title">Class Coordinator</div>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Academic Committee</div>
        </div>
        <div className="doc-signature-block">
          <div className="doc-signature-line"></div>
          <div className="doc-signature-title">Head of Department</div>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Dept. of Computer Science</div>
        </div>
        <div className="doc-signature-block">
          <div className="doc-signature-line"></div>
          <div className="doc-signature-title">Dean (Academic Affairs)</div>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Autonomous Division</div>
        </div>
      </div>
    </div>
  );
}
