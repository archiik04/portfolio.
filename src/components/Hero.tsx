import React from 'react';
import { motion } from 'framer-motion';
import scrapbookImg from '../assets/scrapbook.png';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-28 bg-bg-paper text-text-primary select-none"
    >
      <div className="w-full px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="mb-5 md:mb-7 space-y-2"
          >
            <h1 className="font-serif-editorial text-[34px] sm:text-[52px] md:text-[68px] leading-[1.05] tracking-[0.06em] text-text-primary">
              hi, im archi
            </h1>
            <p className="font-serif-editorial text-[13px] sm:text-[16px] md:text-[18px] tracking-[0.18em] text-text-secondary">
              engineer. designer. builder.
            </p>
          </motion.div>

          {/* Centered scrapbook collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="w-full relative mx-auto"
          >
            <motion.img
              src={scrapbookImg}
              alt="Scrapbook collage of Archi's work, travel and events"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
              className="w-full h-auto max-h-[50vh] object-contain mx-auto drop-shadow-[0_18px_50px_rgba(36,26,23,0.10)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
