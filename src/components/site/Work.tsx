import React from 'react';
import { Section } from './Section';
import { CompanyMark } from './CompanyMark';
import { experiences } from '../../data/experience';

const lower = (s: string) => s.toLowerCase();

export const Work: React.FC = () => (
  <Section id="work" label="work" caption="places i've built things.">
    <ol>
      {experiences.map(item => (
        <li
          key={item.id}
          className="group border-t border-line/[0.5] py-6 first:border-t-0 first:pt-0"
        >
          <div className="flex gap-4 sm:gap-5">
            <CompanyMark name={item.organization} logo={item.logo} />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h3 className="text-[13.5px] font-medium tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-accent sm:text-[15px]">
                  {lower(item.organization)}
                </h3>
                <span className="shrink-0 font-mono text-[10px] text-faint">
                  {lower(item.duration)}
                </span>
              </div>

              <p className="text-[12px] text-muted sm:text-[13px]">
                {lower(item.role)} <span className="text-faint">|</span> {lower(item.location)}
              </p>

              {item.responsibilities.map((line, i) => (
                <p
                  key={i}
                  className="mt-2.5 text-[12.5px] leading-[1.65] text-muted/85 sm:text-[13.5px] sm:leading-[1.7]"
                >
                  {lower(line)}
                </p>
              ))}

              <p className="mt-2.5 font-mono text-[10px] leading-relaxed text-faint">
                {item.technologies.map(lower).join(' · ')}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);
