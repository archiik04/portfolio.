import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { GithubActivity } from './GithubActivity';
import { useOpenSourceContributions } from '../../hooks/useOpenSourceContributions';
import { GITHUB_USERNAME, type ContributionStatus } from '../../data/openSource';

const FILTERS: ContributionStatus[] = ['Merged', 'Open', 'Closed'];

/** Status colours the toggle, the only colour in the section. */
const STATUS_TONE: Record<ContributionStatus, string> = {
  Merged: 'text-[#8957E5] dark:text-[#A371F7]',
  Open: 'text-[#1A7F37] dark:text-[#3FB950]',
  Closed: 'text-faint',
};

/** PR number out of the link, so the gutter says something the filter does not. */
const prNumber = (link: string) => {
  const match = link.match(/\/pull\/(\d+)/);
  return match ? `#${match[1]}` : '';
};

export const OpenSource: React.FC = () => {
  const { contributions } = useOpenSourceContributions();
  const [filter, setFilter] = useState<ContributionStatus>('Merged');

  const counts = useMemo(() => {
    const base: Record<ContributionStatus, number> = { Merged: 0, Open: 0, Closed: 0 };
    contributions.forEach(c => { base[c.status] += 1; });
    return base;
  }, [contributions]);

  const visible = useMemo(
    () => contributions.filter(c => c.status === filter),
    [contributions, filter]
  );

  return (
    <Section
      id="oss"
      label="open source"
      aside={
        <div className="inline-flex shrink-0 rounded-[8px] border border-line p-0.5">
          {FILTERS.map(status => {
            const active = filter === status;
            return (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`relative cursor-pointer rounded-[6px] px-2.5 py-1 font-mono text-[10px] transition-colors duration-300 ${
                  active ? 'text-ink' : 'text-faint hover:text-muted'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="oss-filter-pill"
                    className="absolute inset-0 rounded-[6px] bg-line/[0.6]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {status.toLowerCase()}{' '}
                  <span className={active ? STATUS_TONE[status] : 'text-faint'}>
                    {counts[status]}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      }
    >
      {visible.length === 0 ? (
        <p className="py-6 text-[13px] text-faint">nothing {filter.toLowerCase()} right now.</p>
      ) : (
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="space-y-5"
        >
          {visible.map(item => (
            <a
              key={item.id}
              href={item.prLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h3 className="text-[13px] text-muted transition-colors duration-300 group-hover:text-ink sm:text-[13.5px]">
                  {item.prTitle.toLowerCase()}
                </h3>
                <span className="shrink-0 font-mono text-[10px] text-faint">
                  {prNumber(item.prLink)}
                </span>
              </div>
              <p className="mt-0.5 font-mono text-[10.5px] text-faint">{item.repo}</p>
            </a>
          ))}
        </motion.div>
      )}

      <div className="mt-10 border-t border-line pt-7">
        <GithubActivity />
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
