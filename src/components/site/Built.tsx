import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from './Section';
import { projects } from '../../data/projects';

const lower = (s: string) => s.toLowerCase();

export const Built: React.FC = () => (
  <Section id="built" label="built" caption="shipped, running, real.">
    <ol>
      {projects.map(project => (
        <li
          key={project.id}
          className="group border-t border-line/[0.5] py-6 first:border-t-0 first:pt-0"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
            <h3 className="text-[13.5px] font-medium tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-accent sm:text-[15px]">
              <Link to={`/project/${project.id}`}>{lower(project.title)}</Link>
            </h3>
            <span className="shrink-0 font-mono text-[10px] text-faint">
              {lower(project.status)} · {project.year}
            </span>
          </div>

          <p className="mt-2.5 text-[12.5px] leading-[1.65] text-muted/85 sm:text-[13.5px] sm:leading-[1.7]">
            {lower(project.description)}
          </p>

          <p className="mt-2.5 font-mono text-[10px] leading-relaxed text-faint">
            {project.techStack.map(lower).join(' · ')}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            <Link
              to={`/project/${project.id}`}
              className="link-draw font-mono text-[10px] text-faint transition-colors hover:text-ink"
            >
              case study
            </Link>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="link-draw font-mono text-[10px] text-faint transition-colors hover:text-ink">
                source
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="link-draw font-mono text-[10px] text-faint transition-colors hover:text-ink">
                live
              </a>
            )}
          </div>
        </li>
      ))}
    </ol>
  </Section>
);
