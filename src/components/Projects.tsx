import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { revealContainerVariants, revealVariants } from '../hooks/useReveal';

export const Projects: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="py-20 md:py-24 bg-bg-paper text-text-primary scroll-mt-12"
    >
      <Container>
        
        {/* Section Title */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <h2 className="font-serif-editorial text-[30px] md:text-[38px] font-medium text-text-primary leading-none">
            Projects
          </h2>
        </motion.div>

        {/* 2x2 Projects Grid */}
        <motion.div
          variants={revealContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={revealVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Centered "View All ↗" button wrapper */}
        <motion.div 
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-12 select-none"
        >
          <a
            href="https://github.com/archiik04"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl border border-border-warm bg-white-warm dark:bg-white-warm/5 text-text-secondary hover:text-text-primary font-sans font-medium text-[13.5px] flex items-center gap-1.5 shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
          >
            View All ↗
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
