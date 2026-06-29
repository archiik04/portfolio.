import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { revealVariants } from '../hooks/useReveal';

export const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="py-32 md:py-40 bg-[#241A17] text-[#F8F6F2] scroll-mt-12 text-center relative overflow-hidden"
    >
      <Container>
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[850px] mx-auto relative py-12 flex flex-col items-center space-y-12"
        >
          
          {/* 1. Floating Pill Tags surrounding the Headline (Hidden on small screens) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden sm:block">
            
            {/* Tag 1 (Top-Left) */}
            <div className="absolute left-[8%] top-[10%] border border-[#F8F6F2]/30 text-[#F8F6F2]/80 text-[11px] font-sans font-medium px-4 py-1.5 rounded-full select-none rotate-[-6deg]">
              AI Runtimes
            </div>

            {/* Tag 2 (Left-Center) */}
            <div className="absolute left-[5%] top-[55%] border border-[#F8F6F2]/30 text-[#F8F6F2]/80 text-[11px] font-sans font-medium px-4 py-1.5 rounded-full select-none rotate-[4deg]">
              Open Source
            </div>

            {/* Tag 3 (Bottom-Center) */}
            <div className="absolute left-[44%] top-[98%] border border-[#F8F6F2]/30 text-[#F8F6F2]/80 text-[11px] font-sans font-medium px-4 py-1.5 rounded-full select-none">
              Systems Architecture
            </div>

            {/* Tag 4 (Top-Right) */}
            <div className="absolute right-[8%] top-[12%] border border-[#F8F6F2]/30 text-[#F8F6F2]/80 text-[11px] font-sans font-medium px-4 py-1.5 rounded-full select-none rotate-[5deg]">
              Frontend Design
            </div>

            {/* Tag 5 (Right-Center) */}
            <div className="absolute right-[12%] top-[60%] border border-[#F8F6F2]/30 text-[#F8F6F2]/80 text-[11px] font-sans font-medium px-4 py-1.5 rounded-full select-none rotate-[-8deg]">
              Creative Lab
            </div>

          </div>

          {/* 2. Headline Title (Instrument Serif) */}
          <div className="space-y-2 z-20 select-none">
            <h2 className="font-serif-editorial text-5xl sm:text-6xl md:text-[76px] font-normal leading-[1.1] text-[#F8F6F2]">
              Let's make some
            </h2>
            <h2 className="font-serif-editorial text-5xl sm:text-6xl md:text-[76px] font-normal leading-[1.1] text-[#F8F6F2] italic tracking-tight">
              magic happen.
            </h2>
          </div>

          {/* 3. Subheadings & descriptive copy with inline underlines */}
          <div className="space-y-6 max-w-[580px] mx-auto z-20 leading-relaxed font-sans text-sm sm:text-base text-[#F8F6F2]/85">
            <p>
              Nothing great is ever built alone, so why not make the next big thing together?
            </p>
            
            <p className="pt-2 text-xs sm:text-sm">
              Feel free to reach out to me personally via{' '}
              <a 
                href="mailto:archikanungo2004@gmail.com" 
                className="underline underline-offset-4 decoration-[#F8F6F2]/40 hover:text-white transition-colors cursor-pointer"
              >
                sending a message
              </a>
              , or{' '}
              <a 
                href="#contact" 
                className="underline underline-offset-4 decoration-[#F8F6F2]/40 hover:text-white transition-colors cursor-pointer"
              >
                schedule a time
              </a>{' '}
              to say hello.
            </p>
          </div>

        </motion.div>
      </Container>
    </section>
  );
};
