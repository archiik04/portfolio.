import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { ExperienceItem } from '../data/experience';
import { ChevronDown, Briefcase } from 'lucide-react';
import { revealVariants, revealContainerVariants } from '../hooks/useReveal';

const tagContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035, delayChildren: 0.12 }
  }
};

const tagItemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } }
};

interface AccordionRowProps {
  item: ExperienceItem;
  isOpen: boolean;
  isLast: boolean;
  onToggle: () => void;
}

const AccordionRow: React.FC<AccordionRowProps> = ({ item, isOpen, isLast, onToggle }) => {
  // Render custom inline SVG logos matching the screenshot design
  const renderLogo = (id: string) => {
    switch (id) {
      case 'learning-pathways':
        return (
          <img
            src="/learning-pathways-icon.png"
            alt="Learning Pathways"
            className="w-7 h-7 object-contain dark:invert"
          />
        );
      case 'aashdit':
        return (
          <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 100 100" fill="none">
            {/* Stylized A logo in cyan/blue */}
            <path d="M22 72 L45 28 L51 28 L74 72" stroke="#00A3E0" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 57 L62 57" stroke="#00A3E0" strokeWidth="7.5" strokeLinecap="round" />
            {/* Swoosh yellow arc */}
            <path d="M12 70 C 18 55, 34 38, 52 35" stroke="#FFB81C" strokeWidth="7" strokeLinecap="round" />
          </svg>
        );
      case 'canvas8':
        return (
          <svg
            className="w-full px-1"
            style={{ color: 'var(--color-text-primary, #241A17)' }}
            viewBox="0 0 100 100"
            fill="none"
          >
            <defs>
              <pattern id="hatch-8-full" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="1.2" />
              </pattern>
            </defs>
            <text
              x="50%"
              y="56%"
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="16.5"
              fontWeight="900"
              fill="currentColor"
              letterSpacing="-0.2"
            >
              CANVAS<tspan fill="url(#hatch-8-full)" stroke="currentColor" strokeWidth="0.6">8</tspan>
            </text>
          </svg>
        );
      default:
        return <Briefcase className="w-5 h-5 text-text-primary" />;
    }
  };

  const hasDetails = item.responsibilities.length > 0 || item.technologies.length > 0;

  return (
    <motion.div
      layout
      variants={revealVariants}
      className={`group relative w-full text-left py-5 ${!isLast ? 'border-b border-dotted border-border-warm/80' : ''}`}
    >
      {/* 1. Header Accordion Row Toggle */}
      <button
        onClick={hasDetails ? onToggle : undefined}
        className={`w-full flex items-start sm:items-center justify-between gap-4 text-left group select-none ${hasDetails ? 'cursor-pointer' : 'cursor-default'}`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          {/* Logo Badge container */}
          <motion.div
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="relative w-12 h-12 rounded-xl border border-border-warm/60 flex items-center justify-center bg-white-warm dark:bg-white-warm/8 overflow-hidden flex-shrink-0 select-none"
          >
            {renderLogo(item.id)}
          </motion.div>

          {/* Org & Role */}
          <div className="space-y-1">
            <h3 className="font-sans text-[16px] sm:text-[17px] font-bold text-text-primary leading-tight">
              <span
                className="relative inline-block
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:bg-accent-brown
                  after:w-0 group-hover:after:w-full after:transition-all after:duration-300 after:ease-out"
              >
                {item.organization}
              </span>
            </h3>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-sans text-[13.5px] text-text-secondary leading-normal">
                {item.role}
              </span>
            </div>
          </div>
        </div>

        {/* Right Details Timeframe & Chevron */}
        <div className="flex items-center gap-5">
          <div className="text-right font-sans text-[13px] text-text-secondary space-y-0.5 select-text hidden sm:block">
            <p className="font-semibold text-text-primary whitespace-nowrap flex items-center justify-end gap-1.5">
              {item.duration}
            </p>
            <p className="text-[12px] opacity-80">{item.location}</p>
          </div>
          {hasDetails && (
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 rounded-lg bg-bg-paper dark:bg-white-warm/5 text-text-secondary"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </button>

      {/* Mobile Location & Date Row */}
      <div className="mt-3.5 pt-3.5 border-t border-border-warm/50 flex sm:hidden items-center justify-between text-left font-sans text-[12px] text-text-secondary select-text">
        <span className="font-semibold text-text-primary">{item.duration}</span>
        <span>{item.location}</span>
      </div>

      {/* 2. Expandable Accordion Block */}
      <AnimatePresence initial={false}>
        {hasDetails && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: { height: { duration: 0.35, ease: 'easeOut' }, opacity: { duration: 0.25, delay: 0.05 } }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { height: { duration: 0.3, ease: 'easeIn' }, opacity: { duration: 0.2 } }
            }}
            className="overflow-hidden"
          >
            <div className="pt-5 select-text">

              {/* Responsibilities list */}
              <div className="space-y-3.5">
                <ul className="list-disc pl-5 space-y-3 text-[13.5px] leading-relaxed text-text-secondary font-sans">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx}>
                      {/* Bold certain phrases for extra visual layout impact */}
                      {resp.split('; ').map((part, pIdx) => {
                        // Apply custom bold spans if matching the key phrases from screenshot
                        const formattedPart = part
                          .replace(/(semantic document search for enterprise)/gi, '<strong class="font-bold text-text-primary">$1</strong>')
                          .replace(/(3 document types)/gi, '<strong class="font-bold text-text-primary">$1</strong>')
                          .replace(/(10K\+ concurrent documents)/gi, '<strong class="font-bold text-text-primary">$1</strong>')
                          .replace(/(Google's insight voice)/gi, '<strong class="font-bold text-text-primary">$1</strong>')
                          .replace(/(product teams)/gi, '<strong class="font-bold text-text-primary">$1</strong>')
                          .replace(/(Gemini features)/gi, '<strong class="font-bold text-text-primary">$1</strong>')
                          .replace(/(5\+ leadership events)/gi, '<strong class="font-bold text-text-primary">$1</strong>')
                          .replace(/(React)/g, '<strong class="font-bold text-text-primary">$1</strong>')
                          .replace(/(FastAPI)/gi, '<strong class="font-bold text-text-primary">$1</strong>')
                          .replace(/(user flows)/gi, '<strong class="font-bold text-text-primary">$1</strong>')
                          .replace(/(reusable components)/gi, '<strong class="font-bold text-text-primary">$1</strong>');

                        return (
                          <span
                            key={pIdx}
                            dangerouslySetInnerHTML={{ __html: (pIdx > 0 ? '; ' : '') + formattedPart }}
                          />
                        );
                      })}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack / Capabilities Tags Row */}
              <div className="mt-6 pt-5.5 border-t border-border-warm/40">
                <motion.div
                  variants={tagContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-2 select-none"
                >
                  {item.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      variants={tagItemVariants}
                      whileHover={{ y: -2, scale: 1.05 }}
                      className="font-sans text-[11px] font-medium text-text-secondary bg-[#FAF8F4] dark:bg-white-warm/5 px-2.5 py-1 border border-border-warm rounded-lg cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const ExperienceAccordion: React.FC<{ items: ExperienceItem[] }> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null); // Closed by default

  return (
    <motion.div
      variants={revealContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="w-full flex flex-col"
    >
      {items.map((item, idx) => (
        <AccordionRow
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          isLast={idx === items.length - 1}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </motion.div>
  );
};
