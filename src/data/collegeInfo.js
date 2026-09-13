/**
 * Centralized College Information - Sri Sivani College of Engineering (SSCE)
 * Configured with authentic institutional identity, affiliations, and provided campus assets.
 */
export const collegeInfo = {
  name: "Sri Sivani College of Engineering",
  shortName: "SSCE",
  motto: "योगः कर्मसु कौशलम् (Excellence in Action)",
  management: "Under the Management of Sri Sivani Educational Society, Srikakulam",
  location: "NH-16, Chilakapalem Jn, Srikakulam Dist, Andhra Pradesh - 532410",
  department: "Department of Artificial Intelligence & Machine Learning (AIML)",
  description: "Premier engineering institution established in 2006, approved by AICTE New Delhi, affiliated to JNTUK Kakinada (CC-W6), and recognized under UGC 2(f) & 12(B) with ISO 9001:2015 certification. Dedicated to producing technically proficient and ethically sound engineers.",
  established: "2006",
  accreditation: "Approved by AICTE, Affiliated to JNTUK (CC-W6) • UGC 2(f) & 12(B) • ISO 9001:2015",
  affiliation: "Affiliated to Jawaharlal Nehru Technological University Kakinada (JNTUK)",
  collegeCode: "W6",
  logo: "./assets/logo/college-logo.png",
  heroVideo: "./assets/video/college-intro.mp4",
  contact: {
    email: "info@srisivani.com",
    phone: "+91-7382651411 / +91-7382651466",
    website: "www.srisivani.com",
    phones: {
      primary: ["+91-7382651411", "+91-7382651466"],
      alternative: ["+91-7382651422", "+91-7382651455", "+91-7382651477"],
      landline: ["08942-231107", "08942-231108", "08942-231106"]
    },
    emails: {
      general: "info@srisivani.com",
      principal: "principal@srisivani.com",
      vicePrincipal: "gtchsekhar@srisivani.com"
    }
  },
  gallery: [
    {
      id: "b1",
      title: "Sri Sivani Main Academic Complex",
      description: "Central administrative headquarters and high-tech multimedia lecture complexes.",
      path: "./assets/images/college-building-1.jpg",
      tag: "Main Block"
    },
    {
      id: "c1",
      title: "Grand Entrance Archway (SSCE Gate)",
      description: "Iconic campus gateway on NH-16 Chilakapalem Junction welcoming students and visitors.",
      path: "./assets/images/campus-1.jpg",
      tag: "Campus Entrance"
    },
    {
      id: "ed1",
      title: "Civil Engineering Day Model - The London Bridge",
      description: "Scale model replica of the iconic London Bridge innovated and constructed by Civil Engineering students during Engineers Day celebrations.",
      path: "./assets/images/engineering-day-model.jpg",
      tag: "Student Innovation"
    },
    {
      id: "h1",
      title: "Spoorti Sadan Boys Hostel",
      description: "On-campus student residential complex offering secure accommodations, furnished rooms, and dining amenities.",
      path: "./assets/images/spoorti-sadan-boys-hostel.jpg",
      tag: "Campus Hostel"
    },
    {
      id: "b2",
      title: "Academic Quadrangle & Sports Arena",
      description: "Multi-tiered academic wing overlooking spacious sports courts and green grounds.",
      path: "./assets/images/college-building-2.jpg",
      tag: "Academic Complex"
    },
    {
      id: "c2",
      title: "Campus Avenue & Department Wing",
      description: "Tree-lined central avenue leading to specialized engineering laboratories and classrooms.",
      path: "./assets/images/campus-2.jpg",
      tag: "Campus Avenue"
    }
  ]
};

/**
 * Authentic Faculty Members from Sri Sivani College of Engineering
 * Source: https://srisivani.com/computer-science-engineering/
 */
export const FACULTY_MEMBERS = [
  {
    id: "fac-hod",
    name: "Mr. Y. Jagadeesh Kumar",
    designation: "Head of the Department (HOD) & Assistant Professor",
    shortRole: "HOD & Asst. Professor",
    qualification: "M.Tech",
    department: "Computer Science & Engineering",
    category: "hod",
    image: "https://srisivani.com/wp-content/uploads/2025/04/jagadeesh.jpg",
    initials: "YJK",
    email: "csehod@srisivani.com",
    experience: "15+ Years Experience",
    specialization: "Cloud Computing & Distributed Systems"
  },
  {
    id: "fac-prof-1",
    name: "Dr. Uttam Mande",
    designation: "Professor",
    shortRole: "Professor",
    qualification: "M.Tech, Ph.D.",
    department: "Computer Science & Engineering",
    category: "professor",
    image: "https://srisivani.com/wp-content/uploads/2025/04/Dr-Uttam.jpeg",
    initials: "UM",
    email: "uttam.mande@srisivani.com",
    experience: "18+ Years Experience",
    specialization: "Data Mining & Machine Learning"
  },
  {
    id: "fac-prof-2",
    name: "Dr. VRR Rao",
    designation: "Professor",
    shortRole: "Professor",
    qualification: "Ph.D.",
    department: "Computer Science & Engineering",
    category: "professor",
    image: null,
    initials: "VRR",
    email: "vrr.rao@srisivani.com",
    experience: "20+ Years Experience",
    specialization: "Algorithms & Information Security"
  },
  {
    id: "fac-assoc-1",
    name: "Dr. G.S. Reddy",
    designation: "Associate Professor",
    shortRole: "Associate Professor",
    qualification: "M.Tech, Ph.D.",
    department: "Computer Science & Engineering",
    category: "associate",
    image: null,
    initials: "GSR",
    email: "gs.reddy@srisivani.com",
    experience: "12+ Years Experience",
    specialization: "Computer Networks & IoT"
  },
  {
    id: "fac-assoc-2",
    name: "Dr. M.P. Kumar",
    designation: "Associate Professor",
    shortRole: "Associate Professor",
    qualification: "M.Tech, Ph.D.",
    department: "Computer Science & Engineering",
    category: "associate",
    image: null,
    initials: "MPK",
    email: "mp.kumar@srisivani.com",
    experience: "11+ Years Experience",
    specialization: "Database Management & Big Data"
  },
  {
    id: "fac-assoc-3",
    name: "Dr. Prabakar",
    designation: "Associate Professor",
    shortRole: "Associate Professor",
    qualification: "M.Tech, Ph.D.",
    department: "Computer Science & Engineering",
    category: "associate",
    image: null,
    initials: "PR",
    email: "prabakar@srisivani.com",
    experience: "10+ Years Experience",
    specialization: "Software Engineering & Testing"
  },
  {
    id: "fac-assoc-4",
    name: "Dr. KBJ Kumar",
    designation: "Associate Professor",
    shortRole: "Associate Professor",
    qualification: "M.Tech, Ph.D.",
    department: "Computer Science & Engineering",
    category: "associate",
    image: null,
    initials: "KBJ",
    email: "kbj.kumar@srisivani.com",
    experience: "10+ Years Experience",
    specialization: "Artificial Intelligence & NLP"
  },
  {
    id: "fac-assoc-5",
    name: "Dr. T. Stephen",
    designation: "Associate Professor",
    shortRole: "Associate Professor",
    qualification: "M.Tech, Ph.D.",
    department: "Computer Science & Engineering",
    category: "associate",
    image: null,
    initials: "TS",
    email: "t.stephen@srisivani.com",
    experience: "9+ Years Experience",
    specialization: "Cyber Security & Cryptography"
  },
  {
    id: "fac-asst-1",
    name: "Mrs. H.V. Bhagya Sri",
    designation: "Assistant Professor",
    shortRole: "Assistant Professor",
    qualification: "M.Tech",
    department: "Computer Science & Engineering",
    category: "assistant",
    image: "https://srisivani.com/wp-content/uploads/2025/04/bhagyasir.jpg",
    initials: "HVB",
    email: "bhagyasri@srisivani.com",
    experience: "8+ Years Experience",
    specialization: "Web Technologies & Java"
  },
  {
    id: "fac-asst-2",
    name: "Mr. P. Pradeep",
    designation: "Assistant Professor",
    shortRole: "Assistant Professor",
    qualification: "M.Tech",
    department: "Computer Science & Engineering",
    category: "assistant",
    image: "https://srisivani.com/wp-content/uploads/2025/04/Pradeep-.jpg",
    initials: "PP",
    email: "p.pradeep@srisivani.com",
    experience: "7+ Years Experience",
    specialization: "Operating Systems & Python"
  },
  {
    id: "fac-asst-3",
    name: "Mr. Sudheer Kumar Sankali",
    designation: "Assistant Professor",
    shortRole: "Assistant Professor",
    qualification: "M.Tech",
    department: "Computer Science & Engineering",
    category: "assistant",
    image: "https://srisivani.com/wp-content/uploads/2025/04/sudheer.jpg",
    initials: "SKS",
    email: "sudheer.s@srisivani.com",
    experience: "7+ Years Experience",
    specialization: "Data Structures & C++"
  },
  {
    id: "fac-asst-4",
    name: "Mrs. B. Jhansi",
    designation: "Assistant Professor",
    shortRole: "Assistant Professor",
    qualification: "M.Tech",
    department: "Computer Science & Engineering",
    category: "assistant",
    image: "https://srisivani.com/wp-content/uploads/2025/04/Jhansi.jpeg",
    initials: "BJ",
    email: "b.jhansi@srisivani.com",
    experience: "6+ Years Experience",
    specialization: "Computer Graphics & Multimedia"
  },
  {
    id: "fac-asst-5",
    name: "Mr. G. Anudeep Kumar",
    designation: "Assistant Professor",
    shortRole: "Assistant Professor",
    qualification: "M.Tech",
    department: "Computer Science & Engineering",
    category: "assistant",
    image: "https://srisivani.com/wp-content/uploads/2025/04/anudeep.jpg",
    initials: "GAK",
    email: "g.anudeep@srisivani.com",
    experience: "6+ Years Experience",
    specialization: "Mobile Application Development"
  },
  {
    id: "fac-asst-6",
    name: "Mrs. Leelavathi",
    designation: "Assistant Professor",
    shortRole: "Assistant Professor",
    qualification: "M.Tech",
    department: "Computer Science & Engineering",
    category: "assistant",
    image: "https://srisivani.com/wp-content/uploads/2025/04/Leelavathi-1.jpeg",
    initials: "ML",
    email: "leelavathi@srisivani.com",
    experience: "5+ Years Experience",
    specialization: "Object Oriented Programming"
  },
  {
    id: "fac-asst-7",
    name: "Mrs. D. Shilpa",
    designation: "Assistant Professor",
    shortRole: "Assistant Professor",
    qualification: "M.Tech",
    department: "Computer Science & Engineering",
    category: "assistant",
    image: "https://srisivani.com/wp-content/uploads/2025/04/shilpa.jpg",
    initials: "DS",
    email: "d.shilpa@srisivani.com",
    experience: "5+ Years Experience",
    specialization: "Software Architecture"
  },
  {
    id: "fac-asst-8",
    name: "Mrs. K. Suma",
    designation: "Assistant Professor",
    shortRole: "Assistant Professor",
    qualification: "M.Tech",
    department: "Computer Science & Engineering",
    category: "assistant",
    image: "https://srisivani.com/wp-content/uploads/2025/04/suma.jpg",
    initials: "KS",
    email: "k.suma@srisivani.com",
    experience: "5+ Years Experience",
    specialization: "Compiler Design"
  },
  {
    id: "fac-asst-9",
    name: "Mrs. Hima Bindu",
    designation: "Assistant Professor",
    shortRole: "Assistant Professor",
    qualification: "M.Tech",
    department: "Computer Science & Engineering",
    category: "assistant",
    image: "https://srisivani.com/wp-content/uploads/2025/04/Bindu.jpeg",
    initials: "HB",
    email: "hima.bindu@srisivani.com",
    experience: "4+ Years Experience",
    specialization: "Network Security"
  },
  {
    id: "fac-asst-10",
    name: "Mrs. Navya Pilli",
    designation: "Assistant Professor",
    shortRole: "Assistant Professor",
    qualification: "M.Tech",
    department: "Computer Science & Engineering",
    category: "assistant",
    image: null,
    initials: "NP",
    email: "navya.p@srisivani.com",
    experience: "4+ Years Experience",
    specialization: "Theory of Computation"
  }
];
