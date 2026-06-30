import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { revealVariants } from '../hooks/useReveal';
import avatarImg from '../assets/avatar.jpg';
import scrapbookImg from '../assets/scrapbook.png';
import { Calendar, Mail, FileText } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[75vh] flex flex-col justify-center pt-14 pb-10 bg-bg-paper text-text-primary select-none text-left"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Spans 6/12 width): Biography Text & Avatar */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-7"
          >
            {/* Small Soft-rounded Avatar Photo Card */}
            <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border-warm select-none">
              <img
                src={avatarImg}
                alt="Archi Portrait"
                className="w-full h-full object-cover brightness-[0.98]"
              />
            </div>

            {/* Monospace biography text paragraphs */}
            <div className="space-y-6 font-mono-tag text-[15px] sm:text-[16px] text-text-primary/90 leading-[2] tracking-normal select-text">
              <p>
                Hi I'm Archi. I'm a developer and designer who ships tactile, context-aware web interfaces. 
                My focus is on frontend engineering, interactive prototyping, and open-source tools. 
                Currently building interactive applications in AI and XR.
              </p>
            </div>

            {/* 3. Call-to-Action buttons row */}
            <div className="flex flex-wrap gap-4 pt-2 select-none">
              <a
                href="https://calendly.com/archi_k/youth-mentorship"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#241A17] hover:bg-[#3A2E2C] text-[#F8F6F2] font-sans font-medium text-[14px] flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                Book an intro call
              </a>
              <a
                href="mailto:archikanungo2004@gmail.com"
                className="px-5 py-2.5 rounded-xl border border-border-warm bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-primary font-sans font-medium text-[14px] flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                Send an email
              </a>
            </div>

            {/* 4. Social Links Badge Row */}
            <div className="space-y-3 pt-2 text-left">
              <p className="font-sans text-[14.5px] text-text-secondary select-none">
                Here are my <span className="font-bold text-text-primary">socials</span>
              </p>
              
              <div className="flex flex-wrap gap-2.5 select-none">
                <a
                  href="https://github.com/archiik04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-border-warm bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-secondary hover:text-text-primary font-sans font-medium text-[12px] flex items-center gap-1.5 shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <Github className="w-3 h-3" />
                  GitHub
                </a>
                <a
                  href="https://x.com/archi_twt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-border-warm bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-secondary hover:text-text-primary font-sans font-medium text-[12px] flex items-center gap-1.5 shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </a>
                <a
                  href="https://www.linkedin.com/in/archi-kanungo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-border-warm bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-secondary hover:text-text-primary font-sans font-medium text-[12px] flex items-center gap-1.5 shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
                <a
                  href="https://discord.com/users/archi_arsenic04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-border-warm bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-secondary hover:text-text-primary font-sans font-medium text-[12px] flex items-center gap-1.5 shadow-sm transition-all duration-200 cursor-pointer"
                  title="Discord Username: archi_arsenic04"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 127.14 96.36">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.4,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.9-.65,1.76-1.34,2.58-2.07a75.79,75.79,0,0,0,75.76,0c.82.73,1.68,1.42,2.58,2.07a68.43,68.43,0,0,1-10.5,5A77.7,77.7,0,0,0,95.14,85.51a105.73,105.73,0,0,0,31.06-18.83C129,54.65,123.5,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.88,46,53.88,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.12,46,96.12,53,91,65.69,84.69,65.69Z"/>
                  </svg>
                  Discord
                </a>
                <Link
                  to="/resume"
                  className="px-3 py-1.5 rounded-lg border border-border-warm bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-secondary hover:text-text-primary font-sans font-medium text-[12px] flex items-center gap-1.5 shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <FileText className="w-3 h-3" />
                  Resume
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Spans 6/12 width): Scrapbook Collage */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex items-center justify-center relative select-none"
          >
            <div className="w-full max-w-[460px] relative transition-transform duration-500 hover:scale-[1.01]">
              <img
                src={scrapbookImg}
                alt="Scrapbook Collage"
                className="w-full h-auto object-contain brightness-[0.98] drop-shadow-[0_12px_36px_rgba(36,26,23,0.06)]"
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
