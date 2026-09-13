import React from 'react';
import { collegeInfo } from '../../data/collegeInfo';
import { calculateGrade, calculateTotal, calculatePercentage, calculateSGPA } from '../../utils/calculations';

export function ResultPdfTemplate({ student, semesterKey = 'semester1', marks = [] }) {
  if (!student) return null;

  const semLabel = semesterKey === 'semester1' ? '1st Year Semester 1 (1-1)' : '1st Year Semester 2 (1-2)';
  
  // Calculate computed subjects
  const computedSubjects = (marks || []).map(s => {
    const total = calculateTotal(s.internal, s.external);
    const gradeObj = calculateGrade(total);
    return {
      ...s,
      total,
      grade: gradeObj.grade,
      point: gradeObj.point,
      status: gradeObj.status
    };
  });

  const totalObtained = computedSubjects.reduce((acc, curr) => acc + (curr.total || 0), 0);
  const maxMarks = computedSubjects.length * 100;
  const percentage = calculatePercentage(totalObtained, maxMarks);
  const sgpa = calculateSGPA(computedSubjects);
  const isPassed = computedSubjects.every(s => s.status === 'Pass');
  const totalCredits = computedSubjects.reduce((acc, curr) => acc + (parseFloat(curr.credits) || 0), 0);

  return (
    <div id="printable-result-sheet" className="official-document">
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
        {student.photo && (
          <div style={{ marginLeft: 'auto', flexShrink: 0, textAlign: 'center' }}>
            <img
              src={student.photo}
              alt={student.name}
              style={{
                width: '68px',
                height: '82px',
                objectFit: 'cover',
                border: '1px solid #94a3b8',
                borderRadius: '3px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        )}
      </div>

      {/* Document Classification */}
      <div className="doc-type-banner">
        OFFICIAL GRADE STATEMENT &amp; SEMESTER TRANSCRIPT — {semesterKey === 'semester1' ? '1ST YEAR - 1ST SEMESTER' : '1ST YEAR - 2ND SEMESTER'}
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
          <span className="label">Academic Year:</span>
          <span className="val">{student.year} ({student.semester})</span>
        </div>
        <div className="doc-info-row">
          <span className="label">Student Mobile:</span>
          <span className="val">{student.studentPhone || student.phone || 'N/A'}</span>
        </div>
        <div className="doc-info-row">
          <span className="label">Parent Mobile:</span>
          <span className="val">{student.parentPhone || 'N/A'}</span>
        </div>
        <div className="doc-info-row">
          <span className="label">Section / Batch:</span>
          <span className="val">Section {student.section} (Autonomous)</span>
        </div>
        <div className="doc-info-row">
          <span className="label">Issue Date:</span>
          <span className="val">{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
        </div>
      </div>

      {/* Subject-Wise Performance Table */}
      <div className="doc-table-wrap">
        <table className="doc-table">
          <thead>
            <tr>
              <th style={{ width: '38%', textAlign: 'left' }}>Subject Name</th>
              <th style={{ width: '8%', textAlign: 'center' }}>Credits</th>
              <th style={{ width: '11%', textAlign: 'center' }}>Internal<br /><span style={{ fontSize: '0.675rem', fontWeight: 'normal', opacity: 0.9 }}>(/40)</span></th>
              <th style={{ width: '11%', textAlign: 'center' }}>External<br /><span style={{ fontSize: '0.675rem', fontWeight: 'normal', opacity: 0.9 }}>(/60)</span></th>
              <th style={{ width: '10%', textAlign: 'center' }}>Total<br /><span style={{ fontSize: '0.675rem', fontWeight: 'normal', opacity: 0.9 }}>(/100)</span></th>
              <th style={{ width: '7%', textAlign: 'center' }}>Grade</th>
              <th style={{ width: '7%', textAlign: 'center' }}>Point</th>
              <th style={{ width: '8%', textAlign: 'center' }}>Result</th>
            </tr>
          </thead>
          <tbody>
            {computedSubjects.map((sub, idx) => (
              <tr key={sub.code || idx}>
                <td style={{ fontWeight: '700', color: '#0f172a' }}>{sub.subject}</td>
                <td style={{ textAlign: 'center' }}>{sub.credits}</td>
                <td style={{ textAlign: 'center' }}>{sub.internal}</td>
                <td style={{ textAlign: 'center' }}>{sub.external}</td>
                <td style={{ textAlign: 'center', fontWeight: '700' }}>{sub.total}</td>
                <td style={{ textAlign: 'center', fontWeight: '800', color: sub.grade === 'F' ? '#b91c1c' : '#1e40af' }}>{sub.grade}</td>
                <td style={{ textAlign: 'center' }}>{sub.point}</td>
                <td style={{ textAlign: 'center', fontWeight: '700', color: sub.status === 'Pass' ? '#065f46' : '#b91c1c' }}>
                  {sub.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Box */}
      <div className="doc-summary-box">
        <div className="doc-summary-item">
          <div className="title">Total Credits</div>
          <div className="value">{totalCredits}</div>
        </div>
        <div className="doc-summary-item">
          <div className="title">Marks Obtained</div>
          <div className="value">{totalObtained} / {maxMarks}</div>
        </div>
        <div className="doc-summary-item">
          <div className="title">Percentage</div>
          <div className="value">{percentage}%</div>
        </div>
        <div className="doc-summary-item">
          <div className="title">Semester SGPA</div>
          <div className="value" style={{ color: '#1d4ed8' }}>{sgpa} / 10.00</div>
        </div>
      </div>

      <div style={{ padding: '0.6rem 1rem', background: isPassed ? '#ecfdf5' : '#fef2f2', border: `1px solid ${isPassed ? '#a7f3d0' : '#fecaca'}`, borderRadius: '6px', textAlign: 'center', fontWeight: '800', fontSize: '1rem', color: isPassed ? '#065f46' : '#991b1b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        FINAL SEMESTER RESULT: {isPassed ? 'PASSED — ELIGIBLE FOR NEXT SEMESTER' : 'FAILED / ATKT REQUIRED'}
      </div>

      {/* Institutional Signatures */}
      <div className="doc-signatures">
        <div className="doc-signature-block">
          <div className="doc-signature-line"></div>
          <div className="doc-signature-title">Prepared &amp; Verified By</div>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Academic Registrar</div>
        </div>
        <div className="doc-signature-block">
          <div className="doc-signature-line"></div>
          <div className="doc-signature-title">Head of Department</div>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Dept. of Computer Science</div>
        </div>
        <div className="doc-signature-block">
          <div className="doc-signature-line"></div>
          <div className="doc-signature-title">Controller of Examinations</div>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Autonomous Board of Exams</div>
        </div>
      </div>
    </div>
  );
}
