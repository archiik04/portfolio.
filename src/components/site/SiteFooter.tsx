import React from 'react';

export const SiteFooter: React.FC = () => (
  <footer className="border-t border-line py-10 no-print">
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
      <p className="font-mono text-[10.5px] text-faint">
        © {new Date().getFullYear()} archi kanungo
      </p>
      <p className="font-mono text-[10.5px] text-faint">
        building, breaking, shipping.
      </p>
    </div>
  </footer>
);
