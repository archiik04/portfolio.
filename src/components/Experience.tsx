import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { SectionShell } from './SectionShell';
import { ExperienceAccordion } from './ExperienceAccordion';
import { experiences } from '../data/experience';
import { revealVariants } from '../hooks/useReveal';

export const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-14 md:py-16 bg-bg-paper text-text-primary scroll-mt-12 text-left"
    >
      <Container>
        <SectionShell>
        
        {/* Section Title */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-3 mb-8"
        >
          <h2 className="font-serif-editorial text-[22px] md:text-[32px] font-medium text-text-primary leading-none uppercase tracking-[0.04em]">
            Experiences
          </h2>
          {/* Symmetrical dotted line divider */}
          <div className="w-full h-px border-t border-dotted border-border-warm/80 pt-1" />
        </motion.div>

        {/* Experience Accordion Container */}
        <div className="w-full">
          <ExperienceAccordion items={experiences} />
        </div>

      </SectionShell>
      </Container>
    </section>
  );
};
