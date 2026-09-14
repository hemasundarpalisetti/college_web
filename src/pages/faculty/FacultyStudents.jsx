import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Eye,
  Edit,
  KeyRound,
  CheckCircle2,
  AlertCircle,
  X,
  Lock,
  Mail,
  Phone,
  BookOpen,
  Building
} from 'lucide-react';
import { getStudents, addStudent, updateStudent, resetStudentPassword, getAllMarks, getAllAttendance } from '../../data/storage';
import { BRANCHES } from '../../data/initialData';
import { calculateStudentSummary } from '../../utils/calculations';
import { validateStudentForm } from '../../utils/validators';
import { useToast } from '../../context/ToastContext';
import { Modal } from '../../components/common/Modal';
import { StudentAvatar } from '../../components/common/StudentAvatar';

export function FacultyStudents() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBranch, setFilterBranch] = useState('ALL');
  const [filterYear, setFilterYear] = useState('ALL');

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    username: '',
    password: '',
    branch: 'Artificial Intelligence & Machine Learning (AIML)',
    year: '2nd Year',
    semester: 'Semester 3',
    section: 'A',
    email: '',
    phone: '',
    studentPhone: '',
    parentPhone: '',
    parentName: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [newPassword, setNewPassword] = useState('');

  // Reload data helper
  const reloadStudents = () => {
    const list = getStudents();
    const allMarks = getAllMarks();
    const allAttendance = getAllAttendance();

    const enriched = list.map(s => {
      const summary = calculateStudentSummary(s.id, allMarks, allAttendance);
      return {
        ...s,
        attPct: summary.attendance.overallPercentage,
        marksPct: summary.overallPercentage,
        sgpa: summary.sem2.sgpa || summary.sem1.sgpa,
        isPassed: summary.overallStatus === 'Passed'
      };
    });

    setStudents(enriched);
  };

  useEffect(() => {
    reloadStudents();
  }, []);

  // Check URL query param e.g. ?edit=S001
  useEffect(() => {
    const editId = searchParams.get('edit');
    if (editId && students.length > 0) {
      const target = students.find(s => s.id === editId);
      if (target) {
        handleOpenEdit(target);
      }
    }
  }, [searchParams, students]);

  // Year counts summary
  const yearCounts = useMemo(() => {
    return {
      ALL: students.length,
      '1st Year': students.filter(s => s.year === '1st Year').length,
      '2nd Year': students.filter(s => s.year === '2nd Year').length,
      '3rd Year': students.filter(s => s.year === '3rd Year').length,
      '4th Year': students.filter(s => s.year === '4th Year').length,
    };
  }, [students]);

  // Filtered student list
  const filteredStudents = useMemo(() => {
    return students.filter(s => {
      const matchSearch =
        !searchTerm.trim() ||
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (s.parentName && s.parentName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (s.parentPhone && s.parentPhone.includes(searchTerm));

      const matchBranch = filterBranch === 'ALL' || s.branch === filterBranch;
      const matchYear = filterYear === 'ALL' || s.year === filterYear;
      return matchSearch && matchBranch && matchYear;
    });
  }, [students, searchTerm, filterBranch, filterYear]);

  // Open Add Student Modal
  const handleOpenAdd = () => {
    const nextNum = String(students.length + 1).padStart(2, '0');
    setFormData({
      name: '',
      rollNumber: `25W61A61${nextNum}`,
      username: `25W61A61${nextNum}`,
      password: 'student123',
      branch: 'Artificial Intelligence & Machine Learning (AIML)',
      year: '2nd Year',
      semester: 'Semester 3',
      section: 'A',
      email: '',
      phone: '+91 98480 22338',
      studentPhone: '+91 98480 22338',
      parentPhone: '+91 94401 55622',
      parentName: ''
    });
    setFormErrors({});
    setIsAddModalOpen(true);
  };

  // Submit Add Student
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const validation = validateStudentForm(formData, students, false);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      showToast('Please fix the errors in the form.', 'error');
      return;
    }

    try {
      const created = addStudent(formData);
      showToast(`Student ${created.name} (${created.rollNumber}) added successfully.`, 'success');
      setIsAddModalOpen(false);
      reloadStudents();
    } catch (err) {
      showToast('Failed to add student. Please try again.', 'error');
    }
  };

  // Open Edit Student Modal
  const handleOpenEdit = (student) => {
    setSelectedStudent(student);
    setFormData({
      name: student.name,
      rollNumber: student.rollNumber,
      username: student.username,
      password: student.password || '',
      branch: student.branch,
      year: student.year,
      semester: student.semester,
      section: student.section,
      email: student.email || '',
      phone: student.studentPhone || student.phone || '',
      studentPhone: student.studentPhone || student.phone || '',
      parentPhone: student.parentPhone || '',
      parentName: student.parentName || ''
    });
    setFormErrors({});
    setIsEditModalOpen(true);
  };

  // Submit Edit Student
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!selectedStudent) return;

    const validation = validateStudentForm(formData, students, true, selectedStudent.id);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      showToast('Please fix the errors in the form.', 'error');
      return;
    }

    const updated = updateStudent(selectedStudent.id, formData);
    if (updated) {
      showToast('Student details updated successfully.', 'success');
      setIsEditModalOpen(false);
      setSearchParams({});
      reloadStudents();
    }
  };

  // Submit Reset Password
  const handlePasswordResetSubmit = (e) => {
    e.preventDefault();
    if (!selectedStudent || !newPassword || newPassword.length < 4) {
      showToast('Password must be at least 4 characters.', 'error');
      return;
    }

    resetStudentPassword(selectedStudent.id, newPassword);
    showToast(`Password reset successfully for ${selectedStudent.name}.`, 'success');
    setIsPasswordModalOpen(false);
    setNewPassword('');
    reloadStudents();
  };

  return (
    <div>
      <div className="page-header">
        <div className="page-title-group">
          <h1 className="page-title">Student Management Directory</h1>
          <p className="page-subtitle">Add, edit, inspect complete academic profiles, and manage student credentials</p>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleOpenAdd}
          id="add-student-btn"
        >
          <UserPlus size={18} />
          <span>Add New Student</span>
        </button>
      </div>

      {/* Year Filter Tabs */}
      <div className="segmented-tabs" style={{ maxWidth: '680px', marginBottom: '1.25rem' }}>
        {[
          { key: 'ALL', label: `All 4 Years (${yearCounts.ALL})` },
          { key: '1st Year', label: `1st Year (${yearCounts['1st Year']})` },
          { key: '2nd Year', label: `2nd Year (${yearCounts['2nd Year']})` },
          { key: '3rd Year', label: `3rd Year (${yearCounts['3rd Year']})` },
          { key: '4th Year', label: `4th Year (${yearCounts['4th Year']})` }
        ].map(tab => (
          <button
            key={tab.key}
            type="button"
            className={`segmented-tab ${filterYear === tab.key ? 'active' : ''}`}
            onClick={() => setFilterYear(tab.key)}
            id={`filter-year-${tab.key.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Filter and Search Bar */}
      <div className="card" style={{ marginBottom: '1.5rem', padding: '1.25rem 1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ flex: '1 1 280px', maxWidth: '380px' }}>
            <div className="search-input-wrapper">
              <Search className="search-icon" size={16} />
              <input
                type="text"
                className="form-input search-input"
                placeholder="Search by name, roll number, or username..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                id="search-students-input"
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Filter size={15} color="var(--text-muted)" />
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Year:</span>
              <select
                className="form-select"
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                style={{ width: 'auto', minWidth: '130px' }}
                id="filter-year-select"
              >
                <option value="ALL">All 4 Years</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Building size={15} color="var(--text-muted)" />
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Branch:</span>
              <select
                className="form-select"
                value={filterBranch}
                onChange={(e) => setFilterBranch(e.target.value)}
                style={{ width: 'auto', minWidth: '220px' }}
                id="filter-branch-select"
              >
                <option value="ALL">All Engineering Branches</option>
                {BRANCHES.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="card">
        <div className="table-container">
          <table className="table table-wide">
            <thead>
              <tr>
                <th>Roll Number</th>
                <th>Student Name</th>
                <th>Username</th>
                <th>Branch &amp; Year</th>
                <th>Semester</th>
                <th style={{ textAlign: 'center' }}>Attendance</th>
                <th style={{ textAlign: 'center' }}>Avg Marks</th>
                <th style={{ textAlign: 'center' }}>SGPA</th>
                <th style={{ textAlign: 'center' }}>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map(student => (
                  <tr key={student.id}>
                    <td style={{ fontWeight: '700', color: 'var(--primary-800)', fontFamily: 'monospace' }}>
                      {student.rollNumber}
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <StudentAvatar student={student} size={38} shape="circle" />
                        <div>
                          <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{student.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{student.email}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#1e40af', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span>📱 <strong>Student:</strong> {student.studentPhone || student.phone || 'N/A'}</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#065f46', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span>👨‍👩‍👦 <strong>Parent:</strong> {student.parentPhone || 'N/A'}</span>
                      </div>
                    </td>
                    <td style={{ fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                      {student.username}
                    </td>
                    <td>
                      <div style={{ fontWeight: '500', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{student.branch}</div>
                      <span
                        className="badge"
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          backgroundColor:
                            student.year === '1st Year' ? '#dbeafe' :
                            student.year === '2nd Year' ? '#d1fae5' :
                            student.year === '3rd Year' ? '#fef3c7' : '#ede9fe',
                          color:
                            student.year === '1st Year' ? '#1e40af' :
                            student.year === '2nd Year' ? '#065f46' :
                            student.year === '3rd Year' ? '#92400e' : '#5b21b6'
                        }}
                      >
                        {student.year}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontWeight: '600' }}>{student.semester}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sec {student.section}</div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`badge ${student.attPct >= 75 ? 'badge-success' : 'badge-danger'}`}>
                        {student.attPct}%
                      </span>
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: '700' }}>
                      {student.marksPct}%
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: '800', color: 'var(--primary-700)' }}>
                      {student.sgpa.toFixed(2)}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`badge ${student.isPassed ? 'badge-success' : 'badge-danger'}`}>
                        {student.isPassed ? 'Passed' : 'ATKT'}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '0.35rem' }}>
                        <Link
                          to={`/faculty/students/${student.id}`}
                          className="btn btn-outline btn-sm"
                          title="View 360 Academic Profile"
                          id={`view-profile-btn-${student.id}`}
                        >
                          <Eye size={14} />
                          <span>View</span>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={() => handleOpenEdit(student)}
                          title="Edit Student Details"
                          id={`edit-btn-${student.id}`}
                        >
                          <Edit size={14} />
                          <span>Edit</span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline btn-sm btn-icon-only"
                          onClick={() => {
                            setSelectedStudent(student);
                            setNewPassword('');
                            setIsPasswordModalOpen(true);
                          }}
                          title="Reset Password"
                          id={`pwd-btn-${student.id}`}
                        >
                          <KeyRound size={14} color="var(--primary-700)" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                    No students match the search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 1. ADD STUDENT MODAL */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Enroll New Student"
        size="lg"
      >
        <form onSubmit={handleAddSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label form-label-required">Student Full Name</label>
              <input
                type="text"
                className={`form-input ${formErrors.name ? 'error' : ''}`}
                placeholder="e.g. Aarav Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              {formErrors.name && <span className="form-error">{formErrors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Roll Number / USN</label>
              <input
                type="text"
                className={`form-input ${formErrors.rollNumber ? 'error' : ''}`}
                placeholder="e.g. 21AIETCS006"
                value={formData.rollNumber}
                onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                required
              />
              {formErrors.rollNumber && <span className="form-error">{formErrors.rollNumber}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label form-label-required">Portal Username</label>
              <input
                type="text"
                className={`form-input ${formErrors.username ? 'error' : ''}`}
                placeholder="e.g. student06"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
              {formErrors.username && <span className="form-error">{formErrors.username}</span>}
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Initial Password</label>
              <input
                type="text"
                className={`form-input ${formErrors.password ? 'error' : ''}`}
                placeholder="Initial login password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              {formErrors.password && <span className="form-error">{formErrors.password}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label form-label-required">Branch / Discipline</label>
              <select
                className="form-select"
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
              >
                {BRANCHES.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Year of Study</label>
              <select
                className="form-select"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              >
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label form-label-required">Semester</label>
              <select
                className="form-select"
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
              >
                <option value="Semester 1">Semester 1 (1-1)</option>
                <option value="Semester 2">Semester 2 (1-2)</option>
                <option value="Semester 3">Semester 3 (2-1)</option>
                <option value="Semester 4">Semester 4 (2-2)</option>
                <option value="Semester 5">Semester 5 (3-1)</option>
                <option value="Semester 6">Semester 6 (3-2)</option>
                <option value="Semester 7">Semester 7 (4-1)</option>
                <option value="Semester 8">Semester 8 (4-2)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Section</label>
              <select
                className="form-select"
                value={formData.section}
                onChange={(e) => setFormData({ ...formData, section: e.target.value })}
              >
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Student Mobile Number</label>
              <input
                type="tel"
                className={`form-input ${formErrors.phone ? 'error' : ''}`}
                placeholder="e.g. +91 98480 22338"
                value={formData.studentPhone}
                onChange={(e) => setFormData({ ...formData, studentPhone: e.target.value, phone: e.target.value })}
              />
              {formErrors.phone && <span className="form-error">{formErrors.phone}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Parent Mobile Number</label>
              <input
                type="tel"
                className="form-input"
                placeholder="e.g. +91 94401 55622"
                value={formData.parentPhone}
                onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Parent / Guardian Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. B. Narayana Rao"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className={`form-input ${formErrors.email ? 'error' : ''}`}
                placeholder="e.g. student@srisivani.edu.in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {formErrors.email && <span className="form-error">{formErrors.email}</span>}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
            <button type="button" className="btn btn-outline" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" id="save-new-student-btn">
              <UserPlus size={16} />
              <span>Save &amp; Enroll Student</span>
            </button>
          </div>
        </form>
      </Modal>

      {/* 2. EDIT STUDENT MODAL */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSearchParams({});
        }}
        title={`Edit Details: ${selectedStudent?.name}`}
        size="lg"
      >
        <form onSubmit={handleEditSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label form-label-required">Student Full Name</label>
              <input
                type="text"
                className={`form-input ${formErrors.name ? 'error' : ''}`}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              {formErrors.name && <span className="form-error">{formErrors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Roll Number / USN</label>
              <input
                type="text"
                className={`form-input ${formErrors.rollNumber ? 'error' : ''}`}
                value={formData.rollNumber}
                onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                required
              />
              {formErrors.rollNumber && <span className="form-error">{formErrors.rollNumber}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label form-label-required">Username</label>
              <input
                type="text"
                className={`form-input ${formErrors.username ? 'error' : ''}`}
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
              {formErrors.username && <span className="form-error">{formErrors.username}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Password (Faculty Managed)</label>
              <input
                type="text"
                className="form-input"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Update password if needed"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label form-label-required">Branch / Discipline</label>
              <select
                className="form-select"
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
              >
                {BRANCHES.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Year of Study</label>
              <select
                className="form-select"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              >
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label form-label-required">Semester</label>
              <select
                className="form-select"
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
              >
                <option value="Semester 1">Semester 1 (1-1)</option>
                <option value="Semester 2">Semester 2 (1-2)</option>
                <option value="Semester 3">Semester 3 (2-1)</option>
                <option value="Semester 4">Semester 4 (2-2)</option>
                <option value="Semester 5">Semester 5 (3-1)</option>
                <option value="Semester 6">Semester 6 (3-2)</option>
                <option value="Semester 7">Semester 7 (4-1)</option>
                <option value="Semester 8">Semester 8 (4-2)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Section</label>
              <select
                className="form-select"
                value={formData.section}
                onChange={(e) => setFormData({ ...formData, section: e.target.value })}
              >
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Student Mobile Number</label>
              <input
                type="tel"
                className={`form-input ${formErrors.phone ? 'error' : ''}`}
                value={formData.studentPhone}
                onChange={(e) => setFormData({ ...formData, studentPhone: e.target.value, phone: e.target.value })}
              />
              {formErrors.phone && <span className="form-error">{formErrors.phone}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Parent Mobile Number</label>
              <input
                type="tel"
                className="form-input"
                value={formData.parentPhone}
                onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Parent / Guardian Name</label>
              <input
                type="text"
                className="form-input"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className={`form-input ${formErrors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                setIsEditModalOpen(false);
                setSearchParams({});
              }}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" id="save-edit-student-btn">
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </Modal>

      {/* 3. RESET PASSWORD MODAL */}
      <Modal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        title={`Reset Password: ${selectedStudent?.name}`}
      >
        <form onSubmit={handlePasswordResetSubmit}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            Set a new temporary or permanent password for <strong>{selectedStudent?.rollNumber}</strong> ({selectedStudent?.username}).
          </p>

          <div className="form-group">
            <label className="form-label form-label-required">New Student Password</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter new password (min 4 chars)"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={4}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button type="button" className="btn btn-outline" onClick={() => setIsPasswordModalOpen(false)}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <KeyRound size={16} />
              <span>Update Password</span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
