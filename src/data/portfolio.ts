export const portfolioData = {
  hero: {
    name: "Salman Faris M N",
    role: "Backend-Focused Software Engineer",
    tagline: "I build scalable systems, modular APIs, and real-world backend solutions with a focus on clean architecture.",
  },
  contact: {
    email: "salmanfarismn03@gmail.com",
    linkedin: "https://www.linkedin.com/in/salman-faris-m-n",
    github: "https://github.com/salmanfarismn",
    phone: "+91 9497105203",
    location: "India",
  },
  about: {
    summary:
      "MCA student with a strong focus on backend development and scalable system design. Skilled in building full-stack applications using modern JavaScript technologies with an emphasis on clean architecture, modular design, and real-world problem solving. Passionate about understanding systems deeply and continuously improving through hands-on projects.",
    focusAreas: [
      "Scalable APIs",
      "Modular backend systems",
      "Real-world problem solving",
      "Clean architecture",
    ],
  },
  skills: {
    languages: ["JavaScript", "SQL"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    frontend: ["React.js", "HTML5", "CSS", "Tailwind CSS", "Bootstrap", "Material-UI", "SASS"],
    databases: ["MongoDB", "Mongoose", "SQL"],
    security: ["JWT", "bcrypt", "Passport.js"],
    tools: ["Git", "GitHub", "Postman", "Firebase", "Cloudinary", "Chart.js", "PDFKit"],
  },
  projects: [
    {
      title: "UrbanStays",
      subtitle: "Vacation Rental Platform",
      link: "https://github.com/salmanfarismn/urban_stays",
      description: "Full-Stack Airbnb-inspired Application.",
      problem:
        "Building a scalable infrastructure to handle dynamic property listings, concurrent bookings, and high-quality image assets without degrading performance.",
      solution:
        "Developed a robust full-stack platform enabling users to list properties, upload media, explore locations, and post reviews with seamless flow and security.",
      backendArchitecture:
        "Designed a relational and scalable schema on MongoDB using Mongoose. Implemented secure cloud-based image storage via Cloudinary and a robust REST API for seamless client-server processing.",
      keyFeatures: [
        "Property listing and image uploading",
        "Authentication & Authorization workflows",
        "Exploring listings & posting reviews",
        "Media storage optimization",
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "Cloudinary", "EJS"],
    },
    {
      title: "Zerodha Clone",
      subtitle: "Trading Platform",
      link: "https://github.com/salmanfarismn/full-stack-trading-app",
      description: "Full-Stack Stock Trading Simulation System.",
      problem:
        "Handling complex real-time financial workflows with accurate data representation, portfolio tracking, and fast execution states.",
      solution:
        "Implemented a three-tier architecture (frontend, backend, dashboard) catering to modular scalability and allowing robust state and request handling.",
      backendArchitecture:
        "Secured APIs with JWT authentication. Orchestrated efficient data models for rapid transactional validation and secure placement workflows while optimizing dashboard rendering.",
      keyFeatures: [
        "Portfolio tracking and analysis",
        "Real-time order placement simulation",
        "Performance visualization capabilities",
        "Secure tier-based architecture",
      ],
      techStack: ["React.js", "Node.js", "MongoDB", "Chart.js", "JWT"],
    },
    {
      title: "AI Conference Management System",
      subtitle: "Academic Platform",
      link: "https://github.com/salmanfarismn/AI_Conference_App",
      description: "Full-Stack Platform for Paper Submission, Review & Payments.",
      problem:
        "Coordinating multi-role workflows involving academic submissions, rigorous peer reviews, and secure registration transactions in a single platform.",
      solution:
        "Architected a modular event-management platform handling end-to-end academic submissions, payment loops, and user validation automatically.",
      backendArchitecture:
        "Integrated scalable Node.js processes with Firebase services for automated, real-time sync. Supported role-based pipelines and automated document operations like PDF generation.",
      keyFeatures: [
        "Paper submission & peer review tracking",
        "Automated PDF handling with PDFKit",
        "Role-based authorization flows",
        "Secure payments integration via Easebuzz",
      ],
      techStack: ["Node.js", "Firebase", "Flutter", "Dart", "PDFKit", "Easebuzz"],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Union Christian College Aluva",
      duration: "2025 – 2027",
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Ilahia College of Arts and Science",
      duration: "2022 – 2025",
    },
  ],
};
