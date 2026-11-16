import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from './Section';
import { galleryItems } from '../../data/gallery';

/**
 * Printed photos rather than a grid: each one sits on a white card with the
 * caption on the lower margin, and the row scrolls sideways off both edges.
 * The card stays white in either theme, which is the point of a polaroid.
 */
export const Gallery: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

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
    <Section id="moments" label="moments">
      <p className="mb-8 max-w-[52ch] text-[13.5px] leading-[1.7] text-muted sm:text-[14.5px]">
        still figuring it out. here is a bit of the way there so far.
      </p>

      {/* Cards run off both edges and fade rather than being cut */}
      <div
        className="-mx-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          [mask-image:linear-gradient(to_right,transparent_0,#000_4%,#000_96%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_right,transparent_0,#000_4%,#000_96%,transparent_100%)]"
      >
        <div className="flex w-max gap-4 px-6">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.src}
              onClick={() => setOpen(i)}
              aria-label={item.caption}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1], delay: (i % 4) * 0.05 }}
              whileHover={{ y: -6 }}
              className="group w-[196px] shrink-0 cursor-zoom-in rounded-[3px] bg-white p-2.5 pb-3 shadow-[0_2px_10px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.06] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(0,0,0,0.22)] sm:w-[224px]"
            >
              <span className="block aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
              </span>

              <span className="mt-3 block px-1 pb-1 text-center font-sans text-[12px] leading-snug text-neutral-800">
                {item.caption}
              </span>
            </motion.button>
          ))}
        </div>
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
