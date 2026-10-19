import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from '../Icons';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/archiik04', icon: <Github className="h-[15px] w-[15px]" /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/archi-kanungo/', icon: <Linkedin className="h-[15px] w-[15px]" /> },
  {
    label: 'X',
    href: 'https://x.com/archi_twt',
    icon: (
      <svg className="h-[13px] w-[13px] fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  { label: 'Email', href: 'mailto:archikanungo2004@gmail.com', icon: <Mail className="h-[15px] w-[15px]" /> },
];

export const SiteFooter: React.FC = () => (
  <footer className="pb-8 pt-6 no-print">
    <div className="flex flex-col gap-5 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        {SOCIALS.map(s => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-faint transition-colors duration-300 hover:text-ink"
          >
            {s.icon}
          </a>
        ))}
      </div>

      <p className="font-mono text-[10px] text-faint">
        © {new Date().getFullYear()} archi kanungo
      </p>
    </div>

    <p className="mt-10 text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-ink sm:text-[38px]">
      building, breaking,
      <br />
      shipping anyway.
    </p>
  </footer>
);
