import React from 'react';

interface SectionProps {
  id: string;
  /** Lowercase section label, e.g. "work" */
  label: string;
  /** Mono micro-caption sitting opposite the label */
  caption: string;
  children: React.ReactNode;
}

/**
 * Every section is the same: a hairline, the label on the left, a small mono
 * caption on the right, then the content. No cards, no boxes.
 */
export const Section: React.FC<SectionProps> = ({ id, label, caption, children }) => (
  <section id={id} className="scroll-mt-20 py-12 md:py-16">
    <div className="mb-9 md:mb-12">
      <div className="flex flex-col gap-1 border-t border-line pt-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h2 className="text-[15px] font-medium tracking-[-0.02em] text-ink sm:text-[17px]">
          {label}
        </h2>
        <p className="font-mono text-[10px] text-faint sm:text-[11px]">{caption}</p>
      </div>
    </div>
    {children}
  </section>
);
