/**
 * Single source of truth for portfolio content.
 * Professional facts come from the current resume (public/Safkat_Mahmud_Sakib_Resume.pdf);
 * links and supplementary project details come from the previous portfolio.
 */

export const profile = {
  name: "Safkat Mahmud Sakib",
  shortName: "Sakib",
  title: "Software Engineer | Full-Stack Developer",
  roles: ["Software Engineer", "Full-Stack Developer"],
  location: "Dhaka, Bangladesh",
  email: "safkatmahmudsakib@gmail.com",
  phone: "+8801629313026",
  phoneDisplay: "+880 1629 313026",
  resume: {
    href: "/Safkat_Mahmud_Sakib_Resume.pdf",
    fileName: "Safkat_Mahmud_Sakib_Resume.pdf",
  },
  intro:
    "Software engineer working across .NET, React and SQL Server. I build REST APIs, design databases and lead backend architecture for web and Flutter applications — including a production migration of a legacy MVC system to .NET 8 and React.",
} as const;

export const socials = {
  github: { label: "GitHub", handle: "safkatms", href: "https://github.com/safkatms" },
  linkedin: { label: "LinkedIn", handle: "in/safkatms", href: "https://linkedin.com/in/safkatms" },
  facebook: { label: "Facebook", handle: "safkatmahmudsakib", href: "https://facebook.com/safkatmahmudsakib" },
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm a software engineer at ByteCode Limited in Dhaka, working across the full stack with .NET, React and SQL Server. I joined as an intern in February 2025, became a Junior Software Engineer that June, and have been a Software Engineer since January 2026.",
    "Most of my work sits on the backend: designing database schemas, building REST APIs with Entity Framework, and leading backend architecture for the TaskMaster and Compliant Flutter applications — authentication, APIs, notifications and file uploads. I also build features for Compliant, a multi-tenant SaaS platform, including its Sales Order and Complaint Management modules.",
    "The project I've owned most fully is TaskMaster: I independently migrated it from legacy MVC to .NET 8, React and SQL Server, and the new application is running in production.",
  ],
  facts: [
    { label: "Current role", value: "Software Engineer, ByteCode Limited" },
    { label: "Core stack", value: ".NET 8 · React · SQL Server" },
    { label: "Focus", value: "Backend architecture, REST APIs, multi-tenant SaaS" },
    { label: "Education", value: "BSc in CSE, AIUB — CGPA 3.76/4" },
    { label: "Based in", value: "Dhaka, Bangladesh" },
  ],
} as const;

export const skillGroups = [
  { title: "Programming Languages", items: ["C#", "TypeScript", "JavaScript", "Java", "Python", "PHP"] },
  {
    title: "Backend Development",
    items: [".NET 8", ".NET 5", "ASP.NET Core", "Entity Framework", "NestJS", "Node.js", "TypeORM", "REST APIs", "JWT"],
  },
  {
    title: "Frontend Development",
    items: ["React", "Next.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  { title: "Databases", items: ["Microsoft SQL Server", "PostgreSQL"] },
  {
    title: "Architecture & Engineering",
    items: ["Multi-Tenant SaaS", "Backend Architecture", "System Design", "Database Design"],
  },
  {
    title: "Tools & Other Technologies",
    items: ["Git", "Postman", "Swagger", "Flutter (Backend)", "React Native", "WordPress"],
  },
] as const;

export type Role = {
  title: string;
  period: string;
  dateTime: string;
  current?: boolean;
  highlight?: { label: string; from: string; to: string[]; note: string };
  points: string[];
  tags?: string[];
};

export const experience: { company: string; location: string; period: string; roles: Role[] } = {
  company: "ByteCode Limited",
  location: "Dhaka, Bangladesh",
  period: "Feb 2025 – Present",
  roles: [
    {
      title: "Software Engineer",
      period: "Jan 2026 – Present",
      dateTime: "2026-01",
      current: true,
      highlight: {
        label: "TaskMaster migration",
        from: "Legacy MVC",
        to: [".NET 8", "React", "SQL Server"],
        note: "Migrated independently — the new application is in production.",
      },
      points: [
        "Designed database schemas and developed REST APIs using Entity Framework.",
        "Lead backend architecture and development for the TaskMaster and Compliant Flutter applications, implementing authentication, APIs, notifications and file uploads.",
        "Develop features for Compliant, a multi-tenant SaaS platform, including the Sales Order and Complaint Management modules.",
        "Support mobile developers with API integration and backend requirements.",
      ],
      tags: [".NET 8", "React", "SQL Server", "Entity Framework", "REST APIs", "Flutter (Backend)", "Multi-Tenant SaaS"],
    },
    {
      title: "Junior Software Engineer",
      period: "Jun 2025 – Dec 2025",
      dateTime: "2025-06",
      points: [
        "Developed frontend and backend features for Compliant using .NET 5, React and SQL Server.",
        "Contributed to the ASP.NET MVC-based tablet application.",
        "Independently developed and maintained the company's corporate website.",
      ],
    },
    {
      title: "Software Engineer Intern",
      period: "Feb 2025 – May 2025",
      dateTime: "2025-02",
      points: [
        "Developed TrainTrack, an internal Training Management System, using ASP.NET Core, Next.js, SQL Server, Entity Framework and Redux.",
        "Completed technical training and contributed to Compliant project modules.",
      ],
    },
  ],
};

export type Project = {
  name: string;
  kind: string;
  description: string;
  tech: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "TaskMaster",
    kind: "Professional · ByteCode Limited",
    description:
      "Company application I independently migrated from legacy MVC to .NET 8, React and SQL Server; the new version is in production. I also lead backend development for its Flutter mobile app — authentication, APIs, notifications and file uploads.",
    tech: [".NET 8", "React", "SQL Server", "REST APIs", "Flutter (Backend)"],
    featured: true,
  },
  {
    name: "Compliant",
    kind: "Professional · ByteCode Limited",
    description:
      "Multi-tenant SaaS platform. I build frontend and backend features — including the Sales Order and Complaint Management modules — and lead backend development for its Flutter application.",
    tech: [".NET 5", "React", "SQL Server", "Multi-Tenant SaaS", "Flutter (Backend)"],
    featured: true,
  },
  {
    name: "All-In-One Business Solution",
    kind: "Academic project",
    description:
      "Multi-tenant SaaS ERP solution with HR, Accounts, Inventory and Sales modules. I designed, led and developed the project.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "TypeORM"],
    href: "https://github.com/safkatms/All-in-OneBusinessSolution",
  },
  {
    name: "TrainTrack",
    kind: "Internal tool · ByteCode Limited",
    description:
      "Internal Training Management System built during my internship for managing the company's training programs, scheduling and tracking.",
    tech: ["ASP.NET Core", "Next.js", "SQL Server", "Entity Framework", "Redux"],
  },
  {
    name: "Dealora",
    kind: "Academic project",
    description: "B2C e-commerce platform covering product, cart and order management.",
    tech: ["ASP.NET MVC", "SQL Server"],
    href: "https://github.com/safkatms/Dealora",
  },
];

export const otherProjects = [
  {
    name: "NestCart",
    description: "Microservice-based e-commerce platform.",
    tech: "NestJS · Next.js",
    href: "https://github.com/safkatms/NestCart",
  },
  {
    name: "StayDriveGo",
    description: "Online hotel booking website.",
    tech: "PHP · AJAX · jQuery",
    href: "https://github.com/safkatms/StayDriveGo",
  },
] as const;

export const education = {
  degree: {
    title: "BSc in Computer Science and Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    period: "2021 – 2025",
    grade: "CGPA 3.76 / 4.00",
  },
  secondary: [
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Milestone College, Dhaka",
      period: "2019",
      grade: "GPA 5.00 / 5.00",
    },
  ],
  certifications: [{ title: "Cisco IT Essentials", issuer: "Cisco", period: "June 2021" }],
} as const;
