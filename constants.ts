import { Github, Linkedin, Mail, Twitter, FileText, Code2, Terminal, Cpu } from 'lucide-react';
import { SocialLink, Project, ExperienceItem, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Shubham Prajapati",
  title: "Software Engineer & Creative Developer",
  tagline: "Crafting digital experiences with precision and passion.",
  about: `I am a passionate developer focused on building scalable, accessible, and performant web applications. With a strong foundation in modern JavaScript frameworks and a keen eye for design, I bridge the gap between technical complexity and user experience. My journey involves solving real-world problems through code and constantly learning new technologies.`,
  email: "contact@shubhamprajapati.dev", // Update with actual email
  location: "India",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com/in/", icon: Linkedin },
  { platform: "Twitter", url: "https://twitter.com/", icon: Twitter },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
  { platform: "Resume", url: "#resume", icon: FileText },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    category: "Full Stack",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization, inventory management, and sales reporting.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    link: "#",
    github: "#"
  },
  {
    id: "2",
    title: "AI Content Generator",
    category: "AI Integration",
    description: "SaaS application leveraging Gemini API to help content creators generate blog posts, social media captions, and marketing copy.",
    tech: ["Next.js", "Gemini API", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    link: "#",
    github: "#"
  },
  {
    id: "3",
    title: "Task Master Pro",
    category: "Productivity",
    description: "A collaborative task management tool allowing teams to organize workflows with Kanban boards and Gantt charts.",
    tech: ["Vue.js", "Firebase", "Pinia"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    link: "#",
    github: "#"
  },
  {
    id: "4",
    title: "Portfolio v1",
    category: "Design",
    description: "My previous portfolio website focusing on minimal typography and smooth transitions.",
    tech: ["HTML", "SCSS", "JavaScript"],
    imageUrl: "https://picsum.photos/800/600?random=4",
    link: "#",
    github: "#"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    role: "Senior Frontend Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading the frontend team in migrating legacy monoliths to micro-frontends. Improved site performance by 40%."
  },
  {
    id: "2",
    role: "Software Developer",
    company: "Creative Agency",
    period: "2020 - 2022",
    description: "Developed interactive campaign websites for major global brands. Collaborated closely with designers to ensure pixel-perfect implementation."
  },
  {
    id: "3",
    role: "Junior Developer",
    company: "StartUp Hub",
    period: "2019 - 2020",
    description: "Assisted in building MVP products for early-stage startups using React and Node.js."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "AWS", "Figma", "Jest"]
  }
];