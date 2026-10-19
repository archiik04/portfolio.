import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, Calendar, FileText } from 'lucide-react';
import { Section } from './Section';

const CARDS = [
  {
    title: "let's work together",
    blurb:
      'drop me a line any time. open to internships, new-grad roles, and conversations about things worth building.',
    meta: 'archikanungo2004@gmail.com',
    icon: Mail,
    href: 'mailto:archikanungo2004@gmail.com',
    external: false,
  },
  {
    title: 'book a slot',
    blurb:
      'easier over a call? grab twenty minutes and we can talk through the role, the project, or whatever you are stuck on.',
    meta: 'calendly.com/archi_k',
    icon: Calendar,
    href: 'https://calendly.com/archi_k/youth-mentorship',
    external: true,
  },
];

export const SayHi: React.FC = () => (
  <Section id="say-hi" label="say hi" caption="shortest path in.">
    <div>
      {CARDS.map(card => {
        const Icon = card.icon;
        return (
          <div key={card.title} className="border-t border-line/[0.5] py-6 first:border-t-0 first:pt-0">
            <a
              href={card.href}
              target={card.external ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-5"
            >
              <div className="min-w-0">
                <h3 className="text-[17px] font-medium tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-accent sm:text-[22px]">
                  {card.title}
                </h3>
                <p className="mt-1.5 max-w-[52ch] text-[12.5px] leading-[1.6] text-muted sm:text-[13.5px] sm:leading-[1.65]">
                  {card.blurb}
                </p>
                <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-faint">
                  <Icon className="h-3 w-3" />
                  {card.meta}
                </div>
              </div>
              <ArrowUpRight className="mt-1.5 h-4 w-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </a>
          </div>
        );
      })}

      <div className="border-t border-line/[0.5] py-6">
        <Link to="/resume" className="group flex items-start justify-between gap-5">
          <div className="min-w-0">
            <h3 className="text-[17px] font-medium tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-accent sm:text-[22px]">
              read the résumé
            </h3>
            <p className="mt-1.5 max-w-[52ch] text-[12.5px] leading-[1.6] text-muted sm:text-[13.5px] sm:leading-[1.65]">
              the same story on one page, if that is faster for you.
            </p>
            <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-faint">
              <FileText className="h-3 w-3" />
              archi kanungo, résumé
            </div>
          </div>
          <ArrowUpRight className="mt-1.5 h-4 w-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
        </Link>
      </div>
    </div>
  </Section>
);
