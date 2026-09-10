/**
 * Validation utilities for Student, Marks, and Attendance entry
 */

export function validateStudentForm(formData, existingStudents = [], isEditing = false, currentStudentId = null) {
  const errors = {};

  if (!formData.name || !formData.name.trim()) {
    errors.name = "Student name is required.";
  }

  if (!formData.rollNumber || !formData.rollNumber.trim()) {
    errors.rollNumber = "Roll number is required.";
  } else {
    // Check uniqueness
    const rollExists = existingStudents.some(
      s => s.rollNumber.toLowerCase() === formData.rollNumber.trim().toLowerCase() &&
           (!isEditing || s.id !== currentStudentId)
    );
    if (rollExists) {
      errors.rollNumber = "Roll number already exists. Please enter a unique roll number.";
    }
  }

  if (!formData.username || !formData.username.trim()) {
    errors.username = "Username is required.";
  } else {
    // Check uniqueness
    const usernameExists = existingStudents.some(
      s => s.username.toLowerCase() === formData.username.trim().toLowerCase() &&
           (!isEditing || s.id !== currentStudentId)
    );
    if (usernameExists) {
      errors.username = "Username already exists. Please choose a different username.";
    }
  }

  if (!isEditing) {
    if (!formData.password || formData.password.length < 4) {
      errors.password = "Password must be at least 4 characters long.";
    }
  }

  if (!formData.branch || !formData.branch.trim()) {
    errors.branch = "Branch is required.";
  }

  if (!formData.year) {
    errors.year = "Year is required.";
  }

  if (!formData.semester) {
    errors.semester = "Semester is required.";
  }

  if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (formData.phone && !/^[0-9+\-\s]{7,15}$/.test(formData.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function validateMarksEntry(internal, external, maxInternal = 40, maxExternal = 60) {
  const errors = {};
  const intVal = parseFloat(internal);
  const extVal = parseFloat(external);

  if (isNaN(intVal) || intVal < 0 || intVal > maxInternal) {
    errors.internal = `Internal marks must be between 0 and ${maxInternal}.`;
  }

  if (isNaN(extVal) || extVal < 0 || extVal > maxExternal) {
    errors.external = `External marks must be between 0 and ${maxExternal}.`;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function validateAttendanceEntry(totalClasses, present, absent, manualPercentage = null) {
  const errors = {};

  if (manualPercentage !== null && manualPercentage !== undefined && manualPercentage !== '') {
    const pct = parseFloat(manualPercentage);
    if (isNaN(pct) || pct < 0 || pct > 100) {
      errors.percentage = "Percentage must be between 0 and 100.";
    }
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }

  const total = parseInt(totalClasses, 10);
  const p = parseInt(present, 10);
  const a = parseInt(absent, 10);

  if (isNaN(total) || total < 0) {
    errors.totalClasses = "Total classes must be a positive integer.";
  }

  if (isNaN(p) || p < 0) {
    errors.present = "Present count cannot be negative.";
  }

  if (isNaN(a) || a < 0) {
    errors.absent = "Absent count cannot be negative.";
  }

  if (!isNaN(total) && !isNaN(p) && p > total) {
    errors.present = "Present classes cannot exceed total classes.";
  }

  if (!isNaN(total) && !isNaN(a) && a > total) {
    errors.absent = "Absent classes cannot exceed total classes.";
  }

  if (!isNaN(total) && !isNaN(p) && !isNaN(a) && (p + a > total)) {
    errors.countMismatch = "Sum of Present and Absent exceeds Total Classes.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
