import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { TechIcon } from './TechIcons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Render status badge based on project status
  const renderStatus = () => {
    const baseClass = "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-border-warm bg-white-warm dark:bg-white-warm/8 text-text-secondary font-sans font-medium text-[12px] shadow-sm";
    switch (project.status) {
      case 'Live':
        return (
          <span className={baseClass}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </span>
        );
      case 'Building':
        return (
          <span className={baseClass}>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            Building
          </span>
        );
      case 'Not Started':
      default:
        return (
          <span className={baseClass}>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            Not Started
          </span>
        );
    }
  };

  return (
    <Link
      to={`/project/${project.id}`}
      className="group block w-full select-none text-left"
    >
      <div className="w-full border border-border-warm rounded-3xl p-6 bg-white-warm/25 dark:bg-white-warm/5 flex flex-col space-y-5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:border-text-secondary/20 transition-all duration-300">
        
        {/* 1. Graphic display with subtle screenshot background */}
        <div className="w-full aspect-[1.5] bg-[#FAF8F4] dark:bg-bg-paper border border-border-warm/60 rounded-2xl overflow-hidden relative flex items-center justify-center p-4">
          
          {/* Screenshot Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain rounded-xl filter sepia-[3%] contrast-[101%] brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />


        </div>

        {/* 2. Title & Status Line */}
        <div className="flex items-center justify-between">
          <h3 className="font-serif-editorial text-2xl text-text-primary font-normal leading-tight group-hover:text-accent-brown transition-colors">
            {project.title}
          </h3>
          {renderStatus()}
        </div>

        {/* 3. Description text */}
        <p className="font-mono-tag text-[13px] text-text-secondary leading-relaxed line-clamp-2 h-10 select-text">
          {project.description}
        </p>

        {/* 4. Footer line: Tech Stack + View Project link */}
        <div className="flex items-center justify-between pt-2 border-t border-border-warm/40">
          
          {/* Tech Stack icons */}
          <div className="flex items-center space-x-2">
            {project.techStack.map((tech) => (
              <TechIcon key={tech} tech={tech} />
            ))}
          </div>

          {/* Nav Link */}
          <span className="font-sans text-[13px] font-medium text-text-primary hover:underline flex items-center gap-1">
            View Project ↗
          </span>

        </div>

      </div>
    </Link>
  );
};
