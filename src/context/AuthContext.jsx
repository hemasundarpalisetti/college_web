import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getCurrentUser,
  setCurrentUser,
  clearCurrentUser,
  getStudents,
  getFaculty,
  initializeStorage
} from '../data/storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize storage & check session on mount
  useEffect(() => {
    initializeStorage();
    const storedUser = getCurrentUser();
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = (username, password, role) => {
    const cleanUsername = (username || '').trim().toLowerCase();
    const cleanPassword = (password || '').trim();

    if (!cleanUsername || !cleanPassword) {
      return { success: false, error: 'Please enter both username and password.' };
    }

    if (role === 'student') {
      const students = getStudents();
      const matched = students.find(
        s => s.username.toLowerCase() === cleanUsername && s.password === cleanPassword
      );

      if (matched) {
        const authUser = {
          ...matched,
          role: 'student'
        };
        setUser(authUser);
        setCurrentUser(authUser);
        return { success: true, user: authUser };
      }
      return { success: false, error: 'Invalid student username or password.' };
    }

    if (role === 'faculty') {
      const facultyList = getFaculty();
      const matched = facultyList.find(
        f => f.username.toLowerCase() === cleanUsername && f.password === cleanPassword
      );

      if (matched) {
        const authUser = {
          ...matched,
          role: 'faculty'
        };
        setUser(authUser);
        setCurrentUser(authUser);
        return { success: true, user: authUser };
      }
      return { success: false, error: 'Invalid faculty credentials.' };
    }

    return { success: false, error: 'Invalid user role specified.' };
  };

  const logout = () => {
    setUser(null);
    clearCurrentUser();
  };

  const refreshUser = () => {
    const current = getCurrentUser();
    if (current) {
      if (current.role === 'student') {
        const students = getStudents();
        const updated = students.find(s => s.id === current.id);
        if (updated) {
          const authUser = { ...updated, role: 'student' };
          setUser(authUser);
          setCurrentUser(authUser);
        }
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, role: user?.role || null, loading, login, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
