import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Moon, Sun, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { questsData } from '../data/quests';
import type { QuestItem } from '../data/quests';

export const Quest: React.FC = () => {
  const navigate = useNavigate();
  const [selectedQuest, setSelectedQuest] = useState<QuestItem | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-paper text-text-primary transition-colors duration-300 flex flex-col font-sans select-none">
      <div className="max-w-[1200px] w-full mx-auto px-6 sm:px-10 md:px-12 pt-12 pb-24 flex-grow">
        
        {/* Navigation Header */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="p-2.5 rounded-full border border-border-warm bg-white-warm/90 dark:bg-white-warm/15 text-text-secondary hover:text-text-primary transition-all duration-200 cursor-pointer active:scale-90 shadow-sm flex items-center justify-center shrink-0"
              aria-label="Back to home page"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <h1 className="font-serif-editorial text-[25px] sm:text-[28px] text-text-primary font-normal leading-none translate-y-[-1.5px] select-none">
              Quest Logs
            </h1>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-border-warm bg-white-warm/90 dark:bg-white-warm/15 text-text-secondary hover:text-text-primary transition-all duration-200 cursor-pointer active:scale-90 shadow-sm"
              aria-label="Toggle color theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Separator Divider */}
        <div className="w-full h-px border-t border-dashed border-border-warm/80 my-6" />

        {/* Bento Grid Layout */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-left">
          {questsData.map((item, index) => {
            // Determine grid span based on index to create a repeating checkerboard pattern
            // Index 0: 1 col, 1 row (square)
            // Index 1: 2 col, 1 row (wide)
            // Index 2: 2 col, 1 row (wide)
            // Index 3: 1 col, 1 row (square)
            const isWide = index % 4 === 1 || index % 4 === 2;
            const cursorClass = item.disablePopup ? 'cursor-default' : 'cursor-pointer';

            if (!isWide) {
              return (
                <motion.div
                  key={item.id}
                  whileHover={item.disablePopup ? {} : { scale: 1.015, y: -4 }}
                  onClick={() => {
                    if (!item.disablePopup) setSelectedQuest(item);
                  }}
                  className={`col-span-1 h-[350px] md:h-[380px] relative overflow-hidden rounded-3xl border border-white/30 dark:border-white-warm/10 bg-white/40 dark:bg-white-warm/5 backdrop-blur-md shadow-lg group ${cursorClass}`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover filter sepia-[2%] contrast-[101%] brightness-[0.9] select-none transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Bottom Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 select-none">
                    <span className="font-mono text-[9px] text-white/70 tracking-wider uppercase mb-1.5">
                      {item.category}
                    </span>
                    <h3 className="font-serif-editorial text-[24px] text-white leading-tight font-medium">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            } else {
              const isImageLeft = index % 4 === 2;
              return (
                <motion.div
                  key={item.id}
                  whileHover={item.disablePopup ? {} : { scale: 1.015, y: -4 }}
                  onClick={() => {
                    if (!item.disablePopup) setSelectedQuest(item);
                  }}
                  className={`col-span-1 md:col-span-2 h-auto md:h-[380px] overflow-hidden rounded-3xl border border-white/30 dark:border-white-warm/10 bg-white/40 dark:bg-white-warm/5 backdrop-blur-md shadow-lg p-6 sm:p-8 flex flex-col md:flex-row justify-between gap-6 group ${cursorClass}`}
                >
                  {isImageLeft && (
                    <div className="w-full md:w-1/2 h-[160px] md:h-full rounded-2xl overflow-hidden border border-white/20 dark:border-white-warm/5 relative order-last md:order-first">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover filter sepia-[2%] contrast-[101%] brightness-[0.98] select-none transition-transform duration-700 group-hover:scale-103"
                      />
                    </div>
                  )}

                  {/* Content block */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between text-left h-full select-none">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[11.5px] text-text-secondary font-mono">
                        <span>{item.category}</span>
                      </div>
                      <h3 className="font-serif-editorial text-[26px] text-text-primary leading-tight font-medium group-hover:text-accent-brown transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[13.5px] text-text-secondary leading-relaxed font-sans line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {!item.disablePopup && (
                      <div className="flex items-center gap-1 text-[12px] font-sans font-medium text-text-secondary group-hover:text-text-primary transition-colors mt-4">
                        <span>Read log entry</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    )}
                  </div>

                  {!isImageLeft && (
                    <div className="w-full md:w-1/2 h-[160px] md:h-full rounded-2xl overflow-hidden border border-white/20 dark:border-white-warm/5 relative">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover filter sepia-[2%] contrast-[101%] brightness-[0.98] select-none transition-transform duration-700 group-hover:scale-103"
                      />
                    </div>
                  )}
                </motion.div>
              );
            }
          })}
        </main>

        {/* Detailed Modal popup */}
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
                {/* Close button */}
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

      </div>
    </div>
  );
};
