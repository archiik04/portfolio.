import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from './Section';
import { galleryItems } from '../../data/gallery';

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

  // Arrow keys and escape, plus a scroll lock while the lightbox is up
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
      {/* Masonry: every photo keeps its own shape, nothing is cropped */}
      <div className="columns-2 gap-2 sm:columns-3">
        {galleryItems.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setOpen(i)}
            aria-label={item.caption}
            className="group relative mb-2 block w-full cursor-zoom-in overflow-hidden rounded-[6px] bg-raise break-inside-avoid"
          >
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              className="block h-auto w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
            />

            {/* Caption stays out of the way until you ask for it */}
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-x-0 bottom-0 translate-y-1 p-2.5 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-3">
              <span className="font-mono text-[9px] leading-snug text-white/95 sm:text-[10px]">
                {item.caption}
              </span>
            </span>
          </button>
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
