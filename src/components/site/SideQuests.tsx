import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Section } from './Section';
import { questsData } from '../../data/quests';

const lower = (s: string) => s.toLowerCase();

/** Card face. Clickable only when there is something to open. */
const QuestCard: React.FC<{ item: (typeof questsData)[number]; inGrid?: boolean }> = ({
  item,
  inGrid,
}) => {
  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-line/[0.3]">
        <img
          src={item.url}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex items-start justify-between gap-3 p-3.5">
        <div className="min-w-0">
          <span className="inline-block rounded-md bg-line/[0.45] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-faint">
            {item.category}
          </span>
          <h3 className="mt-2 text-[13px] font-medium leading-snug tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-accent line-clamp-2">
            {lower(item.title)}
          </h3>
        </div>

        {item.videoUrl && (
          <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
        )}
      </div>
    </>
  );

  const shell = `group overflow-hidden rounded-[10px] border border-line bg-raise transition-colors duration-300 hover:border-faint/50 ${
    inGrid ? '' : 'w-[232px] shrink-0 snap-start sm:w-[258px]'
  }`;

  return item.videoUrl ? (
    <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className={`${shell} block`}>
      {body}
    </a>
  ) : (
    <div className={shell}>{body}</div>
  );
};

export const SideQuests: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section id="side-quests" label="side quests" caption="built because i wanted to.">
      {expanded ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {questsData.map(item => (
            <QuestCard key={item.id} item={item} inGrid />
          ))}
        </div>
      ) : (
        /* Cards bleed to the column edges and fade out rather than being cut */
        <div
          className="-mx-6 [mask-image:linear-gradient(to_right,transparent_0,#000_5%,#000_95%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0,#000_5%,#000_95%,transparent_100%)]"
        >
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {questsData.map(item => (
              <QuestCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-7 flex justify-center">
        <button
          onClick={() => setExpanded(v => !v)}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-[8px] border border-line px-4 py-2 font-mono text-[10.5px] text-muted transition-colors duration-300 hover:border-faint/50 hover:text-ink"
        >
          {expanded ? 'show less' : 'view all'}
          <ArrowUpRight
            className={`h-3 w-3 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </Section>
  );
};
