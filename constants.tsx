import { Project, TechCategory } from './types';

export const TECH_STACK: TechCategory[] = [
  {
    title: "Languages",
    items: ["JavaScript", "Java", "Python (basic)", "SQL"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"]
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL"]
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Linux"]
  },
  {
    title: "Deployment",
    items: ["Vercel", "Render"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Color Clash Multiplayer",
    description: "An architecturally complex real-time multiplayer ecosystem. Features custom synchronization logic, secure JWT-based session management, and a highly optimized MongoDB schema for low-latency game state persistence.",
    tags: ["Node.js", "Express", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yug005/Color-Clash-Multiplayer",
    liveUrl: "https://ccm-xy1v.onrender.com/",
    type: "Main"
  },
  {
    title: "OS Simulator",
    description: "A low-level systems engineering project that simulates kernel-level operations. Implemented advanced priority-based scheduling algorithms and virtual memory management logic to demonstrate deep CS fundamentals.",
    tags: ["Java", "Systems Design", "Algorithms"],
    githubUrl: "https://github.com/yug005/OS_simulator.git",
    type: "Main"
  },
  {
    title: "NeuroNotes",
    description: "A high-efficiency productivity engine utilizing deterministic heuristic algorithms for document distillation. Engineered for privacy and speed, avoiding LLM overhead while maintaining semantic accuracy.",
    tags: ["Python", "Heuristics", "Data Structures"],
    githubUrl: "https://github.com/yug005/NeuroNotes",
    type: "Main"
  }
];

export const HACKATHONS: Project[] = [
  {
    title: "Pranika — Hackathon Prototype",
    description: "Engineered a mission-critical healthcare platform during a high-pressure 24-hour sprint. Scaled the prototype from concept to a functional full-stack MVP, optimizing for rapid user data ingestion.",
    tags: ["MERN Stack", "Rapid Prototyping", "HealthTech"],
    githubUrl: "https://github.com/yug005/Pranika",
    isHackathon: true
  }
];

export const CERTIFICATES = [
  {
    id: 'mern',
    title: "Full Stack Development with MERN",
    issuer: "NASSCOM Foundation × thingQbator",
    date: "2018-2025 Cycle",
    description: "Architected end-to-end enterprise-grade solutions through a rigorous Cisco-backed training initiative. Mastered the implementation of high-concurrency backend services using Node.js and Express, integrated with optimized non-relational data modeling in MongoDB. Successfully engineered responsive, state-driven user interfaces with React, ensuring a professional-standard full-stack lifecycle command.",
    imageUrl: "https://lh3.googleusercontent.com/d/1gppl6IvgVqGiDHhKRl99z8G5664K739G",
    driveUrl: "https://drive.google.com/file/d/1gppl6IvgVqGiDHhKRl99z8G5664K739G/view?usp=sharing",
    verification: "Verified by CEO, NASSCOM Foundation",
    badge: "MERN Certified"
  },
  {
    id: 'hack',
    title: "Hack Summit 2025",
    issuer: "Geek Room Plaksha × E-Cell Plaksha",
    date: "March 2025",
    description: "Demonstrated elite technical agility during a high-stakes 48-hour competitive engineering intensive at Plaksha University. Rapidly conceptualized and deployed a production-ready prototype, navigating complex architectural constraints and cross-functional integration hurdles. Recognized for exceptional problem-solving logic and the ability to architect scalable MVPs under extreme pressure.",
    imageUrl: "https://lh3.googleusercontent.com/d/1rubbK4k7O8LQr5emdAfd0G9sJONNhfD7",
    driveUrl: "https://drive.google.com/file/d/1rubbK4k7O8LQr5emdAfd0G9sJONNhfD7/view?usp=sharing",
    verification: "Official Participation Credential",
    badge: "Elite Hackathon Participant"
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/yug005",
  linkedin: "https://www.linkedin.com/in/yug-arora-2475b331a/",
  leetcode: "https://leetcode.com/u/Yug_Arora",
  email: "mailto:arorayug07@gmail.com",
  resume: "https://drive.google.com/file/d/10Ol2MypIDuwe3qI7bu3dlwgCVTeiDF8N/view?usp=drive_link"
  //update resume link
};