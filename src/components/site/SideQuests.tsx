import React, { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Section } from './Section';
import { questsData } from '../../data/quests';
import { highlightsData } from '../../data/highlights';

const lower = (s: string) => s.toLowerCase();

interface Card {
  id: string;
  src?: string;
  tag: string;
  title: string;
  href?: string;
}

/** Quests and highlights share a card shape, so one track can carry both. */
const useCards = (): Card[] =>
  useMemo(
    () => [
      ...questsData.map(q => ({
        id: q.id,
        src: q.url,
        tag: q.category,
        title: q.title,
        href: q.videoUrl,
      })),
      ...highlightsData.map(h => ({
        id: h.id,
        src: h.thumbnail,
        tag: h.tag,
        title: h.title,
        href: h.link,
      })),
    ],
    []
  );

const QuestCard: React.FC<{ item: Card; inGrid?: boolean }> = ({ item, inGrid }) => {
  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-line/[0.3]">
        {item.src && (
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
        )}
      </div>

      <div className="flex items-start justify-between gap-3 p-3.5">
        <div className="min-w-0">
          <span className="inline-block rounded-md bg-line/[0.45] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-faint transition-colors duration-300 group-hover:text-muted">
            {item.tag}
          </span>
          <h3 className="mt-2 line-clamp-2 text-[13px] font-medium leading-snug tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-accent">
            {lower(item.title)}
          </h3>
        </div>

        {item.href && (
          <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
        )}
      </div>
    </>
  );

  const shell = `group overflow-hidden rounded-[10px] border border-line bg-raise transition-all duration-300 ease-out hover:-translate-y-1 hover:border-faint/60 hover:bg-raise-hi hover:shadow-[0_10px_28px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)] ${
    inGrid ? '' : 'w-[232px] shrink-0 sm:w-[258px]'
  }`;

  return item.href ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={`${shell} block`}>
      {body}
    </a>
  ) : (
    <div className={shell}>{body}</div>
  );
};

export const SideQuests: React.FC = () => {
  const cards = useCards();
  const [expanded, setExpanded] = useState(false);

  return (
    <Section id="side-quests" label="side quests" caption="builds, wins and detours.">
      {expanded ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {cards.map(item => (
            <QuestCard key={item.id} item={item} inGrid />
          ))}
        </div>
      ) : (
        /* Track runs on its own and holds still while you are reading a card */
        <div
          className="group/track -mx-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,#000_5%,#000_95%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0,#000_5%,#000_95%,transparent_100%)]"
        >
          <div className="flex w-max gap-3 px-3 pb-1 animate-marquee group-hover/track:[animation-play-state:paused] motion-reduce:animate-none">
            {[...cards, ...cards].map((item, i) => (
              <QuestCard key={`${item.id}-${i}`} item={item} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-7 flex justify-center">
        <button
          onClick={() => setExpanded(v => !v)}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-[8px] border border-line px-4 py-2 font-mono text-[10.5px] text-muted transition-colors duration-300 hover:border-faint/50 hover:text-ink"
        >
          {expanded ? 'show less' : `view all ${cards.length}`}
          <ArrowUpRight
            className={`h-3 w-3 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </Section>
  );
};
