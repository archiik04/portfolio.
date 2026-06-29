import React from 'react';
import { motion } from 'framer-motion';

export type StickyNoteColor = 'yellow' | 'pink' | 'blue';

interface StickyNoteProps {
  color?: StickyNoteColor;
  children: React.ReactNode;
  rotation?: number;
  className?: string;
}

export const StickyNote: React.FC<StickyNoteProps> = ({
  color = 'yellow',
  children,
  rotation = 2,
  className = ''
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'pink':
        return 'bg-sticky-pink text-pink-900 border-pink-200/50 dark:border-pink-950/20';
      case 'blue':
        return 'bg-sticky-blue text-sky-900 border-sky-200/50 dark:border-sky-950/20';
      case 'yellow':
      default:
        return 'bg-sticky-yellow text-yellow-900 border-yellow-200/50 dark:border-yellow-950/20';
    }
  };

  return (
    <motion.div
      style={{ rotate: rotation }}
      className={`p-6 w-48 shadow-[3px_6px_10px_rgba(0,0,0,0.06)] border rounded-[2px] transition-colors duration-300 font-handwritten relative text-xl select-none ${getColorClasses()} ${className}`}
      whileHover={{
        scale: 1.03,
        boxShadow: '5px 10px 15px rgba(0,0,0,0.1)',
        rotate: rotation > 0 ? rotation + 1 : rotation - 1,
        transition: { type: 'spring' as const, stiffness: 300, damping: 20 }
      }}
    >
      {/* Tape mockup at top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2.5 w-16 h-5 bg-tape border border-border-light/10 transform rotate-1 opacity-70"
        style={{
          backdropFilter: 'blur(1px)',
          clipPath: 'polygon(5% 0%, 95% 2%, 100% 90%, 92% 100%, 8% 95%, 0% 90%)'
        }}
      />
      {/* Subtle lined pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-transparent" />
      
      <div className="relative z-10 space-y-1 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};
