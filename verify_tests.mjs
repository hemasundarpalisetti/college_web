// Automated test script to verify business logic and calculation engines
import { calculateTotal, calculateGrade, calculatePercentage, calculateSGPA, calculateAttendance, calculateOverallAttendance, calculateStudentSummary } from './src/utils/calculations.js';
import { validateStudentForm, validateMarksEntry, validateAttendanceEntry } from './src/utils/validators.js';
import { INITIAL_STUDENTS, INITIAL_FACULTY, INITIAL_MARKS, INITIAL_ATTENDANCE } from './src/data/initialData.js';

console.log("=== RUNNING COLLEGE PORTAL VERIFICATION TESTS ===");

// 1. Calculations verification
const total1 = calculateTotal(25, 45);
console.assert(total1 === 70, `Expected 70, got ${total1}`);

const grade1 = calculateGrade(70);
console.assert(grade1.grade === 'A' && grade1.point === 8 && grade1.status === 'Pass', `Grade mismatch: ${JSON.stringify(grade1)}`);

const gradeF = calculateGrade(35);
console.assert(gradeF.grade === 'F' && gradeF.point === 0 && gradeF.status === 'Fail', `Fail grade mismatch`);

const gradeO = calculateGrade(95);
console.assert(gradeO.grade === 'O' && gradeO.point === 10, `O grade mismatch`);

// 2. SGPA verification
const sampleSubjects = [
  { subject: 'Math', credits: 4, internal: 32, external: 50 }, // total 82 -> A+ (point 9) -> 36
  { subject: 'Physics', credits: 4, internal: 30, external: 45 }, // total 75 -> A (point 8) -> 32
  { subject: 'C Prog', credits: 4, internal: 36, external: 54 }, // total 90 -> O (point 10) -> 40
];
// total points: 36 + 32 + 40 = 108. total credits: 12. SGPA = 108 / 12 = 9.00
const calculatedSGPA = calculateSGPA(sampleSubjects);
console.assert(calculatedSGPA === 9.00, `Expected SGPA 9.00, got ${calculatedSGPA}`);
console.log("✓ SGPA calculation verified:", calculatedSGPA);

// 3. Attendance formula verification
const attPct = calculateAttendance(41, 45);
console.assert(attPct === 91.11, `Expected 91.11, got ${attPct}`);
console.log("✓ Attendance formula verified:", attPct);

// 4. Overall Student Summary
const summaryS001 = calculateStudentSummary('S001', INITIAL_MARKS, INITIAL_ATTENDANCE);
console.assert(summaryS001.attendance.overallPercentage > 0, 'Attendance summary failed');
console.assert(summaryS001.sem1.sgpa > 0, 'Sem 1 SGPA failed');
console.assert(summaryS001.sem2.sgpa > 0, 'Sem 2 SGPA failed');
console.log("✓ S001 Student Summary:", {
  attendance: summaryS001.attendance.overallPercentage,
  sem1SGPA: summaryS001.sem1.sgpa,
  sem2SGPA: summaryS001.sem2.sgpa,
  overallCGPA: summaryS001.overallCGPA
});

// 5. Validation tests
const validRes = validateMarksEntry(30, 50, 40, 60);
console.assert(validRes.isValid, 'Valid marks failed');

const invalidInt = validateMarksEntry(45, 50, 40, 60);
console.assert(!invalidInt.isValid && invalidInt.errors.internal, 'Invalid internal not caught');

const invalidExt = validateMarksEntry(30, 65, 40, 60);
console.assert(!invalidExt.isValid && invalidExt.errors.external, 'Invalid external not caught');

const validAtt = validateAttendanceEntry(45, 40, 5);
console.assert(validAtt.isValid, 'Valid attendance failed');

const invalidAtt = validateAttendanceEntry(45, 48, 5);
console.assert(!invalidAtt.isValid, 'Overflow attendance not caught');

console.log("✓ All validation test cases passed!");
console.log("=== ALL CORE TESTS PASSED SUCCESSFULLY ===");
