import React from 'react';

interface CompanyMarkProps {
  name: string;
  logo?: string;
  invertOnDark?: boolean;
}

/** The 36px tile at the head of every work row. Falls back to a monogram. */
export const CompanyMark: React.FC<CompanyMarkProps> = ({ name, logo, invertOnDark }) => (
  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[8px] bg-line/[0.05] border border-line">
    {logo ? (
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className={`h-full w-full object-contain p-1 ${invertOnDark ? 'dark:invert' : ''}`}
      />
    ) : (
      <span className="font-mono text-[13px] font-medium uppercase text-faint">
        {name.trim().charAt(0)}
      </span>
    )}
  </div>
);
