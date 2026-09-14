import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Users,
  CheckSquare,
  Award,
  AlertTriangle,
  UserPlus,
  FileSpreadsheet,
  FileText,
  Search,
  Eye,
  Edit,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { getStudents, getAllMarks, getAllAttendance } from '../../data/storage';
import { calculateStudentSummary } from '../../utils/calculations';
import { StatCard } from '../../components/common/StatCard';

export function FacultyDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('ALL');

  const students = useMemo(() => getStudents(), []);
  const allMarks = useMemo(() => getAllMarks(), []);
  const allAttendance = useMemo(() => getAllAttendance(), []);

  // Compute aggregate statistics across all students
  const studentMetrics = useMemo(() => {
    let totalAttSum = 0;
    let totalMarksSum = 0;
    let passedCount = 0;
    let attentionCount = 0;

    const yearCounts = {
      '1st Year': 0,
      '2nd Year': 0,
      '3rd Year': 0,
      '4th Year': 0
    };

    const list = students.map(s => {
      const summary = calculateStudentSummary(s.id, allMarks, allAttendance);
      const attPct = summary.attendance.overallPercentage;
      const marksPct = summary.overallPercentage;
      const isPassed = summary.overallStatus === 'Passed';
      const needsAttention = attPct < 75 || marksPct < 50;

      totalAttSum += attPct;
      totalMarksSum += marksPct;
      if (isPassed) passedCount++;
      if (needsAttention) attentionCount++;
      if (yearCounts[s.year] !== undefined) yearCounts[s.year]++;

      return {
        ...s,
        attPct,
        marksPct,
        sgpa: summary.sem2.sgpa || summary.sem1.sgpa,
        isPassed,
        needsAttention
      };
    });

    const count = students.length || 1;
    return {
      list,
      totalStudents: students.length,
      avgAttendance: parseFloat((totalAttSum / count).toFixed(1)),
      avgMarks: parseFloat((totalMarksSum / count).toFixed(1)),
      passedCount,
      attentionCount,
      yearCounts
    };
  }, [students, allMarks, allAttendance]);

  const filteredStudents = useMemo(() => {
    return studentMetrics.list.filter(s => {
      const matchYear = filterYear === 'ALL' || s.year === filterYear;
      if (!searchTerm.trim()) return matchYear;
      const q = searchTerm.toLowerCase();
      const matchSearch =
        s.name.toLowerCase().includes(q) ||
        s.rollNumber.toLowerCase().includes(q) ||
        s.username.toLowerCase().includes(q) ||
        s.branch.toLowerCase().includes(q);
      return matchYear && matchSearch;
    });
  }, [studentMetrics.list, searchTerm, filterYear]);

  return (
    <div>
      {/* Welcome Hero Banner */}
      <div className="profile-hero" style={{ marginBottom: '2rem' }}>
        <div className="avatar-large" style={{ backgroundColor: '#ffffff', color: 'var(--primary-800)' }}>
          {user?.avatar || 'FC'}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(255, 255, 255, 0.16)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            <ShieldCheck size={14} />
            <span>Faculty Academic Control Center</span>
          </div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 0.25rem 0' }}>
            Welcome, {user?.name}
          </h1>
          <p style={{ fontSize: '0.925rem', color: '#dbeafe', margin: 0 }}>
            {user?.designation} • {user?.department} • ID: <strong>{user?.facultyId}</strong>
          </p>
        </div>
      </div>

      {/* 5 Summary Stat Cards */}
      <div className="grid-4" style={{ marginBottom: '2rem' }}>
        <StatCard
          title="Total Enrolled Students"
          value={studentMetrics.totalStudents}
          helper="Autonomous B.Tech Batch"
          icon={Users}
          variant="primary"
          onClick={() => navigate('/faculty/students')}
        />
        <StatCard
          title="Average Attendance"
          value={`${studentMetrics.avgAttendance}%`}
          helper="Across all registered courses"
          icon={CheckSquare}
          variant={studentMetrics.avgAttendance >= 75 ? 'success' : 'warning'}
          onClick={() => navigate('/faculty/attendance')}
        />
        <StatCard
          title="Average Class Marks"
          value={`${studentMetrics.avgMarks}%`}
          helper="Semester 1 & 2 Aggregate"
          icon={Award}
          variant="primary"
          onClick={() => navigate('/faculty/marks')}
        />
        <StatCard
          title="Students Needing Attention"
          value={studentMetrics.attentionCount}
          helper="Attendance < 75% or Marks < 50%"
          icon={AlertTriangle}
          variant={studentMetrics.attentionCount > 0 ? 'danger' : 'success'}
          onClick={() => navigate('/faculty/students')}
        />
      </div>

      {/* Quick Action Navigation Grid */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header">
          <h3 className="card-title">Quick Academic Actions</h3>
          <span className="card-subtitle">Direct shortcuts to faculty management modules</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <Link
            to="/faculty/students"
            className="btn btn-outline"
            style={{ padding: '1rem 1.25rem', justifyContent: 'flex-start', textAlign: 'left', borderRadius: 'var(--radius-lg)' }}
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'var(--primary-50)', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.75rem' }}>
              <UserPlus size={20} />
            </div>
            <div>
              <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Student Directory</div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Add, edit &amp; reset passwords</div>
            </div>
          </Link>

          <Link
            to="/faculty/marks"
            className="btn btn-outline"
            style={{ padding: '1rem 1.25rem', justifyContent: 'flex-start', textAlign: 'left', borderRadius: 'var(--radius-lg)' }}
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'var(--primary-50)', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.75rem' }}>
              <Award size={20} />
            </div>
            <div>
              <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Manage Marks</div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Edit Internal &amp; External scores</div>
            </div>
          </Link>

          <Link
            to="/faculty/attendance"
            className="btn btn-outline"
            style={{ padding: '1rem 1.25rem', justifyContent: 'flex-start', textAlign: 'left', borderRadius: 'var(--radius-lg)' }}
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'var(--primary-50)', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.75rem' }}>
              <CheckSquare size={20} />
            </div>
            <div>
              <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Manage Attendance</div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Update counts &amp; percentages</div>
            </div>
          </Link>

          <Link
            to="/faculty/reports"
            className="btn btn-outline"
            style={{ padding: '1rem 1.25rem', justifyContent: 'flex-start', textAlign: 'left', borderRadius: 'var(--radius-lg)' }}
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'var(--primary-50)', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.75rem' }}>
              <FileText size={20} />
            </div>
            <div>
              <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Generate Reports</div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Official result &amp; attendance PDFs</div>
            </div>
          </Link>
        </div>
      </div>

      {/* 4-Year Cohort Quick Filter Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {[
          { key: 'ALL', label: 'All 4 Years', count: studentMetrics.totalStudents },
          { key: '1st Year', label: '1st Year', count: studentMetrics.yearCounts['1st Year'] },
          { key: '2nd Year', label: '2nd Year', count: studentMetrics.yearCounts['2nd Year'] },
          { key: '3rd Year', label: '3rd Year', count: studentMetrics.yearCounts['3rd Year'] },
          { key: '4th Year', label: '4th Year', count: studentMetrics.yearCounts['4th Year'] }
        ].map(cohort => (
          <button
            key={cohort.key}
            type="button"
            className="card"
            onClick={() => setFilterYear(cohort.key)}
            style={{
              padding: '0.85rem 1.1rem',
              cursor: 'pointer',
              border: filterYear === cohort.key ? '2px solid var(--primary-600)' : '1px solid var(--border-subtle)',
              backgroundColor: filterYear === cohort.key ? 'var(--primary-50)' : '#ffffff',
              textAlign: 'left',
              transition: 'all 0.15s ease'
            }}
            id={`dashboard-cohort-${cohort.key.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: filterYear === cohort.key ? 'var(--primary-800)' : 'var(--text-secondary)' }}>
              {cohort.label}
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '900', color: filterYear === cohort.key ? 'var(--primary-900)' : 'var(--text-primary)', marginTop: '0.15rem' }}>
              {cohort.count} <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>students</span>
            </div>
          </button>
        ))}
      </div>

      {/* Student Roster Preview */}
      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Enrolled Students Overview ({filterYear === 'ALL' ? 'All 4 Years' : filterYear})</h3>
            <span className="card-subtitle">Real-time academic records across all students</span>
          </div>

          <div style={{ width: '280px', maxWidth: '100%' }}>
            <div className="search-input-wrapper">
              <Search className="search-icon" size={16} />
              <input
                type="text"
                className="form-input search-input"
                placeholder="Search by name or roll..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="table-container">
          <table className="table table-wide">
            <thead>
              <tr>
                <th>Roll Number</th>
                <th>Student Name</th>
                <th>Branch &amp; Year</th>
                <th>Semester</th>
                <th style={{ textAlign: 'center' }}>Attendance</th>
                <th style={{ textAlign: 'center' }}>Avg Marks</th>
                <th style={{ textAlign: 'center' }}>Current SGPA</th>
                <th style={{ textAlign: 'center' }}>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.id}>
                  <td style={{ fontWeight: '700', color: 'var(--primary-800)', fontFamily: 'monospace' }}>
                    {student.rollNumber}
                  </td>
                  <td>
                    <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{student.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{student.email}</div>
                  </td>
                  <td>
                    <div style={{ fontWeight: '500', color: 'var(--text-primary)' }}>{student.branch}</div>
                    <span
                      className="badge"
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: '700',
                        marginTop: '0.2rem',
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
                      {student.isPassed ? 'Pass' : 'ATKT'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', gap: '0.4rem' }}>
                      <Link
                        to={`/faculty/students/${student.id}`}
                        className="btn btn-outline btn-sm"
                        title="View Complete Academic Profile"
                        id={`view-student-${student.id}`}
                      >
                        <Eye size={14} />
                        <span>View</span>
                      </Link>
                      <Link
                        to={`/faculty/students?edit=${student.id}`}
                        className="btn btn-secondary btn-sm"
                        title="Edit Student Information"
                      >
                        <Edit size={14} />
                        <span>Edit</span>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
