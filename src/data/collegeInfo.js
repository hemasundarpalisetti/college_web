/**
 * Centralized College Information - Sri Sivani College of Engineering (SSCE)
 * Configured with authentic institutional identity, affiliations, and provided campus assets.
 */
const BASE = import.meta.env.BASE_URL || '/';

export const collegeInfo = {
  name: "Sri Sivani College of Engineering",
  shortName: "SSCE",
  motto: "योगः कर्मसु कौशलम् (Excellence in Action)",
  management: "Under the Management of Sri Sivani Educational Society, Srikakulam",
  location: "NH-16, Chilakapalem Jn, Srikakulam Dist, Andhra Pradesh - 532410",
  department: "Department of Computer Science & Engineering",
  description: "Premier engineering institution established in 2006, approved by AICTE New Delhi, affiliated to JNTUK Kakinada (CC-W6), and recognized under UGC 2(f) & 12(B) with ISO 9001:2015 certification. Dedicated to producing technically proficient and ethically sound engineers.",
  established: "2006",
  accreditation: "Approved by AICTE, Affiliated to JNTUK (CC-W6) • UGC 2(f) & 12(B) • ISO 9001:2015",
  affiliation: "Affiliated to Jawaharlal Nehru Technological University Kakinada (JNTUK)",
  collegeCode: "W6",
  logo: `${BASE}assets/logo/college-logo.png`,
  heroVideo: `${BASE}assets/video/college-intro.mp4`,
  contact: {
    email: "info@srisivani.edu.in",
    phone: "+91 (08942) 231188 / 231189",
    website: "www.srisivani.edu.in"
  },
  gallery: [
    {
      id: "b1",
      title: "Sri Sivani Main Academic Complex",
      description: "Central administrative headquarters and high-tech multimedia lecture complexes.",
      path: `${BASE}assets/images/college-building-1.jpg`,
      tag: "Main Block"
    },
    {
      id: "c1",
      title: "Grand Entrance Archway (SSCE Gate)",
      description: "Iconic campus gateway on NH-16 Chilakapalem Junction welcoming students and visitors.",
      path: `${BASE}assets/images/campus-1.jpg`,
      tag: "Campus Entrance"
    },
    {
      id: "b2",
      title: "Academic Quadrangle & Sports Arena",
      description: "Multi-tiered academic wing overlooking spacious sports courts and green grounds.",
      path: `${BASE}assets/images/college-building-2.jpg`,
      tag: "Academic Complex"
    },
    {
      id: "c2",
      title: "Campus Avenue & Department Wing",
      description: "Tree-lined central avenue leading to specialized engineering laboratories and classrooms.",
      path: `${BASE}assets/images/campus-2.jpg`,
      tag: "Campus Avenue"
    }
  ]
};
