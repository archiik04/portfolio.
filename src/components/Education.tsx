import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { revealVariants } from '../hooks/useReveal';
import kiitLogo from '../assets/kiit.png';

export const Education: React.FC = () => {

  return (
    <section 
      id="education" 
      className="py-20 md:py-24 bg-bg-paper text-text-primary scroll-mt-12 text-left"
    >
      <Container>
        {/* Section Header matching spacing & styling */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <h2 className="font-serif-editorial text-[30px] md:text-[38px] font-medium text-text-primary leading-none">
            Education
          </h2>
        </motion.div>

        {/* Education Item Card styled to match experience blocks */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border border-border-warm bg-white-warm dark:bg-white-warm/5 rounded-2xl p-5 md:p-6.5 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(36,26,23,0.03)] text-left flex items-start gap-4"
        >
          {/* Graduation Badge Icon - Official KIIT Green Logo Image */}
          <div className="w-12 h-12 rounded-xl border border-border-warm/60 flex items-center justify-center bg-white-warm dark:bg-white-warm/8 overflow-hidden flex-shrink-0 relative select-none">
            <img 
              src={kiitLogo} 
              alt="KIIT Logo" 
              className="w-10 h-10 object-contain select-none" 
            />
          </div>

          {/* Details Row */}
          <div className="flex-grow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-sans text-[16px] sm:text-[17px] font-bold text-text-primary leading-tight">
                Kalinga Institute of Industrial Technology (KIIT)
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-text-secondary text-[13.5px] leading-normal font-sans">
                <span>B.Tech (Computer Science & Engineering)</span>
                <span className="text-border-warm">•</span>
                <span className="font-medium text-text-primary">CGPA: 8.14/10</span>
              </div>
            </div>

            <div className="sm:text-right flex flex-col sm:items-end text-text-secondary text-[12px] sm:text-[13px] leading-relaxed font-sans">
              <div className="font-medium text-text-primary">
                Jul. 2023 – Jul. 2027
              </div>
              <div className="mt-1 text-text-secondary/85">
                Bhubaneswar, Odisha
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
