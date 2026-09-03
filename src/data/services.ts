import { Globe, Code2, Server, BarChart3 } from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'web-design',
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'Responsive, performance-focused websites built to reflect your brand and turn visitors into customers.',
  },
  {
    id: 'software-dev',
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Web applications and SaaS platforms designed around your processes — built with the frameworks that fit the job.',
  },
  {
    id: 'hosting',
    icon: Server,
    title: 'Hosting & Application Management',
    description:
      'Reliable cloud hosting, deployment pipelines, and ongoing technical management to keep your systems running smoothly.',
  },
  {
    id: 'digital-growth',
    icon: BarChart3,
    title: 'Digital Growth & IT Solutions',
    description:
      'Digital advertising, SEO, and IT support to help your business grow and operate efficiently online.',
  },
];
