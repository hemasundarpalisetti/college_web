/**
 * Initial Pre-loaded Data for College Portal Prototype
 * Contains 5 sample students and 2 predefined faculty accounts.
 */

export const DEFAULT_SUBJECTS_SEM1 = [
  { code: "CS101", name: "Engineering Mathematics-I", credits: 4, maxInternal: 40, maxExternal: 60 },
  { code: "CS102", name: "Engineering Physics", credits: 4, maxInternal: 40, maxExternal: 60 },
  { code: "CS103", name: "Basic Electrical & Electronics Engg", credits: 3, maxInternal: 40, maxExternal: 60 },
  { code: "CS104", name: "Programming for Problem Solving in C", credits: 4, maxInternal: 40, maxExternal: 60 },
  { code: "CS105", name: "Engineering Graphics & Design", credits: 3, maxInternal: 40, maxExternal: 60 },
  { code: "CS106", name: "Physics & Computing Laboratory", credits: 2, maxInternal: 40, maxExternal: 60 }
];

export const DEFAULT_SUBJECTS_SEM2 = [
  { code: "CS201", name: "Engineering Mathematics-II", credits: 4, maxInternal: 40, maxExternal: 60 },
  { code: "CS202", name: "Data Structures & Algorithms", credits: 4, maxInternal: 40, maxExternal: 60 },
  { code: "CS203", name: "Digital Logic & Computer Organization", credits: 3, maxInternal: 40, maxExternal: 60 },
  { code: "CS204", name: "Object Oriented Programming with Java", credits: 4, maxInternal: 40, maxExternal: 60 },
  { code: "CS205", name: "Environmental Science & Engineering", credits: 2, maxInternal: 40, maxExternal: 60 },
  { code: "CS206", name: "Data Structures & Java Laboratory", credits: 2, maxInternal: 40, maxExternal: 60 }
];

export const INITIAL_FACULTY = [
  {
    id: "F001",
    username: "faculty01",
    password: "faculty123",
    name: "Dr. Rajeshwar Rao",
    facultyId: "FAC-CS-101",
    designation: "Professor & Head of Department",
    department: "Computer Science & Engineering",
    email: "r.rao@apexengineering.edu",
    phone: "+91 98765 43210",
    assignedCourses: ["Data Structures & Algorithms", "Engineering Mathematics-I"],
    avatar: "RR"
  },
  {
    id: "F002",
    username: "faculty02",
    password: "faculty123",
    name: "Prof. Sunita Sharma",
    facultyId: "FAC-CS-108",
    designation: "Associate Professor & Academic Coordinator",
    department: "Computer Science & Engineering",
    email: "s.sharma@apexengineering.edu",
    phone: "+91 98765 43211",
    assignedCourses: ["Object Oriented Programming with Java", "Digital Logic Design"],
    avatar: "SS"
  }
];

export const INITIAL_STUDENTS = [
  {
    id: "S001",
    rollNumber: "21AIETCS001",
    username: "student01",
    password: "student123",
    name: "Aarav Sharma",
    branch: "Computer Science & Engineering",
    year: "1st Year",
    semester: "Semester 2",
    section: "A",
    email: "aarav.sharma@apexengineering.edu",
    phone: "+91 91234 56780",
    avatar: "AS",
    admissionDate: "2023-08-15"
  },
  {
    id: "S002",
    rollNumber: "21AIETCS002",
    username: "student02",
    password: "student123",
    name: "Ananya Deshmukh",
    branch: "Computer Science & Engineering",
    year: "1st Year",
    semester: "Semester 2",
    section: "A",
    email: "ananya.d@apexengineering.edu",
    phone: "+91 91234 56781",
    avatar: "AD",
    admissionDate: "2023-08-15"
  },
  {
    id: "S003",
    rollNumber: "21AIETCS003",
    username: "student03",
    password: "student123",
    name: "Rohan Varma",
    branch: "Computer Science & Engineering",
    year: "1st Year",
    semester: "Semester 2",
    section: "B",
    email: "rohan.varma@apexengineering.edu",
    phone: "+91 91234 56782",
    avatar: "RV",
    admissionDate: "2023-08-15"
  },
  {
    id: "S004",
    rollNumber: "21AIETCS004",
    username: "student04",
    password: "student123",
    name: "Pooja Krishnan",
    branch: "Computer Science & Engineering",
    year: "1st Year",
    semester: "Semester 2",
    section: "B",
    email: "pooja.k@apexengineering.edu",
    phone: "+91 91234 56783",
    avatar: "PK",
    admissionDate: "2023-08-15"
  },
  {
    id: "S005",
    rollNumber: "21AIETCS005",
    username: "student05",
    password: "student123",
    name: "Karthik Nair",
    branch: "Computer Science & Engineering",
    year: "1st Year",
    semester: "Semester 2",
    section: "A",
    email: "karthik.nair@apexengineering.edu",
    phone: "+91 91234 56784",
    avatar: "KN",
    admissionDate: "2023-08-15"
  }
];

export const INITIAL_MARKS = {
  S001: {
    semester1: [
      { code: "CS101", subject: "Engineering Mathematics-I", credits: 4, internal: 25, external: 45 },
      { code: "CS102", subject: "Engineering Physics", credits: 4, internal: 34, external: 51 },
      { code: "CS103", subject: "Basic Electrical & Electronics Engg", credits: 3, internal: 30, external: 48 },
      { code: "CS104", subject: "Programming for Problem Solving in C", credits: 4, internal: 36, external: 54 },
      { code: "CS105", subject: "Engineering Graphics & Design", credits: 3, internal: 32, external: 46 },
      { code: "CS106", subject: "Physics & Computing Laboratory", credits: 2, internal: 38, external: 56 }
    ],
    semester2: [
      { code: "CS201", subject: "Engineering Mathematics-II", credits: 4, internal: 32, external: 48 },
      { code: "CS202", subject: "Data Structures & Algorithms", credits: 4, internal: 35, external: 52 },
      { code: "CS203", subject: "Digital Logic & Computer Organization", credits: 3, internal: 29, external: 44 },
      { code: "CS204", subject: "Object Oriented Programming with Java", credits: 4, internal: 37, external: 55 },
      { code: "CS205", subject: "Environmental Science & Engineering", credits: 2, internal: 34, external: 50 },
      { code: "CS206", subject: "Data Structures & Java Laboratory", credits: 2, internal: 39, external: 58 }
    ]
  },
  S002: {
    semester1: [
      { code: "CS101", subject: "Engineering Mathematics-I", credits: 4, internal: 38, external: 56 },
      { code: "CS102", subject: "Engineering Physics", credits: 4, internal: 36, external: 54 },
      { code: "CS103", subject: "Basic Electrical & Electronics Engg", credits: 3, internal: 37, external: 52 },
      { code: "CS104", subject: "Programming for Problem Solving in C", credits: 4, internal: 39, external: 58 },
      { code: "CS105", subject: "Engineering Graphics & Design", credits: 3, internal: 35, external: 50 },
      { code: "CS106", subject: "Physics & Computing Laboratory", credits: 2, internal: 40, external: 58 }
    ],
    semester2: [
      { code: "CS201", subject: "Engineering Mathematics-II", credits: 4, internal: 37, external: 55 },
      { code: "CS202", subject: "Data Structures & Algorithms", credits: 4, internal: 38, external: 57 },
      { code: "CS203", subject: "Digital Logic & Computer Organization", credits: 3, internal: 36, external: 53 },
      { code: "CS204", subject: "Object Oriented Programming with Java", credits: 4, internal: 39, external: 59 },
      { code: "CS205", subject: "Environmental Science & Engineering", credits: 2, internal: 36, external: 52 },
      { code: "CS206", subject: "Data Structures & Java Laboratory", credits: 2, internal: 40, external: 60 }
    ]
  },
  S003: {
    semester1: [
      { code: "CS101", subject: "Engineering Mathematics-I", credits: 4, internal: 22, external: 35 },
      { code: "CS102", subject: "Engineering Physics", credits: 4, internal: 26, external: 40 },
      { code: "CS103", subject: "Basic Electrical & Electronics Engg", credits: 3, internal: 24, external: 38 },
      { code: "CS104", subject: "Programming for Problem Solving in C", credits: 4, internal: 28, external: 42 },
      { code: "CS105", subject: "Engineering Graphics & Design", credits: 3, internal: 25, external: 37 },
      { code: "CS106", subject: "Physics & Computing Laboratory", credits: 2, internal: 32, external: 48 }
    ],
    semester2: [
      { code: "CS201", subject: "Engineering Mathematics-II", credits: 4, internal: 24, external: 38 },
      { code: "CS202", subject: "Data Structures & Algorithms", credits: 4, internal: 27, external: 41 },
      { code: "CS203", subject: "Digital Logic & Computer Organization", credits: 3, internal: 25, external: 39 },
      { code: "CS204", subject: "Object Oriented Programming with Java", credits: 4, internal: 30, external: 45 },
      { code: "CS205", subject: "Environmental Science & Engineering", credits: 2, internal: 28, external: 42 },
      { code: "CS206", subject: "Data Structures & Java Laboratory", credits: 2, internal: 34, external: 50 }
    ]
  },
  S004: {
    semester1: [
      { code: "CS101", subject: "Engineering Mathematics-I", credits: 4, internal: 35, external: 50 },
      { code: "CS102", subject: "Engineering Physics", credits: 4, internal: 33, external: 48 },
      { code: "CS103", subject: "Basic Electrical & Electronics Engg", credits: 3, internal: 32, external: 47 },
      { code: "CS104", subject: "Programming for Problem Solving in C", credits: 4, internal: 37, external: 53 },
      { code: "CS105", subject: "Engineering Graphics & Design", credits: 3, internal: 34, external: 49 },
      { code: "CS106", subject: "Physics & Computing Laboratory", credits: 2, internal: 39, external: 57 }
    ],
    semester2: [
      { code: "CS201", subject: "Engineering Mathematics-II", credits: 4, internal: 34, external: 51 },
      { code: "CS202", subject: "Data Structures & Algorithms", credits: 4, internal: 36, external: 54 },
      { code: "CS203", subject: "Digital Logic & Computer Organization", credits: 3, internal: 33, external: 49 },
      { code: "CS204", subject: "Object Oriented Programming with Java", credits: 4, internal: 38, external: 56 },
      { code: "CS205", subject: "Environmental Science & Engineering", credits: 2, internal: 35, external: 51 },
      { code: "CS206", subject: "Data Structures & Java Laboratory", credits: 2, internal: 39, external: 58 }
    ]
  },
  S005: {
    semester1: [
      { code: "CS101", subject: "Engineering Mathematics-I", credits: 4, internal: 28, external: 42 },
      { code: "CS102", subject: "Engineering Physics", credits: 4, internal: 30, external: 45 },
      { code: "CS103", subject: "Basic Electrical & Electronics Engg", credits: 3, internal: 27, external: 41 },
      { code: "CS104", subject: "Programming for Problem Solving in C", credits: 4, internal: 32, external: 48 },
      { code: "CS105", subject: "Engineering Graphics & Design", credits: 3, internal: 29, external: 43 },
      { code: "CS106", subject: "Physics & Computing Laboratory", credits: 2, internal: 35, external: 52 }
    ],
    semester2: [
      { code: "CS201", subject: "Engineering Mathematics-II", credits: 4, internal: 30, external: 44 },
      { code: "CS202", subject: "Data Structures & Algorithms", credits: 4, internal: 31, external: 46 },
      { code: "CS203", subject: "Digital Logic & Computer Organization", credits: 3, internal: 28, external: 42 },
      { code: "CS204", subject: "Object Oriented Programming with Java", credits: 4, internal: 33, external: 49 },
      { code: "CS205", subject: "Environmental Science & Engineering", credits: 2, internal: 31, external: 45 },
      { code: "CS206", subject: "Data Structures & Java Laboratory", credits: 2, internal: 36, external: 54 }
    ]
  }
};

export const INITIAL_ATTENDANCE = {
  S001: [
    { code: "CS201", subject: "Engineering Mathematics-II", totalClasses: 45, present: 41, absent: 4, percentage: 91.11 },
    { code: "CS202", subject: "Data Structures & Algorithms", totalClasses: 48, present: 42, absent: 6, percentage: 87.50 },
    { code: "CS203", subject: "Digital Logic & Computer Organization", totalClasses: 40, present: 35, absent: 5, percentage: 87.50 },
    { code: "CS204", subject: "Object Oriented Programming with Java", totalClasses: 46, present: 43, absent: 3, percentage: 93.48 },
    { code: "CS205", subject: "Environmental Science & Engineering", totalClasses: 25, present: 22, absent: 3, percentage: 88.00 },
    { code: "CS206", subject: "Data Structures & Java Laboratory", totalClasses: 30, present: 28, absent: 2, percentage: 93.33 }
  ],
  S002: [
    { code: "CS201", subject: "Engineering Mathematics-II", totalClasses: 45, present: 44, absent: 1, percentage: 97.78 },
    { code: "CS202", subject: "Data Structures & Algorithms", totalClasses: 48, present: 46, absent: 2, percentage: 95.83 },
    { code: "CS203", subject: "Digital Logic & Computer Organization", totalClasses: 40, present: 39, absent: 1, percentage: 97.50 },
    { code: "CS204", subject: "Object Oriented Programming with Java", totalClasses: 46, present: 45, absent: 1, percentage: 97.83 },
    { code: "CS205", subject: "Environmental Science & Engineering", totalClasses: 25, present: 24, absent: 1, percentage: 96.00 },
    { code: "CS206", subject: "Data Structures & Java Laboratory", totalClasses: 30, present: 30, absent: 0, percentage: 100.00 }
  ],
  S003: [
    { code: "CS201", subject: "Engineering Mathematics-II", totalClasses: 45, present: 32, absent: 13, percentage: 71.11 },
    { code: "CS202", subject: "Data Structures & Algorithms", totalClasses: 48, present: 34, absent: 14, percentage: 70.83 },
    { code: "CS203", subject: "Digital Logic & Computer Organization", totalClasses: 40, present: 28, absent: 12, percentage: 70.00 },
    { code: "CS204", subject: "Object Oriented Programming with Java", totalClasses: 46, present: 35, absent: 11, percentage: 76.09 },
    { code: "CS205", subject: "Environmental Science & Engineering", totalClasses: 25, present: 18, absent: 7, percentage: 72.00 },
    { code: "CS206", subject: "Data Structures & Java Laboratory", totalClasses: 30, present: 22, absent: 8, percentage: 73.33 }
  ],
  S004: [
    { code: "CS201", subject: "Engineering Mathematics-II", totalClasses: 45, present: 40, absent: 5, percentage: 88.89 },
    { code: "CS202", subject: "Data Structures & Algorithms", totalClasses: 48, present: 43, absent: 5, percentage: 89.58 },
    { code: "CS203", subject: "Digital Logic & Computer Organization", totalClasses: 40, present: 36, absent: 4, percentage: 90.00 },
    { code: "CS204", subject: "Object Oriented Programming with Java", totalClasses: 46, present: 42, absent: 4, percentage: 91.30 },
    { code: "CS205", subject: "Environmental Science & Engineering", totalClasses: 25, present: 23, absent: 2, percentage: 92.00 },
    { code: "CS206", subject: "Data Structures & Java Laboratory", totalClasses: 30, present: 27, absent: 3, percentage: 90.00 }
  ],
  S005: [
    { code: "CS201", subject: "Engineering Mathematics-II", totalClasses: 45, present: 36, absent: 9, percentage: 80.00 },
    { code: "CS202", subject: "Data Structures & Algorithms", totalClasses: 48, present: 39, absent: 9, percentage: 81.25 },
    { code: "CS203", subject: "Digital Logic & Computer Organization", totalClasses: 40, present: 33, absent: 7, percentage: 82.50 },
    { code: "CS204", subject: "Object Oriented Programming with Java", totalClasses: 46, present: 38, absent: 8, percentage: 82.61 },
    { code: "CS205", subject: "Environmental Science & Engineering", totalClasses: 25, present: 21, absent: 4, percentage: 84.00 },
    { code: "CS206", subject: "Data Structures & Java Laboratory", totalClasses: 30, present: 25, absent: 5, percentage: 83.33 }
  ]
};
