import React from 'react';

interface RowProps {
  /** Left-hand title - org, project or award */
  title: React.ReactNode;
  /** Right-hand meta - dates, status, year */
  meta?: string;
  /** Line under the title: role, location, degree */
  subtitle?: string;
  children?: React.ReactNode;
}

/**
 * The repeating unit of the whole site: title left, meta right, aligned on the
 * baseline, with whatever belongs underneath.
 */
export const Row: React.FC<RowProps> = ({ title, meta, subtitle, children }) => (
  <article className="group">
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
      <h3 className="text-[13.5px] font-medium tracking-[-0.01em] text-ink sm:text-[14.5px]">
        {title}
      </h3>
      {meta && <span className="font-mono text-[10.5px] text-faint">{meta}</span>}
    </div>

    {subtitle && (
      <p className="mt-0.5 text-[12.5px] text-faint">{subtitle}</p>
    )}

    {children && <div className="mt-2.5">{children}</div>}
  </article>
);
