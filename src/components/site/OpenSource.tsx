import React from 'react';
import { Section } from './Section';
import { useOpenSourceContributions } from '../../hooks/useOpenSourceContributions';
import { GITHUB_USERNAME, type ContributionStatus } from '../../data/openSource';

/** Status reads as a word in the right-hand gutter, coloured only when merged. */
const STATUS_TONE: Record<ContributionStatus, string> = {
  Merged: 'text-[#8957E5] dark:text-[#A371F7]',
  Open: 'text-[#1A7F37] dark:text-[#3FB950]',
  Closed: 'text-faint',
};

export const OpenSource: React.FC = () => {
  const { contributions } = useOpenSourceContributions();
  const merged = contributions.filter(c => c.status === 'Merged').length;

  return (
    <Section id="oss" label="open source" caption="patches that landed elsewhere.">
      <p className="mb-8 text-[13px] leading-[1.7] text-muted">
        {contributions.length} pull requests to repositories i don&rsquo;t own, {merged} of them
        merged. pulled live from github.
      </p>

      <div className="space-y-5">
        {contributions.map(item => (
          <a
            key={item.id}
            href={item.prLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <h3 className="text-[13px] text-muted transition-colors group-hover:text-ink sm:text-[13.5px]">
                {item.prTitle.toLowerCase()}
              </h3>
              <span className={`font-mono text-[10px] ${STATUS_TONE[item.status]}`}>
                {item.status.toLowerCase()}
              </span>
            </div>
            <p className="mt-0.5 font-mono text-[10.5px] text-faint">{item.repo}</p>
          </a>
        ))}
      </div>

      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="link-draw mt-8 inline-block font-mono text-[10.5px] text-faint transition-colors hover:text-ink"
      >
        github.com/{GITHUB_USERNAME}
      </a>
    </Section>
  );
};
