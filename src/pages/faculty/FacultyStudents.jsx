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
import { calculateStudentSummary } from '../../utils/calculations';
import { validateStudentForm } from '../../utils/validators';
import { useToast } from '../../context/ToastContext';
import { Modal } from '../../components/common/Modal';

export function FacultyStudents() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBranch, setFilterBranch] = useState('ALL');

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
    branch: 'Computer Science & Engineering',
    year: '1st Year',
    semester: 'Semester 2',
    section: 'A',
    email: '',
    phone: ''
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
      const s = students.find(item => item.id === editId);
      if (s) {
        handleOpenEdit(s);
      }
    }
  }, [searchParams, students]);

  // Filtered student list
  const filteredStudents = useMemo(() => {
    return students.filter(s => {
      const matchSearch =
        !searchTerm.trim() ||
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.username.toLowerCase().includes(searchTerm.toLowerCase());

      const matchBranch = filterBranch === 'ALL' || s.branch === filterBranch;
      return matchSearch && matchBranch;
    });
  }, [students, searchTerm, filterBranch]);

  // Open Add Student Modal
  const handleOpenAdd = () => {
    setFormData({
      name: '',
      rollNumber: `21AIETCS00${students.length + 1}`,
      username: `student0${students.length + 1}`,
      password: 'student123',
      branch: 'Computer Science & Engineering',
      year: '1st Year',
      semester: 'Semester 2',
      section: 'A',
      email: '',
      phone: ''
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
      phone: student.phone || ''
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

      {/* Filter and Search Bar */}
      <div className="card" style={{ marginBottom: '1.5rem', padding: '1.25rem 1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Filter size={16} color="var(--text-muted)" />
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Branch:</span>
            </div>
            <select
              className="form-select"
              value={filterBranch}
              onChange={(e) => setFilterBranch(e.target.value)}
              style={{ width: 'auto', minWidth: '220px' }}
            >
              <option value="ALL">All Engineering Branches</option>
              <option value="Computer Science & Engineering">Computer Science &amp; Engineering</option>
              <option value="Information Science & Engineering">Information Science &amp; Engineering</option>
              <option value="Electronics & Communication Engg">Electronics &amp; Communication Engg</option>
            </select>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="card">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Roll Number</th>
                <th>Student Name</th>
                <th>Username</th>
                <th>Branch / Year</th>
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
                      <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{student.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{student.email}</div>
                    </td>
                    <td style={{ fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                      {student.username}
                    </td>
                    <td>
                      <div>{student.branch}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{student.year}</div>
                    </td>
                    <td>{student.semester} (Sec {student.section})</td>
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
                <option value="Computer Science & Engineering">Computer Science &amp; Engineering</option>
                <option value="Information Science & Engineering">Information Science &amp; Engineering</option>
                <option value="Electronics & Communication Engg">Electronics &amp; Communication Engg</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
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
                <option value="Semester 1">Semester 1</option>
                <option value="Semester 2">Semester 2</option>
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
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className={`form-input ${formErrors.email ? 'error' : ''}`}
                placeholder="e.g. student@apexengineering.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {formErrors.email && <span className="form-error">{formErrors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className={`form-input ${formErrors.phone ? 'error' : ''}`}
                placeholder="e.g. +91 91234 56789"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {formErrors.phone && <span className="form-error">{formErrors.phone}</span>}
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
                <option value="Computer Science & Engineering">Computer Science &amp; Engineering</option>
                <option value="Information Science & Engineering">Information Science &amp; Engineering</option>
                <option value="Electronics & Communication Engg">Electronics &amp; Communication Engg</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
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
                <option value="Semester 1">Semester 1</option>
                <option value="Semester 2">Semester 2</option>
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
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className={`form-input ${formErrors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className={`form-input ${formErrors.phone ? 'error' : ''}`}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
