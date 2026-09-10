import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckSquare, User, Save, CheckCircle2, AlertCircle, Eye, RefreshCw } from 'lucide-react';
import { getStudents, getStudentAttendance, updateStudentSubjectAttendance } from '../../data/storage';
import { calculateAttendance, calculateOverallAttendance } from '../../utils/calculations';
import { useToast } from '../../context/ToastContext';
import { CircularProgress, ProgressBar } from '../../components/common/ProgressIndicators';

export function FacultyAttendance() {
  const [searchParams] = useSearchParams();
  const { showToast } = useToast();

  const students = useMemo(() => getStudents(), []);
  const initialStudentId = searchParams.get('student') || (students[0]?.id || 'S001');

  const [selectedStudentId, setSelectedStudentId] = useState(initialStudentId);
  const [activeSubjectCode, setActiveSubjectCode] = useState('');

  // Attendance fields
  const [totalClasses, setTotalClasses] = useState(45);
  const [presentVal, setPresentVal] = useState(40);
  const [absentVal, setAbsentVal] = useState(5);
  const [manualPct, setManualPct] = useState('');

  const [attendanceList, setAttendanceList] = useState([]);

  const reloadAttendance = () => {
    if (selectedStudentId) {
      const att = getStudentAttendance(selectedStudentId);
      setAttendanceList(att);
    }
  };

  useEffect(() => {
    reloadAttendance();
  }, [selectedStudentId]);

  const currentStudent = useMemo(() => {
    return students.find(s => s.id === selectedStudentId) || students[0];
  }, [students, selectedStudentId]);

  // Set default active subject when attendance list loads
  useEffect(() => {
    if (attendanceList.length > 0) {
      const target = attendanceList.find(a => a.code === activeSubjectCode) || attendanceList[0];
      setActiveSubjectCode(target.code);
      setTotalClasses(target.totalClasses);
      setPresentVal(target.present);
      setAbsentVal(target.absent);
      setManualPct('');
    }
  }, [attendanceList]);

  const activeSubject = useMemo(() => {
    return attendanceList.find(a => a.code === activeSubjectCode) || attendanceList[0];
  }, [attendanceList, activeSubjectCode]);

  const handleSelectSubject = (item) => {
    setActiveSubjectCode(item.code);
    setTotalClasses(item.totalClasses);
    setPresentVal(item.present);
    setAbsentVal(item.absent);
    setManualPct('');
  };

  // Auto-sync absent count when present is adjusted
  const handlePresentChange = (newP) => {
    const p = Math.max(0, parseInt(newP, 10) || 0);
    setPresentVal(p);
    setAbsentVal(Math.max(0, totalClasses - p));
    setManualPct('');
  };

  // Auto-sync present count when absent is adjusted
  const handleAbsentChange = (newA) => {
    const a = Math.max(0, parseInt(newA, 10) || 0);
    setAbsentVal(a);
    setPresentVal(Math.max(0, totalClasses - a));
    setManualPct('');
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!currentStudent || !activeSubject) return;

    if (manualPct !== '') {
      const pctNum = parseFloat(manualPct);
      if (isNaN(pctNum) || pctNum < 0 || pctNum > 100) {
        showToast('Percentage must be between 0 and 100.', 'error');
        return;
      }
    } else {
      if (presentVal > totalClasses || absentVal > totalClasses || presentVal + absentVal > totalClasses) {
        showToast('Present and Absent counts cannot exceed Total Classes.', 'error');
        return;
      }
    }

    updateStudentSubjectAttendance(currentStudent.id, activeSubject.code, {
      totalClasses,
      present: presentVal,
      absent: absentVal,
      percentage: manualPct !== '' ? parseFloat(manualPct) : null
    });

    showToast('Attendance updated successfully.', 'success');
    reloadAttendance();
  };

  const computedPercentage = manualPct !== ''
    ? parseFloat(parseFloat(manualPct).toFixed(2))
    : calculateAttendance(presentVal, totalClasses);

  const stats = useMemo(() => calculateOverallAttendance(attendanceList), [attendanceList]);

  return (
    <div>
      <div className="page-header">
        <div className="page-title-group">
          <h1 className="page-title">Attendance Management Module</h1>
          <p className="page-subtitle">Track, compute, and update student session attendance records</p>
        </div>

        {currentStudent && (
          <Link to={`/faculty/students/${currentStudent.id}`} className="btn btn-outline btn-sm">
            <Eye size={15} />
            <span>View Student 360 Profile</span>
          </Link>
        )}
      </div>

      {/* Top Student Selector */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ maxWidth: '480px' }}>
          <label className="form-label">Select Student for Attendance Updates:</label>
          <select
            className="form-select"
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            id="faculty-attendance-student-select"
          >
            {students.map(s => (
              <option key={s.id} value={s.id}>
                {s.rollNumber} — {s.name} ({s.branch})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Split Roster & Editor */}
      <div className="grid-1-2" style={{ alignItems: 'flex-start' }}>
        {/* Left: Course Attendance Summary List */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
                Registered Courses
              </h3>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Aggregate: {stats.overallPercentage}%</span>
            </div>
            <span className={`badge ${stats.overallPercentage >= 75 ? 'badge-success' : 'badge-danger'}`}>
              {stats.overallPercentage >= 75 ? 'Eligible' : 'Shortage'}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {attendanceList.map(item => {
              const isActive = item.code === activeSubjectCode;
              const pct = item.percentage !== undefined ? item.percentage : calculateAttendance(item.present, item.totalClasses);

              return (
                <div
                  key={item.code}
                  onClick={() => handleSelectSubject(item)}
                  style={{
                    padding: '1rem 1.25rem',
                    borderBottom: '1px solid var(--border-light)',
                    cursor: 'pointer',
                    backgroundColor: isActive ? 'var(--primary-50)' : '#ffffff',
                    borderLeft: isActive ? '4px solid var(--primary-700)' : '4px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'background var(--transition-fast)'
                  }}
                  id={`att-item-${item.code}`}
                >
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.9rem', color: isActive ? 'var(--primary-900)' : 'var(--text-primary)' }}>
                      {item.subject}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                      {item.code} • {item.present} / {item.totalClasses} classes
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: '800', fontSize: '1rem', color: pct >= 75 ? 'var(--primary-800)' : '#b91c1c' }}>
                      {pct}%
                    </div>
                    <span className={`badge ${pct >= 75 ? 'badge-success' : 'badge-danger'}`} style={{ fontSize: '0.675rem' }}>
                      {pct >= 75 ? 'Eligible' : 'Shortage'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Attendance Editor Form */}
        {activeSubject && (
          <div className="card">
            <div className="card-header">
              <div>
                <span className="badge badge-primary" style={{ marginBottom: '0.35rem' }}>
                  {activeSubject.code}
                </span>
                <h3 className="card-title" style={{ fontSize: '1.25rem' }}>
                  {activeSubject.subject}
                </h3>
              </div>
              <span className="badge badge-neutral">Single Student Mode</span>
            </div>

            <form onSubmit={handleSave}>
              <div className="form-row" style={{ marginBottom: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label form-label-required">Total Classes Conducted</label>
                  <input
                    type="number"
                    min="1"
                    max="150"
                    className="form-input"
                    value={totalClasses}
                    onChange={(e) => {
                      const t = parseInt(e.target.value, 10) || 0;
                      setTotalClasses(t);
                    }}
                    id="total-classes-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label form-label-required">Classes Attended (Present)</label>
                  <input
                    type="number"
                    min="0"
                    max={totalClasses}
                    className="form-input"
                    value={presentVal}
                    onChange={(e) => handlePresentChange(e.target.value)}
                    id="present-count-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label form-label-required">Classes Missed (Absent)</label>
                  <input
                    type="number"
                    min="0"
                    max={totalClasses}
                    className="form-input"
                    value={absentVal}
                    onChange={(e) => handleAbsentChange(e.target.value)}
                    id="absent-count-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">
                  Or Direct Percentage Override (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  className="form-input"
                  placeholder="Optional: Enter explicit attendance percentage (e.g. 91.5)"
                  value={manualPct}
                  onChange={(e) => setManualPct(e.target.value)}
                  id="manual-pct-input"
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  If empty, percentage is computed automatically using (Present / Total Classes) × 100
                </span>
              </div>

              {/* Real-time Computed Indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem',
                  backgroundColor: 'var(--primary-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--primary-200)',
                  marginBottom: '2rem'
                }}
              >
                <div>
                  <span className="stat-label">Calculated Attendance %</span>
                  <div style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {computedPercentage}%
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="stat-label">Statutory Status</span>
                  <div style={{ marginTop: '0.35rem' }}>
                    <span className={`badge ${computedPercentage >= 75 ? 'badge-success' : 'badge-danger'}`} style={{ fontSize: '0.9rem' }}>
                      {computedPercentage >= 75 ? 'Exam Eligible (≥ 75%)' : 'Attendance Shortage (< 75%)'}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  id="faculty-save-attendance-btn"
                >
                  <Save size={18} />
                  <span>Save Attendance to LocalStorage</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
