import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

// OS Specific Types
export interface DesktopApp {
  id: string;
  title: string;
  icon: LucideIcon;
  component: React.FC<any>;
  width?: number;
  height?: number;
}

export interface WindowState {
  id: string;
  appId: string;
  title: string;
  icon: LucideIcon;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number | string; height: number | string };
}
