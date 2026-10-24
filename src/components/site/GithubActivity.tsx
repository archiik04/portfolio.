import React, { useEffect, useState } from 'react';
import { GITHUB_USERNAME } from '../../data/openSource';

interface Day {
  date: string;
  count: number;
  level: number;
}

/** A grey ramp rather than GitHub's greens, to keep the page monochrome. */
const LEVEL_LIGHT = ['#EDEDEE', '#C9C9CC', '#9A9A9E', '#5C5C63', '#1F1F22'];
const LEVEL_DARK = ['#171718', '#2E2E31', '#55555B', '#8A8A92', '#E6E6E8'];

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

/** Legend swatches, keyed by level rather than colour. */
const LEVELS = [0, 1, 2, 3, 4];

const label = (count: number, date: string) => {
  const d = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  if (count === 0) return `no contributions on ${d}`;
  return `${count} contribution${count === 1 ? '' : 's'} on ${d}`;
};

export const GithubActivity: React.FC = () => {
  const [weeks, setWeeks] = useState<(Day | null)[][] | null>(null);
  const [total, setTotal] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    // jogruber's mirror sends CORS headers; GitHub's own GraphQL API needs a token.
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`)
      .then(res => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then(json => {
        if (!active) return;
        const days: Day[] = json?.contributions ?? [];
        if (!days.length) throw new Error('no days');

        // Pad so the first column starts on a Sunday, then chunk into weeks
        const pad = new Date(days[0].date).getDay();
        const cells: (Day | null)[] = [...Array.from({ length: pad }, () => null), ...days];
        const grid: (Day | null)[][] = [];
        for (let i = 0; i < cells.length; i += 7) grid.push(cells.slice(i, i + 7));

        setWeeks(grid);
        setTotal(json?.total?.lastYear ?? days.reduce((n, d) => n + d.count, 0));
      })
      .catch(() => {
        // No invented data here: say nothing rather than show a made-up graph.
        if (active) setFailed(true);
      });

    return () => {
      active = false;
    };
  }, []);

  if (failed) return null;

  if (!weeks) {
    return <p className="font-mono text-[10px] text-faint">loading activity…</p>;
  }

  // One label per month, placed at the week where that month first appears
  const monthMarks: { col: number; text: string }[] = [];
  let seen = -1;
  weeks.forEach((week, col) => {
    const first = week.find(Boolean);
    if (!first) return;
    const m = new Date(first.date).getMonth();
    if (m !== seen) {
      seen = m;
      monthMarks.push({ col, text: MONTHS[m] });
    }
  });

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="font-mono text-[10.5px] text-faint">
          {total.toLocaleString()} contributions in the last year
        </p>
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-faint">
          <span>less</span>
          {LEVELS.map(i => (
            <span
              key={i}
              className="h-[9px] w-[9px] rounded-[2px]"
              style={{ backgroundColor: `var(--gh-${i})` }}
            />
          ))}
          <span>more</span>
        </div>
      </div>

      <div className="mt-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="inline-block min-w-full">
          <div className="relative mb-1 h-3">
            {monthMarks.map(mark => (
              <span
                key={`${mark.text}-${mark.col}`}
                className="absolute top-0 font-mono text-[9px] text-faint"
                style={{ left: `${mark.col * 13}px` }}
              >
                {mark.text}
              </span>
            ))}
          </div>

          <div className="flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }, (_, di) => {
                  const day = week[di];
                  if (!day) return <span key={di} className="h-[10px] w-[10px]" />;
                  return (
                    <span
                      key={di}
                      title={label(day.count, day.date)}
                      className="h-[10px] w-[10px] rounded-[2px]"
                      style={{ backgroundColor: `var(--gh-${day.level})` }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Palette swaps with the theme without re-rendering the grid */}
      <style>{`
        :root {
          ${LEVEL_LIGHT.map((c, i) => `--gh-${i}: ${c};`).join('\n          ')}
        }
        .dark {
          ${LEVEL_DARK.map((c, i) => `--gh-${i}: ${c};`).join('\n          ')}
        }
      `}</style>
    </div>
  );
};
