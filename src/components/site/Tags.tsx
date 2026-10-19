import React from 'react';

/** A technology list, rendered as one quiet mono line rather than chips. */
export const Tags: React.FC<{ items: string[] }> = ({ items }) => (
  <p className="mt-2.5 font-mono text-[10.5px] leading-relaxed text-faint">
    {items.join(' · ')}
  </p>
);
