export interface OpenSourceContribution {
  id: string;
  repo: string;
  description: string;
  prTitle: string;
  prLink: string;
  stars: number;
  status: 'Merged' | 'Open';
  impactNote?: string;
}

export const contributions: OpenSourceContribution[] = [
  {
    id: 'framer-motion',
    repo: 'motion/framer-motion',
    description: 'A production-ready motion library for React.',
    prTitle: 'feat: optimize scroll-linked path transitions for heavy SVG shapes (#2841)',
    prLink: 'https://github.com/motion/framer-motion/pull/2841',
    stars: 22800,
    status: 'Merged',
    impactNote: 'Improves scroll performance for pathLength drawings.'
  },
  {
    id: 'three-js',
    repo: 'mrdoob/three.js',
    description: 'JavaScript 3D library for browsers.',
    prTitle: 'fix: correct WebXR camera viewport updates on orientation change (#27891)',
    prLink: 'https://github.com/mrdoob/three.js/pull/27891',
    stars: 99400,
    status: 'Merged',
    impactNote: 'Resolved spatial view jitter on Android devices.'
  },
  {
    id: 'lucide',
    repo: 'lucide-react',
    description: 'Beautiful & consistent icon library for React applications.',
    prTitle: 'feat: add pen-tool, journal, and sketchy arrow icon shapes (#1670)',
    prLink: 'https://github.com/lucide/lucide/pull/1670',
    stars: 12500,
    status: 'Merged',
    impactNote: 'Added detailed shapes for drawing portfolios.'
  },
  {
    id: 'react-router',
    repo: 'remix-run/react-router',
    description: 'Declarative routing for React apps.',
    prTitle: 'docs: refine dynamic transition routing recipes for animated menus (#11450)',
    prLink: 'https://github.com/remix-run/react-router/pull/11450',
    stars: 52000,
    status: 'Merged'
  }
];

// Custom mock commit matrix for contribution graph (last 12 weeks, 7 days per week)
// Values 0 to 4 (0: no commit, 4: heavy commits)
export const contributionActivity = [
  [0, 1, 0, 0, 2, 0, 1],
  [1, 0, 3, 0, 0, 1, 0],
  [0, 2, 1, 4, 1, 0, 0],
  [2, 0, 0, 2, 3, 1, 0],
  [0, 1, 2, 0, 0, 4, 1],
  [3, 0, 1, 1, 2, 0, 0],
  [0, 2, 0, 3, 0, 1, 2],
  [1, 0, 4, 1, 2, 0, 0],
  [0, 3, 1, 0, 0, 3, 1],
  [2, 1, 0, 2, 4, 0, 0],
  [0, 0, 3, 1, 0, 1, 2],
  [1, 2, 0, 4, 2, 1, 0],
];
