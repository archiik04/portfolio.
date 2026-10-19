import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from './Section';

const CHANNELS = [
  { label: 'email', value: 'archikanungo2004@gmail.com', href: 'mailto:archikanungo2004@gmail.com' },
  { label: 'github', value: '@archiik04', href: 'https://github.com/archiik04' },
  { label: 'linkedin', value: '@archi-kanungo', href: 'https://www.linkedin.com/in/archi-kanungo/' },
  { label: 'twitter', value: '@archi_twt', href: 'https://x.com/archi_twt' },
  { label: 'call', value: 'calendly.com/archi_k', href: 'https://calendly.com/archi_k/youth-mentorship' },
];

export const SayHi: React.FC = () => (
  <Section id="say-hi" label="say hi" caption="inbox is open.">
    <p className="mb-8 max-w-[52ch] text-[13.5px] leading-[1.75] text-muted">
      drop me a line any time &mdash; about a role, something you&rsquo;re building, or an idea
      you want a second pair of eyes on. i read everything.
    </p>

    <div className="space-y-2.5">
      {CHANNELS.map(c => (
        <div
          key={c.label}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
            {c.label}
          </span>
          <a
            href={c.href}
            target={c.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="link-draw text-[13px] text-muted transition-colors hover:text-ink"
          >
            {c.value}
          </a>
        </div>
      ))}

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-faint">résumé</span>
        <Link
          to="/resume"
          className="link-draw text-[13px] text-muted transition-colors hover:text-ink"
        >
          read it here
        </Link>
      </div>
    </div>
  </Section>
);
