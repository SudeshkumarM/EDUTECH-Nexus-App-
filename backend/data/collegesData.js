/**
 * Comprehensive Knowledge Base of Colleges
 * Includes Government, Government-Aided, Premier Autonomous Engineering,
 * Institutes of National Importance, Deemed Universities, and Top Arts & Science Colleges.
 */

const collegesData = [
  // ==========================================
  // PREMIER ANNA UNIVERSITY DEPARTMENTS
  // ==========================================
  {
    id: 'ceg-anna-univ',
    code: '0001',
    name: 'College of Engineering, Guindy (CEG), Anna University',
    shortName: 'CEG Anna University',
    category: 'Engineering & Technology',
    type: 'Government / University Department',
    district: 'Chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    established: 1794,
    nirfRank: 'Top 15 in India (Engineering)',
    naacGrade: 'A++ Grade',
    affiliation: 'Anna University (Campus College)',
    campusArea: '223 Acres',
    topCourses: [
      'B.E. Computer Science and Engineering (CSE)',
      'B.Tech Artificial Intelligence and Data Science (AI & DS)',
      'B.Tech Information Technology (IT)',
      'B.E. Electronics and Communication Engineering (ECE)',
      'B.E. Electrical and Electronics Engineering (EEE)',
      'B.E. Mechanical Engineering',
      'B.E. Civil Engineering',
      'B.E. Biomedical Engineering',
      'B.E. Geoinformatics'
    ],
    tneaCutoff: '197.5 - 200.0 (OC / BC for top computing branches)',
    placementHighlights: {
      averagePackage: '9.5 LPA',
      highestPackage: '40+ LPA',
      topRecruiters: ['Microsoft', 'Google', 'Amazon', 'Cisco', 'Texas Instruments', 'Qualcomm', 'TCS Ninja/Digital']
    },
    facilities: ['Central Library', 'Higginbothams Bookstall', 'High Performance Computing Labs', 'Hostels for Boys & Girls', 'Sports Pavilion'],
    website: 'https://ceg.annauniv.edu'
  },
  {
    id: 'mit-anna-univ',
    code: '0004',
    name: 'Madras Institute of Technology (MIT), Anna University',
    shortName: 'MIT Chromepet',
    category: 'Engineering & Technology',
    type: 'Government / University Department',
    district: 'Chengalpattu / Chennai',
    city: 'Chromepet, Chennai',
    state: 'Tamil Nadu',
    established: 1949,
    nirfRank: 'Premier Institution (Alma Mater of Dr. A.P.J. Abdul Kalam)',
    naacGrade: 'A++ Grade',
    affiliation: 'Anna University (Campus College)',
    campusArea: '50 Acres',
    topCourses: [
      'B.E. Aeronautical Engineering',
      'B.E. Automobile Engineering',
      'B.E. Computer Science and Engineering',
      'B.Tech Artificial Intelligence and Data Science',
      'B.Tech Information Technology',
      'B.E. Electronics and Communication Engineering',
      'B.E. Production Technology',
      'B.Tech Rubber and Plastics Technology'
    ],
    tneaCutoff: '194.0 - 199.0 (OC / BC)',
    placementHighlights: {
      averagePackage: '8.8 LPA',
      highestPackage: '36 LPA',
      topRecruiters: ['Airbus', 'Boeing', 'HAL', 'Qualcomm', 'Amazon', 'Hyundai', 'Bosch', 'Zoho']
    },
    facilities: ['Aerodynamics Hangar', 'Flight Simulator Lab', 'Automotive Testing Workshop', 'Central Computing Centre', 'Hostels'],
    website: 'https://mitindia.edu'
  },
  {
    id: 'actech-anna-univ',
    code: '0002',
    name: 'Alagappa Chettiar College of Technology (AC Tech)',
    shortName: 'AC Tech Anna University',
    category: 'Chemical & Applied Sciences',
    type: 'Government / University Department',
    district: 'Chennai',
    city: 'Guindy, Chennai',
    state: 'Tamil Nadu',
    established: 1944,
    nirfRank: 'Top Specialized Chemical Tech Institute',
    naacGrade: 'A++ Grade',
    affiliation: 'Anna University (Campus College)',
    campusArea: 'Co-located with CEG',
    topCourses: [
      'B.Tech Chemical Engineering',
      'B.Tech Biotechnology',
      'B.Tech Petroleum Engineering',
      'B.Tech Ceramic Technology',
      'B.Tech Food Technology',
      'B.Tech Textile Technology',
      'B.Tech Leather Technology'
    ],
    tneaCutoff: '185.0 - 196.0',
    placementHighlights: {
      averagePackage: '7.2 LPA',
      highestPackage: '22 LPA',
      topRecruiters: ['Reliance Industries', 'Biocon', 'ITC', 'Asian Paints', 'Schlumberger', 'Hindustan Unilever']
    },
    facilities: ['Advanced Chemical Pilot Plants', 'Biotechnology Cleanrooms', 'Leather Processing Labs', 'Central Analytical Facility'],
    website: 'https://act.annauniv.edu'
  },

  // ==========================================
  // TOP AUTONOMOUS / GOVT-AIDED ENGINEERING COLLEGES
  // ==========================================
  {
    id: 'psg-tech',
    code: '2006',
    name: 'PSG College of Technology',
    shortName: 'PSG Tech Coimbatore',
    category: 'Engineering & Technology',
    type: 'Government-Aided & Autonomous',
    district: 'Coimbatore',
    city: 'Peelamedu, Coimbatore',
    state: 'Tamil Nadu',
    established: 1951,
    nirfRank: 'Rank 63 in India (Engineering)',
    naacGrade: 'A+ Grade',
    affiliation: 'Anna University (Autonomous)',
    campusArea: '45 Acres in City + Neelambur Campus',
    topCourses: [
      'B.E. Computer Science and Engineering',
      'B.Tech Information Technology',
      'B.Tech Artificial Intelligence and Data Science',
      'B.E. Electronics and Communication Engineering',
      'B.E. Mechanical Engineering (Sandwich & Regular)',
      'B.E. Electrical and Electronics Engineering',
      'B.E. Robotics and Automation',
      'B.E. Production Engineering',
      'B.E. Biomedical Engineering',
      'B.Tech Fashion Technology'
    ],
    tneaCutoff: '194.5 - 199.5 (OC / BC)',
    placementHighlights: {
      averagePackage: '8.5 LPA',
      highestPackage: '42 LPA',
      topRecruiters: ['Microsoft', 'Google', 'Qualcomm', 'Amazon', 'Cisco', 'DE Shaw', 'Goldman Sachs', 'L&T', 'TCS']
    },
    facilities: ['PSG Industrial Institute (On-campus Manufacturing)', 'Nano Technology Centre', 'TIFAC CORE', 'Smart Classrooms', 'Residential Hostels'],
    website: 'https://www.psgtech.edu'
  },
  {
    id: 'cit-coimbatore',
    code: '2007',
    name: 'Coimbatore Institute of Technology (CIT)',
    shortName: 'CIT Coimbatore',
    category: 'Engineering & Technology',
    type: 'Government-Aided & Autonomous',
    district: 'Coimbatore',
    city: 'Civil Aerodrome Post, Coimbatore',
    state: 'Tamil Nadu',
    established: 1956,
    nirfRank: 'Rank 101-150 Band',
    naacGrade: 'A+ Grade',
    affiliation: 'Anna University (Autonomous)',
    campusArea: '25 Acres',
    topCourses: [
      'B.E. Computer Science and Engineering',
      'B.Tech Artificial Intelligence and Data Science',
      'B.Tech Information Technology',
      'B.E. Electronics and Communication Engineering',
      'B.E. Electrical and Electronics Engineering',
      'B.E. Mechanical Engineering',
      'B.E. Civil Engineering',
      'B.Tech Chemical Engineering'
    ],
    tneaCutoff: '190.0 - 197.5',
    placementHighlights: {
      averagePackage: '7.8 LPA',
      highestPackage: '33 LPA',
      topRecruiters: ['Texas Instruments', 'Bosch', 'DE Shaw', 'Zoho', 'Thoughtworks', 'Accenture', 'TCS']
    },
    facilities: ['TLC Teaching Learning Centre', 'IoT & Embedded Systems Lab', 'Robotics Hub', 'Library with Digital Repository', 'Hostels'],
    website: 'https://www.cit.edu.in'
  },
  {
    id: 'gct-coimbatore',
    code: '2005',
    name: 'Government College of Technology (GCT)',
    shortName: 'GCT Coimbatore',
    category: 'Engineering & Technology',
    type: 'Government & Autonomous',
    district: 'Coimbatore',
    city: 'Thadagam Road, Coimbatore',
    state: 'Tamil Nadu',
    established: 1945,
    nirfRank: 'Top State Government Engineering College',
    naacGrade: 'A Grade',
    affiliation: 'Anna University (Autonomous)',
    campusArea: '108 Acres',
    topCourses: [
      'B.E. Computer Science and Engineering',
      'B.Tech Information Technology',
      'B.E. Electronics and Communication Engineering',
      'B.E. Electrical and Electronics Engineering',
      'B.E. Electronics and Instrumentation (EIE)',
      'B.E. Mechanical Engineering',
      'B.E. Civil Engineering',
      'B.E. Production Engineering',
      'B.Tech Industrial Biotechnology'
    ],
    tneaCutoff: '188.0 - 196.5',
    placementHighlights: {
      averagePackage: '6.8 LPA',
      highestPackage: '20 LPA',
      topRecruiters: ['Zoho', 'Schneider Electric', 'L&T Infotech', 'TCS', 'Wipro', 'CTS', 'Titan', 'Hyundai']
    },
    facilities: ['Large Sprawling Campus', 'Government Research Grants', 'Historic Academic Blocks', 'Affordable Govt Fee Structure (~10k/yr)'],
    website: 'https://gct.ac.in'
  },
  {
    id: 'tce-madurai',
    code: '5008',
    name: 'Thiagarajar College of Engineering (TCE)',
    shortName: 'TCE Madurai',
    category: 'Engineering & Technology',
    type: 'Government-Aided & Autonomous',
    district: 'Madurai',
    city: 'Thiruparankundram, Madurai',
    state: 'Tamil Nadu',
    established: 1957,
    nirfRank: 'Rank 85 in India',
    naacGrade: 'A+ Grade',
    affiliation: 'Anna University (Autonomous)',
    campusArea: '143 Acres',
    topCourses: [
      'B.E. Computer Science and Engineering',
      'B.Tech Data Science',
      'B.Tech Information Technology',
      'B.E. Electronics and Communication Engineering',
      'B.E. Electrical and Electronics Engineering',
      'B.E. Mechanical Engineering',
      'B.E. Mechatronics Engineering',
      'B.Arch (Architecture)'
    ],
    tneaCutoff: '190.5 - 198.0',
    placementHighlights: {
      averagePackage: '7.5 LPA',
      highestPackage: '32 LPA',
      topRecruiters: ['Qualcomm', 'Amazon', 'Cisco', 'TVS Motors', 'Zoho', 'Bosch', 'Cognizant']
    },
    facilities: ['TCE Innovation & Incubation Centre', 'Open Air Theatre', 'Robotics and Automation Labs', 'Separate Hostels'],
    website: 'https://www.tce.edu'
  },
  {
    id: 'ssn-chennai',
    code: '1315',
    name: 'Sri Sivasubramaniya Nadar College of Engineering (SSN)',
    shortName: 'SSN College of Engineering',
    category: 'Engineering & Technology',
    type: 'Self-Financing & Autonomous',
    district: 'Chengalpattu / Chennai',
    city: 'Kalavakkam, OMR, Chennai',
    state: 'Tamil Nadu',
    established: 1996,
    nirfRank: 'Rank 45 in India (Engineering)',
    naacGrade: 'A++ Grade',
    affiliation: 'Anna University (Autonomous) / Shiv Nadar Foundation',
    campusArea: '250 Acres Wi-Fi Enabled Campus',
    topCourses: [
      'B.E. Computer Science and Engineering',
      'B.Tech Information Technology',
      'B.E. Electronics and Communication Engineering',
      'B.E. Electrical and Electronics Engineering',
      'B.E. Biomedical Engineering',
      'B.E. Mechanical Engineering',
      'B.E. Civil Engineering',
      'B.Tech Chemical Engineering'
    ],
    tneaCutoff: '193.0 - 198.5',
    placementHighlights: {
      averagePackage: '8.6 LPA',
      highestPackage: '1.17 Crore (International) / 45 LPA (Domestic)',
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'PayPal', 'Goldman Sachs', 'Adobe', 'Motorq', 'Zoho']
    },
    facilities: ['World-class Cricket & Football Grounds', 'SSN Research Centre (Over Rs. 100 Cr funding)', 'Air-conditioned Classrooms', 'Luxury Hostels'],
    website: 'https://www.ssn.edu.in'
  },
  {
    id: 'kct-coimbatore',
    code: '2712',
    name: 'Kumaraguru College of Technology (KCT)',
    shortName: 'KCT Coimbatore',
    category: 'Engineering & Technology',
    type: 'Self-Financing & Autonomous',
    district: 'Coimbatore',
    city: 'Chinnavedampatti, Saravanampatti, Coimbatore',
    state: 'Tamil Nadu',
    established: 1984,
    nirfRank: 'Rank 80-100 Band',
    naacGrade: 'A++ Grade',
    affiliation: 'Anna University (Autonomous) / Sakthi Group',
    campusArea: '150 Acres',
    topCourses: [
      'B.E. Computer Science and Engineering',
      'B.Tech Artificial Intelligence and Data Science',
      'B.Tech Information Technology',
      'B.E. Electronics and Communication Engineering',
      'B.E. Mechatronics Engineering',
      'B.E. Aeronautical Engineering',
      'B.E. Automobile Engineering',
      'B.Tech Biotechnology',
      'B.Tech Textile Technology'
    ],
    tneaCutoff: '185.0 - 194.0',
    placementHighlights: {
      averagePackage: '6.5 LPA',
      highestPackage: '30 LPA',
      topRecruiters: ['Amazon', 'Robert Bosch', 'Zoho', 'Thoughtworks', 'Ford', 'L&T', 'Infosys']
    },
    facilities: ['Forge Accelerator / KCT Garage', 'Kore Student Activity Center', 'Arutchelvar Central Library', 'Modern Hostels'],
    website: 'https://www.kct.ac.in'
  },
  {
    id: 'skcet-coimbatore',
    code: '2718',
    name: 'Sri Krishna College of Engineering and Technology (SKCET)',
    shortName: 'SKCET Coimbatore',
    category: 'Engineering & Technology',
    type: 'Self-Financing & Autonomous',
    district: 'Coimbatore',
    city: 'Kuniamuthur, Coimbatore',
    state: 'Tamil Nadu',
    established: 1998,
    nirfRank: 'Rank 77 in India (Engineering)',
    naacGrade: 'A Grade',
    affiliation: 'Anna University (Autonomous)',
    campusArea: '55 Acres',
    topCourses: [
      'B.E. Computer Science and Engineering',
      'B.Tech Artificial Intelligence and Data Science',
      'B.Tech Computer Science and Business Systems (TCS CSBS)',
      'B.Tech Information Technology',
      'B.E. Electronics and Communication Engineering',
      'B.E. Mechanical Engineering',
      'B.E. Mechatronics'
    ],
    tneaCutoff: '184.0 - 193.5',
    placementHighlights: {
      averagePackage: '6.8 LPA',
      highestPackage: '44 LPA',
      topRecruiters: ['Amazon', 'Virtusa', 'Accenture', 'Cognizant', 'Zoho', 'Juspay', 'Capgemini']
    },
    facilities: ['Smart Classrooms with Smart Board Tech', 'Centrally Air-conditioned Convention Centre', 'Hostels', 'Sports Arena'],
    website: 'https://www.skcet.ac.in'
  },
  {
    id: 'kongu-engg',
    code: '2711',
    name: 'Kongu Engineering College (KEC)',
    shortName: 'KEC Erode',
    category: 'Engineering & Technology',
    type: 'Self-Financing & Autonomous',
    district: 'Erode',
    city: 'Perundurai, Erode',
    state: 'Tamil Nadu',
    established: 1984,
    nirfRank: 'Rank 100-150 Band',
    naacGrade: 'A++ Grade',
    affiliation: 'Anna University (Autonomous) / KVITT',
    campusArea: '167 Acres',
    topCourses: [
      'B.E. Computer Science and Engineering',
      'B.Tech Artificial Intelligence and Machine Learning',
      'B.Tech Information Technology',
      'B.E. Electronics and Communication Engineering',
      'B.E. Electrical and Electronics Engineering',
      'B.E. Mechanical Engineering',
      'B.E. Mechatronics',
      'B.Tech Chemical Engineering',
      'B.Tech Food Technology'
    ],
    tneaCutoff: '180.0 - 191.0',
    placementHighlights: {
      averagePackage: '5.8 LPA',
      highestPackage: '25 LPA',
      topRecruiters: ['Zoho', 'TCS', 'Cognizant', 'Soliton', 'Hyundai Mobis', 'Wipro']
    },
    facilities: ['Technology Business Incubator (TBI) funded by DST', 'Convention Centre', 'Indoor Stadium', 'Hostels for 4000+ students'],
    website: 'https://www.kongu.ac.in'
  },
  {
    id: 'bannari-amman',
    code: '2702',
    name: 'Bannari Amman Institute of Technology (BIT)',
    shortName: 'BIT Sathyamangalam',
    category: 'Engineering & Technology',
    type: 'Self-Financing & Autonomous',
    district: 'Erode',
    city: 'Alathukombai, Sathyamangalam',
    state: 'Tamil Nadu',
    established: 1996,
    nirfRank: 'Rank 80-120 Band',
    naacGrade: 'A+ Grade',
    affiliation: 'Anna University (Autonomous)',
    campusArea: '181 Acres',
    topCourses: [
      'B.E. Computer Science and Engineering',
      'B.Tech Artificial Intelligence and Data Science',
      'B.Tech Information Technology',
      'B.E. Electronics and Communication Engineering',
      'B.E. Biomedical Engineering',
      'B.E. Agricultural Engineering',
      'B.Tech Biotechnology',
      'B.Tech Fashion Technology'
    ],
    tneaCutoff: '178.0 - 189.0',
    placementHighlights: {
      averagePackage: '5.6 LPA',
      highestPackage: '28 LPA',
      topRecruiters: ['TCS', 'Wipro', 'Soliton', 'HCL', 'Robert Bosch', 'Zoho']
    },
    facilities: ['Special Lab Culture (30+ specialized labs)', 'Hostel Facility with South/North Indian food', 'Green Clean Campus'],
    website: 'https://www.bitsathy.ac.in'
  },
  {
    id: 'rec-chennai',
    code: '1211',
    name: 'Rajalakshmi Engineering College (REC)',
    shortName: 'REC Chennai',
    category: 'Engineering & Technology',
    type: 'Self-Financing & Autonomous',
    district: 'Kanchipuram / Chennai',
    city: 'Thandalam, Chennai',
    state: 'Tamil Nadu',
    established: 1997,
    nirfRank: 'Rank 86 in India (Engineering)',
    naacGrade: 'A++ Grade',
    affiliation: 'Anna University (Autonomous)',
    campusArea: '40 Acres',
    topCourses: [
      'B.E. Computer Science and Engineering',
      'B.Tech Artificial Intelligence & Machine Learning',
      'B.Tech Computer Science and Business Systems',
      'B.Tech Information Technology',
      'B.E. Electronics and Communication Engineering',
      'B.E. Aeronautical Engineering',
      'B.E. Biomedical Engineering',
      'B.Tech Biotechnology'
    ],
    tneaCutoff: '182.0 - 192.5',
    placementHighlights: {
      averagePackage: '6.2 LPA',
      highestPackage: '31 LPA',
      topRecruiters: ['Amazon', 'Zoho', 'Virtusa', 'TCS', 'Cognizant', 'Wipro', 'Renault Nissan']
    },
    facilities: ['Centre of Excellence in AI & Cloud', 'Transportation across Chennai', 'Central Library', 'Hostels'],
    website: 'https://www.rajalakshmi.org'
  },
  {
    id: 'svce-chennai',
    code: '1219',
    name: 'Sri Venkateswara College of Engineering (SVCE)',
    shortName: 'SVCE Sriperumbudur',
    category: 'Engineering & Technology',
    type: 'Self-Financing & Autonomous',
    district: 'Kanchipuram / Chennai',
    city: 'Pennalur, Sriperumbudur',
    state: 'Tamil Nadu',
    established: 1985,
    nirfRank: 'Rank 150-200 Band',
    naacGrade: 'A+ Grade',
    affiliation: 'Anna University (Autonomous)',
    campusArea: '95 Acres',
    topCourses: [
      'B.E. Computer Science and Engineering',
      'B.Tech Information Technology',
      'B.Tech Artificial Intelligence and Data Science',
      'B.E. Electronics and Communication Engineering',
      'B.E. Mechanical Engineering',
      'B.Tech Chemical Engineering',
      'B.Tech Marine Engineering',
      'B.Tech Biotechnology'
    ],
    tneaCutoff: '183.0 - 193.0',
    placementHighlights: {
      averagePackage: '6.5 LPA',
      highestPackage: '25 LPA',
      topRecruiters: ['Cognizant', 'Infosys', 'TCS', 'Renault Nissan', 'Zoho', 'Hyundai', 'Caterpillar']
    },
    facilities: ['Marine Engine Workshop', 'Research Centers in Engineering', 'Student Bus Service across entire Chennai'],
    website: 'https://www.svce.ac.in'
  },
  {
    id: 'cit-chennai',
    code: '1149',
    name: 'Chennai Institute of Technology (CIT Chennai)',
    shortName: 'CIT Chennai',
    category: 'Engineering & Technology',
    type: 'Self-Financing & Autonomous',
    district: 'Chengalpattu / Chennai',
    city: 'Kundrathur, Chennai',
    state: 'Tamil Nadu',
    established: 2010,
    nirfRank: 'Rank 100-150 Band',
    naacGrade: 'A++ Grade',
    affiliation: 'Anna University (Autonomous)',
    campusArea: '30 Acres',
    topCourses: [
      'B.E. Computer Science and Engineering',
      'B.Tech Artificial Intelligence & Data Science',
      'B.Tech Computer Science and Business Systems',
      'B.E. Electronics and Communication Engineering',
      'B.E. Mechatronics',
      'B.E. Mechanical Engineering'
    ],
    tneaCutoff: '185.0 - 194.0',
    placementHighlights: {
      averagePackage: '7.2 LPA',
      highestPackage: '40 LPA',
      topRecruiters: ['Amazon', 'CISCO', 'TCS Digital', 'Zoho', 'Pegasystems', 'Kaar Technologies']
    },
    facilities: ['Centres of Excellence partnered with KUKA Robotics, Dassault, Harita Techserv', 'Modern Labs', 'Hostels'],
    website: 'https://www.citchennai.edu.in'
  },

  // ==========================================
  // INSTITUTES OF NATIONAL IMPORTANCE
  // ==========================================
  {
    id: 'iit-madras',
    code: 'IITM',
    name: 'Indian Institute of Technology Madras (IIT Madras)',
    shortName: 'IIT Madras',
    category: 'Institutes of National Importance',
    type: 'Central Government (Autonomous)',
    district: 'Chennai',
    city: 'Adyar, Chennai',
    state: 'Tamil Nadu',
    established: 1959,
    nirfRank: '#1 Overall & Engineering in India (Consecutively)',
    naacGrade: 'Institute of Eminence (IoE)',
    affiliation: 'Ministry of Education, Govt. of India',
    campusArea: '630 Acres (Adjoining Guindy National Park)',
    topCourses: [
      'B.Tech Computer Science and Engineering',
      'B.Tech Electrical Engineering',
      'B.Tech Data Science & Artificial Intelligence',
      'B.Tech Mechanical Engineering',
      'B.Tech Aerospace Engineering',
      'B.Tech Chemical Engineering',
      'B.S. Medical Sciences and Engineering',
      'Dual Degree (B.Tech + M.Tech) Programs'
    ],
    admissionProcess: 'JEE Advanced Rank',
    tneaCutoff: 'N/A (Admission via JEE Advanced only)',
    placementHighlights: {
      averagePackage: '21.4 LPA',
      highestPackage: '1.98 Crore (International) / 80+ LPA (Domestic)',
      topRecruiters: ['Google', 'Apple', 'Microsoft', 'Jane Street', 'Rubrik', 'Intel', 'Texas Instruments']
    },
    facilities: ['IIT Madras Research Park (First in India)', 'Supercomputing Facility', 'Open Air Theatre', 'Wildlife on Campus', 'Hostels'],
    website: 'https://www.iitm.ac.in'
  },
  {
    id: 'nit-trichy',
    code: 'NITT',
    name: 'National Institute of Technology Tiruchirappalli (NIT Trichy)',
    shortName: 'NIT Trichy / NITT',
    category: 'Institutes of National Importance',
    type: 'Central Government (Autonomous)',
    district: 'Tiruchirappalli',
    city: 'Thuvakudi, Tiruchirappalli',
    state: 'Tamil Nadu',
    established: 1964,
    nirfRank: '#1 Among all NITs in India (Rank 9 Overall Engineering)',
    naacGrade: 'Institute of National Importance',
    affiliation: 'Ministry of Education, Govt. of India',
    campusArea: '800 Acres',
    topCourses: [
      'B.Tech Computer Science and Engineering',
      'B.Tech Electronics and Communication Engineering',
      'B.Tech Electrical and Electronics Engineering',
      'B.Tech Mechanical Engineering',
      'B.Tech Chemical Engineering',
      'B.Tech Metallurgical and Materials Engineering',
      'B.Tech Production Engineering',
      'B.Tech Civil Engineering',
      'B.Tech Instrumentation and Control (ICE)',
      'B.Arch Architecture'
    ],
    admissionProcess: 'JEE Main (CSAB / JoSAA Counselling - 50% Home State Quota for TN students)',
    tneaCutoff: 'N/A (Admission via JEE Main percentile)',
    placementHighlights: {
      averagePackage: '15.8 LPA',
      highestPackage: '52 LPA',
      topRecruiters: ['Microsoft', 'Uber', 'Amazon', 'Morgan Stanley', 'Samsung', 'L&T', 'ISRO']
    },
    facilities: ['Octagon Computer Center', 'Central Library with 1.5 Lakh Books', 'Olympic-size Swimming Pool', 'Mega Mess & Hostels'],
    website: 'https://www.nitt.edu'
  },

  // ==========================================
  // PROMINENT DEEMED UNIVERSITIES
  // ==========================================
  {
    id: 'vit-vellore',
    code: 'VIT',
    name: 'Vellore Institute of Technology (VIT)',
    shortName: 'VIT Vellore',
    category: 'Deemed University',
    type: 'Deemed to be University (Institute of Eminence)',
    district: 'Vellore',
    city: 'Katpadi, Vellore',
    state: 'Tamil Nadu',
    established: 1984,
    nirfRank: 'Rank 11 in India (Engineering)',
    naacGrade: 'A++ Grade',
    affiliation: 'UGC Deemed University',
    campusArea: '372 Acres (Vellore) + 192 Acres (Chennai)',
    topCourses: [
      'B.Tech Computer Science and Engineering (with various Specializations)',
      'B.Tech Information Technology',
      'B.Tech Electronics and Communication Engineering',
      'B.Tech Mechanical Engineering',
      'B.Tech Electrical and Electronics Engineering',
      'B.Tech Biotechnology'
    ],
    admissionProcess: 'VITEEE Entrance Exam',
    tneaCutoff: 'N/A (Admission via VITEEE Exam Ranking)',
    placementHighlights: {
      averagePackage: '9.2 LPA',
      highestPackage: '1.02 Crore (International) / 59 LPA (Domestic)',
      topRecruiters: ['Microsoft', 'Amazon', 'PayPal', 'Qualcomm', 'Motorq', 'TCS Super Dream', 'Wipro']
    },
    facilities: ['Fully Flexible Credit System (FFCS)', 'International Exchange with 300+ Universities', 'Modern High-Rise Hostels', 'Sports Complexes'],
    website: 'https://vit.ac.in'
  },
  {
    id: 'amrita-coimbatore',
    code: 'AMRITA',
    name: 'Amrita Vishwa Vidyapeetham',
    shortName: 'Amrita University Coimbatore',
    category: 'Deemed University',
    type: 'Deemed to be University (Institute of Eminence)',
    district: 'Coimbatore',
    city: 'Ettimadai, Coimbatore',
    state: 'Tamil Nadu',
    established: 1994,
    nirfRank: 'Rank 7 in India (University Category)',
    naacGrade: 'A++ Grade (CGPA 3.83/4)',
    affiliation: 'UGC Deemed University',
    campusArea: '400 Acres at foothills of Western Ghats',
    topCourses: [
      'B.Tech Computer Science and Engineering',
      'B.Tech Artificial Intelligence and Data Science',
      'B.Tech Cyber Security',
      'B.Tech Automation and Robotics',
      'B.Tech Electronics and Communication Engineering',
      'B.Tech Mechanical Engineering'
    ],
    admissionProcess: 'AEEE Entrance Exam or JEE Main',
    tneaCutoff: 'N/A (Admission via AEEE / JEE Main)',
    placementHighlights: {
      averagePackage: '8.9 LPA',
      highestPackage: '56 LPA',
      topRecruiters: ['Microsoft', 'Cisco', 'Amazon', 'Intel', 'Bosch', 'McKinsey', 'Tata Elxsi']
    },
    facilities: ['Amrita Center for Cyber Security', 'Olympic Swimming Pool', 'Spiritual and Value-based Education', 'Eco-friendly Green Campus'],
    website: 'https://www.amrita.edu'
  },
  {
    id: 'srm-ist-chennai',
    code: 'SRM',
    name: 'SRM Institute of Science and Technology',
    shortName: 'SRM Kattankulathur',
    category: 'Deemed University',
    type: 'Deemed to be University',
    district: 'Chengalpattu / Chennai',
    city: 'Kattankulathur, Chennai',
    state: 'Tamil Nadu',
    established: 1985,
    nirfRank: 'Rank 18 in India (Engineering)',
    naacGrade: 'A++ Grade',
    affiliation: 'UGC Deemed University',
    campusArea: '250 Acres',
    topCourses: [
      'B.Tech Computer Science and Engineering (AI, Cloud, IoT, Big Data)',
      'B.Tech Information Technology',
      'B.Tech Electronics and Communication Engineering',
      'B.Tech Aerospace Engineering',
      'B.Tech Biotechnology',
      'B.Tech Mechanical Engineering'
    ],
    admissionProcess: 'SRMJEEE Entrance Exam',
    tneaCutoff: 'N/A (Admission via SRMJEEE Ranking)',
    placementHighlights: {
      averagePackage: '7.7 LPA',
      highestPackage: '50+ LPA',
      topRecruiters: ['Amazon', 'Optum', 'Google', 'TCS', 'Cognizant', 'Wipro', 'Infosys']
    },
    facilities: ['Tech Park', 'SRM Medical College & Hospital on campus', 'Indoor AC Auditoriums', 'Hostels for 15,000+ students'],
    website: 'https://www.srmist.edu.in'
  },
  {
    id: 'sastra-thanjavur',
    code: 'SASTRA',
    name: 'SASTRA Deemed University',
    shortName: 'SASTRA Thanjavur',
    category: 'Deemed University',
    type: 'Deemed to be University',
    district: 'Thanjavur',
    city: 'Thirumalaisamudram, Thanjavur',
    state: 'Tamil Nadu',
    established: 1984,
    nirfRank: 'Rank 26 in India (University Category)',
    naacGrade: 'A++ Grade (Category-1 University)',
    affiliation: 'UGC Deemed University',
    campusArea: '232 Acres',
    topCourses: [
      'B.Tech Computer Science and Engineering',
      'B.Tech Artificial Intelligence and Data Science',
      'B.Tech Information Technology',
      'B.Tech Electronics and Communication Engineering',
      'B.Tech Mechanical Engineering',
      'B.Tech Biotechnology',
      '5-Year Integrated Law (BA LLB / BBA LLB)'
    ],
    admissionProcess: '70% Seats via JEE Main + 12th Marks (Stream 1) & 30% via 12th Marks (Stream 2)',
    tneaCutoff: 'N/A (Direct SASTRA Admissions - Very Transparent Merit Ranking)',
    placementHighlights: {
      averagePackage: '7.5 LPA',
      highestPackage: '34 LPA',
      topRecruiters: ['Amazon', 'Cisco', 'PayPal', 'TCS Ninja/Digital', 'Cognizant', 'Morgan Stanley']
    },
    facilities: ['TIFAC CORE', 'Srinivasa Ramanujan Center', 'Central Library with 1.4 Lakh Volumes', 'Affordable Fee Structure'],
    website: 'https://www.sastra.edu'
  },

  // ==========================================
  // TOP ARTS, SCIENCE & COMMERCE COLLEGES
  // ==========================================
  {
    id: 'loyola-chennai',
    code: 'LOYOLA',
    name: 'Loyola College (Autonomous)',
    shortName: 'Loyola College Chennai',
    category: 'Arts, Science & Commerce',
    type: 'Government-Aided & Autonomous',
    district: 'Chennai',
    city: 'Nungambakkam, Chennai',
    state: 'Tamil Nadu',
    established: 1925,
    nirfRank: 'Rank 7 in India (Colleges Category)',
    naacGrade: 'A++ Grade (3.72/4)',
    affiliation: 'University of Madras (Autonomous)',
    campusArea: '99 Acres in heart of Chennai',
    topCourses: [
      'B.Com (General, Accounting & Finance, Corporate Secretaryship)',
      'B.Sc Computer Science',
      'BCA (Bachelor of Computer Applications)',
      'B.Sc Mathematics',
      'B.Sc Statistics',
      'B.Sc Physics',
      'B.Sc Chemistry',
      'B.A. Economics',
      'B.A. English Literature',
      'B.Voc 3D Animation'
    ],
    admissionProcess: 'Class 12 Marks Merit Ranking & Interview',
    placementHighlights: {
      averagePackage: '5.5 LPA',
      highestPackage: '18 LPA',
      topRecruiters: ['Deloitte', 'EY', 'KPMG', 'PwC', 'Goldman Sachs', 'McKinsey', 'Wipro', 'TCS']
    },
    facilities: ['Heritage Gothic Architecture', 'Entomology Research Institute', 'Loyola Men & Women Hostels', 'Large Sports Grounds'],
    website: 'https://www.loyolacollege.edu'
  },
  {
    id: 'mcc-chennai',
    code: 'MCC',
    name: 'Madras Christian College (MCC)',
    shortName: 'MCC Tambaram',
    category: 'Arts, Science & Commerce',
    type: 'Government-Aided & Autonomous',
    district: 'Chengalpattu / Chennai',
    city: 'Tambaram East, Chennai',
    state: 'Tamil Nadu',
    established: 1837,
    nirfRank: 'Rank 16 in India (Colleges Category)',
    naacGrade: 'A+ Grade',
    affiliation: 'University of Madras (Autonomous)',
    campusArea: '320 Acres Scrub Jungle Campus',
    topCourses: [
      'B.Com (General, Accounting & Finance)',
      'B.Sc Computer Science',
      'BCA',
      'B.Sc Statistics',
      'B.Sc Mathematics',
      'B.Sc Chemistry',
      'B.A. History',
      'B.A. Political Science',
      'B.A. Economics',
      'Bachelor of Social Work (BSW)'
    ],
    admissionProcess: 'Class 12 Marks Merit',
    placementHighlights: {
      averagePackage: '5.2 LPA',
      highestPackage: '15 LPA',
      topRecruiters: ['Deloitte', 'Cognizant', 'Amazon', 'EY', 'Wipro', 'NatWest Group']
    },
    facilities: ['Sprawling Natural Biosphere Campus', 'Miller Memorial Library', 'Heritage Residential Halls', 'Botanical Garden'],
    website: 'https://mcc.edu.in'
  },
  {
    id: 'psg-cas-coimbatore',
    code: 'PSGCAS',
    name: 'PSG College of Arts and Science (PSGCAS)',
    shortName: 'PSG Arts & Science Coimbatore',
    category: 'Arts, Science & Commerce',
    type: 'Government-Aided & Autonomous',
    district: 'Coimbatore',
    city: 'Civil Aerodrome Post, Peelamedu, Coimbatore',
    state: 'Tamil Nadu',
    established: 1947,
    nirfRank: 'Rank 20 in India (Colleges Category)',
    naacGrade: 'A++ Grade (3.78/4)',
    affiliation: 'Bharathiar University (Autonomous)',
    campusArea: '40 Acres',
    topCourses: [
      'B.Com (General, Professional Accounting, Business Analytics, Banking)',
      'B.Sc Computer Science',
      'B.Sc Information Technology',
      'BCA',
      'B.Sc Mathematics',
      'B.Sc Electronics',
      'B.Sc Biotechnology',
      'B.Sc Food Processing & Quality Control',
      'B.Sc Costume Design and Fashion'
    ],
    admissionProcess: 'Class 12 Marks Merit',
    placementHighlights: {
      averagePackage: '4.8 LPA',
      highestPackage: '14 LPA',
      topRecruiters: ['Goldman Sachs', 'Deloitte', 'TCS', 'Cognizant', 'Infosys', 'Grant Thornton', 'Amazon']
    },
    facilities: ['GRD Memorial Auditorium', 'Advanced Computing Labs', 'Central Library with Digital Hub', 'Hostels'],
    website: 'https://www.psgcas.ac.in'
  },
  {
    id: 'presidency-chennai',
    code: 'PRESIDENCY',
    name: 'Presidency College (Autonomous), Chennai',
    shortName: 'Presidency College Chennai',
    category: 'Arts, Science & Commerce',
    type: 'Government & Autonomous',
    district: 'Chennai',
    city: 'Kamarajar Salai, Marina Beach, Chennai',
    state: 'Tamil Nadu',
    established: 1840,
    nirfRank: 'Rank 3 in India (Colleges Category)',
    naacGrade: 'A+ Grade',
    affiliation: 'University of Madras (Autonomous)',
    campusArea: 'Historic Campus opposite Marina Beach',
    topCourses: [
      'B.Sc Mathematics',
      'B.Sc Statistics',
      'B.Sc Physics',
      'B.Sc Chemistry',
      'B.Sc Botany',
      'B.Sc Zoology',
      'B.Com',
      'B.A. Economics',
      'B.A. History',
      'B.A. English'
    ],
    admissionProcess: 'Tamil Nadu Govt Arts & Science Merit (TNGASA)',
    placementHighlights: {
      averagePackage: '4.2 LPA',
      highestPackage: '10 LPA',
      topRecruiters: ['TCS', 'Cognizant', 'HCL', 'State Government Services', 'Banking Exams Hub']
    },
    facilities: ['Historic Red-brick Indo-Saracenic Heritage Architecture', 'State Central Herbarium', 'Affordable Govt Fees'],
    website: 'https://presidencycollegechennai.ac.in'
  }
];

module.exports = collegesData;

