import React from 'react';

interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  children,
  className = ''
}) => {
  return (
    <div
      className={`w-full max-w-[900px] bg-bg-paper border border-border-light rounded-xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.3)] transition-all duration-300 ${className}`}
    >
      {/* Browser bar */}
      <div className="flex items-center px-4 py-3 border-b border-border-light bg-bg-cream/40 select-none">
        <div className="flex space-x-1.5 mr-4">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        </div>
        
        {/* Fake URL bar */}
        <div className="flex-1 max-w-[400px] mx-auto bg-bg-cream/70 dark:bg-neutral-800/40 border border-border-light/60 rounded py-0.5 px-3 text-[10px] text-text-muted text-center font-sans tracking-wide">
          journal.archi.dev
        </div>
      </div>
      
      {/* Content wrapper */}
      <div className="relative p-6 sm:p-8 bg-bg-paper min-h-[450px] md:min-h-[580px] overflow-hidden select-none">
        {children}
      </div>
    </div>
  );
};
