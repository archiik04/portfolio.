import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from './Section';
import { galleryItems, type GalleryItem } from '../../data/gallery';

type Placed = GalleryItem & { index: number };

/**
 * Column packing from the known aspect ratios. CSS columns strand the last
 * column well short of the others, and plain greedy placement is order
 * dependent, so this does longest-first placement and then a short local
 * search that moves or swaps tiles while it keeps reducing the height spread.
 * Height is measured in units of column width (1 / ratio).
 */
const packColumns = (items: GalleryItem[], count: number): Placed[][] => {
  const placed: Placed[] = items.map((item, index) => ({ ...item, index }));
  const height = (item: Placed) => 1 / item.ratio;
  const total = (column: Placed[]) => column.reduce((sum, i) => sum + height(i), 0);
  const spread = (cols: Placed[][]) => {
    const totals = cols.map(total);
    return Math.max(...totals) - Math.min(...totals);
  };

  // Longest first into whichever column is currently shortest
  const columns: Placed[][] = Array.from({ length: count }, () => []);
  [...placed]
    .sort((a, b) => height(b) - height(a))
    .forEach(item => {
      const totals = columns.map(total);
      columns[totals.indexOf(Math.min(...totals))].push(item);
    });

  // Then nudge: move or swap across columns while the spread keeps shrinking
  for (let pass = 0; pass < 60; pass += 1) {
    const totals = columns.map(total);
    const tall = totals.indexOf(Math.max(...totals));
    const short = totals.indexOf(Math.min(...totals));
    if (tall === short) break;

    let improved = false;
    const best = spread(columns);

    for (let i = 0; i < columns[tall].length && !improved; i += 1) {
      // try moving one tile down to the shortest column
      const moved = columns[tall].splice(i, 1)[0];
      columns[short].push(moved);
      if (spread(columns) < best) {
        improved = true;
      } else {
        columns[short].pop();
        columns[tall].splice(i, 0, moved);
      }

      // otherwise try trading it for one of the shortest column's tiles
      for (let j = 0; j < columns[short].length && !improved; j += 1) {
        const a = columns[tall][i];
        const b = columns[short][j];
        columns[tall][i] = b;
        columns[short][j] = a;
        if (spread(columns) < best) {
          improved = true;
        } else {
          columns[tall][i] = a;
          columns[short][j] = b;
        }
      }
    }

    if (!improved) break;
  }

  // Read top to bottom in the order the data declares
  return columns.map(column => [...column].sort((a, b) => a.index - b.index));
};

/** 2 columns on a phone, 3 from the sm breakpoint up */
const useColumnCount = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 640px)');
    const sync = () => setCount(query.matches ? 3 : 2);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return count;
};

export const Gallery: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  const columnCount = useColumnCount();
  const columns = useMemo(() => packColumns(galleryItems, columnCount), [columnCount]);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpen(current =>
        current === null ? null : (current + delta + galleryItems.length) % galleryItems.length
      ),
    []
  );

  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close, step]);

  const active = open === null ? null : galleryItems[open];

  return (
    <Section id="gallery" label="gallery" caption="pics, mostly unplanned.">
      <div className="flex items-start gap-2">
        {columns.map((column, ci) => (
          <div key={ci} className="flex flex-1 flex-col gap-2">
            {column.map(item => (
              <motion.button
                key={item.src}
                onClick={() => setOpen(item.index)}
                aria-label={item.caption}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
                style={{ aspectRatio: item.ratio }}
                className="group relative w-full cursor-zoom-in overflow-hidden rounded-[6px] bg-raise"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />

                {/* Caption stays out of the way until you ask for it */}
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-1 p-2.5 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-3">
                  <span className="font-mono text-[9px] leading-snug text-white/95 sm:text-[10px]">
                    {item.caption}
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        ))}
      </div>

      {createPortal(
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-10"
            >
              <button
                onClick={close}
                aria-label="close"
                className="absolute right-4 top-4 cursor-pointer rounded-full p-2 text-white/60 transition-colors hover:text-white sm:right-6 sm:top-6"
              >
                <X className="h-5 w-5" />
              </button>

              <button
                onClick={e => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="previous"
                className="absolute left-2 cursor-pointer rounded-full p-2 text-white/60 transition-colors hover:text-white sm:left-6"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={e => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="next"
                className="absolute right-2 cursor-pointer rounded-full p-2 text-white/60 transition-colors hover:text-white sm:right-6"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <motion.figure
                key={active.src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={e => e.stopPropagation()}
                className="flex max-h-full max-w-full flex-col items-center gap-3"
              >
                <img
                  src={active.src}
                  alt={active.caption}
                  className="max-h-[78vh] max-w-full rounded-[8px] object-contain"
                />
                <figcaption className="font-mono text-[10.5px] text-white/70">
                  {active.caption}{' '}
                  <span className="text-white/35">
                    {(open ?? 0) + 1}/{galleryItems.length}
                  </span>
                </figcaption>
              </motion.figure>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </Section>
  );
};
