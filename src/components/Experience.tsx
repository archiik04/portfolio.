import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { ExperienceAccordion } from './ExperienceAccordion';
import { experiences } from '../data/experience';
import { revealVariants } from '../hooks/useReveal';

export const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-20 md:py-24 bg-bg-paper text-text-primary scroll-mt-12 text-left"
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
            Experiences
          </h2>
        </motion.div>

        {/* Experience Accordion Container */}
        <div className="w-full">
          <ExperienceAccordion items={experiences} />
        </div>

      </Container>
    </section>
  );
};
