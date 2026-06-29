export interface ExperienceMetric {
  value: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  metrics: ExperienceMetric[];
  certificateUrl?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'aashdit',
    role: 'AI/ML Intern',
    organization: 'Aashdit Technologies',
    duration: 'May 2026 – Jun. 2026',
    location: 'Bhubaneswar, India — On-site',
    responsibilities: [
      'Delivered end-to-end RAG platform enabling semantic document search for enterprise; shipped features across 3 document types (PDFs, DOCX, scanned); optimized for production deployment handling 10K+ concurrent documents with sub-200ms response time.'
    ],
    technologies: [
      'RAG', 'NLP', 'Vector DB', 'Python', 'Document Parsing', 'Semantic Search'
    ],
    metrics: [
      { value: '3', label: 'DOC TYPES' },
      { value: '10K+', label: 'DOCUMENTS CAPACITY' },
      { value: 'sub-200ms', label: 'RESPONSE TIME' },
      { value: 'RAG', label: 'ARCHITECTURE' }
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
    ],
    metrics: [
      { value: '5+', label: 'LEADERSHIP EVENTS' },
      { value: '1-1', label: 'PARTNERSHIPS' },
      { value: 'Beta', label: 'GEMINI FEATURES' },
      { value: 'UX', label: 'RESEARCH METHOD' }
    ]
  }
];
