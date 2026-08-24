import React from 'react';

interface SectionShellProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Frosted-glass panel that wraps a section's content.
 * Translucent so the page texture shows through, blurred and saturated behind.
 */
export const SectionShell: React.FC<SectionShellProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[28px] md:rounded-[36px]
        px-5 sm:px-8 md:px-12 py-10 md:py-14
        [backdrop-filter:blur(28px)_saturate(180%)]
        border border-white/80 bg-white/30
        shadow-[0_10px_40px_rgba(36,26,23,0.12),inset_0_1px_2px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(255,255,255,0.6)]
        dark:border-white/10 dark:bg-white/[0.055]
        dark:shadow-[0_18px_60px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.09)]
        ${className}`}
    >
      {/* Sheen: catches light in the top-left like a pane of glass */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[28px] md:rounded-[36px]
          bg-[radial-gradient(120%_90%_at_0%_0%,rgba(255,255,255,0.6)_0%,transparent_58%)]
          dark:bg-[radial-gradient(120%_90%_at_0%_0%,rgba(255,255,255,0.07)_0%,transparent_58%)]"
      />
      <div className="relative">{children}</div>
    </div>
  );
};
