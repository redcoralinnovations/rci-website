import { Target, Code2, MessageSquare, Wrench } from 'lucide-react';
import type { WhyPoint } from '../types';

export const whyPoints: WhyPoint[] = [
  {
    id: 'business-first',
    icon: Target,
    title: 'Built around your business',
    description:
      'We understand your processes before proposing a solution. No off-the-shelf answers or pre-made templates.',
  },
  {
    id: 'modern-tech',
    icon: Code2,
    title: 'Modern technology, not templates',
    description:
      'Your product is built with current, production-grade technology — not page builders or WordPress themes.',
  },
  {
    id: 'direct-comms',
    icon: MessageSquare,
    title: 'Direct communication',
    description:
      'You work directly with the team building your product. No account managers, no intermediaries.',
  },
  {
    id: 'long-term',
    icon: Wrench,
    title: 'Long-term technical support',
    description:
      "We're here after launch for updates, monitoring, and continued development — as long as you need us.",
  },
];
