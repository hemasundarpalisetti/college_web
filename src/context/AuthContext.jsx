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
      const matched = students.find(s => {
        const usernameMatch = s.username && s.username.toLowerCase() === cleanUsername;
        const rollMatch = s.rollNumber && s.rollNumber.toLowerCase() === cleanUsername;
        const aliasMatch = s.aliases && s.aliases.some(a => a.toLowerCase() === cleanUsername);
        const nameMatch = s.name && s.name.toLowerCase().replace(/[\s.]+/g, '').includes(cleanUsername.replace(/[\s.]+/g, ''));
        const isUserMatch = usernameMatch || rollMatch || aliasMatch || nameMatch;
        const isPwdMatch = s.password === cleanPassword || cleanPassword === 'student123';
        return isUserMatch && isPwdMatch;
      });

      if (matched) {
        const authUser = {
          ...matched,
          role: 'student'
        };
        setUser(authUser);
        setCurrentUser(authUser);
        return { success: true, user: authUser };
      }
      return { success: false, error: 'Invalid student Roll Number or password. (Default password: student123)' };
    }

    if (role === 'faculty') {
      const facultyList = getFaculty();
      const matched = facultyList.find(f => {
        const usernameMatch = f.username && f.username.toLowerCase() === cleanUsername;
        const idMatch = f.facultyId && f.facultyId.toLowerCase() === cleanUsername;
        const aliasMatch = f.aliases && f.aliases.some(a => a.toLowerCase() === cleanUsername);
        const nameMatch = f.name && f.name.toLowerCase().replace(/[\s.]+/g, '').includes(cleanUsername.replace(/[\s.]+/g, ''));
        const isUserMatch = usernameMatch || idMatch || aliasMatch || nameMatch;
        const isPwdMatch = f.password === cleanPassword || cleanPassword === 'faculty123';
        return isUserMatch && isPwdMatch;
      });

      if (matched) {
        const authUser = {
          ...matched,
          role: 'faculty'
        };
        setUser(authUser);
        setCurrentUser(authUser);
        return { success: true, user: authUser };
      }
      return { success: false, error: 'Invalid faculty username or password. (Default password: faculty123)' };
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
