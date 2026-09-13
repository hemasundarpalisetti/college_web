import React, { useState, useMemo } from 'react';
import { Download, Printer, FileSpreadsheet, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { getStudentMarks } from '../../data/storage';
import { calculateGrade, calculateTotal, calculatePercentage, calculateSGPA } from '../../utils/calculations';
import { downloadElementAsPdf, printDocument } from '../../utils/pdfGenerator';
import { ResultPdfTemplate } from '../../components/pdf/ResultPdfTemplate';

export function StudentResults() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [selectedSem, setSelectedSem] = useState('semester1'); // 'semester1' | 'semester2'
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const marksData = useMemo(() => getStudentMarks(user?.id), [user?.id]);
  const currentSubjectList = marksData?.[selectedSem] || [];

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    showToast('Generating official semester result PDF...', 'info', 2000);
    const semName = selectedSem === 'semester1' ? 'Sem1' : 'Sem2';
    const filename = `${user?.rollNumber || 'Student'}_${semName}_Result.pdf`;

    const success = await downloadElementAsPdf('printable-result-sheet', filename);
    setIsGeneratingPdf(false);
    if (success) {
      showToast('Result PDF downloaded successfully!', 'success');
    }
  };

  const handlePrint = () => {
    printDocument();
  };

  return (
    <div>
      <div className="page-header">
        <div className="page-title-group">
          <h1 className="page-title">Semester Results &amp; Transcripts</h1>
          <p className="page-subtitle">Official Autonomous Grade Sheets &amp; Downloadable PDF Result Transcripts</p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={handlePrint}
            id="print-result-btn"
          >
            <Printer size={16} />
            <span>Print Sheet</span>
          </button>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            id="download-result-pdf-btn"
          >
            <Download size={16} />
            <span>{isGeneratingPdf ? 'Generating PDF...' : 'Download Result PDF'}</span>
          </button>
        </div>
      </div>

      {/* Semester Selector Tabs */}
      <div className="segmented-tabs" style={{ maxWidth: '540px', marginBottom: '2rem' }}>
        <button
          type="button"
          className={`segmented-tab ${selectedSem === 'semester1' ? 'active' : ''}`}
          onClick={() => setSelectedSem('semester1')}
          id="sem1-tab-btn"
        >
          <FileSpreadsheet size={16} />
          <span>1st Year - 1st Sem Result (1-1)</span>
        </button>
        <button
          type="button"
          className={`segmented-tab ${selectedSem === 'semester2' ? 'active' : ''}`}
          onClick={() => setSelectedSem('semester2')}
          id="sem2-tab-btn"
        >
          <FileSpreadsheet size={16} />
          <span>1st Year - 2nd Sem Result (1-2)</span>
        </button>
      </div>

      {/* Official Rendered Result Sheet Container */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <ResultPdfTemplate
          student={user}
          semesterKey={selectedSem}
          marks={currentSubjectList}
        />
      </div>
    </div>
  );
}
