import type { ComponentType } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

type ContactInfo = {
  value: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export type Project = {
    title: string;
    technologies: string[];
    description: string;
    links: {
        name: string;
        url: string;
        icon: 'github' | 'external-link';
    }[];
};

export const resumeData = {
  name: "Abhishek Mangalur",
  contact: {
    phone: {
      value: "+91 9535774891",
      href: "tel:9535774891",
      icon: Phone,
    } as ContactInfo,
    email: {
      value: "abhimangalur1@gmail.com",
      href: "mailto:abhimangalur1@gmail.com",
      icon: Mail,
    } as ContactInfo,
    github: {
      value: "AbhishekMangalur",
      href: "https://github.com/AbhishekMangalur",
      icon: Github,
    } as ContactInfo,
    linkedin: {
      value: "abhishek-mangalur",
      href: "https://www.linkedin.com/in/abhishekmangalur/",
      icon: Linkedin,
    } as ContactInfo,
  },
  summary: "Backend-focused Software Engineer with strong expertise in Python, Django, Django REST Framework, PostgreSQL, Celery, Redis, JWT Authentication, WebSockets, and scalable API development. Skilled in building distributed systems, automation pipelines, background task processing, real-time communication, and high-performance backend architectures. Experienced in Docker-based deployments, Linux server administration, CI/CD workflows, Caddy/Nginx reverse proxying, and modern cloud hosting.",
  experience: [
    {
      company: "Global Tech Software Solutions",
      role: "Software Development Engineer I",
      description: "Full-stack developer with hands-on experience building end-to-end web applications. Independently handled complete backend development using REST APIs and integrated them seamlessly with the frontend. Strengthened skills in designing scalable, efficient, and user-friendly web solutions.",
      subSections: [
        {
          title: "Frontend",
          points: [
            "Designed and developed responsive user interfaces using HTML, CSS, and JavaScript.",
            "Built reusable UI components and integrated state management for scalable workflows.",
            "Implemented real-time interactivity using WebSockets for notifications and live updates.",
            "Integrated frontend components with backend APIs for seamless dataflow.",
            "Optimized UI performance and ensured cross-browser compatibility.",
          ],
        },
        {
          title: "Backend",
          points: [
            "Developed and maintained REST APIs using Python, Django, and Django REST Framework.",
            "Implemented Celery + Redis for background tasks (email automation, scheduled jobs, async processing).",
            "Built WebSocket-based real-time modules using Django Channels.",
            "Designed optimized relational database schemas in PostgreSQL improving performance by 25%.",
            "Implemented secure authentication using JWT, Session Auth, and DRF Token Auth.",
            "Wrote modular, reusable, and scalable Django apps following best practices.",
            "Implemented custom middleware, signals, logging, role-based access control, and complex querysets.",
            "Conducted API testing and debugging with Postman ensuring stable production releases.",
          ],
        },
      ],
    },
  ],
  devopsSkills: [
    "Containerization using Docker and Docker Compose.",
    "Deployment using Nginx, Caddy, Gunicorn, and Systemd on Ubuntu servers.",
    "Multi-domain hosting, SSL automation, Reverse Proxy, and Load Balancing.",
    "CI/CD pipelines using GitHub Actions for automated builds and deployments.",
    "SSH, Linux administration, server hardening, log monitoring, and resource optimization.",
    "Scaling applications using caching (Redis), connection pooling, and async workers.",
    "Version control and collaboration using Git & GitHub.",
  ],
  technicalSkills: [
    { category: "Programming Languages", skills: ["Python", "Java", "JavaScript", "TypeScript"] },
    { category: "Frontend Technologies", skills: ["HTML", "CSS", "React.js", "Next.js", "AngularJS"] },
    { category: "Backend Technologies", skills: ["Django", "DRF", "Django Channels", "Celery", "Redis", "WebSockets", "JWT", "API Development"] },
    { category: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB"] },
    { category: "Cloud & Deployment", skills: ["AWS EC2", "Caddy", "Nginx", "Gunicorn", "Docker"] },
    { category: "Tools", skills: ["Git", "GitHub", "VS Code", "Eclipse", "Postman", "Linux CLI"] },
    { category: "Other Skills", skills: ["SMTP Automation", "Background Workers", "Performance Tuning", "Server Optimization"] },
  ],
  projects: [
    {
      title: "Transforming Student Evaluation with AI and Performance Analytics",
      technologies: ["MERN Stack", "Gemini API", "AI"],
      description: "Developed an AI-powered platform that generates questions from academic content and evaluates answers using the Gemini API. Delivered detailed analytics, personalized feedback, performance dashboards, and automated scoring.",
      links: [
        { name: "GitHub", url: "https://github.com/AbhishekMangalur/Transforming_Student_Evaluation_with_Adaptive_Intelligence_and_Performance_Analytics", icon: 'github' as 'github' | 'external-link' },
      ],
    },
    {
      title: "Bank Management System",
      technologies: ["HTML", "CSS", "Django", "MySQL"],
      description: "Built a secure banking system using Django with modular apps, authentication, admin dashboards, optimized ORM queries, and integrated APIs for transaction management and reporting.",
      links: [
        { name: "GitHub", url: "https://github.com/AbhishekMangalur/Bank_Management_System", icon: 'github' as 'github' | 'external-link' },
        { name: "Live", url: "https://uniquebank.pythonanywhere.com/", icon: 'external-link' as 'github' | 'external-link' },
      ],
    },
  ],
  education: {
    institution: "Acharya Institute of Technology",
    location: "Bengaluru, Karnataka",
    degree: "B.E., Information Science — CGPA 8.6",
    period: "2021 – 2025",
  },
  research: {
    title: "Transforming Student Evaluation with Adaptive Intelligence and Performance Analytics [2025]",
    authors: ["Pushpalatha K. S.", "Abhishek Mangalur", "Ketan Hegde", "Chetan Badachi", "Mohammad Aamir"],
    abstract: "AI-driven framework leveraging Gemini API for automated question generation, grading, and performance analytics. Enhances educational assessments with instant feedback and data-driven insights.",
    papers: [
      { name: "ResearchGate", url: "https://www.researchgate.net/publication/389694429_Transforming_Student_Evaluation_with_Adaptive_Intelligence_and_Performance_Analytics" },
      { name: "IRJMETS", url: "https://www.irjmets.com/uploadedfiles/paper//issue_3_march_2025/69066/final/fin_irjmets1741707744.pdf" },
      { name: "arXiv", url: "https://arxiv.org/abs/2503.04752" },
    ],
  },
  internships: [
    {
      title: "Cybersecurity",
      description: "Acquired expertise in cybersecurity principles, threat detection, and vulnerability analysis through hands-on exercises. Worked with OWASP guidelines, encryption techniques, and secure access control techniques. Hands-on with vulnerability scanning, network monitoring, incident analysis, and data protection methods.",
    },
    {
      title: "AI and Cloud",
      description: "Developed an intelligent chatbot using IBM Watson Studio with NLP and ML, enabling automated and context-aware user interactions. Designed conversational flows, fallbacks, and integrated cloud-based deployment workflows with monitoring and scalability support.",
    },
  ],
  languages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Kannada", proficiency: "Native" },
    { language: "Hindi", proficiency: "Limited" },
  ],
  certifications: [
    { name: "Emerging Technologies (AI & Cloud)", url: "https://drive.google.com/file/d/1ZWeQ0HdfJcXx6dFi1FP6XEEhYI4cY9Fb/view?usp=sharing" },
    { name: "Selenium WebDriver with Python", url: "https://drive.google.com/file/d/1-qCGXGH4UUiARq4_ssOo4BxUOkIsVnJz/view?usp=sharing" },
    { name: "Google Cloud Platform (Data Analyst Track)", url: "https://drive.google.com/file/d/1myxLT4TzchsdxD05rs5g8iN0D30vfEcV/view?usp=sharing" },
    { name: "Introduction to Cyber Security (VOIS)", url: "https://drive.google.com/file/d/1uhwf8jmU28r9ozm9HTZTEex7xcl2lDpw/view?usp=sharing" },
  ],
};
