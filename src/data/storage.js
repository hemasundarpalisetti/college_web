/**
 * Centralized LocalStorage Storage Service
 * Handles persistence, retrieval, and synchronization across the application.
 */

import {
  INITIAL_STUDENTS,
  INITIAL_FACULTY,
  INITIAL_MARKS,
  INITIAL_ATTENDANCE,
  DEFAULT_SUBJECTS_SEM1,
  DEFAULT_SUBJECTS_SEM2
} from './initialData';
import { calculateAttendance, calculateTotal } from '../utils/calculations';

const KEYS = {
  STUDENTS: 'collegePortal_students',
  FACULTY: 'collegePortal_faculty',
  MARKS: 'collegePortal_marks',
  ATTENDANCE: 'collegePortal_attendance',
  CURRENT_USER: 'collegePortal_currentUser',
  INITIALIZED: 'collegePortal_initialized'
};

/**
 * Initialize LocalStorage with default sample data on first run
 */
export function initializeStorage(force = false) {
  const isInitialized = localStorage.getItem(KEYS.INITIALIZED);
  if (!isInitialized || force) {
    localStorage.setItem(KEYS.STUDENTS, JSON.stringify(INITIAL_STUDENTS));
    localStorage.setItem(KEYS.FACULTY, JSON.stringify(INITIAL_FACULTY));
    localStorage.setItem(KEYS.MARKS, JSON.stringify(INITIAL_MARKS));
    localStorage.setItem(KEYS.ATTENDANCE, JSON.stringify(INITIAL_ATTENDANCE));
    localStorage.setItem(KEYS.INITIALIZED, 'true');
    console.log('[Storage] Initialized sample data in localStorage.');
  }
}

// ---------------------------------------------------------------------------
// Current User / Session
// ---------------------------------------------------------------------------

export function getCurrentUser() {
  try {
    const data = localStorage.getItem(KEYS.CURRENT_USER);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error('[Storage] Error reading currentUser:', err);
    return null;
  }
}

export function setCurrentUser(user) {
  if (!user) {
    localStorage.removeItem(KEYS.CURRENT_USER);
  } else {
    localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(user));
  }
}

export function clearCurrentUser() {
  localStorage.removeItem(KEYS.CURRENT_USER);
}

// ---------------------------------------------------------------------------
// Student Management
// ---------------------------------------------------------------------------

export function getStudents() {
  initializeStorage();
  try {
    const data = localStorage.getItem(KEYS.STUDENTS);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('[Storage] Error getting students:', err);
    return [];
  }
}

export function getStudentById(studentId) {
  const students = getStudents();
  return students.find(s => s.id === studentId || s.username === studentId || s.rollNumber === studentId) || null;
}

export function addStudent(studentPayload) {
  const students = getStudents();
  
  // Generate unique ID
  const nextIdNum = students.length + 1;
  const newId = `S${String(nextIdNum).padStart(3, '0')}`;
  
  const initials = (studentPayload.name || 'Student')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');

  const newStudent = {
    id: newId,
    rollNumber: studentPayload.rollNumber.trim(),
    username: studentPayload.username.trim().toLowerCase(),
    password: studentPayload.password || 'student123',
    name: studentPayload.name.trim(),
    branch: studentPayload.branch || 'Computer Science & Engineering',
    year: studentPayload.year || '1st Year',
    semester: studentPayload.semester || 'Semester 2',
    section: studentPayload.section || 'A',
    email: studentPayload.email || `${studentPayload.username.trim().toLowerCase()}@apexengineering.edu`,
    phone: studentPayload.phone || '+91 91234 00000',
    avatar: initials || 'ST',
    admissionDate: new Date().toISOString().split('T')[0]
  };

  students.push(newStudent);
  localStorage.setItem(KEYS.STUDENTS, JSON.stringify(students));

  // Initialize Marks for the new student
  const allMarks = getAllMarks();
  allMarks[newId] = {
    semester1: DEFAULT_SUBJECTS_SEM1.map(sub => ({
      code: sub.code,
      subject: sub.name,
      credits: sub.credits,
      internal: 30,
      external: 45
    })),
    semester2: DEFAULT_SUBJECTS_SEM2.map(sub => ({
      code: sub.code,
      subject: sub.name,
      credits: sub.credits,
      internal: 32,
      external: 48
    }))
  };
  localStorage.setItem(KEYS.MARKS, JSON.stringify(allMarks));

  // Initialize Attendance for the new student
  const allAttendance = getAllAttendance();
  allAttendance[newId] = DEFAULT_SUBJECTS_SEM2.map(sub => ({
    code: sub.code,
    subject: sub.name,
    totalClasses: 45,
    present: 40,
    absent: 5,
    percentage: 88.89
  }));
  localStorage.setItem(KEYS.ATTENDANCE, JSON.stringify(allAttendance));

  return newStudent;
}

export function updateStudent(studentId, updatedFields) {
  const students = getStudents();
  const index = students.findIndex(s => s.id === studentId);
  if (index === -1) return null;

  const existing = students[index];
  const updated = {
    ...existing,
    ...updatedFields,
    id: existing.id // ID cannot be changed
  };

  students[index] = updated;
  localStorage.setItem(KEYS.STUDENTS, JSON.stringify(students));

  // If current logged-in user is this student, update session
  const currentUser = getCurrentUser();
  if (currentUser && currentUser.id === studentId) {
    setCurrentUser({
      ...currentUser,
      ...updated
    });
  }

  return updated;
}

export function resetStudentPassword(studentId, newPassword) {
  return updateStudent(studentId, { password: newPassword });
}

// ---------------------------------------------------------------------------
// Faculty Management (Predefined)
// ---------------------------------------------------------------------------

export function getFaculty() {
  initializeStorage();
  try {
    const data = localStorage.getItem(KEYS.FACULTY);
    return data ? JSON.parse(data) : INITIAL_FACULTY;
  } catch (err) {
    console.error('[Storage] Error getting faculty:', err);
    return INITIAL_FACULTY;
  }
}

export function getFacultyById(facultyId) {
  const facultyList = getFaculty();
  return facultyList.find(f => f.id === facultyId || f.username === facultyId) || null;
}

// ---------------------------------------------------------------------------
// Marks Management
// ---------------------------------------------------------------------------

export function getAllMarks() {
  initializeStorage();
  try {
    const data = localStorage.getItem(KEYS.MARKS);
    return data ? JSON.parse(data) : {};
  } catch (err) {
    console.error('[Storage] Error reading marks:', err);
    return {};
  }
}

export function getStudentMarks(studentId) {
  const allMarks = getAllMarks();
  return allMarks[studentId] || { semester1: [], semester2: [] };
}

/**
 * Updates marks for a single student and single subject in a semester
 */
export function updateStudentSubjectMarks(studentId, semesterKey, subjectCode, newInternal, newExternal) {
  const allMarks = getAllMarks();
  if (!allMarks[studentId]) {
    allMarks[studentId] = { semester1: [], semester2: [] };
  }

  const semMarks = allMarks[studentId][semesterKey] || [];
  const subjectIndex = semMarks.findIndex(s => s.code === subjectCode);

  const parsedInternal = parseFloat(newInternal);
  const parsedExternal = parseFloat(newExternal);

  if (subjectIndex !== -1) {
    semMarks[subjectIndex] = {
      ...semMarks[subjectIndex],
      internal: parsedInternal,
      external: parsedExternal,
      total: calculateTotal(parsedInternal, parsedExternal)
    };
  } else {
    // If not found, find subject definition or push
    semMarks.push({
      code: subjectCode,
      subject: subjectCode,
      credits: 3,
      internal: parsedInternal,
      external: parsedExternal,
      total: calculateTotal(parsedInternal, parsedExternal)
    });
  }

  allMarks[studentId][semesterKey] = semMarks;
  localStorage.setItem(KEYS.MARKS, JSON.stringify(allMarks));
  return allMarks[studentId];
}

// ---------------------------------------------------------------------------
// Attendance Management
// ---------------------------------------------------------------------------

export function getAllAttendance() {
  initializeStorage();
  try {
    const data = localStorage.getItem(KEYS.ATTENDANCE);
    return data ? JSON.parse(data) : {};
  } catch (err) {
    console.error('[Storage] Error reading attendance:', err);
    return {};
  }
}

export function getStudentAttendance(studentId) {
  const allAttendance = getAllAttendance();
  return allAttendance[studentId] || [];
}

/**
 * Updates attendance for a single student and single subject
 * Supports Present/Absent/Total counts OR direct percentage entry
 */
export function updateStudentSubjectAttendance(studentId, subjectCode, { totalClasses, present, absent, percentage }) {
  const allAttendance = getAllAttendance();
  if (!allAttendance[studentId]) {
    allAttendance[studentId] = [];
  }

  const attList = allAttendance[studentId];
  const index = attList.findIndex(a => a.code === subjectCode);

  let updatedPct = percentage;
  if (updatedPct === undefined || updatedPct === null || updatedPct === '') {
    updatedPct = calculateAttendance(present, totalClasses);
  } else {
    updatedPct = parseFloat(parseFloat(updatedPct).toFixed(2));
  }

  const updatedRecord = {
    code: subjectCode,
    subject: index !== -1 ? attList[index].subject : subjectCode,
    totalClasses: parseInt(totalClasses, 10) || 0,
    present: parseInt(present, 10) || 0,
    absent: parseInt(absent, 10) || 0,
    percentage: updatedPct
  };

  if (index !== -1) {
    attList[index] = updatedRecord;
  } else {
    attList.push(updatedRecord);
  }

  allAttendance[studentId] = attList;
  localStorage.setItem(KEYS.ATTENDANCE, JSON.stringify(allAttendance));
  return allAttendance[studentId];
}

/**
 * Reset all data to factory sample data (Dev/Demo helper)
 */
export function resetDataStore() {
  initializeStorage(true);
}
