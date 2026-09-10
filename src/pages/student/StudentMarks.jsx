import React, { useState, useMemo } from 'react';
import { Award, BookOpen, CheckCircle2, TrendingUp, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { getStudentMarks } from '../../data/storage';
import { calculateGrade, calculateTotal, calculatePercentage, calculateSGPA } from '../../utils/calculations';

export function StudentMarks() {
  const { user } = useAuth();
  const [selectedSem, setSelectedSem] = useState('semester2'); // 'semester1' | 'semester2'

  const marksData = useMemo(() => getStudentMarks(user?.id), [user?.id]);
  const currentSubjectList = marksData?.[selectedSem] || [];

  const computedSubjects = useMemo(() => {
    return currentSubjectList.map(sub => {
      const total = calculateTotal(sub.internal, sub.external);
      const gradeObj = calculateGrade(total);
      return {
        ...sub,
        total,
        grade: gradeObj.grade,
        point: gradeObj.point,
        status: gradeObj.status
      };
    });
  }, [currentSubjectList]);

  const totalObtained = computedSubjects.reduce((acc, curr) => acc + (curr.total || 0), 0);
  const maxMarks = computedSubjects.length * 100;
  const percentage = calculatePercentage(totalObtained, maxMarks);
  const sgpa = calculateSGPA(computedSubjects);
  const totalCredits = computedSubjects.reduce((acc, curr) => acc + (parseFloat(curr.credits) || 0), 0);
  const isAllPassed = computedSubjects.every(s => s.status === 'Pass');

  return (
    <div>
      <div className="page-header">
        <div className="page-title-group">
          <h1 className="page-title">Subject Marks Statement</h1>
          <p className="page-subtitle">Continuous Internal Assessment (CIA) &amp; End Semester Examination (ESE) Scores</p>
        </div>
      </div>

      {/* Semester Selector Tabs */}
      <div className="segmented-tabs" style={{ maxWidth: '400px', marginBottom: '2rem' }}>
        <button
          type="button"
          className={`segmented-tab ${selectedSem === 'semester1' ? 'active' : ''}`}
          onClick={() => setSelectedSem('semester1')}
          id="student-marks-sem1-tab"
        >
          <span>Semester 1</span>
        </button>
        <button
          type="button"
          className={`segmented-tab ${selectedSem === 'semester2' ? 'active' : ''}`}
          onClick={() => setSelectedSem('semester2')}
          id="student-marks-sem2-tab"
        >
          <span>Semester 2 (Current)</span>
        </button>
      </div>

      {/* Summary Stat Grid */}
      <div className="grid-4" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
          <span className="stat-label">Total Marks</span>
          <div className="stat-value">{totalObtained} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/ {maxMarks}</span></div>
          <span className="stat-helper">Across {computedSubjects.length} courses</span>
        </div>

        <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
          <span className="stat-label">Semester Percentage</span>
          <div className="stat-value">{percentage}%</div>
          <span className="stat-helper">Weighted aggregate</span>
        </div>

        <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
          <span className="stat-label">Calculated SGPA</span>
          <div className="stat-value" style={{ color: 'var(--primary-700)' }}>{sgpa.toFixed(2)}</div>
          <span className="stat-helper">Total Credits: {totalCredits}</span>
        </div>

        <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
          <span className="stat-label">Semester Status</span>
          <div style={{ marginTop: '0.25rem' }}>
            <span className={`badge ${isAllPassed ? 'badge-success' : 'badge-danger'}`} style={{ fontSize: '0.9rem', padding: '0.35rem 0.85rem' }}>
              {isAllPassed ? 'Passed' : 'ATKT / Failed'}
            </span>
          </div>
          <span className="stat-helper" style={{ display: 'block', marginTop: '0.35rem' }}>
            {isAllPassed ? 'All courses cleared' : 'Course backlog detected'}
          </span>
        </div>
      </div>

      {/* Marks Table */}
      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Course-Wise Score Sheet ({selectedSem === 'semester1' ? 'Semester 1' : 'Semester 2'})</h3>
            <span className="card-subtitle">Internal (Max 40) + External (Max 60) = Total Marks (Max 100)</span>
          </div>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Subject Name</th>
                <th style={{ textAlign: 'center' }}>Credits</th>
                <th style={{ textAlign: 'center' }}>Internal (/40)</th>
                <th style={{ textAlign: 'center' }}>External (/60)</th>
                <th style={{ textAlign: 'center' }}>Total (/100)</th>
                <th style={{ textAlign: 'center' }}>Grade</th>
                <th style={{ textAlign: 'center' }}>Grade Points</th>
                <th style={{ textAlign: 'center' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {computedSubjects.map((sub, idx) => (
                <tr key={sub.code || idx}>
                  <td style={{ fontWeight: '700', color: 'var(--primary-800)', fontFamily: 'monospace' }}>{sub.code}</td>
                  <td style={{ fontWeight: '600' }}>{sub.subject}</td>
                  <td style={{ textAlign: 'center' }}>{sub.credits}</td>
                  <td style={{ textAlign: 'center' }}>{sub.internal}</td>
                  <td style={{ textAlign: 'center' }}>{sub.external}</td>
                  <td style={{ textAlign: 'center', fontWeight: '800', color: 'var(--text-primary)' }}>{sub.total}</td>
                  <td style={{ textAlign: 'center' }}>
                    <span className="badge badge-primary" style={{ fontWeight: '800' }}>{sub.grade}</span>
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: '700' }}>{sub.point}</td>
                  <td style={{ textAlign: 'center' }}>
                    <span className={`badge ${sub.status === 'Pass' ? 'badge-success' : 'badge-danger'}`}>
                      {sub.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="table-summary-row">
                <td colSpan={2}>Aggregate Total / Semester Performance</td>
                <td style={{ textAlign: 'center' }}>{totalCredits}</td>
                <td colSpan={2} style={{ textAlign: 'center' }}>{totalObtained} / {maxMarks} ({percentage}%)</td>
                <td style={{ textAlign: 'center', fontSize: '1.05rem' }}>{totalObtained}</td>
                <td style={{ textAlign: 'center' }}>SGPA</td>
                <td style={{ textAlign: 'center', fontSize: '1.05rem', color: 'var(--primary-900)' }}>{sgpa.toFixed(2)}</td>
                <td style={{ textAlign: 'center' }}>
                  <span className={`badge ${isAllPassed ? 'badge-success' : 'badge-danger'}`}>
                    {isAllPassed ? 'Pass' : 'Fail'}
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
