import type { LucideIcon } from 'lucide-react';

export type IconComponent = LucideIcon;

export interface Service {
  id: string;
  icon: IconComponent;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface Capability {
  category: string;
  items: string[];
}

export interface WhyPoint {
  id: string;
  icon: IconComponent;
  title: string;
  description: string;
}
