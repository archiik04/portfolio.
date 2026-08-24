export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  certificateUrl?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'learning-pathways',
    role: 'Product Engineer Intern',
    organization: 'Learning Pathways',
    duration: 'Jul. 2026 – Aug. 2026',
    location: 'Remote',
    responsibilities: [
      'Building core product features end-to-end with React on the frontend and FastAPI on the backend; researching upcoming features and mapping them into user flows before implementation; designing and building reusable components and UI screens that power the dashboard experience.'
    ],
    technologies: [
      'React', 'FastAPI', 'TypeScript', 'Component Design', 'Product Research'
    ]
  },
  {
    id: 'aashdit',
    role: 'AI Intern',
    organization: 'Aashdit Technologies',
    duration: 'May 2026 – Jun. 2026',
    location: 'Bhubaneswar, India, On-site',
    responsibilities: [
      'Delivered end-to-end RAG platform enabling semantic document search for enterprise; shipped features across 3 document types (PDFs, DOCX, scanned); optimized for production deployment handling 10K+ concurrent documents with sub-200ms response time.'
    ],
    technologies: [
      'RAG', 'Vector DB', 'Python', 'Document Parsing', 'Semantic Search'
    ]
  },
  {
    id: 'canvas8',
    role: 'Global Youth Advisor for Google',
    organization: 'Canvas8',
    duration: 'Jan. 2024 – Dec. 2026',
    location: 'Remote',
    responsibilities: [
      'Served as Google\'s insight voice across product teams; provided strategic feedback via 1-1 partnerships with engineering leads, tested Gemini features in beta, and spoke at 5+ leadership events on youth-AI intersection influencing product roadmap for Google\'s products; synthesized user research via forms, interviews, and competitive analysis.'
    ],
    technologies: [
      'Product Strategy', 'UX Research', 'Google Gemini', 'Developer Beta', 'AI Ethics', 'Public Speaking'
    ]
  }
];
