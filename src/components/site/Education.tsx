import React from 'react';
import { Section } from './Section';
import { CompanyMark } from './CompanyMark';
import kiitLogo from '../../assets/kiit.png';

export const Education: React.FC = () => (
  <Section id="education" label="education">
    <div className="flex gap-4 sm:gap-5">
      <CompanyMark name="Kalinga Institute of Industrial Technology" logo={kiitLogo} />

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
          <h3 className="text-[13.5px] font-medium tracking-[-0.01em] text-ink sm:text-[15px]">
            kalinga institute of industrial technology
          </h3>
          <span className="shrink-0 font-mono text-[10px] text-faint">jul 2023 - jul 2027</span>
        </div>

        <p className="text-[12px] text-muted sm:text-[13px]">
          b.tech, computer science &amp; engineering{' '}
          <span className="text-faint">|</span> bhubaneswar, india
        </p>

        <p className="mt-2.5 text-[12.5px] leading-[1.65] text-muted/85 sm:text-[13.5px] sm:leading-[1.7]">
          cgpa 8.19 / 10
        </p>
      </div>
    </div>
  </Section>
);
