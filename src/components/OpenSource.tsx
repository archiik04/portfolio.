import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { SectionTitle } from './SectionTitle';
import { contributions, contributionActivity } from '../data/openSource';
import { revealVariants, revealContainerVariants } from '../hooks/useReveal';
import { GitMerge, ExternalLink, Calendar } from 'lucide-react';

export const OpenSource: React.FC = () => {
  // Map cell commit density to warm brown tones
  const getHeatmapColor = (value: number) => {
    switch (value) {
      case 4:
        return 'bg-accent-brown border-accent-brown/85 shadow-[0_0_2px_rgba(74,47,37,0.2)]';
      case 3:
        return 'bg-accent-brown/70 border-accent-brown/50';
      case 2:
        return 'bg-accent-brown/45 border-accent-brown/30';
      case 1:
        return 'bg-accent-brown/20 border-accent-brown/15';
      case 0:
      default:
        return 'bg-bg-paper border-border-warm';
    }
  };

  return (
    <section 
      id="open-source" 
      className="py-20 md:py-24 bg-bg-paper text-text-primary scroll-mt-12"
    >
      <Container>
        
        {/* Section title */}
        <SectionTitle
          label="OPEN SOURCE"
          title="Upstream contributions to core animation libraries and spatial engines."
          subtitle="Maintaining and publishing logic blocks to Framer Motion, Three.js, and browser APIs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-14 items-start text-left">
          
          {/* Left Side: Heatmap (Spans 4 cols on lg screens) */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-4 bg-white-warm border border-border-warm rounded-2xl p-6 space-y-6 shadow-[0_4px_20px_rgba(36,26,23,0.01)]"
          >
            <div className="space-y-1">
              <h3 className="font-serif-editorial text-2xl font-normal text-text-primary">
                Upstream Activity
              </h3>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Commit logs and pull request merges across upstream projects over the last 12 weeks.
              </p>
            </div>

            {/* Heatmap Grid */}
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between font-mono-tag text-[9px] text-text-secondary font-bold uppercase tracking-wider select-none">
                <span>12 Weeks ago</span>
                <span>Active</span>
              </div>
              
              <div className="flex space-x-1.5 justify-center py-2 select-none">
                {contributionActivity.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col space-y-1.5">
                    {week.map((cell, cIdx) => (
                      <div
                        key={cIdx}
                        className={`w-3.5 h-3.5 rounded border transition-all duration-300 ${getHeatmapColor(cell)}`}
                        title={`Activity level: ${cell}`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end space-x-2 text-[9px] font-mono-tag font-bold text-text-secondary uppercase select-none">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded border border-border-warm bg-bg-paper" />
                <span className="w-2.5 h-2.5 rounded border border-accent-brown/15 bg-accent-brown/20" />
                <span className="w-2.5 h-2.5 rounded border border-accent-brown/30 bg-accent-brown/45" />
                <span className="w-2.5 h-2.5 rounded border border-accent-brown/50 bg-accent-brown/70" />
                <span className="w-2.5 h-2.5 rounded border border-accent-brown/85 bg-accent-brown" />
                <span>More</span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="border-t border-border-warm/50 pt-4 flex justify-between items-center text-xs">
              <div className="flex items-center space-x-2 text-text-secondary">
                <Calendar className="w-3.5 h-3.5" />
                <span>Active cadence</span>
              </div>
              <span className="font-mono-tag font-bold text-text-primary bg-bg-paper px-2 py-0.5 border border-border-warm rounded text-[10px]">
                94% MERGES
              </span>
            </div>

          </motion.div>

          {/* Right Side: Contributions list (Spans 8 cols on lg screens) */}
          <motion.div
            variants={revealContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {contributions.map(contrib => (
              <motion.div
                key={contrib.id}
                variants={revealVariants}
                className="bg-white-warm border border-border-warm rounded-2xl p-6 space-y-4 hover:shadow-[0_8px_24px_rgba(36,26,23,0.03)] hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  {/* Repo details row */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tag text-[10px] font-bold text-accent-brown uppercase tracking-wider">
                      {contrib.repo}
                    </span>
                    <div className="flex items-center space-x-1 font-mono-tag text-[9px] font-bold text-text-secondary">
                      <GitMerge className="w-3.5 h-3.5 text-accent-brown" />
                      <span>{contrib.status}</span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {contrib.description}
                  </p>

                  {/* PR description block */}
                  <div className="p-3 bg-bg-paper border border-border-warm/70 rounded-lg text-left">
                    <span className="font-mono-tag text-[9px] font-bold text-text-secondary block mb-1">
                      MERGED PULL REQUEST
                    </span>
                    <a
                      href={contrib.prLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif-editorial text-base text-text-primary hover:text-accent-brown font-normal leading-snug flex items-start gap-1 cursor-pointer"
                    >
                      <span>{contrib.prTitle}</span>
                      <ExternalLink className="w-3 h-3 mt-1 shrink-0 opacity-60" />
                    </a>
                  </div>
                </div>

                {/* Card Footer */}
                {contrib.impactNote && (
                  <div className="border-t border-border-warm/40 pt-3 flex items-center justify-between text-[11px] font-sans text-text-secondary">
                    <span>Impact: {contrib.impactNote}</span>
                    <span className="font-mono-tag font-bold text-text-secondary opacity-65 select-none">
                      ★ {contrib.stars.toLocaleString()}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>

      </Container>
    </section>
  );
};
