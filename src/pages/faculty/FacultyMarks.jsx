import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Award, User, BookOpen, Save, CheckCircle2, AlertCircle, Search, ChevronRight, Eye } from 'lucide-react';
import { getStudents, getStudentMarks, updateStudentSubjectMarks } from '../../data/storage';
import { calculateGrade, calculateTotal, calculatePercentage, calculateSGPA } from '../../utils/calculations';
import { useToast } from '../../context/ToastContext';

export function FacultyMarks() {
  const [searchParams] = useSearchParams();
  const { showToast } = useToast();

  const students = useMemo(() => getStudents(), []);
  const initialStudentId = searchParams.get('student') || (students[0]?.id || 'S001');

  const [selectedStudentId, setSelectedStudentId] = useState(initialStudentId);
  const [selectedSem, setSelectedSem] = useState('semester1');
  const [activeSubjectCode, setActiveSubjectCode] = useState('');
  
  // Marks inputs
  const [internalVal, setInternalVal] = useState(0);
  const [externalVal, setExternalVal] = useState(0);

  // Load marks for chosen student
  const [allStudentMarks, setAllStudentMarks] = useState({});

  const reloadStudentMarks = () => {
    if (selectedStudentId) {
      const m = getStudentMarks(selectedStudentId);
      setAllStudentMarks(m);
    }
  };

  useEffect(() => {
    reloadStudentMarks();
  }, [selectedStudentId]);

  const currentStudent = useMemo(() => {
    return students.find(s => s.id === selectedStudentId) || students[0];
  }, [students, selectedStudentId]);

  const semSubjects = useMemo(() => {
    return allStudentMarks?.[selectedSem] || [];
  }, [allStudentMarks, selectedSem]);

  // Set default active subject when semester or subjects change
  useEffect(() => {
    if (semSubjects.length > 0) {
      const target = semSubjects.find(s => s.code === activeSubjectCode) || semSubjects[0];
      setActiveSubjectCode(target.code);
      setInternalVal(target.internal);
      setExternalVal(target.external);
    }
  }, [semSubjects, selectedSem]);

  const activeSubject = useMemo(() => {
    return semSubjects.find(s => s.code === activeSubjectCode) || semSubjects[0];
  }, [semSubjects, activeSubjectCode]);

  const handleSelectSubject = (sub) => {
    setActiveSubjectCode(sub.code);
    setInternalVal(sub.internal);
    setExternalVal(sub.external);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!currentStudent || !activeSubject) return;

    const intNum = parseFloat(internalVal);
    const extNum = parseFloat(externalVal);

    if (isNaN(intNum) || intNum < 0 || intNum > 40) {
      showToast('Internal marks must be between 0 and 40.', 'error');
      return;
    }

    if (isNaN(extNum) || extNum < 0 || extNum > 60) {
      showToast('External marks must be between 0 and 60.', 'error');
      return;
    }

    updateStudentSubjectMarks(currentStudent.id, selectedSem, activeSubject.code, intNum, extNum);
    showToast('Marks updated successfully.', 'success');
    reloadStudentMarks();
  };

  const computedTotal = calculateTotal(internalVal, externalVal);
  const computedGrade = calculateGrade(computedTotal);

  return (
    <div>
      <div className="page-header">
        <div className="page-title-group">
          <h1 className="page-title">Marks Management Module</h1>
          <p className="page-subtitle">Record and modify Internal &amp; External scores for individual students</p>
        </div>

        {currentStudent && (
          <Link to={`/faculty/students/${currentStudent.id}`} className="btn btn-outline btn-sm">
            <Eye size={15} />
            <span>View Student 360 Profile</span>
          </Link>
        )}
      </div>

      {/* Top Controls: Student Selector & Semester Toggle */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
          <div>
            <label className="form-label">Select Student for Evaluation:</label>
            <select
              className="form-select"
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}
              id="faculty-marks-student-select"
            >
              {students.map(s => (
                <option key={s.id} value={s.id}>
                  {s.rollNumber} — {s.name} ({s.branch})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label">Evaluation Semester:</label>
            <div className="segmented-tabs">
              <button
                type="button"
                className={`segmented-tab ${selectedSem === 'semester1' ? 'active' : ''}`}
                onClick={() => setSelectedSem('semester1')}
                id="sem1-select-btn"
              >
                <span>Semester 1</span>
              </button>
              <button
                type="button"
                className={`segmented-tab ${selectedSem === 'semester2' ? 'active' : ''}`}
                onClick={() => setSelectedSem('semester2')}
                id="sem2-select-btn"
              >
                <span>Semester 2</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Split Layout: Left Course Selector Roster & Right Active Mark Editor */}
      <div className="grid-1-2" style={{ alignItems: 'flex-start' }}>
        {/* Left: Course List */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--bg-secondary)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
              Registered Courses ({selectedSem === 'semester1' ? 'Sem 1' : 'Sem 2'})
            </h3>
            <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Click a course to edit marks</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {semSubjects.map(sub => {
              const total = calculateTotal(sub.internal, sub.external);
              const grade = calculateGrade(total);
              const isActive = sub.code === activeSubjectCode;

              return (
                <div
                  key={sub.code}
                  onClick={() => handleSelectSubject(sub)}
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
                  id={`subject-item-${sub.code}`}
                >
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.9rem', color: isActive ? 'var(--primary-900)' : 'var(--text-primary)' }}>
                      {sub.subject}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                      {sub.code} • {sub.credits} Credits
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {total} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/ 100</span>
                    </div>
                    <span className="badge badge-primary" style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem' }}>
                      Grade {grade.grade}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Focused Marks Editor for Single Subject */}
        {activeSubject && (
          <div className="card">
            <div className="card-header">
              <div>
                <span className="badge badge-primary" style={{ marginBottom: '0.35rem' }}>
                  {activeSubject.code} • {activeSubject.credits} Credits
                </span>
                <h3 className="card-title" style={{ fontSize: '1.25rem' }}>
                  {activeSubject.subject}
                </h3>
              </div>
              <span className="badge badge-neutral">Single Student Evaluation</span>
            </div>

            <form onSubmit={handleSave}>
              <div className="form-row" style={{ marginBottom: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label form-label-required">
                    Continuous Internal Assessment (CIA)
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <input
                      type="number"
                      min="0"
                      max="40"
                      step="0.5"
                      className="form-input"
                      value={internalVal}
                      onChange={(e) => setInternalVal(e.target.value)}
                      id="faculty-internal-input"
                      required
                      style={{ fontSize: '1.2rem', fontWeight: '700' }}
                    />
                    <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-muted)' }}>/ 40</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Max permissible: 40 Marks</span>
                </div>

                <div className="form-group">
                  <label className="form-label form-label-required">
                    End Semester University Exam (ESE)
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <input
                      type="number"
                      min="0"
                      max="60"
                      step="0.5"
                      className="form-input"
                      value={externalVal}
                      onChange={(e) => setExternalVal(e.target.value)}
                      id="faculty-external-input"
                      required
                      style={{ fontSize: '1.2rem', fontWeight: '700' }}
                    />
                    <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-muted)' }}>/ 60</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Max permissible: 60 Marks</span>
                </div>
              </div>

              {/* Real-time Computed Summary */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: 'var(--primary-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--primary-200)',
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}
              >
                <div>
                  <span className="stat-label">Computed Total</span>
                  <div style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {computedTotal} / 100
                  </div>
                </div>

                <div>
                  <span className="stat-label">Letter Grade</span>
                  <div style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--primary-700)', marginTop: '0.2rem' }}>
                    {computedGrade.grade}
                  </div>
                </div>

                <div>
                  <span className="stat-label">Evaluation Status</span>
                  <div style={{ marginTop: '0.4rem' }}>
                    <span className={`badge ${computedGrade.status === 'Pass' ? 'badge-success' : 'badge-danger'}`} style={{ fontSize: '0.9rem' }}>
                      {computedGrade.status}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  id="faculty-save-marks-btn"
                >
                  <Save size={18} />
                  <span>Save Marks to LocalStorage</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
