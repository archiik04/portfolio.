import docsyImg from '../assets/docsy.png';
import vrmazeescapeImg from '../assets/vrmazeescape.png';
import loreImg from '../assets/lore.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  github?: string;
  demo?: string; // Website link
  post?: string; // Post link
  status: 'Live' | 'Building' | 'Not Started';
  image: string;
  youtubeEmbedUrl?: string;
  year: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  lessonsLearned?: string;
}

export const projects: Project[] = [
  {
    id: 'docsy',
    title: 'Docsy',
    description: 'Search beyond keywords. Docsy is an AI-powered workspace enabling users to search, retrieve, and chat with their PDF documents semantically using chunk indexing and vector spaces.',
    longDescription: 'Docsy is a high-performance document research workspace designed to let you search beyond keywords. Powered by local semantic vector spaces and advanced layout understanding, it extracts text chunks, constructs semantic embeddings, and exposes an interactive chat interface to directly interrogate, trace, and synthesize complex PDFs.',
    techStack: ['nextjs', 'react', 'typescript', 'tailwind', 'openai'],
    github: 'https://github.com/archiik04/docsy',
    demo: 'https://docsy-six.vercel.app/',
    status: 'Live',
    image: docsyImg,
    year: '2026',
    problem: 'Traditional keyword-based document searching fails to capture semantic meaning, context, or relation between separate paragraphs across large, technical PDFs, causing researchers to waste hours manually scanning text.',
    solution: 'Built a multi-modal semantic workspace integrating text chunking, local/remote vector storage, and an LLM retrieval-augmented generation (RAG) loop, allowing natural language queries directly over target document libraries.',
    architecture: 'Next.js App Router coupled with vector embedding pipelines and index indexing services. The front-end leverages state machines to track file uploads, document indexing progress, and streaming completions.',
    lessonsLearned: 'Optimizing document chunk sizes and overlaps is critical. Smaller chunks preserve precise details, while overlapping context maintains long-range semantic relations.'
  },
  {
    id: 'vrmazeescape',
    title: 'VRMazeEscape',
    description: 'A virtual reality escape room experience where players solve spatial puzzles and navigate procedural mazes using immersive headset controls.',
    longDescription: 'VRMazeEscape is an immersive virtual reality game built using Unity and C# that places players inside procedural grid mazes. Players must navigate winding corridors, solve spatial logic puzzles, and interact with physical triggers using motion-tracked controllers to find the exit before time runs out.',
    techStack: ['unity', 'csharp', 'vr'],
    github: 'https://github.com/archiik04/VRMazeEscape',
    status: 'Live',
    image: vrmazeescapeImg,
    year: '2025',
    problem: 'Traditional screen-based maze games lack physical scale, depth perception, and immersive tension, making puzzle navigation feel flat and mechanical.',
    solution: 'Created a fully-immersive VR layout where players navigate rooms using real-scale head tracking and touch interactions, heightening spatial navigation and logical puzzle solving.',
    architecture: 'Built in Unity using the XR Interaction Toolkit for cross-platform controller mappings. Procedural maze generation utilizes a modified randomized Prim\'s algorithm to structure corridors.',
    lessonsLearned: 'Optimizing GPU frame times to maintain a constant 90 FPS is vital. Any frame drops in VR quickly cause motion sickness; baking static lighting and pooling object meshes solved this.'
  },
  {
    id: 'lore',
    title: 'Lore',
    description: 'Lore is an AI-powered search engine built from scratch, inspired by Perplexity. It searches the web in real time and returns clean, cited answers to any question you ask.',
    longDescription: 'Lore is an AI-powered search engine built from scratch that aims to synthesize web knowledge on-demand. Inspired by Perplexity, it accepts natural language queries, performs parallel web searches in real-time, scrapes content from relevant pages, and uses an AI model to compile a clean, comprehensive response complete with inline citations and list-based source summaries.',
    techStack: ['nextjs', 'react', 'typescript', 'tailwind', 'openai'],
    github: 'https://github.com/archiik04/lore',
    status: 'Building',
    image: loreImg,
    year: '2026',
    problem: 'Traditional search engine lists require users to click through multiple tabs and synthesize fragments of information manually, creating tab overload and friction.',
    solution: 'Built Lore, an AI search assistant that queries the web, scrapes the top pages in parallel, and compiles a single synthesized markdown answer with precise hover citations and source grids.',
    architecture: 'Next.js App Router for frontend streams, integrated with web search APIs and Cheerio/Puppeteer scraping tools to digest target pages. Responses are generated via OpenAI/Anthropic SDKs.',
    lessonsLearned: 'Parsing raw HTML from arbitrary web pages requires clean preprocessing (removing script tags, styling, nav bars) to minimize token counts and prevent prompt context overflow.'
  }
];
