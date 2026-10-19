import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from './Section';
import { Row } from './Row';
import { Tags } from './Tags';
import { projects } from '../../data/projects';

const lower = (s: string) => s.toLowerCase();

export const Built: React.FC = () => (
  <Section id="built" label="built" caption="shipped, running, real.">
    <div className="space-y-9">
      {projects.map(project => (
        <Row
          key={project.id}
          title={
            <Link to={`/project/${project.id}`} className="link-draw">
              {lower(project.title)}
            </Link>
          }
          meta={`${lower(project.status)} · ${project.year}`}
        >
          <p className="text-[13px] leading-[1.7] text-muted">{lower(project.description)}</p>

          <Tags items={project.techStack.map(lower)} />

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            <Link
              to={`/project/${project.id}`}
              className="link-draw font-mono text-[10.5px] text-faint transition-colors hover:text-ink"
            >
              case study
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw font-mono text-[10.5px] text-faint transition-colors hover:text-ink"
              >
                source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw font-mono text-[10.5px] text-faint transition-colors hover:text-ink"
              >
                live
              </a>
            )}
          </div>
        </Row>
      ))}
    </div>
  </Section>
);
