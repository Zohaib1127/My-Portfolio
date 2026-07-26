import {
  Award,
  Binary,
  Braces,
  Code2,
  Database,
  FileCode2,
  Flame,
  FolderGit2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Network,
  Phone,
  Server,
  Zap
} from "lucide-react";

// Personal Info
export const personalDetails = {
  name: "M. Zohaib Butt",
  title: "Software Engineer | MERN Stack Developer",
  email: "zaibi4052@gmail.com",
  phone: "+92 317 7395554",
  location: "Gujrat, Punjab, Pakistan",
  github: "https://github.com/Zohaib1127",
  linkedin: "https://linkedin.com/in/zohaib-butt-9798b0375",
  cgpa: "2.99 / 4.00",
  education: "BS Software Engineering (2022 - 2026)",
  university: "University of Gujrat"
};

// Navigation Links
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" }
];

// Live Social Links
export const socialLinks = [
  { 
    label: "GitHub", 
    href: "https://github.com/Zohaib1127", 
    icon: Github 
  },
  { 
    label: "LinkedIn", 
    href: "https://linkedin.com/in/zohaib-butt-9798b0375", 
    icon: Linkedin 
  },
  { 
    label: "Email", 
    href: "mailto:zaibi4052@gmail.com", 
    icon: Mail 
  },
  { 
    label: "Phone", 
    href: "tel:+923177395554", 
    icon: Phone 
  }
];

// Key Portfolio Stats
export const stats = [
  { label: "Full-Stack & Systems Projects", value: "4", icon: FolderGit2 },
  { label: "Verified Certifications", value: "6", icon: Award },
  { label: "Core Technical Stack", value: "12+", icon: Braces },
  { label: "Degree CGPA (BSSE)", value: "2.99", icon: GraduationCap }
];

// Technical Skills
export const skills = [
  { name: "JavaScript (ES6+)", level: 90, icon: Braces, color: "from-yellow-300 to-amber-500" },
  { name: "React.js", level: 92, icon: Zap, color: "from-cyan-300 to-blue-500" },
  { name: "Node.js & Express.js", level: 86, icon: Server, color: "from-emerald-300 to-teal-600" },
  { name: "MongoDB & MySQL", level: 84, icon: Database, color: "from-green-300 to-emerald-600" },
  { name: "C++ (Advanced)", level: 88, icon: Binary, color: "from-blue-400 to-indigo-600" },
  { name: "Tailwind CSS & HTML5/CSS3", level: 94, icon: Flame, color: "from-cyan-300 to-violet-500" },
  { name: "Python & Java", level: 78, icon: FileCode2, color: "from-orange-400 to-amber-600" },
  { name: "REST APIs & JWT Auth", level: 88, icon: Network, color: "from-sky-300 to-indigo-500" },
  { name: "Git & GitHub", level: 88, icon: Github, color: "from-violet-300 to-fuchsia-600" },
  { name: "MATLAB & Computer Vision", level: 80, icon: Code2, color: "from-rose-400 to-red-600" }
];

// All Verified Certificates (Cisco + Adan Technology)
export const certifications = [
  {
    title: "Front End (Web Development) Workplace Training",
    organization: "Adan Technology (Pvt) Ltd",
    date: "29 Jun 2026",
    details: "Batch: Q3-2025 | Ref: 988",
    description: "Successfully completed formal workplace software training in Front End Web Development.",
    type: "Workplace Training",
    color: "from-emerald-400 to-teal-600"
  },
  {
    title: "C++ Advanced",
    organization: "Cisco Networking Academy",
    date: "30 Jul 2025",
    details: "Open Education & Development Group",
    description: "Advanced Object-Oriented Programming, memory management, templates, and generic algorithms in C++.",
    type: "Cisco Certified",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "C++ Essentials 2",
    organization: "Cisco Networking Academy",
    date: "29 Jul 2025",
    details: "Open Education & Development Group",
    description: "Core OOP paradigms, inheritance, polymorphism, stream I/O, and class hierarchies in C++.",
    type: "Cisco Certified",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "JavaScript Essentials 1",
    organization: "Cisco / Adan Institute of Technology",
    date: "28 Jul 2025",
    details: "Instructor: Atifa Sharif Sulehria",
    description: "Core JavaScript logic, control structures, functions, DOM elements, and modern ES6+ concepts.",
    type: "Cisco Certified",
    color: "from-yellow-400 to-amber-600"
  },
  {
    title: "HTML Essentials",
    organization: "Cisco / Adan Institute of Technology",
    date: "18 Jul 2025",
    details: "Instructor: Irfan Khan",
    description: "Semantic web architecture, accessible markup, forms, and modern web standards.",
    type: "Cisco Certified",
    color: "from-orange-400 to-rose-500"
  },
  {
    title: "CSS Essentials",
    organization: "Cisco / Adan Institute of Technology",
    date: "18 Jul 2025",
    details: "Instructor: Irfan Khan",
    description: "Responsive layouts, Flexbox, CSS Grid, custom styling, transitions, and media queries.",
    type: "Cisco Certified",
    color: "from-cyan-400 to-blue-500"
  }
];

// All Projects
export const projects = [
  {
    title: "SettleIn - Student Support Platform",
    description:
      "Architected and implemented a full-stack web application tailored for international student support services. Integrated secure JWT authentication, robust RESTful APIs, and MongoDB for high-availability data flow.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "Tailwind CSS"],
    githubUrl: "https://github.com/Zohaib1127",
    gradient: "from-cyan-400 via-blue-500 to-violet-600",
    glow: "rgba(68, 216, 255, 0.34)"
  },
  {
    title: "School Management System",
    description:
      "Engineered a role-based administrative management system using the MERN Stack. Implemented full CRUD functionality for managing students, teachers, and course records with a responsive dashboard.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/Zohaib1127",
    gradient: "from-violet-400 via-fuchsia-500 to-cyan-500",
    glow: "rgba(168, 85, 247, 0.32)"
  },
  {
    title: "Photo Editor Application",
    description:
      "Designed and developed a feature-rich desktop GUI application in MATLAB for digital image manipulation, dynamic enhancement, contrast adjustment, and color filtering algorithms.",
    tech: ["MATLAB", "Image Processing", "Desktop GUI"],
    githubUrl: "https://github.com/Zohaib1127",
    gradient: "from-emerald-400 via-teal-500 to-blue-600",
    glow: "rgba(16, 185, 129, 0.3)"
  },
  {
    title: "Face Detection System",
    description:
      "Developed an automated real-time face detection solution leveraging Computer Vision concepts in MATLAB to process visual input streams and frame facial regions accurately.",
    tech: ["MATLAB", "Computer Vision", "Signal Processing"],
    githubUrl: "https://github.com/Zohaib1127",
    gradient: "from-amber-400 via-orange-500 to-rose-600",
    glow: "rgba(245, 158, 11, 0.3)"
  }
];

// Timeline
export const timeline = [
  {
    year: "2022 - 2026",
    title: "BS Software Engineering (CGPA: 2.99/4.00)",
    subtitle: "University of Gujrat",
    text: "Studied core Software Engineering paradigms, Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Systems, Computer Networks, and Web Architectures."
  },
  {
    year: "2025 - 2026",
    title: "Web Development Training & Certifications",
    subtitle: "Adan Technology & Cisco Networking Academy",
    text: "Successfully completed workplace training in Front End Web Development along with multiple Cisco certifications in C++, JavaScript, HTML, and CSS."
  },
  {
    year: "2020 - 2022",
    title: "Intermediate (ICS)",
    subtitle: "Punjab College",
    text: "Completed Intermediate in Computer Science, building foundational logic, mathematics, and computer programming principles."
  }
];