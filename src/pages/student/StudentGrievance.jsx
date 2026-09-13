import React, { useState, useMemo } from 'react';
import {
  MessageSquarePlus,
  Send,
  CheckCircle2,
  Clock,
  AlertCircle,
  HelpCircle,
  Filter,
  Sparkles,
  ShieldCheck,
  Tag,
  Calendar,
  User,
  Phone
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { getStudentGrievances, submitGrievance } from '../../data/storage';

const CATEGORIES = [
  'Attendance & FRS Biometrics',
  'Academic & Classwork',
  'Examinations & Results',
  'Campus Infrastructure & Labs',
  'Hostel & Food Mess',
  'Transportation & Bus Facility',
  'Library & Digital Resources',
  'General Suggestion'
];

export function StudentGrievance() {
  const { user } = useAuth();
  const { showToast } = useToast();

  const [grievances, setGrievances] = useState(() => getStudentGrievances(user?.id));
  const [filterType, setFilterType] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');

  // Form State
  const [formData, setFormData] = useState({
    type: 'Complaint',
    category: 'Attendance & FRS Biometrics',
    priority: 'Medium',
    subject: '',
    description: '',
    contactPhone: user?.studentPhone || user?.phone || '+91-9848022338'
  });

  const [submitting, setSubmitting] = useState(false);

  const reloadGrievances = () => {
    if (user?.id) {
      setGrievances(getStudentGrievances(user.id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.subject.trim() || !formData.description.trim()) {
      showToast('Please provide both a subject and a detailed description.', 'error');
      return;
    }

    setSubmitting(true);
    try {
      const newTicket = submitGrievance({
        studentId: user.id,
        studentName: user.name,
        rollNumber: user.rollNumber,
        studentPhone: formData.contactPhone,
        parentPhone: user.parentPhone || '',
        branch: user.branch,
        year: user.year,
        type: formData.type,
        category: formData.category,
        priority: formData.priority,
        subject: formData.subject.trim(),
        description: formData.description.trim()
      });

      showToast(`Ticket #${newTicket.id} submitted successfully. Track status below.`, 'success');
      setFormData({
        type: 'Complaint',
        category: 'Attendance & FRS Biometrics',
        priority: 'Medium',
        subject: '',
        description: '',
        contactPhone: user?.studentPhone || user?.phone || '+91-9848022338'
      });
      reloadGrievances();
    } catch (err) {
      showToast('Failed to submit grievance. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredList = useMemo(() => {
    return grievances.filter(item => {
      const matchType = filterType === 'ALL' || item.type === filterType;
      const matchStatus = filterStatus === 'ALL' || item.status === filterStatus;
      return matchType && matchStatus;
    });
  }, [grievances, filterType, filterStatus]);

  const stats = useMemo(() => {
    return {
      total: grievances.length,
      complaints: grievances.filter(g => g.type === 'Complaint').length,
      suggestions: grievances.filter(g => g.type === 'Suggestion').length,
      resolved: grievances.filter(g => g.status === 'Resolved').length
    };
  }, [grievances]);

  return (
    <div>
      <div className="page-header">
        <div className="page-title-group">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', marginBottom: '0.35rem' }}>
            <ShieldCheck size={13} />
            <span>Confidential &amp; Official Student Redressal Cell</span>
          </div>
          <h1 className="page-title">Complaints &amp; Suggestions Box</h1>
          <p className="page-subtitle">Submit academic grievances, FRS attendance queries, or constructive suggestions to faculty and administration</p>
        </div>
      </div>

      {/* Summary Chips */}
      <div className="grid-4" style={{ marginBottom: '1.75rem' }}>
        <div className="card" style={{ padding: '1.25rem' }}>
          <span className="stat-label">Total Submissions</span>
          <div className="stat-value">{stats.total}</div>
          <span className="stat-helper">All recorded tickets</span>
        </div>
        <div className="card" style={{ padding: '1.25rem' }}>
          <span className="stat-label">Complaints</span>
          <div className="stat-value" style={{ color: '#b91c1c' }}>{stats.complaints}</div>
          <span className="stat-helper">Under grievance cell review</span>
        </div>
        <div className="card" style={{ padding: '1.25rem' }}>
          <span className="stat-label">Suggestions</span>
          <div className="stat-value" style={{ color: '#065f46' }}>{stats.suggestions}</div>
          <span className="stat-helper">Campus improvement ideas</span>
        </div>
        <div className="card" style={{ padding: '1.25rem' }}>
          <span className="stat-label">Resolved / Actioned</span>
          <div className="stat-value" style={{ color: 'var(--primary-700)' }}>{stats.resolved}</div>
          <span className="stat-helper">Completed resolution</span>
        </div>
      </div>

      {/* Main Grid: Submission Form (Left) & History List (Right) */}
      <div className="grid-2-1" style={{ alignItems: 'flex-start', gap: '1.75rem' }}>
        
        {/* Left: Complaint / Suggestion Submission Form */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <MessageSquarePlus size={19} color="var(--primary-700)" />
              <span>Submit New Grievance / Suggestion</span>
            </h3>
            <span className="badge badge-primary">Direct Redressal</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label form-label-required">Submission Type</label>
                <select
                  className="form-select"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  id="grievance-type-select"
                  required
                >
                  <option value="Complaint">Complaint / Grievance</option>
                  <option value="Suggestion">Constructive Suggestion</option>
                  <option value="Feedback">Academic / Faculty Feedback</option>
                  <option value="Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Category</label>
                <select
                  className="form-select"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  id="grievance-category-select"
                  required
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label form-label-required">Priority Level</label>
                <select
                  className="form-select"
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  id="grievance-priority-select"
                >
                  <option value="Low">Low (Routine feedback)</option>
                  <option value="Medium">Medium (Standard review)</option>
                  <option value="High">High (Immediate attention)</option>
                  <option value="Urgent">Urgent (Exam / statutory urgency)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Contact Mobile for Follow-up</label>
                <input
                  type="tel"
                  className="form-input"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                  placeholder="+91-9848022338"
                  id="grievance-contact-phone"
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label form-label-required">Subject / Issue Summary</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. FRS Biometric attendance machine not recording in Block B"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                id="grievance-subject-input"
                required
              />
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label form-label-required">Detailed Description &amp; Proposed Solution</label>
              <textarea
                className="form-input"
                rows={5}
                placeholder="Provide complete facts, dates, course or venue details, and any specific suggestions..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                id="grievance-description-input"
                required
                style={{ resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                <span>Submitting as: <strong>{user?.name}</strong> ({user?.rollNumber})</span>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
                id="submit-grievance-btn"
              >
                <Send size={16} />
                <span>{submitting ? 'Submitting Ticket...' : 'Submit to Redressal Cell'}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right: Submitted Grievances & Status Tracking */}
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">My Tracked Tickets</h3>
              <span className="card-subtitle">Real-time status updates from College Redressal Cell</span>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <select
              className="form-select"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', width: 'auto' }}
              id="filter-grievance-type"
            >
              <option value="ALL">All Types</option>
              <option value="Complaint">Complaints Only</option>
              <option value="Suggestion">Suggestions Only</option>
            </select>

            <select
              className="form-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', width: 'auto' }}
              id="filter-grievance-status"
            >
              <option value="ALL">All Statuses</option>
              <option value="Under Review">Under Review</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredList.length > 0 ? (
              filteredList.map(item => (
                <div
                  key={item.id}
                  style={{
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.1rem',
                    backgroundColor: '#ffffff',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  id={`grievance-card-${item.id}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontFamily: 'monospace', fontWeight: '800', color: 'var(--primary-800)', fontSize: '0.85rem' }}>
                        #{item.id}
                      </span>
                      <span
                        className="badge"
                        style={{
                          fontSize: '0.7rem',
                          backgroundColor: item.type === 'Complaint' ? '#fee2e2' : '#dcfce7',
                          color: item.type === 'Complaint' ? '#991b1b' : '#166534'
                        }}
                      >
                        {item.type}
                      </span>
                    </div>

                    <span
                      className="badge"
                      style={{
                        fontSize: '0.725rem',
                        backgroundColor:
                          item.status === 'Resolved' ? '#dcfce7' :
                          item.status === 'In Progress' ? '#fef3c7' : '#eff6ff',
                        color:
                          item.status === 'Resolved' ? '#166534' :
                          item.status === 'In Progress' ? '#92400e' : '#1e40af'
                      }}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {item.subject}
                  </h4>

                  <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.6rem' }}>
                    <span>📁 <strong>Category:</strong> {item.category}</span>
                    <span>📅 <strong>Date:</strong> {item.createdAt}</span>
                    <span>⚡ <strong>Priority:</strong> {item.priority}</span>
                  </div>

                  {item.response && (
                    <div style={{ marginTop: '0.75rem', padding: '0.6rem 0.85rem', backgroundColor: '#f8fafc', borderLeft: '3px solid var(--primary-600)', borderRadius: '4px', fontSize: '0.8rem', color: '#1e293b' }}>
                      <div style={{ fontWeight: '700', color: 'var(--primary-800)', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <CheckCircle2 size={13} />
                        <span>Administrative Response:</span>
                      </div>
                      <div>{item.response}</div>
                      {item.resolvedAt && (
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                          Resolved on: {item.resolvedAt}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div style={{ padding: '2.5rem 1rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                No grievances or suggestions found in this view.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
