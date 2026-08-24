import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { SectionShell } from './SectionShell';
import { revealVariants } from '../hooks/useReveal';
import kiitLogo from '../assets/kiit.png';

export const Education: React.FC = () => {

  return (
    <section 
      id="education" 
      className="py-14 md:py-16 bg-bg-paper text-text-primary scroll-mt-12 text-left"
    >
      <Container>
        <SectionShell>
        {/* Section Header matching spacing & styling */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-3 mb-8"
        >
          <h2 className="font-serif-editorial text-[22px] md:text-[32px] font-medium text-text-primary leading-none uppercase tracking-[0.04em]">
            Education
          </h2>
          {/* Symmetrical dotted line divider */}
          <div className="w-full h-px border-t border-dotted border-border-warm/80 pt-1" />
        </motion.div>

        {/* Education Item Card styled to match experience blocks */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="group py-4 text-left flex items-start gap-4"
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
                <span
                  className="relative inline-block
                    after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:bg-accent-brown
                    after:w-0 group-hover:after:w-full after:transition-all after:duration-300 after:ease-out"
                >
                  Kalinga Institute of Industrial Technology (KIIT)
                </span>
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-text-secondary text-[13.5px] leading-normal font-sans">
                <span>B.Tech (Computer Science & Engineering)</span>
                <span className="text-border-warm">•</span>
                <span className="font-medium text-text-primary">CGPA: 8.19/10</span>
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
      </SectionShell>
      </Container>
    </section>
  );
};
