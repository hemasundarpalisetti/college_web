/**
 * Initial Pre-loaded Data for College Portal
 * Configured with Students across all 6 Engineering Branches & all 4 Years
 * Sri Sivani College of Engineering (Autonomous, JNTUK Code: W6)
 */

export const BRANCHES = [
  "Artificial Intelligence & Machine Learning (AIML)",
  "Computer Science & Engineering (CSE)",
  "Electronics & Communication Engineering (ECE)",
  "Electrical & Electronics Engineering (EEE)",
  "Mechanical Engineering (MECH)",
  "Civil Engineering (CIVIL)"
];

export const DEFAULT_SUBJECTS_SEM1 = [
  {
    "code": "BS1101",
    "name": "Linear Algebra and Calculus",
    "credits": 4,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "CS1101",
    "name": "Introduction to Programming",
    "credits": 3,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "HS1101",
    "name": "Communication English",
    "credits": 3,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "BS1102",
    "name": "Engineering Physics",
    "credits": 3,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "ES1101",
    "name": "Basic Civil and Mechanical Engineering",
    "credits": 4,
    "maxInternal": 40,
    "maxExternal": 60
  }
];

export const DEFAULT_SUBJECTS_SEM2 = [
  {
    "code": "CS1201",
    "name": "Data Structures",
    "credits": 3,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "BS1201",
    "name": "Differential Equations and Vector Calculus",
    "credits": 4,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "BS1202",
    "name": "Engineering Chemistry",
    "credits": 3,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "ES1201",
    "name": "Engineering Graphics",
    "credits": 3,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "ES1202",
    "name": "Basic Electrical and Electronics Lab",
    "credits": 2,
    "maxInternal": 40,
    "maxExternal": 60
  }
];

export const SUBJECTS_YEAR3 = [
  {
    "code": "AI3101",
    "name": "Deep Learning & Neural Networks",
    "credits": 4,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "AI3102",
    "name": "Natural Language Processing",
    "credits": 4,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "AI3103",
    "name": "Computer Vision Fundamentals",
    "credits": 3,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "CS3104",
    "name": "Cloud Computing & DevOps",
    "credits": 3,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "AI3105",
    "name": "AI Application Development Lab",
    "credits": 2,
    "maxInternal": 40,
    "maxExternal": 60
  }
];

export const SUBJECTS_YEAR4 = [
  {
    "code": "AI4101",
    "name": "Generative AI & LLM Systems",
    "credits": 4,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "AI4102",
    "name": "Reinforcement Learning & Robotics",
    "credits": 4,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "CS4103",
    "name": "Cybersecurity in Machine Learning",
    "credits": 3,
    "maxInternal": 40,
    "maxExternal": 60
  },
  {
    "code": "AI4104",
    "name": "Capstone Major Project Work",
    "credits": 6,
    "maxInternal": 40,
    "maxExternal": 60
  }
];

export const INITIAL_FACULTY = [
  {
    "id": "F001",
    "username": "pradeep",
    "aliases": [
      "faculty01",
      "hod_aiml",
      "pradeep"
    ],
    "password": "faculty123",
    "name": "Dr. K. Pradeep",
    "facultyId": "FAC-AIML-HOD",
    "designation": "Professor & Head of Department (HOD)",
    "department": "Artificial Intelligence & Machine Learning (AIML)",
    "email": "pradeep.hod@srisivani.edu.in",
    "phone": "+91 98480 12345",
    "assignedCourses": [
      "Linear Algebra and Calculus",
      "Artificial Intelligence & Machine Learning"
    ],
    "avatar": "KP"
  },
  {
    "id": "F002",
    "username": "himabindu",
    "aliases": [
      "faculty02",
      "ct_aiml",
      "himabindu"
    ],
    "password": "faculty123",
    "name": "Prof. Himabindu",
    "facultyId": "FAC-AIML-CT2",
    "designation": "Associate Professor & Academic Coordinator",
    "department": "Artificial Intelligence & Machine Learning (AIML)",
    "email": "himabindu@srisivani.edu.in",
    "phone": "+91 98480 67890",
    "assignedCourses": [
      "Data Structures",
      "Introduction to Programming"
    ],
    "avatar": "HB"
  },
  {
    "id": "F003",
    "username": "ramesh",
    "aliases": [
      "faculty03",
      "hod_cse",
      "ramesh"
    ],
    "password": "faculty123",
    "name": "Dr. M. Ramesh",
    "facultyId": "FAC-CSE-HOD",
    "designation": "Professor & Head of Department (HOD)",
    "department": "Computer Science & Engineering (CSE)",
    "email": "ramesh.cse@srisivani.edu.in",
    "phone": "+91 98480 11223",
    "assignedCourses": [
      "Data Structures",
      "Computer Organization & Architecture"
    ],
    "avatar": "MR"
  },
  {
    "id": "F004",
    "username": "suresh",
    "aliases": [
      "faculty04",
      "hod_ece",
      "suresh"
    ],
    "password": "faculty123",
    "name": "Dr. G. Suresh",
    "facultyId": "FAC-ECE-HOD",
    "designation": "Professor & Head of Department (HOD)",
    "department": "Electronics & Communication Engineering (ECE)",
    "email": "suresh.ece@srisivani.edu.in",
    "phone": "+91 98480 33445",
    "assignedCourses": [
      "Electronic Devices and Circuits",
      "Signals and Systems"
    ],
    "avatar": "GS"
  }
];

export const INITIAL_STUDENTS = [
  {
    "id": "S101",
    "rollNumber": "26W61A6101",
    "username": "26W61A6101",
    "aliases": [
      "ananya",
      "student101",
      "26w61a6101"
    ],
    "password": "student123",
    "name": "Ananya Sharma",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a6101@srisivani.edu.in",
    "phone": "+91 98481 61010",
    "studentPhone": "+91 98481 61010",
    "parentPhone": "+91 94401 61010",
    "parentName": "R. Sharma",
    "avatar": "AS",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "S102",
    "rollNumber": "26W61A6102",
    "username": "26W61A6102",
    "aliases": [
      "saiteja",
      "student102",
      "26w61a6102"
    ],
    "password": "student123",
    "name": "K. Sai Teja",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a6102@srisivani.edu.in",
    "phone": "+91 98481 61020",
    "studentPhone": "+91 98481 61020",
    "parentPhone": "+91 94401 61020",
    "parentName": "K. Appala Naidu",
    "avatar": "ST",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "S103",
    "rollNumber": "26W61A6103",
    "username": "26W61A6103",
    "aliases": [
      "rohan",
      "student103",
      "26w61a6103"
    ],
    "password": "student123",
    "name": "Rohan Verma",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a6103@srisivani.edu.in",
    "phone": "+91 98481 61030",
    "studentPhone": "+91 98481 61030",
    "parentPhone": "+91 94401 61030",
    "parentName": "M. Verma",
    "avatar": "RV",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "S104",
    "rollNumber": "26W61A6104",
    "username": "26W61A6104",
    "aliases": [
      "divya",
      "student104",
      "26w61a6104"
    ],
    "password": "student123",
    "name": "P. Divya Reddy",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a6104@srisivani.edu.in",
    "phone": "+91 98481 61040",
    "studentPhone": "+91 98481 61040",
    "parentPhone": "+91 94401 61040",
    "parentName": "P. Venkata Reddy",
    "avatar": "DR",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "S105",
    "rollNumber": "26W61A6105",
    "username": "26W61A6105",
    "aliases": [
      "varun",
      "student105",
      "26w61a6105"
    ],
    "password": "student123",
    "name": "Ch. Varun Kumar",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a6105@srisivani.edu.in",
    "phone": "+91 98481 61050",
    "studentPhone": "+91 98481 61050",
    "parentPhone": "+91 94401 61050",
    "parentName": "Ch. Jagadeesh",
    "avatar": "VK",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "S001",
    "rollNumber": "25W61A6142",
    "username": "25W61A6142",
    "aliases": [
      "hemasundar",
      "student01",
      "25w61a6142",
      "palisetti"
    ],
    "password": "student123",
    "name": "Palisetti Hemasundar",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a6142@srisivani.edu.in",
    "phone": "+91 91234 61420",
    "studentPhone": "+91 91234 61420",
    "parentPhone": "+91 94401 61420",
    "parentName": "P. Venkateswar Rao",
    "avatar": "PH",
    "photo": "./assets/images/students/hemasundar.jpeg",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "S002",
    "rollNumber": "25W61A6122",
    "username": "25W61A6122",
    "aliases": [
      "ganesh",
      "student02",
      "25w61a6122",
      "kalla"
    ],
    "password": "student123",
    "name": "Kalla Ganesh Siva Sai",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a6122@srisivani.edu.in",
    "phone": "+91 91234 61220",
    "studentPhone": "+91 91234 61220",
    "parentPhone": "+91 94401 61220",
    "parentName": "K. Santhosh",
    "avatar": "KG",
    "photo": "./assets/images/students/ganesh.jpeg",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "S003",
    "rollNumber": "25W61A6134",
    "username": "25W61A6134",
    "aliases": [
      "raju",
      "student03",
      "25w61a6134",
      "metikoti"
    ],
    "password": "student123",
    "name": "Metikoti Raju",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a6134@srisivani.edu.in",
    "phone": "+91 91234 61340",
    "studentPhone": "+91 91234 61340",
    "parentPhone": "+91 94401 61340",
    "parentName": "M. Eshwara Rao",
    "avatar": "MR",
    "photo": "./assets/images/students/raju.jpeg",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "S004",
    "rollNumber": "25W61A6111",
    "username": "25W61A6111",
    "aliases": [
      "vivek",
      "student04",
      "25w61a6111",
      "burle"
    ],
    "password": "student123",
    "name": "Burle Vivek",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a6111@srisivani.edu.in",
    "phone": "+91 91234 61110",
    "studentPhone": "+91 91234 61110",
    "parentPhone": "+91 94401 61110",
    "parentName": "B. Sairaju",
    "avatar": "BV",
    "photo": "./assets/images/students/vivek.jpeg",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "S005",
    "rollNumber": "25W61A6157",
    "username": "25W61A6157",
    "aliases": [
      "bhasa",
      "student05",
      "25w61a6157",
      "shaik"
    ],
    "password": "student123",
    "name": "Shaik Bhasa",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a6157@srisivani.edu.in",
    "phone": "+91 91234 61570",
    "studentPhone": "+91 91234 61570",
    "parentPhone": "+91 94401 61570",
    "parentName": "S. Allah",
    "avatar": "SB",
    "photo": "./assets/images/students/shaik-bhasa.jpeg",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "S006",
    "rollNumber": "25W61A6103",
    "username": "25W61A6103",
    "aliases": [
      "hemanth",
      "student06",
      "25w61a6103",
      "butu"
    ],
    "password": "student123",
    "name": "Butu Hemanth",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a6103@srisivani.edu.in",
    "phone": "+91 91234 61030",
    "studentPhone": "+91 91234 61030",
    "parentPhone": "+91 94401 61030",
    "parentName": "B. Govinda Rao",
    "avatar": "BH",
    "photo": "./assets/images/students/hemanth.jpeg",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "S007",
    "rollNumber": "25W61A6147",
    "username": "25W61A6147",
    "aliases": [
      "gowtham",
      "student07",
      "25w61a6147",
      "pidugu"
    ],
    "password": "student123",
    "name": "Pidugu Gowtham",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a6147@srisivani.edu.in",
    "phone": "+91 91234 61470",
    "studentPhone": "+91 91234 61470",
    "parentPhone": "+91 94401 61470",
    "parentName": "P. Satya Rao",
    "avatar": "PG",
    "photo": "./assets/images/students/gowtham.jpeg",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "S301",
    "rollNumber": "24W61A6101",
    "username": "24W61A6101",
    "aliases": [
      "saikumar",
      "student301",
      "24w61a6101",
      "harsha"
    ],
    "password": "student123",
    "name": "B. Harsha Vardhan",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a6101@srisivani.edu.in",
    "phone": "+91 98483 61010",
    "studentPhone": "+91 98483 61010",
    "parentPhone": "+91 94403 61010",
    "parentName": "C. Krishna",
    "avatar": "HV",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "S302",
    "rollNumber": "24W61A6102",
    "username": "24W61A6102",
    "aliases": [
      "sneha",
      "student302",
      "24w61a6102"
    ],
    "password": "student123",
    "name": "G. Sneha Latha",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a6102@srisivani.edu.in",
    "phone": "+91 98483 61020",
    "studentPhone": "+91 98483 61020",
    "parentPhone": "+91 94403 61020",
    "parentName": "M. Bhaskara Rao",
    "avatar": "SL",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "S303",
    "rollNumber": "24W61A6103",
    "username": "24W61A6103",
    "aliases": [
      "tarun",
      "student303",
      "24w61a6103"
    ],
    "password": "student123",
    "name": "M. Tarun Kumar",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a6103@srisivani.edu.in",
    "phone": "+91 98483 61030",
    "studentPhone": "+91 98483 61030",
    "parentPhone": "+91 94403 61030",
    "parentName": "B. Jagannadham",
    "avatar": "TK",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "S304",
    "rollNumber": "24W61A6104",
    "username": "24W61A6104",
    "aliases": [
      "kavitha",
      "student304",
      "24w61a6104"
    ],
    "password": "student123",
    "name": "P. Kavitha",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a6104@srisivani.edu.in",
    "phone": "+91 98483 61040",
    "studentPhone": "+91 98483 61040",
    "parentPhone": "+91 94403 61040",
    "parentName": "K. Mohan Rao",
    "avatar": "PK",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "S305",
    "rollNumber": "24W61A6105",
    "username": "24W61A6105",
    "aliases": [
      "sandeep",
      "student305",
      "24w61a6105"
    ],
    "password": "student123",
    "name": "V. Sandeep Reddy",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a6105@srisivani.edu.in",
    "phone": "+91 98483 61050",
    "studentPhone": "+91 98483 61050",
    "parentPhone": "+91 94403 61050",
    "parentName": "V. Prabhakar",
    "avatar": "SR",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "S401",
    "rollNumber": "22W61A6101",
    "username": "22W61A6101",
    "aliases": [
      "manoj",
      "student401",
      "22w61a6101",
      "prashanth"
    ],
    "password": "student123",
    "name": "V. Sai Prashanth",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a6101@srisivani.edu.in",
    "phone": "+91 98484 61010",
    "studentPhone": "+91 98484 61010",
    "parentPhone": "+91 94404 61010",
    "parentName": "G. Appa Rao",
    "avatar": "SP",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "S402",
    "rollNumber": "22W61A6102",
    "username": "22W61A6102",
    "aliases": [
      "meenakshi",
      "student402",
      "22w61a6102"
    ],
    "password": "student123",
    "name": "K. Meenakshi",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a6102@srisivani.edu.in",
    "phone": "+91 98484 61020",
    "studentPhone": "+91 98484 61020",
    "parentPhone": "+91 94404 61020",
    "parentName": "P. Lokanatham",
    "avatar": "KM",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "S403",
    "rollNumber": "22W61A6129",
    "username": "22W61A6129",
    "aliases": [
      "aditya",
      "student403",
      "22w61a6129"
    ],
    "password": "student123",
    "name": "Singupuram Aditya",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a6129@srisivani.edu.in",
    "phone": "+91 98484 61290",
    "studentPhone": "+91 98484 61290",
    "parentPhone": "+91 94404 61290",
    "parentName": "S. Vaikunta Rao",
    "avatar": "SA",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "S404",
    "rollNumber": "22W61A6145",
    "username": "22W61A6145",
    "aliases": [
      "vamsi",
      "student404",
      "22w61a6145"
    ],
    "password": "student123",
    "name": "Nemani Vamsi",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a6145@srisivani.edu.in",
    "phone": "+91 98484 61450",
    "studentPhone": "+91 98484 61450",
    "parentPhone": "+91 94404 61450",
    "parentName": "N. Prasad Rao",
    "avatar": "NV",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "S405",
    "rollNumber": "22W61A6105",
    "username": "22W61A6105",
    "aliases": [
      "kiran",
      "student405",
      "22w61a6105"
    ],
    "password": "student123",
    "name": "N. Kiran Kumar",
    "branch": "Artificial Intelligence & Machine Learning (AIML)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a6105@srisivani.edu.in",
    "phone": "+91 98484 61050",
    "studentPhone": "+91 98484 61050",
    "parentPhone": "+91 94404 61050",
    "parentName": "N. Narayana",
    "avatar": "NK",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SCSE101",
    "rollNumber": "26W61A0501",
    "username": "26w61a0501",
    "aliases": [
      "rahul",
      "scse101",
      "26w61a0501"
    ],
    "password": "student123",
    "name": "A. Rahul Varma",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0501@srisivani.edu.in",
    "phone": "+91 91105 010",
    "studentPhone": "+91 91105 010",
    "parentPhone": "+91 94105 010",
    "parentName": "A. Srinivasa Varma",
    "avatar": "AR",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SCSE102",
    "rollNumber": "26W61A0502",
    "username": "26w61a0502",
    "aliases": [
      "pooja",
      "scse102",
      "26w61a0502"
    ],
    "password": "student123",
    "name": "B. Pooja Sri",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0502@srisivani.edu.in",
    "phone": "+91 91105 020",
    "studentPhone": "+91 91105 020",
    "parentPhone": "+91 94105 020",
    "parentName": "B. Satyanarayana",
    "avatar": "BP",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SCSE103",
    "rollNumber": "26W61A0503",
    "username": "26w61a0503",
    "aliases": [
      "charan",
      "scse103",
      "26w61a0503"
    ],
    "password": "student123",
    "name": "D. Charan Teja",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0503@srisivani.edu.in",
    "phone": "+91 91105 030",
    "studentPhone": "+91 91105 030",
    "parentPhone": "+91 94105 030",
    "parentName": "D. Krishna Murthy",
    "avatar": "DC",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SCSE104",
    "rollNumber": "26W61A0504",
    "username": "26w61a0504",
    "aliases": [
      "mounika",
      "scse104",
      "26w61a0504"
    ],
    "password": "student123",
    "name": "G. Mounika",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0504@srisivani.edu.in",
    "phone": "+91 91105 040",
    "studentPhone": "+91 91105 040",
    "parentPhone": "+91 94105 040",
    "parentName": "G. Venkateswara Rao",
    "avatar": "GM",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SCSE105",
    "rollNumber": "26W61A0505",
    "username": "26w61a0505",
    "aliases": [
      "karthik",
      "scse105",
      "26w61a0505"
    ],
    "password": "student123",
    "name": "K. Karthik",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0505@srisivani.edu.in",
    "phone": "+91 91105 050",
    "studentPhone": "+91 91105 050",
    "parentPhone": "+91 94105 050",
    "parentName": "K. Appa Rao",
    "avatar": "KK",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SCSE201",
    "rollNumber": "25W61A0501",
    "username": "25w61a0501",
    "aliases": [
      "nikhil",
      "scse201",
      "25w61a0501"
    ],
    "password": "student123",
    "name": "M. Nikhil Chandra",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0501@srisivani.edu.in",
    "phone": "+91 91205 010",
    "studentPhone": "+91 91205 010",
    "parentPhone": "+91 94205 010",
    "parentName": "M. Nageswara Rao",
    "avatar": "MN",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SCSE202",
    "rollNumber": "25W61A0502",
    "username": "25w61a0502",
    "aliases": [
      "bhavana",
      "scse202",
      "25w61a0502"
    ],
    "password": "student123",
    "name": "P. Bhavana",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0502@srisivani.edu.in",
    "phone": "+91 91205 020",
    "studentPhone": "+91 91205 020",
    "parentPhone": "+91 94205 020",
    "parentName": "P. Govinda Rao",
    "avatar": "PB",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SCSE203",
    "rollNumber": "25W61A0503",
    "username": "25w61a0503",
    "aliases": [
      "akhil",
      "scse203",
      "25w61a0503"
    ],
    "password": "student123",
    "name": "R. Akhil",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0503@srisivani.edu.in",
    "phone": "+91 91205 030",
    "studentPhone": "+91 91205 030",
    "parentPhone": "+91 94205 030",
    "parentName": "R. Jagannadha Rao",
    "avatar": "RA",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SCSE204",
    "rollNumber": "25W61A0504",
    "username": "25w61a0504",
    "aliases": [
      "jahnavi",
      "scse204",
      "25w61a0504"
    ],
    "password": "student123",
    "name": "S. Jahnavi",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0504@srisivani.edu.in",
    "phone": "+91 91205 040",
    "studentPhone": "+91 91205 040",
    "parentPhone": "+91 94205 040",
    "parentName": "S. Ramana Murthy",
    "avatar": "SJ",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SCSE205",
    "rollNumber": "25W61A0505",
    "username": "25w61a0505",
    "aliases": [
      "dinesh",
      "scse205",
      "25w61a0505"
    ],
    "password": "student123",
    "name": "T. Sai Dinesh",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0505@srisivani.edu.in",
    "phone": "+91 91205 050",
    "studentPhone": "+91 91205 050",
    "parentPhone": "+91 94205 050",
    "parentName": "T. Bhaskara Rao",
    "avatar": "TS",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SCSE301",
    "rollNumber": "24W61A0501",
    "username": "24w61a0501",
    "aliases": [
      "tarun",
      "scse301",
      "24w61a0501"
    ],
    "password": "student123",
    "name": "V. Tarun",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0501@srisivani.edu.in",
    "phone": "+91 91305 010",
    "studentPhone": "+91 91305 010",
    "parentPhone": "+91 94305 010",
    "parentName": "V. Simhachalam",
    "avatar": "VT",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SCSE302",
    "rollNumber": "24W61A0502",
    "username": "24w61a0502",
    "aliases": [
      "harshitha",
      "scse302",
      "24w61a0502"
    ],
    "password": "student123",
    "name": "Y. Harshitha",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0502@srisivani.edu.in",
    "phone": "+91 91305 020",
    "studentPhone": "+91 91305 020",
    "parentPhone": "+91 94305 020",
    "parentName": "Y. Trinadha Rao",
    "avatar": "YH",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SCSE303",
    "rollNumber": "24W61A0503",
    "username": "24w61a0503",
    "aliases": [
      "pavan",
      "scse303",
      "24w61a0503"
    ],
    "password": "student123",
    "name": "B. Pavan Kalyan",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0503@srisivani.edu.in",
    "phone": "+91 91305 030",
    "studentPhone": "+91 91305 030",
    "parentPhone": "+91 94305 030",
    "parentName": "B. Eswara Rao",
    "avatar": "BP",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SCSE304",
    "rollNumber": "24W61A0504",
    "username": "24w61a0504",
    "aliases": [
      "deepthi",
      "scse304",
      "24w61a0504"
    ],
    "password": "student123",
    "name": "C. Deepthi",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0504@srisivani.edu.in",
    "phone": "+91 91305 040",
    "studentPhone": "+91 91305 040",
    "parentPhone": "+91 94305 040",
    "parentName": "C. Rama Rao",
    "avatar": "CD",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SCSE305",
    "rollNumber": "24W61A0505",
    "username": "24w61a0505",
    "aliases": [
      "rohit",
      "scse305",
      "24w61a0505"
    ],
    "password": "student123",
    "name": "G. Rohit Kumar",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0505@srisivani.edu.in",
    "phone": "+91 91305 050",
    "studentPhone": "+91 91305 050",
    "parentPhone": "+91 94305 050",
    "parentName": "G. Madhusudhan Rao",
    "avatar": "GR",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SCSE401",
    "rollNumber": "22W61A0501",
    "username": "22w61a0501",
    "aliases": [
      "suresh",
      "scse401",
      "22w61a0501"
    ],
    "password": "student123",
    "name": "K. Suresh",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0501@srisivani.edu.in",
    "phone": "+91 91405 010",
    "studentPhone": "+91 91405 010",
    "parentPhone": "+91 94405 010",
    "parentName": "K. Chandra Sekhar",
    "avatar": "KS",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SCSE402",
    "rollNumber": "22W61A0502",
    "username": "22w61a0502",
    "aliases": [
      "lavanya",
      "scse402",
      "22w61a0502"
    ],
    "password": "student123",
    "name": "L. Lavanya",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0502@srisivani.edu.in",
    "phone": "+91 91405 020",
    "studentPhone": "+91 91405 020",
    "parentPhone": "+91 94405 020",
    "parentName": "L. Narayana Rao",
    "avatar": "LL",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SCSE403",
    "rollNumber": "22W61A0503",
    "username": "22w61a0503",
    "aliases": [
      "manikanta",
      "scse403",
      "22w61a0503"
    ],
    "password": "student123",
    "name": "N. Sai Manikanta",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0503@srisivani.edu.in",
    "phone": "+91 91405 030",
    "studentPhone": "+91 91405 030",
    "parentPhone": "+91 94405 030",
    "parentName": "N. Visweswara Rao",
    "avatar": "NS",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SCSE404",
    "rollNumber": "22W61A0504",
    "username": "22w61a0504",
    "aliases": [
      "anusha",
      "scse404",
      "22w61a0504"
    ],
    "password": "student123",
    "name": "P. Anusha",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0504@srisivani.edu.in",
    "phone": "+91 91405 040",
    "studentPhone": "+91 91405 040",
    "parentPhone": "+91 94405 040",
    "parentName": "P. Dhanunjaya Rao",
    "avatar": "PA",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SCSE405",
    "rollNumber": "22W61A0505",
    "username": "22w61a0505",
    "aliases": [
      "dileep",
      "scse405",
      "22w61a0505"
    ],
    "password": "student123",
    "name": "R. Dileep",
    "branch": "Computer Science & Engineering (CSE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0505@srisivani.edu.in",
    "phone": "+91 91405 050",
    "studentPhone": "+91 91405 050",
    "parentPhone": "+91 94405 050",
    "parentName": "R. Mohan Rao",
    "avatar": "RD",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SECE101",
    "rollNumber": "26W61A0401",
    "username": "26w61a0401",
    "aliases": [
      "vamsikrishna",
      "sece101",
      "26w61a0401"
    ],
    "password": "student123",
    "name": "S. Vamsi Krishna",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0401@srisivani.edu.in",
    "phone": "+91 91104 010",
    "studentPhone": "+91 91104 010",
    "parentPhone": "+91 94104 010",
    "parentName": "S. Appala Swamy",
    "avatar": "SV",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SECE102",
    "rollNumber": "26W61A0402",
    "username": "26w61a0402",
    "aliases": [
      "harika",
      "sece102",
      "26w61a0402"
    ],
    "password": "student123",
    "name": "T. Harika",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0402@srisivani.edu.in",
    "phone": "+91 91104 020",
    "studentPhone": "+91 91104 020",
    "parentPhone": "+91 94104 020",
    "parentName": "T. Suryanarayana",
    "avatar": "TH",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SECE103",
    "rollNumber": "26W61A0403",
    "username": "26w61a0403",
    "aliases": [
      "naveen",
      "sece103",
      "26w61a0403"
    ],
    "password": "student123",
    "name": "U. Naveen",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0403@srisivani.edu.in",
    "phone": "+91 91104 030",
    "studentPhone": "+91 91104 030",
    "parentPhone": "+91 94104 030",
    "parentName": "U. Someswara Rao",
    "avatar": "UN",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SECE104",
    "rollNumber": "26W61A0404",
    "username": "26w61a0404",
    "aliases": [
      "tejaswini",
      "sece104",
      "26w61a0404"
    ],
    "password": "student123",
    "name": "V. Tejaswini",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0404@srisivani.edu.in",
    "phone": "+91 91104 040",
    "studentPhone": "+91 91104 040",
    "parentPhone": "+91 94104 040",
    "parentName": "V. Prasad",
    "avatar": "VT",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SECE105",
    "rollNumber": "26W61A0405",
    "username": "26w61a0405",
    "aliases": [
      "manojkumar",
      "sece105",
      "26w61a0405"
    ],
    "password": "student123",
    "name": "Y. Manoj Kumar",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0405@srisivani.edu.in",
    "phone": "+91 91104 050",
    "studentPhone": "+91 91104 050",
    "parentPhone": "+91 94104 050",
    "parentName": "Y. Janardhana Rao",
    "avatar": "YM",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SECE201",
    "rollNumber": "25W61A0401",
    "username": "25w61a0401",
    "aliases": [
      "gopichand",
      "sece201",
      "25w61a0401"
    ],
    "password": "student123",
    "name": "A. Gopi Chand",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0401@srisivani.edu.in",
    "phone": "+91 91204 010",
    "studentPhone": "+91 91204 010",
    "parentPhone": "+91 94204 010",
    "parentName": "A. Venkatesh",
    "avatar": "AG",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SECE202",
    "rollNumber": "25W61A0402",
    "username": "25w61a0402",
    "aliases": [
      "sireesha",
      "sece202",
      "25w61a0402"
    ],
    "password": "student123",
    "name": "B. Sireesha",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0402@srisivani.edu.in",
    "phone": "+91 91204 020",
    "studentPhone": "+91 91204 020",
    "parentPhone": "+91 94204 020",
    "parentName": "B. Tirupathi Rao",
    "avatar": "BS",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SECE203",
    "rollNumber": "25W61A0403",
    "username": "25w61a0403",
    "aliases": [
      "hemanth",
      "sece203",
      "25w61a0403"
    ],
    "password": "student123",
    "name": "D. Hemanth",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0403@srisivani.edu.in",
    "phone": "+91 91204 030",
    "studentPhone": "+91 91204 030",
    "parentPhone": "+91 94204 030",
    "parentName": "D. Vasudeva Rao",
    "avatar": "DH",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SECE204",
    "rollNumber": "25W61A0404",
    "username": "25w61a0404",
    "aliases": [
      "sandhya",
      "sece204",
      "25w61a0404"
    ],
    "password": "student123",
    "name": "G. Sandhya",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0404@srisivani.edu.in",
    "phone": "+91 91204 040",
    "studentPhone": "+91 91204 040",
    "parentPhone": "+91 94204 040",
    "parentName": "G. Kameswara Rao",
    "avatar": "GS",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SECE205",
    "rollNumber": "25W61A0405",
    "username": "25w61a0405",
    "aliases": [
      "ajay",
      "sece205",
      "25w61a0405"
    ],
    "password": "student123",
    "name": "K. Ajay Kumar",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0405@srisivani.edu.in",
    "phone": "+91 91204 050",
    "studentPhone": "+91 91204 050",
    "parentPhone": "+91 94204 050",
    "parentName": "K. Anand Rao",
    "avatar": "KA",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SECE301",
    "rollNumber": "24W61A0401",
    "username": "24w61a0401",
    "aliases": [
      "lokesh",
      "sece301",
      "24w61a0401"
    ],
    "password": "student123",
    "name": "M. Lokesh",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0401@srisivani.edu.in",
    "phone": "+91 91304 010",
    "studentPhone": "+91 91304 010",
    "parentPhone": "+91 94304 010",
    "parentName": "M. Guruvulu",
    "avatar": "ML",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SECE302",
    "rollNumber": "24W61A0402",
    "username": "24w61a0402",
    "aliases": [
      "keerthi",
      "sece302",
      "24w61a0402"
    ],
    "password": "student123",
    "name": "P. Keerthi",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0402@srisivani.edu.in",
    "phone": "+91 91304 020",
    "studentPhone": "+91 91304 020",
    "parentPhone": "+91 94304 020",
    "parentName": "P. Sudhakar",
    "avatar": "PK",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SECE303",
    "rollNumber": "24W61A0403",
    "username": "24w61a0403",
    "aliases": [
      "tharun",
      "sece303",
      "24w61a0403"
    ],
    "password": "student123",
    "name": "R. Tharun",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0403@srisivani.edu.in",
    "phone": "+91 91304 030",
    "studentPhone": "+91 91304 030",
    "parentPhone": "+91 94304 030",
    "parentName": "R. Jagadeesh",
    "avatar": "RT",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SECE304",
    "rollNumber": "24W61A0404",
    "username": "24w61a0404",
    "aliases": [
      "priyanka",
      "sece304",
      "24w61a0404"
    ],
    "password": "student123",
    "name": "S. Priyanka",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0404@srisivani.edu.in",
    "phone": "+91 91304 040",
    "studentPhone": "+91 91304 040",
    "parentPhone": "+91 94304 040",
    "parentName": "S. Sankara Rao",
    "avatar": "SP",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SECE305",
    "rollNumber": "24W61A0405",
    "username": "24w61a0405",
    "aliases": [
      "vinod",
      "sece305",
      "24w61a0405"
    ],
    "password": "student123",
    "name": "T. Vinod Kumar",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0405@srisivani.edu.in",
    "phone": "+91 91304 050",
    "studentPhone": "+91 91304 050",
    "parentPhone": "+91 94304 050",
    "parentName": "T. Prabhakar Rao",
    "avatar": "TV",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SECE401",
    "rollNumber": "22W61A0401",
    "username": "22w61a0401",
    "aliases": [
      "naresh",
      "sece401",
      "22w61a0401"
    ],
    "password": "student123",
    "name": "V. Naresh",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0401@srisivani.edu.in",
    "phone": "+91 91404 010",
    "studentPhone": "+91 91404 010",
    "parentPhone": "+91 94404 010",
    "parentName": "V. Malleswara Rao",
    "avatar": "VN",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SECE402",
    "rollNumber": "22W61A0402",
    "username": "22w61a0402",
    "aliases": [
      "yamini",
      "sece402",
      "22w61a0402"
    ],
    "password": "student123",
    "name": "B. Yamini",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0402@srisivani.edu.in",
    "phone": "+91 91404 020",
    "studentPhone": "+91 91404 020",
    "parentPhone": "+91 94404 020",
    "parentName": "B. Pola Rao",
    "avatar": "BY",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SECE403",
    "rollNumber": "22W61A0403",
    "username": "22w61a0403",
    "aliases": [
      "kiran",
      "sece403",
      "22w61a0403"
    ],
    "password": "student123",
    "name": "C. Kiran",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0403@srisivani.edu.in",
    "phone": "+91 91404 030",
    "studentPhone": "+91 91404 030",
    "parentPhone": "+91 94404 030",
    "parentName": "C. Damodara Rao",
    "avatar": "CK",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SECE404",
    "rollNumber": "22W61A0404",
    "username": "22w61a0404",
    "aliases": [
      "pavani",
      "sece404",
      "22w61a0404"
    ],
    "password": "student123",
    "name": "D. Pavani",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0404@srisivani.edu.in",
    "phone": "+91 91404 040",
    "studentPhone": "+91 91404 040",
    "parentPhone": "+91 94404 040",
    "parentName": "D. Bangaru Naidu",
    "avatar": "DP",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SECE405",
    "rollNumber": "22W61A0405",
    "username": "22w61a0405",
    "aliases": [
      "mahesh",
      "sece405",
      "22w61a0405"
    ],
    "password": "student123",
    "name": "G. Mahesh",
    "branch": "Electronics & Communication Engineering (ECE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0405@srisivani.edu.in",
    "phone": "+91 91404 050",
    "studentPhone": "+91 91404 050",
    "parentPhone": "+91 94404 050",
    "parentName": "G. Venkataramana",
    "avatar": "GM",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SEEE101",
    "rollNumber": "26W61A0201",
    "username": "26w61a0201",
    "aliases": [
      "jagadeesh",
      "seee101",
      "26w61a0201"
    ],
    "password": "student123",
    "name": "K. Jagadeesh",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0201@srisivani.edu.in",
    "phone": "+91 91102 010",
    "studentPhone": "+91 91102 010",
    "parentPhone": "+91 94102 010",
    "parentName": "K. Simhachalam",
    "avatar": "KJ",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SEEE102",
    "rollNumber": "26W61A0202",
    "username": "26w61a0202",
    "aliases": [
      "madhuri",
      "seee102",
      "26w61a0202"
    ],
    "password": "student123",
    "name": "M. Madhuri",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0202@srisivani.edu.in",
    "phone": "+91 91102 020",
    "studentPhone": "+91 91102 020",
    "parentPhone": "+91 94102 020",
    "parentName": "M. Dharma Rao",
    "avatar": "MM",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SEEE103",
    "rollNumber": "26W61A0203",
    "username": "26w61a0203",
    "aliases": [
      "avinash",
      "seee103",
      "26w61a0203"
    ],
    "password": "student123",
    "name": "P. Avinash",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0203@srisivani.edu.in",
    "phone": "+91 91102 030",
    "studentPhone": "+91 91102 030",
    "parentPhone": "+91 94102 030",
    "parentName": "P. Satya Rao",
    "avatar": "PA",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SEEE104",
    "rollNumber": "26W61A0204",
    "username": "26w61a0204",
    "aliases": [
      "bindu",
      "seee104",
      "26w61a0204"
    ],
    "password": "student123",
    "name": "R. Bindu",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0204@srisivani.edu.in",
    "phone": "+91 91102 040",
    "studentPhone": "+91 91102 040",
    "parentPhone": "+91 94102 040",
    "parentName": "R. Vaikunta Rao",
    "avatar": "RB",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SEEE105",
    "rollNumber": "26W61A0205",
    "username": "26w61a0205",
    "aliases": [
      "raviteja",
      "seee105",
      "26w61a0205"
    ],
    "password": "student123",
    "name": "S. Ravi Teja",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0205@srisivani.edu.in",
    "phone": "+91 91102 050",
    "studentPhone": "+91 91102 050",
    "parentPhone": "+91 94102 050",
    "parentName": "S. Mohan Rao",
    "avatar": "SR",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SEEE201",
    "rollNumber": "25W61A0201",
    "username": "25w61a0201",
    "aliases": [
      "santosh",
      "seee201",
      "25w61a0201"
    ],
    "password": "student123",
    "name": "T. Santosh",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0201@srisivani.edu.in",
    "phone": "+91 91202 010",
    "studentPhone": "+91 91202 010",
    "parentPhone": "+91 94202 010",
    "parentName": "T. Appa Rao",
    "avatar": "TS",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SEEE202",
    "rollNumber": "25W61A0202",
    "username": "25w61a0202",
    "aliases": [
      "chandana",
      "seee202",
      "25w61a0202"
    ],
    "password": "student123",
    "name": "V. Chandana",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0202@srisivani.edu.in",
    "phone": "+91 91202 020",
    "studentPhone": "+91 91202 020",
    "parentPhone": "+91 94202 020",
    "parentName": "V. Krishna Rao",
    "avatar": "VC",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SEEE203",
    "rollNumber": "25W61A0203",
    "username": "25w61a0203",
    "aliases": [
      "praveen",
      "seee203",
      "25w61a0203"
    ],
    "password": "student123",
    "name": "Y. Praveen",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0203@srisivani.edu.in",
    "phone": "+91 91202 030",
    "studentPhone": "+91 91202 030",
    "parentPhone": "+91 94202 030",
    "parentName": "Y. Surya Rao",
    "avatar": "YP",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SEEE204",
    "rollNumber": "25W61A0204",
    "username": "25w61a0204",
    "aliases": [
      "madhav",
      "seee204",
      "25w61a0204"
    ],
    "password": "student123",
    "name": "A. Madhav",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0204@srisivani.edu.in",
    "phone": "+91 91202 040",
    "studentPhone": "+91 91202 040",
    "parentPhone": "+91 94202 040",
    "parentName": "A. Sominaidu",
    "avatar": "AM",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SEEE205",
    "rollNumber": "25W61A0205",
    "username": "25w61a0205",
    "aliases": [
      "kalyani",
      "seee205",
      "25w61a0205"
    ],
    "password": "student123",
    "name": "B. Kalyani",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0205@srisivani.edu.in",
    "phone": "+91 91202 050",
    "studentPhone": "+91 91202 050",
    "parentPhone": "+91 94202 050",
    "parentName": "B. Ramamurthy",
    "avatar": "BK",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SEEE301",
    "rollNumber": "24W61A0201",
    "username": "24w61a0201",
    "aliases": [
      "venkataramana",
      "seee301",
      "24w61a0201"
    ],
    "password": "student123",
    "name": "D. Venkata Ramana",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0201@srisivani.edu.in",
    "phone": "+91 91302 010",
    "studentPhone": "+91 91302 010",
    "parentPhone": "+91 94302 010",
    "parentName": "D. Lakshmana Rao",
    "avatar": "DV",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SEEE302",
    "rollNumber": "24W61A0202",
    "username": "24w61a0202",
    "aliases": [
      "sravani",
      "seee302",
      "24w61a0202"
    ],
    "password": "student123",
    "name": "G. Sravani",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0202@srisivani.edu.in",
    "phone": "+91 91302 020",
    "studentPhone": "+91 91302 020",
    "parentPhone": "+91 94302 020",
    "parentName": "G. Thavitinaidu",
    "avatar": "GS",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SEEE303",
    "rollNumber": "24W61A0203",
    "username": "24w61a0203",
    "aliases": [
      "bhanu",
      "seee303",
      "24w61a0203"
    ],
    "password": "student123",
    "name": "K. Bhanu Prasad",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0203@srisivani.edu.in",
    "phone": "+91 91302 030",
    "studentPhone": "+91 91302 030",
    "parentPhone": "+91 94302 030",
    "parentName": "K. Rajasekhar",
    "avatar": "KB",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SEEE304",
    "rollNumber": "24W61A0204",
    "username": "24w61a0204",
    "aliases": [
      "gayathri",
      "seee304",
      "24w61a0204"
    ],
    "password": "student123",
    "name": "M. Gayathri",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0204@srisivani.edu.in",
    "phone": "+91 91302 040",
    "studentPhone": "+91 91302 040",
    "parentPhone": "+91 94302 040",
    "parentName": "M. Narasinga Rao",
    "avatar": "MG",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SEEE305",
    "rollNumber": "24W61A0205",
    "username": "24w61a0205",
    "aliases": [
      "saikiran",
      "seee305",
      "24w61a0205"
    ],
    "password": "student123",
    "name": "P. Sai Kiran",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0205@srisivani.edu.in",
    "phone": "+91 91302 050",
    "studentPhone": "+91 91302 050",
    "parentPhone": "+91 94302 050",
    "parentName": "P. Srinivasa Rao",
    "avatar": "PS",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SEEE401",
    "rollNumber": "22W61A0201",
    "username": "22w61a0201",
    "aliases": [
      "harish",
      "seee401",
      "22w61a0201"
    ],
    "password": "student123",
    "name": "R. Harish",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0201@srisivani.edu.in",
    "phone": "+91 91402 010",
    "studentPhone": "+91 91402 010",
    "parentPhone": "+91 94402 010",
    "parentName": "R. Paparao",
    "avatar": "RH",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SEEE402",
    "rollNumber": "22W61A0202",
    "username": "22w61a0202",
    "aliases": [
      "kusuma",
      "seee402",
      "22w61a0202"
    ],
    "password": "student123",
    "name": "S. Kusuma",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0202@srisivani.edu.in",
    "phone": "+91 91402 020",
    "studentPhone": "+91 91402 020",
    "parentPhone": "+91 94402 020",
    "parentName": "S. Mukunda Rao",
    "avatar": "SK",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SEEE403",
    "rollNumber": "22W61A0203",
    "username": "22w61a0203",
    "aliases": [
      "ramu",
      "seee403",
      "22w61a0203"
    ],
    "password": "student123",
    "name": "T. Ramu",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0203@srisivani.edu.in",
    "phone": "+91 91402 030",
    "studentPhone": "+91 91402 030",
    "parentPhone": "+91 94402 030",
    "parentName": "T. Chittibabu",
    "avatar": "TR",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SEEE404",
    "rollNumber": "22W61A0204",
    "username": "22w61a0204",
    "aliases": [
      "lavanya",
      "seee404",
      "22w61a0204"
    ],
    "password": "student123",
    "name": "V. Lavanya",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0204@srisivani.edu.in",
    "phone": "+91 91402 040",
    "studentPhone": "+91 91402 040",
    "parentPhone": "+91 94402 040",
    "parentName": "V. Varahala Naidu",
    "avatar": "VL",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SEEE405",
    "rollNumber": "22W61A0205",
    "username": "22w61a0205",
    "aliases": [
      "dileepkumar",
      "seee405",
      "22w61a0205"
    ],
    "password": "student123",
    "name": "Y. Dileep Kumar",
    "branch": "Electrical & Electronics Engineering (EEE)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0205@srisivani.edu.in",
    "phone": "+91 91402 050",
    "studentPhone": "+91 91402 050",
    "parentPhone": "+91 94402 050",
    "parentName": "Y. Jagannadham",
    "avatar": "YD",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SMECH101",
    "rollNumber": "26W61A0301",
    "username": "26w61a0301",
    "aliases": [
      "dileep",
      "smech101",
      "26w61a0301"
    ],
    "password": "student123",
    "name": "A. Dileep",
    "branch": "Mechanical Engineering (MECH)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0301@srisivani.edu.in",
    "phone": "+91 91103 010",
    "studentPhone": "+91 91103 010",
    "parentPhone": "+91 94103 010",
    "parentName": "A. Gurunadham",
    "avatar": "AD",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SMECH102",
    "rollNumber": "26W61A0302",
    "username": "26w61a0302",
    "aliases": [
      "saicharan",
      "smech102",
      "26w61a0302"
    ],
    "password": "student123",
    "name": "B. Sai Charan",
    "branch": "Mechanical Engineering (MECH)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0302@srisivani.edu.in",
    "phone": "+91 91103 020",
    "studentPhone": "+91 91103 020",
    "parentPhone": "+91 94103 020",
    "parentName": "B. Appalanaidu",
    "avatar": "BS",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SMECH103",
    "rollNumber": "26W61A0303",
    "username": "26w61a0303",
    "aliases": [
      "likhitha",
      "smech103",
      "26w61a0303"
    ],
    "password": "student123",
    "name": "C. Likhitha",
    "branch": "Mechanical Engineering (MECH)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0303@srisivani.edu.in",
    "phone": "+91 91103 030",
    "studentPhone": "+91 91103 030",
    "parentPhone": "+91 94103 030",
    "parentName": "C. Venkataratnam",
    "avatar": "CL",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SMECH104",
    "rollNumber": "26W61A0304",
    "username": "26w61a0304",
    "aliases": [
      "bharath",
      "smech104",
      "26w61a0304"
    ],
    "password": "student123",
    "name": "D. Bharath",
    "branch": "Mechanical Engineering (MECH)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0304@srisivani.edu.in",
    "phone": "+91 91103 040",
    "studentPhone": "+91 91103 040",
    "parentPhone": "+91 94103 040",
    "parentName": "D. Subbarao",
    "avatar": "DB",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SMECH105",
    "rollNumber": "26W61A0305",
    "username": "26w61a0305",
    "aliases": [
      "uday",
      "smech105",
      "26w61a0305"
    ],
    "password": "student123",
    "name": "G. Uday Kiran",
    "branch": "Mechanical Engineering (MECH)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0305@srisivani.edu.in",
    "phone": "+91 91103 050",
    "studentPhone": "+91 91103 050",
    "parentPhone": "+91 94103 050",
    "parentName": "G. Ramana",
    "avatar": "GU",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SMECH201",
    "rollNumber": "25W61A0301",
    "username": "25w61a0301",
    "aliases": [
      "rajesh",
      "smech201",
      "25w61a0301"
    ],
    "password": "student123",
    "name": "K. Rajesh",
    "branch": "Mechanical Engineering (MECH)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0301@srisivani.edu.in",
    "phone": "+91 91203 010",
    "studentPhone": "+91 91203 010",
    "parentPhone": "+91 94203 010",
    "parentName": "K. Demudubabu",
    "avatar": "KR",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SMECH202",
    "rollNumber": "25W61A0302",
    "username": "25w61a0302",
    "aliases": [
      "surya",
      "smech202",
      "25w61a0302"
    ],
    "password": "student123",
    "name": "M. Surya",
    "branch": "Mechanical Engineering (MECH)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0302@srisivani.edu.in",
    "phone": "+91 91203 020",
    "studentPhone": "+91 91203 020",
    "parentPhone": "+91 94203 020",
    "parentName": "M. Nookaraju",
    "avatar": "MS",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SMECH203",
    "rollNumber": "25W61A0303",
    "username": "25w61a0303",
    "aliases": [
      "taruntej",
      "smech203",
      "25w61a0303"
    ],
    "password": "student123",
    "name": "P. Tarun Tej",
    "branch": "Mechanical Engineering (MECH)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0303@srisivani.edu.in",
    "phone": "+91 91203 030",
    "studentPhone": "+91 91203 030",
    "parentPhone": "+91 94203 030",
    "parentName": "P. Sanyasi Rao",
    "avatar": "PT",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SMECH204",
    "rollNumber": "25W61A0304",
    "username": "25w61a0304",
    "aliases": [
      "saiteja",
      "smech204",
      "25w61a0304"
    ],
    "password": "student123",
    "name": "R. Sai Teja",
    "branch": "Mechanical Engineering (MECH)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0304@srisivani.edu.in",
    "phone": "+91 91203 040",
    "studentPhone": "+91 91203 040",
    "parentPhone": "+91 94203 040",
    "parentName": "R. Jagannath",
    "avatar": "RS",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SMECH205",
    "rollNumber": "25W61A0305",
    "username": "25w61a0305",
    "aliases": [
      "manikanth",
      "smech205",
      "25w61a0305"
    ],
    "password": "student123",
    "name": "S. Manikanth",
    "branch": "Mechanical Engineering (MECH)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0305@srisivani.edu.in",
    "phone": "+91 91203 050",
    "studentPhone": "+91 91203 050",
    "parentPhone": "+91 94203 050",
    "parentName": "S. Bhaskar Rao",
    "avatar": "SM",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SMECH301",
    "rollNumber": "24W61A0301",
    "username": "24w61a0301",
    "aliases": [
      "pradeep",
      "smech301",
      "24w61a0301"
    ],
    "password": "student123",
    "name": "T. Pradeep",
    "branch": "Mechanical Engineering (MECH)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0301@srisivani.edu.in",
    "phone": "+91 91303 010",
    "studentPhone": "+91 91303 010",
    "parentPhone": "+91 94303 010",
    "parentName": "T. Govindarajulu",
    "avatar": "TP",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SMECH302",
    "rollNumber": "24W61A0302",
    "username": "24w61a0302",
    "aliases": [
      "siva",
      "smech302",
      "24w61a0302"
    ],
    "password": "student123",
    "name": "V. Siva",
    "branch": "Mechanical Engineering (MECH)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0302@srisivani.edu.in",
    "phone": "+91 91303 020",
    "studentPhone": "+91 91303 020",
    "parentPhone": "+91 94303 020",
    "parentName": "V. Suryanarayana",
    "avatar": "VS",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SMECH303",
    "rollNumber": "24W61A0303",
    "username": "24w61a0303",
    "aliases": [
      "anil",
      "smech303",
      "24w61a0303"
    ],
    "password": "student123",
    "name": "Y. Anil Kumar",
    "branch": "Mechanical Engineering (MECH)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0303@srisivani.edu.in",
    "phone": "+91 91303 030",
    "studentPhone": "+91 91303 030",
    "parentPhone": "+91 94303 030",
    "parentName": "Y. Mohan Rao",
    "avatar": "YA",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SMECH304",
    "rollNumber": "24W61A0304",
    "username": "24w61a0304",
    "aliases": [
      "kalyan",
      "smech304",
      "24w61a0304"
    ],
    "password": "student123",
    "name": "B. Kalyan",
    "branch": "Mechanical Engineering (MECH)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0304@srisivani.edu.in",
    "phone": "+91 91303 040",
    "studentPhone": "+91 91303 040",
    "parentPhone": "+91 94303 040",
    "parentName": "B. Prabhakar",
    "avatar": "BK",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SMECH305",
    "rollNumber": "24W61A0305",
    "username": "24w61a0305",
    "aliases": [
      "chandu",
      "smech305",
      "24w61a0305"
    ],
    "password": "student123",
    "name": "C. Chandu",
    "branch": "Mechanical Engineering (MECH)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0305@srisivani.edu.in",
    "phone": "+91 91303 050",
    "studentPhone": "+91 91303 050",
    "parentPhone": "+91 94303 050",
    "parentName": "C. Nagesh",
    "avatar": "CC",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SMECH401",
    "rollNumber": "22W61A0301",
    "username": "22w61a0301",
    "aliases": [
      "madhu",
      "smech401",
      "22w61a0301"
    ],
    "password": "student123",
    "name": "D. Madhu",
    "branch": "Mechanical Engineering (MECH)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0301@srisivani.edu.in",
    "phone": "+91 91403 010",
    "studentPhone": "+91 91403 010",
    "parentPhone": "+91 94403 010",
    "parentName": "D. Simhadri",
    "avatar": "DM",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SMECH402",
    "rollNumber": "22W61A0302",
    "username": "22w61a0302",
    "aliases": [
      "naveenchandra",
      "smech402",
      "22w61a0302"
    ],
    "password": "student123",
    "name": "G. Naveen Chandra",
    "branch": "Mechanical Engineering (MECH)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0302@srisivani.edu.in",
    "phone": "+91 91403 020",
    "studentPhone": "+91 91403 020",
    "parentPhone": "+91 94403 020",
    "parentName": "G. Gurumoorthy",
    "avatar": "GN",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SMECH403",
    "rollNumber": "22W61A0303",
    "username": "22w61a0303",
    "aliases": [
      "vijay",
      "smech403",
      "22w61a0303"
    ],
    "password": "student123",
    "name": "K. Vijay",
    "branch": "Mechanical Engineering (MECH)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0303@srisivani.edu.in",
    "phone": "+91 91403 030",
    "studentPhone": "+91 91403 030",
    "parentPhone": "+91 94403 030",
    "parentName": "K. Venkateswara Rao",
    "avatar": "KV",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SMECH404",
    "rollNumber": "22W61A0304",
    "username": "22w61a0304",
    "aliases": [
      "sairam",
      "smech404",
      "22w61a0304"
    ],
    "password": "student123",
    "name": "M. Sai Ram",
    "branch": "Mechanical Engineering (MECH)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0304@srisivani.edu.in",
    "phone": "+91 91403 040",
    "studentPhone": "+91 91403 040",
    "parentPhone": "+91 94403 040",
    "parentName": "M. Appala Raju",
    "avatar": "MS",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SMECH405",
    "rollNumber": "22W61A0305",
    "username": "22w61a0305",
    "aliases": [
      "mohankrishna",
      "smech405",
      "22w61a0305"
    ],
    "password": "student123",
    "name": "P. Mohan Krishna",
    "branch": "Mechanical Engineering (MECH)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0305@srisivani.edu.in",
    "phone": "+91 91403 050",
    "studentPhone": "+91 91403 050",
    "parentPhone": "+91 94403 050",
    "parentName": "P. Satyam",
    "avatar": "PM",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SCIV101",
    "rollNumber": "26W61A0101",
    "username": "26w61a0101",
    "aliases": [
      "sandeep",
      "sciv101",
      "26w61a0101"
    ],
    "password": "student123",
    "name": "R. Sai Sandeep",
    "branch": "Civil Engineering (CIVIL)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0101@srisivani.edu.in",
    "phone": "+91 91101 010",
    "studentPhone": "+91 91101 010",
    "parentPhone": "+91 94101 010",
    "parentName": "R. Trinadh",
    "avatar": "RS",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SCIV102",
    "rollNumber": "26W61A0102",
    "username": "26w61a0102",
    "aliases": [
      "divya",
      "sciv102",
      "26w61a0102"
    ],
    "password": "student123",
    "name": "S. Divya",
    "branch": "Civil Engineering (CIVIL)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0102@srisivani.edu.in",
    "phone": "+91 91101 020",
    "studentPhone": "+91 91101 020",
    "parentPhone": "+91 94101 020",
    "parentName": "S. Venkatesh",
    "avatar": "SD",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SCIV103",
    "rollNumber": "26W61A0103",
    "username": "26w61a0103",
    "aliases": [
      "akhil",
      "sciv103",
      "26w61a0103"
    ],
    "password": "student123",
    "name": "T. Akhil",
    "branch": "Civil Engineering (CIVIL)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0103@srisivani.edu.in",
    "phone": "+91 91101 030",
    "studentPhone": "+91 91101 030",
    "parentPhone": "+91 94101 030",
    "parentName": "T. Prasad Rao",
    "avatar": "TA",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SCIV104",
    "rollNumber": "26W61A0104",
    "username": "26w61a0104",
    "aliases": [
      "sravanthi",
      "sciv104",
      "26w61a0104"
    ],
    "password": "student123",
    "name": "V. Sravanthi",
    "branch": "Civil Engineering (CIVIL)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0104@srisivani.edu.in",
    "phone": "+91 91101 040",
    "studentPhone": "+91 91101 040",
    "parentPhone": "+91 94101 040",
    "parentName": "V. Ramam",
    "avatar": "VS",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SCIV105",
    "rollNumber": "26W61A0105",
    "username": "26w61a0105",
    "aliases": [
      "pavankumar",
      "sciv105",
      "26w61a0105"
    ],
    "password": "student123",
    "name": "Y. Pavan Kumar",
    "branch": "Civil Engineering (CIVIL)",
    "year": "1st Year",
    "semester": "Semester 1",
    "section": "A",
    "email": "26w61a0105@srisivani.edu.in",
    "phone": "+91 91101 050",
    "studentPhone": "+91 91101 050",
    "parentPhone": "+91 94101 050",
    "parentName": "Y. Madhusudhan",
    "avatar": "YP",
    "admissionDate": "2025-08-20"
  },
  {
    "id": "SCIV201",
    "rollNumber": "25W61A0101",
    "username": "25w61a0101",
    "aliases": [
      "vinay",
      "sciv201",
      "25w61a0101"
    ],
    "password": "student123",
    "name": "A. Vinay",
    "branch": "Civil Engineering (CIVIL)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0101@srisivani.edu.in",
    "phone": "+91 91201 010",
    "studentPhone": "+91 91201 010",
    "parentPhone": "+91 94201 010",
    "parentName": "A. Srinivasa Rao",
    "avatar": "AV",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SCIV202",
    "rollNumber": "25W61A0102",
    "username": "25w61a0102",
    "aliases": [
      "anitha",
      "sciv202",
      "25w61a0102"
    ],
    "password": "student123",
    "name": "B. Anitha",
    "branch": "Civil Engineering (CIVIL)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0102@srisivani.edu.in",
    "phone": "+91 91201 020",
    "studentPhone": "+91 91201 020",
    "parentPhone": "+91 94201 020",
    "parentName": "B. Jagadeeswara Rao",
    "avatar": "BA",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SCIV203",
    "rollNumber": "25W61A0103",
    "username": "25w61a0103",
    "aliases": [
      "rohit",
      "sciv203",
      "25w61a0103"
    ],
    "password": "student123",
    "name": "D. Rohit",
    "branch": "Civil Engineering (CIVIL)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0103@srisivani.edu.in",
    "phone": "+91 91201 030",
    "studentPhone": "+91 91201 030",
    "parentPhone": "+91 94201 030",
    "parentName": "D. Anand Kumar",
    "avatar": "DR",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SCIV204",
    "rollNumber": "25W61A0104",
    "username": "25w61a0104",
    "aliases": [
      "tejaswi",
      "sciv204",
      "25w61a0104"
    ],
    "password": "student123",
    "name": "G. Tejaswi",
    "branch": "Civil Engineering (CIVIL)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0104@srisivani.edu.in",
    "phone": "+91 91201 040",
    "studentPhone": "+91 91201 040",
    "parentPhone": "+91 94201 040",
    "parentName": "G. Sriramulu",
    "avatar": "GT",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SCIV205",
    "rollNumber": "25W61A0105",
    "username": "25w61a0105",
    "aliases": [
      "lokesh",
      "sciv205",
      "25w61a0105"
    ],
    "password": "student123",
    "name": "K. Lokesh",
    "branch": "Civil Engineering (CIVIL)",
    "year": "2nd Year",
    "semester": "Semester 3",
    "section": "A",
    "email": "25w61a0105@srisivani.edu.in",
    "phone": "+91 91201 050",
    "studentPhone": "+91 91201 050",
    "parentPhone": "+91 94201 050",
    "parentName": "K. Appanna",
    "avatar": "KL",
    "admissionDate": "2024-08-16"
  },
  {
    "id": "SCIV301",
    "rollNumber": "24W61A0101",
    "username": "24w61a0101",
    "aliases": [
      "gowtham",
      "sciv301",
      "24w61a0101"
    ],
    "password": "student123",
    "name": "M. Gowtham",
    "branch": "Civil Engineering (CIVIL)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0101@srisivani.edu.in",
    "phone": "+91 91301 010",
    "studentPhone": "+91 91301 010",
    "parentPhone": "+91 94301 010",
    "parentName": "M. Somaraju",
    "avatar": "MG",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SCIV302",
    "rollNumber": "24W61A0102",
    "username": "24w61a0102",
    "aliases": [
      "meghana",
      "sciv302",
      "24w61a0102"
    ],
    "password": "student123",
    "name": "P. Meghana",
    "branch": "Civil Engineering (CIVIL)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0102@srisivani.edu.in",
    "phone": "+91 91301 020",
    "studentPhone": "+91 91301 020",
    "parentPhone": "+91 94301 020",
    "parentName": "P. Krishna Mohan",
    "avatar": "PM",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SCIV303",
    "rollNumber": "24W61A0103",
    "username": "24w61a0103",
    "aliases": [
      "sumanth",
      "sciv303",
      "24w61a0103"
    ],
    "password": "student123",
    "name": "R. Sumanth",
    "branch": "Civil Engineering (CIVIL)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0103@srisivani.edu.in",
    "phone": "+91 91301 030",
    "studentPhone": "+91 91301 030",
    "parentPhone": "+91 94301 030",
    "parentName": "R. Dalinaidu",
    "avatar": "RS",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SCIV304",
    "rollNumber": "24W61A0104",
    "username": "24w61a0104",
    "aliases": [
      "reshma",
      "sciv304",
      "24w61a0104"
    ],
    "password": "student123",
    "name": "S. Reshma",
    "branch": "Civil Engineering (CIVIL)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0104@srisivani.edu.in",
    "phone": "+91 91301 040",
    "studentPhone": "+91 91301 040",
    "parentPhone": "+91 94301 040",
    "parentName": "S. Mahalakshmi Naidu",
    "avatar": "SR",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SCIV305",
    "rollNumber": "24W61A0105",
    "username": "24w61a0105",
    "aliases": [
      "tharun",
      "sciv305",
      "24w61a0105"
    ],
    "password": "student123",
    "name": "T. Tharun",
    "branch": "Civil Engineering (CIVIL)",
    "year": "3rd Year",
    "semester": "Semester 5",
    "section": "A",
    "email": "24w61a0105@srisivani.edu.in",
    "phone": "+91 91301 050",
    "studentPhone": "+91 91301 050",
    "parentPhone": "+91 94301 050",
    "parentName": "T. Ramakrishna",
    "avatar": "TT",
    "admissionDate": "2023-08-18"
  },
  {
    "id": "SCIV401",
    "rollNumber": "22W61A0101",
    "username": "22w61a0101",
    "aliases": [
      "eswar",
      "sciv401",
      "22w61a0101"
    ],
    "password": "student123",
    "name": "V. Eswar",
    "branch": "Civil Engineering (CIVIL)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0101@srisivani.edu.in",
    "phone": "+91 91401 010",
    "studentPhone": "+91 91401 010",
    "parentPhone": "+91 94401 010",
    "parentName": "V. Nageswara Rao",
    "avatar": "VE",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SCIV402",
    "rollNumber": "22W61A0102",
    "username": "22w61a0102",
    "aliases": [
      "sireesha",
      "sciv402",
      "22w61a0102"
    ],
    "password": "student123",
    "name": "Y. Sireesha",
    "branch": "Civil Engineering (CIVIL)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0102@srisivani.edu.in",
    "phone": "+91 91401 020",
    "studentPhone": "+91 91401 020",
    "parentPhone": "+91 94401 020",
    "parentName": "Y. Thavitayya",
    "avatar": "YS",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SCIV403",
    "rollNumber": "22W61A0103",
    "username": "22w61a0103",
    "aliases": [
      "kiran",
      "sciv403",
      "22w61a0103"
    ],
    "password": "student123",
    "name": "B. Kiran",
    "branch": "Civil Engineering (CIVIL)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0103@srisivani.edu.in",
    "phone": "+91 91401 030",
    "studentPhone": "+91 91401 030",
    "parentPhone": "+91 94401 030",
    "parentName": "B. Appalanaidu",
    "avatar": "BK",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SCIV404",
    "rollNumber": "22W61A0104",
    "username": "22w61a0104",
    "aliases": [
      "sneha",
      "sciv404",
      "22w61a0104"
    ],
    "password": "student123",
    "name": "C. Sneha",
    "branch": "Civil Engineering (CIVIL)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0104@srisivani.edu.in",
    "phone": "+91 91401 040",
    "studentPhone": "+91 91401 040",
    "parentPhone": "+91 94401 040",
    "parentName": "C. Koteswara Rao",
    "avatar": "CS",
    "admissionDate": "2022-08-15"
  },
  {
    "id": "SCIV405",
    "rollNumber": "22W61A0105",
    "username": "22w61a0105",
    "aliases": [
      "vasu",
      "sciv405",
      "22w61a0105"
    ],
    "password": "student123",
    "name": "D. Vasu",
    "branch": "Civil Engineering (CIVIL)",
    "year": "4th Year",
    "semester": "Semester 7",
    "section": "A",
    "email": "22w61a0105@srisivani.edu.in",
    "phone": "+91 91401 050",
    "studentPhone": "+91 91401 050",
    "parentPhone": "+91 94401 050",
    "parentName": "D. Satyanarayana",
    "avatar": "DV",
    "admissionDate": "2022-08-15"
  }
];

export const INITIAL_MARKS = {
  "S101": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 33,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 33,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 34,
        "external": 51
      }
    ]
  },
  "S102": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 53
      }
    ]
  },
  "S103": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 55
      }
    ]
  },
  "S104": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 39,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 39,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 57
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 57
      }
    ]
  },
  "S105": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 39,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 40,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 57
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 57
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 53
      }
    ]
  },
  "S001": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 34,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 33,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 34,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 50
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 35,
        "external": 50
      }
    ]
  },
  "S002": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 34,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 52
      }
    ]
  },
  "S003": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 54
      }
    ]
  },
  "S004": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 56
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 56
      }
    ]
  },
  "S005": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 58
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 56
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 58
      }
    ]
  },
  "S006": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 33,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 34,
        "external": 49
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 49
      }
    ]
  },
  "S007": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 51
      }
    ]
  },
  "S301": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 53
      }
    ]
  },
  "S302": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 39,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 57
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 55
      }
    ]
  },
  "S303": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 39,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 40,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 39,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 57
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 57
      }
    ]
  },
  "S304": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 33,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 34,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 54
      }
    ]
  },
  "S305": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 34,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 34,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 50
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 35,
        "external": 50
      }
    ]
  },
  "S401": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 56
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 52
      }
    ]
  },
  "S402": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 39,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 54
      }
    ]
  },
  "S403": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 40,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 40,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 56
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 58
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 56
      }
    ]
  },
  "S404": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 33,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 33,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 34,
        "external": 53
      }
    ]
  },
  "S405": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 55
      }
    ]
  },
  "SCSE101": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 51
      }
    ]
  },
  "SCSE102": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 39,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 39,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 57
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 57
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 53
      }
    ]
  },
  "SCSE103": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 39,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 40,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 57
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 55
      }
    ]
  },
  "SCSE104": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 34,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 33,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 34,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 35,
        "external": 52
      }
    ]
  },
  "SCSE105": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 34,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 54
      }
    ]
  },
  "SCSE201": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 56
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 56
      }
    ]
  },
  "SCSE202": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 56
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 52
      }
    ]
  },
  "SCSE203": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 58
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 58
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 54
      }
    ]
  },
  "SCSE204": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 33,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 34,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 51
      }
    ]
  },
  "SCSE205": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 53
      }
    ]
  },
  "SCSE301": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 55
      }
    ]
  },
  "SCSE302": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 39,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 57
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 57
      }
    ]
  },
  "SCSE303": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 39,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 40,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 39,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 57
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 57
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 53
      }
    ]
  },
  "SCSE304": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 33,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 34,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 50
      }
    ]
  },
  "SCSE305": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 34,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 34,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 35,
        "external": 52
      }
    ]
  },
  "SCSE401": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 56
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 54
      }
    ]
  },
  "SCSE402": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 39,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 56
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 56
      }
    ]
  },
  "SCSE403": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 40,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 40,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 56
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 58
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 58
      }
    ]
  },
  "SCSE404": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 33,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 33,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 49
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 34,
        "external": 49
      }
    ]
  },
  "SCSE405": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 51
      }
    ]
  },
  "SECE101": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 53
      }
    ]
  },
  "SECE102": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 39,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 39,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 57
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 55
      }
    ]
  },
  "SECE103": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 39,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 40,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 57
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 57
      }
    ]
  },
  "SECE104": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 34,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 33,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 34,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 35,
        "external": 54
      }
    ]
  },
  "SECE105": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 34,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 50
      }
    ]
  },
  "SECE201": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 56
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 52
      }
    ]
  },
  "SECE202": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 56
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 54
      }
    ]
  },
  "SECE203": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 56
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 58
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 56
      }
    ]
  },
  "SECE204": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 33,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 34,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 53
      }
    ]
  },
  "SECE205": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 55
      }
    ]
  },
  "SECE301": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 51
      }
    ]
  },
  "SECE302": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 39,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 57
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 57
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 53
      }
    ]
  },
  "SECE303": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 39,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 40,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 39,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 57
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 55
      }
    ]
  },
  "SECE304": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 33,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 34,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 52
      }
    ]
  },
  "SECE305": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 34,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 34,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 35,
        "external": 54
      }
    ]
  },
  "SECE401": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 56
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 56
      }
    ]
  },
  "SECE402": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 39,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 56
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 52
      }
    ]
  },
  "SECE403": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 40,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 40,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 58
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 56
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 58
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 54
      }
    ]
  },
  "SECE404": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 33,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 33,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 34,
        "external": 51
      }
    ]
  },
  "SECE405": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 53
      }
    ]
  },
  "SEEE101": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 55
      }
    ]
  },
  "SEEE102": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 39,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 39,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 57
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 57
      }
    ]
  },
  "SEEE103": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 39,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 40,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 57
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 57
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 53
      }
    ]
  },
  "SEEE104": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 34,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 33,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 34,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 50
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 35,
        "external": 50
      }
    ]
  },
  "SEEE105": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 34,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 52
      }
    ]
  },
  "SEEE201": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 54
      }
    ]
  },
  "SEEE202": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 56
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 56
      }
    ]
  },
  "SEEE203": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 58
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 56
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 58
      }
    ]
  },
  "SEEE204": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 33,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 34,
        "external": 49
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 49
      }
    ]
  },
  "SEEE205": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 51
      }
    ]
  },
  "SEEE301": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 53
      }
    ]
  },
  "SEEE302": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 39,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 57
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 55
      }
    ]
  },
  "SEEE303": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 39,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 40,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 39,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 57
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 57
      }
    ]
  },
  "SEEE304": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 33,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 34,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 54
      }
    ]
  },
  "SEEE305": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 34,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 34,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 50
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 35,
        "external": 50
      }
    ]
  },
  "SEEE401": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 56
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 52
      }
    ]
  },
  "SEEE402": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 39,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 54
      }
    ]
  },
  "SEEE403": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 40,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 40,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 56
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 58
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 56
      }
    ]
  },
  "SEEE404": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 33,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 33,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 34,
        "external": 53
      }
    ]
  },
  "SEEE405": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 55
      }
    ]
  },
  "SMECH101": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 51
      }
    ]
  },
  "SMECH102": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 39,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 39,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 57
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 57
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 53
      }
    ]
  },
  "SMECH103": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 39,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 40,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 57
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 55
      }
    ]
  },
  "SMECH104": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 34,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 33,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 34,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 35,
        "external": 52
      }
    ]
  },
  "SMECH105": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 34,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 54
      }
    ]
  },
  "SMECH201": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 56
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 56
      }
    ]
  },
  "SMECH202": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 56
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 52
      }
    ]
  },
  "SMECH203": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 58
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 58
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 54
      }
    ]
  },
  "SMECH204": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 33,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 34,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 51
      }
    ]
  },
  "SMECH205": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 53
      }
    ]
  },
  "SMECH301": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 55
      }
    ]
  },
  "SMECH302": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 39,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 57
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 57
      }
    ]
  },
  "SMECH303": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 39,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 40,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 39,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 57
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 57
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 53
      }
    ]
  },
  "SMECH304": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 33,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 34,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 50
      }
    ]
  },
  "SMECH305": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 34,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 34,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 35,
        "external": 52
      }
    ]
  },
  "SMECH401": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 56
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 54
      }
    ]
  },
  "SMECH402": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 39,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 56
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 56
      }
    ]
  },
  "SMECH403": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 40,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 40,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 56
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 58
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 58
      }
    ]
  },
  "SMECH404": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 33,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 33,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 49
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 34,
        "external": 49
      }
    ]
  },
  "SMECH405": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 51
      }
    ]
  },
  "SCIV101": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 53
      }
    ]
  },
  "SCIV102": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 39,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 39,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 57
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 55
      }
    ]
  },
  "SCIV103": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 39,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 40,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 57
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 57
      }
    ]
  },
  "SCIV104": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 34,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 33,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 34,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 35,
        "external": 54
      }
    ]
  },
  "SCIV105": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 34,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 35,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 50
      }
    ]
  },
  "SCIV201": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 56
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 52
      }
    ]
  },
  "SCIV202": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 56
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 54
      }
    ]
  },
  "SCIV203": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 39,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 56
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 58
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 56
      }
    ]
  },
  "SCIV204": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 33,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 34,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 53
      }
    ]
  },
  "SCIV205": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 55
      }
    ]
  },
  "SCIV301": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 51
      }
    ]
  },
  "SCIV302": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 39,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 37,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 38,
        "external": 57
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 38,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 40,
        "external": 57
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 38,
        "external": 53
      }
    ]
  },
  "SCIV303": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 39,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 40,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 38,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 39,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 53
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 55
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 57
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 55
      }
    ]
  },
  "SCIV304": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 33,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 34,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 50
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 52
      }
    ]
  },
  "SCIV305": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 34,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 35,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 34,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 35,
        "external": 52
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 35,
        "external": 54
      }
    ]
  },
  "SCIV401": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 36,
        "external": 52
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 53
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 54
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 36,
        "external": 51
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 37,
        "external": 54
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 56
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 37,
        "external": 56
      }
    ]
  },
  "SCIV402": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 38,
        "external": 54
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 39,
        "external": 55
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 38,
        "external": 53
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 39,
        "external": 56
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 37,
        "external": 56
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 39,
        "external": 52
      }
    ]
  },
  "SCIV403": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 40,
        "external": 56
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 39,
        "external": 54
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 40,
        "external": 55
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 40,
        "external": 58
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 39,
        "external": 54
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 40,
        "external": 56
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 39,
        "external": 58
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 40,
        "external": 54
      }
    ]
  },
  "SCIV404": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 33,
        "external": 48
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 35,
        "external": 50
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 33,
        "external": 52
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 34,
        "external": 49
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 36,
        "external": 49
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 34,
        "external": 51
      }
    ]
  },
  "SCIV405": {
    "semester1": [
      {
        "code": "BS1101",
        "subject": "Linear Algebra and Calculus",
        "credits": 4,
        "internal": 35,
        "external": 50
      },
      {
        "code": "CS1101",
        "subject": "Introduction to Programming",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "HS1101",
        "subject": "Communication English",
        "credits": 3,
        "internal": 37,
        "external": 52
      },
      {
        "code": "BS1102",
        "subject": "Engineering Physics",
        "credits": 3,
        "internal": 34,
        "external": 53
      },
      {
        "code": "ES1101",
        "subject": "Basic Civil and Mechanical Engineering",
        "credits": 4,
        "internal": 35,
        "external": 49
      }
    ],
    "semester2": [
      {
        "code": "CS1201",
        "subject": "Data Structures",
        "credits": 3,
        "internal": 36,
        "external": 51
      },
      {
        "code": "BS1201",
        "subject": "Differential Equations and Vector Calculus",
        "credits": 4,
        "internal": 38,
        "external": 53
      },
      {
        "code": "BS1202",
        "subject": "Engineering Chemistry",
        "credits": 3,
        "internal": 36,
        "external": 55
      },
      {
        "code": "ES1201",
        "subject": "Engineering Graphics",
        "credits": 3,
        "internal": 38,
        "external": 51
      },
      {
        "code": "ES1202",
        "subject": "Basic Electrical and Electronics Lab",
        "credits": 2,
        "internal": 36,
        "external": 53
      }
    ]
  }
};

export const INITIAL_ATTENDANCE = {
  "S101": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "S102": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "S103": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "S104": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "S105": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "S001": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "S002": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "S003": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "S004": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "S005": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "S006": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "S007": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "S301": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "S302": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "S303": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "S304": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "S305": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "S401": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "S402": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "S403": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "S404": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "S405": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SCSE101": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SCSE102": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SCSE103": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SCSE104": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SCSE105": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SCSE201": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SCSE202": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SCSE203": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SCSE204": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SCSE205": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SCSE301": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SCSE302": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SCSE303": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SCSE304": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SCSE305": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SCSE401": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SCSE402": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SCSE403": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SCSE404": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SCSE405": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SECE101": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SECE102": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SECE103": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SECE104": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SECE105": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SECE201": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SECE202": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SECE203": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SECE204": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SECE205": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SECE301": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SECE302": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SECE303": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SECE304": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SECE305": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SECE401": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SECE402": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SECE403": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SECE404": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SECE405": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SEEE101": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SEEE102": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SEEE103": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SEEE104": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SEEE105": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SEEE201": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SEEE202": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SEEE203": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SEEE204": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SEEE205": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SEEE301": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SEEE302": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SEEE303": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SEEE304": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SEEE305": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SEEE401": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SEEE402": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SEEE403": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SEEE404": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SEEE405": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SMECH101": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SMECH102": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SMECH103": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SMECH104": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SMECH105": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SMECH201": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SMECH202": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SMECH203": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SMECH204": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SMECH205": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SMECH301": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SMECH302": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SMECH303": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SMECH304": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SMECH305": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SMECH401": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SMECH402": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SMECH403": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SMECH404": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SMECH405": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SCIV101": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SCIV102": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SCIV103": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SCIV104": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SCIV105": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SCIV201": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SCIV202": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SCIV203": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SCIV204": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SCIV205": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SCIV301": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SCIV302": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SCIV303": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SCIV304": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SCIV305": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SCIV401": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ],
  "SCIV402": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    }
  ],
  "SCIV403": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    }
  ],
  "SCIV404": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    }
  ],
  "SCIV405": [
    {
      "code": "CS1201",
      "subject": "Data Structures",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    },
    {
      "code": "BS1201",
      "subject": "Differential Equations and Vector Calculus",
      "totalClasses": 45,
      "present": 41,
      "absent": 4,
      "percentage": 91.11
    },
    {
      "code": "BS1202",
      "subject": "Engineering Chemistry",
      "totalClasses": 45,
      "present": 40,
      "absent": 5,
      "percentage": 88.89
    },
    {
      "code": "ES1201",
      "subject": "Engineering Graphics",
      "totalClasses": 45,
      "present": 43,
      "absent": 2,
      "percentage": 95.56
    },
    {
      "code": "ES1202",
      "subject": "Basic Electrical and Electronics Lab",
      "totalClasses": 45,
      "present": 42,
      "absent": 3,
      "percentage": 93.33
    }
  ]
};

export const INITIAL_GRIEVANCES = [
  {
    "id": "TKT-2026-0828",
    "studentId": "S001",
    "studentName": "Palisetti Hemasundar",
    "rollNumber": "25W61A6142",
    "studentPhone": "+91 91234 61420",
    "parentPhone": "+91 94401 61420",
    "type": "Complaint",
    "category": "Attendance & FRS Biometrics",
    "subject": "Morning FRS Biometric verification kiosk sync delay",
    "description": "On Thursday morning (10th Sep), the facial recognition attendance device at Block B entry had a temporary server sync delay. Class coordinator verified attendance manually.",
    "priority": "Medium",
    "status": "Resolved",
    "date": "2026-09-10",
    "createdAt": "2026-09-10",
    "response": "Biometric kiosk network buffer verified and 100% synchronized with college cloud attendance database. Full attendance credit granted.",
    "resolvedAt": "2026-09-11",
    "remarks": "Biometric kiosk network buffer verified and 100% synchronized with college cloud attendance database. Full attendance credit granted."
  },
  {
    "id": "TKT-2026-0814",
    "studentId": "S001",
    "studentName": "Palisetti Hemasundar",
    "rollNumber": "25W61A6142",
    "studentPhone": "+91 91234 61420",
    "parentPhone": "+91 94401 61420",
    "type": "Suggestion",
    "category": "Campus Infrastructure & Labs",
    "subject": "High-speed Wi-Fi connectivity in AIML Advanced Lab",
    "description": "Requesting bandwidth boost and Wi-Fi signal extender installation near Workstations 14-25 in the Department AIML Laboratory for model training.",
    "priority": "High",
    "status": "In Progress",
    "date": "2026-09-08",
    "createdAt": "2026-09-08",
    "response": "IT Systems Engineer assigned. Additional dual-band access point scheduled for deployment on 15th Sep.",
    "remarks": "IT Systems Engineer assigned. Additional dual-band access point scheduled for deployment on 15th Sep."
  },
  {
    "id": "TKT-2026-0792",
    "studentId": "S001",
    "studentName": "Palisetti Hemasundar",
    "rollNumber": "25W61A6142",
    "studentPhone": "+91 91234 61420",
    "parentPhone": "+91 94401 61420",
    "type": "Suggestion",
    "category": "Hostel & Food Mess",
    "subject": "Reading Room lighting enhancement in Spoorti Sadan Boys Hostel",
    "description": "Requesting replacement of study lamps and additional power sockets in the Ground Floor Common Study Hall of Spoorti Sadan.",
    "priority": "Low",
    "status": "Resolved",
    "date": "2026-09-02",
    "createdAt": "2026-09-02",
    "response": "New LED study luminaires and 4 quad-socket distribution boxes installed by campus electrician on 5th Sep.",
    "resolvedAt": "2026-09-05",
    "remarks": "New LED study luminaires and 4 quad-socket distribution boxes installed by campus electrician on 5th Sep."
  },
  {
    "id": "TKT-2026-0820",
    "studentId": "S002",
    "studentName": "Kalla Ganesh Siva Sai",
    "rollNumber": "25W61A6122",
    "studentPhone": "+91 91234 61220",
    "parentPhone": "+91 94401 61220",
    "type": "Suggestion",
    "category": "Library & Digital Resources",
    "subject": "Request for Reference Textbooks on Data Structures in Central Library",
    "description": "Please procure additional copies of Data Structures and Algorithm Analysis in C++ for the 2nd Year AIML batch reserve shelf.",
    "priority": "Medium",
    "status": "Resolved",
    "date": "2026-09-10",
    "createdAt": "2026-09-10",
    "response": "5 additional reference copies made available at the Departmental Book Bank.",
    "resolvedAt": "2026-09-12",
    "remarks": "5 additional reference copies made available at the Departmental Book Bank."
  }
];
