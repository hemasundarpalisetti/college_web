/**
 * Initial Pre-loaded Data for College Portal
 * Configured with Students across all 4 Years (1st, 2nd, 3rd, 4th Year)
 * Department: AIML, Sri Sivani College of Engineering (Autonomous)
 */

// 1st Year - 1st Semester Subjects (R23 Curriculum)
export const DEFAULT_SUBJECTS_SEM1 = [
  { code: "BS1101", name: "Linear Algebra and Calculus", credits: 4, maxInternal: 40, maxExternal: 60 },
  { code: "CS1101", name: "Introduction to Programming", credits: 3, maxInternal: 40, maxExternal: 60 },
  { code: "HS1101", name: "Communication English", credits: 3, maxInternal: 40, maxExternal: 60 },
  { code: "BS1102", name: "Engineering Physics", credits: 3, maxInternal: 40, maxExternal: 60 },
  { code: "ES1101", name: "Basic Civil and Mechanical Engineering", credits: 4, maxInternal: 40, maxExternal: 60 }
];

// 1st Year - 2nd Semester Subjects (R23 Curriculum)
export const DEFAULT_SUBJECTS_SEM2 = [
  { code: "CS1201", name: "Data Structures", credits: 3, maxInternal: 40, maxExternal: 60 },
  { code: "BS1201", name: "Differential Equations and Vector Calculus", credits: 4, maxInternal: 40, maxExternal: 60 },
  { code: "BS1202", name: "Engineering Chemistry", credits: 3, maxInternal: 40, maxExternal: 60 },
  { code: "ES1201", name: "Engineering Graphics", credits: 3, maxInternal: 40, maxExternal: 60 },
  { code: "ES1202", name: "Basic Electrical and Electronics Lab", credits: 2, maxInternal: 40, maxExternal: 60 }
];

// 3rd Year Core Subjects
export const SUBJECTS_YEAR3 = [
  { code: "AI3101", name: "Deep Learning & Neural Networks", credits: 4, maxInternal: 40, maxExternal: 60 },
  { code: "AI3102", name: "Natural Language Processing", credits: 4, maxInternal: 40, maxExternal: 60 },
  { code: "AI3103", name: "Computer Vision Fundamentals", credits: 3, maxInternal: 40, maxExternal: 60 },
  { code: "CS3104", name: "Cloud Computing & DevOps", credits: 3, maxInternal: 40, maxExternal: 60 },
  { code: "AI3105", name: "AI Application Development Lab", credits: 2, maxInternal: 40, maxExternal: 60 }
];

// 4th Year Core Subjects
export const SUBJECTS_YEAR4 = [
  { code: "AI4101", name: "Generative AI & LLM Systems", credits: 4, maxInternal: 40, maxExternal: 60 },
  { code: "AI4102", name: "Reinforcement Learning & Robotics", credits: 4, maxInternal: 40, maxExternal: 60 },
  { code: "CS4103", name: "Cybersecurity in Machine Learning", credits: 3, maxInternal: 40, maxExternal: 60 },
  { code: "AI4104", name: "Capstone Major Project Work", credits: 6, maxInternal: 40, maxExternal: 60 }
];

export const INITIAL_FACULTY = [
  {
    id: "F001",
    username: "pradeep",
    aliases: ["faculty01", "hod_aiml", "pradeep"],
    password: "faculty123",
    name: "Dr. K. Pradeep",
    facultyId: "FAC-AIML-HOD",
    designation: "Professor & Head of Department (HOD)",
    department: "Artificial Intelligence & Machine Learning (AIML)",
    email: "pradeep.hod@srisivani.edu.in",
    phone: "+91 98480 12345",
    assignedCourses: ["Linear Algebra and Calculus", "Artificial Intelligence & Machine Learning"],
    avatar: "KP"
  },
  {
    id: "F002",
    username: "himabindu",
    aliases: ["faculty02", "ct_aiml", "himabindu"],
    password: "faculty123",
    name: "Prof. Himabindu",
    facultyId: "FAC-AIML-CT2",
    designation: "Associate Professor & Academic Coordinator",
    department: "Artificial Intelligence & Machine Learning (AIML)",
    email: "himabindu@srisivani.edu.in",
    phone: "+91 98480 67890",
    assignedCourses: ["Data Structures", "Introduction to Programming"],
    avatar: "HB"
  }
];

export const INITIAL_STUDENTS = [
  // ==========================================
  // 1ST YEAR STUDENTS (Batch 2025-2029)
  // ==========================================
  {
    id: "S101",
    rollNumber: "26W61A6101",
    username: "26W61A6101",
    aliases: ["ananya", "student101", "26w61a6101"],
    password: "student123",
    name: "Ananya Sharma",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "1st Year",
    semester: "Semester 1",
    section: "A",
    email: "26w61a6101@srisivani.edu.in",
    phone: "+91 98481 61010",
    studentPhone: "+91 98481 61010",
    parentPhone: "+91 94401 61010",
    parentName: "R. Sharma",
    avatar: "AS",
    admissionDate: "2025-08-20"
  },
  {
    id: "S102",
    rollNumber: "26W61A6102",
    username: "26W61A6102",
    aliases: ["saiteja", "student102", "26w61a6102"],
    password: "student123",
    name: "K. Sai Teja",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "1st Year",
    semester: "Semester 1",
    section: "A",
    email: "26w61a6102@srisivani.edu.in",
    phone: "+91 98481 61020",
    studentPhone: "+91 98481 61020",
    parentPhone: "+91 94401 61020",
    parentName: "K. Appala Naidu",
    avatar: "ST",
    admissionDate: "2025-08-20"
  },
  {
    id: "S103",
    rollNumber: "26W61A6103",
    username: "26W61A6103",
    aliases: ["rohan", "student103", "26w61a6103"],
    password: "student123",
    name: "Rohan Verma",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "1st Year",
    semester: "Semester 1",
    section: "A",
    email: "26w61a6103@srisivani.edu.in",
    phone: "+91 98481 61030",
    studentPhone: "+91 98481 61030",
    parentPhone: "+91 94401 61030",
    parentName: "M. Verma",
    avatar: "RV",
    admissionDate: "2025-08-20"
  },
  {
    id: "S104",
    rollNumber: "26W61A6104",
    username: "26W61A6104",
    aliases: ["divya", "student104", "26w61a6104"],
    password: "student123",
    name: "P. Divya Reddy",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "1st Year",
    semester: "Semester 1",
    section: "A",
    email: "26w61a6104@srisivani.edu.in",
    phone: "+91 98481 61040",
    studentPhone: "+91 98481 61040",
    parentPhone: "+91 94401 61040",
    parentName: "P. Venkata Reddy",
    avatar: "DR",
    admissionDate: "2025-08-20"
  },

  // ==========================================
  // 2ND YEAR STUDENTS (Batch 2024-2028)
  // ==========================================
  {
    id: "S001",
    rollNumber: "25W61A6142",
    username: "25W61A6142",
    aliases: ["hemasundar", "student01", "25w61a6142", "palisetti"],
    password: "student123",
    name: "Palisetti Hemasundar",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "2nd Year",
    semester: "Semester 3",
    section: "A",
    email: "25w61a6142@srisivani.edu.in",
    phone: "+91 91234 61420",
    studentPhone: "+91 91234 61420",
    parentPhone: "+91 94401 61420",
    parentName: "P. Venkateswar Rao",
    avatar: "PH",
    admissionDate: "2024-08-16"
  },
  {
    id: "S002",
    rollNumber: "25W61A6122",
    username: "25W61A6122",
    aliases: ["ganesh", "student02", "25w61a6122", "kalla"],
    password: "student123",
    name: "Kalla Ganesh Siva Sai",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "2nd Year",
    semester: "Semester 3",
    section: "A",
    email: "25w61a6122@srisivani.edu.in",
    phone: "+91 91234 61220",
    studentPhone: "+91 91234 61220",
    parentPhone: "+91 94401 61220",
    parentName: "K. Santhosh",
    avatar: "KG",
    admissionDate: "2024-08-16"
  },
  {
    id: "S003",
    rollNumber: "25W61A6134",
    username: "25W61A6134",
    aliases: ["raju", "student03", "25w61a6134", "metikoti"],
    password: "student123",
    name: "Metikoti Raju",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "2nd Year",
    semester: "Semester 3",
    section: "A",
    email: "25w61a6134@srisivani.edu.in",
    phone: "+91 91234 61340",
    studentPhone: "+91 91234 61340",
    parentPhone: "+91 94401 61340",
    parentName: "M. Eshwara Rao",
    avatar: "MR",
    admissionDate: "2024-08-16"
  },
  {
    id: "S004",
    rollNumber: "25W61A6111",
    username: "25W61A6111",
    aliases: ["vivek", "student04", "25w61a6111", "burle"],
    password: "student123",
    name: "Burle Vivek",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "2nd Year",
    semester: "Semester 3",
    section: "A",
    email: "25w61a6111@srisivani.edu.in",
    phone: "+91 91234 61110",
    studentPhone: "+91 91234 61110",
    parentPhone: "+91 94401 61110",
    parentName: "B. Sairaju",
    avatar: "BV",
    admissionDate: "2024-08-16"
  },
  {
    id: "S005",
    rollNumber: "25W61A6157",
    username: "25W61A6157",
    aliases: ["bhasa", "student05", "25w61a6157", "shaik"],
    password: "student123",
    name: "Shaik Bhasa",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "2nd Year",
    semester: "Semester 3",
    section: "A",
    email: "25w61a6157@srisivani.edu.in",
    phone: "+91 91234 61570",
    studentPhone: "+91 91234 61570",
    parentPhone: "+91 94401 61570",
    parentName: "S. Karimullah",
    avatar: "SB",
    admissionDate: "2024-08-16"
  },
  {
    id: "S006",
    rollNumber: "25W61A6103",
    username: "25W61A6103",
    aliases: ["hemanth", "student06", "25w61a6103", "butu"],
    password: "student123",
    name: "Butu Hemanth",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "2nd Year",
    semester: "Semester 3",
    section: "A",
    email: "25w61a6103@srisivani.edu.in",
    phone: "+91 91234 61030",
    studentPhone: "+91 91234 61030",
    parentPhone: "+91 94401 61030",
    parentName: "B. Govinda Rao",
    avatar: "BH",
    admissionDate: "2024-08-16"
  },
  {
    id: "S007",
    rollNumber: "25W61A6147",
    username: "25W61A6147",
    aliases: ["gowtham", "student07", "25w61a6147", "pidugu"],
    password: "student123",
    name: "Pidugu Gowtham",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "2nd Year",
    semester: "Semester 3",
    section: "A",
    email: "25w61a6147@srisivani.edu.in",
    phone: "+91 91234 61470",
    studentPhone: "+91 91234 61470",
    parentPhone: "+91 94401 61470",
    parentName: "P. Srinivasa Rao",
    avatar: "PG",
    admissionDate: "2024-08-16"
  },

  // ==========================================
  // 3RD YEAR STUDENTS (Batch 2023-2027)
  // ==========================================
  {
    id: "S301",
    rollNumber: "23W61A6101",
    username: "23W61A6101",
    aliases: ["saikumar", "student301", "23w61a6101"],
    password: "student123",
    name: "Challa Sai Kumar",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "3rd Year",
    semester: "Semester 5",
    section: "A",
    email: "23w61a6101@srisivani.edu.in",
    phone: "+91 98483 61010",
    studentPhone: "+91 98483 61010",
    parentPhone: "+91 94403 61010",
    parentName: "C. Krishna",
    avatar: "CS",
    admissionDate: "2023-08-18"
  },
  {
    id: "S302",
    rollNumber: "23W61A6115",
    username: "23W61A6115",
    aliases: ["tarun", "student302", "23w61a6115"],
    password: "student123",
    name: "Mallidi Tarun",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "3rd Year",
    semester: "Semester 5",
    section: "A",
    email: "23w61a6115@srisivani.edu.in",
    phone: "+91 98483 61150",
    studentPhone: "+91 98483 61150",
    parentPhone: "+91 94403 61150",
    parentName: "M. Bhaskara Rao",
    avatar: "MT",
    admissionDate: "2023-08-18"
  },
  {
    id: "S303",
    rollNumber: "23W61A6124",
    username: "23W61A6124",
    aliases: ["sneha", "student303", "23w61a6124"],
    password: "student123",
    name: "Boddepalli Sneha",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "3rd Year",
    semester: "Semester 5",
    section: "A",
    email: "23w61a6124@srisivani.edu.in",
    phone: "+91 98483 61240",
    studentPhone: "+91 98483 61240",
    parentPhone: "+91 94403 61240",
    parentName: "B. Jagannadham",
    avatar: "BS",
    admissionDate: "2023-08-18"
  },
  {
    id: "S304",
    rollNumber: "23W61A6138",
    username: "23W61A6138",
    aliases: ["rahul", "student304", "23w61a6138"],
    password: "student123",
    name: "Korada Rahul",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "3rd Year",
    semester: "Semester 5",
    section: "A",
    email: "23w61a6138@srisivani.edu.in",
    phone: "+91 98483 61380",
    studentPhone: "+91 98483 61380",
    parentPhone: "+91 94403 61380",
    parentName: "K. Mohan Rao",
    avatar: "KR",
    admissionDate: "2023-08-18"
  },

  // ==========================================
  // 4TH YEAR STUDENTS (Batch 2022-2026)
  // ==========================================
  {
    id: "S401",
    rollNumber: "22W61A6105",
    username: "22W61A6105",
    aliases: ["manoj", "student401", "22w61a6105"],
    password: "student123",
    name: "Gorle Manoj",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "4th Year",
    semester: "Semester 7",
    section: "A",
    email: "22w61a6105@srisivani.edu.in",
    phone: "+91 98484 61050",
    studentPhone: "+91 98484 61050",
    parentPhone: "+91 94404 61050",
    parentName: "G. Appa Rao",
    avatar: "GM",
    admissionDate: "2022-08-15"
  },
  {
    id: "S402",
    rollNumber: "22W61A6118",
    username: "22W61A6118",
    aliases: ["haritha", "student402", "22w61a6118"],
    password: "student123",
    name: "Potnuru Haritha",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "4th Year",
    semester: "Semester 7",
    section: "A",
    email: "22w61a6118@srisivani.edu.in",
    phone: "+91 98484 61180",
    studentPhone: "+91 98484 61180",
    parentPhone: "+91 94404 61180",
    parentName: "P. Lokanatham",
    avatar: "PH",
    admissionDate: "2022-08-15"
  },
  {
    id: "S403",
    rollNumber: "22W61A6129",
    username: "22W61A6129",
    aliases: ["aditya", "student403", "22w61a6129"],
    password: "student123",
    name: "Singupuram Aditya",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "4th Year",
    semester: "Semester 7",
    section: "A",
    email: "22w61a6129@srisivani.edu.in",
    phone: "+91 98484 61290",
    studentPhone: "+91 98484 61290",
    parentPhone: "+91 94404 61290",
    parentName: "S. Vaikunta Rao",
    avatar: "SA",
    admissionDate: "2022-08-15"
  },
  {
    id: "S404",
    rollNumber: "22W61A6145",
    username: "22W61A6145",
    aliases: ["vamsi", "student404", "22w61a6145"],
    password: "student123",
    name: "Nemani Vamsi",
    branch: "Artificial Intelligence & Machine Learning (AIML)",
    year: "4th Year",
    semester: "Semester 7",
    section: "A",
    email: "22w61a6145@srisivani.edu.in",
    phone: "+91 98484 61450",
    studentPhone: "+91 98484 61450",
    parentPhone: "+91 94404 61450",
    parentName: "N. Prasad Rao",
    avatar: "NV",
    admissionDate: "2022-08-15"
  }
];

export const INITIAL_MARKS = {
  // 1st Year Students
  S101: {
    semester1: [
      { code: "BS1101", subject: "Linear Algebra and Calculus", credits: 4, internal: 38, external: 56 },
      { code: "CS1101", subject: "Introduction to Programming", credits: 3, internal: 39, external: 58 },
      { code: "HS1101", subject: "Communication English", credits: 3, internal: 37, external: 55 },
      { code: "BS1102", subject: "Engineering Physics", credits: 3, internal: 36, external: 54 },
      { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", credits: 4, internal: 38, external: 57 }
    ],
    semester2: [
      { code: "CS1201", subject: "Data Structures", credits: 3, internal: 37, external: 55 },
      { code: "BS1201", subject: "Differential Equations and Vector Calculus", credits: 4, internal: 38, external: 57 },
      { code: "BS1202", subject: "Engineering Chemistry", credits: 3, internal: 36, external: 54 },
      { code: "ES1201", subject: "Engineering Graphics", credits: 3, internal: 38, external: 56 },
      { code: "ES1202", subject: "Basic Electrical and Electronics Lab", credits: 2, internal: 40, external: 59 }
    ]
  },
  S102: {
    semester1: [
      { code: "BS1101", subject: "Linear Algebra and Calculus", credits: 4, internal: 34, external: 50 },
      { code: "CS1101", subject: "Introduction to Programming", credits: 3, internal: 35, external: 52 },
      { code: "HS1101", subject: "Communication English", credits: 3, internal: 36, external: 53 },
      { code: "BS1102", subject: "Engineering Physics", credits: 3, internal: 33, external: 49 },
      { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", credits: 4, internal: 35, external: 51 }
    ],
    semester2: [
      { code: "CS1201", subject: "Data Structures", credits: 3, internal: 34, external: 50 },
      { code: "BS1201", subject: "Differential Equations and Vector Calculus", credits: 4, internal: 35, external: 52 },
      { code: "BS1202", subject: "Engineering Chemistry", credits: 3, internal: 33, external: 48 },
      { code: "ES1201", subject: "Engineering Graphics", credits: 3, internal: 35, external: 52 },
      { code: "ES1202", subject: "Basic Electrical and Electronics Lab", credits: 2, internal: 38, external: 56 }
    ]
  },
  S103: {
    semester1: [
      { code: "BS1101", subject: "Linear Algebra and Calculus", credits: 4, internal: 32, external: 48 },
      { code: "CS1101", subject: "Introduction to Programming", credits: 3, internal: 34, external: 50 },
      { code: "HS1101", subject: "Communication English", credits: 3, internal: 35, external: 52 },
      { code: "BS1102", subject: "Engineering Physics", credits: 3, internal: 31, external: 46 },
      { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", credits: 4, internal: 33, external: 49 }
    ],
    semester2: [
      { code: "CS1201", subject: "Data Structures", credits: 3, internal: 33, external: 49 },
      { code: "BS1201", subject: "Differential Equations and Vector Calculus", credits: 4, internal: 32, external: 48 },
      { code: "BS1202", subject: "Engineering Chemistry", credits: 3, internal: 31, external: 46 },
      { code: "ES1201", subject: "Engineering Graphics", credits: 3, internal: 34, external: 50 },
      { code: "ES1202", subject: "Basic Electrical and Electronics Lab", credits: 2, internal: 37, external: 54 }
    ]
  },
  S104: {
    semester1: [
      { code: "BS1101", subject: "Linear Algebra and Calculus", credits: 4, internal: 36, external: 54 },
      { code: "CS1101", subject: "Introduction to Programming", credits: 3, internal: 37, external: 55 },
      { code: "HS1101", subject: "Communication English", credits: 3, internal: 38, external: 56 },
      { code: "BS1102", subject: "Engineering Physics", credits: 3, internal: 35, external: 52 },
      { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", credits: 4, internal: 37, external: 55 }
    ],
    semester2: [
      { code: "CS1201", subject: "Data Structures", credits: 3, internal: 36, external: 54 },
      { code: "BS1201", subject: "Differential Equations and Vector Calculus", credits: 4, internal: 37, external: 55 },
      { code: "BS1202", subject: "Engineering Chemistry", credits: 3, internal: 35, external: 52 },
      { code: "ES1201", subject: "Engineering Graphics", credits: 3, internal: 36, external: 54 },
      { code: "ES1202", subject: "Basic Electrical and Electronics Lab", credits: 2, internal: 39, external: 58 }
    ]
  },

  // 2nd Year Students (2nd Year AIML)
  S001: {
    semester1: [
      { code: "BS1101", subject: "Linear Algebra and Calculus", credits: 4, internal: 38, external: 57 },
      { code: "CS1101", subject: "Introduction to Programming", credits: 3, internal: 39, external: 58 },
      { code: "HS1101", subject: "Communication English", credits: 3, internal: 37, external: 55 },
      { code: "BS1102", subject: "Engineering Physics", credits: 3, internal: 36, external: 54 },
      { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", credits: 4, internal: 38, external: 56 }
    ],
    semester2: [
      { code: "CS1201", subject: "Data Structures", credits: 3, internal: 39, external: 58 },
      { code: "BS1201", subject: "Differential Equations and Vector Calculus", credits: 4, internal: 38, external: 57 },
      { code: "BS1202", subject: "Engineering Chemistry", credits: 3, internal: 37, external: 55 },
      { code: "ES1201", subject: "Engineering Graphics", credits: 3, internal: 38, external: 56 },
      { code: "ES1202", subject: "Basic Electrical and Electronics Lab", credits: 2, internal: 40, external: 60 }
    ]
  },
  S002: {
    semester1: [
      { code: "BS1101", subject: "Linear Algebra and Calculus", credits: 4, internal: 35, external: 52 },
      { code: "CS1101", subject: "Introduction to Programming", credits: 3, internal: 36, external: 54 },
      { code: "HS1101", subject: "Communication English", credits: 3, internal: 35, external: 51 },
      { code: "BS1102", subject: "Engineering Physics", credits: 3, internal: 33, external: 49 },
      { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", credits: 4, internal: 36, external: 53 }
    ],
    semester2: [
      { code: "CS1201", subject: "Data Structures", credits: 3, internal: 36, external: 53 },
      { code: "BS1201", subject: "Differential Equations and Vector Calculus", credits: 4, internal: 37, external: 54 },
      { code: "BS1202", subject: "Engineering Chemistry", credits: 3, internal: 34, external: 50 },
      { code: "ES1201", subject: "Engineering Graphics", credits: 3, internal: 36, external: 53 },
      { code: "ES1202", subject: "Basic Electrical and Electronics Lab", credits: 2, internal: 39, external: 58 }
    ]
  },
  S003: {
    semester1: [
      { code: "BS1101", subject: "Linear Algebra and Calculus", credits: 4, internal: 33, external: 49 },
      { code: "CS1101", subject: "Introduction to Programming", credits: 3, internal: 34, external: 50 },
      { code: "HS1101", subject: "Communication English", credits: 3, internal: 33, external: 48 },
      { code: "BS1102", subject: "Engineering Physics", credits: 3, internal: 32, external: 47 },
      { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", credits: 4, internal: 34, external: 50 }
    ],
    semester2: [
      { code: "CS1201", subject: "Data Structures", credits: 3, internal: 34, external: 51 },
      { code: "BS1201", subject: "Differential Equations and Vector Calculus", credits: 4, internal: 33, external: 49 },
      { code: "BS1202", subject: "Engineering Chemistry", credits: 3, internal: 32, external: 48 },
      { code: "ES1201", subject: "Engineering Graphics", credits: 3, internal: 35, external: 51 },
      { code: "ES1202", subject: "Basic Electrical and Electronics Lab", credits: 2, internal: 38, external: 56 }
    ]
  },
  S004: {
    semester1: [
      { code: "BS1101", subject: "Linear Algebra and Calculus", credits: 4, internal: 36, external: 54 },
      { code: "CS1101", subject: "Introduction to Programming", credits: 3, internal: 37, external: 55 },
      { code: "HS1101", subject: "Communication English", credits: 3, internal: 36, external: 53 },
      { code: "BS1102", subject: "Engineering Physics", credits: 3, internal: 34, external: 50 },
      { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", credits: 4, internal: 37, external: 55 }
    ],
    semester2: [
      { code: "CS1201", subject: "Data Structures", credits: 3, internal: 37, external: 55 },
      { code: "BS1201", subject: "Differential Equations and Vector Calculus", credits: 4, internal: 38, external: 56 },
      { code: "BS1202", subject: "Engineering Chemistry", credits: 3, internal: 35, external: 52 },
      { code: "ES1201", subject: "Engineering Graphics", credits: 3, internal: 37, external: 54 },
      { code: "ES1202", subject: "Basic Electrical and Electronics Lab", credits: 2, internal: 40, external: 59 }
    ]
  },
  S005: {
    semester1: [
      { code: "BS1101", subject: "Linear Algebra and Calculus", credits: 4, internal: 34, external: 50 },
      { code: "CS1101", subject: "Introduction to Programming", credits: 3, internal: 35, external: 51 },
      { code: "HS1101", subject: "Communication English", credits: 3, internal: 34, external: 50 },
      { code: "BS1102", subject: "Engineering Physics", credits: 3, internal: 32, external: 47 },
      { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", credits: 4, internal: 35, external: 51 }
    ],
    semester2: [
      { code: "CS1201", subject: "Data Structures", credits: 3, internal: 35, external: 52 },
      { code: "BS1201", subject: "Differential Equations and Vector Calculus", credits: 4, internal: 36, external: 53 },
      { code: "BS1202", subject: "Engineering Chemistry", credits: 3, internal: 33, external: 49 },
      { code: "ES1201", subject: "Engineering Graphics", credits: 3, internal: 36, external: 52 },
      { code: "ES1202", subject: "Basic Electrical and Electronics Lab", credits: 2, internal: 39, external: 57 }
    ]
  },
  S006: {
    semester1: [
      { code: "BS1101", subject: "Linear Algebra and Calculus", credits: 4, internal: 32, external: 47 },
      { code: "CS1101", subject: "Introduction to Programming", credits: 3, internal: 33, external: 48 },
      { code: "HS1101", subject: "Communication English", credits: 3, internal: 32, external: 46 },
      { code: "BS1102", subject: "Engineering Physics", credits: 3, internal: 30, external: 44 },
      { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", credits: 4, internal: 33, external: 48 }
    ],
    semester2: [
      { code: "CS1201", subject: "Data Structures", credits: 3, internal: 33, external: 49 },
      { code: "BS1201", subject: "Differential Equations and Vector Calculus", credits: 4, internal: 34, external: 50 },
      { code: "BS1202", subject: "Engineering Chemistry", credits: 3, internal: 31, external: 46 },
      { code: "ES1201", subject: "Engineering Graphics", credits: 3, internal: 34, external: 49 },
      { code: "ES1202", subject: "Basic Electrical and Electronics Lab", credits: 2, internal: 37, external: 55 }
    ]
  },
  S007: {
    semester1: [
      { code: "BS1101", subject: "Linear Algebra and Calculus", credits: 4, internal: 37, external: 55 },
      { code: "CS1101", subject: "Introduction to Programming", credits: 3, internal: 38, external: 56 },
      { code: "HS1101", subject: "Communication English", credits: 3, internal: 37, external: 54 },
      { code: "BS1102", subject: "Engineering Physics", credits: 3, internal: 35, external: 51 },
      { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", credits: 4, internal: 38, external: 56 }
    ],
    semester2: [
      { code: "CS1201", subject: "Data Structures", credits: 3, internal: 38, external: 56 },
      { code: "BS1201", subject: "Differential Equations and Vector Calculus", credits: 4, internal: 39, external: 57 },
      { code: "BS1202", subject: "Engineering Chemistry", credits: 3, internal: 36, external: 53 },
      { code: "ES1201", subject: "Engineering Graphics", credits: 3, internal: 38, external: 55 },
      { code: "ES1202", subject: "Basic Electrical and Electronics Lab", credits: 2, internal: 40, external: 60 }
    ]
  },

  // 3rd Year Students
  S301: {
    semester1: [
      { code: "AI3101", subject: "Deep Learning & Neural Networks", credits: 4, internal: 38, external: 56 },
      { code: "AI3102", subject: "Natural Language Processing", credits: 4, internal: 37, external: 55 },
      { code: "AI3103", subject: "Computer Vision Fundamentals", credits: 3, internal: 38, external: 57 },
      { code: "CS3104", subject: "Cloud Computing & DevOps", credits: 3, internal: 36, external: 54 },
      { code: "AI3105", subject: "AI Application Development Lab", credits: 2, internal: 40, external: 59 }
    ],
    semester2: [
      { code: "AI3201", subject: "Reinforcement Learning", credits: 4, internal: 37, external: 55 },
      { code: "AI3202", subject: "Big Data & Distributed AI", credits: 4, internal: 38, external: 56 },
      { code: "AI3203", subject: "AI Ethics & Governance", credits: 3, internal: 39, external: 58 },
      { code: "CS3204", subject: "Full Stack AI Development", credits: 3, internal: 38, external: 57 },
      { code: "AI3205", subject: "Industry Mini Project", credits: 2, internal: 40, external: 60 }
    ]
  },
  S302: {
    semester1: [
      { code: "AI3101", subject: "Deep Learning & Neural Networks", credits: 4, internal: 34, external: 51 },
      { code: "AI3102", subject: "Natural Language Processing", credits: 4, internal: 35, external: 52 },
      { code: "AI3103", subject: "Computer Vision Fundamentals", credits: 3, internal: 33, external: 49 },
      { code: "CS3104", subject: "Cloud Computing & DevOps", credits: 3, internal: 35, external: 51 },
      { code: "AI3105", subject: "AI Application Development Lab", credits: 2, internal: 38, external: 56 }
    ],
    semester2: [
      { code: "AI3201", subject: "Reinforcement Learning", credits: 4, internal: 35, external: 52 },
      { code: "AI3202", subject: "Big Data & Distributed AI", credits: 4, internal: 34, external: 50 },
      { code: "AI3203", subject: "AI Ethics & Governance", credits: 3, internal: 36, external: 53 },
      { code: "CS3204", subject: "Full Stack AI Development", credits: 3, internal: 35, external: 51 },
      { code: "AI3205", subject: "Industry Mini Project", credits: 2, internal: 38, external: 57 }
    ]
  },
  S303: {
    semester1: [
      { code: "AI3101", subject: "Deep Learning & Neural Networks", credits: 4, internal: 36, external: 54 },
      { code: "AI3102", subject: "Natural Language Processing", credits: 4, internal: 37, external: 55 },
      { code: "AI3103", subject: "Computer Vision Fundamentals", credits: 3, internal: 36, external: 53 },
      { code: "CS3104", subject: "Cloud Computing & DevOps", credits: 3, internal: 37, external: 54 },
      { code: "AI3105", subject: "AI Application Development Lab", credits: 2, internal: 39, external: 58 }
    ],
    semester2: [
      { code: "AI3201", subject: "Reinforcement Learning", credits: 4, internal: 36, external: 54 },
      { code: "AI3202", subject: "Big Data & Distributed AI", credits: 4, internal: 37, external: 55 },
      { code: "AI3203", subject: "AI Ethics & Governance", credits: 3, internal: 38, external: 56 },
      { code: "CS3204", subject: "Full Stack AI Development", credits: 3, internal: 36, external: 54 },
      { code: "AI3205", subject: "Industry Mini Project", credits: 2, internal: 39, external: 58 }
    ]
  },
  S304: {
    semester1: [
      { code: "AI3101", subject: "Deep Learning & Neural Networks", credits: 4, internal: 32, external: 48 },
      { code: "AI3102", subject: "Natural Language Processing", credits: 4, internal: 33, external: 49 },
      { code: "AI3103", subject: "Computer Vision Fundamentals", credits: 3, internal: 32, external: 47 },
      { code: "CS3104", subject: "Cloud Computing & DevOps", credits: 3, internal: 34, external: 50 },
      { code: "AI3105", subject: "AI Application Development Lab", credits: 2, internal: 37, external: 55 }
    ],
    semester2: [
      { code: "AI3201", subject: "Reinforcement Learning", credits: 4, internal: 33, external: 48 },
      { code: "AI3202", subject: "Big Data & Distributed AI", credits: 4, internal: 32, external: 47 },
      { code: "AI3203", subject: "AI Ethics & Governance", credits: 3, internal: 34, external: 50 },
      { code: "CS3204", subject: "Full Stack AI Development", credits: 3, internal: 33, external: 49 },
      { code: "AI3205", subject: "Industry Mini Project", credits: 2, internal: 37, external: 55 }
    ]
  },

  // 4th Year Students
  S401: {
    semester1: [
      { code: "AI4101", subject: "Generative AI & LLM Systems", credits: 4, internal: 39, external: 58 },
      { code: "AI4102", subject: "Reinforcement Learning & Robotics", credits: 4, internal: 38, external: 57 },
      { code: "CS4103", subject: "Cybersecurity in Machine Learning", credits: 3, internal: 37, external: 55 },
      { code: "AI4104", subject: "Capstone Major Project Work", credits: 6, internal: 40, external: 60 }
    ],
    semester2: [
      { code: "AI4201", subject: "Autonomous Systems & Edge AI", credits: 4, internal: 39, external: 58 },
      { code: "AI4202", subject: "Industrial Internship & Seminar", credits: 6, internal: 40, external: 60 },
      { code: "AI4203", subject: "Comprehensive Viva Voce", credits: 2, internal: 38, external: 58 }
    ]
  },
  S402: {
    semester1: [
      { code: "AI4101", subject: "Generative AI & LLM Systems", credits: 4, internal: 36, external: 53 },
      { code: "AI4102", subject: "Reinforcement Learning & Robotics", credits: 4, internal: 35, external: 52 },
      { code: "CS4103", subject: "Cybersecurity in Machine Learning", credits: 3, internal: 36, external: 54 },
      { code: "AI4104", subject: "Capstone Major Project Work", credits: 6, internal: 38, external: 57 }
    ],
    semester2: [
      { code: "AI4201", subject: "Autonomous Systems & Edge AI", credits: 4, internal: 36, external: 54 },
      { code: "AI4202", subject: "Industrial Internship & Seminar", credits: 6, internal: 39, external: 58 },
      { code: "AI4203", subject: "Comprehensive Viva Voce", credits: 2, internal: 37, external: 55 }
    ]
  },
  S403: {
    semester1: [
      { code: "AI4101", subject: "Generative AI & LLM Systems", credits: 4, internal: 37, external: 55 },
      { code: "AI4102", subject: "Reinforcement Learning & Robotics", credits: 4, internal: 38, external: 56 },
      { code: "CS4103", subject: "Cybersecurity in Machine Learning", credits: 3, internal: 36, external: 54 },
      { code: "AI4104", subject: "Capstone Major Project Work", credits: 6, internal: 39, external: 58 }
    ],
    semester2: [
      { code: "AI4201", subject: "Autonomous Systems & Edge AI", credits: 4, internal: 38, external: 56 },
      { code: "AI4202", subject: "Industrial Internship & Seminar", credits: 6, internal: 40, external: 59 },
      { code: "AI4203", subject: "Comprehensive Viva Voce", credits: 2, internal: 38, external: 57 }
    ]
  },
  S404: {
    semester1: [
      { code: "AI4101", subject: "Generative AI & LLM Systems", credits: 4, internal: 33, external: 49 },
      { code: "AI4102", subject: "Reinforcement Learning & Robotics", credits: 4, internal: 34, external: 50 },
      { code: "CS4103", subject: "Cybersecurity in Machine Learning", credits: 3, internal: 33, external: 48 },
      { code: "AI4104", subject: "Capstone Major Project Work", credits: 6, internal: 36, external: 54 }
    ],
    semester2: [
      { code: "AI4201", subject: "Autonomous Systems & Edge AI", credits: 4, internal: 34, external: 50 },
      { code: "AI4202", subject: "Industrial Internship & Seminar", credits: 6, internal: 37, external: 55 },
      { code: "AI4203", subject: "Comprehensive Viva Voce", credits: 2, internal: 35, external: 52 }
    ]
  }
};

export const INITIAL_ATTENDANCE = {
  // 1st Year Students
  S101: [
    { code: "BS1101", subject: "Linear Algebra and Calculus", totalClasses: 45, present: 43, absent: 2, percentage: 95.56 },
    { code: "CS1101", subject: "Introduction to Programming", totalClasses: 48, present: 46, absent: 2, percentage: 95.83 },
    { code: "HS1101", subject: "Communication English", totalClasses: 40, present: 39, absent: 1, percentage: 97.50 },
    { code: "BS1102", subject: "Engineering Physics", totalClasses: 42, present: 40, absent: 2, percentage: 95.24 },
    { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", totalClasses: 44, present: 42, absent: 2, percentage: 95.45 }
  ],
  S102: [
    { code: "BS1101", subject: "Linear Algebra and Calculus", totalClasses: 45, present: 40, absent: 5, percentage: 88.89 },
    { code: "CS1101", subject: "Introduction to Programming", totalClasses: 48, present: 42, absent: 6, percentage: 87.50 },
    { code: "HS1101", subject: "Communication English", totalClasses: 40, present: 36, absent: 4, percentage: 90.00 },
    { code: "BS1102", subject: "Engineering Physics", totalClasses: 42, present: 37, absent: 5, percentage: 88.10 },
    { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", totalClasses: 44, present: 39, absent: 5, percentage: 88.64 }
  ],
  S103: [
    { code: "BS1101", subject: "Linear Algebra and Calculus", totalClasses: 45, present: 37, absent: 8, percentage: 82.22 },
    { code: "CS1101", subject: "Introduction to Programming", totalClasses: 48, present: 39, absent: 9, percentage: 81.25 },
    { code: "HS1101", subject: "Communication English", totalClasses: 40, present: 33, absent: 7, percentage: 82.50 },
    { code: "BS1102", subject: "Engineering Physics", totalClasses: 42, present: 35, absent: 7, percentage: 83.33 },
    { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", totalClasses: 44, present: 36, absent: 8, percentage: 81.82 }
  ],
  S104: [
    { code: "BS1101", subject: "Linear Algebra and Calculus", totalClasses: 45, present: 42, absent: 3, percentage: 93.33 },
    { code: "CS1101", subject: "Introduction to Programming", totalClasses: 48, present: 45, absent: 3, percentage: 93.75 },
    { code: "HS1101", subject: "Communication English", totalClasses: 40, present: 38, absent: 2, percentage: 95.00 },
    { code: "BS1102", subject: "Engineering Physics", totalClasses: 42, present: 39, absent: 3, percentage: 92.86 },
    { code: "ES1101", subject: "Basic Civil and Mechanical Engineering", totalClasses: 44, present: 41, absent: 3, percentage: 93.18 }
  ],

  // 2nd Year AIML Students (Current 2nd Sem / Registered Attendance)
  S001: [
    { code: "CS1201", subject: "Data Structures", totalClasses: 45, present: 43, absent: 2, percentage: 95.56 },
    { code: "BS1201", subject: "Differential Equations and Vector Calculus", totalClasses: 48, present: 46, absent: 2, percentage: 95.83 },
    { code: "BS1202", subject: "Engineering Chemistry", totalClasses: 40, present: 38, absent: 2, percentage: 95.00 },
    { code: "ES1201", subject: "Engineering Graphics", totalClasses: 46, present: 44, absent: 2, percentage: 95.65 },
    { code: "ES1202", subject: "Basic Electrical and Electronics Lab", totalClasses: 30, present: 30, absent: 0, percentage: 100.00 }
  ],
  S002: [
    { code: "CS1201", subject: "Data Structures", totalClasses: 45, present: 41, absent: 4, percentage: 91.11 },
    { code: "BS1201", subject: "Differential Equations and Vector Calculus", totalClasses: 48, present: 43, absent: 5, percentage: 89.58 },
    { code: "BS1202", subject: "Engineering Chemistry", totalClasses: 40, present: 36, absent: 4, percentage: 90.00 },
    { code: "ES1201", subject: "Engineering Graphics", totalClasses: 46, present: 42, absent: 4, percentage: 91.30 },
    { code: "ES1202", subject: "Basic Electrical and Electronics Lab", totalClasses: 30, present: 29, absent: 1, percentage: 96.67 }
  ],
  S003: [
    { code: "CS1201", subject: "Data Structures", totalClasses: 45, present: 38, absent: 7, percentage: 84.44 },
    { code: "BS1201", subject: "Differential Equations and Vector Calculus", totalClasses: 48, present: 40, absent: 8, percentage: 83.33 },
    { code: "BS1202", subject: "Engineering Chemistry", totalClasses: 40, present: 34, absent: 6, percentage: 85.00 },
    { code: "ES1201", subject: "Engineering Graphics", totalClasses: 46, present: 39, absent: 7, percentage: 84.78 },
    { code: "ES1202", subject: "Basic Electrical and Electronics Lab", totalClasses: 30, present: 27, absent: 3, percentage: 90.00 }
  ],
  S004: [
    { code: "CS1201", subject: "Data Structures", totalClasses: 45, present: 42, absent: 3, percentage: 93.33 },
    { code: "BS1201", subject: "Differential Equations and Vector Calculus", totalClasses: 48, present: 45, absent: 3, percentage: 93.75 },
    { code: "BS1202", subject: "Engineering Chemistry", totalClasses: 40, present: 37, absent: 3, percentage: 92.50 },
    { code: "ES1201", subject: "Engineering Graphics", totalClasses: 46, present: 43, absent: 3, percentage: 93.48 },
    { code: "ES1202", subject: "Basic Electrical and Electronics Lab", totalClasses: 30, present: 29, absent: 1, percentage: 96.67 }
  ],
  S005: [
    { code: "CS1201", subject: "Data Structures", totalClasses: 45, present: 39, absent: 6, percentage: 86.67 },
    { code: "BS1201", subject: "Differential Equations and Vector Calculus", totalClasses: 48, present: 41, absent: 7, percentage: 85.42 },
    { code: "BS1202", subject: "Engineering Chemistry", totalClasses: 40, present: 35, absent: 5, percentage: 87.50 },
    { code: "ES1201", subject: "Engineering Graphics", totalClasses: 46, present: 40, absent: 6, percentage: 86.96 },
    { code: "ES1202", subject: "Basic Electrical and Electronics Lab", totalClasses: 30, present: 28, absent: 2, percentage: 93.33 }
  ],
  S006: [
    { code: "CS1201", subject: "Data Structures", totalClasses: 45, present: 37, absent: 8, percentage: 82.22 },
    { code: "BS1201", subject: "Differential Equations and Vector Calculus", totalClasses: 48, present: 39, absent: 9, percentage: 81.25 },
    { code: "BS1202", subject: "Engineering Chemistry", totalClasses: 40, present: 33, absent: 7, percentage: 82.50 },
    { code: "ES1201", subject: "Engineering Graphics", totalClasses: 46, present: 38, absent: 8, percentage: 82.61 },
    { code: "ES1202", subject: "Basic Electrical and Electronics Lab", totalClasses: 30, present: 26, absent: 4, percentage: 86.67 }
  ],
  S007: [
    { code: "CS1201", subject: "Data Structures", totalClasses: 45, present: 42, absent: 3, percentage: 93.33 },
    { code: "BS1201", subject: "Differential Equations and Vector Calculus", totalClasses: 48, present: 44, absent: 4, percentage: 91.67 },
    { code: "BS1202", subject: "Engineering Chemistry", totalClasses: 40, present: 37, absent: 3, percentage: 92.50 },
    { code: "ES1201", subject: "Engineering Graphics", totalClasses: 46, present: 43, absent: 3, percentage: 93.48 },
    { code: "ES1202", subject: "Basic Electrical and Electronics Lab", totalClasses: 30, present: 29, absent: 1, percentage: 96.67 }
  ],

  // 3rd Year Students
  S301: [
    { code: "AI3101", subject: "Deep Learning & Neural Networks", totalClasses: 46, present: 44, absent: 2, percentage: 95.65 },
    { code: "AI3102", subject: "Natural Language Processing", totalClasses: 44, present: 42, absent: 2, percentage: 95.45 },
    { code: "AI3103", subject: "Computer Vision Fundamentals", totalClasses: 42, present: 40, absent: 2, percentage: 95.24 },
    { code: "CS3104", subject: "Cloud Computing & DevOps", totalClasses: 40, present: 38, absent: 2, percentage: 95.00 },
    { code: "AI3105", subject: "AI Application Development Lab", totalClasses: 30, present: 30, absent: 0, percentage: 100.00 }
  ],
  S302: [
    { code: "AI3101", subject: "Deep Learning & Neural Networks", totalClasses: 46, present: 40, absent: 6, percentage: 86.96 },
    { code: "AI3102", subject: "Natural Language Processing", totalClasses: 44, present: 39, absent: 5, percentage: 88.64 },
    { code: "AI3103", subject: "Computer Vision Fundamentals", totalClasses: 42, present: 37, absent: 5, percentage: 88.10 },
    { code: "CS3104", subject: "Cloud Computing & DevOps", totalClasses: 40, present: 35, absent: 5, percentage: 87.50 },
    { code: "AI3105", subject: "AI Application Development Lab", totalClasses: 30, present: 28, absent: 2, percentage: 93.33 }
  ],
  S303: [
    { code: "AI3101", subject: "Deep Learning & Neural Networks", totalClasses: 46, present: 43, absent: 3, percentage: 93.48 },
    { code: "AI3102", subject: "Natural Language Processing", totalClasses: 44, present: 41, absent: 3, percentage: 93.18 },
    { code: "AI3103", subject: "Computer Vision Fundamentals", totalClasses: 42, present: 39, absent: 3, percentage: 92.86 },
    { code: "CS3104", subject: "Cloud Computing & DevOps", totalClasses: 40, present: 37, absent: 3, percentage: 92.50 },
    { code: "AI3105", subject: "AI Application Development Lab", totalClasses: 30, present: 29, absent: 1, percentage: 96.67 }
  ],
  S304: [
    { code: "AI3101", subject: "Deep Learning & Neural Networks", totalClasses: 46, present: 38, absent: 8, percentage: 82.61 },
    { code: "AI3102", subject: "Natural Language Processing", totalClasses: 44, present: 36, absent: 8, percentage: 81.82 },
    { code: "AI3103", subject: "Computer Vision Fundamentals", totalClasses: 42, present: 35, absent: 7, percentage: 83.33 },
    { code: "CS3104", subject: "Cloud Computing & DevOps", totalClasses: 40, present: 33, absent: 7, percentage: 82.50 },
    { code: "AI3105", subject: "AI Application Development Lab", totalClasses: 30, present: 26, absent: 4, percentage: 86.67 }
  ],

  // 4th Year Students
  S401: [
    { code: "AI4101", subject: "Generative AI & LLM Systems", totalClasses: 45, present: 43, absent: 2, percentage: 95.56 },
    { code: "AI4102", subject: "Reinforcement Learning & Robotics", totalClasses: 42, present: 40, absent: 2, percentage: 95.24 },
    { code: "CS4103", subject: "Cybersecurity in Machine Learning", totalClasses: 40, present: 38, absent: 2, percentage: 95.00 },
    { code: "AI4104", subject: "Capstone Major Project Work", totalClasses: 50, present: 50, absent: 0, percentage: 100.00 }
  ],
  S402: [
    { code: "AI4101", subject: "Generative AI & LLM Systems", totalClasses: 45, present: 41, absent: 4, percentage: 91.11 },
    { code: "AI4102", subject: "Reinforcement Learning & Robotics", totalClasses: 42, present: 38, absent: 4, percentage: 90.48 },
    { code: "CS4103", subject: "Cybersecurity in Machine Learning", totalClasses: 40, present: 36, absent: 4, percentage: 90.00 },
    { code: "AI4104", subject: "Capstone Major Project Work", totalClasses: 50, present: 48, absent: 2, percentage: 96.00 }
  ],
  S403: [
    { code: "AI4101", subject: "Generative AI & LLM Systems", totalClasses: 45, present: 42, absent: 3, percentage: 93.33 },
    { code: "AI4102", subject: "Reinforcement Learning & Robotics", totalClasses: 42, present: 39, absent: 3, percentage: 92.86 },
    { code: "CS4103", subject: "Cybersecurity in Machine Learning", totalClasses: 40, present: 37, absent: 3, percentage: 92.50 },
    { code: "AI4104", subject: "Capstone Major Project Work", totalClasses: 50, present: 49, absent: 1, percentage: 98.00 }
  ],
  S404: [
    { code: "AI4101", subject: "Generative AI & LLM Systems", totalClasses: 45, present: 38, absent: 7, percentage: 84.44 },
    { code: "AI4102", subject: "Reinforcement Learning & Robotics", totalClasses: 42, present: 35, absent: 7, percentage: 83.33 },
    { code: "CS4103", subject: "Cybersecurity in Machine Learning", totalClasses: 40, present: 34, absent: 6, percentage: 85.00 },
    { code: "AI4104", subject: "Capstone Major Project Work", totalClasses: 50, present: 44, absent: 6, percentage: 88.00 }
  ]
};

export const INITIAL_GRIEVANCES = [
  {
    id: "TKT-2026-0828",
    studentId: "S001",
    studentName: "Palisetti Hemasundar",
    rollNumber: "25W61A6142",
    studentPhone: "+91 98480 22338",
    parentPhone: "+91 94401 55622",
    type: "Complaint",
    category: "Attendance & FRS Biometrics",
    subject: "Morning FRS Biometric verification kiosk sync delay",
    description: "On Thursday morning (10th Sep), the facial recognition attendance device at Block B entry had a temporary server sync delay. Class coordinator verified attendance manually.",
    priority: "Medium",
    status: "Resolved",
    date: "2026-09-10",
    createdAt: "2026-09-10",
    response: "Biometric kiosk network buffer verified and 100% synchronized with college cloud attendance database. Full attendance credit granted.",
    resolvedAt: "2026-09-11",
    remarks: "Biometric kiosk network buffer verified and 100% synchronized with college cloud attendance database. Full attendance credit granted."
  },
  {
    id: "TKT-2026-0814",
    studentId: "S001",
    studentName: "Palisetti Hemasundar",
    rollNumber: "25W61A6142",
    studentPhone: "+91 98480 22338",
    parentPhone: "+91 94401 55622",
    type: "Suggestion",
    category: "Campus Infrastructure & Labs",
    subject: "High-speed Wi-Fi connectivity in AIML Advanced Lab",
    description: "Requesting bandwidth boost and Wi-Fi signal extender installation near Workstations 14-25 in the Department AIML Laboratory for model training.",
    priority: "High",
    status: "In Progress",
    date: "2026-09-08",
    createdAt: "2026-09-08",
    response: "IT Systems Engineer assigned. Additional dual-band access point scheduled for deployment on 15th Sep.",
    remarks: "IT Systems Engineer assigned. Additional dual-band access point scheduled for deployment on 15th Sep."
  },
  {
    id: "TKT-2026-0792",
    studentId: "S001",
    studentName: "Palisetti Hemasundar",
    rollNumber: "25W61A6142",
    studentPhone: "+91 98480 22338",
    parentPhone: "+91 94401 55622",
    type: "Suggestion",
    category: "Hostel & Food Mess",
    subject: "Reading Room lighting enhancement in Spoorti Sadan Boys Hostel",
    description: "Requesting replacement of study lamps and additional power sockets in the Ground Floor Common Study Hall of Spoorti Sadan.",
    priority: "Low",
    status: "Resolved",
    date: "2026-09-02",
    createdAt: "2026-09-02",
    response: "New LED study luminaires and 4 quad-socket distribution boxes installed by campus electrician on 5th Sep.",
    resolvedAt: "2026-09-05",
    remarks: "New LED study luminaires and 4 quad-socket distribution boxes installed by campus electrician on 5th Sep."
  },
  {
    id: "TKT-2026-0820",
    studentId: "S002",
    studentName: "Kalla Ganesh Siva Sai",
    rollNumber: "25W61A6122",
    studentPhone: "+91 91234 61220",
    parentPhone: "+91 94401 61220",
    type: "Suggestion",
    category: "Library & Digital Resources",
    subject: "Request for Reference Textbooks on Data Structures in Central Library",
    description: "Please procure additional copies of Data Structures and Algorithm Analysis in C++ for the 2nd Year AIML batch reserve shelf.",
    priority: "Medium",
    status: "Resolved",
    date: "2026-09-10",
    createdAt: "2026-09-10",
    response: "5 additional reference copies made available at the Departmental Book Bank.",
    resolvedAt: "2026-09-12",
    remarks: "5 additional reference copies made available at the Departmental Book Bank."
  }
];
