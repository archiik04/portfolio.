import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Container } from './Container';
import { questsData } from '../data/quests';
import type { QuestItem } from '../data/quests';
import { revealVariants } from '../hooks/useReveal';
import { X, Play, ArrowUpRight } from 'lucide-react';

export const Sidequests: React.FC = () => {
  const navigate = useNavigate();
  const [selectedQuest, setSelectedQuest] = useState<QuestItem | null>(null);

  // Duplicate the quests twice for a seamless infinite loop marquee
  const doubledQuests = [...questsData, ...questsData];

  return (
    <section
      id="quest"
      className="py-20 md:py-24 bg-bg-paper text-text-primary scroll-mt-12 text-left"
    >
      <Container>
        {/* Customized Editorial Header Row */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-border-warm pb-6 select-none"
        >
          <h2 className="font-serif-editorial text-[30px] md:text-[36px] leading-[1.2] font-normal">
            <span className="text-text-secondary block">Artwork, ar/vr, and other</span>
            <span className="text-text-primary">projects I do in <span className="font-bold text-accent-brown">free time.</span></span>
          </h2>
          <button
            onClick={() => navigate('/quest')}
            className="font-mono-tag text-xs font-bold text-text-secondary hover:text-text-primary uppercase tracking-wider shrink-0 cursor-pointer flex items-center space-x-1 border-none bg-transparent"
          >
            <span>View all</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* Infinite Moving Marquee Carousel */}
        <div className="relative mt-14 overflow-hidden">
          {/* Edge Fade Gradients (gives a smooth visual bleed under the margins) */}
          <div className="hidden md:block absolute left-0 top-0 bottom-8 w-24 bg-gradient-to-r from-bg-paper to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-bg-paper to-transparent z-10 pointer-events-none" />

          {/* Marquee Track - slides left infinitely, pauses on hover */}
          <div className="flex gap-8 pb-8 pt-4 w-max animate-marquee hover:[animation-play-state:paused]">
            {doubledQuests.map((item, idx) => (
              <motion.div
                key={`${item.id}-${idx}`}
                // Slower out-of-sync floating waves
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 5.5 + (idx % 3) * 1.2,
                    ease: 'easeInOut',
                  }
                }}
                whileHover={{ 
                  scale: 1.04, 
                  y: -12, // dynamic extra lift on hover
                  transition: { type: "spring", stiffness: 400, damping: 15 } 
                }}
                onClick={() => {
                  if (!item.disablePopup) {
                    setSelectedQuest(item);
                  }
                }}
                className={`h-[310px] md:h-[350px] w-[220px] md:w-[250px] bg-[#E5E3DF] border border-[#DCDAD5] rounded-2xl p-3 pb-8 flex flex-col justify-between flex-shrink-0 shadow-md hover:shadow-lg transition-all duration-300 snap-start ${item.disablePopup ? 'cursor-default' : 'cursor-pointer'}`}
              >
                {/* Polaroid Visual Cover Container */}
                <div className="w-full aspect-[4/5] bg-white-warm/10 rounded-xl overflow-hidden relative border border-white/20 dark:border-white-warm/5">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover filter sepia-[2%] contrast-[101%] brightness-[0.98] select-none pointer-events-none"
                    loading="lazy"
                  />
                  {item.videoUrl && (
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-white-warm/20 backdrop-blur-sm flex items-center justify-center shadow-sm">
                        <Play className="w-4 h-4 text-accent-brown dark:text-white-warm fill-current translate-x-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Polaroid Write-in Space */}
                <div className="flex items-center justify-between px-1 mt-3.5 select-none font-sans">
                  <span className="text-[14.5px] font-bold text-[#251E1C] tracking-tight">
                    {item.title}
                  </span>
                  <span className="font-mono-tag text-[9.5px] font-bold text-[#251E1C]/60 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Quest Writing Modal Popover */}
        <AnimatePresence>
          {selectedQuest && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 sm:p-6"
              onClick={() => setSelectedQuest(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="bg-bg-paper border border-border-warm rounded-3xl w-full max-w-[960px] h-auto md:h-[520px] max-h-[90vh] md:max-h-[85vh] overflow-y-auto md:overflow-y-hidden flex flex-col md:flex-row relative shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                {/* Floating Close Button */}
                <button
                  onClick={() => setSelectedQuest(null)}
                  className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white-warm/90 dark:bg-white-warm/15 text-text-secondary hover:text-text-primary shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Left Column: Media Player / Cover Image */}
                <div className="w-full md:w-1/2 bg-white-warm border-b md:border-b-0 md:border-r border-border-warm relative flex items-center justify-center overflow-hidden aspect-video md:aspect-auto h-[240px] md:h-full shrink-0">
                  {selectedQuest.videoUrl ? (
                    selectedQuest.videoUrl.endsWith('.mp4') || selectedQuest.videoUrl.startsWith('/') ? (
                      <video
                        src={selectedQuest.videoUrl}
                        className="w-full h-full object-cover absolute inset-0"
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <iframe
                        src={selectedQuest.videoUrl}
                        title={selectedQuest.title}
                        className="w-full h-full absolute inset-0 border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )
                  ) : (
                    <img
                      src={selectedQuest.url}
                      alt={selectedQuest.title}
                      className="w-full h-full object-cover select-none"
                    />
                  )}
                </div>

                {/* Right Column: Writing Content */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-visible md:overflow-y-auto text-left h-auto md:h-full">
                  <div className="space-y-5">
                    {/* Meta Row */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono-tag text-[10px] font-bold text-accent-brown uppercase tracking-wider border border-border-warm/60 bg-white-warm/50 px-2.5 py-0.5 rounded dark:bg-white-warm/8 dark:text-accent-brown">
                        {selectedQuest.category}
                      </span>
                    </div>

                    {/* Quest Title */}
                    <h3 className="font-serif-editorial text-[30px] sm:text-[34px] leading-tight text-text-primary font-medium">
                      {selectedQuest.title}
                    </h3>

                    {/* Personal Writing Log */}
                    <p className="font-serif-editorial text-[16px] sm:text-[17.5px] text-text-primary/95 leading-relaxed font-normal whitespace-pre-line border-t border-border-warm/50 pt-5">
                      {selectedQuest.longWriting}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border-warm/30 flex items-center gap-1.5 text-text-secondary text-[11px] font-mono select-none">
                    <span>Freetime Quest Log</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};
