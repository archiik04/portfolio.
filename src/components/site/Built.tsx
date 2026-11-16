import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section } from './Section';
import { projects } from '../../data/projects';

/** Stack keys are stored lowercase; these are how they should read on a pill. */
const TECH_LABELS: Record<string, string> = {
  python: 'Python',
  fastapi: 'FastAPI',
  postgresql: 'PostgreSQL',
  pgvector: 'pgvector',
  react: 'React',
  nextjs: 'Next.js',
  unity: 'Unity',
  csharp: 'C#',
  vr: 'VR',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  tailwind: 'Tailwind',
  node: 'Node.js',
  docker: 'Docker',
  redis: 'Redis',
};

const techLabel = (tech: string) =>
  TECH_LABELS[tech.toLowerCase()] ?? tech.charAt(0).toUpperCase() + tech.slice(1);

export const Built: React.FC = () => (
  <Section id="built" label="built" caption="shipped, running, real.">
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {projects.map((project, i) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: i * 0.07 }}
          className="group relative flex flex-col rounded-[14px] border border-line bg-raise p-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-faint/50 hover:bg-raise-hi hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_14px_34px_rgba(0,0,0,0.5)]"
        >
          {/* The card as a whole opens the case study; the links below sit above it */}
          <Link
            to={`/project/${project.id}`}
            aria-label={`${project.title} case study`}
            className="absolute inset-0 z-0 rounded-[14px]"
          />

          <div className="pointer-events-none relative overflow-hidden rounded-[10px] bg-line/[0.3]">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
          </div>

          <div className="pointer-events-none relative px-1.5 pb-1 pt-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[16px] font-medium tracking-[-0.02em] text-ink sm:text-[18px]">
                {project.title}
              </h3>
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </div>

            <p className="mt-2 text-[13px] leading-[1.6] text-muted sm:text-[13.5px]">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <li
                  key={tech}
                  className="rounded-[8px] border border-line px-2.5 py-1 font-sans text-[11.5px] text-muted transition-colors duration-300 group-hover:border-faint/40"
                >
                  {techLabel(tech)}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="font-mono text-[10px] text-faint">
                {project.status.toLowerCase()} · {project.year}
              </span>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw pointer-events-auto relative z-10 font-mono text-[10px] text-faint transition-colors hover:text-ink"
                >
                  source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw pointer-events-auto relative z-10 font-mono text-[10px] text-faint transition-colors hover:text-ink"
                >
                  live
                </a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </Section>
);
