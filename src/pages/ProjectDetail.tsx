import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Container } from '../components/Container';
import { Github } from '../components/Icons';
import { TechIcon } from '../components/TechIcons';
import { ArrowLeft, ExternalLink, FileText, Moon, Sun } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Scroll to top on mount / project change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Sync theme local state for header button toggle
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      if (next === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-paper text-text-primary">
        <h1 className="font-serif-editorial text-3xl mb-4">Project not found</h1>
        <Link to="/#projects" className="font-sans text-sm text-accent-brown hover:underline flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Go back home
        </Link>
      </div>
    );
  }

  const renderStatus = () => {
    switch (project.status) {
      case 'Live':
        return (
          <span className="flex items-center gap-1.5 font-sans text-sm font-semibold text-emerald-600 dark:text-emerald-500">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </span>
        );
      case 'Building':
        return (
          <span className="flex items-center gap-1.5 font-sans text-sm font-semibold text-rose-500 dark:text-rose-400">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            Building
          </span>
        );
      case 'Not Started':
      default:
        return (
          <span className="flex items-center gap-1.5 font-sans text-sm font-semibold text-gray-500">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
            Not Started
          </span>
        );
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
      }}
      className="min-h-screen bg-bg-paper text-text-primary pt-24 pb-20 select-text"
    >
      <Container>
        
        {/* 1. Symmetrical Header Row (Back button/path details on left, theme toggle on right) */}
        <div className="flex items-center justify-between mb-10 w-full max-w-[800px] mx-auto select-none">
          {/* Left Wing */}
          <div className="flex items-center gap-4 text-left">
            <button
              onClick={() => navigate('/#projects')}
              className="w-10 h-10 rounded-xl bg-white-warm dark:bg-white-warm/5 border border-border-warm flex items-center justify-center cursor-pointer shadow-sm hover:bg-white-warm/85 transition-all duration-200 active:scale-95 text-text-secondary hover:text-text-primary"
              title="Go back to projects"
              aria-label="Go back to projects"
            >
              <ArrowLeft className="w-4.5 h-4.5" />
            </button>
            
            <div className="flex flex-col text-left">
              <h1 className="font-serif-editorial text-[25px] sm:text-[28px] text-text-primary font-normal leading-tight">
                {project.title}
              </h1>
              <span className="font-mono-tag text-[11px] text-text-secondary uppercase tracking-wider mt-0.5">
                Projects/{project.title}
              </span>
            </div>
          </div>

          {/* Right Wing (Theme Toggle only) */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-border-warm bg-white-warm dark:bg-white-warm/5 text-text-secondary hover:text-text-primary transition-all duration-200 cursor-pointer active:scale-90"
            aria-label="Toggle color theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>

        {/* 2. Project Hero Media Display */}
        <div className="w-full max-w-[800px] mx-auto aspect-video rounded-3xl overflow-hidden border border-border-warm bg-black/95 shadow-md relative select-none">
          {project.youtubeEmbedUrl && project.status !== 'Not Started' ? (
            <iframe
              src={project.youtubeEmbedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`${project.title} Demo Video`}
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover filter sepia-[3%] contrast-[101%] brightness-[0.98]"
            />
          )}
        </div>

        {/* 3. Action Link Buttons Row (Divided by vertical lines inside top/bottom bordered row) */}
        <div className="w-full max-w-[800px] mx-auto border-y border-border-warm/65 py-3.5 flex items-center justify-center gap-12 text-[14px] font-sans font-medium text-text-secondary select-none my-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-primary transition-colors cursor-pointer"
            >
              <Github className="w-4 h-4" />
              Github
            </a>
          )}
          {project.github && (project.demo || project.post) && (
            <div className="h-4 w-px bg-border-warm/70" />
          )}
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-primary transition-colors cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              Website
            </a>
          )}
          {project.demo && project.post && (
            <div className="h-4 w-px bg-border-warm/70" />
          )}

          {project.post && (
            <a
              href={project.post}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-primary transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Post
            </a>
          )}
        </div>

        {/* 4. Case Study Details Stack */}
        <div className="max-w-[800px] mx-auto text-left space-y-12">
          
          {/* Main title & short description subtitle */}
          <div className="space-y-4">
            <div className="flex items-center justify-between w-full border-b border-border-warm/40 pb-4">
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-text-primary font-normal">
                {project.title}
              </h2>
              {renderStatus()}
            </div>
            
            {/* Introductory statement / short description */}
            <p className="font-mono-tag text-[14.5px] font-medium text-text-secondary leading-relaxed select-text">
              {project.description}
            </p>
            
            {/* Long breakdown description */}
            <p className="font-mono-tag text-[13.5px] text-text-secondary/90 leading-relaxed select-text pt-2">
              {project.longDescription}
            </p>
          </div>

          {/* Stack used list */}
          <div className="space-y-4">
            <h3 className="font-serif-editorial text-2xl text-text-primary">Stack used</h3>
            <div className="flex flex-wrap gap-3 select-none">
              {project.techStack.map((tech) => (
                <div 
                  key={tech}
                  className="px-4 py-2 rounded-full border border-border-warm bg-white-warm dark:bg-white-warm/5 flex items-center gap-2"
                >
                  <TechIcon tech={tech} />
                  <span className="font-mono-tag text-[12px] text-text-primary uppercase tracking-wider">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </Container>
    </motion.div>
  );
};
