import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Sidebar } from '../../components/common/Sidebar';
import { Header } from '../../components/common/Header';

export function FacultyLayout() {
  const { user, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Loading faculty session...</div>
      </div>
    );
  }

  // Access Control Guard
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'faculty') {
    return <Navigate to="/student/dashboard" replace />;
  }

  return (
    <div className="app-container">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="main-wrapper">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="content-body">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
