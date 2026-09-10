/**
 * Centralized Academic Calculations & Grading Logic
 */

export const GRADING_SCALE = [
  { min: 90, max: 100, grade: 'O', point: 10, label: 'Outstanding', status: 'Pass' },
  { min: 80, max: 89,  grade: 'A+', point: 9, label: 'Excellent', status: 'Pass' },
  { min: 70, max: 79,  grade: 'A',  point: 8, label: 'Very Good', status: 'Pass' },
  { min: 60, max: 69,  grade: 'B+', point: 7, label: 'Good', status: 'Pass' },
  { min: 50, max: 59,  grade: 'B',  point: 6, label: 'Above Average', status: 'Pass' },
  { min: 40, max: 49,  grade: 'C',  point: 5, label: 'Average (Pass)', status: 'Pass' },
  { min: 0,  max: 39,  grade: 'F',  point: 0, label: 'Fail', status: 'Fail' }
];

/**
 * Calculates total marks from internal and external marks
 */
export function calculateTotal(internal, external) {
  const intVal = parseFloat(internal) || 0;
  const extVal = parseFloat(external) || 0;
  return Math.round((intVal + extVal) * 100) / 100;
}

/**
 * Calculates letter grade and grade points based on total score (out of 100)
 */
export function calculateGrade(totalMarks) {
  const score = Math.min(100, Math.max(0, parseFloat(totalMarks) || 0));
  for (const item of GRADING_SCALE) {
    if (score >= item.min && score <= item.max) {
      return item;
    }
  }
  return GRADING_SCALE[GRADING_SCALE.length - 1]; // Fallback to 'F'
}

/**
 * Calculates percentage
 */
export function calculatePercentage(totalObtained, maxMarks) {
  if (!maxMarks || maxMarks <= 0) return 0;
  const pct = (parseFloat(totalObtained) / parseFloat(maxMarks)) * 100;
  return parseFloat(pct.toFixed(2));
}

/**
 * Calculates SGPA for a semester given a list of subjects with marks/grade & credits
 * Formula: SGPA = sum(GradePoint * Credits) / sum(Credits)
 */
export function calculateSGPA(subjects) {
  if (!subjects || subjects.length === 0) return 0;
  let totalPoints = 0;
  let totalCredits = 0;

  subjects.forEach(sub => {
    const credits = parseFloat(sub.credits) || 3;
    const totalMarks = sub.total !== undefined ? sub.total : calculateTotal(sub.internal, sub.external);
    const gradeObj = calculateGrade(totalMarks);
    
    totalPoints += gradeObj.point * credits;
    totalCredits += credits;
  });

  if (totalCredits === 0) return 0;
  const sgpa = totalPoints / totalCredits;
  return parseFloat(sgpa.toFixed(2));
}

/**
 * Calculates Attendance Percentage
 * Formula: (Present / Total) * 100
 */
export function calculateAttendance(present, total, manualPercentage = null) {
  if (manualPercentage !== null && manualPercentage !== undefined && manualPercentage !== '') {
    const p = parseFloat(manualPercentage);
    return isNaN(p) ? 0 : parseFloat(Math.min(100, Math.max(0, p)).toFixed(2));
  }
  const t = parseFloat(total) || 0;
  const p = parseFloat(present) || 0;
  if (t <= 0) return 0;
  const percentage = (p / t) * 100;
  return parseFloat(Math.min(100, Math.max(0, percentage)).toFixed(2));
}

/**
 * Calculates overall attendance summary across all subjects for a student
 */
export function calculateOverallAttendance(subjectAttendanceList) {
  if (!subjectAttendanceList || subjectAttendanceList.length === 0) {
    return { overallPercentage: 0, totalClasses: 0, totalPresent: 0, totalAbsent: 0 };
  }

  let totalClasses = 0;
  let totalPresent = 0;
  let totalAbsent = 0;
  let sumPercentage = 0;

  subjectAttendanceList.forEach(item => {
    const t = parseInt(item.totalClasses, 10) || 0;
    const p = parseInt(item.present, 10) || 0;
    const a = parseInt(item.absent, 10) || 0;
    
    totalClasses += t;
    totalPresent += p;
    totalAbsent += a;
    
    const pct = item.percentage !== undefined && item.percentage !== null
      ? parseFloat(item.percentage)
      : calculateAttendance(p, t);
    sumPercentage += pct;
  });

  const overallPercentage = totalClasses > 0 
    ? parseFloat(((totalPresent / totalClasses) * 100).toFixed(2))
    : parseFloat((sumPercentage / subjectAttendanceList.length).toFixed(2));

  return {
    overallPercentage: isNaN(overallPercentage) ? 0 : overallPercentage,
    totalClasses,
    totalPresent,
    totalAbsent
  };
}

/**
 * Aggregates complete academic performance for a student
 */
export function calculateStudentSummary(studentId, marksData, attendanceData) {
  const studentMarks = marksData?.[studentId] || { semester1: [], semester2: [] };
  const studentAttendance = attendanceData?.[studentId] || [];

  // Semester 1 Results
  const sem1Subjects = (studentMarks.semester1 || []).map(s => {
    const total = calculateTotal(s.internal, s.external);
    const gradeInfo = calculateGrade(total);
    return {
      ...s,
      total,
      grade: gradeInfo.grade,
      gradePoint: gradeInfo.point,
      status: gradeInfo.status
    };
  });

  const sem1Obtained = sem1Subjects.reduce((acc, curr) => acc + (curr.total || 0), 0);
  const sem1Max = (sem1Subjects.length || 1) * 100;
  const sem1Pct = calculatePercentage(sem1Obtained, sem1Subjects.length > 0 ? sem1Max : 100);
  const sem1SGPA = calculateSGPA(sem1Subjects) || 0;
  const sem1Passed = sem1Subjects.length > 0 ? sem1Subjects.every(s => s.status === 'Pass') : true;

  // Semester 2 Results
  const sem2Subjects = (studentMarks.semester2 || []).map(s => {
    const total = calculateTotal(s.internal, s.external);
    const gradeInfo = calculateGrade(total);
    return {
      ...s,
      total,
      grade: gradeInfo.grade,
      gradePoint: gradeInfo.point,
      status: gradeInfo.status
    };
  });

  const sem2Obtained = sem2Subjects.reduce((acc, curr) => acc + (curr.total || 0), 0);
  const sem2Max = (sem2Subjects.length || 1) * 100;
  const sem2Pct = calculatePercentage(sem2Obtained, sem2Subjects.length > 0 ? sem2Max : 100);
  const sem2SGPA = calculateSGPA(sem2Subjects) || 0;
  const sem2Passed = sem2Subjects.length > 0 ? sem2Subjects.every(s => s.status === 'Pass') : true;

  // Overall Attendance
  const attendanceStats = calculateOverallAttendance(studentAttendance);

  // Overall CGPA (Average of SGPA1 & SGPA2)
  const validSGPAs = [sem1SGPA, sem2SGPA].filter(s => typeof s === 'number' && !isNaN(s) && s > 0);
  const overallCGPA = validSGPAs.length > 0 
    ? parseFloat((validSGPAs.reduce((a, b) => a + b, 0) / validSGPAs.length).toFixed(2))
    : (sem2SGPA || sem1SGPA || 0);

  const totalObtained = sem1Obtained + sem2Obtained;
  const totalMax = (sem1Subjects.length + sem2Subjects.length) * 100 || 100;
  const overallPercentage = calculatePercentage(totalObtained, totalMax);

  return {
    sem1: {
      subjects: sem1Subjects,
      obtained: sem1Obtained,
      max: sem1Max,
      percentage: isNaN(sem1Pct) ? 0 : sem1Pct,
      sgpa: isNaN(sem1SGPA) ? 0 : sem1SGPA,
      status: sem1Passed ? 'Pass' : 'Fail'
    },
    sem2: {
      subjects: sem2Subjects,
      obtained: sem2Obtained,
      max: sem2Max,
      percentage: isNaN(sem2Pct) ? 0 : sem2Pct,
      sgpa: isNaN(sem2SGPA) ? 0 : sem2SGPA,
      status: sem2Passed ? 'Pass' : 'Fail'
    },
    attendance: attendanceStats,
    overallCGPA: isNaN(overallCGPA) ? 0 : overallCGPA,
    overallPercentage: isNaN(overallPercentage) ? 0 : overallPercentage,
    overallStatus: (sem1Passed && sem2Passed) ? 'Passed' : 'Needs Improvement'
  };
}

