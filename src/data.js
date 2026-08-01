/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Abel George",
  last: "Mathew",
  fullName: "Abel George Mathew",
  tagline: "Olympiad Mathematician • AI & Theoretical CS Researcher",
  location: "Bangalore, Karnataka, India",
  email: "",
  bio: [
    "I'm a Grade 11 student at Creative School, Bangalore, with a deep interest in proof-based mathematics, Olympiad problem solving, and theoretical computer science. My academic journey has been shaped by curiosity, rigorous mathematical thinking, and a passion for solving complex problems.",
    "Beyond competitions, I actively explore AI-driven mathematical reasoning, mentorship, and research initiatives that combine human creativity with computational systems. Through teaching, outreach, and collaborative projects, I aim to make advanced mathematics more accessible while continuing to push the boundaries of mathematical exploration.",
    "My goal is to explore the frontier of mathematical reasoning and contribute to systems that combine rigorous human thought with emerging artificial intelligence — applying analytical thinking and computational innovation to problems at the intersection of mathematics, technology, and intelligent systems.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "https://www.imo-official.org/results/contestant/35510/",
    twitter: "",
  },
  cv: "/CV.pdf",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Research", to: "/work" },
      { label: "Projects", to: "/projects" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Academic Distinctions", to: "/publications" },
      { label: "Skills", to: "/skills" },
    ],
  },
  { label: "Achievements", to: "/awards" },
  {
    label: "More",
    children: [
      { label: "Leadership & Teaching", to: "/volunteering" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

/* ---- Research & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "imo-2025-india",
    role: "International Representation",
    org: "International Mathematical Olympiad (IMO) 2025",
    logo: "/logos/imo.png",
    location: "Sunshine Coast, Australia",
    dates: "Jul 2025",
    meta: "Jul 2025 · Sunshine Coast, Australia ·",
    badge: "Team India",
    desc: "Represented India at the International Mathematical Olympiad, competing against the strongest Olympiad students worldwide.",
    bullets: [
      "Selected among the top 6 students nationwide to represent India",
      "Achieved Silver Medal, ranking among the top performers globally (Rank 78)",
      "Competed at the IMO held in Sunshine Coast, Australia",
    ],
    tags: ["Olympiad Mathematics", "Combinatorics", "Number Theory"],
    featured: true,
  },
  {
    slug: "mercor-frontier-math",
    role: "Research & Advanced Engagement",
    org: "IMO–Frontier Math Project (Mercor)",
    logo: "/logos/mercor.png",
    location: "Remote",
    dates: "Nov 2025 – Feb 2026",
    meta: "Nov 2025 – Feb 2026 · Remote ·",
    badge: "Contract",
    desc: "Recruited to contribute to cutting-edge research in AI-driven mathematical problem solving, working alongside top Olympiad talent globally.",
    bullets: [
      "Creating novel Olympiad-style problems to train advanced mathematical AI",
      "Advancing problem design for machine learning in high-level mathematics",
      "Bridging human mathematical creativity with artificial intelligence systems",
    ],
    tags: ["AI for Mathematics", "Problem Design", "Olympiad Mathematics"],
    featured: true,
  },
  {
    slug: "sophie-fellowship",
    role: "Organiser & Instructor",
    org: "Sophie Fellowship",
    logo: "/logos/sophie-fellowship.png",
    location: "India · Remote",
    dates: "2024 – Present",
    meta: "2024 – Present · India · Remote ·",
    badge: "Student-led",
    desc: "A student-led initiative focused on training Olympiad aspirants through structured mentorship and problem-solving sessions.",
    bullets: [
      "Mentored ~25 students annually",
      "Designed curriculum and lecture series",
      "Built a peer-driven learning ecosystem",
    ],
    tags: ["Teaching", "Mentorship", "Curriculum Design"],
    featured: true,
  },
  {
    slug: "inmotc-guest-lecturer",
    role: "Guest Lecturer",
    org: "Karnataka INMOTC 2025",
    logo: "/logos/inmo.png",
    location: "Karnataka, India",
    dates: "2025",
    meta: "2025 · Karnataka, India ·",
    badge: "Invited",
    desc: "Delivered advanced sessions to top national-level Olympiad students at the Indian National Mathematical Olympiad Training Camp.",
    bullets: [
      "Taught advanced problem-solving techniques to INMO-qualified students",
      "Covered proof strategies across combinatorics and number theory",
    ],
    tags: ["Teaching", "Olympiad Mathematics"],
    featured: false,
  },
  {
    slug: "deva-matha-college",
    role: "Guest Speaker",
    org: "Deva Matha College, Kuravilangad",
    logo: "/logos/deva-matha.png",
    location: "Kerala, India",
    dates: "2025",
    meta: "2025 · Kerala, India ·",
    badge: "Invited",
    desc: "Conducted lectures for combined batches of undergraduate and postgraduate mathematics students within the Department of Mathematics.",
    bullets: [
      "Engaged with higher-level academic audiences beyond school level",
      "Presented Olympiad approaches to university mathematics students",
    ],
    tags: ["Teaching", "Outreach"],
    featured: false,
  },
  {
    slug: "vedic-mathrix-2024",
    role: "Instructor",
    org: "Vedic Mathrix Camp 2024",
    logo: "/logos/vedic-mathrix.png",
    location: "India",
    dates: "2024",
    meta: "2024 · India ·",
    badge: "Instructor",
    desc: "Facilitated a hands-on learning session as part of an initiative by the Raising a Mathematician Foundation, focusing on interactive and conceptual mathematical exploration.",
    bullets: [
      "Led interactive sessions on conceptual mathematical exploration",
      "Contributed to a foundation-run outreach programme",
    ],
    tags: ["Teaching", "Outreach"],
    featured: false,
  },
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    name: "Rubik's Cube Group Theory Algorithm",
    org: "Personal Project",
    meta: "Grade 8",
    desc: "Applied group theory to the Rubik's Cube, building a solving algorithm on the mathematical structure underlying the puzzle's permutations.",
    tags: ["Group Theory", "Algorithms", "Mathematics"],
    featured: true,
  },
  {
    name: "Vedic Multiplication Method",
    org: "Personal Project",
    meta: "Grade 7",
    desc: "Studied and implemented Vedic multiplication techniques, comparing their efficiency against conventional long multiplication.",
    tags: ["Mathematics", "Number Theory", "Algorithms"],
    featured: true,
  },
  {
    name: "Habit Fitness Website",
    org: "Personal Project",
    meta: "Grade 7",
    desc: "Built a habit and fitness tracking website using Django, covering both the backend models and the user-facing interface.",
    tags: ["Django", "Python", "Full-Stack Development"],
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🥇",
    title: "International Mathematical Olympiad (IMO) 2026",
    meta: "2026",
    detail: "Gold Medal, placing among the top 2 from India.",
    link: "https://www.imo-official.org/results/contestant/35510/",
    featured: true,
  },
  {
    icon: "🥈",
    title: "International Mathematical Olympiad (IMO) 2025",
    meta: "2025",
    detail: "Silver Medal, Global Rank 78, competing at Sunshine Coast, Australia.",
    link: "https://www.imo-official.org/results/contestant/35510/",
    featured: true,
  },
  {
    icon: "🏅",
    title: "Indian National Mathematical Olympiad (INMO)",
    meta: "2022 – 2025",
    detail: "All India Rank 1 in 2025; perfect score and top 4 nationwide in 2024; 4-time INMO awardee.",
    link: "",
    featured: true,
  },
  {
    icon: "🥉",
    title: "Asian Pacific Mathematical Olympiad (APMO) 2025",
    meta: "2025",
    detail: "Bronze Medalist, ranking in the top 5 in India.",
    link: "",
    featured: true,
  },
  {
    icon: "💻",
    title: "Indian National Olympiad in Informatics (INOI) 2024",
    meta: "2024",
    detail: "Bronze Medalist.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "SAT — 1540/1600",
    meta: "",
    detail: "Perfect 800 in Mathematics; 740 in Reading & Writing.",
    link: "",
    featured: true,
  },
  {
    icon: "🔤",
    title: "World Youth Scrabble Championship",
    meta: "Malaysia, 2025",
    detail: "Represented India. WESPA rating 1613.",
    link: "",
    featured: false,
  },
];

/* ---- Academic distinctions (renders on the Publications route) ---- */

export const PUBLICATIONS = [
  {
    title: "Cambridge Outstanding Learner Award",
    venue: "Cambridge Assessment International Education",
    status: "AWARDED",
    date: "IGCSE",
    authors: "",
    abstract:
      "Awarded for exceptional performance in IGCSE Combined Sciences, recognizing top-tier academic excellence across the examination cycle.",
    link: "",
    featured: true,
  },
  {
    title: "4-time INMO Awardee",
    venue: "Indian National Mathematical Olympiad",
    status: "AWARDED",
    date: "Since Class 8",
    authors: "",
    abstract:
      "Recognized four times at the Indian National Mathematical Olympiad level, including a perfect score in INMO 2024, reflecting sustained national-level excellence since Class 8.",
    link: "",
    featured: true,
  },
  {
    title: "AS & A Level Rigor",
    venue: "Cambridge International",
    status: "IN PROGRESS",
    date: "Ongoing",
    authors: "",
    abstract:
      "Advanced study across Mathematics, Further Mathematics, and Computer Science, developing strong foundations in abstraction, proof, and theoretical thinking.",
    link: "",
    featured: false,
  },
];

/* ---- Research interests (renders as the "Articles" list) ---- */

export const ARTICLES = [
  {
    title: "Olympiad Mathematics",
    outlet: "Advanced problem solving, proof strategies, combinatorics, inequalities, and number theory",
    date: "Research interest",
    link: "",
  },
  {
    title: "Artificial Intelligence for Mathematics",
    outlet: "Symbolic reasoning systems, theorem exploration, and AI-assisted mathematical discovery",
    date: "Research interest",
    link: "",
  },
  {
    title: "Theoretical Computer Science",
    outlet: "Algorithms, complexity, abstraction, and computational structures",
    date: "Research interest",
    link: "",
  },
  {
    title: "Mathematical Logic & Formal Systems",
    outlet: "Formal reasoning pathways, proof systems, and foundational mathematical structures",
    date: "Research interest",
    link: "",
  },
];

/* ---- Leadership, teaching & activities ---- */

export const VOLUNTEER = {
  stats: [
    { value: "25+", label: "Students Mentored Yearly" },
    { value: "3+", label: "Guest Lectures" },
    { value: "2+", label: "Years Teaching" },
  ],
  orgs: [
    {
      name: "Sophie Fellowship",
      role: "Organiser & Instructor · Since 2024",
      desc: "A student-led initiative training Olympiad aspirants through structured mentorship and problem-solving sessions. Mentored roughly 25 students a year, designed the curriculum and lecture series, and built a peer-driven learning ecosystem.",
    },
    {
      name: "Online Math Club",
      role: "Organizer & Instructor",
      desc: "Leads live problem-solving sessions for students across India, covering mathematical thinking and Olympiad preparation.",
    },
    {
      name: "Karnataka INMOTC 2025",
      role: "Guest Lecturer",
      desc: "Delivered advanced sessions to top national-level Olympiad students at the Indian National Mathematical Olympiad Training Camp.",
    },
    {
      name: "Deva Matha College, Kuravilangad",
      role: "Guest Speaker",
      desc: "Conducted lectures for combined undergraduate and postgraduate batches within the Department of Mathematics.",
    },
    {
      name: "Vedic Mathrix Camp 2024",
      role: "Instructor",
      desc: "Facilitated a hands-on session for the Raising a Mathematician Foundation, focused on interactive and conceptual mathematical exploration.",
    },
    {
      name: "Sports & Strategy",
      role: "Basketball · Chess · Badminton · Scrabble",
      desc: "Held Sports Captain and Vice Captain roles, and represented India at the World Youth Scrabble Championship in Malaysia, 2025. These build the discipline, resilience, and composure that mathematics alone doesn't teach.",
    },
  ],
};

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "C++", "Django"],
  },
  {
    group: "Tools & Technologies",
    items: ["LaTeX", "HTML", "Git"],
  },
  {
    group: "Mathematics",
    items: ["Number Theory", "Combinatorics", "Inequalities", "Proof Strategies", "Mathematical Logic"],
  },
  {
    group: "Academic Interests",
    items: ["Pure Mathematics", "Theoretical Computer Science", "Algorithm Design & Complexity", "Formal Systems"],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Achievements", to: "/awards" },
  { label: "Academics", to: "/publications" },
  { label: "Leadership", to: "/volunteering" },
  { label: "Skills", to: "/skills" },
  { label: "About", to: "/about" },
];

export const FOOTER_PROFILES = [
  { label: "IMO Official", href: PROFILE.socials.imo },
];