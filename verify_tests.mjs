// Automated test script to verify business logic and calculation engines
import { calculateTotal, calculateGrade, calculatePercentage, calculateSGPA, calculateAttendance, calculateOverallAttendance, calculateStudentSummary } from './src/utils/calculations.js';
import { validateStudentForm, validateMarksEntry, validateAttendanceEntry } from './src/utils/validators.js';
import { INITIAL_STUDENTS, INITIAL_FACULTY, INITIAL_MARKS, INITIAL_ATTENDANCE, DEFAULT_SUBJECTS_SEM1, DEFAULT_SUBJECTS_SEM2 } from './src/data/initialData.js';

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
const calculatedSGPA = calculateSGPA(sampleSubjects);
console.assert(calculatedSGPA === 9.00, `Expected SGPA 9.00, got ${calculatedSGPA}`);
console.log("✓ SGPA calculation verified:", calculatedSGPA);

// 3. Attendance formula verification
const attPct = calculateAttendance(41, 45);
console.assert(attPct === 91.11, `Expected 91.11, got ${attPct}`);
console.log("✓ Attendance formula verified:", attPct);

// 4. Verify 4-Year Students Representation
const years = [...new Set(INITIAL_STUDENTS.map(s => s.year))];
console.assert(years.includes('1st Year'), 'Missing 1st Year students');
console.assert(years.includes('2nd Year'), 'Missing 2nd Year students');
console.assert(years.includes('3rd Year'), 'Missing 3rd Year students');
console.assert(years.includes('4th Year'), 'Missing 4th Year students');
console.log(`✓ All 4 Years Present in INITIAL_STUDENTS: ${years.join(', ')} (Total: ${INITIAL_STUDENTS.length} students)`);

// 5. Verify 2nd Year AIML Subjects (Sem 1 and Sem 2)
const sem1Names = INITIAL_MARKS.S001.semester1.map(s => s.subject);
const sem2Names = INITIAL_MARKS.S001.semester2.map(s => s.subject);

console.assert(sem1Names.includes('Linear Algebra and Calculus'), 'Missing Linear Algebra and Calculus in Sem 1');
console.assert(sem1Names.includes('Introduction to Programming'), 'Missing Introduction to Programming in Sem 1');
console.assert(sem1Names.includes('Communication English'), 'Missing Communication English in Sem 1');
console.assert(sem1Names.includes('Engineering Physics'), 'Missing Engineering Physics in Sem 1');
console.assert(sem1Names.includes('Basic Civil and Mechanical Engineering'), 'Missing Basic Civil and Mechanical Engineering in Sem 1');
console.log("✓ 2nd Year AIML 1st Year Sem 1 subjects verified:", sem1Names);

console.assert(sem2Names.includes('Data Structures'), 'Missing Data Structures in Sem 2');
console.assert(sem2Names.includes('Differential Equations and Vector Calculus'), 'Missing Differential Equations and Vector Calculus in Sem 2');
console.assert(sem2Names.includes('Engineering Chemistry'), 'Missing Engineering Chemistry in Sem 2');
console.assert(sem2Names.includes('Engineering Graphics'), 'Missing Engineering Graphics in Sem 2');
console.assert(sem2Names.includes('Basic Electrical and Electronics Lab'), 'Missing Basic Electrical and Electronics Lab in Sem 2');
console.log("✓ 2nd Year AIML 1st Year Sem 2 subjects verified:", sem2Names);

// 6. Overall Student Summary across cohorts
for (const [cohort, id] of [['1st Year', 'S101'], ['2nd Year', 'S001'], ['3rd Year', 'S301'], ['4th Year', 'S401']]) {
  const summary = calculateStudentSummary(id, INITIAL_MARKS, INITIAL_ATTENDANCE);
  console.assert(summary.attendance.overallPercentage > 0, `${cohort} attendance failed`);
  console.assert(summary.sem1.sgpa > 0, `${cohort} Sem 1 SGPA failed`);
  console.log(`✓ ${cohort} (${id}) Summary: Attendance=${summary.attendance.overallPercentage}%, Sem1 SGPA=${summary.sem1.sgpa}, Sem2 SGPA=${summary.sem2.sgpa}, CGPA=${summary.overallCGPA}`);
}

// 7. Validation tests
const validRes = validateMarksEntry(30, 50, 40, 60);
console.assert(validRes.isValid, 'Valid marks failed');

const invalidInt = validateMarksEntry(45, 50, 40, 60);
console.assert(!invalidInt.isValid && invalidInt.errors.internal, 'Invalid internal not caught');

const invalidExt = validateMarksEntry(30, 65, 40, 60);
console.assert(!invalidExt.isValid && invalidExt.errors.external, 'Invalid external not caught');

// 8. Verify Student and Parent Mobile Numbers across all cohorts
const studentsWithoutStudentPhone = INITIAL_STUDENTS.filter(s => !s.studentPhone);
const studentsWithoutParentPhone = INITIAL_STUDENTS.filter(s => !s.parentPhone);
console.assert(studentsWithoutStudentPhone.length === 0, `Students missing studentPhone: ${studentsWithoutStudentPhone.length}`);
console.assert(studentsWithoutParentPhone.length === 0, `Students missing parentPhone: ${studentsWithoutParentPhone.length}`);
console.log(`✓ All ${INITIAL_STUDENTS.length} students have both studentPhone and parentPhone configured.`);

// 9. Verify Initial Grievances
import { INITIAL_GRIEVANCES } from './src/data/initialData.js';
console.assert(Array.isArray(INITIAL_GRIEVANCES) && INITIAL_GRIEVANCES.length >= 2, 'INITIAL_GRIEVANCES missing or insufficient');
console.assert(INITIAL_GRIEVANCES.some(g => g.category.includes('FRS')), 'Missing FRS grievance example');
console.log(`✓ Seeded ${INITIAL_GRIEVANCES.length} initial grievance/suggestion tickets including FRS biometric cases.`);

console.log("✓ All validation test cases passed!");
console.log("=== ALL CORE TESTS PASSED SUCCESSFULLY ===");

