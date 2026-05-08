// ─── Portfolio Data ─────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.

export const personalInfo = {
  name: "Manas Tripathy",
  title: "Backend Java Developer",
  tagline: "Building scalable and secure backend systems",
  bio: `I'm a Backend Java Developer passionate about building robust, high-performance server-side applications. 
  I specialize in designing and implementing RESTful APIs, microservice architectures, and secure authentication systems using 
  Java and the Spring ecosystem. I enjoy turning complex business requirements into clean, maintainable code — and I believe 
  good backend engineering is the foundation every great product is built on.`,
  bioShort: "Crafting production-grade Java backends with Spring Boot, JWT security, and cloud-native deployments.",
  location: "Banglore, Karnataka, India",
  email: "manastripathy127@gmail.com",
  github: "https://github.com/manas-tripathy",
  linkedin: "https://linkedin.com/in/manas-tripathy",
  resumeUrl: "/Manas_Tripathy_CV_2026.pdf", // Update with actual resume link
};

export const skills = [
  {
    category: "Core Language",
    items: [
      { name: "Java 17+", level: 90 },
      { name: "OOP & Design Patterns", level: 85 },
      { name: "Data Structures", level: 80 },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Spring Boot", level: 88 },
      { name: "Spring Security", level: 82 },
      { name: "Spring Data JPA", level: 80 },
    ],
  },
  {
    category: "Architecture",
    items: [
      { name: "Microservices", level: 78 },
      { name: "REST API Design", level: 90 },
      { name: "API Gateway", level: 75 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "Hibernate / JPA", level: 82 },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", level: 72 },
      { name: "AWS EC2", level: 68 },
      { name: "GitHub Actions (CI/CD)", level: 75 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "Swagger / OpenAPI", level: 85 },
      { name: "React (basic)", level: 55 },
    ],
  },
];

export const techStack = [
  { name: "Java", color: "#F89820" },
  { name: "Spring Boot", color: "#6DB33F" },
  { name: "Spring Security", color: "#6DB33F" },
  { name: "Microservices", color: "#00D4FF" },
  { name: "REST APIs", color: "#00D4FF" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MySQL", color: "#4479A1" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS EC2", color: "#FF9900" },
  { name: "Git", color: "#F05033" },
  { name: "GitHub Actions", color: "#2088FF" },
  { name: "Swagger", color: "#85EA2D" },
  { name: "JWT / OAuth2", color: "#D63AFF" },
  { name: "Hibernate", color: "#BCAE79" },
  { name: "React", color: "#61DAFB" },
];

export const projects = [
  {
    id: 1,
    name: "Blogging API",
    subtitle: "Full-featured content platform backend",
    description:
      "A production-ready RESTful blogging API built with Spring Boot. Features JWT-based authentication, role-based access control, pagination, and full Swagger/OpenAPI documentation. Deployed on Railway with PostgreSQL.",
    longDescription:
      "Implemented full CRUD operations for posts, categories, and comments. Secured endpoints using Spring Security with JWT tokens. Added file upload for post images, search & filter capabilities, and custom exception handling with meaningful error responses.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Swagger", "Railway"],
    github: "https://github.com/manas-tripathy",
    live: null,
    highlights: ["JWT Auth", "Swagger Docs", "Railway Deploy", "RBAC"],
    color: "#00D4FF",
    featured: true,
  },
  {
    id: 2,
    name: "User Authentication System",
    subtitle: "Stateless JWT + session management",
    description:
      "A comprehensive authentication and authorization service supporting both stateless JWT token flows and traditional session management. Features refresh token rotation, OAuth2-ready structure, email verification, and password reset workflows.",
    longDescription:
      "Implemented access token + refresh token pattern with token rotation on each refresh. Added email verification via JavaMail, password reset with time-limited tokens, account lockout after failed attempts, and detailed security event logging.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "JavaMail"],
    github: "https://github.com/manas-tripathy",
    live: "http://35.154.100.52:8080/swagger-ui/index.html",
    highlights: ["Token Rotation", "Email Verify", "Account Lockout", "Session Mgmt"],
    color: "#10B981",
    featured: true,
  },
];

export const experience = [
  {
    year: "2024 — Present",
    title: "Associate Software Developer (RUMANGO)",
    type: "Learning & Projects",
    description:
      "Dedicated to mastering enterprise Java backend development through hands-on project building. Focused on Spring Boot microservices, security patterns, and cloud deployments.",
    achievements: [
      "Built enterprise-grade backend systems using Java, Spring Boot, and JPA, focusing on scalability, security, and performance.",
      "Designed and implemented multi-level workflow engines for account approvals and loan processing with role-based logic and state management.",
      "Ensured data consistency and reliability by applying transaction management, concurrency handling, and robust validation mechanisms.",
      "Developed real-world banking modules, including loan processing and OCR data transformation, improving automation and operational efficiency.",
    ],
  },
  {
    year: "2023 — 2024",
    title: "Java Foundations & Spring Ecosystem",
    type: "Core Learning",
    description:
      "Strengthened core Java knowledge including OOP, collections, multithreading, and design patterns. Began building with Spring Boot and Spring Data JPA.",
    achievements: [
      "Mastered Java 17 features and core OOP concepts",
      "Built REST APIs with Spring Boot and Hibernate",
      "Learned relational database design with PostgreSQL and MySQL",
      "Set up CI/CD pipelines with GitHub Actions",
    ],
  },
  {
    year: "2022 — 2023",
    title: "Computer Science & Programming Fundamentals",
    type: "Academic Foundation",
    description:
      "Built a strong foundation in data structures, algorithms, and software engineering principles through academic coursework and independent study.",
    achievements: [
      "Studied data structures and algorithm design",
      "Solved 100+ problems on competitive programming platforms",
      "Learned version control with Git and collaborative workflows",
      "Explored web fundamentals with HTML, CSS, and JavaScript",
    ],
  },
];
