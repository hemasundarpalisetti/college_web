/**
 * Centralized LocalStorage Storage Service
 * Handles persistence, retrieval, and synchronization across the application.
 */

import {
  INITIAL_STUDENTS,
  INITIAL_FACULTY,
  INITIAL_MARKS,
  INITIAL_ATTENDANCE,
  INITIAL_GRIEVANCES,
  DEFAULT_SUBJECTS_SEM1,
  DEFAULT_SUBJECTS_SEM2
} from './initialData';
import { calculateAttendance, calculateTotal } from '../utils/calculations';

const KEYS = {
  STUDENTS: 'collegePortal_students',
  FACULTY: 'collegePortal_faculty',
  MARKS: 'collegePortal_marks',
  ATTENDANCE: 'collegePortal_attendance',
  GRIEVANCES: 'collegePortal_grievances',
  CURRENT_USER: 'collegePortal_currentUser',
  INITIALIZED: 'collegePortal_initialized_v7_all_branches_5_members'
};

/**
 * Initialize LocalStorage with default sample data on first run or schema update
 */
export function initializeStorage(force = false) {
  const isInitialized = localStorage.getItem(KEYS.INITIALIZED);
  const existingStudents = localStorage.getItem(KEYS.STUDENTS);
  const existingMarks = localStorage.getItem(KEYS.MARKS);
  const has4Years = existingStudents && existingStudents.includes('26W61A6101') && existingStudents.includes('22W61A6105');
  const hasParentPhone = existingStudents && existingStudents.includes('parentPhone');
  const hasGrievances = localStorage.getItem(KEYS.GRIEVANCES);
  const hasUpdatedSubjects = existingMarks && existingMarks.includes('BS1101') && existingMarks.includes('Linear Algebra and Calculus');
  const hasUpdatedParentNames = existingStudents && existingStudents.includes('Venkateswar Rao') && existingStudents.includes('Sairaju') && existingStudents.includes('Santhosh') && existingStudents.includes('Eshwara Rao');
  const hasAllBranches = existingStudents &&
    existingStudents.includes('Computer Science & Engineering') &&
    existingStudents.includes('Civil Engineering') &&
    existingStudents.includes('Electrical & Electronics') &&
    existingStudents.includes('Mechanical Engineering') &&
    existingStudents.includes('Electronics & Communication') &&
    existingStudents.includes('SCSE101');

  if (!isInitialized || !has4Years || !hasParentPhone || !hasGrievances || !hasUpdatedSubjects || !hasUpdatedParentNames || !hasAllBranches || force) {
    localStorage.setItem(KEYS.STUDENTS, JSON.stringify(INITIAL_STUDENTS));
    localStorage.setItem(KEYS.FACULTY, JSON.stringify(INITIAL_FACULTY));
    localStorage.setItem(KEYS.MARKS, JSON.stringify(INITIAL_MARKS));
    localStorage.setItem(KEYS.ATTENDANCE, JSON.stringify(INITIAL_ATTENDANCE));
    localStorage.setItem(KEYS.GRIEVANCES, JSON.stringify(INITIAL_GRIEVANCES));
    localStorage.setItem(KEYS.INITIALIZED, 'true');

    // Also update currentUser if currently logged in with outdated info
    try {
      const curUser = localStorage.getItem(KEYS.CURRENT_USER);
      if (curUser) {
        const parsedUser = JSON.parse(curUser);
        const updatedStudent = INITIAL_STUDENTS.find(s => s.id === parsedUser.id || s.rollNumber === parsedUser.rollNumber);
        if (updatedStudent) {
          localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify({ ...parsedUser, ...updatedStudent }));
        }
      }
    } catch (e) {
      // ignore
    }

    console.log('[Storage] Initialized 122 Students across all 6 Engineering Branches and 4 Academic Years.');
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
    const parsed = data ? JSON.parse(data) : [];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(KEYS.STUDENTS, JSON.stringify(INITIAL_STUDENTS));
      return INITIAL_STUDENTS;
    }
    return parsed;
  } catch (err) {
    console.error('[Storage] Error getting students:', err);
    return INITIAL_STUDENTS;
  }
}

export function getStudentById(studentId) {
  if (!studentId) return null;
  const cleanId = String(studentId).trim().toLowerCase();
  const students = getStudents();
  return students.find(
    s => s.id.toLowerCase() === cleanId ||
         s.username.toLowerCase() === cleanId ||
         s.rollNumber.toLowerCase() === cleanId ||
         (s.aliases && s.aliases.some(a => a.toLowerCase() === cleanId))
  ) || null;
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
    rollNumber: studentPayload.rollNumber.trim().toUpperCase(),
    username: studentPayload.username ? studentPayload.username.trim().toLowerCase() : studentPayload.rollNumber.trim().toLowerCase(),
    password: studentPayload.password || 'student123',
    name: studentPayload.name.trim(),
    branch: studentPayload.branch || 'Artificial Intelligence & Machine Learning (AIML)',
    year: studentPayload.year || '2nd Year',
    semester: studentPayload.semester || 'Semester 3',
    section: studentPayload.section || 'A',
    email: studentPayload.email || `${studentPayload.rollNumber.trim().toLowerCase()}@srisivani.edu.in`,
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
    const parsed = data ? JSON.parse(data) : [];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(KEYS.FACULTY, JSON.stringify(INITIAL_FACULTY));
      return INITIAL_FACULTY;
    }
    return parsed;
  } catch (err) {
    console.error('[Storage] Error getting faculty:', err);
    return INITIAL_FACULTY;
  }
}

export function getFacultyById(facultyId) {
  if (!facultyId) return null;
  const cleanId = String(facultyId).trim().toLowerCase();
  const facultyList = getFaculty();
  return facultyList.find(
    f => f.id.toLowerCase() === cleanId ||
         f.username.toLowerCase() === cleanId ||
         f.facultyId?.toLowerCase() === cleanId ||
         (f.aliases && f.aliases.some(a => a.toLowerCase() === cleanId))
  ) || null;
}

// ---------------------------------------------------------------------------
// Marks Management
// ---------------------------------------------------------------------------

export function getAllMarks() {
  initializeStorage();
  try {
    const data = localStorage.getItem(KEYS.MARKS);
    const parsed = data ? JSON.parse(data) : null;
    if (!parsed || Object.keys(parsed).length === 0) {
      localStorage.setItem(KEYS.MARKS, JSON.stringify(INITIAL_MARKS));
      return INITIAL_MARKS;
    }
    return parsed;
  } catch (err) {
    console.error('[Storage] Error reading marks:', err);
    return INITIAL_MARKS;
  }
}

export function getStudentMarks(studentId) {
  const allMarks = getAllMarks();
  if (allMarks[studentId]) return allMarks[studentId];
  if (INITIAL_MARKS[studentId]) return INITIAL_MARKS[studentId];
  return {
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
    const parsed = data ? JSON.parse(data) : null;
    if (!parsed || Object.keys(parsed).length === 0) {
      localStorage.setItem(KEYS.ATTENDANCE, JSON.stringify(INITIAL_ATTENDANCE));
      return INITIAL_ATTENDANCE;
    }
    return parsed;
  } catch (err) {
    console.error('[Storage] Error reading attendance:', err);
    return INITIAL_ATTENDANCE;
  }
}

export function getStudentAttendance(studentId) {
  const allAttendance = getAllAttendance();
  if (allAttendance[studentId]) return allAttendance[studentId];
  if (INITIAL_ATTENDANCE[studentId]) return INITIAL_ATTENDANCE[studentId];
  return DEFAULT_SUBJECTS_SEM2.map(sub => ({
    code: sub.code,
    subject: sub.name,
    totalClasses: 45,
    present: 40,
    absent: 5,
    percentage: 88.89
  }));
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

// ---------------------------------------------------------------------------
// Grievance / Complaint & Suggestion Box Management
// ---------------------------------------------------------------------------

export function getAllGrievances() {
  initializeStorage();
  try {
    const data = localStorage.getItem(KEYS.GRIEVANCES);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('[Storage] Error reading grievances:', err);
    return [];
  }
}

export function getStudentGrievances(studentId) {
  const all = getAllGrievances();
  if (!studentId) return all;
  return all.filter(g => g.studentId === studentId);
}

export function submitGrievance(grievanceData) {
  const all = getAllGrievances();
  const newTicketId = `TKT-${new Date().getFullYear()}-${String(all.length + 830).padStart(4, '0')}`;
  const newGrievance = {
    id: newTicketId,
    date: new Date().toISOString().split('T')[0],
    status: 'Pending',
    remarks: 'Acknowledged by Student Affairs cell. Under review by institutional coordinator.',
    ...grievanceData
  };
  all.unshift(newGrievance);
  localStorage.setItem(KEYS.GRIEVANCES, JSON.stringify(all));
  return newGrievance;
}

export function updateGrievanceStatus(id, { status, remarks }) {
  const all = getAllGrievances();
  const index = all.findIndex(g => g.id === id);
  if (index !== -1) {
    all[index] = {
      ...all[index],
      status: status || all[index].status,
      remarks: remarks || all[index].remarks
    };
    localStorage.setItem(KEYS.GRIEVANCES, JSON.stringify(all));
    return all[index];
  }
  return null;
}

