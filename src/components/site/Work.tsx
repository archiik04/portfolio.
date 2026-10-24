import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Section } from './Section';
import { CompanyMark } from './CompanyMark';
import { experiences } from '../../data/experience';

const lower = (s: string) => s.toLowerCase();

export const Work: React.FC = () => {
  // First row starts open so it is obvious the rest expand too
  const [open, setOpen] = useState<Record<string, boolean>>({
    [experiences[0]?.id ?? '']: true,
  });

  const toggle = (id: string) => setOpen(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <Section id="work" label="work" caption="places i've built things.">
      <ol>
        {experiences.map(item => {
          const isOpen = !!open[item.id];

          return (
            <li
              key={item.id}
              className="group border-t border-line/[0.5] py-6 first:border-t-0 first:pt-0"
            >
              <div className="flex gap-4 sm:gap-5">
                <CompanyMark
                  name={item.organization}
                  logo={item.logo}
                  invertOnDark={item.logoInvertOnDark}
                />

                <div className="min-w-0 flex-1">
                  {/* The whole header toggles, so the hit area is the full row */}
                  <button
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`work-${item.id}`}
                    className="flex w-full cursor-pointer flex-col text-left"
                  >
                    <span className="flex w-full flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                      <span className="text-[13.5px] font-medium tracking-[-0.01em] text-ink sm:text-[15px]">
                        {lower(item.organization)}
                      </span>

                      <span className="flex shrink-0 items-center gap-2.5">
                        <span className="font-mono text-[10px] text-faint">
                          {lower(item.duration)}
                        </span>
                        <Plus
                          className={`h-3.5 w-3.5 text-faint transition-all duration-300 ease-out group-hover:text-muted ${
                            isOpen ? 'rotate-45' : 'rotate-0'
                          }`}
                        />
                      </span>
                    </span>

                    <span className="text-[12px] text-muted sm:text-[13px]">
                      {lower(item.role)} <span className="text-faint">|</span>{' '}
                      {lower(item.location)}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`work-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.32, ease: [0.215, 0.61, 0.355, 1] },
                          opacity: { duration: 0.22 },
                        }}
                        className="overflow-hidden"
                      >
                        {item.responsibilities.map((line, i) => (
                          <p
                            key={i}
                            className="mt-2.5 text-[12.5px] leading-[1.65] text-muted/85 sm:text-[13.5px] sm:leading-[1.7]"
                          >
                            {lower(line)}
                          </p>
                        ))}

                        <p className="mt-2.5 font-mono text-[10px] leading-relaxed text-faint">
                          {item.technologies.map(lower).join(' · ')}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
};
