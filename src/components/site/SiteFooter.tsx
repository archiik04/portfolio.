import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Calendar, FileText } from 'lucide-react';
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
  {
    label: 'Book a call',
    href: 'https://calendly.com/archi_k/youth-mentorship',
    icon: <Calendar className="h-[15px] w-[15px]" />,
  },
];

const ICON = 'text-faint transition-colors duration-300 hover:text-ink';

export const SiteFooter: React.FC = () => (
  <footer id="say-hi" className="scroll-mt-20 pb-8 pt-6 no-print">
    <div className="flex flex-col gap-5 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        {SOCIALS.map(s => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            className={ICON}
          >
            {s.icon}
          </a>
        ))}
        <Link to="/resume" aria-label="Resume" title="Resume" className={ICON}>
          <FileText className="h-[15px] w-[15px]" />
        </Link>
      </div>

      <p className="font-mono text-[10px] text-faint">
        © {new Date().getFullYear()} archi kanungo
      </p>
    </div>

    <a
      href="mailto:archikanungo2004@gmail.com"
      className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] text-muted transition-colors duration-300 hover:text-ink"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
      </span>
      archikanungo2004@gmail.com
    </a>

    <p className="mt-6 text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-ink sm:text-[38px]">
      exploring cool things
    </p>
  </footer>
);
