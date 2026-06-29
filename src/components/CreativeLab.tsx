import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { labItems } from '../data/gallery';
import { revealVariants, revealContainerVariants } from '../hooks/useReveal';

export const CreativeLab: React.FC = () => {
  return (
    <section
      id="creative-lab"
      className="py-20 md:py-24 bg-bg-paper text-text-primary scroll-mt-12 text-left"
    >
      <Container>
        
        {/* Customized Editorial Header Row */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-warm pb-6 select-none"
        >
          <h2 className="font-serif-editorial text-3.5xl sm:text-4xl md:text-5xl text-text-primary max-w-[650px] font-normal leading-[1.15]">
            Artwork, arduino, and other projects I do in my <span className="font-bold text-accent-brown">freetime.</span>
          </h2>
          <a
            href="#contact"
            className="font-mono-tag text-xs font-bold text-text-secondary hover:text-text-primary uppercase tracking-wider shrink-0 cursor-pointer flex items-center space-x-1"
          >
            <span>View all</span>
          </a>
        </motion.div>

        {/* Row Grid of Cards */}
        <motion.div
          variants={revealContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14"
        >
          {labItems.map(item => (
            <motion.div
              key={item.id}
              variants={revealVariants}
              className="group flex flex-col space-y-4 w-full select-none"
            >
              {/* Photo Frame Container */}
              <div className={`w-full ${item.aspectRatio} bg-white-warm border border-border-warm rounded-2xl overflow-hidden relative flex items-center justify-center`}>
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover filter sepia-[4%] contrast-[101%] brightness-[0.98] transition-transform duration-750 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Text Description Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-serif-editorial text-2xl text-text-primary font-normal leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[13px] text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <span className="font-mono-tag text-[9px] font-bold text-accent-brown uppercase tracking-wider border border-border-warm/60 bg-white-warm px-2 py-0.5 rounded shrink-0">
                  {item.category}
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
};
