import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';

// Pages
import { HomePage } from './pages/home/HomePage';
import { LoginPage } from './pages/auth/LoginPage';

// Student Pages
import { StudentLayout } from './pages/student/StudentLayout';
import { StudentDashboard } from './pages/student/StudentDashboard';
import { StudentProfile } from './pages/student/StudentProfile';
import { StudentAttendance } from './pages/student/StudentAttendance';
import { StudentMarks } from './pages/student/StudentMarks';
import { StudentResults } from './pages/student/StudentResults';
import { StudentGrievance } from './pages/student/StudentGrievance';

// Faculty Pages
import { FacultyLayout } from './pages/faculty/FacultyLayout';
import { FacultyDashboard } from './pages/faculty/FacultyDashboard';
import { FacultyStudents } from './pages/faculty/FacultyStudents';
import { FacultyStudentDetail } from './pages/faculty/FacultyStudentDetail';
import { FacultyAttendance } from './pages/faculty/FacultyAttendance';
import { FacultyMarks } from './pages/faculty/FacultyMarks';
import { FacultyReports } from './pages/faculty/FacultyReports';
import { FacultyProfile } from './pages/faculty/FacultyProfile';

export default function App() {
  return (
    <HashRouter>
      <ToastProvider>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Student Protected Routes */}
            <Route path="/student" element={<StudentLayout />}>
              <Route index element={<Navigate to="/student/dashboard" replace />} />
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route path="attendance" element={<StudentAttendance />} />
              <Route path="marks" element={<StudentMarks />} />
              <Route path="results" element={<StudentResults />} />
              <Route path="grievance" element={<StudentGrievance />} />
              <Route path="grievances" element={<Navigate to="/student/grievance" replace />} />
            </Route>

            {/* Faculty Protected Routes */}
            <Route path="/faculty" element={<FacultyLayout />}>
              <Route index element={<Navigate to="/faculty/dashboard" replace />} />
              <Route path="dashboard" element={<FacultyDashboard />} />
              <Route path="students" element={<FacultyStudents />} />
              <Route path="students/:id" element={<FacultyStudentDetail />} />
              <Route path="attendance" element={<FacultyAttendance />} />
              <Route path="marks" element={<FacultyMarks />} />
              <Route path="reports" element={<FacultyReports />} />
              <Route path="profile" element={<FacultyProfile />} />
            </Route>

            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </ToastProvider>
    </HashRouter>
  );
}
