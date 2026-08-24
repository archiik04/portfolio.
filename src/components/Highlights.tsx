import React from 'react';
import { motion } from 'framer-motion';
import { revealVariants } from '../hooks/useReveal';
import { SectionShell } from './SectionShell';
import { highlightsData } from '../data/highlights';
import { Play, ArrowUpRight } from 'lucide-react';
import { Linkedin } from './Icons';

interface HighlightsProps {
  /** Matches the max-width of the page this section is embedded in */
  maxWidthClassName?: string;
}

export const Highlights: React.FC<HighlightsProps> = ({ maxWidthClassName = 'max-w-[1200px]' }) => {
  return (
    <section
      id="highlights"
      className="py-14 md:py-16 bg-bg-paper text-text-primary scroll-mt-12 text-left"
    >
      <div className={`${maxWidthClassName} mx-auto px-6 sm:px-10 md:px-12 w-full`}>
        <SectionShell>

        {/* Section Title matching other sections */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4 mb-10"
        >
          <h2 className="font-serif-editorial text-[22px] md:text-[32px] font-medium text-text-primary leading-none uppercase tracking-[0.04em]">
            Highlights
          </h2>
          <div className="w-full h-px border-t border-dotted border-border-warm/80 pt-1" />
        </motion.div>

        {/* Auto-scrolling card marquee — pauses on hover */}
        <div
          className="relative -mx-5 sm:-mx-8 md:-mx-12 overflow-hidden
            [mask-image:linear-gradient(to_right,transparent_0,#000_7%,#000_93%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_right,transparent_0,#000_7%,#000_93%,transparent_100%)]"
        >

          <div className="flex items-stretch gap-5 pb-2 pl-5 sm:pl-8 md:pl-12 w-max animate-marquee-slow hover:[animation-play-state:paused]">
            {[...highlightsData, ...highlightsData].map((item, idx) => {
              const CardTag: any = item.link ? motion.a : motion.div;
              const cardProps = item.link
                ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <CardTag
                  key={`${item.id}-${idx}`}
                  {...cardProps}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className={`group relative flex-shrink-0 w-[270px] sm:w-[300px] h-[390px] snap-start rounded-2xl overflow-hidden border border-white/70 dark:border-white/10 bg-white/55 dark:bg-white/[0.05] [backdrop-filter:blur(14px)_saturate(160%)] hover:border-accent-brown/40 hover:shadow-[0_14px_36px_rgba(36,26,23,0.06)] transition-shadow duration-300 flex flex-col ${item.link ? 'cursor-pointer' : ''}`}
                >
                  {/* Thumbnail (video / linked preview) */}
                  {item.thumbnail && (
                    <div className="w-full h-[160px] shrink-0 rounded-t-2xl overflow-hidden relative bg-black/80">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover select-none pointer-events-none"
                        loading="lazy"
                      />
                      {item.isVideo && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-white-warm/20 backdrop-blur-sm flex items-center justify-center shadow-sm">
                            <Play className="w-4 h-4 text-accent-brown dark:text-white-warm fill-current translate-x-0.5" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-5 flex flex-col gap-2.5 flex-1 min-h-0">
                    {/* Meta Row: tag */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tag text-[10px] font-bold text-accent-brown uppercase tracking-wider border border-border-warm/60 bg-[#FAF8F4] dark:bg-white-warm/8 px-2.5 py-0.5 rounded flex items-center gap-1.5">
                        {item.isLinkedIn && <Linkedin className="w-3 h-3" />}
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-[15px] font-bold text-text-primary leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-[13px] text-text-secondary leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    {/* Link label */}
                    {item.link && item.linkLabel && (
                      <div className="mt-auto pt-1.5 flex items-center gap-1 text-[12px] font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                        <span>{item.linkLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                </CardTag>
              );
            })}
          </div>
        </div>

      </SectionShell>
      </div>
    </section>
  );
};
