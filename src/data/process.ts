import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    id: 'discover',
    step: 1,
    title: 'Discover',
    description:
      'We take time to understand your business, goals, and the problem you need to solve before we suggest anything.',
  },
  {
    id: 'design',
    step: 2,
    title: 'Design',
    description:
      'We shape a clear solution — structure, user flows, and technical approach — before writing a line of code.',
  },
  {
    id: 'build',
    step: 3,
    title: 'Build',
    description:
      'Development is iterative and transparent. You see progress at every stage and can give input along the way.',
  },
  {
    id: 'launch',
    step: 4,
    title: 'Launch',
    description:
      'We handle deployment, testing, and go-live. Everything is checked thoroughly before the switch is flipped.',
  },
  {
    id: 'support',
    step: 5,
    title: 'Support',
    description:
      "We stay on hand after launch for updates, performance monitoring, and continued development when you need it.",
  },
];
