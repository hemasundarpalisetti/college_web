import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  CheckSquare,
  Award,
  FileSpreadsheet,
  FileText,
  Edit,
  KeyRound,
  Download,
  Printer,
  Sparkles,
  TrendingUp,
  BookOpen,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { getStudentById, getStudentMarks, getStudentAttendance, updateStudentSubjectMarks, updateStudentSubjectAttendance } from '../../data/storage';
import { calculateStudentSummary, calculateGrade, calculateTotal } from '../../utils/calculations';
import { useToast } from '../../context/ToastContext';
import { CircularProgress, ProgressBar } from '../../components/common/ProgressIndicators';
import { PerformanceChart } from '../../components/common/PerformanceChart';
import { Modal } from '../../components/common/Modal';

export function FacultyStudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [student, setStudent] = useState(null);
  const [marks, setMarks] = useState(null);
  const [attendance, setAttendance] = useState([]);
  const [activeSemTab, setActiveSemTab] = useState('semester2');

  // Quick edit modals state
  const [editMarksModal, setEditMarksModal] = useState({ isOpen: false, subject: null, semKey: 'semester2' });
  const [editAttModal, setEditAttModal] = useState({ isOpen: false, subject: null });

  // Temp form values
  const [tempInternal, setTempInternal] = useState(0);
  const [tempExternal, setTempExternal] = useState(0);
  const [tempPresent, setTempPresent] = useState(0);
  const [tempAbsent, setTempAbsent] = useState(0);
  const [tempTotal, setTempTotal] = useState(0);
  const [tempManualPct, setTempManualPct] = useState('');

  const reloadData = () => {
    const s = getStudentById(id);
    if (!s) {
      showToast('Student record not found.', 'error');
      navigate('/faculty/students');
      return;
    }
    setStudent(s);
    setMarks(getStudentMarks(s.id));
    setAttendance(getStudentAttendance(s.id));
  };

  useEffect(() => {
    reloadData();
  }, [id]);

  const summary = useMemo(() => {
    if (!student || !marks || !attendance) return null;
    return calculateStudentSummary(student.id, { [student.id]: marks }, { [student.id]: attendance });
  }, [student, marks, attendance]);

  if (!student || !summary) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        Loading student academic profile...
      </div>
    );
  }

  // Open Edit Marks modal
  const handleOpenEditMarks = (subject, semKey) => {
    setEditMarksModal({ isOpen: true, subject, semKey });
    setTempInternal(subject.internal);
    setTempExternal(subject.external);
  };

  const handleSaveMarks = (e) => {
    e.preventDefault();
    if (tempInternal < 0 || tempInternal > 40 || tempExternal < 0 || tempExternal > 60) {
      showToast('Marks out of range (Internal: 0-40, External: 0-60).', 'error');
      return;
    }

    updateStudentSubjectMarks(student.id, editMarksModal.semKey, editMarksModal.subject.code, tempInternal, tempExternal);
    showToast('Marks updated successfully.', 'success');
    setEditMarksModal({ isOpen: false, subject: null, semKey: 'semester2' });
    reloadData();
  };

  // Open Edit Attendance modal
  const handleOpenEditAtt = (subject) => {
    setEditAttModal({ isOpen: true, subject });
    setTempTotal(subject.totalClasses);
    setTempPresent(subject.present);
    setTempAbsent(subject.absent);
    setTempManualPct('');
  };

  const handleSaveAttendance = (e) => {
    e.preventDefault();
    if (tempPresent > tempTotal || tempAbsent > tempTotal || tempPresent + tempAbsent > tempTotal) {
      showToast('Attendance counts invalid (Present/Absent cannot exceed Total).', 'error');
      return;
    }

    updateStudentSubjectAttendance(student.id, editAttModal.subject.code, {
      totalClasses: tempTotal,
      present: tempPresent,
      absent: tempAbsent,
      percentage: tempManualPct ? parseFloat(tempManualPct) : null
    });

    showToast('Attendance updated successfully.', 'success');
    setEditAttModal({ isOpen: false, subject: null });
    reloadData();
  };

  const currentSemSubjects = activeSemTab === 'semester1' ? summary.sem1.subjects : summary.sem2.subjects;
  const currentSemData = activeSemTab === 'semester1' ? summary.sem1 : summary.sem2;

  return (
    <div>
      {/* Top Navigation */}
      <div style={{ marginBottom: '1.5rem' }}>
        <Link
          to="/faculty/students"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: 'var(--primary-700)'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Students Directory</span>
        </Link>
      </div>

      {/* Hero Banner with Complete Student Identity */}
      <div className="profile-hero" style={{ marginBottom: '2rem' }}>
        <div className="avatar-large" style={{ backgroundColor: '#ffffff', color: 'var(--primary-800)' }}>
          {student.avatar || 'ST'}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(255, 255, 255, 0.16)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            <Sparkles size={14} />
            <span>360° Academic Transcript</span>
          </div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 0.25rem 0' }}>
            {student.name}
          </h1>
          <p style={{ fontSize: '0.925rem', color: '#dbeafe', margin: 0 }}>
            Roll No: <strong>{student.rollNumber}</strong> • Username: <strong>{student.username}</strong> • {student.branch} ({student.semester})
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link
            to={`/faculty/reports?student=${student.id}&type=result`}
            className="btn btn-secondary btn-sm"
          >
            <Download size={15} />
            <span>Official Result PDF</span>
          </Link>
          <Link
            to={`/faculty/reports?student=${student.id}&type=attendance`}
            className="btn btn-secondary btn-sm"
          >
            <Download size={15} />
            <span>Attendance PDF</span>
          </Link>
        </div>
      </div>

      {/* 4 Summary Stat Cards */}
      <div className="grid-4" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
          <span className="stat-label">Overall Attendance</span>
          <div className="stat-value" style={{ color: summary.attendance.overallPercentage >= 75 ? '#065f46' : '#991b1b' }}>
            {summary.attendance.overallPercentage}%
          </div>
          <span className="stat-helper">{summary.attendance.totalPresent} / {summary.attendance.totalClasses} classes attended</span>
        </div>

        <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
          <span className="stat-label">Overall Percentage</span>
          <div className="stat-value">{summary.overallPercentage}%</div>
          <span className="stat-helper">Across all semesters</span>
        </div>

        <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
          <span className="stat-label">Cumulative CGPA</span>
          <div className="stat-value" style={{ color: 'var(--primary-700)' }}>
            {summary.overallCGPA.toFixed(2)}
          </div>
          <span className="stat-helper">Sem 1 SGPA: {summary.sem1.sgpa} | Sem 2: {summary.sem2.sgpa}</span>
        </div>

        <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
          <span className="stat-label">Academic Standing</span>
          <div style={{ marginTop: '0.25rem' }}>
            <span className={`badge ${summary.overallStatus === 'Passed' ? 'badge-success' : 'badge-danger'}`} style={{ fontSize: '0.9rem', padding: '0.35rem 0.85rem' }}>
              {summary.overallStatus}
            </span>
          </div>
          <span className="stat-helper" style={{ display: 'block', marginTop: '0.35rem' }}>Autonomous Evaluation</span>
        </div>
      </div>

      {/* Section 1: Personal & Academic Info Card */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header">
          <h3 className="card-title">
            <User size={18} color="var(--primary-700)" />
            <span>Personal &amp; Academic Enrollment Details</span>
          </h3>
          <Link to={`/faculty/students?edit=${student.id}`} className="btn btn-outline btn-sm">
            <Edit size={14} />
            <span>Edit Information</span>
          </Link>
        </div>

        <div className="profile-info-grid">
          <div className="info-item">
            <span className="info-label">Full Name</span>
            <span className="info-value">{student.name}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Roll Number / USN</span>
            <span className="info-value" style={{ fontFamily: 'monospace' }}>{student.rollNumber}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Portal Username</span>
            <span className="info-value" style={{ fontFamily: 'monospace' }}>{student.username}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Branch / Program</span>
            <span className="info-value">{student.branch}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Academic Year</span>
            <span className="info-value">{student.year}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Current Semester</span>
            <span className="info-value">{student.semester}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Assigned Section</span>
            <span className="info-value">Section {student.section}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email Address</span>
            <span className="info-value">{student.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Student Mobile Number</span>
            <span className="info-value" style={{ fontWeight: '700', color: 'var(--primary-800)' }}>
              📱 {student.studentPhone || student.phone || 'N/A'}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Parent / Guardian Name</span>
            <span className="info-value">{student.parentName || 'Parent / Guardian'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Parent Mobile Number</span>
            <span className="info-value" style={{ fontWeight: '700', color: '#065f46' }}>
              👨‍👩‍👦 {student.parentPhone || 'N/A'}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Biometric FRS Status</span>
            <span className="info-value" style={{ color: '#1e40af', fontWeight: '700' }}>
              ✓ Enrolled &amp; Active (FRS-W6-{student.rollNumber})
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Admission Date</span>
            <span className="info-value">{student.admissionDate}</span>
          </div>
        </div>
      </div>

      {/* Section 2: Attendance Breakdown Card */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header">
          <div>
            <h3 className="card-title">
              <CheckSquare size={18} color="var(--primary-700)" />
              <span>Subject Attendance Records (Semester 2)</span>
            </h3>
            <span className="card-subtitle">FRS Biometric Verified • Aggregate: {summary.attendance.overallPercentage}% • {summary.attendance.totalPresent}/{summary.attendance.totalClasses} classes</span>
          </div>
          <Link to={`/faculty/attendance?student=${student.id}`} className="btn btn-secondary btn-sm">
            <span>Manage All Attendance</span>
          </Link>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Course Name</th>
                <th style={{ textAlign: 'center' }}>Total Classes</th>
                <th style={{ textAlign: 'center' }}>Present</th>
                <th style={{ textAlign: 'center' }}>Absent</th>
                <th style={{ textAlign: 'center' }}>Attendance %</th>
                <th style={{ textAlign: 'center' }}>Eligibility</th>
                <th style={{ textAlign: 'right' }}>Faculty Action</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((att, idx) => (
                <tr key={att.code || idx}>
                  <td style={{ fontWeight: '700', color: 'var(--primary-800)', fontFamily: 'monospace' }}>{att.code}</td>
                  <td style={{ fontWeight: '600' }}>{att.subject}</td>
                  <td style={{ textAlign: 'center' }}>{att.totalClasses}</td>
                  <td style={{ textAlign: 'center', fontWeight: '700', color: '#065f46' }}>{att.present}</td>
                  <td style={{ textAlign: 'center', fontWeight: '700', color: att.absent > 8 ? '#b91c1c' : 'var(--text-secondary)' }}>{att.absent}</td>
                  <td style={{ textAlign: 'center', fontWeight: '800', color: att.percentage >= 75 ? 'var(--primary-800)' : '#b91c1c' }}>
                    {att.percentage}%
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <span className={`badge ${att.percentage >= 75 ? 'badge-success' : 'badge-danger'}`}>
                      {att.percentage >= 75 ? 'Eligible' : 'Shortage'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => handleOpenEditAtt(att)}
                      id={`edit-att-btn-${att.code}`}
                    >
                      <Edit size={13} />
                      <span>Edit</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Subject Marks Breakdown */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header">
          <div>
            <h3 className="card-title">
              <Award size={18} color="var(--primary-700)" />
              <span>Subject Marks Statement &amp; Evaluations</span>
            </h3>
            <span className="card-subtitle">Select semester to inspect or edit internal &amp; external scores</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div className="segmented-tabs" style={{ padding: '0.2rem' }}>
              <button
                type="button"
                className={`segmented-tab ${activeSemTab === 'semester1' ? 'active' : ''}`}
                onClick={() => setActiveSemTab('semester1')}
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}
                id="faculty-view-sem1-tab"
              >
                <span>Semester 1</span>
              </button>
              <button
                type="button"
                className={`segmented-tab ${activeSemTab === 'semester2' ? 'active' : ''}`}
                onClick={() => setActiveSemTab('semester2')}
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}
                id="faculty-view-sem2-tab"
              >
                <span>Semester 2</span>
              </button>
            </div>
            <Link to={`/faculty/marks?student=${student.id}`} className="btn btn-secondary btn-sm">
              <span>Marks Module</span>
            </Link>
          </div>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Subject Name</th>
                <th style={{ textAlign: 'center' }}>Credits</th>
                <th style={{ textAlign: 'center' }}>Internal (/40)</th>
                <th style={{ textAlign: 'center' }}>External (/60)</th>
                <th style={{ textAlign: 'center' }}>Total (/100)</th>
                <th style={{ textAlign: 'center' }}>Grade</th>
                <th style={{ textAlign: 'center' }}>Points</th>
                <th style={{ textAlign: 'center' }}>Status</th>
                <th style={{ textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentSemSubjects.map((sub, idx) => (
                <tr key={sub.code || idx}>
                  <td style={{ fontWeight: '700', color: 'var(--primary-800)', fontFamily: 'monospace' }}>{sub.code}</td>
                  <td style={{ fontWeight: '600' }}>{sub.subject}</td>
                  <td style={{ textAlign: 'center' }}>{sub.credits}</td>
                  <td style={{ textAlign: 'center', fontWeight: '700' }}>{sub.internal}</td>
                  <td style={{ textAlign: 'center', fontWeight: '700' }}>{sub.external}</td>
                  <td style={{ textAlign: 'center', fontWeight: '800', color: 'var(--text-primary)' }}>{sub.total}</td>
                  <td style={{ textAlign: 'center' }}>
                    <span className="badge badge-primary">{sub.grade}</span>
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: '700' }}>{sub.point}</td>
                  <td style={{ textAlign: 'center' }}>
                    <span className={`badge ${sub.status === 'Pass' ? 'badge-success' : 'badge-danger'}`}>
                      {sub.status}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => handleOpenEditMarks(sub, activeSemTab)}
                      id={`edit-mark-btn-${sub.code}`}
                    >
                      <Edit size={13} />
                      <span>Edit</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="table-summary-row">
                <td colSpan={2}>Semester Aggregate</td>
                <td style={{ textAlign: 'center' }}>{currentSemSubjects.reduce((a, b) => a + (b.credits || 0), 0)}</td>
                <td colSpan={2} style={{ textAlign: 'center' }}>{currentSemData.obtained} / {currentSemData.max} ({currentSemData.percentage}%)</td>
                <td style={{ textAlign: 'center', fontSize: '1.05rem' }}>{currentSemData.obtained}</td>
                <td style={{ textAlign: 'center' }}>SGPA</td>
                <td style={{ textAlign: 'center', fontSize: '1.05rem', color: 'var(--primary-900)' }}>{currentSemData.sgpa.toFixed(2)}</td>
                <td style={{ textAlign: 'center' }}>
                  <span className={`badge ${currentSemData.status === 'Pass' ? 'badge-success' : 'badge-danger'}`}>
                    {currentSemData.status}
                  </span>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Chart Section */}
      <PerformanceChart
        subjects={currentSemSubjects}
        title={`Academic Performance Visualizer (${activeSemTab === 'semester1' ? 'Semester 1' : 'Semester 2'})`}
      />

      {/* EDIT MARKS MODAL */}
      <Modal
        isOpen={editMarksModal.isOpen}
        onClose={() => setEditMarksModal({ isOpen: false, subject: null, semKey: 'semester2' })}
        title={`Edit Marks: ${editMarksModal.subject?.subject} (${editMarksModal.subject?.code})`}
      >
        <form onSubmit={handleSaveMarks}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label form-label-required">Internal Assessment (/40)</label>
              <input
                type="number"
                min="0"
                max="40"
                step="0.5"
                className="form-input"
                value={tempInternal}
                onChange={(e) => setTempInternal(parseFloat(e.target.value) || 0)}
                id="edit-internal-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">End Semester Exam (/60)</label>
              <input
                type="number"
                min="0"
                max="60"
                step="0.5"
                className="form-input"
                value={tempExternal}
                onChange={(e) => setTempExternal(parseFloat(e.target.value) || 0)}
                id="edit-external-input"
                required
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem',
              backgroundColor: 'var(--primary-50)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--primary-200)',
              margin: '1rem 0'
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Calculated Total</span>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                {calculateTotal(tempInternal, tempExternal)} / 100
              </div>
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Computed Grade</span>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary-800)' }}>
                {calculateGrade(calculateTotal(tempInternal, tempExternal)).grade} ({calculateGrade(calculateTotal(tempInternal, tempExternal)).status})
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setEditMarksModal({ isOpen: false, subject: null, semKey: 'semester2' })}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" id="save-marks-btn">
              <span>Save Marks to LocalStorage</span>
            </button>
          </div>
        </form>
      </Modal>

      {/* EDIT ATTENDANCE MODAL */}
      <Modal
        isOpen={editAttModal.isOpen}
        onClose={() => setEditAttModal({ isOpen: false, subject: null })}
        title={`Edit Attendance: ${editAttModal.subject?.subject} (${editAttModal.subject?.code})`}
      >
        <form onSubmit={handleSaveAttendance}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label form-label-required">Total Classes Conducted</label>
              <input
                type="number"
                min="1"
                max="120"
                className="form-input"
                value={tempTotal}
                onChange={(e) => setTempTotal(parseInt(e.target.value, 10) || 0)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Present Count</label>
              <input
                type="number"
                min="0"
                max={tempTotal}
                className="form-input"
                value={tempPresent}
                onChange={(e) => {
                  const p = parseInt(e.target.value, 10) || 0;
                  setTempPresent(p);
                  setTempAbsent(Math.max(0, tempTotal - p));
                }}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Absent Count</label>
              <input
                type="number"
                min="0"
                max={tempTotal}
                className="form-input"
                value={tempAbsent}
                onChange={(e) => setTempAbsent(parseInt(e.target.value, 10) || 0)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Or Direct Attendance Percentage Override (%)</label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              className="form-input"
              placeholder="Leave empty to use (Present / Total) × 100"
              value={tempManualPct}
              onChange={(e) => setTempManualPct(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setEditAttModal({ isOpen: false, subject: null })}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" id="save-attendance-btn">
              <span>Save Attendance to LocalStorage</span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
