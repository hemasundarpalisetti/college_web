import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FileText, Download, Printer, Award, CheckSquare, User, FileSpreadsheet } from 'lucide-react';
import { getStudents, getStudentMarks, getStudentAttendance } from '../../data/storage';
import { BRANCHES } from '../../data/initialData';
import { useToast } from '../../context/ToastContext';
import { downloadElementAsPdf, printDocument } from '../../utils/pdfGenerator';
import { ResultPdfTemplate } from '../../components/pdf/ResultPdfTemplate';
import { AttendancePdfTemplate } from '../../components/pdf/AttendancePdfTemplate';

export function FacultyReports() {
  const [searchParams] = useSearchParams();
  const { showToast } = useToast();

  const students = useMemo(() => getStudents(), []);
  const initialStudentId = searchParams.get('student') || (students[0]?.id || 'S001');
  const initialType = searchParams.get('type') === 'attendance' ? 'attendance' : 'result';

  const [filterYear, setFilterYear] = useState('ALL');
  const [filterBranch, setFilterBranch] = useState('ALL');
  const [selectedStudentId, setSelectedStudentId] = useState(initialStudentId);
  const [reportType, setReportType] = useState(initialType); // 'result' | 'attendance'
  const [selectedSem, setSelectedSem] = useState('semester1');
  const [isDownloading, setIsDownloading] = useState(false);

  const displayStudents = useMemo(() => {
    return students.filter(s => {
      const matchYear = filterYear === 'ALL' || s.year === filterYear;
      const matchBranch = filterBranch === 'ALL' || s.branch === filterBranch;
      return matchYear && matchBranch;
    });
  }, [students, filterYear, filterBranch]);

  useEffect(() => {
    if (displayStudents.length > 0 && !displayStudents.some(s => s.id === selectedStudentId)) {
      setSelectedStudentId(displayStudents[0].id);
    }
  }, [displayStudents, selectedStudentId]);

  const selectedStudent = useMemo(() => {
    return students.find(s => s.id === selectedStudentId) || students[0];
  }, [students, selectedStudentId]);

  const studentMarks = useMemo(() => {
    return selectedStudent ? getStudentMarks(selectedStudent.id) : { semester1: [], semester2: [] };
  }, [selectedStudent]);

  const studentAttendance = useMemo(() => {
    return selectedStudent ? getStudentAttendance(selectedStudent.id) : [];
  }, [selectedStudent]);

  const handleDownload = async () => {
    setIsDownloading(true);
    showToast('Generating official report PDF...', 'info', 2000);

    const elementId = reportType === 'result' ? 'printable-result-sheet' : 'printable-attendance-sheet';
    const reportName = reportType === 'result'
      ? `${selectedStudent?.rollNumber}_${selectedSem}_Result.pdf`
      : `${selectedStudent?.rollNumber}_Attendance_Transcript.pdf`;

    const success = await downloadElementAsPdf(elementId, reportName);
    setIsDownloading(false);
    if (success) {
      showToast('Report generated and downloaded successfully.', 'success');
    }
  };

  const handlePrint = () => {
    printDocument();
  };

  return (
    <div>
      <div className="page-header">
        <div className="page-title-group">
          <h1 className="page-title">Official Academic Reports &amp; Transcripts</h1>
          <p className="page-subtitle">Generate, preview, print, and export official student result sheets and attendance certificates</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={handlePrint}
            id="faculty-print-report-btn"
          >
            <Printer size={16} />
            <span>Print Document</span>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleDownload}
            disabled={isDownloading}
            id="faculty-download-pdf-btn"
          >
            <Download size={16} />
            <span>{isDownloading ? 'Generating...' : 'Download Official PDF'}</span>
          </button>
        </div>
      </div>

      {/* Selector Toolbar */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '1.25rem' }}>
          <label className="form-label" style={{ marginBottom: '0.4rem' }}>Filter by Academic Year:</label>
          <div className="segmented-tabs" style={{ maxWidth: '600px' }}>
            {['ALL', '1st Year', '2nd Year', '3rd Year', '4th Year'].map(yr => (
              <button
                key={yr}
                type="button"
                className={`segmented-tab ${filterYear === yr ? 'active' : ''}`}
                onClick={() => setFilterYear(yr)}
                id={`report-filter-year-${yr.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <span>{yr === 'ALL' ? 'All 4 Years' : yr}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', alignItems: 'center' }}>
          <div>
            <label className="form-label">Filter Branch:</label>
            <select
              className="form-select"
              value={filterBranch}
              onChange={(e) => setFilterBranch(e.target.value)}
              id="report-branch-select"
            >
              <option value="ALL">All Engineering Branches</option>
              {BRANCHES.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label">
              Select Student ({displayStudents.length} available):
            </label>
            <select
              className="form-select"
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}
              id="report-student-select"
            >
              {displayStudents.map(s => (
                <option key={s.id} value={s.id}>
                  [{s.year} • {s.branch.includes('AIML') ? 'AIML' : s.branch.includes('CSE') ? 'CSE' : s.branch.includes('ECE') ? 'ECE' : s.branch.includes('EEE') ? 'EEE' : s.branch.includes('MECH') ? 'MECH' : 'CIVIL'}] {s.rollNumber} — {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label">Report Type:</label>
            <div className="segmented-tabs">
              <button
                type="button"
                className={`segmented-tab ${reportType === 'result' ? 'active' : ''}`}
                onClick={() => setReportType('result')}
                id="report-type-result-btn"
              >
                <Award size={16} />
                <span>Result Transcript</span>
              </button>
              <button
                type="button"
                className={`segmented-tab ${reportType === 'attendance' ? 'active' : ''}`}
                onClick={() => setReportType('attendance')}
                id="report-type-attendance-btn"
              >
                <CheckSquare size={16} />
                <span>Attendance Certificate</span>
              </button>
            </div>
          </div>

          {reportType === 'result' && (
            <div>
              <label className="form-label">Semester:</label>
              <div className="segmented-tabs">
                <button
                  type="button"
                  className={`segmented-tab ${selectedSem === 'semester1' ? 'active' : ''}`}
                  onClick={() => setSelectedSem('semester1')}
                >
                  <span>Semester 1</span>
                </button>
                <button
                  type="button"
                  className={`segmented-tab ${selectedSem === 'semester2' ? 'active' : ''}`}
                  onClick={() => setSelectedSem('semester2')}
                >
                  <span>Semester 2</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Rendered Printable Sheet */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        {reportType === 'result' ? (
          <ResultPdfTemplate
            student={selectedStudent}
            semesterKey={selectedSem}
            marks={studentMarks[selectedSem] || []}
          />
        ) : (
          <AttendancePdfTemplate
            student={selectedStudent}
            attendance={studentAttendance}
          />
        )}
      </div>
    </div>
  );
}
