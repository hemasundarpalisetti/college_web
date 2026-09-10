import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FileText, Download, Printer, Award, CheckSquare, User, FileSpreadsheet } from 'lucide-react';
import { getStudents, getStudentMarks, getStudentAttendance } from '../../data/storage';
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

  const [selectedStudentId, setSelectedStudentId] = useState(initialStudentId);
  const [reportType, setReportType] = useState(initialType); // 'result' | 'attendance'
  const [selectedSem, setSelectedSem] = useState('semester1');
  const [isDownloading, setIsDownloading] = useState(false);

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
          <div>
            <label className="form-label">Select Student:</label>
            <select
              className="form-select"
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}
              id="report-student-select"
            >
              {students.map(s => (
                <option key={s.id} value={s.id}>
                  {s.rollNumber} — {s.name}
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
