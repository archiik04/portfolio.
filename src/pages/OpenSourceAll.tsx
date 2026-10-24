import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useOpenSourceContributions } from '../hooks/useOpenSourceContributions';
import { GITHUB_USERNAME, type ContributionStatus } from '../data/openSource';

const FILTERS: (ContributionStatus | 'All')[] = ['All', 'Merged', 'Open', 'Closed'];

const STATUS_TONE: Record<ContributionStatus, string> = {
  Merged: 'text-ink',
  Open: 'text-muted',
  Closed: 'text-faint',
};

const prNumber = (link: string) => {
  const match = link.match(/\/pull\/(\d+)/);
  return match ? `#${match[1]}` : '';
};

export const OpenSourceAll: React.FC = () => {
  const { contributions } = useOpenSourceContributions();
  const [filter, setFilter] = useState<ContributionStatus | 'All'>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const counts = useMemo(() => {
    const base: Record<string, number> = { All: contributions.length, Merged: 0, Open: 0, Closed: 0 };
    contributions.forEach(c => { base[c.status] += 1; });
    return base;
  }, [contributions]);

  const visible = useMemo(
    () => (filter === 'All' ? contributions : contributions.filter(c => c.status === filter)),
    [contributions, filter]
  );

  /** owner/repo -> rows, so the page reads by project rather than one flat list */
  const byRepo = useMemo(() => {
    const groups = new Map<string, typeof visible>();
    visible.forEach(item => {
      const list = groups.get(item.repo) ?? [];
      list.push(item);
      groups.set(item.repo, list);
    });
    return [...groups.entries()].sort((a, b) => b[1].length - a[1].length);
  }, [visible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-paper text-ink"
    >
      <div className="mx-auto w-full max-w-column px-6 py-14 md:py-20">
        <Link
          to="/#oss"
          className="group inline-flex items-center gap-1.5 font-mono text-[10.5px] text-faint transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-0.5" />
          back
        </Link>

        <div className="mt-7 flex flex-col gap-1 border-t border-line pt-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <h1 className="text-[15px] font-medium tracking-[-0.02em] text-ink sm:text-lg md:text-xl">
            open source
          </h1>
          <p className="font-mono text-[10px] text-faint sm:text-[11px]">
            every pull request, pulled live.
          </p>
        </div>

        <div className="mt-8 inline-flex rounded-[8px] border border-line p-0.5">
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
                    layoutId="oss-page-pill"
                    className="absolute inset-0 rounded-[6px] bg-line/[0.6]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {status.toLowerCase()}{' '}
                  <span
                    className={
                      active && status !== 'All' ? STATUS_TONE[status as ContributionStatus] : 'text-faint'
                    }
                  >
                    {counts[status]}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {byRepo.length === 0 ? (
          <p className="mt-10 text-[13px] text-faint">nothing {String(filter).toLowerCase()} right now.</p>
        ) : (
          <div className="mt-10 space-y-10">
            {byRepo.map(([repo, items]) => (
              <section key={repo}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-line pb-2.5">
                  <a
                    href={`https://github.com/${repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw font-mono text-[11px] text-muted transition-colors hover:text-ink"
                  >
                    {repo}
                  </a>
                  <span className="font-mono text-[10px] text-faint">
                    {items.length} {items.length === 1 ? 'pr' : 'prs'}
                  </span>
                </div>

                <div className="mt-4 space-y-4">
                  {items.map(item => (
                    <a
                      key={item.id}
                      href={item.prLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                        <h2 className="text-[13px] text-muted transition-colors duration-300 group-hover:text-ink sm:text-[13.5px]">
                          {item.prTitle.toLowerCase()}
                        </h2>
                        <span className="flex shrink-0 items-baseline gap-2.5 font-mono text-[10px]">
                          <span className={STATUS_TONE[item.status]}>
                            {item.status.toLowerCase()}
                          </span>
                          <span className="text-faint">{prNumber(item.prLink)}</span>
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="link-draw mt-12 inline-block font-mono text-[10.5px] text-faint transition-colors hover:text-ink"
        >
          github.com/{GITHUB_USERNAME}
        </a>
      </div>
    </motion.div>
  );
};
