import React from 'react';
import { motion } from 'framer-motion';
import { revealVariants } from '../hooks/useReveal';

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  title,
  subtitle,
  className = ''
}) => {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-14 md:mb-18 text-left space-y-3 ${className}`}
    >
      {/* Space Mono tag label */}
      <span className="font-mono-tag text-xs font-bold uppercase tracking-widest text-text-secondary select-none block">
        // {label}
      </span>
      {/* Instrument Serif editorial heading */}
      <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-text-primary leading-tight font-normal">
        {title}
      </h2>
      {/* Description text */}
      {subtitle && (
        <p className="font-sans text-sm sm:text-base text-text-secondary max-w-[500px] leading-relaxed pt-1">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
