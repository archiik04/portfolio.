export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Go', 'HTML5/CSS3', 'SQL']
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    skills: ['React 19', 'Next.js', 'Vite', 'Three.js', 'Framer Motion', 'Zustand']
  },
  {
    id: 'backend',
    title: 'Backend Systems',
    skills: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Redis', 'GraphQL']
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    skills: ['AWS (S3, Lambda)', 'Docker', 'GitHub Actions', 'Vercel', 'Netlify']
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    skills: ['LLM Integrations', 'RAG Pipelines', 'LangChain', 'OpenAI API', 'Vector DBs']
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    skills: ['Git', 'Vim', 'VS Code', 'Webpack', 'Figma', 'Terminal']
  }
];
