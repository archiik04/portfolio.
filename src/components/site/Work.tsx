import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { CompanyMark } from './CompanyMark';
import { experiences } from '../../data/experience';

const lower = (s: string) => s.toLowerCase();

/** Rows arrive one after another as the section comes into view */
const LIST = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const ROW = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

export const Work: React.FC = () => (
  <Section id="work" label="work" caption="places i've built things.">
    <motion.ol
      variants={LIST}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {experiences.map(item => (
        <motion.li
          key={item.id}
          variants={ROW}
          className="group relative border-t border-line/[0.5] py-6 first:border-t-0 first:pt-0"
        >
          {/* A rule grows down the left edge while the row is hovered */}
          <span className="pointer-events-none absolute -left-4 top-6 h-0 w-px bg-ink/25 transition-all duration-500 ease-out group-first:top-0 group-hover:h-[calc(100%-3rem)] group-hover:group-first:h-[calc(100%-1.5rem)]" />

          <div className="flex gap-4 sm:gap-5">
            <div className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.06]">
              <CompanyMark
                name={item.organization}
                logo={item.logo}
                invertOnDark={item.logoInvertOnDark}
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h3 className="text-[13.5px] font-medium tracking-[-0.01em] text-ink transition-transform duration-300 ease-out group-hover:translate-x-0.5 sm:text-[15px]">
                  {lower(item.organization)}
                </h3>
                <span className="shrink-0 font-mono text-[10px] text-faint transition-colors duration-300 group-hover:text-muted">
                  {lower(item.duration)}
                </span>
              </div>

              <p className="text-[12px] text-muted sm:text-[13px]">
                {lower(item.role)} <span className="text-faint">|</span> {lower(item.location)}
              </p>

              {item.responsibilities.map((line, i) => (
                <p
                  key={i}
                  className="mt-2.5 text-[12.5px] leading-[1.65] text-muted/85 transition-colors duration-300 group-hover:text-muted sm:text-[13.5px] sm:leading-[1.7]"
                >
                  {lower(line)}
                </p>
              ))}

              <p className="mt-2.5 font-mono text-[10px] leading-relaxed text-faint transition-colors duration-300 group-hover:text-muted">
                {item.technologies.map(lower).join(' · ')}
              </p>
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  </Section>
);
